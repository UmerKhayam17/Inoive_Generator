import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, Rocket, ShieldCheck, Award } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import { TEMPLATE_COUNT } from "@/data/templates";

const values = [
  {
    icon: ShieldCheck,
    title: "Privacy by architecture",
    body: "The generator runs in your browser. We could not read your invoices even if we wanted to — there is no server to send them to.",
  },
  {
    icon: HeartHandshake,
    title: "Free means free",
    body: "No trial, no credit card, no watermark, no export limit. Advertising is how we plan to keep the tool open. Until ads are live, the generator still works the same way.",
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

const TITLE = `About ${SITE.name} — Free Invoicing Tools for Small Business`;
const DESCRIPTION =
  "Why we built a free, privacy-first invoice generator: no signup, no watermark, and your invoice never leaves your browser.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: `About ${SITE.name}`,
    description: DESCRIPTION,
    type: "website",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Invoicing shouldn't cost you an afternoon — or a subscription"
        lead="Invoice Creator is an independent free invoice generator. We publish what the product actually does today — not invented launch stats."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-14 sm:px-6 lg:px-8">
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
              To make professional business paperwork free and effortless for independent workers
              and small businesses — including markets that most SaaS invoice tools treat as an
              afterthought, starting with Pakistan (PKR, NTN, STRN).
            </p>

            <h2>What is live today</h2>
            <ul>
              <li>
                {TEMPLATE_COUNT} professionally designed, print-tested invoice templates you can
                switch without re-entering data.
              </li>
              <li>Real-time calculations with discount, tax, shipping and multi-currency support including PKR, AED, GBP, CAD and AUD.</li>
              <li>Instant PDF download and print, with no watermark and no export cap.</li>
              <li>Drafts stored only in your browser. Clearing site data deletes them.</li>
              <li>A growing library of practical invoicing guides on the blog.</li>
            </ul>
            <p>
              We do not publish invoice-volume or user-count numbers. If a figure is not something
              we can measure on this site, it does not belong on this page.
            </p>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <p className="font-display text-3xl font-extrabold">{TEMPLATE_COUNT}</p>
              <p className="text-sm text-muted-foreground">invoice templates in the library</p>
              <p className="mt-5 font-display text-3xl font-extrabold">$0</p>
              <p className="text-sm text-muted-foreground">the price to create and download</p>
              <p className="mt-5 font-display text-3xl font-extrabold">0</p>
              <p className="text-sm text-muted-foreground">accounts required — ever</p>
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

        <div className="mt-16 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/invoice-generator">Create a free invoice</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Talk to us</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
