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
    id: 'best-seller-box',
    eyebrow: 'АКЦІЯ',
    title: 'Best Seller Box',
    subtitle: 'Набір для щодня та свята.',
    bullets: ['Горбуша 500 г', 'Кета 500 г', 'Щука 500 г'],
    image: '/promos/best_seller_box.jpg',
    badge: { label: 'Ціна набору', price: '1 799 грн' },
    cta: { text: 'Замовити', href: '/#catalog' },
  },
  {
    id: 'red-set',
    eyebrow: 'АКЦІЯ',
    title: 'Red Set',
    subtitle: 'Класика червоної ікри.',
    bullets: ['Горбуша 500 г', 'Кета 500 г', 'Лосось 500 г'],
    image: '/promos/red_set_box.jpg',
    badge: { label: 'Ціна', price: '1 949 грн' },
    cta: { text: 'Замовити', href: '/#catalog' },
  },
  {
    id: 'premium-dinner',
    eyebrow: 'АКЦІЯ',
    title: 'Premium Dinner',
    subtitle: 'Преміум-мікс для особливого столу.',
    bullets: ['Кета Premium', 'Веслонос', 'Горбуша'],
    image: '/promos/premium_dinner.jpg',
    badge: { label: 'Акція', price: '2 099 грн' },
    cta: { text: 'Замовити', href: '/#catalog' },
  },
  {
    id: 'premium-box',
    eyebrow: 'АКЦІЯ',
    title: 'Premium Box',
    subtitle: 'Топ-склад для гурманів.',
    bullets: ['Кета Premium 500 г', 'Веслонос 500 г', 'Лосось 500 г'],
    image: '/promos/premium_box.jpg',
    badge: { label: 'Ціна', price: '2 199 грн' },
    cta: { text: 'Замовити', href: '/#catalog' },
  },
  {
    id: 'family-box',
    eyebrow: 'АКЦІЯ',
    title: 'Family Box',
    subtitle: 'Великий набір для родини.',
    bullets: ['Горбуша', 'Лосось', 'Голець', 'Щука'],
    image: '/promos/family_box.jpg',
    badge: { label: 'Акція', price: '2 299 грн' },
    cta: { text: 'Замовити', href: '/#catalog' },
  },
  {
    id: 'luxury',
    eyebrow: 'АКЦІЯ',
    title: 'Luxury',
    subtitle: 'Максимальний набір преміум-ікри.',
    bullets: ['Кета Premium', 'Веслонос', 'Лосось', 'Голець', 'Щука'],
    image: '/promos/luxury.jpg',
    badge: { label: 'Ціна набору', price: '3 199 грн' },
    cta: { text: 'Замовити', href: '/#catalog' },
  },
  {
    id: 'set-3',
    eyebrow: 'ШВИДКА АКЦІЯ',
    title: '3 банки за 1 999 грн',
    subtitle: 'Будь-які 3 Standard: горбуша, кета, лосось, щука, голець.',
    image: '/promos/3.jpg',
    badge: { label: 'За 3 банки', price: '1 999 грн' },
    cta: { text: 'Замовити', href: '/#catalog' },
  },
  {
    id: 'set-5',
    eyebrow: 'ШВИДКА АКЦІЯ',
    title: '5 банок за 3 099 грн',
    subtitle: 'Мікс будь-яких (крім Premium).',
    image: '/promos/family_box2.jpg',
    badge: { label: 'За 5 банок', price: '3 099 грн' },
    cta: { text: 'Замовити набір', href: '/#catalog' },
  },
];
