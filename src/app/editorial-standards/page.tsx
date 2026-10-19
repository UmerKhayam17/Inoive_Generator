import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { EDITORIAL } from "@/data/editorial";
import { SITE } from "@/data/site";
import { canonicalFor, pageSocial } from "@/lib/seo";

const TITLE = `Editorial Standards | ${SITE.name}`;
const DESCRIPTION = `How ${SITE.name} writes and maintains invoicing guides and tools: practical first, jurisdiction honesty, privacy, and maintenance over volume.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: canonicalFor("/editorial-standards") },
  ...pageSocial({
    title: TITLE,
    description: DESCRIPTION,
    url: canonicalFor("/editorial-standards"),
  }),
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Trust"
        title="Editorial standards"
        lead={EDITORIAL.mission}
        crumbs={[{ label: "Home", href: "/" }, { label: "Editorial standards" }]}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          Last reviewed <strong className="text-foreground">{EDITORIAL.lastReviewed}</strong>. Operated
          by {SITE.operator} · {SITE.host}
        </p>

        <div className="mt-10 space-y-8">
          {EDITORIAL.standards.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-bold">{s.title}</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold">Corrections</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Spotted an outdated tax note or a broken example? Email{" "}
            <a className="font-medium text-foreground underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>{" "}
            or use the{" "}
            <Link href="/contact" className="font-medium text-foreground underline">
              contact form
            </Link>
            . Material fixes are listed on{" "}
            <Link href="/whats-new" className="font-medium text-foreground underline">
              What’s new
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}