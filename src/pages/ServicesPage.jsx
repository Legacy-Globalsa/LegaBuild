import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const services = [
  {
    title: 'General Contracting',
    desc: 'Complete project execution from planning to delivery. We ensure quality, safety, and timely delivery on all residential, commercial, and government projects.',
    img: '/images/hero-construction.png',
    num: '01',
  },
  {
    title: 'Turnkey Projects',
    desc: 'From concept to completion — we handle everything. Design, engineering, materials, installation, handover… all with a single point of accountability.',
    img: '/images/turnkey-project.png',
    num: '02',
  },
  {
    title: 'Smart Home & Building Systems',
    desc: 'Automated lighting & climate control, AI-assisted energy management, security & surveillance, voice-controlled systems, and IoT smart appliance integration.',
    img: '/images/smart-home.png',
    num: '03',
  },
  {
    title: 'Space-Saving Solutions',
    desc: 'Innovative modular designs — multi-functional furniture, pull-out systems, compact layouts, bunk & loft bed systems, custom cabinetry & intelligent storage.',
    img: '/images/space-saving.png',
    num: '04',
  },
  {
    title: 'Smart Parking Systems',
    desc: 'Automated parking systems, stackable parking lifts, digital access & monitoring. Solutions for buildings, hospitals, universities & commercial complexes.',
    img: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=800&q=80',
    num: '05',
  },
  {
    title: 'Advanced Construction',
    desc: 'Modern modular construction, sustainable materials & green technologies, energy-efficient design, acoustic & environmental comfort systems.',
    img: '/images/commercial-building.png',
    num: '06',
  },
];

export default function ServicesPage() {
  return (
    <div className="page-scrollable" id="services-page">
      {/* Background */}
      <div className="bg-services" />
      <div className="mesh-overlay" />

      {/* Services Header + Grid */}
      <div className="services-section">
        <div className="services-header animate-in">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span className="line" />
            What We Do
          </div>
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>
            Our <span className="accent">Services</span>
          </h1>
          <p className="section-description" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            From general contracting to cutting-edge smart technology, we deliver
            end-to-end solutions that transform spaces and exceed expectations.
          </p>
        </div>

        <div className="services-masonry">
          {services.map((s, i) => (
            <div className="service-card-img" key={i} id={`service-card-${i}`}>
              <img src={s.img} alt={s.title} loading="lazy" />
              <div className="service-card-content">
                <span className="service-card-number">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-inner">
          <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>
            Ready to <span className="accent">Transform</span> Your Space?
          </h2>
          <p className="section-description" style={{ maxWidth: '500px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
            Whether it's a smart home retrofit or a full-scale development project,
            our team is ready to deliver excellence.
          </p>
          <Link to="/contact" className="btn-primary" id="services-cta-btn">
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
