import type { Product } from '@/types/product'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type CartItem = {
  id: string
  productId: string
  title: string
  image: string
  label?: string
  price: number
  qty: number
}

type State = {
  items: CartItem[]
  /** Показати екран «Дякуємо за замовлення» замість порожнього кошика */
  orderJustSubmitted: boolean
  _hydrated: boolean
}

type Actions = {
  add: (args: { product: Product; label?: string; price: number; qty?: number }) => void
  inc: (id: string) => void
  dec: (id: string) => void
  remove: (id: string) => void
  clear: () => void
  setOrderJustSubmitted: (v: boolean) => void

  _setHydrated: (v: boolean) => void
}

const isPromoId = (productId: string) => productId.startsWith('promo-')
const makeItemId = (productId: string, label?: string) =>
  label ? `${productId}__${label}` : productId

export const useCart = create<State & Actions>()(
  persist(
    (set, get) => ({
      items: [],
      orderJustSubmitted: false,
      _hydrated: false,

      _setHydrated: v => set({ _hydrated: v }),
      setOrderJustSubmitted: v => set({ orderJustSubmitted: v }),

      add: ({ product, label, price, qty = 1 }) => {
        const items = get().items.slice()
        const promo = isPromoId(product.id)
        const id = makeItemId(product.id, label)
        const ix = items.findIndex(it => it.id === id)

        if (ix >= 0) {
          if (promo) items[ix].qty = 1
          else items[ix].qty += qty
          return set({ items })
        }

        items.push({
          id,
          productId: product.id,
          title: product.title,
          image: product.image,
          label,
          price,
          qty: promo ? 1 : qty
        })
        set({ items })
      },

      inc: id => {
        const items = get().items.slice()
        const ix = items.findIndex(it => it.id === id)
        if (ix < 0) return
        if (isPromoId(items[ix].productId)) return
        items[ix].qty += 1
        set({ items })
      },

      dec: id => {
        const items = get().items.slice()
        const ix = items.findIndex(it => it.id === id)
        if (ix < 0) return
        items[ix].qty = Math.max(1, items[ix].qty - 1)
        set({ items })
      },

      remove: id => set({ items: get().items.filter(it => it.id !== id) }),
      clear: () => set({ items: [] })
    }),
    {
      name: 'cart:v1',
      version: 1,
      storage: createJSONStorage(() => localStorage),

      migrate: (persistedState, _version) => {
        return persistedState as any
      },

      onRehydrateStorage: () => (state, error) => {
        if (!error) state?._setHydrated(true)
      },

      partialize: state => ({ items: state.items })
    }
  )
)

// селекторы
export const useCartCount = () => useCart(s => s.items.reduce((sum, it) => sum + it.qty, 0))
export const useCartHydrated = () => useCart(s => s._hydrated)
export const useCartOrderJustSubmitted = () => useCart(s => s.orderJustSubmitted)
