import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HomePage from './Pages/HomePage'
import Navbar from './components/Navbar/Navbar'
import StarBackground from './components/StarBackground'

// Import the StarBackground component

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      {/* Star Background added here, before other content */}
      <StarBackground />
      
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="loading-spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        ) : (
          <>
            <Navbar 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
            <HomePage 
              setActiveSection={setActiveSection}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App