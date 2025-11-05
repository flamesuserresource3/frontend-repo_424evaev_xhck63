import AnniversaryHero from "./components/AnniversaryHero.jsx";
import MilestoneCounter from "./components/MilestoneCounter.jsx";
import MessageToLiya from "./components/MessageToLiya.jsx";
import InteractiveHearts from "./components/InteractiveHearts.jsx";

function App() {
  const officialDateLabel = "6 Oct 2025";
  const officialDateISO = "2025-10-06T00:00:00";

  return (
    <div className="min-h-screen bg-rose-50 text-rose-900">
      {/* Hero with interactive Spline background */}
      <AnniversaryHero name="Liya" officialDateLabel={officialDateLabel} />

      {/* Milestones with animated counters */}
      <MilestoneCounter startISO={officialDateISO} />

      {/* Decorative floating hearts */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl">
          <InteractiveHearts />
        </div>
      </section>

      {/* Personal message with subtle scene particles */}
      <MessageToLiya name="Liya" />

      {/* Simple footer */}
      <footer className="border-t border-rose-100 bg-white/70 py-6 text-center text-sm text-rose-600 backdrop-blur">
        Made with love to celebrate our first month together — Jithin.
      </footer>
    </div>
  );
}

export default App;
