import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { profile } from "@/data/portfolio";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/projets", label: "Projets" },
  { to: "/contact", label: "Contact" },
] as const;

function useKinshasaTime() {
  const [t, setT] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("fr-FR", {
        timeZone: profile.timezone,
        hour: "2-digit",
        minute: "2-digit",
      });
      setT(now);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const time = useKinshasaTime();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/60 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-serif text-2xl tracking-tight text-foreground italic">
            Jenovic
          </span>
          <span className="text-gold font-serif text-2xl">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const isActive =
              l.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(l.to);
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-gold"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Kinshasa · {time}
          </span>
          <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            Disponible
          </span>
        </div>

        {/* Mobile inline links */}
        <ul className="flex md:hidden items-center gap-4">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground"
                activeProps={{ className: "text-gold text-[10px] font-mono uppercase tracking-[0.2em]" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* scroll progress */}
      <motion.div
        style={{ scaleX: progress, transformOrigin: "0 0" }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold via-gold-soft to-gold"
      />
    </motion.header>
  );
}
