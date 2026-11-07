import React from 'react';
import { BRAND_PILLARS, INSTAGRAM_LINK, INSTAGRAM_HANDLE } from '../data/businessData';
import {
  IconLeaf,
  IconDumbbell,
  IconSparkle,
  IconHeart,
  IconClock,
  IconInstagram,
  IconExternalLink,
} from './Icons';

export const About = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'leaf':
        return <IconLeaf className="w-5 h-5" />;
      case 'dumbbell':
        return <IconDumbbell className="w-5 h-5" />;
      case 'clock':
        return <IconClock className="w-5 h-5" />;
      case 'sparkle':
        return <IconSparkle className="w-5 h-5" />;
      case 'heart':
      default:
        return <IconHeart className="w-5 h-5" />;
    }
  };

  return (
    <section id="about" className="section-padding about-section" aria-label="About The Protein Point & Quality Standards">
      <div className="container">
        {/* Brand Philosophy & Story Grid */}
        <div className="about-main-layout">
          {/* Left Column: Brand Story */}
          <div className="about-text-col">
            <span className="section-tag">
              <IconLeaf className="w-4 h-4" />
              Our Story & Promise
            </span>

            <h2 className="section-title">Honest Nutrition For Nanded</h2>

            <p className="about-lead">
              The Protein Point is a homegrown healthy food startup in Nanded, Maharashtra. We started with a clear mission: making clean, protein-rich food fast, delicious, and affordable for everyone.
            </p>

            <p className="about-body">
              Say goodbye to greasy snacks and sugar-loaded breakfasts. Every item on our menu is assembled with nutrient-dense oats, fresh fruits, crunchy seeds, pure peanut butter, and raw honey. Whether you are heading to college, sitting through a long office shift, or recovering from a gym workout, we fuel your body the right way.
            </p>

            <div className="about-slogan font-script">
              Healthy Choices • Happier You ♡
            </div>
          </div>

          {/* Right Column: 4 Distinct Brand Pillars (High Impact Grid) */}
          <div className="about-features-grid">
            {BRAND_PILLARS.map((pillar) => (
              <div key={pillar.id} className="about-feature-box">
                <div className="about-feature-icon-wrap">{getIcon(pillar.icon)}</div>
                <h3 className="about-feature-title">{pillar.title}</h3>
                <p className="about-feature-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Community & Official QR Card */}
        <div className="about-instagram-card">
          <div className="instagram-card-inner">
            <div className="instagram-info-col">
              <span className="instagram-badge">
                <IconInstagram className="w-4 h-4" />
                Join Our Instagram Community
              </span>

              <h3 className="instagram-title">Follow Us on Instagram</h3>

              <p className="instagram-sub">
                Scan the official QR code to follow <strong>The Protein Point</strong> for daily fresh menu updates, healthy eating tips, and fitness motivation right from Nanded.
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
                  <span>Open Instagram Profile</span>
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
              <span className="instagram-qr-caption">Scan with your phone camera to follow {INSTAGRAM_HANDLE}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
