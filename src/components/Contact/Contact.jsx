import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
  const submitForm = (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('f_name').value;
    const phone = document.getElementById('f_phone').value;
    const city = document.getElementById('f_city').value;
    const type = document.getElementById('f_type').value;
    const plan = document.getElementById('f_plan').value;
    const pref = document.getElementById('f_pref').value;
    const address = document.getElementById('f_address').value;
    const msg = document.getElementById('f_msg').value;

    // Construct WhatsApp message
    let text = `Hi Nisha! New enquiry from the website 🌸\n\n`;
    text += `*Name:* ${name}\n`;
    text += `*WhatsApp:* ${phone}\n`;
    if (city) text += `*City:* ${city}\n`;
    if (type) text += `*Enquiry for:* ${type}\n`;
    if (plan) text += `*Plan interested in:* ${plan}\n`;
    if (pref) text += `*Preferences:* ${pref}\n`;
    if (address) text += `*Area/Address:* ${address}\n`;
    if (msg) text += `\n*Message:* ${msg}`;

    // Open WhatsApp
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919654537655?text=${encodedText}`, '_blank');

    // Show success message
    const status = document.getElementById('f_status');
    if (status) {
      status.innerText = "Redirecting to WhatsApp... 🌸";
      status.style.color = "var(--rose)";
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.contactLeft}
        >
          <div className={styles.eyebrow}>
            <span className={styles.line}></span> Get in Touch
          </div>
          <h2 className={styles.title}>Ready to <em>begin</em>?</h2>
          <p className={styles.body}>Reach us on WhatsApp for the fastest response — or fill the form and we'll get back to you within 24 hours.</p>
          
          <div className={styles.channels}>
            <a href="https://wa.me/919654537655?text=Hi+Nisha!+I'd+like+to+know+more+about+La+Fleura+🌸" target="_blank" rel="noreferrer" className={styles.channelBtn}>
              <div className={`${styles.channelIcon} ${styles.chWa}`}>💬</div>
              <div className={styles.channelText}>
                <div className={styles.channelLabel}>WhatsApp — Fastest response</div>
                <div className={styles.channelVal}>+91 96545 37655</div>
              </div>
            </a>
            <a href="tel:+919654537655" className={styles.channelBtn}>
              <div className={styles.channelIcon} style={{background: '#EAF3DE'}}>📞</div>
              <div className={styles.channelText}>
                <div className={styles.channelLabel}>Call us directly</div>
                <div className={styles.channelVal}>+91 96545 37655</div>
              </div>
            </a>
            <a href="https://www.instagram.com/la_fleura__/" target="_blank" rel="noreferrer" className={styles.channelBtn}>
              <div className={`${styles.channelIcon} ${styles.chIg}`}>📸</div>
              <div className={styles.channelText}>
                <div className={styles.channelLabel}>Instagram</div>
                <div className={styles.channelVal}>@la_fleura__</div>
              </div>
            </a>
          </div>
          
          <div className={styles.customisationBox}>
            <div className={styles.customEyebrow}>✦ Customisation Available</div>
            <p className={styles.customBody}>Want a specific colour theme, flower type, or occasion-based arrangement? La Fleura offers fully customised subscriptions. Just tell us what you have in mind — we'll make it happen.</p>
            <a href="https://wa.me/919654537655?text=Hi+Nisha!+I'd+like+to+discuss+a+customised+La+Fleura+subscription+🌸" target="_blank" rel="noreferrer" className={styles.customLink}>Discuss customisation →</a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.contactRight}
        >
          <div className={styles.formWrap}>
            <h3 className={styles.formTitle}>Send an enquiry</h3>
            <p className={styles.formSub}>Tell us a little about yourself and we'll help you find the perfect La Fleura subscription.</p>
            
            <form id="laflForm" onSubmit={submitForm} className={styles.form}>
              <div className={styles.formGroup}>
                <label>Your Full Name *</label>
                <input type="text" id="f_name" placeholder="Priya Sharma" required />
              </div>
              <div className={styles.formGroup}>
                <label>WhatsApp Number *</label>
                <input type="tel" id="f_phone" placeholder="+91 98765 43210" required />
              </div>
              <div className={styles.formGroup}>
                <label>Your City *</label>
                <input type="text" id="f_city" placeholder="Delhi, Mumbai, Bangalore..." />
              </div>
              <div className={styles.formGroup}>
                <label>This enquiry is for *</label>
                <select id="f_type">
                  <option value="">Select one</option>
                  <option>Myself — personal subscription</option>
                  <option>Gifting someone special</option>
                  <option>My cafe / office / business</option>
                  <option>Just exploring for now</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Which plan interests you?</label>
                <select id="f_plan">
                  <option value="">Select a plan</option>
                  <option>Petal Plan — ₹1,499/month (2 deliveries)</option>
                  <option>Signature Plan — ₹2,499/month (2 deliveries, premium)</option>
                  <option>Prestige Plan — ₹3,999/month (weekly delivery)</option>
                  <option>Cafe / Business Partnership</option>
                  <option>Not sure yet — help me decide</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Any flower preferences or colours you love?</label>
                <input type="text" id="f_pref" placeholder="e.g. pink roses, no lilies, pastel colours..." />
              </div>
              <div className={styles.formGroupFull}>
                <label>Delivery address / area</label>
                <input type="text" id="f_address" placeholder="Hauz Khas, Delhi / Bandra, Mumbai..." />
              </div>
              <div className={styles.formGroupFull}>
                <label>Anything else you'd like Nisha to know?</label>
                <textarea id="f_msg" placeholder="A special occasion, a gift message, any questions..." rows="3"></textarea>
              </div>
              <button type="submit" className={styles.formSubmit} id="f_btn">Send to Nisha →</button>
              <p className={styles.formNote} id="f_status">We respond within 24 hours via WhatsApp 🌸</p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
