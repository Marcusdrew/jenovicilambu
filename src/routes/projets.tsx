import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets — Jenovic Ilambu" },
      {
        name: "description",
        content:
          "Sélection de projets web réalisés par Jenovic Ilambu : sites vitrines, plateformes, ONG et plus.",
      },
      { property: "og:title", content: "Projets — Jenovic Ilambu" },
      {
        property: "og:description",
        content: "Sélection de projets web réalisés par Jenovic Ilambu.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="px-6 lg:px-12 pt-40 pb-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold mb-6">
            <span className="h-px w-12 bg-gold" />
            Projets · {projects.length} réalisations
          </p>
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight max-w-4xl">
            Une <span className="italic text-gradient-gold">sélection</span> de mes derniers travaux.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Chaque projet est une histoire. Voici quelques-unes de celles que j'ai eu la chance d'écrire — pour des entreprises, des ONG et des initiatives locales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
