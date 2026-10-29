"use client";

import React, { useMemo, useState } from "react";
import { Check, CheckCircle2, Copy, FileUp, Loader2, Lock, Receipt } from "lucide-react";
import { ONBOARDING, computeTotals, peso } from "@/data/onboardingConfig";

type Status = { kind: "idle" } | { kind: "submitting"; step: string } | { kind: "error"; message: string } | { kind: "done"; reference: string; total: number };

const input =
  "w-full rounded-xl bg-slate-950/70 border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20";
const label = "block text-sm font-semibold text-slate-200 mb-1.5";

const Field = ({ id, text, required, hint, children }: { id: string; text: string; required?: boolean; hint?: string; children: React.ReactNode }) => (
  <div>
    <label htmlFor={id} className={label}>
      {text} {required && <span className="text-cyan-400">*</span>}
    </label>
    {children}
    {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
  </div>
);

const Card = ({ step, title, children }: { step: string; title: string; children: React.ReactNode }) => (
  <section className="glass-panel rounded-2xl p-5 sm:p-8">
    <p className="font-mono text-xs text-cyan-400 font-semibold">{step}</p>
    <h2 className="mt-1 text-xl sm:text-2xl font-bold text-white">{title}</h2>
    <div className="mt-6 space-y-5">{children}</div>
  </section>
);

const Scope = () => (
  <div className="space-y-4">
    {ONBOARDING.scope.included.map((s, i) => (
      <div key={s.title} className="rounded-2xl border border-slate-700 bg-slate-950/50 p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-bold text-white">
            {i + 1}. {s.title}
          </h3>
          <span className="text-xs font-mono text-emerald-400">{s.billing}</span>
        </div>
        {"sections" in s && s.sections && (
          <div className="mt-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Homepage sections</p>
            <ol className="mt-2 grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-slate-300 list-decimal list-inside">
              {s.sections.map((sec) => (
                <li key={sec}>{sec}</li>
              ))}
            </ol>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Also included</p>
          </div>
        )}
        <ul className="mt-3 space-y-2">
          {s.items.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm text-slate-300 leading-relaxed">
              <Check className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export const OnboardingForm = () => {
  const [f, setF] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    preferredDomain: "",
    billingName: "",
    billingAddress: "",
    billingTin: "",
    paymentReference: "",
  });
  const [scopeAccepted, setScopeAccepted] = useState(false);
  const [needsReceipt, setNeedsReceipt] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const totals = useMemo(() => computeTotals(needsReceipt), [needsReceipt]);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const pickFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0] ?? null;
    if (picked && !ONBOARDING.receipt.mimeTypes.includes(picked.type)) {
      setStatus({ kind: "error", message: "Upload a JPG, PNG, WEBP, HEIC or PDF file." });
      return setFile(null);
    }
    if (picked && picked.size > ONBOARDING.receipt.maxBytes) {
      setStatus({ kind: "error", message: "The receipt must be 10 MB or smaller." });
      return setFile(null);
    }
    setStatus({ kind: "idle" });
    setFile(picked);
  };

  const copyAccount = () => {
    navigator.clipboard.writeText(ONBOARDING.bank.accountNumber.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scopeAccepted) return setStatus({ kind: "error", message: "Please confirm you've read the project scope." });
    if (!file) return setStatus({ kind: "error", message: "Please upload your bank transfer receipt." });
    if (!consent) return setStatus({ kind: "error", message: "Please agree to the privacy notice to continue." });

    try {
      setStatus({ kind: "submitting", step: "Uploading your receipt…" });
      const signed = await fetch("/api/onboarding/upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType: file.type, size: file.size }),
      });
      const signedJson = await signed.json();
      if (!signed.ok) throw new Error(signedJson.error);

      const upload = new FormData();
      upload.append("cacheControl", "3600");
      upload.append("", file);
      const put = await fetch(signedJson.signedUrl, { method: "PUT", body: upload, headers: { "x-upsert": "false" } });
      if (!put.ok) throw new Error("The receipt upload failed. Please try again.");

      setStatus({ kind: "submitting", step: "Saving your details…" });
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, scopeAccepted, needsOfficialReceipt: needsReceipt, receiptPath: signedJson.path, consent }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setStatus({ kind: "done", reference: json.reference, total: json.total });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error && err.message ? err.message : "Something went wrong. Please try again." });
    }
  };

  if (status.kind === "done") {
    return (
      <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
        <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white">Thank you, we&apos;ve got everything</h2>
        <p className="mt-3 text-slate-300">
          Your onboarding details and receipt for <strong className="text-white">{peso(status.total)}</strong> are in. We&apos;ll verify the transfer
          and reach out within 1–2 business days to schedule the kickoff call.
        </p>
        <p className="mt-6 text-sm text-slate-400">Your reference number</p>
        <p className="mt-1 font-mono text-2xl font-bold text-cyan-400 break-all">{status.reference}</p>
        <p className="mt-6 text-xs text-slate-500">Please keep this reference for any follow-up about your payment.</p>
      </div>
    );
  }

  const busy = status.kind === "submitting";

  return (
    <form onSubmit={submit} className="space-y-6" noValidate={false}>
      <Card step="Step 1 of 4" title="Your details">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field id="companyName" text="Company name" required>
            <input id="companyName" required className={input} value={f.companyName} onChange={set("companyName")} autoComplete="organization" />
          </Field>
          <Field id="contactName" text="Contact person" required>
            <input id="contactName" required className={input} value={f.contactName} onChange={set("contactName")} autoComplete="name" />
          </Field>
          <Field id="email" text="Email" required>
            <input id="email" type="email" required className={input} value={f.email} onChange={set("email")} autoComplete="email" />
          </Field>
          <Field id="phone" text="Mobile / Viber" required>
            <input id="phone" type="tel" required className={input} value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+63" />
          </Field>
        </div>
        <Field id="preferredDomain" text="Domain you have or want (optional)" hint="We'll confirm availability and the at-cost price with you later.">
          <input id="preferredDomain" className={input} value={f.preferredDomain} onChange={set("preferredDomain")} placeholder="yourbrand.com" />
        </Field>
      </Card>

      <Card step="Step 2 of 4" title="What we'll set up for you">
        <Scope />
        <label className="flex items-start gap-3 rounded-xl border border-cyan-500/40 bg-cyan-500/5 px-4 py-3 text-sm text-slate-200 cursor-pointer">
          <input type="checkbox" checked={scopeAccepted} onChange={(e) => setScopeAccepted(e.target.checked)} className="accent-cyan-500 w-4 h-4 mt-0.5 shrink-0" />
          <span>I&apos;ve read the project scope above and understand what&apos;s included.</span>
        </label>
      </Card>

      <Card step="Step 3 of 4" title="Payment">
        <div className="rounded-2xl border border-slate-700 bg-slate-950/50 p-5 space-y-3">
          <div className="flex justify-between gap-3 text-sm text-slate-300">
            <span>
              {ONBOARDING.packageName} · one-time build fee
              <span className="block text-xs text-emerald-400 font-semibold">{ONBOARDING.priceLabel}</span>
            </span>
            <span className="font-mono text-right shrink-0">
              <span className="block text-xs text-slate-500 line-through">{peso(ONBOARDING.regularAmount)}</span>
              {peso(totals.base)}
            </span>
          </div>
          <label className="flex items-start gap-3 rounded-xl border border-slate-700 px-3.5 py-3 text-sm text-slate-200 cursor-pointer hover:border-slate-500">
            <input type="checkbox" checked={needsReceipt} onChange={(e) => setNeedsReceipt(e.target.checked)} className="accent-cyan-500 w-4 h-4 mt-0.5 shrink-0" />
            <span>
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Receipt className="w-4 h-4 text-cyan-400" /> I need an official receipt
              </span>
              <span className="text-slate-400">Adds {Math.round(ONBOARDING.receiptTaxRate * 100)}% tax to the package price.</span>
            </span>
          </label>
          {needsReceipt && (
            <div className="flex justify-between text-sm text-slate-300">
              <span>Tax ({Math.round(totals.taxRate * 100)}%)</span>
              <span className="font-mono">{peso(totals.tax)}</span>
            </div>
          )}
          <div className="flex justify-between items-baseline pt-3 border-t border-slate-800">
            <span className="font-semibold text-white">Total to transfer</span>
            <span className="font-mono text-2xl font-extrabold text-cyan-400">{peso(totals.total)}</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            {`Includes your first year of domain (if under ₱1,000). Pancake CRM starts on the free version; the ${peso(ONBOARDING.crmMonthly)} / month subscription is billed separately when you move to it.`}
          </p>
        </div>

        {needsReceipt && (
          <div className="grid sm:grid-cols-2 gap-5">
            <Field id="billingName" text="Registered business name for the receipt" required>
              <input id="billingName" required className={input} value={f.billingName} onChange={set("billingName")} />
            </Field>
            <Field id="billingTin" text="TIN" required>
              <input id="billingTin" required className={input} value={f.billingTin} onChange={set("billingTin")} placeholder="000-000-000-00000" />
            </Field>
            <div className="sm:col-span-2">
              <Field id="billingAddress" text="Registered address for the receipt">
                <textarea id="billingAddress" rows={2} className={input} value={f.billingAddress} onChange={set("billingAddress")} />
              </Field>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-[auto,1fr] gap-6 items-center rounded-2xl border border-slate-700 bg-slate-950/50 p-5">
          <img src={ONBOARDING.bank.qrImage} alt={`${ONBOARDING.bank.bankName} InstaPay QR for ${ONBOARDING.bank.accountName}`} className="w-64 sm:w-72 max-w-full h-auto rounded-xl bg-white p-2 mx-auto" />
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-white">Transfer {peso(totals.total)} to:</p>
            <div>
              <p className="text-slate-500 text-xs">Bank</p>
              <p className="text-white font-medium">{ONBOARDING.bank.bankName}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs">Account name</p>
              <p className="text-white font-medium">{ONBOARDING.bank.accountName}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs">Account number</p>
              <button type="button" onClick={copyAccount} className="inline-flex items-center gap-2 font-mono text-lg text-white hover:text-cyan-400">
                {ONBOARDING.bank.accountNumber}
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-500" />}
              </button>
            </div>
            <p className="text-xs text-slate-500">{ONBOARDING.bank.note}</p>
          </div>
        </div>
      </Card>

      <Card step="Step 4 of 4" title="Upload your bank transfer receipt">
        <label
          htmlFor="receipt"
          className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-6 py-10 text-center cursor-pointer transition-colors ${
            file ? "border-emerald-500/60 bg-emerald-500/5" : "border-slate-600 hover:border-cyan-500/60"
          }`}
        >
          {file ? <CheckCircle2 className="w-8 h-8 text-emerald-400" /> : <FileUp className="w-8 h-8 text-slate-400" />}
          <span className="text-sm font-semibold text-white break-all">{file ? file.name : "Tap to upload a screenshot or PDF"}</span>
          <span className="text-xs text-slate-500">JPG, PNG, WEBP, HEIC or PDF · up to 10 MB</span>
          <input id="receipt" type="file" accept={ONBOARDING.receipt.mimeTypes.join(",")} onChange={pickFile} className="sr-only" />
        </label>
        <Field id="paymentReference" text="Transfer reference number" hint="Optional. The reference or transaction number shown on your receipt.">
          <input id="paymentReference" className={input} value={f.paymentReference} onChange={set("paymentReference")} />
        </Field>

        <label className="flex items-start gap-3 text-sm text-slate-300 cursor-pointer">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="accent-cyan-500 w-4 h-4 mt-0.5 shrink-0" />
          <span>
            I agree that the details and receipt I submit will be used only to deliver this project, verify payment and issue
            receipts, in line with the Data Privacy Act of 2012 (RA 10173). I can ask for them to be corrected or deleted by
            emailing clivellora05@gmail.com.
          </span>
        </label>
      </Card>

      {status.kind === "error" && (
        <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-400 px-6 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {busy ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> {status.step}
          </>
        ) : (
          <>Submit onboarding · {peso(totals.total)}</>
        )}
      </button>
      <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
        <Lock className="w-3.5 h-3.5" /> Your details and receipt are stored privately and never shared.
      </p>
    </form>
  );
};
