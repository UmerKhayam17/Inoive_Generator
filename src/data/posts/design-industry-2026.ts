import type { PostDraft } from "../blog";

export const DESIGN_INDUSTRY_2026_POSTS: PostDraft[] = [
  {
    slug: "e-invoice-template-en-16931",
    title: "E-Invoice Template: EN 16931 Fields Your Invoice Needs",
    description:
      "Map an EN 16931 e-invoice template field by field: mandatory BT codes, the semantic data model, a worked VAT example and how a PDF layout relates to it.",
    category: "design-templates",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "European Union",
    related: [
      "romania-e-factura",
      "e-invoice-vs-pdf-invoice",
      "how-to-send-peppol-invoice",
      "germany-e-invoicing-xrechnung-zugferd",
    ],
    faqs: [
      {
        q: "Is EN 16931 a file format?",
        a: "No. EN 16931-1 is a semantic data model: it defines what information an invoice carries and what each item means. The actual files use a syntax bound to that model, mainly UBL 2.1 or UN/CEFACT Cross Industry Invoice (CII). Formats such as Peppol BIS Billing 3.0, XRechnung and the EN 16931 profile of ZUGFeRD/Factur-X are specifications built on top of the model.",
      },
      {
        q: "Can I make an EN 16931 invoice in Word or Excel?",
        a: "Not on its own. Word, Excel and PDF generators produce a document for people to read. An EN 16931 e-invoice is a structured XML file that software validates against business rules. You can design a readable template that mirrors the same fields, then use e-invoicing software, an accounting package or a Peppol access point to produce and send the XML.",
      },
      {
        q: "What does BT stand for in e-invoicing?",
        a: "BT means business term: a single piece of information such as BT-1 Invoice number or BT-112 Invoice total amount with VAT. BG means business group: a set of related terms, such as BG-4 Seller or BG-25 Invoice line. Rules in the standard (labelled BR-xx) state which terms are mandatory and how amounts must add up.",
      },
      {
        q: "Does the UK use EN 16931?",
        a: "The UK is no longer bound by EU invoicing rules, and at the time of writing it has no general B2B e-invoicing mandate. UK public bodies and many Peppol users still work with Peppol BIS Billing 3.0, which is built on EN 16931, so the field model is useful in UK projects too. Check GOV.UK for current plans.",
      },
      {
        q: "What changed in EN 16931-1:2026?",
        a: "CEN approved a revised EN 16931-1 in March 2026, linked to the EU's ViDA reforms. Reported additions include richer delivery details, references to multiple orders and deliveries, and support for automated VAT reporting. The previous version remains in use during a transition period. Check which version your country's format and your software follow before changing anything.",
      },
      {
        q: "Which VAT category code should I use for reverse charge?",
        a: "In EN 16931 the VAT category code for reverse charge is AE, and the invoice must then show the buyer's VAT identifier (BT-48) and a VAT exemption reason, as text (BT-120) or code (BT-121). Other common codes are S for standard rate, Z for zero rated, E for exempt and K for intra-community supply of goods.",
      },
      {
        q: "What is a CIUS in e-invoicing?",
        a: "A CIUS, or core invoice usage specification, is a set of extra rules that tightens EN 16931 for a particular country, sector or network. It can make optional fields mandatory or restrict code lists, but it cannot add data the core model does not allow. Peppol BIS Billing 3.0 and Germany's XRechnung are well-known examples. Check which CIUS your customer's country expects.",
      },
      {
        q: "What is the difference between UBL and CII?",
        a: "UBL 2.1 and UN/CEFACT CII are the two XML syntaxes that can carry an EN 16931 invoice. They hold the same business information but use different element names and structures. Peppol BIS Billing 3.0 normally uses UBL, while ZUGFeRD and Factur-X embed CII inside a PDF/A-3. You rarely choose directly: your software or access point picks the syntax the format requires.",
      },
      {
        q: "How do I check that an EN 16931 invoice is valid?",
        a: "E-invoices are checked against the published validation artefacts, which test the structure and the business rules, such as totals that must add up. Most e-invoicing software and Peppol access points validate automatically before sending. National bodies also publish validators, for example for XRechnung in Germany. If an invoice fails, fix the source data in your system rather than editing the XML by hand.",
      },
      {
        q: "Do small businesses have to send EN 16931 e-invoices?",
        a: "It depends on the country. Belgium has required structured B2B e-invoices since 1 January 2026. Germany has required businesses to be able to receive e-invoices since 2025, with issuing phased in from 2027 for larger firms and 2028 for everyone. France is phasing in reception and issuing from September 2026. Confirm the current dates with your national tax authority.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An e-invoice template built on EN 16931 must carry the core business terms: invoice number (BT-1), issue date (BT-2), type code (BT-3), currency (BT-5), seller and buyer names and countries, at least one invoice line with quantity, unit, price and VAT category, a VAT breakdown, and the document totals (BT-106 to BT-115).</p>

<p>EN 16931 is the European standard that defines what a structured electronic invoice contains. It sits behind Peppol BIS Billing 3.0, Germany's XRechnung, the EN 16931 profile of ZUGFeRD and Factur-X, and many national mandates. This guide maps an EN 16931 template field by field, shows how the totals must reconcile, and explains where a readable PDF fits. If you only need a clean human-readable invoice today, the <a href="/invoice-generator">free invoice generator</a> lays out the same core fields, but be aware that it produces a PDF, not a structured XML e-invoice.</p>

<h2>What is EN 16931?</h2>
<p>EN 16931 is a family of standards published by CEN, the European Committee for Standardization, under the EU e-invoicing Directive 2014/55/EU. Part 1 (EN 16931-1) is the <strong>semantic data model</strong> of the core elements of an electronic invoice. "Semantic" means it defines the meaning of each piece of information, not how it is written in a file. Part 2 lists the syntaxes that may carry it: UBL 2.1 and UN/CEFACT CII.</p>
<p>Public bodies in the EU must be able to receive invoices that comply with EN 16931. National B2B mandates in Germany, Belgium, France, Poland and elsewhere build on it or on formats aligned with it. For the bigger picture of mandates and networks, see our <a href="/blog/e-invoicing-guide">e-invoicing guide</a> and the country list in <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates 2027</a>.</p>
<p>A revised version, EN 16931-1:2026, was approved by CEN in March 2026 in connection with the ViDA (VAT in the Digital Age) package, according to the <a href="https://ec.europa.eu/newsroom/digital/items/930407/en" target="_blank" rel="noopener noreferrer">European Commission's announcement</a>. The BT codes in this article follow the model as used in Peppol BIS Billing 3.0. Check which version your format and software implement.</p>

<h2>How the EN 16931 semantic data model is organised</h2>
<p>The model has two building blocks:</p>
<ul>
<li><strong>Business terms (BT)</strong>: single items of information, each with a number such as BT-1. Example: BT-27 Seller name.</li>
<li><strong>Business groups (BG)</strong>: containers for related terms, such as BG-4 Seller, BG-7 Buyer, BG-16 Payment instructions, BG-22 Document totals, BG-23 VAT breakdown and BG-25 Invoice line.</li>
</ul>
<p>Each term has a cardinality: 1..1 (mandatory, once), 0..1 (optional), 1..n (at least one) or 0..n. Business rules labelled BR-xx then add conditions, such as "an invoice shall have an invoice number" (BR-02) or "an invoice with a VAT breakdown in category AE shall show the buyer's VAT identifier". Specifications built on top of the standard, called CIUS (core invoice usage specifications), can tighten these rules. Peppol BIS Billing 3.0, for example, makes the seller and buyer electronic addresses (BT-34 and BT-49) mandatory.</p>

<h2>Mandatory EN 16931 fields: the invoice header</h2>
<table><thead><tr><th>BT code</th><th>Business term</th><th>What to put there</th></tr></thead><tbody>
<tr><td>BT-1</td><td>Invoice number</td><td>Your unique sequential number, e.g. INV-2026-0142</td></tr>
<tr><td>BT-2</td><td>Invoice issue date</td><td>Date the invoice is issued (YYYY-MM-DD in the XML)</td></tr>
<tr><td>BT-3</td><td>Invoice type code</td><td>From the UNTDID 1001 list: 380 commercial invoice, 381 credit note</td></tr>
<tr><td>BT-5</td><td>Invoice currency code</td><td>ISO 4217 code, e.g. EUR</td></tr>
<tr><td>BT-23</td><td>Business process type</td><td>Optional in the core model, mandatory in Peppol</td></tr>
<tr><td>BT-24</td><td>Specification identifier</td><td>Identifies the specification the invoice follows (fixed value per format)</td></tr>
</tbody></table>
<p>Strongly recommended or conditional header terms include BT-9 Payment due date, BT-10 Buyer reference (mandatory in XRechnung, where it carries the Leitweg-ID for German public buyers), BT-13 Purchase order reference, BT-20 Payment terms, BT-22 Invoice note and BT-25 Preceding invoice reference for credit notes. BT-7 Value added tax point date and BT-8 its code are mutually exclusive. If your numbering needs work, our <a href="/blog/invoice-numbering-system">invoice numbering system guide</a> covers sequences that never break, and <a href="/blog/invoice-reference-number">invoice reference number</a> explains how BT-1 differs from a payment reference.</p>

<h2>Seller and buyer fields (BG-4 and BG-7)</h2>
<table><thead><tr><th>Seller</th><th>Buyer</th><th>Notes</th></tr></thead><tbody>
<tr><td>BT-27 Seller name (mandatory)</td><td>BT-44 Buyer name (mandatory)</td><td>Full legal or registered name</td></tr>
<tr><td>BT-31 Seller VAT identifier</td><td>BT-48 Buyer VAT identifier</td><td>Buyer VAT number required for reverse charge and intra-EU supplies</td></tr>
<tr><td>BT-34 Seller electronic address</td><td>BT-49 Buyer electronic address</td><td>Peppol ID with a scheme identifier; mandatory in Peppol</td></tr>
<tr><td>BT-35 Seller address line 1</td><td>Buyer address lines</td><td>Street address</td></tr>
<tr><td>BT-37 / BT-38 Seller city and post code</td><td>Buyer city and post code</td><td>Required by some national rules</td></tr>
<tr><td>BT-40 Seller country code (mandatory)</td><td>BT-55 Buyer country code (mandatory)</td><td>ISO 3166-1 alpha-2, e.g. DE, FR</td></tr>
</tbody></table>
<p>Seller identifiers such as BT-29 Seller identifier and BT-30 Seller legal registration identifier (company registration number) are optional in the core model but often required nationally. Our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> explains which number goes where.</p>

<h2>Invoice line fields (BG-25)</h2>
<p>Every EN 16931 invoice needs at least one invoice line (rule BR-16). Each line carries:</p>
<ul>
<li><strong>BT-126 Invoice line identifier</strong>: 1, 2, 3 and so on.</li>
<li><strong>BT-129 Invoiced quantity</strong> and <strong>BT-130 unit of measure code</strong>, taken from the UN/ECE Recommendation 20 list (for example HUR for hour, C62 for one unit, DAY for day).</li>
<li><strong>BT-146 Item net price</strong>: the price per unit after any price discount.</li>
<li><strong>BT-131 Invoice line net amount</strong>: quantity times net price, minus line allowances, plus line charges.</li>
<li><strong>BT-151 Invoiced item VAT category code</strong> and <strong>BT-152 VAT rate</strong>.</li>
<li><strong>BT-153 Item name</strong>: a short, specific description.</li>
</ul>
<p>The free-text "Description" column on a typical PDF template maps to BT-153 (and optionally BT-154 Item description). An <a href="/blog/itemized-invoice">itemized invoice</a> layout is the closest PDF equivalent to this structure.</p>

<h2>VAT breakdown and document totals (BG-23 and BG-22)</h2>
<p>The VAT breakdown groups lines by VAT category and rate. There must be at least one breakdown (BR-CO-18), and each one carries BT-116 VAT category taxable amount, BT-117 VAT category tax amount, BT-118 VAT category code and BT-119 VAT category rate. Exempt or reverse-charge categories also need BT-120 VAT exemption reason text or BT-121 the reason code.</p>
<table><thead><tr><th>Code</th><th>Meaning</th></tr></thead><tbody>
<tr><td>S</td><td>Standard rate</td></tr>
<tr><td>Z</td><td>Zero rated goods</td></tr>
<tr><td>E</td><td>Exempt from VAT</td></tr>
<tr><td>AE</td><td>VAT reverse charge</td></tr>
<tr><td>K</td><td>Intra-community supply of goods and services</td></tr>
<tr><td>G</td><td>Free export item, VAT not charged</td></tr>
<tr><td>O</td><td>Services outside scope of tax</td></tr>
</tbody></table>
<p>Document totals then reconcile everything: BT-106 Sum of invoice line net amounts, BT-107 and BT-108 document-level allowances and charges, BT-109 Invoice total amount without VAT, BT-110 Invoice total VAT amount, BT-112 Invoice total amount with VAT, BT-113 Paid amount, BT-114 Rounding amount and BT-115 Amount due for payment. Validators check this arithmetic, so a one-cent rounding error will get an e-invoice rejected.</p>

<h2>Worked example: an EN 16931 invoice with two VAT rates</h2>
<p>A German design studio invoices a German client in EUR: 10 hours of design at €85.00 (standard rate 19%) and 20 printed books at €4.50 (reduced rate 7%), with a €300.00 deposit already paid.</p>
<table><thead><tr><th>BT-126</th><th>BT-153 Item name</th><th>BT-129 / BT-130</th><th>BT-146</th><th>BT-131</th><th>BT-151 / BT-152</th></tr></thead><tbody>
<tr><td>1</td><td>Brand design, October</td><td>10 HUR</td><td>85.00</td><td>850.00</td><td>S / 19%</td></tr>
<tr><td>2</td><td>Printed books</td><td>20 C62</td><td>4.50</td><td>90.00</td><td>S / 7%</td></tr>
</tbody></table>
<p>VAT breakdown (BG-23), one group per rate:</p>
<ul>
<li>Category S, 19%: BT-116 = 850.00; BT-117 = 850.00 x 0.19 = 161.50</li>
<li>Category S, 7%: BT-116 = 90.00; BT-117 = 90.00 x 0.07 = 6.30</li>
</ul>
<p>Document totals (BG-22):</p>
<ul>
<li>BT-106 Sum of line net amounts = 850.00 + 90.00 = 940.00</li>
<li>BT-109 Total without VAT = 940.00 (no document-level allowances or charges)</li>
<li>BT-110 Total VAT = 161.50 + 6.30 = 167.80</li>
<li>BT-112 Total with VAT = 940.00 + 167.80 = 1,107.80</li>
<li>BT-113 Paid amount = 300.00</li>
<li>BT-115 Amount due = 1,107.80 - 300.00 = 807.80</li>
</ul>
<p>Note that the same category code (S) appears twice because the rates differ: the breakdown is per category <em>and</em> rate. If the client were a VAT-registered business in France and the service fell under the general B2B place-of-supply rule, the lines would instead use category AE at 0%, the VAT total would be 0.00, and the buyer's VAT number (BT-48) plus a reverse charge note would be required. Our <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a> covers the wording.</p>

<h2>How mandatory invoice fields in EU VAT law relate to EN 16931</h2>
<p>Do not confuse two sets of rules. Article 226 of the EU VAT Directive (2006/112/EC) lists the details every VAT invoice must show, paper or electronic: date, sequential number, supplier and customer VAT numbers where relevant, names and addresses, quantity and nature of goods or services, date of supply, taxable amount per rate, rate, VAT payable, and exemption or reverse charge references. EN 16931 covers all of those and adds structure so software can read them. A paper or PDF invoice can meet Article 226 without being an e-invoice. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> covers the legal content, and <a href="/blog/e-invoice-vs-pdf-invoice">e-invoice vs PDF invoice</a> explains why a PDF is not a structured e-invoice under the new mandates.</p>

<h2>EN 16931 formats: XRechnung, ZUGFeRD, Factur-X and Peppol BIS</h2>
<table><thead><tr><th>Format</th><th>Syntax</th><th>Where it is used</th></tr></thead><tbody>
<tr><td>Peppol BIS Billing 3.0</td><td>UBL 2.1</td><td>Peppol network across Europe, Australia, Singapore and others</td></tr>
<tr><td>XRechnung</td><td>UBL or CII</td><td>German public sector and B2B</td></tr>
<tr><td>ZUGFeRD 2.x / Factur-X (EN 16931 profile and above)</td><td>CII XML embedded in a PDF/A-3</td><td>Germany and France; the Minimum and Basic WL profiles do not meet EN 16931</td></tr>
</tbody></table>
<p>The Peppol specification and its validation rules are public on the <a href="https://docs.peppol.eu/poacc/billing/3.0/bis/" target="_blank" rel="noopener noreferrer">Peppol BIS Billing 3.0 documentation</a>. For the German formats, see <a href="/blog/germany-e-invoicing-xrechnung-zugferd">XRechnung vs ZUGFeRD</a>, and for sending, <a href="/blog/how-to-send-peppol-invoice">how to send a Peppol invoice</a>.</p>

<h2>How to design a PDF template that mirrors EN 16931</h2>
<p>Even if you still send PDFs to some clients, building your template around the EN 16931 field list makes the switch easier and reduces queries:</p>
<ol>
<li><strong>Use the same labels.</strong> "Invoice number", "Issue date", "Due date", "Buyer reference", "PO number".</li>
<li><strong>Show both VAT numbers</strong> near the party names.</li>
<li><strong>Give every line a quantity, unit, unit price, VAT rate and net amount.</strong> Avoid lines like "Services: €940".</li>
<li><strong>Add a VAT summary table per rate</strong> under the lines, matching BG-23.</li>
<li><strong>Show totals in the EN 16931 order</strong>: net, VAT, gross, paid, amount due.</li>
<li><strong>Put IBAN and BIC in a payment block</strong> (BT-84 Payment account identifier and BT-86 Payment service provider identifier). See <a href="/blog/bank-details-on-invoice">bank details on an invoice</a>.</li>
<li><strong>Use ISO codes</strong> for currency and country.</li>
</ol>

<h2>Common EN 16931 validation errors</h2>
<ul>
<li><strong>Totals that do not add up</strong> because VAT was rounded per line instead of per category.</li>
<li><strong>Missing buyer reference</strong> for German public buyers (XRechnung rejects it).</li>
<li><strong>Reverse charge without the buyer VAT number</strong> or exemption reason.</li>
<li><strong>Wrong unit code</strong>, such as "hrs" instead of HUR.</li>
<li><strong>Free-text dates</strong> instead of the ISO date format.</li>
<li><strong>Using a ZUGFeRD Basic WL or Minimum profile</strong> where an EN 16931-compliant invoice is required.</li>
</ul>

<h2>EN 16931 template checklist</h2>
<ul>
<li>BT-1, BT-2, BT-3, BT-5 filled</li>
<li>Seller and buyer names (BT-27, BT-44) and country codes (BT-40, BT-55)</li>
<li>VAT identifiers where required (BT-31, BT-48)</li>
<li>Electronic addresses for Peppol (BT-34, BT-49)</li>
<li>Each line: BT-126, BT-129, BT-130, BT-131, BT-146, BT-151, BT-153</li>
<li>One VAT breakdown per category and rate (BT-116 to BT-119)</li>
<li>Totals reconcile: BT-106, BT-109, BT-110, BT-112, BT-115</li>
<li>Payment instructions (BG-16) with BT-81 payment means code</li>
</ul>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Field requirements vary by country, by format (CIUS) and by version of the standard. Confirm current rules with your national tax authority and the official specification, such as the <a href="https://docs.peppol.eu/poacc/billing/3.0/bis/" target="_blank" rel="noopener noreferrer">Peppol BIS documentation</a>, or speak to an adviser.</p>

<h2>Next step</h2>
<p>If you are not yet in scope for a mandate, set up a PDF layout with the same fields in the <a href="/invoice-generator?template=corporate">invoice generator using the Corporate template</a>, which has room for both VAT numbers and a clear totals block. When you are ready to issue structured e-invoices, use accounting software or a Peppol access point that validates EN 16931 output, and keep your field habits the same.</p>
`,
  },
  {
    slug: "invoice-notes-examples",
    title: "Invoice Notes and Footer: 30 Examples to Copy",
    description:
      "30 invoice notes examples to copy: payment terms, late fees, thank you notes, tax wording and footer text, plus where to place each note on your invoice.",
    category: "design-templates",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: [
      "invoice-terms-and-conditions",
      "invoice-payment-terms",
      "late-payment-fees",
      "professional-invoice-design-tips",
    ],
    faqs: [
      {
        q: "What is the difference between invoice notes and terms and conditions?",
        a: "Notes are short, job-specific messages: a thank you, a reference to the project, a reminder about the deposit. Terms and conditions are the standing rules of your business: payment terms, late fees, ownership and cancellation. Terms usually live in your contract and are summarised on the invoice. Notes change from invoice to invoice; terms rarely do.",
      },
      {
        q: "Are terms printed on an invoice legally binding?",
        a: "Often not on their own. Terms usually need to be agreed before the work starts, in a contract, quote or order acceptance. Printing a late fee on an invoice for the first time may not make it enforceable. In the UK, statutory late payment interest applies to B2B debts even without a clause. Put key terms in your contract and repeat them on the invoice.",
      },
      {
        q: "How long should an invoice note be?",
        a: "Keep each note to one or two sentences and the whole notes area under about 60 words. Clients scan invoices for the amount, due date and payment details. A long block of small print is skipped and can hide the information that actually gets you paid. Move long terms to your contract or a linked page.",
      },
      {
        q: "Should I write thank you on an invoice?",
        a: "Yes, a brief thank you is professional and costs nothing. Some small-business owners report that a polite note helps payment, but treat any claim of a specific percentage uplift with caution. Pair the thank you with the practical details: the due date and how to pay. A friendly tone does not replace clear terms.",
      },
      {
        q: "What should I put in an invoice footer?",
        a: "The footer is for information that is the same on every invoice: your legal business name, registered address, company and VAT numbers, contact email and website, and sometimes your bank details. Many countries require company registration details on business documents, so the footer is a good permanent home for them.",
      },
      {
        q: "What should I write in the notes of an overdue invoice?",
        a: "Keep it factual and polite: the original due date, the amount still outstanding, how to pay and a new date by which you expect payment. If your contract allows late fees or interest, mention that they now apply. For example: 'This invoice was due on 16 November 2026. Please pay the balance of $1,800 by 30 November.' Save firmer wording for later reminders.",
      },
      {
        q: "Do invoice notes appear on structured e-invoices?",
        a: "Yes, but in a defined field. EN 16931 e-invoices, including Peppol BIS Billing 3.0, have an invoice note field (BT-22) for free text, and payment terms have their own field. The buyer's software may show the note on screen or ignore it, so put information the client must act on, such as a PO number or due date, in the proper structured fields as well.",
      },
      {
        q: "Should I put a returns or refund policy in the invoice notes?",
        a: "If you sell products, a one-line summary is helpful, such as 'Returns accepted within 30 days in original condition. See our full returns policy at [link].' The full policy should live on your website or in your terms, where the customer saw it before buying. Consumer law in many countries sets minimum return rights you cannot remove, so check local rules.",
      },
      {
        q: "What language should invoice notes be in for international clients?",
        a: "Usually the language you use with the client, which is often English for cross-border work. Some countries have language rules for tax invoices: Saudi Arabia requires Arabic, for example, and other countries may require the local language for certain documents. If you are unsure, write the notes in both languages and check with the client's accounts team or the local tax authority.",
      },
      {
        q: "Can I save standard invoice notes so I do not retype them?",
        a: "Yes. Keep your standard wording in a text file and paste it into each new invoice. In our free invoice generator, drafts are saved in your browser's local storage, so you can keep a draft with your usual notes and payment terms and reuse it as a starting point. Update dates, names and references each time so stale details do not slip through.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Good invoice notes examples are short and specific: a thank you, the payment terms and due date, how to pay, the late fee policy, any tax wording such as reverse charge, and a project reference. Put job-specific notes above the totals or below the line items, and standing details like company and VAT numbers in the footer.</p>

<p>The notes and footer are the least designed part of most invoices, yet they answer the questions that delay payment: when, how, and what happens if it is late. Below are 30 invoice notes examples you can copy, grouped by purpose, plus guidance on placement and wording. Paste any of them into the Notes field of the <a href="/invoice-generator">free invoice generator</a> and edit the details.</p>

<h2>What are invoice notes?</h2>
<p>Invoice notes are free-text messages printed on the invoice, usually under the line items or near the totals. They cover anything the structured fields do not: a thank you, payment instructions, a reference to a contract, or tax wording. The <strong>invoice footer</strong> sits at the bottom of each page and holds information that never changes, such as your registered business details. <strong>Invoice terms and conditions</strong> are your standing rules on payment and liability, and they belong primarily in your contract.</p>

<table><thead><tr><th>Area</th><th>Purpose</th><th>Changes per invoice?</th></tr></thead><tbody>
<tr><td>Notes</td><td>Job-specific messages, thank you, references</td><td>Often</td></tr>
<tr><td>Payment terms</td><td>Due date, methods, late fee</td><td>Rarely</td></tr>
<tr><td>Terms and conditions</td><td>Summary of contract rules</td><td>Rarely</td></tr>
<tr><td>Footer</td><td>Legal name, registration and tax numbers, contact</td><td>Never</td></tr>
</tbody></table>

<h2>Thank you note invoice examples</h2>
<ol>
<li>Thank you for your business. It was a pleasure working with you on this project.</li>
<li>Thanks for choosing [Business Name]. We look forward to working with you again.</li>
<li>Thank you for your prompt payment on previous invoices. We appreciate it.</li>
<li>Thanks again for the referral to [Name]. It means a lot to a small business like ours.</li>
<li>Thank you for being a client since [year]. Here is to the next project.</li>
</ol>
<p>Keep the thank you to one line, and put it first or last so it does not interrupt the payment details.</p>

<h2>Payment terms notes</h2>
<ol start="6">
<li>Payment is due within 30 days of the invoice date (by [date]).</li>
<li>Payment is due on receipt.</li>
<li>Payment terms: Net 14. Please include invoice number [INV-0000] as your payment reference.</li>
<li>This invoice covers milestone 2 of 3. The final 30% will be invoiced on delivery.</li>
<li>A 50% deposit of [amount] was received on [date] and has been deducted from the total above.</li>
<li>Take 2% off if paid within 10 days; otherwise the full amount is due in 30 days.</li>
</ol>
<p>Always state an actual date as well as the term. "Net 30" is clear to you, but a calendar date removes any argument about when the clock started. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains each option, and <a href="/blog/early-payment-discount">early payment discount</a> shows how 2/10 Net 30 is calculated.</p>

<h2>How-to-pay notes</h2>
<ol start="12">
<li>Pay by bank transfer to the account below. Use invoice number [INV-0000] as the reference.</li>
<li>Pay online by card using the payment link: [link]. Card payments may carry a processing fee where permitted by law.</li>
<li>We accept ACH, wire and check. Make checks payable to [Legal Business Name].</li>
<li>International clients: please choose "OUR" charges so the full amount arrives, or add [amount] for bank fees.</li>
<li>Please send remittance advice to [email] when you pay so we can match your payment.</li>
</ol>
<p>Payment details are covered in depth in <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> and <a href="/blog/add-payment-link-to-invoice">how to add a payment link to an invoice</a>. Note that this generator does not process payments: it prints the details you enter.</p>

<h2>Late payment notes</h2>
<ol start="17">
<li>Invoices unpaid after the due date incur a late fee of 1.5% per month, as agreed in our contract dated [date].</li>
<li>Overdue balances are subject to a flat late fee of [amount] after 15 days.</li>
<li>UK B2B: we reserve the right to claim interest and compensation under the Late Payment of Commercial Debts (Interest) Act 1998.</li>
<li>Please contact us before the due date if there is any problem with this invoice, so we can resolve it quickly.</li>
</ol>
<p>A late fee is easier to enforce when it was agreed in advance, and some US states cap the rate you can charge. Read <a href="/blog/late-payment-fees">how to charge late payment fees</a> before you add one, and for UK debts see <a href="/blog/statutory-late-payment-interest">statutory late payment interest</a> for the 8% over base rate calculation and the fixed compensation amounts.</p>

<h2>Tax and legal wording notes</h2>
<ol start="21">
<li>Reverse charge: customer to account for VAT to HMRC. (UK domestic reverse charge wording varies by sector; check the specific rule that applies.)</li>
<li>Reverse charge: VAT to be accounted for by the recipient under Article 196 of Council Directive 2006/112/EC.</li>
<li>Zero rated: export of goods outside the UK.</li>
<li>Not registered for VAT. No VAT has been charged.</li>
<li>Sales tax has not been charged on [item]; it is exempt in [state]. Resale certificate on file.</li>
</ol>
<p>Tax notes must match your actual treatment, so use them only when they are true. The <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a> and <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a> give the full wording rules. If you are unsure, ask your accountant or check with your tax authority.</p>

<h2>Project and reference notes</h2>
<ol start="26">
<li>PO number: [PO-0000]. Please quote it on all correspondence.</li>
<li>Work completed under the Statement of Work dated [date].</li>
<li>Hours are detailed in the attached timesheet for [period].</li>
<li>This invoice replaces invoice [INV-0000], which has been cancelled by credit note [CN-0000].</li>
<li>Usage rights for the delivered files transfer on receipt of full payment.</li>
</ol>
<p>A <a href="/blog/po-number-on-invoice">PO number on the invoice</a> is often the single thing that decides whether a larger client pays on time, because their accounts payable team cannot match the invoice without it.</p>

<h2>Invoice terms and conditions examples</h2>
<p>If you summarise your terms on the invoice, keep them to a few short lines that match your contract. Examples you can adapt:</p>
<ul>
<li>All work is supplied under our terms of business at [link] and the agreement dated [date].</li>
<li>Ownership of goods remains with [Business Name] until payment is received in full.</li>
<li>Queries about this invoice must be raised within 7 days of the invoice date.</li>
<li>Cancellations within 48 hours of the booked date are charged at 50% of the fee.</li>
<li>Prices are in USD and exclude bank or card fees, which are the payer's responsibility.</li>
</ul>
<p>These are summaries, not a substitute for a signed agreement. The <a href="/blog/freelance-contract-template">freelance contract template</a> lists the clauses worth agreeing upfront.</p>

<h2>Invoice footer examples</h2>
<p>The footer holds details that are the same on every invoice. Many jurisdictions require some of them on business documents. A typical footer for each type of business:</p>
<ul>
<li><strong>US sole proprietor:</strong> Jane Doe Design LLC · 100 Main St, Austin, TX 78701 · jane@example.com · example.com</li>
<li><strong>UK limited company:</strong> Example Studio Ltd · Registered in England and Wales, company no. 01234567 · Registered office: 1 High Street, Leeds LS1 1AA · VAT reg. no. GB123456789</li>
<li><strong>EU business:</strong> Example GmbH · Musterstraße 1, 10115 Berlin · HRB 123456 · USt-IdNr. DE123456789 · IBAN DE00 0000 0000 0000 0000 00</li>
<li><strong>UAE business:</strong> Example Trading LLC · Dubai, UAE · TRN 100000000000003</li>
</ul>
<p>For the right registration and tax numbers by country, see <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a>.</p>

<h2>Where to put notes on an invoice</h2>
<ul>
<li><strong>Under the line items, above or beside the totals:</strong> job-specific notes, deposit deductions, milestone context.</li>
<li><strong>Next to the totals:</strong> due date and payment terms, because that is where the eye lands.</li>
<li><strong>Payment block:</strong> bank details, payment link, reference instructions.</li>
<li><strong>Footer:</strong> legal and registration details, contact information.</li>
</ul>
<p>Design matters here. Notes in 7-point grey text get missed. Our <a href="/blog/professional-invoice-design-tips">professional invoice design tips</a> cover hierarchy and type size, and the <a href="/invoice-templates/minimal">Minimal template</a> leaves a clean notes area below the totals.</p>

<h2>Worked example: notes on a real invoice</h2>
<p>A freelance copywriter bills $2,400 for a website rewrite: 16 hours at $150. The client paid a $600 deposit. The balance is $2,400 - $600 = $1,800, due Net 15 from an invoice dated 1 November 2026, so the due date is 16 November 2026. The notes area reads:</p>
<blockquote>Thank you for your business. A deposit of $600 was received on 6 October 2026 and has been deducted. The balance of $1,800 is due by 16 November 2026. Please pay by ACH to the account below and use INV-2026-031 as the reference. Late balances incur a 1.5% monthly fee as agreed in our contract of 2 October 2026.</blockquote>
<p>That is 59 words and it answers every question a client's accounts team would ask: what was paid, what is owed, when, how, and what happens if it is late.</p>

<h2>Common mistakes with invoice notes</h2>
<ul>
<li><strong>Introducing new terms on the invoice.</strong> A late fee or ownership clause the client never agreed to is hard to enforce.</li>
<li><strong>Contradicting the contract</strong>, such as Net 30 in the contract and Net 15 in the notes.</li>
<li><strong>Wrong tax wording</strong>, such as a reverse charge note on a domestic sale.</li>
<li><strong>Too much text.</strong> Long paragraphs bury the due date.</li>
<li><strong>Stale notes</strong> copied from the last client, with the wrong name or project.</li>
<li><strong>Aggressive tone</strong> on a first invoice. Save firmer language for <a href="/blog/payment-reminder-emails">payment reminder emails</a>.</li>
</ul>

<h2>Invoice notes checklist</h2>
<ul>
<li>One-line thank you</li>
<li>Due date as a calendar date plus the term</li>
<li>How to pay and the reference to use</li>
<li>Deposit or prior payments, if any</li>
<li>Late fee policy that matches your contract</li>
<li>Tax wording only where it applies</li>
<li>PO or project reference</li>
<li>Footer with legal name, registration and tax numbers</li>
</ul>

<h2>Next step</h2>
<p>Pick three or four notes from this list, edit them for your business, and save them as your standard wording. Open the <a href="/invoice-generator">invoice generator</a>, paste them into the Notes field, and download a PDF. When you send it, a clear <a href="/blog/invoice-email-subject-lines">invoice email subject line</a> helps the invoice get opened and paid.</p>
`,
  },
  {
    slug: "personal-trainer-invoice-template",
    title: "Personal Trainer Invoice Template: Sessions and Packages",
    description:
      "A personal trainer invoice template guide: bill single sessions, packages and memberships, track sessions used, handle no-shows and tax, with an example.",
    category: "industry-invoices",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: [
      "gym-membership-invoice-template",
      "massage-therapy-invoice-template",
      "recurring-invoices-guide",
      "deposit-invoice",
      "salon-invoice-template",
    ],
    faqs: [
      {
        q: "Should personal trainers charge per session or by package?",
        a: "Many trainers do both: a single-session rate for trial or occasional clients and discounted packages of 5, 10 or 20 sessions paid upfront. Packages improve cash flow and commitment, while single sessions keep the door open for new clients. Monthly memberships or recurring billing suit clients who train on a fixed weekly schedule.",
      },
      {
        q: "How do I invoice a client for a missed session?",
        a: "Only charge for no-shows if your written policy says so, for example a late cancellation within 24 hours is charged in full. Bill it as a separate line, such as Late cancellation, Tuesday 14 October, with the agreed fee, or deduct one session from their package and show that on the session log. Keep the policy on every invoice.",
      },
      {
        q: "Do personal trainers charge sales tax?",
        a: "It depends on where you work. Most US states do not tax personal training services, but a few tax fitness or gym services in some form, and local rules differ. In the UK, you only charge VAT once registered, which is compulsory above the VAT registration threshold. Check with your state revenue department or HMRC.",
      },
      {
        q: "Can trainers deduct tips under the no tax on tips rule?",
        a: "Reporting on the 2025 US law lists fitness occupations such as personal trainers among the jobs where qualified tips can be deducted, for tax years 2025 to 2028, subject to income limits. Only voluntary tips qualify, not mandatory charges. Confirm your occupation is on the IRS list and read our no tax on tips guide before relying on it.",
      },
      {
        q: "What happens to unused sessions in a package?",
        a: "That is up to your terms, within consumer law. Many trainers set an expiry date, such as 10 sessions to be used within 3 months, and some allow pauses for illness. Some places restrict expiry on prepaid services or require refunds in certain cases, so check local consumer rules and state the policy clearly before the client pays.",
      },
      {
        q: "Do I need to give a receipt when a client pays in cash?",
        a: "It is good practice, even where the law does not require it. A receipt with the date, amount, what it covers and sessions remaining protects both of you if there is a dispute later. It also gives you a record of cash income for your taxes, which is easy to lose track of. Number your receipts or link each one to its invoice.",
      },
      {
        q: "When should I send an invoice for personal training?",
        a: "Send package and membership invoices before the first session or period, so payment arrives in advance. For pay-as-you-go clients, many trainers ask for payment before or at each session, or invoice weekly. Corporate and wellness program clients usually expect an invoice after the class block with Net 30 terms. Whatever you choose, put the timing in your written terms.",
      },
      {
        q: "Can I raise my prices for clients partway through a package?",
        a: "Not for sessions already paid for. A prepaid package should be honored at the price the client paid until it is used or expires under your terms. You can apply a new rate to the next package or membership period, but give clients reasonable notice in writing, such as 30 days, so the change does not come as a surprise on their next invoice.",
      },
      {
        q: "Can clients pay for personal training with an HSA or FSA?",
        a: "Usually not. Under IRS rules, general fitness costs such as gym memberships and personal training are not medical expenses. An exception can apply when training treats a specific diagnosed condition, often supported by a letter of medical necessity from a doctor. The client's plan administrator decides, so tell clients to check with them and show the dates and services clearly on your invoice.",
      },
      {
        q: "What business expenses can a self-employed personal trainer deduct?",
        a: "In the US, common deductible costs include certifications and continuing education, liability insurance, equipment, gym or studio rental fees, booking and payment app fees, marketing, and business mileage between client locations. Expenses must be ordinary and necessary for your business and supported by receipts. Rules differ in other countries, so check with your tax authority or an accountant before claiming.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A personal trainer invoice template should show your business and client details, the service type (single session, package or membership), the session dates or package size, the rate, any discount, sessions used and remaining, your cancellation policy, payment terms and how to pay. Bill packages upfront and attach a session log so clients can see what they used.</p>

<p>Personal trainers often get paid by bank app, cash or card at the gym, with nothing written down. That works until a client disputes how many sessions are left, or you need records for your taxes. A simple, consistent invoice fixes both. This guide covers what to include, how to bill sessions, packages and memberships, how to handle no-shows and tax, and a worked example. You can create your invoice in the <a href="/invoice-generator?template=bold">free invoice generator with the Bold template</a>, or the <a href="/invoice-templates/modern">Modern template</a> if you prefer a lighter look.</p>

<h2>What should a personal trainer invoice template include?</h2>
<ul>
<li><strong>Your details:</strong> name or business name, phone, email, and certification if you list it in your marketing.</li>
<li><strong>Client details:</strong> name and email. Add the company name if an employer or wellness program is paying.</li>
<li><strong>Invoice number and date</strong>, from a simple sequence (see the <a href="/tools/invoice-number-generator">invoice number generator</a>).</li>
<li><strong>Service description:</strong> "1:1 personal training, 60 min" or "10-session package".</li>
<li><strong>Dates</strong> of the sessions, or the period covered for memberships.</li>
<li><strong>Quantity, rate and amount</strong> for each line.</li>
<li><strong>Discounts</strong>, shown as a separate line so the full rate stays visible.</li>
<li><strong>Sessions used and remaining</strong> on package invoices.</li>
<li><strong>Location or venue fee</strong>, if the client pays for gym access or travel.</li>
<li><strong>Cancellation policy, payment terms and how to pay.</strong></li>
</ul>

<h2>Session pricing: how trainers structure fitness invoices</h2>
<table><thead><tr><th>Model</th><th>How it is billed</th><th>Best for</th></tr></thead><tbody>
<tr><td>Single session</td><td>Per session, after or before each one</td><td>Trial clients, occasional bookings</td></tr>
<tr><td>Session package</td><td>Upfront for 5, 10 or 20 sessions at a lower per-session rate</td><td>Committed clients, better cash flow</td></tr>
<tr><td>Monthly membership</td><td>Fixed monthly fee for a set number of sessions or unlimited coaching</td><td>Clients on a regular schedule</td></tr>
<tr><td>Small group or semi-private</td><td>Per person per session, or a package per person</td><td>Couples, friends, small classes</td></tr>
<tr><td>Online coaching</td><td>Monthly fee for programming and check-ins</td><td>Remote clients</td></tr>
<tr><td>Corporate or bootcamp</td><td>Per class or per term, invoiced to the company</td><td>Workplace wellness</td></tr>
</tbody></table>
<p>Rates vary widely by city, experience, specialism and whether you rent space or train at a client's home. Rather than copy a number from the internet, work out what you need to earn and how many sessions you can realistically deliver each week. The method in <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> works well for trainers. Packages commonly carry a modest per-session discount compared with the single rate, and that discount should be visible on the invoice.</p>

<h2>How to bill training packages</h2>
<p>Packages are the most common source of disputes, because the money is paid upfront and the service is delivered over weeks. Treat a package like a <a href="/blog/deposit-invoice">deposit invoice</a> for future work:</p>
<ol>
<li><strong>Invoice the package upfront</strong> with the number of sessions, the per-session rate, the discount and the expiry date.</li>
<li><strong>Record each session</strong> in a simple log: date, duration, what was covered.</li>
<li><strong>Send a statement or updated session log</strong> each month, showing sessions used and remaining.</li>
<li><strong>Invoice the next package</strong> when two or three sessions remain, so there is no gap.</li>
</ol>
<p>A <a href="/blog/statement-of-account">statement of account</a> works well for clients who buy several packages a year, and a <a href="/blog/payment-receipt-template">payment receipt</a> confirms the money arrived.</p>

<h2>Worked example: a 10-session package invoice</h2>
<p>A trainer charges $80 for a single 60-minute session and offers 10 sessions for $720, which is $72 per session, a 10% discount. The client also adds a nutrition plan for $60. The invoice reads:</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>1:1 personal training, 60 min (single rate)</td><td>10</td><td>$80.00</td><td>$800.00</td></tr>
<tr><td>Package discount, 10 sessions (10%)</td><td>1</td><td>-$80.00</td><td>-$80.00</td></tr>
<tr><td>Nutrition plan, 4 weeks</td><td>1</td><td>$60.00</td><td>$60.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$780.00</strong></td></tr>
</tbody></table>
<p>Check the maths: 10 x $80 = $800; 10% of $800 = $80; $800 - $80 + $60 = $780. The notes say: "10 sessions to be used by 31 January 2027. Sessions cancelled with less than 24 hours' notice count as used. Payment due before the first session."</p>
<p>Six weeks later the session log shows 7 of 10 used, which is 3 remaining. At $72 per session, the unused value is 3 x $72 = $216. That figure matters if your terms allow a refund or transfer when a client moves away.</p>

<h2>How to track sessions used on a package</h2>
<p>Attach a short session log to each package invoice or monthly statement. It takes a minute to update and ends most "I thought I had more sessions" conversations.</p>
<table><thead><tr><th>#</th><th>Date</th><th>Session</th><th>Remaining</th></tr></thead><tbody>
<tr><td>1</td><td>3 Nov 2026</td><td>Strength assessment, 60 min</td><td>9</td></tr>
<tr><td>2</td><td>6 Nov 2026</td><td>Lower body, 60 min</td><td>8</td></tr>
<tr><td>3</td><td>10 Nov 2026</td><td>Late cancellation (under 24 hours), counted per policy</td><td>7</td></tr>
<tr><td>4</td><td>13 Nov 2026</td><td>Upper body and conditioning, 60 min</td><td>6</td></tr>
</tbody></table>
<p>Record late cancellations in the log as well, with the reason, so the count is transparent. If you use a booking app, export its history instead of keeping two records.</p>

<h2>Invoicing small group and semi-private training</h2>
<p>Semi-private sessions are usually priced per person at a lower rate than one-to-one training. Decide upfront whether one person pays for the group or each person is invoiced separately. Separate invoices are cleaner, because each client then has their own record and package balance.</p>
<p>Example: three friends train together twice a week at $35 per person per session. A four-week block is 8 sessions, so each person's invoice is 8 x $35 = $280, and the trainer bills 3 x $280 = $840 for the block. If one person misses a session, the policy decides whether it is charged; the other two invoices are unaffected. For bootcamps or classes invoiced to an employer, list the class dates and the headcount instead.</p>

<h2>Recurring billing for memberships and online coaching</h2>
<p>For a fixed monthly fee, send the invoice on the same date each month with the period covered, such as "Coaching, 1-30 November 2026". Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> covers scheduling and wording. This generator does not send invoices automatically, so if you have many monthly clients you may want a payment platform with subscriptions, and use invoices for clients who prefer bank transfer.</p>

<h2>No-shows, late cancellations and refunds</h2>
<ul>
<li><strong>Write the policy down before the first session</strong>: for example, 24 hours' notice to reschedule, otherwise the session is charged or deducted.</li>
<li><strong>Repeat it on every invoice</strong> in the notes.</li>
<li><strong>Show charged no-shows on their own line</strong>: "Late cancellation, Tue 14 Oct (policy: under 24 hours)".</li>
<li><strong>Decide on illness and injury</strong> exceptions in advance, and apply them consistently.</li>
<li><strong>State package expiry and refund rules</strong>, and check local consumer protection law, which in some places limits expiry on prepaid services.</li>
</ul>

<h2>Taxes for personal trainers</h2>
<h3>Sales tax and VAT</h3>
<p>In most US states personal training is not subject to sales tax, but a few states tax fitness or health club services in some form, so check with your state revenue department. Products you sell, such as supplements or equipment, are more likely to be taxable. If you need to add tax, the <a href="/tools/sales-tax-calculator">sales tax calculator</a> works out the line. In the UK, you only charge VAT once you are VAT-registered; see <a href="https://www.gov.uk/vat-registration" target="_blank" rel="noopener noreferrer">GOV.UK VAT registration</a> for the current threshold.</p>
<h3>Income tax and tips</h3>
<p>Self-employed trainers in the US report income on Schedule C and usually pay quarterly estimated tax. Clients who pay through an app may generate a Form 1099-K for you if you cross the reporting threshold, but all income is taxable whether or not a form is issued. Tips from clients may qualify for the federal deduction for qualified tips if your occupation is on the IRS list; see <a href="/blog/no-tax-on-tips-self-employed">no tax on tips for the self-employed</a>. Keep invoices and receipts as your records. The <a href="https://www.irs.gov/businesses/small-businesses-self-employed" target="_blank" rel="noopener noreferrer">IRS self-employed hub</a> covers the basics.</p>

<h2>Corporate and wellness program invoices</h2>
<p>When an employer or a wellness program pays, invoice the company, not the individual. Ask for a PO number or cost center, list the participants or class dates, and expect longer terms such as Net 30. Corporate clients often need a W-9 from you before they pay (see <a href="/blog/w9-and-1099-for-contractors">W-9 vs 1099</a>).</p>

<h2>Common personal trainer invoice mistakes</h2>
<ul>
<li>No session log, so the client disputes how many sessions are left.</li>
<li>Package discount hidden in a lower rate, which makes later price increases look bigger.</li>
<li>No written cancellation policy, then charging a no-show anyway.</li>
<li>Mixing products and services in one line, which complicates tax.</li>
<li>No invoice at all for cash payments, leaving gaps in your income records.</li>
</ul>

<h2>Personal trainer invoice checklist</h2>
<ul>
<li>Your name, contact details and invoice number</li>
<li>Client name, and company for corporate work</li>
<li>Service type, duration and dates</li>
<li>Rate, quantity, discount line and total</li>
<li>Sessions used and remaining, with expiry date</li>
<li>Cancellation and refund policy</li>
<li>Payment terms and methods</li>
</ul>

<h2>Next step</h2>
<p>Open the <a href="/invoice-generator?template=bold">invoice generator</a>, add your package as a line at the single rate, add the discount as a second line, and paste your cancellation policy into the notes. Download the PDF and send it before the first session. Drafts save in your browser, so you can reuse the same layout for your next client.</p>
`,
  },
  {
    slug: "videographer-invoice-template",
    title: "Videographer Invoice Template: Shoot Days and Licensing",
    description:
      "A videographer invoice template guide: bill shoot days, crew, editing, licensing fees, music, travel and revisions, with a worked video production example.",
    category: "industry-invoices",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: [
      "photography-pricing-guide",
      "photography-invoice-template",
      "kill-fee",
      "scope-creep-change-order",
    ],
    faqs: [
      {
        q: "Do videographers charge by the hour or by the day?",
        a: "Production is usually billed by the day or half day, because a shoot blocks your calendar and equipment regardless of hours filmed. Editing is billed per hour, per finished minute or as a flat package. Weddings and events are often sold as packages. Whatever you sell, break the invoice into shoot, crew, equipment, editing and licensing so the client can see the cost of each.",
      },
      {
        q: "Should raw footage be included in the price?",
        a: "Many videographers do not include raw footage by default, because it shows unedited work and can be reused without licensing. If a client wants it, quote it as a separate line with a delivery method and any usage limits. Make clear in your contract whether raw files are delivered, archived or deleted after a set period.",
      },
      {
        q: "Who pays for music licensing on a client video?",
        a: "Usually the client, either directly or through you. If you license a track for the project, bill the licence as a line item at cost or with a stated handling fee, and name the track, the library and the licence type. Make sure the licence covers the client's intended use, such as paid social ads or broadcast.",
      },
      {
        q: "Can I charge for extra revisions?",
        a: "Yes, if your contract limits the number of revision rounds. A common approach is two rounds included, then extra rounds billed hourly or at a set fee. When a client asks for changes beyond scope, send a short change order with the extra cost before doing the work, then invoice it as a separate line.",
      },
      {
        q: "Should videographers charge sales tax?",
        a: "It depends on the state and on what you deliver. Some US states tax video production or the transfer of finished video, others exempt services, and some distinguish between digital delivery and physical media. Equipment rental passed through to clients can also be taxable. Check with your state revenue department and use a sales tax calculator if tax applies.",
      },
      {
        q: "How much deposit should a videographer ask for?",
        a: "Many videographers ask for 25% to 50% of the quoted price to book the date, with the balance due on delivery or before the event. A larger deposit makes sense when you must hire crew or equipment early. State in the contract whether the deposit is refundable, and check local consumer law, which can limit non-refundable deposits for consumer clients.",
      },
      {
        q: "Should I charge for travel days?",
        a: "Yes, if travel stops you taking other work. Many videographers charge a reduced day rate or half-day rate for travel days, plus mileage, flights, accommodation and per diems at cost. List each as a separate line and attach receipts for larger items. Agree the travel policy in the quote so the client is not surprised by a travel day on the final invoice.",
      },
      {
        q: "Should I deliver final files before the client pays?",
        a: "Many videographers share watermarked or low-resolution previews for approval and release the final high-resolution files once the balance is paid. If you do deliver first, make the usage licence conditional on full payment, and say so on the invoice. That gives you leverage and a clear position if the client uses the video without paying.",
      },
      {
        q: "Can I use a client's video in my portfolio?",
        a: "Only if your contract allows it. Many videographers include a clause permitting portfolio and showreel use, often after the client has published the video. Some corporate and advertising clients ask for confidentiality or exclusivity, which may cost extra or rule out portfolio use. Agree it in writing before the shoot and mention any restriction in the licence summary on the invoice.",
      },
      {
        q: "How do I invoice for drone footage?",
        a: "Show drone work as its own line, priced per day, per flight or per deliverable, separately from the main camera package. In the US, commercial drone flights generally require an FAA Part 107 remote pilot certificate, and other countries have their own aviation rules and permissions. Add any permit or location fees as separate lines, and note who holds the required licence.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A videographer invoice template should break the job into pre-production, shoot days (full or half), crew, equipment, editing (hours or per finished minute), music and stock licences, usage or licensing fees for the final video, travel, and revisions. Show the deposit paid, the balance due, the deliverables and who owns or may use the footage.</p>

<p>Video jobs mix labor, gear, post-production and intellectual property, so a single "Video: $4,500" line invites questions. A clear, itemized invoice shows the client what they are paying for and protects you when they want more edits, more formats or wider usage. This guide covers the fields to include, how to price shoot days, editing and licensing, a worked example, and common mistakes. You can build it in the <a href="/invoice-generator?template=dark">free invoice generator with the Dark template</a>, which suits creative work, or the <a href="/invoice-templates/creative">Creative template</a>.</p>

<h2>What should a videographer invoice template include?</h2>
<ul>
<li><strong>Your business details</strong> and the client's, including a contact in accounts payable for corporate clients.</li>
<li><strong>Invoice number, date, due date</strong> and the client's PO number if they gave one.</li>
<li><strong>Project name and shoot dates</strong>, plus location.</li>
<li><strong>Line items</strong> grouped by pre-production, production, post-production, licensing and expenses.</li>
<li><strong>Deliverables</strong>: number of videos, lengths, aspect ratios (16:9, 9:16, 1:1), resolution and file format.</li>
<li><strong>Usage and licensing terms</strong>: where, how long and in which territories the client may use the video.</li>
<li><strong>Deposit received and balance due.</strong></li>
<li><strong>Revision policy</strong> and how extra rounds are billed.</li>
<li><strong>Payment terms and methods.</strong></li>
</ul>
<p>Many of these points overlap with photography, so the <a href="/blog/photography-invoice-template">photography invoice template guide</a> is a useful companion, especially for usage rights.</p>

<h2>How to price video production on an invoice</h2>
<table><thead><tr><th>Item</th><th>Usual unit</th><th>Notes</th></tr></thead><tbody>
<tr><td>Pre-production (concept, script, shot list, location scouting)</td><td>Flat or hourly</td><td>Often underbilled; list it so the client sees the work</td></tr>
<tr><td>Shoot day</td><td>Full day (often 8 to 10 hours) or half day</td><td>State the hours included and the overtime rate</td></tr>
<tr><td>Crew (second shooter, audio, gaffer, assistant)</td><td>Per person per day</td><td>Pass through at cost or with a markup you disclose</td></tr>
<tr><td>Equipment (camera package, lighting, drone, gimbal)</td><td>Per day</td><td>Even if you own it, it has a rental value</td></tr>
<tr><td>Editing</td><td>Per hour, per finished minute, or per video</td><td>Say how many revision rounds are included</td></tr>
<tr><td>Color grading, motion graphics, captions</td><td>Per hour or per video</td><td>Separate from the basic edit</td></tr>
<tr><td>Music and stock licences</td><td>Per licence</td><td>Name the track and licence type</td></tr>
<tr><td>Usage or licensing fee</td><td>Per use, term or territory</td><td>For commercial and advertising use</td></tr>
<tr><td>Travel, accommodation, permits, location fees</td><td>At cost or per mile</td><td>Attach receipts for large items</td></tr>
<tr><td>Rush fee</td><td>Percentage or flat</td><td>For faster-than-standard turnaround</td></tr>
</tbody></table>
<p>Day rates and editing rates vary widely with market, experience, crew size and client type. Corporate and advertising work is commonly priced higher than event or wedding work, and agencies often expect a separate usage fee. Work out your own base rate from your costs and target income using <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a>, rather than copying a figure.</p>

<h2>Editing rates: hourly, per finished minute or flat</h2>
<p>Editing is where scope grows quietly. Three common models:</p>
<ul>
<li><strong>Hourly:</strong> fair for both sides, but the client cannot predict the total. Attach a time log, as in <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a>.</li>
<li><strong>Per finished minute:</strong> easy to quote for simple edits, risky for complex ones with heavy graphics.</li>
<li><strong>Flat per deliverable:</strong> "One 90-second brand film plus three 15-second cutdowns, two revision rounds." Predictable, and easiest to defend when you bill extras.</li>
</ul>

<h2>Licensing fees and usage rights</h2>
<p>For commercial work, the price of making the video and the price of using it can be separate. Licensing fees reflect how widely and how long the client uses the finished work:</p>
<ul>
<li><strong>Media:</strong> organic social, paid social ads, website, TV or broadcast, cinema, out-of-home screens.</li>
<li><strong>Term:</strong> 1 year, 2 years or perpetual.</li>
<li><strong>Territory:</strong> one country, a region or worldwide.</li>
<li><strong>Exclusivity:</strong> whether you may show it in your portfolio or license similar work elsewhere.</li>
</ul>
<p>Put the grant in your contract and summarise it on the invoice: "Licence: paid and organic social, North America, 12 months from delivery, non-exclusive. Licence is effective on receipt of full payment." The <a href="/blog/freelance-contract-template">freelance contract template</a> covers IP and usage clauses. If the client is a brand hiring creator-style content, our <a href="/blog/ugc-creator-invoice">UGC invoice template</a> explains usage and whitelisting fees.</p>

<h2>Worked example: a corporate video invoice</h2>
<p>A videographer produces a brand film for a software company: one 2-minute video plus three 30-second social cutdowns. The client paid a 50% deposit when booking. The rates below are illustrative.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Pre-production: concept, script, shot list</td><td>1</td><td>$600.00</td><td>$600.00</td></tr>
<tr><td>Shoot day, 10 hours, Austin office</td><td>1 day</td><td>$1,400.00</td><td>$1,400.00</td></tr>
<tr><td>Audio technician</td><td>1 day</td><td>$450.00</td><td>$450.00</td></tr>
<tr><td>Camera, lighting and audio package</td><td>1 day</td><td>$350.00</td><td>$350.00</td></tr>
<tr><td>Editing and color grade, 2-min film (2 revision rounds)</td><td>1</td><td>$1,200.00</td><td>$1,200.00</td></tr>
<tr><td>Social cutdowns, 30 sec, 9:16</td><td>3</td><td>$150.00</td><td>$450.00</td></tr>
<tr><td>Music licence: "Track name", standard web licence</td><td>1</td><td>$80.00</td><td>$80.00</td></tr>
<tr><td>Usage licence: paid social and web, US, 12 months</td><td>1</td><td>$500.00</td><td>$500.00</td></tr>
<tr><td>Change order CO-1: third revision round</td><td>2 hrs</td><td>$95.00</td><td>$190.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$5,220.00</strong></td></tr>
<tr><td colspan="3">Less deposit received 3 October 2026</td><td>-$2,515.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$2,705.00</strong></td></tr>
</tbody></table>
<p>Check the maths: $600 + $1,400 + $450 + $350 + $1,200 + $450 + $80 + $500 = $5,030 originally quoted, and the deposit was 50% of that, $2,515. The change order adds $190, so the total is $5,030 + $190 = $5,220, and the balance is $5,220 - $2,515 = $2,705.</p>

<h2>Deposits, milestones and kill fees</h2>
<p>Video work commits your calendar and often your crew, so most videographers take a deposit to book the date and bill the balance on delivery. Larger productions use <a href="/blog/milestone-payments">milestone payments</a>: for example, deposit, after the shoot, and on final delivery. See <a href="/blog/deposit-invoice">how to write a deposit invoice</a> for the booking invoice. If the client cancels after pre-production or the shoot, a <a href="/blog/kill-fee">kill fee</a> clause decides what you are owed, and you invoice it as a separate document referencing the contract.</p>

<h2>Revisions and scope creep</h2>
<p>Extra revision rounds, new cutdowns and "one more version for LinkedIn" add up. Agree the number of rounds in writing. When a request falls outside it, send a short change order with the price and get approval before starting. Our guide to <a href="/blog/scope-creep-change-order">scope creep and change orders</a> includes wording. On the invoice, show each change order as its own numbered line, as in the example.</p>

<h2>Wedding and event videography invoices</h2>
<p>Wedding and event clients are consumers rather than businesses, so invoices tend to be package-based and spread over several months. A typical pattern:</p>
<ol>
<li><strong>Booking retainer</strong> to hold the date, invoiced when the contract is signed.</li>
<li><strong>Interim payment</strong> a set number of weeks before the event.</li>
<li><strong>Final balance</strong> before or on the event day, or on delivery of the film, depending on your terms.</li>
</ol>
<p>Example: a package priced at $3,600 with a $900 retainer and the balance split into two payments. After the retainer, $3,600 - $900 = $2,700 remains, so each of the two later invoices is $1,350. Each invoice should show the package total, all payments received so far and the remaining balance. Add-ons such as a second shooter, a drone, a highlight reel or same-day edit go on their own lines. Our guide to <a href="/blog/partial-payment-invoice">partial payment invoices</a> shows how to present the running balance.</p>

<h2>Raw footage, archiving and file delivery</h2>
<p>Decide in your contract what happens to files after the project. Common choices: final edits only, raw footage for an extra fee, and archiving for a set period (for example, 12 months) after which files may be deleted. If you offer extended archiving or re-exports in new formats later, price those as separate services. On the invoice, list the delivery method (download link, drive) and the archive period so there is no confusion a year later when the client asks for a new version.</p>

<h2>Sales tax on video production</h2>
<p>Sales tax treatment of video production varies a lot by US state. Some states tax the sale of finished video or production services, some tax only physical media, and others exempt services entirely. Equipment rentals passed through to the client may also be taxable. Check with your state revenue department, and use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> if you need to add tax. The guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices</a> shows how to display it. In the UK and EU, VAT applies once you are registered.</p>

<h2>Common videographer invoice mistakes</h2>
<ul>
<li>One lump-sum line, which makes every extra look like a surprise.</li>
<li>No usage terms, so the client assumes unlimited, worldwide, perpetual rights.</li>
<li>Delivering final files before payment without a licence condition.</li>
<li>Forgetting overtime when the shoot runs long.</li>
<li>Not billing music, stock or permit costs that you paid.</li>
<li>Revision rounds not capped in the contract.</li>
</ul>

<h2>Videographer invoice checklist</h2>
<ul>
<li>Project name, shoot dates and location</li>
<li>Pre-production, shoot, crew and equipment lines</li>
<li>Editing and post-production with revision rounds stated</li>
<li>Music, stock and other licences named</li>
<li>Usage licence: media, term, territory</li>
<li>Travel and expenses</li>
<li>Change orders as separate lines</li>
<li>Deposit received, balance due, due date and how to pay</li>
</ul>

<h2>Next step</h2>
<p>Open the <a href="/invoice-generator?template=dark">invoice generator</a>, group your lines into production, post-production and licensing, subtract the deposit, and add your usage terms to the notes. Download the PDF and send it with the final delivery link. Drafts save in your browser, so you can add a change order line later without starting again.</p>
`,
  },
];
