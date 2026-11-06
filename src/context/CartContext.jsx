import React, { createContext, useContext, useState, useEffect } from 'react';
import { WHATSAPP_NUMBER, BUSINESS_INFO } from '../data/businessData';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('protein_point_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTakeaway, setIsTakeaway] = useState(true);
  const [customerName, setCustomerName] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('protein_point_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast((current) => (current === message ? null : current));
    }, 2800);
  };

  const addToCart = (item, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { item, quantity }];
    });
    showToast(`Added ${item.name} to order 🥗`);
  };

  const updateQuantity = (itemId, delta) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.item.price * i.quantity, 0);
  const parcelFee = isTakeaway ? (totalItems > 0 ? BUSINESS_INFO.parcelCharge : 0) : 0;
  const grandTotal = subtotal + parcelFee;

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return '';

    let msg = `*New Order - The Protein Point* 🥗\n`;
    if (customerName.trim()) {
      msg += `👤 *Customer:* ${customerName.trim()}\n`;
    }
    msg += `📦 *Order Type:* ${isTakeaway ? 'Takeaway Parcel (+₹6 packaging)' : 'Dine-in / Direct Pickup (₹0)'}\n\n`;
    msg += `*Ordered Items:*\n`;

    cart.forEach((i, idx) => {
      msg += `${idx + 1}. *${i.item.name}* x ${i.quantity} = ₹${i.item.price * i.quantity} (${i.item.calories})\n`;
    });

    msg += `\n💵 *Items Subtotal:* ₹${subtotal}\n`;
    if (isTakeaway && parcelFee > 0) {
      msg += `📦 *Packaging Fee:* ₹${parcelFee}\n`;
    }
    msg += `💰 *Grand Total:* ₹${grandTotal}\n`;

    if (customerNotes.trim()) {
      msg += `\n📝 *Special Instructions:* ${customerNotes.trim()}\n`;
    }

    msg += `\n📍 *Stall:* Near Gold's Gym, Anand Nagar, Nanded\n`;
    msg += `⚡ *Ready in 5 minutes!* Please confirm my order.`;

    return msg;
  };

  const getWhatsAppOrderUrl = () => {
    const text = encodeURIComponent(generateWhatsAppMessage());
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        subtotal,
        parcelFee,
        grandTotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isTakeaway,
        setIsTakeaway,
        customerName,
        setCustomerName,
        customerNotes,
        setCustomerNotes,
        getWhatsAppOrderUrl,
        toast,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
