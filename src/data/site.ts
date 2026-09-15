export const SITE = {
  name: "Invoice Creator",
  tagline: "Free Invoice Generator",
  description:
    "Create professional invoices online for free. Download high-quality PDF invoices instantly. No signup required.",
  email: "hello@invoicecreator.example",
  phone: "+1 (555) 018-2244",
  address: "244 Meridian Ave, Suite 12, Austin, TX 78701, United States",
  hours: "Monday – Friday, 9:00 – 18:00 (CST)",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nextfreeinvoicegenerator.com",
  social: [
    { label: "X (Twitter)", href: "https://x.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Invoice Generator", href: "/invoice-generator" },
  { label: "Templates", href: "/invoice-templates" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;     
