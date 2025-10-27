import { Chip, Stack, Typography } from '@mui/material'

export default function PriceBadge({ label, price }: { label: string; price: string }) {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{
        position: 'absolute',
        right: 16,
        bottom: 16,
        bgcolor: 'rgba(214,132,70,0.95)',
        color: '#fff',
        borderRadius: 999,
        px: 1,
        py: 0.5,
        boxShadow: '0 10px 30px rgba(0,0,0,.2)'
      }}
    >
      <Chip
        label={label}
        size="small"
        sx={{
          bgcolor: 'rgba(255,255,255,.25)',
          color: '#fff',
          fontWeight: 700
        }}
      />
      <Typography sx={{ fontSize: 20, fontWeight: 900, px: 1 }}>{price}</Typography>
    </Stack>
  )
}
