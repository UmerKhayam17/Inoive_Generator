import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Compass, HeartHandshake, Rocket, ShieldCheck, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

const values = [
  {
    icon: ShieldCheck,
    title: "Privacy by architecture",
    body: "The generator runs in your browser. We could not read your invoices even if we wanted to — there is no server to send them to.",
  },
  {
    icon: HeartHandshake,
    title: "Free means free",
    body: "No trial, no credit card, no watermark, no export limit. Advertising keeps the lights on so the tool can stay open to everyone.",
  },
  {
    icon: Award,
    title: "Documents that get paid",
    body: "Every template is designed around how accounts-payable teams actually read invoices, not around what looks good in a screenshot.",
  },
  {
    icon: Rocket,
    title: "Built to expand",
    body: "The invoice generator is the first of a planned suite of free business tools for quotes, receipts, estimates and tax maths.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "A frustrating Friday afternoon",
    body: "Our founder spent two hours fighting a spreadsheet template to bill a €900 project — and decided invoicing should not cost anyone an afternoon.",
  },
  {
    year: "2024",
    title: "First public version",
    body: "A single-template, browser-only invoice builder shipped to a handful of freelance friends. No accounts, no database, no analytics.",
  },
  {
    year: "2025",
    title: "Ten templates and a knowledge base",
    body: "We added the full template library, currency support, tax and discount handling, and began publishing practical invoicing guides.",
  },
  {
    year: "2026",
    title: "Toward a free business toolkit",
    body: "Quotation, receipt and estimate generators plus GST, VAT and margin calculators are in development — all with the same client-side promise.",
  },
];

export const Route = createFileRoute("/about")({
  component: Page,
  head: () => ({
    meta: [
      { title: `About ${SITE.name} — Free Invoicing Tools for Small Business` },
      {
        name: "description",
        content:
          "Meet the team behind InvoiceForge: why we built a free, privacy-first invoice generator and where the product is heading next.",
      },
      { property: "og:title", content: `About ${SITE.name}` },
      {
        property: "og:description",
        content: "Our story, mission and roadmap for free, privacy-first business tools.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Invoicing shouldn't cost you an afternoon — or a subscription"
        lead="InvoiceForge is a small, independent team building free business tools that respect your time and your data."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <article className="prose-invoice">
            <h2>Our story</h2>
            <p>
              Most invoicing software is built for companies with an accounts department. If you are
              a freelancer, a two-person studio or a shop owner, you do not need workflow automation
              and seat-based pricing — you need a clean PDF with the right fields on it, today.
            </p>
            <p>
              We started {SITE.name} because every &quot;free&quot; invoice generator we tried
              eventually asked for a card, stamped a watermark on the download, or quietly uploaded
              customer data to a server. So we built the opposite: a generator that never leaves
              your browser, never asks who you are, and never charges for a download.
            </p>

            <h2>Our mission</h2>
            <p>
              To make professional, compliant business paperwork free and effortless for every
              independent worker and small business on the internet.
            </p>

            <h2>Our vision</h2>
            <p>
              A complete suite of free, privacy-first business tools — invoices, quotes, receipts,
              estimates, purchase orders and tax calculators — that a small business can run on
              without ever entering a credit card number.
            </p>

            <h2>Why choose us</h2>
            <ul>
              <li>Ten professionally designed, print-tested invoice templates.</li>
              <li>Real-time calculations with discount, tax, shipping and multi-currency support.</li>
              <li>Instant PDF download and print, with no watermark and no export cap.</li>
              <li>Nothing uploaded: drafts live in your own browser storage.</li>
              <li>A growing library of practical invoicing and tax guides.</li>
            </ul>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <Users className="size-6 text-primary" aria-hidden="true" />
              <p className="mt-4 font-display text-3xl font-extrabold">120,000+</p>
              <p className="text-sm text-muted-foreground">invoices generated since launch</p>
              <p className="mt-5 font-display text-3xl font-extrabold">10</p>
              <p className="text-sm text-muted-foreground">professional templates included</p>
              <p className="mt-5 font-display text-3xl font-extrabold">$0</p>
              <p className="text-sm text-muted-foreground">the price, permanently</p>
            </div>
            <AdSlot id="about-sidebar" format="rectangle" />
          </aside>
        </div>

        <section aria-labelledby="values" className="mt-20">
          <h2 id="values" className="text-2xl font-bold sm:text-3xl">
            What we care about
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <v.icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="timeline" className="mt-20">
          <h2 id="timeline" className="flex items-center gap-2 text-2xl font-bold sm:text-3xl">
            <Compass className="size-6 text-primary" aria-hidden="true" /> Our timeline
          </h2>
          <ol className="mt-8 border-l border-border pl-6">
            {timeline.map((t) => (
              <li key={t.year} className="relative pb-9 last:pb-0">
                <span
                  className="absolute -left-[31px] top-1 grid size-5 place-items-center rounded-full border-4 border-background bg-primary"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {t.year}
                </p>
                <h3 className="mt-1 text-lg font-bold">{t.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-16 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/invoice-generator">Create a free invoice</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Talk to us</Link>
          </Button>
        </div>
      </div>
    </>
  );
}