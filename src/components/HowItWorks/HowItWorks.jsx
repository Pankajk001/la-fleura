import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Sparkles, Truck } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    id: 1,
    icon: <MousePointerClick size={32} />,
    title: 'Choose Your Plan',
    description: 'Select the subscription that fits your lifestyle, from our signature bouquets to grand arrangements.'
  },
  {
    id: 2,
    icon: <Sparkles size={32} />,
    title: 'We Curate',
    description: 'Our expert florists hand-pick the freshest, most stunning blooms of the season specifically for your vibe.'
  },
  {
    id: 3,
    icon: <Truck size={32} />,
    title: 'Delivered',
    description: 'Your beautiful arrangement arrives safely at your doorstep, ready to transform your space.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <div className={styles.eyebrow}>
            <span className={styles.line}></span> Process
          </div>
          <h2 className={styles.title}>How It <em>Works</em></h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className={styles.grid}
        >
          {steps.map((step, index) => (
            <motion.div key={step.id} variants={itemVariants} className={styles.card}>
              <div className={styles.watermark}>0{step.id}</div>
              <div className={styles.content}>
                <div className={styles.iconWrapper}>
                  {step.icon}
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
