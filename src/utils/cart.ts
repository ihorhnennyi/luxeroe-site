export const isPromoId = (productId: string) => productId.startsWith('promo-')

export const makeItemId = (productId: string, label?: string) =>
  label ? `${productId}__${label}` : productId
