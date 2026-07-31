"use client";

import React from "react";
import { motion } from "framer-motion";
import { Workflow, Sparkles, Database, Rocket, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 relative z-10 border-t border-b border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-mono mb-4">
              <Workflow className="w-3.5 h-3.5" />
              <span>Engineering Execution Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              The Rapid Shipping <span className="text-gradient-accent">Engine</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            How I transform complex product ideas into high-performance, battle-tested production platforms in record time.
          </p>
        </div>

        {/* 3 Step Workflow */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {PORTFOLIO_DATA.architectureSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle Step Glow */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-cyan-400">
                    {step.step}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-slate-900 text-emerald-400 border border-emerald-500/20">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-cyan-400">
                {idx === 0 && <Sparkles className="w-4 h-4 text-amber-400" />}
                {idx === 1 && <Database className="w-4 h-4 text-emerald-400" />}
                {idx === 2 && <Rocket className="w-4 h-4 text-purple-400" />}
                <span>Phase 0{idx + 1} Automated</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
