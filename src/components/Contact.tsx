import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="contact">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Interested in collaborating on projects that combine Full Stack Development with AI? 
            Let's create something amazing together.
          </p>
          <div className="flex justify-center gap-8">
            <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}