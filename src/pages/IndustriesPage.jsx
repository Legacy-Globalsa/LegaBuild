import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const industries = [
  {
    title: 'Residential & Villas',
    desc: 'Luxury living spaces built with precision and modern aesthetics.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    title: 'Commercial & Offices',
    desc: 'Productive, tech-ready workspaces designed for growth.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
  {
    title: 'Hotels & Apartments',
    desc: 'Hospitality spaces with world-class design and comfort.',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
  {
    title: 'Hospitals & Medical',
    desc: 'Healthcare facilities optimized for patient well-being.',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
  },
  {
    title: 'Schools & Universities',
    desc: 'Inspiring educational environments that enable learning.',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
  },
  {
    title: 'Warehouses & Industrial',
    desc: 'Efficient infrastructure for logistics and manufacturing.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
  {
    title: 'Staff Housing',
    desc: 'Comfortable, space-optimized accommodations at scale.',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
  },
  {
    title: 'Government Projects',
    desc: 'Institutional builds with full compliance and accountability.',
    img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&q=80',
  },
];

export default function IndustriesPage() {
  return (
    <div className="page-scrollable" id="industries-page">
      {/* Background */}
      <div className="bg-industries" />

      {/* Hero banner */}
      <div style={{
        position: 'relative',
        height: '50vh',
        minHeight: '350px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src="/images/turnkey-project.png"
          alt="LegaBuild Industries"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(17,17,17,0.7), rgba(17,17,17,0.95))',
          zIndex: 1,
        }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '2rem' }}>
          <div className="section-label animate-in delay-1" style={{ justifyContent: 'center' }}>
            <span className="line" />
            Industries We Serve
          </div>
          <h1 className="section-title animate-in delay-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
            Building Across <span className="accent">Industries</span>
          </h1>
          <p className="section-description animate-in delay-3" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            From luxury residences to institutional facilities — we bring expertise,
            innovation, and Saudi market compliance to every sector.
          </p>
        </div>
      </div>

      {/* Industry Grid */}
      <div className="industries-section" style={{ paddingTop: '4rem' }}>
        <div className="industry-grid animate-in delay-4">
          {industries.map((ind, i) => (
            <div className="industry-card" key={i} id={`industry-card-${i}`}>
              <img src={ind.img} alt={ind.title} loading="lazy" />
              <div className="industry-card-overlay">
                <div>
                  <h3>{ind.title}</h3>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.25rem' }}>{ind.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-inner">
          <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>
            Your Industry, Our <span className="accent">Expertise</span>
          </h2>
          <p className="section-description" style={{ maxWidth: '500px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
            No matter the sector, LegaBuild brings tailored construction solutions
            designed for performance, compliance, and lasting value.
          </p>
          <Link to="/contact" className="btn-primary" id="industries-cta-btn">
            Discuss Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
