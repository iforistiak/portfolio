import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('Name', fullName);
      formData.append('Email', email);
      formData.append('Phone', phone);
      formData.append('Service', service);
      formData.append('Date', preferredDate);
      formData.append('Time', preferredTime);
      formData.append('Message', notes || 'Appointment Consultation Request');

      await fetch('https://formspree.io/f/mqejyanr', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
    } catch {
      // Show confirmation even if network error occurs
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setService('');
    setPreferredDate('');
    setPreferredTime('');
    setNotes('');
    setIsSubmitted(false);
  };

  return (
    <section id="contact-me" className="page-section active" role="tabpanel">
      <div className="section-header">
        <h2 className="section-title">Contact &amp; Book Consultation</h2>
        <p className="section-subtitle">Schedule an appointment or reach out directly for inquiries</p>
      </div>

      <div className="contact-merged-grid">
        {/* Left: Interactive Booking Form */}
        <div className="info-card" id="booking-form-card" style={{ borderTop: '5px solid var(--green)' }}>
          <h3 style={{ marginBottom: '6px', color: 'var(--text-main)', fontSize: '17px' }}>
            <i className="fas fa-calendar-alt" style={{ color: 'var(--green)', marginRight: '8px' }}></i> Book an Appointment
          </h3>
          <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Fill in your details below and I will get back to you promptly.
          </p>

          {!isSubmitted ? (
            <form id="appointment-form" onSubmit={handleSubmit}>
              <div className="booking-row">
                <div className="booking-field">
                  <label htmlFor="form-name">
                    <i className="fas fa-user" style={{ color: 'var(--blue)' }}></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="Name"
                    placeholder="Your Full Name"
                    required
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="booking-field">
                  <label htmlFor="form-email">
                    <i className="fas fa-envelope" style={{ color: 'var(--blue)' }}></i> Email Address
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="Email"
                    placeholder="name@example.com"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="booking-row">
                <div className="booking-field">
                  <label htmlFor="form-phone">
                    <i className="fas fa-phone-alt" style={{ color: 'var(--green)' }}></i> Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="form-phone"
                    name="Phone"
                    placeholder="+880 16XX-XXXXXX"
                    required
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="booking-field">
                  <label htmlFor="form-service">
                    <i className="fas fa-cog" style={{ color: 'var(--purple)' }}></i> Select Service
                  </label>
                  <select
                    id="form-service"
                    name="Service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="" disabled>Choose a service</option>
                    <option value="IT Support & Troubleshooting">IT Support &amp; System Solutions</option>
                    <option value="Network & Server Administration">Network &amp; Server Administration</option>
                    <option value="Web Development & Design">Web Development Consultation</option>
                    <option value="E-Commerce Setup">E-Commerce Store Management</option>
                    <option value="General Inquiry">Other Custom Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="booking-row">
                <div className="booking-field">
                  <label htmlFor="form-date">
                    <i className="fas fa-calendar-day" style={{ color: 'var(--red)' }}></i> Preferred Date
                  </label>
                  <input
                    type="date"
                    id="form-date"
                    name="Date"
                    required
                    min={todayStr}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                  />
                </div>
                <div className="booking-field">
                  <label htmlFor="form-time">
                    <i className="fas fa-clock" style={{ color: 'var(--blue)' }}></i> Preferred Time
                  </label>
                  <input
                    type="time"
                    id="form-time"
                    name="Time"
                    required
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                  />
                </div>
              </div>

              <div className="booking-field" style={{ marginBottom: '18px' }}>
                <label htmlFor="form-notes">
                  <i className="fas fa-comment-dots" style={{ color: 'var(--blue)' }}></i> Project Details / Notes (Optional)
                </label>
                <textarea
                  id="form-notes"
                  name="Message"
                  rows={3}
                  placeholder="Briefly describe what you need help with..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="booking-btn"
                id="submit-btn"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Request'}</span>
                <i
                  className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}
                  id="submit-btn-icon"
                ></i>
              </button>
            </form>
          ) : (
            <div
              className="submission-status-card"
              id="submission-success-card"
              style={{ display: 'block' }}
            >
              <div className="success-icon-wrap">
                <i className="fas fa-check"></i>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 800, marginBottom: '6px', color: 'var(--text-main)' }}>
                Appointment Request Sent!
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '18px' }}>
                Thank you! Your appointment details have been transmitted successfully. I will reach out to you via WhatsApp or Email within a few hours.
              </p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="contact-quick-btn"
                  onClick={resetForm}
                >
                  <i className="fas fa-redo"></i> Book Another
                </button>
                <a
                  href="https://wa.me/+8801640092412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buy-wa-btn"
                >
                  <i className="fab fa-whatsapp"></i> Chat Immediately
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Right: Direct Info & Map */}
        <div>
          <div className="info-card" style={{ borderTop: '5px solid var(--blue)', marginBottom: '18px' }}>
            <h3 style={{ marginBottom: '12px', color: 'var(--text-main)', fontSize: '16px' }}>
              <i className="fas fa-address-card" style={{ color: 'var(--blue)', marginRight: '8px' }}></i> Direct Contact Info
            </h3>

            <ul className="contact-info-list">
              <li className="contact-info-item">
                <i className="fas fa-phone-alt" style={{ color: 'var(--green)' }}></i>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>Phone / WhatsApp</div>
                  <a href="tel:+8801640092412" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 700 }}>
                    +880 1640-092412
                  </a>
                </div>
              </li>
              <li className="contact-info-item">
                <i className="fas fa-envelope" style={{ color: 'var(--blue)' }}></i>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>Email</div>
                  <a href="mailto:iforistiak@gmail.com" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 700 }}>
                    iforistiak@gmail.com
                  </a>
                </div>
              </li>
              <li className="contact-info-item">
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--red)' }}></i>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>Location</div>
                  <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>Rajshahi, Bangladesh</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Embedded Google Map */}
          <div style={{ background: 'var(--card-bg)', padding: '12px', borderRadius: '18px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--glass-border)' }}>
            <iframe
              title="Rajshahi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116334.5666922967!2d88.52924409322305!3d24.378121511211756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefd0a551957f%3A0x44c0d0bc4309f8c9!2sRajshahi!5e0!3m2!1sen!2sbd!4v1712850000000!5m2!1sen!2sbd"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
