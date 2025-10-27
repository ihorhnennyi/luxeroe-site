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
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

function Home() {
  const count = useCartCount()
  const navigate = useNavigate()

  // 🔽 Добавим плавную прокрутку к якорям (когда открывается /#id)
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200)
      }
    }
  }, [])

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

      {/* 🔽 Разделы с id для якорей */}
      <Box id="deals">
        <PromoHero />
      </Box>

      <Box id="catalog">
        <Product />
      </Box>

      <Box id="reviews">
        <Reviews />
      </Box>

      <Box id="how-to-order">
        <HowTo />
      </Box>

      <Box id="delivery">
        <Shipping />
      </Box>

      <Box>
        <Instagram />
        <Consultation />
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}
