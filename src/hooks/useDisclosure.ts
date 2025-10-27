import { useCallback, useState } from 'react'

export function useDisclosure(initial = false) {
  const [open, setOpen] = useState(initial)
  const onOpen = useCallback(() => setOpen(true), [])
  const onClose = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen(s => !s), [])
  return { open, onOpen, onClose, toggle }
}
