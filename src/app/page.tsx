import React from "react";
import { GlowBackground } from "@/components/GlowBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata = {
  title: "Clive Llora — Vibe Coder & Systems Architect",
  description:
    "Single-page developer portfolio for Clive Llora. Rapidly architecting & shipping production-grade, scalable AI solutions and full-stack digital ecosystems.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <GlowBackground />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <ArchitectureSection />
      <ContactSection />
    </main>
  );
}
