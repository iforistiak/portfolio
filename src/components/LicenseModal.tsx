import React, { useEffect } from 'react';

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LicenseModal: React.FC<LicenseModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop open"
      id="license-security-modal"
      style={{ display: 'flex' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="syllabus-modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="license-modal-title"
        style={{ maxWidth: '620px' }}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          title="Close License"
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>

        <div
          style={{
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--green)',
            marginBottom: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <i className="fas fa-shield-alt"></i> Security Level: Tier-4 Strict Proprietary Protection
        </div>

        <h2
          id="license-modal-title"
          style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}
        >
          GitHub Proprietary License &amp; Usage Restrictions
        </h2>

        <div
          style={{
            background: 'var(--bg-subtle)',
            border: '1px solid var(--glass-border)',
            borderRadius: '14px',
            padding: '16px',
            fontSize: '12.5px',
            lineHeight: 1.68,
            color: 'var(--text-main)',
            marginBottom: '16px'
          }}
        >
          <p style={{ marginBottom: '10px' }}>
            <strong>
              Copyright © 2026 Md. Istiak Islam (
              <a
                href="https://github.com/iforistiak"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--blue)' }}
              >
                @iforistiak
              </a>
              ). All Rights Reserved.
            </strong>
          </p>
          <p style={{ marginBottom: '10px' }}>
            <strong>1. No Copying or Redistribution Without Permission:</strong>
            <br />
            All source code, UI/UX layouts, graphics, photographs, and written content in this portfolio are the exclusive intellectual property of Md. Istiak Islam. Copying, cloning, scraping, or redistributing any part of this code without prior written permission is strictly prohibited.
          </p>
          <p style={{ marginBottom: '10px' }}>
            <strong>2. Prohibited Business, Corporate &amp; Practice Use:</strong>
            <br />
            This repository and codebase may <strong>NOT</strong> be used for any business, corporate, commercial agency, client project, or personal coding practice / template replication.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>3. Active Security Enforcement:</strong>
            <br />
            Protected by XSS sanitization, HTTP security headers (<code>X-Content-Type-Options: nosniff</code>, strict <code>Referrer-Policy</code>), anti-scraping guards, and DMCA copyright enforcement.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            borderTop: '1px solid var(--glass-border)',
            paddingTop: '14px'
          }}
        >
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Permissions Inquiry: <strong>iforistiak@gmail.com</strong>
          </span>
          <button
            type="button"
            className="hire-btn"
            onClick={onClose}
            style={{ padding: '8px 18px', fontSize: '12.5px' }}
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
