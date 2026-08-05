export interface InvoiceTemplate {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string[];
  accent: string;
  surface: string;
  headerStyle: "bar" | "split" | "stacked" | "sidebar" | "minimal";
  dark?: boolean;
  serif?: boolean;
}

export const TEMPLATES: InvoiceTemplate[] = [
  {
    slug: "modern",
    name: "Modern",
    tagline: "Clean lines, confident type, zero clutter.",
    description:
      "The Modern invoice template is the all-rounder: a bold coloured header bar, generous whitespace and a crisp item table. It reads well on screen and prints beautifully in black and white, which makes it a safe default for almost any business.",
    bestFor: ["Freelancers", "Consultants", "SaaS companies"],
    accent: "#2563eb",
    surface: "#ffffff",
    headerStyle: "bar",
  },
  {
    slug: "minimal",
    name: "Minimal",
    tagline: "Just the numbers, beautifully arranged.",
    description:
      "Minimal strips the invoice back to typography and rules. No colour blocks, no boxes — only hierarchy. Ideal when you want the document to feel like stationery rather than software output.",
    bestFor: ["Designers", "Writers", "Photographers"],
    accent: "#111827",
    surface: "#ffffff",
    headerStyle: "minimal",
  },
  {
    slug: "corporate",
    name: "Corporate",
    tagline: "Structured, formal and audit-friendly.",
    description:
      "Corporate uses a two-column billing block, clearly labelled reference fields and a bordered totals panel. It is the template accounts-payable teams like most because every field they need is exactly where they expect it.",
    bestFor: ["Agencies billing enterprises", "Suppliers", "Contractors"],
    accent: "#1e3a5f",
    surface: "#ffffff",
    headerStyle: "split",
  },
  {
    slug: "elegant",
    name: "Elegant",
    tagline: "Serif headings and refined spacing.",
    description:
      "Elegant pairs a serif display face with airy spacing and hairline rules. It suits premium services where the invoice is part of the client experience rather than an afterthought.",
    bestFor: ["Interior designers", "Event planners", "Boutique studios"],
    accent: "#7c5c2e",
    surface: "#fffdf8",
    headerStyle: "stacked",
    serif: true,
  },
  {
    slug: "blue",
    name: "Blue",
    tagline: "Classic blue business invoice.",
    description:
      "A familiar, trustworthy layout with a strong blue header and alternating table rows. Blue is the template most small businesses recognise instantly, which reduces friction when you send it to a new client.",
    bestFor: ["Small businesses", "Trades", "Retail"],
    accent: "#0369a1",
    surface: "#ffffff",
    headerStyle: "bar",
  },
  {
    slug: "dark",
    name: "Dark",
    tagline: "High-contrast header with a modern edge.",
    description:
      "Dark inverts the header into a deep charcoal panel with light type, then keeps the body clean for printing. It looks striking as an attached PDF while staying legible on paper.",
    bestFor: ["Tech studios", "Product teams", "Creative shops"],
    accent: "#0f172a",
    surface: "#ffffff",
    headerStyle: "bar",
    dark: true,
  },
  {
    slug: "startup",
    name: "Startup",
    tagline: "Friendly, rounded and brand-forward.",
    description:
      "Startup leads with your logo and a soft gradient band, then keeps line items conversational. Great when your invoice should feel like the rest of your product, not like a legal document.",
    bestFor: ["Early-stage startups", "Indie makers", "Subscription tools"],
    accent: "#0d9488",
    surface: "#ffffff",
    headerStyle: "stacked",
  },
  {
    slug: "agency",
    name: "Agency",
    tagline: "Project-based billing with a side rail.",
    description:
      "Agency puts invoice metadata into a vertical side rail so the item table gets the full page width — perfect for retainers and multi-line project work with long descriptions.",
    bestFor: ["Marketing agencies", "Dev shops", "Consultancies"],
    accent: "#4338ca",
    surface: "#ffffff",
    headerStyle: "sidebar",
  },
  {
    slug: "creative",
    name: "Creative",
    tagline: "Colour blocks and expressive numbers.",
    description:
      "Creative treats the total as a hero element with an oversized amount due and a colour-blocked header. Use it when you want the invoice to stand out in a crowded inbox.",
    bestFor: ["Illustrators", "Videographers", "Brand designers"],
    accent: "#db2777",
    surface: "#ffffff",
    headerStyle: "split",
  },
  {
    slug: "classic",
    name: "Classic",
    tagline: "The traditional ruled invoice.",
    description:
      "Classic follows the traditional bookkeeping layout: full-width rules, centred title, and a compact totals ladder. It is the safest choice for clients who still file paper.",
    bestFor: ["Accountants", "Wholesalers", "Long-standing businesses"],
    accent: "#374151",
    surface: "#ffffff",
    headerStyle: "minimal",
    serif: true,
  },
];

export const getTemplate = (slug: string) => TEMPLATES.find((t) => t.slug === slug);