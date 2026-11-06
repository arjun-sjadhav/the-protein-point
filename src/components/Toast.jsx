import React from 'react';
import { useCart } from '../context/CartContext';

export const Toast = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="toast-notification-pill" role="status" aria-live="polite">
      <span>{toast}</span>
    </div>
  );
};
