import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSuccess() {
  const navigate = useNavigate()
  const [seconds, setSeconds] = useState(20)

  useEffect(() => {
    const t1 = setInterval(() => setSeconds(s => (s > 0 ? s - 1 : 0)), 1000)
    const t2 = setTimeout(() => navigate('/'), 10000)
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
        mt: 4
      }}
    >
      <Stack spacing={2} alignItems="center">
        <CheckCircleRoundedIcon sx={{ color: '#0F6A3C', fontSize: 56 }} />

        <Typography variant="h5" sx={{ fontWeight: 900, color: '#2E3D2F' }}>
          Замовлення прийнято!
        </Typography>

        <Typography sx={{ color: '#6B5E55', maxWidth: 600 }}>
          Дякуємо, що обрали <b>LuxeRoe!</b> 🤍 Ваше замовлення успішно оформлене й вже передане в
          обробку. Наш менеджер зв’яжеться з вами найближчим часом для підтвердження деталей
          доставки.
        </Typography>

        <Typography sx={{ color: '#6B5E55', maxWidth: 600 }}>
          Оплата — <b>накладений платіж</b> (при отриманні у відділенні Нової пошти). Після
          відправки ви отримаєте SMS/Viber з номером ТТН для відстеження посилки.
          <br />
          Відправлення — щодня до 15:00.
        </Typography>

        <Typography sx={{ color: '#6B5E55' }}>Повернення на головну через {seconds} с</Typography>

        <Stack direction="row" spacing={2} mt={1}>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
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
            onClick={() => navigate('/catalog')}
            sx={{ fontWeight: 900, color: '#0F6A3C', textTransform: 'none' }}
          >
            Продовжити покупки
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
