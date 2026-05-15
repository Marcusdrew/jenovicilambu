import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 20 });
  const sy = useSpring(y, { stiffness: 150, damping: 20 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.06, ease }}
      className="border-b border-border last:border-b-0"
    >
      <Link
        ref={ref}
        to="/projets/$slug"
        params={{ slug: project.slug }}
        onMouseMove={onMove}
        data-cursor="hover"
        data-cursor-label="Voir"
        className="group relative grid grid-cols-12 items-center gap-4 py-8 md:py-10 px-2 md:px-4 transition-colors"
      >
        {/* number */}
        <span className="col-span-2 md:col-span-1 font-mono text-xs text-gold/70">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* title */}
        <h3 className="col-span-10 md:col-span-5 font-serif text-2xl md:text-4xl lg:text-5xl text-foreground group-hover:text-gradient-gold transition-all">
          <span className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3">
            {project.title}
          </span>
        </h3>

        {/* category */}
        <span className="hidden md:block col-span-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {project.category}
        </span>

        {/* year */}
        <span className="hidden md:block col-span-2 font-mono text-xs text-muted-foreground text-right">
          — {project.year}
        </span>

        {/* arrow */}
        <span className="col-span-2 md:col-span-1 flex justify-end">
          <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-gold group-hover:text-gold group-hover:rotate-45 transition-all duration-500">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </span>

        {/* hover image — follows cursor */}
        <motion.div
          aria-hidden
          style={{ x: sx, y: sy, translateX: "-50%", translateY: "-110%" }}
          className="pointer-events-none absolute top-0 left-0 w-[260px] md:w-[340px] aspect-[16/10] rounded-md overflow-hidden border border-gold/30 shadow-gold-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 hidden md:block"
        >
          <img
            src={project.cover}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
