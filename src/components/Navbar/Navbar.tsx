import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavLink from './NavLink';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Check if we're at the top of the page
      if (window.scrollY < window.innerHeight * 0.3) {
        setActiveSection('home');
        return;
      }

      const sections = ['about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.button
            onClick={scrollToTop}
            className={`font-heading text-2xl font-bold transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-800 hover:text-blue-500' 
                : 'text-white hover:text-blue-300'
            } ${activeSection === 'home' ? 'scale-110' : 'scale-100'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            AG
          </motion.button>
          
          <div className="flex space-x-8">
            <NavLink href="#about" isActive={activeSection === 'about'} isScrolled={isScrolled}>
              About
            </NavLink>
            <NavLink href="#projects" isActive={activeSection === 'projects'} isScrolled={isScrolled}>
              Projects
            </NavLink>
            <NavLink href="#contact" isActive={activeSection === 'contact'} isScrolled={isScrolled}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}