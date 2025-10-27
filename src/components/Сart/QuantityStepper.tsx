import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import { Box, IconButton, TextField } from '@mui/material'

const BRAND = '#2E3D2F'

type Props = {
  value: number
  min?: number
  max?: number
  onChange: (next: number) => void
}

export default function QuantityStepper({ value, min = 1, max = 99, onChange }: Props) {
  const clamp = (n: number) => Math.max(min, Math.min(max, Math.round(n || 0)))

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        borderRadius: 999,
        px: 0.75,
        py: 0.25,
        border: '1px solid rgba(210,170,130,.28)',
        background: 'linear-gradient(180deg,#FFFFFF 0%, #FBF6F0 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.65)'
      }}
    >
      <IconButton
        size="small"
        onClick={() => onChange(clamp(value - 1))}
        aria-label="мінус"
        sx={{ color: BRAND }}
      >
        <RemoveRoundedIcon />
      </IconButton>

      <TextField
        value={value}
        onChange={e => onChange(clamp(parseInt(e.target.value, 10)))}
        inputProps={{
          inputMode: 'numeric',
          style: { textAlign: 'center', width: 40, fontWeight: 800, color: BRAND }
        }}
        variant="standard"
        sx={{
          '& .MuiInputBase-root:before, & .MuiInputBase-root:after': { display: 'none' }
        }}
      />

      <IconButton
        size="small"
        onClick={() => onChange(clamp(value + 1))}
        aria-label="плюс"
        sx={{ color: BRAND }}
      >
        <AddRoundedIcon />
      </IconButton>
    </Box>
  )
}
