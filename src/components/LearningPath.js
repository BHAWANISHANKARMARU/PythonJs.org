'use client';

import { motion } from 'framer-motion';
import React from 'react';
import styles from './LearningPath.module.css';
import { GraduationCap, Rocket, Crown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const LearningPath = () => {
  return (
    <motion.div
      className={styles.learningPath}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={containerVariants}
    >
      <h2>Explore Your Learning Path</h2>
      <p className={styles.subtitle}>Start where you are and grow into a coding expert with tailored tracks.</p>
      <motion.div className={styles.cards}>
        <motion.div className={styles.card} variants={itemVariants}>
          <div className={styles.icon}><GraduationCap color="#4d194d" size={48} /></div>
          <h3>Beginner</h3>
          <p>Master the basics of Python and JavaScript from scratch.</p>
          <ul className={styles.featuresList}>
            <li><span className={styles.check}>✓</span> Variables & Data Types</li>
            <li><span className={styles.check}>✓</span> Loops & Conditions</li>
            <li><span className={styles.check}>✓</span> Simple Projects</li>
          </ul>
          <button className={styles.btn}>Start Now</button>
        </motion.div>
        <motion.div className={styles.card} variants={itemVariants}>
          <div className={styles.icon}><Rocket color="#4d194d" size={48} /></div>
          <h3>Intermediate</h3>
          <p>Build on your skills with real-world applications.</p>
          <ul className={styles.featuresList}>
            <li><span className={styles.check}>✓</span> Functions & Modules</li>
            <li><span className={styles.check}>✓</span> APIs & Data</li>
            <li><span className={styles.check}>✓</span> Web Apps</li>
          </ul>
          <button className={styles.btn}>Level Up</button>
        </motion.div>
        <motion.div className={styles.card} variants={itemVariants}>
          <div className={styles.icon}><Crown color="#4d194d" size={48} /></div>
          <h3>Advanced</h3>
          <p>Become a pro with cutting-edge techniques.</p>
          <ul className={styles.featuresList}>
            <li><span className={styles.check}>✓</span> Advanced Algorithms</li>
            <li><span className={styles.check}>✓</span> Frameworks</li>
            <li><span className={styles.check}>✓</span> Portfolio Projects</li>
          </ul>
          <button className={styles.btn}>Go Pro</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LearningPath;        