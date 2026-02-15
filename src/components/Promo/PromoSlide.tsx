import { Bullets, CTAButton } from '@/components/atoms';
import type { Promo } from '@/data/promos';
import { Box, Container, Typography } from '@mui/material';

const BRAND_TEXT = '#2E3D2F';
const MUTED_TEXT = '#6B5E55';


type SlideProps = { p: Promo; onAddPromo?: () => void };

export default function PromoSlide({ p, onAddPromo }: SlideProps) {
  return (
    <Container maxWidth="lg" disableGutters>
      <Box
        sx={{
          px: 2,
          pt: { xs: 4, md: 5 },
          pb: { xs: 3, md: 3.5 },
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: { xs: 'stretch', md: 'center' },
          justifyContent: { md: 'center' },
          gap: { xs: 4, md: 8 },
          width: { md: 'fit-content' },
          maxWidth: '100%',
          mx: 'auto',
        }}
      >
        <Box
          sx={{
            flex: { xs: '1 1 auto', md: '0 0 520px' },
            width: { xs: '100%', md: 520 },
            minWidth: 0,
            minHeight: { xs: 320, md: 500 },
          }}
        >
          {p.eyebrow && (
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 2,
                fontWeight: 900,
                color: '#0F6A3C',
                fontSize: { xs: 12, md: 14 },
                mb: 0.5,
              }}
            >
              {p.eyebrow}
            </Typography>
          )}

          <Typography
            component="h1"
            sx={{
              color: BRAND_TEXT,
              fontSize: { xs: 28, md: 44 },
              fontWeight: 900,
              lineHeight: { xs: 1.12, md: 1.08 },
              letterSpacing: '-0.02em',
              mb: 0.75,
            }}
          >
            {p.title}
          </Typography>

          {p.subtitle && (
            <Typography
              sx={{
                color: MUTED_TEXT,
                fontSize: { xs: 15, md: 16 },
                lineHeight: { xs: 1.45, md: 1.6 },
                mb: 1,
              }}
            >
              {p.subtitle}
            </Typography>
          )}

          <Box sx={{ mb: 1 }}>
            <Bullets items={p.bullets || []} />
          </Box>

          {p.badge && (
            <Typography sx={{ mb: 1.25, fontSize: 18, fontWeight: 900, color: BRAND_TEXT }}>
              {p.badge.label}: {p.badge.price}
            </Typography>
          )}

          {p.cta && (
            <CTAButton
              text={p.cta.text}
              href={p.cta.href}
              onClick={(e: any) => {
                e.preventDefault();
                onAddPromo?.();
              }}
              sx={{ width: { xs: '100%', md: 'auto' } }}
            />
          )}
        </Box>

        <Box
          sx={{
            flex: { xs: '0 0 auto', md: '0 0 400px' },
            width: { xs: '100%', md: 400 },
            minWidth: { md: 400 },
            display: 'flex',
            justifyContent: { xs: 'center', md: 'center' },
            alignItems: { md: 'flex-start' },
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: 400 },
              maxWidth: { xs: 320, md: 400 },
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              border: '1px solid rgba(210,170,130,0.2)',
              background: '#f5f2ee',
              aspectRatio: '4 / 5',
            }}
          >
            <Box
              component="img"
              src={p.image}
              alt={p.title}
              loading="eager"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
