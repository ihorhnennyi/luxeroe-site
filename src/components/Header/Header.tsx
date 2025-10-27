import { MobileMenu } from '@/components'
import { MAIN_MENU } from '@/data/menu'
import { useCartCount, useCartHydrated } from '@/store/cart'
import MenuIcon from '@mui/icons-material/Menu'
import PhoneIcon from '@mui/icons-material/Phone'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { AppBar, Box, Container, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const BRAND_TEXT = '#2E3D2F'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [overlay, setOverlay] = useState(0)
  const hydrated = useCartHydrated()
  const count = useCartCount()

  useEffect(() => {
    let raf: number | null = null
    const MAX = 120
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0
      const t = Math.max(0, Math.min(1, y / MAX))
      if (raf == null) {
        raf = requestAnimationFrame(() => {
          setOverlay(t)
          raf = null
        })
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const safeCount = hydrated ? count : 0

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{
          top: 'var(--tickerH, 0px)',
          zIndex: t => t.zIndex.appBar + 1,
          background: () => {
            const alpha = Math.max(0.35, 1 - overlay * 0.55)
            const c1 = `rgba(255,246,235, ${alpha})`
            const c2 = `rgba(255,242,225, ${alpha})`
            return `linear-gradient(180deg, ${c1} 0%, ${c2} 100%)`
          },
          borderBottom: '1px solid rgba(210,170,130,0.25)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Toolbar sx={{ minHeight: 64, px: 2, color: BRAND_TEXT, position: 'relative' }}>
            <Link
              href="/"
              underline="none"
              color="inherit"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.2 }}
            >
              <Box
                component="img"
                src="/logo.svg"
                alt="LuxeRoe"
                sx={{ width: 28, height: 28, display: 'block' }}
              />
              <Typography variant="h6" fontWeight={900} color="inherit">
                LuxeRoe
              </Typography>
            </Link>

            <Stack
              component="nav"
              direction="row"
              spacing={3}
              sx={{
                mx: '200px',
                display: { xs: 'none', md: 'flex' },
                '& a': { color: BRAND_TEXT, fontWeight: 700, textDecoration: 'none' },
                '& a:hover': { opacity: 0.85 }
              }}
            >
              {MAIN_MENU.map(it => (
                <Link key={it.href} href={it.href} color="inherit">
                  {it.label}
                </Link>
              ))}
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center" sx={{ ml: 'auto' }}>
              <IconButton component="a" href="tel:+380939858552" aria-label="call" color="inherit">
                <PhoneIcon sx={{ color: '#C6744B' }} />
              </IconButton>
              <IconButton aria-label="cart" color="inherit" component={RouterLink} to="/cart">
                <Box sx={{ position: 'relative' }}>
                  <ShoppingCartIcon />
                  {safeCount > 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -4,
                        right: -4,
                        minWidth: 18,
                        height: 18,
                        bgcolor: '#E53935',
                        borderRadius: 999,
                        color: '#fff',
                        fontSize: 12,
                        lineHeight: '18px',
                        textAlign: 'center',
                        fontWeight: 900,
                        px: 0.4
                      }}
                    >
                      {Math.min(99, safeCount)}
                    </Box>
                  )}
                </Box>
              </IconButton>
              <Box sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
                <IconButton onClick={() => setOpen(true)} aria-label="menu" color="inherit">
                  <MenuIcon />
                </IconButton>
              </Box>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
