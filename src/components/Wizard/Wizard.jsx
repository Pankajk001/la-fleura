import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../Button';
import styles from './Wizard.module.css';

const plans = [
  { id: 'essential', name: 'The Essential', price: '₹1,499' },
  { id: 'signature', name: 'The Signature', price: '₹2,499' },
  { id: 'luxe', name: 'The Luxe', price: '₹4,999' }
];

const vibes = [
  { id: 'romantic', name: 'Romantic', desc: 'Soft pinks, classic roses, delicate textures.' },
  { id: 'wild', name: 'Wild & Free', desc: 'Earthy, untamed, lots of foliage and texture.' },
  { id: 'minimal', name: 'Minimalist', desc: 'Clean lines, monochromatic, architectural stems.' }
];

const Wizard = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    plan: null,
    vibe: null,
    note: ''
  });

  const generateWhatsAppLink = () => {
    const phone = '919654537655'; // Nisha's WhatsApp number
    const msg = `Hi Nisha! I'd like to subscribe to La Fleura.%0A%0A*Plan:* ${selections.plan}%0A*Vibe:* ${selections.vibe}%0A*Gift Note:* ${selections.note || 'None'}`;
    return `https://wa.me/${phone}?text=${msg}`;
  };

  const handleNext = () => setStep(s => s + 1);
  const handlePrev = () => setStep(s => s - 1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className={styles.overlay}>
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className={styles.modal}
        >
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>

          <div className={styles.progress}>
            <div className={styles.progressBar} style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>

          <div className={styles.content}>
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className={styles.title}>Select Your <em>Plan</em></h2>
                <div className={styles.optionsGrid}>
                  {plans.map(p => (
                    <div 
                      key={p.id} 
                      className={`${styles.optionCard} ${selections.plan === p.name ? styles.selected : ''}`}
                      onClick={() => setSelections({...selections, plan: p.name})}
                    >
                      <h3>{p.name}</h3>
                      <span className={styles.price}>{p.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className={styles.title}>Choose your <em>La Fleura</em></h2>
                <div className={styles.optionsGrid}>
                  {vibes.map(v => (
                    <div 
                      key={v.id} 
                      className={`${styles.optionCard} ${selections.vibe === v.name ? styles.selected : ''}`}
                      onClick={() => setSelections({...selections, vibe: v.name})}
                    >
                      <h3>{v.name}</h3>
                      <p className={styles.desc}>{v.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className={styles.title}>Add a <em>Note</em></h2>
                <p className={styles.subtitle}>Adding a gift message? Or any specific delivery instructions?</p>
                <textarea 
                  className={styles.textarea}
                  placeholder="Your message here..."
                  value={selections.note}
                  onChange={(e) => setSelections({...selections, note: e.target.value})}
                  rows={4}
                />
                
                <div className={styles.summary}>
                  <h4>Your Subscription Summary</h4>
                  <p><strong>Plan:</strong> {selections.plan}</p>
                  <p><strong>Vibe:</strong> {selections.vibe}</p>
                </div>
              </motion.div>
            )}
          </div>

          <div className={styles.footer}>
            {step > 1 ? (
              <Button variant="secondary" onClick={handlePrev} className={styles.navBtn}>
                <ArrowLeft size={16} /> Back
              </Button>
            ) : <div></div>}
            
            {step < 3 ? (
              <Button 
                variant="primary" 
                onClick={handleNext} 
                className={styles.navBtn}
                disabled={(step === 1 && !selections.plan) || (step === 2 && !selections.vibe)}
                style={{ opacity: ((step === 1 && !selections.plan) || (step === 2 && !selections.vibe)) ? 0.5 : 1 }}
              >
                Next <ArrowRight size={16} />
              </Button>
            ) : (
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="whatsapp" className={styles.navBtn}>
                  Complete via WhatsApp
                </Button>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Wizard;
