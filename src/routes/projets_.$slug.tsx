import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal, MaskReveal, SplitWords } from "@/components/Reveal";

export const Route = createFileRoute("/projets_/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Jenovic Ilambu` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: `${loaderData.project.title} — Jenovic Ilambu` },
          { property: "og:description", content: loaderData.project.description },
          { property: "og:image", content: loaderData.project.cover },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-serif text-6xl mb-6">Projet introuvable</h1>
        <Link to="/projets" className="gold-line text-foreground">
          Retour aux projets
        </Link>
      </div>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <section className="px-6 lg:px-12 pt-40 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link
              to="/projets"
              data-cursor="hover"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Tous les projets
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              {project.category} · {project.year}
            </p>
          </Reveal>

          <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.92] tracking-[-0.04em]">
            <SplitWords text={project.title} wordClassName="text-foreground" />
          </h1>

          <Reveal delay={0.5}>
            <p className="mt-10 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cover */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="mx-auto max-w-7xl">
          <MaskReveal className="aspect-[16/10] rounded-2xl overflow-hidden border border-border relative">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </MaskReveal>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-10">
            <Reveal>
              <p className="eyebrow mb-3">Stack</p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((s: string) => (
                  <li
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 border border-border rounded-full text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>

            {project.highlights && (
              <Reveal delay={0.1}>
                <p className="eyebrow mb-3">Points forts</p>
                <ul className="space-y-2">
                  {project.highlights.map((h: string) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 font-serif text-lg text-foreground"
                    >
                      <span className="text-gold mt-2.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal delay={0.2}>
              <p className="eyebrow mb-3">Liens</p>
              <div className="flex flex-col gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    data-cursor-label="Demo"
                    className="group inline-flex items-center gap-2 text-foreground gold-line"
                  >
                    Voir la démo en ligne
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  data-cursor-label="Code"
                  className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code source
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <Reveal>
              <p className="eyebrow mb-3">Le projet</p>
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
                {project.longDescription ?? project.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="px-6 lg:px-12 pb-32 border-t border-border pt-20">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/projets/$slug"
            params={{ slug: next.slug }}
            data-cursor="hover"
            data-cursor-label="Suivant"
            className="group block"
          >
            <p className="eyebrow mb-4">Projet suivant</p>
            <h2 className="font-serif text-5xl md:text-8xl leading-[0.95] group-hover:text-gradient-gold transition-all">
              {next.title}
              <span className="inline-block ml-3 transition-transform duration-500 group-hover:translate-x-3">
                →
              </span>
            </h2>
          </Link>
        </div>
      </section>
    </>
  );
}
