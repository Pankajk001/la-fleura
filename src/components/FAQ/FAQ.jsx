import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: "How does the subscription work?",
    a: "You choose a plan, pay via UPI, and fresh flowers arrive at your door on the 1st and 15th of every month. Each delivery is curated fresh from the wholesale market that same morning — so you always get peak-fresh blooms."
  },
  {
    q: "How do I place an order?",
    a: "Simply DM us on Instagram @la_fleura__ or WhatsApp us on 9654537655. Tell us your plan, address and preferred delivery date. Pay via UPI and your first delivery is confirmed. No app, no complicated process."
  },
  {
    q: "What areas do you deliver to?",
    a: "We currently deliver across Delhi NCR. If you're outside our current zone, WhatsApp us — we're expanding fast and may be able to accommodate you."
  },
  {
    q: "How fresh are the flowers?",
    a: "Extremely fresh. We source directly from the wholesale flower market on the morning of every delivery. Your flowers go from market to your door on the same day — not sitting in a cold store for days like retail shops."
  },
  {
    q: "Can I customise my flowers?",
    a: "Yes — La Fleura offers full customisation. Tell us your favourite colours, flowers you love or dislike, the vibe you want (romantic, minimal, wild), or any occasion coming up. We'll curate around your taste every single month."
  },
  {
    q: "How long will the flowers last?",
    a: "With proper care, 5–7 days beautifully. Cut the stems at an angle, change the water every 2 days, keep them away from direct sunlight and heat. We include a care card with every delivery."
  },
  {
    q: "Can I gift a La Fleura subscription?",
    a: "Absolutely — gifting a subscription is one of our most popular requests. You pay, we deliver to your recipient every month with a personalised note from you. WhatsApp us to set it up — we'll make it feel special."
  },
  {
    q: "What is your cancellation policy?",
    a: "You can pause or cancel anytime before your next billing cycle. We believe in zero pressure — if you love it, you stay. If your situation changes, we completely understand. Just WhatsApp us 5 days before your next delivery."
  },
  {
    q: "Do you do corporate or cafe subscriptions?",
    a: "Yes — we have dedicated plans for cafes, offices, boutiques and salons. Fresh arrangements twice a month, fully handled, placed by us. WhatsApp 9654537655 or fill the enquiry form and we'll send you our business partnership details."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all UPI payments — GPay, PhonePe, Paytm, NEFT. Payment is collected in advance before each month's delivery. No cash on delivery for subscriptions."
  }
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className={styles.faqItem} onClick={toggleOpen}>
      <div className={styles.questionRow}>
        <h4 className={styles.questionText}>{faq.q}</h4>
        <span className={styles.iconWrapper}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.answerWrapper}
          >
            <p className={styles.answerText}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <div className={styles.eyebrow}>
            <span className={styles.line}></span> Everything You Need to Know
          </div>
          <h2 className={styles.title}>Frequently Asked <em>Questions</em></h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.grid}
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              toggleOpen={() => toggleItem(index)} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
