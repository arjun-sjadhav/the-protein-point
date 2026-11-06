import React from 'react';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/businessData';
import {
  IconX,
  IconCart,
  IconPlus,
  IconMinus,
  IconTrash,
  IconWhatsApp,
  IconFlame,
  IconDumbbell,
  IconClock,
  IconArrowRight,
} from './Icons';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    subtotal,
    parcelFee,
    grandTotal,
    isTakeaway,
    setIsTakeaway,
    customerName,
    setCustomerName,
    customerNotes,
    setCustomerNotes,
    getWhatsAppOrderUrl,
  } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppOrder = () => {
    const url = getWhatsAppOrderUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="cart-backdrop" onClick={closeCart} role="dialog" aria-modal="true" aria-label="Shopping Cart">
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Cart Drawer Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <IconCart className="w-5 h-5 text-leaf-green" />
            <h3 className="cart-title">Your Order</h3>
            {totalItems > 0 && <span className="cart-count-badge">{totalItems}</span>}
          </div>
          <button
            type="button"
            className="cart-close-btn"
            onClick={closeCart}
            aria-label="Close Cart"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Drawer Body */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon">🥗</div>
              <h4>Your bowl is empty</h4>
              <p>Explore our fresh, protein-packed menu and add your favorite bowl, sandwich, or chia glass!</p>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={closeCart}
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="cart-items-list">
                {cart.map(({ item, quantity }) => (
                  <div key={item.id} className="cart-item-row">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-img"
                      loading="lazy"
                    />
                    <div className="cart-item-info">
                      <div className="cart-item-header">
                        <span className="cart-item-name">{item.name}</span>
                        <button
                          type="button"
                          className="cart-item-remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <IconTrash className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="cart-item-nutrition">
                        <span className="cart-pill-cal">
                          <IconFlame className="w-3 h-3 text-gold" />
                          {item.calories}
                        </span>
                        <span className="cart-pill-prot">
                          <IconDumbbell className="w-3 h-3 text-leaf-green" />
                          {item.protein}
                        </span>
                      </div>

                      <div className="cart-item-pricing-row">
                        <span className="cart-item-unit-price">₹{item.price} each</span>
                        <div className="cart-qty-control">
                          <button
                            type="button"
                            className="cart-qty-btn"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <IconMinus className="w-3.5 h-3.5" />
                          </button>
                          <span className="cart-qty-val">{quantity}</span>
                          <button
                            type="button"
                            className="cart-qty-btn"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            <IconPlus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="cart-item-total-price">₹{item.price * quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options */}
              <div className="cart-options-section">
                <label className="cart-section-label">Order Type</label>
                <div className="cart-type-toggle">
                  <button
                    type="button"
                    className={`cart-type-btn ${isTakeaway ? 'active' : ''}`}
                    onClick={() => setIsTakeaway(true)}
                  >
                    <span>📦 Takeaway Parcel</span>
                    <span className="cart-type-fee">+₹{BUSINESS_INFO.parcelCharge}</span>
                  </button>
                  <button
                    type="button"
                    className={`cart-type-btn ${!isTakeaway ? 'active' : ''}`}
                    onClick={() => setIsTakeaway(false)}
                  >
                    <span>🍽️ Dine-in / Stall Pickup</span>
                    <span className="cart-type-fee">₹0</span>
                  </button>
                </div>

                <div className="cart-input-group">
                  <label htmlFor="customer-name" className="cart-section-label">
                    Your Name (Optional)
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    className="cart-input"
                    placeholder="e.g. Rahul, Sneha"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>

                <div className="cart-input-group">
                  <label htmlFor="customer-notes" className="cart-section-label">
                    Special Instructions (Optional)
                  </label>
                  <input
                    id="customer-notes"
                    type="text"
                    className="cart-input"
                    placeholder="e.g. Extra honey, no bananas, less peanut butter"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                  />
                </div>
              </div>

              {/* Speed & Stall Note */}
              <div className="cart-speed-notice">
                <IconClock className="w-4 h-4 text-leaf-green" />
                <span>Ready in <strong>5 minutes</strong> at stall Near Gold's Gym, Anand Nagar!</span>
              </div>
            </>
          )}
        </div>

        {/* Cart Drawer Footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-bill-row">
              <span className="cart-bill-label">Items Subtotal</span>
              <span className="cart-bill-value">₹{subtotal}</span>
            </div>
            {isTakeaway && (
              <div className="cart-bill-row">
                <span className="cart-bill-label">Packaging & Parcel Fee</span>
                <span className="cart-bill-value">₹{parcelFee}</span>
              </div>
            )}
            <div className="cart-bill-row cart-bill-total">
              <span className="cart-bill-total-label">Grand Total</span>
              <span className="cart-bill-total-value">₹{grandTotal}</span>
            </div>

            <button
              type="button"
              className="btn btn-whatsapp-checkout"
              onClick={handleWhatsAppOrder}
            >
              <IconWhatsApp className="w-5 h-5" />
              <span>Order via WhatsApp (₹{grandTotal})</span>
              <IconArrowRight className="w-4 h-4" />
            </button>

            <div className="cart-footer-note">
              <span>⚡ No upfront payment needed • Instant confirmation on WhatsApp</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
