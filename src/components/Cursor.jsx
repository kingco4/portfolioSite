import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Accent dot that trails the mouse and grows over links/buttons.
// Hidden automatically on touch devices (see global.css).
export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const scale = useMotionValue(1)

  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 })
  const sScale = useSpring(scale, { stiffness: 300, damping: 25 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 7)
      y.set(e.clientY - 7)
      scale.set(e.target.closest('a, button') ? 2.6 : 1)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y, scale])

  return <motion.div className="cursor-dot" style={{ x: sx, y: sy, scale: sScale }} />
}
