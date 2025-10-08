'use client';

import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import styles from './Courses.module.css';
import { FaPython, FaJs, FaGlobe, FaChartLine } from 'react-icons/fa';
import { ThemeContext } from '@/context/ThemeContext';

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

const Courses = () => {
  const { theme } = useContext(ThemeContext);

  const getAccentColor = () => {
    return theme === 'dark' ? '#64FFDA' : '#20C997';
  };

  const accentColor = getAccentColor();

  const coursesData = [
    {
      icon: <FaPython size={40} color={accentColor} />,
      title: 'Python Basics',
      description: 'Learn the fundamentals of Python programming.',
      buttonColor: accentColor,
    },
    {
      icon: <FaJs size={40} color={accentColor} />,
      title: 'JavaScript Essentials',
      description: 'Master the core concepts of JavaScript.',
      buttonColor: accentColor,
    },
    {
      icon: <FaPython size={40} color={accentColor} />,
      title: 'Advanced Python',
      description: 'Dive into advanced Python topics and techniques.',
      buttonColor: accentColor,
    },
    {
      icon: <FaGlobe size={40} color={accentColor} />,
      title: 'Web Development with JavaScript',
      description: 'Build dynamic web applications with JavaScript.',
      buttonColor: accentColor,
    },
    {
      icon: <FaChartLine size={40} color={accentColor} />,
      title: 'Python for Data Science',
      description: 'Use python for data analysis and visualization.',
      buttonColor: accentColor,
    },
  ];

  return (
    <motion.div
      className={styles.coursesContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={containerVariants}
    >
      <h1 className={styles.title}>Our Courses</h1>
      <p className={styles.description}>
        Explore our range of Python and JavaScript courses. Learn from beginner to advanced levels with expert instructors.
      </p>
      <div className={styles.coursesGrid}>
        {coursesData.map((course, index) => (
          <motion.div key={index} className={styles.courseCard} variants={itemVariants}>
            <div className={styles.icon}>{course.icon}</div>
            <h2 className={styles.courseTitle}>{course.title}</h2>
            <p className={styles.courseDescription}>{course.description}</p>
            <button className={styles.comingSoonButton} style={{ backgroundColor: course.buttonColor }}>
              Coming Soon
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;