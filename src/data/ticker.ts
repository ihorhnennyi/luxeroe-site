export type TickerItem = { text: string; color?: string }

export default {
  messages: [
    { text: '🎁 3 банки за 1 999 грн • Будь-які 3 Standard', color: '#C62828' },
    { text: '🎁 5 банок за 3 099 грн • Мікс будь-яких (крім Premium)', color: '#AD1457' },
    { text: '🔥 Best Seller Box: горбуша + кета + щука — 1 799 грн', color: '#2E7D32' },
    { text: '🔥 Red Set: горбуша + кета + лосось — 1 949 грн', color: '#D81B60' },
    { text: '🔥 Premium Dinner: Кета Premium + веслонос + горбуша — 2 099 грн', color: '#AD1457' },
    { text: '🔥 Premium Box: Кета Premium + веслонос + лосось — 2 199 грн', color: '#C62828' },
    { text: '🔥 Family Box: горбуша + лосось + голець + щука — 2 299 грн', color: '#2E7D32' },
    { text: '🔥 Luxury: повний набір преміум — 3 199 грн', color: '#AD1457' },
    { text: '💰 Горбуша 649 грн • Кета 749 грн • Лосось 749 грн • Кета Premium 899 грн', color: '#1565C0' },
    { text: '💰 Веслонос 849 грн • Щука 679 грн • Голець 679 грн', color: '#1565C0' },
    { text: '🚚 Безкоштовна доставка від 1500 грн', color: '#2E7D32' }
  ],
  intervalMs: 3500,
  speedPxPerSec: 90
} as {
  messages: TickerItem[]
  intervalMs: number
  speedPxPerSec: number
}
