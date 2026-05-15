import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32 overflow-hidden">
      {/* Giant signature */}
      <div className="px-6 lg:px-12 pt-20 pb-10">
        <div
          aria-hidden
          className="font-serif italic leading-[0.85] tracking-tight text-stroke-gold text-[20vw] select-none pointer-events-none"
        >
          jenovic.
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 pb-12 grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-5">
          <p className="eyebrow mb-3">Restons en contact</p>
          <a
            href={`mailto:${profile.email}`}
            data-cursor="hover"
            className="font-serif text-3xl md:text-4xl text-foreground gold-line break-all"
          >
            {profile.email}
          </a>
        </div>

        <div className="md:col-span-3 flex flex-col gap-2 text-sm text-muted-foreground">
          <p className="eyebrow mb-2 text-muted-foreground/80">Navigation</p>
          <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
          <Link to="/projets" className="hover:text-foreground transition-colors">Projets</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>

        <div className="md:col-span-4 flex flex-col gap-2 text-sm md:items-end">
          <p className="eyebrow mb-2 text-muted-foreground/80">Ailleurs</p>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-foreground hover:text-gold transition-colors">
            github.com/{profile.handle}
          </a>
          <p className="text-muted-foreground">{profile.location}</p>
          <p className="text-xs text-muted-foreground/70 mt-3 font-mono">
            © {new Date().getFullYear()} — Conçu et codé à Kinshasa
          </p>
        </div>
      </div>
    </footer>
  );
}
