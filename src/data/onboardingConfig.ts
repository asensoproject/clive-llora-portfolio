// Package, pricing and payment details for /onboarding.
// The API recomputes the totals from this file; never trust amounts sent by the browser.

export const ONBOARDING = {
  packageName: "Brand Website + CRM",
  baseAmount: 50000,
  // Shown struck through next to baseAmount.
  regularAmount: 100000,
  priceLabel: "Discounted partner price",
  crmMonthly: 450,
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

  // The fixed scope the client accepts. Bump `version` whenever the wording changes;
  // each submission stores the version it agreed to.
  scope: {
    version: "2026-10-29e",
    included: [
      {
        title: "Brand website",
        billing: "Included in the build fee",
        sections: [
          "Hero with your headline, key numbers and main call-to-action",
          "How it works: step-by-step path from inquiry to launch",
          "Who we help: the types of clients you serve",
          "About your company",
          "Services: what you offer, from idea to shelf",
          "Facility & capabilities: machines, capacity and photos",
          "Product categories you manufacture and private-label",
          "Signature formulations",
          "Quality, certifications & community impact",
          "Location with map",
          "Contact & inquiry form",
        ],
        items: [
          "Product catalog pages for your brand's lines",
          "Structured inquiry form with automatic lead scoring (hot, warm, cold)",
          "Mobile-friendly, hosted on Vercel",
        ],
      },
      {
        title: "Domain",
        billing: "1st year included",
        items: [
          "First year included in the build fee if the domain costs under ₱1,000",
          "Estimated domain cost: less than ₱1,000 per year",
          "A domain costing more than ₱1,000 is billed at cost, with no markup",
          "The domain is registered in your company's name",
          "Yearly renewal is your responsibility",
        ],
      },
      {
        title: "CRM setup on Pancake CRM",
        billing: "Starts free · ₱450 / month subscription",
        items: [
          "We set up Pancake CRM for your company on the FREE version first; the subscription is ₱450 / month when you move to it",
          "Leads from your website inquiry form, Facebook and Instagram collected in one place",
          "Customer segments by status, source and priority, with hot, warm and cold lead scoring",
          "Sales pipeline from first inquiry to closed deal, with interaction history and task reminders",
          "Automated follow-ups: emails, messages or task notifications triggered by customer actions",
          "Conversion data synced back to your Facebook and TikTok ads to lower your cost per lead",
        ],
      },
    ],
  },

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
