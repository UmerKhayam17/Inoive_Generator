import type { PostDraft } from "../blog";

export const INVOICING_BASICS_2026_E_POSTS: PostDraft[] = [
  {
    slug: "net-30-payment-terms",
    title: "Net 30 Payment Terms: What Net 30 Means (+ Wording)",
    description:
      "What does net 30 mean? Net 30 payment terms explained: how to count the 30 days, net 15/45/60 variants, when to offer them and invoice wording you can copy.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-payment-terms", "net-60-net-90-payment-terms", "2-10-net-30"],
    faqs: [
      {
        q: "Does net 30 include weekends and holidays?",
        a: "Yes. Unless your contract says business days, net 30 means 30 calendar days, so weekends and public holidays count. If day 30 falls on a weekend or bank holiday, many customers pay on the next business day, and most sellers accept that without charging a late fee. If you want certainty, print the exact due date on the invoice instead of relying on the customer to count.",
      },
      {
        q: "Is net 30 from the invoice date or the delivery date?",
        a: "By default, net 30 runs from the invoice date. Some buyers write their purchase orders so the clock starts when they receive the invoice or the goods, and some use end-of-month terms instead. Whatever you agree should appear in the contract or purchase order, and the invoice should show both the invoice date and the calculated due date so there is no argument later.",
      },
      {
        q: "Can I charge interest if a net 30 invoice is paid late?",
        a: "You can usually charge a late fee or interest if the customer agreed to it in advance, for example in your contract, quote or terms and conditions, and the rate is within any legal limit in your state or country. Adding a fee for the first time on a reminder is harder to enforce. In the UK, businesses also have statutory late payment interest rights on B2B debts.",
      },
      {
        q: "What is the difference between net 30 and due in 30 days?",
        a: "In practice they mean the same thing: the full invoice amount is due within 30 days. Net 30 is accounting shorthand that many B2B buyers expect, while due in 30 days is clearer to consumers and very small clients who may not know the jargon. Using both, such as Net 30 (due by November 28, 2026), removes any doubt.",
      },
      {
        q: "Should a new freelancer offer net 30?",
        a: "Only if the client is likely to insist on it. Large companies often have fixed payment runs and will pay on net 30 or longer whatever your invoice says. Individuals and small businesses will often accept net 7 or net 14. If you do offer net 30, ask for a deposit on larger projects so you are not funding the whole job yourself for a month or more.",
      },
      {
        q: "What does 1/10 net 30 mean?",
        a: "It means the customer can take a 1% discount if they pay within 10 days; otherwise the full amount is due in 30 days. It is a smaller version of the more common 2/10 net 30 early payment discount. Both are optional for the customer, and you should state the discounted amount and deadline on the invoice so the customer does not have to calculate it.",
      },
      {
        q: "Is net 30 the same as a 30-day credit account?",
        a: "Close, but not identical. Net 30 is a payment term printed on individual invoices. A net 30 trade account or vendor account is an ongoing credit line where the supplier lets you buy now and pay within 30 days, often after a credit check, and some of these vendors report payments to business credit bureaus. The invoice terms work the same way once the account is open.",
      },
      {
        q: "How do I enforce net 30 terms?",
        a: "Put the terms in writing before work starts, print the exact due date on every invoice, send a friendly reminder a few days before the due date and a firm one the day after it passes. Track each invoice's age so nothing slips. If the customer is persistently late, shorten their terms, ask for deposits, or pause new work until the account is current.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Net 30 means the full invoice amount is due 30 calendar days after the invoice date. "Net" refers to the total after any agreed discounts or credits. If you issue an invoice dated October 29, 2026 on net 30 payment terms, payment is due by November 28, 2026. Variants such as net 15, net 45 and net 60 work the same way with a different number of days.</p>

<p>Net 30 is the most common payment term in business-to-business invoicing in the US, and many buyers default to it whether or not you ask. This guide explains exactly what net 30 means, how to count the days, how it compares with net 15, net 45 and due on receipt, when it makes sense to offer it and how to word it on an invoice so customers pay on time.</p>

<h2>What does net 30 mean on an invoice?</h2>
<p>On an invoice, "Net 30" is shorthand for "the net amount is payable within 30 days." It is a type of trade credit: you deliver the goods or services first and let the customer pay later. The word "net" matters. It means the amount after any discounts, credits or deposits already applied, which is normally the "Balance due" figure at the bottom of the invoice.</p>
<p>Net 30 belongs to a family of <a href="/blog/invoice-payment-terms">invoice payment terms</a> that also includes due on receipt, end of month (EOM) terms and early payment discounts like <a href="/blog/2-10-net-30">2/10 net 30</a>. All of them answer the same question: by what date does the customer have to pay before the invoice is overdue?</p>

<h3>Who uses net 30 terms?</h3>
<ul>
<li><strong>Wholesalers and manufacturers</strong> selling to retailers on trade accounts.</li>
<li><strong>Agencies, consultants and freelancers</strong> billing corporate clients whose accounts payable teams run on monthly cycles.</li>
<li><strong>Contractors and trades</strong> billing general contractors or property managers.</li>
<li><strong>Government agencies</strong>, which in the US federal system generally pay a proper invoice within 30 days under the <a href="/blog/prompt-payment-act">Prompt Payment Act</a>.</li>
</ul>

<h2>How do you calculate a net 30 due date?</h2>
<p>Start from the invoice date (unless your agreement says otherwise) and add 30 calendar days. Weekends and holidays count. The invoice date itself is day 0.</p>
<table>
<thead><tr><th>Invoice date</th><th>Net 15 due</th><th>Net 30 due</th><th>Net 45 due</th><th>Net 60 due</th></tr></thead>
<tbody>
<tr><td>Jan 15, 2026</td><td>Jan 30, 2026</td><td>Feb 14, 2026</td><td>Mar 1, 2026</td><td>Mar 16, 2026</td></tr>
<tr><td>Jun 1, 2026</td><td>Jun 16, 2026</td><td>Jul 1, 2026</td><td>Jul 16, 2026</td><td>Jul 31, 2026</td></tr>
<tr><td>Oct 29, 2026</td><td>Nov 13, 2026</td><td>Nov 28, 2026</td><td>Dec 13, 2026</td><td>Dec 28, 2026</td></tr>
</tbody>
</table>
<p>The easiest way to avoid confusion is to print the actual due date on the invoice next to the term. Customers' AP systems usually key on that date, and it removes arguments about whether the clock started at delivery, receipt or invoice date. Our guide to <a href="/blog/invoice-date-vs-due-date">invoice date vs due date</a> covers the edge cases, including invoices sent days after they are dated.</p>

<h3>Calendar days vs business days</h3>
<p>Net 30 means calendar days unless your contract explicitly says "30 business days." Business days stretch the term to roughly six weeks, so if a customer asks for business days, treat it as a request for longer terms.</p>

<h2>Net 30 vs net 15, net 45, net 60 and other terms</h2>
<table>
<thead><tr><th>Term</th><th>Meaning</th><th>Typical use</th><th>Cash flow impact for the seller</th></tr></thead>
<tbody>
<tr><td>Due on receipt</td><td>Pay immediately</td><td>Consumers, one-off jobs, new clients</td><td>Fastest, but "immediately" is vague</td></tr>
<tr><td>Net 7 / Net 10</td><td>Pay within 7 or 10 days</td><td>Freelancers, small clients</td><td>Fast, still gives a clear deadline</td></tr>
<tr><td>Net 15</td><td>Pay within 15 days</td><td>Small businesses, services</td><td>Good balance</td></tr>
<tr><td>Net 30</td><td>Pay within 30 days</td><td>Standard B2B default</td><td>You fund about a month of work</td></tr>
<tr><td>Net 45</td><td>Pay within 45 days</td><td>Mid-size buyers, some distributors</td><td>Noticeable strain for small sellers</td></tr>
<tr><td>Net 60 / Net 90</td><td>Pay within 60 or 90 days</td><td>Large retailers and enterprises</td><td>Heavy; consider pricing it in</td></tr>
<tr><td>2/10 net 30</td><td>2% off if paid in 10 days, otherwise 30</td><td>Suppliers wanting faster cash</td><td>Faster cash at a real cost</td></tr>
<tr><td>Net 30 EOM</td><td>30 days after the end of the invoice month</td><td>Buyers with monthly AP runs</td><td>Can stretch to nearly 60 days</td></tr>
</tbody>
</table>
<p>For longer terms and how to negotiate them, see <a href="/blog/net-60-net-90-payment-terms">net 60 and net 90 payment terms</a>. If you want cash immediately, read our guide to <a href="/blog/due-upon-receipt">due upon receipt</a> wording first, because "due on receipt" is often treated as net 30 anyway by busy AP departments.</p>

<h2>When should you offer net 30 payment terms?</h2>
<p>Net 30 is a commercial decision, not a legal requirement. Offer it when the benefits outweigh the cost of waiting for your money.</p>
<h3>Good reasons to offer net 30</h3>
<ul>
<li>The customer is an established business with a reliable payment history.</li>
<li>Your competitors offer it and buyers expect it.</li>
<li>The client's AP team only pays on fixed cycles, so shorter terms would be ignored anyway.</li>
<li>You have enough cash reserves or a credit line to cover a month of costs.</li>
</ul>
<h3>Reasons to choose shorter terms</h3>
<ul>
<li>The client is new, small or an individual consumer.</li>
<li>Your costs (materials, subcontractors, payroll) are paid upfront.</li>
<li>The job is large relative to your monthly revenue. In that case ask for a <a href="/blog/deposit-invoice">deposit invoice</a> or <a href="/blog/milestone-payments">milestone payments</a> instead.</li>
</ul>

<h2>Worked example: what net 30 costs a small business</h2>
<p>Say you are a small design studio billing $12,000 a month to corporate clients, all on net 30, and in practice clients pay on day 35 on average. That means roughly $14,000 of earned revenue is always sitting in receivables ($12,000 x 35 / 30). If your business line of credit costs 10% a year, carrying that balance costs about $1,400 a year in interest, or about 1% of annual billings.</p>
<p>Switching the smaller clients to net 15 and asking for a 30% deposit on projects over $5,000 could cut the average collection period to around 20 days. Receivables would drop to about $8,000, freeing $6,000 of cash. The metric that tracks this is <a href="/blog/days-sales-outstanding">days sales outstanding (DSO)</a>; measure it monthly to see whether your terms are working.</p>

<h2>How to write net 30 on an invoice (wording examples)</h2>
<p>Clear wording is the cheapest way to get paid on time. Put the term and the date in the header near the invoice number, and repeat it in the footer or notes.</p>
<ul>
<li><strong>Standard:</strong> "Payment terms: Net 30. Due date: November 28, 2026."</li>
<li><strong>Plain-English:</strong> "Please pay the balance of $4,250.00 within 30 days, by November 28, 2026."</li>
<li><strong>With late fee (only if agreed in advance):</strong> "Net 30. Balances unpaid after the due date accrue interest at 1.5% per month, as set out in our agreement dated March 3, 2026."</li>
<li><strong>With early discount:</strong> "2/10 Net 30: deduct $85.00 if paid by November 8, 2026; otherwise $4,250.00 due by November 28, 2026."</li>
<li><strong>With PO reference:</strong> "Net 30 per PO 45-1187. Please quote invoice number INV-2026-0142 with payment."</li>
</ul>
<p>More copy-ready lines are in our <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions examples</a>. Before you apply any late fee, check the rules in our guide to <a href="/blog/late-payment-fees">charging late payment fees</a>.</p>

<h3>Example invoice on net 30 terms</h3>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Brand identity design (logo, palette, type)</td><td>1</td><td>$2,800.00</td><td>$2,800.00</td></tr>
<tr><td>Business card layout</td><td>1</td><td>$350.00</td><td>$350.00</td></tr>
<tr><td>Website hero illustrations</td><td>4</td><td>$275.00</td><td>$1,100.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td>$4,250.00</td></tr>
<tr><td colspan="3"><strong>Tax (services not taxable in this example)</strong></td><td>$0.00</td></tr>
<tr><td colspan="3"><strong>Balance due (Net 30, due November 28, 2026)</strong></td><td>$4,250.00</td></tr>
</tbody>
</table>
<p>You can build this layout in a couple of minutes with our <a href="/invoice-generator">free invoice generator</a>, which lets you set the payment terms and due date fields directly.</p>

<h2>How to set up net 30 terms step by step</h2>
<ol>
<li><strong>Decide who qualifies.</strong> Many sellers offer net 30 only after a first order paid upfront, or after a simple credit check and trade references.</li>
<li><strong>Put it in writing.</strong> State the term, any late fee and any early payment discount in your quote, contract or credit application.</li>
<li><strong>Collect billing details.</strong> Get the AP contact, billing address, PO requirements and how they want invoices delivered.</li>
<li><strong>Invoice promptly.</strong> The 30 days start from the invoice date, so a late invoice is a late payment. Use a consistent numbering scheme such as the one from our <a href="/tools/invoice-number-generator">invoice number generator</a>.</li>
<li><strong>Print the due date.</strong> Show both "Net 30" and the calendar date.</li>
<li><strong>Remind before and after.</strong> A courtesy note five days before the due date and a follow-up the day after works well; see our <a href="/blog/payment-reminder-emails">payment reminder email templates</a>.</li>
<li><strong>Review quarterly.</strong> Shorten terms for customers who are regularly late.</li>
</ol>

<h2>Common net 30 mistakes</h2>
<ul>
<li><strong>Writing only "Net 30" with no date.</strong> Customers count from different starting points. Always add the due date.</li>
<li><strong>Offering net 30 to everyone by default.</strong> Consumers and tiny businesses rarely need it.</li>
<li><strong>Adding a late fee that was never agreed.</strong> It damages the relationship and may not be enforceable.</li>
<li><strong>Sending the invoice late.</strong> Every day of delay pushes the due date out.</li>
<li><strong>Ignoring the client's PO and approval rules.</strong> A missing <a href="/blog/po-number-on-invoice">PO number</a> can push a net 30 invoice to day 60.</li>
<li><strong>Not following up on day 31.</strong> The longer an invoice ages, the harder it is to collect. Our guide to handling an <a href="/blog/overdue-invoice">overdue invoice</a> has the next steps.</li>
</ul>

<h2>What happens when a net 30 invoice is paid late?</h2>
<p>An invoice becomes overdue on day 31. Nothing happens automatically: you have to act. A practical escalation path looks like this:</p>
<table>
<thead><tr><th>Days past due</th><th>Action</th></tr></thead>
<tbody>
<tr><td>1 to 3</td><td>Friendly email with the invoice attached and a payment link</td></tr>
<tr><td>7 to 14</td><td>Phone call to the AP contact; confirm the invoice is approved and scheduled</td></tr>
<tr><td>15 to 30</td><td>Formal reminder; apply any agreed late fee; pause new work if needed</td></tr>
<tr><td>30 to 60</td><td>Final notice and a written payment plan offer</td></tr>
<tr><td>60+</td><td>Demand letter, small claims or a collection agency</td></tr>
</tbody>
</table>
<p>Most late net 30 payments are process problems (a missing PO, an invoice sent to the wrong inbox, an approver on vacation) rather than unwillingness to pay, so a quick call often fixes them. For persistent problems, see <a href="/blog/client-not-paying-invoice">what to do when a client is not paying</a> and our overview of <a href="/blog/collection-agency-for-unpaid-invoices">collection agencies for unpaid invoices</a>.</p>

<h2>Net 30 accounts vs net 30 invoice terms</h2>
<p>You may also see "net 30 vendor accounts" advertised as a way to build business credit. Those are supplier credit lines where you, as the buyer, get net 30 terms on purchases, and some vendors report on-time payments to business credit bureaus. It is the same payment term viewed from the buyer's side. Our guide to <a href="/blog/net-30-vendor-accounts">net 30 vendor accounts</a> explains how they work.</p>

<p>Net 30 payment terms are simple once they are written down clearly: 30 calendar days from the invoice date, the exact due date printed on the invoice and reminders on schedule. To create an invoice with net 30 terms, a visible due date and clean totals, use our <a href="/invoice-generator">free invoice generator</a>. It needs no sign-up, builds the PDF right in your browser and lets you download it instantly.</p>
`,
  },
  {
    slug: "2-10-net-30",
    title: "2/10 Net 30: Meaning, Calculation and Real Cost",
    description:
      "2/10 net 30 explained: what it means, how to calculate the discount, the effective annual rate (about 37%) with a worked example, and invoice wording to copy.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["early-payment-discount", "net-30-payment-terms", "dynamic-discounting"],
    faqs: [
      {
        q: "Is 2/10 net 30 a good deal for the buyer?",
        a: "Usually yes. Paying 20 days early to save 2% works out to an annualized return of roughly 37% using the simple formula, far more than most savings accounts or even the interest on a typical business credit line. If the buyer has spare cash, or can borrow at a rate below that, taking the discount is almost always worth it. Buyers short on cash may still skip it.",
      },
      {
        q: "Does the 2% discount apply to sales tax and shipping?",
        a: "It depends on your terms. Many sellers apply the discount only to the merchandise or service subtotal, not to sales tax or freight, and say so on the invoice. Sales tax treatment of cash discounts also varies by state, so check your state revenue department's guidance. To avoid confusion, print the exact discounted amount the customer may pay by the discount date.",
      },
      {
        q: "What happens if a customer takes the discount after day 10?",
        a: "This is called an unearned discount. You can bill the customer for the short payment, deduct it from a future credit, or decide to let it go for a valuable account. Whatever you choose, be consistent and document it. Clear wording that shows the discount deadline as a calendar date makes unearned discounts much less common and easier to challenge politely.",
      },
      {
        q: "How do you record a 2/10 net 30 discount in the books?",
        a: "A seller usually records the full sale as revenue and accounts receivable, then records the discount taken as a sales discount, a contra-revenue account, when the customer pays early. A buyer records the purchase and, if paid within the window, records a purchase discount or reduces inventory cost. Your accounting software or bookkeeper can set up the matching accounts.",
      },
      {
        q: "What is the formula for the cost of a 2/10 net 30 discount?",
        a: "The common simple formula is discount percent divided by (100 minus discount percent), multiplied by 365 divided by (full term minus discount period). For 2/10 net 30 that is 2 / 98 x 365 / 20, or about 37.2% a year. Some textbooks use 360 days, giving about 36.7%. The compounded version is higher, at about 44.6%.",
      },
      {
        q: "Can I offer 2/10 net 30 to consumers?",
        a: "You can, but it is uncommon. Early payment discounts are mostly a B2B practice because business buyers manage payables on a schedule and can compare the discount with their cost of money. With consumers, a simple small discount for paying upfront or by bank transfer is easier to explain than a formula-based term like 2/10 net 30.",
      },
      {
        q: "What does 2/10 EOM net 30 mean?",
        a: "EOM means end of month. Under 2/10 EOM the 10-day discount window starts at the end of the month in which the invoice is dated, not on the invoice date. So an invoice dated October 12 could be paid with the 2% discount until November 10. Exact definitions vary between industries, so spell out the dates on the invoice.",
      },
      {
        q: "Is 2/10 net 30 cheaper than invoice factoring?",
        a: "Often it is similar or cheaper, but it depends on the factor's fees and how quickly customers pay. Factoring fees are frequently quoted per 30 days, while the early payment discount is a one-off 2%. Compare the actual dollar cost on a typical invoice, and remember factoring may involve contracts, minimums and customer notification, while a discount does not.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> 2/10 net 30 is an early payment discount term. The buyer may deduct 2% from the invoice if they pay within 10 days of the invoice date; otherwise the full amount is due within 30 days. On a $10,000 invoice that means paying $9,800 by day 10 or $10,000 by day 30. For the buyer, that 2% is worth roughly 37% a year.</p>

<p>The term looks cryptic, but it is one of the oldest and most widely used trade credit terms. Sellers use it to speed up cash flow; buyers use it to cut costs. This guide explains how to read 2/10 net 30, how to calculate the discount and its effective annual rate, when it makes sense to offer it, and exactly how to word it on an invoice.</p>

<h2>What does 2/10 net 30 mean?</h2>
<p>Read it left to right:</p>
<ul>
<li><strong>2</strong> = a 2% discount.</li>
<li><strong>/10</strong> = available if paid within 10 days.</li>
<li><strong>net 30</strong> = otherwise the full (net) amount is due within 30 days.</li>
</ul>
<p>It combines a standard <a href="/blog/net-30-payment-terms">net 30 payment term</a> with an optional <a href="/blog/early-payment-discount">early payment discount</a>. The customer is never required to take the discount; it is an incentive. Other common versions follow the same pattern: 1/10 net 30, 2/15 net 45, 3/10 net 60 and 2/10 EOM net 30.</p>

<h2>How to calculate a 2/10 net 30 discount</h2>
<p>The math on a single invoice is simple:</p>
<ol>
<li>Take the amount eligible for the discount (usually the subtotal of goods or services).</li>
<li>Multiply by 2% (0.02) to get the discount.</li>
<li>Subtract the discount to get the amount payable by day 10.</li>
<li>Work out the discount deadline: invoice date plus 10 days.</li>
<li>Work out the final due date: invoice date plus 30 days.</li>
</ol>
<table>
<thead><tr><th>Invoice amount</th><th>2% discount</th><th>Pay by day 10</th><th>Pay by day 30</th></tr></thead>
<tbody>
<tr><td>$1,000</td><td>$20</td><td>$980</td><td>$1,000</td></tr>
<tr><td>$5,000</td><td>$100</td><td>$4,900</td><td>$5,000</td></tr>
<tr><td>$10,000</td><td>$200</td><td>$9,800</td><td>$10,000</td></tr>
<tr><td>$50,000</td><td>$1,000</td><td>$49,000</td><td>$50,000</td></tr>
</tbody>
</table>

<h2>What is the effective annual rate of 2/10 net 30?</h2>
<p>This is the number that makes the term interesting. If a buyer skips the discount, they keep their money for 20 extra days (day 10 to day 30) at a price of 2% of the invoice. Expressed as an annual rate, that is expensive borrowing.</p>
<h3>Simple formula</h3>
<p>Cost of not taking the discount = discount % / (100% minus discount %) x 365 / (full term minus discount period)</p>
<p>For 2/10 net 30: 2 / 98 x 365 / 20 = 0.020408 x 18.25 = <strong>about 37.2% per year</strong>. Textbooks that use a 360-day year get about 36.7%.</p>
<h3>Compounded formula</h3>
<p>If you assume the buyer could repeat this every 20 days, the effective annual rate is (1 + 2/98) raised to the power 365/20, minus 1, which is <strong>about 44.6%</strong>.</p>
<h3>Effective annual cost of common discount terms</h3>
<table>
<thead><tr><th>Term</th><th>Extra days of credit</th><th>Simple annual rate</th></tr></thead>
<tbody>
<tr><td>1/10 net 30</td><td>20</td><td>About 18.4%</td></tr>
<tr><td>2/10 net 30</td><td>20</td><td>About 37.2%</td></tr>
<tr><td>2/10 net 45</td><td>35</td><td>About 21.3%</td></tr>
<tr><td>2/10 net 60</td><td>50</td><td>About 14.9%</td></tr>
<tr><td>3/15 net 45</td><td>30</td><td>About 37.6%</td></tr>
</tbody>
</table>
<p>The takeaway for buyers: if you can pay early using cash earning less than about 37%, or borrow at a lower rate, taking a 2/10 net 30 discount is a strong return. For sellers, it means offering 2/10 net 30 is a fairly costly way to raise cash, so it needs to solve a real problem.</p>

<h2>Worked example: seller and buyer view</h2>
<p>A packaging supplier invoices a bakery $8,400.00 on October 29, 2026, with terms 2/10 net 30. The discount applies to the goods subtotal of $8,000.00, not to $400.00 of freight.</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Printed cake boxes, 10 in</td><td>2,000</td><td>$1.85</td><td>$3,700.00</td></tr>
<tr><td>Kraft pastry bags, medium</td><td>10,000</td><td>$0.23</td><td>$2,300.00</td></tr>
<tr><td>Custom logo stickers, roll of 1,000</td><td>20</td><td>$100.00</td><td>$2,000.00</td></tr>
<tr><td colspan="3"><strong>Goods subtotal</strong></td><td>$8,000.00</td></tr>
<tr><td colspan="3">Freight (not discountable)</td><td>$400.00</td></tr>
<tr><td colspan="3"><strong>Invoice total</strong></td><td>$8,400.00</td></tr>
<tr><td colspan="3">2% discount on goods if paid by November 8, 2026</td><td>-$160.00</td></tr>
<tr><td colspan="3"><strong>Pay $8,240.00 by Nov 8, or $8,400.00 by Nov 28, 2026</strong></td><td></td></tr>
</tbody>
</table>
<p><strong>Buyer:</strong> The bakery has the cash and pays $8,240 on November 6. It saves $160 for paying 22 days early; at the simple rate that is about a 37% annualized return.</p>
<p><strong>Seller:</strong> The supplier gives up $160 but receives cash about 20 days sooner. If its credit line costs 9% a year, borrowing $8,240 for 20 days would cost roughly $41. So the discount is costing about $119 more than borrowing. It is worth it only if the supplier cannot borrow, needs the cash urgently, or the discount also reduces late payments and collection effort.</p>

<h2>Should you offer 2/10 net 30?</h2>
<h3>When it makes sense</h3>
<ul>
<li>Your gross margin is healthy enough to absorb 2% on a portion of sales.</li>
<li>Cash is tight and the alternative is expensive financing or <a href="/blog/invoice-discounting-vs-factoring">invoice factoring</a>.</li>
<li>Your industry expects it (wholesale distribution, building supplies, some manufacturing).</li>
<li>Customers are slow payers and you want to change behavior.</li>
</ul>
<h3>When to avoid it</h3>
<ul>
<li>Thin margins (2% may be a large share of your profit; see <a href="/blog/average-profit-margin-by-industry">average profit margins by industry</a>).</li>
<li>Customers who already pay fast, where you would just be giving money away.</li>
<li>Accounts likely to take the discount late and dispute the short payment.</li>
</ul>
<p>A flexible alternative used by larger buyers is <a href="/blog/dynamic-discounting">dynamic discounting</a>, where the discount slides depending on how early the invoice is paid.</p>

<h2>How to write 2/10 net 30 on an invoice</h2>
<p>Never rely on the customer to do the math. Show the term, the discount amount, the discount deadline and the final due date:</p>
<ul>
<li>"Terms: 2/10 Net 30. Deduct $160.00 if paid by November 8, 2026. Full balance of $8,400.00 due November 28, 2026."</li>
<li>"Early payment discount: 2% of goods subtotal if payment is received (not sent) within 10 days of the invoice date."</li>
<li>"Discount applies to goods only; excludes freight and sales tax."</li>
<li>"Discounts taken after the discount date will be rebilled."</li>
</ul>
<p>For the general rules on showing price reductions, see <a href="/blog/discount-on-invoice">how to show a discount on an invoice</a>. Our <a href="/invoice-generator">free invoice generator</a> lets you add a payment terms line and notes, so you can print the discounted amount clearly.</p>

<h2>Steps to roll out early payment terms</h2>
<ol>
<li>Calculate how much 2% would cost if every eligible customer took it.</li>
<li>Decide which customers and which charges (goods, services, freight, tax) are eligible.</li>
<li>Define "paid": payment received in your account, or payment sent.</li>
<li>Update your quote, contract and <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions</a>.</li>
<li>Add the discount date and amount to every invoice.</li>
<li>Set up accounting for sales discounts so revenue reports stay accurate.</li>
<li>Review after three months: did average collection time fall enough to justify the cost?</li>
</ol>

<h2>Should a buyer take a 2/10 net 30 discount?</h2>
<p>If you are on the paying side, the decision comes down to comparing the discount's annualized return with your cost of money.</p>
<ol>
<li><strong>Check you have the cash.</strong> Paying early must not leave you short for payroll, rent or taxes.</li>
<li><strong>Compare rates.</strong> If your savings earn 4% and your credit line costs 10%, a 37% annualized return wins easily.</li>
<li><strong>Confirm the deadline.</strong> Is it payment sent or payment received? ACH transfers can take one to three business days; see <a href="/blog/how-long-does-ach-take">how long ACH takes</a>.</li>
<li><strong>Pay the exact discounted amount</strong> and quote the invoice number so the seller can apply it cleanly.</li>
<li><strong>Record the discount</strong> as a purchase discount so your costs are accurate.</li>
</ol>
<p>Accounts payable teams that track discounts captured versus discounts missed often find meaningful savings. The <a href="/blog/accounts-payable-kpis">accounts payable KPIs</a> guide covers that metric, and our <a href="/blog/accounts-payable-aging-report">accounts payable aging report</a> guide shows how to spot invoices still inside their discount window.</p>

<h2>How to record 2/10 net 30 in the books</h2>
<p>Using the bakery example above, here is a simplified view of the entries when the discount is taken. Your accountant may use slightly different account names.</p>
<table>
<thead><tr><th>Who</th><th>When</th><th>Entry</th></tr></thead>
<tbody>
<tr><td>Seller</td><td>Invoice issued</td><td>Debit accounts receivable $8,400; credit sales $8,000 and freight income $400</td></tr>
<tr><td>Seller</td><td>Paid on day 8</td><td>Debit cash $8,240 and sales discounts $160; credit accounts receivable $8,400</td></tr>
<tr><td>Buyer</td><td>Invoice received</td><td>Debit inventory or supplies $8,000 and freight-in $400; credit accounts payable $8,400</td></tr>
<tr><td>Buyer</td><td>Paid on day 8</td><td>Debit accounts payable $8,400; credit cash $8,240 and purchase discounts (or inventory) $160</td></tr>
</tbody>
</table>
<p>Sales tax is a separate question. Some states let the seller reduce taxable sales by cash discounts actually taken, while others do not, so check your state revenue department's guidance or use our <a href="/blog/how-to-calculate-sales-tax">sales tax calculation guide</a> and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> before invoicing taxable goods. This is general information, not tax advice.</p>

<h3>2/10 net 30 vs other ways to get paid faster</h3>
<table>
<thead><tr><th>Option</th><th>Typical cost to seller</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>2/10 net 30 discount</td><td>2% of eligible sales, only when taken</td><td>Customer chooses; no paperwork</td></tr>
<tr><td>Shorter terms (net 15)</td><td>None directly</td><td>Some buyers will ignore it</td></tr>
<tr><td>Deposits and milestones</td><td>None directly</td><td>Best for projects</td></tr>
<tr><td>Card or online payment links</td><td>Processing fees, often around 3%</td><td>Faster, but fees apply to every payment</td></tr>
<tr><td>Factoring or invoice financing</td><td>Fees set by the provider</td><td>Compare total cost per invoice</td></tr>
</tbody>
</table>

<h2>Common mistakes with 2/10 net 30</h2>
<ul>
<li><strong>No calendar dates.</strong> "2/10 net 30" alone invites late discounts.</li>
<li><strong>Discounting tax and shipping by accident.</strong> Decide and state what is eligible.</li>
<li><strong>Not tracking unearned discounts.</strong> Small short-payments add up quickly.</li>
<li><strong>Confusing it with a trade discount.</strong> A trade discount is a price reduction shown on the invoice line; 2/10 net 30 is a conditional payment discount.</li>
<li><strong>Offering it without checking margins.</strong> On a 10% net margin, 2% is a fifth of your profit.</li>
<li><strong>Recording only the net amount as revenue</strong> without a policy for discounts not taken, which makes reports inconsistent.</li>
</ul>

<p>Used deliberately, 2/10 net 30 can shorten your collection cycle and reward good customers, but it is roughly 37% annualized money, so price it in and word it precisely. To put 2/10 net 30 terms, the discount deadline and the full due date on a clean invoice, use our <a href="/invoice-generator">free invoice generator</a>: no sign-up, nothing to install, and you download a finished PDF built right in your browser.</p>
`,
  },
  {
    slug: "progress-billing",
    title: "Progress Billing: Percent Complete vs Milestone (Examples)",
    description:
      "Progress billing explained: how percent-complete and milestone billing work, schedule of values, retainage and change orders, with a worked invoice example.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["construction-invoice-guide", "aia-g702-g703-billing", "retainage-invoice"],
    faqs: [
      {
        q: "Is progress billing the same as milestone billing?",
        a: "Milestone billing is one type of progress billing. Progress billing is the umbrella term for invoicing a long project in stages. With milestone billing you bill fixed amounts when defined events happen, such as foundation poured or design approved. With percent-complete billing you bill each period for the share of each line item finished. Many contracts mix both.",
      },
      {
        q: "How often should I send progress invoices?",
        a: "Follow the contract. Monthly is the most common cycle in construction, often with a pay application due on a set day such as the 25th so the owner can review it before month end. For milestone billing you invoice when each milestone is reached. If the contract is silent, monthly billing is a good default for projects longer than two months.",
      },
      {
        q: "What is overbilling in progress billing?",
        a: "Overbilling, also called billings in excess of costs and estimated earnings, happens when you have invoiced more than the value of work actually completed. Some front-loading is common, but large overbillings can be challenged by the owner, create cash you may owe back, and show up as a liability on your financial statements. Bill for work actually in place.",
      },
      {
        q: "Can progress billing include stored materials?",
        a: "Often yes, if the contract allows it. Many construction contracts let you bill for materials delivered and stored on site, or sometimes off site, before they are installed. Owners usually require proof such as supplier invoices, photos, insurance and bills of lading, and sometimes title transfer. Show stored materials in a separate column so the owner can see what is installed and what is not.",
      },
      {
        q: "Do freelancers and agencies use progress billing?",
        a: "Yes. Agencies, software developers, consultants and video producers often bill large fixed-fee projects in stages, such as 30% at kickoff, 40% at first delivery and 30% at final approval. That is milestone-style progress billing. It reduces the risk of doing months of work unpaid and gives the client clear checkpoints where they approve the work before paying.",
      },
      {
        q: "How is progress billing recorded in accounting?",
        a: "Each progress invoice is recorded as accounts receivable when issued. Contractors using percentage-of-completion or over-time revenue recognition then compare billings with revenue earned and record either contract assets for underbilling or contract liabilities for overbilling. Retainage held by the customer is often tracked as a separate receivable. Small contractors should agree the method with their accountant.",
      },
      {
        q: "What documents support a progress invoice?",
        a: "Typical support includes the schedule of values, a continuation sheet showing percent complete per line, approved change orders, lien waivers from you and your subcontractors, stored material invoices, photos or inspection reports, and sometimes certified payroll on public jobs. Owners and lenders often will not approve payment until the supporting documents are in the package.",
      },
      {
        q: "What if the client disputes the percent complete?",
        a: "Walk the site or review deliverables with the client or architect, agree a revised figure line by line, and resubmit the invoice. Keep photos, daily logs and quantity counts to back up your numbers. Disputes are less common when the schedule of values has small, measurable line items rather than a few large lump sums that are hard to assess.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Progress billing is a way of invoicing a long project in stages instead of in one bill at the end. You either bill for the percentage of work completed in each period (percent-complete billing) or bill a set amount when a defined milestone is reached (milestone billing). Each progress invoice shows the contract value, work billed to date, any retainage and the amount due now.</p>

<p>Progress billing is standard in construction, engineering and manufacturing, and increasingly common for agencies, developers and consultants working on large fixed-fee projects. It keeps cash flowing during the job and gives the customer clear checkpoints. This guide explains both methods, the documents involved (schedule of values, pay applications, change orders, retainage), a full worked example and the mistakes that delay progress payments.</p>

<h2>What is progress billing?</h2>
<p>Progress billing (also called progress invoicing or interim billing) splits the total contract price into a series of invoices tied to work performed. Instead of carrying all costs until completion, the contractor or service provider gets paid as value is delivered. The customer, in turn, only pays for work they can see.</p>
<p>A progress invoice is different from a <a href="/blog/deposit-invoice">deposit invoice</a>, which is billed before work starts, and from a <a href="/blog/partial-payment-invoice">partial payment invoice</a>, which records the customer paying part of a single invoice. Progress billing is a planned sequence of invoices against one contract.</p>

<h2>Percent complete vs milestone billing</h2>
<table>
<thead><tr><th></th><th>Percent-complete billing</th><th>Milestone billing</th></tr></thead>
<tbody>
<tr><td>How the amount is set</td><td>% of each line item finished this period</td><td>Fixed amount per agreed event</td></tr>
<tr><td>Billing timing</td><td>Regular cycle, usually monthly</td><td>When each milestone is reached</td></tr>
<tr><td>Best for</td><td>Construction, long builds with many trades</td><td>Fixed-fee projects with clear deliverables</td></tr>
<tr><td>Main document</td><td>Schedule of values and continuation sheet</td><td>Payment schedule in the contract</td></tr>
<tr><td>Advantage</td><td>Cash flow matches work closely</td><td>Simple to explain and verify</td></tr>
<tr><td>Risk</td><td>Disputes over percentages</td><td>Long gaps without cash if a milestone slips</td></tr>
</tbody>
</table>
<p>For deliverable-based work outside construction, see our guide to <a href="/blog/milestone-payments">milestone payments</a>. For construction pay applications using the industry-standard forms, see <a href="/blog/aia-g702-g703-billing">AIA G702 and G703 billing</a>.</p>

<h2>How does percent-complete progress billing work?</h2>
<h3>1. Build a schedule of values</h3>
<p>The schedule of values (SOV) breaks the contract sum into line items, for example site work, foundations, framing, electrical, plumbing, finishes. The line values must add up to the contract sum. The owner or architect usually approves it before the first invoice.</p>
<h3>2. Measure progress each period</h3>
<p>At each billing date, estimate the percentage complete for every line, based on quantities installed, hours spent against budget or physical inspection.</p>
<h3>3. Calculate work completed to date</h3>
<p>Line value x percent complete = value of work completed to date. Add materials stored if the contract allows.</p>
<h3>4. Subtract retainage and previous billings</h3>
<p>Many contracts hold back a percentage, often 5% or 10%, as <a href="/blog/retainage-invoice">retainage</a>. Amount due this period = total completed and stored to date, minus retainage, minus amounts previously billed.</p>
<h3>5. Attach support and submit</h3>
<p>Include change orders, lien waivers and stored material backup. Submit by the contract's pay application date.</p>

<h2>Worked example: a $120,000 remodel billed by percent complete</h2>
<p>A contractor has a $120,000 contract with 10% retainage. Previous billing (application #1) totaled $30,000 of completed work, so $27,000 was billed after retainage. Here is application #2.</p>
<table>
<thead><tr><th>Line item</th><th>Scheduled value</th><th>% complete to date</th><th>Completed to date</th></tr></thead>
<tbody>
<tr><td>Demolition and site prep</td><td>$10,000</td><td>100%</td><td>$10,000</td></tr>
<tr><td>Framing and structural</td><td>$25,000</td><td>100%</td><td>$25,000</td></tr>
<tr><td>Plumbing rough and finish</td><td>$15,000</td><td>60%</td><td>$9,000</td></tr>
<tr><td>Electrical rough and finish</td><td>$14,000</td><td>50%</td><td>$7,000</td></tr>
<tr><td>Drywall and paint</td><td>$16,000</td><td>25%</td><td>$4,000</td></tr>
<tr><td>Cabinets and countertops</td><td>$28,000</td><td>0%</td><td>$0</td></tr>
<tr><td>Flooring and trim</td><td>$12,000</td><td>0%</td><td>$0</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$120,000</strong></td><td><strong>45.8%</strong></td><td><strong>$55,000</strong></td></tr>
</tbody>
</table>
<table>
<thead><tr><th>Summary</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Total completed to date</td><td>$55,000.00</td></tr>
<tr><td>Less 10% retainage</td><td>-$5,500.00</td></tr>
<tr><td>Total earned less retainage</td><td>$49,500.00</td></tr>
<tr><td>Less previous billings</td><td>-$27,000.00</td></tr>
<tr><td><strong>Current payment due</strong></td><td><strong>$22,500.00</strong></td></tr>
<tr><td>Balance to finish, including retainage</td><td>$70,500.00</td></tr>
</tbody>
</table>
<p>The balance to finish ($120,000 minus $49,500 earned less retainage) shows the owner how much remains, including the $5,500 retainage that will be released at completion.</p>

<h2>Worked example: milestone billing for a software project</h2>
<p>A developer quotes a fixed $36,000 for a customer portal and agrees this schedule:</p>
<table>
<thead><tr><th>Milestone</th><th>%</th><th>Invoice amount</th></tr></thead>
<tbody>
<tr><td>Contract signed and kickoff</td><td>20%</td><td>$7,200</td></tr>
<tr><td>Designs approved</td><td>20%</td><td>$7,200</td></tr>
<tr><td>Beta delivered to staging</td><td>35%</td><td>$12,600</td></tr>
<tr><td>Launch and acceptance</td><td>25%</td><td>$9,000</td></tr>
<tr><td><strong>Total</strong></td><td><strong>100%</strong></td><td><strong>$36,000</strong></td></tr>
</tbody>
</table>
<p>Each milestone invoice should reference the contract, name the milestone, show the amount billed to date and the remaining balance. That makes approval quick for the client's finance team. You can set each milestone up as a line in our <a href="/invoice-generator">free invoice generator</a> and add a note showing billed to date and balance remaining.</p>

<h2>What should a progress invoice include?</h2>
<ul>
<li>Invoice number, date, due date and the project name, address and contract or PO number.</li>
<li>Application or billing period number (for example, "Progress billing #3, period ending October 31, 2026").</li>
<li>Original contract sum, approved change orders and revised contract sum.</li>
<li>Work completed this period and to date, by line item or milestone.</li>
<li>Stored materials, if billed.</li>
<li>Retainage held to date.</li>
<li>Previous billings and the current amount due.</li>
<li>Balance to finish.</li>
<li>Payment terms and remittance details.</li>
</ul>
<p>Our <a href="/blog/construction-invoice-guide">construction invoice guide</a> and <a href="/blog/contractor-invoice-template">contractor invoice template</a> show these fields laid out. For trade-specific layouts, see the <a href="/blog/remodeling-invoice-template">remodeling invoice template</a> and the <a href="/blog/construction-subcontractor-invoice-template">subcontractor invoice template</a>.</p>

<h2>How to handle change orders in progress billing</h2>
<p>Approved change orders adjust the contract sum. Add each one as its own line on the schedule of values (or summarize them in a change order section) so its progress can be billed separately. Do not bill unapproved change orders as part of the contract; list them as pending in a cover note instead. Owners reject pay applications that mix the two.</p>

<h2>Progress billing checklist</h2>
<ol>
<li>Agree the method (percent complete, milestones or a mix) in the contract.</li>
<li>Agree the billing date, approval process, payment terms and retainage rate.</li>
<li>Get the schedule of values or milestone schedule approved before work starts.</li>
<li>Track progress with evidence: photos, quantities, timesheets.</li>
<li>Prepare the invoice with to-date figures, not just this period's work.</li>
<li>Attach change orders, <a href="/blog/lien-waiver">lien waivers</a> and stored material support.</li>
<li>Submit on time and follow up on approval.</li>
<li>Reconcile payments received against each application.</li>
</ol>

<h2>How does progress billing affect cash flow and accounting?</h2>
<p>Progress billing exists because long projects create a cash gap. A contractor pays crews weekly and suppliers on 30-day terms, but the owner might not pay a pay application until 30 days after approval. Without progress invoices, the contractor would carry the entire project cost until handover.</p>
<h3>Cash flow example</h3>
<p>Take the $120,000 remodel above, built over four months with costs of about $105,000 spread evenly ($26,250 a month). If the contractor billed only at completion on net 30, it would be out of pocket the full $105,000 for up to five months. With monthly progress billing and 10% retainage, the maximum cash gap shrinks to roughly one month of costs plus retainage. That is the difference between needing a large credit line and needing a small one.</p>
<h3>Overbilling and underbilling</h3>
<p>Accountants compare what you have billed with the revenue you have actually earned on the job (usually measured by costs incurred against total estimated costs):</p>
<table>
<thead><tr><th>Situation</th><th>What it means</th><th>Balance sheet effect</th></tr></thead>
<tbody>
<tr><td>Billings exceed earned revenue</td><td>Overbilled: the customer has paid ahead of the work</td><td>Contract liability</td></tr>
<tr><td>Earned revenue exceeds billings</td><td>Underbilled: you have done work not yet invoiced</td><td>Contract asset</td></tr>
</tbody>
</table>
<p>Persistent underbilling usually means you are slow to invoice or the schedule of values is back-loaded. Persistent overbilling can hide a job that is losing money. Lenders and bonding companies look closely at both, so review a work-in-progress schedule monthly. Our guide to <a href="/blog/cash-flow-management">cash flow management</a> covers the wider picture.</p>

<h2>Progress billing outside construction</h2>
<p>The same principle works for any large job with a long timeline:</p>
<ul>
<li><strong>Agencies and studios:</strong> branding or website projects split into discovery, design, build and launch stages.</li>
<li><strong>Software development:</strong> sprints or releases billed on acceptance, often with a <a href="/blog/statement-of-work-template">statement of work</a> defining each milestone.</li>
<li><strong>Manufacturing and fabrication:</strong> custom equipment billed at order, at factory acceptance test and at delivery.</li>
<li><strong>Consulting:</strong> phased engagements with a fixed fee per phase.</li>
<li><strong>Events:</strong> planners billing a booking fee, a mid-point payment and a final balance.</li>
</ul>
<p>Outside construction there is usually no schedule of values or retainage, but the invoice should still show the total project fee, amounts billed to date and the remaining balance. That running total is what makes a progress invoice easy to approve. If the client also reimburses costs, add them as separate lines following our <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses invoice</a> guide.</p>

<h2>Common progress billing mistakes</h2>
<ul>
<li><strong>Front-loading heavily.</strong> Inflating early line items gets noticed and can trigger closer review of every application.</li>
<li><strong>Math that does not tie.</strong> To-date columns must equal previous plus this period. One error can bounce the whole package.</li>
<li><strong>Billing unapproved changes.</strong> Keep them separate until signed.</li>
<li><strong>Forgetting retainage.</strong> Track it so you remember to invoice its release.</li>
<li><strong>Missing the pay app deadline.</strong> A few days late can mean waiting another month.</li>
<li><strong>Too few line items.</strong> Large lump sums are hard to assess and easy to dispute.</li>
</ul>

<p>Progress billing turns one big, risky invoice into a predictable series of smaller ones, as long as your schedule of values, retainage and to-date math are clear. For milestone or stage invoices with professional layout, try our <a href="/invoice-generator">free invoice generator</a> or browse the <a href="/invoice-templates">invoice templates</a>. The generator is free, needs no sign-up and builds a downloadable PDF in your browser.</p>
`,
  },
  {
    slug: "retainage-invoice",
    title: "Retainage: How It Works and How to Show It on Invoices",
    description:
      "Retainage explained: typical 5-10% rates, federal and state limits, how to show retainage on a progress invoice, and how to bill for its release, with examples.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["progress-billing", "construction-invoice-guide", "lien-waiver"],
    faqs: [
      {
        q: "Is retainage the same as a retainer?",
        a: "No. Retainage is money the customer holds back from each progress payment on a construction or similar project until the work is complete. A retainer is money a client pays in advance to secure a professional's time or services, common with lawyers, consultants and freelancers. Retainage protects the payer; a retainer protects the service provider. They are recorded very differently in the books.",
      },
      {
        q: "Is retainage taxable income when billed or when paid?",
        a: "It depends on your accounting method and contract accounting rules. Cash-basis taxpayers generally recognize income when it is received. Accrual-basis contractors, and those using the percentage-of-completion method for long-term contracts, may need to account for it differently. Retainage rules can be technical, so confirm the treatment with a tax professional familiar with construction. This is general information, not tax advice.",
      },
      {
        q: "Can a subcontractor charge interest on late retainage?",
        a: "Sometimes. Many states' prompt payment laws set deadlines for releasing retainage after completion and allow interest on late payments, especially on public projects. Whether this applies to your job depends on the state, whether the project is public or private and your contract. Check your state's prompt payment statute and your subcontract before demanding interest.",
      },
      {
        q: "What is retainage reduction?",
        a: "Retainage reduction is when the retention rate drops partway through the project, typically once the job is 50% complete and progress is satisfactory. For example, an owner may hold 10% until the halfway point and 5% or nothing on later payments. Some state laws require this on public work. The contract should state when and how reduction happens.",
      },
      {
        q: "Does retainage apply to change orders?",
        a: "Usually yes. Unless the contract says otherwise, approved change order work is billed through the same pay application process and the same retainage percentage is held on it. If you negotiate a change order with no retainage, write that into the signed change order, because the default treatment is to retain on all completed work.",
      },
      {
        q: "Can retainage be replaced with a bond or escrow?",
        a: "In some states and on some projects, contractors can substitute securities, a retention bond or an escrow account for cash retainage, which frees up cash while still protecting the owner. Public projects in several states allow this by statute. Ask the owner or check the contract and state law before bidding, since it affects your cash flow planning.",
      },
      {
        q: "How long does it take to get retainage released?",
        a: "Commonly between 30 and 90 days after substantial or final completion, but it varies widely. Release often waits for punch list completion, final inspection, closeout documents and lien waivers from everyone on the job. Subcontractors who finish early may wait months for the whole project to close. Some state laws set maximum release deadlines.",
      },
      {
        q: "Should retainage be shown as a negative line on the invoice?",
        a: "Yes, on progress invoices retainage is normally shown as a deduction from work completed to date, with the cumulative amount held clearly labeled. The final retainage release is then billed as a positive line on a separate invoice. Showing both the current period and to-date retainage makes reconciliation easy for you and the customer's accounts payable team.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Retainage (also called retention) is a percentage of each progress payment, usually 5% to 10%, that the project owner or general contractor holds back until the work is substantially or fully complete. It gives the payer leverage to make sure the job is finished properly. The contractor shows it as a deduction on each progress invoice and then bills for its release at the end.</p>

<p>For contractors and subcontractors, retainage can be a large part of profit sitting in someone else's bank account for months. Getting it right on every invoice, and knowing when and how to ask for it back, matters. This guide explains how retainage works, typical rates and legal limits, how to show it on a progress invoice and how to invoice for retainage release.</p>

<h2>What is retainage in construction?</h2>
<p>Retainage is a contractual holdback. On each <a href="/blog/progress-billing">progress billing</a>, the customer pays the value of work completed minus a set percentage. The amounts held accumulate until a defined event, typically substantial completion, final completion or acceptance, when the balance is released.</p>
<p>It flows down the chain: the owner withholds from the general contractor, and the general contractor usually withholds the same or a similar rate from subcontractors. Suppliers of materials are less often subject to it.</p>
<h3>Why owners use retainage</h3>
<ul>
<li>Incentive to finish the punch list and closeout documents.</li>
<li>A fund to fix defects or complete work if the contractor walks away.</li>
<li>Protection against <a href="/blog/mechanics-lien">mechanics liens</a> from unpaid subcontractors.</li>
</ul>

<h2>How much is retainage?</h2>
<p>Rates are set by the contract within any legal limits. Common patterns:</p>
<table>
<thead><tr><th>Setting</th><th>Typical approach</th></tr></thead>
<tbody>
<tr><td>US federal construction contracts</td><td>FAR 52.232-5 allows the contracting officer to retain up to 10% of a progress payment when progress is not satisfactory; it is not meant to be automatic</td></tr>
<tr><td>State public projects</td><td>Many states cap retainage at 5% or 10%, and some require reducing it after 50% completion</td></tr>
<tr><td>Private commercial projects</td><td>Often 5% to 10% by contract; some states cap private retention too (California, for example, caps it at 5% on many private works)</td></tr>
<tr><td>Residential remodels</td><td>Less common; sometimes a small final payment is held until the punch list is done</td></tr>
</tbody>
</table>
<p>Rules vary a lot by state and by public versus private work, and they change, so check the current statute and your contract. For federal work, the rule is in <a href="https://www.acquisition.gov/far/52.232-5">FAR 52.232-5</a> and guidance in <a href="https://www.acquisition.gov/far/32.103">FAR 32.103</a>. Florida's public works statute, for instance, allows up to 10% until the project is 50% complete and then requires reducing it to 5%. This is general information, not legal advice.</p>

<h2>How to calculate retainage on a progress invoice</h2>
<ol>
<li>Work out the value of work completed to date (plus stored materials if allowed).</li>
<li>Multiply by the retainage rate to get total retainage held to date.</li>
<li>Subtract retainage from the completed value to get total earned less retainage.</li>
<li>Subtract what you previously billed (net of retainage).</li>
<li>The result is the current amount due.</li>
</ol>
<h3>Worked example over three pay applications</h3>
<p>A subcontractor has an $80,000 electrical subcontract with 10% retainage, reduced to 5% after 50% completion (with previously held retainage left in place for simplicity).</p>
<table>
<thead><tr><th>Pay app</th><th>Completed to date</th><th>Retainage held to date</th><th>Earned less retainage</th><th>Previously billed</th><th>Due this period</th></tr></thead>
<tbody>
<tr><td>#1</td><td>$20,000</td><td>$2,000 (10%)</td><td>$18,000</td><td>$0</td><td>$18,000</td></tr>
<tr><td>#2</td><td>$40,000</td><td>$4,000 (10%)</td><td>$36,000</td><td>$18,000</td><td>$18,000</td></tr>
<tr><td>#3</td><td>$64,000</td><td>$5,200 ($4,000 + 5% of $24,000)</td><td>$58,800</td><td>$36,000</td><td>$22,800</td></tr>
<tr><td>#4</td><td>$80,000</td><td>$6,000 ($4,000 + 5% of $40,000)</td><td>$74,000</td><td>$58,800</td><td>$15,200</td></tr>
<tr><td>Release</td><td>$80,000</td><td>$0</td><td>$80,000</td><td>$74,000</td><td>$6,000</td></tr>
</tbody>
</table>
<p>By the end, $6,000 (7.5% of the subcontract) is held. If the subcontractor's profit margin on the job is 10%, retainage is three-quarters of the profit, which is why release timing matters so much for cash flow.</p>

<h2>How to show retainage on an invoice</h2>
<p>Use a summary block under the line items. Here is how pay application #3 above could look:</p>
<table>
<thead><tr><th>Description</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Original subcontract sum</td><td>$80,000.00</td></tr>
<tr><td>Approved change orders</td><td>$0.00</td></tr>
<tr><td>Work completed to date (80%)</td><td>$64,000.00</td></tr>
<tr><td>Retainage held to date (10% to 50%, then 5%)</td><td>-$5,200.00</td></tr>
<tr><td>Total earned less retainage</td><td>$58,800.00</td></tr>
<tr><td>Less previous applications (#1, #2)</td><td>-$36,000.00</td></tr>
<tr><td><strong>Current amount due</strong></td><td><strong>$22,800.00</strong></td></tr>
<tr><td>Balance to finish including retainage</td><td>$21,200.00</td></tr>
</tbody>
</table>
<p>Tips:</p>
<ul>
<li>Label it clearly: "Retainage held to date" rather than just "Less 10%."</li>
<li>Show cumulative figures so each invoice stands on its own.</li>
<li>Track retainage receivable separately in your books or <a href="/blog/invoice-tracker-spreadsheet">invoice tracker</a>, not mixed with ordinary overdue amounts.</li>
<li>If you use AIA forms, retainage appears on the G702 summary and G703 continuation sheet; see <a href="/blog/aia-g702-g703-billing">AIA G702/G703 billing</a>.</li>
</ul>

<h2>How to invoice for retainage release</h2>
<p>Retainage is not paid automatically. You usually need to ask for it with a separate invoice or final pay application once the release conditions are met.</p>
<ol>
<li><strong>Check the trigger.</strong> Substantial completion, final completion, owner acceptance or a fixed period after completion, as the contract says.</li>
<li><strong>Finish closeout items.</strong> Punch list, warranties, as-built drawings, O&amp;M manuals, attic stock, final inspections.</li>
<li><strong>Collect final lien waivers.</strong> Yours and your lower-tier subcontractors' and suppliers'. See our <a href="/blog/lien-waiver">lien waiver guide</a>.</li>
<li><strong>Issue the release invoice.</strong> Reference the contract and all pay applications, show total retainage held and request it as a single line.</li>
<li><strong>Follow up on schedule</strong> and note any statutory release deadline in your cover email.</li>
</ol>
<h3>Example retainage release invoice</h3>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Release of retainage, electrical subcontract #E-2291, Elm Street Medical Office, pay apps #1 to #4</td><td>1</td><td>$6,000.00</td></tr>
<tr><td colspan="2"><strong>Total due (Net 30)</strong></td><td><strong>$6,000.00</strong></td></tr>
</tbody>
</table>
<p>Note in the invoice: "Substantial completion certified October 15, 2026. Final unconditional lien waiver attached." You can create this kind of single-line release bill in our <a href="/invoice-generator">free invoice generator</a> in a few minutes.</p>

<h2>Common retainage mistakes</h2>
<ul>
<li><strong>Not reading the retainage clause before bidding.</strong> Price the cost of waiting into your bid.</li>
<li><strong>Calculating retainage on this period only</strong> instead of to date, which makes the totals drift.</li>
<li><strong>Forgetting to bill the release.</strong> It is surprisingly common for retainage to sit unclaimed.</li>
<li><strong>Signing an unconditional final waiver before payment.</strong> Use conditional waivers until funds clear.</li>
<li><strong>Missing statutory deadlines.</strong> Prompt payment and lien deadlines can run from completion, not from when you get around to invoicing.</li>
<li><strong>Treating retainage as a bad debt too early.</strong> It is a receivable with conditions; track it separately.</li>
</ul>

<h2>How to negotiate better retainage terms</h2>
<p>Retainage is set in the contract, which means it is negotiable before you sign, especially on private work. Options to raise:</p>
<ul>
<li><strong>A lower rate:</strong> 5% instead of 10%, particularly if you have a strong track record with the owner.</li>
<li><strong>Reduction at 50% complete:</strong> retainage drops to 5% or zero once half the work is done satisfactorily.</li>
<li><strong>Line-item release:</strong> early trades (site work, foundations, steel) get their retainage released when their scope is accepted, not at the end of the whole project.</li>
<li><strong>No retainage on materials or equipment</strong> purchased specifically for the job.</li>
<li><strong>A retention bond or escrow</strong> in place of cash holdback, where state law and the owner allow it.</li>
<li><strong>A firm release date:</strong> for example, within 30 days of substantial completion, with interest if late.</li>
<li><strong>Pay-when-paid clarity:</strong> if you are a subcontractor, understand whether your retainage depends on the owner releasing the general contractor's.</li>
</ul>

<h2>How retainage is recorded in the books</h2>
<p>Most contractors track retainage in a separate account, often called retainage receivable (for amounts customers hold from you) and retainage payable (for amounts you hold from subcontractors). Using the subcontractor example above, after pay application #3 the books would show $58,800 billed, $5,200 in retainage receivable and, once paid, nothing else open. Keeping retainage separate from ordinary accounts receivable stops it from making your <a href="/blog/days-sales-outstanding">days sales outstanding</a> look worse than it is, and makes it easy to see how much cash is locked up across all jobs.</p>
<p>A simple monthly report with each job, retainage held, the release trigger and the expected release date is often the most valuable cash flow tool a small contractor has. When a release date passes, it becomes a collection item like any other <a href="/blog/overdue-invoice">overdue invoice</a>, and the <a href="/blog/prompt-payment-act">Prompt Payment Act</a> or your state's prompt payment law may give you interest rights on public work.</p>

<h2>Retainage vs related terms</h2>
<table>
<thead><tr><th>Term</th><th>What it is</th></tr></thead>
<tbody>
<tr><td>Retainage / retention</td><td>Holdback from progress payments until completion</td></tr>
<tr><td>Retainer</td><td>Advance payment to secure a professional's services; see <a href="/blog/retainer-invoice">retainer invoice</a></td></tr>
<tr><td>Deposit</td><td>Upfront payment before work starts</td></tr>
<tr><td>Holdback (Canada)</td><td>Statutory lien holdback under provincial construction acts, similar in effect</td></tr>
<tr><td>Performance bond</td><td>Surety guarantee that the work will be finished, sometimes used instead of retainage</td></tr>
</tbody>
</table>

<p>Retainage is a normal part of construction billing, but it only works in your favor if every progress invoice shows it clearly and you chase its release as soon as the conditions are met. To produce progress and retainage release invoices with clean totals, use our <a href="/invoice-generator">free invoice generator</a>. It needs no sign-up and downloads a PDF built entirely in your browser.</p>
`,
  },
  {
    slug: "billing-cycle",
    title: "Billing Cycle: What It Is and How to Choose One",
    description:
      "What is a billing cycle? Learn how billing cycles work, monthly vs weekly vs milestone cycles, anniversary vs calendar billing and how to set one for clients.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["recurring-invoices-guide", "prorated-invoice", "net-30-payment-terms"],
    faqs: [
      {
        q: "What is the difference between a billing cycle and payment terms?",
        a: "The billing cycle is how often and for what period you invoice, for example monthly for services from the 1st to the 30th. Payment terms are how long the customer has to pay each invoice, such as net 15. A monthly billing cycle with net 30 terms means each month's work is invoiced once and paid about a month later.",
      },
      {
        q: "How long is a typical billing cycle?",
        a: "Monthly is by far the most common for ongoing services and subscriptions. Weekly or biweekly cycles are common for staffing, hourly contractors and cleaning services. Quarterly and annual cycles suit maintenance contracts and software. For credit cards, a statement period usually runs about 28 to 31 days. Choose the shortest cycle your clients will accept without friction.",
      },
      {
        q: "Can I change a client's billing cycle?",
        a: "Yes, with notice and, if you have a contract, according to its terms. Tell the client in writing when the change takes effect and send a prorated invoice for the partial period so nothing is billed twice or missed. Changing cycles mid-month is the most common source of billing errors, so double-check the dates on the transition invoice.",
      },
      {
        q: "What is a billing period?",
        a: "The billing period is the span of time an invoice covers, such as October 1 to October 31, 2026. The billing cycle is the repeating pattern of those periods. Each invoice in a recurring relationship should state its billing period clearly so the client can match it with their records and spot any overlaps or gaps.",
      },
      {
        q: "Should I bill in advance or in arrears?",
        a: "Bill in advance for fixed recurring fees like retainers, subscriptions, memberships and rent, because the client is paying for access or availability. Bill in arrears for variable work like hourly services, usage or materials, because you need the actual figures first. Many businesses combine both: a fixed fee billed in advance plus overages billed in arrears.",
      },
      {
        q: "What billing cycle works best for freelancers?",
        a: "For ongoing hourly work, biweekly or monthly cycles balance cash flow with admin time. For retainers, bill monthly in advance. For projects, use milestones instead of a calendar cycle. Weekly billing helps when you are new to a client or the hours are high, because it limits how much unpaid work can build up before you see the first payment.",
      },
      {
        q: "What does billing cycle date mean?",
        a: "The billing cycle date is the day in each cycle when the invoice or statement is generated, for example the 1st of every month or the anniversary of the sign-up date. For credit cards it is the statement closing date. Keeping this date fixed makes invoices predictable for clients and makes your own cash flow easier to forecast.",
      },
      {
        q: "How do I handle a client who starts mid-cycle?",
        a: "Either prorate the first invoice so it covers only the days remaining in the current period and then move them onto your normal cycle, or start an anniversary cycle from their start date. Proration keeps all clients on one billing date, which simplifies admin. State which approach you use in your agreement so the first invoice is not a surprise.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A billing cycle is the regular interval at which a business invoices a customer, such as weekly, monthly, quarterly or annually. Each cycle has a billing period (the dates the invoice covers) and a billing date (the day the invoice is issued). Payment terms like net 30 then set how long the customer has to pay each invoice.</p>

<p>If you have repeat clients, subscriptions or ongoing contracts, your billing cycle shapes your cash flow, your admin workload and how easy it is for clients to pay you. This guide explains what a billing cycle is, the main types, how it differs from payment terms, how to choose one for your clients and how to handle mid-cycle starts and changes.</p>

<h2>What is a billing cycle?</h2>
<p>A billing cycle is the repeating schedule of invoices for an ongoing relationship. It answers three questions:</p>
<ul>
<li><strong>How often?</strong> Weekly, biweekly, monthly, quarterly, annually or by milestone.</li>
<li><strong>Which period?</strong> The dates each invoice covers, for example October 1 to October 31.</li>
<li><strong>When is the invoice issued?</strong> At the start of the period (billing in advance) or the end (billing in arrears).</li>
</ul>
<p>You will see the term in several contexts: utility and phone bills, credit card statements, SaaS subscriptions, rent, and B2B services. In a credit card context, the billing cycle is the period between two statement closing dates, usually around a month, and the payment due date follows it.</p>

<h2>Billing cycle vs billing period vs payment terms</h2>
<table>
<thead><tr><th>Term</th><th>Meaning</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Billing cycle</td><td>How often you invoice</td><td>Monthly</td></tr>
<tr><td>Billing period</td><td>Dates one invoice covers</td><td>Oct 1 to Oct 31, 2026</td></tr>
<tr><td>Billing date</td><td>When the invoice is issued</td><td>Nov 1, 2026</td></tr>
<tr><td>Payment terms</td><td>How long the client has to pay</td><td><a href="/blog/net-30-payment-terms">Net 30</a></td></tr>
<tr><td>Due date</td><td>Billing date plus terms</td><td>Dec 1, 2026</td></tr>
</tbody>
</table>
<p>Notice the gap: work done on October 2 is paid around December 1, nearly two months later. Choosing your cycle and <a href="/blog/invoice-payment-terms">payment terms</a> together is how you control that delay.</p>

<h2>Types of billing cycles</h2>
<table>
<thead><tr><th>Cycle</th><th>Best for</th><th>Pros</th><th>Cons</th></tr></thead>
<tbody>
<tr><td>Weekly</td><td>Staffing, hourly contractors, cleaners, new clients</td><td>Fast cash, small invoices, quick dispute detection</td><td>More admin, more transaction fees</td></tr>
<tr><td>Biweekly</td><td>Contract labor, nannies, recurring trades</td><td>Matches many payroll cycles</td><td>Two invoices some months, three in others</td></tr>
<tr><td>Monthly</td><td>Retainers, subscriptions, managed services, rent</td><td>Simple, standard, easy for AP teams</td><td>Up to a month of work unbilled</td></tr>
<tr><td>Quarterly</td><td>Maintenance contracts, some software, bookkeeping</td><td>Low admin</td><td>Large invoices, slower cash</td></tr>
<tr><td>Annual</td><td>Software licenses, memberships, insurance-style services</td><td>Cash upfront, fewer cancellations</td><td>Harder sell, refunds if cancelled</td></tr>
<tr><td>Milestone</td><td>Projects with deliverables</td><td>Payment tied to progress</td><td>Irregular cash flow; see <a href="/blog/progress-billing">progress billing</a></td></tr>
</tbody>
</table>

<h2>Calendar billing vs anniversary billing</h2>
<p><strong>Calendar billing</strong> puts every client on the same dates (for example, the 1st of each month). It is easy to manage and forecast, and you prorate the first invoice for clients who start mid-month.</p>
<p><strong>Anniversary billing</strong> starts each client's cycle on their own start date (a client who signs on the 17th is billed on the 17th every month). Subscription businesses often use it because it avoids proration, but it spreads invoices across the month.</p>
<p>A small service business with a handful of clients usually finds calendar billing simpler. A subscription product with many sign-ups often uses anniversary billing, as covered in our <a href="/blog/saas-subscription-invoice-template">SaaS subscription invoice template</a> and <a href="/blog/gym-membership-invoice-template">gym membership invoice</a> guides.</p>

<h2>Billing in advance vs billing in arrears</h2>
<ul>
<li><strong>In advance:</strong> invoice at the start of the period for fixed fees (retainers, rent, memberships). The client pays for the coming month. See our <a href="/blog/retainer-invoice">retainer invoice</a> guide.</li>
<li><strong>In arrears:</strong> invoice at the end of the period for variable work (hourly services, usage, materials). See <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> and <a href="/blog/usage-based-billing-invoice">usage-based billing</a>.</li>
<li><strong>Hybrid:</strong> a fixed base fee in advance plus overages in arrears on the same invoice.</li>
</ul>

<h2>Worked example: choosing a cycle for a bookkeeping client</h2>
<p>A freelance bookkeeper takes on a client on October 17, 2026 at a $600 monthly retainer (billed in advance) plus $65 per hour for extra cleanup work (billed in arrears). She uses calendar billing on the 1st of the month with net 15 terms.</p>
<p><strong>First invoice (October 17):</strong> October has 31 days, and the client is served for 15 of them (17th to 31st). Prorated retainer = $600 x 15 / 31 = $290.32. You can check the method in our <a href="/blog/prorated-invoice">prorated invoice guide</a>.</p>
<p><strong>November 1 invoice:</strong></p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Monthly bookkeeping retainer, November 1 to 30, 2026 (in advance)</td><td>1</td><td>$600.00</td><td>$600.00</td></tr>
<tr><td>Catch-up reconciliation, October 17 to 31, 2026 (in arrears)</td><td>6.5 hrs</td><td>$65.00</td><td>$422.50</td></tr>
<tr><td colspan="3"><strong>Total due by November 16, 2026 (Net 15)</strong></td><td><strong>$1,022.50</strong></td></tr>
</tbody>
</table>
<p>From then on, every invoice goes out on the 1st, with the same layout. The client always knows when to expect it and what each line covers.</p>

<h2>How to choose a billing cycle: step by step</h2>
<ol>
<li><strong>Map your costs.</strong> If you pay staff weekly or buy materials upfront, a longer cycle means you fund the gap.</li>
<li><strong>Ask how the client pays.</strong> Many AP teams run payments on fixed days; aligning with them speeds things up.</li>
<li><strong>Decide advance or arrears</strong> for each type of charge.</li>
<li><strong>Pick calendar or anniversary dates.</strong></li>
<li><strong>Set payment terms</strong> that keep the total delay acceptable.</li>
<li><strong>Write it into the agreement</strong>, including proration, changes and cancellation. A <a href="/blog/service-agreement-template">service agreement template</a> helps.</li>
<li><strong>Automate where possible.</strong> Recurring invoices or saved templates cut the admin; see our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> and <a href="/blog/recurring-payments-small-business">recurring payments for small business</a>.</li>
<li><strong>Review every six months.</strong> Shorten the cycle for slow payers or high-volume clients.</li>
</ol>

<h2>What every recurring invoice should show</h2>
<ul>
<li>A unique invoice number (use a consistent pattern; our <a href="/tools/invoice-number-generator">invoice number generator</a> can help).</li>
<li>The billing period dates, not just the month name.</li>
<li>Whether each charge is in advance or in arrears.</li>
<li>Any proration, with the calculation.</li>
<li>Payment terms and the exact due date.</li>
<li>The next billing date, if helpful.</li>
</ul>
<p>For clients with many invoices, a monthly <a href="/blog/statement-of-account">statement of account</a> summarizing open items is a useful companion. Our guide on <a href="/blog/invoice-vs-statement">invoice vs statement</a> explains when to send each.</p>

<h2>How does your billing cycle affect cash flow?</h2>
<p>The real delay between doing work and getting paid is roughly the average time from work to invoice plus the payment terms plus any lateness. Here is the same $8,000 a month of hourly work under three setups, assuming clients pay exactly on time:</p>
<table>
<thead><tr><th>Setup</th><th>Average days from work to invoice</th><th>Terms</th><th>Average days to cash</th><th>Typical unpaid balance</th></tr></thead>
<tbody>
<tr><td>Monthly in arrears, net 30</td><td>15</td><td>30</td><td>45</td><td>About $12,000</td></tr>
<tr><td>Biweekly in arrears, net 15</td><td>7</td><td>15</td><td>22</td><td>About $5,900</td></tr>
<tr><td>Weekly in arrears, net 7</td><td>3.5</td><td>7</td><td>10.5</td><td>About $2,800</td></tr>
</tbody>
</table>
<p>The unpaid balance is approximately monthly billing x days to cash / 30. Moving from monthly net 30 to biweekly net 15 frees about $6,000 of cash permanently, without charging a cent more. The tradeoff is more invoices to send and track, which is why many small businesses settle on monthly for retainer clients and biweekly for hourly ones.</p>

<h2>Billing cycles in other contexts</h2>
<h3>Credit card billing cycle</h3>
<p>On a credit card, the billing cycle is the period between two statement closing dates. Purchases made during the cycle appear on that statement, and the payment due date comes after the closing date. US federal rules (Regulation Z) generally require card issuers to set the due date on the same day each month and to mail or deliver statements at least 21 days before the due date. If you pay business expenses on a card, knowing your closing date helps you time large purchases.</p>
<h3>Utility and phone billing cycles</h3>
<p>Utilities usually bill monthly in arrears based on meter readings, while phone and internet providers often bill a flat plan in advance plus usage in arrears, a hybrid cycle much like the one in the bookkeeping example above.</p>
<h3>Subscription and membership cycles</h3>
<p>Subscription businesses commonly offer monthly and annual cycles side by side, with a discount for paying annually upfront. Annual billing improves cash flow and retention but requires a clear refund and cancellation policy.</p>
<p>Whatever the context, the billing cycle is the backbone of recurring revenue. Once it is set, you can build a reusable invoice in our <a href="/invoice-generator">free invoice generator</a> and simply update the billing period and invoice number each cycle.</p>

<h2>Common billing cycle mistakes</h2>
<ul>
<li><strong>Inconsistent billing dates.</strong> Invoicing on the 3rd one month and the 19th the next makes clients slower to pay.</li>
<li><strong>No billing period on the invoice.</strong> Clients cannot tell whether a charge is new or a duplicate.</li>
<li><strong>Double billing at a cycle change.</strong> Prorate carefully when moving a client to new dates.</li>
<li><strong>Too long a cycle for variable work.</strong> A quarter of unbilled hours is a big credit risk.</li>
<li><strong>Not stating advance vs arrears.</strong> Clients may think a retainer covers last month.</li>
<li><strong>Forgetting price changes.</strong> Give notice before a new rate takes effect at the next cycle.</li>
</ul>

<p>A clear billing cycle makes your income predictable and your invoices easy to approve. Pick the cycle, put the billing period and due date on every invoice and keep the dates consistent. When you are ready to send the next one, our <a href="/invoice-generator">free invoice generator</a> lets you add billing periods, terms and line items without signing up, then download a PDF created right in your browser.</p>
`,
  },
];
