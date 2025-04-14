import { motion } from 'framer-motion'
import './CustomCursor.css'

const CustomCursor = ({ cursorVariant, cursorText }) => {
  const cursorVariants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      mixBlendMode: 'difference',
      x: -10,
      y: -10,
    },
    text: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      x: -40,
      y: -40,
    },
    button: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(0, 255, 255, 0.2)',
      border: '1px solid rgba(0, 255, 255, 0.8)',
      x: -30,
      y: -30,
    },
    project: {
      width: 100,
      height: 100,
      backgroundColor: 'rgba(255, 0, 255, 0.2)',
      border: '1px solid rgba(255, 0, 255, 0.8)',
      x: -50,
      y: -50,
    }
  }

  return (
    <motion.div
      className="cursor"
      variants={cursorVariants}
      animate={cursorVariant}
    >
      {cursorText && <span className="cursor-text">{cursorText}</span>}
    </motion.div>
  )
}

export default CustomCursor