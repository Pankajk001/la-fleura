import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Story from './components/Story/Story';
import Pricing from './components/Pricing/Pricing';
import Impact from './components/Impact/Impact';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Wizard from './components/Wizard/Wizard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Collections from './components/Collections/Collections';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import './index.css';

function App() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Only scroll to top if we are not navigating to a hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <CartProvider>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero openWizard={() => setIsWizardOpen(true)} />
              <Collections />
              <HowItWorks />
              <Pricing openWizard={() => setIsWizardOpen(true)} />
              <Impact />
            </>
          } />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/inquire" element={<Contact />} />
          <Route path="/our-story" element={<Story />} />
        </Routes>
        <Footer />

        <Wizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;
