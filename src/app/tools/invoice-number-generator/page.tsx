import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { InvoiceNumberGeneratorTool } from "@/components/tools/InvoiceNumberGenerator";
import { SITE } from "@/data/site";
import { EDITORIAL } from "@/data/editorial";
import { absoluteUrl, canonicalFor, pageSocial } from "@/lib/seo";

const TITLE = `Free Invoice Number Generator | ${SITE.name}`;
const DESCRIPTION =
  "Generate sequential, prefixed invoice numbers (e.g. INV-2026-0001) in your browser. Copy a batch, keep numbering unique, then paste into your PDF invoice.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: canonicalFor("/tools/invoice-number-generator") },
  ...pageSocial({
    title: TITLE,
    description: DESCRIPTION,
    url: canonicalFor("/tools/invoice-number-generator"),
  }),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Invoice Number Generator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any (web browser)",
  url: absoluteUrl("/tools/invoice-number-generator"),
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
        title="Invoice number generator"
        lead="Build a simple, collision-resistant numbering scheme (prefix, year and padded sequence), then copy values into the invoice generator. Nothing is uploaded."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "Invoice number generator" },
        ]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-8">
        <InvoiceNumberGeneratorTool />

        <article className="prose-invoice mt-14 max-w-3xl text-muted-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Last reviewed {EDITORIAL.lastReviewed}
          </p>
          <h2 className="text-2xl font-bold text-foreground">Why invoice numbers matter</h2>
          <p>
            Unique invoice numbers let you and your client find a document months later, match
            payments in a bank feed, and satisfy basic bookkeeping. Reusing a number after a PDF has
            been sent creates duplicate references that confuse accounts payable.
          </p>
          <h2 className="text-2xl font-bold text-foreground">A pattern that scales</h2>
          <ul>
            <li>
              <strong className="text-foreground">Prefix</strong>: your brand or document type
              (INV, FEE).
            </li>
            <li>
              <strong className="text-foreground">Year</strong>: optional, helps archives.
            </li>
            <li>
              <strong className="text-foreground">Sequence</strong>: zero-padded so sorting stays
              chronological in folders.
            </li>
          </ul>
          <p>
            Example: <code>INV-2026-0042</code>. When you hit the end of a year, start a new
            sequence or continue globally. Pick one rule and stick to it. Read more in our{" "}
            <Link href="/blog/invoice-numbering-system">invoice numbering guide</Link>.
          </p>
          <h2 className="text-2xl font-bold text-foreground">Next step</h2>
          <p>
            Copy the next number, open the{" "}
            <Link href="/invoice-generator">free invoice generator</Link>, and paste it into the
            invoice number field before you download the PDF.
          </p>
        </article>
      </div>
    </>
  );
}
