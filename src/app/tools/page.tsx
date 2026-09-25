import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { TOOLS } from "@/data/tools";
import { SITE } from "@/data/site";

const AVAILABLE_TOOLS = TOOLS.filter((t) => t.available);

const TITLE = `Free Invoice Generator Tool | ${SITE.name}`;
const DESCRIPTION =
  "Use our free browser-based invoice generator to create and download professional PDF invoices. No signup required.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/tools",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: "/tools" },
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
      </div>
    </>
  );
}
