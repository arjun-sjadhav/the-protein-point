import React from 'react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_LINK } from '../data/businessData';
import { IconCart, IconWhatsApp, IconArrowRight } from './Icons';

export const FloatingCart = () => {
  const { totalItems, grandTotal, openCart } = useCart();

  // If cart has items, show order checkout pill
  if (totalItems > 0) {
    return (
      <div className="floating-cart-bar" role="region" aria-label="Order summary floating bar">
        <button
          type="button"
          className="floating-cart-inner"
          onClick={openCart}
          aria-label={`View Cart with ${totalItems} items, total ₹${grandTotal}`}
        >
          <div className="floating-cart-left">
            <div className="floating-cart-icon-wrap">
              <IconCart className="w-5 h-5 text-white" />
              <span className="floating-cart-count">{totalItems}</span>
            </div>
            <div className="floating-cart-text">
              <span className="floating-cart-label">{totalItems} {totalItems === 1 ? 'item' : 'items'} in bowl</span>
              <span className="floating-cart-price">₹{grandTotal}</span>
            </div>
          </div>

          <div className="floating-cart-right">
            <span>View & Order</span>
            <IconArrowRight className="w-4 h-4" />
          </div>
        </button>
      </div>
    );
  }

  // If cart is empty, show sticky mobile WhatsApp ordering button
  return (
    <div className="floating-cart-bar mobile-only-fab" role="region" aria-label="Direct WhatsApp Ordering Shortcut">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-fab"
        aria-label="Order directly on WhatsApp"
      >
        <IconWhatsApp className="w-4 h-4 text-leaf-green" />
        <span>Order on WhatsApp</span>
      </a>
    </div>
  );
};
