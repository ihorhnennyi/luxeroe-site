export type SocialLink = {
  label: string
  href: string
  icon: 'instagram' | 'facebook' | 'telegram' | 'tiktok'
}

export const SOCIALS: SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/luxe.roe', icon: 'instagram' },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61575086133995',
    icon: 'facebook'
  },
  { label: 'Telegram', href: 'https://t.me/luxeroem', icon: 'telegram' },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@luxe.roe?_t=ZM-90toSRjMAoq&_r=1',
    icon: 'tiktok'
  }
]
