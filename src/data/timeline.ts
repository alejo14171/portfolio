export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'work' | 'education';
  technologies?: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: "2022 - Present",
    title: "Senior Full Stack Developer & AI Specialist",
    subtitle: "Tech Innovations Corp",
    description: "Leading development of AI-enhanced enterprise applications, integrating LLMs with traditional web architectures.",
    type: "work",
    technologies: ["Angular", "NestJS", "Python", "TensorFlow", "Docker"]
  },
  {
    id: 2,
    date: "2023",
    title: "Master's in Data Science and AI",
    subtitle: "Top Technical University",
    description: "Specialized in Machine Learning and Natural Language Processing, with focus on Large Language Models.",
    type: "education",
    technologies: ["Python", "PyTorch", "TensorFlow", "NLP", "Machine Learning"]
  },
  {
    id: 3,
    date: "2021 - 2022",
    title: "Data Scientist",
    subtitle: "AI Solutions Ltd",
    description: "Specialized in developing and deploying LLM-based solutions for natural language processing tasks.",
    type: "work",
    technologies: ["Python", "PyTorch", "Hugging Face", "FastAPI"]
  },
  {
    id: 4,
    date: "2020 - 2021",
    title: "Full Stack Developer",
    subtitle: "Digital Systems Inc",
    description: "Developed and maintained enterprise-level web applications using Angular and NestJS.",
    type: "work",
    technologies: ["Angular", "NestJS", "TypeScript", "PostgreSQL"]
  }
];