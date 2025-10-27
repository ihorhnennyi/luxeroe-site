import { useCallback, useEffect, useRef, useState } from 'react'

export function useAutoCycle(length: number, intervalMs = 5000) {
  const [index, setIndex] = useState(0)
  const pausedRef = useRef(false)
  const timerRef = useRef<number | null>(null)

  const next = useCallback(() => {
    setIndex(i => (i + 1) % Math.max(1, length))
  }, [length])

  const prev = useCallback(() => {
    setIndex(i => (i - 1 + Math.max(1, length)) % Math.max(1, length))
  }, [length])

  const pause = useCallback(() => {
    pausedRef.current = true
  }, [])
  const resume = useCallback(() => {
    pausedRef.current = false
  }, [])

  useEffect(() => {
    if (length <= 1) return
    const tick = () => !pausedRef.current && next()
    timerRef.current = window.setInterval(tick, intervalMs)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [length, intervalMs, next])

  return { index, setIndex, next, prev, pause, resume }
}
