'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './RealProjects.module.css';
import { FaCalculator, FaList, FaBriefcase } from 'react-icons/fa';

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

const projects = [
  {
    icon: <FaCalculator />,
    title: 'Simple Calculator',
    description: 'Create a functional calculator',
    level: 'Beginner',
  },
  {
    icon: <FaList />,
    title: 'To-Do List App',
    description: 'Build an interactive to-do list',
    level: 'Intermediate',
  },
  {
    icon: <FaBriefcase />,
    title: 'Portfolio Website',
    description: 'Design a personal site',
    level: 'Advanced',
  },
];

const RealProjects = () => {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={containerVariants}
    >
      <h2 className={styles.title}>Build Real Projects</h2>
      <p className={styles.subtitle}>
        Apply your skills with these hands-on projects designed to boost your confidence.
      </p>
      <motion.div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.div key={index} className={styles.projectCard} variants={itemVariants}>
            <div className={styles.icon}>{project.icon}</div>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectFooter}>
              <span className={styles.level}>{project.level}</span>
              <a href="#" className={styles.tryIt}>
                Try It &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <button className={styles.exploreButton}>Explore All Projects</button>
    </motion.div>
  );
};

export default RealProjects;
