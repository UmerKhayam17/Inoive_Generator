import { useMemo } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { POSTS, CATEGORIES } from "@/data/blog";
import { TEMPLATES } from "@/data/templates";
import { SITE } from "@/data/site";

const TITLE = `Search — Invoice Templates & Guides | ${SITE.name}`;
const DESCRIPTION =
  "Search InvoiceForge for invoice templates, invoicing guides and tax explainers. Find the right template or article in seconds.";

const searchSchema = z.object({ q: z.string().catch("") });

export const Route = createFileRoute("/search")({
  validateSearch: searchSchema,
  component: SearchPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/search" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/search" }],
  }),
});

function SearchPage() {
  const { q } = Route.useSearch();
  const navigate = useNavigate({ from: "/search" });

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
            [t.name, t.tagline, t.description, t.bestFor.join(" ")]
              .join(" ")
              .toLowerCase()
              .includes(query),
          )
        : [],
    [query],
  );

  const total = posts.length + templates.length;

  return (
    <>
      <PageHeader
        eyebrow="Search"
        title="Search the site"
        lead="Find an invoice template, a guide or an answer to a tax question."
        crumbs={[{ label: "Home", to: "/" }, { label: "Search" }]}
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
            onChange={(e) => navigate({ search: { q: e.target.value }, replace: true })}
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
                  to="/blog/category/$slug"
                  params={{ slug: c.slug }}
                  className="rounded-full border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent/15"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <AdSlot id="search-top" format="leaderboard" />
        </div>

        {templates.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-extrabold">Templates</h2>
            <ul className="mt-4 grid gap-3">
              {templates.map((t) => (
                <li key={t.slug}>
                  <Link
                    to="/invoice-templates/$slug"
                    params={{ slug: t.slug }}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:bg-accent/10"
                  >
                    <span
                      className="size-8 shrink-0 rounded"
                      style={{ background: t.accent }}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block font-semibold">{t.name} invoice template</span>
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
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
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
            <Link to="/blog" className="font-medium text-primary underline">
              browse the blog
            </Link>
            .
          </p>
        )}
      </div>
    </>
  );
}
