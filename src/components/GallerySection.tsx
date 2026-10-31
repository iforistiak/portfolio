import React, { useState, useMemo } from 'react';
import { defaultGalleryPhotos, getCategoryLabel, convertGoogleDriveLink } from '../data/portfolioData';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (photos: GalleryPhoto[], index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const photos = useMemo(() => {
    return defaultGalleryPhotos.map((photo) => ({
      ...photo,
      img: convertGoogleDriveLink(photo.img) || photo.img
    }));
  }, []);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return photos;
    return photos.filter((p) => p.category === activeCategory);
  }, [photos, activeCategory]);

  const counts = useMemo(() => {
    return {
      all: photos.length,
      infrastructure: photos.filter((p) => p.category === 'infrastructure').length,
      training: photos.filter((p) => p.category === 'training').length,
      certificates: photos.filter((p) => p.category === 'certificates').length,
      events: photos.filter((p) => p.category === 'events').length
    };
  }, [photos]);

  return (
    <section id="gallery" className="page-section active" role="tabpanel">
      <div className="section-header">
        <h2 className="section-title">
          Photo <span className="gradient-text-flow">Gallery</span> &amp; <span className="gradient-text-flow-alt">Albums</span>
        </h2>
        <p className="section-subtitle">
          Explore snapshots from enterprise server setups, network infrastructure deployments, recognition ceremonies, and industry events.
        </p>
      </div>

      {/* Gallery Filter & Category Tabs */}
      <div className="gallery-filter-bar">
        <div className="gallery-album-chips" id="gallery-album-chips">
          <button
            type="button"
            className={`album-chip-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <i className="fas fa-th"></i> All Photos{' '}
            <span className="album-count-badge" id="count-all">
              {counts.all}
            </span>
          </button>
          <button
            type="button"
            className={`album-chip-btn ${activeCategory === 'infrastructure' ? 'active' : ''}`}
            onClick={() => setActiveCategory('infrastructure')}
          >
            <i className="fas fa-server"></i> Server Labs &amp; Setups{' '}
            <span className="album-count-badge" id="count-infrastructure">
              {counts.infrastructure}
            </span>
          </button>
          <button
            type="button"
            className={`album-chip-btn ${activeCategory === 'training' ? 'active' : ''}`}
            onClick={() => setActiveCategory('training')}
          >
            <i className="fas fa-network-wired"></i> Field Work &amp; Labs{' '}
            <span className="album-count-badge" id="count-training">
              {counts.training}
            </span>
          </button>
          <button
            type="button"
            className={`album-chip-btn ${activeCategory === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveCategory('certificates')}
          >
            <i className="fas fa-award"></i> Recognition &amp; Milestones{' '}
            <span className="album-count-badge" id="count-certificates">
              {counts.certificates}
            </span>
          </button>
          <button
            type="button"
            className={`album-chip-btn ${activeCategory === 'events' ? 'active' : ''}`}
            onClick={() => setActiveCategory('events')}
          >
            <i className="fas fa-calendar-check"></i> Tech Events &amp; Summits{' '}
            <span className="album-count-badge" id="count-events">
              {counts.events}
            </span>
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredPhotos.length > 0 ? (
        <div className="gallery-grid" id="gallery-grid-container">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="gallery-item-card"
              onClick={() => onOpenLightbox(filteredPhotos, index)}
            >
              <div className="gallery-img-wrap">
                <span className="gallery-album-tag">
                  <i className="fas fa-folder"></i> {getCategoryLabel(photo.category)}
                </span>
                <img
                  src={photo.img}
                  alt={photo.title}
                  className="gallery-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="gallery-img-overlay">
                  <div className="gallery-zoom-icon">
                    <i className="fas fa-expand-alt"></i>
                  </div>
                </div>
              </div>
              <div className="gallery-info-body">
                <div className="gallery-photo-title">{photo.title}</div>
                <div className="gallery-photo-desc">{photo.desc || 'Click to expand high-resolution preview.'}</div>
                <div className="gallery-photo-meta">
                  <span>
                    <i className="fas fa-map-pin" style={{ color: 'var(--blue)' }}></i> {photo.location || 'Rajshahi, BD'}
                  </span>
                  <span>
                    <i className="far fa-calendar-alt"></i> {photo.date || 'Recent'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          id="gallery-empty-state"
          style={{
            textAlign: 'center',
            padding: '40px 20px',
            background: 'var(--card-bg)',
            borderRadius: '18px',
            border: '1px dashed var(--glass-border)'
          }}
        >
          <i
            className="fas fa-images"
            style={{ fontSize: '38px', color: 'var(--text-muted)', marginBottom: '12px', opacity: 0.5 }}
          ></i>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
            No photos found in this category
          </h3>
          <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Switch to another category tab above to view more photos.
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button
              type="button"
              className="hire-btn"
              onClick={() => setActiveCategory('all')}
              style={{ fontSize: '12px', padding: '8px 16px' }}
            >
              Show All Photos
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
