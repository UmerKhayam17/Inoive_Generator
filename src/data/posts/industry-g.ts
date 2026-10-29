import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_G: PostDraft[] = [
  {
    slug: "property-management-invoice-template",
    title: "Property Management Invoice Template: Fees and Owner Billing",
    description:
      "Build a property management invoice that bills owners clearly: management fee %, leasing fees, maintenance markup and owner statements, with a worked sample.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["rent-invoice-template", "rent-receipt-template", "markup-vs-margin"],
    faqs: [
      {
        q: "What is the difference between a property management invoice and an owner statement?",
        a: "A property management invoice is your bill to the owner for your fees and any costs you paid on their behalf. An owner statement is a monthly report of everything that moved through the owner's account: rent collected, expenses paid, your fees deducted, reserves held and the net amount distributed. Many managers deduct fees from rent and send only the statement, but owners and their accountants often still want a numbered invoice for the fees themselves.",
      },
      {
        q: "Is the management fee charged on collected rent or scheduled rent?",
        a: "It depends entirely on your management agreement. Charging on collected rent means you earn nothing on a month the tenant does not pay, which owners usually prefer. Charging on scheduled or gross rent means the fee is due even when rent is late or unpaid. Whichever you use, name the base on the invoice, for example 8% of rent collected for October, so the owner can check the calculation against the rent ledger.",
      },
      {
        q: "Can a property manager add a markup to maintenance invoices?",
        a: "Many managers do, either as a percentage on vendor bills or as a flat coordination fee, but it must be allowed by the management agreement and, ideally, shown openly. Hidden markups, where the owner sees only an inflated vendor total, damage trust and can breach agreements or local rules. Show the vendor's cost and your markup as separate lines, and keep the vendor's original invoice on file to attach if the owner asks.",
      },
      {
        q: "How do I bill an owner for a leasing or tenant placement fee?",
        a: "Bill the leasing fee once, when the lease is signed or the tenant moves in, as your agreement specifies. Describe the unit, tenant start date and the basis of the fee, such as 50% of the first month's rent of $1,850. If the fee is refundable when a tenant leaves early, say so in the notes. Keep it as its own line rather than folding it into the monthly management fee, so the owner can see the one-off cost.",
      },
      {
        q: "Should tenant security deposits appear on the owner invoice?",
        a: "Usually not as a charge. Security deposits are normally held in a separate trust or escrow account under local landlord and tenant law, and they belong to the tenant until the lease ends and deductions are settled. They may appear on the owner statement as a balance held. Rules on where deposits must be kept, and whether interest is owed, differ by state and country, so check the local requirements.",
      },
      {
        q: "Do property managers have to send owners a 1099?",
        a: "In the United States, a property manager who collects rent for an owner generally reports the rents paid to the owner on Form 1099-MISC, and owners may in turn report payments to vendors. Reporting thresholds changed for payments made after 2025, so check the current IRS instructions for the year you are filing. Your invoices and owner statements are the records that support those forms, so keep them consistent.",
      },
      {
        q: "How often should a property manager invoice owners?",
        a: "Monthly is the norm, timed to the owner statement after rent is collected. One-off items such as leasing fees, lease renewal fees or large repair projects can be billed on the same monthly invoice as separate lines or on their own invoice when they happen. Pick one approach and keep it consistent, because owners with several properties compare invoices month to month and notice irregular timing.",
      },
      {
        q: "Can I use a free invoice generator for property management billing?",
        a: "Yes, for small portfolios. Enter the management fee, leasing fee, maintenance costs and markup as line items, add the property address in the description, and download a PDF for each owner. The generator does not hold trust accounts, collect rent, send invoices or produce owner statements automatically, so larger portfolios usually pair property management software with invoices for the occasional fee that falls outside the system.",
      },
      {
        q: "What payment terms should a property management invoice use?",
        a: "When fees are deducted from rent you collect, the invoice is effectively paid on issue and should show the deduction as the amount paid with a zero balance. When the owner must pay you directly, for example when rent did not cover a repair, use short terms such as 15 days and state how the owner should pay. Put any late fee or reserve top-up policy from the agreement in the notes.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A property management invoice bills a property owner for your management fee (often a percentage of collected rent), one-off fees such as leasing or renewal fees, and maintenance costs you paid on their behalf, with any agreed markup shown separately. Each line should name the property, the period and the fee basis from the management agreement.</p>

<p>Property managers sit in an unusual billing position. You collect money from tenants, pay vendors for repairs, hold deposits, and then take your own fee out of what is left. Owners see the result as a single net payment, and when something looks off they want to know exactly where every dollar went. A clear property management invoice, paired with a monthly owner statement, answers that question before it is asked.</p>

<p>This guide covers the fee structures managers commonly use, what each owner invoice should contain, how to show maintenance markups honestly, how the invoice relates to the owner statement, and a worked sample with the arithmetic shown. It is written for independent managers, small firms and landlords who manage units for friends or family and want their billing to look professional.</p>

<h2>Property management invoice vs owner statement</h2>
<p>These two documents are often confused, and many managers send only one. They do different jobs:</p>
<table><thead><tr><th></th><th>Owner invoice</th><th>Owner statement</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Bills the owner for your fees and costs</td><td>Reports all money in and out of the owner's account</td></tr>
<tr><td>Shows</td><td>Management fee, leasing fee, maintenance, markup, other charges</td><td>Rent collected, expenses paid, fees deducted, reserves, net distribution</td></tr>
<tr><td>Numbered?</td><td>Yes, unique and sequential</td><td>Usually by period, such as October 2026</td></tr>
<tr><td>Used by</td><td>Owner's accountant as an expense record</td><td>Owner to reconcile rent and distributions</td></tr>
</tbody></table>
<p>When you deduct fees from rent before distributing, the invoice and the statement must agree: the fee total on the invoice should equal the fees line on the statement. The statement works like a <a href="/blog/statement-of-account">statement of account</a> for the owner, while the invoice is the formal record of what you charged.</p>

<h2>Common property management fee structures</h2>
<p>The fee structure comes from your management agreement, and the invoice should mirror its wording. The table below lists the models you are most likely to bill. Percentages and amounts vary widely by market, property type and service level, so the examples are illustrative only.</p>
<table><thead><tr><th>Fee type</th><th>How it is calculated</th><th>When it is billed</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Management fee (percentage)</td><td>Percent of rent collected, or of scheduled rent</td><td>Monthly</td><td>Management fee, 8% of $4,250 rent collected, Oct</td></tr>
<tr><td>Management fee (flat)</td><td>Fixed amount per unit or per door</td><td>Monthly</td><td>Management fee, 2 units x $95</td></tr>
<tr><td>Leasing or tenant placement fee</td><td>Share of first month's rent, or flat</td><td>Once, at lease signing</td><td>Leasing fee, Unit B, 50% of $1,850</td></tr>
<tr><td>Lease renewal fee</td><td>Flat or small percentage</td><td>At renewal</td><td>Lease renewal, Unit A, 12-month term</td></tr>
<tr><td>Maintenance markup or coordination fee</td><td>Percent of vendor bill, or flat per job</td><td>With each repair</td><td>Coordination fee, 10% of $280 plumbing</td></tr>
<tr><td>Onboarding or setup fee</td><td>Flat</td><td>Once, at start of contract</td><td>New property setup, 14 Elm St</td></tr>
<tr><td>Inspection fee</td><td>Flat per visit</td><td>Per inspection</td><td>Move-in inspection with photos</td></tr>
<tr><td>Vacancy or minimum fee</td><td>Flat when no rent is collected</td><td>Monthly while vacant</td><td>Vacant unit oversight, Unit B</td></tr>
<tr><td>Hourly project work</td><td>Hours x rate</td><td>As performed</td><td>Insurance claim coordination, 3 hrs</td></tr>
</tbody></table>
<h3>Collected rent vs scheduled rent</h3>
<p>The single most important word on a percentage-based invoice is the fee base. "8% of rent collected" and "8% of scheduled rent" produce different numbers in any month a tenant pays late, pays partly or does not pay at all. Write the base on every invoice line, and show the rent figure you applied it to, so the owner can match it to the rent ledger.</p>

<h2>What to include on a property management invoice</h2>
<p>Use this checklist for every owner invoice:</p>
<ul>
<li>Your business name, address, contact details and, where required, your broker or property management license number.</li>
<li>A unique invoice number and the invoice date. Keep owner invoices in their own sequence if that helps; our <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format such as PM-2026-0142.</li>
<li>The owner's name, or the owning LLC or trust, with billing address.</li>
<li>The property address and unit number on every line, especially for owners with several properties.</li>
<li>The billing period, such as 1 to 31 October 2026.</li>
<li>The management fee with its rate and base, such as 8% of rent collected.</li>
<li>One-off fees: leasing, renewal, inspection, setup, with the unit and event described.</li>
<li>Maintenance and repair costs with the vendor name, date, the vendor's invoice number and amount.</li>
<li>Any markup or coordination fee as a separate line.</li>
<li>Amount deducted from rent, if applicable, and the balance due from the owner.</li>
<li>Payment terms, how to pay, and a reference to the management agreement date.</li>
</ul>

<h2>Billing maintenance and repairs honestly</h2>
<p>Maintenance is where owner disputes start. A tenant reports a leak, you call a plumber, the plumber bills you, and the cost shows up on the owner's next invoice. The owner did not see the work and may not have approved it. Three habits keep this smooth.</p>
<p>First, follow the approval limit in your agreement. Most agreements let the manager authorize repairs up to a set amount without asking, with emergencies excepted. Note on the invoice line whether the work was within the approval limit, owner-approved or an emergency.</p>
<p>Second, pass the vendor's cost through at cost and show your markup or coordination fee on its own line. Whether you think of it as a markup on cost or a margin on the total changes the percentage you quote, so read our explainer on <a href="/blog/markup-vs-margin">markup vs margin</a> before you write the percentage into an agreement. Our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on invoices</a> covers how to present pass-through costs in general.</p>
<p>Third, keep the vendor's original invoice and attach it or make it available. When an owner can see the plumber's bill for $280 next to your $28 coordination fee, there is little to argue about. When they see only $308 for "plumbing", they will ask.</p>
<h3>Owner-paid vs tenant-paid repairs</h3>
<p>Some repairs are the tenant's responsibility under the lease, such as damage beyond normal wear. Bill those to the tenant, not the owner, using a tenant charge or a separate invoice, and keep the paperwork with the tenant ledger. If the tenant does not pay and the cost is later taken from the deposit, record that on the owner statement when the deposit is settled.</p>

<h2>Sample property management invoice</h2>
<p>Below is an illustrative October invoice for an owner with two units. All rates are examples only. In this example the manager collected rent of $2,400 for Unit A and $1,850 for Unit B, a new tenant moved into Unit B, and a plumber repaired a leak in Unit A.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Management fee, 8% of rent collected ($2,400 + $1,850 = $4,250), Oct 2026</td><td>1</td><td>$340.00</td><td>$340.00</td></tr>
<tr><td>Leasing fee, Unit B, 50% of first month's rent of $1,850</td><td>1</td><td>$925.00</td><td>$925.00</td></tr>
<tr><td>Plumbing repair, Unit A, Ace Plumbing inv. #5521, 9 Oct (at cost)</td><td>1</td><td>$280.00</td><td>$280.00</td></tr>
<tr><td>Maintenance coordination fee, 10% of $280.00</td><td>1</td><td>$28.00</td><td>$28.00</td></tr>
<tr><td>Move-in inspection with photo report, Unit B</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$1,648.00</strong></td></tr>
<tr><td colspan="3">Deducted from October rent collected</td><td>-$1,648.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$0.00</strong></td></tr>
</tbody></table>
<p>The arithmetic, step by step:</p>
<ul>
<li>Rent collected: $2,400 + $1,850 = $4,250.</li>
<li>Management fee: $4,250 x 8% = $340.00.</li>
<li>Leasing fee: $1,850 x 50% = $925.00.</li>
<li>Coordination fee: $280.00 x 10% = $28.00.</li>
<li>Total: $340.00 + $925.00 + $280.00 + $28.00 + $75.00 = $1,648.00.</li>
<li>Net owner distribution: $4,250.00 - $1,648.00 = $2,602.00.</li>
</ul>
<p>The matching owner statement would show rent collected of $4,250.00, fees and expenses of $1,648.00 (referencing this invoice number) and a distribution of $2,602.00, plus any reserve the agreement requires you to hold back. If the reserve is topped up from rent, show that as its own statement line rather than on the invoice, because it is still the owner's money.</p>
<p>To build an invoice like this in our <a href="/invoice-generator">free invoice generator</a>, enter each fee and cost as a line item with the property address in the description, put the amount deducted from rent in the amount paid field, and download the PDF. A clean, structured design such as the <a href="/invoice-templates/corporate">corporate invoice template</a> suits owners who pass invoices to an accountant. The generator creates the invoice only; it does not collect rent, hold trust funds, send invoices or produce owner statements, and it applies one tax rate to the whole invoice, so add any tax as its own line if only some fees are taxable in your area.</p>

<h2>Monthly billing workflow</h2>
<p>A repeatable monthly routine keeps owner billing accurate:</p>
<ol>
<li>Close the rent ledger for the month and confirm what was actually collected per unit.</li>
<li>Gather vendor invoices paid from the owner's funds and check each against the approval limit.</li>
<li>Calculate the management fee on the correct base and add any one-off fees triggered that month.</li>
<li>Issue the owner invoice with a new number, then prepare the owner statement that references it.</li>
<li>Distribute the net amount and record the payment details on the statement.</li>
</ol>
<p>Because the management fee recurs every month, it helps to keep a saved template per owner and change only the period and amounts. Our <a href="/blog/recurring-invoices-guide">guide to recurring invoices</a> explains how to keep repeat billing consistent without reusing invoice numbers.</p>
<h3>Rent invoices and receipts to tenants</h3>
<p>Owner billing is only one side of the job. Tenants may need rent invoices, especially commercial tenants whose accountants require them, and receipts for rent paid in cash. Our <a href="/blog/rent-invoice-template">rent invoice template</a> and <a href="/blog/rent-receipt-template">rent receipt template</a> guides cover the tenant-facing documents, which should never show your management fee.</p>

<h2>Tax and reporting notes</h2>
<p>Management fees are business income for you and a deductible expense for most rental owners, so owners and their accountants rely on your invoices at tax time. In the United States, property managers who collect rent for owners generally report rents on Form 1099-MISC; see the IRS page <a href="https://www.irs.gov/forms-pubs/about-form-1099-misc" target="_blank" rel="noopener noreferrer">About Form 1099-MISC</a> for current instructions, and our explainer on <a href="/blog/1099-nec-vs-1099-misc-vs-1099-k">1099-NEC vs 1099-MISC vs 1099-K</a> for how the forms differ. Whether sales tax or VAT applies to property management services depends on your state or country, so confirm locally before adding tax to the invoice.</p>
<p>Trust accounting rules for rent and security deposits are set by state real estate regulators and local landlord and tenant law. They affect how money flows, not just how invoices look, so check the rules that apply to your license before you start deducting fees from rent.</p>

<h2>Common mistakes on property management invoices</h2>
<ul>
<li><strong>No fee base.</strong> "Management fee: $340" invites questions. "8% of $4,250 rent collected" does not.</li>
<li><strong>Hidden markups.</strong> Showing only a marked-up vendor total breaks trust and may breach the agreement.</li>
<li><strong>Missing property address.</strong> Owners with several units cannot tell which property a charge belongs to.</li>
<li><strong>Invoice and statement that disagree.</strong> The fees on the invoice must equal the fees deducted on the statement.</li>
<li><strong>Charging tenant damage to the owner.</strong> Bill the responsible party, and record deposit deductions when the lease ends.</li>
<li><strong>Treating deposits as income.</strong> Security deposits usually belong in trust, not on your invoice.</li>
<li><strong>Repairs above the approval limit without consent.</strong> Note approvals on the line, and keep the email.</li>
<li><strong>Reusing last month's invoice number.</strong> Copy the template, not the number.</li>
</ul>

<h2>Getting owner billing right</h2>
<p>A good property management invoice lets an owner, or their accountant, trace every charge to a clause in the management agreement, a rent figure or a vendor bill. Keep the fee base visible, separate pass-through costs from your own fees, and make sure the invoice and owner statement tell the same story. Do that consistently and month-end questions shrink to almost nothing. For more trade-specific layouts, browse our <a href="/blog/category/industry-invoices">industry invoice guides</a>.</p>
`,
  },
  {
    slug: "dj-invoice-template",
    title: "DJ Invoice Template: Event Rates, Deposits and Travel",
    description:
      "Use this DJ invoice template guide to bill weddings, parties and corporate gigs: package rates, deposits, overtime, travel and equipment add-ons, with a sample.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "dj-rates",
      "musician-invoice-template",
      "event-planner-invoice-template",
      "deposit-invoice",
      "reimbursable-expenses-invoice",
    ],
    faqs: [
      {
        q: "What should a DJ invoice include?",
        a: "Include your name or business name, contact details and any tax number, a unique invoice number and date, and the client's name and billing address. Add the event date, venue, start and end times, the package or hourly rate, each add-on such as lighting or ceremony sound, overtime, travel, the deposit already paid and the balance due with its due date. Reference the signed contract and note your cancellation terms.",
      },
      {
        q: "How much deposit should a DJ ask for?",
        a: "There is no standard figure. Many DJs ask for a fixed retainer or a percentage of the total to hold the date, often stated as non-refundable because turning away other bookings is a real cost. Whatever you choose, put the amount and refund rules in the contract, invoice the deposit separately when the client books, and show it as paid on the final invoice so the balance is clear.",
      },
      {
        q: "When should the DJ balance be paid?",
        a: "Many DJs require the balance before the event, commonly one to two weeks ahead, so they are not chasing payment after the party. Others collect on the night or invoice afterward for corporate clients that pay on terms. State the due date on the invoice and in the contract. If overtime is possible, explain that extra hours will be billed after the event at the agreed rate.",
      },
      {
        q: "How do DJs charge for overtime?",
        a: "Most DJs quote a package for a set number of hours and an hourly rate for extra time requested on the night, sometimes in half-hour blocks. Agree on the overtime rate in the contract and have the client or planner confirm the extension at the event, ideally in writing or by text. Bill overtime on its own line after the event, showing the hours and the rate, rather than folding it into the package.",
      },
      {
        q: "Should travel be on a DJ invoice?",
        a: "Yes, if your contract says travel is charged. Common approaches are a free radius with a per-mile fee beyond it, a flat travel fee by zone, or reimbursement of actual costs such as tolls, parking, ferry fares or hotel nights for distant events. Show travel as a separate line with the basis, for example 60 miles beyond the free radius at $0.75 per mile, so the client can check it.",
      },
      {
        q: "Do DJs charge sales tax?",
        a: "It depends on where you work. Some US states tax entertainment or equipment rental, others do not tax DJ services at all, and in VAT or GST countries a registered DJ charges tax on the full fee. Check with your state revenue department or tax authority. If only part of your invoice is taxable, such as equipment rental, enter the tax as its own line so the right base is taxed.",
      },
      {
        q: "What happens to the deposit if a wedding is cancelled?",
        a: "That depends on the contract. Many DJ contracts keep the deposit if the client cancels and may require a larger share of the fee for late cancellations. If you cancel, the deposit is normally refunded in full. When a cancellation fee is due, issue an invoice for it that references the contract clause, and credit any amounts already paid so the client sees the final position.",
      },
      {
        q: "Do event venues ask DJs for a W-9?",
        a: "In the United States, businesses that pay independent contractors, including venues, agencies and corporate clients, commonly ask for Form W-9 so they can issue a 1099 if required. Private clients booking a wedding usually do not. Keep a completed W-9 ready to send with your invoice to business clients, because accounts payable teams often will not release payment until they have it.",
      },
      {
        q: "Can I make a DJ invoice with a free invoice generator?",
        a: "Yes. Enter the package, add-ons, overtime and travel as line items, set a tax rate if you charge one, put the deposit in the amount paid field and download a PDF to email or text to the client. The generator does not send invoices or take card payments, so add your payment link or bank details in the notes and use your own payment app to collect.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A DJ invoice template should show the event date, venue and set times, your package or hourly rate, each add-on such as lighting or ceremony sound, overtime, travel, the deposit already paid and the balance due. Reference the signed contract and state the due date so the client pays before the music starts.</p>

<p>DJs are paid for a few hours on the night, but the work starts months earlier with the first inquiry and the deposit. In between come planning calls, playlist requests, equipment prep and travel. When the invoice shows only "DJ services: $1,500", clients wonder what they paid for and planners cannot match it to the quote. A clear DJ invoice template lays out the package, every add-on and every payment, so the final balance is never a surprise.</p>

<p>This guide covers the pricing models mobile and club DJs use, what to put on every invoice, how to handle deposits, overtime and travel, and a worked sample for a wedding. It is written for wedding and party DJs, corporate event DJs and anyone who books gigs directly rather than through an agency that handles billing.</p>

<h2>How DJs price events</h2>
<p>Your invoice should mirror the way you quoted the job. The table below summarizes the common models. Prices vary widely by city, experience and event type, so treat any figures in this guide as illustrative.</p>
<table><thead><tr><th>Pricing model</th><th>How it works</th><th>Best for</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Package</td><td>Fixed price for a set number of hours with standard sound and basic lighting</td><td>Weddings, private parties</td><td>Wedding reception package, 5 hours</td></tr>
<tr><td>Hourly</td><td>Rate per hour, often with a minimum booking</td><td>Bars, small parties, corporate mixers</td><td>DJ performance, 4 hrs x $150</td></tr>
<tr><td>Flat gig fee</td><td>Single fee for a set slot</td><td>Club nights, festivals</td><td>Headline set, 11 pm to 1 am</td></tr>
<tr><td>Tiered packages</td><td>Bronze, silver, gold with more hours and gear</td><td>Wedding DJs with standard offers</td><td>Gold package incl. uplighting and MC</td></tr>
<tr><td>Add-ons</td><td>Priced per item or per fixture</td><td>All event types</td><td>Uplighting, 12 fixtures x $25</td></tr>
<tr><td>Overtime</td><td>Hourly or half-hourly beyond the booked time</td><td>Any event that runs late</td><td>Overtime, 1 hr x $200</td></tr>
</tbody></table>
<p>Packages are easiest for clients to understand, but itemize what the package includes on the invoice or in the notes: hours, setup time, sound system, wireless microphones, basic lighting and MC duties. That list protects you when a client later says they thought the dance floor lighting was included.</p>
<h3>Setup time is not playing time</h3>
<p>Spell out whether the quoted hours are performance hours or include load-in and setup. A five-hour reception package usually means five hours of music, with setup before guests arrive at no extra charge. If you bill separately for early setup, for example when a venue requires you to load in before lunch for an evening event, add an early setup line rather than quietly absorbing the time.</p>

<h2>What to include in a DJ invoice template</h2>
<p>Use this checklist each time you bill an event, and build it into your DJ invoice template so nothing is missed:</p>
<ul>
<li>Your name or business name, phone, email and website, plus a tax registration number if you are registered for sales tax, VAT or GST.</li>
<li>A unique invoice number and the invoice date. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a pattern such as DJ-2026-031.</li>
<li>The client's name and billing address, and the company name and PO number for corporate events.</li>
<li>Event type, date, venue name and address, and contracted start and end times.</li>
<li>The package or performance fee with the hours it covers.</li>
<li>Each add-on on its own line: ceremony sound, cocktail hour setup, uplighting, photo booth, fog machine, extra speakers, karaoke.</li>
<li>Overtime hours and rate, if any.</li>
<li>Travel fees and reimbursable costs such as parking, tolls or a hotel night.</li>
<li>Tax, if you charge it, on the correct base.</li>
<li>Deposit received with its date, and the balance due with its due date.</li>
<li>Payment methods, a reference to the signed contract and your cancellation terms.</li>
</ul>
<p>If you work events alongside planners, it helps to match their format. Our <a href="/blog/event-planner-invoice-template">event planner invoice template</a> guide shows what planners expect from vendors like you.</p>

<h2>Deposits and retainers</h2>
<p>A deposit turns an inquiry into a booking. Once you hold a date, you turn away other clients, so most DJs ask for a deposit or retainer at contract signing and describe it as non-refundable if the client cancels. Invoice the deposit on its own, with a clear description such as "Retainer to reserve 14 June 2027 wedding, applied to final balance". Our guide to the <a href="/blog/deposit-invoice">deposit invoice</a> explains how to word it and how to credit it later.</p>
<p>On the final invoice, show the full value of the event first, then subtract the deposit as a payment. Clients should see both the total cost and what they still owe. When the balance is paid, send a receipt; the <a href="/blog/payment-receipt-template">payment receipt template</a> guide covers what it should show.</p>
<h3>Cancellation and rescheduling</h3>
<p>Weddings move and corporate parties get cancelled. Your contract should say what happens in each case: whether the deposit is kept, whether a percentage of the full fee becomes due inside a certain number of days, and whether a reschedule moves the deposit to the new date. If a fee becomes payable, issue a DJ invoice for it that quotes the contract clause. Our <a href="/blog/freelance-contract-template">freelance contract template</a> guide covers how to write cancellation terms clients can follow.</p>

<h2>Overtime, travel and expenses</h2>
<p>Overtime is the most common reason a DJ invoice changes after the event. The party is going well, the couple asks for another hour, and you agree. To avoid a dispute later:</p>
<ul>
<li>Put the overtime rate in the contract, in full hours or half-hour blocks.</li>
<li>Get the request confirmed on the night by the client or planner, by text if possible.</li>
<li>Bill it as a separate line after the event with the times, such as "Overtime 11 pm to midnight, 1 hr x $200".</li>
</ul>
<p>Travel works best with a simple published rule. Some DJs include a radius from their base at no charge and bill a per-mile fee beyond it; others charge flat zone fees. For distant events, actual costs such as parking, tolls, ferries and hotel nights can be passed through. List them separately and keep receipts, as our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses</a> explains. Never hide travel inside the package price for one client and charge it separately for another; inconsistency is what clients notice.</p>

<h2>Sample DJ invoice with the arithmetic</h2>
<p>Below is an illustrative wedding invoice built from a simple DJ invoice template. All prices are examples, not market rates, and no tax is charged in this example.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Wedding reception package, 14 June 2027, 6 pm to 11 pm (sound, wireless mics, MC, dance lighting)</td><td>1</td><td>$1,200.00</td><td>$1,200.00</td></tr>
<tr><td>Ceremony sound add-on, garden ceremony, 4:30 pm</td><td>1</td><td>$250.00</td><td>$250.00</td></tr>
<tr><td>Uplighting, per fixture</td><td>12</td><td>$25.00</td><td>$300.00</td></tr>
<tr><td>Overtime, 11 pm to midnight, approved by couple</td><td>1</td><td>$200.00</td><td>$200.00</td></tr>
<tr><td>Travel, miles beyond 30-mile free radius</td><td>56</td><td>$0.75</td><td>$42.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$1,992.00</strong></td></tr>
<tr><td colspan="3">Less retainer paid 10 Jan 2027</td><td>-$600.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$1,392.00</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Uplighting: 12 x $25.00 = $300.00.</li>
<li>Travel: 56 x $0.75 = $42.00.</li>
<li>Total: $1,200.00 + $250.00 + $300.00 + $200.00 + $42.00 = $1,992.00.</li>
<li>Balance due: $1,992.00 - $600.00 = $1,392.00.</li>
</ul>
<p>In practice many DJs send the pre-event invoice without the overtime line, collect the balance before the wedding, and then send a short follow-up invoice for overtime. Both approaches work, as long as each invoice has its own number and the client can see what was already paid.</p>
<p>To build this in our <a href="/invoice-generator">free invoice generator</a>, add each line with quantity and rate, enter the retainer in the amount paid field, and download the PDF. A bold, dark layout such as the <a href="/invoice-templates/dark">dark invoice template</a> suits a DJ brand, especially with your logo at the top. The generator applies one tax rate to the whole invoice, so if only equipment rental is taxable where you work, add the tax as its own line instead. It does not send the invoice or take payment, so include your payment link or bank details in the notes.</p>

<h2>Corporate and venue clients</h2>
<p>Corporate events and venues pay differently from couples. Expect to provide a formal invoice with the company's legal name, the event name and a PO number, and expect payment on terms such as 30 days rather than before the event. Many will ask for a certificate of insurance before you load in and, in the United States, a completed <a href="https://www.irs.gov/forms-pubs/about-form-w-9" target="_blank" rel="noopener noreferrer">Form W-9</a> before they release payment. Our guide to <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 forms for contractors</a> explains what happens to that information.</p>
<p>If a corporate client is slow to pay, your contract's late payment clause matters. See our overview of <a href="/blog/late-payment-fees">late payment fees</a> for how to word one that is enforceable and reasonable.</p>

<h2>Common mistakes on DJ invoices</h2>
<ul>
<li><strong>No event details.</strong> An invoice without the date, venue and times is hard for a client or planner to match to a booking.</li>
<li><strong>Package with no inclusions.</strong> List what the package covers so add-ons are clearly extra.</li>
<li><strong>Overtime without confirmation.</strong> Bill only extensions the client approved, and note who approved them.</li>
<li><strong>Forgetting the deposit.</strong> Always subtract the retainer and show the balance, or the client may pay twice and expect a refund.</li>
<li><strong>Vague travel charges.</strong> State miles and rate, or the zone fee, not just "travel".</li>
<li><strong>Taxing everything or nothing.</strong> Check your local rules, especially for equipment rental.</li>
<li><strong>Billing the wrong party.</strong> If a planner or venue booked you, confirm who pays before you invoice the couple.</li>
</ul>

<h2>Making the final invoice easy to pay</h2>
<p>The best DJ invoice template is one the client can read in thirty seconds: the event at the top, the package and add-ons in the middle, payments and balance at the bottom, and a due date that lands before the party. Keep a saved version with your standard package and add-ons, adjust it per event, and send it the day the contract is signed. For more trade-specific examples, browse our <a href="/blog/category/industry-invoices">industry invoice guides</a>.</p>
`,
  },
  {
    slug: "snow-removal-invoice-template",
    title: "Snow Removal Invoice Template: Per Push, Seasonal and Salt",
    description:
      "A snow removal invoice template guide for plow operators: bill per push, per hour or seasonal contracts, add salting and trigger depths, with a worked sample.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-much-to-charge-for-lawn-mowing",
      "landscaping-invoice-template",
      "recurring-invoices-guide",
      "how-to-invoice-for-hourly-work",
    ],
    faqs: [
      {
        q: "What should a snow removal invoice include?",
        a: "Include your business details, a unique invoice number and date, the client's name and the service address. List each visit by date and time with the service performed, such as plowing, shoveling, salting or hauling, the snowfall depth if billing depends on it, the rate and the amount. Add the contract type, the trigger depth, any seasonal installment, tax if applicable, payment terms and the due date.",
      },
      {
        q: "What is a trigger depth in a snow removal contract?",
        a: "The trigger depth is the amount of snow, often measured in inches, that must fall before the contractor is required to plow. A contract might say service begins at 2 inches, with salting only for lighter events or ice. Stating the trigger on the invoice shows the client why a visit happened and why a light dusting did not trigger a charge. Record the depth you measured at each visit.",
      },
      {
        q: "Should I charge per push or seasonal for snow removal?",
        a: "Per push suits clients who want to pay only when it snows, and it protects you in heavy winters. Seasonal contracts give both sides a predictable cost, but you carry the risk of a heavy season unless the contract caps the number of events or total inches. Many contractors offer both, or a hybrid with a seasonal base and per-event charges once a cap is exceeded.",
      },
      {
        q: "How do I bill salt and ice melt?",
        a: "Agree on it in the contract. Common methods are a price per application, a price per bag or pound of material, or salting included in a seasonal fee. Show each application on the invoice with its date, separate from plowing, so the client can see why salt was applied on days without much snow, such as freezing rain or refreeze after melting.",
      },
      {
        q: "How often should I invoice snow removal customers?",
        a: "For per-push customers, many contractors invoice after each storm or monthly with every visit listed. Seasonal contracts are often billed in equal installments across the season, such as November through March, with any extras on the same invoice. Monthly invoicing reduces paperwork for residential clients, while commercial clients may want one invoice per event to match their own records.",
      },
      {
        q: "Is snow removal subject to sales tax?",
        a: "In the United States it depends on the state. Some states tax snow plowing or treat it as a taxable service to real property, while others exempt it, and salt or ice melt sold as material can be taxable on its own. Check your state revenue department's guidance. In VAT or GST countries a registered contractor normally charges tax on the full invoice.",
      },
      {
        q: "How do I prove snow removal visits if a client disputes the invoice?",
        a: "Keep a visit log for every property with the date, arrival and departure times, the measured snow depth and the services performed. Time-stamped photos, GPS tracking from your phone or plow, and local weather records help. Put the date and time of each visit on the invoice, and offer the log or photos when a client questions a charge rather than waiting for them to escalate.",
      },
      {
        q: "Can I use a free invoice generator for snow removal billing?",
        a: "Yes. Enter each push, salting application and hour of hauling as separate line items with the visit date in the description, apply your tax rate if you charge one, and download a PDF. The generator does not recur invoices, track storms or send invoices automatically, so for seasonal installments save a copy of last month's invoice and change the period, number and amounts.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A snow removal invoice template should list each visit by date and time, the service performed (plowing, shoveling, salting or hauling), the snow depth where billing depends on it, and the rate under your contract, whether per push, per hour or seasonal. Show the trigger depth, seasonal installments and payment terms clearly.</p>

<p>Snow removal billing has a rhythm unlike most trades. Work arrives in bursts, often overnight, across dozens of properties in a few hours. Clients rarely see you on site, so the invoice is the main evidence that the work was done. A vague bill for "snow services, December" invites disputes. A clear snow removal invoice, with every push and salt application dated and tied to the contract, gets paid.</p>

<p>This guide covers the pricing models plow operators use, how trigger depths and salting work on an invoice, how to bill seasonal contracts, and a worked monthly sample with the arithmetic shown. It is written for owner-operators, landscapers who plow in winter and small crews with residential and commercial accounts.</p>

<h2>Snow removal pricing models</h2>
<p>Your invoice should match the pricing model in your contract. Most contractors use one or a mix of the models below. All figures in this guide are illustrative; rates depend on the region, the size of the lot, equipment and how much snow the area usually gets.</p>
<table><thead><tr><th>Model</th><th>How it is billed</th><th>Who carries the risk</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Per push (per visit)</td><td>Flat fee each time the lot or driveway is plowed</td><td>Client pays more in snowy winters</td><td>Plow driveway, 14 Dec, 6:10 am, 4 in</td></tr>
<tr><td>Per inch or per event tier</td><td>Price depends on depth band, such as 2 to 6 in, 6 to 12 in</td><td>Shared, scales with storm size</td><td>Plow, 6 to 12 in tier, 22 Dec</td></tr>
<tr><td>Per hour</td><td>Equipment or crew hours x rate</td><td>Client</td><td>Loader stacking, 1.5 hrs x $120</td></tr>
<tr><td>Seasonal contract</td><td>Fixed price for the season, often in installments</td><td>Contractor, unless capped</td><td>Seasonal plowing, installment 2 of 4</td></tr>
<tr><td>Seasonal with cap</td><td>Fixed price up to a set number of events or inches, then per push</td><td>Shared</td><td>Event 13 above 12-event cap</td></tr>
<tr><td>Per application (salt)</td><td>Flat fee or per bag or pound per treatment</td><td>Client</td><td>Salt application, lot and walks, 9 Jan</td></tr>
</tbody></table>
<p>Per-hour billing works best for commercial lots, hauling and loader work, where time varies with the storm. The habits that make hourly bills easy to approve are covered in our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a>.</p>
<h3>Trigger depth and service standards</h3>
<p>The trigger depth is the snowfall that obliges you to show up, such as 2 inches. It should be in the contract and repeated on the snow removal invoice, ideally in the header notes: "Trigger depth: 2 in. Salting for ice events and refreeze." Commercial contracts often add a service standard, such as clearing lots by 7 am or keeping accumulation below a set depth during continuous snowfall, which can mean several pushes in one storm. Note each push separately when that happens.</p>

<h2>What to include on a snow removal invoice</h2>
<p>Use this checklist for every invoice:</p>
<ul>
<li>Business name, address, phone, email and any license or tax number your area requires.</li>
<li>A unique invoice number and the invoice date. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a seasonal format such as SN26-0118.</li>
<li>Client name, billing address and the service address if different, plus a PO or site number for commercial accounts.</li>
<li>Contract type: per push, per hour, seasonal or hybrid, and the season dates.</li>
<li>Trigger depth and any service standard.</li>
<li>Each visit on its own line: date, time, measured depth and service.</li>
<li>Salting or de-icing applications separately, with date and quantity if billed by material.</li>
<li>Extra services: sidewalk shoveling, roof raking, hauling, stacking, emergency call-outs.</li>
<li>Seasonal installment number and amount, if applicable.</li>
<li>Tax where it applies, payment terms, due date and how to pay.</li>
</ul>
<p>If crews complete a work ticket at each property, reference the ticket number on the invoice line. Our <a href="/blog/work-order-template">work order template</a> guide shows how to set up tickets that feed straight into billing.</p>

<h2>Billing salt, ice melt and extras</h2>
<p>Salting causes more billing disputes than plowing because it can happen on days when the client sees little snow, such as freezing rain, black ice or refreeze after a warm afternoon. Show every application on its own line with the date and reason, for example "Salt application, lot and walks, 9 Jan, refreeze". If you bill by material, show the quantity, such as bags or pounds, times the rate.</p>
<p>Other extras to bill separately:</p>
<ul>
<li><strong>Sidewalk and stair shoveling,</strong> which is labor-heavy and often priced per visit.</li>
<li><strong>Hauling or relocation</strong> when piles block parking or sight lines, usually by the hour or by the truckload.</li>
<li><strong>Stacking with a loader</strong> after large storms.</li>
<li><strong>Roof raking or ice dam work,</strong> if you offer it.</li>
<li><strong>Emergency or out-of-schedule visits</strong> requested by the client below the trigger depth.</li>
</ul>
<p>When the contract says salt is included in a seasonal fee, still list applications on the invoice at zero cost or in the notes. It shows the client what they are getting for the fixed price, which helps at renewal time. An <a href="/blog/itemized-invoice">itemized invoice</a> is easier to defend than a single total.</p>

<h2>Seasonal contracts and installments</h2>
<p>Seasonal contracts trade uncertainty for predictability. The client pays a fixed amount for the winter, usually split into equal monthly installments, and you plow whenever the trigger is reached. To invoice them cleanly:</p>
<ol>
<li>State the season dates, the total contract price and the installment schedule in the contract.</li>
<li>Issue each installment invoice on the same date each month with "Installment 2 of 4" in the description.</li>
<li>List visits made during the month for the client's records, even though they are covered.</li>
<li>Add extras outside the contract, such as hauling or events above a cap, as separate priced lines.</li>
</ol>
<p>Because installments repeat, keep a saved template per client and change the period, number and visit list each month. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> covers how to manage repeat billing without reusing numbers. If you also mow and maintain the same properties in summer, the <a href="/blog/landscaping-invoice-template">landscaping invoice template</a> guide shows how to keep year-round billing consistent.</p>
<h3>Light winters and heavy winters</h3>
<p>A light winter on a seasonal contract is not a reason to refund, and a heavy winter is not a reason to add surprise charges, unless the contract says so. If you want protection, write a cap on events or total inches into the contract, with a per-push price beyond it, and show the event count on each invoice so the client can see the cap approaching.</p>

<h2>Sample snow removal invoice</h2>
<p>Below is an illustrative December invoice for a small commercial lot on a per-push contract with a 2-inch trigger. All rates are examples. No sales tax is charged in this example; check your state's rules.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Plow lot, 3 Dec 5:40 am (3 in), 14 Dec 4:55 am (5 in), 22 Dec 6:15 am (4 in)</td><td>3</td><td>$85.00</td><td>$255.00</td></tr>
<tr><td>Salt application, lot and walks: 3 Dec, 14 Dec, 22 Dec, 27 Dec (refreeze)</td><td>4</td><td>$45.00</td><td>$180.00</td></tr>
<tr><td>Shovel front walks and entrance steps, per visit</td><td>3</td><td>$35.00</td><td>$105.00</td></tr>
<tr><td>Loader stacking after 14 Dec storm, hours</td><td>1.5</td><td>$120.00</td><td>$180.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$720.00</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Plowing: 3 x $85.00 = $255.00.</li>
<li>Salting: 4 x $45.00 = $180.00.</li>
<li>Shoveling: 3 x $35.00 = $105.00.</li>
<li>Stacking: 1.5 x $120.00 = $180.00.</li>
<li>Total: $255.00 + $180.00 + $105.00 + $180.00 = $720.00.</li>
</ul>
<p>The same client on a $1,800 seasonal contract paid in four installments would instead receive an invoice for $1,800 / 4 = $450.00 each month from December to March, with the visits listed for reference and the stacking work added as an extra if it falls outside the contract.</p>
<p>To build either version in our <a href="/invoice-generator">free invoice generator</a>, enter each service as a line item with the dates in the description, set the tax rate if your state requires one, and download the PDF. The tool applies one tax rate to the whole invoice; if only salt sold as material is taxable where you work, add the tax as a separate line, and use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to check the figure. A crisp layout such as the <a href="/invoice-templates/blue">blue invoice template</a> keeps long visit lists readable. The generator does not recur invoices or track storms, so keep your own visit log.</p>

<h2>Documentation that gets invoices paid</h2>
<p>Commercial clients, property managers and their insurers may question visits, especially after a slip-and-fall claim. Good records protect you on both fronts:</p>
<ul>
<li>A visit log per property with arrival and departure times and measured depth.</li>
<li>Time-stamped photos before and after each visit.</li>
<li>GPS records from a phone app or vehicle tracker.</li>
<li>Local snowfall data, such as reports from the <a href="https://www.weather.gov/" target="_blank" rel="noopener noreferrer">National Weather Service</a>, to back up depths on disputed dates.</li>
</ul>
<p>Sales tax treatment of snow plowing and de-icing materials varies by state, so read your state's guidance and our overview of <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> before you add a tax line.</p>

<h2>Common mistakes on snow removal invoices</h2>
<ul>
<li><strong>One line for the month.</strong> "Snow removal, December: $720" gives the client nothing to check. List each visit.</li>
<li><strong>No times or depths.</strong> Without them, you cannot show the trigger was met.</li>
<li><strong>Salt buried in the plow price.</strong> Separate it so refreeze applications make sense.</li>
<li><strong>Charging extras on a seasonal contract without a clause.</strong> If hauling is extra, the contract must say so.</li>
<li><strong>Late invoicing.</strong> Invoices sent in April for December storms are harder to collect; bill after each storm or monthly.</li>
<li><strong>Ignoring sales tax rules.</strong> Some states tax plowing or materials; check before the season starts.</li>
<li><strong>No service address.</strong> Clients with several sites need the address on each invoice.</li>
</ul>

<h2>Building your snow removal invoice template</h2>
<p>Set up your template before the first storm: business details, contract type, trigger depth and payment terms already filled in, with blank lines for visits. After each storm, add the dates, times and depths while they are fresh. That habit turns a frantic night of plowing into an invoice the client can approve in a minute. For more trade layouts, browse our <a href="/blog/category/industry-invoices">industry invoice guides</a>.</p>
`,
  },
  {
    slug: "security-services-invoice-template",
    title: "Security Guard Invoice Template: Hourly Rates and Overtime",
    description:
      "Set up a security guard invoice template that bills guard hours by post, holiday and overtime premiums, patrols and supervisors clearly, with a worked sample.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "locksmith-invoice-template",
      "timesheet-template",
      "how-to-invoice-for-hourly-work",
      "po-number-on-invoice",
    ],
    faqs: [
      {
        q: "What should a security guard invoice include?",
        a: "Include your company name, license number where your jurisdiction requires one, a unique invoice number, the invoice date and billing period, and the client's name, site address and PO or contract number. List hours by post and guard classification, such as unarmed, armed or supervisor, with the contracted rate. Show overtime and holiday hours on separate lines, then patrols, call-outs, equipment, tax, payment terms and the due date.",
      },
      {
        q: "How do security companies bill overtime to clients?",
        a: "Billable overtime is set by the service contract, not by payroll law. Many contracts bill client-requested extra hours, short-notice shifts and hours beyond the agreed schedule at a premium, often 1.5 times the standard rate, while overtime caused by the security company's own scheduling is absorbed. Show overtime hours on their own dated line with the multiplier, and attach the approval or request that triggered them.",
      },
      {
        q: "What is the difference between pay rate and bill rate for security guards?",
        a: "The pay rate is what the guard earns per hour. The bill rate is what the client pays per hour and must cover wages, payroll taxes, insurance, training, uniforms, supervision, overhead and profit. Clients see only the bill rate on the invoice. Keep the two separate in your own costing so that overtime premiums you pay guards are matched by premiums in the contract.",
      },
      {
        q: "Which holidays are billed at a premium for security services?",
        a: "Only the holidays listed in your contract. A common approach is to name each holiday, such as New Year's Day, Independence Day, Thanksgiving and Christmas Day in the United States, and set a holiday bill rate, often 1.5 times standard. Bill holiday hours on separate lines with the date. Some public-sector contracts have their own holiday rules, so read the solicitation carefully before you price.",
      },
      {
        q: "Do security guards need a license to invoice clients?",
        a: "Licensing rules vary widely. In the United States many states license security companies and individual guards, with stricter rules for armed guards, while others have little regulation. In the UK, front-line guards need a Security Industry Authority licence. Other countries set their own rules. Put your company license number on invoices where it is required or expected, and check the rules for every jurisdiction where you place guards.",
      },
      {
        q: "How do I bill mobile patrols on a security invoice?",
        a: "Mobile patrols are usually billed per visit or per patrol hit, sometimes with a monthly minimum, rather than by the hour. List the number of visits in the billing period times the per-visit rate, and keep patrol logs or scan records showing each visit's date and time. Alarm response call-outs are normally a separate line with their own rate, because they are unscheduled.",
      },
      {
        q: "How often should a security company invoice clients?",
        a: "Weekly, biweekly or monthly invoicing are all common, often matched to the payroll cycle so cash comes in close to when wages go out. Monthly works for stable contracts with large clients, while weekly suits event security and short contracts. Whatever the cycle, state the billing period on each invoice and make sure it lines up with the timesheets or scheduling records you attach.",
      },
      {
        q: "Can I use a free invoice generator for security services billing?",
        a: "Yes, for small companies and event security. Enter each post and classification as a line with hours and rate, add overtime and holiday hours as their own lines, apply one tax rate if needed and download a PDF. The generator does not track guard hours, schedule shifts or send invoices automatically, so total hours from your timesheets or scheduling app first and attach those records.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A security guard invoice template should bill hours by site, post and guard classification at the contracted rate, with overtime and holiday hours on separate lines showing the premium. Add patrols, alarm call-outs and supervisor hours as their own items, reference the contract or PO number, state the billing period, and attach the matching timesheets.</p>

<p>Security billing is mostly arithmetic, but it is arithmetic across many shifts, guards and sites. A client's accounts payable team receives an invoice for hundreds of hours and has to decide whether it is right. If the hours do not match their sign-in sheets, or overtime appears without explanation, the whole invoice waits. A clear security guard invoice template breaks the total into posts, classifications and premium hours so it can be checked quickly and paid on time.</p>

<p>This guide explains common billing structures for guard services, what each invoice should contain, how to handle overtime and holidays, how to bill patrols and call-outs, and a worked sample with the arithmetic. It applies to small guard companies, event security firms and independent officers who contract directly with clients.</p>

<h2>How security services are billed</h2>
<p>Most security contracts set an hourly bill rate per guard classification, with premiums for certain hours. The table below lists the usual structures. All figures in this guide are illustrative; bill rates depend on location, wage levels, licensing, insurance and contract terms.</p>
<table><thead><tr><th>Billing model</th><th>How it works</th><th>Typical use</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Hourly by classification</td><td>Hours x rate for unarmed, armed, supervisor, K9</td><td>Static posts, ongoing contracts</td><td>Unarmed officer, Post 1 Lobby, 168 hrs x $28</td></tr>
<tr><td>Overtime premium</td><td>Contracted multiplier on hours the client requested beyond schedule</td><td>Extra coverage, short-notice shifts</td><td>OT, client request 12 Mar, 6 hrs x $42</td></tr>
<tr><td>Holiday premium</td><td>Multiplier on named holidays</td><td>24/7 posts</td><td>Holiday hours, 25 Dec, 24 hrs x $42</td></tr>
<tr><td>Mobile patrol</td><td>Per visit or per scan, sometimes a monthly minimum</td><td>Lots, construction sites, closed buildings</td><td>Patrol visits, 14 x $30</td></tr>
<tr><td>Alarm response</td><td>Per call-out, sometimes plus time on site</td><td>After-hours alarms</td><td>Alarm response, 18 Mar 2:14 am</td></tr>
<tr><td>Event package</td><td>Flat fee or hours with a minimum per guard</td><td>Concerts, weddings, sports</td><td>Event security, 6 guards x 5 hrs min</td></tr>
<tr><td>Fixed monthly</td><td>Set fee for a defined schedule</td><td>Stable long-term contracts</td><td>Monthly coverage per schedule A</td></tr>
</tbody></table>
<h3>Pay rate vs bill rate</h3>
<p>Your bill rate must cover far more than the guard's wage: payroll taxes, workers' compensation, liability insurance, licensing, training, uniforms, supervision, scheduling, overhead and profit. Clients only see the bill rate, but your costing should track both. When the law requires you to pay guards overtime, for example under the US <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer">Fair Labor Standards Act overtime rules</a> for non-exempt employees, that cost is yours unless the contract lets you pass a premium to the client. That is why the overtime clause in your service agreement matters so much.</p>

<h2>What to include in a security guard invoice template</h2>
<p>Use this checklist for every invoice:</p>
<ul>
<li>Company name, address, contact details and your security company license number where required.</li>
<li>A unique invoice number and invoice date. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a pattern such as SEC-2026-0412.</li>
<li>The client's legal name, billing address, site address and contract or PO number. See our guide to <a href="/blog/po-number-on-invoice">PO numbers on invoices</a>.</li>
<li>The billing period, such as 1 to 15 March 2026.</li>
<li>Hours by site and post, split by classification: unarmed, armed, supervisor, K9.</li>
<li>Overtime hours on their own lines with dates, the reason and the multiplier.</li>
<li>Holiday hours on their own lines with the holiday date.</li>
<li>Patrol visits, alarm call-outs and any equipment such as vehicles, radios or barriers.</li>
<li>Tax where applicable, the total, payment terms, due date and payment details.</li>
<li>A note referencing attached timesheets or scheduling reports.</li>
</ul>
<p>Guards' names or ID numbers can go on an attached report rather than the invoice itself, which keeps the invoice readable and limits how widely personal details travel.</p>

<h2>Overtime and holiday billing</h2>
<p>Overtime is the line clients question most on any security guard invoice template. Avoid disputes by agreeing in the contract on three points: which hours can be billed at a premium, what the multiplier is, and who can authorize extra hours. A common pattern is that client-requested extra coverage, short-notice shifts and hours beyond the agreed weekly schedule are billable at a premium, while overtime caused by your own staffing gaps is not.</p>
<p>On the invoice, never blend premium hours into the regular line. Show them separately with the date, the reason and the request reference:</p>
<ul>
<li>"Overtime, extra officer requested by J. Ortiz on 12 Mar, 6 hrs x $42.00."</li>
<li>"Holiday rate, 25 Dec, Post 1, 24 hrs x $42.00."</li>
</ul>
<p>Holiday billing should follow a list of named holidays in the contract rather than a general phrase like "public holidays". Lists differ by country, state and employer, and some government contracts set their own holiday rules. If your security services invoice includes a holiday the client does not recognize, it will come back to you.</p>
<h3>Timesheets and proof of hours</h3>
<p>Attach timesheets, scheduling reports or guard tour records to every invoice. Clients often compare your hours with their own sign-in logs or access control data, so make sure the totals match before you send. Our <a href="/blog/timesheet-template">timesheet template</a> guide shows a layout that totals easily into invoice lines, and our guide on <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> covers rounding, minimums and approvals.</p>

<h2>Patrols, call-outs and extras</h2>
<p>Not all security work is static guarding. Mobile patrols, alarm response and event work each need their own line types:</p>
<ul>
<li><strong>Mobile patrols:</strong> bill per visit or per checkpoint scan, with the count for the period. Keep patrol logs with timestamps.</li>
<li><strong>Alarm response:</strong> bill per call-out with the date and time, plus time on site beyond a set period if the contract allows.</li>
<li><strong>Event security:</strong> bill per guard with a minimum number of hours, and list supervisors and crowd managers separately.</li>
<li><strong>Equipment and vehicles:</strong> patrol vehicles, radios, metal detectors or barriers rented to the client.</li>
<li><strong>Reports and investigations:</strong> incident reports beyond the standard scope, or time spent with police and insurers, if billable.</li>
</ul>

<h2>Sample security guard invoice</h2>
<p>Below is an illustrative invoice for a two-week period at an office building with a 24/7 lobby post, a holiday, a supervisor and night patrols. All rates are examples, and no tax is charged in this example.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Unarmed officer, Post 1 Lobby, regular hours, 18 to 31 Dec</td><td>312</td><td>$28.00</td><td>$8,736.00</td></tr>
<tr><td>Holiday rate (1.5x), Post 1, 25 Dec</td><td>24</td><td>$42.00</td><td>$1,008.00</td></tr>
<tr><td>Overtime (1.5x), extra officer requested by client, 29 Dec</td><td>6</td><td>$42.00</td><td>$252.00</td></tr>
<tr><td>Site supervisor visits, hours</td><td>10</td><td>$35.00</td><td>$350.00</td></tr>
<tr><td>Mobile patrol, parking structure, visits</td><td>14</td><td>$30.00</td><td>$420.00</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$10,766.00</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Post hours in 14 days: 14 x 24 = 336 hours, of which 24 are holiday hours, leaving 336 - 24 = 312 regular hours.</li>
<li>Regular: 312 x $28.00 = $8,736.00.</li>
<li>Holiday and overtime rate: $28.00 x 1.5 = $42.00.</li>
<li>Holiday: 24 x $42.00 = $1,008.00. Overtime: 6 x $42.00 = $252.00.</li>
<li>Supervisor: 10 x $35.00 = $350.00. Patrols: 14 x $30.00 = $420.00.</li>
<li>Total: $8,736.00 + $1,008.00 + $252.00 + $350.00 + $420.00 = $10,766.00.</li>
</ul>
<p>To build this in our <a href="/invoice-generator">free invoice generator</a>, enter each post and premium as its own line with quantity and rate, add the contract number and billing period in the notes, and download the PDF. A sober layout such as the <a href="/invoice-templates/slate">slate invoice template</a> suits corporate and facilities clients. The generator applies one tax rate to the whole invoice and does not track hours, schedule guards or send invoices, so total hours from your timesheets first and email the PDF with the reports attached.</p>

<h2>Payment terms and large clients</h2>
<p>Security companies carry a heavy payroll: guards are paid weekly or biweekly, while clients may pay 30, 45 or 60 days after invoice. That gap can strain cash flow quickly. Negotiate terms that fit your payroll, invoice on a cycle that matches it, and read our guide to <a href="/blog/net-60-net-90-payment-terms">net 60 and net 90 payment terms</a> before accepting long terms from a large client. When a client questions hours, respond with the timesheets and approvals right away; our guide to handling an <a href="/blog/invoice-dispute">invoice dispute</a> covers how to keep the undisputed part moving.</p>
<p>Guard classification also matters for your own compliance. Guards working set shifts under your supervision are usually employees rather than contractors in many jurisdictions; see our comparison of <a href="/blog/w2-vs-1099">W-2 vs 1099 workers</a> for the US view. Licensing requirements differ by state and country; the US Bureau of Labor Statistics <a href="https://www.bls.gov/ooh/protective-service/security-guards.htm" target="_blank" rel="noopener noreferrer">overview of security guard occupations</a> notes that most states require guards to be registered or licensed, and the UK, India, Pakistan and others have their own licensing regimes.</p>

<h2>Common mistakes on a security guard invoice template</h2>
<ul>
<li><strong>One blended rate.</strong> Mixing armed, unarmed and supervisor hours under one rate breaks most contracts and cannot be audited.</li>
<li><strong>Unexplained overtime.</strong> Premium hours without a date, reason and approval are the first lines accounts payable will reject.</li>
<li><strong>Holiday dates the contract does not list.</strong> Bill premiums only for named holidays.</li>
<li><strong>Hours that do not match the client's logs.</strong> Reconcile before sending, not after a dispute.</li>
<li><strong>No PO or contract number.</strong> Large clients route invoices by PO; without it, payment stalls.</li>
<li><strong>Billing your scheduling gaps as client overtime.</strong> If you caused the overtime, it is usually your cost.</li>
<li><strong>Missing billing period.</strong> Overlapping or unclear periods lead to double billing claims.</li>
</ul>

<h2>Building your security invoicing routine</h2>
<p>A reliable security guard invoice template has the contract details, classifications and rates pre-filled, with lines for regular, overtime and holiday hours ready to update each period. Close timesheets on a fixed day, reconcile them with the client's records where you can, and invoice within a day or two. The faster and cleaner the invoice, the shorter the gap between paying guards and getting paid. For more trade-specific layouts, browse our <a href="/blog/category/industry-invoices">industry invoice guides</a>.</p>
`,
  },
  {
    slug: "solar-installation-invoice-template",
    title: "Solar Installation Invoice Template: Deposits and Incentives",
    description:
      "Build a solar installation invoice with progress payments, equipment and labor lines and permits, plus 2026 notes on US tax credits and net metering changes.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["milestone-payments", "deposit-invoice", "electrician-invoice-template"],
    faqs: [
      {
        q: "What should a solar installation invoice include?",
        a: "Include your company name, contractor or electrical license number and tax number, a unique invoice number and date, and the customer's name and installation address. List equipment with make, model and quantity, such as panels, inverter, batteries and racking, then labor, electrical work, permits, interconnection fees and any roof work. Show the system size, the payment stage being billed, payments received, tax and the balance due.",
      },
      {
        q: "Can homeowners still claim the 30% federal solar tax credit in 2026?",
        a: "Generally no, for systems on their own home. Under the 2025 law known as the One Big Beautiful Bill, the residential clean energy credit under section 25D is not allowed for expenditures made after December 31, 2025, and the IRS treats an expenditure as made when installation is completed. Credits for systems finished in 2025 can still be claimed on 2025 returns, and unused amounts may carry forward. Check current IRS guidance or a tax professional.",
      },
      {
        q: "Does paying a solar deposit in 2025 keep the federal credit for a 2026 installation?",
        a: "No, according to IRS guidance. The IRS has said that a taxpayer cannot claim the section 25D credit for property installed after December 31, 2025, even if they paid for it on or before that date, because the expenditure counts as made when the original installation is completed. Your invoices should show the installation completion date clearly, since customers and their tax preparers may need it.",
      },
      {
        q: "How do solar installers structure progress payments?",
        a: "A common pattern is a deposit at contract signing, a larger payment when equipment is delivered or installation starts, and the balance at completion, inspection or permission to operate. The percentages are set in your contract and may be limited by local contractor laws on down payments. Invoice each stage separately with its own number, reference the contract, and show the running total paid against the contract price.",
      },
      {
        q: "Should equipment and labor be separate on a solar invoice?",
        a: "Yes. Separating panels, inverters, batteries and racking from labor and electrical work helps customers compare the invoice to the quote, supports warranty claims by recording models and serial numbers, and matters for tax because some places tax materials and labor differently. It also helps customers and their tax advisers identify which costs relate to which incentives or rebates, where any apply.",
      },
      {
        q: "What is the difference between net metering and net billing?",
        a: "Under net metering, electricity exported to the grid offsets electricity imported, usually unit for unit at the retail rate. Under net billing, exported electricity is bought at a separate, typically lower rate, while imports are charged at the normal tariff. Several US states and Pakistan have moved new customers toward net billing. Installers should not promise specific savings on an invoice, and should point customers to their utility's current rules.",
      },
      {
        q: "How has net metering changed for solar customers in Pakistan?",
        a: "In early 2026 NEPRA introduced prosumer regulations replacing net metering with net billing for new solar connections, with exported units bought at a lower rate than before. After public objections, the government moved to protect existing net metering contracts, and the details were still being finalized in reports at the time. Check NEPRA and your distribution company for the current buyback rate before quoting payback periods to customers.",
      },
      {
        q: "Can I use a free invoice generator for solar installation billing?",
        a: "Yes, for small installers and individual stage invoices. Enter equipment, labor, permits and fees as line items with model numbers in the descriptions, apply one tax rate if appropriate, enter earlier stage payments as amount paid, and download a PDF. The generator does not manage project milestones, financing, rebate paperwork or sending, so keep your contract schedule alongside it and track each stage invoice yourself.",
      },
      {
        q: "Who receives the invoice when a customer finances a solar system?",
        a: "With a solar loan, the customer is still the buyer, but the lender may pay you directly in stages and require invoices or completion certificates before each draw. With a lease or power purchase agreement, the leasing company usually owns the system and is your customer, and the homeowner pays the lessor. Confirm who the bill-to party is before you invoice, and follow the financer's documentation checklist exactly.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A solar installation invoice should list equipment by make, model and quantity, then labor, electrical work, permits and interconnection fees, with the system size and installation address. Bill in stages under the contract, such as a deposit, equipment delivery and completion, and show the completion date, payments received and balance due.</p>

<p>Solar projects combine an expensive equipment purchase with skilled electrical and roofing work, a permit process, a utility approval and, in many markets, incentive paperwork that depends on dates and documents. Customers are spending a large sum and often financing it, so they read every line. A clear solar installation invoice shows what was installed, what each stage costs and what has been paid, and it gives the customer and their tax adviser the records they need.</p>

<p>This guide covers progress payment structures, how to separate equipment and labor, what to include on every invoice, how the 2026 changes to US tax credits and to net metering in several markets affect your paperwork, and a worked sample. Tax and incentive rules in this guide were checked in October 2026, but they change often, so confirm them before relying on them.</p>

<h2>How solar installers bill: pricing and payment models</h2>
<p>Residential solar is usually sold at a fixed contract price, often expressed per watt for comparison, and paid in stages. Commercial projects may follow construction-style progress billing. The table below shows the common models; all figures are illustrative.</p>
<table><thead><tr><th>Model</th><th>How it works</th><th>Typical use</th><th>Invoice example</th></tr></thead><tbody>
<tr><td>Fixed contract price</td><td>One price for the complete system, billed in stages</td><td>Most residential cash sales</td><td>8 kW system, stage 2 of 3</td></tr>
<tr><td>Price per watt</td><td>System watts x price per watt, used to quote and compare</td><td>Residential and small commercial quotes</td><td>8,000 W x $1.46 per W (shown in notes)</td></tr>
<tr><td>Itemized cost-plus</td><td>Equipment at cost plus markup, labor by hours</td><td>Custom, off-grid or repair work</td><td>Inverter replacement, parts and labor</td></tr>
<tr><td>Progress billing with retainage</td><td>Percentage complete each period, with a holdback</td><td>Commercial and construction projects</td><td>Application 3, 60% complete, less 5% retainage</td></tr>
<tr><td>Financed or leased</td><td>Lender or lessor pays you per its draw schedule</td><td>Loans, leases, power purchase agreements</td><td>Completion draw per lender checklist</td></tr>
</tbody></table>
<p>A typical residential schedule is a deposit at signing, a payment when equipment arrives or installation starts, and the final balance at completion, inspection or utility permission to operate. Our guide to <a href="/blog/milestone-payments">milestone payments</a> explains how to tie each payment to a clear, verifiable event, and the <a href="/blog/deposit-invoice">deposit invoice</a> guide covers the first bill. Some states and countries limit how large a down payment a home improvement contractor can take before work starts, so check your local contractor rules.</p>

<h2>What to include on a solar installation invoice</h2>
<p>Use this checklist on every stage invoice and the final one:</p>
<ul>
<li>Company name, address, contact details, contractor or electrical license number and tax registration number.</li>
<li>A unique invoice number and date for each stage. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a project-based pattern such as SOL-2611-03.</li>
<li>Customer name, billing address and installation address, plus the lender or lessor's details if they pay.</li>
<li>Contract date, contract price and the payment stage being billed.</li>
<li>System size in kW, panel count and estimated annual production if your contract quotes it.</li>
<li>Equipment lines: panels, inverters or microinverters, batteries, racking and balance-of-system parts, with make and model.</li>
<li>Labor and electrical lines: installation, main panel upgrade, trenching, roof work.</li>
<li>Permit, inspection and utility interconnection fees.</li>
<li>Payments received to date, tax, the amount due for this stage and the remaining contract balance.</li>
<li>Installation completion date on the final invoice, and warranty terms or a reference to them.</li>
</ul>
<h3>Equipment vs labor lines</h3>
<p>Keep equipment and labor separate. It lets the customer match your invoice to the quote, it records model numbers for warranty claims, and it matters for tax: in some US states materials are taxed differently from installation labor, and some places exempt solar equipment from sales tax altogether. If serial numbers are available at completion, list them on the final invoice or attach a commissioning report.</p>

<h2>Incentives and credits: what changed for 2026</h2>
<p>Incentive rules shape how customers read a solar installation invoice, so it is worth getting the facts right without promising tax outcomes.</p>
<h3>United States: residential clean energy credit</h3>
<p>For years, homeowners claimed a 30% federal credit under section 25D for solar installed on their homes. The 2025 law commonly called the One Big Beautiful Bill ended that credit early. According to the IRS's <a href="https://www.irs.gov/newsroom/faqs-for-modification-of-sections-25c-25d-25e-30c-30d-45l-45w-and-179d-under-public-law-119-21-139-stat-72-july-4-2025-commonly-known-as-the-one-big-beautiful-bill-obbb" target="_blank" rel="noopener noreferrer">FAQs on the 2025 changes</a>, the credit is not allowed for expenditures made after December 31, 2025, and an expenditure is treated as made when the original installation is completed. The IRS also said that paying in 2025 does not preserve the credit for a system installed in 2026.</p>
<p>What that means for your paperwork:</p>
<ul>
<li>Do not describe the 30% federal homeowner credit as available for systems completed in 2026 in quotes, invoices or marketing.</li>
<li>Show the installation completion date clearly on final invoices, because customers with 2025 projects, or unused credits carried forward, may still need it.</li>
<li>Third-party owned systems, such as leases and power purchase agreements, fall under separate business credit rules with their own deadlines. Let the financing company explain how those affect pricing rather than putting tax claims on your invoice.</li>
<li>State, utility and local rebates may still exist. Name any rebate on the invoice only if it is applied to the price, and show it as its own line.</li>
</ul>
<p>Customers who completed projects in 2025 claim the credit on Form 5695; the <a href="https://www.irs.gov/instructions/i5695" target="_blank" rel="noopener noreferrer">Form 5695 instructions</a> explain what records they need. Your invoice is not tax advice, so keep it factual: what was installed, when, and what it cost.</p>
<h3>Net metering and net billing</h3>
<p>Export compensation has also changed. Under classic net metering, each unit exported to the grid offsets a unit imported. Several US states have moved new customers to net billing, where exports are credited at a lower rate; California's net billing tariff for new applicants since April 2023 is the best-known example. Rules are set by state regulators and utilities, so check yours.</p>
<p>In Pakistan, NEPRA introduced prosumer regulations in early 2026 that replace net metering with net billing for new connections, with exported units bought at a lower rate than under the old scheme. Following public objections, the government moved to protect existing net metering contracts, and reports at the time indicated the details were still being finalized. Check the current position with NEPRA and your distribution company before quoting payback periods. Sales tax on solar equipment in Pakistan has also changed in recent budgets, so confirm the rate before invoicing, and see our <a href="/invoice-generator/pakistan">invoice generator for Pakistan</a> for a local layout.</p>
<p>On the invoice itself, avoid promising savings or export rates. If you mention net metering or net billing, describe the application you submitted and its reference number, not the financial result.</p>

<h2>Sample solar installation invoice</h2>
<p>Below is an illustrative contract for an 8 kW residential system with three payment stages. All prices are examples, not market rates, and no sales tax is applied in this example.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Solar panels, 400 W monocrystalline (make and model listed)</td><td>20</td><td>$220.00</td><td>$4,400.00</td></tr>
<tr><td>String inverter, 7.6 kW (make and model listed)</td><td>1</td><td>$1,900.00</td><td>$1,900.00</td></tr>
<tr><td>Roof racking and mounting hardware</td><td>1</td><td>$1,100.00</td><td>$1,100.00</td></tr>
<tr><td>Balance of system: wiring, conduit, disconnects, monitoring</td><td>1</td><td>$650.00</td><td>$650.00</td></tr>
<tr><td>Installation and electrical labor</td><td>1</td><td>$3,200.00</td><td>$3,200.00</td></tr>
<tr><td>Permits, inspection and utility interconnection fees</td><td>1</td><td>$450.00</td><td>$450.00</td></tr>
<tr><td colspan="3"><strong>Contract price</strong></td><td><strong>$11,700.00</strong></td></tr>
</tbody></table>
<p>The payment schedule and arithmetic:</p>
<ul>
<li>Panels: 20 x $220.00 = $4,400.00.</li>
<li>Contract price: $4,400.00 + $1,900.00 + $1,100.00 + $650.00 + $3,200.00 + $450.00 = $11,700.00.</li>
<li>System size: 20 x 400 W = 8,000 W, so the price works out to $11,700.00 / 8,000 W = about $1.46 per watt.</li>
<li>Stage 1, deposit at signing, 10%: $11,700.00 x 10% = $1,170.00.</li>
<li>Stage 2, equipment delivered, 50%: $11,700.00 x 50% = $5,850.00.</li>
<li>Stage 3, completion and inspection, 40%: $11,700.00 x 40% = $4,680.00.</li>
<li>Check: $1,170.00 + $5,850.00 + $4,680.00 = $11,700.00.</li>
</ul>
<p>The final stage invoice would list the full system, then show "Paid to date: $7,020.00" ($1,170.00 + $5,850.00) and "Balance due: $4,680.00", with the completion date and inspection reference in the notes. The difference between interim stage bills and the final one is explained in our guide to <a href="/blog/interim-invoice-vs-final-invoice">interim vs final invoices</a>.</p>
<p>To build this in our <a href="/invoice-generator">free invoice generator</a>, enter each equipment and labor line, put earlier stage payments in the amount paid field, and download the PDF. A fresh, green layout such as the <a href="/invoice-templates/emerald">emerald invoice template</a> suits a solar brand. The generator applies a single tax rate to the whole invoice, so if equipment and labor are taxed differently in your area, add tax as separate lines. It does not track milestones, manage financing or send invoices, so keep your stage schedule in the contract and your project records.</p>

<h2>Electrical, roofing and construction overlap</h2>
<p>Solar jobs often include work that is billed like other trades: a main panel upgrade, a new subpanel, trenching for a ground mount or roof repairs before installation. Bill these as separate lines with a clear description, or as a change order if they were not in the original contract. Our <a href="/blog/electrician-invoice-template">electrician invoice template</a> guide covers electrical lines, and the <a href="/blog/construction-invoice-guide">construction invoice guide</a> covers retainage and progress billing on larger commercial jobs.</p>

<h2>Common mistakes on solar invoices</h2>
<ul>
<li><strong>Promising tax credits.</strong> Do not state that a customer will receive a federal credit that has ended, or any specific tax result.</li>
<li><strong>No completion date.</strong> Customers and tax preparers may need it; put it on the final invoice.</li>
<li><strong>One line for the whole system.</strong> Separate equipment, labor and fees, with model numbers.</li>
<li><strong>Stage invoices that do not add up.</strong> Each stage should show the contract price, paid to date and remaining balance.</li>
<li><strong>Billing the wrong party.</strong> Leases and some loans mean the financer, not the homeowner, receives your invoice.</li>
<li><strong>Quoting export rates as fact.</strong> Net metering and net billing rules change; refer customers to their utility.</li>
<li><strong>Oversized deposits.</strong> Check local limits on down payments for home improvement contracts.</li>
</ul>

<h2>Keeping solar billing clean</h2>
<p>Solar customers make a large, considered purchase, and their invoices become records for warranties, home sales, insurance and, in some cases, taxes. Itemize the system, bill stages that match the contract, date the completion and stay factual about incentives. Do that and your invoices will support the customer long after the panels go up. For more trade-specific layouts, see our <a href="/blog/category/industry-invoices">industry invoice guides</a> or the <a href="/blog/contractor-invoice-template">contractor invoice template</a>.</p>
`,
  },
  {
    slug: "makeup-artist-invoice-template",
    title: "Makeup Artist Invoice Template: Bridal Rates and Deposits",
    description:
      "A makeup artist invoice template guide for bridal and event work: trials, party rates, early start fees, travel and deposits, with a sample you can copy.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "makeup-artist-rates",
      "salon-invoice-template",
      "deposit-invoice",
      "event-planner-invoice-template",
    ],
    faqs: [
      {
        q: "What should a makeup artist invoice include?",
        a: "Include your name or business name, contact details and any tax number, a unique invoice number and date, and the client's name and contact details. Add the event date, location and ready-by time, then each service with the number of people and rate: bridal makeup, trial, bridesmaids, family members, lashes, airbrush and touch-up time. Show early start fees, travel, the retainer paid, the balance due and its due date.",
      },
      {
        q: "How much retainer should a makeup artist charge for a wedding?",
        a: "There is no standard amount. Many bridal artists ask for a fixed retainer or a percentage of the booking total to secure the date, and describe it as non-refundable because they turn away other weddings for that day. State the amount and refund terms in your contract, invoice the retainer when the client books, and deduct it from the final invoice so the balance due is clear.",
      },
      {
        q: "Should a bridal makeup trial be billed separately?",
        a: "Most artists bill the trial separately, either at the time of the trial or on the booking invoice, because it is a full appointment with its own time and products. Some include it in a bridal package. Either way, make it a separate line so the bride can see what she paid for. If the trial fee is credited against the wedding day total, say so in the notes and show it as a payment.",
      },
      {
        q: "What is an early start fee for makeup artists?",
        a: "An early start fee is a surcharge for services that begin before a set time, such as 7 am, because the artist must start the day very early and may need to travel before dawn. It is usually a flat amount or charged per hour before the cut-off. List it in your price list and contract, then add it to the invoice as a separate line with the actual start time.",
      },
      {
        q: "How do makeup artists charge for travel?",
        a: "Common approaches are a free radius with a per-mile fee beyond it, flat zone fees, or reimbursement of actual costs such as parking, tolls, flights and hotel nights for destination weddings. Some also charge a day rate for travel days. Put the method in the contract and show travel on the invoice as its own line with the basis, such as miles and rate, so the client can check it.",
      },
      {
        q: "Should a makeup artist invoice show a price per person?",
        a: "Yes, for bridal parties. Showing the number of people times the rate per person for bridesmaids, mothers and flower girls makes the total easy to check and easy to adjust if numbers change on the day. Bridal makeup usually has its own rate, and add-ons such as lashes or airbrush are best shown per person as well, so the bride can see who chose what.",
      },
      {
        q: "Do makeup artists have to charge sales tax?",
        a: "It depends on where you work and what you sell. Some US states tax personal care services while others do not, and products you sell to clients, such as lipsticks or lash kits, are often taxable even where services are not. In VAT or GST countries a registered artist charges tax on the full invoice. Check your state revenue department or tax authority before adding tax.",
      },
      {
        q: "Can I make a makeup artist invoice with a free invoice generator?",
        a: "Yes. Enter each service as a line with quantity and rate, add travel and early start fees, apply one tax rate if you charge one, put the retainer in the amount paid field and download the PDF. You can add your logo and choose a soft template that matches your brand. The generator does not send invoices or take payments, so include your payment link or bank details in the notes.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A makeup artist invoice template should show the event date, location and ready-by time, then each service with the number of people and rate: bridal makeup, trial, bridal party, add-ons such as lashes, early start fees, travel and on-site touch-up time. Subtract the retainer already paid and state when the balance is due.</p>

<p>Makeup artists who work weddings and events juggle more billing pieces than their price list suggests. A booking might start with a trial months ahead, grow from three bridesmaids to six, add a mother of the bride and a flower girl, require a 5 am start and finish with two hours of touch-ups at the venue. If the invoice does not keep up with those changes, the balance on the wedding morning becomes an awkward conversation. A clear makeup artist invoice template lists everything per person, so the client can see exactly what the total covers.</p>

<p>This guide covers how bridal and event makeup artists price their work, what to put on each invoice, how to handle retainers, trials, early starts and travel, and a worked bridal sample with the arithmetic. It is written for freelance makeup artists and small beauty teams who bill clients directly.</p>

<h2>How makeup artists price bridal and event work</h2>
<p>Most artists combine per-person rates with fees for time and travel. The table below shows the common models; any figures in this guide are illustrative, since rates vary by city, experience and the style of work.</p>
<table><thead><tr><th>Pricing model</th><th>How it works</th><th>Best for</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Bridal rate</td><td>Fixed fee for the bride, often including lashes and a longer appointment</td><td>Weddings</td><td>Bridal makeup with lashes</td></tr>
<tr><td>Per person (party rate)</td><td>Rate per bridesmaid, family member or guest</td><td>Bridal parties, events</td><td>Bridesmaid makeup, 4 x $95</td></tr>
<tr><td>Trial</td><td>Separate appointment before the event</td><td>Brides, editorial clients</td><td>Bridal trial, 12 Apr</td></tr>
<tr><td>Bridal package</td><td>Bride, trial and set number of party members for one price</td><td>Artists who sell tiers</td><td>Gold bridal package, bride plus 4</td></tr>
<tr><td>Hourly or day rate</td><td>Time-based, with a minimum</td><td>Photo shoots, film, touch-up coverage</td><td>On-site touch-ups, 2 hrs x $80</td></tr>
<tr><td>Add-ons</td><td>Per person or per item</td><td>All bookings</td><td>Airbrush upgrade, 2 x $25</td></tr>
<tr><td>Fees</td><td>Early start, travel, minimum booking</td><td>All bookings</td><td>Early start before 7 am</td></tr>
</tbody></table>
<p>Many artists also set a booking minimum for wedding days, such as a minimum number of people or a minimum total, because a whole morning is reserved for one client. If you use one, put it in your price list and contract, and show a minimum booking adjustment as a separate line when the party falls short.</p>
<h3>Hair and makeup teams</h3>
<p>If you work with a hair stylist or second artist, decide who invoices the client. Either you bill everything and pay your team, or each artist sends their own invoice. Clients usually prefer one invoice, but if you bill for others, show their services on separate lines so the client sees what was done and you keep clean records of what you owe your team.</p>

<h2>What to include in a makeup artist invoice template</h2>
<p>Use this checklist for every booking:</p>
<ul>
<li>Your name or business name, phone, email, social handle or website, and any tax registration number.</li>
<li>A unique invoice number and invoice date. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a pattern such as MUA-2027-014.</li>
<li>The client's name, phone and email, and the bride's name if someone else is paying.</li>
<li>Event type, date, location and the ready-by time for the first photo or ceremony.</li>
<li>Bridal makeup and trial on their own lines.</li>
<li>Bridal party and family services with the number of people times the rate.</li>
<li>Add-ons such as lashes, airbrush or body makeup, per person.</li>
<li>Early start, travel and parking fees, each with the basis shown.</li>
<li>On-site touch-up or stay-on time, by the hour.</li>
<li>Retainer and trial payments received, with dates.</li>
<li>Balance due, due date, payment methods, and a reference to your cancellation and rescheduling policy.</li>
</ul>
<p>Write your policies, such as non-refundable retainers, late cancellations and changes in party size, once in a clear set of terms and reference it on every invoice. Our guide to <a href="/blog/invoice-terms-and-conditions">invoice terms and conditions</a> shows how to word them simply.</p>

<h2>Retainers, trials and changing party sizes</h2>
<p>A retainer secures the date. Invoice it as soon as the client books, with a description such as "Non-refundable retainer to reserve 12 June 2027, applied to final balance". Our <a href="/blog/deposit-invoice">deposit invoice</a> guide explains how to word the first invoice and how to credit it later.</p>
<p>Trials can be billed in three ways: paid on the day of the trial, included in a bridal package, or added to the booking invoice. Whichever you choose, keep the trial as its own line, so the bride sees its value and you have a record if she decides not to book you after the trial.</p>
<p>Bridal party sizes change. Set a date, often a few weeks before the wedding, when final numbers are confirmed, and send an updated makeup artist invoice then with the final head count and the balance due. If people are added on the day, add them to a short follow-up invoice. If people drop out after the confirmation date, your contract decides whether the fee is still due.</p>
<h3>Salon-based vs on-location work</h3>
<p>Artists who work from a salon or studio have different billing patterns from those who travel to the bride. If you take bookings in a salon chair and on location, our <a href="/blog/salon-invoice-template">salon invoice template</a> guide covers chair-based services and retail products, which may be taxed differently from services.</p>

<h2>Early starts, travel and touch-ups</h2>
<p>Wedding days often begin before sunrise. An early start fee compensates for that, and it should be in your price list with a clear cut-off, such as any service starting before 7 am. Put the actual start time on the invoice line so the client can see why it applies.</p>
<p>Travel is best handled with a simple, published rule: a free radius from your base and a per-mile charge beyond it, or flat zone fees. For destination weddings, agree in advance on flights, accommodation and a travel day rate. Show actual costs as separate lines and keep receipts; our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses</a> explains how to present them.</p>
<p>On-site touch-up coverage, where you stay through the ceremony or first photos, is usually billed by the hour. Agree on the hours in advance and add any extension on the day as a separate line.</p>

<h2>Sample makeup artist invoice</h2>
<p>Below is an illustrative final invoice for a wedding. All prices are examples, not market rates, and no tax is charged in this example.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Bridal makeup with lashes, 12 June 2027, ready by 11:00 am</td><td>1</td><td>$250.00</td><td>$250.00</td></tr>
<tr><td>Bridal trial, 10 April 2027</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td>Bridesmaid makeup, per person</td><td>4</td><td>$95.00</td><td>$380.00</td></tr>
<tr><td>Mother of the bride makeup</td><td>1</td><td>$95.00</td><td>$95.00</td></tr>
<tr><td>Early start fee, services from 6:00 am</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>Travel, flat zone 2 fee</td><td>1</td><td>$60.00</td><td>$60.00</td></tr>
<tr><td>On-site touch-ups through ceremony, hours</td><td>2</td><td>$80.00</td><td>$160.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$1,140.00</strong></td></tr>
<tr><td colspan="3">Less retainer paid 3 Jan 2027 ($300.00) and trial paid 10 Apr 2027 ($120.00)</td><td>-$420.00</td></tr>
<tr><td colspan="3"><strong>Balance due by 5 June 2027</strong></td><td><strong>$720.00</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Bridesmaids: 4 x $95.00 = $380.00.</li>
<li>Touch-ups: 2 x $80.00 = $160.00.</li>
<li>Total: $250.00 + $120.00 + $380.00 + $95.00 + $75.00 + $60.00 + $160.00 = $1,140.00.</li>
<li>Paid: $300.00 + $120.00 = $420.00.</li>
<li>Balance due: $1,140.00 - $420.00 = $720.00.</li>
</ul>
<p>To build this in our <a href="/invoice-generator">free invoice generator</a>, add each service with quantity and rate, enter the retainer and trial payments together in the amount paid field, and download the PDF with your logo. A soft, polished design such as the <a href="/invoice-templates/lavender">lavender invoice template</a> suits a beauty brand. The tool applies one tax rate to the whole invoice; if only retail products are taxable where you work, add tax as its own line. It does not send invoices or take payments, so add your payment link or bank details in the notes. When the balance is paid, send a receipt; see our <a href="/blog/payment-receipt-template">payment receipt template</a>.</p>

<h2>Working with planners and photographers</h2>
<p>On larger weddings, a planner may book you on the couple's behalf and ask for an invoice that matches their format, with the couple's names, the event name and your ready-by time. The <a href="/blog/event-planner-invoice-template">event planner invoice template</a> guide explains what planners expect from vendors. Photographers and videographers depend on your timeline, so share the schedule as well as the invoice; if you also offer content shoots, our <a href="/blog/photography-invoice-template">photography invoice template</a> guide covers usage and shoot fees that sometimes overlap with editorial makeup.</p>
<p>Freelance makeup artists are usually self-employed, so keep invoices and receipts together for your tax records. In the US, the IRS <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" target="_blank" rel="noopener noreferrer">self-employed individuals tax center</a> explains record-keeping and estimated tax basics.</p>

<h2>Common mistakes on a makeup artist invoice template</h2>
<ul>
<li><strong>A single total for the bridal party.</strong> Show people times rate so changes are easy to check.</li>
<li><strong>Forgetting the retainer or trial payment.</strong> Always deduct what was paid and show the balance.</li>
<li><strong>No ready-by time or location.</strong> The invoice doubles as a booking record; include both.</li>
<li><strong>Early start fees with no start time.</strong> Show the actual start so the fee makes sense.</li>
<li><strong>Vague travel.</strong> State the zone or miles and rate.</li>
<li><strong>No final head-count date.</strong> Without one, last-minute dropouts become arguments.</li>
<li><strong>Taxing services and products the same way without checking.</strong> Rules can differ; confirm locally.</li>
</ul>

<h2>Making the wedding-day balance painless</h2>
<p>The goal of a makeup artist invoice template is to make the morning of the wedding about makeup, not money. Send the updated invoice when numbers are confirmed, collect the balance before the day, and keep any extras for a short follow-up invoice. Brides remember a calm morning, and a clear invoice is part of that. For more trade-specific examples, browse our <a href="/blog/category/industry-invoices">industry invoice guides</a>.</p>
`,
  },
  {
    slug: "travel-agency-invoice-template",
    title: "Travel Agency Invoice Template: Bookings, Fees and Taxes",
    description:
      "Use this travel agency invoice template guide to separate service fees from pass-through fares, handle agent vs principal billing, deposits and VAT or GST.",
    category: "industry-invoices",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "hotel-invoice-template",
      "reimbursable-expenses-invoice",
      "foreign-currency-invoice",
    ],
    faqs: [
      {
        q: "What should a travel agency invoice include?",
        a: "Include your agency name, address, license or registration numbers and tax number, a unique invoice number and date, and the client's name and billing address. List travelers, travel dates and each booking with its supplier, confirmation number and amount, then your service or planning fees as separate lines. Show taxes where they apply, deposits received, the balance due, the payment deadline and the cancellation terms of each supplier.",
      },
      {
        q: "Should a travel agent show the airfare and hotel cost on the invoice?",
        a: "When you act as an agent and the client pays the supplier's price through you, show each fare and room charge as a pass-through line with the supplier and confirmation number, and your own fee on separate lines. That makes clear which money is yours and which belongs to the airline or hotel. When you sell a package as principal at one price, you normally show the package price rather than the underlying costs.",
      },
      {
        q: "What is the difference between acting as agent and principal in travel?",
        a: "An agent arranges travel on behalf of a supplier or client and earns a commission or fee; the contract for the flight or hotel is between the traveler and the supplier. A principal buys travel services and resells them in its own name, taking the risk and setting the price. The distinction affects revenue recognition, consumer protection duties and, in many countries, how VAT or GST is calculated.",
      },
      {
        q: "What is the Tour Operators Margin Scheme in the UK?",
        a: "The Tour Operators' Margin Scheme, or TOMS, is a special VAT scheme for UK businesses that buy in travel services such as accommodation and transport and resell them in their own name, as principal or undisclosed agent. VAT is accounted for on the margin rather than on the full selling price. Disclosed agents earning commission usually fall outside it. HMRC's VAT Notice 709/5 sets out the rules, and specialist advice is wise.",
      },
      {
        q: "How is GST charged on travel agency services in India?",
        a: "It depends on the service. Tour operator packages have commonly been taxed at 5% without input tax credit when conditions are met, while standalone agency service fees are generally taxed at 18%, and air travel agents have special valuation rules for their commission. Rates and conditions have been revised several times, including in the 2025 rate changes, so confirm the current notification and SAC code with a GST practitioner.",
      },
      {
        q: "Should a travel agency charge a service fee?",
        a: "Many agencies do, because supplier commissions have shrunk or disappeared for some bookings, especially airfares. Common approaches are a flat fee per booking or traveler, a planning fee for custom itineraries, a change or cancellation handling fee, and a percentage on complex trips. Disclose fees before booking, show each fee as a separate line on the invoice, and say whether it is refundable if the trip is cancelled.",
      },
      {
        q: "How should a travel agency invoice deposits and final payments?",
        a: "Issue a deposit invoice when the client confirms, matching the deposits required by airlines, hotels and tour suppliers plus any planning fee. Before the supplier's final payment deadline, issue the final invoice listing all bookings, deducting the deposit and showing the balance due. Put supplier deadlines and cancellation penalties in the notes so the client understands why the balance is due weeks before departure.",
      },
      {
        q: "Can I use a free invoice generator for a travel agency?",
        a: "Yes, for small agencies and independent advisors. Enter each booking and fee as a line item with confirmation numbers in the description, choose the invoice currency, enter deposits as the amount paid and download a PDF. The generator applies one tax rate to the whole invoice and does not book travel, issue tickets, send invoices or take payments, so tax on fees only should be entered as its own line.",
      },
      {
        q: "What currency should a travel agency invoice use?",
        a: "Usually the currency the client pays in, which may differ from the currencies suppliers charge. If you convert a hotel or tour price from another currency, state the exchange rate and date you used, and explain in your terms whether the price can change before final payment. Clients paying by card in a foreign currency may also see bank conversion fees that are outside your control.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A travel agency invoice template should list each booking (flights, hotels, tours, transfers) with the supplier, confirmation number and amount, and show your service or planning fees on separate lines. Whether you act as agent or principal decides how bookings and taxes appear. Add travelers, travel dates, deposits paid, the balance due and supplier cancellation terms.</p>

<p>Travel invoices carry a lot of other people's money. A single trip can include an airline ticket, three hotels, a cruise, airport transfers and a guided tour, each from a different supplier with its own deposit and deadline, plus your own fee for putting it together. Clients want to know what they are paying for. Tax authorities want to know which part is your income. A clear travel agency invoice template answers both questions on one page.</p>

<p>This guide covers the agent vs principal question, how to separate pass-through costs from your fees, the main fee models, VAT and GST points for the UK and India, deposits and final payments, and a worked sample. It is written for independent travel advisors, small agencies and tour organizers. Tax details were checked in October 2026 but change often, so confirm them locally.</p>

<h2>Agent vs principal: the decision that shapes your invoice</h2>
<p>Before designing a travel agency invoice template, decide in what capacity you are selling each booking:</p>
<table><thead><tr><th></th><th>Acting as agent</th><th>Acting as principal (tour operator)</th></tr></thead><tbody>
<tr><td>Who contracts with the traveler</td><td>The airline, hotel or tour supplier</td><td>Your agency, in its own name</td></tr>
<tr><td>Your income</td><td>Commission from suppliers and/or service fees from clients</td><td>The margin between your selling price and your costs</td></tr>
<tr><td>Invoice shows</td><td>Supplier costs as pass-through lines plus your fees</td><td>A package price, usually without underlying costs</td></tr>
<tr><td>Risk</td><td>Mainly the supplier's</td><td>Yours, including unsold inventory and supplier failure</td></tr>
<tr><td>Tax treatment</td><td>Tax usually on your fee or commission</td><td>Often special schemes, such as margin schemes</td></tr>
</tbody></table>
<p>Many agencies do both: booking flights as an agent and selling their own packages as principal. Use separate invoice sections, or separate invoices, so each is treated correctly. Your contracts with suppliers and your booking terms with clients should match how you invoice.</p>

<h2>Travel agency pricing and fee models</h2>
<p>Agencies earn money in several ways, and your invoice should show the client-facing ones. All amounts in this guide are illustrative.</p>
<table><thead><tr><th>Income source</th><th>How it works</th><th>Shown on client invoice?</th><th>Invoice line example</th></tr></thead><tbody>
<tr><td>Supplier commission</td><td>Hotel, cruise or tour supplier pays the agent a percentage</td><td>No, it is billed to the supplier</td><td>Not on client invoice</td></tr>
<tr><td>Booking service fee</td><td>Flat fee per booking or per traveler</td><td>Yes</td><td>Air booking service fee, 2 x $50</td></tr>
<tr><td>Planning or design fee</td><td>Flat or hourly fee for custom itineraries</td><td>Yes</td><td>Itinerary planning, Italy 10 days</td></tr>
<tr><td>Change or cancellation fee</td><td>Fee for handling changes, on top of supplier penalties</td><td>Yes</td><td>Change handling fee, flight reissue</td></tr>
<tr><td>Package margin</td><td>Principal sells a package at one price</td><td>Within the package price</td><td>Tuscany small-group tour, per person</td></tr>
<tr><td>Corporate management fee</td><td>Monthly or per-transaction fee for business travel</td><td>Yes</td><td>Corporate travel management, March</td></tr>
</tbody></table>
<p>Supplier commissions are invoiced to the supplier, not the client, often through a commission statement or a separate invoice. Keep that billing in its own number sequence so it does not get mixed with client invoices.</p>

<h2>What to include in a travel agency invoice template</h2>
<p>Use this checklist for every client invoice:</p>
<ul>
<li>Agency name, address, phone, email and any license, registration or bonding numbers. Several US states, including California and Florida, require sellers of travel to register, and other countries license travel agents or require financial protection.</li>
<li>Your tax number (VAT, GST or sales tax) where you are registered.</li>
<li>A unique invoice number and invoice date. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a pattern such as TRV-2026-0207.</li>
<li>The client's name and billing address, plus the company name and cost center for business travel.</li>
<li>Traveler names as they appear on passports or tickets, and travel dates.</li>
<li>Each booking on its own line: supplier, service, dates, confirmation or ticket number and amount.</li>
<li>Your fees on separate lines, clearly labeled as agency fees.</li>
<li>Taxes on the correct base, often your fees rather than the pass-through amounts.</li>
<li>The invoice currency, and any exchange rate used to convert supplier prices.</li>
<li>Deposits received, the balance due and the final payment deadline.</li>
<li>Supplier cancellation and change terms, or a reference to your booking conditions.</li>
</ul>
<p>Hotels and car rental companies issue their own invoices to the traveler at the end of the stay. If you are curious how those look, our <a href="/blog/hotel-invoice-template">hotel invoice template</a> and <a href="/blog/car-rental-invoice-template">car rental invoice template</a> guides cover the supplier side.</p>

<h2>Pass-through costs vs agency fees</h2>
<p>As an agent, the most important thing your invoice does is separate money that passes through you from money you earn. Show each fare, room or tour as a pass-through line with the supplier name and confirmation number. Then show your service and planning fees as their own lines. This protects you in three ways: clients can see your fee is reasonable, your accountant can record only the fees as revenue, and tax is calculated on the right base.</p>
<p>The same principle applies to any business that rebills third-party costs; our guide to <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on invoices</a> explains the general approach. If a client pays suppliers directly, for example a hotel paid at check-out, list it in the notes for reference but do not include it in your invoice total.</p>

<h2>VAT, GST and sales tax for travel agencies</h2>
<p>Tax on travel is complex, and the rules depend on whether you act as agent or principal, where the travel takes place and where the customer is.</p>
<h3>United Kingdom: Tour Operators' Margin Scheme</h3>
<p>UK businesses that buy in travel services such as accommodation and passenger transport and resell them in their own name, as principal or undisclosed agent, generally must use the Tour Operators' Margin Scheme. VAT is calculated on the margin rather than the full selling price. Disclosed agents who earn commission usually fall outside the scheme and account for VAT on their commission or fees under normal rules. HMRC's <a href="https://www.gov.uk/guidance/tour-operators-margin-scheme-for-vat-notice-7095" target="_blank" rel="noopener noreferrer">VAT Notice 709/5</a> sets out who must use the scheme, how margins are calculated and how invoices for scheme supplies should be presented, including restrictions on showing VAT separately. Because the scheme is technical, take advice before building invoices for packages. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> covers standard VAT invoices for agency fees.</p>
<h3>India: GST on tour operators and agents</h3>
<p>In India, tour operator packages have commonly been taxed at 5% without input tax credit when the package includes accommodation and transport and conditions are met, while standalone agency services and fees are generally taxed at 18% with credit. Air travel agents have special valuation rules for their commission. These rates and conditions have changed several times, including in the 2025 GST rate revisions, so check the current notification with a GST practitioner. Use the correct SAC code under heading 9985; our explainer on <a href="/blog/hsn-sac-code">HSN and SAC codes</a> shows where it goes, and the <a href="/blog/gst-invoice-guide">GST invoice guide</a> lists the required fields. Overseas tour packages may also involve tax collected at source under income tax rules, which have their own thresholds and rates.</p>
<h3>United States and elsewhere</h3>
<p>US sales tax rarely applies to airfare or hotel bookings resold by an agent, though hotels collect occupancy taxes themselves and some states tax certain service fees. In the UAE, Pakistan and other countries, VAT or sales tax on travel services follows local rules for agents and tour operators. Check with your tax authority before adding tax to fees.</p>

<h2>Sample travel agency invoice</h2>
<p>Below is an illustrative invoice from an agency acting as agent for a couple's trip. Prices are examples. In this example no tax is charged on the fees; where your fees are taxable, add the tax as its own line on the fees only.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Airfare, round trip JFK to FCO, 4 to 14 May, e-tickets 0012345678901/2 (pass-through)</td><td>2</td><td>$640.00</td><td>$1,280.00</td></tr>
<tr><td>Hotel, Rome, 4 nights, prepaid rate, conf. HR88231 (pass-through)</td><td>4</td><td>$180.00</td><td>$720.00</td></tr>
<tr><td>Agency air booking service fee, per traveler</td><td>2</td><td>$50.00</td><td>$100.00</td></tr>
<tr><td>Itinerary planning fee, 10-day Italy trip</td><td>1</td><td>$150.00</td><td>$150.00</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$2,250.00</strong></td></tr>
<tr><td colspan="3">Less deposit received 2 Feb</td><td>-$500.00</td></tr>
<tr><td colspan="3"><strong>Balance due by 3 March</strong></td><td><strong>$1,750.00</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Airfare: 2 x $640.00 = $1,280.00.</li>
<li>Hotel: 4 x $180.00 = $720.00.</li>
<li>Service fee: 2 x $50.00 = $100.00.</li>
<li>Total: $1,280.00 + $720.00 + $100.00 + $150.00 = $2,250.00.</li>
<li>Agency fee income: $100.00 + $150.00 = $250.00. Pass-through: $1,280.00 + $720.00 = $2,000.00.</li>
<li>Balance due: $2,250.00 - $500.00 = $1,750.00.</li>
</ul>
<p>To build this in our <a href="/invoice-generator">free invoice generator</a>, enter each booking and fee as a line item with confirmation numbers in the description, choose the currency, put the deposit in the amount paid field, and download the PDF. A calm, travel-friendly design such as the <a href="/invoice-templates/ocean">ocean invoice template</a> works well. The generator applies a single tax rate to the whole invoice, so if only your fees are taxable, add the tax as a separate line. It does not book travel, issue tickets, send invoices or collect payments.</p>

<h2>Deposits, deadlines and currency</h2>
<p>Travel is paid on suppliers' timelines. Airlines often require payment at ticketing, while hotels, cruises and tours ask for deposits and set a final payment date weeks before departure. Match your invoices to those deadlines: a deposit invoice at confirmation, as covered in our <a href="/blog/deposit-invoice">deposit invoice guide</a>, then a final invoice before the earliest supplier deadline, with the dates in the notes.</p>
<p>When suppliers price in a different currency from your client, state the exchange rate and date you used and whether the price is fixed. Our guide to <a href="/blog/foreign-currency-invoice">foreign currency invoices</a> covers how to present converted amounts.</p>

<h2>Common mistakes on a travel agency invoice template</h2>
<ul>
<li><strong>Mixing pass-through costs and fees in one line.</strong> Clients cannot see your fee, and tax may be charged on the wrong base.</li>
<li><strong>Unclear agent or principal status.</strong> It affects taxes, liability and how revenue is recorded.</li>
<li><strong>Missing confirmation numbers.</strong> Each booking line should be traceable to the supplier.</li>
<li><strong>Traveler names that do not match passports.</strong> Copy names exactly as ticketed.</li>
<li><strong>Applying VAT or GST to the full trip without checking.</strong> Margin schemes and agent rules may apply.</li>
<li><strong>No supplier deadlines or cancellation terms.</strong> Clients need to know why the balance is due early.</li>
<li><strong>Billing commission to the client.</strong> Supplier commission is invoiced to the supplier.</li>
</ul>

<h2>Getting travel invoicing right</h2>
<p>A good travel agency invoice template makes the shape of the trip visible: every booking with its supplier and reference, every fee labeled as yours, and every payment and deadline in one place. Decide agent or principal for each product, keep fees separate and confirm tax rules locally, and your invoices will stand up to clients, suppliers and tax authorities alike. For more trade-specific layouts, browse our <a href="/blog/category/industry-invoices">industry invoice guides</a>.</p>
`,
  },
];
