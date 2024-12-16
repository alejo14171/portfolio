export interface Skill {
  category: string;
  items: string[];
}

export interface AboutData {
  introduction: string;
  description: string[];
  skills: Skill[];
}

export const aboutData: AboutData = {
  introduction: "Bridging the Gap Between Full Stack Development and Artificial Intelligence",
  description: [
    "As a passionate Full Stack Developer and Data Scientist, I specialize in creating intelligent web applications that leverage the power of modern AI technologies.",
    "With a Master's degree in Data Science and AI, I bring a unique perspective to software development, combining robust backend architectures with cutting-edge machine learning solutions.",
    "My expertise lies in developing scalable applications using Angular and NestJS, while also implementing sophisticated AI solutions, particularly in the field of Large Language Models (LLMs)."
  ],
  skills: [
    {
      category: "Full Stack Development",
      items: ["Angular", "NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"]
    },
    {
      category: "AI & Data Science",
      items: ["Python", "PyTorch", "TensorFlow", "LLMs", "Machine Learning", "Data Analysis"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "CI/CD", "Microservices", "RESTful APIs", "System Design"]
    }
  ]
};