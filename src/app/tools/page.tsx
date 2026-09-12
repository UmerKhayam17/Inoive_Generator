import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { TOOLS } from "@/data/tools";
import { SITE } from "@/data/site";

const TITLE = `Free Invoicing & Tax Tools | ${SITE.name}`;
const DESCRIPTION =
  "Free browser-based tools for small businesses: invoice generator plus quotation, receipt, estimate and purchase order builders, and GST, VAT and sales tax calculators.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
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
        lead="Everything runs in your browser, free and without an account. Available tools are live now; the rest are on the roadmap."
        crumbs={[{ label: "Home", href: "/" }, { label: "Tools" }]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-8">
        <AdSlot id="tools-top" format="leaderboard" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map(({ icon: Icon, ...tool }) => (
            <article key={tool.slug} className="rounded-xl border border-border bg-card p-6">
              <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-bold">{tool.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
              {tool.available ? (
                <Button asChild size="sm" className="mt-4">
                  <Link href="/invoice-generator">Open tool</Link>
                </Button>
              ) : (
                <p className="mt-4 inline-flex rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Coming soon
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
