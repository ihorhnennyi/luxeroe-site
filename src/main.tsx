import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7c3aed' },
    background: { default: '#0b0c10', paper: '#16181d' }
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Arial'
  }
})

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
