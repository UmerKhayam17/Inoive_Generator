import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { SalesTaxCalculatorTool } from "@/components/tools/SalesTaxCalculator";
import { SITE } from "@/data/site";
import { EDITORIAL } from "@/data/editorial";
import { absoluteUrl, canonicalFor, pageSocial } from "@/lib/seo";

const TITLE = `Free Sales Tax Calculator | ${SITE.name}`;
const DESCRIPTION =
  "Add or extract sales tax / VAT from an amount instantly. Browser-based calculator for invoice drafts, not tax advice. Confirm your rate before you bill.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: canonicalFor("/tools/sales-tax-calculator") },
  ...pageSocial({
    title: TITLE,
    description: DESCRIPTION,
    url: canonicalFor("/tools/sales-tax-calculator"),
  }),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Sales Tax Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any (web browser)",
  url: absoluteUrl("/tools/sales-tax-calculator"),
  description: DESCRIPTION,
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Free tool"
        title="Sales tax calculator"
        lead="Work out net, tax and gross totals when your rate is known. Use exclusive mode to add tax, or inclusive mode to reverse out tax from a quoted total."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "Sales tax calculator" },
        ]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-8">
        <SalesTaxCalculatorTool />

        <article className="prose-invoice mt-14 max-w-3xl text-muted-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Last reviewed {EDITORIAL.lastReviewed}
          </p>
          <h2 className="text-2xl font-bold text-foreground">Exclusive vs inclusive amounts</h2>
          <p>
            <strong className="text-foreground">Exclusive</strong> means your line items are before
            tax: the calculator adds tax on top.{" "}
            <strong className="text-foreground">Inclusive</strong> means the figure you typed already
            contains tax: the calculator splits net and tax.
          </p>
          <h2 className="text-2xl font-bold text-foreground">Important limitations</h2>
          <ul>
            <li>We do not look up live state or national rates.</li>
            <li>Some goods and services are zero-rated or exempt. This tool cannot decide that.</li>
            <li>
              Country-specific invoice rules (NTN, TRN, VAT numbers) belong on the invoice itself;
              see our <Link href="/blog/tax-invoice-guide">tax invoice guide</Link>.
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-foreground">Apply it on a real invoice</h2>
          <p>
            When you know the rate, open the{" "}
            <Link href="/invoice-generator">invoice generator</Link>, set the tax percentage on the
            form, and download a PDF that matches the live preview.
          </p>
        </article>
      </div>
    </>
  );
}
