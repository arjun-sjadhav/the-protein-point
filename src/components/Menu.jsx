import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { IconLeaf, IconExternalLink } from './Icons';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding menu-section" aria-label="Official Menu">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconLeaf className="w-4 h-4" />
            Official Menu & Pricing
          </span>
          <h2 className="section-title">Fresh, Natural & Protein-Packed</h2>
          <p className="section-subtitle">
            Every item is freshly prepared with wholesome brown bread, whole-grain oats, fresh fruits, nutrient-packed seeds, and pure honey.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="menu-category-tabs" role="tablist" aria-label="Menu category filters">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Menu Showcase: Digital List + Official Attached Poster */}
        <div className="menu-showcase-grid">
          {/* Column 1: Clean Digital Menu Cards */}
          <div className="menu-items-list">
            {filteredItems.map((item) => (
              <article key={item.id} className="menu-list-card">
                <div className="menu-list-header">
                  <h3 className="menu-list-title">{item.name}</h3>
                  <span className="menu-list-tag">{item.tag}</span>
                </div>

                <div className="menu-list-ingredients">
                  <strong>Ingredients:</strong>
                  {item.ingredients.join(' • ')}
                </div>

                <div className="menu-list-prices-row">
                  {item.prices.map((p, idx) => (
                    <div key={idx} className="menu-price-badge">
                      <span className="menu-price-portion">{p.label}:</span>
                      <span className="menu-price-amount">
                        <span className="menu-price-symbol">₹</span>
                        {p.price}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}

            <div style={{ padding: '16px 0', textAlign: 'center' }}>
              <p className="font-script" style={{ fontSize: '1.45rem', color: 'var(--color-leaf-dark)' }}>
                Eat Clean • Train Hard • Stay Healthy ♡
              </p>
            </div>
          </div>

          {/* Column 2: Official Attached Menu Board */}
          <aside className="menu-poster-showcase" aria-label="Official Menu Board">
            <div className="menu-poster-header">
              <span className="menu-poster-title">Official Menu Board</span>
              <span className="menu-poster-badge">Authentic Reference</span>
            </div>

            <div className="menu-poster-img-wrap">
              <img
                src="/images/official-menu-board.webp"
                alt="Official The Protein Point Menu Board in Nanded with verified items and prices"
                width="1024"
                height="1536"
                className="menu-poster-img"
                loading="lazy"
              />
            </div>

            <a
              href="/images/official-menu-board.webp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ width: '100%' }}
            >
              <span>View Full Menu Poster</span>
              <IconExternalLink className="w-4 h-4" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};
