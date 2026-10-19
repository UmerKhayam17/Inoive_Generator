"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  analyticsAllowed,
  initAdSense,
  initAnalytics,
  trackPageview,
} from "@/lib/analytics";

/**
 * Mounts once in the root layout. Boots gtag.js after consent, and AdSense only
 * when real ad units are enabled (NEXT_PUBLIC_SHOW_AD_SLOTS). Reports page_view
 * on every client-side route change.
 */
export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!analyticsAllowed()) return;
    initAnalytics();
    initAdSense(); // no-op unless ADS_ENABLED + consent
  }, [pathname]);

  useEffect(() => {
    if (!analyticsAllowed()) return;
    const id = window.setTimeout(() => trackPageview(pathname), 60);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
