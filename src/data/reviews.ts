export type Review = {
  id: string
  image: string
  title?: string
}

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    image: '/reviews/1.jpg',
    title: 'Смачного! 🥰'
  },
  {
    id: 'r2',
    image: '/reviews/2.jpg',
    title: 'Дякуємо за відгуки ❤️'
  },
  {
    id: 'r3',
    image: '/reviews/3.jpg'
  },
  {
    id: 'r4',
    image: '/reviews/4.jpg',
    title: 'З турботою про Вас 🤲'
  },
  {
    id: 'r5',
    image: '/reviews/5.jpg'
  },
  {
    id: 'r6',
    image: '/reviews/6.jpg',
    title: 'Ваші відгуки 🥰'
  }
]
