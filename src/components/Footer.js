'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { FaBook, FaGithub, FaUsers, FaFileContract } from 'react-icons/fa';

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

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={containerVariants}
    >
      <motion.div className={styles.footerContent} variants={itemVariants}>
        <div className={styles.logo}>PythonJS</div>
        <div className={styles.links}>
          <a href="#"><FaBook /> Resources</a>
          <a href="#"><FaGithub /> GitHub</a>
          <a href="#"><FaUsers /> Community</a>
          <a href="#"><FaFileContract /> T&C</a>
        </div>
        <div className={styles.subscribe}>
          <input type="email" placeholder="Subscribe for updates" />
          <button>Subscribe</button>
        </div>
      </motion.div>
      <motion.div className={styles.copy} variants={itemVariants}>
        Made with <span style={{ color: '#ff6b6b' }}>❤</span> PythonJS &copy; 2025
      </motion.div>
    </motion.footer>
  );
};

export default Footer;