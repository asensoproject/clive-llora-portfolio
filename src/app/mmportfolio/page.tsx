import React from "react";
import { GlowBackground } from "@/components/GlowBackground";
import { MarketingPortfolio } from "@/components/mm/MarketingPortfolio";

export const metadata = {
  title: "Clive Llora — Marketing Manager (Cold Funnels & Webinars)",
  description:
    "Direct-response creative portfolio for Clive Llora: hooks, video ad scripts, briefs, and webinar, VSL and sales funnels for founder-led offers.",
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
