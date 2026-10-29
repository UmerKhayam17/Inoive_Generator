import type { PostDraft } from "../blog";

export const UK_EU_TAX_2026_D_POSTS: PostDraft[] = [
  {
    slug: "making-tax-digital-for-vat",
    title: "Making Tax Digital for VAT: Rules, Software, Penalties",
    description:
      "Making Tax Digital for VAT explained: who must comply, digital records and links, bridging software, how to file, exemptions and the penalty points system.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: ["how-to-file-vat-return-uk", "vat-penalties-uk", "making-tax-digital-income-tax"],
    faqs: [
      {
        q: "Does Making Tax Digital for VAT apply to businesses under the VAT threshold?",
        a: "Yes, if they are VAT registered. Since April 2022, every VAT-registered business must follow Making Tax Digital rules, including businesses that registered voluntarily with turnover below the £90,000 threshold. A business that is not registered for VAT has nothing to file under MTD for VAT, although it may be affected by Making Tax Digital for Income Tax if it is a sole trader or landlord with qualifying income above the relevant threshold.",
      },
      {
        q: "Can I still use a spreadsheet for VAT under Making Tax Digital?",
        a: "Yes. Spreadsheets can be your digital records, but you cannot submit a return from a spreadsheet directly. You need bridging software that reads the figures from the spreadsheet and sends them to HMRC through the MTD interface. The link between your records and the bridging software must be digital, such as a cell reference or file import, not retyping numbers by hand.",
      },
      {
        q: "Do I need to sign up for Making Tax Digital for VAT?",
        a: "Most businesses do not need to take action now. HMRC automatically signed up existing VAT-registered businesses that were not exempt, and new VAT registrations are signed up as part of registration. You still need to choose compatible software and authorise it to connect with your HMRC account, usually through your Government Gateway login, before you can file your first return.",
      },
      {
        q: "Is there free Making Tax Digital software for VAT?",
        a: "HMRC does not provide its own filing software but publishes a list of compatible products on GOV.UK, and you can filter it for free options. Some free products have conditions such as a turnover limit or basic features only. Many low-cost bookkeeping and bridging tools are also available. Check that the product supports your VAT scheme, such as the flat rate or cash accounting scheme, before choosing.",
      },
      {
        q: "What counts as a digital link under MTD for VAT?",
        a: "A digital link is any electronic transfer of data between software programs, products or applications that does not involve manual copying. Examples include formulas linking spreadsheet cells, importing or exporting CSV files, emailing a spreadsheet that is then imported, and API connections. Copying and pasting figures, or reading numbers off one screen and typing them into another, does not count as a digital link.",
      },
      {
        q: "Who is exempt from Making Tax Digital for VAT?",
        a: "HMRC can grant an exemption if it is not reasonable or practical for you to use software, for example because of age, disability, remoteness of location or other reasons, or if you object on religious grounds to using electronic communication. Businesses subject to an insolvency procedure are also exempt. You must apply to HMRC for the exemption and continue filing as you do now until it is confirmed.",
      },
      {
        q: "How long do VAT penalty points last?",
        a: "Points do not simply expire after a fixed time once you reach the threshold. To reset them to zero, you must file on time for a period of compliance (24 months for annual filers, 12 months for quarterly filers and 6 months for monthly filers) and have submitted all returns due in the previous 24 months. Below the threshold, each point usually expires after 24 months.",
      },
      {
        q: "What VAT records must be kept digitally?",
        a: "You must digitally record your business name, address, VAT number and the VAT accounting schemes you use, plus for each supply you make or receive the time of supply, value and VAT rate. Any adjustments must be recorded too. You do not need to scan every paper invoice, but the data from each transaction must be held in your software or spreadsheet. Records are generally kept for six years.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Making Tax Digital for VAT is HMRC's rule that every VAT-registered business must keep its VAT records digitally and file VAT returns through MTD-compatible software, with digital links between any programs used. It has applied to all VAT-registered businesses, whatever their turnover, since April 2022.</p>

<p>For most UK businesses, Making Tax Digital (MTD) for VAT is now simply how VAT returns work. The old HMRC online return form has gone, and returns arrive through software. Yet many small businesses still run their VAT from spreadsheets, copy figures by hand or are unsure what HMRC counts as compliant. This guide covers who must comply, what records you need, how bridging software works, the filing steps, exemptions and the penalty points regime. It is general information, not tax advice; HMRC's own guidance is on GOV.UK under <a href="https://www.gov.uk/guidance/making-tax-digital-for-vat">Making Tax Digital for VAT</a>.</p>

<h2>What is Making Tax Digital for VAT?</h2>
<p>Making Tax Digital is HMRC's programme to move tax administration from paper and manual entry to software. VAT was the first tax to move:</p>
<table>
<thead><tr><th>Date</th><th>Who had to follow MTD for VAT</th></tr></thead>
<tbody>
<tr><td>April 2019</td><td>VAT-registered businesses with taxable turnover above the VAT threshold (then £85,000)</td></tr>
<tr><td>April 2022</td><td>All VAT-registered businesses, including voluntary registrations below the threshold</td></tr>
<tr><td>November 2022 onward</td><td>HMRC's old VAT online return form closed for most businesses; returns must go through compatible software</td></tr>
</tbody>
</table>
<p>The current VAT registration threshold is £90,000 of taxable turnover in a rolling 12-month period; see our <a href="/blog/vat-registration-threshold-uk">UK VAT registration threshold guide</a>. Once registered, you are within MTD for VAT. Sole traders and landlords should also note that <a href="/blog/making-tax-digital-income-tax">Making Tax Digital for Income Tax</a> started in April 2026 for those with qualifying income over £50,000; it is a separate requirement.</p>

<h2>What digital records do you need to keep?</h2>
<p>HMRC's VAT Notice 700/22 sets out the required digital records. In summary:</p>
<ul>
<li><strong>Business details:</strong> your business name, principal place of business address, VAT registration number and any VAT accounting schemes you use (for example the flat rate or cash accounting scheme).</li>
<li><strong>Supplies you make (sales):</strong> the time of supply (tax point), the value of the supply excluding VAT and the rate of VAT charged, for each transaction.</li>
<li><strong>Supplies you receive (purchases):</strong> the time of supply, the value including VAT, and the amount of input VAT you will claim.</li>
<li><strong>Adjustments:</strong> any changes to the figures, such as partial exemption or bad debt relief.</li>
</ul>
<p>Your invoices themselves still need the usual VAT invoice details: your VAT number, a unique sequential invoice number, the tax point, the customer's details, a description, and the net, VAT and gross amounts. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> lists every required field. Records generally need to be kept for six years.</p>

<h2>What is bridging software and when do you need it?</h2>
<p>Many small businesses keep VAT records in Excel or Google Sheets. That is allowed, but a spreadsheet cannot talk to HMRC on its own. Bridging software fills the gap: it reads the nine VAT return boxes from your spreadsheet and submits them through HMRC's MTD API.</p>
<p>The key requirement is the <strong>digital link</strong>. Once data is in your digital records, every transfer between programs must be electronic. Acceptable links include:</p>
<ul>
<li>Formulas linking cells or worksheets.</li>
<li>Importing or exporting data files such as CSV or XML.</li>
<li>Emailing a spreadsheet that is then imported into another program.</li>
<li>Direct API connections between bookkeeping, invoicing and filing tools.</li>
</ul>
<p>Copy and paste, or retyping figures from one program into another, is not a digital link. If your invoicing tool produces PDF invoices, record each invoice's figures in your digital records (for example in a spreadsheet row or bookkeeping entry) so the VAT return can be built from them.</p>

<h2>How to file a VAT return under Making Tax Digital</h2>
<ol>
<li><strong>Choose compatible software.</strong> Use HMRC's list of <a href="https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-vat">software compatible with MTD for VAT</a>, filtering for features you need, such as bridging, cash accounting or free options.</li>
<li><strong>Authorise the software</strong> with your Government Gateway credentials so it can connect to your VAT account. Agents use their agent services account.</li>
<li><strong>Keep records digitally</strong> through the VAT period: every sale and purchase with date, net value, VAT rate and VAT amount.</li>
<li><strong>Review the nine boxes</strong> the software calculates: output VAT, VAT on EU acquisitions where relevant to Northern Ireland, total VAT due, input VAT, net VAT, total sales, total purchases and the goods figures.</li>
<li><strong>Check against your invoices.</strong> Output VAT should reconcile with the VAT on your sales invoices for the period.</li>
<li><strong>Submit the return</strong> through the software by the deadline, normally one calendar month and seven days after the end of the VAT period.</li>
<li><strong>Pay HMRC</strong> by the same deadline, allowing time for the payment method you use. Direct Debit is collected a few days after the deadline.</li>
</ol>
<p>For a walkthrough of each box, read <a href="/blog/how-to-file-vat-return-uk">how to file a VAT return in the UK</a>.</p>

<h2>Worked example: a quarterly VAT return</h2>
<p>A sole trader web designer is VAT registered and files quarterly. For the quarter ending 30 September 2026 her spreadsheet shows:</p>
<table>
<thead><tr><th>Item</th><th>Net</th><th>VAT</th></tr></thead>
<tbody>
<tr><td>Sales invoices at 20%</td><td>£24,000.00</td><td>£4,800.00</td></tr>
<tr><td>Purchases: software subscriptions and equipment at 20%</td><td>£3,500.00</td><td>£700.00</td></tr>
<tr><td>Purchases with no VAT (insurance)</td><td>£400.00</td><td>£0.00</td></tr>
<tr><td><strong>Net VAT payable (Box 5)</strong></td><td></td><td><strong>£4,100.00</strong></td></tr>
</tbody>
</table>
<p>Her bridging software reads the totals from linked cells and submits the return. Box 6 (total sales excluding VAT) is £24,000 and Box 7 (total purchases excluding VAT) is £3,900. The return and payment of £4,100 are due by 7 November 2026. If she had been on the <a href="/blog/vat-flat-rate-scheme">VAT flat rate scheme</a>, the software would instead apply her flat rate percentage to gross turnover.</p>

<h2>Who is exempt from Making Tax Digital for VAT?</h2>
<p>You can apply to HMRC for exemption if:</p>
<ul>
<li>It is not reasonably practicable for you to use computers, software or the internet because of age, disability, remoteness of location or another reason.</li>
<li>You object to using computers on religious grounds.</li>
<li>Your business is subject to an insolvency procedure.</li>
</ul>
<p>Exemption is not automatic. You apply, explain your circumstances and keep filing as you currently do until HMRC confirms. Being small, busy or used to paper is not a ground for exemption.</p>

<h2>What are the penalties under MTD for VAT?</h2>
<p>For VAT periods starting on or after 1 January 2023, HMRC replaced the old default surcharge with a points-based system for late returns and separate penalties for late payment.</p>
<table>
<thead><tr><th>Filing frequency</th><th>Points threshold</th><th>Period of compliance to reset</th></tr></thead>
<tbody>
<tr><td>Annual</td><td>2 points</td><td>24 months</td></tr>
<tr><td>Quarterly</td><td>4 points</td><td>12 months</td></tr>
<tr><td>Monthly</td><td>5 points</td><td>6 months</td></tr>
</tbody>
</table>
<p>Each late return earns one point. When you reach the threshold, HMRC charges a £200 penalty, plus another £200 for each further late return while you stay at the threshold.</p>
<p>Late payment works differently. Nothing is charged if you pay within 15 days of the due date. For VAT periods starting on or after 1 April 2025, paying between day 16 and day 30 brings a first penalty of 3% of the VAT outstanding at day 15. If tax is still unpaid at day 30, the first penalty becomes 3% of what was outstanding at day 15 plus 3% of what was outstanding at day 30, and from day 31 a second penalty accrues daily at 10% a year until paid. Late payment interest (Bank of England base rate plus 4%) is charged on top. Agreeing a <a href="/blog/hmrc-time-to-pay">Time to Pay arrangement</a> early can stop penalties growing. Full details are in our <a href="/blog/vat-penalties-uk">UK VAT penalties guide</a>.</p>

<h2>How do invoices fit into your MTD records?</h2>
<p>MTD does not require you to issue invoices from your accounting software. You can create invoices in any tool, as long as the figures from each invoice end up in your digital records. Small businesses typically use one of three set-ups:</p>
<table>
<thead><tr><th>Set-up</th><th>How invoices reach the VAT return</th><th>Suits</th></tr></thead>
<tbody>
<tr><td>All-in-one bookkeeping software</td><td>Invoices are created in the software, so records and return are automatic</td><td>Businesses happy to pay a monthly subscription</td></tr>
<tr><td>Separate invoicing tool plus spreadsheet and bridging software</td><td>Each invoice is entered once as a row (date, number, net, rate, VAT); formulas total the boxes; bridging software submits</td><td>Low-volume sellers who like spreadsheets</td></tr>
<tr><td>Separate invoicing tool plus bookkeeping software</td><td>Invoices are recorded or imported into the bookkeeping software, which files the return</td><td>Growing businesses with a bookkeeper or accountant</td></tr>
</tbody>
</table>
<p>Entering the invoice once into your records is fine: the digital link rule applies from that point on. What matters is that the invoice and the record match, invoice numbers run in sequence and nothing is retyped between your records and the filing software. If you create invoices in our <a href="/invoice-generator">invoice generator</a>, record each one in your MTD spreadsheet or bookkeeping tool the day you issue it. Keep the invoices themselves for the period set out in <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</p>
<p>Looking further ahead, the UK government has announced plans for mandatory e-invoicing for VAT invoices from 2029, which would make the link between invoices and records fully digital; see the <a href="/blog/uk-e-invoicing-mandate-2029">UK e-invoicing mandate guide</a>.</p>

<h2>Common Making Tax Digital for VAT mistakes</h2>
<ul>
<li><strong>Copying figures by hand</strong> from a spreadsheet into bridging software, breaking the digital link rule.</li>
<li><strong>Recording only monthly totals</strong> instead of each transaction's date, value and VAT rate.</li>
<li><strong>Software that does not support your scheme,</strong> such as cash accounting or the flat rate scheme.</li>
<li><strong>Not re-authorising software</strong> when the authorisation expires, then discovering the problem on the deadline day.</li>
<li><strong>Ignoring penalty points</strong> because each late return carries no immediate fine.</li>
<li><strong>Mixing up the tax point:</strong> under standard accounting, VAT is due by invoice date, not payment date. The <a href="/blog/vat-cash-accounting-scheme">cash accounting scheme</a> changes that.</li>
</ul>

<h2>MTD for VAT checklist</h2>
<ul>
<li>Compatible software or bridging tool chosen and authorised.</li>
<li>Digital records include every sale and purchase with date, net value and VAT rate.</li>
<li>All transfers between programs are digital links.</li>
<li>VAT invoices show every required detail and use sequential numbers.</li>
<li>Return and payment deadlines in the calendar.</li>
<li>Penalty points monitored in your HMRC online account.</li>
<li>Records kept for six years.</li>
</ul>

<p>Making Tax Digital for VAT is mostly about discipline: digital records for every transaction, digital links between tools and a return filed through compatible software on time. Good invoices are the foundation. Our <a href="/invoice-generator">free invoice generator</a> creates VAT invoices with the rate and amount shown separately, needs no sign-up and produces a PDF in your browser, ready to record in your MTD records. You can start from the <a href="/invoice-templates">invoice templates</a> if you want a ready layout.</p>
`,
  },
  {
    slug: "self-assessment-deadlines",
    title: "Self Assessment Deadlines 2026-27: Key HMRC Dates",
    description:
      "Self Assessment deadlines for 2025-26 and 2026-27: registration, paper and online returns, payments on account, MTD quarterly updates and late filing penalties.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "self-assessment-tax-return-uk",
      "payments-on-account-hmrc",
      "self-assessment-late-penalty",
    ],
    faqs: [
      {
        q: "What is the deadline for the 2025-26 Self Assessment tax return?",
        a: "For the 2025-26 tax year, which ran from 6 April 2025 to 5 April 2026, the paper return deadline is 31 October 2026 and the online return deadline is 31 January 2027. Any tax owed for 2025-26, plus the first payment on account for 2026-27 if one applies, must also be paid by 31 January 2027. Late filing penalties start the day after the deadline.",
      },
      {
        q: "When do I need to register for Self Assessment?",
        a: "You must tell HMRC by 5 October following the end of the tax year in which you first need to file. For income in the 2025-26 tax year, that was 5 October 2026. For new self-employment that starts during the 2026-27 tax year, the registration deadline is 5 October 2027. Registering gives you a Unique Taxpayer Reference, which you need to file the return.",
      },
      {
        q: "Can I pay my tax through my PAYE tax code instead?",
        a: "Possibly. If you owe less than £3,000, already pay tax through PAYE as an employee or pensioner, and file your online return by 30 December, HMRC can collect the amount through your tax code over the following tax year. This spreads the payment rather than paying a lump sum on 31 January. It does not apply if you file on paper after 31 October.",
      },
      {
        q: "What happens if I miss the 31 January deadline?",
        a: "If you are not within Making Tax Digital for Income Tax, a late online return brings an immediate £100 penalty, even if no tax is due. After three months, daily penalties of £10 apply for up to 90 days. After six and twelve months, further penalties of 5% of the tax due or £300, whichever is higher, apply. Interest and late payment penalties are charged separately on unpaid tax.",
      },
      {
        q: "What are the Making Tax Digital quarterly update deadlines?",
        a: "Sole traders and landlords within Making Tax Digital for Income Tax send quarterly updates through compatible software. Using standard quarters, updates are due on 7 August, 7 November, 7 February and 7 May. For 2026-27 that means 7 August 2026, 7 November 2026, 7 February 2027 and 7 May 2027, with the final declaration due by 31 January 2028.",
      },
      {
        q: "Who has to file a Self Assessment tax return?",
        a: "You generally need to file if you were self-employed with gross trading income above £1,000, a partner in a business partnership, had untaxed income such as rental income or certain savings or investment income above allowances, or received income from abroad. People with income over certain levels or who need to pay the High Income Child Benefit Charge may also need to file. HMRC's online checker confirms whether you do.",
      },
      {
        q: "Can I get an extension on my Self Assessment deadline?",
        a: "There is no general extension. HMRC may accept a late return without a penalty if you have a reasonable excuse, such as a serious illness, the death of a close relative or an unexpected HMRC system failure, provided you file as soon as the excuse ends. If HMRC issues a notice to file after 31 October, you have three months from the date of the notice to file.",
      },
      {
        q: "Do I have to make payments on account?",
        a: "You make payments on account if your last Self Assessment bill was £1,000 or more, unless more than 80% of your tax was already collected at source, for example through PAYE. Each payment is half of the previous year's bill and is due on 31 January and 31 July. You can apply to reduce them if you expect lower income this year.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The main Self Assessment deadlines are 5 October (register), 31 October (paper return), 31 January (online return, balancing payment and first payment on account) and 31 July (second payment on account). For the 2025-26 tax year, the online return and payment are due on 31 January 2027.</p>

<p>Self Assessment is the system HMRC uses to collect Income Tax and National Insurance from the self-employed, partners, landlords and anyone with untaxed income. The dates repeat every year, but they apply to different tax years at the same time, which causes confusion. On top of that, Making Tax Digital for Income Tax added quarterly deadlines for some sole traders and landlords from April 2026. This guide lays out every key date for the 2025-26 and 2026-27 tax years, explains payments on account, and shows what happens if you miss a deadline. It is general information, not tax advice. HMRC's official list is on GOV.UK at <a href="https://www.gov.uk/self-assessment-tax-returns/deadlines">Self Assessment tax returns: deadlines</a>.</p>

<h2>What are the Self Assessment deadlines for 2025-26?</h2>
<p>The 2025-26 tax year ran from 6 April 2025 to 5 April 2026. Its return is the one most people are filing this winter.</p>
<table>
<thead><tr><th>Date</th><th>What is due</th></tr></thead>
<tbody>
<tr><td>31 July 2026</td><td>Second payment on account for 2025-26</td></tr>
<tr><td>5 October 2026</td><td>Register for Self Assessment if you need to file for 2025-26 for the first time</td></tr>
<tr><td>31 October 2026</td><td>Paper tax return for 2025-26</td></tr>
<tr><td>30 December 2026</td><td>File online by this date if you want tax under £3,000 collected through your PAYE tax code</td></tr>
<tr><td>31 January 2027</td><td>Online tax return for 2025-26; balancing payment for 2025-26; first payment on account for 2026-27</td></tr>
<tr><td>31 July 2027</td><td>Second payment on account for 2026-27</td></tr>
</tbody>
</table>
<p>If a deadline falls on a weekend, HMRC still treats the stated date as the deadline for online filing, so do not count on extra days. If you have not filed before, our step-by-step <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return guide</a> covers the forms.</p>

<h2>What are the Self Assessment deadlines for 2026-27?</h2>
<p>The 2026-27 tax year runs from 6 April 2026 to 5 April 2027. The annual dates follow the same pattern, one year later:</p>
<table>
<thead><tr><th>Date</th><th>What is due</th></tr></thead>
<tbody>
<tr><td>31 January 2027</td><td>First payment on account for 2026-27</td></tr>
<tr><td>31 July 2027</td><td>Second payment on account for 2026-27</td></tr>
<tr><td>5 October 2027</td><td>Register if you first need to file for 2026-27, such as new self-employment started after 6 April 2026</td></tr>
<tr><td>31 October 2027</td><td>Paper return for 2026-27</td></tr>
<tr><td>31 January 2028</td><td>Online return (or final declaration under MTD) and balancing payment for 2026-27; first payment on account for 2027-28</td></tr>
</tbody>
</table>

<h2>What are the Making Tax Digital for Income Tax deadlines?</h2>
<p>From 6 April 2026, sole traders and landlords with qualifying income (gross self-employment plus property income) over £50,000 must use Making Tax Digital for Income Tax. The threshold falls to £30,000 from April 2027 and £20,000 from April 2028, based on income in earlier years. Those within MTD keep digital records and send quarterly updates through compatible software, then a final declaration instead of the usual return.</p>
<table>
<thead><tr><th>Quarter (standard periods)</th><th>Update due</th></tr></thead>
<tbody>
<tr><td>6 April to 5 July 2026</td><td>7 August 2026</td></tr>
<tr><td>6 July to 5 October 2026</td><td>7 November 2026</td></tr>
<tr><td>6 October 2026 to 5 January 2027</td><td>7 February 2027</td></tr>
<tr><td>6 January to 5 April 2027</td><td>7 May 2027</td></tr>
<tr><td>Final declaration for 2026-27</td><td>31 January 2028</td></tr>
</tbody>
</table>
<p>Quarterly updates are summaries of income and expenses, not tax payments. Payment dates stay the same: 31 January and 31 July. Taxpayers can opt to use calendar quarters (ending on the last day of each month) instead. Full details are in our guide to <a href="/blog/making-tax-digital-income-tax">Making Tax Digital for Income Tax</a>.</p>

<h2>How do payments on account work?</h2>
<p>Payments on account are advance payments towards your next tax bill. HMRC asks for them if your last Self Assessment bill was £1,000 or more, unless more than 80% of your tax was collected at source. Each payment is half of the previous year's bill (Income Tax plus Class 4 National Insurance), due on 31 January and 31 July. Any difference is settled with a balancing payment the following 31 January.</p>
<p>Payments on account are the reason the first January bill after you go self-employed is often a shock: you pay the full previous year's tax plus half of it again in advance. Our guide to <a href="/blog/payments-on-account-hmrc">HMRC payments on account</a> explains how to reduce them if your income has dropped.</p>

<h2>Worked example: a freelancer's first two years</h2>
<p>Amir starts freelancing as a copywriter on 1 June 2025, leaving his job. He registers for Self Assessment in August 2026 (before the 5 October 2026 deadline) and receives his UTR. His figures are illustrative and use a combined Income Tax and Class 4 National Insurance bill:</p>
<table>
<thead><tr><th>Date</th><th>Payment</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>31 January 2027</td><td>Balancing payment for 2025-26 (whole year's self-employment tax)</td><td>£4,800</td></tr>
<tr><td>31 January 2027</td><td>First payment on account for 2026-27 (50% of £4,800)</td><td>£2,400</td></tr>
<tr><td>31 July 2027</td><td>Second payment on account for 2026-27</td><td>£2,400</td></tr>
<tr><td>31 January 2028</td><td>Balancing payment if 2026-27 tax is £7,000 (£7,000 minus £4,800 paid)</td><td>£2,200</td></tr>
<tr><td>31 January 2028</td><td>First payment on account for 2027-28 (50% of £7,000)</td><td>£3,500</td></tr>
</tbody>
</table>
<p>Amir pays £7,200 in January 2027 alone. Setting aside a fixed share of every invoice payment from the start avoids that cash crunch. If he cannot pay in full, he can ask about an <a href="/blog/hmrc-time-to-pay">HMRC Time to Pay arrangement</a>.</p>

<h2>What are the penalties for missing Self Assessment deadlines?</h2>
<p>For taxpayers not yet within Making Tax Digital for Income Tax, the familiar penalties apply:</p>
<table>
<thead><tr><th>How late</th><th>Late filing penalty</th><th>Late payment penalty</th></tr></thead>
<tbody>
<tr><td>1 day</td><td>£100 fixed penalty</td><td>Interest starts</td></tr>
<tr><td>30 days</td><td></td><td>5% of tax unpaid</td></tr>
<tr><td>3 months</td><td>£10 a day for up to 90 days (maximum £900)</td><td></td></tr>
<tr><td>6 months</td><td>5% of tax due or £300, whichever is higher</td><td>A further 5% of tax unpaid</td></tr>
<tr><td>12 months</td><td>Another 5% or £300, whichever is higher (more in serious cases)</td><td>A further 5% of tax unpaid</td></tr>
</tbody>
</table>
<p>People within MTD for Income Tax move to the newer points-based late submission penalties and the late payment penalty model already used for VAT. Read <a href="/blog/self-assessment-late-penalty">Self Assessment late penalties</a> for the detail and for how to appeal with a reasonable excuse.</p>

<h2>How to never miss a Self Assessment deadline</h2>
<ol>
<li><strong>Register early.</strong> As soon as you start trading, register and get your <a href="/blog/how-to-get-utr-number">UTR number</a>. See <a href="/blog/how-to-register-as-self-employed-uk">how to register as self-employed</a>.</li>
<li><strong>Put all dates in your calendar</strong> with reminders two weeks before: 31 January, 31 July, 5 October and, if you are within MTD, the four quarterly update dates.</li>
<li><strong>Keep records monthly.</strong> Record each invoice and expense as it happens rather than at year end; our guide to <a href="/blog/allowable-expenses-self-employed-uk">allowable expenses for the self-employed</a> shows what to track.</li>
<li><strong>Set aside tax</strong> from every payment, typically 20% to 30% depending on your income level, in a separate savings account.</li>
<li><strong>File early.</strong> Filing in the summer or autumn tells you the bill months in advance, even though payment is not due until January.</li>
<li><strong>Check your HMRC online account</strong> for payment references and statements before paying.</li>
</ol>

<h2>Which Self Assessment deadlines apply to you?</h2>
<p>Not everyone has every date. Use this quick guide to see which ones matter for your situation:</p>
<table>
<thead><tr><th>Your situation</th><th>Dates to watch</th></tr></thead>
<tbody>
<tr><td>Newly self-employed this tax year</td><td>5 October after the tax year ends (register), then 31 January (file and pay, often with a first payment on account)</td></tr>
<tr><td>Established sole trader, income £50,000 or less, not in MTD</td><td>31 January and 31 July payments; 31 January online return</td></tr>
<tr><td>Sole trader or landlord with qualifying income over £50,000</td><td>Quarterly MTD updates on the 7th of August, November, February and May; final declaration 31 January; payments 31 January and 31 July</td></tr>
<tr><td>Employee with small side income under £1,000</td><td>Possibly none: the <a href="/blog/trading-allowance">trading allowance</a> may cover it</td></tr>
<tr><td>Employee owing under £3,000 who wants it collected through PAYE</td><td>30 December online filing</td></tr>
<tr><td>Paper filer</td><td>31 October</td></tr>
</tbody>
</table>
<p>Self-employed people also pay <a href="/blog/class-4-national-insurance">Class 4 National Insurance</a> through Self Assessment, so it is included in the same 31 January and 31 July payments. Class 2 contributions are no longer compulsory for most self-employed people, but you can still pay voluntarily to protect State Pension entitlement where your profits are low.</p>
<p>The figures you report all start with your sales records. If your invoices are numbered in sequence and dated correctly, adding up turnover for the tax year (or a quarter, under MTD) takes minutes. A simple routine is to issue every invoice from one tool, such as our <a href="/invoice-generator">invoice generator</a>, and log it in a spreadsheet or bookkeeping app straight away.</p>

<h2>Common Self Assessment deadline mistakes</h2>
<ul>
<li>Thinking 31 January is only a filing deadline and forgetting it is also a payment date.</li>
<li>Forgetting the first payment on account in your first full year of self-employment.</li>
<li>Missing the 5 October registration deadline for new self-employment.</li>
<li>Filing on paper after 31 October, which triggers a penalty even though the online deadline is later.</li>
<li>Assuming no penalty applies when no tax is due. The £100 late filing penalty still applies.</li>
<li>Confusing MTD quarterly updates with tax payments, or missing them entirely.</li>
</ul>

<p>Self Assessment deadlines are predictable once you map them out: register by 5 October, file online and pay by 31 January, pay the second instalment by 31 July, and add the quarterly MTD dates if they apply to you. Clear, numbered invoices make the yearly figures easy to total. Our <a href="/invoice-generator">free invoice generator</a> creates professional invoices for <a href="/blog/sole-trader-invoice-uk">sole traders</a> with no sign-up and downloads them as a PDF built in your browser.</p>
`,
  },
  {
    slug: "eu-vat-rates-2026",
    title: "EU VAT Rates 2026: Standard Rates for All 27 Countries",
    description:
      "EU VAT rates 2026: standard VAT rates for all 27 member states in one table, recent rate changes, reduced rate rules and which rate to put on your invoices.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "European Union",
    related: ["eu-vat-one-stop-shop", "reverse-charge-invoice", "how-to-calculate-vat"],
    faqs: [
      {
        q: "Which EU country has the highest VAT rate in 2026?",
        a: "Hungary has the highest standard VAT rate in the European Union at 27%. Finland follows at 25.5% after its increase in September 2024, and Croatia, Denmark and Sweden all apply 25%. The EU VAT Directive sets a minimum standard rate of 15% but no maximum, so each member state chooses its own rate above that floor.",
      },
      {
        q: "Which EU country has the lowest VAT rate?",
        a: "Luxembourg has the lowest standard VAT rate in the EU at 17%, followed by Malta at 18% and Cyprus and Germany at 19%. Lower standard rates do not always mean lower VAT overall, because countries differ in which goods and services qualify for reduced rates and exemptions. Always check the rate for the specific product or service you sell.",
      },
      {
        q: "What is the minimum VAT rate in the EU?",
        a: "The EU VAT Directive requires a standard rate of at least 15%. Member states may also apply up to two reduced rates of at least 5% to goods and services listed in Annex III of the directive, and following the 2022 reform of the rates rules, may in some cases apply a further reduced rate below 5% and a zero rate to a limited number of items, such as certain basic necessities.",
      },
      {
        q: "Do I charge my country's VAT rate or my customer's?",
        a: "It depends on the transaction. For B2B services to a business customer in another EU country, the general rule is that no VAT is charged and the customer accounts for it under the reverse charge. For B2C digital services and distance sales of goods above the EU-wide €10,000 threshold, you charge the customer's country rate, usually through the One Stop Shop. Domestic sales use your own country's rate.",
      },
      {
        q: "How often do EU VAT rates change?",
        a: "Several member states change a standard or reduced rate in most years, often in budgets taking effect on 1 January or mid-year. Recent examples include Finland moving to 25.5% in 2024, Slovakia to 23% and Estonia to 24% in 2025, and Romania to 21% in August 2025. Check the rate before each new year and whenever a government announces a budget.",
      },
      {
        q: "Is VAT the same as sales tax?",
        a: "No. VAT is charged at each stage of the supply chain, and VAT-registered businesses reclaim the VAT they pay on purchases, so the tax is ultimately borne by the final consumer. US sales tax is usually charged only once, on the final retail sale. Both appear as a separate line on the invoice, but the registration, invoicing and filing rules are very different.",
      },
      {
        q: "Does a non-EU business have to charge EU VAT?",
        a: "Sometimes. A non-EU business selling digital services or goods to EU consumers generally has to charge VAT at the customer's country rate and can register for the non-Union or Import One Stop Shop to report it. Sales to VAT-registered EU businesses are usually handled under the reverse charge by the customer. Rules differ for goods physically held in EU warehouses.",
      },
      {
        q: "Where can I find the official EU VAT rates?",
        a: "The European Commission publishes the rates each member state applies, including reduced rates, in its VAT rates information and its Taxes in Europe Database. National tax authority websites are the final authority for their own rates. Rate tables from private websites can be useful summaries but may lag behind recent changes, so confirm a rate on an official source before relying on it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> EU VAT rates in 2026 range from a 17% standard rate in Luxembourg to 27% in Hungary. Most member states charge between 20% and 25%. Each country also has one or more reduced rates for items such as food, books and hospitality. Rates for all 27 countries are in the table below.</p>

<p>If you sell to customers in Europe, you need the right VAT rate for each invoice. The European Union sets common rules through the VAT Directive, but each member state chooses its own rates, and several have changed them recently. This guide lists the standard EU VAT rates for 2026, flags recent changes, explains how reduced rates work and shows which country's rate goes on your invoice. It is general information, not tax advice; always confirm rates with the national tax authority or the European Commission's <a href="https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/vat-rates_en">VAT rates page</a>.</p>

<h2>What are the EU VAT rates for 2026?</h2>
<p>The standard rates below were checked against public sources in October 2026. Rates can change with little notice, especially around 1 January and in mid-year budgets.</p>
<table>
<thead><tr><th>Country</th><th>Code</th><th>Standard rate 2026</th><th>Recent change</th></tr></thead>
<tbody>
<tr><td>Austria</td><td>AT</td><td>20%</td><td></td></tr>
<tr><td>Belgium</td><td>BE</td><td>21%</td><td></td></tr>
<tr><td>Bulgaria</td><td>BG</td><td>20%</td><td></td></tr>
<tr><td>Croatia</td><td>HR</td><td>25%</td><td></td></tr>
<tr><td>Cyprus</td><td>CY</td><td>19%</td><td></td></tr>
<tr><td>Czechia</td><td>CZ</td><td>21%</td><td></td></tr>
<tr><td>Denmark</td><td>DK</td><td>25%</td><td></td></tr>
<tr><td>Estonia</td><td>EE</td><td>24%</td><td>Up from 22% on 1 July 2025</td></tr>
<tr><td>Finland</td><td>FI</td><td>25.5%</td><td>Up from 24% on 1 September 2024</td></tr>
<tr><td>France</td><td>FR</td><td>20%</td><td></td></tr>
<tr><td>Germany</td><td>DE</td><td>19%</td><td>Restaurant food moved to 7% reduced rate from 2026</td></tr>
<tr><td>Greece</td><td>EL</td><td>24%</td><td></td></tr>
<tr><td>Hungary</td><td>HU</td><td>27%</td><td></td></tr>
<tr><td>Ireland</td><td>IE</td><td>23%</td><td></td></tr>
<tr><td>Italy</td><td>IT</td><td>22%</td><td></td></tr>
<tr><td>Latvia</td><td>LV</td><td>21%</td><td></td></tr>
<tr><td>Lithuania</td><td>LT</td><td>21%</td><td></td></tr>
<tr><td>Luxembourg</td><td>LU</td><td>17%</td><td></td></tr>
<tr><td>Malta</td><td>MT</td><td>18%</td><td></td></tr>
<tr><td>Netherlands</td><td>NL</td><td>21%</td><td>Hotel stays moved from 9% to 21% in 2026</td></tr>
<tr><td>Poland</td><td>PL</td><td>23%</td><td></td></tr>
<tr><td>Portugal</td><td>PT</td><td>23%</td><td>Mainland rate; Azores and Madeira lower</td></tr>
<tr><td>Romania</td><td>RO</td><td>21%</td><td>Up from 19% on 1 August 2025</td></tr>
<tr><td>Slovakia</td><td>SK</td><td>23%</td><td>Up from 20% on 1 January 2025</td></tr>
<tr><td>Slovenia</td><td>SI</td><td>22%</td><td></td></tr>
<tr><td>Spain</td><td>ES</td><td>21%</td><td>Canary Islands use IGIC, not VAT</td></tr>
<tr><td>Sweden</td><td>SE</td><td>25%</td><td></td></tr>
</tbody>
</table>
<p>Greece uses the prefix EL rather than GR in VAT numbers. Northern Ireland, while part of the UK, applies EU VAT rules for goods and uses the XI prefix for those transactions.</p>

<h2>Which EU VAT rates changed recently?</h2>
<p>Standard rates have moved upward in several countries, mainly to fund budget deficits and defence spending:</p>
<ul>
<li><strong>Finland</strong> raised its standard rate to 25.5% in September 2024 and cut its main reduced rate from 14% to 13.5% from January 2026.</li>
<li><strong>Slovakia</strong> moved to 23% in January 2025, and from 2026 moved certain high-sugar and high-salt foods from a reduced rate to the standard rate.</li>
<li><strong>Estonia</strong> moved to 24% in July 2025, described by the government as temporary.</li>
<li><strong>Romania</strong> raised its standard rate to 21% and merged its reduced rates into a single 11% rate in August 2025.</li>
</ul>
<p>We found no EU standard rate that changed on 1 January 2026. The 2026 changes were to reduced rates, such as hospitality in the Netherlands and restaurant food in Germany. If you invoice in several countries, put a reminder in your calendar each December to check for new rates.</p>

<h2>How do reduced VAT rates work?</h2>
<p>Under the EU VAT Directive, member states must apply a standard rate of at least 15%. They may also apply:</p>
<ul>
<li><strong>Up to two reduced rates</strong> of at least 5% for goods and services listed in Annex III of the directive, such as food, water, books, passenger transport, hotel accommodation and some cultural events.</li>
<li><strong>A further reduced rate below 5% and a zero rate</strong> for a limited list of basic needs, under the flexibility added in the 2022 rates reform.</li>
<li><strong>Exemptions</strong> for activities such as most financial services, insurance, healthcare and education. An exempt supply carries no VAT, but the seller usually cannot reclaim input VAT; see <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a>.</li>
</ul>
<p>Most professional services, software, consulting, design and marketing are taxed at the standard rate. Reduced rates matter most for food, hospitality, publishing, transport and construction.</p>

<h2>Which country's VAT rate goes on your invoice?</h2>
<p>The rate depends on the place of supply, which depends on who the customer is and what you sell:</p>
<table>
<thead><tr><th>Transaction</th><th>VAT treatment</th></tr></thead>
<tbody>
<tr><td>Domestic sale (seller and customer in same country)</td><td>Seller's country rate</td></tr>
<tr><td>B2B services to a VAT-registered business in another EU country</td><td>No VAT; customer self-accounts under the reverse charge</td></tr>
<tr><td>B2B goods shipped to a VAT-registered business in another EU country</td><td>Exempt intra-Community supply; customer accounts for acquisition VAT</td></tr>
<tr><td>B2C digital services or distance sales of goods, EU-wide total under €10,000 a year</td><td>Seller may charge its own country's rate</td></tr>
<tr><td>B2C digital services or distance sales above €10,000 a year</td><td>Customer's country rate, usually reported through the One Stop Shop</td></tr>
<tr><td>Sales to customers outside the EU</td><td>Generally outside the scope of EU VAT or zero-rated exports</td></tr>
</tbody>
</table>
<p>For the reverse charge to apply, you need the customer's valid VAT number, which you can check in VIES; see our <a href="/blog/vies-vat-number-check">VIES VAT number check guide</a>. The <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a> shows the wording to use, and the <a href="/blog/eu-vat-one-stop-shop">EU VAT One Stop Shop guide</a> explains OSS registration.</p>

<h2>Worked example: one invoice, three customers</h2>
<p>A German web developer, registered for standard VAT, builds a €3,000 website for three different customers in October 2026:</p>
<table>
<thead><tr><th>Customer</th><th>Net</th><th>VAT</th><th>Total</th><th>Invoice note</th></tr></thead>
<tbody>
<tr><td>Bakery in Munich (domestic)</td><td>€3,000.00</td><td>€570.00 (19%)</td><td>€3,570.00</td><td>Standard German VAT</td></tr>
<tr><td>VAT-registered agency in Vienna</td><td>€3,000.00</td><td>€0.00</td><td>€3,000.00</td><td>Reverse charge, both VAT numbers shown</td></tr>
<tr><td>Consumer client in Dublin (bespoke service, not automated digital)</td><td>€3,000.00</td><td>€570.00 (19%)</td><td>€3,570.00</td><td>General B2C rule: supplier's country</td></tr>
</tbody>
</table>
<p>Had the Dublin sale been an automated digital service, such as a downloadable theme, Irish VAT at 23% would apply once the developer's EU-wide B2C digital and distance sales passed €10,000 a year. Place-of-supply rules have many special cases, so check the treatment for your service. To calculate the amounts, see <a href="/blog/how-to-calculate-vat">how to calculate VAT</a>.</p>

<h2>How to use EU VAT rates correctly on invoices</h2>
<ol>
<li><strong>Identify the customer</strong> as a business (with a valid VAT number) or a consumer.</li>
<li><strong>Determine the place of supply</strong> for your goods or service.</li>
<li><strong>Pick the rate</strong> for that country and that product category, standard or reduced.</li>
<li><strong>Show the rate and amount</strong> separately on the invoice, alongside the net and gross totals.</li>
<li><strong>Add mandatory notes</strong> for zero-rated, exempt or reverse charge supplies.</li>
<li><strong>Record the sale</strong> in the right box of your VAT return or OSS return.</li>
<li><strong>Review rates yearly</strong> and update your invoice templates when a country changes its rate.</li>
</ol>
<p>Country-specific invoice rules also apply; see <a href="/blog/german-invoice-requirements">German invoice requirements</a>, <a href="/blog/french-invoice-requirements">French invoice requirements</a> and our overview of <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a>.</p>

<h2>How should VAT appear on an EU invoice?</h2>
<p>The EU VAT Directive sets a common list of details for a full VAT invoice, which every member state applies with some local additions. The core items are:</p>
<ul>
<li>Date of issue and a unique sequential invoice number.</li>
<li>Your VAT number, and the customer's VAT number for reverse charge and intra-Community supplies.</li>
<li>Full names and addresses of supplier and customer.</li>
<li>Quantity and nature of the goods, or extent and nature of the services.</li>
<li>Date of supply, if different from the invoice date.</li>
<li>Taxable amount per rate, unit price excluding VAT and any discounts.</li>
<li>The VAT rate applied and the VAT amount payable.</li>
<li>Where no VAT is charged, the reason (exemption, reverse charge, intra-Community supply).</li>
</ul>
<p>If an invoice includes items at different rates, show a subtotal and VAT amount for each rate. Countries often add their own requirements, such as language rules, specific legal notes or e-invoicing formats; see <a href="/blog/ireland-vat-invoice-requirements">Ireland's VAT invoice requirements</a> or the <a href="/blog/spanish-invoice-template">Spanish invoice template</a> for examples, and the general <a href="/blog/vat-invoice-guide">VAT invoice guide</a> for the full field list. If you are used to US-style invoicing, <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST</a> explains the differences. You can enter any rate from the table above in our <a href="/invoice-generator">invoice generator</a>, which shows the VAT line separately from the net total.</p>

<h2>Common EU VAT rate mistakes</h2>
<ul>
<li>Using an old rate after a country's increase, such as 22% for Estonia or 19% for Romania.</li>
<li>Charging your own VAT to an EU business customer instead of applying the reverse charge.</li>
<li>Applying a reduced rate to services that are standard-rated in that country.</li>
<li>Forgetting the €10,000 EU-wide threshold for B2C digital and distance sales.</li>
<li>Using GR instead of EL for Greek VAT numbers.</li>
<li>Copying rates from outdated third-party tables without checking an official source.</li>
</ul>

<h2>What is changing next in EU VAT?</h2>
<p>Beyond rates, the bigger change is VAT in the Digital Age (ViDA), which will bring mandatory e-invoicing and digital reporting for intra-EU B2B transactions from 2030, with national e-invoicing mandates arriving earlier in several countries. Our guide to <a href="/blog/vida-vat-in-the-digital-age">ViDA</a> covers the timeline, and the <a href="/blog/germany-e-invoicing-2027">German e-invoicing timeline</a> shows how one member state is phasing it in.</p>

<p>EU VAT rates in 2026 run from 17% to 27%, with recent increases in Finland, Slovakia, Estonia and Romania. Check the rate for the country and product each time, apply the reverse charge for valid B2B customers and show the rate clearly on every invoice. Our <a href="/invoice-generator">free invoice generator</a> lets you set any VAT rate, shows the tax separately, needs no sign-up and creates the PDF in your browser.</p>
`,
  },
  {
    slug: "vies-vat-number-check",
    title: "VIES VAT Number Check: How to Validate EU VAT IDs",
    description:
      "VIES VAT number check: how to validate an EU VAT number, read the result, keep proof, fix invalid numbers and what it means for reverse charge invoices.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "European Union",
    related: ["reverse-charge-invoice", "eu-vat-rates-2026", "tax-id-on-invoice"],
    faqs: [
      {
        q: "Is the VIES VAT number check free?",
        a: "Yes. The European Commission's VIES website is free to use and does not require an account. You select the member state, enter the VAT number without the country prefix and get a valid or invalid result. Businesses that check many numbers can also use the free VIES web service to automate checks from their own software, subject to the Commission's usage limits.",
      },
      {
        q: "Why does VIES say a VAT number is invalid?",
        a: "Common reasons are a typing error, using the wrong country prefix, the customer's registration being too recent to appear yet, or the number not being activated for intra-EU transactions. Some member states only list businesses registered for cross-border trade. It may also mean the registration was cancelled. Ask the customer to confirm the number and check its status with their tax office.",
      },
      {
        q: "Does VIES show the company name and address?",
        a: "Sometimes. Many member states return the registered name and address with a valid result, which lets you compare them with your customer's details. Some countries do not share this information through VIES for data protection reasons, so you only see whether the number is valid. In those cases, keep other evidence of the customer's identity, such as a business register extract.",
      },
      {
        q: "Can I check UK VAT numbers in VIES?",
        a: "Since Brexit, VIES no longer validates GB VAT numbers. To check a UK VAT number, use HMRC's Check a UK VAT number service on GOV.UK, which can also give you a consultation number. Northern Ireland businesses trading goods with the EU use an XI prefix, and those XI numbers can be checked in VIES for goods transactions.",
      },
      {
        q: "How do I prove I checked a VAT number?",
        a: "Enter your own VAT number as the requester when you run the check. VIES then returns a unique consultation number that records the date, time and result of the check. Save a screenshot or PDF of the result page with the consultation number and keep it with the invoice. This is strong evidence of good faith if a tax authority later questions the reverse charge.",
      },
      {
        q: "How often should I check a customer's VAT number?",
        a: "Check before the first invoice to a new business customer, and then periodically for repeat customers, for example quarterly or before each large invoice. VAT registrations can be cancelled at any time, and the result only proves validity on the date of the check. Many businesses automate this through invoicing or ERP software connected to the VIES web service.",
      },
      {
        q: "What does an EU VAT number look like?",
        a: "Every EU VAT number starts with a two-letter country prefix, followed by a country-specific format of digits and sometimes letters. Examples include DE plus 9 digits for Germany, FR plus 2 characters and 9 digits for France, and NL plus 9 digits, the letter B and 2 digits for the Netherlands. Greece uses EL rather than GR as its prefix.",
      },
      {
        q: "What if VIES is down when I need to invoice?",
        a: "National databases connected to VIES are sometimes unavailable for maintenance, and VIES then shows an error for that country. Try again later the same day or the next working day. If you must invoice immediately, keep a record of the failed attempt, collect other evidence such as the customer's VAT registration certificate, and run the check again as soon as the service is back.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A VIES VAT number check confirms whether an EU business's VAT number is valid for cross-border trade. Use the European Commission's free VIES website: select the country, enter the number, and include your own VAT number to get a consultation number as proof. A valid number is required before you apply the reverse charge.</p>

<p>When you sell to a business in another EU country, the VAT treatment usually depends on one thing: whether the customer has a valid VAT number. If they do, you can generally invoice without VAT under the reverse charge or as an exempt intra-Community supply. If they do not, you may owe VAT yourself. This guide explains what VIES is, how to run a check step by step, how to read the results and keep proof, what to do with invalid numbers and what the check means for your invoices. It is general information, not tax advice.</p>

<h2>What is VIES?</h2>
<p>VIES, the VAT Information Exchange System, is an electronic system run by the European Commission that connects the national VAT registration databases of all EU member states and Northern Ireland (for goods). The public <a href="https://ec.europa.eu/taxation_customs/vies/">VIES VAT number validation</a> service lets anyone check whether a VAT number is registered for intra-EU transactions.</p>
<p>VIES does not hold the data itself. It sends your query to the relevant national database and returns its answer. That is why the details shown, and the system's availability, vary by country.</p>

<h2>Why does a VAT number check matter for invoices?</h2>
<p>Under EU VAT rules, two common cross-border transactions depend on the customer being a taxable person with a valid VAT number:</p>
<ul>
<li><strong>B2B services:</strong> under the general rule, the place of supply is the customer's country, and the customer accounts for VAT under the reverse charge. You invoice without VAT and note that the reverse charge applies.</li>
<li><strong>B2B goods shipped to another member state:</strong> the sale is an exempt intra-Community supply, and the customer declares an intra-Community acquisition.</li>
</ul>
<p>Since the EU's 2020 "quick fixes," the customer's valid VAT number, communicated to the supplier, and a correct EC Sales List (recapitulative statement) are substantive conditions for the intra-Community supply exemption of goods. If the number is invalid and you invoice without VAT, a tax authority can assess the VAT on you. Our <a href="/blog/reverse-charge-invoice">reverse charge invoice guide</a> explains the full rules.</p>

<h2>How to run a VIES VAT number check step by step</h2>
<ol>
<li><strong>Get the full VAT number</strong> from the customer in writing, for example in the purchase order or onboarding form.</li>
<li><strong>Open the VIES website</strong> on the European Commission's taxation and customs pages.</li>
<li><strong>Select the member state</strong> from the drop-down list. The two-letter prefix is filled in for you.</li>
<li><strong>Enter the number</strong> without the country prefix, spaces or punctuation.</li>
<li><strong>Enter your own VAT number</strong> in the requester fields. This is optional but gives you a consultation number.</li>
<li><strong>Submit and read the result:</strong> valid or invalid, plus name and address where the country provides them.</li>
<li><strong>Save the proof:</strong> download or print the result page with the date, time and consultation number.</li>
<li><strong>Record the check</strong> against the customer record and invoice in your bookkeeping.</li>
</ol>

<h2>What do VIES results mean?</h2>
<table>
<thead><tr><th>Result</th><th>What it means</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>Valid, with name and address</td><td>The number is active for intra-EU trade and matches a registered business</td><td>Compare name and address with your customer; save proof; apply the reverse charge if the other conditions are met</td></tr>
<tr><td>Valid, no name or address</td><td>The number is active, but the member state does not share details</td><td>Keep other identity evidence, such as a business register extract</td></tr>
<tr><td>Invalid</td><td>The number is not registered, not active for cross-border trade, mistyped or cancelled</td><td>Do not apply the reverse charge yet; ask the customer to check</td></tr>
<tr><td>Service unavailable or member state unavailable</td><td>The national database is offline</td><td>Retry later; record the attempt</td></tr>
</tbody>
</table>

<h2>EU VAT number formats</h2>
<p>Each country uses its own format. Checking the format first catches many typing errors before you query VIES. Common examples:</p>
<table>
<thead><tr><th>Country</th><th>Prefix</th><th>Format after prefix</th></tr></thead>
<tbody>
<tr><td>Germany</td><td>DE</td><td>9 digits</td></tr>
<tr><td>France</td><td>FR</td><td>2 characters (digits or letters) and 9 digits</td></tr>
<tr><td>Netherlands</td><td>NL</td><td>9 digits, the letter B, 2 digits</td></tr>
<tr><td>Italy</td><td>IT</td><td>11 digits</td></tr>
<tr><td>Spain</td><td>ES</td><td>9 characters, with a letter at the start, end or both</td></tr>
<tr><td>Ireland</td><td>IE</td><td>8 or 9 characters, including one or two letters</td></tr>
<tr><td>Greece</td><td>EL</td><td>9 digits</td></tr>
<tr><td>Northern Ireland (goods)</td><td>XI</td><td>Same digits as the UK VAT number</td></tr>
</tbody>
</table>
<p>For UK numbers with the GB prefix, use HMRC's Check a UK VAT number service instead of VIES. For general guidance on showing tax IDs, see <a href="/blog/tax-id-on-invoice">tax ID on invoices</a>.</p>

<h2>Worked example: checking a new customer before invoicing</h2>
<p>A Dutch marketing consultant (VAT number NL123456789B01, illustrative) wins a €4,500 project from a design studio in Lyon. The studio sends its VAT number, FR12345678901.</p>
<ol>
<li>She enters the number in VIES under France, with her own VAT number as the requester.</li>
<li>VIES returns "valid" with the studio's name and Lyon address, plus a consultation number. She saves the PDF in the client folder.</li>
<li>She issues the invoice without Dutch VAT:</li>
</ol>
<table>
<thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Brand strategy workshop (2 days)</td><td>2</td><td>€1,200.00</td><td>€2,400.00</td></tr>
<tr><td>Campaign plan and messaging guide</td><td>1</td><td>€2,100.00</td><td>€2,100.00</td></tr>
<tr><td>Subtotal</td><td></td><td></td><td>€4,500.00</td></tr>
<tr><td>VAT 0% (reverse charge)</td><td></td><td></td><td>€0.00</td></tr>
<tr><td><strong>Total due</strong></td><td></td><td></td><td><strong>€4,500.00</strong></td></tr>
</tbody>
</table>
<p>The invoice shows both VAT numbers and the note "Reverse charge: VAT to be accounted for by the recipient (Article 196, Directive 2006/112/EC)." She includes the sale in her Dutch VAT return and in her EC Sales List for the quarter. Had VIES said invalid, she would have charged Dutch VAT at 21% (€945) until the studio's registration was confirmed.</p>

<h2>What should a cross-border B2B invoice include?</h2>
<ul>
<li>Your VAT number and the customer's VAT number, with country prefixes.</li>
<li>A reverse charge or exemption note in the wording your country accepts.</li>
<li>The net amount and a VAT line showing 0% or no VAT.</li>
<li>A unique sequential invoice number and the date of supply.</li>
<li>Currency and payment details; for international transfers, see <a href="/blog/swift-code-vs-iban">SWIFT code vs IBAN</a>.</li>
</ul>
<p>Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers currency, payment terms and language, and the <a href="/blog/vat-invoice-guide">VAT invoice guide</a> lists general VAT invoice fields. You can build the invoice in our <a href="/invoice-generator">free invoice generator</a> by setting the VAT rate to 0% and adding the reverse charge note.</p>

<h2>Common VIES and VAT number mistakes</h2>
<ul>
<li><strong>Not checking at all</strong> and relying on a number in an email signature.</li>
<li><strong>Checking once and never again,</strong> even though registrations can be cancelled.</li>
<li><strong>Not keeping proof</strong> of the check or skipping the consultation number.</li>
<li><strong>Using GR for Greece</strong> or including the prefix twice.</li>
<li><strong>Applying the reverse charge to consumers</strong> who do not have a VAT number.</li>
<li><strong>Forgetting the EC Sales List,</strong> which is a condition for the goods exemption in many cases.</li>
<li><strong>Using VIES for GB numbers,</strong> which it no longer covers.</li>
</ul>

<h2>How to build VAT number checks into your invoicing routine</h2>
<p>A check only protects you if it happens consistently. A simple routine for small businesses:</p>
<ol>
<li><strong>At onboarding:</strong> ask every new business customer for their VAT number, legal name and address on a short form, and run the VIES check before the first invoice.</li>
<li><strong>On the customer record:</strong> store the number, date of check and consultation number in your client list or bookkeeping software.</li>
<li><strong>Before each large invoice</strong> or at least quarterly for repeat customers, run the check again.</li>
<li><strong>At the end of each quarter:</strong> match your reverse charge invoices with your EC Sales List entries so every customer VAT number on the list has been validated.</li>
<li><strong>Keep the evidence</strong> with the invoice for as long as your country requires VAT records to be kept; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> for typical periods.</li>
</ol>
<p>Businesses with many EU customers can automate the check through the free VIES web service, which most accounting and ERP systems can call. For sales to consumers, VIES is not needed: you charge VAT, often at the customer's country rate once you pass the EU-wide €10,000 threshold, and report it through the <a href="/blog/eu-vat-one-stop-shop">One Stop Shop</a>. Current rates are in our <a href="/blog/eu-vat-rates-2026">EU VAT rates 2026 table</a>.</p>

<h2>Beyond VIES: other checks some countries offer</h2>
<p>Some member states offer their own verification services alongside VIES. Germany's Federal Central Tax Office (BZSt), for example, provides a qualified confirmation request that checks the name and address as well as the number. These can help when VIES does not return company details. The EU is also moving towards more digital reporting under <a href="/blog/vida-vat-in-the-digital-age">VAT in the Digital Age</a>, which will make accurate VAT numbers on invoices even more important.</p>

<p>A VIES VAT number check takes a minute and protects you from VAT assessments on cross-border sales. Check every new EU business customer, save the consultation number, recheck regularly, and only then invoice under the reverse charge with both VAT numbers shown. Our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and builds a PDF invoice in your browser, with room for both VAT numbers and the reverse charge note.</p>
`,
  },
  {
    slug: "kleinunternehmerregelung",
    title: "Kleinunternehmerregelung 2026: Limits and Invoice Wording",
    description:
      "Kleinunternehmerregelung in Germany: the €25,000 and €100,000 limits, § 19 UStG invoice wording, pros and cons, e-invoicing rules and a sample invoice.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Germany",
    related: ["german-invoice-requirements", "germany-e-invoicing-2027", "eu-vat-rates-2026"],
    faqs: [
      {
        q: "What are the Kleinunternehmer limits in 2026?",
        a: "Since 1 January 2025, you can use the Kleinunternehmerregelung if your total turnover was no more than €25,000 in the previous calendar year and does not exceed €100,000 in the current year. The figures are net amounts, without VAT. Both conditions must be met. The rules on these limits apply unchanged in 2026, but confirm with your tax office or adviser if your turnover is near either limit.",
      },
      {
        q: "What happens if I exceed €100,000 during the year?",
        a: "Since the 2025 reform, the €100,000 limit is a hard limit. The small business exemption ends with the transaction that takes your current-year turnover above €100,000, and that transaction and every one after it are subject to normal VAT. You then need to issue invoices with VAT, register for regular VAT filing and charge 19% or 7%, depending on the supply.",
      },
      {
        q: "What must a Kleinunternehmer write on an invoice?",
        a: "The invoice must show a note that the supply is VAT-exempt under the small business rule, such as Steuerbefreiung nach § 19 UStG or Gemäß § 19 UStG wird keine Umsatzsteuer berechnet. You must not show any VAT amount or rate. Since 2025 a simplified invoice is permitted for small businesses, but it still needs your and the customer's name and address, the date, a description and the amount.",
      },
      {
        q: "Can a Kleinunternehmer reclaim input VAT?",
        a: "No. Businesses using the Kleinunternehmerregelung cannot deduct input VAT (Vorsteuer) on their purchases. That is the main trade-off: you charge no VAT, which helps if your customers are consumers, but you bear the VAT on equipment, software and other costs. If you plan large investments, opting for regular VAT may be cheaper overall, though the option binds you for five years.",
      },
      {
        q: "Do Kleinunternehmer have to issue e-invoices?",
        a: "No. Small businesses using the Kleinunternehmerregelung are exempt from the obligation to issue e-invoices under the German B2B e-invoicing rollout. However, since 1 January 2025 all businesses in Germany, including Kleinunternehmer, must be able to receive structured e-invoices in formats such as XRechnung or ZUGFeRD from suppliers. A dedicated email inbox and a viewer are usually enough.",
      },
      {
        q: "Can I use the Kleinunternehmerregelung in the first year?",
        a: "Yes. In the year you start your business there is no previous-year turnover, so the test is that your expected turnover in the founding year does not exceed €25,000. If it exceeds €25,000, the regulation does not apply from the transaction that crosses the limit. Indicate your choice in the tax registration questionnaire, the Fragebogen zur steuerlichen Erfassung, when you register with the Finanzamt.",
      },
      {
        q: "Does the Kleinunternehmerregelung affect income tax?",
        a: "No. It is a VAT rule only. Your profit is still subject to income tax, and possibly trade tax (Gewerbesteuer) if you run a commercial business. You still record income and expenses and usually submit an income statement (EÜR) with your income tax return. Turnover for the Kleinunternehmer limit is not the same as taxable profit.",
      },
      {
        q: "Can I sell to customers in other EU countries as a Kleinunternehmer?",
        a: "Yes. B2B services to EU businesses usually fall under the reverse charge, and you may need a VAT identification number for that. Since 2025 there is also an EU small business scheme allowing VAT exemption in other member states if your EU-wide turnover stays under €100,000 and you meet each country's limit, through a special registration with the Federal Central Tax Office.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The Kleinunternehmerregelung (small business rule) under § 19 UStG lets businesses in Germany sell without charging VAT if their net turnover was no more than €25,000 last year and stays under €100,000 this year. Invoices must state that no VAT is charged under § 19 UStG, and input VAT cannot be reclaimed.</p>

<p>For freelancers, side businesses and small traders in Germany, the Kleinunternehmerregelung is often the first tax decision. It saves VAT returns and can make prices more attractive to private customers. It also comes with trade-offs, and the rules changed significantly in 2025, so older articles quoting €22,000 and €50,000 are out of date. This guide explains the current thresholds, how to word invoices, the pros and cons, e-invoicing rules, cross-border sales and the mistakes to avoid. It is general information, not tax advice; consult a Steuerberater or your Finanzamt for your situation.</p>

<h2>What is the Kleinunternehmerregelung?</h2>
<p>The Kleinunternehmerregelung is a simplified VAT scheme for small businesses set out in <a href="https://www.gesetze-im-internet.de/ustg_1980/__19.html">§ 19 of the German VAT Act (Umsatzsteuergesetz, UStG)</a>. Since the reform that took effect on 1 January 2025, eligible small businesses make VAT-exempt supplies. In practice that means:</p>
<ul>
<li>You do not charge VAT (Umsatzsteuer) on your invoices.</li>
<li>You do not pay VAT over to the tax office on your domestic sales.</li>
<li>You cannot deduct input VAT (Vorsteuer) on your business purchases.</li>
<li>Your VAT admin is much lighter than for a regular VAT-registered business.</li>
</ul>
<p>It applies to sole traders, freelancers (Freiberufler) and companies alike, as long as the turnover tests are met. It is a VAT rule only; income tax and trade tax still apply.</p>

<h2>What are the Kleinunternehmer limits for 2026?</h2>
<p>The Annual Tax Act 2024 changed the limits from 2025, and the same limits apply in 2026:</p>
<table>
<thead><tr><th>Test</th><th>Until 2024</th><th>From 2025</th></tr></thead>
<tbody>
<tr><td>Previous calendar year turnover</td><td>Up to €22,000 (gross)</td><td>Up to €25,000 (net)</td></tr>
<tr><td>Current calendar year turnover</td><td>Expected up to €50,000 (forecast)</td><td>Up to €100,000 (net, hard limit)</td></tr>
<tr><td>Exceeding the current-year limit</td><td>Status kept until year end</td><td>Exemption ends with the transaction that exceeds €100,000</td></tr>
<tr><td>First year of business</td><td>Forecast up to €22,000</td><td>Up to €25,000 in the founding year</td></tr>
</tbody>
</table>
<p>Turnover here means your total turnover (Gesamtumsatz) excluding VAT, with some exempt supplies left out. Both tests must be met. If last year's turnover was €25,001, you cannot use the rule this year, even if this year will be quieter.</p>
<p>The hard €100,000 limit is the change most people miss. Under the old rules you could finish the year as a Kleinunternehmer once the forecast was made. Now, the sale that takes you over €100,000 and every sale after it are taxed normally, so you must switch to VAT invoices mid-year.</p>

<h2>What must a Kleinunternehmer invoice include?</h2>
<p>A Kleinunternehmer invoice must not show any VAT rate or VAT amount. Instead, it needs a note that the supply is exempt under the small business rule. Commonly used wordings include:</p>
<ul>
<li>"Gemäß § 19 UStG wird keine Umsatzsteuer berechnet."</li>
<li>"Steuerbefreite Kleinunternehmerleistung gemäß § 19 UStG."</li>
<li>In English, for international customers: "VAT exempt under the small business scheme, § 19 UStG."</li>
</ul>
<p>Since 2025, Kleinunternehmer may issue simplified invoices under § 34a UStDV. These must show at least your full name and address, the customer's full name and address, the invoice date, the quantity and type of goods or scope and type of service, the amount payable and the exemption note. Most businesses still include a unique invoice number, the service date and their tax number, because customers and the tax office expect them. Read <a href="/blog/german-invoice-requirements">German invoice requirements</a> for the full list for regular invoices.</p>

<h2>Sample Kleinunternehmer invoice</h2>
<p>A freelance photographer in Leipzig, using the Kleinunternehmerregelung, invoices a private customer for a family shoot:</p>
<table>
<thead><tr><th>Pos.</th><th>Description</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>1</td><td>Family photo shoot, 2 hours, 14 September 2026</td><td>1</td><td>€280.00</td><td>€280.00</td></tr>
<tr><td>2</td><td>Edited high-resolution images</td><td>20</td><td>€6.00</td><td>€120.00</td></tr>
<tr><td>3</td><td>Travel within Leipzig</td><td>1</td><td>€25.00</td><td>€25.00</td></tr>
<tr><td></td><td><strong>Total amount</strong></td><td></td><td></td><td><strong>€425.00</strong></td></tr>
</tbody>
</table>
<p>Below the table: "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet." Plus invoice number 2026-041, invoice date 20 September 2026, tax number, bank details (IBAN) and payment terms of 14 days. A regular VAT-registered photographer would have to add 19% VAT (€80.75), making the total €505.75 for the same work. You can reproduce this layout in our <a href="/invoice-generator">free invoice generator</a> by setting the tax rate to 0% and adding the § 19 note.</p>

<h2>Is the Kleinunternehmerregelung worth it?</h2>
<table>
<thead><tr><th>Advantages</th><th>Disadvantages</th></tr></thead>
<tbody>
<tr><td>Prices for private customers are up to 19% lower than a VAT-charging competitor, or you keep more margin</td><td>No input VAT deduction on equipment, software, rent or vehicles</td></tr>
<tr><td>No regular advance VAT returns (Umsatzsteuer-Voranmeldung)</td><td>Business customers who reclaim VAT gain nothing from your lower price</td></tr>
<tr><td>Simpler invoices and bookkeeping</td><td>Mid-year switch to VAT if you pass €100,000</td></tr>
<tr><td>Exempt from issuing e-invoices</td><td>Some business clients see it as a sign of a very small operation</td></tr>
</tbody>
</table>
<p>As a rule of thumb, the regulation suits businesses selling mainly to consumers with low purchase costs, such as tutors, therapists, photographers and craftspeople. Businesses selling mainly to VAT-registered companies, or making large investments, often do better opting for regular VAT. You can waive the regulation by notifying the Finanzamt, but the waiver binds you for five calendar years.</p>

<h2>How to apply the Kleinunternehmerregelung step by step</h2>
<ol>
<li><strong>Estimate your turnover</strong> for the founding year and check you stay within €25,000, or check last year's actual figure if you already trade.</li>
<li><strong>Register with the Finanzamt</strong> using the tax registration questionnaire (Fragebogen zur steuerlichen Erfassung) in ELSTER, and tick the Kleinunternehmer option.</li>
<li><strong>Set up your invoice template</strong> with the § 19 UStG note and no VAT line.</li>
<li><strong>Prepare to receive e-invoices</strong> from suppliers in XRechnung or ZUGFeRD format.</li>
<li><strong>Track turnover monthly</strong> against the €100,000 current-year limit and next year's €25,000 test.</li>
<li><strong>Review each December</strong> whether you still qualify for the coming year.</li>
</ol>

<h2>Kleinunternehmer and e-invoicing</h2>
<p>Germany is phasing in mandatory B2B e-invoicing. Since 1 January 2025 every business must be able to receive e-invoices, and issuing obligations follow in 2027 and 2028 depending on turnover. Kleinunternehmer are exempt from the obligation to issue e-invoices, but must still be able to accept them. See our <a href="/blog/germany-e-invoicing-2027">Germany e-invoicing 2027 guide</a> and the explainer on <a href="/blog/germany-e-invoicing-xrechnung-zugferd">XRechnung and ZUGFeRD</a>.</p>

<h2>Selling to customers outside Germany</h2>
<p>Cross-border sales have their own rules. B2B services to businesses in other EU countries are usually covered by the reverse charge, and many Kleinunternehmer apply for a VAT identification number (USt-IdNr.) from the Federal Central Tax Office (BZSt) for this purpose; check your customer's number with a <a href="/blog/vies-vat-number-check">VIES VAT number check</a>. Since 2025, the EU small business scheme also lets German businesses apply VAT exemption in other member states if their EU-wide turnover stays below €100,000, through registration with the BZSt. Compare rates across Europe in our <a href="/blog/eu-vat-rates-2026">EU VAT rates 2026 table</a>.</p>

<h2>Worked example: tracking turnover against the limits</h2>
<p>A web designer in Cologne had €23,800 net turnover in 2025, so she qualifies as a Kleinunternehmer for 2026. Her business grows quickly in 2026:</p>
<table>
<thead><tr><th>Period</th><th>Turnover in period</th><th>Running total 2026</th><th>Status</th></tr></thead>
<tbody>
<tr><td>January to June</td><td>€38,000</td><td>€38,000</td><td>Kleinunternehmer</td></tr>
<tr><td>July to September</td><td>€29,000</td><td>€67,000</td><td>Kleinunternehmer</td></tr>
<tr><td>October to November</td><td>€30,500</td><td>€97,500</td><td>Kleinunternehmer</td></tr>
<tr><td>Invoice of 5 December</td><td>€4,000</td><td>€101,500</td><td>Exemption ends with this invoice; 19% VAT applies</td></tr>
</tbody>
</table>
<p>The 5 December invoice takes her above €100,000, so it must be issued with 19% VAT (€760), and so must every later invoice. Because 2026 turnover is well above €25,000, she also cannot use the rule in 2027. If she had tracked the running total monthly, she could have registered for regular VAT in time, discussed prices with clients and avoided correcting invoices afterwards.</p>
<p>Tracking is easiest when every invoice comes from one numbered sequence. A tool such as our <a href="/tools/invoice-number-generator">invoice number generator</a> keeps numbering consistent, and a simple spreadsheet of invoice dates and amounts gives the running total. Once you switch to regular VAT, your invoices need the full set of details, including the VAT rate and amount, and for EU business customers possibly a <a href="/blog/reverse-charge-invoice">reverse charge note</a>. For other countries' small business schemes, compare <a href="/blog/invoice-requirements-by-country">invoice requirements by country</a>.</p>

<h2>Common Kleinunternehmerregelung mistakes</h2>
<ul>
<li><strong>Showing VAT on the invoice.</strong> Under § 14c UStG, VAT shown on an invoice is owed to the tax office even if you are a Kleinunternehmer.</li>
<li><strong>Using the old limits</strong> of €22,000 and €50,000.</li>
<li><strong>Missing the hard €100,000 limit</strong> and continuing to invoice without VAT.</li>
<li><strong>Forgetting the exemption note,</strong> which leaves the customer unsure why there is no VAT.</li>
<li><strong>Opting out without checking the five-year commitment.</strong></li>
<li><strong>Not preparing to receive e-invoices</strong> from suppliers.</li>
</ul>

<p>The Kleinunternehmerregelung remains a simple, useful option for small German businesses: stay under €25,000 last year and €100,000 this year, show the § 19 UStG note on every invoice, and never show a VAT amount. Our <a href="/invoice-generator">free invoice generator</a> lets you set VAT to 0% and add the exemption note in the notes field. It needs no sign-up and creates the PDF in your browser.</p>
`,
  },
];
