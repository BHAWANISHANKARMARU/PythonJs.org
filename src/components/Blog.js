'use client';

import { motion } from 'framer-motion';
import React from 'react';
import styles from './Blog.module.css';
import { FaNewspaper, FaBookOpen, FaCode, FaLaptopCode } from 'react-icons/fa';

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

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Python in AI',
    date: 'October 26, 2023',
    author: 'Jane Doe',
    summary: 'Explore how Python continues to dominate the AI landscape with new libraries and frameworks.',
    icon: <FaCode />,
  },
  {
    id: 2,
    title: 'JavaScript: Beyond the Browser',
    date: 'October 20, 2023',
    author: 'John Smith',
    summary: 'Dive into the versatility of JavaScript, from Node.js backends to desktop applications.',
    icon: <FaLaptopCode />,
  },
  {
    id: 3,
    title: 'Mastering Data Science with Pandas',
    date: 'October 15, 2023',
    author: 'Emily White',
    summary: 'A comprehensive guide to using Pandas for data manipulation and analysis in Python.',
    icon: <FaBookOpen />,
  },
  {
    id: 4,
    title: 'Building Scalable Web Apps with Django',
    date: 'October 10, 2023',
    author: 'Michael Brown',
    summary: 'Learn the best practices for developing robust and scalable web applications using the Django framework.',
    icon: <FaNewspaper />,
  },
];

const Blog = () => {
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
        {blogPosts.map((post) => (
          <motion.div key={post.id} className={styles.blogCard} variants={itemVariants}>
            <div className={styles.blogVisual}>{post.icon}</div>
            <div className={styles.blogContent}>
              <h2 className={styles.blogTitle}>{post.title}</h2>
              <p className={styles.blogMeta}>{post.date} by {post.author}</p>
              <p className={styles.blogSummary}>{post.summary}</p>
              <a href={`/blog/${post.id}`} className={styles.readMore}>Read More &rarr;</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;