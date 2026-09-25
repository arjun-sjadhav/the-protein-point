import React, { useState, useEffect } from 'react';
import { NAV_LINKS, BUSINESS_INFO } from '../data/businessData';
import { IconMenu, IconX, IconArrowRight } from './Icons';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar-inner" aria-label="Main Navigation">
          {/* Logo & Brand Identity */}
          <a href="#home" className="brand-logo-link" onClick={closeMenu}>
            <img
              src="/images/logo-256.webp"
              alt="The Protein Point Official Logo"
              width="54"
              height="54"
              className="brand-logo-img"
              loading="eager"
            />
            <div className="brand-text-wrap">
              <span className="brand-name">{BUSINESS_INFO.name}</span>
              <span className="brand-subtext">{BUSINESS_INFO.city} • Fresh & Natural</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-desktop-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions & Mobile Toggle */}
          <div className="navbar-actions">
            <a href="#menu" className="btn btn-primary btn-sm">
              View Menu
            </a>

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              <span>{link.label}</span>
              <IconArrowRight className="w-4 h-4 text-leaf-green" />
            </a>
          ))}
          <a
            href="#menu"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '8px' }}
            onClick={closeMenu}
          >
            Explore Menu
          </a>
        </div>
      )}
    </header>
  );
};
