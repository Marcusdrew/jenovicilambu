import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile, projects, skills } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jenovic Ilambu — Développeur Fullstack à Kinshasa" },
      {
        name: "description",
        content:
          "Portfolio de Jenovic Ilambu (Marcusdrew). Développeur fullstack en RDC. Sites vitrines, plateformes web et solutions sur-mesure.",
      },
    ],
  }),
  component: HomePage,
});

const word = {
  hidden: { opacity: 0, y: "100%" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.65, 0, 0.35, 1] },
  }),
};

function HomePage() {
  const featured = projects.slice(0, 3);
  const heading = ["Donner", "vie", "à", "vos", "idées"];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-32 pb-20 overflow-hidden">
        {/* huge background mark */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2 }}
          className="absolute -right-20 -bottom-32 font-serif text-[28rem] leading-none text-gold pointer-events-none select-none hidden md:block"
        >
          J.
        </motion.div>

        <div className="mx-auto max-w-7xl w-full relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold mb-8"
          >
            <span className="h-px w-12 bg-gold" />
            Portfolio · {profile.location}
          </motion.p>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.95] tracking-tight">
            <span className="block overflow-hidden">
              <motion.span
                custom={0}
                variants={word}
                initial="hidden"
                animate="show"
                className="inline-block italic text-muted-foreground"
              >
                Donner
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                custom={1}
                variants={word}
                initial="hidden"
                animate="show"
                className="inline-block text-gradient-gold"
              >
                vie
              </motion.span>
              <motion.span
                custom={2}
                variants={word}
                initial="hidden"
                animate="show"
                className="inline-block ml-4 text-foreground"
              >
                à vos idées
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                custom={3}
                variants={word}
                initial="hidden"
                animate="show"
                className="inline-block text-foreground"
              >
                — par le code.
              </motion.span>
            </span>
          </h1>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              Je suis <span className="text-foreground">{profile.name}</span>, {profile.role.toLowerCase()} basé à Kinshasa. {profile.manifesto}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 md:justify-end"
            >
              <Link
                to="/projets"
                className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-6 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:shadow-gold-lg transition-all"
              >
                Voir mes projets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border border-border hover:border-gold text-foreground px-6 py-4 rounded-full text-sm uppercase tracking-[0.2em] transition-all"
              >
                Me contacter
              </Link>
            </motion.div>
          </div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          Scroll
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="px-6 lg:px-12 py-32">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold mb-6">
              <span className="h-px w-12 bg-gold" />
              À propos
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground leading-tight">
              L'artisan derrière le code.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{profile.bio}</p>
            <p>
              Mon approche : écouter, comprendre le besoin, puis livrer une solution propre, performante et plaisante à utiliser. Chaque pixel et chaque ligne de code comptent.
            </p>
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-border">
              <div>
                <div className="font-serif text-4xl text-gradient-gold">7+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Projets livrés</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-gradient-gold">3</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Démos en ligne</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-gradient-gold">100%</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="px-6 lg:px-12 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold mb-6">
                <span className="h-px w-12 bg-gold" />
                Sélection
              </p>
              <h2 className="font-serif text-5xl md:text-6xl">Travaux récents</h2>
            </div>
            <Link
              to="/projets"
              className="hidden md:inline-flex items-center gap-2 text-sm text-foreground gold-line"
            >
              Tout voir
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 lg:px-12 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold mb-6">
            <span className="h-px w-12 bg-gold" />
            Boîte à outils
          </p>
          <h2 className="font-serif text-5xl md:text-6xl mb-16">Ma stack.</h2>

          <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {skills.map((group, gi) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
                className="bg-card p-10 hover:bg-secondary/40 transition-colors"
              >
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-gold font-serif text-2xl">0{gi + 1}</span>
                  <h3 className="text-xl text-foreground uppercase tracking-[0.15em]">{group.group}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      {item}
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
            className="absolute inset-0 opacity-50"
            style={{ background: "var(--gradient-radial-gold)" }}
          />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Prochain projet</p>
              <h2 className="font-serif text-5xl md:text-6xl leading-tight">
                Donnons vie à votre <span className="italic text-gradient-gold">vision</span>.
              </h2>
            </div>
            <div className="md:text-right">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-5 rounded-full text-sm uppercase tracking-[0.2em] hover:shadow-gold-lg transition-all"
              >
                Démarrer une conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
