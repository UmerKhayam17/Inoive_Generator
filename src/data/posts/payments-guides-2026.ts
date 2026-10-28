import type { PostDraft } from "../blog";

export const PAYMENTS_GUIDES_2026_POSTS: PostDraft[] = [
  {
    slug: "salary-increase-percentage",
    title: "How to Calculate Salary Increase Percentage (With Examples)",
    description:
      "Learn how to calculate salary increase percentage: raise formulas, new salary after a raise, compounding raises, inflation checks and spreadsheet formulas.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["salary-slip-format", "how-to-set-freelance-rates", "small-business-budget"],
    faqs: [
      {
        q: "What is the formula for salary increase percentage?",
        a: "Subtract the old salary from the new salary, divide the result by the old salary, then multiply by 100. For example, a move from $50,000 to $53,000 is a $3,000 increase, and $3,000 divided by $50,000 equals 0.06, or 6%. Always divide by the old salary, not the new one, because the percentage describes growth from the starting point.",
      },
      {
        q: "How do I calculate a 3% raise?",
        a: "Multiply your current salary by 1.03 to get the new salary, or multiply it by 0.03 to see the raise amount on its own. On a $60,000 salary, the raise is $60,000 x 0.03 = $1,800, and the new salary is $61,800. For hourly pay, apply the same multiplier to the hourly rate: $25.00 x 1.03 = $25.75 per hour.",
      },
      {
        q: "How do I calculate a percentage increase in Excel or Google Sheets?",
        a: "Put the old salary in A2 and the new salary in B2, then enter =(B2-A2)/A2 in C2 and format the cell as a percentage. To find a new salary from a raise percentage, put the percentage in C2 and use =A2*(1+C2). Both formulas work the same way in Excel and Google Sheets, and you can fill them down a column for a whole team.",
      },
      {
        q: "Is the percentage the same for monthly and annual salary?",
        a: "Yes. If every pay period rises by the same percentage, the monthly, biweekly and annual figures all grow by that same percentage. A 5% raise on $4,000 a month gives $4,200 a month, and the annual figure moves from $48,000 to $50,400, which is also 5%. The percentage only differs if bonuses, overtime or allowances change at the same time.",
      },
      {
        q: "How do I calculate two raises in a row?",
        a: "Multiply the growth factors rather than adding the percentages. A 4% raise followed by a 3% raise is 1.04 x 1.03 = 1.0712, which is a 7.12% total increase, not 7%. On a $50,000 salary that gives $53,560. The difference is small for two raises but grows over many years because each raise is applied to a larger base.",
      },
      {
        q: "How do I know whether my raise beats inflation?",
        a: "Compare your raise percentage with the change in a consumer price index over the same period. For a precise real raise, divide (1 + raise) by (1 + inflation) and subtract 1. A 5% raise during a year with 3% inflation gives 1.05 / 1.03 - 1 = about 1.94% real growth. In the US, the Bureau of Labor Statistics publishes the Consumer Price Index.",
      },
      {
        q: "What is a good salary increase percentage?",
        a: "There is no single right number. Typical raises depend on the industry, the region, company performance, inflation and whether the change comes with a promotion or new job. Compare your figure with current salary surveys for your field and location, and with inflation, rather than relying on a general rule. A promotion or job change often brings a larger jump than an annual review.",
      },
      {
        q: "How do I calculate a pay cut percentage?",
        a: "Use the same formula. Subtract the old salary from the new salary and divide by the old salary. If pay falls from $50,000 to $46,000, the change is -$4,000 divided by $50,000, which is -0.08, or an 8% decrease. Note that recovering from a cut takes a larger percentage: going from $46,000 back to $50,000 needs a raise of about 8.7%.",
      },
      {
        q: "Can freelancers use the same formula to raise their rates?",
        a: "Yes. A rate increase is a percentage change like any other. If your hourly rate moves from $80 to $88, that is ($88 - $80) / $80 = 10%. Freelancers often apply an annual increase to cover inflation and growing experience, announce it in advance, and show the new rate clearly on quotes and invoices from the effective date.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To find a salary increase percentage, subtract the old salary from the new salary, divide by the old salary and multiply by 100. A raise from $50,000 to $53,000 is ($53,000 - $50,000) / $50,000 = 0.06, or 6%. To apply a raise, multiply the current salary by 1 plus the percentage.</p>

<p>Salary increase percentage is one of those numbers everyone talks about at review time and few people calculate carefully. Employees want to check an offer, managers need to plan a raise budget, and small business owners need to know what a pay rise will cost over a full year. Freelancers face the same math when they raise their rates. This guide covers every common calculation, from a single raise to compounding raises and inflation, with worked examples and spreadsheet formulas you can copy.</p>

<h2>The salary increase percentage formula</h2>
<p>The core formula is a standard percentage change:</p>
<p><strong>Salary increase % = (New salary - Old salary) / Old salary x 100</strong></p>
<p>Three things matter here. First, you always divide by the old salary, because the percentage describes growth from where you started. Second, both salaries must use the same period, so compare annual with annual or monthly with monthly. Third, compare like with like: base salary with base salary, or total pay with total pay. Mixing a new base salary with an old figure that included a bonus will give a misleading answer.</p>
<p>The reverse calculation is just as useful. If you know the percentage and want the new salary:</p>
<p><strong>New salary = Old salary x (1 + raise %)</strong></p>
<p>And if you only want the size of the raise in dollars:</p>
<p><strong>Raise amount = Old salary x raise %</strong></p>

<h2>Worked examples of salary increase calculations</h2>
<p>All figures below are illustrative and chosen to make the arithmetic easy to follow.</p>
<h3>Example 1: Percentage between two salaries</h3>
<p>Priya earns $62,000 and is offered $66,650.</p>
<ul>
<li>Difference: $66,650 - $62,000 = $4,650</li>
<li>Divide by the old salary: $4,650 / $62,000 = 0.075</li>
<li>Multiply by 100: 0.075 x 100 = <strong>7.5%</strong></li>
</ul>
<h3>Example 2: New salary after a percentage raise</h3>
<p>Marcus earns $48,000 and receives a 4% raise.</p>
<ul>
<li>Raise amount: $48,000 x 0.04 = $1,920</li>
<li>New salary: $48,000 + $1,920 = <strong>$49,920</strong></li>
<li>Shortcut: $48,000 x 1.04 = $49,920</li>
</ul>
<h3>Example 3: Hourly pay</h3>
<p>An hourly employee earns $22.50 and gets a 6% raise: $22.50 x 1.06 = <strong>$23.85 per hour</strong>. At 40 hours a week for 52 weeks (2,080 hours), the annual pay moves from $46,800 to $49,608, an extra $2,808 a year. The percentage is still 6% because every hour rises by the same rate.</p>
<h3>Example 4: Finding the old salary from the new one</h3>
<p>If you know someone now earns $55,650 after a 5% raise, divide rather than subtract: $55,650 / 1.05 = <strong>$53,000</strong>. A common mistake is to take 5% off the new salary ($55,650 x 0.95 = $52,867.50), which gives the wrong answer because the 5% was calculated on the smaller, original figure.</p>

<h2>Monthly vs annual salary increases</h2>
<p>When every paycheck grows by the same proportion, the percentage is identical whether you look at weekly, monthly or annual pay. What differs is the dollar amount, and that is where confusion creeps in. A raise quoted as "$300 more a month" sounds smaller than "$3,600 more a year", but they are the same raise.</p>
<table>
<thead><tr><th>Pay period</th><th>Before (illustrative)</th><th>After a 5% raise</th><th>Dollar change</th></tr></thead>
<tbody>
<tr><td>Hourly (2,080 hours a year)</td><td>$24.04</td><td>$25.24</td><td>$1.20</td></tr>
<tr><td>Weekly</td><td>$961.54</td><td>$1,009.62</td><td>$48.08</td></tr>
<tr><td>Biweekly (26 pay periods)</td><td>$1,923.08</td><td>$2,019.23</td><td>$96.15</td></tr>
<tr><td>Monthly</td><td>$4,166.67</td><td>$4,375.00</td><td>$208.33</td></tr>
<tr><td>Annual</td><td>$50,000</td><td>$52,500</td><td>$2,500</td></tr>
</tbody>
</table>
<p>Figures are rounded to the cent, so multiplying a rounded weekly or hourly figure back up may differ from the annual number by a few cents. The percentage does change when other pay components move at the same time. If base pay rises 5% but a monthly allowance stays flat, total pay rises by less than 5%. If a raise starts partway through the year, that calendar year's earnings rise by less than the full percentage, even though the salary itself has risen by the full amount. For a full picture of each component, a clear pay statement helps, and our <a href="/blog/salary-slip-format">salary slip format guide</a> shows how to lay out basic pay, allowances and deductions.</p>

<h2>Multiple raises: why percentages compound</h2>
<p>Raises do not simply add up. Each new raise applies to the salary after the previous one, so the total grows slightly faster than the sum of the percentages.</p>
<p><strong>Total increase = (1 + r1) x (1 + r2) x ... - 1</strong></p>
<p>Illustrative example: a starting salary of $50,000 receives raises of 3%, 4% and 5% over three years.</p>
<ul>
<li>Year 1: $50,000 x 1.03 = $51,500</li>
<li>Year 2: $51,500 x 1.04 = $53,560</li>
<li>Year 3: $53,560 x 1.05 = $56,238</li>
<li>Total increase: ($56,238 - $50,000) / $50,000 = 0.12476, or about <strong>12.48%</strong>, not 12%</li>
</ul>
<p>To find the average yearly raise across several years, use the compound annual growth rate rather than a simple average: (Final / Start)^(1 / years) - 1. Here that is ($56,238 / $50,000)^(1/3) - 1, which is just under 4% a year (about 3.997%).</p>
<p>The same compounding works against you with pay cuts. A 10% cut followed by a 10% raise leaves you below where you started: $50,000 x 0.90 x 1.10 = $49,500.</p>

<h2>Raise vs inflation: calculating your real increase</h2>
<p>A raise only improves purchasing power if it outpaces rising prices. In the US, the standard reference is the Consumer Price Index published by the <a href="https://www.bls.gov/cpi/" target="_blank" rel="noopener noreferrer">Bureau of Labor Statistics</a>. Other countries publish their own price indexes, and you should use the one that matches where you live and the same 12-month period as the raise.</p>
<p>A quick estimate subtracts inflation from the raise. The precise version divides the growth factors:</p>
<p><strong>Real raise = (1 + nominal raise) / (1 + inflation) - 1</strong></p>
<p>Illustrative example: a 4% raise in a year when prices rose 3%.</p>
<ul>
<li>Quick estimate: 4% - 3% = about 1%</li>
<li>Precise: 1.04 / 1.03 - 1 = 0.00971, or about <strong>0.97%</strong></li>
</ul>
<p>If inflation runs higher than the raise, the real change is negative even though the paycheck is larger. That is worth knowing at review time, and it is also why many freelancers build a yearly rate review into their contracts.</p>

<h2>Spreadsheet formulas for salary increases</h2>
<p>These formulas work in both Excel and Google Sheets. Assume the old salary is in column A and the new salary or raise percentage is in column B, starting at row 2.</p>
<table>
<thead><tr><th>Goal</th><th>Formula</th><th>Format the result as</th></tr></thead>
<tbody>
<tr><td>Percentage increase between two salaries</td><td>=(B2-A2)/A2</td><td>Percentage</td></tr>
<tr><td>New salary from a raise % in B2</td><td>=A2*(1+B2)</td><td>Currency</td></tr>
<tr><td>Raise amount only</td><td>=A2*B2</td><td>Currency</td></tr>
<tr><td>Original salary from a new salary in A2 and raise % in B2</td><td>=A2/(1+B2)</td><td>Currency</td></tr>
<tr><td>Compound result of raises in B2:D2</td><td>=A2*(1+B2)*(1+C2)*(1+D2)</td><td>Currency</td></tr>
<tr><td>Average annual raise over N years (N in C2)</td><td>=(B2/A2)^(1/C2)-1</td><td>Percentage</td></tr>
<tr><td>Real raise with inflation in C2</td><td>=(1+B2)/(1+C2)-1</td><td>Percentage</td></tr>
</tbody>
</table>
<p>Enter percentages as decimals (0.05) or with the percent sign (5%). Typing 5 instead of 5% will multiply the salary by six rather than by 1.05.</p>

<h2>Planning raises as a small business owner</h2>
<p>For an employer, the raise percentage is only the start of the cost. When base pay goes up, payroll taxes that are calculated on wages generally rise too, and so may retirement contributions or other benefits that are set as a percentage of pay. Before you approve a raise, work out the full annual cost and check it against your <a href="/blog/small-business-budget">small business budget</a>.</p>
<p>Illustrative example: a business with four employees on a combined payroll of $200,000 plans a 4% raise for everyone. The direct cost is $200,000 x 0.04 = $8,000 a year in wages, before any payroll tax and benefit costs that scale with pay. If the raises start on July 1, only half of that, $4,000, lands in the current calendar year, but the full $8,000 is a permanent addition to next year's costs.</p>
<p>A raise is easier to afford when revenue keeps pace. Some owners link the payroll budget to pricing reviews, so that a raise round goes together with a look at rates, a check on the <a href="/blog/break-even-point">break-even point</a>, and a review of <a href="/blog/gross-profit-vs-net-profit">gross profit and net profit</a>. If raises push costs up while prices stay flat, the margin shrinks quietly.</p>

<h2>Applying the same math to freelance rate increases</h2>
<p>Freelancers and contractors do not get raises; they set them. The math is the same percentage change, applied to an hourly, daily or project rate. A designer moving from $75 to $82.50 an hour has raised rates by ($82.50 - $75) / $75 = 10%.</p>
<p>Practical points when you raise rates:</p>
<ul>
<li>Give existing clients notice, often 30 days or more, and state the effective date in writing.</li>
<li>Update your quotes, contracts and invoice line items from that date. Our guide to <a href="/blog/how-to-set-freelance-rates">setting freelance rates</a> covers how to choose the new figure.</li>
<li>Show the new rate as a clear line-item price rather than adding a vague surcharge. You can build a clean invoice with the new rate in the <a href="/invoice-generator">free invoice generator</a>, which calculates line totals, tax and discounts and downloads a PDF.</li>
<li>If you keep old rates for some clients for a while, note the agreed rate and end date on the invoice so there is no confusion later.</li>
</ul>

<h2>Common mistakes when calculating a salary increase</h2>
<ul>
<li><strong>Dividing by the new salary.</strong> ($53,000 - $50,000) / $53,000 gives 5.66% instead of the correct 6%.</li>
<li><strong>Adding percentages across years.</strong> Raises compound, so 3% plus 4% is 7.12%, not 7%.</li>
<li><strong>Reversing a percentage by subtraction.</strong> To undo a 5% raise, divide by 1.05; do not take 5% off the new figure.</li>
<li><strong>Mixing pay periods.</strong> Comparing a new monthly salary with an old annual salary produces nonsense.</li>
<li><strong>Mixing base pay and total pay.</strong> Bonuses, commissions and allowances should be compared separately or consistently included on both sides.</li>
<li><strong>Ignoring inflation.</strong> A nominal raise below the inflation rate is a real-terms pay cut.</li>
<li><strong>Forgetting the employer's extra costs.</strong> Payroll taxes and percentage-based benefits rise with wages.</li>
<li><strong>Entering 5 instead of 5% in a spreadsheet.</strong> The formula will treat it as 500%.</li>
</ul>

<h2>Salary increase checklist</h2>
<ul>
<li>Confirm both salaries cover the same pay period and the same pay components.</li>
<li>Calculate (new - old) / old and express it as a percentage.</li>
<li>Check the dollar change per paycheck and per year.</li>
<li>For several raises, multiply the growth factors instead of adding percentages.</li>
<li>Compare the raise with inflation for the same 12-month period.</li>
<li>For employers, add payroll taxes and percentage-based benefits to the cost.</li>
<li>Note the effective date and how much of the raise falls in the current year.</li>
<li>Record the new figure on payslips, contracts or invoices from the effective date.</li>
</ul>

<h2>Keep the paperwork consistent</h2>
<p>Once the number is agreed, the paperwork should match it. Employers should show the new base pay on the next payslip, and freelancers should update their rate cards and invoice line items. If you bill clients, a consistent numbering sequence from the <a href="/tools/invoice-number-generator">invoice number generator</a> makes it easy to see which invoices used the old rate and which used the new one. For more articles on pricing, cash flow and planning, browse the <a href="/blog/category/business-finance">business finance guides</a>.</p>
`,
  },
  {
    slug: "llc-vs-sole-proprietorship",
    title: "LLC vs Sole Proprietorship: Which Is Better for Freelancers?",
    description:
      "LLC vs sole proprietorship for US freelancers: compare liability, taxes, state fees, paperwork and invoices under a business name to choose the right structure.",
    category: "comparisons",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "business-credit-score",
      "s-corp-vs-llc",
      "schedule-c-for-freelancers",
      "how-to-get-an-ein",
      "self-employment-tax",
    ],
    faqs: [
      {
        q: "Is an LLC better than a sole proprietorship for a freelancer?",
        a: "Not automatically. An LLC can shield personal assets from many business debts and claims and can look more established to clients, but it costs money to form and maintain, and the fees depend on your state. A sole proprietorship is free to start and simple to run. Freelancers with low liability risk often start as sole proprietors and form an LLC as income, contracts or risk grow.",
      },
      {
        q: "Does an LLC save on taxes compared with a sole proprietorship?",
        a: "By default, no. The IRS treats a single-member LLC as a disregarded entity, so its profit goes on Schedule C of your personal return and is subject to self-employment tax, exactly like a sole proprietorship. Tax differences appear only if the LLC elects to be taxed as a corporation, for example as an S corporation, which brings payroll requirements and extra costs that a tax professional should weigh.",
      },
      {
        q: "How much does it cost to form an LLC?",
        a: "It depends on the state. Each state sets its own filing fee for the articles of organization, and many also charge annual or biennial report fees or minimum taxes. California, for example, has an annual minimum franchise tax for LLCs, currently $800 according to the state tax board. Check your Secretary of State and state tax agency websites for current amounts before you file.",
      },
      {
        q: "Does a sole proprietorship need to register anything?",
        a: "Often very little. A sole proprietorship exists as soon as you start doing business. If you trade under a name other than your own legal name, many states or counties require a DBA (doing business as) filing. You may also need local business licenses or permits, and a sales tax registration if you sell taxable goods or services. Requirements vary by location, so check with your city, county and state.",
      },
      {
        q: "Does an LLC protect my personal assets completely?",
        a: "No. An LLC generally separates business debts and obligations from your personal assets, but you can still be personally liable for your own negligence or professional errors, for debts you personally guarantee, and in some cases where a court disregards the LLC because business and personal finances were mixed. Professional liability insurance and a good contract remain important for freelancers even with an LLC.",
      },
      {
        q: "Do I need an EIN for an LLC or sole proprietorship?",
        a: "A sole proprietor with no employees can usually use their Social Security number. A single-member LLC with no employees and no excise tax obligations can also use the owner's SSN for income tax purposes, according to the IRS, but needs an EIN for employment or certain excise taxes. Many freelancers get a free EIN anyway to keep their SSN off W-9 forms, and banks often ask for one.",
      },
      {
        q: "How do I invoice clients as an LLC?",
        a: "Put the LLC's exact legal name on the invoice, as registered with the state, plus any DBA you use, the business address and contact details. Ask clients to pay the LLC's business bank account, not your personal account. If you change from sole proprietorship to LLC, tell clients the effective date and send updated W-9 details so their records and any 1099 forms match.",
      },
      {
        q: "Can I switch from a sole proprietorship to an LLC later?",
        a: "Yes. You form the LLC with your state, get an EIN if needed, open a business bank account, and move contracts, licenses and payment details into the LLC's name. Invoices issued before the switch stay in your own name; invoices after the effective date go out in the LLC's name. It is worth starting a fresh invoice sequence or clearly marking the change so your records are easy to follow.",
      },
      {
        q: "What name goes on a W-9 for a single-member LLC?",
        a: "Under current IRS instructions for Form W-9, a single-member LLC that is a disregarded entity enters the owner's name on line 1 and the LLC's name on line 2. The taxpayer identification number is the owner's SSN or EIN, not an EIN belonging only to the LLC unless the LLC is taxed as a corporation. Check the latest form instructions, as wording is updated from time to time.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the LLC vs sole proprietorship decision, a sole proprietorship is free and simple but offers no liability separation, while an LLC can protect personal assets from many business debts and claims at the cost of state fees and paperwork. Tax treatment is usually identical by default, so the choice mostly comes down to risk, cost and credibility.</p>

<p>Most US freelancers start as sole proprietors without ever choosing to. The moment you take paid work under your own name, you are one. Sooner or later the question comes up: should I form an LLC? Clients may ask for one, a friend may recommend it, or you may simply want your work to look more established. This comparison explains what really changes when you move from a sole proprietorship to an LLC, what stays the same, and how each structure affects the way you invoice. It is general information, not legal or tax advice; your state's rules and your own situation matter.</p>

<h2>What is a sole proprietorship?</h2>
<p>A sole proprietorship is an unincorporated business owned by one person. There is no legal separation between you and the business: the income is yours, the debts are yours, and contracts are signed in your name. You do not file anything with the state to create it, although you may need a DBA ("doing business as") registration if you trade under a name other than your own, plus any local licenses or permits.</p>
<p>For federal tax purposes, you report business income and expenses on Schedule C with your personal Form 1040, and you pay self-employment tax on net earnings. Our guide to <a href="/blog/schedule-c-for-freelancers">Schedule C for freelancers</a> walks through that form line by line.</p>

<h2>What is an LLC?</h2>
<p>A limited liability company is a business entity created under state law. You form one by filing articles of organization (the name varies by state) with the Secretary of State or equivalent office and paying a filing fee. Many states also require an annual or biennial report, a registered agent with a physical address in the state, and in some cases an annual tax or fee. An operating agreement is recommended even for a one-person LLC, and some states require one.</p>
<p>The key feature is limited liability: the LLC is a separate legal person, so business debts and obligations generally belong to the LLC rather than to you. The <a href="https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" target="_blank" rel="noopener noreferrer">SBA's guide to choosing a business structure</a> summarizes how LLCs compare with other entity types.</p>

<h2>LLC vs sole proprietorship: side-by-side comparison</h2>
<table>
<thead><tr><th>Factor</th><th>Sole proprietorship</th><th>Single-member LLC</th></tr></thead>
<tbody>
<tr><td>Formation</td><td>Automatic; DBA if using a trade name</td><td>State filing required</td></tr>
<tr><td>Startup cost</td><td>Usually little or nothing beyond local licenses</td><td>State filing fee, which varies by state</td></tr>
<tr><td>Ongoing cost</td><td>Minimal</td><td>Annual or biennial report fees in many states; some states charge an annual tax</td></tr>
<tr><td>Liability</td><td>Owner personally liable for all business debts</td><td>Business debts generally limited to the LLC, with exceptions</td></tr>
<tr><td>Default federal tax</td><td>Schedule C, self-employment tax</td><td>Disregarded entity: Schedule C, self-employment tax</td></tr>
<tr><td>Tax election options</td><td>None</td><td>Can elect corporate or S corporation taxation</td></tr>
<tr><td>Taxpayer ID</td><td>SSN, or optional EIN</td><td>Owner's SSN or EIN; EIN needed for employees and certain taxes</td></tr>
<tr><td>Name on invoices</td><td>Your legal name, or name plus DBA</td><td>LLC's registered legal name</td></tr>
<tr><td>Bank account</td><td>Separate account recommended</td><td>Separate business account strongly advised to protect the liability shield</td></tr>
<tr><td>Client perception</td><td>Fine for most individual clients</td><td>Some larger clients prefer or require an entity</td></tr>
</tbody>
</table>

<h2>Taxes: what changes and what does not</h2>
<p>This is the area with the most myths. According to the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/single-member-limited-liability-companies" target="_blank" rel="noopener noreferrer">IRS page on single-member LLCs</a>, a single-member LLC is treated as a disregarded entity by default. In practice that means:</p>
<ul>
<li>You still report profit on Schedule C.</li>
<li>You still pay self-employment tax on net earnings. Our <a href="/blog/self-employment-tax">self-employment tax guide</a> explains how it is calculated.</li>
<li>You still make quarterly estimated payments if you expect to owe enough tax.</li>
<li>Deductible business expenses are the same.</li>
</ul>
<p>The tax picture changes only if the LLC elects to be taxed as a corporation, most commonly as an S corporation. In that setup, you pay yourself a reasonable salary through payroll and may take remaining profit as distributions that are not subject to self-employment tax. It can reduce tax at higher profit levels, but it adds payroll, a separate business tax return and professional fees. Whether it pays off depends on your numbers, so talk to a tax professional before electing.</p>
<p>State taxes are where LLCs often cost more. Some states charge LLCs an annual minimum tax or fee regardless of profit. California is a well-known example, with an annual minimum franchise tax that the state tax board lists at $800. Other states charge far less. Check your state's current rules before deciding.</p>

<h2>Liability: what an LLC protects and what it does not</h2>
<p>The main reason to form an LLC is liability protection. If the business is sued over a contract dispute or cannot pay a debt, creditors can generally pursue only the LLC's assets, not your home or personal savings. As a sole proprietor, there is no such barrier.</p>
<p>The protection has limits that freelancers often overlook:</p>
<ul>
<li><strong>Your own professional mistakes.</strong> If you personally make an error, such as negligent advice or faulty work that causes harm, you may be personally liable regardless of the LLC.</li>
<li><strong>Personal guarantees.</strong> Leases, loans and some credit cards require you to guarantee the debt personally.</li>
<li><strong>Mixing funds.</strong> If you run personal and business money through the same account, a court may disregard the LLC, sometimes called piercing the corporate veil.</li>
<li><strong>Tax debts.</strong> Certain unpaid taxes can be collected from responsible individuals.</li>
</ul>
<p>For many freelancers, professional liability insurance and a well-drafted contract do as much to manage risk as the LLC itself. Our <a href="/blog/freelance-contract-template">freelance contract template</a> covers liability limits, payment terms and scope.</p>

<h2>Worked example: comparing first-year costs</h2>
<p>The figures below are illustrative. Replace them with your state's real fees and your own quotes.</p>
<p>A freelance web developer earns $70,000 in revenue with $10,000 of deductible expenses, so net profit is $60,000 either way.</p>
<ul>
<li><strong>As a sole proprietor:</strong> a DBA filing of $50 and a $100 local business license. First-year structure cost: $50 + $100 = <strong>$150</strong>.</li>
<li><strong>As a single-member LLC in a hypothetical state:</strong> a $100 formation fee, a $50 annual report fee and a $100 local business license. First-year cost: $100 + $50 + $100 = <strong>$250</strong>.</li>
<li><strong>Same LLC in a state with an $800 annual minimum tax:</strong> $100 + $800 + $100 = <strong>$1,000</strong>.</li>
</ul>
<p>In all three cases, federal income tax and self-employment tax on the $60,000 profit are the same, because the LLC is disregarded by default. The difference between structures is $100 a year in the cheaper state and $850 a year in the more expensive one. The question is whether liability protection and a more formal business identity are worth that amount to you.</p>

<h2>How each structure affects invoicing</h2>
<h3>Invoicing as a sole proprietor</h3>
<p>You can invoice in your own name, for example "Jordan Lee", or under a registered DBA, such as "Jordan Lee, doing business as Northline Design". Use the name that matches your bank account and tax records. If you do not have a business entity yet, our guide on <a href="/blog/how-to-invoice-without-a-business">how to invoice without a business</a> covers what to include.</p>
<h3>Invoicing as an LLC</h3>
<p>Invoices should show the LLC's exact registered name, often ending in "LLC", together with the business address and contact details. Payment should go to the LLC's bank account. Keeping all income flowing through the business account is one of the simplest ways to protect the liability shield.</p>
<h3>Switching from one to the other</h3>
<p>When you form an LLC partway through the year, pick an effective date. Invoices before that date stay in your personal name; invoices after it go out in the LLC's name. Tell clients in writing, send them an updated W-9, and update the payee details they hold. Many freelancers also start a new numbering sequence, which the <a href="/tools/invoice-number-generator">invoice number generator</a> can help you set up.</p>
<p>Whichever structure you use, the <a href="/invoice-generator/usa">US invoice generator</a> lets you enter your business name, client details, line items and sales tax, then download a clean PDF. It does not send or track invoices, so keep your own record of what you issue.</p>

<h2>Which structure fits your situation?</h2>
<p>A sole proprietorship often makes sense when:</p>
<ul>
<li>You are testing an idea or earning modest side income.</li>
<li>Your work carries low risk of large claims, such as writing or editing for established clients.</li>
<li>You want the lowest cost and least paperwork.</li>
</ul>
<p>An LLC often makes sense when:</p>
<ul>
<li>You sign larger contracts, hire subcontractors or hold client data that could lead to claims.</li>
<li>Clients prefer working with an entity, or you want a business name with its own bank account and identity.</li>
<li>Your state's LLC fees are modest relative to your income.</li>
<li>You may later want to elect S corporation tax treatment.</li>
</ul>

<h2>Common mistakes when choosing between an LLC and a sole proprietorship</h2>
<ul>
<li><strong>Expecting an LLC to cut taxes automatically.</strong> A single-member LLC is taxed like a sole proprietorship by default.</li>
<li><strong>Ignoring state fees.</strong> Annual taxes and report fees vary widely and recur every year.</li>
<li><strong>Forming in another state to save fees.</strong> If you do business at home, you may still need to register there as a foreign LLC and pay both sets of fees.</li>
<li><strong>Mixing personal and business money.</strong> It weakens the liability shield and makes bookkeeping harder.</li>
<li><strong>Invoicing in the wrong name.</strong> An LLC invoice in your personal name, or paid into a personal account, blurs the line the LLC is meant to draw.</li>
<li><strong>Skipping insurance.</strong> An LLC does not cover your own professional errors.</li>
<li><strong>Missing annual filings.</strong> An LLC can fall out of good standing if reports and fees are not filed on time.</li>
</ul>

<h2>Checklist before you decide</h2>
<ul>
<li>Look up your state's LLC formation fee and any annual report fee or minimum tax.</li>
<li>Check whether your city or county requires a business license either way.</li>
<li>List the liability risks in your work and price professional liability insurance.</li>
<li>Decide whether you need a DBA as a sole proprietor.</li>
<li>Get an EIN if you will hire, need one for an election, or want to keep your SSN off forms.</li>
<li>Open a separate business bank account.</li>
<li>Update contracts, W-9 details and invoice headers with the correct legal name.</li>
<li>Ask a tax professional whether an S corporation election makes sense at your profit level.</li>
</ul>

<h2>Next step</h2>
<p>If you decide to form an LLC, our guide on <a href="/blog/how-to-get-an-ein">how to get an EIN</a> covers the free IRS application. Then update your invoice header with the new legal name and choose a clean design such as the <a href="/invoice-templates/corporate">corporate invoice template</a>. For more side-by-side explainers, browse our <a href="/blog/category/comparisons">comparison articles</a>.</p>
`,
  },
  {
    slug: "stripe-vs-paypal",
    title: "Stripe vs PayPal: Fees, Features and Invoicing Compared",
    description:
      "Stripe vs PayPal compared for small businesses: current US fees, invoicing, disputes, payouts and setup, with worked examples to see which costs you less.",
    category: "comparisons",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "stripe-vs-square",
      "payoneer-vs-paypal",
      "stripe-invoicing-guide",
      "how-to-send-paypal-invoice",
      "add-payment-link-to-invoice",
    ],
    faqs: [
      {
        q: "Is Stripe cheaper than PayPal?",
        a: "For standard US card payments, Stripe and PayPal are close. In October 2026, Stripe's pricing page listed 2.9% + 30 cents per domestic card charge, and PayPal's US merchant fee page listed 2.99% + 49 cents for standard card payments. PayPal checkout and Venmo payments cost more, at 3.49% + 49 cents. Stripe Invoicing adds its own percentage per paid invoice, so compare the full cost for your payment mix.",
      },
      {
        q: "Which is better for invoicing, Stripe or PayPal?",
        a: "PayPal Invoicing is free to send, and customers can pay with a PayPal account or as a guest by card, which suits freelancers whose clients already use PayPal. Stripe Invoicing offers more automation, customer records and integration options but charges a fee per paid invoice. Many small businesses use neither tool's invoice and simply add a payment link to their own PDF invoice.",
      },
      {
        q: "Can I use both Stripe and PayPal?",
        a: "Yes. Many businesses offer both, for example a Stripe card checkout plus a PayPal button, because some customers strongly prefer one or the other. The cost is extra admin: two dashboards, two payout schedules and two sets of reports to reconcile. If you add both payment links to an invoice, make sure each link is labeled clearly and points to the correct amount.",
      },
      {
        q: "Do customers need an account to pay with Stripe or PayPal?",
        a: "Customers never need a Stripe account; they pay on a Stripe-hosted checkout or invoice page with a card or another enabled method. With PayPal, customers can log in to a PayPal account or, where guest checkout is available, pay by card without one. Availability of guest card payment depends on the customer's country and the PayPal product you use.",
      },
      {
        q: "What does a chargeback cost on Stripe and PayPal?",
        a: "In October 2026, Stripe listed a $15 dispute fee in the US plus a $15 counter fee if you respond manually, refunded if you win. PayPal's US fee page listed a $15 standard dispute fee, a $30 fee for high-volume sellers and a separate $20 chargeback fee line. Which PayPal fee applies depends on the dispute type, so read the current fee page and your account terms.",
      },
      {
        q: "Which is better for international payments?",
        a: "Both add surcharges for cross-border payments. In October 2026, Stripe added 1.5% for international cards and 1% when currency conversion is needed, while PayPal added 1.50% for payments received from another market, with separate currency conversion fees. The better choice depends on where your customers are, which methods they use and which currencies you can hold or withdraw, so model a typical payment on both.",
      },
      {
        q: "Does Stripe or PayPal charge a monthly fee?",
        a: "Neither charges a monthly fee for standard, pay-as-you-go pricing in the US at the time of writing. You pay per transaction. Optional products, such as advanced fraud tools, higher invoicing plans or custom pricing, can add costs. Check each provider's pricing page for the products you actually turn on, because these change more often than core card rates.",
      },
      {
        q: "Do Stripe and PayPal report my income to the IRS?",
        a: "Both are payment settlement entities that may issue Form 1099-K for payments for goods and services that meet the federal reporting threshold, and they report those amounts to the IRS. You must report all business income whether or not you receive a 1099-K. Thresholds have changed several times in recent years, so check current IRS guidance for the tax year you are filing.",
      },
      {
        q: "Can I take Stripe or PayPal payments with a free invoice generator?",
        a: "Yes, indirectly. Create a payment link in Stripe or a PayPal invoice or payment link, then paste the link into the notes field of an invoice you build in a free invoice generator. The generator produces the PDF; Stripe or PayPal handles the actual payment. You then mark the invoice paid in your own records when the money arrives.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the Stripe vs PayPal comparison, standard US card fees are close: in October 2026 Stripe listed 2.9% + 30 cents and PayPal 2.99% + 49 cents. PayPal wins on customer familiarity and free invoices; Stripe wins on flexibility, developer tools and lower-cost bank debits. Your payment mix decides which is cheaper.</p>

<p>Stripe and PayPal are the two names most small businesses consider first when they want to take card payments online or put a "pay now" button on an invoice. They overlap heavily, but they come from different directions. PayPal started as a consumer wallet that people already trust and log in to. Stripe started as a developer platform for building checkout into websites and apps. This guide compares the two on fees, invoicing, disputes, payouts and setup, with worked examples, so you can choose based on your own numbers rather than on brand loyalty.</p>
<p><strong>A note on fees:</strong> the rates below come from the official US pricing pages as checked on October 27, 2026. PayPal's merchant fee page showed a last-updated date of October 1, 2026. Fees change, differ by country and can be negotiated at higher volumes, so check the <a href="https://stripe.com/pricing" target="_blank" rel="noopener noreferrer">Stripe pricing page</a> and the <a href="https://www.paypal.com/us/business/paypal-business-fees" target="_blank" rel="noopener noreferrer">PayPal merchant fees page</a> before you decide.</p>

<h2>Stripe vs PayPal at a glance</h2>
<table>
<thead><tr><th>Feature</th><th>Stripe</th><th>PayPal</th></tr></thead>
<tbody>
<tr><td>Best known for</td><td>Developer-friendly online payments and billing</td><td>Consumer wallet with wide buyer recognition</td></tr>
<tr><td>Customer account needed</td><td>No</td><td>No, where guest card checkout is available; many buyers use their PayPal login</td></tr>
<tr><td>Invoicing</td><td>Stripe Invoicing, with a fee per paid invoice</td><td>PayPal Invoicing, free to send; normal transaction fees apply when paid</td></tr>
<tr><td>Payment links</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Bank debit option (US)</td><td>ACH Direct Debit</td><td>Pay by Bank on invoices</td></tr>
<tr><td>Wallets</td><td>Apple Pay, Google Pay and others, at card rates</td><td>PayPal, Venmo, Apple Pay and others</td></tr>
<tr><td>Where money lands</td><td>Paid out to your bank account on a schedule</td><td>PayPal balance, then transferred to your bank</td></tr>
<tr><td>Monthly fee (standard US pricing)</td><td>None</td><td>None</td></tr>
<tr><td>Setup effort</td><td>No-code tools available; deeper features suit developers</td><td>Very quick for basic invoices and buttons</td></tr>
</tbody>
</table>

<h2>Stripe vs PayPal fees (US, October 2026)</h2>
<table>
<thead><tr><th>Payment type</th><th>Stripe</th><th>PayPal</th></tr></thead>
<tbody>
<tr><td>Domestic card</td><td>2.9% + $0.30</td><td>2.99% + $0.49 (standard card payments)</td></tr>
<tr><td>Customer pays with PayPal or Venmo</td><td>Not applicable</td><td>3.49% + $0.49</td></tr>
<tr><td>Apple Pay</td><td>Card rate, 2.9% + $0.30</td><td>2.99% + $0.49</td></tr>
<tr><td>Buy now, pay later</td><td>Varies by provider</td><td>Pay Later: 4.99% + $0.49</td></tr>
<tr><td>Bank payment</td><td>ACH Direct Debit: 0.8%, capped at $5</td><td>Pay by Bank (invoicing): 1%, capped at $10</td></tr>
<tr><td>International card or payment</td><td>+1.5% for international cards</td><td>+1.50% for payments from another market</td></tr>
<tr><td>Currency conversion</td><td>+1% when conversion is needed</td><td>Separate currency conversion fees apply</td></tr>
<tr><td>Invoicing tool</td><td>Stripe Invoicing: 0.4% per paid invoice on the Starter plan; higher on Plus</td><td>Free to send</td></tr>
<tr><td>Disputes</td><td>$15 per dispute, plus $15 counter fee if you respond manually, refunded if you win</td><td>$15 standard dispute fee; $30 for high-volume sellers; separate $20 chargeback fee listed</td></tr>
</tbody>
</table>
<p>PayPal also offers an advanced card processing product with a lower listed rate (2.89% + $0.29 on the October 2026 page) for businesses that integrate card fields directly. Large businesses on either platform may qualify for custom pricing.</p>

<h2>Worked example: fees on a $1,000 invoice</h2>
<p>These calculations use the US rates in the table above and are illustrative. They ignore taxes, refunds and currency conversion.</p>
<table>
<thead><tr><th>Scenario</th><th>Calculation</th><th>Fee</th><th>You receive</th></tr></thead>
<tbody>
<tr><td>Stripe card via a Payment Link</td><td>$1,000 x 2.9% = $29.00, + $0.30</td><td>$29.30</td><td>$970.70</td></tr>
<tr><td>Stripe card via Stripe Invoicing (Starter)</td><td>$29.30 + ($1,000 x 0.4% = $4.00)</td><td>$33.30</td><td>$966.70</td></tr>
<tr><td>Stripe ACH Direct Debit via Stripe Invoicing</td><td>$1,000 x 0.8% = $8.00, capped at $5.00, + $4.00 invoicing fee</td><td>$9.00</td><td>$991.00</td></tr>
<tr><td>PayPal invoice paid by card</td><td>$1,000 x 2.99% = $29.90, + $0.49</td><td>$30.39</td><td>$969.61</td></tr>
<tr><td>PayPal invoice paid with PayPal balance or Venmo</td><td>$1,000 x 3.49% = $34.90, + $0.49</td><td>$35.39</td><td>$964.61</td></tr>
<tr><td>PayPal invoice paid with Pay by Bank</td><td>$1,000 x 1% = $10.00, at the $10 cap</td><td>$10.00</td><td>$990.00</td></tr>
</tbody>
</table>
<p>Two lessons stand out. First, on a card payment the gap between the cheapest and most expensive option here is $35.39 - $29.30 = $6.09 per $1,000, which matters at volume but is rarely decisive for a freelancer sending a few invoices a month. Second, steering large invoices toward bank payment saves far more than switching processors: $29.30 versus $9.00 on Stripe, or $30.39 versus $10.00 on PayPal. Our guide to <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> covers the other bank options.</p>
<p>For an international card payment on the same invoice, Stripe's fee becomes $1,000 x (2.9% + 1.5%) = $44.00, + $0.30 = $44.30 before any conversion fee. PayPal's card fee becomes $1,000 x (2.99% + 1.50%) = $44.90, + $0.49 = $45.39.</p>

<h2>Invoicing: Stripe Invoicing vs PayPal Invoicing</h2>
<h3>PayPal Invoicing</h3>
<p>You create an invoice in the PayPal business account, add line items and send it by email or link. The customer pays on a PayPal page with their PayPal account, Venmo where available, a card or Pay by Bank. There is no charge to send; you pay the transaction fee when it is paid. It is quick to learn and familiar to buyers. The limits are design and detail: if a client's accounts payable team wants a PO number, specific tax fields or a particular layout, you may need to attach your own PDF. Our guide on <a href="/blog/how-to-send-paypal-invoice">how to send a PayPal invoice</a> walks through each step.</p>
<h3>Stripe Invoicing</h3>
<p>Stripe Invoicing creates invoices tied to customer records, with a hosted payment page, automatic reminders, recurring billing through subscriptions and options for cards, bank debits and other methods. It costs a percentage of each paid invoice on top of payment fees. It suits businesses with many customers, recurring billing or a developer who wants to automate. Our <a href="/blog/stripe-invoicing-guide">Stripe invoicing guide</a> covers the setup and costs in more detail.</p>
<h3>The third option: your own invoice plus a payment link</h3>
<p>Many small businesses do not use either platform's invoice. They create a professional PDF in a tool such as our <a href="/invoice-generator">free invoice generator</a>, which handles line items, tax, discounts, shipping, amount paid and balance due, then paste a Stripe Payment Link or PayPal link into the notes field. The generator only builds the PDF; it does not send the invoice, track it or process payments, so the payment provider handles the money and you record payments yourself. See <a href="/blog/add-payment-link-to-invoice">how to add a payment link to an invoice</a> for wording and placement.</p>

<h2>Disputes and chargebacks</h2>
<p>Both providers pass card chargebacks through from the card networks and run their own dispute process for wallet payments. Stripe charges a dispute fee and, if you contest manually, a counter fee that is refunded if you win. PayPal has its own Resolution Center for PayPal-funded payments, with fees that depend on the dispute type and your volume. Seller protection programs on PayPal can cover some eligible transactions, typically physical goods with proof of delivery; services and digital goods are harder to protect. Our guide on <a href="/blog/how-to-handle-chargebacks">how to handle chargebacks</a> covers evidence and deadlines that apply to both.</p>

<h2>Payouts and access to funds</h2>
<p>Stripe pays out to your linked bank account on a rolling schedule, which in the US is typically a couple of business days for established accounts, with longer holds possible for new or higher-risk accounts. PayPal deposits money into your PayPal balance, from which you can transfer to a bank; standard transfers are free, and faster instant transfers carry a fee. Both may hold funds or set reserves if they see risk, such as a sudden spike in sales or a high dispute rate. Check each provider's current payout terms for your account.</p>

<h2>Setup and ease of use</h2>
<ul>
<li><strong>PayPal</strong> is usually faster for a non-technical user who wants to send an invoice today. Buyers recognize the brand, which can help on first orders from new customers.</li>
<li><strong>Stripe</strong> offers no-code Payment Links and Invoicing, but its strength is the API. If you have a developer, a website or a SaaS product, Stripe is generally easier to customize.</li>
<li>Both require identity and business verification before payouts. Have your legal name, tax ID, bank details and business information ready.</li>
</ul>

<h2>Which should you choose?</h2>
<ul>
<li><strong>Choose PayPal</strong> if your customers already use PayPal or Venmo, you want free invoices with no setup, or you sell to consumers who value a familiar checkout.</li>
<li><strong>Choose Stripe</strong> if you want lower-cost ACH bank debits, need subscriptions or automation, or plan to integrate payments into a website or app.</li>
<li><strong>Use both</strong> if you sell to a mix of customers and can handle reconciling two accounts.</li>
</ul>
<p>If you add a card fee to recover costs, check the rules first; our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> explains the limits.</p>

<h2>Common mistakes when comparing Stripe and PayPal</h2>
<ul>
<li><strong>Comparing only the headline card rate.</strong> Your real cost depends on the mix of cards, wallets, bank payments and international buyers.</li>
<li><strong>Forgetting the invoicing fee.</strong> Stripe Invoicing adds a percentage on top of payment fees.</li>
<li><strong>Assuming refunds return fees.</strong> Check each provider's refund policy; processing fees are often not returned.</li>
<li><strong>Ignoring currency conversion.</strong> Cross-border and conversion fees can exceed the base rate on international work.</li>
<li><strong>Not budgeting for disputes.</strong> A single lost dispute costs the payment plus the fee.</li>
<li><strong>Not reconciling payouts.</strong> Payouts are net of fees, so record the gross invoice amount and the fee separately.</li>
<li><strong>Relying on old fee tables.</strong> Fees change; date-stamp your own comparison.</li>
</ul>

<h2>Checklist for choosing a payment processor</h2>
<ul>
<li>List your typical invoice size and how customers usually pay.</li>
<li>Calculate fees on three real invoices using both providers' current pricing pages.</li>
<li>Check fees for international customers and currency conversion.</li>
<li>Decide whether you need the provider's invoice tool or only a payment link.</li>
<li>Read dispute fees and seller protection terms for your type of business.</li>
<li>Confirm payout timing and any reserve or hold policies.</li>
<li>Set up a process to record gross payments, fees and net payouts in your books.</li>
</ul>

<h2>Next step</h2>
<p>Whichever processor you pick, your invoice still needs clear terms, a unique number and an obvious way to pay. Build one with the free generator, pick a layout from the <a href="/invoice-templates">invoice templates</a>, and paste your payment link in the notes. For more on getting paid, browse the <a href="/blog/category/payments">payments articles</a>.</p>
`,
  },
  {
    slug: "how-to-create-invoice-in-quickbooks",
    title: "How to Create an Invoice in QuickBooks Online (Step by Step)",
    description:
      "How to create an invoice in QuickBooks Online step by step: add customers, products, terms and tax, customize the design, send it and record payment.",
    category: "guides",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "freshbooks-vs-quickbooks",
      "xero-vs-quickbooks",
      "invoice-generator-vs-accounting-software",
    ],
    faqs: [
      {
        q: "How do I create an invoice in QuickBooks Online?",
        a: "Select + New (shown as + Create in some accounts) and choose Invoice, or open the Invoices list under Sales. Choose the customer, check the invoice date, terms and due date, then add products or services with quantity and rate. Review the totals and tax, then select Review and send to email it, or Save and close to send later. Labels can differ slightly between account versions.",
      },
      {
        q: "Can I create an invoice in QuickBooks without QuickBooks Payments?",
        a: "Yes. You can create, email and print invoices without QuickBooks Payments. Customers then pay by check, bank transfer or another method you list on the invoice, and you record the payment manually. QuickBooks Payments is needed only if you want customers to pay online by card or bank transfer through the invoice link. It has its own fees, which Intuit lists on its pricing pages.",
      },
      {
        q: "How do I record a payment against an invoice in QuickBooks?",
        a: "Open the invoice and choose the option to receive payment, or select + New and Receive payment. Choose the customer, select the invoice being paid, enter the payment date, method and amount, and pick the account the money was deposited to, such as Undeposited Funds or your bank account. Save it, and the invoice status changes to Paid or Partially paid.",
      },
      {
        q: "How do I make a recurring invoice in QuickBooks Online?",
        a: "Create the invoice as usual, then use the recurring option at the bottom of the invoice, labeled Make recurring in many versions, or set up a recurring transaction from the settings menu. Choose a schedule, interval, start and end dates, and whether QuickBooks should send it automatically or save it as a reminder. Recurring transactions may not be available on every plan, so check your subscription.",
      },
      {
        q: "How do I customize my invoice template in QuickBooks?",
        a: "Open the custom form styles or invoice design settings, usually from the gear icon or the Manage or Design option on the invoice screen. You can add your logo, change colors and fonts, choose which fields appear, and edit the default email message. Changes made in the side panel generally apply to current and future invoices, so check the preview before saving.",
      },
      {
        q: "Why is sales tax not showing on my QuickBooks invoice?",
        a: "Sales tax appears only after you set it up in the Taxes area, and each product or service must be marked taxable or non-taxable. If your customer is marked tax exempt or the shipping address is missing, QuickBooks may calculate zero tax. Check the customer record, the product's tax setting and your sales tax setup, and confirm the rate for your jurisdiction.",
      },
      {
        q: "Can I change the invoice number in QuickBooks?",
        a: "Yes. QuickBooks numbers invoices automatically, but you can turn on custom transaction numbers in your account settings to edit the number on an invoice. Keep numbers unique and sequential, because duplicates make payment matching and audits harder. If you migrate from another system, start QuickBooks at the next number in your old sequence.",
      },
      {
        q: "Is there a free alternative to QuickBooks for invoices?",
        a: "If you only need to produce professional invoices and do not need bookkeeping, a free invoice generator can create a PDF with line items, tax, discounts and balance due. It will not send invoices, track payments or keep accounts, which QuickBooks does. Many small businesses start with a generator and a spreadsheet, then move to accounting software as volume grows.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To create an invoice in QuickBooks Online, select + New (or + Create) and choose Invoice. Pick the customer, confirm the date, terms and due date, add each product or service with quantity and rate, check tax and totals, then choose Review and send to email it or Save and close to send it later.</p>

<p>QuickBooks Online is one of the most widely used accounting tools for small businesses, and invoicing is one of the first things new users need to do. The good news is that the basic flow is short. The less obvious part is the setup around it: customer records, products and services, payment terms, sales tax and how payments are recorded. Get those right once and every future invoice takes a minute. This guide explains how to create an invoice in QuickBooks Online step by step, how to customize and send it, how to record payment, and the mistakes that cause the most trouble.</p>
<p>Intuit updates the QuickBooks interface regularly and some accounts show a newer invoice layout than others, so button names may differ slightly from what you see. The steps below use the terms in <a href="https://quickbooks.intuit.com/learn-support/en-us/getting-started/create-an-invoice/00/263025" target="_blank" rel="noopener noreferrer">Intuit's help article on creating invoices</a> as checked in October 2026.</p>

<h2>Before you create your first invoice</h2>
<p>A few minutes of setup prevents most invoicing errors later.</p>
<ul>
<li><strong>Company details.</strong> In account settings, confirm your legal business name, address, phone, email and logo. These appear on every invoice.</li>
<li><strong>Sales settings.</strong> Set default payment terms, for example Net 30, and choose whether to show fields such as shipping, discount, deposit or custom fields.</li>
<li><strong>Sales tax.</strong> If you charge sales tax, set it up in the Taxes area before invoicing. QuickBooks can calculate tax based on location once configured.</li>
<li><strong>Products and services.</strong> Create items for what you sell, with a name, description, default rate and taxable status. This keeps descriptions consistent and makes reports more useful.</li>
<li><strong>Customers.</strong> Add customers with their billing address and the email address their accounts team uses.</li>
<li><strong>Online payments (optional).</strong> To let customers pay through the invoice by card or bank transfer, you need QuickBooks Payments, which has its own fees.</li>
</ul>

<h2>How to create an invoice in QuickBooks Online: step by step</h2>
<ol>
<li><strong>Open a new invoice.</strong> Select <strong>+ New</strong> or <strong>+ Create</strong>, then <strong>Invoice</strong>. You can also open the Invoices list from the Sales area and start a new one there.</li>
<li><strong>Choose the customer.</strong> Select the customer from the dropdown, or add a new one. Check the billing address and email address are correct.</li>
<li><strong>Check the dates and terms.</strong> Confirm the invoice date, choose payment terms such as Net 15 or Net 30, and check the due date that QuickBooks calculates. "Net" means the number of days until payment is due.</li>
<li><strong>Add line items.</strong> For each line, select a product or service, then enter the quantity and rate. Edit the description if this job needs more detail. Add more lines, a subtotal or a text line as needed.</li>
<li><strong>Add tax, discounts and shipping.</strong> Confirm each line's taxable status and check the calculated tax. Add a discount or shipping if those fields are turned on.</li>
<li><strong>Pull in billable items (optional).</strong> If you track billable time or expenses, or have open estimates, QuickBooks can suggest them so you can add them to the invoice.</li>
<li><strong>Add a message and attachments.</strong> Use the customer message field for payment instructions or a thank-you note, and attach supporting files such as a timesheet or signed estimate.</li>
<li><strong>Choose payment options.</strong> If QuickBooks Payments is active, choose which online methods to allow on this invoice.</li>
<li><strong>Review the design.</strong> Use the design or manage options to check the template, logo and which fields display.</li>
<li><strong>Send or save.</strong> Select <strong>Review and send</strong> to preview and email it now, or <strong>Save and close</strong> to keep it. Scheduling options let you mark it to print or send later.</li>
</ol>
<p>Once sent, the invoice status shows as sent, and you can see when the customer views or pays it if online payments are on.</p>

<h2>Worked example: a QuickBooks invoice with tax and a discount</h2>
<p>The figures below are illustrative. A bookkeeper invoices a retail client for monthly services and some taxable supplies.</p>
<table>
<thead><tr><th>Product or service</th><th>Qty</th><th>Rate</th><th>Amount</th><th>Taxable</th></tr></thead>
<tbody>
<tr><td>Monthly bookkeeping</td><td>1</td><td>$600.00</td><td>$600.00</td><td>No</td></tr>
<tr><td>Payroll processing (per employee)</td><td>6</td><td>$15.00</td><td>$90.00</td><td>No</td></tr>
<tr><td>Printed tax forms pack</td><td>2</td><td>$40.00</td><td>$80.00</td><td>Yes</td></tr>
</tbody>
</table>
<ul>
<li>Subtotal: $600.00 + $90.00 + $80.00 = <strong>$770.00</strong></li>
<li>Discount of 5% on the subtotal: $770.00 x 0.05 = $38.50, leaving $731.50</li>
<li>Sales tax at an illustrative 8% on the taxable line after its share of the discount: $80.00 x 0.95 = $76.00, and $76.00 x 0.08 = <strong>$6.08</strong></li>
<li>Invoice total: $731.50 + $6.08 = <strong>$737.58</strong></li>
</ul>
<p>Whether a discount applies before or after tax, and how it is spread across taxable lines, depends on your QuickBooks settings and your state's rules. Check the preview carefully the first time. If you want to sanity-check the tax, our <a href="/tools/sales-tax-calculator">sales tax calculator</a> gives a quick independent figure, and our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on US invoices</a> explains what needs to show.</p>

<h2>Converting an estimate into an invoice</h2>
<p>If you send estimates in QuickBooks, you do not need to retype an accepted one. Open the estimate and use the option to create an invoice from it, or add it from the suggestions panel when you start a new invoice for that customer. The lines, rates and tax settings carry over, and the estimate is marked as closed or converted. Check that quantities still match what was actually delivered before sending, and edit any line that changed. Linking the two documents also makes it easier to answer client questions later, because you can show exactly which approved estimate the invoice relates to.</p>

<h2>Customizing your QuickBooks invoice template</h2>
<p>QuickBooks lets you change the look of invoices through custom form styles. Common changes include:</p>
<ul>
<li>Uploading your logo and choosing brand colors and fonts.</li>
<li>Showing or hiding fields such as PO number, shipping details, SKU or service date.</li>
<li>Adding custom fields, for example a project code your client requires.</li>
<li>Editing the footer with bank details, late fee terms or a thank-you message.</li>
<li>Editing the default email subject and body.</li>
</ul>
<p>Keep the layout simple. Accounts payable teams look for your business name, invoice number, dates, amount due and how to pay. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> covers wording that reduces late payment.</p>

<h2>Sending invoices and following up</h2>
<p>When you choose Review and send, QuickBooks shows the email and a preview of the PDF. Check the recipient address, add a CC if the client's accounts team needs a copy, and send. You can also download or print the PDF and send it yourself.</p>
<p>For follow-up, QuickBooks can send automatic reminders before or after the due date if you turn them on in settings. If you prefer to write your own messages, our collection of <a href="/blog/payment-reminder-emails">payment reminder emails</a> gives templates for each stage.</p>

<h2>Recording payments against invoices</h2>
<p>If the customer pays online through QuickBooks Payments, the payment is usually recorded automatically. For checks, bank transfers or other methods, record it yourself:</p>
<ol>
<li>Open the invoice and choose to receive payment, or select <strong>+ New</strong> and then <strong>Receive payment</strong>.</li>
<li>Choose the customer and tick the invoice or invoices being paid.</li>
<li>Enter the payment date, payment method, reference number and amount received.</li>
<li>Choose where the money went: directly to the bank account, or to Undeposited Funds if you group several payments into one bank deposit.</li>
<li>Save. The invoice changes to paid, or partially paid if the amount was less than the balance.</li>
</ol>
<p>For installment arrangements, see our guide to the <a href="/blog/partial-payment-invoice">partial payment invoice</a>, which explains how each payment should reduce the balance due.</p>

<h2>Recurring and progress invoices</h2>
<p>For retainers and monthly services, create the invoice once and use the recurring option, labeled Make recurring in many versions, to set a schedule. QuickBooks can send it automatically, create it unsent for review, or remind you. Our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> explains when each approach makes sense.</p>
<p>For larger projects billed in stages, some QuickBooks plans support progress invoicing from an estimate, letting you bill a percentage or amount of each line at a time. Availability depends on your plan and settings.</p>

<h2>QuickBooks invoices vs a free invoice generator</h2>
<table>
<thead><tr><th>Need</th><th>QuickBooks Online</th><th>Free invoice generator</th></tr></thead>
<tbody>
<tr><td>Professional PDF invoice</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Line items, tax, discount, shipping</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Email sending and reminders</td><td>Yes</td><td>No; you send the PDF yourself</td></tr>
<tr><td>Payment tracking and bookkeeping</td><td>Yes</td><td>No</td></tr>
<tr><td>Online card payments</td><td>With QuickBooks Payments</td><td>Paste a payment link in the notes</td></tr>
<tr><td>Cost</td><td>Monthly subscription</td><td>Free</td></tr>
</tbody>
</table>
<p>If you send a handful of invoices a month and keep books in a spreadsheet, a browser-based tool such as our <a href="/invoice-generator">free invoice generator</a> may be enough. It builds the PDF, including amount paid and balance due, but it does not send, track or collect payments. For a full comparison, read <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a>, or see how QuickBooks stacks up in <a href="/blog/freshbooks-vs-quickbooks">FreshBooks vs QuickBooks</a>.</p>

<h2>Common mistakes when invoicing in QuickBooks</h2>
<ul>
<li><strong>Typing one-off item names every time.</strong> Creating products and services keeps reports accurate.</li>
<li><strong>Skipping sales tax setup.</strong> Tax will show as zero or wrong until it is configured and items are marked taxable.</li>
<li><strong>Wrong customer email.</strong> Invoices sent to a general inbox may never reach accounts payable.</li>
<li><strong>Duplicate customer records.</strong> "Acme Inc" and "Acme Inc." split balances and confuse statements.</li>
<li><strong>Depositing payments twice.</strong> Recording a payment to Undeposited Funds and then also entering the bank deposit separately inflates income.</li>
<li><strong>Editing sent invoices without telling the client.</strong> Issue a corrected copy and explain the change.</li>
<li><strong>Breaking the numbering sequence.</strong> Keep invoice numbers unique; our <a href="/blog/invoice-numbering-system">invoice numbering system guide</a> explains why.</li>
</ul>

<h2>QuickBooks invoice checklist</h2>
<ul>
<li>Company name, address, logo and contact details are correct.</li>
<li>Customer record has the right billing address and accounts email.</li>
<li>Invoice date, terms and due date are set.</li>
<li>Each line has a product or service, quantity, rate and correct taxable status.</li>
<li>Discounts, shipping and tax are checked against the preview.</li>
<li>PO number or project reference added if the client requires one.</li>
<li>Payment instructions or online payment options are visible.</li>
<li>Invoice is sent to the right email and a copy is saved.</li>
<li>Payment is recorded against the invoice when it arrives.</li>
</ul>

<h2>Next step</h2>
<p>Set up your products, terms and sales tax first, then create a test invoice to yourself and check the PDF before sending to a client. For more step-by-step walkthroughs, browse our <a href="/blog/category/guides">invoicing guides</a>.</p>
`,
  },
  {
    slug: "how-to-handle-chargebacks",
    title: "How to Handle Chargebacks: Prevent, Respond and Win Disputes",
    description:
      "How to handle chargebacks as a small business: why they happen, response deadlines, evidence that wins disputes, real costs and steps to prevent them.",
    category: "payments",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-dispute", "how-to-accept-credit-card-payments", "stripe-vs-paypal"],
    faqs: [
      {
        q: "What is a chargeback?",
        a: "A chargeback is a forced reversal of a card payment that the cardholder's bank starts after the customer disputes the charge. The disputed amount is pulled from your account, usually with a dispute fee, while the issuing bank reviews the case. Unlike a refund, which you choose to give, a chargeback happens without your consent, and you must submit evidence if you want to contest it.",
      },
      {
        q: "How long does a customer have to file a chargeback?",
        a: "Card networks typically allow cardholders to dispute within 120 days of the payment, but the rules allow longer in some situations. For services or events paid in advance, the window often runs from the date the service was due rather than the payment date. Wallet and local payment method providers set their own windows, which can be longer, so keep records for well beyond 120 days.",
      },
      {
        q: "How long do I have to respond to a chargeback?",
        a: "Usually a short time. Stripe's documentation says merchants typically have 7 to 21 days to respond, depending on the card network, and your own processor's deadline is the one that counts. Missing it generally means you lose automatically. Check your processor dashboard or emails the day a dispute arrives and note the exact response deadline.",
      },
      {
        q: "Can a merchant win a chargeback?",
        a: "Yes, when you have clear evidence that directly answers the dispute reason. For a product-not-received claim, that means tracking and delivery confirmation; for a not-as-described claim, the agreed description and proof of what was delivered; for fraud claims, evidence linking the cardholder to the purchase. Disputes where you lack documentation, or where the customer has a point, are often better refunded or accepted.",
      },
      {
        q: "How long does a chargeback take to resolve?",
        a: "After you submit evidence, the issuing bank needs time to review it. Stripe's documentation says the issuer usually takes 60 to 75 days to decide, and the full lifecycle can take two to three months. During that time the disputed funds are held. You cannot reliably speed this up except by accepting the dispute.",
      },
      {
        q: "Do I lose the dispute fee if I win?",
        a: "It depends on your processor. Stripe, for example, charges a fee for receiving a dispute that is not returned, plus a separate counter fee if you respond, which is refunded if you win. Other processors and PayPal have their own fee rules. Read your processor's pricing page so you know what a dispute costs whether you win or lose.",
      },
      {
        q: "What is friendly fraud?",
        a: "Friendly fraud describes a chargeback filed by the real cardholder for a purchase they did make, either by mistake or deliberately. Common causes include not recognizing the billing descriptor, a family member making the purchase, forgetting a subscription, or preferring a chargeback to contacting the seller. Clear descriptors, receipts and easy refunds reduce the accidental cases.",
      },
      {
        q: "Should I refund instead of fighting a chargeback?",
        a: "Before a formal dispute is filed, refunding a genuine complaint is usually cheaper and avoids a mark on your dispute rate. Once a chargeback is open, most processors will not let you refund outside the dispute process, so you either accept it or contest it. Contest when you have strong evidence; accept when the claim is valid or the amount is smaller than the effort and fees.",
      },
      {
        q: "Can a customer charge back an invoice paid by bank transfer?",
        a: "Card chargeback rules do not apply to wire transfers or most direct bank transfers, which are much harder to reverse. ACH debits in the US can be returned for reasons such as unauthorized debits, and wallets like PayPal have their own dispute systems. If you rely on bank payments, invoice disputes become a contract and collections issue rather than a chargeback.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To handle chargebacks, respond before your processor's deadline, which is often 7 to 21 days, with evidence that directly answers the dispute reason: invoice, signed agreement, delivery proof and customer messages. Prevent chargebacks with clear billing descriptors, written terms, delivery records and quick refunds for genuine complaints.</p>

<p>A chargeback can feel like a penalty for doing the work. A customer you invoiced and delivered for goes to their bank instead of to you, the money vanishes from your account, and a fee lands on top. For a small business or freelancer, a single lost dispute on a large invoice can wipe out a month's margin. The good news is that most chargebacks follow predictable patterns, many are preventable, and a well-organized response can win back money that would otherwise be lost. This guide explains how chargebacks work, how to respond step by step, what each dispute costs, and how to prevent them.</p>

<h2>What is a chargeback and how does it work?</h2>
<p>A chargeback is a reversal of a card payment initiated by the cardholder's bank (the issuer) after the customer disputes the charge. The card network pulls the funds back from the merchant's processor, which in turn debits your account for the disputed amount and a dispute fee. You then have a chance to submit evidence. The issuer decides the outcome.</p>
<p>A typical card dispute moves through these stages:</p>
<ol>
<li><strong>Pre-dispute alerts or inquiries.</strong> Some networks or services send an early warning or a request for information before a formal dispute. Answering quickly, or refunding, can stop it there.</li>
<li><strong>Chargeback.</strong> The disputed amount is debited from your balance and the clock starts on your response.</li>
<li><strong>Your response (representment).</strong> You submit evidence and a short explanation through your processor.</li>
<li><strong>Issuer decision.</strong> The issuer reviews the evidence and rules for you or for the cardholder.</li>
<li><strong>Further stages.</strong> Some networks allow pre-arbitration or arbitration after a decision, though not every processor supports these.</li>
</ol>
<p>According to <a href="https://docs.stripe.com/disputes/how-disputes-work" target="_blank" rel="noopener noreferrer">Stripe's documentation on how disputes work</a>, card networks typically allow cardholders up to 120 days to dispute, merchants usually get 7 to 21 days to respond, and issuers usually take 60 to 75 days to decide. Your own processor's deadlines are the ones that apply to you.</p>

<h2>Common chargeback reasons</h2>
<p>Each network uses its own reason codes, but they fall into a few broad groups. Your evidence should match the group.</p>
<table>
<thead><tr><th>Category</th><th>What the customer claims</th><th>Evidence that helps</th></tr></thead>
<tbody>
<tr><td>Fraud or unauthorized</td><td>"I did not make this purchase"</td><td>Billing address and verification results, IP or device data, prior undisputed orders, signed agreements, correspondence with the cardholder</td></tr>
<tr><td>Product or service not received</td><td>"I paid but never got it"</td><td>Tracking with delivery confirmation, signed delivery note, login records, delivered files, project sign-off</td></tr>
<tr><td>Not as described or defective</td><td>"It is not what I ordered"</td><td>Quote, statement of work or product listing, photos, approval emails, your return or revision policy</td></tr>
<tr><td>Canceled recurring payment</td><td>"I canceled and was still charged"</td><td>Terms showing the cancellation process, proof the customer did not cancel before the charge, renewal reminders</td></tr>
<tr><td>Credit not processed</td><td>"I was promised a refund"</td><td>Refund policy, proof a refund was issued, or proof the item was not returned</td></tr>
<tr><td>Duplicate or processing error</td><td>"I was charged twice" or "the amount is wrong"</td><td>Separate invoices showing two distinct purchases, or the correct invoice total</td></tr>
</tbody>
</table>
<p>Some chargebacks are "friendly fraud": the real cardholder made the purchase but did not recognize the charge, forgot about it, or chose a chargeback over contacting you. These are often the most preventable.</p>

<h2>How to respond to a chargeback, step by step</h2>
<ol>
<li><strong>Read the dispute notice the day it arrives.</strong> Note the reason code, the amount, and the exact response deadline.</li>
<li><strong>Decide whether to accept or fight.</strong> If the claim is valid, such as a real duplicate charge or an item that never shipped, accepting is usually faster and more honest. Contest when you have clear proof.</li>
<li><strong>Contact the customer.</strong> Some disputes are misunderstandings. If the customer agrees to withdraw, still submit your evidence; with many processors, a withdrawal alone does not close the case in your favor.</li>
<li><strong>Gather evidence for the specific reason.</strong> Use the table above. Generic evidence that does not answer the claim rarely wins.</li>
<li><strong>Write a short, factual rebuttal.</strong> Two or three paragraphs: what was purchased, when and how it was delivered, and why the claim does not apply. Refer to each attachment by name.</li>
<li><strong>Organize attachments clearly.</strong> Include the invoice, the signed agreement or accepted quote, delivery proof and relevant messages. Highlight the key lines.</li>
<li><strong>Submit before the deadline.</strong> Late submissions are generally treated as acceptance.</li>
<li><strong>Record the outcome.</strong> Track wins, losses and reasons so you can fix the patterns that cause disputes.</li>
</ol>

<h2>What evidence wins chargebacks</h2>
<p>Strong evidence is specific, dated and tied to the cardholder. For service businesses and freelancers, the most useful documents are:</p>
<ul>
<li><strong>The invoice.</strong> It should show your business name, customer name, a clear description of work, dates, amounts and payment terms. An <a href="/blog/itemized-invoice">itemized invoice</a> is far more convincing than a single line that says "services".</li>
<li><strong>The signed agreement or accepted quote.</strong> A contract, a <a href="/blog/statement-of-work-template">statement of work</a> or an email accepting the price and scope.</li>
<li><strong>Proof of delivery.</strong> Tracking numbers, delivery photos, file transfer logs, sign-off emails or a client's written approval.</li>
<li><strong>Communication history.</strong> Messages showing the customer acknowledged delivery, requested changes or used the service.</li>
<li><strong>Policies the customer agreed to.</strong> Refund, cancellation and revision terms shown before payment.</li>
<li><strong>Signatures or approvals.</strong> A signed invoice or delivery note helps for in-person work; see our guide to <a href="/blog/invoice-signature">signatures on invoices</a>.</li>
</ul>
<p>You can build a clear, itemized PDF for each job in the <a href="/invoice-generator">free invoice generator</a>, including notes such as the project reference, delivery date and payment terms. The generator does not process payments or manage disputes, but a well-documented invoice is one of the first things an issuer will look at.</p>

<h2>Worked example: what a chargeback really costs</h2>
<p>The figures below are illustrative and use Stripe's October 2026 US pricing of 2.9% + $0.30 per card payment, a $15 dispute fee and a $15 counter fee that is refunded if you win. Check your own processor's fees.</p>
<p>A designer is paid $800 by card for a logo package.</p>
<ul>
<li>Original processing fee: $800 x 2.9% = $23.20, + $0.30 = <strong>$23.50</strong>.</li>
<li><strong>If the designer accepts the chargeback:</strong> loses the $800 payment, the $23.50 processing fee and the $15 dispute fee. Total: $800 + $23.50 + $15 = <strong>$838.50</strong>, plus the time spent on the work.</li>
<li><strong>If the designer contests and loses:</strong> $838.50 + $15 counter fee = <strong>$853.50</strong>.</li>
<li><strong>If the designer contests and wins:</strong> the $800 and the $15 counter fee come back. Net cost: $23.50 processing fee + $15 dispute fee = <strong>$38.50</strong>, compared with $23.50 if there had been no dispute.</li>
<li><strong>If the designer had refunded before a dispute:</strong> refunds the $800 and, on most processors, does not get the $23.50 fee back. Cost: <strong>$23.50</strong> plus the work.</li>
</ul>
<p>The lesson is that even a winning dispute costs money and time, and a high dispute rate can put your processing account at risk. Card networks run monitoring programs for merchants whose dispute ratios are too high, which can lead to extra fees or account closure. Prevention is cheaper than winning.</p>

<h2>How to prevent chargebacks</h2>
<h3>Make the charge recognizable</h3>
<p>Set your billing descriptor, the name that appears on the customer's card statement, to something they will recognize, such as your trading name. Send a receipt immediately after payment. Our <a href="/blog/payment-receipt-template">payment receipt template</a> shows what to include.</p>
<h3>Put terms in writing before work starts</h3>
<p>Use a contract or an accepted quote that sets scope, deliverables, revision limits, cancellation terms and refund policy. A <a href="/blog/freelance-contract-template">freelance contract template</a> is a good starting point.</p>
<h3>Document delivery</h3>
<p>Use tracked shipping for goods, get written sign-off for milestones and keep file delivery records. For large projects, take a deposit and bill in stages so less money is exposed at any one time; our guide to the <a href="/blog/deposit-invoice">deposit invoice</a> explains how.</p>
<h3>Be easy to reach and quick to resolve</h3>
<p>Many customers file chargebacks because they cannot reach the seller. Put a phone number or email on every invoice and receipt, reply quickly, and refund genuine complaints before they escalate. Handle billing disagreements directly using the approach in our <a href="/blog/invoice-dispute">invoice dispute guide</a>.</p>
<h3>Choose payment methods that fit the risk</h3>
<p>For large invoices from new clients, bank transfer is much harder to reverse than a card payment. Our guide to <a href="/blog/how-to-accept-credit-card-payments">accepting credit card payments</a> covers when cards make sense and when to ask for a bank payment instead.</p>

<h2>Chargebacks on PayPal, wallets and bank payments</h2>
<p>Not every dispute follows the card network process. PayPal runs its own Resolution Center for payments funded from a PayPal balance or bank, with its own deadlines, fees and seller protection rules, while card-funded PayPal payments can also lead to a bank chargeback. Wallets such as Apple Pay and Google Pay pass the underlying card through, so disputes on those payments generally follow normal card rules. Bank transfers work differently again: wires are very hard to reverse, while US ACH debits can be returned in some situations, such as an unauthorized debit. If you accept several methods, keep a note of which dispute process applies to each, and compare the fees in our <a href="/blog/stripe-vs-paypal">Stripe vs PayPal comparison</a>.</p>

<h2>Common mistakes when handling chargebacks</h2>
<ul>
<li><strong>Missing the deadline.</strong> A late response is usually an automatic loss.</li>
<li><strong>Sending generic evidence.</strong> Delivery proof does not answer a "not as described" claim, and vice versa.</li>
<li><strong>Refunding after a chargeback is opened.</strong> Most processors block this, and where it is possible you risk paying twice.</li>
<li><strong>Writing an angry rebuttal.</strong> Issuers respond to facts and documents, not tone.</li>
<li><strong>Relying on vague invoices.</strong> "Consulting, $2,000" proves little. Itemize work, dates and deliverables.</li>
<li><strong>Ignoring patterns.</strong> Repeated disputes with the same reason point to a fixable problem, such as an unclear descriptor or missing cancellation terms.</li>
<li><strong>Fighting every dispute.</strong> Contesting valid claims wastes time and counter fees.</li>
</ul>

<h2>Chargeback response checklist</h2>
<ul>
<li>Dispute reason, amount and response deadline recorded.</li>
<li>Decision made: accept or contest.</li>
<li>Customer contacted to understand the issue.</li>
<li>Invoice, agreement or accepted quote attached.</li>
<li>Delivery or completion proof attached.</li>
<li>Relevant messages and policies attached and highlighted.</li>
<li>Short factual rebuttal written and matched to the reason code.</li>
<li>Response submitted before the deadline, with a confirmation saved.</li>
<li>Outcome logged and the root cause fixed.</li>
</ul>

<h2>Next step</h2>
<p>Review your last few invoices and ask whether each one would stand up as evidence: clear description, dates, terms and contact details. If not, update your template using a clean layout such as the <a href="/invoice-templates/classic">classic invoice template</a>. For more on getting paid safely, browse our <a href="/blog/category/payments">payments guides</a>.</p>
`,
  },
  {
    slug: "payment-plan-agreement",
    title: "Payment Plan Agreement: Template and Installment Invoicing",
    description:
      "Payment plan agreement template with the clauses to include, an installment schedule example, and how to invoice each payment so the balance stays clear.",
    category: "payments",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["partial-payment-invoice", "milestone-payments", "client-not-paying-invoice"],
    faqs: [
      {
        q: "What is a payment plan agreement?",
        a: "A payment plan agreement is a written contract in which a customer agrees to pay a debt or purchase price in a series of installments instead of one lump sum. It sets the total amount, the payment schedule, how payments are made, any fees or interest, and what happens if a payment is missed. It protects both sides by turning an informal promise into clear, documented terms.",
      },
      {
        q: "What should a payment plan agreement include?",
        a: "At minimum: the names and addresses of both parties, a description of the debt or purchase, the total amount, any down payment, the number, amount and due dates of installments, accepted payment methods, any interest or fees, what counts as a default, what happens on default, whether early payment is allowed, and signatures with dates. Reference the original invoice numbers so the agreement ties back to your records.",
      },
      {
        q: "Is a payment plan agreement legally binding?",
        a: "Generally, yes, if it meets the basic requirements of a contract in your jurisdiction, such as an offer, acceptance, something of value exchanged and parties with capacity to agree. Signed, written agreements are much easier to enforce than verbal ones. Rules differ by state and country, and consumer agreements can carry extra requirements, so ask a lawyer to review your template if amounts are significant.",
      },
      {
        q: "Can I charge interest on a payment plan?",
        a: "Often you can, but limits apply. Many US states cap interest rates, and offering consumers credit with a finance charge, or payable in more than four installments, can bring federal Truth in Lending disclosure rules into play for businesses that do this regularly. Business-to-business plans usually face fewer rules. Check your local law or ask a professional before adding interest or finance charges.",
      },
      {
        q: "How do I invoice a payment plan?",
        a: "There are two common methods. You can keep the original invoice open and record each installment against it, sending an updated invoice or statement that shows amount paid and balance due. Or you can issue a separate invoice for each installment, referencing the agreement and the original invoice. Choose one method and use it consistently so the remaining balance is never in doubt.",
      },
      {
        q: "What happens if a customer misses a payment plan installment?",
        a: "That depends on your agreement. Common terms include a grace period, a late fee, a written notice of default, and an acceleration clause that makes the whole remaining balance due if a payment is missed and not cured. Send a polite reminder first, then a formal notice that follows the terms you agreed. If the plan collapses, you can pursue the debt through collections or small claims court.",
      },
      {
        q: "Should I take a down payment on a payment plan?",
        a: "A down payment is common and sensible. It shows commitment, reduces the amount at risk and often covers your direct costs. For work not yet delivered, many businesses ask for a deposit of a fixed percentage before starting. For an overdue invoice being converted into a plan, a first payment on signing helps confirm the customer intends to follow through.",
      },
      {
        q: "Can a free invoice generator handle installment invoices?",
        a: "It can produce the documents. In our free invoice generator, you can enter the full amount, record what has been paid so far in the amount paid field, and show the balance due on the PDF. You can add the installment schedule or agreement reference in the notes. It does not send invoices, track due dates or collect payments, so keep a schedule in a spreadsheet or calendar.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A payment plan agreement is a signed document that lets a customer pay a balance in installments. It should state the total owed, any down payment, each installment amount and due date, payment methods, fees or interest, and what happens on default. Invoice each installment against the agreement so the remaining balance is always clear.</p>

<p>Payment plans help in two common situations. Sometimes a customer wants to buy something larger than they can pay for at once, such as a renovation, a website or a course of treatment. Other times, an invoice is already overdue and the customer offers to pay in parts. In both cases, a written payment plan agreement turns a vague promise into specific obligations. This guide explains what to include, gives a template you can adapt, shows a worked installment schedule, and explains how to invoice each payment without losing track of the balance. It is general information, not legal advice; for large amounts or consumer credit, have a lawyer review your terms.</p>

<h2>What is a payment plan agreement?</h2>
<p>A payment plan agreement, sometimes called an installment agreement or payment arrangement, is a contract between a creditor (you) and a debtor (your customer) setting out how an amount will be paid over time. It can sit alongside the original sales contract or be a standalone document used to resolve an overdue invoice.</p>
<p>A good agreement answers five questions: how much is owed, when each payment is due, how it will be paid, what it costs to pay over time, and what happens if a payment is missed.</p>

<h2>When to use a payment plan</h2>
<ul>
<li><strong>Large purchases.</strong> Spreading the cost can win sales from customers who cannot pay up front.</li>
<li><strong>Long projects.</strong> Billing in stages matches cash flow to the work. For deliverable-based stages, see our guide to <a href="/blog/milestone-payments">milestone payments</a>.</li>
<li><strong>Overdue invoices.</strong> A customer who cannot pay in full may pay reliably in parts. A plan often recovers more than a standoff, and it is far cheaper than collections. Our guide on what to do when a <a href="/blog/client-not-paying-invoice">client is not paying an invoice</a> covers the earlier steps.</li>
<li><strong>Retaining a good customer.</strong> A short-term plan can keep a valued relationship through a cash crunch.</li>
</ul>
<p>Be more cautious with new customers you know little about, very long plans, and situations where you have already delivered everything and have no leverage.</p>

<h2>What to include in a payment plan agreement</h2>
<table>
<thead><tr><th>Clause</th><th>What it covers</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Parties</td><td>Legal names, addresses and contact details of both sides</td><td>Identifies who owes and who is owed</td></tr>
<tr><td>Background</td><td>The goods, services or invoices the debt relates to</td><td>Links the plan to your original records</td></tr>
<tr><td>Total amount</td><td>Full balance, plus any agreed fees or interest</td><td>Prevents later arguments about the figure</td></tr>
<tr><td>Down payment</td><td>Amount due on signing</td><td>Reduces risk and confirms commitment</td></tr>
<tr><td>Installment schedule</td><td>Number, amount and due date of each payment</td><td>The core of the agreement</td></tr>
<tr><td>Payment method</td><td>Bank transfer, card, check or automatic debit, with details</td><td>Avoids "I did not know how to pay"</td></tr>
<tr><td>Interest or fees</td><td>Any finance charge, admin fee or late fee</td><td>Must be clear and lawful</td></tr>
<tr><td>Early payment</td><td>Whether the customer can pay off early, and any discount</td><td>Encourages faster settlement</td></tr>
<tr><td>Default and cure</td><td>What counts as missing a payment, any grace period</td><td>Sets a clear trigger</td></tr>
<tr><td>Acceleration</td><td>Whether the full balance becomes due on default</td><td>Gives you leverage if the plan fails</td></tr>
<tr><td>Ownership or delivery</td><td>When goods transfer or services continue</td><td>Protects you while payments are outstanding</td></tr>
<tr><td>Governing law and signatures</td><td>Jurisdiction, signatures and dates</td><td>Makes the agreement enforceable</td></tr>
</tbody>
</table>

<h2>Payment plan agreement template</h2>
<p>Adapt this outline to your business. Replace everything in square brackets, and have a lawyer review it if amounts are large or the customer is a consumer.</p>
<ol>
<li><strong>Parties.</strong> This agreement is made on [date] between [your business legal name], [address] ("Creditor"), and [customer name], [address] ("Customer").</li>
<li><strong>Background.</strong> The Customer owes the Creditor [total amount] for [description of goods or services] as shown on invoice(s) [invoice numbers] dated [dates].</li>
<li><strong>Total amount.</strong> The total amount payable under this agreement is [amount], which includes [any agreed fee or interest, or "no interest or fees"].</li>
<li><strong>Down payment.</strong> The Customer will pay [amount] on signing this agreement.</li>
<li><strong>Installments.</strong> The Customer will pay the remaining [amount] in [number] installments of [amount] each, due on [dates or "the first day of each month starting on date"].</li>
<li><strong>Payment method.</strong> Payments will be made by [method] to [account details or payment link], quoting the reference [reference].</li>
<li><strong>Late payment.</strong> If an installment is not received within [number] days of its due date, [a late fee of amount applies / the Creditor will send written notice].</li>
<li><strong>Default.</strong> If the Customer misses a payment and does not pay within [number] days of written notice, the full remaining balance becomes immediately due.</li>
<li><strong>Early payment.</strong> The Customer may pay the remaining balance at any time without penalty.</li>
<li><strong>Work, goods or services.</strong> [Describe whether work continues, goods are released, or ownership transfers only on full payment.]</li>
<li><strong>Entire agreement and changes.</strong> This agreement, together with the referenced invoices, is the full agreement on payment. Changes must be in writing and signed by both parties.</li>
<li><strong>Governing law.</strong> This agreement is governed by the laws of [state or country].</li>
<li><strong>Signatures.</strong> Signed and dated by both parties.</li>
</ol>

<h2>Worked example: an installment schedule</h2>
<p>The figures below are illustrative. A kitchen fitter completes a project invoiced at $6,000. The customer cannot pay in full and agrees to a plan with a $1,500 down payment and three equal monthly installments, with no interest.</p>
<ul>
<li>Remaining after down payment: $6,000 - $1,500 = $4,500</li>
<li>Monthly installment: $4,500 / 3 = <strong>$1,500</strong></li>
</ul>
<table>
<thead><tr><th>Payment</th><th>Due date</th><th>Amount</th><th>Total paid</th><th>Balance due</th></tr></thead>
<tbody>
<tr><td>Down payment</td><td>On signing, March 1</td><td>$1,500</td><td>$1,500</td><td>$4,500</td></tr>
<tr><td>Installment 1</td><td>April 1</td><td>$1,500</td><td>$3,000</td><td>$3,000</td></tr>
<tr><td>Installment 2</td><td>May 1</td><td>$1,500</td><td>$4,500</td><td>$1,500</td></tr>
<tr><td>Installment 3</td><td>June 1</td><td>$1,500</td><td>$6,000</td><td>$0</td></tr>
</tbody>
</table>
<p>Now suppose the agreement includes an illustrative flat late fee of $25 for any installment more than 7 days late, and installment 2 arrives on May 12. The customer then owes $1,500 + $25 = $1,525 for that month, and the total paid over the plan becomes $6,000 + $25 = $6,025. Make sure any fee like this is permitted where you operate and written into the agreement before it is charged. Our guide to <a href="/blog/late-payment-fees">late payment fees</a> covers common approaches.</p>
<p>If you want to offer an uneven split, for example a larger final payment, list each amount separately rather than describing a formula. Customers and courts both find a dated table easier to follow.</p>

<h2>How to invoice installments</h2>
<h3>Method 1: one invoice, updated balance</h3>
<p>Keep the original invoice as the master record. Each time a payment arrives, record it and send an updated copy showing amount paid and balance due. This keeps one invoice number for the whole debt and suits plans that convert an overdue invoice. Our <a href="/blog/partial-payment-invoice">partial payment invoice</a> guide explains the layout.</p>
<h3>Method 2: a separate invoice for each installment</h3>
<p>Issue a new invoice before each due date for that installment only, with a line such as "Installment 2 of 3 under payment plan dated March 1, ref. INV-1042". This works well when installments are agreed up front for a new sale, and each invoice has its own due date. Give each one a unique number; the <a href="/tools/invoice-number-generator">invoice number generator</a> helps you keep a consistent format.</p>
<h3>Keep a running statement</h3>
<p>Whichever method you choose, a <a href="/blog/statement-of-account">statement of account</a> listing every invoice, payment and the running balance helps the customer and your own records stay aligned.</p>
<p>The <a href="/invoice-generator">free invoice generator</a> supports both methods. You can enter the full invoice, record the amount paid so far, and the PDF shows the balance due. Add the plan reference and the next due date in the notes field, or paste a payment link there. The tool builds the PDF only; it does not send, schedule or collect payments, so keep the schedule in a calendar or spreadsheet.</p>

<h2>How to propose a payment plan for an overdue invoice</h2>
<p>When a customer is already behind, the way you raise a payment plan matters. Keep the message short, factual and friendly. Confirm the outstanding amount and invoice numbers, say you are open to an installment arrangement, and propose specific terms rather than asking the customer to suggest them: for example, a first payment within seven days and the rest over two or three months. Ask them to confirm by signing the agreement, and say that work or deliveries will resume, or continue, once the first payment arrives. If the customer counters with a longer schedule, weigh the extra time against the risk of not being paid at all, and put whatever you agree in writing the same day.</p>

<h2>Legal points to check</h2>
<ul>
<li><strong>Consumer credit rules.</strong> In the US, businesses that regularly extend consumer credit with a finance charge, or payable by written agreement in more than four installments, can fall under Truth in Lending rules. See the definition of creditor in <a href="https://www.ecfr.gov/current/title-12/chapter-X/part-1026/subpart-A/section-1026.2" target="_blank" rel="noopener noreferrer">Regulation Z, 12 CFR 1026.2</a>, and get advice before offering consumer plans at scale.</li>
<li><strong>Interest limits.</strong> Many states cap interest rates and late fees.</li>
<li><strong>Debt collection rules.</strong> If a plan fails and you hand the debt to a third party, debt collection laws apply to how they contact the customer.</li>
<li><strong>Taxes.</strong> Sales tax is usually due based on the sale, not on when installments arrive; check your state's rules.</li>
</ul>

<h2>Common mistakes with payment plan agreements</h2>
<ul>
<li><strong>Agreeing verbally.</strong> Without a signed document, the terms are easy to dispute.</li>
<li><strong>Vague dates.</strong> "Monthly" is not a due date. Write each date or a clear rule.</li>
<li><strong>No default clause.</strong> Without one, you may have to wait until every installment is overdue before acting.</li>
<li><strong>Unlawful fees.</strong> Interest or late fees above legal limits may be unenforceable.</li>
<li><strong>Losing track of the balance.</strong> Mixing methods for recording payments confuses everyone.</li>
<li><strong>Delivering everything before the down payment.</strong> Collect the first payment on signing.</li>
<li><strong>Not following up on the first missed payment.</strong> Early, polite contact keeps plans on track; see our <a href="/blog/payment-reminder-emails">payment reminder emails</a>.</li>
</ul>

<h2>Payment plan checklist</h2>
<ul>
<li>Total amount and original invoice numbers confirmed.</li>
<li>Down payment amount and date set.</li>
<li>Installment amounts and exact due dates listed.</li>
<li>Payment methods and reference stated.</li>
<li>Any interest or fees checked against local law.</li>
<li>Default, grace period and acceleration terms written.</li>
<li>Both parties have signed and dated the agreement.</li>
<li>Invoicing method chosen and first invoice or updated balance sent.</li>
<li>Reminders scheduled a few days before each due date.</li>
</ul>

<h2>Next step</h2>
<p>Draft the agreement from the template above, send it for signature, and issue the first invoice the same day using a simple layout such as the <a href="/invoice-templates/minimal">minimal invoice template</a>. For more on collecting what you are owed, browse our <a href="/blog/category/payments">payments articles</a>.</p>
`,
  },
  {
    slug: "apple-pay-google-pay-business",
    title: "Apple Pay and Google Pay for Business: How to Accept Them",
    description:
      "How to accept Apple Pay and Google Pay as a business: in-person readers, Tap to Pay, online checkout and invoice links, plus fees, security and setup steps.",
    category: "payments",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-accept-credit-card-payments",
      "add-payment-link-to-invoice",
      "stripe-vs-paypal",
    ],
    faqs: [
      {
        q: "How do I accept Apple Pay as a small business?",
        a: "You accept Apple Pay through a payment provider, not by signing up with Apple directly. In person, you need a contactless (NFC) card reader or terminal, or a phone set up with Tap to Pay through a supported payment app. Online, you enable Apple Pay in your payment provider's checkout or payment links. Once your provider supports it, customers can pay with their iPhone or Apple Watch.",
      },
      {
        q: "Does Apple charge businesses a fee for Apple Pay?",
        a: "Apple does not publish a separate merchant fee for accepting Apple Pay. Businesses pay their payment provider's normal processing fee, which for most providers is the same rate as a card payment. For example, in October 2026 Stripe's US pricing page listed wallets under its standard card rate of 2.9% + 30 cents. Check your own provider's pricing page.",
      },
      {
        q: "Do I need a special terminal to accept Google Pay and Apple Pay?",
        a: "You need a terminal or reader that accepts contactless payments, often marked with the contactless symbol. Most modern card readers support it. Alternatively, Tap to Pay on iPhone or on Android lets a compatible phone accept contactless payments through a supported payment app, without extra hardware. Availability depends on your country and provider.",
      },
      {
        q: "Is Apple Pay safer than a card for merchants?",
        a: "Wallet payments use tokenization, so the merchant does not receive the customer's actual card number, and payments are authorized with Face ID, Touch ID, a passcode or the phone's screen lock. That reduces some card fraud risk. However, the underlying payment is still a card transaction, so customers can still dispute it and card network chargeback rules generally apply.",
      },
      {
        q: "Can customers pay an invoice with Apple Pay or Google Pay?",
        a: "Yes, if the payment page behind your invoice supports wallets. Most card payment links and hosted invoice pages from major providers show Apple Pay or Google Pay buttons when the customer opens them on a supported device and browser. You can paste such a link into the notes of a PDF invoice so the customer can tap through and pay.",
      },
      {
        q: "Does Apple Pay work on websites outside Safari?",
        a: "Apple's developer documentation describes Apple Pay on the web as supported in Safari. Support in other browsers depends on Apple's current operating system features and on your payment provider's checkout. Your provider's documentation is the best place to check which browsers and devices will show the Apple Pay button on your checkout page.",
      },
      {
        q: "Is Google Pay the same as Google Wallet?",
        a: "Google has used both names. Google Wallet is the app on Android phones that stores payment cards, passes and tickets, and Google Pay is the payment method customers use online and in apps. For a business, the practical point is the same: you accept these payments through a payment provider that supports Google Pay, and contactless readers accept tap payments from the wallet.",
      },
      {
        q: "Can I charge customers extra for paying with Apple Pay or Google Pay?",
        a: "Wallet payments are usually card payments underneath, so card surcharge rules generally apply. In the US, rules vary by state and card network, and surcharges are generally not allowed on debit cards. Many businesses avoid surcharges and build card costs into prices instead. Check your state's rules and your provider's terms before adding any fee.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To accept Apple Pay as a business, or Google Pay, you sign up with a payment provider that supports digital wallets. In person, use a contactless card reader or Tap to Pay on a compatible phone. Online and on invoices, turn on wallets in your provider's checkout or payment links. Most providers charge their normal card rate.</p>

<p>Digital wallets have become an everyday way to pay. Customers hold a phone or watch near a reader, or tap a button on a checkout page, and the payment is done without typing a card number. For a business, accepting Apple Pay and Google Pay is mostly about choosing the right payment setup, because neither Apple nor Google signs merchants up directly. This guide explains how to accept Apple Pay as a business owner, how Google Pay works alongside it, what it costs, how wallet payments fit into invoicing, and the mistakes to avoid.</p>

<h2>How Apple Pay and Google Pay work for businesses</h2>
<p>Apple Pay and Google Pay are wallets that store a customer's existing debit or credit card on their device. When the customer pays, the wallet sends a token, a stand-in for the real card number, along with a one-time security code. The payment then travels through the card network like any other card transaction.</p>
<p>This has three practical consequences:</p>
<ul>
<li><strong>You need a payment provider, not a separate contract with Apple or Google.</strong> Your card processor, point-of-sale system or online payment platform enables wallet acceptance.</li>
<li><strong>Fees follow your card pricing.</strong> Most providers charge wallet payments at their normal card rate.</li>
<li><strong>Card rules still apply.</strong> Refunds, chargebacks and surcharge rules generally work as they do for cards.</li>
</ul>

<h2>Ways to accept wallet payments</h2>
<table>
<thead><tr><th>Method</th><th>What you need</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Contactless card reader or terminal</td><td>An NFC-enabled reader from your provider</td><td>Shops, cafes, salons and counters</td></tr>
<tr><td>Tap to Pay on iPhone</td><td>A compatible iPhone, a supported payment app and an eligible country</td><td>Mobile services, markets, home visits</td></tr>
<tr><td>Tap to Pay on Android</td><td>A compatible NFC Android phone and a supported payment app</td><td>Mobile services using Android devices</td></tr>
<tr><td>Online checkout</td><td>A website checkout or e-commerce platform with wallets enabled</td><td>Online stores and booking sites</td></tr>
<tr><td>Payment links and hosted invoices</td><td>A provider that shows wallet buttons on its payment page</td><td>Freelancers and service businesses that invoice</td></tr>
<tr><td>In-app payments</td><td>An app integrated with Apple Pay or Google Pay through a provider</td><td>Businesses with their own mobile app</td></tr>
</tbody>
</table>

<h2>How to accept Apple Pay in person</h2>
<ol>
<li><strong>Pick a payment provider</strong> that supports contactless and Apple Pay in your country. Many point-of-sale providers do.</li>
<li><strong>Get a contactless reader</strong> or terminal, or use your phone with Tap to Pay. According to <a href="https://developer.apple.com/tap-to-pay/" target="_blank" rel="noopener noreferrer">Apple's Tap to Pay on iPhone page</a>, merchants get it through a supported payment app, need no extra terminal, and can accept contactless cards, Apple Pay and other digital wallets. It is not available in every market.</li>
<li><strong>Complete account verification</strong> with your provider: legal name, tax ID, bank account and business details.</li>
<li><strong>Test a small payment</strong> with your own phone and refund it, so you know how the flow and refund process work.</li>
<li><strong>Display the contactless symbol</strong> or wallet logos at your counter so customers know they can tap.</li>
</ol>
<p>The same reader usually accepts Google Pay and other wallets, because all of them use the same contactless standard.</p>

<h2>How to accept Google Pay and Apple Pay online</h2>
<p>For a website or online store, wallet buttons are usually a setting in your payment provider or e-commerce platform. Typical steps:</p>
<ol>
<li>Turn on Apple Pay and Google Pay in your provider's payment method settings.</li>
<li>For Apple Pay on the web, register or verify your website domain if your provider asks. Apple's developer documentation says providers can register merchant websites on the merchant's behalf.</li>
<li>Check that the buttons appear on supported devices and browsers. Apple Pay shows on Apple devices in Safari and where else Apple and your provider support it; Google Pay shows in supported browsers where the customer has a saved card.</li>
<li>Run a test transaction and refund it.</li>
</ol>
<p>Google describes accepting payments online through the Google Pay API and in stores through contactless payments on its <a href="https://pay.google.com/about/business/" target="_blank" rel="noopener noreferrer">Google Pay for business page</a>. In practice, most small businesses use a provider's ready-made checkout rather than integrating the API themselves.</p>

<h2>Using wallet payments with invoices</h2>
<p>If you bill clients rather than sell at a counter, wallets can still make paying easier. Most hosted invoice pages and card payment links from major providers display Apple Pay or Google Pay buttons automatically when the customer opens the link on a supported device. The client taps the button, confirms with Face ID or a fingerprint, and the invoice is paid.</p>
<p>A simple setup for small businesses:</p>
<ol>
<li>Create the invoice in the <a href="/invoice-generator">free invoice generator</a>, with line items, tax, any discount and the balance due.</li>
<li>Create a payment link for the invoice amount in your payment provider, with wallets enabled.</li>
<li>Paste the link into the invoice notes with a line such as "Pay by card, Apple Pay or Google Pay: [link]".</li>
<li>Download the PDF and send it to the client yourself.</li>
<li>Record the payment in your books when it arrives.</li>
</ol>
<p>The generator builds the PDF only; it does not send invoices or take payments, so the payment provider processes the money. Our guide to <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a> covers wording and placement, and a <a href="/blog/qr-code-on-invoice">QR code on the invoice</a> lets clients scan a printed copy with their phone.</p>

<h2>What wallet payments cost</h2>
<p>Apple and Google do not list separate merchant fees for accepting their wallets. Your cost is your provider's processing fee. As examples from official US pricing pages checked in October 2026: Stripe listed wallets under its standard card rate of 2.9% + $0.30 for domestic cards, and PayPal listed Apple Pay at 2.99% + $0.49. In-person rates are often lower than online rates. Compare providers in our <a href="/blog/stripe-vs-paypal">Stripe vs PayPal comparison</a> or check <a href="/blog/square-invoice-fees">Square invoice fees</a>.</p>
<h3>Worked example: wallet fees on invoices and counter sales</h3>
<p>The figures below are illustrative.</p>
<ul>
<li><strong>A $1,200 invoice paid with Apple Pay through a link priced at 2.9% + $0.30:</strong> $1,200 x 2.9% = $34.80, + $0.30 = <strong>$35.10</strong> in fees. The business receives $1,200 - $35.10 = $1,164.90.</li>
<li><strong>The same invoice paid by bank debit at 0.8% capped at $5:</strong> $1,200 x 0.8% = $9.60, which hits the cap, so the fee is <strong>$5.00</strong>.</li>
<li><strong>A food truck taking 400 tap payments averaging $25 in a month, at an illustrative in-person rate of 2.6% + $0.15:</strong> sales are 400 x $25 = $10,000. Fees are $10,000 x 2.6% = $260, plus 400 x $0.15 = $60, for a total of <strong>$320</strong>, or 3.2% of sales.</li>
</ul>
<p>Notice how the fixed per-transaction fee weighs more on small payments: on the food truck, $60 of the $320 comes from the fixed fee alone. For large invoices, offering a bank payment option alongside wallets can save a lot.</p>

<h2>Security, disputes and refunds</h2>
<p>Wallet payments offer real security advantages. The merchant never receives the actual card number, and each payment is authorized on the device with biometrics or a passcode. That can reduce some kinds of card fraud.</p>
<p>They are not immune to disputes, though. Because the payment is a card transaction underneath, a customer can still dispute it with their bank for reasons like non-delivery or dissatisfaction. Keep the same records you would for any card payment, and read our guide on <a href="/blog/how-to-handle-chargebacks">how to handle chargebacks</a>. Refunds go back to the same card through your provider, usually from the original transaction.</p>

<h2>Should you add a surcharge for wallet payments?</h2>
<p>Since wallets usually run on cards, card surcharge rules generally apply. In the US, surcharges are restricted by card network rules and some state laws, and are generally not allowed on debit cards. Many small businesses keep pricing simple and absorb card costs. If you are considering a fee, read our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> first.</p>

<h2>Wallets vs other mobile payment apps</h2>
<p>Apple Pay and Google Pay are different from peer-to-peer apps such as Venmo, Zelle or Cash App. Wallets pay a merchant through card rails and your payment provider. Peer-to-peer apps move money between accounts and have their own business account rules, fees and buyer protections. Our guide to <a href="/blog/venmo-zelle-cash-app-invoice">invoicing with Venmo, Zelle and Cash App</a> covers those options.</p>

<h2>Common mistakes when accepting Apple Pay and Google Pay</h2>
<ul>
<li><strong>Assuming you need to sign up with Apple or Google.</strong> Acceptance comes through your payment provider.</li>
<li><strong>Buying a reader without contactless support.</strong> Check for NFC and wallet compatibility before you buy.</li>
<li><strong>Forgetting to enable wallets online.</strong> Some providers require you to switch them on or verify your domain.</li>
<li><strong>Not testing on real devices.</strong> Buttons only appear on supported devices and browsers with a card saved.</li>
<li><strong>Treating wallet payments as dispute-proof.</strong> They are card payments underneath.</li>
<li><strong>Ignoring the fixed fee on small sales.</strong> Per-transaction fees can make low-value payments costly.</li>
<li><strong>Not mentioning wallets on invoices.</strong> Clients may not realize they can pay with a tap unless you tell them.</li>
</ul>

<h2>Checklist to start accepting wallet payments</h2>
<ul>
<li>Choose a payment provider that supports Apple Pay and Google Pay in your country.</li>
<li>Verify your business account and connect your bank.</li>
<li>Get a contactless reader or set up Tap to Pay on a compatible phone.</li>
<li>Enable wallets in online checkout and payment links; verify your domain if required.</li>
<li>Test a payment and a refund on both an iPhone and an Android device if you can.</li>
<li>Display wallet or contactless symbols at your counter and on your invoices.</li>
<li>Add a payment link with wallet support to the notes on each invoice.</li>
<li>Record gross payments, fees and payouts in your books.</li>
</ul>

<h2>Next step</h2>
<p>Pick an invoice layout such as the <a href="/invoice-templates/modern">modern invoice template</a>, add a wallet-enabled payment link to the notes, and send your next invoice with a clear "pay now" line. For more on getting paid, browse our <a href="/blog/category/payments">payments guides</a> or read how to <a href="/blog/how-to-accept-credit-card-payments">accept credit card payments</a> more broadly.</p>
`,
  },
];
