import { SOCIALS } from '@/data/socials'
import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import { Facebook, Instagram, Music2, Send } from 'lucide-react'

const BRAND = '#2E3D2F'

function SocialIcon({ icon }: { icon: 'instagram' | 'facebook' | 'telegram' | 'tiktok' }) {
  const size = 18
  const stroke = 2.2

  if (icon === 'facebook') return <Facebook size={size} strokeWidth={stroke} />
  if (icon === 'telegram') return <Send size={size} strokeWidth={stroke} />
  if (icon === 'tiktok') return <Music2 size={size} strokeWidth={stroke} />
  return <Instagram size={size} strokeWidth={stroke} />
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #FFF8F1 0%, #FFF2E6 100%)',
        borderTop: '1px solid rgba(214,132,70,.2)',
        mt: { xs: 6, md: 8 },
        py: { xs: 4, md: 6 },
        color: BRAND
      }}
    >
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 3 } }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={{ xs: 4, md: 0 }}
        >
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img
                src="/logo.svg"
                alt="LuxeRoe"
                width={36}
                height={36}
                style={{ borderRadius: '50%' }}
              />
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: 20, md: 22 },
                  color: BRAND
                }}
              >
                LuxeRoe
              </Typography>
            </Stack>

            <Typography sx={{ color: 'rgba(46,61,47,.7)', maxWidth: 320, fontSize: 15 }}>
              Преміальна ікра та морські делікатеси з доставкою по Україні.
            </Typography>
          </Stack>

          <Stack spacing={1.5} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
            <Stack spacing={0.5} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  color: BRAND,
                  fontSize: 15
                }}
              >
                Контакти
              </Typography>

              <Typography
                component="a"
                href="tel:+380939858552"
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                +38 (093) 985-85-52
              </Typography>

              <Typography
                component="a"
                href="mailto:luxeroe.shop@gmail.com"
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                luxeroe.shop@gmail.com
              </Typography>

              <Typography sx={{ fontSize: 14, color: 'rgba(46,61,47,.7)' }}>
                Пн–Нд: 9:00 – 21:00
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1.2} justifyContent="flex-end">
              {SOCIALS.map(s => (
                <IconButton
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(214,132,70,.4)',
                    color: BRAND,
                    transition: 'all .25s ease',
                    '&:hover': {
                      background: 'rgba(214,132,70,.08)',
                      borderColor: 'rgba(214,132,70,.7)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <SocialIcon icon={s.icon} />
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            pt: { xs: 2, md: 3 },
            borderTop: '1px solid rgba(214,132,70,.15)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1
          }}
        >
          <Typography sx={{ fontSize: 14, color: 'rgba(46,61,47,.6)' }}>
            © {new Date().getFullYear()} LuxeRoe — усі права захищені
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'rgba(46,61,47,.6)' }}>
            Зроблено з <span style={{ color: '#D75C4B' }}>❤️</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
