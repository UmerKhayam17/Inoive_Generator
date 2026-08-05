import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { InvoicePreview, PAGE_WIDTH } from "@/components/invoice/InvoicePreview";
import { TEMPLATES } from "@/data/templates";
import { SITE } from "@/data/site";
import { createDefaultInvoice } from "@/lib/invoice";

export const Route = createFileRoute("/invoice-templates/$slug")({
  loader: ({ params }) => {
    const template = TEMPLATES.find((t) => t.slug === params.slug);
    if (!template) throw notFound();
    return { template };
  },
  component: TemplateDetail,
  head: ({ params, loaderData }) => {
    const name = loaderData?.template.name ?? "Invoice";
    const title = `${name} Invoice Template — Free PDF Download | ${SITE.name}`;
    const description =
      loaderData?.template.description.slice(0, 155) ??
      "Free invoice template with live preview and instant PDF download.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/invoice-templates/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/invoice-templates/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${name} invoice template`,
            description,
            brand: { "@type": "Brand", name: SITE.name },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `/invoice-templates/${params.slug}`,
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", item: "/" },
              { name: "Invoice templates", item: "/invoice-templates" },
              { name, item: `/invoice-templates/${params.slug}` },
            ]),
          ),
        },
      ],
    };
  },
});

function TemplateDetail() {
  const { template } = Route.useLoaderData();
  const sample = { ...createDefaultInvoice(), templateSlug: template.slug };
  const others = TEMPLATES.filter((t) => t.slug !== template.slug).slice(0, 5);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Invoice templates", to: "/invoice-templates" },
          { label: template.name },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            {template.name} invoice template
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{template.tagline}</p>

          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-muted/40 p-4">
            <div className="mx-auto overflow-hidden" style={{ maxWidth: "100%" }}>
              <div
                className="origin-top-left"
                style={{ transform: "scale(0.58)", width: PAGE_WIDTH, height: 1123 * 0.58 }}
              >
                <div className="shadow-elegant">
                  <InvoicePreview data={sample} id={`preview-${template.slug}`} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/invoice-generator">
                Use this template <ArrowRight className="ml-1 size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/invoice-templates">Compare all templates</Link>
            </Button>
          </div>

          <div className="prose-invoice mt-10 max-w-none text-muted-foreground">
            <h2 className="text-2xl font-bold text-foreground">About this template</h2>
            <p>{template.description}</p>
            <h2 className="text-2xl font-bold text-foreground">Who it suits</h2>
            <ul className="mt-3 space-y-2">
              {template.bestFor.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <Check className="size-4 text-primary" aria-hidden="true" /> {b}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-foreground">What you get</h2>
            <p>
              A print-ready A4 layout with your logo, itemised lines, tax and discount handling, a
              signature area and a totals panel. Switch to this template in the generator and the
              downloaded PDF matches this preview exactly.
            </p>
          </div>

          <div className="mt-10">
            <AdSlot id="template-detail-bottom" format="leaderboard" />
          </div>
        </div>

        <aside className="grid h-fit gap-6">
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Other templates
            </h2>
            <ul className="mt-4 grid gap-2">
              {others.map((t) => (
                <li key={t.slug}>
                  <Link
                    to="/invoice-templates/$slug"
                    params={{ slug: t.slug }}
                    className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm font-medium hover:bg-accent/10"
                  >
                    <span
                      className="size-6 rounded"
                      style={{ background: t.accent }}
                      aria-hidden="true"
                    />
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <AdSlot id="template-detail-sidebar" format="rectangle" />
        </aside>
      </div>
    </div>
  );
}
