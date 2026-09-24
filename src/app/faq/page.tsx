import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { TEMPLATE_COUNT } from "@/data/templates";
import { SITE } from "@/data/site";

const ALL = [
  {
    q: "Is the invoice generator free?",
    a: "Yes. Invoice Creator provides a free online invoice generator that allows users to create professional invoices without paying for the basic invoice generation service. There is no trial, no watermark on the PDF, and no premium tier hidden behind the download button.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. You can create an invoice without creating an account. The generator runs entirely in your browser, so you can start typing straight away and download the finished PDF immediately.",
  },
  {
    q: "Can I download my invoice as a PDF?",
    a: "Yes. After completing your invoice, you can download it as a PDF. The downloaded PDF contains only your content and your branding — no watermark.",
  },
  {
    q: "Can I add my company logo?",
    a: "Yes. The invoice generator supports adding business branding such as a company logo where supported by the selected template. Upload a logo image and pick any accent colour; both appear in the live preview and in the downloaded PDF.",
  },
  {
    q: "Can I add taxes and discounts?",
    a: "Yes. You can add applicable taxes, discounts, and other charges to your invoice. Enter a percentage discount, a tax rate and a shipping amount, and the subtotal and grand total recalculate in real time.",
  },
  {
    q: "Can I add a signature?",
    a: "Yes. The invoice generator supports signature information where available in the selected template.",
  },
  {
    q: "Does the invoice generator work on mobile devices?",
    a: "Yes. The website is designed to work on desktop computers, tablets, and mobile devices. The editor and the live preview are fully responsive, and PDF download works on modern mobile browsers.",
  },
  {
    q: "Do I need to install software?",
    a: "No. The invoice generator works through your web browser.",
  },
  {
    q: "Who can use the invoice generator?",
    a: "Freelancers, consultants, contractors, small businesses, agencies, service providers, and other professionals can use the invoice generator.",
  },
  {
    q: "Where is my invoice data stored?",
    a: "Depending on the application's functionality, invoice drafts and information may be stored locally in your browser. Your draft is auto-saved on every change and restored when you return in the same browser. Review our Privacy Policy for complete information. Clearing your browser data removes drafts permanently.",
  },
  {
    q: "Can I create invoices in different currencies?",
    a: "Yes. The invoice generator supports multiple currencies including USD, EUR, GBP, INR, AUD, CAD, AED and PKR. The chosen symbol is applied everywhere on the invoice, including the downloaded PDF.",
  },
  {
    q: "Can I customize my invoice?",
    a: `Yes. You can customize available invoice information, template options (${TEMPLATE_COUNT} professionally designed templates), branding, taxes, discounts, and other supported fields.`,
  },
  {
    q: "Is Invoice Creator a tax or accounting service?",
    a: "No. Invoice Creator provides an invoicing tool and general educational information. It does not provide professional accounting, tax, or legal advice.",
  },
  {
    q: "Are invoices created with this tool legally valid?",
    a: "Invoice requirements vary by country and jurisdiction. Users are responsible for ensuring that their invoices meet applicable legal, tax, and business requirements. Check with your accountant and read our tax, GST and VAT guides before relying on a document for compliance.",
  },
  {
    q: "Will my draft survive a page refresh?",
    a: "Yes. Your draft is auto-saved to local storage on every change and restored when you return in the same browser.",
  },
  {
    q: "How do you make money if everything is free?",
    a: "The site is supported by unobtrusive advertising. We never charge for the generator and never gate downloads.",
  },
];

const TITLE = `Invoice Generator FAQ — ${SITE.name}`;
const DESCRIPTION =
  "Answers to the most common questions about our free invoice generator: pricing, signup, data storage, templates, currencies, tax and PDF downloads.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "Everything people ask about creating free PDF invoices online.",
    type: "website",
    url: "/faq",
  },
  alternates: { canonical: "/faq" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <PageHeader
        eyebrow="Help centre"
        title="Frequently Asked Questions"
        lead="Everything you might want to know about creating free invoices with Invoice Creator."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <AdSlot id="faq-top" format="leaderboard" className="mb-10" />

        {/* Answers are fully visible in the HTML for crawlers — not accordion-only. */}
        <div className="space-y-8">
          {ALL.map((f) => (
            <section key={f.q} className="border-b border-border pb-8 last:border-0">
              <h2 className="text-lg font-bold leading-snug sm:text-xl">{f.q}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.a}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-elegant">
          <h2 className="text-xl font-bold">Still have a question?</h2>
          <p className="mt-2 text-muted-foreground">
            We answer every message within one business day.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/user-guide">Read the user guide</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/invoice-generator">Try the generator</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
