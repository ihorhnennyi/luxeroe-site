import { products } from '@/data/products'
import { Box, Container, Stack, Typography } from '@mui/material'
import ProductCard from './ProductCard'

export default function Product() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 2 }
      }}
    >
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 3 } }}>
        <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              color: '#2E3D2F',
              fontSize: { xs: 28, md: 40 },
              lineHeight: 1.2
            }}
          >
            Каталог
          </Typography>

          <Typography
            sx={{
              color: '#6B5E55',
              maxWidth: 680,
              fontSize: 18
            }}
          >
            Свіжі партії щотижня. Встигніть забрати акційні позиції та новинки.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 2, md: 3 },
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: 'repeat(3, 1fr)'
            }
          }}
        >
          {products.map(p => (
            <Box key={p.id}>
              <ProductCard p={p} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
