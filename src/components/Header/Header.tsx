import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Brain } from 'lucide-react';
import HeaderTitle from './HeaderTitle';
import HeaderSkills from './HeaderSkills';

export default function Header() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <HeaderTitle />
          <HeaderSkills />
          <motion.button
            onClick={scrollToAbout}
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}