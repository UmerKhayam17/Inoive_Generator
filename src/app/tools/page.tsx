import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { TEMPLATES } from "@/data/templates";
import { TOOLS } from "@/data/tools";
import { SITE } from "@/data/site";
import { absoluteUrl, canonicalFor, pageSocial } from "@/lib/seo";

const AVAILABLE = TOOLS.filter((t) => t.available);
const CORE = AVAILABLE.filter((t) => t.group === "core");
const HELPERS = AVAILABLE.filter((t) => t.group === "helpers");
const LOCALE = AVAILABLE.filter((t) => t.group === "locale");
const LEARN = AVAILABLE.filter((t) => t.group === "learn");

const TITLE = `Free Invoicing Tools for Small Businesses | ${SITE.name}`;
const DESCRIPTION = `Free browser-based invoicing tools from ${SITE.name}: PDF invoice generator, invoice number helper, sales tax calculator, ${TEMPLATES.length} templates, and country layouts. No signup.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalFor("/tools") },
  ...pageSocial({
    title: TITLE,
    description: DESCRIPTION,
    url: canonicalFor("/tools"),
  }),
};

const toolsListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${SITE.name} free invoicing tools`,
  description: DESCRIPTION,
  url: absoluteUrl("/tools"),
  itemListElement: AVAILABLE.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    url: absoluteUrl(t.href),
    description: t.description,
  })),
};

function ToolGrid({
  tools,
}: {
  tools: typeof AVAILABLE;
}) {
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map(({ icon: Icon, ...tool }) => (
        <article key={tool.slug} className="rounded-xl border border-border bg-card p-6">
          <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-lg font-bold">{tool.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
          <Button asChild size="sm" className="mt-4">
            <Link href={tool.href}>Open tool</Link>
          </Button>
        </article>
      ))}
    </div>
  );
}

export default function ToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsListLd) }}
      />
      <PageHeader
        eyebrow="Tools"
        title="Free tools for getting paid"
        lead={`${SITE.name} on ${SITE.host} gives freelancers and small businesses browser-based invoicing tools: create PDFs, pick a template, or start with a country-ready layout. Everything runs on your device; no account required.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Tools" }]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-8">
        <AdSlot id="tools-top" format="leaderboard" />

        <section aria-labelledby="core-tools">
          <h2 id="core-tools" className="text-2xl font-bold">
            Core invoicing tools
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground leading-relaxed">
            Start with the generator or browse templates first. Both use the same PDF engine, so
            what you preview is what you download.
          </p>
          <ToolGrid tools={CORE} />
        </section>

        <section aria-labelledby="helper-tools" className="mt-14">
          <h2 id="helper-tools" className="text-2xl font-bold">
            Numbering &amp; tax helpers
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground leading-relaxed">
            Small utilities that support the generator: invent a numbering scheme or check tax maths
            before you lock the PDF. Calculations stay in your browser.
          </p>
          <ToolGrid tools={HELPERS} />
        </section>

        <section aria-labelledby="locale-tools" className="mt-14">
          <h2 id="locale-tools" className="text-2xl font-bold">
            Country invoice generators
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground leading-relaxed">
            Same PDF tool with currency and tax-ID labels matched to common jurisdictions. Tax rates
            are editable defaults, not filing advice. Always confirm local requirements with your
            adviser or tax authority.
          </p>
          <ToolGrid tools={LOCALE} />
        </section>

        <section aria-labelledby="learn-tools" className="mt-14">
          <h2 id="learn-tools" className="text-2xl font-bold">
            Learn while you bill
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground leading-relaxed">
            Prefer a walkthrough before you send your first invoice? The user guide covers every
            field in the form.
          </p>
          <ToolGrid tools={LEARN} />
        </section>

        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold">How these tools work</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {SITE.name} processes invoice data in your browser. Company details, customers, line
            items, logos and totals stay in local storage on your device. They are not uploaded to
            our servers. You can clear drafts anytime by clearing site data in your browser.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              Choose from {TEMPLATES.length} professionally designed templates and preview changes
              live.
            </li>
            <li>Add your logo, business details, client details and tax registration numbers.</li>
            <li>Itemise products or services with quantities, rates, tax and discounts.</li>
            <li>Set invoice numbers, issue dates, due dates and payment terms.</li>
            <li>
              Add payment instructions and terms in the notes so clients know exactly how to pay.
            </li>
            <li>Download a print-ready PDF that matches the on-screen preview.</li>
          </ul>
        </section>

        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold">Who these tools are for</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Freelancers, consultants, agencies, tradespeople and small product businesses who need a
            clean PDF without paying for accounting software. If you already use bookkeeping
            software, you can still use {SITE.name} for one-off invoices, deposits or international
            clients who need a simple document.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We only list tools that work today, including the PDF generator, number helper and tax
            calculator. Quotation and receipt builders will appear here when they ship; we do not
            show empty “coming soon” cards.
          </p>
        </section>

        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold">Guides to help you get paid</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            A good tool is only half the job. These guides cover the decisions around every invoice:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              {
                href: "/blog/how-to-create-an-invoice",
                label: "How to create an invoice, step by step",
              },
              {
                href: "/blog/invoice-payment-terms",
                label: "Invoice payment terms explained: Net 30, due on receipt and more",
              },
              {
                href: "/blog/invoice-numbering-system",
                label: "How to build an invoice numbering system",
              },
              { href: "/blog/payment-reminder-emails", label: "Payment reminder email templates" },
              { href: "/blog/how-to-get-paid-faster", label: "12 proven ways to get paid faster" },
              { href: "/blog/credit-note-guide", label: "When and how to issue a credit note" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="font-medium text-foreground underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
