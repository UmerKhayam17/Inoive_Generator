import type { PostDraft } from "../blog";

export const INDUSTRY_POSTS_U: PostDraft[] = [
  {
    slug: "speaker-invoice-template",
    title: "Speaker Invoice Template: Bill Speaking Fees (+ Example)",
    description:
      "Speaker invoice template for keynotes, workshops and panels: bill your speaking fee or honorarium, travel and per diem, collect a W-9 and get paid on time.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "consulting-invoice-template",
      "reimbursable-expenses-invoice",
      "w9-and-1099-for-contractors",
    ],
    faqs: [
      {
        q: "What is the difference between a speaking fee and an honorarium?",
        a: "A speaking fee is a negotiated price for a talk, usually set by the speaker and agreed in a contract. An honorarium is a smaller payment an organization offers as a thank-you, common with universities, nonprofits and associations that have fixed budgets. For tax purposes in the US both are generally income to the speaker, and both can be billed on the same kind of invoice with the label the client uses.",
      },
      {
        q: "When should a speaker send the invoice?",
        a: "Many speakers send a deposit invoice when the contract is signed, often 50% to hold the date, and a balance invoice dated shortly before or right after the event. Travel and expense invoices usually follow within a week of the trip, once all receipts are in. Check the client's payment cycle in advance, since some universities and government bodies only pay after the event and need paperwork weeks ahead.",
      },
      {
        q: "Do I need to send a W-9 with my speaker invoice?",
        a: "If you are a US person speaking for a US organization, the client will usually ask for Form W-9 before they can pay you, because they may need your taxpayer identification number for 1099 reporting. Sending a signed W-9 together with your first invoice avoids delays. Use an EIN instead of your Social Security number if you have one, and share the form through a secure channel.",
      },
      {
        q: "Can I charge a cancellation fee for a speaking engagement?",
        a: "Yes, if your agreement says so. Common terms make the deposit non-refundable and add a sliding scale, such as 50% of the fee if the event is cancelled within 60 days and 100% within 30 days. If the client postpones rather than cancels, many speakers apply the deposit to the new date. Put the clause in the contract, then quote it on the cancellation invoice.",
      },
      {
        q: "Should travel be included in my speaking fee or billed separately?",
        a: "Both approaches are common. Billing actual travel separately is fairer when distances vary, while a flat travel allowance or an all-inclusive fee is simpler for the client and avoids receipt chasing. If you bill actual costs, say which class of airfare, how many hotel nights and what per diem the client agreed to, then attach receipts to the expense invoice.",
      },
      {
        q: "How do speakers bureaus handle invoicing?",
        a: "When a bureau books you, the bureau usually invoices the client for the full fee, collects payment and pays you after deducting its commission, which is set in your agreement with the bureau. In that case you invoice the bureau, not the event, for your net fee and any expenses. Make sure the invoice references the bureau's booking number and the event date.",
      },
      {
        q: "Do I charge sales tax on a speaking fee?",
        a: "In most US states, a live talk is a personal service and is not subject to sales tax, but rules vary and a few states tax certain services more broadly. Selling books, recordings or workshop materials at the event is different, because those are usually taxable goods. Check the state where the event happens and add tax only to the items that are taxable there.",
      },
      {
        q: "What payment terms are normal for speakers?",
        a: "A deposit at signing with the balance due on or before the event date is the most common structure for paid keynotes. Associations and corporate clients may insist on net 30 from the invoice date. Whatever you agree, write the due date as a calendar date on the invoice, list accepted payment methods and include bank or payment link details so the accounts payable team can pay without emailing you.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A speaker invoice template is a bill for a keynote, workshop, panel or training session. It lists the event, date and session, your speaking fee or honorarium, any deposit already paid, and travel costs such as airfare, hotel and per diem, followed by payment terms, a due date and how to pay.</p>

<p>Event organizers, associations and universities pay hundreds of speakers a year, and their finance teams need clean paperwork. A clear speaker invoice gets you paid faster and avoids the back and forth about receipts and tax forms. This guide explains what to include, shows a filled-in speaking fee invoice with real numbers, and covers deposits, honorariums, W-9s and cancellation fees.</p>

<h2>What is a speaker invoice?</h2>
<p>A speaker invoice (also called a speaking fee invoice or honorarium invoice) is a request for payment from a professional speaker to the organization that booked them. It turns the terms in your speaking agreement into a document accounts payable can process: who you are, what you delivered, what it costs and when it is due.</p>
<p>Like any invoice, it needs a unique number, an issue date and the legal names of both parties. If you are new to the basics, our guide to <a href="/blog/what-is-an-invoice">what an invoice is and what it must show</a> covers the universal fields. Speaker invoices add a few event-specific details:</p>
<ul>
<li><strong>Event name, venue and date</strong>, so the organizer can match the bill to the right budget line.</li>
<li><strong>Session title and format</strong> (keynote, breakout, panel, half-day workshop, virtual session).</li>
<li><strong>Contract or booking reference</strong>, including the speakers bureau booking number if a bureau is involved.</li>
<li><strong>Deposit received</strong> and the balance remaining.</li>
<li><strong>Expenses</strong> billed at cost or as an agreed flat amount.</li>
</ul>

<h2>What should a speaker invoice template include?</h2>
<p>Use this checklist to build your own template in the <a href="/invoice-generator">free invoice generator</a>, or compare it against what the client's vendor portal asks for.</p>
<table><thead><tr><th>Section</th><th>What to include</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Your details</td><td>Name or business name, address, email, phone, EIN if you have one</td><td>Matches your W-9 and vendor record</td></tr>
<tr><td>Client details</td><td>Organization's legal name, billing address, contact, PO number</td><td>Many associations will not pay without a PO</td></tr>
<tr><td>Invoice number and dates</td><td>Sequential number, issue date, due date</td><td>Lets both sides track the payment</td></tr>
<tr><td>Engagement</td><td>Event, venue, date, session title, length</td><td>Proves delivery and matches the contract</td></tr>
<tr><td>Fees</td><td>Speaking fee or honorarium, extra sessions, book bundles</td><td>The core amount owed</td></tr>
<tr><td>Expenses</td><td>Airfare, hotel, ground transport, per diem, mileage</td><td>Reimbursements the contract allows</td></tr>
<tr><td>Deposit and balance</td><td>Deposit paid with date, balance due</td><td>Prevents double payment</td></tr>
<tr><td>Payment terms</td><td>Due date, late fee policy, accepted methods, bank details</td><td>Removes excuses for slow payment</td></tr>
</tbody></table>
<p>Give every invoice its own number. A simple scheme such as SPK-2026-014 works well; the <a href="/tools/invoice-number-generator">invoice number generator</a> can produce a consistent format, and our <a href="/blog/invoice-numbering-system">invoice numbering guide</a> explains how to keep it sequential.</p>

<h2>Speaking fee vs honorarium: how to label it</h2>
<p>The word on the invoice should match the word in your agreement. Corporate clients usually budget a <strong>speaking fee</strong>, a negotiated price for your time, preparation and expertise. Universities, nonprofits and government bodies often offer an <strong>honorarium</strong>, a fixed amount set by policy. Some institutions pay honoraria through a different process than vendor invoices and may ask you to sign a payment request form instead.</p>
<p>For US tax purposes, both are usually income to the speaker. Organizations that pay you as a non-employee report it on Form 1099-NEC when the total reaches the reporting threshold, which rose from $600 to $2,000 for payments made in 2026 under the One Big Beautiful Bill Act. The IRS explains the rules in the <a href="https://www.irs.gov/forms-pubs/about-form-1099-nec">About Form 1099-NEC</a> page. A lower 1099 threshold or no 1099 at all does not change whether the income is taxable. See our article on <a href="/blog/1099-nec-threshold-2026">the 2026 1099-NEC threshold</a> for details.</p>

<h2>How much do speakers charge, and how do you structure the fee?</h2>
<p>There is no official rate table for speakers, and published ranges vary widely by audience, topic and reputation. Rather than quote numbers that may not fit your market, focus on structure. These are the most common ways speakers price an engagement:</p>
<ol>
<li><strong>Flat fee per talk.</strong> One price for a keynote of a set length, including preparation and a short Q and A.</li>
<li><strong>Fee plus expenses.</strong> The flat fee covers your time; travel is billed at cost or with an agreed cap.</li>
<li><strong>All-inclusive fee.</strong> One higher number that includes travel, popular with clients who want a single budget line.</li>
<li><strong>Day rate.</strong> For workshops and multi-session events, a full-day or half-day rate.</li>
<li><strong>Virtual rate.</strong> A lower fee for online sessions, since no travel time is lost.</li>
<li><strong>Add-ons.</strong> Breakout sessions, VIP meet and greets, recording rights, or a bulk book purchase.</li>
</ol>
<p>Whatever the model, write the scope on the invoice exactly as it appears in the contract. If recording rights were part of the deal, say so, because usage rights can be a separate line in the same way they are for a <a href="/blog/voice-over-invoice-template">voice over invoice</a>.</p>

<h2>Example speaker invoice (with real numbers)</h2>
<p>Here is a filled-in example for a keynote at a regional association conference. The client paid a 50% deposit on signing; this invoice bills the balance plus travel actually incurred.</p>
<p><strong>Invoice SPK-2026-014</strong> | Issued: November 2, 2026 | Due: November 16, 2026<br>
From: Dana Reyes Speaking LLC, Denver, CO | To: Midwest Facilities Managers Association, Chicago, IL | PO: MFMA-4471<br>
Event: MFMA Annual Conference, keynote "Running Lean Buildings", October 29, 2026, Hyatt Regency Chicago</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Keynote speaking fee (60 minutes incl. Q and A)</td><td>1</td><td>$7,500.00</td><td>$7,500.00</td></tr>
<tr><td>Breakout workshop (75 minutes)</td><td>1</td><td>$1,500.00</td><td>$1,500.00</td></tr>
<tr><td>Round-trip airfare DEN-ORD, economy (receipt attached)</td><td>1</td><td>$412.60</td><td>$412.60</td></tr>
<tr><td>Hotel, 2 nights (receipt attached)</td><td>2</td><td>$219.00</td><td>$438.00</td></tr>
<tr><td>Ground transport, airport to hotel and return</td><td>1</td><td>$96.40</td><td>$96.40</td></tr>
<tr><td>Per diem as agreed</td><td>2</td><td>$75.00</td><td>$150.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td><strong>$10,097.00</strong></td></tr>
<tr><td colspan="3">Less deposit received August 4, 2026 (invoice SPK-2026-009)</td><td>-$4,500.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$5,597.00</strong></td></tr>
</tbody></table>
<p>Notes: Payment by ACH to the account shown, or by card through the payment link. W-9 on file with MFMA. Thank you for having me.</p>
<p>Notice the deposit equals 50% of the two speaking fees ($9,000 x 50% = $4,500), not of expenses, which were unknown at signing. Each expense line names what it is and says a receipt is attached, which is what most finance teams need to approve reimbursement. For a deeper look at billing pass-through costs, see <a href="/blog/reimbursable-expenses-invoice">how to invoice reimbursable expenses</a>.</p>

<h2>How to bill travel and expenses as a speaker</h2>
<p>Travel is where most speaker invoices stall. Agree the rules in writing before you book anything, then mirror them on the invoice.</p>
<ul>
<li><strong>Airfare:</strong> state the class (economy, premium economy, business) and whether the client books directly.</li>
<li><strong>Hotel:</strong> many organizers book a room in the event block, so you never see the bill. If you pay, cap the nights.</li>
<li><strong>Ground transport:</strong> rideshare, taxi, parking, rental car. If you drive your own car, bill mileage at the agreed rate. The IRS standard business mileage rate for 2026 started at 72.5 cents per mile; check the <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates">IRS standard mileage rates page</a> for any change, and see our <a href="/blog/mileage-invoice">mileage invoice guide</a>.</li>
<li><strong>Per diem:</strong> a flat daily amount for meals avoids itemized meal receipts.</li>
<li><strong>Travel time:</strong> some speakers charge a travel day fee for long-haul trips. Our guide on <a href="/blog/how-to-bill-for-travel-time">how to bill for travel time</a> covers the options.</li>
</ul>

<h2>How to invoice a speaking engagement step by step</h2>
<ol>
<li><strong>Confirm the paperwork the client needs.</strong> Ask for the PO number, vendor registration forms, W-9 request and the address invoices go to.</li>
<li><strong>Send the deposit invoice at signing.</strong> Label it clearly as a deposit and reference the contract. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> shows the wording.</li>
<li><strong>Deliver the talk and keep receipts.</strong> Photograph every receipt during the trip.</li>
<li><strong>Prepare the balance invoice.</strong> List the fee, add-ons and expenses, then subtract the deposit.</li>
<li><strong>Attach supporting documents.</strong> Receipts, the W-9 if not already on file, and any expense form the client requires.</li>
<li><strong>Send within a few days of the event.</strong> Export a PDF and email it to the accounts payable contact, copying the event lead.</li>
<li><strong>Follow up on the due date.</strong> A short, friendly reminder is usually enough; our <a href="/blog/payment-reminder-emails">payment reminder email templates</a> help.</li>
</ol>

<h2>Cancellation, postponement and virtual switches</h2>
<p>Events get cancelled or moved online. Your contract should already say what happens, and your invoice should apply it without drama. A typical clause makes the deposit non-refundable, charges a percentage of the remaining fee if the event is cancelled inside a set window, and lets the client move the date once within 12 months. If an in-person keynote becomes virtual, many speakers keep the full fee but drop travel. When you need to bill for a cancellation, our guide to <a href="/blog/cancellation-fee-invoice">cancellation fee invoices</a> shows a clean layout.</p>

<h2>How to invoice universities, nonprofits and government events</h2>
<p>Institutional clients often pay speakers through a process built for employees and vendors, not for one-off guests. Expect more forms and longer timelines than a corporate booking.</p>
<ul>
<li><strong>Vendor or payee setup.</strong> Many universities require a supplier registration form, a W-9 and banking details before they can create a payment. Start this as soon as the booking is confirmed.</li>
<li><strong>Honorarium request forms.</strong> Some institutions do not accept your invoice at all; the host department submits an internal honorarium request and your invoice is attached as backup.</li>
<li><strong>Payment after the event.</strong> Public bodies often cannot prepay, so a deposit may not be possible. Agree in writing that payment is due within a set number of days after the talk.</li>
<li><strong>Expense rules.</strong> Government and grant-funded events may limit reimbursement to their own travel policy, such as economy airfare booked a set number of days ahead and per diem at published federal or state rates.</li>
<li><strong>Foreign speakers.</strong> Non-US speakers paid by US organizations may face withholding and need Form W-8BEN instead of a W-9, plus visa conditions that limit what can be paid. The host's tax office will guide this.</li>
</ul>
<p>Ask the organizer for a one-page summary of their payment process at booking. It saves weeks of chasing later.</p>

<h2>Deposit invoice vs balance invoice: what each should say</h2>
<p>Most paid keynotes produce two invoices. Keeping their wording consistent avoids confusion in the client's ledger.</p>
<table><thead><tr><th>Invoice</th><th>When</th><th>Key wording</th></tr></thead><tbody>
<tr><td>Deposit</td><td>At contract signing</td><td>"50% deposit to secure October 29, 2026 keynote, non-refundable per agreement section 4"</td></tr>
<tr><td>Balance</td><td>A few days before or after the event</td><td>Full fee, add-ons, expenses, less deposit received (with its invoice number)</td></tr>
<tr><td>Expense only</td><td>After travel, if expenses were excluded from the balance</td><td>Itemized travel with receipts, reference to the original booking</td></tr>
<tr><td>Cancellation</td><td>When the client cancels inside the penalty window</td><td>Clause quoted, percentage applied, deposit credited</td></tr>
</tbody></table>
<p>Each invoice gets its own number, but all should carry the same event reference so the client can see the full history at a glance.</p>

<h2>Common speaker invoicing mistakes</h2>
<ul>
<li><strong>Missing the PO number.</strong> Large organizations route invoices by PO; without it, yours sits in a queue.</li>
<li><strong>Sending expenses without receipts.</strong> Expect a rejection and a resubmission cycle.</li>
<li><strong>Forgetting the deposit.</strong> Always show the deposit as a deduction so the client does not pay twice or dispute the total.</li>
<li><strong>Vague payment terms.</strong> "Due upon receipt" is often ignored. Use a calendar date. Our article on <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains the options.</li>
<li><strong>Using your SSN on the invoice.</strong> Keep tax ID numbers off the invoice itself; provide them on the W-9 through a secure channel.</li>
<li><strong>Mixing goods and services.</strong> Book sales may be taxable while your talk is not. Separate them into different lines.</li>
</ul>
<p>This article is general information, not tax or legal advice. Tax treatment of speaking income and expenses depends on your situation, so check with a qualified tax professional.</p>

<h2>Speaker invoice FAQs and next steps</h2>
<p>Speakers who also consult or train often bill both kinds of work; the <a href="/blog/consulting-invoice-template">consulting invoice template</a> covers retainers and hourly advisory work, and an event planner invoice shows how organizers bill their side of the same event.</p>
<p>A good speaker invoice template keeps the fee, deposit, travel and terms on one clear page so the client's finance team can pay without questions. You can build yours now in our <a href="/invoice-generator">free invoice generator</a>: it needs no sign-up, builds the PDF right in your browser, and you can download it and send it to the event organizer in a few minutes.</p>
`,
  },
  {
    slug: "private-investigator-invoice-template",
    title: "Private Investigator Invoice Template (Free + Example)",
    description:
      "Private investigator invoice template: bill hourly surveillance, mileage, database searches and reports, apply the retainer, and keep case details confidential.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["legal-invoice-template", "retainer-invoice", "security-services-invoice-template"],
    faqs: [
      {
        q: "How do private investigators usually bill clients?",
        a: "Most bill by the hour for investigative work, with mileage and direct expenses added on top. Clients normally pay a retainer before work starts, and the investigator invoices against it, showing hours, expenses and the remaining balance. Some services, such as a background check or a process service attempt, are sold at a flat fee. Surveillance is often sold in blocks with a minimum number of hours per day.",
      },
      {
        q: "What is a retainer for a private investigator?",
        a: "A retainer is an advance payment the client makes before the case begins. The investigator draws against it as hours and expenses are incurred, and sends invoices or statements showing what was used. If the case uses less than the retainer, the agreement should say whether the unused amount is refunded. If it runs over, the client pays an additional invoice or tops up the retainer.",
      },
      {
        q: "Should a PI invoice include case details?",
        a: "Include enough to identify the work, such as a case or file number, the date range and the type of activity, but leave sensitive details in the written report. Invoices pass through accounting staff, law firm billing systems and email, so avoid naming the subject or describing findings on the invoice. A line such as surveillance, case 2026-118, 9.5 hours is usually enough.",
      },
      {
        q: "Can a private investigator charge for travel time?",
        a: "Many do, often at the same or a reduced hourly rate, and the policy should be in the engagement agreement. Travel time is commonly billed portal to portal, from the office to the assignment and back, plus mileage per mile. Some agencies waive travel inside a local radius. Whatever the policy, show travel hours and mileage on separate invoice lines so the client can see what they paid for.",
      },
      {
        q: "Do I need to put my license number on a PI invoice?",
        a: "Many states require licensed private investigators or agencies to show their license number on contracts, advertising or business documents, and some boards expect it on invoices and reports too. Requirements differ by state, so check your state licensing board. Even where it is not required, including the license number builds trust and helps attorneys and insurers verify you quickly.",
      },
      {
        q: "How do attorneys pay private investigators?",
        a: "When an attorney hires you, the law firm is usually your client and pays your invoice, then bills the cost to its own client as a case expense. Attorneys often want hours broken out by task and date, and some need invoices formatted to match their billing system. Ask about the firm's requirements at intake, and reference the matter number the firm gives you.",
      },
      {
        q: "Are private investigation services subject to sales tax?",
        a: "It depends on the state. Most states do not tax investigative services, but some states with broad sales taxes on services do include detective or security services in the taxable list. Check your state's department of revenue guidance, and if your service is taxable, show the tax as its own line on the invoice rather than folding it into the hourly rate.",
      },
      {
        q: "What payment terms should a PI agency use?",
        a: "Retainer upfront is standard for individual clients, who may otherwise struggle to pay once they have the report. Law firms and insurers often get net 30 terms because they are repeat clients with established payment processes. Whatever terms you choose, state them in the agreement and on every invoice, and consider holding the final report until the balance is paid for non-retainer clients.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A private investigator invoice template bills a client for investigative work: hourly surveillance and research, travel time, mileage, database or records fees, report writing and court time. It shows the case number, dates and hours, applies any retainer, and states the balance due without revealing confidential case findings.</p>

<p>Private investigation is an hourly business with a lot of small costs: miles driven, records ordered, video storage, sometimes a second operative. Clients range from worried individuals to insurance carriers and law firms, and each wants a different level of detail. This guide shows how to structure a PI invoice, how to bill against a retainer, and includes a worked example with real numbers.</p>

<h2>What is a private investigator invoice?</h2>
<p>A private investigator invoice is the bill a licensed investigator or agency sends after (or during) a case. It lists billable time, expenses and fees, subtracts any retainer, and asks for payment by a set date. It is different from your investigative report: the report contains findings, the invoice contains only what is needed to justify the charges.</p>
<p>Typical PI clients include:</p>
<ul>
<li><strong>Attorneys and law firms</strong> needing witness locates, background research and trial support.</li>
<li><strong>Insurance carriers and TPAs</strong> ordering claims and surveillance investigations.</li>
<li><strong>Employers</strong> requesting workplace or pre-employment investigations (subject to background check laws).</li>
<li><strong>Individuals</strong> with family, infidelity, asset or missing person matters.</li>
</ul>
<p>The structure is close to a <a href="/blog/legal-invoice-template">legal invoice</a>: time entries by date and task, then expenses. Agencies that also provide guards or patrol should keep those on a separate <a href="/blog/security-services-invoice-template">security services invoice</a>.</p>

<h2>What to include on a PI invoice</h2>
<table><thead><tr><th>Field</th><th>Example</th><th>Notes</th></tr></thead><tbody>
<tr><td>Agency name and license number</td><td>Northline Investigations, License #A-12345</td><td>Check your state board's rules on displaying it</td></tr>
<tr><td>Client and reference</td><td>Harper and Cole LLP, matter 24-0391</td><td>Use the client's matter or claim number</td></tr>
<tr><td>Case or file number</td><td>NI-2026-118</td><td>Your internal reference</td></tr>
<tr><td>Invoice number and dates</td><td>INV-1187, issued and due dates</td><td>Sequential and unique</td></tr>
<tr><td>Time entries</td><td>Date, activity, investigator, hours, rate</td><td>Generic activity labels, no findings</td></tr>
<tr><td>Mileage</td><td>Miles x rate</td><td>Rate per your agreement</td></tr>
<tr><td>Expenses</td><td>Database searches, court records, parking, tolls</td><td>At cost or with stated markup</td></tr>
<tr><td>Retainer applied</td><td>Retainer received and amount applied</td><td>Show the remaining balance</td></tr>
<tr><td>Terms</td><td>Due date, late fee, payment methods</td><td>Match the engagement agreement</td></tr>
</tbody></table>

<h2>How private investigators charge: hourly, flat fee and retainer</h2>
<h3>Hourly rates</h3>
<p>Most investigative work is hourly, and rates vary by state, specialty and whether the client is an individual, attorney or insurer. Published surveys differ, so set your rate from your own costs and local competition. Common hourly categories include surveillance, field interviews, research, report writing, and court testimony (often billed at a higher rate with a minimum, such as half a day).</p>
<h3>Minimums and blocks</h3>
<p>Surveillance is often sold with a daily minimum, such as 4 or 8 hours, because an investigator who sets up for a subject cannot take other work that day. Spell out the minimum in the agreement and on the invoice line.</p>
<h3>Flat fees</h3>
<p>Packaged services such as a basic background check, an asset search or a skip trace are often flat-fee. List them as a single line with a clear description.</p>
<h3>Retainers</h3>
<p>Most agencies take a retainer before starting, especially from individuals. Each invoice then shows the work done and draws the balance down. Our <a href="/blog/retainer-invoice">retainer invoice guide</a> explains the mechanics and wording.</p>

<h2>Billing mileage and expenses</h2>
<p>Mileage is often the largest expense line for field work. Many agencies use the IRS standard business mileage rate as their reimbursement rate. For 2026 the IRS set it at 72.5 cents per mile from January 1, and trade publications reported a mid-year increase for miles driven from July 1; confirm the current figure on the <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates">IRS standard mileage rates page</a> before quoting it. You can also agree your own rate in the contract. Our <a href="/blog/mileage-invoice">mileage invoice guide</a> shows how to lay out trip lines, and the <a href="/blog/mileage-log-template">mileage log template</a> keeps the records that back them up.</p>
<p>Other common PI expenses:</p>
<ul>
<li>Database and public records search fees</li>
<li>Court record copies and certified documents</li>
<li>Parking, tolls and public transport</li>
<li>Video storage, transcription and media copies</li>
<li>Second investigator for two-car surveillance</li>
<li>Out-of-area lodging and meals, if agreed</li>
</ul>
<p>Say in your agreement whether expenses are billed at cost or with a handling markup, then bill consistently. For a general approach to pass-through costs, see <a href="/blog/reimbursable-expenses-invoice">how to bill reimbursable expenses</a>.</p>

<h2>Example private investigator invoice</h2>
<p>This example bills an attorney for a witness locate and two days of surveillance. Rates are illustrative, not a market survey.</p>
<p><strong>Invoice INV-1187</strong> | Northline Investigations LLC, License #A-12345 | Issued: October 30, 2026 | Due: November 29, 2026 (net 30)<br>
Client: Harper and Cole LLP, Attn: Billing | Matter: 24-0391 | Case: NI-2026-118</p>
<table><thead><tr><th>Date</th><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Oct 20</td><td>Records and database research, witness locate</td><td>2.5 hr</td><td>$85.00</td><td>$212.50</td></tr>
<tr><td>Oct 22</td><td>Surveillance (8-hour minimum)</td><td>8.0 hr</td><td>$95.00</td><td>$760.00</td></tr>
<tr><td>Oct 23</td><td>Surveillance</td><td>9.5 hr</td><td>$95.00</td><td>$902.50</td></tr>
<tr><td>Oct 24</td><td>Field interview and travel</td><td>3.0 hr</td><td>$85.00</td><td>$255.00</td></tr>
<tr><td>Oct 26</td><td>Report preparation and video review</td><td>2.0 hr</td><td>$85.00</td><td>$170.00</td></tr>
<tr><td>Oct 20-24</td><td>Mileage</td><td>186 mi</td><td>$0.725</td><td>$134.85</td></tr>
<tr><td>Oct 20</td><td>Database search fees (at cost)</td><td>1</td><td>$48.00</td><td>$48.00</td></tr>
<tr><td>Oct 24</td><td>Parking and tolls (at cost)</td><td>1</td><td>$22.75</td><td>$22.75</td></tr>
<tr><td colspan="4"><strong>Total charges</strong></td><td><strong>$2,505.60</strong></td></tr>
<tr><td colspan="4">Less retainer applied (received Oct 15)</td><td>-$2,000.00</td></tr>
<tr><td colspan="4"><strong>Balance due</strong></td><td><strong>$505.60</strong></td></tr>
</tbody></table>
<p>The math: hours total 25.0 (2.5 + 8 + 9.5 + 3 + 2), 17.5 of them surveillance at $95 and 7.5 other work at $85, for $2,300.00 of labor. Add $134.85 mileage (186 x $0.725) and $70.75 of expenses to reach $2,505.60, then subtract the $2,000 retainer. The descriptions identify the activity but say nothing about the subject or what was observed.</p>

<h2>How to create a PI invoice step by step</h2>
<ol>
<li><strong>Log time daily.</strong> Record date, start and end time, activity and investigator. A <a href="/blog/timesheet-template">timesheet template</a> works if you have no case software.</li>
<li><strong>Log miles and keep receipts.</strong> Odometer readings or GPS logs support mileage lines.</li>
<li><strong>Open a new invoice</strong> in the <a href="/invoice-generator">free invoice generator</a> with your agency details and license number.</li>
<li><strong>Add the client's reference.</strong> Matter, claim or PO number goes near the top.</li>
<li><strong>Enter time lines, then expenses.</strong> Keep labels generic and consistent.</li>
<li><strong>Apply the retainer.</strong> Show the amount applied and the balance, or the remaining credit.</li>
<li><strong>Set terms and send.</strong> Email the PDF invoice separately from the confidential report if the client prefers.</li>
</ol>

<h2>Confidentiality on PI invoices</h2>
<p>Invoices travel through more hands than reports: bookkeepers, law firm billing staff, insurers' payables teams and sometimes the opposing side in a fee dispute. Keep the invoice factual and dull. Use the case number instead of the subject's name, describe activities generically, and never include photos, addresses of subjects or conclusions. Deliver findings only in the report, through whatever secure channel you agreed.</p>

<h2>Billing different PI clients: individuals, attorneys and insurers</h2>
<p>The same hour of surveillance can need three different invoice formats depending on who pays.</p>
<table><thead><tr><th>Client type</th><th>Typical terms</th><th>Invoice needs</th></tr></thead><tbody>
<tr><td>Private individual</td><td>Retainer before work, top-ups as needed</td><td>Simple time and expense summary, retainer balance, plain-language descriptions</td></tr>
<tr><td>Law firm</td><td>Net 30, sometimes paid when the case resolves if agreed</td><td>Matter number, task-by-date entries, expenses at cost, sometimes billing codes</td></tr>
<tr><td>Insurance carrier or TPA</td><td>Rates and caps set by the carrier's guidelines</td><td>Claim number, adjuster name, hour caps per assignment, mileage per their policy</td></tr>
<tr><td>Employer or HR</td><td>Net 30, PO required</td><td>PO, department, neutral activity labels for workplace investigations</td></tr>
</tbody></table>
<p>Insurance carriers in particular often publish vendor billing guidelines that cap surveillance hours per day, set mileage rates and refuse certain expenses. Read them before the assignment, because invoices that break the guidelines are cut automatically. For employer work involving background screening, federal and state consumer reporting laws may apply; confirm your obligations before you take the assignment.</p>

<h2>Retainer accounting: keeping client funds straight</h2>
<p>When you hold a retainer, you are holding the client's money until you earn it. Good practice is to:</p>
<ol>
<li>Record the retainer as a liability (unearned revenue) when received, not as income.</li>
<li>Move amounts to income only as you invoice hours and expenses against it.</li>
<li>Send a statement with each invoice showing opening retainer, amounts applied and closing balance.</li>
<li>Refund any unused balance at the end of the case if the agreement says it is refundable, with a final zero-balance invoice.</li>
<li>Request a replenishment before the balance runs out, not after you have worked for free for a week.</li>
</ol>
<p>Some states have specific rules for how licensed investigators handle client funds, so check with your licensing board. Clear retainer statements are also your best defense if a client later disputes the bill.</p>

<h2>Common mistakes on private investigator invoices</h2>
<ul>
<li><strong>Revealing findings in line items.</strong> "Subject seen at bar" belongs in the report, not the invoice.</li>
<li><strong>Not showing the retainer.</strong> Clients need to see how their advance was used.</li>
<li><strong>Billing minimums the agreement did not mention.</strong> A surprise 8-hour minimum causes disputes.</li>
<li><strong>Lumping expenses.</strong> "Expenses: $300" invites questions; itemize.</li>
<li><strong>Waiting until the case ends.</strong> On long cases, bill weekly or when the retainer runs low.</li>
<li><strong>Ignoring sales tax rules.</strong> A few states tax investigative services; check your state.</li>
</ul>
<p>This article is general information, not legal or tax advice. PI licensing and billing rules are set by each state.</p>

<h2>PI invoice checklist before you send</h2>
<ul>
<li>Agency name, address and license number match your state registration.</li>
<li>Client reference (matter, claim or PO number) is at the top.</li>
<li>Every time entry has a date, activity label, hours and rate.</li>
<li>Surveillance minimums are applied only where the agreement allows them.</li>
<li>Mileage lines show miles and the agreed rate, with a log to back them up.</li>
<li>Expenses are itemized and receipts are attached or available.</li>
<li>Retainer received, amount applied and balance remaining are shown.</li>
<li>No subject names, addresses, photos or findings appear anywhere.</li>
<li>Due date is a calendar date, and payment methods are listed.</li>
</ul>
<p>Running through this list takes two minutes and avoids most of the questions attorneys' billing departments and insurance adjusters send back.</p>

<h2>Get paid for your investigation work</h2>
<p>If you are chasing late payments from individual clients, our guides to <a href="/blog/late-payment-fees">late payment fees</a> and <a href="/blog/invoice-payment-terms">payment terms</a> help you set rules that hold up. A private investigator invoice template with clear time entries, itemized mileage and a visible retainer balance makes your bill easy to approve. Build one now with our <a href="/invoice-generator">free invoice generator</a>: there is no sign-up, the PDF is created in your browser, and you can download it and send it straight to your client.</p>
`,
  },
  {
    slug: "tax-preparer-invoice-template",
    title: "Tax Preparation Invoice Template + Per-Form Pricing",
    description:
      "Tax preparation invoice template for preparers, EAs and CPAs: per-form pricing, engagement letters, Section 7216 consent and an example invoice with totals.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "bookkeeping-services-invoice-template",
      "invoice-payment-terms",
      "consulting-invoice-template",
    ],
    faqs: [
      {
        q: "Should tax preparers charge per form or by the hour?",
        a: "Most individual return work is priced per form or per return, because clients want to know the price up front and many returns follow a predictable pattern. Hourly billing is more common for complex work: amended returns, IRS notices, multi-year cleanups and consulting. Many practices combine the two, with a per-form base fee and an hourly line for extra time spent on disorganized records or unusual situations.",
      },
      {
        q: "Can I charge a fee based on the size of the client's refund?",
        a: "Generally no. Treasury Circular 230, which governs practice before the IRS, restricts contingent fees for preparing original returns, and fees based on a percentage of the refund are a classic example. There are narrow exceptions, such as certain examinations and refund claims. Stick to fixed per-form or hourly fees for original returns, and read the current Circular 230 text or ask a professional association if you are unsure.",
      },
      {
        q: "Do I need an engagement letter for tax preparation?",
        a: "It is not always legally required, but it is strongly recommended. An engagement letter states which returns you will prepare, for which year, what the client must provide, what is excluded, your fees and when payment is due. It protects you if a client later says you agreed to do more, and it gives your invoice something to point to. Update it each tax season.",
      },
      {
        q: "When should a tax preparer send the invoice?",
        a: "Many preparers present the invoice when the return is ready for review and collect payment before filing or before releasing the final copies. Others take a deposit at intake for complex returns. Collecting before you e-file is common because, once the return is filed, the client has less reason to pay. Make the policy clear in the engagement letter so it does not surprise anyone.",
      },
      {
        q: "Can the tax preparation fee be deducted from the client's refund?",
        a: "Some preparers offer refund transfer products through a bank partner that let the fee come out of the refund. These carry their own fees and disclosure requirements, and the IRS treats such arrangements carefully. If you offer one, the invoice should still show your preparation fee clearly, along with any separate bank product fee, so the client can see what they are paying and to whom.",
      },
      {
        q: "Is tax preparation subject to sales tax?",
        a: "In most US states, tax preparation is a professional service and not subject to sales tax, but a few states tax a broad range of services, and rules change. Check your state's department of revenue. If your service is taxable, list the tax separately on the invoice. Software or printed materials sold separately may be treated differently from the service itself.",
      },
      {
        q: "What is Form 7216 consent and does it affect invoicing?",
        a: "Section 7216 of the Internal Revenue Code restricts how preparers use and disclose tax return information. If you want to use client information for something other than preparing the return, such as offering other services or sharing with a third party, you usually need signed client consent in the format the regulations require. It does not change your invoice, but sending return data to a billing vendor or marketing list without consent can be a problem.",
      },
      {
        q: "How should I handle clients who do not pay a tax prep invoice?",
        a: "Prevention works best: collect before filing, or take a deposit for complex returns. If an invoice is still unpaid, send reminders at set intervals, then a final notice with a late fee if your engagement letter allows one. Be careful about holding client records: professional rules can limit withholding records the client provided, even when fees are unpaid, so check the rules for your credential.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A tax preparation invoice is the bill a tax preparer, enrolled agent or CPA sends for preparing returns. It lists each return and form prepared (for example Form 1040, Schedule C, a state return), the fee for each, any hourly extras such as notice responses, the total, and payment terms that usually require payment before filing.</p>

<p>Tax season compresses a year of billing into a few months. If your invoices are inconsistent, you spend March answering "why did my fee go up?" instead of preparing returns. This guide covers how to structure a tax preparation invoice, per-form pricing, engagement letters, ethics rules that affect fees, and an example invoice with real totals.</p>

<h2>What is a tax preparation invoice?</h2>
<p>A tax preparation invoice is a request for payment for tax services: preparing and filing federal, state and local returns, plus related work such as extensions, estimated tax vouchers, amended returns and IRS correspondence. It is usually generated when the return is ready for client review.</p>
<p>Who sends one:</p>
<ul>
<li><strong>Paid preparers</strong> with a PTIN (Preparer Tax Identification Number). The IRS requires anyone who prepares federal returns for compensation to have a valid PTIN; see the <a href="https://www.irs.gov/tax-professionals/ptin-requirements-for-tax-return-preparers">IRS PTIN requirements</a>.</li>
<li><strong>Enrolled agents (EAs)</strong>, licensed by the IRS to represent taxpayers.</li>
<li><strong>CPAs and accounting firms</strong>, who often bill tax work alongside bookkeeping. If you also keep the books, see the <a href="/blog/bookkeeping-services-invoice-template">bookkeeping services invoice template</a>.</li>
</ul>

<h2>What should a tax preparation invoice include?</h2>
<table><thead><tr><th>Element</th><th>Example</th></tr></thead><tbody>
<tr><td>Practice details</td><td>Firm name, address, phone, email; credential (EA, CPA)</td></tr>
<tr><td>Client details</td><td>Client name(s) as on the return, address</td></tr>
<tr><td>Invoice number and date</td><td>TX26-0412, issued April 2, 2026</td></tr>
<tr><td>Tax year</td><td>Tax year 2025 returns</td></tr>
<tr><td>Itemized forms and schedules</td><td>Form 1040, Schedule C, Schedule SE, state return</td></tr>
<tr><td>Additional services</td><td>Extension, estimated tax vouchers, hourly notice work</td></tr>
<tr><td>Discounts or credits</td><td>Returning client discount, deposit paid</td></tr>
<tr><td>Total and due date</td><td>Due before e-file authorization</td></tr>
<tr><td>Payment methods</td><td>Card, ACH, check</td></tr>
</tbody></table>
<p>Keep Social Security numbers off the invoice. The return has them; the invoice does not need them. Use the client's name and your internal client ID instead.</p>

<h2>How to price tax preparation: per form, per return or hourly</h2>
<p>There are three common models, and many practices blend them.</p>
<ol>
<li><strong>Per form.</strong> A base fee for Form 1040 plus a fee for each schedule or form (Schedule C, Schedule E per property, Form 8829, state return). Clients see exactly why one return costs more than another.</li>
<li><strong>Per return or tiered packages.</strong> Simple, standard and complex tiers with defined scopes. Easy to sell, but you need clear rules for moving a client up a tier.</li>
<li><strong>Hourly.</strong> Best for cleanup, multi-year non-filers, amended returns, audits and notices, where the work is unpredictable.</li>
</ol>
<p>For benchmarks, the National Association of Tax Professionals publishes a periodic <a href="https://www.natptax.com/news-insights/2025-tax-preparation-fee-study-natp-media-highlights/">tax preparation fee study</a>. Its 2025 summary put the average fee for a Form 1040 with Schedules 1 to 3 at about $236, and noted fees rising year over year. Treat any average as a starting point: local markets, credentials and client complexity move prices a lot.</p>
<p>Here is an illustrative per-form price list (not a survey) to show how the structure works:</p>
<table><thead><tr><th>Item</th><th>Illustrative fee</th></tr></thead><tbody>
<tr><td>Form 1040 base (incl. standard W-2 income)</td><td>$225</td></tr>
<tr><td>Itemized deductions (Schedule A)</td><td>$75</td></tr>
<tr><td>Schedule C, sole proprietor</td><td>$175</td></tr>
<tr><td>Schedule E, per rental property</td><td>$95</td></tr>
<tr><td>Home office (Form 8829)</td><td>$50</td></tr>
<tr><td>State resident return</td><td>$75</td></tr>
<tr><td>Extension (Form 4868)</td><td>$40</td></tr>
<tr><td>IRS notice response, per hour</td><td>$150</td></tr>
</tbody></table>
<p>Publish your own list as a <a href="/blog/price-list-template">price list</a> and send it with the engagement letter, so every invoice ties back to a known price.</p>

<h2>Fee rules that affect tax preparers</h2>
<p>Tax preparers have ethics rules that most service businesses do not.</p>
<ul>
<li><strong>No contingent fees on original returns.</strong> Treasury <a href="https://www.irs.gov/tax-professionals/circular-230-tax-professionals">Circular 230</a> generally prohibits fees based on the refund amount or tax saved for original returns, with narrow exceptions.</li>
<li><strong>Section 7216.</strong> Using or disclosing return information for anything other than preparing the return usually requires signed client consent. Be careful about which billing and marketing tools receive client data.</li>
<li><strong>Records.</strong> Circular 230 also covers returning client records on request, which limits using records as leverage for unpaid fees.</li>
<li><strong>Credentials and state rules.</strong> Some states (for example California, Oregon, Maryland and New York) have their own preparer registration or licensing requirements.</li>
</ul>
<p>This is general information, not legal or tax advice. Check the current regulations and your professional body's guidance.</p>

<h2>The engagement letter: your invoice's foundation</h2>
<p>An engagement letter should list the returns you will prepare and the tax year, the client's responsibilities (complete documents by a date, accuracy of information), exclusions (for example, foreign reporting or prior years), your fee schedule or estimate, when payment is due, and what happens if the client goes quiet. When your invoice says "per engagement letter dated February 3, 2026", most fee questions answer themselves. A general <a href="/blog/service-agreement-template">service agreement template</a> can be adapted if you do not have one.</p>

<h2>Example tax preparation invoice</h2>
<p>A self-employed graphic designer with one rental property, using the illustrative fees above.</p>
<p><strong>Invoice TX26-0412</strong> | Clearpath Tax Services, Enrolled Agent | Issued: April 2, 2026 | Due: on or before e-file authorization<br>
Client: Jordan and Sam Patel | Client ID: 1043 | Tax year: 2025</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Form 1040 base return (married filing jointly)</td><td>1</td><td>$225.00</td><td>$225.00</td></tr>
<tr><td>Schedule A, itemized deductions</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>Schedule C, design business, with Schedule SE</td><td>1</td><td>$175.00</td><td>$175.00</td></tr>
<tr><td>Form 8829, home office</td><td>1</td><td>$50.00</td><td>$50.00</td></tr>
<tr><td>Schedule E, rental property</td><td>1</td><td>$95.00</td><td>$95.00</td></tr>
<tr><td>State resident return</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td>2026 estimated tax vouchers (federal and state)</td><td>1</td><td>$40.00</td><td>$40.00</td></tr>
<tr><td>Additional time: organizing unsorted expense records</td><td>1.5 hr</td><td>$100.00</td><td>$150.00</td></tr>
<tr><td colspan="3">Subtotal</td><td>$885.00</td></tr>
<tr><td colspan="3">Returning client discount (10% on forms, excl. hourly)</td><td>-$73.50</td></tr>
<tr><td colspan="3">Deposit paid at intake</td><td>-$200.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$611.50</strong></td></tr>
</tbody></table>
<p>The discount applies to $735 of form fees ($885 minus $150 hourly), so 10% is $73.50. Separating the hourly line shows the client exactly how disorganized records cost them, which tends to improve next year's paperwork.</p>

<h2>How to invoice tax clients step by step</h2>
<ol>
<li><strong>Send the engagement letter and price list</strong> before you receive documents.</li>
<li><strong>Take a deposit</strong> for business, rental or multi-state returns. See our <a href="/blog/deposit-invoice">deposit invoice guide</a>.</li>
<li><strong>Track forms as you prepare.</strong> Your software's form list doubles as your invoice line list.</li>
<li><strong>Record extra time</strong> with a short reason.</li>
<li><strong>Create the invoice</strong> in the <a href="/invoice-generator">free invoice generator</a> with a sequential number from the <a href="/tools/invoice-number-generator">invoice number generator</a>.</li>
<li><strong>Present it with the return for review</strong> and collect before e-filing or releasing final copies.</li>
<li><strong>Issue a receipt</strong> once paid; the <a href="/blog/payment-receipt-template">payment receipt template</a> works for this.</li>
</ol>

<h2>Pricing add-on services outside tax season</h2>
<p>Tax practices increasingly earn year-round revenue from services that do not fit a per-form price list. Invoice these clearly, because clients often assume they are included in last spring's fee.</p>
<table><thead><tr><th>Service</th><th>Common pricing</th><th>Invoice tip</th></tr></thead><tbody>
<tr><td>IRS or state notice response</td><td>Hourly, or flat fee per simple notice</td><td>Reference the notice number (for example CP2000) and tax year</td></tr>
<tr><td>Amended return (Form 1040-X)</td><td>Flat fee plus forms changed</td><td>State whether the error was yours (often free) or new client info</td></tr>
<tr><td>Quarterly estimate planning</td><td>Flat fee per quarter or annual package</td><td>List each quarter's vouchers and due dates</td></tr>
<tr><td>Prior-year returns for non-filers</td><td>Per return, plus hourly for document reconstruction</td><td>One line per tax year</td></tr>
<tr><td>Tax planning meeting</td><td>Hourly or fixed session fee</td><td>Date, duration, topics covered</td></tr>
<tr><td>Representation (audit, collections)</td><td>Hourly with retainer</td><td>Requires Form 2848 power of attorney on file</td></tr>
</tbody></table>
<p>For hourly services, a <a href="/blog/retainer-invoice">retainer invoice</a> protects you on longer matters like audits. Keep a log of time by date and task, just as you would for consulting work.</p>

<h2>Business returns: billing partnerships, S corps and C corps</h2>
<p>Business returns (Form 1065, 1120-S and 1120) usually cost more than individual returns and are less predictable, because the quality of the books drives the time. Many preparers quote a base fee for the return that assumes reconciled books and a trial balance, then add hourly charges for bookkeeping cleanup. Separate those clearly on the invoice: "Form 1120-S preparation" as one line, "Year-end bookkeeping adjustments, 6.5 hours" as another. Each Schedule K-1 is often priced per partner or shareholder.</p>
<p>When you prepare both the business return and the owners' personal returns, send separate invoices to each taxpayer. The business pays for its return and the owner pays for theirs, which keeps deductions clean and avoids mixing personal and business expenses. Business clients that need monthly help are usually better served by a bookkeeping engagement billed monthly, as in the bookkeeping template linked above.</p>

<h2>Common tax prep invoicing mistakes</h2>
<ul>
<li><strong>One-line invoices.</strong> "Tax return: $650" leads to fee disputes. Itemize forms.</li>
<li><strong>Surprise increases.</strong> If this year's fee is higher, show what changed (a new Schedule C, a rental).</li>
<li><strong>Refund-based pricing.</strong> Avoid it; it conflicts with Circular 230.</li>
<li><strong>Filing before payment</strong> for new clients without a deposit.</li>
<li><strong>Putting SSNs on invoices</strong> sent by unencrypted email.</li>
<li><strong>Forgetting off-season work.</strong> Notices and estimated payments in the fall should be billed too; see <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> for the deadlines clients ask about.</li>
</ul>

<h2>Payment methods and collection timing for tax practices</h2>
<p>Tax season creates a flood of small payments in a few weeks, so make paying easy and immediate.</p>
<table><thead><tr><th>Method</th><th>Best for</th><th>Note</th></tr></thead><tbody>
<tr><td>Card at signing or e-sign</td><td>Individual clients</td><td>Fast; processing fees apply, check surcharge rules in your state</td></tr>
<tr><td>ACH or bank transfer</td><td>Business clients, larger fees</td><td>Low cost, slower to clear</td></tr>
<tr><td>Check</td><td>Older and local clients</td><td>Allow time to clear before releasing returns</td></tr>
<tr><td>Payment link on the invoice</td><td>Remote clients</td><td>Lets clients pay from email in one click</td></tr>
</tbody></table>
<p>If you pass card fees to clients, read the <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> first, because card networks and some states restrict surcharging. Whatever you accept, list the methods on every invoice, and send a short reminder if a return has been ready for review for more than a week without payment.</p>

<h2>Bill tax clients clearly</h2>
<p>A tax preparation invoice that itemizes each form, ties back to an engagement letter and is collected before filing removes most fee arguments. Clients who are self-employed may also need help with <a href="/blog/self-employed-tax-deductions">self-employed deductions</a>, which is a natural add-on service. Create your invoice with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, the PDF is built in your browser, and you can download it and hand it over with the return.</p>
`,
  },
  {
    slug: "bartending-invoice-template",
    title: "Bartending Invoice Template for Events (Free + Example)",
    description:
      "Bartending invoice template for weddings and private events: hourly rates, minimums, setup, travel, gratuity and bar supplies, with a full example invoice.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "catering-invoice-template",
      "event-planner-invoice-template",
      "no-tax-on-tips-self-employed",
    ],
    faqs: [
      {
        q: "How do mobile bartenders charge for events?",
        a: "Most charge an hourly rate per bartender with a minimum booking, often three to five hours, plus setup and breakdown time. Some sell packages that include a set number of hours, a portable bar and basic supplies. Travel beyond a local radius, extra bartenders for larger guest counts and premium add-ons like signature cocktails are billed separately. A deposit holds the date.",
      },
      {
        q: "Can a mobile bartender sell alcohol to the client?",
        a: "In most US states, selling alcohol requires a liquor license, and many mobile bartending businesses avoid that by having the host buy the alcohol while they provide only service. Some states offer caterer or special event permits. Rules vary widely, so check with your state alcohol beverage control agency before putting any alcohol on an invoice.",
      },
      {
        q: "Should gratuity be included on a bartending invoice?",
        a: "You can add a service charge or suggested gratuity, but label it accurately. A mandatory charge set by you is generally treated as a service charge, not a tip, for US tax purposes. A tip is voluntary and the guest or host decides the amount. If you want an automatic charge, call it a service charge and explain it in your contract. Optional gratuity can be left as a blank line.",
      },
      {
        q: "How many bartenders do I need for an event?",
        a: "A common rule of thumb in the industry is one bartender for every 50 to 75 guests for beer and wine, and more for a full bar or signature cocktails. Fast service matters most at the start of the reception, so busy events often add a second bartender for the first hour or two. Put the staffing ratio in your quote so clients understand why extra staff appear on the invoice.",
      },
      {
        q: "Do bartenders need liquor liability insurance?",
        a: "Many venues require event bartenders to carry general and liquor liability insurance and to name the venue as an additional insured. Even where not required, it protects you if a guest is injured after drinking. Some bartenders pass part of the cost to clients as a line item when a venue requires a specific certificate. Check venue requirements before quoting.",
      },
      {
        q: "Is there sales tax on bartending services?",
        a: "It depends on the state. Some states tax catering and event services, including bartending labor, while others tax only the sale of food, drinks and goods. If you supply mixers, garnishes or rental equipment, those items may be taxable even where labor is not. Check with your state department of revenue and list taxable items on their own lines.",
      },
      {
        q: "Can tips from bartending gigs qualify for the no tax on tips deduction?",
        a: "Bartenders are on the IRS list of occupations that customarily receive tips, and self-employed workers can qualify for the federal qualified tips deduction if they meet the rules, including reporting requirements, income limits and a $25,000 annual cap. Mandatory service charges do not count as tips. Read the IRS guidance and talk to a tax professional before relying on it.",
      },
      {
        q: "What deposit should a bartending service ask for?",
        a: "Deposits of 25% to 50% of the estimated total are common for private events, with the balance due before or on the event date. A deposit compensates you for turning down other bookings for that date. State whether it is refundable, under what conditions, and how it is applied to the final invoice, and send a written receipt when you receive it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A bartending invoice template bills a client for bar service at a wedding, party or corporate event. It lists the event date and venue, bartender hours at your hourly rate (with any minimum), setup and breakdown, travel, bar supplies or rentals, any service charge, the deposit paid, and the balance due with payment terms.</p>

<p>Mobile bartending looks simple: show up, pour, leave. But the bill usually includes more than hours: a minimum booking, prep time, travel to a barn venue an hour away, a rented bar, cups and ice, a second bartender for the rush. This guide explains how to invoice each piece, how to handle gratuity correctly, and what alcohol rules mean for your paperwork.</p>

<h2>What is a bartending invoice?</h2>
<p>A bartending invoice is the request for payment a bartender or mobile bar company sends to the event host, planner or venue. It is usually issued twice: a deposit invoice when the booking is confirmed and a final invoice before or right after the event. It works alongside a contract that sets the hours, guest count, bar menu and policies.</p>
<p>Bartenders often work as part of a larger event team. A <a href="/blog/catering-invoice-template">catering invoice</a> covers food, an <a href="/blog/event-planner-invoice-template">event planner invoice</a> covers coordination, and a <a href="/blog/dj-invoice-template">DJ invoice</a> covers music. Keeping your invoice separate and clear helps the host track their budget.</p>

<h2>What to include on a bartending invoice</h2>
<table><thead><tr><th>Item</th><th>Example</th><th>Tip</th></tr></thead><tbody>
<tr><td>Business and contact details</td><td>Business name, phone, email, license or permit number if any</td><td>Venues often ask for this</td></tr>
<tr><td>Client and event</td><td>Host name, event type, date, venue address, guest count</td><td>Guest count drives staffing</td></tr>
<tr><td>Service hours</td><td>Bartenders x hours x rate</td><td>Show the minimum if applied</td></tr>
<tr><td>Setup and breakdown</td><td>1 hour before, 30 minutes after</td><td>Bill separately or include and say so</td></tr>
<tr><td>Bar package or supplies</td><td>Ice, cups, napkins, garnishes, mixers</td><td>Itemize if taxable</td></tr>
<tr><td>Rentals</td><td>Portable bar, coolers, glassware</td><td>Note breakage policy</td></tr>
<tr><td>Travel</td><td>Miles beyond a free radius</td><td>Set radius in the quote</td></tr>
<tr><td>Service charge or gratuity</td><td>18% service charge, or optional tip line</td><td>Label accurately</td></tr>
<tr><td>Deposit and balance</td><td>Deposit received date and amount</td><td>Subtract before the total</td></tr>
</tbody></table>

<h2>How much do event bartenders charge?</h2>
<p>Rates vary by city, event type and experience, and we are not aware of a reliable national survey of mobile bartending rates, so treat any figure you see online as a rough guide. What clients compare is usually the structure:</p>
<ul>
<li><strong>Hourly per bartender</strong> with a minimum (for example 4 hours) for private events.</li>
<li><strong>Packages</strong> that bundle hours, a bar setup and basic supplies, priced per event or per guest.</li>
<li><strong>Per-guest pricing</strong> for drink packages where the business holds the right permits to supply alcohol.</li>
<li><strong>Add-ons</strong>: signature cocktail design, champagne toast service, extra bartenders, barbacks, glassware rental.</li>
</ul>
<p>Our guide to <a href="/blog/rush-fee">rush fees</a> is useful if you take last-minute bookings, and the <a href="/blog/cancellation-fee-invoice">cancellation fee invoice</a> guide shows how to bill a late cancellation.</p>

<h2>Alcohol, licenses and insurance: what they mean for your invoice</h2>
<p>Alcohol is regulated by each state, and sometimes by county or city. In many states, a bartender without a license cannot sell alcohol, so the common model is <strong>service only</strong>: the host buys the liquor and you pour it. In that case, never put alcohol on your invoice as something you sold. If you buy it on the host's behalf, check whether your state allows that at all.</p>
<p>Other items that affect your paperwork:</p>
<ul>
<li><strong>Server training.</strong> Many venues ask for responsible beverage service certification for each bartender.</li>
<li><strong>Liquor liability insurance.</strong> Venues commonly require a certificate of insurance naming them as additional insured.</li>
<li><strong>Venue rules.</strong> Some require bartenders from an approved list or charge a corkage or bar fee.</li>
</ul>
<p>Contact your state alcohol beverage control board for the rules where you work. This article is general information, not legal advice.</p>

<h2>Gratuity, service charges and tips</h2>
<p>This is the part bartenders most often get wrong on invoices. Under long-standing IRS guidance (Revenue Ruling 2012-18), a payment is a tip only if it is voluntary, the customer chooses the amount, and it is not set by the business. A mandatory 18% "gratuity" printed on the invoice is a <strong>service charge</strong>, which is ordinary income to your business.</p>
<p>That distinction now matters more. The federal deduction for qualified tips, created by the One Big Beautiful Bill Act and covering tax years 2025 through 2028, applies to listed tipped occupations, and the IRS final regulations list bartenders. The deduction is capped at $25,000 a year and has income limits and reporting requirements, and mandatory service charges do not qualify. See the <a href="https://www.irs.gov/newsroom/treasury-irs-issue-final-regulations-listing-occupations-where-workers-customarily-and-regularly-receive-tips-under-the-one-big-beautiful-bill">IRS announcement on tipped occupations</a> and our article on <a href="/blog/no-tax-on-tips-self-employed">no tax on tips for the self-employed</a>.</p>
<p>Practical options:</p>
<ol>
<li><strong>Service charge line</strong> (mandatory): call it a service charge, include it in your income, and pay staff from it as agreed.</li>
<li><strong>Optional gratuity line</strong>: leave it blank for the client to fill in, or note "gratuity not included, appreciated".</li>
<li><strong>Tip jar at the bar</strong>: allowed by many hosts and venues, but ask first.</li>
</ol>

<h2>Example bartending invoice</h2>
<p>Wedding reception, 120 guests, beer, wine and two signature cocktails, host-provided alcohol. Rates are illustrative.</p>
<p><strong>Invoice BAR-2026-077</strong> | Copper Spoon Mobile Bar LLC | Issued: October 26, 2026 | Due: October 31, 2026<br>
Client: Alex Morgan | Event: Morgan-Lee wedding reception, October 31, 2026, 5:00 to 10:00 pm | Venue: Willow Creek Barn, Franklin, TN</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Lead bartender, service hours</td><td>5 hr</td><td>$55.00</td><td>$275.00</td></tr>
<tr><td>Second bartender, service hours</td><td>5 hr</td><td>$45.00</td><td>$225.00</td></tr>
<tr><td>Setup and breakdown (2 staff x 1.5 hr)</td><td>3 hr</td><td>$40.00</td><td>$120.00</td></tr>
<tr><td>Portable bar rental and backbar setup</td><td>1</td><td>$150.00</td><td>$150.00</td></tr>
<tr><td>Bar supply package: ice, cups, napkins, straws (120 guests)</td><td>120</td><td>$2.25</td><td>$270.00</td></tr>
<tr><td>Signature cocktail mixers and garnishes</td><td>1</td><td>$95.00</td><td>$95.00</td></tr>
<tr><td>Travel beyond 25-mile radius (38 extra miles, round trip)</td><td>76 mi</td><td>$0.70</td><td>$53.20</td></tr>
<tr><td colspan="3">Subtotal</td><td>$1,188.20</td></tr>
<tr><td colspan="3">Sales tax 9.75% on supplies and mixers ($365.00) where applicable</td><td>$35.59</td></tr>
<tr><td colspan="3">Service charge 18% on staff hours ($620.00)</td><td>$111.60</td></tr>
<tr><td colspan="3">Total</td><td>$1,335.39</td></tr>
<tr><td colspan="3">Less deposit received August 12, 2026</td><td>-$400.00</td></tr>
<tr><td colspan="3"><strong>Balance due</strong></td><td><strong>$935.39</strong></td></tr>
</tbody></table>
<p>Optional gratuity for bartenders: ______. The tax line is illustrative: whether supplies, labor or rentals are taxable depends on your state, so confirm the rate with the <a href="/tools/sales-tax-calculator">sales tax calculator</a> and your state's rules. Staff hours total $620 ($275 + $225 + $120), which is the base for the service charge.</p>

<h2>How to invoice a bartending gig step by step</h2>
<ol>
<li><strong>Quote from the guest count.</strong> Decide staffing, hours and supplies, and note what the host provides.</li>
<li><strong>Send the contract and deposit invoice.</strong> State the deposit amount and whether it is refundable; see the <a href="/blog/deposit-invoice">deposit invoice guide</a>.</li>
<li><strong>Confirm final numbers a week out.</strong> Guest count, timeline, any extra hour.</li>
<li><strong>Issue the final invoice</strong> in the <a href="/invoice-generator">free invoice generator</a>, due before the event or within a few days after.</li>
<li><strong>Bill overtime the same night.</strong> If the host extends the bar, get a quick written okay and add it as a separate line.</li>
<li><strong>Send a receipt</strong> once the balance is paid.</li>
</ol>

<h2>Bartending for corporate events, venues and planners</h2>
<p>Private hosts are not the only clients. Corporate events, venues and event planners hire bartenders too, and each changes the invoice.</p>
<ul>
<li><strong>Corporate events</strong> often need a W-9, a certificate of insurance and a PO number before booking, and pay net 30 after the event. Take a deposit anyway, or confirm the payment terms in writing.</li>
<li><strong>Venues</strong> that subcontract bar staff may set the rate and bill the client themselves; you invoice the venue for hours worked, often weekly or monthly.</li>
<li><strong>Event planners</strong> may want your invoice addressed to their company, marked up and passed through, or addressed directly to the client. Ask which before you send it.</li>
<li><strong>Staffing apps and agencies</strong> may treat you as their employee or contractor, in which case they pay you and you do not invoice the client at all.</li>
</ul>
<p>For repeat B2B clients, agree a rate card once and reference it on each invoice, along with the event name and date.</p>

<h2>How many hours to bill: timeline example</h2>
<p>Clients often think only of the hours guests are drinking. Your invoice should reflect the full working timeline. For a 5-hour reception from 5:00 to 10:00 pm:</p>
<table><thead><tr><th>Time</th><th>Activity</th><th>Billable?</th></tr></thead><tbody>
<tr><td>3:30 to 4:30 pm</td><td>Arrival, bar build, ice, garnish prep</td><td>Yes, as setup</td></tr>
<tr><td>4:30 to 5:00 pm</td><td>Final checks, welcome drinks ready</td><td>Usually included in setup</td></tr>
<tr><td>5:00 to 10:00 pm</td><td>Service</td><td>Yes, service hours</td></tr>
<tr><td>10:00 to 10:30 pm</td><td>Breakdown, trash, return of host's unopened bottles</td><td>Yes, as breakdown</td></tr>
<tr><td>Travel</td><td>Driving to and from venue</td><td>Only beyond your free radius</td></tr>
</tbody></table>
<p>Put the timeline in your quote so the setup and breakdown lines on your invoice are expected, not a surprise. If the host asks for the bar to stay open past 10:00 pm, bill the extension in half-hour or hour blocks at the rate stated in your contract.</p>

<h2>Common bartending invoice mistakes</h2>
<ul>
<li><strong>Calling a mandatory charge a tip.</strong> It is a service charge; label it that way.</li>
<li><strong>Listing alcohol you are not licensed to sell.</strong></li>
<li><strong>Forgetting setup time.</strong> An hour of setup on a 4-hour gig is 25% of your time.</li>
<li><strong>No overtime rate.</strong> Put the per-hour extension price in the contract.</li>
<li><strong>Unclear breakage policy</strong> on rented glassware.</li>
<li><strong>Collecting the balance after the event</strong> with no card on file, which invites slow payment.</li>
</ul>

<h2>Bartending invoice checklist</h2>
<ol>
<li>Event date, start and end times and venue address match the contract.</li>
<li>Guest count and number of bartenders are stated.</li>
<li>Service hours, setup and breakdown are separate lines.</li>
<li>Minimum booking hours are shown if applied.</li>
<li>Supplies, rentals and mixers are itemized, with tax only where it applies.</li>
<li>Travel is billed only beyond your stated free radius.</li>
<li>Any mandatory charge is labeled a service charge, and optional gratuity is clearly optional.</li>
<li>The deposit is subtracted, with the date received.</li>
<li>Payment due date, accepted methods and the cancellation policy are printed.</li>
<li>Nothing suggests you sold alcohol unless you hold the license to do so.</li>
</ol>

<h2>Send a professional bartending invoice</h2>
<p>Bartending is a natural side business for hospitality workers; if you are building it into a full company, our guide to <a href="/blog/how-to-start-a-catering-business">starting a catering business</a> covers permits and pricing that overlap. A bartending invoice template that shows hours, minimums, supplies, travel and an honest service charge line makes the host's final payment quick and painless. Make yours now with the <a href="/invoice-generator">free invoice generator</a>: there is no sign-up, it builds the PDF in your browser, and you can download and send it before the last call.</p>
`,
  },
  {
    slug: "farm-invoice-template",
    title: "Farm Invoice Template: Produce and Livestock Sales",
    description:
      "Farm invoice template for produce, livestock, eggs and hay sales: units, wholesale pricing, PACA trust wording and agricultural sales tax exemptions explained.",
    category: "industry-invoices",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["bill-of-sale-template", "sales-tax-exemption-certificate", "delivery-note-template"],
    faqs: [
      {
        q: "Do farmers have to charge sales tax on produce?",
        a: "Usually not on unprepared food sold for human consumption, which most states exempt or tax at a reduced rate, and sales to grocers or restaurants for resale are typically exempt with a resale certificate. Some items, such as flowers, plants, prepared food or crafts at a farm stand, may be taxable. Rules vary by state, so check your department of revenue before setting up your invoice.",
      },
      {
        q: "What is the PACA trust statement on a produce invoice?",
        a: "The Perishable Agricultural Commodities Act creates a statutory trust that protects unpaid sellers of fresh fruits and vegetables. To preserve trust rights, sellers commonly print the statutory trust language on their invoices and keep payment terms within the limits USDA allows, normally no more than 30 days unless the parties agree otherwise in writing before the sale. Check USDA AMS guidance for the exact requirements.",
      },
      {
        q: "What units should I use on a farm invoice?",
        a: "Use the unit the buyer orders in and that your scale or count can prove: pounds, bushels, cases, flats, dozens, bales, tons or head. For livestock sold by weight, show both the weight and the price per hundredweight. Consistent units make it easy for the buyer to match the invoice to the delivery ticket and avoid disputes about quantity.",
      },
      {
        q: "Do I need an invoice or a bill of sale for livestock?",
        a: "Often both serve different purposes. An invoice requests and records payment, while a bill of sale documents the transfer of ownership, and some states require brand inspection or ownership papers for cattle, horses or sheep. For private livestock sales, many farmers use a bill of sale signed by both parties and attach an invoice for the payment terms. Check your state's brand and animal health rules.",
      },
      {
        q: "How fast must a livestock buyer pay?",
        a: "Under the Packers and Stockyards Act, dealers, market agencies and packers buying livestock generally must pay by the close of the next business day after purchase and transfer of possession, unless the seller agrees in writing to other terms. Private buyers outside that law are bound by whatever you agree. Write the due date on your invoice either way.",
      },
      {
        q: "How do farmers get a sales tax exemption on farm supplies?",
        a: "Many states exempt purchases of feed, seed, fertilizer and certain equipment used in agricultural production. To claim it, the farmer usually gives the supplier an agricultural exemption certificate or registration number issued by the state. This affects what your suppliers charge you, not what you charge your buyers. Each state has its own form and eligibility rules.",
      },
      {
        q: "Should a farm stand give receipts or invoices?",
        a: "Retail customers paying on the spot usually just need a receipt. Invoices are for buyers who pay later or need paperwork for their own books: restaurants, grocers, schools, CSA members paying in installments and wholesale accounts. Many farms use simple receipts at the stand and numbered invoices for every account customer.",
      },
      {
        q: "How should a CSA farm invoice members?",
        a: "A CSA share is usually billed once per season or in a few installments. The invoice should list the share type, season dates, number of pickups or deliveries, the price and any payment plan dates. Mention what happens if a member misses a pickup. If you offer add-ons like eggs or flowers, list them as separate lines so you can track which items may be taxable.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A farm invoice template is a bill for agricultural products such as produce, eggs, meat, hay or livestock. It lists the buyer, delivery date, each product with its unit (pounds, cases, bushels, head), quantity and price, any delivery charge, sales tax only on taxable items, the total and payment terms, plus a PACA trust statement for fresh produce sold wholesale.</p>

<p>Farm sales come in every shape: a weekly restaurant order, a pallet of squash to a grocer, a steer sold by hanging weight, 200 bales of hay picked up off the field. A good farm invoice handles all of them with the same clear structure. This guide covers what to include, units and pricing, tax exemptions for agriculture, federal rules for produce and livestock, and a worked wholesale example.</p>

<h2>What is a farm invoice?</h2>
<p>A farm invoice is a document a farm or ranch sends a buyer to record a sale and request payment. It is used for wholesale and account customers (restaurants, grocers, distributors, food hubs, schools, other farms) rather than walk-up retail, where a receipt is normal.</p>
<p>It often travels with other paperwork:</p>
<ul>
<li>A <a href="/blog/delivery-note-template">delivery note</a> or packing slip signed at drop-off, confirming quantities.</li>
<li>A <a href="/blog/bill-of-sale-template">bill of sale</a> for livestock, equipment or other ownership transfers.</li>
<li>A <a href="/blog/purchase-order-template">purchase order</a> from larger buyers like grocers and institutions.</li>
<li>An exemption or resale certificate from buyers who resell your products.</li>
</ul>

<h2>What to include on a farm invoice</h2>
<table><thead><tr><th>Field</th><th>Example</th></tr></thead><tbody>
<tr><td>Farm name and contact</td><td>Hollow Oak Farm, address, phone, email</td></tr>
<tr><td>Buyer and ship-to</td><td>Restaurant or store name, billing and delivery address</td></tr>
<tr><td>Invoice number and dates</td><td>HOF-2026-311, invoice date, delivery date, due date</td></tr>
<tr><td>Buyer PO number</td><td>If the buyer uses them</td></tr>
<tr><td>Product lines</td><td>Product, variety or grade, unit, quantity, unit price</td></tr>
<tr><td>Weights</td><td>Net weight, or live/hanging weight for livestock</td></tr>
<tr><td>Delivery and other charges</td><td>Delivery fee, crate or pallet deposit</td></tr>
<tr><td>Sales tax</td><td>Only on taxable items, with rate shown</td></tr>
<tr><td>Payment terms</td><td>Net 14, net 30, or as agreed</td></tr>
<tr><td>Required statements</td><td>PACA trust language on produce invoices if you want trust protection</td></tr>
</tbody></table>

<h2>Units and pricing: retail vs wholesale</h2>
<p>Farms usually keep two price lists: retail for the farm stand and market, and wholesale for accounts buying in volume. Wholesale prices are lower per unit but come with predictable volume. A <a href="/blog/price-list-template">price list template</a> makes it easy to send buyers current prices each week.</p>
<table><thead><tr><th>Product type</th><th>Common invoice units</th></tr></thead><tbody>
<tr><td>Vegetables and fruit</td><td>Pound, case, flat, bushel, half-bushel, each</td></tr>
<tr><td>Eggs</td><td>Dozen, 15-dozen case, 30-dozen case</td></tr>
<tr><td>Hay and straw</td><td>Small square bale, round bale, ton</td></tr>
<tr><td>Livestock</td><td>Head, live weight (cwt), hanging weight (lb)</td></tr>
<tr><td>Meat (USDA-inspected cuts)</td><td>Pound, package, box</td></tr>
<tr><td>Grain</td><td>Bushel, ton, hundredweight</td></tr>
</tbody></table>
<p>For whole and half animals sold for custom processing, many farms bill a deposit at booking, then a final invoice based on hanging weight once the processor reports it. Show the hanging weight, price per pound and the deposit applied.</p>

<h2>Sales tax and agricultural exemptions</h2>
<p>Sales tax touches farms in two directions, and they are easy to confuse.</p>
<h3>When you sell</h3>
<p>Most states exempt unprepared food for human consumption, or tax it at a reduced rate, and many exempt livestock and feed sales. Sales to restaurants and stores for resale are generally exempt when the buyer gives you a <a href="/blog/resale-certificate">resale certificate</a>. But items like cut flowers, nursery plants, firewood, crafts and prepared foods may be taxable. If you have a mix, tax each line separately. Our guides to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices</a> and <a href="/blog/sales-tax-by-state">sales tax by state</a> show how to present it.</p>
<h3>When you buy</h3>
<p>Many states exempt farm inputs such as seed, feed, fertilizer and some machinery when bought for agricultural production. You claim this by giving suppliers an agricultural exemption certificate or a state-issued number. That is covered in our article on the <a href="/blog/sales-tax-exemption-certificate">sales tax exemption certificate</a>.</p>
<p>This is general information, not tax advice. Each state sets its own rules, so confirm with your state department of revenue.</p>

<h2>Federal rules for produce and livestock invoices</h2>
<h3>PACA trust language for fresh produce</h3>
<p>The Perishable Agricultural Commodities Act (PACA), administered by USDA's Agricultural Marketing Service, gives unpaid sellers of fresh and frozen fruits and vegetables a statutory trust over the buyer's produce-related assets. A common way to preserve trust rights is to print the statutory wording on the invoice, together with payment terms that stay within the time limits USDA allows (generally 30 days or less unless agreed in writing before the sale). The standard statement reads:</p>
<p><em>The perishable agricultural commodities listed on this invoice are sold subject to the statutory trust authorized by section 5(c) of the Perishable Agricultural Commodities Act, 1930 (7 U.S.C. 499e(c)). The seller of these commodities retains a trust claim over these commodities, all inventories of food or other products derived from these commodities, and any receivables or proceeds from the sale of these commodities until full payment is received.</em></p>
<p>Check the current requirements on the <a href="https://www.ams.usda.gov/rules-regulations/paca">USDA AMS PACA page</a>, and talk to a lawyer if you sell large volumes on credit.</p>
<h3>Prompt payment for livestock</h3>
<p>The Packers and Stockyards Act generally requires packers, market agencies and dealers buying livestock to pay by the close of the next business day after purchase and transfer of possession, unless the seller agrees otherwise in writing. Many states also require brand inspection or health papers for certain animal sales.</p>

<h2>Example wholesale farm invoice</h2>
<p>A weekly delivery to a restaurant, which is buying for resale (prepared meals), so produce is exempt with a resale certificate on file. Prices are illustrative.</p>
<p><strong>Invoice HOF-2026-311</strong> | Hollow Oak Farm, Viroqua, WI | Invoice date: October 27, 2026 | Delivered: October 27, 2026 | Due: November 10, 2026 (net 14)<br>
Bill to: Driftless Table Restaurant | PO: DT-1042</p>
<table><thead><tr><th>Product</th><th>Unit</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead><tbody>
<tr><td>Butternut squash, grade A</td><td>lb</td><td>60</td><td>$1.20</td><td>$72.00</td></tr>
<tr><td>Carrots, rainbow, bunched</td><td>bunch</td><td>24</td><td>$2.50</td><td>$60.00</td></tr>
<tr><td>Salad mix</td><td>lb</td><td>15</td><td>$8.00</td><td>$120.00</td></tr>
<tr><td>Kale, lacinato</td><td>case (24 bunches)</td><td>1</td><td>$42.00</td><td>$42.00</td></tr>
<tr><td>Eggs, pasture-raised, large</td><td>15-dozen case</td><td>2</td><td>$67.50</td><td>$135.00</td></tr>
<tr><td>Apples, Honeycrisp</td><td>half-bushel</td><td>3</td><td>$28.00</td><td>$84.00</td></tr>
<tr><td>Delivery fee</td><td>flat</td><td>1</td><td>$15.00</td><td>$15.00</td></tr>
<tr><td colspan="4">Subtotal</td><td>$528.00</td></tr>
<tr><td colspan="4">Sales tax (exempt: resale certificate on file)</td><td>$0.00</td></tr>
<tr><td colspan="4"><strong>Total due</strong></td><td><strong>$528.00</strong></td></tr>
</tbody></table>
<p>Footer: the PACA trust statement above, payment methods (ACH or check), and the note "Returned crates credited at $2.00 each." Whether a delivery fee is taxable depends on your state; see <a href="/blog/sales-tax-on-shipping">sales tax on shipping</a>.</p>

<h2>How to invoice farm buyers step by step</h2>
<ol>
<li><strong>Set up each account</strong> with billing details, delivery address, terms and any resale or exemption certificate.</li>
<li><strong>Send weekly availability and prices.</strong> Confirm orders in writing.</li>
<li><strong>Weigh and count at packing</strong> and record it on the delivery note.</li>
<li><strong>Get a signature at delivery</strong>, noting shortages or rejected items.</li>
<li><strong>Invoice the same day</strong> from the signed note using the <a href="/invoice-generator">free invoice generator</a>, with numbers from the <a href="/tools/invoice-number-generator">invoice number generator</a>.</li>
<li><strong>Track due dates.</strong> Restaurants can drift; send a statement monthly. Our guide to <a href="/blog/invoice-vs-statement">invoices vs statements</a> explains the difference.</li>
</ol>

<h2>Selling to institutions, food hubs and schools</h2>
<p>Larger buyers bring volume but also paperwork. Schools, hospitals, universities and food hubs typically ask for some combination of:</p>
<ul>
<li>Vendor registration, a W-9 and proof of liability insurance.</li>
<li>Food safety documentation, such as a farm food safety plan or third-party audit, depending on the buyer and the crop. The FDA Produce Safety Rule applies to many produce farms above certain sales thresholds.</li>
<li>Purchase orders for each delivery, with your invoice quoting the PO number exactly.</li>
<li>Net 30 payment terms, sometimes longer, paid by ACH.</li>
<li>Product specifications: grade, size, pack, and sometimes origin labeling such as farm name and state for farm to school programs.</li>
</ul>
<p>Because institutional terms can run long, think about cash flow before you commit a large share of your harvest to one buyer, and check how their terms interact with PACA trust timing for fresh produce.</p>

<h2>Livestock and freezer meat invoice example</h2>
<p>Freezer beef and pork sold by the half or whole is usually billed in two steps. Here is an illustrative half-beef sale on hanging weight:</p>
<table><thead><tr><th>Line</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Deposit at booking</td><td>Flat</td><td>$300.00</td></tr>
<tr><td>Half beef, hanging weight</td><td>312 lb x $4.75</td><td>$1,482.00</td></tr>
<tr><td>Less deposit</td><td></td><td>-$300.00</td></tr>
<tr><td><strong>Balance due to farm</strong></td><td></td><td><strong>$1,182.00</strong></td></tr>
</tbody></table>
<p>Processing, cutting and wrapping are often paid by the buyer directly to the processor, which keeps the farm's invoice limited to the animal itself. Say clearly on the invoice and in your order terms who pays the processor, and whether the price is on live weight, hanging weight or packaged weight, since each gives a very different number. Whether meat must be processed at a USDA-inspected or custom-exempt facility depends on how it is sold; check USDA FSIS and your state's rules.</p>

<h2>Common farm invoicing mistakes</h2>
<ul>
<li><strong>Invoicing the ordered quantity instead of the delivered quantity.</strong></li>
<li><strong>Charging sales tax on exempt food</strong>, or missing tax on flowers and plants.</li>
<li><strong>Letting terms stretch past 30 days on produce</strong>, which can weaken PACA trust protection.</li>
<li><strong>No unit on the line.</strong> "Squash, 60" could be pounds or each.</li>
<li><strong>Forgetting crate and pallet deposits.</strong></li>
<li><strong>Using a receipt for an account customer</strong> who needs a numbered invoice for their books.</li>
</ul>

<h2>Payment terms and methods that suit farms</h2>
<p>Farm cash flow is seasonal, so payment terms matter as much as prices. Common setups:</p>
<table><thead><tr><th>Buyer</th><th>Typical terms</th><th>Payment method</th></tr></thead><tbody>
<tr><td>Restaurants</td><td>Net 7 to net 14, or cash on delivery for new accounts</td><td>Check, ACH, card</td></tr>
<tr><td>Grocers and co-ops</td><td>Net 14 to net 30</td><td>ACH, check</td></tr>
<tr><td>Distributors and food hubs</td><td>Net 21 to net 30</td><td>ACH</td></tr>
<tr><td>Schools and institutions</td><td>Net 30 or longer</td><td>ACH</td></tr>
<tr><td>CSA members</td><td>Upfront or installments before the season</td><td>Card, ACH, check</td></tr>
<tr><td>Livestock buyers</td><td>On pickup or by next business day for dealers</td><td>Check, wire, ACH</td></tr>
</tbody></table>
<p>For new restaurant accounts, start with <a href="/blog/cash-on-delivery-invoicing">cash on delivery</a> until they have a payment history, then move to net terms. Send a monthly statement to every account customer listing open invoices, and pause deliveries to accounts that go past your terms. It is much easier to stop a weekly delivery than to collect a season's worth of unpaid invoices in November.</p>

<h2>Start invoicing your farm sales</h2>
<p>A farm invoice template that shows units, weights, delivery details, the right tax treatment and PACA wording keeps wholesale buyers paying on time. If you sell at markets online too, the <a href="/blog/order-form-template">order form template</a> helps collect preorders. Create your farm invoice with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, the PDF is made in your browser, and you can download it and send it to your buyer after each delivery.</p>
`,
  },
];
