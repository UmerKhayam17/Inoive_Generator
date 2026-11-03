import type { PostDraft } from "../blog";

export const TAX_STRATEGIES_2026_POSTS: PostDraft[] = [
  {
    slug: "augusta-rule",
    title: "Augusta Rule (Section 280A): Rent Your Home to Your Business",
    description:
      "The Augusta Rule lets you rent your home to your business for up to 14 days a year tax-free. Learn the 280A(g) rules, fair rent, paperwork and audit risks.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "home-office-deduction",
      "s-corp-reasonable-salary",
      "accountable-plan",
    ],
    faqs: [
      {
        q: "What is the Augusta Rule in simple terms?",
        a: "The Augusta Rule is the nickname for Section 280A(g) of the Internal Revenue Code. If you rent out a home you live in for 14 days or fewer during the year, you do not report the rent as income and you do not deduct rental expenses. Business owners use it by renting their home to their own company for real business events, such as board meetings or team planning days. The company deducts the rent as a business expense, while the owner receives it tax-free, as long as the rent is fair and the meetings actually happen.",
      },
      {
        q: "Can a sole proprietor use the Augusta Rule?",
        a: "Not in any useful way. A sole proprietor or single-member LLC taxed as a disregarded entity is the same taxpayer as the business, so paying rent to yourself creates no deduction. The strategy works when the business is a separate taxpayer, typically an S corporation, a C corporation or a partnership. If you run a sole proprietorship, the home office deduction is the usual way to deduct the business use of your home instead, and it follows very different rules.",
      },
      {
        q: "How much rent can my business pay me under the Augusta Rule?",
        a: "There is no fixed dollar cap, but the rent must be a fair market rate for comparable space in your area. Most advisers support the rate with written quotes from nearby hotel meeting rooms, event venues or coworking spaces of similar size and amenities. The business deduction also has to be ordinary and necessary, so the amount should match a real meeting with a real agenda. Inflated daily rates are the most common reason deductions are reduced in an examination.",
      },
      {
        q: "Do the 14 days include Airbnb or other rentals of my home?",
        a: "Yes. The test counts all days the dwelling is rented during the year, not only the days rented to your business. If you also rent the home on a short-term rental platform, those days are added in. Once total rental days reach 15 or more, the exclusion is lost for every rental dollar that year, and the normal rental income and expense rules apply. Track every rental day on a calendar before you book company meetings at home.",
      },
      {
        q: "Will my business issue me a Form 1099 for Augusta Rule rent?",
        a: "Possibly. A business that pays rent of $2,000 or more to an individual in 2026 generally reports it on Form 1099-MISC, because the One Big Beautiful Bill Act raised the reporting threshold from $600 starting with payments made in 2026. Receiving a 1099 does not make the rent taxable, but the amount will appear in IRS matching. Ask your tax preparer how they show the payment and the Section 280A(g) exclusion on your return, so the IRS can see why the income is not taxed.",
      },
      {
        q: "What records do I need to support the Augusta Rule?",
        a: "Keep a written rental agreement for each event, the dates and the space used, the fair rent analysis with comparable quotes, the meeting agenda, the attendee list, minutes or notes of what was decided, and proof of payment from the business account to you. An invoice from you to the company for each rental is a simple way to tie the rate, date and payment together. Store the file with your business tax records for at least as long as the return can be examined.",
      },
      {
        q: "Is the Augusta Rule a tax loophole the IRS dislikes?",
        a: "It is a legal provision written into the tax code, not a loophole, but the IRS scrutinizes how it is used. Examiners do not usually challenge the owner's exclusion; they challenge the business deduction when rent is above market or the meetings look like family gatherings. Treat it like any related-party transaction: real business purpose, arm's-length price and documents created at the time, not reconstructed later.",
      },
    ],
    content: `
<p>The Augusta Rule lets a homeowner rent out the home they live in for 14 days or fewer a year without paying tax on the rent. Business owners use it by having their S corporation, C corporation or partnership rent the home for genuine meetings: the company deducts the rent, and the owner receives it tax-free. It works only with a fair market rate, a real business purpose and solid paperwork.</p>

<p>The name comes from homeowners in Augusta, Georgia, who rent their houses to visitors during the Masters golf tournament each April and, thanks to Section 280A(g), keep that short-term rent free of federal income tax. The same rule applies to any homeowner anywhere in the United States. This guide covers who can use it, how to set a defensible rent, a worked example with numbers, how to paper the transaction with invoices, and the mistakes that get deductions cut. It is general information, not tax advice, so confirm the details with a CPA or enrolled agent before you rely on it.</p>

<h2>How the Augusta Rule works under Section 280A(g)</h2>
<p>Section 280A generally limits deductions for homes that are also used personally. Subsection (g) carves out a special case: if a dwelling unit is used by the taxpayer as a residence during the year and is actually rented for fewer than 15 days, the rental income is not included in gross income and no rental deductions are allowed. In plain terms, 14 days or fewer means the rent is invisible for income tax purposes.</p>
<p>The rule is all or nothing. On day 15 the exclusion disappears for the whole year, and you are back in the normal rental rules with income reporting, expense allocation and possibly the short-term rental passive loss rules covered in our guide to the <a href="/blog/short-term-rental-tax-loophole">short-term rental tax loophole</a>. Professional firms such as <a href="https://weaver.com/resources/the-augusta-rule-tax-benefits-for-homeowners-renting-their-property/" target="_blank" rel="noopener noreferrer">Weaver</a> and <a href="https://www.adamsandreese.com/insights/understanding-the-internal-revenue-codes-augusta-rule" target="_blank" rel="noopener noreferrer">Adams and Reese</a> summarize the same core test: a residence, a rental period that does not exceed 14 days, and a fair rate.</p>

<h3>What counts as a dwelling unit</h3>
<p>A house, apartment, condominium, mobile home or boat with basic living accommodations can qualify. It must be a place you use as a residence during the year, which includes a second home or vacation home you use personally, not only your main home. The 14-day count applies per dwelling unit, so owners with two homes sometimes ask whether each gets its own 14 days. That question has nuances, so raise it with your adviser rather than assuming it.</p>

<h2>Who can use the Augusta Rule for business meetings?</h2>
<p>The strategy creates a benefit only when the payer and the payee are different taxpayers. The business deducts rent, and you as an individual exclude it. That structure fits some entities and not others.</p>
<table><thead><tr><th>Business structure</th><th>Can it benefit?</th><th>Why</th></tr></thead><tbody>
<tr><td>S corporation</td><td>Yes, the most common use</td><td>The S corp deducts rent, which lowers the profit passed through on your K-1; you exclude the rent personally</td></tr>
<tr><td>C corporation</td><td>Yes</td><td>The corporation deducts rent against corporate income; you exclude the rent</td></tr>
<tr><td>Multi-member LLC or partnership</td><td>Yes, with care</td><td>The partnership deducts rent; the paying partner's share of the deduction and the arrangement need clear documentation</td></tr>
<tr><td>Single-member LLC (disregarded) or sole proprietorship</td><td>No practical benefit</td><td>You cannot rent to yourself; use the <a href="/blog/home-office-deduction">home office deduction</a> instead</td></tr>
</tbody></table>
<p>If you are still choosing an entity, the Augusta Rule is a minor factor next to payroll and self-employment tax, so read <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> before restructuring just to use it.</p>

<h2>Setting a fair rental rate the IRS will accept</h2>
<p>The owner's exclusion is rarely the problem. The business deduction is, because a deduction must be ordinary, necessary and reasonable in amount. A fair rate is what an unrelated business would pay for comparable space for the same event.</p>
<ol>
<li><strong>Define the space and use.</strong> Example: living room and dining room for an eight-person planning meeting, 9 a.m. to 4 p.m., with Wi-Fi, a screen and kitchen access.</li>
<li><strong>Collect three comparable quotes.</strong> Hotel meeting rooms, conference centers, event venues or private coworking rooms in your area for the same headcount and hours. Save screenshots or emails with the date.</li>
<li><strong>Adjust honestly.</strong> If the quotes include catering or AV that your home does not offer, strip those costs out. If your home lacks parking or accessibility, price below the venues, not above.</li>
<li><strong>Use the same rate all year.</strong> A consistent day rate backed by the same comparables looks like a policy, not a number picked to hit a target.</li>
<li><strong>Revisit annually.</strong> Refresh quotes each year so the rate reflects current local prices.</li>
</ol>
<p>Avoid basing the rate on luxury wedding venues or on the nightly price of renting your entire house to vacationers. A business meeting for a handful of people in a living room is not the same product.</p>

<h2>Worked example: S corporation owner holds quarterly meetings at home</h2>
<p>The figures below are illustrative. Maria owns a marketing agency taxed as an S corporation. She holds a board meeting and a team strategy day each quarter at her home, eight events a year. Three nearby venues quote $1,150, $1,300 and $1,450 per day for a comparable private room, so she sets a policy rate of $1,300 per day.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Days rented to the S corporation</td><td>8</td></tr>
<tr><td>Daily rate (median of three quotes)</td><td>$1,300</td></tr>
<tr><td>Total rent paid by the S corporation</td><td>$10,400</td></tr>
<tr><td>Reduction in S corp profit passed through to Maria</td><td>$10,400</td></tr>
<tr><td>Federal income tax saved at an assumed 24% marginal rate</td><td>$2,496</td></tr>
<tr><td>Rent included in Maria's gross income</td><td>$0 (excluded under 280A(g))</td></tr>
</tbody></table>
<p>She has six days left under the 14-day ceiling and does not rent the house to anyone else. State tax treatment varies, so her preparer also checks whether her state follows the federal exclusion. The savings are real but modest; the strategy is worth it for Maria because her company genuinely needs the meetings and her home is a reasonable place to hold them.</p>

<h2>Paperwork: invoices, agreements and meeting records</h2>
<p>Treat the rental exactly as you would a payment to an outside venue. That means a short rental agreement, an invoice, a payment from the business bank account and evidence that the meeting took place.</p>
<ul>
<li><strong>Rental agreement:</strong> parties, address, dates, rooms used, hours and daily rate. One master agreement with a schedule of dates works well.</li>
<li><strong>Invoice for each event:</strong> issue an invoice from you personally to the company showing the date, space, rate and total. A <a href="/blog/rent-invoice-template">rent invoice template</a> fits this neatly, and our <a href="/invoice-generator">free invoice generator</a> can produce a numbered PDF in a minute.</li>
<li><strong>Payment:</strong> the company pays from its business account to your personal account, never in cash and never by mixing it into salary.</li>
<li><strong>Meeting evidence:</strong> agenda, attendee list, minutes or decisions, and photos if helpful. Board minutes for an S corporation are ideal.</li>
<li><strong>Fair rent file:</strong> the comparable quotes and how you chose the rate.</li>
</ul>
<p>If the company pays $2,000 or more of rent to you in 2026, it will generally file Form 1099-MISC, since the reporting threshold for 1099-NEC and 1099-MISC rose to $2,000 for payments made in 2026; see our guide to the <a href="/blog/1099-nec-threshold-2026">1099 threshold in 2026</a>. Keep the full packet with your other records as described in our <a href="/blog/invoice-audit-preparation">invoice audit preparation</a> checklist.</p>

<h2>Common Augusta Rule mistakes</h2>
<ul>
<li><strong>Counting only business days.</strong> Days rented to anyone else, including vacation rental guests, count toward the 14-day limit.</li>
<li><strong>Family events labeled as meetings.</strong> A birthday party with a short business discussion is not a business meeting. Courts have reduced deductions where the business purpose was thin; in Sinopoli v. Commissioner, a 2023 Tax Court memorandum, the court disallowed most of an S corporation's claimed rent for meetings at the owners' homes because the rate and the meetings were poorly supported.</li>
<li><strong>Above-market rates.</strong> Pricing a living room like a ballroom invites an adjustment.</li>
<li><strong>Renting space already deducted as a home office.</strong> If you also claim a home office, do not rent that same space to the business on top of it. Keep the two arrangements clearly separate.</li>
<li><strong>Skipping reasonable salary.</strong> Augusta Rule rent is not a substitute for wages. S corporation owners who work in the business still need a <a href="/blog/s-corp-reasonable-salary">reasonable salary</a>.</li>
<li><strong>Using it for a sole proprietorship.</strong> Paying yourself creates no deduction when you and the business are the same taxpayer.</li>
</ul>

<h2>How the Augusta Rule fits with other owner strategies</h2>
<p>The rule often sits alongside other ways of moving legitimate business costs out of your personal pocket. An <a href="/blog/accountable-plan">accountable plan</a> reimburses you tax-free for business expenses you pay personally, such as mileage or a portion of home office costs. Some owners also employ family members; see our guides to <a href="/blog/hiring-your-spouse">hiring your spouse</a> and hiring your children. Each strategy has its own documentation, and stacking them only works when every piece stands on its own facts.</p>
<p>If you claim a home office on your personal return, the separate form and calculations are explained in our <a href="/blog/form-8829">Form 8829 guide</a>.</p>

<h2>What to do if the IRS questions your Augusta Rule rent</h2>
<p>If an examiner asks about the rent, provide the agreement, invoices, payment records, agendas and minutes, and the fair rent analysis. Most disputes end with an adjustment to the daily rate rather than full disallowance when the meetings are real. If records are missing, do not create backdated documents; work with a representative to reconstruct what happened from calendars, emails and attendee statements, and be prepared to accept a lower rate. Going forward, build the paperwork at the time of each event.</p>

<h2>Is the Augusta Rule worth it for your business?</h2>
<p>It suits owners of S corporations, C corporations or partnerships who genuinely meet at home a few times a year and are willing to document it properly. It is less attractive if the business has no real need for meetings, if your home is impractical for business use, or if you already rent your home short term and are near the 14-day limit. Run the numbers using your marginal rate and a realistic number of days, and compare the savings with the time and adviser cost.</p>

<p>When you do rent your home to your company, bill each event like any other vendor would. Create a clear rental invoice with dates, space and rate using our <a href="/invoice-generator">free invoice generator</a>: no sign-up, and you can download it as a PDF for your records and your company's books.</p>
`,
  },
  {
    slug: "hiring-your-children",
    title: "Hiring Your Children in Your Business: 2026 Tax Rules",
    description:
      "Hiring your children can cut family taxes legally. See 2026 FICA and FUTA exemptions, the $16,100 standard deduction, payroll steps and records you need.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "hiring-your-first-employee",
      "form-w-2",
      "employer-payroll-taxes",
    ],
    faqs: [
      {
        q: "How much can I pay my child tax-free in 2026?",
        a: "A child with only earned income can generally earn up to the 2026 standard deduction for a single filer, $16,100, without owing federal income tax, because the standard deduction for a dependent with earned income is the greater of $1,350 or earned income plus $450, capped at the regular amount. If the child is under 18 and works for a parent's sole proprietorship or a partnership owned only by the parents, the wages are also exempt from Social Security and Medicare taxes. State income tax rules may differ.",
      },
      {
        q: "Does hiring my child work if my business is an S corporation?",
        a: "The income tax benefits still work: the S corporation deducts reasonable wages and the child may owe little or no income tax. However, the payroll tax exemptions do not apply. The IRS says wages paid by a corporation are subject to income tax withholding, Social Security, Medicare and FUTA regardless of the child's age. Some families use a separate parent-owned sole proprietorship or partnership that provides genuine services, but that structure needs real substance and professional advice.",
      },
      {
        q: "How young can my child be to work in my business?",
        a: "Federal child labor law allows children of any age to work for a business wholly owned by their parents, except that children under 16 cannot work in mining or manufacturing and no one under 18 may work in occupations the Department of Labor has declared hazardous. For tax purposes, the work must be real and the pay reasonable for the task, so very young children can only justify small wages for simple tasks, such as appearing in marketing photos. State labor laws and work permit rules may add requirements.",
      },
      {
        q: "Can I still claim my child as a dependent if I pay them wages?",
        a: "Usually yes. A qualifying child has no gross income limit, so wages alone do not stop you from claiming the child. The support test still applies: the child must not provide more than half of their own support. If wages are saved, invested or put into a Roth IRA rather than spent on the child's own support, the dependency claim is normally unaffected. Check the support rules if your child earns a large amount and pays their own living costs.",
      },
      {
        q: "Do I need to file a W-2 for my child?",
        a: "Yes. A child employee is an employee like any other, so you issue a Form W-2 and file it with the Social Security Administration along with Form W-3. Even when no Social Security or Medicare tax is due because of the family exemption, the W-2 reports the wages and any income tax withheld. You also need a Form W-4 and Form I-9 on file. Payroll software can handle child employees as long as you set the correct tax exemptions.",
      },
      {
        q: "Can my child open a Roth IRA with wages from my business?",
        a: "Yes, if the child has earned income. Contributions are limited to the lesser of the child's earned income or the annual IRA limit, which is $7,500 for 2026. A custodial Roth IRA can be opened at most brokerages. The money grows tax-free, and the wages must be real earned income, which is one more reason to keep timesheets and pay through payroll rather than informal transfers.",
      },
      {
        q: "What happens when my child turns 18?",
        a: "In a sole proprietorship or parents-only partnership, wages become subject to Social Security and Medicare tax from age 18, though FUTA still does not apply until age 21. The income tax benefit continues as long as the wages are reasonable and the work is real. Many families keep employing adult children for summer work, but the savings shrink once payroll taxes apply.",
      },
    ],
    content: `
<p>Hiring your children in your business lets you deduct reasonable wages you pay them, while your child often owes little or no federal income tax because of the standard deduction. If you run a sole proprietorship or a partnership owned only by the parents, wages paid to a child under 18 also escape Social Security and Medicare taxes. The work has to be real, the pay reasonable and the payroll handled properly.</p>

<p>This guide explains the 2026 rules for hiring your children, which business structures get the payroll tax break, how to set a defensible wage, a worked example with numbers, and the records that keep the arrangement safe in an audit. It is general information, not tax advice; confirm the details for your situation with a tax professional.</p>

<h2>Why hiring your children saves tax</h2>
<p>The savings come from three places at once:</p>
<ul>
<li><strong>Your deduction.</strong> Reasonable wages are a business expense. In a sole proprietorship they reduce both income tax and <a href="/blog/self-employment-tax">self-employment tax</a> on your profit.</li>
<li><strong>Your child's low tax rate.</strong> For 2026, a single filer's standard deduction is $16,100, and a dependent with earned income gets the greater of $1,350 or earned income plus $450, up to that $16,100. A child earning wages of $16,100 or less, with no other income, generally owes no federal income tax.</li>
<li><strong>Payroll tax exemptions.</strong> In qualifying structures, a child under 18 pays no Social Security or Medicare tax, and no federal unemployment (FUTA) tax applies until 21.</li>
</ul>
<p>The standard deduction figures come from the IRS's 2026 inflation adjustments in Revenue Procedure 2025-32. The 2027 amounts are announced separately each autumn; see our guide to <a href="/blog/federal-tax-brackets-2027">2027 tax brackets and standard deduction</a> for the latest status.</p>

<h2>FICA and FUTA rules by business type</h2>
<p>The IRS <a href="https://www.irs.gov/businesses/small-businesses-self-employed/family-help" target="_blank" rel="noopener noreferrer">family employees page</a> sets out which wages escape payroll taxes. The structure of your business matters more than anything else.</p>
<table><thead><tr><th>Who employs the child</th><th>Income tax withholding</th><th>Social Security and Medicare</th><th>FUTA</th></tr></thead><tbody>
<tr><td>Parent's sole proprietorship (including a single-member LLC taxed as a disregarded entity)</td><td>Applies if wages exceed what the W-4 exempts</td><td>Not owed while the child is under 18</td><td>Not owed while the child is under 21</td></tr>
<tr><td>Partnership in which every partner is a parent of the child</td><td>Applies</td><td>Not owed while the child is under 18</td><td>Not owed while the child is under 21</td></tr>
<tr><td>S corporation or C corporation</td><td>Applies</td><td>Owed at any age</td><td>Owed at any age</td></tr>
<tr><td>Partnership with any non-parent partner</td><td>Applies</td><td>Owed at any age</td><td>Owed at any age</td></tr>
</tbody></table>
<p>If your company is an S corporation, the income tax shifting still works, but you will pay normal employer payroll taxes on the child's wages. Our overview of <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> explains what those cost.</p>

<h2>What work can children do, and what is a reasonable wage?</h2>
<p>The IRS and the courts look at two questions: did the child actually do the work, and is the pay what you would pay an unrelated person for the same work? Age-appropriate tasks are the key.</p>
<table><thead><tr><th>Age range</th><th>Typical genuine tasks</th><th>Pay guidance</th></tr></thead><tbody>
<tr><td>Under 10</td><td>Modeling in product photos or ads, simple sorting</td><td>Small, per-session amounts at local modeling or similar rates</td></tr>
<tr><td>10 to 13</td><td>Filing, shredding, stuffing envelopes, cleaning the office, packing orders</td><td>Local entry-level hourly rates, limited hours</td></tr>
<tr><td>14 to 17</td><td>Social media posts, data entry, reception, inventory, basic bookkeeping, website updates</td><td>Market rate for the role, often at or above local minimum wage</td></tr>
</tbody></table>
<p>Federal child labor rules allow children of any age to work for a business wholly owned by their parents in non-hazardous jobs, with extra restrictions on mining, manufacturing and hazardous occupations. State law may require work permits or limit hours, so check your state labor department.</p>
<p>Pay by the hour from a timesheet rather than a round annual figure. A child who logs 6 hours a week at $15 has a defensible wage; a 9-year-old paid $16,000 for unspecified help does not.</p>

<h2>Step by step: putting your child on payroll</h2>
<ol>
<li><strong>Write a simple job description.</strong> List tasks, expected hours and the hourly rate, with a note of how you set it (local job ads or minimum wage).</li>
<li><strong>Collect forms.</strong> Form W-4 for withholding, Form I-9 for employment eligibility and any state forms. Your child needs a Social Security number.</li>
<li><strong>Set up payroll correctly.</strong> Flag the employee as exempt from FICA and FUTA only if your structure qualifies. If you are new to this, our guides to <a href="/blog/hiring-your-first-employee">hiring your first employee</a> and <a href="/blog/how-to-do-payroll-yourself">doing payroll yourself</a> walk through the setup.</li>
<li><strong>Track time.</strong> Use a <a href="/blog/timesheet-template">timesheet template</a> signed weekly or a time-tracking app.</li>
<li><strong>Pay from the business account</strong> into an account in the child's name, on a regular payday.</li>
<li><strong>File year-end forms.</strong> Issue a <a href="/blog/form-w-2">Form W-2</a> and send it to the Social Security Administration with a <a href="/blog/form-w-3">Form W-3</a> transmittal.</li>
<li><strong>Consider a Roth IRA.</strong> Your child can contribute up to the lesser of earned income or $7,500 for 2026.</li>
</ol>

<h2>Worked example: sole proprietor hires a 16-year-old</h2>
<p>These numbers are illustrative. James runs a home-based print shop as a sole proprietor with $120,000 of net profit before family wages. His 16-year-old daughter works 15 hours a week during the school year and more in summer, about 800 hours a year, packing orders and editing product photos at $15 an hour.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Wages paid (800 hours x $15)</td><td>$12,000</td></tr>
<tr><td>James's federal income tax saved at an assumed 22% marginal rate</td><td>about $2,640</td></tr>
<tr><td>James's self-employment tax saved ($12,000 x 92.35% x 15.3%)</td><td>about $1,695</td></tr>
<tr><td>Social Security and Medicare on the daughter's wages</td><td>$0 (under 18, sole proprietorship)</td></tr>
<tr><td>Daughter's federal income tax (wages below $16,100 standard deduction)</td><td>$0</td></tr>
<tr><td>Approximate family federal tax saved</td><td>about $4,300</td></tr>
</tbody></table>
<p>The SE tax line simplifies by ignoring the small interaction with the deduction for half of SE tax. James also keeps claiming his daughter as a dependent because she saves her pay, and she puts $5,000 into a custodial Roth IRA. Had his business been an S corporation, the payroll tax exemption would not apply, so the savings would be smaller.</p>

<h2>Common mistakes when you hire your kids</h2>
<ul>
<li><strong>No payroll, just transfers.</strong> Paying allowance-style transfers and calling them wages at year end is the fastest way to lose the deduction.</li>
<li><strong>Unreasonable pay.</strong> Wages far above the market rate for the task get reduced, and the excess is treated as a nondeductible gift.</li>
<li><strong>Wrong structure for the FICA exemption.</strong> Corporations and partnerships with non-parent partners do not qualify.</li>
<li><strong>Spending the wages on the child's normal support.</strong> If the pay just funds groceries and clothes you would buy anyway, examiners may question whether the wages are real. Keep the money in the child's own account.</li>
<li><strong>Forgetting state rules.</strong> Some states have their own unemployment, payroll and labor rules for minors.</li>
<li><strong>Missing W-2s.</strong> Late or missing information returns bring penalties even when no payroll tax is due.</li>
</ul>

<h2>Edge cases: S corporations, older children and state tax</h2>
<h3>If your business is an S corporation</h3>
<p>The S corporation can still deduct reasonable wages, and your child still benefits from the standard deduction, so the income tax shift works. What you lose is the payroll tax exemption: the company pays the employer share of Social Security and Medicare and FUTA, and withholds the employee share. For a child earning $10,000, that is roughly $1,530 of combined FICA plus a small FUTA amount. Some families create a separate sole proprietorship or parents-only partnership, for example a marketing or management business owned by the parents, which bills the S corporation for services and employs the children. That only works if the second business is real, has its own invoices, bank account and records, and charges a fair price. A structure that exists only to move payroll is easy for an examiner to collapse.</p>
<h3>Children aged 18 to 20</h3>
<p>From 18, wages in a sole proprietorship become subject to Social Security and Medicare, but FUTA still does not apply until 21. College-age children working summer jobs in the business can still save the family income tax if they are in a lower bracket than you.</p>
<h3>State income tax and unemployment</h3>
<p>Most states follow the federal treatment of wages, but state standard deductions are often lower, so a child may owe a small amount of state tax. State unemployment insurance rules for family employees differ from FUTA, so check your state's rules before assuming no state payroll tax applies.</p>
<h3>Kiddie tax</h3>
<p>The kiddie tax applies to a child's unearned income, such as dividends and interest, above a threshold ($2,700 for 2026). It does not apply to wages, which is one reason earned income from a family business is treated more favorably than shifting investments to a child.</p>

<h2>Hiring your children alongside other family tax strategies</h2>
<p>Family employment often goes together with <a href="/blog/hiring-your-spouse">hiring your spouse</a>, which brings different benefits such as retirement contributions and health reimbursement plans. Owners of S corporations sometimes add the Augusta Rule for meetings at home. Teens with their own self-employment income, such as babysitting or freelance design for outside clients, are a separate case: they may owe self-employment tax once net earnings reach $400 and should keep their own records.</p>

<h2>What to do if you are audited</h2>
<p>Bring the job description, timesheets, payroll records, bank statements showing payment into the child's account, W-2s and examples of the work. Examiners mainly test whether the work happened and whether the rate matches the task. Contemporaneous timesheets usually settle both questions. If your records are thin for a past year, talk to a tax professional before the meeting rather than producing new documents.</p>

<p>Running a family business means keeping the client side tidy too. Invoice your customers on time and keep clean income records with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, and every invoice downloads as a PDF ready for your books.</p>
`,
  },
  {
    slug: "hiring-your-spouse",
    title: "Hiring Your Spouse: Tax Benefits and Pitfalls in 2026",
    description:
      "Hiring your spouse can unlock tax benefits like a second 401(k) and a health reimbursement plan. Learn the 2026 FICA and FUTA rules, pitfalls and paperwork.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "solo-401k-vs-sep-ira",
      "self-employed-health-insurance-deduction",
      "hiring-your-first-employee",
    ],
    faqs: [
      {
        q: "Does hiring your spouse save payroll taxes?",
        a: "Usually not by itself. Wages paid to a spouse in a sole proprietorship are subject to income tax withholding and Social Security and Medicare taxes, though not FUTA. Shifting profit into wages swaps self-employment tax for payroll tax at a similar rate, so the direct saving is small. The real benefits are a second set of retirement contributions, a possible health reimbursement plan, Social Security credits for the spouse and access to employee fringe benefits.",
      },
      {
        q: "Is a spouse employee exempt from FUTA tax?",
        a: "Yes, when one spouse employs the other in their own business as an individual, such as a sole proprietorship. The IRS states that those wages are subject to income tax withholding and Social Security and Medicare taxes but not FUTA. The exemption does not apply when the employer is a corporation or a partnership, which pays FUTA on all employees, including spouses of owners. State unemployment rules vary.",
      },
      {
        q: "Can my spouse and I both contribute to a 401(k) if I hire them?",
        a: "Yes. A spouse who is a real employee with earned income can make their own employee deferrals, up to $24,500 for 2026 plus any catch-up they qualify for, limited by their compensation. The business can also make employer contributions. Solo 401(k) plans generally allow an owner and the owner's spouse to participate without converting to a full employee plan, which is why many self-employed couples use this approach.",
      },
      {
        q: "What is a Section 105 plan for a spouse employee?",
        a: "A Section 105 medical reimbursement plan lets an employer reimburse an employee's medical expenses, including those of the employee's spouse and dependents, tax-free. A sole proprietor who employs their spouse may be able to reimburse family medical costs through the spouse's employment, turning them into a business deduction that reduces both income tax and self-employment tax. The plan must be in writing, the spouse must be a bona fide employee, and federal health plan rules apply, so set it up with an adviser.",
      },
      {
        q: "Should my spouse be an employee or a partner?",
        a: "It depends on the facts. The IRS treats a spouse as an employee when one spouse controls the business and the other takes direction. If both have an equal say, contribute capital and share the work, a partnership relationship may exist, which normally means filing Form 1065 unless you qualify for a qualified joint venture election. The label must match reality, not only the paperwork.",
      },
      {
        q: "Can an S corporation owner hire their spouse?",
        a: "Yes, and the spouse is treated like any other employee for payroll: wages are subject to withholding, Social Security, Medicare and FUTA. One catch is that the spouse of a more-than-2% shareholder is treated as a more-than-2% shareholder for fringe benefit purposes through family attribution, so health insurance and some benefits are taxed differently than for regular employees. Reasonable compensation rules apply to both spouses if both work in the business.",
      },
      {
        q: "What records do I need to employ my spouse?",
        a: "Keep a job description, time records, a W-4 and I-9, payroll records, pay stubs and bank statements showing wages paid from the business account to an account the spouse controls. Issue a W-2 each year. If you have a medical reimbursement plan, keep the plan document, claims and receipts. The point is to show a real employer-employee relationship, not just a transfer between joint accounts.",
      },
    ],
    content: `
<p>Hiring your spouse is not mainly a payroll tax trick: in a sole proprietorship their wages still carry Social Security and Medicare tax, though not federal unemployment tax. The value lies elsewhere, in a second 401(k), employer-paid benefits such as a health reimbursement plan, and Social Security credits for the working spouse. Done properly, it can save a household thousands; done carelessly, it creates payroll work with no benefit.</p>

<p>This guide covers the 2026 tax rules for hiring your spouse, when it pays off, how it compares with a partnership or qualified joint venture, a worked example, and the mistakes that sink these arrangements. It is general information, not tax advice; confirm the specifics with a CPA or enrolled agent.</p>

<h2>How the IRS treats a spouse employee</h2>
<p>The IRS page on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/married-couples-in-business" target="_blank" rel="noopener noreferrer">married couples in business</a> explains that a spouse is an employee when there is an employer-employee relationship: one spouse substantially controls the business and the other takes direction. In that case the wages are subject to income tax withholding and Social Security and Medicare taxes, but not to FUTA tax, when the employer is the other spouse as an individual.</p>
<table><thead><tr><th>Employer</th><th>Income tax withholding</th><th>Social Security and Medicare</th><th>FUTA</th></tr></thead><tbody>
<tr><td>Spouse's sole proprietorship or disregarded single-member LLC</td><td>Yes</td><td>Yes</td><td>No</td></tr>
<tr><td>Partnership or multi-member LLC</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>S corporation or C corporation</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
</tbody></table>
<p>Compare this with children under 18, who escape Social Security and Medicare in a parent's sole proprietorship; our guide to <a href="/blog/hiring-your-children">hiring your children</a> covers those rules.</p>

<h2>Real benefits of hiring your spouse</h2>
<h3>A second retirement account</h3>
<p>An employee spouse with earned income can defer up to $24,500 into a 401(k) for 2026, plus catch-up contributions if eligible, limited to their pay. The business can add employer contributions on top. Self-employed couples often use a solo 401(k), which can cover an owner and spouse; our comparison of <a href="/blog/solo-401k-vs-sep-ira">solo 401(k) vs SEP IRA</a> shows how the numbers differ, and the 2027 limits will be announced by the IRS separately.</p>

<h3>Health reimbursement through a Section 105 plan</h3>
<p>A sole proprietor cannot be their own employee, so they normally deduct health insurance premiums through the <a href="/blog/self-employed-health-insurance-deduction">self-employed health insurance deduction</a>, which does not reduce self-employment tax. By employing a spouse under a written medical reimbursement plan that covers the employee and family, some owners turn out-of-pocket medical costs and premiums into a business expense that also lowers self-employment tax. These plans are governed by federal health plan rules that changed after the Affordable Care Act, so design and documentation matter. Use a professional plan administrator or adviser.</p>

<h3>Social Security credits and disability coverage</h3>
<p>Wages build the spouse's own Social Security earnings record, which can matter for disability and retirement benefits, particularly if the spouse has a thin work history.</p>

<h3>Tax-free reimbursements and fringe benefits</h3>
<p>As an employee, your spouse can be reimbursed for business mileage, travel and supplies under an <a href="/blog/accountable-plan">accountable plan</a>. Travel costs for a spouse who comes along on a business trip are generally deductible only if the spouse is an employee with a real business purpose for being there.</p>

<h2>Spouse employee vs partner vs qualified joint venture</h2>
<p>The structure must match how you really run the business. If both spouses manage it equally, invest capital and share the work, the IRS may see a partnership, which normally files <a href="/blog/form-1065">Form 1065</a>. A married couple who co-own an unincorporated business, file a joint return and both materially participate can instead elect to be a qualified joint venture, with each spouse filing a Schedule C for their share. That election is not available if the business is held in an LLC or other state-law entity, though special rules exist in community property states.</p>
<table><thead><tr><th>Arrangement</th><th>Best when</th><th>Tax forms</th><th>Main benefit</th></tr></thead><tbody>
<tr><td>Spouse as employee</td><td>One spouse owns and runs the business; the other works under direction</td><td>Payroll, W-2, Schedule C for owner</td><td>Retirement deferrals, benefit plans, no FUTA in sole proprietorship</td></tr>
<tr><td>Partnership</td><td>Equal management, both contribute capital</td><td>Form 1065, K-1s</td><td>Clear co-ownership</td></tr>
<tr><td>Qualified joint venture</td><td>Co-owned unincorporated business, joint return</td><td>Two Schedule Cs and SEs</td><td>Both spouses earn SE credit without a partnership return</td></tr>
</tbody></table>

<h2>Worked example: consultant employs spouse as office manager</h2>
<p>The numbers are illustrative. Priya is a sole proprietor consultant with $160,000 of net profit before spouse wages. Her husband Dev works 20 hours a week handling scheduling, invoicing and bookkeeping. She pays him $30,000 a year, in line with local part-time office manager rates.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Dev's wages</td><td>$30,000</td></tr>
<tr><td>Employer share of Social Security and Medicare (7.65%)</td><td>$2,295</td></tr>
<tr><td>FUTA on Dev's wages</td><td>$0 (spouse in sole proprietorship)</td></tr>
<tr><td>Dev's 401(k) deferral</td><td>$15,000</td></tr>
<tr><td>Family medical costs reimbursed under a written plan</td><td>$8,000</td></tr>
<tr><td>Total new business deductions (wages, employer FICA, reimbursements)</td><td>$40,295</td></tr>
</tbody></table>
<p>Payroll tax on Dev's wages roughly offsets the self-employment tax Priya avoids on that slice of profit, so the wage itself is close to neutral for payroll taxes. The gains are the $15,000 extra pre-tax retirement saving, which at an assumed 24% marginal rate defers about $3,600 of federal income tax, and the $8,000 of medical costs moved into a deductible business expense, which saves income tax plus self-employment tax on that amount. The household also builds Dev's Social Security record. If the couple had no medical costs and no interest in retirement saving, hiring Dev would mostly add paperwork.</p>

<h2>Payroll tax vs self-employment tax: why the wage itself is roughly neutral</h2>
<p>Many owners expect hiring a spouse to cut payroll tax, the way hiring a child under 18 does. It does not, because spouse wages carry the full 7.65% employer share and 7.65% employee share of Social Security and Medicare. Here is how $30,000 of profit is taxed under each route in a sole proprietorship, using simplified 2026 rates and assuming the owner's earnings are below the $184,500 Social Security wage base:</p>
<table><thead><tr><th>Route</th><th>Tax base</th><th>Approximate payroll or SE tax</th></tr></thead><tbody>
<tr><td>Kept as owner profit</td><td>$30,000 x 92.35%</td><td>about $4,239 self-employment tax</td></tr>
<tr><td>Paid as spouse wages</td><td>$30,000 wages plus employer share</td><td>about $4,590 total FICA ($2,295 employer plus $2,295 employee)</td></tr>
</tbody></table>
<p>The difference shrinks further once you count the deduction for the employer share. The picture changes if the owner's self-employment earnings are already above the Social Security wage base: then moving income to a spouse can add Social Security tax that would otherwise not have been owed. That is one reason high earners often limit spouse wages to what is needed to fund the 401(k) and benefits.</p>

<h2>LLCs and community property states</h2>
<p>A married couple who own an LLC together are usually taxed as a partnership by default. In community property states, the IRS allows a husband and wife who own an LLC solely as community property to choose to treat it either as a disregarded entity or as a partnership. If the business is treated as a single-owner entity, the other spouse can then be hired as an employee. If it is a partnership, a spouse who is a partner generally cannot also be a W-2 employee of that partnership; partners receive guaranteed payments instead. Settle the entity question first, because it determines whether the employee route is even available. Our guide to <a href="/blog/partnership-vs-llc">partnership vs LLC</a> explains the default rules.</p>

<h2>Steps to hire your spouse properly</h2>
<ol>
<li><strong>Define a real role</strong> with tasks, hours and a market-based pay rate.</li>
<li><strong>Complete onboarding forms:</strong> W-4, I-9 and state new-hire reporting. Our guide to <a href="/blog/hiring-your-first-employee">hiring your first employee</a> lists them.</li>
<li><strong>Run payroll</strong> through software or a provider, applying the FUTA exemption only if your structure qualifies.</li>
<li><strong>Pay into an account your spouse controls</strong>, ideally separate from your joint household account, so wages are traceable.</li>
<li><strong>Adopt benefit plans in writing</strong> before reimbursing expenses, such as a 401(k) plan document or a medical reimbursement plan.</li>
<li><strong>Keep time records</strong> and examples of work done.</li>
<li><strong>File W-2s and payroll returns</strong> on time each year.</li>
</ol>

<h2>Pitfalls to avoid</h2>
<ul>
<li><strong>A job on paper only.</strong> Courts disallow wages and benefit plans where the spouse did little or no work.</li>
<li><strong>Above-market pay.</strong> Inflated wages for a part-time role invite adjustment, and in an S corporation can raise payroll tax for no benefit.</li>
<li><strong>Ignoring the 2% shareholder rule.</strong> In an S corporation, a spouse of a more-than-2% shareholder is treated as one for fringe benefit purposes, so a medical plan does not work the same way as in a sole proprietorship. See <a href="/blog/s-corp-reasonable-salary">S corp reasonable salary</a> for related payroll rules.</li>
<li><strong>Wrong FUTA setting.</strong> Corporations and partnerships owe FUTA on spouse wages.</li>
<li><strong>No written plan.</strong> Reimbursing medical bills without a plan document turns them into taxable wages or nondeductible personal costs.</li>
<li><strong>State rules overlooked.</strong> State unemployment and disability programs may apply to spouse employees even when FUTA does not.</li>
</ul>

<h2>When hiring your spouse is not worth it</h2>
<p>If your spouse already has a full-time job with a good 401(k) and family health coverage, the main benefits disappear. The same is true if your business profit is modest and you cannot afford to fund a second retirement account. In those cases, focus on core <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> instead.</p>

<p>If your spouse takes over billing, make it easy: create professional client invoices with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up needed, and download each one as a PDF for your records.</p>
`,
  },
  {
    slug: "cost-segregation",
    title: "Cost Segregation Study Explained: 2026 Guide for Owners",
    description:
      "Cost segregation reclassifies building costs into 5, 7 and 15-year property so you can claim 100% bonus depreciation. Learn costs, risks and a 2026 example.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "section-179-vs-bonus-depreciation",
      "how-to-calculate-depreciation",
      "short-term-rental-tax-loophole",
    ],
    faqs: [
      {
        q: "What does a cost segregation study do?",
        a: "A cost segregation study breaks the purchase price or construction cost of a building into components and assigns each to the correct depreciation class. Instead of depreciating everything over 39 years for commercial property or 27.5 years for residential rental property, parts such as carpeting, certain electrical and plumbing for equipment, cabinetry and site improvements can be depreciated over 5, 7 or 15 years. Those shorter-life assets are also eligible for bonus depreciation, which can produce large first-year deductions.",
      },
      {
        q: "Is bonus depreciation 100% in 2026?",
        a: "Yes for qualifying property. The One Big Beautiful Bill Act permanently restored 100% bonus depreciation for qualified property acquired after January 19, 2025. Before that law, bonus depreciation was phasing down and would have been only 20% in 2026. Buildings themselves do not qualify, but the 5, 7 and 15-year components identified by a cost segregation study do. Property acquired under a binding contract before January 20, 2025 may follow the older phase-down rates.",
      },
      {
        q: "How much does a cost segregation study cost?",
        a: "Fees vary with the size and complexity of the property and the method used. Engineering-based studies on larger commercial buildings cost more than desktop or model-based studies on small rental homes. Ask for a fixed quote and an estimate of the extra first-year depreciation, then compare the present value of the tax savings with the fee. For low-cost properties the study may not pay for itself.",
      },
      {
        q: "Can I do a cost segregation study on a building I bought years ago?",
        a: "Yes. A look-back study applies cost segregation to a property already in service. Instead of amending prior returns, you generally file Form 3115 to change your accounting method and claim the missed depreciation as a single Section 481(a) adjustment in the current year. The bonus depreciation rate available depends on when the property was acquired, so a study on a 2019 purchase follows the rules for that year.",
      },
      {
        q: "What is the downside of cost segregation?",
        a: "The main downside is depreciation recapture. When you sell, depreciation on 5, 7 and 15-year personal property is generally recaptured as ordinary income, which can be taxed at higher rates than the capital gain on a building. Other limits include passive activity rules that may stop you using the losses against other income, state tax rules that do not follow bonus depreciation, and the study fee itself. A 1031 exchange can defer recapture in some cases.",
      },
      {
        q: "Does cost segregation work for short-term rentals?",
        a: "It often does, which is why cost segregation is a core part of the so-called short-term rental strategy. If the average guest stay is seven days or less and you materially participate, the rental is generally not treated as a passive rental activity, so accelerated depreciation may offset other income such as wages or business profit. The rules are strict, and your hours and records must support material participation.",
      },
    ],
    content: `
<p>A cost segregation study reclassifies parts of a building into shorter-lived property classes so you can depreciate them over 5, 7 or 15 years instead of 27.5 or 39. Because those components qualify for bonus depreciation, which is 100% for property acquired after January 19, 2025, a study can turn a slow 39-year write-off into a large first-year deduction. It is most valuable for buildings worth several hundred thousand dollars or more.</p>

<p>This guide explains how cost segregation works, what a quality study includes, a worked example with numbers, the look-back option for older purchases, and the catches: recapture, passive loss limits and state conformity. It is general information, not tax advice; real estate depreciation is technical, so involve a CPA before acting.</p>

<h2>How cost segregation works</h2>
<p>Under MACRS, a commercial building is depreciated over 39 years and a residential rental building over 27.5 years, using the straight-line method. Land is not depreciable at all. But a building is not one asset. It contains components that the tax rules treat as personal property or land improvements, each with its own recovery period.</p>
<table><thead><tr><th>Class</th><th>Typical components</th><th>Bonus eligible?</th></tr></thead><tbody>
<tr><td>5-year property</td><td>Carpeting, certain decorative finishes, dedicated electrical for equipment, appliances in rentals</td><td>Yes</td></tr>
<tr><td>7-year property</td><td>Office furniture and fixtures, some millwork and cabinetry in commercial settings</td><td>Yes</td></tr>
<tr><td>15-year property</td><td>Land improvements: parking lots, sidewalks, landscaping, fencing, outdoor lighting; qualified improvement property</td><td>Yes</td></tr>
<tr><td>27.5-year (residential) or 39-year (nonresidential)</td><td>Structural elements: walls, roof, foundation, general HVAC, general plumbing and electrical</td><td>No</td></tr>
<tr><td>Land</td><td>The ground itself</td><td>Not depreciable</td></tr>
</tbody></table>
<p>The study allocates your total cost among these classes based on engineering analysis, construction records and cost estimates. The result is a fixed asset register you use on <a href="/blog/form-4562">Form 4562</a>.</p>

<h2>Why 2026 is a strong year for cost segregation</h2>
<p>The One Big Beautiful Bill Act, signed July 4, 2025, permanently restored 100% bonus depreciation for qualified property acquired after January 19, 2025. Before that law, bonus was phasing down by 20 percentage points a year and would have been 20% in 2026 and zero from 2027. With 100% bonus, every dollar a study moves into the 5, 7 or 15-year classes can be deducted in the year the property is placed in service. Our guide to the <a href="/blog/one-big-beautiful-bill-small-business">One Big Beautiful Bill for small businesses</a> covers the wider changes, and <a href="/blog/section-179-vs-bonus-depreciation">Section 179 vs bonus depreciation</a> explains how the two first-year write-offs differ. Note that Section 179 is generally not available for residential rental property components used in lodging, so bonus depreciation is the main tool for most landlords.</p>

<h2>What a quality cost segregation study includes</h2>
<p>The IRS publishes a <a href="https://www.irs.gov/businesses/cost-segregation-audit-technique-guide-chapter-4-principal-elements-of-a-quality-cost-segregation-study-and-report" target="_blank" rel="noopener noreferrer">Cost Segregation Audit Techniques Guide</a> that tells examiners what a good study looks like. In practice, look for:</p>
<ul>
<li>Preparation by people with engineering and construction-cost expertise, not only tax staff.</li>
<li>A site inspection or, for small properties, documented photos and plans.</li>
<li>Use of actual construction cost records where they exist, or a reasoned cost estimating method.</li>
<li>A clear explanation of the legal basis for each classification, with references to case law and revenue rulings.</li>
<li>Reconciliation of the allocated costs back to the total basis, including land allocation.</li>
<li>Asset listings detailed enough to support future disposals and repairs.</li>
</ul>
<p>A cheap study built from a percentage rule of thumb is the most common audit weakness. If your property is small, a model-based study can be reasonable, but ask how it was built.</p>

<h2>Worked example: a $1,000,000 office building</h2>
<p>These figures are illustrative. A dental practice owner buys a small office building in 2026 for $1,000,000, with $200,000 allocated to land. A study finds 20% of the building basis is 5 and 7-year property and 10% is 15-year land improvements.</p>
<table><thead><tr><th>Item</th><th>Without study</th><th>With study</th></tr></thead><tbody>
<tr><td>Depreciable building basis</td><td>$800,000</td><td>$800,000</td></tr>
<tr><td>5 and 7-year property (20%)</td><td>$0</td><td>$160,000</td></tr>
<tr><td>15-year land improvements (10%)</td><td>$0</td><td>$80,000</td></tr>
<tr><td>39-year building</td><td>$800,000</td><td>$560,000</td></tr>
<tr><td>Bonus depreciation in year one (100%)</td><td>$0</td><td>$240,000</td></tr>
<tr><td>Approximate annual 39-year depreciation (full year)</td><td>about $20,500</td><td>about $14,400</td></tr>
<tr><td>Approximate first-year depreciation</td><td>about $20,500</td><td>about $254,400</td></tr>
</tbody></table>
<p>The first year of the 39-year column is a little lower in practice because of the mid-month convention. At an assumed 32% marginal rate, the extra first-year deduction of roughly $234,000 is worth about $75,000 of tax deferred into the future. It is a deferral, not a permanent saving, because later depreciation is smaller and recapture may apply on sale. For the basics of the calculation, see <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a>.</p>

<h2>Look-back studies for property you already own</h2>
<p>If you bought or built a property in an earlier year and depreciated it all as one building, you can usually commission a look-back study now. Rather than amending prior returns, you file Form 3115, Application for Change in Accounting Method, and claim the missed depreciation as a Section 481(a) adjustment in the current year. The bonus depreciation rate available depends on when each component was acquired and placed in service, so older property follows the rules of its year.</p>

<h2>Risks and limits to understand first</h2>
<h3>Depreciation recapture</h3>
<p>On a sale, depreciation on personal property components is generally recaptured as ordinary income, while depreciation on the building itself is taxed at a maximum 25% rate as unrecaptured Section 1250 gain. A <a href="/blog/1031-exchange">1031 exchange</a> can defer the tax, but only if the replacement property includes enough like-kind real property to absorb it; personal property components complicate exchanges.</p>
<h3>Passive activity rules</h3>
<p>Rental losses are generally passive and can only offset passive income unless you qualify as a real estate professional, use the limited $25,000 allowance for active participants with lower incomes, or have a short-term rental where you materially participate. Our guide to the <a href="/blog/short-term-rental-tax-loophole">short-term rental tax loophole</a> covers that last route in detail. Large losses for owners above certain income levels can also be limited by the excess business loss rules.</p>
<h3>State conformity</h3>
<p>Many states do not follow federal bonus depreciation, so you may need separate state depreciation schedules.</p>
<h3>Study cost versus benefit</h3>
<p>For a modest single-family rental, the fee can eat most of the benefit. Ask the provider for a no-cost estimate first.</p>

<h2>Who benefits most from cost segregation?</h2>
<p>The more of a building's cost sits in shorter-lived components, the bigger the result. Interiors with lots of specialized finishes and site work produce larger reclassifications than plain warehouses.</p>
<table><thead><tr><th>Property type</th><th>Typical potential</th><th>Notes</th></tr></thead><tbody>
<tr><td>Restaurants, medical and dental offices</td><td>High</td><td>Specialized plumbing, electrical and finishes tied to equipment</td></tr>
<tr><td>Hotels and furnished short-term rentals</td><td>High</td><td>Furniture, fixtures, appliances and decor are personal property</td></tr>
<tr><td>Retail centers and office buildings</td><td>Medium to high</td><td>Parking, landscaping and tenant finishes</td></tr>
<tr><td>Apartment buildings</td><td>Medium</td><td>Appliances, flooring, site improvements, amenities</td></tr>
<tr><td>Warehouses and simple industrial buildings</td><td>Lower</td><td>Mostly structural; site work can still matter</td></tr>
<tr><td>Small single-family rentals</td><td>Varies</td><td>Benefit may be small relative to the study fee</td></tr>
</tbody></table>
<p>Timing also matters. A study is most useful in the year you buy, build or substantially renovate, while you have high income to offset and before the property has been depreciated for years under the slower method.</p>

<h2>Cost segregation and renovations</h2>
<p>Renovations are where a detailed asset register pays off a second time. When you replace a roof, HVAC system or flooring that a study identified as a separate component, you can generally take a loss on the remaining undepreciated basis of the old part through a partial disposition, instead of continuing to depreciate something you have thrown away. Without a study, the old roof is buried inside the building's single basis and keeps depreciating for decades. The same records also help separate deductible repairs from capital improvements under the tangible property regulations. Interior improvements to nonresidential buildings may qualify as 15-year qualified improvement property, which is bonus eligible, while enlargements, elevators, escalators and structural framework do not.</p>

<h2>Step by step: deciding whether to commission a study</h2>
<ol>
<li><strong>Gather your basis numbers:</strong> purchase price, closing statement, land value from the appraisal or tax assessment, and any improvement costs.</li>
<li><strong>Collect construction or renovation invoices.</strong> Itemized contractor invoices make allocation more accurate than lump-sum bills.</li>
<li><strong>Request an estimate</strong> from two providers, including fee and projected first-year depreciation.</li>
<li><strong>Check passive loss status</strong> with your CPA to confirm you can actually use the deductions this year.</li>
<li><strong>Model the sale</strong> to see the recapture effect if you expect to sell within a few years.</li>
<li><strong>Commission the study</strong> and update your fixed asset register and depreciation schedules.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li><strong>Allocating too little to land</strong>, which inflates depreciable basis and is an easy audit adjustment.</li>
<li><strong>Taking losses you cannot use</strong> because of passive activity rules, then carrying them forward for years.</li>
<li><strong>Forgetting to write off replaced components.</strong> When you replace a roof or carpet, a detailed study lets you deduct the remaining basis of the old component.</li>
<li><strong>Losing the paperwork.</strong> Keep the study, invoices and closing documents for as long as you own the property plus the period the final return can be examined.</li>
</ul>

<p>Good cost segregation starts with good invoices. If you are a contractor or property manager billing improvement work, itemize materials and labor by component so your clients can classify them, using our <a href="/invoice-generator">free invoice generator</a>: no sign-up, download as PDF. Landlords can also bill tenants cleanly with a <a href="/blog/property-management-invoice-template">property management invoice template</a>.</p>
`,
  },
  {
    slug: "section-179-vehicle-6000-lbs",
    title: "6,000 lb Vehicle Tax Deduction: Section 179 SUVs in 2026",
    description:
      "The 6,000 lb vehicle deduction explained for 2026: the $32,000 Section 179 SUV cap, 100% bonus depreciation, business-use rules and a worked example.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "section-179-vs-bonus-depreciation",
      "standard-mileage-vs-actual-expenses",
      "mileage-log-template",
    ],
    faqs: [
      {
        q: "What is the Section 179 limit for SUVs in 2026?",
        a: "For tax years beginning in 2026, the amount of an SUV's cost that can be expensed under Section 179 is capped at $32,000, according to IRS Revenue Procedure 2025-32. The cap applies to SUVs with a gross vehicle weight rating above 6,000 pounds and up to 14,000 pounds. Any remaining business cost can generally be deducted with 100% bonus depreciation if the vehicle was acquired after January 19, 2025, or depreciated over the normal recovery period.",
      },
      {
        q: "Does any vehicle over 6,000 pounds qualify?",
        a: "The 6,000 pound test uses gross vehicle weight rating (GVWR), not curb weight. GVWR is printed on the label inside the driver's door jamb. Vehicles above 6,000 pounds GVWR are exempt from the lower luxury auto depreciation caps, but they still must be used more than 50% for business to claim Section 179 or bonus depreciation, and SUVs face the $32,000 Section 179 cap. Pickups with a 6-foot bed and certain cargo vans are not subject to the SUV cap.",
      },
      {
        q: "Can I deduct the full price of a heavy SUV in the first year?",
        a: "Often yes, for the business-use portion. In 2026 you can expense up to $32,000 under Section 179 and then apply 100% bonus depreciation to the rest of the business basis for qualifying property, or use bonus depreciation alone. If the SUV costs $70,000 and is used 100% for business, the full $70,000 may be deductible in year one. Personal-use percentage is never deductible, and business use must exceed 50%.",
      },
      {
        q: "What happens if business use drops below 50% later?",
        a: "If business use of a listed property vehicle falls to 50% or less in a later year within the recovery period, you must recapture the excess depreciation. That means adding back to income the difference between what you deducted under Section 179 or bonus and what straight-line depreciation would have allowed. Keep a mileage log every year so you can prove business use stays above 50%.",
      },
      {
        q: "Can I use the standard mileage rate after taking Section 179 on a vehicle?",
        a: "No. Once you claim Section 179, bonus depreciation or accelerated depreciation on a vehicle, you cannot switch that vehicle to the standard mileage rate in later years. You are committed to the actual expense method for it, deducting the business share of fuel, insurance, repairs and depreciation. Compare both methods before buying.",
      },
      {
        q: "Does a financed vehicle qualify for Section 179?",
        a: "Yes. Section 179 and bonus depreciation are based on the vehicle's cost and the date it is placed in service, not on how much you have paid. A vehicle bought with a loan and placed in service in 2026 can be expensed in 2026 even though most payments come later. Business interest on the loan is a separate deduction.",
      },
      {
        q: "Do states allow the same vehicle deduction?",
        a: "Not always. Several states do not follow federal bonus depreciation, and some limit Section 179 to lower amounts. California, for example, has long capped Section 179 at a much lower figure than the federal limit and does not allow bonus depreciation. Expect a separate state depreciation schedule and a smaller first-year state deduction in non-conforming states.",
      },
    ],
    content: `
<p>The 6,000 lb vehicle deduction refers to the extra tax write-off available for business SUVs, pickups and vans with a gross vehicle weight rating above 6,000 pounds. For 2026, Section 179 lets you expense up to $32,000 of a heavy SUV's business cost, and 100% bonus depreciation can generally cover the rest, so a vehicle used mostly for business can often be written off in its first year. Lighter cars face much lower annual depreciation caps.</p>

<p>This guide covers which vehicles qualify, the 2026 limits, how Section 179 and bonus depreciation combine, a worked example, and the traps: business-use tests, recapture, state rules and mileage logs. For the general comparison between the two write-offs, see <a href="/blog/section-179-vs-bonus-depreciation">Section 179 vs bonus depreciation</a>; this article focuses only on vehicles. It is general information, not tax advice.</p>

<h2>2026 vehicle limits at a glance</h2>
<p>IRS <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer">Revenue Procedure 2025-32</a> sets the 2026 inflation-adjusted figures:</p>
<table><thead><tr><th>Limit</th><th>2026 figure</th></tr></thead><tbody>
<tr><td>Overall Section 179 deduction limit</td><td>$2,560,000</td></tr>
<tr><td>Phase-out begins when Section 179 property placed in service exceeds</td><td>$4,090,000</td></tr>
<tr><td>Section 179 cap for SUVs over 6,000 lbs GVWR (up to 14,000 lbs)</td><td>$32,000</td></tr>
<tr><td>Bonus depreciation rate for qualified property acquired after January 19, 2025</td><td>100%</td></tr>
</tbody></table>
<p>The 100% bonus rate was made permanent by the One Big Beautiful Bill Act in July 2025; see our <a href="/blog/one-big-beautiful-bill-small-business">One Big Beautiful Bill guide</a>. Figures for 2027 will appear in the IRS revenue procedure for that year, usually released in the autumn.</p>

<h2>Which vehicles qualify for the 6,000 lb deduction?</h2>
<p>The test is the manufacturer's gross vehicle weight rating, the maximum loaded weight, shown on the label in the driver's door jamb. Curb weight does not count. The vehicle must also be placed in service in your business during the tax year and used more than 50% for business.</p>
<table><thead><tr><th>Vehicle type</th><th>Section 179 treatment</th><th>Bonus depreciation</th></tr></thead><tbody>
<tr><td>Passenger car or light SUV, 6,000 lbs GVWR or less</td><td>Subject to annual luxury auto depreciation caps (around $20,000 in year one including bonus in recent years)</td><td>Included within the same caps</td></tr>
<tr><td>SUV over 6,000 lbs and up to 14,000 lbs GVWR</td><td>Capped at $32,000 for 2026</td><td>100% on remaining basis if acquired after Jan 19, 2025</td></tr>
<tr><td>Pickup with an interior cargo bed at least 6 feet long, not readily accessible from the passenger area</td><td>Not subject to the SUV cap</td><td>100%</td></tr>
<tr><td>Van with no seating behind the driver's seat and no body section protruding more than 30 inches ahead of the windshield</td><td>Not subject to the SUV cap</td><td>100%</td></tr>
<tr><td>Vehicle seating more than nine passengers behind the driver</td><td>Not subject to the SUV cap</td><td>100%</td></tr>
<tr><td>Over 14,000 lbs GVWR</td><td>Not an SUV for this cap; general Section 179 rules</td><td>100%</td></tr>
</tbody></table>
<p>Do not rely solely on online lists of qualifying models. Trims of the same model can have different GVWRs, so check the specific vehicle's door sticker before you buy.</p>

<h2>How Section 179 and bonus depreciation work together on a vehicle</h2>
<p>The order matters. You apply the Section 179 election first, up to the $32,000 SUV cap and your business income limit, then bonus depreciation to the remaining business basis, then regular MACRS depreciation on anything left if you elect out of bonus. Section 179 cannot create a loss, while bonus depreciation can. That makes bonus alone a reasonable choice when profit is low, and Section 179 useful when you want to pick exactly how much to deduct. Both are claimed on <a href="/blog/form-4562">Form 4562</a>.</p>

<h2>Worked example: a 6,400 lb SUV used 80% for business</h2>
<p>The numbers are illustrative. A real estate photographer buys a new SUV in March 2026 for $78,000. Its door label shows a GVWR of 6,400 pounds. Her mileage log shows 80% business use. She expects $140,000 of net business profit.</p>
<table><thead><tr><th>Step</th><th>Amount</th></tr></thead><tbody>
<tr><td>Purchase price</td><td>$78,000</td></tr>
<tr><td>Business-use basis (80%)</td><td>$62,400</td></tr>
<tr><td>Section 179 (capped at $32,000 for an SUV)</td><td>$32,000</td></tr>
<tr><td>Remaining business basis</td><td>$30,400</td></tr>
<tr><td>100% bonus depreciation on remainder</td><td>$30,400</td></tr>
<tr><td>Total first-year vehicle deduction</td><td>$62,400</td></tr>
<tr><td>Personal-use share (never deductible)</td><td>$15,600</td></tr>
</tbody></table>
<p>At an assumed combined 22% income tax and the self-employment tax effect, the deduction saves well over $20,000 in 2026. Compare this to a 5,500 lb crossover at the same price, where the luxury auto caps would hold her first-year depreciation to a fraction of that amount. She also deducts 80% of fuel, insurance and repairs, plus the business share of any loan interest.</p>
<p>The catch: her later years have little depreciation left, and if she sells the SUV for $45,000 in 2029, much of the sale price is recaptured as ordinary income because her tax basis is near zero.</p>

<h2>Business use: the rule that makes or breaks the deduction</h2>
<p>Vehicles are listed property. To claim Section 179 or bonus depreciation, business use must exceed 50% in the year placed in service. If it later drops to 50% or less, you recapture the excess over straight-line depreciation. Commuting from home to a regular workplace is personal, not business. If your home is your principal place of business, trips to clients are generally business miles.</p>
<p>Keep a contemporaneous log of date, destination, purpose and miles for every business trip, or at least a representative sample period that reflects the whole year. Our <a href="/blog/mileage-log-template">mileage log template</a> makes this easy.</p>

<h2>Section 179 vs the standard mileage rate</h2>
<p>Once you take Section 179 or bonus depreciation on a vehicle, you cannot use the standard mileage rate for that vehicle in later years. The IRS mileage rate for 2026 was 72.5 cents per mile from January to June and 76 cents from July 1, as explained in our <a href="/blog/irs-mileage-rate-2026">IRS mileage rate 2026</a> guide. For high-mileage drivers with modestly priced vehicles, mileage can beat actual expenses over the life of the car. Run both scenarios using our comparison of <a href="/blog/standard-mileage-vs-actual-expenses">standard mileage vs actual expenses</a> before you decide.</p>

<h2>Step by step: claiming the heavy vehicle deduction</h2>
<ol>
<li><strong>Confirm GVWR</strong> from the door jamb label of the exact vehicle, and photograph it.</li>
<li><strong>Keep the purchase documents:</strong> bill of sale, financing agreement and delivery date, which proves the placed-in-service date.</li>
<li><strong>Start a mileage log</strong> on day one.</li>
<li><strong>Choose your method</strong> with your preparer: Section 179, bonus, or both, considering business income and state rules.</li>
<li><strong>Complete Form 4562</strong>, including Part V for listed property.</li>
<li><strong>Track business use every year</strong> to avoid recapture.</li>
</ol>

<h2>Common mistakes with the 6,000 lb vehicle deduction</h2>
<ul>
<li><strong>Buying for the deduction alone.</strong> A deduction saves only your marginal tax rate on the cost. Spending $80,000 to save $25,000 still leaves you $55,000 poorer if you did not need the vehicle.</li>
<li><strong>Confusing curb weight and GVWR.</strong></li>
<li><strong>Claiming 100% business use</strong> on the only family vehicle. Examiners routinely challenge this.</li>
<li><strong>Forgetting state differences.</strong> Several states do not follow federal bonus depreciation, and some cap Section 179 at lower amounts.</li>
<li><strong>Ignoring recapture on sale or trade-in.</strong> Plan for the tax when you dispose of the vehicle.</li>
<li><strong>Double-counting interest.</strong> Business loan interest goes on Schedule C; the separate personal <a href="/blog/car-loan-interest-deduction">car loan interest deduction</a> applies only to personal-use vehicles.</li>
</ul>

<h2>Leasing, trading in and other edge cases</h2>
<h3>Leasing instead of buying</h3>
<p>Section 179 and bonus depreciation apply only to vehicles you own. If you lease, you deduct the business share of lease payments over the lease term instead, and leased passenger vehicles may require an income inclusion amount that slightly reduces the deduction. Leasing spreads the deduction out rather than front-loading it.</p>
<h3>Trading in an old business vehicle</h3>
<p>Since 2018, a trade-in of a vehicle is treated as a sale of the old vehicle and a purchase of the new one, because like-kind exchanges now apply only to real property. The trade-in value is your sale price for the old vehicle, so if it was fully depreciated, you will have taxable gain, largely recaptured as ordinary income. The new vehicle's full price becomes its basis, which may support a larger deduction.</p>
<h3>Vehicles owned by an S corporation or LLC</h3>
<p>If the company owns the vehicle, it claims the depreciation, and your personal use is generally treated as a taxable fringe benefit or must be reimbursed to the company. If you own the vehicle personally and use it for your S corporation, the company can reimburse you for business miles under an <a href="/blog/accountable-plan">accountable plan</a> instead.</p>
<h3>Already used the standard mileage rate?</h3>
<p>If you used the standard mileage rate in the first year a vehicle was used for business, you can switch to actual expenses later, but you must use straight-line depreciation for the rest of the vehicle's life. Section 179 and bonus are no longer available for that vehicle.</p>
<h3>Two vehicles, one business</h3>
<p>Owners with a family car and a work truck often get the best result by keeping the heavy vehicle almost entirely for business and using the other car for personal trips. A clean split makes the business-use percentage easy to prove, keeps you safely above the 50% test and avoids arguments over mixed-use trips. Write the arrangement down at the start of the year and let the mileage log back it up.</p>

<h2>Paying for the vehicle</h2>
<p>Because the deduction does not depend on paying cash, many owners finance the purchase. Compare dealer financing with options in our guide to <a href="/blog/equipment-financing">equipment financing</a>, and remember the tax saving arrives when you file, not when you buy.</p>

<p>A business vehicle should earn its keep. If you bill clients for travel or mileage, list it clearly on your invoices with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, and each invoice downloads as a PDF ready to send.</p>
`,
  },
];
