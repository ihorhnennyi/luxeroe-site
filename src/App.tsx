import {
  Consultation,
  FloatingActions,
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
import { Route, Routes, useNavigate } from 'react-router-dom'

const HEADER_OFFSET = 72

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

      <Box id="catalog">
        <Product />
      </Box>

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
