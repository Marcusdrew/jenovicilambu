import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MaskReveal({
  children,
  delay = 0,
  className,
  immediate = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Animate on mount instead of waiting for scroll — for above-the-fold content */
  immediate?: boolean;
}) {
  const v: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    show: {
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 1.1, delay, ease },
    },
  };
  return (
    <motion.div
      variants={v}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, margin: "-60px" } })}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  immediate = false,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  /** Animate on mount instead of waiting for scroll — for above-the-fold content */
  immediate?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: "110%" }}
            {...(immediate
              ? { animate: { y: 0 } }
              : { whileInView: { y: 0 }, viewport: { once: true } })}
            transition={{ duration: 0.8, delay: delay + i * stagger, ease }}
            className={`inline-block ${wordClassName ?? ""}`}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
