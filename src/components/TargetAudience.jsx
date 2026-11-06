import React from 'react';
import { TARGET_AUDIENCES } from '../data/menuData';
import { IconHeart } from './Icons';

export const TargetAudience = () => {
  return (
    <section className="section-padding audience-section" aria-label="Who We Serve">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconHeart className="w-4 h-4" />
            Designed For Your Routine
          </span>
          <h2 className="section-title">Perfect For Everyone</h2>
          <p className="section-subtitle">
            Whether you're prepping for exams, heading into the office, hitting PRs at the gym, or simply eating cleaner in Nanded.
          </p>
        </div>

        <div className="audience-grid">
          {TARGET_AUDIENCES.map((aud) => (
            <div key={aud.id} className="audience-card">
              <div className="audience-icon-header">
                <span className="audience-emoji">{aud.icon}</span>
                <h3 className="audience-card-title">{aud.title}</h3>
              </div>
              <ul className="audience-points-list">
                {aud.points.map((pt, idx) => (
                  <li key={idx} className="audience-point-item">
                    <span className="audience-check">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
