"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import {
  BLOG_PAGE_COUNT,
  BLOG_PAGE_SIZE,
  CATEGORIES,
  POSTS,
  POSTS_BY_DATE,
  blogPagePosts,
} from "@/data/blog";
import { PostCard } from "@/components/blog/PostCard";
import { BlogPagination } from "@/components/blog/BlogPagination";

export function BlogIndex({ page = 1 }: { page?: number }) {
  const [query, setQuery] = useState("");
  const searching = query.trim().length > 0;

  // Search always covers every article, not just the current page.
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return blogPagePosts(page);
    return POSTS_BY_DATE.filter((p) =>
      [p.title, p.description, p.category, p.author].join(" ").toLowerCase().includes(q),
    );
  }, [query, page]);

  const first = (page - 1) * BLOG_PAGE_SIZE + 1;
  const last = first + results.length - 1;

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title={page > 1 ? `Invoicing guides: page ${page}` : "Invoicing, explained properly"}
        lead={`${POSTS.length} in-depth guides on creating, sending and getting paid on invoices, written for freelancers and small businesses.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-8">
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
              placeholder="Search all articles…"
              aria-label="Search blog posts"
              className="pl-9"
            />
          </div>
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {searching
              ? `${results.length} of ${POSTS.length} articles match`
              : `Showing ${first}–${last} of ${POSTS.length} articles`}
          </p>
        </div>

        <nav aria-label="Categories" className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/blog/category/${c.slug}`}
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
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {!searching && <BlogPagination page={page} pageCount={BLOG_PAGE_COUNT} />}
      </div>
    </>
  );
}
