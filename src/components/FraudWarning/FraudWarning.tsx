import { Box, Container, Stack, Typography } from '@mui/material'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'

const BRAND = '#2E3D2F'
const WARN = '#B45309'
const WARN_BG = 'rgba(180,83,9,0.08)'

export default function FraudWarning() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2.5, md: 3 },
        px: { xs: 0, md: 0 },
      }}
    >
      <Container maxWidth="md" disableGutters sx={{ px: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            borderRadius: 3,
            border: `2px solid ${WARN}`,
            background: `linear-gradient(180deg, ${WARN_BG} 0%, rgba(255,248,238,0.4) 100%)`,
            boxShadow: '0 8px 32px rgba(180,83,9,0.12)',
            p: { xs: 2.5, md: 3.5 },
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: WARN,
            },
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <WarningAmberIcon sx={{ color: WARN, fontSize: 32 }} />
            <Typography
              component="h2"
              sx={{
                color: WARN,
                fontWeight: 900,
                fontSize: { xs: 20, md: 24 },
                lineHeight: 1.2,
              }}
            >
              Увага! Шахрайство!
            </Typography>
          </Stack>

          <Typography sx={{ color: BRAND, fontSize: 15, lineHeight: 1.65, mb: 2 }}>
            Через зростання випадків шахрайства закликаємо бути обережними: перевіряйте товар на пошті та уникайте фальсифікованої продукції. Шахраї телефонують від імені LuxeRoe та пропонують «нашу» продукцію, а насправді надсилають підробку у вигляді желе. Не приймайте такий товар!
          </Typography>

          <Stack spacing={1} sx={{ mb: 2 }}>
            <Typography sx={{ color: BRAND, fontSize: 15, lineHeight: 1.6, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <span aria-hidden>✅</span>
              <span>Нагадуємо: справжня продукція відправляється <strong>ВИКЛЮЧНО</strong> з міста Дніпро.</span>
            </Typography>
            <Typography sx={{ color: BRAND, fontSize: 15, lineHeight: 1.6, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <span aria-hidden>🚫</span>
              <span>Якщо посилка від нашого імені надходить від іншого відправника — це шахрайство.</span>
            </Typography>
            <Typography sx={{ color: BRAND, fontSize: 15, lineHeight: 1.6, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <span aria-hidden>✅</span>
              <span>LuxeRoe — це ікра, безпечна для здоров'я, підтверджена сотнями позитивних відгуків та гарантією якості.</span>
            </Typography>
          </Stack>

          <Typography
            sx={{
              color: BRAND,
              fontWeight: 800,
              fontSize: 16,
              textAlign: 'center',
              py: 1.5,
              px: 2,
              borderRadius: 2,
              bgcolor: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(210,170,130,0.3)',
            }}
          >
            Замовляйте лише тут — на офіційному сайті!
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
