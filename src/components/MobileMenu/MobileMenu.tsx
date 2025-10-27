import { MAIN_MENU } from '@/data/menu'
import { SOCIALS } from '@/data/socials'
import CloseIcon from '@mui/icons-material/Close'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneIcon from '@mui/icons-material/Phone'
import TelegramIcon from '@mui/icons-material/Telegram'
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography
} from '@mui/material'

type Props = { open: boolean; onClose: () => void }

const BRAND_TEXT = '#2E3D2F'
const ACCENT_GREEN = '#0F6A3C'

export default function MobileMenu({ open, onClose }: Props) {
  const iconFor = (k: string) => {
    switch (k) {
      case 'instagram':
        return <InstagramIcon sx={{ color: BRAND_TEXT }} />
      case 'facebook':
        return <FacebookIcon sx={{ color: BRAND_TEXT }} />
      case 'telegram':
        return <TelegramIcon sx={{ color: BRAND_TEXT }} />
      default:
        return null
    }
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, #FFF6EB 0%, #FFF2E1 100%)',
          display: 'flex'
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
        <Stack direction="row" spacing={1.2} alignItems="center">
          <Box component="img" src="/logo.svg" alt="LuxeRoe" sx={{ width: 28, height: 28 }} />
          <Typography variant="h6" fontWeight={900} sx={{ color: BRAND_TEXT }}>
            LuxeRoe
          </Typography>
        </Stack>
        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{
            color: BRAND_TEXT,
            bgcolor: 'transparent',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.06)' }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: 'rgba(210,170,130,0.25)' }} />

      <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
        <List>
          {MAIN_MENU.map(it => (
            <ListItemButton
              key={it.href}
              component="a"
              href={it.href}
              onClick={onClose}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
              }}
            >
              <ListItemText
                primary={it.label}
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: 800,
                  sx: { color: BRAND_TEXT }
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Button
          component="a"
          href="tel:+380939858552"
          size="large"
          startIcon={<PhoneIcon />}
          sx={{
            mt: 1.5,
            width: '100%',
            borderRadius: 999,
            textTransform: 'none',
            fontWeight: 800,
            justifyContent: 'center',
            bgcolor: '#EAF5EE',
            color: ACCENT_GREEN,
            border: '1px solid rgba(15,106,60,0.30)',
            boxShadow: 'none',
            '&:hover': {
              bgcolor: '#E1F0E8',
              borderColor: 'rgba(15,106,60,0.45)'
            }
          }}
        >
          Подзвонити: +380939858552
        </Button>
      </Box>

      <Divider sx={{ borderColor: 'rgba(210,170,130,0.25)' }} />

      <Box sx={{ p: 2 }}>
        <Typography variant="body2" sx={{ color: BRAND_TEXT, opacity: 0.7, mb: 1 }}>
          Ми в соцмережах
        </Typography>
        <Stack direction="row" spacing={1.5}>
          {SOCIALS.map(s => (
            <IconButton
              key={s.label}
              component={Link}
              href={s.href}
              target="_blank"
              rel="noopener"
              aria-label={s.label}
              sx={{
                color: BRAND_TEXT,
                '&:hover': { bgcolor: 'rgba(0,0,0,0.06)' }
              }}
            >
              {iconFor(s.icon)}
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Drawer>
  )
}
