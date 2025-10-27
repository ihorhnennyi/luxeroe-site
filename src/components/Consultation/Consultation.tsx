import { postLeadToTelegram } from '@/api/telegram'
import { CTAButton } from '@/components/atoms'
import { isUaPhoneOk, normalizePhone } from '@/utils/phone'
import { Box, Container, Stack, TextField, Typography } from '@mui/material'
import { useMemo, useState } from 'react'

const BRAND = '#2E3D2F'
const INPUT_BG = '#FAF1E7'
const INPUT_BORDER = 'rgba(214,132,70,.45)'
const INPUT_BORDER_HOVER = 'rgba(214,132,70,.65)'
const ERROR_BORDER = '#C84F3D'
const FOCUS_GREEN = '#0F6A3C'

export default function Consultation() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('+380')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [ok, setOk] = useState(false)

  const nameValid = useMemo(() => name.trim().length >= 2, [name])
  const phoneValid = useMemo(() => isUaPhoneOk(phone), [phone])

  const onSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!nameValid || !phoneValid || loading) return
    setError(null)
    setOk(false)
    setLoading(true)

    try {
      await postLeadToTelegram({
        firstName: name.trim(),
        phone: phone.trim(),
        sourceUrl: typeof window !== 'undefined' ? window.location.href : undefined
      })
      setOk(true)
      setName('')
      setPhone('+380')
    } catch (err: any) {
      setError(err?.message || 'Не вдалося відправити заявку. Спробуйте ще раз.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box component="section" sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            mx: 'auto',
            maxWidth: 880,
            textAlign: 'center',
            px: { xs: 2, md: 0 },
            color: BRAND
          }}
        >
          <Typography
            component="h2"
            sx={{
              color: BRAND,
              fontWeight: 900,
              fontSize: { xs: 30, md: 44 },
              lineHeight: 1.1,
              mb: { xs: 1.25, md: 1.5 }
            }}
          >
            Потребуєте консультації?
          </Typography>

          <Typography
            sx={{
              color: BRAND,
              opacity: 0.85,
              mb: { xs: 2.5, md: 3 },
              fontSize: { xs: 15, md: 16 }
            }}
          >
            Залиште свої контакти — ми звʼяжемося з вами найближчим часом.
          </Typography>

          <Box
            component="form"
            onSubmit={onSubmit}
            noValidate
            sx={{ mx: 'auto', maxWidth: 760, position: 'relative' }}
          >
            <input
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
            />
            <input
              name="email2"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
            />

            <Stack spacing={1.25}>
              <TextField
                label="Ваше ім’я *"
                placeholder="Іван"
                value={name}
                onChange={e => setName(e.target.value)}
                error={!!name && !nameValid}
                helperText={!!name && !nameValid ? 'Мінімум 2 символи' : ' '}
                fullWidth
                autoComplete="name"
                name="name"
                sx={{
                  '& .MuiInputLabel-root': { color: BRAND, fontWeight: 700, letterSpacing: 0.2 },
                  '& .MuiInputLabel-root.Mui-focused': { color: nameValid ? FOCUS_GREEN : BRAND },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3.5,
                    background: INPUT_BG,
                    '& .MuiInputBase-input': {
                      color: BRAND,
                      caretColor: BRAND,
                      '::placeholder': { color: 'rgba(46,61,47,.55)' }
                    },
                    '& fieldset': { borderColor: INPUT_BORDER },
                    '&:hover fieldset': { borderColor: INPUT_BORDER_HOVER },
                    '&.Mui-focused fieldset': {
                      borderColor: nameValid ? FOCUS_GREEN : INPUT_BORDER_HOVER
                    },
                    '&.Mui-error fieldset': { borderColor: ERROR_BORDER }
                  },
                  '& .MuiFormHelperText-root': { m: '6px 0 0 0', color: 'rgba(46,61,47,.75)' },
                  '& .MuiFormHelperText-root.Mui-error': { color: ERROR_BORDER, fontWeight: 600 }
                }}
              />

              <TextField
                label="Телефон *"
                placeholder="+380XXXXXXXXX"
                value={phone}
                onChange={e => setPhone(normalizePhone(e.target.value))}
                error={!!phone && !phoneValid}
                helperText={!!phone && !phoneValid ? 'У форматі +380XXXXXXXXX' : 'У форматі +380…'}
                fullWidth
                autoComplete="tel"
                name="phone"
                sx={{
                  '& .MuiInputLabel-root': { color: BRAND, fontWeight: 700, letterSpacing: 0.2 },
                  '& .MuiInputLabel-root.Mui-focused': { color: phoneValid ? FOCUS_GREEN : BRAND },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3.5,
                    background: INPUT_BG,
                    '& .MuiInputBase-input': {
                      color: BRAND,
                      caretColor: BRAND,
                      '::placeholder': { color: 'rgba(46,61,47,.55)' }
                    },
                    '& fieldset': { borderColor: INPUT_BORDER },
                    '&:hover fieldset': { borderColor: INPUT_BORDER_HOVER },
                    '&.Mui-focused fieldset': {
                      borderColor: phoneValid ? FOCUS_GREEN : INPUT_BORDER_HOVER
                    },
                    '&.Mui-error fieldset': { borderColor: ERROR_BORDER }
                  },
                  '& .MuiFormHelperText-root': { m: '6px 0 0 0', color: 'rgba(46,61,47,.75)' },
                  '& .MuiFormHelperText-root.Mui-error': { color: ERROR_BORDER, fontWeight: 600 }
                }}
                inputProps={{ inputMode: 'tel' }}
              />

              <Box sx={{ mt: 1.25, position: 'relative' }}>
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    left: 18,
                    right: 18,
                    bottom: -10,
                    height: 22,
                    borderRadius: 999,
                    filter: 'blur(12px)',
                    background: 'rgba(0,0,0,.20)'
                  }}
                />
                <CTAButton
                  text={loading ? 'Відправляємо…' : 'Зателефонуйте мені'}
                  type="submit"
                  disabled={!nameValid || !phoneValid || !name || loading}
                  sx={{
                    width: '100%',
                    borderRadius: 999,
                    py: { xs: 1.6, md: 1.8 },
                    fontSize: { xs: 16, md: 18 },
                    letterSpacing: 0.2,
                    border: '1px solid rgba(15,106,60,0.30)',
                    '&.Mui-disabled': { opacity: 0.6 }
                  }}
                />
              </Box>

              {ok && (
                <Typography sx={{ color: FOCUS_GREEN, fontWeight: 700, mt: 0.5 }}>
                  Дякуємо! Ми звʼяжемося з вами найближчим часом.
                </Typography>
              )}
              {error && (
                <Typography sx={{ color: ERROR_BORDER, fontWeight: 600, mt: 0.5 }}>
                  {error}
                </Typography>
              )}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
