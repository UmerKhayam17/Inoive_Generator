import type { PostDraft } from "../blog";

export const INVOICING_BASICS_2026_G_POSTS: PostDraft[] = [
  {
    slug: "time-and-materials-invoice",
    title: "Time and Materials Invoice: Template, NTE Caps + Example",
    description:
      "How to write a time and materials invoice: labor hours, materials, markup and not-to-exceed caps, with a worked example, template layout and common mistakes.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "fixed-price-vs-time-and-materials",
      "labor-and-materials-invoice",
      "materials-markup",
    ],
    faqs: [
      {
        q: "Is a time and materials contract the same as cost-plus?",
        a: "They are close cousins but not identical. A cost-plus contract reimburses your actual costs and adds a fee, either a percentage or a fixed amount, on top of the total. A time and materials contract bills labor at agreed hourly rates that already include overhead and profit, plus materials at cost or with a stated markup. Many small contractors use the terms loosely, so the contract wording matters more than the label.",
      },
      {
        q: "Do I need to attach receipts to a time and materials invoice?",
        a: "Nothing in general law forces you to attach receipts to a private invoice, but many T&M contracts require backup for materials above a set amount, and most clients will ask for it anyway. Attaching supplier receipts or a materials log builds trust and shortens approval. Government contracts and insurance work usually require documentation, so read the contract before you send the first invoice.",
      },
      {
        q: "Can I bill for travel time on a time and materials job?",
        a: "Only if the contract or your rate sheet says so. Some trades bill portal-to-portal, starting the clock when the technician leaves the shop, while others bill on-site time only and add a flat trip charge. Whatever you choose, state it before the work starts and show travel as its own line on the invoice so the client can see exactly what they are paying for.",
      },
      {
        q: "How often should I send time and materials invoices?",
        a: "Short jobs are usually billed once at completion. Longer jobs are commonly billed weekly, every two weeks or monthly so the client sees costs build up gradually and you are not financing weeks of labor and supplies. Pick an interval in the contract, keep each invoice tied to a date range, and include a running total against any not-to-exceed cap.",
      },
      {
        q: "What happens if a T&M job goes over the not-to-exceed amount?",
        a: "If the contract has a true not-to-exceed cap, the client generally does not have to pay above it unless they approved an increase. That is why contractors send a written notice when costs approach the cap, often at 75 to 80 percent, and ask for a signed change order before continuing. Work done above the cap without approval is often work you will not be paid for.",
      },
      {
        q: "Should labor and materials be taxed differently on a T&M invoice?",
        a: "Often, yes. In many US states, materials or tangible goods are taxable while some labor or services are exempt, and the rules differ for repair work, new construction and installation. Listing labor and materials as separate lines makes it possible to apply tax only where it belongs. Check your state revenue department's guidance for your trade, because the treatment varies widely.",
      },
      {
        q: "What hourly rate should I use for a time and materials contract?",
        a: "Use a billing rate, not a wage. The rate has to cover the worker's pay, payroll taxes, insurance, vehicles, tools, office overhead and profit, so billing rates are typically well above what the technician earns per hour. Many contractors publish a rate sheet with different rates for journeymen, apprentices and helpers, plus higher overtime and emergency rates.",
      },
      {
        q: "Is time and materials a good idea for small jobs?",
        a: "It can be, especially for repairs and troubleshooting where nobody can know the scope until the work starts. For small, well-defined jobs, many clients prefer a fixed price because it removes uncertainty. A common compromise is a fixed diagnostic or service call fee, followed by T&M billing once the problem is understood and the client approves an estimate.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A time and materials invoice bills a client for the actual hours worked at agreed hourly rates plus the actual cost of materials used, often with a stated markup. It lists labor and materials as separate lines, ties hours to dates and workers, and usually shows progress against a not-to-exceed (NTE) cap set in the contract.</p>

<p>Time and materials (T&amp;M) billing is common in construction, repair, IT services and consulting, anywhere the full scope is hard to know before the work starts. The client gets flexibility, and you avoid losing money when a job turns out bigger than it looked. The trade-off is that a time and materials invoice has to be detailed enough for the client to check every hour and every part. This guide covers what to include, how not-to-exceed caps work, a worked example with real numbers and the mistakes that cause disputes.</p>

<h2>What is a time and materials invoice?</h2>
<p>A time and materials invoice is a bill issued under a T&amp;M contract or work order. Instead of charging one agreed price for the whole job, you charge for two things:</p>
<ul>
<li><strong>Time:</strong> labor hours multiplied by an hourly billing rate. The rate usually differs by role (lead technician, apprentice, helper) and by time of day (regular, overtime, emergency).</li>
<li><strong>Materials:</strong> parts, supplies and equipment rentals at your cost, plus any markup the contract allows.</li>
</ul>
<p>The billing rate is meant to cover wages, payroll taxes, insurance, vehicles, tools, overhead and profit. Materials markup covers the time you spend sourcing, picking up and storing parts, plus the risk of returns and warranty claims. If you want a broader comparison of pricing models, see our guide to <a href="/blog/fixed-price-vs-time-and-materials">fixed price vs time and materials contracts</a>.</p>

<h2>When should you use time and materials billing?</h2>
<p>T&amp;M works best when the scope is uncertain and the client accepts some cost risk in exchange for flexibility. Typical cases:</p>
<ul>
<li>Repair and troubleshooting work, where you cannot see the problem until walls, panels or code are opened up.</li>
<li>Remodeling and renovation where hidden conditions are likely.</li>
<li>Ongoing IT support, development or consulting where the client keeps changing priorities.</li>
<li>Extra work outside a fixed-price contract, often billed T&amp;M under a change order.</li>
</ul>
<p>For tightly defined jobs, a fixed price is usually easier to sell. Many contractors combine both: a fixed price for the base scope and T&amp;M for anything that changes, documented with a <a href="/blog/scope-creep-change-order">change order</a>.</p>

<h2>What should a time and materials invoice include?</h2>
<p>Start with the standard elements every invoice needs (see <a href="/blog/what-is-an-invoice">what an invoice is and what it must contain</a>), then add the T&amp;M-specific detail.</p>
<table>
<thead><tr><th>Section</th><th>What to show</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Header</td><td>Your business name, contact details, invoice number, invoice date, due date</td><td>Identifies the bill and sets payment timing</td></tr>
<tr><td>Client and job</td><td>Client name, billing address, job site, PO or work order number</td><td>Lets the client's accounts payable match it</td></tr>
<tr><td>Billing period</td><td>Date range covered (for example, Oct 6 to Oct 17)</td><td>Prevents double billing across invoices</td></tr>
<tr><td>Labor lines</td><td>Date, worker or role, hours, rate, amount; regular and overtime separated</td><td>Lets the client check hours against timesheets</td></tr>
<tr><td>Materials lines</td><td>Item, quantity, unit cost, markup if disclosed, amount</td><td>Ties each charge to receipts</td></tr>
<tr><td>Equipment</td><td>Rentals or owned equipment at hourly or daily rates</td><td>Often a separate rate category in the contract</td></tr>
<tr><td>NTE tracking</td><td>Cap, billed to date, this invoice, remaining</td><td>Shows the client where the budget stands</td></tr>
<tr><td>Totals</td><td>Subtotals for labor and materials, sales tax where applicable, total due</td><td>Makes tax treatment clear</td></tr>
<tr><td>Terms</td><td>Payment terms, accepted methods, late fee policy</td><td>Reduces payment delays</td></tr>
</tbody>
</table>

<h2>How do not-to-exceed (NTE) caps work?</h2>
<p>A not-to-exceed cap is the maximum the client agrees to pay for a T&amp;M job unless they approve more. It gives the client a budget ceiling while you still bill actual hours and materials. If the work comes in under the cap, the client pays only the actual cost. If it would go over, you stop and ask.</p>
<p>Good NTE practice looks like this:</p>
<ol>
<li><strong>Write the cap into the contract</strong> with what it covers (labor, materials, equipment, or all three) and whether tax is inside or outside it.</li>
<li><strong>Track billed-to-date on every invoice.</strong> A simple four-line box (cap, previously billed, this invoice, remaining) answers the client's first question.</li>
<li><strong>Set a warning threshold.</strong> Many contractors notify the client in writing at 75 or 80 percent of the cap.</li>
<li><strong>Get a signed change order before exceeding it.</strong> Without written approval, amounts over the cap are hard to collect.</li>
</ol>
<p>A cap is not the same as an estimate. An estimate is a good-faith forecast; a cap is a contractual limit. Our article on <a href="/blog/invoice-vs-estimate">invoices vs estimates</a> explains how the two documents differ.</p>

<h2>Worked example: a time and materials invoice with real numbers</h2>
<p>A small electrical contractor is hired to trace and repair intermittent power loss in a restaurant kitchen. The contract sets these terms: journeyman $95/hour, apprentice $60/hour, overtime at 1.5x, materials at cost plus 15 percent, NTE $4,000 before tax, billing every two weeks, Net 15. The figures are illustrative.</p>
<table>
<thead><tr><th>Date</th><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Oct 6</td><td>Journeyman: diagnose kitchen circuits, regular time</td><td>6 hr</td><td>$95.00</td><td>$570.00</td></tr>
<tr><td>Oct 6</td><td>Apprentice: assist, regular time</td><td>6 hr</td><td>$60.00</td><td>$360.00</td></tr>
<tr><td>Oct 7</td><td>Journeyman: replace panel breakers and feeder, regular time</td><td>8 hr</td><td>$95.00</td><td>$760.00</td></tr>
<tr><td>Oct 7</td><td>Journeyman: after-hours work to avoid service, overtime</td><td>2 hr</td><td>$142.50</td><td>$285.00</td></tr>
<tr><td>Oct 7</td><td>Apprentice: assist, regular time</td><td>8 hr</td><td>$60.00</td><td>$480.00</td></tr>
<tr><td colspan="4"><strong>Labor subtotal</strong></td><td><strong>$2,455.00</strong></td></tr>
<tr><td>Oct 7</td><td>Breakers, 20A (cost $18.50 each)</td><td>6</td><td>$21.28</td><td>$127.65</td></tr>
<tr><td>Oct 7</td><td>Copper wire, 6 AWG, 50 ft (cost $142.00)</td><td>1</td><td>$163.30</td><td>$163.30</td></tr>
<tr><td>Oct 7</td><td>Connectors, conduit and fittings (cost $96.00)</td><td>1</td><td>$110.40</td><td>$110.40</td></tr>
<tr><td colspan="4"><strong>Materials subtotal (cost $349.00 + 15%)</strong></td><td><strong>$401.35</strong></td></tr>
<tr><td colspan="4">Subtotal</td><td>$2,856.35</td></tr>
<tr><td colspan="4">Sales tax on materials, 7% (illustrative)</td><td>$28.09</td></tr>
<tr><td colspan="4"><strong>Total due</strong></td><td><strong>$2,884.44</strong></td></tr>
</tbody>
</table>
<p>The NTE box at the bottom of the invoice would read: Cap $4,000.00, previously billed $0.00, this invoice $2,856.35 (before tax), remaining $1,143.65. Because the job has used 71 percent of the cap, the contractor adds a note that the client will be told in writing before the next invoice if remaining work may exceed the cap.</p>
<p>Notice the details: hours are tied to dates and roles, overtime is a separate line at the contract rate, each material line shows the underlying cost, and tax is applied to materials only because that is the (illustrative) state rule. Use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to check the tax line for your own rate.</p>

<h2>How to create a time and materials invoice step by step</h2>
<ol>
<li><strong>Collect timesheets</strong> for the billing period. Daily logs signed by the client's site contact are the strongest backup.</li>
<li><strong>Total hours by worker and rate type.</strong> Keep regular, overtime and emergency time on separate lines. Our guide on <a href="/blog/how-to-invoice-for-overtime">how to invoice for overtime</a> covers rate multipliers and wording.</li>
<li><strong>List materials from receipts</strong>, apply the contract markup and keep the receipt numbers in your file.</li>
<li><strong>Add equipment and other allowed charges</strong> such as rentals, disposal fees or permits, only if the contract allows them.</li>
<li><strong>Calculate subtotals and tax</strong> separately for labor and materials.</li>
<li><strong>Update the NTE tracking box</strong> and add a note if you are near the cap.</li>
<li><strong>Assign the next invoice number</strong> from a consistent sequence; the <a href="/tools/invoice-number-generator">invoice number generator</a> can help you set one up.</li>
<li><strong>Attach backup</strong> (timesheets, receipts) and send it with clear payment terms.</li>
</ol>
<p>You can build the whole layout in our <a href="/invoice-generator">free invoice generator</a>: add one line per labor entry and per material, set the tax rate, and download a PDF to send.</p>

<h2>How much markup can you add to materials on a T&amp;M job?</h2>
<p>Whatever the contract says. Some T&amp;M agreements allow materials at cost only, others allow a flat percentage, and some use a sliding scale (higher markup on small parts, lower on expensive equipment). Commercial and government contracts often spell out the exact allowed percentage. If the contract is silent, the safest approach is to disclose your markup in the proposal so nobody is surprised. Our guide to <a href="/blog/materials-markup">materials markup</a> explains typical ranges and the formula, and <a href="/blog/markup-vs-margin">markup vs margin</a> shows why a 15 percent markup is not a 15 percent profit margin.</p>

<h2>Common mistakes on time and materials invoices</h2>
<ul>
<li><strong>Lumping all hours into one line.</strong> "Labor: 30 hours" invites questions. Break it down by date and role.</li>
<li><strong>Billing overtime without contract authority.</strong> If the contract has no overtime rate or requires prior approval, overtime at a premium may be rejected.</li>
<li><strong>Hidden markup.</strong> If the client expects materials at cost and later sees supplier receipts, undisclosed markup damages trust fast.</li>
<li><strong>Ignoring the cap.</strong> Blowing through an NTE without a change order is the most common reason T&amp;M work goes unpaid.</li>
<li><strong>Overlapping billing periods.</strong> Always state the date range, and never bill the same hours twice.</li>
<li><strong>Applying sales tax to everything.</strong> Labor is often treated differently from materials; check your state's rules.</li>
<li><strong>No backup.</strong> Missing receipts and timesheets slow approval, especially on commercial jobs.</li>
</ul>
<p>For a wider list of invoicing errors, see <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>.</p>

<h2>Time and materials vs labor and materials vs fixed price</h2>
<table>
<thead><tr><th>Model</th><th>How the price is set</th><th>Who carries cost risk</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Time and materials</td><td>Actual hours x rates + materials (+ markup)</td><td>Mostly the client, limited by any NTE cap</td><td>Uncertain scope, repairs, changes</td></tr>
<tr><td>Labor and materials (lump sum lines)</td><td>Quoted labor amount + quoted materials</td><td>Mostly the contractor</td><td>Defined small jobs</td></tr>
<tr><td>Fixed price</td><td>One agreed price for the scope</td><td>The contractor</td><td>Clear, repeatable scope</td></tr>
<tr><td>Cost-plus</td><td>Actual costs + fee or percentage</td><td>The client</td><td>Custom builds, open-book projects</td></tr>
</tbody>
</table>
<p>If your jobs are quoted as labor plus materials rather than billed hourly, our <a href="/blog/labor-and-materials-invoice">labor and materials invoice guide</a> is the better fit. Large staged projects may use <a href="/blog/progress-billing">progress billing</a> instead.</p>

<h2>What documentation should back up a T&amp;M invoice?</h2>
<p>Because the client is paying for actual effort, the paperwork behind a time and materials invoice matters as much as the invoice itself. Keep these records for every billing period:</p>
<ul>
<li><strong>Daily timesheets or job logs</strong> with start and stop times, the worker's name or role and a short description of the task. A client signature or email confirmation each day is the gold standard.</li>
<li><strong>Supplier receipts and delivery tickets</strong> for every material line, with the job name or PO written on them.</li>
<li><strong>Equipment logs</strong> showing hours or days for rented and owned equipment.</li>
<li><strong>Change orders and approvals</strong> for any work outside the original description, and any written increase to the NTE cap.</li>
<li><strong>Photos</strong> of hidden conditions (rot, damaged wiring, failed pipes) that explain why the job took longer than expected.</li>
</ul>
<p>Commercial clients and general contractors often require this backup with each invoice, and some will not process payment without it. Even when a homeowner does not ask, having it ready settles questions quickly. Keep the records with your copy of the invoice for at least as long as your accountant recommends for tax records. If you work as a subcontractor on larger projects, ask the general contractor for their backup requirements before you send the first invoice.</p>

<h2>Tips to get T&amp;M invoices approved faster</h2>
<ul>
<li>Send a rate sheet with the contract so every rate on the invoice matches a published number.</li>
<li>Get daily sign-off on hours from the client's site contact.</li>
<li>Bill on a regular cycle so invoices stay small and easy to review.</li>
<li>Use the client's PO or work order number on every invoice.</li>
<li>Set clear <a href="/blog/invoice-payment-terms">payment terms</a> and follow up with polite <a href="/blog/payment-reminder-emails">payment reminder emails</a> if a due date passes.</li>
</ul>

<p>A clear time and materials invoice protects both sides: the client can verify every hour and part, and you get paid for the real work the job required. Separate labor from materials, track the not-to-exceed cap on every bill and attach your backup. When you are ready, create your time and materials invoice in the <a href="/invoice-generator">free invoice generator</a>. It is free, needs no sign-up and builds a downloadable PDF right in your browser.</p>
`,
  },
  {
    slug: "how-to-invoice-for-overtime",
    title: "How to Invoice for Overtime: Rates, Wording + Example",
    description:
      "How to invoice for overtime as a contractor or freelancer: when you can charge 1.5x, how it differs from employee overtime, invoice wording and an example.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["time-and-materials-invoice", "how-to-invoice-for-hourly-work", "rush-fee"],
    faqs: [
      {
        q: "Are independent contractors entitled to overtime pay?",
        a: "Not under the federal Fair Labor Standards Act, which covers employees. An independent contractor's overtime charges come from the contract, not from wage law. If your contract or rate sheet sets a premium for work beyond certain hours, you can bill it; if it does not, you generally cannot add it after the fact. Misclassified workers may have overtime rights, which is a separate legal question for a professional.",
      },
      {
        q: "What is a normal overtime rate for contractors?",
        a: "Many trade contractors and staffing firms use 1.5 times the regular rate for after-hours or extended work and 2 times for Sundays, holidays or emergency callouts, mirroring employee overtime conventions. These are business practices rather than legal requirements for contractors. Some freelancers prefer a flat after-hours surcharge or a rush fee instead. Whatever you use, publish it in your rate sheet before the work starts.",
      },
      {
        q: "Can I charge overtime if the client asked me to finish faster?",
        a: "Yes, if you agree on it before doing the work. A client request to compress the schedule is a classic reason for a premium. Confirm in writing that the extra hours or after-hours work will be billed at your overtime or rush rate, ideally with an estimate of how many hours are involved. Billing a premium the client did not agree to usually leads to a dispute.",
      },
      {
        q: "Should overtime be a separate line on the invoice?",
        a: "Yes. A separate line showing the date, the hours, the overtime rate and the reason makes the charge easy to verify. Mixing overtime into a single blended labor line hides the premium and makes clients suspicious. It also helps your own bookkeeping, because you can see how much of your revenue came from premium work and whether your regular pricing needs adjusting.",
      },
      {
        q: "Do I need to pay my employees overtime if I bill the client overtime?",
        a: "Your obligation to employees comes from wage law, not from what you bill. Under the FLSA, non-exempt employees must get at least 1.5 times their regular rate for hours over 40 in a workweek, whether or not you charge the client a premium. Some states add daily overtime rules. Billing overtime to clients helps you recover that cost, but it does not change what you owe staff.",
      },
      {
        q: "How do I calculate an overtime billing rate?",
        a: "Multiply your regular billing rate by the agreed multiplier. A $80 hourly rate at time and a half becomes $120 per hour; at double time it becomes $160. Round to the cent and state the multiplier on your rate sheet. If your crew has different regular rates, calculate each role's overtime rate separately rather than using one blended number.",
      },
      {
        q: "Can freelancers on a fixed-price project charge overtime?",
        a: "Usually not, because a fixed price covers the agreed scope regardless of how many hours it takes. Extra charges on a fixed-price job normally come from scope changes or a client-requested rush, both of which should be documented in a change order or written agreement. Working long hours to meet your own schedule is generally not billable as overtime.",
      },
      {
        q: "Does the new no tax on overtime rule affect contractor invoices?",
        a: "The federal deduction for qualified overtime compensation applies to overtime pay reported for employees under FLSA rules, not to premiums an independent contractor charges on an invoice. A contractor's invoice premium is ordinary business income. Rules and reporting details can change, so check current IRS guidance or ask a tax professional before relying on any deduction.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To invoice for overtime, bill the extra hours on a separate line at the overtime rate your contract or rate sheet allows (commonly 1.5x your regular rate), show the date, hours and reason, and make sure the client approved after-hours or extended work in advance. Independent contractors have no legal right to overtime; it comes from the contract.</p>

<p>Overtime billing confuses many contractors and freelancers because the word means two different things. For employees, overtime is a legal requirement under wage law. For a business invoicing a client, overtime is a pricing choice you agree on in the contract. This guide explains the difference, how to set an overtime rate, how to show it on an invoice and a worked example with real numbers.</p>

<h2>What does overtime mean on an invoice?</h2>
<p>On an invoice, overtime is a premium hourly rate for work performed outside normal hours: beyond a set number of hours per day or week, at night, on weekends or on holidays. It is usually expressed as a multiplier of your regular billing rate:</p>
<ul>
<li><strong>Time and a half (1.5x):</strong> common for evenings, extended days and Saturdays.</li>
<li><strong>Double time (2x):</strong> common for Sundays, holidays and emergency callouts.</li>
<li><strong>Flat surcharge:</strong> some freelancers add a fixed after-hours fee or a <a href="/blog/rush-fee">rush fee</a> instead of a multiplier.</li>
</ul>
<p>These conventions borrow from employment law, but for a contractor they are commercial terms. You can bill overtime only when the client agreed to it.</p>

<h2>Contractor overtime vs employee overtime: what is the difference?</h2>
<p>Under the US Fair Labor Standards Act (FLSA), covered non-exempt employees must be paid at least one and a half times their regular rate for hours worked over 40 in a workweek. The <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener">US Department of Labor overtime page</a> explains who is covered. Some states, such as California, also have daily overtime rules.</p>
<table>
<thead><tr><th>Question</th><th>Employee overtime</th><th>Contractor overtime billing</th></tr></thead>
<tbody>
<tr><td>Source of the rule</td><td>Federal and state wage law</td><td>Your contract or rate sheet</td></tr>
<tr><td>Trigger</td><td>Hours over 40 per workweek (plus state daily rules)</td><td>Whatever the contract says: after 8 hours, nights, weekends, holidays</td></tr>
<tr><td>Minimum rate</td><td>1.5x regular rate for non-exempt employees</td><td>None by law; commonly 1.5x or 2x</td></tr>
<tr><td>Can it be waived?</td><td>Generally no</td><td>Yes, it is negotiable</td></tr>
<tr><td>Document</td><td>Payroll and pay stubs</td><td>Invoice</td></tr>
</tbody>
</table>
<p>If you employ a crew, you still owe your non-exempt workers legal overtime regardless of what you bill. That labor cost is a main reason trade businesses charge clients an overtime rate. If you are unsure whether someone is an employee or contractor, read our <a href="/blog/w2-vs-1099">W-2 vs 1099 guide</a>.</p>

<h2>When can you bill a client for overtime?</h2>
<p>You are on solid ground when all of these are true:</p>
<ol>
<li><strong>The contract or rate sheet sets an overtime rate</strong> and defines when it applies.</li>
<li><strong>The client requested or approved the work</strong> outside normal hours, preferably in writing (an email is fine).</li>
<li><strong>The work was billed on an hourly or T&amp;M basis</strong>, not a fixed price for a defined scope.</li>
<li><strong>The hours are documented</strong> with timesheets or logs.</li>
</ol>
<p>Situations where overtime billing usually fails: you chose to work late to catch up on your own schedule, the job is fixed-price, or the client never agreed to premium rates. In those cases, talk to the client before invoicing. On fixed-price work, client-driven acceleration should be handled with a <a href="/blog/scope-creep-change-order">change order</a>.</p>

<h2>How much should you charge for overtime?</h2>
<p>Most contractors calculate overtime rates from their regular billing rate. Here is how common multipliers work on different base rates:</p>
<table>
<thead><tr><th>Regular rate</th><th>1.5x (time and a half)</th><th>2x (double time)</th></tr></thead>
<tbody>
<tr><td>$50/hr</td><td>$75/hr</td><td>$100/hr</td></tr>
<tr><td>$75/hr</td><td>$112.50/hr</td><td>$150/hr</td></tr>
<tr><td>$95/hr</td><td>$142.50/hr</td><td>$190/hr</td></tr>
<tr><td>$120/hr</td><td>$180/hr</td><td>$240/hr</td></tr>
</tbody>
</table>
<p>When deciding on your multiplier, consider your real cost of after-hours work (employee overtime, on-call pay, disruption to other jobs), what competitors in your trade publish and how often clients ask for it. Some consultants skip multipliers and charge a minimum callout fee for after-hours work instead. If you bill by the hour in general, our guide to <a href="/blog/how-to-invoice-for-hourly-work">invoicing for hourly work</a> covers the basics.</p>

<h2>Worked example: invoicing overtime on a service job</h2>
<p>An HVAC contractor's rate sheet says: technician $90/hour Monday to Friday 7 a.m. to 5 p.m.; time and a half after 5 p.m. and on Saturdays; double time on Sundays and holidays. A property manager asks for an urgent rooftop unit replacement that runs through Friday evening and Sunday. The rates are illustrative.</p>
<table>
<thead><tr><th>Date</th><th>Description</th><th>Hours</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Fri, Oct 17</td><td>Technician, regular time (7 a.m. to 5 p.m.)</td><td>10</td><td>$90.00</td><td>$900.00</td></tr>
<tr><td>Fri, Oct 17</td><td>Technician, overtime 1.5x (5 p.m. to 8 p.m.), approved by client email Oct 16</td><td>3</td><td>$135.00</td><td>$405.00</td></tr>
<tr><td>Sun, Oct 19</td><td>Technician, double time 2x, unit startup and testing</td><td>4</td><td>$180.00</td><td>$720.00</td></tr>
<tr><td>Sun, Oct 19</td><td>Helper, double time 2x ($55 base)</td><td>4</td><td>$110.00</td><td>$440.00</td></tr>
<tr><td colspan="4">Labor subtotal</td><td>$2,465.00</td></tr>
<tr><td colspan="4">Materials (see attached list)</td><td>$3,180.00</td></tr>
<tr><td colspan="4"><strong>Total before tax</strong></td><td><strong>$5,645.00</strong></td></tr>
</tbody>
</table>
<p>Without the premium, the 21 hours of labor would have cost $1,750 (17 technician hours at $90 plus 4 helper hours at $55), so the client paid $715 more for the accelerated schedule. Showing the approval date on the line removes most arguments before they start.</p>

<h2>How to word overtime on an invoice</h2>
<p>Clear wording makes the premium self-explanatory. Examples:</p>
<ul>
<li>"Overtime labor, 1.5x, Oct 17, 5:00 to 8:00 p.m., per rate sheet dated Jan 1, 2026"</li>
<li>"After-hours emergency callout, double time, approved by J. Lee (email Oct 16)"</li>
<li>"Weekend work requested by client to meet opening date, 1.5x rate"</li>
</ul>
<p>Add a short note under the line items such as: "Overtime rates apply to work outside 7 a.m. to 5 p.m. Monday to Friday, as set out in section 4 of our agreement." You can add notes like this in our <a href="/invoice-generator">free invoice generator</a> and keep regular and overtime hours on separate lines.</p>

<h2>Step by step: adding overtime to your invoices</h2>
<ol>
<li><strong>Put overtime terms in writing before work starts:</strong> trigger times, multipliers and whether approval is needed.</li>
<li><strong>Get approval for each overtime event</strong> by email or a signed work order.</li>
<li><strong>Log start and end times</strong> so you can split regular and overtime hours accurately.</li>
<li><strong>Create separate invoice lines</strong> for regular, overtime and double-time hours.</li>
<li><strong>Reference the approval and rate sheet</strong> in the line description or notes.</li>
<li><strong>Check the total against any budget or not-to-exceed cap.</strong> On <a href="/blog/time-and-materials-invoice">time and materials invoices</a>, overtime eats into the cap fast.</li>
<li><strong>Send it promptly</strong> with clear <a href="/blog/invoice-payment-terms">payment terms</a>.</li>
</ol>

<h2>Common overtime billing mistakes</h2>
<ul>
<li><strong>Billing overtime without an agreement.</strong> The most frequent cause of disputes.</li>
<li><strong>Blending rates.</strong> One "labor" line at an averaged rate hides the premium and looks like padding.</li>
<li><strong>Charging overtime on fixed-price work</strong> without a change order.</li>
<li><strong>Applying the multiplier to materials.</strong> Overtime applies to labor hours only.</li>
<li><strong>Confusing billing with payroll.</strong> Charging a client 1.5x does not satisfy, or replace, your duty to pay employees legal overtime.</li>
<li><strong>Mixing up tax rules.</strong> The federal "no tax on overtime" deduction concerns employee overtime pay, not contractor invoice premiums; see our article on <a href="/blog/no-tax-on-overtime">no tax on overtime</a>.</li>
</ul>
<p>This article is general information, not legal or tax advice. Employment classification and wage rules vary by state.</p>

<h2>How to write overtime terms into your contract or rate sheet</h2>
<p>Most overtime disputes come from vague terms. A short, specific clause prevents them. Cover these points:</p>
<table>
<thead><tr><th>Term</th><th>What to define</th><th>Example wording</th></tr></thead>
<tbody>
<tr><td>Normal hours</td><td>Days and times billed at the regular rate</td><td>"Monday to Friday, 7:00 a.m. to 5:00 p.m., excluding holidays"</td></tr>
<tr><td>Overtime trigger</td><td>When the premium starts</td><td>"Work outside normal hours, or beyond 8 hours in one day"</td></tr>
<tr><td>Multipliers</td><td>Rate for each category</td><td>"1.5x on weekday evenings and Saturdays; 2x on Sundays and listed holidays"</td></tr>
<tr><td>Approval</td><td>Who can authorize overtime</td><td>"Overtime requires prior approval by email from the client's project contact"</td></tr>
<tr><td>Minimums</td><td>Minimum billable time for callouts</td><td>"After-hours callouts are billed at a 2-hour minimum"</td></tr>
<tr><td>Holidays</td><td>Which days count</td><td>"New Year's Day, Memorial Day, July 4, Labor Day, Thanksgiving, Christmas Day"</td></tr>
</tbody>
</table>
<p>Put the clause in your proposal, your <a href="/blog/estimate-template">estimate</a> and the signed agreement, so the client sees the same terms three times before the first invoice.</p>

<h2>Overtime for freelancers, consultants and agencies</h2>
<p>Overtime multipliers are most common in trades and staffing, but knowledge workers face the same problem: a client asks for weekend work or a deadline that forces long days. Options that work for freelancers and agencies:</p>
<ul>
<li><strong>Out-of-hours rate:</strong> a premium (often 1.5x) for work the client specifically asks to be done on evenings or weekends.</li>
<li><strong>Rush percentage:</strong> a surcharge on the project fee for turnaround faster than your standard schedule.</li>
<li><strong>Retainer overage rate:</strong> on a monthly <a href="/blog/retainer-invoice">retainer</a>, hours beyond the included block are billed at an agreed rate, sometimes higher than the base.</li>
</ul>
<p>The principle is the same as in the trades: the premium must be agreed before the work, tied to a client request and shown as its own line.</p>

<h2>Alternatives to overtime billing</h2>
<p>If overtime multipliers feel awkward for your type of work, consider:</p>
<ul>
<li><strong>Rush fees:</strong> a percentage or flat surcharge for compressed deadlines.</li>
<li><strong>Minimum callout charges:</strong> for nights and weekends, regardless of hours.</li>
<li><strong>Higher blended day rates</strong> for projects that routinely run long days.</li>
<li><strong>Separate travel charges</strong>, covered in our guide on <a href="/blog/how-to-bill-for-travel-time">billing for travel time</a>.</li>
</ul>

<p>Knowing how to invoice for overtime comes down to three things: an agreed rate before the work, approval for each overtime event and clear separate lines on the invoice. Do that and premium hours stop being a source of friction. When you are ready to bill, open the <a href="/invoice-generator">free invoice generator</a>, add your regular and overtime lines and download a PDF. It is free, needs no sign-up and runs in your browser.</p>
`,
  },
  {
    slug: "materials-markup",
    title: "Materials Markup: Typical Rates, Formula + Disclosure",
    description:
      "Materials markup explained: typical percentages for contractors, the markup formula, markup vs margin, whether to disclose it and how to show it on an invoice.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["markup-vs-margin", "time-and-materials-invoice", "cost-plus-pricing"],
    faqs: [
      {
        q: "Is it legal to mark up materials?",
        a: "Generally yes. Reselling materials at a profit is normal business practice in the US and most countries. Problems arise when a contract says materials will be billed at cost, when insurance or government work caps the allowed markup, or when you misrepresent your cost. If you promise cost-only pricing, you must stick to it. Otherwise, a reasonable disclosed markup is standard.",
      },
      {
        q: "Should I show my materials markup to the customer?",
        a: "It depends on the contract type. On fixed-price jobs, most contractors show a single materials price and do not break out markup. On time and materials or cost-plus jobs, clients often see supplier receipts, so disclosing the markup percentage up front avoids disputes. When in doubt, state your markup policy in the estimate or contract rather than surprising the client later.",
      },
      {
        q: "Why do contractors charge more for materials than the store price?",
        a: "Markup pays for the time and costs around materials: researching and ordering, driving to the supplier, storage, carrying costs while waiting to be paid, wasted or damaged items, returns and warranty responsibility. Contractors also often stand behind the materials they install. A customer who supplies their own materials usually takes on those risks themselves, which is why many contractors will not warranty customer-supplied parts.",
      },
      {
        q: "What is the difference between a 20% markup and a 20% margin?",
        a: "A 20% markup adds 20% of cost: $100 of materials sells for $120, which is a margin of about 16.7% of the selling price. A 20% margin means profit is 20% of the selling price: $100 of materials must sell for $125, a 25% markup. Mixing the two up is a common pricing error that quietly lowers profit.",
      },
      {
        q: "Do I charge sales tax on marked-up materials?",
        a: "In many US states, when you sell materials to a customer as a retailer, sales tax applies to the selling price, including markup. But construction contractors in many states are treated as the final consumers of materials they install, paying tax when they buy and not charging it to the customer. The treatment varies by state and job type, so check your state revenue department's contractor guidance.",
      },
      {
        q: "Can I mark up materials on an insurance job?",
        a: "Often, but within limits. Insurance restoration work is usually priced using estimating software and price lists, with overhead and profit handled as a separate line under certain conditions. Insurers may question markup on top of that. Read the carrier's guidelines and your agreement with the property owner, and be ready to show receipts for materials.",
      },
      {
        q: "What markup should I use on very expensive equipment?",
        a: "Many contractors use a sliding scale: a higher percentage on small, low-cost parts and a lower one on big-ticket items like HVAC units, water heaters or appliances, because a high percentage on a large price can make bids uncompetitive. A small dollar markup on a costly item can still cover ordering and handling time. Some contractors set a minimum dollar markup per item instead.",
      },
      {
        q: "Should I mark up subcontractor costs too?",
        a: "Many general contractors do add a fee to subcontractor invoices to cover coordination, scheduling, supervision and risk, though the percentage and disclosure depend on the contract. Cost-plus contracts usually define exactly which costs get the fee. Keep subcontractor markup separate from materials markup in your estimates so you can see what each part of the job earns.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Materials markup is the percentage a business adds to the cost of materials before billing the customer. The formula is selling price = cost x (1 + markup %). Contractors commonly use markups somewhere in the 10 to 50 percent range, with lower rates on expensive items, and should disclose markup when the contract bills materials separately.</p>

<p>Every contractor who buys parts and supplies for a job has to decide what to charge for them. Billing materials at cost means your time spent sourcing, collecting and standing behind those materials goes unpaid. Charging too much makes your quotes uncompetitive and can damage trust if the client sees the receipts. This guide explains the materials markup formula, what typical markups look like, how markup differs from margin, when to disclose it and how to show it on an invoice.</p>

<h2>What is materials markup?</h2>
<p>Materials markup is the amount added to your cost of materials to arrive at the price you charge. It is usually expressed as a percentage of cost. If drywall costs you $400 and you bill $480, your markup is $80, or 20 percent.</p>
<p>Markup is not the same as profit. It must first cover the hidden costs of handling materials:</p>
<ul>
<li>Time spent pricing, ordering and picking up materials.</li>
<li>Vehicle and fuel costs for supplier runs.</li>
<li>Storage and inventory you carry between jobs.</li>
<li>Waste, breakage, theft and offcuts.</li>
<li>Returns, restocking fees and warranty callbacks.</li>
<li>The cost of paying suppliers before the client pays you.</li>
</ul>
<p>Only what is left after those costs is real profit.</p>

<h2>What is the materials markup formula?</h2>
<p>Three formulas cover almost every situation:</p>
<table>
<thead><tr><th>You know</th><th>You want</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Cost and markup %</td><td>Selling price</td><td>Cost x (1 + markup %)</td></tr>
<tr><td>Cost and selling price</td><td>Markup %</td><td>(Price - cost) / cost x 100</td></tr>
<tr><td>Cost and target margin %</td><td>Selling price</td><td>Cost / (1 - margin %)</td></tr>
</tbody>
</table>
<p>Example: materials cost $1,250 and you use a 25 percent markup. Selling price = $1,250 x 1.25 = $1,562.50. The markup amount is $312.50.</p>
<p>That $312.50 is 25 percent of cost but only 20 percent of the selling price. That 20 percent is your gross margin on the materials. Confusing the two is common; our full guide on <a href="/blog/markup-vs-margin">markup vs margin</a> walks through the math, and <a href="/blog/how-to-calculate-profit-margin">how to calculate profit margin</a> covers the job level.</p>

<h2>How much do contractors typically mark up materials?</h2>
<p>There is no official standard, and markups vary by trade, region, job size and contract type. The ranges below are illustrative, based on common industry practice rather than a survey, so treat them as a starting point to test against your own costs.</p>
<table>
<thead><tr><th>Situation</th><th>Illustrative markup range</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Small parts and consumables (fittings, fasteners, wire)</td><td>30% to 100%+</td><td>Low dollar value; handling cost is high relative to price</td></tr>
<tr><td>General building materials</td><td>10% to 30%</td><td>Competitive bids keep this moderate</td></tr>
<tr><td>Large equipment (HVAC units, water heaters, appliances)</td><td>5% to 20%</td><td>Clients compare online prices; often a flat dollar markup</td></tr>
<tr><td>Special-order or custom items</td><td>15% to 35%</td><td>Extra coordination, deposits and return risk</td></tr>
<tr><td>Cost-plus or government contracts</td><td>Set by the contract</td><td>Read the allowable markup clause</td></tr>
</tbody>
</table>
<p>A sliding scale is popular: higher percentages on cheap items, lower on expensive ones. For example, 50 percent on items under $50, 25 percent from $50 to $500 and 10 percent above $500.</p>

<h2>Should you disclose materials markup to clients?</h2>
<p>Disclosure depends on how you price the job:</p>
<ul>
<li><strong>Fixed-price or lump-sum jobs:</strong> you usually quote a single price. Markup is built in and not shown, just like a retailer does not show wholesale cost.</li>
<li><strong>Time and materials jobs:</strong> the contract normally says "materials at cost plus X percent." Clients may ask for receipts, so the percentage must match. See our guide to the <a href="/blog/time-and-materials-invoice">time and materials invoice</a>.</li>
<li><strong>Cost-plus jobs:</strong> the client pays actual cost plus a defined fee. Transparency is the whole point. Our <a href="/blog/cost-plus-pricing">cost-plus pricing guide</a> explains the structure.</li>
<li><strong>Insurance and government work:</strong> markup is often limited or handled as a separate overhead and profit line.</li>
</ul>
<p>The rule that matters most: never tell a client materials are "at cost" if they are marked up. That moves a pricing choice into misrepresentation.</p>

<h2>Worked example: showing materials markup on an invoice</h2>
<p>A plumbing contractor replaces a bathroom vanity and fixtures on a T&amp;M basis with materials at cost plus 20 percent (illustrative figures).</p>
<table>
<thead><tr><th>Item</th><th>Qty</th><th>Unit cost</th><th>Markup 20%</th><th>Billed amount</th></tr></thead>
<tbody>
<tr><td>36-inch vanity with top</td><td>1</td><td>$640.00</td><td>$128.00</td><td>$768.00</td></tr>
<tr><td>Faucet, chrome</td><td>1</td><td>$185.00</td><td>$37.00</td><td>$222.00</td></tr>
<tr><td>Supply lines and shut-off valves</td><td>2 sets</td><td>$24.50</td><td>$9.80</td><td>$58.80</td></tr>
<tr><td>P-trap kit and fittings</td><td>1</td><td>$38.00</td><td>$7.60</td><td>$45.60</td></tr>
<tr><td colspan="4"><strong>Materials total (cost $912.00)</strong></td><td><strong>$1,094.40</strong></td></tr>
<tr><td colspan="4">Labor: plumber, 6 hours at $95</td><td>$570.00</td></tr>
<tr><td colspan="4"><strong>Invoice subtotal</strong></td><td><strong>$1,664.40</strong></td></tr>
</tbody>
</table>
<p>Markup earned: $182.40. If the contractor spent 90 minutes ordering and picking up these items, the markup is effectively paying for that time and the warranty responsibility. On a fixed-price version of the same job, the invoice would show one line, "Materials: $1,094.40," or roll everything into a single job price.</p>
<p>You can lay out either version in our <a href="/invoice-generator">free invoice generator</a>, with one line per item or a single materials line.</p>

<h2>How to set your materials markup: step by step</h2>
<ol>
<li><strong>Track your materials handling costs</strong> for a few months: supplier trips, hours spent ordering, waste and returns.</li>
<li><strong>Divide those costs by your annual materials spend</strong> to get a break-even markup. If handling costs $9,000 on $60,000 of materials, you need 15 percent just to break even.</li>
<li><strong>Add a profit target</strong> on top, for example 10 percent, for a total of 25 percent.</li>
<li><strong>Adjust by item size</strong> with a sliding scale so large items stay competitive.</li>
<li><strong>Write your policy into estimates and contracts</strong>, including how customer-supplied materials are handled.</li>
<li><strong>Review it yearly</strong> as supplier prices and fuel costs change.</li>
</ol>

<h2>Showing materials markup on estimates vs invoices</h2>
<p>How much detail you show depends on the pricing model you agreed. The table below summarizes the usual approach.</p>
<table>
<thead><tr><th>Pricing model</th><th>On the estimate</th><th>On the invoice</th></tr></thead>
<tbody>
<tr><td>Fixed price</td><td>One job price or a materials allowance</td><td>Job price; materials not broken out</td></tr>
<tr><td>Labor plus materials</td><td>Labor amount and materials amount</td><td>Two lines or grouped lines, markup built in</td></tr>
<tr><td>Time and materials</td><td>Hourly rates and "materials at cost + X%"</td><td>Each item with cost and markup, or cost plus one markup line</td></tr>
<tr><td>Cost-plus</td><td>Fee structure and cost categories</td><td>Itemized costs with receipts, fee as a separate line</td></tr>
</tbody>
</table>
<p>For a deeper comparison of these models, see <a href="/blog/fixed-price-vs-time-and-materials">fixed price vs time and materials</a>. If your jobs are mostly quoted as labor plus materials, the <a href="/blog/labor-and-materials-invoice">labor and materials invoice guide</a> shows a clean layout, and the <a href="/blog/contractor-invoice-template">contractor invoice template</a> works for most trades.</p>

<h2>Handling price increases on long jobs</h2>
<p>Materials markup protects your margin only if your cost base is current. On jobs that run several months, supplier prices can move between the estimate and the purchase. Common protections:</p>
<ul>
<li><strong>Short quote validity:</strong> state that material prices are valid for 30 days.</li>
<li><strong>Escalation clause:</strong> allow adjustment if a listed material rises more than a set percentage.</li>
<li><strong>Allowances:</strong> give a materials allowance for items the client has not chosen yet, then bill the actual cost plus markup.</li>
<li><strong>Early purchase:</strong> buy key materials once the deposit clears and store them, billing a deposit that covers the outlay.</li>
</ul>

<h2>Customer-supplied materials: what to charge</h2>
<p>When a customer buys their own materials, you lose your markup and take on risk you do not control (wrong parts, poor quality, missing pieces). Common responses include:</p>
<ul>
<li>Charging a slightly higher labor rate for installing customer-supplied items.</li>
<li>Excluding customer-supplied materials from your warranty in writing.</li>
<li>Billing extra trips if parts are missing or wrong.</li>
</ul>
<p>State this policy in your <a href="/blog/estimate-template">estimate</a> so it is agreed before work begins.</p>

<h2>Materials markup and sales tax</h2>
<p>Sales tax treatment of materials varies widely by US state. In some states, contractors performing real property improvements are treated as consumers of materials: they pay tax when buying and do not charge sales tax on the customer invoice. In others, contractors charge tax on the materials they resell, which then includes the marked-up price. Repair work and installation are often treated differently from new construction. Read your state revenue department's guidance for contractors, and see our overview of <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a>. This is general information, not tax advice.</p>

<h2>Common materials markup mistakes</h2>
<ul>
<li><strong>Using markup and margin interchangeably</strong>, which leaves you short of your profit target.</li>
<li><strong>A flat high percentage on expensive equipment</strong>, which loses bids to competitors.</li>
<li><strong>Forgetting freight, delivery and disposal fees</strong> in your cost base.</li>
<li><strong>Not passing on supplier price increases</strong> on long jobs; add a material price escalation clause if prices are volatile.</li>
<li><strong>Undisclosed markup on cost-based contracts</strong>, which can breach the contract.</li>
<li><strong>Not tracking returns</strong>, so you bill a client for items that went back to the supplier.</li>
</ul>

<p>A sensible materials markup pays for the real work of sourcing and standing behind the products you install, and it is a normal part of contractor pricing. Calculate it from your actual handling costs, scale it by item size and disclose it whenever the contract bills materials separately. To bill a job with marked-up materials, use the <a href="/invoice-generator">free invoice generator</a>: no sign-up, nothing to install, and you download a finished PDF built in your browser. For layouts by trade, browse the <a href="/invoice-templates">invoice templates</a>.</p>
`,
  },
  {
    slug: "customer-overpayment",
    title: "Customer Overpaid an Invoice? Refund vs Credit (2026)",
    description:
      "What to do when a customer overpaid an invoice: refund or credit, how to record it, journal entries, a sample email and mistakes that cause headaches.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["duplicate-invoice-payments", "credit-note-guide", "accounts-receivable-guide"],
    faqs: [
      {
        q: "Do I have to refund a customer who overpaid?",
        a: "The money belongs to the customer, so you should either refund it or, with their agreement, apply it as a credit to future invoices. Keeping an overpayment without telling the customer is not a safe option. In the US, unclaimed customer credits that sit on your books for years may eventually have to be reported to the state under unclaimed property laws.",
      },
      {
        q: "How do I record a customer overpayment in accounting?",
        a: "Apply the payment to the invoice up to the amount due and record the excess as a liability, often called customer credit, customer deposits or unapplied cash, rather than income. When you refund it, debit that liability and credit cash. When you apply it to a later invoice, debit the liability and credit accounts receivable. Most accounting software creates these entries automatically.",
      },
      {
        q: "Is an overpayment income for tax purposes?",
        a: "Generally no, because the excess is money you owe back to the customer, not revenue you earned. It becomes revenue only when it is applied to a sale. If a customer formally abandons a credit, its treatment can change, and state unclaimed property rules may apply first. Ask your accountant how to handle very old balances.",
      },
      {
        q: "How long do I have to refund an overpayment?",
        a: "There is usually no single federal deadline for business-to-business overpayments, but refunding promptly, often within a few business days of confirming the payment cleared, is good practice. Consumer protection rules and card network rules may set timelines for some refunds. Your own terms and conditions can also set a refund policy, so check what you have promised.",
      },
      {
        q: "Should I refund to the original payment method?",
        a: "Yes, in most cases. Refunding to the original card, bank account or payment app keeps a clean audit trail and reduces fraud risk. Be wary of anyone who overpays by a large amount and asks you to send the difference to a different account or by gift card or wire, which is a common scam pattern. Confirm the original payment has fully cleared first.",
      },
      {
        q: "Will I lose processing fees when I refund an overpayment?",
        a: "Possibly. Some payment processors do not return the original percentage fee when you refund a card payment, so refunding a $500 overpayment could cost you the fee on that $500. Check your processor's refund policy. Applying the overpayment as a credit on the next invoice avoids the extra cost, which is one reason many businesses offer credit first.",
      },
      {
        q: "What if the customer overpaid by a few cents?",
        a: "Many businesses set a small write-off threshold, such as under $1 or $5, for rounding differences, and record the small excess as miscellaneous income or a minor adjustment according to their accounting policy. Agree the threshold with your accountant and apply it consistently. Larger amounts should be refunded or credited, and the customer told either way.",
      },
      {
        q: "What is the difference between a credit note and a refund?",
        a: "A credit note is a document that reduces what the customer owes, either cancelling part of an invoice or creating a balance to use against future invoices. A refund is money actually sent back. For overpayments, you might issue a credit memo to show the balance, then either let it sit against future work or close it with a refund payment.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> If a customer overpaid an invoice, apply the payment up to the amount due, record the excess as a customer credit (a liability, not income), tell the customer, and either refund it to the original payment method or, with their agreement, apply it to a future invoice. Keep a written record of whichever option you choose.</p>

<p>Overpayments happen more often than most small businesses expect: a client pays an invoice twice, pays the original amount after you issued a discount, adds tax that was already included, or simply types the wrong number. The money is not yours to keep, but how you handle it affects your books, your cash flow and the relationship. This guide covers the causes, the refund vs credit decision, the accounting entries and a sample email.</p>

<h2>What is a customer overpayment?</h2>
<p>A customer overpayment is any payment received that is larger than the balance owed on an invoice or account. The excess is a <strong>credit balance</strong> in the customer's account. On your balance sheet it is a liability (you owe the customer), not revenue. It turns into revenue only when it is applied against a future sale.</p>
<p>Common causes:</p>
<ul>
<li><strong>Duplicate payments:</strong> the same invoice paid twice, often once by check and once online. See <a href="/blog/duplicate-invoice-payments">how to handle duplicate invoice payments</a>.</li>
<li><strong>Paying an outdated amount</strong> after a credit, discount or correction was issued.</li>
<li><strong>Typing errors</strong> in bank transfers.</li>
<li><strong>Paying a deposit and the full amount</strong> without subtracting the deposit.</li>
<li><strong>Tax added twice</strong> by a client's AP team.</li>
<li><strong>Prepayments</strong> intentionally made ahead of future work, which are technically not errors but sit as credits too.</li>
</ul>

<h2>Refund vs credit: which should you choose?</h2>
<table>
<thead><tr><th>Factor</th><th>Refund</th><th>Credit to future invoices</th></tr></thead>
<tbody>
<tr><td>Best when</td><td>One-off customer, large amount, customer asks for money back</td><td>Repeat customer with upcoming invoices</td></tr>
<tr><td>Customer consent needed?</td><td>No, but confirm destination account</td><td>Yes, ask before holding their money</td></tr>
<tr><td>Cost to you</td><td>Possible lost processing fee, bank fees</td><td>None</td></tr>
<tr><td>Cash flow</td><td>Money leaves now</td><td>Money stays until used</td></tr>
<tr><td>Admin later</td><td>Closed immediately</td><td>Must track until fully used</td></tr>
<tr><td>Risk</td><td>Refund fraud if sent to a new account</td><td>Forgotten credits, unclaimed property issues</td></tr>
</tbody>
</table>
<p>The default should follow the customer's wishes. If you offer a credit and they prefer a refund, refund it. A credit that sits unused for years becomes a compliance problem: in the US, state unclaimed property laws can require businesses to report and remit long-dormant customer credits to the state.</p>

<h2>How to handle a customer overpayment step by step</h2>
<ol>
<li><strong>Confirm the payment cleared.</strong> Wait until the funds are settled, especially for checks and new customers.</li>
<li><strong>Identify the cause</strong> by comparing the payment to the invoice, earlier payments and any credit notes.</li>
<li><strong>Apply the payment</strong> to the invoice up to the amount due so the invoice shows as paid.</li>
<li><strong>Record the excess as a customer credit</strong> in your books.</li>
<li><strong>Contact the customer within a few days</strong>, explain the amount and ask whether they want a refund or a credit.</li>
<li><strong>Act on their answer:</strong> send the refund to the original payment method, or apply the credit to the next invoice and show it clearly.</li>
<li><strong>Document everything</strong>: the email, the refund confirmation or the invoice where the credit was applied.</li>
</ol>

<h2>Worked example: recording an overpayment</h2>
<p>Invoice #1045 is for $2,400. The client sends $2,640 because their AP team added 10 percent tax that was already included. Here is how it flows through double-entry bookkeeping (illustrative account names; your chart of accounts may differ):</p>
<table>
<thead><tr><th>Event</th><th>Debit</th><th>Credit</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Payment received</td><td>Cash (bank)</td><td>Accounts receivable (invoice #1045)</td><td>$2,400.00</td></tr>
<tr><td>Excess received</td><td>Cash (bank)</td><td>Customer credits (liability)</td><td>$240.00</td></tr>
<tr><td><em>Option A:</em> refund sent</td><td>Customer credits (liability)</td><td>Cash (bank)</td><td>$240.00</td></tr>
<tr><td><em>Option B:</em> applied to invoice #1061</td><td>Customer credits (liability)</td><td>Accounts receivable (invoice #1061)</td><td>$240.00</td></tr>
</tbody>
</table>
<p>If the client chooses Option B and invoice #1061 is for $1,800, the next invoice should show:</p>
<table>
<thead><tr><th>Line</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Website maintenance, November 2026</td><td>$1,800.00</td></tr>
<tr><td>Less: credit from overpayment on invoice #1045</td><td>-$240.00</td></tr>
<tr><td><strong>Balance due</strong></td><td><strong>$1,560.00</strong></td></tr>
</tbody>
</table>
<p>For a refresher on how these entries balance, see <a href="/blog/debits-and-credits">debits and credits explained</a>.</p>

<h2>Sample email to a customer who overpaid</h2>
<p>Keep it short, factual and give them a choice:</p>
<p><em>Subject: Overpayment on invoice #1045</em></p>
<p><em>Hi Maria, thank you for your payment of $2,640.00 received on October 20. Invoice #1045 was for $2,400.00 (tax included), so you overpaid by $240.00. We can refund the $240.00 to the account it came from, or apply it as a credit to your next invoice. Please let us know which you prefer. Best regards, Sam.</em></p>
<p>If the customer chooses a refund, send it only to the original account or card. Be cautious if someone you do not know overpays by a large amount and then asks you to wire the difference elsewhere; that is a well-known scam pattern. The <a href="https://consumer.ftc.gov/articles/fake-checks" target="_blank" rel="noopener">FTC's guidance on fake check scams</a> describes how it works.</p>

<h2>How to refund an overpayment by payment method</h2>
<ul>
<li><strong>Card payments:</strong> refund through your processor so it returns to the same card. Check whether the processor keeps the original fee; see our guides to <a href="/blog/stripe-fees">Stripe fees</a> and <a href="/blog/paypal-fees">PayPal fees</a>.</li>
<li><strong>Bank transfer or ACH:</strong> send a transfer back to the account it came from, after confirming the details by phone using a number you already have on file.</li>
<li><strong>Check:</strong> wait for the check to clear, then issue a refund check or transfer.</li>
<li><strong>Payment apps:</strong> use the app's refund function rather than sending a new payment.</li>
</ul>

<h2>Overpayment vs prepayment vs deposit: what is the difference?</h2>
<p>All three leave money in the customer's account before it is earned, but they start for different reasons and are handled differently.</p>
<table>
<thead><tr><th></th><th>Overpayment</th><th>Prepayment</th><th>Deposit</th></tr></thead>
<tbody>
<tr><td>Intentional?</td><td>Usually no</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Tied to an invoice?</td><td>Excess over an existing invoice</td><td>Future invoices in general</td><td>A specific job or order</td></tr>
<tr><td>Typical record</td><td>Customer credit or unapplied payment</td><td>Customer credit or unearned revenue</td><td>Customer deposits or unearned revenue</td></tr>
<tr><td>Next step</td><td>Ask the customer: refund or credit</td><td>Apply as invoices are issued</td><td>Deduct on the final invoice</td></tr>
</tbody>
</table>
<p>Deposits have their own rules about refunds and forfeiture, set in your contract; see our <a href="/blog/deposit-invoice">deposit invoice guide</a> for wording.</p>

<h2>How accounting software handles overpayments</h2>
<p>Most accounting tools handle the entries for you once you record the payment correctly. In general:</p>
<ul>
<li>When you record a payment larger than the invoice, the software usually asks whether to keep the excess as a credit or record it as an overpayment on the customer's account.</li>
<li>The credit then appears when you create the customer's next invoice, ready to apply.</li>
<li>If you refund instead, you record a refund against the credit so it clears and does not sit on the balance sheet.</li>
</ul>
<p>The labels differ by product (credit, overpayment, unapplied payment, customer credit), so check the help center of the tool you use. If you invoice with a simple generator rather than accounting software, keep a short spreadsheet of open customer credits and review it monthly. Our comparison of an <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a> explains when it is worth moving to a full system.</p>

<h2>What happens to credits nobody claims?</h2>
<p>A customer credit that sits untouched for years does not quietly become yours. In the US, every state has unclaimed property rules that can apply to uncashed refund checks and dormant customer credit balances, with dormancy periods and reporting deadlines set by each state. Many businesses avoid the issue by refunding small credits once a customer relationship ends. If you have old balances, ask your accountant whether they are reportable.</p>

<h2>Should you issue a credit note for an overpayment?</h2>
<p>A credit note (or credit memo) is mainly used to reduce an invoice, for example after a return or pricing error. An overpayment does not change the invoice, so many businesses simply record the credit balance in the customer account. That said, a short credit memo or customer statement showing the balance is helpful when the client's AP team needs paperwork to reconcile. Our <a href="/blog/credit-note-guide">credit note guide</a> explains when each document fits.</p>

<h2>Common mistakes with customer overpayments</h2>
<ul>
<li><strong>Recording the excess as revenue.</strong> It overstates income and taxable profit.</li>
<li><strong>Not telling the customer.</strong> Silence damages trust when they find it in their reconciliation.</li>
<li><strong>Refunding before funds clear.</strong> A bounced check plus a refund means you lose twice.</li>
<li><strong>Refunding to a different account</strong> on request without verification.</li>
<li><strong>Losing track of credits</strong> so they never get applied.</li>
<li><strong>Marking the invoice "overpaid"</strong> and leaving it open, which confuses <a href="/blog/accounts-receivable-aging-report">aging reports</a>.</li>
</ul>
<p>Overpayments usually start with an unclear invoice. Showing deposits, prior payments and whether tax is included on every bill prevents many of them. See also <a href="/blog/partial-payment-invoice">partial payment invoices</a> for showing amounts already paid.</p>
<p>This guide is general information, not accounting or legal advice. Unclaimed property and refund rules vary by state and country.</p>

<h2>How to prevent overpayments</h2>
<ul>
<li>Show a clear "Balance due" line, after deposits and credits, at the bottom of every invoice.</li>
<li>State "Tax included" or show tax as a separate line, never both ambiguously.</li>
<li>Use unique, sequential invoice numbers so clients do not pay the same bill twice.</li>
<li>Void and replace corrected invoices instead of sending a second copy with the same number; see <a href="/blog/how-to-void-an-invoice">how to void an invoice</a>.</li>
<li>Send statements to frequent clients so both sides see the same account balance.</li>
</ul>

<p>When a customer overpaid an invoice, the fix is simple: record the excess as a liability, tell the customer quickly and refund or credit it based on their choice. Clear invoices with an obvious balance due prevent most overpayments in the first place. You can create invoices like that in the <a href="/invoice-generator">free invoice generator</a>, which needs no sign-up and downloads a PDF built right in your browser.</p>
`,
  },
  {
    slug: "split-billing",
    title: "Split Billing: How to Split an Invoice Between Payers",
    description:
      "Split billing explained: how to split an invoice between multiple payers by percentage or line item, with examples, a layout and tips to avoid disputes.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["partial-payment-invoice", "invoice-numbering-system", "customer-overpayment"],
    faqs: [
      {
        q: "Can one invoice have two payers?",
        a: "It can, but it usually works better to issue a separate invoice to each payer for their share, each with its own number and balance due. A single invoice addressed to two parties makes it unclear who owes what and who is chasing whom. If you must use one invoice, show each payer's share and the amount each has paid, and agree in writing who is responsible for any shortfall.",
      },
      {
        q: "How do you split an invoice by percentage?",
        a: "Agree the percentages first, then multiply the invoice total by each percentage and round to the cent. Put any rounding difference on one named payer so the shares add up exactly to the total. For example, $1,000.01 split 50/50 becomes $500.01 and $500.00. Include the percentage and the full job total on each payer's invoice so they can verify their share.",
      },
      {
        q: "Who pays sales tax on a split invoice?",
        a: "Typically each payer pays tax on their own share, so you calculate tax on each portion rather than once on the whole. In practice, splitting the taxable amount and the tax proportionally gives the same total. If one payer is tax-exempt with a valid certificate, only their portion is exempt. Check your state rules for how to document exemptions on partial sales.",
      },
      {
        q: "What is split billing in healthcare?",
        a: "In healthcare, split billing often refers to dividing a patient encounter between payers, such as primary and secondary insurance and the patient, or splitting a visit into preventive and problem-focused services with separate codes. It follows payer rules and coding guidelines rather than simple percentages. This article focuses on business invoicing; medical billers should follow payer and coding guidance.",
      },
      {
        q: "What happens if one payer in a split bill does not pay?",
        a: "That depends on your contract. If each payer agreed to be responsible only for their share, you chase that payer for their amount. If the contract makes the parties jointly responsible, you may be able to collect the shortfall from the others. Spell this out before work starts, because without written terms the default can be unclear and disputes get messy.",
      },
      {
        q: "Is split billing the same as installment billing?",
        a: "No. Split billing divides one charge among different payers. Installment billing divides one charge over time for the same payer, such as three monthly payments. You can combine them, for example two business partners each paying their half in two installments, but each structure needs its own clear tracking.",
      },
      {
        q: "How do I number split invoices?",
        a: "Give each payer's invoice its own unique number. Many businesses use a base number plus a suffix, such as 2045-A and 2045-B, so both invoices are visibly linked to the same job. Others use the next numbers in sequence and reference the job or project ID on each. Either way, never send two different invoices with the same number.",
      },
      {
        q: "Can I split a bill between a company and an individual?",
        a: "Yes. A common example is an employer paying part of a training course and the employee paying the rest, or a landlord and tenant sharing a repair. Issue each party an invoice addressed to them with their share, and make sure the company's portion includes whatever their AP team needs, such as a PO number or the employee's name.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Split billing means dividing the cost of one job or purchase between two or more payers, by percentage, fixed amount or line item. The cleanest method is to issue each payer a separate invoice for their share, with its own number, that references the shared job and the full total so each party can verify the split.</p>

<p>Split billing comes up whenever more than one person or organization is paying for the same work: business partners sharing a service, roommates splitting a repair, an employer and employee splitting training, two departments sharing a consultant, or co-owners of a property. Done well, everyone knows what they owe. Done badly, payments get mixed up, someone underpays and you end up chasing the gap. This guide covers the methods, a worked example and the terms that prevent disputes.</p>

<h2>What is split billing?</h2>
<p>Split billing (also called a split invoice or shared billing) is an invoicing arrangement where the total for a job is divided among multiple payers, each responsible for a defined portion. It differs from:</p>
<ul>
<li><strong>Installment billing:</strong> one payer, paying over time.</li>
<li><strong>Progress billing:</strong> one payer, billed as work reaches milestones. See <a href="/blog/progress-billing">progress billing</a>.</li>
<li><strong>Partial payments:</strong> one payer paying part of an invoice now and part later. See <a href="/blog/partial-payment-invoice">partial payment invoices</a>.</li>
</ul>
<p>In healthcare and telecom the term has more specific meanings (for example, splitting between insurance plans and patients, or between business and personal phone use). This guide focuses on general business invoicing.</p>

<h2>How can you split an invoice? Four methods</h2>
<table>
<thead><tr><th>Method</th><th>How it works</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Equal split</td><td>Total divided evenly among payers</td><td>Partners or co-owners with equal stakes</td></tr>
<tr><td>Percentage split</td><td>Each payer covers an agreed percentage (e.g. 60/40)</td><td>Unequal ownership or usage</td></tr>
<tr><td>Fixed amount</td><td>One payer covers a set dollar amount, another the rest</td><td>Employer contribution caps, sponsorships, grants</td></tr>
<tr><td>Line-item split</td><td>Each payer pays for specific lines</td><td>Shared jobs where each party ordered different items</td></tr>
</tbody>
</table>
<p>Whichever method you use, agree it in writing before the work starts. An email confirmation from each payer is enough for small jobs; larger jobs should have it in the contract.</p>

<h2>One invoice or separate invoices?</h2>
<p>You have two basic options:</p>
<h3>Option 1: Separate invoices (recommended)</h3>
<p>Each payer gets their own invoice addressed to them, with their own invoice number, their share as the balance due and a reference to the shared job. Payments, reminders and receipts stay clean, and one payer's delay does not hold up the other's records.</p>
<h3>Option 2: One invoice showing the split</h3>
<p>A single invoice lists the full job and then a breakdown of each payer's share. It is simpler to produce but harder to track: two payments arrive against one invoice, and it is not obvious who is behind. Use it only for small amounts or when both payers ask for a single document.</p>
<p>For numbering, a linked scheme such as 2045-A and 2045-B works well. Our <a href="/blog/invoice-numbering-system">invoice numbering system guide</a> covers options, and the <a href="/tools/invoice-number-generator">invoice number generator</a> can produce a consistent sequence.</p>

<h2>Worked example: splitting an invoice 60/40</h2>
<p>A landscaping company installs a shared fence and drainage between two neighboring properties. The owners agreed in writing to split it 60 percent (Owner A, longer frontage) and 40 percent (Owner B). The job details (illustrative figures, 6 percent sales tax on materials only):</p>
<table>
<thead><tr><th>Line</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Cedar fence, 120 linear ft, materials</td><td>$3,240.00</td></tr>
<tr><td>Fence installation labor</td><td>$2,160.00</td></tr>
<tr><td>French drain, 60 ft, materials</td><td>$780.00</td></tr>
<tr><td>Drain excavation and installation labor</td><td>$1,320.00</td></tr>
<tr><td>Subtotal</td><td>$7,500.00</td></tr>
<tr><td>Sales tax 6% on materials ($4,020.00)</td><td>$241.20</td></tr>
<tr><td><strong>Job total</strong></td><td><strong>$7,741.20</strong></td></tr>
</tbody>
</table>
<p>Each owner's invoice then shows:</p>
<table>
<thead><tr><th></th><th>Invoice 2045-A (Owner A, 60%)</th><th>Invoice 2045-B (Owner B, 40%)</th></tr></thead>
<tbody>
<tr><td>Share of subtotal</td><td>$4,500.00</td><td>$3,000.00</td></tr>
<tr><td>Share of sales tax</td><td>$144.72</td><td>$96.48</td></tr>
<tr><td><strong>Balance due</strong></td><td><strong>$4,644.72</strong></td><td><strong>$3,096.48</strong></td></tr>
</tbody>
</table>
<p>Check: $4,644.72 + $3,096.48 = $7,741.20. Each invoice includes a note: "Shared job #2045, total $7,741.20, split 60/40 per agreement dated Sept 30, 2026. This invoice covers your 40% share only." You can build both invoices in the <a href="/invoice-generator">free invoice generator</a> by copying the line items and adding a share line, or by listing the full job in the notes. Use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to check each portion.</p>

<h2>How to split an invoice: step by step</h2>
<ol>
<li><strong>Agree the split method and percentages</strong> with every payer before work begins.</li>
<li><strong>Decide who covers any shortfall</strong> if one payer does not pay, and put it in writing.</li>
<li><strong>Collect billing details for each payer</strong>: legal name, billing address, email, PO numbers and tax-exempt certificates if any.</li>
<li><strong>Calculate each share</strong> and assign rounding differences to one named payer so the total balances.</li>
<li><strong>Create one invoice per payer</strong> with linked numbers and a note referencing the full job total.</li>
<li><strong>Track payments separately</strong> in your <a href="/blog/accounts-receivable-guide">accounts receivable</a> records.</li>
<li><strong>Send reminders only to the payer who is late</strong>, with their own balance.</li>
</ol>

<h2>Handling deposits, discounts and taxes in split billing</h2>
<ul>
<li><strong>Deposits:</strong> record each payer's deposit against their own invoice. If only one payer paid the deposit, do not split it; credit it to them. See our <a href="/blog/deposit-invoice">deposit invoice guide</a>.</li>
<li><strong>Discounts:</strong> apply the discount to the job total before splitting unless the discount is for a single payer (for example, a loyalty discount).</li>
<li><strong>Tax exemptions:</strong> if one payer is exempt, calculate tax only on the non-exempt share and keep their certificate on file.</li>
<li><strong>Change orders:</strong> confirm whether extra work is split the same way; often it is not, because only one party asked for it.</li>
</ul>

<h2>Common split billing mistakes</h2>
<ul>
<li><strong>No written agreement</strong> on the split, so payers argue about percentages after the job.</li>
<li><strong>Using the same invoice number twice</strong> for two different payers.</li>
<li><strong>Shares that do not add up</strong> to the total because of rounding.</li>
<li><strong>Applying one payer's payment to the other's invoice</strong>, which can also create an apparent <a href="/blog/customer-overpayment">customer overpayment</a>.</li>
<li><strong>Sending reminders to everyone</strong> when only one payer is late, which irritates the one who paid.</li>
<li><strong>Unclear responsibility for unpaid shares</strong>, leaving you to absorb the loss.</li>
</ul>

<h2>Split billing examples by industry</h2>
<table>
<thead><tr><th>Industry</th><th>Typical payers</th><th>Common split method</th></tr></thead>
<tbody>
<tr><td>Property and home services</td><td>Neighbors, co-owners, landlord and tenant</td><td>Percentage or line item</td></tr>
<tr><td>Training and education</td><td>Employer and employee</td><td>Fixed amount from employer, balance from individual</td></tr>
<tr><td>Consulting and agencies</td><td>Two departments or business units</td><td>Percentage by budget or usage</td></tr>
<tr><td>Events and venues</td><td>Co-hosts or sponsors</td><td>Fixed sponsorship amounts plus shared balance</td></tr>
<tr><td>Legal and professional services</td><td>Co-defendants, family members, business partners</td><td>Equal or agreed percentages</td></tr>
<tr><td>Medical and therapy</td><td>Insurer and patient</td><td>Payer rules, copays and deductibles</td></tr>
</tbody>
</table>
<p>Healthcare is the exception to most of this guide, because payer contracts and coding rules decide the split. If you bill patients directly, the <a href="/blog/medical-invoice-template">medical invoice template</a> covers patient-facing invoices.</p>

<h2>Sample split billing agreement wording</h2>
<p>A short paragraph in the quote or contract avoids most disputes. You can adapt this:</p>
<p><em>"The total price for this project is $7,500.00 plus applicable tax. Owner A will pay 60% and Owner B will pay 40% of the total, including tax and any approved change orders unless a change order states otherwise. Each owner will receive a separate invoice for their share, due Net 15. Each owner is responsible only for their own share."</em></p>
<p>If you want the parties to be jointly responsible, say so instead: "Each owner is jointly and severally responsible for the full amount." That wording has legal consequences, so check it with a lawyer for large jobs. This article is general information, not legal advice.</p>

<h2>Collecting from multiple payers</h2>
<ul>
<li><strong>Offer the same payment methods to each payer</strong> so nobody has an excuse to delay. Bank transfers keep fees low; our guide on <a href="/blog/how-to-accept-ach-payments">accepting ACH payments</a> explains the setup.</li>
<li><strong>Ask each payer to include their invoice number</strong> as the payment reference so you can match it quickly.</li>
<li><strong>Send individual reminders</strong> using polite <a href="/blog/payment-reminder-emails">payment reminder emails</a> addressed only to the payer who is behind.</li>
<li><strong>Do not hold one payer's warranty or documents hostage</strong> for another payer's unpaid share, unless your contract allows it.</li>
</ul>

<h2>When split billing is a bad idea</h2>
<p>Split billing adds admin work and collection risk. Consider asking one party to pay the full amount and settle with the others privately when:</p>
<ul>
<li>The job is small and the admin cost outweighs the convenience.</li>
<li>One of the payers has poor payment history.</li>
<li>The payers are already in a dispute with each other.</li>
<li>You would have to wait for both payments before ordering materials.</li>
</ul>
<p>In those cases, invoice a single responsible client and let them collect from the others. Strong <a href="/blog/invoice-payment-terms">payment terms</a> protect you either way.</p>

<p>Split billing works when everyone agrees the shares up front and each payer gets a clear invoice for exactly what they owe. Use separate linked invoices, make the shares add up to the cent and track payments payer by payer. To create split invoices quickly, use the <a href="/invoice-generator">free invoice generator</a>. It needs no sign-up and builds each invoice as a downloadable PDF in your browser, so you can produce one per payer in minutes.</p>
`,
  },
];
