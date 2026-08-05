import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT_FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Please add a subject"),
  message: z.string().min(20, "Please give us at least 20 characters of detail"),
});
type FormValues = z.infer<typeof schema>;

export const Route = createFileRoute("/contact")({
  component: Page,
  head: () => ({
    meta: [
      { title: `Contact ${SITE.name} — Support for the Free Invoice Generator` },
      {
        name: "description",
        content:
          "Get in touch with the InvoiceForge team. Support, feature requests, bug reports and partnership enquiries — answered within one business day.",
      },
      { property: "og:title", content: `Contact ${SITE.name}` },
      { property: "og:description", content: "Support and enquiries for InvoiceForge." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: CONTACT_FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 500));
    toast.success(`Thanks ${values.name.split(" ")[0]}! We'll reply within one business day.`);
    reset();
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to the InvoiceForge team"
        lead="Support questions, feature ideas, bug reports or partnerships — we read everything."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <section aria-labelledby="form-heading">
            <h2 id="form-heading" className="text-2xl font-bold">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  {...register("subject")}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" role="alert" className="text-sm text-destructive">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={7}
                  {...register("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send message"}
              </Button>
            </form>
          </section>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <h2 className="text-lg font-bold">Business information</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <a className="hover:underline" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{SITE.phone}</span>
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
              aria-label="Map showing the InvoiceForge office location in Austin, Texas"
              className="surface-grid grid aspect-[4/3] w-full place-items-center rounded-2xl border border-border bg-muted/40"
            >
              <div className="text-center">
                <MapPin className="mx-auto size-7 text-primary" aria-hidden="true" />
                <p className="mt-2 text-sm font-medium">Austin, TX</p>
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