import type { OrderPayload } from '@/types/order'
import { apiBase } from '@/utils/apiBase'

const BASE = apiBase()

async function postJSON<T = any>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  let json: any = {}
  try {
    json = await res.json()
  } catch {}
  if (!res.ok || json?.ok === false) throw new Error(json?.error || `HTTP ${res.status}`)
  return json as T
}

export function postOrderToTelegram(payload: OrderPayload) {
  return postJSON(`${BASE}/telegram/order`, payload)
}

export type LeadInput = {
  firstName: string
  phone: string
  sourceUrl?: string
}

export function postLeadToTelegram(input: LeadInput) {
  const p = {
    kind: 'lead' as const,
    customer: {
      firstName: input.firstName.trim(),
      lastName: '',
      phone: String(input.phone).trim()
    },
    items: [] as any[],
    total: 0,
    sourceUrl: input.sourceUrl
  }
  return postJSON(`${BASE}/api/telegram/lead`, p)
}
