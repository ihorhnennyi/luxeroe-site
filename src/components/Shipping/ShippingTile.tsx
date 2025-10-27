import type { ShippingItem } from '@/data/shipping'
import { Box, Stack, Typography } from '@mui/material'
import IconToken from './IconToken'

const BRAND = '#2E3D2F'

export default function ShippingTile({ item }: { item: ShippingItem }) {
  return (
    <Box
      sx={{
        height: '100%',
        borderRadius: 16,
        overflow: 'hidden',
        background: 'linear-gradient(180deg,#FFFFFF 0%, #FBF6F0 100%)',
        border: '1px solid rgba(210,170,130,.28)',
        boxShadow: '0 26px 80px rgba(0,0,0,.10)',
        transition: 'transform .22s ease, box-shadow .22s ease',
        '&:hover': {
          transform: { md: 'translateY(-3px)' },
          boxShadow: { md: '0 36px 110px rgba(0,0,0,.14)' }
        }
      }}
    >
      <Stack direction="row" spacing={2.25} alignItems="center" sx={{ p: { xs: 2, md: 2.75 } }}>
        <Box sx={{ ml: { xs: 0, md: -0.5 } }}>
          <IconToken k={item.icon} />
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <Typography
            sx={{
              fontWeight: 900,
              color: BRAND,
              fontSize: { xs: 18, md: 20 },
              lineHeight: 1.2,
              mb: 0.5
            }}
          >
            {item.title}
          </Typography>
          <Typography sx={{ color: '#6B5E55' }}>{item.text}</Typography>
        </Box>
      </Stack>
    </Box>
  )
}
