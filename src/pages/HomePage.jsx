import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SPLINE_DELAY = 6000;

export default function HomePage({ onContentReady }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      onContentReady?.();
    }, SPLINE_DELAY);
    return () => clearTimeout(timer);
  }, [onContentReady]);

  return (
    <div className="page" id="home-page">
      {/* Spline 3D Background */}
      <div className="spline-bg-wrap">
        <iframe
          src="https://my.spline.design/deliveringthehappinessanimted-zcP2D0YPquLempSPAAh1KSdy/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="spline-iframe"
          title="LegaBuild 3D Background"
          loading="eager"
        />
        <div className={`spline-overlay spline-delayed ${showContent ? 'spline-visible' : ''}`} />
      </div>

      {/* Hero Content — stagger-fades in after Spline delay */}
      <div className={`hero-content ${showContent ? 'hero-reveal' : ''}`}>
        <div className="hero-badge hero-stagger">
          <span className="dot" />
          Design & Build Innovation
        </div>

        <h1 className="hero-title hero-stagger">
          Where <span className="accent">Vision</span><br />
          Meets Innovation
        </h1>

        <p className="hero-subtitle hero-stagger">
          We don't just build structures — we build smarter ways of living and working.
          Transforming spaces through advanced construction solutions & smart technology.
        </p>

        <div className="hero-actions hero-stagger">
          <Link to="/services" className="btn-primary" id="hero-explore-btn">
            Explore Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link to="/about" className="btn-outline" id="hero-about-btn">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
