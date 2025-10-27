import { keyframes } from '@emotion/react'
import { Button, type ButtonProps } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import React from 'react'

const breathe = keyframes`
  0%   { transform: scale(1); }
  50%  { transform: scale(1.012); }
  100% { transform: scale(1); }
`

const shine = keyframes`
  0%   { transform: translateX(-130%) skewX(-12deg); opacity: 0; }
  15%  { opacity: .35; }
  50%  { opacity: .65; }
  100% { transform: translateX(220%) skewX(-12deg); opacity: 0; }
`

type BaseProps = Omit<ButtonProps, 'children' | 'href'> & {
  text: string
  sx?: SxProps<Theme>
}

type LinkVariant = BaseProps & {
  href: string
  type?: never
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
}

type ButtonVariant = BaseProps & {
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type CTAButtonProps = LinkVariant | ButtonVariant

export default function CTAButton({ text, sx, ...rest }: CTAButtonProps) {
  const commonSx: SxProps<Theme> = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 999,
    textTransform: 'none',
    fontWeight: 900,
    px: 3,
    py: 1.25,
    letterSpacing: 0.2,
    background: 'linear-gradient(180deg,#23A07A 0%, #0F6A3C 100%)',
    color: '#fff',
    boxShadow: 'none',
    animation: `${breathe} 2.8s ease-in-out infinite`,
    isolation: 'isolate',
    textShadow: '0 0.8px 2px rgba(0,0,0,0.25)',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '55%',
      background:
        'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.18) 40%, rgba(255,255,255,.45) 50%, rgba(255,255,255,.18) 60%, rgba(255,255,255,0) 100%)',
      transform: 'translateX(-130%) skewX(-12deg)',
      animation: `${shine} 3s ease-in-out infinite`,
      pointerEvents: 'none',
      zIndex: 1
    },
    '& span, & .MuiTypography-root': { position: 'relative', zIndex: 10 },
    '&:hover': { background: 'linear-gradient(180deg,#2AB58C 0%, #0d5c34 100%)' }
  }

  if ('href' in rest && rest.href) {
    const { href, ...props } = rest
    return (
      <Button href={href} variant="contained" size="large" {...props} sx={{ ...commonSx, ...sx }}>
        {text}
      </Button>
    )
  }

  const props = rest as ButtonVariant
  return (
    <Button
      variant="contained"
      size="large"
      type={props.type ?? 'button'}
      {...props}
      sx={{ ...commonSx, ...sx }}
    >
      {text}
    </Button>
  )
}
