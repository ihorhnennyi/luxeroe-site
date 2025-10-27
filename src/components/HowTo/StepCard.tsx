import type { Step } from '@/data/howto'
import { Box, Typography } from '@mui/material'

const BRAND = '#2E3D2F'
const GOLD_DASH = 'rgba(214,154,98,.85)'

export default function StepCard({ s, side }: { s: Step; side: 'left' | 'right' }) {
  return (
    <Box
      sx={{
        maxWidth: 640,
        ml: { md: side === 'left' ? 0 : 'auto' },
        mr: { md: side === 'left' ? 'auto' : 0 },
        background: '#fff',
        borderRadius: 5,
        border: `2px dashed ${GOLD_DASH}`,
        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 2.5 }
      }}
    >
      <Typography sx={{ fontWeight: 900, color: BRAND, fontSize: { xs: 18, md: 20 }, mb: 0.5 }}>
        {s.title}
      </Typography>
      <Typography sx={{ color: 'rgba(46,61,47,.75)' }}>{s.text}</Typography>
    </Box>
  )
}
