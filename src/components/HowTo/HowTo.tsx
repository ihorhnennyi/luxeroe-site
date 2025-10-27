import { CTAButton } from '@/components/atoms'
import { HOWTO_STEPS, type Step } from '@/data/howto'
import { Box, Container, Stack, Typography } from '@mui/material'
import NumberDot from './NumberDot'
import StepCard from './StepCard'
import TimelineLine from './TimelineLine'

const BRAND = '#2E3D2F'

export default function HowTo() {
  const steps: Step[] = HOWTO_STEPS

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 3 } }}>
        <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: { xs: 3, md: 5 } }}>
          <Typography
            component="h2"
            sx={{ color: BRAND, fontWeight: 900, fontSize: { xs: 30, md: 44 }, lineHeight: 1.1 }}
          >
            Як замовити
          </Typography>
          <Typography sx={{ color: '#6B5E55', maxWidth: 680 }}>
            Просто три кроки — і свіжа ікра вже прямує до вас.
          </Typography>
        </Stack>

        <Box sx={{ position: 'relative', minHeight: { md: 520 }, px: { md: 6 } }}>
          <TimelineLine />

          <Stack spacing={{ xs: 2.5, md: 8 }}>
            {steps.map((s, i) => {
              const side: 'left' | 'right' = i % 2 === 0 ? 'left' : 'right'
              return (
                <Box
                  key={s.id}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '28px 1fr', md: '1fr 60px 1fr' },
                    alignItems: 'center',
                    columnGap: { xs: 1.5, md: 3 }
                  }}
                >
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    {side === 'left' ? <StepCard s={s} side="left" /> : null}
                  </Box>

                  <NumberDot n={s.id} />

                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                      {side === 'right' ? <StepCard s={s} side="right" /> : null}
                    </Box>
                    <Box sx={{ display: { xs: 'block', md: 'none' }, pl: 0.5 }}>
                      <StepCard s={s} side="left" />
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Stack>

          <Box sx={{ mt: { xs: 3, md: 6 }, display: 'flex', justifyContent: 'center' }}>
            <CTAButton text="Перейти до каталогу" href="#catalog" />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
