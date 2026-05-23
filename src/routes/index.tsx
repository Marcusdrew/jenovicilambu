import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile, projects, skills } from "@/data/portfolio";
import { ProjectRow } from "@/components/ProjectRow";
import { Reveal, MaskReveal, SplitWords } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { ProcessSection } from "@/components/ProcessSection";
import { MagneticButton } from "@/components/MagneticButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jenovic Ilambu — Développeur Fullstack à Kinshasa" },
      {
        name: "description",
        content:
          "Portfolio de Jenovic Ilambu (Marcusdrew). Développeur fullstack en RDC. Sites vitrines, plateformes web et solutions sur-mesure, avec une vraie attention au détail.",
      },
      { property: "og:title", content: "Jenovic Ilambu — Développeur Fullstack à Kinshasa" },
      {
        property: "og:description",
        content:
          "Portfolio de Jenovic Ilambu — sites vitrines, plateformes web et solutions sur-mesure depuis Kinshasa.",
      },
      { property: "og:image", content: "https://avatars.githubusercontent.com/u/183597529?v=4" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const markY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const featured = projects.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-32 pb-24 overflow-hidden"
      >
        {/* Giant J. mark */}
        <motion.div
          aria-hidden
          style={{ y: markY, opacity: heroOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
          className="absolute -right-10 -bottom-32 font-serif italic text-[34rem] leading-none text-gold pointer-events-none select-none hidden md:block"
        >
          J.
        </motion.div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="mx-auto max-w-7xl w-full relative">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 mb-10">
              <span className="h-px w-12 bg-gold" />
              Portfolio · {profile.location} · Édition 2026
            </p>
          </Reveal>

          <h1 className="font-serif text-[15vw] md:text-[10vw] lg:text-[9.5vw] leading-[0.92] tracking-[-0.04em]">
            <span className="block">
              <SplitWords text="Donner vie" wordClassName="italic text-foreground/90" />
            </span>
            <span className="block">
              <SplitWords
                text="à vos idées"
                wordClassName="text-gradient-gold"
                delay={0.2}
              />
            </span>
            <span className="block">
              <SplitWords text="— par le code." wordClassName="text-foreground" delay={0.45} />
            </span>
          </h1>

          <div className="mt-16 grid md:grid-cols-12 gap-12 items-end">
            <Reveal delay={0.7} className="md:col-span-6">
              <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
                Je suis <span className="text-foreground">Jenovic ILAMBU</span>, Développeur fullstack à Kinshasa, je transforme chaque idée en solution vivante.
              </p>
            </Reveal>

            <Reveal delay={0.85} className="md:col-span-6 flex flex-wrap gap-4 md:justify-end">
              <MagneticButton>
                <Link
                  to="/projets"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-7 py-4 rounded-full text-xs font-mono uppercase tracking-[0.2em] hover:shadow-gold-lg transition-all"
                >
                  Voir les projets
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  to="/contact"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-3 border border-border hover:border-gold text-foreground px-7 py-4 rounded-full text-xs font-mono uppercase tracking-[0.2em] transition-all"
                >
                  Me contacter
                </Link>
              </MagneticButton>
            </Reveal>
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ opacity: heroOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          Scroll
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-6 bg-card/30">
        <Marquee
          items={[
            <span className="font-serif italic text-2xl md:text-3xl">React</span>,
            <span className="font-serif italic text-2xl md:text-3xl">TypeScript</span>,
            <span className="font-serif italic text-2xl md:text-3xl">Tailwind</span>,
            <span className="font-serif italic text-2xl md:text-3xl">Supabase</span>,
            <span className="font-serif italic text-2xl md:text-3xl">PHP</span>,
            <span className="font-serif italic text-2xl md:text-3xl">Figma</span>,
            <span className="font-serif italic text-2xl md:text-3xl">Next.js</span>,
            <span className="font-serif italic text-2xl md:text-3xl">PostgreSQL</span>,
          ]}
        />
      </section>

      {/* ABOUT */}
      <section className="px-6 lg:px-12 py-32 md:py-48">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              À propos
            </p>
            <h2 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95] tracking-tight">
              L'artisan <span className="italic text-gradient-gold">derrière</span> le code.
            </h2>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7 space-y-6">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-5 mb-8">
                <MaskReveal className="w-20 h-20 rounded-full overflow-hidden border border-gold/40">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </MaskReveal>
                <div>
                  <p className="font-serif text-2xl text-foreground italic">{profile.name}</p>
                  <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    {profile.role} — {profile.location}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {profile.bio}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Mon approche : écouter, comprendre le besoin, puis livrer une solution propre, performante et plaisante à utiliser. Chaque pixel et chaque ligne de code comptent.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-border">
                <Stat n="10" label="Projets livrés" />
                <Stat n="08" label="Démos en ligne" />
                <Stat n="100%" label="Engagement" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS — editorial list */}
      <section className="px-6 lg:px-12 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-16">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-gold" />
                Sélection · {featured.length} projets
              </p>
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
                Travaux <span className="italic text-gradient-gold">récents</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/projets"
                data-cursor="hover"
                className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground gold-line"
              >
                Tout voir
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          <div className="border-t border-border">
            {featured.map((p, i) => (
              <ProjectRow key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <ProcessSection />

      {/* SKILLS */}
      <section className="px-6 lg:px-12 py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              Boîte à outils
            </p>
            <h2 className="font-serif text-5xl md:text-7xl mb-16 leading-[0.95]">
              Ma <span className="italic text-gradient-gold">stack</span>.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {skills.map((group, gi) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: gi * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card p-10 hover:bg-secondary/40 transition-colors group"
              >
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-gold font-serif italic text-3xl">0{gi + 1}</span>
                  <h3 className="text-base text-foreground font-mono uppercase tracking-[0.2em]">
                    {group.group}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold transition-all group-hover:w-2" />
                      <span className="font-serif text-xl">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-32">
        <div className="mx-auto max-w-7xl relative bg-card border border-border rounded-2xl overflow-hidden p-12 md:p-20">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{ background: "var(--gradient-radial-gold)" }}
          />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <p className="eyebrow mb-4">Prochain projet</p>
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
                Donnons vie à votre <span className="italic text-gradient-gold">vision</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="md:text-right">
              <MagneticButton as="span">
                <Link
                  to="/contact"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-5 rounded-full text-xs font-mono uppercase tracking-[0.2em] hover:shadow-gold-lg transition-all"
                >
                  Démarrer une conversation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif italic text-5xl text-gradient-gold">{n}</div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
        {label}
      </div>
    </div>
  );
}
