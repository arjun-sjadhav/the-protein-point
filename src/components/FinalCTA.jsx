import React from 'react';
import { WHATSAPP_LINK } from '../data/businessData';
import { IconArrowRight, IconWhatsApp } from './Icons';

export const FinalCTA = () => {
  return (
    <section className="final-cta-section" aria-label="Call to Action">
      <div className="container">
        <div className="cta-container">
          <span className="cta-badge">Fresh • Healthy • Ready in 5 Mins</span>
          <h2 className="cta-title">Ready to Fuel Your Body?</h2>
          <p className="cta-desc">
            Skip the unhealthy fast food. Treat your body to high-protein bowls, healthy chia glasses, and nutrient-rich sandwiches in Anand Nagar, Nanded.
          </p>

          <div className="cta-buttons">
            <a href="#menu" className="btn btn-primary">
              <span>Explore Menu & Order</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-cream"
            >
              <IconWhatsApp className="w-4 h-4 text-leaf-green" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          <div className="cta-slogan font-script">
            Real Food • Real Results ♡
          </div>
        </div>
      </div>
    </section>
  );
};
