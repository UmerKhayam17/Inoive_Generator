import type { PostDraft } from "../blog";

export const GUIDES_2026_POSTS: PostDraft[] = [
  {
    slug: "chatgpt-invoice",
    title: "How to Make an Invoice With ChatGPT (Prompts + Checks)",
    description:
      "Make a ChatGPT invoice the safe way: copy-ready prompts, a worked example, the maths and tax checks to run, and when a free invoice generator is faster.",
    category: "guides",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-write-an-invoice", "invoice-ai-assisted-work", "ai-invoicing-automation"],
    faqs: [
      {
        q: "Can ChatGPT create a PDF invoice I can download?",
        a: "Depending on your plan and the features switched on, ChatGPT can often produce a downloadable file such as a PDF, Word document or spreadsheet using its built-in tools. Results vary: layouts can be plain, fonts can break and numbers can still be wrong. Many people ask ChatGPT for the wording and line items, then build the final PDF in a dedicated invoice generator.",
      },
      {
        q: "Is an invoice written by ChatGPT legally valid?",
        a: "An invoice is valid because of what it contains, not the tool that made it. If it shows the details your jurisdiction requires (seller, buyer, number, date, items, amounts, tax details where registered) it can be a perfectly normal invoice. ChatGPT cannot, however, issue structured e-invoices such as Peppol, ZATCA or India IRN invoices, which must come from a compliant system.",
      },
      {
        q: "Does ChatGPT know the right sales tax or VAT rate?",
        a: "Not reliably. Language models can state outdated or invented rates, especially for US local sales tax, which changes by city and county. Always look up the rate yourself on the official tax authority website or use a calculator, then tell ChatGPT the exact rate to apply rather than asking it to choose one.",
      },
      {
        q: "Is it safe to paste client details into ChatGPT?",
        a: "Treat it like any third-party cloud service. Avoid pasting bank account numbers, tax IDs or personal data you do not need to share, check your data controls in ChatGPT's settings, and follow any confidentiality clause in your client contract. You can use placeholders such as CLIENT_NAME in the prompt and fill the real details in afterwards.",
      },
      {
        q: "What is the best prompt for a ChatGPT invoice template?",
        a: "Give it a role, the exact fields, your numbers and the output format in one message. For example: act as a bookkeeper, create an invoice table with these line items, apply 8.25% tax to the subtotal only, show each calculation, and output it as an HTML table. Specific inputs produce far fewer errors than a vague request to make an invoice.",
      },
      {
        q: "Can ChatGPT number my invoices automatically?",
        a: "No. ChatGPT does not keep a reliable record of numbers you have already issued, so it can repeat or skip numbers between chats. Keep your own sequence in a log or spreadsheet, or use a tool such as an invoice number generator, and give ChatGPT the exact number to print.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To make a ChatGPT invoice, give the chatbot your business and client details, a unique invoice number, dates, each line item with quantity and rate, the exact tax rate and your payment terms, and ask for a formatted table or file. Then check every calculation, the tax rate and the required fields yourself before you export a PDF and send it.</p>

<p>ChatGPT is good at structure and wording. It is not an accounting system: it does not remember your invoice numbers, it can get arithmetic wrong, and it may state tax rules with more confidence than accuracy. This guide gives you prompts that work, a worked example with the numbers checked, and a checklist to run before anything reaches a client. If you just want the finished PDF, our <a href="/invoice-generator">free invoice generator</a> calculates totals for you and runs in your browser without an account.</p>

<h2>Can ChatGPT make an invoice?</h2>
<p>Yes. ChatGPT can draft an invoice layout, write line-item descriptions, turn rough notes or a timesheet into a clean table, suggest payment terms wording and, depending on your plan and features, generate a downloadable file. What it cannot do is guarantee the result is correct or compliant. Think of it as an AI invoice generator for the first draft, with you as the reviewer.</p>
<table><thead><tr><th>Task</th><th>ChatGPT</th><th>Dedicated invoice generator</th></tr></thead><tbody>
<tr><td>Write clear line-item descriptions</td><td>Strong</td><td>You type them</td></tr>
<tr><td>Turn messy notes into line items</td><td>Strong</td><td>Not supported</td></tr>
<tr><td>Calculate totals and tax</td><td>Usually right, sometimes wrong</td><td>Calculated by the tool</td></tr>
<tr><td>Consistent layout every month</td><td>Changes between chats</td><td>Same template each time</td></tr>
<tr><td>Track invoice numbers</td><td>No</td><td>You control the sequence</td></tr>
<tr><td>Structured e-invoices (Peppol, ZATCA, IRN)</td><td>No</td><td>No (needs a compliant e-invoicing system)</td></tr>
</tbody></table>

<h2>What you need before you prompt ChatGPT</h2>
<p>The more exact your inputs, the fewer corrections you will make. Collect these first:</p>
<ul>
<li>Your business name, address, email and tax ID if you are registered (see our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a>)</li>
<li>The client's legal name, billing address and PO number if they gave you one</li>
<li>The invoice number from your own sequence and the issue date</li>
<li>The due date or payment terms, such as Net 15 or Net 30</li>
<li>Each line item: description, quantity or hours, unit rate</li>
<li>The exact tax rate, looked up from an official source, and whether it applies to every line</li>
<li>How you want to be paid: bank details, payment link or accepted methods</li>
</ul>

<h2>ChatGPT invoice prompts you can copy</h2>
<p>Each prompt below is written to reduce guesswork. Replace the capitalised placeholders with your own details.</p>

<h3>Prompt 1: Build a complete invoice from your details</h3>
<blockquote>Act as a careful bookkeeper. Create an invoice using only the details I give you and do not invent anything. Seller: YOUR BUSINESS, ADDRESS, EMAIL, TAX ID. Bill to: CLIENT LEGAL NAME, ADDRESS. Invoice number: INV-2026-0042. Issue date: 24 October 2026. Payment terms: Net 30, so show the due date. Line items: LIST EACH ITEM WITH QTY AND RATE. Apply TAX RATE to the subtotal. Show the calculation for every line, the subtotal, the tax and the total due in USD, rounded to two decimals. Add a payment instructions section and a one-line thank-you note. Output as a clean table.</blockquote>

<h3>Prompt 2: Turn notes or a timesheet into line items</h3>
<blockquote>Here are my rough work notes for October: PASTE NOTES. Group them into 3 to 6 invoice line items with professional, specific descriptions a finance team would approve. Keep my hours exactly as written. Do not add any work I did not list. Return a table with Description, Hours, Rate and Amount at RATE per hour.</blockquote>

<h3>Prompt 3: Create a reusable ChatGPT invoice template</h3>
<blockquote>Create a blank invoice template in HTML with a header for my business details, a bill-to block, invoice number, issue date, due date, PO number, a line-item table with Description, Qty, Rate and Amount, rows for subtotal, discount, tax and total due, and a footer for payment details and notes. Use a simple, print-friendly layout with no colours other than black and one grey.</blockquote>

<h3>Prompt 4: Ask ChatGPT to audit its own invoice</h3>
<blockquote>Check the invoice above line by line. Recalculate every amount, the subtotal, tax and total. List any field a business client would expect that is missing. Do not change the figures I supplied; only report problems.</blockquote>
<p>A self-check prompt catches some errors, but not all of them. You still need to check the numbers yourself.</p>

<h2>Worked example: a ChatGPT invoice with the maths checked</h2>
<p>Say a freelance developer in Texas bills a client for 12 hours of development at $85 an hour and 2 hours of consulting calls at $150 an hour, and the developer has confirmed that the service is taxable at 8.25% for this client. (Whether a service is taxable, and at what rate, depends on the state and locality; check with the state revenue department.)</p>
<table><thead><tr><th>Line</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Development</td><td>12 x $85.00</td><td>$1,020.00</td></tr>
<tr><td>Consulting calls</td><td>2 x $150.00</td><td>$300.00</td></tr>
<tr><td>Subtotal</td><td>$1,020.00 + $300.00</td><td>$1,320.00</td></tr>
<tr><td>Sales tax 8.25%</td><td>$1,320.00 x 0.0825</td><td>$108.90</td></tr>
<tr><td><strong>Total due</strong></td><td>$1,320.00 + $108.90</td><td><strong>$1,428.90</strong></td></tr>
</tbody></table>
<p>When you check a ChatGPT invoice, look for the typical slips: a line total that does not equal quantity times rate, tax applied to the total instead of the subtotal, tax applied to a non-taxable line, rounding each line differently, or a due date that does not match the terms (Net 30 from 24 October 2026 is 23 November 2026). You can confirm the tax figure with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>ChatGPT invoice prompts for specific situations</h2>
<p>The basic prompt covers most invoices. These variations handle the cases where people most often get stuck.</p>
<h3>International client</h3>
<blockquote>Create the invoice in EUR. I am a US-based freelancer billing a client in Germany for services. Do not add US sales tax or German VAT; I will add any tax wording myself after checking with my accountant. Show my bank details placeholder with fields for IBAN, SWIFT/BIC and account name.</blockquote>
<p>Tax on cross-border services depends on where you and your client are registered, which is exactly the kind of judgment ChatGPT should not make for you. Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> explains the usual options.</p>
<h3>Monthly retainer</h3>
<blockquote>Create a retainer invoice for November 2026: a fixed fee of 2,000 USD covering up to 20 hours, plus 3 extra hours at 110 USD per hour approved by the client on 12 November. Show the retainer and the overage as separate lines.</blockquote>
<p>Check the result: 3 x $110 = $330, so the total is $2,000 + $330 = $2,330 before any tax.</p>
<h3>Correcting a mistake</h3>
<blockquote>I issued invoice INV-2026-0042 for 1,428.90 USD but overcharged by 2 hours at 85 USD. Draft a credit note that references the original invoice number and shows the reduction with the tax adjusted at 8.25%.</blockquote>
<p>The credit should be 2 x $85 = $170 plus tax of $170 x 0.0825 = $14.03 (rounded), so $184.03 in total. Never edit and resend an invoice that has already been issued; see <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a>.</p>

<h2>How to turn the ChatGPT output into a PDF invoice</h2>
<ol>
<li><strong>Ask for a downloadable file</strong> if your plan supports file generation, then open it and check it renders properly.</li>
<li><strong>Or copy the HTML or table</strong> into Word or Google Docs, adjust the layout and export as PDF. Our guides to <a href="/blog/how-to-make-an-invoice-in-excel">making an invoice in Excel</a> cover the formula route if you want totals that recalculate.</li>
<li><strong>Or paste the line items into an invoice generator.</strong> Use ChatGPT for the descriptions only, then enter them in the <a href="/invoice-generator">invoice generator</a>, which does the arithmetic and exports a consistent PDF.</li>
</ol>
<p>Whichever route you choose, send a PDF rather than an editable file or a chat transcript. Our guide on <a href="/blog/how-to-send-an-invoice">how to send an invoice</a> includes email wording.</p>

<h2>What to check before sending an AI-made invoice</h2>
<ul>
<li><strong>Arithmetic:</strong> recalculate every line, the subtotal, discount, tax and total.</li>
<li><strong>Tax rate:</strong> confirmed from an official source, not from the chatbot.</li>
<li><strong>Invoice number:</strong> taken from your own log, unique and in sequence. Our <a href="/blog/invoice-numbering-system">invoice numbering system guide</a> explains why gaps and duplicates cause trouble.</li>
<li><strong>Required fields:</strong> if you are registered for VAT, GST or sales tax, the invoice must show the fields your tax authority requires. Our <a href="/blog/tax-invoice-guide">tax invoice guide</a> lists the usual ones.</li>
<li><strong>Invented details:</strong> delete anything ChatGPT added that you did not give it, such as a made-up address, late fee or legal clause.</li>
<li><strong>Dates:</strong> issue date, due date and service period are correct.</li>
<li><strong>Payment details:</strong> bank details typed by you and double-checked, never generated.</li>
</ul>

<h2>Common mistakes when using ChatGPT for invoices</h2>
<ul>
<li><strong>Asking it to choose the tax rate.</strong> Rates change and vary by place. Give it the rate.</li>
<li><strong>Letting it number invoices.</strong> It has no reliable memory of your sequence across chats.</li>
<li><strong>Pasting sensitive data you do not need to share.</strong> Use placeholders for bank details and personal IDs.</li>
<li><strong>Accepting vague descriptions.</strong> "Services rendered" invites queries. Ask for specific deliverables and dates.</li>
<li><strong>Sending a different layout every month.</strong> Clients' accounts teams process familiar formats faster. Fix one template and reuse it.</li>
<li><strong>Assuming it can file e-invoices.</strong> Where a structured e-invoice is mandatory, ChatGPT output is not a substitute. See our <a href="/blog/e-invoicing-guide">e-invoicing guide</a>.</li>
</ul>

<h2>Is ChatGPT or an invoice generator better for invoicing?</h2>
<p>Use ChatGPT when the hard part is the words: summarising a month of work, writing line items for a complicated project or drafting a polite cover email. Use an invoice generator or accounting software when the hard part is consistency: the same layout, totals you do not have to recheck, and a repeatable process. Many freelancers combine the two. If you bill for work done with AI tools, our guide to <a href="/blog/invoice-ai-assisted-work">pricing and invoicing AI-assisted work</a> covers how to describe it on the invoice.</p>

<h2>Next step</h2>
<p>Use the prompts above to draft your line items, check them against the list, then drop them into the <a href="/invoice-generator">free invoice generator</a> to produce a clean PDF. For the full field-by-field walkthrough, read <a href="/blog/how-to-write-an-invoice">how to write an invoice</a>. For OpenAI's own guidance on data controls and file features, see the <a href="https://help.openai.com/" target="_blank" rel="noopener noreferrer">OpenAI Help Center</a>.</p>
`,
  },
  {
    slug: "qr-code-on-invoice",
    title: "QR Code on Invoice: ZATCA, FBR, UPI and SEPA QR Explained",
    description:
      "QR code on invoice explained: ZATCA TLV fields, FBR and India e-invoice QR, UPI and EPC (SEPA) payment QR codes, what each contains and when it is required.",
    category: "guides",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: ["zatca-e-invoicing-guide", "fbr-e-invoicing-pakistan", "bank-details-on-invoice"],
    faqs: [
      {
        q: "Can I use any free QR code generator for a ZATCA invoice?",
        a: "Only for a Phase 1 style QR on a simplified invoice, and even then it must contain the five TLV fields encoded in Base64, not a plain text or URL QR. Once you are in a Phase 2 integration wave, the QR must include the invoice hash and cryptographic stamp produced by your compliant e-invoicing solution, so a generic QR generator cannot produce it.",
      },
      {
        q: "Do all banking apps scan EPC QR codes?",
        a: "Support is widespread in some countries, such as Germany, Austria, Belgium and the Netherlands, but it is not universal across the euro area. Always print your IBAN, BIC and payment reference as text next to the QR so a payer whose app cannot scan it can still pay by typing the details.",
      },
      {
        q: "Can a UPI QR code have a fixed amount?",
        a: "Yes. A UPI payment link can carry an amount (the am parameter) together with the payee UPI ID, payee name and a note. When the payer scans it, the app pre-fills the amount. Some apps let the payer change it, so check the amount received against the invoice when you reconcile.",
      },
      {
        q: "Is a QR code legally required on a US or UK invoice?",
        a: "No. Neither the IRS nor HMRC requires a QR code on an ordinary invoice. A payment QR or a QR that links to a payment page is optional and simply makes paying easier. QR codes are mandatory only under specific regimes such as Saudi Arabia's ZATCA rules, Pakistan's FBR integration and India's e-invoicing system.",
      },
      {
        q: "Where should the QR code go on an invoice?",
        a: "Place it near the total or in the payment section, at a size that scans easily when printed or viewed on screen, with clear white space around it. Tax QR codes such as ZATCA or FBR codes are usually placed near the invoice number or footer. Do not shrink a QR so much that a phone camera struggles to read it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A QR code on an invoice does one of two jobs. A tax QR code (ZATCA in Saudi Arabia, FBR in Pakistan, IRP-signed codes in India) lets anyone verify the invoice and is mandatory under those regimes. A payment QR code (EPC/SEPA in Europe, UPI in India) pre-fills a bank transfer and is optional. Each follows its own data format.</p>

<p>That distinction matters, because a QR made with a generic invoice QR code generator is fine for payments but usually useless for tax compliance. This guide explains what each major QR format contains, who has to use it, and how to add one correctly. Our <a href="/invoice-generator">free invoice generator</a> creates clean PDF invoices but does not add QR codes at the time of writing, so we are clear below about which codes you can create yourself and which must come from a certified system.</p>

<h2>Why put a QR code on an invoice?</h2>
<ul>
<li><strong>Verification:</strong> tax authorities use QR codes so buyers and inspectors can check that an invoice was reported or cleared and has not been altered.</li>
<li><strong>Faster payment:</strong> a payment QR fills in the payee name, account, amount and reference, so the payer does not mistype them.</li>
<li><strong>Fewer reconciliation problems:</strong> a correct reference travels with the payment, so you can match it to the invoice.</li>
</ul>

<h2>Tax QR code vs payment QR code</h2>
<table><thead><tr><th>QR type</th><th>Where</th><th>Mandatory?</th><th>Who creates the content</th></tr></thead><tbody>
<tr><td>ZATCA e-invoice QR</td><td>Saudi Arabia</td><td>Yes, on tax invoices under the e-invoicing rules</td><td>Your compliant e-invoicing solution (Phase 2 adds cryptographic data)</td></tr>
<tr><td>FBR invoice QR</td><td>Pakistan</td><td>Yes, for businesses integrated with FBR (POS retailers, digital invoicing)</td><td>FBR's system via your integrated software</td></tr>
<tr><td>India e-invoice signed QR</td><td>India</td><td>Yes, on B2B e-invoices for businesses in scope</td><td>The Invoice Registration Portal (IRP)</td></tr>
<tr><td>EPC QR (SEPA credit transfer)</td><td>Euro payments in the EEA</td><td>No</td><td>You or your software</td></tr>
<tr><td>UPI QR</td><td>India (INR)</td><td>No</td><td>You, your bank or your payment provider</td></tr>
<tr><td>Swiss QR-bill</td><td>Switzerland</td><td>Standard payment slip format since the old slips were withdrawn in 2022</td><td>You or your software</td></tr>
</tbody></table>
<p>Other regimes also use QR codes on invoices, including Portugal (alongside the ATCUD code) and Malaysia's MyInvois validated e-invoices. Confirm the current rules with the local tax authority if you invoice in those countries.</p>

<h2>ZATCA QR code: what the TLV fields contain</h2>
<p>Saudi Arabia's ZATCA requires QR codes as part of its e-invoicing (Fatoora) rules. The QR content is not plain text: it is a series of TLV (tag, length, value) records, encoded in Base64. Each record is one byte for the tag number, one byte for the length of the value, then the value itself.</p>
<h3>Phase 1 fields (tags 1 to 5)</h3>
<table><thead><tr><th>Tag</th><th>Field</th></tr></thead><tbody>
<tr><td>1</td><td>Seller's name</td></tr>
<tr><td>2</td><td>Seller's VAT registration number</td></tr>
<tr><td>3</td><td>Invoice date and time (timestamp)</td></tr>
<tr><td>4</td><td>Invoice total including VAT</td></tr>
<tr><td>5</td><td>VAT total</td></tr>
</tbody></table>
<h3>Phase 2 additions (tags 6 to 9)</h3>
<p>Once a business is integrated with ZATCA's Fatoora platform in Phase 2, the QR also carries cryptographic data: the hash of the XML invoice, the ECDSA signature (cryptographic stamp), the public key and, for simplified invoices, ZATCA's signature over the stamp's certificate. Descriptions of tags 7 to 9 vary slightly between software vendors, so treat ZATCA's own XML implementation standard as the authority. In Phase 2, standard (B2B) tax invoices are cleared by ZATCA and simplified (B2C) invoices are reported within 24 hours. Our <a href="/blog/zatca-e-invoicing-guide">ZATCA e-invoicing guide</a> covers the phases, and our <a href="/blog/zatca-phase-2-wave-25">ZATCA Phase 2 Wave 25 checklist</a> covers the current integration deadline.</p>
<h3>Worked example: Phase 1 values</h3>
<p>A seller issues a simplified invoice for SAR 2,000 before VAT. VAT at 15% is SAR 2,000 x 0.15 = SAR 300, so the total is SAR 2,300. Tag 4 holds 2300.00 and tag 5 holds 300.00. If the seller name is "Al Noor Trading" (15 characters), tag 1 is written as the byte 01, the length byte 0F (15 in hexadecimal), then the 15 bytes of the name. All five records are joined and Base64-encoded before being turned into a QR image. Arabic names take more bytes than characters in UTF-8, so software must count bytes, not letters.</p>

<h2>FBR QR code on invoices in Pakistan</h2>
<p>Pakistan's Federal Board of Revenue uses QR codes in two integration systems:</p>
<ul>
<li><strong>POS integration for Tier-1 retailers.</strong> Invoices from integrated retailers carry an FBR invoice number and a QR code. According to FBR, a customer can verify the invoice in the Tax Asaan app (FBR POS menu, then Verify Invoice, entering the number or scanning the QR) or by SMS to 9966.</li>
<li><strong>Digital invoicing for sales tax registered persons.</strong> Under S.R.O. 69(I)/2025, registered persons are required to integrate their invoicing systems with FBR. Reports describe each invoice receiving an FBR invoice reference number and a QR code for verification.</li>
</ul>
<p>In both cases the number and QR come from FBR's system through your integrated software, so you cannot create a valid FBR QR code with a generic generator. The Finance Act 2026 is reported to extend QR-based verification to some small retailers; see our <a href="/blog/finance-act-2026-pakistan-sales-tax">Finance Act 2026 Pakistan sales tax guide</a> and <a href="/blog/fbr-e-invoicing-pakistan">FBR e-invoicing guide</a>, and confirm details with <a href="https://www.fbr.gov.pk/" target="_blank" rel="noopener noreferrer">FBR</a>.</p>

<h2>India e-invoice QR code (IRP signed QR)</h2>
<p>When an Indian business in scope of GST e-invoicing uploads an invoice to the Invoice Registration Portal, the IRP returns an Invoice Reference Number (IRN) and a digitally signed QR code. The QR typically contains the supplier and buyer GSTINs, the invoice number and date, invoice value, number of line items, HSN code of the main item and the IRN, and it can be verified offline using the GSTN public key. You print the IRP's QR on the invoice copy; you do not build it yourself. Very large businesses also have dynamic QR obligations on B2C invoices. See our guide to the <a href="/blog/india-e-invoice-limit">GST e-invoice limit</a> for who is in scope.</p>

<h2>EPC QR code (SEPA QR) for euro invoices</h2>
<p>The EPC QR code, sometimes called a GiroCode or SEPA QR, is defined by the European Payments Council's guideline EPC069-12. Scanning it in a supporting banking app pre-fills a SEPA credit transfer. The payload is plain text with one field per line:</p>
<table><thead><tr><th>Line</th><th>Field</th><th>Notes</th></tr></thead><tbody>
<tr><td>1</td><td>Service tag</td><td>Always BCD</td></tr>
<tr><td>2</td><td>Version</td><td>001 or 002</td></tr>
<tr><td>3</td><td>Character set</td><td>1 = UTF-8, 2 = ISO 8859-1 and others</td></tr>
<tr><td>4</td><td>Identification</td><td>Always SCT (SEPA credit transfer)</td></tr>
<tr><td>5</td><td>BIC</td><td>Required in version 001, optional in 002 within the EEA</td></tr>
<tr><td>6</td><td>Beneficiary name</td><td>Up to 70 characters</td></tr>
<tr><td>7</td><td>IBAN</td><td>The account to be paid</td></tr>
<tr><td>8</td><td>Amount</td><td>EUR plus amount, for example EUR1190.00 (optional)</td></tr>
<tr><td>9</td><td>Purpose code</td><td>Optional, four characters</td></tr>
<tr><td>10</td><td>Structured creditor reference</td><td>Optional; use this or line 11, not both</td></tr>
<tr><td>11</td><td>Unstructured remittance text</td><td>Optional, up to 140 characters, such as the invoice number</td></tr>
<tr><td>12</td><td>Information to the payer</td><td>Optional</td></tr>
</tbody></table>
<p>The guideline also fixes the QR error correction level at M. For an invoice of EUR 1,000 net plus 19% German VAT (EUR 1,000 x 0.19 = EUR 190), line 8 reads EUR1190.00 and line 11 might read INV-2026-0042. Always repeat the IBAN and reference in text beside the code; our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> covers the formats. The full specification is published by the <a href="https://www.europeanpaymentscouncil.eu/" target="_blank" rel="noopener noreferrer">European Payments Council</a>.</p>

<h2>UPI QR code on an invoice</h2>
<p>In India, a UPI QR code encodes a UPI payment link that starts with upi://pay followed by parameters. The common ones are:</p>
<ul>
<li><strong>pa</strong>: payee UPI ID (VPA), for example yourbusiness@bank</li>
<li><strong>pn</strong>: payee name</li>
<li><strong>am</strong>: amount, such as 11800.00</li>
<li><strong>cu</strong>: currency, INR</li>
<li><strong>tn</strong>: transaction note, such as the invoice number</li>
<li><strong>tr</strong>: transaction reference, required for dynamic merchant QR codes</li>
</ul>
<p>A static UPI QR (just your UPI ID) can sit on every invoice; a dynamic QR includes the amount and reference for one invoice. For an invoice of ₹10,000 plus 18% GST (₹1,800), the amount would be 11800.00. Merchant QR rules and limits are set by NPCI and your bank, so check with your provider. In Pakistan, the comparable instant-payment QR is Raast; see our <a href="/blog/raast-business-payments-pakistan">Raast for business guide</a>.</p>

<h2>How to add a QR code to your invoice</h2>
<ol>
<li><strong>Decide which job the QR does.</strong> Tax verification or payment. If it is tax, the content must come from your compliant system.</li>
<li><strong>For tax QR codes,</strong> use e-invoicing or POS software that is integrated with the authority (ZATCA, FBR or the IRP). The software prints the code for you.</li>
<li><strong>For payment QR codes,</strong> generate the code from your banking app, payment provider or a library that follows the EPC or UPI format. Test-scan it with at least two apps before sending.</li>
<li><strong>Place it near the total</strong> with the payment details also written as text.</li>
<li><strong>Use one QR per invoice</strong> when it includes an amount, so the reference and amount always match that invoice.</li>
</ol>

<h2>Common mistakes with invoice QR codes</h2>
<ul>
<li>Using a plain text or URL QR where a regulated TLV or signed QR is required.</li>
<li>Reusing a QR that carries last month's amount or reference.</li>
<li>Printing the code too small or on a busy background.</li>
<li>Omitting the IBAN, UPI ID or reference in text, leaving non-scanning payers stuck.</li>
<li>Encoding a payment QR with someone else's account after copying a template. Fraudsters also swap QR codes, so tell clients how to verify your details; see our guide to <a href="/blog/invoice-scams">invoice scams</a>.</li>
</ul>

<h2>Checklist: QR code on invoice</h2>
<ul>
<li>Is a tax QR legally required where you are registered? If yes, is it produced by a compliant system?</li>
<li>Does a payment QR follow the EPC or UPI format exactly?</li>
<li>Do the amount and reference match the invoice?</li>
<li>Have you test-scanned it on screen and on paper?</li>
<li>Are payment details also shown as text?</li>
</ul>

<p><strong>Important:</strong> This is general information, not tax or legal advice. QR code rules change, especially as e-invoicing mandates expand. Confirm current requirements with the relevant authority, such as <a href="https://zatca.gov.sa/" target="_blank" rel="noopener noreferrer">ZATCA</a> in Saudi Arabia or FBR in Pakistan.</p>

<h2>Next step</h2>
<p>If no tax QR is required where you operate, create your invoice in the <a href="/invoice-generator">free invoice generator</a>, add your payment details and reference clearly, and attach a bank or UPI QR if you use one. If you are in Saudi Arabia, Pakistan or India and in scope of e-invoicing, start with the relevant guide above and choose integrated software. For a payment link alternative to a QR, see <a href="/blog/add-payment-link-to-invoice">how to add a payment link to an invoice</a>.</p>
`,
  },
  {
    slug: "how-to-send-peppol-invoice",
    title: "How to Send a Peppol Invoice as a Small Business",
    description:
      "How to send a Peppol invoice step by step: pick an access point, get a Peppol ID, find your customer's ID, meet BIS Billing 3.0 rules and confirm delivery.",
    category: "guides",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: ["what-is-peppol", "e-invoice-vs-pdf-invoice", "belgium-poland-e-invoicing-mandates"],
    faqs: [
      {
        q: "Can I send a Peppol invoice for free?",
        a: "Sometimes. Some accounting packages include Peppol sending in their plans, and some access points offer free or low-volume tiers, while others charge per document or by subscription. Pricing changes often, so compare current plans on providers' official websites. You cannot avoid an access point altogether, because every Peppol message must be sent through one.",
      },
      {
        q: "Do I need a Peppol ID to receive invoices?",
        a: "Yes. To receive Peppol invoices, your Peppol ID must be registered in the network's metadata (SMP) by your access point with the document types you can receive. In countries such as Belgium, where businesses must be able to receive structured e-invoices, registering to receive is often the first thing to do, even before you send.",
      },
      {
        q: "What happens if my customer is not on Peppol?",
        a: "The access point cannot deliver a Peppol message to a buyer that is not registered. Check the Peppol Directory first. If they are not listed, ask whether they have an ID with another provider. If no e-invoicing obligation applies to the transaction, you can usually send a PDF invoice by email instead, but confirm your local rules.",
      },
      {
        q: "Can I switch Peppol access points later?",
        a: "Yes. Your Peppol ID belongs to your business, not the provider. To move it, your current access point normally has to deregister it from its SMP before the new provider can register it. Plan the switch so there is no gap in which invoices sent to you cannot be delivered.",
      },
      {
        q: "Is Peppol BIS Billing 3.0 the same as EN 16931?",
        a: "Peppol BIS Billing 3.0 is a specification built on the European standard EN 16931. It uses the EN 16931 data model, adds Peppol-specific rules, and can be expressed in UBL or CII syntax, with UBL the most common. Some countries also add national rules, such as Germany's XRechnung CIUS or the UAE's PINT AE.",
      },
      {
        q: "Can I convert a PDF invoice into a Peppol invoice?",
        a: "Some access points offer a portal where you type invoice details or upload a document that they convert to Peppol BIS. The result is a new structured XML invoice; the PDF itself is not sent as the legal invoice, though it may be attached as a supporting document. Check the extracted data before sending.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To send a Peppol invoice, sign up with a certified Peppol access point (often built into your accounting software), register your Peppol ID, look up your customer's Peppol ID in the Peppol Directory, create the invoice in Peppol BIS Billing 3.0 format with all required fields, then send it through the access point and confirm it was delivered.</p>

<p>Peppol is a delivery network, not a piece of software. You never connect to it directly: every Peppol invoice travels from your access point to your customer's access point. This guide walks through the practical steps for a small business. For the background on the four-corner model and identifiers, start with our explainer on <a href="/blog/what-is-peppol">what Peppol is</a>.</p>

<p>One honest note before you start: our <a href="/invoice-generator">free invoice generator</a> creates PDF invoices. It does not create Peppol XML or connect to an access point. Where a Peppol invoice is required, you need a Peppol-enabled service; a PDF is still useful for clients outside any mandate.</p>

<h2>Do you need to send Peppol invoices?</h2>
<p>You need Peppol when the law or your customer requires a structured e-invoice delivered over the network. Common triggers:</p>
<ul>
<li><strong>A national B2B mandate built on Peppol.</strong> Belgium's B2B e-invoicing obligation, live since 1 January 2026, is the clearest example. See our comparison of <a href="/blog/belgium-poland-e-invoicing-mandates">Belgium and Poland e-invoicing mandates</a>.</li>
<li><strong>Public sector customers.</strong> Many governments, including several in Europe, Australia, New Zealand and Singapore, accept or require Peppol for supplier invoices.</li>
<li><strong>Upcoming mandates.</strong> The UAE's e-invoicing system is Peppol-based and phases in from 2027; see our <a href="/blog/uae-e-invoicing-2027">UAE e-invoicing 2027 guide</a>. Our <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates 2027 list</a> tracks other countries.</li>
<li><strong>A large customer's request.</strong> Some buyers ask suppliers to invoice via Peppol even where no law requires it.</li>
</ul>
<p>Not every e-invoicing country uses Peppol. Clearance systems such as Saudi Arabia's ZATCA or Italy's SdI work differently; our post on <a href="/blog/peppol-vs-clearance-model">Peppol vs the clearance model</a> explains the difference.</p>

<h2>What you need before you send a Peppol invoice</h2>
<table><thead><tr><th>Item</th><th>What it is</th><th>Where it comes from</th></tr></thead><tbody>
<tr><td>Peppol access point</td><td>A certified service provider that sends and receives on the network</td><td>Your accounting software or a standalone provider</td></tr>
<tr><td>Your Peppol ID</td><td>Scheme code plus identifier, for example 0208:0123456789</td><td>Registered by your access point in the SMP</td></tr>
<tr><td>Customer's Peppol ID</td><td>Their address on the network</td><td>Peppol Directory, or ask the customer</td></tr>
<tr><td>Invoice data in BIS Billing 3.0</td><td>A structured XML invoice</td><td>Generated by your software or the provider's portal</td></tr>
<tr><td>Buyer reference or PO number</td><td>Needed by Peppol rules and by many buyers</td><td>Your customer</td></tr>
</tbody></table>

<h2>How to send a Peppol invoice: step by step</h2>
<h3>Step 1: Choose a Peppol access point</h3>
<p>You have three common routes:</p>
<ul>
<li><strong>Accounting software with built-in Peppol.</strong> Easiest if you already use one. You enable e-invoicing, confirm your company details and the software handles registration and sending.</li>
<li><strong>A standalone e-invoicing portal.</strong> You type or upload invoices on the provider's website. Useful if you send only a few invoices a month and do not use accounting software.</li>
<li><strong>An API integration.</strong> For businesses with their own billing system.</li>
</ul>
<p>When comparing providers, check that they are a certified Peppol service provider (OpenPeppol publishes the list of members and service providers), whether they support both sending and receiving, which countries' rules they validate against, whether they archive invoices, and current pricing on their official pricing page. Pricing models range from free tiers to per-document fees, so compare at the time you sign up rather than relying on old lists.</p>

<h3>Step 2: Register your Peppol ID</h3>
<p>A Peppol ID combines an identifier scheme code and your business identifier. Your access point registers it in its Service Metadata Publisher (SMP), which is how other access points find you. Examples of scheme codes:</p>
<table><thead><tr><th>Scheme code</th><th>Identifier</th></tr></thead><tbody>
<tr><td>0208</td><td>Belgian enterprise (company) number</td></tr>
<tr><td>9925</td><td>Belgian VAT number</td></tr>
<tr><td>0088</td><td>GLN (Global Location Number)</td></tr>
<tr><td>0192</td><td>Norwegian organisation number</td></tr>
<tr><td>0151</td><td>Australian Business Number (ABN)</td></tr>
<tr><td>0195</td><td>Singapore UEN</td></tr>
<tr><td>0204</td><td>German Leitweg-ID (public sector buyers)</td></tr>
</tbody></table>
<p>The provider will ask for your legal name, registration number, VAT number, address and contact details, and may take a short time to validate them. If you were registered with another provider before, that registration must be removed first, because one ID can only be active at one SMP for a given document type.</p>

<h3>Step 3: Find your customer's Peppol ID</h3>
<p>Search the public <a href="https://directory.peppol.eu/" target="_blank" rel="noopener noreferrer">Peppol Directory</a> by company name, country or identifier, or ask your customer's accounts payable team. Many businesses now print their Peppol ID on purchase orders and supplier onboarding forms. Store it in your customer record so every future invoice is addressed correctly. If the customer is not registered, Peppol delivery is not possible; see the FAQ below on what to do next.</p>

<h3>Step 4: Create a Peppol BIS Billing 3.0 invoice</h3>
<p>Peppol BIS Billing 3.0 is the standard invoice and credit note format on the network. It follows the European semantic model EN 16931, so the invoice is data, not a picture of a page. Your software maps your fields to that model. Key fields include:</p>
<ul>
<li>Invoice number, issue date and invoice type code (invoice or credit note)</li>
<li>Buyer reference or purchase order reference (Peppol rules require at least one)</li>
<li>Seller and buyer legal names, addresses, VAT numbers and Peppol endpoint IDs</li>
<li>Line items with quantity, unit code, net price and VAT category and rate</li>
<li>VAT breakdown per rate, invoice totals and amount due</li>
<li>Payment means, such as IBAN and payment reference, and payment terms</li>
</ul>
<p>Our guide to the <a href="/blog/e-invoice-template-en-16931">EN 16931 e-invoice template</a> lists the business terms in more detail. Some countries add their own rules on top of BIS 3.0, so make sure your provider validates for your customer's country.</p>

<h3>Step 5: Validate and send</h3>
<p>Before sending, your access point validates the XML against the Peppol and EN 16931 rules. Typical validation failures are a missing buyer reference, VAT totals that do not add up to the line totals, an invalid VAT category for the rate used, or a wrong endpoint ID. Fix the source data and resend. Once valid, the access point looks up your customer in the SML and SMP and delivers the invoice to their access point.</p>

<h3>Step 6: Confirm delivery and keep records</h3>
<p>Your provider shows a delivery status. Some buyers also return an invoice response message (for example accepted, rejected or under query). Keep the XML invoice as your legal record where the structured invoice is the original, alongside any PDF visualisation, for the retention period your country requires. See our guide to <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</p>

<h2>Worked example: a Belgian agency sends its first Peppol invoice</h2>
<p>A small Belgian design agency bills a retail client for a EUR 4,000 website project. VAT at 21% is EUR 4,000 x 0.21 = EUR 840, so the amount due is EUR 4,840.</p>
<ol>
<li>The agency turns on Peppol in its accounting software, which registers its ID as 0208 plus its enterprise number.</li>
<li>It searches the Peppol Directory for the client and finds its ID under scheme 0208.</li>
<li>It creates the invoice with the client's PO number as the order reference, one line of EUR 4,000 at VAT category S (standard) and 21%, a VAT breakdown of EUR 840 and a total of EUR 4,840, and its IBAN as the payment means.</li>
<li>The software validates and sends. The status shows delivered within minutes, and the client's software imports the invoice without retyping.</li>
</ol>

<h2>How much does it cost to send a Peppol invoice?</h2>
<p>There is no single network fee you pay to Peppol itself; you pay your access point or software provider under its own pricing. Models seen in the market include invoicing included in an accounting subscription, a free allowance of documents per month, per-document charges and enterprise contracts. Receiving is sometimes priced differently from sending. Because prices change frequently, compare current offers on each provider's official pricing page, and factor in whether you also need archiving, multi-country validation or integration with your bank.</p>

<h2>How to send a Peppol credit note</h2>
<p>A correction is sent as a separate Peppol BIS credit note, not by editing the original. It references the original invoice number, shows the corrected lines and VAT, and travels through the same access points. For example, if the agency in the worked example above had to refund EUR 500 of the fee, the credit note would show EUR 500 net, VAT of EUR 500 x 0.21 = EUR 105 and a total credit of EUR 605. Our <a href="/blog/credit-note-guide">credit note guide</a> covers when to issue one.</p>

<h2>Common mistakes when sending Peppol invoices</h2>
<ul>
<li><strong>Emailing a PDF and assuming it counts.</strong> Under a Peppol mandate, the structured XML is the invoice. Our comparison of an <a href="/blog/e-invoice-vs-pdf-invoice">e-invoice vs a PDF invoice</a> explains why.</li>
<li><strong>Registering to send but not to receive.</strong> In mandate countries, you usually must be able to receive too.</li>
<li><strong>Using the wrong identifier scheme</strong> for the customer, so the invoice cannot be routed.</li>
<li><strong>Leaving out the buyer reference or PO.</strong> It is a common cause of validation errors and payment delays.</li>
<li><strong>Rounding VAT per line</strong> in a way that does not match the VAT breakdown.</li>
</ul>

<h2>Peppol invoice checklist</h2>
<ul>
<li>Access point chosen and Peppol ID registered for sending and receiving</li>
<li>Customer's Peppol ID found and saved</li>
<li>Buyer reference or PO number captured</li>
<li>VAT categories, rates and totals correct</li>
<li>Payment means and terms included</li>
<li>Delivery status checked and XML archived</li>
</ul>

<p><strong>Important:</strong> This is general information, not tax or legal advice. E-invoicing obligations, formats and dates differ by country and change often. Confirm what applies to you with your national tax authority and see <a href="https://peppol.org/" target="_blank" rel="noopener noreferrer">OpenPeppol</a> for official network information.</p>

<h2>Next step</h2>
<p>Check whether your customers or your country require Peppol, then compare Peppol-enabled accounting software and access points. If you are not yet in scope, keep sending clear PDFs from the <a href="/invoice-generator">invoice generator</a>, and read our broader <a href="/blog/e-invoicing-guide">e-invoicing guide</a> so you are ready when a mandate reaches you.</p>
`,
  },
  {
    slug: "arabic-english-invoice",
    title: "Arabic-English Invoice: Bilingual Tax Invoice for UAE and KSA",
    description:
      "Arabic invoice rules for Saudi Arabia and UAE: when a bilingual Arabic-English tax invoice is required, the labels to use, a sample layout and common errors.",
    category: "guides",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Arab Emirates and Saudi Arabia",
    related: ["uae-vat-invoice-requirements", "zatca-e-invoicing-guide", "uae-e-invoicing-2027"],
    faqs: [
      {
        q: "Can a Saudi tax invoice be in English only?",
        a: "No. Saudi VAT regulations require tax invoices to be in Arabic, and other languages may be added alongside. ZATCA has cited the Arabic requirement when listing invoice non-compliance, including invoices with English-only descriptions. A bilingual Arabic-English invoice is the common way to meet the rule while keeping invoices readable for non-Arabic speakers.",
      },
      {
        q: "Do I need an Arabic invoice for a client in the UAE?",
        a: "Generally not for VAT purposes today. Secondary sources and practitioners report that English tax invoices are accepted, but the FTA may ask for records to be translated into Arabic, and courts and some government bodies work in Arabic. Many UAE businesses use bilingual invoices for that reason. Confirm the current position with the FTA.",
      },
      {
        q: "Do numbers on an Arabic invoice have to use Eastern Arabic numerals?",
        a: "We are not aware of a rule that requires Eastern Arabic numerals (such as ١٢٣) on UAE or Saudi invoices, and Western digits are widely used on bilingual invoices. What matters is that amounts, VAT and totals are clear and consistent. If a client or authority asks for a particular style, follow it.",
      },
      {
        q: "What is a simplified tax invoice in Arabic?",
        a: "In Saudi Arabia a simplified tax invoice is labelled فاتورة ضريبية مبسطة. It is used mainly for B2C sales and needs fewer buyer details than a standard tax invoice, but it still has to meet ZATCA's e-invoicing rules, including the QR code. The UAE also allows simplified tax invoices in certain cases.",
      },
      {
        q: "How should I translate my business name on an Arabic invoice?",
        a: "Use the Arabic name exactly as it appears on your commercial registration or trade licence, if one is registered, rather than translating it yourself. If you only have an English registered name, many businesses show it in Latin script or a consistent transliteration. Your VAT number must be identical on both language versions.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In Saudi Arabia, a VAT tax invoice must be in Arabic, and you may add English or another language alongside it, so a bilingual Arabic invoice is the practical standard. In the UAE, English tax invoices are generally accepted, but the FTA can ask for Arabic translations, so many businesses issue bilingual Arabic-English invoices anyway.</p>

<p>This guide explains what "Arabic invoice" means in each country, which labels to use for a bilingual tax invoice (فاتورة ضريبية), a worked example with VAT in local currency, and the mistakes that cause invoices to be rejected. For the full list of UAE invoice fields, see our guide to <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a>; for Saudi e-invoicing, see our <a href="/blog/zatca-e-invoicing-guide">ZATCA e-invoicing guide</a>.</p>

<h2>What is a bilingual Arabic-English invoice?</h2>
<p>A bilingual invoice shows every label, and usually every description, in both Arabic and English. The data is entered once: the invoice number, dates, VAT number and amounts are the same for both languages. Arabic text reads right to left, so a typical layout places Arabic labels on the right and English labels on the left of each field, or stacks the Arabic beneath the English.</p>

<h2>Arabic invoice rules in Saudi Arabia</h2>
<p>Saudi Arabia's VAT Implementing Regulations require a tax invoice to be issued in Arabic, and it may also be issued in another language. ZATCA notices have referred to this rule (paragraph 5 of Article 53), including cases where invoices carried English-only product descriptions. In practice this means:</p>
<ul>
<li>The human-readable invoice must show its content in Arabic. English may sit alongside it.</li>
<li>It applies to both standard tax invoices (فاتورة ضريبية) and simplified tax invoices (فاتورة ضريبية مبسطة), and to related credit and debit notes.</li>
<li>Under ZATCA's e-invoicing (Fatoora) rules, invoices must also be generated by a compliant electronic solution, carry a QR code and, once you are integrated in Phase 2, be cleared or reported in UBL 2.1 XML. The XML element names are in English; the rendered invoice must still show Arabic.</li>
<li>If you invoice in a foreign currency, the VAT amount must also be shown in Saudi riyals.</li>
</ul>
<p>Check your integration wave in our <a href="/blog/zatca-phase-2-wave-25">ZATCA Phase 2 Wave 25 checklist</a>.</p>

<h2>UAE invoice language: is Arabic required?</h2>
<p>The UAE's VAT rules list what a tax invoice must contain, such as the words "Tax Invoice", the supplier's TRN, a sequential number and the VAT amount in AED. Practitioners and software vendors generally report that English is accepted for invoices. The Tax Procedures rules allow records to be kept in Arabic or English, but the Federal Tax Authority can require Arabic translations, and failing to provide them on request can lead to a penalty. We could not find an official FTA statement that requires Arabic on every tax invoice, so treat this as the common reading and confirm it with the <a href="https://tax.gov.ae/" target="_blank" rel="noopener noreferrer">Federal Tax Authority</a>.</p>
<p>Reasons UAE businesses choose bilingual invoices anyway:</p>
<ul>
<li>Arabic documents avoid translation costs if the FTA, a court or a government entity asks for them.</li>
<li>Government and semi-government customers often expect Arabic.</li>
<li>The UAE's Peppol-based e-invoicing system starts phasing in from 2027, and data requirements may change; see our <a href="/blog/uae-e-invoicing-2027">UAE e-invoicing 2027 guide</a>.</li>
</ul>

<h2>UAE vs Saudi Arabia: Arabic invoice requirements compared</h2>
<table><thead><tr><th>Point</th><th>Saudi Arabia (ZATCA)</th><th>UAE (FTA)</th></tr></thead><tbody>
<tr><td>Arabic required on tax invoice?</td><td>Yes, other languages may be added</td><td>Generally not; Arabic translation may be requested</td></tr>
<tr><td>Standard rate</td><td>15%</td><td>5%</td></tr>
<tr><td>Tax ID shown</td><td>VAT registration number (15 digits)</td><td>Tax Registration Number (TRN, 15 digits)</td></tr>
<tr><td>Title</td><td>فاتورة ضريبية / Tax Invoice</td><td>Tax Invoice (Arabic optional)</td></tr>
<tr><td>VAT in local currency if foreign currency used</td><td>Yes, in SAR</td><td>Yes, in AED</td></tr>
<tr><td>E-invoicing</td><td>Mandatory, phased Fatoora integration</td><td>Peppol-based, phased from 2027 (confirm dates)</td></tr>
<tr><td>QR code</td><td>Required</td><td>Not required on paper tax invoices today</td></tr>
</tbody></table>

<h2>Arabic invoice labels: English to Arabic glossary</h2>
<p>Use these as a starting point and have a native speaker or your accountant review your final template.</p>
<table><thead><tr><th>English</th><th>Arabic</th></tr></thead><tbody>
<tr><td>Tax Invoice</td><td>فاتورة ضريبية</td></tr>
<tr><td>Simplified Tax Invoice</td><td>فاتورة ضريبية مبسطة</td></tr>
<tr><td>Credit Note</td><td>إشعار دائن</td></tr>
<tr><td>Debit Note</td><td>إشعار مدين</td></tr>
<tr><td>Invoice Number</td><td>رقم الفاتورة</td></tr>
<tr><td>Invoice Date</td><td>تاريخ الفاتورة</td></tr>
<tr><td>Date of Supply</td><td>تاريخ التوريد</td></tr>
<tr><td>Seller</td><td>البائع</td></tr>
<tr><td>Buyer</td><td>المشتري</td></tr>
<tr><td>VAT Registration Number</td><td>رقم التسجيل الضريبي</td></tr>
<tr><td>Address</td><td>العنوان</td></tr>
<tr><td>Description</td><td>الوصف</td></tr>
<tr><td>Quantity</td><td>الكمية</td></tr>
<tr><td>Unit Price</td><td>سعر الوحدة</td></tr>
<tr><td>Total Excluding VAT</td><td>الإجمالي غير شامل ضريبة القيمة المضافة</td></tr>
<tr><td>VAT</td><td>ضريبة القيمة المضافة</td></tr>
<tr><td>VAT Rate</td><td>نسبة الضريبة</td></tr>
<tr><td>Total Including VAT</td><td>الإجمالي شامل ضريبة القيمة المضافة</td></tr>
<tr><td>Amount Due</td><td>المبلغ المستحق</td></tr>
<tr><td>Due Date</td><td>تاريخ الاستحقاق</td></tr>
<tr><td>Bank Details</td><td>التفاصيل البنكية</td></tr>
</tbody></table>

<h2>How to make an Arabic-English tax invoice: step by step</h2>
<h3>Step 1: Confirm your registered names</h3>
<p>Use your Arabic trade name from your commercial registration or trade licence where one exists, and do the same for the buyer on standard (B2B) invoices.</p>
<h3>Step 2: Build a bilingual header</h3>
<p>Put the title in both languages, for example "Tax Invoice | فاتورة ضريبية". Add the invoice number, invoice date and date of supply with bilingual labels. Keep one set of numbers.</p>
<h3>Step 3: Add seller and buyer blocks</h3>
<p>Show names, addresses and VAT numbers or TRNs. The tax number must be identical in both language versions; our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> covers TRN formats.</p>
<h3>Step 4: Write line items in both languages</h3>
<p>Give each description in Arabic and English, especially in Saudi Arabia where English-only descriptions have been flagged. Show quantity, unit price, net amount, VAT rate and VAT amount.</p>
<h3>Step 5: Show totals and VAT in local currency</h3>
<p>Show the total excluding VAT, VAT and total including VAT. If you invoice in another currency, add the VAT in SAR or AED and the exchange rate used. Our guide to <a href="/blog/foreign-currency-invoice">foreign currency invoices</a> explains how to choose and show the rate.</p>
<h3>Step 6: Check the layout in both directions</h3>
<p>Mixed Arabic and English text can reorder punctuation and numbers in some tools. Check the PDF carefully before sending.</p>

<h2>Sample bilingual invoice layout</h2>
<p>This is a simple structure you can copy into your template. Each row shows English on the left and Arabic on the right, with one shared value.</p>
<table><thead><tr><th>English label</th><th>Value</th><th>Arabic label</th></tr></thead><tbody>
<tr><td>Tax Invoice</td><td>-</td><td>فاتورة ضريبية</td></tr>
<tr><td>Invoice Number</td><td>INV-2026-0118</td><td>رقم الفاتورة</td></tr>
<tr><td>Invoice Date</td><td>24/10/2026</td><td>تاريخ الفاتورة</td></tr>
<tr><td>Seller / TRN</td><td>Your company / 100XXXXXXXXXXXX</td><td>البائع / رقم التسجيل الضريبي</td></tr>
<tr><td>Buyer / TRN</td><td>Client company / 100XXXXXXXXXXXX</td><td>المشتري / رقم التسجيل الضريبي</td></tr>
<tr><td>Description</td><td>Strategy workshop, 2 days / ورشة عمل استراتيجية، يومان</td><td>الوصف</td></tr>
<tr><td>Total Excluding VAT</td><td>AED 10,000.00</td><td>الإجمالي غير شامل ضريبة القيمة المضافة</td></tr>
<tr><td>VAT 5%</td><td>AED 500.00</td><td>ضريبة القيمة المضافة ٥٪</td></tr>
<tr><td>Total Including VAT</td><td>AED 10,500.00</td><td>الإجمالي شامل ضريبة القيمة المضافة</td></tr>
</tbody></table>
<p>Keep labels short so the two languages fit side by side on A4 paper, and use one font that includes Arabic glyphs so the PDF does not fall back to a mismatched typeface.</p>

<h2>Worked examples with the VAT calculated</h2>
<p><strong>UAE:</strong> A Dubai consultancy bills AED 10,000 for a strategy workshop. VAT at 5% is AED 10,000 x 0.05 = AED 500, so the total including VAT (الإجمالي شامل ضريبة القيمة المضافة) is AED 10,500.</p>
<p><strong>Saudi Arabia, foreign currency:</strong> A Riyadh software firm bills a client USD 2,000. Using an exchange rate of 3.75 SAR per USD, the net amount is SAR 7,500. VAT at 15% is USD 300, which is SAR 7,500 x 0.15 = SAR 1,125. The invoice shows USD 2,300 total and VAT of SAR 1,125 with the rate stated. (Confirm which exchange rate source ZATCA expects for your invoice.)</p>

<h2>Common mistakes on Arabic invoices</h2>
<ul>
<li><strong>English-only descriptions in Saudi Arabia</strong> on an otherwise Arabic template.</li>
<li><strong>Machine-translated labels</strong> that are wrong or ambiguous. Have a native speaker review the template once.</li>
<li><strong>Different numbers in each language</strong>, for example a typo in the Arabic copy of the VAT number.</li>
<li><strong>Broken right-to-left text</strong> where letters appear disconnected or reversed in the PDF.</li>
<li><strong>Using a bilingual PDF as a substitute for ZATCA e-invoicing.</strong> In Saudi Arabia the invoice must come from a compliant solution; language is only one requirement.</li>
<li><strong>Missing the "Tax Invoice" title</strong> required on UAE tax invoices.</li>
</ul>

<h2>Can you make an Arabic invoice with a free invoice generator?</h2>
<p>For UAE invoices outside e-invoicing, a well-laid-out PDF is usually enough. Our <a href="/invoice-generator/uae">UAE invoice generator</a> sets AED and a TRN field, and you can type Arabic text into the description and notes fields, but it does not have a dedicated right-to-left or bilingual template at the time of writing, so check the preview before downloading. For Saudi Arabia, a generator cannot replace a ZATCA-compliant e-invoicing solution, which must produce the QR code and, once integrated, the XML.</p>

<h2>Arabic tax invoice checklist</h2>
<ul>
<li>Title in Arabic and English (فاتورة ضريبية / Tax Invoice)</li>
<li>Registered names, addresses and identical VAT number or TRN</li>
<li>Sequential invoice number, invoice date and supply date</li>
<li>Line items described in both languages</li>
<li>VAT rate, VAT amount and totals; VAT in SAR or AED if foreign currency</li>
<li>QR code and compliant e-invoicing solution in Saudi Arabia</li>
<li>Native-speaker review of the template</li>
</ul>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Language and e-invoicing rules are set by <a href="https://zatca.gov.sa/" target="_blank" rel="noopener noreferrer">ZATCA</a> in Saudi Arabia and the Federal Tax Authority in the UAE, and they change. Confirm requirements with the authority or a registered tax agent.</p>

<h2>Next step</h2>
<p>If you bill UAE clients, set up a bilingual template once and generate the PDF with the <a href="/invoice-generator/uae">UAE invoice generator</a>. If you sell in Saudi Arabia, confirm your ZATCA wave and choose compliant e-invoicing software that supports Arabic output. For general VAT invoice rules, see our <a href="/blog/vat-invoice-guide">VAT invoice guide</a>.</p>
`,
  },
  {
    slug: "invoice-email-subject-lines",
    title: "Invoice Email Subject Lines: 25 Examples That Get Paid",
    description:
      "25 invoice email subject line examples for new invoices, reminders, overdue and final notices, plus the formula, a sample invoice email and mistakes to avoid.",
    category: "guides",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-send-an-invoice", "payment-reminder-emails", "invoice-notes-examples"],
    faqs: [
      {
        q: "Should I put the amount in an invoice email subject line?",
        a: "Usually yes. Including the amount and due date helps the recipient and their accounts payable team prioritise and match the invoice. Leave it out if the email goes to a shared inbox where the amount is sensitive, or if the client has asked you not to, and keep it in the body and the attached PDF instead.",
      },
      {
        q: "Is it rude to write OVERDUE in a subject line?",
        a: "Not when it is factual and the invoice really is overdue. Avoid all capitals and exclamation marks, which read as shouting and can trigger spam filters. Overdue: Invoice INV-2026-0042 (due 15 Oct) is clear and professional. Save stronger wording such as final notice for the last stage of your reminder schedule.",
      },
      {
        q: "Should I reply to the original invoice email or start a new one?",
        a: "Replying in the same thread keeps the history and the attachment together, which helps if the client needs context. If the original went to the wrong person, or you are escalating to a new contact, start a fresh email with a full subject line and reattach the invoice PDF so nothing depends on the old thread.",
      },
      {
        q: "What is a good subject line for a receipt or payment confirmation?",
        a: "State that payment was received and identify the invoice, for example Payment received: Invoice INV-2026-0042, thank you. It confirms the account is settled, gives the client a record for their files and closes the loop politely. Attach a receipt if the client needs one for their own books.",
      },
      {
        q: "Can I automate invoice emails and reminders?",
        a: "Yes, with accounting or invoicing software that sends invoices and scheduled reminders. Our free generator creates the PDF but does not send emails or reminders, so you would send the invoice from your own email account using the subject lines in this guide and set calendar reminders for follow-ups.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A good invoice email subject line names the document, the invoice number, your business, and ideally the amount and due date, for example "Invoice INV-2026-0042 from Brightline Studio: $2,400 due 23 Nov". Clear, specific subject lines are easy to find, forward to accounts payable and match to payment.</p>

<p>Your subject line is the first thing a client sees, and often the only thing their finance team searches for later. Below are 25 invoice email subject line examples for every stage, from the first invoice to a final notice, plus the formula behind them and a short invoice email template. Create the invoice itself in our <a href="/invoice-generator">free invoice generator</a>, download the PDF, then send it with one of these lines. For the full sending process, see our guide on <a href="/blog/how-to-send-an-invoice">how to send an invoice</a>.</p>

<h2>What makes a good invoice email subject line?</h2>
<ul>
<li><strong>The word "Invoice" first.</strong> Accounts payable inboxes are often filtered and searched by it.</li>
<li><strong>The invoice number.</strong> It is the reference the client uses to match the payment. Our guide to an <a href="/blog/invoice-numbering-system">invoice numbering system</a> explains how to format it.</li>
<li><strong>Your business name.</strong> The client may deal with dozens of suppliers.</li>
<li><strong>The amount and due date.</strong> They tell the reader what to do and by when.</li>
<li><strong>A PO number</strong> if the client issued one. Many companies cannot approve an invoice without it.</li>
<li><strong>Short and front-loaded.</strong> Mobile inboxes cut subject lines off, so put the invoice number and business name early.</li>
</ul>

<h2>The invoice email subject line formula</h2>
<p><strong>[Document] [Number] from [Your business] - [Amount] due [Date] (PO [Number])</strong></p>
<p>Drop parts you do not need. A one-off invoice to a small client might be "Invoice #1042 from Sam Lee Design". An invoice to a corporate accounts payable address should include the PO.</p>

<h2>25 invoice email subject line examples</h2>
<p>Copy these and swap in your own invoice number, business name, amount and dates. They are grouped by stage so you can escalate politely.</p>
<h3>New invoice email subject lines (1-8)</h3>
<ol>
<li>Invoice INV-2026-0042 from Brightline Studio</li>
<li>Invoice INV-2026-0042: $2,400 due 23 Nov 2026</li>
<li>Brightline Studio invoice INV-2026-0042 for October services</li>
<li>Invoice INV-2026-0042 for PO 45001234 - Brightline Studio</li>
<li>Your invoice for the website redesign (INV-2026-0042)</li>
<li>Invoice INV-2026-0042: Milestone 2 of 3, homepage build</li>
<li>Monthly retainer invoice, November 2026 - Brightline Studio</li>
<li>Deposit invoice INV-2026-0043: 50% to start the project</li>
</ol>
<p>Lines 6 to 8 suit project billing. For deposits and milestones, see our guides to <a href="/blog/deposit-invoice">deposit invoices</a> and <a href="/blog/milestone-payments">milestone payments</a>.</p>

<h3>Friendly reminder subject lines before the due date (9-12)</h3>
<ol start="9">
<li>Reminder: Invoice INV-2026-0042 due Friday 23 Nov</li>
<li>Friendly reminder: invoice INV-2026-0042 due in 3 days</li>
<li>Quick check: did invoice INV-2026-0042 reach the right person?</li>
<li>Upcoming payment: Invoice INV-2026-0042, $2,400</li>
</ol>
<p>Line 11 is useful when you have had no acknowledgement. It gives the client an easy way to forward the invoice without feeling chased.</p>

<h3>Payment reminder subject lines on the due date (13-15)</h3>
<ol start="13">
<li>Invoice INV-2026-0042 is due today</li>
<li>Due today: $2,400 for invoice INV-2026-0042</li>
<li>Payment due today - Brightline Studio invoice INV-2026-0042</li>
</ol>

<h3>Overdue invoice email subject lines (16-21)</h3>
<ol start="16">
<li>Overdue: Invoice INV-2026-0042 (due 23 Nov)</li>
<li>Invoice INV-2026-0042 is 7 days overdue</li>
<li>Following up: unpaid invoice INV-2026-0042</li>
<li>Second reminder: Invoice INV-2026-0042 now overdue</li>
<li>Action needed: overdue invoice INV-2026-0042, $2,400</li>
<li>Can we confirm a payment date for invoice INV-2026-0042?</li>
</ol>
<p>Line 21 works well after two reminders: a question invites a reply with a date rather than silence. Our <a href="/blog/payment-reminder-emails">payment reminder email templates</a> give the body text for each stage, and our guide to handling an <a href="/blog/overdue-invoice">overdue invoice</a> covers what to do next.</p>

<h3>Final notice subject lines (22-23)</h3>
<ol start="22">
<li>Final notice: Invoice INV-2026-0042, payment required by 15 Dec</li>
<li>Final reminder before late fees: Invoice INV-2026-0042</li>
</ol>
<p>Only mention late fees or next steps you are entitled to under your contract or the law, and that you are prepared to take. Our guide to <a href="/blog/late-payment-fees">late payment fees</a> explains how to set them up.</p>

<h3>Payment received and thank-you subject lines (24-25)</h3>
<ol start="24">
<li>Payment received: Invoice INV-2026-0042, thank you</li>
<li>Receipt for invoice INV-2026-0042 - Brightline Studio</li>
</ol>

<h2>Subject lines for special cases</h2>
<p>Some invoices need a subject line that signals something unusual. These variations keep the same structure while telling the reader what is different.</p>
<table><thead><tr><th>Situation</th><th>Example subject line</th></tr></thead><tbody>
<tr><td>Corrected invoice replacing an earlier one</td><td>Corrected invoice INV-2026-0044 (replaces INV-2026-0042)</td></tr>
<tr><td>Credit note</td><td>Credit note CN-2026-0007 for invoice INV-2026-0042</td></tr>
<tr><td>Several invoices at once</td><td>Statement of account: 3 open invoices, $5,150 total</td></tr>
<tr><td>Invoice in a foreign currency</td><td>Invoice INV-2026-0042: EUR 2,200 due 23 Nov 2026</td></tr>
<tr><td>Invoice for an approved change</td><td>Invoice INV-2026-0045 for change order 2 (extra pages)</td></tr>
<tr><td>Resending a lost invoice</td><td>Resending: Invoice INV-2026-0042 from Brightline Studio</td></tr>
</tbody></table>
<p>When several invoices are open, a statement listing each one is clearer than a pile of separate reminders; see our guide to a <a href="/blog/statement-of-account">statement of account</a>. If you correct an invoice, issue a credit note or a new numbered invoice rather than overwriting the old file, as explained in <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a>.</p>

<h2>Subject line vs email body: what goes where</h2>
<p>The subject line identifies the invoice; the body explains it; the PDF is the record. Keep these roles separate:</p>
<ul>
<li><strong>Subject:</strong> document type, number, your business, amount and due date.</li>
<li><strong>Body:</strong> two to five short lines with the amount, due date, how to pay, the PO number and who to contact with questions.</li>
<li><strong>Attachment:</strong> the invoice PDF with every legal and payment detail. Do not paste the full invoice into the email body, where formatting breaks and it is harder to file.</li>
</ul>
<p>Many large companies route supplier invoices to a dedicated accounts payable mailbox or supplier portal, where the subject line may be read by software rather than a person. In that case, follow their instructions exactly: some ask for the PO number first, others for the invoice number only. A subject line that matches their format avoids the invoice being bounced back or parked in a queue.</p>

<h2>Should you personalise or add urgency?</h2>
<p>Adding the client's project name ("Invoice INV-2026-0042: Harbor Cafe website") makes the email feel less automated and helps the client recognise it at a glance. Urgency should match reality: "due today" or "7 days overdue" is factual and fair, while artificial urgency on a new invoice tends to irritate clients who have not had a chance to pay yet. Emoji are best avoided in invoice emails; they can display inconsistently and look out of place in a finance inbox.</p>

<h2>Invoice email template to pair with your subject line</h2>
<blockquote>Subject: Invoice INV-2026-0042 from Brightline Studio: $2,400 due 23 Nov 2026<br><br>Hi Jordan,<br><br>Please find attached invoice INV-2026-0042 for October design work under PO 45001234.<br><br>Amount due: $2,400.00<br>Due date: 23 November 2026 (Net 30)<br>Payment: bank transfer to the account shown on the invoice, using INV-2026-0042 as the reference.<br><br>Let me know if anything needs to change for your approval process.<br><br>Thanks,<br>Alex<br>Brightline Studio</blockquote>
<p>For more wording, see our guide on <a href="/blog/how-to-ask-for-payment">how to ask for payment politely</a>, and add a clear note on the invoice itself using our <a href="/blog/invoice-notes-examples">invoice notes examples</a>.</p>

<h2>Worked example: a reminder sequence with a late fee</h2>
<p>Alex's contract says invoices are due in 30 days and allows a late fee of 1.5% per month on overdue balances. The invoice for $2,400 was issued on 24 October 2026, so it is due on 23 November.</p>
<table><thead><tr><th>Date</th><th>Stage</th><th>Subject line</th></tr></thead><tbody>
<tr><td>24 Oct</td><td>Send</td><td>Invoice INV-2026-0042 from Brightline Studio: $2,400 due 23 Nov</td></tr>
<tr><td>20 Nov</td><td>Before due</td><td>Friendly reminder: invoice INV-2026-0042 due in 3 days</td></tr>
<tr><td>23 Nov</td><td>Due date</td><td>Invoice INV-2026-0042 is due today</td></tr>
<tr><td>30 Nov</td><td>Overdue</td><td>Invoice INV-2026-0042 is 7 days overdue</td></tr>
<tr><td>14 Dec</td><td>Second reminder</td><td>Can we confirm a payment date for invoice INV-2026-0042?</td></tr>
<tr><td>23 Dec</td><td>Final notice</td><td>Final reminder before late fees: Invoice INV-2026-0042</td></tr>
</tbody></table>
<p>If the invoice is still unpaid a month after the due date, the late fee under the contract is $2,400 x 0.015 = $36, making the balance $2,436. Check that any late fee is in your contract and allowed where you and your client are based.</p>

<h2>Invoice email subject line mistakes to avoid</h2>
<ul>
<li><strong>Vague subjects</strong> such as "Hi", "Payment" or "Following up", which are easy to miss and impossible to search.</li>
<li><strong>No invoice number,</strong> so the payment cannot be matched.</li>
<li><strong>All caps, several exclamation marks or words like "URGENT!!!"</strong>, which look aggressive and can trip spam filters.</li>
<li><strong>The same subject for every reminder,</strong> which makes it hard to see the escalation.</li>
<li><strong>Threats you will not act on.</strong> They damage credibility.</li>
<li><strong>Odd attachment names.</strong> Name the PDF to match the subject, for example Brightline-Studio-INV-2026-0042.pdf.</li>
<li><strong>Changed bank details announced in a subject line.</strong> Fraudsters use this trick, so confirm changes by phone; see our guide to <a href="/blog/invoice-scams">invoice scams</a>.</li>
</ul>

<h2>Checklist before you hit send</h2>
<ul>
<li>Subject line includes "Invoice", the number and your business name</li>
<li>Amount, due date and PO number added where useful</li>
<li>PDF attached and named consistently</li>
<li>Email sent to the right accounts payable contact</li>
<li>Follow-up dates set in your calendar</li>
</ul>
<p>If you want independent guidance on email deliverability, Google publishes <a href="https://support.google.com/a/answer/81126" target="_blank" rel="noopener noreferrer">email sender guidelines</a> for messages sent to Gmail users.</p>

<h2>Next step</h2>
<p>Create your invoice in the <a href="/invoice-generator">free invoice generator</a>, download the PDF and send it with subject line 1 or 2. Put your follow-up dates in your calendar now so you do not have to think about the wording later. For tactics beyond email, see <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</p>
`,
  },
];
