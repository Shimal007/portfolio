import { useState, lazy, Suspense, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import StarBackground from './components/StarBackground';
import Preloader from './components/Preloader/Preloader';
import Chatbot from './components/Chatbot/Chatbot';

// Lazy-load the heavy HomePage component for code-splitting
const HomePage = lazy(() => import('./Pages/HomePage'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Memoize callbacks to prevent unnecessary re-renders
  const handleSetActiveSection = useCallback((section) => {
    setActiveSection(section);
  }, []);

  // No-op handlers for hover callbacks (prevent undefined errors)
  const noop = useCallback(() => { }, []);

  return (
    <div className="app">
      <StarBackground />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Chatbot />
      <Suspense fallback={<div className="fallback">Loading…</div>}>
        <HomePage
          setActiveSection={handleSetActiveSection}
          projectEnter={noop}
          projectLeave={noop}
          buttonEnter={noop}
          buttonLeave={noop}
        />
      </Suspense>
    </div>
  );
}

export default App;
