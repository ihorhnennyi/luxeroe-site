import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { Badge, Box, Fab } from '@mui/material'
import { useEffect, useMemo, useRef, useState } from 'react'
import { brand, breathe, pulse, wiggle } from './fabTokens'

export default function CartFab({ count = 0, onClick }: { count?: number; onClick?: () => void }) {
  const [shake, setShake] = useState(false)
  const prev = useRef(count)

  const reduced = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )

  useEffect(() => {
    if (count !== prev.current) {
      prev.current = count
      if (count > 0) {
        if ('vibrate' in navigator)
          try {
            navigator.vibrate([30, 50, 30])
          } catch {}
        if (!reduced) {
          setShake(true)
          const t = setTimeout(() => setShake(false), 700 * 3)
          return () => clearTimeout(t)
        }
      }
    }
  }, [count, reduced])

  return (
    <Box sx={{ position: 'relative' }}>
      {count > 0 && !reduced && (
        <>
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: -6,
              borderRadius: 999,
              background:
                'radial-gradient(60% 60% at 50% 50%, rgba(34,160,122,.35) 0%, rgba(34,160,122,0) 70%)',
              filter: 'blur(7px)',
              animation: `${pulse} 2.2s ease-out infinite`,
              zIndex: 0
            }}
          />
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: -12,
              borderRadius: 999,
              background:
                'radial-gradient(60% 60% at 50% 50%, rgba(34,160,122,.22) 0%, rgba(34,160,122,0) 70%)',
              filter: 'blur(12px)',
              animation: `${pulse} 3s ease-out infinite`,
              animationDelay: '0.5s',
              zIndex: 0
            }}
          />
        </>
      )}

      <Badge
        color="error"
        overlap="circular"
        max={99}
        invisible={!count}
        badgeContent={count}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          position: 'relative',
          '& .MuiBadge-badge': {
            minWidth: 18,
            height: 18,
            lineHeight: '18px',
            fontWeight: 900,
            fontSize: 12,
            px: 0.25,
            top: -4,
            right: -4,
            transform: 'none',
            zIndex: 10,
            pointerEvents: 'none',
            boxShadow: '0 4px 10px rgba(0,0,0,.30)'
          }
        }}
      >
        <Box
          sx={{
            display: 'inline-block',
            animation: reduced ? 'none' : `${breathe} 3.2s ease-in-out infinite`,
            ...(shake && !reduced
              ? {
                  animation: `${wiggle} 700ms ease-in-out 0s 3, ${breathe} 3.2s ease-in-out infinite`
                }
              : {})
          }}
        >
          <Fab
            aria-label="Відкрити кошик"
            onClick={onClick}
            sx={{
              width: 56,
              height: 56,
              position: 'relative',
              zIndex: 1,
              color: '#fff',
              background: brand.green,
              boxShadow:
                '0 22px 46px rgba(34,160,122,.35), 0 6px 18px rgba(0,0,0,.18), inset 0 0 0 1px rgba(255,255,255,.18)',
              '&:hover': { background: brand.greenHover }
            }}
          >
            <ShoppingCartRoundedIcon sx={{ fontSize: 24 }} />
          </Fab>
        </Box>
      </Badge>
    </Box>
  )
}
