import type { Promo } from '@/data/promos'
import type { Product } from '@/types/product'
import { normalizePrice } from '@/utils/money'

export function promoToProduct(p: Promo): Product {
  const price = normalizePrice((p as any)?.badge?.price) || normalizePrice((p as any)?.price)

  const weightLabel = (p as any)?.badge?.label || 'Промо набір'

  const prodLike = {
    id: `promo-${p.id}`,
    title: p.title,
    image: p.image,

    category: 'red',
    short: p.subtitle || '',
    highlights: p.bullets || [],
    badge: (p as any)?.badge?.label as string | undefined,
    specs: { container: 'набір' },
    weights: [
      {
        label: weightLabel,
        price
      }
    ]
  }

  return prodLike as unknown as Product
}
