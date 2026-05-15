export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  github: string;
  demo?: string;
  category: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "digitalmarketingrdc",
    title: "Digital Marketing RDC",
    description:
      "Site vitrine pour DLM, agence de communication spécialisée dans le développement de la visibilité et de la performance des entreprises en RDC.",
    stack: ["TypeScript", "React", "Tailwind"],
    github: "https://github.com/Marcusdrew/digitalmarketingrdc",
    demo: "https://digitalmarketingrdc.lovable.app/",
    category: "Agence",
    year: "2025",
  },
  {
    slug: "ulc-campus",
    title: "SmartCampus ULC",
    description:
      "Plateforme de suivi pédagogique et psychologique pour aider chaque enfant à révéler son meilleur potentiel.",
    stack: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/Marcusdrew/ULC-Campus",
    demo: "https://smartcampusulc.netlify.app/",
    category: "Éducation",
    year: "2025",
  },
  {
    slug: "lumire-makeup",
    title: "Lumire Makeup",
    description:
      "Identité digitale pour une marque maquillage — direction artistique soignée et expérience visuelle immersive.",
    stack: ["TypeScript", "Figma"],
    github: "https://github.com/Marcusdrew/LumireMakeup",
    demo: "https://finch-gold-78047701.figma.site/",
    category: "Beauté",
    year: "2025",
  },
  {
    slug: "kaisen-cares",
    title: "Kaisen Cares",
    description:
      "Initiative pour soutenir les enfants défavorisés à l'est de la RDC — accès à l'éducation, nourriture et vêtements grâce aux dons.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Marcusdrew/Kaisen-Cares",
    category: "ONG",
    year: "2024",
  },
  {
    slug: "jiko-jibu",
    title: "JIKO-JIBU",
    description:
      "Site pour une entreprise de charbon écologique située dans la province du Kasaï, République Démocratique du Congo.",
    stack: ["HTML", "CSS"],
    github: "https://github.com/Marcusdrew/JIKO-JIBU",
    category: "Écologie",
    year: "2024",
  },
  {
    slug: "study-spark-compass",
    title: "Study Spark Compass",
    description:
      "Outil compagnon pour aider les étudiants à structurer leurs sessions d'étude et suivre leur progression.",
    stack: ["TypeScript", "React"],
    github: "https://github.com/Marcusdrew/study-spark-compass",
    category: "Productivité",
    year: "2025",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
  },
  {
    group: "Backend",
    items: ["Node.js", "PHP", "REST APIs", "Supabase", "PostgreSQL"],
  },
  {
    group: "Outils & Design",
    items: ["Git & GitHub", "Figma", "Lovable", "Vite", "VS Code"],
  },
];

export const profile = {
  name: "Jenovic Ilambu",
  handle: "Marcusdrew",
  role: "Développeur Fullstack",
  location: "Kinshasa, RDC",
  manifesto:
    "Toute solution informatique, je l'implémente et je lui donne vie.",
  bio: "Développeur web junior basé à Kinshasa. Je conçois et construis des interfaces soignées, des sites vitrines aux plateformes complètes — du front au back, en gardant toujours l'expérience utilisateur au centre.",
  email: "ilambujenovic@gmail.com",
  github: "https://github.com/Marcusdrew",
};
