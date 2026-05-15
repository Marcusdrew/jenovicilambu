import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check, Github, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jenovic Ilambu" },
      {
        name: "description",
        content: "Discutons de votre projet — Jenovic Ilambu, développeur fullstack à Kinshasa.",
      },
      { property: "og:title", content: "Contact — Jenovic Ilambu" },
      {
        property: "og:description",
        content: "Discutons de votre projet — disponible pour collaborer.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const message = form.get("message");
    const email = form.get("email");
    const subject = encodeURIComponent(`Nouveau message de ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="px-6 lg:px-12 pt-40 pb-20">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5"
        >
          <p className="eyebrow flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            Contact · Réponse sous 24h
          </p>
          <h1 className="font-serif text-[14vw] md:text-[7vw] leading-[0.92] tracking-[-0.04em]">
            Parlons de votre <span className="italic text-gradient-gold">projet</span>.
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
            Une idée, un site à refondre, une plateforme à construire ? Écrivez-moi, je réponds rapidement.
          </p>

          <div className="mt-12 space-y-5">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 text-foreground"
            >
              <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              <span className="gold-line">{profile.email}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 text-foreground"
            >
              <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors">
                <Github className="w-4 h-4" />
              </span>
              <span className="gold-line">github.com/{profile.handle}</span>
            </a>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </span>
              <span>{profile.location}</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-6 md:col-start-7 bg-card border border-border rounded-2xl p-10 space-y-6"
        >
          <Field label="Votre nom" name="name" placeholder="Marie Dupont" />
          <Field label="Email" name="email" type="email" placeholder="marie@exemple.com" />
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Parlez-moi de votre projet…"
              className="mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/50 resize-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-6 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:shadow-gold-lg transition-all"
          >
            {sent ? (
              <>
                Message préparé <Check className="w-4 h-4" />
              </>
            ) : (
              <>
                Envoyer
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <p className="text-xs text-muted-foreground">
            Le bouton ouvre votre client mail avec le message pré-rempli.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors"
      />
    </div>
  );
}
