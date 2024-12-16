import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Laptop } from 'lucide-react';
import { aboutData } from '../../data/about';
import { timelineData } from '../../data/timeline';
import TimelineItem from './TimelineItem';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - About Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-600 mb-8">{aboutData.introduction}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4">
                <div className="inline-block p-3 bg-blue-100 rounded-full mb-2">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold">Full Stack Dev</h3>
              </div>
              <div className="text-center p-4">
                <div className="inline-block p-3 bg-purple-100 rounded-full mb-2">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-sm font-semibold">AI Specialist</h3>
              </div>
              <div className="text-center p-4">
                <div className="inline-block p-3 bg-green-100 rounded-full mb-2">
                  <Laptop className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-sm font-semibold">Data Scientist</h3>
              </div>
            </div>

            <div className="space-y-4">
              {aboutData.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <div className="space-y-6">
              {timelineData.map((item) => (
                <TimelineItem
                  key={item.id}
                  date={item.date}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  type={item.type}
                  technologies={item.technologies}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}