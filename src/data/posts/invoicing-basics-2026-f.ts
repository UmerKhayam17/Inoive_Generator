import type { PostDraft } from "../blog";

export const INVOICING_BASICS_2026_F_POSTS: PostDraft[] = [
  {
    slug: "invoice-processing",
    title: "Invoice Processing: Steps, Costs and How to Speed It Up",
    description:
      "Invoice processing explained: the 7 accounts payable steps from receipt to payment, typical cost per invoice, approval rules, automation and a checklist.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["accounts-payable-process", "three-way-match", "invoice-approval-workflow"],
    faqs: [
      {
        q: "How long should invoice processing take?",
        a: "There is no legal standard, but benchmark studies of accounts payable teams generally report average cycle times of one to two weeks from receipt to approval, with top performers closer to three days. A small business paying a handful of supplier bills can often process them in a day or two. The key is processing fast enough to meet due dates and capture early payment discounts.",
      },
      {
        q: "What is touchless invoice processing?",
        a: "Touchless or straight-through processing means an invoice is captured, matched to a purchase order and receipt, approved and scheduled for payment without anyone handling it manually. It usually relies on e-invoicing or data capture software plus automatic matching rules. Exceptions such as price differences still go to a person. Large AP teams track the percentage of invoices processed touchlessly as a key efficiency metric.",
      },
      {
        q: "Who is responsible for invoice processing in a small business?",
        a: "In a very small business it is often the owner, sometimes with help from an outside bookkeeper. As the business grows, an office manager or bookkeeper usually enters and codes bills while the owner approves and releases payments. Splitting entry and payment approval between two people, where possible, is a simple control that makes fraud and duplicate payments much harder.",
      },
      {
        q: "What is an invoice exception?",
        a: "An exception is any invoice that cannot be processed normally, for example because the price or quantity does not match the purchase order, the goods have not been received, the PO number is missing, the vendor's bank details changed or the invoice looks like a duplicate. Exceptions are sent back to purchasing, the requester or the vendor to resolve, and they are the main cause of slow processing.",
      },
      {
        q: "How do I prevent duplicate invoice payments?",
        a: "Require a unique vendor invoice number for every bill and let your accounting software warn you about duplicates by vendor, number and amount. Pay only from original invoices, not statements or reminders. Mark invoices as paid immediately and keep a single inbox for supplier bills. Periodically reconcile vendor statements against your ledger to catch anything that slipped through.",
      },
      {
        q: "How can vendors get their invoices processed faster?",
        a: "Send invoices to the address the customer specifies, include the PO number and the requester's name, match the PO prices and quantities exactly, use a clear invoice number and due date, and attach delivery proof if required. Many customers also need a W-9 and banking details on file before the first payment. A complete invoice skips the exception queue entirely.",
      },
      {
        q: "Is invoice processing the same as accounts payable?",
        a: "Invoice processing is the core part of accounts payable, but AP is broader. Accounts payable also includes vendor onboarding, payment runs, managing vendor inquiries, reconciling statements, tracking cash requirements, handling 1099 reporting in the US and month-end accruals. Invoice processing specifically covers the journey of each bill from receipt to payment and recording.",
      },
      {
        q: "Does e-invoicing change invoice processing?",
        a: "Yes. With structured e-invoices the data arrives in machine-readable form, so capture and matching can happen automatically and errors from manual keying disappear. Several countries now require B2B e-invoicing, especially across the EU, which is pushing businesses to adopt it. Even where it is optional, receiving invoices as data rather than paper or images shortens processing time considerably.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Invoice processing is the accounts payable workflow a business uses to handle a supplier's invoice from the moment it arrives until it is paid and recorded. The usual steps are receive, capture, verify and match, code, approve, pay and record. Done well, it gets suppliers paid on time, catches errors and fraud, and costs a few dollars per invoice rather than more than ten.</p>

<p>If you buy from suppliers, every bill you receive goes through some version of this process, even if it is just you opening an email and paying from your bank app. This guide walks through each step of invoice processing on the AP side, what it typically costs, common controls like the three-way match, how to speed it up with or without software, and what vendors can do to get their own invoices through faster.</p>

<h2>What is invoice processing?</h2>
<p>Invoice processing (also called accounts payable invoice processing or bill processing) covers everything that happens to a vendor invoice after it is received: checking that it is genuine and accurate, getting it approved, paying it on the right date and recording it in the books. It sits inside the wider <a href="/blog/accounts-payable-process">accounts payable process</a>, which also includes vendor onboarding, payment runs and reporting.</p>
<p>The same invoice is an accounts receivable item for the seller and an accounts payable item for the buyer. If you need a refresher on the two sides, see <a href="/blog/accounts-payable-vs-accounts-receivable">accounts payable vs accounts receivable</a>.</p>

<h2>The 7 steps of invoice processing</h2>
<ol>
<li><strong>Receive the invoice.</strong> Invoices arrive by email, supplier portal, e-invoicing network or post. Best practice is a single dedicated inbox (for example, ap@yourcompany.com) so nothing gets lost in personal email.</li>
<li><strong>Capture the data.</strong> Key details are entered into the accounting system: vendor, invoice number, invoice date, due date, amounts, tax and PO number. This is done manually, by OCR or data capture tools, or arrives structured via e-invoicing.</li>
<li><strong>Verify and match.</strong> Check the vendor is approved, the bank details match your records, the invoice is not a duplicate and the math is right. For purchased goods, match the invoice to the purchase order and the receiving record (the <a href="/blog/three-way-match">three-way match</a>).</li>
<li><strong>Code the invoice.</strong> Assign the general ledger account (for example, office supplies, subcontractors, software), cost center, project or job and tax treatment.</li>
<li><strong>Approve.</strong> Route the invoice to the budget owner or manager according to your approval rules, often based on amount. See our <a href="/blog/invoice-approval-workflow">invoice approval workflow</a> guide.</li>
<li><strong>Schedule and pay.</strong> Add approved invoices to a payment run timed for the due date or the early payment discount date, and pay by ACH, check, card or wire.</li>
<li><strong>Record and archive.</strong> Mark the bill paid, post the payment, send <a href="/blog/remittance-advice">remittance advice</a> if needed and keep the invoice and approval trail for audit and tax purposes.</li>
</ol>

<h2>Two-way vs three-way vs four-way match</h2>
<table>
<thead><tr><th>Match type</th><th>Documents compared</th><th>Used for</th></tr></thead>
<tbody>
<tr><td>Two-way</td><td>Invoice vs purchase order</td><td>Services and low-risk purchases</td></tr>
<tr><td>Three-way</td><td>Invoice vs PO vs receiving report or delivery note</td><td>Physical goods and inventory</td></tr>
<tr><td>Four-way</td><td>Invoice vs PO vs receipt vs inspection report</td><td>Regulated or quality-critical goods</td></tr>
<tr><td>No PO</td><td>Invoice vs contract or budget, plus manager approval</td><td>Utilities, subscriptions, professional fees</td></tr>
</tbody>
</table>
<p>Most small businesses do not issue <a href="/blog/purchase-order-template">purchase orders</a> for everything. A practical compromise is to require POs above a threshold (say $1,000) and use manager approval for smaller recurring bills.</p>

<h2>How much does it cost to process an invoice?</h2>
<p>Cost per invoice includes staff time, software, printing and postage, bank fees and the cost of fixing errors, divided by invoice volume. Benchmark research from Ardent Partners on accounts payable, as reported in 2025 summaries, puts the average at roughly $9 to $13 per invoice, with best-in-class teams around $2.78 and average cycle times of about nine days versus about three days for the best performers. Exact figures depend on how each study defines cost, so treat these as rough reference points.</p>
<h3>Worked example: a small business's processing cost</h3>
<p>A 20-person distributor receives 300 supplier invoices a month. A bookkeeper earning $28 per hour (about $35 with payroll costs) spends 15 minutes on an average invoice, including exceptions, and the owner spends about 3 minutes approving each one at an internal cost of $60 per hour.</p>
<table>
<thead><tr><th>Cost element</th><th>Per invoice</th></tr></thead>
<tbody>
<tr><td>Bookkeeper time (0.25 hr x $35)</td><td>$8.75</td></tr>
<tr><td>Owner approval time (0.05 hr x $60)</td><td>$3.00</td></tr>
<tr><td>Checks, postage, bank fees (averaged)</td><td>$1.20</td></tr>
<tr><td>Software (accounting subscription share)</td><td>$0.50</td></tr>
<tr><td><strong>Total cost per invoice</strong></td><td><strong>$13.45</strong></td></tr>
<tr><td><strong>Monthly cost (300 invoices)</strong></td><td><strong>$4,035</strong></td></tr>
</tbody>
</table>
<p>Cutting average handling time to 8 minutes, moving payments from checks to ACH and having approvals done in software from a phone could bring this under $7 per invoice, saving roughly $2,000 a month. Missed early payment discounts are an extra hidden cost; the <a href="/blog/2-10-net-30">2/10 net 30</a> guide shows why they are worth capturing.</p>

<h2>Key invoice processing metrics</h2>
<table>
<thead><tr><th>Metric</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td>Cost per invoice</td><td>Overall efficiency</td></tr>
<tr><td>Invoice cycle time</td><td>Days from receipt to approval or payment</td></tr>
<tr><td>Exception rate</td><td>Share of invoices that need manual fixes</td></tr>
<tr><td>On-time payment rate</td><td>Supplier relationships and late fee risk</td></tr>
<tr><td>Discounts captured</td><td>Savings from paying early when offered</td></tr>
<tr><td>Duplicate or erroneous payments</td><td>Control strength</td></tr>
<tr><td>Days payable outstanding (DPO)</td><td>How long you take to pay on average</td></tr>
</tbody>
</table>
<p>For definitions and formulas, see our guides to <a href="/blog/accounts-payable-kpis">accounts payable KPIs</a>, the <a href="/blog/accounts-payable-turnover-ratio">accounts payable turnover ratio</a> and the <a href="/blog/accounts-payable-aging-report">accounts payable aging report</a>.</p>

<h2>Manual vs automated invoice processing</h2>
<table>
<thead><tr><th></th><th>Manual</th><th>Automated</th></tr></thead>
<tbody>
<tr><td>Data entry</td><td>Typed by hand</td><td>OCR, AI-based capture or structured e-invoices</td></tr>
<tr><td>Matching</td><td>Visual check against PO and packing slip</td><td>Rules-based automatic matching with tolerances</td></tr>
<tr><td>Approvals</td><td>Email or paper sign-off</td><td>Routed in software with reminders</td></tr>
<tr><td>Payment</td><td>Checks or one-off bank transfers</td><td>Scheduled batch ACH or virtual card</td></tr>
<tr><td>Audit trail</td><td>Folders and inboxes</td><td>Automatic log of every step</td></tr>
<tr><td>Best for</td><td>Under roughly 50 bills a month</td><td>Higher volumes, multiple approvers</td></tr>
</tbody>
</table>
<p>Small businesses can get most of the benefit from the bill pay features already built into common accounting software before buying a dedicated AP automation tool. Whatever you use, the controls matter more than the technology.</p>

<h2>Invoice processing controls that prevent fraud</h2>
<ul>
<li><strong>Vendor master control:</strong> only approved vendors can be paid; new vendors need a W-9 (in the US) and verified bank details.</li>
<li><strong>Bank detail change verification:</strong> always confirm changes by phone using a number you already have, never one in the email. Business email compromise scams often start with a "new bank account" message.</li>
<li><strong>Segregation of duties:</strong> the person who enters bills should not be the only person who releases payments.</li>
<li><strong>Duplicate checks</strong> on vendor, invoice number and amount.</li>
<li><strong>Approval limits</strong> by amount.</li>
<li><strong>Regular <a href="/blog/vendor-statement-reconciliation">vendor statement reconciliation</a></strong> to catch missing or double-paid bills.</li>
</ul>

<h2>How to set up invoice approval rules</h2>
<p>Approval rules decide who must sign off on each invoice before it is paid. Simple, written rules stop bottlenecks (everything waiting for the owner) and gaps (nobody checking large bills). A typical small business matrix looks like this:</p>
<table>
<thead><tr><th>Invoice type or amount</th><th>Who approves</th><th>Extra check</th></tr></thead>
<tbody>
<tr><td>Recurring fixed bills (rent, software, utilities) within budget</td><td>Bookkeeper</td><td>Compare with last month</td></tr>
<tr><td>Under $1,000 with a matching PO</td><td>Bookkeeper</td><td>Two- or three-way match</td></tr>
<tr><td>$1,000 to $10,000</td><td>Department head or manager</td><td>PO and receipt confirmed</td></tr>
<tr><td>Over $10,000</td><td>Owner or finance lead</td><td>Contract terms reviewed</td></tr>
<tr><td>New vendor's first invoice</td><td>Owner</td><td>Vendor details and bank account verified</td></tr>
</tbody>
</table>
<p>Set a target, for example "all invoices approved within five business days of receipt," and track it. If approvals regularly take longer, invoices will start missing their due dates no matter how fast the rest of the process is.</p>

<h2>Invoice processing checklist for small businesses</h2>
<ul>
<li>One shared inbox for all supplier invoices.</li>
<li>Every invoice entered in your accounting software within two business days of receipt.</li>
<li>Vendor, invoice number and amount checked against existing bills for duplicates.</li>
<li>PO and receipt matched for goods; budget owner confirmation for services.</li>
<li>GL account, job or project and tax treatment coded.</li>
<li>Approved according to your written rules.</li>
<li>Payment scheduled for the due date, or the discount date when an early payment discount is worth taking.</li>
<li>Payment recorded and the invoice marked paid the same day.</li>
<li>Invoice, approval and payment proof stored together for audit and tax purposes.</li>
<li>Vendor statements reconciled monthly.</li>
</ul>
<p>For record retention, the IRS explains how long to keep business records in its guidance on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records">how long to keep records</a>; supplier invoices that support deductions should be kept at least as long as the related tax return can be examined.</p>

<h2>Common invoice processing mistakes</h2>
<ul>
<li>Letting invoices sit in personal inboxes until they are overdue.</li>
<li>Paying from statements or reminders instead of original invoices, which causes duplicates.</li>
<li>Skipping the receiving check, so you pay for goods that never arrived.</li>
<li>Approving without a budget owner who actually knows the purchase.</li>
<li>Missing early payment discounts because approval takes longer than ten days.</li>
<li>Not recording the bill until it is paid, which hides liabilities from your cash flow forecast.</li>
</ul>

<h2>How vendors can get invoices processed faster</h2>
<p>If you are the one sending invoices, you can make the customer's processing almost effortless:</p>
<ol>
<li>Ask for the AP email address, PO requirements and vendor onboarding forms before you start work.</li>
<li>Quote the <a href="/blog/po-number-on-invoice">PO number</a> and requester's name on every invoice.</li>
<li>Match PO descriptions, quantities and prices exactly.</li>
<li>Use a unique invoice number, for example from our <a href="/tools/invoice-number-generator">invoice number generator</a>.</li>
<li>Show the due date and payment details clearly.</li>
<li>Send one invoice per PO unless the customer asks for a <a href="/blog/consolidated-invoice">consolidated invoice</a>.</li>
</ol>
<p>A clean, consistent layout from our <a href="/invoice-generator">free invoice generator</a> helps your invoice pass data capture and matching on the first attempt.</p>

<p>Invoice processing is where small inefficiencies quietly become real costs: late fees, missed discounts, duplicate payments and unhappy suppliers. Map your steps, set clear approval rules and measure cost and cycle time. And on the selling side, send invoices that are easy to process: our <a href="/invoice-generator">free invoice generator</a> needs no sign-up and builds a downloadable PDF directly in your browser.</p>
`,
  },
  {
    slug: "cancellation-fee-invoice",
    title: "Cancellation Fee: Policy, Wording and How to Invoice It",
    description:
      "How to charge a cancellation fee: set a fair policy, typical fee structures, wording to copy, how to invoice late cancellations and no-shows, with examples.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-terms-and-conditions", "deposit-invoice", "late-payment-fees"],
    faqs: [
      {
        q: "Is it legal to charge a cancellation fee?",
        a: "Generally yes, if the customer agreed to it before booking and the amount is a reasonable estimate of your loss rather than a penalty. Consumer protection laws in many states and countries limit unfair terms, and some industries have specific rules. Disclose the fee clearly at booking and keep proof of agreement. This is general information, not legal advice; check local rules for your industry.",
      },
      {
        q: "How much should a cancellation fee be?",
        a: "Many service businesses charge between 25% and 50% of the booked price for late cancellations and up to 100% for no-shows, or a flat fee such as the cost of a typical appointment slot. Event and travel businesses often use a sliding scale based on notice given. The fee should reflect what you actually lose, including lost time you cannot rebook and nonrefundable costs.",
      },
      {
        q: "Do I charge sales tax on a cancellation fee?",
        a: "It depends on the state and on whether the fee is treated as part of the price of a taxable sale or as compensation for a cancelled transaction. Some states tax cancellation fees tied to taxable services or rentals, others do not. Check your state revenue department's guidance. In the UK and EU, VAT treatment of cancellation charges and retained deposits has also changed over the years.",
      },
      {
        q: "Can I keep a deposit instead of sending a cancellation invoice?",
        a: "Yes, if your terms say the deposit is nonrefundable or will be applied to cancellation fees. Keeping the deposit is usually easier than collecting a new invoice from a customer who has already cancelled. You should still issue a short invoice or receipt showing the deposit retained as a cancellation fee so both sides have a clear record and your books are accurate.",
      },
      {
        q: "Should I waive cancellation fees for emergencies?",
        a: "Many businesses allow discretion for genuine emergencies, illness or bad weather, especially for loyal clients, while enforcing fees for repeated last-minute changes. If you waive a fee, consider still sending the invoice with the fee shown and a matching discount line. That reminds the client of the policy and makes the goodwill visible without creating a debt.",
      },
      {
        q: "What is the difference between a cancellation fee and a no-show fee?",
        a: "A cancellation fee applies when the client cancels, usually inside a set notice window such as 24 or 48 hours. A no-show fee applies when the client neither cancels nor turns up. No-show fees are typically higher, often the full price of the appointment, because you had no chance at all to fill the slot or prepare differently.",
      },
      {
        q: "How do I collect a cancellation fee if the client will not pay?",
        a: "Send a polite invoice quoting the policy they accepted, then follow up like any overdue invoice. Taking a card on file or a deposit at booking is the most reliable way to collect, provided the customer authorized charges for cancellations. For small amounts, many businesses decide not to pursue it further but require prepayment for that client's future bookings.",
      },
      {
        q: "Can I charge a cancellation fee to a business client?",
        a: "Yes. B2B contracts commonly include cancellation or termination fees, kill fees for creative work and charges for postponed events or projects. Put the fee schedule in your proposal or contract, specify how much notice is required and what work already done will be billed, and invoice it with a reference to the clause just as you would for any other contracted charge.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A cancellation fee is a charge a business bills when a customer cancels a booking, appointment or order after a set deadline, to cover lost time and nonrefundable costs. To charge one fairly, publish the policy before booking, get the customer's agreement, keep the fee proportionate to your loss, and invoice it as a clearly labeled line referencing the policy and the cancelled booking.</p>

<p>Late cancellations and no-shows cost service businesses real money: a stylist cannot resell a 2 p.m. slot at 1:45, and a photographer who turned down another wedding cannot get that date back. This guide covers how to set a cancellation policy, typical fee structures by industry, wording you can copy, how to invoice cancellations and no-shows, and the mistakes that make fees hard to collect.</p>

<h2>What is a cancellation fee?</h2>
<p>A cancellation fee is a pre-agreed charge payable when a customer cancels outside the allowed window. It compensates you for:</p>
<ul>
<li><strong>Lost capacity:</strong> time you reserved and cannot rebook.</li>
<li><strong>Nonrefundable costs:</strong> materials ordered, venue deposits, travel booked, subcontractors committed.</li>
<li><strong>Work already done:</strong> planning, prep, design or admin before the cancellation.</li>
</ul>
<p>Related terms include no-show fee (customer does not appear), late cancellation fee, rescheduling fee, kill fee (creative work cancelled midway) and termination fee (ending a contract early). They all follow the same principle: agreed in advance, proportionate and clearly invoiced.</p>

<h2>Is a cancellation fee enforceable?</h2>
<p>A cancellation fee is most likely to hold up when:</p>
<ol>
<li>The customer saw and agreed to the policy before booking (a checkbox, signature or written confirmation).</li>
<li>The fee is a reasonable estimate of your loss, not a punishment. Courts in many jurisdictions refuse to enforce penalty clauses that are out of proportion to actual damages.</li>
<li>The notice period and fee are specific, not vague ("fees may apply").</li>
<li>You applied the policy consistently.</li>
</ol>
<p>Consumer protection rules vary by state and country, and some sectors (for example, healthcare, travel and certain consumer contracts) have their own rules. In the UK, unfair terms in consumer contracts are covered by the Consumer Rights Act 2015. This is general information, not legal advice.</p>

<h2>How much should you charge? Typical structures</h2>
<p>The figures below are illustrative examples of common structures, not survey data. Set yours based on your own costs and market.</p>
<table>
<thead><tr><th>Business type</th><th>Common notice window</th><th>Typical structure</th></tr></thead>
<tbody>
<tr><td>Salons, spas, massage</td><td>24 to 48 hours</td><td>50% of service; 100% for no-shows</td></tr>
<tr><td>Therapists, coaches, tutors</td><td>24 to 48 hours</td><td>Full session fee</td></tr>
<tr><td>Home services (cleaning, repairs)</td><td>24 hours</td><td>Flat fee, often similar to a <a href="/blog/service-call-fee">service call fee</a></td></tr>
<tr><td>Photographers, DJs, event vendors</td><td>30 to 180 days</td><td>Nonrefundable retainer plus sliding scale</td></tr>
<tr><td>Event venues and caterers</td><td>60 to 180 days</td><td>Sliding scale up to 100% of contract</td></tr>
<tr><td>Freelance creative work</td><td>After project start</td><td>Kill fee: 25% to 50% of remaining fee plus work done</td></tr>
<tr><td>B2B consulting or training</td><td>7 to 30 days</td><td>Percentage of fees plus nonrefundable travel</td></tr>
</tbody>
</table>
<h3>Sliding scale example for an event vendor</h3>
<table>
<thead><tr><th>Notice given</th><th>Fee</th></tr></thead>
<tbody>
<tr><td>More than 120 days</td><td>Booking retainer retained (non-refundable)</td></tr>
<tr><td>60 to 120 days</td><td>50% of contract total</td></tr>
<tr><td>Under 60 days</td><td>100% of contract total</td></tr>
</tbody>
</table>

<h2>Cancellation policy wording you can copy</h2>
<ul>
<li><strong>Appointments:</strong> "We require 24 hours' notice to cancel or reschedule. Cancellations with less than 24 hours' notice are charged 50% of the booked service. Missed appointments without notice are charged in full."</li>
<li><strong>Home services:</strong> "If you cancel after our technician is dispatched, a $75 trip charge applies."</li>
<li><strong>Events:</strong> "The $500 booking retainer is non-refundable and secures your date. Cancellations within 60 days of the event are charged 100% of the contract total, less amounts already paid."</li>
<li><strong>Freelance projects:</strong> "If the client cancels after work begins, the client will pay for all work completed to the cancellation date plus a kill fee of 25% of the remaining project fee."</li>
<li><strong>Classes and training:</strong> "Cancellations more than 14 days before the start date receive a full refund. Within 14 days, fees are non-refundable but may be transferred to another attendee."</li>
</ul>
<p>Put the policy in your booking confirmation, quote or contract and your <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions</a>. If you take a deposit at booking, our <a href="/blog/deposit-invoice">deposit invoice guide</a> shows how to word whether it is refundable.</p>

<h2>How to invoice a cancellation fee</h2>
<ol>
<li><strong>Check the policy and timing.</strong> Confirm when the cancellation was received and which fee tier applies.</li>
<li><strong>Calculate the fee.</strong> Apply the percentage or flat fee, and add any nonrefundable costs if your terms allow.</li>
<li><strong>Apply deposits.</strong> Subtract any deposit or retainer already paid.</li>
<li><strong>Create the invoice.</strong> Use a new invoice number, reference the original booking or invoice and describe the charge plainly.</li>
<li><strong>Quote the policy.</strong> Add a note with the exact clause and when the client agreed to it.</li>
<li><strong>Send promptly and politely</strong>, ideally within a day of the cancellation.</li>
<li><strong>Void or credit the original invoice</strong> if one was already issued for the full service; see <a href="/blog/how-to-void-an-invoice">how to void an invoice</a> and the <a href="/blog/credit-note-guide">credit note guide</a>.</li>
</ol>
<h3>Example: late cancellation invoice for a photographer</h3>
<p>A client books a $2,400 engagement-and-portrait package and pays a $600 non-refundable retainer. They cancel 45 days before the shoot. The contract says cancellations under 60 days are charged 50% of the package.</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Late cancellation fee: portrait package booked for December 13, 2026 (50% per contract clause 7.2, cancelled October 29, 2026)</td><td>1</td><td>$1,200.00</td><td>$1,200.00</td></tr>
<tr><td>Less retainer paid September 2, 2026 (receipt R-0418)</td><td>1</td><td>-$600.00</td><td>-$600.00</td></tr>
<tr><td colspan="3"><strong>Balance due within 14 days</strong></td><td><strong>$600.00</strong></td></tr>
</tbody>
</table>
<p>Note: "Per the signed agreement dated September 2, 2026, cancellations within 60 days of the session are charged 50% of the package total." You can build this in our <a href="/invoice-generator">free invoice generator</a>, adding the retainer as a negative line or as an amount paid.</p>
<h3>Example: no-show invoice for a salon</h3>
<table>
<thead><tr><th>Description</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>No-show fee: color and cut, 2:00 p.m. October 28, 2026 (100% per booking policy)</td><td>$145.00</td></tr>
<tr><td><strong>Total due</strong></td><td><strong>$145.00</strong></td></tr>
</tbody>
</table>
<p>See our <a href="/blog/salon-invoice-template">salon invoice template</a> and <a href="/blog/photography-invoice-template">photography invoice template</a> for full layouts.</p>

<h2>Cancellation fee vs deposit vs rescheduling fee</h2>
<table>
<thead><tr><th>Charge</th><th>When it is paid</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Deposit or retainer</td><td>At booking</td><td>Secures the date; often applied to the final bill</td></tr>
<tr><td>Cancellation fee</td><td>After a late cancellation</td><td>Compensates for lost time and costs</td></tr>
<tr><td>No-show fee</td><td>After a missed booking</td><td>Compensates for a fully wasted slot</td></tr>
<tr><td>Rescheduling fee</td><td>When a date is moved late</td><td>Covers admin and lost slot, smaller than cancellation</td></tr>
<tr><td>Kill fee</td><td>When a creative project is stopped</td><td>Pays for work done and committed time</td></tr>
</tbody>
</table>
<p>In practice, collecting a deposit upfront is the single most effective way to make cancellation fees work, because you are holding the money rather than chasing it.</p>

<h2>How to reduce cancellations before you need to charge</h2>
<p>A cancellation fee is a backstop, not a business model. Most businesses would rather have the appointment than the fee, so combine the policy with steps that cut cancellations in the first place:</p>
<ol>
<li><strong>Take a deposit at booking.</strong> Clients who have paid something show up far more reliably.</li>
<li><strong>Send reminders</strong> by text or email 48 hours and again a few hours before the appointment, repeating the cancellation window.</li>
<li><strong>Make rescheduling easy.</strong> A simple online reschedule link turns many cancellations into moved bookings.</li>
<li><strong>Keep a waitlist</strong> so you can fill late gaps and choose to waive the fee when you do.</li>
<li><strong>Require card details or prepayment</strong> for clients with a history of no-shows.</li>
<li><strong>Review your data.</strong> If one day or service has frequent cancellations, adjust the booking rules for it.</li>
</ol>
<h3>Worked example: what no-shows cost a solo practitioner</h3>
<p>A massage therapist books 25 sessions a week at $110. If 2 clients a week cancel late or do not show and the slots cannot be refilled, that is $220 a week, or about $11,000 over a 50-week year. A 50% late cancellation fee and 100% no-show fee, collected on even half of those cases, would recover roughly $3,000 to $4,000 a year, and the reminder and deposit steps above usually reduce the number of no-shows too. Our <a href="/blog/massage-therapy-invoice-template">massage therapy invoice template</a> includes a no-show line you can adapt.</p>

<h2>Tax treatment of cancellation fees</h2>
<p>Cancellation fees are business income and must be reported. Whether sales tax or VAT applies is less straightforward: it depends on your jurisdiction and on whether the fee is treated as payment for a taxable supply. Some US states tax cancellation fees connected to taxable rentals or services, while others treat them as non-taxable compensation. Check your state's guidance or use our <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a> overview as a starting point. This is general information, not tax advice.</p>

<h2>Common cancellation fee mistakes</h2>
<ul>
<li><strong>Hiding the policy in fine print.</strong> If clients did not see it, they will dispute it.</li>
<li><strong>Charging a fee you never mentioned.</strong> Introducing fees after the fact damages trust and is hard to enforce.</li>
<li><strong>Disproportionate amounts.</strong> A 100% fee on a booking cancelled months ahead may be seen as a penalty.</li>
<li><strong>Inconsistent enforcement.</strong> Charging some clients and not others invites complaints.</li>
<li><strong>No reference to the booking.</strong> The invoice must show what was cancelled and when.</li>
<li><strong>Forgetting the deposit.</strong> Always deduct amounts already paid.</li>
<li><strong>Waiting weeks to invoice.</strong> The longer you wait, the less likely you are to be paid. If it does go unpaid, follow your normal <a href="/blog/overdue-invoice">overdue invoice</a> process.</li>
</ul>

<p>A cancellation fee works best when it is boring: clearly stated at booking, proportionate, backed by a deposit and invoiced promptly with a reference to the policy. When you need to bill a late cancellation or no-show, our <a href="/invoice-generator">free invoice generator</a> lets you add the fee, deduct any deposit and download a PDF in minutes, with no sign-up and everything created in your browser.</p>
`,
  },
  {
    slug: "rush-fee",
    title: "Rush Fee: How Much to Charge and How to Invoice It",
    description:
      "How much is a rush fee? Common pricing methods (percentage, flat, tiered), sample policies, invoice line wording and a worked example for freelancers and shops.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-terms-and-conditions", "how-to-invoice-for-overtime", "itemized-invoice"],
    faqs: [
      {
        q: "Is it unprofessional to charge a rush fee?",
        a: "No. Rush fees are standard in printing, design, translation, editing, manufacturing, repairs and many other services. They are fair compensation for reshuffling your schedule, working evenings or weekends, or paying for faster shipping and materials. What looks unprofessional is adding a rush fee the client did not expect. Quote it upfront and get approval before starting the rushed work.",
      },
      {
        q: "Should the rush fee be a separate line on the invoice?",
        a: "Yes. A separate line makes it clear what the standard price was and what the client paid for speed. It also helps the client's finance team approve it, since they can match it to the approved quote, and it gives you data on how much of your revenue comes from rush jobs. Bundling the fee into the base price hides it and invites questions.",
      },
      {
        q: "Do I charge sales tax on a rush fee?",
        a: "Generally, a rush fee is treated as part of the selling price of whatever you are delivering. If the product or service is taxable in your state, the rush fee is usually taxable too, and if it is not taxable, the rush fee usually is not either. Rules vary, so check your state's guidance. Separately stated shipping may follow different rules.",
      },
      {
        q: "What counts as a rush job?",
        a: "Anything the client wants delivered faster than your normal published turnaround. Define it in hours or business days, for example standard turnaround is five business days and rush is 48 hours or less. Also define what counts as the start, such as receipt of approved files and payment of a deposit, so there is no argument about when the clock began.",
      },
      {
        q: "Can I charge a rush fee if I miss the rushed deadline?",
        a: "Usually you should not, or at least not in full. The client paid for speed, so if you miss the rushed deadline the fair approach is to waive or refund the rush portion while still billing the standard price. Some businesses write this into their policy as a guarantee, which also makes the rush service easier to sell.",
      },
      {
        q: "What is an expedite fee?",
        a: "Expedite fee is another name for a rush fee, common in manufacturing, logistics, government document services and purchasing. It covers moving an order ahead of the normal queue, paying for overtime or faster freight. On an invoice, label it with the specific service it speeds up, for example expedited production, 3-day turnaround, rather than a vague expedite charge.",
      },
      {
        q: "Should repeat clients pay rush fees?",
        a: "Usually yes, because the cost to you is the same. You might offer a lower rush rate as part of a retainer or volume agreement, or include a set number of rush requests per month. If a client constantly needs rush work, it may be better to agree a faster standard turnaround at a higher base price rather than invoicing rush fees every time.",
      },
      {
        q: "How do I tell a client about a rush fee?",
        a: "State it in your pricing page or quote and confirm in writing before you start, for example: to deliver by Friday we will need to move other work, so a 50% rush fee of $300 applies, making the total $900; please reply to confirm. Written confirmation protects you if the invoice is questioned later and gives the client a chance to choose standard turnaround.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A rush fee is an extra charge for delivering work faster than your standard turnaround. Common structures are a percentage of the job (often 25% to 100% depending on how fast), a flat fee, or tiered rates by turnaround time. Quote it before you start, get written approval and show it on the invoice as its own line, such as "Rush fee: 48-hour turnaround (50%)."</p>

<p>Rush work disrupts your schedule, pushes other clients back and often means evenings, weekends or paying more for materials and shipping. Charging for it is fair and normal across printing, design, writing, translation, repairs, manufacturing and many trades. This guide covers how to price a rush fee, how to write a rush fee policy, the exact invoice line wording to use and a worked example.</p>

<h2>What is a rush fee?</h2>
<p>A rush fee (also called an expedite fee, express fee or priority surcharge) is a premium added to the normal price when a customer needs the work sooner than your standard turnaround. It covers the real costs of speed:</p>
<ul>
<li>Overtime or weekend work (yours or your staff's; see <a href="/blog/how-to-invoice-for-overtime">how to invoice for overtime</a>).</li>
<li>Rescheduling or delaying other clients.</li>
<li>Faster shipping, couriers or premium material sourcing.</li>
<li>Higher risk of errors and rework on compressed timelines.</li>
</ul>
<p>It is different from a late fee (charged when a client pays late) and from a service call fee (charged for coming out to a site).</p>

<h2>How much should a rush fee be?</h2>
<p>There is no official standard. The ranges below are illustrative of common practice, not survey results. Base yours on how much the rush actually costs you and what clients in your market accept.</p>
<table>
<thead><tr><th>Turnaround (vs standard 5 business days)</th><th>Illustrative surcharge</th></tr></thead>
<tbody>
<tr><td>3 business days</td><td>25%</td></tr>
<tr><td>48 hours</td><td>50%</td></tr>
<tr><td>24 hours or next day</td><td>75% to 100%</td></tr>
<tr><td>Same day or weekend</td><td>100% or more, or a flat premium</td></tr>
</tbody>
</table>
<h3>Three ways to structure a rush fee</h3>
<table>
<thead><tr><th>Method</th><th>How it works</th><th>Best for</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Percentage</td><td>Add a % of the job price</td><td>Design, writing, translation, editing</td><td>Very small jobs earn little extra</td></tr>
<tr><td>Flat fee</td><td>Fixed amount, e.g. $75 or $250</td><td>Printing, repairs, document services</td><td>Undercharges on large jobs</td></tr>
<tr><td>Tiered or minimum plus %</td><td>e.g. 50% with a $100 minimum</td><td>Most small businesses</td><td>Needs a clear published table</td></tr>
<tr><td>Rush hourly rate</td><td>Higher hourly rate (e.g. 1.5x) for rush hours</td><td>Hourly freelancers, trades</td><td>Track rush hours separately</td></tr>
</tbody>
</table>
<p>A good default for many freelancers and small shops: a percentage with a minimum, published in a simple turnaround table. For pricing context in creative work, see <a href="/blog/logo-design-pricing">logo design pricing</a>, <a href="/blog/translation-rates">translation rates</a> and <a href="/blog/video-editing-rates">video editing rates</a>.</p>

<h2>How to calculate a rush fee: worked example</h2>
<p>A freelance translator charges $0.12 per word with a standard turnaround of 3,000 words per business day. A law firm asks for a 9,000-word contract (normally 3 business days) translated within 24 hours. The translator's published policy: delivery in under half the standard time adds 75%, minimum $150.</p>
<ol>
<li>Base price: 9,000 x $0.12 = $1,080.00.</li>
<li>Requested time is one day versus three, so the 75% tier applies.</li>
<li>Rush fee: $1,080.00 x 0.75 = $810.00 (above the $150 minimum).</li>
<li>Total: $1,890.00.</li>
</ol>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Translation, Spanish to English: commercial lease agreement</td><td>9,000 words</td><td>$0.12</td><td>$1,080.00</td></tr>
<tr><td>Rush fee: 24-hour delivery (75% of translation fee, approved by email October 27, 2026)</td><td>1</td><td>$810.00</td><td>$810.00</td></tr>
<tr><td colspan="3"><strong>Total due (Net 15)</strong></td><td><strong>$1,890.00</strong></td></tr>
</tbody>
</table>
<p>Our <a href="/blog/translation-invoice-template">translation invoice template</a> shows the full layout. You can reproduce this invoice in our <a href="/invoice-generator">free invoice generator</a> by adding the rush fee as its own line item.</p>

<h3>Example for a print shop (flat plus percentage)</h3>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Tri-fold brochures, 100 lb gloss, full color</td><td>2,500</td><td>$0.38</td><td>$950.00</td></tr>
<tr><td>Design proof and setup</td><td>1</td><td>$45.00</td><td>$45.00</td></tr>
<tr><td>Rush production: next-day turnaround (25% of print cost)</td><td>1</td><td>$237.50</td><td>$237.50</td></tr>
<tr><td>Overnight courier delivery</td><td>1</td><td>$62.00</td><td>$62.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$1,294.50</strong></td></tr>
</tbody>
</table>
<p>Sales tax would then be added if the printed goods are taxable in your state; the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you check the math. For more print-specific line items, see the <a href="/blog/printing-services-invoice-template">printing services invoice template</a>.</p>

<h2>How to word a rush fee on an invoice</h2>
<p>Good rush fee lines say what was rushed, how fast and how the fee was calculated:</p>
<ul>
<li>"Rush fee: 48-hour turnaround (50% of design fee)"</li>
<li>"Expedited production: 3 business days vs standard 10"</li>
<li>"Weekend priority service surcharge (flat)"</li>
<li>"Rush hours: 6 hrs at 1.5x standard rate"</li>
<li>"Same-day delivery premium, approved by J. Patel on October 27, 2026"</li>
</ul>
<p>Avoid vague labels like "Misc. charge" or "Adjustment." Clear labels follow the same principle as any <a href="/blog/itemized-invoice">itemized invoice</a>: each charge should be understandable without a phone call.</p>

<h2>How to write a rush fee policy</h2>
<ol>
<li><strong>Publish your standard turnaround</strong> for each service, in business days.</li>
<li><strong>Define rush tiers</strong> with the surcharge for each.</li>
<li><strong>Set a minimum</strong> so tiny rush jobs are still worth it.</li>
<li><strong>Define when the clock starts:</strong> approved files received, deposit paid, before a daily cut-off time.</li>
<li><strong>State capacity limits:</strong> rush is subject to availability.</li>
<li><strong>Explain what happens if you miss the rushed deadline</strong> (for example, the rush fee is waived).</li>
<li><strong>Require written approval</strong> before starting rush work.</li>
</ol>
<p>Sample policy: "Standard turnaround is 5 business days from receipt of approved files. Rush service is available subject to capacity: 3 business days (+25%), 48 hours (+50%), 24 hours (+100%). Minimum rush fee $75. If we miss a rush deadline, the rush fee is waived." Add it to your quote template and <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions</a>.</p>

<h2>When to charge a rush fee (and when not to)</h2>
<h3>Charge it when</h3>
<ul>
<li>The client asks for delivery faster than your published standard.</li>
<li>You must move other work, work outside normal hours or pay for expedited inputs.</li>
<li>The client's delay (late files, late approvals) forces a compressed timeline but they still want the original date.</li>
</ul>
<h3>Consider waiving it when</h3>
<ul>
<li>You have spare capacity and the rush costs you nothing.</li>
<li>The delay was your fault.</li>
<li>It is a very valuable client and you want to show goodwill (still show the fee and a matching discount line so the value is visible; see <a href="/blog/discount-on-invoice">how to show a discount on an invoice</a>).</li>
</ul>

<h2>Common rush fee mistakes</h2>
<ul>
<li><strong>Not quoting it upfront.</strong> A surprise surcharge on the invoice is the fastest route to a dispute.</li>
<li><strong>Burying it in the base price.</strong> The client cannot see what they paid for speed.</li>
<li><strong>No minimum.</strong> 50% of a $40 job is not worth a disrupted evening.</li>
<li><strong>Charging rush when you miss the deadline.</strong> Waive or refund it.</li>
<li><strong>Undefined start time.</strong> Specify that the clock starts when files and approvals are complete.</li>
<li><strong>Forgetting real costs.</strong> Add courier or expedited shipping as separate lines rather than absorbing them.</li>
<li><strong>Charging so often it becomes normal.</strong> Frequent rush requests are a sign to raise your base price or shorten standard turnaround.</li>
</ul>

<h2>Rush fee examples by industry</h2>
<p>Each industry has its own conventions. The structures below are illustrative examples, not survey data:</p>
<table>
<thead><tr><th>Industry</th><th>Typical rush structure</th><th>Invoice line example</th></tr></thead>
<tbody>
<tr><td>Graphic and web design</td><td>Percentage of project fee by turnaround</td><td>"Rush revision round: 24 hours (+50%)"</td></tr>
<tr><td>Printing</td><td>Percentage of print cost or flat per job</td><td>"Next-day production surcharge"</td></tr>
<tr><td>Translation and editing</td><td>Percentage by words per day above standard</td><td>"Rush: 6,000 words in 1 day (+75%)"</td></tr>
<tr><td>Manufacturing and fabrication</td><td>Expedite fee plus overtime and air freight</td><td>"Expedited production: ship in 5 days vs 15"</td></tr>
<tr><td>Auto and appliance repair</td><td>Priority scheduling fee or overtime rate</td><td>"Priority same-day service"</td></tr>
<tr><td>Video editing</td><td>Higher day rate for weekend or overnight edits</td><td>"Weekend edit day at rush rate"</td></tr>
<tr><td>Accounting and tax preparation</td><td>Flat late-filing or expedite fee near deadlines</td><td>"Expedited return preparation, received after cut-off"</td></tr>
</tbody>
</table>
<p>If clients are billed by the hour, a rush multiplier (1.25x to 2x, illustrative) applied only to rush hours is often clearer than a percentage of the whole job. Log those hours separately in your timesheet so the invoice can show standard hours and rush hours on different lines, and the client can see exactly where the premium applies.</p>

<h2>Rush fees and client relationships</h2>
<p>Handled openly, rush fees improve client relationships. Clients who truly need speed get a clear, guaranteed option, while clients who can wait pay less. Rush pricing also protects your existing clients' deadlines, because it discourages casual "can you just get this done tomorrow?" requests that would otherwise push everyone else back. If you track rush revenue separately, you will also see whether it is worth hiring help or adding capacity, which is useful information when you review your <a href="/blog/how-to-raise-prices">prices</a>.</p>

<p>A rush fee is simply the price of speed: publish it, quote it, get approval and show it as a separate, clearly worded line. To add a rush fee line, courier charges and tax to a professional invoice, use our <a href="/invoice-generator">free invoice generator</a>. It needs no sign-up and builds a PDF right in your browser that you can download and send.</p>
`,
  },
  {
    slug: "service-call-fee",
    title: "Service Call Fee (Trip Charge): How to Set and Bill It",
    description:
      "What is a service call fee or trip charge? Typical structures, whether it counts toward repairs, disclosure wording and how to show it on an invoice.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "mobile-mechanic-invoice-template",
      "how-to-bill-for-travel-time",
      "hvac-invoice-template",
      "plumbing-invoice-template",
    ],
    faqs: [
      {
        q: "Is a service call fee the same as a diagnostic fee?",
        a: "They overlap but are not always the same. A service call or trip charge covers coming to the site. A diagnostic fee covers the time and tools to find the problem. Many HVAC, appliance and plumbing companies combine them into one dispatch or diagnostic charge, while others list both. Whatever you do, explain on your website and when booking what the fee includes.",
      },
      {
        q: "Should the service call fee be credited toward the repair?",
        a: "It is a business decision. Crediting the fee toward the repair if the customer approves the work is a strong selling point and is common in residential HVAC and appliance repair. Not crediting it is simpler and protects your margin on small jobs. Either way, state the policy clearly before the visit so customers are not surprised when they see the invoice.",
      },
      {
        q: "Can I charge a service call fee if I cannot fix the problem?",
        a: "Yes, if the customer agreed to the fee in advance. The fee pays for the trip and your time on site, not for a successful repair. Explain what you found, give a written recommendation or estimate, and invoice the service call. Good documentation, such as photos and test readings, helps customers accept the charge even when no repair happened.",
      },
      {
        q: "Is a service call fee taxable?",
        a: "It depends on your state. Some states tax labor and service charges connected to repairs of tangible property, others tax only parts, and some exempt services entirely. Whether a separately stated trip charge is taxable can depend on whether the underlying repair service is taxable. Check your state revenue department or our state-by-state guide before deciding. This is general information, not tax advice.",
      },
      {
        q: "Should I charge more for after-hours service calls?",
        a: "Most trades do. Evening, weekend and holiday calls typically carry a higher dispatch fee or a premium hourly rate because technicians are paid overtime or on-call pay. Publish both rates and confirm which one applies when the customer books, then show the after-hours charge as its own line on the invoice so the customer sees exactly what the premium was.",
      },
      {
        q: "How do I justify a trip charge to customers?",
        a: "Explain what it covers: vehicle costs, fuel, the technician's paid travel time, insurance and the fact that a stocked truck is coming to them. Point out that it lets you keep hourly or flat repair rates lower and that it is credited to the repair if that is your policy. Customers accept fees they understand much more readily than fees that appear without explanation.",
      },
      {
        q: "Can commercial clients be charged a trip charge?",
        a: "Yes. Commercial service agreements often include per-visit trip charges, zone charges or a mobilization fee for larger jobs. Facilities managers expect it to appear in the service contract or rate sheet. Some commercial contracts instead include a set number of visits per month, with extra trips billed at the agreed rate, so check the contract before invoicing.",
      },
      {
        q: "What if the customer cancels after the technician is on the way?",
        a: "Many businesses charge the service call fee if the customer cancels after dispatch or is not home at the appointment time, because the trip cost has already been incurred. Put this in your booking confirmation and terms. A short, polite invoice referencing the appointment time and the policy is usually enough to collect it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A service call fee, also called a trip charge, dispatch fee or callout fee, is a flat charge for sending a technician to a customer's location, usually covering travel, vehicle costs and the first part of the visit. It is common in HVAC, plumbing, electrical, appliance repair and pest control. Disclose it before booking, say whether it is credited toward the repair, and show it as its own line on the invoice.</p>

<p>For home and field service businesses, every visit costs money before a single tool comes out: fuel, vehicle wear, insurance and paid drive time. A service call fee recovers that cost and filters out calls that would never turn into paid work. This guide explains the common structures, how to set your fee, how to disclose it so customers accept it and how to show it on an invoice, with examples.</p>

<h2>What is a service call fee?</h2>
<p>A service call fee is a fixed charge for coming out to a job. Depending on the business, it may cover:</p>
<ul>
<li>Travel to and from the site (time and vehicle cost).</li>
<li>The first 15, 30 or 60 minutes on site.</li>
<li>Diagnosis of the problem.</li>
<li>Nothing beyond arrival, with all labor billed separately.</li>
</ul>
<p>The names are used loosely: <strong>trip charge</strong> usually means travel only; <strong>diagnostic fee</strong> includes troubleshooting; <strong>dispatch fee</strong> and <strong>callout fee</strong> are general terms; <strong>mobilization fee</strong> is used for larger construction or equipment jobs. Pick one term, define it and use it consistently.</p>

<h2>Common service call fee structures</h2>
<table>
<thead><tr><th>Structure</th><th>How it works</th><th>Pros</th><th>Cons</th></tr></thead>
<tbody>
<tr><td>Flat trip charge, not credited</td><td>Fixed fee every visit, plus labor and parts</td><td>Simple, protects margin</td><td>Feels like an extra to customers</td></tr>
<tr><td>Flat fee credited toward repair</td><td>Fee waived or deducted if the customer approves the work</td><td>Strong sales tool</td><td>No travel recovery on approved jobs</td></tr>
<tr><td>Diagnostic fee</td><td>Fixed fee covering trip plus troubleshooting</td><td>Pays for expertise even if no repair</td><td>Needs a clear time limit</td></tr>
<tr><td>Fee including first hour</td><td>Fixed fee covers trip and first hour; extra time billed</td><td>Easy to understand</td><td>Small jobs can feel overpriced</td></tr>
<tr><td>Zone-based fee</td><td>Fee increases by distance band</td><td>Fair for wide service areas</td><td>Needs a map or ZIP code list</td></tr>
<tr><td>After-hours fee</td><td>Higher fee for evenings, weekends, holidays</td><td>Covers overtime costs</td><td>Must be disclosed when booking</td></tr>
</tbody>
</table>

<h2>How much is a service call fee?</h2>
<p>Fees vary widely by trade, region and whether diagnosis is included. As an illustration only, many residential service companies set standard daytime fees somewhere in a range like $50 to $150, with after-hours fees higher. Rather than copying a competitor, calculate a fee that covers your real cost of a visit.</p>
<h3>Worked example: calculating a trip charge</h3>
<p>An appliance repair business averages a 40-minute round trip of 18 miles per call.</p>
<table>
<thead><tr><th>Cost element</th><th>Calculation</th><th>Cost per visit</th></tr></thead>
<tbody>
<tr><td>Technician travel time</td><td>0.67 hr x $38 loaded wage</td><td>$25.46</td></tr>
<tr><td>Vehicle cost</td><td>18 miles x $0.725 (IRS 2026 standard rate used as a proxy)</td><td>$13.05</td></tr>
<tr><td>Dispatch and admin</td><td>Office time per booking</td><td>$6.00</td></tr>
<tr><td>Overhead share (insurance, tools, software)</td><td>Estimated per visit</td><td>$10.00</td></tr>
<tr><td><strong>Cost per visit</strong></td><td></td><td><strong>$54.51</strong></td></tr>
<tr><td><strong>Fee with margin</strong></td><td>Cost x 1.4, rounded</td><td><strong>$79.00</strong></td></tr>
</tbody>
</table>
<p>The IRS business standard mileage rate is a convenient benchmark for vehicle cost; it was set at 72.5 cents per mile for 2026 and later raised mid-year, so check <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates">irs.gov</a> for the current figure and see our <a href="/blog/irs-mileage-rate-2026">IRS mileage rate 2026</a> guide. Your own vehicle costs may be higher or lower. For broader pricing context, see <a href="/blog/handyman-rates">handyman rates</a> and the <a href="/blog/how-to-bill-for-travel-time">guide to billing for travel time</a>.</p>

<h2>How to disclose a service call fee</h2>
<p>Customers rarely object to a trip charge they were told about. They object to one they discover on the invoice. Disclose it in at least three places:</p>
<ol>
<li><strong>Website and pricing page:</strong> "A $79 service call fee applies to all visits. It is credited toward any repair you approve on the same visit."</li>
<li><strong>When booking</strong> (phone script or online booking form): confirm the fee and any after-hours rate.</li>
<li><strong>Appointment confirmation</strong> by text or email, including the cancellation rule.</li>
</ol>
<p>Some states and cities have home improvement or consumer protection rules about estimates and disclosures, so check what applies to your trade. Put the full policy in your <a href="/blog/invoice-terms-and-conditions">terms and conditions</a> and on your <a href="/blog/work-order-template">work order</a> so the customer signs it before work starts.</p>
<h3>Sample disclosure wording</h3>
<ul>
<li>"Service call: $79 during business hours (Mon to Fri, 8 a.m. to 5 p.m.), $149 evenings, weekends and holidays. Includes travel and diagnosis up to 30 minutes."</li>
<li>"The service call fee is applied to the cost of repairs approved during the same visit."</li>
<li>"If you cancel after the technician has been dispatched, or no one is home at the scheduled time, the service call fee applies."</li>
<li>"Customers outside our primary service area (beyond 25 miles) pay an additional $1.50 per mile each way."</li>
</ul>

<h2>How to show a service call fee on an invoice</h2>
<h3>Example 1: fee not credited</h3>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Service call: travel and diagnosis (October 29, 2026, 10:15 a.m.)</td><td>1</td><td>$79.00</td><td>$79.00</td></tr>
<tr><td>Labor: replace dryer heating element and thermal fuse</td><td>1.25 hr</td><td>$110.00</td><td>$137.50</td></tr>
<tr><td>Heating element (OEM part)</td><td>1</td><td>$64.00</td><td>$64.00</td></tr>
<tr><td>Thermal fuse</td><td>1</td><td>$18.00</td><td>$18.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$298.50</strong></td></tr>
</tbody>
</table>
<h3>Example 2: fee credited toward the repair</h3>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Diagnostic service call</td><td>1</td><td>$89.00</td><td>$89.00</td></tr>
<tr><td>Service call credit (repair approved same visit)</td><td>1</td><td>-$89.00</td><td>-$89.00</td></tr>
<tr><td>Replace capacitor, outdoor AC unit (flat rate)</td><td>1</td><td>$245.00</td><td>$245.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$245.00</strong></td></tr>
</tbody>
</table>
<p>Showing the fee and the credit, instead of leaving both off, reminds the customer of the value they received. Sales tax is added according to your state's rules; check them with our <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a> guide and the <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>
<h3>Example 3: diagnosis only, customer declines the repair</h3>
<table>
<thead><tr><th>Description</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Diagnostic service call: water heater not heating. Found failed gas control valve; written estimate EST-1192 provided ($685).</td><td>$89.00</td></tr>
<tr><td><strong>Total due</strong></td><td><strong>$89.00</strong></td></tr>
</tbody>
</table>
<p>You can create any of these in our <a href="/invoice-generator">free invoice generator</a>. For trade-specific layouts, see the <a href="/blog/hvac-invoice-template">HVAC invoice template</a>, <a href="/blog/plumbing-invoice-template">plumbing invoice template</a>, <a href="/blog/appliance-repair-invoice-template">appliance repair invoice template</a> and <a href="/blog/garage-door-repair-invoice-template">garage door repair invoice template</a>.</p>

<h2>Should you credit the service call fee toward the repair?</h2>
<p>This is the most common question owners ask. Run the numbers on your own job mix. Suppose a company runs 400 calls a month with a $79 fee, and 70% of customers approve a repair on the spot.</p>
<table>
<thead><tr><th>Policy</th><th>Monthly fee revenue</th><th>Effect</th></tr></thead>
<tbody>
<tr><td>Fee never credited</td><td>400 x $79 = $31,600</td><td>All travel costs recovered; some customers decline to book</td></tr>
<tr><td>Fee credited if repair approved</td><td>120 x $79 = $9,480</td><td>Travel cost on approved jobs must be built into repair prices</td></tr>
<tr><td>Half credited if repair approved</td><td>120 x $79 + 280 x $39.50 = $20,540</td><td>A middle path that still feels like a deal</td></tr>
</tbody>
</table>
<p>Crediting the fee is not "free": the travel cost moves into your repair pricing. That is fine if your flat-rate or hourly prices already cover it. If your repair margins are thin, a non-credited fee or a partial credit protects profit. Many companies also test the policy for a few months and watch the booking rate and the approval rate before committing.</p>

<h2>Service call fees for commercial and recurring clients</h2>
<p>Commercial customers such as property managers, restaurants and offices often have service agreements instead of ad hoc calls. Typical arrangements include a per-visit trip charge written into the rate sheet, a monthly maintenance fee that includes scheduled visits, and an emergency callout rate for after-hours calls. Invoice these the same way, but reference the agreement number and the work order so the customer's accounts payable team can match them; our guide to <a href="/blog/invoice-processing">invoice processing</a> explains what commercial customers check before paying.</p>

<h2>Step-by-step: setting up your service call fee</h2>
<ol>
<li>Calculate your true cost per visit (travel time, vehicle, admin, overhead).</li>
<li>Decide what the fee includes: travel only, travel plus diagnosis, or a first hour.</li>
<li>Decide whether to credit it toward approved repairs.</li>
<li>Set after-hours and out-of-area rates.</li>
<li>Write disclosure wording for the website, booking script and confirmations.</li>
<li>Add the fee as a saved line item in your invoice template.</li>
<li>Train technicians to explain it confidently on site.</li>
<li>Review the fee annually as fuel, wages and insurance change.</li>
</ol>

<h2>Common service call fee mistakes</h2>
<ul>
<li><strong>Not mentioning it until the invoice.</strong> This causes most disputes and bad reviews.</li>
<li><strong>Unclear "credited toward repair" rules.</strong> Say whether it applies only to the same visit and only to approved repairs.</li>
<li><strong>One fee for a huge service area.</strong> Long drives lose money; use zones.</li>
<li><strong>Charging the fee and also billing travel time.</strong> Unless clearly disclosed, customers see it as double charging.</li>
<li><strong>No after-hours rate.</strong> Overtime calls at standard prices erode margin.</li>
<li><strong>Vague invoice labels</strong> like "fee" with no date, time or description.</li>
</ul>

<p>A service call fee is fair when it reflects the real cost of getting a technician to the door and when customers hear about it before they book. Price it from your actual costs, disclose it everywhere and show it clearly on every invoice. Our <a href="/invoice-generator">free invoice generator</a> lets you add the service call, any credit, labor and parts in a few clicks, with no sign-up, and it downloads a PDF built entirely in your browser.</p>
`,
  },
  {
    slug: "how-to-bill-for-travel-time",
    title: "How to Bill for Travel Time: Rates, Rules and Wording",
    description:
      "How to bill for travel time: portal-to-portal vs one-way, full vs half rate, mileage vs time, travel minimums, contract wording and invoice examples to copy.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["service-call-fee", "mileage-invoice", "reimbursable-expenses-invoice"],
    faqs: [
      {
        q: "Is it normal to charge clients for travel time?",
        a: "Yes, in many fields. Trades, consultants, lawyers, IT support, photographers and mobile service providers commonly bill travel in some form, whether as hourly time, a trip charge, mileage or a flat travel fee. What is not normal is billing it without telling the client first. Local travel within a normal service area is often absorbed into rates, while longer trips are billed.",
      },
      {
        q: "Should I charge my full hourly rate for travel?",
        a: "Many professionals charge a reduced rate, commonly half, for travel time because they cannot do billable work while driving. Others charge full rate if travel prevents them from serving other clients or if they can work productively on a train or plane. Whatever you choose, put the rate in your contract or estimate so the client can plan for it.",
      },
      {
        q: "Can I charge both mileage and travel time?",
        a: "Yes, they cover different costs. Travel time pays for your hours; mileage covers vehicle running costs such as fuel, wear and insurance. Many contracts bill both for longer trips. Some businesses instead combine them into a single flat travel fee or zone charge, which is simpler for clients. Just avoid billing a trip charge plus time plus mileage for the same short local drive.",
      },
      {
        q: "What is portal-to-portal billing?",
        a: "Portal-to-portal billing means charging from the moment you leave your base, such as your shop or office, until you return. It is common in equipment rental, towing, mobile repair and some trades. The alternative is charging only for time on site, or for one-way travel. Portal-to-portal should be clearly stated in the rate sheet, because the client pays for both directions.",
      },
      {
        q: "How do I bill travel when visiting several clients in one trip?",
        a: "Split the travel cost fairly. A common approach is to allocate the shared travel time and expenses evenly or in proportion to the time spent with each client, and bill each client only for any extra legs specific to them. Explain the split on each invoice. Never bill the full trip to each client, which effectively double charges for the same hours.",
      },
      {
        q: "Is travel time taxable when billed to a client?",
        a: "Travel time billed to a client is part of your business income, so it is reported like any other revenue. Whether sales tax applies depends on your state and whether your underlying service is taxable; some states tax charges that are part of a taxable service. Reimbursed expenses may also be treated differently. Check your state's guidance. This is general information, not tax advice.",
      },
      {
        q: "Do I have to pay employees for travel time I bill to clients?",
        a: "That is a separate question governed by employment law, not by your client contract. Under the US Fair Labor Standards Act, travel between job sites during the workday is generally paid time for nonexempt employees, while ordinary home-to-work commuting usually is not. Special rules apply to overnight travel. Check the Department of Labor's guidance or an employment adviser for your situation.",
      },
      {
        q: "What is a reasonable travel minimum?",
        a: "Many service businesses charge a minimum of 30 minutes to one hour of travel per visit, or a flat trip charge, so very short trips still cover setup and drive time. Long-distance work may use a minimum per travel day instead. Set a minimum that reflects your average real travel time and apply it consistently so clients see it as policy rather than an arbitrary charge.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To bill for travel time, agree the method in writing before the job, then invoice it as a separate line. Common methods are hourly travel at full or half rate, portal-to-portal time (from leaving your base to returning), a flat trip or zone fee, and mileage for vehicle costs. Show the dates, hours or miles and the rate, such as "Travel time: 2.5 hrs at $45/hr (50% rate)."</p>

<p>Travel is time you cannot spend on paid work, plus real vehicle and transport costs. Whether you are a plumber driving across town, a consultant flying to a client or a photographer heading to a venue, you need a consistent, fair way to bill for it. This guide compares the methods, explains how to choose rates, shows how to combine time and mileage, gives contract and invoice wording, and walks through worked examples.</p>

<h2>What does billing for travel time mean?</h2>
<p>Billing for travel time means charging a client for the hours you spend traveling to, from or between their work locations, either at your normal rate, a reduced rate or as a flat fee. It is distinct from:</p>
<ul>
<li><strong>Mileage:</strong> a per-mile charge for vehicle running costs. See our <a href="/blog/mileage-invoice">mileage invoice</a> guide.</li>
<li><strong>Travel expenses:</strong> flights, hotels, parking, tolls and meals, usually billed at cost as <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses</a>.</li>
<li><strong>Service call fee:</strong> a flat <a href="/blog/service-call-fee">trip charge</a> for coming out to a site.</li>
</ul>
<p>Many businesses use a combination: for example, a trip charge for local visits and hourly travel plus expenses for out-of-town work.</p>

<h2>Methods for billing travel time compared</h2>
<table>
<thead><tr><th>Method</th><th>How it works</th><th>Common in</th><th>Pros</th><th>Cons</th></tr></thead>
<tbody>
<tr><td>Full hourly rate</td><td>Travel billed like work hours</td><td>Consultants, lawyers, IT on-site support</td><td>Simple; fully compensates time</td><td>Clients may push back</td></tr>
<tr><td>Reduced rate (e.g. 50%)</td><td>Travel billed at a fraction of normal rate</td><td>Professional services, freelancers</td><td>Seen as fair</td><td>Undercompensates if travel blocks other work</td></tr>
<tr><td>Portal-to-portal</td><td>Clock runs from leaving base to returning</td><td>Towing, equipment rental, mobile repair, trades</td><td>Captures all time</td><td>Must be disclosed clearly</td></tr>
<tr><td>One-way only</td><td>Bill travel to the site, not the return</td><td>Some trades and consultants</td><td>Compromise approach</td><td>Loses half the time</td></tr>
<tr><td>Flat trip or zone fee</td><td>Fixed fee per visit or distance band</td><td>Home services, mobile businesses</td><td>Predictable for clients</td><td>Can lose money on long trips</td></tr>
<tr><td>Travel day rate</td><td>Fixed amount per day spent traveling</td><td>Out-of-town consulting, events, crews</td><td>Simple for long trips</td><td>Needs clear definition of a travel day</td></tr>
<tr><td>Mileage only</td><td>Per-mile charge, no time</td><td>Local services, delivery</td><td>Easy to verify</td><td>Does not pay for your hours</td></tr>
</tbody>
</table>

<h2>How much should you charge for travel time?</h2>
<p>There is no legal rate for billing clients; it is a commercial decision. Consider:</p>
<ul>
<li><strong>Opportunity cost:</strong> if travel prevents you from serving another paying client, full rate is justified.</li>
<li><strong>Productivity while traveling:</strong> if you can work on a train or plane for the client, bill that work as normal time instead of travel time.</li>
<li><strong>Market norms:</strong> half rate for travel is a widely used compromise among consultants and freelancers.</li>
<li><strong>Service area:</strong> many businesses absorb travel within a core area (say 15 or 20 miles) and charge only beyond it.</li>
</ul>
<h3>Mileage rates</h3>
<p>For vehicle costs, many businesses use the IRS business standard mileage rate as a benchmark when billing clients. For 2026 the IRS initially set it at 72.5 cents per mile and later raised it mid-year; check the <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates">IRS standard mileage rates page</a> for the rate that applies to your travel dates. Clients are not obliged to accept the IRS rate, and you can charge more or less by agreement. Our <a href="/blog/irs-mileage-rate-2026">IRS mileage rate 2026</a> guide and <a href="/blog/standard-mileage-vs-actual-expenses">standard mileage vs actual expenses</a> explain the tax side, and a <a href="/blog/mileage-log-template">mileage log template</a> helps you keep records.</p>

<h2>Worked example 1: local trade, portal-to-portal</h2>
<p>A mobile welding service charges $95 per hour portal-to-portal, with a one-hour minimum, plus $1.25 per mile beyond 20 miles round trip. A job 28 miles away (56 miles round trip) takes 2 hours on site and 1 hour 10 minutes of driving in total.</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Labor, on-site welding repair: trailer hitch frame (October 28, 2026)</td><td>2.0 hrs</td><td>$95.00</td><td>$190.00</td></tr>
<tr><td>Travel time, portal-to-portal (depart shop 8:05 a.m., return 11:15 a.m.; driving 1.17 hrs)</td><td>1.17 hrs</td><td>$95.00</td><td>$111.15</td></tr>
<tr><td>Mileage beyond 20-mile included radius (56 - 20 miles)</td><td>36 mi</td><td>$1.25</td><td>$45.00</td></tr>
<tr><td>Welding rod and consumables</td><td>1</td><td>$22.00</td><td>$22.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$368.15</strong></td></tr>
</tbody>
</table>
<p>See our <a href="/blog/welding-invoice-template">welding invoice template</a> for a full layout.</p>

<h2>Worked example 2: consultant, out-of-town trip at half rate</h2>
<p>A consultant billing $160 per hour agrees with the client: travel time at 50% ($80 per hour), capped at 8 billable travel hours per trip, plus flights and hotel at cost. The trip involves 6.5 hours of door-to-door travel each way (13 hours total).</p>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>On-site workshop facilitation, November 4 to 5, 2026</td><td>14 hrs</td><td>$160.00</td><td>$2,240.00</td></tr>
<tr><td>Travel time at 50% rate (13 hrs actual, capped at 8 per agreement)</td><td>8 hrs</td><td>$80.00</td><td>$640.00</td></tr>
<tr><td>Airfare, economy (receipt attached)</td><td>1</td><td>$412.60</td><td>$412.60</td></tr>
<tr><td>Hotel, 2 nights (receipt attached)</td><td>2</td><td>$189.00</td><td>$378.00</td></tr>
<tr><td>Airport parking</td><td>1</td><td>$54.00</td><td>$54.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$3,724.60</strong></td></tr>
</tbody>
</table>
<p>Showing the actual hours and the cap builds trust: the client can see they are getting a discount. See the <a href="/blog/consulting-invoice-template">consulting invoice template</a> for more examples and our <a href="/blog/how-to-invoice-for-hourly-work">hourly invoicing guide</a> for tracking time.</p>

<h2>How to word travel terms in a contract or estimate</h2>
<ul>
<li>"Travel within 20 miles of our shop is included. Beyond that, travel time is billed at $95/hr portal-to-portal and mileage at $1.25/mile."</li>
<li>"Travel time is billed at 50% of the standard hourly rate, up to a maximum of 8 hours per round trip. Work performed while traveling is billed at the standard rate."</li>
<li>"Out-of-town engagements include a travel day fee of $600 per travel day plus reasonable expenses at cost, with receipts."</li>
<li>"A minimum travel charge of 30 minutes applies to each visit."</li>
<li>"When one trip serves several clients, shared travel time and expenses are divided equally among them."</li>
</ul>
<p>Put the agreed wording in your <a href="/blog/service-agreement-template">service agreement</a>, <a href="/blog/estimate-template">estimate</a> or <a href="/blog/freelance-contract-template">freelance contract</a> so the invoice simply applies what was already agreed.</p>

<h2>How to show travel time on an invoice: step by step</h2>
<ol>
<li><strong>Log it as it happens:</strong> departure and arrival times, start and end mileage, and the purpose of the trip.</li>
<li><strong>Apply the agreed method:</strong> rate, minimum, cap and included radius.</li>
<li><strong>Use separate lines</strong> for travel time, mileage and each type of expense.</li>
<li><strong>Describe each line</strong> with dates, route or times and the rate basis.</li>
<li><strong>Attach receipts</strong> for reimbursed expenses if the client requires them.</li>
<li><strong>Check tax treatment</strong> for your state; our <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps with the arithmetic.</li>
<li><strong>Generate the invoice</strong> in a consistent format, for example in our <a href="/invoice-generator">free invoice generator</a>.</li>
</ol>

<h2>How to split travel across several clients</h2>
<p>When one trip serves more than one client, bill each client a fair share instead of the whole trip. Example: a photographer drives 3 hours (round trip) and 140 miles to shoot two events for two clients in the same city, with 1 extra hour and 20 miles to reach the second venue.</p>
<table>
<thead><tr><th>Cost</th><th>Shared or specific</th><th>Client A</th><th>Client B</th></tr></thead>
<tbody>
<tr><td>Main round trip, 3 hrs at $50/hr travel rate</td><td>Shared equally</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>Extra leg to second venue, 1 hr</td><td>Client B only</td><td>$0.00</td><td>$50.00</td></tr>
<tr><td>Mileage, 140 mi at $0.70</td><td>Shared equally</td><td>$49.00</td><td>$49.00</td></tr>
<tr><td>Extra mileage, 20 mi at $0.70</td><td>Client B only</td><td>$0.00</td><td>$14.00</td></tr>
<tr><td><strong>Travel billed</strong></td><td></td><td><strong>$124.00</strong></td><td><strong>$188.00</strong></td></tr>
</tbody>
</table>
<p>Each invoice should say "shared travel, split between two clients" so the client understands why the figure is lower than the full trip. Document the split in your records in case either client asks.</p>

<h2>Travel billing by profession</h2>
<table>
<thead><tr><th>Profession</th><th>Common approach</th></tr></thead>
<tbody>
<tr><td>Plumbers, HVAC, electricians</td><td>Flat trip charge locally; portal-to-portal for remote jobs</td></tr>
<tr><td>Consultants and trainers</td><td>Travel at 50% to 100% of rate, plus expenses at cost</td></tr>
<tr><td>Lawyers and accountants</td><td>Travel billed hourly per engagement letter, sometimes reduced</td></tr>
<tr><td>Photographers, DJs, makeup artists</td><td>Free within a radius, then per-mile or flat travel fee; see <a href="/blog/makeup-artist-rates">makeup artist rates</a></td></tr>
<tr><td>IT and managed service providers</td><td>On-site visit fee or minimum hours; remote support has none</td></tr>
<tr><td>Home health and mobile care</td><td>Often absorbed into visit rates; mileage may be reimbursed</td></tr>
</tbody>
</table>

<h2>Billing travel time vs paying employees for travel</h2>
<p>Do not confuse what you bill clients with what you must pay staff. For US employers, the Fair Labor Standards Act and the Portal-to-Portal Act govern when employee travel is compensable: travel between job sites during the workday is generally working time for nonexempt employees, while normal commuting from home is generally not. The Department of Labor's guidance on <a href="https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked">hours worked</a> explains the rules. Your client billing policy can be more or less generous than your payroll obligations, but your payroll must still follow the law.</p>

<h2>Common mistakes when billing for travel</h2>
<ul>
<li><strong>Not agreeing it in advance.</strong> Travel is the line item clients most often dispute.</li>
<li><strong>Double charging:</strong> a trip charge plus full travel time plus mileage for a short local trip.</li>
<li><strong>Billing a full trip to several clients.</strong> Split shared travel.</li>
<li><strong>Billing commute-style travel</strong> from home to a regular client site you visit daily, when the client expects it absorbed.</li>
<li><strong>Vague lines</strong> like "Travel: $200" with no hours, miles or dates.</li>
<li><strong>No records.</strong> Without a log, you cannot defend the charge or support tax deductions.</li>
<li><strong>Charging work rate for travel when you also billed work done in transit</strong> for the same hours.</li>
</ul>

<p>Billing for travel time is fair and expected when the method is agreed upfront and shown transparently on the invoice. Choose a method that fits your work, log the hours and miles, and give each charge its own clear line. When you are ready to bill, our <a href="/invoice-generator">free invoice generator</a> lets you add travel time, mileage and expenses as separate lines with no sign-up, then download a finished PDF that is built in your browser.</p>
`,
  },
];
