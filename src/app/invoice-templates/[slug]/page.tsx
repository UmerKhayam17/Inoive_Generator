import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { AdSlot } from "@/components/layout/AdSlot";
import { InvoicePreview } from "@/components/invoice/InvoicePreview";
import { ResponsiveInvoiceFrame } from "@/components/invoice/ResponsiveInvoiceFrame";
import { TEMPLATES, templateLabel } from "@/data/templates";
import { SITE } from "@/data/site";
import { createDefaultInvoice } from "@/lib/invoice";

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = TEMPLATES.find((t) => t.slug === slug);
  const title = template
    ? `${template.name} Invoice Template — ${template.industry} | ${SITE.name}`
    : `Invoice Template | ${SITE.name}`;
  const description = template
    ? `Create a professional ${template.industry.toLowerCase()} invoice with our free ${template.name} Invoice Template. Customize your invoice and download it as a PDF.`
    : "Free invoice template with live preview and instant PDF download.";
  const imageUrl = `${SITE.url}/invoice-templates/${slug}/opengraph-image`;

  return {
    title,
    description,
    alternates: { canonical: `/invoice-templates/${slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/invoice-templates/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: template
            ? `${template.name} Invoice Template`
            : "Invoice template",
        },
      ],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: [imageUrl],
    },
  };
}

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = TEMPLATES.find((t) => t.slug === slug);
  if (!template) notFound();

  const sample = { ...createDefaultInvoice(), templateSlug: template.slug };
  const others = TEMPLATES.filter((t) => t.slug !== template.slug).slice(0, 5);
  const description = template.description.slice(0, 155);
  const imageUrl = `${SITE.url}/invoice-templates/${slug}/opengraph-image`;

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${template.name} Invoice Template`,
    description,
    image: [imageUrl, `${SITE.url}/invoice_logo.png`],
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/invoice-templates/${slug}`,
    },
  };

  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Invoice templates", item: "/invoice-templates" },
    { name: templateLabel(template), item: `/invoice-templates/${slug}` },
  ]);

  return (
    <div className="mx-auto max-w-[96rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Invoice templates", href: "/invoice-templates" },
          { label: templateLabel(template) },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {template.industry}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            {template.name} Invoice Template
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{template.tagline}</p>

          <div className="mt-8 overflow-x-auto">
            <ResponsiveInvoiceFrame maxScale={0.85}>
              <div style={{ boxShadow: "0 18px 40px -18px rgba(17,24,39,0.28)" }}>
                <InvoicePreview data={sample} id={`preview-${template.slug}`} />
              </div>
            </ResponsiveInvoiceFrame>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={`/invoice-generator?template=${template.slug}`}>
                Use this template <ArrowRight className="ml-1 size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/invoice-templates">Compare all templates</Link>
            </Button>
          </div>

          <div className="prose-invoice mt-10 max-w-none text-muted-foreground">
            <h2 className="text-2xl font-bold text-foreground">About this template</h2>
            <p>{template.description}</p>
            <h2 className="text-2xl font-bold text-foreground">Industry</h2>
            <p>
              Designed for the <strong className="text-foreground">{template.industry}</strong>{" "}
              industry as a professional invoice layout. Style name:{" "}
              <strong className="text-foreground">{template.name}</strong>.
            </p>
            <h2 className="text-2xl font-bold text-foreground">Who it suits</h2>
            <ul className="mt-3 space-y-2">
              {template.bestFor.map((b: string) => (
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
                    href={`/invoice-templates/${t.slug}`}
                    className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm font-medium hover:bg-accent/10"
                  >
                    <span
                      className="size-6 rounded"
                      style={{ background: t.accent }}
                      aria-hidden="true"
                    />
                    {t.name}
                    <span className="ml-auto text-xs font-normal text-muted-foreground">
                      {t.industry}
                    </span>
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
