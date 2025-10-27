export type TickerItem = { text: string; color?: string }

export default {
  messages: [
    { text: '🔥 Акційна 4-та баночка — 279 ₴', color: '#C62828' },
    { text: '❤️ 2+1: третій продукт у подарунок 🎁', color: '#AD1457' },
    { text: '🩷 3+2: два продукти у подарунок 🎁', color: '#D81B60' },
    { text: '🚚 Безкоштовна доставка від 1500 ₴', color: '#2E7D32' }
  ],
  intervalMs: 3500,
  speedPxPerSec: 90
} as {
  messages: TickerItem[]
  intervalMs: number
  speedPxPerSec: number
}
