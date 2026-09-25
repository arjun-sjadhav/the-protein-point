import React from 'react';
import { BRAND_PILLARS } from '../data/businessData';
import { IconLeaf, IconDumbbell, IconSparkle, IconHeart } from './Icons';

export const WhyUs = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'leaf':
        return <IconLeaf className="w-7 h-7" />;
      case 'dumbbell':
        return <IconDumbbell className="w-7 h-7" />;
      case 'sparkle':
        return <IconSparkle className="w-7 h-7" />;
      case 'heart':
      default:
        return <IconHeart className="w-7 h-7" />;
    }
  };

  return (
    <section id="why-us" className="section-padding why-section" aria-label="Why The Protein Point">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconSparkle className="w-4 h-4" />
            Our Philosophy
          </span>
          <h2 className="section-title">Why The Protein Point?</h2>
          <p className="section-subtitle">
            We believe eating clean should taste incredible, feel convenient, and easily fit into your everyday routine in Nanded.
          </p>
        </div>

        <div className="features-grid">
          {BRAND_PILLARS.map((pillar) => (
            <div key={pillar.id} className="feature-card">
              <div className="feature-icon-wrap">{getIcon(pillar.icon)}</div>
              <h3 className="feature-title">{pillar.title}</h3>
              <p className="feature-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
