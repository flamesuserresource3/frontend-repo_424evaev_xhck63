import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";

function daysBetween(start) {
  const startDate = new Date(start);
  const now = new Date();
  const diff = now.getTime() - startDate.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function MilestoneCounter({ startISO }) {
  const [days, setDays] = useState(() => daysBetween(startISO));

  useEffect(() => {
    const id = setInterval(() => setDays(daysBetween(startISO)), 60 * 1000);
    return () => clearInterval(id);
  }, [startISO]);

  const stats = useMemo(() => {
    const months = Math.floor(days / 30);
    const weeks = Math.floor(days / 7);
    return [
      { label: "Days", value: days },
      { label: "Weeks", value: weeks },
      { label: "Months (approx)", value: months },
    ];
  }, [days]);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 text-rose-600"
        >
          <Clock className="h-5 w-5" />
          Our time together so far
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(244, 63, 94, 0.15)" }}
              className="relative overflow-hidden rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-rose-100/60 blur-2xl" />
              <div className="text-3xl font-extrabold text-rose-900">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={s.value}
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -8, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {s.value}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="mt-1 text-sm text-rose-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
