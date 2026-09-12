import type { Metadata } from "next";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { POSTS } from "@/data/blog";
import { SITE } from "@/data/site";

const TITLE = `Invoicing Blog — Guides, Templates & Tax Explainers | ${SITE.name}`;
const DESCRIPTION =
  "Practical invoicing guides for freelancers and small businesses: how to create and send invoices, invoice vs receipt, tax and VAT requirements, and template design tips.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/blog",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE.name} blog`,
  description: DESCRIPTION,
  url: "/blog",
  blogPost: POSTS.slice(0, 10).map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    datePublished: p.date,
    author: { "@type": "Person", name: p.author },
    url: `/blog/${p.slug}`,
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
