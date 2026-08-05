import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/layout/LegalPage";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/disclaimer")({
  component: Page,
  head: () => ({
    meta: [
      { title: `Disclaimer — ${SITE.name}` },
      {
        name: "description",
        content:
          "InvoiceForge provides general information and a free invoice tool. It is not legal, tax or accounting advice. Read the full disclaimer.",
      },
      { property: "og:title", content: `Disclaimer — ${SITE.name}` },
      { property: "og:description", content: "General information only — not professional advice." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
});

function Page() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="1 August 2026"
      lead="Please read this before relying on anything you find on this website."
    >
      <h2>1. General information only</h2>
      <p>
        All content on {SITE.name}, including articles about invoicing, tax, GST and VAT, is
        provided for general informational purposes. It does not constitute legal, tax, accounting
        or financial advice and should not be relied upon as such.
      </p>

      <h2>2. No professional relationship</h2>
      <p>
        Reading this site or using the invoice generator does not create an
        accountant–client or attorney–client relationship. Always consult a qualified professional
        in your jurisdiction before acting.
      </p>

      <h2>3. Accuracy</h2>
      <p>
        Invoicing and tax requirements differ by country and change frequently. While we work to
        keep content current, we make no warranty that it is complete, accurate or up to date.
      </p>

      <h2>4. Your documents are your responsibility</h2>
      <p>
        You are responsible for verifying that any invoice you generate meets the legal requirements
        that apply to your business, including mandatory fields, tax rates and record-keeping rules.
      </p>

      <h2>5. External links</h2>
      <p>
        We link to third-party resources for convenience. We do not endorse and are not responsible
        for their content or accuracy.
      </p>

      <h2>6. Advertising</h2>
      <p>
        This site displays third-party advertising. Advertisements do not constitute an endorsement
        of the advertiser or its products.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE.name} accepts no liability for any loss
        arising from reliance on the information or tools provided on this website.
      </p>

      <h2>8. Contact</h2>
      <p>
        Spotted something inaccurate? Please tell us at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </LegalPage>
  );
}