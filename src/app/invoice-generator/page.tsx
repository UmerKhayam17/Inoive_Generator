import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { InvoiceGenerator } from "@/components/invoice/InvoiceGenerator";
import { AdSlot } from "@/components/layout/AdSlot";
import { SITE } from "@/data/site";
import { TEMPLATE_COUNT } from "@/data/templates";
import { absoluteUrl, digitalOffer, schemaImages, canonicalFor, siteLogoUrl } from "@/lib/seo";

const TITLE = `Free Invoice Generator — Live Preview & Instant PDF | ${SITE.name}`;
const DESCRIPTION = `Fill in your details, add line items and download a print-ready PDF invoice. Live calculations, logo and signature upload, ${TEMPLATE_COUNT} templates and automatic local autosave.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: canonicalFor("/invoice-generator") },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: canonicalFor("/invoice-generator"),
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
  url: absoluteUrl("/invoice-generator"),
  image: schemaImages(siteLogoUrl()),
  offers: digitalOffer({ url: absoluteUrl("/invoice-generator") }),
  isAccessibleForFree: true,
};

const GENERATOR_FAQS = [
  {
    q: "Is this invoice generator really free?",
    a: "Yes. Creating, downloading and printing invoices is free with no limit on the number of invoices, no watermark added by us and no paid tier behind the download button.",
  },
  {
    q: "Do I need to sign up or create an account?",
    a: "No. Open the generator and start typing. There is no login, and we never ask for your email to download the PDF.",
  },
  {
    q: "Where is my invoice data saved?",
    a: "In your own browser's local storage on this device. It is not uploaded to our servers. Clearing your browser data, or using a private window, removes it, so keep a copy of every PDF you send.",
  },
  {
    q: "Can I create an invoice on my phone?",
    a: "Yes. The generator works in mobile browsers on Android and iPhone. On small screens the form and preview stack vertically, and the PDF download works the same way.",
  },
  {
    q: "Can I show a deposit or partial payment?",
    a: "Yes. Enter the amount already received in the amount paid field. The invoice shows the total, the amount paid and the remaining balance due.",
  },
  {
    q: "Can I use these invoices for tax purposes?",
    a: "You can add your tax registration numbers, tax rate and the details your tax authority requires. Whether an invoice is compliant depends on your registration and local rules, so check them for your country.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GENERATOR_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function InvoiceGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
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

      <section aria-labelledby="generator-guide" className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <article className="prose-invoice">
            <h2 id="generator-guide">A free invoice generator that works the way you bill</h2>
            <p>
              This invoice generator turns the details of a job into a professional PDF invoice in a
              couple of minutes. Fill in the form and the preview updates as you type: line totals,
              discounts, tax, shipping, amounts already paid and the balance due are all calculated
              for you, so the figures your client sees always add up. When it looks right, download
              the PDF and send it from your own email.
            </p>
            <p>
              There is no account, no trial and no watermark. Your invoice is saved in your own
              browser, so you can close the tab and pick up where you left off — and nothing you
              type is uploaded to our servers.
            </p>

            <h2>How to create an invoice, step by step</h2>
            <ol>
              <li>
                <strong>Add your business details.</strong> Use your legal or trading name, address,
                email and, if you are registered, your tax number. Upload a logo if you have one.
              </li>
              <li>
                <strong>Add your client&apos;s details.</strong> Bill the legal entity that pays you
                — for companies, that is often different from the person who hired you.
              </li>
              <li>
                <strong>Set the invoice number and dates.</strong> Use a unique, sequential number
                such as 2026-0041, the issue date, and a specific due date. Add the client&apos;s PO
                number if they gave you one.
              </li>
              <li>
                <strong>List what you are charging for.</strong> One line per product, service or
                period, with quantity and rate. For hourly work, enter the hours as the quantity —
                decimals such as 7.5 work.
              </li>
              <li>
                <strong>Apply tax, discount and shipping.</strong> Enter your tax rate, a percentage
                or fixed discount, and any shipping or delivery charge. If the client paid a
                deposit, enter it as the amount paid to show the remaining balance.
              </li>
              <li>
                <strong>Add notes and terms.</strong> Payment instructions, bank details, late
                payment terms or a thank-you note.
              </li>
              <li>
                <strong>Choose a template and download.</strong> Switch between all {TEMPLATE_COUNT}{" "}
                designs without re-typing anything, then download the PDF or print.
              </li>
            </ol>
            <p>
              New to invoicing? Our guide on{" "}
              <Link href="/blog/how-to-create-an-invoice">how to create an invoice</Link> explains
              every field in detail, and the <Link href="/user-guide">user guide</Link> walks
              through each control in the generator.
            </p>

            <h2>What you can put on your invoice</h2>
            <ul>
              <li>Business logo, accent colour and optional signature image</li>
              <li>
                Your details and your client&apos;s, including two tax registration numbers each
              </li>
              <li>Invoice number, issue date, due date and purchase order number</li>
              <li>Unlimited line items with quantity, rate and automatic line totals</li>
              <li>Tax rate, percentage or fixed discount, shipping and amount already paid</li>
              <li>Notes and payment terms</li>
              <li>An optional watermark such as &quot;PAID&quot; or &quot;DRAFT&quot;</li>
              <li>Custom typography: font family, size and emphasis</li>
              <li>Eight currencies: USD, EUR, GBP, INR, AUD, CAD, AED and PKR</li>
            </ul>

            <h2>Invoices for your country</h2>
            <p>
              Tax labels differ from country to country, so we offer presets with the right currency
              and registration fields: <Link href="/invoice-generator/pakistan">Pakistan</Link>{" "}
              (PKR, NTN and STRN), <Link href="/invoice-generator/uae">UAE</Link> (AED and TRN),{" "}
              <Link href="/invoice-generator/uk">UK</Link> (GBP and VAT number) and the{" "}
              <Link href="/invoice-generator/usa">USA</Link> (USD, EIN and sales tax). For the rules
              behind them, read our guides to{" "}
              <Link href="/blog/sales-tax-invoice-pakistan">sales tax invoices in Pakistan</Link>,{" "}
              <Link href="/blog/uae-vat-invoice-requirements">UAE VAT invoices</Link> and{" "}
              <Link href="/blog/sole-trader-invoice-uk">invoicing as a UK sole trader</Link>.
            </p>

            <h2>Tips for an invoice that gets paid quickly</h2>
            <ul>
              <li>
                Write line items a stranger could approve: what was delivered, when, and any
                reference number.
              </li>
              <li>
                Give a real due date (&quot;Due 23 October 2026&quot;), not just &quot;Net 14&quot;.
              </li>
              <li>Put complete payment details in the notes so the PDF is self-contained.</li>
              <li>Send the invoice the day the work is done, not at the end of the month.</li>
            </ul>
            <p>
              More ideas in <Link href="/blog/how-to-get-paid-faster">how to get paid faster</Link>,{" "}
              <Link href="/blog/invoice-payment-terms">payment terms explained</Link> and{" "}
              <Link href="/blog/common-invoice-mistakes">common invoice mistakes</Link>.
            </p>

            <h2>Frequently asked questions</h2>
            {GENERATOR_FAQS.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}

            <h2>Important tax information</h2>
            <p>
              Tax, GST, VAT, and other invoicing requirements vary by country and jurisdiction. The
              information provided by {SITE.name} is for general informational purposes and should
              not be treated as professional tax, accounting, or legal advice. Always verify
              applicable requirements with the relevant tax authority or a qualified professional.
              See also our <Link href="/faq">FAQ</Link> and{" "}
              <Link href="/disclaimer">Disclaimer</Link>.
            </p>
          </article>

          <AdSlot id="generator-below-content" format="leaderboard" className="mt-10" />
        </div>
      </section>
    </>
  );
}
