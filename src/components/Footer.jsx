import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="page-footer">
      <p>&copy; {new Date().getFullYear()} LegaBuild — A Legacy Global Company</p>
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://www.legacyglobalsa.com" target="_blank" rel="noopener noreferrer">
          Legacy Global
        </a>
      </div>
    </footer>
  );
}
