import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { BLOG_PAGE_COUNT, blogPageHref } from "@/data/blog";
import { SITE } from "@/data/site";
import { canonicalFor, pageSocial } from "@/lib/seo";

// Page 1 lives at /blog; this route serves pages 2..N.
export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, BLOG_PAGE_COUNT - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

function parsePage(raw: string): number {
  return /^\d+$/.test(raw) ? Number(raw) : NaN;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const page = parsePage((await params).page);
  const title = `Invoicing Blog: Page ${page} of ${BLOG_PAGE_COUNT} | ${SITE.name}`;
  const description = `Page ${page} of the ${SITE.name} invoicing blog: practical guides on invoices, payments, tax and templates for freelancers and small businesses.`;
  const url = canonicalFor(blogPageHref(page));

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    ...pageSocial({ title, description, url }),
  };
}

export default async function BlogPaginatedPage({ params }: { params: Promise<{ page: string }> }) {
  const page = parsePage((await params).page);
  if (!Number.isInteger(page) || page < 2 || page > BLOG_PAGE_COUNT) notFound();

  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: `Page ${page}`, item: blogPageHref(page) },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <BlogIndex page={page} />
    </>
  );
}
