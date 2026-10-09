import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchPage } from "@/components/search/SearchPage";
import { SITE } from "@/data/site";
import { canonicalFor } from "@/lib/seo";

const TITLE = `Search — Invoice Templates & Guides | ${SITE.name}`;
const DESCRIPTION =
  "Search Invoice Creator for invoice templates, invoicing guides and tax explainers. Find the right template or article in seconds.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: canonicalFor("/search") },
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: canonicalFor("/search"),
  },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <Suspense>
      <SearchPage />
    </Suspense>
  );
}
