import { Box, Button, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom' // ⬅️ добавили

const BRAND = '#2E3D2F'
const MUTED = '#6B5E55'
const GOLD_BORDER = 'rgba(210,170,130,.25)'

export default function CartEmpty() {
  return (
    <Box sx={{ mt: { xs: 2, md: 3 } }}>
      <Typography
        component="h1"
        sx={{ fontWeight: 900, fontSize: { xs: 26, md: 34 }, color: BRAND, mb: 2 }}
      >
        Ваше замовлення
      </Typography>

      <Box
        sx={{
          borderRadius: 5,
          p: { xs: 3, md: 5 },
          textAlign: 'center',
          border: `1px solid ${GOLD_BORDER}`,
          background: 'linear-gradient(180deg,#FFF9F0 0%,#FBF6F0 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,.6)'
        }}
      >
        <Stack spacing={1} alignItems="center">
          <Typography sx={{ fontWeight: 900, color: BRAND, fontSize: { xs: 16, md: 18 } }}>
            Кошик порожній
          </Typography>
          <Typography sx={{ color: MUTED }}>Додайте товар із каталогу.</Typography>

          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            sx={{
              mt: 1,
              px: 2.5,
              borderRadius: 999,
              fontWeight: 900,
              textTransform: 'none',
              color: '#fff',
              background: 'linear-gradient(180deg,#23A07A 0%, #0F6A3C 100%)',
              boxShadow:
                '0 20px 44px rgba(34,160,122,.30), 0 6px 16px rgba(0,0,0,.16), inset 0 0 0 1px rgba(255,255,255,.18)',
              '&:hover': { background: 'linear-gradient(180deg,#2AB58C 0%, #0d5c34 100%)' }
            }}
          >
            На головну
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
