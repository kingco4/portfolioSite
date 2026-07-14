import { useEffect, useRef } from 'react'
import { useTheme } from '../theme/ThemeContext'

// Generative placeholder art for projects without a cover image.
// Deterministic per project (seeded by the slug) so each project
// always gets the same unique composition, tinted by its accent.
// Darken a hex color (factor 0..1) — neon accents need deepening to
// stay visible against the light theme's near-white tile surface.
function shade(hex, factor) {
  const h = hex.replace('#', '')
  const to = (i) => Math.round(parseInt(h.slice(i, i + 2), 16) * factor)
    .toString(16)
    .padStart(2, '0')
  return `#${to(0)}${to(2)}${to(4)}`
}

export default function GenTile({ seed, accent }) {
  const ref = useRef(null)
  const { theme } = useTheme() // repaint with the right surface color on theme change

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = canvas.offsetWidth || 640
    const h = canvas.offsetHeight || 400
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    // Simple seeded RNG from the slug string
    let s = 0
    for (const ch of seed) s = (s * 31 + ch.charCodeAt(0)) >>> 0
    const rand = () => {
      s = (s * 1664525 + 1013904223) >>> 0
      return s / 4294967296
    }

    const ink = getComputedStyle(document.documentElement).getPropertyValue('--ink-2').trim()
    const drawColor = theme === 'light' ? shade(accent, 0.55) : accent
    ctx.fillStyle = ink
    ctx.fillRect(0, 0, w, h)

    // Concentric arcs
    const cx = w * (0.25 + rand() * 0.5)
    const cy = h * (0.3 + rand() * 0.4)
    const rings = 6 + Math.floor(rand() * 7)
    for (let i = 0; i < rings; i++) {
      ctx.beginPath()
      const r = (i + 1) * (h / rings) * (0.5 + rand() * 0.4)
      const start = rand() * Math.PI * 2
      ctx.arc(cx, cy, r, start, start + Math.PI * (0.4 + rand() * 1.2))
      ctx.strokeStyle = drawColor
      ctx.globalAlpha = 0.25 + rand() * 0.5
      ctx.lineWidth = 1 + rand() * 2.5
      ctx.stroke()
    }

    // Scatter of dots
    ctx.globalAlpha = 1
    const dots = 40 + Math.floor(rand() * 60)
    for (let i = 0; i < dots; i++) {
      ctx.fillStyle = drawColor
      ctx.globalAlpha = 0.15 + rand() * 0.6
      const size = rand() < 0.9 ? 1 + rand() * 2 : 3 + rand() * 5
      ctx.fillRect(rand() * w, rand() * h, size, size)
    }

    // One bold shape
    ctx.globalAlpha = 0.9
    ctx.fillStyle = drawColor
    ctx.beginPath()
    ctx.arc(w * (0.15 + rand() * 0.7), h * (0.2 + rand() * 0.6), 4 + rand() * 10, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 1
  }, [seed, accent, theme])

  return <canvas ref={ref} style={{ width: '100%', height: '100%' }} aria-hidden="true" />
}
