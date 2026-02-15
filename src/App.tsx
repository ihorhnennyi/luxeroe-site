import {
  CapsulatedCaviar,
  Consultation,
  FloatingActions,
  FraudWarning,
  Footer,
  Header,
  HowTo,
  Instagram,
  Product,
  PromoHero,
  Reviews,
  Shipping,
  TopTicker
} from '@/components'
import SmoothHashScroll from '@/components/_internals/SmoothHashScroll'
import CartPage from '@/pages/cart'
import { useCartCount } from '@/store/cart'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

const HEADER_OFFSET = 72

function useScrollToTopOnLoad() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.history.scrollRestoration = 'manual'
    const goTop = () => window.scrollTo(0, 0)
    if (!window.location.hash) {
      goTop()
      const t1 = setTimeout(goTop, 0)
      const t2 = setTimeout(goTop, 200)
      const t3 = setTimeout(goTop, 500)
      const t4 = setTimeout(goTop, 1000)
      const onLoad = () => goTop()
      window.addEventListener('load', onLoad)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
        clearTimeout(t3)
        clearTimeout(t4)
        window.removeEventListener('load', onLoad)
      }
    }
  }, [])
}

function Home() {
  const count = useCartCount()
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg,#FBF6F0 0%,#F5E9DC 100%)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <TopTicker />
      <Header />

      <Box id="deals">
        <PromoHero />
      </Box>

      <FraudWarning />

      <Box id="catalog">
        <Product />
      </Box>

      <CapsulatedCaviar />

      <Box id="reviews">
        <Reviews />
      </Box>

      <Box>
        <Instagram />
        <Consultation />
      </Box>

      <Box id="how-to-order">
        <HowTo />
      </Box>

      <Box id="delivery">
        <Shipping />
      </Box>

      <Footer />

      <FloatingActions
        cartCount={count}
        onCartClick={() => navigate('/cart')}
        threshold={280}
        right={14}
      />
    </Box>
  )
}

export default function App() {
  useScrollToTopOnLoad()

  return (
    <>
      {/* Плавный скролл для переходов по /#hash (учёт высоты шапки) */}
      <SmoothHashScroll offset={HEADER_OFFSET} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  )
}
