import type { LucideIcon } from "lucide-react";
import {
  FileText,
  LayoutTemplate,
  BookOpen,
  Flag,
  Building2,
  Landmark,
  MapPinned,
} from "lucide-react";

export interface ToolCard {
  slug: string;
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  available: boolean;
  group: "core" | "locale" | "learn";
}

/** Live tools and locale generators already on the site — /tools is a hub, not a single card. */
export const TOOLS: ToolCard[] = [
  {
    slug: "invoice-generator",
    name: "Invoice Generator",
    description:
      "Build a professional PDF invoice with live preview, tax, discounts, logo and payment notes. Runs in your browser — no account.",
    href: "/invoice-generator",
    icon: FileText,
    available: true,
    group: "core",
  },
  {
    slug: "invoice-templates",
    name: "Invoice Template Library",
    description:
      "Browse industry layouts, compare styles, then open any template in the generator with one click.",
    href: "/invoice-templates",
    icon: LayoutTemplate,
    available: true,
    group: "core",
  },
  {
    slug: "user-guide",
    name: "Invoice User Guide",
    description:
      "Step-by-step help for fields, taxes, numbering, PDF download and common invoicing mistakes.",
    href: "/user-guide",
    icon: BookOpen,
    available: true,
    group: "learn",
  },
  {
    slug: "invoice-generator-pakistan",
    name: "Pakistan Invoice Generator",
    description:
      "PKR defaults with NTN and STRN labels for freelancers and small businesses in Pakistan.",
    href: "/invoice-generator/pakistan",
    icon: Flag,
    available: true,
    group: "locale",
  },
  {
    slug: "invoice-generator-uae",
    name: "UAE Invoice Generator",
    description: "AED defaults with TRN fields suited to UAE VAT-registered suppliers.",
    href: "/invoice-generator/uae",
    icon: Building2,
    available: true,
    group: "locale",
  },
  {
    slug: "invoice-generator-uk",
    name: "UK Invoice Generator",
    description: "GBP defaults with VAT number fields for UK sole traders and limited companies.",
    href: "/invoice-generator/uk",
    icon: Landmark,
    available: true,
    group: "locale",
  },
  {
    slug: "invoice-generator-usa",
    name: "USA Invoice Generator",
    description: "USD defaults with EIN and state tax ID fields for US freelancers and LLCs.",
    href: "/invoice-generator/usa",
    icon: MapPinned,
    available: true,
    group: "locale",
  },
];
