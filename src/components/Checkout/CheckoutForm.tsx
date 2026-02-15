// src/components/Checkout/CheckoutForm.tsx
import { useCart } from '@/store/cart'
import { normalizePrice } from '@/utils/money'
import { Box, Stack, ThemeProvider, Typography } from '@mui/material'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import ActionsBar from './ActionsBar'
import CustomerFields from './CustomerFields'
import DeliveryFields from './DeliveryFields'
import NoteField from './NoteField'
import OrderSummary from './OrderSummary'
import PaymentNotice from './PaymentNotice'

import { GOLD_BORDER, lightFormTheme } from './theme'
import type { FormData } from './types'

const API_BASE = import.meta.env.VITE_API_BASE || ''

const normalizePhone = (v: string) => {
  const digits = (v || '').replace(/[^\d]/g, '')
  return digits ? `+${digits}` : ''
}

export default function CheckoutForm() {
  const { items, clear, setOrderJustSubmitted } = useCart()

  const [error, setError] = useState<string | null>(null)

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
    getValues
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      city: '',
      address: '',
      note: ''
    }
  })

  const formRef = useRef<HTMLFormElement>(null)
  const hpRef = useRef<HTMLInputElement>(null)

  const total = useMemo(
    () => items.reduce((s, it) => s + normalizePrice(it.price) * it.qty, 0),
    [items]
  )


  const blurAllInputs = () => {
    // Скрыть клавиатуру на мобилках
    try {
      ;(document.activeElement as HTMLElement | null)?.blur?.()
      formRef.current
        ?.querySelectorAll<HTMLElement>('input, textarea, select, [contenteditable="true"]')
        .forEach(el => el.blur())
    } catch {}
  }

  const onSubmit = async () => {
    setError(null)
    blurAllInputs()

    const data = getValues()
    if (!data.firstName || !data.lastName || !data.phone || !data.city || !data.address) {
      setError('Будь ласка, заповніть усі обовʼязкові поля.')
      return
    }
    if (items.length === 0) {
      setError('Кошик порожній.')
      return
    }

    const payload = {
      kind: 'order' as const,
      customer: {
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        phone: normalizePhone(data.phone)
      },
      delivery: { city: data.city.trim(), address: data.address.trim() },
      items: items.map(it => ({
        title: it.title,
        label: it.label,
        qty: it.qty,
        price: Number(normalizePrice(it.price))
      })),
      total,
      sourceUrl: typeof window !== 'undefined' ? `${window.location.origin}/cart` : undefined,
      company: hpRef.current?.value || ''
    }

    try {
      const res = await fetch(`${API_BASE}/api/telegram/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = await res.json().catch(() => ({}))
      if (json?.ok === false) throw new Error(json?.error || 'Помилка сервера')
      clear()
      setOrderJustSubmitted(true)
    } catch (e: any) {
      console.error(e)
      setError(e?.message || 'Не вдалося відправити замовлення. Спробуйте ще раз.')
    }
  }

  return (
    <ThemeProvider theme={lightFormTheme}>
      <Box
        id="checkout"
        component="form"
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-busy={isSubmitting}
        sx={{
          mt: 2,
          borderRadius: 4,
          border: `1px solid ${GOLD_BORDER}`,
          background: 'linear-gradient(180deg,#FFFFFF 0%,#FBF6F0 100%)',
          p: { xs: 2, md: 3 },
          // пока отправляем — блокируем клики по форме, чтобы не было дабл-сабмита
          pointerEvents: isSubmitting ? 'none' : 'auto'
          // но кнопку сабмита мы всё равно нажали — для этого обернули логику в ActionsBar
        }}
      >
        {/* Honeypot */}
        <input
          ref={hpRef}
          name="company"
          autoComplete="off"
          tabIndex={-1}
          style={{ position: 'absolute', left: -5000, top: 0 }}
          aria-hidden
        />

        <Stack spacing={2} sx={{ opacity: isSubmitting ? 0.85 : 1 }}>
          <OrderSummary total={total} />
          <PaymentNotice />

          <CustomerFields control={control} />
          <DeliveryFields control={control} />
          <NoteField control={control} />

          {error && (
            <Typography color="error" sx={{ fontWeight: 500, mt: 1, textAlign: 'center' }}>
              {error}
            </Typography>
          )}

          <ActionsBar disabled={!isValid || isSubmitting} loading={isSubmitting} />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}
