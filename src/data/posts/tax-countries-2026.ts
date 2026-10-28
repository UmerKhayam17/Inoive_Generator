import type { PostDraft } from "../blog";

export const TAX_COUNTRIES_2026_POSTS: PostDraft[] = [
  {
    slug: "canada-gst-hst-invoice-requirements",
    title: "Canada GST/HST Invoice Requirements: What to Include",
    description:
      "Canada GST/HST invoice requirements explained: the CRA $100 and $500 tiers, your business number, provincial HST rates, QST and a sample invoice with tax math.",
    category: "tax-compliance",
    jurisdiction: "Canada",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-requirements-by-country", "gst-invoice-guide", "sales-tax-vs-vat-vs-gst"],
    faqs: [
      {
        q: "What must a GST/HST invoice show in Canada?",
        a: "It depends on the total. Under $100, show your business or trading name, the invoice date and the total. From $100 to $499.99, also show your GST/HST registration number and the tax charged, either as a separate amount or a statement that tax is included with the rate. At $500 or more, also add the buyer's name, the payment terms and a description of each supply. Those details let your customer claim input tax credits.",
      },
      {
        q: "Does Canada require invoices to be called a tax invoice?",
        a: 'No. Unlike Australia or South Africa, Canada does not require a specific title such as "tax invoice". The rules focus on the information your customer needs to support an input tax credit claim, not on the heading. Most businesses simply title the document "Invoice". What matters is that the required details for the invoice amount are present and correct, including your GST/HST registration number from $100 upward.',
      },
      {
        q: "What does a GST/HST registration number look like?",
        a: "It is your nine-digit business number followed by the letters RT and a four-digit reference, for example 123456789 RT0001. The RT part identifies the GST/HST program account. Show the full number, not just the nine digits. Customers and auditors can check a number using the CRA's GST/HST registry, so a typo can cause a buyer's input tax credit claim to be questioned or denied.",
      },
      {
        q: "Which HST rate do I charge on an invoice?",
        a: "Generally the rate for the province or territory where the supply is made under the place-of-supply rules, which usually follows the customer's location for services and the delivery address for goods. In 2026, HST is 13% in Ontario, 14% in Nova Scotia and 15% in New Brunswick, Newfoundland and Labrador, and Prince Edward Island. Other provinces and the territories use 5% GST. Check the CRA's current rate table before invoicing.",
      },
      {
        q: "Do I need to register if I earn less than $30,000?",
        a: "Usually not. If your taxable supplies, together with those of associated businesses, stay at $30,000 or less over four consecutive calendar quarters, you are generally a small supplier and registration is optional. Public service bodies have a $50,000 threshold, and taxi and ride-sharing drivers must register regardless. If you are not registered, do not charge GST/HST or show a registration number on your invoices.",
      },
      {
        q: "How do I invoice a customer in Quebec?",
        a: "Quebec does not use HST. You charge 5% GST plus the Quebec sales tax (QST) at 9.975% if you are registered for QST with Revenu Québec, which administers both taxes in the province. Show the two taxes as separate lines with both registration numbers so the customer can claim input tax credits and input tax refunds. Check Revenu Québec's rules for the exact details it expects.",
      },
      {
        q: "Can I invoice Canadian customers in US dollars?",
        a: "Yes, you can price and invoice in a foreign currency. GST/HST is still calculated on the value of the supply, and for reporting you convert amounts to Canadian dollars using a reasonable, consistent exchange rate. Many businesses show the tax in Canadian dollars as well to make the customer's input tax credit claim simpler. Keep a note of the rate and source you used with your records.",
      },
      {
        q: "How long do I keep GST/HST invoices in Canada?",
        a: "The general rule is six years from the end of the year the records relate to, in paper or electronic form, and you must be able to produce them if the CRA asks. Keep copies of the invoices you issue and the invoices you receive. Electronic records must be readable and kept in a format the CRA can access, so back up the PDF files you create.",
      },
      {
        q: "Is e-invoicing mandatory in Canada?",
        a: "Not as of October 2026. Canada has no general business-to-business e-invoicing mandate, and PDF invoices remain acceptable as long as they contain the required information. Some large buyers and government departments use their own supplier portals or electronic invoicing, and Canada has shown interest in Peppol, so check with your customers and watch for CRA announcements if you sell to government or large companies.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Canada GST/HST invoice requirements depend on the invoice total. Under $100, show your name, the date and the total. From $100, add your GST/HST registration number and the tax charged. At $500 or more, add the buyer's name, payment terms and a description of each supply. The provincial rate depends on where the supply is made.</p>

<p>Canada does not publish a single prescribed invoice template. Instead, the Canada Revenue Agency (CRA) sets out the information a registered buyer needs to claim input tax credits (ITCs) for the GST or HST they paid. If your invoice is missing those details, your customer may lose the credit, and that is usually when an accounts payable team sends your invoice back. This guide walks through the GST/HST invoice requirements tier by tier, explains which rate to charge in each province, and shows a worked example you can copy into our free <a href="/invoice-generator">online invoice generator</a>.</p>

<p>For a side-by-side view of Canada and other countries, see our <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a> guide. This article is general information, not tax advice. Rules and rates change, so confirm the details with the CRA or a Canadian accountant before relying on them.</p>

<h2>How GST and HST work in Canada</h2>
<p>Canada has a federal Goods and Services Tax (GST) of 5%. Five provinces have combined their provincial sales tax with the GST into a single Harmonized Sales Tax (HST), which the CRA administers. The other provinces either charge a separate provincial sales tax (PST) alongside the GST, or have no provincial sales tax at all. Quebec runs its own Quebec sales tax (QST), administered by Revenu Québec.</p>
<p>Like VAT in other countries, GST/HST is a value-added tax: registered businesses charge it on their sales and claim back the tax they pay on business purchases. That is why invoice details matter so much. Your invoice is the evidence your customer uses to claim its credit. If you are new to the terminology, our explainer on <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST</a> covers how the three systems differ.</p>

<h3>Current GST/HST rates by province</h3>
<p>These are the rates that apply in 2026. Always check the CRA's rate table, because provinces can change their portion.</p>
<table>
<thead><tr><th>Province or territory</th><th>Tax on the invoice</th><th>Combined rate</th></tr></thead>
<tbody>
<tr><td>Ontario</td><td>HST</td><td>13%</td></tr>
<tr><td>Nova Scotia</td><td>HST</td><td>14% (reduced from 15% on April 1, 2025)</td></tr>
<tr><td>New Brunswick, Newfoundland and Labrador, Prince Edward Island</td><td>HST</td><td>15%</td></tr>
<tr><td>Quebec</td><td>GST plus QST</td><td>5% + 9.975%</td></tr>
<tr><td>British Columbia, Saskatchewan, Manitoba</td><td>GST plus separate PST or RST</td><td>5% GST, plus provincial tax where it applies</td></tr>
<tr><td>Alberta, Yukon, Northwest Territories, Nunavut</td><td>GST only</td><td>5%</td></tr>
</tbody>
</table>
<p>The provincial sales taxes in British Columbia, Saskatchewan and Manitoba are separate systems with their own registration rules and their own tax numbers. They are not part of GST/HST, so treat them as additional lines on the invoice if you are registered to collect them.</p>

<h2>GST/HST invoice requirements by amount</h2>
<p>The details you must show are set by the Input Tax Credit Information (GST/HST) Regulations and scale with the total amount paid or payable. The thresholds were raised in 2021, so older guides that mention $30 and $150 tiers are out of date.</p>
<table>
<thead><tr><th>Invoice total</th><th>Information required</th></tr></thead>
<tbody>
<tr><td>Under $100</td><td>Your business name or trading name (or an intermediary's); the invoice date, or the date the tax was paid or payable if there is no invoice; the total amount paid or payable</td></tr>
<tr><td>$100 to $499.99</td><td>Everything above, plus your GST/HST registration number; the GST/HST charged, either as a separate amount or a statement that the total includes tax and the rate; where some items are taxable at different rates or exempt, which items are taxable</td></tr>
<tr><td>$500 or more</td><td>Everything above, plus the buyer's name or trading name (or their agent's); the terms of payment; a description of each supply sufficient to identify it</td></tr>
</tbody>
</table>
<p>The tiers describe the minimum. In practice, almost every business invoice should include all the $500 details anyway, because they cost nothing to add and they stop your customer from having to chase you. A clear description, a payment term and both parties' names are also basic good practice; our <a href="/blog/gst-invoice-guide">GST invoice guide</a> covers the fields that most GST systems share.</p>

<h3>Your GST/HST registration number</h3>
<p>Your registration number is your nine-digit business number (BN) followed by the program identifier RT and a four-digit reference number, for example 123456789 RT0001. Show the full 15-character number from the $100 tier upward. Buyers can check a number in the CRA's GST/HST registry, and an invalid number is one of the most common reasons an ITC claim is denied. Our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers where to place it and how other countries format theirs.</p>

<h3>Showing the tax: separate amount or tax-included statement</h3>
<p>The regulations let you either show GST/HST as a separate amount or state that the total includes GST/HST and show the rate. Most business-to-business invoices show it separately because buyers prefer to see the exact number they will claim. If you sell to consumers at tax-included prices, a statement such as "Total includes HST at 13%" works, but keep the line clear and unambiguous.</p>

<h2>Sample Canada GST/HST invoice with the tax math</h2>
<p>Here is a sample invoice from a Toronto web designer to a business customer in Ottawa. Both are in Ontario, so 13% HST applies. The total is over $500, so every tier's details are included.</p>
<table>
<thead><tr><th>Field</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Seller</td><td>Maple Pixel Studio, 100 King St W, Toronto, ON</td></tr>
<tr><td>GST/HST registration number</td><td>123456789 RT0001</td></tr>
<tr><td>Buyer</td><td>Rideau Outfitters Inc., Ottawa, ON</td></tr>
<tr><td>Invoice number and date</td><td>MPS-2026-0142, October 28, 2026</td></tr>
<tr><td>Payment terms</td><td>Net 30, due November 27, 2026</td></tr>
<tr><td>Line 1</td><td>Website redesign, 24 hours at $100.00 = $2,400.00</td></tr>
<tr><td>Line 2</td><td>Hosting setup and configuration, flat fee = $600.00</td></tr>
<tr><td>Subtotal</td><td>$3,000.00</td></tr>
<tr><td>HST at 13%</td><td>$3,000.00 x 0.13 = $390.00</td></tr>
<tr><td>Total due</td><td>$3,390.00 CAD</td></tr>
</tbody>
</table>
<p>If the same studio sold to a customer in Halifax, the place of supply would usually be Nova Scotia, so the tax would be $3,000.00 x 0.14 = $420.00 and the total $3,420.00. For a customer in Calgary, only 5% GST would apply: $150.00 tax and a $3,150.00 total. You can check figures like these with our <a href="/tools/sales-tax-calculator">sales tax calculator</a> before you send the invoice.</p>
<p>When a price already includes HST, work backward with the tax fraction. At 13%, the tax is 13/113 of the total, so a $1,130.00 tax-included price contains $130.00 of HST.</p>

<h2>Place-of-supply rules: which rate to charge</h2>
<p>The province you are in does not decide the rate on its own. Canada's place-of-supply rules decide where a supply is made, and you charge the rate for that province. A simplified view:</p>
<ul>
<li><strong>Tangible goods:</strong> generally the province where the goods are delivered or made available to the buyer.</li>
<li><strong>Services:</strong> generally the province of the buyer's address that you obtain in the ordinary course of business, with special rules for services tied to real property, events and some other categories.</li>
<li><strong>Intangible property, such as software licenses:</strong> generally based on where the property can be used, often linked to the buyer's address.</li>
</ul>
<p>That means a business in Alberta selling services to an Ontario customer may need to charge 13% HST, not 5% GST. Keep the customer's address on the invoice so the rate you charged is easy to support later.</p>

<h2>Quebec: GST plus QST</h2>
<p>Quebec is not an HST province. If you make taxable supplies in Quebec and are registered for the QST, you charge 5% GST and 9.975% QST. Revenu Québec administers both taxes for most businesses in the province, and Quebec has its own registration number for QST, typically a ten-digit number followed by TQ and a four-digit reference. Show both registration numbers and both tax amounts as separate lines so your customer can claim input tax credits for the GST and input tax refunds for the QST. The QST has its own information requirements, which broadly mirror the GST/HST tiers; check Revenu Québec's guidance for the exact rules.</p>

<h2>Small suppliers and registration</h2>
<p>You generally have to register for GST/HST once your worldwide taxable supplies, together with those of associated businesses, go over $30,000 in a single calendar quarter or over four consecutive calendar quarters. Below that, you are a small supplier and registration is optional. Public service bodies, such as charities, have a $50,000 threshold, and taxi and commercial ride-sharing drivers must register regardless of revenue.</p>
<p>If you are not registered, you cannot charge GST/HST and you should not show a registration number. Your invoices are still useful commercial documents, but they will not support an ITC claim. Some small suppliers register voluntarily because business customers prefer it and because it lets them claim back the tax on their own purchases. Non-resident sellers of digital services to Canadian consumers have a separate simplified registration system.</p>

<h2>Zero-rated, exempt and exported supplies</h2>
<p>Not every sale is taxed at the standard rate. Zero-rated supplies, such as basic groceries and most exports of goods and services, are taxable at 0%, so you charge no tax but can still claim ITCs on related costs. Exempt supplies, such as many residential rents and certain health and financial services, carry no GST/HST and do not allow ITCs. On an invoice with mixed items, make clear which lines are taxable, zero-rated or exempt. Our article on <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt supplies</a> explains the difference using VAT terminology that maps closely onto the Canadian system.</p>
<p>If you invoice clients outside Canada, our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers currency, payment and wording for exported services.</p>

<h2>Credit notes and corrections</h2>
<p>If you refund or reduce the price after issuing an invoice, issue a credit note that references the original invoice number, shows the reduction and the GST/HST adjustment, and includes the details the CRA expects for a credit note. Do not edit and resend the original invoice with the same number. Our <a href="/blog/credit-note-guide">credit note guide</a> explains the format step by step.</p>

<h2>Checklist: Canada GST/HST invoice</h2>
<ol>
<li>Unique, sequential invoice number and the invoice date.</li>
<li>Your legal or trading name and business address.</li>
<li>Your full GST/HST registration number, such as 123456789 RT0001, if you are registered.</li>
<li>The buyer's name and address.</li>
<li>A clear description of each item or service, with quantity and price.</li>
<li>The province-correct rate, with GST/HST shown as a separate amount or a clear tax-included statement.</li>
<li>Separate lines for QST or PST where you are registered for them, with their registration numbers.</li>
<li>Notes for zero-rated or exempt items.</li>
<li>Subtotal, tax and total, with the currency stated.</li>
<li>Payment terms, due date and how to pay.</li>
</ol>
<p>A clean layout makes these fields easier to spot. The <a href="/invoice-templates/minimal">minimal invoice template</a> gives each tax line its own row, which suits HST and GST-plus-QST invoices.</p>

<h2>Common mistakes on Canadian invoices</h2>
<ul>
<li><strong>Charging your own province's rate by default.</strong> The place-of-supply rules often point to the customer's province instead.</li>
<li><strong>Showing only the nine-digit business number.</strong> Buyers need the full RT program account number.</li>
<li><strong>Charging GST/HST before you are registered.</strong> If you are not registered, you cannot collect the tax.</li>
<li><strong>Combining GST and QST into one line.</strong> Quebec customers need to see each tax separately.</li>
<li><strong>Using outdated thresholds.</strong> The $30 and $150 tiers were replaced by $100 and $500.</li>
<li><strong>Reusing invoice numbers after a correction.</strong> Use a credit note and a new number; a consistent <a href="/blog/invoice-numbering-system">invoice numbering system</a> makes audits easier.</li>
<li><strong>Discarding records too early.</strong> Keep invoices for at least six years; our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> covers the rules by country.</li>
</ul>

<h2>E-invoicing in Canada</h2>
<p>As of October 2026, Canada has no general business-to-business e-invoicing mandate, and a PDF invoice that contains the required information remains acceptable. Some government departments and large companies require suppliers to submit invoices through their own portals or electronic systems, and Canada has explored Peppol for government procurement, so watch for official announcements if you sell to the public sector.</p>

<h2>Official sources</h2>
<p>For rates, registration and filing, start with the <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html" target="_blank" rel="noopener noreferrer">CRA's GST/HST for businesses pages</a>. The exact invoice information rules are in the <a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-91-45/" target="_blank" rel="noopener noreferrer">Input Tax Credit Information (GST/HST) Regulations</a> on the Justice Laws website. When you are ready, open the invoice generator, add your registration number and the correct provincial rate, and download a PDF in a few minutes.</p>
`,
  },
  {
    slug: "singapore-gst-tax-invoice",
    title: "Singapore GST Tax Invoice: Requirements and Format",
    description:
      "Singapore GST tax invoice rules for 2026: full vs simplified invoices, the 9% rate, required fields, a sample with GST math, and the InvoiceNow rollout dates.",
    category: "tax-compliance",
    jurisdiction: "Singapore",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "vietnam-e-invoice",
      "gst-invoice-guide",
      "what-is-peppol",
      "invoice-requirements-by-country",
    ],
    faqs: [
      {
        q: "What is the GST rate in Singapore in 2026?",
        a: "The standard GST rate is 9%, which has applied since January 1, 2024, after a two-step increase from 7% to 8% in 2023 and then 9%. Exports of goods and international services that qualify are zero-rated at 0%, and some supplies, such as certain financial services and residential property, are exempt. Always check the date of supply when you invoice across a rate change, because the rate follows the time of supply.",
      },
      {
        q: "Who can issue a Singapore GST tax invoice?",
        a: "Only a GST-registered business can issue a tax invoice and charge GST. Registration is generally compulsory once taxable turnover goes over S$1 million in a calendar year, or is expected to in the next 12 months, and voluntary registration is possible below that. If you are not registered, issue an ordinary invoice without GST and do not call it a tax invoice or show a GST registration number.",
      },
      {
        q: "What must a full tax invoice in Singapore show?",
        a: 'A full tax invoice shows the words "Tax Invoice", your name, address and GST registration number, an identifying invoice number, the invoice date, the customer\'s name and address, a description of the goods or services, any discount, the total amount payable excluding GST, the GST rate and GST amount, and the total including GST. Where items are taxed at different rates, show the amount for each rate.',
      },
      {
        q: "When can I use a simplified tax invoice in Singapore?",
        a: 'You may issue a simplified tax invoice when the total amount payable, including GST, is S$1,000 or less. It needs your name, address and GST registration number, the invoice date, an identifying number, a description of the supply, the total amount payable including GST, and the words "Price Payable includes GST". It does not need the customer\'s details or a separate GST amount.',
      },
      {
        q: "How soon must I issue a GST tax invoice?",
        a: "In general, a tax invoice must be issued within 30 days from the time of supply. You do not have to issue a tax invoice for zero-rated, exempt or deemed supplies, or for sales to customers who are not GST registered. Many businesses issue one for every business sale anyway, because GST-registered customers need it to claim input tax.",
      },
      {
        q: "Can a Singapore tax invoice be in a foreign currency?",
        a: "Yes, but if you invoice in a foreign currency, the GST amount and usually the total excluding GST must also be shown in Singapore dollars, converted at an exchange rate accepted by IRAS. Note the exchange rate on the invoice. That lets your customer claim the correct input tax and keeps your GST return figures consistent with your invoices.",
      },
      {
        q: "What is the GST InvoiceNow requirement?",
        a: "It requires GST-registered businesses to send invoice data to IRAS through an InvoiceNow-ready solution, built on the Peppol network. It applied first to newly incorporated companies that registered for GST voluntarily within six months of incorporation from November 1, 2025, and to all new voluntary registrants from April 1, 2026. IRAS has announced further phases; check its current timetable for your date.",
      },
      {
        q: "Does a PDF invoice meet the InvoiceNow requirement?",
        a: "No. If you are within scope, you must transmit invoice data to IRAS in the structured format through an InvoiceNow-ready solution or access point. A PDF made in a browser-based tool, such as ours, is fine as a human-readable copy for customers, but it does not by itself satisfy the InvoiceNow requirement. Businesses outside the current phases can keep issuing PDF tax invoices for now.",
      },
      {
        q: "How long must I keep GST records in Singapore?",
        a: "IRAS generally requires business and GST records, including tax invoices you issue and receive, to be kept for at least five years. They can be stored electronically as long as they are complete, readable and can be produced when IRAS asks. Keep the PDF copies you send to customers, along with any credit notes and the exchange rate records for foreign currency invoices.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A Singapore GST tax invoice must show the words "Tax Invoice", your name, address and GST registration number, an invoice number and date, the customer's details, a description, the amount before GST, the 9% GST and the total. For totals of S$1,000 or less, a simplified tax invoice is allowed.</p>

<p>Singapore's Goods and Services Tax (GST) is administered by the Inland Revenue Authority of Singapore (IRAS). For GST-registered businesses, the tax invoice is the key document: it is how you show the GST you charged, and it is what your GST-registered customers rely on to claim input tax. A missing GST registration number or an unclear GST amount can delay payment or cause a claim to be disallowed.</p>

<p>This guide covers who issues a Singapore GST tax invoice, the full and simplified formats, receipts, foreign currency invoices, a worked example, and the InvoiceNow e-invoicing rollout. For a comparison with other countries, see our <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a> overview. This is general information, not tax advice; confirm the details with IRAS or a qualified tax adviser.</p>

<h2>GST in Singapore at a glance</h2>
<ul>
<li><strong>Standard rate:</strong> 9% since January 1, 2024.</li>
<li><strong>Zero rate:</strong> 0% for qualifying exports of goods and international services.</li>
<li><strong>Exempt supplies:</strong> certain financial services, the sale and lease of residential property, and some precious metals for investment.</li>
<li><strong>Registration:</strong> generally compulsory once taxable turnover exceeds S$1 million in a calendar year, or is expected to in the next 12 months. Voluntary registration is allowed below that.</li>
<li><strong>Issuing deadline:</strong> a tax invoice is generally issued within 30 days of the time of supply.</li>
</ul>
<p>GST works like VAT: registered businesses charge it on sales and claim back the GST on business purchases. If you are comparing systems, our guide to <a href="/blog/gst-invoice-guide">GST invoices</a> explains how Singapore's rules sit alongside Australia, India and other GST countries.</p>

<h2>Who must issue a Singapore GST tax invoice</h2>
<p>Only a GST-registered business can issue a tax invoice and charge GST. If you are registered, you generally must issue a tax invoice to a GST-registered customer for a standard-rated supply. You do not need to issue one for zero-rated supplies, exempt supplies, deemed supplies, or sales to customers who are not GST registered, although you can still give those customers an ordinary invoice or a receipt.</p>
<p>If you are not GST registered, do not charge GST, do not show a GST registration number and do not title your document "Tax Invoice". A plain invoice from our free <a href="/invoice-generator">invoice generator</a> is fine in that case.</p>

<h2>Full vs simplified tax invoice: requirements table</h2>
<p>IRAS recognizes two formats. The simplified version is meant for smaller sales, where the total including GST is S$1,000 or less.</p>
<table>
<thead><tr><th>Detail</th><th>Full tax invoice</th><th>Simplified tax invoice (S$1,000 or less)</th></tr></thead>
<tbody>
<tr><td>The words "Tax Invoice"</td><td>Required</td><td>Not required</td></tr>
<tr><td>Supplier name, address and GST registration number</td><td>Required</td><td>Required</td></tr>
<tr><td>Invoice identifying number</td><td>Required</td><td>Required</td></tr>
<tr><td>Invoice date</td><td>Required</td><td>Required</td></tr>
<tr><td>Customer name and address</td><td>Required</td><td>Not required</td></tr>
<tr><td>Description of goods or services</td><td>Required</td><td>Required</td></tr>
<tr><td>Discount offered</td><td>Required where given</td><td>Not required</td></tr>
<tr><td>Total excluding GST</td><td>Required</td><td>Not required</td></tr>
<tr><td>GST rate and GST amount</td><td>Required (by rate, if mixed)</td><td>Not required</td></tr>
<tr><td>Total including GST</td><td>Required</td><td>Required</td></tr>
<tr><td>Statement that price includes GST</td><td>Not needed</td><td>Required, e.g. "Price Payable includes GST"</td></tr>
</tbody>
</table>
<p>The S$1,000 limit is measured on the GST-inclusive total. A sale priced at S$950 before GST becomes S$1,035.50 with 9% GST, so it needs a full tax invoice. For business clients who will claim input tax, a full invoice is the safer default even below S$1,000.</p>

<h3>Your GST registration number</h3>
<p>Singapore GST registration numbers are usually the same as the business's Unique Entity Number (UEN), or a separate number starting with M for some entities. Print it exactly as it appears on your registration letter. Customers can check it on the IRAS register of GST-registered businesses. Our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> shows where to place it in the header.</p>

<h2>Sample Singapore GST tax invoice with the GST math</h2>
<p>Here is a full tax invoice from a Singapore design agency to a GST-registered client.</p>
<table>
<thead><tr><th>Field</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Document title</td><td>Tax Invoice</td></tr>
<tr><td>Supplier</td><td>Harbour Line Design Pte. Ltd., 10 Anson Road, Singapore</td></tr>
<tr><td>GST registration number</td><td>201912345K</td></tr>
<tr><td>Customer</td><td>Orchid Retail Pte. Ltd., 1 Raffles Place, Singapore</td></tr>
<tr><td>Invoice number and date</td><td>HLD-2026-0318, 28 October 2026</td></tr>
<tr><td>Line 1</td><td>Brand identity design, fixed fee = S$4,000.00</td></tr>
<tr><td>Line 2</td><td>Packaging artwork, 10 hours at S$120.00 = S$1,200.00</td></tr>
<tr><td>Discount</td><td>Repeat-client discount = -S$200.00</td></tr>
<tr><td>Total excluding GST</td><td>S$5,000.00</td></tr>
<tr><td>GST at 9%</td><td>S$5,000.00 x 0.09 = S$450.00</td></tr>
<tr><td>Total including GST</td><td>S$5,450.00</td></tr>
<tr><td>Payment terms</td><td>30 days, PayNow or bank transfer</td></tr>
</tbody>
</table>
<p>When a price includes GST, use the tax fraction. At 9%, GST is 9/109 of the inclusive price, so a S$1,090.00 inclusive price contains S$90.00 of GST. Our <a href="/tools/sales-tax-calculator">sales tax calculator</a> handles both directions if you want to double-check.</p>

<h2>Time of supply and the 30-day rule</h2>
<p>The 30-day deadline runs from the time of supply, which for most standard-rated supplies is the earlier of the date you issue the invoice or the date you receive payment. That rule also decides which GST period the sale falls into. If a client pays a deposit before you invoice, the deposit generally triggers the time of supply for that amount, so issue a tax invoice for it promptly rather than waiting for the final bill.</p>
<p>For long projects, invoicing by milestone keeps GST reporting aligned with the documents your client holds. Agree the milestone dates in your contract, and give each stage its own invoice number so that your records reconcile cleanly against your GST return.</p>

<h2>Discounts, disbursements and mixed supplies</h2>
<p>Discounts given at the time of sale reduce the value on which GST is charged, so show the discount before calculating GST, as in the example above. If you pass on costs you paid on your client's behalf, such as government fees, check whether they are true disbursements, which can be billed without GST, or part of your own supply, which carries GST. Label them clearly either way.</p>
<p>Where one invoice mixes standard-rated, zero-rated and exempt items, show a separate total for each category and the GST for the standard-rated part only. That keeps the invoice easy for your client's accounts team to post and easy for you to defend in an IRAS review.</p>

<h2>Receipts and sales to non-registered customers</h2>
<p>For sales to customers who are not GST registered, such as consumers, you do not need to issue a tax invoice. Retailers commonly issue a receipt instead. A receipt for a GST-registered business generally shows your name, address and GST registration number, a receipt number and date, a description, the total payable including GST and a statement that the price includes GST. IRAS also allows a combined "Tax Invoice cum Receipt" in some cases. Check IRAS's current receipt rules, because the details differ slightly from a tax invoice.</p>
<p>Remember that GST-registered businesses must also display prices to consumers inclusive of GST. Your invoice should be consistent with the price you quoted.</p>

<h2>Foreign currency tax invoices</h2>
<p>You can invoice in US dollars, euros or another currency, but the GST amount and the total excluding GST should also be shown in Singapore dollars, converted using an exchange rate acceptable to IRAS, such as a published market rate. Note the rate and its date on the invoice. Our guide to <a href="/blog/foreign-currency-invoice">foreign currency invoices</a> shows a clean layout for dual-currency totals.</p>
<p>Services supplied to overseas customers may qualify for zero-rating as international services. In that case, show GST at 0% and keep evidence that the conditions are met. Our explainer on <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt supplies</a> covers the difference.</p>

<h2>Credit notes</h2>
<p>If you reduce a price or accept a return after issuing a tax invoice, issue a credit note that refers to the original invoice, shows the reduction in value and GST, and states the reason. Do not reissue the original invoice with changed figures. See our <a href="/blog/credit-note-guide">credit note guide</a> for a template.</p>

<h2>InvoiceNow: Singapore's e-invoicing requirement</h2>
<p>Singapore's national e-invoicing network, InvoiceNow, is built on Peppol, the same standard used in Australia, New Zealand and much of Europe. If you are new to it, read <a href="/blog/what-is-peppol">what Peppol is and how it works</a>. IRAS now uses InvoiceNow for GST: businesses in scope must send invoice data to IRAS through an InvoiceNow-ready solution.</p>
<table>
<thead><tr><th>Date</th><th>Who is in scope</th></tr></thead>
<tbody>
<tr><td>May 2025</td><td>Voluntary adoption opened for GST-registered businesses</td></tr>
<tr><td>November 1, 2025</td><td>Newly incorporated companies that register for GST voluntarily within six months of incorporation</td></tr>
<tr><td>April 1, 2026</td><td>All new voluntary GST registrants</td></tr>
<tr><td>From 2028 onward (announced)</td><td>New compulsory registrants and existing GST-registered businesses, in phases by annual supply size</td></tr>
</tbody>
</table>
<p>The later phases were announced in 2026, with IRAS saying it would notify existing registrants of their own implementation dates. Reported dates run from April 1, 2028 for smaller businesses to 2031 for the largest, but check the current IRAS timetable for your date rather than relying on summaries. Our overview of <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates for 2027</a> tracks how Singapore compares with other countries.</p>
<p>Our generator creates PDF invoices in your browser. It is not an InvoiceNow access point and does not transmit data to IRAS. If you are in scope, you will need an InvoiceNow-ready accounting system; the PDF can still serve as a readable copy for your customer.</p>

<h2>Checklist: Singapore GST tax invoice</h2>
<ol>
<li>Title the document "Tax Invoice" (only if you are GST registered).</li>
<li>Your name, address and GST registration number.</li>
<li>A unique invoice number and the invoice date, issued within 30 days of supply.</li>
<li>The customer's name and address (full tax invoice).</li>
<li>A description of each item, with quantity and unit price.</li>
<li>Any discount, shown before GST.</li>
<li>Total excluding GST, the GST rate, the GST amount and the total including GST.</li>
<li>Separate lines for zero-rated or exempt items.</li>
<li>Singapore dollar figures for GST if the invoice is in another currency.</li>
<li>Payment terms and instructions.</li>
<li>Your InvoiceNow status checked, if you registered for GST recently.</li>
</ol>
<p>The <a href="/invoice-templates/corporate">corporate invoice template</a> has room for a registration number in the header and a tax summary block, which suits full tax invoices.</p>

<h2>Common mistakes on Singapore tax invoices</h2>
<ul>
<li><strong>Charging GST before registration takes effect.</strong> Only registered businesses may charge GST.</li>
<li><strong>Using a simplified invoice above S$1,000.</strong> The limit includes GST.</li>
<li><strong>Leaving out the GST registration number.</strong> Customers cannot claim input tax without it.</li>
<li><strong>Showing GST only in a foreign currency.</strong> Show the GST amount in Singapore dollars too.</li>
<li><strong>Applying 9% to an export.</strong> Qualifying exports and international services are zero-rated.</li>
<li><strong>Assuming a PDF meets InvoiceNow.</strong> If you are in scope, data must go through an InvoiceNow-ready solution.</li>
<li><strong>Skipping invoice sequence checks.</strong> Gaps and duplicates raise questions; our <a href="/tools/invoice-number-generator">invoice number generator</a> helps keep numbers consistent.</li>
</ul>

<h2>Official sources</h2>
<p>IRAS's <a href="https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/basics-of-gst/invoicing-price-display-and-record-keeping/invoicing-customers" target="_blank" rel="noopener noreferrer">invoicing customers page</a> lists the full and simplified tax invoice details, and its <a href="https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/gst-invoicenow-requirement" target="_blank" rel="noopener noreferrer">GST InvoiceNow requirement page</a> sets out who is in scope and when. Check both before you change your invoicing process.</p>
`,
  },
  {
    slug: "south-africa-vat-invoice",
    title: "South Africa VAT Invoice Requirements: Full vs Abridged",
    description:
      "South Africa VAT invoice rules for 2026: full vs abridged tax invoices, the R5,000 and R50 thresholds, the 15% rate, SARS details and a sample with VAT math.",
    category: "tax-compliance",
    jurisdiction: "South Africa",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["vat-invoice-guide", "tax-invoice-guide", "zero-rated-vs-exempt-vat"],
    faqs: [
      {
        q: "What is the VAT rate in South Africa in 2026?",
        a: "The standard VAT rate is 15%. The 2025 budget proposed increasing it to 15.5% and then 16%, but those increases were withdrawn in 2025, and the 2026 budget kept the rate at 15%. Exports and some basic foods are zero-rated, and some supplies, such as residential rent and certain financial services, are exempt. Check SARS for any later announcement before relying on the rate.",
      },
      {
        q: "When do I need a full tax invoice in South Africa?",
        a: 'A full tax invoice is required when the consideration for the supply, including VAT, is more than R5,000. It must show the words "tax invoice", your name, address and VAT number, the recipient\'s name, address and VAT number if registered, an invoice number and date, a full description, the quantity or volume, the value and the VAT charged, or a statement that VAT is included at the current rate.',
      },
      {
        q: "What is an abridged tax invoice?",
        a: 'An abridged tax invoice is a shorter version you may issue when the consideration is R5,000 or less. It needs the words "tax invoice", your name, address and VAT number, an invoice number and date, a description of the goods or services, and the value and VAT, or a statement that VAT is included at the rate. It does not need the recipient\'s details or quantities.',
      },
      {
        q: "Do I need a tax invoice for sales under R50?",
        a: "No tax invoice is required where the consideration is R50 or less. Your customer can still claim input tax using another document, such as a till slip, that shows the supplier's details and the amount. In practice, most point-of-sale systems print a slip with enough information for the buyer's records, but there is no obligation to issue a formal tax invoice for these small sales.",
      },
      {
        q: "How quickly must a VAT invoice be issued?",
        a: 'A VAT vendor must issue a tax invoice within 21 days of the date of supply. The rule applies to taxable supplies made to a recipient. Only one original tax invoice may be issued per supply; if the customer loses it, you issue a copy clearly marked "copy" rather than a second original. Build the 21-day limit into your billing routine, especially for project work.',
      },
      {
        q: "Who must register for VAT in South Africa?",
        a: "For years, registration was compulsory once taxable supplies exceeded R1 million in any 12-month period. The 2026 budget announced an increase in the compulsory threshold to R2.3 million and the voluntary threshold to R120,000 from April 1, 2026. Confirm with SARS whether the change has been enacted and applies to you. Only registered vendors may charge VAT and issue tax invoices.",
      },
      {
        q: "Can a South African tax invoice be in a foreign currency?",
        a: "Yes, an invoice can be issued in a foreign currency, which is common for exports. For VAT reporting, amounts are converted to rand, and showing the rand value of VAT helps your customer claim input tax where VAT is charged. Exports of goods and many services to non-residents are zero-rated, so the VAT line would show 0%. Check SARS's rules on exchange rates and export documentation.",
      },
      {
        q: "Is e-invoicing mandatory in South Africa?",
        a: "Not yet as of October 2026. SARS and National Treasury are working on VAT modernization, including e-invoicing and near-real-time reporting, and 2025 draft legislation introduced definitions for e-invoicing and e-reporting. Reports point to a Peppol-based model phased in over several years. No B2B mandate applies today, so a properly prepared PDF tax invoice still meets the rules. Watch SARS for confirmed dates.",
      },
      {
        q: "How long should I keep VAT invoices in South Africa?",
        a: "Generally five years from the date the return was submitted, under the Tax Administration Act, and longer if an audit, objection or appeal is underway. Keep copies of the tax invoices you issue, the tax invoices you receive, credit and debit notes, and supporting records. Electronic storage is allowed if the records are complete, readable and available to SARS on request.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A South Africa VAT invoice, called a tax invoice, must be issued within 21 days. Above R5,000 you need a full tax invoice with both parties' details, VAT numbers, quantities and the 15% VAT. At R5,000 or less an abridged tax invoice is enough, and below R50 none is required.</p>

<p>South Africa's VAT system is run by the South African Revenue Service (SARS). The VAT Act sets out exactly what a tax invoice must contain, and SARS takes those rules seriously: a buyer cannot deduct input tax without a valid tax invoice, and SARS commonly disallows claims backed by invoices with missing details. Getting the format right protects your customers' claims and keeps your own records audit-ready.</p>

<p>This guide covers the full and abridged formats, the thresholds, registration, a sample South Africa VAT invoice with the arithmetic, credit and debit notes, and the country's e-invoicing plans. For other countries, see our <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a> guide. This is general information, not tax advice; confirm the details with SARS or a registered tax practitioner.</p>

<h2>VAT in South Africa: the basics for 2026</h2>
<ul>
<li><strong>Standard rate:</strong> 15%. Proposed increases to 15.5% and 16% were withdrawn in 2025, and the 2026 budget left the rate unchanged.</li>
<li><strong>Zero rate:</strong> 0% for exports and certain basic foodstuffs, among other supplies.</li>
<li><strong>Exempt supplies:</strong> including residential accommodation, certain financial services and public transport by road and rail.</li>
<li><strong>Tax invoice deadline:</strong> within 21 days of the date of supply.</li>
<li><strong>Registration:</strong> long set at R1 million of taxable supplies in 12 months; the 2026 budget announced an increase to R2.3 million from April 1, 2026, which you should confirm with SARS.</li>
</ul>
<p>VAT-registered businesses are called vendors. Only a vendor may charge VAT and issue a tax invoice. If you are not registered, issue an ordinary invoice without VAT and do not call it a tax invoice. Our general <a href="/blog/vat-invoice-guide">VAT invoice guide</a> explains how VAT invoices work across countries.</p>

<h2>South Africa VAT invoice requirements: full vs abridged</h2>
<p>The VAT Act sets three bands based on the consideration for the supply, which includes VAT.</p>
<table>
<thead><tr><th>Detail</th><th>Full tax invoice (over R5,000)</th><th>Abridged tax invoice (R5,000 or less)</th></tr></thead>
<tbody>
<tr><td>The words "tax invoice" in a prominent place</td><td>Required</td><td>Required</td></tr>
<tr><td>Supplier name, address and VAT registration number</td><td>Required</td><td>Required</td></tr>
<tr><td>Recipient name and address</td><td>Required</td><td>Not required</td></tr>
<tr><td>Recipient VAT number, where registered</td><td>Required</td><td>Not required</td></tr>
<tr><td>Individual serial number and date of issue</td><td>Required</td><td>Required</td></tr>
<tr><td>Full and proper description of goods or services</td><td>Required</td><td>Description required</td></tr>
<tr><td>Quantity or volume supplied</td><td>Required</td><td>Not required</td></tr>
<tr><td>Value of the supply, VAT charged and total</td><td>Required, or a statement that VAT is included at the rate</td><td>Value and VAT, or a statement that VAT is included at the rate</td></tr>
</tbody>
</table>
<p>For consideration of R50 or less, no tax invoice is required, though the buyer still needs a document such as a till slip to support any claim. Many vendors simply issue full tax invoices for every business sale. Our <a href="/blog/tax-invoice-guide">tax invoice guide</a> compares these formats with similar rules in other countries.</p>

<h3>What counts as a full and proper description</h3>
<p>SARS expects a description that tells a reader what was actually supplied. "Services rendered" or "as per quote" is too vague. "Bookkeeping services for September 2026, including VAT201 preparation" is clear. For goods, name the item and the quantity, for example "20 x office chairs, model OC-200".</p>

<h3>VAT numbers</h3>
<p>South African VAT registration numbers are ten digits and start with 4. Show your own number on every tax invoice and the recipient's number on full tax invoices where they are registered. Our article on the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers layout and checks for different countries.</p>

<h2>Sample South Africa VAT invoice with the VAT math</h2>
<p>This full tax invoice is from a Cape Town consultancy to a VAT-registered client in Johannesburg. The total is over R5,000, so every full-invoice detail is included.</p>
<table>
<thead><tr><th>Field</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Document title</td><td>Tax Invoice</td></tr>
<tr><td>Supplier</td><td>Table Bay Advisory (Pty) Ltd, 12 Long Street, Cape Town</td></tr>
<tr><td>Supplier VAT number</td><td>4123456789</td></tr>
<tr><td>Recipient</td><td>Highveld Logistics (Pty) Ltd, 50 Rivonia Road, Sandton</td></tr>
<tr><td>Recipient VAT number</td><td>4987654321</td></tr>
<tr><td>Invoice number and date</td><td>TBA-2026-0207, 28 October 2026</td></tr>
<tr><td>Line 1</td><td>Supply chain review workshop, 2 days at R4,500.00 = R9,000.00</td></tr>
<tr><td>Line 2</td><td>Written recommendations report, 1 x R3,000.00 = R3,000.00</td></tr>
<tr><td>Value excluding VAT</td><td>R12,000.00</td></tr>
<tr><td>VAT at 15%</td><td>R12,000.00 x 0.15 = R1,800.00</td></tr>
<tr><td>Total including VAT</td><td>R13,800.00</td></tr>
<tr><td>Payment terms</td><td>30 days, EFT to the account shown</td></tr>
</tbody>
</table>
<p>To extract VAT from a VAT-inclusive price, use the tax fraction 15/115. A R1,150.00 inclusive price contains R150.00 of VAT. You can test inclusive and exclusive figures with our <a href="/tools/sales-tax-calculator">tax calculator</a>.</p>

<h2>Zero-rated and exempt supplies</h2>
<p>Exports of goods, with the right export documents, and many services supplied to non-residents are zero-rated, so the invoice shows VAT at 0%. Exempt supplies carry no VAT and do not allow the supplier to claim related input tax. Mark each line clearly when an invoice mixes taxable, zero-rated and exempt items. Our explainer on <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a> sets out the practical difference.</p>
<p>If you import services from abroad, you may need to account for VAT on imported services yourself, which works similarly to the reverse charge used elsewhere; see our <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a> for the general concept, and check SARS's rules for the South African version.</p>

<h2>Credit notes and debit notes</h2>
<p>When the price changes after a tax invoice is issued, for example because of a discount, a return or a billing error, the VAT Act requires a credit note (if the value goes down) or a debit note (if it goes up). It must show the words "credit note" or "debit note", both parties' names, addresses and VAT numbers, the date, the original tax invoice number, the amount of the adjustment and the VAT on it, and a brief reason. Our <a href="/blog/credit-note-guide">credit note guide</a> walks through the structure.</p>

<h2>Copies, timing and record keeping</h2>
<p>Issue the tax invoice within 21 days of the supply, and issue only one original for each supply. If a customer asks for a replacement, send a copy clearly marked "copy". Keep records for at least five years from the date the related return was submitted, and longer if an audit or dispute is underway. Our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> compares retention periods.</p>
<p>Foreign currency invoices are allowed, and they are common for exports. For VAT reporting, convert amounts to rand at the applicable rate and keep a note of the rate and its source with the invoice.</p>

<h2>Deposits, progress billing and the time of supply</h2>
<p>In South Africa, the time of supply is generally the earlier of the date you issue an invoice or the date you receive any payment. That matters for deposits and staged projects. If a client pays a 50% deposit before work starts, VAT is generally due on that deposit in the period you receive it, and the 21-day clock for the tax invoice starts too. For long projects, many vendors issue a tax invoice for each milestone so that the VAT reported always matches an invoice the client can claim against.</p>
<p>Some supplies, such as certain construction contracts and periodic rentals, have special time-of-supply rules. If your work is billed in stages, check the SARS guide for your industry before you set up your invoicing schedule.</p>

<h2>Freelancers and small businesses: when you are not a vendor</h2>
<p>Many freelancers and small businesses in South Africa are not registered for VAT because their turnover is below the compulsory threshold. If that applies to you, your invoice is still an important commercial document, but it must not show VAT, a VAT number or the title "tax invoice". Call it "Invoice", show your name, address and contact details, the client's details, a clear description, the amount and your payment terms.</p>
<p>Business clients sometimes ask a non-registered supplier for a tax invoice. Explain that you are not a VAT vendor and therefore cannot issue one; your client simply cannot claim input tax on your fee. If your turnover grows, track it monthly against the registration threshold so you can register on time, and update your invoice template on the day registration takes effect. From that date, every taxable supply needs VAT at 15% and a valid tax invoice.</p>
<p>Voluntary registration is possible below the compulsory threshold, provided you meet the minimum turnover SARS sets for voluntary registration. Some service businesses register early because larger clients prefer VAT-registered suppliers.</p>

<h2>E-invoicing in South Africa</h2>
<p>As of October 2026, South Africa has no mandatory business-to-business e-invoicing. A correctly prepared PDF tax invoice is still valid. That is expected to change. SARS and National Treasury are pursuing a VAT modernization program that includes e-invoicing and near-real-time VAT reporting. Draft tax administration amendments published in 2025 introduced legal definitions for e-invoicing and e-reporting, and public statements in early 2026 described a Peppol-based model with full operation targeted around 2028. Treat those dates as plans until SARS publishes final rules.</p>
<p>If you want to understand the network SARS has signaled, read <a href="/blog/what-is-peppol">our Peppol explainer</a>. Note that our generator builds PDF invoices in your browser; it is not a Peppol access point.</p>

<h2>Checklist: South Africa VAT invoice</h2>
<ol>
<li>"Tax Invoice" printed prominently, only if you are a registered vendor.</li>
<li>Your name, address and ten-digit VAT number.</li>
<li>A unique serial number and the date of issue, within 21 days of supply.</li>
<li>For over R5,000: the recipient's name, address and VAT number.</li>
<li>A full and proper description, with quantity or volume on full invoices.</li>
<li>Value excluding VAT, VAT at 15% and the total, or a VAT-included statement.</li>
<li>Lines marked as zero-rated or exempt where relevant.</li>
<li>Payment terms and banking details.</li>
<li>Credit or debit notes for any later changes, never edited originals.</li>
</ol>
<p>Our <a href="/invoice-templates/classic">classic invoice template</a> fits the full tax invoice layout well, and you can rename its title to "Tax Invoice" in the <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>Common mistakes on South African tax invoices</h2>
<ul>
<li><strong>Using an abridged invoice over R5,000.</strong> The recipient's details and quantities are then missing, and input tax can be denied.</li>
<li><strong>Vague descriptions.</strong> "Services" alone does not meet the full and proper description rule.</li>
<li><strong>Charging VAT before registration.</strong> Only vendors may charge VAT.</li>
<li><strong>Leaving out the recipient's VAT number.</strong> It is needed on full tax invoices when the customer is registered.</li>
<li><strong>Issuing a second original.</strong> Replacements must be marked "copy".</li>
<li><strong>Missing the 21-day deadline.</strong> Late invoices delay your customer's claim and break the rules.</li>
<li><strong>Applying an unconfirmed rate.</strong> Proposed changes do not apply until enacted; use 15% unless SARS confirms otherwise.</li>
</ul>

<h2>Official sources</h2>
<p>SARS's <a href="https://www.sars.gov.za/businesses-and-employers/tax-invoices/" target="_blank" rel="noopener noreferrer">tax invoices page</a> sets out the full and abridged requirements, and the <a href="https://www.sars.gov.za/types-of-tax/value-added-tax/" target="_blank" rel="noopener noreferrer">SARS VAT section</a> covers registration, rates and returns. Check both for updates before changing your invoices.</p>
`,
  },
  {
    slug: "new-zealand-gst-invoice",
    title: "New Zealand GST Invoice Rules: Taxable Supply Information",
    description:
      "New Zealand GST invoice rules for 2026: taxable supply information replacing tax invoices, the $200 and $1,000 thresholds, 15% GST and a worked example.",
    category: "tax-compliance",
    jurisdiction: "New Zealand",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "australia-tax-invoice-requirements",
      "gst-invoice-guide",
      "invoice-requirements-by-country",
    ],
    faqs: [
      {
        q: "What is taxable supply information in New Zealand?",
        a: "Taxable supply information (TSI) is the set of details a GST-registered supplier must provide to a GST-registered buyer to support the buyer's GST claim. It replaced the old tax invoice rules from April 1, 2023. TSI does not have to be a single document called a tax invoice; it can be provided across several records, such as an invoice and a contract, as long as the required details are available.",
      },
      {
        q: "Can I still issue a tax invoice in New Zealand?",
        a: 'Yes. Many businesses still title their documents "Tax Invoice", and an invoice that contains all the required information is valid taxable supply information. The 2023 changes made the rules more flexible rather than banning the old format. The words "tax invoice" are no longer required, but there is nothing wrong with keeping them if your customers expect them.',
      },
      {
        q: "What are the TSI thresholds in New Zealand?",
        a: "For supplies of $200 or less including GST, you do not have to provide taxable supply information, though records must still exist. For supplies over $200, you must provide your name, GST number, the date, a description, the amount and the GST amount or a GST-inclusive statement. For supplies over $1,000, you must also identify the buyer with their name and an identifier such as an address or NZBN.",
      },
      {
        q: "What is the GST rate in New Zealand?",
        a: "The standard GST rate is 15%. Exports of goods and many services supplied to non-residents are zero-rated at 0%, and certain supplies, such as residential rent and financial services, are exempt. To work out the GST in a GST-inclusive price, multiply by 3/23. For example, a $230 inclusive price contains $30 of GST. Check Inland Revenue for any changes before relying on the rate.",
      },
      {
        q: "When must I register for GST in New Zealand?",
        a: "Registration is required if your turnover from taxable activities was more than $60,000 in the last 12 months or is expected to exceed $60,000 in the next 12 months. Below that you may register voluntarily. Only registered persons may charge GST and provide taxable supply information, so if you are not registered, issue an ordinary invoice without GST or a GST number.",
      },
      {
        q: "How quickly must I provide taxable supply information?",
        a: "For supplies over $200, you must provide TSI to a GST-registered buyer within 28 days of their request, or by another date you both agree. Most suppliers include the information on the invoice at the time of sale, which avoids requests altogether. Remember that your own records must also support the GST you return, regardless of whether a buyer asks.",
      },
      {
        q: "What is buyer-created taxable supply information?",
        a: "It is TSI that the buyer prepares instead of the supplier, common in sectors such as farming, forestry and commission sales, where the buyer knows the final value. Both parties need to be GST registered and agree that the buyer will issue it and the supplier will not, and the supplier must receive a copy. The 2023 rules relaxed the approval process; check Inland Revenue's current conditions before using it.",
      },
      {
        q: "What replaced credit notes and debit notes in New Zealand?",
        a: "Under the 2023 changes, credit notes and debit notes became supply correction information. When a price changes or a supply is cancelled after TSI has been provided, the supplier provides information showing the correction and the change in GST. Many businesses still call the document a credit note, which is fine as long as it contains the required details and references the original supply.",
      },
      {
        q: "Is e-invoicing mandatory in New Zealand?",
        a: "There is no general B2B e-invoicing mandate. New Zealand uses Peppol, managed by MBIE, and larger government agencies were required to be able to send and receive e-invoices from January 1, 2026. Large suppliers to government are due to send e-invoices from January 1, 2027. Check MBIE's current scope and thresholds if you sell to government agencies, since the large-supplier test is specific.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> New Zealand GST invoice rules changed on April 1, 2023, when "taxable supply information" replaced tax invoices. For supplies over $200, give your name, GST number, date, description, amount and GST. Over $1,000, also identify the buyer. GST is 15%, and supplies of $200 or less need no TSI.</p>

<p>For decades, New Zealand businesses issued tax invoices with a fixed list of details. The April 2023 GST reforms, often called the GST invoicing and record-keeping changes, replaced that system with a more flexible concept: taxable supply information, or TSI. The goal was to let businesses meet their obligations using whatever records they already keep, including electronic records, rather than one prescribed document.</p>

<p>In practice, a well-designed New Zealand GST invoice still does the job, and many businesses never changed their templates. But the terms, thresholds and corrections process are now different, and older guides are out of date. This guide covers the TSI tiers, a worked example, buyer-created TSI, supply correction information and e-invoicing. For a regional comparison, our guide to <a href="/blog/australia-tax-invoice-requirements">Australian tax invoice requirements</a> covers the neighboring system. This is general information, not tax advice; confirm the details with Inland Revenue or a tax adviser.</p>

<h2>GST in New Zealand at a glance</h2>
<ul>
<li><strong>Standard rate:</strong> 15%.</li>
<li><strong>Zero rate:</strong> 0% for exported goods, many services to non-residents and some land transactions between registered persons.</li>
<li><strong>Exempt supplies:</strong> including residential rent and financial services.</li>
<li><strong>Registration:</strong> required if turnover exceeds $60,000 in the past 12 months or is expected to in the next 12 months; voluntary below that.</li>
<li><strong>Key document:</strong> taxable supply information (TSI), which replaced tax invoices from April 1, 2023.</li>
</ul>
<p>GST in New Zealand is a broad-based value-added tax with few exemptions, which makes it simpler than many systems. Our <a href="/blog/gst-invoice-guide">GST invoice guide</a> compares it with Australia, Singapore, India and Canada.</p>

<h2>What changed in 2023: from tax invoices to taxable supply information</h2>
<p>The reforms changed the language and the mechanics of GST records:</p>
<table>
<thead><tr><th>Before April 2023</th><th>From April 1, 2023</th></tr></thead>
<tbody>
<tr><td>Tax invoice</td><td>Taxable supply information (TSI)</td></tr>
<tr><td>Credit note and debit note</td><td>Supply correction information</td></tr>
<tr><td>Buyer-created tax invoice, with Inland Revenue approval</td><td>Buyer-created TSI, under agreed conditions</td></tr>
<tr><td>Single document with fixed contents</td><td>Information can be spread across several records</td></tr>
<tr><td>Thresholds of $50 and $1,000</td><td>Thresholds of $200 and $1,000</td></tr>
</tbody>
</table>
<p>The words "tax invoice" are no longer required, but you can still use them. A single invoice that contains all the TSI is the simplest approach for most small businesses, and it is what customers' accounts payable teams expect.</p>

<h2>New Zealand GST invoice requirements by value</h2>
<p>TSI requirements scale with the value of the supply, including GST.</p>
<table>
<thead><tr><th>Supply value (GST-inclusive)</th><th>What is required</th></tr></thead>
<tbody>
<tr><td>$200 or less</td><td>No TSI has to be provided to the buyer. Records should still show the supplier's name, the date, a description and the amount paid.</td></tr>
<tr><td>Over $200 to $1,000</td><td>Supplier's name or trade name and GST registration number; date of the invoice or supply; description of the goods or services; the amount payable; and either the GST amount or a statement that the price includes GST</td></tr>
<tr><td>Over $1,000</td><td>Everything above, plus the buyer's name and at least one identifier, such as an address, phone number, email address, trading name, NZBN or website</td></tr>
</tbody>
</table>
<p>The buyer identifier rule is more flexible than it was. An email address or New Zealand Business Number (NZBN) can be enough, which suits online businesses that do not always collect a physical address. Even so, including the buyer's full name and address remains good practice.</p>
<p>For supplies over $200, you must provide TSI to a GST-registered buyer within 28 days of a request, or by a date you both agree. Putting the information on the invoice from the start removes that step.</p>

<h3>Your GST number</h3>
<p>Your GST number is usually your IRD number, which is eight or nine digits. Show it clearly on any document that serves as TSI. Our article on the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers placement and formatting.</p>

<h2>Sample New Zealand GST invoice with the GST math</h2>
<p>Here is an invoice from an Auckland photographer to a GST-registered business in Wellington. The total is over $1,000, so the buyer is identified.</p>
<table>
<thead><tr><th>Field</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Document title</td><td>Tax Invoice (optional wording)</td></tr>
<tr><td>Supplier</td><td>Kauri Light Photography Ltd, Auckland</td></tr>
<tr><td>GST number</td><td>123-456-789</td></tr>
<tr><td>Buyer</td><td>Harbourside Cafe Group Ltd, 14 Customhouse Quay, Wellington</td></tr>
<tr><td>Invoice number and date</td><td>KLP-2026-0091, 28 October 2026</td></tr>
<tr><td>Line 1</td><td>Menu and interior photo shoot, 1 day at $1,600.00 = $1,600.00</td></tr>
<tr><td>Line 2</td><td>Image editing, 4 hours at $100.00 = $400.00</td></tr>
<tr><td>Subtotal excluding GST</td><td>$2,000.00</td></tr>
<tr><td>GST at 15%</td><td>$2,000.00 x 0.15 = $300.00</td></tr>
<tr><td>Total including GST</td><td>$2,300.00 NZD</td></tr>
<tr><td>Payment terms</td><td>20th of the month following invoice</td></tr>
</tbody>
</table>
<p>If you quote GST-inclusive prices, work the GST out with the fraction 3/23. A $2,300.00 inclusive price contains $2,300.00 x 3/23 = $300.00 of GST. Our <a href="/tools/sales-tax-calculator">tax calculator</a> handles both inclusive and exclusive amounts.</p>

<h2>Providing TSI across several records</h2>
<p>One of the biggest practical changes in 2023 is that TSI no longer has to sit in a single document. The required details can come from a combination of records, as long as together they contain everything needed and can be linked to the supply. For example:</p>
<ul>
<li>A signed contract that names both parties and sets a monthly fee, combined with a monthly payment record showing the date and amount.</li>
<li>An online order confirmation with the description and price, combined with your account record of the buyer's name and email address.</li>
<li>A statement that summarizes several supplies to the same customer during a period.</li>
</ul>
<p>This flexibility mostly helps larger businesses with automated systems and long-term contracts. For freelancers and small businesses, a single invoice is still the easiest way to provide complete TSI. It gives the customer everything in one place, and it gives you one document to find if Inland Revenue asks questions.</p>

<h2>GST-inclusive pricing and invoices for consumers</h2>
<p>Many New Zealand businesses quote GST-inclusive prices to the public, and some quote GST-exclusive prices to business customers. Either is fine as long as the invoice makes the treatment clear. If you show a GST-inclusive total, add a line such as "Total includes GST of $30.00" or "Price includes GST". If you show a GST-exclusive subtotal, list the GST and the total separately, as in the example above.</p>
<p>Sales to consumers do not require TSI, because consumers cannot claim GST. You still need records that support the GST you return, and a simple receipt or invoice with your name, the date, a description and the amount does that.</p>

<h2>Buyer-created taxable supply information</h2>
<p>In some industries the buyer is better placed to work out the value of a supply, for example a meat processor paying a farmer by carcass weight, or a forestry company paying for logs. Here the buyer can create the TSI. Under the 2023 rules, the buyer and supplier must both be GST registered, agree that the buyer will issue the TSI and the supplier will not, and the supplier must receive a copy. The previous requirement for Inland Revenue approval was relaxed for agreements that meet the conditions. Check Inland Revenue's current guidance before setting up a buyer-created arrangement.</p>

<h2>Supply correction information (credit and debit notes)</h2>
<p>If a price changes after TSI has been provided, because of a discount, a return or an error, the supplier provides supply correction information. It should identify the original supply, explain the change and show the adjustment to the amount and the GST. Many businesses still call this document a credit note or debit note, which is fine. Our <a href="/blog/credit-note-guide">credit note guide</a> shows a practical layout.</p>

<h2>Zero-rated supplies and international clients</h2>
<p>Exported goods and many services supplied to non-residents who are outside New Zealand are zero-rated. Show GST at 0% and keep evidence of export or the customer's location. If you invoice overseas customers, our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers currency, payment and wording, and our <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt</a> explainer clarifies the difference between the two treatments.</p>

<h2>Record keeping</h2>
<p>New Zealand businesses generally keep GST records for seven years. The 2023 changes made it easier to keep records electronically and to rely on bank statements and other records for low-value supplies. Keep copies of every invoice you issue, every TSI you receive and any supply correction information. Our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> compares retention periods across countries.</p>

<h2>E-invoicing in New Zealand</h2>
<p>New Zealand uses Peppol for e-invoicing, managed by the Ministry of Business, Innovation and Employment (MBIE) rather than Inland Revenue. There is no general B2B e-invoicing mandate. Government agencies that handle large volumes of domestic invoices were required to be able to send and receive e-invoices from January 1, 2026, and large suppliers to government are due to send e-invoices from January 1, 2027. The definition of a large supplier is specific, so check MBIE's current guidance if you sell to the public sector. Our explainer on <a href="/blog/what-is-peppol">Peppol</a> covers how the network works.</p>
<p>Our generator creates PDF invoices in your browser and is not a Peppol access point. For most New Zealand businesses, a clear PDF invoice that contains the TSI remains fully compliant.</p>

<h2>Checklist: New Zealand GST invoice</h2>
<ol>
<li>Your name or trade name and GST number.</li>
<li>A unique invoice number and the date.</li>
<li>A description of each item or service, with quantity and price.</li>
<li>The amount payable, with the GST amount or a statement that the price includes GST.</li>
<li>For supplies over $1,000: the buyer's name and one identifier, such as address, email or NZBN.</li>
<li>GST at 0% shown for zero-rated lines, and exempt items marked.</li>
<li>Payment terms and how to pay.</li>
<li>Supply correction information for any later changes.</li>
<li>Copies stored for seven years.</li>
</ol>
<p>The <a href="/invoice-templates/nordic">Nordic invoice template</a> has a clean tax summary that works well for GST-exclusive or GST-inclusive pricing. Open the <a href="/invoice-generator">free invoice generator</a>, add your GST number and set the rate to 15%.</p>

<h2>Common mistakes on New Zealand GST invoices</h2>
<ul>
<li><strong>Using the old $50 threshold.</strong> The minimum is now $200 for providing TSI.</li>
<li><strong>Missing the buyer identifier over $1,000.</strong> A name alone is not enough; add an address, email or NZBN.</li>
<li><strong>Charging GST before registration.</strong> Only registered persons can charge GST.</li>
<li><strong>Calculating GST on the inclusive price.</strong> Use 15% on the exclusive amount, or 3/23 of the inclusive amount.</li>
<li><strong>Editing an issued invoice.</strong> Provide supply correction information instead.</li>
<li><strong>Charging 15% on exports.</strong> Qualifying exports and services to non-residents are zero-rated.</li>
<li><strong>Reusing invoice numbers.</strong> Our <a href="/tools/invoice-number-generator">invoice number generator</a> helps keep a consistent sequence.</li>
</ul>

<h2>Official sources</h2>
<p>Inland Revenue's <a href="https://www.ird.govt.nz/gst" target="_blank" rel="noopener noreferrer">GST pages</a> cover rates, registration and taxable supply information, and its <a href="https://ird.govt.nz/about-us/videos/webinars/gst-workshop/record-keeping" target="_blank" rel="noopener noreferrer">GST record-keeping workshop</a> explains the TSI tiers. Check them for any updates before changing your invoices.</p>
`,
  },
];
