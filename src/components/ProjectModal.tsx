"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Layers, BarChart3, Server, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    setActiveImageIdx(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const images = project.images || (project.image ? [project.image] : []);

  const nextImage = () => {
    if (images.length > 0) {
      setActiveImageIdx((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 0) {
      setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Banner & Header */}
          <div className={`h-24 w-full bg-gradient-to-r ${project.gradient} relative flex items-center justify-between px-6 border-b border-white/10 shrink-0`}>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/60 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                {project.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/50 text-slate-300 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar">
            
            {/* Image Gallery Showcase */}
            {images.length > 0 && (
              <div className="space-y-3">
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl group">
                  <img
                    src={images[activeImageIdx]}
                    alt={`${project.title} preview ${activeImageIdx + 1}`}
                    className="w-full h-full object-cover object-top transition-all duration-300"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-cyan-500 hover:text-black text-white transition-colors border border-white/10"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-cyan-500 hover:text-black text-white transition-colors border border-white/10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 text-[11px] font-mono text-cyan-400 border border-white/10 flex items-center gap-1.5 backdrop-blur-md">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>{activeImageIdx + 1} / {images.length}</span>
                  </div>
                </div>

                {/* Thumbnails row */}
                {images.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-1">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`relative w-20 h-14 rounded-xl overflow-hidden border transition-all shrink-0 ${
                          idx === activeImageIdx
                            ? "border-cyan-400 ring-2 ring-cyan-500/30 scale-105"
                            : "border-white/10 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="thumb" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Description & Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <p className="text-cyan-400 font-semibold text-sm mb-1">
                  {project.subtitle}
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-xs hover:from-cyan-400 hover:to-emerald-400 transition-all shadow-lg shadow-cyan-500/20 shrink-0"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center"
                >
                  <BarChart3 className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                  <span className="text-xs font-semibold text-slate-200 block">
                    {metric}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                Key Capability Highlights
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Server className="w-4 h-4 text-cyan-400" />
                Systems Architecture Blueprint
              </h4>
              <div className="space-y-2">
                {project.architectureHighlights.map((arch, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="pt-2">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold mb-3">
                Tech Stack Integration
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Open {project.link}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : <div />}

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
              >
                Close Blueprint
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
