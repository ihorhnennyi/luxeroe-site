import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SmoothHashScroll({ offset = 72 }: { offset?: number }) {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/') return
    const id = hash ? decodeURIComponent(hash.slice(1)) : ''
    if (!id) {
      window.scrollTo(0, 0)
      return
    }
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }, [hash, pathname, offset])

  return null
}
