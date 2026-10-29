import type { PostDraft } from "../blog";

export const UK_BUSINESS_2026_B_POSTS: PostDraft[] = [
  {
    slug: "limited-company-invoice-requirements",
    title: "Limited Company Invoice Requirements: UK Rules for 2026",
    description:
      "Limited company invoice requirements in the UK: full registered name, company number, registered office, VAT details and directors' names, with a worked example.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "sole-trader-invoice-uk",
      "vat-invoice-guide",
      "sole-trader-vs-limited-company",
      "invoice-numbering-system",
    ],
    faqs: [
      {
        q: "What must a UK limited company show on an invoice?",
        a: "GOV.UK lists a unique invoice number, the company name, address and contact details, the customer's name and address, a clear description of what you are charging for, the supply date, the invoice date, the amounts charged, any VAT and the total owed. The company name must be the full name exactly as it appears on the certificate of incorporation, including Limited or Ltd.",
      },
      {
        q: "Do I have to put my company number on invoices?",
        a: "The disclosure rules require the registered number, registered office address and part of the UK where the company is registered on business letters, order forms and websites. Invoices are usually sent as letters or emails, so most companies print these details in the invoice footer. It costs nothing, removes any doubt about compliance and helps customers check who they are paying.",
      },
      {
        q: "Should my registered office or trading address go on the invoice?",
        a: "You can show both. The trading address tells customers where to contact you, and the registered office is the official address on the Companies House register. If they are the same, show it once and label it as the registered office. If you use an accountant's or formation agent's address as the registered office, keep it in the footer and use your trading address in the header.",
      },
      {
        q: "Do I have to list directors' names on a company invoice?",
        a: "No. Directors' names are optional. The rule is all or nothing: if you choose to show the name of any director on invoices or business letters, you must show the names of every director. Most small companies leave directors' names off and simply put a named contact person in the contact details instead, which is allowed.",
      },
      {
        q: "Does a limited company need a VAT number on its invoices?",
        a: "Only if the company is VAT registered. A company that is not registered must not show a VAT number or charge VAT. Once registered, the company must issue VAT invoices to VAT-registered customers, showing the VAT registration number, the rate, the VAT amount and the other details HMRC requires. Registration becomes compulsory when taxable turnover passes the VAT threshold.",
      },
      {
        q: "Can I show share capital on my invoices?",
        a: "You can, but it is optional. If you choose to mention share capital on invoices, letters or your website, it must be the paid-up share capital, meaning the amount shareholders have actually paid for their shares. Most small companies with £1 or £100 of share capital leave it off because it adds nothing for the customer.",
      },
      {
        q: "Is an invoice from a limited company different from a sole trader invoice?",
        a: "The core content is the same: invoice number, dates, description, amounts and payment details. The difference is the identity block. A sole trader invoices in their own name or trading name, while a limited company invoices in its full registered name and adds its company number, registered office and place of registration. Payment should go to the company bank account, not a personal one.",
      },
      {
        q: "What happens if my company invoice is missing required details?",
        a: "The invoice is still a request for payment and the debt still exists, but missing company disclosures can be an offence for the company and its officers, and a missing or wrong VAT detail can stop your customer reclaiming VAT. In practice, the usual cost is delay: accounts teams reject incomplete invoices. Issue a corrected invoice or a credit note and replacement.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> UK limited company invoice requirements are the standard invoice details (unique number, invoice and supply dates, customer details, description, amounts and total) plus the company's identity: its full registered name including Limited or Ltd, company number, registered office address and place of registration. Add a VAT number and VAT breakdown only if the company is VAT registered.</p>

<p>Incorporating changes how you invoice. As a sole trader you bill in your own name; as a limited company you bill as a separate legal person, and the law expects customers to be able to identify that person from your paperwork. This guide sets out the limited company invoice requirements that apply in 2026, explains what is compulsory and what is optional, and walks through a complete example you can copy into our <a href="/invoice-generator/uk">UK invoice generator</a>.</p>

<p>If you have just moved from self-employment, our guide on <a href="/blog/sole-trader-invoice-uk">how to invoice as a sole trader in the UK</a> covers the basics; this article focuses on what changes once you have a company. If you are still setting the company up, start with <a href="/blog/how-to-set-up-a-limited-company">how to set up a limited company</a>.</p>

<p><strong>Note:</strong> This is general information, not legal or tax advice. Check GOV.UK or a qualified accountant for your circumstances.</p>

<h2>The standard invoice details every UK business needs</h2>
<p>GOV.UK's guidance on <a href="https://www.gov.uk/invoicing-and-taking-payment-from-customers/invoices-what-they-must-include" target="_blank" rel="noopener noreferrer">what invoices must include</a> applies to every business, limited or not. As of 2026, an invoice must show:</p>
<ul>
<li>A unique identification number (the invoice number).</li>
<li>Your company name, address and contact details.</li>
<li>The name and address of the customer you are invoicing.</li>
<li>A clear description of what you are charging for.</li>
<li>The date the goods or services were supplied (the supply date).</li>
<li>The date of the invoice.</li>
<li>The amount or amounts being charged.</li>
<li>VAT, if applicable.</li>
<li>The total amount owed.</li>
</ul>
<p>The invoice number must be unique and should run in sequence. If you are unsure how to structure it, our article on building an <a href="/blog/invoice-numbering-system">invoice numbering system</a> explains prefixes, year codes and what to do after a cancelled invoice, and the free <a href="/tools/invoice-number-generator">invoice number generator</a> creates a consistent sequence for you.</p>

<h2>Extra limited company invoice requirements</h2>
<p>A limited company has disclosure duties under company law that a sole trader does not. The key points GOV.UK sets out are:</p>

<h3>Full registered company name</h3>
<p>Use the company name exactly as it appears on the certificate of incorporation, including "Limited" or "Ltd". "Brightline Studio" is not enough if the registered name is "Brightline Studio Ltd". If you trade under a different brand, you can show the brand prominently, but the registered name must still appear, for example "Northwind Design, a trading name of Brightline Studio Ltd".</p>

<h3>Company number, registered office and place of registration</h3>
<p>The company's <a href="https://www.gov.uk/running-a-limited-company/signs-stationery-and-promotional-material" target="_blank" rel="noopener noreferrer">stationery and website rules</a> require business letters, order forms and websites to show:</p>
<ul>
<li>The registered company number.</li>
<li>The registered office address.</li>
<li>Where the company is registered: England and Wales, Scotland or Northern Ireland.</li>
<li>That it is a limited company, normally by using the full name with Limited or Ltd.</li>
</ul>
<p>Invoices are almost always sent by letter or email, which counts as business correspondence, so the safe and normal practice is to print all four details on every invoice. A single footer line handles it: "Brightline Studio Ltd. Registered in England and Wales, company number 12345678. Registered office: 10 Example Street, Leeds LS1 1AA."</p>

<h3>Directors' names: optional, but all or none</h3>
<p>You do not have to list directors. If you choose to name one director on an invoice or letter, you must name all of them. Most small companies skip this and give a contact name instead.</p>

<h3>Share capital: optional, and only paid-up</h3>
<p>You may mention share capital, but if you do, it must be the paid-up amount. Few small businesses bother.</p>

<h2>Sole trader vs limited company invoice: what changes</h2>
<p>The table below compares the identity details on each type of invoice. If you are still deciding which structure to use, see <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a>.</p>
<table>
<thead><tr><th>Detail</th><th>Sole trader</th><th>Limited company</th></tr></thead>
<tbody>
<tr><td>Name shown</td><td>Your name, or your name plus trading name</td><td>Full registered name with Limited or Ltd</td></tr>
<tr><td>Company number</td><td>Not applicable</td><td>Shown (standard practice)</td></tr>
<tr><td>Registered office</td><td>Not applicable</td><td>Shown (standard practice)</td></tr>
<tr><td>Place of registration</td><td>Not applicable</td><td>England and Wales, Scotland or Northern Ireland</td></tr>
<tr><td>Directors' names</td><td>Not applicable</td><td>Optional, but all or none</td></tr>
<tr><td>VAT number</td><td>Only if VAT registered</td><td>Only if VAT registered</td></tr>
<tr><td>Bank account</td><td>Can be personal, ideally separate</td><td>Must be the company account</td></tr>
<tr><td>Who is owed the money</td><td>You personally</td><td>The company</td></tr>
</tbody>
</table>
<p>The last two rows matter more than they look. Money paid to a limited company belongs to the company. If customers pay into your personal account, you create a mess in the books and, potentially, a <a href="/blog/directors-loan-account">director's loan account</a> entry to unpick at year end.</p>

<h2>VAT invoice requirements for a limited company</h2>
<p>Being a company does not by itself make you VAT registered. Registration is compulsory when taxable turnover passes the threshold explained in our guide to the <a href="/blog/vat-registration-threshold-uk">UK VAT registration threshold</a>, and voluntary below it. Once registered, invoices to VAT-registered customers must be full VAT invoices. On top of the standard details, that means at least:</p>
<ul>
<li>Your VAT registration number.</li>
<li>The time of supply (tax point), if different from the invoice date.</li>
<li>A unit price and quantity for each line, the rate of VAT and the VAT amount.</li>
<li>The total excluding VAT, the total VAT and the total payable.</li>
<li>Wording for any reverse charge, exemption or zero rate where it applies.</li>
</ul>
<p>Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> covers full, simplified and modified VAT invoices in detail, and our separate reverse charge guide covers construction and cross-border services. If you are not VAT registered, leave VAT off entirely; showing a VAT number you do not have is a serious error.</p>

<h2>How to create a compliant limited company invoice</h2>
<ol>
<li><strong>Set up your company profile once.</strong> Enter the full registered name, trading address, email and phone. Put the company number, registered office and place of registration in the footer or notes field.</li>
<li><strong>Add the customer's details.</strong> Use the customer's legal name. If they are also a company, use their registered name and the address their accounts team asks for.</li>
<li><strong>Allocate the next invoice number.</strong> Keep one sequence for the company, separate from any old sole trader numbering.</li>
<li><strong>Enter the invoice date and supply date.</strong> If the work spanned a period, state it, for example "Services 1 to 30 September 2026".</li>
<li><strong>Describe each line clearly.</strong> Quantity, unit price and a description a stranger could understand.</li>
<li><strong>Apply VAT only if registered.</strong> Use one rate per invoice for standard-rated work.</li>
<li><strong>Record deposits.</strong> Use the amount paid field so the invoice shows the balance due.</li>
<li><strong>State payment terms and bank details.</strong> Give the company bank account, a due date and your late payment position. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> has wording you can reuse.</li>
<li><strong>Save a PDF and file it.</strong> Companies must keep accounting records, so store every PDF in one folder per financial year.</li>
</ol>

<h2>Worked example: a VAT-registered limited company invoice</h2>
<p>Brightline Studio Ltd is VAT registered and builds a website for a retailer. The agreed price is 16 hours of design at £75 an hour and a fixed £1,200 development fee. The customer paid a £500 deposit when the job started.</p>
<table>
<thead><tr><th>Line</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Design, 16 hours at £75</td><td>16 x £75</td><td>£1,200.00</td></tr>
<tr><td>Development (fixed fee)</td><td>1 x £1,200</td><td>£1,200.00</td></tr>
<tr><td>Subtotal</td><td>£1,200 + £1,200</td><td>£2,400.00</td></tr>
<tr><td>VAT at 20%</td><td>£2,400 x 20%</td><td>£480.00</td></tr>
<tr><td>Total</td><td>£2,400 + £480</td><td>£2,880.00</td></tr>
<tr><td>Amount paid (deposit)</td><td></td><td>-£500.00</td></tr>
<tr><td>Balance due</td><td>£2,880 - £500</td><td>£2,380.00</td></tr>
</tbody>
</table>
<p>The header shows "Brightline Studio Ltd", the trading address and contact details. The footer reads: "Registered in England and Wales, company number 12345678. Registered office: 10 Example Street, Leeds LS1 1AA. VAT reg no. GB 123 4567 89." Payment terms state 30 days and the company's own sort code and account number. That single invoice satisfies the general invoice rules, the company disclosure rules and the VAT invoice rules. You can reproduce it exactly in the <a href="/invoice-generator">free invoice generator</a> using one 20% tax rate and the amount paid field.</p>
<p>If the company were not VAT registered, the invoice would stop at a £2,400 total, less the £500 deposit, leaving £1,900 due, with no VAT line and no VAT number.</p>

<h2>Common limited company invoicing mistakes</h2>
<ul>
<li><strong>Dropping "Ltd" from the name.</strong> Branding often shortens the name; the invoice must not.</li>
<li><strong>Using the sole trader template after incorporating.</strong> Old templates carry your personal name and personal bank details, which sends money to the wrong legal person.</li>
<li><strong>Restarting numbering at 1 for each client.</strong> Numbers should be unique across the company.</li>
<li><strong>Naming one director only.</strong> If you name any director, name them all.</li>
<li><strong>Charging VAT before registration takes effect.</strong> You cannot charge VAT until you are registered; you may be able to reissue invoices once your number arrives, following HMRC's rules.</li>
<li><strong>Editing an issued invoice.</strong> To correct a sent invoice, issue a credit note and a new invoice. A credit note keeps the audit trail intact and your numbering unbroken.</li>
</ul>

<h2>Special cases: incorporation, trading names, contractors and e-invoicing</h2>
<h3>Invoicing around the date you incorporate</h3>
<p>The switch from sole trader to company needs a clean cut-off. Work you delivered before the company existed belongs to you personally, so invoice it from your sole trader template, in your own name, and report it on your Self Assessment return. Work delivered after incorporation belongs to the company and should be invoiced by the company, with its own number sequence starting from the incorporation date. If a job straddles the date, split it into two invoices by the work done in each period rather than invoicing the whole job from one entity.</p>
<p>Tell clients in writing that you have incorporated, give them the company's details for their supplier records and ask them to update the payee bank account. Many accounts teams need a new supplier form before they can pay a new entity, so start that process before you send the first company invoice, or payment may be delayed by weeks.</p>
<h3>Trading names</h3>
<p>A company can trade under a brand that differs from its registered name. That is fine, but the registered name must still appear on the invoice so the customer knows which legal entity they are contracting with. A simple line under the logo, "Northwind Design is a trading name of Brightline Studio Ltd", plus the footer disclosures, meets the requirement without spoiling the design.</p>
<h3>Contractors and IR35</h3>
<p>Many limited companies are one-person contracting businesses. The invoice rules are identical, but your client may ask for extra fields such as a purchase order number, timesheet reference or agency code. If the engagement falls inside the off-payroll rules, the fee-payer deducts tax before paying you, and your invoice process changes; our guide to <a href="/blog/ir35-off-payroll-rules">IR35 and contractor invoices</a> explains how. Outside IR35, you invoice gross and the company pays Corporation Tax on its profit.</p>

<h3>What is coming: e-invoicing in the UK</h3>
<p>The government has announced plans to make e-invoicing mandatory for VAT invoices from April 2029. A PDF emailed to a customer will not count as an e-invoice under that regime. The required content will be similar, but delivered as structured data. Our explainer on the <a href="/blog/uk-e-invoicing-mandate-2029">UK e-invoicing mandate</a> covers the timeline and how to prepare. For now, a clear PDF invoice with all the details above is fully compliant.</p>

<h2>Keeping invoices consistent with Companies House</h2>
<p>Your invoices feed your accounts, your Corporation Tax return and, once a year, the information you check when filing your <a href="/blog/confirmation-statement">confirmation statement</a>. If the registered office changes, update your invoice footer the same day you update Companies House. If you change the company name, update templates immediately, because the old name will no longer match the register. A quick quarterly review of your template catches most of these issues.</p>

<h2>Create your limited company invoice</h2>
<p>Meeting limited company invoice requirements is mostly a one-time setup: get the registered name, company number, registered office and place of registration into your template, add VAT details if you are registered, and every invoice after that will be compliant. Choose a professional layout such as the <a href="/invoice-templates/corporate">corporate invoice template</a>, then build and download your invoice in the <a href="/invoice-generator">free invoice generator</a>, no sign-up needed. No sign-up is needed, and your PDF invoice is ready to send in a few minutes.</p>
`,
  },
  {
    slug: "self-assessment-late-penalty",
    title: "Self Assessment Late Filing Penalty: Amounts and Appeals",
    description:
      "Self Assessment late filing penalty explained for 2026: the £100 fine, £10 daily penalties, 5% charges, late payment interest and how to appeal with a reasonable excuse.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "self-assessment-tax-return-uk",
      "payments-on-account-hmrc",
      "making-tax-digital-income-tax",
      "how-to-register-as-self-employed-uk",
    ],
    faqs: [
      {
        q: "How much is the Self Assessment late filing penalty?",
        a: "The first penalty is £100 the day after the deadline, even if you owe no tax or pay on time. After 3 months HMRC adds £10 a day, up to £900. After 6 months there is a further penalty of 5% of the tax due or £300, whichever is greater, and the same again after 12 months. A return filed 12 months late can cost at least £1,600 in filing penalties alone.",
      },
      {
        q: "Do I get a penalty if I owe no tax?",
        a: "Yes. The £100 initial penalty applies to a late return whether or not any tax is due. The 5% or £300 penalties at 6 and 12 months also have a £300 minimum, so they apply even when the tax due is nil. If you no longer need to file, contact HMRC before the deadline and ask it to withdraw the notice to file, rather than ignoring it.",
      },
      {
        q: "What is the penalty for paying Self Assessment tax late?",
        a: "Late payment penalties are separate from late filing penalties. HMRC charges 5% of the tax still unpaid at 30 days, again at 6 months and again at 12 months. Interest is also charged on unpaid tax from the due date at HMRC's late payment rate, which has been 7.75% a year since 9 January 2026. Interest runs until you pay.",
      },
      {
        q: "What counts as a reasonable excuse for filing late?",
        a: "HMRC's examples include the death of a partner or close relative shortly before the deadline, an unexpected stay in hospital, serious illness, a computer or software failure while preparing your online return, HMRC online service problems, fire, flood or theft, and unforeseen postal delays. You must also file as soon as possible once the problem is over. Lack of money, not receiving a reminder or finding the system difficult are not accepted.",
      },
      {
        q: "How long do I have to appeal a Self Assessment penalty?",
        a: "You usually have 30 days from the date the penalty notice was issued to appeal. Use the appeal form that came with the penalty letter, or write a signed letter to HMRC with your name, Unique Taxpayer Reference, the reason the return or payment was late and the relevant dates. If you miss the 30 days, you must explain why your appeal is late.",
      },
      {
        q: "Should I file my return even if I cannot pay?",
        a: "Yes. Filing and paying are separate obligations with separate penalties. Filing on time avoids the £100 penalty and the escalating daily and 5% filing charges, and it lets HMRC calculate exactly what you owe. Once you know the figure, you can apply for a payment plan for the tax you cannot pay. Not filing just adds penalties on top of the debt.",
      },
      {
        q: "Will HMRC cancel the daily penalties if I file late?",
        a: "Filing stops new daily penalties from accruing, but it does not cancel those already charged. Daily penalties run for up to 90 days from three months after the deadline, a maximum of £900. To remove penalties already issued you need a successful appeal based on a reasonable excuse, or HMRC must accept that the penalty was wrongly charged.",
      },
      {
        q: "Do new points-based penalties apply to my Self Assessment return?",
        a: "Most people filing a traditional annual return for 2025/26 by 31 January 2027 are still under the £100, daily and 5% regime. HMRC has introduced points-based late submission penalties and a new late payment structure for people using Making Tax Digital for Income Tax, including volunteers who agree to them. HMRC writes to tell you when the new penalties apply to you.",
      },
      {
        q: "What is the deadline for the 2025/26 tax return?",
        a: "For the 2025/26 tax year, which ended on 5 April 2026, paper returns were due by 31 October 2026 and online returns are due by midnight on 31 January 2027. Any tax owed, plus your first payment on account for 2026/27 if one applies, must also be paid by 31 January 2027. Late filing penalties start the next day.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The Self Assessment late filing penalty starts at £100 the day after the deadline, even if no tax is owed. After 3 months HMRC adds £10 a day up to £900, then 5% of the tax due or £300 (whichever is greater) at 6 months and again at 12 months. Late payment brings separate 5% penalties plus interest.</p>

<p>Missing the 31 January deadline is one of the most common and most expensive admin mistakes freelancers and sole traders make. The Self Assessment late filing penalty is automatic, it applies even when you owe nothing, and it escalates quickly if you leave the return unfiled. This guide explains every penalty as of 2026, how late payment penalties and interest stack on top, how to appeal with a reasonable excuse, and how to stop it happening again. For the filing process itself, see our step-by-step guide to the <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return</a>.</p>

<p><strong>Note:</strong> This is general information, not tax advice. Penalty rules depend on your circumstances, so check GOV.UK or speak to an accountant.</p>

<h2>Self Assessment deadlines for 2025/26</h2>
<p>The 2025/26 tax year ran from 6 April 2025 to 5 April 2026. The key dates are:</p>
<ul>
<li><strong>5 October 2026:</strong> deadline to register for Self Assessment if you became newly self-employed during 2025/26. Our guide to <a href="/blog/how-to-register-as-self-employed-uk">registering as self-employed</a> explains how.</li>
<li><strong>31 October 2026:</strong> paper return deadline.</li>
<li><strong>31 January 2027:</strong> online return deadline, and the deadline to pay the balancing payment and the first <a href="/blog/payments-on-account-hmrc">payment on account</a> for 2026/27.</li>
<li><strong>31 July 2027:</strong> second payment on account for 2026/27.</li>
</ul>
<p>Penalties are triggered by whichever deadline applies to the way you file. If you missed the paper deadline, you can still file online by 31 January without a penalty.</p>

<h2>Every Self Assessment late filing penalty, step by step</h2>
<p>GOV.UK sets out the <a href="https://www.gov.uk/self-assessment-tax-returns/penalties" target="_blank" rel="noopener noreferrer">Self Assessment penalties</a> as follows:</p>
<table>
<thead><tr><th>How late the return is</th><th>Penalty</th><th>Running total (minimum)</th></tr></thead>
<tbody>
<tr><td>1 day</td><td>£100 fixed penalty</td><td>£100</td></tr>
<tr><td>3 months</td><td>£10 a day for up to 90 days, maximum £900</td><td>£1,000</td></tr>
<tr><td>6 months</td><td>5% of the tax due or £300, whichever is greater</td><td>£1,300</td></tr>
<tr><td>12 months</td><td>Another 5% of the tax due or £300, whichever is greater</td><td>£1,600</td></tr>
</tbody>
</table>
<p>The running total column shows the minimum for someone who owes little or no tax. Where the tax due is large, the 5% charges exceed £300 and the total grows. For partnership returns, every partner is charged a penalty if the partnership return is late.</p>

<h3>Why the £100 penalty applies even if you owe nothing</h3>
<p>The filing penalty is for not sending the return, not for the tax. If HMRC issued you a notice to file, the return is due whether or not you made a profit. If you have stopped trading or your income now falls under the <a href="/blog/trading-allowance">£1,000 trading allowance</a>, ask HMRC to withdraw the notice before the deadline instead of simply not filing.</p>

<h2>Late payment penalties and interest</h2>
<p>Paying late is a separate failure with separate charges. If your tax is not paid by the due date, HMRC charges:</p>
<ul>
<li>5% of the tax unpaid at 30 days.</li>
<li>Another 5% of the tax still unpaid at 6 months.</li>
<li>Another 5% of the tax still unpaid at 12 months.</li>
<li>Interest on the unpaid amount from the due date until it is paid.</li>
</ul>
<p>HMRC's late payment interest rate is the Bank of England base rate plus 4 percentage points. According to HMRC's published rates, it has been 7.75% a year since 9 January 2026. Interest also runs on late payments on account, which surprises many people in their second year of self-employment.</p>
<p>There is also a failure to notify penalty for people who register late, after 5 October, and do not pay all their tax by 31 January. It is based on the tax still unpaid.</p>

<h3>How HMRC tells you about a penalty</h3>
<p>Penalties arrive as penalty notices by post or in your online account, and later charges such as the daily penalties and the 6-month penalty arrive as separate notices. GOV.UK says to pay a penalty within 30 days of the date on the notice. Each notice also starts its own 30-day window for an appeal, so note the date as soon as it arrives. If you are appealing, you do not have to wait for HMRC to finish adding penalties before you write; you can ask for the appeal to cover all the penalties charged for that return.</p>

<h2>Worked example: a return filed six and a half months late</h2>
<p>Priya is a freelance copywriter. Her 2025/26 return was due online on 31 January 2027. She files it on 15 August 2027, and her tax bill is £4,000, which she pays the same day.</p>
<table>
<thead><tr><th>Penalty</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Initial late filing</td><td>Fixed</td><td>£100</td></tr>
<tr><td>Daily penalties</td><td>90 days x £10 (cap reached)</td><td>£900</td></tr>
<tr><td>6-month penalty</td><td>Greater of 5% x £4,000 = £200 or £300</td><td>£300</td></tr>
<tr><td>Late payment at 30 days</td><td>5% x £4,000</td><td>£200</td></tr>
<tr><td>Late payment at 6 months</td><td>5% x £4,000</td><td>£200</td></tr>
<tr><td><strong>Total penalties</strong></td><td>£100 + £900 + £300 + £200 + £200</td><td><strong>£1,700</strong></td></tr>
</tbody>
</table>
<p>On top of that, interest runs on £4,000 for about six and a half months. At 7.75% a year, a rough estimate is £4,000 x 7.75% x 6.5 / 12, about £168. Priya's late return costs her roughly £1,868 more than filing and paying on time: nearly half of her original tax bill. Had she filed on time and only paid late, she would have avoided £1,300 of that.</p>

<h2>How to appeal a Self Assessment late filing penalty</h2>
<p>If something genuinely stopped you filing on time, you can appeal. HMRC's guidance on <a href="https://www.gov.uk/tax-appeals/reasonable-excuses" target="_blank" rel="noopener noreferrer">reasonable excuses</a> describes it as something that stopped you meeting a tax obligation for a valid reason.</p>

<h3>What HMRC accepts as a reasonable excuse</h3>
<ul>
<li>Your partner or another close relative died shortly before the deadline.</li>
<li>An unexpected stay in hospital or a serious or life-threatening illness.</li>
<li>Your computer or software failed while you were preparing your online return.</li>
<li>Service issues with HMRC online services.</li>
<li>A fire, flood or theft that prevented you filing.</li>
<li>Postal delays you could not have predicted.</li>
<li>Delays related to a disability or mental health condition.</li>
<li>You relied on someone else, such as an agent, to send the return and they failed to.</li>
</ul>
<p>In every case you must file as soon as possible after the excuse ends.</p>

<h3>What does not count</h3>
<ul>
<li>You did not have the money to pay.</li>
<li>You found the online system too difficult.</li>
<li>You did not receive a reminder from HMRC.</li>
<li>You made a mistake on your return.</li>
</ul>

<h3>Steps to appeal</h3>
<ol>
<li><strong>File the overdue return first.</strong> An appeal is far weaker if the return is still outstanding.</li>
<li><strong>Check the date on the penalty notice.</strong> You usually have 30 days from that date to appeal, according to GOV.UK's page on <a href="https://www.gov.uk/tax-appeals/penalty" target="_blank" rel="noopener noreferrer">disagreeing with a tax penalty</a>.</li>
<li><strong>Use the appeal form sent with the penalty</strong>, or write a signed letter to HMRC.</li>
<li><strong>Include the essentials:</strong> your name, Unique Taxpayer Reference, why the return was late, and the dates the problem started and ended.</li>
<li><strong>Attach evidence:</strong> hospital letters, error messages and screenshots with dates, or correspondence with your agent.</li>
<li><strong>If HMRC rejects the appeal</strong>, you will be offered a review, and you can take the case to the tax tribunal.</li>
</ol>

<h3>Writing a strong appeal</h3>
<p>Successful appeals are specific and dated. A weak appeal says "I was ill around the deadline." A strong one says "I was admitted to hospital on 24 January 2027 and discharged on 12 February 2027, as shown by the enclosed discharge letter. I filed my return online on 16 February 2027, four days after leaving hospital." It explains what happened, shows it was outside your control, gives evidence, and shows you acted promptly once the problem ended. Keep a copy of everything you send and a note of the date you posted it.</p>

<h2>What to do if you have already missed the deadline</h2>
<p>If 31 January has passed and your return is not in, the most expensive thing you can do is wait. The £100 penalty is already fixed, but the daily penalties only start three months after the deadline, and the 5% charges at six and twelve months can still be avoided. Work through these steps in order:</p>
<ol>
<li><strong>Sign in to your HMRC online account</strong> and check which returns are outstanding and what HMRC thinks you owe. If you cannot find your Unique Taxpayer Reference, it appears on previous returns, penalty notices and HMRC letters.</li>
<li><strong>Gather your income records.</strong> Total every invoice issued in the tax year, add any other income, and pull together your expense receipts. If records are incomplete, use bank statements to rebuild them.</li>
<li><strong>File the return online as soon as it is ready.</strong> Even a few days can matter if you are close to the three-month point, when £10 a day begins.</li>
<li><strong>Pay what you can immediately.</strong> Every payment reduces the base for the 5% late payment penalties and for interest.</li>
<li><strong>Arrange a payment plan for the rest.</strong> If you cannot clear the bill, apply for Time to Pay rather than letting the debt sit.</li>
<li><strong>Decide whether you have grounds to appeal.</strong> If a reasonable excuse applies, appeal within 30 days of the penalty notice.</li>
</ol>

<h3>Penalties are separate for each return</h3>
<p>If you have missed more than one year, each return carries its own set of penalties. Two years of unfiled returns for someone with little tax to pay can therefore cost twice the £1,600 minimum once both are more than 12 months late. Tackle the oldest return first, because it is the one closest to the next penalty point.</p>

<h3>Late payments on account</h3>
<p>Payments on account work differently from the balancing payment. If a payment on account is late, HMRC charges interest on it from the due date, while the 5% late payment penalties are aimed at the tax still unpaid after the final deadline for the year. That still makes paying on time worthwhile: interest at 7.75% adds up, and a missed July payment is often a sign that January will be difficult too.</p>

<h2>The new penalty system for Making Tax Digital</h2>
<p>HMRC has introduced a points-based late submission regime and a revised late payment penalty for people in <a href="/blog/making-tax-digital-income-tax">Making Tax Digital for Income Tax</a>. For volunteers, each late tax return earns a point, and reaching 2 points triggers a £200 penalty. Late payment penalties under the new system start at 3% of tax unpaid at day 15, another 3% at day 30, then 10% a year on the outstanding amount. HMRC writes to tell you when the new rules apply to you. Most people filing a normal 2025/26 return are still on the traditional penalties described above.</p>

<h2>Late filing vs late payment: which costs more?</h2>
<table>
<thead><tr><th>Scenario (tax due £4,000)</th><th>Filed on time, paid 6 months late</th><th>Filed 6 months late, paid on time</th></tr></thead>
<tbody>
<tr><td>Filing penalties</td><td>£0</td><td>£1,300</td></tr>
<tr><td>Late payment penalties</td><td>£400</td><td>£0</td></tr>
<tr><td>Interest (approx.)</td><td>£155</td><td>£0</td></tr>
<tr><td>Total</td><td>About £555</td><td>£1,300</td></tr>
</tbody>
</table>
<p>The interest figure is a rough estimate: £4,000 x 7.75% x 6 / 12 = £155. The lesson is simple: always file on time, even if you cannot pay. Then ask HMRC for a <a href="/blog/hmrc-time-to-pay">Time to Pay arrangement</a> for the tax.</p>

<h2>How to make sure you never miss the deadline again</h2>
<ul>
<li><strong>Keep invoices and expenses up to date monthly.</strong> Most late returns are late because the records are a mess. Our <a href="/blog/allowable-expenses-self-employed-uk">allowable expenses guide</a> shows what to track.</li>
<li><strong>Number and file every invoice.</strong> Creating invoices in the <a href="/invoice-generator/uk">UK invoice generator</a> and saving each PDF gives you a ready income record.</li>
<li><strong>File early in the autumn.</strong> You can submit any time after 6 April. Filing early does not make you pay early, but it tells you the bill months in advance.</li>
<li><strong>Save for tax as you invoice.</strong> Setting aside a fixed share of every payment avoids a cash crunch in January. Remember <a href="/blog/class-4-national-insurance">Class 4 National Insurance</a> is due on top of income tax.</li>
<li><strong>Use a year-end routine.</strong> Our <a href="/blog/year-end-invoicing-checklist">year-end invoicing checklist</a> helps you close the books cleanly.</li>
</ul>

<h2>Avoid the Self Assessment late filing penalty with better records</h2>
<p>The Self Assessment late filing penalty is entirely avoidable: file by 31 January even if you cannot pay, appeal within 30 days if you had a genuine reasonable excuse, and keep records that make the return quick to complete. Start with clean, numbered invoices from the <a href="/invoice-generator">free invoice generator</a> and pick a simple layout such as the <a href="/invoice-templates/minimal">minimal invoice template</a>, so your income figures are ready when tax season arrives. Your finished invoice downloads as a PDF, free and with no sign-up.</p>
`,
  },
  {
    slug: "class-4-national-insurance",
    title: "Class 4 National Insurance 2026/27: Rates and Examples",
    description:
      "Class 4 National Insurance for 2026/27: 6% on profits from £12,570 to £50,270 and 2% above, how Class 2 works now, how to pay it and worked examples for sole traders.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "self-assessment-tax-return-uk",
      "payments-on-account-hmrc",
      "employer-national-insurance-2026",
      "how-to-register-as-self-employed-uk",
    ],
    faqs: [
      {
        q: "What are the Class 4 National Insurance rates for 2026/27?",
        a: "For the 2026/27 tax year, self-employed people pay Class 4 National Insurance at 6% on profits between the lower profits limit of £12,570 and the upper profits limit of £50,270, and 2% on profits above £50,270. Nothing is due on profits up to £12,570. The rates and limits are unchanged from 2025/26, according to HMRC's published rates and allowances.",
      },
      {
        q: "Do I still have to pay Class 2 National Insurance?",
        a: "Not as a compulsory charge. Since April 2024, self-employed people with profits at or above the small profits threshold, £7,105 for 2026/27, are treated as having paid Class 2 and get the National Insurance credit without paying. If your profits are below £7,105, you can choose to pay voluntary Class 2 at £3.65 a week to protect your State Pension record.",
      },
      {
        q: "How do I pay Class 4 National Insurance?",
        a: "Through Self Assessment. HMRC calculates Class 4 from the profit you report on your tax return and adds it to your income tax bill. It is paid in the same balancing payment on 31 January and is included in payments on account, so if your combined bill is over £1,000 you will usually pay half in advance on 31 January and half on 31 July.",
      },
      {
        q: "How much Class 4 National Insurance will I pay on £30,000 profit?",
        a: "On £30,000 profit in 2026/27, the amount above the lower profits limit is £30,000 minus £12,570, which is £17,430. At 6%, Class 4 is £1,045.80. All of the profit is below the upper profits limit of £50,270, so the 2% rate does not apply. Income tax is charged separately on top of this.",
      },
      {
        q: "Is Class 4 National Insurance based on turnover or profit?",
        a: "Profit. Class 4 is charged on your taxable trading profit, which is your income minus allowable business expenses and certain reliefs. That is why recording every expense matters: a £1,000 allowable expense for a basic rate taxpayer saves £200 in income tax and £60 in Class 4, so £260 in total.",
      },
      {
        q: "Do I pay Class 4 if I am also employed?",
        a: "Yes, if your self-employed profits are above £12,570. Class 4 is calculated on your self-employed profits separately from the Class 1 National Insurance deducted from your salary. If you pay a lot of both, there is an annual maximum and you may be able to ask HMRC to defer some contributions or reclaim an overpayment.",
      },
      {
        q: "Do limited company directors pay Class 4 National Insurance?",
        a: "No. Class 4 applies to self-employed profits of sole traders and partners. A company director is an employee of the company, so salary is subject to Class 1 employee and employer National Insurance, while dividends are not subject to National Insurance at all. Directors pay dividend tax instead, which is why many weigh salary against dividends carefully.",
      },
      {
        q: "When do I stop paying Class 4 National Insurance?",
        a: "You do not pay Class 4 if you were over State Pension age at the start of the tax year, on 6 April. If you reach State Pension age during a tax year, you still pay Class 4 for that year and stop from the next one. Income tax continues to apply to your profits regardless of age.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Class 4 National Insurance is the self-employed NI charge on trading profits. For 2026/27 it is 0% on profits up to £12,570, 6% on profits between £12,570 and £50,270, and 2% on profits above £50,270. You pay it through Self Assessment alongside income tax. Class 2 is no longer compulsory.</p>

<p>If you are a sole trader or partner in the UK, Class 4 National Insurance is the second tax on your profits after income tax, and it is easy to forget when you are saving for the January bill. This guide explains the 2026/27 rates, how Class 4 and Class 2 work together now that Class 2 has been reformed, how self-employed NI 2026/27 is paid, and how to estimate yours with real examples. If you have not registered yet, start with <a href="/blog/how-to-register-as-self-employed-uk">how to register as self-employed in the UK</a>.</p>

<p><strong>Note:</strong> This is general information, not tax advice. Your own figures depend on your full tax position, so check GOV.UK or an accountant.</p>

<h2>Class 4 National Insurance rates and thresholds for 2026/27</h2>
<p>HMRC's <a href="https://www.gov.uk/government/publications/rates-and-allowances-national-insurance-contributions/rates-and-allowances-national-insurance-contributions" target="_blank" rel="noopener noreferrer">National Insurance rates and allowances</a> give these figures:</p>
<table>
<thead><tr><th>Threshold or rate</th><th>2026/27</th><th>2025/26</th></tr></thead>
<tbody>
<tr><td>Class 4 lower profits limit</td><td>£12,570 a year</td><td>£12,570 a year</td></tr>
<tr><td>Class 4 upper profits limit</td><td>£50,270 a year</td><td>£50,270 a year</td></tr>
<tr><td>Class 4 main rate (between the limits)</td><td>6%</td><td>6%</td></tr>
<tr><td>Class 4 rate above the upper limit</td><td>2%</td><td>2%</td></tr>
<tr><td>Class 2 small profits threshold</td><td>£7,105 a year</td><td>£6,845 a year</td></tr>
<tr><td>Class 2 voluntary weekly rate</td><td>£3.65</td><td>£3.50</td></tr>
<tr><td>Class 3 voluntary weekly rate</td><td>£18.40</td><td>Not shown here</td></tr>
</tbody>
</table>
<p>The lower profits limit matches the £12,570 personal allowance for income tax, so if your profit is below that level you will normally owe neither income tax nor Class 4 on your trading income.</p>

<h2>How Class 2 and Class 4 work together now</h2>
<p>Until April 2024, the self-employed paid two charges: a flat weekly Class 2 contribution and a profit-based Class 4 charge. Class 2 is now effectively abolished as a compulsory payment. GOV.UK's page on <a href="https://www.gov.uk/self-employed-national-insurance-rates" target="_blank" rel="noopener noreferrer">self-employed National Insurance rates</a> explains the current position:</p>
<ul>
<li><strong>Profits of £7,105 or more (2026/27):</strong> you are treated as having paid Class 2. You pay nothing, but the year counts towards your State Pension and certain benefits.</li>
<li><strong>Profits below £7,105:</strong> you do not have to pay anything, but you can choose to pay voluntary Class 2 at £3.65 a week (about £189.80 for a 52-week year) to fill the gap in your National Insurance record.</li>
<li><strong>Profits above £12,570:</strong> you pay Class 4 at 6% and 2% as set out above.</li>
</ul>
<p>Voluntary Class 2 is far cheaper than voluntary Class 3 at £18.40 a week, which is why low earners who qualify often choose it.</p>

<h3>Why Class 4 matters for your State Pension</h3>
<p>Class 4 itself does not build entitlement to the State Pension; that comes from the Class 2 position. Under the current rules, a profit at or above the small profits threshold gives you a qualifying year automatically, and a profit below it leaves a gap unless you pay voluntary Class 2. So two numbers matter each year: £7,105, which decides whether your year counts, and £12,570, which decides whether you start paying Class 4. A sole trader with £10,000 profit sits between them: the year counts towards the State Pension and no Class 4 is due.</p>

<h2>How to calculate Class 4 National Insurance</h2>
<ol>
<li><strong>Work out your trading profit.</strong> Take your total sales (every invoice you issued for the tax year) and subtract allowable expenses. Our list of <a href="/blog/allowable-expenses-self-employed-uk">allowable expenses for the self-employed</a> covers what you can claim.</li>
<li><strong>Subtract the lower profits limit.</strong> Deduct £12,570. If the result is zero or negative, no Class 4 is due.</li>
<li><strong>Apply 6% to the main band.</strong> Charge 6% on the profit between £12,570 and £50,270, a band of £37,700.</li>
<li><strong>Apply 2% to the rest.</strong> Charge 2% on any profit above £50,270.</li>
<li><strong>Add the two figures.</strong> That is your Class 4 for the year, which HMRC adds to your Self Assessment bill.</li>
</ol>

<h2>Worked examples for 2026/27</h2>
<table>
<thead><tr><th>Annual profit</th><th>6% band</th><th>2% band</th><th>Class 4 total</th></tr></thead>
<tbody>
<tr><td>£10,000</td><td>£0</td><td>£0</td><td>£0</td></tr>
<tr><td>£20,000</td><td>(£20,000 - £12,570) x 6% = £445.80</td><td>£0</td><td>£445.80</td></tr>
<tr><td>£30,000</td><td>£17,430 x 6% = £1,045.80</td><td>£0</td><td>£1,045.80</td></tr>
<tr><td>£45,000</td><td>£32,430 x 6% = £1,945.80</td><td>£0</td><td>£1,945.80</td></tr>
<tr><td>£50,270</td><td>£37,700 x 6% = £2,262.00</td><td>£0</td><td>£2,262.00</td></tr>
<tr><td>£70,000</td><td>£37,700 x 6% = £2,262.00</td><td>£19,730 x 2% = £394.60</td><td>£2,656.60</td></tr>
</tbody>
</table>

<h3>Worked example: a designer with £58,000 sales</h3>
<p>Tom is a sole trader graphic designer. In 2026/27 he issues invoices totalling £58,000 and has £8,000 of allowable expenses, so his profit is £50,000.</p>
<ul>
<li>Profit above the lower limit: £50,000 - £12,570 = £37,430.</li>
<li>All of it is below the £50,270 upper limit, so it is charged at 6%: £37,430 x 6% = £2,245.80.</li>
<li>Class 2: his profit is above £7,105, so he is treated as having paid it. Cost £0.</li>
</ul>
<p>Tom's Class 4 is £2,245.80, about 3.9% of his profit and payable on top of his income tax. If he finds another £1,000 of genuine expenses, his Class 4 drops by £60 to £2,185.80, and his income tax falls too.</p>

<h3>Your effective Class 4 rate</h3>
<p>Because the first £12,570 is free of Class 4, the effective rate on your whole profit is well below 6%. On £20,000 profit it is about 2.2% (£445.80 / £20,000). On £30,000 it is about 3.5%, on £50,270 it is about 4.5%, and on £70,000 it is about 3.8% because the 2% band starts to pull the average down. This is a useful sense check: if your estimate shows Class 4 above 4.5% of profit, something in the calculation is wrong.</p>

<h3>Turning the annual figure into a monthly saving</h3>
<p>Tom's £2,245.80 Class 4 works out at £187.15 a month (£2,245.80 / 12). If he invoices £58,000 over the year, that is a little under 4% of his sales. The easiest habit is to move a fixed percentage of every customer payment into a separate tax savings account the day it arrives, covering income tax and Class 4 together. When the January bill lands, the money is already there.</p>

<h3>Checking HMRC's calculation</h3>
<p>When you submit your return, HMRC's calculation shows Class 4 as a separate line. Compare it with your own figure using the steps above. Differences usually come from a profit figure that includes or excludes something you did not expect, such as a balancing adjustment or a loss brought forward, rather than from the rates themselves.</p>

<h2>How and when you pay self-employed NI</h2>
<p>Class 4 has no separate payment system. You report your profit on your <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return</a>, HMRC calculates Class 4, and it becomes part of the same bill as your income tax. For the 2026/27 tax year:</p>
<ul>
<li>The return and the balancing payment are due by 31 January 2028.</li>
<li>If your bill is over £1,000 and less than 80% of your tax was collected at source, you also make <a href="/blog/payments-on-account-hmrc">payments on account</a>, which include Class 4. The first falls on 31 January 2027 and the second on 31 July 2027.</li>
<li>Late payment brings penalties and interest, covered in our guide to the <a href="/blog/self-assessment-late-penalty">Self Assessment late penalty</a>.</li>
</ul>
<p>Sole traders who are or will be in <a href="/blog/making-tax-digital-income-tax">Making Tax Digital for Income Tax</a> send quarterly updates, but Class 4 is still calculated on the annual figures and paid on the usual dates.</p>

<h2>Class 4 compared with other National Insurance classes</h2>
<table>
<thead><tr><th>Class</th><th>Who pays</th><th>Basis</th><th>How it is paid</th></tr></thead>
<tbody>
<tr><td>Class 1 (employee)</td><td>Employees, including company directors</td><td>Salary above the threshold</td><td>Through payroll (PAYE)</td></tr>
<tr><td>Class 1 (employer)</td><td>Employers</td><td>Employees' pay above the secondary threshold</td><td>Through payroll</td></tr>
<tr><td>Class 2</td><td>Self-employed with profits under £7,105 (voluntary)</td><td>Flat £3.65 a week</td><td>Self Assessment</td></tr>
<tr><td>Class 3</td><td>Anyone filling a record gap</td><td>Flat £18.40 a week</td><td>Direct to HMRC</td></tr>
<tr><td>Class 4</td><td>Self-employed sole traders and partners</td><td>6% and 2% of profits</td><td>Self Assessment</td></tr>
</tbody>
</table>
<p>Employer contributions are a different subject; see <a href="/blog/employer-national-insurance-2026">employer National Insurance 2026/27</a> if you are taking on staff.</p>

<h2>Sole trader or limited company: the NI difference</h2>
<p>Class 4 is one reason people compare structures. A limited company director pays no Class 4. Instead, salary attracts Class 1 contributions and dividends attract dividend tax, while the company pays <a href="/blog/corporation-tax-uk">Corporation Tax</a> on its profits. Whether that is cheaper depends on your profit level, your expenses and how you extract money, which our guides on <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a> and <a href="/blog/director-salary-vs-dividends">director salary vs dividends</a> explore.</p>

<h2>Class 4 for side hustles, partners and losses</h2>
<h3>If you are employed and self-employed</h3>
<p>Class 4 looks only at your self-employed profit, not your total income. The lower profits limit applies to that profit on its own. Suppose Aisha earns a £30,000 salary and makes £8,000 profit from a weekend photography business in 2026/27. Her employer deducts Class 1 from the salary as normal. Her £8,000 profit is below £12,570, so her Class 4 is £0. It is above the £7,105 small profits threshold, so she is treated as having paid Class 2 and gets the credit without paying anything. She still pays income tax on the £8,000, because her salary has already used her personal allowance. Our guide to <a href="/blog/side-hustle-taxes">side hustle taxes</a> covers the income tax side.</p>

<h3>Partnerships</h3>
<p>Each partner pays Class 4 on their own share of the partnership's profit, through their own Self Assessment return. If a partnership makes £90,000 and two partners share it equally, each has £45,000 of profit and, using the table above, each pays £1,945.80 in Class 4. The partnership itself does not pay Class 4.</p>

<h3>Losses</h3>
<p>If your business makes a loss, no Class 4 is due for that year. A trading loss carried forward can reduce the profits on which Class 4 is charged in later years, so keep a record of it and make sure it is claimed on your return.</p>

<h3>Common Class 4 mistakes</h3>
<ul>
<li><strong>Saving for income tax only.</strong> Class 4 adds 6% on most of a typical sole trader's profit, which is easy to miss in a rough tax estimate.</li>
<li><strong>Using turnover instead of profit.</strong> Class 4 is charged on profit after allowable expenses, so a low-margin business with high sales may owe much less than it fears.</li>
<li><strong>Assuming Class 2 is still a bill.</strong> If your profit is £7,105 or more, Class 2 is treated as paid; you do not need to pay it separately.</li>
<li><strong>Forgetting payments on account.</strong> Class 4 is included in the advance payments, so a first-year bill can look far bigger than expected.</li>
<li><strong>Mixing business and personal money.</strong> A separate account makes it far easier to prove profit and claim expenses.</li>
</ul>

<h2>Tips to manage Class 4 National Insurance</h2>
<ul>
<li><strong>Save a percentage of every invoice.</strong> For a basic rate taxpayer, income tax at 20% plus Class 4 at 6% means setting aside around a quarter of profit above £12,570 is a reasonable starting point.</li>
<li><strong>Track every invoice.</strong> Numbered invoices from the <a href="/invoice-generator/uk">UK invoice generator</a> give you an accurate sales total, and our <a href="/blog/sole-trader-invoice-uk">sole trader invoice guide</a> shows what to include.</li>
<li><strong>Claim all allowable expenses.</strong> Each £100 of expenses saves £6 in Class 4 in the main band.</li>
<li><strong>Check small side income.</strong> If your gross trading income is £1,000 or less, the <a href="/blog/trading-allowance">trading allowance</a> may mean you do not need to report it at all.</li>
<li><strong>Consider voluntary Class 2 in low-profit years.</strong> At £3.65 a week it can protect your State Pension record.</li>
<li><strong>Review your position before 31 January.</strong> If your profit has dropped sharply, you can ask HMRC to reduce your payments on account, which include Class 4, so you are not paying in advance on profits you no longer expect to make. Only reduce them if you are confident, because interest is charged if the reduced payments turn out to be too low.</li>
</ul>

<h2>Plan for Class 4 National Insurance from your first invoice</h2>
<p>Class 4 National Insurance is predictable: nothing up to £12,570, 6% up to £50,270 and 2% above that for 2026/27. The difficult part is having the money ready in January and July. Issue clear, numbered invoices with the <a href="/invoice-generator">free invoice generator</a>, keep your expenses tidy, and you will know your self-employed NI bill long before HMRC asks for it. When your invoice looks right, download it as a PDF and send it straight to your client.</p>
`,
  },
  {
    slug: "hmrc-time-to-pay",
    title: "HMRC Time to Pay: How to Set Up a Tax Payment Plan",
    description:
      "HMRC Time to Pay explained: who qualifies for a payment plan, how to apply online or by phone, the 7.75% interest cost and how to keep the arrangement on track in 2026.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "self-assessment-tax-return-uk",
      "payments-on-account-hmrc",
      "cash-flow-management",
      "how-to-file-vat-return-uk",
    ],
    faqs: [
      {
        q: "What is an HMRC Time to Pay arrangement?",
        a: "It is a payment plan agreed with HMRC that lets you pay an overdue tax bill in monthly instalments by Direct Debit instead of in one lump sum. It is available for Self Assessment, VAT, employer PAYE, Corporation Tax and some other taxes. HMRC checks that the plan is affordable and expects you to use savings or assets to reduce the debt first.",
      },
      {
        q: "Can I set up an HMRC payment plan online?",
        a: "Often, yes. HMRC has an online service that checks whether you are eligible and lets you set up the plan without speaking to anyone. You need the reference number for the tax you owe, such as your Unique Taxpayer Reference, UK bank details for a Direct Debit you are authorised to set up, and details of your income and spending. If you are not eligible online, call HMRC.",
      },
      {
        q: "How much interest does HMRC charge on a payment plan?",
        a: "Interest is charged at HMRC's late payment rate on the outstanding balance until the debt is cleared. The rate is the Bank of England base rate plus 4 percentage points and has been 7.75% a year since 9 January 2026. Paying more than the agreed amount, or clearing the balance early, reduces the total interest you pay.",
      },
      {
        q: "What phone number do I call for an HMRC payment plan?",
        a: "HMRC's payment problems lines include 0300 200 3820 for Self Assessment, 0300 200 3831 for VAT, 0300 200 3819 for employer PAYE and 0300 200 3840 for Corporation Tax. They are open Monday to Friday, 8am to 6pm, and closed on bank holidays. HMRC also has a digital assistant for payment problems that can pass you to webchat.",
      },
      {
        q: "What happens if I miss a Time to Pay instalment?",
        a: "HMRC will contact you to ask why the payment was missed and will try to adjust or renegotiate the plan where possible. If you cannot keep up, contact HMRC before the next payment rather than letting the Direct Debit fail. If the arrangement breaks down and is not renegotiated, HMRC can ask for the full amount and take further collection action.",
      },
      {
        q: "Will a Time to Pay arrangement stop penalties?",
        a: "A payment plan does not cancel penalties already charged, and interest keeps running until the debt is paid. Acting early is what limits the damage: contacting HMRC before the late payment penalty dates and before enforcement starts puts you in the best position. File your returns on time even when you cannot pay, because late filing penalties are separate.",
      },
      {
        q: "Can a limited company get a Time to Pay arrangement?",
        a: "Yes. Companies can ask for payment plans for Corporation Tax, VAT and PAYE. HMRC expects the company to reduce the debt as much as possible first, for example by releasing stock, vehicles or shares, and may ask directors to put in personal funds, accept lending or extend credit. The company must show the plan is affordable from its income and spending.",
      },
      {
        q: "Can I add a new tax bill to an existing payment plan?",
        a: "Possibly. GOV.UK says that if you cannot pay another tax bill while you are already in a plan, you should contact HMRC, as you may be able to add the new bill to your existing arrangement. Do not simply stop paying the new bill. HMRC will look at whether the combined plan is still affordable.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> HMRC Time to Pay is a payment plan that lets you clear an overdue tax bill in monthly instalments by Direct Debit. You can often set it up online with your tax reference, bank details and a summary of income and spending; otherwise you call HMRC. Interest at 7.75% (as of 2026) runs on the balance until it is paid.</p>

<p>A tax bill you cannot pay in full is stressful, but it is a common and solvable problem. HMRC would rather collect tax over time than chase a business that has stopped trading, and an HMRC payment plan is the standard route. This guide explains how an HMRC Time to Pay arrangement works in 2026, who qualifies, what it costs, and how to keep it on track. It also shows how better invoicing can stop you needing one again. If the debt is your Self Assessment bill, our guide to the <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return</a> explains how the bill is built.</p>

<p><strong>Note:</strong> This is general information, not tax or debt advice. If you have several debts, free independent advice services can help.</p>

<h2>What an HMRC Time to Pay arrangement is</h2>
<p>A Time to Pay arrangement is an agreement to pay an overdue tax debt in instalments. GOV.UK's guide to <a href="https://www.gov.uk/difficulties-paying-hmrc/pay-in-instalments" target="_blank" rel="noopener noreferrer">paying HMRC in instalments</a> describes plans for overdue bills paid monthly by Direct Debit. HMRC checks the plan is affordable and, if it cannot agree one, will ask you to pay the full amount.</p>
<p>It is different from a Budget Payment Plan, which lets you pay weekly or monthly towards your next Self Assessment bill before it is due. A Budget Payment Plan requires you to be up to date with your previous bill; Time to Pay is for when you are already behind.</p>

<h2>Which taxes an HMRC payment plan can cover</h2>
<table>
<thead><tr><th>Tax</th><th>Who it applies to</th><th>HMRC payment problems line</th></tr></thead>
<tbody>
<tr><td>Self Assessment</td><td>Sole traders, partners, landlords, directors with untaxed income</td><td>0300 200 3820</td></tr>
<tr><td>VAT</td><td>VAT-registered businesses</td><td>0300 200 3831</td></tr>
<tr><td>Employer PAYE</td><td>Businesses running payroll</td><td>0300 200 3819</td></tr>
<tr><td>Corporation Tax</td><td>Limited companies</td><td>0300 200 3840</td></tr>
<tr><td>Simple Assessment</td><td>Individuals sent a Simple Assessment bill</td><td>0300 322 7835</td></tr>
</tbody>
</table>
<p>The numbers come from HMRC's <a href="https://www.gov.uk/find-hmrc-contacts/payment-problems-enquiries" target="_blank" rel="noopener noreferrer">payment problems contact page</a>, open Monday to Friday, 8am to 6pm. Many people can avoid the phone entirely by using the online service, which checks eligibility first.</p>

<h2>Who qualifies for Time to Pay</h2>
<p>HMRC does not publish a single test for every case, but its guidance makes the principles clear:</p>
<ul>
<li><strong>The debt is genuine and overdue.</strong> You know how much you owe, which usually means your returns are filed.</li>
<li><strong>The plan is affordable.</strong> HMRC looks at your income, regular spending and other debts.</li>
<li><strong>You have used what you can.</strong> If you have savings or assets, HMRC expects you to use them to reduce the debt as much as possible.</li>
<li><strong>For companies,</strong> the business must reduce the debt first, for example by releasing stock, vehicles or shares, and directors may be asked to inject personal funds or arrange lending.</li>
<li><strong>You can pay by Direct Debit</strong> from a UK bank account you are authorised to use.</li>
</ul>
<p>The online service tells you whether you can set up the plan yourself. Larger or more complicated debts, or businesses with several taxes overdue, usually need a conversation with HMRC.</p>

<h2>How to set up an HMRC payment plan step by step</h2>
<ol>
<li><strong>File any outstanding returns.</strong> Late filing penalties are separate from late payment, so file first. Our guide to the <a href="/blog/self-assessment-late-penalty">Self Assessment late filing penalty</a> shows how much this saves.</li>
<li><strong>Work out exactly what you owe.</strong> Check your HMRC online account, including any <a href="/blog/payments-on-account-hmrc">payments on account</a> that fell due at the same time.</li>
<li><strong>Build a simple budget.</strong> List monthly income, essential spending and other debts. HMRC accepts a Standard Financial Statement prepared with an independent debt adviser as evidence.</li>
<li><strong>Decide what you can pay now.</strong> A lump sum up front reduces both the plan length and the interest.</li>
<li><strong>Gather your reference and bank details.</strong> You need the reference number for the tax, such as your UTR, and UK bank details for the Direct Debit.</li>
<li><strong>Use the online service</strong> to check eligibility and set up the plan. If you are not eligible, call the payment problems line for that tax.</li>
<li><strong>Keep the confirmation</strong> and diary each Direct Debit date.</li>
<li><strong>Stay up to date with new bills.</strong> HMRC expects current taxes to be paid on time while the plan runs.</li>
</ol>

<h3>What HMRC will ask you</h3>
<p>If you speak to HMRC rather than using the online service, GOV.UK says to be ready to explain:</p>
<ul>
<li>Whether you can pay any of the bill in full now.</li>
<li>How much you can afford to repay each month.</li>
<li>Any other taxes you owe to HMRC.</li>
<li>How much you earn and your usual monthly spending.</li>
<li>Any savings or investments you hold.</li>
</ul>
<p>Have figures written down before you call. Clear, realistic numbers make it easier for HMRC to agree a plan, and offering a monthly amount you cannot sustain only leads to a missed payment later. If your income comes from invoices, a list of what customers owe you and when they are due to pay is useful evidence of money coming in.</p>

<h3>Budget Payment Plan: paying before you fall behind</h3>
<p>If you are up to date with your last Self Assessment bill, a Budget Payment Plan lets you pay weekly or monthly by Direct Debit towards the next one. You set it up in your online account under Direct Debit, choose the amount and frequency, and can pause payments for up to 6 months. Payments use your 11-character reference: your 10-digit UTR followed by the letter K. Because it runs before the deadline, no late payment interest arises if the full bill is covered by 31 January.</p>

<h2>What a payment plan costs: worked example</h2>
<p>Time to Pay has no set-up fee, but interest applies. HMRC's late payment interest rate is the base rate plus 4 percentage points and, according to its <a href="https://www.gov.uk/government/publications/rates-and-allowances-hmrc-interest-rates-for-late-and-early-payments/rates-and-allowances-hmrc-interest-rates" target="_blank" rel="noopener noreferrer">published interest rates</a>, has been 7.75% a year since 9 January 2026.</p>
<p>Sam is a self-employed electrician who owes £6,000 of Self Assessment tax. He agrees a 12-month plan of £500 a month.</p>
<table>
<thead><tr><th>Step</th><th>Calculation</th><th>Result</th></tr></thead>
<tbody>
<tr><td>Monthly instalment (capital)</td><td>£6,000 / 12</td><td>£500</td></tr>
<tr><td>Balance at start and end</td><td>£6,000 falling to £0</td><td></td></tr>
<tr><td>Average balance (approx.)</td><td>(£6,000 + £500) / 2</td><td>£3,250</td></tr>
<tr><td>Interest for one year (approx.)</td><td>£3,250 x 7.75%</td><td>About £252</td></tr>
<tr><td>Total repaid (approx.)</td><td>£6,000 + £252</td><td>About £6,252</td></tr>
</tbody>
</table>
<p>This is a simplified estimate; HMRC calculates interest daily, and the actual figure depends on payment dates. If Sam pays a £1,500 lump sum first and then £375 a month for 12 months, the average balance falls to about £2,440, and the interest to roughly £189. Every pound paid early saves interest.</p>

<h2>Time to Pay vs other ways to fund a tax bill</h2>
<table>
<thead><tr><th>Option</th><th>Typical cost</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>HMRC Time to Pay</td><td>7.75% interest (as of 2026), no fee</td><td>Must keep up instalments and new bills</td></tr>
<tr><td>Budget Payment Plan</td><td>No interest if bill is paid by the deadline</td><td>Only before the bill is overdue</td></tr>
<tr><td>Business overdraft or loan</td><td>Varies by lender</td><td>Credit checks, fees, personal guarantees</td></tr>
<tr><td>Credit card</td><td>Often higher than HMRC interest</td><td>Debt can grow quickly if only minimum payments are made</td></tr>
<tr><td>Chasing your own unpaid invoices</td><td>Free</td><td>Takes time; start before the tax deadline</td></tr>
</tbody>
</table>
<p>The cheapest option is often the last one. Many tax arrears are really a cash flow problem caused by customers paying late. Our guide to <a href="/blog/overdue-invoice">handling an overdue invoice</a> and our summary of <a href="/blog/uk-late-payment-law-2026">UK late payment law</a> explain how to collect what you are owed, including statutory interest.</p>

<h3>Worked example: clearing arrears by collecting your own debts</h3>
<p>A design agency owes £7,200 in VAT and has £9,600 of unpaid customer invoices, three of them more than 60 days overdue. Before calling HMRC, the owner sends formal reminders and a <a href="/blog/final-notice-before-legal-action">final notice before legal action</a> on the oldest invoices and collects £5,400 within three weeks. The VAT arrears fall to £1,800 (£7,200 - £5,400), which the business clears in a three-month plan of £600 a month instead of a longer plan on the full amount. HMRC is more likely to agree a plan when you show you are already collecting money owed to you.</p>

<h2>What happens if you miss a payment</h2>
<p>According to GOV.UK, HMRC will contact you to ask why and will try to adjust or renegotiate the plan where possible. If you know a payment will fail, call before the due date. If a new tax bill arrives that you cannot pay, ask whether it can be added to your existing plan. If a plan collapses and nothing is agreed, HMRC can demand the full balance and move to enforcement, which may include debt collection agencies or, for companies, steps towards insolvency.</p>

<h3>If HMRC says no</h3>
<p>If HMRC decides the plan you offered is not affordable or that you could pay more, it will ask for the full amount. Do not ignore that letter. Ask what HMRC would accept, look again at savings or assets you could use, and consider talking to a free independent debt adviser, who can prepare a Standard Financial Statement and help you negotiate. Where a business has no realistic prospect of paying, an insolvency practitioner can explain the formal options.</p>

<h2>VAT, PAYE and company tax debts</h2>
<p>Business taxes follow the same principles but HMRC looks closely at whether the business is viable. For VAT, keep filing every return on time even if you cannot pay; see <a href="/blog/vat-penalties-uk">VAT penalties in the UK</a> for how points and late payment penalties work, and <a href="/blog/how-to-file-vat-return-uk">how to file a VAT return</a> for the process. For PAYE, remember that payroll taxes include deductions from employees' wages; <a href="/blog/employer-national-insurance-2026">employer National Insurance 2026/27</a> covers the employer side. If a company's debts are beyond rescue, our guide on <a href="/blog/how-to-close-a-limited-company">how to close a limited company</a> explains why striking off is not an option while HMRC is owed money.</p>

<h2>How to avoid needing an HMRC payment plan next year</h2>
<ul>
<li><strong>Set aside tax from every invoice.</strong> Move a fixed percentage into a separate account each time a customer pays.</li>
<li><strong>Invoice promptly and chase on time.</strong> Issue invoices the day work finishes in the <a href="/invoice-generator/uk">UK invoice generator</a>, with clear <a href="/blog/invoice-payment-terms">payment terms</a>.</li>
<li><strong>Use a Budget Payment Plan.</strong> Small weekly or monthly payments towards next January's bill spread the load.</li>
<li><strong>Forecast your cash.</strong> A simple <a href="/blog/cash-flow-forecast">cash flow forecast</a> shows the January and July spikes months in advance.</li>
<li><strong>Remember payments on account.</strong> The first January bill for a new business is often 150% of a year's tax.</li>
</ul>

<h3>Worked example: building a tax pot from invoices</h3>
<p>Imagine a consultant who invoices £4,000 a month and estimates that income tax and Class 4 National Insurance will take about 25% of profit. If expenses are low, moving £1,000 of each £4,000 payment into a separate account builds £12,000 over a year (£1,000 x 12). If the January bill, including the first payment on account, comes to £10,500, the pot covers it with £1,500 to spare for the July payment. Compare that with a £10,500 Time to Pay plan at 7.75%, where interest alone could run to several hundred pounds over a year. Small, automatic transfers are far cheaper than borrowing from HMRC.</p>

<h3>Reading HMRC letters carefully</h3>
<p>Once you are in a plan, HMRC may still send automated statements showing the full balance. These usually reflect the debt, not a demand to pay it all at once. Check each letter against your plan confirmation and call the relevant payment problems line if anything does not match, rather than assuming the plan has been cancelled.</p>

<h2>Use HMRC Time to Pay early, then fix the cash flow</h2>
<p>An HMRC Time to Pay arrangement is a practical way to clear a tax debt in manageable monthly payments, but it costs interest and depends on staying current with new bills. File on time, ask early, pay what you can up front, and then fix the cash flow that caused the problem. Getting paid faster starts with clear invoices: create yours in the <a href="/invoice-generator">free invoice generator</a> and track which are still unpaid. It is free, needs no account, and exports a print-ready PDF invoice.</p>
`,
  },
  {
    slug: "how-to-close-a-limited-company",
    title: "How to Close a Limited Company: Strike Off or MVL (2026)",
    description:
      "How to close a UK limited company: DS01 strike-off for £13 online, members' voluntary liquidation, insolvency options, final tax steps and the £25,000 rule.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "corporation-tax-uk",
      "sole-trader-vs-limited-company",
      "uk-dividend-tax-rates-2026",
      "how-to-file-vat-return-uk",
    ],
    faqs: [
      {
        q: "What is the cheapest way to close a limited company?",
        a: "For a solvent company, striking off is usually the cheapest route. You apply to Companies House using form DS01, which costs £13 online or £18 on paper according to GOV.UK. Before applying, you must stop trading, settle debts including tax, distribute remaining assets and send final accounts and a Company Tax Return to HMRC. Your accountant's fees for the final accounts are usually the largest cost.",
      },
      {
        q: "How long does it take to strike off a company?",
        a: "If the DS01 is accepted, Companies House publishes a notice in The Gazette. If nobody objects, the company is struck off once the two-month period in that notice ends, and a second notice confirms dissolution. Allow at least three months from application, plus the time needed beforehand to stop trading, settle tax and wait out the three-month no-trading rule.",
      },
      {
        q: "Can I strike off a company that owes money?",
        a: "You should not apply while the company owes debts it has not dealt with. Creditors, including HMRC, must be sent a copy of the application within 7 days and can object to the strike-off. A company that cannot pay its debts is insolvent, and the proper routes are a creditors' voluntary liquidation, administration or another insolvency procedure with a licensed insolvency practitioner.",
      },
      {
        q: "What is the £25,000 rule when closing a company?",
        a: "When a company is struck off, money distributed to shareholders can be treated as capital, taxed under Capital Gains Tax, as long as the total is not more than £25,000. GOV.UK says that if the amount is over £25,000, it is treated as income and subject to Income Tax, usually at dividend rates. Companies with more to distribute often use a members' voluntary liquidation instead.",
      },
      {
        q: "What is a members' voluntary liquidation (MVL)?",
        a: "An MVL is a formal way to close a solvent company. The directors sign a declaration of solvency stating the company can pay its debts, with interest, within 12 months. Shareholders then pass a winding-up resolution within 5 weeks and appoint a licensed insolvency practitioner as liquidator, who sells assets, pays creditors and distributes the rest. It costs more than a strike-off.",
      },
      {
        q: "What happens to money left in the company bank account after strike-off?",
        a: "Once the company is struck off, you lose access to its bank accounts, and any assets still in the company's name pass to the Crown. To recover them you would have to restore the company to the register. That is why every asset, including the bank balance, must be distributed or transferred before you apply to strike off.",
      },
      {
        q: "Do I need to file final accounts with Companies House when closing?",
        a: "GOV.UK says you must send final statutory accounts and a Company Tax Return to HMRC, stating they are final trading accounts, and pay all Corporation Tax due. You do not need to file those final accounts with Companies House for a voluntary strike-off. Make sure confirmation statements and accounts due before the application are up to date.",
      },
      {
        q: "Can I keep the company dormant instead of closing it?",
        a: "Yes. A company that has stopped trading can stay dormant for as long as you like, with no time limit. It stays on the register, so you must still file annual accounts and a confirmation statement with Companies House, and tell HMRC it is dormant. Dormancy suits owners who may restart, but closing is simpler if you will never use it again.",
      },
      {
        q: "How long must I keep records after closing a company?",
        a: "GOV.UK advises keeping business records for 7 years after the company is struck off. If the company employed people, also keep the employers' liability insurance documents. Store copies of invoices, bank statements, final accounts and tax returns somewhere you can access, because HMRC can still enquire into earlier periods and you may need to restore the company.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To close a solvent limited company, you either strike it off by filing form DS01 with Companies House (£13 online or £18 on paper as of 2026) or appoint a liquidator for a members' voluntary liquidation (MVL). Before a strike-off you must stop trading for 3 months, pay all debts and tax, file final accounts with HMRC, and distribute any remaining assets.</p>

<p>Whether you are retiring, going back to employment or returning to life as a sole trader, knowing how to close a limited company properly protects you from fines, tax surprises and the loss of money left in the business. This 2026 guide compares strike off and MVL, explains what to do if the company is insolvent, and walks through the final tax, invoicing and record-keeping steps. If you are weighing up the structures for your next venture, see <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a>.</p>

<p><strong>Note:</strong> This is general information, not legal or tax advice. Closing a company has tax consequences for the shareholders, so speak to an accountant or insolvency practitioner before you act.</p>

<h2>Your options for closing a limited company</h2>
<p>GOV.UK's guide to <a href="https://www.gov.uk/closing-a-limited-company" target="_blank" rel="noopener noreferrer">closing a limited company</a> splits the options by whether the company can pay its bills:</p>
<table>
<thead><tr><th>Route</th><th>Company status</th><th>Who runs it</th><th>Cost and notes</th></tr></thead>
<tbody>
<tr><td>Strike off (DS01)</td><td>Solvent</td><td>Directors</td><td>£13 online (£18 paper) Companies House fee; usually the cheapest route</td></tr>
<tr><td>Members' voluntary liquidation</td><td>Solvent</td><td>Licensed insolvency practitioner</td><td>Professional fees; suits larger reserves</td></tr>
<tr><td>Dormant company</td><td>Not trading</td><td>Directors</td><td>Annual accounts and confirmation statement still due</td></tr>
<tr><td>Creditors' voluntary liquidation</td><td>Insolvent</td><td>Licensed insolvency practitioner</td><td>Creditors' interests come first</td></tr>
<tr><td>Administration or compulsory liquidation</td><td>Insolvent</td><td>Administrator or court</td><td>Usually where creditors take action</td></tr>
</tbody>
</table>
<p>If the company cannot pay its debts, the directors' duty shifts to protecting creditors. Get advice from an insolvency practitioner or solicitor before doing anything else, and do not try to strike off to avoid creditors.</p>

<h3>Signs your company may be insolvent</h3>
<p>A company is generally insolvent if it cannot pay its debts as they fall due, or if its liabilities are greater than its assets. Warning signs include falling behind with HMRC, using new customer payments to clear old supplier bills, and directors lending money just to meet payroll. If any of these apply, stop and take advice before distributing anything to shareholders or applying to strike off. Directors who continue trading when they know the company cannot avoid insolvency can face personal consequences, and payments to themselves or connected people in that period can be challenged later by a liquidator. A short conversation with a licensed insolvency practitioner is usually free at the first stage and clarifies which route is open.</p>

<h2>How to strike off a limited company</h2>
<p>Striking off removes the company from the Companies House register. You can only use it if, in the last 3 months, the company has not traded or sold stock and has not changed its name, and it is not threatened with liquidation or subject to an arrangement with creditors.</p>

<h3>Step-by-step: closing down before the DS01</h3>
<ol>
<li><strong>Stop trading and finish work in progress.</strong> Complete outstanding jobs, then issue final invoices for everything delivered.</li>
<li><strong>Collect every debt owed to the company.</strong> Chase unpaid invoices firmly; our guide to an <a href="/blog/overdue-invoice">overdue invoice</a> covers the process. Anything uncollectable should be written off as a <a href="/blog/bad-debt-write-off">bad debt</a> in the final accounts.</li>
<li><strong>Deal with employees.</strong> Follow redundancy rules, pay final wages and tell HMRC you have stopped employing people.</li>
<li><strong>Close VAT.</strong> If registered, submit your final VAT return (see <a href="/blog/how-to-file-vat-return-uk">how to file a VAT return</a>) and deregister.</li>
<li><strong>Prepare final accounts and the Company Tax Return.</strong> Send them to HMRC marked as final trading accounts and pay all <a href="/blog/corporation-tax-uk">Corporation Tax</a>. A loss in the final year may be carried back under terminal loss relief.</li>
<li><strong>Pay every other creditor,</strong> including your accountant, suppliers and any director's loan owed by the company. If a director owes the company money, clear the <a href="/blog/directors-loan-account">director's loan account</a> first.</li>
<li><strong>Distribute the remaining assets</strong> to shareholders before applying. Anything left passes to the Crown.</li>
<li><strong>Wait out the 3-month rule</strong> from the last trade or name change.</li>
<li><strong>File the DS01</strong> online or by post. A majority of directors must sign, and you cannot pay the fee with a cheque from the company's own account.</li>
<li><strong>Send a copy within 7 days</strong> to shareholders, creditors, employees, pension fund managers or trustees, and any director who did not sign. Missing this can lead to a fine or prosecution.</li>
</ol>

<h3>What happens after you apply</h3>
<p>Companies House checks the form and, if it is correct, publishes a notice in The Gazette. If nobody objects, the company is struck off when the two-month notice period ends, and a second Gazette notice confirms it no longer exists. From that point you lose access to the company bank accounts. The full rules are on GOV.UK's page on <a href="https://www.gov.uk/strike-off-your-company-from-companies-register/close-down-your-company" target="_blank" rel="noopener noreferrer">closing down a company before striking off</a>.</p>

<h2>Tax on the money you take out: the £25,000 rule</h2>
<p>How the final distribution is taxed often decides which route to use. Under a strike-off, the amount distributed to shareholders can be treated as a capital distribution, taxed under Capital Gains Tax on your Self Assessment return, but only if it is not more than £25,000. GOV.UK says that above £25,000, it is treated as income and charged Income Tax, which in practice means <a href="/blog/uk-dividend-tax-rates-2026">dividend tax rates</a>. Business Asset Disposal Relief may reduce Capital Gains Tax for qualifying shareholders. In an MVL, distributions by the liquidator are generally treated as capital whatever the amount, subject to anti-avoidance rules if you start a similar business, which is why companies with larger reserves use that route.</p>

<h3>Worked example: is this company under £25,000?</h3>
<p>Kestrel Consulting Ltd has stopped trading. Its position before closure:</p>
<table>
<thead><tr><th>Item</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Bank balance after final invoices are paid</td><td>£31,200</td></tr>
<tr><td>Less Corporation Tax for the final period</td><td>-£4,800</td></tr>
<tr><td>Less final VAT return payment</td><td>-£1,350</td></tr>
<tr><td>Less accountant's final accounts fee</td><td>-£900</td></tr>
<tr><td>Less DS01 strike-off fee (online)</td><td>-£13</td></tr>
<tr><td><strong>Cash available to distribute</strong></td><td><strong>£24,137</strong></td></tr>
</tbody>
</table>
<p>£31,200 - £4,800 - £1,350 - £900 - £13 = £24,137, which is under £25,000. The owner can distribute it before applying to strike off and treat it as a capital distribution, subject to their own Capital Gains Tax position. If one more client had paid a final £1,500 invoice, the total would have been £25,637, over the limit, and the whole distribution would be taxed as income unless the company used an MVL. Run this calculation before you raise your last invoices.</p>

<h2>Members' voluntary liquidation (MVL)</h2>
<p>An MVL is a formal process for closing a solvent company. GOV.UK's guide to a <a href="https://www.gov.uk/liquidate-your-company/members-voluntary-liquidation" target="_blank" rel="noopener noreferrer">members' voluntary liquidation</a> sets out the steps:</p>
<ol>
<li>A majority of directors sign a declaration of solvency, in front of a solicitor or notary, stating the company can pay its debts with interest within no more than 12 months.</li>
<li>Shareholders hold a general meeting within 5 weeks of the declaration and pass a resolution for voluntary winding up.</li>
<li>They appoint an authorised insolvency practitioner as liquidator.</li>
<li>The resolution is advertised in The Gazette within 14 days.</li>
<li>The declaration of solvency is sent to Companies House within 15 days of the resolution.</li>
<li>The liquidator realises assets, pays creditors, distributes the surplus to shareholders and then dissolves the company.</li>
</ol>
<p>Liquidator fees make an MVL much more expensive than a £13 online strike-off, so it usually only pays off when the reserves are well above £25,000.</p>

<h3>When an MVL starts to make sense</h3>
<p>Consider a company with £80,000 of cash left after all tax and creditors are paid. Under a strike-off, the distribution is well over the £25,000 limit, so the whole £80,000 would be treated as income and taxed at dividend rates. Through an MVL, the liquidator's distribution would normally be treated as a capital distribution, potentially taxed under Capital Gains Tax with the possibility of Business Asset Disposal Relief. The difference in tax can easily exceed the liquidator's fees at that level, which is why accountants often suggest an MVL once reserves are comfortably above £25,000. Below the limit, the extra cost of an MVL is rarely justified. Ask your accountant to run both scenarios with your actual figures before deciding.</p>

<h2>Strike off vs MVL: which should you choose?</h2>
<table>
<thead><tr><th>Factor</th><th>Strike off</th><th>MVL</th></tr></thead>
<tbody>
<tr><td>Company must be solvent</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Official fee</td><td>£13 online, £18 paper</td><td>Insolvency practitioner fees</td></tr>
<tr><td>Who distributes assets</td><td>Directors, before applying</td><td>The liquidator</td></tr>
<tr><td>Capital treatment of distribution</td><td>Up to £25,000 only</td><td>Generally all of it</td></tr>
<tr><td>Formal check of debts</td><td>No; creditors can object</td><td>Yes, by the liquidator</td></tr>
<tr><td>Typical use</td><td>Small, simple companies</td><td>Companies with larger reserves or assets</td></tr>
</tbody>
</table>

<h2>A realistic timeline for a strike-off</h2>
<table>
<thead><tr><th>Stage</th><th>Typical timing</th><th>Key tasks</th></tr></thead>
<tbody>
<tr><td>Wind-down</td><td>Month 1</td><td>Finish jobs, issue final invoices, notify clients, stop new work</td></tr>
<tr><td>Collection and settlement</td><td>Months 1 to 3</td><td>Collect debts, pay suppliers, final payroll, final VAT return</td></tr>
<tr><td>Final accounts and tax</td><td>Months 2 to 4</td><td>Final statutory accounts and Company Tax Return to HMRC, pay Corporation Tax</td></tr>
<tr><td>Distribution</td><td>Month 4</td><td>Distribute remaining cash and assets to shareholders</td></tr>
<tr><td>Application</td><td>After 3 months with no trading</td><td>File DS01, send copies to interested parties within 7 days</td></tr>
<tr><td>Gazette notice</td><td>About 2 months</td><td>Wait for objections; respond to any queries</td></tr>
<tr><td>Dissolution</td><td>End of notice period</td><td>Second Gazette notice; company no longer exists</td></tr>
</tbody>
</table>
<p>The middle stages depend mostly on how quickly customers pay and how quickly your accountant can finalise the books. The three-month no-trading rule and the two-month Gazette notice are the fixed parts, so a clean strike-off rarely takes less than about five to six months from your last day of trading.</p>

<h3>If someone objects</h3>
<p>Creditors, HMRC and other interested parties can object during the Gazette notice period, which holds up the strike-off while the issue is resolved. The most common reason for an objection is unpaid tax or an unfiled return, which is another reason to settle HMRC completely before applying. If the company starts trading again or you decide to keep it after all, speak to Companies House about withdrawing the application rather than letting it run.</p>

<h3>Restoring a struck-off company</h3>
<p>If you discover money, property or a debt owed to the company after it has been dissolved, those assets belong to the Crown and the company would have to be restored to the register to reclaim them. Restoration takes time and usually professional help, costing far more than the original strike-off fee. A careful final reconciliation of the bank account, unpaid invoices and any refunds due from HMRC or suppliers avoids that problem.</p>

<h2>Dormant or closed: choosing for your situation</h2>
<p>Not every company that stops trading needs to be closed. Keeping a company dormant costs a little admin each year but preserves the company name and number if you think you might restart. Closing removes the annual filing burden and any risk of late filing penalties for accounts you forget about. As a rule of thumb, close the company if you are certain you will not use it again, and keep it dormant if a restart within a year or two is genuinely likely.</p>

<h2>Invoicing, records and loose ends</h2>
<ul>
<li><strong>Issue final invoices from the company,</strong> showing its full name, number and registered office, as set out in our guide to <a href="/blog/limited-company-invoice-requirements">limited company invoice requirements</a>. Ask clients to pay within a short term so the money arrives before you distribute.</li>
<li><strong>Cancel recurring billing and subscriptions</strong> and tell customers who to contact in future.</li>
<li><strong>Tell everyone else who needs to know,</strong> including your bank, insurers, landlord, software providers and any trade bodies, so accounts and policies are closed in the right order. Keep the company bank account open until the last payment has cleared and the final distribution has been made.</li>
<li><strong>Keep records for 7 years</strong> after strike-off, including invoices, bank statements and final accounts. See <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
<li><strong>Stay current with filings until the end.</strong> Overdue accounts or a missed <a href="/blog/confirmation-statement">confirmation statement</a> can delay or block the strike-off.</li>
<li><strong>If you will keep working as a sole trader,</strong> register for Self Assessment and start new invoices in your own name; our <a href="/blog/sole-trader-invoice-uk">sole trader invoice guide</a> shows the format.</li>
</ul>

<h2>Close your limited company cleanly</h2>
<p>Knowing how to close a limited company comes down to three decisions: is it solvent, how much is left to distribute, and have you settled every tax and creditor first. For most small companies with under £25,000 left, a DS01 strike-off is quick and cheap; above that, an MVL is often worth its fees. Start by sending your final invoices from the <a href="/invoice-generator">free invoice generator</a>, then collect, settle and distribute before you apply. Download the result as a PDF invoice you can email, print or upload to a client portal.</p>
`,
  },
];
