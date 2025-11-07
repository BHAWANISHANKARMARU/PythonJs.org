'use client';

import { motion } from 'framer-motion';

import Hero from './Hero';
import InfoSection from './InfoSection';
import LearningPath from './LearningPath';
import RealProjects from './RealProjects';
import WhyPythonJS from './WhyPythonJS';
import CodeShowcase from './CodeShowcase';

export default function HomePageClient() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Hero />
      <InfoSection />
      <LearningPath />
      <RealProjects />
      <WhyPythonJS />
    </motion.div>
  );
}
