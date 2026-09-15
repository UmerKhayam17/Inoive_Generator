import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AdSlot } from "@/components/layout/AdSlot";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { InvoiceGenerator } from "@/components/invoice/InvoiceGenerator";
import { getLocale } from "@/data/locales";
import { SITE } from "@/data/site";

const locale = getLocale("pakistan")!;

const TITLE = "Invoice Generator Pakistan — Free PKR Invoice with NTN & STRN";
const DESCRIPTION =
  "Free invoice generator for Pakistan. Create a PKR invoice with NTN and STRN fields, add GST, and download a print-ready PDF. No signup, no watermark.";

const FAQS = [
  {
    q: "Can I create a PKR invoice without signing up?",
    a: "Yes. This page opens a Pakistan-ready generator in your browser. Set PKR, fill NTN and STRN, add line items and download a PDF. Nothing is uploaded to our servers.",
  },
  {
    q: "What is an NTN on a Pakistani invoice?",
    a: "NTN is your National Tax Number issued through FBR. Registered suppliers normally print it on invoices so the buyer can verify who issued the bill. Enter it in the NTN field; it prints on the PDF next to your business details.",
  },
  {
    q: "What is an STRN?",
    a: "STRN is the Sales Tax Registration Number. If you are registered for sales tax, show it on invoices where the supply is taxable. Unregistered suppliers should leave STRN blank rather than inventing a number.",
  },
  {
    q: "Does this file invoices with FBR or IRIS?",
    a: "No. This tool produces a professional PDF for you to send to the client. It does not submit e-invoices to FBR, PRAL or IRIS. Digital invoicing rules change — confirm current filing requirements with your tax advisor.",
  },
  {
    q: "Should I charge 18% GST on every invoice?",
    a: "No. The generator defaults to 18% as a common federal GST rate on many goods, but services can fall under provincial sales tax (Sindh SRB, Punjab PRA, KP, Balochistan) at different rates — or be exempt. Change the rate to match your supply, or set it to 0 if tax is not applicable.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "invoice generator Pakistan",
    "invoice generator PKR",
    "NTN invoice generator",
    "STRN invoice format",
    "free invoice generator Pakistan",
  ],
  alternates: { canonical: locale.path },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: locale.path,
  },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function PakistanInvoicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Pakistan Invoice Generator (PKR, NTN, STRN)",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any (web browser)",
        url: `${SITE.url}${locale.path}`,
        description: DESCRIPTION,
        offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
        isAccessibleForFree: true,
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      breadcrumbSchema([
        { name: "Home", item: `${SITE.url}/` },
        { name: "Invoice generator", item: `${SITE.url}/invoice-generator` },
        { name: "Pakistan", item: `${SITE.url}${locale.path}` },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-[96rem] px-3 py-10 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Pakistan · PKR
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
            Free invoice generator for Pakistan
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Build a PKR invoice with NTN and STRN on the PDF — not a US dollar template with
            “Pakistan” written at the top. Download instantly. No account, no watermark.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#generator">Create a PKR invoice</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/invoice-templates">Browse templates</Link>
            </Button>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li>Currency locked to PKR by default</li>
            <li>NTN + STRN fields print on the PDF</li>
            <li>GST rate you control (default 18%)</li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-[96rem] px-4 pt-10 sm:px-6 lg:px-8">
        <AdSlot id="pk-below-hero" format="leaderboard" />
      </div>

      <article className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="prose-invoice max-w-3xl">
            <h2>What a Pakistan invoice actually needs</h2>
            <p>
              Pakistani clients and accounts teams look for the same commercial fields as anywhere
              else — who billed whom, what was supplied, the invoice number, dates, and a total in
              a currency they can pay. They also look for tax identifiers that a generic “invoice
              generator” often hides behind a single “Tax ID” label.
            </p>
            <p>
              This page pre-fills <strong>Pakistani Rupee (PKR)</strong>, labels the seller and
              buyer tax fields as <strong>NTN</strong> (National Tax Number) and{" "}
              <strong>STRN</strong> (Sales Tax Registration Number), and starts the tax rate at 18%
              so you can edit it instead of hunting for a percentage box.
            </p>

            <h2>NTN vs STRN — which number goes where</h2>
            <p>
              <strong>NTN</strong> identifies you (or your company) as a taxpayer with the Federal
              Board of Revenue. Put your NTN on the “from” side. If you know the client’s NTN, add
              it on the “bill to” side — useful for B2B work and for the buyer’s own records.
            </p>
            <p>
              <strong>STRN</strong> is separate: it is the sales-tax registration, used when the
              supply is within the sales-tax net. If you are not sales-tax registered, leave STRN
              empty. Do not copy someone else’s number or type a placeholder onto a live invoice.
            </p>

            <h2>GST, provincial sales tax, and this generator</h2>
            <p>
              Federal GST on many goods has commonly been charged at 18%, which is why the tax
              field defaults there. That is a starting point, not a ruling. Services billed from
              Sindh, Punjab and other provinces may instead attract <em>provincial</em> sales tax
              at a different rate, with a different registration. Zero-rated and exempt supplies
              should show 0% tax and, if your accountant requires it, a short note in the terms
              box explaining why tax is not charged.
            </p>
            <p>
              {SITE.name} does not file returns, generate FBR e-invoices, or tell you which rate
              applies to your contract. Change the rate on every invoice until it matches the
              advice you already follow.
            </p>

            <h2>PKR, numbering, and getting paid</h2>
            <p>
              Keep the invoice in PKR when the contract is in rupees. If you agreed USD or another
              currency, switch the currency dropdown — do not write “USD” in the description while
              the total still shows ₨. Use a unique invoice number (year + sequence is enough for
              most freelancers). Put your bank title, account number and IBAN in the notes so the
              client does not have to email you for payment details.
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">Fields this page adds</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">PKR</strong> — totals and the PDF use rupees
                unless you change currency.
              </li>
              <li>
                <strong className="text-foreground">NTN</strong> — prints on both seller and client
                blocks when filled.
              </li>
              <li>
                <strong className="text-foreground">STRN</strong> — second tax line, not jammed into
                a generic VAT field.
              </li>
              <li>
                <strong className="text-foreground">Sales tax %</strong> — editable; 18% is only the
                default.
              </li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              General information only — not tax, legal or FBR filing advice.
            </p>
          </aside>
        </div>

        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-extrabold">Pakistan invoice FAQs</h2>
          <Accordion type="single" collapsible className="mt-6">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`pk-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </article>

      <div id="generator">
        <Suspense
          fallback={
            <div className="mx-auto max-w-[96rem] px-4 py-16 text-sm text-muted-foreground">
              Loading Pakistan invoice generator…
            </div>
          }
        >
          <InvoiceGenerator
            localeSlug="pakistan"
            heading="Create your Pakistan invoice"
            titleAs="h2"
            lead="PKR, NTN and STRN are ready. Edit the GST rate to match this supply, then download the PDF. Drafts for this page stay in this browser only."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Invoice generator", href: "/invoice-generator" },
              { label: "Pakistan" },
            ]}
          />
        </Suspense>
      </div>
    </>
  );
}
