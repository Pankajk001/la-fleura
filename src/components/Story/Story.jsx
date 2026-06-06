import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Story.module.css';

const Story = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section className={styles.story} id="story">
      <div className={styles.grid}>
        <div className={styles.visualSide}>
          <motion.div 
            className={styles.imageWrapper}
            style={{ y }}
          >
            <img 
            src="/wild_bouquet_clean.png" 
            alt="Joyful wild floral arrangement" 
            className={styles.image}
          />
          </motion.div>
          <div className={styles.floatingTag}>
            <p className={styles.tagText}>"For the woman who stopped waiting."</p>
            <span className={styles.tagAttr}>The La Fleura Philosophy</span>
          </div>
        </div>
        
        <div className={styles.contentSide}>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={styles.contentInner}
          >
            <div className={styles.eyebrow}>
              <span className={styles.line}></span> Our Story
            </div>
            <h2 className={styles.title}>Hi. I'm Nisha.<br /><em>No one bought me flowers.</em></h2>
            
            <p className={styles.paragraph}>
              For a long time, I waited. Not because I couldn't buy my own flowers — but because I believed someone else should.
            </p>
            <p className={styles.paragraph}>
              Then one day I decided to stop waiting. I built La Fleura — a curated flower subscription — because I refused to live in a home without flowers. And because I know I'm not the only one who felt this way.
            </p>
            <p className={styles.paragraph}>
              La Fleura is for the woman who has stopped settling in every other area of her life — and refuses to start here. Fresh flowers. Curated. Delivered. Twice a month. No effort required. No occasion needed.
            </p>
            
            <div className={styles.signature}>Nisha</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
