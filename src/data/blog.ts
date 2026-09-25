export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  /** ISO date of last editorial update; when omitted, `date` is used. */
  updated?: string;
  readingTime: number;
  author: string;
  /** Shown on tax/compliance articles (e.g. "Pakistan", "General"). */
  jurisdiction?: string;
  content: string; // simple HTML
}

export const CATEGORIES = [
  { slug: "invoicing-basics", name: "Invoicing Basics" },
  { slug: "comparisons", name: "Comparisons" },
  { slug: "guides", name: "Guides" },
  { slug: "tax-compliance", name: "Tax & Compliance" },
  { slug: "design-templates", name: "Design & Templates" },
];

/** Approximate reading time from HTML (~220 words per minute). */
export function estimateReadingTime(html: string): number {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export const POSTS: Post[] = [
  {
    slug: "what-is-an-invoice",
    title: "What Is an Invoice? A Plain-English Definition for Small Businesses",
    description:
      "An invoice is a dated request for payment that records what you sold, to whom, and on what terms. Learn what every invoice must contain.",
    category: "invoicing-basics",
    date: "2026-07-28",
    updated: "2026-09-25",
    readingTime: 6,
    author: "Invoice Creator Editorial Team",
    content: `
<h2>The short definition</h2>
<p>An invoice is a commercial document issued by a seller to a buyer that itemises goods or services supplied, states the amount owed, and sets a deadline for payment. It is simultaneously a request for money, a record of a transaction, and — in most countries — an accounting document you are legally required to keep for several years.</p>
<p>An invoice is not a receipt and it is not a quote. A quote or estimate comes before the work; an invoice comes after delivery (or at an agreed milestone); a receipt confirms the invoice was paid. Confusing these documents is one of the most common reasons clients delay payment or dispute a balance.</p>
<p>If you sell products, charge for time, or bill retainers, a clear invoice is how you turn completed work into cash. Weak invoices — missing numbers, vague lines, no due date — sit in accounts-payable queues. Strong ones get approved in days.</p>

<h2>What every invoice must contain</h2>
<p>Requirements vary slightly by country and industry, but professional invoices share a core set of fields. Missing any of these raises the chance of rejection:</p>
<ul>
<li><strong>The word "Invoice"</strong> — so the document cannot be mistaken for an estimate, quote, or packing slip.</li>
<li><strong>A unique invoice number</strong> — sequential, never reused, easy to reference in email and bank transfers.</li>
<li><strong>Issue date and due date</strong> — or clear terms such as Net 14 or Net 30.</li>
<li><strong>Your business details</strong> — legal name, address, tax registration number where applicable, and a contact email.</li>
<li><strong>Your client's details</strong> — the legal entity being billed, not only a person's first name or a trading nickname.</li>
<li><strong>Line items</strong> — description, quantity, unit price, and line total for each product or service.</li>
<li><strong>Subtotal, tax, discounts, and the final amount due</strong> — with arithmetic that matches the sum of the lines.</li>
<li><strong>Payment instructions</strong> — bank details, payment link, or accepted methods, placed where they are easy to find.</li>
</ul>
<p>Many buyers also require a purchase order (PO) number, a cost centre, or a project code. Ask for those at kickoff and print them on the invoice — not in a follow-up email three weeks later.</p>

<h2>Why the details matter</h2>
<p>Accounts-payable teams reject invoices for surprisingly small reasons: a missing PO number, an ambiguous due date, a total that does not match the sum of the lines, or billing the wrong legal entity after a company rename. Every rejection adds days or weeks to your payment cycle because the invoice re-enters the approval queue from the start.</p>
<p>A structured template removes much of that risk. When fields always appear in the same place, both you and the client know where to look. That is why tools like our <a href="/invoice-generator">free invoice generator</a> and ready-made <a href="/invoice-templates">invoice templates</a> outperform ad-hoc Word documents for anyone who invoices more than occasionally.</p>

<h2>Invoice numbering that survives an audit</h2>
<p>Use a predictable scheme such as <code>2026-0041</code> or <code>ACME-0041</code>. Prefixing with the year makes year-end filing obvious. Never restart numbering mid-year, never skip numbers without a logged void, and never issue two invoices with the same number — auditors treat duplicates as a red flag.</p>
<p>If you void an invoice, keep a record of the voided number and why it was cancelled. If you need to correct a mistake after sending, issue a credit note that references the original number rather than silently editing the PDF and resending it.</p>

<h2>Timing: when to issue the invoice</h2>
<p>Issue as soon as delivery is complete or a contractual milestone is met. Waiting until month-end because it "feels tidier" often means you miss the client's weekly payment run and wait another full cycle. For ongoing retainers, invoice on a fixed day each month so cash flow is predictable for both sides.</p>
<p>For larger projects, split billing into deposit, progress, and final invoices. Clients approve smaller, well-labelled amounts faster than one large bill after months of work. See our <a href="/blog/how-to-create-an-invoice">how to create an invoice</a> guide for a step-by-step field checklist.</p>

<h2>How long to keep invoices</h2>
<p>Retention rules vary by jurisdiction, but most expect between five and seven years of sales records. Store a PDF copy of every invoice you send — not only the data inside accounting software. PDFs are what banks, tax inspectors, and dispute mediators ask for when something goes wrong.</p>
<p>Organise files by year and client name so you can retrieve any document in seconds. Pair each paid invoice with its receipt or bank reference when you reconcile.</p>

<h2>Invoice vs related documents</h2>
<p>If you are unsure whether you need an invoice, a receipt, an estimate, or a quotation, read the comparison guides: <a href="/blog/invoice-vs-receipt">invoice vs receipt</a>, <a href="/blog/invoice-vs-estimate">invoice vs estimate</a>, and <a href="/blog/invoice-vs-quotation">invoice vs quotation</a>. Using the wrong label creates confusion about whether payment is still owed.</p>


<h2>Who uses invoices and why</h2>
<p>Freelancers use invoices to turn finished deliverables into receivables. Product sellers use them to document shipments and tax. Agencies use them for retainers, milestones, and out-of-scope extras. Consultants and nonprofits use them whenever a client or grant requires a formal billing artefact. In every case the document answers the same questions: who owes whom, for what, how much, and by when.</p>
<p>Without invoices, cash collection becomes a chain of informal reminders that are hard to audit. With them, you can age receivables, forecast cash, and prove what was agreed when a dispute appears months later. That operational value is why even tiny businesses benefit from treating invoicing as a system rather than an afterthought.</p>
<h2>Pro forma, commercial, and recurring invoices</h2>
<p>A pro forma invoice is a preliminary bill used for customs, deposits, or planning — it is usually not a demand for final payment and should be labelled clearly so it is not confused with a tax invoice. A commercial invoice for goods trade may need Incoterms, country of origin, and HS codes in addition to ordinary billing fields. Recurring invoices repeat on a schedule for retainers or subscriptions; they still need unique numbers each period and an explicit service period on every PDF.</p>
<p>Choose the document type that matches the moment in the sales cycle. Sending a full invoice before acceptance of a quote creates awkward credit notes later. Sending only chat messages when a client needs a PDF for their finance system creates unpaid work that feels invisible to their process.</p>
<h2>Digital workflows and client portals</h2>
<p>Many larger buyers insist you upload invoices to a vendor portal with coded fields. Treat the portal as the system of record for delivery, but keep your own PDF archive. Portal UIs change; your numbered PDF is what you attach in a chase email when something stalls. If a portal rejects a file, fix the rejected field rather than emailing a side-channel PDF that AP will never post.</p>
<p>Electronic invoicing mandates in some countries add clearance, QR codes, or government IDs. Those rules sit on top of the ordinary commercial invoice — they do not replace the need for clear line items and payment instructions. When in doubt, ask the buyer what their AP checklist requires before your first bill.</p>
<h2>Create one now</h2>
<p>You can build a clear, professional invoice with every field above in a few minutes using our <a href="/invoice-generator">free invoice generator</a> — live preview, no watermark, instant PDF download. Pick a layout from <a href="/invoice-templates/modern">Modern</a>, <a href="/invoice-templates/corporate">Corporate</a>, or another style that matches how your clients file paperwork, fill in the details once, and send a document that is ready to approve.</p>
`,
  },
  {
    slug: "how-to-create-an-invoice",
    title: "How to Create an Invoice: A Step-by-Step Guide (2026)",
    description:
      "Eight practical steps to create a professional invoice that gets paid on time, with field-by-field guidance and a free generator.",
    category: "guides",
    date: "2026-07-22",
    updated: "2026-09-25",
    readingTime: 5,
    author: "Invoice Creator Editorial Team",
    content: `
<h2>Before you start</h2>
<p>Gather three things before you open any template: your legal business details, the client's legal billing details, and an agreed scope with prices. Ninety percent of late payments trace back to a disagreement about one of those three — not to the invoice layout itself.</p>
<p>If the client uses purchase orders, get the PO number in writing before you invoice. If tax applies, confirm whether you must charge it and which registration number belongs on the document. A five-minute check now prevents a three-week rejection later.</p>

<h2>Step 1 — Pick a template</h2>
<p>Choose a layout that matches how your client files paperwork. Enterprise accounts payable teams prefer dense, reference-heavy layouts such as <a href="/invoice-templates/corporate">Corporate</a>. Creative clients often respond well to <a href="/invoice-templates/modern">Modern</a> or <a href="/invoice-templates/creative">Creative</a>. Solo consultants who want quiet clarity often choose <a href="/invoice-templates/minimal">Minimal</a>.</p>
<p>The template should never hide the amount due, the due date, or the payment method. Those three facts should be findable in a few seconds. Browse more options on our <a href="/invoice-templates">invoice templates</a> page, then open the one you like inside the generator.</p>

<h2>Step 2 — Add your business identity</h2>
<p>Upload your logo at a modest size, then add your legal business name, registered address, email, phone, and tax registration number if you have one. If you trade under a different name from your registered entity, show both: the registered name for legal clarity and the trading name for recognition.</p>
<p>Inconsistent seller details across invoices make reconciliation harder for you and look unprofessional to finance teams. Keep one saved profile and reuse it.</p>

<h2>Step 3 — Add the client</h2>
<p>Bill the legal entity named in the contract or purchase order. Include an attention line for the person who approves payment, and add their PO number, project code, or department if they use one. Billing a trading name when the contract is with a parent company is a frequent cause of "we never received this" replies.</p>
<p>For international clients, confirm the country, tax ID format, and whether the billing address differs from the delivery address.</p>

<h2>Step 4 — Set the invoice number and dates</h2>
<p>Use your next sequential number — never reuse one. Set today's date (or the supply date, if different) as the issue date, and a due date that matches your agreed terms. "Due on receipt" is legitimate for new or one-off clients; Net 14 and Net 30 are more common for ongoing B2B work.</p>
<p>Write the due date as a calendar date as well as a term. "Net 30" alone forces the client to calculate; "due 25 October 2026" removes ambiguity. For more on numbering discipline, see <a href="/blog/what-is-an-invoice">what an invoice is</a>.</p>

<h2>Step 5 — Itemise the work</h2>
<p>Write descriptions your client can approve without asking you a question. "Website redesign — homepage and four inner pages, phase 1 of 2" beats "Design work". Include units (hours, seats, units shipped), rates, and quantities so the maths is transparent.</p>
<ul>
<li>For hourly work, list period covered and attach or summarise a timesheet.</li>
<li>For products, include SKUs or product codes when the buyer tracks inventory.</li>
<li>For retainers, name the month or period explicitly.</li>
<li>For milestones, state "Phase 2 of 3 — 40% of contract value" and what remains.</li>
</ul>
<p>Real-world layouts for these scenarios are covered in our <a href="/blog/invoice-examples">invoice examples</a> guide.</p>

<h2>Step 6 — Apply tax, discounts and shipping</h2>
<p>Apply discounts before tax unless local rules say otherwise, then apply the correct tax rate to the taxable amount. Show tax as its own line (or lines, if multiple rates apply). If you are not registered for tax, say so explicitly so the client does not try to reclaim an amount that was never charged.</p>
<p>Shipping, handling, and expenses should appear as separate lines when material. Mixing them into service fees makes audits and client reviews harder. For jurisdiction-specific fields, see our <a href="/blog/tax-invoice-guide">tax invoice</a>, <a href="/blog/gst-invoice-guide">GST</a>, and <a href="/blog/vat-invoice-guide">VAT</a> guides.</p>

<h2>Step 7 — Add payment terms and notes</h2>
<p>State accepted payment methods, bank details (or a payment link), any late-payment interest you agreed in the contract, and a short thank-you. Put bank details on the invoice itself — not only in the email body — so they survive filing systems that store the PDF alone.</p>
<p>Optional notes that help: reference to the accepted proposal or quote number, wire fee responsibility for international transfers, and a reminder of the PO number. A polite, specific note measurably improves payment speed compared with a blank footer.</p>

<h2>Step 8 — Download and send</h2>
<p>Export as PDF — never an editable spreadsheet or word-processor file as your document of record. Name the file <code>Invoice-2026-0041-ClientName.pdf</code>. Email it to accounts payable with the invoice number and due date in the subject line, and CC your day-to-day contact so they can push approval internally.</p>
<p>For subject lines, reminders, and escalation wording, use our companion guide: <a href="/blog/how-to-send-an-invoice">how to send an invoice</a>.</p>

<h2>Common pitfalls at creation time</h2>
<ul>
<li>Leaving the due date blank or writing "ASAP".</li>
<li>Rounding totals by hand so lines no longer sum correctly.</li>
<li>Forgetting the PO after the client said they require one.</li>
<li>Sending before the deliverable is actually complete, which invites disputes.</li>
</ul>
<p>Avoid the longer list in <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>.</p>


<h2>Gathering inputs the day before you bill</h2>
<p>Create a short intake checklist for every new client: legal name, billing address, AP email, tax IDs, PO rules, currency, and default terms. Store it where anyone on your team can find it. When a project ends on a Friday afternoon, you should not be hunting message threads for a PO number.</p>
<p>Also gather proof of delivery or acceptance — a sign-off email, timesheet approval, or shipping confirmation. If a dispute arises, that evidence sits beside the invoice. Building the PDF without knowing what was accepted is how premature invoices get rejected and relationships cool.</p>
<h2>Discounts, retainers, and credit lines</h2>
<p>Show discounts as their own lines or as clearly labelled adjustments so the client sees the journey from list price to amount due. If a deposit was already paid, add a credit line that references the deposit invoice number. Net total should be obvious: charges for this period, minus credits, plus tax, equals amount due now.</p>
<p>For retainers, name the period and the included scope. For prepaid packages, show remaining balances in the notes when helpful. Transparency reduces clarification emails that freeze approval for days.</p>
<h2>Quality check before export</h2>
<p>Read the PDF as if you were a stranger in accounts payable. Can you see who you are, who you are billing, what you delivered, what to pay, how to pay, and by when — without endless scrolling? Open the file on your phone. Tiny logos and pale grey text that look fine in a design tool often fail in real inboxes.</p>
<p>Spell-check client names and bank account digits twice. A single wrong IBAN can bounce a wire and burn a week. When amounts are material, have a second person glance at entity, PO, tax, and totals before you hit send.</p>
<h2>Do it now</h2>
<p>Our <a href="/invoice-generator">free invoice generator</a> walks through every step above with a live preview and instant PDF download. Fill the fields once, check the totals, download, and send — without rebuilding the layout from scratch each time.</p>
`,
  },
  {
    slug: "invoice-vs-receipt",
    title: "Invoice vs Receipt: What Is the Difference?",
    description:
      "An invoice requests payment; a receipt proves payment was made. Learn when to issue each and what happens if you confuse them.",
    category: "comparisons",
    date: "2026-07-15",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    content: `
<h2>The core difference</h2>
<p>An invoice is issued before payment (or before the final payment clears) and asks for money. A receipt is issued after payment and confirms money was received. One creates a receivable on your books; the other marks that receivable as settled.</p>
<p>Mixing the labels causes real operational problems. If you mark a paid document "Invoice", a client may pay twice — or their system may keep showing the balance as open. If you only ever issue receipts and never invoices, you lose a clear audit trail of what was owed and when it was due.</p>

<h2>Side-by-side comparison</h2>
<table><thead><tr><th>&nbsp;</th><th>Invoice</th><th>Receipt</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Request payment</td><td>Confirm payment</td></tr>
<tr><td>Timing</td><td>After delivery (or at a milestone), before payment</td><td>At or after payment clears</td></tr>
<tr><td>Includes due date</td><td>Yes</td><td>Usually no</td></tr>
<tr><td>Amount meaning</td><td>Amount owed</td><td>Amount received</td></tr>
<tr><td>Used by buyer for</td><td>Approving and scheduling payment</td><td>Expense claims, warranty, returns, tax records</td></tr>
<tr><td>Creates a receivable</td><td>Yes</td><td>No</td></tr>
<tr><td>Typical label</td><td>"Invoice" plus unique number</td><td>"Receipt" or "Payment confirmation"</td></tr>
</tbody></table>

<h2>When you need both</h2>
<p>For most B2B work you issue an invoice first, then a receipt (or a paid stamp / payment confirmation) when the transfer clears. The receipt should reference the original invoice number so both parties can match documents during reconciliation.</p>
<p>For retail, café, or instant online checkout, a receipt alone is often enough because payment and delivery happen at the same moment. There was never an unpaid balance to track. Even then, some business buyers still ask for a formal tax invoice for reclaim purposes — ask before you assume a till receipt is enough.</p>

<h2>What each document should include</h2>
<h3>On the invoice</h3>
<ul>
<li>Unique invoice number, issue date, and due date</li>
<li>Seller and buyer legal details</li>
<li>Itemised lines, tax breakdown, and total due</li>
<li>Payment instructions</li>
</ul>
<h3>On the receipt</h3>
<ul>
<li>Confirmation that payment was received (amount and date)</li>
<li>Payment method (card, bank transfer, cash)</li>
<li>Reference to the invoice number being settled</li>
<li>Seller details and a receipt or confirmation number</li>
</ul>
<p>If a payment only partially settles an invoice, say so clearly: "Partial payment of £800 against invoice 2026-0041; balance £1,600 remaining." Ambiguous partial receipts create disputes months later.</p>

<h2>Accounting and tax angle</h2>
<p>Invoices support revenue recognition and receivables tracking. Receipts support proof of settlement and, for buyers, expense evidence. Tax authorities often want both sides of the story for larger B2B transactions: the tax invoice showing tax charged, and evidence that it was paid.</p>
<p>Never treat a bank statement line alone as a substitute for a proper receipt when a client asks for one. The statement proves money moved; the receipt ties that money to a specific invoice and supply.</p>

<h2>Common mistakes</h2>
<ul>
<li>Labelling a paid document "Invoice" without marking it paid — clients may pay twice or file it as unpaid.</li>
<li>Issuing a receipt with no reference to the original invoice number.</li>
<li>Using receipts as your only sales record, which makes year-end reconciliation painful.</li>
<li>Sending a receipt before funds clear (especially cheques or slow international wires).</li>
<li>Changing totals on a "receipt" to match what the client paid when the invoice was wrong — fix the invoice with a credit note instead.</li>
</ul>


<h2>How bookkeeping treats each document</h2>
<p>On accrual books, issuing an invoice typically records revenue and a receivable. Receiving payment clears the receivable and increases cash. The receipt is operational proof for the customer and a useful attachment for your records; the accounting event is the payment match against the invoice. Cash-basis businesses may recognise income when paid, but they still benefit from invoices as a way to track what is outstanding.</p>
<p>If you only issue receipts, you lose a clean list of unpaid work. If you only issue invoices and never confirm payment, customers chasing expense reports ask you for documents you never prepared. Budget a few minutes to close the loop every time money clears.</p>
<h2>Retail, marketplaces, and card payments</h2>
<p>Card terminals and online checkouts often produce a payment receipt automatically. That receipt proves the card charge. For a business buyer who needs a tax invoice, you may still need to issue a separate document with registration numbers and a proper breakdown. Ask early whether they need a tax invoice for reclaim or whether the card receipt is enough.</p>
<p>Marketplaces sometimes remit net of fees. Your invoice to the end customer, if any, and your payout report from the platform are different artefacts. Do not assume one PDF satisfies both sales documentation and creator payout reconciliation.</p>
<h2>Disputes, refunds, and chargebacks</h2>
<p>When a refund happens, document it with a credit note or refund receipt that references the original invoice and payment. Chargebacks are easier to contest when you can produce the invoice, the delivery evidence, and the receipt together. Keep them filed under the same client and year so retrieval takes seconds, not hours.</p>
<p>Partial refunds should state the remaining balance explicitly. Ambiguous refund emails that never become documents are how both sides end up with different memories of what was settled.</p>

<h2>Labelling paid invoices clearly</h2>
<p>Some businesses stamp the original invoice PDF "PAID" instead of issuing a separate receipt. That can work if the stamp includes payment date and method, and if your client accepts it for their records. When in doubt, send a short separate receipt that references the invoice number — it takes a minute and prevents double-payment risk.</p>
<p>Never change the invoice total after payment to match a wrong transfer. Issue a credit or request the balance; altered history undermines audits.</p>
<h2>Practical workflow</h2>
<ol>
<li>Deliver the work or ship the goods.</li>
<li>Create and send a numbered invoice (PDF).</li>
<li>Record the receivable in your books or tracker.</li>
<li>When payment clears, mark the invoice paid and send a receipt referencing that number.</li>
<li>Store both PDFs together by year and client.</li>
</ol>
<p>For related distinctions, see <a href="/blog/invoice-vs-estimate">invoice vs estimate</a> and <a href="/blog/invoice-vs-quotation">invoice vs quotation</a>. To create the unpaid document correctly the first time, use the <a href="/invoice-generator">free invoice generator</a>.</p>
`,
  },
  {
    slug: "invoice-vs-estimate",
    title: "Invoice vs Estimate: Which Document Should You Send?",
    description:
      "Estimates are informed projections; invoices are binding requests for payment. Learn when to send each and how to convert one into the other.",
    category: "comparisons",
    date: "2026-07-08",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    content: `
<h2>Definitions</h2>
<p>An <strong>estimate</strong> is a good-faith projection of what a job will cost. It is not a fixed contract price. It usually carries a validity window and, ideally, a stated variance range (for example, "±10% depending on site conditions"). An <strong>invoice</strong> is a definite request for a specific amount, issued once work is delivered or a milestone is met.</p>
<p>Clients often use "estimate", "quote", and "proposal" interchangeably in conversation. On paper, keep the labels precise. If you mean a firm price, send a quotation. If you mean a projection, send an estimate. If you mean "please pay this", send an invoice. See also <a href="/blog/invoice-vs-quotation">invoice vs quotation</a>.</p>

<h2>When an estimate is the right call</h2>
<ul>
<li>Scope is not fully defined yet — discovery is incomplete.</li>
<li>Costs depend on site conditions, third-party pricing, or actual hours worked.</li>
<li>The client is comparing suppliers and needs a ballpark quickly.</li>
<li>Materials prices are volatile and you cannot lock a supplier quote yet.</li>
</ul>
<p>Estimates help you win conversations without locking yourself into an underpriced fixed fee. They also help clients budget before they ask for a formal quote.</p>

<h2>When you should skip the estimate</h2>
<p>If the scope is clear, materials are locked, and the client wants a price they can accept as a contract, send a quotation instead. Repeatedly sending "estimates" that you treat as fixed prices trains clients to expect immovable totals while you still absorb overruns.</p>
<p>For simple retail or catalogue sales with published prices, you may go straight to order confirmation and invoice without an estimate at all.</p>

<h2>Protecting yourself on estimates</h2>
<p>Always include three protective elements:</p>
<ol>
<li><strong>Validity period</strong> — for example, "Valid for 30 days from the date above."</li>
<li><strong>Assumptions list</strong> — what you assumed about access, materials, round trips, revisions, or third-party licences.</li>
<li><strong>Variation rule</strong> — how extras will be priced ("additional hours at £X; materials at cost + 15%").</li>
</ol>
<p>Without those lines, many clients treat estimates as fixed prices and argue when the final invoice is higher. State clearly that the estimate is not an invoice and does not request payment.</p>

<h2>Converting an estimate into an invoice</h2>
<p>When the job is done (or a billable milestone is reached):</p>
<ol>
<li>Keep the same line-item structure so the client can compare estimate and invoice side by side.</li>
<li>Add a unique invoice number, issue date, and due date.</li>
<li>Replace projected quantities with actuals where they differ.</li>
<li>Show variations as their own clearly labelled lines — never as a silent increase to an existing line.</li>
<li>Reference the estimate number in the notes: "Based on estimate EST-2026-012, approved 3 March 2026."</li>
</ol>
<p>If the final total is within the stated variance, say so. If it exceeds the variance, attach or cite the written approval for the change before you send the invoice.</p>

<h2>Deposits and progress billing</h2>
<p>You can invoice a deposit against an accepted estimate or quote before work starts. Label it clearly as a deposit invoice and state how it will be applied to the final bill. Progress invoices should name the milestone and the percentage of contract value they represent.</p>
<p>Never send a document labelled "estimate" that includes bank details and a due date as if payment were already owed — that confuses filing systems and clients alike.</p>

<h2>Communication tips</h2>
<ul>
<li>In email, say "I've attached an estimate (not an invoice)" when that distinction matters.</li>
<li>Ask the client to confirm assumptions in writing before you schedule the work.</li>
<li>Update the estimate if scope changes mid-discussion — do not silently carry an outdated PDF forward.</li>
</ul>


<h2>Language that keeps estimates from becoming fake quotes</h2>
<p>Write "This is an estimate, not a fixed quotation" near the total. Add that the final invoice may vary based on actual hours and approved extras. Those sentences feel cautious, but they prevent angry threads when reality diverges from the first sketch of scope.</p>
<p>If a client says they need something so finance can reserve budget, an estimate is perfect. If they need a price they can raise a purchase order against, escalate to a quotation with firm scope. Matching document type to the buyer's internal process is part of getting paid later without drama.</p>
<h2>Range estimates and capped estimates</h2>
<p>A range communicates uncertainty honestly. A capped estimate that will not be exceeded without written approval protects the client while giving you a stop point for conversation. Either approach beats a single fake-precise number you cannot defend when conditions change.</p>
<p>When you invoice inside a cap, show actuals and remaining headroom. When you need to exceed a cap, pause and get approval before continuing — then invoice the approved overrun as a clearly labelled variation line rather than quietly inflating an existing one.</p>
<h2>Estimates in competitive bids</h2>
<p>Buyers comparing suppliers often ask for estimates first. Keep formatting comparable: same categories of cost, clear exclusions, and validity dates. After you win, convert promptly to a quotation or order confirmation so the working relationship rests on a firm baseline rather than an informal message thread that nobody can find later.</p>
<p>Archive every estimate you send with its version date. Mid-negotiation edits are normal; showing an outdated PDF as if it were current is how distrust starts before work even begins.</p>
<h2>Related reading and next steps</h2>
<p>For the payment request itself, follow <a href="/blog/how-to-create-an-invoice">how to create an invoice</a>. For freelancers who live on estimates-then-invoices, see the <a href="/blog/freelancer-invoice-guide">freelancer's invoice guide</a>.</p>
<p>When the job is done, produce the final document with our <a href="/invoice-generator">invoice generator</a> and a clean layout such as <a href="/invoice-templates/modern">Modern</a> or <a href="/invoice-templates/classic">Classic</a>.</p>
`,
  },
  {
    slug: "invoice-vs-quotation",
    title: "Invoice vs Quotation: The Difference Explained",
    description:
      "A quotation is a fixed-price offer; an invoice is a request for payment. Understand the legal and practical differences before you send either.",
    category: "comparisons",
    date: "2026-07-01",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    content: `
<h2>A quotation is an offer</h2>
<p>Unlike an estimate, a quotation is a firm price for a defined scope. Once the client accepts it in writing, most legal systems treat that acceptance as forming (or confirming) a contract. You generally cannot raise the price later without agreement. That precision is exactly why quotations must be written carefully: vague scope plus a firm number is how disputes start.</p>
<p>An estimate says "we think it will cost about this." A quotation says "we will do this for this price." An invoice says "please pay this amount for what was supplied."</p>

<h2>An invoice is a demand for payment</h2>
<p>The invoice comes after acceptance and delivery (or at an agreed milestone). It should mirror the accepted quotation line for line wherever possible. If the totals differ, explain why on the invoice itself and reference an approved change request or variation order. Silent increases destroy trust and slow approval.</p>
<p>Invoices carry due dates and payment instructions. Quotations carry validity periods and acceptance blocks. Do not merge the two into one ambiguous PDF.</p>

<h2>Quotation checklist</h2>
<ul>
<li>Quotation number and date</li>
<li>Your legal business details and the client's legal details</li>
<li>Detailed scope of work and explicit exclusions</li>
<li>Fixed price with tax treatment stated (inclusive vs exclusive)</li>
<li>Validity period (for example, 14 or 30 days)</li>
<li>Payment schedule (deposit, milestones, balance)</li>
<li>Assumptions and dependencies (client assets, access, third-party costs)</li>
<li>Acceptance signature or written acceptance instruction</li>
</ul>
<p>Exclusions matter as much as inclusions. If hosting, stock photography, travel, or print are not included, say so. Clients fill silence with optimistic assumptions.</p>

<h2>Estimate vs quotation vs invoice</h2>
<table><thead><tr><th>Document</th><th>Price nature</th><th>Typical timing</th><th>Asks for money?</th></tr></thead><tbody>
<tr><td>Estimate</td><td>Projection / range</td><td>Early scoping</td><td>No</td></tr>
<tr><td>Quotation</td><td>Firm offer</td><td>Before work starts</td><td>No (until accepted and invoiced)</td></tr>
<tr><td>Invoice</td><td>Amount due</td><td>After supply / milestone</td><td>Yes</td></tr>
</tbody></table>
<p>For the estimate distinction in more depth, read <a href="/blog/invoice-vs-estimate">invoice vs estimate</a>.</p>

<h2>Practical workflow</h2>
<ol>
<li><strong>Quotation</strong> — send a firm, numbered offer with a validity window.</li>
<li><strong>Written acceptance</strong> — email confirmation or signed acceptance block.</li>
<li><strong>Deposit invoice</strong> — if your terms require one before work begins.</li>
<li><strong>Work</strong> — deliver against the accepted scope.</li>
<li><strong>Final (or milestone) invoice</strong> — mirror the quote; list variations separately.</li>
<li><strong>Receipt</strong> — confirm payment when funds clear.</li>
</ol>
<p>Skipping the acceptance step is the single most common cause of scope disputes. A verbal "sounds good" is not enough when money and deadlines are involved. Ask for a short written "We accept quotation Q-2026-018" reply.</p>

<h2>Handling changes after acceptance</h2>
<p>When the client asks for extras, issue a short written variation (or updated quotation for the delta) and get acceptance again before doing the work. Then invoice the variation as its own line: "Variation V-03 — additional landing page — as approved 12 May 2026."</p>
<p>Do not absorb unlimited "small tweaks" without a process. Small tweaks accumulate into unpaid days. Your quotation's revision limit (for example, "two rounds of revisions included") should be visible and enforced politely.</p>

<h2>Payment schedules on quotations</h2>
<p>Spell out deposits and milestones on the quotation so nobody is surprised when invoices arrive. Example: "40% deposit on acceptance, 40% on design approval, 20% on launch." Each tranche then gets its own invoice with a clear label.</p>
<p>For freelancers, deposits also filter unserious enquiries. The <a href="/blog/freelancer-invoice-guide">freelancer's invoice guide</a> covers deposit and chase tactics in more detail.</p>


<h2>Legal flavour without the lawyer voice</h2>
<p>You do not need theatrical contract language on a quotation, but you do need identifiable parties, a description of what is included, a price, a validity window, and a way to accept. Those elements are what turn a PDF into something a mediator can recognise as an offer that was accepted. Keep tone human; keep structure complete.</p>
<p>If your work involves intellectual property assignment, confidentiality, or limitation of liability, point to a master services agreement rather than cramming a novel into the quotation footer. The quotation should stay readable for the person who signs it.</p>
<h2>Unit-price quotations vs lump sums</h2>
<p>Unit-price quotes such as rate cards, per-page, or per-seat pricing scale with quantity and need a stated estimate of units plus the rule for true-ups. Lump-sum quotes need crisp scope boundaries. Mixing both without labelling which lines are fixed and which are variable is a classic dispute pattern that surfaces only at invoice time.</p>
<p>When you invoice a unit-price job, show actual quantities. When you invoice a lump sum, show the deliverable names from the quote. Familiarity between the two documents speeds approval inside the client's organisation.</p>
<h2>Multi-currency quotations</h2>
<p>If you quote in one currency and might invoice in another, say how foreign exchange will be handled. Prefer quoting and invoicing in the same currency whenever possible. Mid-project currency switches create unreadable variance between quote and invoice totals even when both parties acted in good faith.</p>
<p>State whether prices are tax-inclusive or tax-exclusive on the quotation so the first invoice does not surprise anyone. Surprises at billing time are rarely forgiven quickly.</p>

<h2>When a quotation should expire</h2>
<p>Material prices, exchange rates, and your own utilisation change. A 14- or 30-day validity window is not unfriendly — it is honest. When a client accepts after expiry, re-issue or confirm the old price in writing before you schedule work. Honouring expired quotes silently trains late decisions and eats margin.</p>
<p>Put the expiry date near the total where it will be seen, not only in fine print at the bottom of page two.</p>
<h2>Create the documents cleanly</h2>
<p>Keep quotation and invoice numbering in separate series if that helps your filing (Q-2026-018 vs INV-2026-0041), and cross-reference them in notes. When it is time to request payment, build the invoice in the <a href="/invoice-generator">free invoice generator</a> using a layout such as <a href="/invoice-templates/corporate">Corporate</a> for formal buyers or <a href="/invoice-templates/elegant">Elegant</a> for premium services.</p>
`,
  },
  {
    slug: "best-invoice-templates",
    title: "The 10 Best Invoice Templates and When to Use Each",
    description:
      "A practical tour of ten invoice layouts — Modern, Minimal, Corporate, Elegant and more — with guidance on which fits your business.",
    category: "design-templates",
    date: "2026-06-24",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    content: `
<h2>Why the template matters</h2>
<p>An invoice is often the last document a client reads before deciding how quickly to pay you. Clarity beats decoration: the amount due, the due date, and the payment method should be findable in under three seconds. A good template is a information hierarchy problem solved once, then reused on every job.</p>
<p>Brand personality still matters — especially for agencies and creatives — but never at the expense of scannability. Accounts payable staff process dozens of PDFs a day. They reward documents that look familiar and complete.</p>

<h2>What every strong template shares</h2>
<ul>
<li>Clear "Invoice" label and prominent invoice number</li>
<li>Seller and buyer blocks that are easy to parse</li>
<li>A readable item table with aligned numeric columns</li>
<li>Totals that stand out without shouting</li>
<li>A dedicated payment-instructions area</li>
<li>Enough whitespace to print cleanly in greyscale</li>
</ul>
<p>If a layout fails any of those tests, it is art, not an invoice. For design principles beyond templates, see <a href="/blog/professional-invoice-design-tips">professional invoice design tips</a>.</p>

<h2>The ten layouts</h2>
<ol>
<li><strong><a href="/invoice-templates/modern">Modern</a></strong> — Clean header, balanced type, flexible for most industries. The safe default when you are unsure.</li>
<li><strong><a href="/invoice-templates/minimal">Minimal</a></strong> — Typography-led with little ornament. Ideal for solo creatives, writers, and consultants who want quiet professionalism.</li>
<li><strong><a href="/invoice-templates/corporate">Corporate</a></strong> — Dense reference fields (PO, project, tax IDs) that AP teams expect. Best for enterprise and government-adjacent work.</li>
<li><strong><a href="/invoice-templates/elegant">Elegant</a></strong> — Serif headings and restrained spacing for premium services: legal-adjacent consulting, interior design, high-end photography.</li>
<li><strong><a href="/invoice-templates/blue">Blue</a></strong> — Familiar colour cue associated with trust and finance. Works well for general small business and consumer-facing services.</li>
<li><strong><a href="/invoice-templates/dark">Dark</a></strong> — High-contrast header that stands out in a crowded inbox preview and as a PDF thumbnail. Use when brand guidelines already favour dark UI.</li>
<li><strong><a href="/invoice-templates/startup">Startup</a></strong> — Brand-forward and friendly without losing structure. Suits SaaS services, retainers, and productised freelance offers.</li>
<li><strong><a href="/invoice-templates/agency">Agency</a></strong> — Side rail and strong sectioning keep long multi-line item lists readable across multi-page invoices.</li>
<li><strong><a href="/invoice-templates/creative">Creative</a></strong> — Oversized total and colour-blocked header. Good for design studios billing other creatives who appreciate visual confidence.</li>
<li><strong><a href="/invoice-templates/classic">Classic</a></strong> — Traditional ruled bookkeeping feel. Comfortable for trades, local services, and clients who still print everything.</li>
</ol>

<h2>Choosing quickly by client type</h2>
<table><thead><tr><th>You mostly bill…</th><th>Start with</th></tr></thead><tbody>
<tr><td>Enterprises / formal AP teams</td><td>Corporate</td></tr>
<tr><td>Other creatives / studios</td><td>Minimal or Creative</td></tr>
<tr><td>Consumers / local clients</td><td>Blue or Classic</td></tr>
<tr><td>Premium service buyers</td><td>Elegant</td></tr>
<tr><td>Startups / retainers</td><td>Startup or Modern</td></tr>
<tr><td>Long item lists / retainers + extras</td><td>Agency</td></tr>
<tr><td>Everything else</td><td>Modern</td></tr>
</tbody></table>

<h2>Matching template to content density</h2>
<p>Short freelance invoices (three to five lines) look best on Minimal, Elegant, or Creative — sparse layouts that celebrate whitespace. Product invoices with SKUs, shipping, and tax columns need Corporate, Agency, or Classic so columns stay aligned. International invoices with IBAN/SWIFT notes benefit from Corporate or Modern, where the notes block is easy to find.</p>
<p>If you regularly mix invoice types, pick one primary template for brand consistency and only switch when the buyer's process demands it. Consistency helps clients recognise your PDFs instantly.</p>

<h2>Practical setup tips</h2>
<ul>
<li>Save your business profile once so every template starts complete.</li>
<li>Test a sample PDF printed in greyscale before you commit to a dark or colourful header.</li>
<li>Keep logos small; the amount due is the hero, not the mark.</li>
<li>Put payment details in the same region of the page on every invoice you send.</li>
</ul>


<h2>Accessibility and print behaviour</h2>
<p>Design for greyscale laser printers and for people who magnify PDFs. Low-contrast grey body text fails both groups. Aim for strong contrast on critical data: totals, due dates, and bank details. If you use a dark header, keep the body on white with dark text so printing does not devour toner or hide numbers.</p>
<p>Avoid placing essential payment digits in decorative sidebars that disappear when a client prints "content only" or when an accessibility tool linearises the page oddly. Payment blocks belong in the main flow.</p>
<h2>Multi-page invoices</h2>
<p>Long agency invoices and wholesale goods lists often spill onto a second page. Repeat the invoice number and client name in the header of continued pages. Keep the grand total on the final page with a short reminder of how to pay. Splitting a totals table across pages is a common way to confuse busy approvers.</p>
<p>The <a href="/invoice-templates/agency">Agency</a> layout is built with longer lists in mind; <a href="/invoice-templates/corporate">Corporate</a> keeps reference fields visible when AP needs them on page one.</p>
<h2>Brand consistency across the client journey</h2>
<p>Your quotation, invoice, and receipt do not need identical decoration, but seller details, accent colour, and logo treatment should feel like one organisation. Clients notice when invoice PDFs look like they came from a different company than the proposal they approved.</p>
<p>Save one primary template as your default and only switch when a buyer's process demands denser fields. Consistency also makes your own filing easier because every PDF shares a familiar visual map.</p>

<h2>Testing before you standardise</h2>
<p>Before locking a company-wide default, send yourself three sample PDFs: a short three-line invoice, a two-page item list, and an international invoice with long bank details. Open each on desktop and phone, then print one page. Any template that fails one of those tests should not become your default, however attractive it looks empty.</p>
<p>Also ask one client whether their AP system prefers colour or can only archive greyscale cleanly. Buyer constraints beat personal taste.</p>
<h2>Preview and create</h2>
<p>Preview every layout instantly inside the <a href="/invoice-generator">invoice generator</a>, then download a PDF when the fields are complete. For scenario-based line items to drop into these layouts, see <a href="/blog/invoice-examples">invoice examples</a>. For small-business process around templates — numbering, batching, reminders — read the <a href="/blog/small-business-invoice-guide">small business invoicing guide</a>.</p>
`,
  },
  {
    slug: "invoice-examples",
    title: "Invoice Examples: 6 Real-World Scenarios Broken Down",
    description:
      "See how freelance, agency, product, hourly, milestone and international invoices differ — with the exact lines and notes to use.",
    category: "guides",
    date: "2026-06-17",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    content: `
<h2>How to use these examples</h2>
<p>Each scenario below shows the line-item pattern, the notes that prevent disputes, and the terms that usually fit. Copy the structure, not the dollar amounts. Always match the legal names and tax treatment that apply to your contract.</p>
<p>Build any of these in the <a href="/invoice-generator">free invoice generator</a> by switching template and currency. For layout choice, see <a href="/blog/best-invoice-templates">best invoice templates</a>.</p>

<h2>1. Freelance project invoice</h2>
<p><strong>Pattern:</strong> one line per deliverable, fixed fee, Net 14 terms. Reference the accepted proposal or quotation number in the notes.</p>
<ul>
<li>Line: "Brand identity package — logo, colour system, basic guidelines"</li>
<li>Line: "Social template set — 8 editable posts"</li>
<li>Notes: "Per quotation Q-2026-014 accepted 2 June 2026. Includes two revision rounds."</li>
<li>Terms: Net 14; deposit already paid shown as a credit line if applicable</li>
</ul>
<p>Keep descriptions specific enough that a manager who never met you can approve the bill. Vague "design services" lines invite clarification emails and delay.</p>

<h2>2. Hourly invoice</h2>
<p><strong>Pattern:</strong> quantity = hours, unit price = rate. Summarise the period and tasks; attach or embed a timesheet when the client asks.</p>
<ul>
<li>Line: "Consulting — week of 4–8 Aug 2026 (strategy calls + research)" — 6.5 hours × rate</li>
<li>Line: "Implementation support — 11–12 Aug 2026" — 3 hours × rate</li>
<li>Notes: "Timesheet available on request. Rounded to nearest 0.25 hour."</li>
</ul>
<p>Clients dispute hours far less when dates and task themes are visible. If you have a weekly cap in the contract, mention remaining hours in the notes.</p>

<h2>3. Agency retainer invoice</h2>
<p><strong>Pattern:</strong> a single retainer line for the month, plus separate lines for out-of-scope work. Show the retainer period explicitly.</p>
<ul>
<li>Line: "Retainer — August 2026 — content + light design (up to 20 hours)"</li>
<li>Line: "Out of scope — landing page illustration pack (approved 19 Aug)"</li>
<li>Notes: "Unused retainer hours do not roll over unless stated in MSA section 4."</li>
</ul>
<p>Separating out-of-scope work prevents the retainer from becoming an unlimited bucket. Use a structured layout such as <a href="/invoice-templates/agency">Agency</a> when lists get long.</p>

<h2>4. Product / goods invoice</h2>
<p><strong>Pattern:</strong> SKU, quantity, unit price, shipping, and tax. Add the delivery address if it differs from billing.</p>
<ul>
<li>Line: "SKU-4412 — Ceramic planter (large) — qty 12"</li>
<li>Line: "SKU-4418 — Ceramic planter (small) — qty 24"</li>
<li>Line: "Shipping — tracked freight to warehouse B"</li>
<li>Tax line(s) as required by your registration</li>
</ul>
<p>Warehouse and wholesale buyers reconcile by SKU. Omitting codes is a common reason goods invoices bounce. For tax presentation, see the <a href="/blog/tax-invoice-guide">tax invoice guide</a>.</p>

<h2>5. Milestone invoice</h2>
<p><strong>Pattern:</strong> name the phase, the percentage of contract value, and what remains so the client can forecast cash.</p>
<ul>
<li>Line: "Phase 2 of 3 — development complete — 40% of contract value (£8,000)"</li>
<li>Notes: "Phase 1 invoice INV-2026-0033 paid. Phase 3 (final 20%) due on launch acceptance."</li>
</ul>
<p>Milestone invoices work best when the underlying quotation already defined the schedule. Cross-reference that quote number every time.</p>

<h2>6. International invoice</h2>
<p><strong>Pattern:</strong> state currency in the totals, add IBAN/SWIFT (or local equivalent), note who pays the transfer fee, and include reverse-charge wording where applicable.</p>
<ul>
<li>Currency: clearly "USD" or "EUR" beside every total</li>
<li>Bank block: account name, IBAN, BIC/SWIFT, bank address</li>
<li>Notes: "Client bears intermediary bank fees. Reverse charge — customer to account for VAT." (only when true)</li>
</ul>
<p>Wrong fee assumptions ("I thought you'd receive the full amount") create awkward balance chases. Spell fee responsibility out once on the invoice. VAT/GST cross-border rules differ — confirm with your accountant and skim our <a href="/blog/vat-invoice-guide">VAT</a> and <a href="/blog/gst-invoice-guide">GST</a> guides.</p>


<h2>Hybrid example: fixed fee plus expenses</h2>
<p>Many real projects mix a fixed creative fee with pass-through expenses. Keep them visually separate: fee lines first, then an expenses subheading with receipts available on request. Mark up policy should already live in the quotation — restate it briefly in the invoice notes so AP is not guessing.</p>
<p>Example lines might include a project fee, then travel, stock licences, and courier costs as individual expense lines. Totals should show fees subtotal, expenses subtotal, tax treatment per local rules, and amount due. Bundling expenses into the fee after the fact is a trust problem waiting to happen.</p>
<h2>Subscription and seat-based billing</h2>
<p>For software-style or membership billing, name the plan, seat count, and period. If seats changed mid-cycle, show the proration math in plain language. Clients accept proration when they can see it; they dispute it when it appears as a mysterious delta.</p>
<p>Include the renewal date in notes if the invoice is also the reminder that the next cycle is coming. That reduces surprise cancellations and support tickets.</p>
<h2>What good examples share</h2>
<p>Across all six scenarios, the winning pattern is the same: specific descriptions, explicit periods, cross-references to quotes or POs, and payment instructions on the PDF. Templates change the clothes; those habits are the body. Pair any example with the send discipline in <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> so a perfect PDF does not die in the wrong inbox.</p>

<h2>Nonprofit and grant-style billing</h2>
<p>When billing a grant office or nonprofit, reference the grant or cost centre code as diligently as a PO. Break labour and materials the way their budget categories are written, even if your internal jobs are organised differently. Mapping to their categories on the invoice prevents recoding delays that stall payment for weeks.</p>
<p>Attach or offer timesheets when labour is cost-reimbursable. Anticipate their audit pack rather than reacting to it.</p>
<h2>Checklist before you send any example</h2>
<ol>
<li>Legal buyer name matches the contract</li>
<li>PO / reference included if required</li>
<li>Lines sum to the total</li>
<li>Due date is a calendar date</li>
<li>Payment instructions are on the PDF</li>
<li>File named <code>Invoice-NUMBER-Client.pdf</code></li>
</ol>
<p>For sending and reminder templates, continue with <a href="/blog/how-to-send-an-invoice">how to send an invoice</a>.</p>
`,
  },
  {
    slug: "freelancer-invoice-guide",
    title: "The Freelancer's Invoice Guide: Get Paid Faster",
    description:
      "Rates, terms, deposits, late fees and follow-ups — a complete invoicing playbook for freelancers and independent contractors.",
    category: "guides",
    date: "2026-06-10",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    content: `
<h2>Set terms before you start</h2>
<p>Agree payment terms in writing at proposal stage: deposit percentage, payment schedule, accepted methods, and late-payment interest. An invoice cannot enforce terms the client never saw. Put the same terms on the quotation and repeat the due date on every invoice.</p>
<p>If you only discuss rates verbally, you will eventually invoice someone who "remembered" a different number. Written scope plus written price is your first payment-protection tool.</p>

<h2>Price for payment reality, not optimism</h2>
<p>Build your rate assuming some invoices will land late. That does not mean padding dishonestly — it means knowing your floor, your target, and when a project is not worth the cash-flow risk. Prefer clients who accept deposits and Net 14 over those who insist on Net 60 with no PO process.</p>
<p>For fixed-fee work, break large jobs into milestones so you are never financing two months of unpaid labour. Examples of milestone lines appear in <a href="/blog/invoice-examples">invoice examples</a>.</p>

<h2>Ask for a deposit</h2>
<p>A 30–50% deposit filters out clients who were never going to pay and covers your opportunity cost. Invoice the deposit as its own document with a clear label ("Deposit invoice — 40% of Q-2026-021"). Do not start substantial work until it clears, unless you have a long trusted relationship.</p>
<p>Deposits also force early confirmation of billing details — legal entity, PO needs, and tax IDs — before you are emotionally invested in the project.</p>

<h2>Invoice immediately</h2>
<p>Send the invoice the day the work is delivered or the milestone is signed off. Every week you delay pushes payment out by at least the same amount, because you slot into a later approval cycle. Month-end batching feels organised; it is often expensive.</p>
<p>Use a consistent template from the <a href="/invoice-generator">invoice generator</a> so you are not redesigning PDFs when you should be sending them. <a href="/invoice-templates/minimal">Minimal</a> and <a href="/invoice-templates/modern">Modern</a> work well for most freelancers.</p>

<h2>Make paying effortless</h2>
<ul>
<li>Bank details on the invoice, not only in a separate email</li>
<li>At least two payment methods when you can (transfer + card link)</li>
<li>Invoice number in the email subject and the file name</li>
<li>PO number on the PDF if the client requires one</li>
<li>Calendar due date, not only "Net 14"</li>
</ul>
<p>Friction is the enemy. If a client must ask you for IBAN, account name, or a resend in a different format, you have added days to the cycle.</p>

<h2>Chase politely and predictably</h2>
<p>Decide your cadence in advance so chasing does not feel personal or awkward:</p>
<ol>
<li><strong>Day 1 after due date:</strong> friendly reminder with PDF attached</li>
<li><strong>Day 7:</strong> second reminder; ask if anything is blocking approval</li>
<li><strong>Day 14:</strong> firm note referencing late-payment terms; request a specific payment date</li>
<li><strong>Day 30:</strong> pause ongoing work; escalate to the economic buyer if you have only spoken to a project manager</li>
</ol>
<p>Copy-ready wording lives in <a href="/blog/how-to-send-an-invoice">how to send an invoice</a>. Stay factual and brief. Emotion rarely speeds payment; clarity does.</p>

<h2>Late fees and pausing work</h2>
<p>Late interest only helps if it was in the contract the client accepted. Mention it on the invoice footer as a reminder, not a surprise. Pausing work on overdue accounts is often more effective than fees — especially for retainers — but announce the pause in writing with a clear reactivation condition ("work resumes when INV-2026-0041 is paid").</p>

<h2>Track everything in one place</h2>
<p>Keep a simple sheet (or accounting tool) with: invoice number, client, amount, currency, date sent, date due, date paid, and status. That single list is your cash-flow forecast. Review it weekly. Unchased invoices are paid last.</p>
<p>Store PDFs by year and client. When a payment lands, match it to an invoice number the same day so you never chase someone who already paid — a fast way to damage a relationship.</p>

<h2>Tax and admin without the spiral</h2>
<p>Separate money you owe in tax from money you can spend. If you charge VAT/GST, learn the mandatory fields before your first taxed invoice — start with the <a href="/blog/tax-invoice-guide">tax invoice guide</a>. Keep personal and business accounts separate so reconciliation stays sane.</p>


<h2>Scope creep and how invoicing reveals it</h2>
<p>If you repeatedly write long notes explaining extras that were never quoted, your scoping process is broken. Use invoices as a mirror: variation lines should be occasional, not the majority of every bill. When extras dominate, pause new work until the quotation is updated and accepted.</p>
<p>Train clients gently. A short "happy to add this as a variation at £X — confirm and I will proceed" message protects both sides. Invoicing surprise extras after silent overwork trains clients to expect free labour.</p>
<h2>Retainers that actually pay on time</h2>
<p>Bill retainers in advance when your market allows it, with the period named clearly. Send the invoice several business days before the period starts so AP can schedule payment. End-of-month retainer invoices for work already done turn you into an involuntary lender.</p>
<p>Define unused-hour policy in the agreement and restate it annually. Roll-over ambiguity is one of the most common retainer disputes and it often surfaces only when someone cancels.</p>
<h2>Tools without complexity addiction</h2>
<p>You need a PDF generator, a way to track sent versus paid, and a calendar for reminders. You do not need five overlapping apps. Start with the <a href="/invoice-generator">invoice generator</a> and a simple spreadsheet; graduate to accounting software when volume or tax complexity demands it. Complexity that delays sending invoices is working against you.</p>
<h2>Common freelancer payment killers</h2>
<ul>
<li>Starting without a deposit on a new client</li>
<li>Vague line items that trigger clarification loops</li>
<li>Billing the wrong legal entity after a startup rebrand</li>
<li>No follow-up system after the due date</li>
</ul>
<p>More failure modes are listed in <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>. Fix the process once; every future invoice gets faster.</p>
`,
  },
  {
    slug: "small-business-invoice-guide",
    title: "Small Business Invoicing Guide: Process, Terms and Cash Flow",
    description:
      "Build a repeatable invoicing process for your small business: numbering, approvals, terms, reminders and reconciliation.",
    category: "guides",
    date: "2026-06-03",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    content: `
<h2>Design the process, not just the document</h2>
<p>Most small businesses have a template but no process. Decide who raises invoices, when they go out, who chases overdue balances, and where PDFs are stored. A mediocre template with a reliable weekly rhythm outperforms a beautiful PDF sent whenever someone remembers.</p>
<p>Write the process down in half a page: triggers (delivery, month-end retainer, milestone sign-off), owner, checklist, and reminder schedule. New staff should be able to invoice correctly on day three.</p>

<h2>Numbering and records</h2>
<p>Use a year-prefixed sequential number (<code>2026-0001</code>, <code>2026-0002</code>…) and never reuse one. If you void an invoice, keep the number in a void log. Store a PDF of every invoice in a single folder structure by year and client — alongside credit notes and receipts.</p>
<p>Cloud accounting tools help, but still export or save the PDFs you actually sent. Those are the artefacts clients and auditors recognise. For field basics, see <a href="/blog/what-is-an-invoice">what is an invoice</a>.</p>

<h2>Choosing payment terms</h2>
<table><thead><tr><th>Terms</th><th>Meaning</th><th>Best for</th></tr></thead><tbody>
<tr><td>Due on receipt</td><td>Pay immediately</td><td>New or one-off clients</td></tr>
<tr><td>Net 14</td><td>Within 14 days</td><td>Small businesses, freelancers, local B2B</td></tr>
<tr><td>Net 30</td><td>Within 30 days</td><td>Corporate clients with formal AP cycles</td></tr>
<tr><td>2/10 Net 30</td><td>2% discount if paid in 10 days</td><td>Encouraging early payment on larger bills</td></tr>
</tbody></table>
<p>Publish default terms on proposals and contracts. Offering Net 30 to every new micro-client because "that's what corporations do" quietly damages your cash position. Match terms to buyer size and trust level.</p>

<h2>Batching vs invoicing on delivery</h2>
<p>Weekly batching (for example, every Friday) reduces context-switching if you issue many small invoices. Invoicing on delivery is better for large one-offs and anything with a tight cash need. Hybrid approaches work: retainers on a fixed monthly date, project work on delivery.</p>
<p>What fails is "we'll invoice whenever we have time." That habit creates silent receivables you discover only when rent is due.</p>

<h2>Approvals and internal controls</h2>
<p>Even in a five-person company, separate creation from approval when amounts are material. A second pair of eyes catches wrong rates, missing POs, and transposed bank details — errors that are expensive after the email is sent.</p>
<p>Maintain a short pre-send checklist: legal entity, PO, maths, tax, due date, payment block, filename. Many items overlap with <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>.</p>

<h2>Reminders without awkwardness</h2>
<p>Automate or diary a standard cadence: polite note the day after due, firmer note at seven days, escalation at fourteen. Always re-attach the PDF. Ask for a specific payment date rather than "any update?". Full email patterns are in <a href="/blog/how-to-send-an-invoice">how to send an invoice</a>.</p>
<p>Assign an owner for chasing. When "everyone" owns receivables, nobody does.</p>

<h2>Reconciliation</h2>
<p>Match every incoming payment to an invoice number at least weekly. Unmatched payments are how businesses accidentally chase clients who already paid — and how duplicates slip through. Record partial payments explicitly against the open balance.</p>
<p>If you take card payments or payment links, reconcile fees so your books show net cash accurately.</p>

<h2>Cash-flow tips that actually move the needle</h2>
<ul>
<li>Invoice on delivery for project work, not only at month end</li>
<li>Split large projects into deposits and milestones</li>
<li>Charge late interest only if it was contracted — and mention it before you need it</li>
<li>Offer a small early-payment discount when accelerating cash matters more than margin</li>
<li>Review the aged-receivables list every Monday</li>
</ul>

<h2>Templates and consistency</h2>
<p>Pick one primary layout for brand recognition — <a href="/invoice-templates/corporate">Corporate</a> for formal B2B, <a href="/invoice-templates/blue">Blue</a> or <a href="/invoice-templates/classic">Classic</a> for general small business — and keep seller details identical across every PDF. Generate documents with the <a href="/invoice-generator">free invoice generator</a> so totals and structure stay consistent when different people send invoices.</p>
<p>For tax-registered businesses, standardise how tax lines appear and train staff using the <a href="/blog/tax-invoice-guide">tax invoice guide</a>. Inconsistency here causes reclaim problems for your customers and support tickets for you.</p>


<h2>Roles as you grow past one founder</h2>
<p>When a second person starts invoicing, ambiguity explodes. Define who may edit bank details, who approves write-offs, and who sends reminder three. Put bank-detail changes behind a dual check — invoice fraud via altered PDFs is rare but devastating, and simple process beats expensive tools here.</p>
<p>Give each role access to the same template and client profiles so invoices do not drift into personal formatting experiments. Brand and field consistency are internal controls, not vanity.</p>
<h2>Handling partial payments and payment plans</h2>
<p>Partial payments should update the open balance on your tracker the same day. Send a brief acknowledgment stating amount received, invoice referenced, and amount remaining. If you agree a payment plan, confirm dates in writing and invoice or schedule reminders accordingly — verbal plans evaporate.</p>
<p>Do not keep sending full-balance reminders after a partial lands without acknowledging it; that single mistake creates unnecessary conflict with clients who believe they are cooperating.</p>
<h2>Metrics worth glancing at monthly</h2>
<p>Watch average days sales outstanding, percentage of invoices paid after reminder one, and the count of invoices waiting on missing POs. Those three numbers tell you whether the problem is terms, chasing, or intake quality. Fix the largest bucket first rather than buying new software as a substitute for process.</p>

<h2>Seasonality and cash buffers</h2>
<p>If your sales peak in one season, tighten terms before the quiet months and chase harder while cash is still incoming. Waiting until the quiet month to discover slow payers is a common small-business trap. Build a simple cash buffer target equal to a few weeks of fixed costs and watch receivables as closely as sales.</p>
<h2>Grow the system deliberately</h2>
<p>As volume rises, add: saved client profiles, recurring retainer drafts, and a shared tracker with statuses (draft, sent, overdue, paid). Do not wait for a crisis month to invent the process. The goal is boring reliability — invoices that leave on time, look the same, and get followed up without drama.</p>
`,
  },
  {
    slug: "how-to-send-an-invoice",
    title: "How to Send an Invoice (Email Templates Included)",
    description:
      "The right file format, subject line, recipient and follow-up cadence for invoices that actually get processed by accounts payable.",
    category: "guides",
    date: "2026-05-27",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    content: `
<h2>Send a PDF, always</h2>
<p>PDFs render identically on every device and cannot be edited accidentally. Never send a spreadsheet or word-processor file as your invoice of record. Those formats break layouts, invite accidental edits, and sometimes get blocked by corporate email filters.</p>
<p>Create the PDF from a proper template first — the <a href="/invoice-generator">invoice generator</a> exports a clean file you can attach immediately.</p>

<h2>Name the file properly</h2>
<p>Use a pattern like <code>Invoice-2026-0041-AcmeLtd.pdf</code>. Accounts-payable teams handle hundreds of files a week; a descriptive name gets yours filed instead of lost in a pile of <code>invoice(3).pdf</code> downloads. Include the client name as they know themselves, not your internal nickname for them.</p>

<h2>Send it to the right person</h2>
<p>Ask for the accounts-payable address at kickoff — not after the work is done. CC your day-to-day contact so they can approve internally. If the client uses a portal, follow their portal rules and still keep a PDF copy for your records.</p>
<p>Wrong inbox is one of the top reasons "we never got it" appears three weeks late. Confirm receipt with a one-line ask if the invoice is large: "Please confirm it landed with AP."</p>

<h2>Subject lines that get opened and filed</h2>
<p>Put the invoice number, client name, and due date in the subject. Avoid cute marketing language. Examples:</p>
<ul>
<li><code>Invoice 2026-0041 — Acme Ltd — due 14 Aug 2026</code></li>
<li><code>Invoice 2026-0041 — £2,400 — PO 77821</code></li>
</ul>
<p>When chasing, keep the same number visible: <code>Reminder — invoice 2026-0041 due today</code>.</p>

<h2>Email template — first send</h2>
<p><em>Subject: Invoice 2026-0041 — Acme Ltd — due 14 Aug 2026</em></p>
<p>Hi Sam,</p>
<p>Please find attached invoice 2026-0041 for £2,400 covering the August retainer. Payment is due by 14 August; bank details are on the invoice. PO 77821 is referenced on the PDF.</p>
<p>Happy to answer any questions from AP.</p>
<p>Thanks,<br>Alex</p>

<h2>Email template — polite reminder</h2>
<p><em>Subject: Reminder — invoice 2026-0041 due today</em></p>
<p>Hi Sam,</p>
<p>A quick reminder that invoice 2026-0041 (£2,400) is due today. I have re-attached it for convenience. If it is already scheduled, please ignore this note.</p>
<p>Thanks,<br>Alex</p>

<h2>Email template — seven days overdue</h2>
<p><em>Subject: Overdue — invoice 2026-0041 (£2,400)</em></p>
<p>Hi Sam,</p>
<p>Invoice 2026-0041 for £2,400 was due on 14 August and appears unpaid on our side. Could you confirm whether it is with AP or if anything is missing for approval? Happy to resend in another format if needed.</p>
<p>Thanks,<br>Alex</p>

<h2>Email template — firm escalation</h2>
<p><em>Subject: Action required — invoice 2026-0041 now 14 days overdue</em></p>
<p>Hi Sam,</p>
<p>Invoice 2026-0041 (£2,400) is now 14 days past due. Per our agreement, late balances may incur interest as stated on the invoice. Please confirm a payment date this week or connect me with the person who can.</p>
<p>I have re-attached the PDF. Once paid, I will send a receipt referencing this invoice number.</p>
<p>Thanks,<br>Alex</p>

<h2>Escalating without burning the relationship</h2>
<p>After 14 days overdue, reference your late-payment terms and ask for a specific payment date rather than a vague update. Escalate to the budget holder if your only contact is a project manager without payment authority. Remain factual: amounts, dates, attachments.</p>
<p>If you supply ongoing work, state when work will pause. Surprises damage trust; clear conditions usually accelerate payment.</p>

<h2>Portals, shared inboxes and international sends</h2>
<ul>
<li>Follow portal field requirements exactly (tax IDs, coding blocks).</li>
<li>Do not rely on a Slack DM as the official send — always email or portal.</li>
<li>For international clients, mention currency and fee responsibility in the body as well as on the PDF.</li>
</ul>


<h2>Attachments, links, and security filters</h2>
<p>Prefer attaching the PDF directly. Links to expiring downloads create support burden and sometimes trigger corporate security reviews. Keep file size reasonable — compressed logos beat multi-megabyte background images that bounce from mail servers.</p>
<p>If you must use a portal link, still attach the PDF when the system allows it, or confirm the portal entry number in the email so everyone can cross-reference.</p>
<h2>CC, BCC, and thread discipline</h2>
<p>CC the project contact; avoid huge CC lists that encourage nobody to act. Do not BCC people who later need to reply-all with approval — invisible stakeholders create invisible delays. Start a clean email for the first send rather than burying the invoice under a long project thread where AP never looks.</p>
<p>When chasing, reply to your original send thread so history is visible, and re-attach the PDF every time. Assuming they still have the file is optimistic.</p>
<h2>After-hours and time zones</h2>
<p>Sending at the start of the client's business week often beats Friday evening drops that sit untouched. For international clients, aim for morning in their time zone. Timing will not fix a broken invoice, but it stops avoidable delay when everything else is correct.</p>

<h2>Shared mailboxes and handoffs</h2>
<p>When AP is a shared inbox, address the email to the mailbox and greet the team by role ("Hello Accounts Payable") while still CC'ing your champion. Ask for a ticket or reference number if they use one. Record that reference on your tracker so future chases cite it. Handoffs between AP staff are smoother when your subject line already contains the invoice number they search for.</p>
<h2>After it is paid</h2>
<p>Send a short thank-you and a receipt that references the invoice number. Mark your tracker paid the same day. For the difference between the two documents, see <a href="/blog/invoice-vs-receipt">invoice vs receipt</a>.</p>
<p>Create the PDF first with our <a href="/invoice-generator">generator</a>, then use the templates above. Freelancers can pair this with the <a href="/blog/freelancer-invoice-guide">freelancer's invoice guide</a>; teams should align with the <a href="/blog/small-business-invoice-guide">small business invoicing guide</a>.</p>
`,
  },
  {
    slug: "common-invoice-mistakes",
    title: "12 Common Invoice Mistakes That Delay Your Payment",
    description:
      "Missing PO numbers, vague descriptions, wrong tax rates — the errors that push invoices to the bottom of the pile, and how to avoid them.",
    category: "invoicing-basics",
    date: "2026-05-20",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    content: `
<h2>Why small errors cost weeks</h2>
<p>Accounts payable is a gatekeeping function. When an invoice fails a checklist — missing PO, wrong entity, maths mismatch — it is rejected or parked. You rarely get a detailed coaching email; you get silence until you chase. Preventing mistakes is faster than curing them.</p>
<p>Use the list below as a pre-send audit. A structured tool such as the <a href="/invoice-generator">free invoice generator</a> removes several of these automatically by keeping required fields visible and totals calculated.</p>

<h2>The twelve mistakes</h2>
<ol>
<li><strong>No unique invoice number.</strong> Impossible to reference in bank transfers or reminder emails. Always use a sequential scheme and never reuse numbers.</li>
<li><strong>Missing purchase order number.</strong> Enterprise systems often reject invoices without a PO match. Ask at kickoff; print it on the PDF.</li>
<li><strong>Vague line descriptions.</strong> "Consulting" invites questions; questions cost weeks. Name deliverables, periods, and phases.</li>
<li><strong>No due date.</strong> "Soon" or "ASAP" is not a term. Give a calendar date and match it to contracted Net terms.</li>
<li><strong>Wrong legal entity.</strong> Bill the company on the contract, not a trading name, nickname, or personal Gmail for a limited company.</li>
<li><strong>Maths that does not add up.</strong> Hand-edited totals that disagree with line sums are an instant red flag. Let the tool calculate.</li>
<li><strong>Incorrect tax rate or missing tax number.</strong> Blocks the client's reclaim and can make the invoice non-compliant. See the <a href="/blog/tax-invoice-guide">tax invoice guide</a>.</li>
<li><strong>No payment instructions.</strong> Do not make clients ask for bank details. Put them on the invoice in a scannable block.</li>
<li><strong>Editable file formats.</strong> Send PDF, not spreadsheets or docs that reflow or get altered.</li>
<li><strong>Sending to the wrong inbox.</strong> Find accounts payable early; CC the project contact for internal push.</li>
<li><strong>Invoicing late.</strong> You slip a whole payment cycle. Invoice on delivery or on the agreed milestone day.</li>
<li><strong>No follow-up system.</strong> Unchased invoices are paid last. Diary reminders on day 1, 7, and 14 after due.</li>
</ol>

<h2>Mistakes 1–4: identity and timing</h2>
<p>Number, PO, descriptions, and due date are how buyers route and schedule payment. If any are wrong, the invoice may never enter the payment run. Freelancers underestimate PO culture; corporates underestimate how often trading names differ from legal entities.</p>
<p>Fix: maintain a client profile with legal name, AP email, PO rules, and default terms. Refresh it when the client rebrands.</p>

<h2>Mistakes 5–8: compliance and clarity</h2>
<p>Wrong entity, bad maths, tax errors, and missing payment details create either rejection or manual exception handling. Exception handling is where invoices go to wait.</p>
<p>Fix: dual-check large invoices; use templates with tax fields; keep IBAN/account name identical every time so clients can save a payee record. For VAT/GST specifics, read the <a href="/blog/vat-invoice-guide">VAT</a> and <a href="/blog/gst-invoice-guide">GST</a> guides.</p>

<h2>Mistakes 9–12: delivery and discipline</h2>
<p>Format, recipient, timing, and follow-up are operational habits. Teams that batch send on Fridays with a shared tracker outperform heroic individuals who invoice from memory.</p>
<p>Fix: adopt the send checklist in <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> and the process tips in the <a href="/blog/small-business-invoice-guide">small business invoicing guide</a>.</p>

<h2>Quick pre-send checklist</h2>
<ul>
<li>Filename includes invoice number and client</li>
<li>Buyer legal name and address verified</li>
<li>PO / reference present if required</li>
<li>Lines, discounts, tax, and total agree</li>
<li>Due date visible beside amount due</li>
<li>Payment methods complete</li>
<li>PDF attached (not a link that expires)</li>
<li>Subject line includes number and due date</li>
</ul>

<h2>What to do if an invoice is already rejected</h2>
<ol>
<li>Ask for the rejection reason in writing.</li>
<li>Do not silently edit and resend under the same number if the document was formally issued — use a credit note plus a new invoice when required.</li>
<li>Fix the root data (entity, PO, tax) in your template so the error does not recur.</li>
<li>Resend with a short note listing what changed.</li>
</ol>


<h2>Mistakes that look like client problems</h2>
<p>Sometimes the invoice is fine and the buyer's process is slow. Still, rule out your own errors first: confirm delivery to AP, confirm PO match, confirm entity. Only then escalate. Approaching a late payer with "please check whether anything is missing" lands better than accusations — and occasionally surfaces a fixable defect you caused.</p>
<p>Document every chase with dates. If you eventually need a collections letter or legal help, that timeline matters. Memory is not a ledger.</p>
<h2>Template drift across the team</h2>
<p>One founder uses a solid template; a contractor later pastes totals into a slide deck. Standardise on a single generator workflow and forbid ad-hoc invoices for anything above a trivial amount. Drift is how mistakes nine through twelve return after you thought you fixed them.</p>
<p>Review a sample of recent PDFs quarterly. Look for missing POs, pale payment text, and inconsistent seller addresses after an office move.</p>
<h2>Preventing repeat rejects</h2>
<p>When a client rejects an invoice, add the reason to their profile checklist. The second invoice to that client should not fail the same way. Institutional memory turns one painful reject into a permanent intake improvement.</p>

<h2>Currency and rounding traps</h2>
<p>Display currency explicitly on every total. Rounding tax to the nearest unit incorrectly — or rounding each line differently from the system that filed the return — creates one-cent disputes that still block payment in rigid ERPs. Let your generator calculate, and match the rounding mode your accountant expects.</p>
<p>Do not convert currencies by hand in a spreadsheet cell you forget to update. State one currency and stick to it for that invoice.</p>
<h2>The fix going forward</h2>
<p>A structured template eliminates many of the twelve automatically. Our <a href="/invoice-generator">free invoice generator</a> keeps totals consistent and required fields in view. Pair it with a layout that matches your buyer — <a href="/invoice-templates/corporate">Corporate</a> for strict AP teams, <a href="/invoice-templates/modern">Modern</a> for everyone else — and run the checklist above until it is muscle memory.</p>
`,
  },
  {
    slug: "tax-invoice-guide",
    title: "Tax Invoice Guide: What It Is and What It Must Show",
    description:
      "A tax invoice lets your customer reclaim the tax they paid. Learn the mandatory fields and how it differs from a standard invoice.",
    category: "tax-compliance",
    date: "2026-05-13",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    content: `
<p><strong>Important:</strong> Tax laws, rates, registration requirements, and invoicing rules can change and may vary by jurisdiction. This article provides general informational content and should not be considered professional tax, accounting, or legal advice. Verify current requirements with the relevant tax authority or a qualified professional.</p>

<h2>What makes an invoice a tax invoice</h2>
<p>A tax invoice is a standard invoice plus the specific information a tax authority requires so the buyer can claim an input-tax credit (or equivalent). Miss a mandatory field and your customer may lose the credit — which is why accounts-payable teams check these documents carefully.</p>
<p>Not every sales document is a tax invoice. Till receipts, pro forma invoices, and estimates usually do not qualify. If your customer needs to reclaim tax, ask what their authority requires before you bill.</p>

<h2>Typical mandatory fields</h2>
<p>Exact lists differ by country, but most regimes expect some version of the following:</p>
<ul>
<li>The words "Tax Invoice" (or the locally required title)</li>
<li>Supplier legal name, address, and tax registration number</li>
<li>Customer name, address, and (for many B2B cases) tax number</li>
<li>Unique sequential number and issue date</li>
<li>Description, quantity, and unit price per line</li>
<li>Taxable amount per rate, the rate applied, and tax amount per rate</li>
<li>Total excluding tax, total tax, and total including tax</li>
<li>Supply date / tax point when it differs from the issue date</li>
</ul>
<p>Some regions also require QR codes, digital signatures, e-invoicing clearance, or industry codes. Do not assume a generic PDF layout is enough for regulated channels.</p>

<h2>Tax invoice vs ordinary invoice</h2>
<table><thead><tr><th>&nbsp;</th><th>Ordinary invoice</th><th>Tax invoice</th></tr></thead><tbody>
<tr><td>Primary job</td><td>Request payment</td><td>Request payment + support tax reclaim / reporting</td></tr>
<tr><td>Tax registration IDs</td><td>Optional / situational</td><td>Usually mandatory</td></tr>
<tr><td>Tax breakdown</td><td>May be simplified</td><td>Usually required by rate</td></tr>
<tr><td>Buyer scrutiny</td><td>AP approval</td><td>AP + tax compliance checks</td></tr>
</tbody></table>

<h2>Multiple tax rates</h2>
<p>If lines carry different rates, group and subtotal them by rate. A single blended tax line is not acceptable in most jurisdictions because the buyer cannot allocate credit correctly. Show clearly:</p>
<ul>
<li>Net amount at rate A → tax at rate A</li>
<li>Net amount at rate B → tax at rate B</li>
<li>Grand totals</li>
</ul>
<p>Discount allocation matters. Many systems require discounts to be applied per line or per rate group before tax is calculated. Random "goodwill" discounts off the gross total can break compliance.</p>

<h2>Exempt, zero-rated, and reverse-charge supplies</h2>
<p>State the reason for exemption, zero rating, or reverse charge directly on the invoice. Examples of wording (always confirm locally): "Exempt supply — [reason]"; "Zero-rated — export of goods"; "Reverse charge — customer to account for tax."</p>
<p>Leaving the rate blank without explanation creates ambiguity for both auditors and clients. Related deep-dives: <a href="/blog/gst-invoice-guide">GST invoice guide</a> and <a href="/blog/vat-invoice-guide">VAT invoice guide</a>.</p>

<h2>Corrections and credit notes</h2>
<p>Once a tax invoice is issued, do not quietly edit and resend it as if nothing happened. Most regimes expect a credit note (or debit note) that references the original invoice number, with a clear adjustment to net and tax. Keep both documents.</p>
<p>If you discover undercharged tax, speak to your accountant before inventing a process — correcting tax after the fact can have filing implications.</p>

<h2>Record-keeping</h2>
<p>Retain tax invoices for the period your law requires (often five to seven years or more). Store searchable PDFs and ensure backup copies exist. When you change accounting systems, export historical invoices rather than trusting a vendor forever.</p>

<h2>Practical workflow tips</h2>
<ul>
<li>Save tax IDs on each client profile so they are never typed from memory.</li>
<li>Use sequential numbering without gaps you cannot explain.</li>
<li>Train anyone who invoices on the difference between tax-inclusive and tax-exclusive pricing.</li>
<li>Align your template's tax block with how your filings are prepared.</li>
</ul>


<h2>Who needs a tax invoice</h2>
<p>Registered suppliers generally issue tax invoices for taxable supplies to customers who need them for reclaim or record-keeping. Thresholds, exceptions, and consumer versus business rules vary widely. If you recently crossed a registration threshold, update your templates immediately — charging tax without showing required fields, or failing to charge when you should, both create cleanup work.</p>
<p>Buyers should tell you when they need a full tax invoice rather than a simplified receipt. Train your sales desk to ask for tax IDs at onboarding for business customers so the first invoice is not a scramble.</p>
<h2>Alignment with filings</h2>
<p>Your invoice-level tax totals should reconcilable to the returns you file. If staff issue ad-hoc credits without tax adjustments, filings drift from documents. Close each period with a quick match: invoices issued, credits issued, tax collected, tax on credits.</p>
<p>When rates change mid-year, update product defaults on the day the new rate applies and double-check drafts created earlier. Old drafts with stale rates are a quiet source of errors.</p>
<h2>Working with accountants</h2>
<p>Send your accountant samples of domestic, reverse-charge, exempt, and mixed-rate invoices for a quick review once a year — or whenever you enter a new sales pattern. A thirty-minute review prevents months of brittle templates. Keep this guide as orientation only; their advice reflects your registration and jurisdiction.</p>

<h2>Cross-border first invoices</h2>
<p>The first time you sell into a new country, pause before reusing your domestic tax invoice layout. Ask whether reverse charge, local registration, or marketplace collection rules apply. A correctly unpaid VAT line with reverse-charge wording is often safer than charging domestic tax to a foreign VAT-registered business by habit.</p>
<p>Document the decision in the client file so the next invoice follows the same treatment.</p>
<h2>Build the document carefully</h2>
<p>Use the notes and tax fields in our <a href="/invoice-generator">free invoice generator</a> to capture registration numbers, rate breaks, and reverse-charge statements. Pair with a clear layout such as <a href="/invoice-templates/corporate">Corporate</a> when buyers are strict about reference fields.</p>
<p>Treat this article as general guidance only. Confirm current requirements with a qualified professional or the relevant tax authority before you rely on a format for reclaim or filing.</p>
`,
  },
  {
    slug: "gst-invoice-guide",
    title: "GST Invoice Guide: Fields, Rates and Common Errors",
    description:
      "How a GST invoice differs from a regular invoice, the fields it must carry, and how to handle CGST, SGST and IGST-style splits.",
    category: "tax-compliance",
    date: "2026-05-06",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    jurisdiction: "GST jurisdictions (e.g. India)",
    content: `
<p><strong>Important:</strong> Tax laws, rates, registration requirements, and invoicing rules can change and may vary by jurisdiction. This article provides general informational content and should not be considered professional tax, accounting, or legal advice. Verify current requirements with the relevant tax authority or a qualified professional.</p>

<h2>What is a GST invoice?</h2>
<p>A GST invoice is the document a registered supplier issues for a taxable supply of goods or services under a goods and services tax system. It typically carries GST identification numbers for the parties involved and shows tax split by component where the local rules require it. Requirements described here are typical of GST systems such as India&apos;s and may not apply elsewhere.</p>
<p>If you are not registered, you generally should not charge GST or issue documents that imply you are. Misrepresenting registration status creates problems for you and for customers attempting to claim credits.</p>

<h2>Required fields (typical)</h2>
<ul>
<li>Supplier name, address, and GSTIN (or local equivalent ID)</li>
<li>Consecutive invoice number and date</li>
<li>Recipient name, address, and GSTIN for registered recipients</li>
<li>Place of supply and state / territory code where relevant</li>
<li>HSN or SAC (or similar classification) code per line when required</li>
<li>Taxable value, rate, and tax amount — split into components when applicable</li>
<li>Whether tax is payable under reverse charge</li>
<li>Signature or digital signature of the supplier where mandated</li>
<li>Shipping / billing addresses when they differ for goods</li>
</ul>
<p>E-invoicing or e-way bill rules may add IRN/QR requirements for certain turnovers and document types. Check whether your invoices must pass through a government portal before they are valid for credit.</p>

<h2>Intra-state vs inter-state supplies</h2>
<p>In multi-component GST systems, intra-state supplies often split tax into two equal components (commonly labelled along the lines of central and state tax). Inter-state supplies often use a single integrated tax. Getting the place of supply wrong is one of the most common GST invoicing errors — it misclassifies the components and can break the buyer's credit flow.</p>
<p>Determine place of supply using the rules for goods versus services in your jurisdiction; do not guess based on where your office feels "mainly" located.</p>

<h2>HSN / SAC and line clarity</h2>
<p>Classification codes belong with your product and service list so they are never improvised at invoice time. Wrong codes create matching issues in returns and audits. Descriptions should still be human-readable: codes alone are not enough for a client approver.</p>

<h2>Reverse charge</h2>
<p>When reverse charge applies, the supplier may need to show that tax is payable by the recipient, often at a nil charge on the face of the invoice with explicit wording. Do not collect tax from the client if reverse charge means they self-account — and do not omit the disclosure.</p>
<p>For a broader cross-border / reverse-charge framing in VAT systems, see the <a href="/blog/vat-invoice-guide">VAT invoice guide</a>. Concepts rhyme; forms differ.</p>

<h2>Exports and special series</h2>
<p>Exports and certain zero-rated supplies often need distinct documentation, currency handling, and sometimes a separate invoice series. Shipping bills, LUT/bond references, or export declarations may sit alongside the invoice in your records even if they are not printed on every PDF.</p>
<p>Keep export invoices clearly labelled and stored so filing season does not become archaeology.</p>

<h2>Credit notes, debit notes, and amendments</h2>
<p>Issue credit notes rather than editing an issued invoice. Reference the original invoice number, adjust taxable value and tax components, and keep both documents. Debit notes similarly document upward adjustments when allowed.</p>
<p>Avoid duplicate invoice numbers when regenerating PDFs after a typo — void and reissue under a controlled process if your software does not manage amendments for you.</p>

<h2>Common GST invoicing errors</h2>
<ul>
<li>Wrong place of supply → wrong tax component split</li>
<li>Missing recipient GSTIN on B2B supplies</li>
<li>Incorrect or blank HSN/SAC where required</li>
<li>Charging GST while unregistered (or failing to charge while registered)</li>
<li>Omitting reverse-charge wording when applicable</li>
<li>Maths mismatches between taxable value and tax</li>
</ul>

<h2>Practical tips</h2>
<ul>
<li>Store HSN/SAC codes with your product list so they are never guessed.</li>
<li>Save buyer GSTINs on client records and validate format where tools allow.</li>
<li>Keep a separate series for export invoices if your process benefits from it.</li>
<li>Reconcile invoice-level data to returns before filing deadlines.</li>
<li>Train staff that "tax invoice" is a compliance artefact, not just branding.</li>
</ul>


<h2>B2B versus B2C documentation habits</h2>
<p>Registered business customers usually need full GST details to claim credit. Consumers may need less on the face of the document, but your internal records should still explain the supply. Do not invent a "simpler" B2B format that drops GSTINs to save typing — that saving is expensive later.</p>
<p>Collect buyer GSTINs during onboarding and verify them when official validation tools exist. A single digit error can mean a document that looks fine to humans but fails automated matching.</p>
<h2>Returns, advances, and continuous supply</h2>
<p>Advances and periodic billing for continuous supplies often have specific timing and documentation rules. Align invoice dates with how you report in your return software. If you bill monthly for an ongoing service, name the service period every time so place-of-supply and rate decisions remain reviewable.</p>
<p>Goods returns should reference the original invoice on the credit note and reverse the same tax components. Ad-hoc refunds without tax documents create return mismatches.</p>
<h2>Working with your tax professional</h2>
<p>Bring sample PDFs to your accountant when you expand into inter-state trade, exports, or reverse-charge categories for the first time. Template changes are cheaper than amended filings. Use our <a href="/invoice-generator">invoice generator</a> for clear drafts, then confirm mandatory fields against current official guidance before you scale volume.</p>
<h2>Create and cross-check</h2>
<p>Use the notes and tax fields in our <a href="/invoice-generator">invoice generator</a> to capture registration IDs, rate lines, and reverse-charge statements. For general tax-invoice principles that apply across regimes, read the <a href="/blog/tax-invoice-guide">tax invoice guide</a>. Browse <a href="/invoice-templates">invoice templates</a> when you need a clearer AP-friendly layout.</p>
<p>Always confirm current field lists, rates, and e-invoicing thresholds with your accountant or the relevant authority — this guide is informational, not a filing manual.</p>
`,
  },
  {
    slug: "vat-invoice-guide",
    title: "VAT Invoice Guide: Requirements, Rates and Reverse Charge",
    description:
      "What a VAT invoice must show, when a simplified invoice is allowed, and how reverse charge works for cross-border B2B services.",
    category: "tax-compliance",
    date: "2026-04-29",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    jurisdiction: "VAT jurisdictions (e.g. UK / EU)",
    content: `
<p><strong>Important:</strong> Tax laws, rates, registration requirements, and invoicing rules can change and may vary by jurisdiction. This article provides general informational content and should not be considered professional tax, accounting, or legal advice. Verify current requirements with the relevant tax authority or a qualified professional.</p>

<h2>Full VAT invoice</h2>
<p>A full VAT invoice is the document that supports VAT reclaim for the customer and correct reporting for the supplier. Exact field lists differ by country, but a full invoice commonly shows:</p>
<ul>
<li>Your name, address, and VAT registration number</li>
<li>Customer name and address (and VAT number for many B2B / cross-border cases)</li>
<li>A unique sequential invoice number</li>
<li>Invoice date and the tax point / supply date when different</li>
<li>Description of goods or services per line</li>
<li>Net amount per VAT rate, the rate applied, and the VAT amount</li>
<li>Total net, total VAT, and gross total</li>
</ul>
<p>Unit prices and quantities should be clear enough that an auditor can reconstruct the totals. If you issue invoices in a foreign currency, follow local rules for showing exchange rates or VAT in the domestic currency when required.</p>

<h2>Simplified invoices</h2>
<p>Many jurisdictions allow a simplified VAT invoice below a value threshold — typically showing less detail, such as the gross amount and the VAT rate rather than a full buyer-address block. Retail till receipts often rely on these rules.</p>
<p>Check your local threshold and content list before relying on a simplified form for B2B work. Business customers frequently still ask for a full invoice even when a simplified one would be legally allowed, because their reclaim process expects more detail.</p>

<h2>Reverse charge</h2>
<p>For many cross-border B2B services, the customer accounts for VAT instead of the supplier. In those cases you generally:</p>
<ul>
<li>Charge zero VAT on the face of the invoice</li>
<li>Show the customer's VAT number</li>
<li>Add clear wording such as "Reverse charge: customer to account for VAT to HMRC/local authority"</li>
<li>Still keep a full audit trail of the supply</li>
</ul>
<p>Reverse charge is easy to get wrong when you mix domestic and foreign customers in one template. Train whoever invoices to select the correct tax treatment deliberately — not by habit. Related reading: <a href="/blog/tax-invoice-guide">tax invoice guide</a> and, for GST-style systems, <a href="/blog/gst-invoice-guide">GST invoice guide</a>.</p>

<h2>Mixed rates</h2>
<p>Subtotal by rate. Show standard-rated, reduced-rated, zero-rated, and exempt lines separately, each with its own VAT amount (zero where appropriate). Blending rates into one percentage confuses filings and reclaim.</p>
<p>When a discount applies across mixed-rate goods, allocate it in line with local rules — often proportionally by net value per rate — rather than knocking an arbitrary amount off the final gross.</p>

<h2>Credit notes</h2>
<p>To correct a VAT invoice, issue a credit note referencing the original invoice number. Show the adjustment to net and VAT clearly. Never amend and resend the original as if it were untouched; parallel versions of "the same number" create nightmares in audits and customer AP systems.</p>
<p>If you under-billed VAT, get advice before issuing a further charge — timing and return corrections may be involved.</p>

<h2>Time of supply and deposits</h2>
<p>VAT timing can follow invoice date, payment date, or supply date depending on local time-of-supply rules. Deposits may create a tax point before final delivery. Align your invoicing rhythm with how your VAT returns are prepared so you do not accidentally pull liability into the wrong period.</p>

<h2>Practical compliance habits</h2>
<ul>
<li>Keep VAT numbers on client records and validate them when tools or official checkers are available.</li>
<li>Use continuous numbering without unexplained gaps.</li>
<li>Store PDFs for the statutory retention period.</li>
<li>Separate VAT collected from cash available to spend.</li>
<li>Review mixed-rate and reverse-charge invoices manually until error rates are near zero.</li>
</ul>

<h2>International services and goods</h2>
<p>Place-of-supply rules differ for services and goods, and distance-selling / one-stop-shop style regimes may apply to certain B2C sales. Do not copy a domestic invoice format onto a foreign customer without checking whether reverse charge, zero rating, or local registration obligations apply.</p>
<p>State currency clearly and note who bears bank transfer fees so the net amount you receive matches expectations.</p>


<h2>Domestic B2B habits that prevent reclaim friction</h2>
<p>Even when a simplified invoice would be allowed, many business customers ask for full detail because their reclaim workflow expects it. Defaulting to full VAT invoices for B2B saves negotiation. Include the customer VAT number when you have it; missing numbers are a frequent cause of queries even when not strictly mandatory for every domestic case.</p>
<p>Keep your own VAT number identically formatted on every PDF. Inconsistent spacing or omitted country prefixes confuse automated capture tools some buyers use.</p>
<h2>Goods versus services on the same invoice</h2>
<p>When a job mixes goods and services with different place-of-supply outcomes, split lines carefully and document treatment in notes. Dumping everything into one undifferentiated service line is how reverse-charge and domestic VAT get mixed incorrectly.</p>
<p>Shipping and postage may follow special rules depending on whether they are incidental to goods. If unsure, separate them and seek advice rather than inventing a blended rate.</p>
<h2>Year-end hygiene</h2>
<p>Before year end, review open credit notes, orphaned invoices, and foreign customers billed with domestic VAT by mistake. Clean documents make accountant reviews faster and reduce surprise assessments. Retain evidence of VAT number checks for cross-border B2B where your process requires it.</p>
<h2>Build the document, then verify</h2>
<p>Build the document in the <a href="/invoice-generator">invoice generator</a>, use an AP-friendly layout such as <a href="/invoice-templates/corporate">Corporate</a> or <a href="/invoice-templates/modern">Modern</a>, and confirm details with your accountant before you rely on a format for reclaim or return filing. See also our <a href="/about">About</a> page and <a href="/disclaimer">Disclaimer</a>.</p>
<p>This article is general information, not tax advice. Rules change; your registration status and trade pattern determine what you must show.</p>
`,
  },
  {
    slug: "professional-invoice-design-tips",
    title: "15 Professional Invoice Design Tips That Improve Payment Speed",
    description:
      "Typography, hierarchy, colour and whitespace choices that make an invoice easier to read, approve and pay — without sacrificing brand.",
    category: "design-templates",
    date: "2026-04-22",
    updated: "2026-09-25",
    readingTime: 4,
    author: "Invoice Creator Editorial Team",
    content: `
<h2>Design for approval speed, not decoration</h2>
<p>An invoice has one job: get understood and paid. Visual design should accelerate that job. When hierarchy is clear, accounts payable finds the amount, due date, PO, and bank details in seconds. When hierarchy is muddy, your brand look becomes expensive noise.</p>
<p>The fifteen tips below are practical rules you can apply in any template — including those in our <a href="/invoice-templates">invoice templates</a> gallery.</p>

<h2>Hierarchy first</h2>
<ol>
<li><strong>Make the amount due the largest number on the page.</strong> If the logo is bigger than the total, reverse the priority.</li>
<li><strong>Put the due date directly beside or beneath the amount due.</strong> Approvers should not hunt through paragraphs for timing.</li>
<li><strong>Keep the invoice number top-right (or another consistent corner)</strong> where AP teams look first when filing and searching.</li>
<li><strong>Limit yourself to two type sizes for body content.</strong> Extra sizes feel "designed" but slow scanning.</li>
<li><strong>Right-align every numeric column.</strong> Misaligned totals undermine trust in the maths.</li>
</ol>

<h2>Colour and brand</h2>
<ol start="6">
<li><strong>Use one accent colour</strong>, applied to the header bar and totals emphasis only — not to every label.</li>
<li><strong>Ensure text stays legible when printed in greyscale.</strong> Many offices still print; light grey on white fails.</li>
<li><strong>Keep the logo modest (often under ~60px tall in the PDF).</strong> It identifies you; it is not the hero.</li>
<li><strong>Avoid background images behind text.</strong> Watermarks and photos reduce contrast and compress poorly.</li>
<li><strong>Test contrast deliberately.</strong> Soft grey body text may look elegant on a retina screen and unreadable on a projector or cheap laser print.</li>
</ol>

<h2>Layout and tables</h2>
<ol start="11">
<li><strong>Give the item table room to breathe</strong> with comfortable row padding (around 10–12px equivalent). Cramped rows cause skipped lines.</li>
<li><strong>Use subtle row separators instead of heavy grid borders.</strong> Thick boxes add visual weight without adding information.</li>
<li><strong>Keep payment instructions in a bordered or clearly separated block</strong> so they are scannable even on page two.</li>
<li><strong>Never let a table split awkwardly across pages.</strong> Keep a totals block with at least two line items, or force an earlier page break.</li>
<li><strong>Leave a signature area only if clients actually require one.</strong> Empty signature blocks make documents look unfinished and waste space.</li>
</ol>

<h2>Typography details that matter</h2>
<p>Choose a clean sans or a restrained serif and stick to it. Avoid novelty fonts for legal business names and bank details. Use tabular lining figures for money columns so digits align vertically. Keep line length for notes moderate — long paragraphs at the bottom get skipped.</p>
<p>Bold sparingly: client name, amount due, and section labels. If everything is bold, nothing is.</p>

<h2>Mobile and PDF preview reality</h2>
<p>Many clients first see your invoice as an email thumbnail or on a phone screen. High-contrast headers (as in <a href="/invoice-templates/dark">Dark</a> or <a href="/invoice-templates/creative">Creative</a>) can help recognition, but the body must still work in black-and-white print. Open your PDF at 50% zoom: can you still spot total, due date, and invoice number?</p>

<h2>Matching layout to audience</h2>
<table><thead><tr><th>Audience</th><th>Design emphasis</th><th>Starting template</th></tr></thead><tbody>
<tr><td>Enterprise AP</td><td>Reference fields, quiet chrome</td><td><a href="/invoice-templates/corporate">Corporate</a></td></tr>
<tr><td>Creatives</td><td>Typography, whitespace</td><td><a href="/invoice-templates/minimal">Minimal</a> / <a href="/invoice-templates/creative">Creative</a></td></tr>
<tr><td>Premium services</td><td>Restrained serif, margins</td><td><a href="/invoice-templates/elegant">Elegant</a></td></tr>
<tr><td>General small business</td><td>Familiar, trustworthy</td><td><a href="/invoice-templates/modern">Modern</a> / <a href="/invoice-templates/blue">Blue</a></td></tr>
</tbody></table>
<p>More selection help sits in <a href="/blog/best-invoice-templates">the 10 best invoice templates</a>.</p>

<h2>Content design is still design</h2>
<p>Visual polish cannot save vague line items or missing bank details. Pair these tips with solid content habits from <a href="/blog/how-to-create-an-invoice">how to create an invoice</a> and avoid the traps in <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>. Clarity of words and clarity of layout reinforce each other.</p>

<h2>A simple self-test before you send</h2>
<ul>
<li>Cover the page with your hand, then reveal only the top third — can you name the supplier, invoice number, and client?</li>
<li>Reveal the totals — is the amount due obvious within a second?</li>
<li>Reveal the footer — can you pay without scrolling back up for missing IBAN digits?</li>
</ul>
<p>If any answer is no, adjust hierarchy before you adjust decoration.</p>


<h2>Whitespace is a feature</h2>
<p>Crowding every edge with stamps, badges, and social icons makes the amount due harder to find. Leave margins that survive printer edge loss. Separate sections with space and light rules rather than boxes inside boxes. If removing a decorative element does not reduce clarity, remove it.</p>
<p>Clients equate visual calm with administrative competence. Busy invoices feel risky even when the numbers are correct — an unfair bias you can use in your favour by simplifying.</p>
<h2>Localisation and long text</h2>
<p>If you invoice in multiple languages or with long legal entity names, test the template with worst-case strings. Fixed-height header boxes that clip text look careless. Prefer layouts that wrap gracefully, such as <a href="/invoice-templates/modern">Modern</a> or <a href="/invoice-templates/corporate">Corporate</a>.</p>
<p>Currency symbols and three-letter codes should be consistent. Mixing "$" without clarifying USD versus AUD is a design defect as much as a content defect.</p>
<h2>Iterate with a real AP reader</h2>
<p>Ask one friendly client finance contact what they look at first and what annoys them. You will learn more in ten minutes than from a month of solitary tweaking. Then lock the template and resist seasonal redesigns that force AP to relearn your layout.</p>
<p>Good invoice design is boring on purpose. Boring gets paid.</p>

<h2>Icons, QR codes, and payment links</h2>
<p>A single payment-link QR code near the payment block can help consumer and small-business payers. Keep it secondary to readable bank details for clients who cannot scan. Do not scatter multiple QR codes or app-store badges across the page — they compete with the total and look promotional rather than financial.</p>
<p>If a link is present, also print the URL in plain text for accessibility and printouts.</p>
<h2>Apply the principles in minutes</h2>
<p>All fifteen principles are baked into our <a href="/invoice-templates">invoice templates</a>. Create your next document with the <a href="/invoice-generator">free invoice generator</a>, pick a layout that fits your buyer, and let structure — not ornament — carry the payment request.</p>
`,
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const relatedPosts = (post: Post, limit = 3) =>
  POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => (b.category === post.category ? 1 : 0) - (a.category === post.category ? 1 : 0))
    .slice(0, limit);
