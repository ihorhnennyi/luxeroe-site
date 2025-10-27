import data from '@/data/ticker'
import { keyframes } from '@emotion/react'
import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

const slide = keyframes`
  0%   { transform: translate3d(0,0,0); }
  100% { transform: translate3d(var(--distance),0,0); }
`

export default function TopTicker() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const segRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(-1000)
  const [duration, setDuration] = useState(30)
  const [repeat, setRepeat] = useState(1)

  const baseItems = data.messages
  const gap = 40
  const speed = Math.max(20, data.speedPxPerSec ?? 80)

  const segmentEl = useMemo(() => {
    const repeated: typeof baseItems = Array.from({ length: repeat }).flatMap(() => baseItems)
    return (
      <Stack direction="row" alignItems="center" gap={`${gap}px`} flexWrap="nowrap">
        {repeated.map((m, i) => (
          <Typography
            key={i}
            variant="body2"
            sx={{
              fontWeight: 700,
              whiteSpace: 'nowrap',
              letterSpacing: 0.2,
              lineHeight: 1.2,
              color: m.color || 'text.primary'
            }}
          >
            {m.text}
          </Typography>
        ))}
      </Stack>
    )
  }, [baseItems, repeat])

  useLayoutEffect(() => {
    const ensureWidth = () => {
      const vw = window.innerWidth || 1200
      const w = segRef.current?.scrollWidth ?? 0
      if (w < vw) {
        const needed = Math.max(2, Math.ceil((vw * 1.2) / Math.max(1, w)))
        setRepeat(prev => Math.max(prev, needed))
      }
    }
    ensureWidth()
  }, [])

  useEffect(() => {
    const recalc = () => {
      const w = segRef.current?.scrollWidth ?? 1200
      setDistance(-w)
      setDuration(Math.max(8, Math.min(120, w / speed)))
    }
    recalc()
    const ro = new ResizeObserver(recalc)
    if (segRef.current) ro.observe(segRef.current)
    window.addEventListener('resize', recalc)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', recalc)
    }
  }, [repeat, speed, baseItems.length])

  useEffect(() => {
    const applyH = () => {
      const h = wrapRef.current?.offsetHeight ?? 0
      document.documentElement.style.setProperty('--tickerH', `${h}px`)
    }
    applyH()
    const ro = new ResizeObserver(applyH)
    if (wrapRef.current) ro.observe(wrapRef.current)
    window.addEventListener('resize', applyH)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', applyH)
    }
  }, [])

  return (
    <Box
      ref={wrapRef}
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: t => t.zIndex.appBar + 2,
        width: '100%',
        background: 'linear-gradient(180deg, #FFF6EB 0%, #FFF2E1 100%)',
        borderBottom: '1px solid rgba(210, 170, 130, 0.25)'
      }}
    >
      <Box sx={{ overflow: 'hidden', py: 1, userSelect: 'none' }}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            animation: `${slide} ${duration}s linear infinite`,
            willChange: 'transform',
            transform: 'translateZ(0)',
            '&:hover': { animationPlayState: 'paused' },
            '--distance': `${distance}px` as any
          }}
        >
          <Box ref={segRef} sx={{ display: 'inline-flex', alignItems: 'center' }}>
            {segmentEl}
          </Box>
          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>{segmentEl}</Box>
        </Box>
      </Box>
    </Box>
  )
}
