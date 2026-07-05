import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../Button';
import styles from './Pricing.module.css';

const plans = [
  {
    id: 'petal',
    eyebrow: 'THE EDIT',
    name: 'Petal',
    price: '₹1,499',
    period: '/month',
    subtitle: '2 DELIVERIES · 10-12 STEMS EACH',
    features: [
      'Seasonal curated blooms',
      'Fresh from wholesale market',
      'Beautiful hand-wrapped presentation',
      'Handwritten note included',
      'Delivered on 1st & 15th'
    ],
    recommended: false,
    delay: 0.2
  },
  {
    id: 'signature',
    eyebrow: 'MOST LOVED ✦',
    name: 'Signature',
    price: '₹2,499',
    period: '/month',
    subtitle: '2 DELIVERIES · 18-20 PREMIUM STEMS',
    features: [
      'Premium roses & exotic blooms',
      'Themed arrangement every month',
      'Luxury kraft box packaging',
      'Handwritten personal note',
      'Delivered on 1st & 15th'
    ],
    recommended: true,
    delay: 0.4
  },
  {
    id: 'prestige',
    eyebrow: 'THE ATELIER',
    name: 'Prestige',
    price: '₹3,999',
    period: '/month',
    subtitle: '4 DELIVERIES · 20-25 EXOTIC STEMS',
    features: [
      'Orchids, peonies & rare blooms',
      'Weekly delivery — always fresh',
      'Luxury gift box + wax seal',
      'Priority scheduling',
      'White-glove delivery'
    ],
    recommended: false,
    delay: 0.6
  }
];

const Pricing = ({ openWizard }) => {
  return (
    <section className={styles.section} id="subscriptions">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <div className={styles.eyebrow}>
            <span className={styles.line}></span> Subscriptions
          </div>
          <h2 className={styles.title}>Choose your <em>La Fleura</em></h2>
        </motion.div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <motion.div 
              key={plan.id}
              id={`plan-${plan.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: plan.delay }}
              className={`${styles.card} ${plan.recommended ? 'glass-panel-dark' : 'glass-panel'} ${plan.recommended ? styles.recommended : ''}`}
            >
              <div className={styles.cardEyebrow}>{plan.eyebrow}</div>
              
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceContainer}>
                <div>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
                <div className={styles.planSubtitle}>{plan.subtitle}</div>
              </div>
              
              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.plusIcon}>+</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.recommended ? 'primary' : 'secondary'} 
                className={styles.selectBtn}
                style={plan.recommended ? { background: 'var(--blush)', color: 'var(--dark)' } : {}}
                onClick={() => window.open('https://wa.me/919654537655', '_blank')}
              >
                INQUIRE VIA WHATSAPP
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
