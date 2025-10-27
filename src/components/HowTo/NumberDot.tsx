import { Box, Typography } from '@mui/material'

const GOLD_SOFT = 'rgba(214,154,98,.45)'

export default function NumberDot({ n }: { n: number }) {
  return (
    <Box
      sx={{
        justifySelf: 'center',
        position: 'relative',
        width: { xs: 36, md: 48 },
        height: { xs: 36, md: 48 },
        borderRadius: '50%',
        background: 'radial-gradient(120% 120% at 30% 30%, #F9C08A 0%, #E7B07D 55%, #D79A62 100%)',
        boxShadow:
          '0 18px 40px rgba(0,0,0,.18), inset 0 0 0 2px rgba(255,255,255,.35), inset 0 -8px 18px rgba(0,0,0,.12)',
        border: `1px solid ${GOLD_SOFT}`,
        display: 'grid',
        placeItems: 'center',
        zIndex: 2
      }}
    >
      <Typography sx={{ fontWeight: 900, color: '#5C2D07' }}>{n}</Typography>
    </Box>
  )
}
