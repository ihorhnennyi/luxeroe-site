import { Bullets, CTAButton, PriceBadge } from '@/components/atoms';
import type { Promo } from '@/data/promos';
import { Box, Container, Typography } from '@mui/material';

const BRAND_TEXT = '#2E3D2F';
const MUTED_TEXT = '#6B5E55';

const TITLE_MIN_H = { xs: 84, md: 132 };
const SUBTITLE_MIN_H = { xs: 36, md: 56 };
const BULLETS_MIN_H = { xs: 64, md: 80 };

type SlideProps = { p: Promo; onAddPromo?: () => void };

export default function PromoSlide({ p, onAddPromo }: SlideProps) {
  return (
    <Container maxWidth="lg" disableGutters>
      <Box
        sx={{
          px: 2,
          py: { xs: 4, md: 8 },
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: { xs: 'stretch', md: 'center' },
          justifyContent: { md: 'space-between' },
          gap: { xs: 3, md: 6 },
        }}
      >
        <Box
          sx={{
            flex: { xs: '1 1 auto', md: '0 0 560px' },
            maxWidth: { xs: '100%', md: 560 },
            minHeight: { xs: 300, md: 380 },
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
              }}
            >
              {p.eyebrow}
            </Typography>
          )}

          <Box sx={{ minHeight: TITLE_MIN_H }}>
            <Typography
              component="h1"
              sx={{
                color: BRAND_TEXT,
                fontSize: { xs: 32, md: 56 },
                fontWeight: 900,
                lineHeight: { xs: 1.12, md: 1.08 },
                mb: { xs: 0.5, md: 1.25 },
              }}
            >
              {p.title}
            </Typography>
          </Box>

          <Box sx={{ minHeight: SUBTITLE_MIN_H, mb: { xs: 0.5, md: 1 } }}>
            {p.subtitle && (
              <Typography
                sx={{
                  color: MUTED_TEXT,
                  fontSize: { xs: 15, md: 16 },
                  lineHeight: { xs: 1.45, md: 1.6 },
                }}
              >
                {p.subtitle}
              </Typography>
            )}
          </Box>

          <Box sx={{ minHeight: BULLETS_MIN_H, mb: { xs: 0.75, md: 1 } }}>
            <Bullets items={p.bullets || []} />
          </Box>

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
            flex: { xs: '1 1 auto', md: '0 0 660px' },
            maxWidth: { xs: '100%', md: 660 },
            width: '100%',
            position: 'relative',
            borderRadius: 6,
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,.2)',
            background: '#EDE8E2',
            aspectRatio: '5 / 4',
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
          {p.badge && <PriceBadge label={p.badge.label} price={p.badge.price} />}
        </Box>
      </Box>
    </Container>
  );
}
