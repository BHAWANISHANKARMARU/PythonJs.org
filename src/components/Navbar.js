'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { FaHome, FaBook, FaFolderOpen, FaBlog, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '@/context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Link href="/" className={styles.logo}>
          PythonJS
        </Link>
        <div className={styles.links}>
          <Link href="/"><FaHome /> Home</Link>
          <Link href="/courses"><FaBook /> Courses</Link>
          <Link href="/projects"><FaFolderOpen /> Projects</Link>
          <Link href="/blog"><FaBlog /> Blog</Link>
          <Link href="/contact"><FaEnvelope /> Contact Us</Link>
        </div>
        <div className={styles.themeSwitcher} onClick={toggleTheme}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
