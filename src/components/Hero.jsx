import React from 'react';
import { BUSINESS_INFO, QUICK_HIGHLIGHTS } from '../data/businessData';
import { IconMapPin, IconLeaf, IconArrowRight } from './Icons';

export const Hero = () => {
  return (
    <>
      <section id="home" className="hero-section" aria-label="Welcome">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column: Brand Message & CTAs */}
            <div className="hero-content">
              <div className="hero-badges-row">
                <span className="hero-location-badge">
                  <IconMapPin className="w-4 h-4 text-gold" />
                  {BUSINESS_INFO.city}, {BUSINESS_INFO.state}
                </span>
                <span className="section-tag" style={{ marginBottom: 0 }}>
                  <IconLeaf className="w-3.5 h-3.5" />
                  Healthy • Fresh • Natural
                </span>
              </div>

              <h1 className="hero-title">
                Good Food. <br />
                <span className="text-leaf">Better</span> <span className="text-gold">You.</span>
              </h1>

              <p className="hero-desc">{BUSINESS_INFO.heroSubheadline}</p>

              <div className="hero-cta-group">
                <a href="#menu" className="btn btn-primary">
                  Explore Menu
                  <IconArrowRight className="w-4 h-4" />
                </a>
                <a href="#location" className="btn btn-secondary">
                  Find Us in Nanded
                </a>
              </div>

              <div className="hero-slogan-note font-script">
                <span>Real Food. Real Results. ♡</span>
              </div>
            </div>

            {/* Right Column: High-Res Hero Food Visual */}
            <div className="hero-visual-container">
              <div className="hero-card-frame">
                <img
                  src="/images/hero-protein-bowl.webp"
                  alt="Signature Protein Point Power Oats Bowl with fresh blueberries, strawberries, bananas and nuts"
                  width="620"
                  height="525"
                  className="hero-food-img"
                  loading="eager"
                />
                <div className="hero-caption-pill">
                  <div>
                    <div className="hero-caption-title">Signature Power Oats Bowl</div>
                    <div className="hero-caption-sub">Fresh Berries • Banana • Nuts • Pure Honey</div>
                  </div>
                  <span className="hero-caption-price">
                    ₹69 / ₹79
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Ticker Strip */}
      <aside className="highlights-strip" aria-label="Quick Highlights">
        <div className="container">
          <div className="highlights-row">
            {QUICK_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="highlight-item">
                <span className="highlight-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};
