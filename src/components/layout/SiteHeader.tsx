import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { FileText, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS, SITE } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${SITE.name} home`}>
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <FileText className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">{SITE.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon" className="min-h-11 min-w-11" aria-label="Search the site">
            <Link to="/search">
              <Search className="size-5" />
            </Link>
          </Button>
          <ThemeToggle />
          <Button asChild className="ml-1 hidden sm:inline-flex">
            <Link to="/invoice-generator">Create Invoice</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="min-h-11 min-w-11 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Button asChild className="w-full">
                <Link to="/invoice-generator" onClick={() => setOpen(false)}>
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