export type ShippingItem = {
  id: string
  icon: 'cart' | 'truck' | 'cash'
  title: string
  text: string
}

export const SHIPPING_ITEMS: ShippingItem[] = [
  {
    id: 'order',
    icon: 'cart',
    title: 'Оформлення замовлення',
    text: 'Виберіть товар у каталозі та залиште заявку на сайті — менеджер одразу зв’яжеться для підтвердження.'
  },
  {
    id: 'delivery',
    icon: 'truck',
    title: 'Доставка по Україні',
    text: 'Надсилаємо Новою Поштою 1–2 дні у відділення або поштомат. Надсилаємо трек-номер.'
  },
  {
    id: 'cash',
    icon: 'cash',
    title: 'Оплата при отриманні',
    text: 'Передоплату не беремо — оплата тільки після огляду й отримання замовлення.'
  }
]
