import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, User } from "lucide-react";
import { Breadcrumbs, breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { SmoothScrollButton } from "@/components/layout/SmoothScrollButton";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { CATEGORIES, POSTS, getPost, relatedPosts, type Post } from "@/data/blog";
import { SITE } from "@/data/site";

interface Heading {
  id: string;
  text: string;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Adds ids to every <h2> so the table of contents can link to them. */
function withAnchors(html: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const out = html.replace(/<h2>(.*?)<\/h2>/g, (_match, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "");
    const id = slugify(text);
    headings.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, headings };
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post ? `${post.title} | ${SITE.name}` : `Article | ${SITE.name}`;
  const description = post?.description ?? "Invoicing guides for small businesses.";

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post?.title ?? title,
      description,
      type: "article",
      url: `/blog/${slug}`,
      publishedTime: post?.date,
      authors: post?.author ? [post.author] : undefined,
    },
    twitter: {
      title: post?.title ?? title,
      description,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(post);
  const { html, headings } = withAnchors(post.content);
  const category = CATEGORIES.find((c) => c.slug === post.category);
  const published = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const modifiedIso = post.updated ?? post.date;
  const modified = new Date(modifiedIso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const isTax = post.category === "tax";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: modifiedIso,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE.operator,
      url: SITE.url,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `/blog/${post.slug}` },
  };

  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: post.title, item: `/blog/${slug}` },
  ]);

  return (
    <div className="mx-auto max-w-[96rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          ...(category
            ? [{ label: category.name, href: `/blog/category/${category.slug}` }]
            : []),
          { label: post.title },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article>
          {category && (
            <Link
              href={`/blog/category/${category.slug}`}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              {category.name}
            </Link>
          )}
          <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="size-4" aria-hidden="true" /> By {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden="true" /> {post.readingTime} min read
            </span>
            <time dateTime={post.date}>Published: {published}</time>
            {post.updated && (
              <time dateTime={post.updated}>
                {isTax ? "Last reviewed" : "Last updated"}: {modified}
              </time>
            )}
            {post.jurisdiction && (
              <span>Applicable jurisdiction: {post.jurisdiction}</span>
            )}
          </div>

          <div className="mt-8">
            <AdSlot id="post-above-content" format="leaderboard" />
          </div>

          {headings.length > 1 && (
            <nav
              aria-label="Table of contents"
              className="mt-8 rounded-xl border border-border bg-muted/40 p-5 lg:hidden"
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
                On this page
              </h2>
              <ol className="mt-3 grid gap-2 text-sm">
                {headings.map((h) => (
                  <li key={h.id}>
                    <SmoothScrollButton targetId={h.id} className="hover:text-primary">
                      {h.text}
                    </SmoothScrollButton>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div
            className="prose-invoice mt-8 max-w-none text-muted-foreground"
            // Content is authored in-repo (src/data/blog.ts), never user input.
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="mt-10">
            <AdSlot id="post-below-content" format="in-article" />
          </div>

          {/* Author box */}
          <section className="mt-10 rounded-xl border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                IC
              </span>
              <div>
                <h2 className="text-lg font-bold">{post.author}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Guides on invoicing, cash flow and small-business finance from {SITE.name},
                  operated by {SITE.operator}. Content is reviewed for accuracy against the fields
                  our own invoice generator produces.
                </p>
                <Button asChild size="sm" variant="outline" className="mt-4">
                  <Link href="/invoice-generator">Try the invoice generator</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-extrabold">Related reading</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {related.map((r: Post) => (
                  <article key={r.slug} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-base font-bold leading-snug">
                      <Link href={`/blog/${r.slug}`} className="hover:text-primary">
                        {r.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{r.readingTime} min read</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </article>

        <aside className="grid h-fit gap-6 lg:sticky lg:top-24">
          {headings.length > 1 && (
            <nav
              aria-label="Table of contents"
              className="hidden rounded-xl border border-border bg-card p-5 lg:block"
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
                On this page
              </h2>
              <ol className="mt-3 grid gap-2 text-sm">
                {headings.map((h) => (
                  <li key={h.id}>
                    <SmoothScrollButton
                      targetId={h.id}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {h.text}
                    </SmoothScrollButton>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Latest articles
            </h2>
            <ul className="mt-4 grid gap-3 text-sm">
              {POSTS.filter((p) => p.slug !== post.slug)
                .slice(0, 5)
                .map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="hover:text-primary">
                      {p.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <AdSlot id="post-sidebar" format="rectangle" />
        </aside>
      </div>
    </div>
  );
}
