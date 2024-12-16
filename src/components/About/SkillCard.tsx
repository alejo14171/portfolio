import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../data/about';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{skill.category}</h3>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}