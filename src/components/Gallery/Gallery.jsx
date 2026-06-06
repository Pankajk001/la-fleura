import React from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const images = [
  "https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?w=600&q=80",
  "https://images.unsplash.com/photo-1457089328109-e5d9f725f5a2?w=600&q=80",
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600&q=80",
  "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=600&q=80"
];

const Gallery = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={styles.titleWrapper}
          >
            <h2 className={styles.title}>The <em>Gallery</em></h2>
            <p className={styles.subtitle}>Moments captured by our community.</p>
          </motion.div>
          
          <motion.a 
            href="#" 
            className={styles.igLink}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <InstagramIcon size={18} /> @lafleura
          </motion.a>
        </div>

        <div className={styles.grid}>
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={styles.imageCard}
            >
              <img src={img} alt={`Gallery image ${index + 1}`} className={styles.image} />
              <div className={styles.overlay}>
                <InstagramIcon size={24} color="white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
