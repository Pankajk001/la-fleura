import React from 'react';
import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';
import styles from './Impact.module.css';

const Impact = () => {
  return (
    <section className={styles.section} id="impact">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={styles.contentSide}
        >
          <div className={styles.iconWrapper}>
            <div className={styles.iconCircle}></div>
            <div className={styles.flowerIcon}>🌸</div>
            <div className={styles.decorativeCircle}></div>
          </div>
          
          <h2 className={styles.title}>
            Every La Fleura order<br/>
            <em>gives flowers to someone</em><br/>
            who needs them most.
          </h2>
          
          <p className={styles.paragraph}>
            ₹100 from every subscription goes directly to our NGO partner. Every month, we personally deliver fresh flowers to women and elders who haven't received flowers in years. Because every woman deserves flowers — not just the ones who can subscribe.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={styles.statSide}
        >
          <div className={styles.statValue}>₹100</div>
          <div className={styles.statLabel}>FROM EVERY ORDER DONATED</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
