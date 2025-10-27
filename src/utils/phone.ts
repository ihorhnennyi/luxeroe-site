export function normalizePhone(raw: string) {
  const only = raw.replace(/[^\d+]/g, '')
  if (!only.startsWith('+')) return '+' + only.replace(/[^\d]/g, '')
  return '+' + only.slice(1).replace(/[^\d]/g, '')
}

export function isUaPhoneOk(v: string) {
  return /^\+380\d{9}$/.test(v.trim())
}
