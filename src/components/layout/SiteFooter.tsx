import { Link } from "@tanstack/react-router";
import { FileText, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SITE } from "@/data/site";
import { TEMPLATES } from "@/data/templates";
import { toast } from "sonner";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Invoice Generator", to: "/invoice-generator" },
  { label: "Invoice Templates", to: "/invoice-templates" },
  { label: "Blog", to: "/blog" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "Search", to: "/search" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Disclaimer", to: "/disclaimer" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <FileText className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold">{SITE.name}</span>
            </div>
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
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-ink-foreground">
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
                    to="/invoice-templates/$slug"
                    params={{ slug: t.slug }}
                    className="hover:text-ink-foreground"
                  >
                    {t.name} Invoice
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
                  <Link to="/tools" className="hover:text-ink-foreground">
                    Free Business Tools
                  </Link>
                </li>
                {legalLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="hover:text-ink-foreground">
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-foreground/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-foreground/60">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-4 text-xs text-ink-foreground/60">
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