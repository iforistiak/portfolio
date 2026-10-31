import React, { useState, useEffect } from 'react';
import { typewriterTitles } from '../data/portfolioData';

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
      const speed = isDeleting ? 45 : 95;
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
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.indexOf('/public/') === -1) {
                target.src = '/public/assets/aistudio/IMG_20240808_220557_6d5f2025.jpg';
              }
            }}
          />
        </div>
      </div>

      <h2 className="profile-name">MD. ISTIAK ISLAM</h2>
      <div className="typing-container">
        <span id="type-text">{displayText}</span>
      </div>
      <p className="profile-location">
        <i className="fas fa-map-marker-alt" style={{ color: 'var(--red)' }}></i> Rajshahi, Bangladesh
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
