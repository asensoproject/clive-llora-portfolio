"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Download, FileText, Building2, CheckCircle2, GraduationCap, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ResumeModal } from "./ResumeModal";

export const ResumeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="resume" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career &amp; Engineering Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Executive <span className="text-gradient-accent">Career Timeline</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3 rounded-xl glass-panel text-white font-semibold text-xs hover:border-cyan-500/40 transition-all flex items-center gap-2 shadow-lg shadow-cyan-950/20 hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Interactive Resume</span>
            </button>

            <a
              href={PORTFOLIO_DATA.resumePdfUrl}
              download="Clive_Llora_Resume.pdf"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-xs hover:from-cyan-400 hover:to-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Work Experience Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {PORTFOLIO_DATA.workHistory.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl p-7 border border-white/10 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 inline-block mb-2">
                      {work.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {work.role}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400">
                      {work.company}
                    </p>
                  </div>

                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0">
                    {work.duration}
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  {work.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Academic Card */}
        <div className="glass-panel rounded-3xl p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 font-semibold">Academic Foundation</span>
              <h3 className="text-lg font-bold text-white">BS in Management Information Systems (MIS)</h3>
              <p className="text-xs text-slate-400">Graduated 2008 &bull; Specialization in Information Systems &amp; Software Engineering</p>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 text-xs font-semibold border border-cyan-500/30 transition-colors shrink-0"
          >
            Inspect Complete Resume
          </button>
        </div>

      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
