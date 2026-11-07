import React, { useState, useEffect } from 'react';
import { NAV_LINKS, BUSINESS_INFO } from '../data/businessData';
import { useCart } from '../context/CartContext';
import { IconMenu, IconX, IconArrowRight, IconCart, IconWhatsApp } from './Icons';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  // When clicking cart: if items exist, open cart drawer to check out; also scroll to menu if desired
  const handleCartClick = (e) => {
    if (totalItems > 0) {
      openCart();
    } else {
      // If empty, smoothly navigate to the menu card
      const menuEl = document.getElementById('menu');
      if (menuEl) {
        menuEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar-inner" aria-label="Main Navigation">
          {/* Brand Logo & Clean Title */}
          <a href="#home" className="brand-logo-link" onClick={closeMenu}>
            <img
              src="/images/logo-256.webp"
              alt="The Protein Point Logo"
              width="44"
              height="44"
              className="brand-logo-img"
              loading="eager"
            />
            <span className="brand-name">{BUSINESS_INFO.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="nav-desktop-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions: Clean Aesthetic Cart Pill & Mobile Toggle */}
          <div className="navbar-actions">
            <button
              type="button"
              className="navbar-cart-pill"
              onClick={handleCartClick}
              aria-label={`Cart (${totalItems} items)`}
            >
              <IconCart className="w-3.5 h-3.5 text-gold" />
              <span className="navbar-cart-label">Cart</span>
              {totalItems > 0 && <span className="navbar-cart-badge">{totalItems}</span>}
            </button>

            <a
              href="https://wa.me/918432666396"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-nav desktop-only-btn"
              aria-label="Chat on WhatsApp"
            >
              <IconWhatsApp className="w-3.5 h-3.5 text-leaf-green" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <IconX className="w-4 h-4" /> : <IconMenu className="w-4 h-4" />}
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
              <IconArrowRight className="mobile-nav-arrow" />
            </a>
          ))}
          <div className="mobile-nav-actions">
            <a
              href="#menu"
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: '8px' }}
              onClick={closeMenu}
            >
              <IconCart className="w-4 h-4" />
              <span>{totalItems > 0 ? `View Order (${totalItems} items)` : 'Browse Menu & Add Items'}</span>
            </a>
            <a
              href="https://wa.me/918432666396"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: '100%' }}
              onClick={closeMenu}
            >
              <IconWhatsApp className="w-4 h-4 text-leaf-green" />
              <span>Direct WhatsApp Order</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
