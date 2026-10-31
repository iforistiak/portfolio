import React, { useEffect } from 'react';
import { GalleryPhoto } from '../types';
import { getCategoryLabel } from '../data/portfolioData';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (direction: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate(-1);
      } else if (e.key === 'ArrowRight') {
        onNavigate(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen || !photos.length) return null;

  const currentPhoto = photos[currentIndex];
  if (!currentPhoto) return null;

  return (
    <div
      className="lightbox-modal"
      id="lightbox-modal"
      style={{ display: 'flex' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Photo Viewer"
    >
      <div className="lightbox-content-box">
        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          title="Close Viewer (Esc)"
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>

        <button
          type="button"
          className="lightbox-nav-btn lightbox-prev-btn"
          onClick={() => onNavigate(-1)}
          title="Previous Image (←)"
          aria-label="Previous"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="lightbox-img-frame">
          <img src={currentPhoto.img} alt={currentPhoto.title} id="lightbox-img" />
        </div>

        <button
          type="button"
          className="lightbox-nav-btn lightbox-next-btn"
          onClick={() => onNavigate(1)}
          title="Next Image (→)"
          aria-label="Next"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="lightbox-caption-bar">
          <div className="lightbox-caption-title" id="lightbox-title">
            {currentPhoto.title}
          </div>
          <div className="lightbox-caption-subtitle" id="lightbox-subtitle">
            {getCategoryLabel(currentPhoto.category)} • {currentIndex + 1} of {photos.length} ({currentPhoto.location || 'Rajshahi'}, {currentPhoto.date || 'Recent'})
          </div>
        </div>
      </div>
    </div>
  );
};
