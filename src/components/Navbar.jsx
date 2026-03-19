import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/industries', label: 'Industries' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav-main" id="main-navigation">
        <Link to="/" className="nav-logo-wrap" aria-label="LegaBuild Home">
          <img src="/images/favicon.png" alt="LegaBuild" className="nav-logo-icon" />
          <span className="nav-brand-text">
            <span style={{ color: '#E8891E', fontWeight: 600 }}>LEGA</span>
            <span style={{ color: '#fff', fontWeight: 700 }}>BUILD</span>
          </span>
        </Link>

        {/* Desktop nav — hidden on tablet/mobile via CSS */}
        <ul className="nav-links" id="nav-links">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                id={`nav-${label.toLowerCase()}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="nav-cta" id="nav-get-started">
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </li>
        </ul>

        <button
          className={`mobile-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/*
        Fullscreen overlay rendered OUTSIDE nav-main.
        nav-main uses backdrop-filter which creates a CSS containing block,
        making position:fixed children relative to nav-main instead of the viewport.
        Placing the overlay here (sibling, not child) avoids that bug entirely.
      */}
      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        id="mobile-nav-overlay"
      >
        <ul className="mobile-overlay-links">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
