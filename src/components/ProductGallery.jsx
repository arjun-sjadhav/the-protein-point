import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';
import { IconFlame, IconDumbbell, IconPlus, IconX, IconExternalLink } from './Icons';

export const ProductGallery = () => {
  const { addToCart, openCart } = useCart();
  const [modalImage, setModalImage] = useState(null);

  const realChia = MENU_ITEMS.find((i) => i.id === 'healthy-chia-seed-glass');
  const realBowl = MENU_ITEMS.find((i) => i.id === 'protein-crunch-bowl');

  return (
    <section id="gallery" className="section-padding gallery-section" aria-label="Real Food Stall Showcase">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            📷 100% Real Food Photos
          </span>
          <h2 className="section-title">What You See Is What You Get</h2>
          <p className="section-subtitle">
            No stock photos, no exaggerated 3D renders. Here are real shots captured right at our stall counter in Anand Nagar, Nanded.
          </p>
        </div>

        <div className="gallery-grid">
          {/* Real Photo 1: Healthy Chia Seed Glass */}
          <div className="gallery-card">
            <div
              className="gallery-img-wrap"
              onClick={() => setModalImage('/images/real-chia-glass.jpeg')}
              role="button"
              tabIndex={0}
              aria-label="View enlarged Healthy Chia Seed Glass stall photo"
              onKeyDown={(e) => e.key === 'Enter' && setModalImage('/images/real-chia-glass.jpeg')}
            >
              <img
                src="/images/real-chia-glass.jpeg"
                alt="Real photo of Healthy Chia Seed Glass at The Protein Point stall"
                className="gallery-img"
                loading="lazy"
              />
              <span className="gallery-badge-real">Stall Counter Photo</span>
              <div className="gallery-zoom-hint">🔍 Tap to enlarge</div>
            </div>
            <div className="gallery-card-content">
              <div className="gallery-meta-row">
                <span className="badge-pill badge-cal">
                  <IconFlame className="w-3.5 h-3.5" /> 230 kcal
                </span>
                <span className="badge-pill badge-prot">
                  <IconDumbbell className="w-3.5 h-3.5" /> 6g Protein
                </span>
                <span className="gallery-price">₹49</span>
              </div>
              <h3 className="gallery-item-title">Healthy (Chia Seed) Glass</h3>
              <p className="gallery-item-desc">
                Cold-soaked chia seeds layered with fresh milk, crisp apples, bananas, crunchy seeds, dry fruits, and pure honey. Refreshing, digestive & nutrient-packed!
              </p>
              <div className="gallery-card-actions">
                {realChia && (
                  <button
                    type="button"
                    className="btn btn-primary btn-sm btn-full"
                    onClick={() => {
                      addToCart(realChia, 1);
                      openCart();
                    }}
                    aria-label="Add Healthy Chia Seed Glass to order"
                  >
                    <IconPlus className="w-4 h-4" />
                    <span>Add to Order (₹49)</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Real Photo 2: Protein Crunch Bowl */}
          <div className="gallery-card">
            <div
              className="gallery-img-wrap"
              onClick={() => setModalImage('/images/real-protein-crunch-bowl.jpeg')}
              role="button"
              tabIndex={0}
              aria-label="View enlarged Protein Crunch Bowl stall photo"
              onKeyDown={(e) => e.key === 'Enter' && setModalImage('/images/real-protein-crunch-bowl.jpeg')}
            >
              <img
                src="/images/real-protein-crunch-bowl.jpeg"
                alt="Protein Crunch Bowl - Best Seller at The Protein Point"
                className="gallery-img"
                loading="lazy"
              />
              <span className="gallery-badge-bestseller">⭐ Best Seller</span>
              <div className="gallery-zoom-hint">🔍 Tap to enlarge</div>
            </div>
            <div className="gallery-card-content">
              <div className="gallery-meta-row">
                <span className="badge-pill badge-cal">
                  <IconFlame className="w-3.5 h-3.5" /> 900 kcal
                </span>
                <span className="badge-pill badge-prot">
                  <IconDumbbell className="w-3.5 h-3.5" /> 24g Protein
                </span>
                <span className="gallery-price">₹99</span>
              </div>
              <h3 className="gallery-item-title">Protein Crunch Bowl</h3>
              <p className="gallery-item-desc">
                Our heaviest hitter! Crunchy muesli, fresh milk, organic jaggery, sliced bananas, almonds, roasted pumpkin seeds, and rich creamy peanut butter.
              </p>
              <div className="gallery-card-actions">
                {realBowl && (
                  <button
                    type="button"
                    className="btn btn-primary btn-sm btn-full"
                    onClick={() => {
                      addToCart(realBowl, 1);
                      openCart();
                    }}
                    aria-label="Add Protein Crunch Bowl to order"
                  >
                    <IconPlus className="w-4 h-4" />
                    <span>Add to Order (₹99)</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Real Photo 3: Official Stall Menu Board */}
          <div className="gallery-card menu-board-card">
            <div
              className="gallery-img-wrap"
              onClick={() => setModalImage('/images/menu-new.jpeg')}
              role="button"
              tabIndex={0}
              aria-label="View enlarged official printed menu board"
              onKeyDown={(e) => e.key === 'Enter' && setModalImage('/images/menu-new.jpeg')}
            >
              <img
                src="/images/menu-new.jpeg"
                alt="Official printed menu board of The Protein Point"
                className="gallery-img"
                loading="lazy"
              />
              <span className="gallery-badge-board">Physical Menu Board</span>
              <div className="gallery-zoom-hint">🔍 Tap to enlarge</div>
            </div>
            <div className="gallery-card-content">
              <div className="gallery-meta-row">
                <span className="badge-pill badge-neutral">Official Card</span>
                <span className="badge-pill badge-cal">7 Verified Items</span>
                <span className="gallery-price">From ₹29</span>
              </div>
              <h3 className="gallery-item-title">Official Menu & Rates</h3>
              <p className="gallery-item-desc">
                The authentic printed board placed at our Anand Nagar stall with exact calories, protein quantities, and subscription savings.
              </p>
              <div className="gallery-card-actions">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm btn-full"
                  onClick={() => setModalImage('/images/official-menu-board.webp')}
                  aria-label="Inspect official menu card in fullscreen"
                >
                  <IconExternalLink className="w-4 h-4" />
                  <span>Inspect Full Resolution</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox / Fullscreen Modal */}
        {modalImage && (
          <div
            className="lightbox-overlay"
            onClick={() => setModalImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setModalImage(null)}
                aria-label="Close Preview"
              >
                <IconX className="w-6 h-6" />
              </button>
              <img
                src={modalImage}
                alt="Enlarged photo view"
                className="lightbox-img"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
