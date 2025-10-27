import { createTheme } from '@mui/material'

const BRAND = '#2E3D2F'

export const GOLD_BORDER = 'rgba(210,170,130,.25)'

export const lightFormTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0F6A3C' },
    text: { primary: BRAND, secondary: '#6B5E55' }
  },
  components: {
    MuiTextField: { defaultProps: { variant: 'outlined', size: 'medium' } },
    MuiOutlinedInput: { styleOverrides: { root: { background: '#fff' } } }
  }
})

export const BRAND_COLOR = BRAND
