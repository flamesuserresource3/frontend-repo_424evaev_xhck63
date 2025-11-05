import AnniversaryHero from "./components/AnniversaryHero.jsx";
import OnamMemory from "./components/OnamMemory.jsx";
import MilestoneCounter from "./components/MilestoneCounter.jsx";
import MessageToLiya from "./components/MessageToLiya.jsx";

function App() {
  const officialDateLabel = "6 Oct 2025";
  const officialDateISO = "2025-10-06T00:00:00";

  return (
    <div className="min-h-screen bg-rose-50 text-rose-900">
      {/* Hero */}
      <AnniversaryHero name="Liya" officialDateLabel={officialDateLabel} />

      {/* Onam memory section */}
      <OnamMemory />

      {/* Milestones */}
      <MilestoneCounter startISO={officialDateISO} />

      {/* Personal message */}
      <MessageToLiya name="Liya" />

      {/* Simple footer */}
      <footer className="border-t border-rose-100 bg-white/70 py-6 text-center text-sm text-rose-500 backdrop-blur">
        Made with love to celebrate our first month together.
      </footer>
    </div>
  );
}

export default App;
