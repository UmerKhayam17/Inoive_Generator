export interface InvoiceLocale {
  slug: string;
  country: string;
  adjective: string;
  currency: string;
  path: string;
  /** Pre-filled rate the user can change. Not legal advice. */
  defaultTaxRate: number;
  taxRateLabel: string;
  taxIdLabel: string;
  taxIdSecondaryLabel: string;
  taxIdPlaceholder: string;
  taxIdSecondaryPlaceholder: string;
  sampleFromAddress: string;
  sampleToAddress: string;
  sampleItems: { description: string; quantity: number; rate: number }[];
  defaultNotes: string;
  defaultTerms: string;
}

export const LOCALES: InvoiceLocale[] = [
  {
    slug: "pakistan",
    country: "Pakistan",
    adjective: "Pakistani",
    currency: "PKR",
    path: "/invoice-generator/pakistan",
    defaultTaxRate: 18,
    taxRateLabel: "Sales tax / GST (%)",
    taxIdLabel: "NTN",
    taxIdSecondaryLabel: "STRN",
    taxIdPlaceholder: "e.g. 1234567-8",
    taxIdSecondaryPlaceholder: "Sales tax registration no.",
    sampleFromAddress: "Office 12, Plot 45\nShahrah-e-Faisal\nKarachi, Sindh",
    sampleToAddress: "Client office\nJail Road\nLahore, Punjab",
    sampleItems: [
      { description: "Website design — discovery & wireframes", quantity: 1, rate: 85000 },
      { description: "Frontend development (hours)", quantity: 18, rate: 4500 },
    ],
    defaultNotes:
      "Thank you for your business. Please pay in PKR by bank transfer. NTN and STRN are shown above.",
    defaultTerms:
      "Payment due in 14 days. Late payments may incur a fee as agreed in the contract. This invoice is not tax advice — confirm GST/PST with your accountant or FBR.",
  },
];

export function getLocale(slug: string | null | undefined): InvoiceLocale | undefined {
  if (!slug) return undefined;
  return LOCALES.find((l) => l.slug === slug);
}
