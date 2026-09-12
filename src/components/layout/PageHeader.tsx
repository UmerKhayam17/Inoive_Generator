import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border gradient-hero">
      <div className="mx-auto max-w-[96rem] px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-3xl text-2xl font-extrabold sm:text-4xl lg:text-5xl">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{lead}</p>}
        {children}
      </div>
    </section>
  );
}