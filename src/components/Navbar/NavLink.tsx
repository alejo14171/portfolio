import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  isActive: boolean;
  isScrolled: boolean;
  children: React.ReactNode;
}

export default function NavLink({ href, isActive, isScrolled, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`relative py-2 transition-colors ${
        isScrolled
          ? 'text-gray-800 hover:text-blue-500'
          : 'text-white hover:text-blue-300'
      }`}
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeSection"
          className={`absolute bottom-0 left-0 right-0 h-0.5 ${
            isScrolled ? 'bg-blue-500' : 'bg-white'
          }`}
          initial={false}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  );
}