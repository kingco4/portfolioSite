import { motion } from 'framer-motion'

// Wrap anything in <Reveal> and it fades + rises into view on scroll.
// Pass `now` to animate immediately on mount instead of waiting to be
// scrolled into view — use it for content at the top of a page so it
// can never be left invisible by a missed scroll observation.
// Optional: delay (seconds), y (start offset in px).
export default function Reveal({ children, delay = 0, y = 40, now = false, ...rest }) {
  const animateProps = now
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      {...animateProps}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
