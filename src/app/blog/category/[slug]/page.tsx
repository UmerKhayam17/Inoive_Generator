import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { PostCard } from "@/components/blog/PostCard";
import { CATEGORIES, POSTS, getCategory, type Post } from "@/data/blog";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  const name = category?.name ?? "Category";
  const count = POSTS.filter((p) => p.category === slug).length;
  const title = `${name} — Invoicing Articles (${count}) | ${SITE.name}`;
  const description = `Every ${name.toLowerCase()} article on ${SITE.name}: ${count} practical guides on invoicing for freelancers and small businesses.`;

  return {
    title,
    description,
    alternates: { canonical: `/blog/category/${slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/blog/category/${slug}`,
    },
    twitter: { title, description },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const posts = POSTS.filter((p) => p.category === category.slug);

  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: category.name, item: `/blog/category/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PageHeader
        eyebrow="Blog category"
        title={category.name}
        lead={`${posts.length} article${posts.length === 1 ? "" : "s"} in this category.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: category.name },
        ]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="All categories" className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/blog/category/${c.slug}`}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
                c.slug === category.slug
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:bg-accent/15"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <AdSlot id="category-top" format="leaderboard" />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: Post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Looking for something else?{" "}
          <Link href="/blog" className="font-medium text-primary underline">
            Browse all articles
          </Link>
          .
        </p>
      </div>
    </>
  );
}
