"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/layout/PageHeader";
import { POSTS, CATEGORIES } from "@/data/blog";
import { TEMPLATES } from "@/data/templates";

export function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const query = q.trim().toLowerCase();

  const posts = useMemo(
    () =>
      query
        ? POSTS.filter((p) =>
            [p.title, p.description, p.category, p.author].join(" ").toLowerCase().includes(query),
          )
        : [],
    [query],
  );

  const templates = useMemo(
    () =>
      query
        ? TEMPLATES.filter((t) =>
            [t.name, t.industry, t.tagline, t.description, t.bestFor.join(" ")]
              .join(" ")
              .toLowerCase()
              .includes(query),
          )
        : [],
    [query],
  );

  const total = posts.length + templates.length;

  const updateQuery = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.replace(`/search${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <>
      <PageHeader
        eyebrow="Search"
        title="Search the site"
        lead="Find an invoice template, a guide or an answer to a tax question."
        crumbs={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative">
          <SearchIcon
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            autoFocus
            value={q}
            aria-label="Search query"
            placeholder="Try “VAT invoice”, “agency template”, “net 30”…"
            className="pl-9"
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>

        {q.trim() ? (
          <p className="mt-4 text-sm text-muted-foreground">
            {total} result{total === 1 ? "" : "s"} for “{q}”
          </p>
        ) : (
          <div className="mt-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Popular categories
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/blog/category/${c.slug}`}
                  className="rounded-full border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent/15"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {templates.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-extrabold">Templates</h2>
            <ul className="mt-4 grid gap-3">
              {templates.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/invoice-templates/${t.slug}`}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:bg-accent/10"
                  >
                    <span
                      className="size-8 shrink-0 rounded"
                      style={{ background: t.accent }}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block font-semibold">
                        {t.name} · {t.industry}
                      </span>
                      <span className="block text-sm text-muted-foreground">{t.tagline}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {posts.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-extrabold">Articles</h2>
            <ul className="mt-4 grid gap-3">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block rounded-lg border border-border bg-card p-4 hover:bg-accent/10"
                  >
                    <span className="block font-semibold">{p.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {p.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {q.trim() && total === 0 && (
          <p className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
            Nothing matched “{q}”. Try a shorter term, or{" "}
            <Link href="/blog" className="font-medium text-primary underline">
              browse the blog
            </Link>
            .
          </p>
        )}
      </div>
    </>
  );
}
