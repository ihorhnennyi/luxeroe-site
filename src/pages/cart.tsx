import { CartEmpty, CartHeader, CheckoutForm, Footer, Header, OrderSuccess, TopTicker } from '@/components'
import { useCartCount, useCartHydrated, useCartOrderJustSubmitted } from '@/store/cart'
import { Box, Container } from '@mui/material'

export default function CartPage() {
  const hydrated = useCartHydrated()
  const count = useCartCount()
  const orderJustSubmitted = useCartOrderJustSubmitted()

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

      <Container
        id="cart"
        maxWidth="lg"
        disableGutters
        sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 4 } }}
      >
        {!hydrated ? null : orderJustSubmitted ? (
          <OrderSuccess />
        ) : count === 0 ? (
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
