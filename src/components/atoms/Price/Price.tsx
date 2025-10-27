import { Stack, Typography } from '@mui/material'

export default function Price({ price, old }: { price: number; old?: number }) {
  return (
    <Stack direction="row" spacing={1} alignItems="baseline">
      <Typography sx={{ fontSize: 22, fontWeight: 900 }}>{price} грн</Typography>
      {!!old && (
        <Typography sx={{ fontSize: 14, color: 'text.secondary', textDecoration: 'line-through' }}>
          {old} грн
        </Typography>
      )}
    </Stack>
  )
}
