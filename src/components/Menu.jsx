import React, { useState, useEffect } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';
import {
  IconLeaf,
  IconFlame,
  IconDumbbell,
  IconPlus,
  IconMinus,
  IconCart,
  IconWhatsApp,
  IconExternalLink,
  IconX,
} from './Icons';

export const Menu = () => {
  const [menuViewMode, setMenuViewMode] = useState('order'); // 'order' or 'board'
  const [activeCategory, setActiveCategory] = useState('all');
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const { cart, addToCart, updateQuantity, totalItems, grandTotal, openCart } = useCart();

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const getItemQuantity = (itemId) => {
    const found = cart.find((i) => i.item.id === itemId);
    return found ? found.quantity : 0;
  };

  useEffect(() => {
    const handleSwitchMode = (e) => {
      if (e.detail?.mode) {
        setMenuViewMode(e.detail.mode);
      }
      if (e.detail?.itemId) {
        setActiveCategory('all');
      }
    };
    window.addEventListener('switch-menu-mode', handleSwitchMode);
    return () => window.removeEventListener('switch-menu-mode', handleSwitchMode);
  }, []);

  return (
    <section id="menu" className="section-padding menu-section" aria-label="Official Menu & Ordering">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <IconLeaf className="w-4 h-4" />
            Fresh Everyday
          </span>
          <h2 className="section-title">Healthy Food Menu</h2>
          <p className="section-subtitle">
            Choose your healthy meal, customize your quantity, and order directly on WhatsApp. Ready in 5 minutes!
          </p>
        </div>

        {/* Dual Mode Switch: Interactive Ordering vs. Actual Menu Card */}
        <div className="menu-mode-switcher-wrap">
          <div className="menu-mode-switcher" role="tablist" aria-label="Menu View Mode">
            <button
              type="button"
              role="tab"
              aria-selected={menuViewMode === 'order'}
              className={`mode-switch-btn ${menuViewMode === 'order' ? 'active' : ''}`}
              onClick={() => setMenuViewMode('order')}
            >
              <IconCart className="w-4 h-4" />
              <span>Interactive Menu & Add Items</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={menuViewMode === 'board'}
              className={`mode-switch-btn ${menuViewMode === 'board' ? 'active' : ''}`}
              onClick={() => setMenuViewMode('board')}
            >
              <span>📜 View Actual Menu Card</span>
            </button>
          </div>
        </div>

        {/* Active Order Banner if items are added */}
        {totalItems > 0 && (
          <div className="menu-order-active-banner">
            <div className="order-banner-left">
              <span className="order-banner-badge">{totalItems} {totalItems === 1 ? 'item' : 'items'} selected</span>
              <span className="order-banner-total">Subtotal: ₹{grandTotal}</span>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={openCart}
            >
              <IconCart className="w-4 h-4" />
              <span>Review Order & WhatsApp</span>
            </button>
          </div>
        )}

        {/* MODE 1: Interactive Ordering (Items + Add Button + Stepper) */}
        {menuViewMode === 'order' && (
          <>
            {/* Sticky Category Filter Tabs */}
            <div className="menu-sticky-filter-bar">
              <div className="menu-category-tabs" role="tablist" aria-label="Menu category filters">
                {MENU_CATEGORIES.map((cat) => {
                  const count =
                    cat.id === 'all'
                      ? MENU_ITEMS.length
                      : MENU_ITEMS.filter((i) => i.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={activeCategory === cat.id}
                      className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      <span>{cat.label}</span>
                      <span className="category-tab-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="menu-cards-grid">
              {filteredItems.map((item) => {
                const qty = getItemQuantity(item.id);
                const isBestSeller = item.id === 'protein-crunch-bowl';

                return (
                  <article key={item.id} id={`item-${item.id}`} className="menu-product-card">
                    <div className="menu-card-img-wrap">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="menu-card-img"
                        loading="lazy"
                      />
                      <div className="menu-card-badges">
                        {isBestSeller ? (
                          <span className="menu-card-bestseller-tag">⭐ Best Seller</span>
                        ) : (
                          <span className="menu-card-tag">{item.tag}</span>
                        )}
                      </div>
                    </div>

                    <div className="menu-card-content">
                      <div className="menu-card-nutrition">
                        <span className="badge-pill badge-cal">
                          <IconFlame className="w-3.5 h-3.5" />
                          {item.calories}
                        </span>
                        <span className="badge-pill badge-prot">
                          <IconDumbbell className="w-3.5 h-3.5" />
                          {item.protein}
                        </span>
                      </div>

                      <h3 className="menu-card-title">{item.name}</h3>

                      <p className="menu-card-desc">{item.description}</p>

                      <div className="menu-card-ingredients">
                        <span className="ingredients-label">Includes:</span>
                        <span className="ingredients-text">{item.ingredients.join(' • ')}</span>
                      </div>

                      <div className="menu-card-footer">
                        <div className="menu-card-price-wrap">
                          <span className="menu-currency">₹</span>
                          <span className="menu-price-val">{item.price}</span>
                        </div>

                        {/* Interactive Add and Plus/Minus Quantity Controls */}
                        <div className="menu-card-action">
                          {qty === 0 ? (
                            <button
                              type="button"
                              className="btn-add-cart"
                              onClick={() => addToCart(item, 1)}
                              aria-label={`Add ${item.name} to order for ₹${item.price}`}
                            >
                              <IconPlus className="w-4 h-4" />
                              <span>Add</span>
                            </button>
                          ) : (
                            <div className="menu-stepper" role="group" aria-label={`Quantity for ${item.name}`}>
                              <button
                                type="button"
                                className="menu-step-btn"
                                onClick={() => updateQuantity(item.id, -1)}
                                aria-label={`Decrease quantity of ${item.name}`}
                              >
                                <IconMinus className="w-3.5 h-3.5" />
                              </button>
                              <span className="menu-step-count">{qty}</span>
                              <button
                                type="button"
                                className="menu-step-btn"
                                onClick={() => updateQuantity(item.id, 1)}
                                aria-label={`Increase quantity of ${item.name}`}
                              >
                                <IconPlus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}

        {/* MODE 2: Actual Printed Menu Card */}
        {menuViewMode === 'board' && (
          <div className="actual-menu-card-container">
            <div className="actual-menu-header-bar">
              <div>
                <h3 className="actual-menu-title">Official Printed Menu Card</h3>
                <p className="actual-menu-sub">Display board placed at our Anand Nagar, Nanded stall</p>
              </div>
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                onClick={() => setMenuModalOpen(true)}
              >
                <span>Full Screen View</span>
                <IconExternalLink className="w-4 h-4" />
              </button>
            </div>

            <div className="actual-menu-img-frame" onClick={() => setMenuModalOpen(true)}>
              <img
                src="/images/menu-new.jpeg"
                alt="Official printed menu board of The Protein Point"
                className="actual-menu-img"
              />
              <div className="actual-menu-zoom-pill">🔍 Tap to inspect full resolution</div>
            </div>

            <div className="actual-menu-cta-bar">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setMenuViewMode('order')}
              >
                <IconCart className="w-4 h-4" />
                <span>Switch to Interactive Order Mode</span>
              </button>
            </div>
          </div>
        )}

        {/* Parcel Fee Notice & Slogan */}
        <div className="menu-bottom-notice">
          <div className="menu-parcel-pill">
            <span>📦 Takeaway Parcel Available: +₹6 Eco Packaging</span>
          </div>
          <div className="menu-slogan-note font-script">
            <span>Real Food • Real Results ♡</span>
          </div>
        </div>

        {/* Official Menu Board Lightbox Modal */}
        {menuModalOpen && (
          <div
            className="lightbox-overlay"
            onClick={() => setMenuModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Official Menu Board"
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setMenuModalOpen(false)}
                aria-label="Close Preview"
              >
                <IconX className="w-6 h-6" />
              </button>
              <div className="lightbox-header-bar">
                <h4>Official Stall Menu Board (Verified Rates)</h4>
                <a
                  href="/images/menu-new.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-cream btn-sm"
                >
                  <span>Open Full Resolution</span>
                  <IconExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <img
                src="/images/menu-new.jpeg"
                alt="Official The Protein Point Menu Board Nanded"
                className="lightbox-img"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
