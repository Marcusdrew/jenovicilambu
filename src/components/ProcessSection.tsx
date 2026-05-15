import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { process } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="px-6 lg:px-12 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            Méthode
          </p>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-4xl">
            Comment <span className="italic text-gradient-gold">on travaille</span> ensemble.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-24 md:mt-32 grid grid-cols-12 gap-6">
          {/* timeline */}
          <div className="hidden md:block col-span-1 relative">
            <div className="sticky top-32 h-[60vh]">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />
              <motion.div
                style={{ height: lineHeight }}
                className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-gold via-gold to-transparent"
              />
            </div>
          </div>

          {/* steps */}
          <ol className="col-span-12 md:col-span-11 space-y-16 md:space-y-24">
            {process.map((step, i) => (
              <motion.li
                key={step.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-12 gap-6 items-start"
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="font-mono text-sm text-gold">{step.n}</div>
                  <h3 className="font-serif text-3xl md:text-4xl mt-2 text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="col-span-12 md:col-span-7 md:col-start-5 text-base md:text-lg text-muted-foreground leading-relaxed border-t border-border pt-6">
                  {step.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
