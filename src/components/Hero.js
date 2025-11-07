import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import ParticlesBackground from './ParticlesBackground';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className={styles.hero}>
      <ParticlesBackground className={styles.particles} />
      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            Learn <span className={styles.highlight}>JavaScript</span>
          </h1>
          <p className={styles.subtitle}>
            Learn coding from scratch or level up your skills with expert-led
            courses.
          </p>
          <div className={styles.buttonContainer}>
            <Link href="#" className={styles.ctaButton}>
              Start Learning
            </Link>
            <Link href="#" className={styles.ctaButtonOutline}>
              Browse Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;