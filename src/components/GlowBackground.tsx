"use client";

import React from "react";

export const GlowBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark Base Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      
      {/* Top Ambient Glow */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/15 to-violet-600/10 blur-[140px] rounded-full animate-pulse-glow" />
      
      {/* Bottom Right Secondary Glow */}
      <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-indigo-500/10 via-purple-500/05 to-transparent blur-[160px] rounded-full pointer-events-none" />

      {/* Radial overlay to soften edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712]" />
    </div>
  );
};
