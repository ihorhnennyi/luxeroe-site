import type { OrderPayload } from '@/types/order'

const BASE = import.meta.env.VITE_API_BASE || ''

export async function postOrderToTelegram(payload: OrderPayload) {
  const res = await fetch(`${BASE}/api/telegram/order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}
