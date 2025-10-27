export type SocialLink = {
  label: string
  href: string
  icon: 'instagram' | 'facebook' | 'telegram'
}

export const SOCIALS: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://facebook.com/', icon: 'facebook' },
  { label: 'Telegram', href: 'https://t.me/', icon: 'telegram' }
]
