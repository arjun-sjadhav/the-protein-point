import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Subscriptions } from './components/Subscriptions';
import { ProductGallery } from './components/ProductGallery';
import { TargetAudience } from './components/TargetAudience';
import { About } from './components/About';
import { Location } from './components/Location';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FloatingCart } from './components/FloatingCart';
import { Toast } from './components/Toast';

export function App() {
  return (
    <CartProvider>
      <div className="site-wrapper">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Menu />
          <Subscriptions />
          <ProductGallery />
          <TargetAudience />
          <About />
          <Location />
          <FinalCTA />
        </main>
        <Footer />
        <CartDrawer />
        <FloatingCart />
        <Toast />
      </div>
    </CartProvider>
  );
}

export default App;
