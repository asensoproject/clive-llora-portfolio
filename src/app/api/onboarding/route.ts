import { randomBytes } from "crypto";
import { ONBOARDING, computeTotals } from "@/data/onboardingConfig";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

const RECEIPT_PATH = /^\d{4}-\d{2}\/[0-9a-f-]{36}\.(jpg|png|webp|heic|heif|pdf)$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = Record<string, unknown>;

const str = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const list = (v: unknown, allowed: string[]) =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === "string" && allowed.includes(x)) : [];

function reference() {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  return `CL-${ymd}-${randomBytes(3).toString("hex").toUpperCase()}`;
}

export async function POST(request: Request) {
  let p: Payload;
  try {
    p = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const needsReceipt = p.needsOfficialReceipt === true;
  const row = {
    company_name: str(p.companyName, 200),
    contact_name: str(p.contactName, 200),
    contact_position: str(p.contactPosition, 120) || null,
    email: str(p.email, 200).toLowerCase(),
    phone: str(p.phone, 60),
    company_address: str(p.companyAddress, 500) || null,
    current_website: str(p.currentWebsite, 300) || null,
    products: str(p.products, 3000),
    pages: list(p.pages, ONBOARDING.pages),
    crm_needs: list(p.crmNeeds, ONBOARDING.crmNeeds),
    brand_assets_link: str(p.brandAssetsLink, 500) || null,
    target_launch: /^\d{4}-\d{2}-\d{2}$/.test(str(p.targetLaunch, 10)) ? str(p.targetLaunch, 10) : null,
    notes: str(p.notes, 3000) || null,
    billing_name: needsReceipt ? str(p.billingName, 200) : null,
    billing_address: needsReceipt ? str(p.billingAddress, 500) : null,
    billing_tin: needsReceipt ? str(p.billingTin, 40) : null,
    payment_reference: str(p.paymentReference, 120) || null,
    receipt_path: str(p.receiptPath, 200),
  };

  const missing: string[] = [];
  if (!row.company_name) missing.push("company name");
  if (!row.contact_name) missing.push("contact person");
  if (!EMAIL.test(row.email)) missing.push("a valid email");
  if (!row.phone) missing.push("phone number");
  if (!row.products) missing.push("products or services");
  if (needsReceipt && !row.billing_name) missing.push("registered name for the receipt");
  if (needsReceipt && !row.billing_tin) missing.push("TIN for the receipt");
  if (!RECEIPT_PATH.test(row.receipt_path)) missing.push("the bank transfer receipt");
  if (p.consent !== true) missing.push("privacy consent");
  if (missing.length) {
    return Response.json({ error: `Please provide ${missing.join(", ")}.` }, { status: 400 });
  }

  const db = supabaseAdmin();

  // Make sure the receipt was actually uploaded through our signed URL.
  const [folder, file] = row.receipt_path.split("/");
  const { data: found, error: listError } = await db.storage
    .from(ONBOARDING.receipt.bucket)
    .list(folder, { search: file, limit: 1 });
  if (listError || !found?.some((f) => f.name === file)) {
    return Response.json({ error: "We couldn't find your uploaded receipt. Please upload it again." }, { status: 400 });
  }

  const totals = computeTotals(needsReceipt);
  const ref = reference();
  const { error } = await db.from("onboarding_submissions").insert({
    ...row,
    reference: ref,
    package_name: ONBOARDING.packageName,
    base_amount: totals.base,
    needs_official_receipt: needsReceipt,
    tax_rate: totals.taxRate,
    tax_amount: totals.tax,
    total_amount: totals.total,
    consent_at: new Date().toISOString(),
    user_agent: request.headers.get("user-agent")?.slice(0, 300) ?? null,
  });

  if (error) {
    console.error("onboarding insert failed", error);
    return Response.json({ error: "Something went wrong saving your details. Please try again." }, { status: 500 });
  }

  return Response.json({ reference: ref, total: totals.total });
}
