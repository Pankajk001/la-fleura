import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../Button';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Subscriptions', href: '#subscriptions' },
    { name: 'Give Back', href: '#impact' },
    { name: 'Inquire', href: '#contact' }
  ];

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <a href="#" className={styles.logo}>La Fleura</a>
          
          <nav className={styles.desktopNav}>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className={styles.navLink}>
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className={styles.actions}>
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
                <motion.a 
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
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
