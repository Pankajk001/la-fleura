import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../Button';
import styles from './Hero.module.css';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = ({ openWizard }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className={styles.hero}>
      <motion.div 
        className={styles.background} 
        style={{ y: y1, opacity }}
      >
        <img 
          src="/luxury_floral_hero.png" 
          alt="Beautiful floral arrangement" 
          className={styles.bgImage}
        />
      </motion.div>

      <div className={styles.content}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.eyebrow}
        >
          <span className={styles.line}></span>
          La Fleura Exclusives
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.title}
        >
          Curated Flower<br />
          <em>Subscriptions</em>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.subtitle}
        >
          La Fleura delivers curated, fresh blooms to your door twice a month. For the woman who has decided her everyday life will be beautiful — on her own terms.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={styles.actions}
        >
          <a href="#subscriptions" style={{ textDecoration: 'none' }}>
            <Button variant="primary">View Subscriptions</Button>
          </a>
          <a href="https://wa.me/919654537655" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="whatsapp">
              <MessageCircle size={16} /> WhatsApp Us
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div 
        style={{ y: y1 }}
        className={styles.badgeWrapper}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className={styles.floatingBadge}
        >
          <span className={styles.badgeLine}>Fresh flowers.</span>
          <span className={styles.badgeLine}>Every month.</span>
          <span className={styles.badgeLine}>No waiting required.</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
