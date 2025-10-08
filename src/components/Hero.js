'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';
import ParticlesBackground from './ParticlesBackground';

const languages = ['JavaScript', 'Python'];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>
      <ParticlesBackground className={styles.particles} />
      <div className={`container ${styles.heroContent}`}>
        <div className="row">
          <div className="col-lg-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={styles.title}>
                Learn{' '}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={languages[index]}
                    className={styles.highlight}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {languages[index]}
                  </motion.span>
                </AnimatePresence>
              </h1>
              <p className={styles.subtitle}>
                Learn coding from scratch or level up your skills with
                expert-led courses.
              </p>
              <div>
                <a href="#" className={styles.ctaButton}>
                  Start Learning
                </a>
                <a href="#" className={styles.ctaButtonOutline}>
                  Browse Courses
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;