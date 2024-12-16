import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "LLM-Powered Customer Service Platform",
    description: "Developed an intelligent customer service platform integrating Angular for the frontend and NestJS for the backend, enhanced with custom-trained LLMs for automated response generation and sentiment analysis.",
    technologies: ["Angular", "NestJS", "Python", "TensorFlow", "OpenAI API"],
    type: "hybrid",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Enterprise Resource Planning System",
    description: "Built a comprehensive ERP system for a manufacturing company using Angular and NestJS, featuring real-time analytics and predictive maintenance powered by machine learning algorithms.",
    technologies: ["Angular", "NestJS", "PostgreSQL", "Docker", "Kubernetes"],
    type: "fullstack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "AI-Driven Code Review Assistant",
    description: "Created an intelligent code review system using LLMs to analyze code quality, suggest improvements, and detect potential security vulnerabilities in real-time.",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker"],
    type: "ai",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Smart Document Processing Pipeline",
    description: "Engineered an advanced document processing system using OCR and LLMs to automatically extract, classify, and analyze information from various document types.",
    technologies: ["Python", "TensorFlow", "Angular", "NestJS", "MongoDB"],
    type: "hybrid",
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Real-time Analytics Dashboard",
    description: "Developed a sophisticated analytics platform with real-time data processing, visualization, and predictive analytics capabilities for large-scale industrial applications.",
    technologies: ["Angular", "NestJS", "Apache Kafka", "ElasticSearch", "Grafana"],
    type: "fullstack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Language Model Fine-tuning Platform",
    description: "Created a platform for fine-tuning and deploying custom language models, featuring an intuitive UI for training management and model deployment.",
    technologies: ["Python", "PyTorch", "FastAPI", "Angular", "Docker"],
    type: "ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
  }
];