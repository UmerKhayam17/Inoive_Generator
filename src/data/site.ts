export const SITE = {
  name: "Invoice Creator",
  tagline: "Free Invoice Generator",
  description:
    "Create professional invoices online for free. Download high-quality PDF invoices instantly. No signup required.",
  email: "hello@nextfreeinvoicegenerator.com",
  hours: "We reply by email, usually within one business day (Monday–Friday).",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nextfreeinvoicegenerator.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Invoice Generator", href: "/invoice-generator" },
  { label: "Templates", href: "/invoice-templates" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
