// src/App.jsx - Main entry point
import { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import StarBackground from './components/StarBackground';
import './LoadingAnimation.css';
import about from './assets/images/about.png';

// Lazy-load the heavy HomePage component for code-splitting
const HomePage = lazy(() => import('./Pages/HomePage'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Short simulated loading period (2 seconds) to avoid perceived lag
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Memoize callbacks to prevent unnecessary re-renders
  const handleSetActiveSection = useCallback((section) => {
    setActiveSection(section);
  }, []);

  // No-op handlers for hover callbacks (prevent undefined errors)
  const noop = useCallback(() => { }, []);

  return (
    <div className="app">
      <StarBackground />
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-container">
            <div className="gradient-circle">
              <img src={about} alt="Profile" className="loader-profile-img" />
            </div>
            <div className="loading-text">
              <span className="name">Shimal Akmal D</span>
              <div className="typing-indicator">Loading Portfolio...</div>
            </div>
            <div className="progress-container">
              <div className="progress-bar" />
            </div>
          </div>
        </div>
      )}
      {!isLoading && (
        <>
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          <Suspense fallback={<div className="fallback">Loading…</div>}>
            <HomePage
              setActiveSection={handleSetActiveSection}
              projectEnter={noop}
              projectLeave={noop}
              buttonEnter={noop}
              buttonLeave={noop}
            />
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;