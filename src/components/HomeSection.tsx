import React, { useRef } from 'react';
import { clientPartners, testimonials } from '../data/portfolioData';
import { NavigationTab } from '../types';

interface HomeSectionProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  const testimonialsTrackRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: number) => {
    if (testimonialsTrackRef.current) {
      testimonialsTrackRef.current.scrollBy({
        left: 350 * direction,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="page-section active" role="tabpanel">
      {/* Hero Banner */}
      <div className="hero-banner">
        <h1 className="hero-title">
          Creative <span className="gradient-text-flow">Mind,</span><br />
          Expert <span className="gradient-text-flow-alt">Solutions.</span>
        </h1>
        <p className="hero-desc">
          Building resilient IT infrastructure, seamless network architectures, and high-performance web applications tailored for modern businesses. From precision system administration to custom digital platforms, I transform complex technical challenges into fast, secure, and dependable solutions that drive real-world growth.
        </p>
        <div className="hero-action-buttons">
          <button
            type="button"
            className="hire-btn"
            onClick={() => onNavigate('my-project')}
          >
            <i className="fas fa-briefcase"></i> View Featured Work
          </button>
          <button
            type="button"
            className="contact-quick-btn"
            onClick={() => onNavigate('contact-me')}
          >
            <i className="fas fa-headset"></i> Request IT Consultation
          </button>
        </div>
      </div>

      {/* Live Metrics / Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue"><i className="fas fa-laptop-code"></i></div>
          <div>
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green"><i className="fas fa-check-circle"></i></div>
          <div>
            <div className="stat-number">40+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon red"><i className="fas fa-server"></i></div>
          <div>
            <div className="stat-number">120+</div>
            <div className="stat-label">IT Solutions Work</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple"><i className="fas fa-smile"></i></div>
          <div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Core Specializations */}
      <div className="section-header">
        <h2 className="section-title">Core Specializations</h2>
        <p className="section-subtitle">Professional technical services delivered to clients, teams, and growing Businesses.</p>
      </div>

      <div className="services-highlight-grid">
        <div className="service-highlight-card">
          <span className="service-icon" style={{ color: 'var(--blue)' }}>
            <i className="fas fa-network-wired"></i>
          </span>
          <h3 className="service-title">IT Support &amp; System Administration</h3>
          <p className="service-text">
            Hardware diagnostics, Windows &amp; Linux server configurations, MikroTik network security, and rapid remote or on-site technical troubleshooting.
          </p>
        </div>
        <div className="service-highlight-card">
          <span className="service-icon" style={{ color: 'var(--green)' }}>
            <i className="fas fa-code"></i>
          </span>
          <h3 className="service-title">Web Design &amp; Full-Stack Development</h3>
          <p className="service-text">
            Fast, mobile-responsive, and search-optimized business websites and custom web portals engineered for speed, clarity, and reliability.
          </p>
        </div>
        <div className="service-highlight-card">
          <span className="service-icon" style={{ color: 'var(--purple)' }}>
            <i className="fas fa-store"></i>
          </span>
          <h3 className="service-title">E-Commerce &amp; Digital Operations</h3>
          <p className="service-text">
            End-to-end online store architecture, local payment gateway setup, product catalog structure, and automated inventory workflows.
          </p>
        </div>
      </div>

      {/* Worked With (Client Logo & Name) Automatic Mini Scrolling Slider */}
      <div className="worked-with-section" aria-label="Organizations and Clients Worked With">
        <div className="section-header" style={{ marginBottom: '14px' }}>
          <h2 className="section-title" style={{ fontSize: '20px' }}>Worked With &amp; Trusted Partners</h2>
          <p className="section-subtitle">Businesses, clinics, agencies, and retail enterprises supported across Bangladesh</p>
        </div>

        <div className="client-marquee-wrapper">
          <div className="client-marquee-track" id="clientMarqueeTrack">
            {/* Set 1 */}
            {clientPartners.map((client) => (
              <div key={client.id} className="client-mini-pill">
                <div className="client-logo-badge" style={{ background: client.gradient }}>
                  <i className={client.icon}></i>
                </div>
                <div className="client-meta-text">
                  <span className="client-meta-name">{client.name}</span>
                  <span className="client-meta-sector">{client.sector}</span>
                </div>
              </div>
            ))}

            {/* Set 2 (Duplicated for seamless loop) */}
            {clientPartners.map((client) => (
              <div key={`${client.id}-dup`} className="client-mini-pill" aria-hidden="true">
                <div className="client-logo-badge" style={{ background: client.gradient }}>
                  <i className={client.icon}></i>
                </div>
                <div className="client-meta-text">
                  <span className="client-meta-name">{client.name}</span>
                  <span className="client-meta-sector">{client.sector}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Testimonials Horizontal Carousel Section */}
      <div className="testimonials-section-wrap" id="testimonials-section">
        <div className="testimonials-header-row">
          <div>
            <h2 className="section-title" style={{ marginBottom: '4px' }}>Client &amp; Partner Testimonials</h2>
            <p className="section-subtitle">Direct feedback from business owners and teams I have supported across IT, networking, and web projects</p>
          </div>
          <div className="carousel-nav-controls" aria-label="Carousel Navigation">
            <button
              type="button"
              className="carousel-ctrl-btn"
              onClick={() => scrollTestimonials(-1)}
              title="Previous Testimonial"
              aria-label="Previous"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              type="button"
              className="carousel-ctrl-btn"
              onClick={() => scrollTestimonials(1)}
              title="Next Testimonial"
              aria-label="Next"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div
          className="testimonials-carousel-track"
          id="testimonialsTrack"
          ref={testimonialsTrackRef}
          role="region"
          aria-label="Testimonials Carousel"
        >
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div>
                <span className={`testimonial-badge-role ${item.badgeClass}`}>
                  <i className={item.badgeIcon}></i> {item.badge}
                </span>
                <div className="testimonial-stars" aria-label="5 stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-quote" lang={item.isBangla ? 'bn' : undefined}>
                  {item.quote}
                </p>
              </div>
              <div className="testimonial-author-row">
                <div className="testimonial-avatar" style={{ background: item.avatarGradient }}>
                  {item.initials}
                </div>
                <div className="author-info">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
