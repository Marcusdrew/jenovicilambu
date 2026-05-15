import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-50, 50], [-6, 6]), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] }}
      className="group relative bg-card border border-border rounded-lg p-8 overflow-hidden hover:border-gold/40 transition-colors duration-500"
    >
      {/* gold radial glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: "var(--gradient-radial-gold)" }}
      />

      <div className="relative flex items-start justify-between mb-8" style={{ transform: "translateZ(20px)" }}>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-border" />
          <span>{project.category}</span>
        </div>
        <span className="text-xs text-muted-foreground">{project.year}</span>
      </div>

      <h3
        className="relative font-serif text-3xl md:text-4xl text-foreground mb-3 group-hover:text-gradient-gold transition-all"
        style={{ transform: "translateZ(30px)" }}
      >
        {project.title}
      </h3>

      <p
        className="relative text-sm text-muted-foreground leading-relaxed mb-8 line-clamp-3"
        style={{ transform: "translateZ(15px)" }}
      >
        {project.description}
      </p>

      <div className="relative flex flex-wrap gap-2 mb-8" style={{ transform: "translateZ(20px)" }}>
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 border border-border rounded-full text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="relative flex items-center gap-4" style={{ transform: "translateZ(25px)" }}>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-soft transition-colors"
          >
            Voir la démo
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
      </div>
    </motion.div>
  );
}
