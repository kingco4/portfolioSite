import { motion } from 'framer-motion'

// Wraps every page: fade/slide in on entry. No exit animation —
// pages unmount instantly so navigation can never be blocked by a
// stuck transition.
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
