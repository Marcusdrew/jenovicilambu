import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] rounded-full mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 24 : 6),
          y: pos.y - (hovering ? 24 : 6),
          width: hovering ? 48 : 12,
          height: hovering ? 48 : 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
        style={{ background: "var(--gold)" }}
      />
    </>
  );
}
