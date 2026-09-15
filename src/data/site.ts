export const SITE = {
  name: "Invoice Creator",
  tagline: "Free Invoice Generator",
  description:
    "Create professional invoices online for free. Download high-quality PDF invoices instantly. No signup required.",
  email: "support@nextfreeinvoicegenerator.com",
  phone: "+92 3710510083",
  address: "Islamabad, Pakistan",
  hours: "Monday – Friday, 9:00 – 18:00 (PKT)",
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
