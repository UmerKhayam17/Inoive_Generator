import type { PostDraft } from "../blog";

export const UK_BUSINESS_2026_POSTS: PostDraft[] = [
  {
    slug: "how-to-set-up-a-limited-company",
    title: "How to Set Up a Limited Company in the UK: 2026 Steps",
    description:
      "How to set up a limited company in 2026: register with Companies House for £100, verify your identity, pick a SIC code, then sort tax, banking and invoices.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "sole-trader-vs-limited-company",
      "companies-house-identity-verification",
      "corporation-tax-uk",
      "business-bank-account-for-freelancers",
    ],
    faqs: [
      {
        q: "How much does it cost to set up a limited company in 2026?",
        a: "Registering directly with Companies House costs £100 online or through software, or £124 by post, as of 2026. A same-day software incorporation costs £156. These fees rose on 1 February 2026 from £50 online. On top of that, budget £50 a year for the online confirmation statement, and any optional extras such as a registered office service, a formation agent package or an accountant, which are priced by each provider.",
      },
      {
        q: "How long does it take to register a limited company?",
        a: "GOV.UK says an online application is usually registered within 24 hours, while a paper IN01 form takes 8 to 10 days. The main thing that slows people down in 2026 is identity verification: every director needs a Companies House personal code before the application can go through, so verify through GOV.UK One Login first and have each director's code ready before you start the form.",
      },
      {
        q: "Can I set up a limited company on my own?",
        a: "Yes. A private company limited by shares needs at least one director and at least one shareholder, and the same person can be both. A company secretary is optional. Many freelancers and contractors run one-person companies where they are the only director, the only shareholder and the only person with significant control. You still have to keep the company's money and records separate from your own.",
      },
      {
        q: "Do I need to verify my identity to set up a company?",
        a: "Yes. Since 18 November 2025 identity verification has been a legal requirement for new directors and people with significant control. You verify once through GOV.UK One Login, or through an Authorised Corporate Service Provider such as an accountant, and receive a personal code. The incorporation application asks for each director's code, so the company cannot be registered until every proposed director has verified.",
      },
      {
        q: "Can I use my home address as the registered office?",
        a: "You can, but the registered office address appears on the public register, so anyone can look it up. It must be an appropriate address in the same UK nation where the company is registered, where post can be received and acknowledged. Many home-based founders pay for a registered office service instead to keep their home address private. Your directors' service address can also be different from your home.",
      },
      {
        q: "Do I need to register for Corporation Tax separately?",
        a: "Usually not. When you register online through the combined GOV.UK service, you are normally set up for Corporation Tax at the same time unless the company is dormant. HMRC then sends a 10-digit Unique Taxpayer Reference, and you add Corporation Tax services to the company's business tax account. If you used a formation agent, check whether this step happened or whether you need to tell HMRC the company is active.",
      },
      {
        q: "Do I need a business bank account for a limited company?",
        a: "A limited company is a separate legal person, so in practice it needs its own bank account in the company's name. Mixing company money with your personal account makes the director's loan account messy, can create tax charges and makes your accounts much harder to prepare. Most UK banks and app-based providers open company accounts using the company number from Companies House.",
      },
      {
        q: "What has to go on a limited company invoice?",
        a: "Alongside the usual invoice details, a UK limited company should show its full registered name, and its business documents and website must show the company number, the part of the UK where it is registered and the registered office address. If the company is VAT registered, the invoice also needs the VAT number, VAT rate and VAT amount. A free invoice generator lets you save these details once and reuse them.",
      },
      {
        q: "Is a limited company better than being a sole trader?",
        a: "It depends on your profit, your risk and how much admin you want. A company gives limited liability and lets you combine a small salary with dividends, which can save tax once profits are healthy. It also adds annual accounts, a confirmation statement, Corporation Tax returns, payroll and identity verification. At lower profits, many people find sole trader status simpler and almost as tax efficient.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To set up a limited company in the UK in 2026, choose a name, appoint at least one director and shareholder, verify each director's identity with Companies House, then register online for £100 with a registered office address, a SIC code and articles of association. Online registration usually completes within 24 hours, and Corporation Tax registration normally happens at the same time.</p>

<p>Knowing how to set up a limited company is easy; doing it in the right order is where people trip up. The process itself is mostly online and fast, but the 2026 version has two changes that catch founders out: Companies House fees doubled in February, and every director now has to verify their identity before the company can be registered. This guide walks through each step, the real costs, what happens after incorporation, and how to send your first compliant invoice using the free <a href="/invoice-generator/uk">UK invoice generator</a>.</p>

<p>If you are still deciding whether incorporating is worth it at all, read our comparison of <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a> first. This article assumes you have decided to go ahead. It is general information, not legal or tax advice.</p>

<h2>What a limited company is (and what you are signing up for)</h2>

<p>A private company limited by shares is a separate legal person. It owns its own bank account, signs its own contracts, issues its own invoices and pays its own tax. Your personal liability is usually limited to what you paid, or agreed to pay, for your shares. In exchange, the company has to keep public records up to date at Companies House and file returns with HMRC every year.</p>

<p>The ongoing duties you take on from day one are:</p>
<ul>
<li>Filing annual accounts with Companies House (first accounts are due 21 months after registration, then 9 months after each financial year end).</li>
<li>Filing a <a href="/blog/confirmation-statement">confirmation statement</a> at least once every 12 months, with a £50 online fee.</li>
<li>Filing a Company Tax Return within 12 months of the end of each accounting period and paying <a href="/blog/corporation-tax-uk">Corporation Tax</a> 9 months and 1 day after it.</li>
<li>Running payroll if you pay yourself a salary, and keeping a <a href="/blog/directors-loan-account">director's loan account</a> for any other money you take out.</li>
</ul>

<h2>What you need before you register with Companies House</h2>

<p>Gather these before you open the form. Having them ready is the difference between a 20-minute application and an abandoned one.</p>

<table>
<thead>
<tr><th>Item</th><th>What it means</th><th>Tips</th></tr>
</thead>
<tbody>
<tr><td>Company name</td><td>Must be available and usually end in "Limited" or "Ltd"</td><td>Check the Companies House register and existing trade marks before you buy a domain or print anything</td></tr>
<tr><td>Registered office address</td><td>Official address on the public register, in the UK nation where you register</td><td>Use a registered office service if you do not want your home address public</td></tr>
<tr><td>At least one director</td><td>Person legally responsible for running the company</td><td>Each director needs a Companies House personal code from identity verification</td></tr>
<tr><td>At least one shareholder</td><td>Owner of the company's shares; can be the director</td><td>Decide the number of shares and their value (many one-person companies issue 100 shares of £1)</td></tr>
<tr><td>People with significant control (PSCs)</td><td>Anyone holding more than 25% of shares or voting rights, among other tests</td><td>In a one-person company, you are the PSC</td></tr>
<tr><td>SIC code</td><td>Standard Industrial Classification code that describes what the company does</td><td>Pick the closest match; you can update it later on the confirmation statement</td></tr>
<tr><td>Articles of association</td><td>The company's rulebook</td><td>Most small companies adopt the standard model articles</td></tr>
<tr><td>Registered email address</td><td>Email Companies House uses to contact the company</td><td>Not shown on the public register, but it must be monitored</td></tr>
</tbody>
</table>

<h2>How to set up a limited company: step by step</h2>

<p>Here is the order that works in 2026, based on the <a href="https://www.gov.uk/limited-company-formation/register-your-company" target="_blank" rel="noopener noreferrer">GOV.UK guidance on registering your company</a>.</p>

<ol>
<li><strong>Verify every director's identity.</strong> Each director verifies once through GOV.UK One Login, or through an Authorised Corporate Service Provider such as an accountant, and receives a personal code. Our guide to <a href="/blog/companies-house-identity-verification">Companies House identity verification</a> covers the documents and options. Do this first, because the application asks for each director's code.</li>
<li><strong>Choose and check your company name.</strong> Search the register for identical or too-similar names, avoid sensitive words that need permission, and check trade marks.</li>
<li><strong>Decide your structure.</strong> Choose limited by shares (the normal choice for a trading business), confirm directors, shareholders and share split, and identify your PSCs.</li>
<li><strong>Pick a registered office address and SIC code.</strong> The address must be able to receive post. The SIC code describes your main activity.</li>
<li><strong>Register online with Companies House.</strong> Use the GOV.UK "Register now" service, pay £100 by card, and create a Government Gateway user ID for the company (your personal ID cannot be used). The paper IN01 form costs £124 and takes 8 to 10 days.</li>
<li><strong>Receive your certificate of incorporation.</strong> It shows your company number and date of formation. Save it, because banks and clients will ask for it.</li>
<li><strong>Activate Corporation Tax.</strong> Registration normally sets this up. When your 10-digit UTR arrives, add Corporation Tax services to the company's business tax account.</li>
<li><strong>Set up PAYE if you will pay a salary.</strong> You can register for PAYE during incorporation, including if you are the only director being paid.</li>
<li><strong>Open a company bank account.</strong> Use the company number and certificate. Keep every business payment going through it.</li>
<li><strong>Update your invoices and website.</strong> Add the registered name, company number, place of registration and registered office, then start invoicing in the company's name.</li>
</ol>

<h2>Register with Companies House: fees and timing in 2026</h2>

<p>Companies House raised its fees on 1 February 2026. Digital incorporation went from £50 to £100, and the online confirmation statement from £34 to £50. The current figures from the <a href="https://www.gov.uk/government/publications/companies-house-fees/companies-house-fees" target="_blank" rel="noopener noreferrer">Companies House fees guidance</a> are below.</p>

<table>
<thead>
<tr><th>Filing</th><th>Online or software</th><th>Paper</th></tr>
</thead>
<tbody>
<tr><td>Incorporation</td><td>£100</td><td>£124</td></tr>
<tr><td>Same-day incorporation</td><td>£156 (software only)</td><td>Not available</td></tr>
<tr><td>Confirmation statement (per 12-month payment period)</td><td>£50</td><td>£110</td></tr>
<tr><td>Voluntary strike off (DS01)</td><td>£13</td><td>£18</td></tr>
</tbody>
</table>

<p>Formation agents often bundle the Companies House fee with extras like a registered office, a printed certificate or a bank introduction. Compare what you actually need: the statutory part of the bill is the £100.</p>

<h3>Direct registration vs a formation agent</h3>

<p>Registering directly through GOV.UK is the cheapest route and works well for a simple one-person company with standard articles. A formation agent or accountant earns its fee if you need non-standard share classes, several shareholders, a registered office and service address bundle, or help with identity verification as an Authorised Corporate Service Provider. Ask any agent whether they are registered as an ACSP, because Companies House is moving towards only accepting filings from verified agents.</p>

<h2>Worked example: first-year costs and your first invoice</h2>

<p>Priya, a freelance web designer, incorporates Priya Studio Ltd online in March 2026 and registers for VAT voluntarily. Her statutory costs for the first year are:</p>

<ul>
<li>Incorporation: £100</li>
<li>First confirmation statement (due within 14 days of the end of the first 12-month review period): £50</li>
<li>Total statutory fees: £100 + £50 = <strong>£150</strong></li>
</ul>

<p>Identity verification through GOV.UK One Login was free. Her accountant's fee and any registered office service are extra and vary by provider.</p>

<p>Her first client project is a website build at £2,500. In the <a href="/invoice-generator">free invoice generator</a> she enters Priya Studio Ltd as the business, adds her company number, registered office and VAT number in the business details, and sets the tax rate to 20%:</p>

<table>
<thead>
<tr><th>Line</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Website design and build</td><td>£2,500.00</td></tr>
<tr><td>VAT at 20%</td><td>£500.00</td></tr>
<tr><td>Total</td><td>£3,000.00</td></tr>
<tr><td>Amount paid (deposit received)</td><td>£1,000.00</td></tr>
<tr><td>Balance due</td><td>£2,000.00</td></tr>
</tbody>
</table>

<p>Because the deposit was paid into the company account, the £3,000 is company income. Priya does not touch it personally until she pays herself a salary or a dividend, which keeps her director's loan account clean. For the full list of mandatory fields, see our guide to <a href="/blog/limited-company-invoice-requirements">limited company invoice requirements</a>, and start a clean invoice number sequence for the new company rather than carrying on from any old sole trader numbering.</p>

<h2>Choosing shares, shareholders and articles</h2>

<p>Most one-person companies issue a small number of ordinary shares, often 1 or 100 at £1 each, all held by the founder. That is perfectly valid, but think ahead. If a partner, spouse or investor may join later, issuing 100 shares makes it easier to transfer a round percentage. Different share classes, such as A and B ordinary shares with separate dividend rights, give more flexibility but need custom articles and careful advice, because HMRC looks closely at dividend arrangements between family members.</p>

<p>The model articles of association suit most small companies: they set out how directors make decisions, how dividends are declared and how shares are transferred. If two or more people will own the company, a separate shareholders' agreement covering what happens if someone leaves, falls out or wants to sell is worth having. It is private, unlike the articles, which are filed on the public register.</p>

<h2>After incorporation: HMRC, payroll and VAT</h2>

<p>Your company now exists, but several tax registrations follow. Work through them in the first few weeks.</p>

<h3>Corporation Tax</h3>
<p>Online registration usually sets the company up for Corporation Tax. Your first accounting period starts on the date of incorporation. In 2026/27 the main rate is 25%, the small profits rate is 19% for profits up to £50,000, and marginal relief applies in between. Our <a href="/blog/corporation-tax-uk">Corporation Tax guide</a> works through the bands.</p>

<h3>PAYE and paying yourself</h3>
<p>Most owner-directors pay themselves a small salary through payroll and the rest as dividends. That needs a PAYE scheme and Real Time Information submissions. The split is a tax decision in its own right, covered in <a href="/blog/director-salary-vs-dividends">director salary vs dividends</a>, while the personal tax on dividends is explained in <a href="/blog/uk-dividend-tax-rates-2026">dividend tax rates for 2026</a>.</p>

<h3>VAT</h3>
<p>You must register for VAT if taxable turnover passes the threshold, and you can register voluntarily below it. Check the current figure and the rolling 12-month test in our <a href="/blog/vat-registration-threshold-uk">UK VAT registration threshold</a> guide. Once registered, the company is covered by the VAT penalty points system, so it is worth reading <a href="/blog/vat-penalties-uk">how VAT penalties work</a> before the first return is due.</p>

<h3>IR35 for contractors</h3>
<p>If you are setting up a company to contract through, check whether your engagements fall inside the off-payroll rules. Status depends on the working practices of each contract, not on the company structure, so a limited company does not take you outside IR35 by itself.</p>

<h2>Your first-year compliance calendar</h2>

<table>
<thead>
<tr><th>Deadline</th><th>Filed with</th><th>Timing</th></tr>
</thead>
<tbody>
<tr><td>First confirmation statement</td><td>Companies House</td><td>Within 14 days after the end of the first 12-month review period</td></tr>
<tr><td>First annual accounts</td><td>Companies House</td><td>21 months after registration</td></tr>
<tr><td>Corporation Tax payment</td><td>HMRC</td><td>9 months and 1 day after the end of the accounting period</td></tr>
<tr><td>Company Tax Return (CT600)</td><td>HMRC</td><td>12 months after the end of the accounting period</td></tr>
<tr><td>Payroll (RTI) submissions</td><td>HMRC</td><td>On or before each payday</td></tr>
<tr><td>VAT returns (if registered)</td><td>HMRC</td><td>Usually quarterly, one month and 7 days after each period</td></tr>
</tbody>
</table>

<p>Late accounts carry automatic Companies House penalties that start at £150 for a private company and rise to £1,500 if more than six months late, doubling if accounts are late two years in a row. Put every date in your calendar the day you incorporate.</p>

<h2>Common mistakes when setting up a limited company</h2>

<ul>
<li><strong>Leaving identity verification until the last minute.</strong> The application cannot be completed without each director's personal code.</li>
<li><strong>Using a home address as the registered office without thinking.</strong> It becomes public. Changing it later does not remove old filings from the register.</li>
<li><strong>Paying business costs from a personal account.</strong> It blurs the line between you and the company and makes year-end accounts harder. Set up proper bookkeeping from day one.</li>
<li><strong>Taking money out without a plan.</strong> Withdrawals that are not salary, dividends or expense repayments go to the director's loan account and can trigger a 33.75% Corporation Tax charge if not repaid in time.</li>
<li><strong>Invoicing in your own name.</strong> Once the company exists, contracts and invoices should be in the company's name, not yours as a sole trader.</li>
<li><strong>Forgetting the confirmation statement.</strong> It is due even if nothing has changed, and it now cannot be filed until all directors have verified.</li>
</ul>

<h3>Is a limited company the right choice?</h3>

<p>Incorporating usually makes sense when profits are high enough that the salary and dividend mix saves meaningful tax, when you want limited liability, or when clients only engage contractors through companies. It makes less sense for a small side income, where the extra filings, accountancy cost and payroll admin can outweigh the savings. If you change your mind later, a company can be closed through voluntary strike off or liquidation, as explained in <a href="/blog/how-to-close-a-limited-company">how to close a limited company</a>, but it is easier to choose carefully up front.</p>

<h2>Create your first limited company invoice</h2>

<p>Once you know how to set up a limited company and the certificate is in hand, the next job is getting paid. Open the <a href="/invoice-generator">invoice generator</a>, add your company name, number, registered office and VAT number, pick a professional design from the <a href="/invoice-templates/corporate">corporate invoice template</a>, and send your first invoice in minutes. Everything is free, and your details stay ready for the next one.</p>
`,
  },
  {
    slug: "directors-loan-account",
    title: "Director's Loan Account: Overdrawn DLA and s455 Tax (2026)",
    description:
      "Director's loan account rules for 2026: what goes in a DLA, when an overdrawn account triggers 33.75% s455 tax, the £10,000 benefit rule and how to clear it.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "corporation-tax-uk",
      "uk-dividend-tax-rates-2026",
      "how-to-pay-yourself-as-a-business-owner",
      "sole-trader-vs-limited-company",
    ],
    faqs: [
      {
        q: "What is a director's loan account?",
        a: "A director's loan account is the record of money moving between you and your company that is not salary, dividends or repayment of business expenses. If you take money out, the account becomes overdrawn and you owe the company. If you put money in or pay company costs personally, the account is in credit and the company owes you. The balance appears on the company's balance sheet in the annual accounts.",
      },
      {
        q: "What is the s455 tax rate?",
        a: "For loans made on or after 6 April 2022, the company pays Corporation Tax at 33.75% on a director's loan that is still outstanding 9 months after the end of the accounting period. This is often called s455 tax after the section of the Corporation Tax Act 2010 that creates it. Loans made before 6 April 2022 use 32.5%. The tax is temporary: the company can reclaim it once the loan is repaid, written off or released.",
      },
      {
        q: "How long do I have to repay an overdrawn director's loan?",
        a: "To avoid the s455 charge, repay the overdrawn balance within 9 months of the end of the company's accounting period. For a company with a 31 March 2026 year end, that means repaying by 31 December 2026. You still report the loan on form CT600A with the Company Tax Return, but no s455 tax is due if it was cleared in time and not quickly re-borrowed.",
      },
      {
        q: "Can I clear my director's loan with a dividend?",
        a: "Yes, if the company has enough distributable profits to declare a lawful dividend. The dividend is credited to your loan account and cancels the debt, but it is taxable income for you at the dividend rates of 10.75%, 35.75% or 39.35% in 2026/27 after the £500 allowance. Declare it properly with board minutes and a dividend voucher, and do not declare dividends the company cannot afford.",
      },
      {
        q: "What is bed and breakfasting a director's loan?",
        a: "It is repaying a loan just before the 9-month deadline and then borrowing the money straight back. HMRC rules block this. If a loan over £5,000 is repaid and a new loan of £5,000 or more is taken within 30 days, the repayment is matched against the new loan and s455 is still charged. A similar rule applies to loans over £15,000 where new borrowing was arranged when the repayment was made.",
      },
      {
        q: "Is a director's loan over £10,000 a benefit in kind?",
        a: "Yes. If the overdrawn balance exceeds £10,000 at any time in the tax year and you pay interest below HMRC's official rate, the cheap or free loan is a benefit in kind. It is reported on form P11D, you pay Income Tax on the benefit through Self Assessment, and the company pays Class 1A National Insurance at 15% on its value. Paying interest at the official rate avoids the benefit.",
      },
      {
        q: "When can the company reclaim s455 tax?",
        a: "The company can reclaim s455 once the loan has been repaid, written off or released, but HMRC will not repay it until 9 months and 1 day after the end of the accounting period in which that happened. Claims within 2 years go on the CT600A; later claims use form L2P. The claim must be made within 4 years, and any interest charged on late s455 is not refundable.",
      },
      {
        q: "What happens if a director's loan is written off?",
        a: "If the company writes off or releases the loan, the director pays Income Tax on the amount written off through Self Assessment, and the company must deduct Class 1 National Insurance through payroll as if it were earnings. The company can then reclaim any s455 tax it paid. Write-offs need proper documentation, so involve your accountant before agreeing one.",
      },
      {
        q: "Can I charge my company interest on money I lend it?",
        a: "Yes. If your director's loan account is in credit you can charge the company a commercial rate of interest. The interest is a deductible expense for the company. The company normally pays you the interest after deducting Income Tax at 20% and reports that tax quarterly on form CT61. You then report the gross interest on your Self Assessment tax return and get credit for the tax deducted.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A director's loan account (DLA) records money you take from or put into your company that is not salary, dividends or expense repayments. If the DLA is overdrawn at the year end and not repaid within 9 months, the company pays s455 Corporation Tax at 33.75% on the balance, which it can reclaim once the loan is repaid. Loans over £10,000 can also create a benefit in kind.</p>

<p>The director's loan account is where good intentions in a small company go to become tax bills. You pay a personal bill from the company card, move a few thousand pounds across before a dividend is declared, or cover a supplier from your own pocket, and each of those entries lands in the DLA. This guide explains how the account works, when an overdrawn DLA triggers s455 tax, how the £10,000 benefit rule works and the cleanest ways to clear the balance. If you are still setting up, start with <a href="/blog/how-to-set-up-a-limited-company">how to set up a limited company</a>, and keep the company's invoicing in the <a href="/invoice-generator">free invoice generator</a> so income is easy to trace.</p>

<p>This is general information based on HMRC guidance as of 2026, not tax advice. Director's loans have several overlapping rules, so check your own position with an accountant.</p>

<h2>What a director's loan account is</h2>

<p>A limited company's money belongs to the company, not to you. You can take it out in only a few ways that have a clear tax treatment: salary through payroll, dividends from post-tax profits, and reimbursement of genuine business expenses you paid personally. GOV.UK defines a director's loan as anything else you, or a close family member, take from the company that is not one of those and is not money you previously paid in.</p>

<p>The DLA is simply the running ledger of those movements:</p>
<ul>
<li><strong>Debits (you owe the company):</strong> cash withdrawals with no dividend declared, personal purchases on the company card, personal bills paid by the company, advances against future dividends.</li>
<li><strong>Credits (the company owes you):</strong> money you put in to fund the company, business costs you paid personally and have not been reimbursed, declared dividends or net salary you have not yet drawn.</li>
</ul>

<p>At the end of each accounting period the net balance goes on the balance sheet. A DLA in credit is usually harmless. An overdrawn DLA is where the tax rules bite.</p>

<h2>Overdrawn director's loan account: the s455 charge</h2>

<p>When the DLA is overdrawn at the end of the company's accounting period, the company must report the loan on form CT600A with its Company Tax Return. What happens next depends on whether the balance is repaid within 9 months of the year end.</p>

<table>
<thead>
<tr><th>Situation</th><th>What the company does</th><th>Tax effect</th></tr>
</thead>
<tbody>
<tr><td>Overdrawn balance repaid within 9 months of year end</td><td>Report it on CT600A</td><td>No s455 tax, provided the bed and breakfasting rules are not triggered</td></tr>
<tr><td>Balance still outstanding after 9 months</td><td>Report on CT600A and pay s455</td><td>33.75% of the outstanding amount (32.5% for loans made before 6 April 2022)</td></tr>
<tr><td>Repaid, then re-borrowed within 30 days (loans over £5,000)</td><td>Treated as not repaid</td><td>s455 at 33.75% on the original loan</td></tr>
<tr><td>Loan written off or released</td><td>Deduct Class 1 NI through payroll</td><td>Director pays Income Tax through Self Assessment; company can reclaim any s455</td></tr>
</tbody>
</table>

<p>The <a href="https://www.gov.uk/directors-loans/you-owe-your-company-money" target="_blank" rel="noopener noreferrer">GOV.UK guidance on owing your company money</a> sets these rules out. The key point is that s455 is a timing charge, not a permanent tax: the company gets it back after the loan is cleared. But it ties up a third of the loan in cash, and HMRC charges interest if s455 is paid late, which is not refundable.</p>

<h3>Why the 9-month window matters</h3>
<p>The s455 deadline lines up with the Corporation Tax payment date: 9 months and 1 day after the end of the accounting period. For a 31 March 2026 year end, a loan repaid by 31 December 2026 escapes s455, while anything still owed is added to the Corporation Tax due on 1 January 2027. See our <a href="/blog/corporation-tax-uk">Corporation Tax guide</a> for how the main bill is worked out.</p>

<h3>Bed and breakfasting rules</h3>
<p>HMRC anticipated the obvious trick of repaying just before the deadline and borrowing straight back. Two anti-avoidance rules apply:</p>
<ul>
<li><strong>The 30-day rule:</strong> if a loan over £5,000 is repaid and a new loan of £5,000 or more is taken within 30 days before or after the repayment, the repayment is matched to the new loan.</li>
<li><strong>The arrangements rule:</strong> if the loan is over £15,000 and, when it was repaid, there were arrangements to borrow again, the repayment is also ignored.</li>
</ul>
<p>Repayments by a dividend or bonus that is properly taxed on you are not caught by the 30-day rule, which is why clearing a DLA with a declared dividend is common.</p>

<h2>The £10,000 benefit in kind rule</h2>

<p>Separately from s455, a director's loan can be a taxable benefit. If the total owed exceeds £10,000 at any point in the tax year and you pay no interest, or interest below HMRC's official rate, the company must treat the loan as a benefit in kind:</p>
<ul>
<li>The company reports it on form P11D after the tax year.</li>
<li>You pay Income Tax on the benefit, broadly the interest you would have paid at the official rate minus anything you actually paid, through your <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return</a>.</li>
<li>The company pays Class 1A National Insurance, which is 15% in 2026/27, on the value of the benefit.</li>
</ul>
<p>HMRC publishes the official rate each year. You can avoid the benefit by paying the company interest at or above that rate, which then becomes taxable income in the company's hands.</p>

<h2>Worked example: an overdrawn DLA at the year end</h2>

<p>Sam is the sole director and shareholder of Sam Consulting Ltd, which has a 31 March year end. During 2025/26 Sam draws £2,000 a month from the company account for 9 months without declaring dividends: £18,000 in total. Sam pays the company no interest on the loan. At 31 March 2026 the DLA is £18,000 overdrawn.</p>

<p><strong>Option 1: do nothing.</strong> The balance is still outstanding on 1 January 2027, so s455 applies:</p>
<ul>
<li>s455 tax: £18,000 x 33.75% = <strong>£6,075</strong>, payable with the Corporation Tax due on 1 January 2027.</li>
<li>The loan also exceeded £10,000 during the year, so there is a benefit in kind to report on a P11D, plus Class 1A NI for the company.</li>
<li>If Sam repays in, say, June 2027, the company can reclaim the £6,075, but not until 9 months and 1 day after the end of the accounting period in which the repayment happened: 1 January 2029 for a year ending 31 March 2028.</li>
</ul>

<p><strong>Option 2: clear it with a dividend.</strong> The company has ample retained profits. Before 31 December 2026 the board declares an £18,000 dividend, credited to Sam's DLA, which brings the balance to zero. Sam's salary already uses the Personal Allowance and Sam is a basic rate taxpayer:</p>
<ul>
<li>Dividend allowance: £500 at 0%.</li>
<li>Remaining £17,500 at 10.75% = <strong>£1,881.25</strong> personal dividend tax.</li>
<li>No s455 is due, because the loan was cleared within 9 months.</li>
</ul>

<p>Option 2 costs real tax, £1,881.25, but it is final. Option 1 locks up £6,075 of company cash for roughly two years and still leaves Sam owing £18,000. In practice, the right answer depends on profits, your tax band and whether you could repay from personal funds. Our guide to <a href="/blog/uk-dividend-tax-rates-2026">dividend tax rates for 2026</a> shows how the bands apply above basic rate.</p>

<h2>How to clear an overdrawn director's loan account</h2>

<ol>
<li><strong>Check the balance now, not at the year end.</strong> Reconcile the DLA in your bookkeeping each month so you know what you owe. Our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> guide shows how to keep a clean ledger.</li>
<li><strong>Confirm distributable profits.</strong> A dividend is only lawful if the company has enough accumulated profits after tax. Draw up management accounts or a <a href="/blog/profit-and-loss-statement">profit and loss statement</a> first.</li>
<li><strong>Choose the repayment method.</strong> Repay from personal funds, declare a dividend, pay a bonus through payroll, or reimburse unclaimed business expenses you paid personally.</li>
<li><strong>Document it.</strong> Hold a board meeting, minute the dividend or bonus, and issue dividend vouchers. Record the journal against the DLA.</li>
<li><strong>Clear it within 9 months of the year end.</strong> Do not re-borrow £5,000 or more within 30 days.</li>
<li><strong>Report on CT600A.</strong> Even if no s455 is due, the year-end balance must be disclosed with the Company Tax Return.</li>
<li><strong>Change the habit.</strong> Pay yourself on a regular schedule through salary and planned dividends instead of ad hoc withdrawals.</li>
</ol>

<h2>When the company owes you: a DLA in credit</h2>

<p>A credit balance arises when you lend the company money, often at start-up, or pay business costs personally. The company can repay you at any time with no tax on the repayment itself, because it is your own money coming back. If you charge interest, the company deducts 20% Income Tax, pays it to HMRC quarterly on form CT61, and claims the interest as an expense. You declare the gross interest on your tax return.</p>

<p>If you pay company costs personally, keep receipts and record them in the DLA straight away. Unclaimed expenses are one of the easiest ways to reduce an overdrawn balance at year end, and they are often forgotten. Our guide to <a href="/blog/how-to-track-business-expenses">tracking business expenses</a> covers simple systems.</p>

<h2>Recording director's loan account entries correctly</h2>

<p>Most DLA problems are bookkeeping problems that turn into tax problems. A tidy ledger needs a date, a description and evidence for every entry. The table below shows how common transactions should be posted.</p>

<table>
<thead>
<tr><th>Transaction</th><th>DLA effect</th><th>Evidence to keep</th></tr>
</thead>
<tbody>
<tr><td>You transfer £3,000 from the company to your personal account with no dividend declared</td><td>Debit £3,000 (you owe more)</td><td>Bank statement and a note of the purpose</td></tr>
<tr><td>You pay a £240 software subscription for the company on your personal card</td><td>Credit £240 (company owes you)</td><td>Receipt or invoice in the company's name</td></tr>
<tr><td>The board declares a £5,000 dividend but you leave it in the company</td><td>Credit £5,000</td><td>Board minutes and dividend voucher</td></tr>
<tr><td>The company pays your £600 personal car insurance</td><td>Debit £600</td><td>Insurance invoice</td></tr>
<tr><td>You lend the company £10,000 to buy equipment</td><td>Credit £10,000</td><td>Loan note or board minute and bank statement</td></tr>
</tbody>
</table>

<p>Run through those five entries from a zero balance and the DLA would end £11,640 in credit (-£3,000 + £240 + £5,000 - £600 + £10,000), meaning the company owes you that amount and can repay it tax free. Reverse the order of a couple of them across a year end and the picture can look very different on the balance sheet date, which is why monthly reconciliation matters. If you are VAT registered, remember the VAT on business costs you pay personally can only be reclaimed with a valid VAT invoice addressed to the company.</p>

<h3>Close family members count too</h3>
<p>GOV.UK's definition covers money taken by a director's close family as well as by the director. A company paying a spouse's personal bills, or lending money to an adult child, can create a director's loan and the same s455 and benefit in kind consequences. Record these transactions in the DLA and treat them exactly like your own withdrawals.</p>

<h2>DLA mistakes that cost directors money</h2>

<ul>
<li><strong>Treating the company account as a personal wallet.</strong> Every personal payment becomes a loan entry.</li>
<li><strong>Declaring dividends without profits.</strong> An unlawful dividend can be treated as a loan that must be repaid, putting you back where you started.</li>
<li><strong>Ignoring the £10,000 line.</strong> Even a short-lived balance over £10,000 in the tax year can create a P11D benefit.</li>
<li><strong>Forgetting the s455 reclaim.</strong> Once the loan is repaid, diarise the reclaim date. HMRC will not refund it automatically.</li>
<li><strong>Not separating personal and business banking.</strong> A dedicated <a href="/blog/business-bank-account-for-freelancers">business bank account</a> makes the DLA far easier to track.</li>
<li><strong>Closing the company with an overdrawn DLA.</strong> On liquidation an outstanding loan is usually collected or written off and taxed. Read <a href="/blog/how-to-close-a-limited-company">how to close a limited company</a> before you start.</li>
</ul>

<h2>Keep the director's loan account clean from day one</h2>

<p>The best way to avoid s455 is to plan how you take money out: a regular salary, dividends declared from profits, and expenses reimbursed against receipts. Our article on the <a href="/blog/director-salary-vs-dividends">director salary vs dividends</a> split shows how to set that plan for 2026/27, and <a href="/blog/how-to-pay-yourself-as-a-business-owner">how to pay yourself as a business owner</a> gives the wider picture. A director's loan account that stays near zero is a sign the company's money is under control.</p>

<p>Clean income records make all of this easier. Raise every client invoice in the company's name with the <a href="/invoice-generator">free invoice generator</a>, number them with the <a href="/tools/invoice-number-generator">invoice number generator</a>, and you will always be able to show exactly what came in and what went out.</p>
`,
  },
  {
    slug: "director-salary-vs-dividends",
    title: "Director Salary vs Dividends 2026/27: The Optimal Split",
    description:
      "Salary vs dividends for UK directors in 2026/27: compare £5,000, £6,708 and £12,570 salaries, see when Employment Allowance changes the answer, with sums.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "uk-dividend-tax-rates-2026",
      "employer-national-insurance-2026",
      "corporation-tax-uk",
      "how-to-pay-yourself-as-a-business-owner",
    ],
    faqs: [
      {
        q: "What is the optimal director salary for 2026/27?",
        a: "For a single-director company that cannot claim Employment Allowance, a salary of £12,570 is usually the most tax-efficient starting point in 2026/27. It uses the full Personal Allowance, avoids employee National Insurance, and although it costs some employer NI, the salary and that NI both reduce Corporation Tax. If the company can claim Employment Allowance, £12,570 is typically still the baseline and sometimes a higher salary pays off.",
      },
      {
        q: "Is it better to take salary or dividends?",
        a: "For most owner-directors the answer is both: a modest salary up to around the Personal Allowance, then dividends for the rest. Salary is deductible for Corporation Tax but attracts National Insurance; dividends avoid National Insurance but are paid from profits that have already been taxed. The best split depends on your profit level, Corporation Tax band, other income and whether the company can claim Employment Allowance.",
      },
      {
        q: "Can a sole director claim Employment Allowance?",
        a: "No, not on their own. GOV.UK says that if a company has only one director, that director must not be the only employee liable for secondary Class 1 National Insurance. If you hire at least one other employee paid above the secondary threshold, or there are two directors both on payroll above it, the company can usually claim the £10,500 Employment Allowance for 2026/27, subject to the other eligibility rules.",
      },
      {
        q: "Why do some directors pay themselves £5,000 or £6,708?",
        a: "£5,000 is the 2026/27 secondary threshold, so a salary at that level means no employer National Insurance at all. £6,708 is the lower earnings limit, the point at which a year counts towards your State Pension without paying any NI yourself. These levels avoid NI completely or nearly so, but for most single-director companies they leave more tax to pay overall than a £12,570 salary.",
      },
      {
        q: "Do salary and employer NI reduce Corporation Tax?",
        a: "Yes. A director's salary and the employer National Insurance on it are business expenses, so they reduce the company's taxable profit. In 2026/27 that saves Corporation Tax at 19% for profits up to £50,000, at an effective rate of about 26.5% in the marginal relief band between £50,000 and £250,000, and at 25% above £250,000. Dividends get no such deduction.",
      },
      {
        q: "What are the dividend tax rates for 2026/27?",
        a: "For 2026/27 the first £500 of dividends is tax free under the dividend allowance. Above that, dividends are taxed at 10.75% in the basic rate band, 35.75% in the higher rate band and 39.35% in the additional rate band. The basic and higher rates rose by two percentage points from April 2026. Dividends covered by any unused Personal Allowance are also tax free.",
      },
      {
        q: "Should I pay myself above £12,570 in salary?",
        a: "Usually not if you are a single director without Employment Allowance, because each extra pound of salary costs 20% Income Tax, 8% employee NI and 15% employer NI. With Employment Allowance absorbing the employer NI and profits in the marginal relief or 25% band, a higher salary within the basic rate band can be competitive with dividends. Run the numbers with your accountant before changing payroll.",
      },
      {
        q: "Does salary vs dividends affect my pension and mortgage?",
        a: "Yes. A salary at or above the lower earnings limit of £6,708 earns a qualifying year for the State Pension. Employer pension contributions are another tax-efficient way to extract profit and are not covered by this salary and dividends comparison. Mortgage lenders often look at salary plus dividends, or company profits, over two or more years, so keep tidy accounts and tax returns.",
      },
      {
        q: "When do I pay tax on dividends?",
        a: "Dividend tax is not deducted at source. You report dividends on your Self Assessment tax return and pay by 31 January after the end of the tax year, so dividends taken in 2026/27 are taxed by 31 January 2028. If your Self Assessment bill is over £1,000 you may also have to make payments on account towards the following year, which can make the first bill feel much larger.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> For salary vs dividends in 2026/27, most single-director companies do best with a £12,570 salary and the rest of their profit taken as dividends. The salary uses your Personal Allowance with no employee NI, and the small employer NI bill is outweighed by the Corporation Tax it saves. If the company can claim Employment Allowance, the case for £12,570, or occasionally more, gets stronger.</p>

<p>Choosing the director salary vs dividends split is the single biggest tax decision most owner-directors make each year. The rules moved again in April 2026: dividend tax rates rose by two percentage points, while the employer National Insurance threshold stayed at £5,000 after last year's cut. This guide compares the three salary levels directors actually use, shows the full arithmetic on one profit figure, and explains when Employment Allowance changes the answer. For the dividend rates themselves, see <a href="/blog/uk-dividend-tax-rates-2026">dividend tax rates for 2026</a>, and for invoicing the income that funds all of this, use the free <a href="/invoice-generator/uk">UK invoice generator</a>.</p>

<p>This is general information for England, Wales and Northern Ireland as of 2026, not tax advice. Scottish income tax bands differ for salary, and your own figures may change the answer.</p>

<h2>How salary and dividends are taxed in 2026/27</h2>

<p>Salary and dividends reach you through completely different routes, which is why the mix matters.</p>

<table>
<thead>
<tr><th>Feature</th><th>Director's salary</th><th>Dividends</th></tr>
</thead>
<tbody>
<tr><td>Corporation Tax deductible?</td><td>Yes, including employer NI</td><td>No, paid from post-tax profit</td></tr>
<tr><td>Employer NI</td><td>15% above £5,000</td><td>None</td></tr>
<tr><td>Employee NI</td><td>8% from £12,570 to £50,270, then 2%</td><td>None</td></tr>
<tr><td>Income Tax</td><td>20%, 40%, 45%</td><td>10.75%, 35.75%, 39.35%</td></tr>
<tr><td>Tax-free band</td><td>Personal Allowance £12,570</td><td>£500 dividend allowance, plus any unused Personal Allowance</td></tr>
<tr><td>Counts for State Pension</td><td>Yes, from £6,708</td><td>No</td></tr>
<tr><td>Needs company profits?</td><td>No</td><td>Yes, distributable profits</td></tr>
<tr><td>How tax is paid</td><td>Through PAYE each payday</td><td>Through Self Assessment by 31 January</td></tr>
</tbody>
</table>

<p>The thresholds come from the <a href="https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" target="_blank" rel="noopener noreferrer">HMRC rates and thresholds for employers 2026 to 2027</a>, and the dividend rates from <a href="https://www.gov.uk/tax-on-dividends" target="_blank" rel="noopener noreferrer">GOV.UK tax on dividends</a>. The Corporation Tax side is covered in our <a href="/blog/corporation-tax-uk">Corporation Tax guide</a>: 19% up to £50,000 of profit, 25% above £250,000 and marginal relief in between.</p>

<h2>The three director salary levels for 2026/27</h2>

<h3>£5,000: the secondary threshold</h3>
<p>No employer NI, no employee NI and no Income Tax. It is the cheapest salary to run through payroll, but it leaves £7,570 of your Personal Allowance to be used by dividends, which have already suffered Corporation Tax. It also falls below the lower earnings limit, so on its own it does not earn a State Pension qualifying year.</p>

<h3>£6,708: the lower earnings limit</h3>
<p>Earns a qualifying year for the State Pension with no employee NI. Employer NI is 15% of the £1,708 above £5,000, which is £256.20. It is a halfway house, often chosen by directors who want the pension credit with minimal NI.</p>

<h3>£12,570: the Personal Allowance and primary threshold</h3>
<p>Uses the whole Personal Allowance and stays exactly at the primary threshold, so no employee NI and no Income Tax. Employer NI is 15% of £7,570, which is £1,135.50. Because the salary and employer NI are deductible, the company saves Corporation Tax on £13,705.50. For most single-director companies this is the optimal director salary.</p>

<h2>Worked example: £45,000 profit, single director</h2>

<p>Alex is the only director and shareholder of a consultancy. The company makes £45,000 profit before paying Alex anything. There are no other employees, so no Employment Allowance. Alex has no other income and takes all post-tax profit as dividends. Here is each option for 2026/27.</p>

<p><strong>Option A: £12,570 salary</strong></p>
<ul>
<li>Employer NI: (£12,570 - £5,000) x 15% = £1,135.50</li>
<li>Taxable profit: £45,000 - £12,570 - £1,135.50 = £31,294.50</li>
<li>Corporation Tax at 19%: £5,945.96</li>
<li>Dividends available: £31,294.50 - £5,945.96 = £25,348.54</li>
<li>Dividend tax: (£25,348.54 - £500) x 10.75% = £2,671.22</li>
<li>Take-home: £12,570 + £25,348.54 - £2,671.22 = <strong>£35,247.32</strong></li>
</ul>

<p><strong>Option B: £5,000 salary</strong></p>
<ul>
<li>Employer NI: £0</li>
<li>Taxable profit: £45,000 - £5,000 = £40,000</li>
<li>Corporation Tax at 19%: £7,600.00</li>
<li>Dividends available: £32,400.00</li>
<li>Dividend tax: (£32,400 - £7,570 unused Personal Allowance - £500) x 10.75% = £24,330 x 10.75% = £2,615.48</li>
<li>Take-home: £5,000 + £32,400 - £2,615.48 = <strong>£34,784.52</strong></li>
</ul>

<p><strong>Option C: £6,708 salary</strong></p>
<ul>
<li>Employer NI: (£6,708 - £5,000) x 15% = £256.20</li>
<li>Taxable profit: £45,000 - £6,708 - £256.20 = £38,035.80</li>
<li>Corporation Tax at 19%: £7,226.80</li>
<li>Dividends available: £30,809.00</li>
<li>Dividend tax: (£30,809 - £5,862 unused Personal Allowance - £500) x 10.75% = £24,447 x 10.75% = £2,628.05</li>
<li>Take-home: £6,708 + £30,809 - £2,628.05 = <strong>£34,888.95</strong></li>
</ul>

<table>
<thead>
<tr><th>Salary</th><th>Employer NI</th><th>Corporation Tax</th><th>Dividend tax</th><th>Total tax</th><th>Take-home</th></tr>
</thead>
<tbody>
<tr><td>£5,000</td><td>£0.00</td><td>£7,600.00</td><td>£2,615.48</td><td>£10,215.48</td><td>£34,784.52</td></tr>
<tr><td>£6,708</td><td>£256.20</td><td>£7,226.80</td><td>£2,628.05</td><td>£10,111.05</td><td>£34,888.95</td></tr>
<tr><td>£12,570</td><td>£1,135.50</td><td>£5,945.96</td><td>£2,671.22</td><td>£9,752.68</td><td>£35,247.32</td></tr>
</tbody>
</table>

<p>Each row adds up to £45,000 when you add total tax and take-home. The £12,570 salary leaves Alex £462.80 better off than £5,000, even though it is the only option with a meaningful employer NI bill. The reason is simple: each extra pound of salary between £5,000 and £12,570 costs 15% employer NI but saves 19% Corporation Tax on both the salary and the NI, and the salary itself is tax free in Alex's hands.</p>

<p>If profits were higher and fell in the marginal relief band, the Corporation Tax saving from salary would be larger still, which strengthens the case for £12,570.</p>

<h2>When Employment Allowance changes the answer</h2>

<p>Employment Allowance lets eligible employers reduce their employer NI bill by up to £10,500 in 2026/27. But according to the <a href="https://www.gov.uk/claim-employment-allowance/eligibility" target="_blank" rel="noopener noreferrer">GOV.UK Employment Allowance eligibility rules</a>, a company with one director cannot claim if that director is the only employee liable for employer NI. Two directors on payroll above £5,000, or a director plus a paid employee, usually unlocks it.</p>

<p>With the allowance, the £1,135.50 employer NI on a £12,570 salary is covered, so £12,570 becomes even more clearly right. The more interesting question is whether to go higher. Roughly, for a basic rate director with employer NI covered:</p>

<ul>
<li><strong>Extra £1 of salary:</strong> costs 20% Income Tax and 8% employee NI, leaving about 72p. It saves Corporation Tax.</li>
<li><strong>Same £1 as dividend at 19% Corporation Tax:</strong> 81p left after Corporation Tax, then 10.75% dividend tax, leaving about 72p. Broadly a tie.</li>
<li><strong>Same £1 as dividend in the marginal relief band (about 26.5%):</strong> about 73.5p after Corporation Tax, then 10.75%, leaving about 66p. Salary wins.</li>
</ul>

<p>So for companies with Employment Allowance and profits above £50,000, a salary above £12,570 within the basic rate band can be worth modelling. Without Employment Allowance, the 15% employer NI on top tips it firmly back towards dividends. Our <a href="/blog/employer-national-insurance-2026">employer National Insurance 2026/27</a> guide explains the allowance in detail.</p>

<h3>Worked example: two directors with Employment Allowance</h3>

<p>Chris and Jo each own 50% of a company and both work in it full time as directors. The company makes £60,000 profit before paying them, and because two directors are on payroll above £5,000, it can claim Employment Allowance. Each takes a £12,570 salary.</p>

<ul>
<li>Salaries: 2 x £12,570 = £25,140</li>
<li>Employer NI: 2 x £1,135.50 = £2,271, fully covered by Employment Allowance, so £0 to pay</li>
<li>Taxable profit: £60,000 - £25,140 = £34,860</li>
<li>Corporation Tax at 19%: £6,623.40</li>
<li>Dividends available: £28,236.60, which is £14,118.30 each</li>
<li>Dividend tax each: (£14,118.30 - £500) x 10.75% = £1,463.97</li>
<li>Take-home each: £12,570 + £14,118.30 - £1,463.97 = <strong>£25,224.33</strong></li>
<li>Combined: £50,448.66 take-home and £9,551.34 total tax, which adds back to £60,000</li>
</ul>

<p>Without Employment Allowance the company would pay the £2,271 of employer NI itself. After the Corporation Tax relief on that cost and the dividend tax on the smaller dividends, the couple would take home roughly £1,640 less. Both directors must genuinely work in the business: HMRC can challenge salaries or dividends that do not reflect the work done or the real ownership of the shares.</p>

<h2>Beyond salary and dividends: other ways to extract profit</h2>

<p>Salary and dividends are the main tools, but they are not the only ones. A director can also take value from the company in ways that never reach a payslip or a dividend voucher:</p>

<ul>
<li><strong>Employer pension contributions.</strong> Paid by the company directly into your pension, usually deductible for Corporation Tax and free of NI, within your annual allowance. They are often the most efficient route once dividends reach the higher rate band, but the money is locked away until pension age.</li>
<li><strong>Expense reimbursements.</strong> Genuine business costs you pay personally, such as business mileage at HMRC approved rates or equipment bought for the company, can be repaid tax free against receipts.</li>
<li><strong>Interest on money you lent the company.</strong> If your <a href="/blog/directors-loan-account">director's loan account</a> is in credit, the company can pay you a commercial rate of interest, which is deductible for the company and taxed on you as savings income.</li>
<li><strong>Use of the annual allowances.</strong> Your Personal Allowance, the £500 dividend allowance and, in some cases, the personal savings allowance each shelter a slice of income. A plan that uses all of them every year beats one that bunches income into a single year.</li>
</ul>

<p>Each of these has its own rules, and an accountant can show how they combine with your salary and dividend plan. The point to take away is that the optimal director salary is only the first decision, not the last.</p>

<h2>How to set your salary and dividend plan</h2>

<ol>
<li><strong>Forecast company profit for the year.</strong> Use the invoices you have raised in the <a href="/invoice-generator">invoice generator</a> and your expenses to date to estimate profit before director pay. A simple <a href="/blog/cash-flow-forecast">cash flow forecast</a> helps.</li>
<li><strong>Check Employment Allowance eligibility.</strong> One director and no other staff usually means no allowance.</li>
<li><strong>Set the salary.</strong> Most single-director companies choose £12,570 a year, which is £1,047.50 a month. Run it through a PAYE scheme with RTI submissions.</li>
<li><strong>Estimate Corporation Tax.</strong> Deduct salary, employer NI and other expenses, then apply 19%, 25% or marginal relief.</li>
<li><strong>Decide dividends.</strong> Only from distributable post-tax profits. Watch the £50,270 point where dividends move into the 35.75% higher rate.</li>
<li><strong>Document every dividend.</strong> Board minutes and a dividend voucher for each payment. Money taken without paperwork lands in your <a href="/blog/directors-loan-account">director's loan account</a>.</li>
<li><strong>Save for personal tax.</strong> Set aside dividend tax for 31 January, plus any <a href="/blog/payments-on-account-hmrc">payments on account</a>.</li>
</ol>

<h2>Paying the salary through payroll</h2>

<p>A director's salary is employment income, so it has to go through a PAYE scheme even if you are the only person on payroll. That means registering the company as an employer with HMRC, running payroll software, and sending a Full Payment Submission on or before each payday. With a £12,570 salary there is usually no Income Tax or employee NI to deduct, but the submissions are still required, and the company pays the employer NI to HMRC each month or quarter unless Employment Allowance covers it.</p>

<p>Directors are treated differently from other employees for National Insurance: NI is normally worked out on an annual earnings period rather than pay period by pay period, which matters if you pay yourself unevenly. Many directors simply pay an equal monthly amount of £1,047.50 to keep things predictable. If your payroll software asks whether the employee is a director, answer yes so the annual method is applied.</p>

<p>Check whether auto-enrolment applies. A sole director with no employment contract is usually exempt from workplace pension duties, but once you take on staff you will need to assess them. Your accountant or payroll provider can confirm the position.</p>

<h2>Higher profits: watch the £50,270 and £100,000 lines</h2>

<p>Once salary plus dividends exceed £50,270, extra dividends are taxed at 35.75% instead of 10.75%. At that point many directors leave profits in the company, pay employer pension contributions or time dividends across tax years. Above £100,000 of total income, the Personal Allowance is withdrawn at £1 for every £2, which creates a high effective rate. Each of these is a planning conversation for your accountant, but knowing where the lines sit helps you decide when to stop drawing.</p>

<h2>Common salary vs dividends mistakes</h2>

<ul>
<li><strong>Copying an old rule of thumb.</strong> Advice built on 2024/25 thresholds (a £9,100 secondary threshold and 13.8% employer NI) no longer fits 2026/27.</li>
<li><strong>Paying dividends without profits.</strong> Illegal dividends can be reclassified as loans.</li>
<li><strong>Forgetting the dividend tax bill.</strong> Nothing is deducted at source, so the bill arrives at once in January.</li>
<li><strong>Ignoring IR35.</strong> If a contract is inside the off-payroll rules, the fee-payer deducts tax and the salary and dividend plan changes. See our <a href="/blog/ir35-off-payroll-rules">IR35 guide</a>.</li>
<li><strong>Assuming a limited company always wins.</strong> At modest profits, the gap between a company and self-employment can be small. Our <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a> comparison shows where the line falls, and <a href="/blog/class-4-national-insurance">Class 4 National Insurance</a> covers the self-employed side.</li>
</ul>

<h2>Fund the plan with steady invoicing</h2>

<p>Every salary vs dividends calculation starts with profit, and profit starts with invoices that get paid on time. Raise your company invoices with the <a href="/invoice-generator">free invoice generator</a>, choose a clean design such as the <a href="/invoice-templates/minimal">minimal invoice template</a>, and keep a record of every payment so year-end figures are ready for your accountant.</p>
`,
  },
  {
    slug: "vat-penalties-uk",
    title: "VAT Penalties UK: Late Submission Points and Payment Fines",
    description:
      "VAT penalties in the UK explained: how late submission points lead to £200 fines, the 3% + 3% and 10% late payment penalties, interest at 7.75% and appeals.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "how-to-file-vat-return-uk",
      "vat-registration-threshold-uk",
      "vat-cash-accounting-scheme",
      "vat-invoice-guide",
    ],
    faqs: [
      {
        q: "What is the penalty for a late VAT return?",
        a: "For VAT periods starting on or after 1 January 2023, a late VAT return earns one penalty point rather than an immediate fine. You only pay a £200 penalty once you reach the points threshold for your filing frequency: 2 points for annual filers, 4 for quarterly and 5 for monthly. After that, every further late return while you are at the threshold brings another £200 penalty.",
      },
      {
        q: "How much is the VAT late payment penalty?",
        a: "There is no penalty if you pay within 15 days of the due date. From day 16, the first penalty is 3% of the VAT still unpaid at day 15. If it is still unpaid at day 30, a further 3% of the balance at day 30 is added. From day 31 a second penalty runs daily at an annual rate of 10% on the outstanding balance until it is paid.",
      },
      {
        q: "What interest does HMRC charge on late VAT?",
        a: "Late payment interest runs from the day after the payment was due until it is paid in full, on top of any penalties. Since 6 April 2025 it has been set at the Bank of England base rate plus 4%. According to HMRC's interest rates page, the rate for VAT was 7.75% from 9 January 2026. It moves with base rate, so check HMRC's current figure before you calculate.",
      },
      {
        q: "Do nil VAT returns count for penalty points?",
        a: "Yes. HMRC guidance says nil returns and repayment returns are included in the points system. If a nil return or a return showing a refund due is filed late, you still receive a penalty point. Many small businesses are caught out by this, especially in quiet periods, so file every return on time even when there is nothing to pay.",
      },
      {
        q: "How long do VAT penalty points last?",
        a: "Below the threshold, a point normally expires after 24 months, counted to the last day of the month (25 months if the deadline was the last day of a month). At the threshold, points only reset when you submit every return on time for a period of compliance, 12 months for quarterly filers, 24 months for annual and 6 months for monthly, and have filed all outstanding returns for the previous 24 months.",
      },
      {
        q: "Can I avoid VAT late payment penalties with a payment plan?",
        a: "Yes. HMRC says that if you ask for a Time to Pay arrangement on or before day 15 and it is agreed, you will not be charged the first late payment penalty, and proposing a plan by day 30 can reduce the penalties. Interest still applies, and if the arrangement is later cancelled, HMRC can charge the penalties as if it never existed. Contact HMRC as early as possible.",
      },
      {
        q: "Can I appeal a VAT penalty?",
        a: "Yes. You can ask HMRC for a review or appeal to the tax tribunal if you think a point or penalty is wrong, or if you had a reasonable excuse such as serious illness, a bereavement, an unexpected system failure or a fire or flood. You generally have 30 days from the date of the penalty notice. Lack of money and relying on someone else are not usually accepted on their own.",
      },
      {
        q: "Is the old VAT default surcharge still used?",
        a: "Not for current periods. The default surcharge was replaced for VAT periods starting on or after 1 January 2023 by the penalty points system for late returns and separate late payment penalties and interest. You may still see the old regime on letters for older periods, but anything you file in 2026 falls under the new rules.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> VAT penalties in the UK come in two parts. Late returns earn penalty points, and a £200 penalty is charged once you hit the threshold: 2 points for annual, 4 for quarterly and 5 for monthly filers. Late payments attract 3% of the unpaid VAT from day 16, another 3% at day 30, then 10% a year daily from day 31, plus interest at base rate plus 4%.</p>

<p>HMRC replaced the old default surcharge with a two-part system for VAT periods starting on or after 1 January 2023, and in 2025 it increased the late payment penalty rates. Understanding how VAT penalties work now matters for every VAT-registered sole trader and company, because the points build quietly and the charges compound. This guide explains late submission points, late payment penalties, interest, a full worked example and how to get points removed. If your VAT starts on the invoice, the <a href="/invoice-generator/uk">UK invoice generator</a> calculates it correctly so the return figures match.</p>

<p>This is general information based on HMRC guidance as of 2026, not tax advice.</p>

<h2>How VAT penalties work in 2026: the two systems</h2>

<p>Think of it as two separate meters. One measures whether your return arrived on time; the other measures whether your money did.</p>

<table>
<thead>
<tr><th>Problem</th><th>What happens</th><th>Charge</th></tr>
</thead>
<tbody>
<tr><td>Return submitted late</td><td>One late submission point per late return</td><td>£200 once you reach the threshold, then £200 for each further late return</td></tr>
<tr><td>VAT paid 1 to 15 days late</td><td>No penalty</td><td>Late payment interest only</td></tr>
<tr><td>VAT paid 16 to 30 days late</td><td>First late payment penalty</td><td>3% of VAT unpaid at day 15</td></tr>
<tr><td>VAT still unpaid at day 30</td><td>First penalty increases</td><td>Further 3% of VAT unpaid at day 30</td></tr>
<tr><td>VAT unpaid from day 31</td><td>Second late payment penalty</td><td>10% a year, charged daily on the balance</td></tr>
<tr><td>Any late payment</td><td>Late payment interest</td><td>Base rate plus 4%, from the day after the due date</td></tr>
</tbody>
</table>

<h2>Late submission penalty points</h2>

<p>Each VAT return you submit late earns one point. Points alone cost nothing. The penalty comes when you reach the threshold set by how often you file, as set out in <a href="https://www.gov.uk/guidance/penalty-points-and-penalties-if-you-submit-your-vat-return-late" target="_blank" rel="noopener noreferrer">HMRC guidance on late submission penalty points</a>:</p>

<table>
<thead>
<tr><th>Filing frequency</th><th>Points threshold</th><th>Period of compliance to reset</th></tr>
</thead>
<tbody>
<tr><td>Annual</td><td>2 points</td><td>24 months (2 returns)</td></tr>
<tr><td>Quarterly</td><td>4 points</td><td>12 months (4 returns)</td></tr>
<tr><td>Monthly</td><td>5 points</td><td>6 months (6 returns)</td></tr>
</tbody>
</table>

<p>Once you reach the threshold you receive a £200 penalty, and each further late return while you remain at the threshold brings another £200. You do not collect more points beyond the threshold. Nil returns and repayment returns count, so a quiet quarter is no excuse to file late.</p>

<h3>How points expire</h3>
<p>Below the threshold, each point expires on its own: on the last day of the month 24 months after the month the late return was due (25 months if the deadline fell on the last day of a month). So a single late return two years ago will usually have dropped off already.</p>

<h3>How points reset at the threshold</h3>
<p>Once you are at the threshold, points no longer expire individually. Both conditions must be met:</p>
<ol>
<li>Submit every return on time for a full period of compliance (12 months for quarterly filers).</li>
<li>Submit all outstanding returns due in the previous 24 months.</li>
</ol>
<p>Your points then reset to zero on the first day both conditions are met. Our guide on <a href="/blog/how-to-file-vat-return-uk">how to file a VAT return in the UK</a> covers the Making Tax Digital steps that keep you on time.</p>

<h2>Late payment penalties</h2>

<p>The late payment side is percentage-based and grows the longer the VAT stays unpaid. HMRC's <a href="https://www.gov.uk/guidance/how-late-payment-penalties-work-if-you-pay-vat-late" target="_blank" rel="noopener noreferrer">guidance on how VAT late payment penalties work</a> sets out the current rates, which were increased in 2025:</p>

<ul>
<li><strong>Days 1 to 15:</strong> no penalty, but interest runs.</li>
<li><strong>Day 16:</strong> first penalty, 3% of the VAT unpaid at day 15.</li>
<li><strong>Day 30:</strong> another 3% of the VAT still unpaid at day 30 is added to the first penalty.</li>
<li><strong>Day 31 onwards:</strong> second penalty, charged daily at 10% a year on the outstanding balance until you pay in full.</li>
</ul>

<p>Paying part of the bill quickly helps, because each penalty is based on the balance outstanding at that point, not the original amount.</p>

<h3>Late payment interest</h3>
<p>Interest is separate from penalties and starts the day after the due date. From 6 April 2025 HMRC set it at base rate plus 4%. HMRC's interest rates page shows the VAT late payment rate at 7.75% from 9 January 2026. Because it moves with base rate, check HMRC's current figure for your period. HMRC also pays repayment interest if it is late refunding you.</p>

<h2>Worked example: a quarterly VAT bill paid 40 days late</h2>

<p>Jordan runs a design studio that files VAT quarterly. The return for the quarter to 30 June 2026 shows £8,000 VAT due on 7 August 2026. The return is filed on time, but cash is tight and the VAT is paid in full 40 days late.</p>

<ul>
<li><strong>First penalty, day 15 part:</strong> £8,000 x 3% = £240.00</li>
<li><strong>First penalty, day 30 part:</strong> still £8,000 unpaid, so £8,000 x 3% = £240.00</li>
<li><strong>Second penalty (days 31 to 40, 10 days):</strong> £8,000 x 10% x 10 / 365 = £21.92</li>
<li><strong>Total penalties:</strong> £240.00 + £240.00 + £21.92 = £501.92</li>
<li><strong>Late payment interest (40 days at 7.75%):</strong> £8,000 x 7.75% x 40 / 365 = £67.95</li>
<li><strong>Total extra cost:</strong> £501.92 + £67.95 = <strong>£569.87</strong></li>
</ul>

<p>If Jordan had paid by day 15, the only cost would have been about 15 days of interest: £8,000 x 7.75% x 15 / 365 = £25.48. If Jordan had called HMRC before day 15 and agreed a payment plan, the first penalty would not have applied either. Our guide to an <a href="/blog/hmrc-time-to-pay">HMRC Time to Pay arrangement</a> explains how to set one up.</p>

<h3>Adding late returns to the picture</h3>
<p>Suppose Jordan also filed late returns for the quarters to 30 September 2025, 31 December 2025, 31 March 2026 and 30 June 2026. That is four points, the quarterly threshold, so the fourth late return triggers a £200 penalty. Another late return for the quarter to 30 September 2026 would add another £200. To reset, Jordan needs four consecutive on-time quarterly returns and no outstanding returns.</p>

<h3>Worked example: paying part of the bill early</h3>
<p>Now suppose Jordan pays £5,000 of the £8,000 on day 10 and the remaining £3,000 on day 25. Only the £3,000 still unpaid at day 15 counts for the first penalty, and because everything is paid before day 30, the second 3% never applies:</p>
<ul>
<li>First penalty: £3,000 x 3% = £90.00</li>
<li>Interest on £8,000 for 10 days: £8,000 x 7.75% x 10 / 365 = £16.99</li>
<li>Interest on £3,000 for a further 15 days: £3,000 x 7.75% x 15 / 365 = £9.55</li>
<li>Total cost: £90.00 + £16.99 + £9.55 = <strong>£116.54</strong></li>
</ul>
<p>That is less than a quarter of the £569.87 cost of paying the full amount 40 days late. Paying whatever you can, as early as you can, is the simplest way to shrink VAT late payment penalties.</p>

<h2>VAT penalties for errors and inaccuracies</h2>

<p>Points and late payment penalties are about timing. Getting the figures wrong is a separate issue. If a VAT return understates what you owe, HMRC can charge an inaccuracy penalty based on the extra tax due, and the percentage depends on the behaviour behind the error: careless, deliberate, or deliberate and concealed. Penalties are usually reduced substantially if you tell HMRC about the error yourself before it finds it, and a genuine mistake made despite taking reasonable care should not attract a penalty at all.</p>

<p>Small errors below HMRC's error correction threshold can usually be fixed on your next VAT return. Larger ones, or deliberate errors, must be disclosed to HMRC separately. Either way, interest runs on any VAT paid late as a result of the error.</p>

<p>The best defence is accurate source records. Common causes of VAT errors in small businesses include:</p>
<ul>
<li>Charging 20% on a supply that should be zero-rated, exempt or under the reverse charge. Our guide to <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a> explains the difference.</li>
<li>Reclaiming input VAT without a valid VAT invoice, or on costs that are partly personal.</li>
<li>Recording an invoice in the wrong VAT period, or twice.</li>
<li>Working out VAT on a gross figure as if it were net. Our <a href="/blog/how-to-calculate-vat">how to calculate VAT</a> guide shows both formulas.</li>
</ul>

<h2>How to avoid VAT penalties</h2>

<ol>
<li><strong>Diarise every deadline.</strong> For most quarterly filers, the return and payment are due one month and 7 days after the end of the VAT period.</li>
<li><strong>Pay by Direct Debit.</strong> HMRC collects a few working days after the deadline, so you cannot forget. Our <a href="/blog/uk-direct-debit">guide to Direct Debit in the UK</a> explains how it works.</li>
<li><strong>Ring-fence VAT as you invoice.</strong> Raise every invoice in the <a href="/invoice-generator">invoice generator</a> with the VAT shown as a separate line, then move the VAT element of each payment into a separate account so it is there when the bill arrives. The <a href="/tools/sales-tax-calculator">tax calculator</a> splits gross amounts quickly.</li>
<li><strong>Consider cash accounting.</strong> If clients pay slowly, the <a href="/blog/vat-cash-accounting-scheme">VAT cash accounting scheme</a> means you pay VAT when you are paid, not when you invoice.</li>
<li><strong>File on time even if you cannot pay.</strong> Points and payment penalties are separate. Filing on time keeps points away while you sort out the money.</li>
<li><strong>Call HMRC before day 15.</strong> A Time to Pay arrangement agreed early avoids the first penalty.</li>
<li><strong>Chase your own late payers.</strong> Many VAT problems start with clients who pay late. Use <a href="/blog/payment-reminder-emails">payment reminder emails</a> and consider <a href="/blog/statutory-late-payment-interest">statutory late payment interest</a> on overdue invoices.</li>
</ol>

<h3>VAT deadlines at a glance</h3>
<table>
<thead>
<tr><th>Scheme</th><th>Return due</th><th>Payment due</th></tr>
</thead>
<tbody>
<tr><td>Standard quarterly</td><td>1 month and 7 days after the period end</td><td>Same day, cleared funds</td></tr>
<tr><td>Monthly</td><td>1 month and 7 days after the period end</td><td>Same day, cleared funds</td></tr>
<tr><td>Annual accounting scheme</td><td>2 months after the end of the accounting year</td><td>Interim payments during the year, balance with the return</td></tr>
<tr><td>Payments on account (very large businesses)</td><td>As standard quarterly</td><td>Monthly interim payments plus balance</td></tr>
</tbody>
</table>
<p>For a quarter ending 30 September 2026, both the return and the payment are due by 7 November 2026. Whatever scheme you use, check the exact date in your HMRC online account, because it is the date shown there that the penalty clocks run from.</p>

<h3>What to do if you are already at the threshold</h3>
<ol>
<li>Log in to your HMRC online account and check how many points you have and when each was given.</li>
<li>File any outstanding returns from the last 24 months, even nil ones.</li>
<li>Set up reminders or a Direct Debit so the next run of returns is on time.</li>
<li>Count forward your period of compliance: for quarterly filers, four on-time returns in a row.</li>
<li>Check your account again after the fourth return to confirm the points have reset to zero.</li>
</ol>

<h2>Appeals and reasonable excuse</h2>

<p>If you think a point or penalty is wrong, or you had a reasonable excuse, you can ask HMRC for a review or appeal to the tax tribunal, usually within 30 days of the penalty notice. HMRC typically accepts excuses such as serious illness, the death of a close relative, unexpected failure of IT systems or a fire or flood that stopped you filing. Insufficient funds, or relying on an agent who let you down, are not usually enough on their own. Keep evidence and file as soon as the excuse ends.</p>

<p>If a successful appeal removes a late submission point, any £200 penalty linked to it is cancelled too.</p>

<h2>VAT penalties compared with other HMRC penalties</h2>

<p>Making Tax Digital for Income Tax uses a similar points-based approach for late quarterly updates and returns, explained in our <a href="/blog/making-tax-digital-income-tax">Making Tax Digital for Income Tax</a> guide. Self Assessment still uses fixed and daily penalties, covered in <a href="/blog/self-assessment-late-penalty">Self Assessment late filing penalties</a>. Companies also face Companies House penalties for late accounts, which are completely separate from HMRC.</p>

<h2>Keep VAT penalties off your books</h2>

<p>Most VAT penalties trace back to two things: returns filed late and VAT spent before it was paid over. Accurate invoices fix the first half of both problems. Create VAT invoices in the <a href="/invoice-generator">free invoice generator</a> with the correct 20% or 5% rate, check our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> for the required fields, and set aside the VAT from every payment as it lands.</p>
`,
  },
  {
    slug: "confirmation-statement",
    title: "Confirmation Statement: 2026 Companies House Fee and Deadline",
    description:
      "Confirmation statement guide for 2026: the £50 Companies House fee, the 14-day deadline, what to check, director ID verification and how to file online.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United Kingdom",
    related: [
      "companies-house-identity-verification",
      "sole-trader-vs-limited-company",
      "corporation-tax-uk",
      "year-end-invoicing-checklist",
    ],
    faqs: [
      {
        q: "What is a confirmation statement?",
        a: "A confirmation statement is the yearly filing, form CS01, in which a UK company confirms to Companies House that the information on the public register is correct. It replaced the annual return. You check details such as directors, people with significant control, registered office, shareholders, SIC code and statement of capital, report any changes, and confirm the company's intended future activities are lawful. It must be filed even if nothing has changed.",
      },
      {
        q: "How much is the confirmation statement fee in 2026?",
        a: "Since 1 February 2026 the Companies House fee is £50 to file online or through software, and £110 for a paper CS01. Before that the online fee was £34. The fee covers a 12-month payment period, so if you file more than one confirmation statement within the same period, you only pay once. A new fee becomes due at the next anniversary of that payment period.",
      },
      {
        q: "When is my confirmation statement due?",
        a: "You must file at least once every 12 months. The first review period runs for 12 months from incorporation, and later ones run 12 months from the confirmation date on your last statement. You have 14 days after the end of the review period to file. You can see your exact confirmation date and due date on your company's page on the Companies House register.",
      },
      {
        q: "What happens if I do not file my confirmation statement?",
        a: "Failing to file is a criminal offence for the company and its officers. GOV.UK says you can be fined up to £5,000 and the company may be struck off the register, which means its bank accounts can be frozen and its assets can pass to the Crown. There is no automatic late filing penalty as there is for accounts, but Companies House can start strike-off action quickly.",
      },
      {
        q: "Can I file a confirmation statement early?",
        a: "Yes. You do not have to wait until the review period ends. If you file early, you choose a new confirmation date and your next 12-month review period starts the day after it. Filing early can be useful for aligning the date with your year end, but it does not change your fee payment period, and an early filing inside a new payment period triggers the £50 fee.",
      },
      {
        q: "Do directors need to verify their identity before filing?",
        a: "Yes. Companies House guidance says all directors must have verified their identity before the confirmation statement is filed. You enter each director's Companies House personal code and tick a statement confirming they are verified. Companies House will not accept the statement until every director has verified, so do this well ahead of your due date, especially if a director is overseas or slow to respond.",
      },
      {
        q: "Do I still file a confirmation statement if nothing has changed?",
        a: "Yes. The confirmation statement is required every year whether or not anything has changed. If there are no changes, you simply confirm the existing information, confirm the lawful purpose statement, provide or confirm your registered email address, give directors' personal codes and pay the fee. The online filing usually takes only a few minutes when the records are up to date.",
      },
      {
        q: "Is the confirmation statement the same as annual accounts?",
        a: "No. The confirmation statement confirms who runs and owns the company and where it is based, and it contains no financial figures beyond the statement of capital. Annual accounts are a separate filing, due 9 months after the financial year end for a private company. Your Company Tax Return goes to HMRC, not Companies House. They have different deadlines, so diarise all three.",
      },
      {
        q: "Does a dormant company need a confirmation statement?",
        a: "Yes. A dormant company that is still on the register must file a confirmation statement every year and pay the same fee, as well as filing dormant accounts. If the company has no future, applying for voluntary strike off with form DS01 costs £13 online in 2026, which can be cheaper over time than keeping a dormant company alive.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A confirmation statement (form CS01) is the yearly filing that confirms your company's details on the Companies House register are correct. In 2026 the Companies House fee is £50 online or £110 on paper, and the deadline is 14 days after the end of your 12-month review period. Every director must have verified their identity before the statement can be filed.</p>

<p>The confirmation statement used to be a two-minute job most directors barely noticed. In 2026 it carries more weight. The fee rose by almost half on 1 February, and since identity verification became law on 18 November 2025, it is the filing that tells Companies House whether your directors have verified. This guide explains what the confirmation statement covers, the deadline, the fee, how to file it step by step and what goes wrong. If you have just incorporated, read <a href="/blog/how-to-set-up-a-limited-company">how to set up a limited company</a> first, and keep your company details consistent on every invoice from the <a href="/invoice-generator">free invoice generator</a>.</p>

<p>This is general information as of 2026, not legal advice.</p>

<h2>What a confirmation statement is</h2>

<p>Every UK company must confirm, at least once every 12 months, that the information Companies House holds about it is accurate. That information sits on the public register, where clients, suppliers, lenders and fraud investigators look it up. The confirmation statement is the moment you either confirm it or correct it.</p>

<p>It covers:</p>
<ul>
<li>Directors and any company secretary</li>
<li>People with significant control (PSCs)</li>
<li>Registered office address and registered email address</li>
<li>SIC code describing what the company does</li>
<li>Statement of capital (shares issued and their value)</li>
<li>Shareholder information and whether shares are traded</li>
<li>A statement that the company's intended future activities are lawful</li>
<li>Each director's Companies House personal code and a verification statement</li>
</ul>

<p>It does not include accounts, profit or tax figures. Those are separate filings with separate deadlines.</p>

<h2>Confirmation statement fee: what Companies House charges in 2026</h2>

<p>Companies House raised its fees from 1 February 2026. The current amounts in the <a href="https://www.gov.uk/government/publications/companies-house-fees/companies-house-fees" target="_blank" rel="noopener noreferrer">Companies House fees guidance</a>:</p>

<table>
<thead>
<tr><th>Filing method</th><th>Fee before 1 February 2026</th><th>Fee from 1 February 2026</th></tr>
</thead>
<tbody>
<tr><td>Online (WebFiling) or software</td><td>£34</td><td>£50</td></tr>
<tr><td>Paper CS01</td><td>£62</td><td>£110</td></tr>
</tbody>
</table>

<p>The fee covers a 12-month payment period that is separate from your review period. If you file more than one confirmation statement within the same payment period, for example to record a change of shareholders mid-year, you only pay once. A new £50 becomes due when the next payment period starts.</p>

<h3>Online vs paper over five years</h3>
<p>Filing online at £50 a year costs £250 over five years. Filing on paper at £110 a year costs £550, an extra £300, and paper filings are slower to process. Unless you have a specific reason, file online.</p>

<h2>Confirmation statement deadline</h2>

<p>The <a href="https://www.gov.uk/guidance/confirmation-statement-guidance" target="_blank" rel="noopener noreferrer">Companies House confirmation statement guidance</a> sets out the timing:</p>
<ul>
<li><strong>First statement:</strong> the review period runs for 12 months from incorporation.</li>
<li><strong>Later statements:</strong> each review period runs for 12 months from the confirmation date on your last statement.</li>
<li><strong>Deadline:</strong> you have 14 days after the end of the review period to file.</li>
<li><strong>Filing early:</strong> allowed at any time, but you then choose a new confirmation date and the next review period starts the day after it.</li>
</ul>

<p>Your exact confirmation date and due date are shown on your company's page on the Companies House register, and Companies House sends a reminder to the registered email address.</p>

<h2>Worked example: deadline and costs for a small company</h2>

<p>Lena's company, Lena Bakes Ltd, has a confirmation date of 14 June 2026.</p>
<ul>
<li>Review period ends: 14 June 2026</li>
<li>Filing deadline: 14 June + 14 days = <strong>28 June 2026</strong></li>
<li>Fee: £50 online</li>
<li>Next confirmation date if she files on time without changing it: 14 June 2027, due by 28 June 2027</li>
</ul>

<p>In March 2026 Lena brought in a business partner, who bought 40 of the company's 100 shares, and was appointed as a second director. Before filing, Lena:</p>
<ol>
<li>Files the director appointment, which needed the new director's personal code.</li>
<li>Updates the PSC register, because the partner now holds more than 25% of the shares.</li>
<li>Records the share transfer in the shareholder section of the confirmation statement.</li>
</ol>

<p>Lena's total Companies House cost for the year is the single £50 confirmation statement fee. Over five years of on-time online filing, that is 5 x £50 = £250.</p>

<h2>How to file a confirmation statement online</h2>

<ol>
<li><strong>Check identity verification for every director.</strong> Each director needs a Companies House personal code. Companies House will not accept the statement until all directors have verified. Our <a href="/blog/companies-house-identity-verification">Companies House identity verification</a> guide explains how.</li>
<li><strong>Review the public register.</strong> Look up your company and check every detail: officers, PSCs, registered office, SIC code and capital.</li>
<li><strong>File changes first.</strong> Report changes to directors, secretary, PSCs, registered office and registered email address before you file the statement.</li>
<li><strong>Sign in to Companies House.</strong> Use your Companies House account and the company's authentication code.</li>
<li><strong>Confirm or update the additional information.</strong> SIC code, statement of capital, shareholder details and share trading status can be updated within the statement.</li>
<li><strong>Give directors' personal codes and the verification statement.</strong> Enter each code and tick the confirmation.</li>
<li><strong>Confirm the lawful purpose statement.</strong> Confirm the company's intended future activities are lawful.</li>
<li><strong>Pay the £50 fee and submit.</strong> Keep the acceptance email with your company records.</li>
</ol>

<h3>What to check before you file</h3>

<table>
<thead>
<tr><th>Item</th><th>Common problem</th><th>Fix</th></tr>
</thead>
<tbody>
<tr><td>Directors</td><td>Former director still listed</td><td>File the termination before the statement</td></tr>
<tr><td>Identity verification</td><td>One director has not verified</td><td>Get them verified and obtain their personal code</td></tr>
<tr><td>PSCs</td><td>Share changes not reflected</td><td>Update the PSC register and file the change</td></tr>
<tr><td>Registered office</td><td>Old address or one that cannot receive post</td><td>File a change of address</td></tr>
<tr><td>Registered email</td><td>Not provided or not monitored</td><td>Add an email someone checks regularly</td></tr>
<tr><td>SIC code</td><td>No longer matches the business</td><td>Update it in the statement</td></tr>
<tr><td>Statement of capital</td><td>New shares issued but not recorded</td><td>File the allotment and update capital</td></tr>
</tbody>
</table>

<h2>Directors, PSCs and who files the confirmation statement</h2>

<p>The PSC information is the part of the confirmation statement most likely to be out of date. A person with significant control is broadly anyone who holds more than 25% of the shares or voting rights, can appoint or remove a majority of the board, or otherwise has significant influence or control over the company. In a one-person company, that is simply you. In companies with several owners, it shifts every time shares are issued, sold or gifted.</p>

<p>Companies House guidance says PSC changes must be reported before you file the confirmation statement, and PSCs must also verify their identity and provide a personal code. The timing depends on whether the PSC is also a director:</p>
<ul>
<li>A PSC who is also a director provides their code as a director on the confirmation statement, and separately for the PSC role within 14 days.</li>
<li>A PSC who is not a director provides their code in the window Companies House sets for them, linked to their month of birth.</li>
<li>A new PSC added after identity verification began provides their code when they are added, or shortly after.</li>
</ul>
<p>The detailed rules are covered in our <a href="/blog/companies-house-identity-verification">identity verification guide</a>. The practical point is that a confirmation statement cannot be treated as a box-ticking exercise any more: it is the checkpoint where gaps in verification become visible.</p>

<h3>Who can file the confirmation statement</h3>

<p>Any director or the company secretary can file it, using the company's authentication code. Many small companies leave it to their accountant or formation agent. Companies House is moving to a system in which third parties who file on behalf of companies must register as Authorised Corporate Service Providers, and that registration itself requires identity checks. If someone else files for you, ask whether they are registered and confirm who will pay the £50 fee.</p>

<p>Whoever files, the directors remain legally responsible. If an agent misses the deadline, the offence is still the company's and the officers'. Keep the confirmation date in your own calendar, check that the filing has been accepted, and look at the register after it has been processed to make sure the information shown is right.</p>

<h3>Changing your confirmation date</h3>
<p>Some companies prefer to align the confirmation statement with their financial year end so all the annual paperwork happens together. You can do this by filing early: when you file before the end of the review period, you choose a new confirmation date, and the next review period runs for 12 months from the day after it. Remember that the payment period for the fee does not move with it, so an early statement filed in a new payment period still costs £50.</p>

<h3>Confirmation statement vs annual return</h3>
<p>The confirmation statement replaced the old annual return in 2016. The main differences are that you no longer have to resubmit all the information each year, only confirm it or report changes, and that it now includes PSC information, the lawful purpose statement, the registered email address and, since November 2025, directors' identity verification. If you see references to an annual return in older paperwork, they mean the same yearly filing obligation.</p>

<h2>What happens if you miss the deadline</h2>

<p>There is no automatic late filing penalty for a confirmation statement, unlike late accounts. But it is a criminal offence not to file, GOV.UK says the company can be fined up to £5,000, and Companies House can begin striking the company off the register. A struck-off company's bank accounts can be frozen and its assets pass to the Crown, which is far more expensive to fix than a £50 filing. Restoring a struck-off company administratively costs £341 on paper, before any professional fees.</p>

<p>If you realise you have missed the deadline, file immediately: the sooner the register is up to date, the less likely it is that strike-off action progresses. If you have received a letter warning that Companies House intends to strike the company off, file the overdue statement straight away and contact Companies House to explain. Where the delay is caused by a director who has not yet verified their identity, deal with that first, because the statement cannot be accepted without it.</p>

<p>Late statements also look bad on the register. Clients and lenders who check your company see the overdue status, which can affect credit decisions.</p>

<h2>How the confirmation statement fits your annual calendar</h2>

<table>
<thead>
<tr><th>Filing</th><th>Who receives it</th><th>Typical deadline</th></tr>
</thead>
<tbody>
<tr><td>Confirmation statement</td><td>Companies House</td><td>14 days after the review period ends</td></tr>
<tr><td>Annual accounts</td><td>Companies House</td><td>9 months after the financial year end</td></tr>
<tr><td>Corporation Tax payment</td><td>HMRC</td><td>9 months and 1 day after the accounting period ends</td></tr>
<tr><td>Company Tax Return</td><td>HMRC</td><td>12 months after the accounting period ends</td></tr>
<tr><td>Directors' Self Assessment</td><td>HMRC</td><td>31 January after the tax year</td></tr>
</tbody>
</table>

<p>Our <a href="/blog/corporation-tax-uk">Corporation Tax guide</a> covers the HMRC side, and the <a href="/blog/year-end-invoicing-checklist">year-end invoicing checklist</a> helps you get the income records straight before your accountant prepares the accounts. Directors taking dividends should also check <a href="/blog/uk-dividend-tax-rates-2026">dividend tax rates for 2026</a>.</p>

<h2>Common confirmation statement questions from small companies</h2>

<h3>Do sole traders file one?</h3>
<p>No. Only companies and LLPs registered at Companies House file confirmation statements. A sole trader has no Companies House record. If you are weighing the extra admin, see <a href="/blog/sole-trader-vs-limited-company">sole trader vs limited company</a>.</p>

<h3>What if the company is no longer needed?</h3>
<p>A dormant company still has to file every year and pay the fee. If you do not need it, voluntary strike off with form DS01 costs £13 online. Our guide to <a href="/blog/how-to-close-a-limited-company">closing a limited company</a> explains when strike off is appropriate and when liquidation is better.</p>

<h3>Do I need to update my invoices after filing?</h3>
<p>Only if something changed. If the registered office or company name changed, update your invoices, website and email signatures, because limited company documents must show the registered name, number, place of registration and registered office. See <a href="/blog/limited-company-invoice-requirements">limited company invoice requirements</a> for the full list.</p>

<h2>Keep your company records and invoices in step</h2>

<p>The confirmation statement is the one filing that checks your company's public identity every year, so treat it as a yearly tidy-up: verify directors, update the register, pay the £50 and file early in the 14-day window. Then make sure the same details appear on every invoice. Save your company name, number and registered office in the <a href="/invoice-generator">invoice generator</a>, pick a design from our <a href="/invoice-templates">invoice templates</a>, and your paperwork will match the register every time.</p>
`,
  },
];
