import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

export default function MessageToLiya({ name }) {
  return (
    <section className="relative py-20">
      {/* Floating sparkles background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-rose-300/70"
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.05 }}
            style={{ left: `${(i * 7) % 100}%`, top: `${(i * 13) % 100}%` }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10, rotateX: -6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-white to-rose-50 p-8 shadow-xl"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-rose-700">
            <Sparkle className="h-4 w-4" />
            A note from my heart
          </div>
          <h3 className="text-2xl font-bold text-rose-900">Dear {name},</h3>
          <p className="mx-auto mt-4 max-w-2xl text-rose-700">
            In this first month together, you’ve filled my days with warmth, laughter, and light.
            I’m grateful for every little moment — the sweet messages, the shared smiles, and the quiet understanding between us.
            Here’s to many more months and memories. I’m so lucky to have you.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-right text-rose-500"
          >
            With love,<br/>Jithin
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
