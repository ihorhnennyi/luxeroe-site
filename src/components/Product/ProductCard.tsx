import { AddToCartModal } from '@/components'
import { CTAButton } from '@/components/atoms'
import { useDisclosure } from '@/hooks/useDisclosure'
import { useCart } from '@/store/cart'
import type { Product } from '@/types/product'
import { normalizePrice } from '@/utils/money'
import { Box, Chip, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const BRAND = '#2E3D2F'
const MUTED = '#6B5E55'

function Price({ price, old }: { price: number; old?: number }) {
  return (
    <Stack direction="row" spacing={1} alignItems="baseline">
      <Typography sx={{ fontWeight: 900, color: BRAND, fontSize: 20 }}>{price} грн</Typography>
      {!!old && (
        <Typography sx={{ color: MUTED, textDecoration: 'line-through', opacity: 0.6 }}>
          {old} грн
        </Typography>
      )}
    </Stack>
  )
}

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Typography sx={{ color: BRAND, fontSize: 14 }}>
      <b>{label}:</b>&nbsp;{value}
    </Typography>
  )
}

export default function ProductCard({ p }: { p: Product }) {
  const w = p.weights[0]
  const modal = useDisclosure(false)
  const { add } = useCart()

  const handleAdd = () => {
    add({
      product: p,
      label: w?.label,
      price: normalizePrice(w?.price),
      qty: 1
    })
    modal.onOpen()
  }

  return (
    <>
      <Box
        sx={{
          borderRadius: 8,
          overflow: 'hidden',
          border: '1px solid rgba(210,170,130,.25)',
          boxShadow: '0 18px 60px rgba(0,0,0,.12)',
          background: 'linear-gradient(180deg,#FFFFFF 0%,#FBF6F0 100%)',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 560
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: { xs: 280, sm: 300, md: 340 },
            overflow: 'hidden',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            backgroundColor: '#eee'
          }}
        >
          <Box
            component="img"
            src={p.image}
            alt={p.title}
            loading="lazy"
            sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {!!p.badge && (
            <Chip
              size="small"
              label={p.badge === 'sale' ? '-40%' : p.badge === 'new' ? 'Новинка' : p.badge}
              sx={{
                position: 'absolute',
                top: 10,
                left: 10,
                bgcolor: p.badge === 'sale' ? '#E87C2E' : '#1E6E44',
                color: '#fff',
                fontWeight: 700
              }}
            />
          )}
        </Box>

        <Box
          sx={{ p: { xs: 2, md: 2.25 }, display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}
        >
          <Typography sx={{ fontWeight: 900, color: BRAND, fontSize: { xs: 20, md: 22 } }}>
            {p.title}
          </Typography>

          {!!p.short && <Typography sx={{ color: MUTED, fontSize: 14 }}>{p.short}</Typography>}

          {!!p.highlights?.length && (
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mt: 0.5 }}>
              {p.highlights.map((h, i) => (
                <Chip
                  key={i}
                  label={h}
                  size="small"
                  sx={{ bgcolor: 'rgba(17,51,34,.07)', color: BRAND, fontWeight: 700 }}
                />
              ))}
            </Stack>
          )}

          <Stack spacing={0.5} sx={{ mt: 0.5 }}>
            <Spec label="Консистенція" value={p.specs?.consistency} />
            <Spec label="Розмір ікринок" value={p.specs?.size} />
            <Spec label="Колір" value={p.category === 'black' ? 'Чорний' : p.specs?.color} />
            <Typography sx={{ color: MUTED, fontSize: 12.5 }}>
              Тара: {p.specs?.container}
            </Typography>
          </Stack>

          <Divider sx={{ my: 1, borderColor: 'rgba(0,0,0,.08)' }} />

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Chip
              label={w.label}
              size="small"
              sx={{ bgcolor: '#E7F3EC', color: '#0F6A3C', fontWeight: 900 }}
            />
            <Price price={w.price} old={w.oldPrice} />
          </Stack>

          <Box sx={{ mt: 'auto' }}>
            <CTAButton
              text="В кошик"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault()
                handleAdd()
              }}
              fullWidth
            />
          </Box>
        </Box>
      </Box>

      <AddToCartModal open={modal.open} onClose={modal.onClose} product={p} />
    </>
  )
}
