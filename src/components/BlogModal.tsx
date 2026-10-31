import React, { useEffect } from 'react';
import { BlogPost } from '../types';
import { convertGoogleDriveLink } from '../data/portfolioData';

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  onDiscuss: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  isOpen,
  onClose,
  onDiscuss
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !post) return null;

  const photoUrl = convertGoogleDriveLink(post.photo) || post.photo;

  return (
    <div
      className="modal-backdrop open"
      id="blog-reader-modal"
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
        aria-labelledby="blog-modal-title"
        style={{ maxWidth: '680px' }}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          title="Close Article"
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>

        <div
          id="blog-modal-meta"
          style={{ fontSize: '12px', fontWeight: 700, color: 'var(--blue)', marginBottom: '8px' }}
        >
          {post.category} · {post.date} · {post.readTime}
        </div>

        <h2
          id="blog-modal-title"
          style={{
            fontSize: '21px',
            fontWeight: 800,
            color: 'var(--text-main)',
            lineHeight: 1.35,
            marginBottom: '14px',
            paddingRight: '30px'
          }}
        >
          {post.title}
        </h2>

        <div
          style={{
            width: '100%',
            height: '240px',
            borderRadius: '14px',
            overflow: 'hidden',
            marginBottom: '18px',
            background: 'var(--bg-subtle)',
            border: '1px solid var(--glass-border)'
          }}
        >
          <img
            id="blog-modal-img"
            src={photoUrl}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80';
            }}
          />
        </div>

        <div className="blog-article-content" id="blog-modal-body">
          <p>
            <strong>{post.description}</strong>
          </p>
          {post.content.map((paragraph, idx) => (
            <div
              key={idx}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: '22px',
            borderTop: '1px solid var(--glass-border)',
            paddingTop: '16px'
          }}
        >
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
            Written by Md. Istiak Islam
          </span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="button" className="contact-quick-btn" onClick={onClose}>
              Close
            </button>
            <button
              type="button"
              className="hire-btn"
              onClick={() => {
                onClose();
                onDiscuss();
              }}
              style={{ padding: '8px 16px', fontSize: '12.5px' }}
            >
              <i className="fas fa-comments"></i> Discuss This Topic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
