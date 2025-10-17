'use client';

import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import styles from './Courses.module.css';
import { FaPython, FaJs, FaGlobe, FaChartLine } from 'react-icons/fa';
import { ThemeContext } from '@/context/ThemeContext';
import Link from 'next/link';

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

const CoursesClient = ({ coursesData }) => {
  const { theme } = useContext(ThemeContext);

  const getAccentColor = () => {
    return theme === 'dark' ? '#64FFDA' : '#20C997';
  };

  const accentColor = getAccentColor();

  const iconMap = {
    FaPython: <FaPython size={40} color={accentColor} />,
    FaJs: <FaJs size={40} color={accentColor} />,
    FaGlobe: <FaGlobe size={40} color={accentColor} />,
    FaChartLine: <FaChartLine size={40} color={accentColor} />,
  };

  return (
    <motion.div
      className={styles.coursesContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
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
            <div className={styles.icon}>{iconMap[course.icon]}</div>
            <h2 className={styles.courseTitle}>{course.title}</h2>
            <p className={styles.courseDescription}>{course.description}</p>
            <Link href={`/courses/${course.slug}`} passHref>
              <button className={styles.comingSoonButton} style={{ backgroundColor: accentColor }}>
                See Course
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoursesClient;