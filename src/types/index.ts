export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  type: 'fullstack' | 'ai' | 'hybrid';
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}