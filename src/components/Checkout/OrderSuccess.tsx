import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '@/store/cart'

export default function OrderSuccess() {
  const navigate = useNavigate()
  const setOrderJustSubmitted = useCart(s => s.setOrderJustSubmitted)
  const [seconds, setSeconds] = useState(20)

  const goHome = () => {
    setOrderJustSubmitted(false)
    navigate('/')
  }
  const goCatalog = () => {
    setOrderJustSubmitted(false)
    navigate('/#catalog')
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const t1 = setInterval(() => setSeconds(s => (s > 0 ? s - 1 : 0)), 1000)
    const t2 = setTimeout(goHome, 10000)
    return () => {
      clearInterval(t1)
      clearTimeout(t2)
    }
  }, [navigate])

  return (
    <Box
      sx={{
        borderRadius: 4,
        border: '1px solid rgba(210,170,130,.25)',
        background: 'linear-gradient(180deg,#FFFFFF 0%,#FBF6F0 100%)',
        p: { xs: 3, md: 4 },
        textAlign: 'center',
        mt: 2
      }}
    >
      <Stack spacing={2.5} alignItems="center">
        <CheckCircleRoundedIcon sx={{ color: '#0F6A3C', fontSize: 56 }} />

        <Typography variant="h5" sx={{ fontWeight: 900, color: '#2E3D2F' }}>
          Дякуємо за замовлення!
        </Typography>

        <Typography sx={{ color: '#6B5E55', maxWidth: 600, lineHeight: 1.6 }}>
          Дякуємо, що обрали <b>LuxeRoe!</b> 🤍 Ваше замовлення успішно прийнято й вже передане в
          обробку. Наш менеджер зв’яжеться з вами найближчим часом для підтвердження деталей
          доставки.
        </Typography>

        <Typography sx={{ color: '#6B5E55', maxWidth: 600, lineHeight: 1.6 }}>
          Оплата — <b>накладений платіж</b> (при отриманні у відділенні Нової пошти). Після
          відправки ви отримаєте SMS/Viber з номером ТТН для відстеження посилки.
          <br />
          Відправлення — щодня до 15:00.
        </Typography>

        <Typography sx={{ color: '#6B5E55', fontWeight: 600 }}>
          Гарного смаку та приємного апетиту! 🍽️
        </Typography>

        <Typography sx={{ color: '#6B5E55', fontSize: 14 }}>
          Повернення на головну через {seconds} с
        </Typography>

        <Stack direction="row" spacing={2} mt={1} flexWrap="wrap" justifyContent="center">
          <Button
            variant="contained"
            onClick={goHome}
            sx={{
              borderRadius: 999,
              px: 4,
              background: 'linear-gradient(180deg,#F0B079 0%, #D69A62 100%)',
              color: '#fff',
              fontWeight: 900,
              textTransform: 'none'
            }}
          >
            На головну
          </Button>

          <Button
            variant="text"
            onClick={goCatalog}
            sx={{ fontWeight: 900, color: '#0F6A3C', textTransform: 'none' }}
          >
            Продовжити покупки
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
