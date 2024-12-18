import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'work' | 'education';
  technologies?: string[];
  onOpenModal: () => void;
}

export default function TimelineItem({ 
  date, 
  title, 
  subtitle, 
  type,
  onOpenModal 
}: TimelineItemProps) {
  return (
    <div className="relative mb-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
          {type === 'work' ? (
            <Briefcase className="w-6 h-6 text-blue-500" />
          ) : (
            <GraduationCap className="w-6 h-6 text-blue-500" />
          )}
        </div>
        <div className="flex-grow">
          <span className="text-sm text-blue-500 font-semibold">{date}</span>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <motion.button
          onClick={onOpenModal}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Details
        </motion.button>
      </div>
    </div>
  );
}