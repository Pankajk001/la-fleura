import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import styles from './Collections.module.css';

// Dynamically import all images from the folders
const luxeImagesRaw = import.meta.glob('../../assets/LUXE Bouquet SECTION/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
const dryImagesRaw = import.meta.glob('../../assets/DRY FLOWER/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
const catalogImagesRaw = import.meta.glob('../../assets/DIFFERENT FLOWERS CATALOG/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
const moodsImagesRaw = import.meta.glob('../../assets/Bouquet for moods/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });

// Helper to format filename into a readable product name
const formatName = (path) => {
  const filename = path.split('/').pop().split('.')[0];
  return filename
    .replace(/[-_]/g, ' ') // Replace dashes and underscores with spaces
    .replace(/\(.*?\)/g, '') // Remove parentheses and their contents like (1)
    .replace(/Rs \d+-\d+ per bunch/i, '') // Remove price strings if present
    .trim();
};

const formatImages = (imagesRaw) => {
  return Object.keys(imagesRaw).map((path) => ({
    src: imagesRaw[path],
    name: formatName(path),
  }));
};

const luxeImages = formatImages(luxeImagesRaw);
const dryImages = formatImages(dryImagesRaw);
const catalogImages = formatImages(catalogImagesRaw);
const moodsImages = formatImages(moodsImagesRaw);

const collections = [
  {
    id: 'bouquet-for-moods',
    title: 'Bouquet for every moods',
    subtitle: 'Flowers for Every Feeling',
    images: moodsImages,
  },
  {
    id: 'luxe-bouquet',
    title: 'LUXE Bouquet',
    subtitle: 'Premium Selection',
    images: luxeImages,
  },
  {
    id: 'dry-flowers',
    title: 'Dry Flowers',
    subtitle: 'Timeless Elegance',
    images: dryImages,
  },
  {
    id: 'flower-catalogue',
    title: 'Flower Catalogue',
    subtitle: 'The Spring Collection',
    images: catalogImages,
  }
];

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
          // Determine how many items to show initially
          // Calculate max items based on full rows of 5, but cap it at 10 (2 rows) max
          const fullRowsItems = Math.floor(item.images.length / 5) * 5;
          let maxInitialItems = Math.min(fullRowsItems, 10);
          
          // If there are less than 5 images total, just show them all so the section isn't empty
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
                  <div key={idx} className={styles.productCard}>
                    <div className={styles.imageWrapper}>
                      <img src={img.src} alt={img.name} className={styles.productImage} />
                    </div>
                    <div className={styles.productInfo}>
                      <h3 className={styles.productName}>{img.name}</h3>
                    </div>
                  </div>
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

export default Collections;
