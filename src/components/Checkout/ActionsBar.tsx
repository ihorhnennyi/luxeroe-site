import { Button, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

type Props = {
  disabled: boolean
}

export default function ActionsBar({ disabled }: Props) {
  return (
    <Stack spacing={1.5} mt={1}>
      <Button
        type="button"
        component={RouterLink}
        to="/"
        variant="text"
        color="inherit"
        sx={{ fontWeight: 900, color: '#0F6A3C', alignSelf: 'flex-start' }}
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
          '&:disabled': { opacity: 0.5 }
        }}
      >
        Оформити
      </Button>
    </Stack>
  )
}
