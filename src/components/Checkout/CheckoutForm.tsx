import { useCart } from '@/store/cart'
import { normalizePrice } from '@/utils/money'
import { Box, Stack, ThemeProvider, Typography } from '@mui/material'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import ActionsBar from './ActionsBar'
import CustomerFields from './CustomerFields'
import DeliveryFields from './DeliveryFields'
import NoteField from './NoteField'
import OrderSuccess from './OrderSuccess'
import OrderSummary from './OrderSummary'
import PaymentNotice from './PaymentNotice'

import { GOLD_BORDER, lightFormTheme } from './theme'
import type { FormData } from './types'

const API_BASE = import.meta.env.VITE_API_BASE || ''

export default function CheckoutForm() {
  const { items, clear } = useCart()
  const navigate = useNavigate()

  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
    getValues
  } = useForm<FormData>({ mode: 'onChange' })

  const hpRef = useRef<HTMLInputElement>(null)

  const total = useMemo(
    () => items.reduce((s, it) => s + normalizePrice(it.price) * it.qty, 0),
    [items]
  )

  useEffect(() => {
    if (!success) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const t = setTimeout(() => {
      navigate('/')

      setTimeout(() => clear(), 0)
    }, 10000)
    return () => clearTimeout(t)
  }, [success, navigate, clear])

  const onSubmit = async () => {
    setError(null)

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
      customer: { firstName: data.firstName, lastName: data.lastName, phone: data.phone },
      delivery: { city: data.city, address: data.address },
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
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json?.ok === false) throw new Error(json?.error || `HTTP ${res.status}`)

      setSuccess(true)
    } catch (e: any) {
      console.error(e)
      setError(e?.message || 'Не вдалося відправити замовлення. Спробуйте ще раз.')
    }
  }

  if (success) return <OrderSuccess />

  return (
    <ThemeProvider theme={lightFormTheme}>
      <Box
        id="checkout"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          mt: 2,
          borderRadius: 4,
          border: `1px solid ${GOLD_BORDER}`,
          background: 'linear-gradient(180deg,#FFFFFF 0%,#FBF6F0 100%)',
          p: { xs: 2, md: 3 }
        }}
      >
        <input
          ref={hpRef}
          name="company"
          autoComplete="off"
          tabIndex={-1}
          style={{ position: 'absolute', left: -5000, top: 0 }}
          aria-hidden
        />

        <Stack spacing={2}>
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

          <ActionsBar disabled={!isValid || isSubmitting} />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}
