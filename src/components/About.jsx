import React from 'react';
import { BRAND_PILLARS, INSTAGRAM_LINK, INSTAGRAM_HANDLE } from '../data/businessData';
import { IconLeaf, IconDumbbell, IconSparkle, IconHeart, IconInstagram, IconExternalLink } from './Icons';

export const About = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'leaf':
        return <IconLeaf className="w-6 h-6" />;
      case 'dumbbell':
        return <IconDumbbell className="w-6 h-6" />;
      case 'sparkle':
        return <IconSparkle className="w-6 h-6" />;
      case 'heart':
      default:
        return <IconHeart className="w-6 h-6" />;
    }
  };

  return (
    <section id="about" className="section-padding about-section" aria-label="About The Protein Point">
      <div className="container">
        {/* Main About Layout: Left Brand Description, Right 2x2 Feature Cards */}
        <div className="about-main-layout">
          {/* Left Column: Brand Story & Description */}
          <div className="about-text-col">
            <span className="section-tag">
              <IconLeaf className="w-4 h-4" />
              Our Story
            </span>

            <h2 className="section-title">About The Protein Point</h2>

            <p className="about-lead">
              The Protein Point is a local healthy-food startup in Nanded, Maharashtra, dedicated to serving fresh, tasty, and protein-oriented meals that fuel your active life.
            </p>

            <p className="about-body">
              We believe in honest nutrition without compromise. Every item is freshly prepared with wholesome oats, natural honey, crunchy dry fruits, seeds, and fresh fruits — giving you sustained energy whether you are training at the gym, studying, or working hard in Nanded.
            </p>

            <div className="about-slogan font-script">
              Healthy Choices • Happier You ♡
            </div>
          </div>

          {/* Right Column: Four Feature Cards in 2x2 Grid */}
          <div className="about-features-grid">
            {BRAND_PILLARS.map((pillar) => (
              <div key={pillar.id} className="about-feature-box">
                <div className="about-feature-icon-wrap">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="about-feature-title">{pillar.title}</h3>
                <p className="about-feature-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram QR Card: Cleanly integrated within About section */}
        <div className="about-instagram-card">
          <div className="instagram-card-inner">
            <div className="instagram-info-col">
              <span className="instagram-badge">
                <IconInstagram className="w-4 h-4" />
                Follow Us on Instagram
              </span>

              <h3 className="instagram-title">Support Us on Instagram</h3>

              <p className="instagram-sub">
                Scan the QR code to follow The Protein Point for daily updates, fresh menus, and healthy living inspiration in Nanded.
              </p>

              <div className="instagram-handle-row">
                <span className="instagram-handle-text">{INSTAGRAM_HANDLE}</span>
              </div>

              <div style={{ marginTop: '16px' }}>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm instagram-btn"
                  aria-label="Visit The Protein Point on Instagram"
                >
                  <IconInstagram className="w-4 h-4" />
                  <span>Follow on Instagram</span>
                  <IconExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="instagram-qr-wrap">
              <div className="instagram-qr-frame">
                <img
                  src="/images/insta_QR.jpeg"
                  alt="The Protein Point Instagram QR code"
                  width="220"
                  height="348"
                  className="instagram-qr-img"
                  loading="lazy"
                />
              </div>
              <span className="instagram-qr-caption">Scan to follow {INSTAGRAM_HANDLE}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
