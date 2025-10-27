export function apiBase(): string {
  const raw = (import.meta as any).env?.VITE_API_BASE?.trim?.() || ''
  const isBrowser = typeof window !== 'undefined'
  const isLocalRaw = /(^|\/\/)(localhost|127\.0\.0\.1)(:\d+)?/.test(raw)
  const isLocalHost = isBrowser && /^(localhost|127\.0\.0\.1)$/.test(location.hostname)
  return !raw || (isLocalRaw && !isLocalHost) ? '' : raw
}
