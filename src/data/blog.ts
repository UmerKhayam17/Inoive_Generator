export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: number;
  author: string;
  content: string; // simple HTML
}

export const CATEGORIES = [
  { slug: "invoicing-basics", name: "Invoicing Basics" },
  { slug: "comparisons", name: "Comparisons" },
  { slug: "guides", name: "Guides" },
  { slug: "tax", name: "Tax & Compliance" },
  { slug: "design", name: "Design & Templates" },
];

export const POSTS: Post[] = [
  {
    slug: "what-is-an-invoice",
    title: "What Is an Invoice? A Plain-English Definition for Small Businesses",
    description:
      "An invoice is a dated request for payment that records what you sold, to whom, and on what terms. Here is what every invoice must contain.",
    category: "invoicing-basics",
    date: "2026-07-28",
    readingTime: 6,
    author: "Maya Ellison",
    content: `
<h2>The short definition</h2>
<p>An invoice is a commercial document issued by a seller to a buyer that itemises goods or services supplied, states the amount owed, and sets a deadline for payment. It is simultaneously a request for money, a record of a transaction, and — in most countries — an accounting document you are legally required to keep.</p>
<p>An invoice is not a receipt and it is not a quote. A quote comes before the work, an invoice comes after it, and a receipt confirms the invoice was paid.</p>
<h2>What every invoice must contain</h2>
<ul>
<li><strong>The word "Invoice"</strong> — so it cannot be mistaken for an estimate.</li>
<li><strong>A unique invoice number</strong> — sequential, never reused.</li>
<li><strong>Issue date and due date</strong> — or clear terms such as Net 30.</li>
<li><strong>Your business details</strong> — legal name, address, tax registration number, contact email.</li>
<li><strong>Your client's details</strong> — the legal entity being billed, not just a person's first name.</li>
<li><strong>Line items</strong> — description, quantity, unit price, line total.</li>
<li><strong>Subtotal, tax, discounts and the final amount due.</strong></li>
<li><strong>Payment instructions</strong> — bank details, payment link, or accepted methods.</li>
</ul>
<h2>Why the details matter</h2>
<p>Accounts-payable teams reject invoices for surprisingly small reasons: a missing purchase order number, an ambiguous due date, or a total that does not match the sum of the lines. Every rejection adds weeks to your payment cycle. A structured template removes that risk because the fields are always in the same place.</p>
<h2>Invoice numbering</h2>
<p>Use a predictable scheme such as <code>2026-0041</code> or <code>ACME-0041</code>. Never restart numbering mid-year and never issue two invoices with the same number — auditors treat duplicates as a red flag.</p>
<h2>How long to keep invoices</h2>
<p>Retention rules vary, but most jurisdictions expect between five and seven years of records. Store a PDF copy of every invoice you send, not just the data in your accounting tool.</p>
<h2>Create one now</h2>
<p>You can build a compliant invoice with every field above in about two minutes using our <a href="/invoice-generator">free invoice generator</a> — no signup, no watermark, instant PDF download.</p>
`,
  },
  {
    slug: "how-to-create-an-invoice",
    title: "How to Create an Invoice: A Step-by-Step Guide (2026)",
    description:
      "Follow eight practical steps to create a professional invoice that gets paid on time, with field-by-field guidance and a free generator.",
    category: "guides",
    date: "2026-07-22",
    readingTime: 8,
    author: "Maya Ellison",
    content: `
<h2>Before you start</h2>
<p>Gather three things: your business details, the client's legal billing details, and an agreed scope with prices. Ninety percent of late payments trace back to a disagreement about one of those three, not to the invoice itself.</p>
<h2>Step 1 — Pick a template</h2>
<p>Choose a layout that matches how your client files paperwork. Enterprise clients prefer the <a href="/invoice-templates/corporate">Corporate</a> layout; creative clients respond well to <a href="/invoice-templates/modern">Modern</a> or <a href="/invoice-templates/creative">Creative</a>.</p>
<h2>Step 2 — Add your business identity</h2>
<p>Upload your logo, then add your legal business name, address, email, phone and tax registration number. If you trade under a different name to your registered one, show both.</p>
<h2>Step 3 — Add the client</h2>
<p>Bill the legal entity, include an attention line for the person approving payment, and add their purchase order number if they use one.</p>
<h2>Step 4 — Set the invoice number and dates</h2>
<p>Use your sequential number, today's date as the issue date, and a due date that matches your agreed terms. "Due on receipt" is legitimate but Net 14 or Net 30 is more common.</p>
<h2>Step 5 — Itemise the work</h2>
<p>Write descriptions your client can approve without asking you a question. "Website redesign — homepage and 4 inner pages, phase 1 of 2" beats "Design work".</p>
<h2>Step 6 — Apply tax, discounts and shipping</h2>
<p>Apply discounts before tax unless local rules say otherwise, then apply the correct tax rate. If you are not registered for tax, say so explicitly so the client does not try to reclaim it.</p>
<h2>Step 7 — Add payment terms and notes</h2>
<p>State accepted payment methods, bank details, any late-payment interest, and a short thank-you. A polite note measurably improves payment speed.</p>
<h2>Step 8 — Download and send</h2>
<p>Export as PDF (never an editable document), name the file <code>Invoice-2026-0041-ClientName.pdf</code>, and email it directly to accounts payable with the invoice number in the subject line.</p>
<h2>Do it now</h2>
<p>Our <a href="/invoice-generator">free invoice generator</a> walks through every step above with a live preview and instant PDF download.</p>
`,
  },
  {
    slug: "invoice-vs-receipt",
    title: "Invoice vs Receipt: What Is the Difference?",
    description:
      "An invoice requests payment; a receipt proves payment was made. Here is when to issue each, and what happens if you confuse them.",
    category: "comparisons",
    date: "2026-07-15",
    readingTime: 5,
    author: "Daniel Okafor",
    content: `
<h2>The core difference</h2>
<p>An invoice is issued <em>before</em> payment and asks for money. A receipt is issued <em>after</em> payment and confirms money was received. One creates a debt, the other extinguishes it.</p>
<table><thead><tr><th>&nbsp;</th><th>Invoice</th><th>Receipt</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Request payment</td><td>Confirm payment</td></tr>
<tr><td>Timing</td><td>After delivery, before payment</td><td>At or after payment</td></tr>
<tr><td>Includes due date</td><td>Yes</td><td>No</td></tr>
<tr><td>Used by buyer for</td><td>Approving and scheduling payment</td><td>Expense claims, warranty, returns</td></tr>
<tr><td>Creates a receivable</td><td>Yes</td><td>No</td></tr>
</tbody></table>
<h2>When you need both</h2>
<p>For B2B work you almost always issue an invoice, then a receipt when the transfer clears. For retail or instant online payments a receipt alone is usually enough, because payment and delivery happen at the same moment.</p>
<h2>Common mistakes</h2>
<ul>
<li>Labelling a paid document "Invoice" — clients may pay twice, or file it as unpaid.</li>
<li>Issuing a receipt with no reference to the original invoice number.</li>
<li>Using receipts as your only sales record, which makes reconciliation painful at year end.</li>
</ul>
<p>Start with a properly labelled document using the <a href="/invoice-generator">free invoice generator</a>.</p>
`,
  },
  {
    slug: "invoice-vs-estimate",
    title: "Invoice vs Estimate: Which Document Should You Send?",
    description:
      "Estimates are informed guesses, invoices are binding requests for payment. Learn when to send each and how to convert one into the other.",
    category: "comparisons",
    date: "2026-07-08",
    readingTime: 5,
    author: "Daniel Okafor",
    content: `
<h2>Definitions</h2>
<p>An <strong>estimate</strong> is a good-faith projection of what a job will cost. It is not binding and it usually carries a validity window and a variance range. An <strong>invoice</strong> is a definite request for a specific amount, issued once the work is delivered.</p>
<h2>When an estimate is the right call</h2>
<ul>
<li>Scope is not fully defined yet.</li>
<li>Costs depend on site conditions, third-party pricing, or hours worked.</li>
<li>The client is comparing suppliers and needs a ballpark quickly.</li>
</ul>
<h2>Protecting yourself on estimates</h2>
<p>Always state a validity period ("valid for 30 days"), an assumptions list, and how variations will be charged. Without those three lines, clients treat estimates as fixed prices.</p>
<h2>Converting an estimate into an invoice</h2>
<p>Keep the same line-item structure so the client can compare the two documents side by side, then add the invoice number, issue date and due date. Any variation should appear as its own clearly labelled line, never as a silent increase to an existing one.</p>
<p>When the job is done, produce the final document with our <a href="/invoice-generator">invoice generator</a>.</p>
`,
  },
  {
    slug: "invoice-vs-quotation",
    title: "Invoice vs Quotation: The Difference Explained",
    description:
      "A quotation is a fixed-price offer; an invoice is a request for payment. Understand the legal and practical differences.",
    category: "comparisons",
    date: "2026-07-01",
    readingTime: 5,
    author: "Daniel Okafor",
    content: `
<h2>A quotation is an offer</h2>
<p>Unlike an estimate, a quotation is a firm price. Once the client accepts it, most legal systems treat it as part of a contract — you cannot raise the price later without agreement. That precision is exactly why quotations must be written carefully.</p>
<h2>An invoice is a demand</h2>
<p>The invoice comes afterwards and should mirror the accepted quotation line for line. If the totals differ, explain why on the invoice itself, referencing an approved change request.</p>
<h2>Quotation checklist</h2>
<ul>
<li>Quotation number and date</li>
<li>Detailed scope and exclusions</li>
<li>Fixed price with tax treatment stated</li>
<li>Validity period</li>
<li>Payment schedule (deposit, milestones, balance)</li>
<li>Acceptance signature block</li>
</ul>
<h2>Practical workflow</h2>
<p>Quotation → written acceptance → deposit invoice → work → final invoice → receipt. Skipping the acceptance step is the single most common cause of scope disputes.</p>
<p>See also: <a href="/blog/invoice-vs-estimate">Invoice vs Estimate</a>.</p>
`,
  },
  {
    slug: "best-invoice-templates",
    title: "The 10 Best Invoice Templates and When to Use Each",
    description:
      "A practical tour of ten invoice layouts — Modern, Minimal, Corporate, Elegant and more — with guidance on which fits your business.",
    category: "design",
    date: "2026-06-24",
    readingTime: 7,
    author: "Priya Raman",
    content: `
<h2>Why the template matters</h2>
<p>An invoice is often the last document a client reads before deciding how quickly to pay you. Clarity beats decoration: the amount due, the due date and the payment method should be findable in under three seconds.</p>
<h2>The ten layouts</h2>
<ol>
<li><strong><a href="/invoice-templates/modern">Modern</a></strong> — the safe default for most businesses.</li>
<li><strong><a href="/invoice-templates/minimal">Minimal</a></strong> — typography-led, ideal for solo creatives.</li>
<li><strong><a href="/invoice-templates/corporate">Corporate</a></strong> — every reference field AP teams ask for.</li>
<li><strong><a href="/invoice-templates/elegant">Elegant</a></strong> — serif headings for premium services.</li>
<li><strong><a href="/invoice-templates/blue">Blue</a></strong> — the familiar, trustworthy classic.</li>
<li><strong><a href="/invoice-templates/dark">Dark</a></strong> — high-contrast header that stands out as a PDF.</li>
<li><strong><a href="/invoice-templates/startup">Startup</a></strong> — brand-forward and friendly.</li>
<li><strong><a href="/invoice-templates/agency">Agency</a></strong> — side rail keeps long line items readable.</li>
<li><strong><a href="/invoice-templates/creative">Creative</a></strong> — oversized total, colour-blocked header.</li>
<li><strong><a href="/invoice-templates/classic">Classic</a></strong> — traditional ruled bookkeeping layout.</li>
</ol>
<h2>Choosing quickly</h2>
<p>Bill enterprises? Corporate. Bill other creatives? Minimal or Creative. Bill consumers? Blue or Classic. Everything else: Modern.</p>
<p>Preview all ten instantly inside the <a href="/invoice-generator">generator</a>.</p>
`,
  },
  {
    slug: "invoice-examples",
    title: "Invoice Examples: 6 Real-World Scenarios Broken Down",
    description:
      "See how a freelance, agency, product, hourly, milestone and international invoice differ — with the exact lines to use.",
    category: "guides",
    date: "2026-06-17",
    readingTime: 7,
    author: "Priya Raman",
    content: `
<h2>1. Freelance project invoice</h2>
<p>One line per deliverable, a fixed fee, Net 14 terms. Reference the accepted proposal number in the notes.</p>
<h2>2. Hourly invoice</h2>
<p>Quantity = hours, unit price = rate. Attach or summarise a timesheet; clients dispute hours far less when the dates are visible.</p>
<h2>3. Agency retainer invoice</h2>
<p>A single retainer line for the month, plus separate lines for out-of-scope work. Show the retainer period explicitly: "Retainer — August 2026".</p>
<h2>4. Product / goods invoice</h2>
<p>Include SKU, quantity, unit price, shipping and tax. Add the delivery address if it differs from the billing address.</p>
<h2>5. Milestone invoice</h2>
<p>"Phase 2 of 3 — 40% of contract value". Always state which milestone and what percentage remains, so the client can forecast.</p>
<h2>6. International invoice</h2>
<p>State the currency in the totals, add your IBAN/SWIFT, note who pays the transfer fee, and include a reverse-charge statement where applicable.</p>
<p>Every scenario above can be produced with the <a href="/invoice-generator">free generator</a> by switching template and currency.</p>
`,
  },
  {
    slug: "freelancer-invoice-guide",
    title: "The Freelancer's Invoice Guide: Get Paid Faster",
    description:
      "Rates, terms, deposits, late fees and follow-ups — a complete invoicing playbook for freelancers and independent contractors.",
    category: "guides",
    date: "2026-06-10",
    readingTime: 9,
    author: "Maya Ellison",
    content: `
<h2>Set terms before you start</h2>
<p>Agree payment terms in writing at proposal stage: deposit percentage, payment schedule, accepted methods and late-payment interest. An invoice cannot enforce terms the client never saw.</p>
<h2>Ask for a deposit</h2>
<p>A 30–50% deposit filters out clients who were never going to pay and covers your opportunity cost. Invoice the deposit as its own document.</p>
<h2>Invoice immediately</h2>
<p>Send the invoice the day the work is delivered. Every week you delay pushes payment out by at least the same amount, because you slot into a later approval cycle.</p>
<h2>Make paying effortless</h2>
<ul>
<li>Bank details on the invoice, not in a separate email.</li>
<li>Offer at least two payment methods.</li>
<li>Put the invoice number in the email subject and the file name.</li>
</ul>
<h2>Chase politely and predictably</h2>
<p>Day 1 after due date: friendly reminder. Day 7: reminder with the original PDF attached. Day 14: firm note referencing late-payment terms. Day 30: pause work and escalate.</p>
<h2>Track everything</h2>
<p>Keep a simple sheet of invoice number, client, amount, date sent, date due, date paid. That single sheet is your cash-flow forecast.</p>
<p>Start with a clean template in the <a href="/invoice-generator">invoice generator</a>.</p>
`,
  },
  {
    slug: "small-business-invoice-guide",
    title: "Small Business Invoicing Guide: Process, Terms and Cash Flow",
    description:
      "Build a repeatable invoicing process for your small business: numbering, approvals, terms, reminders and reconciliation.",
    category: "guides",
    date: "2026-06-03",
    readingTime: 8,
    author: "Daniel Okafor",
    content: `
<h2>Design the process, not just the document</h2>
<p>Most small businesses have a template but no process. Decide who raises invoices, when they go out (weekly batch beats ad hoc), who chases, and where the PDFs are stored.</p>
<h2>Numbering and records</h2>
<p>Use a year-prefixed sequential number and never reuse one. Store a PDF of every invoice in a single folder structure by year and client.</p>
<h2>Choosing payment terms</h2>
<table><thead><tr><th>Terms</th><th>Meaning</th><th>Best for</th></tr></thead><tbody>
<tr><td>Due on receipt</td><td>Pay immediately</td><td>New or one-off clients</td></tr>
<tr><td>Net 14</td><td>Within 14 days</td><td>Small businesses, freelancers</td></tr>
<tr><td>Net 30</td><td>Within 30 days</td><td>Corporate clients</td></tr>
<tr><td>2/10 Net 30</td><td>2% discount if paid in 10 days</td><td>Encouraging early payment</td></tr>
</tbody></table>
<h2>Reconciliation</h2>
<p>Match every incoming payment to an invoice number weekly. Unmatched payments are how businesses accidentally chase clients who already paid.</p>
<h2>Cash-flow tips</h2>
<ul>
<li>Invoice on delivery, not at month end.</li>
<li>Split large projects into milestones.</li>
<li>Charge late interest — and mention it before you need it.</li>
</ul>
<p>Generate consistent documents with the <a href="/invoice-generator">free invoice generator</a>.</p>
`,
  },
  {
    slug: "how-to-send-an-invoice",
    title: "How to Send an Invoice (Email Templates Included)",
    description:
      "The right file format, subject line, recipient and follow-up cadence for invoices that actually get processed.",
    category: "guides",
    date: "2026-05-27",
    readingTime: 6,
    author: "Priya Raman",
    content: `
<h2>Send a PDF, always</h2>
<p>PDFs render identically everywhere and cannot be edited accidentally. Never send a spreadsheet or a word-processor file as your invoice of record.</p>
<h2>Name the file properly</h2>
<p><code>Invoice-2026-0041-AcmeLtd.pdf</code>. Accounts-payable teams handle hundreds of files a week; a descriptive name gets yours filed instead of lost.</p>
<h2>Send it to the right person</h2>
<p>Ask for the accounts-payable address at kickoff. CC your day-to-day contact so they can approve it internally.</p>
<h2>Email template — first send</h2>
<p><em>Subject: Invoice 2026-0041 — Acme Ltd — due 14 Aug 2026</em><br>
Hi Sam, please find attached invoice 2026-0041 for £2,400 covering the August retainer. Payment is due by 14 August; bank details are on the invoice. Happy to answer any questions. Thanks, Priya.</p>
<h2>Email template — polite reminder</h2>
<p><em>Subject: Reminder — invoice 2026-0041 due today</em><br>
Hi Sam, a quick reminder that invoice 2026-0041 (£2,400) is due today. I have re-attached it for convenience. If it is already scheduled, ignore this. Thanks, Priya.</p>
<h2>Escalating</h2>
<p>After 14 days overdue, reference your late-payment terms and ask for a specific payment date rather than a vague update.</p>
<p>Create the PDF first with our <a href="/invoice-generator">generator</a>.</p>
`,
  },
  {
    slug: "common-invoice-mistakes",
    title: "12 Common Invoice Mistakes That Delay Your Payment",
    description:
      "Missing PO numbers, vague descriptions, wrong tax rates — the errors that push invoices to the bottom of the pile, and how to avoid them.",
    category: "invoicing-basics",
    date: "2026-05-20",
    readingTime: 6,
    author: "Daniel Okafor",
    content: `
<h2>The list</h2>
<ol>
<li><strong>No unique invoice number.</strong> Impossible to reference or reconcile.</li>
<li><strong>Missing purchase order number.</strong> Enterprise systems will reject it outright.</li>
<li><strong>Vague line descriptions.</strong> "Consulting" invites questions; questions cost weeks.</li>
<li><strong>No due date.</strong> "Soon" is not a term.</li>
<li><strong>Wrong legal entity.</strong> Bill the company on the contract, not the trading name.</li>
<li><strong>Maths that does not add up.</strong> Always let the tool calculate totals.</li>
<li><strong>Incorrect tax rate or missing tax number.</strong> Blocks the client's own reclaim.</li>
<li><strong>No payment instructions.</strong> Do not make clients ask for your bank details.</li>
<li><strong>Editable file formats.</strong> Send PDF.</li>
<li><strong>Sending to the wrong inbox.</strong> Find accounts payable early.</li>
<li><strong>Invoicing late.</strong> You slip a whole payment cycle.</li>
<li><strong>No follow-up system.</strong> Unchased invoices are paid last.</li>
</ol>
<h2>The fix</h2>
<p>A structured template eliminates eight of the twelve automatically. Our <a href="/invoice-generator">free invoice generator</a> validates totals in real time and keeps required fields visible.</p>
`,
  },
  {
    slug: "tax-invoice-guide",
    title: "Tax Invoice Guide: What It Is and What It Must Show",
    description:
      "A tax invoice lets your customer reclaim the tax they paid. Learn the mandatory fields and the difference from a standard invoice.",
    category: "tax",
    date: "2026-05-13",
    readingTime: 6,
    author: "Maya Ellison",
    content: `
<h2>What makes an invoice a tax invoice</h2>
<p>A tax invoice is a standard invoice plus the specific information a tax authority requires so the buyer can claim an input-tax credit. Miss a field and your customer loses the credit — which is why AP teams check these carefully.</p>
<h2>Typical mandatory fields</h2>
<ul>
<li>The words "Tax Invoice"</li>
<li>Supplier legal name, address and tax registration number</li>
<li>Customer name, address and (for B2B) tax number</li>
<li>Unique sequential number and issue date</li>
<li>Description, quantity and unit price per line</li>
<li>Taxable amount per rate, the rate applied, and tax amount per rate</li>
<li>Total excluding tax, total tax, and total including tax</li>
</ul>
<h2>Multiple tax rates</h2>
<p>If lines carry different rates, group and subtotal them by rate. A single blended tax line is not acceptable in most jurisdictions.</p>
<h2>Exempt and zero-rated supplies</h2>
<p>State the reason for the exemption or zero rating directly on the invoice (for example, "Reverse charge — customer to account for tax").</p>
<h2>Disclaimer</h2>
<p>Tax rules differ by country and change often. Treat this as general guidance and confirm requirements with a qualified accountant. See also our <a href="/blog/gst-invoice-guide">GST</a> and <a href="/blog/vat-invoice-guide">VAT</a> guides.</p>
`,
  },
  {
    slug: "gst-invoice-guide",
    title: "GST Invoice Guide: Fields, Rates and Common Errors",
    description:
      "How a GST invoice differs from a regular invoice, the fields it must carry, and how to handle CGST, SGST and IGST splits.",
    category: "tax",
    date: "2026-05-06",
    readingTime: 7,
    author: "Priya Raman",
    content: `
<h2>What is a GST invoice?</h2>
<p>A GST invoice is the document a registered supplier issues for a taxable supply of goods or services. It carries GST identification numbers for both parties and shows tax split by component where applicable.</p>
<h2>Required fields</h2>
<ul>
<li>Supplier name, address and GSTIN</li>
<li>Consecutive invoice number and date</li>
<li>Recipient name, address and GSTIN (for registered recipients)</li>
<li>Place of supply and state code</li>
<li>HSN or SAC code per line</li>
<li>Taxable value, rate and amount of tax split into components</li>
<li>Whether tax is payable on reverse charge</li>
<li>Signature or digital signature of the supplier</li>
</ul>
<h2>Intra-state vs inter-state</h2>
<p>Intra-state supplies split tax into two equal components; inter-state supplies use a single integrated tax. Getting the place of supply wrong is the most common GST invoicing error.</p>
<h2>Practical tips</h2>
<ul>
<li>Store HSN/SAC codes with your product list so they are never guessed.</li>
<li>Keep a separate series for export invoices.</li>
<li>Issue credit notes rather than editing an issued invoice.</li>
</ul>
<p>Use the notes and tax fields in our <a href="/invoice-generator">invoice generator</a> to capture these details. Always confirm current requirements with your accountant.</p>
`,
  },
  {
    slug: "vat-invoice-guide",
    title: "VAT Invoice Guide: Requirements, Rates and Reverse Charge",
    description:
      "Everything a VAT invoice must show, when a simplified invoice is allowed, and how reverse charge works for cross-border services.",
    category: "tax",
    date: "2026-04-29",
    readingTime: 7,
    author: "Maya Ellison",
    content: `
<h2>Full VAT invoice</h2>
<p>A full VAT invoice must show your VAT number, the customer's details, a unique number, the supply date (tax point), a description per line, the net amount per VAT rate, the rate applied, the VAT amount and the gross total.</p>
<h2>Simplified invoices</h2>
<p>Many jurisdictions allow a simplified VAT invoice below a value threshold — typically showing the gross amount and the VAT rate rather than a full breakdown. Check your local threshold before relying on it.</p>
<h2>Reverse charge</h2>
<p>For many cross-border B2B services the customer accounts for VAT instead of the supplier. Charge zero VAT, show the customer's VAT number, and add the wording "Reverse charge: customer to account for VAT to HMRC/local authority".</p>
<h2>Mixed rates</h2>
<p>Subtotal by rate. Show standard-rated, reduced-rated and zero-rated lines separately, each with its own VAT amount.</p>
<h2>Credit notes</h2>
<p>To correct a VAT invoice, issue a credit note referencing the original invoice number — never amend and resend the original.</p>
<p>This is general information, not tax advice. Build the document in the <a href="/invoice-generator">generator</a> and confirm details with your accountant.</p>
`,
  },
  {
    slug: "professional-invoice-design-tips",
    title: "15 Professional Invoice Design Tips That Improve Payment Speed",
    description:
      "Typography, hierarchy, colour and whitespace choices that make an invoice easier to read, approve and pay.",
    category: "design",
    date: "2026-04-22",
    readingTime: 6,
    author: "Priya Raman",
    content: `
<h2>Hierarchy first</h2>
<ol>
<li>Make the amount due the largest number on the page.</li>
<li>Put the due date directly beside it.</li>
<li>Keep the invoice number top-right where AP teams look first.</li>
<li>Limit yourself to two type sizes for body content.</li>
<li>Right-align every numeric column.</li>
</ol>
<h2>Colour and brand</h2>
<ol start="6">
<li>Use one accent colour, applied to the header and totals only.</li>
<li>Ensure text stays legible when printed in greyscale.</li>
<li>Keep the logo under 60px tall — it is not the hero.</li>
<li>Avoid background images behind text.</li>
<li>Test contrast: light grey on white fails for many readers.</li>
</ol>
<h2>Layout</h2>
<ol start="11">
<li>Give the item table room to breathe with 10–12px row padding.</li>
<li>Use subtle row separators instead of heavy borders.</li>
<li>Keep payment instructions in a bordered block so they are scannable.</li>
<li>Never let a table split awkwardly across pages.</li>
<li>Leave a signature area only if your clients actually require one.</li>
</ol>
<p>All fifteen principles are baked into our <a href="/invoice-templates">ten invoice templates</a>.</p>
`,
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const relatedPosts = (post: Post, limit = 3) =>
  POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => (b.category === post.category ? 1 : 0) - (a.category === post.category ? 1 : 0))
    .slice(0, limit);