import { AddToCartModal } from '@/components'
import type { Promo } from '@/data/promos'
import { PROMOS } from '@/data/promos'
import { useAutoCycle } from '@/hooks/useAutoCycle'
import { useDisclosure } from '@/hooks/useDisclosure'
import { useCart } from '@/store/cart'
import type { Product } from '@/types/product'
import { normalizePrice } from '@/utils/money'
import { Box } from '@mui/material'
import { useState } from 'react'
import PromoSlide from './PromoSlide'

function promoToProduct(p: Promo): Product {
  const price = (p as any)?.badge?.price ?? (p as any)?.price ?? 0
  const weightLabel = (p as any)?.badge?.label ?? 'Промо набір'

  const prodLike = {
    id: `promo-${p.id}`,
    title: p.title,
    image: p.image,
    category: 'red',
    short: p.subtitle || '',
    highlights: p.bullets || [],
    badge: (p as any)?.badge?.label as string | undefined,
    specs: { container: 'набір' },
    weights: [{ label: weightLabel, price }]
  }

  return prodLike as unknown as Product
}

export default function PromoHero() {
  const { index } = useAutoCycle(PROMOS.length, 10000)
  const modal = useDisclosure(false)
  const [promoProduct, setPromoProduct] = useState<Product | null>(null)
  const { add } = useCart()

  const handleAddPromo = (promo: Promo) => {
    const prod = promoToProduct(promo)
    const w = prod.weights?.[0]
    add({
      product: prod,
      label: w?.label,
      price: normalizePrice(w?.price),
      qty: 1
    })
    setPromoProduct(prod)
    modal.onOpen()
  }

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position: 'relative' }}>
        {PROMOS.map((p, i) => {
          const isActive = i === index
          return (
            <Box
              key={p.id}
              sx={{
                position: i === 0 ? 'relative' : 'absolute',
                inset: 0,
                opacity: isActive ? 1 : 0,
                transition: 'opacity 600ms ease',
                pointerEvents: isActive ? 'auto' : 'none'
              }}
            >
              <PromoSlide p={p} onAddPromo={() => handleAddPromo(p)} />
            </Box>
          )
        })}
      </Box>

      {promoProduct && (
        <AddToCartModal
          open={modal.open}
          onClose={() => {
            modal.onClose()
            setPromoProduct(null)
          }}
          product={promoProduct}
          lockQty
        />
      )}
    </Box>
  )
}
