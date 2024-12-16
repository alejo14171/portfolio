import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Brain } from 'lucide-react';

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Alejandro Gómez
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & Data Scientist
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-blue-400" />
              <span>Angular + Nest</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-400" />
              <span>LLMs Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-green-400" />
              <span>Data Science</span>
            </div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Master's in Data Science & AI | 3 Years Experience
          </p>
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