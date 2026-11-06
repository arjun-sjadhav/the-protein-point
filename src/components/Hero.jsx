import React from 'react';
import { BUSINESS_INFO, WHATSAPP_LINK } from '../data/businessData';
import { IconArrowRight, IconWhatsApp, IconFlame, IconDumbbell } from './Icons';

export const Hero = () => {
  return (
    <section id="home" className="hero-section" aria-label="Welcome to The Protein Point">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Bold Editorial Headline & CTAs */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot"></span>
              <span className="hero-eyebrow-text">Fresh Healthy Breakfast • Anand Nagar, Nanded</span>
            </div>

            <h1 className="hero-title">
              Daily Fuel For Nanded’s <br />
              <span className="text-leaf">Students, Hustlers</span> <br />
              <span className="text-gold">& Fitness Lovers.</span>
            </h1>

            <p className="hero-desc">
              Wholesome oatmeal bowls, high-protein muesli, natural peanut butter sandwiches & chia seed bowls. Freshly crafted with 100% pure honey, organic jaggery, and zero artificial preservatives.
            </p>

            <div className="hero-cta-group">
              <a href="#menu" className="btn btn-primary">
                <span>Explore Menu & Order</span>
                <IconArrowRight className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary hero-whatsapp-btn"
                aria-label="Order on WhatsApp"
              >
                <IconWhatsApp className="w-4 h-4 text-leaf-green" />
                <span>Quick WhatsApp Order</span>
              </a>
            </div>

            {/* Cohesive Floating Quick-Stats Strip */}
            <div className="hero-quick-stats">
              <div className="hero-stat-pill">
                <span className="stat-pill-icon">⚡</span>
                <div className="stat-pill-info">
                  <strong>5-Min Pickup</strong>
                  <span>Fresh on order</span>
                </div>
              </div>

              <div className="hero-stat-pill">
                <span className="stat-pill-icon">💪</span>
                <div className="stat-pill-info">
                  <strong>Up to 24g Protein</strong>
                  <span>Muscle recovery</span>
                </div>
              </div>

              <div className="hero-stat-pill">
                <span className="stat-pill-icon">🍯</span>
                <div className="stat-pill-info">
                  <strong>100% Raw Honey</strong>
                  <span>Zero refined sugar</span>
                </div>
              </div>

              <div className="hero-stat-pill">
                <span className="stat-pill-icon">📍</span>
                <div className="stat-pill-info">
                  <strong>Near Gold's Gym</strong>
                  <span>Anand Nagar stall</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Best Seller Bowl (Clickable to Interactive Menu) */}
          <div className="hero-visual-container">
            <a
              href="#menu"
              className="hero-card-frame hero-card-clickable"
              aria-label="Order Protein Crunch Bowl in the interactive menu"
              onClick={(e) => {
                // Ensure interactive menu mode is selected
                window.dispatchEvent(
                  new CustomEvent('switch-menu-mode', {
                    detail: { mode: 'order', itemId: 'protein-crunch-bowl' },
                  })
                );
                const targetCard =
                  document.getElementById('item-protein-crunch-bowl') ||
                  document.getElementById('menu');
                if (targetCard) {
                  e.preventDefault();
                  targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  targetCard.classList.add('item-highlight-pulse');
                  setTimeout(() => {
                    targetCard.classList.remove('item-highlight-pulse');
                  }, 2200);
                }
              }}
            >
              <div className="hero-image-overlay-badge best-seller-badge">
                <span>⭐ Best Seller • Tap to Order</span>
              </div>
              <img
                src="/images/real-protein-crunch-bowl.jpeg"
                alt="Protein Crunch Bowl - Best Seller at The Protein Point in Nanded"
                width="620"
                height="520"
                className="hero-food-img"
                loading="eager"
              />
              <div className="hero-caption-card">
                <div className="hero-caption-main">
                  <div className="hero-caption-title">Protein Crunch Bowl</div>
                  <div className="hero-caption-ingredients">Crunchy Muesli • Milk • Banana • Dry Fruits • Seeds</div>
                  <div className="hero-caption-nutrition">
                    <span className="badge-pill badge-cal">
                      <IconFlame className="w-3.5 h-3.5" /> 900 kcal
                    </span>
                    <span className="badge-pill badge-prot">
                      <IconDumbbell className="w-3.5 h-3.5" /> 24g Protein
                    </span>
                  </div>
                </div>
                <div className="hero-caption-price-tag">
                  <span className="caption-price-curr">₹</span>
                  <span className="caption-price-val">99</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
