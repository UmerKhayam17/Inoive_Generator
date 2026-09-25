"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { SITE } from "@/data/site";
import { TEMPLATES } from "@/data/templates";
import { LOCALES } from "@/data/locales";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Invoice Generator", href: "/invoice-generator" },
  { label: "Invoice Templates", href: "/invoice-templates" },
  { label: "User Guide", href: "/user-guide" },
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
    <footer
      data-site-footer
      className="relative z-30 mt-16 border-t border-border bg-ink text-ink-foreground sm:mt-24"
    >
      <div className="mx-auto max-w-[96rem] px-3 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <BrandLogo size="lg" className="rounded-lg bg-white/95 px-2" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              {SITE.operatorDescription} Create professional invoices online, customize your invoice
              with supported templates and business information, and download your completed invoice
              as a PDF.
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
                <a
                  className="hover:text-ink-foreground"
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                >
                  {SITE.phone}
                </a>
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
                    {t.name} · {t.industry}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal and locales">
            <h2 className="text-sm font-semibold uppercase tracking-wider">Legal</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/70">
              <li>
                <Link href="/tools" className="hover:text-ink-foreground">
                  Free Business Tools
                </Link>
              </li>
              {LOCALES.map((l) => (
                <li key={l.slug}>
                  <Link href={l.path} className="hover:text-ink-foreground">
                    Invoice generator — {l.country}
                  </Link>
                </li>
              ))}
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-ink-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 grid gap-4 border-t border-ink-foreground/10 pt-6 text-xs text-ink-foreground/60 sm:grid-cols-3 sm:items-center">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {SITE.operator}. All rights reserved.
          </p>
          <p className="text-center">
            {SITE.name} · Operated by {SITE.operator}
          </p>
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
