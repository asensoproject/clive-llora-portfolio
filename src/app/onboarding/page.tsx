import React from "react";
import { GlowBackground } from "@/components/GlowBackground";
import { OnboardingForm } from "@/components/onboarding/OnboardingForm";
import { ONBOARDING, peso } from "@/data/onboardingConfig";

export const metadata = {
  title: "Client Onboarding — Brand Website + CRM",
  description: "Onboarding form for the Brand Website + CRM package.",
  // Sent directly to clients; keep it out of search results.
  robots: { index: false, follow: false },
};

export default function OnboardingPage() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      <GlowBackground />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-24">
        <div className="flex items-center gap-3 mb-10">
          <img src="/clive-llora.jpg" alt="Clive Llora" className="w-11 h-11 rounded-full object-cover object-top border border-cyan-500/40" />
          <div>
            <p className="font-extrabold text-white leading-tight">Clive Llora</p>
            <p className="text-xs text-cyan-300/80">Websites · CRM · Funnels</p>
          </div>
        </div>
        <p className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">Client onboarding</p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">{ONBOARDING.packageName}</h1>
        <p className="mt-4 text-slate-300 leading-relaxed">
          {`Add your details, review what we'll set up, then send the ${peso(ONBOARDING.baseAmount)} partner-price build fee by bank transfer and upload the receipt. It takes about 3 minutes. We'll confirm your payment and schedule the kickoff call.`}
        </p>
        <div className="mt-10">
          <OnboardingForm />
        </div>
      </div>
    </main>
  );
}
