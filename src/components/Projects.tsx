import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projects';
import ProjectCarousel from './ProjectCarousel';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50 min-h-screen flex items-center" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <ProjectCarousel projects={projects} itemsPerPage={3} />
        </motion.div>
      </div>
    </section>
  );
}