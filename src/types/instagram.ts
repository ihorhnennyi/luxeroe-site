export type InstaPost = {
  id: string
  title?: string
  embedUrl?: string
  image?: string
  href: string
}

export type InstaBlock = {
  headingOverline: string
  heading: string
  description: string
  ctaText: string
  ctaHref: string
  posts: InstaPost[]
}
