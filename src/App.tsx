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
import CartPage from '@/pages/cart'
import { useCartCount } from '@/store/cart'
import { Box } from '@mui/material'
import { Route, Routes, useNavigate } from 'react-router-dom'

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
      <PromoHero />
      <Product />
      <Instagram />
      <Consultation />
      <Reviews />
      <HowTo />
      <Shipping />
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}
