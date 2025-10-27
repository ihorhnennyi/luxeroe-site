import { products } from '@/data/products'
import type { ProductCategory } from '@/types/product'
import { Box, Typography } from '@mui/material'
import ProductCard from './ProductCard'

export default function ProductGrid({
  category,
  title
}: {
  category: ProductCategory
  title: string
}) {
  const items = products.filter(p => p.category === category)

  return (
    <Box sx={{ px: { xs: 2, md: 24 }, mb: { xs: 4, md: 6 } }}>
      <Typography variant="h5" sx={{ fontWeight: 900, color: '#2E3D2F', mb: 2 }}>
        {title}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 2, md: 3 },
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }
        }}
      >
        {items.map(p => (
          <Box key={p.id}>
            <ProductCard p={p} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
