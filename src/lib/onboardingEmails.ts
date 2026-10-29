import "server-only";
import { ONBOARDING, peso } from "@/data/onboardingConfig";

const FROM = "Clive Llora <onboarding@clivellora.com>";
const OWNER = "clivellora05@gmail.com";

export type Submission = {
  reference: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  preferred_domain: string | null;
  needs_official_receipt: boolean;
  billing_name: string | null;
  billing_tin: string | null;
  billing_address: string | null;
  payment_reference: string | null;
  base_amount: number;
  tax_amount: number;
  total_amount: number;
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const shell = (body: string) => `<!doctype html><html><body style="margin:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#0f172a">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden">
<tr><td style="background:#0f172a;padding:20px 24px;color:#ffffff;font-weight:bold;font-size:16px">Clive Llora · ${esc(ONBOARDING.packageName)}</td></tr>
<tr><td style="padding:24px;font-size:14px;line-height:1.6">${body}</td></tr>
</table></td></tr></table></body></html>`;

const rows = (pairs: [string, string | null | undefined][]) =>
  `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;border-collapse:collapse">${pairs
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 0;color:#64748b;width:42%;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;font-weight:bold">${esc(v!)}</td></tr>`
    )
    .join("")}</table>`;

const amountRows = (s: Submission): [string, string][] => [
  ["Build fee (partner price)", peso(s.base_amount)],
  ...(s.needs_official_receipt ? ([[`Tax (${Math.round(ONBOARDING.receiptTaxRate * 100)}%)`, peso(s.tax_amount)]] as [string, string][]) : []),
  ["Total paid", peso(s.total_amount)],
];

async function send(payload: Record<string, unknown>) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("RESEND_API_KEY not set; skipping onboarding email");
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, ...payload }),
  });
  if (!res.ok) console.error("Resend send failed", res.status, await res.text());
}

export async function sendOnboardingEmails(s: Submission, receiptUrl: string | null) {
  const owner = send({
    to: OWNER,
    reply_to: s.email,
    subject: `New onboarding: ${s.company_name} — ${peso(s.total_amount)} (${s.reference})`,
    html: shell(`
      <p style="margin:0 0 16px;font-size:18px;font-weight:bold">New client onboarding</p>
      ${rows([
        ["Reference", s.reference],
        ["Company", s.company_name],
        ["Contact", s.contact_name],
        ["Email", s.email],
        ["Mobile / Viber", s.phone],
        ["Domain", s.preferred_domain],
        ["Official receipt", s.needs_official_receipt ? "Yes" : "No"],
        ["Receipt name", s.billing_name],
        ["TIN", s.billing_tin],
        ["Receipt address", s.billing_address],
        ["Transfer reference", s.payment_reference],
        ...amountRows(s),
      ])}
      ${
        receiptUrl
          ? `<p style="margin:20px 0 0"><a href="${receiptUrl}" style="display:inline-block;background:#0e7490;color:#ffffff;text-decoration:none;padding:10px 16px;border-radius:8px;font-weight:bold">View bank transfer receipt</a></p>
             <p style="margin:8px 0 0;font-size:12px;color:#64748b">This link expires in 7 days. The receipt stays in Supabase Storage.</p>`
          : ""
      }
      <p style="margin:20px 0 0;font-size:12px;color:#64748b">Verify the transfer in MariBank, then set the status to payment_verified in Supabase.</p>`),
  });

  const client = send({
    to: s.email,
    reply_to: OWNER,
    subject: `We received your payment details — ${s.reference}`,
    html: shell(`
      <p style="margin:0 0 12px">Hi ${esc(s.contact_name)},</p>
      <p style="margin:0 0 16px">Thank you! We've received your onboarding details and bank transfer receipt for the
      <strong>${esc(ONBOARDING.packageName)}</strong> project for <strong>${esc(s.company_name)}</strong>.</p>
      ${rows([["Reference number", s.reference], ...amountRows(s)])}
      <p style="margin:20px 0 8px;font-weight:bold">What happens next</p>
      <ol style="margin:0;padding-left:20px">
        <li>We verify your transfer within 1–2 business days.</li>
        <li>We send you a confirmation${s.needs_official_receipt ? " and your official receipt" : ""}.</li>
        <li>We schedule your kickoff call and collect your brand files and product details.</li>
      </ol>
      <p style="margin:20px 0 0">Questions? Just reply to this email or message +63 995 530 0226 on Viber, WhatsApp or Telegram.</p>
      <p style="margin:16px 0 0">Clive Llora</p>`),
  });

  // Emails are best-effort: a Resend failure must never fail a saved submission.
  await Promise.allSettled([owner, client]);
}
