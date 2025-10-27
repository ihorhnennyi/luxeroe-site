import { Box } from '@mui/material'
import { useEffect } from 'react'

export default function InstaCard({ html }: { html: string }) {
  useEffect(() => {
    const id = 'instagram-embed-script'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.async = true
      s.src = 'https://www.instagram.com/embed.js'
      document.body.appendChild(s)
    } else if ((window as any).instgrm?.Embeds?.process) {
      ;(window as any).instgrm.Embeds.process()
    }
  }, [html])

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        height: { xs: 480, md: 520 },
        background: '#fff',
        boxShadow: '0 18px 60px rgba(0,0,0,.18)',
        marginTop: { xs: '-100px', md: 0 },
        '& .instagram-media, & blockquote.instagram-media': {
          margin: '0 !important',
          maxHeight: 'none !important',
          height: '100% !important'
        }
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
