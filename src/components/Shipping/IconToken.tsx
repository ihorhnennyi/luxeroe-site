import type { ShippingItem } from '@/data/shipping'
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded'
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { Box } from '@mui/material'

export default function IconToken({ k }: { k: ShippingItem['icon'] }) {
  const Icon =
    k === 'cart'
      ? ShoppingCartRoundedIcon
      : k === 'truck'
      ? LocalShippingRoundedIcon
      : CreditCardRoundedIcon

  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: 58, md: 64 },
        height: { xs: 58, md: 64 },
        borderRadius: 10,
        display: 'grid',
        placeItems: 'center',
        color: '#5C2D07',
        background: 'linear-gradient(180deg,#FBE2C7 0%, #E7B07D 55%, #D79A62 100%)',
        border: '1px solid rgba(214,154,98,.35)',
        boxShadow: '0 18px 40px rgba(0,0,0,.12), inset 0 0 0 2px rgba(255,255,255,.35)',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: -8,
          borderRadius: 12,
          background: 'radial-gradient(60% 60% at 50% 30%, rgba(215,154,98,.32), transparent 60%)',
          filter: 'blur(12px)',
          zIndex: -1
        }
      }}
    >
      <Icon sx={{ fontSize: { xs: 26, md: 30 } }} />
    </Box>
  )
}
