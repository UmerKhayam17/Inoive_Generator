import type { PostDraft } from "../blog";

export const EINVOICING_2027_C_POSTS: PostDraft[] = [
  {
    slug: "egypt-e-invoicing",
    title: "Egypt E-Invoice Guide: ETA Portal, E-Receipts and Rules",
    description:
      "Egypt e-invoice rules explained: who must use the ETA portal, how signing and validation work, the B2C e-receipt rollout and what each invoice must contain.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Egypt",
    related: [
      "e-invoicing-guide",
      "peppol-vs-clearance-model",
      "zatca-e-invoicing-guide",
      "qr-code-on-invoice",
    ],
    faqs: [
      {
        q: "Is e-invoicing mandatory in Egypt?",
        a: "Yes, for registered taxpayers. The Egyptian Tax Authority rolled out its e-invoicing system in phases and states that taxpayers across Egypt had to issue electronic tax invoices for all goods sold and services performed as of 15 December 2022. Since 1 April 2023, only businesses that issue electronic tax invoices can deal with the customs system for imports and exports, so the mandate reaches almost every trading company.",
      },
      {
        q: "What is the difference between an e-invoice and an e-receipt in Egypt?",
        a: "The e-invoice covers sales between businesses and to government bodies, where the buyer is usually a registered taxpayer. The e-receipt covers sales to final consumers (B2C), such as shops, restaurants and service providers selling to the public. Both run on the same ETA platform, but e-receipts are issued from registered point-of-sale systems and carry a QR code the customer can scan to check the receipt online.",
      },
      {
        q: "Who must issue e-receipts in Egypt?",
        a: "The e-receipt duty applies to taxpayers named in ETA rollout decisions, not to every business on one date. The authority publishes decisions with attached lists of taxpayers, grouped into phases and sub-phases, each with its own start date. A business should check the ETA e-receipt inquiry service or the latest decision lists to see whether it has been named and from when its B2C sales must go through the system.",
      },
      {
        q: "Do I need a digital signature for Egyptian e-invoices?",
        a: "Yes. The ETA SDK explains that issuers sign each document with an eSeal X.509 certificate configured in their ERP or POS system. The signature lets the platform confirm who issued the document and that it was not changed after signing. Small businesses that type invoices into the ETA portal still need a signing certificate, usually supplied by an approved certification provider.",
      },
      {
        q: "What document types can be submitted to the ETA?",
        a: "The ETA SDK lists invoices, credit notes and debit notes, plus export invoices, export credit notes and export debit notes. For B2C sales there is a separate family of receipt types, including standard receipts, return receipts and sector versions for retail, restaurants, transport, education, professional services and more. Corrections should be made with a credit or debit note rather than by editing a submitted invoice.",
      },
      {
        q: "What VAT rate goes on an Egyptian e-invoice?",
        a: "The general VAT rate in Egypt is 14%, and most standard sales of goods and services carry it. Some goods and services are exempt or taxed under the separate table tax, and exports are generally zero-rated. The e-invoice must show the correct tax type and subtype for each line using the ETA code lists, so the platform can validate the totals before it accepts the document.",
      },
      {
        q: "Can a customer check whether an Egyptian receipt is real?",
        a: "Yes. The ETA runs a public receipt search at invoicing.eta.gov.eg where a customer can scan the QR code on a receipt or paste the receipt link the seller provides. The page shows whether the receipt was submitted to the authority. The ETA has also linked receipts to a consumer reward scheme to encourage buyers to ask for valid e-receipts.",
      },
      {
        q: "Can a foreign freelancer billing an Egyptian company use a normal invoice?",
        a: "A foreign supplier with no Egyptian tax registration is not issuing documents into the ETA system, so it normally sends an ordinary commercial invoice. The Egyptian buyer may have its own obligations, such as accounting for VAT on imported services, and may ask for specific details. Check with the client which fields their accounts team needs before you send the first invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An Egypt e-invoice is a signed, structured invoice submitted to the Egyptian Tax Authority (ETA) platform, which validates it before it counts as a valid tax document. Registered taxpayers have had to issue e-invoices for B2B sales since the rollout finished in December 2022, and B2C sellers named in ETA decisions must issue e-receipts from registered POS systems.</p>

<p>Egypt runs one of the strictest e-invoicing systems in the region. A PDF or a paper invoice is not enough for a registered business: every sale has to pass through the ETA platform, carry a digital seal and get a unique identifier. This guide explains how the Egypt e-invoice system works as of 2026, who is covered by the e-invoice and e-receipt rules, what each document must contain and how small businesses and foreign suppliers fit in. If you only need a clean commercial invoice for a client outside the system, our <a href="/invoice-generator">free invoice generator</a> creates one in a few minutes.</p>

<p><strong>Note:</strong> This is general information, not tax or legal advice. ETA decisions change often, so confirm your own position with the authority or a registered Egyptian tax adviser.</p>

<h2>What an Egypt e-invoice is and how the ETA portal works</h2>

<p>Egypt uses a clearance model. Instead of sending an invoice straight to the customer and reporting it later, the seller submits the invoice data to the ETA first. The platform checks the structure, the tax codes, the taxpayer numbers and the arithmetic, then records the document. Only a document the platform has accepted is a valid tax invoice. If you want a wider view of how this compares to network models such as Peppol, see our guide to <a href="/blog/peppol-vs-clearance-model">Peppol vs the clearance model</a>.</p>

<p>The <a href="https://sdk.invoicing.eta.gov.eg/" target="_blank" rel="noopener noreferrer">ETA e-invoicing and e-receipt SDK</a> describes the moving parts:</p>

<ul>
<li><strong>Taxpayer profile:</strong> each business registers on the ETA portal, appoints representatives and registers the ERP or POS systems that will send documents.</li>
<li><strong>API access:</strong> each registered system gets credentials to request an access token, then calls REST APIs over TLS. Documents can be built in JSON or XML.</li>
<li><strong>Digital seal:</strong> the issuer signs each document with an eSeal X.509 certificate, which proves who issued it and that it was not altered.</li>
<li><strong>Validation:</strong> submission is partly synchronous and partly asynchronous. Systems poll for the result or receive a callback with the document status.</li>
<li><strong>Receiving:</strong> the buyer can see invoices issued to it in its own portal account, which is how input VAT is matched to the seller's output VAT.</li>
</ul>

<p>Businesses with low volumes can key invoices directly into the ETA portal. Larger sellers connect their accounting software through the API, either built in-house or through a service provider. Either way, the logic is the same: no accepted submission, no valid tax invoice.</p>

<h2>Who must issue e-invoices in Egypt</h2>

<p>The <a href="https://portal.eta.gov.eg/en/home" target="_blank" rel="noopener noreferrer">ETA portal</a> states that taxpayers across Egypt had to complete their obligation to issue electronic tax invoices for all services performed and goods sold as of 15 December 2022. The rollout started with large taxpayers in 2020 and moved through several phases, each defined by a decision listing the companies included. The legal basis cited in the SDK is Ministerial Decision No. 188 of 2020.</p>

<p>Two follow-on rules make the mandate hard to avoid:</p>

<ul>
<li><strong>Customs link:</strong> since 1 April 2023, only entities that issue and deal with electronic tax invoices can import, export or deal with the customs system.</li>
<li><strong>Blacklist and inquiries:</strong> the ETA publishes tools to check which taxpayers are covered by e-invoice decisions and which are registered, so buyers can confirm that a supplier should be sending e-invoices.</li>
</ul>

<p>In practice, if your business is registered for VAT in Egypt and sells to other businesses or government bodies, you should assume every invoice has to go through the platform. The same principle applies across the region: Saudi Arabia's <a href="/blog/zatca-e-invoicing-guide">ZATCA Fatoora system</a> and the UAE's planned <a href="/blog/uae-e-invoicing-2027">2027 e-invoicing mandate</a> both tie the legal validity of an invoice to an electronic process.</p>

<h2>The e-receipt system for B2C sales</h2>

<p>The e-receipt is Egypt's answer for retail and consumer sales. It runs on the same platform as the e-invoice, but it is designed for high-volume sales to final consumers through point-of-sale systems. The key points:</p>

<ul>
<li><strong>Phased by named taxpayers:</strong> the ETA brings businesses into the e-receipt system through decisions with attached lists, grouped into main phases and sub-phases. For example, Decision No. 281 of 2025 named taxpayers at specific Cairo tax offices with a start date of 15 September 2025. There is no single turnover test that switches every business on at once.</li>
<li><strong>Approved POS:</strong> receipts must come from POS solutions integrated with the system. The ETA publishes the approved POS suppliers and lets users verify device serial numbers on its POS site.</li>
<li><strong>Customer verification:</strong> each receipt carries a QR code. Customers can check it using the <a href="https://invoicing.eta.gov.eg/receipts/search" target="_blank" rel="noopener noreferrer">ETA receipt search page</a>.</li>
<li><strong>Sector receipt types:</strong> the SDK has versions for retail, restaurants and cafes, transport, education, professional services, banking, utilities and others, plus return receipts.</li>
</ul>

<p>If you sell to consumers and have not yet been named, keep watching the ETA announcements. The rollout has continued through 2025 and 2026, and a business usually gets a fixed window between the decision and its start date to register its POS. For more on how QR codes are used on tax documents in other countries, see our explainer on <a href="/blog/qr-code-on-invoice">QR codes on invoices</a>.</p>

<h2>What an Egyptian e-invoice must contain</h2>

<p>Because the document is structured data, the fields are fixed by the ETA schema rather than left to your template. The core information is the same as any <a href="/blog/tax-invoice-guide">tax invoice</a>, but each item must use the authority's codes.</p>

<table>
<thead>
<tr><th>Section</th><th>What goes in it</th><th>Practical tip</th></tr>
</thead>
<tbody>
<tr><td>Issuer</td><td>Tax registration number, name, branch and address, activity code</td><td>Register every branch you invoice from before going live</td></tr>
<tr><td>Receiver</td><td>Business, person or foreign receiver, with tax number or ID where required</td><td>Collect buyer tax numbers at onboarding, not at invoice time</td></tr>
<tr><td>Document</td><td>Type (invoice, credit note, debit note or export versions), internal number, issue date and time</td><td>Keep your own sequential numbering alongside the ETA identifier</td></tr>
<tr><td>Lines</td><td>Item code, description, unit type, quantity, unit price, discount</td><td>Map your product list to item codes once, then reuse them</td></tr>
<tr><td>Taxes</td><td>Tax type and subtype per line, rate and amount</td><td>Use the ETA tax type codes; wrong codes are a common rejection reason</td></tr>
<tr><td>Totals</td><td>Sales total, discounts, net amount, total tax, total amount</td><td>Round consistently, because the platform recalculates totals</td></tr>
<tr><td>Signature</td><td>eSeal signature over the document</td><td>Keep the certificate valid and backed up</td></tr>
</tbody>
</table>

<p>The ETA code tables cover activity types, branches, country and currency codes, payment methods, tax types and unit types. A good internal habit is to keep a clean, sequential <a href="/blog/invoice-numbering-system">invoice numbering system</a> in your own records even though the platform also issues its own unique identifier, because your auditors will still ask for it.</p>

<h2>How to issue an Egypt e-invoice: step by step</h2>

<ol>
<li><strong>Register on the ETA portal.</strong> Use your tax registration number to create the taxpayer profile and add the people who will act for the business.</li>
<li><strong>Get a signing certificate.</strong> Obtain an eSeal certificate from an approved provider and install it in the system that will sign documents.</li>
<li><strong>Register your issuing system.</strong> Add your ERP, accounting package or POS as a system in the portal and generate its API credentials, or decide to key invoices in the portal manually.</li>
<li><strong>Map your codes.</strong> Assign item codes, unit types, activity codes and tax types to your products and services.</li>
<li><strong>Test in the pre-production environment.</strong> The SDK provides separate pre-production and production endpoints; submit sample invoices, credit notes and debit notes until they validate cleanly.</li>
<li><strong>Go live and submit each invoice.</strong> Sign and submit at the time of sale, then check the status. Only a valid document should be sent to the customer.</li>
<li><strong>Handle corrections properly.</strong> Use a credit note to reduce or reverse an accepted invoice and a debit note to increase it. Our <a href="/blog/debit-note-vs-credit-note">debit note vs credit note guide</a> explains the difference.</li>
<li><strong>Reconcile monthly.</strong> Compare accepted documents in the portal with your VAT return so output and input tax match.</li>
</ol>

<h2>Worked example: a services invoice with VAT</h2>

<p>Suppose a Cairo design studio registered for VAT bills a client for a website project. The fee is EGP 40,000, the studio gives a 10% loyalty discount, and VAT applies at the general rate of 14%.</p>

<table>
<thead>
<tr><th>Line</th><th>Amount (EGP)</th></tr>
</thead>
<tbody>
<tr><td>Website design and build</td><td>40,000.00</td></tr>
<tr><td>Discount (10%)</td><td>-4,000.00</td></tr>
<tr><td>Net amount</td><td>36,000.00</td></tr>
<tr><td>VAT at 14%</td><td>5,040.00</td></tr>
<tr><td>Total</td><td>41,040.00</td></tr>
<tr><td>Deposit already paid</td><td>-20,000.00</td></tr>
<tr><td>Balance due</td><td>21,040.00</td></tr>
</tbody>
</table>

<p>The arithmetic is simple: 40,000 minus 4,000 is 36,000; 14% of 36,000 is 5,040; 36,000 plus 5,040 is 41,040; less the 20,000 deposit leaves 21,040. In the ETA document the discount, net amount, tax and total are separate fields, and the platform recalculates each one. If any figure is off by more than the allowed rounding, the document is rejected. The deposit itself is a payment matter, not a field that changes the tax.</p>

<p>The same calculation works in our <a href="/invoice-generator">invoice generator</a>: enter the line, a 10% discount, a 14% tax rate and 20,000 in the amount paid field, and it shows the 21,040 balance. That is useful for quotes, internal records or invoices to foreign clients, but it does not replace the ETA submission for Egyptian tax purposes.</p>

<h2>Small businesses, freelancers and foreign suppliers</h2>

<p>Not everyone billing in Egypt is in the same position:</p>

<ul>
<li><strong>VAT-registered small businesses:</strong> you are inside the e-invoice system even at low volume. The portal's manual entry option keeps costs down, but you still need a signing certificate.</li>
<li><strong>Freelancers below VAT registration:</strong> if you are not registered for VAT, the e-invoice duty generally does not bite in the same way, but you still need proper records for income tax. A clear freelance invoice with a sequential number is the minimum.</li>
<li><strong>Foreign suppliers to Egyptian companies:</strong> a non-resident with no Egyptian registration sends a normal commercial invoice. Your client may account for VAT on imported services and may withhold tax, so agree the invoice details and payment terms upfront. If you bill in dollars or euros, our guide to <a href="/blog/foreign-currency-invoice">foreign currency invoices</a> covers exchange rates and wording.</li>
<li><strong>Exporters:</strong> use the export invoice type, and remember the customs link means an exporter outside the e-invoice system will struggle to clear goods.</li>
</ul>

<h2>Common rejection reasons and how to avoid them</h2>

<p>Most problems in the first months of e-invoicing are data problems, not technology problems:</p>

<ul>
<li><strong>Wrong or missing receiver details:</strong> a business buyer's tax number must be valid. Store it in your customer record.</li>
<li><strong>Incorrect tax codes:</strong> a line marked with the wrong tax type or subtype fails validation even if the amount is right.</li>
<li><strong>Rounding differences:</strong> calculate line totals the same way the platform does, and avoid manual overrides of totals.</li>
<li><strong>Expired certificate:</strong> signing fails silently in some systems when the certificate expires. Put the renewal date in your calendar.</li>
<li><strong>Editing instead of crediting:</strong> once accepted, an invoice cannot simply be edited. Follow the steps in our guide to <a href="/blog/how-to-correct-an-invoice">correcting an invoice</a> and issue a credit or debit note.</li>
</ul>

<h2>How Egypt fits into the wider e-invoicing picture</h2>

<p>Egypt was one of the first countries in the Middle East and Africa to make real-time clearance mandatory for all registered businesses. Other countries have since followed with their own systems, from Turkey's long-running e-Fatura (see our <a href="/blog/turkey-e-invoice">Turkey e-invoice guide</a>) to Brazil's NF-e. Our <a href="/blog/e-invoicing-mandates-2027">country-by-country e-invoicing mandates list</a> tracks the dates elsewhere, and the general <a href="/blog/e-invoicing-guide">e-invoicing guide</a> explains the formats and models behind them.</p>

<p>Egypt also shows how e-invoicing data gets used after the sale. Because the ETA sees every accepted invoice from both sides, it can compare a seller's output VAT with its buyers' input VAT claims month by month. Mismatches that once surfaced only in an audit now show up quickly, which is a good reason to reconcile your own records against the portal every month rather than once a year.</p>

<p>For a business that trades in several countries, the lesson from Egypt is to treat invoice data as structured from day one: consistent item codes, clean customer tax numbers and a reliable numbering system make every national mandate easier.</p>

<h2>Create your Egypt e-invoice data with confidence</h2>

<p>The Egypt e-invoice system is strict but predictable: register on the ETA portal, sign every document with your eSeal, submit at the time of sale and only send customers documents the platform has accepted. B2C sellers should watch the e-receipt decisions for their name and prepare their POS early. For quotes, records and invoices to clients outside Egypt, use our <a href="/invoice-generator">free invoice generator</a> or start from a clean <a href="/invoice-templates/corporate">corporate invoice template</a>. It is free, needs no account, and exports a print-ready PDF invoice.</p>
`,
  },
  {
    slug: "turkey-e-invoice",
    title: "Turkey E-Fatura Guide: E-Arşiv, Thresholds and 2026 Rules",
    description:
      "Turkey e-fatura explained: the 3 million TL threshold, when e-Arşiv applies, the 2026 end of paper invoices for most sellers and how to issue one correctly.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Turkey",
    related: [
      "e-invoicing-guide",
      "peppol-vs-clearance-model",
      "e-invoice-vs-pdf-invoice",
      "invoice-requirements-by-country",
    ],
    faqs: [
      {
        q: "What is e-Fatura in Turkey?",
        a: "e-Fatura is Turkey's electronic invoice for sales between taxpayers who are both registered in the e-Fatura system. The invoice is created in a standard XML format and travels through the Revenue Administration (GİB) system, either via the free GİB portal or a licensed private integrator. Registered users must issue e-Fatura to each other for goods and services, except for the exemptions set out in Tax Procedure Law General Communiqué No. 509.",
      },
      {
        q: "What is the difference between e-Fatura and e-Arşiv Fatura?",
        a: "e-Fatura is used when the buyer is also registered in the e-Fatura system. e-Arşiv Fatura is used when the buyer is not registered, such as consumers, foreign customers or small businesses outside the system. Both are electronic and both are reported to GİB, but e-Arşiv invoices are delivered to the buyer by email, a link or on paper, while e-Fatura moves system to system.",
      },
      {
        q: "What is the e-Fatura threshold in Turkey?",
        a: "Under Communiqué No. 509, taxpayers whose gross sales revenue was 3 million TL or more in 2022 or a later accounting period must move to e-Fatura and e-Arşiv from the beginning of the seventh month of the following year. So a business that crossed 3 million TL in 2025 had to switch by 1 July 2026. Lower thresholds apply to some groups, such as e-commerce sellers at 500 thousand TL.",
      },
      {
        q: "Can I still issue a paper invoice in Turkey in 2026?",
        a: "For most businesses, no. The consolidated Communiqué No. 509 says invoices issued by taxpayers outside the e-Arşiv system must be e-Arşiv invoices regardless of amount from 1 January 2026. The 3,000 TL per-invoice threshold now survives only for simple-method taxpayers and those keeping business-basis books, and only until 31 December 2026; for them the any-amount rule starts on 1 January 2027.",
      },
      {
        q: "Is the GİB e-invoice portal free?",
        a: "Yes. GİB offers an e-Belge portal where taxpayers can issue e-Fatura and e-Arşiv invoices without paying for software, which suits small businesses with modest volumes. Larger businesses usually connect through a GİB-authorised private integrator or set up direct integration so invoices flow from their accounting or ERP system automatically. Either route needs an electronic signature or financial seal for signing.",
      },
      {
        q: "What VAT rate goes on a Turkish invoice?",
        a: "Turkey's VAT (KDV) has a general rate of 20%, with reduced rates of 10% and 1% for listed goods and services. The invoice must show the VAT base, rate and amount. Some services are also subject to partial VAT withholding (tevkifat), where the buyer pays part of the VAT directly to the tax office, and the invoice must show the withheld portion and the code for the transaction.",
      },
      {
        q: "How do freelancers invoice in Turkey?",
        a: "Self-employed professionals such as consultants, lawyers and designers usually issue a self-employment receipt (serbest meslek makbuzu) rather than a sales invoice. Its electronic version, the e-Serbest Meslek Makbuzu, is also covered by Communiqué No. 509. When the client is a company, the professional's income tax withholding (stopaj) is shown on the receipt and paid by the client.",
      },
      {
        q: "How do I correct a Turkish e-Fatura?",
        a: "Within the GİB system an e-Fatura sent under the commercial scenario can be accepted or rejected by the buyer, and rules govern cancellation. Once an invoice is final, a price reduction or return is usually handled with a return invoice (iade faturası) issued by the buyer, or a new correcting document. Ask your integrator or accountant which route fits your situation before editing anything.",
      },
      {
        q: "Does a foreign company need e-Fatura to bill a Turkish client?",
        a: "A foreign supplier with no Turkish tax registration is outside the e-Fatura system and sends a normal commercial invoice. The Turkish buyer may have to account for VAT on imported services under the reverse charge mechanism and may ask for specific details on the invoice. If you sell to Turkish consumers digitally, separate VAT registration rules for foreign digital service providers may apply.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Turkey e-fatura is a mandatory XML e-invoice exchanged through the Revenue Administration (GİB) between registered taxpayers. Businesses with 3 million TL or more in gross sales must join from the seventh month of the following year, and since 1 January 2026 most other invoices must be e-Arşiv invoices whatever their amount.</p>

<p>Turkey has run electronic invoicing since 2012, and the system now reaches most businesses. The 2026 change matters for small firms in particular: the old rule that let you issue a paper invoice below a per-invoice amount has gone for most taxpayers. This guide explains how e-Fatura and e-Arşiv Fatura work, the current thresholds, what an invoice must show and how to issue one. If you bill clients outside Turkey and only need a clear commercial invoice, our <a href="/invoice-generator">invoice generator</a> creates one in minutes.</p>

<p><strong>Note:</strong> This is general information, not tax or legal advice. Turkish thresholds are updated by communiqué, so check the current GİB text or ask a certified accountant (SMMM) about your case.</p>

<h2>e-Fatura vs e-Arşiv Fatura: which one you issue</h2>

<p>Turkey splits electronic invoices by who the buyer is, not by what you sell. Both are electronic, both are reported to GİB, and both replace paper. The difference is delivery.</p>

<table>
<thead>
<tr><th>Feature</th><th>e-Fatura</th><th>e-Arşiv Fatura</th></tr>
</thead>
<tbody>
<tr><td>Buyer</td><td>Registered e-Fatura user</td><td>Anyone not registered: consumers, small firms, foreign buyers</td></tr>
<tr><td>Delivery</td><td>System to system through GİB</td><td>Email, link, or printed copy to the buyer</td></tr>
<tr><td>Format</td><td>Standard XML (UBL-TR)</td><td>Same electronic data, reported to GİB</td></tr>
<tr><td>Buyer response</td><td>Commercial scenario allows accept or reject</td><td>No acceptance step</td></tr>
<tr><td>Typical use</td><td>B2B and B2G sales</td><td>B2C, exports and sales to non-registered firms</td></tr>
</tbody>
</table>

<p>Before you invoice, you check whether the customer's tax number appears in the registered user list. If it does, you send an e-Fatura; if not, an e-Arşiv invoice. Software does this lookup automatically. For the general difference between a structured e-invoice and a PDF, see <a href="/blog/e-invoice-vs-pdf-invoice">e-invoice vs PDF invoice</a>.</p>

<h2>Turkey e-fatura thresholds in 2026</h2>

<p>The thresholds sit in Tax Procedure Law General Communiqué No. 509, which GİB keeps in a consolidated version. The main rules as of 2026:</p>

<ul>
<li><strong>General threshold:</strong> taxpayers with gross sales revenue of 3 million TL or more in 2022 or any later accounting period must move to e-Fatura (and e-Arşiv) from the beginning of the seventh month of the following year. A business that crossed 3 million TL in 2025 had to start by 1 July 2026.</li>
<li><strong>E-commerce and online sellers:</strong> businesses selling goods and services online, and intermediaries providing the platforms, fall in at 500 thousand TL for 2022 and later periods.</li>
<li><strong>Specific sectors:</strong> groups such as certain fuel distributors, licensed sectors and dealers in real estate or motor vehicles have their own triggers, some regardless of turnover.</li>
<li><strong>New businesses in covered sectors:</strong> some must join within a short period of starting activity rather than waiting for a full year's figures.</li>
<li><strong>Voluntary registration:</strong> any taxpayer can join e-Fatura voluntarily, and many do because large customers prefer it.</li>
</ul>

<h3>How gross sales are measured</h3>

<p>The test uses gross sales revenue (or gross business income for service providers) for the whole accounting period, before deducting costs. It is not profit, and it is not the VAT-inclusive figure on your bank statements. Use the revenue figure from your annual return or your accountant's year-end figures. Because Turkish lira amounts have risen quickly with inflation, a business that was well below 3 million TL a few years ago may now be over it on the same volume of work, so check the figure every year rather than assuming nothing has changed.</p>

<p>GİB's <a href="https://ebelge.gib.gov.tr/dosyalar/e-belge_zorunluluk_tarihleri.pdf" target="_blank" rel="noopener noreferrer">e-document obligation dates table</a> summarises the triggers for each group. Once you are in the system you stay in it, even if turnover later falls below the threshold.</p>

<h2>The 2026 change: e-Arşiv for invoices of any amount</h2>

<p>For years a business outside the e-Arşiv system could still issue a paper invoice to a consumer, as long as the amount, including taxes, stayed under a per-invoice limit. The limit was lowered to 3,000 TL for 2025. The consolidated <a href="https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=MEVZUAT_TEBLIGLER%2FUNIVERSAL%2F2026%2FMEVZUAT_TEBLIGLER_2026_VukTeb509_Guncel.pdf" target="_blank" rel="noopener noreferrer">Communiqué No. 509 text published by GİB</a> now says:</p>

<ul>
<li><strong>From 1 January 2026:</strong> invoices issued by taxpayers who are not in the e-Arşiv system must be issued as e-Arşiv invoices regardless of amount, through the GİB portal or an authorised integrator.</li>
<li><strong>Exception until end of 2026:</strong> simple-method taxpayers and those keeping books on the business-account basis (işletme hesabı esası) keep the 3,000 TL test until 31 December 2026, and the any-amount rule applies to them from 1 January 2027.</li>
</ul>

<p>In practice, paper sales invoices are disappearing in Turkey. If you have been relying on a printed invoice book for small consumer sales, plan the move now. The GİB portal is free and is the simplest starting point for low-volume sellers.</p>

<h2>What a Turkish invoice must show</h2>

<p>The Tax Procedure Law (Vergi Usul Kanunu) sets the minimum content of an invoice, and the e-Fatura schema turns those into fields. Expect to include:</p>

<ul>
<li>Invoice date, a unique serial and sequence number, and the invoice scenario and type</li>
<li>Seller's name, address, tax office and tax number</li>
<li>Buyer's name, address, tax office and tax number (or national ID for individuals)</li>
<li>Type and quantity of goods or services, unit price and line amount</li>
<li>Discounts, the VAT base, VAT rate and VAT amount, and any withholding (tevkifat) with its code</li>
<li>For goods, the delivery date and dispatch note details where relevant</li>
<li>The invoice total in figures and, by long-standing practice, in words</li>
</ul>

<p>The Tax Procedure Law requires an invoice to be issued within seven days of delivery of the goods or performance of the service, so build that into your billing routine. A tidy <a href="/blog/invoice-numbering-system">invoice numbering system</a> also matters, because e-Fatura numbers follow a fixed prefix, year and sequence pattern.</p>

<h2>How to start issuing e-Fatura: step by step</h2>

<ol>
<li><strong>Check your obligation.</strong> Compare last year's gross sales with the 3 million TL threshold, or the lower figure for your sector, and note your mandatory start date.</li>
<li><strong>Get a signing tool.</strong> Individuals use a qualified electronic signature; companies usually use a financial seal (mali mühür) linked to the tax number.</li>
<li><strong>Choose your channel.</strong> Use the free GİB e-Belge portal for low volumes, or a GİB-authorised private integrator if you want invoices created from your accounting software.</li>
<li><strong>Apply and activate.</strong> Complete the e-Fatura application so your tax number appears as a registered user, and set up e-Arşiv at the same time.</li>
<li><strong>Configure customers and products.</strong> Record each customer's tax number and tax office, and set VAT rates and any withholding codes on your services.</li>
<li><strong>Issue your first invoices.</strong> Check whether each buyer is a registered user, then send e-Fatura or e-Arşiv accordingly.</li>
<li><strong>Archive correctly.</strong> Keep the electronic invoices in their original format for the statutory retention period; a printout is not a substitute.</li>
</ol>

<h3>GİB portal or private integrator?</h3>

<p>Both routes produce legally valid invoices. The choice depends on volume and how your books are kept:</p>

<ul>
<li><strong>GİB e-Belge portal:</strong> free, browser-based and fine for a few dozen invoices a month. You type each invoice, so it suits freelancers, shops with few B2B sales and new businesses. The downside is manual entry and no automatic link to your accounting software.</li>
<li><strong>Private integrator (özel entegratör):</strong> a GİB-authorised company that connects your accounting or ERP system to GİB. Invoices are created from your existing sales records, delivered automatically and archived for you. Integrators charge fees, usually per invoice package or per year, so compare quotes.</li>
<li><strong>Direct integration:</strong> large companies with high volumes can connect their own systems directly to GİB, but this needs technical approval and in-house IT capacity.</li>
</ul>

<p>Many small businesses start on the portal and move to an integrator once volume grows or when their accountant asks for invoices to flow straight into the books.</p>

<h3>Delivering and archiving e-Arşiv invoices</h3>

<p>An e-Arşiv invoice can reach the buyer by email, through a link or as a printout. When you sell online, the electronic version is normally sent to the buyer's email address. The data is still reported to GİB, and you must keep the electronic original. If a buyer asks for a paper copy, print the e-Arşiv invoice: that printout is a copy of an electronic document, not a paper invoice from an old invoice book.</p>

<h2>Worked example: a consultancy invoice with 20% VAT</h2>

<p>An Istanbul marketing agency bills a registered client for a campaign worth 50,000 TL, with a 5% discount agreed in the contract, and VAT at the general 20% rate.</p>

<table>
<thead>
<tr><th>Line</th><th>Amount (TL)</th></tr>
</thead>
<tbody>
<tr><td>Campaign management</td><td>50,000.00</td></tr>
<tr><td>Discount (5%)</td><td>-2,500.00</td></tr>
<tr><td>VAT base</td><td>47,500.00</td></tr>
<tr><td>VAT (KDV) at 20%</td><td>9,500.00</td></tr>
<tr><td>Invoice total</td><td>57,000.00</td></tr>
</tbody>
</table>

<p>Check the maths: 5% of 50,000 is 2,500, leaving 47,500; 20% of 47,500 is 9,500; and 47,500 plus 9,500 is 57,000. Because the client is a registered e-Fatura user, the agency sends this as an e-Fatura through its integrator. If the client were an individual, the same figures would go out as an e-Arşiv invoice. If the service were subject to partial VAT withholding, part of the 9,500 would be shown as withheld and paid by the buyer, and the amount the agency collects would be lower; your integrator's software handles the codes.</p>

<p>You can reproduce the calculation in our <a href="/invoice-generator">free invoice generator</a> by entering the line, a 5% discount and a 20% tax rate. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> is handy for checking VAT-inclusive prices too. For a Turkish client, though, the legal document must still be issued through GİB.</p>

<h2>Freelancers, exporters and foreign suppliers</h2>

<ul>
<li><strong>Self-employed professionals:</strong> consultants, designers, doctors and lawyers working for themselves usually issue a self-employment receipt (serbest meslek makbuzu) instead of a sales invoice, now mostly as an e-SMM. If the client is a company, income tax withholding is shown and paid by the client. Our <a href="/blog/withholding-tax-on-invoices">guide to withholding tax on invoices</a> explains how withholding lines work in general.</li>
<li><strong>Exporters:</strong> export sales to foreign buyers go out as e-Arşiv invoices (or under the export scenario where applicable), and customs data must match the invoice. A clear <a href="/blog/commercial-invoice-template">commercial invoice</a> is still needed for the shipment paperwork.</li>
<li><strong>Foreign suppliers:</strong> a company outside Turkey with no Turkish registration sends a normal invoice. The Turkish buyer usually handles VAT on imported services under the reverse charge. Agree currency and bank details upfront; our <a href="/blog/foreign-currency-invoice">foreign currency invoice guide</a> covers the wording.</li>
</ul>

<h3>What changes for small shops in 2026</h3>

<p>For a small retailer that used to hand customers a paper invoice from a printed book, the 2026 rule means three practical changes. First, every invoice, even for a small sale, now goes through the GİB portal or an integrator as an e-Arşiv invoice. Second, the business needs a working electronic signature or seal to sign them. Third, staff need a quick routine at the counter: enter the buyer's details, issue the e-Arşiv invoice and email or print it. Cash register receipts from approved payment recorder devices remain a separate matter for retail sales where no invoice is requested; ask your accountant how the two interact in your sector.</p>

<h2>Common mistakes to avoid</h2>

<ul>
<li><strong>Missing the July start date:</strong> the obligation starts on the first day of the seventh month after the year you crossed the threshold, not at the next year-end.</li>
<li><strong>Sending e-Arşiv to a registered buyer:</strong> always check the registered user list; the wrong document type can mean the invoice is treated as not issued.</li>
<li><strong>Treating a PDF as the invoice:</strong> the legal invoice is the electronic record in the GİB system. The PDF or printout is only a view of it.</li>
<li><strong>Ignoring withholding codes:</strong> services in the tevkifat lists need the right code and rate, or the VAT shown will be wrong.</li>
<li><strong>Late issue:</strong> the seven-day window still applies to electronic invoices.</li>
</ul>

<h2>Turkey in the global e-invoicing picture</h2>

<p>Turkey is a mature system: invoices pass through the tax authority, as in Egypt (see our <a href="/blog/egypt-e-invoicing">Egypt e-invoice guide</a>) and Brazil (see <a href="/blog/brazil-nfe-invoice">NF-e and nota fiscal in Brazil</a>). That is a different model from Europe's Peppol networks. If you trade with both, our <a href="/blog/e-invoicing-guide">e-invoicing guide</a> and the <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a> overview help you keep the rules straight.</p>

<h2>Get your Turkey e-fatura process right</h2>

<p>Turkey e-fatura is no longer only for large companies. Check your gross sales against the 3 million TL threshold, set up e-Arşiv for buyers outside the system, and plan for the end of paper invoices that took effect in 2026 for most sellers. For quotes, pro formas and invoices to clients outside Turkey, use our <a href="/invoice-generator">invoice generator</a> or pick a clean <a href="/invoice-templates/minimal">minimal invoice template</a>. Download the result as a PDF invoice you can email, print or upload to a client portal.</p>
`,
  },
  {
    slug: "indonesia-e-faktur",
    title: "e-Faktur in Indonesia: Coretax, NSFP and Faktur Pajak Rules",
    description:
      "e-Faktur in Indonesia explained: how Coretax issues faktur pajak, automatic NSFP, the 12% VAT with 11/12 base, input VAT crediting and a worked example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Indonesia",
    related: [
      "e-invoicing-guide",
      "tax-invoice-guide",
      "vietnam-e-invoice",
      "malaysia-lhdn-e-invoice",
    ],
    faqs: [
      {
        q: "What is e-Faktur in Indonesia?",
        a: "e-Faktur is the electronic tax invoice (faktur pajak) that VAT-registered businesses in Indonesia must issue for taxable supplies. It records the VAT charged, and it is the document the buyer uses to claim input VAT. Since January 2025 faktur pajak are created and signed in the Directorate General of Taxes' Coretax system, which replaced most of the old e-Faktur desktop and web processes under PMK 81/2024.",
      },
      {
        q: "Who must issue e-Faktur?",
        a: "Businesses confirmed as taxable entrepreneurs (Pengusaha Kena Pajak, or PKP) must issue faktur pajak for taxable deliveries of goods and services. Businesses with annual turnover above the small entrepreneur limit, set at Rp4.8 billion, must register as PKP. Smaller businesses can choose to register voluntarily, often because corporate customers want a faktur pajak so they can credit input VAT.",
      },
      {
        q: "Do I still need to request NSFP numbers in Coretax?",
        a: "No. Under the old system a PKP had to request a block of tax invoice serial numbers (NSFP) through e-Nofa or the tax office. In Coretax the serial number is generated automatically when the PKP submits and signs the faktur. DJP has also explained that Coretax NSFP are 17 digits, while numbers from the older desktop application were 16 digits.",
      },
      {
        q: "Is Indonesian VAT 11% or 12%?",
        a: "The headline VAT rate has been 12% since 1 January 2025 under PMK 131/2024, but for goods and services that are not luxury items the tax base is 11/12 of the selling price. The result is an effective 11% for most sales. Only luxury goods subject to sales tax on luxury goods pay the full 12% on the selling price.",
      },
      {
        q: "When must a faktur pajak be issued?",
        a: "A faktur pajak is issued at the time of the taxable delivery or when payment is received, if payment comes before delivery. Because Coretax prepopulates the monthly VAT return from the faktur created in the same period, issuing it promptly keeps your return accurate and lets your buyer credit the input VAT on time. Check DJP guidance for the current approval cut-off each month.",
      },
      {
        q: "Can input VAT be credited in a later month?",
        a: "Yes, within limits. DJP's written statement KT-08/2025 confirms that the VAT Law allows input VAT to be credited in the same period or up to three periods later, provided it has not been expensed. Coretax was updated so that input VAT on e-Faktur can be credited in any of the following three tax periods, without a change to PMK 81/2024.",
      },
      {
        q: "Do I need a digital certificate to sign e-Faktur?",
        a: "Yes. Faktur pajak in Coretax are signed electronically using a digital certificate or an authorisation code issued by DJP to the taxpayer or its authorised person. Activate your Coretax account and request the certificate before your first invoice, because unsigned faktur cannot be finalised. DJP reported that more than 800,000 taxpayers had obtained certificates within the first weeks of Coretax.",
      },
      {
        q: "Does a foreign freelancer billing an Indonesian company issue e-Faktur?",
        a: "No. A foreign supplier with no Indonesian PKP registration cannot issue faktur pajak. It sends a normal commercial invoice, and the Indonesian buyer generally self-assesses VAT on imported services and may withhold income tax. Foreign digital platforms selling to Indonesian consumers fall under a separate appointment scheme for collecting VAT on electronic trade.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> e-Faktur is Indonesia's electronic tax invoice (faktur pajak) that VAT-registered businesses (PKP) must issue for taxable sales. Since January 2025 it is created and signed in the DJP Coretax system, which assigns the serial number (NSFP) automatically. Most sales carry 12% VAT on an 11/12 base, an effective 11%.</p>

<p>The move to Coretax was the biggest change to Indonesian invoicing in a decade. Requesting serial number quotas, juggling the e-Faktur desktop client and uploading files separately gave way to one integrated system. This guide explains how e-Faktur works under Coretax as of 2026, who must issue it, how the NSFP and VAT base rules work, and walks through an example. If you need a commercial invoice for a client abroad, our <a href="/invoice-generator">invoice generator</a> builds one quickly.</p>

<p><strong>Note:</strong> This is general information, not tax advice. DJP updates Coretax procedures through regulations and announcements, so confirm details with DJP or a registered tax consultant.</p>

<h2>What e-Faktur is and why it matters</h2>

<p>A faktur pajak is the VAT invoice in Indonesia. It is separate from your commercial invoice in concept: the commercial invoice asks for payment, while the faktur pajak proves the VAT collected and lets the buyer credit it. Many businesses issue both, or a combined document, but only a faktur created in the DJP system counts for VAT.</p>

<p>Electronic faktur have been mandatory for years, and Indonesia's approach is a form of clearance: the tax authority assigns the number and records the document as it is created. That puts it in the same family as Vietnam's system (see our <a href="/blog/vietnam-e-invoice">Vietnam e-invoice guide</a>) and different from the Peppol model used in parts of Asia-Pacific. For background on both, see our <a href="/blog/e-invoicing-guide">e-invoicing guide</a>.</p>

<h2>Coretax: how e-Faktur changed in 2025</h2>

<p>PMK 81/2024 set the tax provisions for the Coretax administration system, with effect from 1 January 2025. For faktur pajak, the main changes were:</p>

<ul>
<li><strong>One system:</strong> faktur are created, signed and stored in Coretax, which also prepares the monthly VAT return (SPT Masa PPN). The <a href="https://www.pajak.go.id/id/coretax" target="_blank" rel="noopener noreferrer">DJP Coretax page</a> links the guidance, FAQs and the login.</li>
<li><strong>Automatic NSFP:</strong> the serial number is generated when the faktur is submitted and signed. You no longer request quotas through e-Nofa.</li>
<li><strong>Prepopulated returns:</strong> faktur created in a period flow straight into that period's VAT return, for the seller's output VAT and the buyer's input VAT.</li>
<li><strong>Digital signing:</strong> faktur are signed with a DJP digital certificate or authorisation code tied to the taxpayer or its authorised person.</li>
<li><strong>New identifiers:</strong> Coretax uses the 16-digit NPWP (or NIK for individuals) and a branch code (NITKU) for businesses with several locations.</li>
</ul>

<p>The early months of 2025 were bumpy, and DJP allowed the older e-Faktur desktop client alongside Coretax for some taxpayers. DJP's own statistics showed that by mid-February 2025 more than 800,000 taxpayers had obtained digital certificates and tens of millions of faktur had been validated for January alone. By 2026 Coretax is the normal route for creating faktur.</p>

<h2>NSFP: the tax invoice serial number</h2>

<p>Every faktur pajak carries a serial number, the NSFP (Nomor Seri Faktur Pajak). Under the old system the PKP requested a block of numbers, with quotas tied to how many faktur it had issued recently. Under Coretax:</p>

<ul>
<li>The NSFP is assigned automatically when you submit and sign the faktur.</li>
<li>DJP has explained that Coretax NSFP are 17 digits, while those from the older desktop application were 16 digits, and that converted desktop numbers carry an extra digit so they fit the new format.</li>
<li>Each faktur also carries a transaction code at the start that tells the system what kind of supply it is, such as a regular delivery, a delivery using an alternative tax base, or a delivery with a VAT facility.</li>
</ul>

<p>Your own sales invoice can keep its separate numbering. A consistent <a href="/blog/invoice-numbering-system">invoice numbering system</a> makes it easy to match each commercial invoice to its faktur pajak when your auditor or the tax office asks.</p>

<h2>VAT on e-Faktur: 12% headline, 11/12 base</h2>

<p>PMK 131/2024 raised the VAT rate to 12% from 1 January 2025, but limited the increase to luxury goods. DJP's <a href="https://www.pajak.go.id/id/siaran-pers/keterangan-tertulis-petunjuk-teknis-pembuatan-faktur-pajak-dalam-rangka-pelaksanaan-pmk" target="_blank" rel="noopener noreferrer">written statement on faktur technical guidance</a> explains that for non-luxury goods the VAT is calculated as 12% times 11/12 of the selling price, which works out at an effective 11%.</p>

<table>
<thead>
<tr><th>Type of sale</th><th>Tax base (DPP)</th><th>Rate</th><th>Effective VAT</th></tr>
</thead>
<tbody>
<tr><td>Most goods and services</td><td>11/12 of selling price</td><td>12%</td><td>11% of price</td></tr>
<tr><td>Luxury goods (subject to PPnBM)</td><td>Full selling price</td><td>12%</td><td>12% of price</td></tr>
<tr><td>Exports of goods and certain services</td><td>Export value</td><td>0%</td><td>0%</td></tr>
<tr><td>Exempt or facility supplies</td><td>As per facility</td><td>Not collected or exempt</td><td>Shown with facility code</td></tr>
</tbody>
</table>

<p>A three-month transition ran from 1 January to 31 March 2025, during which faktur showing either 11% or 12% on the selling price were accepted without penalty. Where a buyer was overcharged, it could ask the seller for a refund of the difference and a replacement faktur.</p>

<h3>Choosing the right base in practice</h3>

<p>The 11/12 rule can look strange the first time, but it is simple to apply. If your price is Rp12,000,000 for a non-luxury item, the tax base is 11/12 of that, Rp11,000,000, and VAT at 12% of the base is Rp1,320,000. That equals 11% of the original price. Coretax applies the formula when you pick the right transaction code, so the main job is to classify each product correctly as luxury or non-luxury and keep that setting in your product list. Mixed invoices with both kinds of goods should show each line with its own base.</p>

<h2>What a faktur pajak contains</h2>

<p>The VAT Law sets the minimum content of a faktur pajak, and Coretax builds the fields in:</p>

<ul>
<li>Seller's name, address and NPWP (and branch code where relevant)</li>
<li>Buyer's name, address and NPWP or NIK; for retail sales to consumers, simplified rules apply</li>
<li>Transaction code and NSFP</li>
<li>Type of goods or services, quantity, unit price and total price</li>
<li>Discounts or price reductions</li>
<li>Tax base (DPP), VAT collected and any sales tax on luxury goods (PPnBM)</li>
<li>Faktur date and the electronic signature</li>
</ul>

<p>These fields match what most countries require on a <a href="/blog/tax-invoice-guide">tax invoice</a>. The difference is that the authority holds the master copy. Because the buyer's input VAT depends on these details, corporate customers often refuse to pay until they can see a correct faktur in their own Coretax account, so getting the data right first time also speeds up collections.</p>

<h2>How to issue an e-Faktur in Coretax: step by step</h2>

<ol>
<li><strong>Activate your Coretax account.</strong> Log in at the Coretax portal with your NPWP or NIK and complete account activation.</li>
<li><strong>Get your signing credentials.</strong> Request the DJP digital certificate or authorisation code, and register any staff or consultants who will issue faktur on the company's behalf.</li>
<li><strong>Check buyer data.</strong> Confirm the buyer's NPWP or NIK and branch code, because errors here affect the buyer's input VAT.</li>
<li><strong>Create the faktur.</strong> In the e-Faktur menu, choose the transaction code, enter goods or service lines, discounts and the tax base. For most sales, Coretax uses the 11/12 alternative base.</li>
<li><strong>Submit and sign.</strong> On signing, Coretax issues the NSFP and the faktur becomes valid.</li>
<li><strong>Send it to the buyer.</strong> The buyer sees it in its own Coretax account as input VAT; you can also share a PDF with your commercial invoice.</li>
<li><strong>Review the monthly VAT return.</strong> Check the prepopulated SPT Masa PPN against your sales ledger before filing.</li>
</ol>

<h2>Worked example: a sale of goods at 12% on an 11/12 base</h2>

<p>A Jakarta furniture maker sells office desks to a corporate buyer for Rp100,000,000 before VAT. The desks are not luxury goods.</p>

<table>
<thead>
<tr><th>Item</th><th>Amount (Rp)</th></tr>
</thead>
<tbody>
<tr><td>Selling price</td><td>100,000,000</td></tr>
<tr><td>Tax base (11/12 of price)</td><td>91,666,667</td></tr>
<tr><td>VAT at 12% of tax base</td><td>11,000,000</td></tr>
<tr><td>Total payable by buyer</td><td>111,000,000</td></tr>
</tbody>
</table>

<p>The arithmetic: 11/12 of 100,000,000 is 91,666,666.67, rounded to 91,666,667 in the table; 12% of the exact 11/12 base is 11,000,000, which is the same as 11% of the selling price; and 100,000,000 plus 11,000,000 is 111,000,000. The buyer can credit the 11,000,000 as input VAT in the same period or one of the next three periods, as DJP confirmed in its written statement KT-08/2025.</p>

<p>For a commercial invoice that mirrors the faktur, you can enter the 100,000,000 line in our <a href="/invoice-generator">invoice generator</a> with an 11% tax rate, which produces the same 11,000,000 VAT and 111,000,000 total. If the buyer pays a 50,000,000 deposit, enter it in the amount paid field and the balance due shows 61,000,000. The faktur pajak itself must still come from Coretax.</p>

<h2>Input VAT, corrections and cancellations</h2>

<ul>
<li><strong>Input VAT crediting:</strong> DJP's KT-08/2025 confirms that input VAT on e-Faktur can be credited in the same period or up to three following periods, as long as it has not been charged as an expense.</li>
<li><strong>Replacement faktur:</strong> if details or amounts were wrong, the seller issues a replacement faktur (faktur pengganti) in Coretax rather than editing the original.</li>
<li><strong>Cancellation:</strong> if a transaction did not happen, the faktur is cancelled in the system, which removes it from both parties' VAT records.</li>
<li><strong>Returns:</strong> returns of goods or cancellation of services after a faktur is issued are handled with a return document, similar in purpose to a <a href="/blog/credit-note-guide">credit note</a>.</li>
</ul>

<p>Never fix a VAT problem by changing only the commercial invoice. The faktur and the invoice must tell the same story.</p>

<h3>Down payments and partial deliveries</h3>

<p>VAT becomes due when payment is received if the payment comes before delivery. That means a down payment (uang muka) needs its own faktur pajak for the VAT on the amount received, and the final faktur at delivery covers only the remaining balance. Projects billed in stages, such as construction or software development, follow the same pattern: one faktur per payment or delivery milestone. Matching each faktur to the right stage invoice keeps both your output VAT and the buyer's input VAT accurate.</p>

<h3>Common Coretax mistakes</h3>

<ul>
<li><strong>Wrong buyer identifier:</strong> using an old 15-digit NPWP or the wrong branch code means the buyer cannot see the input VAT.</li>
<li><strong>Wrong transaction code:</strong> a regular code on a sale that should use the alternative 11/12 base, or the reverse, produces the wrong VAT.</li>
<li><strong>Unsigned drafts:</strong> a faktur saved but not signed has no NSFP and is not valid. Check your draft list before month-end.</li>
<li><strong>Late faktur:</strong> creating the faktur in a later period than the delivery puts it in the wrong VAT return and can trigger penalties.</li>
<li><strong>Mismatch with the commercial invoice:</strong> different amounts on the two documents raise questions in an audit.</li>
</ul>

<h3>Keeping records</h3>

<p>Coretax stores the faktur, but you should still keep your own copies of faktur, commercial invoices, delivery documents and contracts for the statutory retention period. Our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> explains the general principles behind retention rules.</p>

<h2>Small businesses, foreign suppliers and consumers</h2>

<ul>
<li><strong>Below the PKP threshold:</strong> businesses with turnover under Rp4.8 billion a year are not required to register as PKP and cannot issue faktur pajak unless they register voluntarily. They still issue ordinary invoices; a clear <a href="/blog/simple-invoice-template">simple invoice template</a> is enough.</li>
<li><strong>Retail sellers:</strong> sales to end consumers follow simplified retail faktur rules, so you do not need a buyer NPWP for every till sale.</li>
<li><strong>Foreign suppliers:</strong> a company abroad without PKP status sends a normal commercial invoice; the Indonesian buyer generally self-assesses VAT on imported services and may withhold income tax. See our guides to <a href="/blog/foreign-currency-invoice">foreign currency invoices</a> and <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a>.</li>
</ul>

<h3>How Indonesia compares with its neighbours</h3>

<p>South-east Asia is moving quickly. Malaysia's MyInvois (see our <a href="/blog/malaysia-lhdn-e-invoice">LHDN e-invoice guide</a>) validates invoices centrally, and the Philippines is phasing in its own system. Further afield, Egypt and Brazil run similar clearance systems (see <a href="/blog/egypt-e-invoicing">Egypt e-invoicing</a> and <a href="/blog/brazil-nfe-invoice">Brazil NF-e</a>). If you trade across the region, keep customer tax IDs and product data clean; every one of these systems rejects invoices with bad master data.</p>

<h2>Issue e-Faktur with confidence</h2>

<p>e-Faktur under Coretax is simpler than the old system once it is set up: activate your account, get your certificate, let Coretax assign the NSFP and use the 11/12 base for ordinary sales. Keep your commercial invoices matched to each faktur pajak. For quotes, commercial invoices and bills to clients outside Indonesia, use our <a href="/invoice-generator">free invoice generator</a> or a ready-made <a href="/invoice-templates/modern">modern invoice template</a>. Every invoice exports as a PDF, so it looks the same on your client's phone, laptop or printer.</p>
`,
  },
  {
    slug: "ireland-vat-invoice-requirements",
    title: "Irish VAT Invoice Requirements: Full Checklist and 2028 Plans",
    description:
      "Irish VAT invoice requirements in one checklist: mandatory details, EUR 100 simplified invoices, credit notes, currency rules and the 2028 e-invoicing plan.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Ireland",
    related: [
      "vat-invoice-guide",
      "reverse-charge-invoice",
      "credit-note-guide",
      "e-invoicing-mandates-2027",
    ],
    faqs: [
      {
        q: "What must be on a VAT invoice in Ireland?",
        a: "Revenue lists the date of issue, a unique sequential number, the supplier's full name, address and VAT number, the customer's full name and address, the quantity and nature of goods or extent and nature of services, the date of supply, the VAT-exclusive unit price, any discounts, a breakdown by VAT rate and the total VAT payable. Reverse charge and intra-EU supplies need extra notations and the customer's VAT number.",
      },
      {
        q: "When do I have to issue a VAT invoice in Ireland?",
        a: "A VAT-registered business must issue a VAT invoice for supplies to other businesses, public bodies and other VAT-registered persons, and for certain cross-border supplies. Irish VAT law generally requires the invoice within 15 days of the end of the month in which the supply took place. Invoices to private consumers are not normally required, though many businesses issue receipts anyway.",
      },
      {
        q: "Can I issue a simplified VAT invoice in Ireland?",
        a: "Yes, where the invoice amount is not more than EUR 100, or where sector practice makes full invoicing hard. A simplified invoice needs the issue date, the supplier's name, address and VAT number, a description of the goods or services, and either the VAT payable or the price excluding VAT. Simplified invoices cannot be used for intra-Community supplies.",
      },
      {
        q: "What are the VAT rates in Ireland?",
        a: "Revenue's rate history lists a standard rate of 23%, a reduced rate of 13.5%, a second reduced rate of 9% and a livestock rate of 4.8%, with a zero rate for items such as most food and children's clothing. Rates for specific goods and services can change in a Budget, so search Revenue's VAT rates database for your exact supply before you invoice.",
      },
      {
        q: "When must an Irish VAT credit note be issued?",
        a: "Revenue says a credit note is needed when the price changes because of an allowance, discount or similar adjustment, or when the VAT rate on the original invoice was wrong. It must be issued within 15 days of the end of the month in which the goods or services are supplied, and must give the reason, a cross-reference to the original invoice and the amended amounts.",
      },
      {
        q: "Can I send VAT invoices by email in Ireland?",
        a: "Yes, if the customer agrees. Revenue allows invoices to be issued on paper or electronically, provided both parties agree to electronic issue and the system can store the records, reproduce them and protect their integrity and authenticity. A PDF emailed with the customer's agreement counts as an electronic invoice under current rules; structured e-invoicing will be required later.",
      },
      {
        q: "When does mandatory e-invoicing start in Ireland?",
        a: "Revenue's roadmap sets Phase One for November 2028, when VAT-registered large corporates must issue e-invoices and report domestic B2B transactions in near real time, and all businesses must be able to receive e-invoices. Phase Two in November 2029 adds businesses in cross-border EU B2B trade, and Phase Three in July 2030 applies the EU ViDA rules to all intra-EU B2B transactions.",
      },
      {
        q: "Do Irish invoices in foreign currency need euro amounts?",
        a: "Yes. If you invoice in a foreign currency, Revenue requires the euro equivalent of the VAT figures to be shown, using the Central Bank selling rate at the time the invoice is due to be issued. You can use another exchange rate method if Revenue agrees, but it must then apply to all your foreign currency transactions.",
      },
      {
        q: "What does reverse charge wording look like on an Irish invoice?",
        a: "When the customer accounts for the VAT, the invoice must show the customer's VAT number, must not show an Irish VAT amount, and must carry the notation that the reverse charge applies. For intra-Community supplies of goods the notation states that it is an intra-Community supply. Construction services under Relevant Contracts Tax have their own reverse charge rules.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Irish VAT invoice requirements, set by Revenue, include the issue date, a unique sequential number, both parties' names and addresses, the supplier's VAT number, a description and date of supply, VAT-exclusive prices, a breakdown by VAT rate and the total VAT. Invoices up to EUR 100 can be simplified, and mandatory e-invoicing starts with large companies in November 2028.</p>

<p>Ireland's invoice rules follow the EU VAT Directive but add a few local details, such as the 15-day issuing window and the euro conversion rule for foreign currency invoices. This guide gives you a full checklist of Irish VAT invoice requirements as of 2026, explains simplified invoices, credit notes and reverse charge wording, and sets out Revenue's e-invoicing roadmap. You can build an invoice that meets the checklist in our <a href="/invoice-generator">free invoice generator</a>.</p>

<p><strong>Note:</strong> This is general information, not tax advice. Check Revenue guidance or ask a chartered accountant or tax adviser about your own situation.</p>

<h2>Who must issue a VAT invoice in Ireland</h2>

<p>If you are registered for VAT in Ireland, you must issue a VAT invoice when you supply goods or services to:</p>

<ul>
<li>another VAT-registered business, or any business or public body, in Ireland</li>
<li>a business customer in another EU Member State (intra-Community supplies)</li>
<li>a customer in certain distance-selling or cross-border situations</li>
<li>a customer who has paid you in advance for a taxable supply</li>
</ul>

<p>Sales to private consumers do not normally need a full VAT invoice, though a receipt is good practice. The invoice must generally be issued within 15 days of the end of the month in which the supply took place, and Revenue applies the same 15-day window to credit notes. If you are not yet registered, see our general <a href="/blog/vat-invoice-guide">VAT invoice guide</a> for how registration affects what you can charge; you must not show VAT on an invoice if you are not registered.</p>

<h2>Irish VAT invoice requirements: the full checklist</h2>

<p>Revenue's page on <a href="https://www.revenue.ie/en/vat/vat-records-invoices-credit-notes/invoices/information-required-vat-invoice.aspx" target="_blank" rel="noopener noreferrer">information required on a VAT invoice</a> lists the details. Here they are in a checklist with practical notes.</p>

<table>
<thead>
<tr><th>Requirement</th><th>Always needed?</th><th>Practical note</th></tr>
</thead>
<tbody>
<tr><td>Date of issue</td><td>Yes</td><td>The date you create the invoice</td></tr>
<tr><td>Unique sequential number</td><td>Yes</td><td>No gaps or duplicates; use one series per business</td></tr>
<tr><td>Supplier's full name, address and VAT number</td><td>Yes</td><td>Irish VAT numbers start with IE</td></tr>
<tr><td>Customer's full name and address</td><td>Yes</td><td>Use the legal entity name</td></tr>
<tr><td>Quantity and nature of goods, or extent and nature of services</td><td>Yes</td><td>Describe clearly enough to identify the supply</td></tr>
<tr><td>Date of supply</td><td>Yes</td><td>Can differ from the issue date</td></tr>
<tr><td>Date of payment on account</td><td>Only for advance payments</td><td>Show it if different from the issue date</td></tr>
<tr><td>VAT-exclusive unit price</td><td>Yes</td><td>Per unit, before VAT</td></tr>
<tr><td>Discounts or price reductions</td><td>If given</td><td>Show them if not already in the unit price</td></tr>
<tr><td>Payment received, net of VAT</td><td>If relevant</td><td>For partly prepaid supplies</td></tr>
<tr><td>Breakdown by VAT rate</td><td>Yes</td><td>Net amount at each rate</td></tr>
<tr><td>Total VAT payable</td><td>Yes</td><td>In euro</td></tr>
<tr><td>Customer's VAT number and reverse charge notation</td><td>Reverse charge supplies</td><td>"Reverse charge applies", no VAT shown</td></tr>
<tr><td>Customer's VAT number and intra-Community notation</td><td>Intra-EU supplies of goods</td><td>Zero-rated with notation</td></tr>
<tr><td>Margin or auction scheme endorsement</td><td>Those schemes only</td><td>No VAT amount shown</td></tr>
</tbody>
</table>

<p>A sequential number is easy to get wrong when you use several tools. Our <a href="/tools/invoice-number-generator">invoice number generator</a> and the guide to <a href="/blog/invoice-numbering-system">invoice numbering systems</a> help you keep one clean series.</p>

<h2>VAT rates you may see on an Irish invoice</h2>

<p>Revenue's rate history lists four main positive rates, plus the zero rate:</p>

<ul>
<li><strong>23% standard rate:</strong> most goods and services, including most professional services</li>
<li><strong>13.5% reduced rate:</strong> items such as fuel, building services and certain repairs</li>
<li><strong>9% second reduced rate:</strong> items such as newspapers and certain sporting facilities</li>
<li><strong>4.8% livestock rate:</strong> livestock and related supplies</li>
<li><strong>0%:</strong> items such as most food, oral medicines and children's clothing, and qualifying exports</li>
</ul>

<p>The rate for a particular supply can change in an annual Budget, so check Revenue's VAT rates database for your exact item. If your invoice covers items at two rates, show the net total and VAT separately for each rate. To work back from a VAT-inclusive price at 23%, divide by 1.23: a EUR 123 price contains EUR 100 net and EUR 23 VAT.</p>

<h2>Simplified invoices, electronic invoices and foreign currency</h2>

<h3>Simplified invoices up to EUR 100</h3>

<p>Revenue's page on <a href="https://www.revenue.ie/en/vat/vat-records-invoices-credit-notes/invoices/other-types-vat-invoices.aspx" target="_blank" rel="noopener noreferrer">other types of VAT invoices</a> allows a simplified invoice where the amount is not more than EUR 100, or where sector practice makes the full rules hard to meet. It needs only the issue date, the supplier's name, address and VAT number, a description of the goods or services, and either the VAT payable or the VAT-exclusive price. It cannot be used for intra-Community supplies.</p>

<h3>Electronic invoices today</h3>

<p>You can issue invoices electronically, including a PDF by email, as long as the customer agrees. Your system must store the records, reproduce them on request and guarantee their integrity and origin, with a reliable audit trail. That is today's rule; structured e-invoicing comes later under the roadmap below. In other words, an emailed PDF is acceptable for now, but it will not satisfy the structured e-invoicing rules once they apply to you.</p>

<h3>Sales to customers in other EU countries</h3>

<p>Cross-border invoices are where most Irish errors happen. For goods sent to a VAT-registered business in another Member State, the invoice is zero-rated and must show the customer's VAT number and the intra-Community supply notation; check the number on the EU VIES system before you invoice. For most business-to-business services, the place of supply is where the customer is established, so the invoice shows no Irish VAT and carries the reverse charge notation. Sales of digital services to consumers in other EU countries follow the One Stop Shop rules instead; see our <a href="/blog/eu-vat-one-stop-shop">EU VAT One Stop Shop guide</a>.</p>

<h3>Foreign currency invoices</h3>

<p>You may invoice in dollars, sterling or any other currency, but the VAT amounts must also be shown in euro, converted at the Central Bank selling rate at the time the invoice is due. Revenue can agree an alternative method on application. Our <a href="/blog/foreign-currency-invoice">foreign currency invoice guide</a> has wording examples.</p>

<h3>Advance payments and deposits</h3>

<p>If a customer pays a deposit or payment on account before you supply the goods or services, VAT is generally due on that payment and you should issue an invoice for it. Show the date the payment was received if it differs from the invoice date. When you later invoice the full supply, deduct the amount already invoiced so VAT is not charged twice. Putting the deposit invoice number on the final invoice makes this easy for both you and the customer.</p>

<h3>Record keeping</h3>

<p>Revenue expects VAT records, including copies of the invoices and credit notes you issue and receive, to be kept for six years. Electronic copies are fine as long as you can produce them on request and they have not been altered. Store them somewhere backed up, not only in one person's email inbox.</p>

<h2>Credit notes and corrections</h2>

<p>Ireland is strict about how you fix an invoice. You do not edit an issued VAT invoice. Instead:</p>

<ul>
<li><strong>Price reduction or wrong VAT rate:</strong> issue a credit note within 15 days of the end of the month of supply. It must state the reason, cross-reference the original invoice, show the amended consideration and the VAT at each rate.</li>
<li><strong>Price increase:</strong> issue a supplementary invoice showing the VAT-exclusive increase and the VAT on it.</li>
<li><strong>Customer-issued debit note:</strong> a customer can issue a debit note that is treated as a credit note, but only if the supplier accepts it and before the supplier issues its own credit note.</li>
</ul>

<p>Our <a href="/blog/credit-note-guide">credit note guide</a> covers layout, and <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a> walks through the process step by step.</p>

<h2>How to create a compliant Irish VAT invoice: step by step</h2>

<ol>
<li><strong>Confirm the VAT treatment.</strong> Decide whether the supply is standard, reduced, zero-rated, exempt or reverse charge.</li>
<li><strong>Add your details.</strong> Your full legal name, address and Irish VAT number.</li>
<li><strong>Add the customer's details.</strong> Full name and address; add their VAT number for reverse charge or intra-EU supplies.</li>
<li><strong>Number and date the invoice.</strong> Use the next number in your series, the issue date and the date of supply.</li>
<li><strong>List the supply.</strong> Quantity, description and VAT-exclusive unit price for each line, plus any discount.</li>
<li><strong>Calculate VAT by rate.</strong> Show the net amount and VAT for each rate and the total VAT.</li>
<li><strong>Add notations if needed.</strong> "Reverse charge applies", intra-Community supply wording, or a margin scheme endorsement.</li>
<li><strong>Issue within the time limit.</strong> Send it within 15 days of the end of the month of supply, and keep a copy for your records.</li>
</ol>

<h2>Worked example: a consultancy invoice at 23%</h2>

<p>A Dublin IT consultant invoices an Irish company for 20 days of work at EUR 250 a day, agrees a fixed EUR 250 discount, and has already received a EUR 2,000 payment on account.</p>

<table>
<thead>
<tr><th>Line</th><th>Amount (EUR)</th></tr>
</thead>
<tbody>
<tr><td>IT consultancy, 20 days at 250</td><td>5,000.00</td></tr>
<tr><td>Discount</td><td>-250.00</td></tr>
<tr><td>Net amount at 23%</td><td>4,750.00</td></tr>
<tr><td>VAT at 23%</td><td>1,092.50</td></tr>
<tr><td>Invoice total</td><td>5,842.50</td></tr>
<tr><td>Paid on account</td><td>-2,000.00</td></tr>
<tr><td>Balance due</td><td>3,842.50</td></tr>
</tbody>
</table>

<p>Check the figures: 20 times 250 is 5,000; less 250 is 4,750; 23% of 4,750 is 1,092.50; 4,750 plus 1,092.50 is 5,842.50; and less the 2,000 already paid leaves 3,842.50. If the 2,000 was received before the supply, the invoice should also show the date that payment was made. In our <a href="/invoice-generator">invoice generator</a>, enter the line, a fixed 250 discount, a 23% tax rate and 2,000 in the amount paid field to get the same balance.</p>

<p>If the same consultant billed a business in Germany instead, the invoice would show no Irish VAT, include the customer's German VAT number and the note "Reverse charge applies". See our <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a> for examples.</p>

<h2>Ireland e-invoicing plans: the 2028 to 2030 roadmap</h2>

<p>Revenue has published a phased plan to bring in structured e-invoicing and real-time reporting, aligned with the EU's VAT in the Digital Age (ViDA) package. According to Revenue's <a href="https://www.revenue.ie/en/corporate/consultations-and-submissions/modernising-vat/einvoicing/implementation-phases/index.aspx" target="_blank" rel="noopener noreferrer">implementation phases page</a>:</p>

<table>
<thead>
<tr><th>Phase</th><th>Date</th><th>Who is covered</th></tr>
</thead>
<tbody>
<tr><td>Phase One</td><td>November 2028</td><td>VAT-registered large corporates: e-invoicing and real-time reporting for domestic B2B. All businesses must be able to receive e-invoices.</td></tr>
<tr><td>Phase Two</td><td>November 2029</td><td>VAT-registered businesses in cross-border EU B2B trade involving zero-rated goods or reverse charge services</td></tr>
<tr><td>Phase Three</td><td>July 2030</td><td>All intra-EU B2B transactions under the ViDA rules</td></tr>
</tbody>
</table>

<p>The important point for small businesses is the receive obligation: from November 2028 every business must be able to receive and process e-invoices from suppliers that are mandated to send them. Revenue has signalled the European standard EN 16931 for the data, and Peppol is widely expected to be the exchange network. Our guides to <a href="/blog/what-is-peppol">what Peppol is</a> and the <a href="/blog/e-invoice-template-en-16931">EN 16931 e-invoice fields</a> are a good place to start, and the <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates list</a> shows how Ireland compares with other countries.</p>

<h3>How to prepare for e-invoicing now</h3>

<p>Even if you are not a large corporate, the receive obligation in November 2028 means every VAT-registered business needs a plan. Sensible steps for 2026 and 2027:</p>

<ol>
<li>Ask your accounting software provider about its Peppol and EN 16931 roadmap and when it will support sending and receiving structured invoices.</li>
<li>Clean up customer and supplier master data: legal names, addresses and VAT numbers.</li>
<li>Make sure every invoice already carries all the details in the checklist above, because structured e-invoices make missing fields obvious.</li>
<li>Review how invoices arrive in your business today. If staff retype PDFs into the accounts, plan to replace that with automatic import.</li>
<li>Watch Revenue's VAT modernisation pages for technical specifications and any changes to the phase dates.</li>
</ol>

<h2>Common mistakes on Irish VAT invoices</h2>

<ul>
<li>Missing the date of supply when it differs from the issue date</li>
<li>Showing VAT on a reverse charge invoice, or forgetting the notation</li>
<li>Gaps in the invoice number sequence after a cancelled invoice; use a credit note instead</li>
<li>Foreign currency invoices with no euro VAT figure</li>
<li>Issuing invoices months after the supply instead of within the 15-day window</li>
<li>Charging VAT before your registration takes effect</li>
</ul>

<h2>Meet the Irish VAT invoice requirements every time</h2>

<p>Irish VAT invoice requirements are straightforward once you build them into a template: sequential numbers, full details for both parties, VAT-exclusive prices, a breakdown by rate and the right notations for reverse charge or intra-EU supplies. Plan now for the receive obligation in November 2028. Create a compliant invoice in our <a href="/invoice-generator">free invoice generator</a> or start from a clean <a href="/invoice-templates/classic">classic invoice template</a>; if you also bill in other markets, compare the rules in our <a href="/blog/turkey-e-invoice">Turkey e-invoice guide</a>. No sign-up is needed, and your PDF invoice is ready to send in a few minutes.</p>
`,
  },
  {
    slug: "brazil-nfe-invoice",
    title: "NF-e Brazil Guide: Nota Fiscal, NFS-e and the CBS/IBS Reform",
    description:
      "NF-e and nota fiscal in Brazil explained: NF-e, NFC-e and NFS-e, the national NFS-e standard, the CBS and IBS reform fields from 2026, and how invoicing works.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Brazil",
    related: [
      "mexico-cfdi-invoice",
      "e-invoicing-guide",
      "peppol-vs-clearance-model",
      "invoice-requirements-by-country",
    ],
    faqs: [
      {
        q: "What is an NF-e in Brazil?",
        a: "The NF-e (Nota Fiscal Eletrônica, model 55) is Brazil's electronic invoice for sales and movements of goods, mainly between businesses. The seller creates an XML file, signs it with a digital certificate and sends it to the state tax authority (SEFAZ) for authorisation before the goods move. Only an authorised NF-e is valid, and a printed summary called the DANFE travels with the goods.",
      },
      {
        q: "What is the difference between NF-e, NFC-e and NFS-e?",
        a: "NF-e covers goods and is authorised by the state tax authorities. NFC-e (model 65) is the consumer version used by retailers for sales to individuals at the till. NFS-e is the electronic invoice for services, which historically followed each municipality's own rules and is now moving to a single national standard managed with the federal government.",
      },
      {
        q: "Is the national NFS-e mandatory?",
        a: "Under Complementary Law 214/2025, municipalities must issue or share NFS-e in the national standard from 1 January 2026. For businesses, MEIs must use the national issuer for services to companies, and Resolution CGSN 191/2026 makes the national NFS-e issuer mandatory for Simples Nacional micro and small companies providing services from 1 November 2026. Other companies follow their municipality's integration with the national system.",
      },
      {
        q: "What are CBS and IBS?",
        a: "CBS (Contribuição sobre Bens e Serviços) and IBS (Imposto sobre Bens e Serviços) are Brazil's new dual VAT created by Constitutional Amendment 132 of 2023 and Complementary Law 214/2025. CBS is federal and will replace PIS and Cofins; IBS is shared by states and municipalities and will replace ICMS and ISS. They are being phased in between 2026 and 2033, starting with test rates.",
      },
      {
        q: "Do I have to show CBS and IBS on invoices in 2026?",
        a: "2026 is a test year. Companies in the regular regime are expected to fill the new CBS and IBS fields on NF-e and NFS-e at test rates of 0.9% CBS and 0.1% IBS, with the amounts offset rather than paid as extra tax for businesses meeting their obligations. The NFS-e committee said missing fields would not cause rejection until 31 December 2026, and Simples Nacional rules start in 2027.",
      },
      {
        q: "Can I cancel an NF-e?",
        a: "Yes, within a short window. An authorised NF-e can generally be cancelled within 24 hours of authorisation, provided the goods have not moved, through a cancellation event sent to SEFAZ. After that, corrections are handled with a return note, a complementary note or, for minor non-value errors, an electronic correction letter (CC-e). States can have their own rules, so check with your accountant.",
      },
      {
        q: "Do foreign companies need to issue NF-e to Brazilian clients?",
        a: "No. A foreign supplier without a Brazilian CNPJ is outside the nota fiscal system and sends a commercial invoice. The Brazilian client handles import taxes, withholding and foreign exchange registration on its side, and will often need a clear invoice with service description, amount and currency to close the exchange contract with its bank.",
      },
      {
        q: "What is the DANFE?",
        a: "The DANFE (Documento Auxiliar da Nota Fiscal Eletrônica) is the printed or PDF representation of an authorised NF-e. It shows the main data and the 44-digit access key, which anyone can use to check the NF-e online. The DANFE is not the invoice itself: the legal document is the signed XML authorised by SEFAZ, which both seller and buyer must keep.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> NF-e is Brazil's mandatory electronic invoice (nota fiscal) for goods: an XML file signed with a digital certificate and authorised by the state tax authority before the goods move. Services use the NFS-e, now moving to a national standard, and from 2026 invoices are gaining new CBS and IBS fields as Brazil's VAT reform begins.</p>

<p>Brazil has one of the oldest and most complex e-invoicing systems in the world. A business may need several different notas fiscais depending on whether it sells goods or services, to companies or consumers, and in which state or city. On top of that, the consumption tax reform is changing invoice layouts in 2026 and 2027. This guide explains NF-e, NFC-e and NFS-e as of 2026, the national NFS-e rollout and what the CBS and IBS reform means for invoicing. If you need a commercial invoice for a client outside Brazil, our <a href="/invoice-generator">invoice generator</a> creates one in minutes.</p>

<p><strong>Note:</strong> This is general information, not tax or legal advice. Brazilian rules vary by state and municipality and are changing quickly under the reform, so confirm details with a Brazilian accountant (contador).</p>

<h2>The main types of nota fiscal</h2>

<p>Brazil uses a clearance model: the tax authority authorises each document before it is valid. For how that compares with network models, see <a href="/blog/peppol-vs-clearance-model">Peppol vs the clearance model</a>. The main documents are:</p>

<table>
<thead>
<tr><th>Document</th><th>Used for</th><th>Authorised by</th><th>Printed version</th></tr>
</thead>
<tbody>
<tr><td>NF-e (model 55)</td><td>Sales and movements of goods, mostly B2B</td><td>State tax authority (SEFAZ)</td><td>DANFE</td></tr>
<tr><td>NFC-e (model 65)</td><td>Retail sales of goods to consumers</td><td>State tax authority (SEFAZ)</td><td>DANFE NFC-e with QR code</td></tr>
<tr><td>NFS-e</td><td>Services</td><td>Municipality, now via the national standard</td><td>DANFSe</td></tr>
<tr><td>CT-e</td><td>Freight transport services</td><td>State tax authority</td><td>DACTE</td></tr>
</tbody>
</table>

<p>Goods are mainly taxed by states (ICMS) and federal taxes, while services are mainly taxed by municipalities (ISS). That split is why goods and services have different notas, and it is exactly what the reform is designed to simplify.</p>

<h2>How NF-e works</h2>

<p>An NF-e is a structured XML document, not a PDF. The process is:</p>

<ol>
<li><strong>Register with the state.</strong> The company must have a CNPJ and a state registration (inscrição estadual) and be enabled to issue NF-e in its state.</li>
<li><strong>Get an e-CNPJ certificate.</strong> NF-e are signed with an ICP-Brasil digital certificate, usually an A1 file or A3 token.</li>
<li><strong>Set up issuing software.</strong> Use an ERP, a specialist NF-e provider or, in some states, a free issuer. The software validates the layout and tax codes.</li>
<li><strong>Create the NF-e.</strong> Enter the buyer's CNPJ or CPF, the products with their NCM codes, the CFOP operation code, quantities, prices and the tax fields (ICMS, IPI, PIS, Cofins and now CBS and IBS).</li>
<li><strong>Transmit to SEFAZ.</strong> SEFAZ checks the schema, the issuer and the data, then returns an authorisation protocol or a rejection code.</li>
<li><strong>Print the DANFE and ship.</strong> The DANFE, with the 44-digit access key and barcode, travels with the goods.</li>
<li><strong>Send the XML to the buyer.</strong> The buyer must keep the XML; many buyers will not pay without it.</li>
</ol>

<p>An authorised NF-e can generally be cancelled within 24 hours if the goods have not moved. Minor errors that do not change values or parties can be fixed with an electronic correction letter (CC-e); anything else needs a complementary or return note. Our general guide to <a href="/blog/how-to-correct-an-invoice">correcting invoices</a> covers the principle.</p>

<h3>NFC-e for retailers</h3>

<p>Shops and restaurants selling to consumers usually issue the NFC-e (model 65) instead of the NF-e. It is authorised by SEFAZ in the same way but is designed for the till: the customer gets a simplified receipt with a QR code that links to the authorised document, and the buyer can be identified by CPF if the customer asks. Many states run consumer programmes that reward shoppers for asking for their CPF on the receipt. The NFC-e has replaced older fiscal printers in most states.</p>

<h3>Storing the XML</h3>

<p>Both the issuer and the buyer must keep the authorised XML files for the statutory period, usually at least five years, along with cancellation and correction events. The DANFE PDF alone is not enough. Most ERPs archive XMLs automatically, but small businesses using free issuers should download and back them up regularly.</p>

<h2>NFS-e and the national standard</h2>

<p>For services, each of Brazil's thousands of municipalities historically ran its own NFS-e system and layout, which made life hard for firms working across cities. The national NFS-e standard fixes this with a single layout, a national issuer (Emissor Nacional) and a shared data environment.</p>

<ul>
<li><strong>Municipalities:</strong> Complementary Law 214/2025 requires municipalities and the Federal District to issue or share NFS-e in the national standard from 1 January 2026.</li>
<li><strong>MEI micro-entrepreneurs:</strong> must use the national issuer for services provided to companies. The Receita Federal's <a href="https://www.gov.br/receitafederal/pt-br/assuntos/reforma-tributaria/emitir-nota-fiscal-de-servico-eletronica-nfs-e" target="_blank" rel="noopener noreferrer">NFS-e issuing service page</a> describes it as mandatory for MEI operations with legal entities.</li>
<li><strong>Simples Nacional companies:</strong> Resolution CGSN 191/2026 makes the national NFS-e issuer mandatory for micro and small companies in Simples Nacional that provide services, from 1 November 2026, replacing an earlier 1 September date.</li>
<li><strong>Other companies:</strong> issue through their municipality's system or the national issuer, depending on how the city has integrated; the data ends up in the national environment either way.</li>
</ul>

<p>Issuing on the national web issuer takes a few steps: log in with a gov.br account or digital certificate, choose simplified or full issue, enter the client's CPF or CNPJ, describe the service, enter the value and confirm. The <a href="https://www.gov.br/nfse/pt-br" target="_blank" rel="noopener noreferrer">national NFS-e portal</a> publishes the technical notes, including the layout changes for CBS and IBS.</p>

<h2>The CBS and IBS reform: what changes on invoices</h2>

<p>Constitutional Amendment 132 of 2023 and Complementary Law 214/2025 replace five consumption taxes with a dual VAT:</p>

<ul>
<li><strong>CBS</strong> (federal) replaces PIS and Cofins.</li>
<li><strong>IBS</strong> (states and municipalities) replaces ICMS and ISS.</li>
<li>A selective tax applies to specific harmful goods.</li>
</ul>

<p>The transition runs from 2026 to 2033. For invoicing, the key dates as of late 2026 are:</p>

<table>
<thead>
<tr><th>Period</th><th>What happens</th></tr>
</thead>
<tbody>
<tr><td>2026</td><td>Test year: CBS at 0.9% and IBS at 0.1% shown on documents; new fields added to NF-e and NFS-e layouts</td></tr>
<tr><td>3 August 2026</td><td>Reported start of mandatory CBS and IBS fields on NF-e for regular-regime companies, with strict rejection rules deferred</td></tr>
<tr><td>1 November 2026</td><td>National NFS-e issuer mandatory for Simples Nacional service companies</td></tr>
<tr><td>31 December 2026</td><td>End of the period in which missing CBS and IBS fields do not cause NFS-e rejection, per the NFS-e committee</td></tr>
<tr><td>1 January 2027</td><td>CBS and IBS rules for Simples Nacional companies take effect; CBS replaces PIS and Cofins</td></tr>
<tr><td>2029 to 2032</td><td>IBS gradually replaces ICMS and ISS</td></tr>
<tr><td>2033</td><td>Old system fully replaced</td></tr>
</tbody>
</table>

<p>The practical message for 2026 is that your invoicing software must handle the new fields now, even though the test-year amounts are offset for businesses that meet their obligations. Dates for field validation have moved several times during 2026, so treat any single date as subject to change and follow your software provider's notices.</p>

<h3>What MEI and Simples Nacional businesses should do before 2027</h3>

<p>Small businesses carry much of the change in the coming months. A practical checklist:</p>

<ol>
<li>Create or check your gov.br account and confirm you can log in to the national NFS-e issuer, or that your invoicing software is accredited for the national API.</li>
<li>Register your usual services with the correct national service code, so each nota takes seconds to issue.</li>
<li>Keep client CPF and CNPJ numbers and addresses up to date in one place.</li>
<li>Ask your contador how CBS and IBS will apply to you from 1 January 2027, including whether you will show the new taxes on your notas, since this affects what business clients can credit.</li>
<li>Download and archive your issued notas each month.</li>
</ol>

<h2>Worked example: a services nota in the 2026 test year</h2>

<p>A São Paulo consultancy taxed in the regular regime invoices a client R$10,000 for a training project. ISS in Brazil is usually included in the price rather than added on top, and the municipal rate here is assumed to be 5% (ISS rates range from 2% to 5% depending on the service and city).</p>

<table>
<thead>
<tr><th>Item</th><th>Amount (R$)</th></tr>
</thead>
<tbody>
<tr><td>Service price (total on the NFS-e)</td><td>10,000.00</td></tr>
<tr><td>ISS at 5% (included in price)</td><td>500.00</td></tr>
<tr><td>CBS test field at 0.9%</td><td>90.00</td></tr>
<tr><td>IBS test field at 0.1%</td><td>10.00</td></tr>
<tr><td>Amount charged to client</td><td>10,000.00</td></tr>
</tbody>
</table>

<p>The arithmetic: 5% of 10,000 is 500; 0.9% of 10,000 is 90; 0.1% of 10,000 is 10. The client still pays 10,000, because ISS is embedded in the price and the 2026 CBS and IBS amounts are informational test values that are offset for compliant businesses. From 2027, CBS replaces PIS and Cofins at its full rate, so the same invoice will look different. Withholdings on services to companies, such as income tax withholding, would reduce the cash received and appear on the nota; see our guide to <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a>.</p>

<p>Our <a href="/invoice-generator">invoice generator</a> adds one tax rate on top of the price, so it suits commercial invoices and pro formas for foreign clients rather than Brazilian notas. For a 10,000 export service, for example, you would enter the line with no tax, add any fixed discount, and record a deposit in the amount paid field.</p>

<h3>Why the 2026 test year still matters</h3>

<p>It is tempting to ignore CBS and IBS until the money is real, but the test year is how the government checks that millions of invoices carry the right data before rates rise in 2027. Businesses that fill the fields correctly now find problems while they are cheap to fix: wrong service codes, missing classification of goods, or ERP settings that cannot handle a new tax line. From 2027, the CBS on your invoices determines how much credit your business customers can take, so invoice accuracy becomes a commercial issue as well as a compliance one. Clients will prefer suppliers whose notas give them clean credits.</p>

<h2>What a nota fiscal contains</h2>

<p>Each nota is structured data, but the business content is familiar from any <a href="/blog/tax-invoice-guide">tax invoice</a>:</p>

<ul>
<li>Issuer CNPJ, name, address and state or municipal registration</li>
<li>Buyer CNPJ or CPF, name and address</li>
<li>Number, series, issue date and the 44-digit access key</li>
<li>Products with NCM codes and CFOP, or services with the national service code</li>
<li>Quantities, unit prices, discounts and totals</li>
<li>Tax fields: ICMS, IPI, PIS, Cofins, ISS and, from 2026, CBS and IBS</li>
<li>Transport details for goods, and the authorisation protocol</li>
</ul>

<p>Your own numbering must follow the series rules of each document type. For general principles see our <a href="/blog/invoice-numbering-system">invoice numbering guide</a>.</p>

<h2>Foreign suppliers and freelancers billing Brazil</h2>

<p>A freelancer or company outside Brazil without a CNPJ cannot issue a nota fiscal and does not need to. You send a normal commercial invoice; the Brazilian client handles import taxes, withholding and the foreign exchange contract with its bank. Payment usually arrives by international wire, so expect the client to need your full legal name, address, bank details and a reference that matches the invoice. Banks often ask for a clear invoice that names both parties, describes the service, states the amount and currency and gives payment details. Our guides to <a href="/blog/foreign-currency-invoice">foreign currency invoices</a> and <a href="/blog/commercial-invoice-template">commercial invoices</a> help, and the <a href="/invoice-templates/corporate">corporate invoice template</a> is a good fit for this kind of bill.</p>

<h2>Common mistakes with Brazilian notas</h2>

<ul>
<li>Using the wrong CFOP or NCM code, the most common cause of SEFAZ rejections</li>
<li>Letting the digital certificate expire; nothing can be signed until it is renewed</li>
<li>Treating the DANFE PDF as the invoice and failing to store the XML</li>
<li>Missing the cancellation window and trying to cancel instead of issuing a return note</li>
<li>Ignoring the new CBS and IBS fields because 2026 amounts are offset</li>
</ul>

<h2>Brazil in the global e-invoicing landscape</h2>

<p>Brazil pioneered tax-authority clearance, and its model influenced systems across Latin America, including Mexico's CFDI (see our <a href="/blog/mexico-cfdi-invoice">CFDI guide</a>). Similar real-time systems now run in Turkey and Egypt (see the <a href="/blog/turkey-e-invoice">Turkey e-invoice</a> and <a href="/blog/egypt-e-invoicing">Egypt e-invoicing</a> guides). For the full picture, read our <a href="/blog/e-invoicing-guide">e-invoicing guide</a>.</p>

<h2>Get your NF-e and nota fiscal process ready</h2>

<p>NF-e, NFC-e and NFS-e are part of daily life for Brazilian businesses, and the reform adds work in 2026: update your software for the CBS and IBS fields, move services onto the national NFS-e standard if you are an MEI or Simples Nacional company, and keep your digital certificate valid. For pro formas, quotes and invoices to clients outside Brazil, use our <a href="/invoice-generator">free invoice generator</a>. Your finished invoice downloads as a PDF, free and with no sign-up.</p>
`,
  },
];
