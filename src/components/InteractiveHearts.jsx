import { useMemo } from "react";
import { motion } from "framer-motion";

export default function InteractiveHearts() {
  const hearts = useMemo(
    () => Array.from({ length: 18 }, (_, i) => ({
      id: i,
      delay: (i % 6) * 0.15,
      x: (i * 37) % 100,
      y: (i * 19) % 100,
    })),
    []
  );

  return (
    <div className="pointer-events-none relative h-40 w-full">
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute text-rose-400"
          style={{ left: `${h.x}%`, top: `${h.y}%` }}
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          whileInView={{ opacity: 0.7, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: h.delay, repeat: Infinity, repeatType: "mirror" }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  );
}
