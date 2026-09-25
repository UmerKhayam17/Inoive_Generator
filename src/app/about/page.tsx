import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import { TEMPLATE_COUNT } from "@/data/templates";

const TITLE = `About ${SITE.name} — Free Invoicing Tools for Small Business`;
const DESCRIPTION =
  "Invoice Creator is a free online invoice generator operated by Next Software Development Company in Islamabad, Pakistan. No signup, professional PDF invoices.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: `About ${SITE.name}`,
    description: DESCRIPTION,
    type: "website",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="About Invoice Creator"
        lead={SITE.operatorDescription}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <article className="prose-invoice">
            <p>
              Our goal is to make professional invoicing simple and accessible for freelancers,
              small businesses, consultants, agencies, service providers, and other independent
              professionals.
            </p>
            <p>
              With Invoice Creator, users can create professional invoices without creating an
              account or installing software. Users can add business and customer information,
              products or services, taxes, discounts, shipping charges, payment details, logos, and
              signatures, then generate and download a professional PDF invoice.
            </p>

            <h2>What We Provide</h2>
            <p>Invoice Creator currently provides:</p>
            <ul>
              <li>Free online invoice creation</li>
              <li>Multiple professional invoice templates ({TEMPLATE_COUNT} currently available)</li>
              <li>PDF invoice generation</li>
              <li>Tax and discount calculations</li>
              <li>Logo and signature support</li>
              <li>Multiple currencies</li>
              <li>Mobile-friendly invoice creation</li>
              <li>Automatic draft saving</li>
              <li>Invoice templates for freelancers and businesses</li>
              <li>Invoice guidance and educational resources</li>
            </ul>

            <h2>Privacy-Focused Invoice Creation</h2>
            <p>
              We aim to keep invoice creation simple and privacy-conscious. Where functionality
              allows, invoice information can be processed or stored locally in the user&apos;s
              browser rather than requiring an account.
            </p>
            <p>
              Users should review our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> for complete information about how
              information is handled.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to provide a simple, reliable, and accessible invoicing tool that helps
              individuals and businesses create professional invoices without unnecessary complexity.
            </p>
            <p>
              Invoice Creator is continuously improved based on user feedback, technical
              improvements, and changes in invoicing requirements.
            </p>

            <h2>About Next Software Development Company</h2>
            <p>
              {SITE.operator} develops custom software, web applications, business management
              systems, CRM and ERP solutions, eCommerce platforms, booking systems, and other digital
              products.
            </p>
            <p>
              Invoice Creator is one of the products developed and maintained by the company.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions, encounter a technical issue, or want to suggest a feature,
              please contact us through our <Link href="/contact">Contact page</Link>.
            </p>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Operated by
              </p>
              <p className="mt-2 font-display text-xl font-bold">{SITE.operator}</p>
              <p className="mt-1 text-sm text-muted-foreground">{SITE.address}</p>
              <p className="mt-5 font-display text-3xl font-extrabold">{TEMPLATE_COUNT}</p>
              <p className="text-sm text-muted-foreground">invoice templates in the library</p>
              <p className="mt-5 font-display text-3xl font-extrabold">$0</p>
              <p className="text-sm text-muted-foreground">the price to create and download</p>
              <p className="mt-5 font-display text-3xl font-extrabold">0</p>
              <p className="text-sm text-muted-foreground">accounts required — ever</p>
            </div>
            <AdSlot id="about-sidebar" format="rectangle" />
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
