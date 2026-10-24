import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { EDITORIAL } from "@/data/editorial";
import { SITE } from "@/data/site";
import { TEMPLATE_COUNT } from "@/data/templates";
import { absoluteUrl, canonicalFor, pageSocial, siteLogoUrl } from "@/lib/seo";

const TITLE = `About ${SITE.name}: Free Invoicing Tools for Small Business`;
const DESCRIPTION = `${SITE.name} is a free online invoice generator at ${SITE.host}, operated by ${SITE.operator} in ${SITE.address}. No signup, professional PDF invoices.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: canonicalFor("/about") },
  ...pageSocial({
    title: TITLE,
    description: DESCRIPTION,
    url: canonicalFor("/about"),
  }),
};

const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: absoluteUrl("/about"),
  mainEntity: {
    "@type": "Organization",
    name: SITE.operator,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    logo: siteLogoUrl(),
    brand: { "@type": "Brand", name: SITE.name },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
      <PageHeader
        eyebrow="About us"
        title={`About ${SITE.name}`}
        lead={SITE.operatorDescription}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <article className="prose-invoice">
            <h2>Brand and website</h2>
            <p>
              <strong>{SITE.name}</strong> is the product name of this free invoice generator. The
              public website is <strong>{SITE.host}</strong>. Both are operated by{" "}
              <strong>{SITE.operator}</strong>, a software development company based in{" "}
              {SITE.address}. If you see {SITE.name} in the interface and {SITE.host} in the
              address bar, you are on the same service.
            </p>
            <p>
              Our goal is to make professional invoicing simple and accessible for freelancers,
              small businesses, consultants, agencies, service providers, and other independent
              professionals.
            </p>
            <p>
              With {SITE.name}, you can create professional invoices without creating an account or
              installing software. Add business and customer information, products or services,
              taxes, discounts, shipping charges, payment details, logos, and signatures, then
              download a professional PDF invoice.
            </p>

            <h2>What We Provide</h2>
            <p>{SITE.name} currently provides:</p>
            <ul>
              <li>Free online invoice creation with instant PDF download</li>
              <li>{TEMPLATE_COUNT} professional invoice templates with unique industry scenarios</li>
              <li>
                Helper tools:{" "}
                <Link href="/tools/invoice-number-generator">invoice number generator</Link> and{" "}
                <Link href="/tools/sales-tax-calculator">sales tax calculator</Link>
              </li>
              <li>Country presets for Pakistan, UAE, UK and USA</li>
              <li>Logo and signature support, multiple currencies, autosaved drafts</li>
              <li>
                Practical guides maintained under our{" "}
                <Link href="/editorial-standards">editorial standards</Link>
              </li>
            </ul>

            <h2>How we maintain the site</h2>
            <p>{EDITORIAL.mission}</p>
            <p>
              Material product and content changes are listed on{" "}
              <Link href="/whats-new">What’s new</Link>. Last full review:{" "}
              <strong>{EDITORIAL.lastReviewed}</strong>. We prioritise fixing real invoicing
              problems over publishing thin, repetitive pages.
            </p>

            <h2>Privacy-Focused Invoice Creation</h2>
            <p>
              Invoice creation is privacy-conscious by design. Company details, customer details,
              line items, logos and totals are processed and stored in your browser&apos;s local
              storage. They are never transmitted to our servers, and we cannot read them. No
              account is required.
            </p>
            <p>
              If you accept cookies, analytics partners may collect separate usage data (such as
              page views). When advertising is enabled on the site, advertising partners may do the
              same for ad delivery. That is not your invoice content. See our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
              <Link href="/cookie-policy">Cookie Policy</Link> for full details.
            </p>

            <h2>About Next Software Development Company</h2>
            <p>
              {SITE.operator} develops custom software, web applications, business management
              systems, CRM and ERP solutions, eCommerce platforms, booking systems, and other
              digital products.
            </p>
            <p>Invoice Creator is one of the products developed and maintained by the company.</p>

            <h2>Contact Us</h2>
            <p>
              If you have questions, encounter a technical issue, or want to suggest a feature,
              please contact us through our <Link href="/contact">Contact page</Link>.
            </p>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Product &amp; site
              </p>
              <p className="mt-2 font-display text-xl font-bold">{SITE.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{SITE.host}</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Operated by
              </p>
              <p className="mt-2 font-display text-xl font-bold">{SITE.operator}</p>
              <p className="mt-1 text-sm text-muted-foreground">{SITE.address}</p>
              <p className="mt-1 text-sm">
                <a className="text-primary underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
              <p className="mt-5 font-display text-3xl font-extrabold">{TEMPLATE_COUNT}</p>
              <p className="text-sm text-muted-foreground">invoice templates in the library</p>
              <p className="mt-5 font-display text-3xl font-extrabold">$0</p>
              <p className="text-sm text-muted-foreground">the price to create and download</p>
              <p className="mt-5 font-display text-3xl font-extrabold">0</p>
              <p className="text-sm text-muted-foreground">accounts required, ever</p>
            </div>
          </aside>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/invoice-generator">Create a free invoice</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Talk to us</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
