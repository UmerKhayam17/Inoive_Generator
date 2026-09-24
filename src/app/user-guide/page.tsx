import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { SmoothScrollButton } from "@/components/layout/SmoothScrollButton";
import { FixedGuideSidebar } from "@/components/layout/FixedGuideSidebar";
import { AdSlot } from "@/components/layout/AdSlot";
import { Button } from "@/components/ui/button";
import { LOCALES } from "@/data/locales";
import { SITE } from "@/data/site";
import { TEMPLATE_COUNT, TEMPLATES } from "@/data/templates";

const TITLE = `User Guide — How to Create & Download Invoices | ${SITE.name}`;
const DESCRIPTION =
  "Complete Invoice Creator user manual: create invoices, edit details, choose templates, set typography, pick a country, upload logo and signature, and download a PDF.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/user-guide" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/user-guide",
  },
};

const TOC = [
  { id: "quick-start", label: "Quick start" },
  { id: "open-generator", label: "Open the generator" },
  { id: "choose-location", label: "Choose a country / location" },
  { id: "templates", label: "Select a template & color" },
  { id: "typography", label: "Typography (fonts & sizes)" },
  { id: "branding", label: "Logo & signature" },
  { id: "invoice-details", label: "Invoice details" },
  { id: "parties", label: "Your business & client" },
  { id: "line-items", label: "Line items" },
  { id: "totals", label: "Tax, discount, shipping & paid" },
  { id: "notes", label: "Notes & payment terms" },
  { id: "watermark", label: "Watermark (optional)" },
  { id: "preview-pdf", label: "Preview & download PDF" },
  { id: "drafts", label: "Autosave, drafts & reset" },
  { id: "mobile", label: "Using on mobile" },
  { id: "tips", label: "Tips & common fixes" },
  { id: "privacy", label: "Privacy & limits" },
] as const;

