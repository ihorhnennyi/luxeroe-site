import { Box, Zoom } from '@mui/material'
import { useEffect, useState } from 'react'
import CartFab from './CartFab'
import ScrollTopFab from './ScrollTopFab'

export type FloatingActionsProps = {
  cartCount?: number
  onCartClick?: () => void
  threshold?: number
  right?: number
}

export default function FloatingActions({
  cartCount = 0,
  onCartClick,
  threshold = 280,
  right = 14
}: FloatingActionsProps) {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  const toTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      window.scrollTo(0, 0)
    }
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        right: { xs: right, md: right + 6 },
        bottom: `calc(14px + env(safe-area-inset-bottom))`,
        zIndex: theme => theme.zIndex.fab ?? 1200,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.25,
        pointerEvents: 'none'
      }}
    >
      <Zoom in>
        <Box sx={{ pointerEvents: 'auto' }}>
          <CartFab count={cartCount} onClick={onCartClick} />
        </Box>
      </Zoom>

      <Zoom in={showTop}>
        <Box sx={{ pointerEvents: 'auto' }}>
          <ScrollTopFab onClick={toTop} />
        </Box>
      </Zoom>
    </Box>
  )
}
