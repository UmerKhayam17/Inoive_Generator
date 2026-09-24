"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TemplateCardPreview } from "@/components/invoice/TemplateCardPreview";
import {
  TEMPLATES,
  getIndustries,
  type InvoiceTemplate,
} from "@/data/templates";
import { cn } from "@/lib/utils";

const industries = getIndustries();

function TemplateCard({ t }: { t: InvoiceTemplate }) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-elegant sm:p-5">
      <Link href={`/invoice-templates/${t.slug}`} className="block">
        <TemplateCardPreview slug={t.slug} height={230} />
      </Link>
      <h3 className="mt-4 text-lg font-bold">{t.name}</h3>
      <p className="mt-1 text-sm font-medium text-primary">
        {t.industry} invoice template
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
      <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
        Best for {t.bestFor.join(", ")}
      </p>
      <div className="mt-5 flex gap-2">
        <Button asChild size="sm" className="flex-1">
          <Link href={`/invoice-templates/${t.slug}`}>Preview</Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="flex-1">
          <Link href={`/invoice-generator?template=${t.slug}`}>Use it</Link>
        </Button>
      </div>
    </article>
  );
}

export function TemplatesIndustryBrowser() {
  const [selected, setSelected] = useState<string>("all");

  const filtered = useMemo(
    () =>
      selected === "all"
        ? TEMPLATES
        : TEMPLATES.filter((t) => t.industry === selected),
    [selected],
  );

  const heading =
    selected === "all"
      ? "All professional templates"
      : `${selected} invoice templates`;

  const sub =
    selected === "all"
      ? `${filtered.length} professional templates across every industry`
      : `${filtered.length} professional template${filtered.length === 1 ? "" : "s"} for ${selected.toLowerCase()} businesses`;

  return (
    <div className="mt-10">
      <nav aria-label="Browse by industry">
        <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Browse by industry
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          <li>
            <button
              type="button"
              aria-pressed={selected === "all"}
              onClick={() => setSelected("all")}
              className={cn(
                "inline-flex rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                selected === "all"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-primary hover:text-primary",
              )}
            >
              All
            </button>
          </li>
          {industries.map((industry) => {
            const active = selected === industry;
            return (
              <li key={industry}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(industry)}
                  className={cn(
                    "inline-flex rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card hover:border-primary hover:text-primary",
                  )}
                >
                  {industry}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="mt-10">
        <div>
          <h2 className="text-2xl font-extrabold">{heading}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TemplateCard key={t.slug} t={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
