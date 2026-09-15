"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { SITE } from "@/data/site";
import { TEMPLATES } from "@/data/templates";
import { toast } from "sonner";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Invoice Generator", href: "/invoice-generator" },
  { label: "Invoice Templates", href: "/invoice-templates" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Search", href: "/search" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-ink text-ink-foreground sm:mt-24">
      <div className="mx-auto max-w-[96rem] px-3 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <BrandLogo size="lg" className="rounded-lg bg-white/95 px-2" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              {SITE.name} is a free, browser-based invoice generator for freelancers and small
              businesses. Create professional PDF invoices in minutes — no signup, no watermarks,
              no limits.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink-foreground/70">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a className="hover:text-ink-foreground" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{SITE.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/70">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-ink-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Templates">
            <h2 className="text-sm font-semibold uppercase tracking-wider">Templates</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/70">
              {TEMPLATES.slice(0, 8).map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/invoice-templates/${t.slug}`}
                    className="hover:text-ink-foreground"
                  >
                    {t.name} · Top-rated {t.industry}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <nav aria-label="Legal">
              <h2 className="text-sm font-semibold uppercase tracking-wider">Resources</h2>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/70">
                <li>
                  <Link href="/tools" className="hover:text-ink-foreground">
                    Free Business Tools
                  </Link>
                </li>
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-ink-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider">Newsletter</h2>
            <form
              className="mt-3 space-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("You're subscribed! Check your inbox for a confirmation email.");
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@company.com"
                className="border-ink-foreground/20 bg-ink-foreground/5 placeholder:text-ink-foreground/40"
              />
              <Button type="submit" variant="secondary" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-ink-foreground/10 pt-6 text-xs text-ink-foreground/60 sm:grid-cols-3 sm:items-center">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-center">Developed by Next Software Development Company</p>
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            {SITE.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
