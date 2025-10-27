// src/components/Checkout/ActionsBar.tsx
import { Button, CircularProgress, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

type Props = {
  disabled: boolean
  loading?: boolean
}

export default function ActionsBar({ disabled, loading }: Props) {
  return (
    <Stack spacing={1.5} mt={1}>
      <Button
        type="button"
        component={RouterLink}
        to="/"
        variant="text"
        color="inherit"
        sx={{ fontWeight: 900, color: '#0F6A3C', alignSelf: 'flex-start' }}
        disabled={loading}
      >
        Продовжити покупки
      </Button>

      <Button
        type="submit"
        disabled={disabled}
        variant="contained"
        fullWidth
        sx={{
          borderRadius: 999,
          fontWeight: 900,
          textTransform: 'none',
          color: '#fff',
          background: 'linear-gradient(180deg,#F0B079 0%, #D69A62 100%)',
          minHeight: 48,
          '&:disabled': { opacity: 0.6 }
        }}
        startIcon={loading ? <CircularProgress size={20} thickness={5} /> : null}
      >
        {loading ? 'Відправляємо…' : 'Оформити'}
      </Button>
    </Stack>
  )
}
