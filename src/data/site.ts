export const SITE = {
  name: "InvoiceForge",
  tagline: "Free Invoice Generator",
  description:
    "Create professional invoices online for free. Download high-quality PDF invoices instantly. No signup required.",
  email: "hello@invoiceforge.example",
  phone: "+1 (555) 018-2244",
  address: "244 Meridian Ave, Suite 12, Austin, TX 78701, United States",
  hours: "Monday – Friday, 9:00 – 18:00 (CST)",
  social: [
    { label: "X (Twitter)", href: "https://x.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Invoice Generator", to: "/invoice-generator" },
  { label: "Templates", to: "/invoice-templates" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;