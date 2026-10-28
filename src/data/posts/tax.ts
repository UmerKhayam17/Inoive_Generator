import type { PostDraft } from "../blog";

export const TAX_POSTS: PostDraft[] = [
  // 55
  {
    slug: "sales-tax-on-invoices-us",
    title: "Sales Tax on Invoices (US): How to Charge and Show It in 2026",
    description:
      "How sales tax on invoices works in the US: when to charge it, how to calculate and display it, exemption certificates and a worked example with correct maths.",
    category: "tax-compliance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "sales-tax-exemption-certificate",
      "sales-tax-nexus",
      "tax-id-on-invoice",
      "tax-invoice-guide",
      "itemized-invoice",
    ],
    faqs: [
      {
        q: "Do I have to show sales tax separately on an invoice?",
        a: "Showing sales tax as its own line is the standard practice and many states require tax to be separately stated so the buyer can see what was collected. It also makes your sales tax return far easier to reconcile, so list the taxable subtotal, rate and tax amount separately.",
      },
      {
        q: "Do I charge sales tax on services?",
        a: "It depends on the state and the service. Many states tax tangible goods but only some services, while a few tax a broad range of services. Check the taxability rules in each state where you have nexus before adding tax to a service invoice.",
      },
      {
        q: "Do I charge sales tax to out-of-state customers?",
        a: "Only if you have nexus in the customer's state, which can come from physical presence or from exceeding that state's economic nexus threshold. If you have no nexus there, you generally do not collect that state's tax, although the buyer may owe use tax.",
      },
      {
        q: "What happens if a customer gives me a resale or exemption certificate?",
        a: "If the certificate is valid and complete, you generally do not charge sales tax on the qualifying sale. Keep a copy on file and note the exemption on the invoice, because you may need to prove why tax was not collected in an audit.",
      },
      {
        q: "Is shipping subject to sales tax?",
        a: "Shipping and delivery charges are taxable in some states and not in others, and the answer can change depending on whether the charge is separately stated. List shipping on its own line and check the rules for the state where the sale is sourced.",
      },
      {
        q: "What is use tax and who pays it?",
        a: "Use tax is the companion to sales tax. It applies when you buy taxable items for use in a state without paying that state's sales tax, for example from an out-of-state seller who had no obligation to collect it. The buyer then generally owes use tax directly to their state, usually at the same rate. Businesses typically report it on their sales and use tax return.",
      },
      {
        q: "What should I do if I forgot to charge sales tax on an invoice?",
        a: "You may still owe the tax to the state even though you didn't collect it. Options include issuing a separate invoice for the tax, if your agreement allows it, or paying the tax yourself and adjusting future pricing. Don't edit the original invoice; use a corrected document that references it. Check your state's guidance or ask a tax adviser, especially if several invoices are affected.",
      },
      {
        q: "Can I include sales tax in my prices instead of adding it on top?",
        a: "Some states allow tax-included pricing in certain situations, often with a requirement to state that tax is included, while others expect tax to be separately stated. Adding tax as its own line is the safest and most common US practice, and it makes returns easier to reconcile. If you want to advertise tax-inclusive prices, check your state's rules first.",
      },
      {
        q: "Do I charge sales tax on software, SaaS or digital products?",
        a: "It depends on the state. Some states tax SaaS, digital downloads or streaming, others exempt them, and some tax only certain types or treat business and personal use differently. These rules have changed often in recent years. Check each state where you have nexus, and use separate line items on your invoice so taxable and non-taxable parts are clear.",
      },
      {
        q: "How often do I need to file sales tax returns?",
        a: "Your state assigns a filing frequency, usually monthly, quarterly or annually, based mainly on how much tax you collect, with higher-volume sellers filing more often. You generally must file a return for each period even if you made no taxable sales, and late filing can bring penalties. Check the filing schedule in your state account and set reminders for each due date.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Sales tax on invoices in the US is charged by the seller at the combined state and local rate that applies to the sale, but only in states where you have nexus and only on items or services that state taxes. Show the taxable subtotal, the tax rate and the sales tax amount as separate lines, then add them to reach the total due. There is no federal sales tax, so the rules depend on each state you sell into.</p>

<p>This guide explains when you need to charge sales tax, how to calculate it line by line, how to handle exempt customers, and what a clean sales tax section looks like on a US invoice. You can apply everything here in our <a href="/invoice-generator">free invoice generator</a>, which lets you set a tax rate and shows the tax as its own line.</p>

<p><strong>Important:</strong> This article is general information, not tax advice. Sales tax rates, thresholds and taxability rules are set by each state and many local jurisdictions, and they change regularly. Confirm your obligations with your state department of revenue or a qualified tax professional before relying on any format or rate.</p>

<h2>How sales tax works in the US</h2>
<p>US sales tax is a consumption tax imposed at the state and local level. Most states levy a statewide rate, and many allow counties, cities and special districts to add their own rates on top. Five states have no statewide sales tax: Alaska, Delaware, Montana, New Hampshire and Oregon. Even so, some Alaska localities levy their own local sales taxes, so "no state tax" does not always mean "no tax".</p>
<p>The seller collects sales tax from the buyer at the point of sale and later remits it to the state on a sales tax return. That makes you a collection agent: the money on the tax line of your invoice is not your revenue. Keep it out of your operating budget so you have it ready when the return is due.</p>
<p>Sales tax is different from VAT or GST. There is no input-tax credit chain for ordinary buyers, and business buyers typically avoid tax on goods they resell by giving you a resale certificate rather than reclaiming tax afterwards. If you also bill overseas customers, our <a href="/blog/tax-invoice-guide">tax invoice guide</a> covers how VAT-style tax invoices differ.</p>

<h2>When you must charge sales tax on an invoice</h2>
<p>Three questions decide whether a sales tax line belongs on an invoice:</p>
<ol>
<li><strong>Do you have nexus in the state?</strong> Nexus is the connection that obliges you to collect a state's tax. Physical presence (an office, employees, inventory) creates nexus. Since the 2018 <em>South Dakota v. Wayfair</em> Supreme Court decision, states can also impose economic nexus once your sales into the state pass a threshold. Many states use $100,000 in annual sales, and some also use or used a transaction count, but thresholds differ and some have been revised, so check each state's current rule.</li>
<li><strong>Are you registered?</strong> Once you have nexus, you generally need a sales tax permit before you collect tax. Do not add sales tax to invoices if you are not registered in that state.</li>
<li><strong>Is the item taxable?</strong> Most states tax sales of tangible personal property by default. Services, digital products, software and certain essentials such as groceries or clothing are treated very differently from state to state.</li>
</ol>
<p>If you sell through an online marketplace, the marketplace may be responsible for collecting the tax under marketplace facilitator laws, which most states with a sales tax have adopted. Your own direct invoices, however, are still your responsibility.</p>

<h2>Origin-based vs destination-based sourcing</h2>
<p>Sourcing decides which location's rate applies. Most states use destination-based sourcing, meaning you charge the rate where the buyer receives the goods. A smaller number of states use origin-based sourcing for in-state sales, meaning you charge the rate at your business location. Remote sales into a state are usually sourced to the destination.</p>
<table><thead><tr><th>Scenario</th><th>Rate usually applied</th><th>What to show on the invoice</th></tr></thead><tbody>
<tr><td>In-state sale, destination-based state</td><td>Combined rate at the delivery address</td><td>Ship-to address and that combined rate</td></tr>
<tr><td>In-state sale, origin-based state</td><td>Combined rate at your location</td><td>Your location's rate</td></tr>
<tr><td>Sale into another state where you have nexus</td><td>Destination rate for that state</td><td>Ship-to address, destination rate</td></tr>
<tr><td>Sale into a state where you have no nexus</td><td>None collected by you</td><td>No sales tax line; buyer may owe use tax</td></tr>
<tr><td>Buyer provides a valid exemption or resale certificate</td><td>None on qualifying items</td><td>"Exempt" note and certificate reference</td></tr>
</tbody></table>
<p>Because local rates can vary by street address, many businesses look up rates by address rather than by ZIP code alone. Our <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you check the arithmetic once you know the rate.</p>

<h2>How to show sales tax on an invoice</h2>
<p>A clear sales tax section makes the invoice easy to approve and easy to report. Include:</p>
<ul>
<li>Each line item with a description, quantity, unit price and line total, marked as taxable or non-taxable where the treatment differs.</li>
<li>A subtotal, then a separate <strong>taxable amount</strong> if some lines are not taxed.</li>
<li>The sales tax rate, and the jurisdiction if you sell into more than one location (for example "Sales tax 8.25%").</li>
<li>The sales tax amount as its own line, never folded into unit prices.</li>
<li>The total due, including tax.</li>
<li>Your sales tax permit number if your state expects it or your buyers ask for it.</li>
</ul>
<p>Breaking lines out this way is the same discipline behind a good <a href="/blog/itemized-invoice">itemized invoice</a>. It also protects you if a buyer later disputes the amount: you can point to exactly which lines were taxed and at what rate.</p>

<h2>Worked example: mixed taxable and non-taxable lines</h2>
<p>Here is a hypothetical invoice from a business selling and installing shelving in a state where the goods are taxable, separately stated installation labor is not taxable, and separately stated delivery is not taxable. The combined rate is 8.25%. These treatments are illustrative only; your state may treat labor or delivery differently.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th><th>Taxable?</th></tr></thead><tbody>
<tr><td>Steel shelving unit, 72 in.</td><td>4</td><td>$250.00</td><td>$1,000.00</td><td>Yes</td></tr>
<tr><td>Installation labor (hours)</td><td>4</td><td>$75.00</td><td>$300.00</td><td>No</td></tr>
<tr><td>Delivery</td><td>1</td><td>$40.00</td><td>$40.00</td><td>No</td></tr>
</tbody></table>
<ul>
<li>Subtotal: $1,340.00</li>
<li>Taxable amount: $1,000.00</li>
<li>Sales tax (8.25% of $1,000.00): $82.50</li>
<li><strong>Total due: $1,422.50</strong></li>
</ul>
<p>Notice that tax is applied only to the taxable amount, not the full subtotal. Charging 8.25% on all $1,340.00 would have produced $110.55 of tax, overcharging the customer by $28.05. Applying tax to the wrong base is one of the most common <a href="/blog/common-invoice-mistakes">invoice mistakes</a> on US invoices.</p>

<h3>Discounts and sales tax</h3>
<p>In many states, a seller's discount taken at the time of sale reduces the taxable amount, so you calculate tax after the discount. Manufacturer coupons and rebates can be treated differently. Apply discounts before tax unless your state's guidance says otherwise, and show the discount as its own line so the taxable base is visible.</p>

<h2>Exempt customers and resale certificates</h2>
<p>Some buyers do not pay sales tax on certain purchases: resellers buying inventory, qualifying nonprofits, government agencies, and buyers of items that are exempt for a specific use (such as some manufacturing inputs). To skip tax, you generally need a properly completed exemption or resale certificate on file before or at the time of sale.</p>
<ol>
<li>Request the certificate when you set up the customer, not when the first invoice is due.</li>
<li>Check that it is complete, signed and valid for your state and the type of purchase.</li>
<li>Store a copy with the customer record and note the certificate reference on the invoice.</li>
<li>Diary any expiry date and request a renewal in good time.</li>
</ol>
<p>Many states accept multistate forms, but not every state accepts every form. If a certificate turns out to be invalid, the state may hold you responsible for the uncollected tax, so treat certificates as records you must keep. Our guide to <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> covers retention periods for these documents too.</p>
<p>Sales to buyers outside the US, and some international shipments, can also fall outside state sales tax. If you bill foreign customers, read our guide on <a href="/blog/invoice-international-clients">invoicing international clients</a>.</p>

<h2>Correcting sales tax on an invoice you already sent</h2>
<p>If you charged the wrong rate or taxed an exempt item, do not quietly edit and resend the same invoice number. Issue a credit memo that references the original invoice and reverses the incorrect tax, then issue a corrected invoice if needed. Our <a href="/blog/credit-note-guide">credit note guide</a> explains the process. If you collected too much tax from a customer, states often expect it to be refunded to the customer or remitted to the state, so ask your tax adviser how to handle it on your return.</p>
<p>Keep your business identifiers consistent on every corrected document. Our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> explains which numbers US invoices typically show, and when a client asks for your taxpayer details for year-end reporting, see <a href="/blog/w9-and-1099-for-contractors">W-9 vs 1099 for contractors</a>.</p>

<h2>Sales tax on invoices: a final checklist</h2>
<ul>
<li>You have nexus and a sales tax permit in the state whose tax you are charging.</li>
<li>Each line's taxability has been checked for that state.</li>
<li>The rate matches the correct sourcing location (origin or destination).</li>
<li>Tax is calculated on the taxable amount after allowed discounts.</li>
<li>Sales tax is shown as a separate line with the rate.</li>
<li>Exempt sales reference a certificate you hold on file.</li>
<li>The ship-to address is on the invoice when it differs from the billing address.</li>
</ul>

<p>If a customer gives you a tax-inclusive total, our guide to <a href="/blog/reverse-sales-tax-calculation">reverse sales tax calculation</a> shows how to split out the tax.</p>

<h2>Create your US sales tax invoice now</h2>
<p>Open the <a href="/invoice-generator/usa">USA invoice generator</a>, which defaults to USD and US-style tax fields, add your line items, set your sales tax rate and download a clean PDF. A structured layout such as the <a href="/invoice-templates/classic">Classic invoice template</a> keeps taxable lines, the tax rate and the total easy to read, and you can browse every option in our <a href="/invoice-templates">invoice templates</a> gallery. Remember to confirm current rates and rules with your state before you send.</p>
`,
  },
  // 56
  {
    slug: "w9-and-1099-for-contractors",
    title: "W-9 vs 1099: What Contractors and Clients Need to Know (2026)",
    description:
      "W-9 vs 1099 explained: who fills out each form, when a 1099-NEC is required, the 2026 threshold change and how to keep invoices and tax forms in sync.",
    category: "tax-compliance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "w2-vs-1099",
      "how-to-get-an-ein",
      "vendor-onboarding-checklist",
      "independent-contractor-invoice",
      "tax-id-on-invoice",
      "self-employed-tax-deductions",
    ],
    faqs: [
      {
        q: "Who fills out a W-9 and who fills out a 1099?",
        a: "The contractor fills out Form W-9 and gives it to the client. The client (the payer) uses that information to prepare a Form 1099-NEC, which goes to both the contractor and the IRS if reporting is required.",
      },
      {
        q: "Do I send my W-9 to the IRS?",
        a: "No. A W-9 is given to the business that asks for it, and that business keeps it on file. It is never filed with the IRS by the contractor.",
      },
      {
        q: "Is it safe to put my Social Security number on a W-9?",
        a: "A W-9 legitimately asks for your taxpayer identification number, which can be your SSN if you have no EIN. Many freelancers get a free EIN from the IRS so they can share that instead, and you should only send a W-9 through a secure channel to a client you have verified.",
      },
      {
        q: "Do I still owe tax if I don't receive a 1099?",
        a: "Yes. All self-employment income is taxable whether or not a 1099 is issued. Your own invoices and payment records are what you use to report income accurately.",
      },
      {
        q: "What is the 1099-NEC deadline?",
        a: "Form 1099-NEC is generally due to both the recipient and the IRS by January 31 of the year after payment. If January 31 falls on a weekend or holiday, the deadline moves to the next business day.",
      },
      {
        q: "Do I need to issue a 1099-NEC to an LLC?",
        a: "It depends on how the LLC is taxed, which it states on its W-9. A single-member LLC treated as a disregarded entity, or an LLC taxed as a partnership, generally receives a 1099-NEC if you pay it enough for services. An LLC taxed as a C or S corporation is generally exempt, with exceptions such as payments to attorneys. Collect a W-9 to know which applies.",
      },
      {
        q: "What should I do if a contractor won't give me a W-9?",
        a: "Explain that you need it to pay them and to meet IRS reporting rules. If they still don't provide a correct taxpayer identification number, you may be required to apply backup withholding, currently 24%, to reportable payments and pay it to the IRS. Request the W-9 before the first payment so the issue never arises, and keep your requests in writing.",
      },
      {
        q: "Does a W-9 expire?",
        a: "No, a W-9 doesn't have an expiry date. A client can keep using the one on file until something changes, such as your name, business entity, tax classification, address or taxpayer identification number. When anything changes, send an updated W-9 promptly. Some businesses also ask vendors for a fresh form every few years to keep their records current, which is good practice.",
      },
      {
        q: "What should I do if my 1099-NEC shows the wrong amount?",
        a: "Contact the payer first and ask them to file a corrected form with the IRS and send you a copy. Share your invoices and payment records showing when and how much you were actually paid, since differences often come from timing or card payments. Report your correct income on your return and keep the evidence in case the IRS asks about the mismatch.",
      },
      {
        q: "Can I file Form 1099-NEC online for free?",
        a: "Yes. The IRS offers the IRIS Taxpayer Portal, a free online service for filing Forms 1099 by manual entry or CSV upload. You need an IRIS Transmitter Control Code first, and the IRS says the application can take up to 45 days, so apply well before January. Businesses filing 10 or more information returns in total are generally required to file electronically.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the W-9 vs 1099 question, the W-9 comes first: a contractor completes Form W-9 to give a client their legal name, tax classification and taxpayer identification number. The client then uses that information to file Form 1099-NEC with the IRS and send a copy to the contractor if total payments for the year reach the reporting threshold. The W-9 is collected and kept; the 1099 is filed.</p>

<p>This guide covers what each form does, who is responsible for it, when a 1099-NEC is required, how the 2026 threshold change affects reporting, and how to keep your invoices consistent with your tax forms. If you are billing as a contractor, you can create matching invoices in our <a href="/invoice-generator">free invoice generator</a>.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. IRS thresholds, forms and deadlines change, and worker classification depends on your specific facts. Check current IRS instructions or speak with a qualified tax professional before acting.</p>

<h2>W-9 vs 1099 at a glance</h2>
<table><thead><tr><th>&nbsp;</th><th>Form W-9</th><th>Form 1099-NEC</th></tr></thead><tbody>
<tr><td>Full name</td><td>Request for Taxpayer Identification Number and Certification</td><td>Nonemployee Compensation</td></tr>
<tr><td>Completed by</td><td>The contractor (payee)</td><td>The client (payer)</td></tr>
<tr><td>Sent to</td><td>The client only</td><td>The contractor and the IRS</td></tr>
<tr><td>When</td><td>Before the first payment, ideally at onboarding</td><td>After year-end, generally by January 31</td></tr>
<tr><td>Purpose</td><td>Gives the payer the details needed for reporting</td><td>Reports what the payer paid during the year</td></tr>
<tr><td>Filed with IRS?</td><td>No</td><td>Yes</td></tr>
</tbody></table>

<h2>What a W-9 is and what it asks for</h2>
<p>Form W-9 is a one-page IRS form a business uses to collect a payee's tax details. It asks for:</p>
<ul>
<li>Your name as shown on your tax return, and a business or disregarded entity name if different.</li>
<li>Your federal tax classification: individual or sole proprietor, C corporation, S corporation, partnership, trust or estate, or LLC (with its tax classification).</li>
<li>Any exemption codes, which mostly apply to corporations and certain entities.</li>
<li>Your address.</li>
<li>Your taxpayer identification number (TIN): a Social Security number or an Employer Identification Number.</li>
<li>Your signed certification that the TIN is correct and that you are not subject to backup withholding.</li>
</ul>
<p>Many freelancers get an EIN from the IRS, which is free, so they can give clients an EIN instead of their SSN. Whatever you use, the name and TIN on your W-9 should match IRS records, and the name on your invoices should match the W-9. Mismatches can trigger IRS notices for the payer. Our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> explains which identifier belongs where.</p>
<p>If a payee does not provide a correct TIN, the payer may have to apply backup withholding, currently 24%, to payments. That is a strong incentive for clients to insist on a W-9 before they pay, and for contractors to send one promptly.</p>

<h3>Foreign contractors use a different form</h3>
<p>A W-9 is for US persons. Non-US contractors are generally asked for a Form W-8BEN (individuals) or W-8BEN-E (entities) instead, and payments to them are not reported on a 1099-NEC. If you work across borders, see our guide on <a href="/blog/invoice-international-clients">invoicing international clients</a>.</p>

<h2>What a 1099-NEC is and when it is required</h2>
<p>Form 1099-NEC reports nonemployee compensation: payments a business makes, in the course of its trade or business, to someone who is not its employee for services. A client generally files one for each contractor it paid at or above the reporting threshold during the calendar year.</p>
<p><strong>The threshold changed for 2026.</strong> For payments made in 2025 and earlier, the 1099-NEC threshold was $600. Federal legislation enacted in July 2025 raised it to $2,000 for payments made after December 31, 2025, with inflation adjustments scheduled for later years. That means many 2026 contractor relationships below $2,000 will no longer produce a 1099-NEC. Confirm the current figure in the IRS instructions for the year you are reporting, because this is exactly the kind of number that is adjusted over time.</p>
<p>Generally, a 1099-NEC is <em>not</em> required for:</p>
<ul>
<li>Payments to employees, which go on Form W-2.</li>
<li>Most payments to C and S corporations, with exceptions such as certain payments to attorneys.</li>
<li>Personal payments that are not made in the course of the payer's business, such as a homeowner paying a painter.</li>
<li>Payments made by credit card or through third-party payment networks, which are reported by the payment processor on Form 1099-K instead (that form has its own, separate thresholds).</li>
</ul>
<p>Rent, prizes and certain other payments are reported on Form 1099-MISC rather than 1099-NEC.</p>

<h2>Step by step: the W-9 and 1099 workflow</h2>
<h3>Step 1: Collect the W-9 at onboarding</h3>
<p>Clients should request a W-9 before the first payment, and contractors should send one with their first invoice if not asked. Collecting it early avoids a January scramble.</p>
<h3>Step 2: Invoice under the exact W-9 name</h3>
<p>Each invoice should use the same legal or business name as the W-9, with a unique invoice number. Consistent numbering, which our <a href="/tools/invoice-number-generator">invoice number generator</a> helps you set up, makes it easy to total a client's payments at year-end. Our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide explains the format.</p>
<h3>Step 3: Track payments by payment method</h3>
<p>Clients should separate payments made by check, ACH or wire (potentially reportable on 1099-NEC) from payments by card or third-party network (reported on 1099-K by the processor). Mixing them can lead to the same income being reported twice.</p>
<h3>Step 4: File and furnish the 1099-NEC</h3>
<p>The payer sends Copy B to the contractor and files Copy A with the IRS, generally by January 31. Businesses filing 10 or more information returns in total are generally required to file electronically. Some states also require a copy.</p>
<h3>Step 5: Reconcile against your own invoices</h3>
<p>Contractors should compare each 1099-NEC to their own records. Differences are common when a December invoice was paid in January, because 1099s follow the date of payment, not the invoice date.</p>

<h2>Worked example: reconciling a 1099-NEC</h2>
<p>A freelance copywriter billed one client four times in 2026:</p>
<table><thead><tr><th>Invoice</th><th>Invoice date</th><th>Amount</th><th>Paid</th><th>Method</th></tr></thead><tbody>
<tr><td>INV-2026-014</td><td>March 3</td><td>$1,800.00</td><td>March 20</td><td>ACH</td></tr>
<tr><td>INV-2026-031</td><td>June 2</td><td>$2,400.00</td><td>June 18</td><td>ACH</td></tr>
<tr><td>INV-2026-047</td><td>September 1</td><td>$950.00</td><td>September 15</td><td>Credit card</td></tr>
<tr><td>INV-2026-062</td><td>December 15</td><td>$1,200.00</td><td>January 9, 2027</td><td>ACH</td></tr>
</tbody></table>
<p>Total invoiced in 2026: $6,350.00. But the 1099-NEC for 2026 would show $4,200.00 ($1,800.00 + $2,400.00). The card payment is not included because it is reported through the processor, and the December invoice was paid in 2027, so it belongs on next year's form. A cash-basis freelancer would also report the $1,200.00 as 2027 income. Without clear invoice dates and payment records, this gap would be confusing.</p>

<h2>What contractors should do with a 1099</h2>
<p>A 1099-NEC does not change what you owe; it only reports what you were paid. As a self-employed person you report business income and expenses on Schedule C, pay self-employment tax on net earnings, and usually make quarterly estimated tax payments because no tax is withheld. The deductions that reduce your net profit are covered in our guide to <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a>.</p>
<p>Keep W-9 copies, 1099s and the invoices behind them for the IRS retention period; our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> explains why many businesses keep records longer than the minimum.</p>

<h3>Classification still matters</h3>
<p>Filing a 1099 does not make someone an independent contractor. Classification depends on the actual working relationship, including control over how the work is done. If a client directs your hours and methods like an employee, the paperwork does not change the legal answer. See our guide to the <a href="/blog/independent-contractor-invoice">independent contractor invoice</a> for how to present yourself as a separate business, and our <a href="/blog/freelancer-invoice-guide">freelancer invoice guide</a> for broader billing habits.</p>

<h2>Common W-9 and 1099 mistakes</h2>
<ul>
<li><strong>Name mismatch</strong> between the W-9, invoices and IRS records.</li>
<li><strong>Waiting until January</strong> to request W-9s from contractors paid all year.</li>
<li><strong>Reporting card payments on a 1099-NEC</strong> when they are already on a 1099-K.</li>
<li><strong>Using invoice dates instead of payment dates</strong> to calculate the 1099 total.</li>
<li><strong>Emailing an unencrypted W-9</strong> to an unverified address. Fraudsters impersonate clients to collect SSNs.</li>
<li><strong>Applying an outdated threshold.</strong> Check the threshold for the year being reported.</li>
</ul>

<p>Payments through PayPal, Venmo or Stripe may be reported on a different form. Our guide to the <a href="/blog/1099-k-threshold">1099-K threshold</a> explains when that happens.</p>

<h2>Create your contractor invoice now</h2>
<p>Keep your paperwork in sync from the first job: open the <a href="/invoice-generator/usa">USA invoice generator</a>, which is preset for USD and EIN fields, enter the same name and EIN you used on your W-9, and download a clean PDF. The <a href="/invoice-templates/minimal">Minimal invoice template</a> keeps your business details, invoice number and dates easy for a client's accounts payable team to match at year-end.</p>
`,
  },
  // 57
  {
    slug: "reverse-charge-invoice",
    title: "Reverse Charge VAT Invoice: Wording, Examples and Rules (UK/EU)",
    description:
      "How to issue a reverse charge VAT invoice in the UK and EU: when it applies, required wording, VAT numbers and worked examples for services and construction.",
    category: "tax-compliance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom & EU",
    related: ["vat-invoice-guide", "zero-rated-vs-exempt-vat", "invoice-international-clients"],
    faqs: [
      {
        q: "What wording should a reverse charge invoice include?",
        a: "In the EU, the invoice must carry the mention 'Reverse charge'. In the UK, HMRC guidance for the construction domestic reverse charge gives example wording such as 'Reverse charge: customer to account for VAT to HMRC'. Check current official guidance for the exact phrase that suits your supply.",
      },
      {
        q: "Do I charge VAT on a reverse charge invoice?",
        a: "No. You do not add VAT to the amount payable. The customer accounts for the VAT on their own return. Some regimes, such as the UK construction reverse charge, expect the invoice to show the VAT rate and amount the customer must account for, without adding it to the total.",
      },
      {
        q: "Do I need my customer's VAT number for the reverse charge?",
        a: "For intra-EU business-to-business services you should show the customer's VAT number on the invoice and validate it, typically using the EU VIES service. It is your main evidence that the customer is a business that can self-account.",
      },
      {
        q: "Does reverse charge apply to UK businesses selling services to EU customers?",
        a: "For most business-to-business services, the place of supply is where the customer belongs, so the supply is outside the scope of UK VAT and the EU customer accounts for VAT locally. Exceptions exist, for example for some land-related and event services.",
      },
      {
        q: "Is reverse charge the same as zero-rated?",
        a: "No. A zero-rated supply is taxable at 0%. Under the reverse charge, VAT is still due at the normal rate; it is simply paid by the customer instead of the supplier.",
      },
      {
        q: "Can I use the reverse charge if I'm not VAT registered?",
        a: "Not in the usual sense, because you cannot issue a VAT invoice without a VAT number. A non-registered UK business supplying B2B services to an overseas customer simply issues a normal invoice without VAT, and the customer may still have to self-account in their own country. Check whether those sales affect your own registration position, and take advice before relying on this.",
      },
      {
        q: "How does a UK business record a reverse charge purchase on its VAT return?",
        a: "Generally, you enter the VAT you calculate on the purchase as output tax in box 1 and, if you can recover it, the same amount as input tax in box 4, so the net effect is often nil. How the purchase value goes into boxes 6 and 7 depends on whether it is a service bought from abroad or a domestic reverse charge, so check HMRC's guidance for your case.",
      },
      {
        q: "What should I do if my customer's EU VAT number fails a VIES check?",
        a: "Don't apply the reverse charge until the problem is resolved. Ask the customer to confirm the number and their registration status, as typos, recent registrations and deactivated numbers are common causes. If they can't provide a valid number, you may have to treat the sale as a supply to a non-business customer and charge VAT where it is due. Keep a record of every check.",
      },
      {
        q: "Do UK businesses still file an EC Sales List?",
        a: "Mostly not. Businesses in Great Britain stopped submitting EC Sales Lists for supplies made from 1 January 2021, after the Brexit transition period ended. Northern Ireland businesses still report certain goods supplied to VAT-registered customers in the EU under the Windsor Framework arrangements. EU businesses continue to file recapitulative statements for intra-EU B2B supplies under their national rules.",
      },
      {
        q: "Does the reverse charge apply to digital services sold to consumers in the EU?",
        a: "No. Consumers cannot self-account, so the supplier usually charges VAT at the rate of the customer's country. Many businesses use the EU One Stop Shop (OSS), or its non-Union scheme for suppliers outside the EU, to report and pay that VAT through one registration rather than registering in every member state. Check the thresholds and conditions that apply to your business.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A reverse charge VAT invoice is an invoice on which the supplier does not charge VAT because the customer must account for it on their own VAT return. It shows a net total with no VAT added, includes both parties' VAT numbers where required, and carries clear wording such as "Reverse charge". It is used mainly for cross-border business-to-business services and for specific domestic sectors such as UK construction.</p>

<p>This guide explains when the reverse charge applies in the UK and EU, what a reverse charge invoice must show, the wording to use, and two worked examples. For the general rules of a full VAT invoice, start with our <a href="/blog/vat-invoice-guide">VAT invoice guide</a>; this article goes deeper on reverse charge only. You can add the wording and VAT numbers in the notes and tax fields of our <a href="/invoice-generator">free invoice generator</a>.</p>

<p><strong>Important:</strong> This article is general information, not tax advice. VAT rules, wording requirements and reporting obligations differ between the UK and each EU member state and change over time. Confirm your treatment with HMRC, your national tax authority or a qualified VAT adviser before relying on it.</p>

<h2>What the reverse charge is</h2>
<p>Normally the supplier charges VAT, collects it from the customer and pays it to the tax authority. Under the reverse charge, that obligation shifts to the customer. The customer calculates the VAT on the purchase and declares it as output tax on their VAT return. If they are entitled to full recovery, they usually claim the same amount as input tax on the same return, so the net cost is often nil. They still have to report it.</p>
<p>The same mechanism works in reverse when you are the buyer. A VAT-registered UK business that buys most B2B services from a supplier outside the UK receives an invoice with no UK VAT on it, and must itself account for UK VAT on the purchase on its return, then reclaim it as input tax to the extent it is entitled. If you receive reverse charge invoices, make sure your bookkeeping records the VAT on both sides rather than ignoring the invoice for VAT purposes.</p>
<p>The mechanism exists for two main reasons. Cross-border, it saves foreign suppliers from registering for VAT in every customer's country. Domestically, it is used in sectors prone to "missing trader" fraud, where a supplier collects VAT and disappears before paying it over.</p>

<h2>When the reverse charge applies</h2>
<table><thead><tr><th>Situation</th><th>Typical treatment</th><th>Who accounts for VAT</th></tr></thead><tbody>
<tr><td>EU business supplies most B2B services to a business in another EU country</td><td>Reverse charge under the general place-of-supply rule</td><td>Customer, in their country</td></tr>
<tr><td>UK business supplies most B2B services to an EU business</td><td>Outside the scope of UK VAT; customer self-accounts locally</td><td>Customer, in their country</td></tr>
<tr><td>UK business buys most B2B services from a supplier outside the UK</td><td>Reverse charge on the UK VAT return</td><td>UK customer</td></tr>
<tr><td>UK construction services covered by the domestic reverse charge</td><td>Domestic reverse charge (since 1 March 2021)</td><td>Customer, if VAT- and CIS-registered and not an end user</td></tr>
<tr><td>UK sales of specified goods such as mobile phones and computer chips above HMRC's value limit</td><td>Domestic reverse charge</td><td>Customer</td></tr>
<tr><td>Some EU domestic sectors (varies by country, e.g. construction, scrap metal, emissions allowances)</td><td>National domestic reverse charge</td><td>Customer</td></tr>
</tbody></table>
<p>Business-to-consumer sales generally do not use the reverse charge, because consumers are not VAT-registered and cannot self-account. Exceptions to the general B2B services rule also exist, for example for some services connected with land and admission to events, which can be taxed where they physically take place.</p>

<h3>Intra-EU goods are a related but different mechanism</h3>
<p>When a VAT-registered business ships goods to a VAT-registered business in another EU member state, the supplier usually treats the sale as an exempt intra-Community supply and the customer accounts for acquisition VAT. It works similarly in practice, but the invoice wording differs (commonly "Exempt intra-Community supply"). Goods moving between Great Britain and Northern Ireland, and between Northern Ireland and the EU, follow special rules under the Windsor Framework, so take advice for those.</p>

<h2>What a reverse charge invoice must show</h2>
<p>A reverse charge invoice is a full VAT invoice with a few key differences:</p>
<ul>
<li>Your name, address and VAT registration number.</li>
<li>The customer's name, address and VAT registration number, which is essential for intra-EU B2B services.</li>
<li>A unique sequential invoice number and the invoice date, plus the supply date if different.</li>
<li>A clear description of the goods or services, quantities and unit prices.</li>
<li>The net amount, with VAT shown as 0 or not charged, and the amount payable excluding VAT.</li>
<li>Reverse charge wording that explains why no VAT is charged.</li>
<li>For the UK construction reverse charge, HMRC guidance also asks for the VAT rate and the amount of VAT the customer must account for, shown separately and not added to the total.</li>
</ul>
<p>Validate EU customer VAT numbers before invoicing, typically through the European Commission's VIES service, and keep evidence of the check. Our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers VAT number formats in more detail.</p>

<h2>Reverse charge invoice wording examples</h2>
<p>For intra-EU services, the VAT Directive requires the invoice to carry the mention "Reverse charge" (member states may accept the equivalent in their own language). HMRC offers example wording for the UK construction reverse charge. Commonly used phrasing includes:</p>
<ul>
<li><strong>Intra-EU B2B services:</strong> "Reverse charge" or "Reverse charge: Article 196, Council Directive 2006/112/EC".</li>
<li><strong>UK supplier, B2B services to an EU customer:</strong> "Outside the scope of UK VAT. Reverse charge: customer to account for VAT in their country."</li>
<li><strong>UK construction reverse charge:</strong> "Reverse charge: customer to account for VAT to HMRC" or "Reverse charge: S55A VATA 94 applies".</li>
<li><strong>Intra-EU goods:</strong> "Exempt intra-Community supply" with the relevant legal reference used in your member state.</li>
</ul>
<p>Treat these as starting points. The exact form required, and whether a legal reference is expected, depends on where you are registered.</p>

<h2>Worked example 1: cross-border B2B services in the EU</h2>
<p>An Irish design agency invoices a French company for website work. Both are VAT-registered, the service falls under the general B2B rule, and the agency has validated the French VAT number.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit price</th><th>Net</th></tr></thead><tbody>
<tr><td>Website design and build</td><td>1</td><td>€3,500.00</td><td>€3,500.00</td></tr>
<tr><td>Accessibility audit (hours)</td><td>5</td><td>€100.00</td><td>€500.00</td></tr>
</tbody></table>
<ul>
<li>Net total: €4,000.00</li>
<li>VAT: €0.00, with the wording "Reverse charge"</li>
<li><strong>Amount payable: €4,000.00</strong></li>
</ul>
<p>The French customer accounts for French VAT on €4,000.00 on its own return. The Irish agency reports the supply on its VAT return and, in most EU countries, on its EC Sales List (recapitulative statement) as well.</p>

<h2>Worked example 2: UK construction domestic reverse charge</h2>
<p>A VAT-registered plastering subcontractor invoices a main contractor that is VAT- and CIS-registered and has confirmed it is not an end user or intermediary supplier. The work is standard-rated at 20%.</p>
<table><thead><tr><th>Description</th><th>Amount</th></tr></thead><tbody>
<tr><td>Plastering labour, Units 1–4</td><td>£6,500.00</td></tr>
<tr><td>Plaster and materials</td><td>£1,500.00</td></tr>
<tr><td>Net total</td><td>£8,000.00</td></tr>
<tr><td>VAT at 20% to be accounted for by the customer</td><td>£1,600.00</td></tr>
<tr><td><strong>Amount payable (excluding VAT)</strong></td><td><strong>£8,000.00</strong></td></tr>
</tbody></table>
<p>The invoice carries the wording "Reverse charge: customer to account for VAT to HMRC". Any CIS deduction is a separate calculation on the labour element and is not the same thing as the reverse charge. Our <a href="/blog/construction-invoice-guide">construction invoice guide</a> covers progress billing and retainage on the same kind of job.</p>

<h2>Common reverse charge mistakes</h2>
<ul>
<li><strong>Charging domestic VAT by habit</strong> to a foreign VAT-registered business.</li>
<li><strong>Omitting the wording</strong>, which leaves the 0% VAT line unexplained.</li>
<li><strong>No customer VAT number</strong>, or a number that was never validated.</li>
<li><strong>Applying the reverse charge to consumers</strong> or to UK construction end users.</li>
<li><strong>Confusing reverse charge with zero rating or exemption</strong>, which are different treatments; see <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a>.</li>
<li><strong>Forgetting the reporting side</strong>, such as the EC Sales List in the EU or the correct boxes on a UK return.</li>
</ul>
<p>If a reverse charge invoice is wrong, correct it with a credit note referencing the original rather than editing the issued document. UK sole traders working with EU clients will find more context in <a href="/blog/sole-trader-invoice-uk">how to invoice as a UK sole trader</a> and <a href="/blog/invoice-international-clients">invoicing international clients</a>. Looking ahead, structured e-invoicing mandates will capture this treatment in machine-readable form; see our <a href="/blog/e-invoicing-guide">e-invoicing guide</a>.</p>

<h2>Create your reverse charge invoice now</h2>
<p>Open the <a href="/invoice-generator/uk">UK invoice generator</a>, add both VAT numbers, set VAT to 0 for the reverse-charged lines and put the wording in the notes. The <a href="/invoice-templates/corporate">Corporate invoice template</a> gives VAT numbers and notes a clear, prominent place, and you can compare other layouts in our <a href="/invoice-templates">invoice templates</a> gallery. Always confirm the treatment with your adviser before sending.</p>
`,
  },
  // 58
  {
    slug: "zero-rated-vs-exempt-vat",
    title: "Zero-Rated vs Exempt VAT: Key Differences and Invoice Wording",
    description:
      "Zero-rated vs exempt VAT explained for the UK and EU: how each affects registration and input VAT recovery, with examples, invoice wording and a worked invoice.",
    category: "tax-compliance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom & EU",
    related: [
      "tax-exempt-invoice",
      "vat-invoice-guide",
      "reverse-charge-invoice",
      "uae-vat-invoice-requirements",
    ],
    faqs: [
      {
        q: "What is the main difference between zero-rated and exempt VAT?",
        a: "Zero-rated supplies are taxable at 0%, so they count towards VAT registration and you can usually recover VAT on related costs. Exempt supplies are not taxable at all, do not count towards registration and generally block recovery of VAT on related costs.",
      },
      {
        q: "Do zero-rated sales count towards the UK VAT threshold?",
        a: "Yes. Zero-rated sales are part of your taxable turnover. Exempt sales and supplies outside the scope of VAT are not included.",
      },
      {
        q: "Can I reclaim VAT if I only make exempt supplies?",
        a: "Generally no. A business making only exempt supplies usually cannot register for VAT or reclaim input VAT. Businesses that make both taxable and exempt supplies may recover part of their input VAT under partial exemption rules.",
      },
      {
        q: "Are children's clothes zero-rated in the UK?",
        a: "Most children's clothing and footwear is zero-rated in the UK, subject to HMRC conditions on sizes and types of garment. Check HMRC guidance for the specific items you sell.",
      },
      {
        q: "What does 'outside the scope of VAT' mean?",
        a: "It means the transaction is not a supply for VAT purposes at all, for example a statutory fee, a pure donation or many business-to-business services supplied to overseas customers. It is different from both zero-rated and exempt supplies.",
      },
      {
        q: "Can I register for VAT voluntarily if most of my sales are zero-rated?",
        a: "Yes. If your taxable turnover is below the threshold, you can usually register voluntarily, and a business making mainly zero-rated sales often benefits because it can reclaim VAT on its costs while charging 0% to customers. HMRC may also let such businesses apply for an exception from registration. Weigh the admin of regular returns against the repayments you expect.",
      },
      {
        q: "What is the reduced rate of VAT in the UK?",
        a: "The UK reduced rate is 5% and applies to a limited list of goods and services, such as domestic fuel and power, children's car seats and certain mobility aids for older people. Reduced-rated supplies are taxable, so they count towards the registration threshold and allow input VAT recovery, just like zero-rated and standard-rated ones. Check HMRC guidance for each item you sell.",
      },
      {
        q: "Are private school fees still exempt from VAT in the UK?",
        a: "No. Since 1 January 2025, fees charged by UK private schools for education and closely related boarding services have been subject to VAT at the standard rate of 20%, and schools that were not VAT-registered had to register under the normal rules. Many other education services, such as those provided by eligible bodies, can still be exempt, so check HMRC guidance for your situation.",
      },
      {
        q: "What is the partial exemption de minimis limit?",
        a: "Under HMRC's partial exemption rules, a business can recover VAT on costs relating to exempt supplies if that exempt input tax is no more than £625 a month on average and no more than half of its total input tax for the period. Both conditions must be met. VAT Notice 706 explains the tests, including simplified versions, and when they can be applied annually.",
      },
      {
        q: "Can I get VAT repayments more often if I mainly make zero-rated sales?",
        a: "Usually, yes. Businesses that regularly receive VAT repayments, which is common when most sales are zero-rated, can ask HMRC to let them submit monthly rather than quarterly VAT returns. That gets repayments into your account sooner and helps cash flow, at the cost of filing more often. Make sure your records and software can keep up before you switch.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The difference between zero-rated and exempt VAT is that a zero-rated supply is taxable at a 0% rate, while an exempt supply is not taxable at all. Both show no VAT on the invoice, but zero-rated sales count towards VAT registration and let you reclaim VAT on related costs, whereas exempt sales do not count towards registration and generally block that recovery. That difference can cost or save a business real money.</p>

<p>This guide explains how zero rating and exemption work in the UK and EU, gives common examples, shows how to word each on an invoice, and walks through a mixed-rate invoice. For full VAT invoice fields, see our <a href="/blog/vat-invoice-guide">VAT invoice guide</a>. You can set different rates per line in our <a href="/invoice-generator">free invoice generator</a>.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Which goods and services are zero-rated or exempt is defined in detail by legislation and official guidance, varies between the UK and each EU member state, and changes over time. Check HMRC, your national tax authority or a qualified VAT adviser for your specific supplies.</p>

<h2>Zero-rated vs exempt VAT at a glance</h2>
<table><thead><tr><th>&nbsp;</th><th>Zero-rated</th><th>Exempt</th><th>Outside the scope</th></tr></thead><tbody>
<tr><td>Is it a taxable supply?</td><td>Yes, at 0%</td><td>No</td><td>Not a supply for VAT</td></tr>
<tr><td>VAT charged to the customer</td><td>None (0%)</td><td>None</td><td>None</td></tr>
<tr><td>Counts towards UK registration threshold</td><td>Yes</td><td>No</td><td>No</td></tr>
<tr><td>Recover VAT on related costs</td><td>Generally yes</td><td>Generally no</td><td>Depends on the activity</td></tr>
<tr><td>Shown on the VAT return</td><td>Yes, as sales</td><td>Yes, in total sales (UK)</td><td>Often not, or only in limited cases</td></tr>
<tr><td>Invoice wording</td><td>"Zero-rated" / 0%</td><td>"Exempt" plus reason</td><td>"Outside the scope of VAT"</td></tr>
</tbody></table>

<h2>What zero-rated means</h2>
<p>A zero-rated supply is within the VAT system: it is a taxable supply, the rate just happens to be 0%. Because it is taxable, the supplier can generally reclaim the VAT it pays on costs that relate to it. A business selling only zero-rated goods can therefore receive regular VAT repayments from the tax authority.</p>
<p>In the UK, common zero-rated supplies include:</p>
<ul>
<li>Most food for human consumption (but not catering, hot takeaway food, confectionery and certain other items).</li>
<li>Books, newspapers and children's picture books, including qualifying e-publications.</li>
<li>Most children's clothing and footwear.</li>
<li>Exports of goods outside the UK, subject to evidence requirements.</li>
<li>Many passenger transport services in vehicles designed for 10 or more passengers.</li>
<li>Construction of new dwellings, in qualifying circumstances.</li>
</ul>
<p>In EU law, the language is different. The VAT Directive describes exports and intra-Community supplies of goods as "exempt with the right of deduction", which behaves like UK zero rating. Some member states also apply genuine 0% rates to certain domestic goods, and the 2022 reform of the EU rates rules gave member states more flexibility to apply very low or zero rates to a limited list of items.</p>

<h2>What exempt means</h2>
<p>An exempt supply sits outside the charge to VAT by law. No VAT is charged, but the price of that freedom is that the supplier generally cannot reclaim the VAT on the costs of making it. In effect, the VAT on inputs becomes a cost of the business.</p>
<p>Common exempt supplies in the UK and across the EU include:</p>
<ul>
<li>Insurance and most financial services.</li>
<li>Education and vocational training provided by eligible bodies.</li>
<li>Health and medical care by registered practitioners (purely cosmetic treatments are generally not covered).</li>
<li>Most residential lettings and sales of older residential and commercial property, subject to the UK "option to tax" on commercial property.</li>
<li>Certain postal services, burial and cremation, and some charitable fundraising events.</li>
</ul>
<p>A business that makes only exempt supplies cannot normally register for VAT. One that makes both taxable and exempt supplies is "partially exempt" and has to apportion its input VAT, recovering only the part attributable to taxable supplies, subject to de minimis rules.</p>

<h2>Why the difference matters: a cost comparison</h2>
<p>Consider two UK businesses that each spend £10,000 plus £2,000 VAT on equipment and services in a quarter.</p>
<table><thead><tr><th>&nbsp;</th><th>Business A: zero-rated sales</th><th>Business B: exempt sales</th></tr></thead><tbody>
<tr><td>VAT paid on costs</td><td>£2,000</td><td>£2,000</td></tr>
<tr><td>VAT charged on sales</td><td>£0</td><td>£0</td></tr>
<tr><td>VAT recoverable</td><td>£2,000 (repayment)</td><td>£0</td></tr>
<tr><td>Real cost of inputs</td><td>£10,000</td><td>£12,000</td></tr>
</tbody></table>
<p>Both invoices show no VAT, yet Business B carries an extra £2,000 of cost. This is why classifying a supply correctly is not just a labelling choice.</p>

<h3>Registration thresholds</h3>
<p>In the UK, the VAT registration threshold has been £90,000 of taxable turnover since 1 April 2024. Zero-rated sales count towards it; exempt sales do not. A business whose taxable supplies are wholly or mainly zero-rated may be able to apply to HMRC for an exception from registration. EU member states set their own thresholds, which vary widely. If you are close to a threshold, check current figures with the tax authority. UK sole traders can find more on registration in <a href="/blog/sole-trader-invoice-uk">how to invoice as a sole trader in the UK</a>.</p>

<h2>How to show zero-rated and exempt lines on an invoice</h2>
<p>When an invoice mixes rates, subtotal each rate group separately and label every line. Good practice is to:</p>
<ol>
<li>Show the VAT rate on each line: 20%, 5%, 0% or "Exempt".</li>
<li>Give a net subtotal for each rate, and the VAT for each rate (£0.00 for zero-rated).</li>
<li>Keep exempt lines visibly separate from zero-rated lines, never merged under "0%".</li>
<li>For exempt supplies in the EU, reference the exemption: EU invoicing rules require a reference to the relevant Directive or national provision, or another indication that the supply is exempt.</li>
<li>For exports, keep the evidence that supports zero rating (such as shipping and customs documents) with your records.</li>
</ol>
<p>This is the same line-by-line discipline you would apply on any <a href="/blog/itemized-invoice">itemized invoice</a>. Our <a href="/tools/sales-tax-calculator">tax calculator</a> is handy for checking the VAT on each rate group.</p>

<h2>Worked example: a mixed-rate UK invoice</h2>
<p>A VAT-registered UK bookshop supplies a school with books (zero-rated) and stationery (standard-rated at 20%).</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Unit price</th><th>Net</th><th>VAT rate</th><th>VAT</th></tr></thead><tbody>
<tr><td>Printed reading books</td><td>10</td><td>£12.99</td><td>£129.90</td><td>0%</td><td>£0.00</td></tr>
<tr><td>A4 notebooks</td><td>20</td><td>£4.50</td><td>£90.00</td><td>20%</td><td>£18.00</td></tr>
</tbody></table>
<ul>
<li>Net at 0%: £129.90, VAT £0.00</li>
<li>Net at 20%: £90.00, VAT £18.00</li>
<li>Total net: £219.90</li>
<li>Total VAT: £18.00</li>
<li><strong>Total payable: £237.90</strong></li>
</ul>
<p>Had the bookshop simply applied 20% to the full £219.90, it would have charged £43.98 of VAT, overcharging by £25.98. If the same school also bought exempt training from an eligible provider, that would normally appear on the provider's own invoice marked "Exempt", not as a 0% line.</p>

<h2>How to check whether a supply is zero-rated or exempt</h2>
<p>Classification depends on what exactly you supply, to whom and where, so work through it deliberately rather than by assumption:</p>
<ol>
<li><strong>Describe the supply precisely.</strong> "Food" is too broad; "cold sandwiches sold to take away" and "hot pies" can be treated differently.</li>
<li><strong>Check official guidance first.</strong> In the UK, HMRC publishes VAT notices for sectors such as food, books, clothing, health and education. EU businesses should check national guidance, which implements the Directive locally.</li>
<li><strong>Check who you are and who the customer is.</strong> Some exemptions only apply to eligible bodies or registered professionals, and some zero rates depend on the customer, such as a charity or an overseas buyer.</li>
<li><strong>Check where the supply takes place.</strong> Cross-border sales may be zero-rated exports, reverse charged or outside the scope of UK VAT altogether.</li>
<li><strong>Record your conclusion.</strong> Note the guidance you relied on in the product or client record so every invoice uses the same treatment.</li>
</ol>
<p>If the guidance is unclear, ask your adviser or the tax authority before you invoice. Correcting a classification across many past invoices is far more expensive than checking once.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Treating "exempt" and "zero-rated" as synonyms</strong> on invoices and in accounting software.</li>
<li><strong>Leaving the rate blank</strong> instead of stating 0% or "Exempt".</li>
<li><strong>Assuming food is always zero-rated</strong>; catering, hot food and many snacks are standard-rated in the UK.</li>
<li><strong>Zero rating exports without evidence</strong> of the goods leaving the country.</li>
<li><strong>Confusing zero rating with the reverse charge</strong>: under the reverse charge, VAT is due but paid by the customer. See our <a href="/blog/reverse-charge-invoice">reverse charge invoice</a> guide.</li>
<li><strong>Discarding records</strong> that support a zero-rated or exempt claim; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
</ul>
<p>Other VAT systems use the same concepts with local twists. The UAE, for example, distinguishes zero-rated and exempt supplies too; see <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a>.</p>

<h2>Create your mixed-rate VAT invoice now</h2>
<p>Use the <a href="/invoice-generator/uk">UK invoice generator</a> to set a VAT rate on each line and label zero-rated and exempt items clearly. A clean, well-spaced layout such as the <a href="/invoice-templates/nordic">Nordic invoice template</a> keeps rate groups readable, and the full <a href="/invoice-templates">invoice templates</a> gallery has more options. Confirm each supply's treatment with your adviser before you send.</p>
`,
  },
  // 59
  {
    slug: "e-invoicing-guide",
    title: "E-Invoicing Guide 2026: Mandates, Peppol and Structured Formats",
    description:
      "E-invoicing explained: what counts as an electronic invoice, Peppol and EN 16931 formats, clearance models and a 2026 overview of mandates around the world.",
    category: "tax-compliance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: ["tax-invoice-guide", "invoice-generator-vs-accounting-software", "uae-vat-invoice-requirements"],
    faqs: [
      {
        q: "Is a PDF invoice an e-invoice?",
        a: "Under most e-invoicing mandates, no. A mandated e-invoice is a structured, machine-readable file such as UBL or CII XML that software can process automatically. A PDF can still be a valid invoice where no mandate applies, and hybrid formats combine a PDF with embedded XML.",
      },
      {
        q: "What is Peppol?",
        a: "Peppol is an international network and set of specifications for exchanging electronic business documents, including invoices. Businesses connect through certified access points, so a sender can reach any registered receiver regardless of which provider each uses.",
      },
      {
        q: "Is e-invoicing mandatory in the US?",
        a: "As of 2026 there is no general federal B2B e-invoicing mandate in the US. Some public-sector buyers require electronic submission, and there is a voluntary industry framework, but businesses can generally still use PDF invoices.",
      },
      {
        q: "Does e-invoicing apply to small businesses?",
        a: "Often yes, eventually. Many mandates start with large businesses and extend to small and micro businesses later, and some require every business to be able to receive e-invoices before issuing is compulsory. Check the timetable in each country where you are registered.",
      },
      {
        q: "What is a clearance model?",
        a: "In a clearance model, the invoice is sent to or validated by a tax authority platform before or as it reaches the buyer. Italy, Mexico and Brazil are long-standing examples.",
      },
      {
        q: "What is the difference between e-invoicing and EDI?",
        a: "EDI (electronic data interchange) is an older way for trading partners to exchange business documents in agreed formats, often through private connections set up one partner at a time. Modern e-invoicing uses standardized formats such as EN 16931, UBL or CII and open networks like Peppol, so one connection can reach many buyers. Both are structured data, but mandates specify particular formats and channels.",
      },
      {
        q: "How do I get a Peppol ID?",
        a: "You get a Peppol ID by registering with a certified Peppol access point provider, often through your accounting or invoicing software. The provider registers your business identifier, such as a VAT or company number, in the network directory so others can find you and send you e-invoices. Costs and setup vary by provider, and some accounting packages include Peppol access in their plans.",
      },
      {
        q: "What happens if I send a PDF invoice where e-invoicing is mandatory?",
        a: "The invoice may not count as a valid invoice for tax purposes. Depending on the country, that can mean penalties for you, a buyer who won't pay until they receive a compliant e-invoice, or a customer who cannot deduct the VAT. Some countries allow transition periods or exceptions, so check the rules and timelines in each country where you're registered.",
      },
      {
        q: "Can a free invoice generator create a legally valid e-invoice?",
        a: "Usually not. Most free generators, including ours, create PDF invoices, which are fine where no mandate applies but are not the structured XML files or platform submissions that mandates require. They also don't add clearance stamps, IRNs or tax authority QR codes. Where e-invoicing is compulsory, use software that supports the required format or a certified service provider.",
      },
      {
        q: "Are there free e-invoicing options for small businesses?",
        a: "Some governments offer free basic tools. Malaysia's MyInvois Portal lets businesses submit e-invoices online, and Italy's tax agency provides free tools for creating and sending invoices through its exchange system. Elsewhere, low-cost accounting software often includes e-invoicing. Check your tax authority's website first, because a free official portal may be enough if you send only a few invoices.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> E-invoicing is the exchange of invoices as structured, machine-readable data, such as UBL or CII XML files, rather than as PDFs or paper. A growing number of countries now require it for business-to-business or business-to-government sales, often through a government platform or a network such as Peppol. A PDF emailed to a client is an electronic document, but under most mandates it is not an "e-invoice".</p>

<p>This e-invoicing guide explains what counts as an e-invoice, the main formats and networks, the different mandate models, and where major mandates stood as of October 2026. Where no mandate applies, a clear PDF from our <a href="/invoice-generator">free invoice generator</a> remains a perfectly good invoice; where one does, you will need compliant software.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. E-invoicing rollout dates, thresholds and technical specifications change frequently, and several have been postponed in the past. Check the official tax authority guidance in each country where you are registered, or ask a qualified adviser, before planning around any date in this article.</p>

<h2>What counts as an e-invoice</h2>
<p>Under the EU definition, an electronic invoice is one issued, transmitted and received in a structured electronic format that allows automatic and electronic processing. In practice that means a data file whose fields (seller, buyer, tax IDs, line items, tax amounts, totals) are tagged so software can read them without a human retyping anything.</p>
<table><thead><tr><th>Document</th><th>Structured data?</th><th>Typically meets an e-invoicing mandate?</th></tr></thead><tbody>
<tr><td>Paper invoice</td><td>No</td><td>No</td></tr>
<tr><td>PDF invoice sent by email</td><td>No</td><td>No</td></tr>
<tr><td>Scanned invoice processed by OCR</td><td>No (extracted later)</td><td>No</td></tr>
<tr><td>Hybrid PDF with embedded XML (e.g. Factur-X / ZUGFeRD)</td><td>Yes, in the XML part</td><td>Often, depending on the country and profile</td></tr>
<tr><td>UBL or CII XML file exchanged via Peppol or a tax platform</td><td>Yes</td><td>Yes, if it follows the local specification</td></tr>
</tbody></table>
<p>The content requirements of a tax invoice do not disappear with e-invoicing; they are simply expressed as data fields. Our <a href="/blog/tax-invoice-guide">tax invoice guide</a> covers those core fields.</p>

<h2>Formats and standards you will hear about</h2>
<ul>
<li><strong>EN 16931</strong>: the European standard that defines the core semantic data model of an electronic invoice. It can be expressed in two syntaxes, UBL and UN/CEFACT CII.</li>
<li><strong>UBL (Universal Business Language)</strong>: an XML standard widely used for invoices, including on Peppol.</li>
<li><strong>CII (Cross Industry Invoice)</strong>: the UN/CEFACT XML syntax, used in formats such as Factur-X and ZUGFeRD.</li>
<li><strong>Factur-X / ZUGFeRD</strong>: hybrid formats, mainly used in France and Germany, that embed CII XML inside a PDF so humans and machines can both read the invoice.</li>
<li><strong>XRechnung</strong>: Germany's national specification based on EN 16931, originally for invoices to the public sector.</li>
<li><strong>Peppol BIS Billing</strong>: the Peppol specification for invoices and credit notes, built on EN 16931.</li>
<li><strong>Country-specific formats</strong>: for example FatturaPA in Italy, CFDI in Mexico and the formats used by India's Invoice Registration Portal.</li>
</ul>

<h2>How Peppol works</h2>
<p>Peppol is a network and set of specifications for exchanging business documents. It uses a "four-corner" model:</p>
<ol>
<li>The supplier (corner 1) creates the invoice in its software.</li>
<li>The supplier's access point (corner 2), a certified service provider, sends it across the network.</li>
<li>The buyer's access point (corner 3) receives it.</li>
<li>The buyer (corner 4) gets the invoice straight into its accounting system.</li>
</ol>
<p>Because every access point speaks the same standard, a supplier only needs one connection to reach any registered buyer. Some countries add a "fifth corner" in which invoice data is also reported to the tax authority. Peppol is used in many European countries and also in countries such as Australia, New Zealand, Singapore, Japan and Malaysia, for public-sector or voluntary B2B exchange in many cases.</p>

<h2>The main e-invoicing models</h2>
<table><thead><tr><th>Model</th><th>How it works</th><th>Examples</th></tr></thead><tbody>
<tr><td>Post-audit / interoperability</td><td>Parties exchange structured invoices directly or via a network; tax authority checks later</td><td>Peppol-based mandates such as Belgium</td></tr>
<tr><td>Clearance</td><td>Invoice is validated by a tax platform before or as it reaches the buyer</td><td>Italy (SdI), Mexico (CFDI), Brazil (NF-e)</td></tr>
<tr><td>Real-time or periodic reporting</td><td>Invoice data is reported to the authority soon after issue</td><td>Hungary, Spain's SII for larger businesses</td></tr>
<tr><td>Hybrid / decentralized CTC</td><td>Network exchange plus reporting to the authority</td><td>France's planned model, the EU's ViDA reporting</td></tr>
</tbody></table>

<h2>E-invoicing mandates: where things stood in 2026</h2>
<p>The list below reflects mandates as announced at the time of writing. Dates have moved before, so treat each as a prompt to check the official source.</p>
<ul>
<li><strong>Italy:</strong> mandatory B2B and B2C e-invoicing through the SdI platform since 2019.</li>
<li><strong>Germany:</strong> all domestic businesses must be able to receive e-invoices since 1 January 2025. Issuing becomes mandatory in phases, with businesses above €800,000 turnover from 2027 and all businesses from 2028.</li>
<li><strong>Belgium:</strong> structured B2B e-invoicing, generally via Peppol, mandatory from 1 January 2026.</li>
<li><strong>France:</strong> a phased rollout through certified platforms, with receiving for all businesses and issuing for larger companies scheduled from September 2026, and issuing for small and micro businesses from September 2027.</li>
<li><strong>Poland:</strong> the national KSeF system became mandatory in stages during 2026, starting with the largest taxpayers.</li>
<li><strong>European Union:</strong> the VAT in the Digital Age (ViDA) package, adopted in 2025, makes e-invoicing the default for intra-EU B2B supplies with digital reporting from July 2030, and lets member states impose domestic mandates without special approval.</li>
<li><strong>United Kingdom:</strong> the government has announced mandatory B2B and B2G e-invoicing from April 2029, with details still being developed.</li>
<li><strong>Saudi Arabia:</strong> the FATOORA program began in December 2021, with integration with the authority's platform rolled out to taxpayers in waves.</li>
<li><strong>United Arab Emirates:</strong> a phased e-invoicing program using accredited service providers, with the first phases starting in 2026 to 2027 for larger businesses. See <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a> for current tax invoice fields.</li>
<li><strong>India:</strong> GST e-invoicing with an Invoice Reference Number (IRN) applies to businesses above a turnover threshold, which has been lowered several times. Our <a href="/blog/gst-invoice-guide">GST invoice guide</a> covers related fields.</li>
<li><strong>Pakistan:</strong> certain retailers must issue invoices through systems integrated with the FBR, and electronic invoicing for sales-tax registered persons has been extended in phases. See <a href="/blog/sales-tax-invoice-pakistan">sales tax invoices in Pakistan</a>.</li>
<li><strong>Malaysia:</strong> MyInvois e-invoicing phased in from 2024 by turnover band.</li>
<li><strong>Latin America:</strong> Mexico, Brazil, Chile and others have used clearance e-invoicing for many years.</li>
<li><strong>United States:</strong> no general federal B2B mandate; adoption is voluntary, with some public-sector requirements.</li>
</ul>

<h2>How to prepare your business</h2>
<h3>Step 1: Map where you are registered</h3>
<p>Mandates follow your tax registrations and your customers' locations. List every country where you are VAT- or GST-registered and every public-sector customer you bill.</p>
<h3>Step 2: Clean your master data</h3>
<p>Structured invoices are rejected automatically when data is wrong. Check customer legal names, addresses and tax numbers; our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers the common identifiers.</p>
<h3>Step 3: Choose software or a service provider</h3>
<p>To issue mandated e-invoices you typically need accounting or invoicing software that outputs the required format, plus a Peppol access point or a connection to the national platform. Our comparison of an <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a> helps you decide when to move up.</p>
<h3>Step 4: Plan for receiving as well as sending</h3>
<p>Several mandates require businesses to receive e-invoices before issuing becomes compulsory, so your accounts payable process needs to change too.</p>
<h3>Step 5: Review archiving</h3>
<p>The structured file is usually the legal original, so you must keep it, not just a PDF view of it. See <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</p>

<h2>Where PDF invoices still fit</h2>
<p>For freelancers and small businesses selling domestically in countries without a mandate, or to consumers, or to clients abroad who accept PDFs, a well-structured PDF remains normal practice. Clear field labels and consistent tax IDs also make your PDFs easier for automated capture tools. Country presets such as the <a href="/invoice-generator/uae">UAE invoice generator</a> and <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> set local tax ID labels, but they produce PDF invoices, not mandated structured e-invoices.</p>

<p>Country rules differ a lot. For the networks and mandates in detail, see <a href="/blog/what-is-peppol">what Peppol is and how it works</a>, the <a href="/blog/zatca-e-invoicing-guide">ZATCA e-invoicing guide</a> for Saudi Arabia, <a href="/blog/france-e-invoicing-reform">the France e-invoicing reform</a> and <a href="/blog/germany-e-invoicing-xrechnung-zugferd">XRechnung vs ZUGFeRD in Germany</a>.</p>

<h2>Create a clear invoice now</h2>
<p>If no e-invoicing mandate applies to your sales yet, open the invoice generator and download a clean PDF in minutes. A tidy, structured layout such as the <a href="/invoice-templates/slate">Slate invoice template</a> keeps every field easy to find, and you can browse all <a href="/invoice-templates">invoice templates</a> to match your brand. Check the latest mandate dates with your tax authority before each new year.</p>
`,
  },
  // 60
  {
    slug: "how-long-to-keep-invoices",
    title: "How Long to Keep Invoices: Record Retention Rules by Country",
    description:
      "How long to keep invoices in the US, UK, EU, Canada, Australia, UAE and more, plus how to store digital copies safely and when to keep records for longer.",
    category: "tax-compliance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: [
      "invoice-audit-preparation",
      "bookkeeping-basics",
      "e-invoicing-guide",
      "invoice-numbering-system",
    ],
    faqs: [
      {
        q: "How long should a small business keep invoices?",
        a: "It depends on the country, but most tax authorities require between five and ten years. Many small businesses simply keep invoices for at least seven years, or longer where local law requires it, to stay safely inside most rules.",
      },
      {
        q: "Can I keep invoices digitally and throw away paper copies?",
        a: "In many countries, yes, provided the digital copies are complete, legible, secure and can be produced on request. Some jurisdictions have specific conditions for scanning or for electronic originals, so check local rules first.",
      },
      {
        q: "How long should I keep invoices in the UK?",
        a: "HMRC generally expects limited companies to keep records for at least six years from the end of the financial year they relate to, and VAT records are generally kept for six years. Sole traders generally keep records for at least five years after the 31 January Self Assessment deadline for the relevant tax year.",
      },
      {
        q: "How long should I keep invoices for the IRS?",
        a: "The IRS generally says to keep records for three years from filing, but six years if you underreport income by more than 25% and seven years for certain bad debt or worthless securities claims. If you never file or file a fraudulent return, there is no time limit.",
      },
      {
        q: "Do I need to keep invoices I received as well as invoices I issued?",
        a: "Yes. Purchase invoices support your expense deductions and any input tax you reclaim, so they are just as important as sales invoices.",
      },
      {
        q: "Do I need to keep invoices after I close my business?",
        a: "Yes. Retention periods keep running after a business closes, because the tax authority can still review returns for the years you traded. Keep your invoices, bank statements and other records for the full period that applies to your final returns, and make sure someone can still access them, especially if a company is dissolved. Check the local rules for closed businesses.",
      },
      {
        q: "What should I do if I've lost some invoices?",
        a: "Reconstruct what you can. Download copies from your invoicing tool or email, ask clients and suppliers for duplicates, and use bank and payment processor statements to confirm amounts and dates. Write a short note explaining what was lost and how you rebuilt the records. Tax authorities may accept reasonable reconstructions, but missing records can still cost you deductions, so improve your backups.",
      },
      {
        q: "Is a photo or scan of an invoice acceptable as a record?",
        a: "In many countries, yes, if the copy is complete, legible and stored securely for the full retention period. The IRS, HMRC and many other authorities accept electronic records that meet their conditions, though some countries set specific rules before you can destroy paper originals. Check that each image is readable, including small print and totals, and back it up in more than one place.",
      },
      {
        q: "How long should I keep bank statements?",
        a: "Generally for the same period as your invoices, because statements prove when invoices were paid and support the income and expenses you report. In practice, that means following the longest retention period that applies to your business records in your country. Download statements regularly rather than relying on your bank's online history, which may only go back a limited number of years.",
      },
      {
        q: "Does Making Tax Digital change how I keep invoices in the UK?",
        a: "It can. Making Tax Digital for Income Tax began on 6 April 2026 for sole traders and landlords with qualifying income over £50,000, and the threshold falls to £30,000 from April 2027. Those in scope must keep digital records in compatible software and send quarterly updates. VAT-registered businesses already keep digital VAT records. Retention periods are unchanged, so check GOV.UK for your position.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> How long to keep invoices depends on where you are taxed, but most countries require five to ten years. The US IRS generally asks for three to seven years depending on the situation, the UK generally six years for companies and VAT records, Canada six years, Australia five years, and Germany eight years for invoices. Keep both the invoices you issue and the invoices you receive.</p>

<p>This guide summarises common retention periods by country, explains when the clock starts, covers digital storage, and gives you a simple retention policy you can adopt. If you create invoices with our <a href="/invoice-generator">free invoice generator</a>, download and file each PDF as you send it, because your browser draft is not a long-term archive.</p>

<p><strong>Important:</strong> This is general information, not legal or tax advice. Retention periods depend on the type of record, your business structure, your industry and local law, and they can change. The figures below are common minimums; check your tax authority's guidance or ask an accountant for your situation.</p>

<h2>Why invoice retention matters</h2>
<p>Invoices are primary evidence for the income you report, the expenses you deduct and any VAT, GST or sales tax you charge or reclaim. If a tax authority opens an inquiry and you cannot produce the records, it may disallow deductions or input tax credits, estimate your income, and apply penalties. Invoices also matter outside tax: in contract disputes, insurance claims, due diligence when selling a business, and when chasing an unpaid debt.</p>
<p>Retention applies to the whole invoice trail, not just the invoices that were paid. Keep voided and cancelled invoices together with a note explaining why they were voided, because a gap in your numbering sequence is one of the first things an examiner asks about. Keep each invoice in the form you actually sent it, rather than a later edited version, so the copy you produce matches the copy your customer holds. And when a record finally passes its retention period, dispose of it securely: invoices carry names, addresses, bank details and tax IDs, so shred paper copies and permanently delete digital ones rather than leaving them in an old shared folder.</p>

<h2>How long to keep invoices: retention periods by country</h2>
<p>The table shows commonly cited general minimums. Many have exceptions and longer periods for specific records.</p>
<table><thead><tr><th>Country</th><th>Typical minimum for invoices and business records</th><th>Notes</th></tr></thead><tbody>
<tr><td>United States (federal)</td><td>3 years from filing, generally</td><td>6 years if income is underreported by more than 25%; 7 years for bad debt or worthless securities claims; employment tax records 4 years; no limit if no return or fraud. States may differ.</td></tr>
<tr><td>United Kingdom</td><td>Companies: 6 years from end of the financial year. Sole traders: at least 5 years after the 31 January filing deadline</td><td>VAT records generally 6 years. Longer in some cases, e.g. ongoing inquiries.</td></tr>
<tr><td>Canada</td><td>6 years from the end of the last tax year they relate to</td><td>Longer if a return is filed late or under objection.</td></tr>
<tr><td>Australia</td><td>5 years</td><td>Generally from when records were prepared or the transaction completed, whichever is later.</td></tr>
<tr><td>Germany</td><td>8 years for invoices and accounting vouchers</td><td>Reduced from 10 years for records whose period had not expired by 2025; books and financial statements remain at 10 years.</td></tr>
<tr><td>France</td><td>6 years for tax purposes</td><td>Commercial law generally requires accounting documents for 10 years.</td></tr>
<tr><td>Other EU countries</td><td>Set nationally, commonly 5–10 years</td><td>The EU VAT Directive lets each member state set its own period.</td></tr>
<tr><td>United Arab Emirates</td><td>VAT records generally 5 years; corporate tax records 7 years</td><td>Longer periods apply for certain real estate records.</td></tr>
<tr><td>India</td><td>About 6 years under GST</td><td>Generally counted from the due date of the annual return.</td></tr>
<tr><td>Pakistan</td><td>Commonly cited as 6 years</td><td>Check the Income Tax Ordinance, Sales Tax Act and provincial rules for your situation.</td></tr>
</tbody></table>
<p>If you trade in several countries, follow the longest period that applies to each record. For US businesses, our <a href="/invoice-generator/usa">USA invoice generator</a> and, for UK businesses, the <a href="/invoice-generator/uk">UK invoice generator</a> set the right local defaults on new invoices.</p>

<h2>When does the retention clock start?</h2>
<p>This is the detail most people get wrong. The period usually runs from the end of a tax year, the filing date, or the end of a financial year, not from the invoice date. An invoice dated January 2026 for a calendar-year US business may need to be kept until at least April 2030 under the basic three-year rule (three years after the return filed in April 2027), and longer if any extended period applies.</p>
<table><thead><tr><th>Example</th><th>Clock starts</th><th>Earliest safe disposal under the general rule</th></tr></thead><tbody>
<tr><td>UK limited company, year ending 31 March 2026</td><td>31 March 2026</td><td>After 31 March 2032</td></tr>
<tr><td>UK sole trader, tax year 2025–26</td><td>31 January 2027 filing deadline</td><td>After 31 January 2032</td></tr>
<tr><td>Canadian business, 2026 tax year</td><td>End of the 2026 tax year</td><td>After the end of 2032</td></tr>
</tbody></table>
<p>These are illustrations of the general rule only. Late filing, amendments and open inquiries can all extend the period.</p>

<h2>Records to keep alongside your invoices</h2>
<ul>
<li>Sales invoices you issued, including voided ones and their explanation.</li>
<li>Credit notes and debit notes, with references to the original invoices; see our <a href="/blog/credit-note-guide">credit note guide</a>.</li>
<li>Purchase invoices and receipts that support expenses and input tax claims.</li>
<li>Bank and payment processor statements showing when invoices were paid.</li>
<li>Contracts, purchase orders and statements of work behind larger invoices.</li>
<li>Tax forms such as W-9s and 1099s in the US; see <a href="/blog/w9-and-1099-for-contractors">W-9 vs 1099 for contractors</a>.</li>
<li>Exemption and resale certificates, and evidence supporting zero-rated exports.</li>
<li>Records of assets for as long as you own them, plus the retention period after disposal.</li>
</ul>
<p>Expense records are particularly important for the self-employed, whose deductions depend on them; see our guide to <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a>.</p>

<h2>Storing invoices digitally</h2>
<p>Most tax authorities accept electronic records, but they expect them to be complete, readable, secure and retrievable for the whole period. A practical setup looks like this:</p>
<ol>
<li><strong>Save a PDF of every invoice the moment you issue it.</strong> Treat the sent PDF as the record, not an editable draft.</li>
<li><strong>Use a consistent file name</strong>, such as <code>2026/INV-2026-0042-ClientName.pdf</code>, built around your invoice number. Our <a href="/blog/invoice-numbering-system">invoice numbering system</a> guide and <a href="/tools/invoice-number-generator">invoice number generator</a> make this easy.</li>
<li><strong>Store files in at least two places</strong>, for example cloud storage plus an offline backup.</li>
<li><strong>Keep folders by tax year</strong> so you can find and later dispose of a whole year at once.</li>
<li><strong>Check legibility</strong>: scans and PDFs should print clearly. Our <a href="/blog/invoice-pdf-print-checklist">invoice PDF print checklist</a> helps.</li>
<li><strong>Export before you switch software.</strong> If a subscription ends, you still need the records.</li>
</ol>
<p>Where structured e-invoicing is mandatory, the XML file is usually the legal original and must be stored in its original form; see our <a href="/blog/e-invoicing-guide">e-invoicing guide</a>. Some countries also set conditions for scanning paper invoices and destroying the originals, so check before you shred.</p>

<h2>When to keep invoices longer</h2>
<ul>
<li>While a tax inquiry, audit or appeal is open.</li>
<li>While a contract dispute or legal claim is possible or ongoing.</li>
<li>For invoices relating to long-life assets, property or capital improvements.</li>
<li>Where your industry has its own record-keeping rules, such as regulated financial or healthcare businesses.</li>
<li>When you have elected or claimed something that a later year depends on, such as carried-forward losses.</li>
</ul>

<h2>A simple invoice retention policy</h2>
<p>If you want one rule that works for most small businesses, adopt something like this and review it with your accountant:</p>
<ul>
<li>Keep all invoices, credit notes and supporting records for at least the longest statutory period that applies to you, and seven years at minimum if you are unsure.</li>
<li>Keep asset and property records for as long as you own the asset plus that period.</li>
<li>Once a year, after confirming no inquiries are open, securely delete or shred the year that has passed its retention period.</li>
</ul>
<p>Good retention is part of everyday <a href="/blog/bookkeeping-basics">bookkeeping for small business</a>, not a once-a-year job.</p>

<h2>Create and archive your next invoice</h2>
<p>Open the invoice generator, create your invoice, download the PDF and file it in this year's folder straight away. A clean, print-friendly layout such as the <a href="/invoice-templates/mono">Mono invoice template</a> stays legible years later, even in black-and-white.</p>
`,
  },
  // 61
  {
    slug: "tax-id-on-invoice",
    title: "Tax ID on Invoice: EIN, VAT Number, TRN and NTN Explained",
    description:
      "Which tax ID belongs on your invoice: EIN, VAT number, TRN, NTN and more. Learn when each is required, where to place it and how to format it correctly.",
    category: "tax-compliance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: [
      "invoice-requirements-by-country",
      "tax-invoice-guide",
      "w9-and-1099-for-contractors",
      "reverse-charge-invoice",
    ],
    faqs: [
      {
        q: "Is a tax ID required on an invoice?",
        a: "It depends on the country and your registration. A VAT or GST-registered business usually must show its registration number on tax invoices, while in the US there is generally no legal requirement to print an EIN on an ordinary invoice.",
      },
      {
        q: "Should I put my Social Security number on an invoice?",
        a: "No. Do not print your SSN on invoices. If a US client needs your taxpayer identification number for reporting, provide it securely on Form W-9, or get a free EIN from the IRS and use that instead.",
      },
      {
        q: "Do I need to include the customer's tax ID on an invoice?",
        a: "Often, for business customers. Cross-border reverse charge invoices in the EU need the customer's VAT number, and many VAT and GST regimes expect the buyer's registration number on B2B tax invoices.",
      },
      {
        q: "Can I show a VAT number if I'm not VAT registered?",
        a: "No. Only show a VAT number once you are registered and have been issued one. Displaying a number you do not hold, or charging VAT without registration, can create serious problems with the tax authority.",
      },
      {
        q: "How do I check a customer's EU VAT number?",
        a: "The European Commission's VIES service lets you check whether an EU VAT number is valid. For UK VAT numbers, HMRC offers its own checking service.",
      },
      {
        q: "Is an EIN the same as a tax ID number?",
        a: "An EIN is one kind of tax identification number. In the US, TIN is the umbrella term that covers Employer Identification Numbers, Social Security numbers and Individual Taxpayer Identification Numbers. Businesses use an EIN, while individuals may use an SSN or ITIN. When a client asks for your tax ID, they usually want it on a Form W-9 rather than printed on an invoice.",
      },
      {
        q: "How do I get an EIN?",
        a: "US businesses can apply for an EIN for free on the IRS website, and an online application usually gives you the number immediately. Sole proprietors can get one too, which lets you share an EIN with clients instead of your Social Security number. Be careful of websites that charge a fee to apply on your behalf, because the IRS service itself costs nothing.",
      },
      {
        q: "What happens in Australia if I don't put my ABN on an invoice?",
        a: "A business paying you may have to withhold 47% of the payment and send it to the ATO if you don't quote your ABN, unless an exception applies, such as a total payment of $75 or less excluding GST. If you are registered for GST, your ABN must also appear on your tax invoices. Never put your tax file number on an invoice.",
      },
      {
        q: "How can I check a UAE TRN?",
        a: "The UAE Federal Tax Authority provides an online TRN verification service on its website, where you can enter a 15-digit TRN and see whether it belongs to a registered business. Check a supplier's TRN before reclaiming input VAT on their invoice, and check a customer's when it must appear on your tax invoice. Keep a record of each check with the invoice.",
      },
      {
        q: "Do I need a tax ID to send an invoice at all?",
        a: "Not always. In many countries you can invoice before you have a VAT, GST or sales tax registration, as long as you don't charge that tax or show a number you don't hold. Some systems still expect a basic business identifier, such as an ABN in Australia to avoid withholding. Once you register, add the number to every invoice where the rules require it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The tax ID on an invoice is the registration number that identifies your business to the tax authority: for example an EIN in the US, a VAT number in the UK and EU, a TRN in the UAE, or an NTN and STRN in Pakistan. If you are registered for VAT, GST or sales tax, showing your number is usually mandatory on tax invoices; for business customers, many regimes also require theirs. Place it in your business details block, labelled clearly.</p>

<p>This guide explains the main tax identifiers by country, when each must appear on an invoice, how to format them, and the mistakes that get invoices rejected. Our <a href="/invoice-generator">free invoice generator</a> has a tax ID field for both you and your client, so you can follow along as you read.</p>

<p><strong>Important:</strong> This article is general information, not tax advice. Invoice requirements and identifier formats are set by each country and can change. Confirm what you must show with your tax authority or a qualified adviser, particularly before your first invoice in a new country.</p>

<h2>Tax IDs by country at a glance</h2>
<table><thead><tr><th>Country</th><th>Identifier</th><th>Typical format</th><th>On invoices?</th></tr></thead><tbody>
<tr><td>United States</td><td>EIN (Employer Identification Number)</td><td>9 digits, written XX-XXXXXXX</td><td>Not generally required; often shown for B2B</td></tr>
<tr><td>United States</td><td>State sales tax permit number</td><td>Varies by state</td><td>Sometimes expected; check your state</td></tr>
<tr><td>United Kingdom</td><td>VAT registration number</td><td>GB followed by 9 digits</td><td>Required on VAT invoices</td></tr>
<tr><td>EU member states</td><td>VAT identification number</td><td>Country prefix plus digits/characters, e.g. DE + 9 digits</td><td>Required on VAT invoices</td></tr>
<tr><td>United Arab Emirates</td><td>TRN (Tax Registration Number)</td><td>15 digits</td><td>Required on tax invoices</td></tr>
<tr><td>Pakistan</td><td>NTN and STRN</td><td>NTN issued by the FBR; individuals generally use their CNIC number</td><td>Both shown on sales tax invoices</td></tr>
<tr><td>India</td><td>GSTIN</td><td>15 characters</td><td>Required on GST invoices</td></tr>
<tr><td>Australia</td><td>ABN</td><td>11 digits</td><td>Required on tax invoices</td></tr>
<tr><td>Canada</td><td>Business Number with GST/HST account</td><td>9-digit BN plus program identifier, e.g. RT0001</td><td>GST/HST number required on qualifying invoices</td></tr>
</tbody></table>

<h2>United States: EIN and sales tax permits</h2>
<p>An EIN is a nine-digit federal tax ID issued free by the IRS to businesses, including many sole proprietors who want one. There is generally no federal requirement to print an EIN on an invoice, and many small businesses do not. Others include it because business clients find it useful for vendor setup. The usual route for a client to get your tax details for reporting is Form W-9, not the invoice; see <a href="/blog/w9-and-1099-for-contractors">W-9 vs 1099 for contractors</a>.</p>
<p>Never print a Social Security number on an invoice. Invoices are forwarded, stored and emailed widely, and an SSN on them creates identity theft risk.</p>
<p>If you collect sales tax, some states expect or allow your sales tax permit number on invoices, and buyers claiming an exemption will give you their certificate or permit numbers. See <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a>. The <a href="/invoice-generator/usa">USA invoice generator</a> labels the field "EIN" by default.</p>

<h2>United Kingdom and EU: VAT numbers</h2>
<p>Once you are VAT-registered, your VAT number must appear on every VAT invoice you issue. UK VAT numbers are usually shown as "GB" followed by nine digits. EU VAT numbers start with a two-letter country prefix (Greece uses EL) followed by a national format that varies by country.</p>
<p>Some countries allow alternatives. Germany, for example, requires either the national tax number (Steuernummer) or the VAT identification number (USt-IdNr.) on invoices, and the VAT ID is the one used for intra-EU trade.</p>
<p><strong>The customer's VAT number</strong> matters for cross-border B2B. For intra-EU reverse charge services and intra-Community supplies of goods, the customer's VAT number belongs on the invoice and should be validated through the EU's VIES service; HMRC offers its own checker for UK numbers. Our <a href="/blog/reverse-charge-invoice">reverse charge invoice</a> guide explains why. For the full field list on a VAT invoice, see the <a href="/blog/vat-invoice-guide">VAT invoice guide</a>.</p>
<p>UK limited companies also have a Companies House registration number. UK company law requires certain company details, including the registered number, on business letters, order forms and websites, and many companies show it on invoices too. Your Unique Taxpayer Reference (UTR) does not belong on invoices. The <a href="/invoice-generator/uk">UK invoice generator</a> labels the field for a VAT number.</p>

<h2>United Arab Emirates: TRN</h2>
<p>A VAT-registered business in the UAE receives a 15-digit Tax Registration Number from the Federal Tax Authority. A full tax invoice must show the supplier's TRN and, in many cases, the recipient's TRN when the recipient is registered. Our dedicated guide to <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a> covers full and simplified tax invoices. Use the <a href="/invoice-generator/uae">UAE invoice generator</a> to get the TRN label and AED defaults.</p>

<h2>Pakistan: NTN and STRN</h2>
<p>In Pakistan, the National Tax Number identifies income tax registration with the FBR, and the Sales Tax Registration Number identifies sales tax registration. For individuals, the CNIC number is generally used as the NTN. A sales tax invoice normally shows the NTN and STRN of both supplier and registered buyer. Our guide to <a href="/blog/sales-tax-invoice-pakistan">sales tax invoices in Pakistan</a> covers the rest of the required fields, and the <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> includes both labels.</p>

<h2>Customer tax IDs: when to ask and how to verify</h2>
<p>Your own number is only half the picture. For business customers, many VAT and GST regimes expect the buyer's registration number on a full tax invoice, and cross-border reverse charge invoices in the EU depend on it. In the US, buyers claiming a sales tax exemption give you an exemption or resale certificate rather than printing a number on the invoice.</p>
<p>The easiest time to collect a customer's tax ID is at onboarding, before the first invoice is due:</p>
<ul>
<li>Ask for the legal entity name exactly as registered, plus the tax ID, in your new-client form or first email.</li>
<li>Verify it where an official checker exists: VIES for EU VAT numbers, HMRC's service for UK VAT numbers, and the relevant authority's lookup in other countries where one is available.</li>
<li>Save a record of the check (a screenshot or confirmation reference) with the client file, especially for cross-border sales where the number justifies not charging VAT.</li>
<li>Re-check periodically for long-running clients, because registrations can be cancelled.</li>
</ul>
<p>If a customer cannot give you a valid number, do not guess. Ask your adviser whether you should charge local tax instead of applying a reverse charge or exemption.</p>

<h2>Where to put the tax ID on an invoice</h2>
<ol>
<li><strong>Your tax ID</strong> goes in your business details block, under your legal name and address, with a clear label such as "VAT No." or "TRN".</li>
<li><strong>Your client's tax ID</strong> goes in the "Bill to" block under their legal name and address.</li>
<li><strong>Label every number.</strong> A bare string of digits tells a reviewer nothing. Use the official term for the country.</li>
<li><strong>Use the same format on every invoice</strong>, including the country prefix, so automated capture tools match you to the right supplier record.</li>
<li><strong>Do not hide it in the footer</strong> in tiny type. Accounts payable teams look for it near the top.</li>
</ol>
<p>Here is how a header might look for a UK VAT-registered business billing a German customer:</p>
<table><thead><tr><th>From</th><th>Bill to</th></tr></thead><tbody>
<tr><td>Northfield Studio Ltd<br>12 Example Street, Leeds<br>VAT No. GB123456789<br>Company No. 01234567</td><td>Beispiel GmbH<br>Musterstraße 5, Berlin<br>USt-IdNr. DE123456789</td></tr>
</tbody></table>
<p>The numbers above are placeholders, not real registrations.</p>

<h2>Common tax ID mistakes on invoices</h2>
<ul>
<li><strong>Showing a VAT or GST number before registration</strong> is confirmed, or after deregistration.</li>
<li><strong>Typos</strong> in your own or your customer's number, which can cost the customer their tax credit.</li>
<li><strong>Missing customer VAT number</strong> on a reverse charge invoice.</li>
<li><strong>Printing an SSN</strong> or other personal ID that does not need to be there.</li>
<li><strong>Using a different name</strong> on the invoice from the one the tax ID is registered to.</li>
<li><strong>Unlabelled numbers</strong> that leave the reader guessing which is which.</li>
</ul>
<p>For the wider picture of what a tax invoice must contain once you are registered, read our <a href="/blog/tax-invoice-guide">tax invoice guide</a>.</p>

<h2>Add your tax ID to your next invoice</h2>
<p>Open the invoice generator, enter your tax ID and your client's in the labelled fields, and download a PDF. The <a href="/invoice-templates/corporate">Corporate invoice template</a> puts registration numbers where accounts payable teams expect to find them. Check the exact requirement with your tax authority before your first invoice in a new country.</p>
`,
  },
  // 62
  {
    slug: "self-employed-tax-deductions",
    title: "Self-Employed Tax Deductions: 2026 Guide for Freelancers (US)",
    description:
      "The self-employed tax deductions US freelancers most often claim, from home office and mileage to health insurance and retirement, with a worked example.",
    category: "tax-compliance",
    date: "2026-10-22",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "home-office-deduction",
      "ai-tax-preparation",
      "how-to-calculate-depreciation",
      "how-to-track-business-expenses",
      "w9-and-1099-for-contractors",
      "bookkeeping-basics",
      "freelancer-invoice-guide",
    ],
    faqs: [
      {
        q: "What can I write off as self-employed?",
        a: "You can generally deduct ordinary and necessary business expenses, such as software, equipment, a qualifying home office, business mileage, professional fees, advertising and payment processing fees. Personal expenses are not deductible, and mixed-use costs must be split.",
      },
      {
        q: "Can I deduct unpaid invoices?",
        a: "If you use the cash method, as most freelancers do, you generally cannot deduct an unpaid invoice as a bad debt because the income was never reported. Accrual-method businesses that already reported the income may be able to deduct a genuine bad debt.",
      },
      {
        q: "Is the self-employment tax deductible?",
        a: "Half of your self-employment tax is deductible as an adjustment to income. It reduces your income tax, but it does not reduce the self-employment tax itself.",
      },
      {
        q: "Can I deduct my commute?",
        a: "No. Travel between your home and a regular work location is generally a nondeductible commute. Travel from a qualifying home office to client sites, or between work locations, can be deductible.",
      },
      {
        q: "Do I need receipts for every deduction?",
        a: "You need records that prove the amount, date, place and business purpose of each expense. Receipts, invoices, bank statements and a mileage log are the usual evidence, and you should keep them for the IRS retention period.",
      },
      {
        q: "What is the simplified home office deduction?",
        a: "The simplified method lets you deduct $5 per square foot of qualifying home office space, up to 300 square feet, for a maximum of $1,500. The space must be used regularly and exclusively for business.",
      },
      {
        q: "What is the 2026 IRS standard mileage rate?",
        a: "At the time of writing, the IRS business rate for 2026 is 72.5 cents per mile for driving from January 1 to June 30, and 76 cents per mile from July 1, 2026, after a mid-year increase the IRS made because of rising fuel prices. Use the rate for the period when each trip took place, and keep a log of dates, destinations, purposes and miles.",
      },
      {
        q: "Can I deduct expenses from before my business started?",
        a: "Partly. US rules generally let you deduct up to $5,000 of startup costs in the year your business begins, reduced once total startup costs pass $50,000, and amortize the rest over 180 months. Costs such as market research, pre-launch advertising and training can qualify. Keep receipts showing what you spent and the date your business actually began operating.",
      },
      {
        q: "Can a self-employed loss reduce my other income?",
        a: "Often, yes. A genuine Schedule C loss can generally offset other income, such as wages from a job, which lowers your total taxable income. Limits apply, including the at-risk rules, passive activity rules and the excess business loss limit, and the IRS may treat an activity as a hobby if there's no real profit motive. Keep records showing you run it like a business.",
      },
      {
        q: "Can I deduct meals I eat alone while working?",
        a: "Generally not. Everyday meals are personal expenses, even if you eat at your desk or in a cafe while working. Meals can be partly deductible when you're traveling away from home overnight for business, or when you meet a client or business contact and the meal has a clear business purpose, usually at 50%. Keep the receipt and note who attended and why.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Self-employed tax deductions are the ordinary and necessary business expenses US freelancers and sole proprietors subtract from their income, mostly on Schedule C. Common ones include a qualifying home office, business mileage, software and equipment, phone and internet (business share), professional fees, advertising, and payment processing fees, plus adjustments for half of self-employment tax, self-employed health insurance and retirement contributions. Every deduction needs records that prove it.</p>

<p>This guide lists the deductions freelancers most often use, the rules that trip people up, and a worked example showing how deductions reduce both income tax and self-employment tax. Good deductions start with good records, and that starts with sending clean, numbered invoices from our <a href="/invoice-generator">free invoice generator</a> so your income side is complete.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Deduction rules, limits and rates are set by the IRS and Congress and change often, including through 2025 legislation. Check current IRS publications and instructions, or work with a CPA or enrolled agent, before claiming any deduction.</p>

<h2>How self-employed deductions work</h2>
<p>If you are self-employed, you report business income and expenses on Schedule C (Profit or Loss From Business). Your net profit is subject to two taxes: federal income tax and self-employment tax, which funds Social Security and Medicare. The self-employment tax rate is 15.3% (12.4% Social Security, up to an annual wage base, plus 2.9% Medicare), calculated on 92.35% of your net earnings.</p>
<p>That is why business expenses are so valuable: a Schedule C deduction reduces your net profit, which lowers both taxes. A deductible expense must be <strong>ordinary</strong> (common and accepted in your trade) and <strong>necessary</strong> (helpful and appropriate for the business). It does not have to be indispensable.</p>
<p>Income comes first, though. All self-employment income is taxable whether or not a client sends you a 1099; see <a href="/blog/w9-and-1099-for-contractors">W-9 vs 1099 for contractors</a>.</p>

<h2>Common self-employed tax deductions</h2>
<table><thead><tr><th>Deduction</th><th>What it covers</th><th>Key rule</th></tr></thead><tbody>
<tr><td>Home office</td><td>Part of rent or mortgage interest, utilities, insurance, repairs</td><td>Regular and exclusive business use; simplified method $5/sq ft up to 300 sq ft</td></tr>
<tr><td>Vehicle</td><td>Business driving</td><td>Standard mileage rate or actual expenses; commuting excluded; keep a log</td></tr>
<tr><td>Software and subscriptions</td><td>Design, accounting, cloud storage, project tools</td><td>Business-use share only</td></tr>
<tr><td>Equipment</td><td>Computers, cameras, tools, furniture</td><td>Depreciate, or expense under de minimis, Section 179 or bonus rules where eligible</td></tr>
<tr><td>Phone and internet</td><td>Monthly bills</td><td>Deduct the business percentage</td></tr>
<tr><td>Payment processing and bank fees</td><td>Card fees, transfer fees, business account fees</td><td>Fully deductible business costs</td></tr>
<tr><td>Contract labor</td><td>Subcontractors and freelancers you hire</td><td>May trigger 1099 reporting on your side</td></tr>
<tr><td>Professional fees</td><td>Accountant, attorney, tax preparation for the business</td><td>Business portion only</td></tr>
<tr><td>Advertising and marketing</td><td>Website, ads, portfolio hosting, business cards</td><td>Generally fully deductible</td></tr>
<tr><td>Travel</td><td>Airfare, lodging and transport for business trips away from home</td><td>Primarily business purpose; personal days excluded</td></tr>
<tr><td>Business meals</td><td>Meals with clients or while traveling for business</td><td>Generally 50% deductible; entertainment is not deductible</td></tr>
<tr><td>Education</td><td>Courses that maintain or improve skills in your current business</td><td>Not for qualifying for a new trade</td></tr>
</tbody></table>

<h3>Home office deduction</h3>
<p>You can deduct a home office if part of your home is used regularly and exclusively as your principal place of business, or to meet clients. A spare room used only for work usually qualifies; the kitchen table usually does not. The simplified method allows $5 per square foot up to 300 square feet, a maximum of $1,500. The regular method allocates actual home expenses by the percentage of floor space used, and involves depreciation that can matter when you sell the home.</p>

<h3>Vehicle and mileage</h3>
<p>Choose the IRS standard mileage rate or your actual vehicle expenses (business share of fuel, insurance, repairs, depreciation). The standard rate was 70 cents per mile for 2025; the IRS sets a new rate each year, so check the current figure. Either way, keep a contemporaneous log of dates, destinations, purposes and miles. Driving from home to a regular office is commuting and is not deductible.</p>

<h3>Equipment and the de minimis safe harbor</h3>
<p>Larger purchases are normally depreciated over several years, but you may be able to deduct them immediately. The de minimis safe harbor lets many small businesses without audited financial statements expense items costing up to $2,500 each (per item or invoice) if they make the annual election. Section 179 and bonus depreciation can cover larger amounts, and 2025 legislation changed the bonus depreciation rules, so confirm current limits with your preparer.</p>

<h3>Expenses that are not deductible</h3>
<p>Some costs look business-related but are not deductible: everyday clothing (even if you only wear it to client meetings), commuting, fines and penalties paid to a government, political contributions, and the personal share of anything you also use privately. If an expense is partly personal, deduct only the business share and keep a note of how you worked it out, because that calculation is what an examiner will ask to see.</p>

<h2>Deductions that are not on Schedule C</h2>
<p>Some important tax breaks for the self-employed are claimed elsewhere on your return:</p>
<ul>
<li><strong>Half of self-employment tax</strong>, deducted as an adjustment to income.</li>
<li><strong>Self-employed health insurance</strong> premiums for you, your spouse and dependents, if you were not eligible for an employer-subsidized plan, limited to your net self-employment earnings.</li>
<li><strong>Retirement contributions</strong> to a SEP IRA, solo 401(k) or SIMPLE IRA. Contribution limits are set annually and depend on your net earnings.</li>
<li><strong>Qualified business income (QBI) deduction</strong> under Section 199A, generally up to 20% of qualified business income, subject to income-based limits and restrictions for some service businesses. Legislation in 2025 extended this deduction beyond its original 2025 expiry.</li>
</ul>

<h2>Worked example: a freelance designer's deductions</h2>
<p>A freelance designer using the cash method collects $85,000 from clients in the year and has the following expenses (mileage uses the 2025 standard rate purely for illustration):</p>
<table><thead><tr><th>Expense</th><th>Calculation</th><th>Deduction</th></tr></thead><tbody>
<tr><td>Software subscriptions</td><td>12 × $100</td><td>$1,200</td></tr>
<tr><td>Home office (simplified)</td><td>200 sq ft × $5</td><td>$1,000</td></tr>
<tr><td>Business mileage</td><td>3,000 miles × $0.70</td><td>$2,100</td></tr>
<tr><td>Phone (50% business)</td><td>50% × $960</td><td>$480</td></tr>
<tr><td>Payment processing fees</td><td>Per statements</td><td>$2,400</td></tr>
<tr><td>Contract illustrator</td><td>Two projects</td><td>$4,000</td></tr>
<tr><td>Laptop (de minimis election)</td><td>One item under $2,500</td><td>$1,800</td></tr>
<tr><td>Accountant fees</td><td>Business return</td><td>$700</td></tr>
<tr><td>Website and ads</td><td>Per invoices</td><td>$1,320</td></tr>
<tr><td><strong>Total expenses</strong></td><td>&nbsp;</td><td><strong>$15,000</strong></td></tr>
</tbody></table>
<ul>
<li>Net profit: $85,000 − $15,000 = <strong>$70,000</strong></li>
<li>Earnings subject to self-employment tax: $70,000 × 92.35% = $64,645</li>
<li>Self-employment tax: $64,645 × 15.3% ≈ <strong>$9,890.69</strong></li>
<li>Deductible half of self-employment tax: ≈ $4,945.34</li>
</ul>
<p>Without the $15,000 of expenses, self-employment tax alone would have been about $12,010.12 ($85,000 × 92.35% × 15.3%), roughly $2,119 more, before counting the income tax saving. This simplified example ignores the QBI deduction, health insurance and retirement contributions, which could reduce income tax further.</p>

<h2>Unpaid invoices are not a deduction for most freelancers</h2>
<p>Freelancers often ask whether a client who never paid can be written off. If you use the cash method, you only report income when you are paid, so an unpaid invoice was never income and there is nothing to deduct. Accrual-method businesses that already reported the income may be able to claim a business bad debt. Our comparison of <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> explains the difference. The better strategy is to get paid in the first place; see <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</p>

<h2>Records that support your deductions</h2>
<ol>
<li>Keep every receipt and supplier invoice, digitally if possible.</li>
<li>Use a separate business bank account so business and personal spending are not mixed.</li>
<li>Keep a mileage log and a note of how you calculated home office and phone percentages.</li>
<li>Number and file your own invoices so income reconciles to bank deposits; our <a href="/blog/freelancer-invoice-guide">freelancer invoice guide</a> covers the habits.</li>
<li>Reconcile monthly rather than once a year; see <a href="/blog/bookkeeping-basics">bookkeeping for small business</a>.</li>
<li>Keep records for the IRS retention period; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
</ol>
<p>Because no tax is withheld from self-employment income, most freelancers also make quarterly estimated payments, generally due in mid-April, mid-June, mid-September and mid-January. Setting aside a fixed share of each payment you receive makes those dates far less painful. For running the wider business side, our <a href="/blog/small-business-invoice-guide">small business invoicing guide</a> is a good companion.</p>

<p>Deductions lower the bill, but you usually still pay during the year. See <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a> for the due dates and the safe harbor rules.</p>

<h2>Start with clean invoices</h2>
<p>Accurate deductions depend on accurate books, and accurate books start with every invoice you send. Use the <a href="/invoice-generator/usa">USA invoice generator</a> to create numbered, dated invoices in USD, and choose a simple layout such as the <a href="/invoice-templates/startup">Startup invoice template</a>, or browse all <a href="/invoice-templates">invoice templates</a>. Then talk to a tax professional about which deductions apply to you this year.</p>
`,
  },
];
