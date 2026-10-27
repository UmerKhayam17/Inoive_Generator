import { INDUSTRY_POSTS_A } from "./posts/industry-a";
import { INDUSTRY_POSTS_B } from "./posts/industry-b";
import { HOW_TO_POSTS_A } from "./posts/how-to-a";
import { HOW_TO_POSTS_B } from "./posts/how-to-b";
import { FREELANCING_POSTS } from "./posts/freelancing";
import { PAYMENTS_POSTS } from "./posts/payments";
import { TAX_POSTS } from "./posts/tax";
import { COMPARISON_FINANCE_POSTS } from "./posts/comparisons-finance";
import { EINVOICING_POSTS } from "./posts/e-invoicing";
import { FORMAT_TEMPLATE_POSTS } from "./posts/formats-templates";
import { PLATFORM_SOFTWARE_POSTS } from "./posts/platforms-software";
import { INDUSTRY_POSTS_C } from "./posts/industry-c";
import { FINANCE_ADVANCED_POSTS } from "./posts/finance-advanced";
import { TAX_US_UK_2026_POSTS } from "./posts/tax-us-uk-2026";
import { TAX_ASIA_2026_POSTS } from "./posts/tax-asia-2026";
import { EINVOICING_2027_POSTS } from "./posts/e-invoicing-2027";
import { PAYMENTS_2026_POSTS } from "./posts/payments-2026";
import { FREELANCING_2026_POSTS } from "./posts/freelancing-2026";
import { FINANCE_2026_POSTS } from "./posts/finance-2026";
import { BASICS_2026_POSTS } from "./posts/basics-2026";
import { GUIDES_2026_POSTS } from "./posts/guides-2026";
import { DESIGN_INDUSTRY_2026_POSTS } from "./posts/design-industry-2026";
import { AP_AUTOMATION_2026_POSTS } from "./posts/ap-automation-2026";
import { FINANCE_TRENDS_2027_POSTS } from "./posts/finance-trends-2027";
import { TAX_COMPLIANCE_2026_POSTS } from "./posts/tax-compliance-2026";
import { INDUSTRY_POSTS_D } from "./posts/industry-d";
import { FINANCE_METRICS_2026_POSTS } from "./posts/finance-metrics-2026";
import { RECEIVABLES_2026_POSTS } from "./posts/receivables-2026";
import { PROCUREMENT_TRADE_2026_POSTS } from "./posts/procurement-trade-2026";
import { INDUSTRY_POSTS_E } from "./posts/industry-e";
import { FREELANCE_CREATIVE_2026_POSTS } from "./posts/freelance-creative-2026";
import { TAX_COUNTRIES_2026_POSTS } from "./posts/tax-countries-2026";
import { TEMPLATES_2026_POSTS } from "./posts/templates-2026";
import { BASICS_COMPARISONS_2026_POSTS } from "./posts/basics-comparisons-2026";
import { SMALL_BUSINESS_FINANCE_2026_POSTS } from "./posts/small-business-finance-2026";
import { PAYMENTS_GUIDES_2026_POSTS } from "./posts/payments-guides-2026";
import { TAX_US_UK_2026_B_POSTS } from "./posts/tax-us-uk-2026-b";
import { TAX_ASIA_ME_2026_POSTS } from "./posts/tax-asia-me-2026";
import { FREELANCING_GROWTH_2026_POSTS } from "./posts/freelancing-growth-2026";
import { INDUSTRY_POSTS_F } from "./posts/industry-f";
import { TEMPLATES_BASICS_2026_B_POSTS } from "./posts/templates-basics-2026-b";
import { COMPARISONS_2026_B_POSTS } from "./posts/comparisons-2026-b";
import { COMPARISONS_2026_C_POSTS } from "./posts/comparisons-2026-c";
import { ACCOUNTING_BASICS_2026_POSTS } from "./posts/accounting-basics-2026";
import { BUSINESS_GROWTH_2026_POSTS } from "./posts/business-growth-2026";
import { TAX_FILING_2026_POSTS } from "./posts/tax-filing-2026";
import { TAX_PK_IN_2026_POSTS } from "./posts/tax-pk-in-2026";
import { PAYMENTS_FREELANCE_2026_B_POSTS } from "./posts/payments-freelance-2026-b";
import { INDUSTRY_POSTS_G } from "./posts/industry-g";

export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  /** ISO date of last editorial update; when omitted, `date` is used. */
  updated?: string;
  readingTime: number;
  author: string;
  /** Shown on tax/compliance articles (e.g. "Pakistan", "General"). */
  jurisdiction?: string;
  content: string; // simple HTML
  /** Rendered as an FAQ accordion after the article and emitted as FAQPage JSON-LD. */
  faqs?: { q: string; a: string }[];
  /** Hand-picked related post slugs, shown before same-category fallbacks. */
  related?: string[];
}

export const CATEGORIES = [
  {
    slug: "invoicing-basics",
    name: "Invoicing Basics",
    description:
      "Foundational articles on what belongs on an invoice, how numbering works, payment terms, and the habits that keep freelancers and small businesses paid on time.",
  },
  {
    slug: "comparisons",
    name: "Comparisons",
    description:
      "Side-by-side explainers that help you choose between invoice types, document formats and common billing approaches, without sales fluff.",
  },
  {
    slug: "guides",
    name: "Guides",
    description:
      "Practical how-tos for creating invoices, chasing payment, issuing credit notes and building a repeatable billing workflow.",
  },
  {
    slug: "tax-compliance",
    name: "Tax & Compliance",
    description:
      "Jurisdiction-aware overviews of tax IDs, sales tax and VAT fields on invoices. General information only, not tax advice; always verify with a local professional.",
  },
  {
    slug: "design-templates",
    name: "Design & Templates",
    description:
      "Advice on invoice layout, branding and choosing a template that accounts payable can read quickly.",
  },
  {
    slug: "industry-invoices",
    name: "Industry Invoices",
    description:
      "Invoice templates and billing guides for specific trades and professions: contractors, photographers, cleaners, consultants, landlords and more.",
  },
  {
    slug: "freelancing",
    name: "Freelancing",
    description:
      "Rates, contracts, retainers and unpaid-invoice playbooks for freelancers and independent contractors.",
  },
  {
    slug: "payments",
    name: "Payments",
    description:
      "How to get paid: card payments, payment links, bank transfers, international transfers, discounts and reminders.",
  },
  {
    slug: "business-finance",
    name: "Business Finance",
    description:
      "Cash flow, bookkeeping, receivables and tax basics for small business owners who do their own finances.",
  },
];

/** Approximate reading time from HTML (~200 wpm for instructional articles). */
export function estimateReadingTime(html: string): number {
  const words = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export type PostDraft = Omit<Post, "readingTime">;

const CORE_POSTS: PostDraft[] = [
  {
    slug: "how-to-generate-an-invoice",
    title: "How to Generate an Invoice Online: Free Step-by-Step Guide",
    description:
      "Learn how to generate an invoice online for free: compare invoice generators, Word, Excel and accounting software, then create a PDF invoice in minutes.",
    category: "guides",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "How long does it take to generate an invoice online?",
        a: "Most people generate a simple invoice in about five minutes once their business details are saved. Your first invoice takes a little longer because you enter your name, address, tax ID and logo from scratch. After that, the main work is adding the client, the line items and the due date, then checking the preview before you download the PDF.",
      },
      {
        q: "Is it safe to enter my business details into an online invoice generator?",
        a: "It depends on the tool, so check where it stores your data. Our generator builds the PDF in your browser and saves your draft in your browser's local storage on that device, with no account required. That also means clearing your browser data or switching devices removes the draft, so keep a copy of every PDF you send in your own files.",
      },
      {
        q: "Can I generate an invoice in a currency other than my own?",
        a: "Yes. Choose the currency before you add line items so every amount, tax line and total uses the same one. Show the three-letter code, such as USD, EUR or GBP, because symbols like $ are shared by several currencies. Agree the currency with your client first, and record the exchange rate you used if your accounts are kept in your home currency.",
      },
      {
        q: "What should I do if I find a mistake after sending an invoice?",
        a: "Don't edit the PDF and resend it under the same number. If the error is minor and the client hasn't processed it, ask whether they can disregard it, then issue a corrected invoice with a new number. If it has already been recorded, issue a credit note that cancels the original and send a new, correct invoice. This keeps a clean audit trail for both sides.",
      },
      {
        q: "Can I generate recurring invoices automatically?",
        a: "Not with a simple browser-based generator: it creates one invoice at a time and does not schedule or send invoices for you. For a handful of retainer clients, reuse your saved details, update the number, dates and period, and send on the same day each month. If you bill many clients on a schedule, billing or accounting software with recurring invoices is the better fit.",
      },
      {
        q: "Is a PDF invoice from a generator legally valid?",
        a: "In many countries a PDF invoice is acceptable as long as it contains the details local law requires, such as a unique number, dates, both parties and any tax information. Some countries, however, require certain businesses to issue structured e-invoices through an approved system, for example Saudi Arabia, India for larger GST taxpayers, and an increasing number of EU countries. Check your tax authority's rules.",
      },
      {
        q: "How should I store copies of the invoices I generate?",
        a: "Save every PDF in one dedicated folder, named with the invoice number and client, and back it up to cloud storage. Keep a simple log of numbers, dates, amounts and payment status alongside it. Retention periods vary by country, often several years, so check what your tax authority expects, for example the IRS in the US or HMRC in the UK.",
      },
      {
        q: "Can clients pay by card directly from a generated invoice?",
        a: "Only if you add a way to pay. An invoice is a document, so it cannot take payments on its own. If you use a payment provider, create a payment link there and paste it into the notes or payment instructions, next to your bank details. Make sure the link shows the same amount and invoice number so the payment is easy to match.",
      },
      {
        q: "Can I generate an invoice for work I did months ago?",
        a: "Yes, you can bill for past work, but date the invoice honestly. The issue date should be the day you actually create and send it, while the description or a supply date field shows when the work was done. Backdating the issue date can cause problems with tax records and numbering, and the due date should run from the real issue date.",
      },
      {
        q: "How do I generate an invoice when the client has already paid a deposit?",
        a: "List the full value of the work as usual, then record the deposit so the invoice shows what is still owed. In our generator, enter the deposit in the amount paid field and the balance due is calculated for you. Mention the deposit invoice number in the notes, for example Deposit received on INV-2026-0040, so the client's finance team can reconcile both documents.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To generate an invoice, open a free online invoice generator, add your business details and your client's billing details, set a unique invoice number, issue date and due date, list each product or service with its quantity and rate, apply any tax or discount, add payment instructions, and then download the invoice as a PDF and email it to your client. With a good invoice maker, this takes about five minutes and you don't need any accounting software.</p>

<p>This guide covers the four common ways to generate an invoice, which one suits which business, and a step-by-step walkthrough using our <a href="/invoice-generator">free invoice generator</a>. If you want a field-by-field explanation of what an invoice must contain, read our companion guide on <a href="/blog/how-to-create-an-invoice">how to create an invoice</a>.</p>

<h2>What "generating an invoice" actually means</h2>
<p>Generating an invoice means producing a finished, sendable billing document (usually a PDF) from your business details, your client's details and the work you delivered. The difference between <em>creating</em> an invoice by hand and <em>generating</em> one is automation: a generator calculates line totals, subtotals, tax and the amount due for you, formats the layout, and exports a clean file you can send straight away.</p>
<p>Whatever tool you use, the output has to work for the person paying it. Accounts payable teams need to see who you are, who you are billing, what you delivered, how much is due, how to pay and by when. If any of those is missing, the invoice gets queried instead of paid. See <a href="/blog/what-is-an-invoice">what is an invoice</a> if you are new to billing.</p>

<h2>4 ways to generate an invoice (compared)</h2>
<table><thead><tr><th>Method</th><th>Cost</th><th>Speed</th><th>Automatic maths</th><th>Best for</th></tr></thead><tbody>
<tr><td>Online invoice generator</td><td>Free</td><td>Fast: a few minutes</td><td>Yes</td><td>Freelancers, contractors, small businesses, one-off invoices</td></tr>
<tr><td>Word or Google Docs template</td><td>Free</td><td>Slow</td><td>No</td><td>Very occasional invoices with simple lines</td></tr>
<tr><td>Excel or Google Sheets template</td><td>Free</td><td>Medium</td><td>Only if formulas are set up correctly</td><td>People comfortable maintaining spreadsheets</td></tr>
<tr><td>Accounting or billing software</td><td>Monthly subscription</td><td>Fast after setup</td><td>Yes</td><td>Businesses with high volume, inventory or bookkeeping needs</td></tr>
</tbody></table>

<h3>1. Online invoice generator</h3>
<p>An online invoice generator (also called an invoice maker or bill generator) is a web form with a live preview. You type your details, the tool does the calculations, and you download a professional PDF. There is nothing to install, and good generators don't make you sign up or put a watermark on your invoice. For most freelancers and small businesses, this is the fastest way to generate an invoice that looks professional.</p>

<h3>2. Word or Google Docs</h3>
<p>Word-processor templates look fine, but every number is typed by hand. Totals don't update when you change a quantity, which is one of the most common sources of <a href="/blog/common-invoice-mistakes">invoice mistakes</a>. Always export to PDF before sending. Never send an editable .docx as your invoice of record.</p>

<h3>3. Excel or Google Sheets</h3>
<p>A spreadsheet can calculate totals, but only if every formula is correct and stays correct as you add rows. Spreadsheets also make invoice numbering easy to break when you copy last month's file. If you go this route, lock the formula cells and keep a separate log of issued numbers. Our <a href="/blog/invoice-numbering-system">invoice numbering guide</a> explains how.</p>

<h3>4. Accounting software</h3>
<p>Accounting platforms generate invoices from customer records, track payments and send automatic reminders. They make sense once you issue many invoices a month or need bookkeeping, inventory and reporting in one place. For a freelancer sending a handful of invoices, a paid subscription is often more than you need.</p>

<h2>How to generate an invoice online in 8 steps</h2>
<p>These steps follow the fields in our <a href="/invoice-generator">invoice generator</a>, but they apply to any good invoice tool.</p>

<h3>Step 1: Choose your invoice template</h3>
<p>Pick a layout that suits the client. <a href="/invoice-templates/corporate">Corporate</a> and <a href="/invoice-templates/classic">Classic</a> work well for enterprise finance teams; <a href="/invoice-templates/modern">Modern</a>, <a href="/invoice-templates/creative">Creative</a> and <a href="/invoice-templates/agency">Agency</a> suit design and marketing work; <a href="/invoice-templates/minimal">Minimal</a> keeps things quiet and clear. You can browse all <a href="/invoice-templates">invoice templates</a> and switch at any time without retyping anything.</p>

<h3>Step 2: Add your business details and logo</h3>
<p>Enter your legal business name, address, email, phone number and tax ID if you are registered. Upload your logo so the invoice is recognisable in a busy inbox. Use the same details on every invoice so your client's finance team can match you to the right supplier record.</p>

<h3>Step 3: Add your client's billing details</h3>
<p>Bill the legal entity named in your contract or purchase order, not just the person you work with day to day. Add their billing address, their tax ID where required, and their <a href="/blog/po-number-on-invoice">PO number</a> if they use purchase orders. A missing PO is one of the fastest ways to get an invoice sent back.</p>

<h3>Step 4: Set the invoice number, date and due date</h3>
<p>Every invoice needs a unique, sequential number. If you don't have a system yet, our <a href="/tools/invoice-number-generator">invoice number generator</a> builds a consistent format for you, such as <code>INV-2026-0042</code>. Then set the issue date and a due date that matches your <a href="/blog/invoice-payment-terms">payment terms</a>, for example "Net 14, due 5 November 2026" rather than "Net 14" on its own.</p>

<h3>Step 5: List your products or services</h3>
<p>Add one line item for each product or service, with a clear description, quantity and rate. The generator multiplies quantity by rate and adds up the subtotal automatically. Write descriptions your client can approve without asking a question: "Logo design: 3 concepts, 2 revision rounds" beats "Design work". If you bill by the hour, see <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a>.</p>

<h3>Step 6: Add tax, discounts and shipping</h3>
<p>Choose your currency, then apply any discount, tax rate and shipping charges. Show tax as its own line so the client can reclaim it where they are entitled to. If you are not sure what rate applies, our <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you check the numbers, and our <a href="/blog/vat-invoice-guide">VAT</a>, <a href="/blog/gst-invoice-guide">GST</a> and <a href="/blog/tax-invoice-guide">tax invoice</a> guides cover the required fields. If you are not registered for tax, don't charge it.</p>

<h3>Step 7: Add payment terms, notes and a signature</h3>
<p>Put your bank details or payment link on the invoice itself, along with accepted payment methods and any late-payment terms you agreed in your contract. A short thank-you note and an optional signature make the invoice feel personal. You can also add a watermark such as "PAID" or "DRAFT" when you need to.</p>

<h3>Step 8: Download the PDF and send it</h3>
<p>Check the live preview one last time, then download your invoice as a PDF. Name the file clearly (for example <code>Invoice-INV-2026-0042-ClientName.pdf</code>) and email it to the client's accounts payable address with the invoice number and due date in the subject line. Our guide on <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> includes ready-to-use email templates.</p>

<h2>Generate a country-specific invoice</h2>
<p>Tax ID labels, currencies and required fields vary by country. Our country presets fill in the right defaults so your invoice matches local expectations:</p>
<ul>
<li><a href="/invoice-generator/usa">USA invoice generator</a>: USD, EIN and US sales tax.</li>
<li><a href="/invoice-generator/uk">UK invoice generator</a>: GBP and VAT registration number (see <a href="/blog/sole-trader-invoice-uk">invoicing as a UK sole trader</a>).</li>
<li><a href="/invoice-generator/uae">UAE invoice generator</a>: AED and TRN (see <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a>).</li>
<li><a href="/invoice-generator/pakistan">Pakistan invoice generator</a>: PKR, NTN and STRN (see <a href="/blog/sales-tax-invoice-pakistan">sales tax invoices in Pakistan</a>).</li>
</ul>
<p>Billing a client abroad? Read <a href="/blog/invoice-international-clients">how to invoice international clients</a> for currency and payment tips.</p>

<h2>How to generate invoices faster every month</h2>
<ul>
<li><strong>Reuse your saved draft.</strong> Our generator saves your draft in your browser, so your business details are already filled in next time you open it on the same device.</li>
<li><strong>Keep one numbering series.</strong> Never restart or reuse numbers. Gaps and duplicates cause problems in audits.</li>
<li><strong>Set up recurring billing habits.</strong> For retainers and subscriptions, invoice on the same day each period. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> explains how.</li>
<li><strong>Invoice as soon as work is approved.</strong> Every day you wait to invoice is a day added to when you get paid. More tactics are in <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</li>
<li><strong>Follow up on time.</strong> Have <a href="/blog/payment-reminder-emails">payment reminder emails</a> ready before the due date arrives.</li>
</ul>

<h2>Checklist before you generate the final PDF</h2>
<ul>
<li>Your business name, address and tax ID are correct.</li>
<li>The client's legal name and billing address match the contract or PO.</li>
<li>The invoice number is unique and follows your sequence.</li>
<li>The due date is a real calendar date.</li>
<li>Every line item has a clear description, quantity and rate.</li>
<li>Tax, discount and shipping lines are correct, and the total adds up.</li>
<li>Bank details or a payment link are on the invoice itself.</li>
<li>The PDF reads clearly on a phone and in black-and-white print. See our <a href="/blog/invoice-pdf-print-checklist">invoice PDF print checklist</a>.</li>
</ul>

<h2>Frequently asked questions</h2>

<h3>Can I generate an invoice for free?</h3>
<p>Yes. Our <a href="/invoice-generator">invoice generator</a> is free to use, with no sign-up and no watermark unless you add one yourself. You can generate and download as many PDF invoices as you need.</p>

<h3>How do I generate an invoice without accounting software?</h3>
<p>Use an online invoice generator. Fill in your details, your client's details and your line items, then download the PDF. You get automatic calculations and a professional layout without paying for or learning accounting software.</p>

<h3>Can I generate an invoice on my phone?</h3>
<p>Yes. A browser-based invoice maker works on mobile, so you can generate and send an invoice from your phone right after finishing a job. Check the preview before downloading so long names and totals display correctly.</p>

<h3>What is the best format to send an invoice in?</h3>
<p>PDF. It looks the same on every device, can't be edited by accident, and is what most accounts payable teams expect. Avoid sending Word or Excel files as your final invoice.</p>

<h3>Do I need to be a registered business to generate an invoice?</h3>
<p>In many countries, freelancers and sole traders can issue invoices under their own name. You may need to show tax registration numbers and charge tax only once you are registered. Rules vary, so check with your local tax authority or an accountant.</p>

<h3>What is the difference between an invoice, an estimate and a receipt?</h3>
<p>An estimate or quote prices work before it starts, an invoice requests payment once it's done, and a receipt confirms payment was received. See <a href="/blog/invoice-vs-estimate">invoice vs estimate</a> and <a href="/blog/invoice-vs-receipt">invoice vs receipt</a> for details.</p>

<h2>Generate your invoice now</h2>
<p>You now know how to generate an invoice that is accurate, professional and quick to approve. Open the <a href="/invoice-generator">free invoice generator</a>, pick a template, fill in your details and download your PDF invoice in minutes.</p>
`,
  },
  {
    slug: "sales-tax-invoice-pakistan",
    title: "Sales Tax Invoice in Pakistan: Required Fields, NTN, STRN and a Sample Layout",
    description:
      "What a sales tax invoice in Pakistan should show (supplier and buyer NTN/STRN, value excluding tax, sales tax amount and more), with a sample layout and common mistakes.",
    category: "tax-compliance",
    date: "2026-10-08",
    author: "Invoice Creator Editorial Team",
    related: ["strn-registration-pakistan"],
    jurisdiction: "Pakistan",
    faqs: [
      {
        q: "How can I check whether a buyer's NTN or STRN is valid?",
        a: "Use the FBR's online taxpayer verification and Active Taxpayer List (ATL) before you issue the invoice. For services, the relevant provincial authority, such as PRA or SRB, publishes its own registration lookup. Checking first matters because a wrong or inactive number can stop a registered buyer from claiming input tax, and the invoice may then need to be corrected through a credit or debit note.",
      },
      {
        q: "Do I have to issue sales tax invoices through FBR's digital invoicing system?",
        a: "Possibly. SRO 709(I)/2025 extended mandatory electronic invoicing to corporate and non-corporate sales tax registered persons, who must connect their invoicing, ERP or point-of-sale system to the FBR through a licensed integrator or PRAL. Deadlines were set in 2025 and have been revised over time, so confirm on the FBR website or with your tax adviser whether and when the requirement applies to you.",
      },
      {
        q: "How long should I keep sales tax invoices in Pakistan?",
        a: "Keep them for at least six years after the end of the tax period they relate to. The Sales Tax Act, 1990 sets this six-year period for records and documents, and it runs longer if an assessment, appeal or other proceeding about that period is still pending. Keep both issued and received invoices, plus credit notes, debit notes and bank records.",
      },
      {
        q: "What is the difference between a sales tax invoice and a commercial invoice in Pakistan?",
        a: "A sales tax invoice is issued by a registered person for a taxable supply and lets a registered buyer claim input tax. It must carry the prescribed details, including both parties' registration numbers and the tax charged. A commercial invoice is a normal request for payment that any business can issue, but it shows no sales tax and cannot support an input tax claim.",
      },
      {
        q: "What changes when I sell to a buyer who is not registered for sales tax?",
        a: "You still issue an invoice, but there is no buyer STRN to show and the buyer cannot claim input tax. For many taxable supplies of goods to unregistered persons, further tax at an additional rate may also apply on top of the normal sales tax. Rates, exemptions and documentation rules change in federal budgets, so check the current position with the FBR before invoicing.",
      },
      {
        q: "Which authority do I register with if I provide services in more than one province?",
        a: "Sales tax on services is largely provincial, so you may need to register with each provincial authority where you provide taxable services, such as PRA in Punjab, SRB in Sindh, KPRA in Khyber Pakhtunkhwa or BRA in Balochistan. Services in Islamabad fall under federal rules. Where a service is treated as provided can be complex, so take professional advice before you invoice.",
      },
      {
        q: "Do I need to file a sales tax return if I issued no invoices in a month?",
        a: "Yes, in general. Registered persons are normally expected to file a return for every tax period, even when there were no sales, which is usually called a nil return. Missing returns can lead to penalties and can affect your status on the Active Taxpayer List, which in turn affects how buyers deal with you. Check the current filing dates on the FBR or provincial portal.",
      },
      {
        q: "Why does a buyer's input tax claim depend on my invoice and return?",
        a: "A registered buyer can generally claim input tax only when the supply appears in your own sales tax return with their correct registration number. If you leave out their STRN, enter the wrong value or file late, their claim may be rejected even though they paid you the tax. Accurate invoices and timely returns are a big part of being a supplier buyers want to keep.",
      },
      {
        q: "Do I issue a sales tax invoice for exports of goods?",
        a: "Registered exporters still document export sales, but exports of goods are generally zero-rated, so the invoice shows sales tax at 0% rather than the standard rate. Export invoices are usually issued in the agreed foreign currency and supported by customs and shipping documents. The exact paperwork and refund rules are set by the FBR, so confirm them with your tax adviser or clearing agent.",
      },
      {
        q: "Can I make a sales tax invoice with a free online invoice generator?",
        a: "You can use a generator for the layout. Our Pakistan preset includes PKR, NTN and STRN fields and lets you set the tax rate per invoice. It produces a PDF, not an FBR-integrated digital invoice, so it does not add an FBR invoice number or QR code. If you fall under FBR's digital invoicing or integrated retailer rules, you must use an integrated system instead.",
      },
    ],
    content: `
<p><strong>Important:</strong> Tax laws, rates, registration requirements, and invoicing rules can change and may vary by province and by type of supply. This article provides general informational content and should not be considered professional tax, accounting, or legal advice. Verify current requirements with the Federal Board of Revenue (FBR), the relevant provincial revenue authority, or a qualified tax adviser.</p>

<h2>Who needs to issue a sales tax invoice</h2>
<p>In Pakistan, a business registered for sales tax is generally required to issue a sales tax invoice for each taxable supply it makes. Sales tax on goods is administered federally by the FBR under the Sales Tax Act, 1990, while sales tax on services is largely administered by the provinces, for example the Punjab Revenue Authority (PRA), Sindh Revenue Board (SRB), Khyber Pakhtunkhwa Revenue Authority (KPRA) and Balochistan Revenue Authority (BRA), with the Islamabad Capital Territory under federal rules.</p>
<p>If you are a freelancer or small business that is <em>not</em> registered for sales tax, you should not charge sales tax or present your document as a sales tax invoice. You can still issue a normal commercial invoice showing your NTN, if you have one.</p>

<h2>NTN and STRN: what's the difference?</h2>
<table><thead><tr><th>Number</th><th>Full name</th><th>What it identifies</th></tr></thead><tbody>
<tr><td>NTN</td><td>National Tax Number</td><td>Your income tax registration with the FBR</td></tr>
<tr><td>STRN</td><td>Sales Tax Registration Number</td><td>Your registration for sales tax</td></tr>
</tbody></table>
<p>For many registered businesses, the STRN is linked to the NTN, but they serve different purposes. A sales tax invoice normally shows the registration numbers of both supplier and buyer, so the buyer can claim input tax where they are entitled to.</p>

<h2>Fields a sales tax invoice should contain</h2>
<p>The Sales Tax Act sets out the particulars a tax invoice must carry. In practice, a compliant invoice for goods typically includes:</p>
<ul>
<li>The words <strong>"Sales Tax Invoice"</strong></li>
<li>A unique, serial invoice number</li>
<li>Date of issue</li>
<li>Supplier's name, address, NTN and STRN</li>
<li>Buyer's name, address, NTN and STRN (where the buyer is registered)</li>
<li>Description and quantity of goods</li>
<li>Value of the goods excluding sales tax</li>
<li>Rate and amount of sales tax</li>
<li>Value including sales tax</li>
</ul>
<p>Provincial authorities apply similar requirements to services, sometimes with additional details. Some categories of retailers must also issue invoices through a system integrated with the FBR, which then prints an FBR invoice number or QR code. If you fall into one of those categories, your point-of-sale system, not a manual template, must generate the invoice.</p>

<h2>Sample layout</h2>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit price (PKR)</th><th>Value excl. tax</th><th>Sales tax (18%)</th><th>Value incl. tax</th></tr></thead><tbody>
<tr><td>Office chairs, model OC-200</td><td>10</td><td>12,000</td><td>120,000</td><td>21,600</td><td>141,600</td></tr>
<tr><td>Delivery and installation</td><td>1</td><td>5,000</td><td>5,000</td><td>See note</td><td>—</td></tr>
</tbody></table>
<p>The 18% rate above is an example only. Rates differ for goods and services, between provinces, and for specific items, and they change in federal and provincial budgets. Services such as delivery may fall under provincial sales tax at a different rate, so many businesses invoice goods and services on separate lines (or separate invoices) and show the correct tax for each.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Charging sales tax without being registered.</strong> Only registered persons should charge and collect sales tax.</li>
<li><strong>Missing buyer registration details.</strong> Registered buyers often cannot claim input tax if their NTN/STRN is missing or wrong.</li>
<li><strong>One blended tax line for mixed supplies.</strong> Goods and services, or items at different rates, should be shown separately.</li>
<li><strong>Reusing or skipping invoice numbers.</strong> Keep one continuous series and explain any voids. See <a href="/blog/invoice-numbering-system">invoice numbering</a>.</li>
<li><strong>Editing an issued invoice.</strong> Corrections should be made through a credit or debit note. See our <a href="/blog/credit-note-guide">credit note guide</a>.</li>
</ul>

<h2>Withholding tax on invoices</h2>
<p>When you supply goods or services to companies or government bodies in Pakistan, the buyer may be required to deduct income tax at source and, in some cases, sales tax withholding. This does not change what you put on the invoice, but it does mean the amount you receive may be lower than the invoice total. Keep the withholding certificates the buyer gives you; they are needed for your tax return.</p>

<h2>Freelancers exporting services</h2>
<p>Pakistani freelancers who invoice foreign clients are usually exporting services. These invoices are typically issued in USD or another foreign currency and normally do not include Pakistani sales tax, but the treatment depends on the service and your registration. Show your NTN, state the currency clearly, and keep proof of the foreign remittance. Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers the practical side.</p>

<p>If you are a sales-tax registered business, check whether FBR's digital invoicing rules apply to you as well. Our guide to <a href="/blog/fbr-e-invoicing-pakistan">FBR e-invoicing in Pakistan</a> explains who must integrate.</p>

<h2>Create a PKR invoice</h2>
<p>Our <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> is preset with PKR, NTN and STRN fields so both parties' registration numbers appear on the PDF. Adjust the tax rate to match your supply, and confirm requirements with your tax adviser before relying on any template for compliance.</p>
`,
  },
  {
    slug: "uae-vat-invoice-requirements",
    title: "UAE VAT Tax Invoice Requirements: Full vs Simplified Tax Invoice",
    description:
      "What a UAE tax invoice must include under VAT (TRN, amounts in AED, VAT per line) and when a simplified tax invoice is allowed, with a sample layout.",
    category: "tax-compliance",
    date: "2026-10-07",
    author: "Invoice Creator Editorial Team",
    related: ["trn-number-uae"],
    jurisdiction: "United Arab Emirates",
    faqs: [
      {
        q: "What is the VAT registration threshold in the UAE?",
        a: "Registration is mandatory when your taxable supplies and imports exceeded AED 375,000 over the previous 12 months, or are expected to exceed it in the next 30 days. You can register voluntarily once supplies or expenses exceed AED 187,500. Thresholds and rules can change, so confirm the current figures on the Federal Tax Authority (FTA) website before you register or start issuing tax invoices.",
      },
      {
        q: "Do UAE tax invoices have to be in Arabic?",
        a: "Tax invoices issued in English are widely used and generally accepted for VAT purposes, and many businesses issue bilingual English and Arabic invoices. The FTA can ask for records to be translated into Arabic, and the data requirements for structured e-invoices may differ. Because guidance on language is still evolving with e-invoicing, check the FTA's current rules or ask your tax agent.",
      },
      {
        q: "How long must I keep tax invoices in the UAE?",
        a: "Keep tax invoices, credit notes and other VAT records for at least five years from the end of the relevant tax period. Records relating to real estate generally must be kept much longer, commonly cited as 15 years. Keep them in a form you can produce quickly if the FTA asks, and confirm current retention rules with the FTA or your tax agent.",
      },
      {
        q: "When does mandatory e-invoicing start in the UAE?",
        a: "At the time of writing, the rollout is phased. A voluntary pilot began on 1 July 2026, businesses with revenue of AED 50 million or more must go live on 1 January 2027, other businesses on 1 July 2027, and government entities later in 2027. Each group must appoint an accredited service provider first. Dates have already been amended once, so check the Ministry of Finance and FTA.",
      },
      {
        q: "Is a PDF tax invoice still valid in the UAE?",
        a: "Until the e-invoicing mandate applies to your business, a PDF tax invoice that contains all the required details is generally valid. Once your phase goes live, B2B and B2G invoices must be exchanged as structured e-invoices through an accredited service provider. A PDF generator, including ours, does not create those structured e-invoices, so plan the switch before your go-live date.",
      },
      {
        q: "What is the penalty for not issuing a proper tax invoice in the UAE?",
        a: "Failing to issue a tax invoice or tax credit note can attract an administrative penalty for each document under the UAE's VAT penalty rules, and penalty amounts have been revised over the years. Published summaries quote different figures, so check the FTA's current penalty schedule rather than relying on a number from a blog. Issuing correct invoices on time is the simplest protection.",
      },
      {
        q: "Can a business that is not VAT-registered issue an invoice in the UAE?",
        a: "Yes. You can issue a normal commercial invoice to request payment, but it must not be titled Tax Invoice, show a TRN or charge VAT. Include your name, the customer, a unique number, the date, a description and the amount due. Once your supplies approach the mandatory threshold, monitor your turnover so you register on time and switch to tax invoices.",
      },
      {
        q: "What should a tax invoice to an overseas customer show instead of a TRN?",
        a: "An overseas customer usually has no UAE TRN, so show their full legal name and address, including the country. Apply the correct VAT treatment for each line, which for qualifying exports may be zero-rating at 0%. Zero-rating depends on meeting specific conditions and keeping evidence, such as proof the goods left the UAE or the customer is outside it, so check with your tax agent.",
      },
      {
        q: "What should I do if I receive a tax invoice without my TRN?",
        a: "Ask the supplier to correct it, ideally through a tax credit note and a new tax invoice. When you buy as a registered business, input tax recovery generally depends on holding a valid tax invoice with the required details, and a full tax invoice for a registered recipient should show your TRN. Don't alter the supplier's invoice yourself.",
      },
      {
        q: "Do I need to issue a tax invoice for an advance payment in the UAE?",
        a: "Usually, yes. Under UAE VAT rules, receiving payment before you deliver can create a date of supply for the amount received, so VAT becomes due on that advance and a tax invoice should normally be issued within the usual 14-day window. Then invoice the balance when the supply is completed. Confirm the timing for your contracts with a tax agent.",
      },
    ],
    content: `
<p><strong>Important:</strong> Tax laws, rates, registration requirements, and invoicing rules can change. This article provides general informational content and should not be considered professional tax, accounting, or legal advice. Verify current requirements with the UAE Federal Tax Authority (FTA) or a qualified tax agent. The UAE has also announced a move to mandatory e-invoicing, which will change how invoices are issued for many businesses, so check the FTA's latest timeline.</p>

<h2>VAT in the UAE at a glance</h2>
<p>The UAE introduced VAT on 1 January 2018 at a standard rate of 5%. Businesses whose taxable supplies exceed the mandatory registration threshold must register with the Federal Tax Authority and receive a Tax Registration Number (TRN). Registered businesses must issue tax invoices for taxable supplies, generally within 14 days of the date of supply.</p>

<h2>Full tax invoice: required details</h2>
<p>A full tax invoice is generally required when you supply a VAT-registered customer. It should include:</p>
<ul>
<li>The words <strong>"Tax Invoice"</strong> clearly displayed</li>
<li>Your name, address and TRN</li>
<li>The recipient's name, address and TRN (where the recipient is registered)</li>
<li>A sequential invoice number</li>
<li>Date of issue</li>
<li>Date of supply, if different from the date of issue</li>
<li>Description of the goods or services</li>
<li>For each item: unit price, quantity, rate of tax and amount payable in AED</li>
<li>Any discount offered</li>
<li>Gross amount payable in AED</li>
<li>Tax amount payable in AED, together with the exchange rate used if the invoice is in another currency</li>
<li>Where reverse charge applies, a statement that the recipient is required to account for the tax</li>
</ul>

<h2>Simplified tax invoice</h2>
<p>A simplified tax invoice can generally be issued when the recipient is not VAT-registered, or when the recipient is registered and the value of the supply does not exceed AED 10,000. It needs fewer details: typically the words "Tax Invoice", your name, address and TRN, an invoice number, the date, a description, the total consideration and the tax charged. Retail receipts often take this form.</p>

<h2>Invoicing in a foreign currency</h2>
<p>You may invoice in USD, EUR or another currency, but the VAT amount must be shown in AED, along with the exchange rate applied. A common approach is to show line items in the agreed currency and add a summary box: "VAT payable: AED 91.84 (USD 25.00 at 3.6735)". Use the exchange rate method your tax agent recommends and apply it consistently.</p>

<h2>Sample full tax invoice layout</h2>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit price (AED)</th><th>VAT rate</th><th>VAT (AED)</th><th>Total (AED)</th></tr></thead><tbody>
<tr><td>Website development: phase 1</td><td>1</td><td>18,000.00</td><td>5%</td><td>900.00</td><td>18,900.00</td></tr>
<tr><td>Monthly hosting (October)</td><td>1</td><td>500.00</td><td>5%</td><td>25.00</td><td>525.00</td></tr>
<tr><td colspan="4"><strong>Totals</strong></td><td><strong>925.00</strong></td><td><strong>19,425.00</strong></td></tr>
</tbody></table>

<h2>Zero-rated and exempt supplies</h2>
<p>Some supplies, such as certain exports of goods and services, are zero-rated: VAT is charged at 0% but they remain taxable supplies, so a tax invoice is still issued showing 0%. Exempt supplies (such as certain residential property and some financial services) carry no VAT. Show the correct treatment on each line rather than leaving the VAT column blank.</p>

<h2>Correcting a tax invoice</h2>
<p>If an invoice is wrong after it has been issued, issue a <strong>tax credit note</strong> referencing the original invoice. Do not alter or reissue the same number. See our general <a href="/blog/credit-note-guide">credit note guide</a> for how this works.</p>

<h2>Common mistakes</h2>
<ul>
<li>Leaving out the customer's TRN on B2B invoices</li>
<li>Showing VAT only in a foreign currency</li>
<li>Issuing the invoice long after the 14-day window</li>
<li>Calling a document a "Tax Invoice" before you are VAT-registered</li>
<li>Gaps or duplicates in invoice numbering</li>
</ul>

<p>The UAE is also moving to mandatory structured e-invoicing. Our guide to <a href="/blog/uae-e-invoicing-2027">UAE e-invoicing in 2027</a> covers the timeline and the accredited service provider requirement.</p>

<h2>Create a UAE invoice</h2>
<p>Our <a href="/invoice-generator/uae">UAE invoice generator</a> is preset with AED and a TRN field and calculates 5% VAT automatically; you can change the rate for zero-rated lines. For general background on VAT invoicing in other countries, see our <a href="/blog/vat-invoice-guide">VAT invoice guide</a>.</p>
`,
  },
  {
    slug: "sole-trader-invoice-uk",
    title: "How to Invoice as a Sole Trader in the UK (With Example)",
    description:
      "What a UK sole trader invoice must include, when to add VAT details, how limited companies differ, and a complete example you can copy.",
    category: "tax-compliance",
    date: "2026-10-06",
    author: "Invoice Creator Editorial Team",
    related: ["sole-trader-vs-limited-company", "self-assessment-tax-return-uk"],
    jurisdiction: "United Kingdom",
    faqs: [
      {
        q: "Do I need a business bank account as a sole trader?",
        a: "There is no legal requirement for a sole trader to have a separate business bank account, but it makes bookkeeping and your Self Assessment much easier. Some banks' terms also restrict using a personal account for business transactions, so check yours. Whichever account you use, show the account name, sort code and account number exactly as they appear on every invoice.",
      },
      {
        q: "Should I put my UTR on my invoices?",
        a: "No. Your Unique Taxpayer Reference is not required on a sole trader invoice and is best kept private, as it is used for dealing with HMRC. The exception is the Construction Industry Scheme, where contractors ask subcontractors for their UTR to verify them, but that is shared directly with the contractor rather than printed on each invoice.",
      },
      {
        q: "What is the current VAT registration threshold for sole traders?",
        a: "At the time of writing, you must register for VAT if your VAT-taxable turnover goes over £90,000 in any rolling 12-month period, or you expect it to in the next 30 days alone. The threshold has been £90,000 since April 2024. It can change at a Budget, so check the current figure on GOV.UK before relying on it.",
      },
      {
        q: "Does Making Tax Digital change how I invoice as a sole trader?",
        a: "It does not change what goes on an invoice, but it changes your record keeping. Making Tax Digital for Income Tax applies from April 2026 to sole traders and landlords with qualifying income over £50,000, from April 2027 over £30,000 and from April 2028 over £20,000. If it applies, you must keep digital records and send quarterly updates using compatible software.",
      },
      {
        q: "How much statutory interest can I claim on a late business payment?",
        a: "For business-to-business debts, you can usually claim simple interest at 8% above the Bank of England base rate, plus fixed compensation of £40 for debts under £1,000, £70 for £1,000 to £9,999.99, and £100 for £10,000 or more. These rights do not apply to consumers. Check GOV.UK for the base rate that applies to your debt's period.",
      },
      {
        q: "Can I invoice private individuals as a sole trader?",
        a: "Yes. The same invoice details apply, but consumers have stronger legal protections than businesses, and statutory late payment interest does not apply to them. Set out your price, payment terms and any deposit clearly before you start, ideally in writing. For some work agreed away from your premises, consumers may also have cancellation rights, so check the Consumer Contracts Regulations guidance.",
      },
      {
        q: "Do I need to register as self-employed before I send my first invoice?",
        a: "No, you can invoice before registering, but you must tell HMRC you are self-employed. Generally, you need to register for Self Assessment by 5 October after the end of the tax year in which you started trading. If your gross trading income is £1,000 or less in a tax year, the trading allowance may mean you do not need to register.",
      },
      {
        q: "Can a UK sole trader invoice in euros or dollars?",
        a: "Yes, you can invoice in any currency agreed with your client. For your tax records, convert the income to pounds using a reasonable and consistent exchange rate. If you are VAT-registered and charge UK VAT, the VAT amount must also be shown in sterling on the invoice. Show the currency code clearly, such as EUR or USD, to avoid confusion.",
      },
      {
        q: "Do I have to put my home address on my invoices?",
        a: "Your invoice should show an address where you can be contacted and where documents can be served, which for many sole traders is their home. If you prefer not to share it, you can use a genuine business address, such as a rented office or a business address service, as long as post sent there reaches you. Check any service's terms before using it.",
      },
      {
        q: "What payment terms should a UK sole trader use?",
        a: "Many sole traders use 14 or 30 days, agreed in writing before the work starts. If you invoice a business and no payment date was agreed, the late payment rules generally treat the debt as late 30 days after the customer receives the invoice or the goods or services, whichever is later. Always write the actual due date on the invoice.",
      },
    ],
    content: `
<p><strong>Important:</strong> Tax laws, rates, registration requirements, and invoicing rules can change. This article provides general informational content and should not be considered professional tax, accounting, or legal advice. Check GOV.UK and HMRC guidance, or speak to an accountant, for your situation.</p>

<h2>What a sole trader invoice must show</h2>
<p>If you are self-employed as a sole trader in the UK, your invoices should clearly include:</p>
<ul>
<li>A unique identification number</li>
<li>Your name (or trading name) and address</li>
<li>The name and address of the customer you are invoicing</li>
<li>A clear description of what you are charging for</li>
<li>The date the goods or services were provided (the supply date)</li>
<li>The date of the invoice</li>
<li>The amount being charged</li>
<li>VAT amount, if applicable</li>
<li>The total amount owed</li>
</ul>
<p>If you trade under a business name, show your own name as well, along with an address where documents can be served. This lets customers know exactly who they are dealing with.</p>

<h2>Sole trader vs limited company invoices</h2>
<table><thead><tr><th>Detail</th><th>Sole trader</th><th>Limited company</th></tr></thead><tbody>
<tr><td>Legal name</td><td>Your own name (plus any trading name)</td><td>Full registered company name</td></tr>
<tr><td>Registration</td><td>Not applicable</td><td>Company registration number and registered office address</td></tr>
<tr><td>Directors' names</td><td>Not applicable</td><td>Optional, but if any are shown, all must be</td></tr>
<tr><td>VAT number</td><td>Only if VAT-registered</td><td>Only if VAT-registered</td></tr>
</tbody></table>

<h2>Do you need to charge VAT?</h2>
<p>You must register for VAT once your VAT-taxable turnover goes over the registration threshold (check GOV.UK for the current figure). Until you are registered, you must not charge VAT or show a VAT number. Once registered, your invoices become VAT invoices and need additional details such as your VAT registration number, the rate of VAT for each item, and the VAT amount in pounds sterling. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> explains those requirements.</p>
<p>You can register voluntarily below the threshold. Whether that makes sense depends on whether your customers are VAT-registered businesses that can reclaim the VAT.</p>

<h2>Example sole trader invoice</h2>
<p><strong>INVOICE 2026-0018</strong><br>
Jane Smith, trading as Smith Design<br>
14 Market Street, Leeds LS1 6DT<br>
jane@smithdesign.example</p>
<p><strong>Bill to:</strong> Northwind Ltd, 2 Canal Wharf, Leeds LS11 5PS<br>
<strong>Invoice date:</strong> 6 October 2026 · <strong>Supply date:</strong> 30 September 2026 · <strong>Due:</strong> 20 October 2026</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Logo design: 3 concepts, 2 revision rounds</td><td>1</td><td>£650.00</td><td>£650.00</td></tr>
<tr><td>Business card layout</td><td>1</td><td>£120.00</td><td>£120.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>£770.00</strong></td></tr>
</tbody></table>
<p>Payment by bank transfer to: Jane Smith, sort code 00-00-00, account 00000000. Please use 2026-0018 as the reference.</p>

<h2>Late payment rights</h2>
<p>When you sell to another business, UK law lets you claim statutory interest and fixed compensation on late payments, unless your contract sets a different, substantial remedy. Many sole traders mention this in their terms. Read <a href="/blog/late-payment-fees">how to charge late payment fees</a> before you apply it.</p>

<h2>Keeping records</h2>
<p>As a sole trader you must keep records of your business income and expenses, including copies of invoices, for your Self Assessment tax return. HMRC generally expects records to be kept for at least 5 years after the 31 January submission deadline of the relevant tax year. With Making Tax Digital for Income Tax being phased in for higher-earning sole traders, you may also need compatible software to keep digital records, so check whether it applies to you.</p>

<h2>Tips for getting paid</h2>
<ul>
<li>Agree payment terms before starting. See <a href="/blog/invoice-payment-terms">payment terms explained</a>.</li>
<li>Invoice on the day you finish the work.</li>
<li>Write the due date as a date, not just "30 days".</li>
<li>Put your bank details on every invoice.</li>
</ul>
<p>Our <a href="/invoice-generator/uk">UK invoice generator</a> is set up for GBP with an optional VAT number field, so you can create a sole trader invoice in a couple of minutes.</p>
`,
  },
  {
    slug: "how-to-invoice-for-hourly-work",
    title: "How to Invoice for Hourly Work: Timesheets, Rates and Examples",
    description:
      "A practical guide to billing by the hour: tracking time, rounding rules, writing hourly line items, attaching timesheets and avoiding disputes.",
    category: "guides",
    date: "2026-10-03",
    author: "Invoice Creator Editorial Team",
    related: ["security-services-invoice-template", "timesheet-template"],
    faqs: [
      {
        q: "How do I convert minutes to decimal hours on an invoice?",
        a: "Divide the minutes by 60 and add the result to the whole hours. For example, 15 minutes is 0.25 hours, 30 minutes is 0.5, 45 minutes is 0.75, and 1 hour 20 minutes is about 1.33 hours. Multiply the decimal hours by your rate for the line total. Round to two decimal places consistently so your timesheet and invoice always match.",
      },
      {
        q: "Should I show my hourly rate on the invoice or just the total?",
        a: "Show the hours, the rate and the total on each line. Clients approve hourly invoices more quickly when they can check the maths themselves, and many finance teams will query a lump sum with no breakdown. Showing the rate also reminds clients of what was agreed, which helps when you later need to discuss a rate increase.",
      },
      {
        q: "What should I do if a client disputes the hours on my invoice?",
        a: "Respond quickly and share the detailed time records behind the disputed lines, including dates and task descriptions. Offer a short call to walk through them. If only part of the invoice is disputed, ask the client to pay the undisputed amount now while you resolve the rest. If you made an error, correct it with a credit note rather than editing the original.",
      },
      {
        q: "What is the difference between an hourly rate and a day rate?",
        a: "An hourly rate bills each hour you work, while a day rate is a fixed charge for a working day, regardless of the exact hours. Day rates suit on-site or full-day engagements and are simpler to invoice. Define what a day means in your contract, for example 7.5 hours, and how partial days and overtime are charged.",
      },
      {
        q: "Should I bill for meetings, emails and phone calls?",
        a: "You can, as long as your contract says so. Many professionals bill all client time, including calls and meetings, while others include short emails in their rate. Decide your policy before you start and apply it consistently. On the invoice, list meetings and calls as their own entries, such as Client call: project scope review, 0.5 h, so nothing looks hidden.",
      },
      {
        q: "How do I raise my hourly rate for an existing client?",
        a: "Give written notice before the change takes effect, commonly 30 to 60 days, and say exactly when the new rate starts. Check your contract first, as it may set rules on rate changes. On the first invoice at the new rate, add a short note confirming the change so the client's finance team is not surprised by a different number.",
      },
      {
        q: "Can I put hourly and fixed-fee items on the same invoice?",
        a: "Yes. List each type on separate lines so the client can see what is billed by time and what is a fixed price. For example, show Website maintenance retainer, October as a fixed amount, then Additional development work: 6 h at your hourly rate. Keep the billing period consistent for both types so the invoice matches your contract and timesheet.",
      },
      {
        q: "How do I invoice hourly work done by a subcontractor?",
        a: "Bill the subcontractor's hours on separate lines with their rate, or with your agreed resale rate if you add a markup. Check that your contract with the client allows subcontracting and any markup. Keep the subcontractor's own invoice and timesheet on file so you can support your figures if the client asks, and make sure their hours match what you bill.",
      },
      {
        q: "Should I charge for time spent fixing my own mistakes?",
        a: "Generally, no. Most clients expect you to fix your own errors at your cost, and billing for them is a common cause of disputes. Rework caused by the client, such as changed requirements or late feedback, is different and is usually billable if your contract says so. Label that work clearly, for example Rework after scope change approved on 3 October.",
      },
      {
        q: "How do I work out what hourly rate to charge?",
        a: "Start with the income you want each year, add your business expenses, taxes and time off, then divide by the hours you can realistically bill. Billable hours are usually far fewer than hours worked, because admin, sales and learning are unpaid. Then compare the result with typical rates in your field and adjust for your experience and the value you deliver.",
      },
    ],
    content: `
<h2>When hourly billing makes sense</h2>
<p>Hourly billing suits work where the scope is hard to predict: <a href="/blog/consulting-invoice-template">consulting</a>, support, maintenance, <a href="/blog/legal-invoice-template">legal</a> or bookkeeping work, <a href="/blog/tutoring-invoice-template">tutoring</a> and many trades. It protects you from unlimited scope creep, and clients pay only for time actually spent. The trade-off is that clients need to trust your time records, so the invoice must make your hours easy to understand and verify.</p>

<h2>Step 1: Track time as you work</h2>
<p>Record time on the day you do it, not from memory at month end. For each entry, note the date, start and end time (or duration), the task, and the project or client. A spreadsheet is enough; a time-tracking app is helpful if you work across many clients.</p>
<p>Good entries are specific: "Debugged checkout payment error and deployed fix: 2.5 h" is far easier to approve than "Development: 2.5 h".</p>

<h2>Step 2: Decide your rounding rule</h2>
<p>Agree a rounding rule in advance and apply it consistently. Common options are:</p>
<ul>
<li>Exact minutes (most transparent)</li>
<li>Nearest 15 minutes (0.25 h), the most common professional standard</li>
<li>Nearest 6 minutes (0.1 h), used by many law firms</li>
<li>A minimum charge per call-out or session, e.g. 1 hour</li>
</ul>
<p>State the rule in your contract or on the invoice. Rounding every task up to a full hour without agreement is a quick way to lose trust.</p>

<h2>Step 3: Write the line items</h2>
<p>You have two good options:</p>
<h3>Option A: one line per task or week</h3>
<table><thead><tr><th>Description</th><th>Hours</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Week of 1 Sep: API integration and testing</td><td>12.5</td><td>80.00</td><td>1,000.00</td></tr>
<tr><td>Week of 8 Sep: bug fixes, client call (1 h)</td><td>6.0</td><td>80.00</td><td>480.00</td></tr>
<tr><td>Week of 15 Sep: deployment and documentation</td><td>8.25</td><td>80.00</td><td>660.00</td></tr>
</tbody></table>
<h3>Option B: one summary line plus an attached timesheet</h3>
<p>"Development services, 1–30 September 2026 (see attached timesheet): 26.75 h × 80.00 = 2,140.00". This keeps the invoice short while the timesheet gives full detail.</p>
<p>In our <a href="/invoice-generator">invoice generator</a>, enter hours in the quantity field and your hourly rate in the rate field; the line total calculates automatically, including decimal hours such as 8.25.</p>

<h2>Step 4: Attach a timesheet</h2>
<p>For anything beyond a few hours, attach a simple timesheet (PDF or spreadsheet) with date, task and duration. Many clients, agencies and staffing firms require one. The total of the timesheet must exactly match the hours on the invoice.</p>

<h2>Different rates for different work</h2>
<p>If you charge different rates (for example standard and urgent work, or senior and junior staff), show them as separate lines. Never blend them into one average rate; clients cannot check it, and it hides the value of your premium work.</p>
<ul>
<li>"Senior consultant: 10 h × 120.00"</li>
<li>"Junior analyst: 16 h × 60.00"</li>
<li>"Out-of-hours emergency support: 2 h × 150.00"</li>
</ul>

<h2>Expenses and travel</h2>
<p>Bill expenses as separate lines, ideally with receipts. If you charge for travel time, say whether it is billed at your full rate, a reduced rate, or not at all, and agree this before you travel.</p>

<h2>Caps and estimates</h2>
<p>Clients often ask for an estimate of hours. If you give one, track progress against it and warn the client before you go over: "We're at 18 of the estimated 20 hours; finishing will take about 6 more." Surprises at invoice time cause most hourly-billing disputes. See <a href="/blog/invoice-vs-estimate">invoice vs estimate</a> for how estimates relate to final invoices.</p>

<h2>How often to invoice</h2>
<p>For ongoing hourly work, invoice weekly, every two weeks or monthly. Shorter cycles mean smaller invoices that are easier to approve, and less money at risk if a client stops paying. Choose one cycle per client and keep to it.</p>

<h2>Checklist</h2>
<ul>
<li>Time recorded daily with task descriptions</li>
<li>Rounding rule agreed and applied consistently</li>
<li>Hours × rate shown on each line</li>
<li>Different rates on separate lines</li>
<li>Timesheet attached and totals matching</li>
<li>Billing period stated clearly</li>
</ul>
<p>For freelancers, our <a href="/blog/freelancer-invoice-guide">freelancer invoice guide</a> covers the rest of the invoice, and <a href="/blog/how-to-get-paid-faster">how to get paid faster</a> helps the money arrive sooner.</p>
`,
  },
  {
    slug: "invoice-international-clients",
    title: "How to Invoice International Clients: Currency, Tax and Payment Tips",
    description:
      "Everything to get right when billing clients abroad: choosing the currency, exchange rates, cross-border tax, payment methods and the details banks need.",
    category: "guides",
    date: "2026-10-01",
    author: "Invoice Creator Editorial Team",
    related: ["billing-address-vs-shipping-address", "incoterms-on-invoice"],
    faqs: [
      {
        q: "Do I need to register for VAT or sales tax in my client's country?",
        a: "Often not for business-to-business services, because many countries use a reverse charge so the client accounts for the tax. Selling digital services or goods to consumers abroad can be different and may require registration in the customer's country, sometimes from the first sale. The rules depend on both countries and what you sell, so check with an accountant or the relevant tax authority.",
      },
      {
        q: "What is a W-8BEN form and do I need one for US clients?",
        a: "A W-8BEN is an IRS form that a non-US individual gives to a US client to certify foreign status for tax purposes. It is usually requested before payment and helps avoid US backup withholding on payments for services performed outside the US. You give it to the client, not the IRS. Businesses use the W-8BEN-E version instead.",
      },
      {
        q: "What payment terms work best for international clients?",
        a: "Shorter terms and deposits reduce your risk, because chasing an overseas debt is harder and costlier. Many freelancers ask for a deposit on new clients, then bill by milestone or monthly. Allow for bank processing times and time zones when setting the due date, and write it as a full date, such as 15 November 2026, so there is no ambiguity.",
      },
      {
        q: "Is a commercial invoice the same as a regular invoice for international clients?",
        a: "Not quite. A regular invoice requests payment for goods or services. A commercial invoice travels with goods across a border and gives customs the information it needs, such as the value, origin, quantities and tariff details, to assess duties. If you only sell services, you usually need a normal invoice. If you ship goods, you typically need both.",
      },
      {
        q: "How can I reduce currency conversion losses on international invoices?",
        a: "Compare the exchange rate and fees your bank or payment service offers against the mid-market rate. Multi-currency accounts let you receive money in the client's currency and convert when it suits you. Agreeing the invoice currency in your contract, and stating who pays transfer fees, also prevents short payments. For large or long contracts, consider pricing in a stable currency.",
      },
      {
        q: "What can I do if an international client doesn't pay?",
        a: "Start with polite reminders, then a firm final notice that refers to your contract. If that fails, options include a collection agency in the client's country or legal action, which can be slow and expensive across borders. That is why prevention matters: deposits, milestone billing, clear contracts that name the governing law, and stopping work when payments are overdue.",
      },
      {
        q: "What do OUR, SHA and BEN mean on an international wire transfer?",
        a: "They are SWIFT charge codes that decide who pays the bank fees. OUR means the sender pays all charges, so you should receive the full amount. SHA means the fees are shared: the sender pays their bank, and you pay receiving and often intermediary fees. BEN means you, the beneficiary, pay all charges. Ask clients to use OUR when your contract says so.",
      },
      {
        q: "Do I need my client's VAT number on an international invoice?",
        a: "Usually yes when you invoice a business under a reverse charge, for example a VAT-registered business in the EU. The client's VAT number helps show the supply is business to business. EU VAT numbers can be checked with the European Commission's VIES service, and keeping a record of that check is good practice. Rules differ outside the EU, so confirm locally.",
      },
      {
        q: "How do I prove income from foreign clients for tax purposes?",
        a: "Keep a complete trail for every job: the contract or order, the invoice, and the bank or payment service record showing the money received. In some countries, banks issue specific certificates for foreign remittances, which may be needed for tax benefits on exported services. Store everything by invoice number so each payment can be matched to its invoice quickly.",
      },
      {
        q: "Can I use a free invoice generator for international clients?",
        a: "Yes, for standard PDF invoices. Our generator supports USD, EUR, GBP, INR, AUD, CAD, AED and PKR, and lets you add tax notes such as a reverse charge statement and full bank details. It does not create structured e-invoices, so if your client's country or a large client's system requires a specific e-invoicing format, you will need a compliant e-invoicing provider.",
      },
    ],
    content: `
<h2>Why cross-border invoices are different</h2>
<p>Billing a client in another country adds three questions that domestic invoices rarely raise: which currency to use, whether any tax applies, and how the money will actually reach you. Getting these right up front prevents the most common problems: short payments due to fees, bounced transfers, and tax queries months later.</p>

<h2>1. Agree the currency first</h2>
<p>Decide the invoice currency in your contract. Your options are:</p>
<table><thead><tr><th>Option</th><th>Who carries currency risk</th><th>Good for</th></tr></thead><tbody>
<tr><td>Your home currency</td><td>The client</td><td>Stable pricing for you</td></tr>
<tr><td>Client's currency</td><td>You</td><td>Easier for the client to approve and pay</td></tr>
<tr><td>A major currency (often USD or EUR)</td><td>Shared</td><td>Freelancers billing many countries</td></tr>
</tbody></table>
<p>Whatever you choose, always show the three-letter currency code (USD, EUR, GBP, AED, PKR) rather than just a symbol. "$" could mean US, Canadian, Australian or several other dollars. Our <a href="/invoice-generator">invoice generator</a> supports USD, EUR, GBP, INR, AUD, CAD, AED and PKR.</p>

<h2>2. Handle exchange rates clearly</h2>
<p>If you need to record the invoice in your home currency for tax or accounting, note the exchange rate and its source on the date of the invoice. Some tax systems specify which rate to use. If the client pays in a different currency than invoiced, agree in advance who bears the conversion cost.</p>

<h2>3. Check whether tax applies</h2>
<p>Cross-border tax rules depend on your country, the client's country, whether the client is a business or a consumer, and what you are selling. Some common patterns:</p>
<ul>
<li><strong>Exported services to businesses</strong> are often outside the scope of your local VAT or <a href="/blog/zero-rated-vs-exempt-vat">zero-rated</a>, sometimes with the client accounting for tax under a <em>reverse charge</em>.</li>
<li><strong>Digital services sold to consumers</strong> abroad can create a tax obligation in the customer's country.</li>
<li><strong>Goods</strong> crossing borders involve customs and import duties, usually paid by the importer, and travel with a <a href="/blog/commercial-invoice-template">commercial invoice for customs</a>.</li>
</ul>
<p>If a reverse charge applies, your invoice usually needs the client's tax number and a note such as "Reverse charge: customer to account for VAT". Ask an accountant once and build the answer into your template. See our <a href="/blog/vat-invoice-guide">VAT</a> and <a href="/blog/tax-invoice-guide">tax invoice</a> guides for background.</p>

<h2>4. Give complete international bank details</h2>
<p>Incomplete bank details are the number-one cause of failed international payments. Depending on the country, include:</p>
<ul>
<li>Account holder name exactly as on the account</li>
<li>Bank name and address</li>
<li>IBAN (required in Europe, the Middle East, Pakistan and many other countries)</li>
<li>SWIFT/BIC code</li>
<li>Account number and routing details where IBAN is not used (e.g. ABA routing number in the US)</li>
<li>The invoice number as the payment reference</li>
</ul>
<p>Online payment and money-transfer services can be cheaper and faster than traditional wire transfers. If you accept them, list them on the invoice with the exact account email or ID.</p>

<h2>5. Decide who pays transfer fees</h2>
<p>International transfers can involve sender fees, intermediary bank fees and receiving fees, so you may receive less than you invoiced. Agree in the contract that the client covers sending charges (often written as "OUR" charges on a SWIFT transfer) or build expected fees into your price. State the agreement on the invoice: "All bank charges to be paid by the sender."</p>

<h2>6. Write dates and addresses unambiguously</h2>
<p>"04/05/2026" means 4 May in the UK and April 5 in the US. Write dates as "4 May 2026". Include full addresses with the country name, and use the client's legal entity name. International clients often have regional subsidiaries that pay separately.</p>

<h2>7. Language and format</h2>
<p>English is widely accepted for B2B invoices, but some countries require local-language invoices for tax purposes. If your client asks for a bilingual invoice or specific fields, add them. It's cheaper than a rejected invoice.</p>

<p>For the payment side, compare <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a>. If you are based in Pakistan, see <a href="/blog/receive-payment-from-abroad-pakistan">how to receive payment from abroad in Pakistan</a>.</p>

<h2>Checklist for international invoices</h2>
<ul>
<li>Currency agreed and shown with its three-letter code</li>
<li>Client's legal entity, full address and tax number</li>
<li>Correct tax treatment noted (e.g. reverse charge, zero-rated)</li>
<li>IBAN/SWIFT or equivalent bank details complete</li>
<li>Fee responsibility stated</li>
<li>Dates written in words</li>
</ul>
<p>Country-specific presets are available for <a href="/invoice-generator/usa">the USA</a>, <a href="/invoice-generator/uk">the UK</a>, <a href="/invoice-generator/uae">the UAE</a> and <a href="/invoice-generator/pakistan">Pakistan</a>.</p>
`,
  },
  {
    slug: "po-number-on-invoice",
    title: "What Is a PO Number on an Invoice? (And Why Missing It Delays Payment)",
    description:
      "A purchase order number links your invoice to the buyer's approved purchase. Learn what it is, where to put it, and what to do if a client doesn't give you one.",
    category: "invoicing-basics",
    date: "2026-09-29",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "Is a PO number legally required on an invoice?",
        a: "Generally, no. Tax and invoicing laws rarely require a purchase order number, so it is usually a contractual or procedural requirement set by the buyer. In practice, that can be just as important: many larger organizations will not pay an invoice without a valid PO number. If your client uses purchase orders, treat the PO number as mandatory for that client.",
      },
      {
        q: "What does a PO number usually look like?",
        a: "There is no standard format. PO numbers are generated by the buyer's procurement or accounting system, so they may be purely numeric, include letters, or carry a prefix such as PO- or a department code. Copy the number exactly as it appears on the purchase order, including any leading zeros or prefixes, because a small difference can prevent automatic matching.",
      },
      {
        q: "What is the difference between a purchase order and a quote?",
        a: "A quote is your offer to the buyer, showing what you will supply and at what price. A purchase order is the buyer's formal acceptance and commitment to buy, usually raised after they approve your quote. When the PO is issued, check that its items, quantities, prices and terms match your quote, and raise any differences before you start work.",
      },
      {
        q: "What is a blanket purchase order?",
        a: "A blanket purchase order covers repeated purchases over a set period, often with a maximum value, instead of a new PO for every order. You quote the same PO number on each invoice raised against it. Track how much of the blanket PO you have already billed, because invoices that would take the total over its limit or past its end date are often rejected.",
      },
      {
        q: "Can I start work before I receive a PO number?",
        a: "You can, but it is risky with organizations that use purchase orders. Without a PO, the purchase may not be approved in their system, and your invoice may be held until someone raises one. If the work is urgent, get written confirmation from an authorized person that a PO is coming, and ask for the number before you invoice.",
      },
      {
        q: "What is three-way matching?",
        a: "Three-way matching is a check accounts payable runs before paying: it compares the purchase order, the goods receipt or delivery record, and your invoice. Quantities, prices and items should agree across all three. If you invoice for more than was received or at a different price, the invoice is held. Two-way matching compares only the PO and the invoice.",
      },
      {
        q: "What happens if I put the wrong PO number on an invoice?",
        a: "The invoice will usually fail matching and be rejected or put on hold. Contact accounts payable to ask how they want it fixed. Many will ask you to cancel the original with a credit note and issue a new invoice with the correct PO number. Don't edit and resend the same invoice number with different details, as that confuses both sets of records.",
      },
      {
        q: "Do government clients always require a PO number?",
        a: "Public sector bodies very often use purchase orders and may refuse to pay without one, but requirements vary by country and organization. Many government buyers also require invoices to be submitted through a specific e-invoicing or procurement portal. Ask during onboarding what they need on the invoice and where to send it, and follow their instructions exactly.",
      },
      {
        q: "What is the difference between a supplier number and a PO number?",
        a: "A supplier or vendor number identifies you in the buyer's system and stays the same across all your orders. A PO number identifies one specific approved purchase. Some buyers ask you to show both on every invoice. Your supplier number is usually assigned when you complete their new supplier setup, so ask for it if you haven't received one.",
      },
      {
        q: "Can I split one PO across several invoices?",
        a: "Yes, partial invoicing against one PO is common for phased projects or staggered deliveries. Quote the same PO number on each invoice and describe which part of the order it covers, such as Phase 2 of 3. Make sure the combined total of your invoices never exceeds the PO value, and keep a running record of what has been billed.",
      },
    ],
    content: `
<h2>The short answer</h2>
<p>A PO (purchase order) number is a reference created by the <em>buyer</em> when they approve a purchase. When you put that number on your invoice, the buyer's accounts-payable team can match your invoice to the approved order and pay it. Without it, many organisations cannot process the invoice at all.</p>

<h2>How purchase orders work</h2>
<ol>
<li>The buyer decides to purchase goods or services from you.</li>
<li>Their procurement system issues a purchase order with a unique PO number, listing what is being bought, quantities, prices and terms.</li>
<li>You deliver the goods or complete the work.</li>
<li>You send an invoice quoting the PO number.</li>
<li>Accounts payable matches the invoice to the PO (and often to a delivery receipt) and approves payment.</li>
</ol>
<p>This matching process (often called two-way or three-way matching) is how larger organisations control spending. If your invoice doesn't match the PO, it is held until someone resolves the difference.</p>

<h2>Where to put the PO number</h2>
<p>Put it near the top of the invoice, close to the invoice number and dates, labelled clearly: "PO number: 4500012345". Many templates have a dedicated field for it. Our <a href="/invoice-generator">invoice generator</a> includes a PO number field that appears in the invoice header and on the PDF.</p>
<p>If one invoice covers several purchase orders, list the PO number on each line item instead.</p>

<h2>Invoice number vs PO number</h2>
<table><thead><tr><th></th><th>Invoice number</th><th>PO number</th></tr></thead><tbody>
<tr><td>Created by</td><td>Seller (you)</td><td>Buyer (your client)</td></tr>
<tr><td>Created when</td><td>When you bill</td><td>When the purchase is approved</td></tr>
<tr><td>Purpose</td><td>Identify your invoice</td><td>Identify the buyer's approved order</td></tr>
<tr><td>Required?</td><td>Always</td><td>Only if the buyer uses purchase orders</td></tr>
</tbody></table>
<p>Read more about creating your own numbering scheme in <a href="/blog/invoice-numbering-system">invoice numbering</a>.</p>

<h2>Making your invoice match the PO</h2>
<ul>
<li>Use the same item descriptions as the PO wherever possible.</li>
<li>Bill the same quantities and unit prices. If something changed, ask the client to amend the PO <em>before</em> invoicing.</li>
<li>Don't invoice more than the PO value. The excess will usually be rejected.</li>
<li>Bill the legal entity named on the PO, not the person who emailed you.</li>
<li>Send the invoice to the address the PO specifies, which is often a central accounts-payable inbox.</li>
</ul>

<h2>What if the client doesn't give you a PO number?</h2>
<p>Ask at the start of the project: "Will you be issuing a purchase order for this work?" Small businesses and individuals usually don't use POs, and that's fine: leave the field blank. But if a larger organisation hasn't given you one, it often means the purchase hasn't been approved in their system yet. Chasing the PO before you start work is far easier than chasing payment afterwards.</p>

<h2>Common PO problems</h2>
<ul>
<li><strong>Expired PO.</strong> Some POs cover a fixed period or amount. For long projects, check that the PO still has funds before invoicing.</li>
<li><strong>Typos.</strong> One wrong digit means no match. Copy and paste the number rather than retyping it.</li>
<li><strong>Multiple POs.</strong> Never combine work from different POs into one line.</li>
</ul>
<p>Missing references are one of the most frequent reasons invoices are rejected; see <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> for the others.</p>
`,
  },
  {
    slug: "construction-invoice-guide",
    title: "Construction & Contractor Invoices: Progress Billing, Retainage and Materials",
    description:
      "How contractors and tradespeople should invoice: deposits, progress payments, retainage, materials and labour lines, change orders and final invoices.",
    category: "guides",
    date: "2026-09-26",
    author: "Invoice Creator Editorial Team",
    related: ["architect-invoice-template"],
    faqs: [
      {
        q: "What is an AIA G702 pay application?",
        a: "The AIA G702 is a standard Application and Certificate for Payment form used on many US commercial construction projects, usually paired with the G703 continuation sheet. Together they show the contract sum, work completed to date, stored materials, retainage and the amount due. If your contract calls for AIA forms, a simple invoice may not be accepted on its own.",
      },
      {
        q: "What is a lien waiver and when do I need one?",
        a: "In the US, a lien waiver is a document in which a contractor or supplier gives up some or all of their right to file a mechanics lien, usually in exchange for payment. Conditional waivers take effect only once payment clears, while unconditional waivers take effect immediately. Some states require specific statutory forms, so check your state's rules before signing.",
      },
      {
        q: "What is a schedule of values?",
        a: "A schedule of values breaks the total contract price into line items, such as site work, foundations, framing and electrical, each with its own value. It is agreed at the start of the job and used to calculate progress billing, because each invoice claims the percentage completed on each line. A clear schedule makes progress invoices faster to approve.",
      },
      {
        q: "Can I invoice for materials stored on site but not yet installed?",
        a: "Sometimes. Many commercial contracts allow you to bill for materials delivered and stored on site, or in an approved off-site location, before installation. The client usually asks for supplier invoices, proof of delivery and insurance. Check your contract before billing, and list stored materials on their own line so they are not confused with completed work.",
      },
      {
        q: "How does the Construction Industry Scheme affect my invoices in the UK?",
        a: "Under CIS, contractors deduct money from subcontractors' payments and pass it to HMRC: 20% for registered subcontractors, 30% for unregistered ones, or nothing if you hold gross payment status. Deductions apply to labour, not to materials, so show labour and materials separately on your invoice. The contractor should give you a statement showing what was deducted.",
      },
      {
        q: "What is the UK VAT domestic reverse charge for construction?",
        a: "Since 1 March 2021, many supplies of construction services between VAT and CIS registered businesses use the domestic reverse charge. The subcontractor's invoice shows the VAT rate and amount that would apply but does not add it to the total, and states that the customer must account for the VAT to HMRC. It does not apply to end users, so check HMRC guidance.",
      },
      {
        q: "Is there a limit on how much deposit a contractor can take?",
        a: "In some places, yes. Several US states limit deposits on home improvement contracts. California, for example, generally caps the down payment at 10% of the contract price or $1,000, whichever is less. Commercial work and other countries often have no fixed cap, so the contract governs. Check your state or local licensing rules before setting deposit terms.",
      },
      {
        q: "What is the difference between retainage and a deposit?",
        a: "A deposit is money the client pays you before work starts, while retainage is money the client holds back from your progress payments until the job is finished. A deposit improves your cash flow, and retainage delays part of it. Show them differently: deduct the deposit from later invoices as a payment received, and show retainage as a held amount you will invoice for release.",
      },
      {
        q: "How do I invoice a time and materials job compared with a fixed-price job?",
        a: "On a time and materials job, bill labour hours at the agreed rates plus materials at cost or with an agreed markup, ideally with timesheets and receipts. On a fixed-price job, bill agreed milestones or percentages of the contract value, regardless of hours spent. Some contracts set a not-to-exceed cap on time and materials work, so track costs against it.",
      },
      {
        q: "How long can a client hold retainage?",
        a: "It depends on the contract and local law. Retainage is usually released at substantial completion or after a defects period, often in two stages. Many US states have prompt payment laws that limit the retainage percentage on some projects or require release within a set time. In the UK, retention terms are mainly set by the contract, so read the release conditions before signing.",
      },
    ],
    content: `
<h2>Why construction invoicing is different</h2>
<p>Construction and trade jobs often run for weeks or months, involve large material costs up front, and change as work progresses. A single invoice at the end would leave the contractor financing the whole job. Instead, the industry uses deposits, progress billing and, on larger projects, retainage. Clear invoices protect your cash flow and reduce disputes with clients and main contractors.</p>

<h2>Common invoice types on a job</h2>
<table><thead><tr><th>Invoice</th><th>When</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Deposit</td><td>Before work starts</td><td>Secure the booking; fund materials</td></tr>
<tr><td>Progress invoice</td><td>At milestones or monthly</td><td>Bill for work completed to date</td></tr>
<tr><td>Change order invoice</td><td>When scope changes</td><td>Bill for agreed extra work</td></tr>
<tr><td>Final invoice</td><td>At practical completion</td><td>Bill the remaining balance</td></tr>
<tr><td>Retainage release</td><td>After the retention period</td><td>Collect amounts held back</td></tr>
</tbody></table>

<h2>Separating labour and materials</h2>
<p>Show labour and materials as separate lines. Clients understand the job better, tax treatment can differ between them in some places, and it is much easier to justify price changes if material costs rise. For example:</p>
<ul>
<li>"Labour: kitchen tiling, 2 tilers × 3 days"</li>
<li>"Materials: porcelain tiles 24 m², adhesive and grout (receipts attached)"</li>
<li>"Skip hire: 1 week"</li>
</ul>
<p>If you add a markup to materials, be consistent and make sure your contract allows it.</p>

<h2>Progress billing</h2>
<p>Progress billing means invoicing for the portion of work completed so far. There are two common methods:</p>
<ul>
<li><strong>Milestone billing:</strong> a fixed amount when each stage is complete, for example 30% at foundations, 30% at roof, 30% at first fix, 10% at completion.</li>
<li><strong>Percentage of completion:</strong> each month you bill the percentage of each contract item completed, minus what was billed before.</li>
</ul>
<p>Each progress invoice should show the contract value, amount completed to date, amounts previously invoiced, and the amount due now. This "running total" format lets the client check the maths instantly.</p>

<h2>Retainage (retention)</h2>
<p>On many commercial projects, the client holds back a percentage of each payment (often around 5% to 10%) until the job is finished and any defects are fixed. This is called retainage in the US and retention in the UK. Show it clearly on every progress invoice:</p>
<table><thead><tr><th>Line</th><th>Amount</th></tr></thead><tbody>
<tr><td>Work completed this period</td><td>20,000.00</td></tr>
<tr><td>Less retainage (5%)</td><td>−1,000.00</td></tr>
<tr><td><strong>Amount due this invoice</strong></td><td><strong>19,000.00</strong></td></tr>
</tbody></table>
<p>Keep a running total of retainage held, and invoice for its release when the contract allows. Rules on retention and payment timing vary by country and state, so check the contract and local law.</p>

<h2>Change orders</h2>
<p>Never start extra work on a verbal request alone. Get a written change order with a description and price, then invoice it as a separate, referenced line: "Change order #3: additional socket outlets ×6, approved 12 Sep". Unapproved extras are the most common source of construction payment disputes.</p>

<h2>What every contractor invoice should include</h2>
<ul>
<li>Your business name, address, licence or registration number where applicable</li>
<li>Client name and the site address (not just the billing address)</li>
<li>Job or contract reference and PO number if provided (see <a href="/blog/po-number-on-invoice">PO numbers</a>)</li>
<li>Invoice number, date and due date</li>
<li>Itemised labour, materials and other costs</li>
<li>Tax as required in your jurisdiction</li>
<li>Retainage, previous payments and balance due</li>
<li>Payment terms and bank details</li>
</ul>

<p>For trade-specific layouts, see the <a href="/blog/roofing-invoice-template">roofing invoice template</a> and the <a href="/blog/painting-invoice-template">painting invoice template</a>.</p>

<h2>Tips for getting paid on site work</h2>
<ul>
<li>Take a deposit before ordering custom materials.</li>
<li>Invoice the same day each milestone is reached.</li>
<li>Attach photos of completed work for remote clients.</li>
<li>Keep signed change orders with each invoice.</li>
<li>Use <a href="/blog/payment-reminder-emails">reminder templates</a> as soon as a payment is late.</li>
</ul>
<p>Our <a href="/invoice-generator">invoice generator</a> handles deposits through the "amount paid" field and supports shipping or other extra charges, so the balance due is always calculated for you. For a structured, formal look, try the <a href="/invoice-templates/corporate">Corporate</a> or <a href="/invoice-templates/classic">Classic</a> templates.</p>
`,
  },
  {
    slug: "invoice-vs-bill",
    title: "Invoice vs Bill: Is There a Difference?",
    description:
      "Invoice and bill often describe the same document from different sides. Learn when each word is used, how accountants treat them, and how they relate to receipts and statements.",
    category: "comparisons",
    date: "2026-09-24",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "Is a bill the same as a receipt?",
        a: "No. A bill asks for payment, while a receipt confirms that payment has been made. At a restaurant, you get the bill first, pay it, and may then get a receipt. In business, the invoice or bill comes before payment and the receipt follows it. Keep both, because the receipt is your proof that the bill was paid.",
      },
      {
        q: "Is a bill of sale the same as a bill?",
        a: "No. A bill of sale is a document that transfers ownership of an item, such as a vehicle, boat or equipment, from seller to buyer. It records the transaction and the price but does not request payment like an invoice does. You might issue both: an invoice to request payment, and a bill of sale to record the change of ownership.",
      },
      {
        q: "What is a bill of lading?",
        a: "A bill of lading is a shipping document issued by a carrier when it receives goods for transport. It acts as a receipt for the goods, sets out the terms of carriage and, in some forms, serves as a document of title. Despite the name, it is not a request for payment. International shipments often need a bill of lading and a commercial invoice.",
      },
      {
        q: "What is the difference between billing and invoicing?",
        a: "The terms overlap, but invoicing usually means creating and sending invoices, while billing describes the whole process of charging customers, including pricing, issuing invoices or bills, taking payments and following up. A billing system might also handle subscriptions and card payments. For a small business, the core task is the same: send a clear, accurate request for payment.",
      },
      {
        q: "How do I record a bill I receive in my accounts?",
        a: "Enter it as a bill or supplier invoice in accounts payable, with the supplier, date, amount, tax and due date. That records what you owe and can let you reclaim eligible tax. When you pay, record the payment against that bill so it shows as settled. Keep the original document as your evidence for the expense.",
      },
      {
        q: "Should I pay from a statement or from the invoice?",
        a: "Pay from the invoices. A statement summarizes every invoice, payment and credit on your account over a period, so it is useful for spotting missing or unpaid items, but it is not usually a request for a new payment. Paying from a statement can lead to paying an invoice twice. Match each payment to an invoice number.",
      },
      {
        q: "Is a utility bill an invoice?",
        a: "Functionally, yes: a utility bill is a request for payment for services you used, just called a bill in everyday language. Whether it can support a business tax claim depends on what it shows. For VAT, for example, it generally needs the supplier's details and VAT number, and should be addressed to your business. Check your tax authority's rules.",
      },
      {
        q: "What is a debit note and how does it relate to a bill?",
        a: "A debit note is a document that adjusts an amount owed, typically to increase it. A seller may issue one to charge for something left off the original invoice, and in some countries a buyer issues one to request a reduction, for example for returned goods. It references the original invoice or bill rather than replacing it.",
      },
      {
        q: "Is a bill or invoice legally binding?",
        a: "On its own, an invoice or bill is usually evidence of a debt rather than the source of it. The obligation to pay generally comes from the agreement between the parties, such as a contract, an accepted quote or the order itself. A clear invoice that matches what was agreed makes the debt much easier to prove if you ever need to recover it.",
      },
      {
        q: "What do Bill To and Ship To mean on an invoice?",
        a: "Bill To is the customer responsible for paying, usually the legal entity named in the contract or purchase order. Ship To is where the goods are delivered, which can be a warehouse, site or different branch. They are often different for larger companies. Getting the Bill To details right is especially important, because invoices addressed to the wrong entity are often rejected.",
      },
    ],
    content: `
<h2>The short answer</h2>
<p>An invoice and a bill are usually the <strong>same document seen from opposite sides</strong>. The seller sends an <em>invoice</em> to request payment. The buyer receives it and records it as a <em>bill</em> to pay. In accounting software, "invoices" are money coming in (accounts receivable) and "bills" are money going out (accounts payable).</p>

<h2>How the words are used in practice</h2>
<table><thead><tr><th></th><th>Invoice</th><th>Bill</th></tr></thead><tbody>
<tr><td>Point of view</td><td>Seller's</td><td>Buyer's</td></tr>
<tr><td>Accounting side</td><td>Accounts receivable</td><td>Accounts payable</td></tr>
<tr><td>Typical setting</td><td>B2B services and goods on credit</td><td>Utilities, restaurants, consumer services</td></tr>
<tr><td>Payment timing</td><td>Often on terms (e.g. Net 14)</td><td>Often immediate or by a fixed date</td></tr>
<tr><td>Level of detail</td><td>Itemised, with tax and references</td><td>Can be brief (e.g. a restaurant bill)</td></tr>
</tbody></table>
<p>In everyday speech, "bill" is more common for consumer situations: a phone bill, an electricity bill, the bill at a restaurant. "Invoice" is the standard term between businesses. Both are requests for payment.</p>

<h2>Regional differences</h2>
<p>Usage varies by country. In some places, "bill" is used for almost any request for payment, including business invoices; in others, "invoice" is preferred in all commercial settings. Tax law usually uses specific terms such as "tax invoice" or "VAT invoice", and those documents have defined content requirements. See our <a href="/blog/tax-invoice-guide">tax invoice guide</a>.</p>

<h2>How they relate to other documents</h2>
<ul>
<li><strong>Quote or estimate</strong>: comes before the sale; an offer, not a request for payment. See <a href="/blog/invoice-vs-quotation">invoice vs quotation</a> and <a href="/blog/invoice-vs-estimate">invoice vs estimate</a>.</li>
<li><strong>Invoice / bill</strong>: requests payment after (or at) the sale.</li>
<li><strong>Receipt</strong>: confirms payment was made. See <a href="/blog/invoice-vs-receipt">invoice vs receipt</a>.</li>
<li><strong>Statement</strong>: summarises all invoices and payments on an account over a period.</li>
<li><strong>Credit note</strong>: reduces an invoice already issued. See our <a href="/blog/credit-note-guide">credit note guide</a>.</li>
</ul>

<h2>Which word should you use?</h2>
<p>If you run a business and sell to other businesses, title your document <strong>"Invoice"</strong> (or "Tax Invoice" / "VAT Invoice" where your registration requires it). Accounts-payable teams look for that word, and it signals a formal commercial document with a number, date and payment terms. Using "bill" on a B2B document isn't wrong, but it can look informal.</p>
<p>If you run a consumer business (a restaurant, salon or repair shop), "bill" is natural at the point of sale, though you may still need to issue a tax-compliant invoice or receipt depending on local rules.</p>

<p>For a ready-to-copy layout for shops and small services, see our <a href="/blog/bill-format">simple bill format</a> guide.</p>

<h2>What both should contain</h2>
<ul>
<li>Seller's name and contact details</li>
<li>Buyer's name (for business transactions)</li>
<li>A unique number and the date</li>
<li>What was supplied, with quantities and prices</li>
<li>Taxes, discounts and the total due</li>
<li>When and how to pay</li>
</ul>
<p>For a full checklist, read <a href="/blog/what-is-an-invoice">what is an invoice</a>, then create one with our <a href="/invoice-generator">free invoice generator</a>.</p>
`,
  },
  {
    slug: "how-to-get-paid-faster",
    title: "How to Get Paid Faster: 12 Proven Tactics for Small Businesses",
    description:
      "Practical, low-friction ways to shorten the time between finishing work and money landing in your account, from contract terms to invoice layout to follow-up rhythm.",
    category: "guides",
    date: "2026-09-22",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "How do I calculate days sales outstanding (DSO)?",
        a: "Divide your accounts receivable at the end of a period by your credit sales for that period, then multiply by the number of days in it. For example, 15,000 outstanding against 30,000 of sales in a 30-day month gives a DSO of 15 days. Compare your DSO with your own payment terms and track it monthly to see the trend.",
      },
      {
        q: "Does offering more payment methods help me get paid faster?",
        a: "Usually, yes, because every option you add removes an excuse to delay. Bank transfer suits most business clients, while a card or online payment link helps smaller clients pay the moment they open the invoice. Card and online payments often carry fees, so decide whether to absorb them or build them into your prices, and check local rules on surcharging.",
      },
      {
        q: "Can I invoice before the work is finished?",
        a: "Yes, if your contract allows it. Common approaches are deposits before work starts, milestone invoices as each stage is completed, and retainers billed at the start of each month. Billing in stages means you are never owed for a whole project at once. Agree the schedule up front so each invoice is expected rather than a surprise.",
      },
      {
        q: "What day is best to send an invoice?",
        a: "There is no reliable universal best day. What matters more is sending it as soon as the work is delivered and before the client's next payment run. Ask your client's accounts team when they pay suppliers, for example weekly on Thursdays or at month end, and make sure your invoice arrives, approved, before that cut-off.",
      },
      {
        q: "Is it okay to phone a client about an overdue invoice?",
        a: "Yes. A short, friendly call often resolves in minutes what several emails have not, because you can find out whether the invoice was received, approved or is stuck. Have the invoice number, amount and due date ready, ask when payment is scheduled, and follow up with an email confirming what was agreed so you have a written record.",
      },
      {
        q: "What is invoice factoring and can it help me get paid faster?",
        a: "Invoice factoring means selling your unpaid invoices to a finance company for an advance on their value, minus a fee. You get cash quickly, and the factor collects from your client, or in some arrangements you still collect. It can help cash flow, but fees reduce your margin and clients may be told. Compare costs carefully before signing.",
      },
      {
        q: "Can I stop work if a client hasn't paid?",
        a: "Often, if your contract allows you to suspend work for non-payment. Give the client clear written notice with the overdue amount and the date work will pause. Without a suspension clause, stopping could put you in breach, so check your contract first, and in some industries, such as construction in certain countries, there are specific statutory rules on suspension.",
      },
      {
        q: "How can I get paid faster by large companies with long payment terms?",
        a: "Negotiate terms before you sign, because large companies sometimes agree shorter terms for small suppliers when asked. Complete their supplier setup early, follow their invoicing rules exactly and submit invoices on the first possible day. Some large buyers also offer early payment programs in exchange for a small discount. Weigh the cost against the value of having cash sooner.",
      },
      {
        q: "Should I use automated payment reminders?",
        a: "Automated reminders help because they go out on schedule without you having to remember or feel awkward. Accounting and billing software can usually send them for you. Our invoice generator creates PDF invoices but does not send emails or reminders, so if you use it, set calendar reminders for each due date and send your follow-ups from your own email.",
      },
      {
        q: "What should I do when a client says the invoice is in process?",
        a: "Ask for specifics politely: the expected payment date, which payment run it is in, and whether anything is missing, such as a PO number or supplier details. Note the date they give you and follow up the day after if the money has not arrived. Asking for the accounts payable contact's name also helps you avoid starting over each time.",
      },
    ],
    content: `
<h2>Why payment speed matters more than price</h2>
<p>A business can be profitable on paper and still run out of cash. The gap between delivering work and receiving payment, often called days sales outstanding (DSO), is the single number that decides whether you can pay rent, suppliers and yourself on time. Cutting an average payment cycle from 45 days to 20 days is the equivalent of an interest-free loan worth almost a month of revenue.</p>
<p>Most late payments are not malicious. They happen because an invoice was unclear, arrived at the wrong inbox, missed a payment run, or required a question nobody had time to ask. Every tactic below removes one of those frictions.</p>

<h2>Before the work starts</h2>
<h3>1. Agree payment terms in writing</h3>
<p>Put the terms in the proposal or contract the client signs: the due period (for example Net 14), accepted payment methods, the currency, and what happens if payment is late. When terms are agreed up front, the invoice simply restates them, so there is nothing to negotiate later. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains the common options.</p>
<h3>2. Ask how the client pays suppliers</h3>
<p>One question at kickoff saves weeks later: "What do you need on an invoice to approve it, and where should I send it?" Larger organisations often need a purchase-order number, a supplier registration form, a specific accounts-payable email address, or a vendor portal upload. Missing any one of these can mean your invoice is never even seen by the person who pays it.</p>
<h3>3. Take a deposit on larger jobs</h3>
<p>For projects longer than a few weeks, request 25–50% up front. A deposit filters out clients who were never going to pay, funds your materials and time, and makes the final invoice smaller and easier to approve. Issue the deposit as its own clearly labelled invoice.</p>

<h2>When you issue the invoice</h2>
<h3>4. Invoice immediately</h3>
<p>Send the invoice the day the work is delivered or the milestone is reached. Waiting until the end of the month adds up to 30 days to every payment for no reason. If you invoice on a schedule, pick a fixed day and stick to it so clients can plan.</p>
<h3>5. Use short, specific due dates</h3>
<p>"Due 14 March 2026" is clearer than "Net 30": the client does not have to calculate anything. Many small businesses find Net 14 is accepted without pushback, especially when it was agreed in the contract.</p>
<h3>6. Write line items a stranger can approve</h3>
<p>The person who approves your invoice is often not the person who hired you. "Website work: £2,400" invites a query. "Homepage redesign, 3 templates, delivered 2 March (PO 4471): £2,400" gets approved. See our <a href="/blog/invoice-examples">invoice examples</a> for well-written descriptions.</p>
<h3>7. Make paying effortless</h3>
<p>Print full bank details, a payment link, or both, in a clearly separated block. Include the invoice number as the payment reference so you can match the transfer. Every extra step (logging in somewhere, requesting bank details by email) is a chance for the invoice to slip to next week.</p>
<h3>8. Send a PDF, not an editable file</h3>
<p>A PDF looks the same on every device, cannot be accidentally edited, and is what accounts-payable systems expect. You can create one in under two minutes with our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>After the invoice is sent</h2>
<h3>9. Confirm receipt</h3>
<p>For first invoices or large amounts, a short message ("Just checking invoice 2026-0041 reached the right person") catches wrong-inbox problems while there is still time before the due date.</p>
<h3>10. Follow a reminder schedule</h3>
<p>Decide your reminder rhythm once and apply it to every client: a polite note a few days before the due date, another on the due date, then at 7, 14 and 30 days overdue. Consistency removes the awkwardness because it is simply your process. Copy-ready wording is in our <a href="/blog/payment-reminder-emails">payment reminder email templates</a>.</p>
<h3>11. State late-payment terms, and apply them consistently</h3>
<p>A clearly stated late fee or interest charge encourages clients to prioritise your invoice. You do not have to enforce it every time, but if you never mention it, clients learn your invoices can wait. Read <a href="/blog/late-payment-fees">how to charge late payment fees</a> before adding one.</p>
<h3>12. Offer an early-payment incentive (selectively)</h3>
<p>Terms such as "2/10 Net 30" (a 2% discount if paid within 10 days) can work well with clients who have healthy cash flow. Calculate the cost first: a 2% discount to be paid 20 days earlier is expensive money, so reserve it for situations where cash now is worth it.</p>

<h2>Track the right numbers</h2>
<p>Keep a simple list of every open invoice with its issue date, due date, and status. Once a month, look at three figures: total outstanding, the amount more than 30 days overdue, and which clients are consistently late. Those clients may need shorter terms, deposits, or a conversation.</p>
<table><thead><tr><th>Signal</th><th>What it usually means</th><th>Action</th></tr></thead><tbody>
<tr><td>Invoices queried often</td><td>Line items are unclear</td><td>Rewrite descriptions; add PO and dates</td></tr>
<tr><td>Paid exactly at the due date</td><td>Client pays on a fixed run</td><td>Ask which day the run happens and invoice before it</td></tr>
<tr><td>Same client always late</td><td>Low priority or cash-flow trouble</td><td>Require deposits; shorten terms</td></tr>
<tr><td>Invoices "never received"</td><td>Wrong recipient</td><td>Confirm the AP address; copy your contact</td></tr>
</tbody></table>

<h2>A quick checklist</h2>
<ul>
<li>Payment terms agreed in writing before work starts</li>
<li>PO number and correct billing entity on the invoice</li>
<li>Specific due date, not just a term</li>
<li>Bank details and invoice number as the payment reference</li>
<li>PDF sent to the right accounts-payable address on delivery day</li>
<li>Reminders scheduled before you need them</li>
</ul>
<p>None of these tactics requires expensive software. A clear, consistent invoice and a polite follow-up process solve most payment delays. Start with your next invoice in the <a href="/invoice-generator">invoice generator</a>.</p>
`,
  },
  {
    slug: "late-payment-fees",
    title: "How to Charge Late Payment Fees on Invoices (Without Losing Clients)",
    description:
      "When late fees are appropriate, how to calculate them, the wording to put on your invoice, and how to apply them fairly while keeping good client relationships.",
    category: "invoicing-basics",
    date: "2026-09-15",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    faqs: [
      {
        q: "What is the statutory late payment interest rate in the UK?",
        a: "For business-to-business debts in the UK, statutory interest is 8 percentage points above the Bank of England base rate, charged as simple interest. You can also claim fixed compensation per invoice: £40 for debts under £1,000, £70 for £1,000 to £9,999.99 and £100 for £10,000 or more. It does not apply to consumers. Check GOV.UK for the reference rate.",
      },
      {
        q: "What does the EU Late Payment Directive allow businesses to charge?",
        a: "The EU Late Payment Directive sets minimum standards for commercial transactions: statutory interest of at least 8 percentage points above the European Central Bank reference rate, plus a minimum fixed sum of €40 for recovery costs. Each member state applies it through its own national law, so rates, calculation rules and payment periods differ. Check the rules in your country.",
      },
      {
        q: "Are late payment fees legal in the US?",
        a: "Generally, yes, if they were agreed in advance and are reasonable, but there is no single national rule. States set their own limits on interest rates and fees, and consumer transactions face stricter rules than business ones. A fee that exceeds a state's limit may be unenforceable. Check your state's law, or ask an attorney, before setting your late fee.",
      },
      {
        q: "Can I charge late fees to consumers?",
        a: "Sometimes, but consumer customers usually have much stronger legal protection than businesses. The fee typically must be disclosed clearly before the sale, agreed by the customer and kept reasonable, and many places cap it or ban certain charges. Statutory late payment interest schemes, such as the UK's, normally cover only business debts. Check consumer protection rules before charging.",
      },
      {
        q: "Do I charge VAT on a late payment fee?",
        a: "In the UK, HMRC generally treats late payment interest and compensation as outside the scope of VAT, because they compensate for delay rather than pay for a supply, so VAT is usually not added. Other countries may treat certain administrative fees differently. Check your tax authority's guidance, and show any late fee as a clearly labeled separate line.",
      },
      {
        q: "What is a reasonable late payment fee?",
        a: "A reasonable fee reflects your genuine cost of waiting and chasing, not a penalty. Many businesses use modest monthly interest on the overdue balance, such as 1% to 1.5%, or a small flat fee per overdue invoice. Whatever you choose, check any legal maximum where you operate, write it into your terms before work starts, and apply the same rate to every client.",
      },
      {
        q: "Should late payment interest be simple or compound?",
        a: "Simple interest is easier to explain, easier to check and less likely to be disputed, and statutory schemes such as the UK's use simple interest. Compound interest, where interest is charged on unpaid interest, can quickly look excessive and may be restricted by law in some places. Unless your contract and local law clearly allow compounding, use simple interest.",
      },
      {
        q: "When should a late payment fee start?",
        a: "Interest usually starts the day after the due date, which is why a specific due date on the invoice matters. Some businesses add a short grace period, such as seven days, before applying a fee. If you offer one, write it into your terms so clients know exactly when the fee applies, and apply the same grace period to everyone.",
      },
      {
        q: "How do I record late payment fees in my books?",
        a: "Record the fee as separate income, often under interest or other income, when you invoice it, rather than changing the original sale. Keep it linked to the overdue invoice in your records. If the client never pays the fee, or you waive it, record that too, so your accounts receivable shows only what you genuinely expect to collect.",
      },
      {
        q: "What should I do if a client refuses to pay a late fee?",
        a: "Decide what matters most. Usually the priority is collecting the original amount, so you might waive the fee in exchange for prompt payment of the balance. If the fee was clearly agreed and the amount is worth pursuing, you can include it in a formal demand or small claims action. Keep every message factual and refer to your agreed terms.",
      },
    ],
    content: `
<p><strong>Important:</strong> Rules on late-payment interest and fees differ by country, by state and by whether you sell to businesses or consumers. This article is general information, not legal advice. Check the rules that apply to you, or ask a qualified professional, before charging fees.</p>

<h2>What a late payment fee is</h2>
<p>A late payment fee is an extra charge added when a client pays after the agreed due date. It usually takes one of two forms: a <strong>flat fee</strong> (for example a fixed amount per overdue invoice) or <strong>interest</strong> (a percentage of the outstanding balance, charged monthly or annually until payment arrives).</p>
<p>The purpose is not to earn extra money. It compensates you for the cost of waiting (borrowing, missed opportunities, and the admin time spent chasing), and it gives clients a reason to put your invoice ahead of others in the queue.</p>

<h2>The golden rule: agree it before the work</h2>
<p>A fee that appears for the first time on an overdue invoice is hard to enforce and damages trust. The fee should be written into your contract, proposal, or terms of business that the client accepted before you started. The invoice then simply reminds them of what was already agreed.</p>
<p>In some places, the law gives businesses a right to claim interest on late commercial payments even if the contract is silent. For example, the UK has statutory late-payment interest for business-to-business debts, and the EU has a Late Payment Directive setting standards for commercial transactions. Many other jurisdictions have their own rules, and consumer sales are usually much more tightly regulated. Always check locally.</p>

<h2>Flat fee or interest?</h2>
<table><thead><tr><th>Approach</th><th>Works well for</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>Flat fee</td><td>Small invoices, simple to explain</td><td>Can look disproportionate on very small amounts</td></tr>
<tr><td>Monthly interest (e.g. 1–1.5%)</td><td>Larger B2B invoices, long delays</td><td>Must stay within any legal maximum rate</td></tr>
<tr><td>Statutory interest</td><td>B2B where local law provides it</td><td>Specific calculation rules apply</td></tr>
</tbody></table>
<p>Whatever you choose, keep it reasonable. A fee that looks like a penalty rather than compensation invites disputes and, in some jurisdictions, may be unenforceable.</p>

<h2>How to calculate simple monthly interest</h2>
<p>Suppose an invoice for 2,000 is 45 days overdue and your terms state 1.5% per month on overdue balances.</p>
<ul>
<li>Monthly rate: 1.5% of 2,000 = 30</li>
<li>Daily equivalent: 30 ÷ 30 days = 1 per day</li>
<li>Interest for 45 days: 45 × 1 = 45</li>
</ul>
<p>Always show the calculation when you add it to an invoice. Transparent maths is far less likely to be challenged than a single unexplained number.</p>

<h2>Wording to put on your invoice</h2>
<p>Place a short statement in the terms or notes section of every invoice, not only overdue ones:</p>
<ul>
<li>"Payment is due within 14 days of the invoice date. Overdue balances incur interest at 1.5% per month, as set out in our terms of business."</li>
<li>"A late fee of [amount] applies to invoices unpaid 30 days after the due date."</li>
<li>"We reserve the right to charge statutory interest and compensation on late payments."</li>
</ul>
<p>Our <a href="/invoice-generator">invoice generator</a> includes a terms field where you can add this wording to every invoice.</p>

<h2>How to apply a fee in practice</h2>
<ol>
<li><strong>Send reminders first.</strong> Most late payments are fixed by a polite reminder. See our <a href="/blog/payment-reminder-emails">payment reminder templates</a>.</li>
<li><strong>Give notice.</strong> Before adding the fee, tell the client: "As per our terms, a late fee will be added if payment is not received by [date]."</li>
<li><strong>Issue a separate invoice or a clear line.</strong> Add a line such as "Late payment interest on invoice 2026-0041 (45 days at 1.5%/month)". Do not silently change the original invoice. It is an accounting record.</li>
<li><strong>Be consistent.</strong> Applying fees to some clients and not others makes the policy look arbitrary.</li>
</ol>

<h2>When to waive it</h2>
<p>Waiving a fee can be a smart relationship move: a long-standing client with a one-off delay, a genuine banking error, or a client who contacted you before the due date to explain. Say so explicitly ("We've waived the late fee on this occasion") so the client knows the policy exists and that you are being generous.</p>
<p>Repeated lateness is a different matter. For clients who are regularly late, shortening payment terms or requiring deposits is often more effective than fees.</p>

<h2>Common mistakes</h2>
<ul>
<li>Introducing a fee only after the invoice is overdue</li>
<li>Charging a rate above the legal maximum where one applies</li>
<li>Editing the original invoice total instead of issuing a separate charge</li>
<li>Threatening fees in an angry tone: keep every message factual and calm</li>
<li>Forgetting that consumer customers often have stronger legal protections than businesses</li>
</ul>

<h2>The bigger picture</h2>
<p>Late fees are a backstop, not a strategy. The fastest payments come from clear invoices, agreed terms and consistent follow-up, covered in <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>. A well-structured invoice from our <a href="/invoice-templates">templates</a> gives you the best chance of never needing to charge a fee at all.</p>
`,
  },
  {
    slug: "invoice-numbering-system",
    title: "Invoice Numbering: How to Build a System That Never Breaks",
    description:
      "Formats, examples and rules for invoice numbers that stay unique, sequential and audit-friendly, including multiple businesses, voided invoices and switching software.",
    category: "guides",
    date: "2026-09-08",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "Can my first invoice number start somewhere other than 0001?",
        a: "Usually, yes. Many businesses start at a higher number, such as 1001, or use a year-based format like 2026-0001. What matters is that each number is unique and the sequence continues in order from wherever you start. Record your starting number in your invoice log so anyone checking your records understands the series. Check local rules if your country prescribes a format.",
      },
      {
        q: "Should my invoice numbers restart every year?",
        a: "If the year is part of the number, such as 2026-0001 followed by 2027-0001, restarting each year keeps numbers unique because the year prefix differs. Many tax systems accept this. Some countries prefer one continuous series or tie numbering to the financial year, so check your local rules. Without a year prefix, never restart, or you will create duplicates.",
      },
      {
        q: "Can I use the date as my invoice number?",
        a: "You can, for example 20261024, but add a sequence suffix such as 20261024-01 in case you issue more than one invoice on the same day. Date-based numbers are unique and sort well, but they make gaps harder to spot because the numbers jump. If your tax authority expects a continuous sequence, a year plus sequence format is usually safer.",
      },
      {
        q: "Do invoice numbers have to be consecutive by law?",
        a: "In many countries, yes. EU VAT rules require a sequential number based on one or more series that uniquely identifies each invoice. India's GST rules require a consecutive serial number of up to 16 characters, unique for each financial year. Elsewhere the rule may simply be that numbers are unique. Check your tax authority's requirements before choosing a format.",
      },
      {
        q: "Can I use letters and symbols in invoice numbers?",
        a: "Letters and hyphens are widely used, for example INV-2026-0041. Avoid characters such as spaces, slashes or symbols that break file names or bank payment references, and keep the number short enough to fit a bank reference field. Some countries limit the characters allowed: India's GST rules, for example, allow only letters, numbers, hyphens and slashes.",
      },
      {
        q: "How do I number deposit and final invoices for the same project?",
        a: "Give each invoice its own number from your normal sequence, even when they belong to one project. For example, the deposit invoice might be INV-2026-0040 and the final invoice INV-2026-0047. On the final invoice, reference the deposit invoice and deduct the amount already paid. Suffixes such as 0040-A can confuse sequences and some tax systems, so avoid them.",
      },
      {
        q: "How do I keep my numbering consistent if I use more than one tool?",
        a: "Choose one master record of issued numbers, such as a spreadsheet or your accounting software, and check it before creating every invoice. Our invoice generator lets you type any invoice number, but it does not track your sequence across devices or tools, so the master log is what keeps numbers unique. Note the source tool beside each entry.",
      },
      {
        q: "What should I do if I sent two invoices with the same number?",
        a: "Fix it as soon as you notice. Keep the first invoice as issued, cancel the second with a credit note, and reissue that work on a new invoice with the next available number. Tell the affected client what happened and which number to pay against. Record the correction in your log so the duplicate is explained in any audit.",
      },
      {
        q: "Can invoice numbers be random?",
        a: "Random numbers, such as A7X29Q, are unique but not sequential, so they fail rules that require a continuous series and make it impossible to spot missing invoices. Clients and accountants also find them harder to search and sort. If you want to avoid revealing your invoice volume, use a year prefix or a higher starting number rather than random codes.",
      },
      {
        q: "Should I include the invoice number in my PDF file name and email subject?",
        a: "Yes. Naming the file with the invoice number and client, such as Invoice-INV-2026-0041-Acme.pdf, and putting the number in the email subject makes the invoice easy to find in a busy inbox and easy to match when payment arrives. Ask clients to use the same number as their payment reference, so every transfer can be traced back to one invoice.",
      },
    ],
    content: `
<h2>Why invoice numbers matter</h2>
<p>An invoice number is the unique identifier that ties together the document, the payment, the accounting entry and any later correction. Clients use it as the payment reference. Your accountant uses it to check nothing is missing. Tax authorities in many countries require invoice numbers to be unique and follow a continuous sequence, so that gaps or duplicates can signal missing sales.</p>
<p>A good numbering system is boring: it is predictable, never repeats, and survives changes of software, staff and business structure.</p>

<h2>The three rules</h2>
<ol>
<li><strong>Unique.</strong> No two invoices from the same business may ever share a number, not even across years or after a void.</li>
<li><strong>Sequential.</strong> Numbers increase in order of issue. Many tax systems expect an unbroken sequence; where gaps exist, you should be able to explain them.</li>
<li><strong>Consistent.</strong> Use the same format every time so numbers sort correctly and are easy to search.</li>
</ol>

<h2>Common formats</h2>
<table><thead><tr><th>Format</th><th>Example</th><th>Best for</th></tr></thead><tbody>
<tr><td>Simple sequence</td><td>0001, 0002, 0003</td><td>New freelancers with low volume</td></tr>
<tr><td>Year + sequence</td><td>2026-0041</td><td>Most small businesses; easy year-end filing</td></tr>
<tr><td>Prefix + year + sequence</td><td>INV-2026-0041</td><td>Businesses also issuing quotes or credit notes</td></tr>
<tr><td>Client code + sequence</td><td>ACME-0007</td><td>A few large, long-term clients</td></tr>
<tr><td>Entity + year + sequence</td><td>UK-2026-0041</td><td>Groups with several companies or branches</td></tr>
</tbody></table>
<p>The year-plus-sequence format is the most common recommendation: it sorts naturally, reveals the year at a glance, and is short enough to use as a bank payment reference.</p>
<p>A note on client-code formats: if you use them, keep a single overall sequence as well, or check your local rules. Some tax authorities expect one continuous series per business, not a separate series per client.</p>

<h2>Use leading zeros</h2>
<p>Pad the sequence to a fixed width: 0041 rather than 41. Without padding, a file list sorts "100" before "20", which makes manual checks harder. Four digits allow 9,999 invoices per year; choose five if your volume is higher.</p>

<h2>Different document types</h2>
<p>Quotes, estimates, invoices, credit notes and receipts are different documents and should have their own prefixes so they are never confused:</p>
<ul>
<li><code>QT-2026-0012</code>: quotation (see <a href="/blog/invoice-vs-quotation">invoice vs quotation</a>)</li>
<li><code>INV-2026-0041</code>: invoice</li>
<li><code>CN-2026-0003</code>: credit note (see our <a href="/blog/credit-note-guide">credit note guide</a>)</li>
<li><code>PF-2026-0005</code>: proforma invoice</li>
</ul>
<p>Proforma invoices and quotes are not tax invoices, so they normally do not use your invoice sequence.</p>

<h2>What to do when something goes wrong</h2>
<h3>You made a mistake on a sent invoice</h3>
<p>Do not edit and re-send the same number with different amounts. Issue a credit note referencing the original invoice, then issue a new, correct invoice with the next number. This leaves a clear audit trail.</p>
<h3>You need to cancel an invoice before sending</h3>
<p>If an invoice was created but never sent, mark it as void in your records with the reason, and keep the number unused. Do not reuse it for a different client.</p>
<h3>You skipped a number by accident</h3>
<p>Record the gap and the reason (for example "0042 skipped: software error, never issued"). An explained gap is not a problem; an unexplained one invites questions.</p>
<h3>You changed software</h3>
<p>Continue from the last number used in the old system. Do not restart at 0001 mid-year. Keep an export of the old records so the full sequence can be shown.</p>

<h2>Several businesses or branches</h2>
<p>Each legal entity should have its own invoice sequence. If one company has several branches or tills, you can either keep a single central sequence or give each location its own prefix (for example <code>LHR-</code> and <code>MAN-</code>), as long as every number remains unique within the business and your local rules allow it.</p>

<h2>Keeping track</h2>
<p>A simple spreadsheet with columns for number, date, client, amount, due date and status is enough for most freelancers. Check it monthly for gaps and duplicates. Our <a href="/invoice-generator">invoice generator</a> lets you set the invoice number on every document, so you stay in control of your sequence.</p>

<h2>Quick checklist</h2>
<ul>
<li>One format, used every time</li>
<li>Year in the number, with leading zeros</li>
<li>Separate prefixes for quotes, credit notes and proformas</li>
<li>Never reuse or edit a sent invoice number</li>
<li>Explain every gap in writing</li>
<li>Separate sequence for each legal entity</li>
</ul>
<p>For the other fields that belong on every invoice, see <a href="/blog/what-is-an-invoice">what is an invoice</a> and <a href="/blog/how-to-create-an-invoice">how to create an invoice</a>.</p>
`,
  },
  {
    slug: "credit-note-guide",
    title: "What Is a Credit Note? When and How to Issue One",
    description:
      "A credit note reduces or cancels an invoice you already sent. Learn when you need one, what it must contain, and how it differs from a refund or a debit note.",
    category: "invoicing-basics",
    date: "2026-09-01",
    author: "Invoice Creator Editorial Team",
    related: ["journal-entries"],
    faqs: [
      {
        q: "Can I issue a credit note after the client has already paid the invoice?",
        a: "Yes. A credit note can be issued whether the original invoice is unpaid, partly paid or fully paid. If the client has already paid, the credit note should say whether you will refund the difference or keep it as a credit on their account. Some tax authorities only let you reduce the tax you owe once a refund has actually been made, so check your local VAT or GST rules before adjusting a return.",
      },
      {
        q: "Is there a time limit for issuing a credit note?",
        a: "There is no single worldwide deadline, but tax rules often set one. In India, for example, GST credit notes for a financial year generally have to be declared by 30 November of the following year, and other countries have their own periods for correcting tax. Even where no deadline applies, issue the credit note as soon as the correction is agreed so both sets of books match. Check your tax authority's guidance for the exact rule.",
      },
      {
        q: "Can I reuse the original invoice number with a suffix, like INV-0041-A, for the credit note?",
        a: "It is better not to. A suffix makes the credit note look like a revised version of the invoice, which is exactly what you are trying to avoid. Give the credit note its own unique number from a dedicated series, such as CN-2026-0003, and quote the original invoice number in the body. That way each document stays traceable and your invoice sequence has no gaps or look-alike numbers.",
      },
      {
        q: "How do I record a credit note in my accounting records?",
        a: "As the seller, you record a credit note as a reduction of sales and of the amount the customer owes you, plus a reduction of the tax you collected if tax was charged. The buyer does the reverse: it reduces its purchases, the amount it owes you and any input tax it planned to reclaim. Most accounting software has a dedicated credit note feature that posts these entries and links them to the original invoice.",
      },
      {
        q: "Can the buyer issue the credit note instead of the seller?",
        a: "Normally no. The seller issues the credit note because it corrects the seller's own invoice. A buyer who wants a reduction usually sends a debit note or a written request explaining what should be credited and why. The exception is a formal self-billing arrangement, where the buyer creates invoices and credit notes on the seller's behalf under an agreement that some tax authorities require to be documented in advance.",
      },
      {
        q: "Can I apply a credit note to a different invoice from the one it corrects?",
        a: "Yes, if the client agrees. A credit note always references the invoice it corrects, but the resulting credit can be offset against another open invoice or a future one instead of being refunded. Write down which invoice the credit is being applied to, for example in the notes of the next invoice or on a statement of account, so both sides can reconcile the balance without confusion.",
      },
      {
        q: "Should the amounts on a credit note be shown as negative numbers?",
        a: "Either approach is acceptable as long as the document is clearly titled Credit Note. Many businesses show positive amounts under a Credit Note heading, because the title already tells the reader the figures reduce what is owed. Others show negative amounts so totals can be added straight into a ledger. Pick one style and use it consistently so your client's accounts team never has to guess.",
      },
      {
        q: "Does a credit balance on a customer's account expire?",
        a: "There is no universal expiry rule for a credit note balance between businesses. Unless your terms say otherwise, the credit remains owed to the customer until it is used against a future invoice or refunded. If you want credits to lapse or be refunded after a set period, state that in your terms and on the credit note. Consumer protection laws in some countries limit how credits can expire, so check locally.",
      },
      {
        q: "Do I still need a credit note if I am not registered for VAT or GST?",
        a: "Yes, it is still good practice. Even without tax registration, a credit note keeps your sales records, numbering and client balances accurate, and it gives your client a document to file against the original invoice. Simply leave out the tax lines and registration number. If you later register for tax, your clean correction history will make the transition and any review of past records much easier.",
      },
      {
        q: "When can I void an invoice instead of issuing a credit note?",
        a: "Voiding is generally only appropriate when the invoice has not yet been sent to the client or recorded anywhere outside your own system. In that case, mark it void, keep the number in your records with a short reason, and move on. Once an invoice has reached the client, it may already be in their accounts, so a credit note is the safer, auditable way to cancel or reduce it.",
      },
    ],
    content: `
<h2>The short definition</h2>
<p>A credit note (sometimes called a credit memo) is a document a seller issues to a buyer to reduce, partly or fully, the amount of an invoice that has already been issued. It is the correct, auditable way to fix an invoice after it has been sent, instead of editing or deleting the original.</p>
<p>Think of it as a negative invoice: it has its own number and date, refers back to the original invoice, and shows the amount being credited, including any tax.</p>

<h2>When you need a credit note</h2>
<ul>
<li><strong>Pricing or quantity errors</strong>: you charged for 10 hours instead of 8, or used the wrong rate.</li>
<li><strong>Returned goods</strong>: the customer sent back part or all of an order.</li>
<li><strong>Cancelled services</strong>: a booked service will not be delivered.</li>
<li><strong>Agreed discounts after invoicing</strong>: a goodwill discount, a volume rebate, or compensation for a problem.</li>
<li><strong>Wrong customer details</strong>: you billed the wrong legal entity and must cancel the invoice and re-issue it correctly.</li>
<li><strong>Duplicate invoices</strong>: the same work was invoiced twice.</li>
</ul>

<h2>Why not just edit the invoice?</h2>
<p>Once an invoice has been sent, it exists in your client's records and probably in their accounting system. If you change it and re-send it with the same number, the two versions no longer match. Your sales records, tax reports and the client's books will disagree. In many tax systems, issued invoices must not be altered; a credit note is the expected correction method.</p>
<p>A credit note keeps a clean trail: original invoice, credit note, and (if needed) a new correct invoice, each with its own number and date.</p>

<h2>What a credit note should contain</h2>
<ul>
<li>The words "Credit Note" clearly at the top</li>
<li>A unique credit note number (often with its own prefix, e.g. <code>CN-2026-0003</code>)</li>
<li>Date of issue</li>
<li>Your business details and the customer's details, matching the original invoice</li>
<li>The number and date of the original invoice being credited</li>
<li>A description of what is being credited and why</li>
<li>The amount credited, with tax shown separately if the original invoice included tax</li>
<li>The total credit</li>
</ul>
<p>Where you are registered for VAT, GST or sales tax, the credit note normally also needs the tax details required by your jurisdiction so both parties can adjust their tax records. See our <a href="/blog/vat-invoice-guide">VAT</a> and <a href="/blog/gst-invoice-guide">GST</a> guides for background.</p>

<h2>Worked example</h2>
<p>You issued invoice <strong>INV-2026-0041</strong> for 10 hours of consulting at 100 per hour, plus 20% tax: subtotal 1,000, tax 200, total 1,200. The client points out that only 8 hours were worked.</p>
<table><thead><tr><th>Credit note CN-2026-0003</th><th>Amount</th></tr></thead><tbody>
<tr><td>Credit for 2 hours consulting over-billed on INV-2026-0041</td><td>200.00</td></tr>
<tr><td>Tax at 20%</td><td>40.00</td></tr>
<tr><td><strong>Total credit</strong></td><td><strong>240.00</strong></td></tr>
</tbody></table>
<p>The client now owes 1,200 − 240 = 960. If they had already paid 1,200, you either refund 240 or keep it as a credit on their account for the next invoice. Say which in the credit note.</p>

<h2>Credit note vs refund vs debit note</h2>
<table><thead><tr><th>Document / action</th><th>What it does</th></tr></thead><tbody>
<tr><td>Credit note</td><td>Reduces the amount owed on an invoice (a document)</td></tr>
<tr><td>Refund</td><td>Returns money that was already paid (a payment)</td></tr>
<tr><td>Debit note</td><td>Increases the amount owed, or is issued by a buyer to request a credit</td></tr>
</tbody></table>
<p>A refund often follows a credit note, but not always: the credit can instead be applied to future invoices.</p>

<h2>Full cancellation</h2>
<p>If an invoice should never have been issued (for example you billed the wrong company), issue a credit note for the full amount, then create a fresh invoice with a new number for the correct entity. Do not delete or reuse the original number; see <a href="/blog/invoice-numbering-system">invoice numbering</a> for why.</p>

<h2>Best practices</h2>
<ul>
<li>Issue the credit note promptly, as soon as the correction is agreed.</li>
<li>Explain the reason in one clear sentence.</li>
<li>Send it to the same accounts-payable contact as the original invoice.</li>
<li>Keep credit notes with your invoices for the same retention period.</li>
<li>Use a separate number series so credit notes are never confused with invoices.</li>
</ul>
<p>Many credit notes are avoidable. Our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> covers the errors that most often cause them, and the <a href="/invoice-generator">invoice generator</a> checks your totals automatically.</p>
`,
  },
  {
    slug: "proforma-invoice-guide",
    title: "Proforma Invoice vs Commercial Invoice: What's the Difference?",
    description:
      "A proforma invoice is a preliminary bill sent before goods ship or work starts. Learn how it differs from a commercial invoice, when to use each, and what to include.",
    category: "comparisons",
    date: "2026-08-25",
    author: "Invoice Creator Editorial Team",
    related: ["hs-code-on-commercial-invoice"],
    faqs: [
      {
        q: "Is a proforma invoice legally binding?",
        a: "Generally, a proforma invoice is not a binding demand for payment on its own. It is a good-faith statement of the terms you intend to invoice. However, if the buyer accepts it in writing or pays against it, the prices and terms it shows can become part of your agreement. Treat every proforma as carefully as a contract offer, and include a validity date so old prices cannot be held against you later.",
      },
      {
        q: "Can a buyer pay against a proforma invoice?",
        a: "Yes. Paying against a proforma invoice is one of its main uses, especially when you require payment before you ship goods or start work. Put your bank details, the proforma number to use as a payment reference and the validity date on the document. Once payment arrives and the supply happens, issue the final commercial invoice and reference the proforma number and payment date on it.",
      },
      {
        q: "Should I charge VAT or GST on a proforma invoice?",
        a: "You should show any tax the buyer will be charged, so the total they pay is accurate. Showing it does not usually create a tax liability by itself, because a proforma is not a tax invoice. However, receiving an advance payment can create a tax point in many VAT systems, including the UK's, which may mean you must issue a proper tax invoice and account for tax at that moment. Check your tax authority's rules.",
      },
      {
        q: "Can a proforma invoice be used for customs clearance?",
        a: "Sometimes. Customs authorities in many countries accept a proforma invoice when no commercial invoice exists, for example for free samples, replacements or goods not being sold. US Customs and Border Protection, for instance, has a set format for pro forma invoices in its regulations. Rules differ by country and shipment type, so confirm with your freight forwarder or customs broker before relying on a proforma instead of a commercial invoice.",
      },
      {
        q: "What should I do if prices change after I have sent a proforma invoice?",
        a: "Issue a revised proforma invoice with a new reference or version number, such as PF-2026-0005-v2, and tell the buyer what changed and why. You do not need a credit note, because a proforma is not recorded as a sale. If the buyer has already paid or opened a letter of credit based on the old figures, agree the change with them in writing before you ship.",
      },
      {
        q: "Is a proforma invoice the same as a sales order or order confirmation?",
        a: "They are close but not identical. An order confirmation or sales order confirms that you have accepted the buyer's order and will supply it. A proforma invoice looks like the final invoice and is mainly used so the buyer can pay in advance, get internal approval or arrange import paperwork. Some businesses send both; others use the proforma as the confirmation. Label each document clearly to avoid confusion.",
      },
      {
        q: "Does a proforma invoice need a signature or company stamp?",
        a: "Most commercial dealings do not require one. However, banks processing letters of credit, import licensing offices and some customs authorities may ask for a signed or stamped proforma, so check what the buyer's bank or importing country expects. Adding an authorized signature costs little and can prevent a rejected application. Make sure the details match the final commercial invoice exactly.",
      },
      {
        q: "What is the difference between a proforma invoice and a deposit invoice?",
        a: "A proforma invoice previews the final bill and is not recorded as a sale. A deposit or advance invoice is a real invoice from your main sequence that asks for part of the price up front and is recorded in your books. Where an advance payment triggers a tax obligation, some businesses issue a deposit invoice instead of a proforma so the tax paperwork is in place from the start.",
      },
      {
        q: "What happens if the buyer pays a proforma invoice and then cancels the order?",
        a: "You normally refund the prepayment, minus any cancellation charges your terms allow. Because no sale was recorded, there is usually no invoice to correct. If you issued a tax invoice when the advance payment arrived, you will also need a credit note to reverse it and adjust your tax records. Put your cancellation and refund policy on the proforma so both sides know the rules beforehand.",
      },
      {
        q: "Is it spelled proforma, pro forma or pro-forma?",
        a: "All three spellings are widely used and mean the same thing. The term comes from the Latin pro forma, meaning \"as a matter of form\". Pro forma (two words) is common in dictionaries, while proforma (one word) is popular in international trade documents. Whichever you choose, use it consistently in the document title, your numbering prefix and your emails so the buyer knows it is not a final invoice.",
      },
    ],
    content: `
<h2>The short answer</h2>
<p>A <strong>proforma invoice</strong> is a preliminary document sent <em>before</em> a sale is completed. It tells the buyer exactly what they will be billed (items, prices, taxes, shipping and terms) so they can arrange payment, approvals or import paperwork. It is not a demand for payment in the accounting sense and is not usually recorded as a sale.</p>
<p>A <strong>commercial invoice</strong> (or simply "invoice") is issued once goods are shipped or services delivered. It is the legal request for payment and the record of the sale used for accounting and tax. For exports, it is also the customs document. See our <a href="/blog/commercial-invoice-template">commercial invoice template</a> for the fields customs brokers expect.</p>

<h2>Side-by-side comparison</h2>
<table><thead><tr><th></th><th>Proforma invoice</th><th>Commercial invoice</th></tr></thead><tbody>
<tr><td>When issued</td><td>Before delivery or shipment</td><td>At or after delivery</td></tr>
<tr><td>Purpose</td><td>Show final terms; enable prepayment or approvals</td><td>Request payment; record the sale</td></tr>
<tr><td>Recorded as revenue?</td><td>No</td><td>Yes</td></tr>
<tr><td>Valid for tax credit?</td><td>Generally no</td><td>Yes, if it meets local rules</td></tr>
<tr><td>Numbering</td><td>Separate series (e.g. PF-2026-0005)</td><td>Main invoice sequence</td></tr>
<tr><td>Can change?</td><td>Yes, until the sale is confirmed</td><td>No, corrected only with a credit note</td></tr>
</tbody></table>

<h2>When to use a proforma invoice</h2>
<ul>
<li><strong>Advance payment.</strong> The buyer must pay before you ship or start work, and their finance team needs a formal document to release funds.</li>
<li><strong>International trade.</strong> Importers often need a proforma to apply for import licences, open a letter of credit, or arrange foreign currency.</li>
<li><strong>Internal approvals.</strong> A buyer's procurement process may require a document showing exact costs before a purchase order can be raised.</li>
<li><strong>Customs pre-clearance.</strong> Some shipments travel with a proforma when no sale is involved (for example samples or replacement parts), though rules vary by country.</li>
</ul>

<h2>How it differs from a quote or estimate</h2>
<p>A <a href="/blog/invoice-vs-quotation">quotation</a> or <a href="/blog/invoice-vs-estimate">estimate</a> is an offer: the buyer has not committed yet. A proforma invoice usually comes after the buyer has agreed in principle; it confirms what the final invoice will look like. In practice the line is sometimes blurred, but the proforma is typically more detailed and closer to the final document, including shipping, packaging and payment instructions.</p>

<h2>What to include on a proforma invoice</h2>
<ul>
<li>The title "Proforma Invoice", clearly, so it cannot be mistaken for a tax invoice</li>
<li>A proforma reference number and date</li>
<li>Seller and buyer details, including addresses and tax IDs where relevant</li>
<li>Detailed description of goods or services, quantities and unit prices</li>
<li>For goods: weights, dimensions, country of origin and product codes (such as HS codes) where known</li>
<li>Currency, taxes, shipping and insurance costs</li>
<li>Delivery terms (for international sales, the agreed Incoterm)</li>
<li>Payment terms and bank details</li>
<li>A validity date, for example "Prices valid for 30 days"</li>
</ul>

<h2>What happens after payment</h2>
<p>Once the goods ship or the work is delivered, issue a proper commercial invoice with a number from your main invoice sequence. If the buyer has already paid in full against the proforma, mark the invoice as paid and reference the proforma number and payment date. Your accounting records and tax reports are based on the final invoice, not the proforma.</p>
<p>In some jurisdictions, receiving an advance payment can itself create a tax obligation and may require an invoice at that point. If you take prepayments regularly, confirm the rules with an accountant. See our <a href="/blog/tax-invoice-guide">tax invoice guide</a> for background.</p>

<h2>Common mistakes</h2>
<ul>
<li>Leaving the word "Invoice" alone on the title, so the buyer books it as a real invoice</li>
<li>Using the main invoice numbering series for proformas</li>
<li>Forgetting a validity period, then honouring old prices months later</li>
<li>Never issuing the final commercial invoice after payment</li>
</ul>

<h2>Creating one quickly</h2>
<p>Because a proforma has the same structure as an invoice, you can draft the content (line items, totals, terms and validity date) in our <a href="/invoice-generator">invoice generator</a> and reuse it later. Make sure the final document is clearly titled "Proforma Invoice" and uses a proforma number (such as <code>PF-2026-0005</code>), then, when the sale completes, issue a standard invoice with your next invoice number.</p>
`,
  },
  {
    slug: "recurring-invoices-guide",
    title: "Recurring Invoices: A Complete Guide for Retainers and Subscriptions",
    description:
      "How to set up recurring invoices for retainers, maintenance plans and subscriptions: billing dates, line descriptions, price changes, and handling missed payments.",
    category: "guides",
    date: "2026-08-18",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "What is the difference between a recurring invoice and automatic payment?",
        a: "A recurring invoice is a request for payment sent on a schedule; the client still has to pay it. Automatic payment means you collect the money yourself on each due date, for example by card on file, direct debit or ACH, with the client's authorization. Many businesses combine both: the invoice documents the charge and the automatic payment settles it, so the client receives a record without having to act.",
      },
      {
        q: "Can I ask a retainer client to pay by standing order or direct debit?",
        a: "Yes. With a standing order or recurring bank transfer, the client sets up a fixed payment from their side, which works well for unchanging retainers. With a direct debit or ACH debit, you pull the payment under a signed mandate, which handles varying amounts. Either way, keep sending a numbered invoice each period if the client needs it for their records or tax reclaim.",
      },
      {
        q: "What happens if a retainer client uses fewer hours than they paid for?",
        a: "It depends entirely on your agreement, so decide before you start. Common options are use-it-or-lose-it hours, a limited rollover into the next period, or a credit against future work. Whatever you choose, state it in the contract and show it on the invoice, for example \"8 of 10 hours used; 2 hours roll over to November\". Unclear rules on unused time are a frequent source of retainer disputes.",
      },
      {
        q: "Do I need a written contract for recurring billing?",
        a: "It is strongly advisable. A short written agreement should state the amount, the billing schedule, whether you bill in advance or arrears, what is included, how extra work is charged, the notice period for price changes and how either side can cancel. Without it, each recurring invoice depends on memory and goodwill. Some payment methods, such as card-on-file or direct debit, also require the client's documented authorization.",
      },
      {
        q: "How do I end a recurring billing arrangement properly?",
        a: "Give or accept notice as your contract requires, confirm the end date in writing, and send a final invoice for the last period, pro-rated if it ends mid-cycle. If the client paid in advance for time you will not deliver, refund or credit it. Cancel any automatic payments or scheduled invoices in your software so nothing is charged after the agreement ends.",
      },
      {
        q: "Can I send one invoice that covers several months?",
        a: "Yes. Billing quarterly or annually in advance is common and reduces paperwork for both sides. List the full service period, such as \"Maintenance plan: January to March 2027\", and consider showing the monthly breakdown so the client can match it to their budget. Some businesses offer a small discount for upfront payment. Make sure your contract covers what happens if the client cancels part way through.",
      },
      {
        q: "How should I handle a tax rate change on recurring invoices?",
        a: "Apply the tax rate that is in force for each supply under your local rules, which may depend on the invoice date, the payment date or the period of service. Update your template or software settings on the effective date, and check any invoices already scheduled. If a period straddles the change, you may need to split the charge. Confirm the transitional rules with your tax authority or accountant.",
      },
      {
        q: "Can I use the free invoice generator for recurring invoices?",
        a: "Yes, but manually. The generator creates PDF invoices in your browser and saves your draft in local storage, so you can reopen it each period, update the invoice number, date and service period, and download a fresh PDF. It does not schedule, send or charge recurring invoices automatically, so you will need to email each one yourself or use accounting software if you want full automation.",
      },
      {
        q: "Should I send retainer clients a statement of account?",
        a: "A statement is helpful when a client has several open invoices or has paid some periods late. It lists every invoice, payment and credit over a period and shows the running balance, so their finance team can see exactly what is outstanding. It does not replace individual invoices. Many businesses send one monthly or quarterly to recurring clients, or whenever an overdue balance needs to be discussed.",
      },
      {
        q: "How do invoices billed in advance affect my accounts?",
        a: "Under accrual accounting, money billed for a future period is usually recorded as deferred income at first, then recognized as revenue as you deliver the service. For example, an annual plan billed in January is earned month by month across the year. Under cash accounting, you generally record income when you receive payment. Ask your accountant which method and rules apply to your business.",
      },
    ],
    content: `
<h2>What a recurring invoice is</h2>
<p>A recurring invoice bills the same client for the same (or similar) service on a regular schedule: weekly, monthly, quarterly or yearly. Typical examples include design or marketing retainers, <a href="/blog/web-development-invoice-template">website maintenance plans</a>, bookkeeping services, equipment rental, coaching packages, cleaning contracts and software subscriptions.</p>
<p>Recurring revenue is the most predictable income a small business can have. But it only stays predictable if the invoicing is consistent: the same day, the same format, the same clear description, every period.</p>

<h2>Choosing the billing schedule</h2>
<table><thead><tr><th>Schedule</th><th>Good for</th><th>Notes</th></tr></thead><tbody>
<tr><td>Monthly in advance</td><td>Retainers, subscriptions</td><td>Most common; protects your cash flow</td></tr>
<tr><td>Monthly in arrears</td><td>Usage-based or variable work</td><td>Bill after the month for actual usage</td></tr>
<tr><td>Quarterly</td><td>Maintenance, compliance services</td><td>Fewer invoices; larger amounts</td></tr>
<tr><td>Annually</td><td>Licences, memberships</td><td>Send a reminder before renewal</td></tr>
</tbody></table>
<p>Billing <strong>in advance</strong> means the client pays for the coming period before you do the work. It is standard for retainers and greatly reduces the risk of unpaid work. Billing <strong>in arrears</strong> suits work where the amount is only known afterwards, such as hourly support.</p>

<h2>Pick a fixed billing day</h2>
<p>Choose a date and never move it: the 1st of the month, or the anniversary of the contract start. Clients' finance teams build your invoice into their routine, and you can forecast cash flow accurately. If the client has a monthly payment run, ask its date and set your invoice date a week or so before.</p>

<h2>Write descriptions that show the period</h2>
<p>Every recurring invoice should make the service period obvious, so it can never be mistaken for a duplicate:</p>
<ul>
<li>"Website maintenance plan: October 2026 (1–31 Oct)"</li>
<li>"Social media retainer: 12 posts + reporting, Q4 2026"</li>
<li>"Bookkeeping, standard package, period ending 30 Sep 2026"</li>
</ul>
<p>Without the period, an AP clerk who sees two invoices for the same amount may hold one as a suspected duplicate.</p>

<h2>Handling extras and variable work</h2>
<p>When you do work outside the retainer, add it as separate, clearly labelled lines rather than changing the main retainer line: "Additional: landing page design (outside retainer scope): 6 hours". This keeps the recurring amount stable and makes it easy for the client to see what is extra and why.</p>

<h2>Price changes</h2>
<p>Give written notice before a price change: 30 days is a common courtesy, and your contract may set a specific period. State the effective date and the new amount. On the first invoice at the new price, add a short note: "Monthly rate updated from 1 November 2026 as notified on 1 October." Surprises on a recurring invoice are the fastest way to lose a retainer.</p>

<h2>Partial periods and pro-rating</h2>
<p>If a client starts or ends mid-period, pro-rate fairly and show the maths. For example, a 900 monthly retainer starting on 11 September (20 days remaining out of 30) would be 900 × 20 ÷ 30 = 600. Write the dates on the line so the calculation is clear.</p>

<h2>Automation vs manual sending</h2>
<p>Accounting software can create and send recurring invoices automatically. That saves time, but review automated invoices periodically: client contacts change, PO numbers expire, and tax rates update. For a small number of clients, preparing each invoice yourself from the same template in our <a href="/invoice-generator">invoice generator</a> takes a couple of minutes and lets you catch changes.</p>

<h2>When a recurring payment is missed</h2>
<ol>
<li>Send a reminder promptly, as recurring clients usually pay quickly once prompted. See <a href="/blog/payment-reminder-emails">payment reminder emails</a>.</li>
<li>If the next period begins while the previous invoice is still unpaid, mention the outstanding balance on the new invoice.</li>
<li>Your contract should say whether services pause when payment is overdue. Apply that rule calmly and consistently.</li>
</ol>

<h2>Checklist for every recurring invoice</h2>
<ul>
<li>Same invoice date each period</li>
<li>New, sequential invoice number every time (see <a href="/blog/invoice-numbering-system">invoice numbering</a>)</li>
<li>Service period written in the description</li>
<li>Extras on separate lines</li>
<li>Current PO number and billing contact</li>
<li>Any price change noted with its effective date</li>
</ul>
<p>Choose a calm, consistent layout from our <a href="/invoice-templates">invoice templates</a> and use it for every period, so your client's finance team recognises your invoices instantly.</p>
`,
  },
  {
    slug: "payment-reminder-emails",
    title: "Payment Reminder Emails: 6 Templates From Friendly to Final Notice",
    description:
      "Copy-ready payment reminder emails for every stage: before the due date, on the due date, and overdue, plus timing, subject lines and tone tips.",
    category: "guides",
    date: "2026-08-11",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "Is it rude to send a payment reminder before the invoice is due?",
        a: "No, as long as it is framed as a courtesy. A short note a few days before the due date simply confirms the invoice has arrived and is in the approval queue. Most finance teams welcome it because it gives them time to fix a missing PO number or wrong contact before the deadline. Keep the tone light, attach the invoice and avoid any hint of blame.",
      },
      {
        q: "What should I do if a client ignores every payment reminder?",
        a: "Escalate step by step. Call the client, then send a formal letter before action stating the amount, the deadline and what you will do next. After that, options include a collection agency, mediation or a small claims court, depending on the amount and your country. Each jurisdiction has its own process and limits, so check your local court service or get legal advice before filing a claim.",
      },
      {
        q: "Can I add late fees in a reminder if my contract does not mention them?",
        a: "Usually only if the law gives you that right. In general, you need agreed terms to charge a late fee. An exception is UK business-to-business sales, where the Late Payment of Commercial Debts (Interest) Act lets you claim statutory interest at 8% above the Bank of England base rate, plus fixed compensation of £40, £70 or £100 depending on the debt. Rules differ elsewhere, so check locally first.",
      },
      {
        q: "Should I send payment reminders by email, text or WhatsApp?",
        a: "Email is the best default because it creates a dated written record and lets you attach the invoice. A text or messaging-app reminder can work for small clients who have communicated with you that way, but keep it brief and professional and follow up by email so the trail is complete. Avoid personal social media channels, and never discuss a client's debt where others can see it.",
      },
      {
        q: "What is a letter before action for an unpaid invoice?",
        a: "It is a formal final letter warning that you will start legal proceedings if the debt is not paid by a set date. It usually states the invoice details, the amount owed including any interest, and a deadline. In England and Wales, a pre-action protocol for debt claims applies when the debtor is an individual or sole trader and sets out what the letter must contain. Check your own jurisdiction's requirements.",
      },
      {
        q: "How do I chase a payment from a friend or long-standing client without damaging the relationship?",
        a: "Keep it factual and assume an honest mistake. Use the same short, polite reminder you would send anyone, refer to the invoice number and amount, and offer to help if something is blocking payment. Treating every client consistently actually protects relationships, because the reminder feels like a process rather than a personal complaint. If they are struggling, a written payment plan with fixed dates keeps things friendly.",
      },
      {
        q: "Can I withhold work or files until an overdue invoice is paid?",
        a: "Often yes, if your contract allows it. Many agreements let you pause work when invoices are overdue, or state that ownership of deliverables only passes on full payment. Without such a clause, withholding work could put you in breach yourself. Give written notice before pausing, apply the rule calmly, and add a clear payment and ownership clause to future contracts.",
      },
      {
        q: "Can I automate my payment reminder emails?",
        a: "Yes, most accounting and invoicing platforms can send reminders automatically on a schedule you set. If you create invoices with our free generator, note that it makes PDFs only and does not send emails or reminders, so you would schedule reminders in your email client or calendar instead. Whichever method you use, check each automated reminder still makes sense, for example that the invoice has not just been paid.",
      },
      {
        q: "What should I do if a client replies to a reminder by disputing the invoice?",
        a: "Stop the standard reminder sequence and ask exactly which items are disputed and why. Ask the client to pay any undisputed part now while you resolve the rest. If the complaint is valid, issue a credit note for the agreed amount; if not, share the evidence, such as the accepted quote, timesheets or delivery confirmation. Confirm the outcome in writing before you resume chasing.",
      },
      {
        q: "What if the client says they paid but the money has not arrived?",
        a: "Ask politely for the remittance details: payment date, amount, method and transaction reference. Check your bank account and any payment platform for pending or misallocated funds, and confirm the client used the correct account details. International transfers can take several business days and may lose fees on the way. If the payment cannot be traced, the client's bank can usually trace or recall it.",
      },
    ],
    content: `
<h2>Why reminders work</h2>
<p>Most overdue invoices are not refused. They are forgotten, stuck in an approval queue, or sitting in the wrong inbox. A short, polite reminder at the right time is the cheapest and most effective way to get paid. The key is to have a set sequence ready in advance, so you never have to decide what to write when you are already frustrated.</p>

<h2>A simple reminder schedule</h2>
<table><thead><tr><th>When</th><th>Tone</th><th>Goal</th></tr></thead><tbody>
<tr><td>3 days before due</td><td>Friendly</td><td>Make sure the invoice is in the system</td></tr>
<tr><td>On the due date</td><td>Friendly, direct</td><td>Prompt payment today</td></tr>
<tr><td>7 days overdue</td><td>Polite, firm</td><td>Find out what is blocking payment</td></tr>
<tr><td>14 days overdue</td><td>Firm</td><td>Agree a payment date</td></tr>
<tr><td>30 days overdue</td><td>Formal</td><td>Escalate; mention late-payment terms</td></tr>
<tr><td>45+ days overdue</td><td>Final notice</td><td>State next steps clearly</td></tr>
</tbody></table>
<p>Adjust the timing to your payment terms, but keep the same order: friendly first, firmer gradually, always factual.</p>

<h2>Tips for every reminder</h2>
<ul>
<li>Put the invoice number and amount in the subject line.</li>
<li>Attach the invoice PDF again. Never make the client search for it.</li>
<li>Include the payment details or link in the email itself.</li>
<li>Keep it short. Three or four sentences is enough.</li>
<li>Stay neutral. Assume an honest mistake until shown otherwise.</li>
</ul>

<h2>Template 1: Before the due date</h2>
<p><strong>Subject:</strong> Upcoming: invoice 2026-0041 due 14 October</p>
<blockquote><p>Hi Sarah,</p><p>Just a quick note that invoice 2026-0041 for 1,200 is due on 14 October. I've attached a copy for convenience. Payment details are on the invoice, using 2026-0041 as the reference.</p><p>Let me know if you need anything else to process it.</p><p>Thanks,<br>Alex</p></blockquote>

<h2>Template 2: On the due date</h2>
<p><strong>Subject:</strong> Invoice 2026-0041 due today</p>
<blockquote><p>Hi Sarah,</p><p>Invoice 2026-0041 for 1,200 is due today. If it has already been paid, thank you, please ignore this message. Otherwise, the invoice is attached with bank details.</p><p>Best regards,<br>Alex</p></blockquote>

<h2>Template 3: 7 days overdue</h2>
<p><strong>Subject:</strong> Overdue: invoice 2026-0041 (7 days)</p>
<blockquote><p>Hi Sarah,</p><p>I haven't yet received payment for invoice 2026-0041 (1,200), which was due on 14 October. Could you let me know if there's anything holding it up (a missing PO number or a different billing contact, for example)? I'm happy to resend anything that's needed.</p><p>Thanks,<br>Alex</p></blockquote>

<h2>Template 4: 14 days overdue</h2>
<p><strong>Subject:</strong> Second reminder: invoice 2026-0041 now 14 days overdue</p>
<blockquote><p>Hi Sarah,</p><p>Invoice 2026-0041 for 1,200 is now 14 days overdue. Please could you confirm a date when payment will be made? I've attached the invoice again and copied our accounts contact.</p><p>Kind regards,<br>Alex</p></blockquote>

<h2>Template 5: 30 days overdue</h2>
<p><strong>Subject:</strong> Action needed: invoice 2026-0041 is 30 days overdue</p>
<blockquote><p>Dear Sarah,</p><p>Despite previous reminders, invoice 2026-0041 for 1,200 remains unpaid 30 days after its due date. As set out in our agreed terms, late payment interest may now apply. Please arrange payment by 20 November or contact me to discuss a payment plan.</p><p>Regards,<br>Alex</p></blockquote>

<h2>Template 6: Final notice</h2>
<p><strong>Subject:</strong> Final notice: invoice 2026-0041</p>
<blockquote><p>Dear Sarah,</p><p>This is a final notice regarding invoice 2026-0041 for 1,200, now 45 days overdue. If payment is not received by 30 November, we will pause further work and may refer the debt for collection. I would much prefer to resolve this directly, so please reply or call me this week.</p><p>Regards,<br>Alex</p></blockquote>
<p>Only state consequences you are genuinely prepared to carry out, and make sure they are allowed under your contract and local law.</p>

<h2>Beyond email</h2>
<p>If two emails go unanswered, pick up the phone. A two-minute call often uncovers the real problem: a wrong address, a missing supplier form, or a cash-flow issue the client is embarrassed about. If the client is struggling, a written payment plan with fixed dates is usually better than waiting indefinitely.</p>

<h2>Prevent the next reminder</h2>
<p>Reminders treat the symptom. The cure is a clear invoice with agreed terms, a specific due date and visible payment details. Read <a href="/blog/how-to-get-paid-faster">how to get paid faster</a> and <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>, then create your next invoice with the <a href="/invoice-generator">free invoice generator</a>.</p>
`,
  },
  {
    slug: "invoice-payment-terms",
    title: "Invoice Payment Terms Explained: Net 30, Due on Receipt and More",
    description:
      "What Net 7, Net 30, EOM, 2/10 Net 30 and other payment terms mean, how to choose the right ones for your business, and exactly how to word them on an invoice.",
    category: "invoicing-basics",
    date: "2026-08-04",
    author: "Invoice Creator Editorial Team",
    related: ["due-upon-receipt"],
    faqs: [
      {
        q: "Does Net 30 mean 30 calendar days or 30 business days?",
        a: "Net 30 is normally read as 30 calendar days, counted from the invoice date unless your terms say otherwise. Weekends and public holidays are included. Because some clients count from the date they receive the invoice instead, it is safest to define the starting point in your contract and always print the actual due date on the invoice so there is no room for interpretation.",
      },
      {
        q: "What happens if an invoice due date falls on a weekend or public holiday?",
        a: "There is no universal rule. Many businesses treat payment on the next working day as on time, while others expect payment by the previous working day. If it matters to you, say so in your terms, for example \"if the due date is not a business day, payment is due the preceding business day\". Simplest of all, choose a due date that falls on a working day when you create the invoice.",
      },
      {
        q: "Can a large client insist on longer payment terms than mine?",
        a: "They can ask, and many large organizations have standard 45, 60 or 90 day policies, but terms are a negotiation. Some laws limit how long payment terms can be. Under the EU Late Payment Directive, for example, business-to-business terms generally cannot exceed 60 days unless expressly agreed and not grossly unfair, and public authorities usually must pay within 30 days. If you accept longer terms, build the cost into your price.",
      },
      {
        q: "What payment terms apply if none were agreed?",
        a: "That depends on local law. In the UK, if no payment date was agreed in a business-to-business contract, statutory late payment interest can generally start 30 days after the later of delivery or receipt of the invoice. EU countries have similar default rules under the Late Payment Directive. In other places, a court may simply look for a \"reasonable\" time. Agreeing terms in writing avoids the uncertainty.",
      },
      {
        q: "Can I change payment terms for an existing client?",
        a: "Yes, but do it by agreement and in writing. Tell the client what is changing, why and from which date, and apply the new terms only to invoices issued after that date. Check your contract first, because it may fix the terms or require a notice period. Shortening terms suddenly can strain a relationship, so many businesses introduce changes at contract renewal or alongside a new project.",
      },
      {
        q: "What does \"Net 10th Prox\" mean on an invoice?",
        a: "\"Prox\" is short for the Latin proximo, meaning the next month. Net 10th Prox means payment is due on the 10th day of the month following the invoice date. So an invoice dated 18 October would be due on 10 November. Terms like this suit clients who pay suppliers in a monthly run. Because not everyone knows the abbreviation, also print the calculated due date on the invoice.",
      },
      {
        q: "Should new clients get different payment terms from established ones?",
        a: "It is common and reasonable. With a new client you have no payment history, so a deposit, payment on receipt or a short term such as Net 7 limits your risk. Once a client has paid reliably for a while, you can offer longer terms as a goodwill gesture or to win more work. Whatever you offer, record it in writing so each client knows exactly what applies to them.",
      },
      {
        q: "Are payment terms printed only on the invoice legally binding?",
        a: "Not always. Terms are strongest when they are agreed before the work starts, in a contract, accepted quote or signed proposal. Terms that first appear on an invoice, after the work is done, may not bind a client who never agreed to them, particularly for late fees. Put your terms in your quote or contract first, then repeat them on every invoice so the two always match.",
      },
      {
        q: "What is retainage or retention in payment terms?",
        a: "Retainage, also called retention, means the client holds back a percentage of each payment until the project is finished and any defects are fixed. It is common in construction. Your invoices should show the gross amount, the retention deducted, and the amount due now, and you then invoice the retained sum once the release conditions are met. Some jurisdictions regulate retention, so check the rules for your sector.",
      },
      {
        q: "Are payment terms different when invoicing consumers?",
        a: "Often, yes. Consumers are usually protected by consumer law, which may restrict late fees, interest and automatic charges, and business late payment laws, such as the UK's statutory interest regime, typically do not apply to them. Consumers also tend to expect payment at the time of purchase or on receipt. Keep consumer terms short and clear, and check your local consumer protection rules before adding penalties.",
      },
    ],
    content: `
<h2>What payment terms are</h2>
<p>Payment terms are the conditions under which a client must pay your invoice: how long they have, how they can pay, and what happens if they pay early or late. They belong in your contract or proposal first, and are then repeated on every invoice.</p>
<p>Clear terms remove guesswork. Vague terms (or none at all) let the client's own default policy decide when you get paid, and large organisations often default to 45, 60 or even 90 days.</p>

<h2>Common payment terms and what they mean</h2>
<table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Due on receipt</td><td>Payment expected as soon as the invoice is received</td></tr>
<tr><td>Net 7 / Net 14</td><td>Full payment due 7 or 14 days after the invoice date</td></tr>
<tr><td>Net 30</td><td>Full payment due 30 days after the invoice date</td></tr>
<tr><td>Net 60 / Net 90</td><td>Payment due 60 or 90 days after the invoice date; common with large enterprises</td></tr>
<tr><td>EOM (end of month)</td><td>Payment due at the end of the month in which the invoice is dated</td></tr>
<tr><td>Net 30 EOM</td><td>Payment due 30 days after the end of the invoice month</td></tr>
<tr><td>2/10 Net 30</td><td>2% discount if paid within 10 days; otherwise full amount due in 30 days</td></tr>
<tr><td>CIA (cash in advance)</td><td>Payment required before work starts or goods ship</td></tr>
<tr><td>COD (cash on delivery)</td><td>Payment due when goods are delivered</td></tr>
<tr><td>Stage / milestone payments</td><td>Payments tied to agreed project stages</td></tr>
</tbody></table>

<h2>"Due on receipt": clear but not always fast</h2>
<p>"Due on receipt" sounds like the fastest option, but many business clients treat it loosely because it has no specific date. For B2B work, a short fixed term with a date, such as "Net 7, due 21 October 2026", often gets paid faster because it fits neatly into an approval workflow.</p>

<h2>How to choose your terms</h2>
<ul>
<li><strong>Your cash flow.</strong> If you pay staff or suppliers weekly, you cannot comfortably wait 60 days. Choose the shortest terms your clients will accept.</li>
<li><strong>Your clients.</strong> Individuals and small businesses usually accept Net 7–14. Large companies often have fixed policies, so ask during negotiation and price accordingly.</li>
<li><strong>Project size.</strong> Larger projects justify deposits and milestone payments rather than one invoice at the end.</li>
<li><strong>Industry norms.</strong> Some sectors have established terms. Matching them reduces friction; beating them is a competitive advantage if you can afford it.</li>
<li><strong>Local law.</strong> Some jurisdictions cap the maximum payment period in commercial contracts or give rights to late-payment interest. Check what applies to you.</li>
</ul>

<h2>Is an early-payment discount worth it?</h2>
<p>A 2/10 Net 30 discount means the client saves 2% for paying 20 days early. That sounds small, but over a year it is equivalent to a very high annual interest rate: roughly 36% (2% × 365 ÷ 20). Offer it only when receiving cash early is genuinely worth that much to you, for example to avoid an expensive overdraft.</p>

<h2>How to write terms on your invoice</h2>
<p>Always include a calculated due date, not just the term. Examples:</p>
<ul>
<li>"Payment terms: Net 14. Due date: 23 October 2026."</li>
<li>"Payment due within 30 days of invoice date (by 8 November 2026). Please use invoice number 2026-0041 as the payment reference."</li>
<li>"50% deposit due on acceptance; balance due on delivery."</li>
<li>"2% discount if paid by 19 October 2026; otherwise full amount due by 8 November 2026."</li>
</ul>
<p>Add your accepted payment methods and, if agreed in the contract, your late payment policy. The <a href="/invoice-generator">invoice generator</a> has dedicated due date and terms fields so this information always appears in the same place.</p>

<h2>Common mistakes</h2>
<ul>
<li>Writing "Net 30" with no actual date, as clients count from different starting points</li>
<li>Putting different terms on the invoice from the ones in the contract</li>
<li>Accepting 60–90 day terms without adjusting your price</li>
<li>Forgetting to state the currency on international invoices</li>
<li>Never following up when terms are broken, which teaches clients the terms don't matter</li>
</ul>

<h2>Next steps</h2>
<p>Once your terms are set, make sure the rest of the invoice supports them: see <a href="/blog/how-to-create-an-invoice">how to create an invoice</a>, prepare your <a href="/blog/payment-reminder-emails">reminder emails</a>, and decide whether you need a <a href="/blog/late-payment-fees">late payment fee policy</a>.</p>
`,
  },
  {
    slug: "what-is-an-invoice",
    title: "What Is an Invoice? A Plain-English Definition for Small Businesses",
    description:
      "An invoice is a dated request for payment that records what you sold, to whom, and on what terms. Learn what every invoice must contain.",
    category: "invoicing-basics",
    date: "2026-07-28",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "Is an invoice legally binding?",
        a: "An invoice is not usually a contract by itself. It is evidence of a debt that arises from the agreement between you and your client, whether written, emailed or verbal. If the client agreed to buy the goods or services, the invoice records what is owed and on what terms. That is why it should match the accepted quote or contract, and why keeping both together strengthens your position in a dispute.",
      },
      {
        q: "Do I need to be a registered business to send an invoice?",
        a: "In most countries, no. Freelancers and sole traders can invoice under their own legal name without forming a company. You may, however, need to register for tax with your local authority once you start trading or reach a turnover threshold, and some countries require a tax number on every invoice. Check the requirements of your tax authority, such as the IRS, HMRC or ATO, for your situation.",
      },
      {
        q: "Is a handwritten invoice valid?",
        a: "Generally, yes. A handwritten invoice is acceptable in many countries as long as it contains all the required information, is legible and you keep a copy. However, an increasing number of countries require structured electronic invoices for some or all business transactions, and handwritten invoices are harder to number, total and archive correctly. A typed PDF is usually clearer for clients and their accounts teams.",
      },
      {
        q: "What is the difference between an invoice and a bill?",
        a: "They are usually the same document seen from different sides. The seller issues an invoice to request payment; the buyer receives it and often records it as a bill to pay. In everyday speech, \"bill\" is also used for restaurant checks and utility statements. In accounting, invoices you send are accounts receivable and bills you receive are accounts payable.",
      },
      {
        q: "What is the difference between a tax invoice and a regular invoice?",
        a: "A tax invoice includes the extra details a tax system requires, such as the seller's tax registration number, the tax rate and the tax amount, so the buyer can claim the tax back. In many VAT and GST countries, registered businesses must issue tax invoices to business customers. A regular invoice may simply request payment. Requirements vary by country, so check your tax authority's rules for what must appear.",
      },
      {
        q: "What are accounts receivable and accounts payable?",
        a: "Accounts receivable is the money customers owe you for invoices you have sent but have not been paid yet. Accounts payable is the money you owe suppliers for invoices you have received but not yet paid. Tracking receivables shows you who to chase and when cash will arrive; tracking payables helps you plan outgoing payments. Both rely on accurate, numbered invoices.",
      },
      {
        q: "Can I send an invoice before the work is done?",
        a: "Yes, if the client has agreed to it. Invoicing in advance is normal for deposits, subscriptions, retainers billed in advance and goods paid for before shipping. Label the invoice clearly, for example \"Deposit: 50% of quoted price\" or \"Retainer: November 2026\", so nobody mistakes it for payment for completed work. If you only want to show what will be charged, a proforma invoice may be more suitable.",
      },
      {
        q: "Is a PDF invoice legally valid, or do I need an e-invoice?",
        a: "A PDF invoice is accepted in many countries for many types of transaction. However, a growing number of countries require structured e-invoices in certain cases, such as Saudi Arabia's ZATCA system, India's IRN system for larger businesses and Italy's SDI exchange. Our free generator creates PDF invoices only, not structured XML or government-cleared e-invoices, so check your tax authority's current rules if a mandate may apply to you.",
      },
      {
        q: "What happens if an invoice is never paid?",
        a: "You can send reminders, charge late fees or interest if your terms or local law allow, use a collection agency, or pursue the debt through a small claims court. If the debt eventually proves uncollectible, many tax systems let you write it off as a bad debt and, in some VAT systems, reclaim the tax you paid on it. Conditions vary, so check with your accountant or tax authority.",
      },
      {
        q: "Can I issue an invoice in a foreign currency?",
        a: "Yes, invoicing in your client's currency is common and often makes payment easier. State the currency code clearly, such as USD, EUR or GBP, next to the total. Some tax systems require the tax amount to be shown in local currency as well; UK VAT invoices, for example, must show the VAT total in sterling. Agree beforehand who pays bank and currency conversion fees.",
      },
    ],
    content: `
<h2>The short definition</h2>
<p>An invoice is a commercial document issued by a seller to a buyer that itemises goods or services supplied, states the amount owed, and sets a deadline for payment. It is simultaneously a request for money, a record of a transaction, and (in most countries) an accounting document you are legally required to keep for several years.</p>
<p>An invoice is not a receipt and it is not a quote. A quote or estimate comes before the work; an invoice comes after delivery (or at an agreed milestone); a receipt confirms the invoice was paid. Confusing these documents is one of the most common reasons clients delay payment or dispute a balance.</p>
<p>If you sell products, charge for time, or bill retainers, a clear invoice is how you turn completed work into cash. Weak invoices (missing numbers, vague lines, no due date) sit in accounts-payable queues. Strong ones get approved in days.</p>

<h2>What every invoice must contain</h2>
<p>Requirements vary slightly by country and industry, but professional invoices share a core set of fields. Missing any of these raises the chance of rejection:</p>
<ul>
<li><strong>The word "Invoice"</strong>, so the document cannot be mistaken for an estimate, quote, or packing slip.</li>
<li><strong>A unique invoice number</strong>: sequential, never reused, easy to reference in email and bank transfers.</li>
<li><strong>Issue date and due date</strong>, or clear terms such as Net 14 or Net 30.</li>
<li><strong>Your business details</strong>: legal name, address, tax registration number where applicable, and a contact email.</li>
<li><strong>Your client's details</strong>: the legal entity being billed, not only a person's first name or a trading nickname.</li>
<li><strong>Line items</strong>: description, quantity, unit price, and line total for each product or service.</li>
<li><strong>Subtotal, tax, discounts, and the final amount due</strong>, with arithmetic that matches the sum of the lines.</li>
<li><strong>Payment instructions</strong>: bank details, payment link, or accepted methods, placed where they are easy to find.</li>
</ul>
<p>Many buyers also require a purchase order (PO) number, a cost centre, or a project code. Ask for those at kickoff and print them on the invoice, not in a follow-up email three weeks later.</p>

<h2>Why the details matter</h2>
<p>Accounts-payable teams reject invoices for surprisingly small reasons: a missing PO number, an ambiguous due date, a total that does not match the sum of the lines, or billing the wrong legal entity after a company rename. Every rejection adds days or weeks to your payment cycle because the invoice re-enters the approval queue from the start.</p>
<p>A structured template removes much of that risk. When fields always appear in the same place, both you and the client know where to look. That is why tools like our <a href="/invoice-generator">free invoice generator</a> (see <a href="/blog/how-to-generate-an-invoice">how to generate an invoice online</a>) and ready-made <a href="/invoice-templates">invoice templates</a> outperform ad-hoc Word documents for anyone who invoices more than occasionally.</p>

<h2>Invoice numbering that survives an audit</h2>
<p>Use a predictable scheme such as <code>2026-0041</code> or <code>ACME-0041</code>. Prefixing with the year makes year-end filing obvious. Never restart numbering mid-year, never skip numbers without a logged void, and never issue two invoices with the same number. Auditors treat duplicates as a red flag.</p>
<p>If you void an invoice, keep a record of the voided number and why it was cancelled. If you need to correct a mistake after sending, issue a credit note that references the original number rather than silently editing the PDF and resending it.</p>

<h2>Timing: when to issue the invoice</h2>
<p>Issue as soon as delivery is complete or a contractual milestone is met. Waiting until month-end because it "feels tidier" often means you miss the client's weekly payment run and wait another full cycle. For ongoing retainers, invoice on a fixed day each month so cash flow is predictable for both sides.</p>
<p>For larger projects, split billing into deposit, progress, and final invoices. Clients approve smaller, well-labelled amounts faster than one large bill after months of work. See our <a href="/blog/how-to-create-an-invoice">how to create an invoice</a> guide for a step-by-step field checklist.</p>

<h2>How long to keep invoices</h2>
<p>Retention rules vary by jurisdiction, but most expect between five and seven years of sales records. Store a PDF copy of every invoice you send, not only the data inside accounting software. PDFs are what banks, tax inspectors, and dispute mediators ask for when something goes wrong.</p>
<p>Organise files by year and client name so you can retrieve any document in seconds. Pair each paid invoice with its receipt or bank reference when you reconcile.</p>

<h2>Invoice vs related documents</h2>
<p>If you are unsure whether you need an invoice, a receipt, an estimate, or a quotation, read the comparison guides: <a href="/blog/invoice-vs-receipt">invoice vs receipt</a>, <a href="/blog/invoice-vs-estimate">invoice vs estimate</a>, and <a href="/blog/invoice-vs-quotation">invoice vs quotation</a>. Using the wrong label creates confusion about whether payment is still owed.</p>


<h2>Who uses invoices and why</h2>
<p>Freelancers use invoices to turn finished deliverables into receivables. Product sellers use them to document shipments and tax. Agencies use them for retainers, milestones, and out-of-scope extras. Consultants and nonprofits use them whenever a client or grant requires a formal billing artefact. In every case the document answers the same questions: who owes whom, for what, how much, and by when.</p>
<p>Without invoices, cash collection becomes a chain of informal reminders that are hard to audit. With them, you can age receivables, forecast cash, and prove what was agreed when a dispute appears months later. That operational value is why even tiny businesses benefit from treating invoicing as a system rather than an afterthought.</p>
<h2>Pro forma, commercial, and recurring invoices</h2>
<p>A pro forma invoice is a preliminary bill used for customs, deposits, or planning. It is usually not a demand for final payment and should be labelled clearly so it is not confused with a tax invoice. A commercial invoice for goods trade may need Incoterms, country of origin, and HS codes in addition to ordinary billing fields. Recurring invoices repeat on a schedule for retainers or subscriptions; they still need unique numbers each period and an explicit service period on every PDF.</p>
<p>Choose the document type that matches the moment in the sales cycle. Sending a full invoice before acceptance of a quote creates awkward credit notes later. Sending only chat messages when a client needs a PDF for their finance system creates unpaid work that feels invisible to their process.</p>
<h2>Digital workflows and client portals</h2>
<p>Many larger buyers insist you upload invoices to a vendor portal with coded fields. Treat the portal as the system of record for delivery, but keep your own PDF archive. Portal UIs change; your numbered PDF is what you attach in a chase email when something stalls. If a portal rejects a file, fix the rejected field rather than emailing a side-channel PDF that AP will never post.</p>
<p>Electronic invoicing mandates in some countries add clearance, QR codes, or government IDs. Those rules sit on top of the ordinary commercial invoice. They do not replace the need for clear line items and payment instructions. When in doubt, ask the buyer what their AP checklist requires before your first bill.</p>
<h2>Create one now</h2>
<p>You can build a clear, professional invoice with every field above in a few minutes using our <a href="/invoice-generator">free invoice generator</a>: live preview, no watermark, instant PDF download. Pick a layout from <a href="/invoice-templates/modern">Modern</a>, <a href="/invoice-templates/corporate">Corporate</a>, or another style that matches how your clients file paperwork, fill in the details once, and send a document that is ready to approve.</p>
`,
  },
  {
    slug: "how-to-create-an-invoice",
    title: "How to Create an Invoice: A Step-by-Step Guide (2026)",
    description:
      "Eight practical steps to create a professional invoice that gets paid on time, with field-by-field guidance and a free generator.",
    category: "guides",
    date: "2026-07-22",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "Can I create an invoice in Word, Excel or Google Docs?",
        a: "Yes. Word, Excel and Google Docs templates can produce a perfectly good invoice. The risks are manual: broken formulas, copied numbers that are not updated, and editable files that clients can change. If you use them, keep a numbering log, double-check totals, and always send the final invoice as a PDF. A dedicated generator calculates totals automatically and keeps the layout consistent each time.",
      },
      {
        q: "How do I create an invoice if I do not have a business name?",
        a: "Use your own legal name as the seller. Sole traders and freelancers in most countries can invoice without a separate business name or company. Add your address, contact email and any tax number you hold. If you trade under a brand name, you can show it too, but your legal name should appear so the client knows exactly who they are paying and contracting with.",
      },
      {
        q: "What number should my first invoice start with?",
        a: "You can start with any number, as long as you continue in sequence without gaps or duplicates. Common choices are 0001, a year-based format such as 2026-001, or a client prefix such as ACME-001. Starting at a higher number like 1001 is generally fine. What matters is that every invoice gets a unique number and you never reuse one, even after a cancellation.",
      },
      {
        q: "Do I have to put my home address on an invoice?",
        a: "Many tax and company rules require a business address on invoices, but it does not always have to be your home. Depending on your country and business type, you may be able to use a registered office, a coworking address or a virtual office service that accepts mail. Check what your tax authority and company registry accept before you use an alternative address.",
      },
      {
        q: "Can I create an invoice on my phone?",
        a: "Yes. Our free invoice generator runs in your mobile browser, so you can fill in the details, preview the layout and download a PDF without installing an app or creating an account. Your draft is saved in your browser's local storage on that device. For long invoices with many line items, a larger screen is easier, but for quick jobs a phone works well.",
      },
      {
        q: "How do I show a deposit or partial payment that has already been received?",
        a: "List the full charges as normal, then show the amount already paid as a separate line and the balance due underneath. Reference the deposit invoice or payment date so the client can match it. Our free generator has dedicated amount paid and balance due fields that calculate this for you. Make sure the final figure the client must pay is the most prominent number on the invoice.",
      },
      {
        q: "Should I show my hourly rate and hours, or just a total?",
        a: "Show the hours and rate whenever you bill by time. Clients approve invoices faster when they can see how the total was calculated, and many finance teams require it for hourly work. For fixed-price projects, a description of the deliverable and the agreed price is usually enough. Follow whatever your contract or quote set out, so the invoice mirrors what the client accepted.",
      },
      {
        q: "How do I create an invoice for a client in another country?",
        a: "Add the client's full legal name, address and tax ID if they have one, choose the currency you agreed, and include international bank details such as IBAN and SWIFT or BIC codes. Check whether you need to charge tax or whether a reverse charge or export rule applies, as this differs by country. State who pays transfer fees so you receive the full amount.",
      },
      {
        q: "Does an invoice need to be signed?",
        a: "In most countries, no. An invoice is valid without a signature as long as it contains the required details. Some clients, government bodies or local rules do ask for a signed or stamped invoice, so check with the client if you are unsure. Adding a scanned signature is quick and can make the document feel more formal for clients who expect it.",
      },
      {
        q: "Can I edit an invoice after I have sent it?",
        a: "You should not change an invoice that has already reached the client, because their copy will no longer match yours. Instead, issue a credit note that cancels or reduces the original, then send a corrected invoice with a new number if needed. If you spot a mistake before sending, simply fix it. Small typos in contact details can usually be resolved by a quick confirmation email.",
      },
    ],
    content: `
<h2>Before you start</h2>
<p>Gather three things before you open any template: your legal business details, the client's legal billing details, and an agreed scope with prices. Ninety percent of late payments trace back to a disagreement about one of those three, not to the invoice layout itself.</p>
<p>If the client uses purchase orders, get the PO number in writing before you invoice. If tax applies, confirm whether you must charge it and which registration number belongs on the document. A five-minute check now prevents a three-week rejection later.</p>

<h2>Step 1: Pick a template</h2>
<p>Choose a layout that matches how your client files paperwork. Enterprise accounts payable teams prefer dense, reference-heavy layouts such as <a href="/invoice-templates/corporate">Corporate</a>. Creative clients often respond well to <a href="/invoice-templates/modern">Modern</a> or <a href="/invoice-templates/creative">Creative</a>. Solo consultants who want quiet clarity often choose <a href="/invoice-templates/minimal">Minimal</a>.</p>
<p>The template should never hide the amount due, the due date, or the payment method. Those three facts should be findable in a few seconds. Browse more options on our <a href="/invoice-templates">invoice templates</a> page, then open the one you like inside the generator.</p>

<h2>Step 2: Add your business identity</h2>
<p>Upload your logo at a modest size, then add your legal business name, registered address, email, phone, and tax registration number if you have one. If you trade under a different name from your registered entity, show both: the registered name for legal clarity and the trading name for recognition.</p>
<p>Inconsistent seller details across invoices make reconciliation harder for you and look unprofessional to finance teams. Keep one saved profile and reuse it.</p>

<h2>Step 3: Add the client</h2>
<p>Bill the legal entity named in the contract or purchase order. Include an attention line for the person who approves payment, and add their PO number, project code, or department if they use one. Billing a trading name when the contract is with a parent company is a frequent cause of "we never received this" replies.</p>
<p>For international clients, confirm the country, tax ID format, and whether the billing address differs from the delivery address.</p>

<h2>Step 4: Set the invoice number and dates</h2>
<p>Use your next sequential number. Never reuse one. Set today's date (or the supply date, if different) as the issue date, and a due date that matches your agreed terms. "Due on receipt" is legitimate for new or one-off clients; Net 14 and Net 30 are more common for ongoing B2B work.</p>
<p>Write the due date as a calendar date as well as a term. "Net 30" alone forces the client to calculate; "due 25 October 2026" removes ambiguity. For more on numbering discipline, see <a href="/blog/what-is-an-invoice">what an invoice is</a>.</p>

<h2>Step 5: Itemise the work</h2>
<p>Write descriptions your client can approve without asking you a question. "Website redesign: homepage and four inner pages, phase 1 of 2" beats "Design work". Include units (hours, seats, units shipped), rates, and quantities so the maths is transparent.</p>
<ul>
<li>For hourly work, list period covered and attach or summarise a timesheet.</li>
<li>For products, include SKUs or product codes when the buyer tracks inventory.</li>
<li>For retainers, name the month or period explicitly.</li>
<li>For milestones, state "Phase 2 of 3: 40% of contract value" and what remains.</li>
</ul>
<p>Real-world layouts for these scenarios are covered in our <a href="/blog/invoice-examples">invoice examples</a> guide.</p>

<h2>Step 6: Apply tax, discounts and shipping</h2>
<p>Apply discounts before tax unless local rules say otherwise, then apply the correct tax rate to the taxable amount. Show tax as its own line (or lines, if multiple rates apply). If you are not registered for tax, say so explicitly so the client does not try to reclaim an amount that was never charged.</p>
<p>Shipping, handling, and expenses should appear as separate lines when material. Mixing them into service fees makes audits and client reviews harder. For jurisdiction-specific fields, see our <a href="/blog/tax-invoice-guide">tax invoice</a>, <a href="/blog/gst-invoice-guide">GST</a>, and <a href="/blog/vat-invoice-guide">VAT</a> guides.</p>

<h2>Step 7: Add payment terms and notes</h2>
<p>State accepted payment methods, bank details (or a payment link), any late-payment interest you agreed in the contract, and a short thank-you. Put bank details on the invoice itself (not only in the email body) so they survive filing systems that store the PDF alone.</p>
<p>Optional notes that help: reference to the accepted proposal or quote number, wire fee responsibility for international transfers, and a reminder of the PO number. A polite, specific note measurably improves payment speed compared with a blank footer.</p>

<h2>Step 8: Download and send</h2>
<p>Export as PDF, never an editable spreadsheet or word-processor file as your document of record. Name the file <code>Invoice-2026-0041-ClientName.pdf</code>. Email it to accounts payable with the invoice number and due date in the subject line, and CC your day-to-day contact so they can push approval internally.</p>
<p>For subject lines, reminders, and escalation wording, use our companion guide: <a href="/blog/how-to-send-an-invoice">how to send an invoice</a>.</p>

<h2>Common pitfalls at creation time</h2>
<ul>
<li>Leaving the due date blank or writing "ASAP".</li>
<li>Rounding totals by hand so lines no longer sum correctly.</li>
<li>Forgetting the PO after the client said they require one.</li>
<li>Sending before the deliverable is actually complete, which invites disputes.</li>
</ul>
<p>Avoid the longer list in <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>.</p>


<h2>Gathering inputs the day before you bill</h2>
<p>Create a short intake checklist for every new client: legal name, billing address, AP email, tax IDs, PO rules, currency, and default terms. Store it where anyone on your team can find it. When a project ends on a Friday afternoon, you should not be hunting message threads for a PO number.</p>
<p>Also gather proof of delivery or acceptance: a sign-off email, timesheet approval, or shipping confirmation. If a dispute arises, that evidence sits beside the invoice. Building the PDF without knowing what was accepted is how premature invoices get rejected and relationships cool.</p>
<h2>Discounts, retainers, and credit lines</h2>
<p>Show discounts as their own lines or as clearly labelled adjustments so the client sees the journey from list price to amount due. If a deposit was already paid, add a credit line that references the deposit invoice number. Net total should be obvious: charges for this period, minus credits, plus tax, equals amount due now.</p>
<p>For retainers, name the period and the included scope. For prepaid packages, show remaining balances in the notes when helpful. Transparency reduces clarification emails that freeze approval for days.</p>
<h2>Quality check before export</h2>
<p>Read the PDF as if you were a stranger in accounts payable. Can you see who you are, who you are billing, what you delivered, what to pay, how to pay, and by when, without endless scrolling? Open the file on your phone. Tiny logos and pale grey text that look fine in a design tool often fail in real inboxes.</p>
<p>Spell-check client names and bank account digits twice. A single wrong IBAN can bounce a wire and burn a week. When amounts are material, have a second person glance at entity, PO, tax, and totals before you hit send.</p>
<h2>Do it now</h2>
<p>Our <a href="/invoice-generator">free invoice generator</a> walks through every step above with a live preview and instant PDF download. Fill the fields once, check the totals, download, and send, without rebuilding the layout from scratch each time.</p>
`,
  },
  {
    slug: "invoice-vs-receipt",
    title: "Invoice vs Receipt: What Is the Difference?",
    description:
      "An invoice requests payment; a receipt proves payment was made. Learn when to issue each and what happens if you confuse them.",
    category: "comparisons",
    date: "2026-07-15",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    related: ["donation-receipt-template", "ecommerce-invoice-shopify-woocommerce"],
    faqs: [
      {
        q: "Is a business legally required to give a receipt?",
        a: "It depends on your country and the type of sale. Many jurisdictions require retailers to provide a receipt for consumer sales, and tax rules may require businesses to issue receipts or simplified invoices for cash transactions. In business-to-business work, receipts are usually given on request. Even where no rule applies, providing one is good practice because it helps the customer and reduces disputes.",
      },
      {
        q: "Can I issue a receipt without first sending an invoice?",
        a: "Yes. When payment and delivery happen at the same moment, such as a shop sale, a café order or an instant online checkout, a receipt alone is usually enough because there was never an unpaid balance to track. If a business customer needs to reclaim tax, they may still ask for a tax invoice or a receipt that contains the required tax details.",
      },
      {
        q: "Does a receipt need to show tax?",
        a: "If you are registered for VAT, GST or sales tax and the customer may need to reclaim it, the receipt should show the tax charged and your registration number. Some countries allow a simplified invoice for small retail sales. In the UK, for example, a less detailed VAT invoice can be used for supplies of up to £250 including VAT. Check your tax authority's rules for what your receipts must contain.",
      },
      {
        q: "Is an emailed or digital receipt as valid as a paper one?",
        a: "In most countries, yes. Tax authorities generally accept electronic receipts as long as they are complete, legible and retained for the required period. A PDF or email receipt is often easier to store and search than paper. Make sure it still includes the essentials: your details, the date, the amount received, the payment method and the invoice or order it relates to.",
      },
      {
        q: "Do I need receipts to claim business expenses on my taxes?",
        a: "Usually you need some evidence, and receipts are the most reliable kind. In the US, for example, IRS guidance generally requires documentary evidence such as receipts for travel and gift expenses of $75 or more, and for lodging regardless of amount, while other expenses still need adequate records. Other tax authorities have their own rules, so check with the IRS, HMRC or your local authority.",
      },
      {
        q: "What is the difference between a sales receipt, a payment receipt and an acknowledgement receipt?",
        a: "A sales receipt records a sale paid for on the spot, listing items and the amount paid. A payment receipt confirms money received against an earlier invoice and references that invoice number. An acknowledgement receipt confirms you received something, such as documents, goods or a deposit, and may not involve full payment at all. Use the title that matches what actually happened.",
      },
      {
        q: "Should receipts have their own numbers?",
        a: "Yes, it is good practice. Give receipts a unique, sequential number from their own series, such as RCT-2026-0015, separate from your invoice numbers. That makes it easy to find a receipt, prove it is genuine and match it to the invoice or sale it relates to. Some tax systems require numbered receipts or receipts from approved point-of-sale systems, so check local requirements.",
      },
      {
        q: "What is a cash memo, and is it an invoice or a receipt?",
        a: "A cash memo is a document used in some countries, including Pakistan and India, for cash sales where payment is made on the spot. It works as both a bill and proof of payment, because it lists the goods and confirms the cash was received at the same time. For credit sales, where the customer pays later, a proper invoice is used instead, followed by a receipt on payment.",
      },
      {
        q: "Who keeps the original receipt, the buyer or the seller?",
        a: "The buyer keeps the original receipt as proof of payment, for expense claims, returns, warranties and tax records. The seller keeps a copy, either on paper or electronically, as part of its sales records. Both sides should retain them for the period their tax authority requires, which in many countries is several years. Digital copies make it easy for both parties to keep identical records.",
      },
      {
        q: "Can I issue a receipt for a deposit?",
        a: "Yes. A deposit receipt should state the amount received, the date, the payment method, what the deposit is for and the quote, order or invoice it relates to. Also show the remaining balance and whether the deposit is refundable. In some VAT systems, receiving a deposit can create a tax obligation, so if you are tax-registered, check whether a tax invoice is needed at that point.",
      },
    ],
    content: `
<h2>The core difference</h2>
<p>An invoice is issued before payment (or before the final payment clears) and asks for money. A receipt is issued after payment and confirms money was received. One creates a receivable on your books; the other marks that receivable as settled.</p>
<p>Mixing the labels causes real operational problems. If you mark a paid document "Invoice", a client may pay twice, or their system may keep showing the balance as open. If you only ever issue receipts and never invoices, you lose a clear audit trail of what was owed and when it was due.</p>

<h2>Side-by-side comparison</h2>
<table><thead><tr><th>&nbsp;</th><th>Invoice</th><th>Receipt</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Request payment</td><td>Confirm payment</td></tr>
<tr><td>Timing</td><td>After delivery (or at a milestone), before payment</td><td>At or after payment clears</td></tr>
<tr><td>Includes due date</td><td>Yes</td><td>Usually no</td></tr>
<tr><td>Amount meaning</td><td>Amount owed</td><td>Amount received</td></tr>
<tr><td>Used by buyer for</td><td>Approving and scheduling payment</td><td>Expense claims, warranty, returns, tax records</td></tr>
<tr><td>Creates a receivable</td><td>Yes</td><td>No</td></tr>
<tr><td>Typical label</td><td>"Invoice" plus unique number</td><td>"Receipt" or "Payment confirmation"</td></tr>
</tbody></table>

<h2>When you need both</h2>
<p>For most B2B work you issue an invoice first, then a receipt (or a paid stamp / payment confirmation) when the transfer clears. The receipt should reference the original invoice number so both parties can match documents during reconciliation.</p>
<p>For retail, café, or instant online checkout, a receipt alone is often enough because payment and delivery happen at the same moment. There was never an unpaid balance to track. Even then, some business buyers still ask for a formal tax invoice for reclaim purposes, so ask before you assume a till receipt is enough.</p>

<h2>What each document should include</h2>
<h3>On the invoice</h3>
<ul>
<li>Unique invoice number, issue date, and due date</li>
<li>Seller and buyer legal details</li>
<li>Itemised lines, tax breakdown, and total due</li>
<li>Payment instructions</li>
</ul>
<h3>On the receipt</h3>
<ul>
<li>Confirmation that payment was received (amount and date)</li>
<li>Payment method (card, bank transfer, cash)</li>
<li>Reference to the invoice number being settled</li>
<li>Seller details and a receipt or confirmation number</li>
</ul>
<p>If a payment only partially settles an invoice, say so clearly: "Partial payment of £800 against invoice 2026-0041; balance £1,600 remaining." Ambiguous partial receipts create disputes months later.</p>

<h2>Accounting and tax angle</h2>
<p>Invoices support revenue recognition and receivables tracking. Receipts support proof of settlement and, for buyers, expense evidence. Tax authorities often want both sides of the story for larger B2B transactions: the tax invoice showing tax charged, and evidence that it was paid.</p>
<p>Never treat a bank statement line alone as a substitute for a proper receipt when a client asks for one. The statement proves money moved; the receipt ties that money to a specific invoice and supply.</p>

<h2>Common mistakes</h2>
<ul>
<li>Labelling a paid document "Invoice" without marking it paid: clients may pay twice or file it as unpaid.</li>
<li>Issuing a receipt with no reference to the original invoice number.</li>
<li>Using receipts as your only sales record, which makes year-end reconciliation painful.</li>
<li>Sending a receipt before funds clear (especially cheques or slow international wires).</li>
<li>Changing totals on a "receipt" to match what the client paid when the invoice was wrong. Fix the invoice with a credit note instead.</li>
</ul>


<h2>How bookkeeping treats each document</h2>
<p>On accrual books, issuing an invoice typically records revenue and a receivable. Receiving payment clears the receivable and increases cash. The receipt is operational proof for the customer and a useful attachment for your records; the accounting event is the payment match against the invoice. Cash-basis businesses may recognise income when paid, but they still benefit from invoices as a way to track what is outstanding.</p>
<p>If you only issue receipts, you lose a clean list of unpaid work. If you only issue invoices and never confirm payment, customers chasing expense reports ask you for documents you never prepared. Budget a few minutes to close the loop every time money clears.</p>
<h2>Retail, marketplaces, and card payments</h2>
<p>Card terminals and online checkouts often produce a payment receipt automatically. That receipt proves the card charge. For a business buyer who needs a tax invoice, you may still need to issue a separate document with registration numbers and a proper breakdown. Ask early whether they need a tax invoice for reclaim or whether the card receipt is enough.</p>
<p>Marketplaces sometimes remit net of fees. Your invoice to the end customer, if any, and your payout report from the platform are different artefacts. Do not assume one PDF satisfies both sales documentation and creator payout reconciliation.</p>
<h2>Disputes, refunds, and chargebacks</h2>
<p>When a refund happens, document it with a credit note or refund receipt that references the original invoice and payment. Chargebacks are easier to contest when you can produce the invoice, the delivery evidence, and the receipt together. Keep them filed under the same client and year so retrieval takes seconds, not hours.</p>
<p>Partial refunds should state the remaining balance explicitly. Ambiguous refund emails that never become documents are how both sides end up with different memories of what was settled.</p>

<h2>Labelling paid invoices clearly</h2>
<p>Some businesses stamp the original invoice PDF "PAID" instead of issuing a separate receipt. That can work if the stamp includes payment date and method, and if your client accepts it for their records. When in doubt, send a short separate receipt that references the invoice number. It takes a minute and prevents double-payment risk.</p>
<p>Never change the invoice total after payment to match a wrong transfer. Issue a credit or request the balance; altered history undermines audits.</p>
<h2>Practical workflow</h2>
<ol>
<li>Deliver the work or ship the goods.</li>
<li>Create and send a numbered invoice (PDF).</li>
<li>Record the receivable in your books or tracker.</li>
<li>When payment clears, mark the invoice paid and send a receipt referencing that number.</li>
<li>Store both PDFs together by year and client.</li>
</ol>
<p>For related distinctions, see <a href="/blog/invoice-vs-estimate">invoice vs estimate</a> and <a href="/blog/invoice-vs-quotation">invoice vs quotation</a>. To create the unpaid document correctly the first time, use the <a href="/invoice-generator">free invoice generator</a>.</p>
`,
  },
  {
    slug: "invoice-vs-estimate",
    title: "Invoice vs Estimate: Which Document Should You Send?",
    description:
      "Estimates are informed projections; invoices are binding requests for payment. Learn when to send each and how to convert one into the other.",
    category: "comparisons",
    date: "2026-07-08",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    related: ["estimate-template"],
    faqs: [
      {
        q: "Is an estimate legally binding?",
        a: "Generally, an estimate is not a fixed price; it is a reasoned projection. However, consumer protection laws in some places limit how far a final bill can exceed a written estimate without the customer's consent, for example for auto repairs in some US states. Clients may also rely on your estimate when deciding to hire you. Keep estimates realistic, state assumptions, and get approval before going significantly over.",
      },
      {
        q: "Should I charge for preparing an estimate?",
        a: "It depends on your industry and the effort involved. Simple estimates are usually free, as they help win work. When an estimate needs a site visit, diagnosis, survey or detailed design work, many businesses charge a fee and credit it against the final invoice if the client goes ahead. Tell the client about any fee before you start, and state whether it will be deducted later.",
      },
      {
        q: "Can I convert an estimate into an invoice automatically?",
        a: "Many accounting and invoicing tools can turn an approved estimate into an invoice with one click, copying the line items. If you prepare documents manually, start from the same line items and update quantities to actuals. Either way, the invoice needs its own number from your invoice sequence, an issue date and a due date, and it should reference the estimate number for easy comparison.",
      },
      {
        q: "What if the client refuses to pay because the invoice is higher than the estimate?",
        a: "Explain the difference line by line and show any written approvals for extra work or changed scope. If the increase falls within the variance you stated on the estimate, point to that. If you went over without approval, consider a compromise, such as a partial credit note. To prevent this, pause and get written approval as soon as you see costs heading above the estimate.",
      },
      {
        q: "Should an estimate include tax?",
        a: "Yes, it should at least say how tax will be treated. Either show the expected tax as a separate line or state clearly that prices exclude tax. Consumers in particular tend to read an estimate total as the full amount they will pay, so leaving tax unclear can cause friction when the invoice arrives. Use the same tax treatment on the estimate and the final invoice.",
      },
      {
        q: "Should estimates be numbered?",
        a: "Yes. Give each estimate a unique number from its own series, such as EST-2026-012, and a version number if you revise it. Numbering makes it easy to refer to the right version in emails, link the final invoice to the approved estimate and find documents quickly in a dispute. Keep estimate numbers separate from your invoice sequence, since estimates are not sales records.",
      },
      {
        q: "What is the difference between an estimate, a bid and a proposal?",
        a: "An estimate is an approximate cost for a job. A bid is a price submitted in competition with other suppliers, often in response to a tender, and may be firm. A proposal is a broader sales document that explains your approach, timeline and value, and usually includes pricing as one section. Use the term your client asked for, and make clear whether the price is fixed.",
      },
      {
        q: "What should I do if the job costs less than the estimate?",
        a: "Invoice the actual amount. Billing the lower figure, with a short note that the job came in under estimate, builds trust and makes clients more likely to hire you again. The exception is a fixed-price quotation, where the agreed price applies regardless of actual cost. That is one more reason to label documents accurately as an estimate or a quotation.",
      },
      {
        q: "Is a verbal estimate enough?",
        a: "A verbal estimate can work for tiny jobs, but it is risky. Memories differ, and without a record you cannot show what assumptions or ranges you gave. Follow up any verbal figure with a short written estimate or email that states the price range, what is included and how long it is valid. That written record protects you if the final invoice is questioned.",
      },
      {
        q: "Does a client need to sign an estimate?",
        a: "A signature is not usually required, but written approval is very useful. Ask the client to confirm by email or signature that they accept the estimate and its assumptions before you schedule the work. That approval shows the client agreed to go ahead on that basis, which helps if the final invoice is questioned. For larger jobs, convert the approved estimate into a quotation or contract.",
      },
    ],
    content: `
<h2>Definitions</h2>
<p>An <strong>estimate</strong> is a good-faith projection of what a job will cost. It is not a fixed contract price. It usually carries a validity window and, ideally, a stated variance range (for example, "±10% depending on site conditions"). An <strong>invoice</strong> is a definite request for a specific amount, issued once work is delivered or a milestone is met.</p>
<p>Clients often use "estimate", "quote", and "proposal" interchangeably in conversation. On paper, keep the labels precise. If you mean a firm price, send a quotation. If you mean a projection, send an estimate. If you mean "please pay this", send an invoice. See also <a href="/blog/invoice-vs-quotation">invoice vs quotation</a>.</p>

<h2>When an estimate is the right call</h2>
<ul>
<li>Scope is not fully defined yet: discovery is incomplete.</li>
<li>Costs depend on site conditions, third-party pricing, or actual hours worked.</li>
<li>The client is comparing suppliers and needs a ballpark quickly.</li>
<li>Materials prices are volatile and you cannot lock a supplier quote yet.</li>
</ul>
<p>Estimates help you win conversations without locking yourself into an underpriced fixed fee. They also help clients budget before they ask for a formal quote.</p>

<h2>When you should skip the estimate</h2>
<p>If the scope is clear, materials are locked, and the client wants a price they can accept as a contract, send a quotation instead. Repeatedly sending "estimates" that you treat as fixed prices trains clients to expect immovable totals while you still absorb overruns.</p>
<p>For simple retail or catalogue sales with published prices, you may go straight to order confirmation and invoice without an estimate at all.</p>

<h2>Protecting yourself on estimates</h2>
<p>Always include three protective elements:</p>
<ol>
<li><strong>Validity period</strong>: for example, "Valid for 30 days from the date above."</li>
<li><strong>Assumptions list</strong>: what you assumed about access, materials, round trips, revisions, or third-party licences.</li>
<li><strong>Variation rule</strong>: how extras will be priced ("additional hours at £X; materials at cost + 15%").</li>
</ol>
<p>Without those lines, many clients treat estimates as fixed prices and argue when the final invoice is higher. State clearly that the estimate is not an invoice and does not request payment.</p>

<h2>Converting an estimate into an invoice</h2>
<p>When the job is done (or a billable milestone is reached):</p>
<ol>
<li>Keep the same line-item structure so the client can compare estimate and invoice side by side.</li>
<li>Add a unique invoice number, issue date, and due date.</li>
<li>Replace projected quantities with actuals where they differ.</li>
<li>Show variations as their own clearly labelled lines, never as a silent increase to an existing line.</li>
<li>Reference the estimate number in the notes: "Based on estimate EST-2026-012, approved 3 March 2026."</li>
</ol>
<p>If the final total is within the stated variance, say so. If it exceeds the variance, attach or cite the written approval for the change before you send the invoice.</p>

<h2>Deposits and progress billing</h2>
<p>You can invoice a deposit against an accepted estimate or quote before work starts. Label it clearly as a deposit invoice and state how it will be applied to the final bill. Progress invoices should name the milestone and the percentage of contract value they represent.</p>
<p>Never send a document labelled "estimate" that includes bank details and a due date as if payment were already owed. That confuses filing systems and clients alike.</p>

<h2>Communication tips</h2>
<ul>
<li>In email, say "I've attached an estimate (not an invoice)" when that distinction matters.</li>
<li>Ask the client to confirm assumptions in writing before you schedule the work.</li>
<li>Update the estimate if scope changes mid-discussion, and do not silently carry an outdated PDF forward.</li>
</ul>


<h2>Language that keeps estimates from becoming fake quotes</h2>
<p>Write "This is an estimate, not a fixed quotation" near the total. Add that the final invoice may vary based on actual hours and approved extras. Those sentences feel cautious, but they prevent angry threads when reality diverges from the first sketch of scope.</p>
<p>If a client says they need something so finance can reserve budget, an estimate is perfect. If they need a price they can raise a <a href="/blog/invoice-vs-purchase-order">purchase order</a> against, escalate to a quotation with firm scope. Matching document type to the buyer's internal process is part of getting paid later without drama.</p>
<h2>Range estimates and capped estimates</h2>
<p>A range communicates uncertainty honestly. A capped estimate that will not be exceeded without written approval protects the client while giving you a stop point for conversation. Either approach beats a single fake-precise number you cannot defend when conditions change.</p>
<p>When you invoice inside a cap, show actuals and remaining headroom. When you need to exceed a cap, pause and get approval before continuing, then invoice the approved overrun as a clearly labelled variation line rather than quietly inflating an existing one.</p>
<h2>Estimates in competitive bids</h2>
<p>Buyers comparing suppliers often ask for estimates first. Keep formatting comparable: same categories of cost, clear exclusions, and validity dates. After you win, convert promptly to a quotation or order confirmation so the working relationship rests on a firm baseline rather than an informal message thread that nobody can find later.</p>
<p>Archive every estimate you send with its version date. Mid-negotiation edits are normal; showing an outdated PDF as if it were current is how distrust starts before work even begins.</p>
<h2>Related reading and next steps</h2>
<p>For the payment request itself, follow <a href="/blog/how-to-create-an-invoice">how to create an invoice</a>. For freelancers who live on estimates-then-invoices, see the <a href="/blog/freelancer-invoice-guide">freelancer's invoice guide</a>.</p>
<p>When the job is done, produce the final document with our <a href="/invoice-generator">invoice generator</a> and a clean layout such as <a href="/invoice-templates/modern">Modern</a> or <a href="/invoice-templates/classic">Classic</a>.</p>
`,
  },
  {
    slug: "invoice-vs-quotation",
    title: "Invoice vs Quotation: The Difference Explained",
    description:
      "A quotation is a fixed-price offer; an invoice is a request for payment. Understand the legal and practical differences before you send either.",
    category: "comparisons",
    date: "2026-07-01",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "Can I withdraw a quotation after sending it?",
        a: "In many legal systems, you can withdraw a quotation before the client accepts it, as long as you tell them clearly. Once accepted, it usually becomes binding. The position can differ if you promised to keep the offer open for a set period, or under some countries' laws, so check locally. A clear validity date and a statement that prices are subject to availability give you more flexibility.",
      },
      {
        q: "Is a quotation the same as a proforma invoice?",
        a: "No. A quotation is an offer made before the client has agreed to buy. A proforma invoice usually comes after the client has agreed in principle and shows exactly what the final invoice will look like, often so they can pay in advance or arrange import paperwork. Neither is a demand for payment recorded as a sale; that is the role of the final invoice.",
      },
      {
        q: "Can a client negotiate a quotation?",
        a: "Yes. If the client proposes different prices or terms, that is usually treated as a counteroffer rather than acceptance. If you agree to the changes, issue a revised quotation with a new version number, such as Q-2026-018-v2, and ask the client to accept that version in writing. That way your invoice can reference the exact version both sides agreed.",
      },
      {
        q: "What if my costs go up after the client accepts a fixed quotation?",
        a: "In general, you bear the extra cost, because a quotation is a firm price for the defined scope. You can only raise the price if the client agrees, if the scope changed, or if your quotation included a price adjustment clause, for example for material costs or exchange rates. For long or volatile projects, include such a clause and keep validity periods short.",
      },
      {
        q: "Does a client have to sign a quotation for it to be accepted?",
        a: "Not always. In many places, a clear written acceptance, such as an email saying \"We accept quotation Q-2026-018\", is enough to form an agreement, and sometimes conduct, like asking you to start work, can count too. A signature is stronger evidence and some clients require one. To avoid doubt, state on the quotation how it should be accepted.",
      },
      {
        q: "Can I invoice the full quoted amount if the client cancels part way through?",
        a: "Usually only if your terms allow it. Without a cancellation clause, you can normally invoice for work completed and costs already incurred, but not the full price. Many quotations include a cancellation clause that sets fees for cancelling at each stage, or make deposits non-refundable. Put those terms on the quotation so they form part of the accepted agreement.",
      },
      {
        q: "What is an RFQ?",
        a: "RFQ stands for request for quotation. It is a document a buyer sends to suppliers asking them to quote for specific goods or services, usually so it can compare prices on the same basis. Respond in the format and by the deadline the buyer sets, answer every question, and include your validity period and terms. If you win, the buyer may issue a purchase order that references your quote.",
      },
      {
        q: "Can I send an invoice without sending a quotation first?",
        a: "Yes. Many small or routine jobs are agreed verbally or by email at published prices, and the invoice is the first formal document. A quotation is most useful when the job is large, custom or likely to be disputed. If you skip it, make sure the price and scope were clearly agreed beforehand, so the invoice does not come as a surprise.",
      },
      {
        q: "Does a quotation turn into a purchase order?",
        a: "Not directly. The quotation is your offer as the seller. If the client accepts, their purchasing team may issue a purchase order, which is the buyer's own document confirming the order and the price, often referencing your quotation number. You then put the PO number on your invoice. Many large clients will not pay an invoice that does not show a valid PO number.",
      },
      {
        q: "Do I charge tax on a quotation?",
        a: "No tax is charged on a quotation itself, because no sale has happened yet. The quotation should simply show how tax will apply, either as a separate estimated line or with a clear statement that prices exclude or include tax. Tax becomes due under your local rules when the supply happens, an invoice is issued or payment is received, depending on your tax system.",
      },
    ],
    content: `
<h2>A quotation is an offer</h2>
<p>Unlike an estimate, a quotation is a firm price for a defined scope. Once the client accepts it in writing, most legal systems treat that acceptance as forming (or confirming) a contract. You generally cannot raise the price later without agreement. That precision is exactly why quotations must be written carefully: vague scope plus a firm number is how disputes start.</p>
<p>An estimate says "we think it will cost about this." A quotation says "we will do this for this price." An invoice says "please pay this amount for what was supplied."</p>

<h2>An invoice is a demand for payment</h2>
<p>The invoice comes after acceptance and delivery (or at an agreed milestone). It should mirror the accepted quotation line for line wherever possible. If the totals differ, explain why on the invoice itself and reference an approved change request or variation order. Silent increases destroy trust and slow approval.</p>
<p>Invoices carry due dates and payment instructions. Quotations carry validity periods and acceptance blocks. Do not merge the two into one ambiguous PDF.</p>

<h2>Quotation checklist</h2>
<ul>
<li>Quotation number and date</li>
<li>Your legal business details and the client's legal details</li>
<li>Detailed scope of work and explicit exclusions</li>
<li>Fixed price with tax treatment stated (inclusive vs exclusive)</li>
<li>Validity period (for example, 14 or 30 days)</li>
<li>Payment schedule (deposit, milestones, balance)</li>
<li>Assumptions and dependencies (client assets, access, third-party costs)</li>
<li>Acceptance signature or written acceptance instruction</li>
</ul>
<p>Exclusions matter as much as inclusions. If hosting, stock photography, travel, or print are not included, say so. Clients fill silence with optimistic assumptions.</p>

<h2>Estimate vs quotation vs invoice</h2>
<table><thead><tr><th>Document</th><th>Price nature</th><th>Typical timing</th><th>Asks for money?</th></tr></thead><tbody>
<tr><td>Estimate</td><td>Projection / range</td><td>Early scoping</td><td>No</td></tr>
<tr><td>Quotation</td><td>Firm offer</td><td>Before work starts</td><td>No (until accepted and invoiced)</td></tr>
<tr><td>Invoice</td><td>Amount due</td><td>After supply / milestone</td><td>Yes</td></tr>
</tbody></table>
<p>For the estimate distinction in more depth, read <a href="/blog/invoice-vs-estimate">invoice vs estimate</a>.</p>

<h2>Practical workflow</h2>
<ol>
<li><strong>Quotation</strong>: send a firm, numbered offer with a validity window.</li>
<li><strong>Written acceptance</strong>: email confirmation or signed acceptance block.</li>
<li><strong>Deposit invoice</strong>: if your terms require one before work begins.</li>
<li><strong>Work</strong>: deliver against the accepted scope.</li>
<li><strong>Final (or milestone) invoice</strong>: mirror the quote; list variations separately.</li>
<li><strong>Receipt</strong>: confirm payment when funds clear.</li>
</ol>
<p>Skipping the acceptance step is the single most common cause of scope disputes. A verbal "sounds good" is not enough when money and deadlines are involved. Ask for a short written "We accept quotation Q-2026-018" reply.</p>

<h2>Handling changes after acceptance</h2>
<p>When the client asks for extras, issue a short written variation (or updated quotation for the delta) and get acceptance again before doing the work. Then invoice the variation as its own line: "Variation V-03: additional landing page, as approved 12 May 2026."</p>
<p>Do not absorb unlimited "small tweaks" without a process. Small tweaks accumulate into unpaid days. Your quotation's revision limit (for example, "two rounds of revisions included") should be visible and enforced politely.</p>

<h2>Payment schedules on quotations</h2>
<p>Spell out deposits and milestones on the quotation so nobody is surprised when invoices arrive. Example: "40% deposit on acceptance, 40% on design approval, 20% on launch." Each tranche then gets its own invoice with a clear label.</p>
<p>For freelancers, deposits also filter unserious enquiries. The <a href="/blog/freelancer-invoice-guide">freelancer's invoice guide</a> covers deposit and chase tactics in more detail.</p>


<h2>Legal flavour without the lawyer voice</h2>
<p>You do not need theatrical contract language on a quotation, but you do need identifiable parties, a description of what is included, a price, a validity window, and a way to accept. Those elements are what turn a PDF into something a mediator can recognise as an offer that was accepted. Keep tone human; keep structure complete.</p>
<p>If your work involves intellectual property assignment, confidentiality, or limitation of liability, point to a master services agreement rather than cramming a novel into the quotation footer. The quotation should stay readable for the person who signs it.</p>
<h2>Unit-price quotations vs lump sums</h2>
<p>Unit-price quotes such as rate cards, per-page, or per-seat pricing scale with quantity and need a stated estimate of units plus the rule for true-ups. Lump-sum quotes need crisp scope boundaries. Mixing both without labelling which lines are fixed and which are variable is a classic dispute pattern that surfaces only at invoice time.</p>
<p>When you invoice a unit-price job, show actual quantities. When you invoice a lump sum, show the deliverable names from the quote. Familiarity between the two documents speeds approval inside the client's organisation.</p>
<h2>Multi-currency quotations</h2>
<p>If you quote in one currency and might invoice in another, say how foreign exchange will be handled. Prefer quoting and invoicing in the same currency whenever possible. Mid-project currency switches create unreadable variance between quote and invoice totals even when both parties acted in good faith.</p>
<p>State whether prices are tax-inclusive or tax-exclusive on the quotation so the first invoice does not surprise anyone. Surprises at billing time are rarely forgiven quickly.</p>

<h2>When a quotation should expire</h2>
<p>Material prices, exchange rates, and your own utilisation change. A 14- or 30-day validity window is not unfriendly. It is honest. When a client accepts after expiry, re-issue or confirm the old price in writing before you schedule work. Honouring expired quotes silently trains late decisions and eats margin.</p>
<p>Put the expiry date near the total where it will be seen, not only in fine print at the bottom of page two.</p>
<p>If you need a ready layout for the quote itself, our <a href="/blog/quotation-format">quotation format guide</a> walks through every field with a worked sample.</p>

<h2>Create the documents cleanly</h2>
<p>Keep quotation and invoice numbering in separate series if that helps your filing (Q-2026-018 vs INV-2026-0041), and cross-reference them in notes. When it is time to request payment, build the invoice in the <a href="/invoice-generator">free invoice generator</a> using a layout such as <a href="/invoice-templates/corporate">Corporate</a> for formal buyers or <a href="/invoice-templates/elegant">Elegant</a> for premium services.</p>
`,
  },
  {
    slug: "best-invoice-templates",
    title: "The 18 Best Invoice Templates and When to Use Each",
    description:
      "A practical tour of all 18 invoice layouts (Modern, Minimal, Corporate, Nordic, Emerald and more) with guidance on which industry each fits.",
    category: "design-templates",
    date: "2026-06-24",
    updated: "2026-10-12",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "Are these invoice templates free to use, and can I match them to my brand?",
        a: "Yes. All 18 templates are free to use in our invoice generator with no account and no watermark on the PDF. You can upload your logo and signature, and pick a custom accent color so the template matches your brand. Your draft is saved in your browser's local storage, so you can come back and reuse your details on the same device.",
      },
      {
        q: "Can I switch to a different template after I have filled in my invoice?",
        a: "Yes. In our generator, your business details, client details, line items and totals stay in place when you switch templates, so you can compare layouts in the live preview before downloading. Choosing a new template resets the accent color to that template's default, so reapply your brand color afterwards if you had customized it.",
      },
      {
        q: "Which invoice template is best for printing in black and white?",
        a: "Layouts with white backgrounds, dark text and little color, such as Classic, Minimal or Mono, usually print most cleanly in grayscale. Templates with dark or heavily colored headers can still work, but test a printout first to check the totals, due date and bank details stay readable. If your client archives invoices on paper or grayscale scans, choose a light layout.",
      },
      {
        q: "Does using a professional template make my invoice legally valid?",
        a: "Not on its own. A template only controls the layout; legal validity depends on the content, such as the required seller and buyer details, invoice number, dates and tax information for your country. Some countries also require structured e-invoices in certain cases, which a PDF template cannot provide. Check your tax authority's rules for what your invoices must include.",
      },
      {
        q: "Should I use a Word or Excel invoice template or an online generator?",
        a: "Word and Excel templates are flexible and work offline, but you must update numbers and formulas by hand, which invites errors. An online generator calculates totals, tax and discounts automatically and keeps the layout consistent, then exports a PDF. Accounting software adds tracking, reminders and payments. Choose based on how many invoices you send and how much automation you need.",
      },
      {
        q: "Does the template design affect how quickly clients pay?",
        a: "Design alone will not guarantee faster payment, but clarity removes common reasons for delay. A layout that makes the amount due, due date, invoice number, PO number and payment details easy to find helps accounts teams approve it without questions. Decorative designs that hide key figures can slow things down. Choose for readability first and brand personality second.",
      },
      {
        q: "Can I use an invoice template for a quote, estimate or receipt?",
        a: "You can adapt the layout, but the document must be correctly labeled and contain the right fields. A quote needs a validity date and acceptance terms instead of a due date; a receipt needs the payment date and method. Never send a document titled \"Invoice\" when you mean a quote or receipt, because clients may pay early, pay twice or record it incorrectly.",
      },
      {
        q: "Do I need a logo on my invoice template?",
        a: "No, a logo is optional. Invoices are valid without one, and a clean text header with your business name works well for many freelancers. A logo does help clients recognize your invoices quickly and supports a consistent brand across quotes, invoices and receipts. If you add one, keep it small so the amount due and payment details remain the focus.",
      },
      {
        q: "Should my invoice template use A4 or US Letter paper size?",
        a: "Use the paper size your clients use. A4 is the standard in most countries, while US Letter is standard in the United States and Canada. The two sizes differ slightly in width and height, so a layout designed for one can lose margins or spill onto a second page when printed on the other. Check a test print or PDF preview before sending invoices abroad.",
      },
      {
        q: "Can I design my own invoice template from scratch?",
        a: "Yes, as long as it includes the essentials: the word Invoice, a unique number, issue and due dates, your details and the client's, itemized lines, tax, the total due and payment instructions. Design tools like Canva or word processors give you full creative control, but you must handle numbering and calculations yourself. Test your design on screen, on a phone and in a grayscale printout.",
      },
    ],
    content: `
<h2>Why the template matters</h2>
<p>An invoice is often the last document a client reads before deciding how quickly to pay you. Clarity beats decoration: the amount due, the due date, and the payment method should be findable in under three seconds. A good template is an information hierarchy problem solved once, then reused on every job.</p>
<p>Brand personality still matters, especially for agencies and creatives, but never at the expense of scannability. Accounts payable staff process dozens of PDFs a day. They reward documents that look familiar and complete.</p>

<h2>What every strong template shares</h2>
<ul>
<li>Clear "Invoice" label and prominent invoice number</li>
<li>Seller and buyer blocks that are easy to parse</li>
<li>A readable item table with aligned numeric columns</li>
<li>Totals that stand out without shouting</li>
<li>A dedicated payment-instructions area</li>
<li>Enough whitespace to print cleanly in greyscale</li>
</ul>
<p>If a layout fails any of those tests, it is art, not an invoice. For design principles beyond templates, see <a href="/blog/professional-invoice-design-tips">professional invoice design tips</a>. Browse the full set on the <a href="/invoice-templates">invoice templates</a> page.</p>

<h2>All 18 layouts</h2>
<ol>
<li><strong><a href="/invoice-templates/modern">Modern</a> · Freelance</strong>: Clean header, balanced type, flexible for most industries. The safe default when you are unsure.</li>
<li><strong><a href="/invoice-templates/minimal">Minimal</a> · Design</strong>: Typography-led with little ornament. Ideal for solo creatives, writers, and consultants who want quiet professionalism.</li>
<li><strong><a href="/invoice-templates/corporate">Corporate</a> · Enterprise</strong>: Dense reference fields (PO, project, tax IDs) that AP teams expect. Best for enterprise and government-adjacent work.</li>
<li><strong><a href="/invoice-templates/elegant">Elegant</a> · Luxury</strong>: Serif headings and restrained spacing for premium services: interior design, events, high-end photography.</li>
<li><strong><a href="/invoice-templates/blue">Blue</a> · Small Business</strong>: Familiar colour cue associated with trust and finance. Works well for trades, retail and consumer-facing services.</li>
<li><strong><a href="/invoice-templates/dark">Dark</a> · Tech</strong>: High-contrast header that stands out in a crowded inbox preview and as a PDF thumbnail. Use when brand guidelines already favour dark UI.</li>
<li><strong><a href="/invoice-templates/startup">Startup</a> · SaaS</strong>: Brand-forward and friendly without losing structure. Suits SaaS services, retainers, and productised freelance offers.</li>
<li><strong><a href="/invoice-templates/agency">Agency</a> · Marketing</strong>: Side rail and strong sectioning keep long multi-line item lists readable across multi-page invoices.</li>
<li><strong><a href="/invoice-templates/creative">Creative</a> · Creative Arts</strong>: Oversized total and colour-blocked header. Good for design studios billing other creatives who appreciate visual confidence.</li>
<li><strong><a href="/invoice-templates/classic">Classic</a> · Accounting</strong>: Traditional ruled bookkeeping feel. Comfortable for wholesalers, accountants and clients who still print everything.</li>
<li><strong><a href="/invoice-templates/nordic">Nordic</a> · Architecture</strong>: Thin colour band and calm whitespace for architects, product designers and craft-led studios.</li>
<li><strong><a href="/invoice-templates/emerald">Emerald</a> · Healthcare</strong>: Fresh green bar for clinics, coaches and wellness brands that need to feel trustworthy.</li>
<li><strong><a href="/invoice-templates/sunset">Sunset</a> · Hospitality</strong>: Warm stacked header for restaurants, hotels and event hosts.</li>
<li><strong><a href="/invoice-templates/slate">Slate</a> · Legal</strong>: Restrained split layout for law firms, advisors and formal professional services.</li>
<li><strong><a href="/invoice-templates/bold">Bold</a> · Sales</strong>: Corner accent that stands out in busy inboxes, useful for sales teams and course creators.</li>
<li><strong><a href="/invoice-templates/lavender">Lavender</a> · Beauty</strong>: Soft stacked header for beauty studios, coaches and educators.</li>
<li><strong><a href="/invoice-templates/ocean">Ocean</a> · Consulting</strong>: Teal side rail that leaves full width for long project descriptions.</li>
<li><strong><a href="/invoice-templates/mono">Mono</a> · Software</strong>: Stark black-and-white band for developers, engineers and SaaS billing.</li>
</ol>

<h2>Choosing quickly by client type</h2>
<table><thead><tr><th>You mostly bill…</th><th>Start with</th></tr></thead><tbody>
<tr><td>Enterprises / formal AP teams</td><td>Corporate or Slate</td></tr>
<tr><td>Other creatives / studios</td><td>Minimal, Creative or Lavender</td></tr>
<tr><td>Consumers / local clients</td><td>Blue or Classic</td></tr>
<tr><td>Premium service buyers</td><td>Elegant</td></tr>
<tr><td>Startups / retainers</td><td>Startup, Modern or Ocean</td></tr>
<tr><td>Long item lists / retainers + extras</td><td>Agency or Ocean</td></tr>
<tr><td>Healthcare / wellness</td><td>Emerald</td></tr>
<tr><td>Hospitality / events</td><td>Sunset</td></tr>
<tr><td>Architecture / product design</td><td>Nordic</td></tr>
<tr><td>Software / engineering</td><td>Mono or Dark</td></tr>
<tr><td>Everything else</td><td>Modern</td></tr>
</tbody></table>
<p>Not sure which applies? Our guide on <a href="/blog/choose-invoice-template-by-client">choosing an invoice template based on who pays you</a> walks through the decision.</p>

<h2>Invoice templates by industry</h2>
<p>Each trade has its own line items, deposit habits and compliance quirks. These industry guides show what to include and a worked example for each:</p>
<ul>
<li><strong>Trades and home services:</strong> <a href="/blog/contractor-invoice-template">contractor invoice template</a>, <a href="/blog/plumbing-invoice-template">plumbing invoice template</a>, <a href="/blog/electrician-invoice-template">electrician invoice template</a>, <a href="/blog/hvac-invoice-template">HVAC invoice template</a>, <a href="/blog/handyman-invoice-template">handyman invoice template</a>, <a href="/blog/landscaping-invoice-template">landscaping invoice template</a>, <a href="/blog/cleaning-service-invoice-template">cleaning service invoice template</a> and <a href="/blog/auto-repair-invoice-template">auto repair invoice template</a>.</li>
<li><strong>Creative and digital work:</strong> <a href="/blog/photography-invoice-template">photography invoice template</a>, <a href="/blog/graphic-design-invoice-template">graphic design invoice template</a> and <a href="/blog/web-development-invoice-template">web development invoice template</a>.</li>
<li><strong>Professional services:</strong> <a href="/blog/consulting-invoice-template">consulting invoice template</a>, <a href="/blog/legal-invoice-template">legal invoice template</a>, <a href="/blog/medical-invoice-template">medical invoice template</a> and <a href="/blog/tutoring-invoice-template">tutoring invoice template</a>.</li>
<li><strong>Property, food and logistics:</strong> <a href="/blog/rent-invoice-template">rent invoice template</a> for landlords, <a href="/blog/catering-invoice-template">catering invoice template</a> and <a href="/blog/trucking-invoice-template">trucking invoice template</a>.</li>
</ul>
<p>Prefer to start from scratch? Use a <a href="/blog/blank-invoice-template">blank invoice template</a> or a <a href="/blog/freelance-invoice-template">freelance invoice template</a>.</p>

<h2>Matching template to content density</h2>
<p>Short freelance invoices (three to five lines) look best on Minimal, Elegant, or Creative: sparse layouts that celebrate whitespace. Product invoices with SKUs, shipping, and tax columns need Corporate, Agency, or Classic so columns stay aligned. International invoices with IBAN/SWIFT notes benefit from Corporate or Modern, where the notes block is easy to find.</p>
<p>If you regularly mix invoice types, pick one primary template for brand consistency and only switch when the buyer's process demands it. Consistency helps clients recognise your PDFs instantly.</p>

<h2>Practical setup tips</h2>
<ul>
<li>Save your business profile once so every template starts complete.</li>
<li>Test a sample PDF printed in greyscale before you commit to a dark or colourful header.</li>
<li>Keep logos small; the amount due is the hero, not the mark.</li>
<li>Put payment details in the same region of the page on every invoice you send.</li>
</ul>


<h2>Accessibility and print behaviour</h2>
<p>Design for greyscale laser printers and for people who magnify PDFs. Low-contrast grey body text fails both groups. Aim for strong contrast on critical data: totals, due dates, and bank details. If you use a dark header, keep the body on white with dark text so printing does not devour toner or hide numbers.</p>
<p>Avoid placing essential payment digits in decorative sidebars that disappear when a client prints "content only" or when an accessibility tool linearises the page oddly. Payment blocks belong in the main flow.</p>
<h2>Multi-page invoices</h2>
<p>Long agency invoices and wholesale goods lists often spill onto a second page. Repeat the invoice number and client name in the header of continued pages. Keep the grand total on the final page with a short reminder of how to pay. Splitting a totals table across pages is a common way to confuse busy approvers.</p>
<p>The <a href="/invoice-templates/agency">Agency</a> layout is built with longer lists in mind; <a href="/invoice-templates/corporate">Corporate</a> keeps reference fields visible when AP needs them on page one.</p>
<h2>Brand consistency across the client journey</h2>
<p>Your quotation, invoice, and receipt do not need identical decoration, but seller details, accent colour, and logo treatment should feel like one organisation. Clients notice when invoice PDFs look like they came from a different company than the proposal they approved.</p>
<p>Save one primary template as your default and only switch when a buyer's process demands denser fields. Consistency also makes your own filing easier because every PDF shares a familiar visual map.</p>

<h2>Testing before you standardise</h2>
<p>Before locking a company-wide default, send yourself three sample PDFs: a short three-line invoice, a two-page item list, and an international invoice with long bank details. Open each on desktop and phone, then print one page. Any template that fails one of those tests should not become your default, however attractive it looks empty.</p>
<p>Also ask one client whether their AP system prefers colour or can only archive greyscale cleanly. Buyer constraints beat personal taste.</p>
<p>Thinking about designing your own? Read the honest pros and cons of a <a href="/blog/canva-invoice-template">Canva invoice template</a>, or start from a <a href="/blog/service-invoice-template">service invoice template</a> if you bill for time rather than products.</p>

<h2>Preview and create</h2>
<p>Preview every layout instantly inside the <a href="/invoice-generator">invoice generator</a>, then download a PDF when the fields are complete. For scenario-based line items to drop into these layouts, see <a href="/blog/invoice-examples">invoice examples</a>. For small-business process around templates (numbering, batching, reminders), read the <a href="/blog/small-business-invoice-guide">small business invoicing guide</a>.</p>
`,
  },
  {
    slug: "invoice-examples",
    title: "Invoice Examples: 6 Real-World Scenarios Broken Down",
    description:
      "See how freelance, agency, product, hourly, milestone and international invoices differ, with the exact lines and notes to use.",
    category: "guides",
    date: "2026-06-17",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "What does a deposit invoice look like?",
        a: "A deposit invoice usually has one line, such as \"Deposit: 40% of quotation Q-2026-021\", plus the amount, due date and payment details. Give it its own invoice number. When you send the final invoice, list the full project value and then show the deposit already paid as a deduction, so the client can see exactly how the balance due was calculated.",
      },
      {
        q: "How do I show a partial payment on an invoice?",
        a: "List the full invoice total, then add an \"Amount paid\" line with the date and amount received, and finish with a clear \"Balance due\". Keep the original invoice number so the client's accounts team can match both payments. If the remaining balance has a new due date agreed in writing, put that calendar date beside the balance due.",
      },
      {
        q: "How do I add a late fee to an invoice?",
        a: "Add the late fee as a separate line, such as \"Late payment charge per agreement section 6\", instead of quietly raising the original amount. Reference the overdue invoice number and the date it was due. Only charge fees or interest your contract or local law allows, and note that rules on late charges vary by country and, in the US, by state.",
      },
      {
        q: "How do I invoice for a cancelled project or kill fee?",
        a: "Invoice the cancellation fee your contract specifies, with a line like \"Cancellation fee: 25% of contract value per clause 9\", plus any completed work or non-refundable costs already incurred. Credit any deposit the client paid. If your contract has no cancellation clause, agree the amount in writing with the client before you send the invoice, so it is not disputed on arrival.",
      },
      {
        q: "What should an invoice look like if I am not registered for tax?",
        a: "Leave the tax lines out entirely and do not show a tax rate, tax amount or tax number you do not hold. Your invoice still needs your name, the client's details, an invoice number, the date, line items, a total and payment instructions. Some countries expect a short note explaining why no tax is charged, so check with your local tax authority.",
      },
      {
        q: "Can one invoice cover several purchase orders?",
        a: "It is usually better to send one invoice per purchase order. Many accounts-payable systems match each invoice against a single PO, and an invoice that mixes several can be rejected or held for manual checking. If a client explicitly asks for a combined invoice, group the lines under a heading for each PO number and show a subtotal for each group.",
      },
      {
        q: "How do I invoice for travel or mileage?",
        a: "Put travel on separate expense lines below your fees, with the date, route or purpose, and the cost. For mileage, show the distance as the quantity and the agreed rate per mile or kilometer as the unit price. Keep receipts and logs available on request, and only bill travel your quotation or contract says the client will cover.",
      },
      {
        q: "What is the difference between an invoice example and an invoice template?",
        a: "A template is the empty layout: header, client block, item table, totals and payment section. An example is a template filled in for a particular situation, such as a retainer or a goods sale, showing the kind of wording and lines that fit. Use examples to decide what to write, and a template to make every invoice look consistent.",
      },
      {
        q: "Can I copy these examples into a free invoice generator?",
        a: "Yes. You can recreate any of these scenarios in the free invoice generator by entering the line items, notes and terms, then choosing a template and currency. It calculates tax, discount, shipping, amount paid and balance due, and downloads a PDF in your browser without an account. You then attach and send the PDF yourself, because the generator does not email invoices.",
      },
      {
        q: "How should I write the date range for a service period?",
        a: "Write the period in the line description using unambiguous dates, such as \"Support services: 1–31 August 2026\" or \"Week of 4–8 Aug 2026\". Spelling out the month avoids confusion between day-first and month-first date formats used in different countries. A clear period helps the client match the charge to their budget month and stops duplicate-billing questions.",
      },
    ],
    content: `
<h2>How to use these examples</h2>
<p>Each scenario below shows the line-item pattern, the notes that prevent disputes, and the terms that usually fit. Copy the structure, not the dollar amounts. Always match the legal names and tax treatment that apply to your contract.</p>
<p>Build any of these in the <a href="/invoice-generator">free invoice generator</a> by switching template and currency. For layout choice, see <a href="/blog/best-invoice-templates">best invoice templates</a>.</p>

<h2>1. Freelance project invoice</h2>
<p><strong>Pattern:</strong> one line per deliverable, fixed fee, Net 14 terms. Reference the accepted proposal or quotation number in the notes.</p>
<ul>
<li>Line: "Brand identity package: logo, colour system, basic guidelines"</li>
<li>Line: "Social template set: 8 editable posts"</li>
<li>Notes: "Per quotation Q-2026-014 accepted 2 June 2026. Includes two revision rounds."</li>
<li>Terms: Net 14; deposit already paid shown as a credit line if applicable</li>
</ul>
<p>Keep descriptions specific enough that a manager who never met you can approve the bill. Vague "design services" lines invite clarification emails and delay.</p>

<h2>2. Hourly invoice</h2>
<p><strong>Pattern:</strong> quantity = hours, unit price = rate. Summarise the period and tasks; attach or embed a timesheet when the client asks.</p>
<ul>
<li>Line: "Consulting: week of 4–8 Aug 2026 (strategy calls + research)": 6.5 hours × rate</li>
<li>Line: "Implementation support: 11–12 Aug 2026": 3 hours × rate</li>
<li>Notes: "Timesheet available on request. Rounded to nearest 0.25 hour."</li>
</ul>
<p>Clients dispute hours far less when dates and task themes are visible. If you have a weekly cap in the contract, mention remaining hours in the notes.</p>

<h2>3. Agency retainer invoice</h2>
<p><strong>Pattern:</strong> a single retainer line for the month, plus separate lines for out-of-scope work. Show the retainer period explicitly.</p>
<ul>
<li>Line: "Retainer: August 2026, content + light design (up to 20 hours)"</li>
<li>Line: "Out of scope: landing page illustration pack (approved 19 Aug)"</li>
<li>Notes: "Unused retainer hours do not roll over unless stated in MSA section 4."</li>
</ul>
<p>Separating out-of-scope work prevents the retainer from becoming an unlimited bucket. Use a structured layout such as <a href="/invoice-templates/agency">Agency</a> when lists get long.</p>

<h2>4. Product / goods invoice</h2>
<p><strong>Pattern:</strong> SKU, quantity, unit price, shipping, and tax. Add the delivery address if it differs from billing.</p>
<ul>
<li>Line: "SKU-4412: Ceramic planter (large), qty 12"</li>
<li>Line: "SKU-4418: Ceramic planter (small), qty 24"</li>
<li>Line: "Shipping: tracked freight to warehouse B"</li>
<li>Tax line(s) as required by your registration</li>
</ul>
<p>Warehouse and wholesale buyers reconcile by SKU. Omitting codes is a common reason goods invoices bounce. For tax presentation, see the <a href="/blog/tax-invoice-guide">tax invoice guide</a>.</p>

<h2>5. Milestone invoice</h2>
<p><strong>Pattern:</strong> name the phase, the percentage of contract value, and what remains so the client can forecast cash.</p>
<ul>
<li>Line: "Phase 2 of 3: development complete, 40% of contract value (£8,000)"</li>
<li>Notes: "Phase 1 invoice INV-2026-0033 paid. Phase 3 (final 20%) due on launch acceptance."</li>
</ul>
<p>Milestone invoices work best when the underlying quotation already defined the schedule. Cross-reference that quote number every time.</p>

<h2>6. International invoice</h2>
<p><strong>Pattern:</strong> state currency in the totals, add IBAN/SWIFT (or local equivalent), note who pays the transfer fee, and include reverse-charge wording where applicable.</p>
<ul>
<li>Currency: clearly "USD" or "EUR" beside every total</li>
<li>Bank block: account name, IBAN, BIC/SWIFT, bank address</li>
<li>Notes: "Client bears intermediary bank fees. Reverse charge: customer to account for VAT." (only when true)</li>
</ul>
<p>Wrong fee assumptions ("I thought you'd receive the full amount") create awkward balance chases. Spell fee responsibility out once on the invoice. VAT/GST cross-border rules differ, so confirm with your accountant and skim our <a href="/blog/vat-invoice-guide">VAT</a> and <a href="/blog/gst-invoice-guide">GST</a> guides.</p>


<h2>Hybrid example: fixed fee plus expenses</h2>
<p>Many real projects mix a fixed creative fee with pass-through expenses. Keep them visually separate: fee lines first, then an expenses subheading with receipts available on request. Mark up policy should already live in the quotation. Restate it briefly in the invoice notes so AP is not guessing.</p>
<p>Example lines might include a project fee, then travel, stock licences, and courier costs as individual expense lines. Totals should show fees subtotal, expenses subtotal, tax treatment per local rules, and amount due. Bundling expenses into the fee after the fact is a trust problem waiting to happen.</p>
<h2>Subscription and seat-based billing</h2>
<p>For software-style or membership billing, name the plan, seat count, and period. If seats changed mid-cycle, show the proration math in plain language. Clients accept proration when they can see it; they dispute it when it appears as a mysterious delta.</p>
<p>Include the renewal date in notes if the invoice is also the reminder that the next cycle is coming. That reduces surprise cancellations and support tickets.</p>
<h2>What good examples share</h2>
<p>Across all six scenarios, the winning pattern is the same: specific descriptions, explicit periods, cross-references to quotes or POs, and payment instructions on the PDF. Templates change the clothes; those habits are the body. Pair any example with the send discipline in <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> so a perfect PDF does not die in the wrong inbox.</p>

<h2>Nonprofit and grant-style billing</h2>
<p>When billing a grant office or nonprofit, reference the grant or cost centre code as diligently as a PO. Break labour and materials the way their budget categories are written, even if your internal jobs are organised differently. Mapping to their categories on the invoice prevents recoding delays that stall payment for weeks.</p>
<p>Attach or offer timesheets when labour is cost-reimbursable. Anticipate their audit pack rather than reacting to it.</p>
<h2>Checklist before you send any example</h2>
<ol>
<li>Legal buyer name matches the contract</li>
<li>PO / reference included if required</li>
<li>Lines sum to the total</li>
<li>Due date is a calendar date</li>
<li>Payment instructions are on the PDF</li>
<li>File named <code>Invoice-NUMBER-Client.pdf</code></li>
</ol>
<p>For sending and reminder templates, continue with <a href="/blog/how-to-send-an-invoice">how to send an invoice</a>.</p>
`,
  },
  {
    slug: "freelancer-invoice-guide",
    title: "The Freelancer's Invoice Guide: Get Paid Faster",
    description:
      "Rates, terms, deposits, late fees and follow-ups: a complete invoicing playbook for freelancers and independent contractors.",
    category: "guides",
    date: "2026-06-10",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-get-clients-as-a-freelancer"],
    faqs: [
      {
        q: "Do I need a registered business to send invoices as a freelancer?",
        a: "In many countries you do not. You can often invoice as a sole proprietor or sole trader under your own name, as long as you report the income for tax. Some places require registration, a license or a tax number once you start trading or pass a threshold. Check the rules with your local tax authority or business registry before your first invoice.",
      },
      {
        q: "Should I put my Social Security number on an invoice?",
        a: "No. In the US, avoid printing your Social Security number on invoices because PDFs get forwarded and stored widely. Many freelancers get a free Employer Identification Number (EIN) from the IRS and use that instead. Clients who need your taxpayer details usually request them separately on Form W-9, which you should send through a secure channel.",
      },
      {
        q: "What can I do if a client never pays my invoice?",
        a: "Start with a formal demand letter that states the amount, the invoice number and a final payment date. If that fails, your options usually include small claims court, a collections agency, or a lawyer, depending on the amount and where the client is based. Keep your contract, invoices and every reminder, because that paper trail is what supports a claim.",
      },
      {
        q: "Can I charge interest on late payments as a freelancer?",
        a: "Usually yes, if your contract allows it and the rate is lawful where you work. In the UK, business-to-business debts can also carry statutory interest of 8% above the Bank of England base rate under late payment law, even without a contract clause. In the US, limits vary by state. State your late-payment terms on the contract and invoice.",
      },
      {
        q: "Do freelancers have to charge sales tax, VAT or GST?",
        a: "It depends on where you are, what you sell and how much you earn. Many VAT and GST countries require registration once your turnover passes a threshold, while in the US, sales tax rules on services vary by state and many services are not taxed. Check with your tax authority, and do not add tax to invoices until you are registered.",
      },
      {
        q: "How long should freelancers keep copies of invoices?",
        a: "Keep invoices for at least as long as your tax authority can review your returns. In the US, the IRS generally recommends three years from filing, and longer in some situations. Many other countries require five to seven years or more. Store PDFs by year and client, back them up, and check the exact period with your local authority.",
      },
      {
        q: "What should I do if a client asks me to change an invoice after I sent it?",
        a: "For small details like a missing PO number, you can usually reissue the same invoice with the correction and a short note, provided it has not been paid or recorded. If amounts or tax change, issue a credit note for the original and a new invoice with a new number. Never keep two different versions under one invoice number.",
      },
      {
        q: "Should I invoice hourly or by project?",
        a: "Hourly billing suits work with unclear scope, because you are paid for every hour you spend. Project pricing suits well-defined work, rewards efficiency and is easier for clients to budget. Many freelancers combine them: a fixed fee for the defined scope and an hourly rate for extra requests. Whichever you choose, write it into the quotation before work starts.",
      },
      {
        q: "Do I need accounting software to invoice as a freelancer?",
        a: "Not at the start. A free invoice generator that downloads professional PDFs, plus a spreadsheet tracking sent and paid invoices, is enough for many freelancers. Our generator keeps drafts in your browser and needs no account, but it does not send emails, take payments or send reminders. Consider accounting software once volume, tax filing or bank reconciliation becomes time-consuming.",
      },
      {
        q: "How do I invoice a client in another country as a freelancer?",
        a: "Agree the currency upfront, show it beside every total, and include international bank details such as IBAN and SWIFT or BIC. State who pays transfer fees. Tax treatment for cross-border services varies, and some business clients may need to account for tax themselves under reverse charge rules, so confirm with an accountant before you send the first invoice.",
      },
    ],
    content: `
<h2>Set terms before you start</h2>
<p>Agree payment terms in writing at proposal stage: deposit percentage, payment schedule, accepted methods, and late-payment interest. An invoice cannot enforce terms the client never saw. Put the same terms on the quotation and repeat the due date on every invoice.</p>
<p>If you only discuss rates verbally, you will eventually invoice someone who "remembered" a different number. Written scope plus written price is your first payment-protection tool.</p>

<h2>Price for payment reality, not optimism</h2>
<p>Build your rate assuming some invoices will land late. That does not mean padding dishonestly. It means knowing your floor, your target, and when a project is not worth the cash-flow risk. Prefer clients who accept deposits and Net 14 over those who insist on Net 60 with no PO process.</p>
<p>For fixed-fee work, break large jobs into milestones so you are never financing two months of unpaid labour. Examples of milestone lines appear in <a href="/blog/invoice-examples">invoice examples</a>.</p>

<h2>Ask for a deposit</h2>
<p>A 30–50% deposit filters out clients who were never going to pay and covers your opportunity cost. Invoice the deposit as its own document with a clear label ("Deposit invoice: 40% of Q-2026-021"). Do not start substantial work until it clears, unless you have a long trusted relationship.</p>
<p>Deposits also force early confirmation of billing details (legal entity, PO needs, and tax IDs) before you are emotionally invested in the project.</p>

<h2>Invoice immediately</h2>
<p>Send the invoice the day the work is delivered or the milestone is signed off. Every week you delay pushes payment out by at least the same amount, because you slot into a later approval cycle. Month-end batching feels organised; it is often expensive.</p>
<p>Use a consistent template from the <a href="/invoice-generator">invoice generator</a> so you are not redesigning PDFs when you should be sending them. <a href="/invoice-templates/minimal">Minimal</a> and <a href="/invoice-templates/modern">Modern</a> work well for most freelancers.</p>

<h2>Make paying effortless</h2>
<ul>
<li>Bank details on the invoice, not only in a separate email</li>
<li>At least two payment methods when you can (transfer + card link)</li>
<li>Invoice number in the email subject and the file name</li>
<li>PO number on the PDF if the client requires one</li>
<li>Calendar due date, not only "Net 14"</li>
</ul>
<p>Friction is the enemy. If a client must ask you for IBAN, account name, or a resend in a different format, you have added days to the cycle.</p>

<h2>Chase politely and predictably</h2>
<p>Decide your cadence in advance so chasing does not feel personal or awkward:</p>
<ol>
<li><strong>Day 1 after due date:</strong> friendly reminder with PDF attached</li>
<li><strong>Day 7:</strong> second reminder; ask if anything is blocking approval</li>
<li><strong>Day 14:</strong> firm note referencing late-payment terms; request a specific payment date</li>
<li><strong>Day 30:</strong> pause ongoing work; escalate to the economic buyer if you have only spoken to a project manager</li>
</ol>
<p>Copy-ready wording lives in <a href="/blog/how-to-send-an-invoice">how to send an invoice</a>. Stay factual and brief. Emotion rarely speeds payment; clarity does.</p>

<h2>Late fees and pausing work</h2>
<p>Late interest only helps if it was in the contract the client accepted. Mention it on the invoice footer as a reminder, not a surprise. Pausing work on overdue accounts is often more effective than fees, especially for retainers, but announce the pause in writing with a clear reactivation condition ("work resumes when INV-2026-0041 is paid").</p>

<h2>Track everything in one place</h2>
<p>Keep a simple sheet (or accounting tool) with: invoice number, client, amount, currency, date sent, date due, date paid, and status. That single list is your cash-flow forecast. Review it weekly. Unchased invoices are paid last.</p>
<p>Store PDFs by year and client. When a payment lands, match it to an invoice number the same day so you never chase someone who already paid, a fast way to damage a relationship.</p>

<h2>Tax and admin without the spiral</h2>
<p>Separate money you owe in tax from money you can spend. If you charge VAT/GST, learn the mandatory fields before your first taxed invoice. Start with the <a href="/blog/tax-invoice-guide">tax invoice guide</a>. Keep personal and business accounts separate so reconciliation stays sane.</p>


<h2>Scope creep and how invoicing reveals it</h2>
<p>If you repeatedly write long notes explaining extras that were never quoted, your scoping process is broken. Use invoices as a mirror: variation lines should be occasional, not the majority of every bill. When extras dominate, pause new work until the quotation is updated and accepted.</p>
<p>Train clients gently. A short "happy to add this as a variation at £X, confirm and I will proceed" message protects both sides. Invoicing surprise extras after silent overwork trains clients to expect free labour.</p>
<h2>Retainers that actually pay on time</h2>
<p>Bill retainers in advance when your market allows it, with the period named clearly. Send the invoice several business days before the period starts so AP can schedule payment. End-of-month retainer invoices for work already done turn you into an involuntary lender.</p>
<p>Define unused-hour policy in the agreement and restate it annually. Roll-over ambiguity is one of the most common retainer disputes and it often surfaces only when someone cancels.</p>
<h2>Tools without complexity addiction</h2>
<p>You need a PDF generator, a way to track sent versus paid, and a calendar for reminders. You do not need five overlapping apps. Start with the <a href="/invoice-generator">invoice generator</a> and a simple spreadsheet; graduate to accounting software when volume or tax complexity demands it. Complexity that delays sending invoices is working against you.</p>
<p>Working through a marketplace? See <a href="/blog/fiverr-upwork-invoice">how to get Fiverr and Upwork invoices</a>. Remote support work has its own guide, the <a href="/blog/virtual-assistant-invoice-template">virtual assistant invoice template</a>.</p>

<h2>Common freelancer payment killers</h2>
<ul>
<li>Starting without a deposit on a new client</li>
<li>Vague line items that trigger clarification loops</li>
<li>Billing the wrong legal entity after a startup rebrand</li>
<li>No follow-up system after the due date</li>
</ul>
<p>More failure modes are listed in <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>. Fix the process once; every future invoice gets faster.</p>
`,
  },
  {
    slug: "small-business-invoice-guide",
    title: "Small Business Invoicing Guide: Process, Terms and Cash Flow",
    description:
      "Build a repeatable invoicing process for your small business: numbering, approvals, terms, reminders and reconciliation.",
    category: "guides",
    date: "2026-06-03",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "When should a small business move from templates to accounting software?",
        a: "Consider switching when invoicing takes hours each week, when you need recurring invoices or automatic reminders, or when matching payments to invoices becomes error-prone. Growth in staff, tax registration or multiple currencies are also good triggers. Templates and a tracker work well for low volume. Software earns its cost once it saves more time than it takes to run.",
      },
      {
        q: "Is it a problem to have gaps in my invoice numbers?",
        a: "Occasional gaps are usually fine if you can explain them, for example with a void log showing which numbers were cancelled and why. Unexplained gaps can raise questions during a tax audit, especially in VAT and GST countries that expect sequential numbering. Never delete a cancelled invoice from your records, and never reuse its number for a different sale.",
      },
      {
        q: "How should I handle a customer who disputes part of an invoice?",
        a: "Ask the customer to pay the undisputed amount now while you resolve the rest. Get the dispute in writing, check it against the quotation, delivery records and contract, and respond with facts. If you agree to reduce the bill, issue a credit note referencing the original invoice instead of editing it, so both sets of records stay aligned.",
      },
      {
        q: "What is days sales outstanding and how do I calculate it?",
        a: "Days sales outstanding (DSO) is the average number of days it takes customers to pay you. A common formula is accounts receivable divided by credit sales for the period, multiplied by the number of days in that period. If DSO rises month after month, look at your payment terms, reminder schedule and how quickly invoices go out.",
      },
      {
        q: "Is a 2/10 Net 30 early payment discount worth offering?",
        a: "It can be, but it is expensive. Giving 2% to be paid 20 days early works out to an annualized cost of roughly 37%, so it only makes sense when cash now matters more than margin. Make the discount terms clear on the invoice, and decide in advance how you will handle customers who take the discount after the deadline.",
      },
      {
        q: "Should a small business accept card payments for invoices?",
        a: "Card payments and payment links often get invoices paid faster, but processors charge fees on each transaction. If you want to pass fees on as a surcharge, check the rules first, because surcharging is restricted in some places, including on many consumer card payments in the UK. Record fees separately so your books show the net cash you actually received.",
      },
      {
        q: "How do I write off an invoice that will never be paid?",
        a: "First document your collection attempts. Then record the amount as a bad debt in your accounts, usually with a journal entry or a write-off feature in your software, and keep the original invoice. Whether you can claim tax relief on the bad debt, or recover tax already paid on that sale, depends on your country's rules, so ask your accountant.",
      },
      {
        q: "How can I protect customers from fake invoices sent in my name?",
        a: "Keep your bank details identical on every invoice, and tell customers you will never change them by email alone. Ask them to confirm any change by phone using a number they already have. Send invoices from a consistent business email address. If a customer reports a suspicious invoice using your name, warn your other customers and report it to your bank.",
      },
      {
        q: "What is invoice factoring and should my small business use it?",
        a: "Invoice factoring means selling unpaid invoices to a finance company for an immediate advance, minus fees. A related option, invoice financing, lets you borrow against invoices while keeping control of collection. Both can ease cash gaps, but the fees reduce your margin and some arrangements tell your customers. Compare total costs carefully and fix slow invoicing habits first.",
      },
      {
        q: "Can a free invoice generator work for a small business team?",
        a: "It can for low to moderate volume. A browser-based generator like ours gives everyone the same templates, consistent totals and PDF downloads without accounts. Drafts are saved in each person's own browser, though, so you will still need a shared folder and a tracker for numbering and payment status. It does not send invoices, reminders or recurring bills automatically.",
      },
    ],
    content: `
<h2>Design the process, not just the document</h2>
<p>Most small businesses have a template but no process. Decide who raises invoices, when they go out, who chases overdue balances, and where PDFs are stored. A mediocre template with a reliable weekly rhythm outperforms a beautiful PDF sent whenever someone remembers.</p>
<p>Write the process down in half a page: triggers (delivery, month-end retainer, milestone sign-off), owner, checklist, and reminder schedule. New staff should be able to invoice correctly on day three.</p>

<h2>Numbering and records</h2>
<p>Use a year-prefixed sequential number (<code>2026-0001</code>, <code>2026-0002</code>…) and never reuse one. If you void an invoice, keep the number in a void log. Store a PDF of every invoice in a single folder structure by year and client, alongside credit notes and receipts.</p>
<p>Cloud accounting tools help, but still export or save the PDFs you actually sent. Those are the artefacts clients and auditors recognise. For field basics, see <a href="/blog/what-is-an-invoice">what is an invoice</a>.</p>

<h2>Choosing payment terms</h2>
<table><thead><tr><th>Terms</th><th>Meaning</th><th>Best for</th></tr></thead><tbody>
<tr><td>Due on receipt</td><td>Pay immediately</td><td>New or one-off clients</td></tr>
<tr><td>Net 14</td><td>Within 14 days</td><td>Small businesses, freelancers, local B2B</td></tr>
<tr><td>Net 30</td><td>Within 30 days</td><td>Corporate clients with formal AP cycles</td></tr>
<tr><td>2/10 Net 30</td><td>2% discount if paid in 10 days</td><td>Encouraging early payment on larger bills</td></tr>
</tbody></table>
<p>Publish default terms on proposals and contracts. Offering Net 30 to every new micro-client because "that's what corporations do" quietly damages your cash position. Match terms to buyer size and trust level.</p>

<h2>Batching vs invoicing on delivery</h2>
<p>Weekly batching (for example, every Friday) reduces context-switching if you issue many small invoices. Invoicing on delivery is better for large one-offs and anything with a tight cash need. Hybrid approaches work: retainers on a fixed monthly date, project work on delivery.</p>
<p>What fails is "we'll invoice whenever we have time." That habit creates silent receivables you discover only when rent is due.</p>

<h2>Approvals and internal controls</h2>
<p>Even in a five-person company, separate creation from approval when amounts are material. A second pair of eyes catches wrong rates, missing POs, and transposed bank details: errors that are expensive after the email is sent.</p>
<p>Maintain a short pre-send checklist: legal entity, PO, maths, tax, due date, payment block, filename. Many items overlap with <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>.</p>

<h2>Reminders without awkwardness</h2>
<p>Automate or diary a standard cadence: polite note the day after due, firmer note at seven days, escalation at fourteen. Always re-attach the PDF. Ask for a specific payment date rather than "any update?". Full email patterns are in <a href="/blog/how-to-send-an-invoice">how to send an invoice</a>.</p>
<p>Assign an owner for chasing. When "everyone" owns receivables, nobody does.</p>

<h2>Reconciliation</h2>
<p>Match every incoming payment to an invoice number at least weekly. Unmatched payments are how businesses accidentally chase clients who already paid, and how duplicates slip through. Record partial payments explicitly against the open balance.</p>
<p>If you take card payments or payment links, reconcile fees so your books show net cash accurately.</p>

<h2>Cash-flow tips that actually move the needle</h2>
<ul>
<li>Invoice on delivery for project work, not only at month end</li>
<li>Split large projects into deposits and milestones</li>
<li>Charge late interest only if it was contracted, and mention it before you need it</li>
<li>Offer a small early-payment discount when accelerating cash matters more than margin</li>
<li>Review the aged-receivables list every Monday</li>
</ul>

<h2>Templates and consistency</h2>
<p>Pick one primary layout for brand recognition (<a href="/invoice-templates/corporate">Corporate</a> for formal B2B, <a href="/invoice-templates/blue">Blue</a> or <a href="/invoice-templates/classic">Classic</a> for general small business) and keep seller details identical across every PDF. Generate documents with the <a href="/invoice-generator">free invoice generator</a> so totals and structure stay consistent when different people send invoices.</p>
<p>For tax-registered businesses, standardise how tax lines appear and train staff using the <a href="/blog/tax-invoice-guide">tax invoice guide</a>. Inconsistency here causes reclaim problems for your customers and support tickets for you.</p>


<h2>Roles as you grow past one founder</h2>
<p>When a second person starts invoicing, ambiguity explodes. Define who may edit bank details, who approves write-offs, and who sends reminder three. Put bank-detail changes behind a dual check. Invoice fraud via altered PDFs is rare but devastating, and simple process beats expensive tools here.</p>
<p>Give each role access to the same template and client profiles so invoices do not drift into personal formatting experiments. Brand and field consistency are internal controls, not vanity.</p>
<h2>Handling partial payments and payment plans</h2>
<p>Partial payments should update the open balance on your tracker the same day. Send a brief acknowledgment stating amount received, invoice referenced, and amount remaining. If you agree a payment plan, confirm dates in writing and invoice or schedule reminders accordingly. Verbal plans evaporate.</p>
<p>Do not keep sending full-balance reminders after a partial lands without acknowledging it; that single mistake creates unnecessary conflict with clients who believe they are cooperating.</p>
<h2>Metrics worth glancing at monthly</h2>
<p>Watch average days sales outstanding, percentage of invoices paid after reminder one, and the count of invoices waiting on missing POs. Those three numbers tell you whether the problem is terms, chasing, or intake quality. Fix the largest bucket first rather than buying new software as a substitute for process.</p>

<h2>Seasonality and cash buffers</h2>
<p>If your sales peak in one season, tighten terms before the quiet months and chase harder while cash is still incoming. Waiting until the quiet month to discover slow payers is a common small-business trap. Build a simple cash buffer target equal to a few weeks of fixed costs and watch receivables as closely as sales.</p>
<h2>Grow the system deliberately</h2>
<p>As volume rises, add: saved client profiles, recurring retainer drafts, and a shared tracker with statuses (draft, sent, overdue, paid). Do not wait for a crisis month to invent the process. The goal is boring reliability: invoices that leave on time, look the same, and get followed up without drama.</p>
`,
  },
  {
    slug: "how-to-send-an-invoice",
    title: "How to Send an Invoice (Email Templates Included)",
    description:
      "The right file format, subject line, recipient and follow-up cadence for invoices that actually get processed by accounts payable.",
    category: "guides",
    date: "2026-05-27",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "Can I send an invoice by text message or WhatsApp?",
        a: "You can send a quick heads-up or a PDF by text or messaging app, and some small clients prefer it. For business clients, still email the PDF or upload it to their portal, because accounts teams need a formal copy they can file and approve. Messaging apps are hard to search later and are rarely treated as the official send.",
      },
      {
        q: "Should I send an invoice before or after the work is done?",
        a: "It depends on your agreement. Send deposit or retainer invoices before work begins, milestone invoices when each phase is signed off, and final invoices on the day you deliver. Sending promptly matters more than the exact moment, because every day you wait moves you into a later payment cycle. Agree the billing schedule in your quotation.",
      },
      {
        q: "How do I confirm my client actually received the invoice?",
        a: "For large invoices, ask in the email for a one-line confirmation that it reached accounts payable. If the client uses a supplier portal, check its status screen for receipt or approval. Email read receipts are unreliable because many systems block them. If you hear nothing within a few business days, send a short follow-up asking whether anything is needed for approval.",
      },
      {
        q: "Is it unprofessional to send invoices from a personal Gmail address?",
        a: "It is acceptable for many sole traders, but an address on your own domain looks more established and is less likely to be flagged as suspicious by corporate filters. Whatever address you use, keep it consistent so clients recognize genuine invoices. If you trade as a company, make sure the invoice shows the company's legal name, not just your personal name.",
      },
      {
        q: "Can I send an invoice directly from the free invoice generator?",
        a: "No. The generator creates and downloads your invoice as a PDF in your browser, but it does not send emails. Download the PDF, name it with the invoice number and client name, and attach it to an email from your own account, or upload it to the client's portal. Keeping sending in your own inbox also gives you a record of when it went.",
      },
      {
        q: "Should I mail a paper invoice?",
        a: "Only when a client specifically asks for one, which still happens with some government bodies, older firms and individual customers. Print from the same PDF you keep on file so both copies match, and consider including a tear-off remittance slip with the invoice number. Note the posting date in your tracker, and allow extra days for delivery before the due date.",
      },
      {
        q: "What should I do if my invoice email bounces or goes to spam?",
        a: "If it bounces, check the address with your contact and resend immediately, noting the original send date. To reduce spam filtering, use a plain subject line with the invoice number, keep the attachment small, avoid link-heavy emails and send from a consistent address. For important invoices, ask the client to confirm receipt rather than assuming it arrived.",
      },
      {
        q: "How do I submit an invoice through a client's supplier portal?",
        a: "Complete the client's supplier onboarding first, including bank and tax details, because portals often reject invoices from unregistered suppliers. Then enter the invoice exactly as the portal asks, matching the PO number, line amounts and tax to your PDF. Upload the PDF if the portal allows it, and record the portal reference number in your tracker.",
      },
      {
        q: "Should I password-protect my invoice PDF?",
        a: "Usually not. Password-protected PDFs often fail in accounts-payable tools that read invoices automatically, and staff may not have the password when your contact is away. Instead, send to the confirmed accounts-payable address and avoid putting sensitive personal data on the invoice. If a client's policy requires encryption, follow their preferred secure upload method.",
      },
      {
        q: "What is a customer statement and when should I send one?",
        a: "A customer statement lists all invoices, payments and credit notes for one client over a period, ending with the total balance owed. It is useful for clients with several open invoices, often sent monthly. A statement is not a replacement for invoices, but it helps both sides spot missing payments, duplicates or invoices that never arrived.",
      },
    ],
    content: `
<h2>Send a PDF, always</h2>
<p>PDFs render identically on every device and cannot be edited accidentally. Never send a spreadsheet or word-processor file as your invoice of record. Those formats break layouts, invite accidental edits, and sometimes get blocked by corporate email filters.</p>
<p>Create the PDF from a proper template first. The <a href="/invoice-generator">invoice generator</a> exports a clean file you can attach immediately.</p>

<h2>Name the file properly</h2>
<p>Use a pattern like <code>Invoice-2026-0041-AcmeLtd.pdf</code>. Accounts-payable teams handle hundreds of files a week; a descriptive name gets yours filed instead of lost in a pile of <code>invoice(3).pdf</code> downloads. Include the client name as they know themselves, not your internal nickname for them.</p>

<h2>Send it to the right person</h2>
<p>Ask for the accounts-payable address at kickoff, not after the work is done. CC your day-to-day contact so they can approve internally. If the client uses a portal, follow their portal rules and still keep a PDF copy for your records.</p>
<p>Wrong inbox is one of the top reasons "we never got it" appears three weeks late. Confirm receipt with a one-line ask if the invoice is large: "Please confirm it landed with AP."</p>

<h2>Subject lines that get opened and filed</h2>
<p>Put the invoice number, client name, and due date in the subject. Avoid cute marketing language. Examples:</p>
<ul>
<li><code>Invoice 2026-0041 | Acme Ltd | due 14 Aug 2026</code></li>
<li><code>Invoice 2026-0041 | £2,400 | PO 77821</code></li>
</ul>
<p>When chasing, keep the same number visible: <code>Reminder: invoice 2026-0041 due today</code>.</p>

<h2>Email template: first send</h2>
<p><em>Subject: Invoice 2026-0041 | Acme Ltd | due 14 Aug 2026</em></p>
<p>Hi Sam,</p>
<p>Please find attached invoice 2026-0041 for £2,400 covering the August retainer. Payment is due by 14 August; bank details are on the invoice. PO 77821 is referenced on the PDF.</p>
<p>Happy to answer any questions from AP.</p>
<p>Thanks,<br>Alex</p>

<h2>Email template: polite reminder</h2>
<p><em>Subject: Reminder: invoice 2026-0041 due today</em></p>
<p>Hi Sam,</p>
<p>A quick reminder that invoice 2026-0041 (£2,400) is due today. I have re-attached it for convenience. If it is already scheduled, please ignore this note.</p>
<p>Thanks,<br>Alex</p>

<h2>Email template: seven days overdue</h2>
<p><em>Subject: Overdue: invoice 2026-0041 (£2,400)</em></p>
<p>Hi Sam,</p>
<p>Invoice 2026-0041 for £2,400 was due on 14 August and appears unpaid on our side. Could you confirm whether it is with AP or if anything is missing for approval? Happy to resend in another format if needed.</p>
<p>Thanks,<br>Alex</p>

<h2>Email template: firm escalation</h2>
<p><em>Subject: Action required: invoice 2026-0041 now 14 days overdue</em></p>
<p>Hi Sam,</p>
<p>Invoice 2026-0041 (£2,400) is now 14 days past due. Per our agreement, late balances may incur interest as stated on the invoice. Please confirm a payment date this week or connect me with the person who can.</p>
<p>I have re-attached the PDF. Once paid, I will send a receipt referencing this invoice number.</p>
<p>Thanks,<br>Alex</p>

<h2>Escalating without burning the relationship</h2>
<p>After 14 days overdue, reference your late-payment terms and ask for a specific payment date rather than a vague update. Escalate to the budget holder if your only contact is a project manager without payment authority. Remain factual: amounts, dates, attachments.</p>
<p>If you supply ongoing work, state when work will pause. Surprises damage trust; clear conditions usually accelerate payment.</p>

<h2>Portals, shared inboxes and international sends</h2>
<ul>
<li>Follow portal field requirements exactly (tax IDs, coding blocks).</li>
<li>Do not rely on a Slack DM as the official send. Always email or portal.</li>
<li>For international clients, mention currency and fee responsibility in the body as well as on the PDF.</li>
</ul>


<h2>Attachments, links, and security filters</h2>
<p>Prefer attaching the PDF directly. Links to expiring downloads create support burden and sometimes trigger corporate security reviews. Keep file size reasonable: compressed logos beat multi-megabyte background images that bounce from mail servers.</p>
<p>If you must use a portal link, still attach the PDF when the system allows it, or confirm the portal entry number in the email so everyone can cross-reference.</p>
<h2>CC, BCC, and thread discipline</h2>
<p>CC the project contact; avoid huge CC lists that encourage nobody to act. Do not BCC people who later need to reply-all with approval. Invisible stakeholders create invisible delays. Start a clean email for the first send rather than burying the invoice under a long project thread where AP never looks.</p>
<p>When chasing, reply to your original send thread so history is visible, and re-attach the PDF every time. Assuming they still have the file is optimistic.</p>
<h2>After-hours and time zones</h2>
<p>Sending at the start of the client's business week often beats Friday evening drops that sit untouched. For international clients, aim for morning in their time zone. Timing will not fix a broken invoice, but it stops avoidable delay when everything else is correct.</p>

<h2>Shared mailboxes and handoffs</h2>
<p>When AP is a shared inbox, address the email to the mailbox and greet the team by role ("Hello Accounts Payable") while still CC'ing your champion. Ask for a ticket or reference number if they use one. Record that reference on your tracker so future chases cite it. Handoffs between AP staff are smoother when your subject line already contains the invoice number they search for.</p>
<h2>After it is paid</h2>
<p>Send a short thank-you and a receipt that references the invoice number. Mark your tracker paid the same day. For the difference between the two documents, see <a href="/blog/invoice-vs-receipt">invoice vs receipt</a>.</p>
<p>Create the PDF first with our <a href="/invoice-generator">generator</a>, then use the templates above. Freelancers can pair this with the <a href="/blog/freelancer-invoice-guide">freelancer's invoice guide</a>; teams should align with the <a href="/blog/small-business-invoice-guide">small business invoicing guide</a>.</p>
`,
  },
  {
    slug: "common-invoice-mistakes",
    title: "12 Common Invoice Mistakes That Delay Your Payment",
    description:
      "Missing PO numbers, vague descriptions, wrong tax rates: the errors that push invoices to the bottom of the pile, and how to avoid them.",
    category: "invoicing-basics",
    date: "2026-05-20",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "Is an invoice still valid if it contains a mistake?",
        a: "Usually it still works as a request for payment, but the client may refuse to pay until the error is fixed. Mistakes on tax invoices are more serious, because a missing or wrong tax field can stop your customer from reclaiming tax. Correct the problem with a credit note and a new invoice, or a reissue, according to your local rules.",
      },
      {
        q: "What should I do if I sent an invoice to the wrong client?",
        a: "Contact the recipient immediately, explain the error, and ask them to delete it and not pay it. Void the invoice in your records or issue a credit note against it, then send a correct invoice to the right client with a new number. If the invoice contained another client's personal data, check whether your privacy rules require you to report it.",
      },
      {
        q: "What if I undercharged a client on an invoice?",
        a: "Tell the client promptly and explain the error. If the invoice is unpaid and not yet recorded, you may be able to cancel it and issue a corrected one. Otherwise, send a supplementary invoice or debit note for the difference, referencing the original number. Whether the client must pay depends on your agreement, so be polite and specific.",
      },
      {
        q: "What should I do if a client overpaid or paid an invoice twice?",
        a: "Confirm the duplicate payment against your bank statement, then tell the client. Offer either a refund or a credit toward their next invoice, and do what they choose in writing. Record the overpayment in your books so it is not mistaken for income. Paying it back quickly protects trust and avoids reconciliation problems for both sides.",
      },
      {
        q: "Can I still send an invoice months after I did the work?",
        a: "Usually yes, but late invoices are more likely to be questioned, fall outside the client's budget year or get pushed down the queue. Legal time limits for recovering unpaid debts exist and vary by country and state, often several years. Tax rules may also set deadlines for issuing invoices, so send late invoices as soon as you notice them.",
      },
      {
        q: "Should the invoice date be the day I did the work or the day I send it?",
        a: "Usually the invoice date is the day you issue it, and payment terms count from that date. If the work happened on a different date, show the supply date or service period separately. In VAT and GST systems, the supply date can affect when tax is due, so make sure both dates are correct rather than backdating the invoice.",
      },
      {
        q: "Does an invoice need a signature to be valid?",
        a: "In most countries a signature is not required on an ordinary invoice, and a missing one rarely delays payment. Some tax regimes or clients do ask for a signature or digital signature, for example on certain GST invoices. If a client's policy requires one, add it. Otherwise, an empty signature line can make the document look unfinished.",
      },
      {
        q: "What happens if I use the same invoice number twice?",
        a: "Duplicate numbers confuse both your records and your client's. Their accounts system may reject the second invoice as a duplicate, or someone may pay the wrong one. In tax audits, repeated numbers can raise questions about missing sales. If it happens, keep the first invoice, cancel the duplicate with a note, and reissue it under the next unused number.",
      },
      {
        q: "What if my client paid into the wrong bank account because of a typo?",
        a: "Contact your bank and the client's bank as soon as possible, because a quick recall request has the best chance of recovering funds. Then send a corrected invoice with the right details. To prevent this, copy bank details from a saved profile instead of retyping them, and use payee name-checking services where your country's banks offer them.",
      },
      {
        q: "Is rounding hours on an invoice a mistake?",
        a: "Rounding is fine if it is consistent, fair and agreed. State your policy, such as rounding to the nearest quarter hour, in the contract and the invoice notes. Problems arise when rounding always goes up, is applied differently each time, or makes line totals disagree with the timesheet. Let your invoice tool calculate totals from the rounded hours.",
      },
    ],
    content: `
<h2>Why small errors cost weeks</h2>
<p>Accounts payable is a gatekeeping function. When an invoice fails a checklist (missing PO, wrong entity, maths mismatch), it is rejected or parked. You rarely get a detailed coaching email; you get silence until you chase. Preventing mistakes is faster than curing them.</p>
<p>Use the list below as a pre-send audit. A structured tool such as the <a href="/invoice-generator">free invoice generator</a> removes several of these automatically by keeping required fields visible and totals calculated.</p>

<h2>The twelve mistakes</h2>
<ol>
<li><strong>No unique invoice number.</strong> Impossible to reference in bank transfers or reminder emails. Always use a sequential scheme and never reuse numbers.</li>
<li><strong>Missing purchase order number.</strong> Enterprise systems often reject invoices without a PO match. Ask at kickoff; print it on the PDF.</li>
<li><strong>Vague line descriptions.</strong> "Consulting" invites questions; questions cost weeks. Name deliverables, periods, and phases.</li>
<li><strong>No due date.</strong> "Soon" or "ASAP" is not a term. Give a calendar date and match it to contracted Net terms.</li>
<li><strong>Wrong legal entity.</strong> Bill the company on the contract, not a trading name, nickname, or personal Gmail for a limited company.</li>
<li><strong>Maths that does not add up.</strong> Hand-edited totals that disagree with line sums are an instant red flag. Let the tool calculate.</li>
<li><strong>Incorrect tax rate or missing tax number.</strong> Blocks the client's reclaim and can make the invoice non-compliant. See the <a href="/blog/tax-invoice-guide">tax invoice guide</a>.</li>
<li><strong>No payment instructions.</strong> Do not make clients ask for bank details. Put them on the invoice in a scannable block.</li>
<li><strong>Editable file formats.</strong> Send PDF, not spreadsheets or docs that reflow or get altered.</li>
<li><strong>Sending to the wrong inbox.</strong> Find accounts payable early; CC the project contact for internal push.</li>
<li><strong>Invoicing late.</strong> You slip a whole payment cycle. Invoice on delivery or on the agreed milestone day.</li>
<li><strong>No follow-up system.</strong> Unchased invoices are paid last. Diary reminders on day 1, 7, and 14 after due.</li>
</ol>

<h2>Mistakes 1–4: identity and timing</h2>
<p>Number, PO, descriptions, and due date are how buyers route and schedule payment. If any are wrong, the invoice may never enter the payment run. Freelancers underestimate PO culture; corporates underestimate how often trading names differ from legal entities.</p>
<p>Fix: maintain a client profile with legal name, AP email, PO rules, and default terms. Refresh it when the client rebrands.</p>

<h2>Mistakes 5–8: compliance and clarity</h2>
<p>Wrong entity, bad maths, tax errors, and missing payment details create either rejection or manual exception handling. Exception handling is where invoices go to wait.</p>
<p>Fix: dual-check large invoices; use templates with tax fields; keep IBAN/account name identical every time so clients can save a payee record. For VAT/GST specifics, read the <a href="/blog/vat-invoice-guide">VAT</a> and <a href="/blog/gst-invoice-guide">GST</a> guides.</p>

<h2>Mistakes 9–12: delivery and discipline</h2>
<p>Format, recipient, timing, and follow-up are operational habits. Teams that batch send on Fridays with a shared tracker outperform heroic individuals who invoice from memory.</p>
<p>Fix: adopt the send checklist in <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> and the process tips in the <a href="/blog/small-business-invoice-guide">small business invoicing guide</a>.</p>

<h2>Quick pre-send checklist</h2>
<ul>
<li>Filename includes invoice number and client</li>
<li>Buyer legal name and address verified</li>
<li>PO / reference present if required</li>
<li>Lines, discounts, tax, and total agree</li>
<li>Due date visible beside amount due</li>
<li>Payment methods complete</li>
<li>PDF attached (not a link that expires)</li>
<li>Subject line includes number and due date</li>
</ul>

<h2>What to do if an invoice is already rejected</h2>
<ol>
<li>Ask for the rejection reason in writing.</li>
<li>Do not silently edit and resend under the same number if the document was formally issued. Use a credit note plus a new invoice when required.</li>
<li>Fix the root data (entity, PO, tax) in your template so the error does not recur.</li>
<li>Resend with a short note listing what changed.</li>
</ol>


<h2>Mistakes that look like client problems</h2>
<p>Sometimes the invoice is fine and the buyer's process is slow. Still, rule out your own errors first: confirm delivery to AP, confirm PO match, confirm entity. Only then escalate. Approaching a late payer with "please check whether anything is missing" lands better than accusations, and occasionally surfaces a fixable defect you caused.</p>
<p>Document every chase with dates. If you eventually need a collections letter or legal help, that timeline matters. Memory is not a ledger.</p>
<h2>Template drift across the team</h2>
<p>One founder uses a solid template; a contractor later pastes totals into a slide deck. Standardise on a single generator workflow and forbid ad-hoc invoices for anything above a trivial amount. Drift is how mistakes nine through twelve return after you thought you fixed them.</p>
<p>Review a sample of recent PDFs quarterly. Look for missing POs, pale payment text, and inconsistent seller addresses after an office move.</p>
<h2>Preventing repeat rejects</h2>
<p>When a client rejects an invoice, add the reason to their profile checklist. The second invoice to that client should not fail the same way. Institutional memory turns one painful reject into a permanent intake improvement.</p>

<h2>Currency and rounding traps</h2>
<p>Display currency explicitly on every total. Rounding tax to the nearest unit incorrectly (or rounding each line differently from the system that filed the return) creates one-cent disputes that still block payment in rigid ERPs. Let your generator calculate, and match the rounding mode your accountant expects.</p>
<p>Do not convert currencies by hand in a spreadsheet cell you forget to update. State one currency and stick to it for that invoice.</p>
<h2>The fix going forward</h2>
<p>A structured template eliminates many of the twelve automatically. Our <a href="/invoice-generator">free invoice generator</a> keeps totals consistent and required fields in view. Pair it with a layout that matches your buyer (<a href="/invoice-templates/corporate">Corporate</a> for strict AP teams, <a href="/invoice-templates/modern">Modern</a> for everyone else) and run the checklist above until it is muscle memory.</p>
`,
  },
  {
    slug: "tax-invoice-guide",
    title: "Tax Invoice Guide: What It Is and What It Must Show",
    description:
      "A tax invoice lets your customer reclaim the tax they paid. Learn the mandatory fields and how it differs from a standard invoice.",
    category: "tax-compliance",
    date: "2026-05-13",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    related: ["tax-invoice-vs-retail-invoice"],
    jurisdiction: "General",
    faqs: [
      {
        q: "When do I have to issue a tax invoice?",
        a: "The deadline depends on your country. In the UK, VAT invoices are generally due within 30 days of the supply. In Australia, you must provide a tax invoice within 28 days if a customer asks, unless the sale is $82.50 or less including GST. India sets its own time limits for goods and services. Check your tax authority's current rules.",
      },
      {
        q: "Can I issue a tax invoice if I am not registered for tax?",
        a: "No. Only a business registered for VAT, GST or a similar tax should issue a tax invoice or charge that tax. If you are not registered, send an ordinary invoice with no tax lines or tax number. Charging tax while unregistered can create penalties and problems for customers trying to claim credits, so register first if you are required to.",
      },
      {
        q: "Does the US use tax invoices?",
        a: "Not in the VAT or GST sense. The US has no federal VAT, and sales tax is set by states and local areas, usually collected once on the final sale to the end customer. Business buyers generally do not reclaim sales tax through invoices. Instead, resellers often give suppliers a resale or exemption certificate. Rules vary by state.",
      },
      {
        q: "What is the difference between tax-inclusive and tax-exclusive prices?",
        a: "A tax-exclusive price is the amount before tax, with tax added on top. A tax-inclusive price already contains the tax. For example, 100 plus 10% tax is 110 tax-inclusive. Tax invoices usually show the net amount, the rate and the tax separately so buyers can claim credit. Consumer prices are often quoted tax-inclusive, so be clear which one you mean.",
      },
      {
        q: "Can a tax invoice be issued in a foreign currency?",
        a: "Usually yes, but many countries require the tax amount, and sometimes the net total, to be shown in the local currency too. In the UK, for example, a VAT invoice in another currency must still show the net total and VAT at each rate in sterling. Note the exchange rate you used and check your authority's rules.",
      },
      {
        q: "What is a simplified tax invoice?",
        a: "A simplified tax invoice is a shorter version allowed for lower-value sales, often without the buyer's details. In the UK, a simplified VAT invoice is generally allowed for supplies of up to £250 including VAT. In Australia, tax invoices under $1,000 do not need the buyer's identity. Thresholds and required fields differ by country, so confirm locally.",
      },
      {
        q: "Do I need a tax invoice to claim back the tax I paid?",
        a: "In most VAT and GST systems, yes. A valid tax invoice from your supplier is the main evidence for claiming input tax credits. Some systems relax this for very small purchases, such as Australia's rule for purchases of $82.50 or less including GST, where other records can be enough. Keep supplier invoices for the period your law requires.",
      },
      {
        q: "Can my customer create the tax invoice instead of me?",
        a: "In some countries, yes, under self-billing rules. The buyer issues the invoice on the supplier's behalf, which is common in industries like agriculture and haulage. In the UK this needs a self-billing agreement, and in Australia these documents are called recipient-created tax invoices. Both sides must meet specific conditions, so check the official guidance first.",
      },
      {
        q: "Is a PDF tax invoice legally acceptable?",
        a: "In many countries a PDF sent by email is acceptable if it is authentic, readable and kept for the required period. A growing number of countries now require structured e-invoices that pass through a government or network system, in which case a PDF alone is not enough. Our generator creates PDF invoices, not structured e-invoices, so check your local mandate.",
      },
      {
        q: "What happens if a tax invoice is missing a required field?",
        a: "Your customer may be unable to claim the tax back and will likely ask for a corrected document before paying. Tax authorities can also question invoices that do not meet the rules during an audit. Fix it promptly by issuing a corrected invoice or a credit note and replacement, depending on what your local rules allow.",
      },
    ],
    content: `
<p><strong>Important:</strong> Tax laws, rates, registration requirements, and invoicing rules can change and may vary by jurisdiction. This article provides general informational content and should not be considered professional tax, accounting, or legal advice. Verify current requirements with the relevant tax authority or a qualified professional.</p>

<h2>What makes an invoice a tax invoice</h2>
<p>A tax invoice is a standard invoice plus the specific information a tax authority requires so the buyer can claim an input-tax credit (or equivalent). Miss a mandatory field and your customer may lose the credit, which is why accounts-payable teams check these documents carefully.</p>
<p>Not every sales document is a tax invoice. Till receipts, pro forma invoices, and estimates usually do not qualify. If your customer needs to reclaim tax, ask what their authority requires before you bill.</p>

<h2>Typical mandatory fields</h2>
<p>Exact lists differ by country, but most regimes expect some version of the following:</p>
<ul>
<li>The words "Tax Invoice" (or the locally required title)</li>
<li>Supplier legal name, address, and tax registration number</li>
<li>Customer name, address, and (for many B2B cases) tax number</li>
<li>Unique sequential number and issue date</li>
<li>Description, quantity, and unit price per line</li>
<li>Taxable amount per rate, the rate applied, and tax amount per rate</li>
<li>Total excluding tax, total tax, and total including tax</li>
<li>Supply date / tax point when it differs from the issue date</li>
</ul>
<p>Some regions also require QR codes, digital signatures, e-invoicing clearance, or industry codes. Do not assume a generic PDF layout is enough for regulated channels.</p>

<h2>Tax invoice vs ordinary invoice</h2>
<table><thead><tr><th>&nbsp;</th><th>Ordinary invoice</th><th>Tax invoice</th></tr></thead><tbody>
<tr><td>Primary job</td><td>Request payment</td><td>Request payment + support tax reclaim / reporting</td></tr>
<tr><td>Tax registration IDs</td><td>Optional / situational</td><td>Usually mandatory</td></tr>
<tr><td>Tax breakdown</td><td>May be simplified</td><td>Usually required by rate</td></tr>
<tr><td>Buyer scrutiny</td><td>AP approval</td><td>AP + tax compliance checks</td></tr>
</tbody></table>

<h2>Multiple tax rates</h2>
<p>If lines carry different rates, group and subtotal them by rate. A single blended tax line is not acceptable in most jurisdictions because the buyer cannot allocate credit correctly. Show clearly:</p>
<ul>
<li>Net amount at rate A → tax at rate A</li>
<li>Net amount at rate B → tax at rate B</li>
<li>Grand totals</li>
</ul>
<p>Discount allocation matters. Many systems require discounts to be applied per line or per rate group before tax is calculated. Random "goodwill" discounts off the gross total can break compliance.</p>

<h2>Exempt, zero-rated, and reverse-charge supplies</h2>
<p>State the reason for exemption, zero rating, or reverse charge directly on the invoice. Examples of wording (always confirm locally): "Exempt supply: [reason]"; "Zero-rated: export of goods"; "Reverse charge: customer to account for tax."</p>
<p>Leaving the rate blank without explanation creates ambiguity for both auditors and clients. Related deep-dives: <a href="/blog/gst-invoice-guide">GST invoice guide</a> and <a href="/blog/vat-invoice-guide">VAT invoice guide</a>.</p>

<h2>Corrections and credit notes</h2>
<p>Once a tax invoice is issued, do not quietly edit and resend it as if nothing happened. Most regimes expect a credit note (or debit note) that references the original invoice number, with a clear adjustment to net and tax. Keep both documents.</p>
<p>If you discover undercharged tax, speak to your accountant before inventing a process. Correcting tax after the fact can have filing implications.</p>

<h2>Record-keeping</h2>
<p>Retain tax invoices for the period your law requires (often five to seven years or more). Store searchable PDFs and ensure backup copies exist. When you change accounting systems, export historical invoices rather than trusting a vendor forever.</p>

<h2>Practical workflow tips</h2>
<ul>
<li>Save tax IDs on each client profile so they are never typed from memory.</li>
<li>Use sequential numbering without gaps you cannot explain.</li>
<li>Train anyone who invoices on the difference between tax-inclusive and tax-exclusive pricing.</li>
<li>Align your template's tax block with how your filings are prepared.</li>
</ul>


<h2>Who needs a tax invoice</h2>
<p>Registered suppliers generally issue tax invoices for taxable supplies to customers who need them for reclaim or record-keeping. Thresholds, exceptions, and consumer versus business rules vary widely. If you recently crossed a registration threshold, update your templates immediately. Charging tax without showing required fields, or failing to charge when you should, both create cleanup work.</p>
<p>Buyers should tell you when they need a full tax invoice rather than a simplified receipt. Train your sales desk to ask for tax IDs at onboarding for business customers so the first invoice is not a scramble.</p>
<h2>Alignment with filings</h2>
<p>Your invoice-level tax totals should reconcilable to the returns you file. If staff issue ad-hoc credits without tax adjustments, filings drift from documents. Close each period with a quick match: invoices issued, credits issued, tax collected, tax on credits.</p>
<p>When rates change mid-year, update product defaults on the day the new rate applies and double-check drafts created earlier. Old drafts with stale rates are a quiet source of errors.</p>
<h2>Working with accountants</h2>
<p>Send your accountant samples of domestic, reverse-charge, exempt, and mixed-rate invoices for a quick review once a year, or whenever you enter a new sales pattern. A thirty-minute review prevents months of brittle templates. Keep this guide as orientation only; their advice reflects your registration and jurisdiction.</p>

<h2>Cross-border first invoices</h2>
<p>The first time you sell into a new country, pause before reusing your domestic tax invoice layout. Ask whether reverse charge, local registration, or marketplace collection rules apply. A correctly unpaid VAT line with reverse-charge wording is often safer than charging domestic tax to a foreign VAT-registered business by habit.</p>
<p>Document the decision in the client file so the next invoice follows the same treatment.</p>
<p>For country-specific detail, read our guides to <a href="/blog/australia-tax-invoice-requirements">tax invoice requirements in Australia</a> and <a href="/blog/zatca-e-invoicing-guide">Saudi ZATCA e-invoicing</a>.</p>

<h2>Build the document carefully</h2>
<p>Use the notes and tax fields in our <a href="/invoice-generator">free invoice generator</a> to capture registration numbers, rate breaks, and reverse-charge statements. Pair with a clear layout such as <a href="/invoice-templates/corporate">Corporate</a> when buyers are strict about reference fields.</p>
<p>Treat this article as general guidance only. Confirm current requirements with a qualified professional or the relevant tax authority before you rely on a format for reclaim or filing.</p>
`,
  },
  {
    slug: "gst-invoice-guide",
    title: "GST Invoice Guide: Fields, Rates and Common Errors",
    description:
      "How a GST invoice differs from a regular invoice, the fields it must carry, and how to handle CGST, SGST and IGST-style splits.",
    category: "tax-compliance",
    date: "2026-05-06",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    related: ["gst-registration-india", "singapore-gst-tax-invoice"],
    jurisdiction: "GST jurisdictions (e.g. India)",
    faqs: [
      {
        q: "What are the current GST rates in India?",
        a: "Since 22 September 2025, India's GST mainly uses two rates, 5% and 18%, after the GST Council removed the 12% and 28% slabs. A higher 40% rate applies to a small list of demerit and luxury goods, and some items remain nil-rated or exempt. Rates depend on the HSN or SAC code, so check the latest CBIC notifications for your products.",
      },
      {
        q: "What is the difference between a tax invoice and a bill of supply under GST?",
        a: "A tax invoice is issued for taxable supplies and shows the GST charged. A bill of supply is issued when no GST is charged, for example by composition taxpayers or for exempt supplies. A bill of supply does not show tax and the buyer cannot use it to claim input tax credit. Using the wrong document confuses returns and credits.",
      },
      {
        q: "Within how many days must I issue a GST invoice?",
        a: "In India, a tax invoice for goods is generally issued at or before the time of removal or delivery. For services, the general rule is within 30 days of supply, with a longer period for certain banks and financial institutions. Late invoicing can change your time of supply, so check the current rules on the GST portal or with your accountant.",
      },
      {
        q: "How many digits of HSN code must a GST invoice show?",
        a: "Under India's current rules, businesses with aggregate annual turnover up to ₹5 crore must show at least a 4-digit HSN code on B2B invoices, while those above ₹5 crore must show at least 6 digits. Services use SAC codes. Requirements can change, so confirm the current notification on the GST portal and keep codes saved with your product list.",
      },
      {
        q: "Can a composition dealer issue a GST tax invoice?",
        a: "No. Under India's composition scheme, a dealer cannot collect GST from customers and issues a bill of supply instead of a tax invoice. The bill should state that the supplier is a composition taxable person not eligible to collect tax. Buyers cannot claim input tax credit on purchases from composition dealers, which can matter to business customers.",
      },
      {
        q: "How many copies of a GST invoice are needed?",
        a: "In India, a GST invoice for goods is generally prepared in triplicate: the original for the recipient, the duplicate for the transporter and the triplicate for the supplier. Invoices for services are prepared in duplicate. Mark each copy accordingly. Where e-invoicing and e-way bills apply, the digital records also matter, so check the latest rules.",
      },
      {
        q: "Are there rules for GST invoice numbers?",
        a: "Yes. In India, an invoice number must be consecutive and unique for each financial year, and can be up to 16 characters long. It may use letters, numbers, hyphens and slashes, so a format like INV/25-26/0001 works. Many businesses start a new series each April. Keep separate series, such as exports, clearly labeled and documented.",
      },
      {
        q: "Do I need to issue GST e-invoices?",
        a: "In India, businesses above the turnover threshold, currently ₹5 crore aggregate turnover, must report B2B invoices to the Invoice Registration Portal to get an IRN and QR code. Larger taxpayers face a deadline for reporting invoices after issue. A PDF from a standard invoice generator, including ours, is not an e-invoice, so use IRP-compatible software if you are covered.",
      },
      {
        q: "How can I check if a customer's GSTIN is valid?",
        a: "Use the Search Taxpayer tool on India's official GST portal to confirm the GSTIN is active and that the legal name matches your customer. A GSTIN has 15 characters: the first two show the state code and the next ten are the holder's PAN. Checking before your first invoice prevents rejected credits and corrections later.",
      },
      {
        q: "Do other GST countries split tax into CGST, SGST and IGST?",
        a: "Not usually. The central, state and integrated split is specific to India's dual GST system. Countries such as Australia, New Zealand and Singapore use a single GST rate on invoices. Canada combines federal GST with provincial taxes or a harmonized HST, depending on the province. Follow the invoice rules of the country where the supply is taxed.",
      },
    ],
    content: `
<p><strong>Important:</strong> Tax laws, rates, registration requirements, and invoicing rules can change and may vary by jurisdiction. This article provides general informational content and should not be considered professional tax, accounting, or legal advice. Verify current requirements with the relevant tax authority or a qualified professional.</p>

<h2>What is a GST invoice?</h2>
<p>A GST invoice is the document a registered supplier issues for a taxable supply of goods or services under a goods and services tax system. It typically carries GST identification numbers for the parties involved and shows tax split by component where the local rules require it. Requirements described here are typical of GST systems such as India&apos;s and may not apply elsewhere.</p>
<p>If you are not registered, you generally should not charge GST or issue documents that imply you are. Misrepresenting registration status creates problems for you and for customers attempting to claim credits.</p>

<h2>Required fields (typical)</h2>
<ul>
<li>Supplier name, address, and GSTIN (or local equivalent ID)</li>
<li>Consecutive invoice number and date</li>
<li>Recipient name, address, and GSTIN for registered recipients</li>
<li>Place of supply and state / territory code where relevant</li>
<li>HSN or SAC (or similar classification) code per line when required</li>
<li>Taxable value, rate, and tax amount, split into components when applicable</li>
<li>Whether tax is payable under reverse charge</li>
<li>Signature or digital signature of the supplier where mandated</li>
<li>Shipping / billing addresses when they differ for goods</li>
</ul>
<p>E-invoicing or e-way bill rules may add IRN/QR requirements for certain turnovers and document types. Check whether your invoices must pass through a government portal before they are valid for credit.</p>

<h2>Intra-state vs inter-state supplies</h2>
<p>In multi-component GST systems, intra-state supplies often split tax into two equal components (commonly labelled along the lines of central and state tax). Inter-state supplies often use a single integrated tax. Getting the place of supply wrong is one of the most common GST invoicing errors. It misclassifies the components and can break the buyer's credit flow.</p>
<p>Determine place of supply using the rules for goods versus services in your jurisdiction; do not guess based on where your office feels "mainly" located.</p>

<h2>HSN / SAC and line clarity</h2>
<p>Classification codes belong with your product and service list so they are never improvised at invoice time. Wrong codes create matching issues in returns and audits. Descriptions should still be human-readable: codes alone are not enough for a client approver.</p>

<h2>Reverse charge</h2>
<p>When reverse charge applies, the supplier may need to show that tax is payable by the recipient, often at a nil charge on the face of the invoice with explicit wording. Do not collect tax from the client if reverse charge means they self-account, and do not omit the disclosure.</p>
<p>For a broader cross-border / reverse-charge framing in VAT systems, see the <a href="/blog/vat-invoice-guide">VAT invoice guide</a>. Concepts rhyme; forms differ.</p>

<h2>Exports and special series</h2>
<p>Exports and certain zero-rated supplies often need distinct documentation, currency handling, and sometimes a separate invoice series. Shipping bills, LUT/bond references, or export declarations may sit alongside the invoice in your records even if they are not printed on every PDF.</p>
<p>Keep export invoices clearly labelled and stored so filing season does not become archaeology.</p>

<h2>Credit notes, debit notes, and amendments</h2>
<p>Issue credit notes rather than editing an issued invoice. Reference the original invoice number, adjust taxable value and tax components, and keep both documents. Debit notes similarly document upward adjustments when allowed.</p>
<p>Avoid duplicate invoice numbers when regenerating PDFs after a typo. Void and reissue under a controlled process if your software does not manage amendments for you.</p>

<h2>Common GST invoicing errors</h2>
<ul>
<li>Wrong place of supply → wrong tax component split</li>
<li>Missing recipient GSTIN on B2B supplies</li>
<li>Incorrect or blank HSN/SAC where required</li>
<li>Charging GST while unregistered (or failing to charge while registered)</li>
<li>Omitting reverse-charge wording when applicable</li>
<li>Maths mismatches between taxable value and tax</li>
</ul>

<h2>Practical tips</h2>
<ul>
<li>Store HSN/SAC codes with your product list so they are never guessed.</li>
<li>Save buyer GSTINs on client records and validate format where tools allow.</li>
<li>Keep a separate series for export invoices if your process benefits from it.</li>
<li>Reconcile invoice-level data to returns before filing deadlines.</li>
<li>Train staff that "tax invoice" is a compliance artefact, not just branding.</li>
</ul>


<h2>B2B versus B2C documentation habits</h2>
<p>Registered business customers usually need full GST details to claim credit. Consumers may need less on the face of the document, but your internal records should still explain the supply. Do not invent a "simpler" B2B format that drops GSTINs to save typing. That saving is expensive later.</p>
<p>Collect buyer GSTINs during onboarding and verify them when official validation tools exist. A single digit error can mean a document that looks fine to humans but fails automated matching.</p>
<h2>Returns, advances, and continuous supply</h2>
<p>Advances and periodic billing for continuous supplies often have specific timing and documentation rules. Align invoice dates with how you report in your return software. If you bill monthly for an ongoing service, name the service period every time so place-of-supply and rate decisions remain reviewable.</p>
<p>Goods returns should reference the original invoice on the credit note and reverse the same tax components. Ad-hoc refunds without tax documents create return mismatches.</p>
<h2>Working with your tax professional</h2>
<p>Bring sample PDFs to your accountant when you expand into inter-state trade, exports, or reverse-charge categories for the first time. Template changes are cheaper than amended filings. Use our <a href="/invoice-generator">invoice generator</a> for clear drafts, then confirm mandatory fields against current official guidance before you scale volume.</p>
<p>Larger GST taxpayers must also report invoices to the IRP; see <a href="/blog/india-e-invoice-limit">the e-invoice limit under GST</a>. For goods moved without a sale, use a <a href="/blog/delivery-challan-format">delivery challan</a> instead of a tax invoice.</p>

<h2>Create and cross-check</h2>
<p>Use the notes and tax fields in our <a href="/invoice-generator">invoice generator</a> to capture registration IDs, rate lines, and reverse-charge statements. For general tax-invoice principles that apply across regimes, read the <a href="/blog/tax-invoice-guide">tax invoice guide</a>. Browse <a href="/invoice-templates">invoice templates</a> when you need a clearer AP-friendly layout.</p>
<p>Always confirm current field lists, rates, and e-invoicing thresholds with your accountant or the relevant authority. This guide is informational, not a filing manual.</p>
`,
  },
  {
    slug: "vat-invoice-guide",
    title: "VAT Invoice Guide: Requirements, Rates and Reverse Charge",
    description:
      "What a VAT invoice must show, when a simplified invoice is allowed, and how reverse charge works for cross-border B2B services.",
    category: "tax-compliance",
    date: "2026-04-29",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    related: [
      "vat-registration-threshold-uk",
      "south-africa-vat-invoice",
      "sales-tax-vs-vat-vs-gst",
    ],
    jurisdiction: "VAT jurisdictions (e.g. UK / EU)",
    faqs: [
      {
        q: "When do I have to register for VAT in the UK?",
        a: "You must register for VAT when your VAT-taxable turnover goes over £90,000 in a rolling 12-month period, or you expect it to exceed that in the next 30 days alone. That threshold has applied since 1 April 2024. You can also register voluntarily below it. Thresholds change, so check HMRC's current guidance before deciding.",
      },
      {
        q: "How quickly must I issue a VAT invoice?",
        a: "In the UK, you generally need to issue a VAT invoice within 30 days of the date of supply, or of payment if you were paid in advance. In the EU, rules differ by country, and invoices for cross-border supplies to other member states are commonly due by the 15th day of the following month. Check your local tax authority's rules.",
      },
      {
        q: "What is the UK limit for a simplified VAT invoice?",
        a: "In the UK, you can generally issue a simplified VAT invoice for retail supplies of £250 or less including VAT. It still needs your name, address and VAT number, the time of supply, a description and the VAT rate, but not the customer's details. If the customer asks for a full VAT invoice, you should provide one.",
      },
      {
        q: "Can I issue a UK VAT invoice in euros or dollars?",
        a: "Yes, you can invoice in any currency. However, where UK VAT is charged, the invoice must show the total net value and the VAT amount at each rate in pounds sterling. You can use the exchange rate at the time of supply or HMRC's published period rates. Note which rate you used so your records can be checked.",
      },
      {
        q: "How do I check a customer's VAT number?",
        a: "For EU VAT numbers, use the European Commission's VIES service, which confirms whether a number is valid for cross-border trade. For UK VAT numbers, use HMRC's online VAT number checker. Save the result, with the date, in the client file. This evidence matters when you apply reverse charge and charge no VAT on cross-border B2B supplies.",
      },
      {
        q: "Do I need to give a VAT invoice to customers who are not VAT registered?",
        a: "In the UK, you generally do not have to issue a VAT invoice to customers who are not VAT registered, such as members of the public, though you can still give them one or a receipt. They cannot reclaim the VAT anyway. Rules in EU countries vary, and some require invoices for certain consumer sales, so check locally.",
      },
      {
        q: "What is the difference between zero-rated and exempt supplies?",
        a: "Both carry no VAT on the invoice, but they are treated differently. Zero-rated supplies are taxable at 0%, so they count towards your VAT turnover and you can usually reclaim VAT on related costs. Exempt supplies are outside the VAT charge, and you generally cannot reclaim the related input VAT. Label each one clearly on the invoice.",
      },
      {
        q: "Does the domestic reverse charge apply to UK construction work?",
        a: "Yes. Since 1 March 2021, the UK domestic reverse charge applies to many building and construction services reported under the Construction Industry Scheme, between VAT-registered businesses. The supplier shows the VAT rate and amount but does not charge it, and adds wording stating that the customer must account for the VAT to HMRC. End users are excluded, so check HMRC's guidance.",
      },
      {
        q: "How long must I keep VAT invoices?",
        a: "In the UK, you must generally keep VAT records, including copies of invoices, for at least six years. Other countries set their own periods, often between five and ten years, and some require longer for property. Store digital copies securely with backups, and keep them readable even if you change accounting software.",
      },
      {
        q: "Is a PDF VAT invoice still acceptable?",
        a: "In the UK, a PDF sent by email is generally acceptable as a VAT invoice. Across the EU, more countries now require structured e-invoices for B2B sales, and an EU reform package called VAT in the Digital Age will add digital reporting for cross-border trade. Our generator creates PDF invoices, not structured e-invoices, so check whether a mandate applies to you.",
      },
    ],
    content: `
<p><strong>Important:</strong> Tax laws, rates, registration requirements, and invoicing rules can change and may vary by jurisdiction. This article provides general informational content and should not be considered professional tax, accounting, or legal advice. Verify current requirements with the relevant tax authority or a qualified professional.</p>

<h2>Full VAT invoice</h2>
<p>A full VAT invoice is the document that supports VAT reclaim for the customer and correct reporting for the supplier. Exact field lists differ by country, but a full invoice commonly shows:</p>
<ul>
<li>Your name, address, and VAT registration number</li>
<li>Customer name and address (and VAT number for many B2B / cross-border cases)</li>
<li>A unique sequential invoice number</li>
<li>Invoice date and the tax point / supply date when different</li>
<li>Description of goods or services per line</li>
<li>Net amount per VAT rate, the rate applied, and the VAT amount</li>
<li>Total net, total VAT, and gross total</li>
</ul>
<p>Unit prices and quantities should be clear enough that an auditor can reconstruct the totals. If you issue invoices in a foreign currency, follow local rules for showing exchange rates or VAT in the domestic currency when required.</p>

<h2>Simplified invoices</h2>
<p>Many jurisdictions allow a simplified VAT invoice below a value threshold, typically showing less detail, such as the gross amount and the VAT rate rather than a full buyer-address block. Retail till receipts often rely on these rules.</p>
<p>Check your local threshold and content list before relying on a simplified form for B2B work. Business customers frequently still ask for a full invoice even when a simplified one would be legally allowed, because their reclaim process expects more detail.</p>

<h2>Reverse charge</h2>
<p>For many cross-border B2B services, the customer accounts for VAT instead of the supplier. In those cases you generally:</p>
<ul>
<li>Charge zero VAT on the face of the invoice</li>
<li>Show the customer's VAT number</li>
<li>Add clear wording such as "Reverse charge: customer to account for VAT to HMRC/local authority"</li>
<li>Still keep a full audit trail of the supply</li>
</ul>
<p>Reverse charge is easy to get wrong when you mix domestic and foreign customers in one template. Train whoever invoices to select the correct tax treatment deliberately, not by habit. Related reading: <a href="/blog/tax-invoice-guide">tax invoice guide</a> and, for GST-style systems, <a href="/blog/gst-invoice-guide">GST invoice guide</a>.</p>

<h2>Mixed rates</h2>
<p>Subtotal by rate. Show standard-rated, reduced-rated, zero-rated, and exempt lines separately, each with its own VAT amount (zero where appropriate). Blending rates into one percentage confuses filings and reclaim.</p>
<p>When a discount applies across mixed-rate goods, allocate it in line with local rules (often proportionally by net value per rate) rather than knocking an arbitrary amount off the final gross.</p>

<h2>Credit notes</h2>
<p>To correct a VAT invoice, issue a credit note referencing the original invoice number. Show the adjustment to net and VAT clearly. Never amend and resend the original as if it were untouched; parallel versions of "the same number" create nightmares in audits and customer AP systems.</p>
<p>If you under-billed VAT, get advice before issuing a further charge, as timing and return corrections may be involved.</p>

<h2>Time of supply and deposits</h2>
<p>VAT timing can follow invoice date, payment date, or supply date depending on local time-of-supply rules. Deposits may create a tax point before final delivery. Align your invoicing rhythm with how your VAT returns are prepared so you do not accidentally pull liability into the wrong period.</p>

<h2>Practical compliance habits</h2>
<ul>
<li>Keep VAT numbers on client records and validate them when tools or official checkers are available.</li>
<li>Use continuous numbering without unexplained gaps.</li>
<li>Store PDFs for the statutory retention period.</li>
<li>Separate VAT collected from cash available to spend.</li>
<li>Review mixed-rate and reverse-charge invoices manually until error rates are near zero.</li>
</ul>

<h2>International services and goods</h2>
<p>Place-of-supply rules differ for services and goods, and distance-selling / one-stop-shop style regimes may apply to certain B2C sales. Do not copy a domestic invoice format onto a foreign customer without checking whether reverse charge, zero rating, or local registration obligations apply.</p>
<p>State currency clearly and note who bears bank transfer fees so the net amount you receive matches expectations.</p>


<h2>Domestic B2B habits that prevent reclaim friction</h2>
<p>Even when a simplified invoice would be allowed, many business customers ask for full detail because their reclaim workflow expects it. Defaulting to full VAT invoices for B2B saves negotiation. Include the customer VAT number when you have it; missing numbers are a frequent cause of queries even when not strictly mandatory for every domestic case.</p>
<p>Keep your own VAT number identically formatted on every PDF. Inconsistent spacing or omitted country prefixes confuse automated capture tools some buyers use.</p>
<h2>Goods versus services on the same invoice</h2>
<p>When a job mixes goods and services with different place-of-supply outcomes, split lines carefully and document treatment in notes. Dumping everything into one undifferentiated service line is how reverse-charge and domestic VAT get mixed incorrectly.</p>
<p>Shipping and postage may follow special rules depending on whether they are incidental to goods. If unsure, separate them and seek advice rather than inventing a blended rate.</p>
<h2>Year-end hygiene</h2>
<p>Before year end, review open credit notes, orphaned invoices, and foreign customers billed with domestic VAT by mistake. Clean documents make accountant reviews faster and reduce surprise assessments. Retain evidence of VAT number checks for cross-border B2B where your process requires it.</p>
<p>Across the EU, VAT invoices are steadily becoming structured e-invoices. See <a href="/blog/belgium-poland-e-invoicing-mandates">the Belgium and Poland (KSeF) mandates</a> and <a href="/blog/germany-e-invoicing-xrechnung-zugferd">the German XRechnung rules</a> for two current examples.</p>

<h2>Build the document, then verify</h2>
<p>Build the document in the <a href="/invoice-generator">invoice generator</a>, use an AP-friendly layout such as <a href="/invoice-templates/corporate">Corporate</a> or <a href="/invoice-templates/modern">Modern</a>, and confirm details with your accountant before you rely on a format for reclaim or return filing. See also our <a href="/about">About</a> page and <a href="/disclaimer">Disclaimer</a>.</p>
<p>This article is general information, not tax advice. Rules change; your registration status and trade pattern determine what you must show.</p>
`,
  },
  {
    slug: "professional-invoice-design-tips",
    title: "15 Professional Invoice Design Tips That Improve Payment Speed",
    description:
      "Typography, hierarchy, colour and whitespace choices that make an invoice easier to read, approve and pay, without sacrificing brand.",
    category: "design-templates",
    date: "2026-04-22",
    updated: "2026-09-25",
    author: "Invoice Creator Editorial Team",
    related: ["letterhead-template", "best-fonts-for-invoices"],
    faqs: [
      {
        q: "What font is best for a professional invoice?",
        a: "Choose a clean, widely available sans serif, such as Arial, Helvetica, Inter or Roboto, or a restrained serif for premium brands. Body text around 9 to 11 points is usually readable in print. Pick a font with clear numerals, so 1, 7 and 0 cannot be confused, and use the same font across your quotations and invoices.",
      },
      {
        q: "Should my invoice use my brand colors?",
        a: "Yes, but sparingly. Use your main brand color for one accent, such as the header bar or the amount due label, and keep body text black or dark gray. That keeps the invoice recognizable without hurting legibility. Check that your color still prints well in grayscale and has enough contrast against white.",
      },
      {
        q: "Where should the logo go on an invoice?",
        a: "Most invoices place the logo in the top left, with the word \"Invoice\", the number and the date on the right. That matches how readers scan a page and keeps reference details where accounts teams expect them. Centered logos can work in minimal layouts. Wherever it goes, keep it modest so the amount due remains the focal point.",
      },
      {
        q: "How large should an invoice PDF file be?",
        a: "Aim to keep a typical one or two-page invoice well under 1 MB. Small files send reliably, open quickly on phones and are less likely to be blocked by email or portal size limits. Oversized logos and background images are the usual cause of large files, so compress images before uploading them to your template.",
      },
      {
        q: "Is it unprofessional to use a free invoice template?",
        a: "No. Clients care about clarity, accuracy and consistency, not whether you paid for the design. A free template with your logo, correct legal details, clear line items and visible payment instructions looks professional. Problems come from mixing templates, cluttered layouts or missing information, not from the price of the tool.",
      },
      {
        q: "Where should payment terms appear on an invoice?",
        a: "Put the due date as a calendar date next to the amount due, then repeat the terms, such as Net 14, in the payment block or footer with your bank details and any late-payment terms. Keeping terms close to the total means the approver sees what to pay and when in one glance, without reading the small print.",
      },
      {
        q: "How do I make an invoice accessible?",
        a: "Use real text rather than an image of text, so screen readers and search tools can read it. Keep strong contrast: accessibility guidelines recommend at least 4.5:1 for normal text. Avoid relying on color alone to show status, use readable font sizes, and label sections clearly. Accessible invoices are also easier for automated accounts-payable tools to scan.",
      },
      {
        q: "Should I add a thank-you message to my invoice?",
        a: "A short thank-you line in the notes or footer is a nice touch and costs no space. Keep it to one sentence, such as \"Thank you for your business\", and place it below the payment details, not above the total. It should never push key information like bank details or the due date onto a second page.",
      },
      {
        q: "How should I mark an invoice as paid?",
        a: "Keep the original invoice unchanged and record the payment date and method in your tracker. If the client wants proof, send a receipt or a copy of the invoice showing the amount paid and a zero balance due, clearly labeled as paid. Avoid large decorative paid stamps that cover numbers, because they can make copies hard to read.",
      },
      {
        q: "Can I customize templates in the free invoice generator?",
        a: "Yes. You can choose from the generator's templates, upload your logo and signature, pick one of eight currencies, and add tax, discount, shipping and notes. The layouts already follow the hierarchy principles in this guide, so the amount due and payment details stay prominent. Download a test PDF and review it on screen and in print before sending.",
      },
    ],
    content: `
<h2>Design for approval speed, not decoration</h2>
<p>An invoice has one job: get understood and paid. Visual design should accelerate that job. When hierarchy is clear, accounts payable finds the amount, due date, PO, and bank details in seconds. When hierarchy is muddy, your brand look becomes expensive noise.</p>
<p>The fifteen tips below are practical rules you can apply in any template, including those in our <a href="/invoice-templates">invoice templates</a> gallery. If you are still deciding on a layout, start with <a href="/blog/choose-invoice-template-by-client">how to choose an invoice template based on who pays you</a>.</p>

<h2>Hierarchy first</h2>
<ol>
<li><strong>Make the amount due the largest number on the page.</strong> If the logo is bigger than the total, reverse the priority.</li>
<li><strong>Put the due date directly beside or beneath the amount due.</strong> Approvers should not hunt through paragraphs for timing.</li>
<li><strong>Keep the invoice number top-right (or another consistent corner)</strong> where AP teams look first when filing and searching.</li>
<li><strong>Limit yourself to two type sizes for body content.</strong> Extra sizes feel "designed" but slow scanning.</li>
<li><strong>Right-align every numeric column.</strong> Misaligned totals undermine trust in the maths.</li>
</ol>

<h2>Colour and brand</h2>
<ol start="6">
<li><strong>Use one accent colour</strong>, applied to the header bar and totals emphasis only, not to every label.</li>
<li><strong>Ensure text stays legible when printed in greyscale.</strong> Many offices still print; light grey on white fails.</li>
<li><strong>Keep the logo modest (often under ~60px tall in the PDF).</strong> It identifies you; it is not the hero.</li>
<li><strong>Avoid background images behind text.</strong> Watermarks and photos reduce contrast and compress poorly.</li>
<li><strong>Test contrast deliberately.</strong> Soft grey body text may look elegant on a retina screen and unreadable on a projector or cheap laser print.</li>
</ol>

<h2>Layout and tables</h2>
<ol start="11">
<li><strong>Give the item table room to breathe</strong> with comfortable row padding (around 10–12px equivalent). Cramped rows cause skipped lines.</li>
<li><strong>Use subtle row separators instead of heavy grid borders.</strong> Thick boxes add visual weight without adding information.</li>
<li><strong>Keep payment instructions in a bordered or clearly separated block</strong> so they are scannable even on page two.</li>
<li><strong>Never let a table split awkwardly across pages.</strong> Keep a totals block with at least two line items, or force an earlier page break.</li>
<li><strong>Leave a signature area only if clients actually require one.</strong> Empty signature blocks make documents look unfinished and waste space.</li>
</ol>

<h2>Typography details that matter</h2>
<p>Choose a clean sans or a restrained serif and stick to it. Avoid novelty fonts for legal business names and bank details. Use tabular lining figures for money columns so digits align vertically. Keep line length for notes moderate. Long paragraphs at the bottom get skipped.</p>
<p>Bold sparingly: client name, amount due, and section labels. If everything is bold, nothing is.</p>

<h2>Mobile and PDF preview reality</h2>
<p>Many clients first see your invoice as an email thumbnail or on a phone screen. High-contrast headers (as in <a href="/invoice-templates/dark">Dark</a> or <a href="/invoice-templates/creative">Creative</a>) can help recognition, but the body must still work in black-and-white print. Open your PDF at 50% zoom: can you still spot total, due date, and invoice number?</p>

<h2>Matching layout to audience</h2>
<table><thead><tr><th>Audience</th><th>Design emphasis</th><th>Starting template</th></tr></thead><tbody>
<tr><td>Enterprise AP</td><td>Reference fields, quiet chrome</td><td><a href="/invoice-templates/corporate">Corporate</a></td></tr>
<tr><td>Creatives</td><td>Typography, whitespace</td><td><a href="/invoice-templates/minimal">Minimal</a> / <a href="/invoice-templates/creative">Creative</a></td></tr>
<tr><td>Premium services</td><td>Restrained serif, margins</td><td><a href="/invoice-templates/elegant">Elegant</a></td></tr>
<tr><td>General small business</td><td>Familiar, trustworthy</td><td><a href="/invoice-templates/modern">Modern</a> / <a href="/invoice-templates/blue">Blue</a></td></tr>
</tbody></table>
<p>More selection help sits in <a href="/blog/best-invoice-templates">the 10 best invoice templates</a>.</p>

<h2>Content design is still design</h2>
<p>Visual polish cannot save vague line items or missing bank details. Pair these tips with solid content habits from <a href="/blog/how-to-create-an-invoice">how to create an invoice</a> and avoid the traps in <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>. Clarity of words and clarity of layout reinforce each other.</p>

<h2>A simple self-test before you send</h2>
<ul>
<li>Cover the page with your hand, then reveal only the top third. Can you name the supplier, invoice number, and client?</li>
<li>Reveal the totals. Is the amount due obvious within a second?</li>
<li>Reveal the footer. Can you pay without scrolling back up for missing IBAN digits?</li>
</ul>
<p>If any answer is no, adjust hierarchy before you adjust decoration.</p>


<h2>Whitespace is a feature</h2>
<p>Crowding every edge with stamps, badges, and social icons makes the amount due harder to find. Leave margins that survive printer edge loss. Separate sections with space and light rules rather than boxes inside boxes. If removing a decorative element does not reduce clarity, remove it.</p>
<p>Clients equate visual calm with administrative competence. Busy invoices feel risky even when the numbers are correct, an unfair bias you can use in your favour by simplifying.</p>
<h2>Localisation and long text</h2>
<p>If you invoice in multiple languages or with long legal entity names, test the template with worst-case strings. Fixed-height header boxes that clip text look careless. Prefer layouts that wrap gracefully, such as <a href="/invoice-templates/modern">Modern</a> or <a href="/invoice-templates/corporate">Corporate</a>.</p>
<p>Currency symbols and three-letter codes should be consistent. Mixing "$" without clarifying USD versus AUD is a design defect as much as a content defect.</p>
<h2>Iterate with a real AP reader</h2>
<p>Ask one friendly client finance contact what they look at first and what annoys them. You will learn more in ten minutes than from a month of solitary tweaking. Then lock the template and resist seasonal redesigns that force AP to relearn your layout.</p>
<p>Good invoice design is boring on purpose. Boring gets paid.</p>

<h2>Icons, QR codes, and payment links</h2>
<p>A single payment-link QR code near the payment block can help consumer and small-business payers. Keep it secondary to readable bank details for clients who cannot scan. Do not scatter multiple QR codes or app-store badges across the page. They compete with the total and look promotional rather than financial.</p>
<p>If a link is present, also print the URL in plain text for accessibility and printouts.</p>
<h2>Apply the principles in minutes</h2>
<p>These design principles are baked into our <a href="/invoice-templates">18 invoice templates</a>. Create your next document with the <a href="/invoice-generator">free invoice generator</a>, pick a layout that fits your buyer, and let structure, not ornament, carry the payment request.</p>
`,
  },
  {
    slug: "choose-invoice-template-by-client",
    title: "How to Choose an Invoice Template Based on Who Pays You",
    description:
      "Match invoice layout to the buyer: freelancers, enterprise AP, hospitality, legal and consumers. A practical decision guide with examples, not a generic template list.",
    category: "design-templates",
    date: "2026-10-19",
    author: "Invoice Creator Editorial Team",
    faqs: [
      {
        q: "Can I use different invoice templates for different clients?",
        a: "Yes, as long as each client sees the same template every time. Many businesses use a formal layout for corporate buyers and a lighter one for creative or consumer clients. Keep one numbering sequence across all templates and the same seller details, so your records stay consistent. Switching layouts for the same client is what causes confusion.",
      },
      {
        q: "Which invoice template is best for a new freelancer?",
        a: "A simple, clean layout like Minimal or Modern is a safe start. It looks professional, prints well and suits most clients, from small businesses to agencies. Focus first on clear line items, payment details and a visible due date. You can move to a more formal template later if you start billing enterprise clients that need PO and tax fields.",
      },
      {
        q: "Does the template I choose affect whether my invoice is legally valid?",
        a: "Generally no. Legal and tax requirements depend on what the invoice contains, such as names, numbers, dates, amounts and any required tax details, not on colors or layout. A plain template with every required field is better than a stylish one missing a tax number. If your country requires structured e-invoices, a visual template alone does not meet that rule.",
      },
      {
        q: "What invoice template suits government or public-sector clients?",
        a: "Choose a conservative, formal layout with plenty of room for reference fields, such as contract numbers, purchase orders and cost centers. Public bodies often have strict supplier rules and may require invoices through a specific portal or as structured e-invoices, especially in parts of Europe. Read the buyer's supplier guidance before your first invoice and match it exactly.",
      },
      {
        q: "What should an invoice for homeowners or consumers look like?",
        a: "Keep it friendly and plain: your business name and contact details, the job address, an itemized list of work and materials, and the total clearly marked. Consumers appreciate simple wording instead of accounting terms, clear payment options and any warranty notes. A familiar layout such as Blue or Modern works well and prints cleanly for household records.",
      },
      {
        q: "Should I use a dark-background invoice template?",
        a: "Dark templates can look striking on screen and suit tech or creative brands, but they use a lot of ink and can print poorly or become hard to read when scanned. If clients are likely to print your invoices, choose a light body with a dark header instead. Always test a grayscale print before using a dark design.",
      },
      {
        q: "Which template works best for international clients?",
        a: "Pick a layout with room for long addresses, tax IDs, currency codes and full bank details such as IBAN and SWIFT. Clean, structured templates like Corporate or Modern handle long text better than decorative ones. Show the currency code beside totals, and test the template with the longest company name and address you expect to use.",
      },
      {
        q: "How do I find out what invoice format a client prefers?",
        a: "Ask at kickoff. Many larger companies send a supplier onboarding pack listing invoice requirements, such as PO placement, tax details, file format and the accounts-payable email or portal. For smaller clients, ask your contact who approves invoices and what they need to see. One short question can save weeks of rejected invoices.",
      },
      {
        q: "Should my invoice template match my quotes and proposals?",
        a: "Yes. Using the same fonts, colors and logo on proposals, quotes and invoices makes your documents instantly recognizable and helps clients connect each invoice to the work they approved. Matching structure also helps: if the quote lists deliverables in a certain order, the invoice should follow it, which makes approval faster.",
      },
      {
        q: "How do I switch invoice templates without confusing clients?",
        a: "Change templates at a natural break, such as a new financial year or a new contract, and keep your invoice numbering sequence going. Keep your legal name, bank details and reference fields exactly the same. For regular clients, a one-line note saying your invoices have a new look reassures their accounts team that the invoice is genuine.",
      },
    ],
    content: `
<p>Most “best template” articles rank designs by colour. Buyers do not. Accounts payable, homeowners and brand clients each scan a PDF differently. Choosing a template by <em>who pays you</em> cuts revision emails and speeds approval.</p>

<h2>Start with the reader, not your brand palette</h2>
<p>Ask one question: will a stranger in accounts payable approve this, or will a founder who already knows your work? AP wants reference fields and quiet layout. Creative clients tolerate more personality if the total is still obvious within a second.</p>

<h2>Buyer type → layout bias</h2>
<table><thead><tr><th>Who pays</th><th>What they scan first</th><th>Template bias</th></tr></thead><tbody>
<tr><td>Enterprise / procurement</td><td>PO, legal names, tax IDs</td><td><a href="/invoice-templates/corporate">Corporate</a>, <a href="/invoice-templates/slate">Slate</a></td></tr>
<tr><td>SMB / trades clients</td><td>Familiar header, job address</td><td><a href="/invoice-templates/blue">Blue</a>, <a href="/invoice-templates/modern">Modern</a></td></tr>
<tr><td>Design-led brands</td><td>Typography, whitespace</td><td><a href="/invoice-templates/minimal">Minimal</a>, <a href="/invoice-templates/nordic">Nordic</a></td></tr>
<tr><td>Hospitality / events</td><td>Warmth + confirmation numbers</td><td><a href="/invoice-templates/sunset">Sunset</a>, <a href="/invoice-templates/elegant">Elegant</a></td></tr>
<tr><td>Tech / engineering</td><td>Contrast, ticket references</td><td><a href="/invoice-templates/mono">Mono</a>, <a href="/invoice-templates/dark">Dark</a></td></tr>
</tbody></table>

<h2>A five-minute selection test</h2>
<ol>
<li>Export a sample PDF with your real legal name and a long client name.</li>
<li>Print or view greyscale. Does the total still dominate?</li>
<li>Cover everything except the top third. Can you name supplier, number and buyer?</li>
<li>Ask: would this look odd next to the proposals you already send?</li>
</ol>
<p>If step 3 fails, change hierarchy before you change accent colour.</p>

<h2>When to keep one template forever</h2>
<p>Consistency helps returning clients recognise your documents. Switch templates only when the <em>buyer type</em> changes (for example, you start billing enterprises that require PO blocks). Seasonal redesigns force AP to relearn your layout for no gain.</p>

<h2>Apply the choice</h2>
<p>Browse the full <a href="/invoice-templates">template library</a>, open your pick in the <a href="/invoice-generator">generator</a>, and fill a real scenario from that template’s detail page. For visual polish after structure is right, read <a href="/blog/professional-invoice-design-tips">professional invoice design tips</a>.</p>
`,
  },
  {
    slug: "invoice-pdf-print-checklist",
    title: "Invoice PDF Print Checklist: What Breaks on Paper (and How to Fix It)",
    description:
      "A practical checklist for invoice PDFs that must survive printers, scanners and greyscale: margins, colour, logos, totals and payment details.",
    category: "design-templates",
    date: "2026-10-19",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-signature"],
    faqs: [
      {
        q: "Should invoices be A4 or US Letter size?",
        a: "Use the paper size your clients use. A4 (210 × 297 mm) is standard in most of the world, while US Letter (8.5 × 11 inches) is standard in the US and Canada. The sizes differ slightly, so a layout designed for one can clip or shrink on the other. Keep generous margins if clients may print on either size.",
      },
      {
        q: "Why does my invoice print with edges cut off?",
        a: "Most printers cannot print right to the edge of the page, so content placed in the outer few millimeters can be clipped. Printing at a different paper size than the PDF was designed for also causes cropping. Keep important details away from the edges, and in the print dialog, try Fit to page or confirm the paper size matches.",
      },
      {
        q: "What resolution should my logo be for a printed invoice?",
        a: "A common print guideline is around 300 pixels per inch at the size the logo appears. For example, a logo printed about 1 inch wide works best at roughly 300 pixels wide or more. Use a transparent PNG or a simple, high-contrast version of your logo, and avoid tiny images that will look blurry when stretched.",
      },
      {
        q: "Why do colors on my printed invoice look different from the screen?",
        a: "Screens display color with light (RGB), while printers mix ink or toner (CMYK), so bright on-screen colors often print duller or darker. Office printers also vary widely. Do not rely on precise color shades to communicate information. Choose an accent color that still looks acceptable when printed, and make sure everything important reads clearly in black and white.",
      },
      {
        q: "Should fonts be embedded in my invoice PDF?",
        a: "Yes. Embedded fonts make the PDF look the same on every computer and printer, even if the recipient does not have your font installed. Without embedding, the viewer may substitute a different font, which can shift text, break alignment or change how numbers look. Most good PDF generators embed fonts automatically, but check if text looks wrong.",
      },
      {
        q: "What is PDF/A and do I need it for invoices?",
        a: "PDF/A is an ISO standard version of PDF designed for long-term archiving, with fonts and other resources embedded so the file stays readable for years. It is not usually required for sending ordinary invoices, but some organizations and archiving systems prefer or require it. If you keep invoices for many years, saving archive copies as PDF/A can help.",
      },
      {
        q: "Will a client's scanning software read my printed invoice correctly?",
        a: "It is more likely to if you use plain fonts, strong contrast, clear labels like \"Invoice number\" and \"Total due\", and avoid text over images or colored backgrounds. Many accounts teams use text recognition to capture invoice data from scans. Print a test copy, scan or photograph it, and check whether every number is still easy to read.",
      },
      {
        q: "Should a printed invoice include page numbers?",
        a: "Yes, if the invoice runs longer than one page. Use \"Page 1 of 2\" so readers know if a page is missing, and repeat the invoice number and client name on every page. Keep the totals and payment details together on the final page. A single-page invoice does not need page numbers.",
      },
      {
        q: "What should I include when mailing a printed invoice?",
        a: "Send the printed invoice with a tear-off remittance slip or a note asking the client to quote the invoice number with payment. Include your return address and any payment instructions they need for check or bank transfer. Keep the PDF version on file, record the mailing date, and allow time for postal delivery before the due date.",
      },
      {
        q: "How do I test-print an invoice from the free invoice generator?",
        a: "Fill in your invoice, download the PDF, then open it in your PDF viewer and print it at actual size on your usual paper. Check margins, logo sharpness, totals and bank details in black and white. If anything looks wrong, adjust the template or logo in the generator, download again, and repeat before sending to a client.",
      },
    ],
    content: `
<p>Screen-perfect invoices often fail on paper: clipped logos, grey-on-grey totals, payment IBANs that wrap mid-digit. If any of your clients still print or scan, run this checklist before you send.</p>

<h2>1. Margins and clip risk</h2>
<p>Keep critical content inside a safe margin. Consumer printers crop edges. Put invoice number, totals and bank details away from the extreme footer edge. Our templates target A4 with print-safe spacing. Do not shrink margins to “fit more branding.”</p>

<h2>2. Greyscale legibility</h2>
<p>Print once in black and white. Accent bars should not be the only cue for hierarchy. Amount due must remain the darkest, largest number on the page. Neon or pastel text that looks fine on OLED often disappears on office printers.</p>

<h2>3. Logo resolution</h2>
<p>Upload a transparent PNG at useful resolution. A 200px-wide logo stretched across a header looks unprofessional on paper. If the logo is complex, prefer a simplified mark for invoices.</p>

<h2>4. Tables that survive photocopying</h2>
<p>Hairline rules can vanish when scanned. Ensure quantity, rate and amount columns remain aligned after a phone-photo of the printout. Avoid placing important numbers only in coloured chips.</p>

<h2>5. Payment block completeness</h2>
<p>Bank name, account name, IBAN/account number and payment reference should be readable without zoom. If you add a QR code, also print the URL or account digits, as scanners are not universal.</p>

<h2>6. Long legal names</h2>
<p>Test with worst-case strings (long LLC names, bilingual addresses). Fixed-height boxes that clip text look careless. Templates like <a href="/invoice-templates/corporate">Corporate</a> and <a href="/invoice-templates/modern">Modern</a> wrap more gracefully than decorative stacked headers when names are long.</p>

<h2>Quick pass / fail</h2>
<ul>
<li>Pass: someone can pay from a paper copy alone.</li>
<li>Fail: they must open the email again to find the IBAN or total.</li>
</ul>
<p>Generate a test PDF in the <a href="/invoice-generator">invoice generator</a>, print it, and only then send to a real client. Design tips that complement this checklist live in <a href="/blog/professional-invoice-design-tips">15 professional invoice design tips</a>.</p>
`,
  },
];

export const POST_DRAFTS: PostDraft[] = [
  ...CORE_POSTS,
  ...INDUSTRY_POSTS_A,
  ...INDUSTRY_POSTS_B,
  ...HOW_TO_POSTS_A,
  ...HOW_TO_POSTS_B,
  ...FREELANCING_POSTS,
  ...PAYMENTS_POSTS,
  ...TAX_POSTS,
  ...COMPARISON_FINANCE_POSTS,
  ...EINVOICING_POSTS,
  ...FORMAT_TEMPLATE_POSTS,
  ...PLATFORM_SOFTWARE_POSTS,
  ...INDUSTRY_POSTS_C,
  ...FINANCE_ADVANCED_POSTS,
  ...TAX_US_UK_2026_POSTS,
  ...TAX_ASIA_2026_POSTS,
  ...EINVOICING_2027_POSTS,
  ...PAYMENTS_2026_POSTS,
  ...FREELANCING_2026_POSTS,
  ...FINANCE_2026_POSTS,
  ...BASICS_2026_POSTS,
  ...GUIDES_2026_POSTS,
  ...DESIGN_INDUSTRY_2026_POSTS,
  ...AP_AUTOMATION_2026_POSTS,
  ...FINANCE_TRENDS_2027_POSTS,
  ...TAX_COMPLIANCE_2026_POSTS,
  ...INDUSTRY_POSTS_D,
  ...FINANCE_METRICS_2026_POSTS,
  ...RECEIVABLES_2026_POSTS,
  ...PROCUREMENT_TRADE_2026_POSTS,
  ...INDUSTRY_POSTS_E,
  ...FREELANCE_CREATIVE_2026_POSTS,
  ...TAX_COUNTRIES_2026_POSTS,
  ...TEMPLATES_2026_POSTS,
  ...BASICS_COMPARISONS_2026_POSTS,
  ...SMALL_BUSINESS_FINANCE_2026_POSTS,
  ...PAYMENTS_GUIDES_2026_POSTS,
  ...TAX_US_UK_2026_B_POSTS,
  ...TAX_ASIA_ME_2026_POSTS,
  ...FREELANCING_GROWTH_2026_POSTS,
  ...INDUSTRY_POSTS_F,
  ...TEMPLATES_BASICS_2026_B_POSTS,
  ...COMPARISONS_2026_B_POSTS,
  ...COMPARISONS_2026_C_POSTS,
  ...ACCOUNTING_BASICS_2026_POSTS,
  ...BUSINESS_GROWTH_2026_POSTS,
  ...TAX_FILING_2026_POSTS,
  ...TAX_PK_IN_2026_POSTS,
  ...PAYMENTS_FREELANCE_2026_B_POSTS,
  ...INDUSTRY_POSTS_G,
];

/** Reading time is derived from content length so it cannot drift from the article. */
export const POSTS: Post[] = POST_DRAFTS.map((p) => ({
  ...p,
  readingTime: estimateReadingTime(p.content),
}));

/** Blog index order: newest first; posts sharing a date keep their authored order. */
export const POSTS_BY_DATE: Post[] = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

export const BLOG_PAGE_SIZE = 12;
export const BLOG_PAGE_COUNT = Math.ceil(POSTS.length / BLOG_PAGE_SIZE);
export const blogPageHref = (page: number) => (page <= 1 ? "/blog" : `/blog/page/${page}`);
export const blogPagePosts = (page: number) =>
  POSTS_BY_DATE.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE);

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const relatedPosts = (post: Post, limit = 3) => {
  const picked = (post.related ?? [])
    .map((slug) => getPost(slug))
    .filter((p): p is Post => !!p && p.slug !== post.slug);
  const fallback = POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category && !picked.includes(p),
  );
  return [...picked, ...fallback].slice(0, limit);
};
