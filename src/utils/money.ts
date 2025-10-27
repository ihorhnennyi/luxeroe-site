export function normalizePrice(input: unknown): number {
  if (typeof input === 'number' && Number.isFinite(input)) return input
  if (typeof input === 'string') {
    const n = Number(input.replace(/[^\d.,]/g, '').replace(',', '.'))
    return Number.isFinite(n) ? n : 0
  }
  return 0
}

const uah = new Intl.NumberFormat('uk-UA', {
  style: 'currency',
  currency: 'UAH',
  maximumFractionDigits: 0
})

export function formatUAH(n: number): string {
  return uah.format(n)
}
