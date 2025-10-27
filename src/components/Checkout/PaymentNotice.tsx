import { Box, Typography } from '@mui/material'

export default function PaymentNotice() {
  return (
    <Box
      sx={{
        px: 2,
        py: 1.2,
        borderRadius: 2,
        bgcolor: 'rgba(15,106,60,.08)',
        color: '#2E3D2F',
        fontWeight: 800
      }}
    >
      <Typography sx={{ fontWeight: 800 }}>
        Оплата: Накладений платіж — сплачуєте при отриманні на Новій пошті.
      </Typography>
    </Box>
  )
}
