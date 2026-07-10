import { useEffect, useRef } from 'react'

// Generative flow-field particle system behind the hero.
// Particles drift along a noise field in the accent color and
// react gently to the mouse. Tune the CONFIG values to taste.
const CONFIG = {
  particleCount: 260,
  speed: 0.7,
  fieldScale: 0.0016, // lower = broader, smoother currents
  mouseRadius: 140, // px radius of mouse influence
  trailFade: 0.06, // lower = longer trails
}

export default function HeroCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
    const ink = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim()

    let w, h, dpr, raf
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = ink
      ctx.fillRect(0, 0, w, h)
    }
    resize()

    const particles = Array.from({ length: CONFIG.particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      life: Math.random() * 200,
    }))

    // Cheap pseudo-noise built from layered sines — no library needed.
    const field = (x, y, t) => {
      const s = CONFIG.fieldScale
      return (
        Math.sin(x * s * 1.7 + t * 0.0003) +
        Math.cos(y * s * 2.3 - t * 0.0002) +
        Math.sin((x + y) * s + t * 0.00015)
      ) * Math.PI
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const step = (t) => {
      // Translucent ink wash creates the trails
      ctx.fillStyle = ink
      ctx.globalAlpha = CONFIG.trailFade
      ctx.fillRect(0, 0, w, h)
      ctx.globalAlpha = 1

      for (const p of particles) {
        const angle = field(p.x, p.y, t)
        let vx = Math.cos(angle) * CONFIG.speed
        let vy = Math.sin(angle) * CONFIG.speed

        // Push away from the mouse
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d = Math.hypot(dx, dy)
        if (d < CONFIG.mouseRadius && d > 0) {
          const f = (1 - d / CONFIG.mouseRadius) * 2.2
          vx += (dx / d) * f
          vy += (dy / d) * f
        }

        p.x += vx
        p.y += vy
        p.life -= 1

        if (p.life <= 0 || p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10) {
          p.x = Math.random() * w
          p.y = Math.random() * h
          p.life = 150 + Math.random() * 150
        }

        ctx.fillStyle = accent
        ctx.globalAlpha = Math.min(p.life / 60, 0.7)
        ctx.fillRect(p.x, p.y, 1.6, 1.6)
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(step)
    }

    if (!reduced) {
      raf = requestAnimationFrame(step)
      window.addEventListener('mousemove', onMove)
    }
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />
}
