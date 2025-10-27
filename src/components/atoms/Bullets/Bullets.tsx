import { Circle } from '@mui/icons-material'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

const BRAND_TEXT = '#2E3D2F'

export default function Bullets({ items = [] as string[] }) {
  if (!items.length) return null
  return (
    <List dense sx={{ mt: 0.5, mb: 1.25 }}>
      {items.map((t, i) => (
        <ListItem key={i} disableGutters disablePadding sx={{ mb: 0.25 }}>
          <ListItemIcon sx={{ minWidth: 26, color: '#D18446' }}>
            <Circle sx={{ fontSize: 9 }} />
          </ListItemIcon>
          <ListItemText
            primary={t}
            primaryTypographyProps={{
              fontWeight: 600,
              sx: { color: BRAND_TEXT, fontSize: { xs: 14.5, md: 16 } }
            }}
          />
        </ListItem>
      ))}
    </List>
  )
}
