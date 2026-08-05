import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Layers,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Wallet,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AdSlot } from "@/components/layout/AdSlot";
import { TEMPLATES } from "@/data/templates";
import { HOME_FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";

const TITLE = `Free Invoice Generator — Create & Download PDF Invoices | ${SITE.name}`;
const DESCRIPTION =
  "Create professional invoices in your browser and download a clean PDF instantly. 10 templates, logo upload, tax and discount calculations, autosave — free, no signup.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              name: `${SITE.name} Invoice Generator`,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Any (web browser)",
              url: "/invoice-generator",
              description: DESCRIPTION,
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            },
            {
              "@type": "FAQPage",
              mainEntity: HOME_FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
});

const FEATURES = [
  {
    icon: Wallet,
    title: "Live totals you can trust",
    body: "Subtotal, discounts, tax and shipping recalculate on every keystroke, so the number your client sees always matches the lines above it.",
  },
  {
    icon: Layers,
    title: "10 professional templates",
    body: "Switch template at any time. The live preview and the downloaded PDF always use the design you picked — nothing shifts on export.",
  },
  {
    icon: Palette,
    title: "Your logo and signature",
    body: "Upload a logo and a signature image once. Both are stored locally in your browser and reused on every future invoice.",
  },
  {
    icon: Download,
    title: "Instant PDF download",
    body: "No email wall, no watermark, no page count limit. Press download and a print-ready A4 PDF lands in your downloads folder.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    body: "Invoice data is saved to your own browser's local storage. Nothing is uploaded, so there is no account to create and nothing to leak.",
  },
  {
    icon: Clock,
    title: "Autosave drafts",
    body: "Close the tab mid-invoice and come back later — your draft, client details and template choice are restored automatically.",
  },
];

const STEPS = [
  {
    title: "Add your details",
    body: "Fill in your business and client information, then set the invoice number and due date. Everything autosaves as you type.",
  },
  {
    title: "List the work",
    body: "Add line items with quantity and rate. Apply tax, a discount or shipping and watch the totals update instantly.",
  },
  {
    title: "Pick a template",
    body: "Try all ten designs in the live preview. The one you select is exactly what your client receives.",
  },
  {
    title: "Download the PDF",
    body: "Hit download for a print-ready A4 PDF, then send it straight from your email client.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I bill six retainer clients a month and this replaced a spreadsheet plus a Word template. The Agency layout with the side rail is exactly what my clients' finance teams wanted.",
    name: "Rosa Delgado",
    role: "Brand consultant, Madrid",
  },
  {
    quote:
      "The autosave saved me twice on a train with flaky wifi. I closed the tab, reopened it and the whole invoice was still there.",
    name: "Tom Whitfield",
    role: "Freelance developer, Manchester",
  },
  {
    quote:
      "Being able to switch templates and see the PDF change straight away means I stopped second-guessing how the invoice looks.",
    name: "Aisha Karim",
    role: "Studio owner, Karachi",
  },
];

const POPULAR = ["modern", "minimal", "corporate", "blue", "elegant", "agency"];

function Home() {
  const popular = POPULAR.map((slug) => TEMPLATES.find((t) => t.slug === slug)).filter(
    (t): t is (typeof TEMPLATES)[number] => Boolean(t),
  );

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <Sparkles className="size-3.5" aria-hidden="true" /> Free forever · No signup
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              The free{" "}
              <span className="text-gradient">invoice generator</span> that downloads a real PDF
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Build a professional invoice in your browser, watch the totals calculate as you type,
              choose from ten templates and download a print-ready PDF in seconds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/invoice-generator">
                  Create your invoice <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/invoice-templates">Browse 10 templates</Link>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["No watermark", "No email required", "Works on mobile", "Data stays local"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-primary" aria-hidden="true" /> {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-elegant">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <FileText className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold">Invoice 2026-0041</p>
                    <p className="text-xs text-muted-foreground">Due in 14 days</p>
                  </div>
                </div>
                <span className="rounded-full bg-accent/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
                  Draft saved
                </span>
              </div>
              <dl className="mt-4 space-y-2 text-sm">
                {[
                  ["Website design — discovery", "$1,200.00"],
                  ["Frontend development · 18 h", "$1,530.00"],
                  ["Tax (8.25%)", "$225.22"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-muted-foreground">
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
                <div className="flex justify-between border-t border-border pt-3 text-base font-bold">
                  <dt>Total due</dt>
                  <dd>$2,955.22</dd>
                </div>
              </dl>
              <Button asChild className="mt-5 w-full">
                <Link to="/invoice-generator">
                  <Download className="mr-1 size-4" aria-hidden="true" /> Download PDF
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <AdSlot id="home-below-hero" format="leaderboard" />
      </div>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Benefits</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Everything an invoice needs, nothing you have to pay for
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built for freelancers and small businesses who need a clean, correct document in under
            two minutes.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-elegant"
            >
              <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Popular templates */}
      <section className="border-y border-border bg-muted/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Templates
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Popular invoice templates</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every template is print-tested in black and white and exports pixel-for-pixel to PDF.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/invoice-templates">See all 10</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((t) => (
              <Link
                key={t.slug}
                to="/invoice-templates/$slug"
                params={{ slug: t.slug }}
                className="group rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-elegant"
              >
                <div
                  className="h-28 rounded-lg border border-border"
                  style={{
                    background: `linear-gradient(160deg, ${t.accent}22, ${t.accent}05)`,
                    borderTop: `6px solid ${t.accent}`,
                  }}
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-bold group-hover:text-primary">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                  Best for {t.bestFor.slice(0, 2).join(", ")}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">From blank page to PDF in four steps</h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-border bg-card p-6">
              <span className="font-display text-3xl font-extrabold text-gradient">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <AdSlot id="home-mid-content" format="leaderboard" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-muted/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">What people say</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="rounded-xl border border-border bg-card p-6">
                <div className="flex gap-0.5 text-accent" aria-label="5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold">
                  {t.name}
                  <span className="block text-xs font-normal text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="mt-8">
              {HOME_FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/faq">Read all FAQs</Link>
            </Button>
          </div>
          <AdSlot id="home-faq-sidebar" format="rectangle" className="h-fit" />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border bg-ink py-16 text-ink-foreground lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Send a better invoice today</h2>
          <p className="mt-4 text-lg opacity-80">
            No account, no card, no watermark. Open the generator and your PDF is one click away.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/invoice-generator">
              Start invoicing free <ArrowRight className="ml-1 size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
