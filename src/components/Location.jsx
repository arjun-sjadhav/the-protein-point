import React, { useMemo } from 'react';
import {
  BUSINESS_INFO,
  GOOGLE_MAPS_URL,
  WHATSAPP_LINK,
  PHONE_NUMBER,
  PHONE_DISPLAY,
} from '../data/businessData';
import { IconMapPin, IconExternalLink, IconWhatsApp, IconClock } from './Icons';

export const Location = () => {
  // Determine live open/closed status based on Sunday
  const isSunday = useMemo(() => {
    return new Date().getDay() === 0;
  }, []);

  return (
    <section id="location" className="section-padding location-section" aria-label="Stall Location & Operating Hours">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconMapPin className="w-4 h-4" />
            Visit Our Stall
          </span>
          <h2 className="section-title">Fresh Food Spot in Anand Nagar</h2>
          <p className="section-subtitle">
            Conveniently situated right next to Gold's Gym and Vigour Zone Gym. Stop by for breakfast, pre-workout fuel, or healthy evening bowls!
          </p>
        </div>

        {/* Location Layout */}
        <div className="location-box-layout">
          {/* Left Column: Location & Live Hours Panel */}
          <div className="location-info-panel">
            <div className="location-header-row">
              <span className="location-city-badge">
                <IconMapPin className="w-4 h-4 text-gold" />
                <span>Nanded, Maharashtra</span>
              </span>

              {/* Dynamic Status Badge */}
              <span className={`live-status-pill ${isSunday ? 'status-closed' : 'status-open'}`}>
                <span className="status-dot"></span>
                <span>{isSunday ? 'Closed Today (Sunday)' : 'Open Today (Mon–Sat)'}</span>
              </span>
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

            {/* Operating Schedule Card */}
            <div className="location-schedule-card">
              <div className="schedule-card-row">
                <div className="schedule-item-label">
                  <IconClock className="w-4 h-4 text-leaf-green" />
                  <span>Working Days:</span>
                </div>
                <span className="schedule-item-val font-semibold">Monday – Saturday</span>
              </div>

              <div className="schedule-card-row">
                <div className="schedule-item-label">
                  <span className="schedule-dot-mini red"></span>
                  <span>Sunday:</span>
                </div>
                <span className="schedule-item-val text-closed">Closed</span>
              </div>

              <div className="schedule-card-row">
                <div className="schedule-item-label">
                  <span className="schedule-dot-mini green"></span>
                  <span>Order Prep Speed:</span>
                </div>
                <span className="schedule-item-val text-speed">⚡ Ready in 5 Minutes</span>
              </div>
            </div>

            {/* Direct Quick-Action Buttons */}
            <div className="location-action-buttons">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Get directions to The Protein Point on Google Maps"
              >
                <IconMapPin className="w-4 h-4" />
                <span>Get Directions</span>
                <IconExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="Chat with The Protein Point on WhatsApp"
              >
                <IconWhatsApp className="w-4 h-4 text-leaf-green" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="btn btn-outline-primary"
                aria-label="Call The Protein Point"
              >
                <span>📞 Call: {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Interactive Map Embed */}
          <div className="location-map-wrapper">
            <div className="map-frame-container">
              <iframe
                title="The Protein Point Location - Near Gold's Gym, Anand Nagar, Nanded"
                src="https://maps.google.com/maps?q=Gold's%20Gym%20Anand%20Nagar%20Nanded&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>
              <div className="map-overlay-badge">
                <IconMapPin className="w-4 h-4 text-gold" />
                <span>Near Gold's Gym • Anand Nagar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
