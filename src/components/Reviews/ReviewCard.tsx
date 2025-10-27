import type { Review } from '@/data/reviews'
import { Box, Typography } from '@mui/material'

const GOLD = '#D69A62'

export default function ReviewCard({ r }: { r: Review }) {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 5,
        overflow: 'hidden',
        border: `2px solid ${GOLD}`,
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        aspectRatio: { xs: '3/4', md: '4/5' },
        scrollSnapAlign: 'center'
      }}
    >
      <Box
        component="img"
        src={r.image}
        alt={r.title || 'Відгук'}
        loading="lazy"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />

      {r.title && (
        <Typography
          sx={{
            position: 'absolute',
            top: 18,
            left: 18,
            right: 18,
            color: '#fff',
            fontWeight: 800,
            letterSpacing: 0.3,
            fontSize: 18,
            textShadow: '0 3px 10px rgba(0,0,0,0.6)'
          }}
        >
          {r.title}
        </Typography>
      )}
    </Box>
  )
}
