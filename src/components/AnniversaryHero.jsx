import { motion } from "framer-motion";
import { Heart, PartyPopper, Calendar } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function AnniversaryHero({ name, officialDateLabel }) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Spline 3D scene background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlays (non-blocking for pointer interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/10" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />

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
          We made it official on <span className="font-semibold">{officialDateLabel}</span> and every moment since has become my new favorite memory.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.3 }}
          className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-rose-600 shadow-lg"
        >
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
