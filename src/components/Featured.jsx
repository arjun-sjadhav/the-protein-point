import React from 'react';
import { IconSparkle } from './Icons';

export const Featured = () => {
  const favorites = [
    {
      id: 'power-oats-bowl',
      name: 'Power Oats Bowl',
      tag: 'Signature Bowl',
      desc: 'Whole-grain rolled oats, milk, peanut butter, natural honey, fresh banana, dry fruits, crisp apple, and pomegranate (anar).',
      prices: [
        { label: 'SMALL', price: 69 },
        { label: 'LARGE', price: 79 },
      ],
      image: '/images/hero-protein-bowl.webp',
      alt: 'Power Oats Bowl loaded with blueberries, strawberries, bananas, nuts and seeds',
    },
    {
      id: 'chia-seeds-glass',
      name: 'Chia Seeds Glass',
      tag: 'Refresh Naturally',
      desc: 'Layered nutrient-dense chia seeds, diced crisp apple, fresh banana, mixed seeds, pomegranate (anar), and pure honey.',
      prices: [
        { label: 'SMALL', price: 39 },
        { label: 'LARGE', price: 49 },
      ],
      image: '/images/chia-glass-clean.webp',
      alt: 'Layered Chia Seeds Glass with berries, seeds and fresh fruits',
    },
    {
      id: 'dry-fruits-sandwich',
      name: 'Dry Fruits Sandwich',
      tag: 'Protein & Crunch',
      desc: 'Wholesome brown bread layered with sliced banana, pure peanut butter, natural honey, crunchy dry fruits, and nutrient seeds.',
      prices: [
        { label: '2 PCS', price: 39 },
        { label: '3 PCS', price: 49 },
      ],
      image: '/images/sandwich-clean.webp',
      alt: 'Wholesome Protein Dry Fruits Sandwich on brown bread with seeds',
    },
  ];

  return (
    <section id="favorites" className="section-padding favorites-section" aria-label="Customer Favorites">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconSparkle className="w-4 h-4" />
            Signature Stars
          </span>
          <h2 className="section-title">Power Your Day</h2>
          <p className="section-subtitle">
            Crafted for pure flavor and sustained daily energy. Each dish prepared fresh on demand with authentic ingredients.
          </p>
        </div>

        <div className="favorites-grid">
          {favorites.map((item) => (
            <article key={item.id} className="favorite-card">
              <div className="favorite-card-img-wrap">
                <img
                  src={item.image}
                  alt={item.alt}
                  width="400"
                  height="300"
                  className="favorite-card-img"
                  loading="lazy"
                />
              </div>

              <div className="favorite-card-body">
                <span className="favorite-tag">{item.tag}</span>
                <h3 className="favorite-title">{item.name}</h3>
                <p className="favorite-desc">{item.desc}</p>

                <div className="favorite-prices-row">
                  {item.prices.map((p, idx) => (
                    <span key={idx} className="favorite-price-chip">
                      {p.label}: <strong>₹{p.price}</strong>
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
