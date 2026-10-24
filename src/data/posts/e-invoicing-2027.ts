import type { PostDraft } from "../blog";

export const EINVOICING_2027_POSTS: PostDraft[] = [
  {
    slug: "germany-e-invoicing-2027",
    title: "Germany E-Invoicing 2027: Who Must Issue E-Invoices",
    description:
      "E-invoicing in Germany from 2027: who must issue e-invoices, how the €800,000 turnover test works, exemptions, the 2028 deadline and a readiness checklist.",
    category: "tax-compliance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Germany",
    related: ["germany-e-invoicing-xrechnung-zugferd", "e-invoicing-mandates-2027", "e-invoice-vs-pdf-invoice"],
    faqs: [
      {
        q: "Does the €800,000 threshold include VAT?",
        a: "The test uses your total turnover (Gesamtumsatz) as defined for the small business scheme in the German VAT Act, which is a net figure, so VAT itself is not counted. Certain exempt turnover and sales of fixed assets can be excluded under that definition. Ask your Steuerberater to confirm the figure from your 2026 books before you rely on staying under the line.",
      },
      {
        q: "What if my business starts trading in 2027?",
        a: "A business with no prior-year turnover has no 2026 figure to compare with €800,000, and the BMF guidance should be checked for how it treats new businesses. Many advisers recommend that start-ups simply issue compliant e-invoices for domestic B2B sales from day one, because every business will have to from 1 January 2028 anyway.",
      },
      {
        q: "Can I keep sending PDF invoices to German clients after 2027?",
        a: "For domestic B2B sales, only during the transition rules: until 31 December 2026 for everyone, and until 31 December 2027 if your 2026 turnover was €800,000 or less. After that, PDFs remain fine for consumers, small-amount invoices up to €250 and most cross-border sales, but not for domestic B2B invoices.",
      },
      {
        q: "Are Kleinunternehmer affected by the 2027 rules?",
        a: "Businesses using the small business scheme (Kleinunternehmerregelung) are exempt from the obligation to issue e-invoices. Since 2025 the scheme applies if prior-year turnover was no more than €25,000 and current-year turnover stays at or below €100,000. They must still be able to receive and archive e-invoices from their suppliers.",
      },
      {
        q: "Is EDI still allowed after 1 January 2027?",
        a: "EDI invoices that both parties have agreed can be used during the transition period until the end of 2027. From 2028 an EDI format is only acceptable if the required invoice data can be correctly extracted into an EN 16931-compliant format, so check with your EDI provider before then.",
      },
      {
        q: "What happens if I issue a PDF when an e-invoice was required?",
        a: "The invoice does not meet the legal requirements for an invoice, which can put your customer's input VAT deduction at risk and may be treated as an administrative offence. In practice, larger buyers are likely to reject the PDF and ask for a compliant e-invoice, which delays payment.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> For e-invoicing in Germany, the key date is 1 January 2027. From then, any business established in Germany whose total turnover in 2026 exceeded €800,000 must issue structured e-invoices (EN 16931 formats such as XRechnung or ZUGFeRD) for domestic B2B sales. Smaller businesses can keep using PDF or paper until 31 December 2027, and everyone must issue e-invoices from 1 January 2028.</p>

<p>Most German businesses already know the receiving rule from 2025. The question now is who has to <em>send</em> e-invoices from January, and whether you can still use a PDF from a tool like our <a href="/invoice-generator">free invoice generator</a>. This guide focuses on the 2027 issuing obligation: how the €800,000 test works, which sales are in or out, and what to do in the next few weeks. For the format details, see our separate guide to <a href="/blog/germany-e-invoicing-xrechnung-zugferd">XRechnung vs ZUGFeRD</a>.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. The rules come from the Growth Opportunities Act (Wachstumschancengesetz), section 14 of the German VAT Act (UStG) and guidance letters from the Federal Ministry of Finance (BMF). Check the official <a href="https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html" target="_blank" rel="noopener noreferrer">BMF e-invoice FAQ</a> or ask a Steuerberater before acting on any detail here.</p>

<h2>E-invoicing in Germany: the 2025 to 2028 timeline</h2>
<p>Germany phases the E-Rechnungspflicht (e-invoice obligation) in three steps. Receiving came first, then issuing for larger businesses, then issuing for everyone.</p>
<table><thead><tr><th>Date</th><th>Who</th><th>What changes</th></tr></thead><tbody>
<tr><td>1 January 2025</td><td>All businesses established in Germany</td><td>Must be able to receive e-invoices for domestic B2B purchases</td></tr>
<tr><td>Until 31 December 2026</td><td>All businesses</td><td>May still issue paper invoices, or PDFs with the buyer's consent</td></tr>
<tr><td>1 January 2027</td><td>Businesses with 2026 total turnover above €800,000</td><td>Must issue e-invoices for domestic B2B sales</td></tr>
<tr><td>Until 31 December 2027</td><td>Businesses with 2026 turnover of €800,000 or less</td><td>May still issue paper or PDF invoices; agreed EDI invoices also remain possible for all</td></tr>
<tr><td>1 January 2028</td><td>All businesses</td><td>Must issue e-invoices for domestic B2B sales</td></tr>
</tbody></table>
<p>The pattern matches the wider European shift described in our <a href="/blog/e-invoicing-guide">e-invoicing guide</a>: first make everyone able to receive, then require the larger senders, then everyone else.</p>

<h2>Who must issue e-invoices in Germany from 2027?</h2>
<p>You must issue e-invoices from 1 January 2027 if all of the following are true:</p>
<ol>
<li><strong>You are a business established in Germany</strong> (registered office, management or a fixed establishment involved in the supply).</li>
<li><strong>Your customer is also a business established in Germany.</strong> The mandate covers domestic B2B supplies.</li>
<li><strong>The sale is not exempt</strong> from the invoicing obligation (see below).</li>
<li><strong>Your total turnover in 2026 was above €800,000.</strong></li>
</ol>
<p>If points 1 to 3 apply but your 2026 turnover was €800,000 or less, you are covered from 1 January 2028 instead. If point 1 or 2 fails, the German domestic mandate does not apply to that sale at all.</p>

<h3>Selling to the public sector</h3>
<p>Invoices to federal public authorities (B2G) have required XRechnung-type e-invoices for years, under separate public procurement rules, and many federal states have similar rules. That is not new in 2027, but if you already invoice public bodies you have a head start: the same software usually handles B2B e-invoices.</p>

<h2>How the €800,000 turnover test works</h2>
<p>The €800,000 threshold is the part most businesses get wrong. Three points matter:</p>
<ul>
<li><strong>It is total turnover, not B2B turnover.</strong> Consumer sales, domestic B2B sales and cross-border sales all count towards the figure, as defined for the small business scheme (Gesamtumsatz).</li>
<li><strong>It is the previous calendar year.</strong> For 2027 the test year is 2026. Your 2027 sales do not change your status during 2027.</li>
<li><strong>It is a net figure.</strong> VAT is not added on top. Certain items, such as some exempt turnover and sales of business assets, are left out under the statutory definition.</li>
</ul>
<p>Because the test looks at the whole business, a shop or tradesperson who sells mainly to consumers can still be caught. Only the B2B invoices need to be e-invoices, but the threshold is measured across everything.</p>

<h3>New businesses and groups</h3>
<p>Two situations are less clear-cut. A business that starts trading in 2027 has no 2026 figure; check the BMF guidance or ask an adviser how that is treated, and consider issuing e-invoices from the start. For VAT groups (Organschaft), the turnover of the group as a whole is generally relevant, so a small subsidiary in a large group should not assume it falls under €800,000.</p>

<h2>Which invoices are exempt from the e-invoice obligation?</h2>
<table><thead><tr><th>Type of sale</th><th>E-invoice required?</th><th>What you can use instead</th></tr></thead><tbody>
<tr><td>Sales to private consumers (B2C)</td><td>No</td><td>Paper or PDF</td></tr>
<tr><td>Small-amount invoices (Kleinbetragsrechnungen) up to €250 gross</td><td>No</td><td>Paper or PDF, simplified content</td></tr>
<tr><td>Passenger transport tickets</td><td>No</td><td>Ticket</td></tr>
<tr><td>Supplies by Kleinunternehmer</td><td>No (but must receive)</td><td>Paper or PDF</td></tr>
<tr><td>Many VAT-exempt supplies (for example certain financial or medical services)</td><td>Generally no</td><td>Paper or PDF, check the BMF list</td></tr>
<tr><td>Intra-EU and export sales</td><td>No, not under the domestic mandate</td><td>PDF with reverse charge or export wording</td></tr>
<tr><td>Domestic B2B sale above €250 by an in-scope business</td><td>Yes</td><td>XRechnung, ZUGFeRD (EN 16931 profile or higher) or compliant EDI</td></tr>
</tbody></table>
<p>For cross-border invoices, the wording matters more than the format. Our <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a> has the standard phrases.</p>

<h2>Worked example: which invoices must be e-invoices in 2027?</h2>
<p>A Cologne IT services company had these net sales in 2026:</p>
<table><thead><tr><th>2026 sales</th><th>Net (€)</th></tr></thead><tbody>
<tr><td>IT support for German companies (domestic B2B)</td><td>610,000</td></tr>
<tr><td>Laptop repairs for private customers (B2C)</td><td>145,000</td></tr>
<tr><td>Software projects for clients in the Netherlands (intra-EU B2B)</td><td>70,000</td></tr>
<tr><td><strong>Total turnover</strong></td><td><strong>825,000</strong></td></tr>
</tbody></table>
<p>The maths: 610,000 + 145,000 + 70,000 = €825,000. That is €25,000 above the threshold, so from 1 January 2027 the company must issue e-invoices for its domestic B2B work.</p>
<p>A typical January invoice to a German client for a monthly support contract would be: net €4,000, VAT at 19% = 4,000 × 0.19 = €760, total €4,760. That invoice must be an XRechnung or a compliant ZUGFeRD file. A €180 repair for a private customer can still be a PDF, and so can the invoice to the Dutch client (with reverse charge wording). If the company's 2026 turnover had been €790,000 instead, all three could stay as PDFs until the end of 2027.</p>

<h2>What counts as an e-invoice for the German mandate?</h2>
<p>An e-invoice is an invoice issued, transmitted and received in a structured electronic format that complies with EN 16931 and allows automatic processing. In practice that means:</p>
<ul>
<li><strong>XRechnung</strong> (pure XML, in UBL or CII syntax)</li>
<li><strong>ZUGFeRD 2.x</strong> with the EN 16931, EXTENDED or XRECHNUNG profile (PDF with embedded XML)</li>
<li><strong>Other formats</strong> agreed between the parties, such as EDI, if the data can be correctly converted to EN 16931</li>
</ul>
<p>A PDF on its own, however professional, is an "other invoice" (sonstige Rechnung). Our explainer on <a href="/blog/e-invoice-vs-pdf-invoice">e-invoice vs PDF invoice</a> goes through the difference field by field. Germany does not prescribe a transmission channel, so email with an XML attachment, a portal or the <a href="/blog/what-is-peppol">Peppol network</a> are all acceptable.</p>

<h2>What should German businesses do before 1 January 2027?</h2>
<h3>Step 1: Calculate your 2026 total turnover</h3>
<p>Do not wait for the annual accounts. Use your bookkeeping to project the full-year figure in November and December. If you are close to €800,000, treat yourself as in scope.</p>
<h3>Step 2: List your domestic B2B customers</h3>
<p>Pull a customer list and mark which ones are German businesses. Collect their invoice email addresses, buyer references and, for public bodies, the Leitweg-ID.</p>
<h3>Step 3: Choose software that outputs a compliant format</h3>
<p>Accounting and invoicing tools that export XRechnung or ZUGFeRD are widely available. Check that the tool validates the file, keeps your <a href="/blog/invoice-numbering-system">invoice numbering</a> sequential and archives the XML.</p>
<h3>Step 4: Test with two or three customers</h3>
<p>Send test invoices in December and ask your customers to confirm their systems read them. Fix any missing fields, such as the buyer reference or payment terms.</p>
<h3>Step 5: Set up archiving</h3>
<p>The XML is the original invoice and must be kept unaltered for the statutory retention period. See <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</p>

<h2>Common mistakes with the 2027 deadline</h2>
<ul>
<li><strong>Measuring only B2B sales against €800,000.</strong> The test is total turnover.</li>
<li><strong>Assuming a ZUGFeRD file is always valid.</strong> MINIMUM and BASIC WL profiles do not qualify.</li>
<li><strong>Forgetting credit notes.</strong> Corrections to in-scope invoices also need to be structured. See our <a href="/blog/credit-note-guide">credit note guide</a>.</li>
<li><strong>Leaving receiving until later.</strong> The duty to receive has applied since 2025, regardless of size.</li>
<li><strong>Treating foreign clients as in scope.</strong> The mandate is domestic; do not over-engineer invoices to non-German customers unless they ask.</li>
</ul>

<h2>Germany 2027 readiness checklist</h2>
<ul>
<li>2026 total turnover calculated or projected: above or below €800,000?</li>
<li>Domestic B2B customers identified, with invoice addresses and references</li>
<li>Software chosen that issues XRechnung or ZUGFeRD (EN 16931 profile or higher)</li>
<li>Test invoices sent and accepted</li>
<li>Process for credit notes and corrections in the same format</li>
<li>XML archive in place for the full retention period</li>
<li>PDF workflow kept for B2C, small-amount and cross-border invoices</li>
</ul>

<h2>Can a free invoice generator still help?</h2>
<p>Yes, for the invoices outside the mandate. Our generator runs in your browser, needs no account and exports a PDF. It does not create XRechnung XML or ZUGFeRD files, so do not use it for domestic B2B invoices once the mandate applies to you. It remains useful for consumer invoices, small-amount invoices, quotes, proformas and invoices to clients abroad. Our <a href="/blog/e-invoicing-mandates-2027">2027 e-invoicing mandates list</a> shows where else PDF invoices are being phased out.</p>

<h2>Next step</h2>
<p>Work out your 2026 turnover this month. Above €800,000: pick and test e-invoicing software before Christmas. Below it: you have until 1 January 2028, but make sure you can receive and archive XML invoices now, and use the extra year to move over calmly.</p>
`,
  },
  {
    slug: "spain-e-invoicing-verifactu",
    title: "Spain E-Invoicing and Verifactu: 2027 Dates",
    description:
      "Verifactu and Spain e-invoicing explained: 2027 dates for companies and autónomos, software rules, the Crea y Crece B2B mandate and what your invoices need.",
    category: "tax-compliance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Spain",
    related: ["e-invoicing-mandates-2027", "qr-code-on-invoice", "e-invoice-vs-pdf-invoice"],
    faqs: [
      {
        q: "Is Verifactu the same as e-invoicing?",
        a: "No. Verifactu is a set of technical requirements for the billing software you use to create invoices, designed to stop records being altered or deleted. The B2B e-invoicing mandate under the Crea y Crece law is a separate obligation to exchange structured electronic invoices with business customers. Many businesses will have to meet both, on different dates.",
      },
      {
        q: "Do I have to send my invoices to the AEAT in real time?",
        a: "Only if you choose Verifactu mode, where your software sends each billing record to the tax agency automatically. The alternative non-Verifactu mode keeps signed, chained records in your system and makes them available to the AEAT on request, with stricter technical requirements. Both are allowed; Verifactu mode is usually simpler for small businesses.",
      },
      {
        q: "Does Verifactu apply if I write invoices by hand or in Word?",
        a: "The Verifactu rules apply to computerised billing systems (sistemas informáticos de facturación). If you genuinely issue invoices without such software, they do not bite in the same way, but word processors and spreadsheets used to bill are a grey area. Check the AEAT FAQs and ask your gestor before relying on this.",
      },
      {
        q: "Are businesses in the Basque Country and Navarre affected?",
        a: "Businesses taxed under the regional systems of the Basque Country (TicketBAI and Batuz) and Navarre follow their own regional rules instead of Verifactu. The national B2B e-invoicing mandate is a separate question, so confirm with your regional tax authority.",
      },
      {
        q: "What are the penalties for non-compliant billing software?",
        a: "The anti-fraud law (Law 11/2021) introduced penalties for using billing software that does not meet the requirements, reported as up to €50,000 per financial year for users, with higher amounts for software producers. Confirm the current amounts on the AEAT website or with an adviser before relying on them.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Verifactu is Spain's set of rules for billing software: every invoice record must be hashed, chained and, in Verifactu mode, sent to the tax agency (AEAT). After a one-year delay it applies from 1 January 2027 for corporate taxpayers and 1 July 2027 for the self-employed. Separately, B2B e-invoicing under the Crea y Crece law is expected from October 2027 for companies above €8 million.</p>

<p>Spain has two reforms running in parallel, and they are easy to confuse. Verifactu controls <em>how</em> your invoicing software records invoices. Spain e-invoicing (factura electrónica B2B) controls <em>what format</em> you exchange with business customers. This guide covers both, with the latest dates as we understand them on 24 October 2026, and explains where a PDF from our <a href="/invoice-generator">free invoice generator</a> stops being enough.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Several Spanish dates have moved in the last two years, and the latest ones come from recent publications in the BOE. Check the <a href="https://sede.agenciatributaria.gob.es/" target="_blank" rel="noopener noreferrer">Agencia Tributaria (AEAT) website</a> or ask a gestor or asesor fiscal before relying on any date here.</p>

<h2>What is Verifactu?</h2>
<p>Verifactu (written VERI*FACTU by the AEAT) comes from the anti-fraud law, Law 11/2021, and its implementing regulation, Royal Decree 1007/2023, with the technical details in Ministerial Order HAC/1177/2024. The rules target "double-use" software that lets a business delete or alter sales after the fact. Under Verifactu, billing software must:</p>
<ul>
<li>Create a billing record (registro de facturación) for every invoice and every cancellation</li>
<li>Link each record to the previous one with a hash, so gaps or edits are detectable</li>
<li>Print a QR code on each invoice that lets the customer check it with the AEAT</li>
<li>Prevent records from being altered or deleted without a trace</li>
<li>Come with a declaration of responsibility from the software producer confirming compliance</li>
</ul>

<h3>Verifactu mode vs non-Verifactu mode</h3>
<table><thead><tr><th></th><th>Verifactu mode</th><th>Non-Verifactu mode</th></tr></thead><tbody>
<tr><td>Records sent to AEAT</td><td>Automatically, as invoices are issued</td><td>No, kept in your system</td></tr>
<tr><td>Electronic signature on each record</td><td>Not required</td><td>Required</td></tr>
<tr><td>Event log</td><td>Not required</td><td>Required</td></tr>
<tr><td>Invoice wording</td><td>QR code plus the Verifactu legend (verifiable invoice)</td><td>QR code without the Verifactu legend</td></tr>
<tr><td>Suits</td><td>Most small businesses and autónomos</td><td>Businesses that do not want real-time submission and can handle the extra controls</td></tr>
</tbody></table>

<h2>Verifactu dates: when does it apply?</h2>
<p>The original deadlines of 1 January 2026 and 1 July 2026 were pushed back by Royal Decree-law 15/2025 of 2 December 2025, which Congress validated later that month.</p>
<table><thead><tr><th>Who</th><th>Original date</th><th>Current date</th></tr></thead><tbody>
<tr><td>Corporate income tax payers (sociedades)</td><td>1 January 2026</td><td>1 January 2027</td></tr>
<tr><td>Everyone else in scope: self-employed (autónomos) under IRPF, non-resident income tax payers, entities under income attribution</td><td>1 July 2026</td><td>1 July 2027</td></tr>
</tbody></table>
<p>Software producers are expected to have compliant products on the market ahead of these dates, so most of the work for a small business is checking and updating the tool it already uses.</p>

<h3>Who is outside Verifactu?</h3>
<ul>
<li>Businesses on the Immediate Supply of Information system (SII), which already report invoice data to the AEAT within days</li>
<li>Businesses under the regional tax systems of the Basque Country and Navarre (TicketBAI and Batuz)</li>
<li>Businesses that do not use a computerised billing system</li>
</ul>

<h2>Spain e-invoicing: the Crea y Crece B2B mandate</h2>
<p>Law 18/2022, known as the Crea y Crece law, requires businesses and professionals to issue and exchange electronic invoices in their B2B relationships, partly to track late payment. The implementing Royal Decree was approved on 24 March 2026 and is reported as Royal Decree 238/2026. The clock starts from a Ministerial Order on the AEAT's public e-invoicing solution.</p>
<p>Specialist sources report that this order (Order HAC/1028/2026) was published in the BOE on 5 October 2026 and took effect the next day. If that is confirmed, the dates are:</p>
<table><thead><tr><th>Who</th><th>Must issue B2B e-invoices from</th></tr></thead><tbody>
<tr><td>Businesses and professionals with annual turnover above €8 million</td><td>6 October 2027 (reported)</td></tr>
<tr><td>All other businesses and autónomos</td><td>6 October 2028 (reported)</td></tr>
</tbody></table>
<p>Many older articles show 1 October 2027 and 1 October 2028, which came from the draft order. Check the final text in the BOE before you plan around either date.</p>

<h3>How Spanish B2B e-invoicing will work</h3>
<p>Invoices are expected to be exchanged in structured formats (such as UBL, CII, Facturae or EDIFACT) through private platforms that interoperate, or through the AEAT's public solution, which also receives a copy. Recipients will report the status of invoices, including when they are paid, so the government can monitor payment periods. Our <a href="/blog/e-invoice-vs-pdf-invoice">e-invoice vs PDF invoice</a> explainer covers what "structured" means.</p>

<h2>Spain e-invoicing to public administrations (FACe)</h2>
<p>B2G e-invoicing is not new in Spain. Under Law 25/2013, suppliers to Spanish public administrations have had to send electronic invoices in the Facturae XML format, usually through the central FACe portal or regional equivalents, since 2015 (with an exception for small invoices that some administrations apply). If you already invoice the public sector this way, you have software and processes that can be extended to B2B.</p>

<h2>Do Verifactu and Spanish e-invoicing apply to foreign businesses?</h2>
<p>Verifactu is tied to Spanish income tax: it covers taxpayers subject to Spanish corporate income tax, personal income tax (IRPF) or non-resident income tax with a permanent establishment in Spain. A freelancer or company abroad with no Spanish establishment, billing a Spanish client, is generally outside it and can keep sending a PDF. The B2B e-invoicing mandate targets businesses and professionals established in Spain. Spanish clients may still ask foreign suppliers for structured invoices once their own systems switch over, so agree the format in your contract if it matters. For cross-border invoice basics, see <a href="/blog/invoice-international-clients">invoicing international clients</a>.</p>

<h2>Verifactu vs Spain e-invoicing: the difference in one table</h2>
<table><thead><tr><th></th><th>Verifactu</th><th>B2B e-invoicing (Crea y Crece)</th></tr></thead><tbody>
<tr><td>Legal basis</td><td>Law 11/2021, RD 1007/2023</td><td>Law 18/2022, RD 238/2026 (reported)</td></tr>
<tr><td>What it controls</td><td>Your billing software and records</td><td>The format and exchange of invoices with business customers</td></tr>
<tr><td>Applies to</td><td>B2B and B2C invoices</td><td>B2B invoices</td></tr>
<tr><td>Key dates</td><td>1 Jan 2027 companies, 1 Jul 2027 autónomos</td><td>Oct 2027 (over €8m), Oct 2028 (others)</td></tr>
<tr><td>Visible change</td><td>QR code and Verifactu legend on invoices</td><td>Invoices sent as structured files</td></tr>
</tbody></table>

<h2>Worked example: an autónomo's invoice under Verifactu</h2>
<p>A freelance designer in Valencia invoices a Spanish agency in September 2027 for a branding project.</p>
<table><thead><tr><th>Line</th><th>Amount (€)</th></tr></thead><tbody>
<tr><td>Base (net fee)</td><td>2,000.00</td></tr>
<tr><td>IVA at 21% (2,000 × 0.21)</td><td>420.00</td></tr>
<tr><td>IRPF withholding at 15% (2,000 × 0.15)</td><td>-300.00</td></tr>
<tr><td><strong>Total to pay</strong> (2,000 + 420 - 300)</td><td><strong>2,120.00</strong></td></tr>
</tbody></table>
<p>Because the date is after 1 July 2027, the designer's billing software must create a chained billing record for this invoice and print the QR code. In Verifactu mode the record goes to the AEAT automatically. The agency pays €2,120 and pays the €300 withheld to the tax agency on the designer's behalf. Until October 2028 (on the reported dates) the designer can still send this invoice as a PDF, as long as it comes from compliant software. After that it will also need to be a structured B2B e-invoice.</p>

<h2>What a Spanish invoice must contain</h2>
<p>The general invoicing regulation (Royal Decree 1619/2012) still sets the content: invoice number and series, issue date, supplier and customer names, NIF (tax ID) of both, addresses, description of the goods or services, tax base, IVA rate and amount, total, and the date of the operation if different. Verifactu adds the QR code and, in Verifactu mode, the legend. For a cross-country view of tax IDs, see <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a>, and for the VAT basics, our <a href="/blog/vat-invoice-guide">VAT invoice guide</a>.</p>

<h2>Common Verifactu mistakes to avoid</h2>
<ul>
<li><strong>Thinking Verifactu is only for large companies.</strong> It covers autónomos too, from 1 July 2027.</li>
<li><strong>Confusing Verifactu with SII.</strong> SII users are excluded from Verifactu, not doubly covered.</li>
<li><strong>Editing an issued invoice.</strong> Under Verifactu you cancel or correct with a rectifying invoice (factura rectificativa), and the software records both.</li>
<li><strong>Relying on the draft October dates.</strong> Check the final Ministerial Order.</li>
<li><strong>Keeping old software "just for some invoices".</strong> Using non-compliant software can be penalised in itself.</li>
</ul>

<h2>Spain readiness checklist</h2>
<ul>
<li>Confirm whether you pay corporate tax (1 January 2027) or IRPF (1 July 2027)</li>
<li>Ask your software provider for its Verifactu declaration of responsibility</li>
<li>Decide between Verifactu and non-Verifactu mode</li>
<li>Check that your invoices print the QR code correctly; see our guide to the <a href="/blog/qr-code-on-invoice">QR code on an invoice</a></li>
<li>Note your B2B e-invoicing date: above or below €8 million turnover</li>
<li>Plan your rectifying invoice process</li>
</ul>

<h2>Can I use a free online invoice generator in Spain?</h2>
<p>Be careful. Our generator creates PDFs in your browser and does not create Verifactu billing records, QR codes linked to the AEAT or structured e-invoices. Once Verifactu applies to you, invoices you issue to customers should come from compliant billing software. A browser PDF tool remains useful for quotes (presupuestos), proformas and drafts, and for businesses outside the Spanish rules, such as a foreign freelancer billing a Spanish client. Compare the options in <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a>.</p>

<h2>Next step</h2>
<p>Ask your billing software provider now whether its product is Verifactu-ready and which mode it uses. Then put your two dates in the calendar: Verifactu (January or July 2027) and B2B e-invoicing (October 2027 or 2028). For how Spain compares with its neighbours, see our <a href="/blog/e-invoicing-mandates-2027">country-by-country e-invoicing mandates list</a>.</p>
`,
  },
  {
    slug: "croatia-e-invoicing-fiscalization",
    title: "Croatia E-Invoicing: Fiscalization 2.0 B2B Guide",
    description:
      "Croatia e-invoicing under Fiscalization 2.0: who must issue eRačun since 2026, the 2027 extension, e-reporting by the 20th, intermediaries and a checklist.",
    category: "tax-compliance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Croatia",
    related: ["e-invoicing-mandates-2027", "peppol-vs-clearance-model", "what-is-peppol"],
    faqs: [
      {
        q: "Is a PDF invoice still valid in Croatia?",
        a: "For domestic B2B sales between VAT-registered businesses established in Croatia, no: since 1 January 2026 those invoices must be structured e-invoices exchanged through the fiscalization system. PDFs can still be used for many B2C sales (which are fiscalized separately) and for cross-border invoices, which are outside the domestic mandate.",
      },
      {
        q: "What is MIKROeRAČUN?",
        a: "MIKROeRAČUN is a free application from the Croatian Tax Administration aimed at small businesses outside the VAT system. It is reported to let them receive, issue and fiscalize e-invoices without buying commercial software, which matters most from 1 January 2027 when non-VAT-registered businesses must start issuing e-invoices.",
      },
      {
        q: "Do foreign companies have to issue Croatian e-invoices?",
        a: "The mandate applies to taxpayers established in Croatia. Reported guidance indicates that foreign businesses registered for VAT in Croatia without an establishment there are not required to issue Croatian e-invoices, but rules for fixed establishments are more complex, so confirm with a Croatian adviser.",
      },
      {
        q: "What does the buyer have to report?",
        a: "Buyers mainly report rejected e-invoices, with a reason, through the e-reporting process. Reporting a rejection is treated as a statement that the buyer will not deduct input VAT on that invoice, so rejections should be used carefully and only for genuinely incorrect invoices.",
      },
      {
        q: "What was Fiscalization 1.0?",
        a: "Croatia introduced fiscalization of cash transactions in 2013: cash registers had to send each receipt to the Tax Administration in real time and print a unique code on the receipt. Fiscalization 2.0 extends the idea to e-invoices between businesses and to non-cash payments.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Croatia e-invoicing under Fiscalization 2.0 (Fiskalizacija 2.0) has applied since 1 January 2026. VAT-registered businesses established in Croatia must issue and receive structured e-invoices (eRačun) for domestic B2B and B2G sales, fiscalize them in real time and e-report payments and rejections by the 20th of the following month. From 1 January 2027, non-VAT-registered businesses must issue e-invoices too.</p>

<p>Croatia moved faster than most of the EU: it went from optional e-invoicing to a full B2B mandate with real-time reporting in one step. If you trade in Croatia, or bill Croatian clients from abroad, this guide explains who is covered, how the system works and what changes in January 2027. For a wider view of the region, see our <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates 2027 list</a>.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Several technical details below come from specialist summaries of the new law rather than the official text. Check the <a href="https://www.porezna-uprava.hr/" target="_blank" rel="noopener noreferrer">Porezna uprava (Croatian Tax Administration)</a> Fiskalizacija 2.0 pages or ask a Croatian tax adviser before relying on them.</p>

<h2>What is Fiscalization 2.0 in Croatia?</h2>
<p>Fiscalization 2.0 is the name for Croatia's new Fiscalization Act (Zakon o fiskalizaciji), published in the Official Gazette (Narodne novine) 89/25 and in force since 1 September 2025, with the main obligations from 1 January 2026. It does three things:</p>
<ul>
<li><strong>B2B e-invoicing:</strong> domestic invoices between businesses become structured e-invoices (eRačun) instead of paper or PDF.</li>
<li><strong>Fiscalization of e-invoices:</strong> invoice data is sent to the Tax Administration in real time as invoices are exchanged, a continuous transaction control.</li>
<li><strong>E-reporting (eIzvještavanje):</strong> payment information and rejections are reported after the fact.</li>
</ul>
<p>It also extends B2C fiscalization, which since 2013 covered cash payments, to other payment methods. For how this compares with other countries' approaches, our <a href="/blog/peppol-vs-clearance-model">Peppol vs clearance model</a> comparison is a good companion read.</p>

<h2>Who must use Croatia e-invoicing, and when?</h2>
<table><thead><tr><th>Date</th><th>Who</th><th>Obligation</th></tr></thead><tbody>
<tr><td>1 September 2025</td><td>All</td><td>Fiscalization Act enters into force; preparation period</td></tr>
<tr><td>1 January 2026</td><td>VAT-registered businesses established in Croatia</td><td>Issue, receive and fiscalize e-invoices for domestic B2B and B2G; e-reporting</td></tr>
<tr><td>1 January 2026</td><td>Non-VAT-registered businesses</td><td>Reported: must be able to receive e-invoices</td></tr>
<tr><td>1 January 2027</td><td>Non-VAT-registered businesses and certain public bodies</td><td>Must also issue and fiscalize e-invoices</td></tr>
</tbody></table>
<p>The 2027 group includes small companies, crafts (obrti) and freelancers who are not in the VAT system. If that is you, January 2027 is your deadline.</p>

<h2>How Croatian e-invoicing works step by step</h2>
<h3>1. Create the invoice in a structured format</h3>
<p>Invoices follow the European standard EN 16931 using the Croatian specification (HR CIUS), typically in UBL 2.1 XML. Reports indicate that each line also needs a product classification code (KPD), so check your item list early.</p>
<h3>2. Send it through an information intermediary</h3>
<p>The model is decentralised. You send the e-invoice through an information intermediary (informacijski posrednik), a certified service provider, which delivers it to the buyer's intermediary, using secure access points similar to the Peppol four-corner network.</p>
<h3>Choosing an information intermediary</h3>
<p>An information intermediary is a service provider that sends and receives e-invoices on your behalf and passes the fiscal data to the Tax Administration. Many accounting packages include one; others are standalone providers. When comparing them, check four things: whether they connect directly to your accounting or ERP software, whether they also act as a Peppol access point for any foreign customers who want e-invoices, whether they archive the original XML for the full retention period, and how they price (per invoice, monthly, or bundled). Very small non-VAT businesses can look at the free MIKROeRAČUN app instead, at least until their volume grows.</p>
<h3>3. Fiscalize in real time</h3>
<p>As the invoice is issued and received, the intermediaries send the fiscally relevant data to the Tax Administration. The tax authority does not have to approve the invoice before delivery, so this is real-time reporting rather than strict clearance.</p>
<h3>4. E-report payments and rejections</h3>
<p>Issuers report payment data, including payments received, and any cases where an e-invoice could not be issued. Buyers report rejections. Specialist sources state the monthly deadline as the 20th day of the following month, with the first deadline on 20 February 2026.</p>

<h2>Worked example: one Croatian B2B invoice</h2>
<p>A Zagreb web agency registered for VAT bills a Split hotel for a website update on 10 March 2027.</p>
<table><thead><tr><th>Item</th><th>Amount (€)</th></tr></thead><tbody>
<tr><td>Website update, net</td><td>1,000.00</td></tr>
<tr><td>PDV (VAT) at 25% (1,000 × 0.25)</td><td>250.00</td></tr>
<tr><td><strong>Total</strong> (1,000 + 250)</td><td><strong>1,250.00</strong></td></tr>
</tbody></table>
<p>What happens: the agency's software creates an HR CIUS e-invoice, its intermediary delivers it to the hotel's intermediary, and both send the fiscal data to Porezna uprava in real time. The hotel pays €1,250 on 2 April 2027. The agency then reports that payment in its e-reporting for April, due by 20 May 2027. If the hotel had rejected the invoice instead, it would report the rejection and could not deduct the €250 input VAT on that invoice.</p>

<h2>Which sales are in and out of scope?</h2>
<table><thead><tr><th>Sale</th><th>E-invoice through fiscalization?</th></tr></thead><tbody>
<tr><td>Domestic B2B between Croatian-established businesses</td><td>Yes (VAT-registered since 2026, non-VAT from 2027)</td></tr>
<tr><td>Sales to Croatian public bodies (B2G)</td><td>Yes</td></tr>
<tr><td>Sales to consumers (B2C)</td><td>No e-invoice, but fiscalized receipts for cash and other payment methods</td></tr>
<tr><td>Cross-border sales (intra-EU and exports)</td><td>No, outside the domestic mandate; PDF or paper still allowed</td></tr>
<tr><td>Foreign business VAT-registered in Croatia without establishment</td><td>Reported as not required; confirm with an adviser</td></tr>
</tbody></table>

<h2>What must a Croatian eRačun contain?</h2>
<p>The content rules of the Croatian VAT Act still apply, now as structured data fields in the HR CIUS format. In practice your e-invoice needs:</p>
<ul>
<li>Seller and buyer names, addresses and OIB (the Croatian personal identification number used as the tax ID), plus VAT ID where relevant</li>
<li>A sequential invoice number and the date (and, for fiscalization, the time) of issue</li>
<li>Date of supply, if different from the issue date</li>
<li>Description and quantity of each good or service, with its classification code where required</li>
<li>Net amount per line, VAT rate and VAT amount per rate, and the total</li>
<li>Payment terms, due date and bank account (IBAN)</li>
<li>Exemption or reverse charge references where no VAT is charged</li>
</ul>
<p>Your software or intermediary validates the file before sending, so missing data is caught early rather than by your customer. For the EU-wide data model behind these fields, see our <a href="/blog/e-invoice-template-en-16931">EN 16931 e-invoice template</a> guide.</p>

<h3>Croatian VAT rates on e-invoices</h3>
<table><thead><tr><th>Rate</th><th>Typical use</th><th>Example on €200 net</th></tr></thead><tbody>
<tr><td>25% (standard)</td><td>Most goods and services</td><td>200 × 0.25 = €50 VAT, €250 total</td></tr>
<tr><td>13% (reduced)</td><td>Certain foods, accommodation and other listed supplies</td><td>200 × 0.13 = €26 VAT, €226 total</td></tr>
<tr><td>5% (reduced)</td><td>Certain essentials, such as some foods, books and medicines</td><td>200 × 0.05 = €10 VAT, €210 total</td></tr>
</tbody></table>
<p>Which goods and services fall under each reduced rate changes from time to time, so check the current list with Porezna uprava.</p>

<h2>Croatia e-invoicing vs Fiscalization 1.0</h2>
<table><thead><tr><th></th><th>Fiscalization 1.0 (2013)</th><th>Fiscalization 2.0 (2026)</th></tr></thead><tbody>
<tr><td>Main target</td><td>Cash receipts in retail and hospitality</td><td>B2B and B2G e-invoices, plus wider B2C payments</td></tr>
<tr><td>What is sent</td><td>Receipt data from the cash register</td><td>E-invoice data through intermediaries, plus e-reporting</td></tr>
<tr><td>Proof on the document</td><td>Unique receipt codes printed on receipts</td><td>Structured XML e-invoice exchanged between parties</td></tr>
<tr><td>Format</td><td>Receipt</td><td>EN 16931 / HR CIUS</td></tr>
</tbody></table>

<h2>Common mistakes with Fiskalizacija 2.0</h2>
<ul>
<li><strong>Assuming small businesses are exempt.</strong> Non-VAT-registered businesses must receive now and issue from 2027.</li>
<li><strong>Missing the e-reporting deadline.</strong> Payment reporting is a separate monthly task, not automatic in every tool.</li>
<li><strong>Rejecting invoices casually.</strong> A rejection affects your input VAT deduction.</li>
<li><strong>Ignoring product codes.</strong> Missing classification data can cause invoices to fail validation.</li>
<li><strong>Breaking the invoice sequence.</strong> Keep numbering continuous; our <a href="/blog/invoice-numbering-system">invoice numbering guide</a> explains how.</li>
</ul>

<h2>Croatia e-invoicing checklist</h2>
<ul>
<li>Confirm whether you are VAT-registered (in scope since 2026) or not (issuing from 2027)</li>
<li>Choose an information intermediary, or check whether the free MIKROeRAČUN app fits your volume</li>
<li>Map your products and services to the required classification codes</li>
<li>Set up the monthly e-reporting process and calendar reminder for the 20th</li>
<li>Agree how you handle disputes before anyone presses "reject"</li>
<li>Archive the XML e-invoices for the statutory period; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a></li>
</ul>

<h2>Billing Croatian clients from abroad</h2>
<p>If you are a freelancer or company outside Croatia, invoicing a Croatian business, the domestic mandate generally does not cover you. A clear PDF invoice with both VAT numbers and the right reverse charge wording is still the norm; see our guides to <a href="/blog/reverse-charge-invoice">reverse charge invoices</a> and <a href="/blog/invoice-international-clients">invoicing international clients</a>. Some Croatian buyers may ask for a Peppol invoice to simplify their processing; that is a commercial request, not a legal duty for you.</p>

<h2>Can a free invoice generator create a Croatian eRačun?</h2>
<p>No. Our <a href="/invoice-generator">free invoice generator</a> exports PDFs in your browser and does not connect to an information intermediary or produce HR CIUS XML. Use it for cross-border invoices, quotes and proformas, and use certified software or MIKROeRAČUN for domestic Croatian B2B invoices.</p>

<h2>Next step</h2>
<p>If you are not VAT-registered in Croatia, set up your e-invoicing route before 1 January 2027. If you are already live, review your e-reporting: payments and rejections are where most early errors appear. To see how Croatia's model differs from Peppol-only countries, read <a href="/blog/what-is-peppol">what Peppol is</a>.</p>
`,
  },
  {
    slug: "e-invoicing-mandates-2027",
    title: "E-Invoicing Mandates 2027: Country-by-Country List",
    description:
      "E-invoicing mandates 2027 by country: Germany, France, Spain, Poland, Croatia, Slovakia, UAE and Saudi Arabia, with deadlines, thresholds and next steps.",
    category: "tax-compliance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: ["e-invoicing-guide", "vida-vat-in-the-digital-age", "germany-e-invoicing-2027"],
    faqs: [
      {
        q: "Which countries require B2B e-invoicing in 2027?",
        a: "Countries with new B2B issuing obligations starting or expanding in 2027 include Germany (businesses above €800,000), France (SMEs and micro-businesses), Spain (companies above €8 million, on reported dates), Poland (micro-businesses), Croatia (non-VAT-registered businesses), Slovakia, the UAE and Saudi Arabia's next ZATCA wave. Italy, Belgium, Poland and others already require it.",
      },
      {
        q: "Do e-invoicing mandates apply to foreign businesses?",
        a: "Usually only when the foreign business is established or registered for VAT in that country, and even then rules differ. Most European mandates cover domestic B2B supplies between locally established businesses. A freelancer abroad billing a German or French client normally stays outside the mandate, though the client may still ask for a structured format.",
      },
      {
        q: "Is there an e-invoicing mandate in the United States or the UK?",
        a: "As of October 2026, neither the US nor the UK has a general B2B e-invoicing mandate. The UK government has consulted on and announced plans for mandatory e-invoicing later in the decade, and the US has a voluntary business-led framework. PDF invoices remain the norm in both for now.",
      },
      {
        q: "What happens if I miss an e-invoicing deadline?",
        a: "Consequences vary: penalties per invoice (France), administrative fines (Poland), loss of the buyer's input VAT deduction where the invoice is not legally valid (Germany, Croatia), or rejection by the buyer. Several countries have grace periods for the first months, but you should not plan around them.",
      },
      {
        q: "Will the EU harmonise all these mandates?",
        a: "Partly. Under ViDA, from 1 July 2030 intra-EU B2B transactions need EN 16931 e-invoices and near real-time digital reporting, and national systems must converge with the EU model by 2035. Domestic mandates will still differ in channels and timing.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> E-invoicing mandates in 2027 expand across Europe and the Gulf. Germany requires businesses over €800,000 to issue e-invoices from 1 January 2027; France extends issuing to SMEs from 1 September 2027; Spain's B2B mandate starts for companies above €8 million in October 2027 (reported); Poland adds micro-businesses; Croatia adds non-VAT businesses; Slovakia and the UAE go live; and Saudi Arabia's Wave 25 integrates by 1 February 2027.</p>

<p>If you sell to businesses in more than one country, 2027 is the year e-invoicing stops being a large-company topic. This list summarises the main mandatory e-invoicing countries and deadlines as at 24 October 2026, links to our deeper country guides, and explains how to work out which deadlines touch your invoices. If you are new to the topic, start with our <a href="/blog/e-invoicing-guide">e-invoicing guide</a>.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Dates in this list change often, and several come from specialist trackers rather than official texts. Always confirm with the relevant tax authority; for EU-wide rules, the <a href="https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en" target="_blank" rel="noopener noreferrer">European Commission's ViDA page</a> is a good starting point.</p>

<h2>E-invoicing deadlines 2027 at a glance</h2>
<table><thead><tr><th>Country</th><th>2027 milestone</th><th>Who</th><th>Model</th></tr></thead><tbody>
<tr><td>Germany</td><td>1 January 2027</td><td>Businesses with 2026 turnover above €800,000 must issue (everyone from 1 January 2028)</td><td>Post-audit, EN 16931</td></tr>
<tr><td>Saudi Arabia</td><td>1 February 2027</td><td>ZATCA Wave 25: VAT-taxable revenue above SAR 187,500 in 2022-2025</td><td>Clearance</td></tr>
<tr><td>Poland</td><td>1 January 2027</td><td>Micro-businesses using the temporary low-sales exemption join KSeF</td><td>Clearance</td></tr>
<tr><td>Croatia</td><td>1 January 2027</td><td>Non-VAT-registered businesses and certain public bodies must issue</td><td>Real-time reporting</td></tr>
<tr><td>Slovakia</td><td>1 January 2027</td><td>Domestic B2B and B2G e-invoicing with reporting</td><td>Peppol-based, with reporting</td></tr>
<tr><td>UAE</td><td>1 January 2027 / 1 July 2027</td><td>Revenue of AED 50 million or more, then all other businesses (reported)</td><td>Peppol-based, 5-corner</td></tr>
<tr><td>France</td><td>1 September 2027</td><td>SMEs and micro-businesses must issue and e-report (all must receive since 1 September 2026)</td><td>Platform-based (PA), with reporting</td></tr>
<tr><td>Spain</td><td>October 2027 (reported 6 October)</td><td>Businesses with turnover above €8 million (others October 2028)</td><td>Platforms plus public solution</td></tr>
<tr><td>Spain (Verifactu)</td><td>1 January / 1 July 2027</td><td>Billing software rules for companies, then the self-employed</td><td>Software and record integrity</td></tr>
<tr><td>Estonia</td><td>2027 (planned)</td><td>Broader B2B mandate reported by trackers; confirm status</td><td>Buyer-request model today</td></tr>
<tr><td>Oman</td><td>2026 to 2028 (phased)</td><td>Fawtara rollout in phases by size; confirm your phase</td><td>Peppol-based</td></tr>
</tbody></table>

<h2>Mandatory e-invoicing countries already live</h2>
<p>These mandates are not new in 2027, but they shape what your customers expect.</p>
<table><thead><tr><th>Country</th><th>In force since</th><th>Notes</th></tr></thead><tbody>
<tr><td>Italy</td><td>2019 (B2B via SdI)</td><td>EU derogation runs to 31 December 2027; renewal or ViDA convergence expected</td></tr>
<tr><td>Belgium</td><td>1 January 2026</td><td>Domestic B2B via Peppol; e-reporting planned from 2028</td></tr>
<tr><td>Poland</td><td>1 February 2026 (large), 1 April 2026 (most others)</td><td>KSeF clearance; penalties reported to start from 2027</td></tr>
<tr><td>Croatia</td><td>1 January 2026</td><td>VAT-registered businesses</td></tr>
<tr><td>Greece</td><td>2026 (phased)</td><td>Large businesses from spring 2026 after a postponement, others from autumn 2026, via myDATA; confirm with AADE</td></tr>
<tr><td>Malaysia</td><td>Phased 2024 to 2026</td><td>Phase 4 relaxation period reported extended to 31 December 2027</td></tr>
<tr><td>India</td><td>2020 onwards</td><td>E-invoicing for aggregate turnover above ₹5 crore</td></tr>
<tr><td>Saudi Arabia</td><td>2021 (Phase 1), 2023 onwards (Phase 2 waves)</td><td>Clearance for B2B</td></tr>
</tbody></table>
<p>Our country guides go deeper: <a href="/blog/belgium-poland-e-invoicing-mandates">Belgium and Poland KSeF</a>, <a href="/blog/france-e-invoicing-reform">France</a>, <a href="/blog/zatca-phase-2-wave-25">ZATCA Wave 25</a> and the <a href="/blog/uae-e-invoicing-2027">UAE</a>.</p>

<h2>Europe: B2B e-invoicing country by country</h2>
<h3>Germany</h3>
<p>All businesses have had to receive e-invoices since 2025. Issuing becomes mandatory on 1 January 2027 for businesses with total 2026 turnover above €800,000, and for everyone on 1 January 2028. Formats: XRechnung or ZUGFeRD (EN 16931 profile). Full details in <a href="/blog/germany-e-invoicing-2027">Germany e-invoicing 2027</a>.</p>
<h3>France</h3>
<p>Since 1 September 2026 all VAT-registered businesses must be able to receive e-invoices, and large and mid-sized businesses must issue them. SMEs and micro-businesses must issue and e-report from 1 September 2027, through approved platforms.</p>
<h3>Spain</h3>
<p>Two reforms: Verifactu billing software rules (1 January 2027 for companies, 1 July 2027 for autónomos) and Crea y Crece B2B e-invoicing (reported 6 October 2027 for turnover above €8 million, 6 October 2028 for others). See <a href="/blog/spain-e-invoicing-verifactu">Spain e-invoicing and Verifactu</a>.</p>
<h3>Poland</h3>
<p>KSeF became mandatory in 2026. The temporary exemption for the smallest businesses ends on 1 January 2027, and administrative penalties are reported to apply from 2027; confirm with the Ministry of Finance.</p>
<h3>Croatia</h3>
<p>Fiscalization 2.0 covers VAT-registered businesses since 1 January 2026 and non-VAT-registered businesses from 1 January 2027. See <a href="/blog/croatia-e-invoicing-fiscalization">Croatia e-invoicing</a>.</p>
<h3>Slovakia</h3>
<p>Parliament approved the e-invoicing law in December 2025, with domestic B2B e-invoicing and reporting from 1 January 2027. Cross-border obligations are expected to align with ViDA in 2030.</p>
<h3>Latvia and Estonia</h3>
<p>Latvia has required e-invoices for public procurement since 2026 and is reported to have deferred its B2B mandate to 2028. Estonia lets buyers request e-invoices and has signalled a wider mandate; check its status before planning.</p>

<h2>Middle East and Asia: 2027 deadlines</h2>
<ul>
<li><strong>Saudi Arabia:</strong> Wave 25 taxpayers (above SAR 187,500) must integrate with Fatoora by 1 February 2027.</li>
<li><strong>UAE:</strong> Peppol-based model with accredited service providers; reported dates are 1 January 2027 for revenue of AED 50 million or more and 1 July 2027 for others.</li>
<li><strong>Oman:</strong> Fawtara is being phased in from 2026, with later phases reported for 2027 and 2028.</li>
<li><strong>Malaysia:</strong> Phase 4 is in force, with a relaxation period reported extended to 31 December 2027.</li>
<li><strong>India:</strong> Not a 2027 change, but taxpayers with aggregate turnover of ₹10 crore or more must report invoices to the IRP within 30 days. Our India e-invoice limit guide has the details.</li>
</ul>

<h2>What about the UK, US and other countries without a mandate?</h2>
<p>Not every major economy has joined. As of October 2026:</p>
<ul>
<li><strong>United Kingdom:</strong> no B2B e-invoicing mandate yet. The government has consulted on e-invoicing and signalled plans to mandate it for VAT invoices later in the decade, but businesses can keep sending PDF invoices. UK sole traders do need to watch Making Tax Digital for Income Tax, which is about digital records, not invoice formats.</li>
<li><strong>United States:</strong> no federal B2B mandate. A voluntary, business-led e-invoicing framework exists and some public buyers require electronic submission, but a PDF from a tool like our <a href="/invoice-generator">free invoice generator</a> is still standard.</li>
<li><strong>Australia and New Zealand:</strong> Peppol is widely used and encouraged, especially for government suppliers, but B2B use is not generally mandatory.</li>
<li><strong>Pakistan:</strong> the FBR requires certain sales tax registered businesses to integrate with its e-invoicing system; our FBR e-invoicing guide covers who is affected.</li>
</ul>
<p>"No mandate" does not mean "no change". Large buyers in these countries increasingly expect structured invoices or portal uploads, so check your customers' supplier requirements as well as the law.</p>

<h2>How to work out which e-invoicing mandates apply to you</h2>
<ol>
<li><strong>List where you are established and VAT-registered.</strong> Mandates mostly follow establishment, not where your customer is.</li>
<li><strong>List where your business customers are.</strong> Domestic B2B sales in a mandate country are the core scope.</li>
<li><strong>Check thresholds.</strong> Germany (€800,000), Spain (€8 million), Saudi Arabia (revenue waves) and the UAE (AED 50 million) use size tests.</li>
<li><strong>Separate B2C and cross-border.</strong> These are usually outside B2B mandates until ViDA in 2030.</li>
<li><strong>Note client requests.</strong> Even where you are out of scope, large buyers may require Peppol or a portal.</li>
</ol>

<h2>Worked example: a design studio with clients in four countries</h2>
<p>A design studio established in Germany, with 2026 turnover of €620,000, sells to:</p>
<table><thead><tr><th>Customer location</th><th>2026 sales (€)</th><th>Share</th><th>Mandate in 2027?</th></tr></thead><tbody>
<tr><td>German businesses</td><td>372,000</td><td>60%</td><td>Not yet: turnover under €800,000, so from 1 January 2028</td></tr>
<tr><td>French businesses</td><td>124,000</td><td>20%</td><td>No: French mandate covers French-established businesses</td></tr>
<tr><td>Spanish businesses</td><td>62,000</td><td>10%</td><td>No: same logic</td></tr>
<tr><td>UK businesses</td><td>62,000</td><td>10%</td><td>No UK mandate</td></tr>
<tr><td><strong>Total</strong></td><td><strong>620,000</strong></td><td><strong>100%</strong></td><td></td></tr>
</tbody></table>
<p>The shares: 372,000 ÷ 620,000 = 60%; 124,000 ÷ 620,000 = 20%; 62,000 ÷ 620,000 = 10% each. In 2027 the studio can keep issuing PDFs for every sale, but must already receive e-invoices in Germany and has 2027 to prepare for German B2B issuing in 2028. Its French and Spanish clients will be receiving e-invoices from their domestic suppliers, so some may ask the studio for a structured invoice too. From 1 July 2030, ViDA will bring the intra-EU sales into scope.</p>

<h2>Common mistakes when tracking mandates</h2>
<ul>
<li><strong>Reading old trackers.</strong> Spain, Greece, Poland and Belgium all changed dates in the last two years.</li>
<li><strong>Assuming customer location decides scope.</strong> It is usually your establishment and the domestic nature of the sale.</li>
<li><strong>Treating a PDF as an e-invoice.</strong> It is not, under any of these mandates.</li>
<li><strong>Forgetting receiving obligations.</strong> Germany and France require receiving before issuing.</li>
</ul>

<h2>2027 e-invoicing checklist</h2>
<ul>
<li>Map each entity's establishment and VAT registrations</li>
<li>Check size thresholds against 2026 figures</li>
<li>Diary each relevant deadline from the table above</li>
<li>Pick software or a provider that covers all your mandate countries</li>
<li>Keep a PDF workflow for out-of-scope invoices, such as our <a href="/invoice-generator">free invoice generator</a></li>
<li>Review again in early 2027; dates will move</li>
</ul>

<h2>Next step</h2>
<p>Pick the one or two countries in this list where you are established and read the full guide for each. Then look ahead to 2030 with our explainer on <a href="/blog/vida-vat-in-the-digital-age">ViDA (VAT in the Digital Age)</a>, which will bring cross-border EU invoices into the same system.</p>
`,
  },
  {
    slug: "vida-vat-in-the-digital-age",
    title: "ViDA Explained: EU VAT in the Digital Age (2030)",
    description:
      "ViDA (VAT in the Digital Age) explained: intra-EU e-invoicing and digital reporting from 2030, the 10-day rule, platform and registration changes, key dates.",
    category: "tax-compliance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "European Union",
    related: ["e-invoicing-mandates-2027", "e-invoice-vs-pdf-invoice", "peppol-vs-clearance-model"],
    faqs: [
      {
        q: "Does ViDA apply to small businesses?",
        a: "Yes, the 2030 e-invoicing and digital reporting rules apply to intra-EU B2B transactions regardless of business size. There is no general turnover threshold in the EU rules. Small businesses using national VAT exemption schemes are treated differently in some respects, so check how your country implements the Directive.",
      },
      {
        q: "Will ViDA replace the EC Sales List?",
        a: "Yes. Digital reporting of each intra-EU transaction is designed to replace recapitulative statements (EC Sales Lists). Transaction data is reported close to real time instead of in a periodic summary, so tax authorities can match the supplier's and customer's data quickly.",
      },
      {
        q: "Does ViDA force domestic e-invoicing in every EU country?",
        a: "No. From 1 July 2030 e-invoicing is mandatory for intra-EU B2B transactions. For domestic sales, ViDA allows member states to introduce mandatory e-invoicing without asking the EU for a derogation, but each country decides whether and when to do it.",
      },
      {
        q: "Will a hybrid format like ZUGFeRD or Factur-X count under ViDA?",
        a: "Specialist commentary indicates that hybrid formats can be used if they contain all the required data in a structured part that meets EN 16931. The PDF view alone will not be enough. Watch for the updated EN 16931 standard and national guidance closer to 2030.",
      },
      {
        q: "Is the UK affected by ViDA?",
        a: "Not directly, because the UK is outside the EU VAT system (Northern Ireland has special rules for goods). UK businesses that are VAT-registered in an EU country, or that sell through EU platforms, may be affected by the registration and platform parts of the package.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> ViDA (VAT in the Digital Age) is the EU's 2025 VAT reform package. Its biggest change: from 1 July 2030, invoices for intra-EU B2B transactions must be structured e-invoices based on EN 16931, issued within 10 days, with transaction data reported to tax authorities in near real time. ViDA also adds platform deemed-supplier rules and extends single VAT registration from 2027-2028.</p>

<p>Most of the e-invoicing rules hitting businesses in 2026 and 2027 are national. ViDA is the EU-wide layer on top. It sets a common model for cross-border invoices, lets member states mandate domestic e-invoicing more easily, and forces existing national systems to converge by 2035. This explainer focuses on what ViDA means for your invoices; for national deadlines see our <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates 2027 list</a>.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. ViDA is a set of EU laws that each member state must transpose, and technical details are still being finalised. Check the <a href="https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en" target="_blank" rel="noopener noreferrer">European Commission's ViDA page</a> and the legal text, <a href="https://eur-lex.europa.eu/eli/dir/2025/516/oj" target="_blank" rel="noopener noreferrer">Council Directive (EU) 2025/516</a>, or ask a VAT adviser.</p>

<h2>What is ViDA (VAT in the Digital Age)?</h2>
<p>ViDA is a package of three EU legal acts adopted by the Council on 11 March 2025 and published in the Official Journal on 25 March 2025: a Directive amending the VAT Directive (2006/112/EC), a Regulation on administrative cooperation and an Implementing Regulation. It entered into force on 14 April 2025. The package has three pillars:</p>
<ol>
<li><strong>Digital reporting requirements and e-invoicing</strong> for intra-EU B2B transactions</li>
<li><strong>The platform economy:</strong> platforms facilitating short-term accommodation and passenger transport become deemed suppliers for VAT</li>
<li><strong>Single VAT registration:</strong> wider use of the One Stop Shop so businesses need fewer foreign VAT registrations</li>
</ol>

<h2>ViDA key dates</h2>
<table><thead><tr><th>Date</th><th>What changes</th></tr></thead><tbody>
<tr><td>14 April 2025</td><td>Package in force. Member states may introduce mandatory domestic e-invoicing without an EU derogation, and the buyer's consent to receive e-invoices is no longer needed in those systems</td></tr>
<tr><td>1 January 2027</td><td>First single VAT registration clarifications for OSS and IOSS users</td></tr>
<tr><td>1 July 2028</td><td>Platform deemed-supplier rules for short-term accommodation and road passenger transport (member states may delay to 1 January 2030); OSS extension and wider reverse charge for non-established suppliers</td></tr>
<tr><td>1 July 2030</td><td>Mandatory e-invoicing and digital reporting for intra-EU B2B transactions; EN 16931 becomes the default format</td></tr>
<tr><td>1 January 2035</td><td>National real-time reporting systems must align with the EU model</td></tr>
</tbody></table>
<p>Some secondary sources give slightly different dates for the convergence deadline and the repeal of recapitulative statements, so confirm details against the official text when they matter to you.</p>

<h2>ViDA e-invoicing: what changes for intra-EU invoices</h2>
<h3>Structured e-invoices become the default</h3>
<p>Today, a paper or PDF invoice is equal to an e-invoice under EU law, and you need the buyer's agreement to send an e-invoice. ViDA reverses that. The EU definition of an electronic invoice becomes a structured format that allows automatic processing, and EN 16931 is the reference standard. A PDF no longer qualifies as an e-invoice. Our <a href="/blog/e-invoice-vs-pdf-invoice">e-invoice vs PDF invoice</a> article explains the difference.</p>
<h3>The 10-day rule</h3>
<p>For intra-EU supplies, the invoice must be issued within 10 days of the chargeable event (for example, the supply). The original proposal had two days; the adopted text is reported as 10. Summary invoices covering a calendar month remain possible under conditions.</p>
<h3>Digital reporting requirements (DRR)</h3>
<p>The supplier reports the invoice data to its tax authority, and the customer reports the data it received, within the same short window. The data is shared between member states through a central system so that the supplier's and customer's records can be matched. This replaces the EC Sales List (recapitulative statement).</p>

<h2>What ViDA means for domestic e-invoicing</h2>
<p>ViDA does not force a domestic mandate on every country, but it changes the rules in two ways:</p>
<ul>
<li><strong>No more derogations needed.</strong> Since April 2025 member states can impose domestic B2B e-invoicing on their own. Italy, Poland and others originally needed special EU permission.</li>
<li><strong>Convergence.</strong> Domestic real-time reporting systems introduced before ViDA must align with the EU model by 2035. New systems should follow the EU model from the start.</li>
</ul>
<p>That is why Germany, France, Belgium, Croatia and Spain all chose EN 16931-based formats: their national systems will need to plug into the 2030 cross-border model. For how the different national designs compare, see <a href="/blog/peppol-vs-clearance-model">Peppol vs clearance model</a>.</p>

<h2>Does ViDA affect businesses outside the EU?</h2>
<p>The 2030 e-invoicing and digital reporting rules apply to intra-EU B2B transactions, meaning supplies between businesses in different member states. A US or UK freelancer invoicing an EU client is not making an intra-EU supply, so ViDA does not by itself require that invoice to be an EN 16931 e-invoice. Three situations can still pull a non-EU business in:</p>
<ul>
<li><strong>EU VAT registration.</strong> If you are registered for VAT in an EU country and make supplies from there to other member states, those supplies can fall within the intra-EU rules.</li>
<li><strong>Domestic mandates.</strong> Some national mandates reach non-established businesses that are VAT-registered locally. Check each country you are registered in.</li>
<li><strong>Customer requirements.</strong> EU buyers whose systems run on structured data may ask every supplier, inside or outside the EU, for an e-invoice or a Peppol delivery.</li>
</ul>
<p>The single VAT registration changes may actually help non-EU sellers to consumers, because more sales can be declared through the One Stop Shop instead of separate registrations. If you sell services to EU consumers, that is the part of ViDA to read first.</p>

<h3>ViDA vocabulary in one list</h3>
<ul>
<li><strong>DRR:</strong> digital reporting requirements, the transaction-level reporting that replaces EC Sales Lists</li>
<li><strong>EN 16931:</strong> the European standard for the content of an e-invoice</li>
<li><strong>OSS / IOSS:</strong> One Stop Shop and Import One Stop Shop, used to declare cross-border consumer sales in one country</li>
<li><strong>Deemed supplier:</strong> a platform treated as making the supply itself for VAT purposes</li>
<li><strong>Derogation:</strong> special EU permission a country used to need to mandate e-invoicing</li>
</ul>

<h2>ViDA platform and single registration rules in brief</h2>
<table><thead><tr><th>Pillar</th><th>Who it affects</th><th>What changes</th></tr></thead><tbody>
<tr><td>Platform economy</td><td>Platforms for short-term rentals and ride-hailing; hosts and drivers</td><td>Where the underlying provider does not charge VAT, the platform is treated as the supplier and charges VAT</td></tr>
<tr><td>Single VAT registration</td><td>Businesses selling goods and services cross-border to consumers</td><td>More supplies covered by OSS; reverse charge extended so fewer foreign registrations are needed</td></tr>
</tbody></table>

<h2>Worked example: a German seller invoicing a French customer in 2030</h2>
<p>A machinery parts business in Stuttgart ships parts to a French manufacturer. The goods are dispatched on Wednesday 3 July 2030.</p>
<ul>
<li><strong>Net value:</strong> €18,500. As an intra-EU supply of goods it is VAT-exempt in Germany, so German VAT = €0. The French customer self-accounts for French VAT at 20%: 18,500 × 0.20 = €3,700, which it declares and, if fully taxable, deducts in the same return.</li>
<li><strong>Invoice deadline:</strong> chargeable event 3 July + 10 days = by 13 July 2030.</li>
<li><strong>Format:</strong> a structured EN 16931 e-invoice with both VAT numbers and the exemption reason, not a PDF.</li>
<li><strong>Reporting:</strong> the German seller reports the invoice data to the German tax authority and the French buyer reports the received invoice to the French authority, within the DRR window. No EC Sales List entry is needed for this supply.</li>
</ul>
<p>Before 2030, the same sale can be invoiced with a PDF showing both VAT numbers and reverse charge or exemption wording; see our <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a>.</p>

<h2>How to prepare for ViDA now</h2>
<ol>
<li><strong>Get compliant with your national mandate first.</strong> The software you choose for Germany, France or Belgium should already speak EN 16931.</li>
<li><strong>Check your cross-border volume.</strong> If a large share of your sales are intra-EU B2B, ask your provider about its ViDA roadmap.</li>
<li><strong>Clean up master data.</strong> Valid VAT numbers, addresses and product descriptions matter more when a machine checks them. See <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a>.</li>
<li><strong>Tighten invoicing speed.</strong> A 10-day issuing window rules out end-of-quarter batch invoicing for cross-border sales.</li>
<li><strong>Learn the data model.</strong> Our guide to the <a href="/blog/e-invoice-template-en-16931">EN 16931 e-invoice template</a> lists the fields.</li>
</ol>

<h2>Common misunderstandings about ViDA</h2>
<ul>
<li><strong>"ViDA starts in 2030, so I can ignore it."</strong> The domestic mandates it enables are already arriving.</li>
<li><strong>"ViDA means one EU invoicing platform."</strong> No. Countries keep their own channels; ViDA sets the data standard and reporting rules.</li>
<li><strong>"B2C sales are in scope."</strong> The 2030 e-invoicing obligation is for intra-EU B2B transactions.</li>
<li><strong>"A PDF with a QR code will do."</strong> Not for intra-EU B2B from 2030.</li>
</ul>

<h2>ViDA readiness checklist</h2>
<ul>
<li>National e-invoicing deadline identified for each country you are established in</li>
<li>Software that issues and receives EN 16931 e-invoices</li>
<li>Process to issue intra-EU invoices within 10 days of supply</li>
<li>Customer VAT numbers validated</li>
<li>Plan to replace EC Sales List filing with digital reporting from July 2030</li>
<li>Platform or OSS impact reviewed if you sell to consumers</li>
</ul>

<h2>Where PDF invoices still fit after ViDA</h2>
<p>PDF invoices remain fine for sales to consumers, for sales outside the EU, and for domestic sales in countries without a mandate, at least until national rules change. For those, our <a href="/invoice-generator">free invoice generator</a> creates a clean PDF in your browser. It does not produce EN 16931 e-invoices or report data to tax authorities.</p>

<h2>Next step</h2>
<p>Look at your national deadline first, because it arrives sooner than ViDA. Then ask your accounting or e-invoicing provider one question: "Will your product support ViDA intra-EU e-invoicing and digital reporting from July 2030?" A clear yes, with a roadmap, is what you want to hear.</p>
`,
  },
  {
    slug: "e-invoice-vs-pdf-invoice",
    title: "E-Invoice vs PDF Invoice: What Counts as an E-Invoice?",
    description:
      "E-invoice vs PDF explained: what makes a structured invoice, why a PDF usually isn't an e-invoice under mandates, EN 16931, hybrids and when a PDF is fine.",
    category: "comparisons",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: ["e-invoicing-guide", "e-invoice-template-en-16931", "what-is-peppol"],
    faqs: [
      {
        q: "Is an emailed PDF legally an electronic invoice?",
        a: "It depends on the law you are reading. The current EU VAT Directive treats any invoice issued and received in electronic form, including a PDF, as an electronic invoice. National e-invoicing mandates and the EU's ViDA reform use a narrower definition: a structured format that software can process automatically. Under those mandates a PDF is not an e-invoice.",
      },
      {
        q: "Can I convert a PDF invoice into an e-invoice?",
        a: "Not just by changing the file type. You need software that creates the structured data (such as UBL or CII XML) with all required fields, validates it against the standard, and in many countries sends it through a specific channel. Scanning or OCR tools help buyers read PDFs, but the result is not a legally issued e-invoice.",
      },
      {
        q: "Is a PDF with a QR code an e-invoice?",
        a: "No. A QR code can carry some invoice data or a verification link, as in Saudi Arabia, India or Spain's Verifactu, but the e-invoice itself is the structured file registered or cleared with the authority. The PDF with the QR code is a visual copy of it.",
      },
      {
        q: "Which is better for getting paid faster, e-invoice or PDF?",
        a: "For large buyers with automated accounts payable, e-invoices are usually processed faster because they skip manual data entry and matching. For small clients who pay by bank transfer after reading an email, a clear PDF with payment details works just as well. Choose by what your customer can process.",
      },
      {
        q: "Do I need special software to open an e-invoice?",
        a: "To read a pure XML e-invoice comfortably, yes: accounting software, an e-invoicing portal or a free viewer turns the XML into a readable layout. Hybrid formats such as ZUGFeRD and Factur-X are easier because they include a PDF view that opens in any PDF reader.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> E-invoice vs PDF comes down to structure. An e-invoice is a structured data file, such as UBL or CII XML following EN 16931, that software can read and process automatically. A PDF is a picture of an invoice for people to read. Under e-invoicing mandates in Germany, France, Belgium, Poland and elsewhere, a PDF is not an e-invoice, even when emailed.</p>

<p>Lots of businesses describe their emailed PDF as an "electronic invoice", and in everyday language it is. The problem is that tax authorities now use the term in a narrower, technical sense. This article explains what an e-invoice is, where a PDF still counts, and how hybrid formats sit in between. If you still mostly send PDFs, our <a href="/invoice-generator">free invoice generator</a> creates them in your browser; just know where they stop being enough.</p>

<h2>What is an e-invoice?</h2>
<p>The clearest definition comes from the EU's public procurement Directive 2014/55/EU: an electronic invoice is "an invoice that has been issued, transmitted and received in a structured electronic format which allows for its automatic and electronic processing". Three elements matter:</p>
<ul>
<li><strong>Structured:</strong> every value sits in a defined field (seller VAT number, invoice number, line amount) rather than in free text on a page.</li>
<li><strong>Machine-readable:</strong> the buyer's software can import it without a person retyping or a scanner guessing.</li>
<li><strong>End-to-end electronic:</strong> issued, sent and received as data, not printed and scanned along the way.</li>
</ul>
<p>Germany, France, Belgium, Croatia and the 2030 EU ViDA rules all use this structured definition. See our <a href="/blog/e-invoicing-guide">e-invoicing guide</a> for the bigger picture.</p>

<h3>Why tax authorities want structured invoices</h3>
<p>With PDFs, the tax authority only sees invoice data much later, in summarised VAT returns or during an audit. With structured e-invoices, the data can be checked automatically and, in many systems, reported in real time. That makes it easier to spot missing trader fraud, fake invoices and mismatches between what a seller declares and what a buyer deducts. For businesses, the promised benefit is faster processing: no retyping, fewer disputes over unreadable scans, automatic matching to purchase orders, and in some countries pre-filled VAT returns. Whether you feel those benefits depends on your software, but the direction of travel is clear in almost every mandate.</p>
<h2>Is a PDF invoice an e-invoice?</h2>
<p>Under the current general EU VAT rules, a PDF sent by email is an "electronic invoice" because the VAT Directive defines it broadly as an invoice issued and received in any electronic format. That is why PDFs have been legally fine across Europe for years.</p>
<p>Under e-invoicing mandates, the answer is no. A PDF is an unstructured document. Germany calls it an "other invoice" (sonstige Rechnung), and from the dates in each mandate it is no longer acceptable for in-scope domestic B2B sales. The EU's <a href="/blog/vida-vat-in-the-digital-age">ViDA reform</a> brings the VAT Directive in line with the structured definition from 2030.</p>

<h2>E-invoice vs PDF invoice: side-by-side comparison</h2>
<table><thead><tr><th></th><th>Structured e-invoice</th><th>PDF invoice</th></tr></thead><tbody>
<tr><td>What it is</td><td>Data file (XML or JSON) with defined fields</td><td>Fixed-layout document</td></tr>
<tr><td>Read by</td><td>Software first, people via a viewer</td><td>People first, software via OCR</td></tr>
<tr><td>Standards</td><td>EN 16931, UBL 2.1, UN/CEFACT CII, Peppol BIS Billing 3.0, national formats</td><td>None for content (PDF/A for archiving)</td></tr>
<tr><td>Sent via</td><td>Peppol, platforms, tax authority systems, sometimes email</td><td>Email, portal upload, post</td></tr>
<tr><td>Validation</td><td>Automatic checks against business rules</td><td>Manual review</td></tr>
<tr><td>Meets mandates?</td><td>Yes, if the right format and channel</td><td>No, where a mandate applies</td></tr>
<tr><td>Cost to create</td><td>Needs compatible software</td><td>Free tools available</td></tr>
<tr><td>Best for</td><td>B2B and B2G in mandate countries, high-volume buyers</td><td>B2C, small clients, countries without mandates</td></tr>
</tbody></table>

<h2>What is EN 16931 and why does it matter?</h2>
<p>EN 16931 is the European standard for the core content of an electronic invoice, published by the European Committee for Standardization (CEN). It defines a semantic data model: a list of business terms, each with a code such as BT-1 (invoice number), and rules about which are mandatory. It allows two syntaxes, UBL 2.1 and UN/CEFACT CII. National formats such as XRechnung (Germany), Peppol BIS Billing 3.0 and the Croatian HR CIUS are specifications (CIUS) built on top of it. Our <a href="/blog/e-invoice-template-en-16931">EN 16931 e-invoice template</a> guide lists the fields.</p>

<h2>Common e-invoice formats by country</h2>
<p>"E-invoice" is a category, not a single file type. Each mandate names the formats it accepts:</p>
<table><thead><tr><th>Country or network</th><th>Format</th><th>Syntax</th><th>Type</th></tr></thead><tbody>
<tr><td>Peppol countries (Belgium, Norway, Australia and others)</td><td>Peppol BIS Billing 3.0, PINT</td><td>UBL</td><td>Pure XML</td></tr>
<tr><td>Germany</td><td>XRechnung; ZUGFeRD 2.x</td><td>UBL or CII; CII in PDF/A-3</td><td>XML; hybrid</td></tr>
<tr><td>France</td><td>Factur-X, UBL, CII</td><td>CII in PDF/A-3; UBL; CII</td><td>Hybrid or XML</td></tr>
<tr><td>Italy</td><td>FatturaPA</td><td>National XML</td><td>Pure XML via SdI</td></tr>
<tr><td>Poland</td><td>FA(3) structured invoice</td><td>National XML</td><td>Pure XML via KSeF</td></tr>
<tr><td>Spain (public sector)</td><td>Facturae</td><td>National XML</td><td>Pure XML</td></tr>
<tr><td>Saudi Arabia</td><td>ZATCA e-invoice</td><td>UBL 2.1</td><td>XML, or PDF/A-3 with XML</td></tr>
<tr><td>India</td><td>GST e-invoice schema</td><td>JSON</td><td>Registered on the IRP for an IRN</td></tr>
</tbody></table>
<p>Several of these are national, older than EN 16931 or outside the EU, so they do not all follow the European model. Under ViDA, EU systems are expected to converge on EN 16931-compatible data. The practical rule: your software must produce the exact format your country (or your customer) requires, and a PDF view alone is never enough where a mandate applies.</p>

<h2>Hybrid invoices: Factur-X and ZUGFeRD</h2>
<p>Hybrid formats combine both worlds: a PDF/A-3 file with the structured XML embedded inside. People open the PDF; software reads the XML. In Germany and France, a hybrid invoice counts as an e-invoice if the XML uses a sufficiently complete profile (for example EN 16931 or higher). If the PDF and the XML disagree, the XML is the legal invoice. For format detail, see <a href="/blog/germany-e-invoicing-xrechnung-zugferd">XRechnung vs ZUGFeRD</a>.</p>

<h2>Worked example: the same invoice as PDF and as structured data</h2>
<p>A Dublin consultancy invoices a Brussels client for a strategy workshop. On the PDF, the reader sees a logo, addresses and a table. In the e-invoice, each value has a business term code:</p>
<table><thead><tr><th>What you see on the PDF</th><th>EN 16931 business term</th><th>Value</th></tr></thead><tbody>
<tr><td>Invoice No.</td><td>BT-1 Invoice number</td><td>INV-2027-0042</td></tr>
<tr><td>Date</td><td>BT-2 Invoice issue date</td><td>2027-03-15</td></tr>
<tr><td>Currency</td><td>BT-5 Invoice currency code</td><td>EUR</td></tr>
<tr><td>From</td><td>BT-27 Seller name; BT-31 Seller VAT identifier</td><td>Consultancy name; IE VAT number</td></tr>
<tr><td>Bill to</td><td>BT-44 Buyer name; BT-48 Buyer VAT identifier</td><td>Client name; BE VAT number</td></tr>
<tr><td>Workshop, 2 days at €1,600</td><td>BT-129 quantity, BT-146 net price, BT-131 line net amount</td><td>2 × 1,600 = 3,200.00</td></tr>
<tr><td>Subtotal</td><td>BT-106 Sum of invoice line net amount</td><td>3,200.00</td></tr>
<tr><td>VAT (reverse charge)</td><td>BT-110 Invoice total VAT amount, VAT category AE</td><td>0.00</td></tr>
<tr><td>Total due</td><td>BT-112 total with VAT; BT-115 amount due</td><td>3,200.00</td></tr>
</tbody></table>
<p>The maths is the same on both: 2 days × €1,600 = €3,200, and because it is a cross-border B2B service under the reverse charge, VAT on the invoice is €0 and the Belgian client accounts for VAT at its local rate. The difference is that the client's software can post the e-invoice automatically, while the PDF needs someone to key in or check every number. Wording for the reverse charge line is in our <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a>.</p>

<h2>When is a PDF invoice still fine?</h2>
<ul>
<li>Sales to consumers (B2C) in most countries</li>
<li>Countries without a B2B mandate, including the US and UK as of October 2026</li>
<li>Small businesses during transition periods, for example German businesses under €800,000 until the end of 2027 (see <a href="/blog/germany-e-invoicing-2027">Germany e-invoicing 2027</a>)</li>
<li>Most cross-border invoices until ViDA applies in 2030</li>
<li>Quotes, proformas, statements and receipts, which are not tax invoices</li>
</ul>

<h2>When do you need a real e-invoice?</h2>
<ul>
<li>Domestic B2B sales in a country whose mandate covers you (Belgium, Poland, Croatia, Italy, Germany from 2027/2028, France from 2026/2027)</li>
<li>Invoices to public authorities in most EU countries (B2G)</li>
<li>Clearance countries such as Saudi Arabia, India above the turnover limit and Malaysia</li>
<li>Any customer who contractually requires Peppol or a specific format; see <a href="/blog/what-is-peppol">what Peppol is</a></li>
</ul>

<h2>Common mistakes about e-invoices</h2>
<ul>
<li><strong>Calling a PDF from accounting software an e-invoice.</strong> The software matters less than the file format.</li>
<li><strong>Sending a hybrid with a minimal profile.</strong> Germany does not accept MINIMUM or BASIC WL as e-invoices.</li>
<li><strong>Archiving the PDF view only.</strong> Keep the original XML; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
<li><strong>Editing the PDF after creating the XML.</strong> The two then disagree and the XML wins.</li>
</ul>

<h2>Checklist: is your invoice an e-invoice?</h2>
<ul>
<li>Is it a structured file (XML or JSON), not just a PDF or image?</li>
<li>Does it follow EN 16931 or the national format required?</li>
<li>Does it pass validation (no missing mandatory fields)?</li>
<li>Was it sent through the required channel (Peppol, platform, authority)?</li>
<li>Is the original structured file archived unaltered?</li>
</ul>

<h2>Next step</h2>
<p>If you are in a mandate country, check your deadline in our <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates 2027 list</a> and choose software that issues structured invoices. If you are not, a clean PDF still does the job; pick a layout from our <a href="/invoice-templates">invoice templates</a> and make it in a few minutes.</p>
`,
  },
  {
    slug: "peppol-vs-clearance-model",
    title: "Peppol vs Clearance Model: E-Invoicing Models Compared",
    description:
      "Clearance model e-invoicing vs Peppol: CTC, post-audit, 4-corner and 5-corner models, real-time reporting, and which countries use each model.",
    category: "comparisons",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: ["what-is-peppol", "e-invoicing-mandates-2027", "how-to-send-peppol-invoice"],
    faqs: [
      {
        q: "Is Peppol a clearance model?",
        a: "Not on its own. Peppol is a network for exchanging invoices between businesses through access points, and the tax authority is not in the middle of each exchange. Some countries add the tax authority as a fifth corner, so invoice data is reported as it flows over Peppol, but that is still reporting rather than prior approval.",
      },
      {
        q: "What does CTC mean in e-invoicing?",
        a: "CTC stands for continuous transaction controls: the tax authority receives invoice data at or near the time of the transaction instead of waiting for periodic VAT returns or audits. Clearance and real-time reporting are both forms of CTC; the difference is whether the authority must validate the invoice before it is valid.",
      },
      {
        q: "Which model is cheapest for a small business?",
        a: "It depends more on the tools available than on the model. Several clearance countries offer free government portals for low volumes, and several Peppol countries have low-cost access point plans. The real cost is usually changing your workflow, so compare what your accounting software already includes.",
      },
      {
        q: "Can a country switch models?",
        a: "Yes, and many are moving toward hybrids. Belgium started with Peppol exchange in 2026 and plans to add e-reporting in 2028, and ViDA requires national real-time systems to converge with the EU model by 2035. Expect more countries to combine Peppol-style exchange with tax authority reporting.",
      },
      {
        q: "What happens if the clearance platform is down?",
        a: "Clearance countries publish contingency procedures, such as issuing offline and submitting once the system is available again, or extended deadlines. The details differ by country, so check your tax authority's fallback rules and make sure your software supports them.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In a clearance model of e-invoicing, the tax authority (or its platform) must validate each invoice before it is legally valid or delivered, as in Italy, Poland and Saudi Arabia. Peppol is an exchange network: invoices travel between businesses' access points (four corners), and the tax authority audits later or receives a copy as a fifth corner. Both can be mandatory; they control different things.</p>

<p>When people compare e-invoicing countries, they often lump everything together. In practice there are a few distinct models, and the one your country uses decides what your software must do, how fast invoices move, and what happens when something goes wrong. This comparison explains each model in plain terms. For the Peppol network itself, see our explainer on <a href="/blog/what-is-peppol">what Peppol is</a>.</p>

<h2>The main e-invoicing models at a glance</h2>
<table><thead><tr><th>Model</th><th>Who sees the invoice first</th><th>Tax authority role</th><th>Examples</th></tr></thead><tbody>
<tr><td>Post-audit</td><td>Buyer</td><td>Checks later, during audits or via VAT returns</td><td>Germany (e-invoices from 2025-2028, no live reporting), most countries for PDF invoices</td></tr>
<tr><td>Interoperability (4-corner, Peppol)</td><td>Buyer, via access points</td><td>None in the exchange; audits later</td><td>Belgium (2026), Peppol use in Norway, Australia, New Zealand</td></tr>
<tr><td>5-corner (Peppol plus reporting)</td><td>Buyer, with data copied to the authority</td><td>Receives data in near real time</td><td>UAE, Slovakia (from 2027), Belgium (planned from 2028)</td></tr>
<tr><td>Real-time reporting</td><td>Buyer</td><td>Receives data soon after issue</td><td>Croatia, Greece (myDATA), Hungary, Spain (SII)</td></tr>
<tr><td>Clearance (centralised CTC)</td><td>Tax authority platform</td><td>Validates before the invoice is valid or delivered</td><td>Italy (SdI), Poland (KSeF), Saudi Arabia (standard invoices), India (IRP), Mexico</td></tr>
<tr><td>Decentralised CTC (platform model)</td><td>Certified platform</td><td>Receives data via platforms</td><td>France (approved platforms)</td></tr>
</tbody></table>

<h2>What is the clearance model in e-invoicing?</h2>
<p>In a clearance model, the invoice passes through a government platform before (or as) it reaches the buyer. The platform checks the format, the seller's registration and sometimes the arithmetic, then stamps or assigns an ID. Only a cleared invoice counts.</p>
<ul>
<li><strong>Italy:</strong> invoices go through the Sistema di Interscambio (SdI), which delivers them to the buyer.</li>
<li><strong>Poland:</strong> invoices are issued in KSeF and receive a KSeF number; see <a href="/blog/belgium-poland-e-invoicing-mandates">KSeF and Belgium compared</a>.</li>
<li><strong>Saudi Arabia:</strong> standard B2B tax invoices are cleared by ZATCA before being shared; simplified B2C invoices are reported within 24 hours. See <a href="/blog/zatca-e-invoicing-guide">ZATCA e-invoicing</a>.</li>
<li><strong>India:</strong> invoices are registered on the Invoice Registration Portal and receive an IRN and signed QR code.</li>
</ul>

<h3>Pros and cons of clearance</h3>
<ul>
<li><strong>Pros:</strong> strong fraud control, one source of truth, easy access to received invoices via the authority's platform.</li>
<li><strong>Cons:</strong> dependency on the platform's uptime, rigid formats, and an extra step before you can send.</li>
</ul>

<h2>How the Peppol four-corner model works</h2>
<p>Peppol connects businesses through certified access points. Corner 1 is the seller, corner 2 the seller's access point, corner 3 the buyer's access point and corner 4 the buyer. Invoices use Peppol BIS Billing 3.0 (based on EN 16931) or the newer PINT specifications. The tax authority is not in the flow. That makes Peppol fast and flexible, but on its own it gives the authority no live data. Our step-by-step guide on <a href="/blog/how-to-send-peppol-invoice">how to send a Peppol invoice</a> covers onboarding.</p>

<h2>What is the 5-corner model?</h2>
<p>A five-corner model adds the tax authority as corner five. Invoices still travel over Peppol between access points, but the access points (or the parties) also send the tax data to the authority. It combines Peppol's open exchange with continuous transaction controls without making the authority approve each invoice first. The UAE's new system and Slovakia's 2027 regime are described this way, and Belgium plans to add reporting to its Peppol mandate from 2028.</p>

<h2>Real-time reporting vs clearance</h2>
<p>Real-time reporting sits between post-audit and clearance. You issue the invoice to your customer directly, and the data goes to the authority immediately or within days. The authority does not have to approve it first. Croatia's Fiscalization 2.0 is a good example: e-invoices move through intermediaries and data is fiscalized as they are exchanged, with payment e-reporting monthly. See our <a href="/blog/croatia-e-invoicing-fiscalization">Croatia e-invoicing guide</a>.</p>

<p>Hybrids are now common. France combines approved private platforms with reporting to a central government platform, which some describe as a "Y" or decentralised CTC model; see our <a href="/blog/france-e-invoicing-reform">France e-invoicing guide</a>. Greece lets businesses issue through certified providers or free government tools while reporting to myDATA. The labels matter less than the three questions below: who approves, who sees the data and when, and which channel carries the invoice.</p>
<h2>Peppol vs clearance model: side-by-side</h2>
<table><thead><tr><th></th><th>Peppol (4-corner)</th><th>5-corner</th><th>Clearance</th></tr></thead><tbody>
<tr><td>Invoice valid when</td><td>Issued and delivered</td><td>Issued and delivered</td><td>Validated by the authority</td></tr>
<tr><td>Authority sees data</td><td>Later (audit, returns)</td><td>Near real time</td><td>Before or at delivery</td></tr>
<tr><td>Delivery channel</td><td>Any access point</td><td>Any accredited access point</td><td>Government platform or certified provider</td></tr>
<tr><td>Format</td><td>Peppol BIS / PINT</td><td>Peppol-based national spec</td><td>National spec (FatturaPA, FA(3), UBL for ZATCA, JSON for India)</td></tr>
<tr><td>If platform fails</td><td>Switch access point</td><td>Access point retries; reporting may lag</td><td>Contingency rules apply</td></tr>
<tr><td>Cross-border</td><td>Natural fit</td><td>Natural fit</td><td>Usually domestic only</td></tr>
</tbody></table>

<h2>Worked example: one invoice under three models</h2>
<p>A supplier invoices a customer for consulting: net 10,000, VAT at 15% = 10,000 × 0.15 = 1,500, total 11,500 (the same numbers in any currency).</p>
<ol>
<li><strong>Clearance (Saudi Arabia style, SAR 11,500):</strong> the supplier's software generates signed XML and sends it to ZATCA. ZATCA validates and returns the cleared invoice. Only then does the supplier share it with the buyer. Elapsed time: usually seconds, if all fields pass.</li>
<li><strong>Peppol four-corner (Belgium style):</strong> the supplier sends the UBL file to its access point, which delivers it to the buyer's access point. The tax authority sees nothing until the VAT return.</li>
<li><strong>Five-corner (UAE style):</strong> as in the Peppol flow, but the access point also reports the tax data to the authority, so it has the data close to real time.</li>
</ol>
<p>Belgium's actual standard VAT rate is 21% and the UAE's is 5%; the 15% figure keeps the arithmetic comparable. The arithmetic does not change between models. What changes is who must see the invoice, and when, before it counts.</p>

<h3>Pros and cons of the Peppol model</h3>
<ul>
<li><strong>Pros:</strong> one connection reaches every registered receiver in any Peppol country; you can switch access point without changing your Peppol ID; it works naturally for cross-border invoices; the standards are open and based on EN 16931.</li>
<li><strong>Cons:</strong> both parties must be registered; on its own it gives the tax authority no live data, which is why countries add reporting; and small businesses still pay an access point provider or rely on accounting software that includes one.</li>
</ul>

<h2>What the e-invoicing model means for a small business</h2>
<p>For a business sending a few dozen invoices a month, the model shows up in four practical ways:</p>
<ol>
<li><strong>Timing.</strong> Under clearance, you cannot send the invoice until the platform responds. Build that into point-of-sale and same-day billing.</li>
<li><strong>Error handling.</strong> Clearance and 5-corner systems reject invalid invoices immediately. Post-audit and plain Peppol let errors through, to be found later by your customer or an auditor.</li>
<li><strong>Corrections.</strong> In clearance countries you cannot edit or delete a cleared invoice; you issue a credit note, which is also cleared. Plan your correction workflow before go-live.</li>
<li><strong>Visibility.</strong> In clearance and reporting countries, the authority already holds your sales data, so VAT returns are increasingly pre-filled and mismatches are flagged quickly.</li>
</ol>
<p>In every model, keep your invoice numbering consistent and continuous; an <a href="/tools/invoice-number-generator">invoice number generator</a> can help you settle on a format before you configure your e-invoicing software.</p>

<h2>Which model does your country use?</h2>
<p>Look at three questions: does the authority have to approve the invoice, does it receive data in real time, and is the exchange open (Peppol) or through a government platform? Our <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates 2027 list</a> gives the model for each country. Across the EU, the <a href="/blog/vida-vat-in-the-digital-age">ViDA reform</a> pushes everyone towards EN 16931 data plus digital reporting by 2030-2035.</p>

<h2>Common mistakes when choosing a solution</h2>
<ul>
<li><strong>Assuming a Peppol access point covers a clearance country.</strong> Some providers do both, but they are different integrations.</li>
<li><strong>Ignoring contingency rules</strong> in clearance countries.</li>
<li><strong>Thinking post-audit means "no rules".</strong> Germany still requires EN 16931 formats and archiving.</li>
<li><strong>Forgetting receiving.</strong> In every model you also need to receive and store structured invoices.</li>
</ul>

<h2>Checklist: questions to ask an e-invoicing provider</h2>
<ul>
<li>Which countries and models do you support (Peppol, 5-corner, clearance)?</li>
<li>Are you a certified Peppol access point or accredited provider where required?</li>
<li>Do you handle contingency and retry when the authority's platform is down?</li>
<li>Do you archive the original structured files for the legal retention period?</li>
<li>What does it cost at my invoice volume?</li>
</ul>

<h3>Where a PDF generator fits</h3>
<p>None of these models accept a plain PDF as the legal invoice for in-scope sales. Our <a href="/invoice-generator">free invoice generator</a> is still useful for quotes, proformas, B2C invoices and countries without a mandate, and we say so plainly: it does not connect to Peppol or any tax authority.</p>

<h2>Next step</h2>
<p>Identify the model in each country you invoice in, then choose a provider that supports all of them. If your main market is a Peppol country, start with <a href="/blog/how-to-send-peppol-invoice">how to send a Peppol invoice</a>.</p>
`,
  },
];
