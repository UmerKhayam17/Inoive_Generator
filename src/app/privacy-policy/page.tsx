import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { SITE } from "@/data/site";
import { canonicalFor } from "@/lib/seo";

const TITLE = `Privacy Policy — ${SITE.name}`;
const DESCRIPTION =
  "How Invoice Creator handles your data. Invoices are processed in your browser and never uploaded to our servers. Read our full privacy policy.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "How Invoice Creator collects, uses and protects information.",
    type: "website",
    url: canonicalFor("/privacy-policy"),
  },
  alternates: { canonical: canonicalFor("/privacy-policy") },
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="9 October 2026"
      lead="We built Invoice Creator so your invoice data never has to leave your device. This policy explains exactly what we do and do not collect."
    >
      <h2>1. Who we are</h2>
      <p>
        {SITE.name} (&quot;we&quot;, &quot;us&quot;) is a free online invoice generation service
        operated by {SITE.operator}, a software development company based in {SITE.address}. We
        operate this website and the free invoice generator available on it.
      </p>
      <p>
        For questions regarding this Privacy Policy, the service, or your information, you can
        contact us using the contact details provided on our <a href="/contact">Contact page</a>.
      </p>
      <h3>Contact Information</h3>
      <ul>
        <li>
          <strong>Company:</strong> {SITE.operator}
        </li>
        <li>
          <strong>Website:</strong> nextfreeinvoicegenerator.com
        </li>
        <li>
          <strong>Location:</strong> {SITE.address}
        </li>
        <li>
          <strong>Email:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
        <li>
          <strong>Phone:</strong> <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
        </li>
      </ul>

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
          <strong>Email you send us.</strong> If you contact {SITE.email} (including via the contact
          page, which opens your own email app), we receive the name, address and message you choose
          to send, and we use it only to reply.
        </li>
        <li>
          <strong>Analytics.</strong> Aggregated, non-identifying usage data such as page views,
          referrers, approximate country and device type, when analytics is enabled.
        </li>
        <li>
          <strong>Server logs.</strong> Standard technical logs including IP address and user agent,
          retained for security and troubleshooting.
        </li>
      </ul>
      <p>
        We do not run an email newsletter and we do not operate a server-side contact inbox form.
      </p>

      <h2>4. Legal bases for processing</h2>
      <p>
        Where required by law, we rely on your consent (non-essential cookies), the performance of a
        contract (responding to your enquiry) and our legitimate interests (securing and improving
        the service).
      </p>

      <h2>5. Cookies and advertising</h2>
      <p>
        We use essential browser storage to remember your theme preference, your cookie choice and
        your invoice draft. With your consent, we also use Google Analytics to understand how the
        site is used, and we display advertising supplied by Google AdSense.
      </p>
      <h3>Google advertising</h3>
      <ul>
        <li>
          Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s
          prior visits to this website or other websites.
        </li>
        <li>
          Google&apos;s use of advertising cookies enables it and its partners to serve ads to our
          users based on their visit to this site and/or other sites on the Internet.
        </li>
        <li>
          You may opt out of personalised advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" rel="nofollow noopener" target="_blank">
            Google Ads Settings
          </a>
          . You can also opt out of some third-party vendors&apos; use of cookies for personalised
          advertising at{" "}
          <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">
            aboutads.info/choices
          </a>{" "}
          or, in Europe,{" "}
          <a href="https://www.youronlinechoices.eu/" rel="nofollow noopener" target="_blank">
            youronlinechoices.eu
          </a>
          .
        </li>
        <li>
          Learn how Google uses information from sites that use its services at{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            rel="nofollow noopener"
            target="_blank"
          >
            policies.google.com/technologies/partner-sites
          </a>
          .
        </li>
      </ul>
      <p>
        You can change your choice at any time by clearing this site&apos;s data in your browser,
        which brings back the cookie banner. See our <a href="/cookie-policy">Cookie Policy</a> for
        details.
      </p>

      <h2>6. Sharing your information</h2>
      <p>
        We do not sell personal information. We share data only with service providers who help us
        run the site (hosting, analytics, advertising), each bound by contractual confidentiality
        obligations, or where required by law.
      </p>

      <h2>7. Retention</h2>
      <p>
        Support emails are kept for up to 24 months. Analytics data is retained in aggregated form.
        Invoice drafts are never stored on our servers.
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
        <a href="/contact">contact page</a>.
      </p>
    </LegalPage>
  );
}
