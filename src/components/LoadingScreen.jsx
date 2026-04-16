import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="loading-scanner">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="core"></div>
      </div>
      <motion.div
        className="loading-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Initializing AI Systems...
      </motion.div>
      <motion.div
        style={{
          width: '200px',
          height: '2px',
          background: 'rgba(139, 92, 246, 0.15)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
            borderRadius: '2px',
          }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
