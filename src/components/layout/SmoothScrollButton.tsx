"use client";

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Scrolls to an in-page section without adding a #hash to the URL.
 */
export function SmoothScrollButton({
  targetId,
  className,
  children,
  ...props
}: {
  targetId: string;
} & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      type="button"
      className={cn("cursor-pointer text-left", className)}
      onClick={() => {
        const el = document.getElementById(targetId);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      {...props}
    >
      {children}
    </button>
  );
}
