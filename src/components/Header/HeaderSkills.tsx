import React from 'react';
import { Terminal, Code2, Brain } from 'lucide-react';

export default function HeaderSkills() {
  return (
    <>
      <div className="flex justify-center gap-6 mb-12">
        <div className="flex items-center gap-2">
          <Code2 className="w-6 h-6 text-blue-400" />
          <span>Angular + Nest</span>
        </div>
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-purple-400" />
          <span>LLMs Expert</span>
        </div>
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6 text-green-400" />
          <span>Data Science</span>
        </div>
      </div>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
        Master's in Data Science & AI | 3 Years Experience
      </p>
    </>
  );
}