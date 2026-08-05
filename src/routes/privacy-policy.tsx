import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/layout/LegalPage";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/privacy-policy")({
  component: Page,
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${SITE.name}` },
      {
        name: "description",
        content:
          "How InvoiceForge handles your data. Invoices are processed in your browser and never uploaded to our servers. Read our full privacy policy.",
      },
      { property: "og:title", content: `Privacy Policy — ${SITE.name}` },
      {
        property: "og:description",
        content: "How InvoiceForge collects, uses and protects information.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 August 2026"
      lead="We built InvoiceForge so your invoice data never has to leave your device. This policy explains exactly what we do and do not collect."
    >
      <h2>1. Who we are</h2>
      <p>
        {SITE.name} (&quot;we&quot;, &quot;us&quot;) operates this website and the free invoice
        generator available on it. You can reach us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or by post at {SITE.address}.
      </p>

      <h2>2. Invoice data stays in your browser</h2>
      <p>
        The invoice generator runs entirely client-side. Company details, customer details, line
        items, logos and totals are stored in your browser&apos;s local storage so you can return to
        an unfinished invoice. This information is never transmitted to us and we cannot read it.
        Clearing your browser data deletes it permanently.
      </p>

      <h2>3. Information we do collect</h2>
      <ul>
        <li>
          <strong>Contact form submissions.</strong> Your name, email address and message, used only
          to reply to you.
        </li>
        <li>
          <strong>Newsletter sign-ups.</strong> Your email address, used to send occasional product
          updates. You can unsubscribe from any email.
        </li>
        <li>
          <strong>Analytics.</strong> Aggregated, non-identifying usage data such as page views,
          referrers, approximate country and device type.
        </li>
        <li>
          <strong>Server logs.</strong> Standard technical logs including IP address and user agent,
          retained for security and troubleshooting.
        </li>
      </ul>

      <h2>4. Legal bases for processing</h2>
      <p>
        Where required by law, we rely on your consent (newsletter, non-essential cookies), the
        performance of a contract (responding to your enquiry) and our legitimate interests
        (securing and improving the service).
      </p>

      <h2>5. Cookies and advertising</h2>
      <p>
        We use essential cookies to remember your theme preference, and we may display advertising
        supplied by third-party networks such as Google AdSense. Advertising partners may set
        cookies or use device identifiers to serve and measure ads. See our{" "}
        <a href="/cookie-policy">Cookie Policy</a> for details and opt-out links.
      </p>

      <h2>6. Sharing your information</h2>
      <p>
        We do not sell personal information. We share data only with service providers who help us
        run the site (hosting, email delivery, analytics, advertising), each bound by contractual
        confidentiality obligations, or where required by law.
      </p>

      <h2>7. Retention</h2>
      <p>
        Contact messages are kept for up to 24 months. Newsletter data is kept until you
        unsubscribe. Analytics data is retained in aggregated form.
      </p>

      <h2>8. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete, restrict or
        port your personal data, to object to processing, and to withdraw consent. Contact us at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we will respond within 30 days.
      </p>

      <h2>9. Children</h2>
      <p>
        This service is not directed at children under 13 and we do not knowingly collect their
        personal information.
      </p>

      <h2>10. International transfers</h2>
      <p>
        Our providers may process data outside your country. Where that happens we rely on
        appropriate safeguards such as standard contractual clauses.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be highlighted on this
        page with a revised &quot;last updated&quot; date.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about privacy? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or use our{" "}
        <a href="/contact">contact form</a>.
      </p>
    </LegalPage>
  );
}