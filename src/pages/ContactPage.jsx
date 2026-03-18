import { useState } from 'react';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! Our team will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="page-scrollable" id="contact-page">
      {/* Background */}
      <div className="bg-contact" />

      {/* Hero area */}
      <div style={{
        position: 'relative',
        height: '40vh',
        minHeight: '300px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src="/images/space-saving.png"
          alt="LegaBuild Contact"
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
          background: 'linear-gradient(to bottom, rgba(17,17,17,0.6), rgba(17,17,17,0.95))',
          zIndex: 1,
        }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '2rem' }}>
          <div className="section-label animate-in delay-1" style={{ justifyContent: 'center' }}>
            <span className="line" />
            Get In Touch
          </div>
          <h1 className="section-title animate-in delay-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
            Let's Build Your <span className="accent">Future</span>
          </h1>
          <p className="section-description animate-in delay-3" style={{ maxWidth: '550px', margin: '0 auto', textAlign: 'center' }}>
            Looking to innovate, optimize, or transform your space?
            Reach out and let's start building something extraordinary.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contact-section" style={{ paddingTop: '4rem' }}>
        <div className="contact-grid animate-in delay-4">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-icon">📱</div>
              <div>
                <h4>Mobile Hotline</h4>
                <p><a href="tel:+966503602359">+966 50 360 2359</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:info@legacyglobalsa.com">info@legacyglobalsa.com</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">🌐</div>
              <div>
                <h4>Website</h4>
                <p><a href="https://www.legacyglobalsa.com" target="_blank" rel="noopener noreferrer">www.legacyglobalsa.com</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div>
                <h4>Office</h4>
                <p>Near Al Mutlaq Hotel<br />King Abdulaziz Rd<br />Kingdom of Saudi Arabia</p>
              </div>
            </div>

            {/* Map Embed Placeholder */}
            <div style={{
              width: '100%',
              height: '200px',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <iframe
                title="LegaBuild Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.7) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">Send Us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  id="input-name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  id="input-email"
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  id="input-phone"
                />
                <select
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  id="input-subject"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="" disabled>Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="contracting">General Contracting</option>
                  <option value="turnkey">Turnkey Project</option>
                  <option value="smarthome">Smart Home Systems</option>
                  <option value="spacesaving">Space-Saving Solutions</option>
                  <option value="parking">Smart Parking</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Tell us about your project, timeline, and requirements..."
                className="form-input form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                id="input-message"
              />
              <button type="submit" className="btn-primary" id="submit-btn" style={{ width: '100%', justifyContent: 'center' }}>
                Send Inquiry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
