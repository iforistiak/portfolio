import React from 'react';
import { NavigationTab } from '../types';

interface NavigationProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onSelectTab,
  theme,
  onToggleTheme
}) => {
  return (
    <nav className="sidebar" id="sidebar-nav" aria-label="Main Navigation">
      <div className="sidebar-top">
        {/* Brand Logo: Clean Geometric MII Monogram Badge with Balanced RGB Accents */}
        <div
          className="brand-logo-container"
          onClick={() => onSelectTab('home')}
          title="Md. Istiak Islam (MII)"
          role="button"
          tabIndex={0}
          aria-label="Go to Home"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectTab('home');
            }
          }}
        >
          <svg width="44" height="44" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="navLogoBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0a0f1d"/>
                <stop offset="100%" stopColor="#151e32"/>
              </linearGradient>
              <linearGradient id="navLogoRgbBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444"/>
                <stop offset="50%" stopColor="#10b981"/>
                <stop offset="100%" stopColor="#2563eb"/>
              </linearGradient>
              <linearGradient id="navLogoTxt" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff"/>
                <stop offset="100%" stopColor="#e2e8f0"/>
              </linearGradient>
            </defs>
            <rect x="7" y="7" width="114" height="114" rx="30" fill="url(#navLogoBg)" stroke="url(#navLogoRgbBorder)" strokeWidth="5.5"/>
            <rect x="11" y="11" width="106" height="106" rx="26" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
            <path d="M 28 88 L 28 42 L 44 65 L 60 42 L 60 88" stroke="url(#navLogoTxt)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="77" y1="42" x2="77" y2="88" stroke="#38bdf8" strokeWidth="7" strokeLinecap="round"/>
            <line x1="97" y1="42" x2="97" y2="88" stroke="#60a5fa" strokeWidth="7" strokeLinecap="round"/>
            <circle cx="28" cy="31" r="4.5" fill="#ef4444"/>
            <circle cx="77" cy="31" r="4.5" fill="#10b981"/>
            <circle cx="97" cy="31" r="4.5" fill="#2563eb"/>
            <circle cx="44" cy="74" r="2.5" fill="#10b981"/>
          </svg>
        </div>

        {/* Active Navigation Links */}
        <div className="nav-menu" role="tablist" id="main-nav-menu">
          <button
            type="button"
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            id="nav-item-home"
            data-target="home"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelectTab('home');
            }}
            role="tab"
            aria-selected={activeTab === 'home'}
            title="Home"
          >
            <i className="fas fa-home" style={{ pointerEvents: 'none' }}></i>
            <span style={{ pointerEvents: 'none' }}>Home</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeTab === 'my-project' ? 'active' : ''}`}
            id="nav-item-my-project"
            data-target="my-project"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelectTab('my-project');
            }}
            role="tab"
            aria-selected={activeTab === 'my-project'}
            title="Projects & Skills"
          >
            <i className="fas fa-layer-group" style={{ pointerEvents: 'none' }}></i>
            <span style={{ pointerEvents: 'none' }}>Projects</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeTab === 'gallery' ? 'active' : ''}`}
            id="nav-item-gallery"
            data-target="gallery"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelectTab('gallery');
            }}
            role="tab"
            aria-selected={activeTab === 'gallery'}
            title="Photo Gallery & Albums"
          >
            <i className="fas fa-images" style={{ pointerEvents: 'none' }}></i>
            <span style={{ pointerEvents: 'none' }}>Gallery</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeTab === 'blog' ? 'active' : ''}`}
            id="nav-item-blog"
            data-target="blog"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelectTab('blog');
            }}
            role="tab"
            aria-selected={activeTab === 'blog'}
            title="Tech Blog & Articles"
          >
            <i className="fas fa-newspaper" style={{ pointerEvents: 'none' }}></i>
            <span style={{ pointerEvents: 'none' }}>Blog</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeTab === 'education' ? 'active' : ''}`}
            id="nav-item-education"
            data-target="education"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelectTab('education');
            }}
            role="tab"
            aria-selected={activeTab === 'education'}
            title="Education"
          >
            <i className="fas fa-university" style={{ pointerEvents: 'none' }}></i>
            <span style={{ pointerEvents: 'none' }}>Education</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeTab === 'contact-me' ? 'active' : ''}`}
            id="nav-item-contact-me"
            data-target="contact-me"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSelectTab('contact-me');
            }}
            role="tab"
            aria-selected={activeTab === 'contact-me'}
            title="Contact Me"
          >
            <i className="fas fa-envelope-open-text" style={{ pointerEvents: 'none' }}></i>
            <span style={{ pointerEvents: 'none' }}>Contact</span>
          </button>
        </div>
      </div>

      {/* Theme Mode Toggle Button */}
      <div className="sidebar-bottom">
        <button
          type="button"
          className="nav-item theme-toggle-btn"
          id="theme-toggle-btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleTheme();
          }}
          title="Switch Light/Dark Mode"
          aria-label="Toggle Theme"
        >
          <i
            className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}
            id="t-icon"
            style={{ pointerEvents: 'none' }}
          ></i>
          <span id="t-label" style={{ pointerEvents: 'none' }}>
            {theme === 'dark' ? 'Dark' : 'Light'}
          </span>
        </button>
      </div>
    </nav>
  );
};
