import React, { useState } from 'react';
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
import './index.css';

function App() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <Hero openWizard={() => setIsWizardOpen(true)} />
      <HowItWorks />
      <Story />
      <Pricing openWizard={() => setIsWizardOpen(true)} />
      <Impact />
      <FAQ />
      <Contact />
      <Footer />
      
      <Wizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
    </div>
  );
}

export default App;
