import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { CHANGELOG, EDITORIAL } from "@/data/editorial";
import { SITE } from "@/data/site";
import { canonicalFor, pageSocial } from "@/lib/seo";

const TITLE = `What’s New — Product & Content Updates | ${SITE.name}`;
const DESCRIPTION = `Changelog for ${SITE.name}: new tools, template improvements and content updates. Last reviewed ${EDITORIAL.lastReviewed}.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: canonicalFor("/whats-new") },
  ...pageSocial({
    title: TITLE,
    description: DESCRIPTION,
    url: canonicalFor("/whats-new"),
  }),
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Curation"
        title="What’s new"
        lead={`We publish material changes here so visitors and reviewers can see ongoing maintenance — not a frozen launch dump. Last site review: ${EDITORIAL.lastReviewed}.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "What’s new" }]}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <ol className="space-y-10">
          {CHANGELOG.map((entry) => (
            <li key={entry.date} className="border-b border-border pb-10 last:border-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {entry.date}
              </p>
              <h2 className="mt-2 text-xl font-bold">{entry.title}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
                {entry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-muted-foreground">
          How we decide what to publish:{" "}
          <Link href="/editorial-standards" className="font-medium text-foreground underline">
            editorial standards
          </Link>
          . Questions?{" "}
          <Link href="/contact" className="font-medium text-foreground underline">
            Contact us
          </Link>
          .
        </p>
      </div>
    </>
  );
}
