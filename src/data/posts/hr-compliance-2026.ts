import type { PostDraft } from "../blog";

export const HR_COMPLIANCE_2026_POSTS: PostDraft[] = [
  {
    slug: "pto-policy-template",
    title: "PTO Policy Template for Small Business (2026)",
    description:
      "A PTO policy template for small businesses: accrual vs lump sum vs unlimited, carryover caps, payout at termination, sick leave laws and a worked example.",
    category: "guides",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "employee-handbook-template",
      "hiring-your-first-employee",
      "how-to-do-payroll-yourself",
    ],
    faqs: [
      {
        q: "Are employers required to offer paid time off?",
        a: "No federal law requires private employers to provide paid vacation or general PTO. The Family and Medical Leave Act provides unpaid, job-protected leave for eligible employees of employers with 50 or more employees. Paid sick leave, however, is required by law in a number of states and cities, and some states also run paid family and medical leave programs. Your PTO policy has to meet any of these laws that cover your employees.",
      },
      {
        q: "Do I have to pay out unused PTO when an employee leaves?",
        a: "It depends on the state and on your written policy. California and Colorado treat earned vacation as wages that must be paid at separation, and several other states require payout unless a written policy clearly says otherwise. Many states leave it to the employer's policy or past practice. Paid sick leave usually does not have to be paid out. Whatever you choose, put it in writing and apply it consistently.",
      },
      {
        q: "Is a use-it-or-lose-it PTO policy legal?",
        a: "In most states, yes, if employees are told in advance. California and Colorado prohibit forfeiting earned vacation, though employers there can use a reasonable cap on accrual so employees stop earning more once they reach it. A few other states restrict forfeiture in narrower ways. A carryover limit or accrual cap achieves the same goal of encouraging people to take time off without creating forfeiture problems.",
      },
      {
        q: "Should sick leave be combined with vacation in one PTO bank?",
        a: "Combining them is simpler to administer and gives employees flexibility. In states and cities with paid sick leave laws, a combined PTO bank can satisfy the law if it provides at least as much leave, usable for the same reasons, under the same conditions. That means you may lose some flexibility over notice requirements and documentation for the whole bank. Some employers keep separate banks in those locations to keep vacation rules simpler.",
      },
      {
        q: "How do I calculate PTO accrual per pay period?",
        a: "Divide the annual PTO hours by the number of pay periods. For 120 hours a year paid biweekly, that is 120 / 26 = 4.62 hours per pay period. For an hours-based accrual, divide annual PTO hours by expected annual hours worked; for example 80 hours over 2,080 hours gives about 0.0385 hours of PTO per hour worked, which also works well for part-time staff.",
      },
      {
        q: "Is unlimited PTO a good idea for a small business?",
        a: "It can be, for salaried roles where results matter more than hours. It removes accrual tracking and payout liability in many states. The risks are that employees take less time off, managers approve unevenly, and in some states an unclear unlimited policy can still be treated as accruing vacation. Write clear approval rules, set a minimum expectation such as two weeks, and keep a separate sick leave policy where the law requires one.",
      },
    ],
    content: `
<p>A PTO policy tells employees how much paid time off they get, how it is earned, how to request it, what happens to unused time and whether it is paid out when they leave. Federal law does not require paid vacation, but state sick leave laws, final pay rules and simple fairness make a written policy essential once you have even one employee. The right design for a small business is usually a simple accrual with a cap, clear request rules and a payout rule that matches your state.</p>

<p>This guide includes a PTO policy template you can adapt, compares accrual, lump-sum and unlimited models, explains the state rules that most often trip employers up, and walks through a worked example of accrual and payout. It is general information, not legal advice; leave laws vary widely by state and city, so check the rules where your employees work.</p>

<h2>Types of PTO policy: which fits your business?</h2>
<table><thead><tr><th>Model</th><th>How it works</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>Accrual</td><td>Employees earn hours each pay period or per hour worked</td><td>Fair for new and part-time staff; liability builds gradually</td><td>Needs tracking in payroll</td></tr>
<tr><td>Lump sum (front-loaded)</td><td>Full annual amount granted on January 1 or the work anniversary</td><td>Simple; employees can plan early</td><td>Payout questions if someone leaves early in the year</td></tr>
<tr><td>Combined PTO bank</td><td>One bank for vacation, sick and personal days</td><td>Flexible, less admin</td><td>Must meet sick leave law conditions for the whole bank in covered locations</td></tr>
<tr><td>Separate vacation and sick</td><td>Distinct banks with different rules</td><td>Easier to meet sick leave laws while keeping vacation rules simpler</td><td>More to track</td></tr>
<tr><td>Unlimited</td><td>No fixed number; time off by approval</td><td>No accrual liability in many states; attractive for recruiting</td><td>Uneven use; must still meet sick leave laws</td></tr>
</tbody></table>
<p>For most small teams, an accrual-based combined bank or a modest vacation accrual plus a compliant sick leave bank is the easiest to run. Your choice should also go into your <a href="/blog/employee-handbook-template">employee handbook</a>, where policies on holidays and leave live together.</p>

<h2>PTO policy template</h2>
<p>Adapt the sections below. Bracketed text is for you to complete.</p>
<ol>
<li><strong>Purpose.</strong> "[Company] provides paid time off so employees can rest, handle personal matters and recover from illness."</li>
<li><strong>Eligibility.</strong> "All [full-time and part-time] employees are eligible from their first day of employment." Note any waiting period for use, where state law allows.</li>
<li><strong>Accrual.</strong> "Full-time employees accrue [4.62] hours of PTO per biweekly pay period, equal to [120] hours per year. Part-time employees accrue [0.0577] hours per hour worked." Add tiers, such as more PTO after three or five years.</li>
<li><strong>Accrual cap.</strong> "Employees stop accruing once their balance reaches [180] hours and resume when it falls below the cap."</li>
<li><strong>Carryover.</strong> "Up to [40] hours of unused PTO carry into the next year" or rely on the accrual cap instead.</li>
<li><strong>Requesting time off.</strong> "Submit requests [two weeks] in advance for planned time off. For illness or emergencies, notify your manager as soon as practical." Sick leave laws may limit how much notice you can require for sick time.</li>
<li><strong>Approval.</strong> "Requests are approved based on business needs, generally on a first-come basis."</li>
<li><strong>Increments.</strong> "PTO may be used in increments of [one hour]."</li>
<li><strong>Holidays.</strong> List paid holidays separately and whether they count against PTO.</li>
<li><strong>Negative balances and advances.</strong> Whether employees may borrow PTO before it accrues.</li>
<li><strong>Separation.</strong> "Accrued, unused PTO [will / will not] be paid at separation [as required by state law]."</li>
<li><strong>Interaction with other leave.</strong> FMLA, state family leave, jury duty, military leave and bereavement.</li>
<li><strong>Policy changes.</strong> The right to change the policy prospectively, without taking away earned hours.</li>
</ol>

<h2>Worked example: accrual, cap and payout</h2>
<p>An illustrative example. A design studio pays biweekly (26 pay periods) and gives full-time staff 120 hours of PTO per year, with a cap of 1.5 times the annual amount.</p>
<table><thead><tr><th>Item</th><th>Calculation</th><th>Result</th></tr></thead><tbody>
<tr><td>Accrual per pay period</td><td>120 / 26</td><td>4.62 hours</td></tr>
<tr><td>Accrual cap</td><td>120 x 1.5</td><td>180 hours</td></tr>
<tr><td>Part-time accrual rate</td><td>120 / 2,080 hours</td><td>0.0577 hours per hour worked</td></tr>
<tr><td>Part-timer working 25 hours a week for a year</td><td>1,300 x 0.0577</td><td>75 hours</td></tr>
</tbody></table>
<p>Now suppose a full-time designer earning $28.00 an hour resigns with 64 hours of unused PTO. In a state that requires payout, or under a policy promising it, the final paycheck includes 64 x $28.00 = $1,792.00 of PTO, subject to normal withholding. On the balance sheet, that is why accrued PTO counts as a liability: if ten employees each carry 60 hours at an average of $30, the business owes $18,000 in potential payouts.</p>
<p>Track balances on each pay stub. Our <a href="/blog/pay-stub-template">pay stub template</a> includes a PTO line, and our guide to <a href="/blog/how-to-do-payroll-yourself">doing payroll yourself</a> shows where accruals fit in the payroll run.</p>

<h2>State rules your PTO policy must respect</h2>
<h3>Paid sick leave laws</h3>
<p>Many states and cities require paid sick leave, typically accruing at about one hour per 30 or 40 hours worked, with caps on annual use. California, for example, requires at least 40 hours or five days of paid sick leave per year. The map keeps changing: Missouri's voter-approved sick leave law was repealed effective August 28, 2025, as explained in this <a href="https://www.polsinelli.com/polsinelli-at-work/missouris-repeal-of-paid-sick-leave-and-portions-of-minimum-wage-whats-next-for-proposition-a" target="_blank" rel="noopener noreferrer">Polsinelli summary</a>, while voters in Alaska and Nebraska approved new laws that took effect in 2025. Check every state and city where you have employees, including remote staff.</p>
<h3>Payout at separation and forfeiture</h3>
<p>Final pay rules decide whether accrued vacation must be paid when someone leaves. California and Colorado treat vacation as earned wages that cannot be forfeited and must be paid out. Other states, such as Massachusetts, also treat vacation as wages, while many follow whatever your written policy says. Patriot Software's <a href="https://www.patriotsoftware.com/blog/payroll/pto-payout-laws-by-state/" target="_blank" rel="noopener noreferrer">PTO payout laws by state</a> is a useful starting list, but confirm with your state labor department. Our <a href="/blog/final-paycheck-laws-by-state">final paycheck laws by state</a> guide covers the payment deadlines.</p>
<h3>Paid family and medical leave programs</h3>
<p>States such as California, New York, New Jersey, Washington, Massachusetts, Colorado and others run paid family leave insurance programs funded through payroll contributions. These operate alongside your PTO policy; your policy should say whether employees may use PTO to top up state benefits.</p>

<h2>Step by step: rolling out a PTO policy</h2>
<ol>
<li><strong>List the laws that apply</strong> in each employee's work location: sick leave, payout, family leave.</li>
<li><strong>Choose the model</strong> and the annual amount. Ten to fifteen days is common for full-time employees at small US businesses, plus holidays.</li>
<li><strong>Set caps and carryover</strong> to control liability.</li>
<li><strong>Decide payout rules</strong> where state law gives you a choice.</li>
<li><strong>Set up tracking</strong> in your payroll software or a simple spreadsheet tied to each pay run.</li>
<li><strong>Write the policy</strong> using the template above and have employees sign an acknowledgment.</li>
<li><strong>Explain it at onboarding</strong>, show new hires where to see their balance, and answer questions in the first week.</li>
<li><strong>Review annually</strong> for new laws and business changes.</li>
</ol>

<h2>PTO for exempt vs non-exempt employees</h2>
<p>For non-exempt hourly employees, PTO replaces hours not worked at their regular rate. For exempt salaried employees, you can generally require them to use PTO for full or partial days off, but if they have no PTO left you usually cannot dock their salary for partial-day absences without risking their exempt status. See our guide to <a href="/blog/exempt-vs-non-exempt">exempt vs non-exempt employees</a> for the salary basis rules.</p>

<h2>Common PTO policy mistakes</h2>
<ul>
<li><strong>No written policy.</strong> Without one, past practice and state defaults decide disputes, usually in the employee's favor.</li>
<li><strong>Forfeiture in a state that bans it.</strong> Use an accrual cap instead.</li>
<li><strong>Ignoring local sick leave laws</strong> for remote employees in other states or cities.</li>
<li><strong>Changing the policy retroactively</strong> and wiping out earned hours.</li>
<li><strong>Not tracking balances</strong> until someone resigns and claims a large payout.</li>
<li><strong>Treating holiday pay and PTO inconsistently</strong> between employees, which can look discriminatory.</li>
</ul>

<h2>PTO during notice periods, holidays and leaves</h2>
<p>Decide in advance how a few awkward situations will be handled, and write the answers into the policy:</p>
<ul>
<li><strong>Using PTO during a notice period.</strong> Many employers restrict taking vacation during the final two weeks, but in payout states the unused balance will be paid anyway, so a blanket ban mostly affects timing.</li>
<li><strong>Holidays during PTO.</strong> If a paid holiday falls during a week of vacation, say whether the holiday counts as a holiday or a PTO day. Most employers treat it as a holiday.</li>
<li><strong>Accrual during unpaid leave.</strong> State whether PTO keeps accruing during unpaid leave such as FMLA. Many policies pause accrual, but some state laws require benefits to continue in certain types of leave.</li>
<li><strong>Peak seasons.</strong> Blackout periods are lawful in most cases if they are written down and applied consistently, though they cannot restrict legally protected sick leave.</li>
</ul>

<h2>Unlimited PTO: making it work</h2>
<p>If you choose unlimited PTO for salaried staff, state that time off is not earned or accrued, set approval criteria, encourage a minimum amount of time off, and keep a separate compliant sick leave policy where required. Be cautious in states that treat vacation as wages, where a poorly drafted unlimited policy can be argued to accrue. Monitor usage: if people are taking less time off than before, the policy is not doing its job.</p>

<h2>PTO and contractors</h2>
<p>Independent contractors do not get PTO. They price their own downtime into their rates and invoice only for work delivered. Offering contractors paid days off is one of the signs of an employment relationship; our guide to <a href="/blog/w2-vs-1099">W-2 vs 1099 workers</a> explains why that matters, and <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> shows how freelancers build time off into their pricing.</p>

<h2>Paying for time off starts with cash flow</h2>
<p>Every PTO hour is paid time with no billable output, so accrued leave is a real cost that should show up in your pricing and <a href="/blog/cash-flow-forecast">cash flow forecast</a>. Plan for peak holiday weeks when several people are out at once, and make sure client invoices still go out on schedule while they are. Our <a href="/invoice-generator">free invoice generator</a> lets anyone on the team create a professional invoice in minutes, with no sign-up, and download it as a PDF.</p>
`,
  },
  {
    slug: "exempt-vs-non-exempt",
    title: "Exempt vs Non-Exempt Employees: 2026 Rules and Tests",
    description:
      "Exempt vs non-exempt employees explained: the 2026 FLSA salary threshold, duties tests, state salary levels, overtime math and common misclassification traps.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "no-tax-on-overtime",
      "how-to-invoice-for-overtime",
      "minimum-wage-by-state-2027",
    ],
    faqs: [
      {
        q: "What is the salary threshold for exempt employees in 2026?",
        a: "Under the federal Fair Labor Standards Act, most exempt executive, administrative and professional employees must be paid a salary of at least $684 per week, or $35,568 a year, the level set in 2019. A 2024 rule that would have raised it was vacated by a federal court in November 2024. Several states require much more; for 2026, California requires $70,304 a year and Washington about $80,168. The higher standard applies.",
      },
      {
        q: "Can an hourly employee be exempt?",
        a: "Usually not. Most white-collar exemptions require payment on a salary basis. There are exceptions: computer employees can be exempt if paid at least $27.63 per hour, and doctors, lawyers, teachers and outside sales employees are not subject to the salary requirements. In most cases, though, if you pay by the hour, the employee is non-exempt and must receive overtime for hours over 40 in a workweek.",
      },
      {
        q: "Does paying someone a salary make them exempt?",
        a: "No. This is the most common mistake. To be exempt, the employee must meet the salary basis test, the salary level test, and a duties test for a specific exemption. A salaried receptionist or bookkeeper doing routine work under close direction is usually non-exempt and entitled to overtime, even though they receive a fixed salary. Job titles do not decide the question either; actual duties do.",
      },
      {
        q: "What is the highly compensated employee exemption?",
        a: "Employees earning at least $107,432 in total annual compensation, including at least $684 per week paid on a salary or fee basis, can be exempt under a relaxed duties test. They need only customarily and regularly perform at least one exempt executive, administrative or professional duty, and their primary duty must be office or non-manual work. Some states, such as California, do not recognize this exemption.",
      },
      {
        q: "Can I deduct from an exempt employee's salary?",
        a: "Only in limited cases. Permitted deductions include full-day absences for personal reasons, full-day absences for sickness under a bona fide sick leave plan, certain disciplinary suspensions for serious rule violations, and the first or last week of employment. Deductions for partial-day absences or because there is not enough work generally are not allowed and can cost the employee their exempt status if they show a pattern.",
      },
      {
        q: "Do non-exempt employees get the no tax on overtime deduction?",
        a: "Non-exempt employees who receive overtime required by the FLSA may qualify for the federal deduction created by the One Big Beautiful Bill Act for 2025 through 2028. It covers the premium portion of qualified overtime pay, up to $12,500 per year or $25,000 for joint filers, with income phase-outs. Exempt employees, who have no FLSA overtime, generally do not benefit. Employers must report qualified overtime separately.",
      },
    ],
    content: `
<p>Exempt employees are not entitled to overtime pay under the Fair Labor Standards Act; non-exempt employees are, at one and a half times their regular rate for hours over 40 in a workweek. Whether a role is exempt depends on three things together: how the person is paid, how much, and what they actually do. In 2026 the federal salary floor for most exemptions is $684 a week, but several states set much higher levels, and getting the classification wrong is one of the most expensive payroll mistakes a small business can make.</p>

<p>This guide explains the exempt vs non-exempt tests, lists the 2026 federal and state salary thresholds, works through the overtime cost of a real-looking example, and covers the edge cases that catch employers out. It is general information, not legal or tax advice; for a borderline role, ask an employment attorney or payroll professional.</p>

<h2>Exempt vs non-exempt: the key differences</h2>
<table><thead><tr><th></th><th>Exempt</th><th>Non-exempt</th></tr></thead><tbody>
<tr><td>Overtime under the FLSA</td><td>Not required</td><td>1.5x regular rate for hours over 40 per workweek</td></tr>
<tr><td>Federal minimum wage</td><td>Not applicable (salary floor applies instead)</td><td>Required for every hour</td></tr>
<tr><td>Pay method</td><td>Usually a fixed salary</td><td>Hourly or salary</td></tr>
<tr><td>Time tracking</td><td>Not required for FLSA purposes (good practice anyway)</td><td>Required: hours worked each day and week</td></tr>
<tr><td>Partial-day pay deductions</td><td>Generally not allowed</td><td>Allowed for time not worked</td></tr>
<tr><td>Typical roles</td><td>Managers, professionals, senior administrative roles</td><td>Clerical, production, retail, service, most entry-level roles</td></tr>
</tbody></table>

<h2>The three tests for exempt status</h2>
<h3>1. Salary basis test</h3>
<p>The employee receives a predetermined amount each pay period that is not reduced because of variations in the quality or quantity of work. If they work any part of a week, they generally get the full week's salary, subject to limited permitted deductions.</p>
<h3>2. Salary level test</h3>
<p>The federal minimum is $684 per week ($35,568 a year). The Department of Labor's 2024 rule raising it was vacated by a federal court in Texas in November 2024, so enforcement reverted to the 2019 level. Up to 10% of the salary level can be met with nondiscretionary bonuses and commissions paid at least annually.</p>
<h3>3. Duties test</h3>
<p>The employee's primary duty must fit one of the recognized exemptions:</p>
<ul>
<li><strong>Executive:</strong> managing the business or a recognized department, regularly directing at least two full-time employees or the equivalent, with real input into hiring and firing.</li>
<li><strong>Administrative:</strong> office or non-manual work directly related to management or general business operations, with discretion and independent judgment on significant matters.</li>
<li><strong>Learned professional:</strong> work requiring advanced knowledge in a field of science or learning, customarily acquired by specialized intellectual instruction, such as accountants, engineers and pharmacists.</li>
<li><strong>Creative professional:</strong> work requiring invention, imagination, originality or talent in an artistic or creative field.</li>
<li><strong>Computer employee:</strong> systems analysts, programmers and software engineers doing high-level work; may be paid a salary at the standard level or at least $27.63 an hour.</li>
<li><strong>Outside sales:</strong> primary duty is making sales away from the employer's place of business; no salary test.</li>
</ul>
<p>Doctors, lawyers and teachers are also exempt without a salary test. The highly compensated employee exemption applies at $107,432 in total annual compensation with a lighter duties test.</p>

<h2>State salary thresholds for 2026</h2>
<p>When state law is more protective, you must follow it. Several states tie their exempt salary to the state minimum wage, so the thresholds rise most years.</p>
<table><thead><tr><th>Jurisdiction</th><th>Weekly salary</th><th>Annual equivalent</th></tr></thead><tbody>
<tr><td>Federal (FLSA)</td><td>$684.00</td><td>$35,568</td></tr>
<tr><td>California</td><td>$1,352.00</td><td>$70,304</td></tr>
<tr><td>Washington</td><td>$1,541.70</td><td>$80,168.40</td></tr>
<tr><td>New York City, Long Island and Westchester</td><td>$1,275.00</td><td>$66,300</td></tr>
<tr><td>New York, rest of state</td><td>$1,199.10</td><td>$62,353.20</td></tr>
<tr><td>Colorado</td><td>$1,111.23</td><td>About $57,784</td></tr>
</tbody></table>
<p>Sources include Proskauer's note on <a href="https://www.proskauer.com/blog/new-york-state-minimum-wage-and-exempt-salary-updates-for-2026" target="_blank" rel="noopener noreferrer">New York's 2026 exempt salary levels</a> and the University of Washington's summary of the <a href="https://hr.uw.edu/comp/2025/10/08/wa-state-threshold-for-ot-exempt-employees-will-rise-by-2-8-in-2026" target="_blank" rel="noopener noreferrer">2026 Washington threshold</a>. Other states, including Alaska and Maine, also exceed the federal level. 2027 figures will follow state minimum wage increases; our guide to <a href="/blog/minimum-wage-by-state-2027">minimum wage by state 2027</a> tracks the scheduled rates. Some states also have their own duties tests that are stricter than federal law; California, for instance, looks at whether more than half of working time is spent on exempt duties.</p>

<h2>Worked example: what misclassification costs</h2>
<p>An illustrative case. A small agency in California pays its office manager a $50,000 salary and treats her as exempt. She regularly works 45 hours a week. Because $50,000 is below California's $70,304 threshold, she is non-exempt regardless of her duties.</p>
<table><thead><tr><th>Item</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Regular rate (salary intended for 40 hours)</td><td>$50,000 / 2,080</td><td>$24.04 per hour</td></tr>
<tr><td>Overtime rate</td><td>$24.04 x 1.5</td><td>$36.06 per hour</td></tr>
<tr><td>Weekly overtime owed</td><td>5 hours x $36.06</td><td>$180.30</td></tr>
<tr><td>Annual overtime owed (50 weeks)</td><td>$180.30 x 50</td><td>$9,015.00</td></tr>
<tr><td>Three years of back pay</td><td>$9,015 x 3</td><td>$27,045.00</td></tr>
</tbody></table>
<p>Under the FLSA, an employer can also owe an equal amount in liquidated damages, plus the employee's attorney's fees, and California adds its own penalties, including daily overtime rules for hours over 8 in a day. With liquidated damages, a claim like this approaches $55,000 before the employee's attorney's fees and any state penalties are added. Fixing the classification going forward, by raising pay above the threshold or paying overtime, is far cheaper.</p>

<h2>How to classify a role, step by step</h2>
<ol>
<li><strong>Write down the real duties</strong>, with an estimate of the share of time spent on each. Our <a href="/blog/job-description-template">job description template</a> has a format for this.</li>
<li><strong>Identify the primary duty</strong>, the main and most important part of the job.</li>
<li><strong>Match it to an exemption</strong> and check each element of that exemption's duties test.</li>
<li><strong>Check the salary level</strong> against the federal and state thresholds for the employee's work location.</li>
<li><strong>Confirm the salary basis:</strong> a fixed amount, with no improper deductions.</li>
<li><strong>Document your conclusion</strong> and review it annually and whenever duties or thresholds change.</li>
<li><strong>When in doubt, treat the role as non-exempt.</strong> Paying overtime you did not need to is a smaller risk than failing to pay overtime you owed.</li>
</ol>

<h2>Common misclassification traps</h2>
<ul>
<li><strong>"Salaried means exempt."</strong> It does not. Salaried non-exempt employees still need overtime.</li>
<li><strong>Inflated titles.</strong> An "Assistant Manager" who mostly runs a register is not an executive.</li>
<li><strong>Bookkeepers and administrative assistants</strong> doing routine work under set procedures usually fail the administrative duties test.</li>
<li><strong>Inside sales staff</strong> are not outside sales employees.</li>
<li><strong>Docking pay for partial days</strong> can destroy an otherwise valid exemption.</li>
<li><strong>Forgetting remote workers' state rules.</strong> The employee's work location decides which threshold applies.</li>
<li><strong>Calling a worker a contractor</strong> to avoid overtime altogether; see our guide to <a href="/blog/worker-misclassification-penalties">worker misclassification penalties</a>.</li>
</ul>

<h2>Paying non-exempt employees correctly</h2>
<p>For non-exempt staff, record all hours worked, including pre-shift setup, short breaks and after-hours messages. Calculate overtime on the regular rate, which must include nondiscretionary bonuses and commissions, not just the base hourly rate. Our <a href="/blog/timesheet-template">timesheet template</a> is a simple way to capture hours, and our guide to <a href="/blog/biweekly-vs-semimonthly-payroll">biweekly vs semimonthly payroll</a> explains why workweek-based overtime is easier with a biweekly schedule.</p>
<h3>The no tax on overtime deduction</h3>
<p>From 2025 through 2028, the One Big Beautiful Bill Act lets eligible workers deduct the premium portion of FLSA-required overtime, up to $12,500 a year ($25,000 for joint filers), subject to income limits. Correct classification therefore matters to employees' tax returns too, because only overtime required by the FLSA qualifies, and employers must report it. Our guide to <a href="/blog/no-tax-on-overtime">no tax on overtime</a> explains the reporting.</p>

<h2>Exempt vs non-exempt for businesses that bill clients</h2>
<p>If you bill clients by the hour, employee overtime affects profitability directly. A non-exempt technician working 50 hours costs 10 hours at time and a half, so your billing rates and contracts should account for it. See <a href="/blog/how-to-invoice-for-overtime">how to invoice for overtime</a> for wording that passes the cost on where your contract allows.</p>

<h2>Special cases and edge rules</h2>
<h3>Part-time exempt employees</h3>
<p>An exempt employee who works part time must still receive at least the full weekly salary threshold. You cannot prorate a $684 weekly salary down to $342 for a 20-hour week and keep the exemption under federal law; in a state with a higher threshold, the same principle applies to that higher figure.</p>
<h3>Retail and service employees on commission</h3>
<p>The FLSA has a separate overtime exemption for certain commissioned employees of retail or service establishments, if their regular rate exceeds one and a half times the minimum wage and more than half their pay comes from commissions. It is narrow, and the conditions must be checked for every workweek.</p>
<h3>Salaried non-exempt employees</h3>
<p>You can pay a non-exempt employee a salary, but overtime is still owed. The regular rate is the salary divided by the hours it is intended to cover. Some employers use the fluctuating workweek method, which requires specific conditions and is restricted or not allowed in several states.</p>
<h3>Working managers</h3>
<p>Owners of small shops often call their senior employee a manager even though most of that person's day is spent serving customers. Under federal rules, concurrent duties can still qualify if management is the primary duty, but several states, notably California, use a stricter time-based test.</p>

<h2>What to do if you discover a misclassification</h2>
<ul>
<li>Reclassify the role going forward, or raise the salary above the threshold if the duties qualify.</li>
<li>Calculate potential back overtime for the limitations period (generally two years under the FLSA, three for willful violations, and longer under some state laws).</li>
<li>Talk to an employment lawyer about how to make back payments and whether to obtain releases.</li>
<li>Communicate the change carefully; reclassification to hourly can feel like a demotion, so explain that it means overtime pay.</li>
</ul>
<p>Accurate payroll starts with accurate records of time and work, and the same discipline helps you bill clients for every hour your team delivers. Turn approved hours into a clean client invoice with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up, and download it as a PDF.</p>
`,
  },
  {
    slug: "worker-misclassification-penalties",
    title: "Worker Misclassification Penalties: IRS, DOL and State",
    description:
      "Worker misclassification penalties explained: IRS Section 3509 rates, back overtime, state fines, the VCSP settlement program, a cost example and how to fix it.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "w2-vs-1099",
      "how-to-pay-contractors",
      "employer-payroll-taxes",
    ],
    faqs: [
      {
        q: "What is the penalty for misclassifying an employee as a contractor?",
        a: "There is no single penalty. The IRS can assess unpaid employment taxes, often at reduced Section 3509 rates if the error was not intentional, plus penalties and interest. The Department of Labor or the worker can recover unpaid minimum wage and overtime, usually with an equal amount in liquidated damages. States can add unemployment insurance assessments, workers' compensation penalties and fines; California's penalties for willful misclassification run from $5,000 to $25,000 per violation.",
      },
      {
        q: "How does the IRS calculate misclassification taxes under Section 3509?",
        a: "When an employer failed to withhold because it treated a worker as a non-employee and the error was not intentional, Section 3509 lets it pay reduced amounts: 1.5% of wages for income tax withholding and 20% of the employee's share of Social Security and Medicare, plus the full employer share. If the employer also failed to file Forms 1099 for the worker, the rates double to 3% and 40%. Intentional disregard removes these reduced rates.",
      },
      {
        q: "What is the IRS Voluntary Classification Settlement Program?",
        a: "The VCSP lets an eligible business start treating workers as employees going forward and settle past federal employment tax exposure by paying 10% of the employment tax liability on the most recent year's compensation, calculated at reduced Section 3509 rates, with no interest or penalties. You apply on Form 8952 at least 120 days before you want to begin treating the workers as employees, and you must have filed required Forms 1099 for the previous three years.",
      },
      {
        q: "Which test decides if a worker is an employee?",
        a: "Different laws use different tests. The IRS uses common-law control factors grouped into behavioral control, financial control and the relationship. The Department of Labor uses an economic reality test under the FLSA, which it proposed to simplify in February 2026. Several states, including California, Massachusetts and New Jersey, use the stricter ABC test for some purposes. A worker can be a contractor under one test and an employee under another.",
      },
      {
        q: "Can a worker report misclassification?",
        a: "Yes. A worker can ask the IRS for a determination using Form SS-8, file Form 8919 to pay only the employee share of Social Security and Medicare on wages they believe were misreported, file a wage complaint with the Department of Labor or a state labor agency, or apply for unemployment benefits, which often triggers a state audit. Retaliating against a worker for raising these issues is illegal and creates additional liability.",
      },
      {
        q: "Does a signed independent contractor agreement protect me?",
        a: "Not by itself. Agencies and courts look at the reality of the relationship, not the label in the contract. A written agreement helps when it accurately describes an independent business relationship: the contractor controls how the work is done, uses their own tools, can work for others, invoices for deliverables, and bears the chance of profit or loss. If the actual working arrangement looks like employment, the contract will not change the outcome.",
      },
    ],
    content: `
<p>Worker misclassification penalties hit from several directions at once: the IRS for unpaid payroll taxes, the Department of Labor or the worker for unpaid minimum wage and overtime, and the state for unemployment insurance, workers' compensation and its own fines. Treating an employee as an independent contractor can turn a few years of 1099 payments into a bill worth a large share of what you paid the worker. The good news is that the IRS offers reduced rates for honest mistakes and a settlement program for businesses that fix the problem voluntarily.</p>

<p>This guide breaks down each layer of misclassification penalties, works through the numbers for one worker, explains the Voluntary Classification Settlement Program, and gives a step-by-step plan if you think you have a problem. It is general information, not legal or tax advice. Misclassification cases are fact-specific, so speak with an employment lawyer or tax professional about your situation.</p>

<h2>How misclassification happens</h2>
<p>Most small businesses do not set out to misclassify anyone. Common paths include:</p>
<ul>
<li>A freelancer who started on one project gradually works set hours for one client, using the client's tools and email.</li>
<li>Hiring "contractors" for roles that are central to the business, such as front desk, delivery or sales staff.</li>
<li>Converting an employee to 1099 status while their job stays the same.</li>
<li>Following a template contract without checking how the work actually happens.</li>
</ul>
<p>Our guide to <a href="/blog/w2-vs-1099">W-2 vs 1099 workers</a> covers the tests in detail. The short version: the more you control how, when and where the work is done, and the more the worker depends on you, the more likely they are an employee.</p>

<h2>Federal tax penalties: the IRS layer</h2>
<p>When workers are reclassified, the employer owes the employment taxes it should have paid and withheld. Section 3509 of the tax code softens the hit for non-intentional errors:</p>
<table><thead><tr><th>Liability</th><th>Section 3509(a): 1099s filed</th><th>Section 3509(b): no 1099s filed</th><th>Intentional disregard</th></tr></thead><tbody>
<tr><td>Federal income tax not withheld</td><td>1.5% of wages</td><td>3% of wages</td><td>Full amount that should have been withheld</td></tr>
<tr><td>Employee share of Social Security and Medicare</td><td>20% of the employee share</td><td>40% of the employee share</td><td>100% of the employee share</td></tr>
<tr><td>Employer share of Social Security and Medicare</td><td>100%</td><td>100%</td><td>100%</td></tr>
<tr><td>FUTA</td><td>Owed</td><td>Owed</td><td>Owed</td></tr>
</tbody></table>
<p>On top of the tax, the IRS can add failure-to-deposit and failure-to-file penalties, penalties for missing Forms W-2, and interest. In serious cases, responsible owners can be personally liable for unpaid trust fund taxes. See our overview of <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> for the rates involved.</p>
<h3>Section 530 relief</h3>
<p>Section 530 of the Revenue Act of 1978 can protect a business from federal employment tax liability if it had a reasonable basis for treating workers as contractors, such as a court ruling, a prior IRS audit or long-standing industry practice, treated similar workers consistently, and filed all required Forms 1099. It applies to federal employment taxes only, not to wage and hour claims.</p>

<h2>Worked example: one misclassified worker</h2>
<p>An illustrative case. A small marketing firm paid a full-time "contractor" $60,000 in one year and filed a Form 1099-NEC. An audit concludes she was an employee. The error was not intentional, so Section 3509(a) applies.</p>
<table><thead><tr><th>Item</th><th>Calculation</th><th>3509(a), 1099 filed</th><th>3509(b), no 1099</th></tr></thead><tbody>
<tr><td>Income tax withholding</td><td>1.5% / 3% of $60,000</td><td>$900</td><td>$1,800</td></tr>
<tr><td>Employee FICA</td><td>20% / 40% of 7.65% of $60,000</td><td>$918</td><td>$1,836</td></tr>
<tr><td>Employer FICA</td><td>7.65% of $60,000</td><td>$4,590</td><td>$4,590</td></tr>
<tr><td>FUTA (after full state credit)</td><td>0.6% of $7,000</td><td>$42</td><td>$42</td></tr>
<tr><td><strong>Federal tax for one year</strong></td><td></td><td><strong>$6,450</strong></td><td><strong>$8,268</strong></td></tr>
</tbody></table>
<p>Multiply by three open years and add penalties and interest, and the federal bill alone can pass $20,000 for a single worker. If she regularly worked 45 hours a week, back overtime and liquidated damages come on top, and the state will want unemployment contributions and possibly workers' compensation premiums.</p>
<p>Compare the Voluntary Classification Settlement Program: if the firm qualified and applied before any audit, it would pay 10% of the most recent year's 3509(a) liability, about $641 here, with no interest or penalties and no audit of prior years on that issue.</p>

<h2>The VCSP: settling voluntarily</h2>
<p>The IRS's <a href="https://www.irs.gov/businesses/small-businesses-self-employed/voluntary-classification-settlement-program" target="_blank" rel="noopener noreferrer">Voluntary Classification Settlement Program</a> is the cheapest way to fix federal tax exposure. Key points:</p>
<ul>
<li>You must currently treat the workers as non-employees and want to treat them as employees going forward.</li>
<li>You must have filed all required Forms 1099 for those workers for the previous three years.</li>
<li>You cannot be under an IRS employment tax audit, or a Department of Labor or state audit on the classification of the workers.</li>
<li>Apply on Form 8952 at least 120 days before the date you want to start treating them as employees.</li>
<li>You pay 10% of the employment tax liability on the most recent year's compensation, computed under the reduced 3509(a) rates, with no interest or penalties.</li>
</ul>
<p>The VCSP settles federal employment taxes only. It does not resolve back wages, state taxes or workers' claims.</p>

<h2>Wage and hour penalties: the DOL layer</h2>
<p>Under the Fair Labor Standards Act, an employee is owed at least the federal minimum wage and overtime at 1.5 times the regular rate for hours over 40. A misclassified worker can recover:</p>
<ul>
<li>Unpaid minimum wage and overtime for two years, or three if the violation was willful.</li>
<li>An equal amount in liquidated damages, unless the employer shows good faith.</li>
<li>Attorney's fees and costs.</li>
<li>Civil money penalties for repeated or willful violations.</li>
</ul>
<p>The federal test is in flux. The Department of Labor published a proposed rule on February 27, 2026, to replace the 2024 six-factor economic reality analysis with a simpler test focused on two core factors, control and opportunity for profit or loss. Check the DOL's <a href="https://www.dol.gov/agencies/whd/flsa/misclassification/rulemaking" target="_blank" rel="noopener noreferrer">misclassification rulemaking page</a> for whether a final rule has taken effect. Either way, state laws often use stricter tests, and many cases are decided on state law.</p>

<h2>State penalties</h2>
<p>States enforce classification through unemployment insurance, workers' compensation, wage laws and income tax withholding:</p>
<table><thead><tr><th>Area</th><th>Typical consequences</th></tr></thead><tbody>
<tr><td>Unemployment insurance</td><td>Back contributions, interest and penalties; audits often follow a worker's benefits claim</td></tr>
<tr><td>Workers' compensation</td><td>Back premiums, fines and liability for injuries; see <a href="/blog/workers-compensation-insurance">workers' compensation insurance</a></td></tr>
<tr><td>State wage laws</td><td>Back wages, waiting-time and pay-stub penalties, daily overtime in some states</td></tr>
<tr><td>Specific misclassification statutes</td><td>California: $5,000 to $15,000 per willful violation, $10,000 to $25,000 for a pattern or practice</td></tr>
<tr><td>Stop-work orders and debarment</td><td>Possible in some states, particularly construction</td></tr>
</tbody></table>
<p>States such as California, Massachusetts and New Jersey apply an ABC test for some purposes, which presumes a worker is an employee unless the business proves the worker is free from control, performs work outside the usual course of the business, and is customarily engaged in an independently established trade.</p>

<h2>Other hidden costs</h2>
<ul>
<li><strong>Benefits:</strong> retroactive eligibility for retirement plan contributions or health coverage, which can disqualify a plan if not corrected.</li>
<li><strong>Affordable Care Act:</strong> reclassified workers can push an employer over the 50 full-time employee threshold.</li>
<li><strong>Leave laws:</strong> retroactive paid sick leave accruals.</li>
<li><strong>Immigration:</strong> no Form I-9 on file for workers now treated as employees.</li>
</ul>

<h2>What to do if you think you have misclassified workers</h2>
<ol>
<li><strong>Review every 1099 relationship</strong> against the IRS, DOL and state tests, starting with long-term, full-time, single-client workers.</li>
<li><strong>Get advice</strong> from an employment lawyer and CPA before contacting agencies.</li>
<li><strong>Consider the VCSP</strong> if you qualify, applying well before you plan to switch.</li>
<li><strong>Convert workers to employees</strong> with W-4s, I-9s, payroll registration and an onboarding process; our <a href="/blog/employee-onboarding-checklist">employee onboarding checklist</a> lists the steps.</li>
<li><strong>Assess back wage exposure</strong> for overtime and minimum wage, and decide how to address it.</li>
<li><strong>Fix the process</strong> so future engagements are structured properly from the start.</li>
</ol>

<h2>Forms that come into play</h2>
<table><thead><tr><th>Form</th><th>Who files it</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Form SS-8</td><td>Business or worker</td><td>Asks the IRS to determine whether a worker is an employee for federal tax purposes; the process can take many months</td></tr>
<tr><td>Form 8919</td><td>Worker</td><td>Lets a worker who believes they were misclassified pay only the employee share of Social Security and Medicare</td></tr>
<tr><td>Form 8952</td><td>Business</td><td>Application for the Voluntary Classification Settlement Program</td></tr>
<tr><td>Form 941 and W-2</td><td>Business</td><td>Report wages and withholding once workers are treated as employees</td></tr>
</tbody></table>
<p>A Form 8919 filed by one worker, or an unemployment claim, is often what starts an audit. When the IRS or a state agency looks at one worker, it usually reviews everyone in a similar role.</p>

<h2>Red flags agencies look for</h2>
<ul>
<li>One "contractor" working full time for a single business for years.</li>
<li>Set schedules, required attendance at staff meetings and supervision of how tasks are done.</li>
<li>Payment by the hour on a regular schedule, with no invoices.</li>
<li>Company-provided equipment, email address, business cards or uniforms.</li>
<li>The worker does the same job as employees alongside them.</li>
<li>No business registration, insurance or other clients on the worker's side.</li>
</ul>

<h2>How to keep genuine contractors genuine</h2>
<ul>
<li>Engage contractors for defined projects or deliverables with a written contract and <a href="/blog/statement-of-work-template">statement of work</a>.</li>
<li>Let them choose how, when and where they do the work, and use their own tools.</li>
<li>Pay against invoices, not on a payroll schedule; ask contractors to submit a proper <a href="/blog/independent-contractor-invoice">independent contractor invoice</a>.</li>
<li>Collect a Form W-9 and file Form 1099-NEC when payments reach the threshold, which is $2,000 for payments made in 2026; see the <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold</a>.</li>
<li>Avoid employee-style perks such as PTO, company email titles and inclusion in staff reviews.</li>
<li>For creative work, use a clear <a href="/blog/work-for-hire-agreement">work for hire agreement</a> so ownership of deliverables is settled without implying employment.</li>
</ul>
<p>When contractors invoice you for their work, and you pay those invoices on agreed terms, the paper trail itself supports an independent relationship. If you are a contractor, use our <a href="/invoice-generator">free invoice generator</a> to bill clients professionally, with no sign-up, and download each invoice as a PDF.</p>
`,
  },
  {
    slug: "final-paycheck-laws-by-state",
    title: "Final Paycheck Laws by State: 2026 Deadlines Table",
    description:
      "Final paycheck laws by state for 2026: when final wages are due after firing or quitting, what to include, vacation payout, penalties and a 50-state table.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-make-a-pay-stub",
      "pay-stub-template",
      "how-to-do-payroll-yourself",
    ],
    faqs: [
      {
        q: "Is there a federal law on final paychecks?",
        a: "No federal law sets a deadline for a final paycheck. The Fair Labor Standards Act requires that minimum wage and overtime be paid for all hours worked, generally on the regular payday for the period, but timing of the last check is left to the states. Where a state has no specific law, employers usually pay on the next regular payday. State laws often set much shorter deadlines, especially for employees who are fired.",
      },
      {
        q: "Which states require immediate final pay when an employee is fired?",
        a: "Several states require payment immediately or within a day or so of an involuntary termination, including California, Colorado, Massachusetts (on the last day of work), Missouri (on request), Montana (in many cases), and Hawaii and Connecticut (by the next business day). Rules differ in detail, for example when the payroll department is off-site, so check the specific state statute or labor department guidance before the termination meeting.",
      },
      {
        q: "Does the final paycheck have to include unused vacation?",
        a: "Only in some states. California, Colorado and Massachusetts, among others, treat earned vacation as wages that must be paid at separation. In many other states it depends on the employer's written policy or established practice. Sick leave usually does not have to be paid out unless your policy combines it with vacation in a PTO bank and state law treats that bank as vacation. Your written PTO policy matters a great deal.",
      },
      {
        q: "Can I hold a final paycheck until company property is returned?",
        a: "Generally no. In most states, final wages are due by the legal deadline regardless of whether the employee has returned a laptop, uniform or keys. A few states allow limited exceptions, and some allow deductions for unreturned property only with prior written authorization and only if the deduction does not reduce pay below minimum wage. Recover property through other means, such as a demand letter, rather than withholding wages.",
      },
      {
        q: "What is the penalty for a late final paycheck?",
        a: "Penalties vary by state. California's waiting time penalty is a day's wages for each day the final pay is late, up to 30 days. Other states impose daily penalties, double or treble damages, interest, or fines, and many let employees recover attorney's fees. A late paycheck can therefore cost far more than the wages themselves, which is why it pays to prepare the final check before the termination meeting.",
      },
      {
        q: "Can I send the final paycheck by direct deposit?",
        a: "In most states, yes, if the employee was already being paid by direct deposit and the funds arrive by the deadline. Some states have specific rules about final pay methods or require that the employee consent to electronic payment. When a state requires payment immediately at termination, a physical check handed over at the meeting is often the simplest way to comply.",
      },
    ],
    content: `
<p>Final paycheck laws are set by the states, and they decide how quickly you must pay an employee who leaves. In some states, a fired employee must be paid on the spot; in others, the next regular payday is fine. The deadline often depends on whether the employee quit or was let go, and many states require accrued vacation to be included. Missing the deadline can trigger penalties worth far more than the paycheck itself.</p>

<p>Below is a 50-state table of final paycheck deadlines for 2026, followed by what to include, how vacation payout works, the penalties for paying late and a worked example. Treat the table as a starting point: state laws change and include exceptions, so confirm the current rule with the state labor department before each separation. This is general information, not legal advice.</p>

<h2>Final paycheck laws by state: 2026 table</h2>
<p>"Next payday" means the next regularly scheduled payday. This summary is based on published state law summaries, including Paycor's <a href="https://www.paycor.com/resource-center/articles/final-paycheck-laws-by-state/" target="_blank" rel="noopener noreferrer">final paycheck laws by state</a>, and may not capture every exception.</p>
<table><thead><tr><th>State</th><th>Fired or laid off</th><th>Quit</th></tr></thead><tbody>
<tr><td>Alabama</td><td>No specific law</td><td>No specific law</td></tr>
<tr><td>Alaska</td><td>Within 3 working days</td><td>Next payday at least 3 days after notice</td></tr>
<tr><td>Arizona</td><td>Earlier of 7 working days or next payday</td><td>Next payday</td></tr>
<tr><td>Arkansas</td><td>Next payday (within 7 days if employee demands)</td><td>Next payday</td></tr>
<tr><td>California</td><td>Immediately</td><td>Within 72 hours; immediately if 72 hours' notice given</td></tr>
<tr><td>Colorado</td><td>Immediately (limited extensions if payroll is closed)</td><td>Next payday</td></tr>
<tr><td>Connecticut</td><td>Next business day</td><td>Next payday</td></tr>
<tr><td>Delaware</td><td>Later of next payday or 3 days after last day worked</td><td>Same as fired</td></tr>
<tr><td>District of Columbia</td><td>Next business day</td><td>Earlier of next payday or 7 days</td></tr>
<tr><td>Florida</td><td>No specific law</td><td>No specific law</td></tr>
<tr><td>Georgia</td><td>No specific law</td><td>No specific law</td></tr>
<tr><td>Hawaii</td><td>Immediately or next business day</td><td>Next payday; immediately if one pay period's notice given</td></tr>
<tr><td>Idaho</td><td>Earlier of next payday or 10 days (48 hours if employee requests in writing)</td><td>Same as fired</td></tr>
<tr><td>Illinois</td><td>Next payday, at the latest</td><td>Next payday, at the latest</td></tr>
<tr><td>Indiana</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>Iowa</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>Kansas</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>Kentucky</td><td>Later of next payday or 14 days</td><td>Later of next payday or 14 days</td></tr>
<tr><td>Louisiana</td><td>Earlier of next payday or 15 days</td><td>Earlier of next payday or 15 days</td></tr>
<tr><td>Maine</td><td>Earlier of next payday or 2 weeks after demand</td><td>Same as fired</td></tr>
<tr><td>Maryland</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>Massachusetts</td><td>Last day of work</td><td>Next payday</td></tr>
<tr><td>Michigan</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>Minnesota</td><td>Within 24 hours of demand</td><td>Next payday (no later than 20 days after last day)</td></tr>
<tr><td>Mississippi</td><td>No specific law</td><td>No specific law</td></tr>
<tr><td>Missouri</td><td>Immediately (on request)</td><td>No specific law</td></tr>
<tr><td>Montana</td><td>Immediately in many cases, otherwise earlier of next payday or 15 days</td><td>Earlier of next payday or 15 days</td></tr>
<tr><td>Nebraska</td><td>Earlier of next payday or 2 weeks</td><td>Earlier of next payday or 2 weeks</td></tr>
<tr><td>Nevada</td><td>Within 3 days</td><td>Earlier of next payday or 7 days</td></tr>
<tr><td>New Hampshire</td><td>Within 72 hours</td><td>Next payday (72 hours if one pay period's notice)</td></tr>
<tr><td>New Jersey</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>New Mexico</td><td>Within 5 days (10 days for commission or task-based pay)</td><td>Next payday</td></tr>
<tr><td>New York</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>North Carolina</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>North Dakota</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>Ohio</td><td>Earlier of next payday or 15 days</td><td>Earlier of next payday or 15 days</td></tr>
<tr><td>Oklahoma</td><td>Next payday (some summaries say later of next payday or 14 days)</td><td>Next payday</td></tr>
<tr><td>Oregon</td><td>End of next business day</td><td>Last day if 48 hours' notice; otherwise earlier of 5 business days or next payday</td></tr>
<tr><td>Pennsylvania</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>Rhode Island</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>South Carolina</td><td>Within 48 hours or next payday, not more than 30 days</td><td>Same as fired</td></tr>
<tr><td>South Dakota</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>Tennessee</td><td>Later of next payday or 21 days</td><td>Same as fired</td></tr>
<tr><td>Texas</td><td>Within 6 calendar days</td><td>Next payday</td></tr>
<tr><td>Utah</td><td>Within 24 hours</td><td>Next payday</td></tr>
<tr><td>Vermont</td><td>Within 72 hours</td><td>Next payday</td></tr>
<tr><td>Virginia</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>Washington</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>West Virginia</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>Wisconsin</td><td>Next payday</td><td>Next payday</td></tr>
<tr><td>Wyoming</td><td>Next payday (check current statute)</td><td>Next payday (check current statute)</td></tr>
</tbody></table>
<p>Two practical notes. First, the rule that applies is the one for the state where the employee works, not where your business is registered. Second, "no specific law" does not mean "no deadline": wages must still be paid, and paying on the next regular payday is the safe default.</p>

<h2>What goes into a final paycheck?</h2>
<ul>
<li><strong>All regular wages</strong> for hours worked through the last day.</li>
<li><strong>Overtime</strong> earned in the final period, calculated at the regular rate including nondiscretionary bonuses.</li>
<li><strong>Accrued vacation or PTO</strong>, where state law or your policy requires payout.</li>
<li><strong>Earned commissions and bonuses</strong> under the terms of the plan; commission timing rules can differ from wage deadlines.</li>
<li><strong>Expense reimbursements</strong> owed, which some states require with final pay.</li>
<li><strong>Normal deductions</strong>: taxes, benefits contributions and any garnishments still in effect.</li>
</ul>
<p>Severance is separate and depends on any agreement; it is not part of the legally required final paycheck. See our <a href="/blog/severance-agreement-template">severance agreement template</a>.</p>

<h2>Worked example: a firing in California vs Texas</h2>
<p>An illustrative example. Two retail supervisors, each earning $24.00 an hour with 10 hours of accrued vacation, are let go on Wednesday, November 18, 2026. Each has worked 56 hours since the last pay period closed, including 6 overtime hours.</p>
<table><thead><tr><th>Component</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Regular hours</td><td>50 x $24.00</td><td>$1,200.00</td></tr>
<tr><td>Overtime hours</td><td>6 x $36.00</td><td>$216.00</td></tr>
<tr><td>Accrued vacation</td><td>10 x $24.00</td><td>$240.00</td></tr>
<tr><td><strong>Gross final pay</strong></td><td></td><td><strong>$1,656.00</strong></td></tr>
</tbody></table>
<p>In California the full amount is due at the termination meeting, and vacation must be included. If the employer pays four days late, the waiting time penalty is four days of wages: 8 hours x $24.00 x 4 = $768.00, on top of the final pay. In Texas, the final pay is due within six calendar days, by Tuesday, November 24, and vacation is payable if the employer's written policy provides for it. Show each line on a clear pay stub; our guide on <a href="/blog/how-to-make-a-pay-stub">how to make a pay stub</a> explains the required fields.</p>

<h2>Penalties for late final pay</h2>
<table><thead><tr><th>Type</th><th>Examples</th></tr></thead><tbody>
<tr><td>Daily waiting-time penalties</td><td>California: a day's wages per day late, up to 30 days</td></tr>
<tr><td>Multiple damages</td><td>Several states allow double or treble unpaid wages</td></tr>
<tr><td>Interest and fees</td><td>Interest on late wages and employee attorney's fees are common</td></tr>
<tr><td>Fines and criminal penalties</td><td>Some states treat willful nonpayment as a misdemeanor</td></tr>
</tbody></table>

<h2>Step by step: preparing a final paycheck</h2>
<ol>
<li><strong>Identify the work state</strong> and whether the separation is voluntary or involuntary.</li>
<li><strong>Look up the deadline</strong> and whether vacation payout is required.</li>
<li><strong>Collect final hours</strong> from timesheets, including the last day; a clean <a href="/blog/timesheet-template">timesheet template</a> avoids disputes.</li>
<li><strong>Calculate gross pay</strong>, overtime, PTO, commissions and reimbursements.</li>
<li><strong>Apply withholding and deductions</strong> as for a regular paycheck. If PTO or bonuses are paid separately, supplemental withholding rules may apply.</li>
<li><strong>Choose the payment method</strong> that will arrive on time: check at the meeting, or direct deposit if timing allows.</li>
<li><strong>Issue a pay stub</strong> with all components itemized. Our <a href="/blog/pay-stub-template">pay stub template</a> works for this.</li>
<li><strong>Update records</strong>: stop recurring deposits, end benefits deductions, and keep the W-2 address current.</li>
</ol>

<h2>Common final paycheck mistakes</h2>
<ul>
<li><strong>Waiting for the next payroll cycle</strong> in a state that requires faster payment.</li>
<li><strong>Withholding pay until equipment is returned.</strong></li>
<li><strong>Deducting unreturned property or shortages</strong> without written authorization and legal permission.</li>
<li><strong>Forgetting accrued vacation</strong> in states that require payout; see our <a href="/blog/pto-policy-template">PTO policy template</a> for how policy wording affects this.</li>
<li><strong>Making final wages conditional</strong> on signing a release or exit paperwork.</li>
<li><strong>Applying your headquarters' state rules</strong> to a remote employee in another state.</li>
</ul>

<h2>Special situations</h2>
<h3>Layoffs and mass separations</h3>
<p>The same deadlines apply to every employee in a layoff, so prepare all final checks before the announcement. If the layoff is large enough to trigger federal or state WARN notice rules, those apply in addition to final pay deadlines.</p>
<h3>Commissioned and bonus-eligible employees</h3>
<p>Commissions earned before separation must be paid, but when they are "earned" depends on the written commission plan. A sale that closes after the employee leaves may or may not be owed. Clear plan language, like that in a commission agreement, prevents disputes.</p>
<h3>Death of an employee</h3>
<p>Many states allow wages owed to a deceased employee to be paid to a surviving spouse or estate, sometimes up to a set amount without probate. Withholding rules differ from a normal paycheck for wages paid after death, so check IRS guidance and your state's rules.</p>
<h3>Tipped employees</h3>
<p>Final pay must include any credit card tips owed and wages at the full rate required by the state, not only the tipped cash wage, if the employee's tips did not bring them up to minimum wage.</p>

<h2>What if the employee cannot be reached?</h2>
<p>If a final check is uncashed or the employee disappears, keep records of your attempts to deliver it. Unclaimed wages eventually must be reported and remitted to the state's unclaimed property program after the state's dormancy period. Do not simply keep the money.</p>

<h2>Final payments to contractors</h2>
<p>Final paycheck laws apply to employees. Contractors are paid according to their contract and invoices, and a few states and cities have freelance payment protection laws that set deadlines for paying freelancers. If you are ending a contractor relationship, settle the final invoice promptly; our guide on <a href="/blog/how-to-pay-contractors">how to pay contractors</a> covers the mechanics.</p>
<p>Whether you are paying out a departing employee or a freelancer is billing you for their last project, clean documentation prevents disputes. Freelancers can create a clear final invoice with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up, and download it as a PDF in seconds.</p>
`,
  },
  {
    slug: "wage-garnishment",
    title: "Wage Garnishment: An Employer's Guide for 2026",
    description:
      "Wage garnishment for employers: types of orders, federal limits on how much to withhold, child support and tax levies, a calculation example and your duties.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-do-payroll-yourself",
      "pay-stub-template",
      "employer-payroll-taxes",
    ],
    faqs: [
      {
        q: "How much of an employee's pay can be garnished?",
        a: "For ordinary debts such as credit cards or medical bills, federal law limits garnishment to the lesser of 25% of disposable earnings or the amount by which weekly disposable earnings exceed 30 times the federal minimum wage, which is $217.50. Child support can take 50% to 65% of disposable earnings. Federal student loan and other federal agency garnishments are capped at 15%. State laws can set lower limits, and the more protective limit applies.",
      },
      {
        q: "What are disposable earnings?",
        a: "Disposable earnings are what remains of an employee's earnings after deductions required by law, such as federal, state and local income tax, Social Security and Medicare, and state unemployment or disability insurance contributions. Voluntary deductions such as health insurance premiums, retirement contributions and union dues are generally not subtracted. Earnings include wages, salaries, commissions, bonuses and periodic pension payments.",
      },
      {
        q: "Can I fire an employee because of a wage garnishment?",
        a: "Federal law prohibits firing an employee because their earnings have been subject to garnishment for any one debt, regardless of how many garnishment orders are issued to collect that single debt. The protection does not extend to garnishments for two or more separate debts, though many state laws give broader protection. Treating garnished employees differently can also create discrimination risk, so it is safest not to make any employment decision based on garnishments.",
      },
      {
        q: "What happens if an employer ignores a garnishment order?",
        a: "An employer that fails to respond to or honor a valid garnishment order can be held liable for the amount that should have been withheld, and in some cases the entire debt, plus court sanctions. For IRS levies, an employer that fails to surrender levied wages can be personally liable for the amount plus a 50% penalty. Respond by the deadline on the order, even if the person no longer works for you.",
      },
      {
        q: "Which garnishment comes first if there are several?",
        a: "Child support orders generally take priority over other garnishments. Federal tax levies and other orders are usually handled by priority dates and the specific rules for each type, and bankruptcy orders can suspend other garnishments. The total withheld for ordinary garnishments cannot exceed the federal limit, so a later creditor may receive nothing until an earlier order is satisfied. Because the rules are technical, follow each order's instructions and ask your payroll provider or attorney when orders conflict.",
      },
      {
        q: "Can an employer charge a fee for processing garnishments?",
        a: "Some states allow employers to deduct a small administrative fee from the employee's pay for each garnishment payment, while others prohibit it. The fee typically counts toward the total amount withheld and cannot push withholding above legal limits. Check your state's garnishment statute and the instructions on the order before charging anything.",
      },
    ],
    content: `
<p>A wage garnishment is a legal order requiring an employer to withhold part of an employee's pay and send it to a creditor or government agency until a debt is paid. As the employer, you are not a party to the debt, but you are legally responsible for following the order exactly: withholding the right amount, paying it on time and protecting the employee from retaliation. Federal law caps ordinary garnishments at 25% of disposable earnings, and different limits apply to child support, taxes and federal debts.</p>

<p>This guide explains each type of wage garnishment, the federal limits and how to calculate them, the priority rules when several orders arrive, a worked example, and the step-by-step process for handling an order. It is general information, not legal advice; state garnishment laws vary, so check the rules in the state where the employee works.</p>

<h2>Types of wage garnishment</h2>
<table><thead><tr><th>Type</th><th>Who issues it</th><th>Federal limit on withholding</th></tr></thead><tbody>
<tr><td>Ordinary creditor garnishment</td><td>Court, after a creditor wins a judgment</td><td>Lesser of 25% of disposable earnings or amount above 30x federal minimum wage per week</td></tr>
<tr><td>Child support and alimony</td><td>Court or state child support agency (Income Withholding for Support order)</td><td>50% if supporting another spouse or child, 60% if not; plus 5% if arrears are over 12 weeks</td></tr>
<tr><td>Federal tax levy</td><td>IRS (Form 668-W)</td><td>All pay above an exempt amount set by IRS tables</td></tr>
<tr><td>State tax levy</td><td>State revenue agency</td><td>Set by state law</td></tr>
<tr><td>Federal student loans and other federal debts</td><td>Federal agency through administrative wage garnishment</td><td>Up to 15% of disposable earnings</td></tr>
<tr><td>Bankruptcy (Chapter 13)</td><td>Bankruptcy court</td><td>As specified in the order</td></tr>
</tbody></table>
<p>The Department of Labor's <a href="https://www.dol.gov/agencies/whd/fact-sheets/30-cppa" target="_blank" rel="noopener noreferrer">Fact Sheet #30 on the Consumer Credit Protection Act</a> sets out the federal limits. Where a state law results in a smaller garnishment, you must follow the state law.</p>

<h2>How to calculate disposable earnings</h2>
<p>Start with gross earnings for the pay period: wages, salary, commissions, bonuses. Subtract only deductions required by law:</p>
<ul>
<li>Federal, state and local income tax withholding.</li>
<li>Social Security and Medicare taxes.</li>
<li>State-mandated unemployment, disability or family leave contributions.</li>
</ul>
<p>Do not subtract voluntary deductions such as health insurance, 401(k) contributions or union dues, unless state law or a specific order says otherwise. Our guide to <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> explains each tax line.</p>

<h2>Worked example: an ordinary creditor garnishment</h2>
<p>Illustrative figures for an employee paid weekly, subject to a judgment creditor's garnishment:</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Gross weekly pay</td><td>40 hours x $20.00</td><td>$800.00</td></tr>
<tr><td>Federal income tax</td><td>Per W-4</td><td>-$58.00</td></tr>
<tr><td>Social Security and Medicare</td><td>7.65% of $800</td><td>-$61.20</td></tr>
<tr><td>State income tax</td><td>Example rate</td><td>-$30.80</td></tr>
<tr><td><strong>Disposable earnings</strong></td><td></td><td><strong>$650.00</strong></td></tr>
<tr><td>Test 1: 25% of disposable earnings</td><td>$650 x 25%</td><td>$162.50</td></tr>
<tr><td>Test 2: disposable earnings above $217.50</td><td>$650 - $217.50</td><td>$432.50</td></tr>
<tr><td><strong>Maximum garnishment (lesser)</strong></td><td></td><td><strong>$162.50</strong></td></tr>
</tbody></table>
<p>Now a lower earner with $250 of weekly disposable earnings: 25% would be $62.50, but only $32.50 is above $217.50, so the maximum is $32.50. At $217.50 or less, nothing can be garnished for an ordinary debt. For other pay frequencies, the floor scales: $435 for biweekly pay, with the 25% cap applying from $580. The order itself may ask for less than the maximum; withhold the lower of the order amount and the legal limit.</p>
<h3>Same employee, child support order</h3>
<p>If instead the employee had a child support order and was not supporting another family, up to 60% of $650, or $390, could be withheld, and 65% ($422.50) if arrears were more than 12 weeks old. The order specifies the actual amount; the percentages are maximums.</p>

<h2>Handling a garnishment order step by step</h2>
<ol>
<li><strong>Check the order.</strong> Confirm it names your business and the employee, comes from a court or authorized agency, and note the deadlines.</li>
<li><strong>Respond on time.</strong> Many court orders require an answer or employer's statement within a set number of days, even if the person no longer works for you.</li>
<li><strong>Notify the employee</strong> and give them any copies the order requires.</li>
<li><strong>Start withholding</strong> from the pay period specified. For child support, federal rules generally require withholding to begin no later than the first pay period after 14 days following the date the order was mailed, and payment within 7 business days of payday.</li>
<li><strong>Calculate correctly</strong> each pay period, since disposable earnings change with hours, bonuses and overtime.</li>
<li><strong>Remit payments</strong> to the payee named on the order, with the identifying case number.</li>
<li><strong>Show the deduction</strong> clearly on the pay stub; see our <a href="/blog/pay-stub-template">pay stub template</a>.</li>
<li><strong>Stop</strong> only when you receive a release or satisfaction notice, or the order expires under state law.</li>
<li><strong>Report terminations</strong> to the issuing agency or court when the employee leaves, if the order requires it.</li>
</ol>
<p>If you run payroll in-house, build garnishments into your process; our guide on <a href="/blog/how-to-do-payroll-yourself">how to do payroll yourself</a> covers the payroll cycle, and garnishments also follow employees to their <a href="/blog/final-paycheck-laws-by-state">final paycheck</a>.</p>

<h2>IRS wage levies</h2>
<p>An IRS levy on wages arrives on Form 668-W. The employee completes a statement of filing status and dependents, and the employer uses IRS Publication 1494 to find the exempt amount, which the employee keeps. Everything above that amount goes to the IRS until the levy is released. If the employee does not return the statement, the exempt amount is calculated as if they were married filing separately with no dependents. Employers who fail to honor a levy can become liable for the amount plus a penalty.</p>

<h2>Federal student loan garnishment in 2026</h2>
<p>Federal agencies can use administrative wage garnishment without a court order, withholding up to 15% of disposable earnings. The Education Department said in late 2025 that it would restart wage garnishment for defaulted federal student loans in 2026 after a long pause, beginning with a small number of borrowers, as <a href="https://www.npr.org/2025/12/23/nx-s1-5653312" target="_blank" rel="noopener noreferrer">NPR reported</a>. If you receive an administrative wage garnishment order, process it like any other: confirm it, respond, and withhold the amount stated, within the 15% cap and combined limits.</p>

<h2>Multiple garnishments and priority</h2>
<ul>
<li><strong>Child support</strong> generally has priority over other garnishments.</li>
<li><strong>Federal tax levies</strong> take priority over later orders but not over child support orders received earlier.</li>
<li><strong>Ordinary creditor garnishments</strong> are usually handled first come, first served, and the combined amount cannot exceed the federal limit.</li>
<li><strong>Bankruptcy</strong> can stop other garnishments; follow the trustee's instructions.</li>
</ul>
<p>When several orders conflict, document your calculation and ask the issuing agencies, your payroll provider or an attorney for guidance.</p>

<h2>Garnishing bonuses, commissions and final pay</h2>
<p>Garnishment orders usually apply to all earnings for personal services, which includes bonuses, commissions and vacation payouts. When a bonus is paid in a separate check, calculate disposable earnings for that payment, taking account of what was already withheld in the same period, and apply the limits. Expense reimbursements are not earnings and are generally not subject to wage garnishment. When the employee leaves, apply the order to the final paycheck and notify the issuing court or agency as the order requires.</p>

<h2>Recordkeeping for garnishments</h2>
<p>Keep a file for each order with the original document, your answer, the employee notices, each pay period's calculation, proof of each payment and the release when it arrives. Good records let you answer questions from the employee, the creditor or the agency quickly, and protect you if someone claims the wrong amount was withheld. Reconcile garnishment payments monthly, just as you would reconcile accounts payable, so a missed remittance is caught early.</p>

<h2>Employee protections</h2>
<p>Under the Consumer Credit Protection Act, you cannot fire an employee because their earnings are garnished for one debt. Many states go further. Keep garnishment information confidential, share it only with payroll staff who need it, and never comment on it in performance discussions.</p>
<p>Employees facing garnishment are often under real financial stress. Pointing them, without judgment, toward an employee assistance program if you have one, or simply explaining exactly how the deduction will appear on their pay stub, helps them plan and reduces questions to payroll. Never offer advice on the underlying debt or suggest they ignore the order; refer legal questions to the court, agency or their own adviser.</p>

<h2>Common employer mistakes</h2>
<ul>
<li><strong>Ignoring an order</strong> because the employee says the debt is wrong. Disputes are between the employee and the creditor; you must follow the order until it is changed.</li>
<li><strong>Subtracting voluntary deductions</strong> before calculating disposable earnings, which understates the garnishment.</li>
<li><strong>Using the wrong frequency multiplier</strong> for biweekly or semimonthly pay.</li>
<li><strong>Exceeding combined limits</strong> when multiple orders apply.</li>
<li><strong>Missing the answer deadline</strong> on a court order.</li>
<li><strong>Applying a creditor garnishment to a contractor's invoices</strong> as if it were wages. Payments to independent contractors are usually reached through a different process, such as a levy or garnishment of accounts receivable; follow the order's wording.</li>
</ul>

<h2>When your business is the creditor</h2>
<p>Wage garnishment also works the other way. If a customer owes your business money and will not pay, garnishment is one way to collect after you win a court judgment. Before that, most businesses work through reminders, a formal <a href="/blog/demand-letter-for-payment">demand letter for payment</a> and possibly a <a href="/blog/collection-agency-for-unpaid-invoices">collection agency</a>. Clear invoices with dates, terms and itemized charges make every one of those steps stronger, and our guide to <a href="/blog/invoice-collections">invoice collections</a> covers the process. If you are also considering when to give up on a debt, see <a href="/blog/bad-debt-write-off">bad debt write-offs</a>.</p>
<p>The best protection against needing a court at all is billing clearly and promptly. Create professional invoices with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up, and download them as PDFs to send the same day the work is done.</p>
`,
  },
];
