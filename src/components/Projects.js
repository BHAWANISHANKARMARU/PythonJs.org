'use client';

import { motion } from 'framer-motion';
import React, { useState, useContext } from 'react';
import styles from './Projects.module.css';
import { FaNodeJs, FaReact, FaPython } from 'react-icons/fa';
import { SiPandas, SiDjango } from 'react-icons/si';
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

const Projects = () => {
  const [filter, setFilter] = useState('All Technologies');
  const [sort, setSort] = useState('Latest');
  const { theme } = useContext(ThemeContext);

  const getIconColor = (tech) => {
    if (theme === 'dark') {
      switch (tech) {
        case 'react': return '#61DAFB';
        case 'nodejs': return '#68A063';
        case 'python': return '#3776AB';
        case 'pandas': return '#150458';
        case 'django': return '#092E20';
        default: return '#64FFDA'; // Default accent color for dark theme
      }
    } else { // Light theme
      switch (tech) {
        case 'react': return '#007BFF'; // A light theme friendly blue
        case 'nodejs': return '#28A745'; // A light theme friendly green
        case 'python': return '#0056B3'; // A darker blue
        case 'pandas': return '#003366'; // A darker blue
        case 'django': return '#004D40'; // A darker green
        default: return '#20C997'; // Default accent color for light theme
      }
    }
  };

  const projectsData = [
    {
      id: 1,
      image: '/image copy 9.png', // Placeholder image
      title: 'Real-time Chat App',
      description: 'A real-time chat application built with Node.js and React.',
      technologies: ['javascript', 'react', 'node.js'],
      icons: [
        <FaReact key="react" size={25} color={getIconColor('react')} />,
        <FaNodeJs key="nodejs" size={25} color={getIconColor('nodejs')} />,
      ],
      category: 'Web Development',
    },
    {
      id: 2,
      image: '/image copy 10.png', // Placeholder image
      title: 'Data Analysis Tool',
      description: 'A tool for analyzing large datasets using Python and pandas.',
      technologies: ['python', 'pandas'],
      icons: [
        <FaPython key="python" size={25} color={getIconColor('python')} />,
        <SiPandas key="pandas" size={25} color={getIconColor('pandas')} />,
      ],
      category: 'Data Science',
    },
    {
      id: 3,
      image: '/image copy 11.png', // Placeholder image
      title: 'E-commerce Platform',
      description: 'A full-fledged e-commerce platform built with Django and React.',
      technologies: ['django', 'react', 'python'],
      icons: [
        <SiDjango key="django" size={25} color={getIconColor('django')} />,
        <FaReact key="react" size={25} color={getIconColor('react')} />,
      ],
      category: 'Web Development',
    },
  ];

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'All Technologies') return true;
    return project.technologies.includes(filter.toLowerCase());
  });

  const sortedProjects = filteredProjects.sort((a, b) => {
    if (sort === 'Latest') return b.id - a.id; // Assuming higher ID means newer
    if (sort === 'Oldest') return a.id - b.id;
    return 0;
  });

  return (
    <motion.div
      className={styles.projectsContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={containerVariants}
    >
      <h1 className={styles.title}>Explore All Projects</h1>
      <div className={styles.filters}>
        <select className={styles.dropdown} value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All Technologies</option>
          <option>JavaScript</option>
          <option>Python</option>
          <option>React</option>
          <option>Node.js</option>
          <option>Pandas</option>
          <option>Django</option>
        </select>
        <select className={styles.dropdown} value={sort} onChange={(e) => setSort(e.target.value)}>
          <option>Latest</option>
          <option>Oldest</option>
        </select>
      </div>
      <div className={styles.projectsGrid}>
        {sortedProjects.map((project) => (
          <motion.div key={project.id} className={styles.projectCard} variants={itemVariants}>
            <div className={styles.cardImage} style={{ backgroundImage: `url(${project.image})` }}>
              <div className={styles.comingSoonButton}>Coming Soon</div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.projectIcons}>
                {project.icons.map((icon, i) => (
                  <span key={i} className={styles.iconWrapper}>{icon}</span>
                ))}
              </div>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;