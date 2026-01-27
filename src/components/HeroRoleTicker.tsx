'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * HeroRoleTicker — Cycles through role/capability phrases
 * with a morphing crossfade effect
 */
const HeroRoleTicker: React.FC = () => {
  const roles = [
    'Lead Data Scientist',
    'AI Architect',
    'GenAI Systems Builder',
    'Production ML Engineer',
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % roles.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-8 flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute text-lg md:text-2xl font-bold font-syne text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200"
        >
          {roles[currentIdx]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroRoleTicker;
