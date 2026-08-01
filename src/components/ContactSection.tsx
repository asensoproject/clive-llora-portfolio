"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowUpRight, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main CTA Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-cyan-500/30 relative overflow-hidden text-center mb-16 shadow-2xl shadow-cyan-950/20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-violet-500/10 blur-[100px] pointer-events-none rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto relative z-10 space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Let&apos;s Build Together
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your <span className="text-gradient-accent">AI Vision?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Whether you need rapid full-stack prototyping, scalable Supabase &amp; Claude AI orchestration, or system architecture advisory, let&apos;s connect.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-xs sm:text-sm hover:from-cyan-400 hover:to-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>

              <a
                href={PORTFOLIO_DATA.resumePdfUrl}
                download="Clive_Llora_Resume.pdf"
                className="px-6 py-3.5 rounded-xl glass-panel text-cyan-400 hover:text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 hover:-translate-y-0.5 border border-cyan-500/30"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={copyEmail}
                className="px-6 py-3.5 rounded-xl glass-panel text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2 hover:-translate-y-0.5"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Minimalist Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-800/80 text-xs text-slate-400">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-br from-cyan-500 to-emerald-400 overflow-hidden shrink-0">
              <img
                src="/clive-llora.jpg"
                alt="Clive Llora"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <div>
              <p className="text-white text-sm font-black tracking-tight">{PORTFOLIO_DATA.name}</p>
              <p className="text-[11px] text-cyan-400 font-mono">{PORTFOLIO_DATA.title}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-[11px]">GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-[11px]">LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-[11px]">Email</span>
            </a>
          </div>

          <div className="text-slate-500 text-[11px]">
            &copy; {new Date().getFullYear()} Clive Llora. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
