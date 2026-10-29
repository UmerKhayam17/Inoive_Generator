import type { PostDraft } from "../blog";

export const US_TAX_2026_G_POSTS: PostDraft[] = [
  {
    slug: "s-corp-election-form-2553",
    title: "Form 2553: How to Make an S Corp Election (2026 Guide)",
    description:
      "Form 2553 explained: who can elect S corp status, the March 15 deadline, shareholder consent, late election relief and how reasonable salary changes your taxes.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["s-corp-vs-c-corp", "s-corp-vs-llc", "llc-tax-rate", "director-salary-vs-dividends"],
    faqs: [
      {
        q: "Can a single-member LLC file Form 2553?",
        a: "Yes. A single-member LLC that meets the S corporation requirements can elect S corp status by filing Form 2553. The IRS treats a timely filed Form 2553 as also covering the election to be taxed as a corporation, so most LLCs do not need a separate Form 8832. After the election, the LLC files Form 1120-S each year, pays the owner a salary through payroll and issues the owner a Schedule K-1 for the remaining profit.",
      },
      {
        q: "How long does the IRS take to approve Form 2553?",
        a: "The IRS generally says to expect an acceptance or rejection letter within about 60 days of filing. The acceptance letter, often called a CP261 notice, confirms the effective date of the election. If you hear nothing after roughly two to three months, call the IRS business line to check the status rather than refiling, since duplicate forms can slow processing and cause confusion.",
      },
      {
        q: "Can I file Form 2553 online?",
        a: "Form 2553 has traditionally been filed by mail or fax to the IRS service center listed in the form instructions for your state, and many owners still use fax because it gives a dated confirmation. Check the current instructions on irs.gov before you file, because the IRS has been expanding electronic options. Keep the fax confirmation or a certified mail receipt as proof of a timely filing.",
      },
      {
        q: "What happens if I miss the Form 2553 deadline?",
        a: "A late election normally takes effect the following tax year. However, Revenue Procedure 2013-30 offers relief if you file within 3 years and 75 days of the intended effective date, can show reasonable cause and have reported income consistently with S corp status. You write the relief statement at the top of the form and explain why the filing was late. No user fee applies when this procedure fits.",
      },
      {
        q: "Do all shareholders have to sign Form 2553?",
        a: "Yes. Every person who is a shareholder at the time the election is made must consent, and in community property states a spouse who has an interest in the shares must consent too. Shareholders can sign in the consent column on the form or on a separate attached statement. A missing consent is one of the most common reasons the IRS rejects or delays an S corp election.",
      },
      {
        q: "Is an S corp election worth it for a small business?",
        a: "It often starts to make sense once net profit is well above what a reasonable salary for your role would be, because only the salary portion carries Social Security and Medicare tax. Against that saving you must weigh payroll costs, a separate Form 1120-S return, state fees and extra bookkeeping. Many advisers run the numbers once profit reaches a level where the tax saving clearly exceeds those added costs.",
      },
      {
        q: "Can I revoke an S corp election later?",
        a: "Yes. Shareholders holding more than half of the shares can revoke the election by filing a statement with the IRS service center. A revocation filed by the 15th day of the third month of the tax year can take effect for that year. After a revocation, the business generally cannot re-elect S corp status for five years without IRS consent, so treat the decision as a multi-year commitment.",
      },
      {
        q: "Does an S corp election change how I invoice clients?",
        a: "Not much. Clients still pay the business, not you personally, so invoices should show the legal business name, address and EIN where requested on a Form W-9. What changes is how money leaves the business: you take a salary through payroll and distributions on top. Keep invoice numbering continuous across the switch so your income records match the returns.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Form 2553 is the IRS form an eligible corporation or LLC files to be taxed as an S corporation. For the election to apply to a calendar tax year, file it no later than 2 months and 15 days after the year begins (March 15 for most businesses), with every shareholder's signed consent.</p>

<p>The S corp election is one of the most talked-about tax moves for profitable freelancers and small businesses, mainly because it can reduce self-employment tax. It also adds payroll, a separate business return and stricter rules about how you pay yourself. This guide walks through who qualifies, how to fill out Form 2553 line by line, the deadlines for the 2027 tax year, late election relief, and a worked example of the potential savings. It is general information, not tax or legal advice.</p>

<h2>What is Form 2553 and what does an S corp election do?</h2>
<p>Form 2553, Election by a Small Business Corporation, tells the IRS that your business wants to be taxed under Subchapter S of the Internal Revenue Code. An S corporation is not a separate type of company under state law. It is a tax status that a corporation or an LLC can choose.</p>
<p>Once the election is in place, the business generally pays no federal income tax itself. Profits and losses pass through to the owners on Schedule K-1, and each owner reports them on their personal Form 1040. The difference from a regular sole proprietorship or default LLC is how the owner's pay is treated:</p>
<ul>
<li><strong>Salary:</strong> owner-employees who work in the business must receive reasonable compensation through payroll, with Social Security and Medicare (FICA) taxes withheld and matched.</li>
<li><strong>Distributions:</strong> remaining profit can be paid out as distributions, which are not subject to FICA or self-employment tax.</li>
</ul>
<p>That split is where the potential saving comes from. Without the election, a single-member LLC owner pays <a href="/blog/self-employment-tax">self-employment tax</a> of 15.3% on nearly all net earnings up to the Social Security wage base. For a side-by-side look at entity choices, see <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> and <a href="/blog/llc-vs-corporation">LLC vs corporation</a>.</p>

<h2>Who is eligible to file Form 2553?</h2>
<p>To elect S corp status, the business must meet all of these tests, as listed in the IRS instructions for Form 2553:</p>
<ul>
<li>It is a domestic corporation, or an LLC that is eligible to be treated as a corporation.</li>
<li>It has no more than 100 shareholders (family members can be counted as one).</li>
<li>Shareholders are individuals, certain trusts and estates, or certain exempt organizations. Partnerships, corporations and nonresident aliens cannot be shareholders.</li>
<li>It has only one class of stock (differences in voting rights alone are allowed).</li>
<li>It is not an ineligible corporation, such as certain banks and insurance companies.</li>
<li>It uses a permitted tax year, usually the calendar year.</li>
</ul>
<p>You also need an Employer Identification Number before you file. If you do not have one, our guide on <a href="/blog/how-to-get-an-ein">how to get an EIN</a> covers the free online application.</p>

<h2>When is the Form 2553 deadline?</h2>
<p>The election is due no more than 2 months and 15 days after the beginning of the tax year it should take effect, or at any time during the preceding tax year. For a calendar-year business, that means March 15. If the 15th falls on a weekend or legal holiday, the deadline moves to the next business day.</p>
<table>
<thead><tr><th>Situation</th><th>When to file Form 2553</th><th>Election effective</th></tr></thead>
<tbody>
<tr><td>Existing calendar-year business wants S status for 2027</td><td>Any time in 2026, or by March 15, 2027</td><td>January 1, 2027</td></tr>
<tr><td>New corporation or LLC formed June 1, 2027</td><td>Within 2 months and 15 days of June 1 (by mid-August 2027)</td><td>June 1, 2027</td></tr>
<tr><td>Filed after March 15, 2027 with no relief requested</td><td>Any time in 2027</td><td>January 1, 2028</td></tr>
<tr><td>Missed deadline, qualifies for Rev. Proc. 2013-30</td><td>Within 3 years and 75 days of intended date</td><td>Intended date, if relief granted</td></tr>
</tbody>
</table>
<p>For a newly formed entity, the tax year starts on the earliest of the date it has shareholders, acquires assets or begins doing business. Count your 2 months and 15 days from that date. Keep all the business filing dates in one place with our <a href="/blog/business-tax-deadlines-2027">2027 business tax deadlines calendar</a>.</p>

<h2>How to fill out Form 2553 step by step</h2>
<ol>
<li><strong>Part I, name and identity:</strong> enter the legal name exactly as on your EIN confirmation letter, the address, the EIN, the date and state of incorporation or formation, and the effective date of the election (box E).</li>
<li><strong>Tax year:</strong> in box F and Part II, select the calendar year unless you have a business purpose for a fiscal year. Most small businesses use the calendar year.</li>
<li><strong>Officer details:</strong> give the name, title and phone number of an officer or legal representative the IRS can contact.</li>
<li><strong>Shareholder consents (columns J through N):</strong> list every shareholder, their address, shares or ownership percentage, date acquired, SSN or EIN, and tax year end. Each shareholder signs and dates the consent.</li>
<li><strong>Late election statement:</strong> if you are filing late, write "Filed Pursuant to Rev. Proc. 2013-30" at the top and give the reasonable cause explanation in the space provided.</li>
<li><strong>Officer signature:</strong> an authorized officer signs under penalties of perjury.</li>
<li><strong>Send it:</strong> mail or fax it to the IRS address for your state listed in the instructions. Keep a copy, the fax confirmation or certified mail receipt.</li>
<li><strong>Wait for the CP261 notice:</strong> the IRS acceptance letter confirms the effective date. File it with your formation documents.</li>
</ol>
<p>The current form, instructions and filing addresses are on the IRS <a href="https://www.irs.gov/forms-pubs/about-form-2553">About Form 2553</a> page.</p>

<h2>What is reasonable salary for an S corp owner?</h2>
<p>Reasonable compensation is the part of an S corp election most owners underestimate. The IRS expects shareholder-employees who provide services to take a salary that is reasonable for the work they do before taking distributions. There is no fixed percentage in the law. Factors the IRS and courts look at include:</p>
<ul>
<li>Your training, experience, duties and time spent on the business.</li>
<li>What comparable businesses pay for similar services, often checked against wage data such as the Bureau of Labor Statistics occupational surveys.</li>
<li>The company's gross receipts, profit and distribution history.</li>
<li>What you would have to pay a non-owner to do your job.</li>
</ul>
<p>Paying yourself a very low salary and taking most of the profit as distributions is a well-known audit target. If the IRS reclassifies distributions as wages, the business owes the unpaid payroll taxes plus penalties and interest. The same logic appears in the UK debate over <a href="/blog/director-salary-vs-dividends">director salary vs dividends</a>.</p>

<h2>Worked example: how much can an S corp election save?</h2>
<p>Take a graphic designer whose single-member LLC earns $120,000 net profit in 2027. These figures are illustrative and simplified (they ignore the small deduction adjustments in the self-employment tax calculation and state taxes).</p>
<table>
<thead><tr><th>Item</th><th>Default LLC (Schedule C)</th><th>S corp election</th></tr></thead>
<tbody>
<tr><td>Net profit before owner pay</td><td>$120,000</td><td>$120,000</td></tr>
<tr><td>Owner salary through payroll</td><td>None</td><td>$65,000</td></tr>
<tr><td>Self-employment tax (about 15.3% on 92.35% of profit)</td><td>About $16,950</td><td>None</td></tr>
<tr><td>FICA on salary (7.65% employer + 7.65% employee)</td><td>None</td><td>$9,945</td></tr>
<tr><td>Extra costs: payroll service, 1120-S preparation</td><td>None</td><td>About $2,500 (illustrative)</td></tr>
<tr><td><strong>Approximate payroll and SE tax plus added costs</strong></td><td><strong>About $16,950</strong></td><td><strong>About $12,445</strong></td></tr>
</tbody>
</table>
<p>In this example the election saves roughly $4,500 a year. At $50,000 of profit, the saving would be much smaller and could disappear once payroll and accounting fees are counted. Income tax also changes slightly, because the qualified business income deduction is calculated differently when part of the profit is wages; our guide to the <a href="/blog/qbi-deduction-section-199a">QBI deduction</a> explains why. For a fuller picture of the rates on each structure, read <a href="/blog/llc-tax-rate">LLC tax rate explained</a>.</p>

<h2>What changes after the election is accepted?</h2>
<ul>
<li><strong>Payroll:</strong> you run payroll for yourself, withhold income tax and FICA, make deposits and file Forms 941 and 940, plus a W-2 each January. Our guide to <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> explains each tax you will now pay.</li>
<li><strong>Annual return:</strong> the business files Form 1120-S, due March 15 for calendar-year companies, with a six-month extension available on Form 7004.</li>
<li><strong>K-1s:</strong> each shareholder receives a Schedule K-1 showing their share of income, which flows to their Form 1040.</li>
<li><strong>Bookkeeping:</strong> keep salary, distributions and reimbursements clearly separate. Health insurance for more-than-2% shareholders has special reporting on the W-2.</li>
<li><strong>State rules:</strong> most states follow the federal S election, but some require a separate state election or charge their own entity-level tax.</li>
</ul>
<p>Your invoicing stays the same: invoices are issued in the business name, and clients pay the business account. If you are not sure what needs to be on them, see <a href="/blog/how-to-invoice-as-an-llc">how to invoice as an LLC</a>, or build one in our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>Should you elect S corp status now or wait?</h2>
<p>Timing matters as much as eligibility. A few practical questions help decide:</p>
<ul>
<li><strong>Is profit stable?</strong> One strong year followed by a slow one can leave you paying a fixed salary out of thin profits. Many owners wait until profit has been steady for at least a year.</li>
<li><strong>Can you pay a reasonable salary and still have meaningful profit left?</strong> If the reasonable salary for your role takes almost all the profit, the saving is small.</li>
<li><strong>What does your state charge?</strong> Some states impose franchise taxes, minimum taxes or entity-level taxes on S corporations that eat into the federal saving.</li>
<li><strong>Do you plan to bring in investors?</strong> Venture investors usually want a C corporation with preferred stock, which an S corp cannot issue because of the one-class-of-stock rule.</li>
<li><strong>Are you ready for payroll admin?</strong> Monthly or semiweekly deposits, quarterly Form 941 filings and a W-2 for yourself are part of the package.</li>
</ul>
<p>Electing mid-year is possible for a new entity, but an existing LLC switching on January 1 keeps the books cleaner, because the whole year is reported on one type of return. If you are still deciding on your structure, read <a href="/blog/how-to-file-taxes-as-an-llc">how LLCs file taxes</a> first, then revisit the election when the numbers support it.</p>

<h2>Common Form 2553 mistakes</h2>
<ul>
<li><strong>Missing a shareholder consent,</strong> including a spouse's consent in a community property state.</li>
<li><strong>Wrong effective date,</strong> such as a date before the entity existed or a date that does not match the tax year chosen.</li>
<li><strong>Name or EIN mismatch</strong> with IRS records, which delays processing.</li>
<li><strong>Filing too late without requesting relief,</strong> which pushes the election to the following year.</li>
<li><strong>Not starting payroll,</strong> then taking only distributions all year.</li>
<li><strong>Electing too early,</strong> when profit is too low for the savings to cover the added costs.</li>
</ul>

<h2>Form 2553 checklist</h2>
<ul>
<li>EIN confirmed and legal name matches IRS records.</li>
<li>Eligibility tests met: shareholders, one class of stock, domestic entity.</li>
<li>Effective date and tax year chosen.</li>
<li>All shareholder consents signed and dated.</li>
<li>Filed by the deadline, with proof of filing kept.</li>
<li>Payroll provider set up before the first salary payment.</li>
<li>Reasonable salary documented with comparable pay data.</li>
<li>Calendar entries for Form 1120-S, Form 941 and W-2 deadlines.</li>
</ul>

<p>Form 2553 is a short form with long-lasting effects, so check eligibility, deadlines and the reasonable salary question before you sign, and talk to a tax professional if the savings are borderline. Whatever your tax status, clients still need clear invoices in the business name: our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and builds a PDF right in your browser that you can download and send.</p>
`,
  },
  {
    slug: "business-meals-deduction",
    title: "Business Meals Deduction 2026: 50% Rule, Records, Examples",
    description:
      "Business meals deduction 2026: when meals are 50% or 100% deductible, what changed for employer meals, the records the IRS wants and worked examples.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "self-employed-tax-deductions",
      "business-expense-categories",
      "expense-report-template",
    ],
    faqs: [
      {
        q: "Are business meals 100% deductible in 2026?",
        a: "Most are not. Client meals, meals while traveling for business and meals at business meetings are generally 50% deductible in 2026. Some exceptions allow a full deduction, such as food provided to the general public as part of your business, meals included in employee taxable compensation, and recreational events like a company holiday party. The temporary 100% deduction for restaurant meals ended after 2022.",
      },
      {
        q: "Can I deduct meals when I eat alone as a self-employed person?",
        a: "Only in specific cases. Meals eaten alone while traveling away from your tax home overnight for business are generally 50% deductible, either at actual cost or using the federal per diem meal rate. An everyday lunch near your home office while working is a personal expense and is not deductible, even if you discuss work or check emails while eating.",
      },
      {
        q: "Is coffee with a client deductible?",
        a: "Generally yes, at 50%, if it meets the same tests as any business meal: it is not lavish, you or an employee are present, it is with a current or prospective client, customer, supplier or adviser, and there is a genuine business purpose. Keep the receipt and note who attended and what you discussed. Small amounts add up over a year, so record them consistently.",
      },
      {
        q: "Are snacks and coffee for employees in the office deductible?",
        a: "Rules changed for 2026. Under the law passed in 2017, food and drinks provided for the convenience of the employer or through an on-site eating facility became nondeductible starting in 2026, with narrow exceptions added by the 2025 tax law, for example for restaurants feeding their own staff. Ask a tax adviser how your office snacks, catered lunches and break-room supplies are classified before claiming them.",
      },
      {
        q: "Do I need receipts for meals under $75?",
        a: "For travel and meal expenses under $75 the IRS generally does not require a receipt, except for lodging, but you still need a written record of the amount, date, place, business purpose and the people involved. In practice, keeping the receipt is the easiest way to prove the amount and date, and a quick note in your expense app covers the rest.",
      },
      {
        q: "Can I deduct alcohol as part of a business meal?",
        a: "Alcoholic drinks consumed as part of an otherwise deductible business meal are generally treated as part of the meal and fall under the same 50% limit. If drinks are bought at an entertainment event, such as a sports game or a nightclub, they are usually part of nondeductible entertainment unless they are bought separately and invoiced or itemized separately from the entertainment.",
      },
      {
        q: "How do I record business meals in my bookkeeping?",
        a: "Use a separate expense account for business meals, apart from entertainment and from 100% deductible items like company parties. Attach the receipt and add a short memo with attendees and business purpose. At year end, your tax preparer applies the 50% limit to that account. Mixing meals into general office expenses is a common reason for lost deductions or audit adjustments.",
      },
      {
        q: "Can I bill a client for meals and still deduct them?",
        a: "If you are reimbursed by a client under an adequate accounting, such as itemized receipts attached to your invoice, the 50% limit generally shifts to the client and you include the reimbursement in income while deducting the full cost. If you just roll the meal into a higher fee without itemizing, you usually keep the 50% limit yourself. Check your contract terms and your adviser's view.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The business meals deduction lets you deduct 50% of the cost of food and drinks that have a clear business purpose, such as meals with clients or meals while traveling overnight for work. In 2026, entertainment is still not deductible, and most meals provided to employees for the employer's convenience became nondeductible.</p>

<p>Meals are one of the most common deductions for freelancers and small businesses, and one of the most commonly misclaimed. This guide covers the 50% rule, when meals are fully deductible, what changed in 2026, the records the IRS expects, a worked example with numbers and the mistakes to avoid. It is general information, not tax advice; confirm details for your situation with a tax professional.</p>

<h2>What counts as a deductible business meal?</h2>
<p>A business meal is food or drink that is an ordinary and necessary expense of carrying on your trade or business. Under the IRS rules for meal expenses, a meal with a business contact is generally deductible at 50% if all of these are true:</p>
<ul>
<li>The expense is ordinary and necessary for your business.</li>
<li>It is not lavish or extravagant under the circumstances.</li>
<li>You, or an employee of the business, are present when the food or drinks are served.</li>
<li>It is provided to you and a current or potential business contact, such as a client, customer, supplier, consultant or employee.</li>
<li>If it happens at an entertainment event, the food and drinks are bought separately or shown separately on the bill.</li>
</ul>
<p>Meals while traveling away from home overnight for business also qualify, even if you eat alone. The IRS explains the rules in Publication 463, <a href="https://www.irs.gov/publications/p463">Travel, Gift, and Car Expenses</a>.</p>

<h2>How much of a business meal is deductible in 2026?</h2>
<p>The default is 50%. Some meals are fully deductible and some are not deductible at all. The table summarizes common cases for 2026, based on IRS guidance and the changes in the 2017 and 2025 tax laws.</p>
<table>
<thead><tr><th>Expense</th><th>Deductible in 2026</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Lunch or dinner with a client or prospect</td><td>50%</td><td>You or an employee must attend</td></tr>
<tr><td>Meals while traveling overnight for business</td><td>50%</td><td>Actual cost or federal per diem meal rate</td></tr>
<tr><td>Food at a business meeting or conference</td><td>50%</td><td>You or an employee must attend for a business purpose</td></tr>
<tr><td>Company holiday party or picnic open to all staff</td><td>100%</td><td>Recreational events primarily for employees</td></tr>
<tr><td>Food provided free to the general public (for example, at a store event)</td><td>100%</td><td>Must be available to the public</td></tr>
<tr><td>Meals treated as taxable compensation to the employee</td><td>100%</td><td>Included on the employee's W-2</td></tr>
<tr><td>Meals sold to customers (a restaurant's cost of goods)</td><td>100%</td><td>Treated as cost of goods sold</td></tr>
<tr><td>Meals for the employer's convenience or in an on-site cafeteria</td><td>0% (from 2026)</td><td>Narrow exceptions, such as restaurants feeding their own staff</td></tr>
<tr><td>Entertainment: sports tickets, golf, concerts</td><td>0%</td><td>Separately stated food may still be 50%</td></tr>
<tr><td>Everyday solo lunch near home or office</td><td>0%</td><td>Personal expense</td></tr>
</tbody>
</table>
<p>The temporary 100% deduction for restaurant meals applied only in 2021 and 2022. If you see advice saying restaurant meals are fully deductible, it is out of date.</p>

<h2>What changed for meals in 2026?</h2>
<p>The Tax Cuts and Jobs Act scheduled a change for 2026: meals provided for the convenience of the employer on business premises, and food from an employer-operated eating facility, moved from 50% deductible to nondeductible. The 2025 tax law (often called the One Big Beautiful Bill Act) kept that rule but carved out narrow exceptions, including food and beverages restaurants provide to their own employees and meals on certain fishing vessels and fish processing facilities.</p>
<p>For a typical small office, this mostly affects stocked snacks, coffee for staff and meals served on site so employees can stay available. Client meals and travel meals were not changed by this rule. For a broader summary of the 2025 law's effect on small firms, see <a href="/blog/one-big-beautiful-bill-small-business">the One Big Beautiful Bill for small business</a>. Because guidance on edge cases is still developing, ask a tax adviser before classifying office food.</p>

<h2>What records do you need for a business meal?</h2>
<p>The IRS expects documentary evidence for each meal. Keep:</p>
<ol>
<li><strong>Amount:</strong> the receipt or card statement showing the total, including tax and tip.</li>
<li><strong>Date and place:</strong> the restaurant name and location, usually on the receipt.</li>
<li><strong>Attendees:</strong> names and business relationship of the people present.</li>
<li><strong>Business purpose:</strong> one line, such as "Q1 retainer renewal discussion with Acme Co."</li>
</ol>
<p>For meal expenses under $75 the IRS generally does not require the receipt itself, but you still need the written record of the other details. Records should be made at or near the time of the meal. A simple <a href="/blog/expense-report-template">expense report template</a> or a notes field in your bookkeeping app is enough. Keep the records with your return for at least the period explained in <a href="/blog/how-long-to-keep-invoices">how long to keep invoices and receipts</a>.</p>

<h2>How to use the per diem rate for travel meals</h2>
<p>If you travel overnight for business, you can deduct actual meal costs or use the federal meals and incidental expenses (M&amp;IE) per diem rate for the location, published by the U.S. General Services Administration. Self-employed people can use the per diem method for meals but not for lodging. The 50% limit applies either way, and on travel days you use 75% of the daily rate for the first and last day of the trip.</p>
<p>The per diem method saves you tracking every receipt, but you still need to prove the time, place and business purpose of the trip. Combine it with mileage records if you drive; see the <a href="/blog/irs-mileage-rate-2026">IRS mileage rate for 2026</a>.</p>

<h2>Worked example: a consultant's meal deductions for a year</h2>
<p>A self-employed marketing consultant spends the following on meals during 2026. Amounts are illustrative.</p>
<table>
<thead><tr><th>Expense</th><th>Total spent</th><th>Deductible %</th><th>Deduction</th></tr></thead>
<tbody>
<tr><td>18 client lunches and coffees</td><td>$1,440</td><td>50%</td><td>$720</td></tr>
<tr><td>Meals on 3 overnight trips to client sites</td><td>$620</td><td>50%</td><td>$310</td></tr>
<tr><td>Holiday dinner for her two employees and their partners</td><td>$480</td><td>100%</td><td>$480</td></tr>
<tr><td>Basketball tickets for a client (food not separately stated)</td><td>$350</td><td>0%</td><td>$0</td></tr>
<tr><td>Solo lunches on regular workdays</td><td>$1,100</td><td>0%</td><td>$0</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$3,990</strong></td><td></td><td><strong>$1,510</strong></td></tr>
</tbody>
</table>
<p>If she is in a combined federal income and self-employment tax bracket of about 37%, the $1,510 deduction is worth roughly $560 in tax. The point of the example: tracking client and travel meals properly is worth the effort, but most of her total meal spend is not deductible at all. Meals are only one category; our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> covers the rest.</p>

<h2>How to report the business meals deduction</h2>
<ul>
<li><strong>Sole proprietors and single-member LLCs:</strong> report the deductible portion (after the 50% limit) on Schedule C, line 24b, Deductible meals. Walkthrough in our <a href="/blog/schedule-c-for-freelancers">Schedule C guide</a>.</li>
<li><strong>Partnerships and S corporations:</strong> the business deducts the allowed portion on Form 1065 or 1120-S, and the nondeductible half is tracked for the K-1.</li>
<li><strong>C corporations:</strong> deduct the allowed portion on Form 1120 and report the nondeductible part as a book-to-tax difference.</li>
<li><strong>Employees:</strong> unreimbursed employee meal expenses are not deductible on a federal return for most employees.</li>
</ul>
<p>In your bookkeeping, set up separate accounts such as "Meals 50%," "Meals 100% (staff events)" and "Entertainment (nondeductible)." The <a href="/blog/business-expense-categories">business expense categories guide</a> shows a full chart of accounts.</p>

<h2>Billing clients for meals</h2>
<p>If a contract lets you pass meal costs through to a client, itemize them on the invoice as reimbursable expenses with receipts attached. When you account to the client this way, the 50% limit generally applies to the client rather than to you. Add a line such as "Travel meals, Chicago site visit, March 3-5 (receipts attached)" and keep the amount at cost unless the contract allows a markup. You can add reimbursable lines in our <a href="/invoice-generator">free invoice generator</a> alongside your fees.</p>

<h2>Where is the line between meals and entertainment?</h2>
<p>Since 2018, entertainment, amusement and recreation expenses have not been deductible, even when they have a clear business purpose. Food and drinks are different: they can still qualify for the 50% deduction. The problem is that the two are often bought together. IRS regulations give a few practical rules:</p>
<ul>
<li><strong>A meal at a restaurant is a meal,</strong> not entertainment, so a client dinner is 50% deductible if the usual tests are met.</li>
<li><strong>Food at an entertainment event</strong> is deductible at 50% only if it is purchased separately from the event or shown separately on the bill or invoice. If the price of a hospitality box includes food and the invoice does not split it out, the whole cost is nondeductible entertainment.</li>
<li><strong>Golf, theater, concerts and sports tickets</strong> are entertainment, whatever is discussed during the event.</li>
<li><strong>A business lunch at a conference</strong> is a meal; the conference fee itself is a separate, generally deductible business expense.</li>
</ul>
<p>Here is how this works in practice. You take a client to a baseball game, paying $200 for tickets and $60 for hot dogs and drinks bought separately at the stand. The tickets are nondeductible. The $60 of food is a business meal, so $30 is deductible, provided you keep the receipt and note the client and purpose. Had you bought a $260 package that bundled seats and food with no split on the invoice, none of it would be deductible.</p>
<p>When you organize events for clients yourself and bill them, it helps the client if you show food and drinks as separate invoice lines, because that preserves their 50% deduction.</p>

<h2>Common business meal deduction mistakes</h2>
<ul>
<li>Claiming 100% for client restaurant meals based on the expired 2021-2022 rule.</li>
<li>Deducting everyday solo lunches as business meals.</li>
<li>Lumping entertainment tickets and meals together on one line.</li>
<li>No note of attendees or business purpose, which makes the deduction hard to defend.</li>
<li>Continuing to deduct office snacks and on-site staff meals in 2026 without checking the new rules.</li>
<li>Deducting the 50% twice: once in bookkeeping and again on the return.</li>
</ul>

<p>The business meals deduction rewards good habits: a receipt, a name and a one-line purpose for every client or travel meal, and separate accounts for the 50%, 100% and nondeductible buckets. When you pass meal costs to clients, itemize them clearly on the invoice. Our <a href="/invoice-generator">invoice generator</a> is free, requires no sign-up, and creates a downloadable PDF in your browser in a couple of minutes.</p>
`,
  },
  {
    slug: "employer-payroll-taxes",
    title: "Employer Payroll Taxes 2026: FICA, FUTA, SUTA Explained",
    description:
      "Employer payroll taxes for 2026: FICA rates, the $184,500 Social Security wage base, FUTA, state unemployment tax, deposit rules and the real cost of a hire.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["form-w-2", "how-to-do-payroll-yourself", "hiring-your-first-employee", "w2-vs-1099"],
    faqs: [
      {
        q: "What percentage does an employer pay in payroll taxes?",
        a: "At the federal level, an employer pays 7.65% of each employee's wages for Social Security and Medicare (6.2% plus 1.45%), plus federal unemployment tax that usually works out to 0.6% on the first $7,000 of wages. State unemployment tax adds a further rate that varies by state and employer history. Many small employers find the total lands somewhere around 8% to 12% of wages, before workers' compensation and benefits.",
      },
      {
        q: "Do employers pay the Additional Medicare Tax?",
        a: "No. The 0.9% Additional Medicare Tax is paid only by the employee, but the employer must withhold it from wages paid to an employee once that person's wages from the employer exceed $200,000 in a calendar year. There is no employer match. Employees whose combined wages or self-employment income exceed their filing threshold settle any difference on their personal return.",
      },
      {
        q: "What is the FUTA tax for one employee?",
        a: "In a state with no credit reduction, an employer that pays its state unemployment tax on time usually pays $42 a year in FUTA per employee: 0.6% of the first $7,000 of wages. In a credit reduction state, the amount is higher. For example, California's 1.2% credit reduction for 2025 raised the effective FUTA cost to $126 per employee for that year.",
      },
      {
        q: "Are payroll taxes due for independent contractors?",
        a: "No. Businesses do not withhold income tax or pay FICA, FUTA or state unemployment tax on payments to genuine independent contractors. The contractor pays self-employment tax instead, and you may need to file Form 1099-NEC. Misclassifying an employee as a contractor can lead to back payroll taxes, penalties and interest, so apply the IRS common-law control tests and any stricter state test.",
      },
      {
        q: "When are payroll tax deposits due?",
        a: "Most new employers are monthly depositors, with deposits due by the 15th of the following month. Employers with more than $50,000 in employment taxes during the lookback period deposit on a semiweekly schedule, and any day with $100,000 or more in accumulated tax triggers a next-day deposit. Deposits are made electronically, usually through EFTPS or a payroll provider.",
      },
      {
        q: "What happens if I pay payroll taxes late?",
        a: "The IRS charges a failure-to-deposit penalty that rises with the delay: 2% for deposits 1 to 5 days late, 5% for 6 to 15 days, 10% after 15 days, and 15% if still unpaid after an IRS demand. Interest also accrues. Withheld taxes are trust fund taxes, so responsible owners and officers can be personally liable through the Trust Fund Recovery Penalty.",
      },
      {
        q: "Do I pay payroll taxes on my own salary as an S corp owner?",
        a: "Yes. An S corporation owner who works in the business is an employee for payroll purposes, so the corporation withholds income tax and the employee share of FICA from the owner's salary and pays the employer share plus FUTA and state unemployment tax. Distributions on top of salary are not subject to payroll taxes, which is why reasonable salary rules matter.",
      },
      {
        q: "Is state unemployment tax the same in every state?",
        a: "No. Each state sets its own taxable wage base, rate schedule and new-employer rate. Wage bases range from $7,000 in a handful of states to more than $70,000 in states such as Washington, and rates depend on industry and your layoff history. Your state workforce agency sends a rate notice each year, so use that figure rather than an average.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Employer payroll taxes are the taxes a business pays on top of employee wages. In 2026 they include 6.2% Social Security tax on wages up to $184,500, 1.45% Medicare tax on all wages, federal unemployment tax (FUTA, usually 0.6% on the first $7,000) and state unemployment tax (SUTA), which varies by state.</p>

<p>When you hire your first employee, the hourly rate is not the full cost. You also pay your share of payroll taxes, withhold the employee's share, deposit everything on schedule and file quarterly and annual returns. This guide explains each employer payroll tax for 2026, the forms and deposit rules, and a worked example of the real cost of an employee. It is general information, not tax advice. The official reference is IRS <a href="https://www.irs.gov/publications/p15">Publication 15 (Circular E), Employer's Tax Guide</a>.</p>

<h2>What are employer payroll taxes?</h2>
<p>Payroll taxes fall into two groups:</p>
<ul>
<li><strong>Taxes you withhold from the employee:</strong> federal income tax (based on Form W-4), the employee's 6.2% Social Security and 1.45% Medicare, any Additional Medicare Tax, and state or local income tax where it applies. This money belongs to the government; you hold it in trust until you deposit it.</li>
<li><strong>Taxes you pay as the employer:</strong> the matching 6.2% Social Security and 1.45% Medicare, FUTA, and SUTA. These are a business expense on top of gross wages.</li>
</ul>
<p>None of this applies to genuine independent contractors, who pay <a href="/blog/self-employment-tax">self-employment tax</a> themselves. If you are unsure which category a worker falls into, read <a href="/blog/w2-vs-1099">W-2 vs 1099</a> before you set up payroll.</p>

<h2>Employer payroll tax rates for 2026</h2>
<table>
<thead><tr><th>Tax</th><th>Employer rate</th><th>Employee rate</th><th>Wage base 2026</th></tr></thead>
<tbody>
<tr><td>Social Security (OASDI)</td><td>6.2%</td><td>6.2%</td><td>First $184,500 per employee</td></tr>
<tr><td>Medicare (HI)</td><td>1.45%</td><td>1.45%</td><td>All wages, no cap</td></tr>
<tr><td>Additional Medicare Tax</td><td>None</td><td>0.9%</td><td>Wages over $200,000 (withholding threshold)</td></tr>
<tr><td>FUTA</td><td>6.0% gross, usually 0.6% after state credit</td><td>None</td><td>First $7,000 per employee</td></tr>
<tr><td>SUTA</td><td>Varies by state and experience rating</td><td>Employee share in a few states</td><td>Set by each state</td></tr>
</tbody>
</table>
<p>The Social Security Administration raised the wage base from $176,100 in 2025 to $184,500 for 2026. Once an employee's 2026 wages pass that figure, both you and the employee stop paying the 6.2% Social Security tax for the rest of the year, but Medicare continues. If you have 2027 payroll in your budget, check the SSA announcement each October for the new wage base.</p>

<h2>How does FUTA work?</h2>
<p>The Federal Unemployment Tax Act tax funds the federal share of unemployment benefits. The gross rate is 6.0% on the first $7,000 of each employee's wages. Employers that pay their state unemployment tax in full and on time get a credit of up to 5.4%, bringing the net rate to 0.6%, or $42 per employee per year.</p>
<p>The credit is cut in <strong>credit reduction states</strong>, which have outstanding federal loans to their unemployment funds. For 2025, the Department of Labor listed California (1.2% reduction) and the U.S. Virgin Islands (4.5% reduction). The 2026 list is confirmed in November 2026, and employers report any reduction on Schedule A of Form 940 filed in early 2027. FUTA is filed annually on Form 940, due January 31, and deposited quarterly once the liability passes $500.</p>

<h2>How does state unemployment tax (SUTA) work?</h2>
<p>Every state runs its own unemployment insurance program. You register with the state workforce agency when you hire, and the agency assigns:</p>
<ul>
<li>A <strong>taxable wage base</strong>, which ranges from the federal minimum of $7,000 in a handful of states to more than $70,000 in Washington.</li>
<li>A <strong>new-employer rate</strong>, often between 1% and 4%, used until you have enough history.</li>
<li>An <strong>experience rate</strong> after that, which rises if former employees claim benefits.</li>
</ul>
<p>A few states, including Alaska, New Jersey and Pennsylvania, also take a small employee contribution. Some states add other employer charges such as paid family leave or training funds. File SUTA returns quarterly with the state, and update the rate in your payroll system each January when the new rate notice arrives.</p>

<h2>Worked example: the real cost of a $50,000 employee</h2>
<p>A small business in a state with a $12,000 SUTA wage base and a 2.7% new-employer rate hires one employee at $50,000 a year in 2026. No credit reduction applies.</p>
<table>
<thead><tr><th>Cost item</th><th>Calculation</th><th>Annual cost</th></tr></thead>
<tbody>
<tr><td>Gross wages</td><td></td><td>$50,000.00</td></tr>
<tr><td>Employer Social Security</td><td>$50,000 x 6.2%</td><td>$3,100.00</td></tr>
<tr><td>Employer Medicare</td><td>$50,000 x 1.45%</td><td>$725.00</td></tr>
<tr><td>FUTA (net)</td><td>$7,000 x 0.6%</td><td>$42.00</td></tr>
<tr><td>SUTA</td><td>$12,000 x 2.7%</td><td>$324.00</td></tr>
<tr><td><strong>Total employer payroll taxes</strong></td><td></td><td><strong>$4,191.00</strong></td></tr>
<tr><td><strong>Wages plus payroll taxes</strong></td><td></td><td><strong>$54,191.00</strong></td></tr>
</tbody>
</table>
<p>Payroll taxes add about 8.4% to wages in this example. Workers' compensation insurance, benefits, paid time off and payroll software add more. Separately, you withhold the employee's $3,825 FICA share and federal and state income tax from their pay and deposit those amounts too. For budgeting the whole hire, see <a href="/blog/hiring-your-first-employee">hiring your first employee</a>.</p>

<h2>Which payroll tax forms do employers file?</h2>
<table>
<thead><tr><th>Form</th><th>What it reports</th><th>Due</th></tr></thead>
<tbody>
<tr><td>Form 941</td><td>Withheld income tax, both shares of FICA</td><td>Quarterly: April 30, July 31, October 31, January 31</td></tr>
<tr><td>Form 944</td><td>Annual alternative to 941 for very small employers the IRS notifies</td><td>January 31</td></tr>
<tr><td>Form 940</td><td>FUTA</td><td>January 31</td></tr>
<tr><td>Form W-2 and W-3</td><td>Each employee's annual wages and withholding, to employees and SSA</td><td>January 31</td></tr>
<tr><td>State returns</td><td>SUTA wages and contributions, state withholding</td><td>Usually quarterly</td></tr>
</tbody>
</table>
<p>If a due date falls on a weekend or legal holiday, it moves to the next business day. Our <a href="/blog/business-tax-deadlines-2027">2027 business tax deadlines</a> page lists the exact dates for the coming year.</p>

<h2>How to deposit payroll taxes step by step</h2>
<ol>
<li><strong>Get an EIN</strong> and register with your state's tax and workforce agencies before the first payday.</li>
<li><strong>Collect Form W-4 and Form I-9</strong> from each new hire, plus the state withholding form if your state has one.</li>
<li><strong>Determine your deposit schedule.</strong> New employers are usually monthly depositors (deposit by the 15th of the next month). If your total employment taxes in the lookback period exceeded $50,000, you are a semiweekly depositor.</li>
<li><strong>Run each payroll</strong> and calculate withholding and employer taxes.</li>
<li><strong>Deposit electronically</strong> through the Electronic Federal Tax Payment System (EFTPS), your IRS business tax account or a payroll provider. Our guide on <a href="/blog/how-to-pay-irs-online">how to pay the IRS online</a> covers the options.</li>
<li><strong>Reconcile and file</strong> Form 941 each quarter and the annual forms in January.</li>
</ol>
<p>Many small employers hand these steps to a payroll service. If you prefer to do it in-house, our guide on <a href="/blog/how-to-do-payroll-yourself">how to do payroll yourself</a> walks through a full pay run, and <a href="/blog/how-to-set-up-direct-deposit">setting up direct deposit</a> covers paying staff.</p>

<h2>What other state and local payroll taxes might apply?</h2>
<p>Federal taxes are the same everywhere, but state and local payroll obligations differ a lot. Depending on where your employees live and work, you may also need to handle:</p>
<ul>
<li><strong>State income tax withholding.</strong> Most states have an income tax and require withholding; a few, such as Texas and Florida, do not tax wages.</li>
<li><strong>Local income taxes.</strong> Some cities, counties and school districts levy wage taxes, common in states such as Ohio and Pennsylvania.</li>
<li><strong>State disability insurance.</strong> A handful of states, including California and New York, run disability programs funded through payroll.</li>
<li><strong>Paid family and medical leave.</strong> A growing number of states fund paid leave through payroll contributions, sometimes split between employer and employee.</li>
<li><strong>Workers' compensation.</strong> Not a tax, but required insurance in nearly every state for employers with staff, priced by payroll and job type.</li>
</ul>
<p>Remote employees complicate this: you generally follow the rules of the state where the employee works, which can mean registering in a new state when you hire one person there. Check the state revenue and labor department websites before the first payroll in any new state.</p>

<h2>How are payroll taxes recorded in your books?</h2>
<p>Keep three groups of accounts so the numbers reconcile with Form 941 and the W-2s:</p>
<ol>
<li><strong>Wages expense</strong> for gross pay.</li>
<li><strong>Payroll tax expense</strong> for the employer share of FICA, FUTA and SUTA.</li>
<li><strong>Payroll liabilities</strong> for withheld amounts and employer taxes owed but not yet deposited. These should return to zero after each deposit.</li>
</ol>
<p>If liability accounts keep growing, a deposit has been missed. Catching that early is far cheaper than finding it in an IRS notice.</p>

<h2>Common employer payroll tax mistakes</h2>
<ul>
<li><strong>Treating withheld taxes as working capital.</strong> Withheld income tax and the employee's FICA are trust fund taxes. Owners can be personally liable if they are not paid.</li>
<li><strong>Missing deposit deadlines.</strong> Failure-to-deposit penalties start at 2% and reach 10% after 15 days.</li>
<li><strong>Using an old wage base.</strong> Forgetting to update to $184,500 for 2026 stops Social Security too early for high earners.</li>
<li><strong>Ignoring the FUTA credit reduction</strong> when budgeting in an affected state.</li>
<li><strong>Misclassifying employees as contractors</strong> to avoid payroll tax.</li>
<li><strong>Paying SUTA late,</strong> which can reduce the FUTA credit as well as trigger state penalties.</li>
</ul>
<p>If you do fall behind, contact the IRS early; <a href="/blog/irs-penalty-abatement">IRS penalty abatement</a> explains when first-time relief may apply.</p>

<h2>Payroll taxes and your pricing</h2>
<p>Employer payroll taxes are part of your labor cost, so build them into your hourly rates and quotes. In the example above, an employee costing $26 an hour in wages really costs about $28.20 once payroll taxes are added, before insurance and overhead. When you bill clients for staff time, make sure your invoice rate covers the loaded cost. You can prepare those invoices in our <a href="/invoice-generator">free invoice generator</a>.</p>

<p>Employer payroll taxes for 2026 come down to four items: 7.65% FICA (with Social Security capped at $184,500), FUTA on the first $7,000, your state's SUTA, and on-time deposits and filings. Put the dates in your calendar, budget for the true cost of each hire, and price your work accordingly. When it is time to bill, our <a href="/invoice-generator">invoice generator</a> is free, needs no sign-up and downloads a clean PDF built in your browser.</p>
`,
  },
  {
    slug: "business-tax-extension",
    title: "Business Tax Extension: How to File Form 7004 (2027)",
    description:
      "Business tax extension guide: how to file Form 7004, 2027 deadlines for S corps, partnerships and C corps, why tax is still due on time, and penalties to avoid.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "form-1065",
      "business-tax-deadlines-2027",
      "how-to-file-taxes-as-an-llc",
      "irs-penalty-abatement",
    ],
    faqs: [
      {
        q: "Is a business tax extension automatic?",
        a: "Yes, in most cases. Form 7004 gives an automatic extension of time to file for the business returns it covers, as long as you file it correctly by the original due date of the return and show the right form code. The IRS does not require a reason, and you will not usually receive an approval letter. You only hear back if the request is rejected.",
      },
      {
        q: "Does Form 7004 extend the time to pay?",
        a: "No. Form 7004 extends only the time to file the return. Any tax owed must still be paid by the original due date, or interest and a failure-to-pay penalty start running on the unpaid balance. Estimate the tax as accurately as you can and pay it with the extension, for example through EFTPS or IRS Direct Pay where available for business payments.",
      },
      {
        q: "How do sole proprietors extend their business tax return?",
        a: "Sole proprietors and single-member LLCs taxed as disregarded entities report business income on Schedule C of their personal Form 1040, so they use Form 4868, not Form 7004. Form 4868 gives an automatic six-month extension to October 15. As with Form 7004, any tax due must still be paid by the April deadline to avoid penalties and interest.",
      },
      {
        q: "Can I file Form 7004 electronically?",
        a: "Yes. Form 7004 can be e-filed through IRS-authorized tax software or a tax professional, which is the fastest way to get confirmation that the extension was accepted. It can also be mailed to the IRS address for your form type and location listed in the instructions. If you mail it, use a method that gives proof of the mailing date.",
      },
      {
        q: "What is the penalty for filing a partnership or S corp return late?",
        a: "Partnerships and S corporations face a late filing penalty calculated per partner or shareholder for each month or part of a month the return is late, up to 12 months, even if no tax is due. The dollar amount is adjusted for inflation each year. For a business with several owners, the penalty can add up quickly, which is why filing Form 7004 on time matters.",
      },
      {
        q: "Does a federal extension also extend my state return?",
        a: "Sometimes. Many states automatically accept the federal extension, some require their own extension form, and some grant an automatic extension but still require a payment voucher. Check your state revenue department's rules for each return. State payment deadlines usually match the original due date, even when the filing deadline is extended.",
      },
      {
        q: "Can I get more than six months of extension?",
        a: "Generally no. Form 7004 gives six months for most returns, and a C corporation with a fiscal year ending June 30 gets seven months. Further extensions are only available in limited cases, such as certain businesses outside the United States or in federally declared disaster areas where the IRS postpones deadlines. Plan to file within the extended period.",
      },
      {
        q: "Will filing an extension increase my audit risk?",
        a: "There is no evidence from the IRS that filing an extension by itself increases audit risk. Extensions are routine, and many businesses file them every year to wait for final K-1s, year-end adjustments or accountant availability. What matters more is an accurate, complete return. Rushing an incomplete return to beat the original deadline can create more problems than an extension.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A business tax extension gives you extra time to file, not to pay. Partnerships, S corporations and C corporations file IRS Form 7004 by the original due date to get an automatic extension, usually six months. For 2026 calendar-year returns, that means filing Form 7004 by March 15, 2027 or April 15, 2027.</p>

<p>Waiting on a final K-1, a late bookkeeping cleanup or simply a busy accountant are all good reasons to extend a business return. The extension itself is simple. The mistake many owners make is treating it as an extension to pay. This guide covers who uses Form 7004, the 2027 deadlines, how to file step by step, how to estimate the payment and the penalties for getting it wrong. It is general information, not tax advice.</p>

<h2>What is Form 7004?</h2>
<p>Form 7004, Application for Automatic Extension of Time To File Certain Business Income Tax, Information, and Other Returns, is the IRS form businesses use to extend the filing deadline for returns such as:</p>
<ul>
<li>Form 1065, partnership return (including multi-member LLCs taxed as partnerships)</li>
<li>Form 1120-S, S corporation return</li>
<li>Form 1120, C corporation return</li>
<li>Form 1041, estates and trusts, and several other information returns</li>
</ul>
<p>Each return has a form code that you enter on line 1. The extension is automatic if you file on time and the form is complete. The IRS <a href="https://www.irs.gov/forms-pubs/about-form-7004">About Form 7004</a> page has the current form, codes and mailing addresses.</p>
<p>Sole proprietors and single-member LLCs that file Schedule C do not use Form 7004. They extend their personal return with Form 4868. For how each structure files, see <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes as an LLC</a>.</p>

<h2>When is the business tax extension deadline in 2027?</h2>
<p>Form 7004 is due by the original due date of the return. For calendar-year 2026 returns filed in 2027:</p>
<table>
<thead><tr><th>Business type</th><th>Return</th><th>Original due date</th><th>Extended due date</th></tr></thead>
<tbody>
<tr><td>Partnership or multi-member LLC</td><td>Form 1065</td><td>March 15, 2027</td><td>September 15, 2027</td></tr>
<tr><td>S corporation</td><td>Form 1120-S</td><td>March 15, 2027</td><td>September 15, 2027</td></tr>
<tr><td>C corporation</td><td>Form 1120</td><td>April 15, 2027</td><td>October 15, 2027</td></tr>
<tr><td>Sole proprietor or single-member LLC</td><td>Form 1040 with Schedule C (use Form 4868)</td><td>April 15, 2027</td><td>October 15, 2027</td></tr>
</tbody>
</table>
<p>Fiscal-year businesses use the 15th day of the third month (partnerships and S corps) or fourth month (C corps) after the year ends. A C corporation with a June 30 year end has a September 15 original deadline and a seven-month extension. If a date falls on a weekend or legal holiday, it moves to the next business day, and the IRS sometimes postpones deadlines for disaster areas. All of the key dates are in our <a href="/blog/business-tax-deadlines-2027">2027 business tax deadlines calendar</a>.</p>

<h2>Does an extension give you more time to pay?</h2>
<p>No, and this is the most important point in this guide. Tax owed is due by the original deadline. That matters most for:</p>
<ul>
<li><strong>C corporations,</strong> which pay income tax at the entity level (21% federal rate).</li>
<li><strong>Sole proprietors and owners of pass-through entities,</strong> who pay tax on their share of business income on their personal return by April 15, even if their partnership or S corp return is extended.</li>
<li><strong>S corporations and partnerships with entity-level taxes,</strong> such as built-in gains tax or certain state taxes.</li>
</ul>
<p>Pay what you estimate you owe when you file the extension. Any shortfall accrues interest and a failure-to-pay penalty. Our guide to <a href="/blog/how-to-pay-irs-online">paying the IRS online</a> covers EFTPS and the other business payment options.</p>

<h2>How to file Form 7004 step by step</h2>
<ol>
<li><strong>Confirm which return you are extending</strong> and look up its form code in the instructions (for example, 09 for Form 1065, 25 for Form 1120-S, 12 for Form 1120).</li>
<li><strong>Enter identification:</strong> business name, EIN and address exactly as on IRS records.</li>
<li><strong>Complete Part II</strong> for corporations: check boxes for a short tax year or a consolidated group if they apply, and enter the tax year.</li>
<li><strong>Estimate tentative total tax</strong> (line 6), subtract payments and credits already made (line 7) and show the balance due (line 8).</li>
<li><strong>Pay the balance</strong> electronically by the original due date.</li>
<li><strong>File the form</strong> by e-file through tax software or your preparer, or by mail to the address for your return type and state.</li>
<li><strong>Keep the acceptance confirmation</strong> or mailing proof with your tax records.</li>
<li><strong>Tell partners or shareholders</strong> that K-1s will come later, so they can extend their own returns if needed.</li>
</ol>

<h2>Worked example: an S corporation and its owner</h2>
<p>A two-owner design studio is an S corporation with a calendar tax year. Its bookkeeper is still reconciling December invoices in early March 2027.</p>
<ul>
<li><strong>March 12, 2027:</strong> the studio e-files Form 7004 with form code 25. It owes no entity-level federal tax, so line 8 is $0. Its extended deadline becomes September 15, 2027.</li>
<li><strong>Owner A</strong> expects about $70,000 of K-1 income. She estimates her total 2026 federal tax at $14,200 and has paid $11,000 through withholding on her S corp salary and estimated payments. By April 15, 2027 she files Form 4868 and pays the $3,200 difference.</li>
<li><strong>August 20, 2027:</strong> the studio files Form 1120-S and issues K-1s. Owner A's actual tax is $14,600. She files her return and pays the extra $400 plus a small amount of interest and failure-to-pay penalty on that $400.</li>
</ul>
<p>Because the return and the payment were both handled on time, the studio avoided the per-shareholder late filing penalty and Owner A's cost was a few dollars of interest instead of hundreds in penalties.</p>

<h2>What penalties apply if you file or pay late?</h2>
<table>
<thead><tr><th>Penalty</th><th>Who it applies to</th><th>How it is calculated</th></tr></thead>
<tbody>
<tr><td>Failure to file</td><td>C corporations and individuals</td><td>5% of unpaid tax per month or part month, up to 25%</td></tr>
<tr><td>Late filing, partnerships and S corps</td><td>Form 1065 and 1120-S filers</td><td>A fixed dollar amount per partner or shareholder per month, up to 12 months (inflation-adjusted yearly)</td></tr>
<tr><td>Failure to pay</td><td>Anyone with unpaid tax</td><td>0.5% of unpaid tax per month or part month, up to 25%</td></tr>
<tr><td>Interest</td><td>Anyone with unpaid tax</td><td>Federal short-term rate plus 3%, compounded daily, set quarterly</td></tr>
</tbody>
</table>
<p>If a penalty does hit, first-time abatement or reasonable cause relief may be available; see <a href="/blog/irs-penalty-abatement">IRS penalty abatement</a>. Individual owners who underpaid through the year may also face the <a href="/blog/estimated-tax-penalty">estimated tax penalty</a>, which an extension does not prevent.</p>

<h2>How to estimate what you owe before the books are final</h2>
<ul>
<li>Start with year-to-date profit from your bookkeeping and add any December invoices not yet recorded.</li>
<li>Use your sales records: an invoice list exported from your invoicing tool gives a quick revenue total for the year.</li>
<li>Apply last year's effective tax rate as a starting point, then adjust for big changes such as equipment purchases or a new hire.</li>
<li>Round up. Overpaying slightly is refunded or applied to next year; underpaying costs interest and penalties.</li>
</ul>
<p>Our guide on <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a> gives rules of thumb that work for this estimate too, and <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> explains how to avoid a large balance next year.</p>

<h2>When should a small business file an extension?</h2>
<p>An extension is not a sign of trouble. It is a sensible choice in situations like these:</p>
<ul>
<li><strong>Missing information.</strong> You are waiting on K-1s from another partnership, a corrected 1099 or year-end statements from a lender.</li>
<li><strong>Books not closed.</strong> December invoices, accruals, inventory counts or depreciation schedules are still being finalized.</li>
<li><strong>Big decisions pending.</strong> You want time to decide on elections such as bonus depreciation or Section 179; see <a href="/blog/section-179-vs-bonus-depreciation">Section 179 vs bonus depreciation</a>.</li>
<li><strong>Accountant capacity.</strong> Many firms extend a share of client returns every year to spread the workload and file more carefully.</li>
<li><strong>Life events.</strong> Illness, a move or a family emergency around the deadline.</li>
</ul>
<p>An extension is a poor choice when it simply delays facing a tax bill you cannot pay. In that case, file on time anyway (the failure-to-file penalty is much larger than the failure-to-pay penalty) and contact the IRS about a payment plan.</p>
<p>The best way to avoid needing an extension is to keep books current through the year: record each invoice when you issue it, match payments as they arrive and reconcile bank accounts monthly. If your invoices are scattered across email drafts and spreadsheets, consolidating them into one numbered sequence with a tool like our <a href="/invoice-generator">free invoice generator</a> and the <a href="/tools/invoice-number-generator">invoice number generator</a> makes the year-end close faster.</p>

<h2>Common business tax extension mistakes</h2>
<ul>
<li>Assuming the extension also delays the tax payment.</li>
<li>Filing Form 7004 for a sole proprietorship instead of Form 4868.</li>
<li>Using the wrong form code, which can cause rejection.</li>
<li>Filing after the original due date, when no automatic extension is available.</li>
<li>Forgetting the state return, which may need its own extension or payment.</li>
<li>Letting the extended deadline slip too, which brings the full late filing penalty.</li>
</ul>

<h2>Business tax extension checklist</h2>
<ul>
<li>Return type and Form 7004 code identified.</li>
<li>Name and EIN match IRS records.</li>
<li>Tax estimated from up-to-date books and invoice records.</li>
<li>Payment made by the original due date.</li>
<li>Form 7004 filed and acceptance saved.</li>
<li>State extension or payment requirement checked.</li>
<li>Owners told when K-1s will arrive.</li>
<li>Extended deadline in the calendar with a buffer of a few weeks.</li>
</ul>

<p>A business tax extension is a useful, routine tool when the paperwork is not ready, as long as you file Form 7004 on time and pay your estimated tax by the original deadline. Clean, numbered invoices make the year-end estimate much easier. If you need to tidy up billing before the books close, our <a href="/invoice-generator">free invoice generator</a> needs no sign-up, keeps the layout consistent and builds each invoice as a PDF in your browser.</p>
`,
  },
  {
    slug: "how-to-file-sales-tax-return",
    title: "How to File a Sales Tax Return (Step-by-Step Guide)",
    description:
      "How to file a sales tax return: filing frequency, what to report, exempt sales, zero returns, a worked example and the mistakes that trigger state penalties.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["sales-tax-by-state", "sellers-permit", "how-to-calculate-sales-tax"],
    faqs: [
      {
        q: "Do I have to file a sales tax return if I had no sales?",
        a: "Usually yes. If you hold a sales tax permit, most states require a return for every filing period, even when you made no sales or no taxable sales. This is called a zero return and takes a few minutes online. Missing zero returns can trigger late filing penalties or estimated assessments, and repeated misses can lead the state to revoke your permit.",
      },
      {
        q: "How do I know my sales tax filing frequency?",
        a: "The state assigns it when you register for a sales tax permit, based on your expected sales or tax collected, and tells you in the registration letter or online account. Common schedules are monthly, quarterly and annual. States review the frequency periodically and may move you to monthly filing if your sales grow, so check notices from the state revenue department.",
      },
      {
        q: "Can I file sales tax returns online?",
        a: "Yes. Most states provide an online portal for sales tax filing and payment, and many require electronic filing for some or all businesses. Some states also accept returns through certified sales tax software or the Streamlined Sales Tax system. Paper returns are increasingly limited, so register for the state portal as soon as you receive your permit number.",
      },
      {
        q: "What happens if I file a sales tax return late?",
        a: "States typically charge a late filing or late payment penalty, often a percentage of the tax due that can increase the longer the return is late, plus interest. Some also charge a minimum penalty even on zero returns. You may also lose any timely filing discount. If you realize you missed a return, file and pay as soon as possible and ask the state about penalty waivers.",
      },
      {
        q: "Do I pay sales tax on what I invoiced or what I collected?",
        a: "Most states use the accrual method for sales tax, meaning you report tax on sales when you make them or invoice them, not when the customer pays. A few states allow cash-basis reporting for some businesses. If a customer never pays an invoice on which you already remitted tax, many states let you claim a bad debt deduction on a later return.",
      },
      {
        q: "What is a timely filing discount?",
        a: "Some states let you keep a small percentage of the sales tax you collected as compensation for collecting it, provided you file and pay on time. The discount is sometimes called a vendor's collection allowance. Rates and caps vary widely, and some states offer none. It is shown as a line on the return and is lost if you file late.",
      },
      {
        q: "Do marketplace sales go on my sales tax return?",
        a: "It depends on the state. Marketplace facilitator laws require platforms such as Amazon and Etsy to collect and remit sales tax on sales through their platform. Some states still want you to report those sales on your return as gross sales and then deduct them as marketplace sales, while others tell you to exclude them. Read the state's return instructions.",
      },
      {
        q: "How do I correct a mistake on a filed sales tax return?",
        a: "Most states allow you to file an amended return through the same online portal, usually within a set period. If you underpaid, pay the extra tax with interest. If you overpaid, you can request a refund or credit. Some states instead let you adjust small errors on the next return. Keep notes explaining the correction with your records in case of an audit.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To file a sales tax return, log in to the state revenue portal for each state where you hold a permit, report your gross sales, deductions such as exempt and resale sales, and taxable sales by location, then pay the tax due by the deadline. File every period you are assigned, even with zero sales.</p>

<p>Collecting sales tax on invoices is only half the job. The other half is reporting it and sending it to the state on schedule. Sales tax returns are not complicated once you know what each line means, but missed returns and wrong figures are a common source of penalties for small businesses. This guide explains how to file a sales tax return step by step, how filing frequency works, what to do with exempt sales and zero returns, and how to avoid the mistakes that auditors look for. It is general information; rules differ by state, so always read your state's instructions.</p>

<h2>What is a sales tax return?</h2>
<p>A sales tax return is a periodic report to a state (and sometimes a city or county) showing how much you sold, how much of that was taxable, and how much sales tax you collected or owe. You file it in every state where you are registered, which generally means states where you have <a href="/blog/sales-tax-nexus">sales tax nexus</a>, either physical presence or economic nexus from sales volume.</p>
<p>You need a sales tax permit (also called a seller's permit or sales tax license) before you collect tax. Our guide to the <a href="/blog/sellers-permit">seller's permit</a> covers registration. Rates and taxable items vary widely; see <a href="/blog/sales-tax-by-state">sales tax by state</a> for an overview.</p>

<h2>How often do you file sales tax returns?</h2>
<p>Each state assigns your filing frequency when you register, usually based on the amount of tax you expect to collect. The thresholds differ by state, but the pattern looks like this:</p>
<table>
<thead><tr><th>Frequency</th><th>Typical business</th><th>Typical due date</th></tr></thead>
<tbody>
<tr><td>Monthly</td><td>Higher-volume sellers</td><td>Around the 20th of the following month (varies)</td></tr>
<tr><td>Quarterly</td><td>Many small businesses</td><td>Around the 20th or last day of the month after the quarter</td></tr>
<tr><td>Annual</td><td>Very low-volume sellers</td><td>Early in the following year</td></tr>
<tr><td>Prepayments</td><td>Very large sellers in some states</td><td>Mid-month estimated payments plus a regular return</td></tr>
</tbody>
</table>
<p>These are general patterns, not rules. Your permit letter and the state portal show your actual frequency and due dates. Put them in your calendar the day you register.</p>

<h2>What information do you need before filing?</h2>
<ul>
<li><strong>Gross sales</strong> for the period, from your invoices and receipts.</li>
<li><strong>Exempt sales:</strong> sales for resale, sales to exempt organizations, and sales of nontaxable items or services, backed by <a href="/blog/resale-certificate">resale certificates</a> or <a href="/blog/sales-tax-exemption-certificate">exemption certificates</a>.</li>
<li><strong>Taxable sales by location:</strong> many states need you to split sales by county or city so local taxes go to the right place.</li>
<li><strong>Sales tax collected,</strong> ideally matching the tax lines on your invoices.</li>
<li><strong>Use tax</strong> owed on taxable items you bought without paying sales tax and used in the business.</li>
<li><strong>Adjustments:</strong> returns, refunds, credit notes and bad debts.</li>
<li><strong>Marketplace sales</strong> if a platform collected the tax for you.</li>
</ul>
<p>An invoice system that shows the tax rate and amount on each sale makes this step much faster. Our <a href="/blog/sales-tax-on-invoices-us">guide to sales tax on invoices</a> explains how to show it.</p>

<h2>How to file a sales tax return step by step</h2>
<ol>
<li><strong>Close the period in your books.</strong> Make sure every invoice, refund and credit note dated in the period is recorded.</li>
<li><strong>Run a sales report</strong> for the period showing gross sales, taxable sales, exempt sales and tax collected, ideally by jurisdiction.</li>
<li><strong>Check exempt sales against certificates</strong> you have on file. Missing certificates are one of the first things auditors check.</li>
<li><strong>Log in to the state portal</strong> and open the return for the period.</li>
<li><strong>Enter gross sales,</strong> then the deductions (exempt, resale, out-of-state, marketplace if required), arriving at taxable sales.</li>
<li><strong>Allocate taxable sales</strong> to local jurisdictions if the state requires it. The portal calculates tax at each rate.</li>
<li><strong>Add use tax</strong> owed on business purchases, if your state reports it on the sales tax return.</li>
<li><strong>Compare tax due with tax collected.</strong> Small rounding differences are normal; large ones signal an invoicing or rate error.</li>
<li><strong>Claim any timely filing discount</strong> the state offers.</li>
<li><strong>Submit and pay</strong> by ACH debit, credit or card, and save the confirmation.</li>
</ol>

<h2>Worked example: a quarterly sales tax return</h2>
<p>A small print shop files quarterly in one state with a 6% state rate. Its county adds 1% (7% combined). The figures for July to September 2026 are illustrative:</p>
<table>
<thead><tr><th>Line</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Gross sales (all invoices)</td><td>$48,500.00</td></tr>
<tr><td>Less: sales for resale (certificates on file)</td><td>-$6,200.00</td></tr>
<tr><td>Less: nontaxable design services billed separately</td><td>-$4,800.00</td></tr>
<tr><td>Less: returns and credit notes</td><td>-$500.00</td></tr>
<tr><td><strong>Taxable sales</strong></td><td><strong>$37,000.00</strong></td></tr>
<tr><td>State tax (6%)</td><td>$2,220.00</td></tr>
<tr><td>County tax (1%)</td><td>$370.00</td></tr>
<tr><td>Use tax on $300 of supplies bought tax-free online (7%)</td><td>$21.00</td></tr>
<tr><td><strong>Total tax due</strong></td><td><strong>$2,611.00</strong></td></tr>
</tbody>
</table>
<p>Their invoices show $2,588.50 of tax collected. The $22.50 difference is the use tax plus rounding, so the return reconciles. Whether design services are taxable depends on the state; see <a href="/blog/sales-tax-on-services-by-state">sales tax on services by state</a>. To check individual invoice amounts, use our <a href="/tools/sales-tax-calculator">sales tax calculator</a> or the steps in <a href="/blog/how-to-calculate-sales-tax">how to calculate sales tax</a>.</p>

<h2>What is a zero sales tax return?</h2>
<p>A zero return reports that you had no sales, or no taxable sales, in the period. If you hold an active permit, most states require one. Seasonal businesses, startups that registered early and sellers whose only sales went through marketplaces all file zero returns regularly. Skipping them can lead to penalties, estimated bills from the state or permit cancellation. If you have stopped selling in a state for good, close the permit instead of filing zeros forever.</p>

<h2>How do you file in multiple states?</h2>
<p>Once you pass economic nexus thresholds in several states, you file separately in each one, on each state's schedule. Options to manage the load:</p>
<ul>
<li>Use each state's portal directly when you have only two or three states.</li>
<li>Use sales tax software that prepares and files returns for you.</li>
<li>Check whether a state participates in the Streamlined Sales Tax program, which offers a single registration across member states.</li>
</ul>
<p>Shipping charges are taxable in some states and not others, which affects your taxable sales line; see <a href="/blog/sales-tax-on-shipping">sales tax on shipping</a>. The Federation of Tax Administrators lists links to every <a href="https://taxadmin.org/">state tax agency</a> where you can find returns and instructions.</p>

<h2>How to set up invoices so sales tax returns are easy</h2>
<p>Most sales tax return problems start at the invoice. A few habits make filing quick and audits painless:</p>
<ol>
<li><strong>Show tax on its own line.</strong> List the subtotal, the tax rate, the tax amount and the total separately, so you can add up tax collected directly from your invoices.</li>
<li><strong>Separate taxable and nontaxable items.</strong> If you sell both products and services, list them as separate lines. In many states, a bundled price can make the whole charge taxable.</li>
<li><strong>Record the ship-to or service location.</strong> In destination-based states, the rate depends on where the customer receives the goods, not where you are.</li>
<li><strong>Mark exempt sales clearly.</strong> Note "Exempt, resale certificate on file" or the exemption reason on the invoice and keep the certificate.</li>
<li><strong>Number invoices sequentially.</strong> A continuous sequence shows an auditor that no sales are missing.</li>
<li><strong>Issue credit notes for refunds</strong> rather than editing old invoices, so returns are visible in the period they happen.</li>
</ol>
<p>Our <a href="/invoice-generator">invoice generator</a> lets you set a tax rate and shows the tax amount separately on each invoice, and the <a href="/invoice-templates">invoice templates</a> include layouts for both product and service sales.</p>

<h2>Common sales tax return mistakes</h2>
<ul>
<li><strong>Not filing zero returns</strong> for periods with no sales.</li>
<li><strong>Reporting tax collected instead of tax due,</strong> which hides undercharging errors until an audit.</li>
<li><strong>No exemption certificates</strong> for sales claimed as exempt.</li>
<li><strong>Wrong local allocation,</strong> such as using your business address instead of the customer's delivery address in destination-based states.</li>
<li><strong>Ignoring use tax</strong> on out-of-state purchases.</li>
<li><strong>Double counting marketplace sales</strong> the platform already remitted.</li>
<li><strong>Filing late</strong> and losing the timely filing discount on top of paying penalties.</li>
<li><strong>Using sales tax money for cash flow.</strong> Keep collected tax in a separate account until the return is paid.</li>
</ul>

<h2>Sales tax return checklist</h2>
<ul>
<li>Permit numbers, portal logins and filing frequency for every state.</li>
<li>Due dates in the calendar for every period.</li>
<li>All invoices and credit notes recorded for the period.</li>
<li>Sales report by jurisdiction run and reviewed.</li>
<li>Exemption and resale certificates on file.</li>
<li>Use tax reviewed.</li>
<li>Return submitted, payment made, confirmation saved.</li>
<li>Records kept for the state's audit period, typically several years.</li>
</ul>

<p>Filing a sales tax return comes down to accurate invoices, a clean sales report and a habit of filing every period on time, zero returns included. When each invoice shows the correct rate and tax amount, the return almost fills itself. Our <a href="/invoice-generator">free invoice generator</a> lets you add a tax rate to each invoice, needs no sign-up and builds the PDF in your browser for download.</p>
`,
  },
];
