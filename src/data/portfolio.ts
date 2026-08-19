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
  cover: string;
  highlights?: string[];
};

// GitHub social preview images — instant high-quality cover for each repo
const ghCover = (owner: string, repo: string) =>
  `https://opengraph.githubassets.com/1/${owner}/${repo}`;

export const projects: Project[] = [
  {
    slug: "jk-service",
    title: "JK Service",
    description:
      "Aluminium et inox sur mesure : fenêtres, portes, vérandas, escaliers et garde-corps. L'atelier de Jean Kakudji, à Kinsuka Pêcheur.",
    longDescription:
      "JK Service est un atelier d'aluminium et d'inox basé à Kinshasa. Le site met en avant le savoir-faire artisanal, le catalogue de réalisations, et facilite la prise de contact pour devis sur mesure.",
    stack: ["TypeScript", "React", "Tailwind"],
    github: "https://github.com/Marcusdrew/JK-Service-",
    demo: "https://jeankservice.lovable.app/",
    category: "Artisanat",
    year: "2026",
    cover: ghCover("Marcusdrew", "JK-Service-"),
    highlights: ["Sur-mesure", "Catalogue visuel", "Devis facilité"],
  },
  {
    slug: "drew-jerseys",
    title: "Drew Jerseys",
    description:
      "Prototype e-commerce dédié à la vente de maillots de football — catalogue, panier, parcours d'achat fluide.",
    longDescription:
      "Une boutique en ligne pour les passionnés de foot : navigation par équipe, fiche produit soignée, panier et tunnel d'achat clair. Un prototype prêt à être branché sur une vraie infra e-commerce.",
    stack: ["TypeScript", "React", "Tailwind"],
    github: "https://github.com/Marcusdrew/Drew-Jerseys-Prototype-",
    demo: "https://drewjerseys-prototype.lovable.app",
    category: "E-commerce",
    year: "2026",
    cover: ghCover("Marcusdrew", "Drew-Jerseys-Prototype-"),
    highlights: ["Catalogue produit", "Panier complet", "UX shopping"],
  },
  {
    slug: "digitalmarketingrdc",
    title: "Digital Marketing RDC",
    description:
      "Site vitrine pour DLM, agence congolaise de communication. Une présence digitale qui traduit la performance qu'ils vendent.",
    longDescription:
      "DLM accompagne les entreprises dans leur stratégie de visibilité. Le site devait refléter cette ambition : structure claire, hiérarchie typographique forte, et une navigation qui guide naturellement vers la prise de contact.",
    stack: ["TypeScript", "React", "Tailwind", "Vite"],
    github: "https://github.com/Marcusdrew/digitalmarketingrdc",
    demo: "https://digitalmarketingrdc.lovable.app/",
    category: "Agence",
    year: "2026",
    cover: ghCover("Marcusdrew", "digitalmarketingrdc"),
    highlights: ["Identité claire", "Conversion-first", "Responsive complet"],
  },
  {
    slug: "kinshasa-livraison",
    title: "Kinshasa Livraison",
    description:
      "Application de gestion de stock et de livraison à Kinshasa — tableau de bord, suivi des livreurs et carte en temps réel pour une traçabilité complète.",
    longDescription:
      "Relais est une plateforme de gestion de livraison pensée pour Kinshasa : suivi des livraisons en temps réel, gestion des livreurs, et carte interactive géolocalisée pour visualiser chaque course. Un outil pensé pour la traçabilité et l'efficacité opérationnelle.",
    stack: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Marcusdrew/Kinshasa-Livraison",
    demo: "https://kinshasa-livraison.vercel.app",
    category: "Logistique",
    year: "2026",
    cover: ghCover("Marcusdrew", "Kinshasa-Livraison"),
    highlights: ["Suivi temps réel", "Carte géolocalisée", "Gestion des livreurs"],
  },
  {
    slug: "drewmovie",
    title: "DrewMovie",
    description:
      "Plateforme de streaming vidéo pour films, séries et contenus animés — expérience premium, minimaliste et fluide.",
    longDescription:
      "DrewMovie est une plateforme de streaming pensée pour l'upload et la diffusion de films, séries et contenus animés. Interface épurée orientée expérience utilisateur, avec une architecture pensée pour la montée en charge et une monétisation par abonnement ou publicité.",
    stack: ["React", "TypeScript", "Tailwind", "Supabase"],
    github: "https://github.com/Marcusdrew/DrewMovie",
    demo: "https://cinemagic-flow-16.lovable.app",
    category: "Streaming",
    year: "2026",
    cover: ghCover("Marcusdrew", "DrewMovie"),
    highlights: ["Streaming vidéo", "UX premium", "Architecture scalable"],
  },
  {
    slug: "bcc-redesign",
    title: "BCC Redesign",
    description:
      "Refonte conceptuelle du site de la Banque Centrale du Congo — design sobre, professionnel, fidèle à l'identité de la marque.",
    longDescription:
      "Un exercice de redesign pour bcc.cd : repenser l'expérience avec un design épuré à dominante blanche, davantage de professionnalisme, tout en respectant le logo et les visuels institutionnels. L'objectif : un site rapide, fluide et résolument moderne.",
    stack: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/Marcusdrew/bcc-redesign-pro",
    demo: "https://bcc-pro.lovable.app",
    category: "Finance",
    year: "2026",
    cover: ghCover("Marcusdrew", "bcc-redesign-pro"),
    highlights: ["Refonte UX/UI", "Identité respectée", "Design institutionnel"],
  },
  {
    slug: "chessmasterdrc",
    title: "ChessMaster DRC",
    description:
      "Une plateforme dédiée à la communauté congolaise des échecs — joueurs, tournois, classement.",
    longDescription:
      "Un espace pour fédérer les joueurs d'échecs en RDC : profils, organisation de tournois, et exploration du jeu. Conçu pour grandir avec la communauté.",
    stack: ["TypeScript", "React", "Tailwind"],
    github: "https://github.com/Marcusdrew/chessmasterdrc",
    demo: "https://chessmasterdrc.lovable.app",
    category: "Communauté",
    year: "2026",
    cover: ghCover("Marcusdrew", "chessmasterdrc"),
    highlights: ["Profils joueurs", "Tournois", "Communauté locale"],
  },

  {
    slug: "lumire-makeup",
    title: "Lumire Makeup",
    description:
      "Identité digitale d'une marque maquillage — direction artistique soignée, expérience visuelle immersive.",
    longDescription:
      "Lumire avait besoin d'une vitrine à la hauteur de son univers. Mise en scène des produits, palette ciselée, et un parcours qui invite à découvrir avant d'acheter.",
    stack: ["TypeScript", "Figma", "React"],
    github: "https://github.com/Marcusdrew/LumireMakeup",
    demo: "https://finch-gold-78047701.figma.site/",
    category: "Beauté",
    year: "2026",
    cover: ghCover("Marcusdrew", "LumireMakeup"),
    highlights: ["Direction artistique", "Univers de marque", "Mise en scène"],
  },
  {
    slug: "kaisen-cares",
    title: "Kaisen Cares",
    description:
      "Initiative pour soutenir les enfants défavorisés à l'est de la RDC — éducation, nourriture, vêtements.",
    longDescription:
      "Kaisen Cares mobilise des dons pour les enfants vulnérables. Le site devait inspirer la confiance et faciliter le passage à l'action en quelques clics.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Marcusdrew/Kaisen-Cares",
    demo: "https://kaisencares.netlify.app/",
    category: "ONG",
    year: "2025",
    cover: ghCover("Marcusdrew", "Kaisen-Cares"),
    highlights: ["Storytelling fort", "Don facilité", "Transparence"],
  },
  {
    slug: "jiko-jibu",
    title: "JIKO-JIBU",
    description:
      "Site pour une entreprise de charbon écologique située dans la province du Kasaï, RDC.",
    longDescription:
      "JIKO-JIBU produit du charbon écologique. Le site valorise leur mission environnementale et facilite la mise en relation avec les distributeurs et clients finaux.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Marcusdrew/JIKO-JIBU",
    demo: "https://jikojibu.netlify.app/",
    category: "Écologie",
    year: "2025",
    cover: ghCover("Marcusdrew", "JIKO-JIBU"),
    highlights: ["Vision environnementale", "Présence locale", "Site vitrine"],
  },
  {
    slug: "study-spark-compass",
    title: "Study Spark Compass",
    description:
      "Compagnon d'étude pour structurer ses sessions de travail et suivre sa progression dans le temps.",
    longDescription:
      "Un outil pensé pour les étudiants : planification, sessions chronométrées, et tableau de progression — pour transformer la régularité en habitude.",
    stack: ["TypeScript", "React"],
    github: "https://github.com/Marcusdrew/study-spark-compass",
    category: "Productivité",
    year: "2026",
    cover: ghCover("Marcusdrew", "study-spark-compass"),
    highlights: ["UX étudiante", "Suivi de progression", "Sessions guidées"],
  },
  {
    slug: "university-feedback",
    title: "University Feedback",
    description:
      "Système universitaire pour collecter et analyser les retours des étudiants sur leurs cours et enseignants.",
    longDescription:
      "Une plateforme PHP côté serveur pour orchestrer la remontée structurée du feedback étudiant — anonymat respecté, exploitation possible côté administration.",
    stack: ["PHP", "MySQL", "HTML"],
    github: "https://github.com/Marcusdrew/university_feedback",
    category: "Éducation",
    year: "2026",
    cover: ghCover("Marcusdrew", "university_feedback"),
    highlights: ["Backend PHP", "Anonymat", "Analyse des retours"],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
  },
  {
    group: "Backend",
    items: ["Node.js", "PHP", "REST APIs", "Supabase", "PostgreSQL", "MySQL"],
  },
  {
    group: "Outils & Design",
    items: ["Git & GitHub", "Figma", "Lovable", "Vite", "VS Code"],
  },
];

