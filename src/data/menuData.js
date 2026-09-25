/**
 * The Protein Point - Official Menu Data
 * Source of truth: Official Menu Reference Poster
 * Exact prices, items, and ingredients as provided by the business owner.
 */

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Menu Items' },
  { id: 'sandwiches', label: 'Protein Sandwiches' },
  { id: 'oats', label: 'Oats Bowls' },
  { id: 'chia', label: 'Chia Specials' },
];

export const MENU_ITEMS = [
  {
    id: 'brown-bread-sandwich',
    name: 'Brown Bread Sandwich',
    category: 'sandwiches',
    ingredients: ['Brown bread', 'Banana', 'Peanut butter', 'Honey'],
    tag: 'Energy Sandwich',
    prices: [
      { label: '2 PCS', price: 29 },
      { label: '3 PCS', price: 39 },
    ],
  },
  {
    id: 'dry-fruits-sandwich',
    name: 'Dry Fruits Sandwich',
    category: 'sandwiches',
    ingredients: ['Brown bread', 'Banana', 'Peanut butter', 'Honey', 'Dry fruits', 'Seeds'],
    tag: 'Dry Fruits & Seeds',
    prices: [
      { label: '2 PCS', price: 39 },
      { label: '3 PCS', price: 49 },
    ],
  },
  {
    id: 'chia-seeds-glass',
    name: 'Chia Seeds Glass',
    category: 'chia',
    ingredients: ['Chia seeds', 'Apple', 'Banana', 'Seeds', 'Anar', 'Honey'],
    tag: 'Refresh Naturally',
    prices: [
      { label: 'SMALL', price: 39 },
      { label: 'LARGE', price: 49 },
    ],
  },
  {
    id: 'chocolate-oats-bowl',
    name: 'Chocolate Oats Bowl',
    category: 'oats',
    ingredients: ['Chocolate oats', 'Milk', 'Peanut butter', 'Banana', 'Honey'],
    tag: 'Wholesome Cocoa',
    prices: [
      { label: 'SMALL', price: 49 },
      { label: 'LARGE', price: 59 },
    ],
  },
  {
    id: 'power-oats-bowl',
    name: 'Power Oats Bowl',
    category: 'oats',
    ingredients: ['Oats', 'Milk', 'Peanut butter', 'Honey', 'Banana', 'Dry fruit', 'Apple', 'Anar'],
    tag: 'Signature Bowl',
    prices: [
      { label: 'SMALL', price: 69 },
      { label: 'LARGE', price: 79 },
    ],
  },
];
