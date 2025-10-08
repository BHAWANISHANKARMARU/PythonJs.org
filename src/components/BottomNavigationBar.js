'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './BottomNavigationBar.module.css';
import { FaHome, FaBook, FaFolderOpen, FaBlog, FaEnvelope } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const BottomNavigationBar = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return null; // Don't render on non-mobile screens
  }

  return (
    <nav className={styles.bottomNav}>
      <Link href="/" className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}>
        <FaHome />
        <span>Home</span>
      </Link>
      <Link href="/courses" className={`${styles.navItem} ${pathname === '/courses' ? styles.active : ''}`}>
        <FaBook />
        <span>Courses</span>
      </Link>
      <Link href="/projects" className={`${styles.navItem} ${pathname === '/projects' ? styles.active : ''}`}>
        <FaFolderOpen />
        <span>Projects</span>
      </Link>
      <Link href="/blog" className={`${styles.navItem} ${pathname === '/blog' ? styles.active : ''}`}>
        <FaBlog />
        <span>Blog</span>
      </Link>
      <Link href="/contact" className={`${styles.navItem} ${pathname === '/contact' ? styles.active : ''}`}>
        <FaEnvelope />
        <span>Contact</span>
      </Link>
    </nav>
  );
};

export default BottomNavigationBar;
