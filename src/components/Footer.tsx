import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-serif text-2xl text-foreground">
            {profile.name}<span className="text-gold">.</span>
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {profile.role} — {profile.location}
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-foreground gold-line"
          >
            {profile.email}
          </a>
          <div className="flex gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-gold transition">GitHub</a>
            <span>©  {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
