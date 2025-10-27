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
