import type { PostDraft } from "../blog";

export const BASICS_2026_C_POSTS: PostDraft[] = [
  {
    slug: "consolidated-invoice",
    title: "Consolidated Invoice: How to Bill Several Orders at Once",
    description:
      "What a consolidated invoice is, when to combine multiple orders into one monthly bill, what to include, tax point traps, and a worked example you can copy.",
    category: "invoicing-basics",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["statement-of-account", "itemized-invoice", "po-number-on-invoice"],
    faqs: [
      {
        q: "What is a consolidated invoice?",
        a: "It is a single invoice that bills a customer for several orders, deliveries or jobs completed over a set period, usually a month. Instead of sending ten small invoices, you send one with ten line groups, one invoice number and one total due. Each order is still listed with its own date and reference so the customer can match it to their records. It is a real demand for payment, unlike a statement of account, which only summarises invoices you have already issued.",
      },
      {
        q: "Is a summary invoice the same as a consolidated invoice?",
        a: "People use the two terms loosely, so check what your customer means. A consolidated invoice usually replaces individual invoices: the orders are billed for the first time on one document. A summary invoice sometimes means a cover sheet that lists invoices already issued, which is closer to a statement of account. If the individual invoices have already been sent, do not bill them again on a new invoice, or the customer may pay twice. Send a statement instead.",
      },
      {
        q: "Is a consolidated invoice legal for VAT?",
        a: "Generally yes, as long as it contains every detail a VAT invoice needs and the tax point for each supply is handled correctly. In the UK the tax point is normally the date of supply, moved to the invoice date only if you invoice within 14 days, unless HMRC has agreed a longer period. A month-end invoice for deliveries made early in the month can fall outside that window, so show supply dates and check the rules or ask an adviser.",
      },
      {
        q: "How do I show multiple purchase orders on one invoice?",
        a: "Group the line items by purchase order and put the PO number in each line description, for example PO 4471: 20 boxes of A4 paper. If every order shares one blanket PO, use the invoice's PO number field for it. Many accounts payable teams match invoices to POs line by line, so a single combined line with no references often gets put on hold. Ask the customer in advance whether they accept several POs on one invoice at all.",
      },
      {
        q: "When should I send a consolidated invoice?",
        a: "Send it on a fixed day each billing period, usually the first working day after the period ends. Customers plan payment runs around predictable dates, so a consistent schedule helps you get paid on time. Agree the cut-off in writing, for example all orders delivered by the last calendar day of the month. If a period has only one or two small orders, you can still send the invoice on schedule rather than waiting to batch more.",
      },
      {
        q: "Does a consolidated invoice need one due date or several?",
        a: "One. The whole point is a single balance with a single due date, normally calculated from the invoice date using your agreed terms, such as Net 30. If the customer insists that each order is paid 30 days from its own delivery, consolidation becomes awkward, because some lines would already be overdue. In that case either keep separate invoices or agree in your contract that terms run from the consolidated invoice date.",
      },
      {
        q: "Can I consolidate invoices for different customers?",
        a: "No. An invoice is addressed to one legal customer, so you cannot combine different companies on one bill. You can consolidate orders from several branches or departments of the same company, as long as one entity is responsible for paying. In that case show the branch or department in each line description and use the head office as the bill-to party, with any delivery addresses shown alongside the orders they relate to.",
      },
      {
        q: "What if a customer disputes one order on a consolidated invoice?",
        a: "Ask them to pay the undisputed lines while you resolve the query. That is why each order needs its own reference and subtotal: the customer can approve most of the invoice and hold back one line. If the disputed order turns out to be wrong, issue a credit note for that amount rather than editing the original invoice. The rest of the consolidated invoice stays valid, and your records show exactly what changed and why.",
      },
    ],
    content: `
<p>A <strong>consolidated invoice</strong> is one invoice that bills a customer for several orders, deliveries or jobs made over a set period, usually a calendar month. Each order is still listed with its date and reference, but there is one invoice number, one total and one due date. It cuts paperwork for both sides and suits customers who order often.</p>
<p>This guide explains when combining orders makes sense, what the combined bill must show, how it differs from a statement of account, the tax-date traps to watch, and a worked example you can copy into the <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>What a consolidated invoice is (and is not)</h2>
<p>Think of it as monthly consolidated billing. Rather than raising an invoice every time a van leaves the warehouse or a support ticket is closed, you record each order as it happens and bill them together at the end of the period. The customer gets one document to approve and one payment to make.</p>
<p>It is easy to confuse with three other documents:</p>
<ul>
<li><strong>Statement of account:</strong> lists invoices you have already issued, plus payments and the running balance. It is a reminder, not a new demand. A statement is useful as a monthly reminder, but it does not replace the invoices behind it.</li>
<li><strong>Summary invoice:</strong> the term is used loosely. Some businesses mean one combined bill for new orders; others mean a cover sheet listing existing invoices. Always confirm which one your customer expects.</li>
<li><strong>Recurring invoice:</strong> bills the same fixed amount on a schedule, such as a monthly retainer. Consolidated billing covers variable activity. A business can use both: a recurring invoice for the fixed monthly fee and a combined invoice for extra call-outs or materials.</li>
</ul>
<p>The key rule: an order should be invoiced once. If you already sent individual invoices, do not combine them into a new invoice. Send a statement instead, or the customer may pay the same order twice.</p>

<h2>When to combine multiple orders into one invoice</h2>
<p>Consolidation works best when the same customer orders often and each order is small. Typical cases include:</p>
<ul>
<li>Wholesalers and suppliers delivering stock several times a week.</li>
<li>Courier, trucking and delivery firms billing per job.</li>
<li>IT support and maintenance contractors closing many small tickets.</li>
<li>Cleaning, landscaping and facilities companies visiting several sites for one client.</li>
<li>Print shops, caterers and agencies handling repeat small jobs.</li>
</ul>
<p>It works less well when orders are large or one-off, when each order has its own payment terms, or when the customer's accounts payable system can only match one invoice to one purchase order. Ask before you switch. Large customers often have firm rules, and a combined bill that breaks them can sit unpaid in an exceptions queue.</p>

<h2>Consolidated invoice vs separate invoices</h2>
<table>
<thead><tr><th>Factor</th><th>Separate invoices</th><th>One combined invoice</th></tr></thead>
<tbody>
<tr><td>Admin per period</td><td>One invoice per order</td><td>One invoice per customer</td></tr>
<tr><td>Cash flow</td><td>Billing starts as each order ships</td><td>Billing waits until the period closes</td></tr>
<tr><td>Customer approval</td><td>Many small approvals</td><td>One larger approval</td></tr>
<tr><td>Disputes</td><td>Affect only the disputed invoice</td><td>Can delay the whole bill unless lines are clearly separated</td></tr>
<tr><td>PO matching</td><td>Simple: one PO per invoice</td><td>Needs PO references on each line</td></tr>
<tr><td>Tax dates</td><td>Invoice date usually close to supply date</td><td>Supply dates may be weeks before the invoice date</td></tr>
</tbody>
</table>
<p>The cash flow point matters. If you deliver on the 2nd and bill on the 1st of next month with Net 30 terms, you wait roughly 60 days for the money. Price that delay in, or agree shorter terms for consolidated billing. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains the common options.</p>

<h2>What to include on a consolidated invoice</h2>
<p>Everything a normal invoice needs still applies: your details, the customer's details, a unique invoice number, the invoice date, a due date, totals and tax. If you need a refresher, start with <a href="/blog/how-to-create-an-invoice">how to create an invoice</a>. On top of that, a combined bill should show:</p>
<ol>
<li><strong>The billing period</strong>, for example "Orders delivered 1 to 31 October 2026", in the notes or the first line.</li>
<li><strong>Each order on its own line or line group</strong>, with the order date or delivery date.</li>
<li><strong>The customer's reference for each order</strong>: PO number, ticket number, job number or delivery note number.</li>
<li><strong>Quantities and unit prices</strong> rather than a single lump sum, so the customer can check each order.</li>
<li><strong>Branch, site or department</strong> if the customer has several locations.</li>
<li><strong>A clear grand total and one due date.</strong></li>
</ol>
<p>Detail is what gets the invoice approved. A line reading "October deliveries: 4,820.00" forces the customer to rebuild your records before they can pay. A list of dated, referenced orders lets them tick each one against their goods-received notes. Our <a href="/blog/itemized-invoice">itemized invoice guide</a> covers line-item wording in more depth, and the <a href="/blog/po-number-on-invoice">PO number on invoice guide</a> covers purchase order references.</p>

<h2>Worked example: a monthly consolidated invoice</h2>
<p>A stationery supplier delivers to a law firm four times in October 2026. The firm raised a separate purchase order for each delivery. The supplier charges 20% VAT and has agreed Net 14 terms on monthly billing.</p>
<table>
<thead><tr><th>Line description</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>3 Oct, PO 4471, DN 0912: A4 copier paper, box of 5 reams</td><td>12</td><td>24.00</td><td>288.00</td></tr>
<tr><td>10 Oct, PO 4480, DN 0931: Toner cartridge, black</td><td>4</td><td>62.50</td><td>250.00</td></tr>
<tr><td>17 Oct, PO 4502, DN 0950: Lever arch files, pack of 10</td><td>6</td><td>18.00</td><td>108.00</td></tr>
<tr><td>28 Oct, PO 4519, DN 0977: A4 copier paper, box of 5 reams</td><td>10</td><td>24.00</td><td>240.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td>886.00</td></tr>
<tr><td colspan="3">VAT at 20%</td><td>177.20</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td>1,063.20</td></tr>
</tbody>
</table>
<p>The invoice is dated 31 October 2026, numbered INV-2026-0418, and due 14 November 2026. The notes read: "Consolidated invoice for deliveries 1 to 31 October 2026. Each line shows delivery date, PO and delivery note number." If the firm queries the toner order, it can pay 763.20 (the other three lines plus their VAT) and hold 250.00 plus 50.00 VAT while the query is checked.</p>
<p>To build this in the <a href="/invoice-generator/uk">UK invoice generator</a>, add one line item per order, put the date and references at the start of each description, set the tax rate to 20%, and add the billing period to the notes. The generator applies one tax rate to the whole invoice, so if some lines are taxed differently, see the tax section below.</p>

<h2>Tax points and dates: the part people get wrong</h2>
<p>In VAT systems the date that matters for tax is not always the invoice date. In the UK, HMRC's VAT guide (Notice 700) says the basic tax point for goods is usually when you send them or the customer collects them, and for services it is when the service is performed. If you issue a VAT invoice within 14 days after that basic tax point, the invoice date becomes the tax point instead.</p>
<p>That creates a trap for monthly consolidated billing. In the example above, the 3 October delivery has a basic tax point of 3 October. An invoice dated 31 October is 28 days later, outside the 14-day window, so VAT on that delivery belongs to the period containing 3 October, not the invoice date. Usually that only matters when the month straddles the end of a VAT quarter, but it does matter. HMRC's guidance notes that you can write to them to ask for a longer period if you normally invoice monthly, and that a VAT invoice should normally be issued within 30 days of the tax point.</p>
<p>Two practical fixes:</p>
<ul>
<li>Show the supply date on every line, so you and the customer can see which period each order falls in. The UK invoice rules require the time of supply to be shown where it differs from the date of issue.</li>
<li>If you consolidate monthly and your VAT quarters do not line up with month ends, speak to your accountant about the tax point treatment, or ask HMRC about an extension.</li>
</ul>
<p>Our article on <a href="/blog/invoice-date-vs-due-date">invoice date vs due date</a> explains tax points and supply dates in more detail. In the US there is no federal VAT, and state sales tax is generally charged on each sale, but the same advice holds: keep order dates on the invoice. Tax rules vary, so check the details with a qualified adviser.</p>

<h3>Mixed tax rates on one combined bill</h3>
<p>If one order is standard-rated and another is zero-rated or exempt, many VAT rules require separate totals for each rate. Our generator supports a single tax rate per invoice, so the simplest approach is to issue one combined invoice per tax rate for the period. Our <a href="/blog/tax-exempt-invoice">tax exempt invoice guide</a> covers the wording for untaxed lines.</p>

<h2>How to set up consolidated billing with a customer</h2>
<ol>
<li><strong>Agree it in writing.</strong> Add a clause to your contract or terms: billing period, cut-off date, invoice date and payment terms.</li>
<li><strong>Agree how terms are counted.</strong> State that payment terms run from the monthly invoice date, not from each delivery.</li>
<li><strong>Collect references as you go.</strong> Keep a simple order log with date, PO, delivery note and value. A spreadsheet is fine.</li>
<li><strong>Reconcile before you bill.</strong> Check the log against signed delivery notes or completed tickets so nothing is missed or billed twice.</li>
<li><strong>Issue on the same day every period.</strong> Predictable timing helps the customer schedule payment.</li>
<li><strong>Follow up on any held lines.</strong> If part of an invoice is disputed, resolve it quickly and issue a credit note if needed. Our guide to <a href="/blog/how-to-correct-an-invoice">correcting an invoice</a> walks through credit notes and reissues.</li>
</ol>

<h2>Common mistakes with consolidated invoices</h2>
<ul>
<li><strong>Billing an order twice.</strong> An order already invoiced individually ends up on the monthly invoice too. Mark each order as billed in your log.</li>
<li><strong>Lump-sum lines.</strong> One line for the whole month gets queried or rejected.</li>
<li><strong>Missing PO numbers.</strong> Accounts payable cannot match the invoice and it stalls.</li>
<li><strong>Combining different legal entities.</strong> Two subsidiaries are two customers, even if one person orders for both.</li>
<li><strong>Ignoring tax points.</strong> VAT ends up in the wrong return when the month crosses a quarter end.</li>
<li><strong>Re-using the invoice number.</strong> Each monthly invoice still needs its own unique number. The <a href="/tools/invoice-number-generator">invoice number generator</a> can help you keep a clean sequence.</li>
</ul>

<h2>Should you choose a consolidated invoice?</h2>
<p>A quick test helps. Consolidation is usually worth it if you answer yes to most of these questions:</p>
<ul>
<li>Does the customer place three or more orders a month with you?</li>
<li>Are most orders small enough that invoicing each one costs more time than it is worth?</li>
<li>Does the customer accept several purchase orders or job numbers on one invoice?</li>
<li>Can your cash flow handle waiting until the period closes before you bill?</li>
<li>Do you keep a reliable log of every order, so nothing slips through between invoices?</li>
</ul>
<p>If the answer to the cash flow question is no, keep billing each order separately, or ask for a deposit or weekly billing instead of monthly. Weekly consolidation is a reasonable middle ground for busy accounts: fewer documents than per-order invoicing, but money arrives sooner than with month-end billing.</p>

<h2>Create your consolidated invoice</h2>
<p>A consolidated invoice saves time when a customer orders often, but only if every order stays traceable: dated lines, customer references, one total and one due date. Agree the billing period up front, watch the tax point rules in VAT countries, and never re-bill orders you have already invoiced.</p>
<p>Open the <a href="/invoice-generator">invoice generator</a>, add one line per order, put the billing period in the notes and download the PDF. For a clean layout with room for long descriptions, try the <a href="/invoice-templates/corporate">corporate invoice template</a>.</p>
`,
  },
  {
    slug: "invoice-for-services-rendered",
    title: "Invoice for Services Rendered: Template and Sample Wording",
    description:
      "How to write an invoice for services rendered: what to include, sample wording for line items and notes, a worked example, and a free template to download.",
    category: "invoicing-basics",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "service-invoice-template",
      "invoice-notes-examples",
      "how-to-invoice-for-hourly-work",
    ],
    faqs: [
      {
        q: "What does services rendered mean on an invoice?",
        a: "It means the work has already been done. A services rendered invoice bills for services that were performed before the invoice date, as opposed to a deposit or proforma invoice, which asks for money in advance. The phrase is simply a formal way of saying for work completed. You do not have to use the words on the invoice, but many businesses do, for example in a line such as Professional services rendered, 1 to 31 October 2026.",
      },
      {
        q: "How do you write services rendered on an invoice?",
        a: "Put it in the line item description, followed by what you did and when. For example: Services rendered: bookkeeping for September 2026, including bank reconciliation and VAT return preparation, 12 hours at 45.00. Avoid stopping at the words services rendered, because a bare phrase tells the client nothing. Add the dates, the deliverable or task, and how the price was worked out, so the person approving the invoice can check it quickly.",
      },
      {
        q: "What is the difference between a services rendered invoice and a receipt?",
        a: "An invoice asks for payment for work already done. A receipt confirms that payment has been received. You send the invoice first, then the client pays, then you can send a receipt or mark the invoice as paid. If a client paid on the spot, you might issue an invoice showing the amount paid and a zero balance, which works as both. The invoice is the document that creates the debt in your records.",
      },
      {
        q: "Can I write an invoice for services rendered without a contract?",
        a: "Yes. An invoice is not a contract, but it is evidence of what you supplied and what you charged. If you worked without a written agreement, make the invoice as detailed as possible: dates, tasks, hours, rates and any emails or messages where the client approved the work. A detailed invoice is much easier to enforce than a vague one if the client later disputes the amount. For the next job, put a short written agreement in place first.",
      },
      {
        q: "Should I bill hourly or a flat fee for services rendered?",
        a: "Use whatever you agreed with the client. Hourly billing suits work with an uncertain scope, such as support or consulting, and the invoice should show hours and rate for each task. A flat fee suits clearly defined deliverables, such as a logo or a website page, and the invoice can show one line per deliverable. Some freelancers mix both: a flat fee for the main project plus hourly billing for extra changes the client requested.",
      },
      {
        q: "Do I charge tax on an invoice for services?",
        a: "It depends on where you are and whether you are registered. In the UK, VAT-registered businesses usually charge VAT on services, and those below the registration threshold do not. In the US, many states do not tax most services, though some tax specific ones. In VAT and GST countries, cross-border services often follow special place-of-supply rules. Check your local rules or ask a qualified adviser before you add or leave out tax.",
      },
      {
        q: "When should I send an invoice for services rendered?",
        a: "As soon as the work, or the agreed billing period, is complete. Most freelancers invoice on delivery for projects, and monthly for ongoing work. Sending promptly matters for two reasons: the payment clock starts later the longer you wait, and in VAT countries the invoice date can affect which tax period the sale belongs to. Agree the billing schedule at the start of the job so the client expects the invoice when it arrives.",
      },
      {
        q: "What payment terms should a services rendered invoice use?",
        a: "Small businesses commonly use due on receipt, Net 14 or Net 30. Shorter terms suit individuals and small clients; larger companies often have fixed payment runs and may insist on Net 30 or longer. Whatever you choose, write an actual due date on the invoice rather than only a term, because a date is harder to misread. If the client has agreed terms in a contract, the invoice should match them exactly.",
      },
    ],
    content: `
<p>An <strong>invoice for services rendered</strong> is a bill for work you have already completed. It lists who did the work, who it was for, what was done and when, how the price was calculated, and when payment is due. The phrase "services rendered" simply means "work performed", so use it with specific dates and tasks, never on its own.</p>
<p>This guide gives you a field-by-field template, sample wording you can copy for line items and notes, a worked example with numbers, and the mistakes that most often delay payment. You can build the finished invoice in the <a href="/invoice-generator">free invoice generator</a> in a few minutes.</p>

<h2>What "services rendered" means on an invoice</h2>
<p>"Rendered" is an old-fashioned word for "provided". On an invoice it signals that the service has been delivered and payment is now owed. It separates this kind of invoice from documents that ask for money before work starts:</p>
<ul>
<li>A <strong>proforma invoice</strong> is a preliminary quote in invoice format. See our <a href="/blog/proforma-invoice-guide">proforma invoice guide</a>.</li>
<li>A <strong>deposit invoice</strong> asks for part of the fee upfront.</li>
<li>A <strong>retainer invoice</strong> bills for reserved time in advance.</li>
</ul>
<p>Once the work is done, the services rendered invoice is the document that creates the debt in your books and, in VAT countries, usually fixes when tax is due. It does not need the words "services rendered" to be valid. What matters is the content. Our general guide on <a href="/blog/how-to-create-an-invoice">how to create an invoice</a> covers the basic fields; this article focuses on how to describe service work so it gets approved.</p>

<h2>Services rendered invoice template: the fields</h2>
<p>Here is what a complete services rendered invoice template contains, with an example for each field.</p>
<table>
<thead><tr><th>Field</th><th>What to write</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Your details</td><td>Business or trading name, address, email, tax number if registered</td><td>Sara Khan Design, 14 Mill Lane, Leeds</td></tr>
<tr><td>Client details</td><td>The legal name of the paying party and billing address</td><td>Northgate Dental Ltd, Accounts Payable</td></tr>
<tr><td>Invoice number</td><td>A unique number in sequence</td><td>SK-2026-031</td></tr>
<tr><td>Invoice date</td><td>The date you issue the invoice</td><td>31 October 2026</td></tr>
<tr><td>Service period or date</td><td>When the work was done, if different from the invoice date</td><td>6 to 24 October 2026</td></tr>
<tr><td>Line items</td><td>Each service, with quantity (hours, days or units) and rate</td><td>Brochure layout, 8 pages, flat fee</td></tr>
<tr><td>Client reference</td><td>PO number, project code or contact name</td><td>PO 7712</td></tr>
<tr><td>Totals</td><td>Subtotal, discount, tax, total and balance due</td><td>Total due 1,440.00</td></tr>
<tr><td>Due date and terms</td><td>A specific date plus the term</td><td>Due 14 November 2026 (Net 14)</td></tr>
<tr><td>Payment details</td><td>How to pay you</td><td>Bank transfer details or payment link</td></tr>
</tbody>
</table>
<p>The service period is the field most people forget. Without it, the client cannot tell which month or project the invoice covers, and in VAT systems the date of supply can matter for tax. Our article on <a href="/blog/invoice-date-vs-due-date">invoice date vs due date</a> explains why the supply date sometimes needs its own line.</p>

<h2>Sample wording for services rendered line items</h2>
<p>Good line items answer three questions: what did you do, when, and how was it priced. Here are examples by type of work that you can adapt.</p>
<h3>Hourly work</h3>
<ul>
<li>"Services rendered: IT support, 1 to 31 October 2026, 14.5 hours at 60.00 per hour."</li>
<li>"Bookkeeping, September 2026: bank reconciliation, payroll journal and VAT return preparation. 9 hours at 40.00."</li>
<li>"Consulting call and written recommendations, 12 October 2026. 3 hours at 120.00."</li>
</ul>
<p>For more on presenting time, see <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a>.</p>
<h3>Flat-fee projects</h3>
<ul>
<li>"Website homepage redesign, as agreed in proposal dated 2 September 2026. Delivered 20 October 2026."</li>
<li>"Wedding photography, 18 October 2026: 8 hours coverage, 400 edited images, online gallery."</li>
<li>"Deep clean of office, 2nd floor, 25 October 2026. Fixed price."</li>
</ul>
<h3>Ongoing or monthly services</h3>
<ul>
<li>"Social media management, October 2026: 20 posts, community replies, monthly report."</li>
<li>"Garden maintenance, 4 visits in October 2026 (3, 10, 17 and 24 October) at 55.00 per visit."</li>
</ul>
<h3>Expenses and extras</h3>
<ul>
<li>"Additional revisions requested 15 October 2026, outside original scope: 2 hours at 50.00."</li>
<li>"Materials purchased for job: replacement filter and fittings, receipt attached."</li>
</ul>
<p>If you re-bill costs, our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on an invoice</a> explains how to show them without confusing the client.</p>

<h2>Sample wording for invoice notes and terms</h2>
<p>The notes section is where you add context that does not fit in a line item. Keep it short and specific. Some examples:</p>
<ul>
<li>"Invoice for services rendered between 6 and 24 October 2026 under the agreement dated 1 October 2026."</li>
<li>"Payment due by 14 November 2026. Please quote invoice number SK-2026-031 as your payment reference."</li>
<li>"Thank you for your business. Questions about this invoice? Email accounts@example.com."</li>
<li>"Late payments may incur interest as set out in our terms."</li>
</ul>
<p>Only mention late fees or interest if your agreement or local law allows them. Our list of <a href="/blog/invoice-notes-examples">invoice notes examples</a> has many more lines you can reuse.</p>

<h2>Worked example: a services rendered invoice</h2>
<p>Sara is a freelance designer in the UK. She is not VAT-registered. In October 2026 she completed an 8-page brochure for a dental practice at a flat fee, plus extra revisions billed hourly, and she agreed a 10% discount on the brochure for a repeat client.</p>
<table>
<thead><tr><th>Line item</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Brochure design and layout, 8 pages, delivered 24 Oct 2026</td><td>1</td><td>1,200.00</td><td>1,200.00</td></tr>
<tr><td>Extra revisions requested 20 Oct 2026, outside agreed scope</td><td>3</td><td>50.00</td><td>150.00</td></tr>
<tr><td>Print-ready file preparation and proof check</td><td>2</td><td>50.00</td><td>100.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td>1,450.00</td></tr>
<tr><td colspan="3">Discount (fixed, agreed for repeat client)</td><td>-120.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td>1,330.00</td></tr>
</tbody>
</table>
<p>The discount is 10% of the 1,200.00 brochure fee, entered as a fixed 120.00 because it applies to one line rather than the whole invoice. The invoice is dated 31 October 2026 and due 14 November 2026. Because Sara is not VAT-registered, she leaves the tax rate at 0 and does not show a VAT number. If she were registered, she would add 20% VAT after the discount.</p>
<p>In the generator, this takes four steps: add the three lines, set the discount to a fixed 120, set tax to 0, and add the service period and payment reference to the notes. The <a href="/invoice-templates/minimal">minimal invoice template</a> suits this kind of short, service-only invoice.</p>

<h2>Step by step: writing your invoice for services rendered</h2>
<ol>
<li><strong>Gather your records.</strong> Timesheets, proposal, change requests, client emails approving extra work, and any PO number.</li>
<li><strong>Check the client's billing details.</strong> Use the legal entity name and accounts email, not just your contact's name.</li>
<li><strong>Pick the next invoice number.</strong> Never reuse a number. The <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format.</li>
<li><strong>Write one line per service.</strong> Include dates and how the price was calculated.</li>
<li><strong>Apply any discount and tax.</strong> Only charge tax if you are registered and the service is taxable.</li>
<li><strong>Set a due date.</strong> Use the agreed terms. See <a href="/blog/invoice-payment-terms">invoice payment terms</a> if you have not agreed any.</li>
<li><strong>Add payment details and notes.</strong> Tell the client exactly how to pay and what reference to use.</li>
<li><strong>Proofread and send.</strong> Download the PDF and email it to the right person, with the invoice number in the subject line.</li>
</ol>

<h2>Mistakes that delay payment for services</h2>
<ul>
<li><strong>Vague descriptions.</strong> "Services rendered: 2,000.00" invites a query. Every query adds days.</li>
<li><strong>No service dates.</strong> The client cannot match the invoice to their records or budget period.</li>
<li><strong>Billing unapproved extras.</strong> If extra work was not agreed, raise it with the client before it appears on the invoice.</li>
<li><strong>Wrong addressee.</strong> Invoices sent to a project contact instead of accounts payable can sit unopened.</li>
<li><strong>Missing PO number.</strong> Companies that use purchase orders often cannot pay without one.</li>
<li><strong>Charging tax when not registered.</strong> In VAT countries this can create a liability to pay that tax over. Check with an adviser if unsure.</li>
</ul>
<p>If you made an error after sending, do not quietly edit and resend under the same number. Our guide on <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a> covers credit notes and reissues.</p>

<h2>Hourly, flat-fee or mixed: choosing the invoice layout</h2>
<p>How you lay out the invoice should follow how you priced the work. Getting this right avoids the most common client question: "How did you get to this number?"</p>
<table>
<thead><tr><th>Pricing model</th><th>Best layout</th><th>What the client checks</th></tr></thead>
<tbody>
<tr><td>Hourly</td><td>One line per task or week, quantity in hours</td><td>Hours against their own expectations or a cap</td></tr>
<tr><td>Daily rate</td><td>One line per block of days, with dates</td><td>Days on site or attended</td></tr>
<tr><td>Flat fee</td><td>One line per deliverable</td><td>That the deliverable was received</td></tr>
<tr><td>Per visit or unit</td><td>Quantity of visits or units with a unit price</td><td>Visit dates or unit counts</td></tr>
<tr><td>Mixed</td><td>Flat-fee lines first, then hourly extras</td><td>That extras were approved</td></tr>
</tbody>
</table>
<p>For hourly work, keep a timesheet even if the client never asks for it. If they question the hours, you can send the breakdown within minutes. For flat fees, reference the proposal or quote date in the description, so the client can see the price was agreed. For mixed work, put a short phrase such as "outside original scope, approved by email 15 October" on each extra line. That one sentence prevents most disputes over additional charges.</p>

<h2>What to do after you send the invoice</h2>
<p>Sending the invoice is not the last step. A few habits make a real difference to how quickly service invoices get paid:</p>
<ul>
<li><strong>Confirm receipt.</strong> For a new client or a large amount, a quick message asking the client to confirm the invoice reached accounts payable catches problems early.</li>
<li><strong>Diary the due date.</strong> The generator does not track payments, so keep a simple list of invoice numbers, amounts and due dates in a spreadsheet or calendar.</li>
<li><strong>Send a polite reminder a few days before the due date</strong> for clients who have paid late before.</li>
<li><strong>Follow up on the day after the due date</strong> if nothing has arrived, quoting the invoice number and amount.</li>
<li><strong>Record part payments.</strong> If the client pays part, issue an updated invoice copy showing the amount paid and the balance due, using the same invoice number for reference.</li>
</ul>
<p>If a client says they cannot pay the full amount yet, agree a short written payment plan with dates rather than leaving the balance open-ended. Consistent follow-up is not pushy. Most late payments for services come from invoices that were lost, forwarded to the wrong person or waiting for an approval nobody chased.</p>

<h2>Services rendered invoice vs other service documents</h2>
<table>
<thead><tr><th>Document</th><th>When it is sent</th><th>Asks for payment?</th></tr></thead>
<tbody>
<tr><td>Quote or estimate</td><td>Before work, to agree price</td><td>No</td></tr>
<tr><td>Proforma or deposit invoice</td><td>Before work starts</td><td>Yes, upfront</td></tr>
<tr><td>Invoice for services rendered</td><td>After work is done</td><td>Yes, for completed work</td></tr>
<tr><td>Receipt</td><td>After payment</td><td>No, confirms payment</td></tr>
<tr><td>Statement of account</td><td>Periodically</td><td>Summarises what is owed</td></tr>
</tbody>
</table>

<h2>Create your invoice for services rendered</h2>
<p>A good invoice for services rendered is specific: real dates, real tasks, a clear price breakdown and an exact due date. The words "services rendered" are optional; the detail is not. Write it the same day the work or billing period ends, and you will get paid sooner with fewer questions.</p>
<p>Open the <a href="/invoice-generator">invoice generator</a>, add your service lines, set your tax and terms, and download a PDF to send.</p>
`,
  },
  {
    slug: "invoice-date-vs-due-date",
    title: "Invoice Date vs Due Date (and Supply Date) Explained",
    description:
      "Invoice date vs due date vs supply date: what each means, which one sets your tax point, how to calculate the due date, and worked UK VAT examples to follow.",
    category: "invoicing-basics",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-due-date", "invoice-payment-terms", "due-upon-receipt"],
    faqs: [
      {
        q: "What is the difference between an invoice date and a due date?",
        a: "The invoice date is the day you issue the invoice. The due date is the last day the customer can pay without being late. The gap between them comes from your payment terms: on Net 30 terms, an invoice dated 1 October is due 31 October. The invoice date is fixed when you create the document; the due date is calculated from it, unless your contract says terms run from another event, such as delivery or receipt of the invoice.",
      },
      {
        q: "Is the invoice date the same as the date of supply?",
        a: "Not always. The date of supply is when you delivered the goods or performed the service. The invoice date is when you issued the bill. If you deliver on 28 September and invoice on 6 October, the two dates differ. In VAT systems this matters because the tax point can depend on either date. UK VAT invoices must show the time of supply as well as the date of issue when they are different.",
      },
      {
        q: "What is a tax point?",
        a: "In UK VAT, the tax point, also called the time of supply, is the date that decides which VAT return a sale belongs to. The basic tax point is normally when goods are sent or services are performed. It moves to the invoice date if you issue the VAT invoice within 14 days afterwards, and to the payment date or invoice date if either comes before the supply. Other VAT systems have similar rules with different time limits.",
      },
      {
        q: "Does payment term counting start from the invoice date?",
        a: "Usually, yes. Most terms, such as Net 30, count calendar days from the invoice date. Some contracts count from the date the customer receives the invoice, from delivery, or from the end of the month. If you have agreed something specific, follow it. To avoid arguments, always print the actual due date on the invoice rather than only the term, so the customer does not have to calculate it.",
      },
      {
        q: "What due date applies if none was agreed?",
        a: "It depends on the country. In the UK, for business-to-business sales where no payment date has been agreed, the late payment legislation treats payment as due 30 days after the later of the customer receiving the invoice or receiving the goods or services. Other countries have their own defaults. Rather than rely on a default, agree terms upfront and print a specific due date on every invoice.",
      },
      {
        q: "Can the due date fall on a weekend?",
        a: "Yes, a due date can fall on a weekend or public holiday, but customers often treat it as the next working day because banks may not process transfers until then. If you want to avoid any argument, choose terms that land on a working day, or check the calendar and adjust the date before you send the invoice. What matters is that the date printed on the invoice is clear and matches what you agreed.",
      },
      {
        q: "Should I change the invoice date if I send the invoice late?",
        a: "No. Date the invoice on the day you actually issue it, and show the supply date separately if it is earlier. Putting an earlier date on an invoice to make it look as if it was sent on time can mislead the customer about when payment became due, and in VAT systems it can shift tax into the wrong period. If you missed the deadline, issue it now with the correct date and adjust terms if needed.",
      },
      {
        q: "What does due on receipt mean for the due date?",
        a: "Due on receipt means payment is expected as soon as the customer receives the invoice, so the invoice date and due date are effectively the same day. In practice, many customers still take a few days to pay. If you need money quickly, due on receipt sets the expectation, but you may also want to add a short grace period or a specific date, such as due within 7 days, to make follow-up clearer.",
      },
    ],
    content: `
<p><strong>Invoice date vs due date</strong>: the invoice date is the day you issue the invoice, and the due date is the last day the customer can pay on time. The due date is normally the invoice date plus your payment terms, such as 30 days. A third date, the supply date (or tax point), records when the work or delivery actually happened and can decide which tax period the sale falls in.</p>
<p>Our separate guide to <a href="/blog/invoice-due-date">setting an invoice due date</a> focuses on choosing terms. This article explains all the dates that can appear on an invoice, how they interact, and why the supply date matters for VAT.</p>

<h2>The dates on an invoice at a glance</h2>
<table>
<thead><tr><th>Date</th><th>What it records</th><th>Who sets it</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Invoice date (date of issue)</td><td>When the invoice was created and sent</td><td>You, on the day you issue</td><td>Starts payment terms; can set the tax point</td></tr>
<tr><td>Supply date (time of supply)</td><td>When goods were delivered or services performed</td><td>Fact of the transaction</td><td>Sets the basic tax point in VAT systems</td></tr>
<tr><td>Due date</td><td>Last day for on-time payment</td><td>Calculated from agreed terms</td><td>Tells the customer when to pay; late fees run from it</td></tr>
<tr><td>Service period</td><td>Start and end of ongoing work</td><td>Fact of the transaction</td><td>Shows what the invoice covers</td></tr>
<tr><td>Payment date</td><td>When money was received</td><td>The customer</td><td>Can be the tax point for advance payments</td></tr>
</tbody>
</table>
<p>A simple invoice for a one-off job can get away with two dates: invoice date and due date. Once the work happened on a different day from the invoice, or covers a period, add the supply date or service period too.</p>

<h2>What the invoice date means</h2>
<p>The invoice date is the date of issue: the day you create and send the invoice. It should be the real date. It is used to:</p>
<ul>
<li>Start the clock on your payment terms.</li>
<li>Place the sale in your sales records and, for many businesses, in the right accounting period.</li>
<li>In VAT systems, potentially fix the tax point (more on that below).</li>
<li>Sequence your invoices alongside your invoice numbers.</li>
</ul>
<p>Invoice numbers and dates should move forward together. If invoice 105 is dated before invoice 104, an auditor will ask why. Keep a clean sequence with the <a href="/tools/invoice-number-generator">invoice number generator</a>, and never put an earlier date on an invoice to make it look as if it was sent sooner. Our guide to <a href="/blog/backdating-invoices">backdating invoices</a> explains why.</p>

<h2>What the due date means</h2>
<p>The due date is the deadline for payment. In any invoice date vs due date question, remember that the due date can never come before the invoice date; our generator will not let you save one that does. It comes from the payment terms you agreed with the customer. Common terms and what they produce for an invoice dated 31 October 2026:</p>
<table>
<thead><tr><th>Term</th><th>Rule</th><th>Due date</th></tr></thead>
<tbody>
<tr><td>Due on receipt</td><td>Pay when received</td><td>31 October 2026</td></tr>
<tr><td>Net 7</td><td>7 days after invoice date</td><td>7 November 2026</td></tr>
<tr><td>Net 14</td><td>14 days after invoice date</td><td>14 November 2026</td></tr>
<tr><td>Net 30</td><td>30 days after invoice date</td><td>30 November 2026</td></tr>
<tr><td>EOM (end of month)</td><td>End of the month of the invoice, or the month after, depending on the agreement</td><td>Check the agreed wording</td></tr>
</tbody>
</table>
<p>Count calendar days, not working days, unless your contract says otherwise. Always print the actual date, not just "Net 30", because a printed date leaves nothing to interpret. For a full guide to choosing terms, see <a href="/blog/invoice-payment-terms">invoice payment terms</a> and <a href="/blog/due-upon-receipt">due upon receipt</a>.</p>
<p>In the UK, if a business customer and supplier have not agreed a payment date, the late payment legislation treats payment as due 30 days after the later of the customer receiving the invoice or the goods or services. It is far better to agree terms in writing than to rely on that default.</p>

<h2>Invoice date vs due date vs supply date: the tax point</h2>
<p>This is where the dates stop being just admin. In VAT systems, the date that decides which VAT return a sale goes in is the tax point, also called the time of supply. It is not automatically the invoice date.</p>
<p>HMRC's VAT guide (Notice 700) sets out the UK rules:</p>
<ol>
<li><strong>Basic tax point:</strong> for goods, usually when you send them or the customer takes them away; for services, when the service is performed.</li>
<li><strong>Invoice within 14 days:</strong> if you issue a VAT invoice up to 14 days after the basic tax point, the invoice date becomes the tax point. You can ask HMRC in writing for a longer period, for example if you normally invoice monthly.</li>
<li><strong>Earlier invoice or payment:</strong> if you issue an invoice or receive payment before the basic tax point, that earlier date is the tax point, for the amount invoiced or paid.</li>
<li><strong>Continuous services:</strong> for ongoing services, there is a tax point each time you issue a VAT invoice or receive payment, whichever happens first.</li>
</ol>
<p>HMRC also says you should normally issue a VAT invoice within 30 days of the tax point, and a full VAT invoice must show the time of supply as well as the date of issue where they differ. EU countries follow similar principles under the EU VAT Directive, which requires the date of issue and, where different, the date of supply. Time limits vary by country, so check local rules.</p>
<p>In the US, there is no federal VAT, and sales tax is generally based on the sale rather than a tax point system. For income tax, cash-method businesses generally record income when they receive payment, while accrual-method businesses generally record it when it is earned, not simply when it is invoiced. Ask a qualified adviser how this applies to you.</p>

<h2>Worked example: one job, two possible VAT quarters</h2>
<p>A VAT-registered plumber in England uses calendar quarters, so the July to September quarter ends on 30 September 2026. She finishes a bathroom installation on Monday 28 September 2026. The price is 2,000.00 plus 20% VAT of 400.00, total 2,400.00, on Net 30 terms.</p>
<table>
<thead><tr><th>Scenario</th><th>Invoice date</th><th>Days after supply</th><th>Tax point</th><th>VAT return</th><th>Due date</th></tr></thead>
<tbody>
<tr><td>A</td><td>6 October 2026</td><td>8</td><td>6 October (invoice date)</td><td>October to December</td><td>5 November 2026</td></tr>
<tr><td>B</td><td>15 October 2026</td><td>17</td><td>28 September (supply date)</td><td>July to September</td><td>14 November 2026</td></tr>
</tbody>
</table>
<p>In scenario A the invoice is within 14 days, so the invoice date wins and the 400.00 VAT goes in the next quarter. In scenario B the invoice is late, the basic tax point stands, and the VAT belongs in the quarter that has already closed. If she had already filed that return, she might need to correct it. In both cases the due date is simply the invoice date plus 30 days; the tax point does not change when the customer must pay.</p>
<p>The lesson is to invoice promptly and show the supply date on the invoice. In the <a href="/invoice-generator/uk">UK invoice generator</a> you can put "Date of supply: 28 September 2026" at the start of the line description or in the notes.</p>

<h2>How to show the dates clearly on your invoice</h2>
<ul>
<li><strong>Invoice date:</strong> near the invoice number at the top.</li>
<li><strong>Due date:</strong> next to the invoice date and again near the total. "Due 30 November 2026" is clearer than "Net 30".</li>
<li><strong>Supply date or service period:</strong> in each line description, for example "Bathroom installation completed 28 Sep 2026", or in the notes if one date covers everything.</li>
<li><strong>Date format:</strong> use a format your customer cannot misread. "06/10/2026" means 6 October in the UK and 10 June in the US. Writing the month as a word avoids the problem in descriptions and notes. Our generator prints the issue and due dates in year-month-day order (2026-10-06), which reads the same way in every country, whether you use the <a href="/invoice-generator/usa">USA invoice generator</a> or the UK version.</li>
</ul>

<h2>Common mistakes with invoice dates</h2>
<ol>
<li><strong>Using the supply date as the invoice date</strong> when the invoice was actually issued later. The invoice date should be the real issue date.</li>
<li><strong>Leaving out the supply date</strong> on VAT invoices where it differs from the issue date.</li>
<li><strong>Printing only the term.</strong> "Net 30" without a date leads to customers counting from when they opened the email.</li>
<li><strong>Invoicing weeks late.</strong> You get paid later, and in VAT systems the sale may land in a different period from the invoice.</li>
<li><strong>Changing dates when correcting an invoice.</strong> A correction should be done with a credit note or a new invoice, not by redating the original. See <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a>.</li>
<li><strong>Mixing date formats</strong> across invoices, which makes records hard to search and sort.</li>
</ol>

<h2>Dates on recurring and consolidated invoices</h2>
<p>If you bill monthly for many deliveries, each delivery has its own supply date, but the invoice has one issue date and one due date. Show each supply date on its own line. Our guide to the <a href="/blog/consolidated-invoice">consolidated invoice</a> covers this in detail, including how the 14-day rule can catch out month-end billing.</p>
<p>For services billed in advance, such as a subscription or retainer, the invoice date often comes before the service period. Show the period clearly, for example "Support retainer, 1 to 30 November 2026", so the customer knows what the payment covers.</p>

<h2>Invoice date vs due date: quick answers to edge cases</h2>
<p>A few situations come up often enough to deserve a direct answer.</p>
<ul>
<li><strong>The customer says the invoice arrived late.</strong> If your terms count from the invoice date, the due date stands. If they count from receipt, use the date the customer actually received it. Email gives you a sent timestamp, which helps.</li>
<li><strong>You issue the invoice before the work.</strong> That is a deposit, proforma or advance invoice. The invoice date is the issue date, and in UK VAT an advance VAT invoice or payment can create the tax point for the amount billed.</li>
<li><strong>The due date passes on a weekend.</strong> Many customers pay on the next working day. If that bothers you, check the calendar before sending and pick a weekday.</li>
<li><strong>You agreed 30 days from end of month.</strong> An invoice dated 12 October would then be due 30 November, not 11 November. Print the calculated date so nobody has to work it out.</li>
<li><strong>A partial payment arrives.</strong> The due date does not change. Record the amount paid, show the balance due, and chase the rest from the original due date.</li>
</ul>
<p>Most invoice date vs due date disputes disappear once both dates are printed clearly and the terms behind them were agreed in writing before the work started.</p>

<h2>Set your dates correctly in the generator</h2>
<p>The difference between invoice date vs due date is simple once it is written down: the invoice date is when you bill, the due date is when you get paid, and the supply date is when the work happened. Keep all three accurate and visible, invoice promptly, and check tax point rules with a qualified adviser if you are VAT-registered.</p>
<p>Open the <a href="/invoice-generator">invoice generator</a>. It fills in today as the issue date and a due date 14 days later by default; change the due date to match your agreed terms and add the supply date to the line descriptions before you download the PDF.</p>
`,
  },
  {
    slug: "tax-exempt-invoice",
    title: "Tax Exempt Invoice: How to Bill Without VAT or Sales Tax",
    description:
      "How to write a tax exempt invoice: when you can leave out VAT or sales tax, exempt vs zero-rated wording, exemption certificates and nonprofit customers.",
    category: "invoicing-basics",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["zero-rated-vs-exempt-vat", "sales-tax-on-invoices-us", "vat-invoice-guide"],
    faqs: [
      {
        q: "What is a tax exempt invoice?",
        a: "It is an invoice that does not charge VAT, GST or sales tax because the sale qualifies for an exemption, the customer is exempt, or the seller is not required to charge tax. It still needs all the usual invoice details. The important extra is a short statement explaining why no tax is charged, such as exempt supply, a customer exemption certificate number, or a note that the seller is not registered for VAT.",
      },
      {
        q: "How do I write an invoice without VAT?",
        a: "Set the tax rate to zero and add a note explaining why. If you are not VAT-registered, do not show a VAT number or a VAT line, and you can add a line such as Not registered for VAT. If you are registered but the supply is exempt, state that the supply is exempt from VAT. If the supply is zero-rated, show it at 0% VAT. Each case uses different wording, so check which one applies to you.",
      },
      {
        q: "What is the difference between exempt and zero-rated?",
        a: "Both mean no VAT is charged to the customer, but they are treated differently. Zero-rated supplies are taxable at 0%, they count towards your VAT registration threshold, and you can usually reclaim VAT on related costs. Exempt supplies are outside the VAT charge altogether, and VAT on related costs is generally not recoverable. On an invoice, zero-rated items are shown at 0% while exempt items are described as exempt.",
      },
      {
        q: "Are nonprofits exempt from sales tax?",
        a: "Not automatically. In the US, federal tax-exempt status, such as 501(c)(3), covers federal income tax. Sales tax is set by each state, and states have their own rules for which organisations qualify and what paperwork they need. Some states exempt many nonprofits; others exempt very few. As a seller, ask the nonprofit for a valid exemption certificate for your state and keep it on file before you leave tax off.",
      },
      {
        q: "Do charities pay VAT in the UK?",
        a: "Usually yes. UK charities do not have a general exemption from VAT, so they normally pay VAT on what they buy like any other customer. Certain goods and services can be zero-rated when supplied to an eligible charity, often only after the charity gives the supplier a written eligibility declaration. Check HMRC's guidance on VAT for charities before you leave VAT off, and keep the declaration with your records.",
      },
      {
        q: "What happens if I accept an invalid exemption certificate?",
        a: "In the US, if a sale is audited and the exemption certificate is missing, incomplete or not accepted by the state, the seller can be held responsible for the uncollected sales tax, plus interest and possibly penalties. Rules differ by state, including what counts as accepting a certificate in good faith. Check that the certificate is complete, signed and appropriate for the purchase, and keep a copy for as long as your state requires.",
      },
      {
        q: "Can I issue a tax exempt invoice if I am a small business?",
        a: "If you are below the registration threshold and not registered, you generally do not charge VAT or GST at all, so your invoices will not include tax. In the UK the VAT registration threshold was 90,000 pounds of taxable turnover at the time of writing; check GOV.UK for the current figure. In the US, small-seller rules for sales tax vary by state. Being unregistered is different from making an exempt supply, so word the note accordingly.",
      },
      {
        q: "Is reverse charge the same as tax exempt?",
        a: "No. Under the reverse charge, the sale is taxable, but the customer accounts for the VAT instead of the supplier. The invoice shows no VAT charged, but it must state that the reverse charge applies, often with the customer's VAT number. An exempt supply has no VAT due from anyone. Mixing up the two can cause problems for both you and your customer, so use the correct wording for the situation.",
      },
    ],
    content: `
<p>A <strong>tax exempt invoice</strong> is an invoice that shows no VAT, GST or sales tax because the sale, the customer or the seller qualifies for an exemption. It still needs every normal invoice detail, plus one extra: a short, accurate statement explaining why tax is not charged. The wording depends on the reason, and getting it wrong can cost you the tax later.</p>
<p>This guide covers the main reasons an invoice may carry no tax, the difference between exempt and zero-rated wording, how to handle US exemption certificates and nonprofit customers, and how to set it up in the <a href="/invoice-generator">free invoice generator</a> by setting the tax rate to 0.</p>

<h2>Five reasons an invoice may have no tax</h2>
<p>"Tax exempt" is often used loosely. In practice, an invoice without VAT or sales tax falls into one of five situations, and each one needs different wording.</p>
<table>
<thead><tr><th>Situation</th><th>Who it applies to</th><th>What the invoice should say</th></tr></thead>
<tbody>
<tr><td>Seller not registered</td><td>Small businesses below the VAT or GST threshold</td><td>No tax line; optionally "Not registered for VAT"</td></tr>
<tr><td>Exempt supply</td><td>Certain goods or services the law exempts, such as many financial, insurance, health and education services in VAT systems</td><td>"Exempt from VAT" with the reason, where required</td></tr>
<tr><td>Zero-rated supply</td><td>Taxable items at a 0% rate, such as many exports and some essentials</td><td>VAT shown at 0%</td></tr>
<tr><td>Exempt customer</td><td>Buyers with an exemption certificate, such as resellers or qualifying organisations in US states</td><td>Exemption reason and certificate number</td></tr>
<tr><td>Reverse charge or out of scope</td><td>Some cross-border B2B services and specific sectors</td><td>"Reverse charge applies" or "Outside the scope of VAT", as appropriate</td></tr>
</tbody>
</table>
<p>The first step is always to work out which of these applies. If you are unsure, ask a qualified accountant or tax adviser before you send the invoice.</p>

<h2>Exempt vs zero-rated wording on a tax exempt invoice</h2>
<p>In VAT systems, exempt and zero-rated are not the same, even though the customer pays no VAT in both cases.</p>
<ul>
<li><strong>Zero-rated</strong> supplies are taxable at 0%. Show them with a VAT rate of 0% and a VAT amount of 0.00. Zero-rated sales count towards your VAT registration threshold, and you can usually reclaim VAT on related costs.</li>
<li><strong>Exempt</strong> supplies are outside the VAT charge. Do not show them as 0% VAT; describe them as exempt. VAT on costs that relate to exempt sales is generally not recoverable.</li>
</ul>
<p>HMRC's VAT guide says that where a VAT invoice includes zero-rated or exempt goods or services, you must show a separate total for their values and make clear that no VAT is payable on them. In the EU, the VAT Directive requires an exempt invoice to refer to the legal provision for the exemption or otherwise indicate that the supply is exempt.</p>
<p>Our full comparison of <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a> covers the cost differences and has mixed-rate examples. For reverse charge wording, see the <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a>.</p>

<h3>Sample wording you can adapt</h3>
<ul>
<li>Not registered: "No VAT charged. [Business name] is not registered for VAT."</li>
<li>Exempt supply (UK): "Exempt from VAT: [brief description of the exempt service]."</li>
<li>Exempt supply (EU): "VAT exempt under [article of the national VAT law or Directive that applies]."</li>
<li>Zero-rated export: "Zero-rated export of goods. VAT at 0%."</li>
<li>US exempt customer: "Sales tax exempt: resale. Customer certificate no. [number], [state], on file."</li>
<li>US nonprofit: "Sales tax exempt: [state] exemption certificate no. [number] on file."</li>
</ul>
<p>Do not copy legal references unless you have confirmed they apply. A wrong article number is worse than a clear plain-English reason.</p>

<h2>US sales tax: exemption certificates and nonprofit customers</h2>
<p>In the US there is no federal VAT. Sales tax is set by states and, in many places, local governments. Several states have no statewide sales tax at all, and many states do not tax most services. Our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> explains the basics.</p>
<p>When a customer claims an exemption, the burden usually falls on you as the seller to document it. The common cases:</p>
<ol>
<li><strong>Resale:</strong> a business buying goods to resell gives you a resale certificate.</li>
<li><strong>Nonprofit or government buyer:</strong> qualifying organisations give you a state exemption certificate. Federal 501(c)(3) status alone does not automatically exempt a nonprofit from state sales tax.</li>
<li><strong>Exempt use:</strong> some states exempt items used in manufacturing, agriculture or other specific activities.</li>
</ol>
<p>Practical steps before you issue a tax exempt invoice to a US customer:</p>
<ul>
<li>Get the certificate before or at the time of sale, not months later.</li>
<li>Check it is complete, signed, and valid for your state and the type of purchase.</li>
<li>Put the certificate number and exemption reason on the invoice.</li>
<li>Keep a copy with your records. If a state audits you and the certificate is missing or invalid, you may owe the uncollected tax.</li>
</ul>
<p>Rules and forms vary by state, so check your state revenue department's guidance or ask an adviser.</p>

<h2>UK charities and other "exempt" customers</h2>
<p>Many UK suppliers assume charities do not pay VAT. In general they do. There is no blanket VAT exemption for charities, though some specific supplies to eligible charities can be zero-rated, often only when the charity gives you a written eligibility declaration. Similarly, being a public body or a small customer does not by itself make a sale exempt. The exemption normally depends on what you are supplying, not who is buying it. If a customer asks you to drop VAT, ask them which relief they are relying on and check HMRC's guidance before agreeing.</p>

<h2>Worked example: tax exempt invoice for a nonprofit customer</h2>
<p>A print shop in a US state that taxes printed materials prints 500 event programmes for a local nonprofit. The nonprofit provides a valid state exemption certificate. The normal combined sales tax rate at the shop's location is 7.25%.</p>
<table>
<thead><tr><th>Line</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Event programmes, 12 pages, full colour</td><td>500</td><td>1.80</td><td>900.00</td></tr>
<tr><td>Design adjustments to supplied artwork</td><td>2</td><td>45.00</td><td>90.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>990.00</td></tr>
<tr><td colspan="3">Sales tax (0%, exempt)</td><td>0.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td>990.00</td></tr>
</tbody>
</table>
<p>Had the customer not been exempt, sales tax at 7.25% would have added about 71.78, for a total of roughly 1,061.78. The note on the invoice reads: "Sales tax exempt. [State] exemption certificate no. [number] on file, received 20 October 2026." The 7.25% rate here is only an illustration; use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to work out amounts for your own rate, and check whether your state taxes each item at all.</p>

<h2>Invoices without tax in other countries</h2>
<p>The same principle, state the reason, applies almost everywhere, but the paperwork differs. A few examples, which you should confirm against the official guidance for your country:</p>
<ul>
<li><strong>India (GST):</strong> a registered supplier making exempt supplies generally issues a bill of supply rather than a tax invoice. Our <a href="/blog/gst-invoice-guide">GST invoice guide</a> covers when each document is needed.</li>
<li><strong>UAE (VAT):</strong> some supplies are exempt, for example certain financial services and some residential property, while others, such as many exports, are zero-rated. Our guide to <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a> lists the details a tax invoice needs.</li>
<li><strong>Pakistan (sales tax):</strong> exemptions are set out in the schedules to the sales tax law and are amended by finance acts, so check the current schedule before relying on one.</li>
<li><strong>Canada, Australia and New Zealand (GST/HST):</strong> each separates exempt or input-taxed supplies from zero-rated ones, with different consequences for claiming tax on costs.</li>
</ul>
<p>If you sell across borders, the place-of-supply rules may mean no local tax is charged even though the sale is not exempt. That is a separate question from exemption and often needs specific invoice wording too.</p>

<h2>Records to keep for every tax exempt invoice</h2>
<p>An invoice without tax is the kind of document auditors look at closely, because it is where tax could have been under-collected. Keep these together for each one:</p>
<ul>
<li>A copy of the invoice as sent, with the exemption note.</li>
<li>The customer's exemption certificate, resale certificate or eligibility declaration, where one applies.</li>
<li>Any emails or correspondence in which the customer claimed the exemption.</li>
<li>Your notes on why the supply is exempt or zero-rated, especially if you made a judgement call.</li>
<li>For exports, proof that the goods left the country, such as shipping documents.</li>
</ul>
<p>Retention periods vary. In the UK, VAT records are generally kept for at least six years; US states set their own periods for sales tax records. Our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> has more detail.</p>

<h2>How to create a tax exempt invoice in the generator</h2>
<ol>
<li>Open the <a href="/invoice-generator/usa">USA invoice generator</a>, the UK version or the main generator, depending on your location.</li>
<li>Fill in your details and the customer's legal name and address.</li>
<li>Add your line items as normal.</li>
<li>Set the tax rate to 0. The tax line will show 0.00.</li>
<li>In the notes, write the exemption reason using the wording that fits your situation, with any certificate number.</li>
<li>If you are not registered for VAT or GST, leave the tax number fields blank.</li>
<li>Download the PDF and keep it with the customer's certificate or declaration.</li>
</ol>
<p>The generator applies one tax rate to the whole invoice. If one invoice would mix taxable and exempt lines, and your tax rules need separate totals for each, the simplest approach is to issue two invoices: one at the standard rate and one at 0% with the exemption note.</p>

<h3>Quick check before you send</h3>
<p>Run through these questions before you send any invoice with a zero tax line:</p>
<ol>
<li>Which of the five situations applies: not registered, exempt supply, zero-rated, exempt customer, or reverse charge?</li>
<li>Does the note on the invoice use wording that matches that situation?</li>
<li>Do you hold the certificate or declaration that supports it, and is it current?</li>
<li>If the invoice mixes taxable and untaxed items, have you split them so each total is clear?</li>
<li>Have you checked anything unusual with your accountant, especially a first-time exemption?</li>
</ol>
<p>Five minutes on these questions is much cheaper than paying uncollected tax out of your own margin after an audit.</p>

<h2>Common mistakes on invoices without tax</h2>
<ul>
<li><strong>Calling a zero-rated sale exempt</strong>, or the other way round. They are treated differently in your VAT return.</li>
<li><strong>Leaving tax off without a reason.</strong> A tax exempt invoice with no explanation looks like an error to the customer and to an auditor.</li>
<li><strong>Trusting a verbal exemption claim.</strong> In the US, no certificate usually means no protection for you.</li>
<li><strong>Showing a VAT number when not registered</strong>, or charging VAT when you are not registered. Both cause problems.</li>
<li><strong>Using reverse charge wording for an exempt supply.</strong> They mean different things.</li>
<li><strong>Fixing a tax mistake by editing the original.</strong> Use a credit note and a new invoice. See <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a>.</li>
</ul>

<h2>Create your tax exempt invoice</h2>
<p>A tax exempt invoice is an ordinary invoice with one important difference: it explains why no tax is charged. Work out which reason applies, use matching wording, keep any certificate or declaration on file, and confirm anything unusual with a qualified tax adviser.</p>
<p>When you are ready, open the <a href="/invoice-generator">invoice generator</a>, set the tax rate to 0, add your exemption note and download the PDF.</p>
`,
  },
  {
    slug: "backdating-invoices",
    title: "Backdating Invoices: Is It Legal and What to Do Instead",
    description:
      "Backdating invoices explained: when an earlier date is fine, when it becomes misleading or illegal, UK VAT and US tax angles, and how to invoice late safely.",
    category: "invoicing-basics",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "invoice-date-vs-due-date",
      "how-to-correct-an-invoice",
      "year-end-invoicing-checklist",
    ],
    faqs: [
      {
        q: "Can you backdate an invoice?",
        a: "You can show an earlier supply date or service period on an invoice, and you can reissue a copy of an old invoice with its original date. What you should not do is put a false issue date on a new invoice to make it look as if it was sent earlier, especially to change which tax period or financial year it falls in. Date the invoice on the day you issue it and show the earlier work dates separately.",
      },
      {
        q: "Is backdating an invoice illegal?",
        a: "It depends on why and how. An invoice that clearly shows when the work happened and when the invoice was issued is honest. An invoice given a false issue date to mislead a tax authority, auditor, lender or customer can amount to false record-keeping, and in serious cases fraud. Tax authorities in the UK and US can charge penalties for deliberate inaccuracies. If you are unsure, speak to a qualified accountant or lawyer first.",
      },
      {
        q: "How late can I send an invoice?",
        a: "For collecting payment, there is usually no fixed deadline beyond the time limit for recovering debts, which in England and Wales is generally six years for contract claims. Tax rules are stricter. HMRC says a VAT invoice should normally be issued within 30 days of the tax point. Contracts can also set billing deadlines, and some large customers refuse invoices submitted too long after the work. Check your agreement and invoice as soon as possible.",
      },
      {
        q: "A client asked me to date my invoice in their last financial year. Should I?",
        a: "Not by changing the issue date. If the work genuinely happened in their previous financial year, show the service period clearly, for example Services provided 1 to 31 March 2026, and date the invoice on the day you issue it. Their accountant can then decide how to treat it. Putting a false date on the invoice to help them use up a budget could make you part of a misleading record.",
      },
      {
        q: "What date should I use on a late invoice?",
        a: "Use the date you actually issue it as the invoice date. Then show the date of supply or the service period in the line descriptions or notes. If you are VAT-registered, the date of supply may still set the tax point, so the VAT could belong in an earlier return. Set the due date from the invoice date using your agreed terms, unless your contract says terms run from the date of supply.",
      },
      {
        q: "Can I reissue a lost invoice with the original date?",
        a: "Yes. If a customer lost an invoice, sending a copy with the original number, date and amounts is not backdating, because the invoice really was issued on that date. Mark it clearly as a copy or duplicate so it is not mistaken for a new bill and paid twice. Do not give it a new number. If any detail needs to change, issue a credit note and a new invoice instead.",
      },
      {
        q: "What happens if VAT on a late invoice belongs to a past return?",
        a: "If the tax point falls in a VAT period you have already filed, you may need to correct that return. In the UK, HMRC allows small errors below certain limits to be corrected on your next return, while larger or deliberate errors must be reported separately. The limits and process are set out on GOV.UK. Speak to your accountant before adjusting, because the right method depends on the size and nature of the error.",
      },
      {
        q: "Does backdating affect income tax?",
        a: "It can. Your income tax treatment generally follows when you earned or received the income, depending on your accounting method, not the date typed on the invoice. Changing an invoice date to move income into a different tax year does not change when the income was really earned, and doing so deliberately can lead to penalties. If you have income near a year end, ask your accountant how to record it properly.",
      },
    ],
    content: `
<p><strong>Backdating invoices</strong> means putting an earlier issue date on an invoice than the day it was actually created. Showing an earlier date of supply, or reissuing a copy of an old invoice with its original date, is fine. Giving a new invoice a false issue date to change a tax period, financial year or payment deadline is not, and can lead to penalties.</p>
<p>This guide explains where the line sits, what UK VAT and US tax rules mean for late invoices, and how to bill for old work honestly. It is general information, not legal or tax advice; check your situation with a qualified adviser.</p>

<h2>Backdating invoices: legitimate vs misleading</h2>
<p>Most questions about whether you can backdate an invoice come from real situations: you forgot to bill, a client wants the invoice in last year's budget, or you are tidying up records before a year end. Here is how common cases compare.</p>
<table>
<thead><tr><th>Situation</th><th>Acceptable?</th><th>The honest approach</th></tr></thead>
<tbody>
<tr><td>You did the work in March but only invoice in May</td><td>Yes, if dated correctly</td><td>Invoice date in May; show "Services provided March 2026"</td></tr>
<tr><td>Customer lost an invoice and wants a copy</td><td>Yes</td><td>Send a copy with the original number and date, marked "Copy"</td></tr>
<tr><td>Contract says invoice on completion and you are a few days late</td><td>Yes</td><td>Use the real issue date; agree terms run from completion if needed</td></tr>
<tr><td>Client asks you to date the invoice in their previous financial year</td><td>Not by changing the issue date</td><td>Show the service period; let their accountant decide treatment</td></tr>
<tr><td>You want income to fall in a different tax year</td><td>No</td><td>Record income according to your accounting method</td></tr>
<tr><td>You want to avoid VAT falling in an already-filed return</td><td>No</td><td>Correct the return using the official process</td></tr>
<tr><td>You want a late fee to start earlier</td><td>No</td><td>Late fees run from the real due date</td></tr>
</tbody>
</table>
<p>Backdating invoices is not a grey area once you separate the two dates involved. The test is simple: would anyone relying on the invoice, such as the customer, an auditor, a lender or a tax authority, be misled by the date? If yes, do not use it.</p>

<h2>Why the invoice date matters so much</h2>
<p>An invoice date is not just admin. It can affect:</p>
<ul>
<li><strong>Tax periods.</strong> In VAT systems the invoice date can set the tax point, which decides which VAT return a sale belongs to.</li>
<li><strong>Financial years.</strong> For both you and your customer, the date helps place the transaction in the right accounts.</li>
<li><strong>Payment deadlines.</strong> Terms such as Net 30 usually count from the invoice date, so a false date shortens the customer's time to pay.</li>
<li><strong>Audit trails.</strong> Invoice numbers and dates should run in order. A backdated invoice with a later number than its neighbours stands out immediately.</li>
<li><strong>Lending and factoring.</strong> If you borrow against your receivables, the age of each invoice affects what a lender will advance. Misstating dates there is a serious matter.</li>
</ul>
<p>Our guide to <a href="/blog/invoice-date-vs-due-date">invoice date vs due date</a> explains the different dates on an invoice and how they interact.</p>

<h2>UK rules: VAT time limits and tax points</h2>
<p>In the UK, HMRC's VAT guide (Notice 700) sets out the time of supply rules. In summary:</p>
<ol>
<li>The basic tax point is usually when goods are sent or collected, or when a service is performed.</li>
<li>If you issue a VAT invoice within 14 days after that, the invoice date becomes the tax point, unless HMRC has agreed a longer period.</li>
<li>If you invoice later than 14 days, the basic tax point stands. The VAT belongs to the period in which the supply happened, not the invoice date.</li>
<li>You should normally issue a VAT invoice within 30 days of the tax point.</li>
<li>A VAT invoice must show the time of supply as well as the date of issue where they differ.</li>
</ol>
<p>That last point is the honest answer to most backdating questions in the UK. You do not need a false date, because the invoice is designed to carry both dates. The issue date shows when you billed; the time of supply shows when the work happened.</p>
<p>Late invoicing can also mean VAT belongs in a return you have already filed. HMRC has a process for correcting errors, with smaller errors often fixable on your next return and larger ones reported separately. Check the current thresholds on GOV.UK and involve your accountant. Deliberately wrong dates designed to move VAT between periods could be treated as a deliberate inaccuracy, which carries higher penalties than a careless one.</p>
<p>For collecting the money, the general time limit for bringing a contract debt claim in England and Wales is six years. So a late invoice is usually still collectable, but the longer you wait, the harder it gets. If you need to chase an old debt, our guide to <a href="/blog/statutory-late-payment-interest">statutory late payment interest</a> explains what you may be able to add.</p>

<h2>US angle: income tax, sales tax and records</h2>
<p>The US has no federal VAT, so there is no federal tax point rule. The invoice date still matters, though:</p>
<ul>
<li><strong>Income tax:</strong> cash-method businesses generally report income when they receive it; accrual-method businesses generally report it when it is earned. Changing the date on an invoice does not change either of those facts.</li>
<li><strong>Sales tax:</strong> states have their own rules on when tax is due on a sale and how long you must keep records. A false date can put tax in the wrong filing period.</li>
<li><strong>Record-keeping:</strong> the IRS expects records that support the income and expenses on your return. Records that are deliberately false can lead to civil penalties, and in serious cases criminal charges.</li>
</ul>
<p>If a client asks for an invoice dated in their previous fiscal year, the safe US answer is the same as the UK one: real issue date, plus a clear service period. Ask your accountant or a tax professional if you are unsure about a specific case.</p>
<p>Other countries have their own limits. In the EU, for example, invoices for certain cross-border business supplies must be issued by a set point in the following month, and many e-invoicing systems now record the time an invoice is submitted, which makes backdating easy to spot. Check the rules wherever you are registered.</p>

<h2>How to invoice late without backdating invoices</h2>
<p>Forgot to bill a client for a job three months ago? Here is how to do it properly.</p>
<ol>
<li><strong>Gather the evidence.</strong> Timesheets, delivery notes, emails confirming the work, and the original quote or agreement.</li>
<li><strong>Use the next invoice number in your sequence.</strong> Do not squeeze in a number from the past. The <a href="/tools/invoice-number-generator">invoice number generator</a> can help you keep a tidy sequence.</li>
<li><strong>Date the invoice today.</strong> That is the true date of issue.</li>
<li><strong>Show when the work happened.</strong> Put the date of supply or service period in each line description, for example "Website maintenance, July 2026".</li>
<li><strong>Set a fair due date.</strong> Count from today using your normal terms. A client who was not expecting the bill may need the normal time to pay.</li>
<li><strong>Explain the delay briefly.</strong> A note such as "Apologies for the late invoice for July's maintenance work" helps.</li>
<li><strong>Check the tax period.</strong> If you are VAT-registered and the supply date falls in a closed period, speak to your accountant about correcting it.</li>
</ol>

<h2>Worked example: a late invoice done properly</h2>
<p>A UK web developer, VAT-registered on calendar quarters, completed a one-off site migration for a client on 15 July 2026: 10 hours at 50.00 per hour. She forgot to invoice until 28 October 2026.</p>
<table>
<thead><tr><th>Item</th><th>Value</th></tr></thead>
<tbody>
<tr><td>Invoice number</td><td>Next in sequence, WD-2026-087</td></tr>
<tr><td>Invoice date</td><td>28 October 2026</td></tr>
<tr><td>Line description</td><td>Website migration, completed 15 July 2026, 10 hours at 50.00</td></tr>
<tr><td>Net amount</td><td>500.00</td></tr>
<tr><td>VAT at 20%</td><td>100.00</td></tr>
<tr><td>Total</td><td>600.00</td></tr>
<tr><td>Due date (Net 14)</td><td>11 November 2026</td></tr>
</tbody>
</table>
<p>Because the invoice is well over 14 days after the job, the 28 October date does not become the tax point; the basic tax point of 15 July stands, so the 100.00 of VAT belongs in the July to September return. If that return has already been filed, she should speak to her accountant about correcting it. (Ongoing services follow different time of supply rules, so check those separately if your work is continuous.) The tempting shortcut, dating the invoice 31 July, would create a document that misstates when it was issued, sits out of sequence with her other invoices and could mislead the client about how long they have had to pay.</p>

<h2>Changing an old invoice is not backdating either</h2>
<p>Sometimes the question is not "can I date a new invoice in the past" but "can I change an invoice I already sent". The answer is to leave the original alone and use a credit note to cancel or reduce it, then issue a new invoice with today's date if needed. Our guide to <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a> walks through the steps, and <a href="/blog/how-to-void-an-invoice">how to void an invoice</a> covers cancelling one entirely.</p>

<h2>What to say when a client asks you to backdate</h2>
<p>Requests for backdating invoices usually come from good intentions: a client wants to use last year's budget, or their finance team closed the month before your invoice arrived. You can help without misdating anything. A reply along these lines works:</p>
<p><em>"I can't put an earlier issue date on the invoice, as it needs to show the date I actually issue it. I can show clearly that the work was done between 1 and 31 March 2026, which your accounts team can use to match it to the right period. I can also add your PO or budget code if that helps."</em></p>
<p>Most finance teams accept this immediately, because they would rather have an accurate document. Accruals, the accounting entries that record costs in the period they relate to, exist precisely so businesses can match late invoices to earlier periods without anyone changing dates. If a client insists on a false date, that is a warning sign worth taking seriously.</p>

<h2>Preventing late invoices in the first place</h2>
<ul>
<li>Invoice on completion or on a fixed day each month, and put it in your calendar.</li>
<li>Keep a running list of unbilled work, cleared each billing day.</li>
<li>Run a quick year-end check of unbilled jobs. Our <a href="/blog/year-end-invoicing-checklist">year-end invoicing checklist</a> covers this.</li>
<li>Use templates so a new invoice takes minutes. The <a href="/invoice-templates">invoice templates</a> page has free layouts.</li>
<li>For regular work, agree monthly billing in writing so both sides expect the invoice on a set date.</li>
</ul>

<h2>Bill honestly, even when you are late</h2>
<p>Backdating invoices rarely solves the problem it is meant to solve and can create a much bigger one. The invoice can already show both dates you need: the real issue date and the date the work was done. Use both, invoice as soon as you can, and ask a qualified adviser if a late invoice affects a tax return you have already filed.</p>
<p>When you are ready, open the <a href="/invoice-generator">invoice generator</a>, date the invoice today, add the service period to each line and download the PDF.</p>
`,
  },
];
