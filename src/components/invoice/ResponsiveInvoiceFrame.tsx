"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { PAGE_WIDTH } from "@/components/invoice/InvoicePreview";

/** Scales an A4 invoice preview to the container width on any screen size. */
export function ResponsiveInvoiceFrame({
  children,
  className = "",
  maxScale = 1,
}: {
  children: ReactNode;
  className?: string;
  maxScale?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.45);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const update = () => {
      const available = el.clientWidth;
      if (available <= 0) return;
      setScale(Math.min(maxScale, available / PAGE_WIDTH));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [maxScale]);

  return (
    <div className={`max-w-full overflow-hidden rounded-xl border border-border bg-muted/40 p-2 sm:p-4 ${className}`}>
      <div ref={wrapRef} className="w-full max-w-full overflow-hidden">
        <div
          className="origin-top-left"
          style={{
            transform: `scale(${scale})`,
            width: PAGE_WIDTH,
            height: 1123 * scale,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
