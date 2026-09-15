import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";

const TITLE = `Contact ${SITE.name} — Support for the Free Invoice Generator`;
const DESCRIPTION = `Email ${SITE.email} for support, feature requests and bug reports. Invoices stay in your browser — we only see what you send us.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact ${SITE.name}`,
    description: DESCRIPTION,
    type: "website",
    url: "/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CONTACT_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
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
        title="Email the Invoice Creator team"
        lead="Support questions, feature ideas, bug reports or partnerships — send them to a real inbox."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <div className="mx-auto max-w-[96rem] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <section aria-labelledby="form-heading">
            <h2 id="form-heading" className="text-2xl font-bold">
              Send us a message
            </h2>
            <ContactForm />
          </section>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <h2 className="text-lg font-bold">How to reach us</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <a className="hover:underline" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <a className="hover:underline" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{SITE.address}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{SITE.hours}</span>
                </li>
              </ul>
            </div>

            <div
              role="img"
              aria-label="Map showing the Invoice Creator office location in Islamabad, Pakistan"
              className="surface-grid grid aspect-[4/3] w-full place-items-center rounded-2xl border border-border bg-muted/40"
            >
              <div className="text-center">
                <MapPin className="mx-auto size-7 text-primary" aria-hidden="true" />
                <p className="mt-2 text-sm font-medium">Islamabad, Pakistan</p>
                <p className="text-xs text-muted-foreground">Map placeholder</p>
              </div>
            </div>

            <AdSlot id="contact-sidebar" format="rectangle" />
          </aside>
        </div>

        <section aria-labelledby="contact-faq" className="mt-20 max-w-3xl">
          <h2 id="contact-faq" className="text-2xl font-bold">
            Contact FAQs
          </h2>
          <Accordion type="single" collapsible className="mt-6">
            {CONTACT_FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`c-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </>
  );
}
