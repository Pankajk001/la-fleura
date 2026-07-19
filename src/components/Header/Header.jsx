import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

import Button from '../Button';
import styles from './Header.module.css';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Subscriptions', href: '/#subscriptions' },
    { name: 'FAQ', href: '/faq', isRoute: true },
    { name: 'Inquire', href: '/inquire', isRoute: true },
    { name: 'Our Story', href: '/our-story', isRoute: true }
  ];

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>La Fleura</Link>
          
          <nav className={styles.desktopNav}>
            {navLinks.map((link, index) => (
              <Link key={index} to={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className={styles.actions}>
            <Link to="/cart" className={styles.cartIconWrapper} title="Cart" style={{ color: 'inherit', textDecoration: 'none' }}>
              <ShoppingBag size={24} />
              {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
            </Link>

            <div className={styles.desktopOnly}>
              <a href="https://wa.me/919654537655" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="whatsapp" style={{ padding: '0.6rem 1.4rem', fontSize: '0.65rem' }}>
                  WhatsApp Us
                </Button>
              </a>
            </div>
            
            <button 
              className={styles.mobileMenuBtn}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} color="var(--dark)" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={styles.mobileMenu}
          >
            <button 
              className={styles.closeBtn}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} color="var(--dark)" />
            </button>
            
            <nav className={styles.mobileNavLinks}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                    to={link.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={styles.mobileAction}
              >
                <a href="https://wa.me/919654537655" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '100%' }}>
                  <Button variant="whatsapp" style={{ width: '100%' }}>
                    WhatsApp Us
                  </Button>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
