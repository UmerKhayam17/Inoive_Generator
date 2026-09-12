"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { NAV_LINKS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[96rem] items-center justify-between gap-2 px-3 sm:h-24 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center"
          aria-label={`${SITE.name} home`}
        >
          <BrandLogo size="md" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                isActive(link.href) && "text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="min-h-10 min-w-10 sm:min-h-11 sm:min-w-11"
            aria-label="Search the site"
          >
            <Link href="/search">
              <Search className="size-5" />
            </Link>
          </Button>
          <ThemeToggle />
          <Button asChild className="ml-1 hidden md:inline-flex">
            <Link href="/invoice-generator">Create Invoice</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="min-h-10 min-w-10 lg:hidden sm:min-h-11 sm:min-w-11"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-background lg:hidden sm:max-h-[calc(100dvh-6rem)]"
        >
          <ul className="mx-auto max-w-[96rem] px-3 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-3.5 text-base font-medium text-foreground hover:bg-muted",
                    isActive(link.href) && "bg-muted",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Button asChild className="w-full min-h-11">
                <Link href="/invoice-generator" onClick={() => setOpen(false)}>
                  Create Invoice
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
