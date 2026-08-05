import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { TOOLS } from "@/data/tools";
import { SITE } from "@/data/site";

const TITLE = `Free Invoicing & Tax Tools | ${SITE.name}`;
const DESCRIPTION =
  "Free browser-based tools for small businesses: invoice generator plus quotation, receipt, estimate and purchase order builders, and GST, VAT and sales tax calculators.";

export const Route = createFileRoute("/tools")({
  component: ToolsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tools" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/tools" }],
  }),
});

function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="Free tools for getting paid"
        lead="Everything runs in your browser, free and without an account. Available tools are live now; the rest are on the roadmap."
        crumbs={[{ label: "Home", to: "/" }, { label: "Tools" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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
                  <Link to="/invoice-generator">Open tool</Link>
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
