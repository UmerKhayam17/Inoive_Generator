/** Curation signals for AdSense / trust — keep dates real when you ship updates. */
export const EDITORIAL = {
  /** Site-wide “last reviewed” shown on About, What’s new, and home. */
  lastReviewed: "19 October 2026",
  lastReviewedIso: "2026-10-19",
  mission:
    "Help freelancers and small businesses create clear, printable invoices without uploading client data to our servers.",
  standards: [
    {
      title: "Practical first",
      body: "Every guide should help someone complete a real task: fill a field, choose a term, or send a PDF. We avoid filler definitions that do not change what you type on the invoice.",
    },
    {
      title: "Jurisdiction honesty",
      body: "Tax and compliance articles state that rules change and that we are not your accountant. Country tools label tax IDs correctly and keep rates editable.",
    },
    {
      title: "Browser-side privacy",
      body: "Invoice drafts stay in local storage. We do not require accounts to download a PDF. Analytics and ads (when enabled) are separate from invoice content.",
    },
    {
      title: "Maintenance over volume",
      body: "We prefer updating useful pages and shipping working tools over publishing dozens of near-identical articles. Changelog entries document what actually changed.",
    },
  ],
};

export type ChangelogEntry = {
  date: string;
  title: string;
  items: string[];
};

/** Reverse-chronological product / content updates — evidence of ongoing curation. */
export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "2026-10-19",
    title: "Quality and tools update",
    items: [
      "Added free invoice number generator and sales tax calculator tools",
      "Expanded template pages with real billing scenarios and field checklists",
      "Published editorial standards and this What’s new log",
      "Clarified brand (Invoice Creator) vs domain (nextfreeinvoicegenerator.com) on About",
      "Hardened AdSense readiness: no empty ad placeholders; consent-aligned ad loading",
    ],
  },
  {
    date: "2026-10-12",
    title: "Legal and trust pages",
    items: [
      "Updated privacy, cookie, and disclaimer copy for advertising consent",
      "Improved contact flow with copy-to-clipboard fallback",
    ],
  },
  {
    date: "2026-10-01",
    title: "Templates and locale generators",
    items: [
      "Shipped 18 industry invoice templates with live PDF preview",
      "Launched Pakistan, UAE, UK and USA generator presets",
    ],
  },
];
