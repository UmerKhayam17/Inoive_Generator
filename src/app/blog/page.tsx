import type { Metadata } from "next";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { blogPagePosts } from "@/data/blog";
import { SITE } from "@/data/site";
import { absoluteUrl, canonicalFor, pageSocial } from "@/lib/seo";

const TITLE = `Invoicing Blog — Guides, Templates & Tax Explainers | ${SITE.name}`;
const DESCRIPTION =
  "Practical invoicing guides for freelancers and small businesses: how to create and send invoices, invoice vs receipt, tax and VAT requirements, and template design tips.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: canonicalFor("/blog") },
  ...pageSocial({
    title: TITLE,
    description: DESCRIPTION,
    url: canonicalFor("/blog"),
  }),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE.name} blog`,
  description: DESCRIPTION,
  url: absoluteUrl("/blog"),
  blogPost: blogPagePosts(1).map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    datePublished: p.date,
    author: { "@type": "Organization", name: p.author },
    url: absoluteUrl(`/blog/${p.slug}`),
  })),
};

const breadcrumbLd = breadcrumbSchema([
  { name: "Home", item: "/" },
  { name: "Blog", item: "/blog" },
]);

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <BlogIndex />
    </>
  );
}
