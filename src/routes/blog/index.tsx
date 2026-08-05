import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { CATEGORIES, POSTS } from "@/data/blog";
import { SITE } from "@/data/site";

const TITLE = `Invoicing Blog — Guides, Templates & Tax Explainers | ${SITE.name}`;
const DESCRIPTION =
  "Practical invoicing guides for freelancers and small businesses: how to create and send invoices, invoice vs receipt, tax and VAT requirements, and template design tips.";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
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
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Blog", item: "/blog" },
          ]),
        ),
      },
    ],
  }),
});

export function PostCard({ post }: { post: (typeof POSTS)[number] }) {
  const category = CATEGORIES.find((c) => c.slug === post.category);
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-elegant">
      {category && (
        <Link
          to="/blog/category/$slug"
          params={{ slug: category.slug }}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-primary"
        >
          {category.name}
        </Link>
      )}
      <h3 className="mt-2 text-lg font-bold leading-snug">
        <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-primary">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.description}
      </p>
      <p className="mt-4 text-xs text-muted-foreground">
        {post.author} ·{" "}
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}{" "}
        · {post.readingTime} min read
      </p>
    </article>
  );
}

function BlogIndex() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return POSTS;
    return POSTS.filter((p) =>
      [p.title, p.description, p.category, p.author].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Invoicing, explained properly"
        lead="Fifteen in-depth guides on creating, sending and getting paid on invoices — written for freelancers and small businesses."
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:max-w-sm">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <Input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles…"
                  aria-label="Search blog posts"
                  className="pl-9"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {results.length} of {POSTS.length} articles
              </p>
            </div>

            <nav aria-label="Categories" className="mt-6 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  to="/blog/category/$slug"
                  params={{ slug: c.slug }}
                  className="rounded-full border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent/15"
                >
                  {c.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <AdSlot id="blog-index-top" format="leaderboard" />
            </div>

            {results.length === 0 ? (
              <p className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
                No articles match “{query}”. Try a broader term such as “tax” or “template”.
              </p>
            ) : (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {results.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>

          <aside className="grid h-fit gap-6">
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Categories
              </h2>
              <ul className="mt-4 grid gap-2 text-sm">
                {CATEGORIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/blog/category/$slug"
                      params={{ slug: c.slug }}
                      className="flex justify-between hover:text-primary"
                    >
                      {c.name}
                      <span className="text-muted-foreground">
                        {POSTS.filter((p) => p.category === c.slug).length}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <AdSlot id="blog-index-sidebar" format="rectangle" />
          </aside>
        </div>
      </div>
    </>
  );
}
