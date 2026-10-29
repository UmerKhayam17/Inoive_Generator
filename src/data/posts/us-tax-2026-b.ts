import type { PostDraft } from "../blog";

export const US_TAX_2026_B_POSTS: PostDraft[] = [
  {
    slug: "one-big-beautiful-bill-small-business",
    title: "One Big Beautiful Bill: Small Business Tax Changes 2026",
    description:
      "One Big Beautiful Bill small business guide: what the OBBBA tax changes mean in 2026 for QBI, bonus depreciation, Section 179, 1099s, R&D, SALT and overtime.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "qbi-deduction-section-199a",
      "section-179-vs-bonus-depreciation",
      "1099-nec-threshold-2026",
    ],
    faqs: [
      {
        q: "When was the One Big Beautiful Bill Act signed into law?",
        a: "The One Big Beautiful Bill Act was signed on July 4, 2025 and became Public Law 119-21. Some provisions applied to the 2025 tax year, such as the tips and overtime deductions and the higher SALT cap, while others started on January 1, 2026, such as the $2,000 Form 1099-NEC threshold and the $400 minimum QBI deduction. Several business rules were made permanent rather than temporary.",
      },
      {
        q: "Did the One Big Beautiful Bill make the QBI deduction permanent?",
        a: "Yes. The 20% qualified business income deduction under Section 199A was due to expire after 2025, and the law made it permanent at the same 20% rate. It also widened the income range over which the wage and specified service limits phase in, to $75,000 for single filers and $150,000 for joint filers, and added a $400 minimum deduction from 2026 for active owners with at least $1,000 of qualified business income.",
      },
      {
        q: "What is the 1099-NEC threshold for 2026?",
        a: "For payments made after December 31, 2025, businesses generally file Form 1099-NEC or 1099-MISC only when they pay a person $2,000 or more in a calendar year, up from $600. The $2,000 figure is set to be adjusted for inflation after 2026. Separately, the Form 1099-K threshold for payment apps and marketplaces went back to more than $20,000 and more than 200 transactions.",
      },
      {
        q: "Is 100% bonus depreciation back for 2026?",
        a: "Yes. The law permanently restored 100% bonus depreciation for qualified property acquired after January 19, 2025. Before the change, the rate had been phasing down and would have been 20% for 2026. Property bought under a binding contract signed on or before January 19, 2025 stays under the old phase-down rules, so check purchase dates carefully when you plan large equipment buys.",
      },
      {
        q: "Can freelancers claim the no tax on overtime deduction?",
        a: "Generally no. The overtime deduction covers the premium portion of overtime pay that the Fair Labor Standards Act requires an employer to pay an employee. Independent contractors are not covered by FLSA overtime rules, so their higher rates for evening or rush work are business income, not qualified overtime. If you have both a W-2 job and a freelance business, the deduction can apply to the W-2 overtime only.",
      },
      {
        q: "What is the SALT deduction cap for 2026?",
        a: "For 2026 the cap on state and local tax deductions for itemizers is $40,400, or $20,200 for married filing separately. It is reduced by 30% of modified adjusted gross income above $505,000, but not below $10,000. The higher cap runs through 2029 and is scheduled to drop back to $10,000 in 2030. Business-level state taxes on a Schedule C or through an entity are handled differently, so ask an adviser.",
      },
      {
        q: "Does the One Big Beautiful Bill reduce self-employment tax?",
        a: "Not directly. The new deductions for tips, overtime, seniors and car loan interest reduce taxable income for federal income tax, not Social Security and Medicare. Self-employment tax is still worked out on net earnings from self-employment at 15.3% up to the wage base. Bigger business deductions, such as Section 179, bonus depreciation and domestic R&D expensing, do lower net profit and therefore self-employment tax.",
      },
      {
        q: "Can small businesses deduct R&D costs immediately again?",
        a: "Yes, for domestic research. New Section 174A lets businesses deduct domestic research and experimental costs, including software development, in the year paid or incurred for tax years beginning after December 31, 2024. Foreign research still has to be amortized over 15 years. Businesses with average gross receipts of $31 million or less also had a retroactive option for 2022 to 2024, but that election window closed on July 6, 2026.",
      },
      {
        q: "Do states follow the One Big Beautiful Bill changes?",
        a: "Not automatically. Each state decides whether to adopt federal changes, and many states have long decoupled from bonus depreciation or limit Section 179. Some states have also taken their own positions on tips, overtime and R&D expensing. Check your state revenue department's guidance or ask a tax professional before assuming a federal deduction also reduces your state tax bill.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The One Big Beautiful Bill Act (OBBBA), signed July 4, 2025, made the 20% QBI deduction permanent, restored 100% bonus depreciation, doubled Section 179 to $2.5 million, let businesses deduct domestic R&D immediately, raised the 1099-NEC threshold to $2,000 from 2026 and added temporary deductions for tips and overtime.</p>

<p>Most of the headlines about the law focused on individual tax cuts, but the One Big Beautiful Bill small business changes are where many owners and freelancers will feel the real difference in 2026. This guide walks through each change in plain English, shows who it helps, and links to our deeper guides on each topic. Where a figure is adjusted for inflation, we use the 2026 number published by the IRS.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. Several provisions are still receiving IRS guidance, and how they apply depends on your entity type, income and state. Check with a qualified tax adviser before you act on any of it.</p>

<h2>One Big Beautiful Bill small business changes at a glance</h2>
<p>Here is a summary of the provisions that matter most to sole proprietors, single-member LLCs, S corporations and small partnerships. The rest of the article explains each one.</p>
<table>
<thead><tr><th>Provision</th><th>Before the law</th><th>After the law (2026)</th></tr></thead>
<tbody>
<tr><td>QBI deduction (Section 199A)</td><td>20%, set to expire after 2025</td><td>20%, permanent, wider phase-in range, $400 minimum</td></tr>
<tr><td>Bonus depreciation</td><td>Phasing down; 20% for 2026</td><td>100% for property acquired after January 19, 2025, permanent</td></tr>
<tr><td>Section 179 expensing</td><td>About $1.25 million limit</td><td>$2,560,000 limit, phase-out from $4,090,000 (2026, inflation adjusted)</td></tr>
<tr><td>Domestic R&D costs</td><td>Amortized over 5 years</td><td>Deductible in the year paid (new Section 174A)</td></tr>
<tr><td>1099-NEC and 1099-MISC threshold</td><td>$600</td><td>$2,000 for payments made after 2025</td></tr>
<tr><td>1099-K threshold</td><td>Scheduled to fall to $600</td><td>More than $20,000 and more than 200 transactions</td></tr>
<tr><td>SALT deduction cap</td><td>$10,000</td><td>$40,400 for 2026, phased down above $505,000 MAGI</td></tr>
<tr><td>Tips and overtime</td><td>Fully taxable</td><td>Deductions up to $25,000 (tips) and $12,500 (overtime), 2025 to 2028</td></tr>
</tbody>
</table>

<h2>QBI deduction: permanent, with a wider phase-in</h2>
<p>The qualified business income deduction lets owners of pass-through businesses deduct up to 20% of their qualified business income. It was one of the 2017 provisions due to expire at the end of 2025. The OBBBA tax changes made it permanent and kept the 20% rate.</p>
<p>Two practical changes help smaller businesses:</p>
<ul>
<li><strong>Wider phase-in range.</strong> Once taxable income passes the threshold ($201,750 single and $403,500 joint for 2026), the wage limits and the specified service business restrictions now phase in over $75,000 (single) or $150,000 (joint), instead of $50,000 and $100,000. That softens the cliff for consultants, accountants and other service providers.</li>
<li><strong>$400 minimum deduction.</strong> From 2026, owners who materially participate in an active business and have at least $1,000 of qualified business income get a deduction of at least $400. This mostly helps side businesses with small profits.</li>
</ul>
<p>For thresholds, specified service rules and worked examples, read our full guide to the <a href="/blog/qbi-deduction-section-199a">QBI deduction under Section 199A</a>.</p>

<h2>Bonus depreciation and Section 179: buy equipment, deduct it now</h2>
<p>Before the law, bonus depreciation was phasing down by 20 percentage points a year and would have been only 20% in 2026. The new law restored 100% bonus depreciation permanently for qualified property acquired after January 19, 2025. Property under a binding contract signed on or before that date keeps the old rate.</p>
<p>Section 179, the other main way to expense equipment in year one, was also expanded. The base limit became $2.5 million with a $4 million phase-out threshold for property placed in service in tax years beginning after 2024. Both figures are now inflation adjusted, giving a 2026 limit of $2,560,000 that starts to shrink once you place more than $4,090,000 of qualifying property in service.</p>
<p>For most small businesses, either route lets you write off a laptop, vehicle, machine or furniture in the year you buy it. The differences, such as Section 179 being capped at business income while bonus depreciation can create a loss, are covered in our guide to <a href="/blog/section-179-vs-bonus-depreciation">Section 179 vs bonus depreciation</a>.</p>
<p>A related new rule, 100% expensing for qualified production property under Section 168(n), applies to certain new factory and manufacturing buildings where construction begins after January 19, 2025 and before 2029. It is aimed at manufacturers rather than service businesses.</p>

<h2>R&D costs: domestic expensing is back</h2>
<p>From 2022, research and experimental costs, including software development, had to be capitalized and amortized over five years (15 years for foreign research). That hit software startups, agencies and product businesses hard, because salaries spent building products could not be deducted in full.</p>
<p>The OBBBA created Section 174A. For tax years beginning after December 31, 2024, domestic research and experimental costs can be deducted in the year paid or incurred, or capitalized over at least 60 months if you prefer. Foreign research still has to be amortized over 15 years. Small businesses with average annual gross receipts of $31 million or less could also apply the new rule back to 2022, but that election closed on July 6, 2026. The details, including what is left for unamortized 2022 to 2024 costs, are in our guide to <a href="/blog/section-174-rd-expensing">Section 174 R&D expensing</a>.</p>

<h2>1099 thresholds: fewer forms from 2026</h2>
<p>This is the change most freelancers and their clients will notice first. For payments made after December 31, 2025, a business generally has to file Form 1099-NEC or Form 1099-MISC only when it pays someone $2,000 or more in a calendar year, up from the $600 threshold that had been in place for decades. The $2,000 figure is scheduled to be indexed for inflation after 2026.</p>
<p>The law also reversed the planned drop in the Form 1099-K threshold. Payment apps and online marketplaces report only when a payee receives more than $20,000 and has more than 200 transactions in the year.</p>
<p>Two points to keep in mind:</p>
<ul>
<li>Income is taxable whether or not you receive a 1099. A smaller pile of forms does not mean less income to report.</li>
<li>Clients still need your W-9 details to decide whether a form is due, so keep collecting and supplying them.</li>
</ul>
<p>See our explainers on the <a href="/blog/1099-nec-threshold-2026">2026 Form 1099-NEC threshold</a> and the <a href="/blog/1099-k-threshold">Form 1099-K threshold</a> for the full rules.</p>

<h2>SALT cap: higher for most owners through 2029</h2>
<p>The cap on itemized deductions for state and local taxes rose from $10,000 to $40,000 for 2025 and $40,400 for 2026, with 1% increases each year through 2029 before reverting to $10,000 in 2030. The cap is reduced by 30% of modified adjusted gross income above $505,000 for 2026, though never below $10,000.</p>
<p>For small business owners this matters mainly if you itemize, live in a high-tax state or own property. The law did not shut down state pass-through entity taxes, which many states offer so partnerships and S corporations can pay state tax at the entity level and deduct it federally. If your business uses one, ask your adviser whether it still makes sense with the higher cap.</p>

<h2>Tips and overtime: new deductions for workers</h2>
<p>Two of the most talked-about OBBBA tax changes are temporary deductions for tax years 2025 through 2028:</p>
<ul>
<li><strong>No tax on tips.</strong> Up to $25,000 of qualified tips per return, including for self-employed people in listed tipped occupations, with a phase-out starting at $150,000 of modified adjusted gross income ($300,000 joint). See our guide to <a href="/blog/no-tax-on-tips-self-employed">no tax on tips for the self-employed</a>.</li>
<li><strong>No tax on overtime.</strong> Up to $12,500 ($25,000 joint) of the premium part of FLSA-required overtime, with the same income thresholds. It applies to employees, not independent contractors. Our <a href="/blog/no-tax-on-overtime">no tax on overtime guide</a> covers who qualifies and how employers report it.</li>
</ul>
<p>Both are deductions, not exclusions, and neither reduces Social Security and Medicare taxes. If you employ tipped staff or pay overtime, the main job for your business is accurate payroll records and correct reporting on Forms W-2.</p>

<h3>Other changes worth knowing</h3>
<p>A few smaller provisions may affect you depending on your situation:</p>
<ul>
<li><strong>Standard deduction.</strong> $16,100 single and $32,200 joint for 2026.</li>
<li><strong>Senior deduction.</strong> An extra $6,000 per person aged 65 or older for 2025 through 2028, phased out above $75,000 MAGI ($150,000 joint).</li>
<li><strong>Car loan interest.</strong> Up to $10,000 of interest on a new, US-assembled vehicle for personal use, 2025 through 2028. Business vehicles do not qualify under this rule; deduct business vehicle costs as normal business expenses instead.</li>
<li><strong>Employer childcare credit.</strong> The maximum rose to $500,000, or $600,000 for eligible small businesses, from 2026.</li>
<li><strong>Trump accounts.</strong> Employers can contribute up to $2,500 a year per employee toward these new children's accounts, generally tax-free to the employee.</li>
<li><strong>Charitable deduction for non-itemizers.</strong> From 2026, up to $1,000 ($2,000 joint) of cash gifts.</li>
</ul>

<h2>What to do now: a 2026 checklist</h2>
<p>Turning the One Big Beautiful Bill small business rules into actual savings comes down to records and timing. A simple plan:</p>
<ol>
<li><strong>Review your 2026 estimated payments.</strong> Bigger deductions may mean you are overpaying. Rework your figures using our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a>.</li>
<li><strong>Time equipment purchases.</strong> Confirm when each asset was acquired and placed in service, and keep invoices that show the date and price.</li>
<li><strong>Separate R&D costs.</strong> Track developer time and contractor costs by project, and note where the work was done.</li>
<li><strong>Update 1099 processes.</strong> Apply the $2,000 threshold to 2026 payments but keep collecting W-9s from every contractor.</li>
<li><strong>Check the deductions you already claim.</strong> Our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> is a good starting point.</li>
<li><strong>Talk to an adviser</strong> about state conformity, entity choice and whether to elect out of any default treatment.</li>
</ol>

<h2>How invoices support your deductions</h2>
<p>Every deduction above depends on documents. Purchase invoices prove what you bought and when, which drives depreciation. Sales invoices support the business income that sets your QBI deduction and your Section 179 limit. Clear invoices with dates, descriptions, quantities and tax lines make year-end work faster and audits less painful.</p>
<p>A practical example: a freelance video editor buys a $6,500 camera package in March 2026 and $1,800 of software. With 100% bonus depreciation or Section 179, the camera can be deducted in full in 2026, but only if the supplier invoice shows the purchase date and the editor can show it was placed in service. The same editor's sales invoices to clients show the income that the QBI deduction is based on.</p>
<p>Who gains most from the One Big Beautiful Bill small business provisions? Broadly, three groups. Owners who buy a lot of equipment, such as trades, transport and production businesses, benefit from full expensing. Software and product businesses benefit from domestic R&D expensing. And service providers with income near the QBI thresholds benefit from the wider phase-in range. Freelancers with modest profits and few purchases will mostly notice the higher 1099 threshold and, if they also hold a W-2 job, the overtime deduction.</p>
<p>It is also worth knowing what the One Big Beautiful Bill small business changes did not do. The law did not change the self-employment tax rate, the rules for deducting a home office, the standard mileage method or the basic rules on what counts as an ordinary and necessary business expense. Your day-to-day bookkeeping stays the same; what changed is how quickly some costs can be deducted and how much of your profit is taxed.</p>

<h2>Conclusion</h2>
<p>The One Big Beautiful Bill small business package is mostly good news for 2026: a permanent QBI deduction, full expensing for equipment and domestic R&D, and fewer 1099 forms. The catch is that every benefit depends on clean records and correct timing. Start by keeping professional, dated invoices for everything you sell, using our free <a href="/invoice-generator/usa">US invoice generator</a>, and browse more guides in our <a href="/blog/category/tax-compliance">tax and compliance section</a>. Then review the changes with a qualified tax adviser before you file.</p>
`,
  },
  {
    slug: "no-tax-on-overtime",
    title: "No Tax on Overtime: 2026 Rules, Limits and Reporting",
    description:
      "No tax on overtime explained: who qualifies, the $12,500 cap, income phase-outs, how qualified overtime is reported on Form W-2 and what it means for employers.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "no-tax-on-tips-self-employed",
      "one-big-beautiful-bill-small-business",
      "w2-vs-1099",
    ],
    faqs: [
      {
        q: "Is overtime pay completely tax-free under the new law?",
        a: "No. Only the premium portion of overtime required by the Fair Labor Standards Act can be deducted, usually the extra half in time-and-a-half. The deduction is capped at $12,500 per year, or $25,000 on a joint return, and it reduces federal income tax only. Social Security and Medicare taxes still apply to all overtime pay, and your employer still withholds federal income tax from it.",
      },
      {
        q: "How much of my overtime pay is deductible?",
        a: "Only the amount above your regular rate. If you earn $30 an hour and are paid $45 for each overtime hour, the deductible part is $15 per overtime hour, not $45. Over a year with 400 overtime hours, that is $6,000 of qualified overtime compensation. The total deduction cannot exceed $12,500 per person, or $25,000 for a married couple filing jointly.",
      },
      {
        q: "What years does the no tax on overtime deduction cover?",
        a: "The deduction applies to tax years 2025 through 2028. Unless Congress extends it, overtime earned from January 1, 2029 will be taxed in the normal way. For 2025, employers were not required to report qualified overtime separately, so many workers calculated it themselves. From 2026, employers report it on Form W-2.",
      },
      {
        q: "Where is qualified overtime shown on Form W-2?",
        a: "For tax years after 2025, employers report the total qualified overtime compensation in box 12 of Form W-2 using code TT, according to IRS guidance. Employers report the full amount paid, even if it is more than the employee can deduct. If the figure is missing or wrong, the employee should ask the employer for a corrected Form W-2c rather than estimating it.",
      },
      {
        q: "Can independent contractors claim the overtime deduction?",
        a: "Generally no. Qualified overtime compensation is overtime that the Fair Labor Standards Act requires an employer to pay an employee. Independent contractors set their own rates and are not covered by FLSA overtime rules, so a higher rate for evening or weekend work is ordinary business income. A worker who is misclassified as a contractor should get advice, because the correct classification may change the answer.",
      },
      {
        q: "Does state-required overtime qualify for the deduction?",
        a: "Only to the extent it matches what federal law requires. The deduction is tied to overtime required by section 7 of the Fair Labor Standards Act. Overtime paid only because of a state law, such as daily overtime after eight hours, or a union contract, generally does not count unless the FLSA would also have required it. Check IRS guidance or ask a tax professional if you work in such a state.",
      },
      {
        q: "Do salaried employees qualify for no tax on overtime?",
        a: "Only if they are non-exempt under the FLSA and their employer must pay them overtime. Many salaried managers and professionals are exempt from FLSA overtime, so any extra pay they get for long hours is voluntary and does not qualify. Salaried non-exempt employees who receive legally required overtime can claim the premium portion like hourly workers.",
      },
      {
        q: "What is the income limit for the overtime deduction?",
        a: "The deduction starts to phase out when modified adjusted gross income exceeds $150,000, or $300,000 for joint filers. The maximum is reduced by $100 for every $1,000 above the threshold. A single filer is fully phased out at $275,000 of MAGI, and a joint couple at $550,000. Married people who file separately cannot claim the deduction at all.",
      },
      {
        q: "How do I claim the overtime deduction on my tax return?",
        a: "You claim it on Schedule 1-A, which is filed with Form 1040. It is available whether you itemize or take the standard deduction. You need a valid Social Security number, and married taxpayers must file jointly. Use the qualified overtime amount from your W-2, apply the $12,500 or $25,000 cap and any income phase-out, and keep your pay stubs as backup.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> No tax on overtime is a federal deduction for tax years 2025 to 2028 that lets employees deduct the premium part of FLSA-required overtime, such as the half in time-and-a-half. The cap is $12,500 a year ($25,000 joint), it phases out above $150,000 of income ($300,000 joint), and it does not cover independent contractors.</p>

<p>The deduction came from the One Big Beautiful Bill Act, signed on July 4, 2025. It is popular with hourly workers, but it is narrower than the slogan suggests: not all overtime pay is deductible, not every worker qualifies, and the money is still subject to Social Security and Medicare. This guide explains how no tax on overtime works in 2026, with worked numbers, and what it means for small employers and freelancers.</p>

<p><strong>Important:</strong> This is general information, not tax or legal advice. The IRS updated its overtime guidance several times in 2026, most recently in August. Check the latest IRS material and speak with a qualified tax professional about your situation.</p>

<h2>What is the no tax on overtime deduction?</h2>
<p>The law created a new federal income tax deduction for "qualified overtime compensation". Key points from IRS guidance:</p>
<ul>
<li>Applies to tax years <strong>2025 through 2028</strong>.</li>
<li>Maximum deduction of <strong>$12,500</strong> per year, or <strong>$25,000</strong> for a married couple filing jointly.</li>
<li>Phases out when modified adjusted gross income (MAGI) exceeds <strong>$150,000</strong> ($300,000 joint).</li>
<li>Available whether you itemize or take the standard deduction. It is claimed on Schedule 1-A with Form 1040.</li>
<li>You need a valid Social Security number, and married taxpayers must file jointly.</li>
</ul>
<p>It is a deduction, not an exclusion. Your overtime still appears in wages on your W-2, your employer still withholds income tax and payroll taxes, and you subtract the qualified amount when you file. It sits alongside the separate deduction for tips, explained in our guide to <a href="/blog/no-tax-on-tips-self-employed">no tax on tips for the self-employed</a>.</p>

<h2>What counts as qualified overtime compensation?</h2>
<p>Qualified overtime compensation is the part of overtime pay that exceeds your regular rate, where the overtime is required by section 7 of the Fair Labor Standards Act (FLSA). Under the FLSA, non-exempt employees must generally be paid at least one and a half times their regular rate for hours over 40 in a workweek. The deductible part is the extra half, not the whole overtime payment.</p>
<p>Worked example: Maria earns $30 an hour as a warehouse supervisor and is non-exempt. She works 10 overtime hours a week for 40 weeks in 2026.</p>
<table>
<thead><tr><th>Item</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Overtime hours</td><td>10 x 40 weeks</td><td>400 hours</td></tr>
<tr><td>Overtime rate</td><td>$30 x 1.5</td><td>$45 per hour</td></tr>
<tr><td>Total overtime pay</td><td>400 x $45</td><td>$18,000</td></tr>
<tr><td>Premium portion (qualified)</td><td>400 x $15</td><td>$6,000</td></tr>
<tr><td>Estimated federal tax saving at 12%</td><td>$6,000 x 12%</td><td>$720</td></tr>
</tbody>
</table>
<p>Maria can deduct $6,000, not $18,000. The other $12,000 is straight-time pay for those hours and stays fully taxable.</p>
<p>Some edge cases trip people up:</p>
<ul>
<li><strong>Double time.</strong> If your employer pays double time, IRS guidance says only the amount minimally needed to satisfy the FLSA counts, so generally only the half-time premium qualifies.</li>
<li><strong>State or union overtime.</strong> Overtime paid only because of a state law (for example daily overtime) or a union contract does not qualify unless the FLSA also required it for those hours.</li>
<li><strong>Exempt employees.</strong> Salaried staff who are exempt from FLSA overtime, such as many managers and professionals, do not qualify even if their employer voluntarily pays extra for long hours.</li>
</ul>

<h2>Limits and phase-outs for no tax on overtime</h2>
<p>The $12,500 or $25,000 cap is reduced by $100 for every $1,000 of MAGI above the threshold. That gives these approximate results:</p>
<table>
<thead><tr><th>Filing status</th><th>MAGI</th><th>Reduction</th><th>Maximum deduction</th></tr></thead>
<tbody>
<tr><td>Single</td><td>$150,000 or less</td><td>$0</td><td>$12,500</td></tr>
<tr><td>Single</td><td>$170,000</td><td>$2,000</td><td>$10,500</td></tr>
<tr><td>Single</td><td>$275,000 or more</td><td>$12,500</td><td>$0</td></tr>
<tr><td>Married filing jointly</td><td>$300,000 or less</td><td>$0</td><td>$25,000</td></tr>
<tr><td>Married filing jointly</td><td>$340,000</td><td>$4,000</td><td>$21,000</td></tr>
<tr><td>Married filing jointly</td><td>$550,000 or more</td><td>$25,000</td><td>$0</td></tr>
</tbody>
</table>
<p>The joint cap applies per return, not per spouse. If both spouses work overtime, their qualified amounts are added together and tested against the $25,000 limit.</p>
<h3>Worked example: a couple near the phase-out</h3>
<p>Andre and Keisha file jointly. Andre is a non-exempt maintenance technician with $14,000 of qualified overtime premium in 2026, shown in box 12 code TT on his W-2. Keisha is a non-exempt nurse with $9,000 of qualified overtime premium. Together they have $23,000 of qualified overtime, which is under the $25,000 joint cap.</p>
<p>Their modified adjusted gross income is $330,000, which is $30,000 above the $300,000 joint threshold. The cap is reduced by 30 x $100 = $3,000, to $22,000. Their deduction is the lesser of $23,000 and $22,000, so they deduct $22,000. Note that Andre's own $14,000 is more than the $12,500 single cap, but on a joint return the limit applies to the couple, not each spouse. If they filed separately, they could claim nothing at all.</p>

<h2>Who qualifies and who does not</h2>
<p>You are likely to qualify if you are a non-exempt W-2 employee who works more than 40 hours in some weeks and receives FLSA overtime. That includes many hourly workers in retail, logistics, healthcare support, construction, hospitality and manufacturing, and salaried non-exempt staff.</p>
<p>You are unlikely to qualify if:</p>
<ul>
<li>You are an independent contractor paid on a Form 1099.</li>
<li>You are an FLSA-exempt employee.</li>
<li>You are married and file separately.</li>
<li>Your MAGI is above the full phase-out level.</li>
<li>Your extra pay comes only from state or contract overtime rules.</li>
</ul>
<p>Not sure which side of the line you are on? Our guide to <a href="/blog/w2-vs-1099">W-2 vs 1099 workers</a> explains the difference.</p>

<h2>What it means for freelancers and contractors</h2>
<p>If you freelance, no tax on overtime generally does not apply to your business income. The FLSA sets overtime rules for employers and employees. A contractor who charges a rush rate or a weekend rate is setting a price, not receiving legally required overtime, so the extra is ordinary self-employment income reported on Schedule C. It is also subject to self-employment tax, as our guide to <a href="/blog/self-employment-tax">self-employment tax</a> explains.</p>
<p>Two situations deserve a closer look:</p>
<ol>
<li><strong>You have a W-2 job and a side business.</strong> You can claim the deduction for qualifying overtime from the job, but not for hours billed to your own clients.</li>
<li><strong>You may be misclassified.</strong> If a company treats you as a contractor but controls your hours like an employee, you may actually be an employee with overtime rights. That is a legal question, so get proper advice.</li>
</ol>
<p>For contractors, the practical lesson is to bill extra hours clearly. Show premium rates as separate line items, for example "Weekend work, 6 hours at $90", and keep timesheets that support them. Our guides to <a href="/blog/how-to-invoice-for-hourly-work">invoicing for hourly work</a> and the <a href="/blog/independent-contractor-invoice">independent contractor invoice</a> show how to lay this out.</p>

<h2>How qualified overtime is reported</h2>
<p>Reporting changed between the first two years of the deduction:</p>
<ul>
<li><strong>2025 (transition year).</strong> Employers were not required to report qualified overtime separately on Form W-2. Employers could give workers a separate statement, and workers without one could calculate the amount themselves using pay stubs and the Schedule 1-A instructions.</li>
<li><strong>2026 onward.</strong> Employers report the total qualified overtime compensation on Form W-2 in box 12 with code TT. IRS guidance says employers report the full amount paid, even if it is more than the employee's deductible limit.</li>
</ul>
<p>For 2026 and later, IRS guidance says employees generally may claim only the qualified overtime that is separately reported on Form W-2. If your employer leaves it off or understates it, ask for a corrected Form W-2c.</p>

<h2>What employers need to do</h2>
<p>For small businesses with hourly staff, the work is mainly in payroll. A checklist for 2026:</p>
<ol>
<li><strong>Classify workers correctly</strong> as exempt or non-exempt under the FLSA, and as employees or contractors.</li>
<li><strong>Track the regular rate properly.</strong> The regular rate can include non-discretionary bonuses and shift differentials, which changes the overtime premium.</li>
<li><strong>Separate FLSA overtime</strong> from overtime paid only under state law or company policy, so you report the right figure.</li>
<li><strong>Update payroll software</strong> so it produces box 12 code TT on 2026 Forms W-2.</li>
<li><strong>Keep timesheets.</strong> A simple <a href="/blog/timesheet-template">timesheet template</a> is enough for many small teams.</li>
<li><strong>Explain pay stubs</strong> to staff, using our guide to <a href="/blog/gross-pay-vs-net-pay">gross pay vs net pay</a> as a starting point.</li>
</ol>
<p>Employers still withhold federal income tax, Social Security and Medicare on all overtime. Employees who expect a large deduction can account for it on Form W-4 so less tax is withheld during the year.</p>
<p>Small employers that use an outside payroll provider should confirm in writing that the provider is calculating the FLSA premium separately and will show it with code TT. If you run payroll yourself in a spreadsheet, add a column for the premium portion of each overtime payment now, rather than trying to rebuild the figure from pay stubs in January.</p>

<h2>No tax on overtime vs no tax on tips</h2>
<p>The two deductions were created by the same law and are often discussed together, but they work differently:</p>
<table>
<thead><tr><th>Feature</th><th>Overtime deduction</th><th>Tips deduction</th></tr></thead>
<tbody>
<tr><td>Maximum</td><td>$12,500 ($25,000 joint)</td><td>$25,000 per return</td></tr>
<tr><td>What is deductible</td><td>Premium part of FLSA overtime only</td><td>Voluntary qualified tips</td></tr>
<tr><td>Income phase-out starts</td><td>$150,000 MAGI ($300,000 joint)</td><td>$150,000 MAGI ($300,000 joint)</td></tr>
<tr><td>Self-employed eligible</td><td>Generally no</td><td>Yes, in listed tipped occupations</td></tr>
<tr><td>Years</td><td>2025 to 2028</td><td>2025 to 2028</td></tr>
<tr><td>Reduces payroll or SE tax</td><td>No</td><td>No</td></tr>
</tbody>
</table>
<p>A worker can claim both if they qualify. A restaurant server who is a non-exempt employee, for example, might deduct qualified tips and the overtime premium for weeks over 40 hours, each within its own cap. The tips rules are the better fit for freelancers in personal service trades, while no tax on overtime is really a deduction for employees.</p>

<h2>Common mistakes to avoid</h2>
<ul>
<li><strong>Deducting the whole overtime payment</strong> instead of the premium portion.</li>
<li><strong>Counting state daily overtime</strong> that the FLSA did not require.</li>
<li><strong>Assuming a bonus is overtime.</strong> Bonuses are not overtime, though non-discretionary bonuses can raise the regular rate used to calculate the premium.</li>
<li><strong>Filing separately</strong> when married, which rules the deduction out.</li>
<li><strong>Treating a 1099 rush fee as overtime.</strong> It is business income.</li>
</ul>

<h3>Planning tips for workers</h3>
<ul>
<li><strong>Keep your pay stubs</strong> until your W-2 arrives and you have checked the code TT figure.</li>
<li><strong>Do not count the full overtime check.</strong> Only the premium portion is deductible.</li>
<li><strong>Remember the end date.</strong> No tax on overtime ends after 2028 unless extended.</li>
<li><strong>Check your state.</strong> States decide separately whether to allow a similar deduction.</li>
<li><strong>Freelancers with side income</strong> should still make estimated payments; see our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a>.</li>
</ul>

<h2>Conclusion</h2>
<p>No tax on overtime is a useful break for non-exempt employees, but it covers only the premium portion of FLSA overtime, caps out at $12,500 per person, and leaves payroll taxes untouched. Contractors generally cannot use it, so the best move for freelancers is clean billing of premium hours and good records. You can create clear, itemized invoices for free with our <a href="/invoice-generator/usa">US invoice generator</a>, and read how the deduction fits with the wider law in our overview of the <a href="/blog/one-big-beautiful-bill-small-business">One Big Beautiful Bill for small businesses</a>. For decisions about your own return, speak with a qualified tax adviser.</p>
`,
  },
  {
    slug: "section-179-vs-bonus-depreciation",
    title: "Section 179 vs Bonus Depreciation: 2026 Limits and Example",
    description:
      "Section 179 vs bonus depreciation for 2026: the $2.56M Section 179 limit, permanent 100% bonus depreciation, key differences and a worked example with numbers.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "standard-mileage-vs-actual-expenses",
      "how-to-calculate-depreciation",
      "capex-vs-opex",
      "one-big-beautiful-bill-small-business",
    ],
    faqs: [
      {
        q: "What is the Section 179 deduction limit for 2026?",
        a: "For tax years beginning in 2026, the maximum Section 179 deduction is $2,560,000. It is reduced dollar for dollar once the cost of qualifying property you place in service in the year exceeds $4,090,000, and it disappears entirely at $6,650,000. These are the inflation-adjusted versions of the $2.5 million limit and $4 million threshold set by the One Big Beautiful Bill Act.",
      },
      {
        q: "Is 100% bonus depreciation permanent?",
        a: "Yes, under current law. The One Big Beautiful Bill Act made 100% bonus depreciation permanent for qualified property acquired after January 19, 2025. Before that, bonus depreciation was phasing down and would have been 20% for 2026 and zero from 2027. Property bought under a binding contract signed on or before January 19, 2025 still follows the older phase-down percentages.",
      },
      {
        q: "Which is better, Section 179 or bonus depreciation?",
        a: "It depends on your income and goals. Bonus depreciation is automatic, has no dollar cap and can create a loss. Section 179 is elective, can be chosen asset by asset, and cannot exceed your business income. Many small businesses use Section 179 for flexibility and let bonus depreciation cover the rest. A tax adviser can model both against your expected income for this year and next.",
      },
      {
        q: "Can I use Section 179 and bonus depreciation together?",
        a: "Yes. The usual order is Section 179 first, then bonus depreciation on the remaining cost, then regular MACRS depreciation on anything left. Combining them lets you pick exactly how much to expense under Section 179 for selected assets while bonus depreciation handles the rest of the year's purchases automatically, unless you elect out for a class of property.",
      },
      {
        q: "Can Section 179 create a business loss?",
        a: "No. The Section 179 deduction is limited to your taxable income from active trades or businesses, including wages if you are also an employee. Any amount over the limit carries forward to future years. Bonus depreciation has no income limit, so it can create or increase a loss, which may then offset other income or carry forward, subject to the excess business loss rules.",
      },
      {
        q: "Does used equipment qualify for bonus depreciation and Section 179?",
        a: "Generally yes, for both. Used property qualifies for bonus depreciation as long as you did not use it before and you did not buy it from a related party. Section 179 also allows used property bought from an unrelated seller. Keep the seller's invoice showing the price, date and description, because the acquisition date matters for the January 19, 2025 cut-off.",
      },
      {
        q: "Can I take Section 179 on a vehicle?",
        a: "Yes, if the vehicle is used more than 50% for business, but limits apply. Heavy SUVs over 6,000 pounds gross vehicle weight have a separate Section 179 cap, which is about $32,000 for 2026 according to published inflation figures. Passenger cars are subject to annual luxury auto depreciation limits. If business use later falls to 50% or less, part of the deduction may be recaptured as income.",
      },
      {
        q: "Do states allow bonus depreciation?",
        a: "Many do not. A large number of states decouple from federal bonus depreciation and require you to add it back and depreciate the asset over time for state tax. Some states also cap Section 179 at a lower amount than the federal limit. This can mean keeping two sets of depreciation records, so check your state's rules or ask your accountant.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the Section 179 vs bonus depreciation choice for 2026, both let you deduct the full cost of equipment in the year you place it in service. Section 179 is elective, capped at $2,560,000 and limited to business income. Bonus depreciation is 100% for property acquired after January 19, 2025, has no dollar cap and can create a loss.</p>

<p>The One Big Beautiful Bill Act made both tools more generous, so most small businesses can now write off a new laptop, van or machine in year one either way. The differences show up in years with low profit, large purchases or state tax bills. This guide compares the two, gives the 2026 limits and works through an example with real numbers.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Depreciation rules have many exceptions, especially for vehicles, real property and state taxes. Check with a qualified tax adviser before choosing a method.</p>

<h2>What is Section 179?</h2>
<p>Section 179 lets a business elect to deduct the cost of qualifying property in the year it is placed in service instead of depreciating it over several years. Qualifying property includes most tangible business equipment, such as computers, machinery, furniture, tools and many vehicles, plus off-the-shelf software and certain improvements to nonresidential buildings, including roofs, HVAC, fire protection and security systems.</p>
<p>The key features of the Section 179 deduction for 2026:</p>
<ul>
<li><strong>Limit:</strong> $2,560,000 for tax years beginning in 2026.</li>
<li><strong>Phase-out:</strong> the limit falls dollar for dollar once qualifying purchases in the year exceed $4,090,000.</li>
<li><strong>Income limit:</strong> the deduction cannot exceed taxable income from your active trades or businesses. The excess carries forward.</li>
<li><strong>Elective:</strong> you choose which assets and how much, and make the election on Form 4562.</li>
<li><strong>Business use:</strong> property must be used more than 50% for business.</li>
</ul>

<h2>What is bonus depreciation?</h2>
<p>Bonus depreciation, formally the special depreciation allowance under Section 168(k), lets you deduct a percentage of the cost of qualified property in its first year. Qualified property is generally property with a MACRS recovery period of 20 years or less, which covers most equipment, vehicles and qualified improvement property.</p>
<p>Under the 2017 law, bonus depreciation dropped from 100% to 80% in 2023, 60% in 2024 and 40% in 2025. The One Big Beautiful Bill Act reversed that. 100% bonus depreciation is now permanent for qualified property acquired after January 19, 2025. The IRS confirmed in Notice 2026-11 that the existing rules carry over with this new date.</p>
<p>Key features:</p>
<ul>
<li><strong>No dollar limit</strong> and no business income limit, so it can create a loss.</li>
<li><strong>Automatic</strong> unless you elect out, and the election out applies to a whole class of property for the year.</li>
<li><strong>Used property</strong> qualifies if you have not used it before and did not buy it from a related party.</li>
<li><strong>Transition election:</strong> for the first tax year ending after January 19, 2025, you could elect 40% instead of 100% on eligible property.</li>
</ul>

<h2>Section 179 vs bonus depreciation: side-by-side comparison</h2>
<table>
<thead><tr><th>Feature</th><th>Section 179</th><th>Bonus depreciation</th></tr></thead>
<tbody>
<tr><td>2026 amount</td><td>Up to $2,560,000</td><td>100% of cost, no cap</td></tr>
<tr><td>Phase-out</td><td>Starts at $4,090,000 of purchases</td><td>None</td></tr>
<tr><td>Can create a loss</td><td>No, limited to business income</td><td>Yes</td></tr>
<tr><td>How it applies</td><td>Elective, asset by asset</td><td>Automatic, elect out by class</td></tr>
<tr><td>Building improvements</td><td>Roofs, HVAC, fire and security systems, qualified improvement property</td><td>Qualified improvement property</td></tr>
<tr><td>Business use test</td><td>More than 50%</td><td>More than 50% for listed property such as vehicles</td></tr>
<tr><td>Recapture if business use drops</td><td>Yes, if 50% or less</td><td>Yes, for listed property</td></tr>
<tr><td>State treatment</td><td>Many states follow, sometimes with lower caps</td><td>Many states decouple</td></tr>
</tbody>
</table>
<p>The order matters when you use both. Section 179 is applied first, to the assets and amounts you choose. Bonus depreciation then applies to the remaining cost of qualified property, and regular MACRS depreciation applies to anything still left. In practice, the Section 179 vs bonus depreciation question is often answered with "both, in that order".</p>
<h3>Vehicles: extra limits apply</h3>
<p>Vehicles are where the two methods most often differ. A heavy SUV, pickup or van with a gross vehicle weight rating over 6,000 pounds is not subject to the annual luxury auto caps, but Section 179 on an SUV in that weight class is capped separately, at about $32,000 for 2026 according to published inflation figures. Bonus depreciation can usually cover the remaining cost. Passenger cars under 6,000 pounds are subject to annual first-year depreciation limits whichever method you use. For any vehicle, the business use must be more than 50%, and you need a mileage log to prove it. If business use later drops to 50% or less, part of the earlier deduction is added back to income.</p>
<h3>Timing: acquired, then placed in service</h3>
<p>Two dates matter. For 100% bonus depreciation, the property must be acquired after January 19, 2025; a binding written contract signed earlier counts as an earlier acquisition date, even if delivery came later. For both methods, the deduction is taken in the year the asset is placed in service, meaning ready and available for its intended use. Equipment ordered in December 2026 but delivered and set up in January 2027 is a 2027 deduction, not a 2026 one.</p>

<h2>Worked example: a freelance studio with a lower-profit year</h2>
<p>Jordan runs a video production business as a single-member LLC taxed as a sole proprietorship. In 2026, Jordan's net profit before depreciation is $60,000. In April, Jordan buys and starts using $80,000 of new camera, lighting and editing equipment, all used 100% for business, with supplier invoices dated in April.</p>
<p><strong>Option A: Section 179 only.</strong> Jordan can elect up to $80,000, but Section 179 is limited to business taxable income. The deduction is capped at $60,000, which brings Schedule C profit to $0. The remaining $20,000 carries forward to 2027.</p>
<p><strong>Option B: bonus depreciation.</strong> The full $80,000 is deducted automatically. Schedule C shows a $20,000 loss. That loss can offset other income on Jordan's return, such as a spouse's wages on a joint return, subject to the excess business loss rules. Any unused loss becomes a net operating loss carried forward.</p>
<p><strong>Option C: mix and match.</strong> Jordan elects Section 179 on $50,000 of the equipment and elects out of bonus depreciation for that class, depreciating the remaining $30,000 over five years under MACRS. That spreads deductions into later years, when Jordan expects higher income and a higher tax bracket.</p>
<table>
<thead><tr><th>Option</th><th>2026 deduction</th><th>2026 Schedule C result</th><th>Left for later years</th></tr></thead>
<tbody>
<tr><td>A: Section 179 only</td><td>$60,000</td><td>$0 profit</td><td>$20,000 carryforward</td></tr>
<tr><td>B: 100% bonus depreciation</td><td>$80,000</td><td>$20,000 loss</td><td>Possible loss carryforward</td></tr>
<tr><td>C: Section 179 plus regular depreciation</td><td>About $56,000</td><td>About $4,000 profit</td><td>About $24,000 over later years</td></tr>
</tbody>
</table>
<p>The Option C figure assumes the half-year convention, under which the first-year MACRS deduction on five-year property is 20% of $30,000, or $6,000. Your actual numbers will depend on the conventions that apply to you.</p>
<p>Which option is best? If Jordan expects 2026 to be a low-income year and 2027 to be much stronger, deferring some deductions can save more tax overall, because deductions are worth more in a higher bracket. Bigger deductions also reduce self-employment tax, and they reduce qualified business income, which lowers the QBI deduction. Our guide to the <a href="/blog/qbi-deduction-section-199a">QBI deduction</a> explains that interaction.</p>

<h2>A larger business example: hitting the Section 179 phase-out</h2>
<p>A construction company buys $4,500,000 of equipment in 2026. Because purchases exceed $4,090,000 by $410,000, the Section 179 limit falls from $2,560,000 to $2,150,000. That rarely matters in practice, because 100% bonus depreciation can cover the rest of the cost. This is one reason the Section 179 vs bonus depreciation choice has become less about the cap and more about flexibility, losses and state rules.</p>

<h2>When to choose Section 179</h2>
<ul>
<li>You want to expense some assets and depreciate others in the same class.</li>
<li>Your state follows Section 179 but not bonus depreciation.</li>
<li>You are improving a commercial building and want to expense a roof, HVAC or security system.</li>
<li>You do not want to create a loss this year.</li>
</ul>
<p>Section 179 is also useful when you want precise control. Because you choose the dollar amount, you can expense exactly enough to bring taxable income down to a target, such as just under a QBI threshold or the top of a tax bracket, and depreciate the rest normally.</p>

<h2>When to choose bonus depreciation</h2>
<ul>
<li>Your purchases are large or your business income is low.</li>
<li>You want a loss to offset other income or carry forward.</li>
<li>You prefer automatic treatment with less paperwork.</li>
<li>You bought used equipment from an unrelated seller and want the full first-year write-off.</li>
</ul>
<p>Remember that deducting everything now is not always best. A deduction taken in a year when you are in the 12% bracket saves less than the same deduction in a later 24% year. Bonus depreciation is all or nothing for each class of property, so if you want to keep deductions for later, electing out for a class, or using Section 179 selectively, gives you that choice. When you weigh Section 179 vs bonus depreciation, look at least two years ahead.</p>

<h2>Records you need for either method</h2>
<p>Both deductions depend on proving what you bought, when you bought it and when you started using it. Keep:</p>
<ol>
<li><strong>The supplier invoice</strong> with date, description, quantity and price. Make sure purchases are not confused with expenses; see <a href="/blog/capex-vs-opex">CapEx vs OpEx</a>.</li>
<li><strong>Proof of the placed-in-service date</strong>, such as delivery notes or installation records.</li>
<li><strong>Business use records</strong> for vehicles and mixed-use items, such as a mileage log.</li>
<li><strong>A fixed asset register</strong> listing cost, method and deductions taken. Our guide on <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a> shows how to set one up.</li>
<li><strong>Organised expense records.</strong> See <a href="/blog/how-to-track-business-expenses">how to track business expenses</a>.</li>
</ol>
<p>Small items may not need depreciation at all. Under the IRS de minimis safe harbor, a business without audited financial statements can elect to expense items costing $2,500 or less per invoice or per item.</p>

<h2>How depreciation shows up on your return</h2>
<p>Sole proprietors report depreciation and Section 179 on Form 4562, and the total flows to Schedule C. Our guide to <a href="/blog/schedule-c-for-freelancers">Schedule C for freelancers</a> walks through the form. Partnerships and S corporations pass Section 179 through to owners on Schedule K-1, where each owner's own limits apply. Large write-offs also show clearly on your <a href="/blog/profit-and-loss-statement">profit and loss statement</a>, which lenders may want to see.</p>
<p>Before year-end, review planned purchases alongside your <a href="/blog/year-end-invoicing-checklist">year-end invoicing checklist</a>, so income and deductions land in the year you intend.</p>

<h2>Conclusion</h2>
<p>For 2026, the Section 179 vs bonus depreciation decision is less about which one is bigger and more about control. Bonus depreciation gives a permanent, uncapped 100% write-off. Section 179 lets you choose asset by asset and avoids creating a loss. Many businesses use both. Whichever you pick, it starts with good paperwork, so keep dated invoices for what you buy and sell. You can create professional invoices free with our <a href="/invoice-generator/usa">US invoice generator</a>, and read our overview of the <a href="/blog/one-big-beautiful-bill-small-business">One Big Beautiful Bill for small businesses</a> for the wider picture. Confirm your plan with a qualified tax adviser.</p>
`,
  },
  {
    slug: "qbi-deduction-section-199a",
    title: "QBI Deduction (Section 199A): 2026 Thresholds and Examples",
    description:
      "QBI deduction guide for 2026: the permanent 20% Section 199A deduction, $201,750 and $403,500 thresholds, SSTB rules, the new $400 minimum and worked examples.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "federal-tax-brackets-2026",
      "one-big-beautiful-bill-small-business",
      "schedule-c-for-freelancers",
      "s-corp-vs-llc",
    ],
    faqs: [
      {
        q: "What is the QBI deduction?",
        a: "The qualified business income deduction, under Section 199A, lets owners of sole proprietorships, partnerships, S corporations and some trusts deduct up to 20% of their qualified business income on their personal return. It reduces taxable income but not adjusted gross income or self-employment tax. It is claimed on Form 8995 or Form 8995-A, whether or not you itemize.",
      },
      {
        q: "Is the QBI deduction permanent?",
        a: "Yes. The deduction was originally set to expire after 2025, but the One Big Beautiful Bill Act, signed on July 4, 2025, made it permanent and kept the 20% rate. The law also widened the phase-in ranges for higher earners and added a minimum deduction of $400 from 2026 for active owners with at least $1,000 of qualified business income.",
      },
      {
        q: "What are the QBI deduction income thresholds for 2026?",
        a: "For 2026, the threshold is $201,750 of taxable income before the QBI deduction for single and head of household filers, $201,775 for married filing separately, and $403,500 for married filing jointly. Above the threshold, limits phase in over $75,000 for single filers and $150,000 for joint filers, so they apply in full above $276,750 and $553,500.",
      },
      {
        q: "What is a specified service trade or business?",
        a: "A specified service trade or business (SSTB) is one in health, law, accounting, actuarial science, performing arts, consulting, athletics, financial services, brokerage, investment management, trading or dealing in securities, or any business whose main asset is the reputation or skill of its owners or employees. Engineering and architecture are excluded. SSTB owners lose the deduction gradually once income passes the threshold.",
      },
      {
        q: "Can freelancers and sole proprietors claim the QBI deduction?",
        a: "Yes. Most freelancers who file Schedule C qualify, because a sole proprietorship is a pass-through business. Your qualified business income is generally your net profit minus the deductible part of self-employment tax, self-employed health insurance and retirement plan contributions. If your taxable income is under the threshold, even consultants and other specified service providers get the full deduction.",
      },
      {
        q: "Does the QBI deduction reduce self-employment tax?",
        a: "No. The QBI deduction reduces federal income tax only. Self-employment tax is calculated on net earnings from self-employment before the QBI deduction. It also does not reduce adjusted gross income, so it will not help you qualify for credits or deductions that depend on AGI. It simply comes off your taxable income after AGI is worked out.",
      },
      {
        q: "Do W-2 wages from my job count as qualified business income?",
        a: "No. Wages you earn as an employee are not qualified business income. Neither are reasonable compensation paid to you by your own S corporation, guaranteed payments from a partnership, capital gains, or most interest and dividend income. Only the net income from the business activity itself counts. Wages your business pays to employees can, however, help you above the threshold.",
      },
      {
        q: "What is the new $400 minimum QBI deduction?",
        a: "Starting with 2026 tax years, taxpayers who materially participate in an active trade or business and have at least $1,000 of qualified business income from such businesses get a QBI deduction of at least $400. Both amounts are scheduled to be indexed for inflation after 2026. It mainly helps people with small side businesses whose 20% deduction would otherwise be under $400.",
      },
      {
        q: "Which form do I use to claim the QBI deduction?",
        a: "Most small business owners use Form 8995, the simplified computation, if their taxable income before the QBI deduction is at or below the threshold and they are not patrons of agricultural cooperatives. Owners above the threshold, or with more complex situations, use Form 8995-A and its schedules. The deduction then goes on Form 1040, after adjusted gross income.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The QBI deduction (Section 199A) lets owners of pass-through businesses deduct up to 20% of qualified business income. It is now permanent. For 2026, owners with taxable income under $201,750 (single) or $403,500 (joint) get the full deduction, even in service fields. Above those levels, wage limits and specified service rules phase in.</p>

<p>For freelancers, sole proprietors, partners and S corporation owners, this deduction is one of the most valuable tax breaks available. It was due to end after 2025, but the One Big Beautiful Bill Act made it permanent and improved it for smaller businesses. This guide explains who qualifies, what counts as qualified business income, the 2026 thresholds, how specified service businesses are treated, and two worked examples.</p>

<p><strong>Important:</strong> This is general information, not tax advice. The QBI rules have many technical details, including aggregation, rental real estate and losses carried from earlier years. Check with a qualified tax adviser before relying on these figures.</p>

<h2>What is the QBI deduction?</h2>
<p>The qualified business income deduction allows eligible taxpayers to deduct up to 20% of their qualified business income (QBI) from a qualified trade or business, plus 20% of qualified REIT dividends and publicly traded partnership income. It is claimed on your personal return, so it applies to:</p>
<ul>
<li>Sole proprietors and single-member LLCs filing Schedule C</li>
<li>Partners in partnerships and multi-member LLCs</li>
<li>Shareholders in S corporations</li>
<li>Some trusts and estates</li>
</ul>
<p>The business must be a qualified trade or business carried on in the United States. Performing services as an employee is not a trade or business for this purpose, which is why wages never count. C corporations do not get it, because they already pay a flat 21% corporate rate. The deduction is available whether you itemize or take the standard deduction, but it does not reduce adjusted gross income or self-employment tax.</p>

<h2>What changed in 2026: permanent and broader</h2>
<p>The One Big Beautiful Bill Act made three changes to Section 199A:</p>
<ol>
<li><strong>Permanence.</strong> The deduction no longer expires, and the rate stays at 20%.</li>
<li><strong>Wider phase-in ranges.</strong> Above the threshold, the limits now phase in over $75,000 of taxable income for single filers and $150,000 for joint filers, up from $50,000 and $100,000.</li>
<li><strong>A $400 minimum deduction.</strong> From 2026, if you materially participate in an active business and have at least $1,000 of QBI from active businesses, your deduction is at least $400. Both figures are set to be indexed for inflation after 2026.</li>
</ol>
<p>For a summary of the other business changes in the same law, see our overview of the <a href="/blog/one-big-beautiful-bill-small-business">One Big Beautiful Bill for small businesses</a>.</p>

<h2>What counts as qualified business income?</h2>
<p>QBI is the net amount of income, gain, deduction and loss from a qualified trade or business conducted in the United States. For a sole proprietor, the starting point is the net profit on Schedule C (see our guide to <a href="/blog/schedule-c-for-freelancers">Schedule C for freelancers</a>), reduced by:</p>
<ul>
<li>The deductible half of self-employment tax</li>
<li>Self-employed health insurance deductions</li>
<li>Contributions to self-employed retirement plans, such as a SEP-IRA or solo 401(k)</li>
</ul>
<p>These items are not QBI:</p>
<ul>
<li>Wages you earn as an employee</li>
<li>Reasonable compensation an S corporation pays you</li>
<li>Guaranteed payments from a partnership for services</li>
<li>Capital gains and losses, and most interest and dividend income</li>
</ul>
<p>Business deductions such as depreciation also reduce QBI. Writing off a large equipment purchase with Section 179 or bonus depreciation lowers your QBI and therefore your 20% deduction, which is worth keeping in mind; our guide to <a href="/blog/section-179-vs-bonus-depreciation">Section 179 vs bonus depreciation</a> covers the trade-offs.</p>

<h2>2026 QBI deduction thresholds</h2>
<p>Whether the extra limits apply depends on your taxable income before this deduction. The 2026 figures from IRS Revenue Procedure 2025-32 are:</p>
<table>
<thead><tr><th>Filing status</th><th>Threshold</th><th>Phase-in range</th><th>Limits apply in full above</th></tr></thead>
<tbody>
<tr><td>Single, head of household</td><td>$201,750</td><td>$75,000</td><td>$276,750</td></tr>
<tr><td>Married filing separately</td><td>$201,775</td><td>$75,000</td><td>$276,775</td></tr>
<tr><td>Married filing jointly</td><td>$403,500</td><td>$150,000</td><td>$553,500</td></tr>
</tbody>
</table>
<p>Below the threshold, the deduction is simply the lesser of 20% of QBI or 20% of taxable income (minus net capital gain). Above it, two extra rules come into play.</p>

<h3>Above the threshold: the W-2 wage and property limit</h3>
<p>For each business, the deduction is limited to the greater of:</p>
<ul>
<li>50% of the W-2 wages the business paid, or</li>
<li>25% of W-2 wages plus 2.5% of the unadjusted basis of qualified property (UBIA), meaning the original cost of depreciable assets still within their depreciation period.</li>
</ul>
<p>A one-person consultancy with no employees and few assets has almost no wages or property, so once income is above the full phase-in level, its deduction can drop to zero. Within the phase-in range, the limit applies gradually.</p>

<h2>Specified service trades or businesses (SSTBs)</h2>
<p>Specified service trades or businesses get special treatment. These include businesses in health, law, accounting, actuarial science, performing arts, consulting, athletics, financial services, brokerage services, investing and investment management, trading, dealing in securities, and any business where the main asset is the reputation or skill of its owners or employees. Engineering and architecture are specifically excluded.</p>
<p>The rules for SSTB owners work like this:</p>
<ul>
<li><strong>Below the threshold:</strong> full deduction, just like any other business.</li>
<li><strong>Inside the phase-in range:</strong> only a shrinking percentage of QBI, wages and property is counted.</li>
<li><strong>Above the range:</strong> no deduction at all from the SSTB.</li>
</ul>
<p>Many freelancers are not SSTBs. A web developer, graphic designer, copywriter, photographer or tradesperson is usually not in a listed field. Consultants, accountants, lawyers and health practitioners are. If you are unsure, the Treasury regulations give detailed definitions, and an adviser can review your activities.</p>

<h2>Worked example 1: a freelancer below the threshold</h2>
<p>Sam is a single freelance consultant with Schedule C net profit of $130,000 in 2026 and no other income. Consulting is an SSTB, but Sam is under the threshold, so the SSTB rule does not matter.</p>
<table>
<thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Net profit</td><td>Schedule C</td><td>$130,000</td></tr>
<tr><td>Deductible half of SE tax</td><td>$130,000 x 92.35% x 15.3% / 2</td><td>About $9,185</td></tr>
<tr><td>Qualified business income</td><td>$130,000 - $9,185</td><td>$120,815</td></tr>
<tr><td>Taxable income before QBI</td><td>$120,815 - $16,100 standard deduction</td><td>$104,715</td></tr>
<tr><td>20% of QBI</td><td>$120,815 x 20%</td><td>$24,163</td></tr>
<tr><td>20% of taxable income</td><td>$104,715 x 20%</td><td>$20,943</td></tr>
<tr><td>QBI deduction (the lesser)</td><td></td><td>$20,943</td></tr>
</tbody>
</table>
<p>Sam's deduction is capped by taxable income, not by QBI. At a 22% marginal rate, it saves roughly $4,600 of federal income tax. Self-employment tax is unchanged; see our guide to <a href="/blog/self-employment-tax">self-employment tax</a>.</p>

<h2>Worked example 2: an SSTB owner in the phase-in range</h2>
<p>Priya and Dev are married filing jointly. Priya runs a consulting practice (an SSTB) with $300,000 of QBI and no employees. Their 2026 taxable income before the deduction is $478,500, which is $75,000 over the $403,500 threshold, or halfway through the $150,000 phase-in range.</p>
<ol>
<li><strong>Applicable percentage:</strong> 100% minus ($75,000 / $150,000) = 50%. Only 50% of the SSTB's QBI counts: $150,000.</li>
<li><strong>Tentative deduction:</strong> 20% x $150,000 = $30,000.</li>
<li><strong>Wage limit:</strong> no W-2 wages and little property, so the limit is $0.</li>
<li><strong>Phase-in reduction:</strong> the $30,000 excess over the wage limit is reduced by 50% ($75,000 / $150,000), leaving $15,000.</li>
</ol>
<p>The couple's deduction is $15,000, compared with $60,000 if their income had been below the threshold. Under the old $100,000 phase-in range, they would have been fully phased out at this income level and received nothing. Paying wages, including reasonable salary through an S corporation, can change the result; our comparison of <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> and <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> explains the structures.</p>

<h3>Worked example 3: a small side business and the $400 minimum</h3>
<p>Lee has a full-time W-2 job and runs a weekend furniture repair business, which Lee works in personally and materially participates in. In 2026 the business makes $1,600 of qualified business income. Twenty percent of that is $320, but because Lee has at least $1,000 of QBI from an active business, the new minimum rule lifts the deduction to $400. Had the business made only $900, the minimum would not apply and the deduction would be 20% of $900, or $180. The minimum does not help passive investors, and both the $400 and $1,000 figures are scheduled to rise with inflation after 2026, so check the current amounts each year.</p>

<h2>Special situations: losses, rentals and more than one business</h2>
<p>A few situations come up often for small business owners:</p>
<ul>
<li><strong>Business losses.</strong> If your combined QBI is negative for the year, you get no deduction, and the loss carries forward to reduce QBI in the following year. This can surprise owners who have a strong year straight after a weak one.</li>
<li><strong>Several businesses.</strong> QBI is worked out for each business and then combined. A loss in one business reduces the income from the others. Above the threshold, owners can sometimes elect to aggregate related businesses so their wages and property are tested together.</li>
<li><strong>Rental real estate.</strong> Rentals can count as a trade or business if the activity is regular and continuous. The IRS offers a safe harbor that generally requires at least 250 hours of rental services a year and separate books and records for each enterprise.</li>
<li><strong>Partnerships and S corporations.</strong> Your share of QBI, W-2 wages and property basis is reported to you on Schedule K-1, usually with a supplemental statement. Keep it with your return.</li>
</ul>
<p>Each of these rules has details that are easy to get wrong, so these are areas where paying for professional review is often worth it.</p>

<h2>How to claim the QBI deduction</h2>
<ol>
<li><strong>Work out QBI</strong> for each business, after the self-employment tax, health insurance and retirement adjustments.</li>
<li><strong>Check the threshold</strong> using taxable income before the QBI deduction.</li>
<li><strong>Use Form 8995</strong> if you are at or below the threshold, or <strong>Form 8995-A</strong> if you are above it.</li>
<li><strong>Carry forward losses.</strong> A net QBI loss in one year reduces QBI in the next year.</li>
<li><strong>Adjust estimated payments.</strong> Our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> shows how.</li>
</ol>

<h3>Tips to protect the deduction</h3>
<ul>
<li><strong>Keep business income documented.</strong> QBI starts with your sales, so number and date every invoice. A <a href="/blog/consulting-invoice-template">consulting invoice template</a> keeps service billing consistent.</li>
<li><strong>Watch the threshold</strong> if you are near it. Retirement contributions and timing of income and expenses can keep taxable income under the line.</li>
<li><strong>Keep tips separate.</strong> If you are self-employed in a tipped occupation, record tips apart from fees so you and your preparer can apply both the QBI rules and the separate tips deduction correctly; see our guide to <a href="/blog/no-tax-on-tips-self-employed">no tax on tips for the self-employed</a>.</li>
<li><strong>Review your entity</strong> every few years as income grows.</li>
<li><strong>Remember the knock-on effects.</strong> Larger retirement contributions or equipment write-offs reduce QBI as well as taxable income, so the net saving is slightly smaller than the headline deduction suggests.</li>
</ul>

<h2>Conclusion</h2>
<p>The QBI deduction is now a permanent part of the tax code, and for most freelancers and small business owners under $201,750 (single) or $403,500 (joint) of taxable income, it is a straightforward 20% deduction. Above those levels, the wage limit and SSTB rules need careful planning. Either way, the deduction starts with accurate records of your business income, so create clear, numbered invoices for free with our <a href="/invoice-generator/usa">US invoice generator</a>, and confirm your figures with a qualified tax adviser before you file.</p>
`,
  },
  {
    slug: "section-174-rd-expensing",
    title: "Section 174 R&D Expensing: The New 174A Rules Explained",
    description:
      "Section 174 R&D expensing is back for domestic research. Learn how new Section 174A works, what happened to 2022-2024 costs and what it means for developers.",
    category: "tax-compliance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "one-big-beautiful-bill-small-business",
      "web-development-invoice-template",
      "section-179-vs-bonus-depreciation",
    ],
    faqs: [
      {
        q: "Can I deduct R&D expenses immediately in 2026?",
        a: "Yes, for domestic research. Under new Section 174A, domestic research and experimental expenditures paid or incurred in tax years beginning after December 31, 2024 can be deducted in full in the year they are paid or incurred. You can instead elect to capitalize them and amortize over at least 60 months. Research performed outside the United States must still be amortized over 15 years.",
      },
      {
        q: "What is the difference between Section 174 and Section 174A?",
        a: "Section 174 now covers foreign research and experimental expenditures, which must be capitalized and amortized over 15 years. Section 174A, added by the One Big Beautiful Bill Act, covers domestic research and experimental expenditures and allows them to be deducted immediately for tax years beginning after December 31, 2024. Before the law, Section 174 required five-year amortization for domestic costs from 2022 to 2024.",
      },
      {
        q: "Is software development still treated as R&D?",
        a: "Yes. Costs paid or incurred in connection with developing software continue to be treated as research or experimental expenditures. That means domestic software development costs, such as developer salaries, can now be deducted immediately under Section 174A, while software development performed outside the United States must still be amortized over 15 years under Section 174.",
      },
      {
        q: "What was the small business retroactive election for Section 174A?",
        a: "Businesses with average annual gross receipts of $31 million or less could elect to apply Section 174A back to tax years beginning after December 31, 2021, by filing amended returns for 2022 to 2024 and claiming refunds. The deadline was July 6, 2026, or earlier if the normal refund period expired first. That window has now closed, so remaining unamortized costs follow the other transition options.",
      },
      {
        q: "What happens to R&D costs I capitalized in 2022 to 2024?",
        a: "Any business, regardless of size, could elect to deduct the remaining unamortized domestic research costs from 2022 to 2024 in full in its first tax year beginning after December 31, 2024, or spread them evenly over that year and the next. For a calendar-year business, that means 2025, or 2025 and 2026. If no election was made, the costs continue to be amortized on their original schedule.",
      },
      {
        q: "Do foreign contractors count as foreign research?",
        a: "Generally, research is foreign if it is conducted outside the United States, Puerto Rico and US territories. If you pay developers or engineers abroad to build software or products for you, those costs are typically foreign research and must be amortized over 15 years, even if your business is based in the US. Keep contracts and invoices that show where the work was performed.",
      },
      {
        q: "Does Section 174A affect the R&D tax credit?",
        a: "Yes. The research credit under Section 41 still exists, but the law restored the rule that your Section 174A deduction is reduced by the amount of the credit, unless you elect a reduced credit instead. Qualified small businesses may also be able to apply part of the credit against payroll taxes. Ask a tax professional to model the credit and the deduction together.",
      },
      {
        q: "Are freelance developers affected by Section 174A?",
        a: "It depends on who bears the risk and owns the work. If you build your own product, app or software tool, your development costs are likely research and experimental expenditures. If you are paid by a client to build software that the client owns, and you get paid whether or not it works, the client generally bears those costs instead. The rules for contract research are technical, so get advice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Section 174 R&D expensing is back for domestic work. Under new Section 174A, US research and experimental costs, including software development, paid in tax years beginning after December 31, 2024 can be deducted immediately. Foreign research is still amortized over 15 years, and 2022 to 2024 costs had special catch-up options.</p>

<p>From 2022 to 2024, businesses that developed software or products had to spread research costs over five years, even though they paid the salaries and contractors in cash right away. For small software companies and startups, that created taxable profits on paper and real tax bills. The One Big Beautiful Bill Act, signed on July 4, 2025, fixed this for domestic research. This guide explains how Section 174 R&D expensing works now, what happened to earlier years and what it means for developers and agencies.</p>

<p><strong>Important:</strong> This is general information, not tax advice. Research cost rules are technical, and the right elections depend on your filing history and state. Check with a qualified tax adviser before acting.</p>

<h2>What is Section 174 R&D expensing?</h2>
<p>Section 174 of the Internal Revenue Code governs research and experimental expenditures, often called R&E costs. These are costs of developing or improving a product, process, formula, invention or software where there is uncertainty about the capability, method or design. Typical examples include:</p>
<ul>
<li>Salaries and wages of engineers, developers and designers working on development</li>
<li>Contractor fees for development work</li>
<li>Materials and supplies used in experiments and prototypes</li>
<li>Depreciation of equipment used in research (the depreciation, not the purchase price)</li>
<li>Patent costs and an allocable share of overhead</li>
</ul>
<p>Land and the cost of acquiring depreciable property are not R&E costs themselves, and neither are routine quality control testing or market research.</p>
<h3>What usually counts and what usually does not</h3>
<table>
<thead><tr><th>Usually R&E</th><th>Usually not R&E</th></tr></thead>
<tbody>
<tr><td>Writing code for a new app, feature or internal tool</td><td>Routine bug fixes after release, in many cases</td></tr>
<tr><td>Designing and testing a new product prototype</td><td>Quality control testing of finished products</td></tr>
<tr><td>Wages of staff doing development work</td><td>Sales, marketing and market research</td></tr>
<tr><td>Contractor fees for development you own and bear the risk of</td><td>Work you do for a client who owns the result and pays regardless</td></tr>
<tr><td>Depreciation on equipment used in research</td><td>The purchase price of that equipment</td></tr>
</tbody>
</table>
<p>The line between development and maintenance can be blurry, especially for software. IRS guidance on the 2022 to 2024 rules treated a broad range of software activity, including planning, coding and testing, as development. If you are unsure where a cost falls, document what the work involved and ask an adviser.</p>

<h2>How the rules changed: a short history</h2>
<table>
<thead><tr><th>Tax years</th><th>Domestic R&E</th><th>Foreign R&E</th></tr></thead>
<tbody>
<tr><td>Before 2022</td><td>Deduct immediately, or elect to amortize</td><td>Deduct immediately, or elect to amortize</td></tr>
<tr><td>2022 to 2024</td><td>Capitalize, amortize over 5 years</td><td>Capitalize, amortize over 15 years</td></tr>
<tr><td>Tax years beginning after December 31, 2024</td><td>Deduct immediately under Section 174A, or elect to amortize over at least 60 months</td><td>Capitalize, amortize over 15 years under Section 174</td></tr>
</tbody>
</table>
<p>The 2022 to 2024 rules came from the 2017 Tax Cuts and Jobs Act. The amortization also used a mid-year convention, so in the first year a business could deduct only 10% of domestic costs (half of one-fifth). A startup that spent $500,000 on developer salaries in 2023 could deduct only $50,000 that year.</p>

<h2>Section 174A: domestic research deducted immediately</h2>
<p>Under Section 174A, domestic research or experimental expenditures paid or incurred in tax years beginning after December 31, 2024 can be deducted in the year paid or incurred. Taxpayers can instead elect to capitalize and amortize them over at least 60 months, starting when the business first benefits from the research. That option can help a business that is in a loss position and would rather save deductions for later.</p>
<p>Section 174, which now covers only foreign research, still requires 15-year amortization. Research is foreign if it is conducted outside the United States, Puerto Rico and US territories. If foreign-research property is disposed of or abandoned, the remaining costs generally cannot be written off immediately.</p>
<p>For a small business, Section 174 R&D expensing under 174A works much like ordinary business expenses again, but the costs still need to be identified and tracked as R&E, because of the research credit and possible elections.</p>

<h2>Software developers: still treated as R&D</h2>
<p>The law keeps the rule that software development costs are treated as research or experimental expenditures. That cuts both ways:</p>
<ul>
<li><strong>Good news:</strong> domestic software development costs, including salaries of US-based developers, can now be deducted immediately.</li>
<li><strong>The catch:</strong> software development done outside the US, including by overseas freelancers or offshore agencies, must still be amortized over 15 years.</li>
</ul>
<p>Who carries the costs depends on the contract. If you build your own product, such as a SaaS app or plugin, your development spending is likely R&E. If a client pays you to build software they own, and you are paid regardless of whether it succeeds, the client generally bears the R&E costs, not you. Contracts that tie your payment to success, or that let you keep rights to use the code, can change that. Our <a href="/blog/web-development-invoice-template">web development invoice template</a> helps you document what was delivered and when.</p>

<h2>Worked example: a small SaaS company in 2026</h2>
<p>A calendar-year software company with $4 million of annual revenue spends the following on development in 2026:</p>
<table>
<thead><tr><th>Cost</th><th>Amount</th><th>Treatment</th><th>2026 deduction</th></tr></thead>
<tbody>
<tr><td>US developer salaries</td><td>$400,000</td><td>Domestic, Section 174A</td><td>$400,000</td></tr>
<tr><td>US freelance developers</td><td>$60,000</td><td>Domestic, Section 174A</td><td>$60,000</td></tr>
<tr><td>Developers abroad</td><td>$120,000</td><td>Foreign, 15 years, mid-year convention</td><td>$4,000</td></tr>
<tr><td>Total</td><td>$580,000</td><td></td><td>$464,000</td></tr>
</tbody>
</table>
<p>The foreign figure is $120,000 divided over 15 years ($8,000 a year), halved for the mid-year convention in the first year. Under the 2022 to 2024 rules, the domestic $460,000 would have produced only a $46,000 first-year deduction. The difference in taxable income, $414,000, is large enough to change whether the company pays tax at all.</p>
<p>The company should still keep detailed records: time tracking by project, contractor invoices that show where work was performed, and payroll records. A simple <a href="/blog/timesheet-template">timesheet template</a> helps allocate staff time between development and other duties.</p>

<h2>What happened to 2022 to 2024 costs</h2>
<p>Many businesses still had unamortized domestic R&E from 2022, 2023 and 2024 on their books. The law gave two transition options.</p>
<h3>Small business retroactive election (now closed)</h3>
<p>Businesses with average annual gross receipts of $31 million or less (the Section 448(c) test, measured for the first tax year beginning after December 31, 2024) could elect to apply Section 174A retroactively to tax years beginning after December 31, 2021. In practice this meant amending 2022 to 2024 returns and claiming refunds. IRS Revenue Procedure 2025-28 set the procedures, and the deadline was July 6, 2026, or earlier if the normal refund period for a year expired first. That window has closed.</p>
<h3>Accelerated deduction of remaining costs</h3>
<p>Any business, of any size, could elect to deduct the remaining unamortized domestic R&E from 2022 to 2024:</p>
<ul>
<li>in full in the first tax year beginning after December 31, 2024 (2025 for calendar-year businesses), or</li>
<li>ratably over that year and the next (2025 and 2026).</li>
</ul>
<p>Example: a business spent $300,000 on domestic R&E in 2023. It deducted $30,000 in 2023 and $60,000 in 2024, leaving $210,000. It could deduct the full $210,000 on its 2025 return, or $105,000 in each of 2025 and 2026. If no election was made, the business keeps amortizing on the original five-year schedule. If you are not sure what your 2025 return did, ask your preparer.</p>
<p>If your business missed the retroactive window, all is not lost. The accelerated deduction may still have been available on your 2025 return, and future domestic costs are deductible as you go. What you cannot do now is reopen 2022 to 2024 under Section 174A. Some businesses that were eligible but did not act may want a professional to confirm whether any other relief, such as an amended 2025 return filed within the normal time limits, could still apply to their facts.</p>
<p>Partnerships and S corporations had their own procedures, including administrative adjustment requests for partnerships under the centralized audit regime, so owners of pass-through entities should check what the entity actually filed rather than assuming.</p>

<h2>Section 174A and the R&D tax credit</h2>
<p>The research credit under Section 41 is separate from the deduction. Many small software and product businesses qualify, and qualified small businesses may be able to apply part of the credit against payroll taxes. The law restored the rule that the Section 174A deduction is reduced by the amount of the credit claimed, unless you elect a reduced credit instead. That makes the credit and deduction a joint planning decision for your adviser.</p>

<h2>Who benefits most from the new rules</h2>
<p>Section 174 R&D expensing under the new rules helps any business with meaningful domestic development spending, but some benefit more than others:</p>
<ul>
<li><strong>Bootstrapped software companies</strong> that are profitable and paid tax on paper profits from 2022 to 2024.</li>
<li><strong>Agencies and studios building their own products</strong> alongside client work, such as templates, plugins or apps.</li>
<li><strong>Hardware and product startups</strong> with US engineering teams and prototype costs.</li>
<li><strong>Manufacturers improving processes</strong> where the outcome is uncertain at the start.</li>
</ul>
<p>Businesses that rely heavily on overseas development teams gain less, because their foreign costs remain on the 15-year schedule. Some may revisit where work is done, but that decision should be driven by cost, quality and talent, not tax alone. Loss-making startups may also see little immediate benefit, because a larger deduction only increases a loss. For them, electing to amortize over 60 months, or focusing on the payroll tax offset for the research credit, may be more useful.</p>

<h2>Practical steps for small businesses</h2>
<ol>
<li><strong>Identify R&E activities.</strong> List projects that involve uncertainty about capability, method or design.</li>
<li><strong>Split domestic and foreign costs.</strong> Record where each employee and contractor works. Foreign freelancers often provide a <a href="/blog/w-8ben-form-freelancers">Form W-8BEN</a>, which is a useful flag.</li>
<li><strong>Keep contractor invoices.</strong> Ask for invoices that show the project, dates and location of work. Our guide to the <a href="/blog/independent-contractor-invoice">independent contractor invoice</a> shows what to include.</li>
<li><strong>Track overhead and supplies.</strong> Our guide to <a href="/blog/how-to-track-business-expenses">tracking business expenses</a> covers practical systems.</li>
<li><strong>Separate equipment from R&E.</strong> Servers and laptops are depreciated, not deducted as R&E; see <a href="/blog/section-179-vs-bonus-depreciation">Section 179 vs bonus depreciation</a> and <a href="/blog/capex-vs-opex">CapEx vs OpEx</a>.</li>
<li><strong>Consider the QBI effect.</strong> Bigger deductions lower qualified business income; see our <a href="/blog/qbi-deduction-section-199a">QBI deduction guide</a>.</li>
<li><strong>Check state rules.</strong> Some states have not adopted Section 174A and may still require amortization.</li>
</ol>

<h2>Conclusion</h2>
<p>Section 174 R&D expensing has largely returned for domestic work, which is good news for software developers, product startups and agencies building their own tools. Foreign research is still slow to deduct, and the retroactive option for small businesses has closed, so the focus now is on good records and smart elections. Strong documentation starts with clear invoices, so create professional invoices for free with our <a href="/invoice-generator/usa">US invoice generator</a>, read the wider context in our guide to the <a href="/blog/one-big-beautiful-bill-small-business">One Big Beautiful Bill for small businesses</a>, and review your R&D position with a qualified tax adviser.</p>
`,
  },
];
