import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import { Fab } from '@mui/material'
import { brand } from './fabTokens'

type Props = { onClick: () => void }

export default function ScrollTopFab({ onClick }: Props) {
  return (
    <Fab
      aria-label="До верху"
      onClick={onClick}
      sx={{
        width: 56,
        height: 56,
        color: '#fff',
        background: brand.gold,
        boxShadow:
          '0 20px 44px rgba(214,154,98,.30), 0 6px 16px rgba(0,0,0,.16), inset 0 0 0 1px rgba(255,255,255,.22)',
        '&:hover': { background: brand.goldHover }
      }}
    >
      <KeyboardArrowUpRoundedIcon sx={{ fontSize: 24 }} />
    </Fab>
  )
}
