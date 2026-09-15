import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { TemplatesIndustryBrowser } from "@/components/invoice/TemplatesIndustryBrowser";
import { TEMPLATES } from "@/data/templates";
import { SITE } from "@/data/site";

const TITLE = `${TEMPLATES.length} Top-Rated Free Invoice Templates by Industry | ${SITE.name}`;
const DESCRIPTION =
  "Browse high-rated and top-rated industry invoice templates — freelance, design, legal, hospitality, healthcare, SaaS and more. Each shows its style name and industry. Preview and download as PDF.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/invoice-templates" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/invoice-templates",
  },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Top-rated free invoice templates by industry",
  itemListElement: TEMPLATES.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${t.name} Invoice Template`,
    url: `/invoice-templates/${t.slug}`,
  })),
};

const breadcrumbLd = breadcrumbSchema([
  { name: "Home", item: "/" },
  { name: "Invoice templates", item: "/invoice-templates" },
]);

export default function TemplatesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PageHeader
        eyebrow="Templates"
        title={`${TEMPLATES.length} top-rated free invoice templates`}
        lead="High-rated designs for every industry — each template lists its style name and industry so you can pick by look or by the business you run. Preview with real numbers, then export the same layout to PDF."
        crumbs={[{ label: "Home", href: "/" }, { label: "Invoice templates" }]}
      >
        <Button asChild size="lg" className="mt-8">
          <Link href="/invoice-generator">
            Open the generator <ArrowRight className="ml-1 size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHeader>

      <div className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-8">
        <AdSlot id="templates-top" format="leaderboard" />
        <TemplatesIndustryBrowser />
        <div className="mt-12">
          <AdSlot id="templates-bottom" format="leaderboard" />
        </div>
      </div>
    </>
  );
}
