import { type ReactNode } from "react";

export function Marquee({
  items,
  className,
}: {
  items: ReactNode[];
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div className="flex gap-16 whitespace-nowrap animate-marquee w-max">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-16 text-foreground/80">
            {item}
            <span className="text-gold font-serif text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
