import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { TEMPLATES } from "@/data/templates";
import { TOOLS } from "@/data/tools";
import { SITE } from "@/data/site";
import { canonicalFor } from "@/lib/seo";

const AVAILABLE_TOOLS = TOOLS.filter((t) => t.available);

const TITLE = `Free Invoicing Tools for Small Businesses | ${SITE.name}`;
const DESCRIPTION =
  "Use our free browser-based invoice generator to create and download professional PDF invoices. No signup required.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: canonicalFor("/tools"),
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: canonicalFor("/tools") },
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="Free tools for getting paid"
        lead="Browser-based tools that help small businesses create professional documents. Everything runs on your device — no account required."
        crumbs={[{ label: "Home", href: "/" }, { label: "Tools" }]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-8">
        <AdSlot id="tools-top" format="leaderboard" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AVAILABLE_TOOLS.map(({ icon: Icon, ...tool }) => (
            <article key={tool.slug} className="rounded-xl border border-border bg-card p-6">
              <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-bold">{tool.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
              <Button asChild size="sm" className="mt-4">
                <Link href="/invoice-generator">Open tool</Link>
              </Button>
            </article>
          ))}
        </div>

        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold">About our tools</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {SITE.name} currently offers a full-featured free invoice generator. You can customise
            templates, add your logo, itemise line items with tax and discounts, and download a
            print-ready PDF — all without uploading invoice data to our servers. Additional document
            builders and calculators will be published here only when they are ready to use.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Prefer to jump straight in? Open the{" "}
            <Link href="/invoice-generator" className="font-medium text-foreground underline">
              invoice generator
            </Link>{" "}
            or browse{" "}
            <Link href="/invoice-templates" className="font-medium text-foreground underline">
              invoice templates
            </Link>
            .
          </p>
        </section>

        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold">What you can do with the invoice generator</h2>
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
            <li>Download a print-ready PDF that looks the same on every device.</li>
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Invoice data stays in your browser. Nothing you type into the generator is uploaded to
            our servers, so you can safely use it for real client work.
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
