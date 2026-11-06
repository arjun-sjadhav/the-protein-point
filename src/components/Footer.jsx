import React from 'react';
import {
  BUSINESS_INFO,
  NAV_LINKS,
  INSTAGRAM_LINK,
  INSTAGRAM_HANDLE,
  WHATSAPP_LINK,
  PHONE_NUMBER,
  PHONE_DISPLAY,
} from '../data/businessData';
import { IconInstagram, IconWhatsApp, IconMapPin, IconClock, IconArrowRight, IconHeart } from './Icons';

export const Footer = () => {
  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container">
        {/* Brand Banner Card */}
        <div className="footer-top-card">
          <div className="footer-brand-header">
            <img
              src="/images/logo-256.webp"
              alt="The Protein Point Official Logo"
              width="64"
              height="64"
              className="footer-logo-img"
              loading="lazy"
            />
            <div>
              <h3 className="footer-brand-title">{BUSINESS_INFO.name}</h3>
              <p className="footer-brand-tagline">{BUSINESS_INFO.tagline}</p>
            </div>
          </div>
          <p className="footer-brand-bio">
            Nanded's premier healthy food startup serving wholesome oatmeal bowls, loaded muesli crunch bowls, natural peanut butter sandwiches & chia seed drinks. Freshly assembled in 5 minutes!
          </p>
        </div>

        {/* 4 Column Structured Footer Content */}
        <div className="footer-grid-layout">
          {/* Col 1: Quick Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-nav-link">
                    <IconArrowRight className="w-3.5 h-3.5 text-gold" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Popular Menu Picks */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Popular Items</h4>
            <ul className="footer-menu-picks">
              <li>
                <a href="#menu" className="footer-menu-item-link">
                  <span>Protein Crunch Bowl</span>
                  <span className="footer-item-price">₹99</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="footer-menu-item-link">
                  <span>Power Oats Bowl</span>
                  <span className="footer-item-price">₹79</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="footer-menu-item-link">
                  <span>Healthy Chia Seed Glass</span>
                  <span className="footer-item-price">₹49</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="footer-menu-item-link">
                  <span>Dryfruit Sandwich</span>
                  <span className="footer-item-price">₹39</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="footer-menu-item-link">
                  <span>Brown Bread Sandwich</span>
                  <span className="footer-item-price">₹29</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Stall Location & Hours */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Stall & Schedule</h4>
            <div className="footer-info-block">
              <div className="footer-info-row">
                <IconMapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>
              <div className="footer-info-row">
                <IconClock className="w-4 h-4 text-leaf-green flex-shrink-0" />
                <span>Monday – Saturday: Open</span>
              </div>
              <div className="footer-info-row text-closed">
                <span className="footer-dot-red"></span>
                <span>Sunday: Closed</span>
              </div>
              <div className="footer-prep-pill">
                <span>⚡ Fresh on order in 5 mins</span>
              </div>
            </div>
          </div>

          {/* Col 4: Direct Connect & WhatsApp Orders */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Direct Order & Social</h4>
            <div className="footer-contact-actions">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-btn footer-btn-whatsapp"
                aria-label="Order on WhatsApp"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp: {PHONE_DISPLAY}</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="footer-btn footer-btn-call"
                aria-label="Call The Protein Point"
              >
                <span>📞 Call: {PHONE_DISPLAY}</span>
              </a>

              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-btn footer-btn-instagram"
                aria-label="Visit Instagram Profile"
              >
                <IconInstagram className="w-4 h-4 text-gold" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {BUSINESS_INFO.year} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="footer-bottom-slogan font-script">
            <span>Eat Clean • Train Hard • Stay Healthy ♡</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
