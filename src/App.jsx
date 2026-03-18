import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [homeReady, setHomeReady] = useState(false);

  const handleHomeContentReady = useCallback(() => setHomeReady(true), []);

  return (
    <>
      <ScrollToTop />
      {!isHome && <AnimatedBackground />}
      <div className={`spline-delayed ${!isHome || homeReady ? 'spline-visible' : ''}`}>
        <Navbar />
      </div>
      <main
        style={{
          position: 'relative',
          zIndex: 1,
          height: isHome ? '100vh' : '100vh',
          overflow: isHome ? 'hidden' : 'auto',
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage onContentReady={handleHomeContentReady} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
