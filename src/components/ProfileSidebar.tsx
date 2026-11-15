import React, { useState, useEffect } from 'react';
import { typewriterTitles, personalProfileInfo } from '../data/portfolioData';

interface ProfileSidebarProps {
  onNavigateContact: () => void;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ onNavigateContact }) => {
  const [displayText, setDisplayText] = useState('');
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = typewriterTitles[titleIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIdx === currentTitle.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % typewriterTitles.length);
      timer = setTimeout(() => {}, 400);
    } else {
      const speed = isDeleting ? 35 : 70;
      timer = setTimeout(() => {
        const nextCharIdx = isDeleting ? charIdx - 1 : charIdx + 1;
        setCharIdx(nextCharIdx);
        setDisplayText(currentTitle.substring(0, nextCharIdx));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, titleIdx]);

  return (
    <aside className="profile-side" id="profile-aside">
      <div className="profile-badge-status">
        <span className="status-dot"></span>
        <span>Available for Projects</span>
      </div>

      <div className="profile-img-ring" title="Md. Istiak Islam">
        <div className="profile-img">
          <img
            src="/assets/aistudio/IMG_20240808_220557_6d5f2025.jpg"
            alt="Md. Istiak Islam"
            className="profile-photo-img"
            draggable="false"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.indexOf('/public/') === -1) {
                target.src = '/public/assets/aistudio/IMG_20240808_220557_6d5f2025.jpg';
              }
            }}
          />
        </div>
      </div>

      <h2 className="profile-name">
        <span>MD. ISTIAK ISLAM</span>
        <span className="profile-verified-shield" title="Verified IT Specialist & Consultant" aria-label="Verified Profile">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2L4 5.4V11.4C4 16.5 7.4 21.2 12 22.4C16.6 21.2 20 16.5 20 11.4V5.4L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 12.2L11 14.2L15.2 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </h2>

      <div className="typing-container" aria-live="polite">
        <span id="type-text">{displayText}</span>
      </div>

      <div className="profile-org-meta">
        <span className="profile-org-item">
          <i className="fas fa-briefcase" style={{ color: 'var(--blue)' }}></i> JBD IT
        </span>
        <span className="profile-meta-sep" aria-hidden="true">·</span>
        <span className="profile-org-item">
          <i className="fas fa-map-marker-alt" style={{ color: 'var(--red)' }}></i> {personalProfileInfo.location}
        </span>
      </div>

      <p className="profile-bio-text">
        {personalProfileInfo.bio}
      </p>

      <div className="social-box" aria-label="Social Profiles">
        <a href="https://www.facebook.com/mdistiakislamamin" target="_blank" rel="noopener noreferrer" className="fb" title="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com/istiakislam_" target="_blank" rel="noopener noreferrer" className="ig" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://pinterest.com/iforistiak" target="_blank" rel="noopener noreferrer" className="pt" title="Pinterest">
          <i className="fab fa-pinterest-p"></i>
        </a>
        <a href="https://linkedin.com/in/thistiak" target="_blank" rel="noopener noreferrer" className="li" title="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="yt" title="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://t.me/iforistiak" target="_blank" rel="noopener noreferrer" className="tg" title="Telegram">
          <i className="fab fa-telegram-plane"></i>
        </a>
        <a href="https://github.com/iforistiak" target="_blank" rel="noopener noreferrer" className="gh" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://bn.quora.com/profile/MD-ISTIAK-ISLAM-1?ch=10&oid=1701224473&share=3afcefea&srid=hiecML&target_type=user" target="_blank" rel="noopener noreferrer" className="qa" title="Quora">
          <i className="fab fa-quora"></i>
        </a>
      </div>

      <div className="profile-actions">
        <a
          href="https://wa.me/+8801640092412?text=Hello%20Istiak,%20I%20would%20like%20to%20discuss%20a%20project%20or%20IT%20service."
          className="hire-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> LET'S TALK
        </a>
        <button
          type="button"
          className="contact-quick-btn"
          onClick={onNavigateContact}
        >
          <i className="fas fa-calendar-check"></i> Book Consultation
        </button>
      </div>
    </aside>
  );
};

