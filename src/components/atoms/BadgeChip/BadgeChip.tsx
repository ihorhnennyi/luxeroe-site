import { Chip } from '@mui/material'

export default function BadgeChip({ kind }: { kind?: 'sale' | 'new' | 'hit' }) {
  if (!kind) return null
  const map = {
    sale: { label: 'Знижка', color: 'warning' as const },
    new: { label: 'Новинка', color: 'info' as const },
    hit: { label: 'Хіт', color: 'success' as const }
  }
  const v = map[kind]
  return <Chip label={v.label} color={v.color} size="small" sx={{ fontWeight: 700 }} />
}
