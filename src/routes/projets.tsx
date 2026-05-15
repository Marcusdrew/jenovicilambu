import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";
import { ProjectRow } from "@/components/ProjectRow";
import { Reveal, SplitWords } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets — Jenovic Ilambu" },
      {
        name: "description",
        content:
          "Sélection de projets web réalisés par Jenovic Ilambu : sites vitrines, plateformes éducatives, ONG et solutions sur-mesure depuis Kinshasa.",
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
    <>
      <section className="px-6 lg:px-12 pt-40 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              Index · {projects.length} réalisations
            </p>
          </Reveal>
          <h1 className="font-serif text-[14vw] md:text-[9vw] leading-[0.92] tracking-[-0.04em] max-w-5xl">
            <span className="block">
              <SplitWords text="Une sélection" wordClassName="italic text-foreground/90" />
            </span>
            <span className="block">
              <SplitWords text="de mes travaux." wordClassName="text-gradient-gold" delay={0.2} />
            </span>
          </h1>
          <Reveal delay={0.6}>
            <p className="mt-10 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Chaque projet est une histoire — pour des entreprises, des ONG, des initiatives locales. Survolez un titre pour en avoir un aperçu, cliquez pour entrer dans le détail.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="mx-auto max-w-7xl border-t border-border">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="mx-auto max-w-7xl border-t border-border pt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="eyebrow mb-4">Et après ?</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[0.95]">
              Votre projet pourrait être <span className="italic text-gradient-gold">le prochain</span>.
            </h2>
          </div>
          <Link
            to="/contact"
            data-cursor="hover"
            className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-7 py-4 rounded-full text-xs font-mono uppercase tracking-[0.2em] hover:shadow-gold-lg transition-all self-start"
          >
            Démarrer
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
