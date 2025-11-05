import { motion } from "framer-motion";
import { Heart, PartyPopper, Calendar } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function AnniversaryHero({ name, officialDateLabel }) {
  const petals = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    left: `${(i * 13) % 100}%`,
    delay: (i % 8) * 0.35,
    duration: 6 + (i % 5),
    size: 6 + (i % 4) * 2,
    opacity: 0.25 + ((i % 5) * 0.12),
  }));

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Spline 3D scene background (interactive) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Romantic, soft gradient washes (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50/80 via-rose-50/40 to-rose-100/10" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-rose-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

      {/* Floating petal particles (romantic ambiance) */}
      <div className="pointer-events-none absolute inset-0">
        {petals.map((p) => (
          <motion.span
            key={p.id}
            className="absolute block rounded-full bg-gradient-to-tr from-rose-400/60 to-pink-300/60 shadow-sm"
            style={{ left: p.left, width: p.size, height: p.size, opacity: p.opacity }}
            initial={{ y: -40, rotate: -8 }}
            animate={{ y: ["-10%", "110%"], rotate: [ -8, 8, -6 ] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-rose-600 shadow-sm backdrop-blur"
        >
          <PartyPopper className="h-4 w-4" />
          Celebrating our month together
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-4xl font-extrabold tracking-tight text-rose-900 sm:text-6xl"
        >
          Happy One Month, {name}!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-7 text-rose-700 sm:text-lg"
        >
          We made it official on <span className="font-semibold">{officialDateLabel}</span> — every heartbeat since has been a little brighter because of you.
        </motion.p>

        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.3 }}
          className="relative mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-rose-600 shadow-lg"
        >
          {/* Subtle pulsing glow behind CTA */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-[1] rounded-full bg-rose-400/20 blur-xl"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
          <span className="text-sm sm:text-base">You + Me • Always</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex items-center justify-center gap-2 text-sm text-rose-600"
        >
          <Calendar className="h-4 w-4" />
          Official since {officialDateLabel}
        </motion.div>
      </div>
    </section>
  );
}
