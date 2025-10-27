import QuantityStepper from '@/components/Сart/QuantityStepper'
import { useCart } from '@/store/cart'
import { formatUAH, normalizePrice } from '@/utils/money'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded'
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'

const BRAND = '#2E3D2F'
const GOLD_BORDER = 'rgba(210,170,130,.25)'
const MUTED = '#6B5E55'

export default function CartHeader() {
  const { items, remove, inc, dec } = useCart()
  if (items.length === 0) return null

  const total = items.reduce((s, it) => s + normalizePrice(it.price) * it.qty, 0)

  return (
    <Stack spacing={2} sx={{ mb: 2 }}>
      <Typography
        component="h1"
        sx={{ fontWeight: 900, fontSize: { xs: 26, md: 34 }, color: BRAND }}
      >
        Ваше замовлення
      </Typography>

      <Box sx={{ borderTop: `1px solid ${GOLD_BORDER}` }}>
        {items.map((it, idx) => {
          const line = normalizePrice(it.price) * it.qty
          const promo = it.productId.startsWith('promo-')
          return (
            <Box key={it.id}>
              {idx > 0 && <Divider sx={{ borderColor: 'rgba(0,0,0,.06)' }} />}

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ py: 1.25, '&:hover .delete-btn': { opacity: 1 } }}
              >
                <Box
                  component="img"
                  src={it.image}
                  alt={it.title}
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    objectFit: 'cover',
                    border: `1px solid ${GOLD_BORDER}`
                  }}
                />

                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography sx={{ fontWeight: 900, color: BRAND, lineHeight: 1.1 }}>
                    {it.title}
                  </Typography>
                  {!!it.label && (
                    <Typography sx={{ color: MUTED, fontSize: 13, mt: 0.25 }}>
                      {it.label}
                    </Typography>
                  )}

                  {promo ? (
                    <Typography sx={{ color: MUTED, fontSize: 13, mt: 0.25 }}>
                      Кількість: 1
                    </Typography>
                  ) : (
                    <Box sx={{ mt: 0.25 }}>
                      <QuantityStepper
                        value={it.qty}
                        min={1}
                        max={99}
                        onChange={n => {
                          if (n > it.qty) inc(it.id)
                          else if (n < it.qty) dec(it.id)
                        }}
                      />
                    </Box>
                  )}
                </Box>

                <Typography
                  sx={{ fontWeight: 900, color: BRAND, minWidth: 92, textAlign: 'right' }}
                >
                  {formatUAH(line)}
                </Typography>

                <IconButton
                  onClick={() => remove(it.id)}
                  title="Видалити"
                  className="delete-btn"
                  sx={{
                    opacity: 0.85,

                    color: '#C6744B',
                    '& .MuiSvgIcon-root': { color: '#C6744B' },
                    '&:hover': {
                      opacity: 1,
                      color: '#A04B29',
                      '& .MuiSvgIcon-root': { color: '#A04B29' }
                    }
                  }}
                >
                  <DeleteOutlineRoundedIcon />
                </IconButton>
              </Stack>
            </Box>
          )
        })}
      </Box>

      <Stack direction="row" justifyContent="flex-end">
        <Typography sx={{ fontWeight: 900, color: BRAND, fontSize: 18 }}>
          Разом: {formatUAH(total)}
        </Typography>
      </Stack>
    </Stack>
  )
}
