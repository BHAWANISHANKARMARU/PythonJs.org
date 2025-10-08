'use client';

import { motion } from 'framer-motion';
import React from 'react';
import styles from './Blog.module.css';
import { FaNewspaper, FaBookOpen, FaCode, FaLaptopCode } from 'react-icons/fa';
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

const Blog = ({ allPostsData }) => {
  const getIconForCategory = (title) => {
    if (typeof title !== 'string') {
      return <FaNewspaper />; // Default icon if title is not a string
    }
    if (title.includes('Python') || title.includes('AI') || title.includes('Pandas')) {
      return <FaCode />;
    } else if (title.includes('JavaScript') || title.includes('Browser') || title.includes('Web Apps')) {
      return <FaLaptopCode />;
    } else {
      return <FaNewspaper />;
    }
  };

  return (
    <motion.div
      className={styles.blogContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={containerVariants}
    >
      <h1 className={styles.title}>Our Blog</h1>
      <p className={styles.description}>
        Stay updated with the latest in Python, JavaScript, and web development.
      </p>
      <div className={styles.blogGrid}>
        {allPostsData.map(({ id, date, title, summary, author }) => (
          <motion.div key={id} className={styles.blogCard} variants={itemVariants}>
            <div className={styles.blogVisual}>{getIconForCategory(title)}</div>
            <div className={styles.blogContent}>
              <h2 className={styles.blogTitle}>{title}</h2>
              <p className={styles.blogMeta}>{new Date(date).toLocaleDateString()} by {author}</p>
              <p className={styles.blogSummary}>{summary}</p>
              <Link href={`/blog/${id}`} className={styles.readMore}>Read More &rarr;</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
