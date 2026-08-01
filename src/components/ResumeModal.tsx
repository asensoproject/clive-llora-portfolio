"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, Briefcase, GraduationCap, Building2, MapPin, Mail, Phone, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-2xl z-10 my-6 max-h-[92vh] flex flex-col bg-slate-950/90 text-slate-100"
        >
          {/* Top Bar Header */}
          <div className="h-20 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-white/10 px-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                CL
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Executive Resume</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Verified
                  </span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {PORTFOLIO_DATA.name} &bull; {PORTFOLIO_DATA.title}
                </p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-2.5">
              <a
                href={PORTFOLIO_DATA.resumePdfUrl}
                download="Clive_Llora_Resume.pdf"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <button
                onClick={handlePrint}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-white/10"
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Printable Resume Document Body */}
          <div className="p-6 sm:p-10 space-y-8 overflow-y-auto custom-scrollbar printable-area">
            
            {/* Header / Contact Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase mb-1">
                  {PORTFOLIO_DATA.name}
                </h1>
                <p className="text-cyan-400 font-mono text-sm sm:text-base font-bold">
                  {PORTFOLIO_DATA.title}
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{PORTFOLIO_DATA.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{PORTFOLIO_DATA.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <a href={`mailto:${PORTFOLIO_DATA.email}`} className="hover:text-cyan-300 underline">
                    {PORTFOLIO_DATA.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Professional Summary
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed glass-panel p-4 sm:p-5 rounded-2xl border border-white/5 bg-slate-900/60">
                {PORTFOLIO_DATA.bio}
              </p>
            </div>

            {/* Core Skills Matrix */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                Core Technical Skills Matrix
              </h4>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="font-bold text-white block">AI &amp; Vibe Coding</span>
                  <span className="text-slate-400 text-[11px] block">
                    Prompt Engineering, Claude API, LLMs, Gemini AI, OpenAI, AI Workflow Automation, Rapid Prototyping
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="font-bold text-white block">Systems Architecture &amp; Cloud</span>
                  <span className="text-slate-400 text-[11px] block">
                    AWS, Google Cloud Platform (GCP), Vercel Edge, System Architecture, CI/CD Pipelines, SQL &amp; Supabase
                  </span>
                </div>
              </div>
            </div>

            {/* Shipped Core Ecosystems */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold">
                Shipped Core Ecosystems
              </h4>
              <div className="grid sm:grid-cols-3 gap-3">
                {PORTFOLIO_DATA.projects.map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                    <span className="font-bold text-white text-xs block">{proj.title}</span>
                    <span className="text-cyan-400 text-[10px] font-mono block">{proj.subtitle}</span>
                    <p className="text-slate-400 text-[11px] line-clamp-2">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Work History Timeline */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                <Building2 className="w-4 h-4 text-purple-400" />
                Professional Work Experience
              </h4>
              <div className="space-y-5 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
                {PORTFOLIO_DATA.workHistory.map((work, idx) => (
                  <div key={idx} className="relative pl-8 space-y-2">
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shrink-0" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h5 className="text-sm font-bold text-white flex items-center gap-2">
                          <span>{work.role}</span>
                          <span className="text-cyan-400 font-normal text-xs">&bull; {work.company}</span>
                        </h5>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 w-fit">
                        {work.duration}
                      </span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {work.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                Education
              </h4>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">BS in Management Information Systems (MIS)</span>
                  <span className="text-slate-400 text-[11px]">Academic Specialization in Information Systems &amp; Software Engineering</span>
                </div>
                <span className="text-mono text-cyan-400 font-bold">Graduated 2008</span>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <a
                href={PORTFOLIO_DATA.resumePdfUrl}
                download="Clive_Llora_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 hover:text-black border border-cyan-500/30 text-cyan-400 text-xs font-semibold transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Clive_Llora_Resume.pdf</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
              >
                Close Resume
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
