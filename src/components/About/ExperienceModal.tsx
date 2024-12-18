import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { TimelineItem } from '../../data/timeline';

interface ExperienceModalProps {
  experience: TimelineItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ExperienceModal({ experience, isOpen, onClose }: ExperienceModalProps) {
  if (!experience) return null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-xl shadow-2xl z-50 p-6"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="mb-6">
              <span className="text-sm text-blue-500 font-semibold">{experience.date}</span>
              <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
              <p className="text-gray-600">{experience.subtitle}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Description</h4>
              <p className="text-gray-700">{experience.description}</p>
            </div>
            
            {experience.technologies && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}