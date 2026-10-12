import React from "react";
import { GlowBackground } from "@/components/GlowBackground";
import { MarketingPortfolio } from "@/components/mm/MarketingPortfolio";

export const metadata = {
  title: "Clive Llora — Marketing Manager",
  description:
    "Marketing Manager portfolio for Clive Llora: full-funnel strategy, paid social, team and budget leadership, and data-driven growth.",
  // Shared directly with hiring teams; keep it out of search results.
  robots: { index: false, follow: false },
};

export default function MarketingManagerPortfolio() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <GlowBackground />
      <div className="relative z-10">
        <MarketingPortfolio />
      </div>
    </main>
  );
}
