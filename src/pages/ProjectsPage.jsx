import Footer from '../components/Footer';

const projects = [
  {
    title: 'Al Riyadh Luxury Villas',
    category: 'Residential',
    img: '/images/hero-construction.png',
  },
  {
    title: 'Smart Office Complex',
    category: 'Commercial',
    img: '/images/commercial-building.png',
  },
  {
    title: 'Connected Living Suite',
    category: 'Smart Home',
    img: '/images/smart-home.png',
  },
  {
    title: 'Modern Staff Housing',
    category: 'Turnkey',
    img: '/images/turnkey-project.png',
  },
  {
    title: 'Compact Urban Living',
    category: 'Space Solutions',
    img: '/images/space-saving.png',
  },
];

export default function ProjectsPage() {
  return (
    <div className="page" id="projects-page" style={{ flexDirection: 'column', paddingTop: '6rem' }}>
      <div className="section-content full-width" style={{ height: 'auto', flex: 1, justifyContent: 'center' }}>
        <div className="section-label animate-in delay-1">
          <span className="line" />
          Portfolio
        </div>

        <h1 className="section-title animate-in delay-2" style={{ marginBottom: '0.5rem' }}>
          Featured <span className="accent">Projects</span>
        </h1>

        <p className="section-description animate-in delay-3" style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '0' }}>
          Every project is a legacy. Explore our portfolio of precision-built
          spaces across Saudi Arabia and beyond.
        </p>

        <div className="projects-grid animate-in delay-4">
          {projects.map((p, i) => (
            <div className="project-card" key={i} id={`project-card-${i}`}>
              <img src={p.img} alt={p.title} />
              <div className="project-card-overlay">
                <h3>{p.title}</h3>
                <p>{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
