import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";
import { AdSlot } from "./AdSlot";

export function LegalPage({
  title,
  updated,
  lead,
  children,
}: {
  title: string;
  updated: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={title}
        lead={lead}
        crumbs={[{ label: "Home", to: "/" }, { label: title }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-8 text-sm text-muted-foreground">Last updated: {updated}</p>
        <article className="prose-invoice">{children}</article>
        <AdSlot id="legal-footer" format="leaderboard" className="mt-12" />
      </div>
    </>
  );
}