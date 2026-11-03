import type { PostDraft } from "../blog";

export const HR_DOCUMENTS_2026_POSTS: PostDraft[] = [
  {
    slug: "pay-stub-template",
    title: "Pay Stub Template: Free Layout and Required Fields",
    description:
      "A pay stub template that covers every required field: earnings, hours, taxes, deductions, YTD totals and employer details, with a worked example and state rules.",
    category: "design-templates",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["employer-payroll-taxes", "form-w-2", "timesheet-template"],
    faqs: [
      {
        q: "What must be included on a pay stub?",
        a: "Federal law does not require pay stubs, but most states require a wage statement, and the common fields are the same: employer name and address, employee name and identifier, pay period dates, pay date, hours worked and rates for hourly staff, gross wages, each deduction and tax withheld, and net pay. Many states also require year-to-date totals, paid leave balances or the employer's legal entity name. Check your state labor department for its exact list.",
      },
      {
        q: "Is a pay stub legally required?",
        a: "Not under federal law. The Fair Labor Standards Act requires employers to keep accurate records of hours and wages, but it does not require giving employees a pay stub. Most states fill that gap with their own wage statement laws, some requiring a printed or electronic statement every payday and others requiring access on request. A small group of states has no general requirement, though providing stubs is still good practice.",
      },
      {
        q: "Can I give employees electronic pay stubs?",
        a: "In most states, yes, as long as employees can access, view and print the stub privately and without cost. A few states require employee consent before switching to electronic statements, or require you to provide paper on request. Payroll software usually provides a secure employee portal for this. Keep electronic records for the full retention period required by federal and state law.",
      },
      {
        q: "What is the difference between a pay stub and a payslip?",
        a: "They are the same document. Pay stub is the common US term, because it was historically the detachable stub of a paycheck. Payslip is more common in the UK, Australia and other countries. Both list gross pay, deductions and net pay for a pay period. The required contents differ by country and, in the US, by state.",
      },
      {
        q: "Do independent contractors get pay stubs?",
        a: "No. Independent contractors are not employees, so no taxes are withheld from their pay and they do not receive pay stubs or a Form W-2. Instead, contractors send invoices for their work, and the client may issue a Form 1099-NEC at year end if payments reach the reporting threshold, which is $2,000 for payments made in 2026. A contractor's invoices and bank deposits serve as their income records.",
      },
      {
        q: "Should pay stubs show qualified overtime for the no tax on overtime deduction?",
        a: "Pay stubs are not required to show it, but it helps. For 2026, employers report qualified overtime compensation, generally the premium half of time-and-a-half, on Form W-2 in box 12 with code TT. Tracking that premium on each pay stub, or in a year-to-date line, lets employees see what will appear on their W-2 and makes year-end reporting easier to reconcile.",
      },
    ],
    content: `
<p>A good pay stub template shows the employer and employee details, the pay period and pay date, hours and rates, gross pay, every tax and deduction withheld, net pay and year-to-date totals. Federal law does not require you to hand out pay stubs, but most states do, and a clear stub prevents payroll questions, supports loan and rental applications, and protects you in a wage dispute. Below is a field-by-field layout, a worked example and the rules to check before you use it.</p>

<p>Whether you run payroll yourself or use software, understanding the anatomy of a pay stub helps you catch mistakes before employees do. This guide is written for US employers; the structure works in other countries, but the tax lines will differ.</p>

<h2>Is a pay stub required? Federal and state rules</h2>
<p>The US Department of Labor's <a href="https://webapps.dol.gov/elaws/faq/esa/flsa/018.htm" target="_blank" rel="noopener noreferrer">FLSA pay stub FAQ</a> is clear: the Fair Labor Standards Act requires employers to keep accurate records of hours worked and wages paid, but it does not require employers to provide pay stubs. State law is where the obligation usually comes from.</p>
<ul>
<li><strong>Most states</strong> require a written or electronic wage statement each payday.</li>
<li><strong>Some states</strong> require access only, or a statement on request.</li>
<li><strong>A handful of states</strong>, often listed as including Alabama, Arkansas, Florida and Tennessee, have no general pay stub requirement, though payroll vendors' lists differ, so verify with your state.</li>
<li><strong>California</strong> has one of the strictest laws. Labor Code section 226 lists nine required items, including gross and net wages, total hours, all deductions, the pay period dates, the employee's name and last four digits of their Social Security number or an employee ID, the employer's legal name and address, and every hourly rate with hours worked at each rate.</li>
</ul>
<p>If you operate in more than one state, design your template to meet the strictest state you employ people in. That way one layout works everywhere.</p>

<h2>Pay stub template: required fields and layout</h2>
<p>A standard pay stub has five blocks. Use this as a checklist for your own template.</p>
<table><thead><tr><th>Block</th><th>Fields</th><th>Notes</th></tr></thead><tbody>
<tr><td>Header</td><td>Employer legal name, address, EIN (optional), employee name, employee ID or last four of SSN, address</td><td>Never print a full Social Security number</td></tr>
<tr><td>Pay details</td><td>Pay period start and end, pay date, pay frequency, check or deposit number</td><td>Match your payroll calendar</td></tr>
<tr><td>Earnings</td><td>Each earning type (regular, overtime, holiday, bonus, commission, tips), hours, rate, current amount, YTD amount</td><td>Hourly employees need hours and rates; salaried can show salary only</td></tr>
<tr><td>Taxes</td><td>Federal income tax, Social Security, Medicare, state and local income tax, state disability or paid leave contributions where applicable</td><td>Show current and YTD for each</td></tr>
<tr><td>Deductions and totals</td><td>Pre-tax deductions (401(k), health premiums, HSA), post-tax deductions (Roth 401(k), garnishments), gross pay, total deductions, net pay, leave balances</td><td>Label pre-tax and post-tax clearly</td></tr>
</tbody></table>
<h3>Optional fields worth adding</h3>
<ul>
<li><strong>Employer contributions</strong>, such as 401(k) match or health premiums, to show total compensation.</li>
<li><strong>Paid time off and sick leave balances</strong>, required in some states.</li>
<li><strong>Qualified overtime premium (YTD)</strong>, which helps employees understand the 2026 W-2 box 12 code TT amount. Our article on <a href="/blog/no-tax-on-overtime">no tax on overtime</a> explains the deduction.</li>
<li><strong>Filing status and adjustments from Form W-4</strong>, so employees can spot withholding errors. See our guide to <a href="/blog/form-w-4">Form W-4</a>.</li>
</ul>

<h2>Worked example: a completed pay stub</h2>
<p>Here is an illustrative biweekly stub for an hourly employee earning $24 an hour who worked 80 regular hours and 6 overtime hours. Federal and state income tax figures are examples; actual withholding depends on the employee's W-4 and state rules.</p>
<table><thead><tr><th>Line</th><th>Hours</th><th>Rate</th><th>Current</th></tr></thead><tbody>
<tr><td>Regular pay</td><td>80</td><td>$24.00</td><td>$1,920.00</td></tr>
<tr><td>Overtime pay</td><td>6</td><td>$36.00</td><td>$216.00</td></tr>
<tr><td><strong>Gross pay</strong></td><td></td><td></td><td><strong>$2,136.00</strong></td></tr>
<tr><td>401(k), 5% pre-tax</td><td></td><td></td><td>-$106.80</td></tr>
<tr><td>Federal income tax (example)</td><td></td><td></td><td>-$168.00</td></tr>
<tr><td>Social Security (6.2%)</td><td></td><td></td><td>-$132.43</td></tr>
<tr><td>Medicare (1.45%)</td><td></td><td></td><td>-$30.97</td></tr>
<tr><td>State income tax (example)</td><td></td><td></td><td>-$72.00</td></tr>
<tr><td><strong>Net pay</strong></td><td></td><td></td><td><strong>$1,625.80</strong></td></tr>
</tbody></table>
<p>Two points to notice. First, the traditional 401(k) deferral reduces income subject to income tax but not Social Security and Medicare, so FICA is calculated on the full $2,136. Second, the qualified overtime premium on this stub is the extra half-time portion: 6 hours x $12 = $72. Tracking that number each period makes year-end W-2 reporting straightforward.</p>

<h2>Payroll tax rates to show on a pay stub</h2>
<table><thead><tr><th>Tax</th><th>Employee rate</th><th>2026 wage limit</th><th>2027 wage limit</th></tr></thead><tbody>
<tr><td>Social Security</td><td>6.2%</td><td>$184,500</td><td>$192,300</td></tr>
<tr><td>Medicare</td><td>1.45%</td><td>No limit</td><td>No limit</td></tr>
<tr><td>Additional Medicare</td><td>0.9%</td><td>Withheld on wages over $200,000</td><td>Same</td></tr>
<tr><td>Federal income tax</td><td>Per W-4 and IRS tables</td><td>None</td><td>None</td></tr>
</tbody></table>
<p>The 2027 Social Security wage base of $192,300 was announced by the SSA in October 2026, as reported by the <a href="https://www.journalofaccountancy.com/news/2026/oct/social-security-wage-base-and-cola-announced-for-2027/" target="_blank" rel="noopener noreferrer">Journal of Accountancy</a>. Employer-side taxes, such as the matching FICA, federal unemployment tax and state unemployment tax, do not reduce the employee's pay, though some employers show them as information. Our guide to <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> covers those costs.</p>

<h2>How to fill in a pay stub template, step by step</h2>
<ol>
<li><strong>Collect hours</strong> from your <a href="/blog/timesheet-template">timesheets</a> for hourly staff, and confirm any overtime, holiday or bonus pay.</li>
<li><strong>Calculate gross pay</strong> for each earning type.</li>
<li><strong>Subtract pre-tax deductions</strong> to find taxable wages for income tax, and separately for FICA.</li>
<li><strong>Calculate withholding</strong>: federal income tax from the W-4 and IRS tables, Social Security, Medicare and state or local taxes.</li>
<li><strong>Subtract post-tax deductions</strong> such as Roth contributions or garnishments.</li>
<li><strong>Update year-to-date totals</strong> for every line.</li>
<li><strong>Check net pay</strong> against the amount you will actually deposit.</li>
<li><strong>Deliver the stub</strong> by paper or secure portal on or before payday, and keep a copy.</li>
</ol>
<p>Our step-by-step guide on <a href="/blog/how-to-make-a-pay-stub">how to make a pay stub</a> goes into the calculations in more detail, and <a href="/blog/how-to-do-payroll-yourself">how to do payroll yourself</a> covers registration, deposits and filings.</p>

<h2>Adapting the template for different pay types</h2>
<p>One layout rarely fits every employee. Adjust the earnings block for how each person is paid:</p>
<table><thead><tr><th>Pay type</th><th>What to show in earnings</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>Salaried exempt</td><td>Salary per period; hours optional</td><td>Partial-period pay for new hires and leavers</td></tr>
<tr><td>Salaried non-exempt</td><td>Salary plus hours worked and overtime</td><td>Overtime is still owed above 40 hours a week</td></tr>
<tr><td>Hourly</td><td>Hours and rate for each rate of pay, overtime separately</td><td>Different rates for different tasks change the overtime rate</td></tr>
<tr><td>Tipped</td><td>Cash wage, reported tips, tip credit where allowed</td><td>Tips are taxable wages; state tip credit rules vary</td></tr>
<tr><td>Commission</td><td>Base pay plus commission earned for the period</td><td>Commissions count in the regular rate for overtime</td></tr>
<tr><td>Piece rate</td><td>Units and rate per unit, plus any non-productive time</td><td>Some states require hours and units on the stub</td></tr>
</tbody></table>
<p>Bonuses deserve their own line, both for clarity and because supplemental wages can be withheld at a flat federal rate. Reimbursements under an expense policy should appear separately from wages as non-taxable items, not as extra pay.</p>

<h3>Paper or electronic pay stubs?</h3>
<p>Electronic delivery through a payroll portal is now the norm and is allowed in most states, provided employees can view and print stubs privately and at no cost. Some states require employee consent or a paper option. If you email PDF stubs, password-protect them, because they contain personal and financial information. Whatever the format, make sure former employees can still get copies of their stubs after they leave, as they often need them for loans, unemployment claims or tax questions.</p>

<h2>Common pay stub mistakes</h2>
<ul>
<li><strong>Missing year-to-date totals.</strong> Employees need them to check withholding, and they must tie to the year-end <a href="/blog/form-w-2">Form W-2</a>.</li>
<li><strong>Combining overtime with regular pay</strong> in one line, which hides the rate and hours.</li>
<li><strong>Applying the Social Security limit incorrectly</strong> for high earners, or forgetting additional Medicare above $200,000.</li>
<li><strong>Using a trade name instead of the legal entity name</strong> where state law requires the legal name.</li>
<li><strong>Printing full Social Security numbers</strong>, which creates an identity theft risk.</li>
<li><strong>Treating contractors like employees.</strong> Contractors invoice you; they should not get pay stubs. If you are unsure which applies, read <a href="/blog/w2-vs-1099">W-2 vs 1099</a>.</li>
</ul>

<h2>Pay stubs vs invoices for contractors</h2>
<p>If you pay freelancers, the equivalent document runs the other way. The contractor sends you an <a href="/blog/independent-contractor-invoice">independent contractor invoice</a> listing services, dates and amounts, and you pay it in full without withholding taxes. If you are a freelancer asked for "pay stubs" by a landlord or lender, your paid invoices, bank statements and tax returns serve the same purpose.</p>

<h2>Record retention</h2>
<p>Keep payroll records, including the data behind each stub, for at least the longest period required. Under the FLSA, payroll records must be kept for at least three years and supporting records such as time cards for two years, while the IRS expects employment tax records to be kept for at least four years. Many states require longer. Store copies securely, since stubs contain personal and financial data. Limit access to the people who run payroll, and use the same retention schedule for electronic and paper copies so nothing is deleted early.</p>
<p>This is general information, not legal or tax advice. Payroll rules vary by state, so confirm requirements with your state labor department or a payroll professional.</p>

<p>Pay stubs are for employees, but if your business also bills clients or pays contractors, keep that paperwork just as tidy. Our <a href="/invoice-generator">free invoice generator</a> lets you create professional invoices with no sign-up and download them as PDFs in minutes.</p>
`,
  },
  {
    slug: "how-to-make-a-pay-stub",
    title: "How to Make a Pay Stub for an Employee",
    description:
      "How to make pay stubs for employees step by step: calculate gross pay, pre-tax deductions, FICA and income tax withholding, net pay and YTD totals, with an example.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["how-to-do-payroll-yourself", "hiring-your-first-employee", "w2-vs-1099"],
    faqs: [
      {
        q: "Can I make pay stubs myself without payroll software?",
        a: "Yes. A small employer can calculate payroll by hand or in a spreadsheet and create stubs from a template, as long as the calculations follow IRS withholding tables and state rules. The risk is error: wrong withholding, missed wage limits or outdated tax tables. Many small businesses start manually with one or two employees, then switch to payroll software once tax deposits and filings become time consuming.",
      },
      {
        q: "How do I calculate federal income tax withholding for a pay stub?",
        a: "Use the employee's Form W-4 and the methods in IRS Publication 15-T, which provides wage bracket and percentage method tables for each pay frequency. Start from taxable wages after pre-tax deductions, apply the filing status and any adjustments the employee entered on the W-4, and read or calculate the withholding. The IRS also offers an income tax withholding assistant spreadsheet for small employers.",
      },
      {
        q: "Are pre-tax deductions taken before Social Security and Medicare?",
        a: "It depends on the deduction. Section 125 cafeteria plan deductions, such as most employer health insurance premiums, reduce wages for income tax and for Social Security and Medicare. Traditional 401(k) deferrals reduce wages for income tax but not for Social Security and Medicare. Roth 401(k) contributions are after-tax and reduce neither. Getting this order wrong is one of the most common manual payroll mistakes.",
      },
      {
        q: "How should a bonus appear on a pay stub?",
        a: "List the bonus as a separate earnings line so the employee can see it clearly. Bonuses are supplemental wages. If paid separately or identified separately from regular wages, federal income tax can be withheld at a flat 22% rate for supplemental wages up to $1 million in a year. Social Security, Medicare and state taxes still apply as normal, and the bonus counts toward year-to-date totals.",
      },
      {
        q: "Can a business owner make a pay stub for themselves?",
        a: "Only if they are on payroll. S corporation owners who work in the business receive a W-2 salary and can get pay stubs like any employee. Sole proprietors and single-member LLC owners taxed as sole proprietors are not employees of their business; they take owner draws, and their proof of income comes from tax returns, profit and loss statements and invoices instead of pay stubs.",
      },
      {
        q: "How long should I keep pay stub records?",
        a: "Keep payroll records for at least four years to cover IRS employment tax requirements. The Fair Labor Standards Act requires payroll records for at least three years and time cards and supporting records for two years. Some states require longer retention. Store the underlying calculations and timesheets, not just the stub itself, so you can answer questions or audits later.",
      },
    ],
    content: `
<p>To make a pay stub for an employee, calculate gross pay for the period, subtract pre-tax deductions, withhold federal income tax, Social Security, Medicare and any state or local taxes, subtract post-tax deductions, and record the resulting net pay along with year-to-date totals. Then deliver the stub on payday on paper or through a secure portal. The math is not hard once you know the order of operations, which is where most mistakes happen.</p>

<p>This guide walks through the process for a US employer step by step, with a fully worked salaried example, the current tax rates and wage limits, and the common errors to avoid. For the layout itself, see our <a href="/blog/pay-stub-template">pay stub template</a>.</p>

<h2>Before you make pay stubs: set up payroll properly</h2>
<p>Pay stubs come at the end of a payroll process, not the start. Before the first payday you need:</p>
<ul>
<li><strong>An EIN and state payroll registrations</strong> for withholding and unemployment insurance.</li>
<li><strong>A completed Form W-4</strong> from each employee, plus any state withholding certificate.</li>
<li><strong>Form I-9</strong> employment eligibility verification.</li>
<li><strong>A pay schedule</strong> (weekly, biweekly, semimonthly or monthly) that complies with state payday laws.</li>
<li><strong>Each employee's rate</strong>, exempt or non-exempt status, and enrolled benefits.</li>
</ul>
<p>Our guide to <a href="/blog/hiring-your-first-employee">hiring your first employee</a> covers these steps, and <a href="/blog/how-to-do-payroll-yourself">how to do payroll yourself</a> explains deposits and quarterly filings. Make sure the worker really is an employee; if not, they should invoice you instead. The <a href="/blog/w2-vs-1099">W-2 vs 1099</a> guide explains the difference.</p>

<h2>How to make pay stubs: step by step</h2>
<h3>Step 1: Calculate gross pay</h3>
<p>For salaried employees, divide annual salary by the number of pay periods: 52 for weekly, 26 for biweekly, 24 for semimonthly, 12 for monthly. For hourly employees, multiply regular hours by the rate and overtime hours (over 40 in a workweek for non-exempt employees under federal law) by 1.5 times the regular rate. Add bonuses, commissions, tips and holiday pay as separate lines. Use approved <a href="/blog/timesheet-template">timesheets</a> as the source for hours.</p>
<h3>Step 2: Subtract pre-tax deductions</h3>
<p>Pre-tax deductions reduce taxable wages, but not all of them reduce the same taxes:</p>
<table><thead><tr><th>Deduction</th><th>Reduces income tax wages?</th><th>Reduces Social Security and Medicare wages?</th></tr></thead><tbody>
<tr><td>Section 125 health, dental, vision premiums</td><td>Yes</td><td>Yes</td></tr>
<tr><td>HSA contributions through a cafeteria plan</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Traditional 401(k) deferral</td><td>Yes</td><td>No</td></tr>
<tr><td>Roth 401(k) contribution</td><td>No</td><td>No</td></tr>
<tr><td>Wage garnishment</td><td>No (after-tax)</td><td>No</td></tr>
</tbody></table>
<h3>Step 3: Calculate Social Security and Medicare</h3>
<p>Withhold 6.2% for Social Security on wages up to the annual wage base, which is $184,500 for 2026 and $192,300 for 2027 according to the SSA announcement covered by the <a href="https://www.journalofaccountancy.com/news/2026/oct/social-security-wage-base-and-cola-announced-for-2027/" target="_blank" rel="noopener noreferrer">Journal of Accountancy</a>. Withhold 1.45% for Medicare on all wages, plus an extra 0.9% on wages over $200,000 in the calendar year. You pay a matching 6.2% and 1.45% as the employer, which does not appear as a deduction on the stub.</p>
<h3>Step 4: Calculate federal income tax withholding</h3>
<p>Use the employee's W-4 with the wage bracket or percentage method tables in IRS Publication 15-T for your pay frequency. Start from income tax wages after pre-tax deductions. Supplemental wages such as bonuses can use the flat 22% method; see our article on the <a href="/blog/bonus-tax-rate">bonus tax rate</a>.</p>
<h3>Step 5: Calculate state and local taxes</h3>
<p>Apply your state's withholding tables and any local income taxes. Some states also have employee-paid disability or paid family leave contributions that must be withheld.</p>
<h3>Step 6: Subtract post-tax deductions</h3>
<p>Take Roth contributions, garnishments, union dues and similar items from the remaining pay.</p>
<h3>Step 7: Record net pay and year-to-date totals</h3>
<p>Net pay equals gross pay minus all taxes and deductions. Update the year-to-date column for every line. The YTD totals at year end become the employee's <a href="/blog/form-w-2">Form W-2</a> figures, so they must be accurate.</p>
<h3>Step 8: Deliver the stub and keep records</h3>
<p>Give the stub on payday, on paper or electronically if your state allows. Keep the stub, calculations and timesheets with your payroll records.</p>

<h2>Worked example: salaried employee paid semimonthly</h2>
<p>An illustrative employee earns $58,500 a year, paid semimonthly (24 periods). They pay $120 per period for health insurance through a Section 125 plan and contribute $100 per period to a Roth 401(k). The federal and state income tax figures below are examples for this illustration.</p>
<table><thead><tr><th>Line</th><th>Amount</th></tr></thead><tbody>
<tr><td>Gross salary ($58,500 / 24)</td><td>$2,437.50</td></tr>
<tr><td>Health insurance (Section 125, pre-tax)</td><td>-$120.00</td></tr>
<tr><td>Wages for FICA and income tax</td><td>$2,317.50</td></tr>
<tr><td>Social Security (6.2% x $2,317.50)</td><td>-$143.69</td></tr>
<tr><td>Medicare (1.45% x $2,317.50)</td><td>-$33.60</td></tr>
<tr><td>Federal income tax (example)</td><td>-$190.00</td></tr>
<tr><td>State income tax (example)</td><td>-$85.00</td></tr>
<tr><td>Roth 401(k) (after-tax)</td><td>-$100.00</td></tr>
<tr><td><strong>Net pay</strong></td><td><strong>$1,765.21</strong></td></tr>
</tbody></table>
<p>If the health premium had been taken after tax by mistake, Social Security and Medicare would have been calculated on $2,437.50 instead, overwithholding about $9 a period from the employee and overcharging you the same in matching tax. Small errors like this add up across a year and require corrected filings to fix.</p>
<p>By the end of the year, the YTD gross for this employee would be $58,500, the YTD health deduction $2,880 and the Social Security wages $55,620, which is what box 3 of the W-2 should show.</p>

<h2>Worked example: hourly employee with overtime and a bonus</h2>
<p>An illustrative weekly-paid employee earns $20 an hour, works 45 hours and receives a separately identified $500 performance bonus in the same check.</p>
<table><thead><tr><th>Line</th><th>Amount</th></tr></thead><tbody>
<tr><td>Regular pay (40 x $20)</td><td>$800.00</td></tr>
<tr><td>Overtime pay (5 x $30)</td><td>$150.00</td></tr>
<tr><td>Bonus</td><td>$500.00</td></tr>
<tr><td><strong>Gross pay</strong></td><td><strong>$1,450.00</strong></td></tr>
<tr><td>Federal income tax on regular and overtime wages (example)</td><td>-$62.00</td></tr>
<tr><td>Federal income tax on bonus (22% flat)</td><td>-$110.00</td></tr>
<tr><td>Social Security (6.2% x $1,450)</td><td>-$89.90</td></tr>
<tr><td>Medicare (1.45% x $1,450)</td><td>-$21.03</td></tr>
<tr><td>State income tax (example)</td><td>-$50.00</td></tr>
<tr><td><strong>Net pay</strong></td><td><strong>$1,117.07</strong></td></tr>
</tbody></table>
<p>The bonus shows on its own line with its own withholding, which helps the employee understand why this check is taxed differently. If a non-discretionary bonus, such as one promised for hitting a target, is earned over several weeks, federal law can require you to recalculate overtime for those weeks to include the bonus in the regular rate. Discretionary bonuses, decided at your sole discretion, generally do not.</p>

<h2>Choosing a pay frequency</h2>
<p>Your pay schedule changes every calculation on the stub. Biweekly pay (26 checks a year) is easy for hourly staff because each period covers exactly two workweeks, which keeps overtime simple. Semimonthly pay (24 checks, usually on the 15th and last day of the month) lines up with monthly bills and benefit premiums but splits workweeks across periods, which complicates overtime for hourly employees. Weekly pay is common in construction and hospitality, and monthly pay is restricted or prohibited for many workers by state law. Check your state's minimum pay frequency before choosing, and keep the schedule consistent once employees rely on it. If you change it, give written notice and plan the transition period carefully so no one has an unexpectedly long gap between checks.</p>

<h2>How to correct a pay stub error</h2>
<ol>
<li><strong>Find the cause</strong>: wrong hours, rate, deduction order, tax table or benefit election.</li>
<li><strong>Tell the employee promptly</strong> and explain the fix in writing.</li>
<li><strong>Underpayments:</strong> pay the shortfall quickly, often in an off-cycle payment, since many states set strict deadlines for wages owed.</li>
<li><strong>Overpayments:</strong> check state rules before deducting from future pay; some states require written consent or limit how much you can recover each period.</li>
<li><strong>Issue a corrected stub</strong> or show the adjustment clearly on the next one, labeled as a correction.</li>
<li><strong>Fix the tax side</strong>: adjust the current quarter or file corrected returns if the error crossed quarters, and correct any W-2 already issued with Form W-2c.</li>
</ol>

<h2>Tools for making pay stubs</h2>
<table><thead><tr><th>Option</th><th>Best for</th><th>Trade-offs</th></tr></thead><tbody>
<tr><td>Spreadsheet plus template</td><td>One or two employees with simple pay</td><td>Manual updates to tax tables; easy to make errors</td></tr>
<tr><td>Full-service payroll software</td><td>Most small businesses</td><td>Monthly fee, but calculates, deposits and files taxes</td></tr>
<tr><td>Accountant or bookkeeper</td><td>Owners who want hands-off payroll</td><td>Higher cost; you still approve hours and changes</td></tr>
<tr><td>Online "pay stub generators"</td><td>Rarely appropriate</td><td>Produce a document but do not run payroll, deposit taxes or file returns</td></tr>
</tbody></table>
<p>A pay stub only reflects payroll you actually ran. Creating stubs that do not match real wages and tax deposits, for example to support a loan application, is fraud. Use stubs as a record of real payroll, never as a substitute for it.</p>

<h2>Common mistakes when making pay stubs</h2>
<ul>
<li><strong>Using last year's tables or wage base.</strong> Update every January.</li>
<li><strong>Missing overtime</strong> for non-exempt employees, including salaried non-exempt staff.</li>
<li><strong>Wrong order of deductions</strong>, as in the example above.</li>
<li><strong>Ignoring state pay frequency and wage statement laws.</strong> Some states mandate specific stub contents and paydays.</li>
<li><strong>Not reconciling quarterly.</strong> YTD totals should tie to your Form 941 filings and tax deposits. Our guide to <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> explains the deposits.</li>
<li><strong>Forgetting minimum wage increases.</strong> Many states raise their minimum wage every January 1.</li>
</ul>

<h2>Pay stubs for owners and contractors</h2>
<p>If you own an S corporation and work in it, you should be on payroll with a reasonable salary and receive stubs like any employee. Sole proprietors cannot pay themselves wages; they take draws. Contractors are paid against invoices, with no withholding, and get a Form 1099-NEC if payments reach $2,000 for 2026.</p>
<p>This is general information, not tax or legal advice. Payroll rules vary by state, so confirm details with a payroll provider, accountant or your state agencies.</p>

<p>Payroll covers your employees; invoices cover your customers. For the billing side of your business, use our <a href="/invoice-generator">free invoice generator</a> to create professional invoices with no sign-up and download them as PDFs.</p>
`,
  },
  {
    slug: "offer-letter-template",
    title: "Offer Letter Template for Small Businesses",
    description:
      "A free offer letter template for small businesses: what to include, at-will wording, pay and benefits, contingencies, pay transparency rules and a worked example.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["hiring-your-first-employee", "w2-vs-1099", "employer-payroll-taxes"],
    faqs: [
      {
        q: "Is an offer letter legally binding?",
        a: "An offer letter can create binding obligations, especially on the terms it promises, such as pay, signing bonuses or commissions. In at-will states, a well-drafted offer letter states clearly that employment is at will and that the letter is not a contract for a fixed term. Avoid words like permanent or guaranteed, and avoid stating salary only as an annual amount in a way that could imply a one-year commitment.",
      },
      {
        q: "What is the difference between an offer letter and an employment contract?",
        a: "An offer letter is usually short and confirms the main terms of an at-will job: title, start date, pay, benefits and conditions. An employment contract is a longer, negotiated agreement that may set a fixed term, termination conditions, severance, and restrictive covenants. Most small businesses use offer letters for regular staff and reserve contracts for executives or roles with special terms.",
      },
      {
        q: "Should an offer letter include a non-compete?",
        a: "Usually not inside the letter itself. If you need restrictive covenants, put them in a separate agreement signed with the offer and check your state's law first. Several states ban or limit non-competes, especially for lower-paid workers, and some require advance notice or extra pay. Confidentiality and non-solicitation agreements are more widely enforceable and often protect a small business adequately.",
      },
      {
        q: "Can I withdraw a job offer after it is accepted?",
        a: "In many cases yes, for at-will roles, especially if the offer was contingent on conditions the candidate did not meet, such as a background check. Withdrawing for discriminatory reasons is illegal, and withdrawing after a candidate has resigned from another job or relocated can expose you to claims based on their reliance. Make contingencies explicit in the letter and act on them promptly.",
      },
      {
        q: "Do offer letters have to include salary ranges?",
        a: "The offer letter itself states the agreed pay. Pay transparency laws in a growing number of states and cities mainly require salary ranges in job postings or on request during hiring. Some states also require written notice of pay rate, payday and employer details at hire, which an offer letter or separate wage notice can satisfy. Check the rules for every location where you hire, including remote workers.",
      },
      {
        q: "How long should a candidate have to accept an offer?",
        a: "Most small businesses give two to five business days, which is long enough to review benefits and ask questions without leaving the role open too long. State the deadline and how to accept, such as signing and returning a copy. If you need a faster answer, explain why. Extending the deadline once on request is common and builds goodwill with the candidate.",
      },
    ],
    content: `
<p>An offer letter template for a small business should confirm the job title, start date, pay rate and schedule, exempt or non-exempt status, benefits, at-will employment, any contingencies such as background checks, and a deadline to accept. It is a short, plain-language document, not a full employment contract, and its main job is to put the agreed terms in writing so there are no surprises on day one.</p>

<p>For a small team, the offer letter is often the only written record of what you promised a new hire. A vague letter leads to disputes about pay, bonuses and start dates; an overpromising one can create obligations you did not intend. This guide gives you a template, explains each section, shows the true cost of an offer with real numbers, and flags the legal points to check.</p>

<h2>What to include in an offer letter</h2>
<table><thead><tr><th>Section</th><th>What to write</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Job title and manager</td><td>Title, department, who they report to</td><td>Sets expectations and reporting line</td></tr>
<tr><td>Start date and location</td><td>Date, work location or remote/hybrid arrangement</td><td>Determines which state and local laws apply</td></tr>
<tr><td>Employment type</td><td>Full-time or part-time, expected hours</td><td>Affects benefits eligibility</td></tr>
<tr><td>Classification</td><td>Exempt (salaried, no overtime) or non-exempt (overtime eligible)</td><td>Misclassification leads to overtime claims</td></tr>
<tr><td>Pay</td><td>Rate per hour or per pay period, pay frequency, any commissions or bonuses</td><td>The most disputed term</td></tr>
<tr><td>Benefits</td><td>Health insurance, retirement plan, paid time off, with eligibility dates</td><td>Avoids benefit misunderstandings</td></tr>
<tr><td>At-will statement</td><td>Either party may end employment at any time</td><td>Prevents an implied fixed-term contract</td></tr>
<tr><td>Contingencies</td><td>Background check, references, work eligibility (Form I-9), signing other agreements</td><td>Lets you withdraw if conditions are not met</td></tr>
<tr><td>Acceptance</td><td>Deadline and signature line</td><td>Creates a clear record of acceptance</td></tr>
</tbody></table>

<h3>Exempt vs non-exempt pay</h3>
<p>To be exempt from federal overtime, an employee generally must meet a duties test and be paid a salary of at least $684 per week ($35,568 a year), the federal level that applies after the 2024 increase was struck down in court. Several states set much higher thresholds. If you are unsure, classify the role as non-exempt and pay overtime. Write the salary as an amount per pay period (for example, "$2,166.67 per semimonthly pay period, equivalent to $52,000 per year") to avoid implying a guaranteed year of employment.</p>

<h2>Offer letter template</h2>
<p>Adapt this sample to your business, and have an employment lawyer review your final version once.</p>
<p>[Company Name]<br>[Address]</p>
<p>[Date]</p>
<p>Dear [Candidate Name],</p>
<p>We are pleased to offer you the position of <strong>[Job Title]</strong> at [Company Name], reporting to [Manager Name, Title]. We were impressed by [one specific reason], and we think you will be a great addition to the team.</p>
<p><strong>Start date and schedule:</strong> Your start date will be [date]. This is a [full-time / part-time] position of approximately [hours] per week, based at [location / remote from state].</p>
<p><strong>Compensation:</strong> You will be paid [$amount per hour / $amount per pay period, equivalent to $annual per year], paid [biweekly / semimonthly] in accordance with our regular payroll. This position is [exempt / non-exempt] under applicable wage and hour laws. [Describe any bonus or commission plan and refer to the written plan.]</p>
<p><strong>Benefits:</strong> You will be eligible for [health insurance from date, retirement plan, paid time off of X days per year], subject to the terms of each plan, which may change from time to time.</p>
<p><strong>At-will employment:</strong> Your employment with [Company Name] is at will. Either you or the company may end the employment relationship at any time, with or without cause or notice. This letter is not a contract of employment for any specific period.</p>
<p><strong>Conditions:</strong> This offer is contingent on [satisfactory completion of a background check, verification of your identity and authorization to work in the United States, and signing our confidentiality agreement].</p>
<p>To accept, please sign and return this letter by [date]. We look forward to working with you.</p>
<p>Sincerely,<br>[Name, Title]</p>
<p>Accepted: ____________________ Date: __________</p>

<h2>Worked example: the true cost of an offer</h2>
<p>An illustrative small business offers a coordinator role at $52,000 a year, paid semimonthly at $2,166.67, with a $1,500 signing bonus, 10 days of PTO and health insurance where the company pays 70% of a $650 monthly premium.</p>
<table><thead><tr><th>Cost to employer</th><th>Annual amount</th></tr></thead><tbody>
<tr><td>Base salary</td><td>$52,000</td></tr>
<tr><td>Employer Social Security and Medicare (7.65%)</td><td>$3,978</td></tr>
<tr><td>Federal unemployment tax (0.6% of first $7,000, after full state credit)</td><td>$42</td></tr>
<tr><td>Health insurance (70% x $650 x 12)</td><td>$5,460</td></tr>
<tr><td><strong>Ongoing annual cost before state unemployment tax</strong></td><td><strong>$61,480</strong></td></tr>
<tr><td>Signing bonus, year one only, plus 7.65% employer tax</td><td>$1,614.75</td></tr>
</tbody></table>
<p>The real cost is about 18% above the headline salary before state unemployment insurance, workers' compensation and equipment. Price that into your budget before you send the letter. The signing bonus is supplemental wages for the employee, subject to withholding like any other pay. Our guide to <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> explains each tax, and <a href="/blog/how-to-do-payroll-yourself">how to do payroll yourself</a> shows how to run it.</p>

<h2>Legal points to check before sending</h2>
<ul>
<li><strong>Pay transparency.</strong> A growing list of states, including California, Colorado, Illinois, Massachusetts, New Jersey, New York and Washington, require pay ranges in job postings or during hiring, and more laws took effect in 2026. This <a href="https://www.cooley.com/news/insight/2026/2026-07-06-show-me-the-money-or-the-wage-range-new-state-pay-transparency-laws" target="_blank" rel="noopener noreferrer">Cooley overview of new state pay transparency laws</a> summarizes recent changes. Make sure the offered pay falls within any range you posted.</li>
<li><strong>Salary history bans.</strong> Many states and cities prohibit asking about past pay.</li>
<li><strong>Wage notices at hire.</strong> Some states require a specific written notice of pay rate and payday in addition to the offer letter.</li>
<li><strong>Form I-9.</strong> The employee completes Section 1 by the first day of work, and you complete Section 2 within three business days of the start date.</li>
<li><strong>Background checks.</strong> Using a consumer reporting agency triggers federal disclosure and authorization requirements, and many places have ban-the-box rules on when you can ask about criminal history.</li>
<li><strong>Restrictive covenants.</strong> Non-compete rules vary widely and changed in several states in 2026. Read our guide to <a href="/blog/non-compete-agreement">non-compete agreements</a> before adding one.</li>
</ul>
<p>This is general information, not legal advice. Employment law varies by state and city, so have your template reviewed for the places you hire.</p>

<h2>Offer letter vs contractor agreement</h2>
<p>If the person will work independently, set their own hours and invoice you, an offer letter is the wrong document. Use a <a href="/blog/freelance-contract-template">freelance contract</a> or <a href="/blog/statement-of-work-template">statement of work</a> and pay against their invoices. Sending an offer letter that sets hours, benefits and a manager to someone you treat as a contractor is strong evidence they are actually an employee. The <a href="/blog/w2-vs-1099">W-2 vs 1099 guide</a> explains the tests.</p>

<h2>Step by step: from verbal offer to first day</h2>
<ol>
<li>Make the verbal offer and agree on the main terms.</li>
<li>Send the written offer letter the same day, with any separate agreements attached.</li>
<li>Answer questions and confirm acceptance in writing by the deadline.</li>
<li>Start contingencies, such as the background check, immediately.</li>
<li>Send onboarding paperwork: W-4, state withholding form, I-9 instructions, direct deposit form and benefits enrollment.</li>
<li>Share your <a href="/blog/employee-handbook-template">employee handbook</a> and collect the signed acknowledgment in the first week.</li>
<li>Add the employee to payroll before their first pay period; our guide to <a href="/blog/hiring-your-first-employee">hiring your first employee</a> lists every registration.</li>
</ol>

<h2>Adjusting the template for different roles</h2>
<h3>Hourly and part-time offers</h3>
<p>State the hourly rate, expected weekly hours and overtime eligibility. If hours vary, say so, for example "approximately 20 to 25 hours per week based on scheduling needs." Do not promise a minimum number of hours unless you intend to honor it; some cities have predictive scheduling laws that create obligations around posted schedules.</p>
<h3>Remote employees in another state</h3>
<p>Name the state where the employee will work. That state's wage, leave, tax and pay transparency laws usually apply, and you will need to register for payroll taxes there. Note which equipment you provide and whether internet or phone costs are reimbursed, since some states require reimbursement of necessary business expenses.</p>
<h3>Commission and bonus roles</h3>
<p>Summarize the plan in one or two sentences and refer to a separate written plan that defines how commissions are earned, when they are paid, and what happens to unpaid commissions when employment ends. Several states require written commission agreements, and vague promises are a common source of claims after a salesperson leaves.</p>

<h2>When the candidate negotiates</h2>
<p>Candidates often ask for a higher salary, a later start date, extra PTO or remote days. Decide your limits before you send the offer, so you can respond quickly. If you agree to changes, send a revised letter rather than relying on an email chain, and make sure the final signed version reflects everything you agreed. Keep the earlier drafts with the hiring file. If a request is outside what you can offer, explain why and, where possible, offer an alternative such as a salary review after six months, written into the letter with clear conditions.</p>

<h2>Common offer letter mistakes</h2>
<ul>
<li>Calling the job permanent or promising job security.</li>
<li>Promising a bonus without referring to a written plan or conditions.</li>
<li>Misclassifying a role as exempt to avoid overtime.</li>
<li>Omitting the start date or work location, which matters for remote hires in other states.</li>
<li>Leaving out contingencies, then trying to withdraw after a failed check.</li>
</ul>

<p>Once your team is in place, keep the money coming in with professional billing. Use our <a href="/invoice-generator">free invoice generator</a> to create client invoices with no sign-up and download them as PDFs.</p>
`,
  },
  {
    slug: "employee-handbook-template",
    title: "Employee Handbook Template: What to Include",
    description:
      "Employee handbook template for small businesses: the sections to include, policies required by law, at-will and acknowledgment wording, examples and mistakes to avoid.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["hiring-your-first-employee", "expense-report-template", "timesheet-template"],
    faqs: [
      {
        q: "Is an employee handbook legally required?",
        a: "No federal law requires a handbook, and most states do not either. However, many laws require employers to give employees specific written policies or notices, such as paid sick leave rights, anti-harassment policies in some states, and FMLA information for covered employers that have written guidance. A handbook is the most practical place to put those policies, so most employers with even a few staff benefit from having one.",
      },
      {
        q: "How long should a small business employee handbook be?",
        a: "Most small business handbooks run about 15 to 40 pages. Length matters less than clarity: employees should be able to find the rules on pay, time off, conduct and complaints quickly. Avoid copying long policies from large companies that do not fit your size or state. A shorter handbook that you actually follow is safer than a long one you ignore.",
      },
      {
        q: "Does an employee handbook need an acknowledgment form?",
        a: "Yes, it is strongly recommended. A signed acknowledgment shows the employee received the handbook, understands they are responsible for reading it, and understands that the handbook is not a contract and that employment is at will. Collect a new acknowledgment whenever you issue a significantly updated version, and keep each signed form in the employee's personnel file.",
      },
      {
        q: "How often should I update my employee handbook?",
        a: "Review it at least once a year, ideally in late fall so changes are ready for January 1, when many state laws, minimum wages and leave rules take effect. Also update it whenever you add employees in a new state, change benefits or pass a size threshold that triggers new legal obligations, such as reaching 15 or 50 employees.",
      },
      {
        q: "Can an employee handbook become a contract?",
        a: "It can if it uses promissory language, such as guaranteeing employment, progressive discipline before any termination, or specific benefits that cannot change. To avoid this, include a clear disclaimer that the handbook is not a contract, that employment is at will where allowed, and that the company may change policies. Use words like may and generally instead of will always for discipline steps.",
      },
      {
        q: "Can I use one handbook for employees in different states?",
        a: "Yes, with state supplements. Many multi-state employers keep one core handbook with company-wide policies and add a short supplement for each state covering its leave laws, meal and rest breaks, final pay rules and other specific requirements. Remote employees count too: the law of the state where the employee works usually applies, not the state where your office is.",
      },
    ],
    content: `
<p>An employee handbook template should cover your welcome and at-will statement, equal employment and anti-harassment policies, pay and timekeeping rules, work hours and attendance, paid time off and leave, benefits, workplace conduct, technology and confidentiality, safety, discipline and complaints, and a signed acknowledgment. No federal law requires a handbook, but many required policies have to be in writing somewhere, and a handbook is the cleanest place to keep them.</p>

<p>For a small business, the handbook does two jobs. It tells employees how things work so you do not have to answer the same questions repeatedly, and it documents that you communicated your rules consistently, which matters if a dispute ever reaches a lawyer or agency. This guide lists every section, explains which policies the law requires, shows an example, and points out the wording that gets employers into trouble.</p>

<h2>Employee handbook sections: what to include</h2>
<table><thead><tr><th>Section</th><th>Typical contents</th><th>Priority</th></tr></thead><tbody>
<tr><td>Welcome and purpose</td><td>Company history, mission, how to use the handbook</td><td>Recommended</td></tr>
<tr><td>Employment basics</td><td>At-will statement, employee classifications, introductory period</td><td>Essential</td></tr>
<tr><td>Equal opportunity and anti-harassment</td><td>Non-discrimination, harassment definitions, reporting channels, no retaliation, accommodations</td><td>Essential</td></tr>
<tr><td>Pay and timekeeping</td><td>Paydays, overtime, recording hours, meal and rest breaks, payroll errors</td><td>Essential</td></tr>
<tr><td>Work hours and attendance</td><td>Schedules, remote work, tardiness, call-in procedures</td><td>Essential</td></tr>
<tr><td>Time off and leave</td><td>Vacation/PTO, sick leave, holidays, FMLA and state leave, jury duty, voting, military leave</td><td>Essential; partly legally required</td></tr>
<tr><td>Benefits</td><td>Health, retirement, eligibility, reference to plan documents</td><td>Recommended</td></tr>
<tr><td>Conduct</td><td>Standards of conduct, conflicts of interest, drugs and alcohol, dress code</td><td>Essential</td></tr>
<tr><td>Technology and confidentiality</td><td>Devices, email, privacy expectations, social media, confidential information</td><td>Essential</td></tr>
<tr><td>Expenses and travel</td><td>What is reimbursable, how to submit receipts, mileage</td><td>Recommended</td></tr>
<tr><td>Safety and security</td><td>Accident reporting, workplace violence, emergencies</td><td>Essential</td></tr>
<tr><td>Discipline, complaints and separation</td><td>Complaint procedure, discipline approach, resignation notice, final pay, return of property</td><td>Essential</td></tr>
<tr><td>Acknowledgment</td><td>Signed receipt and at-will confirmation</td><td>Essential</td></tr>
</tbody></table>

<h2>Policies required by law</h2>
<p>Which policies are mandatory depends on your headcount and location. Common triggers include:</p>
<ul>
<li><strong>FMLA (50 or more employees).</strong> Covered employers that have a handbook or other written guidance about benefits or leave must include information about FMLA rights in it.</li>
<li><strong>Anti-discrimination laws.</strong> Federal laws generally apply from 15 employees (Title VII, ADA, Pregnant Workers Fairness Act) or 20 (age discrimination), but many states apply similar laws to employers with just one employee. A written anti-harassment policy with a reporting procedure is a key defense, and some states require one or mandate training.</li>
<li><strong>Paid sick leave.</strong> A growing number of states and cities require paid sick leave and written notice of employees' rights. California, for example, requires at least 40 hours or five days of paid sick leave per year.</li>
<li><strong>Meal and rest breaks, final pay and pay frequency.</strong> These are set by state law and should be described accurately.</li>
<li><strong>Labor law posters.</strong> Required federal and state notices must be displayed or provided electronically to remote staff; the handbook does not replace them.</li>
</ul>

<h2>Wording that keeps your handbook safe</h2>
<h3>At-will disclaimer</h3>
<p>Example: "Employment with [Company] is at will. You or the company may end employment at any time, with or without cause or notice. Nothing in this handbook creates a contract of employment or a promise of employment for any specific period. Only the company owner may make an agreement to the contrary, and only in a signed writing."</p>
<h3>Right to change policies</h3>
<p>Example: "The company may revise, add or remove policies at any time. We will notify employees of material changes. Where a policy in this handbook conflicts with applicable law, the law governs."</p>
<h3>Workplace rules and employee rights</h3>
<p>Broad rules on confidentiality, social media, recording or speaking to the media can violate federal labor law if they would discourage employees from discussing pay and working conditions, and that applies whether or not you have a union. Under the National Labor Relations Board's 2023 Stericycle standard, the Board looks at whether a rule could reasonably be read to chill those rights. The Board's General Counsel has asked it to overturn that decision, but as this <a href="https://www.fisherphillips.com/en/insights/insights/employers-still-need-to-follow-nlrbs-strict-handbook-rules" target="_blank" rel="noopener noreferrer">Fisher Phillips analysis</a> advises, employers should keep following it until a new standard is formally adopted. Write narrow rules tied to a clear business reason and add a statement that nothing in the handbook limits employees' rights under the National Labor Relations Act.</p>

<h2>Worked example: a 12-person landscaping company</h2>
<p>An illustrative company has 12 employees in one state: 10 hourly crew members and 2 salaried office staff. Its handbook outline might be:</p>
<ol>
<li>Welcome and at-will statement (1 page)</li>
<li>Equal opportunity, anti-harassment and complaint procedure (3 pages)</li>
<li>Pay, overtime and timekeeping, including daily clock-in on the crew app and approval of <a href="/blog/timesheet-template">timesheets</a> each Friday (3 pages)</li>
<li>Paid time off: 1 hour of PTO for every 30 hours worked, which gives a full-time employee working 2,080 hours about 69 hours (8.7 days) a year, plus state-required sick leave (2 pages)</li>
<li>Safety: equipment training, personal protective equipment, heat illness and injury reporting (4 pages)</li>
<li>Vehicles and equipment: who may drive company trucks, phone use while driving, fuel cards (2 pages)</li>
<li>Expenses: submit receipts within 30 days on an <a href="/blog/expense-report-template">expense report</a>, with personal-vehicle miles logged on a <a href="/blog/mileage-log-template">mileage log</a> (1 page)</li>
<li>Conduct, drugs and alcohol, and discipline (3 pages)</li>
<li>Separation, final pay and returning equipment (1 page)</li>
<li>Acknowledgment form (1 page)</li>
</ol>
<p>That is about 21 pages, focused on the issues this business actually faces. A reimbursement policy that requires receipts and timely submission also supports an <a href="/blog/accountable-plan">accountable plan</a>, so reimbursements are not taxable wages to employees.</p>

<h2>How to create your handbook, step by step</h2>
<ol>
<li><strong>List your current practices.</strong> Paydays, PTO, schedules, expense rules: write down what you already do.</li>
<li><strong>Identify legal requirements</strong> for your headcount and every state where employees work.</li>
<li><strong>Draft from a template</strong>, deleting anything that does not apply to you.</li>
<li><strong>Write plainly.</strong> Use short sentences and examples. Translate it if many employees read another language better.</li>
<li><strong>Have an employment lawyer review it</strong> once, especially the leave, pay and conduct sections.</li>
<li><strong>Distribute and collect acknowledgments</strong>, including from new hires during onboarding alongside their <a href="/blog/offer-letter-template">offer letter</a>.</li>
<li><strong>Train managers</strong> so they apply the policies consistently.</li>
<li><strong>Review annually</strong> and whenever laws or your headcount change.</li>
</ol>
<p>For broader setup, see <a href="/blog/hiring-your-first-employee">hiring your first employee</a> and <a href="/blog/how-to-do-payroll-yourself">how to do payroll yourself</a>.</p>

<h2>Sample policy: timekeeping and overtime</h2>
<p>Here is a short example of the plain, specific style that works well in a small business handbook:</p>
<p><em>"Non-exempt employees must record all time worked, including start and end times and meal breaks, using the company timekeeping app. Do not work off the clock, including answering calls or emails outside your scheduled hours, unless you record that time. Overtime must be approved in advance by your manager, but all overtime worked will be paid, whether or not it was approved. Repeatedly working unapproved overtime may lead to discipline. If you believe your pay is incorrect, tell [name or role] immediately so it can be corrected on the next payroll."</em></p>
<p>Notice what this does: it requires accurate records, makes clear that all hours worked are paid, controls overtime through discipline rather than by refusing to pay, and gives a channel for reporting payroll errors. Each of those points reduces wage-and-hour risk.</p>

<h2>Rolling out a handbook to existing employees</h2>
<ul>
<li><strong>Hold a short meeting</strong> to walk through the main sections and any changes from past practice.</li>
<li><strong>Give people time to read it</strong> and a contact for questions before you ask for signatures.</li>
<li><strong>Collect signed acknowledgments</strong>, electronically or on paper, and file them.</li>
<li><strong>Make it easy to find</strong>: a shared drive, intranet page or printed copy in the break room.</li>
<li><strong>Grandfather carefully.</strong> If you are reducing a benefit, such as PTO, check state law on accrued balances and give clear notice before the change takes effect.</li>
</ul>
<p>When you later update a policy, circulate a dated summary of what changed and collect a new acknowledgment for significant revisions.</p>

<h2>Common handbook mistakes</h2>
<ul>
<li><strong>Copying a big-company handbook</strong> with benefits and procedures you do not offer.</li>
<li><strong>Promising progressive discipline</strong> in every case, which limits your flexibility.</li>
<li><strong>Use-it-or-lose-it PTO rules</strong> in states that treat earned vacation as wages that cannot be forfeited.</li>
<li><strong>Ignoring remote employees</strong> in other states whose laws differ.</li>
<li><strong>Not following your own policies.</strong> Inconsistent enforcement is evidence in discrimination claims.</li>
<li><strong>Never updating it.</strong> An outdated leave policy can be worse than none.</li>
</ul>
<p>This is general information, not legal advice. Have an employment attorney or HR professional review your handbook for your state and size.</p>

<h2>Handbook vs SOPs</h2>
<p>A handbook explains employment policies; it should not try to document how to do each job. Keep job procedures, such as how to quote a project, prepare an invoice or close out a job, in separate operating procedures that you can update without reissuing the handbook. Keeping the two apart also keeps the handbook short enough that employees actually read it, while the procedures stay detailed enough to train new hires. Reference the procedures from the handbook where useful, for example "follow the job closeout checklist for every completed project," without copying the steps into the policy itself.</p>

<p>Policies keep your team running; invoices keep your cash flowing. Create client invoices with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up required, and download each one as a PDF.</p>
`,
  },
  {
    slug: "non-compete-agreement",
    title: "Non-Compete Agreements in 2026: Are They Enforceable?",
    description:
      "Are non-compete agreements enforceable in 2026? The FTC rule's end, state bans and salary thresholds, new 2026 laws, and alternatives for small businesses.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["freelance-contract-template", "service-agreement-template", "hiring-your-first-employee"],
    faqs: [
      {
        q: "Did the FTC ban non-compete agreements?",
        a: "The FTC issued a rule in 2024 that would have banned most non-competes, but a federal court in Texas set it aside in August 2024 before it took effect. In September 2025 the FTC voted to dismiss its appeals, accepting that the rule is vacated. The agency now says it will challenge harmful non-competes case by case under antitrust law. State law therefore decides whether a non-compete is enforceable.",
      },
      {
        q: "Which states ban non-compete agreements?",
        a: "California, Minnesota, North Dakota and Oklahoma broadly prohibit employee non-competes, with limited exceptions such as the sale of a business. Washington enacted a law in March 2026 that will void nearly all non-competes from June 30, 2027. Wyoming voids most non-competes for agreements made from July 1, 2025, with exceptions for executive, management and professional staff. Many other states ban them for lower-paid workers or specific professions.",
      },
      {
        q: "Is a non-compete enforceable if I am fired?",
        a: "It depends on the state. Some states consider termination without cause when deciding whether enforcement is fair, and a few have specific rules. Virginia, for example, made non-competes unenforceable against employees discharged without cause after July 1, 2026 unless the employer provides severance or other payment disclosed when the agreement was signed. Washington currently requires paying base salary during enforcement against laid-off employees.",
      },
      {
        q: "Can a client make a freelancer sign a non-compete?",
        a: "Clients sometimes include non-competes in contractor agreements, and several state laws cover independent contractors as well as employees. A broad clause preventing a freelancer from working in their field is often unenforceable and may also suggest the worker is really an employee. A narrower non-solicitation clause, or a confidentiality clause protecting the client's information, is more reasonable and more likely to hold up.",
      },
      {
        q: "What makes a non-compete reasonable?",
        a: "In states that allow them, courts generally ask whether the restriction protects a legitimate business interest, such as trade secrets or customer relationships, and whether its length, geographic area and scope of restricted work are no broader than necessary. Many courts view restrictions of six months to two years as more defensible than longer ones. Some states also require separate payment or advance notice before signing.",
      },
      {
        q: "What is the difference between a non-compete and a non-solicitation agreement?",
        a: "A non-compete stops someone from working for a competitor or starting a competing business for a period. A non-solicitation agreement only stops them from actively pursuing your clients or employees. Non-solicitation and confidentiality agreements are enforceable in far more states, and some states set lower income thresholds for them, so they are often the better tool for small businesses.",
      },
    ],
    content: `
<p>Non-compete agreements are still enforceable in most US states in 2026, but only if they are reasonable and comply with a fast-growing set of state rules. The FTC's nationwide ban never took effect and was formally abandoned in 2025, so state law now decides the question. A handful of states ban non-competes outright, many void them for workers below a salary threshold, and several passed new restrictions in 2026, so the answer depends on where the worker lives and works and how much they earn.</p>

<p>For a small business owner, the practical question is whether a non-compete is worth the legal risk, or whether confidentiality and non-solicitation agreements protect you better. This guide explains the current federal position, summarizes key state rules with 2026 thresholds, works through real-world scenarios and covers the alternatives.</p>

<h2>What happened to the FTC non-compete ban?</h2>
<p>In April 2024 the Federal Trade Commission adopted a rule that would have banned most non-compete agreements nationwide. In August 2024 a federal district court in Texas set the rule aside, so it never took effect. In September 2025 the FTC voted to dismiss its appeals and accept that decision. The agency has said it will instead pursue specific non-competes it considers anticompetitive on a case-by-case basis, so unusually broad agreements, especially for lower-wage workers, can still draw federal attention.</p>

<h2>Are non-compete agreements enforceable? State rules in 2026</h2>
<p>State law varies enormously. This <a href="https://www.mayerbrown.com/en/insights/publications/2026/10/recent-developments-in-us-noncompete-law" target="_blank" rel="noopener noreferrer">Mayer Brown review of recent non-compete law</a> summarizes the 2025 and 2026 changes. Key examples:</p>
<table><thead><tr><th>State</th><th>Rule</th><th>Key detail</th></tr></thead><tbody>
<tr><td>California</td><td>Broad ban</td><td>Most non-competes void; AB 692, effective January 1, 2026, also targets "stay-or-pay" repayment terms</td></tr>
<tr><td>Minnesota</td><td>Ban</td><td>Non-competes signed from July 1, 2023 are void, with sale-of-business exceptions</td></tr>
<tr><td>North Dakota, Oklahoma</td><td>Long-standing bans</td><td>Limited exceptions, such as sale of a business</td></tr>
<tr><td>Washington</td><td>Income threshold now; full ban from June 30, 2027</td><td>2026 employee threshold about $126,859; ESHB 1155 voids all non-competes from mid-2027 and requires notice to affected workers</td></tr>
<tr><td>Wyoming</td><td>Broad ban for agreements from July 1, 2025</td><td>Exceptions include executives, management and professional staff, and sale of a business</td></tr>
<tr><td>Colorado</td><td>Void below high-earner threshold</td><td>Allowed only for highly compensated workers (about $130,000 in 2026) to protect trade secrets, with notice rules</td></tr>
<tr><td>Oregon</td><td>Salary threshold and limits</td><td>2026 threshold $119,541; maximum 12 months</td></tr>
<tr><td>Illinois</td><td>Earnings threshold</td><td>Void for workers earning $75,000 or less; non-solicits void at $45,000 or less</td></tr>
<tr><td>Tennessee</td><td>New threshold from July 1, 2026</td><td>Void for employees earning under $70,000 in annualized compensation</td></tr>
<tr><td>Virginia</td><td>Low-wage ban plus 2026 changes</td><td>Banned for low-wage and overtime-eligible employees; from July 1, 2026, unenforceable after discharge without cause unless severance is provided</td></tr>
<tr><td>Florida</td><td>Pro-enforcement CHOICE Act</td><td>Since July 1, 2025, compliant agreements for high earners can last up to four years and are presumed enforceable</td></tr>
</tbody></table>
<p>Threshold figures for Washington, Oregon and Illinois are from this <a href="https://www.ebglaw.com/trade-secrets-employee-mobility/raising-the-cost-of-noncompetes-2026-state-noncompete-salary-threshold-changes" target="_blank" rel="noopener noreferrer">Epstein Becker Green summary of 2026 thresholds</a>. Several states adjust them every year, and many others restrict non-competes for specific professions, especially physicians and other healthcare workers, so always check the current statute before relying on an agreement.</p>

<h2>What makes a non-compete enforceable where allowed</h2>
<p>In states without a ban, courts usually apply a reasonableness test:</p>
<ul>
<li><strong>Legitimate business interest.</strong> Protecting trade secrets, confidential information or customer goodwill, not simply avoiding competition.</li>
<li><strong>Reasonable duration.</strong> Six to 12 months is easier to defend than several years for an ordinary employee.</li>
<li><strong>Reasonable geography.</strong> The area where the employee actually worked or served customers.</li>
<li><strong>Narrow scope.</strong> Limited to the type of work the employee did, not the whole industry.</li>
<li><strong>Consideration.</strong> Something of value in exchange. Some states say continued employment is not enough for existing employees.</li>
<li><strong>Procedural rules.</strong> Advance notice, the right to consult a lawyer, or separate signed documents, depending on the state.</li>
</ul>
<p>Some courts will narrow an overbroad agreement; others throw out the whole clause. Drafting it narrowly from the start is safer.</p>

<h2>Worked examples: is this non-compete enforceable?</h2>
<ul>
<li><strong>Tennessee, office manager earning $64,000, agreement signed August 2026.</strong> Below the $70,000 floor for agreements made after July 1, 2026, so the non-compete is void. A confidentiality agreement would still protect client lists.</li>
<li><strong>Oregon, sales lead earning $110,000.</strong> Below the 2026 threshold of $119,541, so the non-compete is void unless the employer uses a statutory exception; a non-solicitation clause is still available.</li>
<li><strong>Illinois, senior engineer earning $140,000, one-year restriction limited to direct competitors.</strong> Above the $75,000 threshold; likely enforceable if the business interest, scope and procedural requirements are met.</li>
<li><strong>Virginia, technician fired without cause in September 2026 under an agreement signed that month.</strong> Unenforceable unless the employer provides the severance or payment disclosed at signing.</li>
<li><strong>California, any employee.</strong> Void, and asking an employee to sign one can itself create liability.</li>
</ul>
<p>These are simplified illustrations; real outcomes depend on the full statute, the agreement and the facts.</p>

<h2>Better alternatives for small businesses</h2>
<table><thead><tr><th>Agreement</th><th>What it does</th><th>Enforceability</th></tr></thead><tbody>
<tr><td>Confidentiality (NDA)</td><td>Protects trade secrets and confidential information</td><td>Enforceable in nearly every state if reasonable</td></tr>
<tr><td>Client non-solicitation</td><td>Stops active pursuit of your clients for a period</td><td>Widely enforceable, with limits in some states</td></tr>
<tr><td>Employee non-solicitation</td><td>Stops recruiting your staff</td><td>Widely enforceable, with limits</td></tr>
<tr><td>Intellectual property assignment</td><td>Confirms the business owns work created for it</td><td>Generally enforceable</td></tr>
<tr><td>Garden leave</td><td>Employee stays on paid leave during notice</td><td>Often enforceable because the employee is paid</td></tr>
</tbody></table>
<p>Many small businesses get the protection they need from a confidentiality agreement plus a 12-month client non-solicitation clause, at much lower legal risk.</p>

<h2>Non-competes in contractor and client agreements</h2>
<p>Freelancers and agencies see restrictive clauses in client contracts too. A client might try to stop you from working with its competitors, or an agency might bar you from working directly with its end client. When reviewing a <a href="/blog/freelance-contract-template">freelance contract</a> or <a href="/blog/service-agreement-template">service agreement</a>:</p>
<ul>
<li>Push for a narrow non-solicitation clause instead of a broad non-compete.</li>
<li>Limit the period, for example 6 to 12 months after the project ends.</li>
<li>Name specific competitors rather than a whole industry.</li>
<li>Ask for higher rates if a client wants exclusivity.</li>
</ul>
<p>Broad control over who a contractor may work for is also a sign of employment, which can create misclassification risk for the client; see <a href="/blog/w2-vs-1099">W-2 vs 1099</a>. Keep scope, deliverables and restrictions in the <a href="/blog/statement-of-work-template">statement of work</a>, and bill against it with a clear <a href="/blog/independent-contractor-invoice">independent contractor invoice</a>.</p>

<h2>If you have already signed a non-compete</h2>
<p>Employees and contractors often discover an old non-compete when they want to change jobs or go freelance. Before you assume it binds you:</p>
<ol>
<li><strong>Find the signed copy</strong> and check the date, the state law it chooses and any restricted period, area and activities.</li>
<li><strong>Check the law where you live and work.</strong> Many states protect their residents even if the agreement chooses another state's law.</li>
<li><strong>Compare your earnings</strong> with any salary threshold for the year you signed and the current year, depending on how the statute applies.</li>
<li><strong>Look at what was exchanged.</strong> Some states require more than continued employment for an existing employee.</li>
<li><strong>Separate the clauses.</strong> Even if the non-compete fails, confidentiality and non-solicitation clauses may still apply.</li>
<li><strong>Get advice before acting</strong> if the restriction looks enforceable. A short consultation is far cheaper than defending an injunction.</li>
</ol>
<p>If you start freelancing for clients your former employer never served, in a different line of work, the practical risk is usually low even where a clause exists. Keep records of how you found each client.</p>

<h2>What enforcing a non-compete costs an employer</h2>
<p>Small businesses sometimes overestimate how useful a non-compete is in practice. Enforcing one usually means hiring a lawyer, sending a demand letter and possibly asking a court for an injunction, which can cost thousands of dollars before any hearing. Several states now let workers recover damages, penalties and attorney fees from employers that use void agreements; Washington's new law, for example, provides at least $5,000 per violation plus fees. Weigh that cost against the harm you are trying to prevent, and against the protection a well-drafted confidentiality and non-solicitation agreement already gives you.</p>

<h2>Sale-of-business non-competes</h2>
<p>When you sell a business, the buyer usually requires you not to compete for several years. These covenants are treated differently and are allowed even in most ban states, because the buyer is paying for goodwill. Washington's new law applies this exception only to owners of at least 1% of the business. If you are planning an exit, see <a href="/blog/how-to-sell-a-small-business">how to sell a small business</a>.</p>

<h2>Step by step: using restrictive covenants safely</h2>
<ol>
<li>Identify what you actually need to protect: client relationships, pricing, trade secrets or staff.</li>
<li>Check each state where your employees live and work, including remote staff.</li>
<li>Choose the narrowest tool that protects that interest, often an NDA and non-solicit.</li>
<li>If you still need a non-compete, confirm salary thresholds, notice periods and consideration rules.</li>
<li>Give the agreement with the <a href="/blog/offer-letter-template">offer letter</a>, not after the employee starts, and allow time for review.</li>
<li>Review every agreement annually as thresholds and laws change.</li>
</ol>
<p>This is general information, not legal advice. Non-compete law changes frequently, so have an employment lawyer in your state review any agreement before you use it. For hiring basics, see <a href="/blog/hiring-your-first-employee">hiring your first employee</a>.</p>

<p>Whether you are hiring staff or working as a contractor, clear documents prevent disputes. For the billing side, create professional invoices with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up required, and download them as PDFs.</p>
`,
  },
];
