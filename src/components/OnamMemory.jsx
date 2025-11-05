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

          {/* Replaced photo with a soft decorative panel (no image) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-rose-100 bg-gradient-to-tr from-rose-50 via-amber-50 to-white shadow-xl">
              {/* Subtle floating petals */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-6 top-6 h-10 w-10 rounded-full bg-rose-300/30 blur-xl" />
                <div className="absolute right-10 top-12 h-16 w-16 rounded-full bg-amber-300/30 blur-2xl" />
                <div className="absolute bottom-8 left-10 h-14 w-14 rounded-full bg-pink-300/30 blur-xl" />
              </div>
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center">
                <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/70 px-3 py-1 text-rose-600 shadow-sm backdrop-blur">
                  <Flower2 className="mr-2 h-4 w-4" />
                  Onam brought us together
                </div>
                <p className="max-w-sm text-sm text-rose-600">
                  No photo needed — just the feeling of that day. Colors, laughter, and a spark that still glows.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
