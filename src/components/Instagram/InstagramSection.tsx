import { CTAButton } from '@/components/atoms'
import SOCIAL from '@/data/instagram'
import { Box, Container, Stack, Typography } from '@mui/material'
import InstaCard from './InstaCard'

const BRAND = '#2E3D2F'
const MUTED = '#6B5E55'

export default function InstagramSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 }
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 2.5, lg: 6 }}
          alignItems="flex-start"
        >
          <Box sx={{ flex: '0 0 480px', maxWidth: { xs: '100%', lg: 520 } }}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: 2, fontWeight: 900, color: '#0F6A3C' }}
            >
              БУДЬ НА ЗВʼЯЗКУ
            </Typography>

            <Typography
              component="h2"
              sx={{
                color: BRAND,
                fontWeight: 900,
                fontSize: { xs: 32, md: 56 },
                lineHeight: 1.05,
                mt: 1
              }}
            >
              Підпишись на
              <br />
              Instagram
            </Typography>

            <Typography sx={{ color: MUTED, mt: 2, maxWidth: 540 }}>
              Живі пости (без скринів): акції, рецепти та ідеї подачі — усе в нашому профілі.
            </Typography>

            <Stack spacing={1.25} sx={{ mt: 2 }}>
              {SOCIAL.bullets.map((b, i) => (
                <Stack key={i} direction="row" spacing={1.25} alignItems="center">
                  <Box
                    sx={{
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      background:
                        'radial-gradient(66% 66% at 30% 30%, #F9C08A 0%, #E7B07D 55%, #D79A62 100%)',
                      boxShadow: '0 0 0 3px rgba(215,154,98,.20)',
                      flex: '0 0 14px'
                    }}
                  />
                  <Typography sx={{ color: BRAND, fontWeight: 600 }}>{b}</Typography>
                </Stack>
              ))}
            </Stack>

            <Box sx={{ mt: { xs: 2, md: 3 } }}>
              {' '}
              <CTAButton text={`Підписатися ${SOCIAL.handle}`} href={SOCIAL.ctaUrl} />
            </Box>
          </Box>

          <Box sx={{ flex: 1, width: '100%', mt: { xs: 0.5, lg: 0 } }}>
            <Stack
              direction={{ xs: 'column', xl: 'row' }}
              spacing={{ xs: 1.5, xl: 3 }}
              sx={{ alignItems: 'stretch' }}
            >
              <Box sx={{ flex: 1 }}>
                <InstaCard html={SOCIAL.posts[0].embed} />
              </Box>
              <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
                <InstaCard html={SOCIAL.posts[1].embed} />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
