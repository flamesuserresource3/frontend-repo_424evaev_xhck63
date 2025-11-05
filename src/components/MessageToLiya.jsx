import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

export default function MessageToLiya({ name }) {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-white to-rose-50 p-8 shadow-xl"
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
          <p className="mt-6 text-right text-rose-500">With love,<br/>Jithin</p>
        </motion.div>
      </div>
    </section>
  );
}
