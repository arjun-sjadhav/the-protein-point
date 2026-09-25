import React from 'react';
import { BUSINESS_INFO, NAV_LINKS, INSTAGRAM_LINK, INSTAGRAM_HANDLE } from '../data/businessData';
import { IconInstagram } from './Icons';

export const Footer = () => {
  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-top">
          {/* Logo & Tagline */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img
                src="/images/logo-256.webp"
                alt="The Protein Point Official Logo"
                width="62"
                height="62"
                className="footer-logo-img"
                loading="lazy"
              />
              <div>
                <div className="footer-brand-name">{BUSINESS_INFO.name}</div>
                <div className="footer-tagline">{BUSINESS_INFO.tagline}</div>
              </div>
            </div>
            <p style={{ fontSize: '0.98rem', color: '#a2beaa', maxWidth: '380px', lineHeight: '1.6' }}>
              Fresh, natural, and protein-packed food crafted for a healthier lifestyle in Nanded, Maharashtra.
            </p>
          </div>

          {/* Navigation Links & Instagram */}
          <div className="footer-links-col">
            <div className="footer-links" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="footer-social-wrap">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-instagram-link"
                aria-label="Visit The Protein Point on Instagram"
              >
                <IconInstagram className="w-5 h-5 text-gold" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {BUSINESS_INFO.year} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p>
            Near Vigour Zone Gym, Anand Nagar, Nanded • Fuel Your Day The Healthy Way ♡
          </p>
        </div>
      </div>
    </footer>
  );
};
