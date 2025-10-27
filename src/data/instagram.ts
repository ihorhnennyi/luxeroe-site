export type InstaPost = {
  id: string
  embed: string
}

export type InstaData = {
  handle: string
  ctaUrl: string
  bullets: string[]
  posts: InstaPost[]
}

const SOCIAL: InstaData = {
  handle: '@luxe.roe',
  ctaUrl: 'https://instagram.com/luxe.roe',
  bullets: [
    '−10% на замовлення за підписку',
    'Рецепти, подача та ідеї страв',
    'Щотижневі акції та знижки',
    'Розіграші та подарунки'
  ],
  posts: [
    {
      id: 'p1',
      embed: `
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DIGzcdkIKdx/?igsh=MXZwdXZmeDc2N3Vubw=="
  data-instgrm-version="14" style="background:#FFF;border:0;border-radius:16px;box-shadow:0 18px 60px rgba(0,0,0,.18);margin:0;max-width:540px;width:100%;"></blockquote>
`
    },
    {
      id: 'p2',
      embed: `
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DLb35wQtNhF/?igsh=MW8wcWM1cHNid2ljZw=="
  data-instgrm-version="14" style="background:#FFF;border:0;border-radius:16px;box-shadow:0 18px 60px rgba(0,0,0,.18);margin:0;max-width:540px;width:100%;"></blockquote>
`
    }
  ]
}

export default SOCIAL
