import type { PostDraft } from "../blog";

export const COMPARISON_FINANCE_POSTS: PostDraft[] = [
  {
    slug: "invoice-vs-purchase-order",
    title: "Invoice vs Purchase Order: Key Differences, Flow and Examples",
    description:
      "Invoice vs purchase order explained: who issues each, when, and why they must match. Includes a comparison table, a three-way match example and a PO workflow.",
    category: "comparisons",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "invoice-vs-sales-order",
      "three-way-match",
      "po-number-on-invoice",
      "invoice-vs-bill",
      "accounts-receivable-guide",
    ],
    faqs: [
      {
        q: "Who issues a purchase order and who issues an invoice?",
        a: "The buyer issues the purchase order to request goods or services at agreed prices. The seller issues the invoice after delivering, asking the buyer to pay for what was supplied.",
      },
      {
        q: "Is a purchase order legally binding?",
        a: "Once the seller accepts a purchase order, it usually forms or evidences a contract on the terms it states. Exactly when it becomes binding depends on local contract law and any master agreement, so check with a lawyer for high-value deals.",
      },
      {
        q: "Can an invoice be issued without a purchase order?",
        a: "Yes. Many small businesses and individual clients never use purchase orders. But if a client's finance team requires one, an invoice without a valid PO number is often rejected or delayed.",
      },
      {
        q: "What happens if the invoice does not match the purchase order?",
        a: "The buyer's accounts payable team will usually put the invoice on hold until the difference is explained. The fix is typically a revised PO from the buyer or a credit note and corrected invoice from the seller.",
      },
      {
        q: "Can one purchase order have several invoices?",
        a: "Yes. With partial deliveries or milestone work, a seller may issue several invoices against one PO. Each invoice should quote the same PO number and the running total should never exceed the PO value.",
      },
      {
        q: "Where should the PO number go on an invoice?",
        a: "Put the PO number near the top of the invoice, next to the invoice number and date, and repeat it in the email subject line when you send the invoice. Accounts payable teams use it to match your invoice to the order. Our free generator has a dedicated PO number field, so it appears clearly on the PDF.",
      },
      {
        q: "Is a purchase order the same as a quote?",
        a: "No. A quote, or estimate, is issued by the seller to propose prices before an order. A purchase order is issued by the buyer to accept terms and place the order. The typical sequence is quote, purchase order, delivery, then invoice. A PO often refers back to the quote number so both sides agree on the price and scope.",
      },
      {
        q: "What is a purchase requisition?",
        a: "A purchase requisition is an internal request from an employee or department asking for approval to buy something. Once approved, the purchasing team turns it into a purchase order sent to the supplier. Suppliers usually never see the requisition. It matters to you only because a buyer's PO may take longer to arrive while their internal approval is pending.",
      },
      {
        q: "What is the difference between a purchase order and a sales order?",
        a: "A purchase order is the buyer's document that places an order. A sales order is the seller's internal document confirming the order and setting up fulfilment, often created when the PO is received. Many businesses send the buyer an order confirmation based on the sales order. The invoice then follows delivery and should reference the original PO number.",
      },
      {
        q: "Can a purchase order be used as a tax document?",
        a: "Generally no. For VAT, GST and sales tax purposes, the invoice is the document that records the sale and supports the buyer's tax claims, while the purchase order is a commercial document showing what was ordered. Keep both for your records, because auditors may use the PO to confirm a purchase was authorized, but rely on the invoice for tax.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the invoice vs purchase order relationship, the purchase order (PO) comes first: the buyer sends it to the seller to order specific goods or services at agreed prices. The invoice comes last: the seller sends it after delivery to request payment for what was supplied. The PO authorizes a purchase; the invoice asks to be paid for it, and the two should match.</p>

<p>This guide compares both documents side by side, walks through the full PO-to-payment workflow, shows a worked example of invoicing against a PO with a partial delivery, and lists the mismatches that get invoices stuck. When you are ready to bill, our <a href="/invoice-generator">free invoice generator</a> has a dedicated field for the client's PO number, and our guide to the <a href="/blog/po-number-on-invoice">PO number on an invoice</a> explains where it should appear.</p>

<h2>What is a purchase order?</h2>
<p>A purchase order is a buyer-created document that tells a supplier exactly what the buyer wants to purchase. It is usually generated inside the buyer's procurement or accounting system after an internal approval, and it gives the supplier a reference number to quote on every later document.</p>
<p>A typical purchase order includes:</p>
<ul>
<li>A unique PO number and the date it was issued</li>
<li>The buyer's legal name, billing address and delivery address</li>
<li>The supplier's name and address</li>
<li>Item descriptions, quantities and agreed unit prices</li>
<li>Delivery dates, shipping terms and payment terms</li>
<li>The name of the person who approved the purchase</li>
</ul>
<p>For the buyer, a PO is a spending control. It means the cost was approved before anyone committed money. For the seller, an accepted PO is written confirmation of the order, which helps when a dispute arises later.</p>

<h2>What is an invoice?</h2>
<p>An invoice is a seller-created document that records a sale and requests payment. It lists what was delivered, how much is owed, the due date and how to pay. Once issued, it becomes an account receivable for the seller and an account payable for the buyer. If you are confused by the buyer-side terminology, read <a href="/blog/invoice-vs-bill">invoice vs bill</a>.</p>

<h2>Invoice vs purchase order: side-by-side comparison</h2>
<table><thead><tr><th>Feature</th><th>Purchase order</th><th>Invoice</th></tr></thead><tbody>
<tr><td>Created by</td><td>Buyer</td><td>Seller</td></tr>
<tr><td>Sent to</td><td>Seller</td><td>Buyer (usually accounts payable)</td></tr>
<tr><td>Timing</td><td>Before goods or services are supplied</td><td>After delivery, or at an agreed billing milestone</td></tr>
<tr><td>Purpose</td><td>Authorize and order a purchase</td><td>Request payment for a completed supply</td></tr>
<tr><td>Reference number</td><td>PO number, set by the buyer</td><td>Invoice number, set by the seller</td></tr>
<tr><td>Accounting effect</td><td>Usually none until goods are received (a commitment, not a liability)</td><td>Creates a receivable for the seller and a payable for the buyer</td></tr>
<tr><td>Tax role</td><td>Generally not a tax document</td><td>Often the tax document used to claim VAT, GST or sales tax records</td></tr>
<tr><td>Can be changed by</td><td>Buyer, by issuing a revised or amended PO</td><td>Seller, by issuing a credit note and a new invoice</td></tr>
</tbody></table>
<p>The most useful row to remember is the last one. If quantities or prices change, the buyer amends the PO; the seller never edits an issued invoice but corrects it through a credit note.</p>

<h2>How the purchase order to invoice workflow works</h2>
<p>In a business that uses purchase orders, money moves through a predictable sequence. Knowing it helps you, as the seller, send an invoice that slots straight into the buyer's process.</p>
<ol>
<li><strong>Quote or estimate.</strong> The seller prices the work. See <a href="/blog/invoice-vs-quotation">invoice vs quotation</a> for how these documents differ.</li>
<li><strong>Purchase requisition.</strong> Someone inside the buying company asks for approval to spend.</li>
<li><strong>Purchase order issued.</strong> Once approved, the buyer sends a PO with a number, quantities and prices.</li>
<li><strong>PO accepted.</strong> The seller confirms the order, ideally in writing, and flags any errors now rather than at invoice time.</li>
<li><strong>Delivery.</strong> Goods ship with a packing slip or delivery note, or services are performed.</li>
<li><strong>Goods received.</strong> The buyer records a goods received note confirming what actually arrived.</li>
<li><strong>Invoice issued.</strong> The seller sends an invoice quoting the PO number, with lines that mirror the PO.</li>
<li><strong>Matching and approval.</strong> Accounts payable checks the invoice against the PO and the receipt.</li>
<li><strong>Payment.</strong> The buyer pays by the due date set in the payment terms.</li>
</ol>

<h2>Three-way matching: why your invoice must mirror the PO</h2>
<p>Many finance teams use a control called three-way matching. Before paying, they compare three documents: the purchase order (what was ordered), the receiving record (what arrived) and the invoice (what the supplier is charging). If the quantity, unit price or total on the invoice doesn't agree with the other two, the invoice is held.</p>
<table><thead><tr><th>Check</th><th>Purchase order</th><th>Goods received</th><th>Invoice</th><th>Result</th></tr></thead><tbody>
<tr><td>Item</td><td>Toner cartridge TC-90</td><td>Toner cartridge TC-90</td><td>Toner cartridge TC-90</td><td>Match</td></tr>
<tr><td>Quantity</td><td>200</td><td>120</td><td>200</td><td>Mismatch: billed for 80 units not yet received</td></tr>
<tr><td>Unit price</td><td>$42.00</td><td>—</td><td>$42.00</td><td>Match</td></tr>
</tbody></table>
<p>In this case the seller invoiced the full order even though only 120 units had shipped. The invoice will sit in an exception queue until it is corrected. Some smaller buyers only do two-way matching (PO against invoice), but the lesson is the same: bill only for what was ordered and delivered.</p>

<h2>Worked example: invoicing a partial delivery against a PO</h2>
<p>Suppose a client sends purchase order <code>PO-4471</code> for 200 toner cartridges at $42.00 each ($8,400.00) plus 40 hours of installation at $85.00 per hour ($3,400.00). The PO total is $11,800.00. You ship 120 cartridges in the first week, so your first invoice covers only those units.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Toner cartridge TC-90 (PO-4471, line 1), partial shipment</td><td>120</td><td>$42.00</td><td>$5,040.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$5,040.00</td></tr>
<tr><td colspan="3">Sales tax (7%, example rate)</td><td>$352.80</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$5,392.80</strong></td></tr>
</tbody></table>
<p>The remaining PO balance before tax is $11,800.00 − $5,040.00 = $6,760.00 (80 cartridges at $3,360.00 plus installation at $3,400.00). Your second invoice will cover those lines and reference the same PO. Tax rates vary by state and product, so check yours with our <a href="/tools/sales-tax-calculator">sales tax calculator</a> rather than copying the example rate.</p>
<p>Notice how the description repeats the PO number and line reference. That small detail lets an accounts payable clerk match your invoice in seconds. An <a href="/blog/itemized-invoice">itemized invoice</a> that mirrors the PO line by line is always faster to approve than a single lump-sum line.</p>

<h2>Common mistakes when invoicing against a purchase order</h2>
<ul>
<li><strong>Missing or wrong PO number.</strong> The single most common reason PO-backed invoices bounce.</li>
<li><strong>Billing more than the PO value.</strong> Extra work needs a revised PO from the buyer before you invoice it.</li>
<li><strong>Different prices from the PO.</strong> If you raised a price after the PO was issued, it will not be paid until the PO is updated.</li>
<li><strong>Invoicing before delivery is recorded.</strong> If the receiving step hasn't happened, the match fails.</li>
<li><strong>Billing the wrong legal entity.</strong> Use the exact buyer name on the PO, not a brand or a division name.</li>
<li><strong>Reusing invoice numbers across partial invoices.</strong> Every invoice against the PO needs its own unique number; our <a href="/tools/invoice-number-generator">invoice number generator</a> helps keep the sequence clean.</li>
</ul>
<p>Our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a> covers the general errors that apply whether or not a PO is involved. If an invoice is rejected anyway, our guide on handling an <a href="/blog/invoice-dispute">invoice dispute</a> explains how to resolve it without souring the relationship.</p>

<h2>Do you always need a purchase order?</h2>
<p>No. Purchase orders are common with larger companies, public-sector buyers and anyone with formal procurement. Freelancers working with individuals or small businesses often never see one. Even without a PO, a signed quote or contract does a similar job: it records what was agreed so the invoice can be checked against it.</p>
<p>If you do work with PO-driven clients, ask for the PO number before you start work, not when you send the invoice. It saves a round of emails and protects you if the budget is later questioned. Over time, tracking which invoices relate to which PO also makes your <a href="/blog/accounts-receivable-guide">accounts receivable</a> easier to manage, and a periodic <a href="/blog/statement-of-account">statement of account</a> helps the client reconcile everything you have billed against each order.</p>

<h2>Blanket and standing purchase orders</h2>
<p>Not every PO covers a single delivery. Clients who buy from you regularly may issue a blanket purchase order: one PO with a total spending limit and an end date, against which you invoice many times. For example, a blanket PO of $24,000 for monthly IT support from January to December lets you invoice $2,000 each month, quoting the same PO number every time.</p>
<p>With blanket POs, keep a simple running tally on your side: PO value, amount invoiced to date and remaining balance. If the remaining balance will not cover the next invoice, tell the client early so they can raise a new PO before your invoice is due. Showing "PO balance remaining" in your invoice notes is a courtesy many accounts payable teams appreciate.</p>

<p>Need the buyer-side document? Our <a href="/blog/purchase-order-template">purchase order template</a> lists the fields suppliers expect, and <a href="/blog/packing-slip-vs-invoice">packing slip vs invoice</a> explains the paperwork that travels with the goods.</p>

<h2>Create your PO-matched invoice now</h2>
<p>Now that you know the difference between an invoice and a purchase order, bill the right way: open the <a href="/invoice-generator">invoice generator</a>, enter the client's PO number, mirror the PO lines and download a PDF. The <a href="/invoice-templates/corporate">Corporate invoice template</a> suits procurement-heavy clients with a clear, formal layout.</p>
`,
  },
  {
    slug: "invoice-generator-vs-accounting-software",
    title: "Invoice Generator vs Accounting Software: Which Do You Need?",
    description:
      "Invoice generator vs accounting software: compare cost, features and setup time, see a decision checklist by invoice volume, and learn when it's time to switch.",
    category: "comparisons",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "ai-accounting-software",
      "touchless-invoice-processing",
      "how-to-generate-an-invoice",
      "bookkeeping-basics",
      "small-business-invoice-guide",
    ],
    faqs: [
      {
        q: "Is an invoice generator enough for a small business?",
        a: "For many freelancers and small businesses sending a handful of invoices a month, yes. Once you need bank feeds, expense tracking, payroll or formal financial statements, accounting software usually becomes worth it.",
      },
      {
        q: "Can I use an invoice generator and accounting software together?",
        a: "Yes. Some businesses create invoices in a generator and record them in a spreadsheet or accounting package for bookkeeping. Just keep one invoice numbering sequence so records stay consistent.",
      },
      {
        q: "Do I need accounting software to file taxes?",
        a: "Not necessarily. Tax authorities generally require accurate records, not a particular product. A clean spreadsheet plus saved invoices and receipts can be enough for simple businesses, though some jurisdictions have digital record-keeping rules, so check with an accountant.",
      },
      {
        q: "Are free invoice generators safe to use?",
        a: "Look for one that doesn't require an account, doesn't add a watermark and explains where your data is stored. Our generator saves your draft in your own browser rather than requiring sign-up.",
      },
      {
        q: "When should I switch from an invoice generator to accounting software?",
        a: "Common triggers are invoicing many clients a month, needing automatic reminders and payment matching, hiring staff, registering for VAT or sales tax with digital filing obligations, or wanting your accountant to access live books.",
      },
      {
        q: "How much does accounting software cost?",
        a: "Most accounting software is sold as a monthly or annual subscription, with prices rising for more users, features such as payroll and inventory, or higher invoice volumes. Some offer free plans with limits. Because prices and plans change often, compare current offers on each provider's official pricing page, and factor in add-ons and setup time, not just the headline price.",
      },
      {
        q: "Can I move invoices from a generator into accounting software later?",
        a: "Yes, but usually by hand or by import. Our free generator creates PDF invoices and saves drafts in your browser; it does not sync with accounting software. When you switch, you typically enter open invoices as opening balances and record new ones in the software. Keep your invoice numbering continuous so your records and audit trail stay clean.",
      },
      {
        q: "Does an invoice generator track whether invoices are paid?",
        a: "Usually not in the way accounting software does. Our generator lets you show the amount paid and balance due on an invoice, but it does not take payments, send reminders or reconcile bank transactions. If you use a generator, keep a simple list or spreadsheet of unpaid invoices and their due dates so you know who to chase.",
      },
      {
        q: "Can I use an invoice generator if I charge VAT or sales tax?",
        a: "Yes, for ordinary invoices. A good generator lets you add tax lines, your tax ID and the buyer's details. But in countries with e-invoicing mandates, such as Germany, Belgium, Saudi Arabia or India above certain thresholds, a PDF is not enough for in-scope sales and you need compliant e-invoicing software. Check your local rules.",
      },
      {
        q: "Is a spreadsheet a good alternative to both?",
        a: "A spreadsheet can work as a simple record of income, expenses and unpaid invoices for a very small business. It is less suited to producing professional invoices, because templates break easily and numbering mistakes are common. Many people combine a generator for invoices with a spreadsheet for tracking, then move to accounting software as transactions grow.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Choosing between an invoice generator vs accounting software comes down to volume and scope. An invoice generator creates a professional invoice PDF in minutes for free, with no setup. Accounting software does that too, but also tracks payments, expenses, bank transactions and taxes for a monthly fee. If you mainly need to bill clients, start with a generator; if you need full books, choose accounting software.</p>

<p>This comparison covers what each tool actually does, a side-by-side feature table, a cost illustration, and a checklist to decide which fits your business in 2026. You can try the lightweight option right now with our <a href="/invoice-generator">free online invoice generator</a> (no sign-up, no watermark) and see the full feature walkthrough in the <a href="/user-guide">user guide</a>.</p>

<h2>What an invoice generator does</h2>
<p>An invoice generator is a focused tool with one job: turning your details into a correct, good-looking invoice. You fill in a form, the tool calculates line totals, tax, discounts and the balance due, and you download a PDF to email or print. Good generators offer several templates, multiple currencies and country presets so tax labels match local expectations.</p>
<p>What a generator usually does <em>not</em> do is remember every client, record payments, reconcile your bank account or produce a profit and loss statement. That isn't a weakness; it's the trade-off that makes it fast and free. Our step-by-step guide on <a href="/blog/how-to-generate-an-invoice">how to generate an invoice</a> shows the whole process in about five minutes.</p>

<h2>What accounting software does</h2>
<p>Accounting software is a system of record for your whole business. Invoicing is one module among many. Typical capabilities include:</p>
<ul>
<li>Customer and supplier records with full transaction history</li>
<li>Invoices, quotes, credit notes and recurring billing</li>
<li>Bank feeds that import transactions automatically</li>
<li>Matching payments received to open invoices</li>
<li>Expense and bill tracking, often with receipt capture</li>
<li>Sales tax or VAT reports and, in some countries, digital tax filing</li>
<li>Financial statements: profit and loss, balance sheet, cash flow</li>
<li>Multi-user access for staff and your accountant</li>
</ul>
<p>The cost is a subscription, a learning curve and setup time: importing contacts, building a chart of accounts and connecting bank accounts. Our primer on <a href="/blog/bookkeeping-basics">bookkeeping for small business</a> explains the concepts these tools are built around.</p>

<h2>Invoice generator vs accounting software: side-by-side</h2>
<table><thead><tr><th>Factor</th><th>Invoice generator</th><th>Accounting software</th></tr></thead><tbody>
<tr><td>Price</td><td>Often free</td><td>Monthly or annual subscription, usually tiered by features or users</td></tr>
<tr><td>Setup time</td><td>None: open and type</td><td>Hours to days for contacts, accounts and bank connections</td></tr>
<tr><td>Learning curve</td><td>Minimal</td><td>Moderate; basic accounting knowledge helps</td></tr>
<tr><td>Invoice creation</td><td>Yes, with templates and automatic maths</td><td>Yes, from stored customer and product records</td></tr>
<tr><td>Payment tracking</td><td>Manual (a spreadsheet or "PAID" watermark)</td><td>Automatic matching to bank transactions</td></tr>
<tr><td>Reminders</td><td>You send them yourself</td><td>Often automated</td></tr>
<tr><td>Expenses and bills</td><td>Not included</td><td>Included</td></tr>
<tr><td>Financial reports</td><td>Not included</td><td>Profit and loss, balance sheet, aging reports</td></tr>
<tr><td>Tax filing support</td><td>Shows tax on each invoice only</td><td>Tax summaries and, in some countries, direct filing</td></tr>
<tr><td>Best for</td><td>Freelancers, side businesses, one-off or low-volume billing</td><td>Growing businesses with staff, inventory or tax filing obligations</td></tr>
</tbody></table>

<h2>A simple cost illustration</h2>
<p>Software prices change too often to quote, so here is a worked example with round, hypothetical numbers. Plug in the real prices you are offered.</p>
<p>Imagine a freelancer who sends six invoices a month and is considering a plan at $30 per month.</p>
<ul>
<li>Annual subscription: $30 × 12 = $360</li>
<li>Invoices per year: 6 × 12 = 72</li>
<li>Software cost per invoice: $360 ÷ 72 = $5.00</li>
</ul>
<p>Now picture a small agency sending 60 invoices a month on a $60 plan: $60 × 12 = $720 a year across 720 invoices, or $1.00 per invoice, and that price also covers bank reconciliation, expenses and reports that would otherwise take hours by hand. The per-invoice cost falls as volume rises, and the time saved on bookkeeping grows. That is why low-volume billers often stay with a free generator and higher-volume businesses tend to move to software.</p>

<h2>How to decide: a quick checklist</h2>
<h3>An invoice generator is probably enough if</h3>
<ul>
<li>You send fewer than roughly 10–20 invoices a month</li>
<li>You have a small number of regular clients</li>
<li>Your expenses are simple and you or your accountant record them in a spreadsheet</li>
<li>You don't hold inventory or run payroll</li>
<li>You want a professional invoice today without learning a new system</li>
</ul>
<h3>Accounting software is probably worth it if</h3>
<ul>
<li>You invoice many clients and lose time matching payments by hand</li>
<li>You need automatic reminders and an accounts receivable view</li>
<li>You are registered for VAT or sales tax with regular returns</li>
<li>You have employees, contractors or inventory to track</li>
<li>Your accountant wants direct access to your books</li>
<li>You need accrual-basis reports for lenders or investors (see <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a>)</li>
</ul>
<p>The thresholds above are rules of thumb, not hard limits. A consultant with three large clients may never need software, while a shop with dozens of small invoices may need it from day one.</p>

<h2>Using both: the hybrid approach</h2>
<p>Plenty of small businesses combine the two. They create polished invoices in a generator, then record each one in a simple sales log or bookkeeping tool. If you take this route:</p>
<ol>
<li><strong>Keep one numbering sequence.</strong> Use a single series such as <code>INV-2026-0001</code> across all tools. Our <a href="/tools/invoice-number-generator">invoice number generator</a> and <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide explain how.</li>
<li><strong>Log every invoice the day you send it.</strong> Record number, client, date, due date, amount and tax.</li>
<li><strong>Mark payments promptly.</strong> Update the log when money lands so you always know what is outstanding.</li>
<li><strong>Review receivables weekly.</strong> A short check of unpaid invoices is the core of good <a href="/blog/accounts-receivable-guide">accounts receivable</a> management.</li>
<li><strong>Save PDFs in one place.</strong> Name files consistently and keep them for as long as your tax authority requires.</li>
</ol>

<h2>Features that matter in a free invoice generator</h2>
<p>If you start with a generator, make sure it covers the basics professionals expect:</p>
<ul>
<li>Automatic line, tax and discount calculations</li>
<li>A choice of templates, from <a href="/invoice-templates/minimal">Minimal</a> to bold branded designs, with the full range on the <a href="/invoice-templates">invoice templates</a> page</li>
<li>Currency selection and tax ID fields</li>
<li>Payment instructions, notes and terms</li>
<li>Clean PDF export with no watermark you didn't add</li>
<li>Draft saving so your business details are filled in next time</li>
</ul>
<p>For repeat clients, our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> shows how to keep a monthly billing routine without automation.</p>

<h2>When to switch from a generator to software</h2>
<p>Watch for signals rather than a calendar date: you can't answer "who owes me money?" in under a minute, you are re-typing the same client details every week, your accountant charges extra to tidy your records at year end, or you register for a tax that requires digital returns. Any of these suggests your business has outgrown a stand-alone tool. The <a href="/blog/small-business-invoice-guide">small business invoicing guide</a> covers the processes worth setting up before you migrate.</p>

<h2>Common myths about both options</h2>
<ul>
<li><strong>"Free tools look unprofessional."</strong> Clients judge an invoice by its clarity and accuracy. A well-laid-out PDF with a logo, correct totals and a real due date looks professional regardless of what produced it.</li>
<li><strong>"Accounting software does the accounting for you."</strong> It automates data entry and reports, but someone still needs to categorize transactions, review reconciliations and understand the numbers.</li>
<li><strong>"I need software to be tax compliant."</strong> Tax authorities generally care that invoices contain the required details and that records are complete and retained. Some countries do require digital records or e-invoicing for certain businesses, so check local rules rather than assuming.</li>
<li><strong>"Switching later is painful, so I should start with software."</strong> Moving from a generator to software mostly means importing a client list and opening balances. Starting simple and switching when you need to is a perfectly sound plan.</li>
</ul>
<p>The right answer is the one that matches your workload today. A designer sending four invoices a month and a distributor sending four hundred have genuinely different needs, and neither choice is a sign of a more serious business.</p>

<p>If you are comparing specific products, see our roundup of <a href="/blog/best-free-invoicing-software">free invoicing software</a> and our <a href="/blog/freshbooks-vs-quickbooks">FreshBooks vs QuickBooks</a> comparison.</p>

<h2>Start with a free invoice generator</h2>
<p>If you mainly need to bill clients, the fastest choice is to start simple. Open the <a href="/invoice-generator">invoice generator</a>, choose a template such as <a href="/invoice-templates/modern">Modern</a>, and download your first invoice in minutes. You can always move to accounting software when the business demands it.</p>
`,
  },
  {
    slug: "cash-vs-accrual-accounting",
    title: "Cash vs Accrual Accounting: Differences, Examples and Rules",
    description:
      "Cash vs accrual accounting explained with a worked example: how each method records invoices and bills, pros and cons, and which businesses can use cash.",
    category: "comparisons",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "double-entry-bookkeeping",
      "balance-sheet-small-business",
      "revenue-recognition-asc-606",
      "bookkeeping-basics",
      "accounts-receivable-guide",
      "cash-flow-management",
    ],
    faqs: [
      {
        q: "What is the main difference between cash and accrual accounting?",
        a: "Timing. Cash accounting records income when money is received and expenses when they are paid. Accrual accounting records income when it is earned and expenses when they are incurred, regardless of when cash moves.",
      },
      {
        q: "Which is better for a small business, cash or accrual?",
        a: "Cash accounting is simpler and shows the money you actually have, so many sole proprietors and freelancers use it. Accrual gives a more accurate picture of profitability and is usually required for larger businesses or those reporting to lenders and investors.",
      },
      {
        q: "Do unpaid invoices count as income under cash accounting?",
        a: "No. Under the cash method, an invoice becomes income only when the client pays it. Under accrual accounting it is recorded as revenue and a receivable when it is issued for work already done.",
      },
      {
        q: "Can I switch from cash to accrual accounting?",
        a: "Usually yes, but changing method can have tax consequences and may need tax authority approval or a specific form. In the US, for example, a change of accounting method generally involves IRS procedures, so speak to an accountant first.",
      },
      {
        q: "Is the cash basis the default for UK sole traders?",
        a: "From the 2024 to 2025 tax year, HMRC made the cash basis the default for most self-employed individuals and partnerships, with an option to elect for accrual (traditional) accounting. Check current HMRC guidance for your situation.",
      },
      {
        q: "What is the modified cash basis?",
        a: "The modified cash basis, or hybrid method, records most income and expenses when cash moves but treats some items on an accrual basis, such as long-term assets, loans or inventory. It is often used for internal reporting by small businesses that want simplicity with a more realistic balance sheet. Tax authorities have their own rules on hybrid methods, so check them before using one for taxes.",
      },
      {
        q: "Does GAAP require accrual accounting?",
        a: "Yes. Financial statements prepared under US GAAP, and under IFRS in most other countries, must use the accrual basis. That is why lenders, investors and auditors usually expect accrual-based statements. A small business can still use the cash method for its own bookkeeping or taxes where allowed, but may need accrual statements when raising finance or being audited.",
      },
      {
        q: "Can I use cash accounting for taxes and accrual for management reports?",
        a: "Often yes, where tax rules allow the cash method for your business. Many companies keep accrual-based books for management and lenders and make adjustments to calculate taxable income on a cash basis. This needs careful reconciliation, so it is usually done with accounting software and an accountant. Very small businesses often find one method simpler.",
      },
      {
        q: "What is the difference between accrued revenue and deferred revenue?",
        a: "Accrued revenue is income you have earned but not yet invoiced or been paid for, such as work completed at month end. Deferred revenue is money received before you have earned it, such as a deposit or annual subscription paid upfront, recorded as a liability until you deliver. Both exist only under accrual accounting; cash accounting simply records money when it arrives.",
      },
      {
        q: "How is the UK VAT cash accounting scheme different from the cash basis?",
        a: "They are separate. The cash basis is about income tax for the self-employed. The VAT Cash Accounting Scheme lets VAT-registered businesses with estimated taxable turnover up to £1.35 million pay VAT when customers pay them, rather than when they invoice. You can use one without the other. Check current eligibility rules on GOV.UK before joining or leaving the scheme.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Cash vs accrual accounting is a question of timing. The cash method records income when money arrives and expenses when you pay them. The accrual method records income when you earn it (usually when you invoice) and expenses when you incur them, even if no cash has moved. Cash is simpler; accrual shows true profitability.</p>

<p>Below we compare the two methods side by side, run the same two months of invoices and bills through both, and summarize the general rules on who can use which. Whichever method you choose, it starts with accurate invoices: our <a href="/invoice-generator">invoice generator</a> gives every invoice a clear issue date and due date, which is exactly the information both methods depend on.</p>

<p><em>This is general information, not tax or accounting advice. Rules differ by country and change over time, so confirm your method with your tax authority or an accountant.</em></p>

<h2>What is cash accounting?</h2>
<p>Under cash-basis accounting you record a transaction only when money changes hands. A client pays your invoice on 10 April, so the income belongs to April, even if you did the work in March. You pay your supplier on 5 May, so that expense belongs to May.</p>
<p>The appeal is obvious: your books mirror your bank account, there is nothing to estimate, and for many self-employed people you pay income tax only on money you have actually received. The downside is that a busy month of invoicing can look like a bad month on paper if clients pay late.</p>

<h2>What is accrual accounting?</h2>
<p>Under accrual-basis accounting you record revenue when it is earned and expenses when they are incurred. Issuing an invoice for completed work creates revenue and an <a href="/blog/accounts-receivable-guide">accounts receivable</a> balance immediately. Receiving a supplier's bill creates an expense and an accounts payable balance, even before you pay it, the buyer-side document explained in <a href="/blog/invoice-vs-bill">invoice vs bill</a>.</p>
<p>Accrual matches income with the costs of earning it in the same period, so it gives a more accurate view of profit. It is also the basis of most formal financial statements. The trade-off is more bookkeeping and the need to track receivables and payables carefully.</p>

<h2>Cash vs accrual accounting: side-by-side comparison</h2>
<table><thead><tr><th>Factor</th><th>Cash method</th><th>Accrual method</th></tr></thead><tbody>
<tr><td>Income recorded</td><td>When payment is received</td><td>When earned, typically when invoiced</td></tr>
<tr><td>Expenses recorded</td><td>When paid</td><td>When incurred, typically when the bill is received</td></tr>
<tr><td>Tracks receivables and payables</td><td>Not in the main books</td><td>Yes</td></tr>
<tr><td>Complexity</td><td>Low</td><td>Moderate</td></tr>
<tr><td>Shows cash on hand</td><td>Closely</td><td>Not directly; needs a cash flow statement</td></tr>
<tr><td>Shows true profitability</td><td>Can be distorted by payment timing</td><td>Yes, income matched to related costs</td></tr>
<tr><td>Tax timing</td><td>Taxed on cash received</td><td>Can be taxed on invoiced income not yet collected</td></tr>
<tr><td>Typical users</td><td>Sole proprietors, freelancers, small service businesses</td><td>Larger companies, businesses with inventory, those reporting to lenders or investors</td></tr>
</tbody></table>

<h2>Worked example: the same two months, two methods</h2>
<p>A small design studio has the following activity in March and April 2026:</p>
<ul>
<li>Invoice A: $5,000, issued in March, paid in March</li>
<li>Invoice B: $7,000, issued in March, paid in April</li>
<li>Rent: $3,000, billed and paid in March</li>
<li>Printing supplies: $1,200, billed in March, paid in April</li>
</ul>
<table><thead><tr><th>Line</th><th>Cash: March</th><th>Cash: April</th><th>Accrual: March</th><th>Accrual: April</th></tr></thead><tbody>
<tr><td>Income</td><td>$5,000</td><td>$7,000</td><td>$12,000</td><td>$0</td></tr>
<tr><td>Expenses</td><td>$3,000</td><td>$1,200</td><td>$4,200</td><td>$0</td></tr>
<tr><td><strong>Profit</strong></td><td><strong>$2,000</strong></td><td><strong>$5,800</strong></td><td><strong>$7,800</strong></td><td><strong>$0</strong></td></tr>
</tbody></table>
<p>Under cash accounting, March profit is $5,000 − $3,000 = $2,000 and April profit is $7,000 − $1,200 = $5,800. Under accrual accounting, all $12,000 of income and $4,200 of expenses belong to March because that is when the work was invoiced and the costs were incurred, so March profit is $7,800 and April is $0.</p>
<p>Over the two months, both methods arrive at the same total: $2,000 + $5,800 = $7,800. The method changes <em>when</em> profit is recognized, not <em>how much</em> profit there is overall. That timing still matters, though: it affects which tax year income falls into and how healthy any single month looks.</p>
<p>At the end of March, the accrual books also show $7,000 owed by clients (accounts receivable) and $1,200 owed to suppliers (accounts payable). The cash books show neither, which is why cash-basis businesses should still keep an unpaid-invoice list.</p>

<h2>Pros and cons of each method</h2>
<h3>Cash method</h3>
<ul>
<li><strong>Pro:</strong> Simple to run, even from a bank statement and a folder of invoices.</li>
<li><strong>Pro:</strong> You generally aren't taxed on income you haven't received.</li>
<li><strong>Con:</strong> Profit swings with payment timing, which makes trends hard to read.</li>
<li><strong>Con:</strong> Can hide large unpaid receivables or unpaid bills.</li>
</ul>
<h3>Accrual method</h3>
<ul>
<li><strong>Pro:</strong> Matches income and costs, so margins are accurate month to month.</li>
<li><strong>Pro:</strong> Expected by banks, investors and buyers of a business.</li>
<li><strong>Con:</strong> More bookkeeping, often needing accounting software.</li>
<li><strong>Con:</strong> You may owe tax on invoices clients haven't paid yet.</li>
</ul>

<h2>Who can use the cash method?</h2>
<p>Rules vary, and the summaries below are general:</p>
<ul>
<li><strong>United States:</strong> Many small businesses can use the cash method. Corporations and partnerships with a corporate partner generally can only do so if their average annual gross receipts are at or below an inflation-adjusted threshold (around $30 million in recent years), and there are special rules for inventory and tax shelters. Check the current IRS figures and rules. US billers can use our <a href="/invoice-generator/usa">USA invoice generator</a>.</li>
<li><strong>United Kingdom:</strong> From the 2024 to 2025 tax year, the cash basis became the default for most self-employed individuals and partnerships, who can opt out to use accrual accounting. Limited companies generally prepare accrual-basis accounts. See also our <a href="/blog/sole-trader-invoice-uk">guide to invoicing as a UK sole trader</a> and the <a href="/invoice-generator/uk">UK invoice generator</a>.</li>
<li><strong>VAT and sales tax:</strong> Some tax regimes have their own cash accounting schemes that are separate from your income tax method. Don't assume the two are linked.</li>
</ul>

<h2>How to choose a method for your business</h2>
<ol>
<li><strong>Check eligibility.</strong> Confirm which methods your business type and size allow.</li>
<li><strong>Consider your payment terms.</strong> If clients routinely pay on Net 30 to Net 60 (see <a href="/blog/invoice-payment-terms">invoice payment terms</a>), the gap between the methods grows.</li>
<li><strong>Think about who reads your accounts.</strong> Lenders and investors usually want accrual figures.</li>
<li><strong>Consider inventory.</strong> Holding stock often pushes businesses toward accrual.</li>
<li><strong>Ask an accountant.</strong> Changing method later can be complicated, so get advice before your first tax return.</li>
</ol>
<p>Whichever you pick, keep an eye on cash separately. Profitable accrual-basis businesses can still run short of money, which is why <a href="/blog/cash-flow-management">cash flow management</a> deserves its own routine, and our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> guide shows how to record transactions under either method.</p>

<h2>How deposits, credit notes and unpaid invoices are treated</h2>
<p>Everyday invoicing situations show the difference between the methods clearly:</p>
<ul>
<li><strong>Deposits received in advance.</strong> Under the cash method, a deposit is generally income when it is received. Under accrual, an advance payment for work not yet done is usually recorded as a liability (deferred or unearned revenue) and becomes revenue as the work is delivered.</li>
<li><strong>Credit notes.</strong> Under accrual, a credit note reduces revenue and accounts receivable in the period it is issued. Under the cash method, it only affects your books if it changes what the customer actually pays or results in a refund.</li>
<li><strong>Invoices that are never paid.</strong> Under the cash method, an unpaid invoice was never counted as income, so there is nothing to write off for income tax purposes. Under accrual, the revenue was already recorded, so a bad debt usually needs to be written off, and whether that is deductible depends on local rules.</li>
<li><strong>Prepaid expenses.</strong> Paying a 12-month software plan of $600 upfront is a $600 expense in the month paid under the cash method. Under accrual, it is typically spread at $50 per month over the year the service covers.</li>
<li><strong>Year-end timing.</strong> On the cash basis, a client paying on 2 January instead of 30 December moves that income into the next tax year. On the accrual basis, the invoice date decides the year.</li>
</ul>
<p>These differences are why many freelancers start with the cash method and why businesses with deposits, subscriptions or long projects often find accrual reports more meaningful. Your accountant can confirm the right treatment for your situation.</p>

<h2>Create dated, accurate invoices now</h2>
<p>Both methods rely on invoices with correct dates and amounts. Use the <a href="/invoice-generator">free invoice generator</a> to set a clear issue date, due date and total, then download a PDF using the <a href="/invoice-templates/classic">Classic invoice template</a> for a clean, accountant-friendly layout.</p>
`,
  },
  {
    slug: "invoice-factoring",
    title: "Invoice Factoring: How It Works, Costs and vs Invoice Financing",
    description:
      "Invoice factoring explained: how advances, fees and rebates work, a worked cost calculation, recourse vs non-recourse, and how it compares with financing.",
    category: "business-finance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "b2b-buy-now-pay-later",
      "cash-flow-management",
      "accounts-receivable-guide",
      "early-payment-discount",
    ],
    faqs: [
      {
        q: "What is the difference between invoice factoring and invoice financing?",
        a: "With factoring you sell your invoices to a factoring company, which usually collects payment from your customers. With invoice financing you borrow against your invoices and keep collecting from customers yourself, repaying the lender when they pay.",
      },
      {
        q: "Will my customers know I am factoring invoices?",
        a: "Usually, yes. In most factoring arrangements customers are told to pay the factoring company directly. Some providers offer confidential arrangements, which are typically closer to invoice financing.",
      },
      {
        q: "What is recourse factoring?",
        a: "In recourse factoring you must buy back or replace an invoice if the customer doesn't pay. In non-recourse factoring the factor bears the risk of customer insolvency, usually for a higher fee and only under conditions set out in the contract.",
      },
      {
        q: "Is invoice factoring a loan?",
        a: "Factoring is generally structured as a sale of receivables rather than a loan, while invoice financing is a form of borrowing secured on receivables. The accounting and tax treatment can differ, so ask your accountant how it affects your books.",
      },
      {
        q: "How can I avoid needing invoice factoring?",
        a: "Shorten payment terms, invoice immediately, take deposits on large jobs, offer early payment discounts and follow up promptly on overdue invoices. These steps reduce the cash gap that factoring is designed to fill.",
      },
      {
        q: "What is the difference between spot factoring and whole-ledger factoring?",
        a: "Spot factoring, also called single-invoice factoring, lets you sell individual invoices when you need cash, with no long-term commitment, usually at a higher fee per invoice. Whole-ledger factoring means you sell all or most of your receivables under an ongoing contract, typically at lower rates but with minimum volumes and notice periods. Choose based on how often you need funding.",
      },
      {
        q: "Can a new business or one with poor credit use invoice factoring?",
        a: "Often yes, because factoring companies focus mainly on the creditworthiness of your customers, who will pay the invoices, rather than on your own credit history. A startup invoicing large, reliable business customers may qualify more easily than for a bank loan. Expect the factor to check your customers, your invoices and your contracts before approving.",
      },
      {
        q: "Can I factor invoices to consumers?",
        a: "Generally no. Factoring is designed for B2B invoices, where the customer is a business with a credit history the factor can assess and collect from. Consumer debts bring stricter consumer credit and collection rules and higher risk, so most factoring companies do not buy them. If most of your sales are to consumers, consider other funding options.",
      },
      {
        q: "What is reverse factoring?",
        a: "Reverse factoring, also called supply chain finance, is set up by a large buyer rather than the supplier. A finance provider pays the supplier's approved invoices early, at a cost based on the buyer's credit rating, and the buyer pays the provider on the normal due date. If a big customer offers it, compare its cost with your own factoring options.",
      },
      {
        q: "Does invoice factoring show up on my credit record?",
        a: "Factoring is usually structured as a sale of receivables, not a loan, so it does not appear as debt in the same way. However, factors often register a security interest over your receivables, such as a UCC filing in the US, which other lenders can see. That can limit future borrowing, so read the agreement carefully and ask how and when the filing is released.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Invoice factoring is when a business sells its unpaid invoices to a factoring company for an immediate cash advance, typically a large share of the invoice value. The factor collects payment from the customer, then pays the business the remaining balance minus its fees. It turns slow-paying receivables into cash within days, at a cost.</p>

<p>This guide explains how invoice factoring works step by step, works through a full cost calculation, compares factoring with invoice financing in a table, and covers the alternatives worth trying first. Factoring only works with clean, verifiable invoices, so start with a professional invoice from our <a href="/invoice-generator">free invoice generator</a> and clear <a href="/blog/invoice-payment-terms">payment terms</a>.</p>

<p><em>This article is general information, not financial advice. Factoring contracts vary widely; read every term and consider independent advice before signing.</em></p>

<h2>How invoice factoring works</h2>
<ol>
<li><strong>You invoice your customer</strong> as normal for goods or services already delivered.</li>
<li><strong>You submit the invoice to the factor</strong>, along with supporting documents such as proof of delivery or a signed timesheet. Carriers, for example, attach the signed bill of lading to their <a href="/blog/trucking-invoice-template">trucking invoices</a>.</li>
<li><strong>The factor verifies the invoice</strong>, often contacting the customer to confirm the amount is owed.</li>
<li><strong>You receive an advance</strong>, a percentage of the invoice value (the advance rate), usually within a few days.</li>
<li><strong>The customer pays the factor</strong> directly, using payment details shown on the invoice.</li>
<li><strong>The factor pays you the rebate</strong>: the invoice value minus the advance and the factor's fees.</li>
</ol>
<p>Because the factor's money depends on your customer paying, factors care more about your customers' creditworthiness than about yours. That is why factoring is used by young or fast-growing businesses that sell to large, reliable customers on long terms.</p>

<h2>Invoice factoring vs invoice financing</h2>
<p>The two terms are often mixed up. Factoring is a sale of the invoice; invoice financing (sometimes called invoice discounting or accounts receivable financing) is borrowing secured against it.</p>
<table><thead><tr><th>Feature</th><th>Invoice factoring</th><th>Invoice financing</th></tr></thead><tbody>
<tr><td>What happens to the invoice</td><td>Sold to the factor</td><td>Used as security for a loan or credit line</td></tr>
<tr><td>Who collects from customers</td><td>Usually the factor</td><td>You do</td></tr>
<tr><td>Customer awareness</td><td>Usually notified</td><td>Often confidential</td></tr>
<tr><td>How you get paid</td><td>Advance, then rebate after customer pays</td><td>Loan drawn against invoices, repaid when customers pay</td></tr>
<tr><td>Typical cost structure</td><td>Factor fee per period the invoice is outstanding, plus possible service fees</td><td>Interest or a fee on the amount borrowed, plus possible service fees</td></tr>
<tr><td>Credit control workload</td><td>Reduced: outsourced to factor</td><td>Unchanged: stays with you</td></tr>
<tr><td>Often suits</td><td>Businesses without a credit control team</td><td>Established businesses with good collection processes</td></tr>
</tbody></table>

<h2>Worked example: what factoring really costs</h2>
<p>The figures below are illustrative, not market rates. Always use the numbers in the offer you receive.</p>
<p>You issue a $20,000 invoice on Net 60 terms. A factor offers an 85% advance rate and a fee of 2% of the invoice value for each 30 days (or part of 30 days) the invoice is outstanding. Your customer pays on day 45.</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Invoice value</td><td>—</td><td>$20,000</td></tr>
<tr><td>Advance paid to you</td><td>$20,000 × 85%</td><td>$17,000</td></tr>
<tr><td>Fee periods</td><td>45 days = one full 30-day period plus a part period</td><td>2 periods</td></tr>
<tr><td>Factor fee</td><td>$20,000 × 2% × 2</td><td>$800</td></tr>
<tr><td>Rebate paid after customer pays</td><td>$20,000 − $17,000 − $800</td><td>$2,200</td></tr>
<tr><td>Total you receive</td><td>$17,000 + $2,200</td><td>$19,200</td></tr>
</tbody></table>
<p>The headline fee is 4% of the invoice, but the true cost is higher once you consider how much money you actually used and for how long. You paid $800 to receive $17,000 about 45 days early:</p>
<ul>
<li>Cost relative to cash advanced: $800 ÷ $17,000 = 4.71% for 45 days</li>
<li>Rough annualized cost: 4.71% × (365 ÷ 45) ≈ 38% per year</li>
</ul>
<p>Notice the effect of the "part period" rule: if the customer had paid on day 30, you would have paid one period ($400), but paying on day 31 doubles it. Fee schedules, minimum fees and extra charges (setup, verification, bank transfer or termination fees) can change the result a lot, so model your own worst case (a customer paying late) before you commit.</p>

<h2>Recourse vs non-recourse factoring</h2>
<ul>
<li><strong>Recourse factoring:</strong> if the customer doesn't pay within an agreed period, you must repay the advance or swap in another invoice. Fees are usually lower because you keep the credit risk.</li>
<li><strong>Non-recourse factoring:</strong> the factor absorbs the loss if the customer becomes insolvent. Fees are usually higher, and "non-recourse" often covers only specific events, not disputes about the quality of your work. Read the definitions carefully.</li>
</ul>

<h2>Pros and cons of invoice factoring</h2>
<h3>Advantages</h3>
<ul>
<li>Fast cash tied to sales you have already made</li>
<li>Approval based mainly on your customers' credit, not your trading history</li>
<li>Funding grows as your invoicing grows</li>
<li>Collections can be outsourced</li>
</ul>
<h3>Disadvantages</h3>
<ul>
<li>Expensive compared with most bank credit when annualized</li>
<li>Customers deal with a third party, which can affect relationships</li>
<li>Contracts may require you to factor all invoices, set minimum volumes or impose notice periods</li>
<li>Disputed invoices can be charged back to you</li>
</ul>

<h2>Is your invoice ready to be factored?</h2>
<p>Factors reject invoices that are vague, disputed or hard to verify. Before submitting, check that each invoice:</p>
<ul>
<li>Has a unique number in a clean sequence: use our <a href="/tools/invoice-number-generator">invoice number generator</a> if your numbering is messy</li>
<li>Names the customer's correct legal entity and quotes any PO number</li>
<li>Describes delivered goods or completed services, not future work</li>
<li>Shows a clear due date and the correct payment details (often the factor's account, as instructed)</li>
<li>Matches your contract and delivery records</li>
</ul>
<p>A formal layout such as the <a href="/invoice-templates/corporate">Corporate invoice template</a> makes verification easier for both the factor and your customer.</p>

<h2>Alternatives to try before factoring</h2>
<p>Factoring fills a gap between delivering work and getting paid. Often you can shrink that gap more cheaply:</p>
<ul>
<li><strong>Invoice the same day</strong> work is approved and follow the tactics in <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</li>
<li><strong>Offer an early payment discount.</strong> A 2/10 net 30 discount costs you 2%; see our guide to the <a href="/blog/early-payment-discount">early payment discount</a> to compare its implied cost with a factoring offer.</li>
<li><strong>Take deposits or milestone payments</strong> on large jobs with a <a href="/blog/deposit-invoice">deposit invoice</a>.</li>
<li><strong>Enforce agreed late fees</strong> where your contract and local law allow. See <a href="/blog/late-payment-fees">late payment fees</a>.</li>
<li><strong>Tighten receivables management</strong> with a weekly review, explained in our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a>.</li>
</ul>
<p>If you still need funding, factoring can be a sensible bridge. Treat it as one tool within broader <a href="/blog/cash-flow-management">cash flow management</a>, not a permanent fix.</p>

<h2>Questions to ask before signing a factoring agreement</h2>
<ol>
<li><strong>What is the advance rate</strong>, and does it vary by customer?</li>
<li><strong>How is the fee calculated</strong>: per day, per 10 days or per 30-day period, and on the invoice value or on the advance?</li>
<li><strong>What other fees apply?</strong> Ask about setup, due diligence, credit checks, bank transfers, minimum monthly volume and early termination.</li>
<li><strong>Is it recourse or non-recourse</strong>, and exactly which events does any non-recourse cover?</li>
<li><strong>Must you factor every invoice</strong>, or can you choose individual invoices (sometimes called spot or selective factoring)?</li>
<li><strong>How long is the contract</strong> and what notice is required to leave?</li>
<li><strong>How will the factor contact your customers</strong>, and can you review the wording of their communications?</li>
<li><strong>What happens with disputed invoices</strong> and how quickly are they charged back?</li>
</ol>
<p>Then compare the answers with the price of offering customers an early payment discount. A 2/10 net 30 discount gives up 2% to be paid 20 days earlier; on the $98 you actually receive for every $100 invoiced, the implied cost is 2 ÷ 98 × (365 ÷ 20) ≈ 37% a year. That is close to the factoring example above, but it involves no contract, no third party and no customer notification. Depending on your customers and margins, either option could be cheaper, so run both calculations with your real numbers.</p>

<h2>Create a factor-ready invoice now</h2>
<p>Whether or not you decide on invoice factoring, verifiable invoices get funded and paid faster. Open the <a href="/invoice-generator">invoice generator</a>, add a clear due date and payment details, and download a PDF using a professional layout such as the <a href="/invoice-templates/slate">Slate invoice template</a>.</p>
`,
  },
  {
    slug: "accounts-receivable-guide",
    title: "Accounts Receivable: What It Is, How It Works and Key Metrics",
    description:
      "Accounts receivable explained for small businesses: how AR works, the journal entries, a step-by-step AR process, and how to calculate DSO and AR turnover.",
    category: "business-finance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "accounts-receivable-turnover-ratio",
      "accounts-receivable-aging-report",
      "invoice-payment-terms",
      "cash-flow-management",
    ],
    faqs: [
      {
        q: "Is accounts receivable an asset?",
        a: "Yes. Accounts receivable is money customers owe you for goods or services already delivered, so it is recorded as a current asset on the balance sheet, typically expected to be collected within a year.",
      },
      {
        q: "What is the difference between accounts receivable and accounts payable?",
        a: "Accounts receivable is money owed to your business by customers. Accounts payable is money your business owes to suppliers. One customer's payable is the supplier's receivable.",
      },
      {
        q: "What is a good DSO?",
        a: "There is no universal number. A useful benchmark is your own payment terms: if you offer Net 30 and your DSO is close to 30 days, customers are broadly paying on time. A DSO well above your terms signals a collection problem.",
      },
      {
        q: "Do I need to track accounts receivable if I use cash accounting?",
        a: "Yes, in practice. Cash-basis books don't record receivables, but you still need a list of unpaid invoices to chase payments and forecast cash.",
      },
      {
        q: "What happens to receivables that are never paid?",
        a: "After reasonable collection efforts, an uncollectible invoice is usually written off as a bad debt. Whether it is deductible for tax depends on your accounting method and local rules, so ask your accountant.",
      },
      {
        q: "What is the difference between accounts receivable and revenue?",
        a: "Revenue is the income you have earned in a period. Accounts receivable is the part of that income customers have not yet paid. Under accrual accounting, an invoice for completed work increases both revenue and accounts receivable; when the customer pays, receivables fall and cash rises, while revenue stays the same. High revenue with growing receivables can hide a cash shortage.",
      },
      {
        q: "What is the difference between accounts receivable and notes receivable?",
        a: "Accounts receivable are informal amounts owed on normal credit terms, usually due within weeks. Notes receivable are backed by a written promissory note, often for larger amounts or longer periods, and may carry interest. A business sometimes converts an overdue customer account into a note receivable as part of a payment plan. Both are assets on the balance sheet.",
      },
      {
        q: "What are unbilled receivables?",
        a: "Unbilled receivables are amounts you have earned for work performed but not yet invoiced, such as hours worked on a project before the next billing milestone. Under accrual accounting they are recorded as an asset until you issue the invoice, when they become ordinary receivables. Large unbilled balances often mean you should invoice more frequently to speed up cash flow.",
      },
      {
        q: "Is accounts receivable part of working capital?",
        a: "Yes. Working capital is current assets minus current liabilities, and receivables are usually one of the largest current assets for service businesses. Higher receivables increase working capital on paper, but that money is not usable until customers pay. That is why lenders look closely at the age and quality of receivables, not just the total.",
      },
      {
        q: "What is a credit policy and do I need one?",
        a: "A credit policy sets out who can buy from you on credit, how much, on what payment terms, and what happens when invoices are late, such as reminders, late fees or stopping work. Even a one-page policy helps a small business apply rules consistently and avoid letting risky customers build large balances. Make sure late fees are allowed under your contracts and local law.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Accounts receivable (AR) is the money customers owe your business for goods or services you have delivered but not yet been paid for. Every unpaid invoice is part of your accounts receivable. AR is recorded as a current asset, and managing it well means invoicing promptly, tracking due dates and collecting on time.</p>

<p>This guide explains how accounts receivable works, shows the bookkeeping entries, lays out a repeatable AR process and walks through the two metrics that tell you whether it is healthy. Good AR starts with a clear invoice: our <a href="/invoice-generator">free invoice generator</a> puts the invoice number, due date and payment details where your customers' finance team expects them.</p>

<h2>What is accounts receivable?</h2>
<p>When you sell on credit (deliver now, get paid later), you create a receivable. A freelancer who finishes a project and sends an invoice on Net 30 terms has a receivable for the next 30 days. A wholesaler with 50 customers on account may have hundreds of open receivables at any time.</p>
<p>Receivables are valuable: they represent revenue you have earned. But they are not cash. A business can be profitable on paper and still struggle to pay its bills if too much money is tied up in unpaid invoices. That gap is what AR management is designed to close.</p>
<p>On the balance sheet, accounts receivable usually appears among current assets, next to cash. Lenders often look at it closely, because the size and age of your receivables show how reliably your sales turn into money. A large AR balance made up mostly of recent, not-yet-due invoices is a good sign; the same balance made up of invoices several months overdue is a risk.</p>

<h2>Accounts receivable vs accounts payable</h2>
<table><thead><tr><th>Feature</th><th>Accounts receivable</th><th>Accounts payable</th></tr></thead><tbody>
<tr><td>Definition</td><td>Money owed to you by customers</td><td>Money you owe to suppliers</td></tr>
<tr><td>Created by</td><td>Invoices you send</td><td>Bills you receive</td></tr>
<tr><td>Balance sheet</td><td>Current asset</td><td>Current liability</td></tr>
<tr><td>Goal</td><td>Collect as quickly as terms allow</td><td>Pay on time, not necessarily early</td></tr>
<tr><td>Key report</td><td>AR aging report</td><td>AP aging report</td></tr>
</tbody></table>
<p>The same transaction sits on both sides: your invoice is your customer's bill. See <a href="/blog/invoice-vs-bill">invoice vs bill</a> for how the terminology works.</p>

<h2>How accounts receivable is recorded</h2>
<p>Under accrual accounting, a receivable is recorded when you invoice. Here is a $2,400 invoice for consulting work, paid in full 25 days later:</p>
<table><thead><tr><th>Date</th><th>Event</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>1 Oct 2026</td><td>Invoice INV-2026-0118 issued</td><td>Accounts receivable $2,400</td><td>Revenue $2,400</td></tr>
<tr><td>26 Oct 2026</td><td>Customer pays by bank transfer</td><td>Bank $2,400</td><td>Accounts receivable $2,400</td></tr>
</tbody></table>
<p>After the payment, the receivable for that invoice is back to zero. If you later reduce an invoice because of a pricing error or returned goods, you issue a <a href="/blog/credit-note-guide">credit note</a>, which reduces both revenue and AR. If you use the cash method instead, revenue is recorded only on 26 October. Our comparison of cash vs accrual accounting shows the difference with a worked example.</p>

<h2>The accounts receivable process, step by step</h2>
<ol>
<li><strong>Set credit terms before work starts.</strong> Agree due dates, deposits and late fees in your quote or contract. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains Net 15, Net 30 and the alternatives.</li>
<li><strong>Invoice immediately.</strong> Send the invoice the day work is delivered or approved. Every day of delay adds a day to collection.</li>
<li><strong>Make invoices easy to approve.</strong> Use a unique number from our <a href="/tools/invoice-number-generator">invoice number generator</a>, the client's PO number, itemized lines and a real due date.</li>
<li><strong>Make invoices easy to pay.</strong> Include bank details or a payment link on the invoice itself.</li>
<li><strong>Record every invoice.</strong> Log it in your accounting software or a sales ledger the day it is sent.</li>
<li><strong>Send reminders on a schedule.</strong> A friendly note before the due date and firmer follow-ups after it. Our <a href="/blog/payment-reminder-emails">payment reminder email templates</a> are ready to copy.</li>
<li><strong>Apply payments promptly.</strong> Match each payment to the right invoice so your AR balance stays accurate.</li>
<li><strong>Review aging weekly.</strong> Run an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> to see what is overdue and by how long.</li>
<li><strong>Escalate when needed.</strong> Follow a clear process for an <a href="/blog/overdue-invoice">overdue invoice</a>, and consider collections only as a last resort.</li>
</ol>

<h2>Key accounts receivable metrics</h2>
<h3>Days sales outstanding (DSO)</h3>
<p>DSO estimates the average number of days it takes to collect payment after a sale. The common formula is:</p>
<p><code>DSO = (accounts receivable ÷ credit sales for the period) × number of days in the period</code></p>
<p><strong>Worked example:</strong> At the end of a 90-day quarter, a business has $45,000 in accounts receivable. Credit sales during the quarter were $135,000.</p>
<ul>
<li>$45,000 ÷ $135,000 = 0.3333</li>
<li>0.3333 × 90 days = 30 days</li>
</ul>
<p>A DSO of 30 days on Net 30 terms means customers are, on average, paying roughly on time. If DSO rose to 45 days next quarter while terms stayed at Net 30, collections would be slipping.</p>

<h3>Accounts receivable turnover</h3>
<p>AR turnover measures how many times a year you collect your average receivables balance:</p>
<p><code>AR turnover = annual credit sales ÷ average accounts receivable</code></p>
<p><strong>Worked example:</strong> Annual credit sales are $540,000. AR was $40,000 at the start of the year and $50,000 at the end, so average AR is ($40,000 + $50,000) ÷ 2 = $45,000.</p>
<ul>
<li>AR turnover = $540,000 ÷ $45,000 = 12 times a year</li>
<li>Average collection period = 365 ÷ 12 ≈ 30.4 days</li>
</ul>
<p>Higher turnover means faster collection. Track the trend over time rather than fixating on one figure, because seasonal sales can distort a single period.</p>

<h2>How to improve accounts receivable</h2>
<ul>
<li><strong>Shorten terms where you can.</strong> Net 14 instead of Net 30 for small clients often works fine.</li>
<li><strong>Take deposits</strong> on large or custom work, so less of the job sits in AR.</li>
<li><strong>Use early payment incentives</strong> selectively; compare the cost with what late payment costs you.</li>
<li><strong>Send statements</strong> to clients with several open invoices so they can pay them together.</li>
<li><strong>Apply agreed late fees consistently</strong>, where your contract and local law permit.</li>
<li><strong>Know your funding options.</strong> If AR is growing faster than cash, <a href="/blog/invoice-factoring">invoice factoring</a> or financing can bridge the gap at a cost.</li>
</ul>
<p>Strong AR habits are the backbone of <a href="/blog/cash-flow-management">cash flow management</a>, because collections are usually a small business's largest source of incoming cash.</p>

<h2>Bad debts and write-offs</h2>
<p>Sometimes an invoice is never paid. After reasonable efforts (reminders, calls, a final notice and perhaps a collections agency), you may decide the amount is uncollectible and write it off as a bad debt. Accrual-basis businesses often keep an allowance for doubtful accounts, estimated from the aging report, so expected losses show up before they happen. Tax treatment of bad debts depends on your accounting method and jurisdiction, so check with an accountant before claiming a deduction.</p>

<h2>Accounts receivable mistakes to avoid</h2>
<ul>
<li><strong>Treating receivables as cash.</strong> Revenue on paper does not pay wages. Plan spending around expected collection dates, not invoice dates.</li>
<li><strong>Vague due dates.</strong> "Due on receipt" or "Net 30" alone invites delays. State the calendar date the payment is due.</li>
<li><strong>No owner for collections.</strong> In small teams, chasing invoices falls between the cracks. Assign one person and a weekly time slot.</li>
<li><strong>Letting one customer dominate.</strong> If a single client accounts for a large share of your AR, a late payment from them can create a cash crisis. Consider deposits or shorter terms for big accounts.</li>
<li><strong>Unapplied payments and credits.</strong> Payments that aren't matched to invoices make customers look overdue when they aren't, which leads to awkward reminders.</li>
<li><strong>Extending more credit to slow payers.</strong> Before starting new work for a client with overdue invoices, agree how the old balance will be cleared.</li>
<li><strong>Waiting too long to escalate.</strong> The older an invoice gets, the harder it usually is to collect. A clear timeline (reminder, call, final notice) keeps you consistent and fair.</li>
</ul>
<p>Most of these problems are prevented by a disciplined routine: invoice immediately, record everything, review weekly and follow up on schedule. None of it requires expensive tools, just consistency.</p>

<p>To measure how quickly customers actually pay, track <a href="/blog/days-sales-outstanding">days sales outstanding (DSO)</a>. If the terms still feel muddled, our explainer on <a href="/blog/accounts-payable-vs-accounts-receivable">accounts payable vs accounts receivable</a> sets out the difference.</p>

<h2>Send invoices that are easy to collect</h2>
<p>Healthy accounts receivable starts with invoices that are clear, accurate and easy to pay. Create yours in the <a href="/invoice-generator">invoice generator</a> and pick a clean layout such as the <a href="/invoice-templates/slate">Slate invoice template</a> so the due date and amount stand out.</p>
`,
  },
  {
    slug: "accounts-receivable-aging-report",
    title: "Accounts Receivable Aging Report: How to Create and Read One",
    description:
      "Learn how to build an accounts receivable aging report with a worked example, aging buckets, an allowance for bad debts and the action to take per bucket.",
    category: "business-finance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: ["accounts-receivable-guide", "overdue-invoice", "invoice-collections"],
    faqs: [
      {
        q: "What are the standard aging buckets?",
        a: "Most aging reports use current (not yet due), 1 to 30 days past due, 31 to 60 days, 61 to 90 days and over 90 days. Some businesses add a 91 to 120 bucket or use different ranges to match their payment terms.",
      },
      {
        q: "Should invoices be aged from the invoice date or the due date?",
        a: "Either works if you are consistent, but aging from the due date shows how overdue each invoice is, which is usually more useful for collections. Aging from the invoice date shows how long the money has been outstanding in total.",
      },
      {
        q: "How often should I run an aging report?",
        a: "Weekly is a good habit for small businesses with regular invoicing, and at minimum monthly as part of closing your books.",
      },
      {
        q: "Can I make an aging report in a spreadsheet?",
        a: "Yes. List each unpaid invoice with its due date and balance, calculate days past due against a report date, and use formulas to place each balance in the correct bucket. Then total by customer and by bucket.",
      },
      {
        q: "What is an allowance for doubtful accounts?",
        a: "It is an estimate of receivables you don't expect to collect. A common method applies a higher percentage to older aging buckets. The percentages should be based on your own collection history and reviewed with your accountant.",
      },
      {
        q: "What is the difference between an AR aging report and an AP aging report?",
        a: "An accounts receivable aging report shows what customers owe you, grouped by how overdue each invoice is. An accounts payable aging report does the same for what you owe your suppliers. Used together, they help you plan cash: you can see when money should arrive and which bills need paying first, and spot whether you are paying suppliers faster than customers pay you.",
      },
      {
        q: "How do partial payments and credits appear on an aging report?",
        a: "Show only the remaining balance of each invoice after any partial payment, in the bucket for that invoice's age. Unapplied payments and credit notes should be matched to the invoices they relate to; if they cannot be matched yet, list them separately as credits so customer totals are not overstated. Regularly clearing unapplied items keeps the report accurate.",
      },
      {
        q: "How should I handle disputed invoices on an aging report?",
        a: "Keep disputed invoices on the report, but flag them, for example in a separate column or note, so your collection effort focuses on resolving the dispute rather than sending standard reminders. Record the reason and who is handling it. If the dispute ends with a reduction, issue a credit note rather than editing the original invoice, and the aging report will update.",
      },
      {
        q: "Why do lenders ask for an aging report?",
        a: "Lenders, factoring companies and investors use the aging report to judge how collectible your receivables are. For asset-based loans and lines of credit, the amount you can borrow is often based on receivables below a certain age, with older or disputed balances excluded. A clean, current report with few old balances can improve your access to funding.",
      },
      {
        q: "Can I use an aging report to send customer statements?",
        a: "Yes. The aging report lists each customer's open invoices and balances, which is the information a customer statement needs. Sending monthly statements that show unpaid invoices, amounts and due dates reminds customers what they owe and helps catch missing or disputed invoices early. Check the statement against your records before sending, especially where partial payments are involved.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An accounts receivable aging report is a table of every unpaid customer invoice, grouped by how long each one has been outstanding: usually current, 1–30, 31–60, 61–90 and over 90 days past due. It shows at a glance who owes you money, how much, and which balances are at risk, so you can prioritize collections.</p>

<p>This guide shows how to build an aging report step by step, works through a full five-customer example with correct totals, explains how to estimate bad debts from it and lists what to do with each bucket. Clean aging starts with clean invoices, so make sure every invoice from our <a href="/invoice-generator">invoice generator</a> has a unique number and a real calendar due date.</p>

<h2>What an accounts receivable aging report shows</h2>
<p>An aging report (or AR aging schedule) answers three questions:</p>
<ul>
<li><strong>How much is owed in total?</strong> The grand total equals your accounts receivable balance.</li>
<li><strong>How overdue is it?</strong> The buckets show how much is current versus late, and how late.</li>
<li><strong>Who owes it?</strong> Rows by customer reveal which clients pay slowly.</li>
</ul>
<p>It is one of the most practical reports in small business finance, and it underpins almost everything in our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a>.</p>
<p>Accountants and lenders also use it. At year end it helps decide whether any balances should be written off, and a lender reviewing a credit application may ask for a recent aging report to judge how reliably your customers pay. Even a one-person business benefits, because a single glance replaces scrolling through sent emails to work out who still owes what.</p>

<h2>Aging buckets explained</h2>
<table><thead><tr><th>Bucket</th><th>Meaning</th><th>Typical risk</th></tr></thead><tbody>
<tr><td>Current</td><td>Not yet due</td><td>Low</td></tr>
<tr><td>1–30 days</td><td>Up to a month past due</td><td>Low to moderate; often an oversight</td></tr>
<tr><td>31–60 days</td><td>One to two months past due</td><td>Moderate; needs active follow-up</td></tr>
<tr><td>61–90 days</td><td>Two to three months past due</td><td>High; escalate</td></tr>
<tr><td>Over 90 days</td><td>More than three months past due</td><td>Highest; consider collections or write-off</td></tr>
</tbody></table>
<p>The buckets above assume aging from the due date. Some businesses age from the invoice date instead, in which case a Net 30 invoice moves into "31–60" as soon as it becomes overdue. Pick one approach, label it on the report and stick with it.</p>

<h2>How to create an aging report in 5 steps</h2>
<h3>Step 1: List every unpaid invoice</h3>
<p>Export or list each open invoice with customer, invoice number, invoice date, due date and outstanding balance. Include partially paid invoices at their remaining balance and subtract any unapplied <a href="/blog/credit-note-guide">credit notes</a>.</p>
<h3>Step 2: Choose a report date</h3>
<p>Typically the last day of the month or today's date. All aging is measured against it.</p>
<h3>Step 3: Calculate days past due</h3>
<p>Days past due = report date − due date. For example, an invoice due on 15 September 2026 and aged as of 31 October 2026 is 15 days past due by the end of September plus 31 days in October = 46 days past due, which places it in the 31–60 bucket. A negative result means the invoice is current.</p>
<h3>Step 4: Assign each balance to a bucket</h3>
<p>In a spreadsheet, a nested IF formula can place each balance in the right column based on days past due.</p>
<h3>Step 5: Total by customer and by bucket</h3>
<p>Sum each row for customer totals and each column for bucket totals. The grand total must equal your accounts receivable balance; if it doesn't, an invoice or payment is missing.</p>

<h2>Worked example: a five-customer aging report</h2>
<p>Here is an aging report for a small business as of 31 October 2026, aged from the due date.</p>
<table><thead><tr><th>Customer</th><th>Current</th><th>1–30</th><th>31–60</th><th>61–90</th><th>Over 90</th><th>Total</th></tr></thead><tbody>
<tr><td>Customer A</td><td>$4,200</td><td>$1,800</td><td>$0</td><td>$0</td><td>$0</td><td>$6,000</td></tr>
<tr><td>Customer B</td><td>$0</td><td>$2,500</td><td>$1,500</td><td>$0</td><td>$0</td><td>$4,000</td></tr>
<tr><td>Customer C</td><td>$3,000</td><td>$0</td><td>$0</td><td>$2,000</td><td>$0</td><td>$5,000</td></tr>
<tr><td>Customer D</td><td>$0</td><td>$0</td><td>$0</td><td>$0</td><td>$1,200</td><td>$1,200</td></tr>
<tr><td>Customer E</td><td>$2,800</td><td>$0</td><td>$1,000</td><td>$0</td><td>$0</td><td>$3,800</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$10,000</strong></td><td><strong>$4,300</strong></td><td><strong>$2,500</strong></td><td><strong>$2,000</strong></td><td><strong>$1,200</strong></td><td><strong>$20,000</strong></td></tr>
<tr><td>% of total</td><td>50.0%</td><td>21.5%</td><td>12.5%</td><td>10.0%</td><td>6.0%</td><td>100%</td></tr>
</tbody></table>
<p>Check the maths: the column totals $10,000 + $4,300 + $2,500 + $2,000 + $1,200 = $20,000, and the row totals $6,000 + $4,000 + $5,000 + $1,200 + $3,800 = $20,000. Both agree, so the report balances.</p>
<h3>What this report tells you</h3>
<ul>
<li>Half of receivables ($10,000) aren't due yet, which is healthy.</li>
<li>Half are overdue ($10,000), and $3,200 (16%) is more than 60 days late.</li>
<li>Customer C pays some invoices on time but has a $2,000 invoice over 60 days late, possibly a dispute worth investigating.</li>
<li>Customer D's $1,200 is over 90 days late and should be escalated now.</li>
<li>Customer B has slipped into the 31–60 bucket and needs a call, not just another email.</li>
</ul>

<h2>Estimating bad debts from the aging report</h2>
<p>Businesses using accrual accounting often estimate an allowance for doubtful accounts by applying a percentage to each bucket. The percentages below are illustrative only; base yours on your own collection history.</p>
<table><thead><tr><th>Bucket</th><th>Balance</th><th>Estimated uncollectible</th><th>Allowance</th></tr></thead><tbody>
<tr><td>Current</td><td>$10,000</td><td>1%</td><td>$100</td></tr>
<tr><td>1–30 days</td><td>$4,300</td><td>3%</td><td>$129</td></tr>
<tr><td>31–60 days</td><td>$2,500</td><td>10%</td><td>$250</td></tr>
<tr><td>61–90 days</td><td>$2,000</td><td>25%</td><td>$500</td></tr>
<tr><td>Over 90 days</td><td>$1,200</td><td>50%</td><td>$600</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$20,000</strong></td><td>—</td><td><strong>$1,579</strong></td></tr>
</tbody></table>
<p>On this estimate, the business expects to collect about $20,000 − $1,579 = $18,421 of its receivables. Discuss the method and any tax implications with your accountant.</p>

<h2>What to do with each aging bucket</h2>
<ol>
<li><strong>Current:</strong> Send a courtesy reminder a few days before the due date.</li>
<li><strong>1–30 days:</strong> Send polite follow-ups using our <a href="/blog/payment-reminder-emails">payment reminder emails</a>, and check the invoice reached the right person.</li>
<li><strong>31–60 days:</strong> Phone the client, confirm there is no dispute, and send a <a href="/blog/statement-of-account">statement of account</a> listing all open invoices. Apply any <a href="/blog/late-payment-fees">late payment fees</a> your contract allows.</li>
<li><strong>61–90 days:</strong> Escalate to a senior contact, consider pausing further work and follow our playbook for an <a href="/blog/overdue-invoice">overdue invoice</a>.</li>
<li><strong>Over 90 days:</strong> Send a final written notice, then decide between a payment plan, <a href="/blog/invoice-collections">sending the invoice to collections</a>, small claims or a write-off.</li>
</ol>

<h2>Tips for a more useful aging report</h2>
<ul>
<li><strong>Use consistent invoice numbers</strong> so every line traces back to a document. See our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide.</li>
<li><strong>Apply payments the day they arrive</strong>, or the report will overstate what is overdue.</li>
<li><strong>Add a notes column</strong> for promised payment dates and disputes.</li>
<li><strong>Compare month to month.</strong> A growing 31–60 bucket is an early warning even if the total looks stable.</li>
<li><strong>Feed it into your forecast.</strong> Expected collections by bucket make a cash flow forecast far more realistic.</li>
</ul>

<h2>Building the buckets in a spreadsheet</h2>
<p>If you don't have accounting software, a spreadsheet aging report takes about half an hour to set up. Use one row per open invoice with these columns: customer, invoice number, invoice date, due date, balance, days past due and bucket.</p>
<ul>
<li><strong>Days past due:</strong> put the report date in a fixed cell (for example H1) and use <code>=$H$1-D2</code>, where D2 is the due date.</li>
<li><strong>Bucket:</strong> use a nested IF on the days-past-due cell, such as <code>=IF(F2&lt;=0,"Current",IF(F2&lt;=30,"1-30",IF(F2&lt;=60,"31-60",IF(F2&lt;=90,"61-90","Over 90"))))</code>.</li>
<li><strong>Summary:</strong> a pivot table with customers as rows, buckets as columns and the sum of balance as values produces the report shown above.</li>
</ul>
<p>Change the report date each time you run it and the whole report re-ages automatically. Keep a copy of each month's version so you can compare trends.</p>

<h2>Common aging report mistakes</h2>
<ul>
<li><strong>Forgetting partial payments</strong>, which overstates the amount overdue.</li>
<li><strong>Leaving disputed invoices unmarked.</strong> A disputed balance needs resolution, not reminders; flag it separately.</li>
<li><strong>Mixing currencies without conversion.</strong> Convert foreign-currency balances at a consistent rate or report them separately.</li>
<li><strong>Using the invoice date for some customers and the due date for others.</strong> Consistency matters more than which method you choose.</li>
<li><strong>Running the report but not acting on it.</strong> Assign a next step and a date to every balance over 30 days.</li>
</ul>

<p>If you are not using accounting software, an <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a> can produce the same aging buckets with a few formulas.</p>

<h2>Keep your receivables current</h2>
<p>The easiest aging report to manage is one where most balances sit in "current". Send clear, prompt invoices from the <a href="/invoice-generator">invoice generator</a> (the <a href="/invoice-templates/mono">Mono invoice template</a> keeps the due date and amount front and center) and review your aging report every week.</p>
`,
  },
  {
    slug: "cash-flow-management",
    title: "Cash Flow Management for Small Business: A Practical Guide",
    description:
      "Cash flow management for small business made practical: build a 3-month forecast, calculate how DSO ties up cash, and use 10 tactics to avoid cash shortfalls.",
    category: "business-finance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "burn-rate-and-runway",
      "cash-flow-statement",
      "working-capital",
      "accounts-receivable-guide",
      "how-to-get-paid-faster",
      "invoice-factoring",
    ],
    faqs: [
      {
        q: "What is the difference between cash flow and profit?",
        a: "Profit is income minus expenses for a period, which under accrual accounting includes invoices not yet paid. Cash flow is the actual money moving in and out of your bank account. A business can be profitable and still run out of cash.",
      },
      {
        q: "How far ahead should a small business forecast cash flow?",
        a: "Many small businesses keep a rolling 13-week (roughly three-month) forecast updated weekly, plus a rougher 12-month view for planning big purchases or hiring.",
      },
      {
        q: "How much cash reserve should a small business keep?",
        a: "There is no single rule. A common planning approach is to hold enough to cover a few months of fixed costs, adjusted for how seasonal or unpredictable your income is. Your accountant can help set a target.",
      },
      {
        q: "What are the most common causes of cash flow problems?",
        a: "Slow-paying customers, long payment terms, rapid growth that needs upfront spending, seasonal sales, unexpected expenses and tax bills that weren't set aside for.",
      },
      {
        q: "How can invoicing improve cash flow?",
        a: "Invoicing immediately, using short and clear payment terms, adding easy payment options, taking deposits and following up on time all shorten the gap between doing the work and receiving cash.",
      },
      {
        q: "What is the cash conversion cycle?",
        a: "The cash conversion cycle measures how many days it takes for money spent on inventory or work to come back as cash from customers. It is commonly calculated as days inventory outstanding plus days sales outstanding minus days payables outstanding. A shorter cycle means less cash is tied up. Service businesses without inventory can focus on collecting faster and agreeing sensible supplier terms.",
      },
      {
        q: "How should I plan for tax payments in my cash flow?",
        a: "Treat tax as money that is not yours to spend. Many small businesses move a set share of each payment received into a separate savings account for income tax, VAT, GST or sales tax, and add tax due dates to their cash flow forecast. Ask your accountant to estimate the right amount for your situation, as rates and payment schedules vary.",
      },
      {
        q: "Is negative cash flow always a bad sign?",
        a: "Not always. Cash flow can be negative for a period because you are investing in equipment, stock or hiring ahead of growth, or because of seasonal sales. It becomes a problem when operating cash flow is negative month after month with no plan to fix it, or when you cannot cover payroll and bills without new borrowing. Forecasting helps tell the two apart.",
      },
      {
        q: "What are burn rate and runway?",
        a: "Burn rate is how much cash your business uses each month, usually measured as net cash going out. Runway is how many months your current cash will last at that burn rate, calculated by dividing cash on hand by the monthly burn. They are most often used by startups and businesses that are not yet profitable, but any business can use them in a tight period.",
      },
      {
        q: "How can I negotiate better payment terms with suppliers?",
        a: "Ask, especially once you have a record of paying on time. Suppliers may agree to longer terms, such as Net 45 instead of Net 30, staged payments for large orders, or discounts for early payment that you can take when cash is strong. Put agreed terms in writing, and avoid stretching payments without agreement, which can damage relationships and your supply.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Cash flow management for a small business means tracking, forecasting and controlling the timing of money coming in and going out so you can always pay your bills. In practice it comes down to three habits: forecast cash weekly, collect from customers faster, and time your own payments and big expenses carefully.</p>

<p>This guide explains the difference between cash and profit, walks through building a simple three-month cash flow forecast with real numbers, shows how slow collections tie up cash, and lists practical tactics. Since customer payments are most businesses' main source of cash, it starts with invoicing: send clear, prompt invoices with our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>Cash flow vs profit: why both matter</h2>
<p>Profit tells you whether your business model works. Cash flow tells you whether you can pay rent on Friday. The two diverge because of timing: you may invoice $20,000 this month but not receive it until next month, while payroll and rent leave your account now.</p>
<p>Cash vs accrual accounting shows how the same transactions produce different results depending on when they are recorded. For cash flow management, what matters is the date money actually arrives or leaves.</p>

<h2>The three types of cash flow</h2>
<table><thead><tr><th>Type</th><th>What it includes</th><th>Small business examples</th></tr></thead><tbody>
<tr><td>Operating</td><td>Cash from day-to-day trading</td><td>Customer payments, supplier bills, wages, rent, software subscriptions</td></tr>
<tr><td>Investing</td><td>Cash spent on or received from long-term assets</td><td>Buying equipment or a vehicle, selling old equipment</td></tr>
<tr><td>Financing</td><td>Cash from or to lenders and owners</td><td>Loan drawdowns and repayments, owner contributions and drawings</td></tr>
</tbody></table>
<p>Healthy businesses generate positive operating cash flow over time. Relying on financing to cover operating shortfalls month after month is a warning sign.</p>
<p>For most service businesses, operating cash flow is the one to watch weekly. Investing and financing flows tend to be occasional, planned events, while customer payments and routine bills move every few days. That is why the forecast below focuses on operating items, with one-off purchases and loan repayments added as separate lines so they are easy to spot and move.</p>

<h2>How to build a simple cash flow forecast</h2>
<ol>
<li><strong>Start with your opening bank balance</strong> for the first period.</li>
<li><strong>List expected cash inflows</strong> by when you realistically expect to receive them, not when you invoice. Use your <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> to judge which invoices will actually be paid.</li>
<li><strong>List expected cash outflows</strong>: rent, wages, supplier bills, loan repayments, subscriptions, tax payments and planned purchases.</li>
<li><strong>Calculate net cash flow</strong> for each period: inflows minus outflows.</li>
<li><strong>Calculate the closing balance</strong>: opening balance plus net cash flow. It becomes the next period's opening balance.</li>
<li><strong>Update it weekly</strong>, replacing estimates with actual figures as they arrive.</li>
</ol>

<h2>Worked example: a three-month cash flow forecast</h2>
<p>A small marketing agency starts the quarter with $8,000 in the bank.</p>
<table><thead><tr><th>Line</th><th>Month 1</th><th>Month 2</th><th>Month 3</th></tr></thead><tbody>
<tr><td>Opening balance</td><td>$8,000</td><td>$5,500</td><td>$2,500</td></tr>
<tr><td>Customer payments received</td><td>$14,000</td><td>$12,000</td><td>$18,500</td></tr>
<tr><td>Wages and contractor costs</td><td>($10,000)</td><td>($10,000)</td><td>($10,000)</td></tr>
<tr><td>Rent and utilities</td><td>($2,500)</td><td>($2,500)</td><td>($2,500)</td></tr>
<tr><td>Software and other overheads</td><td>($1,000)</td><td>($1,000)</td><td>($1,000)</td></tr>
<tr><td>Quarterly tax payment</td><td>($3,000)</td><td>$0</td><td>$0</td></tr>
<tr><td>New laptop</td><td>$0</td><td>($1,500)</td><td>$0</td></tr>
<tr><td>Loan repayment</td><td>$0</td><td>$0</td><td>($2,000)</td></tr>
<tr><td><strong>Net cash flow</strong></td><td><strong>($2,500)</strong></td><td><strong>($3,000)</strong></td><td><strong>$3,000</strong></td></tr>
<tr><td><strong>Closing balance</strong></td><td><strong>$5,500</strong></td><td><strong>$2,500</strong></td><td><strong>$5,500</strong></td></tr>
</tbody></table>
<p>Check the maths: in Month 1, outflows are $10,000 + $2,500 + $1,000 + $3,000 = $16,500, so net cash flow is $14,000 − $16,500 = −$2,500 and the closing balance is $8,000 − $2,500 = $5,500. In Month 2, outflows are $15,000, so net is −$3,000 and closing is $2,500. In Month 3, outflows are $15,500, so net is +$3,000 and closing is $5,500.</p>
<p>The forecast reveals a problem two months ahead: the balance falls to $2,500 in Month 2, less than one month's rent and overheads combined with any surprise. With that warning, the owner can delay the laptop, chase a slow client, ask for a deposit on a new project or arrange a small credit line <em>before</em> it becomes urgent.</p>

<h2>How slow collections tie up cash</h2>
<p>Days sales outstanding (DSO), the average time customers take to pay, directly controls how much of your money sits in other people's bank accounts. A simple approximation:</p>
<p><code>Cash tied up in receivables ≈ average daily credit sales × DSO</code></p>
<p><strong>Worked example:</strong> A business invoices $30,000 a month, about $1,000 per day in a 30-day month.</p>
<ul>
<li>At a DSO of 45 days: $1,000 × 45 = $45,000 tied up in receivables</li>
<li>At a DSO of 30 days: $1,000 × 30 = $30,000 tied up</li>
<li>Cash released by cutting DSO by 15 days: $45,000 − $30,000 = $15,000</li>
</ul>
<p>That $15,000 is a one-time boost to the bank balance, achieved without a single new sale. Our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a> explains how to measure DSO accurately.</p>

<h2>10 cash flow management tactics for small businesses</h2>
<h3>Speed up cash coming in</h3>
<ul>
<li><strong>Invoice the day work is done.</strong> Don't batch invoices to month end. More ideas in <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</li>
<li><strong>Use shorter, explicit terms.</strong> Show a real due date, and choose terms deliberately with our <a href="/blog/invoice-payment-terms">invoice payment terms</a> guide.</li>
<li><strong>Take deposits</strong> on larger projects using a deposit invoice.</li>
<li><strong>Offer an early payment discount</strong> selectively. See the <a href="/blog/early-payment-discount">early payment discount</a> guide to understand the true cost.</li>
<li><strong>Bill retainers in advance</strong> and keep a steady schedule with <a href="/blog/recurring-invoices-guide">recurring invoices</a>.</li>
<li><strong>Follow up consistently</strong> and apply agreed <a href="/blog/late-payment-fees">late payment fees</a> where your contract and local law allow.</li>
</ul>
<h3>Manage cash going out</h3>
<ul>
<li><strong>Pay suppliers on their due date</strong>, not early, unless there is a discount worth taking.</li>
<li><strong>Set aside tax</strong> in a separate account as income arrives, so tax bills don't create a shortfall.</li>
<li><strong>Review subscriptions</strong> quarterly and cancel what you don't use.</li>
<li><strong>Time big purchases</strong> for months your forecast shows a comfortable balance.</li>
</ul>

<h2>When you need short-term funding</h2>
<p>Even with good habits, growth or seasonality can create gaps. Options include an overdraft or line of credit, a short-term loan, or turning receivables into cash through <a href="/blog/invoice-factoring">invoice factoring</a> or financing. Each has a cost; compare the annualized cost of any option before committing, and arrange funding while your numbers still look healthy rather than in a crisis.</p>

<h2>A weekly cash flow routine</h2>
<ol>
<li>Record all payments received and made since last week.</li>
<li>Check unpaid invoices and send reminders.</li>
<li>Update the forecast with actual figures and new expected items.</li>
<li>Look three months ahead for any low point.</li>
<li>Decide on one action if a shortfall appears.</li>
</ol>
<p>Fifteen minutes a week is usually enough for a small business. Accurate records make it faster, which is where good bookkeeping habits come in.</p>

<h2>Warning signs of a cash flow problem</h2>
<p>Cash problems rarely arrive without notice. Watch for these signals and act early:</p>
<ul>
<li>You regularly rely on an overdraft or credit card to cover routine bills.</li>
<li>Your receivables are growing faster than your sales.</li>
<li>The share of overdue invoices on your aging report is rising month to month.</li>
<li>You have started paying suppliers late or delaying your own pay.</li>
<li>A single large client's late payment would leave you unable to cover payroll.</li>
<li>Tax payments come as a surprise rather than from a reserve.</li>
<li>Your forecast shows a low point you haven't planned for.</li>
</ul>
<p>If two or more of these apply, review pricing and payment terms, talk to your largest customers about payment timing, and speak with your accountant or bank before the shortfall arrives. Lenders and suppliers are usually more flexible when you raise an issue early with a forecast in hand than when a payment has already been missed.</p>
<p>Growth deserves a special mention. Winning a big contract often means paying for staff, materials or subcontractors weeks before the first invoice is paid. Model large new projects in your forecast before you sign, and negotiate upfront deposits or milestone billing to match your costs.</p>

<h2>Improve your cash flow with better invoices</h2>
<p>The quickest cash flow win for most small businesses is a faster, clearer invoice. Create one now in the <a href="/invoice-generator">invoice generator</a> with a real due date and payment details, and try the <a href="/invoice-templates/emerald">Emerald invoice template</a> for a clean, professional look.</p>
`,
  },
  {
    slug: "bookkeeping-basics",
    title: "Bookkeeping for Small Business: The Basics, Step by Step",
    description:
      "Bookkeeping for small business explained: single vs double entry, a starter chart of accounts, worked journal entries, bank reconciliation and a routine.",
    category: "business-finance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    related: [
      "ai-bookkeeping",
      "general-ledger",
      "profit-and-loss-statement",
      "bank-reconciliation",
      "year-end-invoicing-checklist",
      "cash-vs-accrual-accounting",
      "invoice-generator-vs-accounting-software",
      "how-long-to-keep-invoices",
    ],
    faqs: [
      {
        q: "What is the difference between bookkeeping and accounting?",
        a: "Bookkeeping is recording financial transactions accurately and keeping records organized. Accounting uses those records to prepare financial statements, analyze performance, plan taxes and advise on decisions.",
      },
      {
        q: "Can I do my own bookkeeping?",
        a: "Yes. Many sole proprietors and small business owners keep their own books with a spreadsheet or accounting software. Consider professional help when transactions grow, you register for VAT or sales tax, or you hire staff.",
      },
      {
        q: "Do I need a separate business bank account?",
        a: "In many cases it isn't legally required for sole proprietors, but it is strongly recommended. Keeping business and personal transactions separate makes bookkeeping, tax returns and any audit far easier. Companies normally need their own account.",
      },
      {
        q: "How often should I do bookkeeping?",
        a: "Weekly for recording transactions and chasing invoices, and monthly for reconciling bank accounts and reviewing reports. Leaving it until year end usually means lost receipts and a bigger accountant bill.",
      },
      {
        q: "What records should a small business keep?",
        a: "Sales invoices, receipts for expenses, bank and card statements, payroll records, tax returns and contracts. Retention periods vary by country, often several years, so check your tax authority's rules.",
      },
      {
        q: "What is a trial balance?",
        a: "A trial balance is a list of every account in your books with its debit or credit balance at a given date. In double-entry bookkeeping, total debits should equal total credits. If they do not, there is an error to find before preparing financial statements. A balanced trial balance does not prove everything is right, because some errors, such as posting to the wrong account, still balance.",
      },
      {
        q: "Can I keep digital copies of receipts instead of paper?",
        a: "In many countries, yes, as long as the digital copies are complete, legible and can be produced when the tax authority asks. The IRS, HMRC and ATO, for example, accept electronic records that meet their requirements. Scan or photograph receipts promptly, store them with clear names or in accounting software, and back them up. Check your tax authority's rules before discarding paper originals.",
      },
      {
        q: "How do I record money I take out of the business?",
        a: "For a sole proprietor, money you take for personal use is usually recorded as an owner's draw or drawings, not as an expense, because it is not a business cost. Personal expenses paid from the business account should be recorded the same way. Companies pay owners through salary or dividends instead. Ask your accountant which applies to your business structure.",
      },
      {
        q: "How do I catch up on months of bookkeeping?",
        a: "Start by gathering bank and card statements, sales invoices and receipts for the missing period. Work month by month, recording transactions and reconciling each month to the bank statement before moving on. Deal with the oldest period first so balances carry forward correctly. If you are far behind or have tax deadlines approaching, a bookkeeper can help you catch up quickly.",
      },
      {
        q: "What is the accounting equation?",
        a: "The accounting equation is assets = liabilities + equity. It means everything your business owns is funded either by what it owes to others or by the owner's stake. Every transaction in double-entry bookkeeping keeps the equation in balance; for example, invoicing a customer increases both accounts receivable (an asset) and income, which flows into equity.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Bookkeeping for small business is the routine of recording every sale, expense and payment, organizing the supporting documents, and reconciling your records with your bank statements. Done weekly, it tells you what you earn, what you owe and what you are owed, and it makes tax time straightforward.</p>

<p>This guide covers the core concepts, a starter chart of accounts, worked double-entry examples, bank reconciliation and a simple monthly routine. Bookkeeping starts with source documents, and your <a href="/blog/what-is-a-sales-invoice">sales invoices</a> are the most important ones: create consistent, numbered invoices with our <a href="/invoice-generator">free invoice generator</a> so every sale is easy to record.</p>

<p><em>This is general information, not accounting or tax advice. Requirements vary by country and business type; check with an accountant or your tax authority.</em></p>

<h2>What bookkeeping involves</h2>
<ul>
<li><strong>Recording transactions:</strong> every sale, purchase, payment and receipt.</li>
<li><strong>Keeping source documents:</strong> invoices, receipts, bills and statements that prove each entry.</li>
<li><strong>Categorizing:</strong> assigning each transaction to an account such as revenue, rent or software.</li>
<li><strong>Reconciling:</strong> checking your records against bank and card statements.</li>
<li><strong>Tracking receivables and payables:</strong> who owes you and whom you owe.</li>
<li><strong>Producing reports:</strong> profit and loss, balance sheet and aging reports.</li>
</ul>
<p>Before you start, choose your accounting method. Our guide to <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> explains how the choice affects when income and expenses are recorded.</p>

<h2>Single-entry vs double-entry bookkeeping</h2>
<table><thead><tr><th>Feature</th><th>Single-entry</th><th>Double-entry</th></tr></thead><tbody>
<tr><td>How it works</td><td>One line per transaction, like a cash book</td><td>Every transaction recorded as a debit in one account and an equal credit in another</td></tr>
<tr><td>Best for</td><td>Very small, cash-based sole proprietors</td><td>Most growing businesses and all companies</td></tr>
<tr><td>Tracks assets and liabilities</td><td>Not systematically</td><td>Yes</td></tr>
<tr><td>Error checking</td><td>Limited</td><td>Built in: total debits must equal total credits</td></tr>
<tr><td>Produces a balance sheet</td><td>No</td><td>Yes</td></tr>
<tr><td>Typical tool</td><td>Spreadsheet</td><td>Accounting software</td></tr>
</tbody></table>
<p>If you aren't sure which tool fits, our comparison of an <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a> helps you decide based on your volume and needs.</p>

<h2>A starter chart of accounts</h2>
<p>A chart of accounts is the list of categories you post transactions to. Keep it short at first; you can add accounts later.</p>
<table><thead><tr><th>Type</th><th>Example accounts</th></tr></thead><tbody>
<tr><td>Assets</td><td>Business bank account, accounts receivable, equipment</td></tr>
<tr><td>Liabilities</td><td>Accounts payable, credit card, sales tax or VAT payable, loans</td></tr>
<tr><td>Equity</td><td>Owner's capital, owner's drawings, retained earnings</td></tr>
<tr><td>Revenue</td><td>Sales or service income</td></tr>
<tr><td>Expenses</td><td>Rent, software, advertising, travel, professional fees, bank charges</td></tr>
</tbody></table>
<p>Your accountant may suggest categories that match your tax return, which makes year-end much easier. US sole proprietors may find it helpful to mirror common <a href="/blog/self-employed-tax-deductions">self-employed tax deduction</a> categories.</p>

<h2>Worked example: recording a month of transactions</h2>
<p>A freelance developer has these transactions in October 2026, using accrual-basis double entry:</p>
<table><thead><tr><th>Date</th><th>Transaction</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>1 Oct</td><td>Owner deposits savings into the business account</td><td>Bank $3,000</td><td>Owner's capital $3,000</td></tr>
<tr><td>3 Oct</td><td>Pays for a software subscription</td><td>Software expense $50</td><td>Bank $50</td></tr>
<tr><td>10 Oct</td><td>Sends invoice INV-2026-0031 for a website build</td><td>Accounts receivable $2,500</td><td>Revenue $2,500</td></tr>
<tr><td>24 Oct</td><td>Client pays INV-2026-0031 in full</td><td>Bank $2,500</td><td>Accounts receivable $2,500</td></tr>
<tr><td>28 Oct</td><td>Pays coworking desk rent</td><td>Rent expense $400</td><td>Bank $400</td></tr>
<tr><td colspan="2"><strong>Totals</strong></td><td><strong>$8,450</strong></td><td><strong>$8,450</strong></td></tr>
</tbody></table>
<p>Total debits ($3,000 + $50 + $2,500 + $2,500 + $400 = $8,450) equal total credits, so the entries balance. From these entries:</p>
<ul>
<li>Bank balance: $3,000 − $50 + $2,500 − $400 = $5,050</li>
<li>Accounts receivable: $2,500 − $2,500 = $0</li>
<li>Profit for October: revenue $2,500 − expenses ($50 + $400) = $2,050</li>
</ul>
<p>The owner's $3,000 deposit is not income; it is equity. Mixing it up with revenue is a classic beginner mistake that inflates taxable profit.</p>
<p>If the same developer used the cash method instead, the 10 October invoice would not be recorded as revenue until the client paid on 24 October. October profit would still be $2,050 here because the payment arrived in the same month, but if the client had paid in November, cash-basis October profit would have been a $450 loss and November would have shown the $2,500. Single-entry bookkeepers would simply list the $2,500 receipt, the $50 and $400 payments, and the $3,000 owner deposit marked as capital, not income.</p>

<h2>How to reconcile your bank account</h2>
<p>Bank reconciliation confirms that your books and your bank agree. Do it monthly, for every account and card the business uses, including payment processor balances that hold customer payments before transferring them to your bank.</p>
<ol>
<li>Get the bank statement balance for the last day of the month.</li>
<li>Add deposits you have recorded that the bank hasn't processed yet.</li>
<li>Subtract payments you have recorded that haven't cleared.</li>
<li>Compare the adjusted bank balance with your book balance.</li>
<li>Investigate and correct any difference: missing bank fees, duplicate entries or typos.</li>
</ol>
<p><strong>Example:</strong> The bank statement shows $6,420. A $1,200 customer payment was recorded on the 31st but appears on the next statement, and a $350 check to a supplier hasn't cleared. Adjusted bank balance = $6,420 + $1,200 − $350 = $7,270. If your books also show $7,270, you are reconciled.</p>

<h2>Bookkeeping best practices for invoices</h2>
<ul>
<li><strong>Number invoices sequentially</strong> with no gaps or duplicates. Our <a href="/tools/invoice-number-generator">invoice number generator</a> and <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide make this easy.</li>
<li><strong>Never edit a sent invoice.</strong> Correct it with a <a href="/blog/credit-note-guide">credit note</a> so the audit trail stays intact.</li>
<li><strong>Know which document is which.</strong> An invoice records a sale; a receipt confirms payment. See <a href="/blog/invoice-vs-receipt">invoice vs receipt</a>.</li>
<li><strong>Show tax separately</strong> on each invoice so tax payable is easy to total.</li>
<li><strong>Track unpaid invoices</strong> in your accounts receivable records, even on the cash basis.</li>
<li><strong>Store PDFs in one folder</strong>, named by invoice number, and keep them for as long as required. See <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
</ul>

<h2>A simple bookkeeping routine</h2>
<h3>Weekly</h3>
<ul>
<li>Send invoices for completed work and record them.</li>
<li>Record payments received and expenses paid, with receipts attached.</li>
<li>Chase overdue invoices.</li>
</ul>
<h3>Monthly</h3>
<ul>
<li>Reconcile every bank and card account.</li>
<li>Review profit and loss and the receivables aging.</li>
<li>Set aside money for income tax and any sales tax or VAT.</li>
</ul>
<h3>Yearly</h3>
<ul>
<li>Review the chart of accounts and fixed assets.</li>
<li>Send records to your accountant or prepare your return.</li>
<li>Archive the year's documents.</li>
</ul>
<p>For a wider view of running billing in a small company, see our <a href="/blog/small-business-invoice-guide">small business invoicing guide</a>.</p>

<h2>Common bookkeeping mistakes</h2>
<ul>
<li><strong>Mixing personal and business spending.</strong> It hides real profit and makes deductions hard to prove. Use a separate business account and card.</li>
<li><strong>Recording owner deposits or loans as income.</strong> Money you or a lender put in is equity or a liability, not revenue.</li>
<li><strong>Recording owner withdrawals as expenses.</strong> For sole proprietors, money taken out for personal use is usually drawings, not a business expense.</li>
<li><strong>Losing receipts.</strong> Photograph or scan receipts as soon as you get them and attach them to the transaction.</li>
<li><strong>Double-counting income.</strong> On the accrual basis, the invoice is the income; the later payment just clears the receivable. Recording both as revenue doubles your sales.</li>
<li><strong>Skipping reconciliation.</strong> Errors compound. A ten-minute monthly reconciliation catches them while they are easy to fix.</li>
<li><strong>Not setting aside tax.</strong> Sales tax or VAT you collect usually belongs to the tax authority, and income tax arrives later. Move a portion of each payment to a separate account.</li>
</ul>

<h2>When to get help with your books</h2>
<p>Doing your own bookkeeping is realistic when you have a few transactions a week. Consider a bookkeeper or accountant when you spend more than a few hours a month on it, when you register for sales tax or VAT, when you take on employees, or when you need financial statements for a loan. Many owners keep the daily recording in-house and pay a professional for monthly reconciliation and year-end work, which balances cost with confidence that the numbers are right.</p>

<h2>Start with clean, numbered invoices</h2>
<p>Good bookkeeping is easiest when every sale begins with a clear, consistently numbered document. Create yours in the <a href="/invoice-generator">invoice generator</a> and choose a tidy layout such as the <a href="/invoice-templates/nordic">Nordic invoice template</a>, then record it in your books the same day.</p>
`,
  },
];
