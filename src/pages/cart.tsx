import { CartEmpty, CartHeader, CheckoutForm, Footer, Header, TopTicker } from '@/components'

import { useCartCount, useCartHydrated } from '@/store/cart'
import { Box, Container } from '@mui/material'

export default function CartPage() {
  const hydrated = useCartHydrated()
  const count = useCartCount()

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

      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 4 } }}>
        {!hydrated ? null : count === 0 ? (
          <CartEmpty />
        ) : (
          <>
            <CartHeader />
            <CheckoutForm />
          </>
        )}
      </Container>

      <Footer />
    </Box>
  )
}
