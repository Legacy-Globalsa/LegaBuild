import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="page-scrollable" id="about-page">
      {/* Hero Split Section */}
      <div className="section-split">
        {/* Image Side */}
        <div className="section-image animate-in-left">
          <img
            src="/images/hero-construction.png"
            alt="LegaBuild modern construction project"
          />
          <div className="section-image-overlay" />
        </div>

        {/* Content Side */}
        <div className="section-content animate-in-right">
          <div className="section-label">
            <span className="line" />
            Who We Are
          </div>

          <h1 className="section-title">
            Building <span className="accent">Legacy</span>,<br />
            Shaping Futures
          </h1>

          <p className="section-description">
            LegaBuild is the design & build arm of Legacy Global Commercial Services Co.,
            dedicated to transforming residential, commercial, and institutional spaces
            through advanced construction solutions, smart technology integrations, and
            space-optimization concepts tailored for modern living.
          </p>

          <div className="stats-row" style={{ marginTop: '2.5rem' }}>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <p className="section-description" style={{ fontStyle: 'italic', fontSize: '0.95rem', borderLeft: '3px solid var(--orange-primary)', paddingLeft: '1.25rem' }}>
              "To redefine construction and spatial development through technology,
              creativity, and value-driven execution."
            </p>
          </div>
        </div>
      </div>

      {/* Why LegaBuild Section */}
      <div className="why-section">
        <div className="why-content">
          <div className="why-left">
            <div className="section-label">
              <span className="line" />
              Why Choose Us
            </div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
              Why <span className="accent">LegaBuild</span>?
            </h2>
            <p className="section-description" style={{ marginBottom: '0.5rem' }}>
              We don't just build — we enhance lifestyles and operational efficiency.
              Every project is approached with precision, passion, and professionalism.
            </p>

            <div className="why-grid">
              <div className="why-item">
                <div className="why-item-icon">💡</div>
                <div>
                  <h4>Innovation-Led Design</h4>
                  <p>Future-focused solutions for today's challenges</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-item-icon">🏛️</div>
                <div>
                  <h4>Saudi Market Expertise</h4>
                  <p>Full regulatory compliance and local insight</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-item-icon">🎯</div>
                <div>
                  <h4>Tailored Solutions</h4>
                  <p>Custom-built for every space and budget</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-item-icon">🤝</div>
                <div>
                  <h4>Partnership-Driven</h4>
                  <p>Performance-focused and results-oriented</p>
                </div>
              </div>
            </div>
          </div>

          <div className="why-right">
            <img src="/images/commercial-building.png" alt="Modern commercial building by LegaBuild" />
          </div>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="cta-section">
        <div className="cta-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span className="line" />
            Our Commitment
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Every Project Is a <span className="accent">Legacy</span>
          </h2>
          <p className="section-description" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            We approach each build with precision, passion, and professionalism —
            ensuring your investment delivers lasting value, style, and comfort.
            Let us transform your vision into reality.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
