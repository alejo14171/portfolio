import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'work' | 'education';
  technologies?: string[];
}

export default function TimelineItem({ date, title, subtitle, description, type, technologies }: TimelineItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative mb-8 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
          {type === 'work' ? (
            <Briefcase className="w-6 h-6 text-blue-500" />
          ) : (
            <GraduationCap className="w-6 h-6 text-blue-500" />
          )}
        </div>
        <div>
          <span className="text-sm text-blue-500 font-semibold">{date}</span>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full mt-2 bg-white p-4 rounded-lg shadow-lg z-10 w-72"
          >
            <p className="text-gray-700 mb-3">{description}</p>
            {technologies && (
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}