import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [data-cursor='hover']");
      setHovering(!!interactive);
      const lbl = (interactive as HTMLElement | null)?.dataset.cursorLabel ?? null;
      setLabel(lbl);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full border border-gold/60 backdrop-blur-[2px]"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 64 : 28,
          height: hovering ? 64 : 28,
          backgroundColor: hovering
            ? "color-mix(in oklab, var(--gold) 12%, transparent)"
            : "transparent",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
      >
        {label && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-gold font-mono">
            {label}
          </span>
        )}
      </motion.div>
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] w-1 h-1 rounded-full bg-gold"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}
