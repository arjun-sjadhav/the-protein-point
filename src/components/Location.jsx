import React from 'react';
import { BUSINESS_INFO, GOOGLE_MAPS_URL } from '../data/businessData';
import { IconMapPin, IconExternalLink } from './Icons';

export const Location = () => {
  return (
    <section id="location" className="section-padding location-section" aria-label="Store Location">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconMapPin className="w-4 h-4" />
            Find Us
          </span>
          <h2 className="section-title">Visit The Protein Point</h2>
          <p className="section-subtitle">
            Fresh, healthy, and protein-packed food spot located in Anand Nagar, Nanded.
          </p>
        </div>

        {/* Clean, Non-Overlapping Responsive Layout */}
        <div className="location-box-layout">
          {/* Left Column: Location Information */}
          <div className="location-info-panel">
            <div className="location-brand-badge">
              <IconMapPin className="w-4 h-4 text-gold" />
              <span>Nanded, Maharashtra</span>
            </div>

            <h3 className="location-business-name">{BUSINESS_INFO.name}</h3>

            <div className="location-address-box">
              <div className="address-line-primary">
                📍 {BUSINESS_INFO.landmark}
              </div>
              <div className="address-line-secondary">
                {BUSINESS_INFO.area}, {BUSINESS_INFO.city}
              </div>
              <div className="address-line-state">
                {BUSINESS_INFO.state}, {BUSINESS_INFO.country}
              </div>
            </div>

            <p className="location-desc">
              Conveniently located near Vigour Zone Gym in Anand Nagar. Stop by for your morning breakfast bowls, pre-workout energy, post-workout protein shakes, or an evening healthy sandwich!
            </p>

            <div className="location-actions">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Get directions to The Protein Point"
              >
                <span>Get Directions</span>
                <IconExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Map / Landmark Visual Card */}
          <div className="location-map-panel">
            <div className="map-panel-inner">
              <div className="map-pin-circle">
                <IconMapPin className="w-8 h-8" />
              </div>
              <h4 className="map-panel-title">Store Location</h4>
              <p className="map-panel-landmark">
                {BUSINESS_INFO.landmark}
              </p>
              <p className="map-panel-area">
                {BUSINESS_INFO.area}, {BUSINESS_INFO.city}
              </p>
              <div className="map-panel-note font-script">
                Eat Clean • Train Hard • Stay Healthy ♡
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-cream btn-sm"
                aria-label="Get directions to The Protein Point on Google Maps"
              >
                <span>Open in Google Maps</span>
                <IconExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
