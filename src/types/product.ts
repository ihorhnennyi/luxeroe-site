export type ProductCategory = 'red' | 'black' | 'special'

export type WeightOption = {
  label: string
  grams: number
  price: number
  oldPrice?: number
  inStock: boolean
}

export type Product = {
  id: string
  slug: string
  title: string
  category: ProductCategory
  image: string
  /** CSS object-position for the card image (e.g. "center 35%" to show jar higher) */
  imagePosition?: string
  /** Scale > 1 zooms out (shows more of the image), e.g. 1.1 */
  imageScale?: number
  short?: string
  highlights?: string[]
  weights: WeightOption[]
  badge?: 'sale' | 'new' | 'hit'
  specs?: {
    consistency?: string
    size?: string
    color?: string
    container?: string
    storage?: string
    shelfLife?: string
  }
}
