"use client";

import { useEffect, useRef, useState } from "react";
import { ADS_ENABLED, ADSENSE_CLIENT, analyticsAllowed, initAdSense } from "@/lib/analytics";

interface AdSlotProps {
  /** Placement id for debugging / future mapping to AdSense unit IDs. */
  id: string;
  /** Real AdSense ad unit slot ID from the AdSense UI. Required to render. */
  adSlot?: string;
  format?: "leaderboard" | "rectangle" | "sidebar" | "in-article";
  className?: string;
}

const HEIGHTS: Record<NonNullable<AdSlotProps["format"]>, string> = {
  leaderboard: "min-h-[72px] md:min-h-[110px]",
  rectangle: "min-h-[200px] sm:min-h-[250px]",
  sidebar: "min-h-[280px] lg:min-h-[600px]",
  "in-article": "min-h-[120px] sm:min-h-[140px]",
};

/**
 * Renders a real AdSense unit only when:
 * - NEXT_PUBLIC_SHOW_AD_SLOTS=true
 * - a real `adSlot` unit ID is passed
 * - the visitor has accepted cookies
 *
 * Otherwise returns null — never empty "Advertisement" placeholders
 * (those hurt AdSense site review).
 */
export function AdSlot({
  id,
  adSlot,
  format = "leaderboard",
  className = "",
}: AdSlotProps) {
  const [ready, setReady] = useState(false);
  const pushed = useRef(false);

  useEffect(() => {
    if (!ADS_ENABLED || !adSlot || !ADSENSE_CLIENT || !analyticsAllowed()) {
      setReady(false);
      return;
    }
    initAdSense();
    setReady(true);
  }, [adSlot]);

  useEffect(() => {
    if (!ready || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* Script may still be loading; ignore one-shot push errors. */
    }
  }, [ready]);

  if (!ready || !adSlot || !ADSENSE_CLIENT) return null;

  return (
    <aside
      aria-label="Advertisement"
      data-ad-placement={id}
      className={`w-full overflow-hidden ${HEIGHTS[format]} ${className}`}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
