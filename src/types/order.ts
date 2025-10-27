export type OrderItem = { title: string; label?: string; qty: number; price: number }

export type OrderPayload = {
  kind: 'order' | 'lead'
  customer: { firstName: string; lastName: string; phone: string }
  delivery?: { city?: string; address?: string }
  items: OrderItem[]
  total: number
  sourceUrl?: string
}
