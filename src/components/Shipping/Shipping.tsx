import { SHIPPING_ITEMS } from '@/data/shipping'
import { Box, Container, Stack, Typography } from '@mui/material'
import ShippingTile from './ShippingTile'

const BRAND = '#2E3D2F'

export default function Shipping() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(900px 420px at 50% -8%, rgba(214,132,70,.08) 0%, rgba(214,132,70,0) 60%)',
          zIndex: -1
        }
      }}
    >
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 3 } }}>
        <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            component="h2"
            sx={{
              fontWeight: 900,
              color: BRAND,
              fontSize: { xs: 30, md: 44 },
              lineHeight: 1.1
            }}
          >
            Доставка та оплата
          </Typography>
          <Typography sx={{ color: '#6B5E55', maxWidth: 780, fontSize: { xs: 15, md: 16 } }}>
            Чітко, швидко і без передоплат — все для вашої зручності.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 2, md: 3 }
          }}
        >
          {SHIPPING_ITEMS.map(item => (
            <Box
              key={item.id}
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(50% - 12px)' },
                maxWidth: { xs: '100%', md: 'calc(50% - 12px)' },
                display: 'flex'
              }}
            >
              <ShippingTile item={item} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
