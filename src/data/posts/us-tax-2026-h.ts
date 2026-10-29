import type { PostDraft } from "../blog";

export const US_TAX_2026_H_POSTS: PostDraft[] = [
  {
    slug: "form-1065",
    title: "Form 1065: Partnership Tax Return Guide (2026 Rules)",
    description:
      "Form 1065 explained: who files the partnership tax return, the March 15, 2027 due date, Schedule K-1s, the $260 per partner late penalty and a worked example.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["partnership-vs-llc", "how-to-file-taxes-as-an-llc", "business-tax-deadlines-2027"],
    faqs: [
      {
        q: "Does a partnership pay tax on Form 1065?",
        a: "Generally no. A partnership is a pass-through entity, so Form 1065 is an information return that reports the business's income, deductions and credits. The partnership's profit or loss passes to the partners on Schedule K-1, and each partner pays income tax, and often self-employment tax, on their own return. Some states charge partnerships entity-level fees or taxes, and elective pass-through entity taxes can apply.",
      },
      {
        q: "Does a two-member LLC file Form 1065?",
        a: "Yes, by default. An LLC with two or more members is treated as a partnership for federal tax purposes unless it elects to be taxed as a corporation by filing Form 8832 or makes an S corporation election with Form 2553. A spouse-owned LLC in a community property state may be able to choose to be treated as a disregarded entity instead. Check the rules before choosing a filing method.",
      },
      {
        q: "What if the partnership had no income in 2026?",
        a: "The IRS says a partnership that had no income and no deductions or credits for the tax year does not have to file Form 1065. Once it receives any income or pays any deductible expense, it must file, even if it made a loss. A partnership that started operating late in the year, or that only paid startup costs, should check whether it had deductible items before skipping the return.",
      },
      {
        q: "How do I extend the Form 1065 deadline?",
        a: "File Form 7004 by the original due date, which is March 15, 2027 for calendar-year 2026 returns. The extension is automatic and gives six more months, to September 15, 2027. It extends the time to file the return and furnish K-1s, but partners still owe their own estimated and individual taxes on time. Many partnerships extend because partners need K-1s for their own returns.",
      },
      {
        q: "Can the late filing penalty for Form 1065 be removed?",
        a: "Sometimes. You can request relief for reasonable cause, such as a serious illness or disaster, and partnerships may qualify for first-time abatement if they have a clean recent compliance history. Revenue Procedure 84-35 also gives a reasonable cause path for certain small partnerships with 10 or fewer partners that meet specific conditions. Respond to the penalty notice with a written explanation or call the number on it.",
      },
      {
        q: "What is a guaranteed payment on Form 1065?",
        a: "A guaranteed payment is an amount the partnership pays a partner for services or the use of capital that is set without regard to the partnership's profit, similar to a salary. The partnership deducts it on Form 1065 and reports it on the partner's Schedule K-1. The partner reports it as income and, for services, generally pays self-employment tax on it. Partners are not W-2 employees of their own partnership.",
      },
      {
        q: "Do partners receive a W-2 from the partnership?",
        a: "No. Partners are not employees of their partnership for federal tax purposes, so they do not receive a W-2 and the partnership does not withhold income or payroll tax from their draws or guaranteed payments. Instead they receive Schedule K-1 and pay their own taxes through quarterly estimated payments. Employees of the partnership who are not partners do receive W-2s.",
      },
      {
        q: "Does Form 1065 have to be e-filed?",
        a: "Partnerships with more than 100 partners must e-file, and under IRS rules that took effect for returns filed in 2024 and later, a partnership required to file 10 or more returns of any type during the year, such as W-2s and 1099s, generally must e-file too. Smaller partnerships can still paper file, but e-filing is faster, confirms receipt and reduces processing errors.",
      },
      {
        q: "What is the difference between Schedule K and Schedule K-1?",
        a: "Schedule K summarizes the partnership's total income, deductions, credits and other items for all partners combined. Schedule K-1 shows each individual partner's share of those items, based on the partnership agreement. The amounts on all K-1s should add up to the totals on Schedule K. Partners use their own K-1, not Schedule K, to complete their individual returns.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Form 1065 is the US Return of Partnership Income, an annual information return that partnerships and multi-member LLCs file with the IRS. It reports the business's income and deductions, and gives each partner a Schedule K-1 showing their share. For calendar-year 2026, it is due March 15, 2027, or September 15, 2027 with a Form 7004 extension.</p>

<p>If you run a business with one or more co-owners and have not elected corporate tax treatment, Form 1065 is your business tax return. The partnership itself usually pays no federal income tax, but missing or filing the return late triggers a penalty per partner, per month, that adds up quickly even when there is no tax due. This guide explains who files Form 1065, the 2026 deadlines and penalties, the key schedules, how Schedule K-1 works, and a worked example with real numbers.</p>
<p><em>This is general information, not tax or legal advice. Confirm details with the current IRS instructions or a tax professional.</em></p>

<h2>What Is Form 1065?</h2>
<p>Form 1065, U.S. Return of Partnership Income, reports the financial results of a partnership for the tax year. Because partnerships are pass-through entities, the profit or loss is not taxed at the partnership level. Instead, it passes through to the partners, who report it on their own returns (Form 1040 for individuals, Form 1120 for corporate partners and so on).</p>
<p>The return includes the main Form 1065 pages and several schedules. The most important for owners is Schedule K-1, the statement each partner receives showing their share of income, deductions, credits and other items. The IRS keeps the current form and instructions on its <a href="https://www.irs.gov/forms-pubs/about-form-1065">About Form 1065 page</a>.</p>

<h2>Who Must File Form 1065?</h2>
<ul>
<li><strong>General partnerships</strong> formed by two or more people doing business together, with or without a written agreement.</li>
<li><strong>Limited partnerships (LPs)</strong> and <strong>limited liability partnerships (LLPs)</strong>.</li>
<li><strong>Multi-member LLCs</strong> that have not elected to be taxed as a C corporation or S corporation. Our guide to <a href="/blog/how-to-file-taxes-as-an-llc">how to file taxes as an LLC</a> covers each classification.</li>
<li><strong>Foreign partnerships</strong> with US-source income or US partners, in many cases.</li>
</ul>
<p>Single-member LLCs do not file Form 1065; by default they report on the owner's Schedule C. If you are still choosing a structure, compare the options in <a href="/blog/partnership-vs-llc">partnership vs LLC</a> and <a href="/blog/s-corp-vs-llc">S corp vs LLC</a>.</p>

<h2>When Is Form 1065 Due in 2027?</h2>
<p>Form 1065 is due by the 15th day of the third month after the partnership's tax year ends. For calendar-year partnerships filing 2026 returns, the key dates are:</p>
<table><thead><tr><th>Item</th><th>Date</th></tr></thead><tbody>
<tr><td>Original due date for Form 1065 and Schedule K-1s to partners</td><td>Monday, March 15, 2027</td></tr>
<tr><td>Deadline to file Form 7004 for an automatic 6-month extension</td><td>March 15, 2027</td></tr>
<tr><td>Extended due date</td><td>Wednesday, September 15, 2027</td></tr>
<tr><td>Fiscal-year partnership (for example, year ending June 30, 2026)</td><td>15th day of the 3rd month after year-end (September 15, 2026)</td></tr>
</tbody></table>
<p>The extension covers filing the return and furnishing K-1s, not the partners' own tax payments. Partners still owe their individual estimated taxes on time. See <a href="/blog/business-tax-deadlines-2027">business tax deadlines for 2027</a> for the full calendar and <a href="/blog/business-tax-extension">business tax extensions</a> for how Form 7004 works.</p>

<h2>How Much Is the Form 1065 Late Filing Penalty?</h2>
<p>The penalty under Internal Revenue Code section 6698 applies when a partnership files late or files an incomplete return without reasonable cause. It is charged per partner, for each month or part of a month the return is late, for up to 12 months. Under the IRS inflation adjustments in Revenue Procedure 2025-32, the amounts are:</p>
<table><thead><tr><th>Returns required to be filed in</th><th>Penalty per partner per month</th><th>Maximum months</th></tr></thead><tbody>
<tr><td>2026 (tax year 2025)</td><td>$255</td><td>12</td></tr>
<tr><td>2027 (tax year 2026)</td><td>$260</td><td>12</td></tr>
</tbody></table>
<p>Separately, failing to give partners correct K-1s on time can bring a per-statement penalty under section 6722. For statements required to be furnished in 2027, it is $60 if corrected within 30 days, $130 if corrected by August 1, and $340 after that, with higher amounts for intentional disregard.</p>
<h3>Worked example: penalty for a late return</h3>
<p>A three-partner LLC files its 2026 Form 1065 on July 2, 2027, with no extension. The return is late for three full months plus part of a fourth, which counts as four months. The penalty is 3 partners x $260 x 4 months = $3,120, even though the partnership owed no tax. If the partnership had filed Form 7004 by March 15, the return would have been on time.</p>
<p>Relief may be available for reasonable cause, through first-time abatement, or under Revenue Procedure 84-35 for some small partnerships with 10 or fewer partners. Our <a href="/blog/irs-penalty-abatement">IRS penalty abatement guide</a> explains how to ask.</p>

<h2>What Is on Form 1065? Key Sections and Schedules</h2>
<table><thead><tr><th>Part</th><th>What it reports</th></tr></thead><tbody>
<tr><td>Page 1, income and deductions</td><td>Gross receipts, cost of goods sold, other income, salaries to non-partner employees, guaranteed payments to partners, rent, taxes, depreciation and other deductions, ending in ordinary business income or loss</td></tr>
<tr><td>Schedule B</td><td>Other information: entity type, accounting method, questions about partners and filing requirements</td></tr>
<tr><td>Schedule B-1</td><td>Information on partners owning 50% or more</td></tr>
<tr><td>Schedule K</td><td>Totals of every item that passes through to partners</td></tr>
<tr><td>Schedule K-1</td><td>Each partner's share of Schedule K items, plus capital account and liability shares</td></tr>
<tr><td>Schedules K-2 and K-3</td><td>International tax items; many domestic partnerships qualify for the domestic filing exception</td></tr>
<tr><td>Schedule L</td><td>Balance sheet</td></tr>
<tr><td>Schedules M-1 and M-2</td><td>Reconciliation of book income to tax income, and changes in partners' capital</td></tr>
<tr><td>Form 1125-A</td><td>Cost of goods sold, if applicable</td></tr>
</tbody></table>
<p>Smaller partnerships may not need Schedules L, M-1 and M-2. The instructions exempt partnerships that answer yes to the Schedule B question confirming, among other things, total receipts under $250,000, total assets under $1 million and timely K-1s. Clean books make the rest far easier; our bookkeeping basics guide covers the essentials.</p>

<h2>How Does Schedule K-1 Work?</h2>
<p>Schedule K-1 (Form 1065) gives each partner their share of the partnership's items. Shares follow the partnership agreement, which can allocate profits differently from capital contributions as long as the allocations have substantial economic effect. Common K-1 boxes include ordinary business income (box 1), net rental income, guaranteed payments (box 4), interest and dividends, section 179 deduction, self-employment earnings (box 14) and distributions (box 19).</p>
<p>Partners use the K-1 to fill in Schedule E of their Form 1040, Schedule SE for self-employment tax, and, where eligible, the <a href="/blog/qbi-deduction-section-199a">qualified business income deduction</a>. Because partners need their K-1 to file, a late Form 1065 delays everyone's personal returns.</p>
<p>Note that distributions are not the same as taxable income. A partner is taxed on their share of profit whether or not the cash is distributed. Our <a href="/blog/llc-operating-agreement">LLC operating agreement</a> guide explains why agreements often require tax distributions so partners can pay the tax on profits they did not withdraw.</p>

<h2>Worked Example: A Two-Partner LLC's Form 1065</h2>
<p>Maya and Jordan own a design studio LLC, 50/50. In 2026 the business invoiced clients $180,000. Expenses were $60,000 (software, rent, contractors and supplies). Maya works full time in the business and receives a guaranteed payment of $40,000; Jordan does not.</p>
<table><thead><tr><th>Line item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Gross receipts</td><td>$180,000</td></tr>
<tr><td>Ordinary deductions</td><td>-$60,000</td></tr>
<tr><td>Guaranteed payment to Maya</td><td>-$40,000</td></tr>
<tr><td><strong>Ordinary business income (Schedule K, line 1)</strong></td><td><strong>$80,000</strong></td></tr>
</tbody></table>
<p>K-1 results:</p>
<ul>
<li><strong>Maya:</strong> box 1 ordinary income $40,000 (50%), box 4 guaranteed payments $40,000. Her self-employment earnings are $80,000.</li>
<li><strong>Jordan:</strong> box 1 ordinary income $40,000. His self-employment earnings are $40,000.</li>
</ul>
<p>The LLC pays no federal income tax. Maya and Jordan each pay income tax on their share and <a href="/blog/self-employment-tax">self-employment tax</a> on their self-employment earnings, typically through <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated payments</a>. If the LLC paid contractors $2,000 or more in 2026, it must also file Form 1099-NEC; see <a href="/blog/how-to-file-1099-nec">how to file 1099-NEC</a>.</p>

<h2>How to File Form 1065 Step by Step</h2>
<ol>
<li><strong>Close the books.</strong> Reconcile bank accounts, record all invoices and expenses, and confirm receivables if you use accrual accounting.</li>
<li><strong>Gather partner information.</strong> Names, taxpayer IDs, addresses, ownership and profit percentages, and capital contributions and distributions for the year.</li>
<li><strong>Complete page 1</strong> with income, cost of goods sold and deductions, including guaranteed payments.</li>
<li><strong>Answer Schedule B</strong> questions carefully, including whether the partnership elects out of the centralized audit regime (available to partnerships with 100 or fewer eligible partners) and who the partnership representative is.</li>
<li><strong>Complete Schedule K</strong> and allocate each item to partners on Schedule K-1.</li>
<li><strong>Complete the balance sheet and reconciliations</strong> if required.</li>
<li><strong>File by March 15, 2027,</strong> or file Form 7004 by that date for an extension.</li>
<li><strong>Furnish K-1s to partners</strong> by the same deadline.</li>
<li><strong>File state partnership returns</strong>, which often follow the federal due date.</li>
</ol>
<p>Accurate income starts with accurate invoices. If you bill clients from the partnership, include the business name and EIN; our <a href="/invoice-generator">free invoice generator</a> lets you add both.</p>

<h2>Form 1065 vs Other Business Tax Returns</h2>
<p>Which return a business files depends on how it is taxed, not just how it is organized under state law. A multi-member LLC can file Form 1065, Form 1120-S or Form 1120 depending on the elections it makes.</p>
<table><thead><tr><th>Return</th><th>Who files</th><th>Calendar-year due date (2026 returns)</th><th>Who pays federal income tax</th></tr></thead><tbody>
<tr><td>Schedule C (with Form 1040)</td><td>Sole proprietors and single-member LLCs</td><td>April 15, 2027</td><td>Owner</td></tr>
<tr><td>Form 1065</td><td>Partnerships and multi-member LLCs</td><td>March 15, 2027</td><td>Partners, via K-1</td></tr>
<tr><td>Form 1120-S</td><td>S corporations and LLCs electing S status</td><td>March 15, 2027</td><td>Shareholders, via K-1</td></tr>
<tr><td>Form 1120</td><td>C corporations and LLCs electing corporate status</td><td>April 15, 2027</td><td>The corporation (21% flat rate)</td></tr>
</tbody></table>
<p>The biggest practical difference between Form 1065 and Form 1120-S is self-employment tax. Active partners generally pay self-employment tax on their share of ordinary income and guaranteed payments, while S corporation shareholder-employees take a reasonable salary through payroll and receive the remaining profit without self-employment tax. That is why growing partnerships often review an S election. Our <a href="/blog/llc-tax-rate">LLC tax rate</a> guide compares the numbers.</p>

<h2>Is Form 1065 Required to Be E-Filed?</h2>
<p>Partnerships with more than 100 partners must e-file. In addition, under final regulations that apply to returns filed on or after January 1, 2024, a partnership that must file 10 or more returns of any type during the calendar year (counting forms such as W-2s, 1099s and Form 1065 itself) is generally required to e-file. Waivers exist for hardship. Most tax software and preparers e-file partnership returns as standard.</p>

<h2>Common Form 1065 Mistakes</h2>
<ul>
<li><strong>Assuming no tax due means no penalty.</strong> The section 6698 penalty applies per partner even with zero tax.</li>
<li><strong>Treating partners as W-2 employees.</strong> Partners receive guaranteed payments and K-1s, not wages.</li>
<li><strong>K-1 allocations that do not match the agreement.</strong> Keep the operating or partnership agreement current.</li>
<li><strong>Ignoring capital account reporting.</strong> K-1s must report partner capital accounts on the tax basis method.</li>
<li><strong>Forgetting state returns and fees.</strong> Some states charge annual partnership or LLC fees.</li>
<li><strong>Mixing personal and business spending,</strong> which makes deductions hard to support in an audit.</li>
<li><strong>Late K-1s.</strong> Partners cannot file accurately without them.</li>
</ul>

<h2>Form 1065 Checklist</h2>
<ul>
<li>Books closed and reconciled for 2026</li>
<li>Partner details, percentages and capital activity confirmed</li>
<li>Guaranteed payments and distributions recorded separately</li>
<li>1099-NEC and W-2 filings complete (e-file if 10 or more returns in total)</li>
<li>Form 1065 or Form 7004 filed by March 15, 2027</li>
<li>K-1s furnished to every partner</li>
<li>State partnership returns filed</li>
</ul>
<p>Form 1065 is less about paying tax and more about reporting accurately and on time, because the late penalty is charged per partner, per month. Keep clean records all year, starting with consistent, numbered invoices. Our <a href="/invoice-generator">free invoice generator</a> needs no sign-up and creates a downloadable PDF right in your browser, so your partnership's billing stays organized for Form 1065 season.</p>
`,
  },
  {
    slug: "form-w-2",
    title: "Form W-2: How to Fill Out and File It (2026 Changes)",
    description:
      "Form W-2 for 2026: the February 1, 2027 deadline, the 10-return e-file rule, every box explained, new tips and overtime codes (TP, TT) and penalty amounts.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["employer-payroll-taxes", "form-941", "w2-vs-1099"],
    faqs: [
      {
        q: "When do employers have to send W-2s for 2026?",
        a: "Employers must give employees their 2026 Forms W-2 and file Copy A with the Social Security Administration by January 31. Because January 31, 2027 falls on a Sunday, the deadline moves to Monday, February 1, 2027. Mailing copies to employees by that date counts as on time. There is no automatic extension for either the employee copies or the SSA filing.",
      },
      {
        q: "Can I file W-2s on paper?",
        a: "Only if you file fewer than 10 information returns in total for the year. The 10-return threshold counts W-2s together with other information returns such as Forms 1099-NEC and 1099-MISC. If the total is 10 or more, you must e-file, usually through the Social Security Administration's Business Services Online or your payroll provider. Paper W-2s must be the official red-ink scannable Copy A, sent with Form W-3.",
      },
      {
        q: "What is the difference between W-2 box 1 and box 3?",
        a: "Box 1 shows wages subject to federal income tax, after pre-tax deductions such as traditional 401(k) deferrals and many cafeteria plan benefits. Box 3 shows wages subject to Social Security tax, which still include 401(k) deferrals but stop at the Social Security wage base, $184,500 for 2026. That is why box 3 is often higher than box 1 for employees who contribute to a retirement plan.",
      },
      {
        q: "What does code TP in box 12 mean?",
        a: "Code TP is a new box 12 code on the 2026 Form W-2. It reports the total cash tips the employee reported to the employer. When an employer uses code TP, it also enters the Treasury tipped occupation code in the new box 14b. Employees use this information when they claim the qualified tips deduction on their federal return, which is limited to $25,000 per return.",
      },
      {
        q: "What does code TT on a W-2 mean?",
        a: "Code TT reports qualified overtime compensation, meaning only the premium portion of overtime pay required under the Fair Labor Standards Act. For time-and-a-half pay, that is the extra half, not the whole overtime wage. Employees use the amount to claim the federal overtime deduction, capped at $12,500, or $25,000 for joint filers, subject to income phase-outs.",
      },
      {
        q: "What if an employee did not receive their W-2?",
        a: "The employee should first ask the employer to confirm the mailing address and resend it. If that fails, the IRS suggests contacting the IRS after the end of February with their information, and they can file using Form 4852, Substitute for Form W-2, if the form still does not arrive. Employers should keep current addresses and offer electronic delivery with consent to avoid this problem.",
      },
      {
        q: "How do I correct a W-2 after filing it?",
        a: "Use Form W-2c, Corrected Wage and Tax Statement, and file it with the Social Security Administration along with Form W-3c if filing on paper. Give the employee a copy too. If the error also changed the payroll taxes reported on Form 941, file Form 941-X for the affected quarter. Correcting promptly can lower the penalty amount for an incorrect return.",
      },
      {
        q: "Do I give a W-2 to independent contractors?",
        a: "No. Independent contractors get Form 1099-NEC, not a W-2, if you paid them $2,000 or more during 2026. W-2s are only for employees, meaning workers whose work you control and from whom you withhold taxes. Misclassifying employees as contractors can lead to back payroll taxes and penalties, so review the relationship carefully before choosing which form to file.",
      },
      {
        q: "Do employees need a W-2 if they earned very little?",
        a: "If you withheld any income, Social Security or Medicare tax, you must file a W-2 regardless of the amount. For wages paid after 2025, IRS instructions raise the threshold for employees with no withholding of any kind from $600 to $2,000, with inflation indexing after 2026. In practice most employees have Social Security and Medicare withheld, so nearly every employee gets a W-2.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Form W-2, Wage and Tax Statement, reports each employee's annual wages and the taxes withheld. Employers must give it to employees and file it with the Social Security Administration by January 31, which is February 1, 2027 for 2026 wages. You must e-file if you file 10 or more information returns in total. The 2026 form adds codes for tips and overtime.</p>

<p>If you have even one employee, you file W-2s every January. The form looks simple, but the boxes follow specific rules, the deadline has no automatic extension, and the penalties are per form. For 2026 wages there are also new reporting requirements because of the One Big Beautiful Bill Act's tips and overtime deductions. This guide explains how to fill out Form W-2 box by box, the 2026 changes, deadlines, e-file rules, penalties and a worked example.</p>
<p><em>This is general information, not tax advice. Check the IRS General Instructions for Forms W-2 and W-3 for your situation.</em></p>

<h2>What Is a W-2 Form?</h2>
<p>Form W-2 is the year-end statement employers prepare for each employee. It shows wages, tips and other compensation; federal income tax withheld; Social Security and Medicare wages and taxes; retirement plan contributions; certain benefits; and state and local wages and taxes. Employees use it to file their own returns, and the Social Security Administration uses it to credit their earnings record. The IRS cross-checks W-2 totals against the quarterly <a href="/blog/form-941">Form 941</a> returns you filed during the year.</p>
<p>W-2s are for employees only. Independent contractors receive Form 1099-NEC instead. If you are unsure which applies, read <a href="/blog/w2-vs-1099">W-2 vs 1099</a> before year-end.</p>

<h2>What Changed on the 2026 Form W-2?</h2>
<p>The IRS released the final 2026 Form W-2 and instructions in early 2026 with several changes driven by Public Law 119-21:</p>
<table><thead><tr><th>Change</th><th>What it means</th></tr></thead><tbody>
<tr><td>Box 12 code TP</td><td>Total cash tips the employee reported to you</td></tr>
<tr><td>Box 12 code TT</td><td>Qualified overtime compensation: only the FLSA-required premium portion of overtime pay</td></tr>
<tr><td>Box 12 code TA</td><td>Employer contributions to an employee's Trump account under a section 128 program</td></tr>
<tr><td>Box 14 split into 14a and 14b</td><td>14a is the old "Other" box; 14b holds the Treasury tipped occupation code when you report code TP</td></tr>
<tr><td>Box 9 reduced</td><td>Layout change to make room for box 14 entries</td></tr>
<tr><td>Threshold for employees with no withholding</td><td>Rises from $600 to $2,000 for wages paid after 2025</td></tr>
</tbody></table>
<p>Tips and overtime are still subject to federal income tax withholding, Social Security and Medicare taxes during the year. The deductions happen on the employee's own return, which is why accurate W-2 reporting matters. Employees who earn tips as self-employed workers follow different rules, covered in <a href="/blog/no-tax-on-tips-self-employed">no tax on tips for the self-employed</a>. For the overtime side, see <a href="/blog/no-tax-on-overtime">no tax on overtime</a>.</p>

<h3>Who must receive a 2026 Form W-2?</h3>
<p>You must file a W-2 for every employee to whom you paid wages and from whom you withheld any federal income, Social Security or Medicare tax, whatever the amount. That includes part-time staff, seasonal workers, family members on payroll (with some exceptions for a sole proprietor's young children and spouse) and S corporation owner-employees. Employees who left during the year still get a W-2 for the wages you paid them. For wages paid after 2025, an employee with no withholding of any kind only needs a W-2 if you paid them $2,000 or more, up from $600.</p>

<h2>When Is the W-2 Deadline?</h2>
<p>The W-2 deadline is January 31 for both the employee copies and filing Copy A with the Social Security Administration. When January 31 falls on a weekend, the deadline moves to the next business day.</p>
<table><thead><tr><th>Task</th><th>Deadline for 2026 wages</th></tr></thead><tbody>
<tr><td>Furnish W-2 to employees (Copies B, C and 2)</td><td>Monday, February 1, 2027</td></tr>
<tr><td>File Copy A with SSA (e-file or paper with Form W-3)</td><td>Monday, February 1, 2027</td></tr>
<tr><td>Former employee who asks in writing for an early W-2</td><td>Within 30 days of the request or the final wage payment, whichever is later</td></tr>
</tbody></table>
<p>There is no automatic extension. You can request a 30-day extension to file with the SSA using Form 8809, but the IRS grants it only in limited situations, and it does not extend the deadline to give employees their copies. Our <a href="/blog/business-tax-deadlines-2027">business tax deadlines for 2027</a> lists every related date.</p>

<h2>Do You Have to E-File W-2s?</h2>
<p>Yes, if you file 10 or more information returns in total during the calendar year. The threshold counts W-2s together with most other information returns, including Forms 1099-NEC, 1099-MISC and 1099-INT. For example, a business with 6 employees and 5 contractors files 11 returns and must e-file all of them. The IRS explains the rule on its <a href="https://www.irs.gov/filing/e-file-information-returns">e-file information returns page</a>.</p>
<p>Most employers e-file W-2s through their payroll provider or directly through the Social Security Administration's Business Services Online (BSO), which is free. If you file on paper, you must use the official red-ink Copy A (photocopies and plain-paper prints are not scannable) and include Form W-3, the transmittal summary.</p>

<h2>What Is Form W-3 and Do You Need It?</h2>
<p>Form W-3, Transmittal of Wage and Tax Statements, summarizes all your W-2s: total wages, total withholding, Social Security and Medicare wages and the number of forms. If you paper file, you send one W-3 with your Copy A forms to the Social Security Administration. If you e-file through Business Services Online or a payroll provider, the system creates the W-3 information automatically. Either way, the W-3 totals should match your four Forms 941 for the year, which is the first thing to check before you file.</p>

<h2>Can You Send W-2s to Employees Electronically?</h2>
<p>Yes, if each employee affirmatively consents to electronic delivery. IRS rules require that you tell employees how to get a paper copy, how to withdraw consent, the hardware and software they need, and how long the electronic W-2 will remain available. You must post or send the electronic W-2 by the same February 1, 2027 deadline and notify the employee that it is available. Employees who do not consent must receive a paper copy by mail or in person.</p>
<p>Electronic delivery reduces lost-in-the-mail problems and returned forms from former employees who moved. If you mail paper forms, use the last address in your records and keep any undeliverable W-2s with your records for four years.</p>

<h2>W-2 Boxes Explained</h2>
<table><thead><tr><th>Box</th><th>What goes in it</th></tr></thead><tbody>
<tr><td>a to f</td><td>Employee SSN, employer EIN, employer name and address, control number (optional), employee name and address</td></tr>
<tr><td>1</td><td>Wages, tips, other compensation subject to federal income tax (after pre-tax 401(k), cafeteria plan and similar deductions)</td></tr>
<tr><td>2</td><td>Federal income tax withheld</td></tr>
<tr><td>3</td><td>Social Security wages (excluding tips), up to the $184,500 wage base for 2026</td></tr>
<tr><td>4</td><td>Social Security tax withheld (6.2% of box 3 plus box 7)</td></tr>
<tr><td>5</td><td>Medicare wages and tips (no wage base limit)</td></tr>
<tr><td>6</td><td>Medicare tax withheld (1.45%, plus 0.9% Additional Medicare Tax on wages over $200,000)</td></tr>
<tr><td>7</td><td>Social Security tips reported by the employee</td></tr>
<tr><td>8</td><td>Allocated tips (large food and beverage establishments)</td></tr>
<tr><td>10</td><td>Dependent care benefits</td></tr>
<tr><td>11</td><td>Nonqualified plan distributions</td></tr>
<tr><td>12a to 12d</td><td>Coded amounts, such as D (401(k) deferrals), DD (cost of employer health coverage), W (HSA contributions), TP, TT and TA</td></tr>
<tr><td>13</td><td>Checkboxes: statutory employee, retirement plan, third-party sick pay</td></tr>
<tr><td>14a</td><td>Other information, such as state disability insurance or union dues</td></tr>
<tr><td>14b</td><td>Treasury tipped occupation code(s) when code TP is used</td></tr>
<tr><td>15 to 20</td><td>State and local wages, income tax withheld and locality name</td></tr>
</tbody></table>

<h2>Worked Example: Filling Out a W-2</h2>
<p>Elena is a full-time employee of a small restaurant group. In 2026 she earned $52,000 in hourly wages, including overtime, and contributed 5% to a traditional 401(k). She also reported $6,000 in cash tips. Her qualified overtime premium (the extra half of time-and-a-half) was $1,800.</p>
<table><thead><tr><th>Box</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>1</td><td>$52,000 + $6,000 tips - $2,600 401(k)</td><td>$55,400.00</td></tr>
<tr><td>2</td><td>Federal income tax withheld (from payroll records)</td><td>$4,350.00</td></tr>
<tr><td>3</td><td>Wages excluding tips (401(k) deferrals stay in)</td><td>$52,000.00</td></tr>
<tr><td>4</td><td>6.2% x ($52,000 + $6,000)</td><td>$3,596.00</td></tr>
<tr><td>5</td><td>$52,000 + $6,000</td><td>$58,000.00</td></tr>
<tr><td>6</td><td>1.45% x $58,000</td><td>$841.00</td></tr>
<tr><td>7</td><td>Social Security tips</td><td>$6,000.00</td></tr>
<tr><td>12a</td><td>Code D, 401(k) deferrals</td><td>$2,600.00</td></tr>
<tr><td>12b</td><td>Code TP, cash tips reported</td><td>$6,000.00</td></tr>
<tr><td>12c</td><td>Code TT, qualified overtime premium</td><td>$1,800.00</td></tr>
<tr><td>13</td><td>Retirement plan box checked</td><td>X</td></tr>
<tr><td>14b</td><td>Treasury tipped occupation code for her job</td><td>(code from IRS list)</td></tr>
</tbody></table>
<p>Elena's total employer-side payroll taxes match the employee side for Social Security and Medicare. The employer reports those totals each quarter on Form 941; read <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> for the full picture.</p>

<h2>How to File W-2s Step by Step</h2>
<ol>
<li><strong>Verify employee data</strong> early in December: legal names, SSNs and addresses must match Social Security records.</li>
<li><strong>Reconcile payroll</strong> so the year's totals match the four Forms 941 you filed. Fix gaps before you print anything.</li>
<li><strong>Set up the new codes</strong> in your payroll system: TP, TT, TA and box 14b occupation codes, if they apply.</li>
<li><strong>Prepare the forms</strong> in payroll software or BSO.</li>
<li><strong>Count your information returns.</strong> If W-2s plus 1099s total 10 or more, e-file.</li>
<li><strong>Furnish employee copies</strong> by February 1, 2027, by mail or electronically if the employee consented.</li>
<li><strong>File Copy A</strong> with the SSA by February 1, 2027.</li>
<li><strong>File state copies</strong> where your state requires them.</li>
<li><strong>Keep records</strong> for at least four years.</li>
</ol>
<p>If you are running payroll without a provider, our guide to <a href="/blog/how-to-do-payroll-yourself">how to do payroll yourself</a> covers the full year, and <a href="/blog/hiring-your-first-employee">hiring your first employee</a> covers onboarding forms such as W-4 and <a href="/blog/form-i-9">Form I-9</a>.</p>

<h2>What Are the W-2 Penalties for 2027?</h2>
<p>Penalties apply separately for late or incorrect filing with the SSA and for late or incorrect employee copies. For returns and statements due in 2027, Revenue Procedure 2025-32 sets these amounts for businesses with average annual gross receipts of $5 million or less:</p>
<table><thead><tr><th>When corrected or filed</th><th>Penalty per form</th><th>Annual maximum (small business)</th></tr></thead><tbody>
<tr><td>Within 30 days of the deadline</td><td>$60</td><td>$244,500</td></tr>
<tr><td>After 30 days but by August 1</td><td>$130</td><td>$698,500</td></tr>
<tr><td>After August 1 or not filed</td><td>$340</td><td>$1,397,000</td></tr>
<tr><td>Intentional disregard</td><td>Higher, with no maximum</td><td>No cap</td></tr>
</tbody></table>
<p>So 10 employee W-2s filed in September 2027 could cost $3,400 for the SSA filing, plus a separate penalty for late employee copies.</p>

<h2>What to Do Before Year-End to Make W-2s Easier</h2>
<ul>
<li><strong>Run a payroll register for the year</strong> by employee and compare it with your Form 941 totals for Q1 to Q3.</li>
<li><strong>Add taxable fringe benefits</strong> such as personal use of a company vehicle, gift cards and group-term life insurance over $50,000 before the last payroll.</li>
<li><strong>Include S corporation health insurance</strong> for 2% shareholders in box 1 wages, if it applies.</li>
<li><strong>Confirm tipped occupations</strong> for each tipped employee so you can enter the right box 14b code.</li>
<li><strong>Separate the FLSA overtime premium</strong> from straight-time pay so code TT is accurate. Overtime paid only because of state law or a company policy, beyond what the FLSA requires, is not qualified overtime.</li>
<li><strong>Collect updated addresses</strong> and consent forms for electronic delivery.</li>
<li><strong>Count your 1099s too,</strong> so you know whether the 10-return e-file rule applies. Contractors who bill you with clear invoices from a tool like our <a href="/invoice-generator">free invoice generator</a> make that count easy.</li>
</ul>

<h2>Common W-2 Mistakes</h2>
<ul>
<li><strong>Mismatched names and SSNs.</strong> Use the Social Security Number Verification Service before filing.</li>
<li><strong>Putting 401(k) deferrals in the wrong boxes.</strong> They reduce box 1, not boxes 3 and 5.</li>
<li><strong>Totals that do not match Form 941.</strong> The IRS compares them and sends notices.</li>
<li><strong>Missing the new 2026 codes</strong> for tips and overtime, which employees need for their deductions.</li>
<li><strong>Paper filing when you hit the 10-return threshold.</strong></li>
<li><strong>Issuing W-2s to contractors</strong> or 1099s to employees.</li>
<li><strong>Forgetting state filings</strong> and local tax boxes.</li>
</ul>
<p>Form W-2 is an annual task, but getting it right depends on clean payroll and records all year. If you also pay contractors, bill and track those payments carefully so your 1099 counts are right; our <a href="/invoice-generator">free invoice generator</a> helps contractors and small businesses create clean PDF invoices with no sign-up, built entirely in your browser.</p>
`,
  },
  {
    slug: "form-941",
    title: "Form 941: Quarterly Payroll Tax Return Guide (2026)",
    description:
      "Form 941 explained: 2026 quarterly due dates, monthly vs semiweekly deposit schedules, line-by-line steps, a worked example and the penalties to avoid.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["employer-payroll-taxes", "form-w-2", "how-to-do-payroll-yourself"],
    faqs: [
      {
        q: "Do I have to file Form 941 if I had no payroll this quarter?",
        a: "Generally yes, once you have filed a Form 941, you must keep filing each quarter even if you paid no wages, unless you are a seasonal employer that checks the seasonal box or you file a final return. If you closed the business or stopped paying wages permanently, check the box on line 17 on your final return and give the date final wages were paid.",
      },
      {
        q: "What is the difference between Form 941 and Form 944?",
        a: "Form 941 is filed quarterly by most employers. Form 944 is an annual return for very small employers whose annual liability for Social Security, Medicare and withheld income tax is $1,000 or less, and only if the IRS has notified them to file it. If you have not been notified, file Form 941 quarterly. You can ask the IRS to change your filing requirement.",
      },
      {
        q: "What is the difference between Form 941 and Form 940?",
        a: "Form 941 reports withheld federal income tax plus Social Security and Medicare taxes each quarter. Form 940 is an annual return for federal unemployment tax (FUTA), which only the employer pays, on the first $7,000 of each employee's wages. Both are filed by most employers, but on different schedules: Form 941 four times a year and Form 940 once, by January 31.",
      },
      {
        q: "Can I pay my Form 941 taxes when I file the return?",
        a: "Only in limited cases. If your total tax for the current quarter and the prior quarter is under $2,500, and you did not trigger the $100,000 next-day rule, you can pay with a timely filed return. Otherwise you must deposit the taxes electronically on your monthly or semiweekly schedule. The IRS now directs employers to pay any balance due electronically rather than by check.",
      },
      {
        q: "How do I correct a mistake on a filed Form 941?",
        a: "Use Form 941-X, Adjusted Employer's Quarterly Federal Tax Return or Claim for Refund, for the quarter that had the error. You can choose an adjustment process, which applies the correction to your next return, or a claim process for a refund. There are time limits, generally three years from the date the original return was filed, so correct errors as soon as you find them.",
      },
      {
        q: "Who is personally liable for unpaid Form 941 taxes?",
        a: "Withheld income tax and the employee share of Social Security and Medicare are trust fund taxes. If they are not paid, the IRS can assess the trust fund recovery penalty against responsible people, such as owners, officers or bookkeepers who controlled payments and willfully failed to pay. The penalty equals the unpaid trust fund amount, so it can follow you personally even after the business closes.",
      },
      {
        q: "Does a payroll service file Form 941 for me?",
        a: "Most full-service payroll providers calculate, deposit and file Form 941 for you each quarter. You remain legally responsible, so check that deposits appear in your EFTPS account and review the quarterly reports. If the provider fails to deposit, the IRS still looks to you for the taxes and penalties, which is why monitoring your EFTPS history matters.",
      },
      {
        q: "Do sole proprietors with no employees file Form 941?",
        a: "No. If you have no employees, you do not file Form 941. You pay your own income tax and self-employment tax through quarterly estimated payments on Form 1040-ES and report them on your Form 1040 with Schedule SE. Form 941 starts once you pay wages to an employee, including a spouse or family member in many cases.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Form 941, Employer's Quarterly Federal Tax Return, reports the federal income tax you withheld from employees plus both the employee and employer shares of Social Security and Medicare tax. It is due April 30, July 31, October 31 and January 31. You deposit the taxes during the quarter on a monthly or semiweekly schedule based on a lookback period.</p>

<p>Form 941 is the payroll return most US employers file four times a year. It connects what you withheld from paychecks, what you deposited with the IRS, and what you will later report on employees' W-2s. Getting it wrong usually means penalties for late deposits rather than late filing, so understanding the deposit schedule is as important as filling in the form. This guide covers who files Form 941, the 2026 due dates, deposit rules, a line-by-line walkthrough, a worked example and the most common mistakes.</p>
<p><em>This is general information, not tax advice. Check the current IRS Form 941 instructions and Publication 15.</em></p>

<h2>What Is Form 941?</h2>
<p>Form 941 is the quarterly return employers use to report:</p>
<ul>
<li>Wages, tips and other compensation paid to employees</li>
<li>Federal income tax withheld from employees</li>
<li>Social Security tax (6.2% employee + 6.2% employer, on wages up to $184,500 in 2026)</li>
<li>Medicare tax (1.45% employee + 1.45% employer, no wage limit) plus 0.9% Additional Medicare Tax withheld on an employee's wages over $200,000</li>
<li>Adjustments, credits and the deposits you made during the quarter</li>
</ul>
<p>The IRS uses the March 2026 revision of the form for all four quarters of 2026. Notable updates in the <a href="https://www.irs.gov/instructions/i941">2026 instructions</a> include refunds issued by direct deposit and a direction to pay any balance due electronically. Our <a href="/blog/employer-payroll-taxes">employer payroll taxes guide</a> explains how these taxes fit with FUTA and state taxes.</p>

<h2>Who Must File Form 941?</h2>
<p>Any employer that pays wages subject to income tax withholding or Social Security and Medicare tax generally files Form 941 every quarter. Exceptions:</p>
<ul>
<li><strong>Form 944 filers:</strong> very small employers notified by the IRS to file annually.</li>
<li><strong>Household employers</strong> (nannies, housekeepers) usually report on Schedule H with their Form 1040.</li>
<li><strong>Agricultural employers</strong> file Form 943 for farmworkers.</li>
<li><strong>Seasonal employers</strong> file only for quarters with wages, after checking the seasonal box.</li>
</ul>
<p>Partners and sole proprietors do not report their own earnings on Form 941; only employee wages count. If you are about to hire, read <a href="/blog/hiring-your-first-employee">hiring your first employee</a>.</p>

<h2>When Is Form 941 Due in 2026 and 2027?</h2>
<p>Form 941 is due on the last day of the month after each quarter ends. When that day falls on a weekend or legal holiday, the deadline moves to the next business day. If you deposited all taxes on time and in full, you get 10 extra days.</p>
<table><thead><tr><th>Quarter</th><th>Months</th><th>Due date</th><th>If all deposits timely</th></tr></thead><tbody>
<tr><td>Q1 2026</td><td>Jan to Mar</td><td>April 30, 2026</td><td>May 11, 2026</td></tr>
<tr><td>Q2 2026</td><td>Apr to Jun</td><td>July 31, 2026</td><td>August 10, 2026</td></tr>
<tr><td>Q3 2026</td><td>Jul to Sep</td><td>November 2, 2026 (October 31 is a Saturday)</td><td>November 10, 2026</td></tr>
<tr><td>Q4 2026</td><td>Oct to Dec</td><td>February 1, 2027 (January 31 is a Sunday)</td><td>February 10, 2027</td></tr>
</tbody></table>
<p>Q4 is also the season for W-2s and Form 940, so plan the end of January carefully. See <a href="/blog/business-tax-deadlines-2027">business tax deadlines for 2027</a>.</p>

<h2>Monthly vs Semiweekly Deposit Schedules</h2>
<p>Filing Form 941 is separate from paying the taxes. Most employers must deposit payroll taxes electronically, usually through EFTPS, during the quarter. Your schedule depends on the total tax you reported on Form 941 during the lookback period: for 2026, the four quarters from July 1, 2024 through June 30, 2025.</p>
<table><thead><tr><th>Rule</th><th>Who it applies to</th><th>When to deposit</th></tr></thead><tbody>
<tr><td>Monthly depositor</td><td>Lookback total of $50,000 or less (new employers start here)</td><td>By the 15th of the following month</td></tr>
<tr><td>Semiweekly depositor</td><td>Lookback total over $50,000</td><td>Paydays Wednesday to Friday: by the following Wednesday. Paydays Saturday to Tuesday: by the following Friday</td></tr>
<tr><td>$100,000 next-day rule</td><td>Anyone who accumulates $100,000 or more in tax liability on any day</td><td>By the next business day; you then become a semiweekly depositor</td></tr>
<tr><td>$2,500 rule</td><td>Total tax under $2,500 for the current or prior quarter (and no next-day trigger)</td><td>May pay with a timely filed return</td></tr>
</tbody></table>
<p>Semiweekly depositors also attach Schedule B to report their tax liability by payday. Monthly depositors complete line 16 on Form 941 instead. Our guide on <a href="/blog/how-to-pay-irs-online">how to pay the IRS online</a> walks through EFTPS and other electronic options.</p>

<h3>What deposit schedule do new employers use?</h3>
<p>A new employer has no lookback history, so its tax for the lookback period is treated as zero and it starts as a monthly depositor. The exception is the $100,000 next-day rule: a large first payroll can make you a semiweekly depositor immediately. Before your first payroll, enroll in EFTPS using your EIN, because enrollment can take several days and the first deposit may be due soon after. The IRS sends a notice each year confirming your schedule, but you are responsible for applying the lookback rules correctly even if the notice does not arrive.</p>

<h2>How to Fill Out Form 941 Line by Line</h2>
<table><thead><tr><th>Line</th><th>What to enter</th></tr></thead><tbody>
<tr><td>1</td><td>Number of employees paid in the pay period that includes the 12th day of the last month of the quarter (March 12, June 12, September 12, December 12)</td></tr>
<tr><td>2</td><td>Total wages, tips and other compensation</td></tr>
<tr><td>3</td><td>Federal income tax withheld</td></tr>
<tr><td>4</td><td>Check if no wages were subject to Social Security or Medicare tax</td></tr>
<tr><td>5a to 5d</td><td>Taxable Social Security wages and tips (x 12.4%), Medicare wages and tips (x 2.9%), and wages subject to Additional Medicare Tax (x 0.9%)</td></tr>
<tr><td>5e and 5f</td><td>Total Social Security and Medicare taxes; tax due on unreported tips under a section 3121(q) notice</td></tr>
<tr><td>6</td><td>Total taxes before adjustments</td></tr>
<tr><td>7 to 9</td><td>Adjustments for fractions of cents, sick pay, and tips and group-term life insurance</td></tr>
<tr><td>10</td><td>Total taxes after adjustments</td></tr>
<tr><td>11</td><td>Qualified small business payroll tax credit for increasing research activities (Form 8974), if any</td></tr>
<tr><td>12</td><td>Total taxes after adjustments and nonrefundable credits</td></tr>
<tr><td>13</td><td>Total deposits for the quarter, including any overpayment applied from a prior quarter</td></tr>
<tr><td>14 and 15</td><td>Balance due, or overpayment (refund or apply to next return)</td></tr>
<tr><td>16</td><td>Deposit schedule and tax liability by month (or attach Schedule B)</td></tr>
<tr><td>17 and 18</td><td>Final return or seasonal employer boxes</td></tr>
</tbody></table>
<p>Then complete the third-party designee section and sign the return. Line numbering can change between revisions, so follow the form for the quarter you are filing.</p>

<h2>Worked Example: A Small Employer's Q3 2026 Form 941</h2>
<p>A landscaping company has five employees. In Q3 2026 (July to September) it paid $90,000 in wages, none over the wage base, with no tips, and withheld $9,800 of federal income tax. It is a monthly depositor.</p>
<table><thead><tr><th>Line</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>2</td><td>Wages</td><td>$90,000.00</td></tr>
<tr><td>3</td><td>Federal income tax withheld</td><td>$9,800.00</td></tr>
<tr><td>5a</td><td>$90,000 x 12.4%</td><td>$11,160.00</td></tr>
<tr><td>5c</td><td>$90,000 x 2.9%</td><td>$2,610.00</td></tr>
<tr><td>5e</td><td>$11,160 + $2,610</td><td>$13,770.00</td></tr>
<tr><td>6, 10, 12</td><td>$9,800 + $13,770 (no adjustments or credits)</td><td>$23,570.00</td></tr>
<tr><td>13</td><td>Monthly deposits: July $7,820, August $7,950, September $7,800</td><td>$23,570.00</td></tr>
<tr><td>14</td><td>Balance due</td><td>$0.00</td></tr>
</tbody></table>
<p>The deposits for July, August and September were due by August 17 (August 15 was a Saturday), September 15 and October 15. Because every deposit was on time, the return could be filed as late as November 10, 2026. The company's total payroll cost for the quarter also includes the employer half of Social Security and Medicare, $6,885, plus FUTA and state unemployment taxes.</p>

<h2>What Are the Form 941 Penalties?</h2>
<table><thead><tr><th>Penalty</th><th>Amount</th></tr></thead><tbody>
<tr><td>Failure to deposit, 1 to 5 days late</td><td>2% of the unpaid deposit</td></tr>
<tr><td>Failure to deposit, 6 to 15 days late</td><td>5%</td></tr>
<tr><td>Failure to deposit, 16 or more days late, or paid directly to the IRS or with the return when not allowed</td><td>10%</td></tr>
<tr><td>Amounts still unpaid more than 10 days after the first IRS notice</td><td>15%</td></tr>
<tr><td>Failure to file</td><td>5% of unpaid tax per month, up to 25%</td></tr>
<tr><td>Failure to pay</td><td>0.5% of unpaid tax per month, up to 25%</td></tr>
<tr><td>Trust fund recovery penalty</td><td>100% of unpaid trust fund taxes, assessed personally against responsible persons</td></tr>
</tbody></table>
<p>Interest also accrues on unpaid amounts. If you receive a penalty notice and had a good reason, see our <a href="/blog/irs-penalty-abatement">IRS penalty abatement guide</a>.</p>

<h2>How to File Form 941: E-File or Paper</h2>
<p>You can e-file Form 941 through IRS-approved tax software, a payroll provider or a tax professional, or mail a paper return to the address listed in the instructions, which depends on your state and whether you enclose a payment. E-filing gives an acknowledgment of receipt, catches math errors and processes faster.</p>
<p>If you have a balance due, the 2026 instructions direct you to pay electronically, for example through EFTPS or your IRS business tax account, rather than mailing a check. If you overpaid, the IRS now issues Form 941 refunds by direct deposit, or you can apply the overpayment to your next quarter.</p>

<h2>What If You Cannot Pay Your Payroll Taxes?</h2>
<p>File Form 941 on time anyway. The failure-to-file penalty (5% per month) is far larger than the failure-to-pay penalty (0.5% per month), so filing without full payment limits the damage. Then contact the IRS quickly about a payment plan; many small businesses can request an installment agreement online for limited balances. Do not keep paying other bills while payroll taxes go unpaid, because withheld employee taxes create personal liability.</p>
<p>The best prevention is cash flow. Slow-paying customers are a common reason small employers fall behind on deposits. Invoicing as soon as work is complete, using clear <a href="/blog/net-30-payment-terms">net 30 payment terms</a> and following up on overdue invoices keeps money coming in before each deposit is due. Our <a href="/invoice-generator">free invoice generator</a> makes that billing quick.</p>

<h2>How Form 941 Connects to W-2s and Form 940</h2>
<p>At year-end, the four Forms 941 should reconcile with the totals on your employees' <a href="/blog/form-w-2">Forms W-2</a> and Form W-3. Wages on line 2 across all four quarters should match total box 1 wages after accounting for pre-tax deductions, and Social Security and Medicare wages should match boxes 3, 5 and 7. The IRS and SSA compare these figures and send notices when they differ. FUTA is reported separately on annual Form 940, on the first $7,000 of each employee's wages.</p>
<p>Many small businesses use a payroll service to handle all three forms. If you are comparing providers, see <a href="/blog/gusto-vs-adp">Gusto vs ADP</a>. If you run payroll yourself, follow <a href="/blog/how-to-do-payroll-yourself">how to do payroll yourself</a>.</p>

<h2>Common Form 941 Mistakes</h2>
<ul>
<li><strong>Depositing on the wrong schedule.</strong> Check your lookback period each fall; the IRS notifies you, but the responsibility is yours.</li>
<li><strong>Paying with the return when not allowed.</strong> That triggers a 10% deposit penalty.</li>
<li><strong>Missing the $100,000 next-day rule</strong> after a large bonus payroll.</li>
<li><strong>Totals that do not match W-2s</strong> at year-end.</li>
<li><strong>Stopping filing without marking a final return.</strong></li>
<li><strong>Treating workers as contractors to avoid payroll.</strong> Misclassification brings back taxes and penalties; see <a href="/blog/w2-vs-1099">W-2 vs 1099</a>.</li>
<li><strong>Using withheld trust fund taxes for cash flow.</strong> It is the fastest route to personal liability.</li>
</ul>

<h2>Form 941 Quarterly Checklist</h2>
<ul>
<li>Payroll for the quarter reconciled to your bank and payroll reports</li>
<li>All deposits made through EFTPS on schedule</li>
<li>Line 1 employee count based on the pay period including the 12th</li>
<li>Tax liability by month (line 16) or Schedule B completed</li>
<li>Return filed by the due date, electronically if possible</li>
<li>Copy and deposit confirmations kept for at least four years</li>
</ul>
<p>Form 941 rewards routine: run payroll, deposit on schedule, reconcile monthly and file on time. Healthy cash flow makes those deposits painless, and that starts with invoicing promptly. Our <a href="/invoice-generator">free invoice generator</a> creates professional PDF invoices in your browser with no sign-up, so you can bill clients quickly and keep money coming in for payroll.</p>
`,
  },
  {
    slug: "form-i-9",
    title: "Form I-9: Employer Guide to Employment Verification",
    description:
      "Form I-9 for employers in 2026: the current 01/20/25 edition, Section 1 and 2 deadlines, acceptable documents, E-Verify, remote checks and retention rules.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["hiring-your-first-employee", "form-w-2", "w2-vs-1099"],
    faqs: [
      {
        q: "Do I need to complete Form I-9 for independent contractors?",
        a: "No. Form I-9 is required only for employees you hire to work in the United States. You do not complete it for genuine independent contractors, though you cannot knowingly use a contractor who is not authorized to work. Be careful with classification: if the worker is really an employee under the law, you need an I-9 and payroll, and misclassification brings tax and immigration risk.",
      },
      {
        q: "Can an employee choose which documents to show for Form I-9?",
        a: "Yes. The employee chooses which acceptable documents to present: one from List A, or one from List B plus one from List C. Employers cannot ask for specific documents, ask for more documents than required, or reject documents that reasonably appear genuine and relate to the person. Doing so can be unfair documentary practices under the Immigration and Nationality Act's anti-discrimination provisions.",
      },
      {
        q: "Is E-Verify mandatory for all employers?",
        a: "No. E-Verify is voluntary for most private employers nationwide. It is mandatory for federal contractors and subcontractors whose contracts include the Federal Acquisition Regulation E-Verify clause, and several states require some or all employers to use it. Check your state's rules. If you use E-Verify, you must still complete Form I-9 for every new hire and create the E-Verify case within three business days.",
      },
      {
        q: "Can I examine I-9 documents over video?",
        a: "Only if you qualify for the DHS alternative procedure. Employers enrolled in E-Verify and in good standing can examine documents remotely by video, after reviewing copies the employee sends, and must keep copies of the documents. They must use the procedure consistently for remote hires and cannot use it only for some groups. Other employers must physically examine original documents or use an authorized representative.",
      },
      {
        q: "Do I need to complete a new I-9 for a rehired employee?",
        a: "If you rehire someone within three years of the date their previous Form I-9 was completed, you may complete Supplement B on the existing form instead of a new I-9, provided the original form is still valid and their work authorization has not expired. Otherwise, complete a new Form I-9. You can always choose to complete a new form instead.",
      },
      {
        q: "Should I keep copies of I-9 documents?",
        a: "Federal rules generally allow, but do not require, employers to copy documents presented for Form I-9, unless you use the remote alternative procedure or participate in E-Verify in situations that require copies. If you copy documents, do it for every employee, regardless of national origin or citizenship, and store the copies with the I-9. Inconsistent copying can look like discrimination.",
      },
      {
        q: "Can I use an older version of Form I-9?",
        a: "Use the current edition listed on the USCIS Form I-9 page. As of October 2026, that is the edition dated 01/20/25 with an expiration date of 05/31/2027, shown in the bottom corner of the form. USCIS has also accepted the 08/01/23 edition that shows the 05/31/2027 expiration. Older versions should not be used for new hires.",
      },
      {
        q: "Where should I store completed I-9 forms?",
        a: "Store I-9s separately from personnel files, for example in a dedicated binder or secure electronic system. This makes them easy to produce during an inspection and limits who sees employees' immigration and identity information. Electronic storage is allowed if the system meets DHS standards for integrity, security and audit trails. Government officials give at least three business days' notice before an inspection.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Form I-9, Employment Eligibility Verification, is the USCIS form every US employer must complete for each new employee to confirm identity and authorization to work. The employee completes Section 1 by the first day of work, and the employer examines documents and completes Section 2 within three business days. Employers keep, not file, the form.</p>

<p>Form I-9 is the first compliance form most employers handle, often on the same day as the W-4. It is not a tax form and it never goes to the IRS, but mistakes carry fines per form and can lead to discrimination claims if handled inconsistently. This guide explains what Form I-9 is, which edition to use in 2026, the step-by-step process for employers, acceptable documents, E-Verify, remote verification, retention rules and the mistakes that cause the most trouble.</p>
<p><em>This is general information, not legal advice. Follow the current USCIS instructions and the M-274 Handbook for Employers.</em></p>

<h2>What Is Form I-9?</h2>
<p>Form I-9 is required under the Immigration Reform and Control Act of 1986. Every US employer, regardless of size, must complete it for every person hired for employment in the United States after November 6, 1986, including US citizens. It records that the employee presented acceptable documents proving identity and employment authorization, and that the employer examined them.</p>
<p>U.S. Citizenship and Immigration Services (USCIS) publishes the form and its instructions on the official <a href="https://www.uscis.gov/i-9">Form I-9 page</a>, and the Handbook for Employers (M-274) on I-9 Central. The completed form stays in your records. You only show it to the government during an inspection by Immigration and Customs Enforcement, the Department of Labor or the Department of Justice.</p>

<h2>Which Form I-9 Edition Should You Use in 2026?</h2>
<p>The current edition is dated 01/20/25 and shows an expiration date of 05/31/2027. You can find the edition date in the lower corner of each page.</p>
<table><thead><tr><th>Edition</th><th>Status as of October 2026</th></tr></thead><tbody>
<tr><td>01/20/25 (expires 05/31/2027)</td><td>Current edition; use for new hires</td></tr>
<tr><td>08/01/23 showing 05/31/2027 expiration</td><td>USCIS has continued to accept it; check the USCIS page before relying on it</td></tr>
<tr><td>08/01/23 showing 07/31/2026 expiration</td><td>Expired; do not use for new hires</td></tr>
<tr><td>10/21/2019 and older</td><td>Do not use</td></tr>
</tbody></table>
<p>Electronic I-9 systems had until July 31, 2026 to update to the version with the 05/31/2027 expiration date. If your HR or payroll system still generates an older version, update it now. You do not need to redo forms that were completed correctly on an edition that was valid at the time.</p>

<h2>How to Complete Form I-9: Employer Steps</h2>
<ol>
<li><strong>Make the job offer first.</strong> Employees complete Form I-9 only after accepting an offer, never as part of the application, to avoid discrimination concerns.</li>
<li><strong>Section 1 (employee):</strong> by the end of the first day of employment, the employee enters their name, address, date of birth, citizenship or immigration status, and signs. SSN is optional unless you use E-Verify. If a preparer or translator helps, they complete Supplement A.</li>
<li><strong>Review Section 1</strong> for completeness. Do not tell the employee which status to choose.</li>
<li><strong>Examine documents.</strong> Within three business days of the first day of work, the employee presents original, unexpired documents: one from List A, or one from List B plus one from List C. You examine them in the employee's physical presence, unless you use the remote alternative procedure.</li>
<li><strong>Section 2 (employer):</strong> record the document titles, issuing authorities, numbers and expiration dates, enter the first day of employment, and sign and date.</li>
<li><strong>Run E-Verify,</strong> if you use it, within three business days of the start date.</li>
<li><strong>Calendar reverification</strong> dates for employees with temporary work authorization, using Supplement B.</li>
<li><strong>Store the form</strong> securely and separately from personnel files.</li>
</ol>
<p>If the job lasts fewer than three business days, both sections must be completed by the end of the first day. For a full onboarding sequence, including the W-4 and state forms, see <a href="/blog/hiring-your-first-employee">hiring your first employee</a>.</p>

<h3>Worked example: counting three business days</h3>
<p>Sam starts work on Wednesday, November 4, 2026. Section 1 is due by the end of Wednesday. Section 2 is due within three business days after the first day: Thursday (1), Friday (2) and Monday (3), so the employer must complete Section 2 by Monday, November 9. If the employer uses E-Verify, the case must also be created by that Monday.</p>

<h2>What Documents Are Acceptable for Form I-9?</h2>
<table><thead><tr><th>List</th><th>Proves</th><th>Common examples</th></tr></thead><tbody>
<tr><td>List A</td><td>Identity and work authorization</td><td>US passport or passport card, Permanent Resident Card (Form I-551), Employment Authorization Document (Form I-766), certain foreign passports with Form I-94</td></tr>
<tr><td>List B</td><td>Identity only</td><td>State driver's license or ID card, school ID with photo, voter registration card, US military card</td></tr>
<tr><td>List C</td><td>Work authorization only</td><td>Unrestricted Social Security card, US birth certificate, certain DHS-issued employment authorization documents</td></tr>
</tbody></table>
<p>The full lists are on the last page of the form. Acceptable receipts (for example, for a lost document) are valid for a limited time. The employee chooses which documents to present. Asking for a specific document, such as "your green card," is a common and costly mistake.</p>

<h2>What Is E-Verify and Do You Need It?</h2>
<p>E-Verify is a free online system run by USCIS that compares Form I-9 information with Social Security Administration and Department of Homeland Security records. Key points:</p>
<ul>
<li>It is voluntary for most private employers.</li>
<li>It is required for federal contractors whose contracts include the FAR E-Verify clause.</li>
<li>Several states require some or all employers to use it; check your state law.</li>
<li>You must still complete Form I-9 for every hire, and you must use E-Verify for all new hires at a participating site, not selectively.</li>
<li>If E-Verify returns a mismatch (a tentative nonconfirmation), the employee has the right to contest it, and you cannot take adverse action while the case is pending.</li>
<li>E-Verify employers in good standing can use the DHS alternative procedure to examine documents remotely by live video.</li>
</ul>

<h2>How to Complete Form I-9 for Remote Employees</h2>
<p>Hiring someone who lives far from your office does not remove the requirement to examine documents within three business days. You have two main options:</p>
<ul>
<li><strong>Authorized representative:</strong> you can designate any person, such as a notary, a friend of the employee or an HR service, to physically examine the documents and complete Section 2 on your behalf. You remain liable for their mistakes, so give clear instructions and check the completed form.</li>
<li><strong>DHS alternative procedure:</strong> if you are enrolled in E-Verify and in good standing, you can examine documents remotely. The employee sends copies of the front and back of each document, you hold a live video call where the employee presents the same documents, you check the alternative procedure box in Section 2, and you keep clear copies.</li>
</ul>
<p>Whichever method you choose, apply it consistently. You may use the alternative procedure only for remote hires and still examine documents in person for onsite hires, but you cannot pick a method based on citizenship, national origin or similar characteristics.</p>

<h2>How to Fix Mistakes on a Form I-9</h2>
<p>Errors are common, and regular self-audits are one of the best ways to reduce risk. When you find a mistake:</p>
<ol>
<li><strong>Section 1 errors:</strong> have the employee correct their own information. Draw a line through the wrong entry, write the correct information, and have the employee initial and date the change.</li>
<li><strong>Section 2 errors:</strong> the employer draws a line through the incorrect information, enters the correct information, and initials and dates the correction.</li>
<li><strong>Several errors on one form:</strong> you can complete the affected section again on a new form and attach it to the original, with a short signed and dated note explaining what happened.</li>
<li><strong>Missing forms:</strong> complete a new form as soon as you discover the problem, using the current date. Never backdate it, and attach a note explaining why it was completed late.</li>
<li><strong>Never use correction fluid</strong> or erase entries, which looks like concealment.</li>
</ol>
<p>Many small employers audit I-9s once a year, alongside year-end payroll and <a href="/blog/form-w-2">W-2</a> preparation. Pick a sample, compare each form with the instructions, and record what you corrected.</p>

<h2>How Long Must You Keep I-9 Forms?</h2>
<p>Keep each Form I-9 for as long as the person works for you. After employment ends, keep it until the later of: three years after the date of hire, or one year after the date employment ended.</p>
<table><thead><tr><th>Employee</th><th>Hire date</th><th>End date</th><th>3 years after hire</th><th>1 year after end</th><th>Destroy after</th></tr></thead><tbody>
<tr><td>A</td><td>Mar 1, 2024</td><td>Jun 30, 2025</td><td>Mar 1, 2027</td><td>Jun 30, 2026</td><td>Mar 1, 2027</td></tr>
<tr><td>B</td><td>Jan 10, 2019</td><td>Oct 15, 2026</td><td>Jan 10, 2022</td><td>Oct 15, 2027</td><td>Oct 15, 2027</td></tr>
</tbody></table>
<p>Set up a simple purge process so you do not keep expired I-9s indefinitely, which increases exposure in an inspection. Different retention periods apply to payroll and tax records; see <a href="/blog/how-long-to-keep-invoices">how long to keep invoices and business records</a>.</p>

<h2>What Are the Penalties for I-9 Violations?</h2>
<p>Penalties fall into three main groups, and the dollar ranges are adjusted for inflation each year:</p>
<ul>
<li><strong>Paperwork violations:</strong> missing forms, missing signatures, late completion or failure to reverify. Fines are charged per form.</li>
<li><strong>Knowingly hiring or continuing to employ unauthorized workers:</strong> higher fines per worker that increase for repeat offenses, plus possible criminal penalties for patterns of violations.</li>
<li><strong>Unfair documentary practices and discrimination:</strong> enforced by the Department of Justice's Immigrant and Employee Rights Section, with civil penalties and back pay.</li>
</ul>
<p>ICE gives employers at least three business days to produce I-9s after a Notice of Inspection. A self-audit, correcting errors with a dated note rather than backdating, reduces risk. Never backdate a form.</p>

<h2>Form I-9 vs W-4 vs W-9: Which Form Is Which?</h2>
<p>New employers often mix up the three onboarding forms because they arrive at the same time. They serve different purposes and go to different places.</p>
<table><thead><tr><th>Form</th><th>Purpose</th><th>Who completes it</th><th>Sent to the government?</th></tr></thead><tbody>
<tr><td>Form I-9</td><td>Verifies identity and work authorization</td><td>Every new employee and the employer</td><td>No, kept on file for inspection</td></tr>
<tr><td>Form W-4</td><td>Tells the employer how much federal income tax to withhold</td><td>Every new employee</td><td>No, kept in payroll records</td></tr>
<tr><td>Form W-9</td><td>Gives a contractor's taxpayer ID for 1099 reporting</td><td>Independent contractors and vendors</td><td>No, kept on file; used to prepare 1099s</td></tr>
</tbody></table>
<p>Employees complete an I-9 and a W-4. Contractors complete a W-9 and send you invoices instead of timesheets. If you pay contractors, ask them for a clear invoice for every payment; they can make one in our <a href="/invoice-generator">free invoice generator</a>, and you will have the records you need for year-end 1099 filing.</p>

<h2>Common Form I-9 Mistakes</h2>
<ul>
<li><strong>Missing the three-business-day deadline</strong> for Section 2.</li>
<li><strong>Requesting specific documents</strong> or more documents than needed.</li>
<li><strong>Completing I-9s before a job offer</strong> is accepted.</li>
<li><strong>Not recording the first day of employment</strong> or document expiration dates.</li>
<li><strong>Reverifying US citizens or permanent residents</strong> when their documents expire. Do not reverify List B documents or permanent resident cards.</li>
<li><strong>Storing I-9s in personnel files.</strong></li>
<li><strong>Using an outdated edition</strong> after its expiration date.</li>
<li><strong>Skipping I-9s for family members, part-timers or short-term staff.</strong> Every employee needs one.</li>
</ul>

<h2>Form I-9 Checklist for New Hires</h2>
<ul>
<li>Offer accepted and start date confirmed</li>
<li>Current edition (01/20/25) ready</li>
<li>Section 1 completed by the end of day one</li>
<li>Documents examined and Section 2 completed within three business days</li>
<li>E-Verify case created, if applicable</li>
<li>Reverification date calendared, if applicable</li>
<li>Form stored separately and retention date recorded</li>
<li>W-4 and state forms collected; payroll set up for <a href="/blog/form-941">Form 941</a> deposits and year-end <a href="/blog/form-w-2">W-2s</a></li>
</ul>
<p>Hiring an employee also changes your tax obligations. Our guides to <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> and <a href="/blog/how-to-do-payroll-yourself">doing payroll yourself</a> cover the next steps. If you are weighing an employee against a contractor, read <a href="/blog/w2-vs-1099">W-2 vs 1099</a> first.</p>
<p>Form I-9 is a simple form with strict timing and consistency rules: same process for every hire, current edition, three business days, and secure retention. While your HR paperwork grows, keep billing simple with our <a href="/invoice-generator">free invoice generator</a>. It requires no sign-up and creates a professional PDF in your browser that you can download and send to clients.</p>
`,
  },
  {
    slug: "youtuber-taxes",
    title: "YouTuber Taxes: Content Creator Tax Guide (2026)",
    description:
      "YouTuber taxes explained: AdSense and sponsorship income, 1099 forms, self-employment tax, gifted products, deductions and a worked example for 2026 creators.",
    category: "tax-compliance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "youtube-sponsorship-invoice-template",
      "self-employment-tax",
      "self-employed-tax-deductions",
    ],
    faqs: [
      {
        q: "Do YouTubers pay taxes on AdSense income?",
        a: "Yes. YouTube Partner Program earnings paid through AdSense are taxable income in the US. For most creators running a channel as a business, the income goes on Schedule C, and the net profit is subject to both income tax and self-employment tax. Google asks US creators for a Form W-9 in AdSense and may withhold 24% backup withholding if valid tax information is missing.",
      },
      {
        q: "What tax form does YouTube send to US creators?",
        a: "Google's help center says it issues year-end forms such as Form 1099-MISC to US creators who meet the reporting requirements, and it lists Forms 1099-K and 1042-S for other situations. Brands that pay you directly may send Form 1099-NEC if they paid you $2,000 or more in 2026. Whether or not you receive any form, all your creator income is taxable.",
      },
      {
        q: "Are free products from brands taxable?",
        a: "Products you receive in exchange for content, such as a review or sponsored mention, are generally taxable income at their fair market value, just like cash payment. Unsolicited items sent with no obligation are less clear-cut, and tax professionals differ on the treatment, especially for items you give away or return. Keep a log of every item, its value and what was expected, and ask a tax professional how to report it.",
      },
      {
        q: "Can I deduct my camera and computer as a YouTuber?",
        a: "Yes, if you use them for your channel business. Equipment used more than 50% for business can often be deducted in the year you buy it under Section 179 or bonus depreciation, or depreciated over several years. If you also use the item personally, deduct only the business-use percentage. Keep receipts and a simple record showing how you estimated business use.",
      },
      {
        q: "Do I have to pay quarterly taxes as a YouTuber?",
        a: "If you expect to owe $1,000 or more in federal tax for the year after withholding and credits, you generally need to make quarterly estimated payments. The four due dates are generally April 15, June 15, September 15 and January 15. For 2026 income, the last payment is due January 15, 2027, and the 2027 schedule starts April 15, 2027. Paying too little can trigger an underpayment penalty even if you pay in full by April.",
      },
      {
        q: "Is a small YouTube channel a hobby or a business?",
        a: "It depends on whether you run it with a genuine profit motive. The IRS looks at factors such as how businesslike you are, your time and effort, your expertise, your history of income or losses and whether you depend on the income. A business can deduct expenses against revenue, while hobby income is taxable with no deduction for hobby expenses under current law.",
      },
      {
        q: "Do non-US YouTubers pay US taxes?",
        a: "Google may withhold US tax on earnings from US viewers for creators outside the United States, which is why it asks for tax information on Form W-8BEN. A tax treaty between your country and the US may reduce the rate. If you do not submit tax information, Google says it may withhold at a higher rate on total earnings. You also owe tax in your own country.",
      },
      {
        q: "Should a YouTuber form an LLC?",
        a: "An LLC can separate business liabilities from personal assets and make the channel look more professional to brands, but it does not lower taxes by itself. A single-member LLC is taxed the same as a sole proprietorship unless you elect S corporation status. Creators with steady profits often compare an S corp election to reduce self-employment tax, which adds payroll and filing costs.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> YouTuber taxes work like any self-employed business: AdSense revenue, sponsorships, affiliate commissions, memberships, merch and products received for content are taxable income. Most creators report it on Schedule C, pay income tax plus 15.3% self-employment tax on net profit, make quarterly estimated payments, and deduct business expenses such as equipment, software and editors.</p>

<p>Many creators find out about taxes the hard way: a channel takes off, money arrives from Google and brands with no tax withheld, and in April a large bill appears. Creator income is just business income, but it comes from many sources, some reported on 1099 forms and some not, and gifted products add an extra complication. This guide explains YouTube taxes and content creator taxes for 2026: what income is taxable, which forms you will see, self-employment tax, deductions, a worked example and the mistakes to avoid.</p>
<p><em>This is general information, not tax advice. Creator situations vary widely, so check with a tax professional.</em></p>

<h2>What Counts as Taxable Income for YouTubers?</h2>
<p>All income from your channel and related activities is taxable, whether paid in cash, by bank transfer, through a platform, or in products. Common sources:</p>
<table><thead><tr><th>Income type</th><th>Typical payer</th><th>Usually reported on</th></tr></thead><tbody>
<tr><td>Ad revenue (YouTube Partner Program)</td><td>Google via AdSense</td><td>Form 1099-MISC from Google, if reporting rules met</td></tr>
<tr><td>YouTube Premium revenue, channel memberships, Super Chat, Super Thanks</td><td>Google via AdSense</td><td>Included in Google's reporting</td></tr>
<tr><td>Sponsorships and brand deals</td><td>Brands or agencies</td><td>Form 1099-NEC if $2,000+ in 2026</td></tr>
<tr><td>Affiliate commissions</td><td>Affiliate networks and retailers</td><td>1099-NEC or 1099-MISC, depending on payer</td></tr>
<tr><td>Fan platforms, tips and digital products</td><td>Payment apps and marketplaces</td><td>Form 1099-K above $20,000 and 200 transactions</td></tr>
<tr><td>Merchandise sales</td><td>Customers via a store platform</td><td>1099-K if thresholds met; also sales tax rules</td></tr>
<tr><td>Products received for content</td><td>Brands</td><td>Often no form, still taxable at fair market value</td></tr>
</tbody></table>
<p>The key rule: income is taxable even if you do not receive a 1099. Forms only help the IRS match what you report. Our <a href="/blog/1099-nec-vs-1099-misc-vs-1099-k">1099-NEC vs 1099-MISC vs 1099-K</a> guide explains the differences.</p>

<h2>How Does Google Handle Taxes for YouTube Creators?</h2>
<p>Google requires every monetized creator to submit tax information in AdSense. US creators submit Form W-9. According to Google's <a href="https://support.google.com/youtube/answer/10391362">US tax requirements for YouTube earnings</a> help page, if valid tax information is missing, Google may apply backup withholding of 24% to earnings. Creators outside the US submit Form W-8BEN (individuals) or W-8BEN-E (businesses), and Google may withhold US tax on earnings from US viewers, at a rate a tax treaty may reduce.</p>
<p>Google does not withhold income tax for US creators who have submitted a valid W-9. That means you are responsible for setting aside and paying your own taxes, just like any freelancer.</p>

<h2>How Much Tax Do YouTubers Pay?</h2>
<p>Most US creators pay two federal taxes on their net profit, plus any state and local income tax:</p>
<ul>
<li><strong>Self-employment tax:</strong> 15.3% on 92.35% of net earnings (12.4% Social Security up to the $184,500 wage base for 2026, plus 2.9% Medicare with no cap, plus 0.9% Additional Medicare Tax above certain income levels). Read <a href="/blog/self-employment-tax">self-employment tax explained</a> for the full calculation.</li>
<li><strong>Federal income tax:</strong> at your marginal rate, after deducting half of self-employment tax, the standard or itemized deduction and, where eligible, the <a href="/blog/qbi-deduction-section-199a">QBI deduction</a>. See the 2026 federal tax brackets.</li>
</ul>

<h2>Worked Example: A Mid-Size Channel's 2026 Taxes</h2>
<p>Priya runs a cooking channel as a sole proprietor. Her 2026 numbers:</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>AdSense revenue (ads, Premium, memberships)</td><td>$30,000</td></tr>
<tr><td>Sponsorships from three brands</td><td>$25,000</td></tr>
<tr><td>Affiliate commissions</td><td>$5,000</td></tr>
<tr><td>Kitchen appliance received in exchange for a review (fair market value)</td><td>$1,500</td></tr>
<tr><td><strong>Gross income</strong></td><td><strong>$61,500</strong></td></tr>
<tr><td>Freelance video editor (1099-NEC issued)</td><td>-$7,200</td></tr>
<tr><td>Camera, lens and lighting (Section 179)</td><td>-$3,100</td></tr>
<tr><td>Software, music licensing and stock footage</td><td>-$1,200</td></tr>
<tr><td>Ingredients and props used only for videos</td><td>-$1,500</td></tr>
<tr><td>Home office and business share of internet</td><td>-$1,000</td></tr>
<tr><td><strong>Net profit (Schedule C)</strong></td><td><strong>$47,500</strong></td></tr>
</tbody></table>
<ul>
<li>Self-employment tax: $47,500 x 92.35% x 15.3% = about $6,712</li>
<li>Deduction for half of SE tax: about $3,356, which reduces income subject to income tax</li>
<li>Income tax depends on filing status, other income and deductions</li>
</ul>
<p>A simple rule many creators use is to set aside 25% to 30% of every payment for taxes, then adjust once they know their real effective rate. Priya also issued a 1099-NEC to her editor because she paid more than $2,000 in 2026; see <a href="/blog/how-to-file-1099-nec">how to file 1099-NEC</a>.</p>

<h2>Are Gifted Products and PR Packages Taxable?</h2>
<p>This is the creator tax question with the least clear-cut answer. The general principle is that income includes the fair market value of property or services received in exchange for services. So:</p>
<ul>
<li><strong>Products received with an obligation</strong> (a review, an unboxing, a dedicated video or social posts): generally taxable income at fair market value.</li>
<li><strong>Products used as payment</strong> instead of cash in a sponsorship: taxable, and the brand may include the value on a 1099.</li>
<li><strong>Unsolicited PR packages with no obligation:</strong> treatment is less settled. Some advisers treat them as taxable when you keep and use them; others take a different view for items you return, donate or discard promptly.</li>
</ul>
<p>Keep a gifted-product log: date, brand, item, estimated retail value, what was expected, and what you did with it. That record lets your tax professional apply a consistent approach.</p>

<h2>What Can YouTubers Deduct?</h2>
<p>You can deduct ordinary and necessary expenses of your channel business. Common deductions:</p>
<ul>
<li>Cameras, lenses, microphones, lighting, computers and storage (consider <a href="/blog/section-179-vs-bonus-depreciation">Section 179 vs bonus depreciation</a>)</li>
<li>Editing software, design tools, music and stock footage licenses</li>
<li>Payments to editors, thumbnail designers, writers and managers</li>
<li>Props, sets and consumables used in videos</li>
<li>A <a href="/blog/home-office-deduction">home office</a> used regularly and exclusively for the business</li>
<li>Business share of phone and internet</li>
<li>Travel to film or attend industry events, and business mileage</li>
<li>Advertising, channel promotion and website costs</li>
<li>Self-employed health insurance premiums, if eligible</li>
<li>Tax preparation and business bookkeeping fees</li>
</ul>
<p>Personal items that just appear on camera, such as everyday clothing, are generally not deductible. Our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> covers more.</p>

<h2>How Much Should a YouTuber Set Aside for Taxes?</h2>
<p>Because no tax is withheld from most creator income, the safest habit is to move a fixed share of every payment into a separate tax account the day it arrives. The right percentage depends on your profit, filing status and state. The table below is an illustrative starting point, not a calculation of your actual tax.</p>
<table><thead><tr><th>Annual net profit</th><th>Illustrative share to set aside</th><th>Why</th></tr></thead><tbody>
<tr><td>Under $20,000</td><td>15% to 20%</td><td>Self-employment tax still applies even when income tax is low</td></tr>
<tr><td>$20,000 to $75,000</td><td>25% to 30%</td><td>SE tax plus federal income tax in the lower brackets, plus state tax</td></tr>
<tr><td>Over $75,000</td><td>30% to 35%</td><td>Higher marginal brackets and state tax</td></tr>
</tbody></table>
<p>Revisit the percentage after your first quarterly payment. If your income jumps mid-year after a viral video or a large brand deal, increase the next estimated payment rather than waiting until April. Paying at least 100% of last year's total tax (110% if your adjusted gross income was over $150,000) through estimates generally protects you from the underpayment penalty, even if this year's income is much higher.</p>

<h2>Do YouTubers Need to Pay State Taxes and Sales Tax?</h2>
<p>Most states with an income tax also tax your creator profit, and some cities do too. If you move during the year or earn from in-person events in other states, you may need to file more than one state return. A few states have no individual income tax, but they may still have business taxes or fees.</p>
<p>Sales tax mostly matters for merch and physical products. If you sell shirts, prints or other goods through your own store, you may need to collect sales tax in states where you have nexus, such as your home state or states where your sales pass economic nexus thresholds. Many marketplaces collect and remit tax for you as marketplace facilitators, but your own standalone store usually does not. Some states also tax digital products. Read <a href="/blog/sales-tax-nexus">sales tax nexus</a> and use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to check rates. Ad revenue and sponsorship fees are generally not subject to sales tax.</p>

<h2>Should a YouTuber Become an LLC or S Corp?</h2>
<p>An LLC is a legal structure, not a tax status. A single-member LLC files Schedule C exactly like a sole proprietor, so it does not change your tax bill. The tax change comes with an S corporation election, which lets you split profit into a reasonable salary (taxed through payroll) and distributions (not subject to self-employment tax).</p>
<p>Using Priya's $47,500 profit as an example, suppose she elected S status and paid herself a $35,000 salary. Social Security and Medicare would apply to the salary but not to the remaining $12,500 of profit, saving roughly $1,900 in payroll taxes. But she would also pay for payroll software, a separate business return (Form 1120-S), possibly state fees and more bookkeeping, which can easily cost $1,000 to $2,500 a year. At her profit level the savings may be small; at higher, steady profit the math often looks better. Compare the details in <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> before electing.</p>

<h2>Records Every Creator Should Keep</h2>
<ul>
<li>Monthly AdSense payment reports and the year-end form from Google</li>
<li>Signed sponsorship agreements and the invoices you sent</li>
<li>Affiliate network statements</li>
<li>A gifted-product log with values</li>
<li>Receipts for equipment, software and services, with business-use percentages</li>
<li>A mileage log for filming trips and events</li>
<li>W-9s from contractors and copies of 1099s you issued</li>
<li>Records of estimated tax payments</li>
</ul>
<p>The IRS generally expects you to keep records supporting your return for at least three years from filing, and longer in some situations, such as equipment you are still depreciating.</p>

<h2>How to Handle Taxes as a YouTuber Step by Step</h2>
<ol>
<li><strong>Submit your W-9 in AdSense</strong> so Google does not apply backup withholding.</li>
<li><strong>Open a separate bank account</strong> for channel income and expenses.</li>
<li><strong>Track every income source monthly</strong>, including products received.</li>
<li><strong>Invoice brands</strong> for sponsorships with clear deliverables and payment terms.</li>
<li><strong>Set aside 25% to 30%</strong> of each payment in a tax savings account.</li>
<li><strong>Make quarterly estimated payments</strong> using Form 1040-ES. See the IRS page on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes">estimated taxes</a> and our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>.</li>
<li><strong>Collect W-9s from contractors</strong> and file 1099-NECs for anyone paid $2,000 or more.</li>
<li><strong>File Schedule C and Schedule SE</strong> with Form 1040, plus any state return.</li>
</ol>

<h2>How to Invoice Brand Sponsorships</h2>
<p>Brands and agencies usually pay against an invoice after content goes live. Include deliverables, usage rights, the posting date and payment terms. Here is an example:</p>
<table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>
<tr><td>Dedicated YouTube integration (60 to 90 seconds), video live Oct 12, 2026</td><td>1</td><td>$4,000.00</td><td>$4,000.00</td></tr>
<tr><td>YouTube Shorts cut-down</td><td>2</td><td>$500.00</td><td>$1,000.00</td></tr>
<tr><td>Paid usage rights, 90 days, organic and paid social</td><td>1</td><td>$1,200.00</td><td>$1,200.00</td></tr>
<tr><td colspan="3"><strong>Total due, net 30</strong></td><td><strong>$6,200.00</strong></td></tr>
</tbody></table>
<p>Create it in our <a href="/invoice-generator">free invoice generator</a> or start from the <a href="/blog/youtube-sponsorship-invoice-template">YouTube sponsorship invoice template</a>. The <a href="/blog/influencer-invoice-template">influencer invoice template</a> covers multi-platform deals.</p>

<h2>Common YouTuber Tax Mistakes</h2>
<ul>
<li><strong>Not saving for taxes</strong> because nothing was withheld.</li>
<li><strong>Reporting only income that came with a 1099.</strong></li>
<li><strong>Ignoring gifted products</strong> received in exchange for content.</li>
<li><strong>Skipping quarterly payments</strong> and paying an estimated tax penalty.</li>
<li><strong>Deducting personal expenses</strong> like everyday clothes or family vacations.</li>
<li><strong>No records for equipment business use.</strong></li>
<li><strong>Forgetting sales tax on merch</strong> in states where you have nexus.</li>
<li><strong>Not issuing 1099-NECs</strong> to editors and other contractors.</li>
</ul>
<p>YouTuber taxes become manageable once you treat your channel like a business: track every income source, save a percentage of each payment, pay quarterly and keep receipts. When a brand deal closes, bill it professionally with our <a href="/invoice-generator">free invoice generator</a>. It needs no sign-up and builds a downloadable PDF in your browser in seconds.</p>
`,
  },
];
