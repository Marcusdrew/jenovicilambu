import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/projets", label: "Projets" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

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
      transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-serif text-2xl tracking-tight text-foreground">
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
                  className="relative text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
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

        <a
          href="https://github.com/Marcusdrew"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold border border-gold/40 hover:border-gold hover:bg-gold/10 px-4 py-2 rounded-full transition-all"
        >
          GitHub
        </a>

        {/* Mobile burger -> just nav links inline */}
        <ul className="flex md:hidden items-center gap-5">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                activeProps={{ className: "text-gold text-xs uppercase tracking-[0.15em]" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
