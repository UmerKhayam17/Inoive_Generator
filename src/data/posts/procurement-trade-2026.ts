import type { PostDraft } from "../blog";

export const PROCUREMENT_TRADE_2026_POSTS: PostDraft[] = [
  {
    slug: "invoice-approval-workflow",
    title: "Invoice Approval Workflow: Steps, Rules and Templates",
    description:
      "Build an invoice approval workflow that pays the right bills on time: the steps, an approval matrix, tolerance rules, a worked example and a setup checklist.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["three-way-match", "touchless-invoice-processing", "duplicate-invoice-payments"],
    faqs: [
      {
        q: "What is an invoice approval workflow?",
        a: "An invoice approval workflow is the defined path a supplier invoice follows from the moment it arrives until it is cleared for payment. It covers who logs the invoice, which checks are run, who must approve it based on amount and cost center, how exceptions are handled and when the approved bill is scheduled for payment. Writing it down makes approvals faster and harder to bypass.",
      },
      {
        q: "Who should approve supplier invoices?",
        a: "Usually the person who owns the budget the cost will be charged to, such as a department manager, plus a more senior approver once the amount passes set thresholds. The person who approves should not be the same person who enters the supplier's bank details or releases the payment. Small businesses often have the owner approve everything above a modest amount.",
      },
      {
        q: "How many approvers does an invoice need?",
        a: "There is no universal number. Many businesses use one approver for routine, PO-backed invoices that match within tolerance, and two for large amounts, non-PO spend or new suppliers. Adding approvers to every invoice slows payment and encourages rubber-stamping, so keep extra levels for the invoices that actually carry more risk.",
      },
      {
        q: "What is an approval matrix?",
        a: "An approval matrix, sometimes called a delegation of authority, is a table that lists who can approve spending up to which amount, for which cost centers or spend categories. It is the rulebook your workflow follows. Review it at least once a year and whenever someone joins, leaves or changes role, so invoices never wait for a person who no longer holds the authority.",
      },
      {
        q: "How long should invoice approval take?",
        a: "Set your own target based on your payment terms. If suppliers are paid on net 30, approval should normally finish within the first week or two so the bill makes a scheduled payment run with time to spare. Track the average days from receipt to approval and chase the approvers or steps that consistently cause delays.",
      },
      {
        q: "What happens when an invoice does not match the purchase order?",
        a: "It becomes an exception. Common outcomes are asking the buyer to confirm a price change, waiting for the goods receipt, requesting a credit note from the supplier for an overcharge, or approving the difference with a documented reason. Small variances within an agreed tolerance can be approved automatically, but the tolerance should be written into your policy.",
      },
      {
        q: "Can a small business use an invoice approval workflow without software?",
        a: "Yes. A shared inbox for invoices, a simple log in a spreadsheet, a written approval matrix and a rule that approvals are recorded by email or a signed stamp already give you most of the control. Software adds automatic routing, reminders and an audit trail, which matters more as invoice volume and the number of approvers grow.",
      },
      {
        q: "Does your invoice generator route invoices for approval?",
        a: "No. Our free invoice generator builds a PDF invoice in your browser from the details you type. It does not send invoices, route them to approvers, track their status or connect to accounts payable software. It is useful on the supplier side: a clear invoice with a PO number and complete details is far easier for a client's approval workflow to process.",
      },
      {
        q: "How do I get my invoice approved faster by a large client?",
        a: "Quote the purchase order number exactly, name the requester or contact who ordered the work, use the client's legal entity name and billing address, and make sure quantities and prices match the PO. Send it to the accounts payable address or portal the client specifies, not to your contact's personal inbox, and ask which approval threshold applies if payment seems slow.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An invoice approval workflow is the set of steps every supplier bill follows before payment: receive and log it, check it for duplicates and errors, match it to the purchase order and receipt, code it, route it to the right approver by amount, then schedule payment. A written approval matrix and tolerance rules keep it fast and controlled.</p>

<p>Most late supplier payments are not caused by a lack of cash. They happen because an invoice sat in someone's inbox, went to the wrong approver, or was missing a purchase order number. Most overpayments happen for the opposite reason: invoices were approved too easily. A clear invoice approval workflow fixes both problems by deciding in advance who checks what, in which order, and what happens when something does not match.</p>

<p>This guide walks through the standard steps, shows how to build an approval matrix, works through a tolerance example with real numbers, and ends with a checklist and the most common mistakes. It is written for small and mid-sized businesses that pay suppliers, but suppliers can use it too: once you know how a client approves bills, you can send invoices that sail through. If you are on that side, the <a href="/invoice-generator">free invoice generator</a> creates a clean PDF with all the fields approvers look for.</p>

<h2>What an invoice approval workflow does</h2>
<p>An approval workflow is a control. It exists to answer three questions before money leaves the business:</p>
<ul>
<li><strong>Is the invoice real?</strong> It comes from a supplier you actually use, it is not a duplicate, and the bank details belong to that supplier.</li>
<li><strong>Is the invoice right?</strong> Quantities, prices, tax and totals agree with what was ordered and received.</li>
<li><strong>Is the spending authorized?</strong> Someone with budget authority for that cost center has agreed that the business should pay it.</li>
</ul>
<p>Everything else, from reminders to dashboards, exists to answer those questions faster. If your process answers all three for every invoice, it is working. If it only answers the third ("my manager clicked approve"), it is not a real control.</p>

<h2>The 8 steps of a standard invoice approval workflow</h2>
<p>Most accounts payable teams follow some version of these steps. A very small business might combine several of them into one person's afternoon; a large one spreads them across systems and teams.</p>
<ol>
<li><strong>Receive.</strong> Invoices arrive in one place: a dedicated AP email address, a supplier portal or an e-invoicing network. Invoices sent to individual employees are forwarded there, not paid from the inbox.</li>
<li><strong>Log and capture.</strong> Record the supplier, invoice number, invoice date, due date, amount and PO number. Many teams use OCR and data extraction software for this step; others type it into a spreadsheet or the accounting system.</li>
<li><strong>Validate.</strong> Check that the supplier exists in your vendor master, the invoice is addressed to the correct legal entity, required tax details are present and the arithmetic is correct. Run a duplicate check on supplier plus invoice number plus amount.</li>
<li><strong>Match.</strong> For purchase-order spend, compare the invoice with the PO (two-way match) and with the goods receipt or delivery confirmation (three-way match). Our guide to the <a href="/blog/three-way-match">three-way match</a> explains each comparison in detail.</li>
<li><strong>Code.</strong> Assign the general ledger account, cost center, project or department, and the correct tax treatment.</li>
<li><strong>Route and approve.</strong> Send the invoice to the approver set by your approval matrix. Matched PO invoices may need only a light confirmation; non-PO invoices need the budget owner to confirm the spend.</li>
<li><strong>Schedule payment.</strong> Approved invoices join the next payment run that lands on or just before the due date, or earlier if an early payment discount is worth taking.</li>
<li><strong>Archive.</strong> Store the invoice, approvals and supporting documents together so you can answer an auditor, a tax inspector or a supplier query months later.</li>
</ol>

<h3>PO invoices versus non-PO invoices</h3>
<p>The workflow splits into two paths at step 4. A PO-backed invoice was approved in advance when the order was raised, so the invoice approval mainly confirms that the bill matches what was authorized. A non-PO invoice, such as a utility bill, a subscription or an ad hoc repair, has had no prior approval, so the budget owner must approve the spending itself. Many businesses reduce risk by requiring a PO for any purchase above a set amount. If you are unsure where the line sits between the two documents, read <a href="/blog/invoice-vs-purchase-order">invoice vs purchase order</a>.</p>

<h2>Building an approval matrix</h2>
<p>The approval matrix is the heart of the workflow. It turns "ask whoever seems senior" into a rule anyone can follow. A simple matrix uses invoice amount and invoice type. The thresholds below are an illustration only; set your own based on your size and risk appetite.</p>
<table>
<thead>
<tr><th>Invoice type and amount</th><th>First approver</th><th>Second approver</th></tr>
</thead>
<tbody>
<tr><td>PO invoice, matched within tolerance, any amount</td><td>Automatic or AP clerk</td><td>None</td></tr>
<tr><td>Non-PO invoice up to $1,000</td><td>Budget owner (department manager)</td><td>None</td></tr>
<tr><td>Non-PO invoice $1,000.01 to $10,000</td><td>Budget owner</td><td>Department head</td></tr>
<tr><td>Non-PO invoice $10,000.01 to $50,000</td><td>Department head</td><td>Finance director</td></tr>
<tr><td>Any invoice above $50,000</td><td>Finance director</td><td>CFO or owner</td></tr>
<tr><td>First invoice from a new supplier, any amount</td><td>Budget owner</td><td>AP manager (verifies vendor setup)</td></tr>
</tbody>
</table>
<p>A few design rules make a matrix work in practice:</p>
<ul>
<li><strong>Use roles, not names.</strong> Write "marketing manager", not "Sarah". Keep a separate list mapping roles to people.</li>
<li><strong>Plan for absence.</strong> Every approver needs a named delegate with the same or a lower limit, so invoices do not wait two weeks for someone on vacation.</li>
<li><strong>Stop invoice splitting.</strong> If someone can approve up to $10,000, a $14,000 bill split into two $7,000 invoices must still go to the higher level. Review approvals by supplier and period, not just one invoice at a time.</li>
<li><strong>Separate duties.</strong> The approver should not be the person who sets up the supplier or changes its bank details, and neither should release the payment alone. Segregation of duties is a core idea in internal control frameworks such as the one published by <a href="https://www.coso.org/" target="_blank" rel="noopener noreferrer">COSO</a>.</li>
</ul>

<h2>Tolerance rules: a worked example</h2>
<p>Tolerances decide how much an invoice may differ from the purchase order before a person has to look at it. Without them, every rounding difference becomes an exception; with loose ones, overcharges slip through. A common approach combines a percentage and a fixed cap, and applies whichever is lower.</p>
<p>Suppose your policy allows a variance of up to 2% of the PO value or $150, whichever is lower. A supplier sends an invoice for $10,450 against a PO for $10,000.</p>
<ul>
<li>Percentage tolerance: $10,000 &times; 2% = $200.</li>
<li>Fixed cap: $150.</li>
<li>Applied tolerance (the lower of the two): $150.</li>
<li>Maximum invoice that passes automatically: $10,000 + $150 = $10,150.</li>
<li>Actual variance: $10,450 &minus; $10,000 = $450, which is $300 more than the tolerance allows.</li>
</ul>
<p>Result: the invoice is held as an exception. AP asks the buyer whether a price increase was agreed. If not, the supplier is asked for a <a href="/blog/credit-note-guide">credit note</a> or a corrected invoice for $10,000.</p>
<p>Now compare a second invoice for $10,120 against the same PO. The variance is $120, which is within the $150 tolerance, so it can be approved without manual review. Over a year, tolerances like this remove a large share of routine exceptions while still catching meaningful overcharges.</p>

<h3>What slow approval actually costs</h3>
<p>Delay has a price when suppliers offer early payment discounts. Take terms of 2/10 net 30: pay within 10 days and take 2% off, otherwise pay the full amount by day 30. On a $10,000 invoice, an approval that takes 15 days loses a $200 discount. Expressed as an annual rate, giving up that discount means paying 2% to keep $9,800 for an extra 20 days: (2 &divide; 98) &times; (365 &divide; 20) = 0.0204 &times; 18.25 = about 37.2% a year. Few businesses borrow that expensively on purpose. See our explainer on the <a href="/blog/early-payment-discount">early payment discount</a> for when taking one makes sense.</p>

<h2>Invoice approval workflow template</h2>
<p>You can adapt this text into a one-page policy. Fill in the brackets for your business.</p>
<ul>
<li><strong>Where invoices go:</strong> All supplier invoices are sent to [ap@yourcompany.com]. Employees forward any invoice they receive within one business day.</li>
<li><strong>Logging:</strong> AP logs each invoice within [2] business days, recording supplier, invoice number, dates, amount, currency and PO number.</li>
<li><strong>Required details:</strong> Invoices missing a PO number (where one was issued), a valid invoice number or the correct legal entity name are returned to the supplier.</li>
<li><strong>Matching:</strong> PO invoices are matched to the PO and receipt. Variances up to [2% or $150, whichever is lower] are accepted automatically.</li>
<li><strong>Approval:</strong> Non-PO and exception invoices are approved according to the approval matrix. Approvers respond within [3] business days or the invoice escalates to their delegate.</li>
<li><strong>Bank details:</strong> Any change to supplier bank details is verified by phone using contact details already on file before the invoice is approved.</li>
<li><strong>Payment:</strong> Approved invoices are paid in the [weekly] payment run that falls before the due date.</li>
<li><strong>Records:</strong> Invoices, approvals and supporting documents are retained for [7] years or the period required by law.</li>
</ul>

<h2>Manual, email-based or automated approval?</h2>
<table>
<thead>
<tr><th>Approach</th><th>Works best for</th><th>Main weakness</th></tr>
</thead>
<tbody>
<tr><td>Paper or PDF with signature</td><td>Very low volume, one or two approvers</td><td>Easy to lose; no reminders; hard to audit</td></tr>
<tr><td>Email plus a spreadsheet log</td><td>Dozens of invoices a month</td><td>Approvals scattered across inboxes; manual chasing</td></tr>
<tr><td>Accounting software approval feature</td><td>Small teams already on one ledger</td><td>Limited routing rules and matching</td></tr>
<tr><td>Dedicated AP automation platform</td><td>Hundreds of invoices or many approvers</td><td>Cost and setup time; still needs clean vendor data</td></tr>
</tbody>
</table>
<p>Automation removes chasing and creates an audit trail, but it automates whatever rules you give it. Write the matrix and tolerances first, then choose a tool. Our guide to <a href="/blog/touchless-invoice-processing">touchless invoice processing</a> explains how far automation can realistically go, and <a href="/blog/accounts-payable-kpis">accounts payable KPIs</a> shows how to measure cycle time and exception rates once the workflow is running.</p>

<h2>Setup checklist</h2>
<ul>
<li>One intake address or portal for all supplier invoices, published to suppliers.</li>
<li>A written approval matrix by role, amount and spend type, with delegates.</li>
<li>A rule for when a purchase order is required.</li>
<li>Matching rules (two-way or three-way) and written tolerances.</li>
<li>Duplicate checks on supplier, invoice number, date and amount.</li>
<li>Independent verification of new suppliers and of any bank detail change.</li>
<li>Separation of duties between vendor setup, approval and payment release.</li>
<li>Approval deadlines, reminders and an escalation path.</li>
<li>A fixed payment run schedule tied to due dates.</li>
<li>Document retention and an annual review of the whole policy.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Approving from the PDF alone.</strong> An approver who only sees the invoice cannot tell whether goods arrived. Give them the PO and receipt status alongside it.</li>
<li><strong>Too many approval levels.</strong> If every invoice needs four signatures, people stop reading and click approve. Reserve extra levels for higher risk.</li>
<li><strong>No duplicate check.</strong> The same invoice arriving by email and by post, or resent with a slightly different number, is one of the most common causes of overpayment. Our guide to <a href="/blog/duplicate-invoice-payments">duplicate invoice payments</a> lists the checks that catch them.</li>
<li><strong>Trusting bank details on the invoice.</strong> Pay to the bank account in your verified vendor record, not to whatever the latest invoice says.</li>
<li><strong>Letting invoices age in inboxes.</strong> Approval clocks should start when the invoice arrives, not when someone opens it.</li>
<li><strong>A matrix nobody updates.</strong> People change roles. Review authorities at least yearly.</li>
</ul>

<h2>For suppliers: how to get through a client's approval workflow</h2>
<p>If you send invoices to larger companies, their approval workflow decides when you get paid. You can help it along:</p>
<ul>
<li>Quote the <a href="/blog/po-number-on-invoice">PO number on the invoice</a> exactly as issued, and bill against one PO per invoice unless told otherwise.</li>
<li>Match quantities, units and unit prices to the PO line by line.</li>
<li>Use the client's full legal entity name and billing address, and name the person who ordered the work.</li>
<li>Give each invoice a unique number; the <a href="/tools/invoice-number-generator">invoice number generator</a> helps you keep a consistent sequence.</li>
<li>Send it to the AP address or portal the client specified, and keep proof of submission.</li>
</ul>
<p>A tidy layout helps too. The <a href="/invoice-templates/corporate">corporate invoice template</a> puts the PO number, dates and totals where AP staff expect to find them. Remember that our generator only builds the PDF; you send it and follow up yourself.</p>

<p>For broader money-management topics, browse the <a href="/blog/category/business-finance">business finance articles</a>.</p>
`,
  },
  {
    slug: "vendor-onboarding-checklist",
    title: "Vendor Onboarding Checklist: Get Set Up to Be Paid Fast",
    description:
      "A vendor onboarding checklist for both sides: the tax forms, bank verification and portal steps suppliers complete, and the checks buyers run before paying.",
    category: "guides",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "w9-and-1099-for-contractors",
      "bank-details-on-invoice",
      "invoice-approval-workflow",
    ],
    faqs: [
      {
        q: "What is vendor onboarding?",
        a: "Vendor onboarding is the process a business uses to add a new supplier to its systems before buying from or paying it. It usually involves collecting legal and tax details, verifying bank account information, screening the supplier against sanctions and risk lists, agreeing payment terms and, for larger buyers, registering the supplier on a procurement or invoicing portal. Until it is finished, invoices often cannot be paid.",
      },
      {
        q: "What documents do suppliers usually need for vendor onboarding?",
        a: "Typical requests are the legal business name and address, a tax form such as IRS Form W-9 for US suppliers or W-8BEN or W-8BEN-E for foreign ones, bank account details on letterhead or a bank letter, a contact for remittances, and sometimes a certificate of insurance, business registration documents, a VAT or GST number, and signed policies such as a code of conduct.",
      },
      {
        q: "Why does my client need a W-9 from me?",
        a: "US businesses use Form W-9 to collect a payee's correct name and taxpayer identification number so they can file information returns such as Form 1099-NEC when required. If a payee does not provide a TIN when asked, the payer may have to apply backup withholding to certain payments. Supplying an accurate W-9 early avoids both delays and withholding.",
      },
      {
        q: "How long does vendor onboarding take?",
        a: "It varies widely. A small business may set up a supplier in a day. Large companies with security reviews, insurance checks and portal registration can take several weeks. As a supplier, ask about the steps when you win the work, not when you send the first invoice, so onboarding runs in parallel with delivery.",
      },
      {
        q: "How should a business verify a supplier's bank details?",
        a: "Ask for bank details in a document that ties the account to the supplier, such as a bank letter or a voided check, then confirm them by calling a phone number obtained independently, not one taken from the same email. Some banks and payment providers also offer account name checks. Repeat the verification every time bank details change.",
      },
      {
        q: "What is a supplier portal?",
        a: "A supplier portal is a website where a buyer's suppliers register their company, maintain bank and tax details, receive purchase orders and submit invoices. Large companies often use procurement networks such as SAP Business Network or Coupa. Invoices submitted outside the portal may be rejected, so read the buyer's supplier instructions carefully.",
      },
      {
        q: "Can I invoice a client before vendor onboarding is complete?",
        a: "You can send an invoice, but most large clients will not pay it until your vendor record is active, and some will reject it outright. It is usually better to finish onboarding first and keep the invoice ready. If you have already delivered, ask your contact to escalate the setup and note the delay against your payment terms.",
      },
      {
        q: "What should a small business check before onboarding a new vendor?",
        a: "At minimum: that the business exists and matches its tax details, that the bank account belongs to it, that it is not on government sanctions lists, that pricing and payment terms are agreed in writing, and that any required insurance or licenses are valid. Keep the evidence in the vendor file so the next person can see what was checked.",
      },
      {
        q: "Does your invoice generator handle vendor onboarding?",
        a: "No. The free invoice generator builds a PDF invoice in your browser. It does not register you on client portals, submit tax forms or verify bank accounts. It is useful once you are onboarded: you can create an invoice that matches the legal name, PO number and bank details your client has on file, which makes approval and payment smoother.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A vendor onboarding checklist covers the legal name and address, tax forms (W-9 or W-8 in the US, VAT or GST numbers elsewhere), verified bank details, sanctions and risk checks, agreed payment terms, insurance documents and any supplier portal registration. Suppliers who complete it early get paid on time; buyers who enforce it avoid fraud.</p>

<p>Winning a contract with a large client feels like the finish line, but the first invoice often reveals a second race: vendor onboarding. Until the client's accounts payable team has created a supplier record for you, your invoice may sit unpaid no matter how good the work was. On the other side of the table, businesses that skip onboarding checks are the ones that end up paying a fake supplier or the wrong bank account.</p>

<p>This guide covers both sides. The first half is for suppliers, freelancers and contractors being set up by a client. The second half is for businesses onboarding their own suppliers. Both end in a practical vendor onboarding checklist you can copy.</p>

<h2>Why vendor onboarding matters for getting paid</h2>
<p>In most accounts payable systems, an invoice can only be entered against an existing supplier record. That record holds the legal name, tax identification, address, payment method, bank details and terms. If the record does not exist, the invoice has nowhere to go. If the details on your invoice do not match the record, it can be rejected or held.</p>
<p>A typical timeline shows why timing matters. Say you deliver on day 0 and send your invoice the same day on net 30 terms. If onboarding takes 14 days and the client's terms count from the date an invoice is accepted into its system, the effective clock starts on day 14. Add 30 days and the invoice falls due on day 44. If the client pays in a weekly run and day 44 falls just after the cutoff, money arrives around day 50. Starting onboarding when the contract is signed, rather than after delivery, can recover most of those 20 extra days.</p>

<h2>Part 1: Vendor onboarding checklist for suppliers</h2>
<p>When a client sends you a supplier setup form or a portal invitation, gather these items before you start. Having them ready turns a week of back-and-forth into one sitting.</p>

<h3>Legal and contact details</h3>
<ul>
<li>Exact legal name, as registered and as shown on your tax documents. Trading names go in a separate field.</li>
<li>Registered address and, if different, the remittance address.</li>
<li>Business registration number, if your country issues one.</li>
<li>A billing contact and an email address for remittance advice.</li>
</ul>

<h3>Tax forms and tax numbers</h3>
<p>In the United States, clients ask domestic suppliers for <a href="https://www.irs.gov/forms-pubs/about-form-w-9" target="_blank" rel="noopener noreferrer">IRS Form W-9</a>, which certifies your name and taxpayer identification number (an SSN or EIN). Foreign individuals usually provide Form W-8BEN and foreign entities Form W-8BEN-E instead. If you do not provide a TIN when one is required, the payer may have to apply backup withholding to certain payments, currently at 24%. Our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms for contractors</a> explains what happens to the information after you submit it.</p>
<p>Outside the US, expect to provide a VAT, GST or sales tax registration number where you have one, and sometimes a certificate of tax residence if a tax treaty affects withholding on cross-border services.</p>

<h3>Bank details</h3>
<ul>
<li>Account name exactly as the bank holds it, which should match your legal name.</li>
<li>Account number and routing number (US), sort code (UK), or IBAN and SWIFT/BIC for international payments.</li>
<li>Proof of ownership if requested: a bank letter, a voided check or a recent statement header.</li>
</ul>
<p>Expect the client to call you to confirm these details. That call protects you as much as them, because it is what stops a criminal from redirecting your payments. Never send bank detail changes by email alone, and read our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> for what to show on the invoice itself.</p>

<h3>Compliance and risk documents</h3>
<ul>
<li>Certificate of insurance (general liability, professional liability or workers' compensation, depending on the work).</li>
<li>Signed acknowledgment of the client's supplier code of conduct, data protection terms or security questionnaire.</li>
<li>Licenses or certifications relevant to the work.</li>
<li>Diversity or small-business certifications, if you hold them and the client tracks them.</li>
</ul>

<h3>Supplier portals</h3>
<p>Many large companies run procurement through supplier networks such as SAP Business Network or Coupa, or through their own portal. Registration usually means creating an account, accepting terms, entering company and bank details, and learning how to receive purchase orders and submit invoices. Some portals let you "flip" a PO into an invoice, which copies the PO lines and keeps everything matched. If the client requires portal invoicing, a PDF emailed to AP may simply be ignored, so confirm the submission method in writing.</p>

<h3>Commercial terms</h3>
<ul>
<li>Payment terms (net 30, net 45, net 60) and when the clock starts.</li>
<li>Whether every invoice needs a purchase order and how to reference it.</li>
<li>Invoice requirements: format, required fields, one PO per invoice, currency.</li>
<li>Who to contact in accounts payable when a payment is late.</li>
</ul>

<h2>Part 2: Vendor onboarding checklist for businesses</h2>
<p>If you buy from suppliers, onboarding is where most payment fraud is stopped or let in. Fake vendors, impersonated vendors and changed bank details all exploit weak setup checks. A risk-based approach keeps the checks proportionate: a one-off $200 purchase does not need the same review as a supplier you will pay $500,000 a year.</p>
<table>
<thead>
<tr><th>Check</th><th>What to collect or do</th><th>Why it matters</th></tr>
</thead>
<tbody>
<tr><td>Identity</td><td>Legal name, registration number, address; confirm against a public register where available</td><td>Stops invented or look-alike suppliers</td></tr>
<tr><td>Tax</td><td>W-9 or W-8 (US), VAT/GST number elsewhere; validate the number where a public lookup exists</td><td>Correct tax reporting and invoices you can reclaim tax on</td></tr>
<tr><td>Bank account</td><td>Bank letter or voided check; call-back to an independently sourced number; account name check if available</td><td>Prevents payments to fraudsters' accounts</td></tr>
<tr><td>Sanctions</td><td>Screen the supplier and its owners against lists such as the US <a href="https://ofac.treasury.gov/" target="_blank" rel="noopener noreferrer">OFAC sanctions lists</a></td><td>Legal requirement in many cases; avoids frozen payments</td></tr>
<tr><td>Insurance and licenses</td><td>Certificates with expiry dates</td><td>Limits liability if something goes wrong on site</td></tr>
<tr><td>Terms</td><td>Signed contract or accepted PO terms, payment terms, currency</td><td>Avoids disputes when the first invoice arrives</td></tr>
<tr><td>Approval</td><td>Requester and a second person approve the new vendor record</td><td>Separation of duties</td></tr>
</tbody>
</table>

<h3>Separation of duties</h3>
<p>The person who requests a new supplier should not be the one who creates its record, and the person who creates the record should not be the one who approves payments to it. In a small business this might mean the owner reviews every new supplier before the first payment. It also means that a change of bank details is treated like a new supplier: verified independently and approved by a second person. Our article on <a href="/blog/invoice-scams">invoice scams</a> shows how these attacks usually unfold.</p>

<h3>Connecting onboarding to invoice approval</h3>
<p>A clean vendor record makes everything downstream faster. Once the supplier is set up with correct terms and PO requirements, its invoices can flow through your <a href="/blog/invoice-approval-workflow">invoice approval workflow</a> and be matched automatically. Weak records produce the opposite: invoices held for missing details, duplicate suppliers with slightly different names, and payments sent to old accounts.</p>

<h2>Worked example: onboarding a new freelance designer</h2>
<p>A small agency hires a US-based freelance designer for a $6,000 project. Here is a proportionate onboarding:</p>
<ol>
<li>Project manager submits a new vendor request with the designer's name, email and the estimated spend of $6,000.</li>
<li>The bookkeeper sends a W-9 request. The designer returns it with an EIN. The bookkeeper checks the name and EIN combination looks consistent with the business name on the contract.</li>
<li>The designer provides bank details on a bank letter. The bookkeeper calls the designer on the phone number in the signed contract, not the one in the email, and reads back the last four digits.</li>
<li>The owner approves the vendor record. Payment terms are set to net 15 and the agency notes that the designer will likely receive a Form 1099-NEC at year end because payments exceed the reporting threshold.</li>
<li>The designer invoices $3,000 at the halfway milestone and $3,000 on completion, quoting the PO number each time.</li>
</ol>
<p>Total effort: under an hour. Total protection: the agency knows who it is paying, has the tax data it needs, and has a verified account.</p>

<h2>Combined vendor onboarding checklist</h2>
<ul>
<li>Legal name, address and registration number confirmed.</li>
<li>Tax form received (W-9, W-8BEN or W-8BEN-E) or VAT/GST number recorded and validated.</li>
<li>Bank details received on a document tied to the supplier, verified by call-back.</li>
<li>Sanctions screening completed and recorded.</li>
<li>Insurance certificates and licenses on file with expiry dates.</li>
<li>Contract or PO terms accepted; payment terms and currency agreed.</li>
<li>Invoice requirements shared with the supplier (PO number, address, portal).</li>
<li>Supplier portal registration completed, if required.</li>
<li>Vendor record approved by someone other than the requester.</li>
<li>Annual review date set for high-value suppliers.</li>
</ul>

<h2>When onboarding stalls: what suppliers can do</h2>
<p>Large organizations sometimes lose new supplier requests between procurement, compliance and accounts payable. If your setup has gone quiet for more than a week, a polite, specific follow-up usually works better than a general "any update?".</p>
<ul>
<li>Ask your business contact which team owns supplier setup and who the named person is.</li>
<li>List exactly what you have submitted and when, so nobody asks you to resend the same form.</li>
<li>Ask whether anything is outstanding, such as an unsigned policy or an expired insurance certificate.</li>
<li>Confirm the vendor or supplier number once it is issued and put it on every invoice.</li>
<li>Note the delay in writing if your contract says payment terms run from delivery rather than from setup.</li>
</ul>
<p>Keep copies of every form and certificate you submit. Most clients ask for refreshed documents every year or two, and having them ready keeps renewals quick.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Suppliers waiting until the first invoice.</strong> Start onboarding when the work is agreed. Ask for the supplier pack on day one.</li>
<li><strong>Name mismatches.</strong> A W-9 in one name, a bank account in another and an invoice in a trading name will trigger holds. Keep them consistent.</li>
<li><strong>Bank details by email only.</strong> Buyers should always verify by phone; suppliers should never object to that call.</li>
<li><strong>Duplicate vendor records.</strong> "Acme Ltd" and "ACME Limited" as two suppliers make duplicate payments far more likely. Search before you create.</li>
<li><strong>One-size-fits-all checks.</strong> Heavy checks on tiny suppliers slow the business; light checks on big ones invite fraud.</li>
<li><strong>Ignoring expiries.</strong> Insurance and certifications lapse. Diary the renewal dates.</li>
</ul>

<h2>After onboarding: sending your first invoice</h2>
<p>Once your vendor record is live, make your invoice match it exactly: legal name, address, tax number, PO number and the same bank details you supplied. If you bill an international client, our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers currency and tax wording. You can build the PDF in the <a href="/invoice-generator/usa">US invoice generator</a> or the main <a href="/invoice-generator">free invoice generator</a>, then submit it the way the client specified. The generator does not register you with portals or send the invoice; it simply produces a clear, accurate document.</p>
<p>For more step-by-step articles, see the <a href="/blog/category/guides">invoicing guides</a>.</p>
`,
  },
  {
    slug: "purchase-requisition-vs-purchase-order",
    title: "Purchase Requisition vs Purchase Order: Key Differences",
    description:
      "Purchase requisition vs purchase order explained: who creates each, which is binding, how they fit the procure-to-pay process, with a worked example and table.",
    category: "comparisons",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-vs-purchase-order", "purchase-order-template", "three-way-match"],
    faqs: [
      {
        q: "What is the main difference between a purchase requisition and a purchase order?",
        a: "A purchase requisition is an internal request asking for permission to buy something. A purchase order is an external document sent to a supplier offering to buy specific goods or services at stated prices and terms. The requisition stays inside the business and creates no obligation to any supplier; the purchase order usually becomes a binding contract once the supplier accepts it.",
      },
      {
        q: "Is a purchase requisition legally binding?",
        a: "No. A purchase requisition is an internal control document. It records that an employee needs something and that a budget holder agreed to the spending. No supplier sees it, so it cannot create a contract. Only when purchasing turns the approved requisition into a purchase order and the supplier accepts it does a commitment to a third party arise.",
      },
      {
        q: "Who creates a purchase requisition?",
        a: "Usually the employee or department that needs the goods or services, such as a team lead requesting laptops or a facilities manager requesting repairs. The requisition then goes to a budget owner for approval. In some businesses a central purchasing team creates requisitions on behalf of requesters, but the request still originates with the person who needs the item.",
      },
      {
        q: "Who creates a purchase order?",
        a: "The purchasing or procurement team, or in a small business the owner or office manager who buys on the company's behalf. They choose the supplier, confirm prices and terms, and issue the PO. Separating the person who requests from the person who orders is a basic internal control against unauthorized or self-interested purchases.",
      },
      {
        q: "Do small businesses need purchase requisitions?",
        a: "Often not as a formal document. A business with a handful of people can approve purchases by email or a quick conversation. Requisitions become useful when several people spend money, budgets are tracked by department, or you need evidence that spending was approved before an order was placed. Some businesses require them only above a set amount.",
      },
      {
        q: "Can one purchase requisition become several purchase orders?",
        a: "Yes. A requisition might list office furniture, laptops and software licenses, which purchasing then buys from three different suppliers using three separate POs. The reverse also happens: requisitions from several departments for the same item can be combined into one larger PO to get a better price. Good systems keep the link between each requisition line and its PO line.",
      },
      {
        q: "Where does the invoice fit in?",
        a: "The supplier's invoice comes after the purchase order and delivery. Accounts payable matches the invoice against the PO and, ideally, the goods receipt before paying. The requisition is not part of that match, but it provides the audit trail showing that the spending was requested and approved before the order was placed.",
      },
      {
        q: "Is a purchase requisition the same as a purchase request?",
        a: "In practice, yes. Purchase request, requisition request, purchase requisition and simply requisition are all used for the internal document asking for approval to buy. Some software uses different names for steps within the same process, so check how your system labels them, but the function is the same: getting approval before anyone commits money to a supplier.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the purchase requisition vs purchase order comparison, the requisition is an internal request from an employee asking permission to buy, approved by a budget holder. The purchase order is an external document that purchasing sends to a supplier, stating items, prices and terms. A requisition creates no supplier commitment; an accepted PO usually does.</p>

<p>Purchase requisitions and purchase orders sound alike and often share a form layout, so people mix them up. The difference matters because they sit on opposite sides of a key control point. The requisition is where a business decides whether it should spend money. The purchase order is where it commits that money to a specific supplier. Understanding the purchase requisition vs purchase order split helps buyers keep spending under control and helps suppliers understand why they need a PO number before they invoice.</p>

<p>This guide compares the two documents side by side, shows how they fit into the procure-to-pay process, works through an example with real numbers and lists the mistakes that cause unauthorized spending or unpaid invoices.</p>

<h2>Purchase requisition vs purchase order at a glance</h2>
<table>
<thead>
<tr><th>Feature</th><th>Purchase requisition</th><th>Purchase order</th></tr>
</thead>
<tbody>
<tr><td>Purpose</td><td>Ask for approval to buy</td><td>Place an order with a supplier</td></tr>
<tr><td>Audience</td><td>Internal only</td><td>External: sent to the supplier</td></tr>
<tr><td>Created by</td><td>Requester (the employee or department with the need)</td><td>Purchasing, procurement or an authorized buyer</td></tr>
<tr><td>Approved by</td><td>Budget owner or manager</td><td>Buyer within their authority; sometimes finance for large POs</td></tr>
<tr><td>Supplier named?</td><td>Optional; may suggest one</td><td>Always</td></tr>
<tr><td>Prices</td><td>Estimates</td><td>Agreed or quoted prices</td></tr>
<tr><td>Legal effect</td><td>None outside the business</td><td>Offer to buy; usually binding once accepted</td></tr>
<tr><td>Accounting effect</td><td>Often none; may reserve budget</td><td>Creates a commitment (encumbrance) in many systems</td></tr>
<tr><td>Used in invoice matching?</td><td>No</td><td>Yes, in two-way and three-way matching</td></tr>
<tr><td>Typical number format</td><td>PR-2026-0145</td><td>PO-2026-0312</td></tr>
</tbody>
</table>

<h2>What is a purchase requisition?</h2>
<p>A purchase requisition (PR) is a request, usually on a form or in procurement software, that says: "My team needs this, here is roughly what it will cost, and here is the budget it should come from." It typically includes:</p>
<ul>
<li>Requester name, department and date.</li>
<li>Description of the items or services and quantities needed.</li>
<li>Estimated unit cost and total.</li>
<li>Cost center, project or general ledger account.</li>
<li>Date needed by and delivery location.</li>
<li>Suggested supplier or attached quotes, if any.</li>
<li>Business justification.</li>
</ul>
<p>The requisition goes to an approver who checks two things: is this a sensible use of money, and is there budget for it? If yes, it moves to purchasing. If no, it stops there and nothing has been committed. That is the whole point: the requisition is a cheap place to say no.</p>

<h2>What is a purchase order?</h2>
<p>A purchase order (PO) is the buyer's formal offer to a supplier. It names the supplier and lists exactly what is being bought, at what price, under what terms. A typical PO includes:</p>
<ul>
<li>PO number and date.</li>
<li>Buyer's legal entity name, billing address and delivery address.</li>
<li>Supplier name and address.</li>
<li>Line items with descriptions, quantities, units and unit prices.</li>
<li>Taxes, shipping and total.</li>
<li>Delivery date and shipping terms.</li>
<li>Payment terms and invoicing instructions, including "quote this PO number on your invoice".</li>
<li>Reference to the buyer's standard terms and conditions.</li>
</ul>
<p>When the supplier accepts the PO, in writing or by delivering, a contract is generally formed on those terms, though the exact rules depend on the contract law that applies. In the US, for example, <a href="https://www.law.cornell.edu/ucc/2/2-206" target="_blank" rel="noopener noreferrer">UCC section 2-206</a> covers how an order can be accepted by a promise to ship or by prompt shipment. If you need a starting layout, our <a href="/blog/purchase-order-template">purchase order template</a> guide walks through each field.</p>

<h2>Where each document sits in procure-to-pay</h2>
<p>Procure-to-pay is the full cycle from noticing a need to paying the supplier. The two documents appear at different points:</p>
<ol>
<li><strong>Need identified.</strong> An employee realizes the team needs something.</li>
<li><strong>Purchase requisition raised</strong> and approved by the budget owner.</li>
<li><strong>Sourcing.</strong> Purchasing gets quotes, picks a supplier and negotiates terms. Some businesses send a request for quotation at this point.</li>
<li><strong>Purchase order issued</strong> to the chosen supplier.</li>
<li><strong>Supplier accepts</strong> and delivers the goods or performs the service.</li>
<li><strong>Goods receipt</strong> recorded by the person who received the delivery.</li>
<li><strong>Supplier invoice</strong> received, quoting the PO number.</li>
<li><strong>Matching and approval.</strong> AP compares invoice, PO and receipt; see our <a href="/blog/three-way-match">three-way match guide</a>.</li>
<li><strong>Payment</strong> on the due date.</li>
</ol>
<p>The requisition controls whether to buy. The PO controls what is bought and from whom. The match controls whether the bill is right. Our comparison of an <a href="/blog/invoice-vs-purchase-order">invoice vs purchase order</a> covers the last two steps in more depth, and the <a href="/blog/invoice-approval-workflow">invoice approval workflow</a> guide explains how approvals continue after the invoice arrives.</p>

<h2>Worked example: from requisition to invoice</h2>
<p>A marketing team of a 40-person company needs 20 new laptops.</p>
<h3>Step 1: Purchase requisition</h3>
<p>The marketing lead raises requisition PR-2026-0145: 20 laptops at an estimated $1,200 each, cost center Marketing.</p>
<ul>
<li>Estimated total: 20 &times; $1,200 = $24,000.</li>
<li>The approval matrix says requisitions between $10,000 and $50,000 need the department head and the finance director. Both approve.</li>
<li>The finance system reserves $24,000 of the marketing equipment budget.</li>
</ul>
<h3>Step 2: Purchase order</h3>
<p>Purchasing collects three quotes and chooses the lowest compliant one at $1,150 per laptop, plus $150 shipping. The supplier charges 8% sales tax on the laptops but not on shipping (shipping taxability varies by state; this is an illustration).</p>
<ul>
<li>Laptops: 20 &times; $1,150 = $23,000.</li>
<li>Sales tax: $23,000 &times; 8% = $1,840.</li>
<li>Shipping: $150.</li>
<li>PO-2026-0312 total: $23,000 + $1,840 + $150 = $24,990.</li>
</ul>
<p>The PO total is $990 above the requisition estimate because the estimate left out tax and shipping. The company's policy allows a PO to exceed its requisition by up to 5% without re-approval: $24,000 &times; 5% = $1,200. Since $990 is less than $1,200, the PO goes out. Had the estimate been badly wrong, the requisition would have gone back for approval. You can check tax figures like this with the <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>
<h3>Step 3: Delivery and invoice</h3>
<p>The supplier delivers 18 laptops; two are back-ordered. The receiving clerk records a goods receipt for 18. The supplier invoices for 18: 18 &times; $1,150 = $20,700, plus tax of $1,656 and the full $150 shipping, total $22,506. AP matches the invoice against the PO and the receipt for 18 units, approves it, and leaves 2 units open on the PO for a later invoice.</p>
<p>Notice that the requisition never appears in the match. Its job ended once the PO was issued; it remains as audit evidence that the spending was approved.</p>

<h2>How requisitions and POs affect budgets</h2>
<p>Many finance systems track spending at three points, and the two documents drive the first two:</p>
<ul>
<li><strong>Pre-commitment:</strong> an approved requisition can reserve budget so two managers do not spend the same money twice. Nothing is owed to anyone yet.</li>
<li><strong>Commitment (encumbrance):</strong> an issued PO records that the business has promised to pay a supplier once it delivers. Budget reports show this as committed spend.</li>
<li><strong>Actual:</strong> the approved supplier invoice records the expense or asset and the amount owed in accounts payable.</li>
</ul>
<p>In the laptop example, the marketing budget would show $24,000 reserved after the requisition, $24,990 committed after the PO, and $22,506 actual after the first invoice, with $2,484 still committed for the two back-ordered units. That figure is the PO total minus the amount invoiced: $24,990 &minus; $22,506 = $2,484, which is the remaining 2 &times; $1,150 = $2,300 of goods plus $184 of tax. Seeing commitments as well as actuals stops a department from assuming it has money left that has in fact already been promised.</p>
<p>Small businesses without budget modules can get the same benefit from a simple spreadsheet listing open POs and their remaining value. Review it before approving new requisitions.</p>

<h3>Requisitions and POs in software</h3>
<p>Procurement tools and many accounting systems let a requester fill in a requisition form, route it to approvers automatically, and then convert the approved lines into a PO with one action. Some use catalogs of pre-approved items and prices, so the requisition already names the supplier and the PO is generated without a buyer re-keying anything. Whatever the tool, the control principle stays the same: approval of the need comes before the commitment to the supplier.</p>

<h2>When to use a requisition, a PO, or both</h2>
<table>
<thead>
<tr><th>Situation</th><th>Requisition?</th><th>Purchase order?</th></tr>
</thead>
<tbody>
<tr><td>Small office supplies below a set limit</td><td>Usually not</td><td>Often not; paid by card or expense claim</td></tr>
<tr><td>Planned equipment or service purchase</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Recurring supplies from a contracted vendor</td><td>One for the contract</td><td>A blanket PO covering the period</td></tr>
<tr><td>Emergency repair</td><td>Retroactive approval</td><td>Issued as soon as practical</td></tr>
<tr><td>Utilities, rent, taxes</td><td>No</td><td>Usually not</td></tr>
</tbody>
</table>
<p>A <strong>blanket purchase order</strong> is worth knowing about. It covers repeated purchases from one supplier over a period, up to a maximum value, so you do not raise a new PO for every delivery. Suppliers then quote the blanket PO number on each invoice. The guide to the <a href="/blog/po-number-on-invoice">PO number on an invoice</a> explains how suppliers should reference it.</p>

<h2>Checklist: a sound requisition-to-order process</h2>
<ul>
<li>A clear spending threshold above which a requisition is required.</li>
<li>Requisitions include cost center, justification and an estimate with tax and shipping.</li>
<li>Approvers are budget owners, defined in a written approval matrix.</li>
<li>Requesters cannot issue POs for their own requisitions above a set amount.</li>
<li>POs are only issued to suppliers that have completed onboarding.</li>
<li>A tolerance for PO value above requisition value, with re-approval beyond it.</li>
<li>Each PO line linked back to its requisition line.</li>
<li>Suppliers told to quote the PO number on every invoice.</li>
<li>Open POs reviewed monthly and closed when complete.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Treating the requisition as the order.</strong> Sending a requisition to a supplier, or a supplier acting on one, skips the purchasing controls and can leave terms undefined.</li>
<li><strong>Raising the PO after the invoice.</strong> "After-the-fact" POs defeat the purpose. They are sometimes unavoidable, but if they are common, the process is being bypassed.</li>
<li><strong>Estimates without tax and shipping.</strong> This makes nearly every PO exceed its requisition and trains approvers to ignore overruns.</li>
<li><strong>Self-approval.</strong> One person requesting, approving and ordering removes every check.</li>
<li><strong>Open POs left forever.</strong> Old open POs tie up budget and can be invoiced against fraudulently. Close them when the work is complete.</li>
<li><strong>Suppliers invoicing without a PO number.</strong> Many AP teams return such invoices. If you supply larger clients, ask for the PO before you start work.</li>
</ul>

<h2>For suppliers</h2>
<p>For a supplier, the purchase requisition vs purchase order distinction is mostly invisible. You will rarely see a client's requisition, but its approval is why your client may take a week to send a PO after you quote. Once you have the PO, invoice against it precisely: same item descriptions, quantities and prices, and the PO number in a clearly labeled field. The <a href="/invoice-generator">free invoice generator</a> includes a PO field and produces a PDF you can submit by email or upload to a portal. It does not send or track the invoice for you.</p>
<p>For more side-by-side explainers, browse the <a href="/blog/category/comparisons">comparison articles</a>.</p>
`,
  },
  {
    slug: "incoterms-on-invoice",
    title: "Incoterms 2020 on Invoices: Which Term to Use and Where",
    description:
      "How to show Incoterms on an invoice: the 11 Incoterms 2020 rules, the correct format with a named place, which costs to bill, and a filled sample invoice.",
    category: "guides",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "commercial-invoice-template",
      "hs-code-on-commercial-invoice",
      "proforma-invoice-guide",
    ],
    faqs: [
      {
        q: "Do I have to show Incoterms on an invoice?",
        a: "There is no single global rule requiring it, but for international sales of goods it is standard practice and many customs authorities, banks and buyers expect it. The commercial invoice should state the delivery terms agreed in the sales contract, because they affect who pays freight and insurance, when risk passes and how customs value is calculated. Leaving them off invites disputes and questions at the border.",
      },
      {
        q: "What is the correct way to write an Incoterm on an invoice?",
        a: 'Write the three-letter rule, then the named place or port, then the edition, for example "FCA Seller\'s warehouse, 12 Harbor Road, Savannah, GA, USA, Incoterms 2020" or "CIF Rotterdam, Netherlands, Incoterms 2020". The named place should be as precise as possible. The edition matters because older versions of the rules, such as Incoterms 2010, are still sometimes chosen in contracts.',
      },
      {
        q: "Are Incoterms 2020 still current in 2026?",
        a: "Yes. Incoterms 2020, published by the International Chamber of Commerce, have applied since January 1, 2020 and remain the current edition. The ICC has signaled work toward a future revision, but no new edition was in force as of late 2026. Parties can still choose an older edition by naming it, so always state the year on contracts and invoices.",
      },
      {
        q: "Which Incoterm should a small exporter use?",
        a: "Many small exporters favor FCA or CPT for containerized or parcel shipments because they match how goods are actually handed to carriers. EXW looks simple but leaves the seller with export clearance problems in practice, and DDP makes the seller responsible for import duties and taxes in the buyer's country. The right choice depends on who can manage freight and customs more easily.",
      },
      {
        q: "Should freight and insurance appear as separate lines on the invoice?",
        a: "When the seller pays for them under the chosen rule, such as CPT, CIP, CFR, CIF, DAP, DPU or DDP, showing freight and insurance as separate lines is good practice. Customs authorities often need those amounts to calculate the dutiable value, and some countries treat freight and insurance differently. Under EXW or FCA, the buyer arranges main carriage, so it usually does not appear.",
      },
      {
        q: "Can FOB and CIF be used for container shipments?",
        a: "The ICC advises that FAS, FOB, CFR and CIF are intended for goods loaded onto a vessel, typically bulk or break-bulk cargo, and are not appropriate for goods handed to a carrier at a container terminal before loading. For containers, FCA, CPT and CIP fit better because risk passes when the goods are handed to the carrier, not when they are on board.",
      },
      {
        q: "Do Incoterms decide when ownership of the goods transfers?",
        a: "No. Incoterms rules cover delivery, the transfer of risk, the allocation of costs and responsibility for export and import clearance. They do not decide when title passes, the price, the payment method or what happens if the contract is breached. Those points belong in the sales contract itself, under the law that governs it.",
      },
      {
        q: "Does the Incoterm affect the customs value on my invoice?",
        a: "It can. Countries calculate the dutiable value differently. The United States generally excludes international freight and insurance from the transaction value, while the European Union and the UK include the costs of transport and insurance up to the point of entry. Showing the Incoterm and listing freight and insurance separately lets each customs authority apply its own rule correctly.",
      },
      {
        q: "Can I add Incoterms with your invoice generator?",
        a: "Yes, as text. Our free generator builds a PDF invoice in your browser, and you can type the Incoterm, named place and edition into the notes or terms area, and add freight and insurance as line items. It does not file customs declarations, book freight or check that your chosen term fits your contract, so confirm the terms with your buyer and forwarder.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Show Incoterms on an invoice as the three-letter rule, the named place and the edition, for example "FCA Savannah, GA, USA, Incoterms 2020", near the shipping details or totals of the commercial invoice. Use the term agreed in your sales contract, and list any freight and insurance the seller pays as separate lines.</p>

<p>Incoterms are the trade terms that tell buyer and seller who arranges transport, who pays which costs and at what point the risk of loss passes from one to the other. They are published by the International Chamber of Commerce (ICC), and the current edition is Incoterms 2020. Getting Incoterms on an invoice right matters more than it first appears: the term shapes the invoice total, the customs value and, if goods are lost in transit, who absorbs the loss.</p>

<p>This guide explains the 11 rules, shows exactly where and how to write the term on a commercial invoice, walks through a filled sample with the arithmetic, and lists the mistakes that most often cause border delays or disputes. It covers sales of physical goods; services do not use Incoterms.</p>

<h2>What Incoterms do, and what they do not do</h2>
<p>According to the <a href="https://iccwbo.org/business-solutions/incoterms-rules/" target="_blank" rel="noopener noreferrer">ICC's Incoterms rules</a>, each term sets out:</p>
<ul>
<li>Where and when the seller delivers the goods.</li>
<li>When risk of loss or damage passes from seller to buyer.</li>
<li>Which party pays for transport, insurance, loading and unloading.</li>
<li>Which party handles export clearance and import clearance.</li>
</ul>
<p>They do <strong>not</strong> set the price, the payment terms, the currency or when ownership (title) passes. Those belong in the sales contract. An invoice saying "CIF" does not by itself mean the buyer owns the goods once they are on board, and it does not change your payment terms. Keep those separate on the invoice too.</p>

<h2>The 11 Incoterms 2020 rules</h2>
<p>The rules fall into two groups: seven that work for any mode of transport, and four meant only for sea and inland waterway transport.</p>
<table>
<thead>
<tr><th>Rule</th><th>Full name</th><th>Mode</th><th>Risk passes to buyer</th><th>Seller pays main carriage?</th></tr>
</thead>
<tbody>
<tr><td>EXW</td><td>Ex Works</td><td>Any</td><td>When goods are made available at the seller's premises</td><td>No</td></tr>
<tr><td>FCA</td><td>Free Carrier</td><td>Any</td><td>On handover to the buyer's carrier at the named place</td><td>No</td></tr>
<tr><td>CPT</td><td>Carriage Paid To</td><td>Any</td><td>On handover to the first carrier</td><td>Yes</td></tr>
<tr><td>CIP</td><td>Carriage and Insurance Paid To</td><td>Any</td><td>On handover to the first carrier</td><td>Yes, plus insurance</td></tr>
<tr><td>DAP</td><td>Delivered at Place</td><td>Any</td><td>At the named destination, ready for unloading</td><td>Yes</td></tr>
<tr><td>DPU</td><td>Delivered at Place Unloaded</td><td>Any</td><td>At the named destination, once unloaded</td><td>Yes</td></tr>
<tr><td>DDP</td><td>Delivered Duty Paid</td><td>Any</td><td>At the named destination, import-cleared</td><td>Yes, plus import duties and taxes</td></tr>
<tr><td>FAS</td><td>Free Alongside Ship</td><td>Sea/inland water</td><td>Alongside the vessel at the port of shipment</td><td>No</td></tr>
<tr><td>FOB</td><td>Free on Board</td><td>Sea/inland water</td><td>Once on board the vessel</td><td>No</td></tr>
<tr><td>CFR</td><td>Cost and Freight</td><td>Sea/inland water</td><td>Once on board the vessel</td><td>Yes</td></tr>
<tr><td>CIF</td><td>Cost, Insurance and Freight</td><td>Sea/inland water</td><td>Once on board the vessel</td><td>Yes, plus insurance</td></tr>
</tbody>
</table>
<p>Two details from the 2020 edition catch people out. First, under CIP the seller must buy a higher level of insurance cover (broadly equivalent to Institute Cargo Clauses (A)), while CIF still requires only minimum cover (Clauses (C)) unless the parties agree otherwise. Second, DPU replaced the old DAT term, so "DAT" on a 2026 invoice is a sign someone copied an outdated template.</p>

<h2>Where to put Incoterms on an invoice</h2>
<p>There is no fixed box, but the term should be easy to find. Common placements are:</p>
<ul>
<li>A "Terms of delivery" or "Incoterms" field in the shipping block, next to the port of loading and port of discharge.</li>
<li>A line directly above or below the totals, so readers can see which costs the total includes.</li>
<li>The notes or terms area, if your template has no dedicated field.</li>
</ul>
<p>Use the same wording on the <a href="/blog/proforma-invoice-guide">proforma invoice</a>, the final commercial invoice, the packing list and the sales contract. Banks checking documents under a letter of credit compare these closely, and mismatches can cause refusals; see our guide to the <a href="/blog/letter-of-credit-invoice">letter of credit invoice</a> for how strict that check can be.</p>

<h3>The correct format</h3>
<p>Write: <strong>[rule] [named place, as precisely as possible], Incoterms 2020</strong>.</p>
<ul>
<li>Good: "FCA Seller's warehouse, 12 Harbor Road, Savannah, GA 31401, USA, Incoterms 2020".</li>
<li>Good: "CIF Port of Rotterdam, Netherlands, Incoterms 2020".</li>
<li>Weak: "FOB" (no place, no edition).</li>
<li>Weak: "CIF Germany" (a country is not a place; which port?).</li>
<li>Wrong: "FOB Destination" (a US domestic shipping term from the Uniform Commercial Code tradition, not an Incoterm).</li>
</ul>
<p>Note which place you name. For F-terms (FCA, FAS, FOB) and EXW, the named place is where delivery happens, near the seller. For C-terms (CPT, CIP, CFR, CIF), it is the destination to which the seller pays carriage, even though risk passed much earlier. For D-terms (DAP, DPU, DDP), it is the destination where delivery happens.</p>

<h2>Sample commercial invoice with Incoterms</h2>
<p>A US manufacturer sells 200 stainless steel water bottles to a retailer in Germany. The contract says CIP Hamburg, Incoterms 2020: the seller pays carriage and insurance to Hamburg, but risk passes when the goods are handed to the first carrier in the US.</p>
<table>
<thead>
<tr><th>Field</th><th>Entry</th></tr>
</thead>
<tbody>
<tr><td>Invoice number and date</td><td>EXP-2026-0087, October 28, 2026</td></tr>
<tr><td>Seller</td><td>Example Bottle Co. LLC, Savannah, GA, USA</td></tr>
<tr><td>Buyer</td><td>Example Handel GmbH, Hamburg, Germany (VAT ID shown)</td></tr>
<tr><td>Terms of delivery</td><td>CIP Buyer's warehouse, Hamburg, Germany, Incoterms 2020</td></tr>
<tr><td>Payment terms</td><td>Net 30, bank transfer, USD</td></tr>
<tr><td>Goods</td><td>200 stainless steel vacuum bottles, 750 ml, HS code shown per line</td></tr>
<tr><td>Country of origin</td><td>USA</td></tr>
</tbody>
</table>
<p>The invoice lines and arithmetic:</p>
<ul>
<li>Goods: 200 &times; $14.50 = $2,900.00</li>
<li>Export packing and loading: $60.00</li>
<li>International freight to Hamburg: $420.00</li>
<li>Cargo insurance premium quoted by the insurer: $10.20</li>
<li>Invoice total: $2,900.00 + $60.00 + $420.00 + $10.20 = <strong>$3,390.20</strong></li>
</ul>
<p>The premium is invented for illustration. Under CIP and CIF the insured amount must be at least 110% of the price in the contract, so here the policy covers at least $3,390.20 &times; 1.10 = $3,729.22. Listing freight and insurance separately lets German customs see the elements of value: the EU includes transport and insurance costs up to the EU border in the customs value, so the broker needs these figures. If the same goods went to the US on a CIP basis, US customs would generally deduct the international freight and insurance from the dutiable value, which again requires them to be shown separately. Adding the <a href="/blog/hs-code-on-commercial-invoice">HS code on the commercial invoice</a> completes what customs needs to classify the goods.</p>
<p>Because the buyer handles import clearance under CIP, German import VAT and any duty are the buyer's cost and do not appear on this invoice. Under DDP, by contrast, the seller would have to pay them and would need to price them in.</p>

<h2>How the Incoterm changes what you invoice</h2>
<p>The rule you agree decides which costs belong in your price and therefore on your invoice. The rules group neatly by their first letter:</p>
<table>
<thead>
<tr><th>Group</th><th>Rules</th><th>Costs the seller typically invoices beyond the goods</th></tr>
</thead>
<tbody>
<tr><td>E</td><td>EXW</td><td>Usually none; the buyer collects from the seller's premises</td></tr>
<tr><td>F</td><td>FCA, FAS, FOB</td><td>Export packing, export clearance and delivery to the carrier or port</td></tr>
<tr><td>C</td><td>CPT, CIP, CFR, CIF</td><td>As F, plus main carriage to the named destination, and insurance under CIP and CIF</td></tr>
<tr><td>D</td><td>DAP, DPU, DDP</td><td>As C, plus delivery to the destination, unloading under DPU, and import duties and taxes under DDP</td></tr>
</tbody>
</table>
<p>A quick way to sanity-check an invoice is to read the term, then ask whether each cost line belongs to the seller under it. A freight line on an FCA invoice, for example, suggests either a mistake or a separate agreement that the seller will arrange carriage at the buyer's cost, which should then be described as such.</p>
<p>Quotes and proformas deserve the same care. A quote of "$14.50 per unit" means little to an overseas buyer until it says "FCA Savannah" or "DAP Hamburg", because those two prices cover very different costs. Stating the term on the quote prevents the most common dispute: a buyer who assumed delivery was included and a seller who assumed it was not.</p>

<h2>Choosing the right term</h2>
<p>The invoice should reflect the contract, so the real decision happens when you negotiate. A few practical rules:</p>
<ul>
<li><strong>Containers and parcels:</strong> prefer FCA, CPT or CIP over FOB, CFR or CIF. The sea-only terms tie risk to loading on the vessel, which happens out of your sight at a container terminal.</li>
<li><strong>Buyer has a strong forwarder:</strong> FCA lets the buyer control main carriage while the seller still handles export clearance.</li>
<li><strong>You want to quote a delivered price:</strong> DAP is usually safer than DDP, because DDP makes you responsible for import duties and taxes, and sometimes importer registrations, in the buyer's country.</li>
<li><strong>Avoid EXW for exports</strong> unless the buyer can genuinely handle export formalities in your country; in practice the seller often ends up involved anyway.</li>
<li><strong>Bulk commodities by sea:</strong> FOB, CFR and CIF remain the natural fit.</li>
</ul>

<h2>Checklist: Incoterms on an invoice</h2>
<ul>
<li>The rule matches the signed sales contract or accepted purchase order.</li>
<li>A precise named place, not just a country or "port".</li>
<li>The edition stated: "Incoterms 2020".</li>
<li>The same wording on the proforma, commercial invoice, packing list and any letter of credit.</li>
<li>Freight, insurance and other seller-paid costs shown as separate lines.</li>
<li>Currency stated, and the conversion basis if you also show a second currency.</li>
<li>Payment terms stated separately from delivery terms.</li>
<li>Country of origin and HS codes shown for each line.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>No named place.</strong> "FOB" alone is ambiguous and can mean different costs at different ports.</li>
<li><strong>Using sea terms for air or road freight.</strong> FOB has no meaning when goods never board a vessel.</li>
<li><strong>Outdated terms.</strong> DAT, DAF, DES and DEQ no longer exist in Incoterms 2020.</li>
<li><strong>Confusing Incoterms with payment terms.</strong> CIF is not a payment method, and "net 30" is not a delivery term.</li>
<li><strong>Bundling freight into unit prices.</strong> This hides costs customs may need to add or deduct, and can lead to duty on the wrong value.</li>
<li><strong>Agreeing DDP without checking the destination.</strong> Import VAT, duties and registration requirements can wipe out the margin.</li>
</ul>

<h2>Creating the invoice</h2>
<p>Start from our <a href="/blog/commercial-invoice-template">commercial invoice template</a> guide for the full list of export fields, and our article on <a href="/blog/foreign-currency-invoice">foreign currency invoices</a> if you bill in the buyer's currency. To produce the PDF, use the <a href="/invoice-generator">free invoice generator</a>: type the Incoterm in the notes or terms area and add freight and insurance as their own line items. The generator only builds the document in your browser; your freight forwarder or customs broker handles bookings and declarations.</p>
<p>For more practical walk-throughs, browse the <a href="/blog/category/guides">guides category</a>.</p>
`,
  },
  {
    slug: "hs-code-on-commercial-invoice",
    title: "HS Code on a Commercial Invoice: How to Find and Show It",
    description:
      "How to find the right HS code and show it on a commercial invoice: 6-digit vs national codes, lookup tools, a filled sample, the HS 2028 update and mistakes.",
    category: "guides",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "commercial-invoice-template",
      "incoterms-on-invoice",
      "invoice-international-clients",
    ],
    faqs: [
      {
        q: "What is an HS code?",
        a: "An HS code is a number from the Harmonized Commodity Description and Coding System, the international product classification maintained by the World Customs Organization. The first six digits are shared by the countries that use the system, and they identify a product group such as cotton T-shirts or unroasted coffee. Customs authorities use the code to apply duty rates, trade rules and statistics.",
      },
      {
        q: "Is an HS code required on a commercial invoice?",
        a: "It depends on the country and the carrier. In many places the code is legally part of the customs declaration, which the importer or broker files, rather than a mandatory invoice field. In practice, courier companies, freight forwarders and customs brokers commonly ask for it on the commercial invoice, and some destinations expect it. Including it per line is the safest default.",
      },
      {
        q: "How many digits should the HS code on my invoice have?",
        a: "At minimum, show the six-digit international code, which every HS country recognizes. If you know the importing country's full national code, such as a 10-digit US HTS number or an 8-digit EU Combined Nomenclature code, you can add it, labeled with the country. Many exporters show the six-digit code plus their own export code, and let the importer's broker confirm the import code.",
      },
      {
        q: "What is the difference between an HS code, an HTS code and Schedule B?",
        a: "The HS code is the six-digit international base. The Harmonized Tariff Schedule of the United States (HTSUS) extends it to 10 digits for US imports. Schedule B is the US export classification, also 10 digits, maintained by the Census Bureau. Both share the same first six digits as the international HS code but add US-specific detail.",
      },
      {
        q: "Who is responsible for the HS code: the seller or the buyer?",
        a: "Legally, the party making the customs declaration, usually the importer or its broker in the destination country and the exporter for export filings, is responsible for correct classification. In practice, the seller knows the product best and is expected to suggest a code. Agree with your buyer who confirms the import code, especially if duty rates are high.",
      },
      {
        q: "What happens if the HS code on my invoice is wrong?",
        a: "Consequences range from delays and questions from customs to underpaid duty, reassessment, penalties and seized goods in serious cases. A wrong code can also mean the goods are treated as not qualifying for a trade agreement rate. If you discover an error, tell your buyer and broker quickly so a correction can be made through the proper channel.",
      },
      {
        q: "What is HS 2028?",
        a: "HS 2028 is the eighth edition of the Harmonized System, which the World Customs Organization says will enter into force on January 1, 2028. It contains a set of amendments that split, merge or redefine some headings and subheadings. Exporters should review their product codes against the WCO correlation tables and national tariffs during 2027 so invoices are correct from the start of 2028.",
      },
      {
        q: "Can I get an official ruling on my product's HS code?",
        a: "Yes, many customs authorities issue binding classification rulings. In the United States you can request a ruling from Customs and Border Protection and search past rulings in its online CROSS database. The EU issues Binding Tariff Information decisions and the UK issues Advance Tariff Rulings. A ruling gives certainty for repeat shipments of the same product.",
      },
      {
        q: "Can I add HS codes with your invoice generator?",
        a: 'Yes, by including the code in each line item description, for example "Men\'s cotton T-shirts, knitted (HS 6109.10)". The free generator builds the PDF in your browser. It does not look up, validate or file HS codes, so classify your products using official tariff tools or a customs broker before you create the invoice.',
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Put the HS code on a commercial invoice next to each line item, using at least the six-digit international code (for example 6109.10 for cotton knitted T-shirts) and, if known, the importing country's longer national code. Find it in official tariff lookup tools, label it clearly, and keep it consistent with your packing list and export filings.</p>

<p>Every physical product that crosses a border gets classified under the Harmonized System, usually shortened to HS. The HS code decides the duty rate, whether licenses or restrictions apply, and how the shipment is counted in trade statistics. Putting the correct HS code on a commercial invoice helps the importer's broker clear the goods quickly and reduces the chance of customs questions, delays or reassessed duty.</p>

<p>This guide explains how HS codes are structured, the difference between international and national codes, how to look up the right number, how to show it on the invoice with a filled sample, and what the upcoming HS 2028 edition means for exporters.</p>

<h2>What an HS code is</h2>
<p>The Harmonized System is maintained by the <a href="https://www.wcoomd.org/en/topics/nomenclature/overview/what-is-the-harmonized-system.aspx" target="_blank" rel="noopener noreferrer">World Customs Organization (WCO)</a> and is used by the vast majority of the world's customs administrations. It organizes goods into sections and chapters by type and degree of processing, broadly moving from raw materials and animal products toward manufactured goods. The current edition is HS 2022.</p>
<p>A six-digit HS code has three layers:</p>
<table>
<thead>
<tr><th>Digits</th><th>Level</th><th>Example: 6109.10</th><th>Example: 0901.11</th></tr>
</thead>
<tbody>
<tr><td>First 2</td><td>Chapter</td><td>61: Apparel, knitted or crocheted</td><td>09: Coffee, tea, maté and spices</td></tr>
<tr><td>First 4</td><td>Heading</td><td>6109: T-shirts, singlets and other vests, knitted</td><td>0901: Coffee</td></tr>
<tr><td>First 6</td><td>Subheading</td><td>6109.10: Of cotton</td><td>0901.11: Not roasted, not decaffeinated</td></tr>
</tbody>
</table>
<p>Those six digits are the same in every HS country. Beyond that, each country adds its own digits for tariff and statistical purposes.</p>

<h2>International HS codes vs national tariff codes</h2>
<table>
<thead>
<tr><th>Code</th><th>Length</th><th>Used for</th></tr>
</thead>
<tbody>
<tr><td>HS (international)</td><td>6 digits</td><td>Common base recognized by all HS countries</td></tr>
<tr><td>US HTSUS</td><td>10 digits (8-digit tariff line plus 2 statistical)</td><td>Imports into the United States</td></tr>
<tr><td>US Schedule B</td><td>10 digits</td><td>US export reporting</td></tr>
<tr><td>EU Combined Nomenclature (CN)</td><td>8 digits</td><td>Exports from and imports into the EU; TARIC extends imports to 10 digits</td></tr>
<tr><td>UK commodity code</td><td>8 digits for exports, 10 for imports</td><td>UK Global Tariff</td></tr>
</tbody>
</table>
<p>Because the first six digits match, a seller can always show the six-digit code with confidence once the product is classified. The extra national digits differ between countries and sometimes between import and export, which is why an exporter's code and the importer's code for the same product may not be identical after the sixth digit.</p>

<h2>How to find the right HS code</h2>
<ol>
<li><strong>Describe the product precisely.</strong> Note what it is, what it is made of (and in what proportions), how it is made (knitted or woven, for example), what it is used for and whether it is complete or a part.</li>
<li><strong>Search an official tariff tool.</strong> For US imports use the USITC <a href="https://hts.usitc.gov/" target="_blank" rel="noopener noreferrer">Harmonized Tariff Schedule search</a>; for US exports the Census Bureau's Schedule B search; for the UK the government's online trade tariff; for the EU the TARIC database.</li>
<li><strong>Read the chapter and section notes.</strong> They often include or exclude products in ways the heading text alone does not show.</li>
<li><strong>Apply the General Rules of Interpretation.</strong> These rules decide classification for sets, unfinished goods and products made of several materials. Classification starts at the heading level and works down.</li>
<li><strong>Check past rulings.</strong> US Customs and Border Protection publishes rulings in its CROSS database; the EU publishes Binding Tariff Information decisions.</li>
<li><strong>Confirm with your buyer or broker</strong> for the importing country's full code, especially for high-duty goods.</li>
<li><strong>Record the result</strong> in a product master list so every invoice uses the same code.</li>
</ol>
<p>Avoid relying on a supplier's catalog code, a competitor's invoice or an AI chatbot answer without checking the official tariff. Search engines frequently surface codes from the wrong country or an older edition.</p>

<h2>How to show HS codes on a commercial invoice</h2>
<p>The clearest layout adds an "HS code" column to the line-item table, next to the description and country of origin. If your template has no spare column, put the code at the end of the description in parentheses. Label national codes with the country so nobody mistakes an export code for an import code.</p>

<p>Formatting varies: some tariffs print codes with dots (6109.10), others without (610910), and national codes often add further dots or spaces. Either style is understood, but use one consistently across your documents. Do not pad a six-digit code with zeros to make it look like a ten-digit national code, because "6109100000" may not exist in the importing country's tariff.</p>

<h3>Filled sample: line items with HS codes</h3>
<p>A US apparel company ships an order to a retailer in Canada. Classifications below are shown for illustration; confirm your own products with official tools.</p>
<table>
<thead>
<tr><th>Description</th><th>HS code</th><th>Origin</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Men's T-shirts, 100% cotton, knitted</td><td>6109.10</td><td>USA</td><td>300</td><td>$6.20</td><td>$1,860.00</td></tr>
<tr><td>Socks, 80% cotton 20% polyamide, knitted</td><td>6115.95</td><td>USA</td><td>500</td><td>$1.40</td><td>$700.00</td></tr>
<tr><td>Coffee beans, green (not roasted, not decaffeinated), 1 kg bags</td><td>0901.11</td><td>Colombia</td><td>40</td><td>$9.75</td><td>$390.00</td></tr>
</tbody>
</table>
<p>Arithmetic: 300 &times; $6.20 = $1,860.00; 500 &times; $1.40 = $700.00; 40 &times; $9.75 = $390.00. Goods subtotal: $1,860.00 + $700.00 + $390.00 = $2,950.00. Add freight of $185.00 and the invoice total is $3,135.00.</p>
<p>Three details to notice. Each product has its own line because each has a different code; combining them as "clothing and coffee, $2,950" would force customs to ask questions. The coffee shows Colombia as its origin even though the seller is American, because origin follows where the goods were produced, not where they were shipped from. And the delivery term, such as "DAP Toronto, Incoterms 2020", appears elsewhere on the invoice; see our guide to <a href="/blog/incoterms-on-invoice">Incoterms on an invoice</a> for the format.</p>

<h2>Why the HS code matters beyond the duty rate</h2>
<p>Duty is the obvious reason customs cares about classification, but the code drives several other decisions:</p>
<ul>
<li><strong>Trade agreement eligibility.</strong> Rules of origin under free trade agreements are usually written by HS heading or subheading. The wrong code can mean applying the wrong rule and losing a preferential rate.</li>
<li><strong>Licenses and restrictions.</strong> Controls on food, plants, chemicals, dual-use technology and other sensitive goods are often triggered by the code.</li>
<li><strong>Import VAT or GST and excise.</strong> Some goods attract special rates or excise duties that customs applies based on classification.</li>
<li><strong>Trade remedies.</strong> Anti-dumping and countervailing duties target specific products, identified partly by code.</li>
<li><strong>Statistics.</strong> Governments compile trade data from declared codes, which is why export filings ask for them even when no duty applies.</li>
</ul>

<h3>Worked example: how a code changes the duty bill</h3>
<p>To see why a few digits matter, take a hypothetical shipment with a customs value of $1,860 and two candidate classifications. The rates below are invented for illustration; real rates depend on the importing country, the product and any trade agreement.</p>
<ul>
<li>Classification A at a 16.5% duty rate: $1,860 &times; 16.5% = $306.90.</li>
<li>Classification B at a 12% duty rate: $1,860 &times; 12% = $223.20.</li>
<li>Difference: $306.90 &minus; $223.20 = $83.70 on this one shipment.</li>
</ul>
<p>Over 20 similar shipments a year, that gap is 20 &times; $83.70 = $1,674. If the lower code turns out to be wrong, customs can ask for the difference plus interest and possibly penalties; if the higher code is wrong, the importer has been overpaying. Either way, the cost of checking the classification once is small next to the cost of getting it wrong repeatedly.</p>

<h3>Couriers and low-value shipments</h3>
<p>Express carriers often ask for an HS code on every commercial invoice, even for low-value parcels that fall under a de minimis threshold. Carrier booking systems may also ask you to pick a code from a list. Use the same code you put on the invoice, and do not accept a carrier's suggested code without checking it against your own classification.</p>

<h2>HS 2028: what changes and when</h2>
<p>The WCO reviews the Harmonized System roughly every five years. The next edition, <a href="https://www.wcoomd.org/en/topics/nomenclature/instrument-and-tools/hs-nomenclature-2028-edition.aspx" target="_blank" rel="noopener noreferrer">HS 2028</a>, is scheduled to enter into force on January 1, 2028. The WCO describes it as a package of 299 sets of amendments that create, delete or restructure headings and subheadings.</p>
<p>What this means in practice:</p>
<ul>
<li>Codes on invoices dated in 2026 and 2027 should still use the current edition as applied by each country.</li>
<li>During 2027, check whether any of your products are affected, using the WCO correlation tables and, once published, the national tariffs that implement HS 2028.</li>
<li>Update your product master list before your first shipments of 2028, and tell regular buyers if a code changes so their systems update too.</li>
</ul>
<p>National tariffs can also change between editions, so review your codes at least once a year even outside an HS revision.</p>

<h2>Checklist: HS codes on your commercial invoice</h2>
<ul>
<li>One line per product with a distinct classification.</li>
<li>Six-digit HS code on every goods line.</li>
<li>National code added and labeled where known (for example "US HTS" or "EU CN").</li>
<li>Plain-language description detailed enough to support the code: material, construction, use.</li>
<li>Country of origin for each line.</li>
<li>Quantity, unit of measure and unit price that add up to the line amount.</li>
<li>Codes identical across invoice, packing list and export filing.</li>
<li>Product master list reviewed annually and ahead of HS 2028.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Vague descriptions.</strong> "Parts", "samples" or "gifts" cannot be classified. Describe what the item actually is.</li>
<li><strong>Using another country's full code as if it were universal.</strong> Only the first six digits are shared.</li>
<li><strong>Classifying by use alone.</strong> Material and construction often matter more than what the buyer will do with it.</li>
<li><strong>One code for a mixed shipment.</strong> Split lines by classification.</li>
<li><strong>Copying codes from old invoices</strong> without checking for tariff updates or a new HS edition.</li>
<li><strong>Undervaluing or misclassifying to reduce duty.</strong> Customs authorities treat this seriously and may impose penalties.</li>
</ul>

<h2>Creating the invoice</h2>
<p>Our <a href="/blog/commercial-invoice-template">commercial invoice template</a> guide lists all the export fields, and the article on <a href="/blog/packing-slip-vs-invoice">packing slips vs invoices</a> explains how the packing list should mirror your lines. If the goods are being sent to an agent who will sell them later rather than to a buyer, see the <a href="/blog/consignment-invoice">consignment invoice</a> guide for the valuation wording. To build the PDF, open the <a href="/invoice-generator">free invoice generator</a>, add the HS code and origin to each line description, and pick a clean layout such as the <a href="/invoice-templates/classic">classic invoice template</a>. The generator does not classify products or submit customs filings; your broker or forwarder does that. More export topics live in our <a href="/blog/invoice-international-clients">guide to invoicing international clients</a>.</p>
`,
  },
  {
    slug: "consignment-invoice",
    title: "Consignment Invoice: What It Is and How to Create One",
    description:
      "What a consignment invoice is, who issues it and when, plus a worked commission example, a field checklist and the export version for goods sent on consignment.",
    category: "invoicing-basics",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["proforma-invoice-guide", "delivery-challan-format", "commercial-invoice-template"],
    faqs: [
      {
        q: "What is a consignment invoice?",
        a: "A consignment invoice is a billing document used when goods are placed with another business to sell on the owner's behalf. Because ownership stays with the supplier (the consignor) until the goods are sold, the invoice or settlement is issued for the units actually sold in a period, not for everything delivered. In exporting, the term also describes a commercial invoice for goods shipped to an overseas agent without a sale.",
      },
      {
        q: "Who issues the consignment invoice, the consignor or the consignee?",
        a: "Either can, depending on the agreement. Commonly the consignee (the shop or agent) sends a sales report, and the consignor invoices the consignee for the agreed price of the units sold. In commission-based arrangements, the consignee may instead send a settlement statement showing gross sales, its commission and the net amount it is paying. The agreement should say which document is used.",
      },
      {
        q: "When should a consignment invoice be issued?",
        a: "After goods are sold to the end customer, not when they are delivered to the consignee. Most agreements set a regular cycle, such as monthly, with a sales report due a few days after month end and payment due within a set number of days after that. Delivering stock should be documented with a consignment note or delivery note instead of an invoice.",
      },
      {
        q: "Is a consignment note the same as a consignment invoice?",
        a: "No. A consignment note, delivery note or stock transfer record documents the movement of goods to the consignee and lists what was delivered, usually without asking for payment. The consignment invoice or settlement comes later and covers only what has sold. In freight, a consignment note can also mean a transport document issued by a carrier, which is different again.",
      },
      {
        q: "Who collects sales tax on consignment sales?",
        a: "In the United States, the retailer making the sale to the end customer usually collects and remits sales tax, but rules depend on the state and on how the arrangement is structured. VAT and GST countries often have specific rules for consignment and sale-or-return stock. Check your local rules or ask a tax professional before you set up the invoicing flow.",
      },
      {
        q: "When does the consignor record revenue?",
        a: "Generally when the consignee sells the goods to the end customer, because until then the consignor still controls the inventory. Accounting standards such as ASC 606 and IFRS 15 include indicators that an arrangement is a consignment. Until sale, the goods remain in the consignor's inventory even though they sit on someone else's shelves.",
      },
      {
        q: "What should a consignment invoice for export show?",
        a: "It should state clearly that the goods are shipped on consignment and that no sale has taken place, give a value for each item for customs purposes, and include the usual commercial invoice details: exporter and consignee, description, HS code, country of origin, quantities and weights. Ask the importer's customs broker how the destination country values goods shipped without a sale.",
      },
      {
        q: "Can I make a consignment invoice with your generator?",
        a: "Yes. The free invoice generator builds a PDF in your browser, and you can add line items for units sold, enter the commission as a fixed-amount discount, and add notes that reference the sales report and consignment agreement. It does not track inventory held by consignees or reconcile stock, so keep a stock record alongside your invoices.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A consignment invoice bills for goods that a consignee, such as a shop or overseas agent, has sold on the owner's behalf. Ownership stays with the consignor until sale, so you invoice only for units sold in the period, after a sales report, with any agreed commission deducted. Deliveries themselves are documented with a consignment note.</p>

<p>Consignment is common for artists and makers selling through galleries and boutiques, for wholesalers placing stock with retailers, for secondhand and resale shops, and for exporters who send goods to an overseas agent to sell. In all of these, the usual invoicing rhythm breaks: you hand over goods, but nobody owes you anything yet. A consignment invoice is how you bill once the goods actually sell.</p>

<p>This guide explains the documents involved, who invoices whom, how to calculate the amount with a worked example, what fields to include, and how the export version of a consignment invoice differs. It is general information; tax and accounting treatment depends on your country and agreement.</p>

<h2>How consignment works</h2>
<p>There are two parties:</p>
<ul>
<li><strong>Consignor:</strong> the owner of the goods, such as a maker, brand or wholesaler.</li>
<li><strong>Consignee:</strong> the business that holds and sells the goods, such as a shop, gallery or agent.</li>
</ul>
<p>The consignor delivers stock to the consignee but keeps ownership. The consignee displays and sells the goods to end customers. Periodically, the consignee reports what sold, and money flows back to the consignor, less a commission or at an agreed wholesale price. Unsold goods can usually be returned or collected.</p>
<p>This differs from a normal wholesale sale, where the retailer buys the stock outright, receives an invoice on delivery and carries the risk of not selling it. With consignment, the consignor carries that risk, which is why the consignor's cash arrives later and depends on sell-through.</p>

<h2>The documents in a consignment arrangement</h2>
<table>
<thead>
<tr><th>Document</th><th>Issued by</th><th>When</th><th>Purpose</th></tr>
</thead>
<tbody>
<tr><td>Consignment agreement</td><td>Both parties sign</td><td>Before any stock moves</td><td>Commission or price, reporting cycle, payment terms, insurance, returns</td></tr>
<tr><td>Consignment note or delivery note</td><td>Consignor</td><td>Each delivery</td><td>Lists items and quantities transferred; not a request for payment</td></tr>
<tr><td>Sales report</td><td>Consignee</td><td>Each period (often monthly)</td><td>Units sold, selling prices, returns, remaining stock</td></tr>
<tr><td>Consignment invoice or settlement statement</td><td>Consignor or consignee, per the agreement</td><td>After the sales report</td><td>Amount due to the consignor for units sold</td></tr>
<tr><td>Return note</td><td>Consignee</td><td>When unsold stock goes back</td><td>Reduces the stock held on consignment</td></tr>
</tbody>
</table>
<p>The delivery document is often modeled on a delivery note; our <a href="/blog/delivery-challan-format">delivery challan format</a> guide shows the layout used in South Asia, where challans are the standard document for goods sent without a sale. Some consignors also send a <a href="/blog/proforma-invoice-guide">proforma invoice</a> with the stock to show its value, clearly marked as not a demand for payment.</p>

<h2>Two ways to bill on consignment</h2>
<h3>Model 1: Consignor invoices the consignee at a fixed price</h3>
<p>The agreement sets a price per unit that the consignee pays the consignor for each unit sold, regardless of what the consignee charges the end customer. After the sales report arrives, the consignor issues a normal-looking invoice to the consignee for "units sold" at that price. The consignee keeps the difference between its selling price and the agreed price.</p>
<h3>Model 2: Commission on sales</h3>
<p>The consignor sets the retail price, and the consignee keeps a percentage commission. Either the consignor invoices for the net amount, showing gross sales and the commission deduction, or the consignee sends a settlement statement with its payment. Galleries and resale shops usually use this model.</p>
<p>Both models are valid. What matters is that the agreement says which one applies, who issues the document, and when payment is due after the period ends.</p>

<h2>Worked example: a maker's monthly consignment invoice</h2>
<p>A ceramicist places 60 handmade mugs with a gift shop on October 1. The agreement uses a commission model: retail price $28.00 per mug, shop commission 35%, monthly sales reports by the 5th, payment within 15 days of the report.</p>
<p>The shop's October report shows 22 mugs sold at full price and 1 mug damaged in the shop, which the agreement says the shop pays for at the consignor's net price.</p>
<ul>
<li>Gross sales: 22 &times; $28.00 = $616.00</li>
<li>Commission: $616.00 &times; 35% = $215.60</li>
<li>Net due for sold mugs: $616.00 &minus; $215.60 = $400.40</li>
<li>Damaged mug at net price: $28.00 &times; (1 &minus; 0.35) = $18.20</li>
<li><strong>Total due to the consignor: $400.40 + $18.20 = $418.60</strong></li>
<li>Stock remaining on consignment: 60 &minus; 22 &minus; 1 = 37 mugs</li>
</ul>
<p>The ceramicist's consignment invoice, dated November 6, shows:</p>
<table>
<thead>
<tr><th>Description</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Handmade mug, speckled glaze, sold October 2026 (per sales report SR-10)</td><td>22</td><td>$28.00</td><td>$616.00</td></tr>
<tr><td>Less consignee commission at 35%</td><td>1</td><td>&minus;$215.60</td><td>&minus;$215.60</td></tr>
<tr><td>Damaged unit charged at net price per agreement clause 7</td><td>1</td><td>$18.20</td><td>$18.20</td></tr>
<tr><td><strong>Total due by November 20, 2026</strong></td><td></td><td></td><td><strong>$418.60</strong></td></tr>
</tbody>
</table>
<p>The notes field records "Goods supplied on consignment under agreement dated September 25, 2026. Stock remaining with consignee: 37 units." Sales tax on the retail sales was collected by the shop from its customers, so it does not appear on this invoice; check how your own state or country treats consignment before copying that approach.</p>
<p>Under Model 1, by contrast, if the agreed price were $17.00 per mug sold, the invoice would simply be 22 &times; $17.00 = $374.00, plus the damaged mug at whatever price the agreement sets.</p>

<h2>What to include on a consignment invoice</h2>
<ul>
<li>The words "Consignment invoice" or "Consignment settlement" as the title.</li>
<li>A unique invoice number and the invoice date; keep consignment invoices in your normal <a href="/blog/invoice-numbering-system">invoice numbering system</a>.</li>
<li>Consignor and consignee names, addresses and any tax registration numbers.</li>
<li>The sales period covered and the sales report reference.</li>
<li>A reference to the consignment agreement and its date.</li>
<li>Each product sold with quantity, price and amount.</li>
<li>Commission, if applicable, as a separate deduction line.</li>
<li>Charges for damaged or lost stock, if the agreement allows them.</li>
<li>Tax lines, if your jurisdiction requires them on this invoice.</li>
<li>Payment terms, due date and bank details.</li>
<li>Stock remaining on consignment at period end.</li>
</ul>

<h2>The export version: goods shipped on consignment</h2>
<p>In international trade, "consignment" often means shipping goods to a foreign agent or distributor who will sell them after arrival. No sale exists when the goods cross the border, yet customs still needs a commercial invoice with a value. The invoice should:</p>
<ul>
<li>State clearly that the goods are "shipped on consignment, no sale" or similar wording your broker recommends.</li>
<li>Give a value per item that reflects the goods' market value, since there is no transaction price.</li>
<li>Include all usual export fields: exporter, consignee, description, quantity, weight, country of origin and the <a href="/blog/hs-code-on-commercial-invoice">HS code on the commercial invoice</a>.</li>
<li>Show delivery terms if relevant, and the currency.</li>
</ul>
<p>Each country has its own rules for what an import invoice must contain and how goods are valued when there is no sale. In the US, the required invoice contents are set out in <a href="https://www.ecfr.gov/current/title-19/chapter-I/part-141/subpart-F/section-141.86" target="_blank" rel="noopener noreferrer">19 CFR 141.86</a>. Ask the importer's broker before shipping. Later, when the agent sells the goods, the consignor invoices or settles with the agent much as in the domestic models above. Our <a href="/blog/commercial-invoice-template">commercial invoice template</a> guide covers the standard export layout.</p>

<h2>Consignment vs other ways to sell through retailers</h2>
<table>
<thead>
<tr><th>Arrangement</th><th>Who owns stock at the shop</th><th>When the supplier invoices</th><th>Who carries unsold-stock risk</th></tr>
</thead>
<tbody>
<tr><td>Consignment</td><td>Supplier (consignor)</td><td>After goods sell, per sales report</td><td>Supplier</td></tr>
<tr><td>Wholesale (outright sale)</td><td>Retailer</td><td>On delivery or shipment</td><td>Retailer</td></tr>
<tr><td>Sale or return</td><td>Usually the retailer, with a right to return unsold goods</td><td>On delivery, with credit notes for returns</td><td>Mostly supplier, through returns</td></tr>
</tbody>
</table>
<p>The labels are not always used consistently, and the legal and tax treatment depends on the actual terms, so the agreement matters more than the name. If your contract lets the retailer return unsold goods but you invoiced on delivery, returns are handled with credit notes; if ownership stays with you until sale, the consignment invoicing described above fits better.</p>

<h2>Accounting for consignment stock</h2>
<p>For the consignor, goods at a consignee's premises are still inventory. Many businesses track them in a separate location, such as "Stock at Gift Shop", so the balance sheet shows what is on other people's shelves. When the sales report arrives, the consignor records the sale, the commission expense and the receivable, and moves the cost of the sold units out of inventory.</p>
<p>Using the mug example, if each mug cost $9.00 to make, the October figures would show revenue of $616.00 for the 22 mugs sold, a commission expense of $215.60, and a cost of goods sold of 22 &times; $9.00 = $198.00. The damaged mug charged to the shop adds $18.20 of income, and its $9.00 cost also leaves inventory. Gross profit for the period: $616.00 &minus; $215.60 + $18.20 &minus; $198.00 &minus; $9.00 = $211.60. Some businesses instead record revenue net of commission; ask your accountant which presentation applies to you.</p>
<p>For the consignee, consignment goods are not its inventory and should not appear on its balance sheet, although it should still count and safeguard them.</p>

<h2>Checklist for consignors</h2>
<ul>
<li>Signed consignment agreement covering price or commission, reporting dates, payment terms, insurance, damage and returns.</li>
<li>Delivery note for every shipment, signed by the consignee.</li>
<li>Your own running stock record per consignee.</li>
<li>Sales report requested on a fixed date each period.</li>
<li>Invoice issued promptly after each report, with the report referenced.</li>
<li>Periodic physical stock check against your record.</li>
<li>Unsold stock collected or rotated after an agreed time.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Invoicing on delivery.</strong> Billing the full stock value when it goes to the shop treats consignment as a sale and confuses both parties' books.</li>
<li><strong>No written agreement.</strong> Without one, disputes over commission, damage and unsold stock are hard to resolve.</li>
<li><strong>Losing track of stock.</strong> If you do not reconcile what you delivered, what sold and what remains, missing items are easy to overlook.</li>
<li><strong>Mixing commission into the unit price.</strong> Show gross sales and commission separately so both sides can check the arithmetic.</li>
<li><strong>Ignoring tax rules.</strong> Sales tax, VAT and GST treatment of consignment varies; get it confirmed.</li>
<li><strong>Using "consignment" wording on export invoices loosely.</strong> If there is actually a sale, say so; misdescribing the transaction can affect customs valuation.</li>
</ul>

<h2>Creating a consignment invoice</h2>
<p>Use the <a href="/invoice-generator">free invoice generator</a> to build the PDF: add a line for units sold, enter the commission in the discount field as a fixed amount (the generator does not accept negative prices), and put the agreement and sales report references in the notes. A simple layout such as the <a href="/invoice-templates/minimal">minimal invoice template</a> keeps the deductions easy to read. If you need to correct an invoice after a late return, issue a <a href="/blog/credit-note-guide">credit note</a> rather than editing the original. The generator does not track stock held by consignees, so keep that record separately. For more fundamentals, see the <a href="/blog/category/invoicing-basics">invoicing basics</a> articles.</p>
`,
  },
];
