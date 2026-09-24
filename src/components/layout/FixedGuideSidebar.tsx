"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Sidebar Contents: sticks under the header while the guide scrolls.
 * Hides as soon as the site footer enters the viewport so it never overlays it.
 */
export function FixedGuideSidebar({ children }: { children: ReactNode }) {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("[data-site-footer]");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(Boolean(entry?.isIntersecting));
      },
      {
        // Start hiding a bit before the footer fully arrives
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0,
      },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden w-[260px] shrink-0 xl:w-[280px] lg:block">
      <div
        className={cn(
          "sticky top-28 z-20 max-h-[calc(100dvh-8.5rem)] overflow-y-auto overscroll-contain pb-6 transition-opacity duration-200",
          footerVisible && "pointer-events-none opacity-0",
        )}
        aria-hidden={footerVisible}
      >
        {children}
      </div>
    </aside>
  );
}
