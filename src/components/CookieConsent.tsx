"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getConsent,
  initAdSense,
  initAnalytics,
  setConsent,
  type ConsentValue,
} from "@/lib/analytics";

/** GDPR-style banner. Analytics and ads only load after an explicit "accept". */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  const decide = (value: ConsentValue) => {
    setConsent(value);
    setVisible(false);
    if (value === "accepted") {
      initAnalytics();
      initAdSense();
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-xl border border-border bg-card/95 p-4 shadow-elegant backdrop-blur sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Cookie className="size-6 shrink-0 text-accent" aria-hidden="true" />
        <p className="flex-1 text-sm text-muted-foreground">
          We use cookies for anonymous analytics and to fund the site with advertising. Your invoice
          data never leaves your browser. Read our{" "}
          <Link href="/cookie-policy" className="font-medium text-foreground underline">
            cookie policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="font-medium text-foreground underline">
            privacy policy
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => decide("rejected")}>
            Reject
          </Button>
          <Button size="sm" onClick={() => decide("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
