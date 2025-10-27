import { formatUAH } from '@/utils/money'
import { Stack, Typography } from '@mui/material'
import { BRAND_COLOR } from './theme'

export default function OrderSummary({ total }: { total: number }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography sx={{ fontWeight: 900, color: BRAND_COLOR }}>Разом</Typography>
      <Typography sx={{ fontWeight: 900, color: BRAND_COLOR }}>{formatUAH(total)}</Typography>
    </Stack>
  )
}
