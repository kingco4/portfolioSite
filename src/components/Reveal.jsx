import { motion } from 'framer-motion'

// Wrap anything in <Reveal> and it fades + rises into view on scroll.
// Optional: delay (seconds), y (start offset in px).
export default function Reveal({ children, delay = 0, y = 40, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
