'use client';

import { motion } from 'framer-motion';
import React from 'react';
import styles from '@/app/blog/[slug]/blogPost.module.css'; // Import the CSS module

export default function BlogPostClient({ postData }) {
  return (
    <motion.div
      className={styles.blogPostContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>{postData.title}</h1>
      <div className={styles.meta}>
        {new Date(postData.date).toLocaleDateString()} by {postData.author}
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </motion.div>
  );
}
