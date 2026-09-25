import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { InvoiceGenerator } from "@/components/invoice/InvoiceGenerator";
import { AdSlot } from "@/components/layout/AdSlot";
import { SITE } from "@/data/site";
import { TEMPLATE_COUNT } from "@/data/templates";

const TITLE = `Free Invoice Generator — Live Preview & Instant PDF | ${SITE.name}`;
const DESCRIPTION =
  `Fill in your details, add line items and download a print-ready PDF invoice. Live calculations, logo and signature upload, ${TEMPLATE_COUNT} templates and automatic local autosave.`;

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
  isAccessibleForFree: true,
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

      <section
        aria-labelledby="generator-guide"
        className="border-t border-border bg-muted/30"
      >
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <article className="prose-invoice">
            <h2 id="generator-guide">Free Invoice Generator</h2>
            <p>
              Create professional invoices online for free with our easy-to-use invoice generator.
              Add your business information, customer details, products or services, taxes,
              discounts, shipping charges, payment information, logo, and signature, then download
              your invoice as a PDF.
            </p>
            <p>No account is required to create an invoice.</p>

            <h2>How to Create an Invoice</h2>
            <p>Creating an invoice takes only a few simple steps:</p>
            <ol>
              <li>Enter your business name and contact information.</li>
              <li>Add your customer&apos;s name and contact information.</li>
              <li>Add the products or services you are providing.</li>
              <li>Enter quantities and prices.</li>
              <li>Add tax, discount, or shipping charges if applicable.</li>
              <li>Select an invoice template.</li>
              <li>Review the invoice details.</li>
              <li>Download the completed invoice as a PDF.</li>
            </ol>

            <h2>Invoice Generator Features</h2>

            <h3>Free Invoice Creation</h3>
            <p>
              Create professional invoices without paying for the basic invoice generation service.
            </p>

            <h3>Professional Templates</h3>
            <p>
              Choose from {TEMPLATE_COUNT} invoice templates designed for freelancers, consultants,
              small businesses, agencies, and other professionals. Browse all layouts on our{" "}
              <Link href="/invoice-templates">invoice templates</Link> page.
            </p>

            <h3>PDF Download</h3>
            <p>
              Generate and download your completed invoice as a PDF that can be saved, printed, or
              shared with your customer.
            </p>

            <h3>Tax and Discount Support</h3>
            <p>Add applicable taxes, discounts, and other charges to your invoice.</p>

            <h3>Business Branding</h3>
            <p>
              Add your business logo and other branding information to create a professional-looking
              invoice.
            </p>

            <h3>Multiple Currencies</h3>
            <p>
              Create invoices using different currencies according to your business requirements.
            </p>

            <h3>Mobile-Friendly</h3>
            <p>
              The invoice generator is designed to work on desktop computers, tablets, and mobile
              devices.
            </p>

            <h2>Do I Need an Account?</h2>
            <p>No. You can create an invoice without creating an account.</p>

            <h2>Is the Invoice Generator Free?</h2>
            <p>Yes. The basic invoice generator is available free of charge.</p>

            <h2>Where Is My Invoice Information Stored?</h2>
            <p>
              Where supported by the application, invoice drafts and information may be stored
              locally in your browser. Please review our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> for complete information about data
              handling.
            </p>

            <h2>Who Can Use This Invoice Generator?</h2>
            <p>
              The invoice generator can be used by freelancers, consultants, contractors, small
              businesses, agencies, service providers, and other professionals who need to create
              invoices.
            </p>
            <p>
              For a full walkthrough of every control — templates, typography, country pages, logo,
              watermark, and PDF download — see the{" "}
              <Link href="/user-guide">User Guide</Link>.
            </p>

            <h2>Important Tax Information</h2>
            <p>
              Tax, GST, VAT, and other invoicing requirements vary by country and jurisdiction. The
              information provided by Invoice Creator is for general informational purposes and
              should not be treated as professional tax, accounting, or legal advice.
            </p>
            <p>
              Always verify applicable requirements with the relevant tax authority or a qualified
              professional. See also our <Link href="/faq">FAQ</Link>,{" "}
              <Link href="/about">About</Link> page, and{" "}
              <Link href="/disclaimer">Disclaimer</Link>.
            </p>
          </article>

          <AdSlot id="generator-below-content" format="leaderboard" className="mt-10" />
        </div>
      </section>
    </>
  );
}
