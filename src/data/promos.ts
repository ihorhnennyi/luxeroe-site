export type Promo = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  image: string;
  badge?: { label: string; price: string };
  cta?: { text: string; href: string };
};

export const PROMOS: Promo[] = [
  {
    id: 'set-2-1',
    eyebrow: 'АКЦІЯ 2 + 1',
    title: 'Більше ікри — більше радості',
    subtitle: 'Три банки одним кліком — для гостей, ролів і свят.',
    bullets: ['Вигідний сет', 'Швидке замовлення', 'Готово до подачі'],
    image: '/promos/3.JPG',
    badge: { label: 'За 3 банки', price: '1 098 грн' },
    cta: { text: 'Замовити сет 2+1', href: '/#catalog' },
  },
  {
    id: 'set-5',
    eyebrow: 'НАБІР ВИГОДИ',
    title: 'П’ятірка для справжнього свята',
    subtitle: 'Максимум смаку для великої компанії.',
    bullets: ['Більше — дешевше', 'На 6–10 гостей', 'Супер для фуршету'],
    image: '/promos/5.JPG',
    badge: { label: 'За 5 банок', price: '1 500 грн' },
    cta: { text: 'Замовити набір 5', href: '/#catalog' },
  },
];
