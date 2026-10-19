"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE } from "@/data/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Please add a subject"),
  message: z.string().min(20, "Please give us at least 20 characters of detail"),
});
type FormValues = z.infer<typeof schema>;

function buildBody(values: FormValues) {
  return `From: ${values.name} <${values.email}>\n\n${values.message}`;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    const body = buildBody(values);
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    toast.success("Opening your email app", {
      description: `If nothing opens, use “Copy message” below or write to ${SITE.email}.`,
    });
    reset();
  };

  const copyMessage = async () => {
    const values = getValues();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      toast.error("Please fill the form first", {
        description: "Name, email, subject and a short message are required.",
      });
      return;
    }
    const text = `To: ${SITE.email}\nSubject: ${parsed.data.subject}\n\n${buildBody(parsed.data)}`;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Message copied", {
        description: `Paste it into any email app addressed to ${SITE.email}.`,
      });
    } catch {
      toast.error("Could not copy", {
        description: `Please email ${SITE.email} directly.`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-5">
      <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
        <p>
          Support email:{" "}
          <a className="font-medium text-foreground underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </p>
        <p className="mt-1">
          We read every message during {SITE.hours}. Typical reply time is one business day.
        </p>
      </div>

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
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Opening…" : `Email ${SITE.email}`}
        </Button>
        <Button type="button" size="lg" variant="outline" onClick={copyMessage}>
          Copy message
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        “Email” opens your mail app with a draft to {SITE.email}. “Copy message” puts the same
        content on your clipboard if mailto is blocked — then paste into Gmail, Outlook or any
        client. We do not operate a server-side inbox form; your message only reaches us when you
        send the email.
      </p>
    </form>
  );
}
