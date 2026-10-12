"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  ChartLine,
  Check,
  CirclePlay,
  Clapperboard,
  ClipboardList,
  Copy,
  Download,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  PenLine,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { MM_PORTFOLIO_DATA as D } from "@/data/mmPortfolioData";

const FIT_ICONS: Record<string, React.ElementType> = { Lightbulb, PenLine, Clapperboard, ClipboardList, ChartLine, ShieldCheck };

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const SectionHeading = ({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) => (
  <motion.div {...fadeUp} className="max-w-2xl mb-10">
    <p className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">{eyebrow}</p>
    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
    {intro && <p className="mt-3 text-slate-400 leading-relaxed">{intro}</p>}
  </motion.div>
);

const LoomButton = () =>
  D.loomUrl ? (
    <a
      href={D.loomUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3.5 rounded-xl glass-panel text-cyan-400 font-semibold text-sm hover:text-white transition-colors flex items-center gap-2"
    >
      <CirclePlay className="w-4 h-4" />
      Watch my 2-min intro
    </a>
  ) : null;

const Navbar = () => {
  const links = [
    { name: "Fit", href: "#fit" },
    { name: "Funnels", href: "#work" },
    { name: "Hooks", href: "#hooks" },
    { name: "Process", href: "#process" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 bg-[#030712]/85 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <img src="/clive-llora.jpg" alt="Clive Llora" className="w-10 h-10 rounded-full object-cover object-top border border-cyan-500/40 shrink-0" />
          <div className="min-w-0">
            <p className="font-extrabold text-white leading-tight truncate">{D.name}</p>
            <p className="text-xs text-cyan-300/80 truncate">{D.title}</p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-colors">
              {l.name}
            </a>
          ))}
        </nav>
        <a
          href={D.resumePdfUrl}
          download="Clive_Llora_Resume_Marketing.pdf"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Resume</span>
        </a>
      </div>
    </header>
  );
};

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText(D.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs text-slate-200"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            {D.status}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Clive <span className="text-gradient-accent">Llora</span>
            </h1>
            <p className="mt-4 text-xl sm:text-3xl font-bold text-cyan-400 tracking-tight">{D.title}</p>
            <p className="mt-1 text-sm sm:text-base font-mono text-emerald-400">{D.subtitle}</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-white font-semibold leading-snug max-w-xl"
          >
            {D.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-300 leading-relaxed max-w-xl"
          >
            {D.pitch}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-2"
          >
            {D.badges.map((b) => (
              <span key={b} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800">
                {b}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href="#work"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-400 text-slate-950 font-bold text-sm flex items-center gap-2 group shadow-xl shadow-cyan-500/20"
            >
              See the funnels
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <LoomButton />
            <button
              onClick={copyEmail}
              className="px-6 py-3.5 rounded-xl glass-panel text-slate-300 font-medium text-sm hover:text-white transition-colors flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              {copied ? <span className="text-emerald-400">Email copied</span> : <span>Copy email</span>}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative max-w-md w-full mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl blur-2xl opacity-25" />
          <div className="relative glass-panel rounded-3xl p-4 overflow-hidden">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <img src="/clive-llora.jpg" alt="Clive Llora, Marketing Manager" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-panel">
                <p className="font-extrabold text-white">Clive Llora</p>
                <p className="text-xs text-cyan-400 font-mono">Hooks · Scripts · Briefs · Funnels</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-14">
        <motion.div {...fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {D.stats.map((s) => (
            <div key={s.label} className="glass-panel rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Fit = () => (
  <section id="fit" className="relative py-20 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeading
        eyebrow="The role, point by point"
        title="I own the ideation, the copy and the brief"
        intro="Not the production. The media buyer brings the numbers; I turn them into concepts, write the scripts and copy, and direct the team through to a finished ad."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {D.fit.map((p, i) => {
          const Icon = FIT_ICONS[p.icon];
          return (
            <motion.div key={p.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass-panel glass-panel-hover rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.body}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const Work = () => (
  <section id="work" className="relative py-20 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeading
        eyebrow="Live funnels"
        title="VSL, sales and lead-gen funnels I've written and launched"
        intro="Founder-led and personality-brand offers sold to cold traffic. Each one is live, so click through and read the copy."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {D.work.map((w) => (
          <motion.a
            key={w.title}
            {...fadeUp}
            href={w.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col"
          >
            {w.image ? (
              <div className="aspect-[16/9] overflow-hidden border-b border-white/10 bg-white">
                <img src={w.image} alt={`${w.title} screenshot`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              </div>
            ) : (
              <div className="aspect-[16/9] border-b border-white/10 bg-gradient-to-br from-cyan-500/20 via-emerald-500/10 to-violet-500/20 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-black text-white/90 tracking-tight">{w.title}</span>
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <p className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">{w.kind}</p>
              <h3 className="mt-1 text-xl font-bold text-white flex items-center gap-2">
                {w.title}
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">{w.body}</p>
              <p className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300">
                <span className="text-slate-500">My role: </span>
                {w.role}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const Hooks = () => (
  <section id="hooks" className="relative py-20 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeading
        eyebrow="Copy samples"
        title="Hooks I've written, by angle"
        intro="Lines from my live funnels. Different offers, different audiences, different angles, in English and Taglish."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {D.hooks.map((h, i) => (
          <motion.figure key={h.copy} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass-panel rounded-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/25">{h.angle}</span>
              <Quote className="w-4 h-4 text-slate-600" />
            </div>
            <blockquote className="mt-4 text-lg font-semibold text-white leading-snug flex-1">&ldquo;{h.copy}&rdquo;</blockquote>
            <figcaption className="mt-4 text-xs text-slate-500">{h.source}</figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="relative py-20 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeading eyebrow="How I work" title="From the numbers to a shipped ad" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {D.process.map((p, i) => (
          <motion.div key={p.step} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.06 }} className="glass-panel rounded-2xl p-5">
            <p className="font-mono text-2xl font-extrabold text-cyan-400">{p.step}</p>
            <h3 className="mt-2 font-bold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp} className="mt-8 glass-panel rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold">
          <Sparkles className="w-5 h-5" />
          AI in the everyday workflow
        </div>
        <div className="mt-5 grid md:grid-cols-3 gap-5">
          {D.aiTools.map((t) => (
            <div key={t.name}>
              <p className="font-bold text-white">{t.name}</p>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed">{t.use}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div {...fadeUp} className="mt-8 flex flex-wrap gap-2">
        {D.skills.map((s) => (
          <span key={s} className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800">
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="relative py-20 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeading eyebrow="Experience" title="Where I've done it" />
      <div className="space-y-6">
        {D.experience.map((job) => (
          <motion.div key={job.company} {...fadeUp} className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <p className="mt-1 flex items-center gap-2 text-cyan-400 font-semibold">
                  <Briefcase className="w-4 h-4 shrink-0" />
                  {job.company}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                  job.current ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/25" : "bg-slate-900 text-slate-400 border-slate-800"
                }`}
              >
                {job.duration}
              </span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {job.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <Check className="w-4 h-4 mt-1 text-emerald-400 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div {...fadeUp} className="glass-panel rounded-2xl p-6 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-400 shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-white">{D.education.degree}</p>
            <p className="text-sm text-slate-400">{D.education.year}</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Plan = () => (
  <section id="plan" className="relative py-20 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeading
        eyebrow="If you hire me"
        title="My first 90 days"
        intro="Fresh, data-informed creative for the media buyer every week, and a creative win rate that keeps going up."
      />
      <div className="grid lg:grid-cols-3 gap-5">
        {D.plan.map((p, i) => (
          <motion.div key={p.phase} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass-panel rounded-2xl p-6">
            <p className="font-mono text-xs text-cyan-400 font-semibold">{p.phase}</p>
            <h3 className="mt-1 text-xl font-bold text-white">{p.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="relative py-20 pb-28 scroll-mt-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <motion.div {...fadeUp} className="glass-panel rounded-3xl p-8 sm:p-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Send me the brief</h2>
        <p className="mt-3 text-slate-400 max-w-xl mx-auto">
          Happy to do the paid creative test: three hooks, a 30–60 second video ad script and a static concept for your offer.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
          <a href={`mailto:${D.email}`} className="glass-panel glass-panel-hover rounded-xl p-4 min-w-0">
            <Mail className="w-5 h-5 text-cyan-400" />
            <p className="mt-2 text-xs text-slate-500">Email</p>
            <p className="text-sm text-white font-medium break-all">{D.email}</p>
          </a>
          <a href={`tel:${D.phone.replace(/\s/g, "")}`} className="glass-panel glass-panel-hover rounded-xl p-4">
            <Phone className="w-5 h-5 text-emerald-400" />
            <p className="mt-2 text-xs text-slate-500">{D.phoneNote}</p>
            <p className="text-sm text-white font-medium">{D.phone}</p>
          </a>
          <div className="glass-panel rounded-xl p-4">
            <MapPin className="w-5 h-5 text-violet-400" />
            <p className="mt-2 text-xs text-slate-500">Based in</p>
            <p className="text-sm text-white font-medium">{D.location}</p>
            <p className="text-xs text-slate-400 mt-1">{D.socialHandle}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={D.resumePdfUrl}
            download="Clive_Llora_Resume_Marketing.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-400 text-slate-950 font-bold text-sm"
          >
            <Download className="w-4 h-4" />
            Download my resume
          </a>
          <LoomButton />
        </div>
      </motion.div>
    </div>
  </section>
);

export const MarketingPortfolio = () => (
  <>
    <Navbar />
    <Hero />
    <Fit />
    <Work />
    <Hooks />
    <Process />
    <Experience />
    <Plan />
    <Contact />
  </>
);
