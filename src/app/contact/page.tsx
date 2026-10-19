import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";
import { absoluteUrl, canonicalFor, pageSocial } from "@/lib/seo";

const TITLE = `Contact ${SITE.name} — Support for the Free Invoice Generator`;
const DESCRIPTION = `Email ${SITE.email} for support, feature requests and bug reports. Invoices stay in your browser — we only see what you send us.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: canonicalFor("/contact") },
  ...pageSocial({
    title: TITLE,
    description: DESCRIPTION,
    url: canonicalFor("/contact"),
  }),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: TITLE,
      description: DESCRIPTION,
      url: absoluteUrl("/contact"),
    },
    {
      "@type": "FAQPage",
      mainEntity: CONTACT_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Contact"
        title="Contact Invoice Creator"
        lead={`${SITE.name} (${SITE.host}) is operated by ${SITE.operator}. Email ${SITE.email} for support, feature requests and bug reports — or use the form below to draft a message.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <section aria-labelledby="form-heading">
            <h2 id="form-heading" className="text-2xl font-bold">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For technical support, please include enough information about the issue to help us
              understand and reproduce the problem.
            </p>
            <ContactForm />
          </section>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <h2 className="text-lg font-bold">Contact Information</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Company:</strong> {SITE.operator}
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <span className="block text-xs text-muted-foreground">Email</span>
                    <a className="hover:underline" href={`mailto:${SITE.email}`}>
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <span className="block text-xs text-muted-foreground">Phone</span>
                    <a className="hover:underline" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <span className="block text-xs text-muted-foreground">Location</span>
                    <span>{SITE.address}</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <span className="block text-xs text-muted-foreground">Hours</span>
                    <span>{SITE.hours}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-bold">Before you write</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>
                  Many questions are answered in the{" "}
                  <Link href="/faq" className="font-medium text-foreground underline">
                    FAQ
                  </Link>{" "}
                  and the{" "}
                  <Link href="/user-guide" className="font-medium text-foreground underline">
                    user guide
                  </Link>
                  .
                </li>
                <li>For a bug, tell us your browser, device and the steps that caused it.</li>
                <li>
                  Never send real bank details or client data — we do not need them to help you.
                </li>
                <li>We answer most messages within one business day, Monday to Friday.</li>
              </ul>
            </div>
          </aside>
        </div>

        <section aria-labelledby="contact-faq" className="mt-20 max-w-3xl">
          <h2 id="contact-faq" className="text-2xl font-bold">
            Contact FAQs
          </h2>
          {/* Answers stay visible in the HTML for crawlers and AdSense review — not accordion-only. */}
          <div className="mt-6 space-y-8">
            {CONTACT_FAQS.map((f) => (
              <div key={f.q} className="border-b border-border pb-6 last:border-0">
                <h3 className="text-base font-semibold sm:text-lg">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
