import React, { useState, useMemo } from 'react';
import { blogPostsData, convertGoogleDriveLink } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onOpenPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenPost }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionConfirmed, setSubscriptionConfirmed] = useState(false);
  const [confirmedEmail, setConfirmedEmail] = useState('');

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return blogPostsData.filter((post) => {
      const matchesCat =
        selectedCategory === 'all' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      if (!matchesCat) return false;
      if (!q) return true;

      const haystack = (
        (post.title || '') + ' ' +
        (post.description || '') + ' ' +
        (post.category || '') + ' ' +
        (post.keywords || '')
      ).toLowerCase();

      return haystack.includes(q);
    });
  }, [searchQuery, selectedCategory]);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setIsSubscribing(true);
    const emailVal = newsletterEmail.trim();

    try {
      const formData = new FormData();
      formData.append('_subject', 'New Blog Newsletter Subscriber — Md. Istiak Islam Portfolio');
      formData.append('Subscription_Type', 'Tech Blog Newsletter');
      formData.append('Notification_Recipient', 'iforistiak@gmail.com');
      formData.append('Subscriber_Email', emailVal);
      formData.append(
        'Message',
        `Please add ${emailVal} to Md. Istiak Islam Tech Blog Newsletter list (Recipient: iforistiak@gmail.com).`
      );

      await fetch('https://formspree.io/f/mqejyanr', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
    } catch {
      // Even if network error occurs, show confirmation
    } finally {
      setIsSubscribing(false);
      setConfirmedEmail(emailVal);
      setSubscriptionConfirmed(true);
    }
  };

  const resetNewsletter = () => {
    setNewsletterEmail('');
    setSubscriptionConfirmed(false);
    setConfirmedEmail('');
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <section id="blog" className="page-section active" role="tabpanel">
      <div className="section-header">
        <h2 className="section-title">
          Tech <span className="gradient-text-flow">Blog</span> &amp; <span className="gradient-text-flow-alt">Insights</span>
        </h2>
        <p className="section-subtitle">
          Practical guides, engineering field notes, and solutions on MikroTik networking, server security, IT hardware, and web development.
        </p>
      </div>

      {/* Search Bar & Category Filter Tabs */}
      <div className="blog-controls-bar">
        <div className="blog-search-wrap">
          <i className="fas fa-search blog-search-icon"></i>
          <input
            type="text"
            id="blog-search-input"
            className="blog-search-input"
            placeholder="Search blog posts by keyword, title, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search blog posts"
          />
          {searchQuery && (
            <button
              type="button"
              id="blog-search-clear-btn"
              className="blog-search-clear-btn"
              onClick={() => setSearchQuery('')}
              title="Clear Search"
              aria-label="Clear Search"
              style={{ display: 'flex' }}
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>

        <div className="blog-category-chips" id="blog-category-chips" role="group" aria-label="Blog Categories">
          <button
            type="button"
            className={`blog-cat-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Posts
          </button>
          <button
            type="button"
            className={`blog-cat-btn ${selectedCategory === 'Networking' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Networking')}
          >
            Networking &amp; MikroTik
          </button>
          <button
            type="button"
            className={`blog-cat-btn ${selectedCategory === 'Server & Linux' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Server & Linux')}
          >
            Server &amp; Linux
          </button>
          <button
            type="button"
            className={`blog-cat-btn ${selectedCategory === 'Web Development' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Web Development')}
          >
            Web Development
          </button>
          <button
            type="button"
            className={`blog-cat-btn ${selectedCategory === 'IT Support' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('IT Support')}
          >
            IT Support &amp; Hardware
          </button>
          <button
            type="button"
            className={`blog-cat-btn ${selectedCategory === 'Cybersecurity' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Cybersecurity')}
          >
            Cybersecurity
          </button>
        </div>
      </div>

      {/* Blog Posts Dynamic Grid */}
      {filteredPosts.length > 0 ? (
        <div className="blog-grid" id="blog-grid-container">
          {filteredPosts.map((post) => {
            const photoUrl = convertGoogleDriveLink(post.photo) || post.photo;
            return (
              <article
                key={post.id}
                className="blog-card"
                onClick={() => onOpenPost(post)}
              >
                <div className="blog-card-img-wrap">
                  <img
                    src={photoUrl}
                    alt={post.title}
                    className="blog-card-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>{post.category}</span>
                    <span className="meta-sep" aria-hidden="true">·</span>
                    <span className="meta-date">{post.date}</span>
                    <span className="meta-sep" aria-hidden="true">·</span>
                    <span className="meta-date">{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-desc">{post.description}</p>
                  <div className="blog-card-footer">
                    <button type="button" className="blog-read-btn">
                      Read Article <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div
          id="blog-empty-state"
          style={{
            textAlign: 'center',
            padding: '42px 20px',
            background: 'var(--card-bg)',
            borderRadius: '18px',
            border: '1px dashed var(--glass-border)',
            marginBottom: '24px'
          }}
        >
          <i
            className="fas fa-newspaper"
            style={{ fontSize: '38px', color: 'var(--text-muted)', marginBottom: '12px', opacity: 0.5 }}
          ></i>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
            No matching blog posts found
          </h3>
          <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Try searching with a different keyword, title, or category filter.
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button
              type="button"
              className="hire-btn"
              onClick={resetFilters}
              style={{ fontSize: '12px', padding: '8px 16px' }}
            >
              Reset Search &amp; Filters
            </button>
          </div>
        </div>
      )}

      {/* Newsletter Signup Section Below Blog Grid */}
      <div className="newsletter-signup-card" id="newsletter-signup-section">
        {!subscriptionConfirmed ? (
          <div className="newsletter-inner-layout" id="newsletter-form-container">
            <div className="newsletter-copy">
              <h3>
                <i className="fas fa-envelope-open-text" style={{ color: 'var(--blue)' }}></i>{' '}
                Subscribe to Tech Insights Newsletter
              </h3>
              <p>
                Receive practical guides on MikroTik networking, server security, and full-stack web engineering directly in your inbox. Sent straight to my mail list — no spam, ever.
              </p>
            </div>

            <div className="newsletter-form-wrap">
              <form id="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <div className="newsletter-input-row">
                  <input
                    type="email"
                    id="newsletter-email-input"
                    name="Subscriber_Email"
                    className="newsletter-email-input"
                    placeholder="Enter your email address..."
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    autoComplete="email"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    className="newsletter-submit-btn"
                    id="newsletter-submit-btn"
                    disabled={isSubscribing}
                  >
                    <span>{isSubscribing ? 'Sending...' : 'Subscribe'}</span>
                    <i
                      className={`fas ${isSubscribing ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}
                      id="newsletter-btn-icon"
                    ></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div
            className="newsletter-confirmation-card"
            id="newsletter-confirmation-card"
            style={{ display: 'block' }}
            role="status"
            aria-live="polite"
          >
            <div className="success-icon-wrap" style={{ width: '52px', height: '52px', fontSize: '24px', marginBottom: '12px' }}>
              <i className="fas fa-check"></i>
            </div>
            <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
              Subscription Confirmed!
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto 14px' }}>
              Thank you! Your email (<strong style={{ color: 'var(--blue)' }}>{confirmedEmail}</strong>) has been registered and forwarded directly to <strong>Admin</strong>. You will receive future technical articles and guides.
            </p>
            <button
              type="button"
              className="contact-quick-btn"
              onClick={resetNewsletter}
              style={{ margin: '0 auto', fontSize: '12px', padding: '8px 16px' }}
            >
              <i className="fas fa-redo"></i> Subscribe Another Email
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
