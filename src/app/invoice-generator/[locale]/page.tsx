import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AdSlot } from "@/components/layout/AdSlot";
import { Breadcrumbs, breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { InvoiceGenerator } from "@/components/invoice/InvoiceGenerator";
import { getLocale, getLocaleSlugs, LOCALES, type InvoiceLocale } from "@/data/locales";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return getLocaleSlugs().map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: slug } = await params;
  const locale = getLocale(slug);
  if (!locale) {
    return { title: `Invoice generator | ${SITE.name}` };
  }

  return {
    title: locale.seoTitle,
    description: locale.seoDescription,
    keywords: locale.keywords,
    alternates: { canonical: locale.path },
    openGraph: {
      title: locale.seoTitle,
      description: locale.seoDescription,
      type: "website",
      url: locale.path,
    },
    twitter: { title: locale.seoTitle, description: locale.seoDescription },
  };
}

function LocalePage({ locale }: { locale: InvoiceLocale }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: `${locale.country} Invoice Generator (${locale.currency}, ${locale.taxIdLabel})`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any (web browser)",
        url: `${SITE.url}${locale.path}`,
        description: locale.seoDescription,
        offers: { "@type": "Offer", price: "0", priceCurrency: locale.currency },
        isAccessibleForFree: true,
      },
      {
        "@type": "FAQPage",
        mainEntity: locale.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      breadcrumbSchema([
        { name: "Home", item: `${SITE.url}/` },
        { name: "Invoice generator", item: `${SITE.url}/invoice-generator` },
        { name: locale.country, item: `${SITE.url}${locale.path}` },
      ]),
    ],
  };

  const otherLocales = LOCALES.filter((l) => l.slug !== locale.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Compact intro — generator follows immediately, no hash jump */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-[96rem] px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Invoice generator", href: "/invoice-generator" },
              { label: locale.country },
            ]}
          />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {locale.country} · {locale.currency}
          </p>
          <h1 className="mt-2 max-w-3xl text-2xl font-extrabold leading-tight sm:text-4xl">
            Free invoice generator for {locale.country}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {locale.heroLead}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
            {locale.heroBullets.map((b) => (
              <li key={b} className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="/invoice-templates">Browse templates</Link>
            </Button>
            {otherLocales.slice(0, 3).map((l) => (
              <Button key={l.slug} asChild variant="ghost" size="sm">
                <Link href={l.path}>{l.country}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="mx-auto max-w-[96rem] px-4 py-16 text-sm text-muted-foreground">
            Loading {locale.country} invoice generator…
          </div>
        }
      >
        <InvoiceGenerator
          localeSlug={locale.slug}
          heading={locale.generatorHeading}
          titleAs="h2"
          lead={locale.generatorLead}
          showBreadcrumbs={false}
        />
      </Suspense>

      <div className="mx-auto max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
        <AdSlot id={`${locale.slug}-below-generator`} format="leaderboard" />
      </div>

      <article className="border-t border-border bg-muted/20">
        <div className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="prose-invoice max-w-3xl">
              <p>
                <strong>Important:</strong> Tax laws, rates, registration requirements, and
                invoicing rules in {locale.country} can change and may vary by region and supply
                type. This page provides general informational content and should not be considered
                professional tax, accounting, or legal advice. {locale.authorityNote}
              </p>
              <p className="text-sm text-muted-foreground">
                Applicable jurisdiction: {locale.country} · Last reviewed: {locale.lastReviewed}
              </p>

              {locale.guideSections.map((section) => (
                <div key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
              ))}
            </div>

            <aside className="h-fit space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg font-bold">Fields this page adds</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {locale.fieldHighlights.map((f) => (
                    <li key={f.label}>
                      <strong className="text-foreground">{f.label}</strong> — {f.body}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  General information only — not tax, legal or filing advice.
                </p>
              </div>

              {otherLocales.length > 0 && (
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="text-lg font-bold">Other countries</h2>
                  <ul className="mt-4 space-y-2 text-sm">
                    {otherLocales.map((l) => (
                      <li key={l.slug}>
                        <Link href={l.path} className="font-medium text-primary hover:underline">
                          {l.country} invoice generator
                        </Link>
                        <span className="text-muted-foreground">
                          {" "}
                          · {l.currency} · {l.taxIdLabel}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>

          <section className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-extrabold">{locale.country} invoice FAQs</h2>
            <div className="mt-6 space-y-8">
              {locale.faqs.map((f) => (
                <div key={f.q} className="border-b border-border pb-8 last:border-0">
                  <h3 className="text-lg font-bold leading-snug">{f.q}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

export default async function InvoiceLocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: slug } = await params;
  const locale = getLocale(slug);
  if (!locale) notFound();
  return <LocalePage locale={locale} />;
}
