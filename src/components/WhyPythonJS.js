'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhyPythonJS.module.css';
import { FaPython, FaJs } from 'react-icons/fa';

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

const languages = [
  {
    icon: <FaPython />,
    title: 'Python',
    features: [
      'Easy to Learn: Simple syntax makes it beginner-friendly.',
      'Versatile: Used in web dev, data science, AI, and more.',
      'High Demand: Top language in 2023 job markets.',
    ],
  },
  {
    icon: <FaJs />,
    title: 'JavaScript',
    features: [
      'Web Powerhouse: Runs every modern website.',
      'Interactive: Build dynamic, user-friendly apps.',
      'Job Opportunities: Essential for front-end and full-stack roles.',
    ],
  },
];

const WhyPythonJS = () => {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={containerVariants}
    >
      <h2 className={styles.title}>Why Python & JavaScript?</h2>
      <p className={styles.subtitle}>
        Discover why these languages are the perfect start to your coding journey.
      </p>
      <motion.div className={styles.languagesGrid}>
        {languages.map((lang, index) => (
          <motion.div key={index} className={styles.languageCard} variants={itemVariants}>
            <div className={styles.icon}>{lang.icon}</div>
            <h3 className={styles.languageTitle}>{lang.title}</h3>
            <ul className={styles.featuresList}>
              {lang.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  <span className={styles.checkmark}>&#10003;</span> {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      <p className={styles.readyText}>Ready to master these in-demand skills?</p>
      <button className={styles.startButton}>Start Learning Now</button>
    </motion.div>
  );
};

export default WhyPythonJS;
