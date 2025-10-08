'use client';

import { motion } from 'framer-motion';
import React from 'react';
import styles from './CodeShowcase.module.css';

const codeSnippet = `
async def handle_request(request):
    # A non-blocking network call
    data = await fetch("https://api.example.com/data")
    processed_data = process(data)

    # Another non-blocking call
    await db.save(processed_data)

    return response.json({"status": "success"})
`;

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

const CodeShowcase = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={containerVariants}
    >
      <motion.div className={styles.codeWrapper} variants={itemVariants}>
        <pre><code>{codeSnippet}</code></pre>
      </motion.div>
    </motion.div>
  );
};

export default CodeShowcase;