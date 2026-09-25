import type { LucideIcon } from "lucide-react";
import {
  FileText,
  // Calculator,
  // ClipboardList,
  // Coins,
  // FileSpreadsheet,
  // Hash,
  // Landmark,
  // Percent,
  // PiggyBank,
  // Receipt,
  // Repeat,
  // ShoppingCart,
  // Sparkles,
  // Wallet,
} from "lucide-react";

export interface ToolCard {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  available: boolean;
}

export const TOOLS: ToolCard[] = [
  {
    slug: "invoice-generator",
    name: "Invoice Generator",
    description: "Build and download a professional PDF invoice in under two minutes.",
    icon: FileText,
    available: true,
  },
  // Coming soon — uncomment when ready:
  // {
  //   slug: "quotation-generator",
  //   name: "Quotation Generator",
  //   description: "Send priced quotations that convert into invoices with one click.",
  //   icon: ClipboardList,
  //   available: false,
  // },
  // {
  //   slug: "receipt-generator",
  //   name: "Receipt Generator",
  //   description: "Issue payment receipts once an invoice has been settled.",
  //   icon: Receipt,
  //   available: false,
  // },
  // {
  //   slug: "estimate-generator",
  //   name: "Estimate Generator",
  //   description: "Give clients a clear, non-binding cost estimate before work starts.",
  //   icon: FileSpreadsheet,
  //   available: false,
  // },
  // {
  //   slug: "purchase-order-generator",
  //   name: "Purchase Order Generator",
  //   description: "Raise structured purchase orders for your suppliers.",
  //   icon: ShoppingCart,
  //   available: false,
  // },
  // {
  //   slug: "proforma-invoice-generator",
  //   name: "Proforma Invoice Generator",
  //   description: "Create proforma invoices for advance payments and customs.",
  //   icon: Landmark,
  //   available: false,
  // },
  // {
  //   slug: "gst-calculator",
  //   name: "GST Calculator",
  //   description: "Add or remove GST at any rate with instant net and gross totals.",
  //   icon: Calculator,
  //   available: false,
  // },
  // {
  //   slug: "vat-calculator",
  //   name: "VAT Calculator",
  //   description: "Work out VAT inclusive and exclusive amounts for any rate.",
  //   icon: Percent,
  //   available: false,
  // },
  // {
  //   slug: "sales-tax-calculator",
  //   name: "Sales Tax Calculator",
  //   description: "Calculate US sales tax by rate and see the total charged.",
  //   icon: Coins,
  //   available: false,
  // },
  // {
  //   slug: "currency-converter",
  //   name: "Currency Converter",
  //   description: "Convert invoice amounts between major world currencies.",
  //   icon: Repeat,
  //   available: false,
  // },
  // {
  //   slug: "profit-margin-calculator",
  //   name: "Profit Margin Calculator",
  //   description: "Check margin, markup and break-even before you quote.",
  //   icon: PiggyBank,
  //   available: false,
  // },
  // {
  //   slug: "business-name-generator",
  //   name: "Business Name Generator",
  //   description: "Brainstorm available-sounding names for a new venture.",
  //   icon: Sparkles,
  //   available: false,
  // },
  // {
  //   slug: "invoice-number-generator",
  //   name: "Invoice Number Generator",
  //   description: "Generate sequential, prefixed invoice numbers that never clash.",
  //   icon: Hash,
  //   available: false,
  // },
  // {
  //   slug: "expense-tracker",
  //   name: "Expense Tracker",
  //   description: "Log business expenses and see where the money actually goes.",
  //   icon: Wallet,
  //   available: false,
  // },
];
