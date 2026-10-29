// Package, pricing and payment details for /onboarding.
// The API recomputes the totals from this file; never trust amounts sent by the browser.

export const ONBOARDING = {
  packageName: "Custom Website + CRM",
  baseAmount: 50000,
  // Added only when the client asks for an official receipt.
  receiptTaxRate: 0.12,
  currency: "PHP",

  bank: {
    bankName: "MariBank",
    accountName: "Clive Christopher Llora",
    accountNumber: "1553 3054 075",
    qrImage: "/payments/maribank-instapay-qr.png",
    note: "InstaPay QR works from any bank or e-wallet. Your bank may charge a transfer fee.",
  },

  pages: [
    "Home",
    "About the company",
    "Products / Services",
    "Manufacturing capabilities & facility",
    "Certifications (FDA, GMP, ISO)",
    "Private-label / toll manufacturing process",
    "Request a quote form",
    "Contact",
    "Blog / News",
    "Careers",
  ],

  crmNeeds: [
    "Lead capture & sales pipeline",
    "Quote / inquiry management",
    "Client accounts & contact records",
    "Order & production tracking",
    "Product formulation / sample tracking",
    "Inventory",
    "Email or SMS notifications",
    "Reports & dashboard",
  ],

  receipt: {
    bucket: "payment-receipts",
    maxBytes: 10 * 1024 * 1024,
    mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif", "application/pdf"],
  },
};

export function computeTotals(needsOfficialReceipt: boolean) {
  const base = ONBOARDING.baseAmount;
  const taxRate = needsOfficialReceipt ? ONBOARDING.receiptTaxRate : 0;
  const tax = Math.round(base * taxRate * 100) / 100;
  return { base, taxRate, tax, total: base + tax };
}

export const peso = (n: number) =>
  "₱" + n.toLocaleString("en-PH", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
