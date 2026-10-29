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
    version: "2026-10-29",
    referenceSite: "https://radiantzmanufacturing.com/",
    included: [
      {
        title: "Brand website",
        billing: "Included in the build fee",
        items: [
          "Sections patterned after radiantzmanufacturing.com",
          "Product catalog pages for your brand's lines",
          "Structured inquiry form with automatic lead scoring (hot, warm, cold)",
          "Mobile-friendly, hosted on Vercel",
        ],
      },
      {
        title: "Domain",
        billing: "At cost, paid by you",
        items: [
          "Domain registration at cost, with no markup",
          "The domain is registered in your company's name",
          "Renewal is your responsibility",
        ],
      },
      {
        title: "CRM",
        billing: "Subscription, around ₱450 / month, billed separately",
        items: [
          "Inquiry tracking from first contact to purchase order",
          "Quotation builder",
          "Purchase orders submitted by your customers",
          "Payment terms selectable per deal: full payment, downpayment, or cash on delivery",
          "Payment proof upload, verified by your accounting team before an order can be completed",
          "Order status visible to your customers, including Production and an estimated timeline",
          "Job order printed or sent to a Production Manager portal when a PO moves to production",
          "Admin dashboard showing collected sales for today, this month, or a custom date range",
          "Roles and permissions for admin, customer and team members, with custom roles",
          "Email notifications",
        ],
      },
    ],
    notIncluded: [
      "Online payment gateway (payments are bank transfer with proof upload only)",
      "Batch and production tracking",
      "FDA compliance tracking",
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
