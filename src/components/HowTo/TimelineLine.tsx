import { Box } from '@mui/material'

const GOLD_SOFT = 'rgba(214,154,98,.45)'

export default function TimelineLine() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        top: { xs: 12, md: 0 },
        bottom: { xs: 12, md: 0 },
        left: { xs: 14, md: '50%' },
        transform: { md: 'translateX(-50%)' },
        width: 2,
        background: `linear-gradient(180deg, ${GOLD_SOFT} 0%, rgba(214,154,98,.85) 50%, ${GOLD_SOFT} 100%)`,
        boxShadow: 'inset 0 0 0 1px rgba(214,154,98,.25)'
      }}
    />
  )
}
