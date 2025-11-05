import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";

export default function OnamMemory() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold text-rose-900 sm:text-4xl">Our Onam Beginning</h2>
            <p className="mt-4 text-rose-700">
              We first met during the Onam celebration — vibrant pookkalams, traditional songs, and warm smiles all around.
              That moment turned into a beautiful story. Here's to the festival that brought our paths together.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-rose-700">
              <Flower2 className="h-4 w-4" />
              Onam memories, forever special
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1630776546171-8a20fd0ff803?q=80&w=1600&auto=format&fit=crop"
                alt="Onam celebration with pookkalam"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-transparent to-amber-400/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
