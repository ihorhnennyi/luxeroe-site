import { keyframes } from '@emotion/react'

export const brand = {
  green: 'linear-gradient(180deg,#23A07A 0%, #0F6A3C 100%)',
  greenHover: 'linear-gradient(180deg,#2AB58C 0%, #0d5c34 100%)',
  gold: 'linear-gradient(180deg,#F0B079 0%, #D69A62 100%)',
  goldHover: 'linear-gradient(180deg,#F5BC8C 0%, #C88448 100%)'
}

export const breathe = keyframes`
  0% { transform: translateZ(0) scale(1); }
  50% { transform: translateZ(0) scale(1.035); }
  100% { transform: translateZ(0) scale(1); }
`

export const wiggle = keyframes`
  0% { transform: translate3d(0,0,0) rotate(0); }
  12% { transform: translate3d(-2.2px, 0.6px, 0) rotate(-3deg); }
  25% { transform: translate3d(2.2px, -0.6px, 0) rotate(3deg); }
  38% { transform: translate3d(-1.8px, 0.4px, 0) rotate(-2.4deg); }
  51% { transform: translate3d(1.8px, -0.4px, 0) rotate(2.4deg); }
  64% { transform: translate3d(-1.2px, 0.2px, 0) rotate(-1.6deg); }
  77% { transform: translate3d(1.2px, -0.2px, 0) rotate(1.6deg); }
  100% { transform: translate3d(0,0,0) rotate(0); }
`

export const pulse = keyframes`
  0%   { transform: scale(1);   opacity: .45; }
  65%  { transform: scale(1.7); opacity: 0; }
  100% { transform: scale(1.7); opacity: 0; }
`
