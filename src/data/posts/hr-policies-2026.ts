import type { PostDraft } from "../blog";

export const HR_POLICIES_2026_POSTS: PostDraft[] = [
  {
    slug: "profit-sharing-plan",
    title: "Profit Sharing Plan for Small Business: 2026 Rules",
    description:
      "How a profit sharing plan works for a small business in 2026: contribution limits, the 25% deduction cap, allocation formulas, vesting, tax credits and costs.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "solo-401k-vs-sep-ira",
      "simple-ira",
      "401k-contribution-limits-2027",
    ],
    faqs: [
      {
        q: "How much can an employer contribute to a profit sharing plan in 2026?",
        a: "Two limits apply. Each participant's total annual additions, meaning employer contributions plus any employee deferrals and forfeitures, cannot exceed the lesser of 100% of pay or $72,000 for 2026. Separately, the employer can deduct contributions only up to 25% of the total compensation paid to plan participants, and no more than $360,000 of any one person's pay counts. The 2027 figures had not been published by the IRS at the time of writing.",
      },
      {
        q: "Does a business have to make a profit to contribute?",
        a: "No. Despite the name, contributions are discretionary and are not tied to accounting profit. A business can contribute in a year with a loss, or skip a year when profits are strong, as long as contributions are not so rare that the IRS views the plan as abandoned. The plan document must contain a set formula for dividing whatever the employer chooses to put in among eligible employees.",
      },
      {
        q: "Is a profit sharing plan the same as a 401(k)?",
        a: "Not exactly. A profit sharing plan is funded by employer contributions. Many businesses add a 401(k) feature to the same plan so employees can also defer part of their own pay, which creates a 401(k) profit sharing plan. A plan can also be profit sharing only, with no employee deferrals, which is simpler to run but gives employees no way to save their own money in it.",
      },
      {
        q: "Can a business owner get a bigger share than employees?",
        a: "Yes, within limits. Formulas such as integration with Social Security, age-weighting and new comparability can direct a larger percentage to older or higher-paid groups, including owners. Every design must still pass the IRS nondiscrimination tests, which check that benefits do not unfairly favor highly compensated employees. These formulas need a third-party administrator to run the testing each year, so expect higher administration fees than a simple pro-rata formula.",
      },
      {
        q: "When is the deadline to make a profit sharing contribution?",
        a: "Employer profit sharing contributions for a tax year can generally be deposited up to the business's tax return due date, including extensions, and still be deducted for that year. That lets you wait until your books are closed and you know the year's results. The plan itself generally needs to be adopted by the deadline in the plan rules, so talk to a provider well before year end if you are setting one up.",
      },
      {
        q: "Do employees have to stay a certain time to keep the money?",
        a: "Only if the plan uses a vesting schedule. Employer contributions can vest gradually, for example under a six-year graded schedule, or all at once under a three-year cliff schedule. An employee who leaves before being fully vested forfeits the unvested part, which goes back to the plan to reduce future employer contributions or be reallocated. Employee deferrals in a 401(k) feature are always 100% vested.",
      },
    ],
    content: `
<p>A profit sharing plan lets a business put tax-deductible money into retirement accounts for its employees, and the owner, in whatever amount it chooses each year. There is no required contribution, so a company can give generously in a strong year and nothing in a weak one. For 2026, each participant can receive up to $72,000 in total annual additions, and the business can deduct contributions of up to 25% of eligible payroll.</p>

<p>That flexibility makes a profit sharing plan popular with small businesses whose income swings from year to year: contractors, agencies, consultancies and service firms that invoice in lumps. This guide explains how the plan works, how contributions are divided, the 2026 limits, the tax credits that cut the setup cost, and a worked example with numbers. It is general information, not tax or legal advice, so check the design with a retirement plan professional or CPA before you adopt one.</p>

<h2>How does a profit sharing plan work?</h2>
<p>A profit sharing plan is a type of defined contribution plan. Each eligible employee has an individual account, and the employer decides each year how much to contribute in total. A formula written into the plan document then divides that total among the participants. The money grows tax-deferred until it is withdrawn, usually in retirement.</p>
<p>The IRS describes the main features on its <a href="https://www.irs.gov/retirement-plans/choosing-a-retirement-plan-profit-sharing-plan" target="_blank" rel="noopener noreferrer">profit-sharing plan overview</a>:</p>
<ul>
<li><strong>Discretionary contributions.</strong> The business chooses the amount, including zero, and does not need to show a profit to contribute.</li>
<li><strong>A set allocation formula.</strong> Once a contribution is made, it must be divided using the formula in the plan, not by picking amounts person by person.</li>
<li><strong>Nondiscrimination testing.</strong> The plan must show that benefits do not favor highly compensated employees.</li>
<li><strong>Annual reporting.</strong> Most plans file a Form 5500-series return each year and give participants required disclosures.</li>
</ul>
<p>Many businesses pair profit sharing with a 401(k) feature so employees can defer their own pay. Others run a profit sharing only plan. Self-employed people with no staff usually get the same benefit inside a solo 401(k), where the "employer" contribution is technically a profit sharing contribution. Our comparison of <a href="/blog/solo-401k-vs-sep-ira">solo 401(k) vs SEP IRA</a> covers that one-person case.</p>

<h2>Profit sharing plan limits for 2026</h2>
<table><thead><tr><th>Limit</th><th>2026 figure</th><th>What it means</th></tr></thead><tbody>
<tr><td>Annual additions per participant (Section 415(c))</td><td>Lesser of 100% of pay or $72,000</td><td>Cap on employer contributions plus employee deferrals and forfeitures for one person</td></tr>
<tr><td>Compensation counted (Section 401(a)(17))</td><td>$360,000</td><td>Pay above this is ignored when calculating contributions</td></tr>
<tr><td>Employer deduction limit (Section 404)</td><td>25% of participants' compensation</td><td>Plan-level ceiling on deductible employer contributions; employee deferrals do not count toward it</td></tr>
<tr><td>Employee 401(k) deferral (if the plan has one)</td><td>$24,500</td><td>Plus catch-ups for those 50 and older</td></tr>
</tbody></table>
<p>The IRS normally announces the next year's limits each fall. At the time of writing, the 2027 figures had not been published; projections point to modest increases. Our page on <a href="/blog/401k-contribution-limits-2027">2027 401(k) contribution limits</a> tracks the update.</p>

<h2>Allocation formulas: how the money is divided</h2>
<p>The formula is the heart of the plan design. It decides who gets what, and it determines how much of each dollar ends up in the owner's account.</p>
<h3>Pro-rata (comp-to-comp)</h3>
<p>Everyone receives the same percentage of pay. Add up eligible compensation, divide each person's pay by the total, and apply that fraction to the contribution. It is simple, easy to explain and usually passes testing automatically.</p>
<h3>Integrated with Social Security</h3>
<p>Pay above the Social Security wage base receives a slightly higher percentage, which recognizes that Social Security replaces a smaller share of higher earnings. It tilts contributions modestly toward higher earners.</p>
<h3>Age-weighted</h3>
<p>Contributions are calculated so that each person gets a similar projected benefit at retirement. Older participants, who have fewer years to grow their money, receive larger percentages. This suits a business where the owners are much older than the staff.</p>
<h3>New comparability (cross-tested)</h3>
<p>Employees are placed into groups, such as owners and staff, and each group can receive a different rate. The plan passes testing by converting contributions into projected benefits. It offers the most flexibility and the highest administration costs.</p>

<h2>Worked example: a three-person consulting firm</h2>
<p>Here is an illustrative example for an S corporation consultancy using the pro-rata formula. The owner takes a W-2 salary, as covered in our guide to <a href="/blog/s-corp-reasonable-salary">S corp reasonable salary</a>.</p>
<table><thead><tr><th>Participant</th><th>2026 W-2 pay</th><th>Share of payroll</th><th>10% contribution</th></tr></thead><tbody>
<tr><td>Owner</td><td>$150,000</td><td>60%</td><td>$15,000</td></tr>
<tr><td>Project manager</td><td>$60,000</td><td>24%</td><td>$6,000</td></tr>
<tr><td>Billing coordinator</td><td>$40,000</td><td>16%</td><td>$4,000</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$250,000</strong></td><td><strong>100%</strong></td><td><strong>$25,000</strong></td></tr>
</tbody></table>
<p>Checks against the limits:</p>
<ul>
<li>The deduction ceiling is 25% of $250,000, or $62,500. The $25,000 contribution is well inside it.</li>
<li>No one comes near the $72,000 annual additions cap.</li>
<li>Because everyone gets 10% of pay, the plan should pass nondiscrimination testing without extra work.</li>
</ul>
<p>The full $25,000 is deductible for the business. For a pass-through entity, that deduction lowers the income that flows to the owner's return, while the owner's own $15,000 grows tax-deferred. Contributions are not subject to Social Security and Medicare taxes, which is one reason they can be more efficient than paying the same amount as a bonus; compare our explanation of the <a href="/blog/bonus-tax-rate">bonus tax rate</a>.</p>
<p>If the owner wanted a bigger share, a new comparability design might give owners 15% and staff 6%, subject to passing the tests. That would cost more in administration fees but could move thousands of extra dollars into the owner's account.</p>

<h2>Vesting, eligibility and forfeitures</h2>
<p>Plans can make new employees wait before joining, commonly up to one year of service and age 21. Employer contributions can also vest over time:</p>
<ul>
<li><strong>Cliff vesting:</strong> 0% until three years of service, then 100%.</li>
<li><strong>Graded vesting:</strong> 20% after two years, rising 20% a year to 100% after six years.</li>
<li><strong>Immediate vesting:</strong> 100% from the start, which is simpler and more attractive for recruiting.</li>
</ul>
<p>When someone leaves before being fully vested, the unvested balance is forfeited. Depending on the plan document, forfeitures reduce future employer contributions, pay plan expenses or are reallocated to the remaining participants. Explain the schedule in your offer letters and onboarding packet; our <a href="/blog/employee-onboarding-checklist">employee onboarding checklist</a> shows where benefit enrollment fits.</p>

<h2>Tax credits that offset setup costs</h2>
<p>SECURE 2.0 made new plans cheaper for small employers. According to the IRS page on the <a href="https://www.irs.gov/retirement-plans/retirement-plans-startup-costs-tax-credit" target="_blank" rel="noopener noreferrer">retirement plans startup costs tax credit</a>:</p>
<ul>
<li><strong>Startup cost credit:</strong> for employers with 50 or fewer employees, 100% of eligible setup and administration costs, up to the greater of $500 or the lesser of $250 per eligible non-highly compensated employee or $5,000, for each of the first three years. Employers with 51 to 100 employees get 50%.</li>
<li><strong>Employer contribution credit:</strong> for employers with 50 or fewer employees, up to $1,000 per employee in plan years one and two, phasing down to 75%, 50% and 25% in years three to five. Contributions for employees above a pay threshold do not qualify.</li>
<li><strong>Auto-enrollment credit:</strong> $500 a year for three years if the plan adds automatic enrollment.</li>
</ul>
<p>In the example above, with two non-highly compensated employees, the startup cost credit cap would be the greater of $500 or $500 (2 x $250), so $500 a year. Credits are claimed on Form 8881 and the details depend on the plan type, so confirm eligibility with your administrator.</p>

<h2>Profit sharing vs SEP IRA vs SIMPLE IRA</h2>
<table><thead><tr><th>Feature</th><th>Profit sharing plan</th><th>SEP IRA</th><th>SIMPLE IRA</th></tr></thead><tbody>
<tr><td>Employer contribution</td><td>Discretionary, formula-based</td><td>Discretionary, same % for all</td><td>Required match or nonelective contribution</td></tr>
<tr><td>Employee deferrals</td><td>Only if a 401(k) feature is added</td><td>No (for new plans)</td><td>Yes</td></tr>
<tr><td>Vesting schedules</td><td>Allowed</td><td>Not allowed; always 100% vested</td><td>Not allowed</td></tr>
<tr><td>Owner-favoring formulas</td><td>Yes, with testing</td><td>No</td><td>No</td></tr>
<tr><td>Admin cost</td><td>Moderate to high</td><td>Very low</td><td>Low</td></tr>
<tr><td>Annual filing</td><td>Form 5500 series</td><td>None</td><td>None</td></tr>
</tbody></table>
<p>A SEP IRA is the cheapest option but gives every eligible employee the same percentage and vests it immediately. A SIMPLE IRA requires contributions every year; our guide to the <a href="/blog/simple-ira">SIMPLE IRA</a> explains its 2027 limits. A profit sharing plan earns its higher cost when you want vesting, flexible formulas or a 401(k) feature.</p>

<h2>How to set up a profit sharing plan</h2>
<ol>
<li><strong>Decide your goals.</strong> Retention, owner savings or a tax deduction. Your goal drives the formula and vesting choice.</li>
<li><strong>Choose a provider.</strong> Options range from payroll-linked 401(k) platforms to independent third-party administrators (TPAs). Compare setup fees, per-participant fees and testing charges.</li>
<li><strong>Adopt a written plan document.</strong> Usually a pre-approved document from the provider, with your choices for eligibility, vesting and formula.</li>
<li><strong>Arrange a trust or custodial account</strong> to hold the assets.</li>
<li><strong>Give required notices</strong> to eligible employees, including the summary plan description.</li>
<li><strong>Track compensation accurately.</strong> Contributions depend on W-2 pay, so clean payroll records matter. See <a href="/blog/how-to-do-payroll-yourself">how to do payroll yourself</a>.</li>
<li><strong>Decide the contribution after year end</strong> and deposit it by the tax filing deadline, including extensions.</li>
<li><strong>File Form 5500</strong> each year. A one-participant plan covering only owners and spouses generally files Form 5500-EZ only once assets exceed $250,000.</li>
</ol>

<h2>Common mistakes to avoid</h2>
<ul>
<li><strong>Using the wrong definition of compensation.</strong> The plan document defines pay, for example whether bonuses count. Using a different figure is one of the most common operational errors.</li>
<li><strong>Excluding eligible employees.</strong> Leaving out a part-time worker who met the eligibility rules can require a corrective contribution. SECURE 2.0 also expanded access for long-term part-time employees in plans with a 401(k) feature.</li>
<li><strong>Forgetting related businesses.</strong> Owners of more than one company may have to count employees of all of them for testing.</li>
<li><strong>Contributing before checking cash flow.</strong> A generous contribution can strain working capital. Run it through your <a href="/blog/cash-flow-forecast">cash flow forecast</a> before committing.</li>
<li><strong>Treating it as a bonus pool.</strong> Profit sharing goes into retirement accounts, not paychecks. If you want to reward staff with cash, that is a bonus and runs through payroll.</li>
</ul>
<p>If you plan to bring family members onto the payroll to share in the plan, read our guide to <a href="/blog/hiring-your-spouse">hiring your spouse</a> first, since their pay must be reasonable and for real work.</p>

<h2>Is a profit sharing plan right for your business?</h2>
<p>It tends to fit a business that has a few employees, uneven profits, and an owner who wants to save more than a SIMPLE IRA allows, with the ability to reward long-tenured staff through vesting. It is less suitable for a business that cannot afford annual administration fees or that wants the simplest possible setup. Look at a few years of your <a href="/blog/profit-and-loss-statement">profit and loss statements</a> to see how much you could realistically contribute in a typical year.</p>
<p>A plan funded from profits only works when the profits actually arrive as cash, which starts with getting invoices out promptly and collecting them. Create professional invoices with our <a href="/invoice-generator">free invoice generator</a>, no sign-up needed, and download them as PDFs in seconds.</p>
`,
  },
  {
    slug: "severance-agreement-template",
    title: "Severance Agreement Template and Key Clauses (2026)",
    description:
      "A severance agreement template for small employers, with the clauses to include, OWBPA rules for workers 40+, 2026 NLRB limits, tax withholding and an example.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "employee-handbook-template",
      "non-compete-agreement",
      "bonus-tax-rate",
    ],
    faqs: [
      {
        q: "Is an employer required to offer severance pay?",
        a: "No federal law requires severance pay in the United States. Employers owe it only when they have promised it, for example in an employment contract, offer letter, union agreement or a written severance policy. Severance is usually offered in exchange for the employee signing a release of claims. If you have paid severance consistently in the past, check whether an informal practice could be treated as a plan, and keep any policy in writing.",
      },
      {
        q: "How much severance is typical?",
        a: "Common formulas are one or two weeks of pay per year of service, often with a minimum of two to four weeks and a cap for long-serving staff. Senior employees may receive several months. Many employers also pay part of COBRA premiums for a period. The amount must be meaningful consideration for the release, meaning something the employee was not already entitled to, such as earned wages or accrued vacation that state law requires you to pay out.",
      },
      {
        q: "How long does an employee have to sign a severance agreement?",
        a: "For employees aged 40 or older who are waiving age discrimination claims, federal law requires at least 21 days to consider the agreement, or 45 days when the offer is part of a group layoff or exit program, plus 7 days after signing to revoke. For younger employees there is no federal minimum, but giving a reasonable period, often a week or two, and suggesting they consult a lawyer helps show the release was knowing and voluntary.",
      },
      {
        q: "Are severance payments taxable?",
        a: "Yes. Severance paid to an employee is wages. It is subject to federal income tax withholding, Social Security and Medicare taxes, and usually state income tax. Employers often withhold federal income tax at the 22% flat supplemental rate when severance is paid separately from regular wages, or 37% on supplemental wages above $1 million in a year. It is reported on the employee's Form W-2, not a 1099.",
      },
      {
        q: "Can a severance agreement include confidentiality and non-disparagement clauses?",
        a: "Yes, but carefully. Under the NLRB's 2023 McLaren Macomb decision, broad confidentiality and non-disparagement clauses offered to non-supervisory employees can violate federal labor law. As of late 2026 that decision still applied, though the NLRB General Counsel has asked the Board to overrule it. Narrow clauses limited to the agreement's terms or to defamatory statements, with a clear carve-out for protected rights, are safer. Supervisors and managers are generally not covered by the NLRA.",
      },
      {
        q: "Can I take back a severance offer after the employee signs?",
        a: "Once both sides sign and any revocation period passes, the agreement is a binding contract. Before signing, you can usually withdraw or change an offer, although material changes for workers 40 and over restart the 21 or 45 day consideration period. If you discover misconduct after signing, your options depend on the agreement's terms, so include representations from the employee and get legal advice before acting.",
      },
    ],
    content: `
<p>A severance agreement is a contract in which an employer pays a departing employee something extra, usually money and sometimes benefits, in exchange for a release of legal claims and a few promises about the future. No federal law requires severance, but a well-drafted agreement can turn an uncertain separation into a closed chapter for both sides. The details that matter most are the release language, the special rules for workers aged 40 and over, and how the payment is taxed.</p>

<p>This guide gives you a severance agreement template outline you can adapt, explains each clause in plain English, covers the 2026 legal landscape and walks through a worked example of a severance payment. It is general information, not legal advice. Because a defective release can be unenforceable, have an employment lawyer review the agreement for your state before you use it.</p>

<h2>What a severance agreement does</h2>
<p>Think of it as a trade. The employee gives up the right to sue over the employment and its end; the employer gives "consideration" the employee was not already owed. That consideration cannot be final wages or accrued vacation that your state requires you to pay anyway. Our guide to <a href="/blog/final-paycheck-laws-by-state">final paycheck laws by state</a> explains what must be paid regardless of whether the employee signs.</p>
<p>Employers commonly use severance agreements when:</p>
<ul>
<li>A role is eliminated in a restructuring or layoff.</li>
<li>Performance problems end in a negotiated exit instead of a contested firing.</li>
<li>There is a risk of a discrimination, retaliation or wage claim.</li>
<li>A senior employee knows confidential information or client relationships.</li>
</ul>

<h2>Severance agreement template: the clauses to include</h2>
<p>Use the outline below as a starting framework. Square brackets mark the parts you fill in.</p>
<ol>
<li><strong>Parties and separation date.</strong> "This Separation Agreement and General Release is between [Company legal name] and [Employee name]. Employee's employment ends on [date] (the Separation Date)."</li>
<li><strong>Final pay acknowledgment.</strong> "Employee will receive all wages earned through the Separation Date, and accrued unused vacation where required by law, whether or not Employee signs this Agreement."</li>
<li><strong>Severance benefits.</strong> "In exchange for the promises in this Agreement, Company will pay Employee [amount], equal to [X] weeks of base pay, less applicable withholdings, in [a lump sum / installments on regular paydays] beginning after the Effective Date." Add any COBRA premium payments, bonus or equity treatment.</li>
<li><strong>General release.</strong> Employee releases known and unknown claims arising from the employment and its termination, listing key statutes such as Title VII, the ADA, the ADEA and state equivalents.</li>
<li><strong>Claims not released.</strong> Carve out rights that cannot be waived: unemployment and workers' compensation benefits, vested retirement benefits, claims arising after signing, and the right to file a charge with or assist a government agency such as the EEOC or NLRB.</li>
<li><strong>Return of property.</strong> Laptops, keys, documents, client files and passwords.</li>
<li><strong>Confidentiality of the agreement</strong> (drafted narrowly, see below).</li>
<li><strong>Mutual or one-way non-disparagement</strong> (also narrow, with a protected-rights carve-out).</li>
<li><strong>Continuing obligations.</strong> Reaffirm existing confidentiality, invention assignment or <a href="/blog/non-compete-agreement">non-compete agreements</a>, where enforceable.</li>
<li><strong>Cooperation.</strong> Reasonable help with transitions or litigation, at the company's expense.</li>
<li><strong>No admission of liability.</strong></li>
<li><strong>Age waiver provisions</strong> (for employees 40 and over): consideration and revocation periods and advice to consult an attorney.</li>
<li><strong>Governing law, entire agreement, severability and signatures</strong>, plus the Effective Date definition.</li>
</ol>

<h2>OWBPA rules for employees aged 40 and over</h2>
<p>A release of federal age discrimination claims is valid only if it meets the Older Workers Benefit Protection Act. The EEOC's <a href="https://www.eeoc.gov/laws/guidance/qa-understanding-waivers-discrimination-claims-employee-severance-agreements" target="_blank" rel="noopener noreferrer">Q&amp;A on waivers in severance agreements</a> summarizes the requirements:</p>
<table><thead><tr><th>Requirement</th><th>Individual separation</th><th>Group layoff or exit program</th></tr></thead><tbody>
<tr><td>Time to consider</td><td>At least 21 days</td><td>At least 45 days</td></tr>
<tr><td>Revocation period after signing</td><td>7 days, cannot be shortened</td><td>7 days, cannot be shortened</td></tr>
<tr><td>Written in plain language</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Specifically refers to ADEA rights</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Advice to consult an attorney, in writing</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Extra consideration</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Disclosure of decisional unit, eligibility factors, job titles and ages of those selected and not selected</td><td>No</td><td>Yes</td></tr>
</tbody></table>
<p>An employee can sign before the 21 or 45 days are up if they choose to, but you cannot pressure or reward early signing. Do not pay severance until the revocation period has passed.</p>

<h2>Confidentiality and non-disparagement in 2026</h2>
<p>In 2023 the National Labor Relations Board decided in McLaren Macomb that offering non-supervisory employees severance agreements with broad confidentiality and non-disparagement clauses can violate Section 7 of the National Labor Relations Act, which protects employees' rights to discuss working conditions. That rule applies to union and non-union workplaces alike.</p>
<p>The position is in flux. According to a <a href="https://www.venable.com/insights/publications/2026/06/will-the-nlrb-revisit-mclaren-macomb" target="_blank" rel="noopener noreferrer">June 2026 Venable analysis</a>, the Board was still applying McLaren in 2026 decisions, while the General Counsel's August 2026 memo listed it among precedents to revisit. Until the Board actually overrules it, the safer approach for rank-and-file employees is to:</p>
<ul>
<li>Limit confidentiality to the amount and terms of the agreement.</li>
<li>Limit non-disparagement to statements that are knowingly false or defamatory.</li>
<li>Add a clear statement that nothing in the agreement restricts the employee's rights under Section 7 or their ability to communicate with government agencies.</li>
</ul>
<p>Also note the federal Speak Out Act, which makes pre-dispute nondisclosure and non-disparagement clauses unenforceable for sexual harassment and assault disputes, and state laws in places such as California, New York and Washington that limit secrecy about workplace harassment or discrimination.</p>

<h2>How severance pay is taxed</h2>
<p>Severance paid to an employee is wages. That means:</p>
<ul>
<li>Federal income tax withholding, commonly at the 22% supplemental rate if paid separately from regular wages (37% for supplemental wages above $1 million in the year).</li>
<li>Social Security (6.2%) and Medicare (1.45%) from the employee, matched by the employer.</li>
<li>State income tax where applicable, and possibly state unemployment tax depending on state rules.</li>
<li>Reporting on Form W-2 for the year it is paid, not on a 1099.</li>
</ul>
<p>Our guides to <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> and the <a href="/blog/bonus-tax-rate">bonus tax rate</a> cover supplemental wage withholding in more detail.</p>

<h2>Worked example: calculating a severance package</h2>
<p>An illustrative case: a marketing coordinator, age 45, earning $78,000 a year ($1,500 a week) is laid off after six years. The company's policy is two weeks of pay per year of service plus three months of COBRA premiums.</p>
<table><thead><tr><th>Item</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Severance pay</td><td>6 years x 2 weeks x $1,500</td><td>$18,000.00</td></tr>
<tr><td>Federal income tax withheld</td><td>22% supplemental rate</td><td>-$3,960.00</td></tr>
<tr><td>Social Security</td><td>6.2%</td><td>-$1,116.00</td></tr>
<tr><td>Medicare</td><td>1.45%</td><td>-$261.00</td></tr>
<tr><td>Net before state tax</td><td></td><td>$12,663.00</td></tr>
<tr><td>Employer share of FICA</td><td>7.65%</td><td>$1,377.00 (company cost)</td></tr>
<tr><td>COBRA premiums paid by employer</td><td>3 months x $650</td><td>$1,950.00 (company cost)</td></tr>
<tr><td><strong>Total cost to company</strong></td><td></td><td><strong>$21,327.00</strong></td></tr>
</tbody></table>
<p>Because she is over 40, she receives the agreement with 21 days to consider it and 7 days to revoke. Payment goes out on the first regular payday after the revocation period ends. Her final wages and any accrued vacation are paid on time under state law, separately from the severance.</p>

<h2>Step by step: presenting a severance agreement</h2>
<ol>
<li><strong>Confirm the decision and documentation</strong> with whoever reviewed the termination.</li>
<li><strong>Calculate final pay</strong> and the severance amount, and confirm state final-pay deadlines.</li>
<li><strong>Prepare the agreement</strong> with any OWBPA disclosures for group programs.</li>
<li><strong>Hold the meeting</strong> and hand over a <a href="/blog/termination-letter-template">termination letter</a> along with the agreement. Keep it short and factual.</li>
<li><strong>Allow the consideration period</strong> and answer questions in writing.</li>
<li><strong>Collect the signed agreement</strong>, wait for the revocation period to expire, then pay through payroll.</li>
<li><strong>Record everything</strong> in the personnel file and run payroll with a proper pay stub; see our <a href="/blog/pay-stub-template">pay stub template</a>.</li>
</ol>

<h2>Negotiating changes to the agreement</h2>
<p>Employees, particularly senior ones or those with lawyers, often ask for more weeks of pay, a longer COBRA subsidy, an agreed reference or a narrower non-compete. Decide in advance how much flexibility you have. Put any changes in a revised draft, and remember that a material change for an employee aged 40 or over restarts the 21 or 45 day consideration period. Changes that are not material, such as fixing a typo, do not.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Making final wages conditional on signing.</strong> Earned wages are owed no matter what.</li>
<li><strong>Missing the age waiver rules</strong>, which can leave the release open to challenge on age claims while the employee keeps the money.</li>
<li><strong>Releasing claims that cannot be waived</strong>, such as unemployment benefits or the right to file an agency charge, which can taint the whole agreement.</li>
<li><strong>Paying severance as a 1099 payment.</strong> It is wages for an employee.</li>
<li><strong>Inconsistent offers</strong>, which can look discriminatory. Use a written policy as described in our <a href="/blog/employee-handbook-template">employee handbook template</a>.</li>
<li><strong>Ignoring Section 409A</strong> on deferred or installment payments to executives, where timing rules can apply.</li>
</ul>

<h2>Lump sum or installments?</h2>
<p>A lump sum is simple and gives a clean break. Installments paid on regular paydays keep the departing employee on a predictable schedule and give the employer leverage if a continuing obligation, such as non-solicitation, is breached, because future payments can be conditioned on compliance. Installments can also affect when the employee may collect unemployment in some states, so check local rules before choosing.</p>

<h2>Severance for contractors?</h2>
<p>Independent contractors are not employees, so "severance" for them is really a contract termination payment, documented in a termination clause or settlement and paid against an invoice. If you are unsure which category a worker falls into, read our guide to <a href="/blog/w2-vs-1099">W-2 vs 1099 workers</a> before offering an employee-style package.</p>
<p>Whether you are ending an employment relationship or a contract, clear paperwork protects everyone. For contractor settlements and final project bills, create a clean, itemized invoice with our <a href="/invoice-generator">free invoice generator</a>, no sign-up required, and download it as a PDF.</p>
`,
  },
  {
    slug: "termination-letter-template",
    title: "Termination Letter Template: Wording and State Rules",
    description:
      "A termination letter template for employers, with sample wording for cause, layoff and probation, what to include, state notice rules, final pay and COBRA.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "employee-handbook-template",
      "offer-letter-template",
      "hiring-your-first-employee",
    ],
    faqs: [
      {
        q: "Is an employer legally required to give a termination letter?",
        a: "Federal law does not require a termination letter for an individual firing. Several states, however, require written notice of separation or specific forms. California requires written notice of the change in employment status and an unemployment insurance pamphlet, and New York requires written notice of the termination date and benefits cancellation date within five working days. Even where it is optional, a letter creates a clear record of the date, final pay and next steps.",
      },
      {
        q: "Should a termination letter state the reason for firing?",
        a: "It depends. In an at-will state you do not usually have to give a reason, and a short, neutral letter is common. If you do state a reason, it must be accurate and consistent with your records, because a changing explanation is often used as evidence of discrimination or retaliation. Some states, such as Minnesota, let a terminated employee request the reason in writing, and employers must respond within a set time.",
      },
      {
        q: "When should I give the termination letter?",
        a: "Hand it over in the termination meeting, or send it the same day by email and mail if the employee is remote or absent. Giving it at the meeting lets you walk through final pay, benefits and returning property while answering questions. Keep a copy signed or acknowledged by the employee, or proof of delivery, in the personnel file.",
      },
      {
        q: "What should not be included in a termination letter?",
        a: "Avoid emotional language, speculation about the employee's motives, references to protected characteristics such as age, health, pregnancy or religion, and comments about complaints the employee made. Do not promise references or rehire eligibility unless that is your settled decision. Never make final wages conditional on signing anything; earned pay is owed regardless. Keep the letter short, factual and consistent with your documentation.",
      },
      {
        q: "Does a laid-off employee get advance notice?",
        a: "For individual layoffs there is generally no federal notice requirement. The federal WARN Act requires 60 days' written notice for plant closings and mass layoffs at employers with 100 or more employees, and some states have their own mini-WARN laws with lower thresholds or longer notice, such as New York and New Jersey at 90 days. Check whether a layoff of several people could trigger these rules.",
      },
      {
        q: "Do I have to tell a fired employee about COBRA?",
        a: "If you have 20 or more employees and a group health plan, federal COBRA applies. The employer must notify the plan administrator within 30 days of the termination, and the administrator then has 14 days to send the election notice. The employee has 60 days to elect coverage. Smaller employers may be covered by state continuation laws. Mention in the letter when health coverage ends and that continuation information will follow.",
      },
    ],
    content: `
<p>A termination letter is a short written notice that confirms an employee's job has ended, the effective date, and what happens next with final pay, benefits and company property. It does not need to be long or emotional. The best termination letters are factual, consistent with your records and specific about money and dates, because those are the details people dispute later.</p>

<p>Below you will find a termination letter template with sample wording for the three most common situations, a list of what to include, state rules that require written notice, a worked final pay example and the mistakes that cause problems. This is general information, not legal advice; for terminations with any risk of a claim, get advice from an employment lawyer in your state.</p>

<h2>What to include in a termination letter</h2>
<ul>
<li><strong>Employee name, job title and date of the letter.</strong></li>
<li><strong>A clear statement that employment is ending</strong>, and the effective date.</li>
<li><strong>The reason</strong>, if you choose to give one, stated briefly and accurately.</li>
<li><strong>Final paycheck details:</strong> when it will be paid, by what method, and what it includes, such as accrued vacation if required.</li>
<li><strong>Benefits:</strong> when health coverage ends, COBRA or state continuation, and retirement plan account information.</li>
<li><strong>Company property</strong> to return and how.</li>
<li><strong>Ongoing obligations</strong>, such as confidentiality agreements.</li>
<li><strong>Any severance offer</strong>, referenced as a separate agreement.</li>
<li><strong>A contact person</strong> for questions, and where to send W-2 address changes.</li>
</ul>

<h2>Termination letter template (general)</h2>
<p>[Company letterhead]</p>
<p>[Date]</p>
<p>Dear [Employee name],</p>
<p>This letter confirms that your employment with [Company name] as [job title] ends effective [date].</p>
<p>Your final paycheck, covering all wages earned through [date] [and [number] hours of accrued, unused vacation], will be paid on [date] by [direct deposit / check]. Your group health coverage ends on [date]. Information about continuing coverage under COBRA [or state continuation] will be sent to your home address.</p>
<p>Please return your [laptop, badge, keys, and any company documents] by [date]. [Arrange a prepaid return label / drop-off.] Your obligations under the [confidentiality agreement] dated [date] continue after your employment ends.</p>
<p>If you have questions, please contact [name, title] at [email / phone]. Please make sure we have your current mailing address for your Form W-2.</p>
<p>Sincerely,<br>[Name, title]</p>

<h2>Sample wording by situation</h2>
<h3>Termination for cause</h3>
<p>"Your employment is terminated effective today, [date], for violation of the [attendance / safety / conduct] policy described in the employee handbook. This follows the written warnings dated [date] and [date]." Keep it to verifiable facts that match your documentation. Our <a href="/blog/employee-handbook-template">employee handbook template</a> explains how written policies support this kind of decision.</p>
<h3>Layoff or position elimination</h3>
<p>"Due to [a reorganization / reduced client demand], your position has been eliminated effective [date]. This decision is not a reflection of your performance. [You are eligible for the severance described in the enclosed agreement.] [You may apply for open positions in the future.]" If you are offering a package, pair this letter with a <a href="/blog/severance-agreement-template">severance agreement</a>.</p>
<h3>End of introductory period</h3>
<p>"As discussed, we have decided not to continue your employment beyond your introductory period. Your last day is [date]." Remember that an introductory or probationary period does not usually change at-will status, and your <a href="/blog/offer-letter-template">offer letter</a> should not suggest otherwise.</p>

<h2>State rules that require written notice</h2>
<p>Federal law is silent on individual termination letters, but several states require specific notices. Some examples:</p>
<table><thead><tr><th>State</th><th>Requirement (summary)</th></tr></thead><tbody>
<tr><td>California</td><td>Immediate written notice of the change in employment relationship, plus the EDD "For Your Benefit" unemployment pamphlet (DE 2320)</td></tr>
<tr><td>New York</td><td>Written notice of the exact termination date and the date benefits end, within five working days after termination</td></tr>
<tr><td>Minnesota</td><td>An employee terminated may request the reason in writing; the employer must provide a truthful written reason within a set period</td></tr>
<tr><td>Several other states</td><td>Separation notices or unemployment information at separation (requirements vary)</td></tr>
</tbody></table>
<p>Requirements change, so check your state labor department or unemployment agency before each termination. The Barnes &amp; Thornburg <a href="https://laborandemployment.btlaw.com/post/102mivc/the-state-of-employment-law-minnesota-allows-employees-to-ask-why-their-employme" target="_blank" rel="noopener noreferrer">overview of Minnesota's reason-for-termination law</a> is a useful example of how specific these rules can be.</p>
<p>For layoffs affecting many employees, the federal WARN Act requires 60 days' written notice for covered plant closings and mass layoffs at employers with 100 or more employees, and several states have stricter mini-WARN laws.</p>

<h2>Final pay: the part that most often goes wrong</h2>
<p>State law, not the termination letter, sets when the last paycheck is due. Some states require payment immediately on termination, others by the next business day or the next regular payday. See our state-by-state table of <a href="/blog/final-paycheck-laws-by-state">final paycheck laws</a>.</p>
<h3>Worked example: final pay calculation</h3>
<p>An illustrative example: a California office assistant earning $26.00 an hour is let go on a Thursday. Since the last pay period ended, she has worked 64 hours. She also has 20 hours of accrued, unused vacation, which California treats as earned wages.</p>
<table><thead><tr><th>Component</th><th>Hours</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Regular hours worked since last payroll</td><td>64</td><td>$26.00</td><td>$1,664.00</td></tr>
<tr><td>Accrued vacation payout</td><td>20</td><td>$26.00</td><td>$520.00</td></tr>
<tr><td><strong>Gross final pay</strong></td><td><strong>84</strong></td><td></td><td><strong>$2,184.00</strong></td></tr>
</tbody></table>
<p>Because California requires final wages immediately on discharge, the employer should have the check ready at the meeting, less normal tax withholding. Missing the deadline can trigger waiting-time penalties of up to 30 days of wages. Use a proper pay stub, like our <a href="/blog/pay-stub-template">pay stub template</a>, so the employee can see each line.</p>

<h2>Step by step: handling a termination</h2>
<ol>
<li><strong>Review the file.</strong> Check warnings, performance reviews and any recent complaints, leave requests or injuries that could make the timing look retaliatory.</li>
<li><strong>Calculate final pay</strong> and confirm the deadline for your state.</li>
<li><strong>Prepare documents:</strong> termination letter, any state-required notices, benefits information and any severance agreement.</li>
<li><strong>Plan access shutdown</strong> for email, software, building and bank accounts, to happen during or right after the meeting.</li>
<li><strong>Hold a short, private meeting</strong> with a witness. Explain the decision, hand over the letter and final pay, and collect property.</li>
<li><strong>Notify payroll and benefits providers</strong>, including the COBRA administrator, and stop future direct deposits; see our guide to <a href="/blog/how-to-set-up-direct-deposit">setting up direct deposit</a> for how payments are scheduled.</li>
<li><strong>Document the meeting</strong> and file a copy of the letter.</li>
</ol>

<h2>COBRA and benefits</h2>
<p>Federal COBRA applies to employers with 20 or more employees that offer a group health plan. The employer has 30 days to notify the plan administrator of a qualifying event such as termination, the administrator has 14 days to send the election notice, and the former employee has 60 days to elect coverage. Smaller employers may be covered by state continuation laws. Your letter should state when coverage ends and that continuation information will follow, but the formal COBRA notice is a separate document.</p>

<h2>Common mistakes to avoid</h2>
<ul>
<li><strong>Giving a reason that does not match the file.</strong> Inconsistent explanations are a classic sign of pretext in discrimination cases.</li>
<li><strong>Firing soon after protected activity</strong> such as a complaint, leave request or workers' compensation claim without strong documented reasons.</li>
<li><strong>Withholding final pay until property is returned.</strong> Most states do not allow it.</li>
<li><strong>Deducting unreturned equipment from final wages</strong> without written authorization and state permission.</li>
<li><strong>Forgetting state notices</strong> such as California's unemployment pamphlet.</li>
<li><strong>Treating a contractor like an employee</strong> at the end of the relationship. Ending a contractor engagement follows the contract, and you settle the final invoice; see <a href="/blog/how-to-pay-contractors">how to pay contractors</a>.</li>
</ul>

<h2>What if the employee refuses to sign or take the letter?</h2>
<p>An employee does not have to sign a termination letter, and the termination is effective whether they sign or not. If they refuse, note "employee declined to sign" with the date and the witness's initials, then email a copy to their personal address and mail one to their home. Keep proof of delivery. If the letter includes an acknowledgment line, make clear it confirms receipt only, not agreement with the reasons.</p>

<h2>Remote employees and terminations by email</h2>
<p>For remote staff, hold the conversation by video call rather than email if at all possible, then send the letter immediately afterwards. Arrange prepaid shipping for equipment and cut system access at the time of the call. The employee's work state, not your office location, decides the final pay deadline and any required notices, so a business in Texas terminating an employee who works from California follows California rules.</p>

<h2>References and unemployment claims after termination</h2>
<p>Expect a request from the state unemployment agency. Respond accurately and on time, and make sure the reason you give matches the termination letter. Many small employers adopt a neutral reference policy, confirming only dates of employment and job title, which avoids disputes over what was said. Put that policy in writing and apply it to everyone.</p>

<h2>Termination letter vs separation agreement vs resignation acceptance</h2>
<table><thead><tr><th>Document</th><th>Purpose</th><th>Signed by employee?</th></tr></thead><tbody>
<tr><td>Termination letter</td><td>Confirms the end of employment, final pay and next steps</td><td>Optional acknowledgment</td></tr>
<tr><td>Severance or separation agreement</td><td>Extra pay or benefits in exchange for a release of claims</td><td>Yes, required</td></tr>
<tr><td>Resignation acceptance letter</td><td>Confirms the employee's chosen last day</td><td>No</td></tr>
</tbody></table>
<p>Ending employment cleanly is easier when the start was well documented, so make sure your onboarding process, as described in our guide to <a href="/blog/hiring-your-first-employee">hiring your first employee</a>, captures signed policies and agreements from day one. And if you are winding down a client or contractor relationship rather than an employee, close it out with a clear final invoice from our <a href="/invoice-generator">free invoice generator</a>: no sign-up, and you can download it as a PDF immediately.</p>
`,
  },
  {
    slug: "job-description-template",
    title: "Job Description Template: Free Format and Examples",
    description:
      "A job description template for small businesses: the sections to include, pay range rules by state, FLSA status, ADA essential functions and a full example.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "hiring-your-first-employee",
      "offer-letter-template",
      "employee-handbook-template",
    ],
    faqs: [
      {
        q: "What is the difference between a job description and a job posting?",
        a: "A job description is an internal document that defines the role: purpose, duties, qualifications, reporting line, physical requirements and pay classification. A job posting is the advertisement you publish to attract candidates, usually a shorter, more persuasive version. The posting should be drawn from the description so they stay consistent, and in states with pay transparency laws the posting must include the pay range and sometimes benefits.",
      },
      {
        q: "Do I have to include salary in a job description?",
        a: "In a growing number of states and cities you must include a good-faith pay range in job postings. These include California, Colorado, Washington, New York, Illinois, Minnesota, Massachusetts, New Jersey, Vermont, Maryland, Hawaii and Washington, D.C., with thresholds based on employer size, and Delaware is scheduled to follow in September 2027. Even where it is not required, listing the range saves time by filtering out candidates who expect something very different.",
      },
      {
        q: "What are essential functions in a job description?",
        a: "Essential functions are the fundamental duties a person in the role must be able to perform, with or without reasonable accommodation. Under the Americans with Disabilities Act, a written job description prepared before advertising or interviewing is evidence of what is essential. List them separately from marginal duties, and describe the outcome rather than the method, for example moving 40-pound boxes rather than lifting them by hand.",
      },
      {
        q: "Should a job description say whether the job is exempt?",
        a: "Yes, for internal use. Recording whether the role is exempt or non-exempt from overtime under the Fair Labor Standards Act forces you to check the duties and salary tests before hiring. Remember that the title and description do not decide the classification; the actual duties and pay do. If the real work drifts from the written description, update the classification as well as the document.",
      },
      {
        q: "How long should a job description be?",
        a: "Most effective job descriptions fit on one to two pages, roughly 400 to 800 words. Include a short summary, 6 to 10 key responsibilities, required and preferred qualifications, working conditions, and pay and benefits. Overly long lists of requirements discourage qualified applicants, especially when every item is presented as mandatory. Separate must-haves from nice-to-haves.",
      },
      {
        q: "How often should job descriptions be updated?",
        a: "Review them at least once a year, at performance review time, and whenever the role changes significantly, such as after a reorganization or when new software changes the work. Updating keeps pay ranges, exemption status and essential functions accurate, which matters for compliance and for fair performance evaluations. Keep dated versions so you can show what the role required at any point in time.",
      },
    ],
    content: `
<p>A good job description template gives every role in your business the same clear structure: why the job exists, what the person will do, what they need to bring, how the role is paid and classified, and the conditions of the work. Writing it before you post an ad saves time in hiring, supports fair pay decisions, and gives you a defensible record if a classification or disability question ever comes up.</p>

<p>This guide includes a fill-in-the-blanks template, a complete example for a small-business billing role, the pay transparency rules that now apply in many states, and tips for writing duties that attract the right people. If you are still deciding whether you need an employee at all, start with our guide to <a href="/blog/hiring-your-first-employee">hiring your first employee</a>.</p>

<h2>Why a written job description matters</h2>
<ul>
<li><strong>Better hiring.</strong> Clear duties and requirements attract candidates who fit and discourage those who do not.</li>
<li><strong>Correct overtime classification.</strong> Writing out duties forces you to check the FLSA exemption tests; see our guide to <a href="/blog/exempt-vs-non-exempt">exempt vs non-exempt employees</a>.</li>
<li><strong>ADA compliance.</strong> A pre-existing written description is evidence of which functions are essential.</li>
<li><strong>Pay equity.</strong> Grouping similar roles makes it easier to set and justify pay ranges.</li>
<li><strong>Performance management.</strong> Reviews can measure against the outcomes the description sets.</li>
<li><strong>Employee or contractor decision.</strong> If you find yourself describing set hours, close supervision and company tools, you are probably describing an employee, not a contractor. Our <a href="/blog/w2-vs-1099">W-2 vs 1099 guide</a> explains the difference.</li>
</ul>

<h2>Job description template</h2>
<p>Copy this structure and fill in the brackets.</p>
<ol>
<li><strong>Job title:</strong> [Use a standard, searchable title, e.g. "Accounts Receivable Specialist", not "Cash Ninja".]</li>
<li><strong>Department and reports to:</strong> [Team, manager's title]</li>
<li><strong>Location and work arrangement:</strong> [On-site / hybrid / remote; city and state]</li>
<li><strong>Employment type and schedule:</strong> [Full-time, part-time, seasonal; usual hours]</li>
<li><strong>FLSA status:</strong> [Exempt / Non-exempt] (internal)</li>
<li><strong>Pay range:</strong> [$X to $Y per year or hour], plus [bonus, commission]</li>
<li><strong>Benefits summary:</strong> [Health, retirement, PTO]</li>
<li><strong>Role summary:</strong> [Two or three sentences on why the role exists and the impact it has.]</li>
<li><strong>Essential functions:</strong> [6 to 10 bullet points, starting with action verbs, ideally with an approximate share of time.]</li>
<li><strong>Other duties:</strong> [Marginal tasks, plus "other duties as assigned".]</li>
<li><strong>Required qualifications:</strong> [Skills, experience, licenses truly needed on day one.]</li>
<li><strong>Preferred qualifications:</strong> [Nice-to-haves.]</li>
<li><strong>Physical requirements and working conditions:</strong> [Lifting, standing, travel, driving, shifts.]</li>
<li><strong>Equal opportunity statement</strong> and accommodation contact.</li>
</ol>

<h2>Example: Billing and Accounts Receivable Coordinator</h2>
<p>An illustrative example for a 12-person professional services firm in Illinois:</p>
<p><strong>Job title:</strong> Billing and Accounts Receivable Coordinator<br>
<strong>Reports to:</strong> Operations Manager<br>
<strong>Location:</strong> Chicago, IL (hybrid, 3 days in office)<br>
<strong>Type:</strong> Full-time, Monday to Friday, 40 hours<br>
<strong>FLSA status:</strong> Non-exempt (eligible for overtime)<br>
<strong>Pay range:</strong> $25.00 to $30.00 per hour, based on experience<br>
<strong>Benefits:</strong> Medical and dental, 401(k) with profit sharing, 15 days PTO plus paid holidays</p>
<p><strong>Summary:</strong> You will make sure every client is billed accurately and on time and that we get paid. You will own the monthly invoicing cycle, follow up on overdue accounts and keep receivables reports current.</p>
<p><strong>Essential functions:</strong></p>
<ul>
<li>Prepare and send about 150 client invoices a month from timesheets and project budgets (35%).</li>
<li>Apply payments, reconcile deposits and resolve short payments (20%).</li>
<li>Follow up on overdue invoices by email and phone, and escalate accounts more than 60 days past due (20%).</li>
<li>Maintain client billing details, payment terms and tax settings (10%).</li>
<li>Prepare weekly aging reports and month-end receivables summaries (10%).</li>
<li>Answer client billing questions professionally and promptly (5%).</li>
</ul>
<p><strong>Required:</strong> two years of billing or bookkeeping experience; accurate data entry; comfort with spreadsheets and accounting software; clear written communication.<br>
<strong>Preferred:</strong> experience with time-and-materials or retainer billing; familiarity with sales tax on services.<br>
<strong>Working conditions:</strong> office and home-office computer work; occasional lifting of document boxes up to 20 pounds.</p>
<p>Notice how each duty describes a measurable outcome. That clarity helps at review time and makes it easy to explain the job in an <a href="/blog/offer-letter-template">offer letter</a>. Teams like this often standardize on processes such as <a href="/blog/net-30-payment-terms">net 30 payment terms</a> and <a href="/blog/invoice-collections">invoice collections</a> workflows, so mention the ones you use.</p>

<h2>Pay transparency laws: do you have to list the salary?</h2>
<p>A growing number of jurisdictions require a good-faith pay range in job postings, and sometimes a general description of benefits. Thresholds vary, as summarized in Jackson Lewis's <a href="https://www.jacksonlewis.com/publication/navigating-2026-pay-transparency-laws-and-employer-obligations" target="_blank" rel="noopener noreferrer">2026 pay transparency overview</a>:</p>
<table><thead><tr><th>Jurisdiction</th><th>Applies to employers with</th></tr></thead><tbody>
<tr><td>California</td><td>15+ employees</td></tr>
<tr><td>Colorado</td><td>At least 1 employee in Colorado</td></tr>
<tr><td>Washington</td><td>15+ employees</td></tr>
<tr><td>New York State</td><td>4+ employees</td></tr>
<tr><td>Illinois</td><td>15+ employees</td></tr>
<tr><td>Minnesota</td><td>30+ employees</td></tr>
<tr><td>Massachusetts</td><td>25+ employees</td></tr>
<tr><td>New Jersey</td><td>10+ employees</td></tr>
<tr><td>Vermont</td><td>5+ employees</td></tr>
<tr><td>Hawaii</td><td>50+ employees</td></tr>
<tr><td>Maryland, Connecticut, Nevada, Rhode Island</td><td>Generally all employers (rules differ: some require disclosure on request or before offer)</td></tr>
<tr><td>Washington, D.C.</td><td>1+ employee</td></tr>
<tr><td>Delaware</td><td>26+ employees, starting September 26, 2027</td></tr>
</tbody></table>
<p>Several cities, such as Cleveland, Columbus, Cincinnati and Toledo in Ohio, have their own rules. Remote roles that could be filled by someone in a covered state may also be caught. When in doubt, include the range; it is good practice anyway.</p>

<h2>Writing duties that work</h2>
<h3>Use outcome-focused, plain language</h3>
<p>"Send accurate invoices within two business days of month end" tells a candidate far more than "responsible for billing." Avoid jargon, internal acronyms and gendered terms such as "salesman."</p>
<h3>Separate essential from marginal functions</h3>
<p>The ADA protects qualified individuals who can perform essential functions with or without reasonable accommodation. If a duty is occasional and could be reassigned, list it under other duties.</p>
<h3>Be honest about physical demands</h3>
<p>Describe what must be achieved, such as "move supplies up to 40 pounds," rather than requiring a specific method, which leaves room for accommodation.</p>
<h3>Keep requirements genuine</h3>
<p>Degree requirements and long years-of-experience lists shrink your pool. Ask whether someone could do the job well without each item.</p>

<h2>Step by step: creating job descriptions for your business</h2>
<ol>
<li><strong>List the work that needs doing</strong>, from your own calendar and task list.</li>
<li><strong>Group tasks into roles</strong>, and decide which are employee roles and which can go to contractors.</li>
<li><strong>Draft the description</strong> using the template above.</li>
<li><strong>Check classification:</strong> exempt or non-exempt, and confirm your state's minimum wage. See <a href="/blog/minimum-wage-by-state-2027">minimum wage by state 2027</a>.</li>
<li><strong>Benchmark pay</strong> from salary surveys and postings in your area.</li>
<li><strong>Have someone in or near the role review it.</strong></li>
<li><strong>Turn it into a posting</strong> with a friendlier opening and the required pay range.</li>
<li><strong>Store it</strong> with your onboarding documents and review it yearly.</li>
</ol>

<h2>Job descriptions for part-time and seasonal roles</h2>
<p>Part-time and seasonal jobs deserve the same structure. State the expected hours per week, the season's start and end dates, and whether hours may change. Be precise about eligibility for benefits, since part-time employees may become eligible for a 401(k) under long-term part-time rules, and some states' paid sick leave laws cover every employee from the first hour.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Calling a role exempt because it is salaried.</strong> Salary alone does not make a job exempt.</li>
<li><strong>Copying a big-company description</strong> that lists duties no one at your business does.</li>
<li><strong>Leaving out pay in a covered state</strong>, or posting an unrealistically wide range.</li>
<li><strong>Describing a contractor engagement like a job.</strong> For contractors, define deliverables in a <a href="/blog/statement-of-work-template">statement of work</a> instead.</li>
<li><strong>Never updating it.</strong> An outdated description weakens its value as evidence.</li>
</ul>

<h2>Job description vs job posting: side by side</h2>
<table><thead><tr><th>Element</th><th>Job description (internal)</th><th>Job posting (external)</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Defines the role for hiring, pay, classification and reviews</td><td>Attracts and screens applicants</td></tr>
<tr><td>Tone</td><td>Precise, neutral</td><td>Engaging, selling the opportunity</td></tr>
<tr><td>FLSA status</td><td>Always included</td><td>Optional ("overtime eligible" is a selling point)</td></tr>
<tr><td>Pay range</td><td>Included</td><td>Required in pay transparency jurisdictions</td></tr>
<tr><td>Essential functions with time shares</td><td>Yes</td><td>Summarized</td></tr>
<tr><td>Physical requirements</td><td>Detailed</td><td>Brief</td></tr>
<tr><td>About the company and culture</td><td>Optional</td><td>Prominent</td></tr>
<tr><td>How to apply</td><td>No</td><td>Yes</td></tr>
</tbody></table>

<h2>Turning the template into a posting that gets applicants</h2>
<p>Most candidates skim a posting on a phone in under a minute. Lead with what the person will do and why it matters, then the pay range, location and schedule. Put the five most important duties near the top and move administrative details lower. A few practical tips from small-business hiring:</p>
<ul>
<li><strong>Use the title people search for.</strong> "Bookkeeper" and "Accounts Receivable Specialist" get far more views than creative internal names.</li>
<li><strong>Show the range honestly.</strong> A $25 to $30 range is credible; $20 to $60 looks like you have not decided and may not satisfy good-faith requirements.</li>
<li><strong>Describe a real week.</strong> "On Mondays you will run the weekly aging report and call the five largest overdue accounts" helps candidates picture the job.</li>
<li><strong>Mention flexibility and growth</strong>, such as hybrid days, training budget or a path to a senior role.</li>
<li><strong>Keep the application short.</strong> A resume and two screening questions are usually enough for a small business.</li>
</ul>
<p>Once applications arrive, score each candidate against the required qualifications you wrote down. Using the same criteria for everyone makes decisions faster and fairer, and creates a record of why you chose the person you hired.</p>

<h2>After the description: onboarding and paperwork</h2>
<p>Once you have hired, the description becomes part of the new hire's onboarding packet, together with forms such as the W-4 and I-9. Our <a href="/blog/employee-onboarding-checklist">employee onboarding checklist</a> lists every step for the first 90 days, and the <a href="/blog/employee-handbook-template">employee handbook template</a> covers the policies that sit alongside each role.</p>
<p>If the role you are describing will handle billing, give them a simple tool from day one. Our <a href="/invoice-generator">free invoice generator</a> lets anyone on your team create a professional invoice with no sign-up and download it as a PDF.</p>
`,
  },
  {
    slug: "employee-onboarding-checklist",
    title: "Employee Onboarding Checklist: Day 1 to Day 90",
    description:
      "An employee onboarding checklist for small businesses: forms, deadlines and tasks before day one, the first week and the first 90 days, with a sample timeline.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "hiring-your-first-employee",
      "form-i-9",
      "form-w-4",
    ],
    faqs: [
      {
        q: "What forms does a new employee need to fill out?",
        a: "At a minimum in the US: Form W-4 for federal income tax withholding, Form I-9 for employment eligibility, and your state's withholding certificate if it has one. Most employers also collect direct deposit authorization, emergency contacts, a signed handbook acknowledgment, and benefits enrollment forms. Some roles add confidentiality or invention assignment agreements. The employer separately reports the new hire to the state new hire registry.",
      },
      {
        q: "When must Form I-9 be completed?",
        a: "The employee must complete Section 1 no later than the first day of work for pay. The employer must examine the employee's documents and complete Section 2 within three business days of that first day. For a job lasting fewer than three business days, both sections are due on the first day. Use the current edition of the form; USCIS lists the 01/20/25 edition as current.",
      },
      {
        q: "What is new hire reporting?",
        a: "Federal law requires employers to report each newly hired or rehired employee to their state's new hire directory, generally within 20 days of the hire date. Some states set shorter deadlines. The report includes the employee's name, address and Social Security number and the employer's name, address and federal EIN. States use the information mainly to enforce child support orders, which is why wage garnishment orders often arrive soon after a hire.",
      },
      {
        q: "How long should onboarding last?",
        a: "Paperwork can be done in the first few days, but real onboarding typically runs for at least 90 days. Many businesses use a 30-60-90 day plan with check-ins at each milestone, covering training, relationships, early wins and feedback. Research and practitioner experience both suggest that structured onboarding improves retention, especially in the first year, when turnover is highest.",
      },
      {
        q: "What should happen on an employee's first day?",
        a: "Have their workspace, equipment and accounts ready before they arrive. On the day, complete Section 1 of the I-9 and other forms, give a short welcome and tour, introduce them to the team, explain the first week's schedule and goals, and assign a buddy or point person. Keep the paperwork efficient so most of the day is about the people and the work.",
      },
      {
        q: "Do I need to onboard independent contractors?",
        a: "Contractors need a lighter, different process. Collect a Form W-9, sign a contract or statement of work, give access only to what the project needs, and explain how and when to invoice you. Do not put them through employee onboarding such as handbook training, set schedules or performance reviews, because treating a contractor like an employee can support a misclassification claim.",
      },
    ],
    content: `
<p>An employee onboarding checklist turns a new hire's first weeks from a scramble into a sequence: paperwork done on time, equipment ready, training planned and check-ins scheduled. For a small business, the legal parts are short but strict, with Form I-9 due within three business days and new hire reporting usually within 20 days. The rest is about getting someone productive and committed as quickly as possible.</p>

<p>Below is a complete checklist organized by stage, from the offer to day 90, plus a sample timeline with real dates, a table of required forms and the mistakes that cost small employers the most. If this is your first hire, read our guide to <a href="/blog/hiring-your-first-employee">hiring your first employee</a> first, since it covers registering for payroll accounts before anyone starts.</p>

<h2>Required forms and deadlines</h2>
<table><thead><tr><th>Item</th><th>Who completes it</th><th>Deadline</th></tr></thead><tbody>
<tr><td>Form W-4 (federal withholding)</td><td>Employee</td><td>Before the first payroll; without one, withhold as single with no adjustments</td></tr>
<tr><td>State withholding certificate</td><td>Employee</td><td>Before the first payroll, in states that have one</td></tr>
<tr><td>Form I-9, Section 1</td><td>Employee</td><td>By the first day of work</td></tr>
<tr><td>Form I-9, Section 2</td><td>Employer</td><td>Within 3 business days of the first day</td></tr>
<tr><td>E-Verify case (if used or required)</td><td>Employer</td><td>No later than the third business day after work starts</td></tr>
<tr><td>State new hire report</td><td>Employer</td><td>Generally within 20 days of hire; shorter in some states</td></tr>
<tr><td>Workers' compensation coverage</td><td>Employer</td><td>In place before work starts in most states</td></tr>
<tr><td>Required state notices and pay rate notices</td><td>Employer</td><td>At hire in many states (for example, New York's pay notice)</td></tr>
</tbody></table>
<p>Our guides to <a href="/blog/form-w-4">Form W-4</a> and <a href="/blog/form-i-9">Form I-9</a> walk through each form line by line. On the I-9, USCIS lists the <a href="https://www.uscis.gov/i-9" target="_blank" rel="noopener noreferrer">01/20/25 edition</a> as current, and older editions expiring July 31, 2026 should no longer be used.</p>

<h2>Employee onboarding checklist</h2>
<h3>After the offer is accepted</h3>
<ul>
<li>Send a signed <a href="/blog/offer-letter-template">offer letter</a> with title, pay, start date, schedule and at-will statement.</li>
<li>Run any background or reference checks you disclosed, following FCRA and state rules.</li>
<li>Send a welcome email: start time, location or login details, dress code, parking, what to bring (I-9 documents), and the first-day agenda.</li>
<li>Send electronic forms for the W-4, state withholding, direct deposit and emergency contacts.</li>
<li>Order equipment and create accounts for email, software and building access.</li>
<li>Assign a buddy and block the manager's calendar for day one.</li>
<li>Add the employee to payroll with the correct pay rate, pay schedule, withholding and state tax accounts, so the first paycheck is right.</li>
</ul>
<h3>Day one</h3>
<ul>
<li>Complete I-9 Section 1 and review any forms not done in advance.</li>
<li>Welcome, tour and team introductions.</li>
<li>Walk through the <a href="/blog/employee-handbook-template">employee handbook</a> and collect a signed acknowledgment.</li>
<li>Safety basics, emergency exits and any role-specific safety training.</li>
<li>Set up equipment, passwords and multi-factor authentication.</li>
<li>Review the job description and first-week goals.</li>
<li>Lunch with the manager or team.</li>
</ul>
<h3>First week</h3>
<ul>
<li>Complete I-9 Section 2 by the third business day, and the E-Verify case if applicable.</li>
<li>Explain timekeeping and pay: pay schedule, how hours are recorded, overtime rules. Show non-exempt staff exactly how to record start, end and break times, and explain that all time worked must be recorded, including time before or after a shift.</li>
<li>Benefits enrollment information and deadlines, including retirement plan eligibility and vesting.</li>
<li>Core process training: how work moves through your business, from quote to invoice to payment.</li>
<li>Introduce key clients, vendors and tools.</li>
<li>End-of-week check-in: what is clear, what is confusing.</li>
</ul>
<h3>First 30 days</h3>
<ul>
<li>File the state new hire report if not already done.</li>
<li>Confirm the first paycheck and pay stub are correct.</li>
<li>Agree on 30-60-90 day goals in writing.</li>
<li>Weekly one-to-ones with the manager.</li>
<li>Complete any required harassment prevention training (mandatory in some states, such as California and New York).</li>
</ul>
<h3>Days 31 to 90</h3>
<ul>
<li>Gradually hand over ownership of real work and clients.</li>
<li>Formal 60-day and 90-day reviews against goals.</li>
<li>Ask for feedback on the onboarding process itself.</li>
<li>Confirm benefit enrollments took effect and update the personnel file.</li>
</ul>

<h2>Sample onboarding timeline with dates</h2>
<p>An illustrative example for an employee whose first day is Monday, November 16, 2026:</p>
<table><thead><tr><th>Date</th><th>Task</th></tr></thead><tbody>
<tr><td>Mon, Nov 9</td><td>Offer letter signed; welcome email and electronic forms sent; laptop ordered</td></tr>
<tr><td>Fri, Nov 13</td><td>Accounts created; W-4, state form and direct deposit received; added to payroll</td></tr>
<tr><td>Mon, Nov 16</td><td>First day: I-9 Section 1, handbook acknowledgment, introductions</td></tr>
<tr><td>Thu, Nov 19</td><td>Deadline for I-9 Section 2 (third business day after the first day)</td></tr>
<tr><td>Fri, Nov 20</td><td>First-week check-in</td></tr>
<tr><td>By Sun, Dec 6</td><td>New hire report filed (20 days after hire; file earlier where the state deadline is shorter)</td></tr>
<tr><td>Wed, Dec 16</td><td>30-day review</td></tr>
<tr><td>Mid-Jan 2027</td><td>60-day review</td></tr>
<tr><td>Mid-Feb 2027</td><td>90-day review and onboarding feedback</td></tr>
</tbody></table>
<p>Thanksgiving falls during this period. It does not change the I-9 deadline here, but holidays that fall on business days can, so count carefully.</p>

<h2>What onboarding really costs</h2>
<p>Many owners underestimate how much time a new hire takes. An illustrative estimate for a $50,000-a-year coordinator:</p>
<table><thead><tr><th>Item</th><th>Estimate</th></tr></thead><tbody>
<tr><td>Manager time, first 30 days (20 hours at $60/hour value)</td><td>$1,200</td></tr>
<tr><td>Buddy and team time (15 hours at $35/hour)</td><td>$525</td></tr>
<tr><td>Equipment and software for the first year</td><td>$1,800</td></tr>
<tr><td>Reduced productivity, first two months (about 50% of $8,333 pay)</td><td>$4,167</td></tr>
<tr><td>Employer payroll taxes on two months of pay (about 7.65% plus unemployment taxes)</td><td>$700+</td></tr>
<tr><td><strong>Approximate total</strong></td><td><strong>$8,392+</strong></td></tr>
</tbody></table>
<p>Losing someone in the first few months means paying much of that again, which is why a structured checklist pays for itself. Employer payroll taxes, benefits and equipment then continue every month, so budget for the full cost of the role, not just the salary.</p>

<h2>Where to file onboarding paperwork</h2>
<p>Good record keeping starts on day one, and different documents belong in different places:</p>
<table><thead><tr><th>Document</th><th>Where to keep it</th><th>How long</th></tr></thead><tbody>
<tr><td>Form I-9 and any document copies</td><td>A separate I-9 folder or system, not the personnel file</td><td>3 years after hire or 1 year after employment ends, whichever is later</td></tr>
<tr><td>W-4 and state withholding forms</td><td>Payroll records</td><td>At least 4 years after the tax is due or paid</td></tr>
<tr><td>Offer letter, job description, signed policies</td><td>Personnel file</td><td>Duration of employment plus your state's retention period</td></tr>
<tr><td>Medical or disability information</td><td>Separate confidential medical file</td><td>As required by ADA and state rules</td></tr>
<tr><td>Background check reports</td><td>Restricted confidential file</td><td>Per FCRA and state rules</td></tr>
</tbody></table>
<p>Keeping I-9s apart from personnel files matters during an immigration audit, because inspectors should see only the I-9s, not unrelated personnel information.</p>

<h2>What to do if something goes wrong</h2>
<h3>The employee cannot show I-9 documents on time</h3>
<p>If an original document was lost, stolen or damaged, the employee may present a receipt for a replacement, which is generally valid for 90 days, and then show the replacement document. If the employee presents nothing acceptable within three business days, the employer generally cannot continue employment. Apply this consistently to every new hire to avoid discrimination claims.</p>
<h3>The W-4 never arrives</h3>
<p>Withhold as if the employee were single with no other adjustments until a valid form is submitted. Do not hold a paycheck because a form is missing.</p>
<h3>The new hire quits in week two</h3>
<p>You still need to pay final wages under your state's rules, file the new hire report if it is due, and keep the I-9 for the required period. Ask for honest feedback; an early exit often points to a mismatch between the job description and the real job.</p>

<h2>Hourly vs salaried onboarding</h2>
<p>Non-exempt hourly employees need careful training on timekeeping, meal and rest breaks, overtime approval and how to report pay errors, since these are the most common sources of wage claims. Salaried exempt employees need clarity on expectations, decision authority and results, because they will not be tracked by the hour. Both groups should know the pay schedule and how to read their pay stub.</p>

<h2>Remote employee onboarding</h2>
<ul>
<li>Ship equipment to arrive at least two business days before the start date.</li>
<li>For the I-9, a remote employee can have an authorized representative examine documents in person, or, if you are enrolled in E-Verify in good standing, you may use the DHS-authorized remote document examination procedure.</li>
<li>Remember that the employee's work state determines withholding, new hire reporting, wage laws and often required notices, even if your business is elsewhere.</li>
<li>Schedule more frequent short video check-ins in the first month.</li>
</ul>

<h2>Common onboarding mistakes</h2>
<ul>
<li><strong>Missing the I-9 three-day deadline</strong>, or asking for specific documents. The employee chooses which acceptable documents to present.</li>
<li><strong>Forgetting the new hire report.</strong> It is easy to overlook and some states charge penalties.</li>
<li><strong>Not knowing the role's FLSA status</strong>, so overtime rules are applied wrongly from day one; see <a href="/blog/exempt-vs-non-exempt">exempt vs non-exempt employees</a>.</li>
<li><strong>Information overload on day one.</strong> Spread training over weeks.</li>
<li><strong>No clear goals.</strong> New hires who do not know what success looks like at 90 days are more likely to drift or leave.</li>
<li><strong>Onboarding contractors like employees.</strong> Contractors need a contract, a W-9 and clear invoicing instructions, not a handbook; see <a href="/blog/w9-and-1099-for-contractors">W-9 and 1099 for contractors</a>.</li>
</ul>

<h2>Employee vs client vs vendor onboarding</h2>
<p>The same principle, a repeatable checklist, works across your business. We have separate guides for <a href="/blog/client-onboarding-checklist">client onboarding</a> and <a href="/blog/vendor-onboarding-checklist">vendor onboarding</a>, which cover collecting billing details, payment terms and tax forms.</p>
<p>When your new team member starts billing clients, give them a simple, consistent tool. With our <a href="/invoice-generator">free invoice generator</a> they can create professional invoices with no sign-up and download them as PDFs, and our <a href="/invoice-templates">invoice templates</a> keep every document on brand.</p>
`,
  },
];
