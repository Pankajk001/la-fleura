import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../Button';
import styles from './Collections.module.css';
import { collections } from '../../data/products';

const Collections = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className={styles.collectionsSection}>
      <div className={styles.container}>
        {collections.map((item) => {
          const fullRowsItems = Math.floor(item.images.length / 4) * 4;
          let maxInitialItems = Math.min(fullRowsItems, 8);
          
          if (maxInitialItems === 0) {
            maxInitialItems = item.images.length;
          }

          const isExpanded = expandedSections[item.id];
          const displayImages = isExpanded ? item.images : item.images.slice(0, maxInitialItems);
          const hasMore = item.images.length > maxInitialItems;

          return (
            <motion.div 
              key={item.id}
              id={item.id}
              className={styles.collectionItem}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.header}>
                <div className={styles.eyebrow}>
                  <span className={styles.line}></span>
                  {item.subtitle}
                </div>
                <h2 className={styles.title}>{item.title}</h2>
              </div>

              <div className={styles.productGrid}>
                {displayImages.map((img, idx) => (
                  <ProductCard key={idx} img={img} />
                ))}
              </div>

              {hasMore && (
                <div className={styles.viewAllWrapper}>
                  <Button variant="primary" onClick={() => toggleSection(item.id)}>
                    {isExpanded ? 'View Less' : 'View More'}
                  </Button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const ProductCard = ({ img }) => {
  const hasLongDescription = img.description && img.description.length > 80;

  return (
    <Link to={`/product/${img.id}`} className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img src={img.src} alt={img.name} className={styles.productImage} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{img.name}</h3>
        <p className={styles.productDescription}>
          {hasLongDescription ? `${img.description.slice(0, 80)}...` : img.description}
        </p>
        <div className={styles.cardFooter}>
          <div className={styles.productPrice}>₹ {img.priceDisplay || img.price.toLocaleString('en-IN')}</div>
          {hasLongDescription && (
            <span className={styles.readMoreBtn}>
              Read more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Collections;
