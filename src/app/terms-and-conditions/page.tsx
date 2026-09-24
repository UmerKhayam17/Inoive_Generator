import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { SITE } from "@/data/site";

const TITLE = `Terms & Conditions — ${SITE.name}`;
const DESCRIPTION =
  "The terms that govern your use of the Invoice Creator free invoice generator, including acceptable use, intellectual property and liability.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "Terms governing use of Invoice Creator.",
    type: "website",
    url: "/terms-and-conditions",
  },
  alternates: { canonical: "/terms-and-conditions" },
};

export default function Page() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="24 September 2026"
      lead="By using Invoice Creator you agree to these terms. They are written to be readable — please still read them."
    >
      <h2>1. Acceptance</h2>
      <p>
        By accessing {SITE.name} you agree to be bound by these Terms &amp; Conditions. If you do
        not agree, please do not use the service.
      </p>
      <p>
        {SITE.name} is operated by {SITE.operator}, a software development company based in{" "}
        {SITE.address}.
      </p>

      <h2>2. The service</h2>
      <p>
        {SITE.name} provides a free, browser-based tool for creating and downloading invoice
        documents, together with educational articles and templates. The service is provided
        &quot;as is&quot; and may change or be withdrawn at any time.
      </p>

      <h2>3. No account required</h2>
      <p>
        You do not need to register. Because invoice data is stored only in your browser, you are
        solely responsible for keeping copies of documents you create.
      </p>

      <h2>4. Acceptable use</h2>
      <ul>
        <li>Do not use the service to create fraudulent, misleading or unlawful documents.</li>
        <li>Do not attempt to disrupt, overload or reverse-engineer the service.</li>
        <li>Do not scrape, resell or redistribute our content without written permission.</li>
        <li>Do not upload content you do not have the right to use, including logos.</li>
      </ul>

      <h2>5. Your content</h2>
      <p>
        You retain all rights to the information you enter and the invoices you generate. We claim
        no ownership over them and, because the tool is client-side, we do not receive them.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        The website design, template layouts, code and written articles are owned by {SITE.operator}{" "}
        and protected by copyright. You may use the generated invoice documents commercially without
        restriction; you may not republish the templates or articles as your own.
      </p>

      <h2>7. No professional advice</h2>
      <p>
        Articles about tax, GST, VAT and invoicing requirements are general information only and are
        not legal, tax or accounting advice. See our <a href="/disclaimer">Disclaimer</a>.
      </p>

      <h2>8. Third-party links and advertising</h2>
      <p>
        The site contains links to third-party websites and may display advertising. We are not
        responsible for third-party content, products or privacy practices.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {SITE.name} is not liable for any indirect,
        incidental or consequential loss, including lost profits, lost data or unpaid invoices,
        arising from your use of the service.
      </p>

      <h2>10. Indemnity</h2>
      <p>
        You agree to indemnify {SITE.name} against claims arising from your misuse of the service or
        breach of these terms.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These Terms and Conditions shall be governed by and interpreted in accordance with the
        applicable laws governing the operation of {SITE.operator} in Pakistan, without prejudice to
        any mandatory consumer protection rights that may apply to users in their respective
        jurisdictions.
      </p>
      <p>
        If you have questions about these Terms, please contact us through our{" "}
        <a href="/contact">Contact page</a>.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or
        call <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>.
      </p>
    </LegalPage>
  );
}
