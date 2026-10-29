import type { PostDraft } from "../blog";

export const INDIA_GST_2026_POSTS: PostDraft[] = [
  {
    slug: "input-tax-credit-gst",
    title: "Input Tax Credit Under GST: Conditions, GSTR-2B and Time Limits",
    description:
      "Input tax credit under GST explained: the section 16 conditions, GSTR-2B and IMS matching, blocked credits, the 180-day and 30 November limits, with an example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "India",
    related: [
      "gst-invoice-management-system",
      "gst-return-filing-india",
      "gst-invoice-guide",
      "gst-2-0-new-gst-rates",
    ],
    faqs: [
      {
        q: "What is input tax credit under GST?",
        a: "Input tax credit is the GST you paid on business purchases that you can deduct from the GST you collect on sales. If you charged Rs 1,26,000 of output tax this month and paid Rs 91,800 of eligible GST on purchases, you pay only the Rs 34,200 difference to the government. Credit is available only to registered persons under the regular scheme, and only when the conditions in section 16 of the CGST Act are met.",
      },
      {
        q: "What are the conditions to claim ITC under GST?",
        a: "Under section 16(2) you need a valid tax invoice or debit note, the invoice must appear in your GSTR-2B, the credit must not be restricted there, you must have received the goods or services, the supplier must have paid the tax to the government, and you must file your GSTR-3B. You also need to pay the supplier within 180 days, and claim the credit before the section 16(4) deadline.",
      },
      {
        q: "Can I claim ITC if the invoice is not in GSTR-2B?",
        a: "No. Since 1 January 2022, section 16(2)(aa) allows credit only when the supplier has reported the invoice in GSTR-1 or IFF and it has been communicated to you in GSTR-2B. If an invoice is missing, ask the supplier to upload it. Once it appears in a later GSTR-2B, you can claim it in that month's GSTR-3B, as long as you are still within the annual time limit.",
      },
      {
        q: "What is the last date to claim ITC for FY 2025-26?",
        a: "Section 16(4) sets the deadline as 30 November following the end of the financial year, or the date you file the annual return, whichever is earlier. For invoices dated in FY 2025-26 that means 30 November 2026, unless you file your GSTR-9 sooner. In practice, the credit must be included in a GSTR-3B filed on or before that date, so do not leave it to the last return.",
      },
      {
        q: "What happens if I do not pay my supplier within 180 days?",
        a: "The second proviso to section 16(2) and rule 37 require you to add back the credit you claimed on that invoice, with interest, if you have not paid the value plus tax within 180 days of the invoice date. The reversal is reported in GSTR-3B. When you later pay the supplier, you can re-claim the credit. The rule does not apply to reverse charge supplies.",
      },
      {
        q: "Which items are blocked from input tax credit?",
        a: "Section 17(5) blocks credit on items such as most passenger motor vehicles and their insurance and repairs, food and beverages, outdoor catering, beauty treatment and health services, club and gym memberships, travel benefits for employees on vacation, construction of immovable property on your own account, goods lost, stolen or given as free samples, and goods or services used for personal consumption. Each has exceptions, so read the clause before deciding.",
      },
      {
        q: "Can a composition dealer claim input tax credit?",
        a: "No. A person who opts for the composition scheme under section 10 cannot claim input tax credit on purchases and cannot charge GST to customers. They issue a bill of supply instead of a tax invoice and pay tax at a flat rate on turnover from their own funds. If most of your purchases carry high GST and your buyers want credit, the regular scheme is usually better.",
      },
      {
        q: "Did GST 2.0 change input tax credit rules?",
        a: "The rate changes from 22 September 2025 cut most goods to 5% or 18% and added a 40% rate for a short list of items, but they did not rewrite the section 16 conditions. What changed in practice is the tax on each invoice, the end of compensation cess on most goods, and more cases of inverted duty where input tax exceeds output tax, which can create refund claims.",
      },
      {
        q: "How do I check my eligible ITC each month?",
        a: "Open the Invoice Management System on the GST portal after the 1st of the month, accept, reject or keep pending each supplier record, and then review GSTR-2B, which is generated on the 14th. Reconcile it with your purchase register, remove blocked credits and items with pending payment over 180 days, and enter the final figure in Table 4 of GSTR-3B.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Input tax credit under GST lets a registered business deduct the GST it paid on business purchases from the GST it collects on sales. You can claim it only if you hold a valid tax invoice, the invoice shows in your GSTR-2B, you received the goods or services, the supplier paid the tax, you pay the supplier within 180 days, and you claim it by 30 November after the financial year.</p>

<p>Input tax credit, or ITC, is what makes GST a tax on value added rather than a tax on every step of the chain. For a trader or service business, it is often the difference between a healthy margin and a thin one. This guide covers the conditions in section 16 of the CGST Act, how GSTR-2B and the Invoice Management System decide what you can claim, blocked credits, the deadlines that catch people out, and a worked example. If you also issue invoices, the same rules explain why your buyers care so much about a correct <a href="/blog/gst-invoice-guide">GST invoice</a> from you. You can create one in minutes with our free <a href="/invoice-generator">invoice generator</a>.</p>

<p><em>This article is general information as of 2026, not tax or legal advice. Check the current law on the CBIC and GST portal sites or with a chartered accountant before you file.</em></p>

<h2>What is input tax credit under GST?</h2>
<p>Every time you buy goods or services for your business from a registered supplier, the price includes GST: CGST and SGST for a purchase within your state, or IGST for a purchase from another state. When you sell, you collect GST from your customers. ITC lets you set the tax you paid off against the tax you collected, so you pay only the difference in cash.</p>
<p>The credit sits in your electronic credit ledger on the GST portal. It is used in a fixed order: IGST credit first against IGST liability, then against CGST and SGST; CGST credit against CGST and then IGST; SGST credit against SGST and then IGST. CGST credit can never pay SGST, or the other way round. Your filing software or the GSTR-3B offset table handles this order for you.</p>
<p>Only regular taxpayers can claim ITC. A business in the <a href="/blog/gst-composition-scheme">GST composition scheme</a> pays a flat rate on turnover and gets no credit at all, and unregistered businesses cannot claim it either. If you are not yet registered, start with our guide to <a href="/blog/gst-registration-india">GST registration in India</a>.</p>

<h2>ITC conditions under section 16</h2>
<p>Section 16(2) of the CGST Act lists the conditions. You need all of them, not most of them:</p>
<ol>
<li><strong>A valid tax document.</strong> You hold a tax invoice or debit note issued by a registered supplier, or another prescribed document such as a bill of entry for imports.</li>
<li><strong>The invoice is in your GSTR-2B.</strong> Under clause (aa), the supplier must have reported the invoice in GSTR-1 or IFF, and it must have been communicated to you in GSTR-2B.</li>
<li><strong>The credit is not restricted.</strong> Under clause (ba), the credit must not be flagged as ineligible in GSTR-2B, which happens when the supplier is in default.</li>
<li><strong>You received the goods or services.</strong> Delivery to a third party on your instruction counts. For goods in lots or instalments, credit is available when the last lot arrives.</li>
<li><strong>The supplier paid the tax.</strong> The tax charged must actually have been paid to the government, in cash or through the supplier's own credit.</li>
<li><strong>You filed your return.</strong> You must furnish your return under section 39, which for most businesses is GSTR-3B.</li>
</ol>
<p>On top of these, the second proviso to section 16(2) requires you to pay the supplier, including the tax, within 180 days of the invoice date, and section 16(4) sets an annual cut-off. Section 16(3) adds one more: you cannot claim depreciation under income tax on the GST component of a capital asset and also take ITC on it. The full text is on the <a href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_CGST_act/active/chapter5/section16_v1.00.html" target="_blank" rel="noopener noreferrer">CBIC page for section 16 of the CGST Act</a>.</p>

<h2>GSTR-2B and the Invoice Management System</h2>
<p>GSTR-2B is the monthly statement that tells you which credit the system will allow. It is built from what your suppliers file, not from your own purchase records. Since October 2024, records first land in the Invoice Management System (IMS), where you can accept, reject or keep each one pending. GSTR-2B is then generated on the 14th of the following month based on those actions, and you can recompute it after changing an action until you file GSTR-3B. Our guide to the <a href="/blog/gst-invoice-management-system">GST Invoice Management System</a> walks through the screens.</p>
<h3>What to do when an invoice is missing</h3>
<p>If a purchase invoice is in your books but not in GSTR-2B, you cannot claim it yet. The usual reasons are that the supplier has not filed GSTR-1, filed it late, typed your GSTIN wrongly, or reported it as a B2C sale. Send the supplier the invoice number, date and value and ask them to correct it. Once it appears in a later GSTR-2B, you claim it in that month's GSTR-3B.</p>
<h3>Why your own GSTR-1 matters to your buyers</h3>
<p>The same rule works in reverse. If you file GSTR-1 late or get a buyer's GSTIN wrong, your buyer loses credit until you fix it, and that is how payment disputes start. The comparison in <a href="/blog/gstr-1-vs-gstr-3b">GSTR-1 vs GSTR-3B</a> explains which return feeds which.</p>

<h2>Blocked credits under section 17(5)</h2>
<p>Some purchases never give credit, even with a perfect invoice. The table below summarises the main blocked items in section 17(5) and the most common exceptions.</p>
<table>
<thead><tr><th>Blocked item</th><th>Common exception</th></tr></thead>
<tbody>
<tr><td>Motor vehicles for up to 13 people, and their insurance, repair and servicing</td><td>Vehicles used to resell vehicles, carry passengers, train drivers, or transport goods</td></tr>
<tr><td>Food and beverages, outdoor catering, beauty treatment, health services, cosmetic surgery</td><td>Where you buy them to supply the same category onward, or where the law makes them compulsory for employees</td></tr>
<tr><td>Club, health and fitness centre memberships</td><td>None for ordinary businesses</td></tr>
<tr><td>Travel benefits to employees on leave or home travel</td><td>Where an employer is legally required to provide them</td></tr>
<tr><td>Works contract and goods or services for building immovable property on your own account</td><td>Plant and machinery, and supplies for onward works contract services</td></tr>
<tr><td>Goods lost, stolen, destroyed, written off, or given as gifts or free samples</td><td>None</td></tr>
<tr><td>Goods or services used for personal consumption</td><td>None</td></tr>
<tr><td>Tax paid under a demand for fraud or wilful misstatement</td><td>None</td></tr>
</tbody>
</table>
<p>Where a purchase is used partly for taxable and partly for exempt or personal use, section 17(1) and (2) and rules 42 and 43 require you to apportion the credit. A business that also sells exempt items and issues a <a href="/blog/bill-of-supply-gst">bill of supply</a> for them needs to reverse the share of common credit that relates to those exempt sales.</p>

<h2>ITC time limits: 180 days, 30 November and rule 37A</h2>
<p>Three deadlines decide whether a valid credit stays valid.</p>
<table>
<thead><tr><th>Rule</th><th>What it says</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>180-day payment rule (section 16(2), rule 37)</td><td>If you have not paid the supplier the value plus tax within 180 days of the invoice date, add back the credit with interest</td><td>Track unpaid purchase invoices by age; reverse in GSTR-3B; re-claim when you pay</td></tr>
<tr><td>Annual cut-off (section 16(4))</td><td>No credit after 30 November following the financial year, or after filing the annual return, whichever is earlier</td><td>Claim all FY 2025-26 credit in a GSTR-3B filed by 30 November 2026</td></tr>
<tr><td>Supplier default (rule 37A)</td><td>If the supplier has not filed GSTR-3B for the period by 30 September of the following year, reverse the credit</td><td>Reverse by 30 November; re-claim once the supplier files and pays</td></tr>
</tbody>
</table>
<p>The 180-day rule overlaps with commercial law too. If you buy from a micro or small enterprise, the separate <a href="/blog/msme-45-days-payment-rule">MSME 45-day payment rule</a> affects your income tax deduction, so paying suppliers promptly protects you twice.</p>

<h2>How to claim input tax credit step by step</h2>
<ol>
<li><strong>Check every purchase invoice when it arrives.</strong> Confirm your GSTIN, the supplier's GSTIN, the place of supply, the <a href="/blog/hsn-sac-code">HSN or SAC code</a>, the rate and the tax split. A <a href="/blog/three-way-match">three-way match</a> against the purchase order and delivery note catches errors early.</li>
<li><strong>Record it in your purchase register</strong> with the invoice date and the date you received the goods or services.</li>
<li><strong>Act on IMS</strong> during the month: accept correct records, reject wrong ones, and keep pending those you are still checking.</li>
<li><strong>Download GSTR-2B</strong> after the 14th and reconcile it line by line with your register.</li>
<li><strong>Remove what you cannot claim:</strong> blocked credits, personal use, items not yet received, and invoices unpaid beyond 180 days.</li>
<li><strong>Claim the eligible figure in Table 4 of GSTR-3B</strong> and report any reversals in the reversal rows.</li>
<li><strong>Follow up missing invoices</strong> with suppliers and claim them when they appear, before the 30 November cut-off.</li>
</ol>

<h2>Worked example: ITC for one month</h2>
<p>A Pune trader registered under the regular scheme has these figures for a month. All purchases and sales are within Maharashtra at 18%, so tax is split equally between CGST and SGST.</p>
<table>
<thead><tr><th>Item</th><th>Taxable value</th><th>GST at stated rate</th><th>Claimable now?</th></tr></thead>
<tbody>
<tr><td>Stock purchases, in GSTR-2B</td><td>Rs 4,50,000</td><td>Rs 81,000</td><td>Yes</td></tr>
<tr><td>Office laptop, in GSTR-2B</td><td>Rs 60,000</td><td>Rs 10,800</td><td>Yes (no depreciation on the GST part)</td></tr>
<tr><td>Stock purchase, supplier has not filed GSTR-1</td><td>Rs 50,000</td><td>Rs 9,000</td><td>No, not in GSTR-2B yet</td></tr>
<tr><td>Staff lunch from a restaurant, at 5%</td><td>Rs 10,000</td><td>Rs 500</td><td>No, blocked under section 17(5)</td></tr>
<tr><td><strong>Total GST paid on purchases</strong></td><td><strong>Rs 5,70,000</strong></td><td><strong>Rs 1,01,300</strong></td><td></td></tr>
</tbody>
</table>
<p>Eligible ITC this month is Rs 81,000 + Rs 10,800 = <strong>Rs 91,800</strong>. Sales for the month are Rs 7,00,000, so output tax at 18% is <strong>Rs 1,26,000</strong> (Rs 63,000 CGST and Rs 63,000 SGST). The trader pays Rs 1,26,000 minus Rs 91,800 = <strong>Rs 34,200</strong> in cash, split Rs 17,100 CGST and Rs 17,100 SGST.</p>
<p>Next month, the late supplier files GSTR-1 and the Rs 9,000 appears in GSTR-2B. The trader claims it then. The Rs 500 on the staff lunch is a cost, not a credit, so it goes into the profit and loss account as part of the expense. If the trader still has not paid the laptop supplier 180 days after the invoice date, the Rs 10,800 must be added back with interest until payment is made.</p>
<p>Want to check your own numbers? Our <a href="/tools/sales-tax-calculator">tax calculator</a> works for GST at any rate, and the tax on each line is easier to verify when your invoices show it clearly.</p>

<h2>Input tax credit after GST 2.0</h2>
<p>From 22 September 2025, the GST Council's rate rationalisation moved most goods to two main slabs of 5% and 18%, with a 40% rate for a short list of luxury and sin goods, and phased out compensation cess on most items. Our guide to the <a href="/blog/gst-2-0-new-gst-rates">GST 2.0 new GST rates</a> has the detail. For ITC, three practical effects matter:</p>
<ul>
<li><strong>Invoices must show the right rate for the date of supply.</strong> A purchase invoice that still charges an old rate after the change is a problem for both sides. Ask for a corrected invoice or a <a href="/blog/credit-note-guide">credit note</a> rather than claiming excess credit.</li>
<li><strong>Inverted duty is more common.</strong> Where your inputs now carry a higher rate than your output, credit builds up. Refunds of accumulated credit on inverted duty are claimed through the refund process, subject to the rules for that category.</li>
<li><strong>Exempt items need reversals.</strong> Some goods and services moved to nil or exempt, which means common credit attributable to those sales must be apportioned and reversed.</li>
</ul>

<h2>Common ITC mistakes small businesses make</h2>
<ul>
<li>Claiming from the purchase register instead of GSTR-2B.</li>
<li>Claiming CGST and SGST on a purchase that should have been IGST, or the reverse, because the supplier got the place of supply wrong.</li>
<li>Forgetting to self-invoice and pay tax first on <a href="/blog/reverse-charge-invoice">reverse charge</a> purchases. The credit only follows once the tax is paid.</li>
<li>Treating a car, staff meals or a club fee as eligible because the expense is business related.</li>
<li>Letting old invoices slip past 30 November, especially those from suppliers who file late.</li>
<li>Ignoring the 180-day clock on long credit terms.</li>
</ul>

<h2>Create GST invoices your buyers can claim credit on</h2>
<p>Input tax credit under GST rewards clean paperwork on both sides: valid invoices, timely GSTR-1 filings and prompt payment. When you sell, give your customers a tax invoice with your GSTIN, theirs, the place of supply, HSN or SAC codes and the tax split, so their credit flows without a chase. Build one free with our <a href="/invoice-generator">GST-ready invoice generator</a>, or start from a clean layout in the <a href="/invoice-templates/corporate">corporate invoice template</a>.</p>
`,
  },
  {
    slug: "lut-under-gst",
    title: "LUT in GST: How to Export Services Without Paying IGST",
    description:
      "LUT in GST explained for exporters and freelancers: who needs Form RFD-11, how to file it on the GST portal, invoice wording, the one-year rule and refunds.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "India",
    related: [
      "invoice-international-clients",
      "gst-registration-india",
      "foreign-currency-invoice",
      "section-44ada-freelancers",
    ],
    faqs: [
      {
        q: "What is LUT in GST?",
        a: "A Letter of Undertaking, filed on Form GST RFD-11, lets a registered person export goods or services, or supply to an SEZ, without paying IGST first. Exports are zero-rated under section 16 of the IGST Act, and the LUT is the simpler of the two routes rule 96A of the CGST Rules allows. You promise to complete the export and receive payment within the time limits, and pay tax with interest if you do not.",
      },
      {
        q: "Is LUT mandatory for export of services?",
        a: "It is not mandatory, but without it you must charge and pay IGST on each export invoice and then claim it back as a refund, which ties up cash for weeks or months. Most registered service exporters therefore file an LUT at the start of each financial year. If you are not registered for GST because your turnover is below the threshold, you cannot file an LUT and do not need one.",
      },
      {
        q: "Do freelancers need GST registration to export services?",
        a: "Export of services is treated as an inter-state supply, but service providers with aggregate turnover up to Rs 20 lakh (Rs 10 lakh in special category states) are generally exempt from registration. Export receipts count towards that turnover. Once you cross the threshold you must register, and then filing an LUT lets you keep invoicing foreign clients without IGST. Check your state's limit before deciding.",
      },
      {
        q: "How long is an LUT valid?",
        a: "An LUT is valid for the financial year for which it is furnished. On the GST portal its status changes to Expired at the end of that year, so you file a fresh one for each new financial year. Because it must be in place before you make zero-rated supplies, the safest practice is to file it in March or early April, before the first export invoice of the year.",
      },
      {
        q: "What should an export invoice under LUT say?",
        a: "Rule 46 of the CGST Rules requires the endorsement Supply meant for export under Letter of Undertaking without payment of integrated tax, or the SEZ equivalent. Also show your GSTIN, the client's name and full overseas address, the place of supply as outside India, the SAC code, the value in foreign currency and rupees, and IGST at zero. Quoting your LUT ARN is good practice.",
      },
      {
        q: "What happens if the foreign client pays late?",
        a: "For services, rule 96A expects payment in convertible foreign exchange, or in rupees where the Reserve Bank of India permits, within one year of the invoice date or any extended period allowed. If payment does not arrive in time, you must pay the IGST with interest. Once the payment is received, the tax paid can be claimed back. Track export receivables by age so nothing quietly crosses the one-year mark.",
      },
      {
        q: "Can I get a refund of ITC if I export under LUT?",
        a: "Yes. Because exports under LUT carry no IGST, the GST you paid on inputs such as a laptop, software or co-working space can build up in your credit ledger. You can claim a refund of that unutilised credit by filing Form RFD-01, generally within two years of the relevant date. Keep invoices, bank realisation evidence and your GSTR-1 and GSTR-3B filings consistent so the refund is not delayed.",
      },
      {
        q: "Who cannot file an LUT?",
        a: "The GST portal states that any registered person can furnish an LUT except someone who has been prosecuted for tax evasion of Rs 2.5 crore or more under the CGST Act, the IGST Act or the earlier tax laws. Such a person must instead execute a bond, usually with a bank guarantee, with the jurisdictional officer before exporting without paying IGST.",
      },
      {
        q: "Are intermediary services now treated as exports?",
        a: "Commentary on the Finance Act, 2026 reports that it omitted section 13(8)(b) of the IGST Act, which used to fix the place of supply of intermediary services at the supplier's location. Without it, the general rule applies and the place of supply follows the recipient's location, so many cross-border agents and commission earners can now qualify as exporters. Confirm the effective date and your facts with an adviser.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An LUT in GST is a Letter of Undertaking filed on Form GST RFD-11 that lets a registered exporter, including a freelancer billing foreign clients, export services without paying IGST. You file it online on the GST portal once per financial year, before your first export invoice, and then issue zero-rated invoices marked as supplies under LUT.</p>

<p>If you are an Indian developer, designer, consultant or agency billing clients abroad, the LUT is one of the most useful forms in GST. Without it, you pay 18% IGST on every export invoice and wait for a refund. With it, you pay nothing on the export itself. This guide explains when an LUT applies, the conditions for an export of services, how to file it step by step, what your invoice must say, and a worked example. If you are new to billing overseas, our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers the basics, and you can build the invoice itself with our free <a href="/invoice-generator">invoice generator</a>.</p>

<p><em>This article is general information as of 2026, not tax or legal advice. Confirm the rules on the GST portal or with a chartered accountant before you rely on them.</em></p>

<h2>What is an LUT under GST?</h2>
<p>Exports of goods and services, and supplies to SEZ units and developers, are zero-rated supplies under section 16 of the IGST Act. Zero-rated means the supply carries no tax in the end, but you can still claim input tax credit on what you bought to make it. The <a href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_IGST_Act/active/chaptervii/section16_v1.00.html" target="_blank" rel="noopener noreferrer">CBIC text of section 16 of the IGST Act</a> gives two ways to make a zero-rated supply:</p>
<ul>
<li><strong>Under LUT or bond, without paying IGST,</strong> and then claim a refund of unused input tax credit.</li>
<li><strong>On payment of IGST,</strong> and then claim a refund of the IGST paid.</li>
</ul>
<p>The LUT is your written promise that you will meet the export conditions, and that you will pay the tax with interest if you do not. Rule 96A of the CGST Rules sets out the details. Unlike a bond, an LUT needs no bank guarantee, which is why almost every eligible exporter uses it.</p>

<h2>LUT vs paying IGST and claiming a refund</h2>
<table>
<thead><tr><th>Point</th><th>Export under LUT</th><th>Export with IGST paid</th></tr></thead>
<tbody>
<tr><td>IGST on the invoice</td><td>Nil</td><td>18% for most services, paid in cash or from credit</td></tr>
<tr><td>Cash flow</td><td>No tax outflow on the export</td><td>Tax paid upfront, recovered later</td></tr>
<tr><td>Refund claimed</td><td>Unutilised input tax credit, through RFD-01</td><td>IGST paid on exports, processed from your shipping or return data</td></tr>
<tr><td>Paperwork</td><td>One RFD-11 filing per financial year</td><td>No LUT, but a refund to follow on every period</td></tr>
<tr><td>Best for</td><td>Freelancers, agencies and most service exporters</td><td>Businesses that cannot file an LUT or have large credit to use</td></tr>
</tbody>
</table>

<h2>When is a service an export under GST?</h2>
<p>The LUT only helps if your supply is actually an export. Section 2(6) of the IGST Act sets five conditions, and all of them must be met:</p>
<ol>
<li>The supplier of the service is located in India.</li>
<li>The recipient is located outside India.</li>
<li>The place of supply is outside India.</li>
<li>You receive payment in convertible foreign exchange, or in Indian rupees where the Reserve Bank of India permits.</li>
<li>You and the recipient are not merely establishments of the same person, such as an Indian branch and its foreign head office.</li>
</ol>
<p>The place of supply test is where most disputes arise. For most professional services, such as software development, design, writing and consulting, the place of supply is the recipient's location, so a client abroad means an export. Services tied to property or events in India, or performed on goods physically in India, follow different rules.</p>
<h3>The intermediary change in 2026</h3>
<p>For years, intermediaries such as agents arranging supplies between two other parties were taxed as if the place of supply was in India, so their commissions from foreign principals did not count as exports. Commentary on the Finance Act, 2026 reports that it omitted section 13(8)(b) of the IGST Act, with effect reported from 30 March 2026, so intermediary services now follow the general recipient-location rule. If you earn commissions from overseas principals, take advice on whether you can now invoice them under LUT.</p>

<h2>Who can file an LUT, and do freelancers need GST registration?</h2>
<p>Any registered person can file an LUT, except someone prosecuted for tax evasion of Rs 2.5 crore or more under the GST laws or the old indirect tax laws. That person must execute a bond instead.</p>
<p>The bigger question for freelancers is registration. Exports of services are treated as inter-state supplies, but service providers whose aggregate turnover is within the registration threshold, generally Rs 20 lakh or Rs 10 lakh in special category states, are exempt from registering. Export receipts count in that turnover. If you are below the limit and unregistered, you invoice without GST and without an LUT. Once you cross it, register first, using our guide to <a href="/blog/gst-registration-india">GST registration in India</a>, then file the LUT before your next export invoice.</p>
<p>GST is separate from income tax. Many software and design freelancers also use presumptive taxation, explained in our guides to <a href="/blog/section-44ada-freelancers">section 44ADA for professionals</a> and <a href="/blog/section-44ad">section 44AD presumptive taxation</a> for businesses.</p>

<h2>How to file an LUT on the GST portal</h2>
<p>The <a href="https://tutorial.gst.gov.in/userguide/refund/Furnishing_of_Letter_of_Undertaking_for_Export_of_Goods_or_Services.htm" target="_blank" rel="noopener noreferrer">GST portal's user guide for furnishing an LUT</a> describes the process. In short:</p>
<ol>
<li>Log in to the GST portal and go to <strong>Services, User Services, Furnish Letter of Undertaking (LUT)</strong>.</li>
<li>Select the financial year for which you are filing.</li>
<li>If you had a manually approved LUT for an earlier period, you can upload it, up to 2 MB.</li>
<li>Tick the self-declarations, including that you will export within the time allowed and pay tax with interest if you fail to.</li>
<li>Enter the name, address and occupation of two independent witnesses.</li>
<li>Enter the place and choose the authorised signatory, such as the proprietor, a working partner or a managing director.</li>
<li>Preview the form as a PDF, then sign with a digital signature certificate (DSC) or electronic verification code (EVC).</li>
<li>Note the ARN. You get an acknowledgement by SMS and email, and you can track it under View My Submitted LUTs.</li>
</ol>
<p>The guide notes that if a tax officer takes no action within three working days, the status shows as Deemed Approved. File before your first zero-rated supply of the year; the portal guide says the LUT must be furnished before effecting such supply. Many exporters file in March for the coming year.</p>

<h2>What your export invoice must show</h2>
<p>An export invoice is still a GST tax invoice. Rule 46 of the CGST Rules requires an endorsement on export invoices issued without payment of tax. A compliant export invoice includes:</p>
<ul>
<li>The endorsement: <strong>"Supply meant for export under Letter of Undertaking without payment of integrated tax"</strong>.</li>
<li>Your name, address and GSTIN, and a unique invoice number from your <a href="/blog/invoice-numbering-system">invoice numbering system</a>.</li>
<li>The client's name and full overseas address, with country. A foreign client has no GSTIN.</li>
<li>Place of supply shown as outside India (the portal uses code 96 for foreign country).</li>
<li>The <a href="/blog/hsn-sac-code">SAC code</a> and description of the service.</li>
<li>The value in the invoice currency, and the rupee value you will report. Our guide to <a href="/blog/foreign-currency-invoice">foreign currency invoices</a> explains conversion.</li>
<li>IGST rate and amount shown as zero, and your LUT ARN as good practice.</li>
<li>Bank details for an inward foreign remittance.</li>
</ul>
<p>Clients in the United States may also ask for tax forms of their own. Our guide to the <a href="/blog/w-8ben-form-freelancers">W-8BEN form for freelancers</a> covers that side.</p>

<h2>Payment and the one-year rule</h2>
<p>Under rule 96A, for an export of services you must receive payment in convertible foreign exchange, or in rupees where permitted, within one year of the invoice date, or any further period allowed. CBIC's <a href="https://cbic-gst.gov.in/pdf/circular-cgst-125.pdf" target="_blank" rel="noopener noreferrer">refund circular 125/44/2019-GST</a> notes that if this does not happen, the exporter pays the IGST with interest, and can claim it back once payment is realised. How you get paid also matters for proof. Inward remittances through banks, and through platforms such as those compared in <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a>, generate the remittance advice or bank realisation records you will need for refunds.</p>

<h3>Claiming a refund of unutilised credit</h3>
<p>Exporting under an LUT means the GST you pay on inputs, such as a laptop, software subscriptions, a co-working desk or an accountant's fees, is not used up by output tax on the export. If you have little or no domestic sales, that credit simply builds up in your electronic credit ledger. Section 54 of the CGST Act lets you claim it back as a refund of unutilised input tax credit on zero-rated supplies, filed on Form RFD-01 on the GST portal, generally within two years of the relevant date. Rule 89 sets a formula, so the refund is limited to the share of credit that matches your export turnover. A refund goes through more smoothly when your invoices, GSTR-1, GSTR-3B and bank realisation records all tell the same story.</p>

<h2>Worked example: a freelance developer under LUT</h2>
<p>Priya is a GST-registered software developer in Bengaluru with a valid LUT for FY 2026-27. She invoices a US client USD 5,000 for a month of development work. For illustration, assume a conversion rate of Rs 85 per dollar on the invoice date.</p>
<table>
<thead><tr><th>Item</th><th>Without LUT (IGST paid)</th><th>With LUT</th></tr></thead>
<tbody>
<tr><td>Invoice value in rupees (USD 5,000 at Rs 85)</td><td>Rs 4,25,000</td><td>Rs 4,25,000</td></tr>
<tr><td>IGST at 18%</td><td>Rs 76,500 payable to government</td><td>Nil</td></tr>
<tr><td>ITC on inputs that month (laptop and software, Rs 1,00,000 plus 18%)</td><td>Rs 18,000 used against the IGST</td><td>Rs 18,000 stays in the credit ledger</td></tr>
<tr><td>Cash tax paid upfront</td><td>Rs 76,500 minus Rs 18,000 = Rs 58,500</td><td>Rs 0</td></tr>
<tr><td>Refund to claim later</td><td>Rs 76,500 of IGST paid</td><td>Rs 18,000 of unutilised ITC</td></tr>
</tbody>
</table>
<p>Without an LUT, Priya parts with Rs 58,500 of her own cash this month and waits for a refund. With an LUT, she keeps it, and can still apply for the Rs 18,000 of credit through RFD-01, or keep it to set off against any domestic sales. Over a year of similar invoices, the difference is roughly Rs 7 lakh of cash flow (12 months of Rs 58,500 is Rs 7,02,000).</p>
<p>She reports the invoice in GSTR-1 as an export of services without payment of tax, and in GSTR-3B as a zero-rated outward supply. Our comparison of <a href="/blog/gstr-1-vs-gstr-3b">GSTR-1 vs GSTR-3B</a> explains where each figure goes, and the guide to <a href="/blog/input-tax-credit-gst">input tax credit under GST</a> covers the conditions for the Rs 18,000.</p>

<h2>Common LUT mistakes to avoid</h2>
<ul>
<li>Issuing export invoices in April before the new year's LUT is filed.</li>
<li>Leaving out the LUT endorsement, or showing CGST and SGST on an export.</li>
<li>Assuming every foreign client means an export, when the place of supply is in India.</li>
<li>Receiving payment in rupees through a channel that is not RBI-permitted for exports.</li>
<li>Letting receivables cross one year without tracking them.</li>
<li>Filing an LUT while unregistered, which is not possible, instead of first checking the threshold.</li>
</ul>

<h2>Create your export invoice under LUT</h2>
<p>An LUT in GST is a once-a-year filing that saves exporters from paying IGST on every foreign invoice. File it before your first export of the financial year, put the LUT endorsement on each invoice, and make sure payment arrives in foreign exchange within a year. You can create a zero-rated export invoice in any currency with our free <a href="/invoice-generator">invoice generator</a>, or start from the <a href="/invoice-templates/startup">startup invoice template</a>.</p>
`,
  },
  {
    slug: "bill-of-supply-gst",
    title: "Bill of Supply Under GST: Format, Rules and When to Issue One",
    description:
      "Bill of supply under GST explained: who issues one, the rule 49 format, the composition dealer declaration, bill of supply vs tax invoice, and a worked example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "India",
    related: [
      "gst-composition-scheme",
      "gst-invoice-guide",
      "tax-invoice-vs-retail-invoice",
      "tax-exempt-invoice",
    ],
    faqs: [
      {
        q: "What is a bill of supply in GST?",
        a: "A bill of supply is the document a registered person issues instead of a tax invoice when no GST can be charged on the sale. Section 31(3)(c) of the CGST Act requires it for exempt goods or services and for sales by composition taxpayers. It looks like an invoice and carries the supplier's GSTIN, a serial number, date, description and value, but it shows no tax and gives the buyer no input tax credit.",
      },
      {
        q: "Who should issue a bill of supply?",
        a: "Two groups. First, taxpayers registered under the composition scheme, who cannot collect tax from customers and must issue a bill of supply for every sale. Second, regular registered taxpayers when they sell exempt or nil-rated goods or services, such as fresh vegetables or certain healthcare and education services. Unregistered businesses do not issue GST documents at all; they use an ordinary bill or cash memo.",
      },
      {
        q: "What is the format of a bill of supply?",
        a: "Rule 49 of the CGST Rules lists the particulars: supplier's name, address and GSTIN; a consecutive serial number of up to 16 characters, unique for the financial year; date of issue; recipient's name, address and GSTIN or UIN if registered; HSN or SAC code; description; value of supply after discount; and signature or digital signature. Composition dealers must also print the words composition taxable person, not eligible to collect tax on supplies.",
      },
      {
        q: "What is the difference between a bill of supply and a tax invoice?",
        a: "A tax invoice charges GST, shows the rate and the CGST, SGST or IGST amounts, and lets a registered buyer claim input tax credit. A bill of supply charges no GST and gives the buyer no credit. A tax invoice is issued by regular taxpayers for taxable supplies; a bill of supply is issued by composition dealers and for exempt supplies. Both must be reported in your GST returns.",
      },
      {
        q: "Can a composition dealer issue a tax invoice?",
        a: "No. Section 10 of the CGST Act prevents a composition taxpayer from collecting tax from the recipient, so they cannot issue a tax invoice or show GST on a bill. They issue a bill of supply and pay tax at the composition rate on their turnover from their own funds. If a composition dealer wrongly charges GST, the amount collected must still be paid to the government, and it can lead to penalties.",
      },
      {
        q: "Is a bill of supply needed for small sales below Rs 200?",
        a: "The proviso to section 31(3)(c) lets a registered person skip a bill of supply where the value of the supply is less than Rs 200, subject to conditions in the rules: the buyer is unregistered and does not ask for one. In that case, the supplier issues a single consolidated bill of supply covering such sales at the end of each day. If the customer asks for a bill, you must give one.",
      },
      {
        q: "Can a buyer claim ITC on a bill of supply?",
        a: "No. Input tax credit needs a tax invoice or debit note showing tax charged, and a bill of supply shows none. This is why businesses that sell mainly to other GST-registered businesses often avoid the composition scheme: their customers cannot claim credit and may prefer a regular supplier. If you buy from a composition dealer, the full price, including their embedded tax, is a cost to you.",
      },
      {
        q: "What is an invoice-cum-bill of supply?",
        a: "Rule 46A lets a regular registered person who sells both taxable and exempt goods or services to an unregistered person in one transaction issue a single invoice-cum-bill of supply. The document must contain the particulars required for both a tax invoice under rule 46 and a bill of supply under rule 49, showing GST only on the taxable lines. It saves issuing two documents for one sale.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A bill of supply under GST is the document a registered business issues instead of a tax invoice when it cannot charge GST: either because it is a composition dealer or because the goods or services are exempt. It follows the format in rule 49 of the CGST Rules, shows no tax, and gives the buyer no input tax credit.</p>

<p>Most GST guidance focuses on the tax invoice, but thousands of small shops, restaurants and service providers never issue one. If you are in the composition scheme, or you sell exempt items like fresh produce, the law requires a bill of supply instead. This guide covers who must issue one, the required particulars, the composition declaration, how it differs from a tax invoice, sample formats and a worked example. For the full tax invoice rules, see our <a href="/blog/gst-invoice-guide">GST invoice guide</a>. You can create either document with our free <a href="/invoice-generator">invoice generator</a> by leaving the tax lines out.</p>

<p><em>This article is general information as of 2026, not tax or legal advice. Check the current CGST Act and Rules or speak to a chartered accountant before you rely on it.</em></p>

<h2>What is a bill of supply in GST?</h2>
<p>Section 31(3)(c) of the CGST Act says a registered person supplying exempted goods or services, or paying tax under the composition scheme in section 10, shall issue a bill of supply instead of a tax invoice. The format is set by rule 49 of the CGST Rules.</p>
<p>The point of the document is to record the sale under your GSTIN without charging tax. It works as a sales invoice for your accounts, gives the customer proof of purchase, and supports the turnover you report to the GST department. What it never does is pass input tax credit to the buyer.</p>

<h2>Who must issue a bill of supply</h2>
<h3>1. Composition scheme taxpayers</h3>
<p>Businesses that opt into the <a href="/blog/gst-composition-scheme">GST composition scheme</a> pay tax at a flat rate on turnover and cannot collect tax from customers. Every sale they make is billed on a bill of supply. The CBIC FAQ and GST Council flyer on the scheme summarise the main features, and the current combined rates are:</p>
<table>
<thead><tr><th>Category</th><th>Composition rate (CGST + SGST)</th><th>Turnover limit (preceding year)</th></tr></thead>
<tbody>
<tr><td>Manufacturers (other than notified goods)</td><td>1% (0.5% + 0.5%)</td><td>Rs 1.5 crore (Rs 75 lakh in special category states)</td></tr>
<tr><td>Traders</td><td>1% of turnover of taxable supplies (0.5% + 0.5%)</td><td>Rs 1.5 crore (Rs 75 lakh in special category states)</td></tr>
<tr><td>Restaurants not serving alcohol</td><td>5% (2.5% + 2.5%)</td><td>Rs 1.5 crore (Rs 75 lakh in special category states)</td></tr>
<tr><td>Service providers under section 10(2A)</td><td>6% (3% + 3%)</td><td>Rs 50 lakh</td></tr>
</tbody>
</table>
<p>The <a href="https://gstcouncil.gov.in/sites/default/files/e-version-gst-flyers/composition-levy-scheme.pdf" target="_blank" rel="noopener noreferrer">GST Council flyer on the composition levy scheme</a> explains the eligibility conditions, including that composition dealers generally cannot make inter-state outward supplies or sell through e-commerce operators that collect tax at source.</p>
<h3>2. Regular taxpayers selling exempt supplies</h3>
<p>A regular GST-registered business that sells exempt or nil-rated goods or services issues a bill of supply for those sales. Examples include fresh fruit and vegetables, many health care and education services, and, after the GST 2.0 changes from 22 September 2025, several items moved to nil rate, such as UHT milk, paneer and Indian breads, and individual life and health insurance policies. Our guide to <a href="/blog/gst-2-0-new-gst-rates">GST 2.0 new GST rates</a> lists the changes. Exports are different: they are zero-rated, not exempt, and go on a tax invoice under an <a href="/blog/lut-under-gst">LUT in GST</a>.</p>
<h3>3. Who does not issue one</h3>
<p>An unregistered business is outside GST billing altogether. It issues a plain bill or <a href="/blog/cash-memo-format">cash memo</a> without a GSTIN and must not show any GST.</p>

<h2>Bill of supply format: required particulars under rule 49</h2>
<p>Rule 49 lists the details a bill of supply must contain:</p>
<ol>
<li>Name, address and GSTIN of the supplier.</li>
<li>A consecutive serial number, up to 16 characters, using letters, numbers, hyphens or slashes, unique for the financial year. A simple <a href="/tools/invoice-number-generator">invoice number generator</a> helps keep the series clean.</li>
<li>Date of issue.</li>
<li>Name, address and GSTIN or UIN of the recipient, if registered.</li>
<li><a href="/blog/hsn-sac-code">HSN code of goods or SAC of services</a>, as applicable to your turnover.</li>
<li>Description of the goods or services.</li>
<li>Value of the supply, taking into account any discount or abatement.</li>
<li>Signature or digital signature of the supplier or an authorised representative. A bill of supply issued electronically under the IT Act, 2000 does not need a signature.</li>
</ol>
<p>Rule 49 also says that a tax invoice or similar document issued under another law for a non-taxable supply is treated as a bill of supply.</p>
<h3>The composition dealer declaration</h3>
<p>Rule 5 of the CGST Rules requires a composition taxpayer to mention the words <strong>"composition taxable person, not eligible to collect tax on supplies"</strong> at the top of the bill of supply. The same words, in substance, must appear on the signboard at the place of business. Leaving them off is one of the most common inspection findings for small shops.</p>
<h3>Small sales under Rs 200</h3>
<p>The proviso to section 31(3)(c) allows a registered person not to issue a bill of supply for a sale worth less than Rs 200, where the buyer is unregistered and does not ask for a bill. The supplier then issues one consolidated bill of supply for all such sales at the close of each day.</p>

<h2>Bill of supply vs tax invoice</h2>
<table>
<thead><tr><th>Point</th><th>Bill of supply</th><th>Tax invoice</th></tr></thead>
<tbody>
<tr><td>Issued by</td><td>Composition dealers; regular taxpayers for exempt supplies</td><td>Regular taxpayers for taxable supplies</td></tr>
<tr><td>GST charged</td><td>None</td><td>CGST and SGST, or IGST</td></tr>
<tr><td>Buyer's input tax credit</td><td>Not available</td><td>Available if conditions are met</td></tr>
<tr><td>Governing rule</td><td>Section 31(3)(c), rule 49</td><td>Section 31(1) and (2), rule 46</td></tr>
<tr><td>Special wording</td><td>Composition declaration for composition dealers</td><td>Reverse charge or export endorsements where relevant</td></tr>
<tr><td>Reported in</td><td>CMP-08 and GSTR-4 (composition) or GSTR-1 (exempt sales)</td><td>GSTR-1 and GSTR-3B</td></tr>
</tbody>
</table>
<p>A related distinction is between a tax invoice and a retail invoice, which is covered in our guide to <a href="/blog/tax-invoice-vs-retail-invoice">tax invoice vs retail invoice</a>. For non-GST contexts, our <a href="/blog/tax-exempt-invoice">tax-exempt invoice guide</a> explains how other countries handle supplies without tax.</p>

<h2>Invoice-cum-bill of supply</h2>
<p>Sometimes a regular business sells taxable and exempt items together, such as a grocer selling packaged biscuits and fresh vegetables in one sale. Rule 46A allows a single invoice-cum-bill of supply when the buyer is unregistered. It must contain the particulars of both rule 46 and rule 49, with GST shown only on the taxable lines.</p>

<h2>How to create a bill of supply step by step</h2>
<ol>
<li><strong>Confirm why no GST applies.</strong> Either you are a composition taxpayer, or the item is exempt or nil-rated. If neither is true, you need a tax invoice.</li>
<li><strong>Add your header details:</strong> business name, address, GSTIN and, for composition dealers, the declaration at the top.</li>
<li><strong>Set the number and date</strong> from a dedicated series for the financial year.</li>
<li><strong>Enter the buyer's details,</strong> including their GSTIN if they are registered.</li>
<li><strong>List each item</strong> with its HSN or SAC code, description, quantity, rate and value after discount.</li>
<li><strong>Total the bill without any tax lines.</strong> Do not write "GST included", since composition dealers cannot collect tax.</li>
<li><strong>Sign it,</strong> or issue it electronically, and keep a copy in your records.</li>
</ol>

<h2>Sample bill of supply</h2>
<p>Here is how the key parts of a composition trader's bill of supply might look:</p>
<table>
<thead><tr><th>Field</th><th>Entry</th></tr></thead>
<tbody>
<tr><td>Top line</td><td>BILL OF SUPPLY: composition taxable person, not eligible to collect tax on supplies</td></tr>
<tr><td>Supplier</td><td>Sharma Hardware, Main Road, Indore, GSTIN 23XXXXXXXXXXXZX</td></tr>
<tr><td>Bill number and date</td><td>BOS/26-27/0418, 14 October 2026</td></tr>
<tr><td>Buyer</td><td>R. K. Builders, Indore (GSTIN if registered)</td></tr>
<tr><td>Line 1</td><td>Wall putty, 20 kg bags, HSN code, 50 bags at Rs 500 = Rs 25,000</td></tr>
<tr><td>Line 2</td><td>Paint brushes, HSN code, 100 at Rs 150 = Rs 15,000</td></tr>
<tr><td>Total</td><td>Rs 40,000 (no GST charged)</td></tr>
<tr><td>Footer</td><td>Authorised signatory</td></tr>
</tbody>
</table>
<p>For layout ideas, the <a href="/invoice-templates/minimal">minimal invoice template</a> works well because it does not force tax columns. Our guide to <a href="/blog/bill-format">bill formats</a> shows more layouts.</p>

<h2>Worked example: what a composition trader actually pays</h2>
<p>Sharma Hardware is a composition trader. In the July to September 2026 quarter it issues bills of supply totalling Rs 12,00,000, all taxable goods sold within Madhya Pradesh.</p>
<ul>
<li>Composition tax at 1% of Rs 12,00,000 = <strong>Rs 12,000</strong>, made up of Rs 6,000 CGST and Rs 6,000 SGST.</li>
<li>This is paid from the business's own money through the quarterly CMP-08 statement, because no tax was collected from customers.</li>
<li>Sharma Hardware cannot claim input tax credit on its purchases, so GST paid to its own suppliers is part of its cost of goods.</li>
</ul>
<p>Now compare a regular trader selling the same goods at an 18% rate. It would charge customers Rs 2,16,000 of GST on Rs 12,00,000 of sales and set off its input tax credit against that. If its purchases were Rs 9,00,000 plus Rs 1,62,000 of GST, it would pay Rs 2,16,000 minus Rs 1,62,000 = Rs 54,000 in cash, all of it collected from customers. The composition trader pays far less in cash, but its business customers cannot claim any credit. That trade-off is the core of the decision, which our guide to <a href="/blog/input-tax-credit-gst">input tax credit under GST</a> explores further.</p>

<h3>Common bill of supply mistakes</h3>
<ul>
<li><strong>Showing GST on a composition bill.</strong> Even a line saying "GST 1%" suggests tax was collected, which a composition dealer is not allowed to do.</li>
<li><strong>Missing the composition declaration</strong> at the top of the bill, or on the signboard.</li>
<li><strong>Using a bill of supply for taxable sales</strong> by a regular dealer. If the item carries GST, the buyer is entitled to a tax invoice.</li>
<li><strong>Mixing series.</strong> Keep bills of supply in a clear, consecutive series for the financial year, separate from any tax invoices you issue, and never reuse a number.</li>
<li><strong>Leaving out the buyer's GSTIN</strong> when they are registered, which makes your records harder to reconcile.</li>
<li><strong>Treating exports as exempt.</strong> Exports are zero-rated and need a tax invoice, not a bill of supply.</li>
<li><strong>Forgetting the GST 2.0 changes.</strong> Items that moved to nil rate from 22 September 2025 now go on a bill of supply, while items that moved the other way need a tax invoice.</li>
</ul>

<h2>Returns, records and penalties</h2>
<p>Composition taxpayers file CMP-08 every quarter to pay tax and GSTR-4 as an annual return. Regular taxpayers report exempt and nil-rated sales on bills of supply in GSTR-1 and GSTR-3B; see <a href="/blog/gstr-1-vs-gstr-3b">GSTR-1 vs GSTR-3B</a> for where each figure goes. Keep copies of every bill of supply for the period required under the GST law, generally 72 months from the due date of the annual return; our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> covers record keeping more widely.</p>
<p>Issuing a document that charges GST when you are in the composition scheme, or failing to issue any bill, can attract penalties under the CGST Act, and any tax collected must still be paid over to the government.</p>

<h2>Create your bill of supply</h2>
<p>A bill of supply under GST is simple once you know the rules: no tax lines, the rule 49 particulars, and, for composition dealers, the declaration at the top. Use our free <a href="/invoice-generator">invoice generator</a> to create a clean bill of supply with your GSTIN, HSN codes and serial numbering, then download it as a PDF to print or share.</p>
`,
  },
  {
    slug: "gstr-1-vs-gstr-3b",
    title: "GSTR-1 vs GSTR-3B: Differences, Due Dates and Reconciliation",
    description:
      "GSTR-1 vs GSTR-3B compared: what each return reports, 2026 due dates for monthly and QRMP filers, the GSTR-3B lock, late fees, and how to reconcile the two.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "India",
    related: [
      "gst-return-filing-india",
      "gst-invoice-management-system",
      "credit-note-guide",
      "india-e-invoice-limit",
    ],
    faqs: [
      {
        q: "What is the main difference between GSTR-1 and GSTR-3B?",
        a: "GSTR-1 is a statement of outward supplies: invoice-level details of your sales, credit notes and debit notes. GSTR-3B is a summary return in which you declare total output tax, claim input tax credit and pay the net tax. GSTR-1 feeds your buyers' GSTR-2B so they can claim credit; GSTR-3B is where your own liability is settled. Most regular taxpayers must file both for every period.",
      },
      {
        q: "What are the due dates for GSTR-1 and GSTR-3B?",
        a: "Monthly filers file GSTR-1 by the 11th of the next month and GSTR-3B by the 20th. Taxpayers in the QRMP scheme, with turnover up to Rs 5 crore, file GSTR-1 by the 13th after the quarter and GSTR-3B by the 22nd or 24th depending on their state, paying tax monthly by the 25th through PMT-06. The government can extend dates, so check the portal each month.",
      },
      {
        q: "Which should be filed first, GSTR-1 or GSTR-3B?",
        a: "File GSTR-1 first. The liability in GSTR-3B is auto-populated from GSTR-1, GSTR-1A and IFF, and since the July 2025 tax period that auto-filled liability cannot be edited in GSTR-3B. Filing GSTR-1 first also lets you use GSTR-1A to correct mistakes before you file GSTR-3B. The portal also blocks GSTR-1 for a period if GSTR-3B for the previous period is pending.",
      },
      {
        q: "Can I revise GSTR-1 or GSTR-3B after filing?",
        a: "Neither return can be revised once filed. Errors in GSTR-1 are corrected through GSTR-1A for the same period, if GSTR-3B is not yet filed, or through amendment tables in a later GSTR-1. Errors in GSTR-3B are adjusted in a later period's GSTR-3B. Amendments for a financial year are allowed until 30 November of the following year or the annual return date, whichever is earlier.",
      },
      {
        q: "What is the late fee for GSTR-1 and GSTR-3B?",
        a: "The late fee is Rs 50 per day (Rs 25 CGST plus Rs 25 SGST), or Rs 20 per day for nil returns. Under Notification 19/2021 and the matching GSTR-1 notification, the fee is capped at Rs 500 for nil returns and at Rs 2,000, Rs 5,000 or Rs 10,000 for other returns depending on turnover. Late tax also attracts interest at 18% a year under section 50.",
      },
      {
        q: "Why do GSTR-1 and GSTR-3B figures not match?",
        a: "Common reasons are invoices added to GSTR-1 after GSTR-3B was filed, credit notes reported in one return but not the other, advances taxed in GSTR-3B but not shown in GSTR-1, rate or place-of-supply errors, and typing mistakes. Mismatches can trigger notices and, where liability in GSTR-1 exceeds GSTR-3B beyond set limits, restrictions on filing. Reconcile every month before you file GSTR-3B.",
      },
      {
        q: "Is there a time limit to file old GSTR-1 and GSTR-3B returns?",
        a: "Yes. The Finance Act, 2023 bars filing GSTR-1, GSTR-3B and several other returns after three years from their due date. GSTN rolled out the block on the portal during 2025, after advisories warning taxpayers to clear old returns. A return that is time-barred cannot be filed at all, so non-filers should catch up on pending periods as soon as possible.",
      },
      {
        q: "Do composition dealers file GSTR-1 and GSTR-3B?",
        a: "No. Composition taxpayers file a quarterly CMP-08 statement to pay tax and an annual GSTR-4 return. They do not file GSTR-1 or GSTR-3B, because they issue bills of supply, charge no tax and claim no input tax credit. Non-resident taxpayers, input service distributors and TDS or TCS deductors also have their own separate returns.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> GSTR-1 vs GSTR-3B comes down to detail versus summary. GSTR-1 reports every sale, credit note and debit note invoice by invoice, and is due on the 11th (or the 13th after the quarter for QRMP filers). GSTR-3B summarises your output tax, claims input tax credit and pays the tax, and is due on the 20th (or the 22nd or 24th quarterly).</p>

<p>Every regular GST taxpayer in India files these two returns, and the most common compliance problems come from treating them as separate jobs. They are linked: your GSTR-1 now drives the liability in your GSTR-3B, and your suppliers' GSTR-1 decides how much credit you can claim. This comparison covers what each return contains, the due dates, the filing order, the 2025 locking and time-bar changes, late fees and a reconciliation routine with a worked example. For a full walkthrough of the filing screens, see our guide to <a href="/blog/gst-return-filing-india">GST return filing in India</a>. Every figure starts with your invoices, so make sure they are right in the first place with our free <a href="/invoice-generator">GST invoice generator</a>.</p>

<p><em>This article is general information as of 2026, not tax or legal advice. Due dates and portal rules change by notification, so confirm them on the GST portal or with a chartered accountant.</em></p>

<h2>GSTR-1 vs GSTR-3B at a glance</h2>
<table>
<thead><tr><th>Point</th><th>GSTR-1</th><th>GSTR-3B</th></tr></thead>
<tbody>
<tr><td>What it is</td><td>Statement of outward supplies (section 37)</td><td>Summary return with tax payment (section 39)</td></tr>
<tr><td>Level of detail</td><td>Invoice-wise for B2B, rate-wise and state-wise summaries for B2C</td><td>Totals only</td></tr>
<tr><td>Input tax credit</td><td>Not claimed here</td><td>Claimed here, from GSTR-2B</td></tr>
<tr><td>Tax payment</td><td>None</td><td>Net tax paid by cash and credit</td></tr>
<tr><td>Monthly due date</td><td>11th of next month</td><td>20th of next month</td></tr>
<tr><td>QRMP due date</td><td>13th after the quarter (IFF optional for months 1 and 2)</td><td>22nd or 24th after the quarter, by state</td></tr>
<tr><td>Who it affects</td><td>Your buyers' GSTR-2B and their credit</td><td>Your own liability and credit ledger</td></tr>
<tr><td>Corrections</td><td>GSTR-1A before GSTR-3B, or amendment tables later</td><td>Adjust in a later GSTR-3B</td></tr>
<tr><td>Late fee</td><td>Rs 50 per day, Rs 20 for nil, capped</td><td>Rs 50 per day, Rs 20 for nil, capped, plus 18% interest on late tax</td></tr>
</tbody>
</table>

<h2>What is GSTR-1?</h2>
<p>GSTR-1 is your sales statement. It lists:</p>
<ul>
<li>B2B invoices to registered buyers, invoice by invoice with the buyer's GSTIN.</li>
<li>Large B2C inter-state invoices above the threshold, individually.</li>
<li>Other B2C sales, summarised by rate and state.</li>
<li>Exports and SEZ supplies, with or without tax. Exports under an <a href="/blog/lut-under-gst">LUT in GST</a> go here as without payment of tax.</li>
<li>Credit notes and debit notes, explained in our <a href="/blog/credit-note-guide">credit note guide</a>.</li>
<li>Advances received and adjusted, nil-rated, exempt and non-GST supplies, including sales on a <a href="/blog/bill-of-supply-gst">bill of supply</a>.</li>
<li>An HSN-wise summary using the <a href="/blog/hsn-sac-code">HSN and SAC codes</a> on your invoices, and a document summary of serial numbers issued.</li>
</ul>
<p>If you issue e-invoices because your turnover is above the <a href="/blog/india-e-invoice-limit">India e-invoice limit</a>, the IRN data auto-fills much of GSTR-1. Once filed, B2B records flow to your buyers' Invoice Management System and GSTR-2B.</p>

<h2>What is GSTR-3B?</h2>
<p>GSTR-3B is the return where tax is settled. Its main tables are:</p>
<ul>
<li><strong>Table 3.1:</strong> outward supplies and tax, including zero-rated and exempt supplies and inward supplies under reverse charge.</li>
<li><strong>Table 3.2:</strong> inter-state supplies to unregistered persons, composition dealers and UIN holders, by state.</li>
<li><strong>Table 4:</strong> input tax credit available, reversed and net, auto-filled from GSTR-2B. Our guide to <a href="/blog/input-tax-credit-gst">input tax credit under GST</a> explains what belongs here.</li>
<li><strong>Table 5:</strong> exempt, nil-rated and non-GST inward supplies.</li>
<li><strong>Table 6:</strong> payment of tax, interest and late fee, using the credit ledger first and cash for the balance.</li>
</ul>
<p>The IMS changes credit flow too. You act on supplier records in the <a href="/blog/gst-invoice-management-system">GST Invoice Management System</a>, GSTR-2B is generated on the 14th, and Table 4 is filled from it.</p>

<h2>GSTR-1 and GSTR-3B due dates in 2026</h2>
<table>
<thead><tr><th>Filer type</th><th>GSTR-1</th><th>GSTR-3B</th><th>Tax payment</th></tr></thead>
<tbody>
<tr><td>Monthly (turnover above Rs 5 crore, or by choice)</td><td>11th of next month</td><td>20th of next month</td><td>With GSTR-3B</td></tr>
<tr><td>QRMP, months 1 and 2 of the quarter</td><td>IFF optional, 1st to 13th of next month</td><td>No return</td><td>PMT-06 by the 25th of next month</td></tr>
<tr><td>QRMP, end of quarter</td><td>13th of month after quarter</td><td>22nd or 24th of month after quarter, depending on state group</td><td>With GSTR-3B</td></tr>
</tbody>
</table>
<p>For example, the September 2026 GSTR-1 for a monthly filer was due on 11 October 2026 and GSTR-3B on 20 October 2026. For a QRMP filer, the July to September 2026 quarter's GSTR-1 was due on 13 October 2026 and GSTR-3B on 22 or 24 October 2026. The government extends dates by notification from time to time, so check the portal's return calendar.</p>

<h2>Filing order, the GSTR-3B lock and GSTR-1A</h2>
<p>The order is no longer a matter of habit. GSTN made the outward liability that GSTR-3B auto-fills from GSTR-1, GSTR-1A and IFF non-editable from the July 2025 tax period. If a sale is missing or wrong in GSTR-1, you cannot fix it by typing a different figure in GSTR-3B. Instead:</p>
<ol>
<li>File GSTR-1 for the period by its due date.</li>
<li>Review the auto-filled GSTR-3B liability against your sales register.</li>
<li>If something is wrong, file GSTR-1A for the same period to add or amend records. GSTR-1A is available after GSTR-1 is filed and before GSTR-3B for that period.</li>
<li>Review Table 4 credit against GSTR-2B and your purchase register.</li>
<li>Pay any cash balance and file GSTR-3B.</li>
</ol>
<p>The portal also enforces sequence in the other direction: GSTR-1 for a period cannot be filed while GSTR-3B for the previous period is pending, and GSTR-2B is not generated for a taxpayer whose previous GSTR-3B is outstanding.</p>
<h3>The three-year time bar</h3>
<p>The Finance Act, 2023 bars filing GSTR-1, GSTR-3B, GSTR-9 and several other returns after three years from their due date. GSTN issued a series of advisories through 2024 and 2025 and then began blocking time-barred returns on the portal. A return that is time-barred cannot be filed at all, which can leave a registration in default with no way to regularise it, so clear any pending returns early.</p>

<h2>Late fees and interest</h2>
<p>Late fees apply to both returns, at Rs 50 per day (Rs 25 CGST and Rs 25 SGST) and Rs 20 per day for nil returns. Notification 19/2021-Central Tax capped the GSTR-3B late fee; the central tax caps are Rs 250 for nil returns, Rs 1,000 for turnover up to Rs 1.5 crore, Rs 2,500 for turnover from Rs 1.5 crore to Rs 5 crore, and Rs 5,000 above that. Doubling for SGST gives combined caps of Rs 500, Rs 2,000, Rs 5,000 and Rs 10,000. You can read the <a href="https://gstcouncil.gov.in/sites/default/files/2024-05/notfctn-19-central-tax-english-2021.pdf" target="_blank" rel="noopener noreferrer">text of Notification 19/2021-Central Tax</a> on the GST Council site. GSTR-1 has matching caps under a separate notification.</p>
<p>Late GSTR-3B also means late tax, and section 50 charges interest at 18% a year on the tax paid late in cash.</p>

<h2>Worked example: reconciling one month</h2>
<p>A Delhi agency files monthly. For October 2026 its sales register shows:</p>
<table>
<thead><tr><th>Item</th><th>Taxable value</th><th>GST at 18%</th></tr></thead>
<tbody>
<tr><td>Tax invoices issued</td><td>Rs 12,00,000</td><td>Rs 2,16,000</td></tr>
<tr><td>Credit note for a cancelled project</td><td>minus Rs 1,00,000</td><td>minus Rs 18,000</td></tr>
<tr><td><strong>Net output tax</strong></td><td><strong>Rs 11,00,000</strong></td><td><strong>Rs 1,98,000</strong></td></tr>
<tr><td>Eligible ITC in GSTR-2B</td><td></td><td>Rs 1,20,000</td></tr>
<tr><td><strong>Cash payable</strong></td><td></td><td><strong>Rs 78,000</strong></td></tr>
</tbody>
</table>
<p>When the accountant files GSTR-1 on 11 November and opens GSTR-3B, Table 3.1 shows output tax of only Rs 1,89,000. Comparing the two, she finds one invoice of Rs 50,000 (Rs 9,000 tax) that was left out of GSTR-1. Rs 1,98,000 minus Rs 9,000 is Rs 1,89,000, which explains the gap. Because the liability is locked, she adds the missing invoice through GSTR-1A, the GSTR-3B liability updates to Rs 1,98,000, and she pays Rs 78,000 in cash.</p>
<p>Suppose instead the agency filed GSTR-3B 10 days late. The late fee would be 10 days at Rs 50 = <strong>Rs 500</strong>, well within the cap. Interest at 18% a year on the Rs 78,000 cash paid late would be Rs 78,000 x 18% x 10 / 365 = <strong>about Rs 385</strong>. Small amounts, but they repeat every month a business is late, and the missing invoice would still have to be fixed.</p>

<h2>A monthly reconciliation routine</h2>
<ol>
<li>Lock your sales register for the month once all invoices, credit notes and debit notes are entered, with no gaps in your <a href="/tools/invoice-number-generator">invoice number series</a>.</li>
<li>Compare register totals by rate, by B2B and B2C, and by state with the GSTR-1 summary before you file it.</li>
<li>After filing, compare GSTR-1 with the auto-filled GSTR-3B Table 3.1 and use GSTR-1A for any corrections.</li>
<li>Reconcile GSTR-2B with your purchase register and remove blocked or ineligible credit.</li>
<li>Match the cash paid in GSTR-3B to your bank statement as part of your <a href="/blog/month-end-close-checklist">month-end close</a>.</li>
<li>Track errors that need a later adjustment, and fix the underlying invoice using the steps in <a href="/blog/how-to-correct-an-invoice">how to correct an invoice</a>.</li>
</ol>

<h3>Why the two returns drift apart</h3>
<p>Most mismatches have a short list of causes, and knowing them speeds up the monthly check:</p>
<ul>
<li><strong>Late additions.</strong> An invoice raised after the books were closed reaches GSTR-1 next month but was never in this month's liability.</li>
<li><strong>Credit notes.</strong> A credit note recorded in the books but not reported in GSTR-1, or reported against the wrong period.</li>
<li><strong>Advances.</strong> Tax paid on advances for services in GSTR-3B but the advance table left blank in GSTR-1, or adjustments missed when the invoice is issued.</li>
<li><strong>Classification errors.</strong> A B2B sale entered as B2C because the buyer's GSTIN was missing, or an inter-state sale shown as intra-state.</li>
<li><strong>Rate errors.</strong> Old rates used after the GST 2.0 changes from 22 September 2025.</li>
</ul>
<p>The department watches these gaps. Rule 88C allows the system to send an intimation when the liability in GSTR-1 exceeds what was paid through GSTR-3B by more than the prescribed limits, and the taxpayer must pay the difference or explain it, or face restrictions on filing the next GSTR-1. Rule 88D does the same for credit claimed in GSTR-3B beyond what GSTR-2B supports. Monthly reconciliation keeps you well clear of both.</p>

<h2>Which return matters more?</h2>
<p>Both, for different people, and the answer does not change with business size. GSTR-1 matters most to your customers, because their credit depends on it; file it late or wrongly and they will chase you or withhold payment. GSTR-3B matters most to you, because it settles your liability, carries the interest and decides your own credit. A clean GSTR-1 makes GSTR-3B almost automatic, and a GSTR-3B that matches GSTR-1 keeps notices away. Small businesses that hand returns to an accountant should still review the GSTR-1 summary and the auto-filled GSTR-3B before each filing, because the accountant can only report the invoices they are given.</p>

<h2>Start with accurate GST invoices</h2>
<p>The GSTR-1 vs GSTR-3B question is really about one data trail: invoices go into GSTR-1, GSTR-1 drives GSTR-3B, and GSTR-3B settles the tax. Get the invoice right and both returns follow. Create GST invoices with GSTINs, HSN codes and the correct CGST, SGST or IGST split using our free <a href="/invoice-generator">invoice generator</a>, and keep every period reconciled before you file.</p>
`,
  },
  {
    slug: "section-44ad",
    title: "Section 44AD Presumptive Taxation: Limits, Rates and 44ADA",
    description:
      "Section 44AD presumptive taxation explained: the Rs 2 crore and Rs 3 crore limits, 6% and 8% rates, the five-year rule, section 58 from 2026, and 44AD vs 44ADA.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "India",
    related: [
      "section-44ada-freelancers",
      "income-tax-act-2025-india",
      "gst-composition-scheme",
      "how-to-track-business-expenses",
    ],
    faqs: [
      {
        q: "What is section 44AD of the Income Tax Act?",
        a: "Section 44AD of the Income-tax Act, 1961 is a presumptive taxation scheme for small businesses. Instead of computing actual profit, an eligible resident business can declare 8% of turnover as income, or 6% of turnover received through banking or digital channels, without keeping detailed books or getting a tax audit. From tax year 2026-27, the same scheme continues under section 58 of the Income-tax Act, 2025.",
      },
      {
        q: "What is the turnover limit under section 44AD?",
        a: "The basic limit is Rs 2 crore of total turnover or gross receipts in the year. It rises to Rs 3 crore if cash receipts do not exceed 5% of total turnover or gross receipts. Commentary on section 58 of the new Act reports the same Rs 2 crore and Rs 3 crore limits with the same 5% cash test, and it notes that cheques not drawn to an account payee count as cash.",
      },
      {
        q: "Who is eligible for section 44AD?",
        a: "Resident individuals, resident Hindu undivided families and resident partnership firms, but not limited liability partnerships or companies. The business must be an eligible business, which excludes the specified professions covered by 44ADA, commission or brokerage income, agency business and goods carriage operators covered by 44AE. A person who has claimed certain profit-linked deductions in the year is also excluded.",
      },
      {
        q: "What is the difference between 44AD and 44ADA?",
        a: "44AD is for businesses such as traders, shops, manufacturers and contractors, with a limit of Rs 2 crore or Rs 3 crore and deemed profit of 8% or 6% of turnover. 44ADA is for specified professionals such as doctors, lawyers, engineers, architects, accountants and IT professionals, with a limit of Rs 50 lakh or Rs 75 lakh and deemed profit of 50% of receipts. Under the 2025 Act both sit in the section 58 table.",
      },
      {
        q: "What is the five-year rule in section 44AD?",
        a: "Under section 44AD(4), if you opt for the scheme in one year and then declare profit lower than the presumptive rate in any of the next five years, you cannot use the scheme for the following five years. If your income exceeds the basic exemption limit in those years, you must keep books and get a tax audit. Reports on section 58(7) of the new Act describe the same five-year restriction.",
      },
      {
        q: "Is a tax audit required under section 44AD?",
        a: "No, as long as you declare at least the presumptive income and stay within the limits. An audit is required if you declare profit lower than 8% or 6% and your total income is above the basic exemption limit, or if the five-year rule applies. If turnover exceeds the 44AD limit, the regular audit thresholds in section 44AB apply instead, which can mean an audit at Rs 1 crore or, with 95% digital transactions, Rs 10 crore.",
      },
      {
        q: "When is advance tax due under 44AD?",
        a: "Under the 1961 Act, a taxpayer using 44AD can pay all advance tax in one instalment by 15 March of the financial year, instead of the four instalments in June, September, December and March that other businesses pay. Paying less than required by 15 March leads to interest. Check the advance tax provisions of the 2025 Act for tax year 2026-27 before relying on the single instalment.",
      },
      {
        q: "Can I claim expenses under section 44AD?",
        a: "No. The 6% or 8% deemed profit is treated as covering all business expenses, so you cannot separately deduct rent, salaries, depreciation or other costs. Depreciation is treated as already allowed, which affects the written down value of assets carried forward. If your real profit margin is below the presumptive rate, the regular method with books and an audit may give a lower tax bill.",
      },
      {
        q: "Does section 44AD affect GST?",
        a: "No. 44AD is an income tax scheme and has no bearing on GST. If your turnover crosses the GST registration threshold you must register and file GST returns, or you may choose the GST composition scheme if you qualify. Your GST turnover and the turnover in your income tax return should reconcile, so keep invoices and sales registers consistent across both.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Section 44AD presumptive taxation lets a resident individual, HUF or partnership firm running a small business declare 8% of turnover as profit, or 6% of turnover received by banking or digital channels, with no detailed books or audit. The limit is Rs 2 crore, or Rs 3 crore if cash receipts are 5% or less. From April 2026 it continues under section 58 of the Income-tax Act, 2025.</p>

<p>For shopkeepers, traders, small manufacturers and contractors, 44AD turns the hardest part of a tax return, working out profit, into a single percentage. This guide explains who qualifies, the limits and rates, the five-year rule, how 44AD maps to section 58 of the new Act, a direct comparison of 44AD vs 44ADA, and a worked example with real tax figures. Professionals such as developers and consultants should read our guide to <a href="/blog/section-44ada-freelancers">section 44ADA for professionals</a> as well. Whatever scheme you use, every receipt starts with an invoice, which you can create free with our <a href="/invoice-generator">invoice generator</a>.</p>

<p><em>This article is general information as of 2026, not tax or legal advice. Check the current law on incometaxindia.gov.in or with a chartered accountant before you file.</em></p>

<h2>What is section 44AD presumptive taxation?</h2>
<p>"Presumptive" means the law presumes your profit is a fixed share of your turnover. Under <a href="https://incometaxindia.gov.in/w/section-44ad-31" target="_blank" rel="noopener noreferrer">section 44AD of the Income-tax Act, 1961</a>, that share is:</p>
<ul>
<li><strong>6%</strong> of turnover or gross receipts received by account payee cheque, account payee bank draft, bank transfer, UPI or other prescribed electronic modes, within the year or by the return due date; and</li>
<li><strong>8%</strong> of the rest, including cash.</li>
</ul>
<p>You can always declare a higher profit if your real margin is higher. Declaring less takes you out of the scheme's protection, as explained below. In exchange, you get three big benefits: no obligation to maintain the detailed books required under section 44AA for the business, no tax audit while you stay within the rules, and, under the 1961 Act, a single advance tax payment by 15 March.</p>

<h2>Who can use section 44AD</h2>
<h3>Eligible persons</h3>
<p>The scheme is open to resident individuals, resident Hindu undivided families and resident partnership firms. Limited liability partnerships and companies cannot use it, and neither can non-residents.</p>
<h3>Eligible businesses</h3>
<p>Most trading, retail, wholesale, manufacturing and contracting businesses qualify. The scheme excludes:</p>
<ul>
<li>Specified professions such as legal, medical, engineering, architecture, accountancy, technical consultancy and similar, which use 44ADA instead.</li>
<li>Income from commission or brokerage, and any agency business.</li>
<li>Plying, hiring or leasing goods carriages, which uses 44AE.</li>
</ul>
<p>A person who has claimed certain profit-linked deductions for the year, such as those in sections 10A, 10AA or 80HH to 80RRB, is also excluded.</p>

<h2>Section 44AD limits and rates</h2>
<table>
<thead><tr><th>Feature</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>Turnover limit</td><td>Rs 2 crore</td></tr>
<tr><td>Higher limit</td><td>Rs 3 crore if cash receipts do not exceed 5% of total turnover or gross receipts</td></tr>
<tr><td>Deemed profit on digital and banking receipts</td><td>6%</td></tr>
<tr><td>Deemed profit on other receipts, including cash</td><td>8%</td></tr>
<tr><td>Expenses and depreciation</td><td>Deemed to be allowed; no separate deduction</td></tr>
<tr><td>Books of account</td><td>Not required under section 44AA for this business</td></tr>
<tr><td>Tax audit</td><td>Not required if presumptive profit or more is declared</td></tr>
<tr><td>Advance tax (1961 Act)</td><td>Single instalment by 15 March</td></tr>
<tr><td>Usual return form</td><td>ITR-4 (Sugam), or ITR-3 where ITR-4 conditions are not met</td></tr>
</tbody>
</table>
<p>The digital rate matters more than it looks. A shop that takes most payments by UPI or bank transfer is taxed on 6% instead of 8%, a quarter less presumptive income for the same turnover. Encouraging customers to pay through a payment link or QR code on your invoice therefore reduces tax as well as cash handling.</p>

<h2>The five-year rule and when an audit applies</h2>
<p>Section 44AD(4) adds a commitment. If you use the scheme in one year and then, in any of the next five years, declare profit lower than the presumptive rate, you lose the scheme for the five years after that. During those years, if your total income is above the basic exemption limit, you must keep books of account and have them audited under section 44AB.</p>
<p>An audit is also required in any year you declare profit below 8% or 6% and your total income is above the basic exemption limit. If turnover rises above Rs 2 crore or Rs 3 crore, 44AD stops applying and the normal audit thresholds in section 44AB apply: Rs 1 crore, or Rs 10 crore where cash receipts and cash payments are each no more than 5%.</p>

<h2>Section 44AD under the Income-tax Act, 2025: section 58</h2>
<p>The Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026, as covered in our guide to the <a href="/blog/income-tax-act-2025-india">Income Tax Act 2025</a>. For income earned up to 31 March 2026, which you report in returns filed during 2026, section 44AD still applies. For tax year 2026-27 onward, the presumptive schemes in 44AD, 44ADA and 44AE are consolidated into a table in <a href="https://www.incometaxindia.gov.in/w/section-58-138" target="_blank" rel="noopener noreferrer">section 58 of the Income-tax Act, 2025</a>.</p>
<p>Professional commentary on the enacted Act reports that the business row, serial number 1 of the table, keeps the same Rs 2 crore and Rs 3 crore limits, the 6% and 8% rates and the 5% cash test, with non-account payee cheques treated as cash. Section 58(4) bars any separate deduction against presumptive income, and section 58(7) carries forward the five-year restriction. Confirm these details against the official text before relying on them, especially for the advance tax position under the new Act.</p>

<h2>44AD vs 44ADA</h2>
<table>
<thead><tr><th>Point</th><th>44AD (section 58, serial 1)</th><th>44ADA (section 58, professions row)</th></tr></thead>
<tbody>
<tr><td>Who</td><td>Businesses: traders, shops, manufacturers, contractors</td><td>Specified professionals: doctors, lawyers, engineers, architects, accountants, IT, interior decorators and similar</td></tr>
<tr><td>Eligible persons</td><td>Resident individuals, HUFs, firms (not LLPs)</td><td>Resident individuals and firms (not LLPs)</td></tr>
<tr><td>Limit</td><td>Rs 2 crore, or Rs 3 crore if cash is 5% or less</td><td>Rs 50 lakh, or Rs 75 lakh if cash is 5% or less</td></tr>
<tr><td>Deemed profit</td><td>8%, or 6% on digital and banking receipts</td><td>50% of gross receipts</td></tr>
<tr><td>Five-year restriction</td><td>Yes</td><td>No equivalent lock-in under the 1961 Act</td></tr>
<tr><td>Typical return form</td><td>ITR-4</td><td>ITR-4</td></tr>
</tbody>
</table>
<p>The choice is not yours to make freely: it follows the nature of your work. A software developer billing for services is a professional and looks at 44ADA, while a business reselling hardware and software licences looks at 44AD. Some activities sit on the line, so take advice if you are unsure.</p>

<h2>How to use section 44AD step by step</h2>
<ol>
<li><strong>Check eligibility:</strong> resident status, entity type and that your work is a business, not a specified profession or agency.</li>
<li><strong>Total your turnover</strong> for the year from your sales invoices and receipts.</li>
<li><strong>Split receipts</strong> into banking or digital receipts and cash. Count only digital receipts actually received by the return due date at 6%.</li>
<li><strong>Test the limit:</strong> Rs 2 crore, or Rs 3 crore if cash is 5% or less of the total.</li>
<li><strong>Compute presumptive profit</strong> at 6% and 8%, and decide whether to declare more if your real margin is higher.</li>
<li><strong>Pay advance tax</strong> by 15 March to avoid interest.</li>
<li><strong>File ITR-4</strong>, or ITR-3 if you do not meet ITR-4 conditions, and keep invoices, bank statements and stock records to support your turnover.</li>
</ol>

<h2>Worked example: a retailer near the Rs 3 crore limit</h2>
<p>Ravi runs an electronics shop as a sole proprietor and resident individual. In FY 2025-26 his turnover is Rs 2,80,00,000. Cash receipts are Rs 8,40,000, which is 3% of turnover, so he qualifies for the Rs 3 crore limit. The rest, Rs 2,71,60,000, came by UPI, card and bank transfer before the return due date.</p>
<table>
<thead><tr><th>Component</th><th>Amount</th><th>Rate</th><th>Presumptive profit</th></tr></thead>
<tbody>
<tr><td>Digital and banking receipts</td><td>Rs 2,71,60,000</td><td>6%</td><td>Rs 16,29,600</td></tr>
<tr><td>Cash receipts</td><td>Rs 8,40,000</td><td>8%</td><td>Rs 67,200</td></tr>
<tr><td><strong>Total</strong></td><td><strong>Rs 2,80,00,000</strong></td><td></td><td><strong>Rs 16,96,800</strong></td></tr>
</tbody>
</table>
<p>Assume Ravi has no other income and uses the new tax regime for FY 2025-26, where the slabs are nil up to Rs 4 lakh, 5% to Rs 8 lakh, 10% to Rs 12 lakh, 15% to Rs 16 lakh and 20% to Rs 20 lakh. His tax is Rs 20,000 + Rs 40,000 + Rs 60,000 + 20% of Rs 96,800 (Rs 19,360) = <strong>Rs 1,39,360</strong>. Adding 4% health and education cess of Rs 5,574 gives <strong>about Rs 1,44,934</strong>. The section 87A rebate does not help because his income is above Rs 12 lakh.</p>
<p>If all Rs 2.8 crore had been at the 8% rate, presumptive profit would be Rs 22,40,000, more than Rs 5.4 lakh higher. Digital receipts made the difference. And if Ravi's cash had been 6% of turnover instead of 3%, his turnover would exceed the Rs 2 crore limit with no access to the higher limit, so he could not use 44AD at all and would face a regular audit.</p>
<p>A smaller trader with Rs 1,80,00,000 of turnover, 98% received digitally, would declare Rs 1,76,40,000 x 6% = Rs 10,58,400 plus Rs 3,60,000 x 8% = Rs 28,800, a total of Rs 10,87,200. Under the FY 2025-26 new regime, income up to Rs 12 lakh gets a full section 87A rebate, so that trader would owe no income tax for the year, assuming no other income.</p>

<h3>When 44AD is not the best choice</h3>
<p>The scheme suits businesses whose real margin is at or above the presumptive rate. It is less attractive in a few situations:</p>
<ul>
<li><strong>Thin-margin trading.</strong> A wholesaler earning 3% on turnover pays tax on 6% or 8% under 44AD. Declaring actual profit means books and an audit, but can cut the tax bill substantially.</li>
<li><strong>A loss year.</strong> Presumptive income is taxed even if the business lost money. Declaring the loss takes you out of the scheme and may trigger the five-year rule.</li>
<li><strong>Heavy cash collection.</strong> Above 5% cash, the limit drops to Rs 2 crore and every rupee of cash is taxed at 8%.</li>
<li><strong>Growing businesses.</strong> If you expect to cross the limit soon, keeping proper books from the start makes the move to regular taxation easier.</li>
</ul>
<p>Run both calculations each year before you decide, and remember the five-year commitment once you opt in.</p>

<h2>Records, GST and invoicing under 44AD</h2>
<p>No detailed books does not mean no records. Keep sales invoices, purchase bills, bank and UPI statements and stock records, because the department can still ask how you reached your turnover. Our guides on <a href="/blog/how-to-track-business-expenses">tracking business expenses</a> and <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> help here.</p>
<p>44AD is separate from GST. If your turnover requires GST registration, you file GST returns as usual, or you may opt for the <a href="/blog/gst-composition-scheme">GST composition scheme</a> and issue a <a href="/blog/bill-of-supply-gst">bill of supply</a> instead of tax invoices. Regular GST taxpayers can claim <a href="/blog/input-tax-credit-gst">input tax credit under GST</a> on purchases. Either way, the turnover in your GST returns and in your income tax return should reconcile. If business customers deduct TDS from your payments, the amounts appear in your Form 26AS and AIS, and our guide to <a href="/blog/tds-on-professional-fees">TDS on professional fees</a> explains how credits work.</p>

<h2>Create invoices that support your 44AD turnover</h2>
<p>Section 44AD presumptive taxation is the simplest route for most small Indian businesses, provided turnover stays under the limit and receipts are mostly digital. Clear, numbered invoices that show how each customer paid make the 6% claim easy to support. Create them free with our <a href="/invoice-generator">invoice generator</a>, or pick a straightforward layout from the <a href="/invoice-templates/classic">classic invoice template</a>.</p>
`,
  },
];
