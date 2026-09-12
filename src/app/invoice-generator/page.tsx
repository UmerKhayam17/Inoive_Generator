import type { Metadata } from "next";
import { Suspense } from "react";
import { InvoiceGenerator } from "@/components/invoice/InvoiceGenerator";
import { SITE } from "@/data/site";

const TITLE = `Free Invoice Generator — Live Preview & Instant PDF | ${SITE.name}`;
const DESCRIPTION =
  "Fill in your details, add line items and download a print-ready PDF invoice. Live calculations, logo and signature upload, 18 templates and automatic local autosave.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/invoice-generator" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/invoice-generator",
  },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: `${SITE.name} Invoice Generator`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any (web browser)",
  description: DESCRIPTION,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function InvoiceGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense
        fallback={
          <div className="mx-auto max-w-[96rem] px-4 py-16 text-sm text-muted-foreground">
            Loading invoice generator…
          </div>
        }
      >
        <InvoiceGenerator />
      </Suspense>
    </>
  );
}
