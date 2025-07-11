import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar/Navbar';
import StarBackground from './components/StarBackground';
import './LoadingAnimation.css'; // Create this new CSS file
import about from './assets/images/about.png';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Increased to 3s to show the full animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <StarBackground />
      
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="loading-container">
              {/* Animated profile image loader */}
              <motion.div
                className="gradient-circle"
                style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <motion.img
                  src={about}
                  alt="Profile"
                  className="loader-profile-img"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.9,
                    ease: "linear"
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              </motion.div>
              
              {/* Typing animation text */}
              <motion.div
                className="loading-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="name">Shimal Akmal D</span>
                <motion.div
                  className="typing-indicator"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  Loading Portfolio...
                </motion.div>
              </motion.div>
              
              {/* Progress bar */}
              <motion.div 
                className="progress-container"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ 
                  duration: 2.5,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="progress-bar"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 2.5,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
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
  );
}

export default App;