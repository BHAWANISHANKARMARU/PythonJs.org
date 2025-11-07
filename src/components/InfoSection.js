'use client';

import { motion } from 'framer-motion';
import React from 'react';
import styles from './InfoSection.module.css';
import { BookOpen, UserCheck, Code, Globe, Award, Users } from 'lucide-react';

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

const InfoSection = () => {
  return (
    <motion.div
      className={styles.infoSection}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={containerVariants}
    >
      <motion.div className={styles.grid}>
        <motion.div className={styles.card} variants={itemVariants}>
          <div className={styles.iconContainer}>
            <BookOpen className={styles.icon} />
          </div>
          <h3>Interactive Courses</h3>
          <p>Hands-on lessons in Python and JavaScript for all levels.</p>
        </motion.div>
        <motion.div className={styles.card} variants={itemVariants}>
          <div className={styles.iconContainer}>
            <UserCheck className={styles.icon} />
          </div>
          <h3>Expert Instructors</h3>
          <p>Learn from industry pros with real-world experience.</p>
        </motion.div>
        <motion.div className={styles.card} variants={itemVariants}>
          <div className={styles.iconContainer}>
            <Code className={styles.icon} />
          </div>
          <h3>Practice Projects</h3>
          <p>Build real apps to solidify your skills.</p>
        </motion.div>
        <motion.div className={styles.card} variants={itemVariants}>
          <div className={styles.iconContainer}>
            <Globe className={styles.icon} />
          </div>
          <h3>Learn Anywhere</h3>
          <p>Access courses online, anytime, on any device.</p>
        </motion.div>
        <motion.div className={styles.card} variants={itemVariants}>
          <div className={styles.iconContainer}>
            <Award className={styles.icon} />
          </div>
          <h3>Certificates</h3>
          <p>Earn credentials to boost your career.</p>
        </motion.div>
        <motion.div className={styles.card} variants={itemVariants}>
          <div className={styles.iconContainer}>
            <Users className={styles.icon} />
          </div>
          <h3>Community Support</h3>
          <p>Join learners worldwide to collaborate and grow.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InfoSection;
