import React from 'react';
import { IconArrowRight } from './Icons';

export const FinalCTA = () => {
  return (
    <section className="final-cta-section" aria-label="Call to Action">
      <div className="container">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Power Up?</h2>
          <p className="cta-desc">
            Fresh food. Great taste. Better choices for your body every single day.
          </p>

          <div className="cta-buttons">
            <a href="#menu" className="btn btn-primary">
              Explore Menu
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a href="#location" className="btn btn-outline-cream">
              Find Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