export const process = [
  {
    n: "01",
    title: "Écoute",
    body: "On démarre par une conversation. Je veux comprendre votre activité, vos utilisateurs, et ce qui vous tient vraiment à cœur.",
  },
  {
    n: "02",
    title: "Cadrage",
    body: "Je traduis le besoin en périmètre clair : objectifs, pages, fonctionnalités, délais. Tout est posé noir sur or avant d'écrire une ligne.",
  },
  {
    n: "03",
    title: "Design",
    body: "Wireframes puis maquettes. Une direction visuelle qui vous ressemble, pas une énième page générique.",
  },
  {
    n: "04",
    title: "Développement",
    body: "Code propre, performant, accessible. Je construis pièce par pièce, avec des points de validation réguliers.",
  },
  {
    n: "05",
    title: "Livraison & suivi",
    body: "Mise en ligne, formation rapide pour la prise en main, et accompagnement après livraison — un projet n'est jamais vraiment fini.",
  },
];

export const profile = {
  name: "Jenovic Ilambu",
  handle: "Marcusdrew",
  role: "Développeur Fullstack",
  location: "Kinshasa, RDC",
  timezone: "Africa/Kinshasa",
  available: true,
  manifesto:
    "Toute solution informatique, je l'implémente et je lui donne vie.",
  bio: "Développeur fullstack basé à Kinshasa. Je conçois et construis des interfaces soignées — du site vitrine à la plateforme complète, du front au back, avec l'expérience utilisateur comme point cardinal.",
  email: "ilambudj@gmail.com",
  github: "https://github.com/Marcusdrew",
  avatar: "https://avatars.githubusercontent.com/u/183597529?v=4",
};
