import { CTAButton } from '@/components/atoms'
import { REVIEWS } from '@/data/reviews'
import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import ReviewCard from './ReviewCard'

const BRAND = '#2E3D2F'

export default function Reviews() {
  const isMobile = useMediaQuery('(max-width:900px)')
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!isMobile) return
    const el = trackRef.current
    if (!el) return

    const scrollToIndex = (i: number) => {
      const child = el.children[i] as HTMLElement | undefined
      if (!child) return
      el.scrollTo({
        left: child.offsetLeft - 8,
        behavior: 'smooth'
      })
    }

    scrollToIndex(index)

    const id = setInterval(() => {
      setIndex(prev => {
        const next = (prev + 1) % REVIEWS.length
        scrollToIndex(next)
        return next
      })
    }, 2000)

    return () => clearInterval(id)
  }, [isMobile, index])

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 2 } }}>
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 3 } }}>
        <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            component="h2"
            sx={{ fontWeight: 900, color: BRAND, fontSize: { xs: 28, md: 40 }, lineHeight: 1.15 }}
          >
            Відгуки клієнтів
          </Typography>
          <Typography sx={{ color: '#6B5E55', maxWidth: 680, fontSize: 16 }}>
            Справжні сторіс та рекомендації — дякуємо за довіру!
          </Typography>
        </Stack>

        <Box
          sx={{
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 3,
            alignItems: 'start'
          }}
        >
          {REVIEWS.map(r => (
            <ReviewCard key={r.id} r={r} />
          ))}
        </Box>

        <Box
          ref={trackRef}
          sx={{
            display: { xs: 'grid', md: 'none' },
            gridAutoFlow: 'column',
            gridAutoColumns: '86vw',
            gap: 2,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            px: 1,
            pr: 2,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' }
          }}
        >
          {REVIEWS.map(r => (
            <Box key={r.id} sx={{ scrollSnapAlign: 'center' }}>
              <ReviewCard r={r} />
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: { xs: 3, md: 4 }, display: 'flex', justifyContent: 'center' }}>
          <CTAButton
            text="Більше відгуків в Instagram"
            href="https://instagram.com/luxeroe"
            sx={{
              borderRadius: 999,
              px: 3,
              py: 1.2,
              fontSize: { xs: 15, md: 16 },
              boxShadow: '0 22px 60px rgba(15,106,60,.25), inset 0 0 0 1px rgba(255,255,255,.15)'
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}
