import type { PostDraft } from "../blog";

export const HOW_TO_POSTS_B: PostDraft[] = [
  {
    slug: "commercial-invoice-template",
    title: "Commercial Invoice Template for Export: Fields, Example & Tips",
    description:
      "Free commercial invoice template guide for exports: every field customs expects, HS codes, Incoterms, a worked example and mistakes that delay shipments.",
    category: "guides",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "bill-of-lading-vs-commercial-invoice",
      "letter-of-credit-invoice",
      "proforma-invoice-guide",
      "invoice-international-clients",
      "tax-id-on-invoice",
    ],
    faqs: [
      {
        q: "What is a commercial invoice used for?",
        a: "A commercial invoice is the main document customs authorities use to identify goods, check their value and origin, and calculate import duties and taxes. It also serves as the seller's bill to the buyer for the shipment.",
      },
      {
        q: "Who prepares the commercial invoice, the exporter or the importer?",
        a: "The exporter (seller or shipper) normally prepares and signs the commercial invoice. The importer, or their customs broker, then uses it to clear the goods at the destination.",
      },
      {
        q: "Is a commercial invoice the same as a proforma invoice?",
        a: "No. A proforma invoice is a preliminary quote-style document sent before the sale is final, while a commercial invoice records the actual shipment and is used for customs clearance. Some countries accept a proforma for samples or no-charge shipments, but check with your carrier or broker.",
      },
      {
        q: "Do I need a commercial invoice for samples or gifts?",
        a: "Usually yes. Even goods sent free of charge need a commercial or proforma invoice stating a realistic value for customs and a note such as 'sample, no commercial value'. Declaring zero value is generally not accepted.",
      },
      {
        q: "How many copies of a commercial invoice do I need?",
        a: "Requirements vary by carrier and destination. Many couriers ask for three signed copies attached to the package, or an electronic copy uploaded through their paperless trade system, so confirm with your carrier before shipping.",
      },
      {
        q: "Do I still need a commercial invoice for low-value shipments to the US?",
        a: "Usually yes. The US duty-free de minimis exemption for imports of 800 dollars or less has been suspended since 2025, so low-value parcels now go through formal or informal customs entry, which relies on accurate invoice data. US law also eliminates the exemption from July 2027. Rules have changed often, so confirm current requirements with your carrier or US Customs and Border Protection.",
      },
      {
        q: "When do US exporters need to file Electronic Export Information?",
        a: "Generally when the value of goods under a single Schedule B number exceeds 2,500 dollars, or when an export license is required regardless of value. The filing is made through the Automated Export System (AES) and is separate from your commercial invoice. Many shipments to Canada are exempt. Check the Census Bureau and trade.gov guidance for current rules and exemptions.",
      },
      {
        q: "Does a commercial invoice need to be signed?",
        a: "Often, yes. Many carriers and destination countries expect a signed declaration that the information is true and correct, and the signature makes the exporter accountable for it. When you use a carrier's paperless trade service, an uploaded or electronic signature is usually accepted. Requirements differ by carrier and country, so check before shipping.",
      },
      {
        q: "What language and currency should a commercial invoice use?",
        a: "English is widely accepted, but some countries require the invoice in, or translated into, their official language, so check with your broker. Use the currency of the actual sale and show its ISO code, such as USD or EUR, on every value. Customs converts the value into local currency at its own official exchange rate.",
      },
      {
        q: "What is an EORI number and does it go on a commercial invoice?",
        a: "An EORI (Economic Operators Registration and Identification) number identifies businesses that move goods into or out of the UK or the EU customs territory. UK exporters usually need one starting with GB, and EU importers need their own EU EORI. Showing the relevant EORI numbers on the commercial invoice helps the shipment clear customs without delay.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A commercial invoice template is a pre-built layout for the export document that customs uses to identify, value and tax your goods. It must show the exporter and importer, a full description of each item with its HS code, country of origin, quantity, unit value and currency, the Incoterms of sale, package weights, and a signed declaration that the information is true. Fill it in for every international shipment and send it with the goods and to the buyer.</p>

<p>This guide walks through every field a commercial invoice template needs, explains HS codes and Incoterms in plain English, and shows a fully worked example. You can build the document in our <a href="/invoice-generator">free invoice generator</a> by adding the customs details to your line descriptions and notes, then downloading a PDF to print and sign.</p>

<h2>What is a commercial invoice?</h2>
<p>A commercial invoice is the bill of sale for goods crossing a border. It does two jobs at once: it tells the buyer how much they owe, and it tells customs at the destination what is in the box, what it is worth, where it was made and who is responsible for it. Customs officers use those details to classify the goods, calculate duties and import taxes, and decide whether any restrictions apply.</p>
<p>Because customs relies on it, a commercial invoice needs far more detail than a domestic invoice. "Assorted mugs, $1,800" is fine for a local client; at a border it can lead to a hold, a query from the broker or a reassessed value. If you are still at the quoting stage, you probably need a proforma first; our guide to <a href="/blog/proforma-invoice-guide">proforma vs commercial invoices</a> explains when to use each.</p>

<h2>Fields every commercial invoice template should include</h2>
<p>Exact requirements differ by country and carrier, but a strong commercial invoice template covers the following fields. Leave nothing blank that applies to your shipment.</p>
<table><thead><tr><th>Field</th><th>What to enter</th><th>Why customs needs it</th></tr></thead><tbody>
<tr><td>Exporter / shipper</td><td>Legal name, full address, phone, email, tax or export ID</td><td>Identifies who is responsible for the export</td></tr>
<tr><td>Importer / buyer</td><td>Legal name, address, contact, importer tax ID where required</td><td>Identifies who pays duties and owns the goods</td></tr>
<tr><td>Consignee (if different)</td><td>Name and delivery address of the recipient</td><td>Tells the carrier where goods actually go</td></tr>
<tr><td>Invoice number and date</td><td>A unique number from your normal sequence and the issue date</td><td>Links the shipment to your accounting records</td></tr>
<tr><td>Shipment references</td><td>Air waybill, bill of lading or tracking number, PO number</td><td>Matches the invoice to the physical consignment</td></tr>
<tr><td>Goods description</td><td>Plain-language description: material, use, model</td><td>Supports correct classification</td></tr>
<tr><td>HS code</td><td>Harmonized System tariff code for each item</td><td>Determines the duty rate</td></tr>
<tr><td>Country of origin</td><td>Where each item was manufactured, not where it shipped from</td><td>Affects duty rates and trade-agreement eligibility</td></tr>
<tr><td>Quantity, unit value, line total</td><td>Units, price per unit and extended value</td><td>Basis of the customs value</td></tr>
<tr><td>Currency</td><td>ISO code such as USD, EUR, GBP or AED</td><td>Values are converted at the official customs rate</td></tr>
<tr><td>Incoterms</td><td>Rule plus named place, e.g. "CIF Hamburg, Incoterms 2020"</td><td>Shows which costs are included in the price</td></tr>
<tr><td>Weights and packages</td><td>Net and gross weight, number and type of packages</td><td>Must match the transport document</td></tr>
<tr><td>Reason for export</td><td>Sale, sample, repair and return, gift</td><td>Changes how the shipment is treated</td></tr>
<tr><td>Declaration and signature</td><td>Statement that details are true, signed and dated</td><td>Makes the exporter accountable for accuracy</td></tr>
</tbody></table>
<p>Tax registration numbers are a frequent gap. Our explainer on the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers EINs, VAT numbers, TRNs and NTNs, and which ones belong on cross-border paperwork.</p>

<h2>HS codes and country of origin explained</h2>
<p>The Harmonized System is an international product classification maintained by the World Customs Organization. The first six digits are shared by participating countries; many countries add further digits for their own tariff schedules, so the full code used in your destination country may be eight or ten digits long. Putting at least the six-digit code on your commercial invoice template helps the importer's broker classify the goods quickly.</p>
<p>Country of origin is where the goods were made or last substantially transformed, which is not always the country you ship from. A product assembled in Vietnam and shipped from a warehouse in the United States is generally of Vietnamese origin. If you want to claim a reduced duty rate under a trade agreement, you usually need a separate origin statement or certificate as well, so check the agreement's rules or ask a customs broker.</p>

<h2>Incoterms: which costs are included in the price</h2>
<p>Incoterms are standard trade rules published by the International Chamber of Commerce. Incoterms 2020 is the edition most contracts reference at the time of writing. The rule you choose tells customs and the buyer whether freight and insurance are included in the invoice value.</p>
<ul>
<li><strong>EXW (Ex Works):</strong> the buyer collects from your premises and handles almost everything.</li>
<li><strong>FCA (Free Carrier):</strong> you hand the goods, cleared for export, to the buyer's carrier at a named place.</li>
<li><strong>FOB (Free On Board):</strong> sea freight only; you deliver the goods onto the vessel at the port of shipment.</li>
<li><strong>CIF (Cost, Insurance and Freight):</strong> sea freight; you pay main freight and minimum insurance to the destination port.</li>
<li><strong>DAP (Delivered at Place):</strong> you deliver to a named destination, but the buyer pays import duties and taxes.</li>
<li><strong>DDP (Delivered Duty Paid):</strong> you deliver and pay import duties and taxes too, which is the most work for the seller.</li>
</ul>
<p>Always write the rule, the named place and the edition, for example "FCA Chicago O'Hare, Incoterms 2020". A bare "FOB" with no place is a common cause of disputes about who pays for what.</p>

<h2>Commercial invoice example (worked)</h2>
<p>Here is a sample shipment from a US ceramics studio to a retailer in Germany, sold CIF Hamburg. The values are illustrative; use your own HS classification and prices.</p>
<table><thead><tr><th>Description</th><th>HS code</th><th>Origin</th><th>Qty</th><th>Unit value (USD)</th><th>Total (USD)</th></tr></thead><tbody>
<tr><td>Stoneware coffee mug, 12 oz, glazed</td><td>6912.00</td><td>United States</td><td>200</td><td>4.50</td><td>900.00</td></tr>
<tr><td>Stoneware teapot, 1 L, glazed</td><td>6912.00</td><td>United States</td><td>50</td><td>18.00</td><td>900.00</td></tr>
<tr><td colspan="5">Goods subtotal</td><td>1,800.00</td></tr>
<tr><td colspan="5">Ocean freight to Hamburg</td><td>220.00</td></tr>
<tr><td colspan="5">Cargo insurance</td><td>30.00</td></tr>
<tr><td colspan="5"><strong>Total invoice value, CIF Hamburg, Incoterms 2020</strong></td><td><strong>2,050.00</strong></td></tr>
</tbody></table>
<p>Below the table, the invoice would show: 6 cartons, net weight 310 kg, gross weight 345 kg; reason for export "sale"; the bill of lading number; the buyer's EORI and VAT numbers; and a declaration such as "I declare that the information on this invoice is true and correct and that the goods originate in the United States." It is then signed and dated by the exporter.</p>
<p>Notice that each line is specific about material, size and finish. That level of detail is the same discipline used on an <a href="/blog/itemized-invoice">itemized invoice</a>, and it is what keeps a broker from coming back with questions.</p>

<h2>How to fill out a commercial invoice template in 7 steps</h2>
<ol>
<li><strong>Start from a clean, formal layout.</strong> The <a href="/invoice-templates/corporate">Corporate invoice template</a> or the <a href="/invoice-templates/classic">Classic template</a> keeps the many fields readable for customs officers.</li>
<li><strong>Enter the parties.</strong> Exporter, importer and consignee with full legal names, addresses and tax or customs IDs.</li>
<li><strong>Assign a number.</strong> Use the same sequence as your other invoices. If you need a format, the <a href="/tools/invoice-number-generator">invoice number generator</a> creates one, and our <a href="/blog/invoice-numbering-system">invoice numbering system guide</a> explains how to keep it gap-free.</li>
<li><strong>List each product separately.</strong> One line per distinct product, with description, HS code, origin, quantity and unit value. Don't combine different items into one line.</li>
<li><strong>State currency and Incoterms.</strong> Show the currency on every value and the Incoterms rule with its named place.</li>
<li><strong>Add shipping details.</strong> Package count, net and gross weight, transport document number and reason for export.</li>
<li><strong>Sign, export to PDF and distribute.</strong> Print and sign the declaration, attach copies to the shipment as your carrier requires, and email a copy to the buyer with your <a href="/blog/bank-details-on-invoice">bank details for international payment</a>.</li>
</ol>

<h2>Common commercial invoice mistakes</h2>
<ul>
<li><strong>Vague descriptions</strong> such as "parts", "gifts" or "merchandise" that cannot be classified.</li>
<li><strong>Undervaluing goods</strong> to reduce duties. Customs can reassess the value, apply penalties and seize goods; declare the real transaction value.</li>
<li><strong>Mismatched numbers</strong> between the invoice, packing list and bill of lading, especially weights and package counts.</li>
<li><strong>Missing currency</strong>, which makes the value ambiguous.</li>
<li><strong>Wrong origin</strong>, confusing the shipping country with the manufacturing country.</li>
<li><strong>No signature</strong> on the declaration when the carrier or destination requires one.</li>
</ul>
<p>Getting paid across borders has its own pitfalls around currency and transfer fees. Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers those.</p>

<h2>Commercial invoice vs packing list</h2>
<p>A packing list describes how the goods are packed: carton numbers, contents per carton, dimensions and weights. It usually carries no prices. The commercial invoice carries the values. Customs and freight forwarders often want both, and the quantities and weights on the two documents must agree exactly. If you ship regularly, keep your commercial invoice template and packing list template side by side so you update both from the same order data.</p>
<p>Rules change and vary by destination, so treat this as general guidance and confirm specific requirements with your carrier, freight forwarder or a licensed customs broker.</p>

<p>A commercial invoice usually travels with a packing list. Our guide to <a href="/blog/packing-slip-vs-invoice">packing slips vs invoices</a> shows how the two documents differ.</p>

<h2>Create your commercial invoice now</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, choose the Corporate or Classic layout, add your exporter, importer and customs details, and download a clean PDF commercial invoice ready to sign and ship.</p>
`,
  },
  {
    slug: "what-is-a-sales-invoice",
    title: "What Is a Sales Invoice? Definition, Example & Free Template",
    description:
      "What is a sales invoice? Learn what it includes, how it differs from a purchase invoice, bill or receipt, and see a worked example you can copy in 2026.",
    category: "invoicing-basics",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "purchase-invoice-vs-sales-invoice",
      "bill-of-sale-template",
      "what-is-an-invoice",
      "itemized-invoice",
      "invoice-vs-bill",
    ],
    faqs: [
      {
        q: "Is a sales invoice the same as an invoice?",
        a: "In everyday use, yes. 'Sales invoice' simply describes an invoice from the seller's point of view, as opposed to a purchase invoice, which is the same document recorded by the buyer.",
      },
      {
        q: "Who issues a sales invoice?",
        a: "The seller issues the sales invoice to the buyer after goods are delivered or services are performed, or at the agreed billing point in the contract.",
      },
      {
        q: "What is the difference between a sales invoice and a sales receipt?",
        a: "A sales invoice requests payment, usually with a due date in the future. A sales receipt confirms that payment has already been made, typically at the point of sale.",
      },
      {
        q: "Is a sales invoice a source document in accounting?",
        a: "Yes. A sales invoice is the source document for recording a credit sale. It supports the entry to accounts receivable and sales revenue, plus any sales tax collected.",
      },
      {
        q: "Does a sales invoice need to show tax?",
        a: "Only if you are registered to collect sales tax, VAT or GST on that sale. If you are registered, show the tax as a separate line with the rate and amount; check local rules with your tax authority or accountant.",
      },
      {
        q: "What is the difference between a sales invoice and a sales order?",
        a: "A sales order confirms what the seller has agreed to deliver after accepting the buyer's order, but it doesn't ask for payment. The sales invoice comes later, usually on or after delivery, and requests payment with a due date. Referencing the sales order or the buyer's PO number on the invoice helps both sides match the documents quickly.",
      },
      {
        q: "Does a sales invoice need a signature or stamp?",
        a: "Generally no. In most countries an invoice is valid without a signature or company stamp, provided it contains the required details. Some customers or industries still ask for a signed or stamped invoice, and customs paperwork often needs a signed declaration. If a buyer requests a signature, add one, but it rarely affects whether the invoice is legally valid.",
      },
      {
        q: "Can I issue a sales invoice in a foreign currency?",
        a: "Yes, if you and the customer agree. Show the currency code on the invoice and record the sale in your home currency in your books at the exchange rate your accountant recommends. Some VAT systems, including the UK's, require the VAT amount to also be shown in the local currency on a foreign-currency invoice, so check your tax authority's rules.",
      },
      {
        q: "How long should I keep copies of sales invoices?",
        a: "It depends on where you are registered. In the UK, limited companies generally keep records for six years from the end of the financial year, and sole traders for at least five years after the 31 January filing deadline. The IRS generally expects at least three years, longer in some cases. Check your own tax authority's guidance.",
      },
      {
        q: "What happens if a customer never pays a sales invoice?",
        a: "The invoice stays in accounts receivable until you collect it or decide it is unrecoverable. After reminders and collection efforts, you may write it off as a bad debt. Some systems let you reclaim tax you paid on it: for example, UK VAT bad debt relief generally applies once a debt is more than six months overdue. Check the conditions with your accountant.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A sales invoice is the document a seller issues to a buyer to request payment for goods or services that have been supplied. It lists what was sold, the quantity and price, any tax, the total due, the payment terms and the due date. For the seller it records revenue and money owed; for the buyer, the same document is recorded as a purchase invoice.</p>

<p>This article explains what a sales invoice must include, how it differs from similar documents, how it is recorded in your books, and walks through a worked example. When you are ready, you can create a sales invoice in minutes with our <a href="/invoice-generator">free invoice generator</a> and download it as a PDF.</p>

<h2>Sales invoice meaning</h2>
<p>"Sales invoice" is simply the seller's name for an invoice. The word "sales" tells you whose books it sits in: it is generated by your sales process and recorded in your sales ledger. When your customer receives it, they file it as a purchase invoice or a bill in their accounts payable. Our explainer on <a href="/blog/invoice-vs-bill">invoice vs bill</a> covers that two-sided view in more detail.</p>
<p>A sales invoice is issued when you sell on credit, meaning the customer pays later. It creates a legal and accounting record that the customer owes you money, starts the clock on your payment terms, and is the evidence you rely on if a payment is disputed. If you are new to billing in general, start with <a href="/blog/what-is-an-invoice">what is an invoice</a>.</p>

<h2>What a sales invoice includes</h2>
<p>A complete sales invoice contains the following details. Some jurisdictions require more, especially where VAT or GST applies.</p>
<ul>
<li>The word "Invoice" (or "Tax Invoice" where your tax rules require it)</li>
<li>A unique, sequential invoice number</li>
<li>Invoice date and, where different, the date of supply</li>
<li>Your business name, address, contact details and tax ID if registered</li>
<li>The customer's legal name and billing address, plus PO number if they use one</li>
<li>A line for each product or service: description, quantity, unit price and line total</li>
<li>Subtotal, discounts, shipping, tax rate and tax amount</li>
<li>Total amount due and currency</li>
<li>Payment terms, due date and how to pay</li>
</ul>
<p>Line-level detail matters. A buyer approves an invoice faster when each line is specific, which is the idea behind an <a href="/blog/itemized-invoice">itemized invoice</a>.</p>

<h2>Sales invoice example</h2>
<p>Here is a sample sales invoice from a small kitchenware wholesaler to a US retail shop. The shop is in a jurisdiction with an 8% combined sales tax that, in this example, applies to the goods but not to the separately stated delivery charge. Whether shipping is taxable varies by state, so check your own rules.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Bamboo cutting board, large (SKU BCB-40)</td><td>40</td><td>$12.50</td><td>$500.00</td></tr>
<tr><td>Cast-iron skillet, 10 inch (SKU CIS-10)</td><td>10</td><td>$35.00</td><td>$350.00</td></tr>
<tr><td colspan="3">Subtotal (taxable goods)</td><td>$850.00</td></tr>
<tr><td colspan="3">Sales tax 8% on $850.00</td><td>$68.00</td></tr>
<tr><td colspan="3">Delivery</td><td>$25.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$943.00</strong></td></tr>
</tbody></table>
<p>Header details: Invoice INV-2026-0187, dated 22 October 2026, terms Net 30, due 21 November 2026, payable by ACH or card via the payment link. You can check rates and totals like this with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>, and our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> explains how to show it correctly.</p>

<h2>Sales invoice vs other sales documents</h2>
<p>Several documents appear around a sale, and mixing them up causes confusion for customers and bookkeepers alike.</p>
<table><thead><tr><th>Document</th><th>Issued by</th><th>When</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Quotation / estimate</td><td>Seller</td><td>Before the sale</td><td>Proposes a price</td></tr>
<tr><td>Purchase order</td><td>Buyer</td><td>Before delivery</td><td>Authorizes the purchase</td></tr>
<tr><td>Sales order</td><td>Seller</td><td>After the order is accepted</td><td>Confirms what will be delivered internally and to the buyer</td></tr>
<tr><td>Sales invoice</td><td>Seller</td><td>On or after delivery</td><td>Requests payment</td></tr>
<tr><td>Purchase invoice / bill</td><td>Recorded by buyer</td><td>When the invoice arrives</td><td>Records what the buyer owes</td></tr>
<tr><td>Sales receipt</td><td>Seller</td><td>When payment is received</td><td>Confirms payment</td></tr>
</tbody></table>
<p>The relationship with the purchase order is covered in <a href="/blog/invoice-vs-purchase-order">invoice vs purchase order</a>, and the distinction with receipts in <a href="/blog/invoice-vs-receipt">invoice vs receipt</a>.</p>

<h2>Types of sales invoice</h2>
<h3>Credit sales invoice</h3>
<p>The standard type: goods or services are supplied now and paid for later under terms such as Net 15 or Net 30. This is what most people mean by a sales invoice.</p>
<h3>Cash sales invoice</h3>
<p>Issued when the customer pays at the time of sale but still needs an invoice, for example a business buyer who needs a tax invoice to reclaim VAT. It is often marked "Paid" and shows the payment method.</p>
<h3>Interim or progress invoice</h3>
<p>Used for long projects, billing a portion of the contract value at agreed stages. See our <a href="/blog/milestone-payments">milestone payments guide</a> for how to structure these.</p>
<h3>Final invoice</h3>
<p>Closes out a project, showing the full contract value, less any deposits and progress payments already invoiced.</p>

<h2>How a sales invoice is recorded in your books</h2>
<p>Under accrual accounting, issuing the sales invoice above would typically be recorded as:</p>
<ul>
<li><strong>Debit</strong> accounts receivable: $943.00</li>
<li><strong>Credit</strong> sales revenue: $850.00</li>
<li><strong>Credit</strong> delivery income: $25.00</li>
<li><strong>Credit</strong> sales tax payable: $68.00</li>
</ul>
<p>When the customer pays, you debit cash and credit accounts receivable. The sales tax is not your income; it is held for the tax authority. Our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a> explains how to track open sales invoices until they are paid. If you use cash-basis accounting, you record revenue when payment arrives, but you should still issue and keep the invoice.</p>

<h2>Sales invoice requirements when you charge tax</h2>
<p>A basic sales invoice is enough when you are not registered for any sales tax, VAT or GST. Once you are registered, the invoice usually has to carry more detail, and in some countries it must be called a tax invoice. Typical additions are:</p>
<ul>
<li>Your tax registration number, and the customer's where they are also registered</li>
<li>The date of supply, if it differs from the invoice date</li>
<li>The tax rate applied to each line or group of lines</li>
<li>The net amount, the tax amount and the gross total, each shown separately</li>
<li>A note explaining any zero-rated, exempt or reverse-charge lines</li>
</ul>
<p>In the US, sales tax rules are set by states and local jurisdictions, so the rate and whether a product or service is taxable depend on where the sale is made. In VAT and GST countries, the national rules spell out the mandatory fields. In both cases, check your obligations with your tax authority or an accountant before you start charging tax.</p>

<h2>Common sales invoice mistakes</h2>
<p>Most sales invoices that go unpaid are not disputed; they are simply stuck. These are the errors that stall them most often:</p>
<ul>
<li><strong>Billing the wrong entity.</strong> Invoicing a person or a trading name instead of the legal company named on the purchase order.</li>
<li><strong>Missing PO number.</strong> Many accounts payable systems reject any invoice without one.</li>
<li><strong>No due date.</strong> "Net 30" alone leaves the customer to decide when 30 days starts.</li>
<li><strong>Totals that don't add up.</strong> Hand-typed totals in a document template drift from the line items.</li>
<li><strong>Duplicate or reused numbers.</strong> These cause confusion in both sets of books and raise questions in an audit.</li>
<li><strong>No payment instructions.</strong> If the customer has to email you for bank details, you've added days to the payment cycle.</li>
</ul>
<p>A generator that calculates totals and keeps your details consistent removes most of these at the source. A two-minute review against the order before sending catches the rest.</p>

<h2>How to create a sales invoice in 6 steps</h2>
<ol>
<li><strong>Pick a layout.</strong> The <a href="/invoice-templates/modern">Modern invoice template</a> suits most product businesses; you can browse all <a href="/invoice-templates">invoice templates</a> to match your brand.</li>
<li><strong>Add your details and the customer's.</strong> Use the customer's legal entity name and include their PO number if they gave one.</li>
<li><strong>Set the number and dates.</strong> Use the next number in your sequence, the invoice date and a due date that matches your <a href="/blog/invoice-payment-terms">invoice payment terms</a>.</li>
<li><strong>List each item.</strong> Description, SKU if you have one, quantity and unit price.</li>
<li><strong>Apply tax, discounts and delivery.</strong> Show tax separately with its rate.</li>
<li><strong>Add payment instructions and send.</strong> Include bank details or a payment link, download the PDF and email it to the customer's accounts payable contact.</li>
</ol>

<h2>Create your sales invoice now</h2>
<p>A clear sales invoice gets approved and paid faster. Open the <a href="/invoice-generator">invoice generator</a>, start from the Modern template, add your line items and download a professional PDF sales invoice in a few minutes.</p>
`,
  },
  {
    slug: "debit-note-vs-credit-note",
    title: "Debit Note vs Credit Note: Differences, Examples & When to Use",
    description:
      "Debit note vs credit note explained: who issues each, how they change the amount owed and tax, accounting entries, and worked examples for buyers and sellers.",
    category: "comparisons",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["credit-note-guide", "how-to-correct-an-invoice", "invoice-dispute"],
    faqs: [
      {
        q: "What is the main difference between a debit note and a credit note?",
        a: "A credit note reduces the amount a customer owes on an invoice, while a seller's debit note increases it. Both reference the original invoice instead of replacing it.",
      },
      {
        q: "Who issues a debit note, the buyer or the seller?",
        a: "Both conventions exist. In many GST and VAT systems the supplier issues a debit note to charge more, while in traditional commercial practice a buyer may send a debit note to request a credit for returned or faulty goods.",
      },
      {
        q: "Is a debit note the same as an invoice?",
        a: "Not quite. A seller's debit note works like a supplementary invoice for an additional amount linked to an earlier invoice. Some businesses simply issue a new invoice instead, which is often acceptable if it references the original.",
      },
      {
        q: "Does a credit note reduce VAT or GST?",
        a: "Generally yes. A valid credit note reduces both the net amount and the output tax on the original supply, and the customer reduces their input tax claim to match. Check your local rules for timing and required wording.",
      },
      {
        q: "Should debit notes and credit notes have their own numbering?",
        a: "Yes. Most businesses use a separate sequence for each, such as CN-0012 and DN-0004, and always show the original invoice number they adjust.",
      },
      {
        q: "Can a seller issue a credit note without goods being returned?",
        a: "Yes. Returns are only one reason. A seller can also issue a credit note for an overcharge, a pricing error, a post-sale discount, a cancelled service or a goodwill gesture after a complaint. The credit note should state the reason, reference the original invoice and, where tax was charged, show the tax being reduced along with the net amount.",
      },
      {
        q: "Is there a deadline for issuing credit or debit notes under GST?",
        a: "In India, yes. A credit note generally has to be declared in a return no later than 30 November following the end of the financial year of the supply, or the date the annual return is filed if earlier, and input tax credit on a debit note follows a similar window. Other countries set their own limits, so check your tax authority's current rules.",
      },
      {
        q: "Can I just refund the customer instead of issuing a credit note?",
        a: "You still need a document that explains the refund. The credit note records why the amount owed was reduced and adjusts sales and tax; the refund is simply the payment that settles that credit. Refunding money without a credit note leaves the original invoice showing as fully billed, which makes your books, tax return and the customer's records disagree.",
      },
      {
        q: "How does a buyer record a debit note from a supplier?",
        a: "A buyer receiving a seller's debit note records the extra cost: debit purchases or the relevant expense account, debit input tax if they can reclaim it, and credit accounts payable for the total. The entry is the mirror image of the seller's. Match it to the original invoice before approving, and query anything that wasn't agreed.",
      },
      {
        q: "Is a debit memo the same as a debit note?",
        a: "Often, yes. In the US, debit memo is a common name for a seller's document that increases what a customer owes, which works like a seller's debit note. Banks also use debit memo for charges taken from your account, which is a different thing. Check who issued the document and whether it adds to your balance or asks for a reduction.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In a debit note vs credit note comparison, the key difference is direction: a credit note reduces the amount owed on an invoice, while a debit note increases it (when issued by the seller) or requests a reduction (when issued by the buyer). A seller issues a credit note for returns, overcharges or discounts, and a debit note for undercharges or extra costs. Both reference the original invoice rather than editing it.</p>

<p>This comparison covers who issues each document, how each affects the balance and tax, the accounting entries and worked examples. If you only need the basics of credits, our dedicated <a href="/blog/credit-note-guide">credit note guide</a> goes deeper. To issue a replacement or follow-up invoice, use our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>Debit note vs credit note at a glance</h2>
<table><thead><tr><th></th><th>Credit note</th><th>Debit note</th></tr></thead><tbody>
<tr><td>Effect on the customer's balance</td><td>Reduces what they owe</td><td>Increases what they owe (seller-issued)</td></tr>
<tr><td>Usually issued by</td><td>Seller</td><td>Seller (GST/VAT practice) or buyer (traditional practice)</td></tr>
<tr><td>Typical reasons</td><td>Returns, overcharge, damaged goods, post-sale discount, cancelled service</td><td>Undercharge, extra quantity shipped, price increase agreed after invoicing, added freight</td></tr>
<tr><td>Effect on output tax</td><td>Reduces it</td><td>Increases it</td></tr>
<tr><td>Seller's accounting</td><td>Debit sales returns, credit receivables</td><td>Debit receivables, credit sales</td></tr>
<tr><td>References</td><td>Original invoice number and date</td><td>Original invoice number and date</td></tr>
<tr><td>Numbering</td><td>Own sequence, e.g. CN-0012</td><td>Own sequence, e.g. DN-0004</td></tr>
</tbody></table>

<h2>What is a credit note?</h2>
<p>A credit note is a document a seller issues to reduce or cancel an amount on an invoice already sent. Instead of editing or deleting the original invoice, which would break your audit trail, you issue a credit note that references it. The customer then pays the invoice total minus the credit, or holds the credit against future invoices, or receives a refund if they had already paid.</p>
<p>Common triggers include returned goods, a pricing error in the customer's favor, a goodwill discount after a service problem, or a cancelled order. For the full field list, partial versus full credit notes and refund handling, see the credit note guide linked above.</p>

<h2>What is a debit note? Two conventions</h2>
<p>"Debit note" is used in two different ways, and knowing which one your counterparty means avoids a lot of confusion.</p>
<h3>1. Seller's debit note (supplementary charge)</h3>
<p>Here the seller issues a debit note to increase the amount owed on an earlier invoice. This is the standard meaning in many GST systems, including India's, where a supplier issues a debit note when the taxable value or tax charged on an invoice turns out to be lower than it should have been. It works like a supplementary invoice: it references the original, states the additional amount and the extra tax, and is due under the original or newly stated terms.</p>
<h3>2. Buyer's debit note (request for credit)</h3>
<p>In traditional commercial practice, a buyer returning goods or disputing a charge may send the seller a debit note. It tells the seller, "we are debiting your account in our books by this amount", and effectively asks the seller to issue a matching credit note. It does not by itself change the seller's invoice; the seller confirms with a credit note.</p>
<p>When you receive a document titled "debit note", check who issued it and whether it adds to or asks to reduce the balance. If a buyer's debit note is the start of a disagreement, our guide on handling an <a href="/blog/invoice-dispute">invoice dispute</a> will help.</p>

<h2>Worked example: one invoice, both adjustments</h2>
<p>A furniture supplier issues Invoice INV-2026-0310 on 1 October 2026 to a hotel for 20 desk chairs at $250.00 each: $5,000.00 plus 10% tax of $500.00, total $5,500.00. Two things then happen.</p>
<table><thead><tr><th>Document</th><th>Reason</th><th>Net</th><th>Tax 10%</th><th>Total</th></tr></thead><tbody>
<tr><td>INV-2026-0310</td><td>20 chairs at $250.00</td><td>$5,000.00</td><td>$500.00</td><td>$5,500.00</td></tr>
<tr><td>DN-0004 (seller)</td><td>Agreed upgrade to armrests on all 20 chairs at $15.00 each, not billed</td><td>+$300.00</td><td>+$30.00</td><td>+$330.00</td></tr>
<tr><td>CN-0012 (seller)</td><td>2 chairs returned damaged at $250.00</td><td>−$500.00</td><td>−$50.00</td><td>−$550.00</td></tr>
<tr><td colspan="2"><strong>Net position</strong></td><td><strong>$4,800.00</strong></td><td><strong>$480.00</strong></td><td><strong>$5,280.00</strong></td></tr>
</tbody></table>
<p>The hotel pays $5,280.00. The original invoice stays exactly as issued; the two adjustment documents explain the difference, and anyone reviewing the account later can follow every step. If the hotel had first sent its own buyer's debit note for the damaged chairs, the supplier would still respond with CN-0012.</p>

<h2>Accounting entries for each</h2>
<p>From the seller's side, using the example above:</p>
<ul>
<li><strong>Debit note DN-0004:</strong> debit accounts receivable $330.00; credit sales $300.00; credit tax payable $30.00.</li>
<li><strong>Credit note CN-0012:</strong> debit sales returns and allowances $500.00; debit tax payable $50.00; credit accounts receivable $550.00.</li>
</ul>
<p>The buyer records the mirror image in accounts payable and adjusts any input tax claim. Keeping these adjustments separate from the original invoice makes your receivables easier to reconcile, which our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a> explains in more depth.</p>

<h2>Tax treatment of debit and credit notes</h2>
<p>Under VAT and GST systems, both documents adjust the tax on the original supply, so they usually need to carry tax details: your tax registration number, the customer's where required, the original invoice reference, the net change and the tax change. Some systems set deadlines for issuing adjustments or require specific wording. See our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> and <a href="/blog/gst-invoice-guide">GST invoice guide</a> for the fields that typically apply, and confirm the current rules with your tax authority or accountant, since they differ by country.</p>
<p>In the US, where there is no VAT, credit and debit notes mostly matter for bookkeeping and for correcting any sales tax collected. Some businesses there simply issue a new invoice for undercharges instead of using the term "debit note".</p>

<h2>When to use which (and when to do something else)</h2>
<ul>
<li><strong>Customer owes less:</strong> issue a credit note.</li>
<li><strong>Customer owes more on the same supply:</strong> issue a debit note, or a supplementary invoice that references the original.</li>
<li><strong>Brand-new, separate work:</strong> issue a normal new invoice, not a debit note.</li>
<li><strong>Invoice issued in error and not yet sent or recorded:</strong> you may be able to void it instead; see <a href="/blog/how-to-void-an-invoice">how to void an invoice</a>.</li>
<li><strong>Several errors on one invoice:</strong> a full credit note plus a corrected replacement invoice is often cleanest. Our guide on <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a> walks through each scenario.</li>
</ul>

<h2>What to put on a debit note or credit note</h2>
<p>The two documents share almost the same structure. Each should show:</p>
<ul>
<li>A clear title: "Credit Note" or "Debit Note"</li>
<li>Its own unique number and issue date</li>
<li>Your business details and tax registration number, if registered</li>
<li>The customer's legal name, address and tax number where required</li>
<li>The original invoice number and date being adjusted</li>
<li>The reason for the adjustment, in plain language</li>
<li>The quantity, rate and net amount being added or removed</li>
<li>The tax rate and the tax amount being added or removed</li>
<li>The total adjustment and, ideally, the revised balance on the original invoice</li>
</ul>
<p>Showing the revised balance is optional, but it saves the customer's accounts payable team from working it out and makes a follow-up question less likely.</p>
<h3>Mistakes to avoid</h3>
<ul>
<li><strong>Using a negative invoice instead of a credit note.</strong> Some systems accept it, but a properly titled credit note is clearer and is what many tax rules expect.</li>
<li><strong>Issuing a debit note for unrelated new work.</strong> A debit note adjusts an existing supply; new work belongs on a new invoice.</li>
<li><strong>Forgetting the tax adjustment.</strong> If the original invoice carried tax, the adjustment almost always needs to adjust tax too.</li>
<li><strong>No reference to the original invoice.</strong> Without it, the customer can't match the adjustment and may pay the wrong amount.</li>
<li><strong>Ignoring a buyer's debit note.</strong> If a customer sends one, respond quickly with a credit note or an explanation, or the balance will stay disputed in their books.</li>
</ul>

<h2>Numbering and record-keeping tips</h2>
<p>Give credit notes and debit notes their own prefixes and sequences, never reuse an invoice number, and always quote the original invoice number and date on the adjustment. Our <a href="/blog/invoice-numbering-system">invoice numbering system guide</a> shows how to set up prefixes that keep invoices, credits and debits distinct. Store adjustments with the original invoice so the full history is in one place.</p>

<h2>Create your corrected invoice now</h2>
<p>If an adjustment means issuing a fresh invoice, open the <a href="/invoice-generator">invoice generator</a>, choose the clean <a href="/invoice-templates/minimal">Minimal invoice template</a>, reference the original invoice number in the notes and download your PDF.</p>
`,
  },
  {
    slug: "invoice-due-date",
    title: "Invoice Due Date: How to Set It, Plus Invoice Date vs Due Date",
    description:
      "How to set an invoice due date, calculate Net 15, Net 30 and EOM terms, and understand invoice date vs due date, with examples and default legal rules.",
    category: "invoicing-basics",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-payment-terms", "overdue-invoice", "late-payment-fees"],
    faqs: [
      {
        q: "What is the difference between invoice date and due date?",
        a: "The invoice date is the day the invoice is issued and starts the payment period. The due date is the last day the customer can pay without being late, calculated from the invoice date using your payment terms.",
      },
      {
        q: "How do I calculate a Net 30 due date?",
        a: "Count 30 calendar days from the invoice date, unless your contract says otherwise. An invoice dated 22 October 2026 on Net 30 terms is due on 21 November 2026.",
      },
      {
        q: "Is the due date the day payment must be sent or received?",
        a: "It depends on your terms, which is why it helps to say so explicitly. Many businesses write 'payment must be received by' the due date so that bank processing time is the customer's responsibility.",
      },
      {
        q: "What happens if an invoice due date falls on a weekend?",
        a: "There is no universal rule. Many businesses treat payment on the next business day as on time, but if timing matters, set the due date on a weekday or state your policy on the invoice.",
      },
      {
        q: "Can I change the due date after sending an invoice?",
        a: "You can agree a new date with the customer, but don't silently edit the issued invoice. Confirm the extension in writing and note it in your records, or issue a corrected invoice if your process requires it.",
      },
      {
        q: "What does due on receipt actually mean?",
        a: "It means payment is expected as soon as the customer receives the invoice. In practice, many customers treat it as within a few days, and it gives you no fixed date for reminders or late fees. If you want prompt payment, print a specific date instead, such as payment due by 29 October 2026, and agree it with the customer upfront.",
      },
      {
        q: "Can I charge interest when a business customer pays after the due date?",
        a: "If your contract allows it, or the law provides it. In the UK, businesses can generally claim statutory interest at 8 percentage points above the Bank of England base rate, plus fixed compensation of 40, 70 or 100 pounds depending on the debt size. In other countries, rules differ, so agree late-payment terms in writing before work starts.",
      },
      {
        q: "Do government clients have to pay by a set due date?",
        a: "Often, yes. US federal agencies are generally covered by the Prompt Payment Act, which usually requires payment within 30 days of receiving a proper invoice and adds interest when they pay late. EU public authorities are generally held to 30 days. State, local and other national rules vary, so check your contract and the relevant authority's guidance.",
      },
      {
        q: "Does a partial payment change the due date?",
        a: "No, not unless you agree a new arrangement. The unpaid balance remains due on the original date, and it becomes overdue if not paid by then. If you agree a payment plan, confirm the new dates and amounts in writing and note them in your records, so reminders and any late fees apply to the right dates.",
      },
      {
        q: "What if a large customer insists on longer payment terms than mine?",
        a: "Big buyers often set payment terms in their supplier agreements, but those terms are still negotiable before you sign. Check whether local law caps them: the EU Late Payment Directive, for example, generally limits business terms to 60 days unless expressly agreed and not grossly unfair. You can also price in the wait or offer an early payment discount.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An invoice due date is the specific calendar date by which your customer must pay. It is calculated from the invoice date using your agreed payment terms: an invoice dated 22 October 2026 on Net 30 terms is due on 21 November 2026. Always print the actual date on the invoice, not just "Net 30", so there is no room for interpretation.</p>

<p>Below you will find how invoice date and due date differ, how to calculate due dates for the most common terms, what happens when no date is agreed, and how to choose a due date that gets you paid on time. Our <a href="/invoice-generator">free invoice generator</a> lets you set both dates and shows them clearly at the top of every invoice.</p>

<h2>Invoice date vs due date</h2>
<p>These two dates do different jobs, and confusing them is one of the most common causes of late payment.</p>
<table><thead><tr><th></th><th>Invoice date</th><th>Due date</th></tr></thead><tbody>
<tr><td>Meaning</td><td>The day the invoice is issued</td><td>The last day to pay on time</td></tr>
<tr><td>Set by</td><td>The date you create and send the invoice</td><td>Invoice date plus your payment terms</td></tr>
<tr><td>Used for</td><td>Starting the payment clock, tax period, record-keeping</td><td>Payment scheduling, late fees, reminders, aging reports</td></tr>
<tr><td>Can it change?</td><td>No, once issued</td><td>Only by agreement with the customer</td></tr>
<tr><td>Example</td><td>22 October 2026</td><td>21 November 2026 (Net 30)</td></tr>
</tbody></table>
<p>Some invoices also show a date of supply or service period, such as "Services: 1–30 September 2026". That records when the work happened and can matter for VAT or GST, but it doesn't change when payment is due.</p>

<h2>How to calculate an invoice due date</h2>
<p>Unless your contract says otherwise, count calendar days, not business days, starting the day after the invoice date. Using an invoice dated Thursday, 22 October 2026:</p>
<table><thead><tr><th>Terms</th><th>How it works</th><th>Due date</th></tr></thead><tbody>
<tr><td>Due on receipt</td><td>Payable as soon as the invoice is received</td><td>22 October 2026</td></tr>
<tr><td>Net 7</td><td>7 days after the invoice date</td><td>Thursday, 29 October 2026</td></tr>
<tr><td>Net 15</td><td>15 days after the invoice date</td><td>Friday, 6 November 2026</td></tr>
<tr><td>Net 30</td><td>30 days after the invoice date</td><td>Saturday, 21 November 2026</td></tr>
<tr><td>Net 30 EOM</td><td>30 days after the end of the invoice month (a common reading)</td><td>Monday, 30 November 2026</td></tr>
</tbody></table>
<p>"EOM" (end of month) terms are read differently by different companies; some mean "due at the end of the following month". Avoid the ambiguity by printing the resulting date. For a full explanation of each term, including 2/10 Net 30, see our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a>.</p>
<h3>When the due date falls on a weekend</h3>
<p>Notice that Net 30 in the example lands on a Saturday. There is no universal rule for weekends or public holidays. If it matters to you, either set the due date to the preceding Friday or add a line such as "Payments received by the next business day are treated as on time." Clear beats clever.</p>
<p>The same thinking applies to time zones when you bill clients abroad. A payment sent late on the due date in one country may arrive the next day in yours. If timing is tight, state which time zone applies or simply allow a day of grace in practice, rather than charging a late fee over a few hours.</p>

<h2>What if no invoice due date is agreed?</h2>
<p>If your invoice and contract say nothing, default rules may apply, and they vary by country. As general guidance only:</p>
<ul>
<li><strong>United Kingdom:</strong> under the Late Payment of Commercial Debts (Interest) Act 1998, where no payment date is agreed for a business-to-business sale, statutory interest can generally start 30 days after the later of delivery or receipt of the invoice.</li>
<li><strong>European Union:</strong> the Late Payment Directive (2011/7/EU) sets a 30-day default where no period is agreed, and generally caps agreed business-to-business terms at 60 days unless expressly agreed and not grossly unfair. Public authorities are generally held to 30 days. Member states implement this in their own laws, and reforms have been under discussion.</li>
<li><strong>United States:</strong> there is no single federal default for private businesses. Federal and many state government contracts have prompt-payment rules, and many states have prompt-payment laws for construction.</li>
</ul>
<p>These rules change and have exceptions, so check with a local adviser before relying on them. If you bill UK clients, our <a href="/invoice-generator/uk">UK invoice generator</a> sets GBP and VAT fields by default. The simplest protection everywhere is to agree terms in writing before work starts and print the due date on every invoice.</p>

<h2>How to choose the right due date</h2>
<p>Shorter terms improve cash flow, but only if the customer can actually meet them. Consider:</p>
<ul>
<li><strong>Your customer's payment cycle.</strong> Large companies often run fixed weekly or monthly payment runs. Asking when their next run is can be the difference between being paid this month or next.</li>
<li><strong>Your costs.</strong> If you pay for materials or subcontractors up front, shorter terms or a deposit reduce your exposure.</li>
<li><strong>Industry norms.</strong> Net 30 is common in business-to-business work; freelancers often use Net 7 or Net 14; consumers are usually billed due on receipt.</li>
<li><strong>Incentives.</strong> An <a href="/blog/early-payment-discount">early payment discount</a> such as 2/10 Net 30 can pull payments forward when cash is tight.</li>
</ul>
<p>Your due dates also drive your forecast. Our guide to <a href="/blog/cash-flow-management">cash flow management</a> shows how to plan around the dates customers actually pay.</p>

<h2>Due dates for recurring, deposit and milestone invoices</h2>
<p>Not every invoice follows the simple "invoice date plus 30 days" pattern. A few common variations:</p>
<ul>
<li><strong>Recurring invoices.</strong> For monthly retainers or subscriptions, issue on the same day each month and keep the same terms, so the customer's payment run picks them up predictably. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> covers scheduling.</li>
<li><strong>Deposit invoices.</strong> These are usually due on receipt or within a few days, because work is scheduled only once the deposit arrives.</li>
<li><strong>Milestone invoices.</strong> Each stage invoice gets its own due date, normally calculated from the date that stage is invoiced, not from the start of the project.</li>
<li><strong>Consumer invoices.</strong> Individuals rarely run payment cycles, so "due on receipt" or a short Net 7 is typical.</li>
</ul>
<h3>Wording examples you can copy</h3>
<p>Clear wording removes the most common excuses for late payment. Adapt whichever fits your terms:</p>
<ul>
<li>"Terms: Net 14. Payment due by 5 November 2026."</li>
<li>"Payment must be received in full by 21 November 2026."</li>
<li>"Due on receipt. Work begins once payment is received."</li>
<li>"Net 30. Invoices unpaid after the due date may incur late fees as set out in our agreement."</li>
</ul>
<p>Only mention late fees if they were agreed in your contract or are allowed by law where you operate.</p>

<h2>How to show the due date on an invoice</h2>
<ol>
<li><strong>Place it at the top.</strong> Put the invoice date and due date next to the invoice number, where accounts payable looks first. The <a href="/invoice-templates/blue">Blue invoice template</a> keeps these fields prominent.</li>
<li><strong>Use an unambiguous format.</strong> Write "21 November 2026" or "November 21, 2026" instead of 11/21/26, which international clients may misread.</li>
<li><strong>State the terms alongside it.</strong> For example: "Terms: Net 30. Payment due by 21 November 2026."</li>
<li><strong>Say what "on time" means.</strong> Specify "received by" if you need funds in your account on that date.</li>
<li><strong>Repeat it in your email.</strong> Put the invoice number and due date in the subject line.</li>
</ol>

<h2>What to do as the due date approaches</h2>
<p>Treat the due date as the center of a short, predictable follow-up sequence rather than the start of chasing.</p>
<ul>
<li><strong>3–5 days before:</strong> a friendly reminder with the invoice attached.</li>
<li><strong>On the due date:</strong> a short note that payment is due today.</li>
<li><strong>7 days after:</strong> a firmer follow-up, referencing any late fee in your terms.</li>
<li><strong>14–30 days after:</strong> a phone call and a written final notice.</li>
</ul>
<p>Our <a href="/blog/payment-reminder-emails">payment reminder email templates</a> cover each stage. Once a date has passed, the playbook for an <a href="/blog/overdue-invoice">overdue invoice</a> takes over, and if you agreed late charges in advance, see <a href="/blog/late-payment-fees">how to charge late payment fees</a>. To see how many of your invoices are slipping past their due dates, an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> sorts them into 30, 60 and 90-day buckets.</p>

<h2>Set your invoice due date now</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, enter your invoice date, choose your terms, and type the exact due date into the invoice before you download the PDF. A clear date is the easiest late-payment fix there is.</p>
`,
  },
  {
    slug: "deposit-invoice",
    title: "Deposit Invoice: How to Bill an Advance Payment (With Example)",
    description:
      "How to create a deposit invoice for an advance payment: what to include, how much to ask for, tax timing, and how to deduct the deposit on the final invoice.",
    category: "invoicing-basics",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["retainer-invoice", "milestone-payments", "proforma-invoice-guide"],
    faqs: [
      {
        q: "What is a deposit invoice?",
        a: "A deposit invoice requests part of the total price before work starts or goods are delivered. It references the quote or contract, states the deposit amount, and is later deducted from the final invoice.",
      },
      {
        q: "How much deposit should I ask for?",
        a: "Many service businesses ask for 25% to 50% up front, and custom or materials-heavy work often sits at the higher end. Some jurisdictions and industries limit deposits on consumer contracts, so check local rules.",
      },
      {
        q: "Is a deposit invoice the same as a proforma invoice?",
        a: "Not necessarily. A proforma is a preliminary document that isn't a demand for payment in the tax sense, while a deposit invoice is a real invoice for part of the price. Some businesses use a proforma to request a deposit and issue a tax invoice once it is paid.",
      },
      {
        q: "Do I charge sales tax or VAT on a deposit?",
        a: "Often yes. In many VAT systems, receiving an advance payment or issuing a VAT invoice for it creates a tax point, so VAT is due on the deposit. US sales tax treatment varies by state, so confirm with your accountant.",
      },
      {
        q: "Is a deposit refundable?",
        a: "Only according to your contract and local consumer law. State clearly in your agreement and on the deposit invoice whether the deposit is refundable and under what conditions.",
      },
      {
        q: "Can I send a deposit invoice before the contract is signed?",
        a: "You can, but it is safer to send it with or just after the signed quote or contract. The deposit invoice should reference that document, so both sides agree on what the deposit secures and whether it is refundable. If a client pays a deposit without signing anything, confirm the scope, price and cancellation terms by email before starting work.",
      },
      {
        q: "How do I record a customer deposit in my books?",
        a: "Under accrual accounting, a deposit for work not yet done is usually recorded as a liability, often called customer deposits or unearned revenue, rather than as income. When you deliver and issue the final invoice, you move it to revenue. Under cash accounting, it is generally income when received. Ask your accountant how tax rules treat it where you are.",
      },
      {
        q: "What if the final bill turns out lower than the deposit?",
        a: "Then you owe the client the difference. Issue a final invoice showing the full value, deduct the deposit, and show the resulting credit balance. Refund that amount, or with the client's written agreement hold it against future work, and issue a credit note so your records show what was returned. Check your contract and consumer rules for refund timing.",
      },
      {
        q: "Should I send a receipt when a client pays a deposit?",
        a: "Yes. Mark the deposit invoice as paid in your records and send a short receipt or confirmation showing the amount, date, payment method and the deposit invoice number. It reassures the client that the booking is secured and gives both sides a clear reference for the deduction on the final invoice.",
      },
      {
        q: "Are there legal limits on deposits from consumers?",
        a: "In some places, yes, especially for home improvement work. For example, California generally limits a home improvement contractor's down payment to 1,000 dollars or 10% of the contract price, whichever is less. Other states, countries and industries have their own rules on deposit size, refunds and cancellation rights. Check your local consumer protection or licensing authority before quoting.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A deposit invoice is an invoice for part of the agreed price, issued before work starts or goods are delivered, to secure the booking and cover early costs. It should reference the quote or contract, show the full project value, the deposit percentage and amount, and the due date. When the job is done, the final invoice lists the full value and subtracts the deposit already paid.</p>

<p>This guide covers when to ask for a deposit, what to put on a deposit invoice (also called an advance payment invoice), how tax usually works, and a worked example from deposit to final bill. You can produce both documents with our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>When to use a deposit invoice</h2>
<p>A deposit protects you from cancellations and funds costs you incur before the customer pays in full. It is common when:</p>
<ul>
<li>You buy materials or stock specifically for the job, such as cabinetry, printing or custom manufacturing.</li>
<li>You reserve a date that you can't resell, as with weddings, events, venues and photographers.</li>
<li>The project is long, and you would otherwise carry weeks of unpaid labor.</li>
<li>You are working with a new client with no payment history.</li>
</ul>
<p>Building trades often go further with staged billing. Our <a href="/blog/construction-invoice-guide">construction invoice guide</a> covers progress billing and retainage, which work alongside a deposit.</p>
<p>A deposit is less useful for small, quick jobs where the whole invoice will be paid within days, or for long-standing clients with a reliable payment record, where asking for money up front can feel like a vote of no confidence. In those cases, short payment terms and a clear due date usually achieve the same protection. If you do ask a regular client for a deposit for the first time, explain why: a large materials order or a reserved date is a reason most clients accept without question.</p>

<h2>Deposit vs retainer vs milestone vs proforma</h2>
<p>These terms overlap, so be precise about what you are billing.</p>
<table><thead><tr><th>Document</th><th>What it is</th><th>Typical use</th></tr></thead><tbody>
<tr><td>Deposit invoice</td><td>Part of a fixed price paid up front, deducted from the final bill</td><td>Fixed-price projects, events, custom goods</td></tr>
<tr><td>Retainer invoice</td><td>Payment for ongoing availability or prepaid hours, often monthly</td><td>Agencies, consultants, lawyers</td></tr>
<tr><td>Milestone invoice</td><td>A percentage of the price billed when a defined stage is complete</td><td>Software, design, construction</td></tr>
<tr><td>Proforma invoice</td><td>A preliminary invoice showing what will be billed, not a final tax invoice</td><td>Quotes, export pre-payment, budget approval</td></tr>
</tbody></table>
<p>See our guides to the <a href="/blog/retainer-invoice">retainer invoice</a> and <a href="/blog/milestone-payments">milestone payments</a> if those fit your work better. For pre-payment documents used in trade, our <a href="/blog/proforma-invoice-guide">proforma invoice guide</a> explains the difference from a commercial invoice.</p>

<h2>What to include on a deposit invoice</h2>
<ul>
<li>The title "Deposit Invoice" or "Advance Payment Invoice"</li>
<li>A unique invoice number from your normal sequence</li>
<li>Invoice date and a short due date, often on receipt or within 7 days</li>
<li>Your details and the client's legal name and billing address</li>
<li>A reference to the quote, estimate or contract number and date</li>
<li>A description of the project and the total agreed price</li>
<li>The deposit percentage and amount, for example "30% deposit on $8,000.00"</li>
<li>Any tax on the deposit, shown separately</li>
<li>Whether the deposit is refundable, and under what conditions</li>
<li>Payment instructions, ideally with a <a href="/blog/add-payment-link-to-invoice">payment link</a> so the client can pay immediately</li>
</ul>
<p>The refund and cancellation terms belong in your contract first; the invoice simply restates them. Our <a href="/blog/freelance-contract-template">freelance contract template guide</a> lists the clauses worth including.</p>

<h2>How much deposit to ask for</h2>
<p>There is no universal rule. A practical approach is to cover your out-of-pocket costs plus enough to make cancellation meaningful. Ranges you will commonly see:</p>
<table><thead><tr><th>Type of work</th><th>Common deposit range</th></tr></thead><tbody>
<tr><td>Design, writing and other creative services</td><td>25%–50%</td></tr>
<tr><td>Events, weddings and date-bound bookings</td><td>25%–50%, often non-refundable within a set period</td></tr>
<tr><td>Custom goods and fabrication</td><td>30%–50%, or the cost of materials</td></tr>
<tr><td>Home improvement and trades</td><td>Often capped by local consumer law; check before quoting</td></tr>
</tbody></table>
<p>Some US states and other jurisdictions limit how much a home improvement contractor can collect up front from a consumer. If you work in regulated trades, check the rules where the job is located.</p>

<h2>Deposit invoice example: from deposit to final bill</h2>
<p>A web designer quotes $8,000.00 for a website redesign, with a 30% deposit and the balance on launch. No sales tax applies to this service in the example.</p>
<h3>Deposit invoice (INV-2026-0215, 22 October 2026, due on receipt)</h3>
<table><thead><tr><th>Description</th><th>Amount</th></tr></thead><tbody>
<tr><td>Website redesign per Quote Q-2026-041, total project value $8,000.00</td><td></td></tr>
<tr><td>30% deposit, non-refundable once design work begins</td><td>$2,400.00</td></tr>
<tr><td><strong>Amount due</strong></td><td><strong>$2,400.00</strong></td></tr>
</tbody></table>
<h3>Final invoice (INV-2026-0251, on launch)</h3>
<p>During the project the client approved an extra landing page for $500.00.</p>
<table><thead><tr><th>Description</th><th>Amount</th></tr></thead><tbody>
<tr><td>Website redesign per Quote Q-2026-041</td><td>$8,000.00</td></tr>
<tr><td>Additional landing page (change request CR-02)</td><td>$500.00</td></tr>
<tr><td>Subtotal</td><td>$8,500.00</td></tr>
<tr><td>Less deposit paid, Invoice INV-2026-0215</td><td>−$2,400.00</td></tr>
<tr><td><strong>Balance due</strong></td><td><strong>$6,100.00</strong></td></tr>
</tbody></table>
<p>Showing the deposit as a deduction, with the earlier invoice number, gives the client a complete picture and makes reconciliation simple for both sides.</p>

<h2>Tax on deposits and advance payments</h2>
<p>Tax timing is where deposits get tricky, and the rules differ by country:</p>
<ul>
<li><strong>VAT systems (such as the UK and EU):</strong> an advance payment generally creates a tax point when the payment is received or when a VAT invoice is issued, whichever comes first. That means VAT is usually due on the deposit, not only at the end. Some businesses send a request for payment or proforma first, then issue the VAT invoice when the deposit arrives.</li>
<li><strong>GST systems:</strong> many treat advances similarly, though details vary.</li>
<li><strong>US sales tax:</strong> treatment depends on the state and the type of sale; often the tax is tied to the sale or delivery rather than the deposit itself.</li>
</ul>
<p>Whichever applies, the final invoice should show tax on the full value and credit any tax already charged on the deposit, so the customer isn't taxed twice. Confirm the treatment for your business with your tax authority or accountant.</p>

<h2>Cancellations, refunds and common deposit mistakes</h2>
<p>A deposit is only as strong as the terms behind it. Before you send the first deposit invoice, make sure your quote or contract answers these questions:</p>
<ul>
<li><strong>Is the deposit refundable?</strong> If so, until when, and is any part retained to cover costs already incurred?</li>
<li><strong>What happens if the client cancels?</strong> A common approach is that the deposit is kept once work or purchasing has started.</li>
<li><strong>What happens if you cancel?</strong> In that case the deposit should normally be refunded in full.</li>
<li><strong>Does the deposit expire?</strong> For bookings, say how long the date is held if the project is postponed.</li>
</ul>
<p>Consumer protection laws can override your terms, especially for home improvement, events and distance sales, so get advice if you work with individuals.</p>
<p>If you do refund a deposit, issue a credit note against the deposit invoice rather than deleting it, so your records still show what was billed and returned. Mistakes that cause problems later include:</p>
<ul>
<li>Not deducting the deposit on the final invoice, so the client is billed twice.</li>
<li>Deducting the deposit without quoting the deposit invoice number, which makes reconciliation hard.</li>
<li>Calling the document a "receipt" before any money has been received.</li>
<li>Starting work before the deposit has cleared, which defeats its purpose.</li>
<li>Charging tax on the final invoice for the full value without crediting tax already charged on the deposit.</li>
</ul>

<h2>How to create a deposit invoice in 5 steps</h2>
<ol>
<li><strong>Choose a template.</strong> The <a href="/invoice-templates/agency">Agency invoice template</a> works well for project-based services.</li>
<li><strong>Number it in sequence.</strong> Deposit invoices are real invoices and belong in your main series; the <a href="/tools/invoice-number-generator">invoice number generator</a> can set up a format.</li>
<li><strong>Describe the project and total.</strong> Reference the quote or contract and state the full price in the description.</li>
<li><strong>Add the deposit line.</strong> Enter the percentage and amount as the only charge, plus any tax.</li>
<li><strong>Set a short due date and send.</strong> Make clear that work is scheduled once the deposit is received.</li>
</ol>

<h2>Create your deposit invoice now</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, select the Agency template, add your deposit line and project reference, and download a PDF you can send with your signed quote today.</p>
`,
  },
  {
    slug: "itemized-invoice",
    title: "Itemized Invoice: What It Is, How to Make One & Free Example",
    description:
      "Learn what an itemized invoice is, what each line item should show, how detailed to be, and see a worked itemized invoice example with labor, parts and tax.",
    category: "invoicing-basics",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "reimbursable-expenses-invoice",
      "invoice-examples",
      "how-to-invoice-for-hourly-work",
      "what-is-a-sales-invoice",
    ],
    faqs: [
      {
        q: "What does itemized invoice mean?",
        a: "An itemized invoice lists each product, service, labor charge and fee as a separate line with its own description, quantity, rate and amount, instead of one lump-sum total.",
      },
      {
        q: "Can a customer ask for an itemized invoice?",
        a: "Yes, and it is good practice to provide one on request. In some sectors, such as healthcare and auto repair, consumers may have a legal right to an itemized bill, depending on where you operate.",
      },
      {
        q: "How detailed should line items be?",
        a: "Detailed enough that the customer can approve each line without asking a question. Group very small consumables into one line, but keep labor, major parts and separate services distinct.",
      },
      {
        q: "Should I itemize materials markup?",
        a: "You don't usually need to show your markup separately. Most businesses bill materials at their selling price per unit; just make sure the price matches what was quoted or agreed.",
      },
      {
        q: "Do I have to list labor and parts separately?",
        a: "Often it is good practice, and sometimes it is required. Labor and parts can be taxed differently, and some states require itemized repair invoices: California, for example, requires auto repair invoices to list parts and labor separately. Even where it isn't mandatory, separate lines make your tax calculation checkable and reduce customer questions. Check the rules for your trade and location.",
      },
      {
        q: "Can I itemize a fixed-price project without revealing my hourly rate?",
        a: "Yes. Itemize by phase or deliverable instead of by hour, for example Discovery workshop, Homepage design and Development and launch, each with its share of the agreed fee. The client sees what they are paying for, the lines add up to the quoted price, and your internal rates and margins stay private. Match the phase names to your proposal.",
      },
      {
        q: "How do I show a discount on an itemized invoice?",
        a: "Show it either on the line it applies to, as a reduced rate or a separate negative line beneath it, or as a single discount row below the subtotal. Label it clearly, for example 10% loyalty discount. If some items are taxable, the discount usually affects the tax base, but how depends on local rules, so check with your tax authority.",
      },
      {
        q: "Should shipping and handling be separate line items?",
        a: "Yes, list shipping or delivery as its own line rather than hiding it inside product prices. Whether shipping is taxable varies by US state and by country, and in some places separately stating it can change the tax treatment. A separate line also lets the customer see exactly what delivery cost and compare it with your quote.",
      },
      {
        q: "Do I need to attach receipts to itemized expenses?",
        a: "Not always, but many clients ask for them, especially for travel and other reimbursable costs. If your contract says expenses are billed at cost, attaching or offering receipts makes approval faster. Either way, keep copies of every receipt in your own records, because tax authorities may ask to see them as evidence for the expense.",
      },
      {
        q: "Is an itemized receipt the same as an itemized invoice?",
        a: "No. An itemized invoice lists charges and requests payment, while an itemized receipt lists what was bought and confirms it has already been paid. Employees often need itemized receipts for expense claims, and customers may ask for one after paying. Both use the same line-by-line detail, but the receipt shows the payment date and method instead of a due date.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An itemized invoice is an invoice that breaks the total into separate line items, each showing a description, quantity, unit price and line amount, with taxes and fees listed individually. It lets the customer see exactly what they are paying for and approve the bill quickly. Use an itemized invoice whenever a job involves more than one product, service, or labor charge.</p>

<p>This guide explains what belongs on each line, how itemized and summary invoices compare, how detailed to be, and includes a worked example with labor, parts and tax. Our <a href="/invoice-generator">free invoice generator</a> calculates every line total and the grand total automatically, so itemizing takes seconds rather than adding risk.</p>

<h2>What is an itemized invoice?</h2>
<p>Every invoice has line items, but an itemized invoice uses them properly: one line per distinct thing you charge for. A plumber's invoice that says "Repair work: $448.70" is a lump-sum invoice. One that lists labor hours, the faucet, the supply lines and the consumables separately, with tax applied correctly, is itemized.</p>
<p>Itemizing is not about length; it is about clarity. A customer who can see each charge is less likely to query the invoice, and you have a clear record if they do. Vague, bundled descriptions are high on our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> for exactly that reason.</p>
<p>The term "itemized bill" is also used in consumer settings. Hospital patients, car owners and tenants often ask for an itemized statement of charges to check what they are being asked to pay. Some jurisdictions give consumers a right to request one in specific sectors, so if you serve the public, assume that any customer may ask for a line-by-line breakdown and make it easy to provide. If your invoices are already itemized, there is nothing extra to prepare.</p>

<h2>Why itemized invoices get paid faster</h2>
<ul>
<li><strong>Fewer questions.</strong> Accounts payable can match each line to the quote or purchase order without emailing you.</li>
<li><strong>Correct tax.</strong> Where some items are taxable and others aren't, separate lines make the tax calculation visible and checkable.</li>
<li><strong>Easier partial approval.</strong> If one line is disputed, the client can pay the rest while it is resolved.</li>
<li><strong>Better records.</strong> You can see what you actually sell and how much labor jobs really take.</li>
<li><strong>Expectation in some sectors.</strong> Customers in healthcare, <a href="/blog/auto-repair-invoice-template">auto repair</a> and home services often ask for, and may be entitled to, an itemized bill.</li>
</ul>

<h2>What each line item should show</h2>
<table><thead><tr><th>Column</th><th>What to enter</th><th>Example</th></tr></thead><tbody>
<tr><td>Description</td><td>Specific name of the product or service, plus model, size or scope</td><td>Single-handle kitchen faucet, brushed nickel</td></tr>
<tr><td>Item code or date (optional)</td><td>SKU, part number or the date the work was done</td><td>SKU KF-220 / 20 Oct 2026</td></tr>
<tr><td>Quantity</td><td>Number of units, hours or days</td><td>2.5</td></tr>
<tr><td>Unit</td><td>What the quantity measures</td><td>hours, each, sq ft, days</td></tr>
<tr><td>Rate / unit price</td><td>Price per unit before tax</td><td>$85.00</td></tr>
<tr><td>Amount</td><td>Quantity times rate</td><td>$212.50</td></tr>
<tr><td>Tax indicator (where needed)</td><td>Whether the line is taxable</td><td>T / non-taxable</td></tr>
</tbody></table>
<p>Below the lines, show the subtotal, each discount, each tax with its rate and base, any shipping or fees, and the total due.</p>

<h2>Itemized invoice example</h2>
<p>A handyman replaces a kitchen faucet. In this example, local sales tax of 7% applies to materials but not to the separately stated labor. Taxability of labor varies widely by state and service type, so check your own rules.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th><th>Tax</th></tr></thead><tbody>
<tr><td>Labor: remove old faucet, install new faucet and test for leaks</td><td>2.5 hrs</td><td>$85.00</td><td>$212.50</td><td>No</td></tr>
<tr><td>Single-handle kitchen faucet, brushed nickel (KF-220)</td><td>1</td><td>$189.00</td><td>$189.00</td><td>Yes</td></tr>
<tr><td>Braided stainless supply line, 20 inch</td><td>2</td><td>$12.50</td><td>$25.00</td><td>Yes</td></tr>
<tr><td>Plumber's putty and thread seal tape</td><td>1</td><td>$6.75</td><td>$6.75</td><td>Yes</td></tr>
<tr><td colspan="3">Subtotal</td><td>$433.25</td><td></td></tr>
<tr><td colspan="3">Sales tax 7% on taxable materials ($220.75)</td><td>$15.45</td><td></td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$448.70</strong></td><td></td></tr>
</tbody></table>
<p>The customer can see the labor time, every part, and exactly which amount was taxed. To double-check tax on mixed lines like these, use our <a href="/tools/sales-tax-calculator">sales tax calculator</a>, and see <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> for how to present it. Trade-specific layouts are covered in our <a href="/blog/handyman-invoice-template">handyman invoice template</a> guide.</p>

<h2>Itemized vs summary invoice</h2>
<table><thead><tr><th></th><th>Itemized invoice</th><th>Summary (lump-sum) invoice</th></tr></thead><tbody>
<tr><td>Detail</td><td>Each product, service and fee on its own line</td><td>One or a few lines covering the whole job</td></tr>
<tr><td>Best for</td><td>Mixed jobs, hourly work, goods, taxable and non-taxable items</td><td>Fixed-fee projects or retainers agreed in a contract</td></tr>
<tr><td>Client questions</td><td>Fewer</td><td>More, unless the scope is well documented elsewhere</td></tr>
<tr><td>Tax accuracy</td><td>Easy to verify</td><td>Harder when taxable status differs between parts</td></tr>
</tbody></table>
<p>A fixed-fee project can still be lightly itemized by phase, for example "Discovery", "Design" and "Build", which reassures the client without exposing your internal costs. For more scenarios, see our <a href="/blog/invoice-examples">invoice examples</a>.</p>

<h2>How detailed should an itemized invoice be?</h2>
<p>Aim for the level of detail your customer needs to approve the bill, and no more. Some practical rules:</p>
<ul>
<li><strong>Separate labor from materials.</strong> They are often taxed differently and clients want to see both.</li>
<li><strong>Group tiny consumables.</strong> One line for "fasteners and sealants" beats twelve lines of screws.</li>
<li><strong>Show time in consistent units.</strong> Use hours to one or two decimal places, not a mix of minutes and hours. Our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> covers time rounding.</li>
<li><strong>Date lines on longer jobs.</strong> For work across several days, add the date to each labor line.</li>
<li><strong>Match the quote.</strong> Use the same line names as your estimate so the customer can compare them side by side.</li>
<li><strong>Follow sector rules.</strong> Medical practices, for instance, often itemize by service code; see our <a href="/blog/medical-invoice-template">medical invoice template</a> guide.</li>
</ul>

<h2>Itemized invoice line examples by industry</h2>
<p>What counts as a sensible line item depends on what you sell. These patterns work for most businesses:</p>
<table><thead><tr><th>Industry</th><th>Typical line items</th><th>Unit</th></tr></thead><tbody>
<tr><td>Trades and home repair</td><td>Labor, parts by model number, call-out fee, disposal</td><td>Hours, each</td></tr>
<tr><td>Auto repair</td><td>Labor per repair, parts by part number, fluids, shop supplies</td><td>Hours, each, liters or quarts</td></tr>
<tr><td>Consulting and professional services</td><td>Workstreams or tasks by date, expenses at cost</td><td>Hours, days</td></tr>
<tr><td>Creative services</td><td>Deliverables, revision rounds, licensing, stock assets</td><td>Each, project phase</td></tr>
<tr><td>Product sales</td><td>Products by SKU, shipping, handling</td><td>Each, case, kg</td></tr>
<tr><td>Events and catering</td><td>Per-head menu, staff hours, equipment hire, service charge</td><td>Guests, hours, items</td></tr>
</tbody></table>
<p>Expenses you pass on to a client, such as travel or permits, should be on their own lines and labeled as reimbursable, with receipts available if the client asks. That keeps them clearly separate from your fees.</p>
<h3>Itemizing mistakes to avoid</h3>
<ul>
<li><strong>Lines that only make sense to you.</strong> Internal codes like "Task 4B" without a description will be queried.</li>
<li><strong>Rounded totals that don't match rate times quantity.</strong> If the maths on a line is off by a cent, accounts payable may reject the whole invoice.</li>
<li><strong>Hiding fees in other lines.</strong> Surcharges buried in a product price erode trust when the client notices.</li>
<li><strong>Taxing the wrong lines.</strong> Applying tax to the whole subtotal when only some items are taxable overcharges the client.</li>
<li><strong>Too much detail.</strong> Fifty lines of identical screws make the invoice harder, not easier, to approve.</li>
</ul>

<h2>How to create an itemized invoice in 6 steps</h2>
<ol>
<li><strong>Choose a template with clear columns.</strong> The <a href="/invoice-templates/classic">Classic invoice template</a> has a traditional table that suits long lists of items.</li>
<li><strong>Add your details, the client's details and the invoice number and dates.</strong></li>
<li><strong>Add one line per item.</strong> Description, quantity and rate; the generator multiplies them for you.</li>
<li><strong>Order lines logically.</strong> Labor first, then materials, then fees, or follow the order of your quote.</li>
<li><strong>Apply discounts and taxes.</strong> Show each one separately with its rate.</li>
<li><strong>Review and send.</strong> Check every line against your job notes, then download the PDF and send it.</li>
</ol>
<p>An itemized sales invoice is still a sales invoice; if you want the bigger picture of how it fits into your books, read <a href="/blog/what-is-a-sales-invoice">what is a sales invoice</a>.</p>

<h2>Create your itemized invoice now</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, pick the Classic template, add each product, service and fee as its own line, and download a clear itemized invoice your client can approve at a glance.</p>
`,
  },
  {
    slug: "statement-of-account",
    title: "Statement of Account vs Invoice: What It Is & How to Make One",
    description:
      "What a statement of account is, how it differs from an invoice, what to include, and a worked example with payments, credits and an aging summary.",
    category: "invoicing-basics",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["accounts-receivable-aging-report", "overdue-invoice", "credit-note-guide"],
    faqs: [
      {
        q: "What is a statement of account?",
        a: "A statement of account is a summary of all transactions with a customer over a period, including invoices, payments and credit notes, ending with the balance they currently owe.",
      },
      {
        q: "Is a statement of account the same as an invoice?",
        a: "No. An invoice requests payment for a specific sale, while a statement summarizes many invoices and payments. Customers normally pay against invoices, using the statement to check that their records match yours.",
      },
      {
        q: "How often should I send statements of account?",
        a: "Monthly is the most common schedule, usually at month end. Businesses with only a few transactions per customer may send them quarterly or only when an account has overdue items.",
      },
      {
        q: "Can a customer pay from a statement?",
        a: "Some do, especially when they have several small invoices. Ask them to quote the invoice numbers they are paying so you can apply the payment correctly.",
      },
      {
        q: "Is a statement of account a tax document?",
        a: "Generally no. VAT or GST is charged and reclaimed on the underlying invoices and credit notes, not on the statement. Check local rules with your accountant if you're unsure.",
      },
      {
        q: "What is the difference between a statement of account and an aging report?",
        a: "A statement of account is sent to one customer and lists their transactions and balance. An accounts receivable aging report is an internal report covering all customers, grouping unpaid amounts by how long they are overdue. The aging summary on a statement is that same breakdown for a single customer, which is why the two should always agree.",
      },
      {
        q: "Should a statement of account include late fees or interest?",
        a: "Only charges already supported by a document. If you charge agreed late fees or interest, issue an invoice or debit note for them first, then let that document appear on the statement like any other transaction. Adding a new charge directly to a statement, with no underlying document, makes it hard for the customer to reconcile and easy to dispute.",
      },
      {
        q: "Can I make a statement of account in Excel or Google Sheets?",
        a: "Yes. Use columns for date, type, reference, charges, credits and balance. Put the opening balance in the first balance cell, then use a running balance formula such as =F2+D3-E3 and fill it down. Add the due date of each invoice in another column so you can calculate the aging buckets from the due date, not the invoice date.",
      },
      {
        q: "What is a balance confirmation request?",
        a: "It is a request, often from a customer's auditors, asking you to confirm the balance they owe you at a certain date, usually the end of their financial year. Reply with a statement of account for that date and explain any differences, such as payments in transit. Prompt, accurate answers help their audit and protect your own records.",
      },
      {
        q: "Should I send a statement to a customer with a zero balance?",
        a: "It is optional. Many businesses skip zero-balance statements during the year to avoid noise, but sending one at year end, or on request, confirms that both sets of records agree. It can also surface problems early, such as a payment you applied that the customer still shows as outstanding in their own ledger.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A statement of account is a summary document that lists every invoice, payment and credit for one customer over a period, with a running balance and the total currently owed. Unlike an invoice, it doesn't bill for new work; it reconciles what has already been billed and paid. Businesses usually send one monthly to customers who buy on credit.</p>

<p>This guide compares a statement of account with an invoice, lists what to include, shows a worked example with an aging summary, and explains when and how to send one. The invoices themselves can be created in our <a href="/invoice-generator">free invoice generator</a>; the statement then pulls those invoices together.</p>

<h2>Statement of account vs invoice</h2>
<table><thead><tr><th></th><th>Invoice</th><th>Statement of account</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Requests payment for a specific sale</td><td>Summarizes all activity and the balance owed</td></tr>
<tr><td>Covers</td><td>One transaction or billing period</td><td>Many invoices, payments and credits</td></tr>
<tr><td>Creates a new amount owed?</td><td>Yes</td><td>No, it only reports existing amounts</td></tr>
<tr><td>Tax role</td><td>Basis for charging and reclaiming VAT or GST</td><td>Usually none</td></tr>
<tr><td>Numbering</td><td>Unique sequential invoice number</td><td>Typically identified by customer and statement date</td></tr>
<tr><td>Timing</td><td>When goods or services are supplied</td><td>Periodically, often month end</td></tr>
<tr><td>Main reader</td><td>Accounts payable, to approve and pay</td><td>Accounts payable, to reconcile records</td></tr>
</tbody></table>
<p>Think of an invoice as a single entry and the statement of account as the ledger page those entries sit on. If you are new to the basic document, see <a href="/blog/what-is-an-invoice">what is an invoice</a>.</p>

<h2>Why send a statement of account?</h2>
<ul>
<li><strong>Catch mismatches early.</strong> If the customer never received an invoice, or applied a payment to the wrong one, the statement shows it.</li>
<li><strong>Prompt payment of older items.</strong> Overdue invoices are visible in one place, which often triggers payment without a separate reminder.</li>
<li><strong>Reduce disputes.</strong> A clear running balance makes it obvious how the amount owed was reached.</li>
<li><strong>Support year-end and audits.</strong> Customers and auditors often request statements to confirm balances.</li>
</ul>

<h2>What to include on a statement of account</h2>
<ul>
<li>The title "Statement of Account" and the statement date</li>
<li>The period covered, for example 1 September to 22 October 2026</li>
<li>Your business details and the customer's name, address and account number</li>
<li>The opening balance at the start of the period</li>
<li>Each transaction: date, type (invoice, payment, credit note), reference number, amount and running balance</li>
<li>The closing balance, clearly labeled as the amount due</li>
<li>An aging summary showing how much is current and how much is overdue by age</li>
<li>Payment instructions and a contact for queries</li>
</ul>
<p>Credit notes appear as reductions with their own references; our <a href="/blog/credit-note-guide">credit note guide</a> explains how those are issued in the first place.</p>

<h2>Statement of account example</h2>
<p>A print shop sends a statement to a marketing agency on 22 October 2026. The agency buys on Net 14 terms.</p>
<table><thead><tr><th>Date</th><th>Type</th><th>Reference</th><th>Charges</th><th>Credits</th><th>Balance</th></tr></thead><tbody>
<tr><td>1 Sep 2026</td><td>Opening balance</td><td>INV-0101 (dated 20 Aug)</td><td></td><td></td><td>$1,200.00</td></tr>
<tr><td>5 Sep 2026</td><td>Payment</td><td>ACH, ref INV-0101</td><td></td><td>$1,200.00</td><td>$0.00</td></tr>
<tr><td>15 Sep 2026</td><td>Invoice</td><td>INV-0118</td><td>$2,400.00</td><td></td><td>$2,400.00</td></tr>
<tr><td>30 Sep 2026</td><td>Invoice</td><td>INV-0124</td><td>$950.00</td><td></td><td>$3,350.00</td></tr>
<tr><td>3 Oct 2026</td><td>Credit note</td><td>CN-007 (against INV-0124)</td><td></td><td>$150.00</td><td>$3,200.00</td></tr>
<tr><td>10 Oct 2026</td><td>Payment</td><td>ACH, ref INV-0118</td><td></td><td>$2,400.00</td><td>$800.00</td></tr>
<tr><td>15 Oct 2026</td><td>Invoice</td><td>INV-0131</td><td>$1,600.00</td><td></td><td>$2,400.00</td></tr>
<tr><td colspan="5"><strong>Balance due at 22 Oct 2026</strong></td><td><strong>$2,400.00</strong></td></tr>
</tbody></table>
<h3>Aging summary</h3>
<table><thead><tr><th>Current</th><th>1–30 days overdue</th><th>31–60 days</th><th>61–90 days</th><th>Over 90 days</th><th>Total</th></tr></thead><tbody>
<tr><td>$1,600.00</td><td>$800.00</td><td>$0.00</td><td>$0.00</td><td>$0.00</td><td>$2,400.00</td></tr>
</tbody></table>
<p>INV-0131 (dated 15 October) isn't due until 29 October, so it is current. The $800.00 remaining on INV-0124 after the credit note was due on 14 October and is 8 days overdue. The aging buckets add up to the closing balance, which is the check every statement should pass. This is the same breakdown an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> shows across all customers.</p>

<h2>Open item vs balance forward statements</h2>
<h3>Open item statement</h3>
<p>Lists only the invoices that are still unpaid, with their dates, amounts and ages. It is short and easy to act on, and suits businesses whose customers pay invoice by invoice.</p>
<h3>Balance forward statement</h3>
<p>Starts with the previous period's closing balance and lists all activity in the period, as in the example above. It suits customers with many transactions, such as trade accounts, and makes the history easier to follow.</p>
<h3>Statements you receive from suppliers</h3>
<p>The same document works in the other direction. When your own suppliers send you a statement of account, compare it with your unpaid bills before the next payment run. Check that every invoice listed is one you have received and approved, that your payments have been applied to the right invoices, and that any credit notes you were promised appear. Raising discrepancies early prevents a supplier from putting your account on hold over an invoice you never saw.</p>
<p>Either format works, as long as you are consistent and the closing balance matches your receivables ledger. Our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a> explains how to keep that ledger accurate.</p>

<h2>How to create a statement of account in 6 steps</h2>
<ol>
<li><strong>Pick the period.</strong> Usually the calendar month, ending on the last day or your statement date.</li>
<li><strong>Find the opening balance.</strong> Use the closing balance from the previous statement or your ledger.</li>
<li><strong>List all transactions in date order.</strong> Every invoice, payment and credit note for that customer in the period.</li>
<li><strong>Calculate the running balance.</strong> Add charges, subtract credits and payments, line by line.</li>
<li><strong>Add the aging summary.</strong> Split the closing balance by how many days each open item is past its due date.</li>
<li><strong>Send it with payment details.</strong> Attach copies of any overdue invoices so the customer can process them immediately.</li>
</ol>
<p>Most accounting software produces statements automatically from your invoices. If you invoice from a generator, a simple spreadsheet works well; reliable basic records, covered in our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> guide, make it a five-minute job. Keep the invoice numbers on the statement identical to those on your invoices, using the format from the <a href="/tools/invoice-number-generator">invoice number generator</a> if you need one.</p>

<h2>Reconciling differences and avoiding statement mistakes</h2>
<p>When a customer receives your statement of account, their accounts payable team compares it line by line with their own supplier ledger. Differences usually come from one of a few causes:</p>
<ul>
<li><strong>Timing.</strong> A payment sent on the 30th may not reach your account until the 2nd, so it appears on their records but not yours.</li>
<li><strong>Missing invoices.</strong> An invoice went to the wrong inbox and was never entered.</li>
<li><strong>Misapplied payments.</strong> The customer paid INV-0124 but you allocated the money to INV-0118, or the other way round.</li>
<li><strong>Unprocessed credits.</strong> A credit note was issued but not yet entered on their side.</li>
<li><strong>Disputed items.</strong> They are holding back an invoice while a query is open.</li>
</ul>
<p>When a customer queries a statement, ask them to list the items that don't match, then resolve each with a document: a copy invoice, proof of payment, or a credit note. Never adjust a balance on the statement without a supporting transaction in your books.</p>
<p>On your side, the most common statement mistakes are:</p>
<ul>
<li>An opening balance that doesn't match the previous statement's closing balance.</li>
<li>Running balances that don't add up, usually after a manual edit.</li>
<li>Aging buckets calculated from the invoice date instead of the due date, which makes accounts look more overdue than they are.</li>
<li>Omitting reference numbers, so the customer can't match lines to documents.</li>
<li>Sending statements so often, or so irregularly, that customers stop reading them.</li>
</ul>

<h2>When to send a statement of account</h2>
<ul>
<li><strong>Monthly</strong> for customers on credit terms with regular orders.</li>
<li><strong>When an account has overdue items</strong>, alongside your normal <a href="/blog/payment-reminder-emails">payment reminder emails</a>.</li>
<li><strong>At year end</strong> or on request, to confirm balances for audits.</li>
<li><strong>Before stopping credit</strong>, so the customer sees exactly what must be cleared.</li>
</ul>
<p>If a statement shows invoices that are seriously late, follow the steps in our guide to handling an <a href="/blog/overdue-invoice">overdue invoice</a>.</p>

<h2>Create the invoices behind your statement</h2>
<p>A statement is only as clean as the invoices it summarizes. Create consistent, numbered invoices in the <a href="/invoice-generator">invoice generator</a> using the <a href="/invoice-templates/corporate">Corporate invoice template</a>, and your monthly statements will reconcile without surprises.</p>
`,
  },
  {
    slug: "blank-invoice-template",
    title: "Blank Invoice Template: Free Printable Layout & How to Fill It",
    description:
      "Get a free blank invoice template you can print or fill in online. See the fields to include, how to complete it by hand, and print tips for clean results.",
    category: "design-templates",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-fill-out-an-invoice", "invoice-pdf-print-checklist", "best-invoice-templates"],
    faqs: [
      {
        q: "What is a blank invoice template?",
        a: "A blank invoice template is an invoice layout with labeled but empty fields for your business details, client details, line items and totals, ready to fill in by hand or on screen.",
      },
      {
        q: "Is a handwritten invoice legal?",
        a: "In most places, yes, as long as it contains the information your tax rules require and is legible. If you are registered for VAT or GST, check that your handwritten invoice includes every mandatory field.",
      },
      {
        q: "Can I fill in a blank invoice template online?",
        a: "Yes. An online invoice generator is essentially a fillable blank template that also calculates totals, so you avoid arithmetic mistakes and get a clean PDF.",
      },
      {
        q: "What paper size should I print my invoice on?",
        a: "Use US Letter in the United States and Canada and A4 in most other countries. Check that your PDF matches the paper size your clients use so nothing is cropped.",
      },
      {
        q: "How do I number invoices on a blank template?",
        a: "Write the next number in your sequence on every invoice and never reuse or skip numbers. Keep a log of issued numbers, or use an invoice number generator to set a consistent format.",
      },
      {
        q: "Should I use carbonless invoice books for handwritten invoices?",
        a: "They are a good option. Carbonless duplicate or triplicate books create a copy as you write, so the client gets the original and you keep a matching record. Many come pre-numbered, which helps you avoid skipped or repeated numbers. Office supply stores and printers sell generic books and can usually print your business details on custom ones.",
      },
      {
        q: "How do I make a fillable PDF invoice template?",
        a: "Create your layout in a word processor, export it to PDF, then open it in a PDF editor that can add form fields and place a text field in each blank. Some editors can add simple calculations, but behavior varies between PDF readers. If you want totals calculated reliably, an online invoice generator is often simpler than building a fillable form.",
      },
      {
        q: "Can I scan a handwritten invoice and email it to a client?",
        a: "Yes. Most phones can scan documents into a PDF, for example through the iPhone Notes app or the scan option in Google Drive on Android. Scan in good light, check that every number is readable and send the PDF rather than a photo. Keep the paper original or carbon copy, and file the scan with your records.",
      },
      {
        q: "What should I do if I make a mistake writing a blank invoice?",
        a: "If you haven't given it to the client, don't scribble over it or use correction fluid. Write VOID across the sheet, keep it in your book so the number stays accounted for, and start again on the next numbered invoice. If the client already has it, issue a credit note or a corrected invoice that references the original.",
      },
      {
        q: "Should I put my Social Security number on a blank invoice template?",
        a: "Avoid it if you can. Printing an SSN on every invoice exposes you to identity theft. US sole proprietors can apply for a free Employer Identification Number (EIN) from the IRS and use that on invoices and tax forms instead. Only pre-print a tax ID if your clients or tax rules require it to appear on the invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A blank invoice template is an empty, pre-formatted invoice with labeled spaces for your business details, client details, invoice number, dates, line items, totals and payment terms. You can print it and fill it in by hand, or fill it in on screen and download a PDF. A good printable template keeps the layout simple, leaves enough room for line items and works in black and white.</p>

<p>Below you will find the fields every blank invoice should have, a layout you can copy, how to fill it in by hand without mistakes, and tips for printing. If you would rather fill in the blanks on screen and have the maths done for you, our <a href="/invoice-generator">free invoice generator</a> works like a fillable blank invoice that exports to PDF.</p>

<h2>Who uses a blank invoice template?</h2>
<p>Blank, printable invoices are still common where work happens away from a desk:</p>
<ul>
<li>Tradespeople and mobile service providers who write up the bill on site</li>
<li>Market stall holders, craft sellers and event vendors</li>
<li>Small businesses with poor connectivity at the point of sale</li>
<li>Anyone who wants a paper backup when a device isn't available</li>
</ul>
<p>The trade-off is manual work. Every line total and tax amount is calculated by hand, and legibility depends on your handwriting. That is why many people use a printed blank invoice only as a fallback and a digital one as their main copy.</p>
<p>A blank invoice template is also a good starting point if you have never invoiced before. Looking at an empty layout shows you every field you will need to gather, from your client's billing address to your bank details, before you sit down to bill. Once you know what goes where, you can decide whether to keep filling in paper copies, build your own file, or switch to a generator.</p>
<p>Whichever route you choose, the rules don't change: each invoice needs a unique number, a clear due date, accurate totals and the information your tax rules require. A blank form makes it easy to forget one of these under time pressure, so it helps to keep a short checklist printed on the back of your invoice pad or saved next to your template file. Ticking through it takes seconds and catches the errors that would otherwise delay payment.</p>

<h2>Fields every blank invoice template needs</h2>
<table><thead><tr><th>Section</th><th>Fields</th><th>Tip</th></tr></thead><tbody>
<tr><td>Header</td><td>The word "Invoice", your logo, business name, address, phone, email, tax ID</td><td>Pre-print these so you never write them by hand</td></tr>
<tr><td>Invoice details</td><td>Invoice number, invoice date, due date, PO number</td><td>Leave a clearly boxed space for the number</td></tr>
<tr><td>Bill to</td><td>Client name, company, address, email</td><td>Allow three to four lines</td></tr>
<tr><td>Line items</td><td>Description, quantity, rate, amount</td><td>At least 8–10 rows with generous height</td></tr>
<tr><td>Totals</td><td>Subtotal, discount, tax rate and amount, shipping, total due</td><td>Right-align so figures line up</td></tr>
<tr><td>Payment</td><td>Terms, accepted methods, bank details or payment link</td><td>Pre-print your bank details</td></tr>
<tr><td>Footer</td><td>Notes, thank-you message, signature</td><td>Keep it short</td></tr>
</tbody></table>
<p>If you are VAT or GST registered, add any extra mandatory fields your tax rules require, such as the customer's tax number or the date of supply.</p>

<h2>How to fill out a blank invoice by hand</h2>
<ol>
<li><strong>Write the next invoice number.</strong> Never skip or repeat numbers. If you don't have a format yet, the <a href="/tools/invoice-number-generator">invoice number generator</a> can create one, such as INV-2026-0058.</li>
<li><strong>Enter the dates.</strong> Invoice date and a real due date, written in full, for example "21 November 2026".</li>
<li><strong>Complete the client details.</strong> Use the client's legal or trading name and full billing address.</li>
<li><strong>Write each line item.</strong> One product or service per row, with quantity and rate.</li>
<li><strong>Calculate line totals.</strong> Multiply quantity by rate for each line and write the result in the amount column.</li>
<li><strong>Add the totals.</strong> Sum the lines, subtract any discount, add tax and shipping, and write the total due. Check the arithmetic twice.</li>
<li><strong>Sign and copy.</strong> Give the client the original and keep a copy, using carbonless duplicate pads or a photo.</li>
</ol>
<p>Our full walkthrough on <a href="/blog/how-to-fill-out-an-invoice">how to fill out an invoice</a> covers each field in more depth.</p>

<h2>Worked example: a filled-in blank invoice</h2>
<p>A mobile bike mechanic completes a service at a customer's home. Local sales tax is 6% in this example and applies to the whole invoice; your rules may differ.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Full bike service, including gears and brakes</td><td>3</td><td>$45.00</td><td>$135.00</td></tr>
<tr><td>Replacement tire, 700x28c</td><td>2</td><td>$30.00</td><td>$60.00</td></tr>
<tr><td>Inner tube, 700c</td><td>4</td><td>$15.00</td><td>$60.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$255.00</td></tr>
<tr><td colspan="3">Sales tax 6%</td><td>$15.30</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$270.30</strong></td></tr>
</tbody></table>
<p>Three bikes serviced, two tires and four tubes: every figure can be checked at a glance. When you fill these out by hand, write the rate and amount columns neatly and right-aligned, because that is where mistakes hide.</p>

<h2>Printable vs fillable vs generated</h2>
<table><thead><tr><th>Option</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Printed blank template</td><td>Works anywhere, no device needed</td><td>Manual maths, handwriting, physical storage</td></tr>
<tr><td>Fillable document or spreadsheet</td><td>Free, editable, reusable</td><td>Formulas and numbering can break when copied</td></tr>
<tr><td>Online invoice generator</td><td>Automatic totals, clean PDF, consistent design</td><td>Needs a browser</td></tr>
</tbody></table>
<p>If you prefer to keep a file on your computer, our guides on <a href="/blog/how-to-make-an-invoice-in-word">how to make an invoice in Word</a> and <a href="/blog/how-to-make-an-invoice-in-excel">how to make an invoice in Excel</a> show how to build a reusable blank template, including the formulas that keep totals correct.</p>

<h2>Choosing a blank invoice design</h2>
<p>For a blank, printable layout, plain beats decorative. Heavy color blocks waste ink and make handwriting hard to read. Good starting points:</p>
<ul>
<li><a href="/invoice-templates/minimal">Minimal</a>: lots of white space and thin rules, ideal for writing on.</li>
<li><a href="/invoice-templates/mono">Mono</a>: black and white only, so it prints perfectly on any office printer.</li>
<li>Classic and Nordic: traditional, structured tables that make columns easy to follow.</li>
</ul>
<p>You can compare every layout in our <a href="/invoice-templates">invoice template gallery</a>, and our roundup of the <a href="/blog/best-invoice-templates">best invoice templates</a> explains which designs suit which businesses. For more on readable layouts, see these <a href="/blog/professional-invoice-design-tips">professional invoice design tips</a>.</p>

<h2>What to pre-print and what to leave blank</h2>
<p>A blank invoice template works best when it is only partly blank. Anything that never changes should be printed, so you only write what is unique to each job:</p>
<table><thead><tr><th>Pre-print</th><th>Leave blank</th></tr></thead><tbody>
<tr><td>Business name, logo, address and contact details</td><td>Invoice number (or pre-number the pad)</td></tr>
<tr><td>Tax ID or registration number</td><td>Invoice date and due date</td></tr>
<tr><td>Column headings for description, quantity, rate and amount</td><td>Client name and address</td></tr>
<tr><td>Bank details, payment link or QR code</td><td>Line items and totals</td></tr>
<tr><td>Standard payment terms and late-fee policy</td><td>Notes specific to the job</td></tr>
</tbody></table>
<p>Pre-printing your payment details is especially useful: a customer who has the account number in front of them can pay the same day.</p>
<h3>Keeping records of paper invoices</h3>
<p>Paper invoices are easy to lose and hard to search. To keep your records usable:</p>
<ul>
<li>Use duplicate or triplicate carbonless pads so you always keep a copy.</li>
<li>Photograph or scan every invoice the same day and store it in a dated folder.</li>
<li>Log each invoice number, client, amount and due date in a simple spreadsheet so you can track what is unpaid.</li>
<li>Keep voided sheets rather than throwing them away, marked "VOID", so your number sequence has no unexplained gaps.</li>
<li>Store originals for as long as your tax authority requires.</li>
</ul>

<h2>Printing tips for a clean blank invoice</h2>
<ul>
<li><strong>Match the paper size.</strong> US Letter in North America, A4 almost everywhere else.</li>
<li><strong>Print at 100% scale.</strong> "Fit to page" can shrink fields and misalign boxes.</li>
<li><strong>Test in grayscale.</strong> Light gray lines may disappear on cheap printers.</li>
<li><strong>Leave writing space.</strong> Rows at least 8–10 mm tall make handwriting legible.</li>
<li><strong>Print in batches.</strong> Pre-number a pad so every sheet has a unique invoice number.</li>
</ul>
<p>Our <a href="/blog/invoice-pdf-print-checklist">invoice PDF print checklist</a> covers margins, fonts and color in more detail.</p>

<p>If you want something you can fill in quickly, compare a <a href="/blog/simple-invoice-template">simple invoice template</a> with a <a href="/blog/invoice-template-pdf">printable invoice template PDF</a>.</p>

<h2>Fill in your blank invoice online now</h2>
<p>Skip the calculator and the handwriting. Open the <a href="/invoice-generator">invoice generator</a>, choose the Minimal or Mono layout, fill in the blanks and download a print-ready PDF in a couple of minutes.</p>
`,
  },
  {
    slug: "how-to-correct-an-invoice",
    title: "How to Correct an Invoice Mistake: Credit Notes, Reissues & More",
    description:
      "How to correct an invoice mistake the right way: when to void, credit or reissue, how to fix overcharges and undercharges, with an example and client email.",
    category: "guides",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["credit-note-guide", "debit-note-vs-credit-note", "how-to-void-an-invoice"],
    faqs: [
      {
        q: "Can I just edit an invoice I already sent?",
        a: "It's best not to. Once an invoice has been sent or recorded, editing it breaks your audit trail and can confuse the client's records. Issue a credit note and, if needed, a corrected invoice instead.",
      },
      {
        q: "Should a corrected invoice have the same invoice number?",
        a: "Generally no. A replacement invoice gets a new number from your sequence and references the original. Some businesses add a suffix such as -R1, but check that your accounting and tax rules allow it.",
      },
      {
        q: "How do I correct an invoice that has already been paid?",
        a: "If you overcharged, issue a credit note and either refund the difference or apply it to the next invoice. If you undercharged, issue a supplementary invoice or debit note for the difference with a brief explanation.",
      },
      {
        q: "How do I fix a small typo on an invoice?",
        a: "If the typo doesn't affect amounts, tax or the legal parties, such as a misspelled street name, many businesses simply resend a corrected copy with a note. If it affects anything financial or tax-related, use a credit note and reissue.",
      },
      {
        q: "Do I need to tell my client about an invoice correction?",
        a: "Yes. Send a short email explaining the error, attaching the credit note and any replacement invoice, and stating the new amount due and due date.",
      },
      {
        q: "Is there a time limit for correcting an invoice?",
        a: "There is no universal deadline, but correcting quickly is best, and tax rules may set limits. In India, for example, GST credit notes generally must be declared by 30 November following the end of the financial year, or when the annual return is filed if earlier. Other countries have their own rules for correcting tax in past periods, so ask your accountant.",
      },
      {
        q: "Can I correct an overcharge by deducting it from my next invoice?",
        a: "Some businesses do, with the client's agreement, but it makes both sets of records harder to follow. The cleaner route is a credit note against the original invoice, which can then be applied to the next invoice if the client prefers. In VAT and GST systems a proper credit note is often required to adjust the tax, so check before netting amounts.",
      },
      {
        q: "Does a corrected invoice restart the payment terms?",
        a: "It depends on the fix. With a partial credit note, the original due date usually still applies to the reduced balance. With a full credit note and a new replacement invoice, many businesses give fresh terms from the new invoice date, which avoids arguments about lateness. Whatever you choose, state the due date clearly in your correction email.",
      },
      {
        q: "What if the client paid the wrong amount, but my invoice was correct?",
        a: "Then the invoice doesn't need correcting. Record the payment as received and handle the difference. If they underpaid, send a polite note showing the balance still due on the same invoice number. If they overpaid, refund the excess or, with their agreement, hold it as a credit toward the next invoice, and document whichever you choose.",
      },
      {
        q: "How do I correct an e-invoice in a country with mandatory e-invoicing?",
        a: "Usually through the same system that issued it. Where e-invoicing is mandatory, such as India's IRN system or Saudi Arabia's ZATCA framework, you generally can't edit a cleared invoice; you issue an electronic credit or debit note instead. India allows an e-invoice to be cancelled only within a short window, generally 24 hours. Check your tax authority's current rules.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To correct an invoice, don't edit or delete the original once it has been sent. If you overcharged or billed the wrong client, issue a credit note that references the original invoice and, if needed, a new corrected invoice with its own number. If you undercharged, issue a supplementary invoice or debit note for the difference. Then email the client with a short explanation and the updated amount due.</p>

<p>This guide shows how to correct an invoice for each type of mistake, with a decision table, step-by-step process, worked example and an email you can adapt. Corrected and replacement invoices can be created in our <a href="/invoice-generator">free invoice generator</a> in a few minutes.</p>

<h2>Why you shouldn't just edit the original invoice</h2>
<p>An invoice is a financial record. Once your client has received it, they may have entered it into their accounts payable system, scheduled payment or reclaimed tax on it. If you quietly change the amount and resend it with the same number, the two sets of records no longer match, and tax authorities and auditors expect to see a clear trail of what was issued and how it was adjusted.</p>
<p>The safe principle is simple: originals stay as issued; corrections are new documents that reference them. That protects you in an audit, keeps your <a href="/blog/invoice-numbering-system">invoice numbering system</a> gap-free, and gives your client a clear explanation of what changed.</p>

<h2>How to correct an invoice: choose the right fix</h2>
<table><thead><tr><th>Situation</th><th>Correct fix</th></tr></thead><tbody>
<tr><td>Draft not yet sent or recorded anywhere</td><td>Edit the draft freely before sending</td></tr>
<tr><td>Sent in error, client has not recorded it, no payment</td><td>Void it, if your process and tax rules allow, and keep the voided record</td></tr>
<tr><td>Overcharge: wrong price, quantity or extra line</td><td>Partial credit note for the difference</td></tr>
<tr><td>Undercharge: missing line or price too low</td><td>Supplementary invoice or debit note for the difference</td></tr>
<tr><td>Wrong client, wrong legal entity or several errors</td><td>Full credit note, then a new corrected invoice</td></tr>
<tr><td>Wrong tax rate or missing tax number</td><td>Full credit note and reissue with correct tax details</td></tr>
<tr><td>Cosmetic typo that doesn't affect amounts, tax or parties</td><td>Resend a corrected copy with a note; keep both versions</td></tr>
</tbody></table>
<p>For the void route, see our guide on <a href="/blog/how-to-void-an-invoice">how to void an invoice</a>. For the difference between the two adjustment documents, read <a href="/blog/debit-note-vs-credit-note">debit note vs credit note</a>.</p>

<h2>Step-by-step: how to correct an invoice mistake</h2>
<h3>Step 1: Identify exactly what is wrong</h3>
<p>Compare the invoice against the contract, quote, purchase order and your time or delivery records. Note the original invoice number, date, the incorrect value and the correct value.</p>
<h3>Step 2: Decide the fix</h3>
<p>Use the table above. If you are unsure, a full credit note plus a clean replacement invoice is usually the clearest route for everyone.</p>
<h3>Step 3: Issue the credit note or supplementary invoice</h3>
<p>Give it its own number in the right sequence, reference the original invoice number and date, state the reason, and show the net amount and any tax being adjusted. Our <a href="/blog/credit-note-guide">credit note guide</a> lists every field a credit note should carry.</p>
<h3>Step 4: Issue the replacement invoice if needed</h3>
<p>Create a new invoice with a new number, write "Replaces invoice INV-XXXX" in the notes, and set a fair due date. Giving the client the original payment period from the new date avoids arguments about lateness.</p>
<h3>Step 5: Tell the client</h3>
<p>Send both documents together with a short explanation (see the email template below).</p>
<h3>Step 6: Update your records</h3>
<p>Record the credit note and any new invoice in your books, keep all versions together, and file them for as long as your tax rules require; our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> covers typical retention periods.</p>

<h2>Worked example: correcting an overbilled invoice</h2>
<p>A consultant sends Invoice INV-2026-0412 for 40 hours at $95.00, a total of $3,800.00. The client points out that the timesheet shows 36 hours. The correct amount is 36 × $95.00 = $3,420.00, so the overcharge is 4 × $95.00 = $380.00.</p>
<table><thead><tr><th>Document</th><th>Description</th><th>Amount</th></tr></thead><tbody>
<tr><td>INV-2026-0412 (original, unchanged)</td><td>Consulting, 40 hours at $95.00</td><td>$3,800.00</td></tr>
<tr><td>CN-2026-0009</td><td>Credit for 4 hours billed in error at $95.00, against INV-2026-0412</td><td>−$380.00</td></tr>
<tr><td colspan="2"><strong>Net amount due</strong></td><td><strong>$3,420.00</strong></td></tr>
</tbody></table>
<p>If the client had already paid $3,800.00, the consultant would either refund $380.00 or, with the client's agreement, apply the credit to the next invoice. If tax had been charged, the credit note would also reverse the tax on the $380.00.</p>
<p>The reverse case works the same way. If the consultant had billed only 32 hours by mistake, they would issue a supplementary invoice for 4 hours, or $380.00, referencing INV-2026-0412.</p>

<h2>Quick fixes for other common invoice errors</h2>
<p>The same principle applies to every kind of mistake, but the paperwork differs slightly:</p>
<ul>
<li><strong>Wrong client name or address.</strong> If only the spelling of the address is off, resend a corrected copy with a note. If you billed the wrong legal entity, issue a full credit note to that entity and a new invoice to the right one.</li>
<li><strong>Missing PO number.</strong> Many businesses resend the invoice with the PO number added and a note, as long as amounts and tax are unchanged. If the client's system has already rejected it, ask whether they prefer a reissue.</li>
<li><strong>Wrong due date.</strong> Confirm the correct date with the client by email and resend; amounts are unaffected, so a credit note is usually unnecessary.</li>
<li><strong>Duplicate invoice sent twice.</strong> Void or credit the duplicate, depending on whether the client has recorded it, and confirm which number they should pay.</li>
<li><strong>Wrong currency.</strong> Treat it as a financial error: full credit note and reissue in the correct currency.</li>
<li><strong>Discount left off.</strong> Issue a partial credit note for the discount amount, referencing the agreement that granted it.</li>
</ul>
<p>Whatever the fix, act quickly. An error spotted by the client before you do costs some goodwill; one left uncorrected for weeks delays payment and makes the eventual correction harder to explain. If the client's finance team has a preferred process for corrections, such as always requiring a full credit note and reissue, follow it; it is the fastest route to being paid.</p>

<h2>Email template for an invoice correction</h2>
<blockquote>
<p><strong>Subject:</strong> Correction to invoice INV-2026-0412: revised amount $3,420.00</p>
<p>Hi [Client name],</p>
<p>Thanks for flagging the hours on invoice INV-2026-0412. You're right: the timesheet shows 36 hours, not 40. I've attached credit note CN-2026-0009 for $380.00, which brings the amount due to $3,420.00.</p>
<p>The payment due date remains [date]. Apologies for the error, and let me know if you need anything else to process this.</p>
<p>Best regards,</p>
<p>[Your name]</p>
</blockquote>
<p>Keep the tone factual and brief. If the client raised the issue as a complaint, acknowledge it promptly; our guide on resolving an <a href="/blog/invoice-dispute">invoice dispute</a> covers longer disagreements.</p>

<h2>Correcting tax errors</h2>
<p>Tax mistakes need extra care because your client may already have reclaimed the tax:</p>
<ul>
<li><strong>Wrong VAT or GST rate:</strong> usually a full credit note and a reissued invoice, so both sides can correct their tax returns.</li>
<li><strong>Charged tax when not registered:</strong> you generally can't keep tax you weren't entitled to charge; credit it and reissue without tax.</li>
<li><strong>Missing tax registration numbers:</strong> the client may not be able to reclaim tax until they receive a valid invoice.</li>
<li><strong>Errors found after filing a return:</strong> there are often specific rules for correcting previous periods.</li>
</ul>
<p>Rules differ by country, so confirm the treatment with your tax authority or accountant before correcting tax on a filed period.</p>

<h2>How to prevent invoice mistakes</h2>
<ul>
<li>Use a template or generator with automatic line and tax totals.</li>
<li>Check hours, quantities and rates against timesheets or delivery notes before sending.</li>
<li>Copy client legal names and PO numbers from the purchase order, not from memory.</li>
<li>Use a consistent numbering format, such as one from the <a href="/tools/invoice-number-generator">invoice number generator</a>.</li>
<li>Run through a short pre-send checklist every time.</li>
</ul>
<p>Our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> covers the errors that cause most corrections.</p>

<h2>Issue your corrected invoice now</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, choose the clear <a href="/invoice-templates/slate">Slate invoice template</a>, reference the original invoice in the notes and download your corrected PDF ready to send with your credit note.</p>
`,
  },
];
