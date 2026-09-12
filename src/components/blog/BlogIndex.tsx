"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { CATEGORIES, POSTS } from "@/data/blog";
import { PostCard } from "@/components/blog/PostCard";

export function BlogIndex() {
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
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-8">
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
                      href={`/blog/category/${c.slug}`}
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
