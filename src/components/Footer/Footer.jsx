import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandCol}>
          <h2 className={styles.logo}>LA FLEURA</h2>
          <p className={styles.tagline}>Curated flower subscriptions for the woman who has decided her everyday life will be beautiful. Not for everyone — and that is intentional.</p>
        </div>
        
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>SUBSCRIPTIONS</h4>
          <ul className={styles.links}>
            <li><a href="#plan-petal">Petal Plan — ₹1,499</a></li>
            <li><a href="#plan-signature">Signature Plan — ₹2,499</a></li>
            <li><a href="#plan-prestige">Prestige Plan — ₹3,999</a></li>
            <li><a href="#contact">Cafe Partnerships</a></li>
          </ul>
        </div>
        
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>CONNECT</h4>
          <ul className={styles.links}>
            <li><a href="https://wa.me/919654537655" target="_blank" rel="noopener noreferrer">WhatsApp — 9654537655</a></li>
            <li><a href="tel:+919654537655">Call — +91 96545 37655</a></li>
            <li><a href="https://www.instagram.com/la_fleura__/" target="_blank" rel="noopener noreferrer">Instagram — @la_fleura__</a></li>
            <li><a href="#contact">Send Enquiry</a></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} La Fleura — All rights reserved</p>
        <p className={styles.disclaimer}>* Prices are indicative and subject to seasonal availability</p>
        <p>Made with love by Pankaj 🌸</p>
      </div>
    </footer>
  );
};

export default Footer;
