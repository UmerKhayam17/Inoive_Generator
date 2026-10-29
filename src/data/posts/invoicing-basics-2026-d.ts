import type { PostDraft } from "../blog";

export const INVOICING_BASICS_2026_D_POSTS: PostDraft[] = [
  {
    slug: "paid-invoice-template",
    title: "Paid Invoice Template: How to Mark an Invoice as Paid",
    description:
      "Use a paid invoice template to mark an invoice as paid correctly: what to change, PAID stamp wording, partial payments, records to keep and a worked example.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "payment-receipt-template",
      "invoice-vs-receipt",
      "partial-payment-invoice",
      "cash-application",
    ],
    faqs: [
      {
        q: "What is a paid invoice?",
        a: "A paid invoice is the original invoice updated to show that the customer has settled it in full. It keeps the same invoice number, date, line items and total, then adds the payment date, the payment method, a reference such as a transaction ID, an amount paid figure equal to the total and a balance due of zero. Many businesses also add a visible PAID stamp or watermark.",
      },
      {
        q: "How do I mark an invoice as paid?",
        a: "Open the original invoice, keep its number and amounts unchanged, enter the amount received in the amount paid field so the balance due reads zero, and add a note with the payment date, method and reference. Add a PAID stamp or watermark if you like, save a new PDF and send it to the customer. Then record the payment against that invoice in your books.",
      },
      {
        q: "Is a paid invoice the same as a receipt?",
        a: "They do the same job in most small-business situations, because both prove that money changed hands for a specific sale. A receipt is a separate document issued when payment arrives, while a paid invoice is the original bill updated to show settlement. Some customers, expense systems or grant funders ask specifically for a receipt, so check what they need before sending a paid invoice instead.",
      },
      {
        q: "Should I change the invoice number when an invoice is paid?",
        a: "No. The invoice number identifies the sale, so the paid version must keep the same number as the original. Changing it creates a second invoice in your records, can double-count income and confuses the customer's accounts payable team. If you need to correct an amount on a paid invoice, issue a credit note referencing the original rather than renumbering or rewriting it.",
      },
      {
        q: "What should a PAID stamp say?",
        a: "Keep it short and factual. PAID, PAID IN FULL or PAID WITH THANKS are all common. Next to the stamp, or in the notes, state the payment date and method, for example Paid in full on 14 October 2026 by bank transfer, ref 88412. The stamp alone proves little, so the payment details are what make the document useful for both sides.",
      },
      {
        q: "Can I mark an invoice as partially paid?",
        a: "Yes. Enter the amount received in the amount paid field and the invoice will show the remaining balance due. Do not use a PAID stamp until the balance reaches zero, because a stamp on a part-paid invoice suggests nothing more is owed. Use wording such as Partially paid, balance due instead, and send an updated copy after each payment.",
      },
      {
        q: "How long should I keep paid invoices?",
        a: "In the US, the IRS says to keep records that support your return for at least 3 years in most cases, and longer in some situations such as underreported income or bad debt claims. In the UK, self-employed people must keep records for at least 5 years after the 31 January filing deadline of the relevant tax year. Keep paid invoices with the payment evidence that supports them.",
      },
      {
        q: "Do I need to send a paid invoice to the customer?",
        a: "It is not usually required, but it is good practice and many customers expect it. A paid invoice gives them proof for their records, helps their accounts team close the bill and avoids reminder emails being sent by mistake. If the customer paid by card or a platform that already issued a receipt, a short confirmation email may be enough unless they ask for the paid copy.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A paid invoice template is your original invoice updated to show it has been settled: same invoice number, date, items and total, plus the payment date, method and reference, an amount paid equal to the total and a balance due of zero. Add a PAID stamp or watermark only once the full amount has cleared.</p>

<p>Customers ask for paid invoices all the time. An accounts team needs one to close a bill, a client wants proof for an expense claim, or a grant funder asks for evidence that a supplier was paid. A paid invoice template gives you a consistent way to answer those requests without inventing a new document each time. You can build one in our <a href="/invoice-generator">free invoice generator</a> by reopening the original invoice and filling in the amount paid field.</p>

<p>This guide explains what changes (and what must not change) when you mark an invoice as paid, how a paid invoice differs from a receipt, how to handle deposits and partial payments, what records to keep, and a worked example with real totals.</p>

<h2>What is a paid invoice?</h2>
<p>A paid invoice is the same invoice you sent the customer, updated to record that payment has been received in full. It is not a new sale and it is not a new invoice. It simply moves the document from "money owed" to "money received" so that both parties have a record of the settled transaction.</p>
<p>That distinction matters because an invoice is a request for payment, as explained in our guide to <a href="/blog/what-is-an-invoice">what an invoice is</a>. Once the money arrives, you need some evidence of settlement. You have two choices: issue a separate receipt, or update the invoice itself. A paid invoice template is the second option, and for many freelancers and small businesses it is the simpler one because everything about the sale stays on one page.</p>
<p>A paid invoice typically shows:</p>
<ul>
<li>The original invoice number, issue date and due date.</li>
<li>The original line items, discount, tax and total, unchanged.</li>
<li>An amount paid figure equal to the total.</li>
<li>A balance due of 0.00.</li>
<li>The payment date, payment method and a reference such as a transaction ID, cheque number or last four digits of a card.</li>
<li>Optionally, a PAID stamp, watermark or heading.</li>
</ul>

<h3>When customers ask for a paid invoice</h3>
<p>Requests for a paid invoice usually come from one of a handful of places. A corporate accounts payable team may need it to close the bill in their system and stop automated chasers. An employee paying a business expense with a personal card may need it for a reimbursement claim. A client claiming a cost against a grant, insurance policy or project budget may have to show that the supplier was actually paid, not just billed. And some customers simply like a tidy file where every invoice carries a clear status.</p>
<p>Each of those readers is looking for the same three things: proof that the amount on the invoice matches what left their account, the date it was paid, and confirmation that nothing more is owed. A paid invoice answers all three on one page. If the reader specifically asks for a "receipt", check whether a paid invoice will do; many expense systems accept either, but some funders insist on a separately numbered receipt.</p>

<h2>Paid invoice vs receipt vs statement</h2>
<p>People use "paid invoice" and "receipt" interchangeably, but they are different documents. Our article on <a href="/blog/invoice-vs-receipt">invoice vs receipt</a> covers the general difference; the table below focuses on how a paid invoice fits in.</p>
<table>
<thead>
<tr><th>Document</th><th>When it is created</th><th>Main purpose</th><th>Numbering</th></tr>
</thead>
<tbody>
<tr><td>Invoice</td><td>When you bill the sale</td><td>Request payment</td><td>Invoice number</td></tr>
<tr><td>Paid invoice</td><td>After full payment arrives</td><td>Show the same sale is settled</td><td>Same invoice number</td></tr>
<tr><td>Payment receipt</td><td>When any payment arrives</td><td>Confirm a specific payment</td><td>Separate receipt number</td></tr>
<tr><td>Statement of account</td><td>Monthly or on request</td><td>Summarise all invoices and payments</td><td>Usually none, dated</td></tr>
</tbody>
</table>
<p>If a customer pays one invoice in one go, a paid invoice usually does everything they need. If they pay in several instalments, or pay several invoices with one transfer, a <a href="/blog/payment-receipt-template">payment receipt template</a> or a <a href="/blog/statement-of-account">statement of account</a> often explains the money better than a stack of updated invoices.</p>

<h2>How to mark an invoice as paid: step by step</h2>
<p>Marking an invoice as paid takes a couple of minutes if you follow the same routine every time.</p>
<ol>
<li><strong>Confirm the money has cleared.</strong> Check your bank or payment platform, not just a remittance email. A cheque that bounces or a card payment that is reversed means the invoice is not paid.</li>
<li><strong>Open the original invoice.</strong> Use the exact version you sent, with the same number, date and line items.</li>
<li><strong>Enter the amount paid.</strong> Type the amount received into the amount paid field. If it equals the total, the balance due becomes 0.00.</li>
<li><strong>Add payment details.</strong> In the notes, write the date received, the method and the reference, for example "Paid in full on 3 November 2026 by ACH, ref 55120."</li>
<li><strong>Add a PAID marker.</strong> Turn on a watermark with the word PAID, or add PAID IN FULL to the notes or terms.</li>
<li><strong>Save a new PDF.</strong> Keep both the original and the paid version so your records show the full history.</li>
<li><strong>Record the payment in your books.</strong> Match the payment to that invoice number in your ledger or spreadsheet. Our <a href="/blog/cash-application">cash application guide</a> explains how to match payments to invoices when remittance details are vague.</li>
<li><strong>Send the paid copy if requested.</strong> Email it with a short subject line such as "Invoice 1042: paid in full, thank you."</li>
</ol>

<h2>What must not change on a paid invoice</h2>
<p>The biggest mistake with paid invoices is editing the original sale details. Treat the original invoice as a fixed record. On the paid version, do not change:</p>
<ul>
<li><strong>The invoice number.</strong> It ties the sale to your books and your customer's records. A new number creates a duplicate, because each invoice number should represent exactly one sale.</li>
<li><strong>The issue date.</strong> The paid date goes in the notes; the issue date stays as it was.</li>
<li><strong>The line items and prices.</strong> If something was wrong, correct it with a <a href="/blog/credit-note-guide">credit note</a> that references the original invoice.</li>
<li><strong>The tax amount.</strong> Tax is calculated on the sale, not on the payment. Changing it on a paid invoice can create a mismatch with the tax return you filed.</li>
</ul>
<p>What you are allowed to add is information about payment: the amount paid, the balance due, the date, the method, the reference and a paid marker. That way the paid invoice is a true copy of the original plus a settlement record.</p>

<h2>PAID stamp wording and design</h2>
<p>A PAID stamp is a visual shortcut. Anyone flicking through a file can see which invoices are settled without reading the totals. Common wording includes:</p>
<ul>
<li><strong>PAID</strong> for a simple, clear marker.</li>
<li><strong>PAID IN FULL</strong> when you want to rule out any doubt about a remaining balance.</li>
<li><strong>PAID WITH THANKS</strong> for a friendlier tone with regular clients.</li>
<li><strong>PAID: 03 NOV 2026</strong> when you want the date inside the stamp itself.</li>
</ul>
<p>Keep the stamp large but semi-transparent so the line items stay readable. A diagonal watermark at around 15 to 25 percent opacity works well on most layouts. Our generator includes a watermark option with adjustable text and opacity, and it pairs well with clean layouts such as the <a href="/invoice-templates/minimal">minimal invoice template</a>.</p>
<p>Remember that the stamp is decoration. The payment date, method and reference are what turn a paid invoice into useful evidence, so never rely on the stamp alone.</p>

<h2>Worked example: marking an invoice as paid after a deposit</h2>
<p>Here is how a paid invoice template works with real numbers. A small design studio billed a client for a branding package and took a deposit up front.</p>
<table>
<thead>
<tr><th>Line item</th><th>Qty</th><th>Rate</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Logo and brand identity package</td><td>1</td><td>$1,200.00</td><td>$1,200.00</td></tr>
<tr><td>Business card design (2 versions)</td><td>2</td><td>$150.00</td><td>$300.00</td></tr>
<tr><td>Printing, 500 business cards</td><td>1</td><td>$180.00</td><td>$180.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$1,680.00</strong></td></tr>
<tr><td colspan="3">Discount (fixed, returning client)</td><td>-$80.00</td></tr>
<tr><td colspan="3">Sales tax 7% on $1,600.00</td><td>$112.00</td></tr>
<tr><td colspan="3">Shipping</td><td>$15.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$1,727.00</strong></td></tr>
</tbody>
</table>
<p>The 7 percent rate is only an example; check the rate that applies where you sell with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>. The client paid a $500.00 deposit when they signed, so the invoice originally showed amount paid $500.00 and balance due $1,227.00 ($1,727.00 minus $500.00). If you take deposits regularly, our <a href="/blog/deposit-invoice">deposit invoice guide</a> covers how to bill them.</p>
<p>On 3 November the client transferred the remaining $1,227.00. To create the paid invoice, the studio:</p>
<ul>
<li>Kept invoice number 1042 and the original issue date.</li>
<li>Changed amount paid from $500.00 to $1,727.00 ($500.00 deposit plus $1,227.00 final payment).</li>
<li>Checked that balance due now reads $0.00 ($1,727.00 minus $1,727.00).</li>
<li>Added a note: "Deposit $500.00 received 6 October 2026 by card. Balance $1,227.00 received 3 November 2026 by ACH, ref 55120. Paid in full."</li>
<li>Turned on a PAID watermark and saved a new PDF.</li>
</ul>
<p>Every number still adds up, both payments are traceable, and the client has one document that shows the full history of the sale.</p>

<h2>Partial payments: when not to use the PAID stamp</h2>
<p>A PAID stamp on an invoice that still has a balance is an invitation to an argument. If a client has paid part of an invoice, show the amount received and the balance due, and use wording like "Partially paid: balance due $1,227.00 by 15 November 2026." Our <a href="/blog/partial-payment-invoice">partial payment invoice guide</a> walks through instalments, short payments and how to word follow-ups.</p>
<p>If the customer paid less than expected because they deducted a fee or disputed a line, do not mark the invoice as paid. Either agree a credit note for the difference or chase the shortfall. The <a href="/blog/short-payments-and-deductions">guide to short payments and deductions</a> explains how to handle each case. Once the balance is genuinely zero, the PAID stamp can go on.</p>

<h2>Records to keep with paid invoices</h2>
<p>A paid invoice is strongest when it sits next to independent evidence of the payment. The IRS lists invoices alongside proof-of-payment documents such as canceled checks, electronic funds transfer records and card statements in its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep" target="_blank" rel="noopener noreferrer">IRS guidance on what records to keep</a>. In practice, for each paid invoice keep:</p>
<ul>
<li>The original invoice PDF as sent.</li>
<li>The paid version.</li>
<li>The bank, card or platform record of each payment.</li>
<li>Any remittance advice or email from the customer.</li>
<li>Any credit notes or refunds linked to the invoice.</li>
</ul>
<p>As of 2026, the IRS general rule is to keep records supporting your return for 3 years, with longer periods in certain cases such as underreported income or bad debt deductions. UK sole traders must keep records for at least 5 years after the 31 January submission deadline of the relevant tax year, according to <a href="https://www.gov.uk/self-employed-records/how-long-to-keep-your-records" target="_blank" rel="noopener noreferrer">GOV.UK guidance on how long to keep records</a>. Many businesses simply keep everything for six or seven years to be safe. This is general information, not tax or legal advice.</p>

<h2>Common mistakes with paid invoices</h2>
<ul>
<li><strong>Marking an invoice paid before the money clears.</strong> Pending transfers, post-dated cheques and disputed card payments are not cash yet.</li>
<li><strong>Issuing a new invoice instead of updating the old one.</strong> This doubles your recorded sales and confuses the customer.</li>
<li><strong>Deleting the original.</strong> Keep both versions so you can show what was billed and when it was paid.</li>
<li><strong>Leaving out the payment reference.</strong> Without it, matching the invoice to your bank statement later is guesswork.</li>
<li><strong>Using PAID on part-paid invoices.</strong> Always show the true balance due.</li>
<li><strong>Forgetting to stop reminders.</strong> If you send <a href="/blog/payment-reminder-emails">payment reminder emails</a>, cancel any scheduled ones as soon as the invoice is settled.</li>
</ul>

<h3>Paid invoice template checklist</h3>
<p>Before you send a paid invoice, check that it has:</p>
<ul>
<li>The same invoice number, issue date and line items as the original.</li>
<li>Amount paid equal to the total and a balance due of zero.</li>
<li>Payment date, method and reference in the notes.</li>
<li>A clear PAID marker that does not hide the figures.</li>
<li>Your business and customer details unchanged.</li>
<li>A file name that shows its status, such as "INV-1042-PAID.pdf".</li>
</ul>
<p>If you would rather send a separate document, see our <a href="/blog/payment-receipt-template">payment receipt template</a>. If the payment was a request you issued before work started, our new guide to the <a href="/blog/payment-request-template">payment request template</a> explains how that document fits with the final invoice.</p>

<h2>Create your paid invoice template now</h2>
<p>A paid invoice template is the simplest way to prove that a sale is settled: keep the original details, add the amount paid and payment reference, check the balance due is zero and apply a PAID marker. Open the <a href="/invoice-generator">invoice generator</a>, recreate or reload your invoice, enter the payment, switch on the watermark and download a clean PDF in seconds. If you are rebuilding an old invoice, copy the client details and line items exactly so nothing changes except the payment information.</p>
`,
  },
  {
    slug: "labor-and-materials-invoice",
    title: "Labor and Materials Invoice: Template, Markup and Sales Tax",
    description:
      "Build a labor and materials invoice that clients understand: separate parts and labor lines, markup, sales tax on materials, deposits and a worked example.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "contractor-invoice-template",
      "handyman-invoice-template",
      "markup-vs-margin",
      "construction-invoice-guide",
    ],
    faqs: [
      {
        q: "What is a labor and materials invoice?",
        a: "A labor and materials invoice is a bill that lists the work you performed and the parts or supplies you used as separate lines. Labor is usually shown as hours times an hourly rate or as a flat fee per task, and materials are listed by item, quantity and unit price. Separating the two helps clients check the bill and often matters for sales tax.",
      },
      {
        q: "Should labor and materials be listed separately on an invoice?",
        a: "In most cases, yes. Separate lines make the invoice easier to check, help you defend your pricing and make it simpler to apply the right sales tax treatment, because many US states tax materials and labor differently. Some fixed-price contracts are billed as a lump sum, but even then it is useful to keep a breakdown in your records in case the client or a tax auditor asks.",
      },
      {
        q: "Is labor taxable on an invoice?",
        a: "It depends on the state or country and the type of work. Many US states tax tangible materials but not repair or installation labor, while some states tax certain services too, and real property work can follow special contractor rules. In Texas, for example, nonresidential repair and remodeling is taxable in full. Check your state revenue department and confirm with a tax adviser before invoicing.",
      },
      {
        q: "How much markup should I add to materials?",
        a: "There is no single correct markup. Trades businesses commonly add a percentage on top of their material cost to cover sourcing time, transport, storage, waste and warranty risk. What matters is that the markup is consistent, covered by your contract or estimate, and produces a margin that keeps your business profitable. Our markup vs margin guide shows how to convert between the two figures.",
      },
      {
        q: "Do I have to show my material cost to the client?",
        a: "Usually not. Most contractors show the selling price of each material, which already includes any markup, rather than their own cost. The exception is a cost-plus or time-and-materials contract that promises cost plus a stated percentage, where the client may be entitled to see receipts. Read your contract terms, because what you agreed in writing decides what you must disclose.",
      },
      {
        q: "What is a parts and labor invoice?",
        a: "A parts and labor invoice is the same idea as a labor and materials invoice, with the wording common in repair trades such as auto, appliance and HVAC work. Parts are listed with part numbers, quantities and prices, and labor is shown as hours or a flat-rate job charge. The structure, tax treatment questions and markup decisions are the same as for any materials invoice.",
      },
      {
        q: "How do I invoice a deposit for materials?",
        a: "Ask for a deposit before ordering expensive or special-order materials, record it as a payment when it arrives and show it on the final invoice as amount paid so the balance due is correct. If the deposit is large, issue a separate deposit invoice first. State in your agreement whether the deposit is refundable once materials have been ordered.",
      },
      {
        q: "How do I handle sales tax on materials only with a single tax rate?",
        a: "If your invoicing tool applies one tax rate to the whole invoice and only materials are taxable, set the invoice tax rate to zero and add a separate line for the sales tax, calculated on the materials subtotal and labelled clearly with the rate and base. Alternatively, issue separate invoices for taxable and non-taxable parts. Either way, the arithmetic must be visible to the client.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A labor and materials invoice lists the work you did and the parts you supplied as separate lines: labor as hours times a rate or a flat task fee, materials by item, quantity and unit price. Add markup into the material prices, apply sales tax according to your state's rules, subtract any deposit and show the balance due.</p>

<p>If you fix, build or install things, almost every job mixes two kinds of cost: your time and the stuff you bring. A labor and materials invoice (often called a parts and labor invoice in repair trades) shows both clearly so the client can see what they are paying for and you can apply the right tax. You can build one in our <a href="/invoice-generator">free invoice generator</a> with one line per labor task and one line per material.</p>

<p>This guide covers how to structure the invoice, how to price labor and markup materials, how sales tax can differ between labor and materials, how to handle deposits, and a worked example with real arithmetic. For trade-specific layouts, see our guides for <a href="/blog/contractor-invoice-template">contractors</a> and <a href="/blog/handyman-invoice-template">handymen</a>.</p>

<h2>What is a labor and materials invoice?</h2>
<p>A labor and materials invoice is a bill for a job where you supply both work and goods. It differs from a pure service invoice (time only) and a pure sales invoice (goods only) because it has two distinct sections that may be priced, taxed and disputed differently.</p>
<p>Typical users include handymen, plumbers, electricians, HVAC technicians, painters, flooring installers, mechanics, appliance repairers and small builders. The invoice usually follows an estimate or quote, so the numbers should be easy to compare against what the client approved. Any difference between the estimate and the final bill should be explained on the invoice itself, not left for the client to discover.</p>

<h2>What to include on a labor and materials invoice</h2>
<p>Beyond the basics in our guide on <a href="/blog/how-to-write-an-invoice">how to write an invoice</a>, a labor and materials invoice needs a few extra details:</p>
<ul>
<li><strong>Job address and description.</strong> Where the work happened and a one-line summary, such as "Replace bathroom vanity and faucet."</li>
<li><strong>Labor lines.</strong> Each task or each worker type (for example technician vs helper) with hours and hourly rate, or a flat rate per task.</li>
<li><strong>Materials lines.</strong> Each significant item with quantity, unit and unit price. Small consumables can be grouped as "shop supplies" if your contract allows.</li>
<li><strong>Trip, call-out or disposal fees.</strong> Listed separately so they are not hidden in labor.</li>
<li><strong>Tax.</strong> The rate and the base it applies to, especially if only materials are taxable.</li>
<li><strong>Deposit and balance due.</strong> Any advance payment shown as amount paid.</li>
<li><strong>Warranty terms.</strong> Labor warranty period and whether manufacturer warranties apply to parts.</li>
<li><strong>Reference to the estimate or purchase order.</strong> So the client can match the invoice to what they approved.</li>
</ul>

<h2>Pricing labor: hourly vs flat rate</h2>
<p>Labor is usually billed in one of two ways, and both work on the same invoice layout.</p>
<table>
<thead>
<tr><th>Method</th><th>How it appears</th><th>Best for</th><th>Watch out for</th></tr>
</thead>
<tbody>
<tr><td>Hourly</td><td>Hours x hourly rate</td><td>Diagnostics, unpredictable repairs, small jobs</td><td>Clients questioning time; keep timesheets</td></tr>
<tr><td>Flat rate per task</td><td>1 x task price</td><td>Repeatable jobs such as fitting a faucet</td><td>Underpricing jobs that run long</td></tr>
<tr><td>Day rate</td><td>Days x day rate</td><td>Multi-day installs, crews</td><td>Defining what a day includes</td></tr>
<tr><td>Fixed price for whole job</td><td>One lump sum, breakdown optional</td><td>Quoted projects</td><td>Tax treatment if labor and materials are not separated</td></tr>
</tbody>
</table>
<h3>Minimum charges, call-out fees and travel time</h3>
<p>Small jobs can cost you more than they earn if you only bill the minutes spent on site. Many trades set a minimum labor charge (for example, one hour) or a separate call-out fee that covers travel and setup. Whatever you choose, put it in your price list or estimate, then show it as its own line on the invoice, such as "Call-out fee" or "Minimum labor charge (1 hour)". Billing travel time inside the hourly labor line without saying so is a common cause of disputes, because the client compares the hours on the bill with the time they saw you working.</p>
<h3>Tracking time and materials on the job</h3>
<p>The invoice is only as accurate as the records behind it. A simple job sheet, paper or phone app, should capture start and finish times for each visit, who worked, every part taken from the van or bought for the job, and anything returned unused. Photograph supplier receipts as you go and write the job name on them. At invoice time you then copy figures rather than reconstructing them from memory, and if the client queries a line you can show exactly where it came from.</p>
<p>If you are deciding between a fixed quote and billing actual time and parts, our sibling article on <a href="/blog/fixed-price-vs-time-and-materials">fixed price vs time and materials</a> compares the risks for each side.</p>

<h2>Pricing materials: cost, markup and disclosure</h2>
<p>Most trades businesses do not sell materials at cost. The price on the invoice includes a markup to cover the time spent sourcing and collecting parts, transport, storage, waste, returns and warranty callbacks. A markup is a percentage added to cost; margin is the percentage of the selling price that is profit. They are not the same number, and confusing them is a common way to underprice. Our <a href="/blog/markup-vs-margin">markup vs margin guide</a> explains the conversion.</p>
<p>Whether you show your cost depends on your contract:</p>
<ul>
<li><strong>Fixed or unit-price jobs:</strong> show only the selling price per item. Your cost is your business.</li>
<li><strong>Cost-plus or time-and-materials contracts:</strong> if you promised "cost plus 15 percent", the client may be entitled to see supplier receipts. Show cost and markup as stated in the contract.</li>
<li><strong>Client-reimbursed purchases:</strong> if you bought something on the client's behalf at their request, treat it as a reimbursable expense. Our <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses guide</a> covers how to bill pass-through costs.</li>
</ul>

<h2>Sales tax on labor vs materials</h2>
<p>This is the part that trips up most small contractors. In the US, sales tax is set state by state, and the treatment of labor and materials varies widely:</p>
<ul>
<li>Many states tax tangible goods, including parts sold during a repair, but not the repair or installation labor itself, provided the labor is separately stated.</li>
<li>Some states tax certain repair services as well as the parts.</li>
<li>Work on real property (buildings and fixtures) often follows special contractor rules, where the contractor pays tax on materials when buying them instead of charging the customer.</li>
</ul>
<p>Texas shows how much the type of job matters. According to the <a href="https://comptroller.texas.gov/taxes/publications/94-105.php" target="_blank" rel="noopener noreferrer">Texas Comptroller's local sales tax guide for sellers</a>, for nonresidential repair and remodeling the entire charge is subject to tax whether it is billed as a separated or lump-sum charge, while under separated contracts for new construction or residential repair and remodeling, tax is collected on the separately stated charge for materials. In other words, the same bathroom job can be taxed differently in an office than in a home.</p>
<p>The safe habits are: always list labor and materials on separate lines, note the tax base on the invoice, keep supplier receipts and check your own state's rules. Use our <a href="/tools/sales-tax-calculator">sales tax calculator</a> to check the combined rate for a job address. This is general information, not tax or legal advice; confirm the rules with your state revenue department or an adviser.</p>
<h3>Questions to answer before you set the tax on a job</h3>
<ul>
<li>Is the work on tangible personal property (an appliance, a vehicle) or on real property (a building, a fixed installation)?</li>
<li>Is the property residential or commercial?</li>
<li>Does your state tax the labor for this type of service, or only the parts?</li>
<li>Did you pay tax on the materials when you bought them, or buy them for resale with an exemption certificate?</li>
<li>Does the local rate depend on your business address or on the job site?</li>
</ul>
<p>Write the answers down once for each type of job you do, and you will not have to work them out again every time you invoice.</p>
<p>Outside the US, VAT systems such as the UK's usually tax the whole supply at one rate once you are registered, though construction has its own special rules. Our <a href="/invoice-generator/uk">UK invoice generator</a> includes VAT fields if you work there.</p>

<h2>Worked example: a parts and labor invoice with tax on materials only</h2>
<p>A handyman replaces a bathroom vanity and faucet in a private home. The job is in a state where materials are taxable at 8.25 percent and separately stated repair labor is not. (The rate and rule are illustrative; check your own state.) The client paid a $200.00 deposit so the handyman could buy the vanity.</p>
<table>
<thead>
<tr><th>Line item</th><th>Qty</th><th>Rate</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Labor: remove old vanity, install new vanity and faucet (hours)</td><td>6</td><td>$65.00</td><td>$390.00</td></tr>
<tr><td>Materials: 30-inch vanity with top</td><td>1</td><td>$289.00</td><td>$289.00</td></tr>
<tr><td>Materials: single-handle faucet</td><td>1</td><td>$95.00</td><td>$95.00</td></tr>
<tr><td>Materials: supply lines, P-trap, sealant</td><td>1</td><td>$36.00</td><td>$36.00</td></tr>
<tr><td>Sales tax 8.25% on materials ($420.00)</td><td>1</td><td>$34.65</td><td>$34.65</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$844.65</strong></td></tr>
<tr><td colspan="3">Amount paid (deposit)</td><td>-$200.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$644.65</strong></td></tr>
</tbody>
</table>
<p>Check the arithmetic: materials are $289.00 + $95.00 + $36.00 = $420.00. Tax is $420.00 x 8.25% = $34.65. Labor is 6 x $65.00 = $390.00. Total is $390.00 + $420.00 + $34.65 = $844.65. After the $200.00 deposit, the balance due is $644.65.</p>
<p>Our generator applies one tax rate to the whole invoice, so for a materials-only tax like this, set the invoice tax rate to 0 and add the tax as its own clearly labelled line, as shown above. If both labor and materials are taxable at the same rate, just enter the rate in the tax field instead. Enter the deposit in the amount paid field and the balance due calculates automatically.</p>

<h2>How to create a labor and materials invoice in 7 steps</h2>
<ol>
<li><strong>Pull up the estimate.</strong> Start from what the client approved so any differences are deliberate and explainable.</li>
<li><strong>Add your details and the client's.</strong> Include the job address if it differs from the billing address.</li>
<li><strong>Number and date the invoice.</strong> Use our <a href="/tools/invoice-number-generator">invoice number generator</a> if you do not have a numbering system yet.</li>
<li><strong>Enter labor lines.</strong> One line per task or worker type with hours and rate, using your timesheets.</li>
<li><strong>Enter materials lines.</strong> One line per significant item with quantity and selling price; group small consumables if allowed.</li>
<li><strong>Apply tax correctly.</strong> Either a single rate for everything, or a separate tax line on the taxable base.</li>
<li><strong>Record deposits and set terms.</strong> Enter any deposit as amount paid, add the due date and payment methods, then download the PDF.</li>
</ol>

<h2>Deposits, change orders and progress billing</h2>
<p>Materials are where contractors carry the most cash risk. You often pay suppliers before the client pays you, and special-order items may not be returnable. Protect yourself by taking a deposit for materials on larger jobs and stating in writing what happens to it if the client cancels. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> shows how to bill it.</p>
<p>When the scope changes mid-job, add a short written change order and bill the extra labor and materials as separate lines labelled with the change order number. For multi-stage building projects, progress billing and retainage are covered in the <a href="/blog/construction-invoice-guide">construction invoice guide</a>. US contractors working on real property should also learn their state's lien rules early, because preliminary notice deadlines often start running when work begins, not when payment is missed.</p>

<h2>Common mistakes on parts and labor invoices</h2>
<ul>
<li><strong>Lumping everything into one line.</strong> It invites disputes and can make the whole amount taxable where labor would otherwise be exempt.</li>
<li><strong>Forgetting small materials.</strong> Fixings, sealant and fittings add up across a year. Track them on job sheets.</li>
<li><strong>Charging tax on the wrong base.</strong> Charging tax on non-taxable labor overcharges the client; missing tax on taxable parts leaves you owing it.</li>
<li><strong>Not matching the estimate.</strong> Explain any variance in a note, such as "Additional 1.5 hours to free seized shutoff valve."</li>
<li><strong>Skipping warranty terms.</strong> State the labor warranty and that parts carry the manufacturer's warranty.</li>
<li><strong>Invoicing weeks after the job.</strong> The longer you wait, the less the client remembers the work and the more likely they are to question hours and parts. Invoice the day the job finishes, while the result is in front of them.</li>
</ul>
<p>Trade-specific examples with typical lines are in our <a href="/blog/plumbing-invoice-template">plumbing invoice template</a>.</p>

<h2>Send your labor and materials invoice</h2>
<p>A clear labor and materials invoice separates time from parts, prices materials with a consistent markup, applies tax on the right base and shows deposits as amount paid. Clients pay faster when they can check every line against the estimate. Open the <a href="/invoice-generator">invoice generator</a>, pick a layout such as the <a href="/invoice-templates/corporate">corporate invoice template</a>, add your labor and materials lines and download a professional PDF in minutes.</p>
`,
  },
  {
    slug: "payment-request-template",
    title: "Payment Request Template: Letter vs Invoice and Free Sample",
    description:
      "Use this payment request template to ask for money before or after work, see when a request for payment letter beats an invoice, with UK late payment maths.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["proforma-invoice-guide", "deposit-invoice", "overdue-invoice", "late-payment-fees"],
    faqs: [
      {
        q: "What is a payment request?",
        a: "A payment request is any document or message that asks a customer to pay a stated amount by a stated date. It can be an advance request before work starts, such as a deposit or retainer request, or a request for payment letter that chases an invoice already issued. Unlike an invoice, it does not have to record a completed sale, so it is often used before the supply happens.",
      },
      {
        q: "Is a payment request the same as an invoice?",
        a: "Not always. An invoice records a sale that has happened or been agreed and is the main document for tax and accounting. A payment request can come before any sale, as with a deposit or pro forma request, or after, as a letter chasing an unpaid invoice. If you are VAT-registered in the UK, a pre-supply request should not be presented as a VAT invoice.",
      },
      {
        q: "How do I write a request for payment letter?",
        a: "Open with the invoice number, amount and original due date, state politely that payment has not been received, give a new date for payment and repeat how to pay. Attach a copy of the invoice. On later letters, mention any late payment interest or fees your contract or the law allows. Keep the tone factual, because the letter may later be evidence if the debt goes to court.",
      },
      {
        q: "Can I send a payment request before doing the work?",
        a: "Yes. Advance payment requests are common for deposits, retainers, materials and subscriptions. State what the payment is for, the amount, the due date and what happens to it if the job is cancelled. When the work is done, issue the final invoice and show the advance as amount paid so the balance due is correct and nothing is billed twice.",
      },
      {
        q: "What does 'this is not a VAT invoice' mean on a payment request?",
        a: "HMRC guidance says pro forma invoices cannot be used to reclaim input tax and should be clearly marked this is not a VAT invoice. The wording tells a VAT-registered customer not to reclaim VAT from that document. Once you supply the goods or services or receive payment, you must issue a proper VAT invoice within the normal time limits.",
      },
      {
        q: "How much late payment interest can I charge in the UK?",
        a: "Under UK late payment legislation for business-to-business debts, statutory interest is 8 percent plus the Bank of England base rate, unless your contract sets a different rate. With Bank Rate at 3.75 percent in autumn 2026, that is 11.75 percent a year. You can also claim a fixed recovery sum of 40, 70 or 100 pounds depending on the size of the debt.",
      },
      {
        q: "When is a UK business payment legally late if no terms were agreed?",
        a: "GOV.UK guidance says that if no payment date was agreed, a commercial payment is late 30 days after the later of the customer receiving the invoice or the goods or services being delivered. Agreeing clear terms in writing and printing the due date on your invoice avoids any argument about when the clock started.",
      },
      {
        q: "Can I use an invoice generator to make a payment request?",
        a: "Yes. Create the document as usual, change the title or notes to make clear it is a payment request or deposit request, list what the payment covers and set the due date. Use a separate numbering series for requests so they are not confused with invoices. After payment, issue the final invoice and enter the advance in the amount paid field.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A payment request template asks a customer to pay a set amount by a set date. Use it before work starts (deposits, retainers, materials) or after an invoice is overdue (a request for payment letter). It should state who is paying whom, what the money covers, the amount, due date, how to pay and the invoice or quote it relates to.</p>

<p>Not every request for money is an invoice. Sometimes you need cash before you can start, such as a deposit to secure a booking or to buy materials. Sometimes an invoice already exists and you need a firmer nudge to get it paid. A payment request template covers both situations, and choosing the right format keeps your records clean and your customer clear about what they owe. You can produce both kinds of document in our <a href="/invoice-generator">free invoice generator</a>.</p>

<p>This guide explains the difference between a payment request, a request for payment letter and an invoice, gives templates for each, shows UK late payment interest worked out with real numbers and lists the mistakes that slow payment down.</p>

<h2>What is a payment request template?</h2>
<p>A payment request template is a reusable format for asking a customer to pay. It comes in two broad types:</p>
<ul>
<li><strong>Advance payment request.</strong> Sent before the goods or services are supplied: a deposit, retainer, booking fee, materials payment or subscription in advance. It is close to a <a href="/blog/proforma-invoice-guide">pro forma invoice</a>.</li>
<li><strong>Request for payment letter.</strong> Sent after an invoice is due or overdue, asking for settlement and setting out the next steps. It is part of your collections process alongside <a href="/blog/payment-reminder-emails">payment reminder emails</a>.</li>
</ul>
<p>In both cases the request is not the core accounting record of the sale. That job belongs to the invoice, as explained in our guide to <a href="/blog/what-is-an-invoice">what an invoice is</a>.</p>

<h2>Payment request vs invoice: what is the difference?</h2>
<table>
<thead>
<tr><th>Feature</th><th>Advance payment request</th><th>Invoice</th><th>Request for payment letter</th></tr>
</thead>
<tbody>
<tr><td>When sent</td><td>Before supply</td><td>At or after supply</td><td>After the due date</td></tr>
<tr><td>Records a sale?</td><td>No, requests money in advance</td><td>Yes</td><td>No, chases an existing invoice</td></tr>
<tr><td>Tax document?</td><td>Usually not (mark it as not a VAT invoice in the UK)</td><td>Yes, the main tax record</td><td>No</td></tr>
<tr><td>Numbering</td><td>Separate request series</td><td>Sequential invoice number</td><td>References the invoice number</td></tr>
<tr><td>Typical tone</td><td>Neutral, practical</td><td>Neutral</td><td>Polite, then firmer</td></tr>
</tbody>
</table>
<p>For UK VAT-registered businesses this distinction has tax consequences. HMRC's <a href="https://www.gov.uk/guidance/vat-guide-notice-700" target="_blank" rel="noopener noreferrer">VAT guide (Notice 700)</a> says pro forma invoices cannot be used as evidence to reclaim input tax and should be clearly marked "this is not a VAT invoice". When you then supply the goods or services or receive payment, you issue a proper VAT invoice. HMRC also notes that VAT is due on deposits that are part payments for a supply, so a paid deposit can create a tax point. This is general information, not tax or legal advice.</p>

<h2>Advance payment request template</h2>
<p>Use this structure when you need money before you start:</p>
<ul>
<li><strong>Title:</strong> "Payment Request" or "Deposit Request", not "Invoice".</li>
<li><strong>Request number:</strong> a separate series such as PR-2026-014, so requests never collide with invoice numbers.</li>
<li><strong>Your details and the customer's.</strong></li>
<li><strong>Reference:</strong> the quote, estimate or contract number. See our <a href="/blog/estimate-template">estimate template</a> if you do not issue quotes yet.</li>
<li><strong>What the payment covers:</strong> for example "40% deposit for kitchen design project as per quote Q-118".</li>
<li><strong>Amount and currency.</strong></li>
<li><strong>Due date</strong> and what happens if it is missed (for example, the booking is released).</li>
<li><strong>Payment methods</strong> and reference to quote.</li>
<li><strong>Refund and cancellation terms.</strong></li>
<li><strong>Tax note:</strong> in the UK, "This is not a VAT invoice. A VAT invoice will be issued on payment."</li>
</ul>
<h3>Retainers, milestones and subscriptions</h3>
<p>The same template works for other kinds of advance billing. A retainer request asks for a fixed sum each month in return for reserved time; state the period it covers and what happens to unused hours. A milestone request asks for the next stage payment on a longer project; reference the milestone by name or number from the contract, such as "Milestone 2: design approval", so the client can tick it off. A subscription or membership request covers a future period of access; give the start and end dates. In each case the request is about money for something not yet delivered, so keep it on its own numbering series and convert it to an invoice in line with your accounting and tax rules.</p>
<p>Our <a href="/blog/deposit-invoice">deposit invoice guide</a> covers when to use a formal deposit invoice instead of a request, which some customers' accounts teams require before they will pay anything.</p>

<h2>Request for payment letter template</h2>
<p>When an invoice is overdue, a short formal letter often works better than another casual email. A simple structure:</p>
<ol>
<li><strong>Subject line:</strong> "Request for payment: Invoice 2088, 4,200.00 GBP, due 30 September 2026."</li>
<li><strong>Opening:</strong> "Our records show that invoice 2088, issued on 31 August 2026 for website development, remains unpaid."</li>
<li><strong>The facts:</strong> amount, original due date, any part payments received and the balance outstanding.</li>
<li><strong>The request:</strong> "Please arrange payment of the balance by 14 November 2026."</li>
<li><strong>How to pay:</strong> bank details, payment link or other methods.</li>
<li><strong>Next steps:</strong> on a second or final letter, mention interest and fees you are entitled to, and what you will do if payment is not received.</li>
<li><strong>Sign-off and attachment:</strong> attach the invoice PDF and, if useful, a <a href="/blog/statement-of-account">statement of account</a> showing all open items.</li>
</ol>
<h3>Sample request for payment letter</h3>
<p>Here is a complete first-stage letter you can adapt:</p>
<p><em>Dear Ms Clarke,</em></p>
<p><em>Re: Invoice 2088, website development, 4,200.00 GBP</em></p>
<p><em>Our records show that invoice 2088, issued on 31 August 2026 with payment due on 30 September 2026, has not yet been paid. A copy is attached for your convenience.</em></p>
<p><em>Please arrange payment of 4,200.00 GBP by 14 November 2026 by bank transfer to the account shown on the invoice, quoting 2088 as the reference. If you have already paid, please send the payment date and reference so we can match it, and accept our thanks.</em></p>
<p><em>If there is a problem with the invoice, please let us know by return so we can resolve it quickly.</em></p>
<p><em>Kind regards, Sam Jones, Jones Web Studio</em></p>
<p>Notice what the letter does: it states the facts, gives a specific date, offers a way out if payment was already made and invites the client to raise any dispute now rather than later. A second letter repeats the facts and adds the interest and recovery costs you are entitled to; a final letter states what you will do next and by when.</p>
<p>Keep the language factual and calm. If the debt ends up in court, the judge will read your letters. Our guide to <a href="/blog/overdue-invoice">overdue invoices</a> maps out the full escalation path.</p>

<h2>Worked example: a UK request for payment with statutory interest</h2>
<p>A UK web developer issued invoice 2088 for 4,200.00 pounds to a business client, due on 30 September 2026. By 30 October 2026 it is 30 days late and the contract says nothing about late payment interest.</p>
<p>According to <a href="https://www.gov.uk/late-commercial-payments-interest-debt-recovery/charging-interest-commercial-debt" target="_blank" rel="noopener noreferrer">GOV.UK guidance on charging interest on commercial debt</a>, statutory interest for business-to-business transactions is 8 percent plus the Bank of England base rate. As of autumn 2026 Bank Rate stands at 3.75 percent, so the statutory rate is 11.75 percent a year. GOV.UK also sets fixed debt recovery sums of 40 pounds for debts up to 999.99, 70 pounds for debts of 1,000 to 9,999.99, and 100 pounds for debts of 10,000 or more.</p>
<table>
<thead>
<tr><th>Item</th><th>Calculation</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Unpaid invoice</td><td>Original total</td><td>4,200.00</td></tr>
<tr><td>Daily interest</td><td>4,200.00 x 11.75% / 365</td><td>1.35 per day</td></tr>
<tr><td>Interest for 30 days</td><td>4,200.00 x 11.75% x 30 / 365</td><td>40.56</td></tr>
<tr><td>Fixed recovery sum</td><td>Debt between 1,000 and 9,999.99</td><td>70.00</td></tr>
<tr><td><strong>Total now claimed</strong></td><td>4,200.00 + 40.56 + 70.00</td><td><strong>4,310.56</strong></td></tr>
</tbody>
</table>
<p>Two details matter here. First, GOV.UK tells you to check the current and previous Bank of England base rates when you work out the figure, and follows the same method used here: annual interest divided by 365, multiplied by the days late. Do not rely on an old rate from a previous letter. Second, the fixed sum can only be claimed once per invoice, however many letters you send.</p>
<p>The letter states the balance, the interest accrued so far, the daily rate going forward and the recovery sum, and asks for payment by a new date. Interest keeps running until payment, so give the daily figure rather than a single frozen total. Our <a href="/blog/late-payment-fees">late payment fees guide</a> covers how this compares with US late fee rules. This is general information, not legal advice.</p>

<h2>How to send a payment request in 6 steps</h2>
<ol>
<li><strong>Pick the right document.</strong> Before the work: payment request or deposit invoice. After the due date: request for payment letter referencing the invoice.</li>
<li><strong>Number it correctly.</strong> Requests get their own series; letters quote the invoice number. Our <a href="/tools/invoice-number-generator">invoice number generator</a> helps you set up prefixes.</li>
<li><strong>State exactly what the money is for.</strong> Reference the quote, contract or invoice.</li>
<li><strong>Set a firm date.</strong> "By 14 November 2026" works better than "as soon as possible". Our article on <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains common options.</li>
<li><strong>Make paying easy.</strong> Include every payment method you accept. Our sibling guide to the <a href="/blog/best-payment-methods-for-small-business">best payment methods for small business</a> compares costs and speed.</li>
<li><strong>Follow up on schedule.</strong> Diary the due date and send the next step the day after it passes.</li>
</ol>

<h2>Turning a paid request into the final invoice</h2>
<p>Once the advance arrives, the paperwork needs to catch up. Issue the invoice when the work is done (or immediately, if your tax rules require an invoice when payment is received), list the full price, and enter the advance in the amount paid field so the balance due shows only what is left. For example, on a 6,000.00 project with a 2,400.00 deposit (40 percent), the final invoice shows a total of 6,000.00, amount paid 2,400.00 and balance due 3,600.00.</p>
<p>When the balance is settled, mark the invoice as paid. Our sibling guide to the <a href="/blog/paid-invoice-template">paid invoice template</a> shows exactly what to change.</p>

<h2>When payment requests go wrong</h2>
<ul>
<li><strong>Calling a pre-payment request an invoice.</strong> This can double-count sales and, for VAT-registered businesses, mislead customers into reclaiming VAT on the wrong document.</li>
<li><strong>Using invoice numbers for requests.</strong> If a request is never paid, you are left with a gap or a cancelled invoice in your sequence.</li>
<li><strong>Vague amounts.</strong> "Balance of project" without a figure invites delay. Always state the exact amount.</li>
<li><strong>No reference.</strong> Without a quote or invoice number, the customer's accounts team may not be able to approve payment.</li>
<li><strong>Threats you cannot back up.</strong> Only mention interest, fees or action you are entitled to and willing to take.</li>
<li><strong>Waiting too long.</strong> The longer an invoice is overdue, the harder it is to collect. Follow a fixed timetable.</li>
<li><strong>Sending it to the wrong person.</strong> Your project contact may not be the person who pays. Ask early who handles supplier payments and copy them on every request.</li>
<li><strong>Ignoring the customer's process.</strong> Larger customers often need a purchase order number or supplier setup before they can pay anything, including a deposit. Ask what they need when you send the first request, not after it is overdue.</li>
</ul>

<h2>Payment request wording examples</h2>
<p>Short, specific wording gets paid faster. A few examples you can adapt:</p>
<ul>
<li><strong>Deposit:</strong> "Please pay a 40% deposit of 2,400.00 by 7 November 2026 to secure your project start date of 17 November. The balance will be invoiced on completion."</li>
<li><strong>Materials:</strong> "Payment of 850.00 is requested before we order the special-order tiles listed in quote Q-221. Ordered materials are non-refundable."</li>
<li><strong>First overdue request:</strong> "Invoice 2088 for 4,200.00 was due on 30 September. Could you let us know when payment will be made?"</li>
<li><strong>Final request:</strong> "Unless the balance of 4,310.56, including statutory interest and recovery costs, is received by 14 November, we will consider further action."</li>
</ul>
<p>Whatever wording you choose, keep the amount, the reference and the date in the first two sentences. People skim payment emails on their phones, and anything below the fold may never be read.</p>

<h2>Create your payment request template</h2>
<p>A good payment request template is clear about what it is: an advance request that is not yet an invoice, or a formal request for payment that points to one. State the amount, the reason, the date and how to pay, keep separate numbering and convert paid requests into proper invoices. Build yours in the <a href="/invoice-generator">invoice generator</a>, choose a clean layout such as the <a href="/invoice-templates/modern">modern invoice template</a>, and download a PDF ready to send.</p>
`,
  },
  {
    slug: "delivery-note-template",
    title: "Delivery Note Template: What to Include and Proof of Delivery",
    description:
      "Use this delivery note template to record what was shipped and received, get proof of delivery signed, handle part deliveries and match notes to invoices.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "packing-slip-vs-invoice",
      "delivery-challan-format",
      "three-way-match",
      "bill-of-lading-vs-commercial-invoice",
    ],
    faqs: [
      {
        q: "What is a delivery note?",
        a: "A delivery note is a document that travels with goods and lists what is being delivered: item descriptions, codes and quantities, plus the order number, delivery address and date. It usually has no prices. The customer checks the goods against it and signs a copy, which the supplier keeps as proof of delivery. It supports the invoice but does not replace it.",
      },
      {
        q: "Is a delivery note the same as an invoice?",
        a: "No. A delivery note confirms what goods were delivered and received, while an invoice asks for payment for them. The delivery note normally has no prices or tax, and the invoice is the document used for accounting and VAT or sales tax. Some small businesses combine them on one page, but keeping them separate makes part deliveries and disputes easier to manage.",
      },
      {
        q: "Who signs a delivery note?",
        a: "The person receiving the goods signs the delivery note, ideally printing their name and adding the date and time. The driver or courier may also sign. The signed copy goes back to the supplier as proof of delivery, and the customer keeps another copy. If anything is damaged or short, the receiver should write that on the note before signing.",
      },
      {
        q: "What is the difference between a delivery note and a packing slip?",
        a: "The two overlap and many businesses use the terms interchangeably. A packing slip usually sits inside a parcel and lists its contents, mainly for the customer's convenience. A delivery note is more formal: it is often printed in two or more copies, carries a delivery reference and is signed on receipt to serve as proof of delivery, particularly for business-to-business and pallet deliveries.",
      },
      {
        q: "Should a delivery note show prices?",
        a: "Usually not. Leaving prices off means warehouse staff, drivers and the person receiving goods do not see commercial information, and it avoids confusion between the delivery note and the invoice. Some businesses include prices when the delivery note doubles as an invoice for cash customers, but in that case it must meet all invoice requirements, including an invoice number and any tax details.",
      },
      {
        q: "What is proof of delivery?",
        a: "Proof of delivery, often shortened to POD, is evidence that goods reached the customer. It can be a signed delivery note, a courier's electronic signature capture, a photo of the goods at the address, or a tracking record showing delivery. Suppliers use it to answer claims that goods never arrived and to support the invoice if payment is disputed.",
      },
      {
        q: "How do I record a part delivery on a delivery note?",
        a: "Show the quantity ordered, the quantity delivered on this note and the quantity still to follow for each line. Reference the same order number on every delivery note so the customer can track the full order. Invoice only what was delivered, or follow the billing terms in your contract, and issue further delivery notes for the backordered items when they ship.",
      },
      {
        q: "How long should I keep signed delivery notes?",
        a: "Keep them at least as long as the invoices they support, because they are part of the evidence for each sale. UK self-employed people must keep business records for at least 5 years after the 31 January filing deadline, and the IRS generally recommends 3 years or more for records supporting a return. Scanned copies are usually fine if they are clear and complete.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A delivery note template lists the goods in a shipment, with item descriptions, codes and quantities, the order number, delivery address and date, but usually no prices. The customer checks the goods against it and signs a copy, which becomes your proof of delivery. You then issue an invoice for what was actually delivered.</p>

<p>If you ship goods to business customers, a delivery note is the document that settles "did it arrive?" before anyone argues about "how much do I owe?". It travels with the goods, gets signed by the receiver and comes back to you as proof that the order was fulfilled. Your invoice, which you can build in our <a href="/invoice-generator">free invoice generator</a>, then bills exactly what the delivery note confirms.</p>

<p>This guide explains what a delivery note template should include, how it differs from an invoice and a packing slip, how proof of delivery works, how to handle part deliveries, and a worked example matching a delivery note to an invoice. If you ship within India under GST, the rules for a <a href="/blog/delivery-challan-format">delivery challan</a> apply instead.</p>

<h2>What is a delivery note?</h2>
<p>A delivery note (sometimes called a delivery docket, goods delivery note or dispatch note) is a document that accompanies goods to the customer. It lists what is in the delivery so the receiver can check it on arrival. Most delivery notes are produced in at least two copies: one stays with the customer and one is signed and returned to the supplier.</p>
<p>The delivery note sits in the middle of the order-to-cash cycle. The customer raises a purchase order, you ship with a delivery note, the customer signs for the goods, and you send an invoice. On the customer's side, accounts payable teams often compare all three before paying, a process explained in our guide to <a href="/blog/three-way-match">three-way matching</a>. A clear delivery note makes that match easy and gets you paid faster.</p>

<h2>Delivery note vs invoice vs packing slip</h2>
<p>These documents overlap, which is why people mix them up. Our article on <a href="/blog/packing-slip-vs-invoice">packing slip vs invoice</a> covers the packing slip in depth; the table below shows where the delivery note fits.</p>
<table>
<thead>
<tr><th>Feature</th><th>Delivery note</th><th>Packing slip</th><th>Invoice</th></tr>
</thead>
<tbody>
<tr><td>Main purpose</td><td>Confirm goods delivered and received</td><td>List parcel contents</td><td>Request payment</td></tr>
<tr><td>Prices shown</td><td>Usually no</td><td>Usually no</td><td>Yes</td></tr>
<tr><td>Signed by receiver</td><td>Yes, as proof of delivery</td><td>Rarely</td><td>No</td></tr>
<tr><td>Tax details</td><td>No</td><td>No</td><td>Yes, where applicable</td></tr>
<tr><td>Typical use</td><td>B2B, pallets, own-vehicle deliveries</td><td>Ecommerce parcels</td><td>Every sale</td></tr>
<tr><td>Travels with goods</td><td>Yes</td><td>Yes</td><td>Usually sent separately</td></tr>
</tbody>
</table>
<p>For international shipments, the carrier's transport document and the commercial invoice take centre stage, as explained in <a href="/blog/bill-of-lading-vs-commercial-invoice">bill of lading vs commercial invoice</a>. A delivery note can still travel with the goods for the final recipient.</p>

<h2>What to include in a delivery note template</h2>
<p>A practical delivery note template includes:</p>
<ul>
<li><strong>Title and delivery note number:</strong> "Delivery Note DN-2026-0315". Use a separate series from invoices.</li>
<li><strong>Supplier details:</strong> business name, address and contact number for delivery queries.</li>
<li><strong>Customer details:</strong> name, and both billing and delivery address if they differ. Our guide to <a href="/blog/billing-address-vs-shipping-address">billing vs shipping address</a> explains why both matter.</li>
<li><strong>Customer purchase order number:</strong> essential for the customer's matching process. See <a href="/blog/invoice-vs-purchase-order">invoice vs purchase order</a>.</li>
<li><strong>Dispatch date and expected delivery date.</strong></li>
<li><strong>Line items:</strong> product code, description, unit, quantity ordered, quantity delivered and quantity to follow.</li>
<li><strong>Package details:</strong> number of cartons or pallets and, for heavier freight, total weight.</li>
<li><strong>Carrier details:</strong> own vehicle, courier name or haulier, and any tracking number.</li>
<li><strong>Receiver confirmation block:</strong> signature, printed name, date, time and a space for notes on damage or shortages.</li>
<li><strong>Instruction to the receiver:</strong> for example "Please check goods before signing. Report shortages or damage within 48 hours."</li>
</ul>

<h3>Sample delivery note layout</h3>
<p>Laid out top to bottom, a simple one-page delivery note reads like this:</p>
<ul>
<li><strong>Header:</strong> your logo and business name, the words "Delivery Note", the delivery note number and the dispatch date.</li>
<li><strong>Two address blocks:</strong> "Deliver to" on the left, "Invoice to" on the right, with a contact name and phone number for the delivery site.</li>
<li><strong>Reference strip:</strong> customer PO number, your sales order number, carrier and number of packages.</li>
<li><strong>Items table:</strong> code, description, unit, ordered, delivered, to follow.</li>
<li><strong>Notes:</strong> delivery instructions such as "Rear entrance, call 30 minutes before arrival" or "Fragile: do not stack".</li>
<li><strong>Receiver block:</strong> "Received in good condition except as noted", followed by lines for signature, printed name, date and time, and a box for exceptions.</li>
</ul>
<p>Keep it to a single page wherever possible. Drivers and warehouse staff read it standing up, often in poor light, so large quantities and clear codes matter more than design flourishes.</p>

<h2>Proof of delivery: how a signed delivery note protects you</h2>
<p>Proof of delivery (POD) is evidence that the goods reached the customer in the stated condition. A signed delivery note is the classic form; others include a courier's electronic signature, a photo at the delivery address or a tracking record. Strong PODs share a few features:</p>
<ul>
<li>A legible printed name, not just a scribble.</li>
<li>The date and time of receipt.</li>
<li>Quantities that match what was actually unloaded.</li>
<li>Any exceptions written on the note before signing, such as "1 carton crushed" or "2 units short".</li>
</ul>
<h3>Electronic proof of delivery</h3>
<p>Many couriers and an increasing number of small delivery operations now capture POD on a phone or handheld device instead of paper. The driver records the receiver's signature on screen, takes a photo of the goods at the door or loading bay and the app stamps the time and location. For a supplier this can be stronger than paper because the record cannot be lost in a van and is available the moment the delivery is made. Whichever method you use, make sure you can retrieve the POD quickly and attach it to an email if a customer asks, and that it is linked to the delivery note number and order reference.</p>
<h3>What to do when the delivery is short or damaged</h3>
<p>Ask the receiver to write the problem on the delivery note before signing, for example "2 cartons received damaged, contents not checked". The driver should not argue or ask the receiver to sign clean. Back at base, raise a replacement or a <a href="/blog/credit-note-guide">credit note</a> for the affected goods rather than editing the original invoice, and, if a third-party carrier was involved, start their claims process within their time limits. The annotated delivery note is the starting point for every one of those steps.</p>
<p>If a customer later says goods never arrived, or withholds part of the invoice, the POD is your main evidence. Customers that deduct disputed amounts without warning are covered in our guide to <a href="/blog/short-payments-and-deductions">short payments and deductions</a>, and disputes more generally in our <a href="/blog/invoice-dispute">invoice dispute guide</a>. Keep signed delivery notes with the invoices they support; the record-keeping periods are the same.</p>

<h2>Delivery notes and the VAT tax point (UK)</h2>
<p>For UK VAT-registered sellers, the delivery date matters for tax as well as for logistics. HMRC's <a href="https://www.gov.uk/guidance/vat-guide-notice-700" target="_blank" rel="noopener noreferrer">VAT guide (Notice 700)</a> says the basic tax point for goods is usually the date you send them to your customer or the customer takes them away. If you issue a VAT invoice within 14 days after that basic tax point, the invoice date normally becomes the tax point instead. HMRC also says you should normally issue a VAT invoice within 30 days of the tax point.</p>
<p>A dated delivery note therefore helps you show when the basic tax point arose. That matters most at the end of a VAT period: goods dispatched on 30 September and invoiced on 2 October can fall into different periods depending on which date sets the tax point, and the delivery note is the record that proves the dispatch date. It is not a VAT invoice itself: the invoice still needs the details listed in <a href="https://www.gov.uk/invoicing-and-taking-payment-from-customers/invoices-what-they-must-include" target="_blank" rel="noopener noreferrer">GOV.UK guidance on what invoices must include</a>. Our <a href="/invoice-generator/uk">UK invoice generator</a> includes VAT fields. This is general information, not tax advice.</p>

<h2>Worked example: a part delivery matched to the invoice</h2>
<p>A UK wholesaler receives purchase order PO-7781 for 120 ceramic mugs at 4.50 pounds each. Only 96 are in stock, so it ships those and backorders the rest. The delivery note looks like this:</p>
<table>
<thead>
<tr><th>Code</th><th>Description</th><th>Ordered</th><th>Delivered</th><th>To follow</th></tr>
</thead>
<tbody>
<tr><td>MUG-WH-12</td><td>White ceramic mug, 12 oz</td><td>120</td><td>96</td><td>24</td></tr>
<tr><td colspan="5">Packages: 4 cartons of 24 units. Carrier: own van. Received by: J. Patel, 28/10/2026 10:42, "All 4 cartons received in good condition."</td></tr>
</tbody>
</table>
<p>The invoice then bills only what was delivered:</p>
<ul>
<li>96 mugs x 4.50 = 432.00</li>
<li>VAT at 20% on 432.00 = 86.40</li>
<li>Total due = 432.00 + 86.40 = 518.40</li>
</ul>
<p>The invoice quotes PO-7781 and delivery note DN-2026-0315, so the customer's accounts team can match purchase order, signed delivery note and invoice line for line. When the remaining 24 mugs ship, a second delivery note (DN-2026-0329) and a second invoice for 24 x 4.50 = 108.00 plus VAT of 21.60 (total 129.60) follow. Across both deliveries the customer pays 518.40 + 129.60 = 648.00, which equals 120 x 4.50 = 540.00 plus 20% VAT of 108.00.</p>

<h3>Who uses delivery notes</h3>
<p>Delivery notes are most common wherever goods move between businesses on account rather than being paid for at the till: wholesalers and distributors supplying shops, manufacturers shipping to other manufacturers, builders' merchants delivering to sites, caterers delivering to offices, and printers delivering finished jobs. Larger customers often insist on one, because their goods-in team will not accept a delivery that cannot be matched to an order. Smaller customers appreciate one too, because it lets them check a delivery against their order before the invoice arrives.</p>

<h2>How to create a delivery note in 6 steps</h2>
<ol>
<li><strong>Start from the order.</strong> Copy the customer's PO number, delivery address and requested items.</li>
<li><strong>Pick and count.</strong> Record the quantity actually packed, not the quantity ordered.</li>
<li><strong>Fill in the template.</strong> Add the delivery note number, dates, line items and package count; leave prices off.</li>
<li><strong>Print two copies.</strong> One for the customer, one for signature and return. Electronic POD apps can replace paper.</li>
<li><strong>Get it signed on arrival.</strong> Ask the receiver to check the goods, note any problems, print their name and sign.</li>
<li><strong>Invoice from the signed note.</strong> Bill the delivered quantities and reference both the PO and the delivery note number.</li>
</ol>
<p>You can build the delivery note in any document tool, but our generator is designed for invoices, so use it for the invoice step: list the delivered quantities, add your tax rate, and put the PO number in the PO field and the delivery note number in the notes. A tidy layout such as the <a href="/invoice-templates/slate">slate invoice template</a> keeps references easy to spot.</p>

<h2>Common delivery note mistakes</h2>
<ul>
<li><strong>Copying ordered quantities instead of packed quantities.</strong> The note must reflect what is actually on the van.</li>
<li><strong>Accepting unsigned or illegible signatures.</strong> Ask for a printed name every time.</li>
<li><strong>No order reference.</strong> Without the PO number, the customer cannot match the delivery.</li>
<li><strong>Invoicing before confirming delivery on disputed accounts.</strong> For customers with a history of claims, wait for the POD.</li>
<li><strong>Losing the signed copy.</strong> Scan it the same day and file it with the invoice.</li>
<li><strong>Mixing up delivery and invoice numbers.</strong> Use different prefixes, such as DN and INV, so nobody pays against a delivery note or files an invoice as a goods-in record.</li>
<li><strong>Skipping the delivery note for "regular" customers.</strong> Familiarity is exactly when shortages go unnoticed. Send one every time.</li>
<li><strong>Treating the delivery note as the invoice.</strong> If you use one document for both, it must carry all invoice details, including a unique invoice number and tax.</li>
</ul>
<p>For cash-on-delivery customers, our guide to <a href="/blog/cash-on-delivery-invoicing">cash on delivery invoicing</a> shows how drivers collect payment and how to reconcile it. If you run a courier business delivering for others, our sibling guide to the <a href="/blog/courier-delivery-invoice-template">courier delivery invoice template</a> covers billing per drop and per mile.</p>

<h2>Send the invoice that matches your delivery note</h2>
<p>A delivery note template records what left your premises and what the customer accepted, and a signed copy is your proof of delivery if anything is questioned. Keep prices off it, show ordered, delivered and outstanding quantities, and invoice exactly what the signed note confirms. When the delivery is done, open the <a href="/invoice-generator">invoice generator</a>, add the delivered items with the PO and delivery note references, and download your invoice in minutes. Download the result as a PDF invoice you can email, print or upload to a client portal.</p>
`,
  },
  {
    slug: "freight-invoice",
    title: "Freight Invoice: How to Read, Audit and Dispute Freight Bills",
    description:
      "Learn how a freight invoice works, what each charge means, how to audit freight bills for accessorial errors and how to dispute or issue one, with an example.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "trucking-invoice-template",
      "bill-of-lading-vs-commercial-invoice",
      "invoice-dispute",
      "incoterms-on-invoice",
    ],
    faqs: [
      {
        q: "What is a freight invoice?",
        a: "A freight invoice, also called a freight bill, is the bill a carrier, freight forwarder or broker sends for moving goods. It shows the shipper and consignee, origin and destination, the bill of lading or PRO number, weight and freight class, the base linehaul charge, any discounts, fuel surcharge and accessorial charges, and the total due. It is the payer's record of transport cost.",
      },
      {
        q: "What is the difference between a freight bill and a bill of lading?",
        a: "A bill of lading is the shipping document issued when goods are handed to the carrier. It records what was shipped, between whom and on what terms, and acts as a receipt for the goods. A freight bill is the invoice for the transport service, issued afterwards and priced from the bill of lading details. The bill of lading number usually appears on the freight bill.",
      },
      {
        q: "What are accessorial charges on a freight invoice?",
        a: "Accessorial charges are fees for services beyond standard dock-to-dock transport. Common examples include liftgate service, residential delivery, inside delivery, limited access locations, appointment or notification fees, detention when trucks wait too long, redelivery, and reweigh or reclassification charges. They are set by the carrier's tariff or your contract and are a frequent source of billing errors.",
      },
      {
        q: "What is a freight audit?",
        a: "A freight audit is the process of checking each freight invoice before or after payment against the agreed rates, the bill of lading and proof of delivery. Auditors look for duplicate bills, wrong rates or discounts, incorrect weight or class, fuel surcharge errors and accessorials that were not ordered or not performed. Businesses do it in-house or use specialist audit firms.",
      },
      {
        q: "How long do I have to pay a freight bill?",
        a: "Most freight payment terms come from your contract or the carrier's rules. Federal regulations at 49 CFR Part 377 set a default credit period of 15 days from presentation of the freight bill for the motor carrier shipments they cover, and allow carrier rules to set a different period of up to 30 calendar days. Check your contract and carrier terms for the period that applies to you.",
      },
      {
        q: "How do I dispute a freight invoice?",
        a: "Write to the carrier or broker promptly, quoting the PRO number, bill of lading number and invoice number. Identify each disputed charge, explain why it is wrong and attach evidence such as the bill of lading, signed proof of delivery, rate confirmation or photos. Pay the undisputed portion if your terms require it, and keep a record of every message until a corrected invoice arrives.",
      },
      {
        q: "Why was I charged more than my freight quote?",
        a: "The most common reasons are a reweigh showing a higher weight, a reclassification to a higher freight class after inspection, accessorial services added at pickup or delivery, a higher fuel surcharge in the week of shipment, or delivery to a location the carrier treats as residential or limited access. Compare the invoice line by line with the quote and ask for supporting documents for each change.",
      },
      {
        q: "Can a small carrier use an invoice generator for freight invoices?",
        a: "Yes. Add linehaul, fuel surcharge and each accessorial as separate line items, put the load or PRO number in the PO or invoice reference field, note the bill of lading number and pickup and delivery dates, and attach the signed BOL when you send the PDF. Sales tax treatment of transport charges varies by state and country, so check your jurisdiction's rules before setting any tax rate.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A freight invoice (or freight bill) is the carrier's or forwarder's bill for moving goods. It lists the shipment references, weight and class, base linehaul rate, discounts, fuel surcharge and accessorial charges. Before paying, audit it against your quote, the bill of lading and proof of delivery, and dispute any charge that does not match in writing.</p>

<p>Freight costs are one of the easiest places for a small business to overpay without noticing. A typical freight invoice packs a dozen numbers into a small space: tariff charges, discounts, surcharges, weights, classes and fees with abbreviations nobody explains. This guide is written mainly for the business paying the freight invoice, whether you are a manufacturer, wholesaler or online seller. If you are an owner-operator or small carrier sending bills, our <a href="/blog/trucking-invoice-template">trucking invoice template</a> covers rate confirmations and broker paperwork, and you can create the invoice itself in our <a href="/invoice-generator">free invoice generator</a>.</p>

<p>Below you will find what each part of a freight bill means, the common accessorial charges, a step-by-step freight audit, a worked example of catching an error, the federal rules on payment periods, and how to dispute a bill.</p>

<h2>What is a freight invoice?</h2>
<p>A freight invoice is a request for payment for transport services. It is issued by the party that sold you the transport: an asset-based carrier, a less-than-truckload (LTL) carrier, a parcel company, a freight forwarder or a broker. The bill is priced from the shipment details recorded at pickup, especially on the bill of lading, and is usually issued after the goods are delivered.</p>
<p>It is easy to confuse with other shipping paperwork:</p>
<table>
<thead>
<tr><th>Document</th><th>Issued by</th><th>Purpose</th><th>Contains prices?</th></tr>
</thead>
<tbody>
<tr><td>Bill of lading (BOL)</td><td>Shipper or carrier at pickup</td><td>Receipt for goods and contract of carriage</td><td>Sometimes, often not</td></tr>
<tr><td>Freight invoice / freight bill</td><td>Carrier, forwarder or broker</td><td>Bill for the transport service</td><td>Yes</td></tr>
<tr><td>Commercial invoice</td><td>Seller of the goods</td><td>Bill for the goods; used for customs</td><td>Yes, for goods</td></tr>
<tr><td>Delivery note / POD</td><td>Seller or carrier</td><td>Confirms what was delivered</td><td>No</td></tr>
</tbody>
</table>
<p>The relationship between the first and third is explained in <a href="/blog/bill-of-lading-vs-commercial-invoice">bill of lading vs commercial invoice</a>, and our new guide to the <a href="/blog/delivery-note-template">delivery note template</a> covers proof of delivery. Who pays the freight invoice depends on your sale terms; for international sales, see <a href="/blog/incoterms-on-invoice">Incoterms on invoices</a>.</p>

<h2>Anatomy of a freight bill</h2>
<p>Most freight bills, especially LTL bills, contain these elements:</p>
<ul>
<li><strong>PRO number:</strong> the carrier's tracking and invoice reference for the shipment.</li>
<li><strong>Bill of lading number and PO number:</strong> your references, used to match the bill to the shipment.</li>
<li><strong>Shipper, consignee and bill-to party:</strong> who sent the goods, who received them, and who pays.</li>
<li><strong>Payment terms:</strong> prepaid (the shipper pays), collect (the consignee pays) or third party.</li>
<li><strong>Pieces, weight and freight class:</strong> LTL pricing depends heavily on weight and the commodity's class. Dimensions may be listed if the carrier prices by density.</li>
<li><strong>Gross charges and discount:</strong> LTL carriers often rate from a tariff, then apply a negotiated percentage discount.</li>
<li><strong>Net linehaul:</strong> the transport charge after discount.</li>
<li><strong>Fuel surcharge:</strong> usually a percentage of linehaul that moves with fuel prices under the carrier's published schedule.</li>
<li><strong>Accessorial charges:</strong> extra services, each listed separately.</li>
<li><strong>Total due and due date.</strong></li>
</ul>

<h2>Common accessorial charges and how to check them</h2>
<p>Accessorials are where most freight billing errors live, because they are added based on what drivers and terminals record, sometimes after the fact.</p>
<table>
<thead>
<tr><th>Accessorial</th><th>What it covers</th><th>How to verify</th></tr>
</thead>
<tbody>
<tr><td>Liftgate</td><td>Truck lift to load or unload without a dock</td><td>Was it requested on the BOL? Does the site have a dock?</td></tr>
<tr><td>Residential delivery</td><td>Delivery to a home or home-based business</td><td>Check the consignee address type</td></tr>
<tr><td>Limited access</td><td>Schools, sites, storage units, some rural areas</td><td>Compare with the carrier's tariff definition</td></tr>
<tr><td>Inside delivery</td><td>Moving freight beyond the door</td><td>Signed POD notes, consignee confirmation</td></tr>
<tr><td>Appointment / notify</td><td>Calling ahead or booking a slot</td><td>Was an appointment required by you?</td></tr>
<tr><td>Detention</td><td>Truck kept waiting beyond free time</td><td>Arrival and departure times on POD or logs</td></tr>
<tr><td>Reweigh / reclass</td><td>Carrier corrected weight or class</td><td>Ask for the inspection certificate</td></tr>
<tr><td>Redelivery</td><td>Second attempt after failed delivery</td><td>Why did the first attempt fail?</td></tr>
</tbody>
</table>
<p>Prices for each accessorial are set by the carrier's tariff or your contract, so compare against your own rate sheet rather than general figures.</p>

<h2>How to audit a freight invoice in 7 steps</h2>
<ol>
<li><strong>Check for duplicates.</strong> Search your records for the same PRO or BOL number. Duplicate billing, including a broker and a carrier both billing the same load, is a classic error.</li>
<li><strong>Match the shipment details.</strong> Origin, destination, pieces, weight and class should match the BOL.</li>
<li><strong>Re-rate the linehaul.</strong> Apply your contracted rate or tariff and discount to the billed weight and class.</li>
<li><strong>Check the fuel surcharge.</strong> Confirm the percentage against the carrier's schedule for the ship date and that it is applied to the right base.</li>
<li><strong>Verify every accessorial.</strong> Each one should be requested, documented on the BOL or POD, or supported by an inspection or timing record.</li>
<li><strong>Confirm delivery.</strong> Do not pay for a shipment without proof of delivery, and note any shortage or damage exceptions for a separate claim.</li>
<li><strong>Approve, short-pay or dispute.</strong> Pay correct bills on time, and dispute errors in writing before the payment deadline.</li>
</ol>
<p>Larger shippers use specialist freight audit firms or software, but a small business shipping a few loads a week can run this checklist on a spreadsheet. Once approved, matching the freight bill to the shipment record works like the <a href="/blog/three-way-match">three-way match</a> used for supplier invoices.</p>

<h2>Worked example: catching an accessorial error</h2>
<p>A wholesaler ships four pallets LTL to a retailer's warehouse. The carrier's freight invoice arrives as follows (all figures illustrative; your rates and surcharge will differ):</p>
<table>
<thead>
<tr><th>Charge</th><th>Calculation</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Gross tariff charge</td><td>Per carrier tariff</td><td>$1,800.00</td></tr>
<tr><td>Contract discount</td><td>64% of $1,800.00</td><td>-$1,152.00</td></tr>
<tr><td>Net linehaul</td><td>$1,800.00 - $1,152.00</td><td>$648.00</td></tr>
<tr><td>Fuel surcharge</td><td>30% of $648.00</td><td>$194.40</td></tr>
<tr><td>Liftgate delivery</td><td>Flat</td><td>$85.00</td></tr>
<tr><td>Residential delivery</td><td>Flat</td><td>$110.00</td></tr>
<tr><td><strong>Total billed</strong></td><td>$648.00 + $194.40 + $85.00 + $110.00</td><td><strong>$1,037.40</strong></td></tr>
</tbody>
</table>
<p>The audit finds two problems. First, the consignee is a commercial warehouse with a loading dock, so the residential delivery charge does not apply. Second, the BOL did not request a liftgate and the signed POD shows the pallets were unloaded at a dock door. Both accessorials, $85.00 + $110.00 = $195.00, are disputed. The corrected total is $1,037.40 - $195.00 = $842.40, which equals net linehaul $648.00 plus fuel surcharge $194.40.</p>
<p>Notice that the fuel surcharge was calculated correctly on the net linehaul, not on the gross tariff charge. Had the carrier applied 30 percent to the $1,800.00 gross figure, the surcharge would have been $540.00 instead of $194.40, an overcharge of $345.60. Always check which base the percentage is applied to, as your contract or the carrier's rules will specify it.</p>
<p>On a single shipment that is a modest saving. Repeated across dozens of shipments a month, unchecked accessorials can add up to a meaningful share of a small business's freight spend, which is why a routine audit pays off.</p>

<h3>Parcel and forwarder invoices</h3>
<p>Not every freight invoice is an LTL bill. Parcel carriers usually send a weekly or monthly invoice covering many shipments, with each tracking number listed and adjustments such as address corrections, dimensional weight changes or residential surcharges shown as separate lines. Freight forwarders handling international shipments often bill a mix of their own fees (documentation, handling, customs brokerage) and pass-through costs (ocean or air freight, terminal charges, duties advanced on your behalf). The audit principle is the same: tie every line back to a shipment, a contract rate and a document. For duties and customs data, check that the commodity codes on your paperwork are right; see our guide to <a href="/blog/hs-code-on-commercial-invoice">HS codes on commercial invoices</a>.</p>

<h2>Payment periods: what federal rules say</h2>
<p>In the US, rules in 49 CFR Part 377 deal with the extension of credit to shippers by the motor carriers they cover. According to the <a href="https://www.law.cornell.edu/cfr/text/49/377.203" target="_blank" rel="noopener noreferrer">text of 49 CFR 377.203</a>, the default credit period is 15 days, starting the day after the freight bill is presented and including weekends and holidays, while carrier tariff rules may set a different period that cannot be longer than 30 calendar days. The companion section 377.205 sets deadlines for presenting freight bills, generally within 7 days (excluding weekends and legal holidays) of the relevant pickup or delivery event.</p>
<p>In practice, many freight contracts and broker agreements set their own terms such as net 30, and quick-pay or factoring arrangements change when carriers are paid. Read your contract carefully. If you use a broker, the same regulations at 49 CFR 371.3 require brokers to keep a record of each transaction for three years, and each party to a brokered transaction has the right to review that record. This is general information, not legal advice.</p>

<h3>Who should approve freight bills</h3>
<p>In a small business, the person who booked the shipment is usually best placed to check the freight invoice, because they know what was ordered, what was requested at pickup and what the customer said at delivery. Give them a short checklist based on the audit steps above, and have the person who pays the bill confirm that each freight invoice carries an approval before it is paid. Keeping booking, approval and payment visible in one place also makes it easier to spot carriers whose bills regularly need correcting.</p>

<h2>How to dispute a freight invoice</h2>
<ol>
<li><strong>Act quickly.</strong> Raise the dispute before the payment due date and within any claim window in your contract or the carrier's rules.</li>
<li><strong>Quote all references.</strong> PRO number, BOL number, invoice number, ship date.</li>
<li><strong>List each disputed charge.</strong> State the amount and the reason, for example "Residential delivery $110.00: consignee is a commercial warehouse with dock."</li>
<li><strong>Attach evidence.</strong> BOL, signed POD, rate confirmation or contract rate sheet, photos.</li>
<li><strong>Pay what is undisputed</strong> if your terms require it, and say so in writing.</li>
<li><strong>Ask for a corrected invoice</strong> or a credit, and track it to closure.</li>
</ol>
<p>Our general <a href="/blog/invoice-dispute">invoice dispute guide</a> covers tone and escalation. Note that cargo loss or damage claims are a separate process from billing disputes.</p>

<h3>Preventing errors before the truck arrives</h3>
<p>The cheapest freight dispute is the one that never happens. Most accessorial and reclass charges can be avoided at the booking stage:</p>
<ul>
<li><strong>Weigh and measure every shipment</strong> before booking, including the pallet, and enter accurate dimensions.</li>
<li><strong>Use the correct freight class</strong> for each commodity, and keep product spec sheets handy if a carrier inspects.</li>
<li><strong>Declare the delivery site honestly.</strong> If the consignee has no dock, book the liftgate in advance at your contract rate rather than paying an after-the-fact charge.</li>
<li><strong>Record special requirements on the BOL</strong> such as appointments, inside delivery or limited access, so the quote and the bill are built on the same facts.</li>
<li><strong>Keep the signed BOL and POD together</strong> in one folder per shipment, ready for audit.</li>
</ul>

<h2>Issuing a freight invoice as a small carrier or forwarder</h2>
<p>If you are on the other side and bill freight, the same audit points tell you what your customers will check. Make their job easy:</p>
<ul>
<li>List linehaul, fuel surcharge and each accessorial on separate lines, never combined.</li>
<li>Include the PRO or load number, the BOL number and the customer's PO in the reference fields.</li>
<li>State pickup and delivery dates and attach the signed BOL or POD.</li>
<li>Back up detention with arrival and departure times.</li>
<li>Number every invoice uniquely; our <a href="/tools/invoice-number-generator">invoice number generator</a> helps.</li>
</ul>
<p>In our generator, enter each charge as a line item, leave the tax rate at 0 unless a tax genuinely applies, and use the amount paid field if the customer prepaid part of the load. A clear layout such as the <a href="/invoice-templates/bold">bold invoice template</a> makes the total and due date stand out. Last-mile and same-day operators should also read our sibling guide to the <a href="/blog/courier-delivery-invoice-template">courier delivery invoice template</a>, and if customers keep paying short, see <a href="/blog/short-payments-and-deductions">short payments and deductions</a>.</p>

<h2>Create or check your freight invoice</h2>
<p>A freight invoice is only as good as the shipment data behind it. Payers should audit every freight bill against the quote, bill of lading and proof of delivery, paying special attention to weight, class, fuel surcharge and accessorial charges. Carriers and forwarders should itemise every charge and attach the paperwork that proves it. If you bill freight, open the <a href="/invoice-generator">invoice generator</a>, list each charge on its own line and download a clean, professional PDF ready to send.</p>
`,
  },
];
