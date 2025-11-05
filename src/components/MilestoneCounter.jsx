import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
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
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex items-center gap-2 text-rose-600">
          <Clock className="h-5 w-5" />
          Our time together so far
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl font-extrabold text-rose-900">{s.value}</div>
              <div className="mt-1 text-sm text-rose-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
