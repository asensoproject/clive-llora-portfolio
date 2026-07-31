"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Copy, Check, Terminal, ShieldCheck, GraduationCap, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Status & Name Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs text-slate-300 mb-6 backdrop-blur-md shadow-lg shadow-cyan-950/20"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-mono text-cyan-400 text-[11px] uppercase tracking-wider font-semibold">
            Status
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-200 font-medium">{PORTFOLIO_DATA.status}</span>
        </motion.div>

        {/* Hero Grid with Photo and Name */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Big Visible Name & Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* HUGE PROMINENT NAME */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
                Clive <span className="text-gradient-accent">Llora</span>
              </h1>
              
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="text-lg sm:text-2xl font-bold text-cyan-400 font-mono tracking-tight">
                  {PORTFOLIO_DATA.title}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Experience & Education Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  Management in Information Systems
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800">
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                  Ex-Accenture
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800">
                  <Building2 className="w-3.5 h-3.5 text-purple-400" />
                  Ex-Telus
                </span>
              </div>
            </motion.div>

            {/* Value Proposition & Bio */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl"
            >
              A Management in Information Systems graduate with software engineering background at <strong className="text-white">Accenture</strong> and <strong className="text-white">Telus</strong>, now channeling enterprise software engineering expertise into building high-impact AI systems and scalable digital platforms.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm hover:opacity-95 transition-all flex items-center gap-2 group shadow-xl shadow-cyan-500/20 hover:-translate-y-0.5"
              >
                <span>Explore Core Ecosystems</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={copyEmail}
                className="px-6 py-3.5 rounded-xl glass-panel text-slate-300 font-medium text-xs sm:text-sm hover:text-white hover:border-slate-600 transition-all flex items-center gap-2 hover:-translate-y-0.5"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Direct Email</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80"
            >
              {PORTFOLIO_DATA.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Clive Llora Photo & Tech Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Background Glow behind Photo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-100 transition duration-1000" />

            <div className="relative glass-panel rounded-3xl p-4 sm:p-5 border border-white/15 shadow-2xl overflow-hidden bg-slate-950/80">
              
              {/* Clive Llora Portrait Image */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
                <img
                  src="/clive-llora.jpg"
                  alt="Clive Llora - Vibe Coder & Systems Architect"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                
                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

                {/* Overlaid Name & Role Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-panel border border-white/15 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-white">
                      Clive Llora
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono">
                      MIS Grad &bull; Ex-Accenture &bull; Ex-Telus
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Mini Terminal Bar */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Terminal className="w-3.5 h-3.5" /> clive-llora.profile
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Enterprise Ready
                </span>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
