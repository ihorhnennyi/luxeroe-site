import { Box, Container, Stack, Typography } from '@mui/material'

const BRAND = '#2E3D2F'
const MUTED = '#6B5E55'

export default function CapsulatedCaviar() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 7 },
        px: { xs: 0, md: 0 }
      }}
    >
      <Container maxWidth="md" disableGutters sx={{ px: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            borderRadius: 3,
            border: '1px solid rgba(210,170,130,0.3)',
            background: 'linear-gradient(180deg, rgba(255,252,247,0.6) 0%, rgba(255,248,238,0.5) 100%)',
            boxShadow: '0 20px 50px rgba(0,0,0,.06)',
            p: { xs: 3, md: 4.5 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              color: BRAND,
              fontWeight: 900,
              fontSize: { xs: 22, md: 28 },
              lineHeight: 1.25,
              mb: 2,
              textAlign: 'center',
            }}
          >
            З чого складається капсульована ікра?
          </Typography>

          <Stack spacing={2} sx={{ mb: 2.5 }}>
            <Typography sx={{ color: MUTED, fontSize: 16, lineHeight: 1.7 }}>
              Багато хто дивується, як вдається створити такий ніжний смак ікринок, що буквально тануть у роті. Насправді все досить просто — і дуже натурально.
            </Typography>
            <Typography sx={{ color: MUTED, fontSize: 16, lineHeight: 1.7 }}>
              Основою є рибний бульйон — концентрований, насичений, з вираженим морським ароматом. Саме він надає тим самим маленьким «перлинкам» справжній смак червоної або чорної ікри.
            </Typography>
            <Typography sx={{ color: MUTED, fontSize: 16, lineHeight: 1.7 }}>
              Далі — морські водорості, з яких отримують альгінат. Він формує тонку капсулу, щоб ікринки тримали форму, лишалися ніжними та пружними.
            </Typography>
            <Typography sx={{ color: MUTED, fontSize: 16, lineHeight: 1.7 }}>
              Також додаються натуральні ароматизатори риби, трохи солі та харчові консерванти, дозволені й безпечні. Вони відповідають за те, щоб продукт зберігав свіжість, смак і якість під час доставки та зберігання.
            </Typography>
          </Stack>

          <Typography sx={{ color: BRAND, fontWeight: 800, fontSize: 17, mb: 1.5 }}>
            У результаті ми отримуємо продукт, який:
          </Typography>
          <Stack spacing={0.75} sx={{ mb: 2.5, pl: 0.5 }}>
            <Typography sx={{ color: MUTED, fontSize: 16, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 1 }}>
              <span aria-hidden>🍣</span> виглядає як справжня ікра
            </Typography>
            <Typography sx={{ color: MUTED, fontSize: 16, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 1 }}>
              <span aria-hidden>✨</span> має глибокий рибний смак
            </Typography>
            <Typography sx={{ color: MUTED, fontSize: 16, lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 1 }}>
              <span aria-hidden>🥄</span> чудово підходить для канапок, ролів, салатів і святкових страв
            </Typography>
          </Stack>

          <Typography
            sx={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.7,
              textAlign: 'center',
              fontStyle: 'italic',
              borderTop: '1px solid rgba(210,170,130,0.25)',
              pt: 2,
            }}
          >
            Капсульована ікра — це той випадок, коли сучасні технології роблять делікатес доступним, зберігаючи його красу та насичений смак.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
