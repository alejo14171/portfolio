import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollButtonProps {
  sections: string[];
}

export default function ScrollButton({ sections }: ScrollButtonProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToNextSection = () => {
    const nextIndex = (currentSectionIndex + 1) % sections.length;
    const nextSection = document.getElementById(sections[nextIndex]);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      setCurrentSectionIndex(nextIndex);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide button when at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setIsVisible(false);
        return;
      }

      // Show button only after scrolling past 100px from the top
      setIsVisible(scrollPosition > 100);
      
      // Find current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop - windowHeight / 2) {
          setCurrentSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Don't render if we're at the last section or button shouldn't be visible
  if (!isVisible || currentSectionIndex >= sections.length - 1) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.button
        onClick={scrollToNextSection}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <ChevronDown className="w-6 h-6" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Next: {sections[(currentSectionIndex + 1) % sections.length].replace('-', ' ')}
        </span>
      </motion.button>
    </AnimatePresence>
  );
}