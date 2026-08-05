import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { CATEGORIES, POSTS, getCategory } from "@/data/blog";
import { SITE } from "@/data/site";
import { PostCard } from "../index";

export const Route = createFileRoute("/blog/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, posts: POSTS.filter((p) => p.category === category.slug) };
  },
  component: CategoryPage,
  head: ({ params, loaderData }) => {
    const name = loaderData?.category.name ?? "Category";
    const count = loaderData?.posts.length ?? 0;
    const title = `${name} — Invoicing Articles (${count}) | ${SITE.name}`;
    const description = `Every ${name.toLowerCase()} article on ${SITE.name}: ${count} practical guides on invoicing for freelancers and small businesses.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/blog/category/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/blog/category/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", item: "/" },
              { name: "Blog", item: "/blog" },
              { name, item: `/blog/category/${params.slug}` },
            ]),
          ),
        },
      ],
    };
  },
});

function CategoryPage() {
  const { category, posts } = Route.useLoaderData();

  return (
    <>
      <PageHeader
        eyebrow="Blog category"
        title={category.name}
        lead={`${posts.length} article${posts.length === 1 ? "" : "s"} in this category.`}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Blog", to: "/blog" },
          { label: category.name },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="All categories" className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/blog/category/$slug"
              params={{ slug: c.slug }}
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
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Looking for something else?{" "}
          <Link to="/blog" className="font-medium text-primary underline">
            Browse all articles
          </Link>
          .
        </p>
      </div>
    </>
  );
}
