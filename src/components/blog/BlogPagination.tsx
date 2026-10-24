import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { blogPageHref } from "@/data/blog";
import { cn } from "@/lib/utils";

/** First, last, and the current page with one neighbour each side; gaps become ellipses. */
function pageList(current: number, total: number): (number | "gap")[] {
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev && p - prev > 1) out.push("gap");
    out.push(p);
    prev = p;
  }
  return out;
}

export function BlogPagination({ page, pageCount }: { page: number; pageCount: number }) {
  if (pageCount <= 1) return null;
  const linkClass = (active = false) =>
    cn(
      buttonVariants({ variant: active ? "default" : "outline", size: "sm" }),
      "min-h-10 min-w-10",
    );

  return (
    <nav aria-label="Blog pages" className="mt-10 flex flex-wrap items-center justify-center gap-2">
      {page > 1 ? (
        <Link href={blogPageHref(page - 1)} rel="prev" className={linkClass()}>
          <ChevronLeft className="mr-1 size-4" aria-hidden="true" /> Previous
        </Link>
      ) : null}
      {pageList(page, pageCount).map((p, i) =>
        p === "gap" ? (
          <span key={`gap-${i}`} className="px-1 text-muted-foreground" aria-hidden="true">
            …
          </span>
        ) : (
          <Link
            key={p}
            href={blogPageHref(p)}
            aria-label={`Page ${p}`}
            aria-current={p === page ? "page" : undefined}
            className={linkClass(p === page)}
          >
            {p}
          </Link>
        ),
      )}
      {page < pageCount ? (
        <Link href={blogPageHref(page + 1)} rel="next" className={linkClass()}>
          Next <ChevronRight className="ml-1 size-4" aria-hidden="true" />
        </Link>
      ) : null}
    </nav>
  );
}
