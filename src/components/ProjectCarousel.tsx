import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Code2, Brain } from 'lucide-react';
import { Project } from '../types';

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = Math.min(3, projects.length);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visibleProjects = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % projects.length;
      visibleProjects.push(projects[index]);
    }
    return visibleProjects;
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getVisibleProjects().map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {project.type === 'fullstack' && <Code2 className="w-5 h-5 text-blue-500" />}
                    {project.type === 'ai' && <Brain className="w-5 h-5 text-purple-500" />}
                    {project.type === 'hybrid' && (
                      <div className="flex gap-2">
                        <Code2 className="w-5 h-5 text-blue-500" />
                        <Brain className="w-5 h-5 text-purple-500" />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}