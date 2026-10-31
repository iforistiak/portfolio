import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavigationTab, GalleryPhoto, BlogPost } from './types';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navigation } from './components/Navigation';
import { ProfileSidebar } from './components/ProfileSidebar';
import { HomeSection } from './components/HomeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GallerySection } from './components/GallerySection';
import { BlogSection } from './components/BlogSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { LightboxModal } from './components/LightboxModal';
import { BlogModal } from './components/BlogModal';
import { LicenseModal } from './components/LicenseModal';
import { SecurityToast } from './components/SecurityToast';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Modals state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    photos: GalleryPhoto[];
    index: number;
  }>({
    isOpen: false,
    photos: [],
    index: 0
  });

  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);

  // Security toast state
  const [toastMessage, setToastMessage] = useState(
    'Protected Code & Assets — © Md. Istiak Islam. Copying without permission is prohibited.'
  );
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mainContentRef = useRef<HTMLElement>(null);

  // Show security notice
  const showSecurityNotice = useCallback((message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setIsToastVisible(false);
    }, 2800);
  }, []);

  // Theme synchronization
  useEffect(() => {
    const savedTheme = localStorage.getItem('istiak_portfolio_theme') || 'light';
    const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.body.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      document.body.setAttribute('data-theme', nextTheme);
      localStorage.setItem('istiak_portfolio_theme', nextTheme);
      return nextTheme;
    });
  };

  // Scroll depth progress calculation
  const updateScrollProgress = useCallback(() => {
    const winScroll = window.scrollY || document.documentElement.scrollTop || 0;
    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const contentEl = mainContentRef.current;
    const contentScroll = contentEl ? contentEl.scrollTop : 0;
    const contentHeight = contentEl ? contentEl.scrollHeight - contentEl.clientHeight : 0;

    let scrolledPercent = 0;
    if (window.innerWidth > 1024 && contentHeight > 5) {
      scrolledPercent = (contentScroll / contentHeight) * 100;
    } else if (winHeight > 5) {
      scrolledPercent = (winScroll / winHeight) * 100;
    }

    setScrollProgress(Math.max(0, Math.min(100, scrolledPercent)));
  }, []);

  // Scroll progress listeners
  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    const contentEl = mainContentRef.current;
    if (contentEl) {
      contentEl.addEventListener('scroll', updateScrollProgress, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      if (contentEl) {
        contentEl.removeEventListener('scroll', updateScrollProgress);
      }
    };
  }, [updateScrollProgress]);

  // Client Security Guards
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showSecurityNotice(
        'Protected Content — © Md. Istiak Islam. Unauthorized copying or business/practice use is prohibited.'
      );
    };

    const handleDragStart = (e: DragEvent) => {
      if (e.target && (e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = (e.key || '').toLowerCase();
      const isCmdOrCtrl = e.ctrlKey || e.metaKey;

      if (e.key === 'F12') {
        e.preventDefault();
        showSecurityNotice('Security Level Tier-4: Source inspection is restricted by Proprietary License.');
        return false;
      }

      if (isCmdOrCtrl && e.shiftKey && (key === 'i' || key === 'j' || key === 'c')) {
        e.preventDefault();
        showSecurityNotice('Security Level Tier-4: Source inspection is restricted by Proprietary License.');
        return false;
      }

      if (isCmdOrCtrl && (key === 'u' || key === 's')) {
        e.preventDefault();
        showSecurityNotice(
          'Proprietary License — Do not copy or save code without permission from Md. Istiak Islam.'
        );
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showSecurityNotice]);

  // Tab switching with instant clean zero-jump reset
  const handleSelectTab = (tab: NavigationTab) => {
    setActiveTab(tab);

    const contentEl = mainContentRef.current;
    if (contentEl && window.innerWidth > 1024) {
      contentEl.scrollTop = 0;
    } else if (window.innerWidth <= 1024) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setTimeout(updateScrollProgress, 40);
  };

  // Lightbox handlers
  const handleOpenLightbox = (photos: GalleryPhoto[], index: number) => {
    setLightboxState({
      isOpen: true,
      photos,
      index
    });
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
    document.body.style.overflow = '';
  };

  const handleNavigateLightbox = (direction: number) => {
    setLightboxState((prev) => {
      const count = prev.photos.length;
      if (!count) return prev;
      let nextIndex = prev.index + direction;
      if (nextIndex < 0) nextIndex = count - 1;
      else if (nextIndex >= count) nextIndex = 0;
      return { ...prev, index: nextIndex };
    });
  };

  // Blog modal handlers
  const handleOpenBlogPost = (post: BlogPost) => {
    setActiveBlogPost(post);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseBlogPost = () => {
    setActiveBlogPost(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Top Fixed Scroll Depth Progress Bar with Balanced RGB Accent */}
      <ScrollProgressBar progress={scrollProgress} />

      {/* Navigation Sidebar */}
      <Navigation
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <div className="app-root" id="app-root">
        {/* Profile Side Panel */}
        <ProfileSidebar onNavigateContact={() => handleSelectTab('contact-me')} />

        {/* Main Content Area - All sections preserved in DOM with instant clean zero-jump tab visibility */}
        <main className="content-container" id="main-content" ref={mainContentRef}>
          <div style={{ display: activeTab === 'home' ? 'block' : 'none' }}>
            <HomeSection onNavigate={handleSelectTab} />
          </div>
          <div style={{ display: activeTab === 'my-project' ? 'block' : 'none' }}>
            <ProjectsSection />
          </div>
          <div style={{ display: activeTab === 'gallery' ? 'block' : 'none' }}>
            <GallerySection onOpenLightbox={handleOpenLightbox} />
          </div>
          <div style={{ display: activeTab === 'blog' ? 'block' : 'none' }}>
            <BlogSection onOpenPost={handleOpenBlogPost} />
          </div>
          <div style={{ display: activeTab === 'education' ? 'block' : 'none' }}>
            <EducationSection />
          </div>
          <div style={{ display: activeTab === 'contact-me' ? 'block' : 'none' }}>
            <ContactSection />
          </div>
        </main>
      </div>

      {/* Security Toast Notification */}
      <SecurityToast message={toastMessage} isVisible={isToastVisible} />

      {/* Lightbox Modal */}
      <LightboxModal
        photos={lightboxState.photos}
        currentIndex={lightboxState.index}
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />

      {/* Blog Article Reader Modal */}
      <BlogModal
        post={activeBlogPost}
        isOpen={activeBlogPost !== null}
        onClose={handleCloseBlogPost}
        onDiscuss={() => handleSelectTab('contact-me')}
      />

      {/* License Modal */}
      <LicenseModal
        isOpen={isLicenseOpen}
        onClose={() => setIsLicenseOpen(false)}
      />
    </>
  );
};

export default App;
