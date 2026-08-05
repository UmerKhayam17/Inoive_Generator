import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOME_FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";

const EXTRA_FAQS = [
  {
    q: "Can I use these invoices for legal or tax purposes?",
    a: "The invoices include every field normally required, but requirements differ by country. Check with your accountant and read our tax, GST and VAT guides before relying on a document for compliance.",
  },
  {
    q: "Does the PDF include a watermark or branding?",
    a: "No. The downloaded PDF contains only your content and your branding.",
  },
  {
    q: "Will my draft survive a page refresh?",
    a: "Yes. Your draft is auto-saved to local storage on every change and restored when you return in the same browser.",
  },
  {
    q: "Can I use the generator on a phone or tablet?",
    a: "Yes. The editor and the live preview are fully responsive, and PDF download works on modern mobile browsers.",
  },
  {
    q: "Do you plan to add more free tools?",
    a: "Yes — quotation, receipt, estimate and purchase order generators plus GST, VAT and sales tax calculators are on the roadmap. See the tools page.",
  },
  {
    q: "How do you make money if everything is free?",
    a: "The site is supported by unobtrusive advertising. We never charge for the generator and never gate downloads.",
  },
];

const ALL = [...HOME_FAQS, ...EXTRA_FAQS];

export const Route = createFileRoute("/faq")({
  component: Page,
  head: () => ({
    meta: [
      { title: `Invoice Generator FAQ — ${SITE.name}` },
      {
        name: "description",
        content:
          "Answers to the most common questions about our free invoice generator: pricing, signup, data storage, templates, currencies, tax and PDF downloads.",
      },
      { property: "og:title", content: `Invoice Generator FAQ — ${SITE.name}` },
      {
        property: "og:description",
        content: "Everything people ask about creating free PDF invoices online.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: ALL.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Help centre"
        title="Frequently Asked Questions"
        lead="Everything you might want to know about creating free invoices with InvoiceForge."
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <AdSlot id="faq-top" format="leaderboard" className="mb-10" />
        <Accordion type="single" collapsible className="w-full">
          {ALL.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-elegant">
          <h2 className="text-xl font-bold">Still have a question?</h2>
          <p className="mt-2 text-muted-foreground">
            We answer every message within one business day.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link to="/contact">Contact us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/invoice-generator">Try the generator</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}