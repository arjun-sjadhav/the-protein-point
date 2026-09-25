import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { Menu } from './components/Menu';
import { Featured } from './components/Featured';
import { About } from './components/About';
import { Location } from './components/Location';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhyUs />
        <Menu />
        <Featured />
        <About />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
