"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  Sparkles, 
  Zap, 
  Brain, 
  Globe, 
  Code, 
  Layers, 
  Film, 
  Database, 
  Server, 
  Cpu, 
  Radio, 
  Cloud, 
  GitBranch, 
  Workflow, 
  Gauge 
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const SkillsSection = () => {
  // Helper icon map
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot": return <Bot className="w-5 h-5 text-cyan-400" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-amber-400" />;
      case "Zap": return <Zap className="w-5 h-5 text-emerald-400" />;
      case "Brain": return <Brain className="w-5 h-5 text-purple-400" />;
      case "Globe": return <Globe className="w-5 h-5 text-white" />;
      case "Code": return <Code className="w-5 h-5 text-blue-400" />;
      case "Layers": return <Layers className="w-5 h-5 text-teal-400" />;
      case "Film": return <Film className="w-5 h-5 text-pink-400" />;
      case "Database": return <Database className="w-5 h-5 text-emerald-400" />;
      case "Server": return <Server className="w-5 h-5 text-cyan-400" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-cyan-300" />;
      case "Radio": return <Radio className="w-5 h-5 text-amber-400" />;
      case "Cloud": return <Cloud className="w-5 h-5 text-white" />;
      case "GitBranch": return <GitBranch className="w-5 h-5 text-purple-400" />;
      case "Workflow": return <Workflow className="w-5 h-5 text-blue-400" />;
      case "Gauge": return <Gauge className="w-5 h-5 text-emerald-400" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tech Stack & <span className="text-gradient-accent">Systems Capabilities</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Hand-picked technologies optimized for maximum velocity, zero-downtime reliability, and high-concurrency performance.
          </p>
        </div>

        {/* Highlighted Core 7 Tech Stack Badges */}
        <div className="mb-14 p-6 glass-panel rounded-3xl border border-cyan-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl pointer-events-none" />
          <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold mb-4 text-center">
            Primary Stack Focus
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { name: "LLM Integration", badge: "AI Workflows", color: "from-cyan-500/20 to-emerald-500/20 border-cyan-500/30 text-cyan-300" },
              { name: "Gemini AI", badge: "Multimodal AI", color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-300" },
              { name: "OpenAI", badge: "GPT-4 Engine", color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300" },
              { name: "Claude API", badge: "AI Core", color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300" },
              { name: "AWS", badge: "Cloud Infra", color: "from-orange-500/20 to-amber-500/20 border-orange-500/30 text-orange-300" },
              { name: "Google Cloud", badge: "GCP Platform", color: "from-blue-600/20 to-indigo-500/20 border-blue-500/30 text-blue-300" },
              { name: "Supabase", badge: "Database", color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300" },
              { name: "Next.js", badge: "Framework", color: "from-slate-700/50 to-slate-800/50 border-white/20 text-white" },
              { name: "Vercel", badge: "Edge Deploy", color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300" },
              { name: "SQL & Postgres", badge: "Relational", color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-300" },
              { name: "GitHub", badge: "CI/CD", color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300" },
              { name: "System Architecture", badge: "Architect", color: "from-teal-500/20 to-cyan-500/20 border-teal-500/30 text-teal-300" },
            ].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2.5 rounded-2xl bg-gradient-to-r ${item.color} border backdrop-blur-md flex items-center gap-2.5 shadow-lg`}
              >
                <span className="font-bold text-xs">{item.name}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-black/40 text-slate-300 border border-white/10">
                  {item.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Grid Matrix */}
        <div className="grid md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
                <span>{category.title}</span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                  0{catIdx + 1}
                </span>
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-4 rounded-2xl border transition-all ${
                      skill.highlight
                        ? "bg-slate-900/90 border-cyan-500/30 hover:border-cyan-400 shadow-md shadow-cyan-950/30"
                        : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-slate-950 border border-white/10">
                        {getIcon(skill.icon)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">
                          {skill.name}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
