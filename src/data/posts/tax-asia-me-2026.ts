import type { PostDraft } from "../blog";

export const TAX_ASIA_ME_2026_POSTS: PostDraft[] = [
  {
    slug: "trn-number-uae",
    title: "TRN Number UAE: How to Get, Verify and Show It on Invoices",
    description:
      "TRN number UAE guide: who must register for VAT at AED 375,000, how to apply on EmaraTax, how to verify a supplier's TRN and where it goes on a tax invoice.",
    category: "tax-compliance",
    jurisdiction: "UAE",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "uae-vat-registration",
      "bahrain-vat-invoice-requirements",
      "uae-vat-return-filing",
      "uae-vat-invoice-requirements",
      "uae-e-invoicing-2027",
      "tax-id-on-invoice",
    ],
    faqs: [
      {
        q: "What is a TRN number in the UAE?",
        a: "A TRN, or Tax Registration Number, is the 15-digit number the Federal Tax Authority (FTA) issues when a business or person registers for tax. For VAT purposes it is the same thing people call a UAE VAT number. It identifies you on VAT returns, on the tax invoices you issue and in the FTA's public verification tool, so customers can confirm you are allowed to charge VAT.",
      },
      {
        q: "How can I check if a TRN number is valid?",
        a: "Use the TRN verification service published by the FTA on its website and EmaraTax platform. You enter the 15-digit number, complete the security check and the tool shows whether the number is registered, usually with the registered legal name. Compare that name with the name on the invoice. If the number is not found or the name does not match, ask the supplier before you pay or claim input VAT.",
      },
      {
        q: "Is the TRN the same as the VAT number in the UAE?",
        a: "In everyday use, yes. When a business registers for VAT, the FTA issues a TRN and that is the number shown on VAT invoices and returns, so most people say TRN and VAT number interchangeably. Corporate Tax registration is handled separately on EmaraTax and can give a different number, so label each number clearly and do not assume one replaces the other.",
      },
      {
        q: "Who must register for VAT and get a TRN?",
        a: "Registration is mandatory once the value of your taxable supplies and imports in the past 12 months exceeded AED 375,000, or is expected to exceed it in the next 30 days. You may register voluntarily if supplies, imports or taxable expenses exceed AED 187,500. Non-resident businesses that make taxable supplies in the UAE can have to register with no threshold. Check the FTA's current guidance for your situation.",
      },
      {
        q: "How long does it take to get a TRN?",
        a: "The FTA reviews applications submitted on EmaraTax and commonly decides within about 20 business days, but the time can be longer if it asks for more documents or clarification. A complete application with clear trade license, Emirates ID, bank and turnover documents tends to move fastest. You can follow the application status in your EmaraTax account and receive the TRN certificate there once approved.",
      },
      {
        q: "Can I charge VAT before I receive my TRN?",
        a: "You should not issue a tax invoice that shows VAT and a TRN you do not yet have. Your registration is usually effective from a date the FTA sets, which can be earlier than the approval date, so you may need to account for VAT on sales from that effective date. Ask an adviser how to invoice customers for the gap period before you start charging VAT.",
      },
      {
        q: "Do freelancers in the UAE need a TRN?",
        a: "Only if they cross the VAT registration threshold or choose to register voluntarily. A freelancer whose taxable supplies stay under AED 375,000 in a rolling 12-month period does not have to register for VAT, and should not show VAT or a TRN on invoices. Corporate Tax is a separate test: natural persons generally register only when business turnover exceeds AED 1 million in a calendar year.",
      },
      {
        q: "Is there a penalty for not showing a TRN on a tax invoice?",
        a: "Yes. The UAE penalty rules include fines for failing to issue a tax invoice correctly, and leaving out required details such as the supplier's TRN can count. Late registration also carries its own administrative penalty. The penalty schedule has been amended over time, so check the current Cabinet decision listed on the FTA website rather than relying on an amount quoted in an older article.",
      },
      {
        q: "Does a UAE TRN change when e-invoicing starts?",
        a: "No. The TRN stays your tax identifier. Under the UAE e-invoicing program, seller and buyer TRNs become structured data fields that an Accredited Service Provider validates, so mistakes are caught automatically rather than by a person reading a PDF. That makes it even more important to keep accurate customer TRNs in your records before your go-live date.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A TRN number in the UAE is the 15-digit Tax Registration Number the Federal Tax Authority issues when you register for VAT on EmaraTax. Registration is mandatory above AED 375,000 of taxable supplies and imports in 12 months and voluntary from AED 187,500. Verify any TRN on the FTA website and show it on every tax invoice.</p>

<p>If you sell to businesses in the Emirates, sooner or later a client will ask for your TRN, or reject an invoice because it is missing. This guide explains what the TRN number in the UAE is, who needs one, how to apply on EmaraTax, how to check a supplier's number, and exactly where it belongs on a tax invoice. A worked example shows the VAT arithmetic, and a checklist at the end helps you avoid the usual rejections.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Thresholds, penalties and portal screens change, so confirm the current rules on the <a href="https://tax.gov.ae/en/" target="_blank" rel="noopener noreferrer">Federal Tax Authority website</a> or with a UAE tax agent before you rely on them.</p>

<h2>What is a TRN number in the UAE?</h2>
<p>TRN stands for Tax Registration Number. It is a unique 15-digit number assigned by the Federal Tax Authority (FTA) to each person registered for tax. Since VAT arrived in 2018, the TRN has become the number buyers look for on supplier invoices, because a registered buyer generally needs a valid tax invoice showing the supplier's TRN to recover input VAT.</p>
<p>A few points that confuse new businesses:</p>
<ul>
<li><strong>TRN and VAT number:</strong> for VAT purposes they are the same thing. "VAT number", "VAT TRN" and "tax registration number" all point to the 15-digit number on your VAT certificate.</li>
<li><strong>TRN and trade license:</strong> your trade license number comes from the licensing authority (a mainland department of economic development or a free zone). It is not a tax number and does not replace the TRN.</li>
<li><strong>TRN and Corporate Tax:</strong> Corporate Tax registration also happens on EmaraTax and results in its own registration number. Keep your VAT TRN and Corporate Tax number clearly labeled in your records. If you are a freelancer, our guide to <a href="/blog/uae-corporate-tax-freelancers">UAE corporate tax for freelancers</a> explains when that second registration applies.</li>
</ul>
<p>For how the UAE number compares with tax IDs in other countries, such as a GSTIN or an NTN, see our explainer on the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a>.</p>

<h2>Who needs a TRN? UAE VAT registration thresholds</h2>
<p>Whether you need a TRN depends on the value of your taxable supplies, not on your legal form. Sole establishments, freelancers on a permit, LLCs and free zone companies are all tested the same way.</p>
<table><thead><tr><th>Situation</th><th>Rule</th><th>What it means for your invoices</th></tr></thead><tbody>
<tr><td>Taxable supplies and imports over AED 375,000 in the last 12 months, or expected to exceed it in the next 30 days</td><td>Mandatory VAT registration</td><td>Apply on EmaraTax promptly, then issue tax invoices with your TRN and 5% VAT</td></tr>
<tr><td>Supplies, imports or taxable expenses over AED 187,500 but below the mandatory level</td><td>Voluntary registration allowed</td><td>Optional; useful if you want to recover input VAT on costs</td></tr>
<tr><td>Below AED 187,500</td><td>Cannot register voluntarily</td><td>Issue ordinary invoices with no VAT and no TRN</td></tr>
<tr><td>Non-resident making taxable supplies in the UAE where no one else accounts for the VAT</td><td>Registration can be required with no threshold</td><td>Check the FTA's non-resident guidance</td></tr>
</tbody></table>
<p>The 12-month test is rolling. You check it at the end of every month, not once a year. Zero-rated supplies, such as many exports of services, count toward the threshold even though no VAT is charged, while exempt supplies do not. Our post on <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a> explains the difference.</p>

<h2>How to get a TRN number in the UAE on EmaraTax</h2>
<p>All FTA registrations now run through EmaraTax, the FTA's online platform. The steps below describe the general flow; screen names can change, so follow the on-screen guidance.</p>
<ol>
<li><strong>Create an EmaraTax account.</strong> Sign up with an email address and mobile number, or log in with UAE Pass.</li>
<li><strong>Create a taxable person profile.</strong> Add the legal entity (or yourself, as a natural person) to your account.</li>
<li><strong>Start the VAT registration application.</strong> Choose VAT registration and confirm whether it is mandatory or voluntary.</li>
<li><strong>Enter entity details.</strong> Legal name in English and Arabic, trade license number, licensing authority, business activities and addresses.</li>
<li><strong>Enter turnover details.</strong> Your taxable supplies and imports for the last 12 months, expected supplies for the next 30 days, and the date you crossed the threshold.</li>
<li><strong>Add authorized signatories and bank details.</strong> Typically Emirates ID or passport copies for owners or managers and an IBAN letter from the bank.</li>
<li><strong>Upload supporting documents.</strong> Usually the trade license, owner or partner IDs, and evidence of turnover such as sales invoices, contracts or audited figures.</li>
<li><strong>Review, declare and submit.</strong> You receive an application reference. The FTA may ask for clarification before it approves.</li>
<li><strong>Download your TRN certificate.</strong> Once approved, the certificate and TRN appear in EmaraTax, along with your effective registration date and first tax period.</li>
</ol>
<p>The FTA commonly reviews applications within about 20 business days, though requests for more information extend that. Apply within the deadline that applies to you: late registration is subject to an administrative penalty under the UAE penalty rules, and the amount is set by Cabinet decision, so check the current schedule on the FTA website.</p>

<h3>Documents to prepare before you start</h3>
<ul>
<li>Valid trade license (or freelance permit) and memorandum or articles where relevant</li>
<li>Emirates ID and passport copies of owners, partners and the authorized signatory</li>
<li>Proof of authority for the signatory, such as a power of attorney</li>
<li>Bank IBAN confirmation letter in the business name</li>
<li>Turnover evidence for the last 12 months and an estimate for the next 30 days</li>
<li>Customs registration details if you import or export goods</li>
</ul>

<h2>How to verify a TRN number in the UAE</h2>
<p>Before you pay a supplier invoice that charges VAT, check the TRN. If the number is wrong or not registered, you may be unable to recover the input VAT, and you may be dealing with a supplier who is charging VAT it is not entitled to collect.</p>
<ol>
<li>Open the TRN verification service on the FTA website or EmaraTax. It is designed for public checks, so you normally do not need to log in.</li>
<li>Type the 15-digit TRN exactly, with no spaces or dashes.</li>
<li>Complete the security check and submit.</li>
<li>Compare the legal name returned with the supplier name on the invoice.</li>
<li>Save a screenshot or note with the date of the check in your purchase records.</li>
</ol>
<p>The UAE government portal's <a href="https://u.ae/en/information-and-services/finance-and-investment/taxation/vat" target="_blank" rel="noopener noreferrer">VAT information page</a> links to the FTA services and summarizes who must register. A quick format check catches many typos before you even open the tool: the number should be exactly 15 digits. If it is 14 or 16 digits, or contains letters, ask for a corrected invoice.</p>

<h2>Where the TRN goes on a UAE tax invoice</h2>
<p>A full tax invoice in the UAE must show the words "Tax Invoice", the supplier's name, address and TRN, the recipient's details (including the recipient's TRN where the recipient is registered), a sequential invoice number, the date of issue and date of supply if different, a description of goods or services, unit price, quantity, rate and amount of VAT, the total payable and the VAT in AED. The full field list, including simplified tax invoices, is in our <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a> guide.</p>
<p>Practical placement tips:</p>
<ul>
<li>Put your TRN directly under your business name and address in the header, labeled "TRN".</li>
<li>Put the customer's TRN in the "Bill to" block, also labeled.</li>
<li>Use "Tax Invoice" as the document title, not just "Invoice", when you charge VAT.</li>
<li>Show the VAT amount in AED even if the invoice is in USD or another currency.</li>
</ul>
<p>Many UAE clients also expect Arabic text alongside English. If that applies to you, see our guide to the <a href="/blog/arabic-english-invoice">bilingual Arabic-English invoice</a>.</p>

<h2>Worked example: a tax invoice with TRNs and 5% VAT</h2>
<p>A Dubai web studio, registered for VAT, bills a registered Sharjah retailer. Both TRNs appear on the invoice. The TRNs below are placeholders.</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate (AED)</th><th>Net (AED)</th><th>VAT 5% (AED)</th></tr></thead><tbody>
<tr><td>Website redesign</td><td>1</td><td>18,000.00</td><td>18,000.00</td><td>900.00</td></tr>
<tr><td>Product photography (half day)</td><td>2</td><td>1,750.00</td><td>3,500.00</td><td>175.00</td></tr>
<tr><td>Hosting, 12 months</td><td>1</td><td>1,200.00</td><td>1,200.00</td><td>60.00</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td><strong>22,700.00</strong></td><td><strong>1,135.00</strong></td></tr>
</tbody></table>
<p>The arithmetic: 18,000 + (2 × 1,750) + 1,200 = AED 22,700 net. VAT at 5% is 22,700 × 0.05 = AED 1,135. The total payable is 22,700 + 1,135 = AED 23,835. The header shows "Tax Invoice", the studio's TRN (for example 100XXXXXXXXXXX3) and the retailer's TRN in the bill-to block.</p>
<p>You can build this layout in the <a href="/invoice-generator/uae">UAE invoice generator</a>, which has AED and TRN fields and lets you set the VAT rate per line. If you need a quick check of the VAT figure first, the <a href="/tools/sales-tax-calculator">sales tax calculator</a> works for 5% VAT too.</p>

<h2>TRN number UAE checklist before you send an invoice</h2>
<ul>
<li>Registered and holding a TRN certificate if you are above AED 375,000</li>
<li>Your 15-digit TRN in the header, labeled</li>
<li>Customer's TRN in the bill-to block if they are registered, verified on the FTA tool</li>
<li>Title "Tax Invoice" when VAT is charged</li>
<li>Unique, sequential invoice number (our <a href="/tools/invoice-number-generator">invoice number generator</a> can suggest a format)</li>
<li>VAT rate and amount per line, and VAT total in AED</li>
<li>Zero-rated or exempt lines clearly marked</li>
<li>Copy saved for at least the required record retention period</li>
</ul>

<h2>Common mistakes with UAE TRNs</h2>
<ul>
<li><strong>Charging VAT without being registered.</strong> If you have no TRN, you cannot charge VAT. Collecting it anyway creates a liability and a compliance problem.</li>
<li><strong>Showing the trade license number as the TRN.</strong> They are different numbers from different authorities.</li>
<li><strong>Typos in the customer's TRN.</strong> One wrong digit can lead the buyer's finance team to reject the invoice. Verify once and store the number in your customer record.</li>
<li><strong>Waiting until year end to check the threshold.</strong> The 12-month test is rolling, and the 30-day forward test can trigger registration as soon as you sign a large contract.</li>
<li><strong>Mixing up the VAT TRN and Corporate Tax number.</strong> Use the VAT TRN on tax invoices.</li>
<li><strong>Forgetting AED.</strong> A USD invoice still needs the VAT amount in AED.</li>
</ul>

<h2>TRNs and UAE e-invoicing</h2>
<p>The UAE is moving to mandatory e-invoicing in phases starting in 2027, with invoices exchanged as structured data through Accredited Service Providers. Seller and buyer TRNs become validated fields, so a wrong digit will be caught automatically. The timeline and scope are covered in our <a href="/blog/uae-e-invoicing-2027">UAE e-invoicing 2027</a> guide.</p>
<p>Be clear about what a PDF tool can and cannot do: our generator builds a PDF invoice in your browser. It is not an Accredited Service Provider and does not submit e-invoices to the FTA. It remains useful for businesses outside the mandate, for quotations and proformas, and while you prepare for go-live.</p>

<h2>Next steps</h2>
<p>Check your last 12 months of taxable supplies against AED 375,000 today, and if you are close, prepare the documents listed above. Once you have your TRN, update your invoice header and customer records, and verify each customer's TRN before your next billing run. For the wider picture of what other countries require, see our guide to <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a>.</p>
`,
  },
  {
    slug: "uae-corporate-tax-freelancers",
    title: "UAE Corporate Tax for Freelancers: Registration and 9% Rules",
    description:
      "UAE corporate tax for freelancers: the AED 1 million turnover test, 31 March registration deadline, 0% and 9% bands, small business relief and a worked example.",
    category: "tax-compliance",
    jurisdiction: "UAE",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "uae-freelance-permit",
      "trn-number-uae",
      "uae-vat-invoice-requirements",
      "freelancer-invoice-guide",
    ],
    faqs: [
      {
        q: "Do freelancers have to pay corporate tax in the UAE?",
        a: "Only if their business turnover exceeds AED 1 million in a calendar year. A freelancer is treated as a natural person conducting a business, and natural persons come into the Corporate Tax net only above that turnover level. Once in scope, the first AED 375,000 of taxable income is taxed at 0% and the rest at 9%, though small business relief may reduce the bill to zero for eligible periods.",
      },
      {
        q: "Is the AED 1 million threshold based on profit or turnover?",
        a: "Turnover. The test looks at the gross income from your business activities in the calendar year, before expenses. A freelancer who invoices AED 1.1 million and spends AED 500,000 on costs has passed the threshold, even though profit is only AED 600,000. Salary from employment, personal investment income and income from owning property as a private investment do not count toward the AED 1 million.",
      },
      {
        q: "When must a freelancer register for UAE corporate tax?",
        a: "For a UAE-resident natural person, the deadline under FTA Decision No. 3 of 2024 is 31 March of the year after the calendar year in which business turnover first exceeded AED 1 million. So a freelancer who passed AED 1 million during 2026 must register by 31 March 2027. Non-resident natural persons have a different deadline. Late registration attracts an administrative penalty, so do not wait until the return is due.",
      },
      {
        q: "Does my salary count toward the AED 1 million?",
        a: "No. Employment income is excluded from the Corporate Tax base for natural persons, so a person with a full-time job and a side business only counts the side business turnover toward the AED 1 million test. The same goes for personal investment income such as dividends or interest on personal savings, and for rental income from property held as a private investment rather than through a licensed business.",
      },
      {
        q: "What is small business relief and can freelancers use it?",
        a: "Small business relief lets an eligible resident person whose revenue is AED 3 million or less in the relevant tax period, and in previous periods, elect to be treated as having no taxable income. Freelancers can use it if they meet the conditions. It is available for tax periods ending on or before 31 December 2026, so check whether it has been extended before planning for 2027. You still register and file a return to claim it.",
      },
      {
        q: "When is the corporate tax return due for a freelancer?",
        a: "Natural persons use the calendar year as their tax period. The return and any tax payable are due within nine months of the end of that period, so the 2026 return is generally due by 30 September 2027. You file on EmaraTax. Even if you elect small business relief or owe nothing because income is below AED 375,000, a registered person still has to file the return on time.",
      },
      {
        q: "Do I need both a VAT TRN and a corporate tax registration?",
        a: "Often, yes, because the two tests are separate. VAT registration is mandatory once taxable supplies pass AED 375,000 in a rolling 12 months, which many freelancers reach long before AED 1 million of turnover. Corporate Tax registration for natural persons starts at AED 1 million a year. A freelancer above AED 1 million will usually need both, each handled on EmaraTax.",
      },
      {
        q: "Does income from foreign clients count for UAE corporate tax?",
        a: "For a UAE-resident freelancer, yes. Turnover from your business activity counts regardless of where your clients are, so invoices paid by clients in the UK, US or Europe are included in the AED 1 million test. Foreign taxes withheld by a client country may be creditable in some cases. Keep invoices, contracts and bank records showing the amounts and currencies for every foreign engagement.",
      },
      {
        q: "Can a freelancer use cash accounting for UAE corporate tax?",
        a: "Businesses with revenue of AED 3 million or less are generally allowed to prepare financial statements on a cash basis, and natural persons have simplified rules. Larger businesses must use accrual accounting. Confirm the current conditions in the FTA guide for natural persons, because the choice affects which year an invoice is counted in, and that can change whether you cross AED 1 million in a given year.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> UAE corporate tax for freelancers applies only when business turnover exceeds AED 1 million in a calendar year. You then register on EmaraTax by 31 March of the following year, pay 0% on taxable income up to AED 375,000 and 9% above it, and file within nine months of year end. Small business relief may apply through 2026.</p>

<p>Since Corporate Tax arrived in the UAE, freelancers have been asking the same question: does a tax designed for companies apply to someone working on a freelance permit? The short version is that most freelancers fall outside it, but successful ones can cross the line without noticing. This guide explains how UAE corporate tax for freelancers works, how to count your turnover, when to register, how the 0% and 9% bands apply, and how small business relief fits in, with a worked example and a checklist.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Corporate Tax rules for natural persons are set out in Federal Decree-Law No. 47 of 2022, Cabinet Decision No. 49 of 2023 and FTA decisions that can change. Check the <a href="https://tax.gov.ae/en/taxes/corporate.tax.aspx" target="_blank" rel="noopener noreferrer">FTA Corporate Tax pages</a> or a registered tax agent before you act.</p>

<h2>Who is a "freelancer" for UAE corporate tax?</h2>
<p>The law does not have a special freelancer category. A freelancer is a natural person, an individual, who conducts a business or business activity in the UAE. That covers people on a free zone freelance permit, holders of a mainland freelance or sole establishment license, and individuals who trade without a license but are still carrying on a business. If you trade through an LLC or a free zone company, the company is the taxpayer instead, and the AED 1 million natural person test does not apply to it.</p>
<p>Some income is outside the scope for individuals:</p>
<ul>
<li><strong>Wage income</strong> from employment</li>
<li><strong>Personal investment income</strong>, such as dividends, interest on personal savings and gains on shares held as a private investor</li>
<li><strong>Real estate investment income</strong> from property held personally, where no license is needed for the activity</li>
</ul>
<p>Everything else you earn by selling services or goods counts as business turnover.</p>

<h2>The AED 1 million turnover test</h2>
<p>A natural person is subject to UAE corporate tax only when total turnover from business activities exceeds AED 1 million in a calendar year. Three points matter:</p>
<ol>
<li><strong>It is turnover, not profit.</strong> You add up everything you invoiced and earned from business activity, before costs.</li>
<li><strong>It is combined.</strong> If you run two side businesses, a design practice and an online shop for example, the turnover of both is added together.</li>
<li><strong>Foreign clients count.</strong> A UAE-resident freelancer includes income from overseas clients. Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers currency and payment details on those invoices.</li>
</ol>
<p>If you invoice in USD or EUR, convert each invoice to AED at a consistent rate. Our post on <a href="/blog/foreign-currency-invoice">foreign currency invoices</a> explains how to show both currencies so the conversion is clear later.</p>

<h2>UAE corporate tax for freelancers: key numbers</h2>
<table><thead><tr><th>Item</th><th>Rule for natural persons</th></tr></thead><tbody>
<tr><td>Who is in scope</td><td>Individuals whose business turnover exceeds AED 1 million in a calendar year</td></tr>
<tr><td>Tax period</td><td>Calendar year (1 January to 31 December)</td></tr>
<tr><td>Registration deadline (resident)</td><td>31 March of the following year</td></tr>
<tr><td>Rates</td><td>0% on taxable income up to AED 375,000; 9% on the excess</td></tr>
<tr><td>Small business relief</td><td>Elective if revenue is AED 3 million or less; for tax periods ending on or before 31 December 2026</td></tr>
<tr><td>Return and payment</td><td>Within nine months of the end of the tax period (generally 30 September)</td></tr>
<tr><td>Portal</td><td>EmaraTax</td></tr>
</tbody></table>
<p>These figures were checked against FTA and Ministry of Finance publications as of October 2026. The small business relief end date in particular may be reviewed, so check for updates.</p>

<h2>How to register for corporate tax as a freelancer</h2>
<p>Registration uses the same EmaraTax platform as VAT. If you already have a VAT TRN, you will recognize the flow; our guide to the <a href="/blog/trn-number-uae">TRN number in the UAE</a> walks through that VAT side.</p>
<ol>
<li><strong>Log in to EmaraTax</strong> with your account or UAE Pass.</li>
<li><strong>Select or create your taxable person profile</strong> as a natural person, not as a legal entity.</li>
<li><strong>Choose Corporate Tax registration</strong> and enter your identification details: Emirates ID, passport and contact information.</li>
<li><strong>Add your business details:</strong> license or permit numbers if you have them, business activities and the date your turnover exceeded AED 1 million.</li>
<li><strong>Upload documents.</strong> Usually ID copies and your license or permit; the FTA may ask for evidence of turnover.</li>
<li><strong>Submit and keep the reference.</strong> Once approved, your Corporate Tax registration number appears in EmaraTax.</li>
</ol>
<p>Missing the registration deadline triggers an administrative penalty, which has been set at AED 10,000 for late Corporate Tax registration. The FTA has run waiver initiatives in the past for first-time late filers who filed their return promptly, so check whether any relief is available, but do not plan around it.</p>

<h2>Worked example: a Dubai consultant over AED 1 million</h2>
<p>Sara is a marketing consultant on a Dubai freelance permit. In 2026 she invoices clients in the UAE, UK and Saudi Arabia.</p>
<table><thead><tr><th>Item</th><th>AED</th></tr></thead><tbody>
<tr><td>UAE client fees (net of VAT)</td><td>610,000</td></tr>
<tr><td>UK client fees (converted to AED)</td><td>520,000</td></tr>
<tr><td>Saudi client fees (converted to AED)</td><td>270,000</td></tr>
<tr><td><strong>Total business turnover</strong></td><td><strong>1,400,000</strong></td></tr>
<tr><td>Deductible business expenses</td><td>520,000</td></tr>
<tr><td><strong>Taxable income</strong></td><td><strong>880,000</strong></td></tr>
</tbody></table>
<p>The arithmetic: 610,000 + 520,000 + 270,000 = AED 1,400,000 turnover, which is above AED 1 million, so Sara must register by 31 March 2027. Taxable income is 1,400,000 − 520,000 = AED 880,000.</p>
<p><strong>Without small business relief:</strong> the first AED 375,000 is taxed at 0%. The remaining 880,000 − 375,000 = AED 505,000 is taxed at 9%, so the tax is 505,000 × 0.09 = AED 45,450.</p>
<p><strong>With small business relief:</strong> her revenue of AED 1.4 million is below AED 3 million, so if she meets the other conditions and elects relief in her 2026 return, she is treated as having no taxable income and owes AED 0. She still has to register and file by 30 September 2027.</p>
<p>Notice that Sara also crossed the VAT threshold long ago: her UAE fees alone exceed AED 375,000. VAT and Corporate Tax are separate registrations, so she needs both.</p>

<h3>Below the threshold</h3>
<p>Compare Omar, a photographer whose 2026 business turnover is AED 940,000. He is below AED 1 million, so he is not subject to Corporate Tax for 2026 and does not register for it. If his turnover rises above AED 1 million in 2027, the test is applied afresh for that year.</p>

<h2>Residents, non-residents and timing questions</h2>
<p>Most freelancers reading this live and work in the UAE, so they are treated as resident persons once they cross the turnover test, and the 31 March deadline applies. A natural person who lives abroad but has a permanent establishment or other taxable presence in the UAE is a non-resident person, and the registration deadline is generally three months from the date they became subject to tax rather than 31 March. If you split your year between countries, get advice before assuming either rule.</p>
<p>Timing also matters near the threshold. Whether a December invoice counts in this year or next depends on your accounting basis, so decide on cash or accrual accounting early and apply it consistently. Our explainer on <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> shows how the same invoice can land in different years.</p>

<h2>Invoicing and records that support your return</h2>
<p>Your invoices are the main evidence of your turnover, so good invoicing habits make the AED 1 million test easy to prove either way.</p>
<ul>
<li>Use one numbering sequence per business and never skip numbers.</li>
<li>Show the currency on every invoice and record the AED value you used.</li>
<li>Keep VAT separate: turnover for Corporate Tax is measured excluding VAT you collect for the FTA.</li>
<li>Match each invoice to a bank receipt so you can show what was paid and when.</li>
<li>Keep expense invoices and receipts to support deductions.</li>
</ul>
<p>The free <a href="/invoice-generator/uae">UAE invoice generator</a> creates numbered PDF invoices with AED and TRN fields in your browser; it does not file anything with the FTA. If you want a clean freelance layout, try the <a href="/invoice-templates/minimal">Minimal invoice template</a>. For broader good practice, see our <a href="/blog/freelancer-invoice-guide">freelancer invoice guide</a>, and for how long to hold onto the records, read <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</p>

<h2>Corporate tax checklist for UAE freelancers</h2>
<ul>
<li>Total your business turnover for the calendar year, including foreign clients, excluding salary and personal investment income</li>
<li>Compare it with AED 1 million; keep the calculation</li>
<li>If over, register on EmaraTax by 31 March of the following year</li>
<li>Check your VAT position separately against AED 375,000</li>
<li>Track deductible expenses with supporting invoices</li>
<li>Decide whether to elect small business relief and confirm you meet the conditions</li>
<li>File the return and pay any tax within nine months of year end</li>
<li>Keep records for the period the law requires (generally seven years)</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Testing profit instead of turnover.</strong> The AED 1 million test uses gross business turnover.</li>
<li><strong>Ignoring foreign income.</strong> Overseas clients count for a UAE-resident freelancer.</li>
<li><strong>Assuming relief means no registration.</strong> Small business relief is claimed in a return, so you must be registered first.</li>
<li><strong>Confusing VAT and Corporate Tax.</strong> Different thresholds, different registrations, different returns.</li>
<li><strong>Forgetting the 2026 relief end date.</strong> Plan for 2027 on the assumption that relief may not continue unless it is extended.</li>
<li><strong>Weak records.</strong> Unnumbered invoices or missing bank matches make it hard to prove you were under the threshold.</li>
</ul>

<h2>What about e-invoicing?</h2>
<p>The UAE e-invoicing mandate is being phased in from 2027 for businesses, with structured invoices sent through Accredited Service Providers. Natural persons conducting business may be affected depending on the final scope rules, so read our <a href="/blog/uae-e-invoicing-2027">UAE e-invoicing 2027</a> guide and watch for Ministry of Finance updates. For the field-by-field content of today's tax invoices, see our <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a>. The <a href="https://mof.gov.ae/" target="_blank" rel="noopener noreferrer">UAE Ministry of Finance</a> publishes the underlying laws and Cabinet decisions.</p>
<p>Next step: pull your invoices for this calendar year, total them in AED, and see how close you are to AED 1 million before year end, because UAE corporate tax for freelancers is tested afresh every calendar year. More practical advice is in our <a href="/blog/category/freelancing">freelancing articles</a>.</p>
`,
  },
  {
    slug: "gst-registration-india",
    title: "GST Registration in India: Threshold, Documents and Process",
    description:
      "GST registration in India explained: Rs 40 lakh, 20 lakh and 10 lakh thresholds, who must register anyway, the documents you need and the REG-01 steps.",
    category: "tax-compliance",
    jurisdiction: "India",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "lut-under-gst",
      "income-tax-act-2025-india",
      "gst-return-filing-india",
      "gst-invoice-guide",
      "gst-2-0-new-gst-rates",
      "e-way-bill",
    ],
    faqs: [
      {
        q: "What is the turnover limit for GST registration?",
        a: "For most states, a business that only supplies goods must register once aggregate turnover exceeds Rs 40 lakh in a financial year, while service providers and mixed suppliers register above Rs 20 lakh. Lower limits apply in some special category states: Rs 10 lakh in Manipur, Mizoram, Nagaland and Tripura, and Rs 20 lakh for goods in states that did not adopt the higher goods limit. Check your state's current limit on the GST portal.",
      },
      {
        q: "Is GST registration free?",
        a: "Yes. There is no government fee to apply for GST registration on the GST portal. You can apply yourself using form GST REG-01. If you hire a chartered accountant or a tax practitioner to prepare and file the application for you, they charge a professional fee, but that is a service charge, not a government fee. Be wary of websites that look official and ask for payment.",
      },
      {
        q: "How many days does GST registration take?",
        a: "If Aadhaar authentication succeeds and the officer raises no queries, registration is generally approved within seven working days. Where Aadhaar authentication is not done or the application is flagged for physical verification of the premises, it can take up to 30 days. Under the simplified scheme in Rule 14A, available from 1 November 2025 for eligible small taxpayers, registration is meant to be granted within three working days.",
      },
      {
        q: "Can I get GST registration without a shop or office?",
        a: "Yes, you can register using your residential address as the principal place of business, which is common for freelancers and home businesses. You still need proof for that address, such as an electricity bill or property tax receipt, plus a rent agreement or a consent letter from the owner if the property is not yours. The officer may verify the premises, so make sure the address and documents match exactly.",
      },
      {
        q: "Do freelancers need GST registration in India?",
        a: "A freelancer supplying services must register once aggregate turnover crosses Rs 20 lakh in a financial year (Rs 10 lakh in some special category states). Export of services counts toward aggregate turnover even though it is zero-rated. Freelancers can also register voluntarily below the limit, for example to claim input tax credit or because clients prefer registered suppliers. Once registered, you must file returns even in months with no sales.",
      },
      {
        q: "What documents are required for GST registration?",
        a: "Typically you need the PAN of the business, Aadhaar and PAN of the proprietor, partners or directors, photographs, proof of constitution such as a partnership deed or certificate of incorporation, proof of the principal place of business, and bank account proof like a cancelled cheque or the first page of a passbook or statement. Companies and firms also need an authorization letter or board resolution for the authorized signatory.",
      },
      {
        q: "What is GST REG-01?",
        a: "GST REG-01 is the application form for new GST registration, filed online on the GST portal. Part A asks for PAN, mobile number, email and state, and produces a Temporary Reference Number. Part B collects business details, promoters, addresses, goods and services, bank account and documents. After submission you get an Application Reference Number (ARN) to track the status until the certificate is issued in form REG-06.",
      },
      {
        q: "Who must register for GST regardless of turnover?",
        a: "Section 24 of the CGST Act lists categories that must register even below the threshold. They include persons making inter-state taxable supplies of goods, casual taxable persons, non-resident taxable persons, persons liable to pay tax under reverse charge, input service distributors, persons required to deduct or collect tax at source, and many sellers on e-commerce platforms. Some relaxations exist, so check the current notifications for your case.",
      },
      {
        q: "What does a GSTIN look like?",
        a: "A GSTIN is a 15-character number. The first two digits are the state code, the next ten characters are the PAN of the business, the 13th character is an entity number for registrations under the same PAN in that state, the 14th is usually the letter Z, and the last character is a check digit. Show it in full on every tax invoice you issue.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> GST registration in India is required once aggregate turnover exceeds Rs 40 lakh for goods suppliers or Rs 20 lakh for service providers in most states, with lower limits in some special category states. Some businesses must register regardless of turnover. You apply free on the GST portal using form GST REG-01.</p>

<p>Registering for GST changes how you invoice, price and file. Once you have a GSTIN, you charge GST on taxable supplies, issue tax invoices, file returns and can claim input tax credit on purchases. This guide explains when GST registration becomes mandatory, how aggregate turnover is measured, who must register anyway, the documents you need, and the REG-01 process step by step, with a worked example, a checklist and the mistakes that slow applications down.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Thresholds, state options and portal steps are set by GST law and notifications that change. Confirm the current position on the official <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">GST portal</a> or with a chartered accountant before you apply.</p>

<h2>When is GST registration mandatory? Threshold limits</h2>
<p>The test is based on aggregate turnover in a financial year (April to March). The limits depend on what you supply and where you are registered.</p>
<table><thead><tr><th>Type of supplier</th><th>Most states</th><th>Special category states (varies by state)</th></tr></thead><tbody>
<tr><td>Exclusively goods</td><td>Rs 40 lakh</td><td>Rs 20 lakh or Rs 10 lakh</td></tr>
<tr><td>Services, or goods and services</td><td>Rs 20 lakh</td><td>Rs 10 lakh in Manipur, Mizoram, Nagaland and Tripura; Rs 20 lakh elsewhere</td></tr>
</tbody></table>
<p>The Rs 40 lakh goods limit was an option that states could adopt. Manipur, Mizoram, Nagaland and Tripura use Rs 10 lakh, and a few states, including some in the north-east and Telangana, kept the Rs 20 lakh limit for goods. Because sources describe these state choices differently, check the current limit for your state on the GST portal before relying on the table.</p>

<h3>What counts as aggregate turnover?</h3>
<p>Aggregate turnover is the value of all your taxable supplies, exempt supplies, exports and inter-state supplies across India, for all registrations under the same PAN. It excludes the GST itself and inward supplies taxed under reverse charge. Two points catch people out:</p>
<ul>
<li><strong>Exports count.</strong> A freelancer billing overseas clients includes that income even though exports are zero-rated.</li>
<li><strong>Exempt supplies count.</strong> Even supplies on which no GST is charged are added in.</li>
</ul>

<h2>Who must register regardless of turnover</h2>
<p>Section 24 of the CGST Act requires some persons to register even below the threshold. The main categories are:</p>
<ul>
<li>Persons making inter-state taxable supplies of goods (inter-state service providers below the limit have been exempted)</li>
<li>Casual taxable persons and non-resident taxable persons</li>
<li>Persons liable to pay tax under reverse charge</li>
<li>Input service distributors and persons required to deduct TDS or collect TCS</li>
<li>Many suppliers selling goods through e-commerce operators, subject to relaxations for some small intra-state sellers</li>
<li>Suppliers of online information and database access services from outside India to unregistered persons in India</li>
</ul>
<p>If one of these applies, register before you start the activity rather than waiting for turnover to build.</p>

<h2>Documents required for GST registration</h2>
<table><thead><tr><th>Business type</th><th>Typical documents</th></tr></thead><tbody>
<tr><td>Proprietor or freelancer</td><td>PAN and Aadhaar of the proprietor, photograph, address proof of business premises, bank account proof</td></tr>
<tr><td>Partnership or LLP</td><td>PAN of the firm, partnership deed or LLP agreement, PAN, Aadhaar and photos of partners, authorization letter for the signatory, premises and bank proof</td></tr>
<tr><td>Company</td><td>PAN of the company, certificate of incorporation, MOA and AOA, PAN, Aadhaar and photos of directors, board resolution for the signatory, premises and bank proof</td></tr>
</tbody></table>
<p>For the principal place of business, upload a recent electricity bill, property tax receipt or municipal document. If you rent, add the rent or lease agreement; if a family member owns the premises, add a consent letter with their ID and ownership proof. Bank proof is usually a cancelled cheque, the first page of the passbook or a bank statement showing the account holder's name and IFSC.</p>

<h2>How to apply for GST registration: REG-01 step by step</h2>
<ol>
<li><strong>Open the GST portal</strong> and choose Services, then Registration, then New Registration.</li>
<li><strong>Complete Part A.</strong> Select "Taxpayer", your state and district, and enter the legal name as per PAN, the PAN, email and mobile number. Verify both with OTPs. You receive a Temporary Reference Number (TRN), valid for 15 days.</li>
<li><strong>Log in with the TRN and fill Part B.</strong> Enter business details, promoters or partners, the authorized signatory, principal and additional places of business, the main goods (HSN) or services (SAC) you supply, and bank details.</li>
<li><strong>Decide on the simplified scheme.</strong> If you expect your monthly output tax on supplies to registered persons to stay within Rs 2.5 lakh, you can opt for Rule 14A, available since 1 November 2025, which aims to grant registration within three working days after Aadhaar authentication.</li>
<li><strong>Opt for Aadhaar authentication.</strong> This usually speeds approval. In some states, applicants flagged by the system must also complete biometric authentication and document verification at a GST Suvidha Kendra.</li>
<li><strong>Upload documents and submit</strong> with an electronic verification code or a digital signature certificate (companies and LLPs generally use a DSC). An Application Reference Number (ARN) is generated.</li>
<li><strong>Respond to any query.</strong> If the officer issues a notice in form REG-03, reply in REG-04 within the time allowed, usually seven working days.</li>
<li><strong>Download the certificate.</strong> Once approved, the certificate in form REG-06 and your GSTIN are available on the portal.</li>
</ol>
<p>Approval normally comes within seven working days when Aadhaar authentication succeeds, or up to 30 days if physical verification is needed. There is no government fee. The <a href="https://cbic-gst.gov.in/" target="_blank" rel="noopener noreferrer">CBIC GST site</a> publishes the rules and notifications behind these steps.</p>

<h2>Worked example: does this freelancer need GST registration?</h2>
<p>Priya is a UI designer in Pune, Maharashtra. In the financial year 2026-27 she expects the following income.</p>
<table><thead><tr><th>Source</th><th>Amount (Rs)</th></tr></thead><tbody>
<tr><td>Design work for Indian clients</td><td>13,50,000</td></tr>
<tr><td>Design work for clients in the US and UK (export of services)</td><td>7,20,000</td></tr>
<tr><td>Online course sales (taxable)</td><td>1,30,000</td></tr>
<tr><td><strong>Aggregate turnover</strong></td><td><strong>22,00,000</strong></td></tr>
</tbody></table>
<p>The arithmetic: 13,50,000 + 7,20,000 + 1,30,000 = Rs 22,00,000. She supplies services in a state with a Rs 20 lakh limit, so she crosses the threshold by 22,00,000 − 20,00,000 = Rs 2,00,000 and must register. She should apply within 30 days of the day she becomes liable, which is the day her turnover passes Rs 20 lakh, not at year end.</p>
<p>After registration, her domestic invoices carry GST at the applicable rate (18% for most professional services under the slabs explained in our <a href="/blog/gst-2-0-new-gst-rates">GST 2.0 new rates guide</a>). A Rs 50,000 design invoice to a client in Maharashtra would show CGST 9% of Rs 4,500 and SGST 9% of Rs 4,500, a total of Rs 59,000. Her export invoices are zero-rated, usually under a Letter of Undertaking.</p>

<h2>Understanding your GSTIN</h2>
<p>Your GSTIN is a 15-character number built from your PAN. The first two digits are the state code (27 for Maharashtra, for example), the next ten characters are your PAN, the 13th character counts registrations under the same PAN in that state, the 14th is usually Z, and the last is a check digit. If you register in a second state, you get a second GSTIN with a different state code. Our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a> compares the GSTIN with tax numbers in other countries. Once registered, also restart a clean, sequential invoice series for each GSTIN; the <a href="/tools/invoice-number-generator">invoice number generator</a> can help you pick a format that fits the 16-character limit for GST invoice numbers.</p>

<h2>After registration: what changes on your invoices</h2>
<p>Once you hold a GSTIN, every taxable sale needs a proper tax invoice with your GSTIN, the buyer's GSTIN for B2B sales, HSN or SAC codes, place of supply and the tax split between CGST and SGST or IGST. The full field list is in our <a href="/blog/gst-invoice-guide">GST invoice guide</a>, and the difference between a tax invoice and a bill of supply or retail bill is covered in <a href="/blog/tax-invoice-vs-retail-invoice">tax invoice vs retail invoice</a>.</p>
<ul>
<li>File GSTR-1 and GSTR-3B monthly, or quarterly under QRMP if eligible.</li>
<li>Review supplier invoices through the <a href="/blog/gst-invoice-management-system">GST Invoice Management System</a> before claiming credit.</li>
<li>If you move goods worth more than Rs 50,000, learn the <a href="/blog/e-way-bill">e-way bill rules</a>.</li>
<li>If your turnover grows past Rs 5 crore, check the <a href="/blog/india-e-invoice-limit">e-invoice limit</a> because you will need an IRN for B2B invoices.</li>
</ul>
<p>Below the e-invoicing limit, a clear PDF tax invoice is normal practice. Our free <a href="/invoice-generator">online invoice generator</a> lets you add your GSTIN, HSN or SAC codes and tax per line, and download a PDF. It does not connect to the GST portal or generate an IRN or e-way bill. A structured layout such as the <a href="/invoice-templates/corporate">Corporate invoice template</a> keeps the tax columns readable.</p>

<h2>GST registration checklist</h2>
<ul>
<li>Calculate aggregate turnover for the financial year, including exports and exempt supplies</li>
<li>Confirm your state's threshold for goods or services</li>
<li>Check whether any compulsory registration category applies</li>
<li>Scan PAN, Aadhaar, photographs, premises proof and bank proof</li>
<li>Prepare an authorization letter or board resolution for the signatory</li>
<li>Make sure the mobile number is linked to Aadhaar for OTP authentication</li>
<li>Decide whether to opt for Rule 14A or the composition scheme</li>
<li>Track the ARN and reply to any REG-03 query on time</li>
<li>Update your invoice template with the GSTIN once approved</li>
</ul>

<h2>Common mistakes in GST registration</h2>
<ul>
<li><strong>Leaving out exports.</strong> Export turnover counts toward the threshold.</li>
<li><strong>Name mismatches.</strong> The legal name must match PAN exactly, and the premises proof must show the same address you enter.</li>
<li><strong>Weak address proof.</strong> An old bill, an unsigned rent agreement or a missing consent letter is the most common reason for queries.</li>
<li><strong>Wrong HSN or SAC codes.</strong> Choose codes that match what you actually supply; they flow into your invoices and returns.</li>
<li><strong>Charging GST before approval.</strong> Do not show GST or a GSTIN on invoices until registration is granted; ask an adviser how to handle sales during the pending period.</li>
<li><strong>Registering and then not filing.</strong> Returns are due even when you have no sales, and non-filing can lead to cancellation of your GSTIN.</li>
</ul>

<h2>Next steps</h2>
<p>Total your turnover for this financial year, compare it with your state's limit and gather the documents above. For how GST compares with VAT and sales tax in other countries, see <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST</a>.</p>
`,
  },
  {
    slug: "e-way-bill",
    title: "E-Way Bill: Rules, Limit and How to Generate One (India)",
    description:
      "E-way bill rules in India: the Rs 50,000 limit, who generates it, Part A and Part B, validity by distance, the 2025 changes and how it links to e-invoices.",
    category: "tax-compliance",
    jurisdiction: "India",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["india-e-invoice-limit", "gst-invoice-guide", "delivery-challan-format"],
    faqs: [
      {
        q: "What is the limit for an e-way bill?",
        a: "An e-way bill is generally required when goods worth more than Rs 50,000 are moved in one consignment by a motorized vehicle. The value is the invoice or challan value including GST, excluding the value of exempt goods on the same document. Some states set a higher limit for movements within the state, so check your state's notification if your goods do not cross a state border.",
      },
      {
        q: "Is an e-way bill required within the same city?",
        a: "Usually yes, if the consignment value exceeds the limit, because the rule is about value, not distance. However, Part B (vehicle details) is not needed when goods move up to 50 km within the same state between the consignor's place and the transporter's place, or from the transporter to the consignee. Some states also relax intra-city movements or set higher intra-state limits, so check the local rule.",
      },
      {
        q: "Who is responsible for generating the e-way bill?",
        a: "The registered person causing the movement, either the supplier or the recipient, should generate it before the goods move. If they hand the goods to a transporter without generating it, the transporter must generate it based on the invoice or challan. When an unregistered supplier sends goods to a registered recipient, the recipient is responsible. Unregistered transporters can enroll on the portal to get a transporter ID.",
      },
      {
        q: "How long is an e-way bill valid?",
        a: "For normal cargo, validity is one day for up to 200 km and one additional day for every further 200 km or part of it. For over-dimensional cargo or multimodal shipments involving a ship, it is one day per 20 km. Each day ends at midnight of the day after generation. Validity runs from when Part B is first entered, because until then you only have a Part A slip.",
      },
      {
        q: "Can an e-way bill be extended or cancelled?",
        a: "You can extend validity within eight hours before or after expiry if goods are delayed for a valid reason such as a breakdown, entering the reason and current location. Since 2025, total validity including extensions is capped at 360 days from generation. You can cancel an e-way bill within 24 hours of generation if the goods do not move, as long as it has not been verified in transit.",
      },
      {
        q: "Is an e-way bill needed for services?",
        a: "No. An e-way bill applies only to the movement of goods. A consultant, designer or software developer billing for services does not need one. If a service business also ships goods, for example installing equipment it supplies, the goods part of the movement may need an e-way bill when its value exceeds the limit.",
      },
      {
        q: "What is the penalty for moving goods without an e-way bill?",
        a: "Goods and the vehicle can be detained under Section 129 of the CGST Act, and release generally requires paying a penalty linked to the tax on the goods. A separate general penalty under Section 122 can also apply. The exact amounts depend on whether the owner comes forward and on the goods, so check the current law. In practice, the delay and cost of detention are usually far larger than generating the bill.",
      },
      {
        q: "Can I generate an e-way bill from an e-invoice?",
        a: "Yes. If you are above the e-invoicing limit and register your invoice on an Invoice Registration Portal, you can include transport details when you get the IRN, and the e-way bill is generated from the same data. If transport details are not ready, you can add them later using the IRN. Only invoices with a valid IRN can be used this way.",
      },
      {
        q: "Can I generate an e-way bill for an old invoice?",
        a: "Not if it is too old. From 1 January 2025, the portal does not allow an e-way bill to be generated for an invoice, bill or challan dated more than 180 days before the generation date. If you need to move goods on a document older than that, you will usually need a fresh document, such as a delivery challan, that reflects the actual movement.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An e-way bill is an electronic document generated on the official GST portal before goods worth more than Rs 50,000 are moved by vehicle. Part A holds invoice and consignment details; Part B holds vehicle or transporter details. Validity is one day per 200 km for normal cargo, and IRN-registered invoices can generate one directly.</p>

<p>If you sell, ship or move goods in India, the e-way bill sits between your invoice and the truck. Without a valid one, goods can be stopped and detained at a checkpoint even when your tax invoice is perfect. This guide explains when one is required, who generates it, what Part A and Part B contain, how validity is calculated, what changed in 2025, and how it connects to e-invoicing. A worked example and a checklist follow.</p>

<p><strong>Important:</strong> This is general information, not tax advice. These rules sit in Rule 138 of the CGST Rules and in state notifications that change. Check the official <a href="https://ewaybillgst.gov.in/" target="_blank" rel="noopener noreferrer">e-way bill portal</a> and its advisories before you rely on any figure here.</p>

<h2>What is an e-way bill?</h2>
<p>An EWB (electronic way bill) is a document generated on the government's EWB system for the movement of goods. Each one gets a 12-digit number (EBN) that the transporter carries, either printed or as the number, so tax officers can verify the consignment during transit. It does not replace your tax invoice, bill of supply or delivery challan. It sits alongside them and records that the movement was declared before it started.</p>
<p>The system applies to supplies, to movements for reasons other than supply (such as sending goods for job work, returns or exhibitions) and to inward supplies from unregistered persons.</p>

<h2>When is an e-way bill required? The Rs 50,000 limit</h2>
<table><thead><tr><th>Situation</th><th>EWB needed?</th></tr></thead><tbody>
<tr><td>Consignment value above Rs 50,000, moved by motorized vehicle</td><td>Yes, generally</td></tr>
<tr><td>Consignment value Rs 50,000 or less</td><td>Usually no, but some exceptions apply</td></tr>
<tr><td>Inter-state movement of goods for job work by a principal or registered job worker</td><td>Yes, regardless of value</td></tr>
<tr><td>Inter-state movement of handicraft goods by a person exempt from registration</td><td>Yes, regardless of value</td></tr>
<tr><td>Goods moved by non-motorized conveyance (for example a hand cart)</td><td>No</td></tr>
<tr><td>Goods listed in the exemption annexure to Rule 138, and some customs movements</td><td>No, as specified</td></tr>
<tr><td>Movement within a state where the state set a higher intra-state limit</td><td>Depends on the state limit</td></tr>
</tbody></table>
<p>The consignment value is the value declared on the invoice, bill of supply or delivery challan, including CGST, SGST, IGST and cess, but excluding the value of exempt supplies on the same document. If you send multiple invoices in one vehicle, each invoice is generally tested on its own, though a transporter can bundle the individual EWBs into a consolidated e-way bill.</p>

<h2>Who generates it?</h2>
<ul>
<li><strong>The registered supplier or recipient</strong> causing the movement generates it before the goods leave.</li>
<li><strong>The transporter</strong> must generate it if the consignor or consignee has not, using the documents handed over with the goods.</li>
<li><strong>A registered recipient</strong> is responsible when buying from an unregistered supplier.</li>
<li><strong>Unregistered transporters</strong> enroll on the portal to get a transporter ID so they can be named in Part B or update vehicle details.</li>
</ul>
<p>You must be GST-registered to generate EWBs as a supplier or recipient. If you are not yet registered, our guide to <a href="/blog/gst-registration-india">GST registration in India</a> explains the thresholds and the REG-01 process.</p>

<h2>Part A and Part B: what each part holds</h2>
<table><thead><tr><th>Part</th><th>Who fills it</th><th>Key fields</th></tr></thead><tbody>
<tr><td>Part A</td><td>Supplier, recipient or transporter</td><td>GSTIN of supplier and recipient (or URP for unregistered), place of dispatch and delivery PIN codes, document type, number and date, value of goods, HSN code, reason for transport, transporter ID if known</td></tr>
<tr><td>Part B</td><td>Whoever arranges transport</td><td>Vehicle number for road, or transport document number and date for rail, air or ship</td></tr>
</tbody></table>
<p>Until Part B is filled, you only have a Part A slip, which is not valid for movement. Part B is not required when goods move up to 50 km within the same state between your place of business and the transporter's place, or from the transporter to the consignee, though Part A details are still needed. If goods change vehicle in transit, Part B is updated with the new vehicle number.</p>

<h2>How to generate an e-way bill step by step</h2>
<ol>
<li><strong>Log in</strong> to the portal with your username, password and, since 2025, the multi-factor authentication code sent to your registered mobile or app.</li>
<li><strong>Choose "Generate new"</strong> under the EWB menu.</li>
<li><strong>Select transaction type</strong> (outward or inward), sub-type (supply, export, job work and so on) and document type (tax invoice, bill of supply, delivery challan).</li>
<li><strong>Enter the document number and date.</strong> The document must not be more than 180 days old.</li>
<li><strong>Enter consignor and consignee details</strong>, including GSTINs and PIN codes. The portal calculates the approximate distance from the PIN codes, and you can generally enter up to 10% more than that.</li>
<li><strong>Add item details:</strong> product name, HSN code, quantity, taxable value and tax rates.</li>
<li><strong>Enter transporter details</strong> and the vehicle number in Part B, or leave Part B for the transporter.</li>
<li><strong>Submit</strong> to get the 12-digit e-way bill number, and give it (or a printout) to the driver with the invoice.</li>
</ol>
<p>Large shippers can also generate them through APIs, SMS, the mobile app or bulk upload, and businesses above the e-invoicing limit can do it from the IRN, as explained below.</p>

<h2>E-way bill validity: how it is calculated</h2>
<table><thead><tr><th>Type of cargo</th><th>Validity</th></tr></thead><tbody>
<tr><td>Normal cargo</td><td>1 day for up to 200 km, plus 1 day for every further 200 km or part of it</td></tr>
<tr><td>Over-dimensional cargo, or multimodal shipment with a leg by ship</td><td>1 day for up to 20 km, plus 1 day for every further 20 km or part of it</td></tr>
</tbody></table>
<p>The count starts when Part B is first entered, and each "day" ends at midnight of the following day. If goods are delayed, the generator or the transporter in charge can extend validity within eight hours before or after expiry, stating the reason. Since 2025, extensions cannot take total validity beyond 360 days from the original generation date.</p>

<h3>Worked example: is an EWB needed, and for how long?</h3>
<p>A furniture maker in Ahmedabad, Gujarat, sells office chairs to a registered buyer in Jaipur, Rajasthan, about 650 km away by road.</p>
<table><thead><tr><th>Item</th><th>Amount (Rs)</th></tr></thead><tbody>
<tr><td>Taxable value: 20 chairs at Rs 2,300</td><td>46,000</td></tr>
<tr><td>IGST at 18% (inter-state)</td><td>8,280</td></tr>
<tr><td><strong>Invoice value</strong></td><td><strong>54,280</strong></td></tr>
</tbody></table>
<p>The arithmetic: 20 × 2,300 = Rs 46,000; 18% IGST = 46,000 × 0.18 = Rs 8,280; invoice value = Rs 54,280. Even though the taxable value is below Rs 50,000, the consignment value including tax is above it, so an e-way bill is required.</p>
<p>Validity: the first 200 km gives one day. The remaining 650 − 200 = 450 km needs three more blocks of 200 km or part (200 + 200 + 50), so three more days. Total validity is four days. The rate shown is for illustration; check the current GST rate for your goods using our guide to the <a href="/blog/gst-2-0-new-gst-rates">GST 2.0 slabs</a>, and you can double-check tax arithmetic with the <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>Rules that changed in 2025</h2>
<ul>
<li><strong>180-day document limit:</strong> from 1 January 2025, EWBs cannot be generated for documents dated more than 180 days earlier.</li>
<li><strong>360-day extension cap:</strong> extensions are limited to 360 days from the original generation date.</li>
<li><strong>Multi-factor authentication:</strong> GSTN rolled out MFA for portal users during 2025, so keep the registered mobile number up to date.</li>
<li><strong>Second portal:</strong> an E-Way Bill 2.0 portal runs alongside the main portal, with data synced between them, so you can keep working if one is unavailable.</li>
</ul>
<p>Check the portal's news and advisory section for anything announced after October 2026.</p>

<h2>How the e-way bill links to e-invoicing</h2>
<p>Businesses whose aggregate turnover exceeds the e-invoicing limit, currently Rs 5 crore, must register B2B invoices on an Invoice Registration Portal to get an IRN. When you report the invoice, you can include transport details, and the EWB is created from the same data; if transport is not arranged yet, you can generate it later using the IRN. That removes double entry and mismatches. Our guide to the <a href="/blog/india-e-invoice-limit">e-invoice limit in GST</a> covers who is in scope and the 30-day reporting rule. The <a href="https://cbic-gst.gov.in/" target="_blank" rel="noopener noreferrer">CBIC GST website</a> publishes the underlying rules and notifications.</p>

<h2>Documents that travel with the goods</h2>
<p>The driver should carry the invoice, bill of supply or delivery challan, and the EWB number. For movements that are not sales, such as job work or sending goods on approval, a delivery challan is used instead of an invoice; see our <a href="/blog/delivery-challan-format">delivery challan format</a>. For exports, the shipping documents also matter; our comparison of the <a href="/blog/bill-of-lading-vs-commercial-invoice">bill of lading vs commercial invoice</a> explains how they fit together.</p>
<p>If you are below the e-invoicing limit, the tax invoice itself can be a PDF. Our free <a href="/invoice-generator">invoice generator</a> lets you add GSTINs, HSN codes and tax per line and download a PDF to send with the goods. It does not generate EWBs or IRNs, so you still create the e-way bill on the official portal. For the full list of fields a GST invoice needs, see our <a href="/blog/gst-invoice-guide">GST invoice guide</a>.</p>

<h2>E-way bill checklist</h2>
<ul>
<li>Check the consignment value including tax against Rs 50,000 and any state limit</li>
<li>Check for job work or handicraft rules that apply regardless of value</li>
<li>Confirm the invoice or challan is dated within the last 180 days</li>
<li>Enter correct GSTINs, PIN codes and HSN codes</li>
<li>Fill Part B with the vehicle number before the goods leave</li>
<li>Note the validity end time and plan extensions before it expires</li>
<li>Hand the driver the EWB number and the invoice or challan</li>
<li>Cancel within 24 hours if the goods do not move</li>
</ul>

<h2>Common mistakes with e-way bills</h2>
<ul>
<li><strong>Testing the taxable value instead of the total.</strong> The limit is checked on the value including GST.</li>
<li><strong>Leaving Part B blank.</strong> A Part A slip alone is not valid for movement beyond the 50 km relaxation.</li>
<li><strong>Wrong vehicle number.</strong> A single typo can lead to detention; update Part B if the vehicle changes.</li>
<li><strong>Letting validity lapse.</strong> Extend within the eight-hour window or you will need a new one.</li>
<li><strong>Mismatched values.</strong> The EWB value should match the invoice; differences invite questions in transit and in returns.</li>
<li><strong>Ignoring rejections.</strong> The recipient can reject the document within 72 hours or before delivery, whichever is earlier; check the portal for rejections.</li>
</ul>
`,
  },
  {
    slug: "how-to-get-ntn-number-pakistan",
    title: "How to Get an NTN Number in Pakistan Online (IRIS Guide)",
    description:
      "How to get an NTN number in Pakistan online: IRIS steps, documents for individuals, AOPs and companies, how to verify an NTN and how to become a filer.",
    category: "tax-compliance",
    jurisdiction: "Pakistan",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-become-filer-pakistan",
      "income-tax-return-pakistan-iris",
      "sales-tax-invoice-pakistan",
      "freelancer-tax-pakistan-2026",
      "strn-registration-pakistan",
    ],
    faqs: [
      {
        q: "Is my CNIC number my NTN number?",
        a: "For individuals, yes in practice. When an individual registers on IRIS, FBR uses the 13-digit CNIC as the registration number, so your NTN is the same as your CNIC once registration is complete. Having a CNIC alone does not make you registered, though. You still need to complete the IRIS registration. Companies and associations of persons receive a separate NTN that is not linked to any single CNIC.",
      },
      {
        q: "How can I get an NTN number online for free?",
        a: "Go to FBR's IRIS portal or the Tax Asaan mobile app, choose registration for an unregistered person, enter your CNIC, name, mobile number and email, and verify the codes sent to your phone and email. Then log in, complete the registration form (Form 181) with your address, business and bank details, and submit. FBR does not charge a fee for NTN registration, so you do not have to pay an agent to do it.",
      },
      {
        q: "How long does it take to get an NTN?",
        a: "For an individual with a CNIC, a mobile number registered in their own name and a working email, online registration on IRIS is often completed the same day, sometimes within minutes of submitting the form. Applications for associations of persons and companies, or cases where FBR asks for more information, take longer. Keep your mobile number and email active because FBR sends credentials and notices to them.",
      },
      {
        q: "How do I check my NTN or someone else's NTN?",
        a: "FBR provides online verification services on its website where you can search by CNIC, NTN or registration number and see the registered name and status. You can also check whether a person is on the Active Taxpayer List (ATL). FBR has long offered an SMS service for ATL checks; send ATL followed by a space and the 13-digit CNIC to 9966, and confirm the current method on the FBR website.",
      },
      {
        q: "Am I a filer once I get an NTN?",
        a: "No. An NTN only means you are registered with FBR. You become an active taxpayer, commonly called a filer, when you file your income tax return and your name appears on the Active Taxpayer List. FBR publishes the main list each year and updates it. If you file late, you may need to pay a surcharge to be included. Non-filers face higher withholding tax on many transactions.",
      },
      {
        q: "Do freelancers in Pakistan need an NTN?",
        a: "Practically, yes. Freelancers who earn from abroad need an NTN to file returns, claim reduced tax rates available to registered exporters of IT services, show tax compliance to banks and avoid higher non-filer withholding. Many local clients will also ask for your NTN before paying an invoice. Registering is free and quick, and it is usually the first step in setting up a freelance business properly.",
      },
      {
        q: "What documents do I need for NTN registration?",
        a: "An individual typically needs a valid CNIC, a mobile SIM registered in their own name, an email address, a recent utility bill for the address, and bank account details. Salaried people add employer details, and business owners add the business name, address and activity. AOPs need the partnership deed and partner details, and companies need their incorporation documents. FBR may request more documents for some cases.",
      },
      {
        q: "Should I put my NTN on my invoices?",
        a: "Yes. Showing your NTN on invoices helps business clients deduct withholding tax correctly and record the payment against your registration, which supports your tax credits when you file. If you are also registered for sales tax, show your STRN as well. If you are not registered for sales tax, do not charge sales tax or call the document a sales tax invoice; a normal commercial invoice with your NTN is enough.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To get an NTN number in Pakistan, register free on FBR's IRIS portal or the Tax Asaan app: choose registration for an unregistered person, verify your CNIC, mobile and email, then complete Form 181. For individuals, the NTN is the 13-digit CNIC. An NTN makes you registered, not a filer; you still file returns.</p>

<p>A National Tax Number (NTN) is the first thing a bank, client or marketplace in Pakistan asks for when money starts moving. Without one you cannot file an income tax return, you pay higher withholding tax as a non-filer, and many companies will not process your invoices. This guide explains how to get an NTN number in Pakistan online through IRIS, which documents you need, how the process differs for individuals, AOPs and companies, how to verify an NTN, and what to do after registration.</p>

<p><strong>Important:</strong> This is general information, not tax advice. FBR updates IRIS screens, forms and requirements regularly. Check the official <a href="https://iris.fbr.gov.pk/" target="_blank" rel="noopener noreferrer">IRIS portal</a> and the <a href="https://www.fbr.gov.pk/" target="_blank" rel="noopener noreferrer">FBR website</a>, or speak to a tax practitioner, for your situation.</p>

<h2>What is an NTN number?</h2>
<p>The NTN is your income tax registration with the Federal Board of Revenue (FBR). It identifies you in IRIS, FBR's online system for registration, returns and correspondence, and it is the number clients and banks use when they deduct or report tax on payments to you.</p>
<table><thead><tr><th>Taxpayer type</th><th>What the NTN looks like</th><th>How it is issued</th></tr></thead><tbody>
<tr><td>Individual (salaried, freelancer, sole proprietor)</td><td>The 13-digit CNIC number</td><td>Online registration on IRIS or Tax Asaan</td></tr>
<tr><td>Association of persons (AOP), such as a partnership</td><td>A separate registration number</td><td>IRIS registration by the principal officer, with the firm's documents</td></tr>
<tr><td>Company</td><td>A separate registration number</td><td>Generally linked to incorporation with SECP, then accessed through IRIS</td></tr>
</tbody></table>
<p>Do not confuse the NTN with the STRN, which is your sales tax registration. Many businesses need both. Our guide to <a href="/blog/strn-registration-pakistan">STRN registration in Pakistan</a> covers that second step.</p>

<h2>Who needs an NTN in Pakistan?</h2>
<ul>
<li>Anyone whose income is above the taxable threshold and who must file an income tax return</li>
<li>Freelancers and remote workers receiving payments from abroad</li>
<li>Sole proprietors, shopkeepers and service providers</li>
<li>Partnerships (AOPs) and companies</li>
<li>Anyone who wants to become an active taxpayer to avoid higher non-filer withholding rates on bank transactions, property, vehicles and other payments</li>
</ul>
<p>Even below the taxable threshold, many people register so they can file a return and appear on the Active Taxpayer List, because the withholding savings often outweigh the effort.</p>

<h2>Documents and details you need</h2>
<ul>
<li><strong>Valid CNIC</strong> (or NICOP for overseas Pakistanis)</li>
<li><strong>Mobile number registered in your own name</strong>; guides commonly note it should have been active on your CNIC for some time before you apply</li>
<li><strong>Working email address</strong></li>
<li><strong>Address details and a recent utility bill</strong> for your residence or business premises; IRIS may ask for the electricity consumer reference number</li>
<li><strong>Bank account details</strong>, such as your IBAN</li>
<li><strong>Business details</strong> if you run a business: name, address, principal activity and start date</li>
<li><strong>Employer details</strong> if you are salaried</li>
</ul>
<p>For an AOP, add the partnership deed, the registration certificate from the Registrar of Firms if registered, and the CNICs of all partners. For a company, have the certificate of incorporation and director details ready.</p>

<h2>How to get an NTN number in Pakistan online: IRIS steps</h2>
<ol>
<li><strong>Open IRIS</strong> at iris.fbr.gov.pk, or install the Tax Asaan app, which offers the same registration route.</li>
<li><strong>Select "Registration for Unregistered Person"</strong> on the login page.</li>
<li><strong>Enter your CNIC, name, mobile number and email</strong>, and complete the security check.</li>
<li><strong>Verify the codes</strong> sent by SMS and email. FBR then sends your user ID (your CNIC) and a password.</li>
<li><strong>Log in and open Form 181</strong> (the registration application) from your drafts.</li>
<li><strong>Complete the tabs:</strong> personal details, address and property information, business details if any, employer details if salaried, and bank accounts.</li>
<li><strong>Submit the form.</strong> For straightforward individual cases, registration is usually confirmed quickly, and your NTN is your CNIC number.</li>
<li><strong>Save your registration record.</strong> Print or download your registration details from IRIS, or from FBR's online verification service, for your files and for clients who ask.</li>
<li><strong>Change your temporary password</strong> and keep your login secure; you will use it for returns and notices.</li>
</ol>
<p>For an AOP, the principal officer usually registers as an individual first and then files the AOP registration in IRIS with the firm's details and partners. Company registration is normally tied to incorporation with SECP. Menu names change over time, so follow the current on-screen labels.</p>

<h2>How to verify an NTN</h2>
<p>Before you rely on a supplier's or client's NTN, check it:</p>
<ol>
<li>Use FBR's online taxpayer verification service on the FBR website and search by CNIC, NTN or registration number.</li>
<li>Confirm that the name returned matches the name on the invoice or contract.</li>
<li>Check the person's Active Taxpayer List (ATL) status if the withholding rate you apply depends on it. FBR has offered an SMS check: send "ATL", a space and the 13-digit CNIC to 9966. Confirm the current method on the FBR website.</li>
<li>Record the date and result of the check with your payment records.</li>
</ol>

<h2>After registration: becoming a filer</h2>
<p>An NTN alone does not make you a filer. To appear on the Active Taxpayer List, you file your annual income tax return in IRIS, along with the wealth statement where required. FBR publishes the ATL and updates it during the year. If you file after the due date, a surcharge applies before you are added to the list. Freelancers should read our <a href="/blog/freelancer-tax-pakistan-2026">freelancer tax guide for Pakistan</a> for the treatment of foreign income and IT export rates, and new freelancers can start with <a href="/blog/how-to-start-freelancing-in-pakistan">how to start freelancing in Pakistan</a>.</p>

<h2>Worked example: why your NTN matters on an invoice</h2>
<p>Ali, a registered software consultant in Lahore, invoices a local company Rs 300,000 for a development project. The client must deduct income tax at source on the payment. The rate depends on the type of payment and on whether Ali is on the ATL; non-filers generally face a much higher rate. The rates below are illustrative only, to show the arithmetic.</p>
<table><thead><tr><th>Scenario</th><th>Invoice (Rs)</th><th>Illustrative withholding rate</th><th>Tax withheld (Rs)</th><th>Ali receives (Rs)</th></tr></thead><tbody>
<tr><td>Ali is on the ATL and shows his NTN</td><td>300,000</td><td>10%</td><td>30,000</td><td>270,000</td></tr>
<tr><td>Ali is not on the ATL</td><td>300,000</td><td>20%</td><td>60,000</td><td>240,000</td></tr>
</tbody></table>
<p>The arithmetic: 300,000 × 0.10 = Rs 30,000 withheld, leaving 300,000 − 30,000 = Rs 270,000. At the doubled illustrative rate, 300,000 × 0.20 = Rs 60,000, leaving Rs 240,000. The difference of 60,000 − 30,000 = Rs 30,000 on a single invoice shows why registering and filing pays off. The tax withheld becomes a credit against Ali's liability only if the client reports it against his correct NTN. For current rates and how deductions show on invoices, see our guide to <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a>.</p>

<h2>Showing your NTN on invoices</h2>
<ul>
<li>Put your NTN under your name or business name in the header, labeled "NTN".</li>
<li>Add the client's NTN in the bill-to section for business clients.</li>
<li>Add your STRN only if you are registered for sales tax.</li>
<li>For foreign clients, include your bank details and the currency; see <a href="/blog/receive-payment-from-abroad-pakistan">receiving payment from abroad in Pakistan</a>.</li>
</ul>
<p>The free <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> has PKR, NTN and STRN fields and downloads a PDF in your browser. It is not connected to FBR and does not issue FBR-integrated digital invoices; if you are a sales tax registered business in scope of FBR's e-invoicing rules, read <a href="/blog/fbr-e-invoicing-pakistan">FBR e-invoicing in Pakistan</a>. For which fields a sales tax invoice needs, see our <a href="/blog/sales-tax-invoice-pakistan">sales tax invoice guide for Pakistan</a>.</p>

<h2>Special cases: overseas Pakistanis, sole proprietors and name changes</h2>
<p><strong>Overseas Pakistanis</strong> can usually register with a NICOP instead of a CNIC, but the mobile verification step can be harder if you no longer hold a Pakistani SIM in your own name. Check the current IRIS options for non-residents, or have a tax practitioner submit the application with your authorization.</p>
<p><strong>Sole proprietors</strong> do not get a separate NTN for the business. The business is added to your individual registration in IRIS as a business name and address, and your NTN stays your CNIC number. If you later open a second shop or office, add it as another business or branch rather than registering again.</p>
<p><strong>Changes after registration</strong>, such as a new address, a new bank account or a different principal activity, are made by filing a modification of registration in IRIS. Keep these details current: notices are routed to your registered tax office and contact details, and a client checking your NTN will see the name on record.</p>
<p>Once your NTN number is in place, think about how clients will pay you. Our overview of the <a href="/blog/payment-gateway-pakistan">payment gateway options in Pakistan</a> compares the main choices for local and card payments, and a clean, branded layout such as the <a href="/invoice-templates/modern">Modern invoice template</a> keeps your NTN visible in the header.</p>

<h2>NTN registration checklist</h2>
<ul>
<li>CNIC valid and not expired</li>
<li>Mobile SIM registered in your own name and active</li>
<li>Email address you check regularly</li>
<li>Utility bill and address details ready</li>
<li>Bank account details (IBAN)</li>
<li>Business or employer details</li>
<li>Form 181 submitted and registration confirmed in IRIS</li>
<li>Registration record saved and NTN added to your invoice template</li>
<li>Calendar reminder for the annual income tax return</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Using someone else's mobile number.</strong> Registration codes and notices go to that number; use a SIM in your own name.</li>
<li><strong>Thinking an NTN makes you a filer.</strong> You must file the return to get on the ATL.</li>
<li><strong>Paying an agent for a simple individual registration.</strong> It is free and usually quick to do yourself, though professional help is worth it for AOPs, companies and complex cases.</li>
<li><strong>Wrong address or business activity.</strong> These details affect your tax office and notices; keep them accurate and update IRIS when they change.</li>
<li><strong>Leaving the NTN off invoices.</strong> Clients may withhold at a higher rate or fail to credit the deduction to you.</li>
<li><strong>Charging sales tax without an STRN.</strong> An NTN does not authorize you to charge sales tax.</li>
</ul>
`,
  },
  {
    slug: "strn-registration-pakistan",
    title: "STRN Registration in Pakistan: Sales Tax Registration Guide",
    description:
      "STRN registration in Pakistan: who must register for sales tax, IRIS Form 14(1) steps, documents, NADRA biometric checks and provincial services tax rules.",
    category: "tax-compliance",
    jurisdiction: "Pakistan",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "pra-sales-tax-on-services",
      "sales-tax-invoice-pakistan",
      "how-to-get-ntn-number-pakistan",
      "fbr-e-invoicing-pakistan",
    ],
    faqs: [
      {
        q: "What is an STRN in Pakistan?",
        a: "STRN stands for Sales Tax Registration Number. It shows that a person is registered with FBR for federal sales tax under the Sales Tax Act, 1990, mainly on goods. A registered person charges sales tax on taxable supplies, issues sales tax invoices, files monthly returns and can claim input tax on purchases. For many registrants, the registration is linked to their NTN or CNIC in IRIS.",
      },
      {
        q: "How do I register for sales tax with FBR?",
        a: "Log in to IRIS with your NTN credentials, open the registration menu and select the sales tax registration form, which FBR lists as Form 14(1). Enter the tax period, business details, branches, bank account and utility connection details, upload the required photos and documents, and submit. Within 30 days you must complete biometric verification at a NADRA e-Sahulat centre, or you are taken off the sales tax Active Taxpayer List.",
      },
      {
        q: "What documents are required for STRN registration?",
        a: "FBR's registration page lists a bank account certificate in the business name, business details including all branches, GPS-tagged photographs of the business premises, the gas or electricity consumer number with pictures of the meter, and for manufacturers GPS-tagged photos of machinery and the industrial meter. Some categories, such as importers, wholesalers and Tier-1 retailers, have been reported to need a balance sheet showing business capital as well.",
      },
      {
        q: "Is biometric verification mandatory for sales tax registration?",
        a: "Yes. After registering on IRIS, the registered person must visit a NADRA e-Sahulat centre for biometric verification within 30 days, according to FBR's registration instructions. If you do not go, or verification fails, your name is removed from the sales tax Active Taxpayer List. Reports also describe an annual re-verification requirement for some registrants, so check the current rule for your category on the FBR website.",
      },
      {
        q: "What is the difference between NTN and STRN?",
        a: "The NTN is your income tax registration and every business or earning individual should have one. The STRN is your sales tax registration and is only needed if you make taxable supplies that require sales tax registration, such as manufacturing, importing, wholesale or Tier-1 retail. You get the NTN first and register for sales tax afterward. A sales tax invoice normally shows both numbers for the supplier and the registered buyer.",
      },
      {
        q: "Do service providers need an STRN from FBR?",
        a: "Usually not for services alone. Sales tax on most services is collected by the provinces: the Punjab Revenue Authority (PRA), Sindh Revenue Board (SRB), Khyber Pakhtunkhwa Revenue Authority (KPRA) and Balochistan Revenue Authority (BRA). A service provider registers with the authority of each province where it provides taxable services. Businesses supplying both goods and services may need FBR and provincial registrations at the same time.",
      },
      {
        q: "How long does STRN registration take?",
        a: "The online application itself can be filed in a day if your documents and photos are ready. FBR has reported that fresh sales tax registrations go through pre-verification, and field offices can ask for missing documents, which adds time. Third-party guides commonly quote several working days. Plan ahead rather than registering the week a large customer asks for your STRN.",
      },
      {
        q: "What happens if I am removed from the sales tax Active Taxpayer List?",
        a: "Buyers generally cannot claim input tax on purchases from a supplier who is not on the sales tax ATL, so registered customers may stop buying or refuse to pay the tax portion. You may also face restrictions on filing returns until the issue is resolved. Common causes are missing biometric verification, non-filing of returns and unresolved document requests. Fix the cause and follow FBR's restoration procedure.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> STRN registration in Pakistan is done online through FBR's IRIS portal using Form 14(1), after you have an NTN. You upload bank, premises and utility meter details, then complete NADRA biometric verification within 30 days. Manufacturers, importers, wholesalers and Tier-1 retailers generally must register; services are taxed by provincial authorities.</p>

<p>Once your business sells goods at scale, customers will start asking for your STRN. Registered buyers need it to claim input tax, and many will not pay invoices from suppliers that are not on the sales tax Active Taxpayer List. This guide explains what an STRN is, who must register, the documents FBR asks for, the IRIS steps, NADRA biometric verification, and how provincial sales tax on services fits in. It closes with a worked example, a checklist and common mistakes.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Sales tax registration rules are tightened often, especially after each Finance Act. Check FBR's <a href="https://www.fbr.gov.pk/categ/register-sales-tax/51149/50848/101152" target="_blank" rel="noopener noreferrer">sales tax registration page</a> or a tax practitioner before you apply.</p>

<h2>What is an STRN?</h2>
<p>The Sales Tax Registration Number (STRN) shows you are registered for federal sales tax under the Sales Tax Act, 1990. It sits alongside your NTN, which is your income tax registration. If you do not have an NTN yet, start with our guide on <a href="/blog/how-to-get-ntn-number-pakistan">how to get an NTN number in Pakistan</a>, because sales tax registration is filed from your IRIS account.</p>
<table><thead><tr><th>Item</th><th>NTN</th><th>STRN</th></tr></thead><tbody>
<tr><td>Tax</td><td>Income tax</td><td>Federal sales tax (mainly goods)</td></tr>
<tr><td>Who needs it</td><td>Every earning individual and business</td><td>Persons required to register under the Sales Tax Act, or who register voluntarily</td></tr>
<tr><td>Portal</td><td>IRIS (Form 181 for individuals)</td><td>IRIS (Form 14(1))</td></tr>
<tr><td>Ongoing filing</td><td>Annual income tax return</td><td>Monthly sales tax return</td></tr>
<tr><td>On invoices</td><td>Supplier and buyer NTN</td><td>Supplier and registered buyer STRN</td></tr>
</tbody></table>

<h2>Who must get STRN registration in Pakistan?</h2>
<p>Section 14 of the Sales Tax Act and the related rules set out who must register. In broad terms:</p>
<ul>
<li><strong>Manufacturers</strong>, other than small cottage industry units that stay within the exemption conditions</li>
<li><strong>Importers</strong> of taxable goods</li>
<li><strong>Wholesalers, distributors and dealers</strong>, including combined wholesaler-retailers</li>
<li><strong>Tier-1 retailers</strong>, such as retailers in large shopping centers, national or international chains and others meeting FBR's criteria</li>
<li><strong>Exporters</strong> who want to claim sales tax refunds</li>
<li><strong>Persons required to deduct sales tax</strong> or otherwise required by FBR to register</li>
</ul>
<p>Anyone else making taxable supplies can apply voluntarily, which some businesses do so their registered buyers can claim input tax. The exact criteria and thresholds change with Finance Acts and notifications; our summary of the <a href="/blog/finance-act-2026-pakistan-sales-tax">Finance Act 2026 sales tax changes</a> covers the latest round.</p>

<h3>Services: provincial sales tax, not FBR</h3>
<p>Since the 18th Amendment, sales tax on most services is a provincial subject. If you provide taxable services, you generally register with the authority for each province where you provide them: the Punjab Revenue Authority (PRA), Sindh Revenue Board (SRB), Khyber Pakhtunkhwa Revenue Authority (KPRA) or Balochistan Revenue Authority (BRA). Each has its own portal, registration process, rates and invoicing rules. A business that sells goods and installs them may need an FBR STRN and one or more provincial registrations.</p>

<h2>Do you need an STRN at all? A quick decision guide</h2>
<p>Not every business needs STRN registration, and registering when you do not have to adds monthly filing, biometric checks and digital invoicing obligations. Work through these questions in order:</p>
<ol>
<li><strong>Do you sell goods, or only services?</strong> If you only provide services, look at provincial registration first. Freelancers exporting IT services are usually outside federal sales tax; see our <a href="/blog/freelancer-tax-pakistan-2026">freelancer tax guide for Pakistan</a>.</li>
<li><strong>Are you a manufacturer, importer, wholesaler, distributor or Tier-1 retailer?</strong> If yes, registration is generally compulsory.</li>
<li><strong>Do your customers need input tax?</strong> If your buyers are registered businesses that want to claim input tax, voluntary registration can make you a more attractive supplier.</li>
<li><strong>Do you export and want refunds?</strong> Exporters need registration to claim sales tax refunds on inputs.</li>
</ol>
<p>If you answer no to all four, you may not need an STRN yet, but keep reviewing as the business grows. When in doubt, a short consultation with a tax practitioner costs far less than a missed registration.</p>

<h2>Documents and information required</h2>
<p>FBR's registration page lists the following for registration through IRIS:</p>
<ul>
<li>Tax period and registration type (manufacturer or non-manufacturer)</li>
<li>For AOPs and companies, the CNIC of a member, director or principal officer</li>
<li>Bank account details with a bank account certificate issued in the business name</li>
<li>Business details: name, acquisition date, capacity, activity and all branches</li>
<li>GPS-tagged photographs of the business premises</li>
<li>Gas or electricity consumer number with pictures of the utility meter</li>
<li>For manufacturers: GPS-tagged photographs of machinery and the industrial electricity or gas meter</li>
</ul>
<p>Reports since 2025 also describe a requirement for some new registrants, including importers, commercial exporters, Tier-1 retailers, wholesalers and distributors, to provide a balance sheet showing business capital backed by bank assets. Check whether this applies to your category before you apply.</p>

<h2>How to register for sales tax on IRIS: step by step</h2>
<ol>
<li><strong>Make sure your NTN registration is complete</strong> and your IRIS profile (address, business, bank) is accurate.</li>
<li><strong>Log in to the <a href="https://iris.fbr.gov.pk/" target="_blank" rel="noopener noreferrer">IRIS portal</a></strong>, or use the IRIS or Tax Asaan mobile app.</li>
<li><strong>Open the Registration menu</strong> and select Form 14(1), the sales tax registration form.</li>
<li><strong>Enter the tax period and registration type</strong>, and for AOPs or companies, the principal officer's CNIC.</li>
<li><strong>Add business details and branches</strong>, including the activity and capacity.</li>
<li><strong>Enter bank details</strong> and upload the bank account certificate.</li>
<li><strong>Enter utility details</strong> and upload the meter photos and GPS-tagged premises photos (plus machinery photos for manufacturers).</li>
<li><strong>Submit the form.</strong> FBR has reported that fresh registrations are subject to pre-verification and approval by the relevant office.</li>
<li><strong>Complete biometric verification</strong> at a NADRA e-Sahulat centre within 30 days.</li>
<li><strong>Respond to any document request.</strong> FBR's instructions give 15 days to provide a missing or corrected document if a field office asks.</li>
</ol>
<p>Once registration is active, your STRN appears in IRIS and you show it on your sales tax invoices.</p>

<h2>Biometric verification and staying on the ATL</h2>
<p>FBR's instructions say that if you do not complete NADRA biometric verification within 30 days, or verification fails, your name is taken off the sales tax Active Taxpayer List. Being off the list hurts: registered buyers generally cannot claim input tax on your invoices. Reports also describe annual biometric re-verification for some registrants, so keep an eye on FBR notices each year.</p>
<p>To stay active, file your monthly sales tax return on time, even with nil sales, keep your premises and bank details current, and respond to IRIS notices promptly.</p>

<h2>Worked example: what changes after you get an STRN</h2>
<p>A small manufacturer in Faisalabad registers for sales tax. In its first month it sells goods to a registered distributor and buys raw materials from registered suppliers. The standard federal rate of 18% is used for illustration; check the rate for your goods.</p>
<table><thead><tr><th>Item</th><th>Value excl. tax (Rs)</th><th>Sales tax at 18% (Rs)</th></tr></thead><tbody>
<tr><td>Sales to registered distributor (output tax)</td><td>800,000</td><td>144,000</td></tr>
<tr><td>Raw materials from registered suppliers (input tax)</td><td>450,000</td><td>81,000</td></tr>
<tr><td><strong>Net sales tax payable</strong></td><td></td><td><strong>63,000</strong></td></tr>
</tbody></table>
<p>The arithmetic: 800,000 × 0.18 = Rs 144,000 output tax. 450,000 × 0.18 = Rs 81,000 input tax. Net payable = 144,000 − 81,000 = Rs 63,000, subject to the input tax rules and adjustments. The distributor's invoice total is 800,000 + 144,000 = Rs 944,000, and the distributor can claim Rs 144,000 as input tax only if the manufacturer is active, shows both STRNs correctly and reports the sale in its return. Sales to unregistered buyers can also attract further tax at an additional rate. You can check figures like these with the <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>Invoicing after STRN registration</h2>
<p>A registered person must issue a sales tax invoice for each taxable supply, showing the supplier's and registered buyer's names, addresses, NTN and STRN, a description and quantity, value excluding tax, the rate and the sales tax amount. Our guide to the <a href="/blog/sales-tax-invoice-pakistan">sales tax invoice in Pakistan</a> lists every field, and our comparison of a <a href="/blog/tax-invoice-vs-retail-invoice">tax invoice vs retail invoice</a> explains when each is used.</p>
<p>FBR has also extended digital invoicing to sales tax registered persons, which means invoices must be generated through software integrated with FBR via PRAL or a licensed integrator. Check your obligations in our <a href="/blog/fbr-e-invoicing-pakistan">FBR e-invoicing guide</a>. Our free <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> creates PDF invoices with NTN and STRN fields in your browser, which is useful for quotations, proformas and businesses outside the integration requirement, but it is not an FBR-integrated POS or e-invoicing system. If clients ask for signed invoices, see our note on the <a href="/blog/invoice-signature">invoice signature</a>.</p>

<h2>STRN registration checklist</h2>
<ul>
<li>NTN registration complete and IRIS profile accurate</li>
<li>Bank account in the business name and bank account certificate</li>
<li>GPS-tagged premises photos (and machinery photos for manufacturers)</li>
<li>Utility consumer number and meter photos</li>
<li>Balance sheet ready if your category requires it</li>
<li>Form 14(1) submitted on IRIS</li>
<li>NADRA biometric verification booked within 30 days</li>
<li>Provincial services registration checked (PRA, SRB, KPRA, BRA) if you provide services</li>
<li>Invoice template updated with your STRN, and monthly return dates in your calendar</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Charging sales tax before registration.</strong> Without an active STRN you should not charge sales tax or issue a sales tax invoice.</li>
<li><strong>Missing the biometric deadline.</strong> Falling off the ATL can cost you registered customers.</li>
<li><strong>Using a personal bank account.</strong> FBR asks for a bank account certificate in the business name.</li>
<li><strong>Blurry or untagged photos.</strong> Premises and meter photos must be clear and GPS-tagged, or expect a document request.</li>
<li><strong>Assuming FBR covers services.</strong> Most services need provincial registration instead.</li>
<li><strong>Skipping nil returns.</strong> Monthly returns are due even when you have no sales.</li>
<li><strong>Wrong buyer STRN on invoices.</strong> The buyer may lose input tax and push the invoice back. For how tax IDs should appear, see our guide to the <a href="/blog/tax-id-on-invoice">tax ID on an invoice</a>.</li>
</ul>
`,
  },
];
