import type { PostDraft } from "../blog";

export const TEMPLATES_2026_C_POSTS: PostDraft[] = [
  {
    slug: "packing-list-template",
    title: "Packing List Template (Free, With Fields + Example)",
    description:
      "Free packing list template guide: every field to include, a filled-in example, how it differs from an invoice, and how to use it for export shipments.",
    category: "design-templates",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["packing-slip-vs-invoice", "commercial-invoice-template", "delivery-note-template"],
    faqs: [
      {
        q: "Is a packing list the same as a packing slip?",
        a: "They are close and the terms are often used interchangeably. A packing slip usually travels inside a domestic parcel and lists the items for the customer to check. A packing list is typically more detailed and used for freight and export shipments, adding package counts, dimensions, weights and marks so carriers, freight forwarders and customs officers can identify each package. Many small businesses use one document for both purposes.",
      },
      {
        q: "Does a packing list show prices?",
        a: "Usually not. A packing list describes what is physically in the shipment: items, quantities, packages, weights and dimensions. Prices, taxes and payment terms belong on the invoice or commercial invoice. Leaving prices off is useful when goods go to a different person than the buyer, such as a gift recipient or a customer of a reseller who drop ships the order.",
      },
      {
        q: "Is a packing list required for international shipping?",
        a: "It is not always legally required, but it is a standard export document and many freight forwarders, carriers, banks under letters of credit and customs authorities expect one. It helps customs match the physical goods to the commercial invoice and can speed inspections. Check the destination country's requirements and your forwarder's instructions before you ship.",
      },
      {
        q: "Who prepares the packing list?",
        a: "The seller or shipper normally prepares it, because they know exactly what was packed in each carton or pallet. In larger operations the warehouse generates it from the order system when the order is picked and packed. A freight forwarder may also ask for it to prepare other documents, such as the bill of lading or air waybill.",
      },
      {
        q: "Where do you attach a packing list?",
        a: "For parcels, place it inside the box on top of the goods, or in a clear adhesive pouch on the outside marked packing list enclosed. For export freight, put one copy inside a carton or on the pallet, attach one to the outside in a document pouch, and send copies to the forwarder and buyer with the commercial invoice.",
      },
      {
        q: "What is the difference between net weight and gross weight on a packing list?",
        a: "Net weight is the weight of the goods alone. Gross weight is the weight of the goods plus packaging, such as cartons, padding and pallets. Carriers usually charge based on gross weight or dimensional weight, whichever is higher, while customs and some regulations may refer to net weight. Show both, with the unit (kg or lb), for each package and in total.",
      },
      {
        q: "Can I make a packing list in Excel or Google Sheets?",
        a: "Yes. A spreadsheet works well because you can add rows for each carton and use formulas to total quantities and weights. Save a master copy, duplicate it for each shipment, fill in the order and package details, and export it as a PDF so the layout does not change when someone opens it on another device.",
      },
      {
        q: "Should the packing list number match the invoice number?",
        a: "It helps to link them. Many businesses use the invoice or order number as a reference on the packing list, or give the packing list its own number with the invoice number shown next to it. The key is that anyone holding the packing list can find the matching invoice, purchase order and shipping document quickly.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A packing list template is a reusable document that lists everything inside a shipment: shipper and consignee, order and invoice references, each item and quantity, how goods are packed (cartons, pallets), package marks, dimensions and net and gross weights. It travels with the goods and usually shows no prices, unlike an invoice.</p>
<p>A good packing list prevents disputes ("we only got 9 cartons"), speeds up receiving, and makes export shipments smoother. This guide gives you a packing list template structure, the fields to include, a filled-in example and tips for international shipments.</p>

<h2>What Is a Packing List?</h2>
<p>A packing list (also called a packing slip, shipping list or packing note) is a document prepared by the seller that describes the physical contents of a shipment. The buyer uses it to check the delivery, the warehouse uses it to confirm the pick, and carriers and customs use it to identify packages.</p>
<p>It is different from the documents it travels with:</p>
<table>
<thead><tr><th>Document</th><th>Main purpose</th><th>Shows prices?</th></tr></thead>
<tbody>
<tr><td>Packing list</td><td>What is in each package, counts, weights, dimensions</td><td>Usually no</td></tr>
<tr><td>Invoice</td><td>Request for payment</td><td>Yes</td></tr>
<tr><td>Commercial invoice</td><td>Customs valuation and sale terms for exports</td><td>Yes</td></tr>
<tr><td>Bill of lading or air waybill</td><td>Contract of carriage and receipt by the carrier</td><td>Not normally</td></tr>
<tr><td>Delivery note</td><td>Proof the goods were delivered and received</td><td>Usually no</td></tr>
</tbody>
</table>
<p>For a deeper comparison, see <a href="/blog/packing-slip-vs-invoice">packing slip vs invoice</a> and <a href="/blog/bill-of-lading-vs-commercial-invoice">bill of lading vs commercial invoice</a>.</p>

<h2>What Should a Packing List Template Include?</h2>
<h3>Header fields</h3>
<ul>
<li><strong>Title:</strong> "Packing List"</li>
<li><strong>Packing list number and date</strong></li>
<li><strong>References:</strong> invoice number, purchase order number, order number</li>
<li><strong>Shipper / exporter:</strong> business name, address, phone, email</li>
<li><strong>Consignee:</strong> who receives the goods (may differ from the buyer)</li>
<li><strong>Buyer / bill-to party</strong> if different from the consignee (see <a href="/blog/billing-address-vs-shipping-address">billing address vs shipping address</a>)</li>
<li><strong>Shipping details:</strong> carrier, service, tracking or bill of lading number, ship date</li>
</ul>
<h3>Item and package fields</h3>
<ul>
<li>Item number or SKU</li>
<li>Description (clear enough to identify the goods without a catalog)</li>
<li>Quantity ordered, quantity shipped, quantity backordered</li>
<li>Unit of measure (each, box, dozen, kg)</li>
<li>Package number or carton range (for example, cartons 1 to 4)</li>
<li>Package type (carton, pallet, crate, drum)</li>
<li>Dimensions per package (L x W x H)</li>
<li>Net weight and gross weight per package</li>
<li>Marks and numbers printed on the packages</li>
</ul>
<h3>Export fields</h3>
<ul>
<li>Country of origin of the goods</li>
<li>HS code (often listed on the commercial invoice too; see <a href="/blog/hs-code-on-commercial-invoice">HS codes on a commercial invoice</a>)</li>
<li>Incoterms rule matching the commercial invoice (see <a href="/blog/incoterms-on-invoice">Incoterms on an invoice</a>)</li>
<li>Port of loading and port of discharge for sea freight</li>
<li>Total packages, total net weight, total gross weight, total volume (cubic meters or cubic feet)</li>
</ul>
<h3>Footer fields</h3>
<ul>
<li>Packed by, checked by and date</li>
<li>Special handling notes (fragile, keep dry, this side up)</li>
<li>Instructions for reporting shortages or damage, with a deadline</li>
</ul>

<h2>Packing List Example</h2>
<p>Here is a filled-in example for a small export shipment of kitchenware from a US seller to a retailer in Canada.</p>
<p><strong>Packing List PL-2026-0418</strong> | Date: Oct 29, 2026 | Invoice INV-2026-0418 | PO 77812<br>Shipper: Northline Home Goods LLC, Columbus, OH, USA<br>Consignee: Maple Kitchen Supply Ltd., Toronto, ON, Canada<br>Carrier: LTL freight, BOL 4410982 | Incoterms: DAP Toronto</p>
<table>
<thead><tr><th>Carton</th><th>SKU</th><th>Description</th><th>Qty</th><th>Net wt</th><th>Gross wt</th><th>Dimensions</th></tr></thead>
<tbody>
<tr><td>1 to 4</td><td>NH-SK-10</td><td>10 in cast iron skillet, pre-seasoned (6 per carton)</td><td>24</td><td>4 x 13.8 kg</td><td>4 x 15.0 kg</td><td>40 x 30 x 28 cm</td></tr>
<tr><td>5 to 6</td><td>NH-DO-55</td><td>5.5 qt enameled Dutch oven (2 per carton)</td><td>4</td><td>2 x 11.6 kg</td><td>2 x 13.2 kg</td><td>45 x 35 x 30 cm</td></tr>
<tr><td>7</td><td>NH-UT-SET</td><td>Wooden utensil set, 5 piece (20 per carton)</td><td>20</td><td>4.0 kg</td><td>4.8 kg</td><td>50 x 30 x 20 cm</td></tr>
<tr><td colspan="3"><strong>Totals: 7 cartons on 1 pallet</strong></td><td><strong>48</strong></td><td><strong>82.4 kg</strong></td><td><strong>91.2 kg (pallet adds 18 kg: 109.2 kg)</strong></td><td>120 x 80 x 95 cm</td></tr>
</tbody>
</table>
<p>Country of origin: USA. Packed by: J. Ortiz. Checked by: R. Patel. Report shortages within 5 business days of delivery.</p>
<p>Check that totals match the commercial invoice exactly. Mismatched quantities or weights between documents are one of the most common reasons customs asks questions. The matching commercial invoice is covered in our <a href="/blog/commercial-invoice-template">commercial invoice template</a> guide, and you can create the sales invoice itself with the <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>How to Fill Out a Packing List Step by Step</h2>
<ol>
<li><strong>Start from the order or invoice</strong> so SKUs, descriptions and quantities match.</li>
<li><strong>Pack and number each carton</strong> and write marks on the outside (consignee name, PO, carton x of y).</li>
<li><strong>Weigh and measure each package</strong> after packing, not from catalog data.</li>
<li><strong>Record what went into each carton</strong>, including partial cartons and backorders.</li>
<li><strong>Total everything</strong>: packages, units, net and gross weight and volume.</li>
<li><strong>Have a second person check</strong> the count against the list and sign.</li>
<li><strong>Distribute copies</strong>: inside the shipment, on the outside in a pouch, to the forwarder, and to the buyer by email.</li>
</ol>

<h2>How Is a Packing List Used for Export Shipments?</h2>
<p>For international shipments, the packing list is part of the standard document set alongside the commercial invoice, the bill of lading or air waybill, and sometimes a certificate of origin. The International Trade Administration lists it among <a href="https://www.trade.gov/common-export-documents">common export documents</a>. Freight forwarders use it to book space and prepare transport documents, and customs officers in the destination country may use it to decide which cartons to open during an inspection.</p>
<p>For customs, consistency matters more than design. The description, quantity and weights on the packing list should match the <a href="/blog/proforma-invoice-for-customs">proforma</a> or commercial invoice, and marks on the boxes should match the marks column. If you ship samples or goods with no sale, see <a href="/blog/no-commercial-value-invoice">no commercial value invoices</a>.</p>

<h2>Packing List Template Formats</h2>
<table>
<thead><tr><th>Format</th><th>Best for</th><th>Tips</th></tr></thead>
<tbody>
<tr><td>Spreadsheet (Excel, Google Sheets)</td><td>Multi-carton shipments</td><td>Use formulas for totals, export to PDF</td></tr>
<tr><td>Word or Docs</td><td>Occasional shipments</td><td>Lock the table layout, keep a blank master</td></tr>
<tr><td>Ecommerce or shipping software</td><td>Daily parcel orders</td><td>Auto-generated packing slips from orders</td></tr>
<tr><td>PDF</td><td>Sending to forwarders and buyers</td><td>Fixed layout, easy to print</td></tr>
</tbody>
</table>
<p>Print on the paper size your carrier and customers use; see <a href="/blog/invoice-paper-size">invoice paper size</a> for A4 vs Letter.</p>

<h2>Packing List vs Packing Slip vs Delivery Note: Which Do You Need?</h2>
<p>Small businesses often wonder whether they need all three. In practice, it depends on how you ship:</p>
<table>
<thead><tr><th>Situation</th><th>Document to use</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Ecommerce parcel to a consumer</td><td>Packing slip</td><td>Customer checks items; no prices if it is a gift</td></tr>
<tr><td>B2B delivery by your own van</td><td>Delivery note signed by the receiver</td><td>Proof of delivery for disputes; see the <a href="/blog/delivery-note-template">delivery note template</a></td></tr>
<tr><td>LTL or pallet freight</td><td>Packing list</td><td>Carrier and receiver need carton counts and weights</td></tr>
<tr><td>International shipment</td><td>Packing list plus commercial invoice</td><td>Forwarder and customs match goods to the invoice</td></tr>
<tr><td>Shipments in South Asia without a sale (transfers, job work)</td><td>Delivery challan</td><td>See <a href="/blog/delivery-challan-format">delivery challan format</a></td></tr>
</tbody>
</table>
<p>If the buyer issued a <a href="/blog/purchase-order-template">purchase order</a>, quote its number on the packing list as well as the invoice. Their receiving team usually checks deliveries against the PO, and a matching reference speeds up the three-way match between PO, packing list and invoice before your invoice is approved for payment.</p>

<h2>How to Handle Partial Shipments and Backorders</h2>
<p>When you cannot ship the whole order at once, the packing list should make that obvious. Use three quantity columns (ordered, shipped, backordered) and mark the shipment "Partial shipment 1 of 2". The next packing list should reference the same order and show the remaining quantity. Only invoice what you actually shipped, unless your agreement says otherwise, so the invoice, packing list and goods received all agree. If the customer was already invoiced for the full order, issue a credit note or adjust the next invoice rather than leaving the mismatch for their accounts team to find.</p>
<p>For damaged or short deliveries, ask the receiver to note the problem on the carrier's delivery receipt before signing, photograph the cartons, and compare the count against the packing list. That record makes carrier claims and customer credits far easier.</p>

<h2>Common Packing List Mistakes</h2>
<ul>
<li><strong>Quantities that differ from the invoice</strong> because of a last-minute backorder that was not updated.</li>
<li><strong>Vague descriptions</strong> like "parts" or "samples" that do not identify the goods.</li>
<li><strong>Catalog weights instead of actual weights.</strong></li>
<li><strong>Missing carton numbers</strong>, which makes it impossible to tell which box is missing.</li>
<li><strong>Prices on the packing list</strong> when the recipient is not the buyer.</li>
<li><strong>No reference to the invoice or PO.</strong></li>
</ul>
<p>A clear packing list template saves time on every shipment and every dispute. Pair it with a matching invoice from the <a href="/invoice-generator">invoice generator</a> on this site, which is free, needs no sign-up and creates a PDF in your browser, and keep invoice and packing list numbers linked with a consistent scheme from the <a href="/tools/invoice-number-generator">invoice number generator</a>.</p>
`,
  },
  {
    slug: "invoice-header-and-footer",
    title: "Invoice Header and Footer: What to Put in Each (Examples)",
    description:
      "Invoice header and footer guide: what belongs in each, required details by country, design tips and copy-ready examples for freelancers and small businesses.",
    category: "design-templates",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-add-logo-to-invoice",
      "invoice-terms-and-conditions",
      "professional-invoice-design-tips",
    ],
    faqs: [
      {
        q: "Should my logo go in the invoice header?",
        a: "Yes, if you have one. Place it at the top left or top center, sized so it is clearly visible but does not push the important details down the page. A logo makes the invoice instantly recognizable in a client's inbox and accounts payable system. If you do not have a logo, your business name in a bold, readable font works just as well.",
      },
      {
        q: "Where should the invoice number go?",
        a: "Put the invoice number in the header area, usually at the top right near the word Invoice and the invoice date. Clients and their accounting teams search for invoices by number, so it should be easy to spot without reading the whole page. Use a consistent format such as INV-2026-0142 and never reuse a number.",
      },
      {
        q: "What should go in an invoice footer?",
        a: "Typical footer content includes payment instructions, short payment terms or a late fee note, a thank-you line, legal details such as company registration or VAT number where required, contact details, and page numbers on multi-page invoices. Keep it short. If your full terms and conditions are long, include a summary in the footer and link to or attach the full version.",
      },
      {
        q: "Do I need my tax ID in the invoice header?",
        a: "It depends on where you are. VAT- and GST-registered businesses in many countries must show their registration number on invoices, and it commonly sits in the header beside the business address. In the US, there is no general rule requiring an EIN on invoices, though some clients ask for it. Never print your Social Security number on an invoice.",
      },
      {
        q: "Should payment details go in the header or footer?",
        a: "Most invoices put payment instructions in the footer or in a payment section right below the totals, because the client looks for them after seeing the amount due. The due date and amount due, however, should also appear near the top so they are visible at a glance. Whichever you choose, keep the layout the same on every invoice.",
      },
      {
        q: "Should headers and footers repeat on every page?",
        a: "On multi-page invoices, repeat at least the business name, invoice number and page number (page 1 of 3) on each page so loose pages can be matched. The full header with logo and addresses and the full footer with payment details can appear only on the first and last pages if space is tight.",
      },
      {
        q: "Can I use my letterhead as the invoice header?",
        a: "Yes, many businesses use the same branding as their letterhead so documents look consistent. Just make sure the header still clearly says Invoice and has space for the invoice number, date and due date, which a standard letterhead does not include. A letterhead with a long footer of offices and directors may need trimming to leave room for payment details.",
      },
      {
        q: "What font size works best for invoice headers and footers?",
        a: "Business name and the word Invoice can be larger, around 18 to 28 points. Header details such as addresses work at 9 to 11 points, and footer text at 8 to 9 points, as long as it remains readable when printed. Avoid going smaller than 8 points for anything a client needs, such as bank details or terms.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An invoice header identifies the document and the parties: your logo and business name, contact details, the word "Invoice", invoice number, invoice date, due date and the client's billing details. The invoice footer closes it: payment instructions, short terms, late fee note, legal or tax registration details, a thank-you line and page numbers.</p>
<p>The header and footer are the first and last things a client reads. Getting them right makes invoices look professional, helps accounts payable process them quickly and keeps you compliant where specific details are required. This guide explains what to put in an invoice header and footer, with examples you can copy.</p>

<h2>What Is an Invoice Header?</h2>
<p>The invoice header is the top section of the invoice, above the line items. Its job is to answer three questions immediately: who sent this, who is it for, and what is it (which invoice, when, and when payment is due). A typical layout puts your branding on the left and the invoice details on the right, with the client's "Bill To" block underneath.</p>

<h2>What to Put in an Invoice Header</h2>
<table>
<thead><tr><th>Element</th><th>Required?</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Logo</td><td>Optional</td><td>Top left or center; see <a href="/blog/how-to-add-logo-to-invoice">how to add a logo to an invoice</a></td></tr>
<tr><td>Business name (legal or trading name)</td><td>Yes</td><td>Match the name on your bank account to avoid payment confusion</td></tr>
<tr><td>Business address, email, phone</td><td>Yes in most places</td><td>Some countries require a full address</td></tr>
<tr><td>The word "Invoice" (or "Tax Invoice")</td><td>Yes</td><td>Some VAT and GST systems require "Tax Invoice" wording</td></tr>
<tr><td>Invoice number</td><td>Yes</td><td>Unique and sequential; see <a href="/blog/invoice-numbering-system">invoice numbering systems</a></td></tr>
<tr><td>Invoice date and due date</td><td>Yes</td><td>Due date makes payment terms concrete</td></tr>
<tr><td>Tax registration number</td><td>If registered for VAT/GST</td><td>See <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a></td></tr>
<tr><td>Client name and billing address</td><td>Yes</td><td>Add the client's PO number and contact person if they use them</td></tr>
<tr><td>Amount due</td><td>Recommended</td><td>A highlighted total near the top speeds approval</td></tr>
</tbody>
</table>

<h3>Invoice header example</h3>
<table>
<thead><tr><th>Left side</th><th>Right side</th></tr></thead>
<tbody>
<tr><td><strong>Brightline Studio LLC</strong><br>214 Elm Street, Suite 3<br>Denver, CO 80203<br>hello@brightlinestudio.com | (303) 555-0147</td><td><strong>INVOICE</strong><br>Invoice #: BLS-2026-0087<br>Date: Oct 29, 2026<br>Due: Nov 28, 2026 (Net 30)<br>PO #: 55-1093</td></tr>
<tr><td><strong>Bill To:</strong><br>Harbor Dental Group<br>Attn: Accounts Payable<br>890 Lake Ave, Boulder, CO 80302</td><td><strong>Amount due: $3,240.00</strong></td></tr>
</tbody>
</table>

<h2>What Is an Invoice Footer?</h2>
<p>The invoice footer is the bottom section, below the totals. It tells the client how to pay and on what terms, and it holds the small-print details that do not belong in the main body. On a one-page invoice, the payment section often sits right below the totals and the footer proper is a thin band at the very bottom of the page.</p>

<h2>What to Put in an Invoice Footer</h2>
<ul>
<li><strong>Payment instructions:</strong> bank name, account name, routing and account number or IBAN and SWIFT/BIC, or a payment link. Only share bank details through a channel you trust.</li>
<li><strong>Payment terms:</strong> "Payment due within 30 days of invoice date". See <a href="/blog/invoice-payment-terms">invoice payment terms</a>.</li>
<li><strong>Late fee policy:</strong> for example "1.5% per month on overdue balances", where allowed by law and agreed with the client.</li>
<li><strong>Short terms and conditions</strong> or a link to the full version; see <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions</a>.</li>
<li><strong>Legal details:</strong> registered company name and number, registered office, VAT number, where your country requires them.</li>
<li><strong>Thank-you note:</strong> a short line such as "Thank you for your business". Our <a href="/blog/invoice-notes-examples">invoice notes examples</a> have more options.</li>
<li><strong>Page numbers</strong> on multi-page invoices.</li>
</ul>

<h3>Invoice footer example</h3>
<p><em>Payment: ACH or wire to Brightline Studio LLC, First Front Range Bank, Routing 000000000, Account 000000000 (example numbers). Please include invoice BLS-2026-0087 in the payment reference. Terms: Net 30. Balances unpaid after the due date incur a late fee of 1.5% per month as agreed in our services contract. Questions? billing@brightlinestudio.com. Thank you for your business. Page 1 of 1.</em></p>

<h2>Are Some Header and Footer Details Legally Required?</h2>
<p>Yes, in many countries. Required invoice contents are set by tax and company law, and several of them naturally live in the header or footer.</p>
<table>
<thead><tr><th>Country or region</th><th>Common requirements affecting header/footer</th></tr></thead>
<tbody>
<tr><td>United Kingdom</td><td>Unique invoice number, business name and address, client name and address, and for limited companies the full registered company name; VAT number if VAT registered. See <a href="https://www.gov.uk/invoicing-and-taking-payment-from-customers/invoices-what-they-must-include">GOV.UK: what an invoice must include</a>.</td></tr>
<tr><td>European Union</td><td>Sequential number, supplier and customer details, VAT numbers where required, issue date</td></tr>
<tr><td>Australia</td><td>Tax invoices need the supplier's ABN and other details; see <a href="/blog/how-to-get-an-abn">how to get an ABN</a></td></tr>
<tr><td>United States</td><td>No single federal format; follow state sales tax rules and client requirements</td></tr>
</tbody>
</table>
<p>Requirements change and differ by situation, so check the official tax authority guidance for your country. This is general information, not tax or legal advice.</p>

<h2>Invoice Header and Footer Design Tips</h2>
<ol>
<li><strong>Keep the header compact.</strong> The line items should start in the top third of the page.</li>
<li><strong>Make three things easy to find:</strong> invoice number, due date and amount due.</li>
<li><strong>Use one or two fonts.</strong> See <a href="/blog/best-fonts-for-invoices">best fonts for invoices</a>.</li>
<li><strong>Use brand color sparingly</strong>, for example in a header band or the total line, and keep text dark on light backgrounds for printing.</li>
<li><strong>Align to a grid</strong> so the header, line items and footer columns line up.</li>
<li><strong>Test print</strong> on both A4 and Letter if you have international clients; footers often get cut off. See <a href="/blog/invoice-paper-size">invoice paper sizes</a>.</li>
</ol>
<p>Our <a href="/blog/professional-invoice-design-tips">professional invoice design tips</a> cover layout in more detail, and the <a href="/invoice-templates">invoice templates</a> page has ready-made layouts.</p>

<h2>Worked Example: Full Invoice With Header and Footer</h2>
<p>Using the header above, the body and totals look like this:</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Website redesign, phase 2 (5 page templates)</td><td>1</td><td>$2,400.00</td><td>$2,400.00</td></tr>
<tr><td>Copy edits and content upload</td><td>8 hrs</td><td>$85.00</td><td>$680.00</td></tr>
<tr><td>Stock photo licenses</td><td>4</td><td>$40.00</td><td>$160.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$3,240.00</strong></td></tr>
</tbody>
</table>
<p>The header gives the client everything they need to log and approve it (number, PO, due date, amount), and the footer gives them everything they need to pay it.</p>

<h2>Header and Footer Examples by Business Type</h2>
<table>
<thead><tr><th>Business</th><th>Header extras</th><th>Footer extras</th></tr></thead>
<tbody>
<tr><td>Freelancer</td><td>Your name and trading name, project name</td><td>Bank or payment link, "Net 14", thank-you line</td></tr>
<tr><td>Contractor</td><td>License number, job site address, PO</td><td>Lien or retainage notes where required, warranty summary</td></tr>
<tr><td>UK limited company</td><td>Company name, VAT number</td><td>Registered office, company number, late payment interest note</td></tr>
<tr><td>Ecommerce seller</td><td>Order number, ship-to address</td><td>Returns policy summary, customer service email</td></tr>
<tr><td>Agency on retainer</td><td>Billing period (for example "November 2026")</td><td>Auto-pay note, notice period summary</td></tr>
</tbody>
</table>

<h3>Copy-ready footer lines</h3>
<ul>
<li>"Please include the invoice number with your payment."</li>
<li>"Payment is due within 14 days. Thank you for working with us."</li>
<li>"Overdue balances are subject to a late fee of 1.5% per month as agreed."</li>
<li>"Questions about this invoice? Contact billing@yourbusiness.com within 7 days."</li>
<li>"Registered in England and Wales, company no. 00000000. VAT no. GB000000000." (example format)</li>
</ul>
<p>Pick two or three lines, not all of them. A short footer is more likely to be read than a dense block of small print.</p>

<h2>How to Add a Header and Footer to Your Invoice</h2>
<ol>
<li><strong>In an invoice generator:</strong> upload your logo, fill in business and client details, and add terms and payment instructions in the notes or terms field. Our <a href="/invoice-generator">free invoice generator</a> places these in the header and footer areas automatically.</li>
<li><strong>In Word or Google Docs:</strong> use the built-in header and footer areas for the logo, business name and page numbers, and keep invoice-specific details (number, dates, client) in the body so they are easy to edit.</li>
<li><strong>In Excel or Google Sheets:</strong> build the header in the first rows of the sheet and set a print area; use the print header and footer settings for page numbers.</li>
</ol>
<p>Whichever tool you use, save the header and footer as a template once, so every invoice is consistent and you only change the invoice details and line items.</p>

<h2>Common Invoice Header and Footer Mistakes</h2>
<ul>
<li><strong>Missing or duplicate invoice numbers.</strong></li>
<li><strong>No due date</strong>, only "Net 30", which forces the client to calculate it.</li>
<li><strong>Oversized logos</strong> that push line items to a second page.</li>
<li><strong>Payment details buried</strong> in long terms text.</li>
<li><strong>Trading name only</strong> when your bank account or registration uses the legal name.</li>
<li><strong>Tiny footer text</strong> that cannot be read once printed.</li>
<li><strong>Personal SSN printed</strong> instead of an EIN.</li>
</ul>
<p>A clear invoice header and footer turn a list of charges into a document that gets approved and paid quickly. The <a href="/invoice-generator">free invoice generator</a> on this site has fields for your logo, invoice details, notes and payment terms in the right places. It is free, needs no sign-up, and creates the PDF right in your browser for you to download.</p>
`,
  },
  {
    slug: "price-list-template",
    title: "Price List Template: Layouts, Examples and Update Tips",
    description:
      "Price list template guide: the fields to include, layouts for products and services, a filled-in example, and how to update prices without confusing customers.",
    category: "design-templates",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-price-a-product", "how-to-raise-prices", "quotation-format"],
    faqs: [
      {
        q: "What is the difference between a price list and a quote?",
        a: "A price list shows your standard prices for all or many products and services, and you give the same list to many customers. A quote or quotation is prepared for one customer and one job, with specific quantities, discounts, taxes and an expiry date. Many businesses send a price list first, then a quote once the customer knows what they want.",
      },
      {
        q: "Should a price list include sales tax?",
        a: "For business customers, show prices before tax and note that tax is added where applicable. For consumers, local rules and expectations differ: in the US prices are usually shown before sales tax, while in the UK, EU and Australia consumer prices are generally expected to include VAT or GST. State clearly whether prices include or exclude tax.",
      },
      {
        q: "How often should I update my price list?",
        a: "Review it at least once a year and whenever supplier costs, wages or rent change meaningfully. Many businesses update prices at the start of the year or a new season. Put an effective date and version on every list, so customers and staff know which one is current, and archive old versions for reference when an old quote is questioned.",
      },
      {
        q: "How do I tell customers about a price increase?",
        a: "Give advance notice, often 30 days for regular clients, explain the reason briefly (higher costs, expanded service), and state the effective date. Honor quotes and contracts already signed at the old price. Send the new price list with the notice so customers can plan orders. Some businesses let loyal customers place one final order at the old price.",
      },
      {
        q: "Should I put prices on my website?",
        a: "Publishing prices filters out customers who cannot afford you and reduces time spent on quotes. Many service businesses that do custom work publish starting prices or packages instead of exact prices. If your prices vary a lot by job, a from price with examples of what affects cost is a good middle ground.",
      },
      {
        q: "What is a wholesale price list?",
        a: "A wholesale price list is a version of your price list for retailers or resellers who buy in quantity to resell. It shows wholesale unit prices, usually lower than retail, along with minimum order quantities, case packs, suggested retail prices, payment terms and shipping terms. Keep it separate from your retail list and share it only with approved trade customers.",
      },
      {
        q: "What file format is best for a price list?",
        a: "Maintain the master in a spreadsheet so you can update prices with formulas and keep SKUs consistent, then export a PDF to send to customers. PDF keeps the layout fixed and is easy to print or attach to emails. For a website, publish the list as a normal web page rather than a PDF so it is easier to read on phones.",
      },
      {
        q: "Can I offer volume discounts on a price list?",
        a: "Yes. Add a quantity break table, for example 1 to 9 units at the full price, 10 to 49 at 5 percent off and 50 or more at 10 percent off. Make sure every discounted price still covers your cost and margin. Show the discount clearly so the invoice matches the price list and the customer is not surprised.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A price list template is a reusable document that shows your standard prices: business details, an effective date, item or service names with codes, descriptions, units, prices, any quantity discounts, tax notes and terms. Keep the master in a spreadsheet, export a dated PDF for customers, and update it on a regular schedule.</p>
<p>A clear price list answers the first question most customers have and saves you from writing the same quote over and over. This guide covers what a price list template should include, layouts for products and services, a filled-in example and how to update prices without causing confusion on invoices.</p>

<h2>What Is a Price List?</h2>
<p>A price list (also called a rate sheet, rate card, price sheet or menu of services) is a document listing the standard prices a business charges for its products or services. It is different from:</p>
<ul>
<li><strong>A quote or estimate</strong>, which prices one specific job for one customer (see <a href="/blog/quote-vs-estimate">quote vs estimate</a> and our <a href="/blog/quotation-format">quotation format</a> guide).</li>
<li><strong>An invoice</strong>, which requests payment for goods or services already agreed or delivered.</li>
<li><strong>An order form</strong>, which customers fill in to order from the price list (see the <a href="/blog/order-form-template">order form template</a>).</li>
</ul>

<h2>What Should a Price List Template Include?</h2>
<table>
<thead><tr><th>Section</th><th>Fields</th></tr></thead>
<tbody>
<tr><td>Header</td><td>Logo, business name, contact details, title ("Price List 2026"), effective date, version</td></tr>
<tr><td>Category headings</td><td>Group items (for example, "Cleaning Services", "Add-ons")</td></tr>
<tr><td>Item rows</td><td>Code or SKU, name, short description, unit (each, hour, sq ft, month), price</td></tr>
<tr><td>Options</td><td>Sizes, tiers or variants with their own prices</td></tr>
<tr><td>Discounts</td><td>Quantity breaks, package pricing, trade discount</td></tr>
<tr><td>Tax note</td><td>"Prices exclude sales tax" or "Prices include VAT"</td></tr>
<tr><td>Terms</td><td>Minimum order, delivery or travel fees, payment terms, validity ("Prices valid until further notice" or a date)</td></tr>
</tbody>
</table>

<h2>Price List Layouts by Business Type</h2>
<h3>Product price list</h3>
<p>Best for retailers, makers, wholesalers and distributors. Use columns for SKU, product, size or variant, unit, price, and for wholesale lists also case pack and minimum order.</p>
<h3>Service price list</h3>
<p>Best for trades, salons, cleaners and agencies. List services with what is included, the unit (per hour, per visit, per room) and price. Use "from" prices when the final cost depends on the job.</p>
<h3>Tiered or package price list</h3>
<p>Best for subscriptions and creative services. Show three columns (for example Basic, Standard, Premium) with features in rows and prices at the top.</p>
<h3>Menu-style price list</h3>
<p>Best for cafes, food trucks and bakeries. Short names, simple prices, minimal text.</p>

<h2>Price List Example</h2>
<p><strong>Sparkle Home Cleaning: Price List 2026</strong> (effective Nov 1, 2026, version 3). Prices exclude sales tax where applicable.</p>
<table>
<thead><tr><th>Code</th><th>Service</th><th>Unit</th><th>Price</th></tr></thead>
<tbody>
<tr><td>STD-1</td><td>Standard clean, 1 to 2 bedroom home</td><td>Per visit</td><td>$140.00</td></tr>
<tr><td>STD-3</td><td>Standard clean, 3 to 4 bedroom home</td><td>Per visit</td><td>$190.00</td></tr>
<tr><td>DEEP</td><td>Deep clean (first visit or seasonal)</td><td>Per hour, 2-person team</td><td>$90.00</td></tr>
<tr><td>MOVE</td><td>Move-out clean, empty home</td><td>From</td><td>$280.00</td></tr>
<tr><td>ADD-OV</td><td>Inside oven</td><td>Each</td><td>$35.00</td></tr>
<tr><td>ADD-FR</td><td>Inside fridge</td><td>Each</td><td>$30.00</td></tr>
<tr><td>ADD-WIN</td><td>Interior windows</td><td>Per window</td><td>$6.00</td></tr>
</tbody>
</table>
<p>Recurring discount: weekly visits 15% off, every two weeks 10% off. Cancellations with less than 24 hours' notice are charged 50% of the visit price.</p>
<h3>From price list to invoice</h3>
<p>A customer books a 3-bedroom standard clean every two weeks, plus oven and fridge on the first visit:</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>STD-3 Standard clean, 3-bedroom home</td><td>1</td><td>$190.00</td><td>$190.00</td></tr>
<tr><td>Recurring discount 10% (every two weeks)</td><td>1</td><td>-$19.00</td><td>-$19.00</td></tr>
<tr><td>ADD-OV Inside oven</td><td>1</td><td>$35.00</td><td>$35.00</td></tr>
<tr><td>ADD-FR Inside fridge</td><td>1</td><td>$30.00</td><td>$30.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$236.00</strong></td></tr>
</tbody>
</table>
<p>Using the same codes on the price list and the invoice makes it easy for customers to check charges. You can build this invoice in the <a href="/invoice-generator">free invoice generator</a>, and if you charge sales tax, check the amount with the <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>Should You Show "From" Prices or Exact Prices?</h2>
<p>Exact prices work when the product or service is standardized: a 60-minute massage, a printed mug, a monthly bookkeeping package for up to 50 transactions. "From" prices work when the job varies, such as painting, cleaning or design, because they set expectations without locking you into a number that may not cover a larger job. If you use "from" prices, list the factors that change the price (size, condition, materials, deadline) and an example so customers can estimate. A short line such as "Final price confirmed in a written quote" protects you, and the quote then becomes the basis of the invoice. Avoid hiding all prices behind "contact us" unless your work is truly custom, because many buyers will simply move on to a competitor who publishes numbers.</p>

<h2>How to Set the Prices on Your List</h2>
<p>A price list is only as good as the prices on it. For each item:</p>
<ol>
<li>Calculate the full cost: materials, labor, overhead share.</li>
<li>Add your target margin. See <a href="/blog/how-to-price-a-product">how to price a product</a> and <a href="/blog/cost-plus-pricing">cost-plus pricing</a>.</li>
<li>Compare with competitors and the value to the customer.</li>
<li>Round to clean numbers and check that discounted prices still cover cost.</li>
</ol>
<p>Service businesses that resell materials should also decide on a standard markup; our guide to <a href="/blog/materials-markup">materials markup</a> explains common approaches.</p>

<h2>How to Update a Price List Without Confusing Customers</h2>
<ol>
<li><strong>Review on a schedule</strong>, for example every January and whenever a key cost jumps. The Bureau of Labor Statistics <a href="https://www.bls.gov/cpi/">Consumer Price Index</a> and <a href="https://www.bls.gov/ppi/">Producer Price Index</a> are useful reference points for general cost inflation.</li>
<li><strong>Change the version and effective date</strong> on every new list.</li>
<li><strong>Give notice</strong> to regular customers (30 days is common) before the effective date.</li>
<li><strong>Honor existing quotes and contracts</strong> at their agreed price until they expire.</li>
<li><strong>Update every place prices appear</strong>: website, PDF, order forms, saved invoice items, POS.</li>
<li><strong>Archive the old version</strong> so you can answer questions about past invoices.</li>
</ol>
<p>Our guide on <a href="/blog/how-to-raise-prices">how to raise prices</a> includes sample notice emails.</p>

<h2>Wholesale vs Retail Price List Example</h2>
<p>Product businesses often keep two lists from the same spreadsheet. A maker selling a handmade candle might show:</p>
<table>
<thead><tr><th>SKU</th><th>Product</th><th>Case pack</th><th>Wholesale (per unit)</th><th>Suggested retail</th></tr></thead>
<tbody>
<tr><td>CN-08-CS</td><td>8 oz candle, Cedar and Sage</td><td>12</td><td>$13.00</td><td>$26.00</td></tr>
<tr><td>CN-08-FA</td><td>8 oz candle, Fig and Amber</td><td>12</td><td>$13.00</td><td>$26.00</td></tr>
<tr><td>TN-04-AS</td><td>4 oz travel tin, assorted</td><td>24</td><td>$6.50</td><td>$13.00</td></tr>
</tbody>
</table>
<p>Wholesale terms below the table: minimum opening order $250, reorders $150, first order prepaid, then Net 30 for approved accounts, shipping billed at cost. Our guide on <a href="/blog/how-to-start-a-candle-business">how to start a candle business</a> shows how those prices are calculated from cost.</p>

<h2>How to Build a Price List in a Spreadsheet</h2>
<ol>
<li><strong>Create a cost sheet</strong> with columns for item code, materials, labor and overhead per unit.</li>
<li><strong>Add a price sheet</strong> that pulls the cost by code and applies your markup or margin with a formula, then rounds (for example to the nearest $0.50).</li>
<li><strong>Add discount columns</strong> for wholesale or quantity breaks calculated from the base price.</li>
<li><strong>Create a customer-facing tab</strong> that shows only code, name, unit and price, with the header, effective date and terms.</li>
<li><strong>Export that tab as a PDF</strong> named with the date, for example "Price-List-2026-11.pdf".</li>
</ol>
<p>When costs change, update the cost sheet and every price updates with it, so you can see the effect before publishing. Saving the same item names and prices in your invoicing tool keeps quotes, <a href="/blog/estimate-template">estimates</a> and invoices consistent with the published list.</p>

<h2>Common Price List Mistakes</h2>
<ul>
<li><strong>No effective date</strong>, so nobody knows which list is current.</li>
<li><strong>Unclear tax treatment</strong> (does the price include tax or not?).</li>
<li><strong>Vague units</strong>, such as "per job" without saying what a job includes.</li>
<li><strong>Too many options</strong>, which slows buying decisions.</li>
<li><strong>Old PDFs still circulating</strong> after a price change.</li>
<li><strong>Invoices that use different names or codes</strong> than the price list.</li>
</ul>
<p>A well-built price list template makes quoting faster and invoicing more consistent. When a customer orders from your list, turn it into an invoice with the <a href="/invoice-generator">invoice generator</a> on this site: it is free, needs no sign-up and creates a downloadable PDF in your browser. You can also browse ready-made layouts on the <a href="/invoice-templates">invoice templates</a> page.</p>
`,
  },
  {
    slug: "service-agreement-template",
    title: "Service Agreement Template: Key Clauses + Invoicing Tips",
    description:
      "Service agreement template guide: essential clauses, a sample payment clause, how the agreement links to deposits and invoices, and mistakes that cause disputes.",
    category: "design-templates",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["freelance-contract-template", "statement-of-work-template", "invoice-payment-terms"],
    faqs: [
      {
        q: "What is the difference between a service agreement and a statement of work?",
        a: "A service agreement sets the overall legal relationship: payment terms, liability, confidentiality, ownership and termination. A statement of work describes a specific project under that agreement: deliverables, timeline, milestones and price. Many businesses sign one master service agreement with a client and then add a new statement of work for each project, which saves renegotiating legal terms every time.",
      },
      {
        q: "Is a service agreement legally binding?",
        a: "Generally yes, if it has the basic elements of a contract: an offer, acceptance, something of value exchanged, parties with capacity, and a lawful purpose. Signatures, including valid electronic signatures, make it much easier to prove. Some agreements have extra formal requirements depending on the subject and location, so have a lawyer review templates for high-value or regulated work.",
      },
      {
        q: "Should I take a deposit under a service agreement?",
        a: "For project work, a deposit of 25 to 50 percent before starting is common, especially with new clients. The agreement should state the deposit amount, whether it is refundable, and that it is applied to the final invoice. Send a deposit invoice right after signing and begin work once it is paid, so you are never far ahead of payment.",
      },
      {
        q: "Can I charge late fees if the agreement does not mention them?",
        a: "It is much harder. Late fees are generally enforceable only when the client agreed to them in advance, and many jurisdictions limit how much you can charge. Put the late fee, grace period and interest rate in the agreement, then repeat it on invoices. Some places, such as the UK, also have statutory late payment interest for business-to-business debts.",
      },
      {
        q: "Who owns the work under a service agreement?",
        a: "It depends on what the agreement says and on the law that applies. A common approach for freelancers is that the client receives ownership or a license of the final deliverables once paid in full, while the provider keeps ownership of pre-existing tools, templates and know-how. Spell this out clearly, because unclear ownership causes serious disputes.",
      },
      {
        q: "How long should a service agreement last?",
        a: "Project agreements usually end when the work is delivered and paid. Ongoing agreements often run for an initial term, such as 3, 6 or 12 months, then renew automatically month to month unless either party gives notice, commonly 30 days. State the term, renewal and notice rules clearly so both sides know when and how it ends.",
      },
      {
        q: "Do I need a service agreement for small jobs?",
        a: "A short written agreement is still worth it, even for small jobs. It can be a one-page document or a detailed quote the client accepts in writing, covering scope, price, payment due date and cancellation. Small jobs are where informal arrangements most often lead to unpaid invoices, because there is no record of what was agreed.",
      },
      {
        q: "Can I use one service agreement template for all clients?",
        a: "Yes, a master template saves time, but customize the scope, price, timeline and any special terms for each client. Keep the legal clauses consistent, track which version each client signed, and review the template once a year. Industry-specific work, such as construction, healthcare or financial services, may need extra clauses required by law.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A service agreement template is a reusable contract between a service provider and a client that sets out the services, timeline, price, payment terms, deposits, late fees, ownership of work, confidentiality, liability limits and how either side can end the agreement. Its payment section should match exactly what you put on your invoices.</p>
<p>A clear service agreement is the best tool you have against scope creep and late payment. This guide covers the clauses a service agreement template should include, a sample payment section, how the agreement connects to deposits and invoices, and the mistakes that lead to disputes.</p>
<p>This is general information, not legal advice. Contract rules vary by state and country, so have a lawyer review your template, especially for large or regulated work.</p>

<h2>What Is a Service Agreement?</h2>
<p>A service agreement (also called a services contract, service contract or master service agreement) is a written contract in which one party agrees to perform services for another in exchange for payment. It is used by freelancers, agencies, consultants, contractors, cleaners, IT providers and almost any business that sells time and expertise rather than goods.</p>
<p>Related documents:</p>
<table>
<thead><tr><th>Document</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Service agreement / MSA</td><td>Overall legal terms for the relationship</td></tr>
<tr><td>Statement of work</td><td>Specific project scope, deliverables, schedule and price (see <a href="/blog/statement-of-work-template">statement of work template</a>)</td></tr>
<tr><td>Proposal or quote</td><td>Sales document before agreement (see <a href="/blog/freelance-proposal-template">freelance proposal template</a>)</td></tr>
<tr><td>Invoice</td><td>Request for payment under the agreed terms</td></tr>
</tbody>
</table>
<p>Freelancers often use a shorter version; our <a href="/blog/freelance-contract-template">freelance contract template</a> covers that case.</p>

<h2>What Clauses Should a Service Agreement Template Include?</h2>
<ol>
<li><strong>Parties:</strong> legal names, addresses, and business type of both sides.</li>
<li><strong>Services and scope:</strong> what you will do, deliverables, and what is excluded.</li>
<li><strong>Timeline:</strong> start date, milestones, deadlines and dependencies on the client (content, approvals, access).</li>
<li><strong>Fees:</strong> fixed price, hourly rate or retainer, and how extra work is priced. See <a href="/blog/fixed-price-vs-time-and-materials">fixed price vs time and materials</a>.</li>
<li><strong>Payment terms:</strong> deposit, invoice schedule, due date, payment methods, late fees.</li>
<li><strong>Expenses:</strong> which expenses are billed, with or without markup, and approval limits.</li>
<li><strong>Change requests:</strong> how scope changes are requested, priced and approved in writing.</li>
<li><strong>Ownership and license:</strong> who owns deliverables and when ownership passes.</li>
<li><strong>Confidentiality</strong> and data protection.</li>
<li><strong>Warranties and limitation of liability:</strong> often capped at fees paid.</li>
<li><strong>Independent contractor status:</strong> you control how work is done; see the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee">IRS guidance on independent contractors</a>.</li>
<li><strong>Term and termination:</strong> notice period, payment for work done to date, cancellation fees.</li>
<li><strong>Dispute resolution and governing law.</strong></li>
<li><strong>Signatures and date</strong> (electronic signatures are widely accepted).</li>
</ol>

<h2>Sample Payment Terms Clause</h2>
<p>The payment section is where most disputes start, so write it plainly. An example you can adapt:</p>
<p><em>Fees. Client will pay Provider a fixed fee of $6,000 for the Services described in Schedule A. Deposit. A non-refundable deposit of 40% ($2,400) is due on signing and will be credited against the final invoice. Provider will begin work once the deposit is received. Milestones. Provider will invoice 30% ($1,800) on approval of the design phase and the remaining 30% ($1,800) on final delivery. Due date. Invoices are due 15 days from the invoice date by ACH or card. Late payment. Overdue amounts incur a late fee of 1.5% per month (or the maximum allowed by law, if lower). Provider may pause work while any invoice is more than 15 days overdue. Additional work. Work outside Schedule A will be billed at $95 per hour after written approval.</em></p>
<p>Check that any late fee or interest rate is allowed where you and the client are based.</p>

<h2>What Payment Structures Can a Service Agreement Use?</h2>
<table>
<thead><tr><th>Structure</th><th>How it is invoiced</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Fixed fee with deposit</td><td>Deposit invoice, then balance on delivery</td><td>Short, well-defined projects</td></tr>
<tr><td>Milestone payments</td><td>Invoice at each approved milestone</td><td>Projects longer than a month</td></tr>
<tr><td>Hourly or time and materials</td><td>Weekly or monthly invoice with hours and rates</td><td>Work with uncertain scope; see <a href="/blog/time-and-materials-invoice">time and materials invoices</a></td></tr>
<tr><td>Monthly retainer</td><td>Same invoice each month, in advance</td><td>Ongoing services</td></tr>
</tbody>
</table>
<p>Choose the structure before writing the payment clause, because it decides how many invoices you send, when, and what each one must show.</p>

<h2>How Does a Service Agreement Link to Invoicing?</h2>
<p>Every invoice should point back to the agreement and follow its terms exactly. In practice that means:</p>
<ul>
<li><strong>Reference the agreement</strong> (name and date, or contract number) and any client PO on each invoice.</li>
<li><strong>Use the same descriptions and milestones</strong> as the agreement, so approval is easy.</li>
<li><strong>Show deposits as credits</strong> on later invoices.</li>
<li><strong>Repeat the payment terms</strong> and late fee on the invoice (see <a href="/blog/invoice-payment-terms">invoice payment terms</a> and <a href="/blog/net-30-payment-terms">Net 30 payment terms</a>).</li>
<li><strong>Bill change requests separately</strong> with the approval date.</li>
</ul>

<h3>Worked example: invoices under the sample agreement</h3>
<table>
<thead><tr><th>Invoice</th><th>When</th><th>Line items</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>INV-1041</td><td>On signing</td><td>Deposit, 40% of $6,000 fixed fee</td><td>$2,400.00</td></tr>
<tr><td>INV-1052</td><td>Design approved</td><td>Milestone 2, 30% of fixed fee</td><td>$1,800.00</td></tr>
<tr><td>INV-1060</td><td>Final delivery</td><td>Milestone 3, 30% of fixed fee ($1,800) + approved change request, 6 hrs at $95 ($570)</td><td>$2,370.00</td></tr>
<tr><td colspan="3"><strong>Total billed under agreement</strong></td><td><strong>$6,570.00</strong></td></tr>
</tbody>
</table>
<p>You can create each of these in the <a href="/invoice-generator">free invoice generator</a>. For the first one, see our guide to the <a href="/blog/deposit-invoice">deposit invoice</a>; for staged billing on longer projects, see <a href="/blog/progress-billing">progress billing</a>. For ongoing monthly services, a <a href="/blog/retainer-invoice">retainer invoice</a> fits better.</p>

<h2>Service Agreement vs Contract vs Terms and Conditions</h2>
<p>These terms overlap, which causes confusion:</p>
<ul>
<li><strong>Service agreement:</strong> a contract specifically for services, negotiated and signed with one client.</li>
<li><strong>Contract:</strong> the general legal category; a service agreement is one type.</li>
<li><strong>Terms and conditions:</strong> standard terms you apply to all customers, often printed on quotes, invoices or your website. Useful for small one-off jobs, but they are weaker than a signed agreement if the client never clearly accepted them. See <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions</a>.</li>
<li><strong>Payment plan agreement:</strong> a separate agreement used when a client needs to pay an existing balance in installments; see the <a href="/blog/payment-plan-agreement">payment plan agreement</a> guide.</li>
</ul>

<h2>Service Agreement Clauses by Industry</h2>
<table>
<thead><tr><th>Industry</th><th>Extra clauses to consider</th></tr></thead>
<tbody>
<tr><td>Cleaning and home services</td><td>Access to the property, keys, pets, damage reporting, cancellation within 24 hours</td></tr>
<tr><td>Creative and marketing</td><td>Revision rounds, usage rights, portfolio rights, client approvals</td></tr>
<tr><td>IT and software</td><td>Service levels, response times, data protection, third-party licenses</td></tr>
<tr><td>Consulting and coaching</td><td>No guarantee of results, session rescheduling, confidentiality</td></tr>
<tr><td>Trades and construction</td><td>Permits, change orders, retainage, warranty on workmanship, licensing details required by state law</td></tr>
</tbody>
</table>
<p>Regulated industries often have mandatory contract wording, such as cancellation rights for certain home improvement contracts. Check your state or national rules for your trade.</p>

<h2>How to Use a Service Agreement Template Step by Step</h2>
<ol>
<li>Start from your master template and fill in the parties.</li>
<li>Paste the scope from the accepted proposal into Schedule A and list exclusions.</li>
<li>Set the fee structure, deposit, milestone dates and due dates.</li>
<li>Review special clauses (ownership, confidentiality, insurance) for this client.</li>
<li>Send for e-signature with the deposit invoice attached.</li>
<li>Store the signed copy with the client's invoices.</li>
<li>Set calendar reminders for milestones, renewals and notice dates.</li>
</ol>

<h2>Common Service Agreement Mistakes</h2>
<ul>
<li><strong>Vague scope</strong> ("website design") with no list of deliverables or revision limits.</li>
<li><strong>No change request process</strong>, so extra work goes unpaid.</li>
<li><strong>Payment terms on the invoice that differ from the agreement.</strong></li>
<li><strong>No right to pause work</strong> when invoices are overdue.</li>
<li><strong>No termination payment clause</strong>, leaving work done to date unpaid. A <a href="/blog/cancellation-fee-invoice">cancellation fee invoice</a> only works if the agreement allows it.</li>
<li><strong>Unsigned agreements</strong> or emails that never confirm acceptance.</li>
<li><strong>Copying a template from another country</strong> without checking local law.</li>
</ul>
<p>If a client disputes a charge anyway, the agreement is your main evidence; see <a href="/blog/invoice-dispute">how to handle an invoice dispute</a>. A solid service agreement template, paired with invoices that mirror it, removes most payment arguments before they start. Create those invoices with the <a href="/invoice-generator">invoice generator</a> on this site, which is free, needs no sign-up and builds a PDF in your browser for you to download and send.</p>
`,
  },
  {
    slug: "gift-certificate-template",
    title: "Gift Certificate Template: Numbering, Expiry and Accounting",
    description:
      "Gift certificate template guide: what to print, numbering and tracking, US expiry rules, sales tax, and how to record gift certificates in your books.",
    category: "design-templates",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-numbering-system", "payment-receipt-template", "price-list-template"],
    faqs: [
      {
        q: "Can a gift certificate expire?",
        a: "In the US, federal rules under the Credit CARD Act and Regulation E generally prohibit selling a gift certificate or store gift card that expires sooner than five years after it was issued or last loaded, and the expiry date must be clearly disclosed. Many states go further, and some ban expiry dates on most gift certificates entirely. Promotional certificates given away free are treated differently.",
      },
      {
        q: "Can I charge fees on unused gift certificates?",
        a: "Under federal rules, dormancy, inactivity or service fees are generally allowed only if the certificate has had no activity for at least 12 months, the fees are clearly disclosed, and no more than one such fee is charged per month. Several states ban these fees altogether. For a small business, the simplest approach is to charge no fees.",
      },
      {
        q: "Do I charge sales tax when I sell a gift certificate?",
        a: "Generally no. In most US states, selling a gift certificate is treated like accepting cash in advance, and sales tax is charged when the certificate is redeemed for taxable goods or services. The redemption sale is taxed at that time based on what the customer buys. Check your state revenue department's guidance, especially for certificates sold for a specific service.",
      },
      {
        q: "Is gift certificate money income when I sell it?",
        a: "For accounting purposes, cash from an unredeemed gift certificate is usually recorded as a liability (often called gift certificates outstanding or deferred revenue) because you still owe the customer goods or services. You record revenue when it is redeemed. Tax timing rules can differ from book rules, so ask your accountant how to report unredeemed certificates on your tax return.",
      },
      {
        q: "What happens to gift certificates that are never redeemed?",
        a: "Unredeemed balances are called breakage. Depending on your accounting method, you may recognize expected breakage as revenue over time or once redemption becomes unlikely. Separately, many states have unclaimed property laws that may require businesses to report and remit certain unredeemed gift certificate balances to the state after a dormancy period, with exemptions that vary by state.",
      },
      {
        q: "How do I stop gift certificate fraud?",
        a: "Give every certificate a unique, non-sequential-looking serial number or code, record it in a log when it is issued, and mark it redeemed when used. Use paper with a design that is hard to copy, add a signature, and for digital certificates use a code that is checked against your log. Never accept a certificate that is not in your log without investigating.",
      },
      {
        q: "Can a gift certificate be redeemed for cash?",
        a: "Most businesses state that certificates cannot be exchanged for cash, but some states require cash back when the remaining balance is below a small amount. Check your state's rules and print your policy on the certificate. If a customer spends less than the certificate value, record the remaining balance in your log or issue a new certificate for the difference.",
      },
      {
        q: "Should I give a receipt when I sell a gift certificate?",
        a: "Yes. Give the buyer a receipt showing the amount paid, date, payment method and the certificate number. This proves the purchase if the certificate is lost and helps your bookkeeping. If a business buys certificates in bulk, for example as employee rewards, send an invoice listing the certificate numbers and values.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A gift certificate template is a reusable design for prepaid vouchers that customers buy and give as gifts. Each certificate should show your business name, the value or service, a unique certificate number, issue date, any expiry date (in the US usually at least five years out), redemption terms and an authorized signature, with every number recorded in a tracking log.</p>
<p>Gift certificates bring in cash before you deliver anything and attract new customers who receive them. They also create a liability on your books and come with consumer protection rules. This guide covers what to print on a gift certificate template, how to number and track certificates, expiry rules, sales tax and the accounting entries.</p>

<h2>What Is a Gift Certificate?</h2>
<p>A gift certificate (or gift voucher) is a prepaid document that entitles the holder to goods or services from your business up to a stated value, or to a specific service such as "one 60-minute massage". It is common for salons, spas, restaurants, studios, retailers, photographers, trainers and makers.</p>
<table>
<thead><tr><th>Type</th><th>Example</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Fixed-value certificate</td><td>"$100 gift certificate"</td><td>Most flexible, simplest to account for</td></tr>
<tr><td>Service certificate</td><td>"One deep-tissue massage, 60 min"</td><td>State what happens if prices rise</td></tr>
<tr><td>Promotional voucher</td><td>"$20 off, free with any $100 purchase"</td><td>Not paid for by the customer; different rules apply</td></tr>
<tr><td>Digital gift card</td><td>Emailed code</td><td>Same tracking needs, code checked at checkout</td></tr>
</tbody>
</table>

<h2>What Should a Gift Certificate Template Include?</h2>
<ul>
<li><strong>Business name, logo and contact details</strong> (website, phone, address)</li>
<li><strong>Title:</strong> "Gift Certificate"</li>
<li><strong>Value</strong> in numbers and words, or the specific service</li>
<li><strong>To and From</strong> lines (optional but popular)</li>
<li><strong>Unique certificate number</strong></li>
<li><strong>Issue date</strong> and <strong>expiry date</strong> if any (see the rules below)</li>
<li><strong>Terms:</strong> how to redeem, booking requirements, not redeemable for cash (subject to state law), lost certificates policy</li>
<li><strong>Authorized signature</strong> or initials</li>
<li><strong>Promotional disclaimer</strong> on free vouchers ("Promotional voucher, no cash value")</li>
</ul>

<h3>Gift certificate example</h3>
<table>
<thead><tr><th>Field</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Business</td><td>Willow Day Spa, 52 Market St, Portland, OR</td></tr>
<tr><td>Certificate no.</td><td>GC-26-4K7Q</td></tr>
<tr><td>Value</td><td>$150.00 (One hundred fifty dollars)</td></tr>
<tr><td>To / From</td><td>Maria / Daniel</td></tr>
<tr><td>Issued</td><td>Oct 29, 2026</td></tr>
<tr><td>Expires</td><td>No expiration</td></tr>
<tr><td>Terms</td><td>Redeemable for any service or product. Book online or by phone and mention the certificate number. Remaining balance stays on file.</td></tr>
<tr><td>Authorized by</td><td>L. Chen</td></tr>
</tbody>
</table>

<h2>How to Number and Track Gift Certificates</h2>
<p>Numbering is your main protection against fraud and lost money. Use a format that includes the year and a code that is hard to guess, such as GC-26-4K7Q, rather than simple sequential numbers that are easy to fake. The <a href="/tools/invoice-number-generator">invoice number generator</a> can help you design a consistent format, and our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide explains the principles.</p>
<p>Keep a gift certificate log (a spreadsheet is fine):</p>
<table>
<thead><tr><th>Cert no.</th><th>Issued</th><th>Buyer</th><th>Paid</th><th>Value</th><th>Redeemed</th><th>Balance</th></tr></thead>
<tbody>
<tr><td>GC-26-4K7Q</td><td>Oct 29, 2026</td><td>Daniel R.</td><td>Card</td><td>$150.00</td><td>Nov 14: $95.00</td><td>$55.00</td></tr>
<tr><td>GC-26-9MX2</td><td>Oct 30, 2026</td><td>Acme Corp (invoice)</td><td>ACH</td><td>$50.00</td><td>No</td><td>$50.00</td></tr>
</tbody>
</table>
<p>The total of the Balance column should always equal the gift certificate liability in your books. Give each buyer a receipt with the certificate number; our <a href="/blog/payment-receipt-template">payment receipt template</a> covers what to include, and <a href="/blog/invoice-vs-receipt">invoice vs receipt</a> explains when each applies.</p>

<h2>Can Gift Certificates Expire? US Rules</h2>
<p>Under the federal Credit CARD Act of 2009, implemented in <a href="https://www.ecfr.gov/current/title-12/chapter-X/part-1005/subpart-A/section-1005.20">Regulation E, 12 CFR 1005.20</a>, gift certificates and store gift cards sold to consumers generally:</p>
<ul>
<li>Cannot expire sooner than <strong>five years</strong> after the date issued or the date funds were last loaded</li>
<li>Must clearly disclose the expiration date</li>
<li>Can carry dormancy, inactivity or service fees only after <strong>12 months of inactivity</strong>, with clear disclosure, and no more than one such fee per month</li>
</ul>
<p>Certificates given away for free as part of loyalty, award or promotional programs are generally exempt from these rules if they are clearly labeled as promotional. State laws can be stricter: some states ban expiration dates or fees on most gift certificates, and some require cash back for small remaining balances. Check your state's consumer protection or attorney general website. This is general information, not legal advice.</p>
<p>For most small businesses, "No expiration, no fees" is the simplest policy and avoids compliance questions.</p>

<h2>How to Account for Gift Certificates</h2>
<p>When you sell a gift certificate, you have received cash but not yet earned it. The usual entries:</p>
<table>
<thead><tr><th>Event</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Sell $150 certificate</td><td>Cash $150</td><td>Gift certificate liability $150</td></tr>
<tr><td>Redeem $95 for services (plus tax if taxable)</td><td>Gift certificate liability $95</td><td>Service revenue $95</td></tr>
<tr><td>Breakage recognized (per your policy)</td><td>Gift certificate liability</td><td>Breakage revenue, or unclaimed property payable if state law requires remittance</td></tr>
</tbody>
</table>
<p>Set up a dedicated liability account in your <a href="/blog/chart-of-accounts">chart of accounts</a>. Businesses following US GAAP generally recognize expected breakage in proportion to redemptions or when redemption becomes remote; small businesses on simpler methods should ask their accountant. Many states also have unclaimed property laws that can apply to unredeemed balances.</p>
<h3>Sales tax</h3>
<p>In most US states, the sale of a gift certificate is not taxable; tax is charged when it is redeemed for taxable items. In the example, if the $95 redemption were for taxable products at 8%, the customer would owe $7.60 tax at redemption, paid with the remaining certificate balance or another payment. See <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices</a> and use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to check amounts.</p>

<h2>Invoicing Bulk Gift Certificate Orders</h2>
<p>Businesses often buy certificates for employees or clients. Send an invoice that lists the certificate numbers so both sides can reconcile later:</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Value</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Gift certificates, $50 each (incl. GC-26-9MX2, full list attached)</td><td>20</td><td>$50.00</td><td>$1,000.00</td></tr>
<tr><td>Gift certificates, $100 each (list attached)</td><td>5</td><td>$100.00</td><td>$500.00</td></tr>
<tr><td colspan="3"><strong>Total (no sales tax on certificate sale)</strong></td><td><strong>$1,500.00</strong></td></tr>
</tbody>
</table>
<p>Create the invoice with the <a href="/invoice-generator">free invoice generator</a> and attach the list of numbers. If you sell candles or crafts and use certificates for holiday sales, our guide on <a href="/blog/how-to-start-a-candle-business">how to start a candle business</a> covers related pricing. If you publish your services in a <a href="/blog/price-list-template">price list</a>, state there whether certificates can be used for every item.</p>

<h2>How to Design and Print Gift Certificates</h2>
<ul>
<li><strong>Size:</strong> common choices are a DL envelope size (about 99 x 210 mm), a 4 x 9 in card, or a quarter-page that fits a greeting card. Print several per sheet and trim.</li>
<li><strong>Paper:</strong> heavy card stock (around 250 to 300 gsm) feels like a gift and is harder to photocopy convincingly.</li>
<li><strong>Branding:</strong> logo, brand colors and a short line about what you offer, so recipients who do not know you understand what they can buy.</li>
<li><strong>Security:</strong> unique code, signature, and optionally a stamp, foil sticker or perforated stub you keep for your records.</li>
<li><strong>Digital version:</strong> export the same design as a PDF with the code filled in for customers who want to email it.</li>
</ul>
<p>Keep the terms short on the front and put the full redemption terms on the back or on your website.</p>

<h2>Gift Certificate Policy Checklist</h2>
<ul>
<li>Expiry policy that meets federal and state rules (or no expiry)</li>
<li>No fees, or fees that meet the 12-month inactivity rules</li>
<li>Rules for partial redemption and remaining balances</li>
<li>Lost or stolen certificate policy (replace only with proof of purchase and an unused number in the log)</li>
<li>Whether certificates can be used for sale items, deposits or online orders</li>
<li>Price policy for service certificates when prices change</li>
<li>Who can issue and sign certificates</li>
<li>Monthly reconciliation of the log against the liability account</li>
</ul>

<h2>Common Gift Certificate Mistakes</h2>
<ul>
<li><strong>Sequential, guessable numbers</strong> that are easy to forge.</li>
<li><strong>No log</strong>, so partial balances and redemptions are lost.</li>
<li><strong>Recording sales as revenue immediately</strong> instead of as a liability.</li>
<li><strong>Charging sales tax twice</strong>, at sale and at redemption.</li>
<li><strong>Short expiry dates</strong> that break federal or state rules.</li>
<li><strong>Service certificates without a price policy</strong> when your prices go up.</li>
</ul>
<p>A good gift certificate template, a numbered log and correct accounting turn gift certificates into easy extra revenue. For corporate orders and receipts, use the <a href="/invoice-generator">invoice generator</a> on this site, which is free, needs no sign-up and creates a PDF in your browser that you can download and send.</p>
`,
  },
];
