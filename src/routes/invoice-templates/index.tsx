import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { TEMPLATES } from "@/data/templates";
import { SITE } from "@/data/site";

const TITLE = `10 Free Invoice Templates (PDF & Live Preview) | ${SITE.name}`;
const DESCRIPTION =
  "Browse 10 free invoice templates — modern, minimal, corporate, elegant, blue, dark, startup, agency, creative and classic. Preview each design and download it as a PDF.";

export const Route = createFileRoute("/invoice-templates/")({
  component: TemplatesIndex,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/invoice-templates" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/invoice-templates" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Free invoice templates",
          itemListElement: TEMPLATES.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${t.name} invoice template`,
            url: `/invoice-templates/${t.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Invoice templates", item: "/invoice-templates" },
          ]),
        ),
      },
    ],
  }),
});

function TemplatesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Templates"
        title="10 free invoice templates"
        lead="Pick a design, preview it with real numbers, then export the exact same layout to PDF. Every template is free and unwatermarked."
        crumbs={[{ label: "Home", to: "/" }, { label: "Invoice templates" }]}
      >
        <Button asChild size="lg" className="mt-8">
          <Link to="/invoice-generator">
            Open the generator <ArrowRight className="ml-1 size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <AdSlot id="templates-top" format="leaderboard" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPLATES.map((t) => (
            <article
              key={t.slug}
              className="flex flex-col rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-elegant"
            >
              <div
                className="h-32 rounded-lg border border-border"
                style={{
                  background: t.dark
                    ? "linear-gradient(160deg, #0f172a, #334155)"
                    : `linear-gradient(160deg, ${t.accent}22, ${t.accent}05)`,
                  borderTop: `8px solid ${t.accent}`,
                }}
                aria-hidden="true"
              />
              <h2 className="mt-4 text-lg font-bold">{t.name} invoice template</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                Best for {t.bestFor.join(", ")}
              </p>
              <div className="mt-5 flex gap-2">
                <Button asChild size="sm" className="flex-1">
                  <Link to="/invoice-templates/$slug" params={{ slug: t.slug }}>
                    Preview
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="flex-1">
                  <Link to="/invoice-generator">Use it</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <AdSlot id="templates-bottom" format="leaderboard" />
        </div>
      </div>
    </>
  );
}
