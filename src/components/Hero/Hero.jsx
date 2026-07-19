import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import Button from '../Button';
import styles from './Hero.module.css';
import { MessageCircle } from 'lucide-react';
import whitePeoniesImg from '../../assets/Slide images/WHITE_PEONIES-removebg-preview.png';
import slideBanner1 from '../../assets/Slide Banner/Banner-1.png';
import slideBanner2 from '../../assets/Slide Banner/Banner-2.png';
import bannerMain from '../../assets/Slide Banner/Banner-Main.png';
import dryFlowersImg from '../../assets/Slide images/slide image - 2.png';
import slideBanner4 from '../../assets/Slide Banner/Banner-4.png';
import flower3_1 from '../../assets/Slide images/slide image - 3.1.png';
import flower3_2 from '../../assets/Slide images/slide image - 3.2.png';
import flower3_3 from '../../assets/Slide images/slide image - 3.3.png';
import flower3_4 from '../../assets/Slide images/slide image - 3.4.png';

const Hero = ({ openWizard }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.carouselContainer}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            
            {/* Slide 1: Original Hero Content (Theme Typography) */}
            <div className={styles.embla__slide}>
              <div className={`${styles.slideContent} ${styles.slideTheme}`} style={{ backgroundImage: `url(${bannerMain})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                  <div className={styles.slideThemeLayout}>
                    <div className={`${styles.slideThemeText} ${styles.firstSlideText}`}>
                      <div className={styles.eyebrow}>
                        <span className={styles.line}></span>
                        La Fleura Exclusives
                      </div>
                      
                      <h1 className={styles.title}>
                        Curated Flower<br />
                        <em>Subscriptions</em>
                      </h1>
                      
                      <p className={styles.subtitle}>
                        La Fleura delivers curated, fresh blooms to your door twice a month. For the woman who has decided her everyday life will be beautiful — on her own terms.
                      </p>
                      
                      <div className={styles.actions}>
                        <a href="#subscriptions" className={styles.hideOnMobile} style={{ textDecoration: 'none' }}>
                          <Button variant="primary">View Subscriptions</Button>
                        </a>
                        <a href="https://wa.me/919654537655" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                          <Button variant="whatsapp">
                            <MessageCircle size={16} /> WhatsApp Us
                          </Button>
                        </a>
                      </div>
                    </div>
                    {/* Removed logo image per user request */}
                  </div>
              </div>
            </div>

            {/* Slide 2: LUXE Bouquet */}
            <div className={styles.embla__slide}>
              <div className={`${styles.slideContent} ${styles.slideTheme}`} style={{ backgroundImage: `url(${slideBanner1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#F7E4E1' }}>
                  <div className={styles.slideThemeLayout}>
                    <div className={styles.slideThemeText}>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className={styles.eyebrow} style={{ color: 'var(--dark)' }}>
                          <span className={styles.line} style={{ background: 'var(--dark)' }}></span>
                          Exquisite Craftsmanship
                        </div>
                        <h2 className={styles.title} style={{ fontFamily: "'Cormorant Garamond', serif" }}>LUXE Bouquet</h2>
                        <p className={styles.subtitle} style={{ color: 'rgba(28, 20, 16, 0.8)' }}>
                          Elevate your space with our premium selection of hand-tied luxury roses and exotic lilies. Crafted for moments that matter.
                        </p>
                        <div className={styles.actions}>
                          <a href="#luxe-bouquet" style={{ textDecoration: 'none' }}>
                            <Button variant="primary">Shop LUXE</Button>
                          </a>
                        </div>
                      </motion.div>
                    </div>
                    <div className={styles.slideThemeImage}>
                      <img src={whitePeoniesImg} alt="White Peonies Bouquet" className={styles.slideImage} />
                    </div>
                  </div>
              </div>
            </div>

            {/* Slide 3: Dry Flowers */}
            <div className={styles.embla__slide}>
              <div className={`${styles.slideContent} ${styles.slideTheme}`} style={{ backgroundImage: `url(${slideBanner2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#EADCD9' }}>
                  <div className={styles.slideThemeLayout}>
                    <div className={styles.slideThemeText}>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className={styles.eyebrow} style={{ color: 'var(--dark)' }}>
                          <span className={styles.line} style={{ background: 'var(--dark)' }}></span>
                          Rustic & Enduring
                        </div>
                        <h2 className={styles.title} style={{ fontFamily: "'Cormorant Garamond', serif" }}>Dry Flowers</h2>
                        <p className={styles.subtitle} style={{ color: 'rgba(28, 20, 16, 0.8)' }}>
                          Discover our artisanal collection of dried florals. Earthy, enduring, and effortlessly beautiful for any aesthetic.
                        </p>
                        <div className={styles.actions}>
                          <a href="#dry-flowers" style={{ textDecoration: 'none' }}>
                            <Button variant="primary">Explore Dry Flowers</Button>
                          </a>
                        </div>
                      </motion.div>
                    </div>
                    <div className={styles.slideThemeImage}>
                      <img src={dryFlowersImg} alt="Dried Flower Bouquet" className={styles.slideImage} />
                    </div>
                  </div>
              </div>
            </div>

            {/* Slide 4: Flower Catalogue */}
            <div className={styles.embla__slide}>
              <div className={`${styles.slideContent} ${styles.slideTheme}`} style={{ backgroundImage: `url(${slideBanner4})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#E4E7E4' }}>
                  <div className={styles.slideThemeLayout}>
                    <div className={styles.slideThemeText}>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className={styles.eyebrow} style={{ color: 'var(--dark)' }}>
                          <span className={styles.line} style={{ background: 'var(--dark)' }}></span>
                          The Spring Catalogue
                        </div>
                        <h2 className={styles.title} style={{ fontFamily: "'Cormorant Garamond', serif" }}>Seasonal Blooms</h2>
                        <p className={styles.subtitle} style={{ color: 'rgba(28, 20, 16, 0.8)' }}>
                          Browse our complete seasonal collection. From vibrant tulips to classic peonies, find the perfect bloom for every occasion.
                        </p>
                        <div className={styles.actions}>
                          <a href="#flower-catalogue" style={{ textDecoration: 'none' }}>
                            <Button variant="primary">View Catalogue</Button>
                          </a>
                        </div>
                      </motion.div>
                    </div>
                    <div className={styles.slideThemeImage}>
                      <div className={styles.collageContainer}>
                        <img src={flower3_1} alt="Pink Tulip" className={`${styles.collageImage} ${styles.collage1}`} />
                        <img src={flower3_2} alt="White Ranunculus" className={`${styles.collageImage} ${styles.collage2}`} />
                        <img src={flower3_3} alt="Blue Hydrangea" className={`${styles.collageImage} ${styles.collage3}`} />
                        <img src={flower3_4} alt="Yellow Sunflower" className={`${styles.collageImage} ${styles.collage4}`} />
                      </div>
                    </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Pagination Dots (Moved outside the carousel) */}
      <div className={styles.pagination}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === selectedIndex ? styles.dotSelected : ''}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
