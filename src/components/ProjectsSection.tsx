"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, Zap, Layers } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Systems & <span className="text-gradient-accent">Ecosystems</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Selected high-impact platforms designed, architected, and shipped with speed and enterprise resilience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative group border border-white/10 overflow-hidden"
            >
              {/* Background Glow Pill */}
              <div
                className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`}
              />

              <div>
                {/* Top Badge & Direct Live Link Button */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-900/90 text-cyan-400 border border-cyan-500/20">
                    {project.badge}
                  </span>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-black text-slate-300 flex items-center justify-center transition-all duration-300 border border-white/10"
                      title={`Visit ${project.title} live`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Real Preview Image Container */}
                {project.image && (
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 border border-white/10 bg-slate-950 shadow-inner group/img cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10 flex items-center gap-1 opacity-0 group-hover/img:opacity-100 transition-opacity">
                      <span>View Gallery &amp; Blueprint</span>
                      <Layers className="w-3 h-3 text-cyan-400" />
                    </div>
                  </div>
                )}

                {/* Project Title with Direct Live Link */}
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/title"
                >
                  <h3 className="text-xl font-bold text-white group-hover/title:text-cyan-300 transition-colors mb-1 flex items-center gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/title:opacity-100 -translate-x-1 group-hover/title:translate-x-0 transition-all text-cyan-400" />
                  </h3>
                </a>

                <p className="text-xs font-medium text-cyan-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Metrics Badges */}
                <div className="space-y-2 mb-5">
                  {project.metrics.slice(0, 2).map((metric, i) => (
                    <div
                      key={i}
                      className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2"
                    >
                      <Zap className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Tech Tags */}
              <div className="pt-5 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-slate-950/80 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 rounded-md text-[10px] font-mono text-slate-500 bg-slate-950/40">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 hover:text-black border border-cyan-500/30 text-cyan-400 text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    <span>Blueprint</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal detail */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