function ContentsNav({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Guide contents"
      className={className ?? "rounded-xl border border-border bg-card p-5"}
    >
      <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
        Contents
      </h2>
      <ol className="mt-4 grid gap-2 text-sm">
        {TOC.map((item, i) => (
          <li key={item.id}>
            <SmoothScrollButton
              targetId={item.id}
              className="w-full text-muted-foreground hover:text-primary"
            >
              <span className="mr-1.5 tabular-nums text-xs text-muted-foreground/80">
                {i + 1}.
              </span>
              {item.label}
            </SmoothScrollButton>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function UserGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Help"
        title="Invoice Creator user guide"
        lead="Everything you need to create, edit, and download a professional PDF invoice — templates, typography, country presets, branding, and more. No account required."
        crumbs={[{ label: "Home", href: "/" }, { label: "User guide" }]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/invoice-generator">Open invoice generator</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/faq">FAQ</Link>
          </Button>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-[96rem] px-4 py-12 pb-24 sm:px-6 lg:px-8 lg:pb-28">
        <AdSlot id="user-guide-top" format="leaderboard" className="mb-10" />

        <div className="mb-10 lg:hidden">
          <ContentsNav />
        </div>

        <div className="lg:flex lg:items-stretch lg:gap-10">
          <FixedGuideSidebar>
            <ContentsNav className="rounded-xl border border-border bg-card p-5 shadow-sm" />
          </FixedGuideSidebar>

          <div className="min-w-0 max-w-3xl flex-1">
            <article className="prose-invoice space-y-14">
            <section id="quick-start" className="scroll-mt-28">
              <h2>1. Quick start</h2>
              <ol>
                <li>
                  Open the{" "}
                  <Link href="/invoice-generator">free invoice generator</Link> (or a{" "}
                  <SmoothScrollButton targetId="choose-location" className="text-primary underline">
                    country page
                  </SmoothScrollButton>
                  ).
                </li>
                <li>Pick a template and (optionally) a brand color.</li>
                <li>Fill in invoice number, dates, your business, and your client.</li>
                <li>Add products or services as line items.</li>
                <li>Set tax, discount, or shipping if needed.</li>
                <li>Check the live preview on the right (or Preview tab on mobile).</li>
                <li>
                  Click <strong>Download PDF</strong>.
                </li>
              </ol>
              <p>
                Your draft autosaves in this browser as you type. You do not need to create an
                account.
              </p>
            </section>

            <section id="open-generator" className="scroll-mt-28">
              <h2>2. Open the generator</h2>
              <p>You can start from several places:</p>
              <ul>
                <li>
                  Header button <strong>Create Invoice</strong> →{" "}
                  <Link href="/invoice-generator">/invoice-generator</Link>
                </li>
                <li>
                  <Link href="/invoice-templates">Templates</Link> → open a template →{" "}
                  <strong>Use it</strong> (opens the generator with that template selected)
                </li>
                <li>Home page or footer links for country generators (Pakistan, UAE, UK, USA)</li>
              </ul>
              <p>
                The page opens with sample data so you can see how a finished invoice looks. Replace
                every sample field with your real details before sending the PDF to a client.
              </p>
            </section>

            <section id="choose-location" className="scroll-mt-28">
              <h2>3. Choose a country / location</h2>
              <p>
                Use a <strong>location page</strong> when you want currency and tax ID labels matched
                to a country — instead of a generic US-style form.
              </p>
              <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[36rem] text-left text-sm">
                  <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Country</th>
                      <th className="px-4 py-3 font-semibold">Currency</th>
                      <th className="px-4 py-3 font-semibold">Tax field</th>
                      <th className="px-4 py-3 font-semibold">Default tax %</th>
                      <th className="px-4 py-3 font-semibold">Open</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LOCALES.map((l) => (
                      <tr key={l.slug} className="border-t border-border">
                        <td className="px-4 py-3 font-medium">{l.country}</td>
                        <td className="px-4 py-3">{l.currency}</td>
                        <td className="px-4 py-3">
                          {l.taxIdLabel}
                          {l.taxIdSecondaryLabel ? ` · ${l.taxIdSecondaryLabel}` : ""}
                        </td>
                        <td className="px-4 py-3">{l.defaultTaxRate}%</td>
                        <td className="px-4 py-3">
                          <Link href={l.path} className="font-semibold text-primary hover:underline">
                            Open →
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                On location pages, tax labels change (for example <strong>NTN / STRN</strong> in
                Pakistan, <strong>TRN</strong> in the UAE, <strong>VAT number</strong> in the UK,{" "}
                <strong>EIN / Tax ID</strong> in the USA). Default tax rates are starting points
                only — always edit them to match your supply. These tools do not file taxes with
                FBR, FTA, HMRC, or any state agency.
              </p>
              <p>
                Prefer a neutral form? Use the main{" "}
                <Link href="/invoice-generator">invoice generator</Link> (USD by default, generic
                Tax / VAT ID label). You can still change currency in the Currency dropdown.
              </p>
            </section>

            <section id="templates" className="scroll-mt-28">
              <h2>4. Select a template &amp; color</h2>
              <p>
                In the <strong>Template</strong> section, click any of the {TEMPLATE_COUNT} layouts.
                The live preview updates immediately. Use{" "}
                <Link href="/invoice-templates">Compare all {TEMPLATE_COUNT}</Link> to browse by
                industry.
              </p>
              <p>Available templates:</p>
              <ul>
                {TEMPLATES.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/invoice-templates/${t.slug}`}>{t.name}</Link> — {t.industry}
                  </li>
                ))}
              </ul>
              <h3>Template color</h3>
              <ul>
                <li>
                  Under <strong>Template color</strong>, use <strong>Pick a color</strong> to change
                  headers, totals, and accents.
                </li>
                <li>
                  Click <strong>Reset to default</strong> to restore that template’s original accent.
                </li>
              </ul>
            </section>

            <section id="typography" className="scroll-mt-28">
              <h2>5. Typography (fonts &amp; sizes)</h2>
              <p>
                Open the <strong>Typography</strong> section. Turn on{" "}
                <strong>Enable custom typography</strong> to override the template’s default type.
              </p>
              <ul>
                <li>
                  <strong>Font style</strong> — Template default, Sans (Helvetica), Serif (Georgia),
                  Mono (Courier), Classic (Times), or Rounded (Verdana)
                </li>
                <li>
                  <strong>Body size</strong> — slider from Small (11px) to Large (18px)
                </li>
                <li>
                  <strong>Title size (Invoice heading)</strong> — H1 Large, H2 Medium, or H3 Compact
                </li>
                <li>
                  Toggles: <strong>Bold titles</strong>, <strong>Bold body</strong>,{" "}
                  <strong>Italic body</strong>, <strong>Italic notes</strong>
                </li>
                <li>
                  <strong>Reset</strong> restores typography defaults (and turns custom typography
                  off)
                </li>
              </ul>
              <p>
                A small live sample under the controls shows how “Invoice” and body text will look.
                The downloaded PDF uses the same settings as the preview.
              </p>
            </section>

            <section id="branding" className="scroll-mt-28">
              <h2>6. Logo &amp; signature</h2>
              <p>
                In <strong>Branding</strong>:
              </p>
              <ul>
                <li>
                  <strong>Logo</strong> — click Upload, choose PNG, JPG, or SVG (max 1.5 MB)
                </li>
                <li>
                  <strong>Signature</strong> — upload an image of your signature the same way
                </li>
                <li>
                  Use <strong>Remove</strong> next to either thumbnail to clear it
                </li>
              </ul>
              <p>
                Images stay in your browser draft only — they are not uploaded to our servers. On
                the PDF, the signature area is labelled <strong>Authorised signature</strong>.
              </p>
            </section>

            <section id="invoice-details" className="scroll-mt-28">
              <h2>7. Invoice details</h2>
              <ul>
                <li>
                  <strong>Invoice number *</strong> — required (for example 2026-0001). Accounts
                  teams often reject invoices without a unique number.
                </li>
                <li>
                  <strong>PO number</strong> — optional purchase order reference
                </li>
                <li>
                  <strong>Issue date *</strong> and <strong>Due date *</strong> — due date cannot be
                  before the issue date
                </li>
                <li>
                  <strong>Currency</strong> — USD, EUR, GBP, INR, AUD, CAD, AED, or PKR
                </li>
              </ul>
            </section>

            <section id="parties" className="scroll-mt-28">
              <h2>8. Your business &amp; client</h2>
              <p>
                Fill <strong>From (your business)</strong> and <strong>Bill to (client)</strong>:
              </p>
              <ul>
                <li>
                  <strong>Name *</strong> — at least 2 characters
                </li>
                <li>
                  <strong>Email</strong> — optional; if filled, it must be a valid address
                </li>
                <li>
                  <strong>Address</strong>, <strong>Phone</strong>
                </li>
                <li>
                  <strong>Tax / VAT ID</strong> (or the location label such as NTN, TRN, VAT number,
                  EIN)
                </li>
                <li>
                  On country pages: a second ID field (STRN, Trade licence, Company number, State tax
                  ID)
                </li>
              </ul>
            </section>

            <section id="line-items" className="scroll-mt-28">
              <h2>9. Line items</h2>
              <ul>
                <li>
                  Enter a clear <strong>description</strong>, <strong>quantity</strong>, and{" "}
                  <strong>rate</strong> for each row
                </li>
                <li>
                  Click <strong>Add line item</strong> for more rows
                </li>
                <li>Use the trash icon to remove a row (at least one row must remain)</li>
                <li>At least one line needs a description before you can download a PDF</li>
              </ul>
              <p>
                Tip: write descriptions a client can approve without emailing you — for example
                “Website redesign — homepage and 4 inner pages” instead of “Design work”.
              </p>
            </section>

            <section id="totals" className="scroll-mt-28">
              <h2>10. Tax, discount, shipping &amp; amount paid</h2>
              <ul>
                <li>
                  <strong>Tax rate (%)</strong> — or the location label (Sales tax / GST, VAT, etc.).
                  Value from 0 to 100.
                </li>
                <li>
                  <strong>Discount</strong> — choose <strong>%</strong> of subtotal or a fixed amount
                  in your currency
                </li>
                <li>
                  <strong>Shipping / extra</strong> — optional flat amount
                </li>
                <li>
                  <strong>Amount already paid</strong> — reduces the balance due (useful for deposits)
                </li>
              </ul>
              <p>
                Totals update live: subtotal → discount → tax on the remainder → plus shipping =
                total. <strong>Balance due</strong> = total minus amount already paid.
              </p>
            </section>

            <section id="notes" className="scroll-mt-28">
              <h2>11. Notes &amp; payment terms</h2>
              <ul>
                <li>
                  <strong>Notes</strong> — thank-you message, bank details, IBAN, payment link, etc.
                </li>
                <li>
                  <strong>Payment terms</strong> — Net 14, late fees, reverse-charge wording, and
                  similar
                </li>
              </ul>
              <p>
                Put payment instructions on the invoice itself so the client does not have to ask
                for them in a separate email.
              </p>
            </section>

            <section id="watermark" className="scroll-mt-28">
              <h2>12. Watermark (optional)</h2>
              <p>
                Invoice Creator does <strong>not</strong> stamp its own brand on your PDF. You can
                optionally add <em>your own</em> watermark:
              </p>
              <ul>
                <li>
                  Turn on <strong>Enable watermark</strong>
                </li>
                <li>
                  Enter <strong>Watermark text</strong> (or tap presets: PAID, DRAFT, CONFIDENTIAL,
                  COPY)
                </li>
                <li>
                  Adjust <strong>Opacity</strong>
                </li>
                <li>
                  Or upload an <strong>Image watermark</strong> (text is hidden while an image is
                  set)
                </li>
              </ul>
            </section>

            <section id="preview-pdf" className="scroll-mt-28">
              <h2>13. Preview &amp; download PDF</h2>
              <h3>Live preview</h3>
              <p>
                On desktop, the preview stays visible on the right and scales to fit the column. The
                PDF exports at full A4 size — what you see is the same layout, just scaled down for
                the screen.
              </p>
              <h3>Download PDF</h3>
              <ol>
                <li>
                  Click <strong>Download PDF</strong> (desktop) or <strong>PDF</strong> (mobile bar)
                </li>
                <li>
                  If something is missing, the form highlights errors and shows{" "}
                  <strong>Fix these before downloading</strong>
                </li>
                <li>
                  When ready, the file downloads as{" "}
                  <code>invoice-&#123;number&#125;-&#123;client&#125;.pdf</code>
                </li>
              </ol>
              <p>
                While exporting you will see <strong>Building PDF…</strong>. Success shows{" "}
                <strong>PDF downloaded — Check your downloads folder.</strong>
              </p>
              <h3>Printing</h3>
              <p>
                There is no separate Print button in the generator. Download the PDF, then print it
                from your PDF viewer or browser.
              </p>
            </section>

            <section id="drafts" className="scroll-mt-28">
              <h2>14. Autosave, drafts &amp; reset</h2>
              <ul>
                <li>
                  Status shows <strong>Autosave on</strong>, then <strong>Draft saved</strong> with
                  the time after each change
                </li>
                <li>
                  Drafts are stored in <strong>this browser only</strong> (separate drafts for the
                  main generator and each country page)
                </li>
                <li>
                  Returning later shows{" "}
                  <strong>Draft restored — We picked up where you left off.</strong>
                </li>
                <li>
                  <strong>Reset</strong> clears the draft and restores sample defaults for that page
                </li>
              </ul>
              <p>
                Clearing site data, using another browser, or another device starts a blank draft.
                Keep a downloaded PDF if you need a permanent copy.
              </p>
            </section>

            <section id="mobile" className="scroll-mt-28">
              <h2>15. Using on mobile</h2>
              <ul>
                <li>
                  Switch between <strong>Edit</strong> and <strong>Preview</strong> tabs
                </li>
                <li>
                  The bottom bar shows balance due, autosave status, <strong>Reset</strong>, and{" "}
                  <strong>PDF</strong>
                </li>
                <li>
                  From Preview, use <strong>Back to editing</strong> to return to the form
                </li>
              </ul>
            </section>

            <section id="tips" className="scroll-mt-28">
              <h2>16. Tips &amp; common fixes</h2>
              <ul>
                <li>
                  <strong>“Fields need attention”</strong> — fill required names, invoice number,
                  dates, and at least one described line item; fix any invalid email
                </li>
                <li>
                  <strong>Due date error</strong> — due date cannot be before the issue date
                </li>
                <li>
                  <strong>Image upload failed</strong> — use PNG, JPG, or SVG under 1.5 MB
                </li>
                <li>
                  <strong>Wrong currency symbol</strong> — change Currency in Invoice details (or
                  open the matching country page)
                </li>
                <li>
                  <strong>Lost draft</strong> — drafts do not sync across phones/computers; download
                  the PDF when finished
                </li>
              </ul>
            </section>

            <section id="privacy" className="scroll-mt-28">
              <h2>17. Privacy &amp; limits</h2>
              <ul>
                <li>Invoice data is processed in your browser and autosaved locally</li>
                <li>We do not receive your invoice contents when you create or download a PDF</li>
                <li>
                  The tool is not tax, legal, or accounting advice — see our{" "}
                  <Link href="/disclaimer">Disclaimer</Link> and{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  Need help? <Link href="/contact">Contact us</Link> or read the{" "}
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </section>
          </article>

          <div className="mt-14 rounded-2xl border border-border bg-card p-8 text-center shadow-elegant">
            <h2 className="text-xl font-bold text-foreground">Ready to create an invoice?</h2>
            <p className="mt-2 text-muted-foreground">
              Open the generator and download your PDF in a few minutes.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/invoice-generator">Start free invoice</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/invoice-templates">Browse templates</Link>
              </Button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
