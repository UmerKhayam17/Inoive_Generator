"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InvoicePreview, PAGE_WIDTH } from "@/components/invoice/InvoicePreview";
import { TEMPLATES } from "@/data/templates";
import { createDefaultInvoice } from "@/lib/invoice";
import { cn } from "@/lib/utils";

type TemplateCardPreviewProps = {
  slug: string;
  className?: string;
  /** Visible preview height inside the card */
  height?: number;
};

/**
 * Compact live invoice mock used on template cards / homepage grids.
 * Scales the real InvoicePreview so users see the actual layout, not a placeholder.
 */
export function TemplateCardPreview({
  slug,
  className,
  height = 200,
}: TemplateCardPreviewProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.35);

  const data = useMemo(() => {
    const template = TEMPLATES.find((t) => t.slug === slug);
    return {
      ...createDefaultInvoice(),
      templateSlug: slug,
      accentColor: template?.accent ?? null,
      invoiceNumber: "2026-0041",
      from: {
        name: "Northwind Studio",
        email: "billing@northwind.example",
        address: "12 Market Street\nAustin, TX 78701",
        phone: "+1 555 0100",
        taxId: "TX-88421",
        taxIdSecondary: "",
      },
      to: {
        name: "Acme Retail Co.",
        email: "ap@acme.example",
        address: "480 Harbour Road\nSeattle, WA 98101",
        phone: "",
        taxId: "",
        taxIdSecondary: "",
      },
      items: [
        {
          id: "preview-1",
          description: "Brand identity package",
          quantity: 1,
          rate: 1200,
        },
        {
          id: "preview-2",
          description: "Website design (retainer)",
          quantity: 12,
          rate: 85,
        },
      ],
      taxRate: 8.25,
      notes: "Thank you for your business.",
      terms: "Net 14",
    };
  }, [slug]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const update = () => {
      const available = el.clientWidth;
      if (available <= 0) return;
      setScale(Math.min(1, available / PAGE_WIDTH));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className={cn(
        "pointer-events-none relative overflow-hidden rounded-lg border border-border bg-[#f8fafc]",
        className,
      )}
      style={{ height }}
      aria-hidden="true"
    >
      <div
        className="origin-top-left"
        style={{
          transform: `scale(${scale})`,
          width: PAGE_WIDTH,
        }}
      >
        <InvoicePreview data={data} id={`card-preview-${slug}`} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-card to-transparent" />
    </div>
  );
}
