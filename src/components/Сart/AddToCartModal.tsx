import { CTAButton } from '@/components/atoms'
import { useCart } from '@/store/cart'
import type { Product } from '@/types/product'
import { formatUAH, normalizePrice } from '@/utils/money'
import { keyframes } from '@emotion/react'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography
} from '@mui/material'
import { useMemo, useState } from 'react'
import QuantityStepper from './QuantityStepper'

const BRAND = '#2E3D2F'
const MUTED = '#6B5E55'
const GOLD_BORDER = 'rgba(210,170,130,.28)'

const fadeIn = keyframes`
  from { opacity: .0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`

type Props = {
  open: boolean
  onClose: () => void
  product: Product
  onConfirm?: (qty: number) => void
  onCheckout?: () => void
  lockQty?: boolean
}

function FixedQtyBadge() {
  return (
    <Box
      sx={{
        px: 1.25,
        py: 0.5,
        borderRadius: 999,
        fontWeight: 800,
        fontSize: 14,
        color: BRAND,
        border: '1px solid rgba(210,170,130,.28)',
        background: 'linear-gradient(180deg,#FFFFFF 0%, #FBF6F0 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.65)'
      }}
    >
      Кількість: 1
    </Box>
  )
}

export default function AddToCartModal({
  open,
  onClose,
  product,
  onConfirm,
  onCheckout,
  lockQty
}: Props) {
  const [qty, setQty] = useState(1)
  const { add } = useCart()

  const w = product.weights?.[0]
  const unitPrice = useMemo(() => normalizePrice(w?.price), [w?.price])
  const unitOldPrice = useMemo(() => normalizePrice(w?.oldPrice), [w?.oldPrice])

  const effectiveQty = lockQty ? 1 : qty
  const subtotal = useMemo(() => unitPrice * effectiveQty, [unitPrice, effectiveQty])

  const addDelta = () => {
    const delta = effectiveQty - 1
    if (delta > 0) {
      add({ product, label: w?.label, price: unitPrice, qty: delta })
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        backdrop: { sx: { background: 'rgba(245,233,220,.60)', backdropFilter: 'blur(3px)' } }
      }}
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: 'hidden',
          background: 'linear-gradient(180deg,#FFFFFF 0%, #FBF6F0 100%)',
          border: `1px solid ${GOLD_BORDER}`,
          boxShadow: '0 30px 90px rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.65)',
          animation: `${fadeIn} .24s ease`
        }
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          fontWeight: 900,
          color: BRAND,
          letterSpacing: 0.2,
          borderBottom: `1px solid ${GOLD_BORDER}`,
          background:
            'linear-gradient(180deg, rgba(255,255,255,.85) 0%, rgba(251,246,240,.85) 100%)'
        }}
      >
        До кошика додано
        <IconButton
          onClick={onClose}
          aria-label="закрити"
          sx={{
            ml: 'auto',
            color: MUTED,
            '&:hover': { color: BRAND, background: 'rgba(0,0,0,.04)' }
          }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        dividers
        sx={{ pt: 2, pb: 2.25, borderTop: 'none', borderBottom: 'none', background: 'transparent' }}
      >
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              flex: '0 0 80px',
              width: 80,
              height: 80,
              borderRadius: 2,
              overflow: 'hidden',
              border: `1px solid ${GOLD_BORDER}`,
              boxShadow: '0 14px 30px rgba(0,0,0,.10)',
              background: '#eee'
            }}
          >
            <Box
              component="img"
              src={product.image}
              alt={product.title}
              loading="lazy"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography
              sx={{
                fontWeight: 900,
                color: BRAND,
                lineHeight: 1.15,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}
            >
              {product.title}
            </Typography>
            <Typography sx={{ color: '#6B5E55', mt: 0.25 }}>{w?.label}</Typography>

            <Stack direction="row" spacing={1} alignItems="baseline" sx={{ mt: 0.75 }}>
              <Typography sx={{ fontWeight: 900, color: BRAND, fontSize: 18 }}>
                {formatUAH(unitPrice)}
              </Typography>
              {unitOldPrice > 0 && (
                <Typography sx={{ color: '#6B5E55', textDecoration: 'line-through', opacity: 0.6 }}>
                  {formatUAH(unitOldPrice)}
                </Typography>
              )}
            </Stack>
          </Box>
        </Stack>

        <Divider sx={{ my: 1.75, borderColor: 'rgba(0,0,0,.06)' }} />

        {lockQty ? (
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <FixedQtyBadge />
            <Typography sx={{ color: BRAND, fontWeight: 900 }}>{formatUAH(subtotal)}</Typography>
          </Stack>
        ) : (
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <QuantityStepper value={qty} onChange={setQty} min={1} max={99} />
            <Typography sx={{ color: BRAND, fontWeight: 900 }}>{formatUAH(subtotal)}</Typography>
          </Stack>
        )}

        <Stack spacing={1.1} sx={{ mt: 2 }}>
          <CTAButton
            text="Оформити замовлення"
            href="/cart#checkout"
            onClick={() => {
              addDelta()
              onConfirm?.(effectiveQty)
              onCheckout?.()
              onClose()
            }}
            startIcon={<CheckRoundedIcon />}
          />

          <Button
            onClick={() => {
              addDelta()
              onConfirm?.(effectiveQty)
              onClose()
            }}
            fullWidth
            variant="outlined"
            sx={{
              borderRadius: 999,
              fontWeight: 800,
              textTransform: 'none',
              color: BRAND,
              borderColor: 'rgba(46,61,47,.28)',
              background: 'linear-gradient(180deg,#FFFFFF 0%, #FBF6F0 100%)',
              '&:hover': { borderColor: 'rgba(46,61,47,.45)', background: 'rgba(0,0,0,.02)' }
            }}
          >
            Продовжити покупки
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
