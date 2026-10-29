import type { PostDraft } from "../blog";

export const BASICS_2026_POSTS: PostDraft[] = [
  {
    slug: "interim-invoice-vs-final-invoice",
    title: "Interim Invoice vs Final Invoice: Differences and Examples",
    description:
      "Interim invoice vs final invoice: when to bill for work in progress, how to deduct earlier payments and retention, with a worked example and a checklist.",
    category: "comparisons",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: [
      "aia-g702-g703-billing",
      "construction-invoice-guide",
      "milestone-payments",
      "partial-payment-invoice",
    ],
    faqs: [
      {
        q: "Is an interim invoice a legal tax invoice?",
        a: "Usually yes. If it is a real demand for payment and contains the fields your tax system requires, an interim invoice is a full invoice and normally creates a tax point for the amount billed. If you only want to show the client what is coming, send a payment application or proforma instead and issue the tax invoice when payment is agreed.",
      },
      {
        q: "How often should I send interim invoices?",
        a: "As often as your contract allows. Monthly is the most common cycle on construction and long consulting projects, while creative and software work often bills at milestones. If your contract is silent, agree a schedule in writing before work starts so the client's accounts team expects each invoice.",
      },
      {
        q: "Can the final invoice be lower than an interim invoice?",
        a: "Yes. The final invoice only bills what is left after earlier invoices are deducted, so it can be small, zero or even negative if the project came in under budget or the client was overbilled. A negative balance is normally handled with a credit note rather than a negative invoice.",
      },
      {
        q: "What should I write on a final invoice so the client knows it is the last one?",
        a: "Label it clearly, for example 'Final invoice for Project 2026-014', list every earlier interim invoice number and amount, show the agreed contract value, and state that no further charges will follow unless a change order is approved. That summary makes it easy for the client to close the purchase order.",
      },
      {
        q: "Do I need a new invoice number for each interim invoice?",
        a: "Yes. Every interim invoice and the final invoice need their own unique number from your normal sequence. You can add a project code or a suffix such as 'Interim 2 of 4' in the description, but the invoice number itself should never repeat.",
      },
      {
        q: "What is retention on an interim invoice?",
        a: "Retention, also called retainage, is a percentage of each interim payment that the client holds back as security until the work is finished and any defects are fixed. It is still money you have earned, so show it as a separate line on every interim invoice. The contract should say the percentage, when it is released and whether part of it is kept for a defects period.",
      },
      {
        q: "What is the difference between an interim invoice and a proforma invoice?",
        a: "An interim invoice is a real demand for payment for work already done, so it normally goes into your sales records and creates a tax point. A proforma invoice is only a preview or quote of what you will bill. It is not a request for payment and usually has no tax effect. Send a proforma when the client needs approval before you issue the actual invoice.",
      },
      {
        q: "How do I add a change order to an interim invoice?",
        a: "Once the client has signed the change order, add it to the invoice for the period in which the extra work was done, ideally as its own line with the change order number. Increase the adjusted contract value by the same amount so the percentage complete still makes sense. Never bill a variation that has not been approved in writing, because it is the first line a client will dispute.",
      },
      {
        q: "What can I do if a client pays an interim invoice late?",
        a: "Follow your contract first: it may set interest, a late fee or a right to suspend work. Many countries also have their own rules. In the UK, for example, businesses can claim statutory interest on late B2B payments, and the Construction Act gives a right to suspend work after notice if payment is not made. Check the law where the work takes place before you suspend anything.",
      },
      {
        q: "Can I issue the final invoice before the defects period ends?",
        a: "Yes. Most contracts expect the final invoice at completion, with part of the retention held until the defects or warranty period ends. In that case the final invoice shows the retention still held, and you issue a short separate invoice to release it when the period is over. Write the release date on the final invoice so the client's accounts team can diary it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An interim invoice bills for part of a project while work is still in progress, based on work completed, a milestone or a schedule of payments. A final invoice is issued when the job is finished: it shows the full contract value, deducts every interim invoice already billed, releases any retention and asks for the remaining balance.</p>

<p>Long jobs rarely wait until the end to get paid. Builders, consultants, agencies and software developers all bill along the way, and the way you structure those interim invoices decides whether the final invoice is a clean close-out or a month of reconciliation emails. This guide compares the two documents side by side and walks through a worked example with real numbers. You can produce both types in our <a href="/invoice-generator">free invoice generator</a> by changing the line descriptions and using the amount-paid field.</p>

<h2>What is an interim invoice?</h2>
<p>An interim invoice is a bill for a portion of a larger contract, issued before the work is complete. The word "interim" simply means "in the meantime". Depending on your industry you will also hear it called a progress invoice, a progress billing, a stage payment invoice or an interim payment application.</p>
<p>The amount on an interim invoice is usually calculated one of three ways:</p>
<ul>
<li><strong>Percentage of completion:</strong> you bill the share of the contract value that matches the work done, for example 40% complete on a $60,000 job.</li>
<li><strong>Milestones:</strong> you bill a fixed amount when an agreed deliverable is signed off, such as design approval or a working prototype. Our guide to <a href="/blog/milestone-payments">milestone payments</a> covers this model in depth.</li>
<li><strong>Time period:</strong> you bill monthly for work performed in that month, common on cost-plus and time-and-materials contracts.</li>
</ul>
<p>An interim invoice is different from a <a href="/blog/deposit-invoice">deposit invoice</a>. A deposit is paid before work starts; an interim invoice pays for work already done.</p>

<h2>What is a final invoice?</h2>
<p>A final invoice is the closing bill for a project or contract. It confirms the total amount earned, subtracts everything you have already invoiced, adds any approved variations or change orders, releases retention if the contract allows, and states the balance still due. Once it is paid, the account for that job should be at zero.</p>
<p>Because it summarizes the whole job, a final invoice is often the most scrutinized document in the project. The client's accounts payable team will compare it with the contract, the purchase order and every interim invoice, so it needs to reconcile to the cent.</p>

<h2>Interim invoice vs final invoice: key differences</h2>
<table><thead><tr><th>Feature</th><th>Interim invoice</th><th>Final invoice</th></tr></thead><tbody>
<tr><td>When issued</td><td>During the project, on a schedule or at milestones</td><td>When work is complete or the contract ends</td></tr>
<tr><td>Amount billed</td><td>Work done in the period, or cumulative work less earlier billing</td><td>Total contract value less all earlier invoices</td></tr>
<tr><td>Retention</td><td>Usually deducted from each interim invoice</td><td>Released in full or in part</td></tr>
<tr><td>Change orders</td><td>Included once approved</td><td>All approved variations reconciled</td></tr>
<tr><td>How many</td><td>Several</td><td>One per contract</td></tr>
<tr><td>Purpose</td><td>Keeps cash flowing during long work</td><td>Closes the account and the purchase order</td></tr>
<tr><td>Typical label</td><td>"Interim invoice 2 of 4" or "Progress billing, period to 31 May"</td><td>"Final invoice" with a summary of earlier invoices</td></tr>
</tbody></table>

<h2>Who uses interim invoices?</h2>
<p>Any business with a project that runs longer than one billing cycle can use interim invoicing. It is standard in:</p>
<ul>
<li><strong>Construction and trades</strong>, where monthly progress claims are the norm. Our <a href="/blog/construction-invoice-guide">construction invoicing guide</a> covers schedules of values, retainage and AIA-style pay applications.</li>
<li><strong>Consulting and professional services</strong>, where engagements last months and fees are billed monthly or by phase.</li>
<li><strong>Web and software development</strong>, often split into discovery, design, build and launch.</li>
<li><strong>Manufacturing of custom goods</strong>, with stage payments as materials are bought and production progresses.</li>
<li><strong>Events and creative production</strong>, where suppliers must be paid well before the event or launch date.</li>
</ul>
<p>In the UK, the Housing Grants, Construction and Regeneration Act 1996 (the Construction Act) gives parties to most construction contracts a right to stage or periodic payments unless the work is expected to last less than 45 days. Where the contract does not set out a payment mechanism, the Scheme for Construction Contracts fills the gap. You can read section 109 on <a href="https://www.legislation.gov.uk/ukpga/1996/53/section/109" target="_blank" rel="noopener noreferrer">legislation.gov.uk</a>. Other countries have their own security-of-payment laws, so check the rules where the work takes place.</p>

<h2>How interim payments work, step by step</h2>
<h3>1. Agree the billing method in the contract</h3>
<p>State whether you bill by percentage complete, milestone or month, how much retention (if any) the client holds back, how many days the client has to pay, and what evidence must accompany each interim invoice, such as timesheets, photos or a progress report.</p>
<h3>2. Measure the work done</h3>
<p>At each billing date, measure progress against the contract. On cumulative billing you value all work completed to date, not just this month's work.</p>
<h3>3. Deduct retention and earlier invoices</h3>
<p>Subtract the agreed retention percentage, then subtract everything you have already billed. What remains is the amount for this interim invoice.</p>
<h3>4. Issue the invoice with full references</h3>
<p>Give it a unique number (the <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format), quote the client's purchase order and project reference, and label it "Interim invoice 1", "Interim invoice 2" and so on.</p>
<h3>5. Close out with a final invoice</h3>
<p>When the work is complete, issue the final invoice that reconciles everything and releases retention as the contract allows.</p>

<h2>Worked example: three interim invoices and a final invoice</h2>
<p>A contractor agrees a $60,000 fixed-price contract (figures exclude sales tax) with 5% retention deducted from every interim invoice and released on the final invoice. Billing is cumulative.</p>
<table><thead><tr><th>Line</th><th>Interim 1</th><th>Interim 2</th><th>Final</th></tr></thead><tbody>
<tr><td>Work completed to date</td><td>$18,000</td><td>$42,000</td><td>$60,000</td></tr>
<tr><td>Less retention (5%)</td><td>($900)</td><td>($2,100)</td><td>$0 (released)</td></tr>
<tr><td>Earned to date, net of retention</td><td>$17,100</td><td>$39,900</td><td>$60,000</td></tr>
<tr><td>Less previously invoiced</td><td>$0</td><td>($17,100)</td><td>($39,900)</td></tr>
<tr><td><strong>Amount due this invoice</strong></td><td><strong>$17,100</strong></td><td><strong>$22,800</strong></td><td><strong>$20,100</strong></td></tr>
</tbody></table>
<p>Check the arithmetic: $17,100 + $22,800 + $20,100 = $60,000, the full contract value. The final invoice of $20,100 is the last $18,000 of work ($60,000 − $42,000) plus the $2,100 of retention held back to date ($18,000 + $2,100 = $20,100), which is the same as $60,000 minus the $39,900 already billed. If the client approved a $2,500 change order during the job, it would be added to "work completed to date" on the invoice where the extra work happened, and the final total would become $62,500.</p>
<p>If the client paid only part of an interim invoice, the shortfall is still owed on that invoice; do not quietly roll it into the next one. Our guide to the <a href="/blog/partial-payment-invoice">partial payment invoice</a> shows how to display amount paid and balance due.</p>

<h2>What to include on an interim invoice</h2>
<ul>
<li>The words "Interim invoice" and its sequence, for example "Interim invoice 2 of 4".</li>
<li>Contract or project reference and the client's PO number.</li>
<li>The billing period or milestone being claimed.</li>
<li>Contract value, work completed to date and percentage complete.</li>
<li>Retention held, previous invoices deducted and the amount due now.</li>
<li>Tax, payment terms and due date.</li>
</ul>

<h2>What to include on a final invoice</h2>
<ul>
<li>The words "Final invoice" so nobody mistakes it for another interim claim.</li>
<li>Original contract value plus or minus each approved change order.</li>
<li>A list of every interim invoice with its number, date and amount.</li>
<li>Retention released and any amounts still held under a defects period.</li>
<li>The final balance due and how to pay it.</li>
</ul>
<p>Some clients also want a <a href="/blog/statement-of-account">statement of account</a> with the final invoice so they can see every invoice and payment on one page.</p>

<h2>Tax on interim invoices</h2>
<p>In most VAT and GST systems, issuing an invoice or receiving payment creates a tax point, so tax is charged on each interim invoice for the amount billed, not saved up for the final invoice. In the US, sales tax on services and construction varies by state. Calculate the tax on each invoice with the <a href="/tools/sales-tax-calculator">sales tax calculator</a> and confirm the treatment of retention with your accountant, because some systems tax retention when it is billed and others when it is paid.</p>

<h2>Common mistakes with interim and final invoices</h2>
<ul>
<li><strong>Mixing cumulative and period billing</strong> on the same project, which leads to double billing.</li>
<li><strong>Forgetting to deduct earlier invoices</strong> on the final invoice.</li>
<li><strong>Not releasing retention</strong>, or releasing it before the contract says you can.</li>
<li><strong>Reusing an invoice number</strong> with a suffix instead of issuing a new one.</li>
<li><strong>Billing unapproved extras.</strong> Get a signed change order first.</li>
<li><strong>Vague descriptions</strong> such as "progress payment" with no period or percentage.</li>
</ul>

<h2>Interim and final invoice checklist</h2>
<ol>
<li>Billing method, retention and payment terms agreed in writing.</li>
<li>Progress measured and evidence attached.</li>
<li>Unique invoice number and clear "Interim" or "Final" label.</li>
<li>Previous invoices and retention shown line by line.</li>
<li>Tax calculated on the amount billed.</li>
<li>Totals reconcile to the contract value plus change orders.</li>
</ol>

<h2>Next step: create your interim or final invoice</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, choose a structured layout such as the <a href="/invoice-templates/corporate">Corporate template</a>, and add one line for work completed to date, one for retention and one for previously invoiced amounts. Download the PDF and keep a copy with the project file so the final invoice is easy to reconcile.</p>
`,
  },
  {
    slug: "self-billing-invoice",
    title: "Self-Billing Invoice: Rules, Agreement and Example",
    description:
      "How a self billing invoice works under HMRC rules: the written self-billing agreement, mandatory VAT wording, records to keep, an example and EU rules compared.",
    category: "invoicing-basics",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: ["vat-invoice-guide", "remittance-advice", "sole-trader-invoice-uk"],
    faqs: [
      {
        q: "Do I need HMRC approval to start self-billing?",
        a: "No. HMRC's guidance says you do not have to tell HMRC or get its approval before you self-bill. What you do need is a signed written agreement with each supplier, the correct wording on each invoice and proper records, which you must be able to show HMRC if asked.",
      },
      {
        q: "Can I self-bill a supplier who is not VAT registered?",
        a: "Yes, you can still issue self-billed invoices as a commercial document, but you must not add any VAT to them. HMRC also notes that a self-billing arrangement with a supplier who deregisters falls outside the VAT self-billing regulations, so update the agreement if a supplier's status changes.",
      },
      {
        q: "What happens if the self-billed invoice is wrong?",
        a: "Because you issued the invoice, you normally correct it, usually with a self-billed credit note or a corrected invoice, and send the supplier a copy. Agree in the self-billing agreement how disputes and corrections are handled and how quickly the supplier must raise errors.",
      },
      {
        q: "Can the supplier still send me their own invoice?",
        a: "Not for the same supplies. Under a valid agreement the supplier confirms they will not issue VAT invoices for the transactions it covers. If both of you issue invoices, the same supply would appear twice and VAT could be claimed or declared incorrectly.",
      },
      {
        q: "Is a Construction Industry Scheme payment statement the same as a self-billed invoice?",
        a: "No. A CIS payment and deduction statement records the tax a contractor deducted from a subcontractor. Some contractors also self-bill their subcontractors, but that requires a separate self-billing agreement and invoices that meet VAT rules, including reverse charge wording where the domestic reverse charge applies.",
      },
      {
        q: "Can I use self-billing with suppliers outside the UK?",
        a: "HMRC says suppliers can be based outside the UK, but other countries may set their own conditions for self-billing, and the agreement must meet those too. If you send electronic self-billed invoices overseas, both sides must be able to accept the format.",
      },
      {
        q: "Can the self-billing agreement be part of my main contract with the supplier?",
        a: "Yes. The agreement does not have to be a standalone document, as long as it contains everything HMRC lists: the supplier's authority for you to issue invoices, their promise not to issue their own VAT invoices, the duration and the notification duties. If it sits inside a longer contract, its duration can match the contract's end date. Keep a signed copy you can show HMRC on request.",
      },
      {
        q: "Can I send self-billed invoices electronically?",
        a: "Yes. The UK does not require paper self-billed invoices, and many customers email a PDF or make invoices available through a supplier portal. The supplier must agree to receive them that way, and both of you need to be able to store and retrieve them for your record-keeping period. The content rules, including the HMRC statement on output tax, are the same whatever the format.",
      },
      {
        q: "What records does the supplier need to keep under self-billing?",
        a: "The supplier should keep a copy of every self-billed invoice and credit note it receives, because these are its sales invoices for VAT purposes. It should also keep a copy of the signed agreement and check each invoice against its own delivery or work records. If the figures are wrong, the supplier should raise it quickly, as errors flow straight into its VAT return.",
      },
      {
        q: "What is the difference between self-billing and the reverse charge?",
        a: "Self-billing changes who prepares the invoice: the customer writes it, but the supplier still owes any VAT shown. The reverse charge changes who accounts for the VAT: the customer declares it instead of the supplier. The two can apply together, for example in construction, where a self-billed invoice must show reverse charge wording and no VAT for the supplier to pay over.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A self billing invoice is an invoice the customer prepares on behalf of the supplier, then sends to the supplier with payment. In the UK it is allowed for VAT when both parties sign a written self-billing agreement, the invoice shows the supplier's VAT details and the statement "The VAT shown is your output tax due to HMRC", and the customer keeps proper records.</p>

<p>Self-billing flips the usual invoicing flow. Instead of waiting for dozens of suppliers to send invoices in different formats, the customer, who already knows what was delivered, raises the invoice itself. It is common with hauliers, growers, scrap metal dealers, subcontractors, publishers paying royalties and platforms paying sellers. This guide explains the HMRC rules, what the agreement must say, what the invoice must show and how the EU approach compares. If you need a standard UK VAT invoice instead, see our <a href="/blog/vat-invoice-guide">VAT invoice guide</a>.</p>

<h2>What is a self billing invoice?</h2>
<p>A self-billing invoice (also written self billing invoice or self-billed invoice) is a VAT invoice issued by the customer for goods or services it has received from a supplier. The customer calculates the amount, issues the invoice in the supplier's name, pays it and sends a copy to the supplier. The supplier records the invoice as its own sale and accounts for any VAT shown on it.</p>
<p>It is still the supplier's sale. Self-billing changes who prepares the paperwork, not who makes the supply or who owes the output VAT.</p>

<h2>When does self-billing make sense?</h2>
<ul>
<li><strong>The customer controls the data.</strong> A distributor weighing produce, a haulage firm logging loads or a publisher calculating royalties knows the quantity and price before the supplier does.</li>
<li><strong>Many small suppliers.</strong> Paying 200 subcontractors from one system is easier than matching 200 differently formatted invoices.</li>
<li><strong>Suppliers who struggle with paperwork.</strong> Self-billing removes late or missing invoices as a reason payments are held up.</li>
<li><strong>Fewer disputes on price.</strong> The customer applies the agreed rate consistently.</li>
</ul>
<p>The trade-off is responsibility: the customer must keep the agreements current and get every invoice right, because mistakes affect the supplier's VAT return.</p>

<h3>Self-billing pros and cons</h3>
<table><thead><tr><th>For the customer</th><th>For the supplier</th></tr></thead><tbody>
<tr><td><strong>Pro:</strong> consistent invoice format and data from its own system</td><td><strong>Pro:</strong> no invoices to prepare, and payment arrives with the paperwork</td></tr>
<tr><td><strong>Pro:</strong> fewer late, missing or duplicate supplier invoices</td><td><strong>Pro:</strong> less admin for small or one-person businesses</td></tr>
<tr><td><strong>Con:</strong> must manage agreements, reviews and VAT number changes</td><td><strong>Con:</strong> must check every self-billed invoice, because the VAT on it is the supplier's output tax</td></tr>
<tr><td><strong>Con:</strong> errors affect someone else's VAT return</td><td><strong>Con:</strong> less control over the timing and description of the sale</td></tr>
</tbody></table>
<p>Suppliers should not treat self-billed invoices as someone else's problem. If the customer gets the quantity, rate or VAT wrong, the supplier's own VAT return will be wrong too, so agree a short window, such as 14 days, to raise any queries.</p>

<h2>HMRC self billing rules: who can use it</h2>
<p>According to HMRC's guidance on <a href="https://www.gov.uk/guidance/vat-self-billing-arrangements" target="_blank" rel="noopener noreferrer">VAT self-billing arrangements</a>, a customer who wants to self-bill must:</p>
<ul>
<li>have a signed, written agreement with each supplier before self-billing them;</li>
<li>review agreements at regular intervals (they usually last 12 months);</li>
<li>keep records of every supplier it self-bills;</li>
<li>make sure each invoice contains the required information;</li>
<li>stop self-billing a supplier who changes VAT number until a new agreement is in place.</li>
</ul>
<p>You do not need to tell HMRC or get its approval to start. HMRC's guidance describes the arrangement for VAT-registered customers and suppliers; you must not add VAT to self-billed invoices issued to suppliers who are not VAT registered. VAT Notice 700 also confirms that a customer operating self-billing is excused from the normal duty on the supplier to issue a VAT invoice for those supplies.</p>

<h2>What a self-billing agreement must include</h2>
<p>The self-billing agreement is a legally binding document and you must be able to show it to HMRC. HMRC lists these contents:</p>
<table><thead><tr><th>Clause</th><th>What it says</th></tr></thead><tbody>
<tr><td>Authority to invoice</td><td>The supplier agrees that the customer may issue invoices on its behalf.</td></tr>
<tr><td>No duplicate invoices</td><td>The supplier will not issue its own VAT invoices for the supplies covered.</td></tr>
<tr><td>Duration</td><td>An expiry date, usually 12 months, or the end date of the business contract it sits in.</td></tr>
<tr><td>Notification duties</td><td>The supplier will tell the customer if it deregisters for VAT, gets a new VAT number or transfers its business as a going concern.</td></tr>
<tr><td>Third parties</td><td>Details of any outsourced provider that issues the invoices for the customer.</td></tr>
</tbody></table>
<p>Many businesses also add commercial terms: how quickly the supplier must query an invoice, how corrections are made and which bank account receives payment. If the supplier transfers its business as a going concern, a new agreement is needed with the new owner.</p>

<h2>What a self-billed invoice must show</h2>
<p>A self-billed VAT invoice needs everything a full VAT invoice needs, plus the supplier's details and a fixed statement:</p>
<ul>
<li>A unique invoice number in a sequence for that supplier (many customers use a separate series per supplier, for example SB-ACME-0042).</li>
<li>Invoice date and the time of supply (tax point) if different.</li>
<li>The <strong>supplier's</strong> name, address and VAT registration number.</li>
<li>The customer's name and address.</li>
<li>A description of the goods or services, quantity and unit price.</li>
<li>The VAT rate and the amount payable excluding VAT for each rate.</li>
<li>The total VAT in sterling and the total amount payable.</li>
<li>The words <strong>"The VAT shown is your output tax due to HMRC"</strong>.</li>
</ul>
<p>VAT Notice 700 also says self-billed invoices must carry a "self billing" reference, so many businesses print "Self-billing invoice" as the document title as well as the HMRC statement.</p>

<h2>Self billing invoice example</h2>
<p>A distribution company (the customer) self-bills a VAT-registered haulier for October deliveries.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Net</th></tr></thead><tbody>
<tr><td>Pallet deliveries, Leeds to Manchester, October 2026</td><td>12 loads</td><td>£250.00</td><td>£3,000.00</td></tr>
<tr><td colspan="3">VAT at 20%</td><td>£600.00</td></tr>
<tr><td colspan="3"><strong>Total payable to supplier</strong></td><td><strong>£3,600.00</strong></td></tr>
</tbody></table>
<p>The arithmetic: 12 × £250 = £3,000; £3,000 × 20% = £600; £3,000 + £600 = £3,600. The invoice is titled "Self-billing invoice", shows the haulier as the supplier with its VAT number, shows the distribution company as the customer, and carries the statement "The VAT shown is your output tax due to HMRC". The customer pays £3,600 and sends the invoice copy with a <a href="/blog/remittance-advice">remittance advice</a>. The haulier enters £600 as output tax; the customer reclaims £600 as input tax, subject to the normal rules.</p>

<h2>Self-billing and the construction reverse charge</h2>
<p>Contractors in the Construction Industry Scheme often self-bill subcontractors. Where the VAT domestic reverse charge for building and construction services applies, the self-billed invoice must not charge VAT for the subcontractor to pay over; instead it shows the reverse charge wording and the VAT the customer must account for. A CIS payment and deduction statement is a separate document and does not replace a VAT invoice. Our guide to the <a href="/blog/reverse-charge-invoice">reverse charge invoice</a> covers the wording.</p>

<h2>VAT self-billing in the EU</h2>
<p>The EU VAT Directive (2006/112/EC) allows self-billing under Article 224 when there is a prior agreement between the parties and a procedure for the supplier to accept each invoice. Article 226 requires the invoice to carry the mention "Self-billing" (in each member state's language, such as "Autofacturation" in France or "Gutschrift" in Germany). Member states can add their own conditions, and countries moving to mandatory e-invoicing, such as Germany, Poland and France, have specific rules for self-billed e-invoices, so check the local requirements before you self-bill an EU supplier.</p>

<h2>Records to keep</h2>
<ul>
<li>A copy of every signed self-billing agreement and its review dates.</li>
<li>Each supplier's name, address and VAT registration number.</li>
<li>Copies of every self-billed invoice and credit note.</li>
</ul>
<p>HMRC warns that without the required records the invoices are not valid VAT invoices and the customer cannot reclaim the input tax. You stay responsible even if you outsource the process. For retention periods, see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</p>

<h2>Common self-billing mistakes</h2>
<ul>
<li>Self-billing before the written agreement is signed.</li>
<li>Letting agreements lapse past their expiry date without review.</li>
<li>Missing the statement "The VAT shown is your output tax due to HMRC".</li>
<li>Adding VAT for a supplier who is not, or is no longer, VAT registered.</li>
<li>Continuing to self-bill after the supplier changes its VAT number.</li>
<li>Supplier and customer both issuing invoices for the same supply.</li>
</ul>

<h2>Self-billing checklist</h2>
<ol>
<li>Signed agreement on file for each supplier, with expiry date.</li>
<li>Supplier's VAT number confirmed and recorded.</li>
<li>Separate invoice number sequence per supplier.</li>
<li>Full VAT invoice details plus the HMRC statement.</li>
<li>Copy sent to the supplier with payment.</li>
<li>Agreement reviewed before it expires.</li>
</ol>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Rules can change, so confirm the current requirements in HMRC's <a href="https://www.gov.uk/guidance/vat-guide-notice-700" target="_blank" rel="noopener noreferrer">VAT Notice 700</a> and the self-billing guidance, or speak to an accountant.</p>

<h2>Next step: draft a self-billed invoice</h2>
<p>In the <a href="/invoice-generator/uk">UK invoice generator</a>, enter the supplier's details in the "from" section and your business as the customer, title the document "Self-billing invoice", add the supplier's VAT number, and put "The VAT shown is your output tax due to HMRC" in the notes. Use the <a href="/tools/invoice-number-generator">invoice number generator</a> to set up a per-supplier sequence. The PDF is a document you send yourself; the tool does not send invoices or keep agreements for you.</p>
`,
  },
  {
    slug: "partial-payment-invoice",
    title: "Partial Payment Invoice: Show Amount Paid and Balance Due",
    description:
      "How to make a partial payment invoice: show amount paid and balance due, split a bill into installments, record short payments and avoid double billing.",
    category: "invoicing-basics",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: [
      "lien-waiver",
      "payment-plan-agreement",
      "short-payments-and-deductions",
      "deposit-invoice",
      "statement-of-account",
      "payment-receipt-template",
    ],
    faqs: [
      {
        q: "Should I issue a new invoice after a partial payment?",
        a: "Usually not. The original invoice stays open for the unpaid balance. You can send an updated copy showing the payment received and the balance due, but keep the same invoice number. Issue a new invoice only for new charges, such as an agreed late fee or additional work.",
      },
      {
        q: "Can a client pay an invoice in installments without an agreement?",
        a: "A client can send whatever amount they choose, but they remain in breach of your payment terms until the full amount is paid. If you agree to installments, confirm the schedule and due dates in writing so it is clear the remaining payments are not overdue.",
      },
      {
        q: "How do I record a partial payment in my books?",
        a: "Record the cash received against the specific invoice, which reduces accounts receivable by that amount and leaves the remainder as an open balance. Under cash accounting, only the amount received counts as income for that period. Note the payment date and reference so it matches your bank statement.",
      },
      {
        q: "Do I charge late fees on the unpaid balance only?",
        a: "Late fees and interest are normally calculated on the overdue balance, not the original total, and only if your terms or local law allow them. Once a partial payment arrives, recalculate any interest on the reduced amount from that date.",
      },
      {
        q: "What if the client pays more than the balance due?",
        a: "Do not keep the overpayment silently. Either refund it or, with the client's agreement, hold it as a credit on their account and apply it to the next invoice. Record it clearly so your receivables and the client's statement both show the credit.",
      },
      {
        q: "Does accepting a partial payment mean I give up the rest of the balance?",
        a: "Usually not. Accepting part of the money normally leaves the remaining balance owed. Be careful, though, if a client sends a payment marked 'payment in full' for a disputed amount, because in some places, including some US states, cashing it can settle the debt. Reply in writing that you accept it only as part payment, and take advice if a large sum is involved.",
      },
      {
        q: "What if the client deducted withholding tax from the payment?",
        a: "In some countries business clients must withhold tax from certain payments and pay it to the tax authority on your behalf. Ask for the withholding tax certificate or receipt, then treat the withheld amount as paid on the invoice, not as a short payment. You can usually claim it as a credit against your own tax. Check the rules with your local tax authority or accountant.",
      },
      {
        q: "How do I show a deposit already paid on the final invoice?",
        a: "Bill the full value of the work, then show the deposit as an amount already paid, with the deposit invoice number and date. The balance due is the total minus the deposit. If you issued a separate tax invoice for the deposit, check how your tax system wants the tax on the deposit shown, so it is not charged twice on the final invoice.",
      },
      {
        q: "What should I do if the client never pays the remaining balance?",
        a: "Keep chasing in writing with dated reminders, then consider a formal letter before action, a collection agency or a small claims court, depending on the amount. If you decide the debt is unrecoverable, your accountant can write it off as a bad debt in your books. Do not delete or edit the original invoice, and check whether you can reclaim any tax paid on it.",
      },
      {
        q: "Can I stop work until the outstanding balance is paid?",
        a: "Only if your contract allows it, or the law gives you that right. Many freelance and service contracts let you pause work on overdue invoices after written notice. Some construction laws also give a statutory right to suspend. Stopping without that right could put you in breach of contract, so check the terms and give the client a clear deadline in writing first.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A partial payment invoice shows the invoice total, each amount the client has already paid with its date, and the balance due that remains. Keep the original invoice number, add an "Amount paid" line under the total, show "Balance due" in bold, and restate the due date for the remainder or the agreed installment schedule.</p>

<p>Clients pay in parts for many reasons: a deposit up front, an agreed payment plan, a disputed line held back or simply a short payment. Whatever the reason, your invoice needs to show exactly what has been received and what is still owed, or you will end up chasing the wrong figure. Our <a href="/invoice-generator">free invoice generator</a> has an "Amount already paid" field that subtracts payments from the total and shows the balance due automatically.</p>

<h2>What is a partial payment invoice?</h2>
<p>A partial payment invoice is any invoice where the amount paid so far is less than the invoice total. Most invoicing tools, including ours, handle it with two extra lines in the totals block: the amount paid and the balance due. The invoice itself, its number, date, line items and tax, stays exactly as issued. It is not a separate legal document type; it is an ordinary invoice that tracks payments against it. You will also see it described as an invoice with balance due, a part-payment invoice or, when the split is planned in advance, an installment invoice.</p>

<h2>When clients make partial payments</h2>
<ul>
<li><strong>Deposits and advances:</strong> the client paid a share before work started. See our guide to the <a href="/blog/deposit-invoice">deposit invoice</a>.</li>
<li><strong>Agreed installments:</strong> a large bill split into, say, three monthly payments.</li>
<li><strong>Milestone or progress payments</strong> on long projects, covered in <a href="/blog/interim-invoice-vs-final-invoice">interim invoice vs final invoice</a>.</li>
<li><strong>Short payments:</strong> the client paid less than invoiced, sometimes because of bank fees, a deducted discount or a disputed item.</li>
<li><strong>Cash-flow trouble:</strong> the client pays what they can now and promises the rest.</li>
</ul>

<h2>How to show amount paid and balance due on an invoice</h2>
<p>The totals block at the bottom of the invoice should read top to bottom like a calculation:</p>
<table><thead><tr><th>Line</th><th>What it shows</th></tr></thead><tbody>
<tr><td>Subtotal</td><td>Sum of all line items before tax</td></tr>
<tr><td>Discount</td><td>Any agreed reduction</td></tr>
<tr><td>Tax</td><td>Sales tax, VAT or GST on the taxable amount</td></tr>
<tr><td>Total</td><td>The full amount of the invoice</td></tr>
<tr><td>Amount paid</td><td>Payments received to date, with dates if there are several</td></tr>
<tr><td><strong>Balance due</strong></td><td>Total minus amount paid: the figure the client should pay now</td></tr>
</tbody></table>
<p>Never change the invoice total to the remaining balance. The total is the value of the sale; changing it would understate your income and confuse anyone reconciling the account.</p>

<h2>Partial payment invoice example</h2>
<p>A web designer issues invoice INV-1042 for $4,800 (including tax) with Net 30 terms. The client pays $1,500 on 3 September and $1,000 on 1 October.</p>
<table><thead><tr><th>Date</th><th>Entry</th><th>Amount</th><th>Running balance</th></tr></thead><tbody>
<tr><td>20 Aug</td><td>Invoice INV-1042 issued</td><td>$4,800.00</td><td>$4,800.00</td></tr>
<tr><td>3 Sep</td><td>Payment received, bank transfer ref 88213</td><td>($1,500.00)</td><td>$3,300.00</td></tr>
<tr><td>1 Oct</td><td>Payment received, card</td><td>($1,000.00)</td><td>$2,300.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$2,300.00</strong></td></tr>
</tbody></table>
<p>The arithmetic: $1,500 + $1,000 = $2,500 paid; $4,800 − $2,500 = $2,300 balance due. The updated invoice keeps number INV-1042, shows "Amount paid: $2,500.00 (3 Sep $1,500; 1 Oct $1,000)" and "Balance due: $2,300.00". The original due date was 19 September, so the remaining $2,300 is overdue unless you agreed a new date.</p>

<h2>Installment invoice: one invoice or several?</h2>
<p>When you agree a payment plan up front, you have two options.</p>
<h3>Option 1: one invoice with a payment schedule</h3>
<p>Issue a single invoice for the full amount and list the installments in the notes, for example "Payable in 3 installments: $1,600 due 1 Nov, $1,600 due 1 Dec, $1,600 due 1 Jan." Update the amount paid as each arrives. This keeps the sale on one document and works well when the full amount is earned now, such as a finished project the client pays off over time.</p>
<h3>Option 2: a separate invoice for each installment</h3>
<p>Issue a new invoice, with its own number and due date, for each installment, describing it as "Installment 2 of 3 for Project X". This suits ongoing work, subscriptions and situations where tax should be charged as each part is billed. It also keeps each overdue amount distinct. If the arrangement repeats on a schedule, see <a href="/blog/recurring-invoices-guide">recurring invoices</a>.</p>
<table><thead><tr><th>Factor</th><th>One invoice + schedule</th><th>Invoice per installment</th></tr></thead><tbody>
<tr><td>Tax point</td><td>Usually the full amount at issue</td><td>Each installment as billed</td></tr>
<tr><td>Tracking overdue amounts</td><td>Needs a payment history</td><td>Each invoice simply open or paid</td></tr>
<tr><td>Admin</td><td>One document to update</td><td>Several documents to issue</td></tr>
<tr><td>Best for</td><td>Finished work paid off over time</td><td>Phased work and long plans</td></tr>
</tbody></table>

<h2>How to handle a short payment</h2>
<ol>
<li><strong>Find out why.</strong> Compare the payment with the invoice and the client's <a href="/blog/remittance-advice">remittance advice</a>. Bank or transfer fees, an early payment discount taken late, withholding tax or a disputed line are the usual causes.</li>
<li><strong>Decide whether the difference is owed.</strong> If the client deducted fees your terms say they should cover, ask for the balance. If the deduction is legitimate, issue a <a href="/blog/credit-note-guide">credit note</a> for the agreed amount so the invoice can close.</li>
<li><strong>Send an updated invoice or statement</strong> showing the amount paid and balance due.</li>
<li><strong>Follow up on a date.</strong> Treat the remaining balance like any other overdue amount.</li>
</ol>

<h3>Send a receipt for each partial payment</h3>
<p>Clients often want proof of each payment. A receipt should show the amount received, date, payment method, the invoice number it applies to and the remaining balance. Our <a href="/blog/payment-receipt-template">payment receipt template</a> guide lists the fields. Clients with several invoices open may prefer a <a href="/blog/statement-of-account">statement of account</a> that lists every invoice and payment together.</p>

<h2>Accounting for partial payments</h2>
<p>Apply each payment to a specific invoice, not just to the client's account in general, unless the client tells you otherwise and your agreement allows it. Under accrual accounting the full invoice was income when issued, and a payment simply reduces accounts receivable. Under cash accounting, only the amount received counts as income for that period. Our explainer on <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> shows both methods side by side.</p>

<h2>Partial payments and sales tax or VAT</h2>
<p>A partial payment does not usually change the tax on the invoice. The tax is calculated on the full invoice total when the invoice is issued, and each payment is treated as paying a share of both the price and the tax. Timing is where it can matter:</p>
<ul>
<li><strong>UK VAT, standard accounting:</strong> VAT is normally due for the period in which the tax point falls, even if the client has paid only part of the invoice.</li>
<li><strong>UK VAT Cash Accounting Scheme:</strong> eligible businesses account for VAT when payment is received, so a partial payment brings in a proportionate share of the VAT.</li>
<li><strong>US sales tax:</strong> most states expect you to collect and remit tax on the sale, but reporting rules, including whether you can report on a cash basis, vary by state.</li>
</ul>
<p>If a balance is never paid, many tax systems let you recover the tax through bad debt relief once certain conditions are met. Confirm the rules for your jurisdiction with your accountant before you adjust any return.</p>

<h2>How to ask for the remaining balance</h2>
<p>Keep the message short, specific and friendly. Name the invoice, the amount received, the balance and a date:</p>
<blockquote>Hi Sam, thanks for your payment of $2,500 towards invoice INV-1042, received on 1 October. The remaining balance is $2,300. I've attached an updated copy of the invoice showing both payments. Could you confirm when the balance will be paid? If it helps, we can split it into two payments of $1,150 on 15 October and 1 November.</blockquote>
<p>Offering a short plan often gets a faster answer than repeating the full demand. For firmer follow-ups, see our <a href="/blog/payment-reminder-emails">payment reminder email templates</a>.</p>

<h2>Common mistakes with partial payment invoices</h2>
<ul>
<li>Editing the invoice total down to the balance instead of adding an amount-paid line.</li>
<li>Issuing a brand-new invoice for the balance, which double counts the sale.</li>
<li>Not recording payment dates, so the history cannot be matched to the bank.</li>
<li>Letting the balance drift without a new agreed due date.</li>
<li>Calculating late fees on the original total instead of the outstanding balance.</li>
</ul>

<h2>Partial payment invoice checklist</h2>
<ol>
<li>Original invoice number and total unchanged.</li>
<li>Each payment listed with date and reference.</li>
<li>Balance due shown clearly and correctly.</li>
<li>Due date or installment schedule for the balance.</li>
<li>Receipt sent for each payment if the client wants one.</li>
<li>Any write-down handled with a credit note, not an edit.</li>
</ol>

<h2>Next step: update your invoice with the amount paid</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a>, load or recreate the original invoice with the same number, type the payments received into "Amount already paid" and add the payment dates to the notes. The PDF will show the total, the amount paid and the balance due. Drafts are saved in your browser, so you can come back to update the same invoice after the next installment arrives.</p>
`,
  },
  {
    slug: "invoice-reference-number",
    title: "Invoice Reference Number: Meaning, Format and Examples",
    description:
      "What an invoice reference number is, how it differs from an invoice number, payment references, India's IRN and ZATCA UUIDs, with formats and examples.",
    category: "invoicing-basics",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-numbering-system", "po-number-on-invoice", "india-e-invoice-limit"],
    faqs: [
      {
        q: "Can I use the same invoice reference number twice?",
        a: "Your invoice number must never repeat, because tax authorities and clients use it to identify one specific invoice. A customer reference such as a PO number or project code can appear on several invoices. If you are unsure which a field is, treat anything labelled 'invoice no.' as unique.",
      },
      {
        q: "Where do I find the reference number on an invoice I received?",
        a: "Look near the top right or under the title for 'Invoice number', 'Invoice no.' or 'Ref'. The payment section may show a separate payment reference to quote on your transfer. If the invoice came from an e-invoicing system, a long code such as an IRN or UUID may also appear near the QR code.",
      },
      {
        q: "What reference should I put on a bank transfer when paying an invoice?",
        a: "Use the reference the supplier asks for, which is usually the invoice number or a dedicated payment reference. Keep it short and exact, because some banking systems limit the reference field and cut off extra characters, which makes the payment harder for the supplier to match.",
      },
      {
        q: "Does a free invoice generator create an IRN?",
        a: "No. An IRN is issued by India's Invoice Registration Portal when an eligible business registers an e-invoice, and a ZATCA UUID is part of a compliant Saudi e-invoice from approved software. A PDF from a browser invoice generator can show your own invoice number and references, but it cannot produce a government-issued IRN.",
      },
      {
        q: "Is an invoice reference number the same as a transaction ID?",
        a: "No. A transaction ID is created by your bank or payment provider for a specific payment, while the invoice number identifies the bill. When a payment arrives, you match the transaction ID or payment reference to the invoice number to mark the invoice as paid.",
      },
      {
        q: "Is an invoice number legally required?",
        a: "In most VAT and GST systems, yes. The UK, the EU and India all require a unique, sequential invoice number on tax invoices. The US has no federal law requiring one, but clients, auditors and the IRS expect consistent records, so a unique number on every invoice is standard practice everywhere. Check your local tax authority's invoice rules if you are registered for VAT or GST.",
      },
      {
        q: "Can an invoice number include letters and symbols?",
        a: "Usually yes, as long as it stays unique and follows a logical sequence. Prefixes such as INV- or a year code are common. Some countries set limits: India's GST rules, for example, allow up to 16 characters made of letters, numbers, hyphens and slashes, unique for each financial year. Avoid characters that cause typing errors in bank references.",
      },
      {
        q: "Should I restart invoice numbers every year?",
        a: "You can if your tax rules allow it and each number remains unique, which is why a year prefix such as 2026-0001 is popular. In India a series must be unique within the financial year, so many businesses restart on 1 April with a new prefix. If you simply restart at 0001 with no prefix, you will have duplicate numbers, which tax authorities and clients dislike.",
      },
      {
        q: "What should I do if I skipped or duplicated an invoice number?",
        a: "For a skipped number, keep a short note in your records explaining the gap, for example that the number was voided before issue. For a duplicate that has already been sent, cancel one of the invoices with a credit note and reissue it under a new, unique number. Tell the client which number to use for payment so their records match yours.",
      },
      {
        q: "What is the difference between the IRN and the acknowledgement number in India?",
        a: "When the Invoice Registration Portal accepts an e-invoice, it returns the 64-character IRN, a signed QR code, and an acknowledgement number with an acknowledgement date. The IRN identifies the invoice itself, while the acknowledgement number and date confirm when the IRP registered it. Your own invoice number stays on the invoice too. Details are on the GST e-invoice portal.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An invoice reference number is the unique code that identifies an invoice, most often the invoice number itself, such as INV-2026-0142. The term is also used for related codes on the same document: the customer's PO or job reference, the payment reference to quote on a bank transfer, and government-issued IDs such as India's IRN or a ZATCA UUID.</p>

<p>Because "reference number" means different things to different people, it causes a surprising number of payment delays. A supplier asks for "the reference", the client quotes their own PO number, and the payment sits unmatched. This guide sorts out the terms, shows formats that work, and explains where the government-issued references fit. You can add an invoice number and any references in our <a href="/invoice-generator">free invoice generator</a>, and the <a href="/tools/invoice-number-generator">invoice number generator</a> suggests a format.</p>

<h2>What is an invoice reference number?</h2>
<p>In everyday use, the invoice reference number is the identifier the seller gives to an invoice so that both sides can find it later. Tax rules in most countries require every invoice to carry a unique, sequential number; the UK's VAT rules, the EU VAT Directive and GST regimes all include it among the mandatory fields. That number is the reference accounts payable will use when they approve and pay your bill, and the reference you will search for when a payment arrives.</p>

<h2>Invoice number vs reference number: what is the difference?</h2>
<p>On many invoices they are the same thing. Where an invoice shows both, the "invoice number" is your unique ID and the "reference" is something else, usually supplied by the customer or the payment system.</p>
<table><thead><tr><th>Reference</th><th>Who creates it</th><th>Unique per invoice?</th><th>Example</th></tr></thead><tbody>
<tr><td>Invoice number</td><td>Seller</td><td>Yes, always</td><td>INV-2026-0142</td></tr>
<tr><td>PO number</td><td>Buyer</td><td>No, one PO can cover several invoices</td><td>PO-778213</td></tr>
<tr><td>Customer or job reference</td><td>Buyer or seller</td><td>No</td><td>Project ATLAS / Site 4</td></tr>
<tr><td>Payment reference</td><td>Seller (asks buyer to quote it)</td><td>Usually</td><td>INV0142 or RF18539007547034</td></tr>
<tr><td>Quote or order number</td><td>Seller</td><td>Links back to an earlier document</td><td>Q-2026-031</td></tr>
<tr><td>IRN (India)</td><td>Invoice Registration Portal</td><td>Yes</td><td>64-character hash</td></tr>
<tr><td>UUID (Saudi Arabia, others)</td><td>Compliant e-invoicing software</td><td>Yes</td><td>36-character UUID</td></tr>
</tbody></table>
<p>If a large client issued a purchase order, it belongs in its own labelled field. Our guide to the <a href="/blog/po-number-on-invoice">PO number on an invoice</a> explains why a missing PO is one of the most common reasons invoices are rejected.</p>

<h2>Invoice reference number format: examples that work</h2>
<p>There is no single official format for your own invoice numbers. What matters is that each number is unique, follows a logical sequence and is easy to read aloud and type. Common patterns:</p>
<ul>
<li><strong>Simple sequence:</strong> 0001, 0002, 0003.</li>
<li><strong>Prefix plus sequence:</strong> INV-0142.</li>
<li><strong>Year plus sequence:</strong> 2026-0142, restarting or continuing each year.</li>
<li><strong>Client code plus sequence:</strong> ACME-0017.</li>
<li><strong>Series by document type:</strong> INV- for invoices, CN- for credit notes, SB- for self-billed invoices.</li>
</ul>
<p>Tax rules often go further than "unique". The EU VAT Directive (Article 226) requires a sequential number based on one or more series that uniquely identifies the invoice, and many national rules expect you to explain any gaps, such as a voided invoice. Separate series are generally fine, for example one per branch or per document type, as long as each series runs in order.</p>
<p>Avoid spaces, slashes and look-alike characters such as O and 0 or I and 1; they cause mistakes when clients type the reference into a bank payment. Our full guide to building an <a href="/blog/invoice-numbering-system">invoice numbering system</a> covers gaps, voided invoices and switching formats.</p>

<h2>What is a payment reference on an invoice?</h2>
<p>A payment reference is the text you ask the client to include with their transfer so you can match the money to the invoice. Most small businesses simply ask clients to quote the invoice number. Bank reference fields are often short, and UK bank transfers commonly allow 18 characters, so keep the reference compact: "INV0142" survives where "Invoice number INV-2026-0142 for Acme Ltd" gets cut off.</p>
<p>In Europe, some businesses use the structured creditor reference defined in ISO 11649 (the "RF" reference), which starts with RF, two check digits and up to 21 further characters. Banks can validate the check digits, which reduces mistyped references. Put the payment reference next to your <a href="/blog/bank-details-on-invoice">bank details on the invoice</a> with a line such as "Please quote INV0142 as the payment reference."</p>

<h2>IRN: the invoice reference number in Indian GST</h2>
<p>In India, IRN stands for Invoice Reference Number, and it has a specific legal meaning. Businesses above the GST e-invoicing turnover threshold must upload eligible B2B invoices to the Invoice Registration Portal (IRP). The IRP validates the invoice, generates a unique 64-character IRN (a hash based on the supplier's GSTIN, the financial year, the document type and the document number), digitally signs it and returns a signed QR code. The IRN does not replace your own invoice number; both appear on the e-invoice.</p>
<p>Our guide to the <a href="/blog/india-e-invoice-limit">e-invoice limit in GST</a> explains who must generate IRNs, the turnover threshold and the 30-day reporting rule for larger taxpayers. Official details are on the <a href="https://einvoice1.gst.gov.in/" target="_blank" rel="noopener noreferrer">GST e-invoice portal</a>.</p>

<h2>UUID and other e-invoice identifiers</h2>
<p>Many e-invoicing systems give every invoice a universally unique identifier (UUID), a 36-character code in five groups such as 3f8a2c1e-9b4d-4e7a-8c2f-1a6b5d9e0f37. In Saudi Arabia, ZATCA's e-invoicing rules require each electronic invoice to carry a UUID generated by compliant software, alongside the seller's own invoice number. Other clearance systems issue their own authority references when an invoice is accepted. These references are created by compliant e-invoicing software or the tax authority's platform; you cannot make one up and type it onto a PDF. See our <a href="/blog/zatca-e-invoicing-guide">ZATCA e-invoicing guide</a> for the Saudi requirements.</p>

<h2>Reference numbers on credit notes, reissues and receipts</h2>
<p>Related documents should always point back to the original invoice reference number. That is how clients, auditors and tax authorities follow the trail.</p>
<table><thead><tr><th>Document</th><th>Its own number</th><th>Reference it must quote</th></tr></thead><tbody>
<tr><td>Credit note</td><td>CN-0031</td><td>Original invoice INV-2026-0142 and the reason for the credit</td></tr>
<tr><td>Corrected or replacement invoice</td><td>INV-2026-0157</td><td>The invoice it replaces and the credit note that cancelled it</td></tr>
<tr><td>Payment receipt</td><td>RCPT-0098 (optional)</td><td>Invoice number paid and the payment date</td></tr>
<tr><td>Statement of account</td><td>Statement date</td><td>Every open invoice number with its balance</td></tr>
<tr><td>Remittance advice (from the client)</td><td>Client's payment run ID</td><td>Each invoice number included in the payment</td></tr>
</tbody></table>
<p>Avoid reusing the original number for a corrected invoice by adding a letter unless your accountant is comfortable with it; the cleaner route is a credit note plus a new number. Our guide on <a href="/blog/credit-note-guide">credit notes</a> walks through the process.</p>

<h2>How suppliers match payments to invoice references</h2>
<ol>
<li><strong>Read the bank reference first.</strong> If it contains an invoice number, mark that invoice as paid or part paid.</li>
<li><strong>Check the remittance advice</strong> when one payment covers several invoices.</li>
<li><strong>Fall back to amount and payer name</strong> only when no reference is given, and confirm with the client if two invoices have the same amount.</li>
<li><strong>Record the bank transaction ID</strong> against the invoice so you can prove the payment later.</li>
<li><strong>Chase unmatched payments quickly.</strong> An unidentified payment in your bank account is money you cannot allocate.</li>
</ol>
<p>Clear references make this a two-minute job rather than an afternoon of detective work, and they are one of the cheapest ways to keep your receivables records accurate.</p>

<h2>Worked example: one invoice, four references</h2>
<p>A consultancy bills a manufacturer for October advisory work:</p>
<ul>
<li><strong>Invoice number:</strong> INV-2026-0142 (the consultancy's own unique number).</li>
<li><strong>PO number:</strong> PO-778213 (from the client's procurement system).</li>
<li><strong>Customer reference:</strong> Plant 3 efficiency review.</li>
<li><strong>Payment reference:</strong> INV0142 (7 characters, fits any bank's reference field).</li>
</ul>
<p>The invoice totals 18 hours at $150 = $2,700, plus $216 sales tax at an illustrative 8% rate ($2,700 × 0.08 = $216), for a total of $2,916. When $2,916 arrives with reference "INV0142", the consultancy matches it in seconds. Without the reference, it would have to search by amount and client name.</p>

<h2>Common mistakes with invoice reference numbers</h2>
<ul>
<li>Reusing an invoice number, or restarting a sequence mid-year without a prefix change.</li>
<li>Putting the client's PO number in the invoice number field.</li>
<li>Payment references too long for the bank field.</li>
<li>Typing a made-up "IRN" or "UUID" on a PDF to look compliant. A real one comes only from the official system.</li>
<li>Not quoting the original invoice number on a credit note.</li>
</ul>

<h2>Invoice reference number checklist</h2>
<ol>
<li>Unique invoice number from a consistent sequence.</li>
<li>Customer PO or job reference in its own labelled field.</li>
<li>Short payment reference shown next to the bank details.</li>
<li>Original invoice number quoted on any credit note or reissue.</li>
<li>Government-issued IRN or UUID only if your e-invoicing system provides it.</li>
</ol>

<h2>Next step: number your next invoice correctly</h2>
<p>Generate a format with the <a href="/tools/invoice-number-generator">invoice number generator</a>, then open the <a href="/invoice-generator">invoice generator</a>, enter the number, add the client's PO and your payment reference in the notes, and download the PDF. If you are subject to mandatory e-invoicing, use the government-approved system for the IRN or UUID and keep the generator for quotes, drafts and non-mandated invoices.</p>
`,
  },
  {
    slug: "prorated-invoice",
    title: "Prorated Invoice: How to Calculate Pro Rata Charges",
    description:
      "How to make a prorated invoice: pro rata calculation methods for rent, subscriptions and retainers, daily rate formulas, worked examples and common mistakes.",
    category: "invoicing-basics",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: [
      "usage-based-billing-invoice",
      "recurring-invoices-guide",
      "rent-invoice-template",
      "retainer-invoice",
    ],
    faqs: [
      {
        q: "What does prorated mean on an invoice?",
        a: "Prorated means the charge has been scaled to cover only part of a normal billing period. If a monthly service starts halfway through the month, a prorated invoice bills roughly half the monthly price. The invoice should show the period covered and how the amount was calculated.",
      },
      {
        q: "Do I count the start day and the end day when prorating?",
        a: "Usually you count both, because the customer has the service on the day it starts and on the last day of the period. For a period from 18 June to 30 June that gives 13 days. State in your contract whether days are counted inclusively so customers can check your figure.",
      },
      {
        q: "Should I round prorated amounts up or down?",
        a: "Calculate with full precision and round only the final amount to the nearest cent or penny. Rounding the daily rate first can shift the total by several units on longer periods. Whatever you choose, apply it consistently and follow any rounding rule in your contract.",
      },
      {
        q: "How do I prorate a refund when a customer cancels?",
        a: "Work out the unused days in the period they already paid for, multiply by the daily rate and issue a credit note or refund for that amount, if your terms allow refunds. Some businesses do not refund partial periods at all, so state your cancellation policy clearly in the contract.",
      },
      {
        q: "Is prorated rent required by law?",
        a: "It depends on the jurisdiction and the lease. Many leases set out how partial months are charged, and some local rules affect how rent is calculated when a tenancy starts or ends mid-month. Check the lease and local landlord-tenant rules before deciding which method to use.",
      },
      {
        q: "Should I bill a prorated amount in advance or in arrears?",
        a: "Follow the same timing as the normal charge. If you bill monthly in advance, invoice the prorated part period when the service starts, often together with the next full month. If you bill in arrears, include the partial period on the first regular invoice. Showing both lines on one invoice reduces admin and makes the calculation easy for the customer to check.",
      },
      {
        q: "How do I prorate with the annual method in a leap year?",
        a: "Decide whether your contract uses 365 days every year or the actual days in the year. In a leap year the actual-days version divides by 366, which gives a slightly lower daily rate. Either approach is fine if it is written down and applied consistently. Mixing them between customers or years is what causes disputes over small differences.",
      },
      {
        q: "Can I charge a full month instead of prorating?",
        a: "Yes, if your contract or terms say so. Many subscriptions and memberships charge the full period regardless of start date, or start the first billing period on the sign-up day so no proration is needed. What you cannot do is charge a full month when the agreement promised proration. Consumer protection rules may also apply, so state your policy clearly before the customer signs.",
      },
      {
        q: "How do I prorate a price increase that starts mid-month?",
        a: "Split the month at the effective date. Bill the days before the change at the old daily rate and the days from the change at the new daily rate, then add the two amounts. Show them as two lines with dates, such as 1 to 14 March at the old price and 15 to 31 March at the new price, so the customer can see exactly when the increase applied.",
      },
      {
        q: "How do I prorate an annual or quarterly fee for a partial period?",
        a: "Use the same formula with a longer period. Divide the annual fee by 365, or the quarterly fee by the days in that quarter, then multiply by the days used. Some contracts prorate annual fees by whole months instead, dividing by 12. Whichever method you use, state the period, the basis and the full fee on the invoice line.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A prorated invoice charges only for the part of a billing period actually used. To calculate it, find the daily rate (the period price divided by the days in that period) and multiply it by the days used. For example, $1,500 monthly rent for 13 days of a 30-day month is $1,500 ÷ 30 × 13 = $650.</p>

<p>Proration comes up whenever a recurring charge does not line up neatly with your billing cycle: a tenant moving in mid-month, a client upgrading a subscription, a retainer starting on the 15th or a contract ending early. The maths is simple, but the method you choose changes the answer, so it is worth agreeing it up front. Once you have the figure, our <a href="/invoice-generator">free invoice generator</a> lets you show the full price, the period covered and the prorated amount on one line.</p>

<h2>What does prorated mean?</h2>
<p>Prorated comes from the Latin <em>pro rata</em>, "in proportion". A prorated charge is the normal price scaled down in proportion to the time used. You will see it written as prorated, pro-rated, pro rata or pro-rata; they all mean the same thing. Proration can also run in reverse, as a prorated credit when a customer leaves part-way through a period they have paid for.</p>

<h2>When to use a prorated invoice</h2>
<ul>
<li><strong>Rent:</strong> a tenancy that starts or ends mid-month. See our <a href="/blog/rent-invoice-template">rent invoice template</a> guide.</li>
<li><strong>Subscriptions and SaaS:</strong> a customer joins mid-cycle, upgrades, downgrades or adds seats.</li>
<li><strong>Retainers:</strong> a monthly retainer that starts or ends part-way through the month. See <a href="/blog/retainer-invoice">retainer invoices</a>.</li>
<li><strong>Memberships and services:</strong> gyms, cleaning contracts, managed IT or equipment rental.</li>
<li><strong>Aligning billing dates:</strong> moving a client from billing on the 18th to billing on the 1st.</li>
</ul>

<h2>Pro rata calculation: the basic formula</h2>
<p><strong>Prorated amount = (period price ÷ units in the period) × units used</strong></p>
<p>The "units" are usually days, but can be working days, hours or months. The choice of how many days are "in the period" is where methods differ.</p>

<h2>Three ways to calculate a daily rate</h2>
<table><thead><tr><th>Method</th><th>Daily rate formula</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Actual days in the month</td><td>Monthly price ÷ 28, 29, 30 or 31</td><td>Exact for that month; most common</td><td>Daily rate changes month to month</td></tr>
<tr><td>Annual (365-day) method</td><td>Monthly price × 12 ÷ 365</td><td>Same daily rate all year</td><td>Slightly different from actual-days total</td></tr>
<tr><td>Banker's month (30 days)</td><td>Monthly price ÷ 30</td><td>Simple, predictable</td><td>Over- or under-charges in 31-day months and February</td></tr>
<tr><td>Working days</td><td>Monthly price ÷ working days in month</td><td>Fair for weekday-only services and retainers</td><td>Needs a holiday calendar</td></tr>
</tbody></table>
<p>None of these is "right" in general. Pick one, write it into the contract or lease, and use it every time.</p>

<h3>Daily rate by month length: $1,000 monthly price</h3>
<table><thead><tr><th>Month length</th><th>Actual-days daily rate</th><th>Annual-method daily rate</th></tr></thead><tbody>
<tr><td>28 days (February)</td><td>$1,000 ÷ 28 = $35.71</td><td>$1,000 × 12 ÷ 365 = $32.88</td></tr>
<tr><td>29 days (February, leap year)</td><td>$1,000 ÷ 29 = $34.48</td><td>$32.88</td></tr>
<tr><td>30 days</td><td>$1,000 ÷ 30 = $33.33</td><td>$32.88</td></tr>
<tr><td>31 days</td><td>$1,000 ÷ 31 = $32.26</td><td>$32.88</td></tr>
</tbody></table>
<p>The table shows why a customer who starts in February pays noticeably more per day under the actual-days method than one who starts in March. Neither is wrong; it is a consequence of months having different lengths.</p>

<h2>Prorated rent example</h2>
<p>A tenant moves in on 18 June. Rent is $1,500 per month. June has 30 days, and counting 18 June to 30 June inclusive gives 13 days.</p>
<ul>
<li><strong>Actual days:</strong> $1,500 ÷ 30 = $50.00 per day. $50.00 × 13 = <strong>$650.00</strong>.</li>
<li><strong>Annual method:</strong> $1,500 × 12 = $18,000 per year; $18,000 ÷ 365 = $49.315 per day; $49.315 × 13 = <strong>$641.10</strong>.</li>
</ul>
<p>The $8.90 difference is why the method should be in the lease. The invoice line might read: "Rent, 18 June to 30 June 2026 (13 of 30 days at $1,500/month), $650.00", followed by a second line for July's full rent if you bill them together.</p>

<h2>Prorated subscription example: mid-cycle upgrade</h2>
<p>A customer on a $30 per month plan upgrades to a $60 plan on day 11 of a 30-day billing cycle, leaving 20 days.</p>
<ol>
<li><strong>Credit for unused time on the old plan:</strong> $30 ÷ 30 × 20 = $20.00.</li>
<li><strong>Charge for remaining time on the new plan:</strong> $60 ÷ 30 × 20 = $40.00.</li>
<li><strong>Net prorated charge:</strong> $40.00 − $20.00 = <strong>$20.00</strong>.</li>
</ol>
<p>Show both lines on the invoice rather than just the net figure, so the customer can see the credit and the new charge. From the next cycle they pay the full $60. For a downgrade, the same calculation produces a net credit, which you would carry forward or document with a <a href="/blog/credit-note-guide">credit note</a>.</p>

<h2>Prorated retainer example using working days</h2>
<p>A consultant's retainer is $4,000 per month for weekday availability. The client signs part-way through a month with 22 working days, and 12 working days remain.</p>
<p>$4,000 ÷ 22 = $181.818 per working day; $181.818 × 12 = <strong>$2,181.82</strong> after rounding to the cent. Keep full precision until the final step: rounding the daily rate to $181.82 first would give $2,181.84.</p>

<h2>Prorating annual contracts and cancellations</h2>
<p>Proration works the same way for longer periods. Suppose a client pays $2,400 up front for a 12-month maintenance plan and cancels after 4 full months, and your terms allow a refund for unused whole months.</p>
<ul>
<li>Monthly value: $2,400 ÷ 12 = $200.</li>
<li>Unused months: 12 − 4 = 8.</li>
<li>Prorated refund: $200 × 8 = <strong>$1,600</strong>.</li>
</ul>
<p>Document the refund with a credit note that quotes the original invoice number, rather than editing the original invoice. If your terms include a cancellation fee, show it as a separate line so the client sees the full calculation. If you do not refund partial periods, say so clearly in the contract and on the original invoice.</p>
<p>Proration also helps when you move a client to a new billing date. If a client signs on the 18th but you bill everyone on the 1st, issue one prorated invoice for the 18th to the end of the month, then full invoices from the 1st. Keeping every client on the same cycle makes <a href="/blog/recurring-invoices-guide">recurring invoices</a> and cash flow planning simpler.</p>

<h2>How to show a prorated charge on an invoice</h2>
<ul>
<li><strong>Period covered</strong>, with start and end dates.</li>
<li><strong>Full period price</strong> for reference.</li>
<li><strong>Calculation basis</strong>, such as "13 of 30 days" or "12 of 22 working days".</li>
<li><strong>Prorated amount</strong> as the line total.</li>
<li><strong>Tax</strong> on the prorated amount, not the full price. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> works on any amount.</li>
</ul>
<p>A clear line removes the most common question customers ask about a prorated invoice: "why is this not the usual amount?"</p>

<h3>Prorating hourly or daily work</h3>
<p>If you already bill by the hour or day, you rarely need proration: you simply bill the hours worked. Proration is for fixed-price recurring charges. When a client asks to convert a fixed fee into a partial month, it can be cleaner to bill actual time instead; see <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a>.</p>

<h3>Prorated vs pro rata: other places you will see the terms</h3>
<p>The same arithmetic appears well beyond invoices, which is useful when a client asks you to explain your figure:</p>
<ul>
<li><strong>Prorated salary:</strong> employers scale an annual salary to a part-time schedule or a partial first month. The logic is identical to a prorated retainer.</li>
<li><strong>Prorated rent deposits and service charges:</strong> landlords and property managers apportion charges between outgoing and incoming tenants.</li>
<li><strong>Insurance premiums:</strong> a policy cancelled mid-term may be refunded pro rata, sometimes less a fee.</li>
<li><strong>Shared costs:</strong> a utility bill split between two periods, or between two clients who shared a resource, is apportioned pro rata by days or usage.</li>
</ul>
<p>Whatever the context, the questions are the same: what is the full-period price, how is the period measured, and how many units were actually used? Write those three answers on the invoice and most queries disappear before they are asked.</p>

<h2>Common proration mistakes</h2>
<ul>
<li>Not agreeing the method, then arguing over a few dollars.</li>
<li>Forgetting to count the start or end day.</li>
<li>Using 30 days for every month without telling the customer.</li>
<li>Rounding the daily rate before multiplying.</li>
<li>Applying tax to the full monthly price rather than the prorated amount.</li>
<li>Showing only a net figure for upgrades, which hides the credit.</li>
</ul>

<h2>Prorated invoice checklist</h2>
<ol>
<li>Proration method written into the contract or lease.</li>
<li>Days or working days counted inclusively and checked against a calendar.</li>
<li>Daily rate kept at full precision; final amount rounded once.</li>
<li>Period, basis and full price shown on the invoice line.</li>
<li>Tax calculated on the prorated amount.</li>
<li>Next full-period invoice scheduled on the new cycle date.</li>
</ol>

<h2>Next step: create your prorated invoice</h2>
<p>Work out the amount with the formula above, then open the <a href="/invoice-generator">invoice generator</a>, add a line describing the period and calculation basis, and enter the prorated total as the rate with a quantity of 1. Download the PDF and set a reminder for the first full-period invoice; a monthly reminder or recurring workflow keeps that schedule on track.</p>
`,
  },
  {
    slug: "foreign-currency-invoice",
    title: "Foreign Currency Invoice: Which Currency to Bill In",
    description:
      "How to issue a foreign currency invoice: choosing USD or local currency, showing the exchange rate, UK and EU rules for VAT in foreign currency, and FX gains.",
    category: "invoicing-basics",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: [
      "cross-border-payment-fees",
      "invoice-international-clients",
      "wise-vs-payoneer",
      "bank-details-on-invoice",
    ],
    faqs: [
      {
        q: "Can I legally invoice in a currency that is not my own?",
        a: "In most countries, yes. You can usually agree any currency with your client. Where VAT or GST applies, many tax systems still require the tax amount, and sometimes other figures, to be shown or reported in the national currency, so check the rules in the country where the supply is taxed.",
      },
      {
        q: "Which exchange rate should I use for my accounts?",
        a: "Use the rate your tax authority accepts for the purpose. For income tax in the US, the IRS generally expects amounts converted to US dollars at the rate prevailing when you receive the income, and publishes yearly average rates. For UK VAT, HMRC allows the market selling rate at the time of supply or its published period rates.",
      },
      {
        q: "Should I show both currencies on the invoice?",
        a: "Showing the converted amount as a note is helpful and sometimes required for tax. Make clear which currency is the amount due, for example 'Amount due: USD 2,400.00. GBP equivalent shown for VAT purposes only.' Otherwise the client may try to pay the converted figure at a different rate.",
      },
      {
        q: "Who pays the currency conversion fees?",
        a: "Whoever converts usually bears the cost unless your contract says otherwise. If you invoice in your client's currency, you take the conversion cost when the money reaches your account. You can state that bank and transfer charges are for the payer's account, but intermediary fees are not always predictable.",
      },
      {
        q: "Can I change the invoice currency after sending it?",
        a: "Do not edit an issued invoice. If the client asks to pay in a different currency, either agree to accept payment in that currency against the original invoice at a stated rate, or cancel the original with a credit note and issue a new invoice in the new currency.",
      },
      {
        q: "Does invoicing in a foreign currency change whether I charge VAT or sales tax?",
        a: "No. The currency you bill in does not decide the tax treatment. Whether you charge VAT, GST or sales tax depends on where the supply is taxed, who the customer is and whether you are registered. A UK supply billed in USD can still need UK VAT, while an export service billed in GBP may be outside the scope. Check your tax authority's place-of-supply rules.",
      },
      {
        q: "How can I receive payment in a currency my bank account does not hold?",
        a: "Options include a multi-currency account with local receiving details in the client's currency, a payment platform, or letting your bank convert the payment when it arrives. Each has different exchange spreads and fees, so compare them before you choose. Whatever you use, put the correct receiving details for that currency on the invoice so the client's bank does not convert the payment unexpectedly.",
      },
      {
        q: "What is the difference between a realized and an unrealized exchange gain?",
        a: "A realized gain or loss happens when the client actually pays and the money you receive differs from the amount you recorded at invoice. An unrealized gain or loss is an estimate at a reporting date, such as year end, for invoices that are still unpaid. Tax treatment of each varies by country, so ask your accountant how to record them.",
      },
      {
        q: "What if the client pays in the wrong currency?",
        a: "Your bank will usually convert the payment, and the amount you receive may not match the invoice. Compare the converted amount with the balance due. If it is short, tell the client and ask for the difference, quoting the invoice. If you agree to accept the shortfall, close the gap with a credit note rather than editing the invoice, and record the exchange rate used.",
      },
      {
        q: "Can I add a fee to cover currency conversion costs?",
        a: "You can build conversion costs into your price or agree a separate charge in your contract, as long as the client knows in advance. Surprise surcharges added only on the invoice are hard to enforce. Some countries restrict certain payment surcharges, particularly card fees for consumers, so check local rules. A clear clause stating who pays bank and transfer charges usually works better.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A foreign currency invoice is an invoice priced in a currency other than your own, such as a UK freelancer billing in USD. Choose the currency in the contract, write the ISO code next to every amount, state the amount due in one currency only, and, where VAT applies, show the VAT in the local currency using an accepted exchange rate.</p>

<p>Billing in another currency can win you clients who want predictable costs, but it moves currency risk and conversion fees onto your side of the table. It also brings tax rules that many freelancers miss, especially for VAT. This guide covers which currency to bill in, how to show exchange rates, the UK and EU rules on VAT in foreign currency, and how to account for exchange gains and losses. For the broader topic of tax, contracts and payments across borders, see our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a>.</p>

<h2>What is a foreign currency invoice?</h2>
<p>A foreign currency invoice is any invoice where the amount due is stated in a currency other than the currency you keep your books in. A US agency invoicing a German client in euros, a Pakistani developer billing an American company in USD and a UK consultant billing a Dubai client in dirhams all issue foreign currency invoices. The invoice is otherwise identical to a domestic one; the differences are in the currency labels, the exchange rate notes and how you record it.</p>

<h2>Which currency should you invoice in?</h2>
<table><thead><tr><th>Option</th><th>Who carries the exchange risk</th><th>Best when</th></tr></thead><tbody>
<tr><td>Your own currency</td><td>The client</td><td>You have pricing power, or your costs are all in your currency</td></tr>
<tr><td>Client's currency</td><td>You</td><td>The client insists, or you want to look local and remove friction</td></tr>
<tr><td>A major third currency (often USD or EUR)</td><td>Shared, depending on both local currencies</td><td>Neither local currency is convenient, or your platform pays out in USD</td></tr>
</tbody></table>
<p>Consider three things before you decide. <strong>Volatility:</strong> if your currency and the client's move a lot against each other, the side that bears the risk can gain or lose several percent between invoice and payment. <strong>Fees:</strong> who converts pays the spread, so compare providers in our <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> guide. <strong>Expectations:</strong> large companies often have systems set up for their home currency and may pay faster if you invoice in it.</p>

<h3>Invoice in USD: why many freelancers do</h3>
<p>The US dollar is widely used for cross-border services, and many freelancers outside the US price in USD because international clients expect it and payment platforms support it. If you are in Pakistan, see <a href="/blog/receive-payment-from-abroad-pakistan">how to receive payment from abroad in Pakistan</a> for the options that work with USD invoices. Whichever currency you choose, write it into your contract so there is no debate when the invoice arrives.</p>

<h2>How to show currency and exchange rate on an invoice</h2>
<ul>
<li><strong>Use ISO 4217 codes</strong> such as USD, EUR, GBP, AED, CAD or PKR. The "$" symbol alone is ambiguous between US, Canadian, Australian and other dollars.</li>
<li><strong>State one amount due.</strong> "Amount due: USD 2,400.00" is clear. Two equal-looking totals in different currencies are not.</li>
<li><strong>Add the conversion as a note when needed</strong>: "GBP equivalent at 1 GBP = 1.27 USD (HMRC period rate for October 2026): £1,889.76. For information only."</li>
<li><strong>Give bank details for the right currency.</strong> A USD invoice should point to an account that can receive USD, or the client's bank may convert it en route. See <a href="/blog/bank-details-on-invoice">bank details on an invoice</a>.</li>
<li><strong>Say who pays charges</strong>, for example "All bank and transfer charges are for the payer's account".</li>
</ul>

<h2>VAT in foreign currency: UK rules</h2>
<p>HMRC's VAT Notice 700 says you may issue VAT invoices in any currency, but the total VAT chargeable must be expressed in sterling. If you issue VAT invoices in a foreign currency for supplies that take place in the UK, you must convert the total VAT into pounds. You can convert using:</p>
<ul>
<li>the UK market selling rate at the time of supply (published rates, such as those in a newspaper, can be evidence); or</li>
<li>HMRC's published period rates, which you can adopt without telling HMRC, but you cannot switch away later without agreement from HMRC's VAT Written Enquiries Team; or</li>
<li>another commercial rate you use, only if you apply in writing and HMRC agrees.</li>
</ul>
<p>Whichever rate you use, it must be the rate in force at the time of supply. HMRC publishes its rates on the <a href="https://www.gov.uk/government/collections/exchange-rates-for-customs-and-vat" target="_blank" rel="noopener noreferrer">exchange rates for customs and VAT</a> page. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> lists the other fields a UK VAT invoice needs.</p>

<h3>Worked example: UK VAT invoice priced in USD</h3>
<p>A UK VAT-registered designer bills a UK client USD 2,000 plus VAT at 20%. Using an illustrative rate of 1 GBP = 1.27 USD:</p>
<table><thead><tr><th>Line</th><th>USD</th><th>GBP (VAT purposes)</th></tr></thead><tbody>
<tr><td>Design services</td><td>2,000.00</td><td>1,574.80</td></tr>
<tr><td>VAT at 20%</td><td>400.00</td><td><strong>314.96</strong></td></tr>
<tr><td>Total</td><td>2,400.00</td><td>1,889.76</td></tr>
</tbody></table>
<p>The arithmetic: $2,000 × 20% = $400; $400 ÷ 1.27 = £314.96; $2,000 ÷ 1.27 = £1,574.80; $2,400 ÷ 1.27 = £1,889.76. The invoice states the amount due as USD 2,400.00 and shows "VAT: £314.96" in sterling, with the rate used. Both businesses use £314.96 on their VAT returns, whatever rate the bank applies when the dollars arrive.</p>

<h2>VAT in foreign currency: EU rules</h2>
<p>Under Article 230 of the EU VAT Directive (2006/112/EC), the amounts on an invoice may be expressed in any currency, provided the VAT payable is expressed in the national currency of the member state where the VAT is due. Conversion follows Article 91: generally the latest selling rate on the most representative exchange market of that state or the latest rate published by the European Central Bank, depending on the option the member state allows. Check the national rule; some countries prescribe the rate and date to use. For cross-border B2B services where the customer accounts for VAT, see our <a href="/blog/reverse-charge-invoice">reverse charge invoice</a> guide.</p>

<h2>Foreign currency and income tax: the US example</h2>
<p>The US has no federal VAT, but income must be reported in US dollars. The IRS generally expects foreign currency amounts translated at the exchange rate prevailing when you receive, pay or accrue the item, and it publishes <a href="https://www.irs.gov/individuals/international-taxpayers/yearly-average-currency-exchange-rates" target="_blank" rel="noopener noreferrer">yearly average currency exchange rates</a> that may be used in some situations. Other countries have similar rules for income tax, so keep a record of the rate you used for each invoice and payment.</p>

<h2>Exchange gains and losses: worked example</h2>
<p>A US consultant using accrual accounting invoices EUR 5,000 when 1 EUR = 1.08 USD, so books $5,400 of revenue and receivable. The client pays 30 days later when 1 EUR = 1.05 USD, and $5,250 arrives.</p>
<ul>
<li>Revenue stays at $5,400.</li>
<li>The receivable of $5,400 is cleared by $5,250 cash.</li>
<li>The $150 difference ($5,400 − $5,250) is recorded as a foreign exchange loss.</li>
</ul>
<p>If the euro had strengthened instead, you would record a gain. Under cash accounting you generally record the dollars actually received. See <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> for the difference, and ask your accountant how your country treats realized and unrealized FX gains.</p>

<h2>How to reduce exchange rate risk on a foreign currency invoice</h2>
<ul>
<li><strong>Build a buffer into your price.</strong> If you carry the risk, quote a little above your break-even rate rather than at today's exact conversion.</li>
<li><strong>Shorten payment terms.</strong> The fewer days between invoice and payment, the less the rate can move. Net 14 carries less currency risk than Net 60.</li>
<li><strong>Use a multi-currency account.</strong> Holding the foreign currency and converting when it suits you can cost less than converting every payment on arrival.</li>
<li><strong>Add a review clause to long contracts</strong>, for example repricing if the rate moves more than an agreed percentage in a quarter.</li>
<li><strong>Match currencies where possible.</strong> If some of your costs are in USD, earning USD offsets part of the risk naturally.</li>
</ul>
<p>None of these removes currency risk entirely, but together they stop one bad month for the exchange rate from wiping out your margin on a project.</p>

<h2>Multi currency invoice: should one invoice mix currencies?</h2>
<p>Avoid it. Put every line on an invoice in the same currency, and if you pass through costs incurred in another currency, convert them and note the rate in the description, for example "Hotel, Berlin, EUR 420 converted at 1.08 = USD 453.60". A single currency keeps the total meaningful and makes the invoice easy to pay and to record. Use separate invoices if the client must pay parts in different currencies.</p>

<h2>Common foreign currency invoice mistakes</h2>
<ul>
<li>Using "$" without a currency code.</li>
<li>Showing two totals and leaving the client to pick one.</li>
<li>Leaving the UK or EU VAT amount in the foreign currency only.</li>
<li>Not recording the exchange rate used for tax.</li>
<li>Sending local bank details for a foreign currency payment, triggering an unexpected conversion.</li>
<li>Editing the currency on an issued invoice instead of using a credit note.</li>
</ul>

<h2>Foreign currency invoice checklist</h2>
<ol>
<li>Currency agreed in the contract.</li>
<li>ISO code on every amount and one clear amount due.</li>
<li>VAT or GST converted to the local currency where required, with the rate stated.</li>
<li>Bank details that accept the invoice currency.</li>
<li>Charges clause stating who pays transfer fees.</li>
<li>Exchange rate recorded at invoice and at payment.</li>
</ol>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Currency rules differ by country and change over time; confirm with the official guidance, such as HMRC's <a href="https://www.gov.uk/guidance/vat-guide-notice-700" target="_blank" rel="noopener noreferrer">VAT Notice 700</a> or your national tax authority, and with an accountant.</p>

<h2>Next step: create an invoice in another currency</h2>
<p>Open the <a href="/invoice-generator">invoice generator</a> and pick the invoice currency from the list (USD, EUR, GBP, INR, AUD, CAD, AED and PKR are available). Each invoice uses one currency. Add any VAT conversion note and the exchange rate in the notes, include bank details for that currency, and download the PDF.</p>
`,
  },
];
