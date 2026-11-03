import type { PostDraft } from "../blog";

export const TAX_LIMITS_2027_POSTS: PostDraft[] = [
  {
    slug: "federal-tax-brackets-2027",
    title: "2027 Tax Brackets and Standard Deduction (IRS Inflation Adjustments)",
    description:
      "2027 tax brackets and standard deduction explained: confirmed 2026 IRS figures, projected 2027 inflation adjustments and a worked example for freelancers.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "federal-tax-brackets-2026",
      "how-much-to-set-aside-for-taxes",
      "quarterly-estimated-taxes-freelancers",
    ],
    faqs: [
      {
        q: "Has the IRS released the 2027 tax brackets yet?",
        a: "The IRS publishes next year's brackets in an annual revenue procedure, usually in October or early November. Its own 2026-2027 guidance plan lists the 2027 inflation-adjustment revenue procedure as an October 2026 item, but at the time of writing we had not seen the official figures. Until they appear on irs.gov, the 2026 brackets are the confirmed baseline and any 2027 numbers you see are projections. Check the IRS newsroom before finalizing payroll or estimated tax plans.",
      },
      {
        q: "What is the projected 2027 standard deduction?",
        a: "Bloomberg Tax projected roughly $16,600 for single filers and $33,200 for married couples filing jointly, with head of household around $24,950, based on an inflation factor of about 3.2%. These are forecasts, not IRS numbers. The confirmed 2026 amounts are $16,100 for single filers, $32,200 for joint filers and $24,150 for heads of household. Use the 2026 figures for planning until the IRS publishes the official 2027 table.",
      },
      {
        q: "Will my tax rate change in 2027?",
        a: "The seven rates themselves (10%, 12%, 22%, 24%, 32%, 35% and 37%) were made permanent by the One Big Beautiful Bill Act in 2025, so no rate change is scheduled for 2027. What changes each year are the income thresholds where each rate starts, which rise with inflation. If your income rises at the same pace as inflation, your marginal rate usually stays the same; if it rises faster, more of it can fall into a higher bracket.",
      },
      {
        q: "Do tax brackets apply to self-employment tax?",
        a: "No. Income tax brackets apply to taxable income after deductions. Self-employment tax is a separate flat tax of 15.3% on 92.35% of net earnings, covering Social Security and Medicare, with the Social Security part capped at the annual wage base ($184,500 for 2026 and $192,300 for 2027). Freelancers pay both, which is why their total federal tax is often well above their income tax bracket alone.",
      },
      {
        q: "Which tax brackets apply to the return I file in 2027?",
        a: "The return you file in early 2027 covers the 2026 tax year, so it uses the 2026 brackets and standard deduction. The 2027 brackets apply to income you earn from January 1 to December 31, 2027, which you report on the return filed in 2028. The 2027 figures matter right away for paycheck withholding tables and for your 2027 quarterly estimated tax payments.",
      },
      {
        q: "What does marginal tax rate mean compared with effective tax rate?",
        a: "Your marginal rate is the rate applied to your last dollar of taxable income, the top bracket you reach. Your effective rate is your total income tax divided by your income. Because each bracket only taxes the slice of income inside it, the effective rate is always lower than the marginal rate. A single filer with $80,000 of 2026 taxable income has a 22% marginal rate but pays about 15.4% overall.",
      },
    ],
    content: `
<p>The 2027 tax brackets keep the same seven rates as 2026, from 10% to 37%, but the income thresholds and the standard deduction rise with inflation. The IRS sets the official 2027 numbers in its annual revenue procedure each fall; until those are published, the confirmed 2026 figures are the safe planning baseline and projections point to roughly a 3% increase. This guide gives you both, explains how the brackets actually work, and shows a freelancer's full calculation.</p>

<p>If you run a business, invoice clients, or simply want your withholding right, the numbers below tell you how much of each extra dollar you keep. This is general information, not tax advice; check with a tax professional for your situation.</p>

<h2>2027 tax brackets: what is confirmed and what is projected</h2>
<p>Every year the IRS adjusts more than 60 tax provisions for inflation. The 2026 figures came from Revenue Procedure 2025-32, announced in the IRS news release on <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" target="_blank" rel="noopener noreferrer">tax inflation adjustments for tax year 2026</a>. The IRS lists the matching 2027 revenue procedure in its priority guidance plan as an October 2026 publication, but at the time of writing the official 2027 table was not yet available to us.</p>
<p>What we know for certain:</p>
<ul>
<li><strong>The rates are fixed.</strong> The One Big Beautiful Bill Act (OBBBA), signed in July 2025, made the 10%, 12%, 22%, 24%, 32%, 35% and 37% rates permanent. Nothing is scheduled to change them in 2027.</li>
<li><strong>Personal exemptions stay at $0.</strong> The OBBBA also made that permanent.</li>
<li><strong>Thresholds rise with chained CPI.</strong> Bloomberg Tax projected an adjustment of about 3.2% for 2027, compared with 2.7% for 2026.</li>
</ul>
<p>Treat any 2027 bracket figures you see before the IRS release as estimates. Payroll software vendors update their tables only once the official numbers are out.</p>

<h2>2026 federal income tax brackets (confirmed baseline)</h2>
<p>These are the official brackets for income earned in 2026, which you report on the return filed in 2027. For more on this year, see our full guide to <a href="/blog/federal-tax-brackets-2026">2026 federal tax brackets</a>.</p>
<table><thead><tr><th>Rate</th><th>Single</th><th>Married filing jointly</th></tr></thead><tbody>
<tr><td>10%</td><td>$0 to $12,400</td><td>$0 to $24,800</td></tr>
<tr><td>12%</td><td>$12,401 to $50,400</td><td>$24,801 to $100,800</td></tr>
<tr><td>22%</td><td>$50,401 to $105,700</td><td>$100,801 to $211,400</td></tr>
<tr><td>24%</td><td>$105,701 to $201,775</td><td>$211,401 to $403,550</td></tr>
<tr><td>32%</td><td>$201,776 to $256,225</td><td>$403,551 to $512,450</td></tr>
<tr><td>35%</td><td>$256,226 to $640,600</td><td>$512,451 to $768,700</td></tr>
<tr><td>37%</td><td>Over $640,600</td><td>Over $768,700</td></tr>
</tbody></table>
<p>For 2027, expect every threshold in this table to move up by roughly the inflation factor once the IRS confirms it. A 3.2% increase, for example, would push the top of the 12% bracket for single filers from $50,400 to a little over $52,000.</p>

<h2>Standard deduction for 2027 vs 2026</h2>
<table><thead><tr><th>Filing status</th><th>2026 (confirmed)</th><th>2027 (projected)</th></tr></thead><tbody>
<tr><td>Single or married filing separately</td><td>$16,100</td><td>About $16,600</td></tr>
<tr><td>Married filing jointly</td><td>$32,200</td><td>About $33,200</td></tr>
<tr><td>Head of household</td><td>$24,150</td><td>About $24,950</td></tr>
</tbody></table>
<p>The 2027 column reflects Bloomberg Tax's projection, not an IRS figure. Taxpayers 65 and older also have an additional standard deduction, and from 2025 through 2028 the OBBBA added a separate senior deduction of up to $6,000 per qualifying person, which phases out above $75,000 of income ($150,000 joint).</p>

<h3>Other 2026 figures that affect business owners</h3>
<ul>
<li><strong>Social Security wage base:</strong> $184,500 for 2026; the Social Security Administration announced $192,300 for 2027.</li>
<li><strong>AMT exemption (2026):</strong> $90,100 for unmarried filers and $140,200 for joint filers.</li>
<li><strong>Annual gift exclusion (2026):</strong> $19,000 per recipient.</li>
<li><strong>Estate exclusion (2026):</strong> $15,000,000 per person.</li>
</ul>

<h2>How tax brackets actually work</h2>
<p>The US uses a progressive system. Each rate applies only to the slice of taxable income inside its band. Moving into a higher bracket never makes your whole income taxed at the higher rate; only the dollars above the threshold are.</p>
<ol>
<li><strong>Start with gross income</strong> from wages, business profit, interest and other sources.</li>
<li><strong>Subtract adjustments</strong> such as half of self-employment tax, self-employed health insurance and retirement contributions. The result is adjusted gross income (AGI).</li>
<li><strong>Subtract the standard deduction or itemized deductions.</strong></li>
<li><strong>Subtract the qualified business income (QBI) deduction</strong> if you have pass-through business income. Our guide to the <a href="/blog/qbi-deduction-section-199a">QBI deduction under Section 199A</a> explains the limits.</li>
<li><strong>Apply the brackets</strong> to the remaining taxable income, then subtract credits.</li>
</ol>

<h2>Worked example: a freelancer's 2026 federal tax</h2>
<p>Here is an illustrative calculation for a single freelance designer with $100,000 of net Schedule C profit in 2026, no other income and the standard deduction. Figures are rounded.</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Self-employment tax</td><td>$100,000 x 92.35% x 15.3%</td><td>$14,130</td></tr>
<tr><td>Deduction for half of SE tax</td><td>$14,130 / 2</td><td>$7,065</td></tr>
<tr><td>AGI</td><td>$100,000 - $7,065</td><td>$92,935</td></tr>
<tr><td>Standard deduction</td><td>Single, 2026</td><td>$16,100</td></tr>
<tr><td>Income before QBI</td><td>$92,935 - $16,100</td><td>$76,835</td></tr>
<tr><td>QBI deduction</td><td>Lesser of 20% of QBI or 20% of $76,835</td><td>$15,367</td></tr>
<tr><td>Taxable income</td><td>$76,835 - $15,367</td><td>$61,468</td></tr>
<tr><td>Income tax</td><td>$1,240 + $4,560 + 22% x $11,068</td><td>$8,235</td></tr>
<tr><td>Total federal tax</td><td>$8,235 + $14,130</td><td>$22,365</td></tr>
</tbody></table>
<p>The designer is in the 22% bracket, yet income tax is only about 8% of profit and total federal tax about 22%. Notice how much of the bill is <a href="/blog/self-employment-tax">self-employment tax</a>, which brackets do not touch. That is why rules of thumb for <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a> often land at 25% to 30% once state tax is added.</p>
<p>If the same designer earns the same real income in 2027, inflation-adjusted brackets and a higher standard deduction should lower the income tax slightly. A small saving, but worth reflecting in your quarterly payments.</p>

<h2>What the 2027 brackets mean for estimated taxes and withholding</h2>
<p>Freelancers and business owners pay income tax through <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated tax payments</a>. Your first 2027 payment is due in mid-April 2027, so you will plan it using either the new 2027 brackets or the safe harbor based on your 2026 tax. Our calendar of <a href="/blog/business-tax-deadlines-2027">business tax deadlines for 2027</a> lists each due date.</p>
<p>Employees get the new brackets automatically through updated withholding tables, but only if their <a href="/blog/form-w-4">Form W-4</a> is accurate. If you have a side business, use Step 4(c) of the W-4 to have extra tax withheld from your job instead of making separate estimated payments.</p>

<h3>Ways to lower taxable income before brackets apply</h3>
<ul>
<li>Retirement contributions. Self-employed people can shelter far more than employees; see our guide to <a href="/blog/401k-contribution-limits-2027">2027 401(k) and IRA limits for the self-employed</a>.</li>
<li>HSA contributions if you have a qualifying high-deductible health plan.</li>
<li>Business expenses you actually incur and can document with receipts and invoices.</li>
<li>OBBBA deductions for qualified tips and overtime (2025 through 2028) where you qualify; see <a href="/blog/no-tax-on-tips-self-employed">no tax on tips for the self-employed</a>.</li>
</ul>

<h2>Common mistakes with tax brackets</h2>
<ul>
<li><strong>Turning down a raise or a client to avoid a higher bracket.</strong> Only the extra dollars are taxed at the higher rate, so earning more always leaves you with more after income tax.</li>
<li><strong>Using projected 2027 numbers as final.</strong> Projections can miss by a bracket rounding step. Update your plan once the IRS publishes.</li>
<li><strong>Forgetting self-employment tax.</strong> Bracket calculators for employees understate a freelancer's bill by thousands.</li>
<li><strong>Mixing up tax years.</strong> The return filed in 2027 uses 2026 brackets.</li>
<li><strong>Poor records.</strong> Every deduction above depends on proof of income and expenses. Clear, numbered invoices make your gross receipts easy to reconcile.</li>
</ul>

<h2>What to do if the IRS numbers differ from projections</h2>
<p>When the official 2027 revenue procedure appears, compare the standard deduction and the 22% and 24% thresholds with what you used. If your estimate was off by a few hundred dollars of taxable income, the tax difference is usually under $100 and can be absorbed in a later quarterly payment. Larger differences, for example if you planned a big equipment purchase or a Roth conversion around a bracket edge, are worth a quick review with your accountant before year-end.</p>

<h2>What an extra project is really worth after tax</h2>
<p>Brackets are most useful for small decisions: should you take one more client before year-end? Continuing the example above, suppose the designer takes a $5,000 project in December 2026. Here is the approximate extra federal tax.</p>
<table><thead><tr><th>Tax</th><th>Calculation</th><th>Extra tax</th></tr></thead><tbody>
<tr><td>Self-employment tax</td><td>$5,000 x 92.35% x 15.3%</td><td>$706</td></tr>
<tr><td>Income tax</td><td>About $3,718 of extra taxable income (after half of SE tax and the 20% QBI deduction) x 22%</td><td>$818</td></tr>
<tr><td>Total</td><td></td><td>About $1,524</td></tr>
</tbody></table>
<p>The designer keeps roughly $3,476 of the $5,000 before state tax, about 70 cents per dollar. That figure, not the 22% bracket alone, is the right number for pricing rush jobs or deciding whether a discount still makes sense.</p>

<h2>Year-end timing moves for cash-method businesses</h2>
<p>Most freelancers and small businesses use the cash method: income counts when you receive it, and expenses count when you pay them. That gives some legitimate control over which year's brackets apply.</p>
<ul>
<li><strong>Invoice timing.</strong> If you expect a lower income next year, sending a late-December invoice with January terms can shift that income into 2027. If you expect higher income next year, invoice and collect before December 31 instead.</li>
<li><strong>Constructive receipt.</strong> You cannot avoid tax by refusing to cash a check you already have or by leaving money in a payment app. Income is taxable when it is available to you.</li>
<li><strong>Prepaying expenses.</strong> Buying supplies or paying for software you will use early next year can pull deductions forward, within the IRS limits on prepaid expenses.</li>
<li><strong>Equipment.</strong> The 2025 tax law restored 100% bonus depreciation for qualifying property acquired after January 19, 2025, so equipment placed in service before year-end can often be fully deducted.</li>
</ul>
<p>These moves rarely change your bracket by themselves, but they can keep income from spilling into the next band, which matters most near the 12% to 22% and 24% to 32% boundaries.</p>

<h2>State income tax sits on top</h2>
<p>Federal brackets are only part of the picture. Most states add their own income tax, either at a flat rate or with their own brackets, and a few cities add local income tax. Nine states have no broad wage income tax, so a freelancer in Texas or Florida faces only federal tax and self-employment tax, while one in California or New York can face a combined marginal rate well above 40% at higher incomes. When you compare offers or set rates across states, add your state's top rate to the federal figure.</p>

<h2>Keep your income records clean</h2>
<p>Bracket planning is only as good as the income figures behind it. Issue a numbered invoice for every job, record when you were paid, and keep copies by tax year so your Schedule C total matches your bank deposits and any 1099s. You can create professional invoices with our free <a href="/invoice-generator">invoice generator</a>, with no sign-up required, and download them as PDF in seconds.</p>
`,
  },
  {
    slug: "401k-contribution-limits-2027",
    title: "2027 401(k) and IRA Contribution Limits for the Self-Employed",
    description:
      "401k limit 2027 guide for the self-employed: confirmed 2026 limits, what to expect for 2027, solo 401(k) and IRA math, catch-ups and a worked example.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "solo-401k-vs-sep-ira",
      "self-employed-tax-deductions",
      "self-employment-tax",
    ],
    faqs: [
      {
        q: "What is the 401(k) contribution limit for 2027?",
        a: "The IRS announces the next year's 401(k) limit each fall, usually in early November. At the time of writing the official 2027 figure had not been published. The confirmed 2026 employee deferral limit is $24,500, and Milliman projected $25,500 for 2027, with a smaller rise to $25,000 possible depending on inflation data. Plan with $24,500 and adjust when the IRS announcement appears on irs.gov.",
      },
      {
        q: "How much can a self-employed person put in a solo 401(k)?",
        a: "Two pieces combine. As the employee you can defer up to the annual limit ($24,500 in 2026, plus catch-ups if you are 50 or older). As the employer you can add a profit-sharing contribution of up to 25% of W-2 pay for a corporation, or about 20% of net self-employment earnings for a sole proprietor. The total, excluding catch-ups, cannot exceed the annual additions limit of $72,000 for 2026.",
      },
      {
        q: "What is the IRA contribution limit for 2027?",
        a: "The IRA limit for 2026 is $7,500, with a $1,100 catch-up for people 50 and older. IRA limits rise in $500 steps, so they do not change every year. The IRS had not announced the 2027 IRA limit at the time of writing; check the IRS newsroom in November. You can contribute for a tax year until the filing deadline the following April.",
      },
      {
        q: "What is the super catch-up for ages 60 to 63?",
        a: "SECURE 2.0 created a higher catch-up for 401(k) participants who turn 60, 61, 62 or 63 during the year. For 2026 it is $11,250 instead of the regular $8,000 catch-up. Plans must allow it, and most solo 401(k) providers do. At 64 you return to the standard catch-up. Projections for 2027 suggest a modest increase, but confirm the official figure.",
      },
      {
        q: "Do I have to make catch-up contributions as Roth?",
        a: "Only if your prior-year FICA wages from the employer sponsoring the plan exceeded the threshold, which is $150,000 of 2025 wages for 2026 catch-ups. Sole proprietors have no FICA wages, so the rule does not apply to their self-employment income. S corporation owners who pay themselves a large salary may be caught by it. The rule applies to 401(k)-type plans, not SEP or SIMPLE IRAs.",
      },
      {
        q: "When is the deadline to contribute to a solo 401(k)?",
        a: "The plan generally must be set up by the end of the tax year for employee deferrals, though newer rules let sole proprietors without employees establish a plan after year-end and make first-year deferrals by the return due date. Employer profit-sharing contributions can be made up to the tax filing deadline, including extensions. Check your provider's paperwork deadlines, since many need several weeks to open an account.",
      },
    ],
    content: `
<p>For 2026 the 401(k) employee deferral limit is $24,500, the IRA limit is $7,500, and total solo 401(k) contributions can reach $72,000 before catch-ups. The 401k limit for 2027 is expected to rise, with Milliman projecting $25,500, but the IRS normally announces the official figure in early November. Self-employed people get the biggest benefit, because they can contribute as both employee and employer.</p>

<p>This guide lists the confirmed numbers, shows what to expect for 2027, and walks through the math for a sole proprietor and an S corporation owner. It is general information, not tax advice; a tax professional can confirm the right plan for you.</p>

<h2>2027 401(k) limit: confirmed 2026 numbers and the 2027 outlook</h2>
<p>The IRS announced the 2026 limits in its release <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" target="_blank" rel="noopener noreferrer">401(k) limit increases to $24,500 for 2026</a>. The 2027 limits had not been released at the time of writing. Benefits consultants such as Milliman have published forecasts based on inflation data.</p>
<table><thead><tr><th>Limit</th><th>2026 (confirmed)</th><th>2027 (status)</th></tr></thead><tbody>
<tr><td>401(k) employee deferral</td><td>$24,500</td><td>Projected $25,500 (Milliman); not yet official</td></tr>
<tr><td>Catch-up, age 50+</td><td>$8,000</td><td>Projected unchanged at $8,000</td></tr>
<tr><td>Super catch-up, ages 60-63</td><td>$11,250</td><td>Projected $11,750</td></tr>
<tr><td>Total annual additions (415(c))</td><td>$72,000</td><td>Pending IRS announcement</td></tr>
<tr><td>Compensation limit</td><td>$360,000</td><td>Pending IRS announcement</td></tr>
<tr><td>IRA contribution</td><td>$7,500</td><td>Pending IRS announcement</td></tr>
<tr><td>IRA catch-up, age 50+</td><td>$1,100</td><td>Pending IRS announcement</td></tr>
<tr><td>SIMPLE IRA deferral</td><td>$17,000</td><td>Pending IRS announcement</td></tr>
</tbody></table>
<p>Do not lock your 2027 payroll deferrals or automatic transfers to a projected number. Set them to the 2026 level and raise them once the official figure is out.</p>

<h2>How a solo 401(k) works for the self-employed</h2>
<p>A solo 401(k), also called an individual 401(k), is a regular 401(k) for a business with no employees other than the owner and a spouse. You wear two hats:</p>
<ul>
<li><strong>Employee deferral:</strong> up to the annual limit ($24,500 in 2026), pre-tax or Roth, regardless of profit level as long as you have that much net earnings.</li>
<li><strong>Employer profit-sharing contribution:</strong> up to 25% of compensation. For a sole proprietor or single-member LLC, compensation is net earnings after subtracting half of <a href="/blog/self-employment-tax">self-employment tax</a> and the contribution itself, which works out to about 20% of net profit after the SE tax adjustment.</li>
</ul>
<p>Both parts together cannot exceed the 415(c) limit ($72,000 for 2026), with age-based catch-ups added on top. If you are choosing between plan types, our comparison of a <a href="/blog/solo-401k-vs-sep-ira">solo 401(k) vs SEP IRA</a> shows when each wins.</p>

<h3>Solo 401(k) vs SEP IRA vs SIMPLE IRA at a glance</h3>
<table><thead><tr><th>Feature</th><th>Solo 401(k)</th><th>SEP IRA</th><th>SIMPLE IRA</th></tr></thead><tbody>
<tr><td>Employee deferral</td><td>Yes, $24,500 (2026)</td><td>No</td><td>Yes, $17,000 (2026)</td></tr>
<tr><td>Employer contribution</td><td>Up to 25% of pay</td><td>Up to 25% of pay</td><td>3% match or 2% nonelective</td></tr>
<tr><td>Max total (2026, before catch-up)</td><td>$72,000</td><td>$72,000</td><td>Much lower</td></tr>
<tr><td>Catch-up, age 50+</td><td>$8,000</td><td>None</td><td>$4,000</td></tr>
<tr><td>Roth option</td><td>Yes</td><td>Yes, if provider allows</td><td>Yes, if provider allows</td></tr>
<tr><td>Best for</td><td>Owner-only businesses</td><td>Simple setup, variable profit</td><td>Small teams with employees</td></tr>
</tbody></table>
<p>If you have employees, a solo 401(k) is not an option. Our guide to the <a href="/blog/simple-ira">SIMPLE IRA for small business</a> covers the team-friendly alternative.</p>

<h2>Worked example: a sole proprietor's maximum contribution</h2>
<p>An illustrative case: a 45-year-old web consultant operating as a single-member LLC has $120,000 of net Schedule C profit in 2026.</p>
<ol>
<li><strong>Self-employment tax:</strong> $120,000 x 92.35% x 15.3% = $16,955.</li>
<li><strong>Half of SE tax:</strong> $8,478.</li>
<li><strong>Net earnings for plan purposes:</strong> $120,000 - $8,478 = $111,522.</li>
<li><strong>Employer contribution:</strong> 20% x $111,522 = $22,304.</li>
<li><strong>Employee deferral:</strong> $24,500.</li>
<li><strong>Total:</strong> $22,304 + $24,500 = $46,804, well under the $72,000 cap.</li>
</ol>
<table><thead><tr><th>Scenario</th><th>Solo 401(k)</th><th>SEP IRA</th></tr></thead><tbody>
<tr><td>Age 45, $120,000 profit</td><td>$46,804</td><td>$22,304</td></tr>
<tr><td>Age 52, same profit</td><td>$54,804</td><td>$22,304</td></tr>
<tr><td>Age 61, same profit</td><td>$58,054</td><td>$22,304</td></tr>
</tbody></table>
<p>At a 24% marginal income tax rate, the $46,804 pre-tax contribution saves roughly $11,200 of federal income tax. It does not reduce self-employment tax, which is calculated before retirement contributions.</p>

<h3>Example for an S corporation owner</h3>
<p>If your business is taxed as an S corporation, contributions are based on your W-2 salary, not total profit. With an $80,000 salary, the company can contribute 25% x $80,000 = $20,000 as employer, and you can defer $24,500, for $44,500 in total. A very low salary limits your contribution, one of several trade-offs covered in our comparison of an <a href="/blog/s-corp-vs-llc">S corp vs LLC</a>.</p>

<h2>IRA limits and how they fit with a business plan</h2>
<p>You can contribute to an IRA on top of a solo 401(k) or SEP. The 2026 IRA limit is $7,500 plus $1,100 catch-up at 50+. Two income tests matter:</p>
<ul>
<li><strong>Traditional IRA deduction:</strong> If you are covered by a workplace plan, which includes your own solo 401(k) or SEP, the deduction phases out between $81,000 and $91,000 of modified AGI for single filers in 2026, and $129,000 to $149,000 for joint filers.</li>
<li><strong>Roth IRA eligibility:</strong> For 2026, direct Roth contributions phase out between $153,000 and $168,000 for single filers and $242,000 to $252,000 for joint filers.</li>
</ul>
<p>Above those ranges, a Roth option inside your solo 401(k) is often the cleaner way to get tax-free growth.</p>

<h2>Step by step: opening and funding a solo 401(k)</h2>
<ol>
<li><strong>Confirm eligibility:</strong> self-employment income and no common-law employees, other than a spouse working in the business.</li>
<li><strong>Get an EIN</strong> if you do not have one; most providers require it. See <a href="/blog/how-to-get-an-ein">how to get an EIN</a>.</li>
<li><strong>Choose a provider</strong> and decide whether you want a Roth deferral option and loans.</li>
<li><strong>Sign the plan document</strong> before the provider's deadline, ideally well before December 31.</li>
<li><strong>Make a written deferral election</strong> for the employee portion.</li>
<li><strong>Deposit contributions.</strong> Sole proprietors often fund deferrals as profit comes in; employer contributions can wait until the tax filing deadline, including extensions.</li>
<li><strong>Watch the $250,000 threshold.</strong> Once plan assets exceed $250,000 at year-end, you generally must file Form 5500-EZ.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li><strong>Counting the deferral limit twice.</strong> The $24,500 limit is per person across all 401(k) and 403(b) plans. If you also defer at a day job, your solo 401(k) deferral room shrinks.</li>
<li><strong>Using gross revenue instead of net profit.</strong> Contributions are based on net earnings after expenses and half of SE tax.</li>
<li><strong>Missing the plan setup deadline.</strong> Providers need time to process documents.</li>
<li><strong>Forgetting cash flow.</strong> A large year-end contribution is useless if clients have not paid. Chase open invoices before you commit to a number; tracking <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> alongside contributions gives a clearer picture of your tax bill.</li>
</ul>

<h2>Roth or traditional contributions?</h2>
<p>Most solo 401(k) providers now let you make employee deferrals as Roth, and SECURE 2.0 also allows employer contributions to be designated as Roth (taxable now, tax-free later). The choice comes down to your tax rate today versus in retirement.</p>
<table><thead><tr><th>Situation</th><th>Usually favors</th><th>Why</th></tr></thead><tbody>
<tr><td>Low-income year (new business, sabbatical)</td><td>Roth</td><td>Pay tax at 10% or 12% now instead of possibly more later</td></tr>
<tr><td>Peak earning years in the 24% bracket or above</td><td>Traditional</td><td>Deduction is worth more today</td></tr>
<tr><td>Income near the QBI phase-out range</td><td>Traditional</td><td>Lowering taxable income can preserve the QBI deduction</td></tr>
<tr><td>Uncertain about future rates</td><td>Split</td><td>Tax diversification gives flexibility in retirement</td></tr>
</tbody></table>
<p>Roth deferrals do not reduce your current taxable income, so they will not help with this year's bill, but they also do not count toward required minimum distributions from a Roth 401(k) under current rules.</p>

<h2>If you also have a day job with a 401(k)</h2>
<p>Many freelancers start their business while still employed. The employee deferral limit is personal and shared across every 401(k) you participate in, but the employer contribution limit applies separately to each unrelated employer's plan.</p>
<p>Illustrative: Jordan defers $15,000 at a day job in 2026 and earns $40,000 of net self-employment profit on the side.</p>
<ul>
<li><strong>Remaining employee deferral room:</strong> $24,500 - $15,000 = $9,500 in the solo 401(k).</li>
<li><strong>Employer contribution:</strong> about 20% of net earnings after half of SE tax. $40,000 - $2,826 = $37,174, so about $7,435.</li>
<li><strong>Total solo 401(k):</strong> about $16,935, on top of whatever the day-job employer contributes.</li>
</ul>
<p>Track deferrals across both plans yourself; neither employer can see the other's numbers, and excess deferrals must be withdrawn by April 15 of the following year to avoid double taxation.</p>

<h2>Hiring your spouse</h2>
<p>If your spouse genuinely works in the business and is paid wages, they can participate in the same solo 401(k), with their own deferral limit and employer contribution. That can roughly double the household's tax-advantaged savings. The wages must be reasonable for the work done, and they carry payroll taxes, so run the numbers before setting this up.</p>

<h2>What to do while 2027 limits are pending</h2>
<p>Keep 2027 deferrals at the 2026 level, then raise them in January if the IRS confirms a higher limit. If you plan to open an HSA too, the 2027 HSA limits are already final; see our guide to <a href="/blog/hsa-contribution-limits-2027">2027 HSA contribution limits</a>. Finally, keep the invoices and bank records that support your net profit, since your contribution limit is only as defensible as the income behind it.</p>

<h2>Turn invoices into retirement savings</h2>
<p>Maximizing a solo 401(k) starts with getting paid on time. Send clear invoices with due dates, track what is outstanding, and move a set percentage of each payment into your retirement account. You can create invoices with our free <a href="/invoice-generator">invoice generator</a>, no sign-up needed, and download them as PDF to send right away.</p>
`,
  },
  {
    slug: "form-w-4",
    title: "W-4 Form 2027: How to Fill It Out Line by Line",
    description:
      "W4 form guide: fill out Form W-4 line by line, with the new deductions worksheet for tips, overtime and seniors, multiple jobs, side income and exemption.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "form-w-2",
      "how-to-do-payroll-yourself",
      "hiring-your-first-employee",
    ],
    faqs: [
      {
        q: "Is there a new W-4 form for 2027?",
        a: "The IRS revises Form W-4 annually, and the 2026 version is the current one at the time of writing. A 2027 revision is normally released in December. You do not need to submit a new form each year unless your situation changes or you claimed exemption. The 2026 form already includes the deductions worksheet for qualified tips, overtime, car loan interest and the senior deduction created by the 2025 tax law.",
      },
      {
        q: "How do I fill out a W-4 if I want the most money in my paycheck?",
        a: "Claim every credit and deduction you genuinely expect in Steps 3 and 4(b), and skip Step 4(c). That lowers withholding, but the risk is owing tax and possibly an underpayment penalty when you file. A better target is withholding that matches your actual tax as closely as possible. The IRS Tax Withholding Estimator at irs.gov/W4App uses your recent pay stub to calculate it.",
      },
      {
        q: "Should I check the box in Step 2(c)?",
        a: "Check Step 2(c) only if your household has exactly two jobs and both pay roughly the same. The box tells each employer to use half the standard deduction and brackets. If one job pays much more than the other, the box over-withholds; the Multiple Jobs Worksheet or the online estimator is more accurate. Remember to check it on both W-4s, not just one.",
      },
      {
        q: "Who can claim exempt on Form W-4?",
        a: "You can claim exemption only if you had no federal income tax liability last year and expect none this year. Typical examples are students or part-time workers below the filing threshold. Exemption lasts one calendar year; for the 2026 form, you must submit a new W-4 by February 16, 2027 to keep it. Claiming exempt when you will owe tax can lead to a bill and penalties.",
      },
      {
        q: "How do I account for freelance or side business income on my W-4?",
        a: "Estimate the total tax on your side income, including self-employment tax, and divide it by your remaining pay periods. Enter that amount in Step 4(c) as extra withholding. Withholding is treated as paid evenly through the year, which can help avoid underpayment penalties that quarterly estimates might otherwise trigger. Do not list self-employment income in Step 4(a); the instructions exclude it.",
      },
      {
        q: "Does an employer have to send W-4 forms to the IRS?",
        a: "No. Employers keep Form W-4 in their payroll records and use it to calculate withholding. The IRS may direct an employer to withhold at a specific rate through a lock-in letter if an employee is under-withheld. Employers must keep W-4s for at least four years. New hires should complete the form on or before their first payday; without one, the employer withholds as if the employee is single with no adjustments.",
      },
    ],
    content: `
<p>Form W-4 tells your employer how much federal income tax to take out of each paycheck. Most people only need Step 1 and Step 5, while anyone with two jobs, children, side income or the new tips, overtime and senior deductions should complete Steps 2 through 4. This guide walks through the current W-4 form line by line, with examples, and explains what changes when a 2027 version arrives.</p>

<p>Whether you are an employee filling one out or a small business owner collecting them from new hires, getting the W4 form right avoids surprise tax bills in April. This is general information, not tax advice.</p>

<h2>What the W-4 form does (and does not do)</h2>
<p>The W-4, officially the Employee's Withholding Certificate, only controls federal income tax withholding. It does not change Social Security or Medicare tax, which are fixed percentages, and it does not determine your actual tax; your return does that. At year-end your employer reports wages and withholding on <a href="/blog/form-w-2">Form W-2</a>, and the difference between withholding and your real tax becomes your refund or balance due.</p>
<p>The IRS publishes a new revision most years. The <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer">About Form W-4 page</a> lists the current 2026 version; a 2027 revision typically appears in December. The structure has been stable since the 2020 redesign, so the steps below apply either way.</p>

<h2>How to fill out a W-4 form, step by step</h2>
<table><thead><tr><th>Step</th><th>What it covers</th><th>Who completes it</th></tr></thead><tbody>
<tr><td>Step 1</td><td>Name, address, SSN, filing status</td><td>Everyone</td></tr>
<tr><td>Step 2</td><td>Multiple jobs or working spouse</td><td>Two or more jobs in the household</td></tr>
<tr><td>Step 3</td><td>Child and dependent credits</td><td>Income $200,000 or less ($400,000 joint) with dependents</td></tr>
<tr><td>Step 4(a)</td><td>Other income not from jobs</td><td>Interest, dividends, retirement income</td></tr>
<tr><td>Step 4(b)</td><td>Deductions beyond the standard deduction</td><td>Itemizers, tips, overtime, seniors, IRA and similar</td></tr>
<tr><td>Step 4(c)</td><td>Extra withholding per pay period</td><td>Side income, under-withholding fixes</td></tr>
<tr><td>Step 5</td><td>Signature and date</td><td>Everyone</td></tr>
</tbody></table>

<h3>Step 1: Personal information</h3>
<p>Enter your name, address and Social Security number exactly as on your Social Security card. Then choose a filing status: single or married filing separately, married filing jointly, or head of household. Head of household is only for unmarried people who pay more than half the cost of a home for a qualifying person. Your choice sets the standard deduction and brackets used in the withholding calculation.</p>

<h3>Step 2: Multiple jobs or spouse works</h3>
<p>Complete this step if you hold more than one job at the same time, or you are married filing jointly and your spouse also works. Pick one option:</p>
<ul>
<li><strong>(a) IRS Tax Withholding Estimator</strong> at irs.gov/W4App. Most accurate, and the one to use if either of you has self-employment income.</li>
<li><strong>(b) Multiple Jobs Worksheet</strong> on page 3. You look up an annual amount from the tables, divide by pay periods, and enter it in Step 4(c) for the highest-paying job.</li>
<li><strong>(c) The checkbox</strong>, only when there are exactly two jobs with similar pay. Check it on both W-4s.</li>
</ul>
<p>Complete Steps 3 through 4(b) on only one W-4, ideally for the highest-paying job, or credits will be counted twice.</p>

<h3>Step 3: Claim dependents and other credits</h3>
<p>If your income will be $200,000 or less ($400,000 joint), multiply qualifying children under 17 by $2,200 and other dependents by $500 on the 2026 form. You may add other expected credits such as education credits. A parent of two children enters $4,400.</p>

<h3>Step 4(a): Other income</h3>
<p>Enter investment and retirement income you want withholding to cover. Do not include self-employment income here; handle that in Step 4(c).</p>

<h3>Step 4(b): Deductions and the new worksheet</h3>
<p>The 2026 Deductions Worksheet on page 4 added lines for deductions created by the One Big Beautiful Bill Act:</p>
<ul>
<li><strong>Qualified tips:</strong> up to $25,000, if total income is under $150,000 ($300,000 joint).</li>
<li><strong>Qualified overtime:</strong> the half-time premium portion, up to $12,500 ($25,000 joint), with the same income limits. Our guide to <a href="/blog/no-tax-on-overtime">no tax on overtime</a> explains what qualifies.</li>
<li><strong>Passenger vehicle loan interest:</strong> up to $10,000, if income is under $100,000 ($200,000 joint).</li>
<li><strong>Seniors 65 and older:</strong> $6,000 per qualifying person, if income is under $75,000 ($150,000 joint).</li>
</ul>
<p>It also covers student loan interest, deductible IRA contributions and itemized deductions such as state and local taxes, mortgage interest and charitable gifts. Enter the worksheet's result in Step 4(b). Leaving 4(b) blank simply means withholding assumes the standard deduction.</p>

<h3>Step 4(c): Extra withholding</h3>
<p>Any additional dollar amount you want withheld each pay period, including the Multiple Jobs Worksheet result. This is the simplest lever for side income.</p>

<h3>Step 5: Sign and date</h3>
<p>The form is not valid unless signed. Employers fill in their name, EIN and first date of employment at the bottom.</p>

<h2>Worked example: employee with a freelance side business</h2>
<p>Illustrative: Maya is single, earns $62,000 a year paid biweekly (26 periods), has one child under 17, and expects $15,000 of net profit from freelance design that she invoices herself.</p>
<ol>
<li><strong>Step 1:</strong> She qualifies as head of household and checks that box.</li>
<li><strong>Step 2:</strong> Self-employment is not a job for this step, so she skips it.</li>
<li><strong>Step 3:</strong> 1 x $2,200 = $2,200.</li>
<li><strong>Estimate tax on side income:</strong> self-employment tax of about $2,120 ($15,000 x 92.35% x 15.3%) plus income tax at roughly 12% on the remaining taxable amount, about $1,650. Total about $3,770.</li>
<li><strong>Step 4(c):</strong> $3,770 / 26 = $145 extra per paycheck.</li>
</ol>
<p>Maya's paycheck shrinks by $145, but she no longer needs to make <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated tax payments</a>, and withholding counts as paid evenly through the year. If she submits the W-4 mid-year, she should divide by the remaining pay periods instead.</p>

<h2>Example: a two-earner couple</h2>
<p>Illustrative: Sam earns $85,000 and Alex earns $80,000. They file jointly and have two children under 17. Because their salaries are close, the Step 2(c) checkbox is a reasonable choice.</p>
<table><thead><tr><th>Line</th><th>Sam's W-4</th><th>Alex's W-4</th></tr></thead><tbody>
<tr><td>Step 1(c)</td><td>Married filing jointly</td><td>Married filing jointly</td></tr>
<tr><td>Step 2(c)</td><td>Checked</td><td>Checked</td></tr>
<tr><td>Step 3</td><td>$4,400 (2 x $2,200)</td><td>Blank</td></tr>
<tr><td>Step 4(b)</td><td>Deductions worksheet result, if any</td><td>Blank</td></tr>
<tr><td>Step 4(c)</td><td>Blank</td><td>Blank</td></tr>
</tbody></table>
<p>If Alex earned $30,000 instead, the checkbox would over-withhold because it splits the brackets evenly between two very unequal jobs. The Multiple Jobs Worksheet or the IRS estimator would then give a more accurate result.</p>

<h2>How your employer turns the W-4 into withholding</h2>
<p>Employers use the percentage method or wage bracket tables in IRS Publication 15-T. In plain terms, payroll software annualizes your pay for the period, adds any Step 4(a) income, subtracts the standard deduction for your filing status and any Step 4(b) deductions, applies the tax brackets, subtracts your Step 3 credits, divides by the number of pay periods and then adds your Step 4(c) extra amount. That is why the same W-4 produces different withholding on a weekly paycheck than on a monthly one, and why updated tables each January change your take-home pay even when you change nothing.</p>

<h2>Should you aim for a refund?</h2>
<p>A big refund means you lent the government money at zero interest during the year. A balance due over $1,000 can trigger an underpayment penalty unless your withholding met a safe harbor, generally 90% of this year's tax or 100% of last year's (110% if your AGI was over $150,000). Most people are best served by a small refund or small balance due. If you consistently receive more than a few hundred dollars back, reduce withholding through Step 3 or 4(b); if you owe each year, add a Step 4(c) amount.</p>

<h2>When to submit a new W-4</h2>
<ul>
<li>You start a new job (submit by your first payday).</li>
<li>You marry, divorce, or have a child.</li>
<li>You or your spouse take a second job or start a side business; see our guide to <a href="/blog/side-hustle-taxes">side hustle taxes</a>.</li>
<li>You claimed exempt; for 2026 you must refile by February 16, 2027.</li>
<li>You receive large bonuses or commissions; supplemental pay is often withheld at a flat 22%, explained in our guide to the <a href="/blog/bonus-tax-rate">bonus tax rate</a>.</li>
<li>Last year's refund or balance due was larger than you wanted.</li>
</ul>

<h2>Employer responsibilities for Form W-4</h2>
<p>If you are <a href="/blog/hiring-your-first-employee">hiring your first employee</a>, collect a W-4 before the first payroll and keep it on file for at least four years. Do not send it to the IRS unless asked. If an employee does not provide one, withhold as if they were single with no adjustments. Apply a new W-4 no later than the start of the first payroll period ending 30 or more days after you receive it. Our guide on <a href="/blog/how-to-do-payroll-yourself">how to do payroll yourself</a> shows where withholding fits in each pay run, and the difference between employees and contractors is covered in <a href="/blog/w2-vs-1099">W-2 vs 1099</a>. Contractors complete Form W-9, not a W-4.</p>

<h2>Common W-4 mistakes</h2>
<ul>
<li><strong>Claiming credits on both spouses' forms.</strong> Steps 3 and 4(b) belong on one W-4 only.</li>
<li><strong>Checking Step 2(c) on one form but not the other.</strong> Withholding then ends up too low.</li>
<li><strong>Putting self-employment income in Step 4(a).</strong> Use 4(c) instead.</li>
<li><strong>Overestimating tips or overtime deductions</strong> in 4(b), which leaves you under-withheld.</li>
<li><strong>Never revisiting the form.</strong> Recheck each January with the estimator once the <a href="/blog/federal-tax-brackets-2027">2027 tax brackets</a> are final.</li>
</ul>

<h2>Paid as a contractor instead?</h2>
<p>If you are paid on invoice rather than through payroll, no W-4 applies; nobody withholds for you, so you set aside your own tax and pay quarterly. Keep every invoice and payment record for your return. You can create invoices for free with our <a href="/invoice-generator">invoice generator</a>: no sign-up, and you can download each one as a PDF.</p>
`,
  },
  {
    slug: "hsa-contribution-limits-2027",
    title: "2027 HSA Contribution Limits and Rules for the Self-Employed",
    description:
      "HSA limits 2027 are final: $4,500 self-only and $9,000 family. See HDHP rules, catch-ups, the last-month rule and how self-employed people deduct HSA savings.",
    category: "tax-compliance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "self-employed-health-insurance-deduction",
      "self-employed-tax-deductions",
      "solo-401k-vs-sep-ira",
    ],
    faqs: [
      {
        q: "What are the HSA contribution limits for 2027?",
        a: "The IRS set the 2027 limits in Revenue Procedure 2026-24: $4,500 for self-only coverage and $9,000 for family coverage under a qualifying high-deductible health plan. People 55 or older can add a $1,000 catch-up, which is not indexed for inflation. The 2026 limits are $4,400 and $8,750. Contributions from all sources, including an employer, count toward the limit.",
      },
      {
        q: "Can self-employed people contribute to an HSA?",
        a: "Yes, if they are covered by an HSA-eligible high-deductible health plan, have no disqualifying other coverage, are not enrolled in Medicare and cannot be claimed as someone's dependent. Self-employment itself has no effect on eligibility. Sole proprietors contribute personally and take the deduction on Form 8889 and Schedule 1. The deduction lowers income tax but not self-employment tax.",
      },
      {
        q: "What counts as a high-deductible health plan in 2027?",
        a: "For 2027, an HDHP must have a minimum annual deductible of at least $1,750 for self-only coverage or $3,500 for family coverage, and out-of-pocket expenses capped at $8,700 or $17,400. From 2026, the 2025 tax law also treats bronze and catastrophic marketplace plans as HSA-compatible, which matters for self-employed people who buy insurance through the exchange.",
      },
      {
        q: "What is the deadline for 2027 HSA contributions?",
        a: "You can contribute for 2027 from January 1, 2027 until the tax filing deadline in April 2028, not including extensions. When you contribute between January and April, tell the HSA custodian which year the deposit is for. Employer contributions through payroll count in the year they are made, so check your year-to-date total before making a late personal contribution.",
      },
      {
        q: "What happens if I contribute too much to my HSA?",
        a: "Excess contributions are subject to a 6% excise tax for every year they remain in the account. Fix it by withdrawing the excess, plus any earnings on it, before your tax filing deadline, including extensions. The earnings are taxable income. Excesses often happen when someone changes jobs mid-year, loses HDHP coverage or relies on the last-month rule and then fails the testing period.",
      },
      {
        q: "Can an S corporation owner get HSA contributions through the business?",
        a: "Yes, but the treatment differs. For a shareholder owning more than 2% of an S corporation, HSA contributions made by the company are included in the shareholder's W-2 wages, though generally not subject to Social Security and Medicare tax. The shareholder then takes the HSA deduction on their personal return. This is similar to how health insurance premiums are handled for more-than-2% shareholders.",
      },
    ],
    content: `
<p>The 2027 HSA contribution limits are $4,500 for self-only coverage and $9,000 for family coverage, plus a $1,000 catch-up if you are 55 or older. Unlike many 2027 figures, these are already final: the IRS published them in May 2026. For the self-employed, an HSA is one of the few accounts that is deductible going in, grows tax-free and comes out tax-free for medical costs.</p>

<p>Below you will find the numbers, the eligibility rules that trip people up, how sole proprietors and S corporation owners claim the deduction, and a worked example. This is general information, not tax advice; confirm your situation with a tax professional.</p>

<h2>HSA limits 2027 vs 2026</h2>
<p>The IRS released the 2027 amounts in <a href="https://www.irs.gov/irb/2026-25_irb" target="_blank" rel="noopener noreferrer">Revenue Procedure 2026-24</a>. Here is how they compare with 2026.</p>
<table><thead><tr><th>Item</th><th>2026</th><th>2027</th></tr></thead><tbody>
<tr><td>HSA contribution, self-only</td><td>$4,400</td><td>$4,500</td></tr>
<tr><td>HSA contribution, family</td><td>$8,750</td><td>$9,000</td></tr>
<tr><td>Catch-up, age 55+</td><td>$1,000</td><td>$1,000</td></tr>
<tr><td>HDHP minimum deductible, self-only</td><td>$1,700</td><td>$1,750</td></tr>
<tr><td>HDHP minimum deductible, family</td><td>$3,400</td><td>$3,500</td></tr>
<tr><td>HDHP out-of-pocket max, self-only</td><td>$8,500</td><td>$8,700</td></tr>
<tr><td>HDHP out-of-pocket max, family</td><td>$17,000</td><td>$17,400</td></tr>
</tbody></table>
<p>The catch-up is fixed in the tax code and does not rise with inflation. If both spouses are 55 or older, each needs their own HSA to make a catch-up contribution.</p>

<h2>Who is eligible to contribute to an HSA?</h2>
<p>Eligibility is tested month by month. You must:</p>
<ul>
<li>Be covered by an HSA-eligible high-deductible health plan (HDHP) on the first day of the month.</li>
<li>Have no other disqualifying health coverage, such as a general-purpose health FSA or a non-HDHP spouse plan that covers you.</li>
<li>Not be enrolled in Medicare.</li>
<li>Not be claimable as someone else's dependent.</li>
</ul>

<h3>What the 2025 tax law changed</h3>
<p>The One Big Beautiful Bill Act widened access from 2026:</p>
<ul>
<li><strong>Marketplace bronze and catastrophic plans</strong> are treated as HSA-compatible, which helps freelancers who buy coverage through the exchange.</li>
<li><strong>Direct primary care arrangements</strong> no longer disqualify you if fees stay within the monthly limits ($150 self-only, $300 family), and HSA funds can pay those fees.</li>
<li><strong>Telehealth coverage before the deductible</strong> is permanently allowed without breaking HDHP status.</li>
</ul>

<h2>How the HSA deduction works for the self-employed</h2>
<p>Employees usually contribute through a payroll cafeteria plan, which avoids income tax and FICA. Self-employed people do not have that option for themselves, so the treatment differs by business type.</p>
<table><thead><tr><th>Business type</th><th>How you contribute</th><th>Tax effect</th></tr></thead><tbody>
<tr><td>Sole proprietor or single-member LLC</td><td>Personal deposits to your HSA</td><td>Deduct on Form 8889 and Schedule 1; reduces income tax, not SE tax</td></tr>
<tr><td>Partner in a partnership</td><td>Personal, or the partnership contributes as a guaranteed payment</td><td>Guaranteed payment is income to you; you take the HSA deduction</td></tr>
<tr><td>More-than-2% S corp shareholder</td><td>Company contributes; amount added to your W-2 wages</td><td>Generally exempt from FICA; you deduct it on your return</td></tr>
<tr><td>C corporation owner-employee</td><td>Through payroll like any employee</td><td>Excluded from wages and FICA</td></tr>
</tbody></table>
<p>The HSA is separate from the <a href="/blog/self-employed-health-insurance-deduction">self-employed health insurance deduction</a>, which covers premiums. You can claim both: premiums under that deduction and HSA contributions under Form 8889. HSA funds cannot be used for premiums in most cases.</p>

<h2>Worked example: a self-employed couple in 2027</h2>
<p>Illustrative: Dan, 56, runs a landscaping business as a sole proprietor and buys a family HDHP through the marketplace. His wife, 53, is covered on the same plan.</p>
<ol>
<li><strong>Family limit:</strong> $9,000.</li>
<li><strong>Dan's catch-up:</strong> $1,000, deposited in his own HSA.</li>
<li><strong>Total contribution:</strong> $10,000.</li>
<li><strong>Tax saving:</strong> in the 22% federal bracket, about $2,200 of income tax, plus state tax savings in most states.</li>
<li><strong>Not saved:</strong> self-employment tax, because the deduction is taken on the personal return.</li>
</ol>
<p>If Dan converted to an S corporation and paid himself a salary, the company contribution would still not reduce income tax on the W-2, but it would generally avoid FICA, saving another 15.3% on the $10,000 when combining both employer and employee shares. That is one of many small differences worth modeling when weighing <a href="/blog/s-corp-vs-llc">S corp vs LLC</a> status.</p>

<h2>Partial-year eligibility and the last-month rule</h2>
<p>If you become HSA-eligible mid-year, your limit is normally prorated by month. Someone with self-only coverage from July 1, 2027 can contribute 6/12 x $4,500 = $2,250.</p>
<p>The last-month rule is an alternative: if you are eligible on December 1, you may contribute the full annual amount, as long as you stay eligible through December 31 of the following year (the testing period). Fail that, for example by switching to a non-HDHP plan, and the extra amount becomes taxable income plus a 10% additional tax.</p>

<h2>Step by step: setting up and funding an HSA</h2>
<ol>
<li><strong>Confirm your plan is HSA-eligible.</strong> Insurers label qualifying plans; for 2027 check the $1,750 or $3,500 minimum deductible.</li>
<li><strong>Open an HSA</strong> with a bank or brokerage. Look for low fees and investment options if you plan to invest.</li>
<li><strong>Set up automatic transfers.</strong> Many freelancers move a fixed amount after each client payment.</li>
<li><strong>Keep receipts</strong> for every medical expense you pay from the HSA. There is no deadline to reimburse yourself as long as the expense occurred after the HSA was opened.</li>
<li><strong>File Form 8889</strong> with your return to report contributions and distributions.</li>
</ol>

<h2>Common HSA mistakes</h2>
<ul>
<li><strong>Contributing while on Medicare.</strong> Enrollment, including retroactive Part A, ends eligibility.</li>
<li><strong>Having a spouse's general-purpose FSA</strong> that can reimburse your expenses, which disqualifies you.</li>
<li><strong>Using HSA money for non-medical costs</strong> before 65, which triggers income tax plus a 20% penalty.</li>
<li><strong>Ignoring the 6% excise tax</strong> on excess contributions instead of withdrawing the excess before the deadline.</li>
<li><strong>Forgetting to coordinate with other savings.</strong> An HSA works alongside, not instead of, retirement accounts; see our guide to <a href="/blog/401k-contribution-limits-2027">2027 401(k) and IRA limits for the self-employed</a>.</li>
</ul>

<h2>Using an HSA as a long-term investment account</h2>
<p>Many self-employed people treat the HSA as a second retirement account. Instead of spending the balance on this year's doctor bills, they pay medical costs out of pocket, keep the receipts, and leave the HSA invested. Years later they can reimburse themselves tax-free for those old expenses, as long as each expense occurred after the HSA was established.</p>
<p>Illustrative: if Dan from the example above invests $10,000 a year for 10 years and earns an average 6% annual return, the account would grow to roughly $132,000. If he had $25,000 of saved medical receipts by then, he could withdraw that amount tax-free at any time and leave the rest growing. Returns are not guaranteed, and investing means the balance can fall, so keep enough in cash to cover your deductible.</p>
<p>When choosing a custodian for this strategy, compare monthly fees, the minimum cash balance required before you can invest, and the fund options. A low-cost provider can make a meaningful difference over decades.</p>

<h2>What happens to your HSA if your situation changes</h2>
<ul>
<li><strong>You switch to a non-HDHP plan:</strong> you stop contributing, but you keep the account and can still spend it on qualified expenses.</li>
<li><strong>You close your business and take a job:</strong> the HSA stays yours; you may be able to add to it through your new employer's payroll.</li>
<li><strong>You enroll in Medicare:</strong> contributions must stop from the month Medicare begins, but withdrawals for qualified expenses remain tax-free.</li>
</ul>

<h2>HSA vs FSA vs HRA</h2>
<p>Small business owners often confuse the three tax-advantaged health accounts. Here is how they differ.</p>
<table><thead><tr><th>Feature</th><th>HSA</th><th>Health FSA</th><th>HRA</th></tr></thead><tbody>
<tr><td>Who owns it</td><td>The individual</td><td>The employer plan</td><td>The employer plan</td></tr>
<tr><td>Who can fund it</td><td>Individual, employer or both</td><td>Mainly employee salary reductions</td><td>Employer only</td></tr>
<tr><td>Requires an HDHP</td><td>Yes</td><td>No</td><td>No</td></tr>
<tr><td>Rolls over</td><td>Yes, indefinitely</td><td>Limited carryover or grace period</td><td>Depends on plan design</td></tr>
<tr><td>Portable when you leave</td><td>Yes</td><td>No</td><td>Usually no</td></tr>
<tr><td>Available to sole proprietors for themselves</td><td>Yes</td><td>No</td><td>No</td></tr>
<tr><td>Can invest the balance</td><td>Yes, with most custodians</td><td>No</td><td>No</td></tr>
</tbody></table>
<p>The health FSA salary reduction limit for 2026 is $3,400. A general-purpose FSA, including one through a spouse's employer, blocks HSA eligibility; a limited-purpose FSA for dental and vision does not.</p>

<h2>Offering HSA contributions to employees</h2>
<p>Once you hire, you can contribute to employees' HSAs as a benefit. Contributions made through a Section 125 cafeteria plan are excluded from wages and payroll taxes and can vary under the cafeteria plan rules. Contributions made outside a cafeteria plan must be comparable: the same amount or the same percentage of the deductible for all comparable participating employees, or a 35% excise tax can apply. Employer and employee contributions together count toward each employee's annual limit, so tell staff what you contribute so they can adjust their own deposits.</p>

<h2>What counts as a qualified medical expense?</h2>
<ul>
<li>Deductibles, copays and coinsurance.</li>
<li>Prescription drugs and insulin; over-the-counter medicines and menstrual care products.</li>
<li>Dental treatment, including cleanings and orthodontics.</li>
<li>Vision care, eyeglasses and contact lenses.</li>
<li>Direct primary care fees within the OBBBA limits.</li>
<li>Medicare premiums and long-term care premiums (within age-based limits) once you are 65, but generally not other health insurance premiums.</li>
</ul>
<p>Keep invoices and receipts from providers. If the IRS asks, you must show each withdrawal paid for a qualified expense.</p>

<h2>HSA vs retirement plan: which first?</h2>
<p>Many planners suggest funding an HSA early because it is the only account with a deduction on the way in and tax-free withdrawals for qualified medical costs. After 65, non-medical withdrawals are taxed like a traditional IRA without penalty. If cash is limited, a common order is: enough in a workplace plan to get any match, then the HSA, then the rest of your retirement contributions. Our <a href="/blog/solo-401k-vs-sep-ira">solo 401(k) vs SEP IRA</a> comparison helps with the next step, and our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> shows where the HSA sits among other write-offs.</p>

<h2>Fund your HSA from steady invoicing</h2>
<p>An HSA rewards consistent deposits, and that depends on predictable income. Invoice promptly, set clear payment terms, and earmark part of each payment for your HSA and taxes, a habit covered in <a href="/blog/how-much-to-set-aside-for-taxes">how much to set aside for taxes</a>. You can create and send invoices with our free <a href="/invoice-generator">invoice generator</a>: no sign-up, and every invoice downloads as a PDF.</p>
`,
  },
  {
    slug: "simple-ira",
    title: "SIMPLE IRA for Small Business: 2027 Limits and Setup",
    description:
      "SIMPLE IRA guide for small business owners: who qualifies, 2026 limits and 2027 outlook, 3% match vs 2% contribution, setup deadlines and a worked example.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "solo-401k-vs-sep-ira",
      "employer-payroll-taxes",
      "hiring-your-first-employee",
    ],
    faqs: [
      {
        q: "What is the SIMPLE IRA contribution limit for 2027?",
        a: "The IRS had not announced 2027 SIMPLE limits at the time of writing; they are normally released with the 401(k) limits in November. For 2026, employees can defer up to $17,000, with an extra $4,000 catch-up at age 50 or older and $5,250 for ages 60 to 63. Certain plans that qualify for the higher SECURE 2.0 limit allow $18,100. Check the IRS newsroom for the 2027 update.",
      },
      {
        q: "What is the deadline to set up a SIMPLE IRA?",
        a: "An employer that has never had a SIMPLE IRA can set one up with an effective date anywhere from January 1 through October 1 of the year. A business that came into existence after October 1 can set one up as soon as administratively feasible. Employees must also be given their election period, normally the 60 days before January 1, to choose their deferrals.",
      },
      {
        q: "Does the employer have to contribute to a SIMPLE IRA?",
        a: "Yes. Every year the employer must either match employee deferrals dollar for dollar up to 3% of pay, or make a 2% nonelective contribution for every eligible employee whether they defer or not. The match can be reduced to as low as 1% in no more than two out of five years, with notice to employees. Employer contributions are deductible business expenses.",
      },
      {
        q: "Can I have a SIMPLE IRA and a 401(k) at the same time?",
        a: "Generally no. The exclusive plan rule says an employer that sponsors a SIMPLE IRA cannot maintain another qualified retirement plan for the same year. SECURE 2.0 does allow an employer to replace a SIMPLE IRA with a safe harbor 401(k) mid-year, subject to transition rules. Employees can still contribute to their own personal IRAs on top of the SIMPLE IRA.",
      },
      {
        q: "What is the penalty for early withdrawal from a SIMPLE IRA?",
        a: "Withdrawals before age 59 and a half generally face income tax plus a 10% additional tax. During the first two years after an employee first participates, the additional tax rises to 25%. Rolling money out of a SIMPLE IRA to a non-SIMPLE IRA during that two-year window is also treated as a distribution, so employees should usually leave contributions in place until two years have passed.",
      },
      {
        q: "How many employees can a business have to use a SIMPLE IRA?",
        a: "A SIMPLE IRA is available to employers with 100 or fewer employees who earned at least $5,000 in the prior year. If you grow beyond 100, there is a two-year grace period to keep the plan. Employers with 26 to 100 employees can use the higher SECURE 2.0 deferral limit only if they make a 4% match or 3% nonelective contribution.",
      },
    ],
    content: `
<p>A SIMPLE IRA is the easiest retirement plan for a small business with employees: no annual Form 5500 filing, low setup cost, and employees save through payroll while the employer adds a 3% match or a 2% contribution. For 2026 employees can defer up to $17,000, and the 2027 limit is due from the IRS in November. If you want a plan in place for your team next year, now is the time to decide.</p>

<p>This guide covers eligibility, limits, the two employer contribution formulas, setup step by step, and a payroll example with real numbers. It is general information, not tax or legal advice; a plan provider or tax professional can confirm the details for your business.</p>

<h2>What is a SIMPLE IRA?</h2>
<p>SIMPLE stands for Savings Incentive Match Plan for Employees. The employer adopts the plan, each eligible employee opens a SIMPLE IRA at a financial institution, and contributions go straight into those accounts. The IRS summarizes the rules on its <a href="https://www.irs.gov/retirement-plans/plan-sponsor/simple-ira-plan" target="_blank" rel="noopener noreferrer">SIMPLE IRA plan page</a>. The plan suits businesses that have outgrown owner-only options but do not want the testing and administration of a full 401(k).</p>

<h2>SIMPLE IRA limits: 2026 and 2027</h2>
<table><thead><tr><th>Limit</th><th>2026</th><th>2027</th></tr></thead><tbody>
<tr><td>Employee deferral</td><td>$17,000</td><td>Pending IRS announcement</td></tr>
<tr><td>Higher deferral (qualifying plans under SECURE 2.0)</td><td>$18,100</td><td>Pending</td></tr>
<tr><td>Catch-up, age 50+</td><td>$4,000 ($3,850 for certain higher-limit plans)</td><td>Pending</td></tr>
<tr><td>Catch-up, ages 60-63</td><td>$5,250</td><td>Pending</td></tr>
<tr><td>Compensation limit for 2% nonelective contribution</td><td>$360,000</td><td>Pending</td></tr>
</tbody></table>
<p>The 2026 figures come from the IRS release on 2026 limits. Unlike 401(k) plans, the mandatory Roth rule for high earners' catch-up contributions does not apply to SIMPLE IRAs. The deferral limit is shared with any 401(k) the employee contributes to at another job.</p>

<h2>Who can use a SIMPLE IRA?</h2>
<ul>
<li><strong>Employer size:</strong> 100 or fewer employees who received at least $5,000 in compensation in the prior year.</li>
<li><strong>No other plan:</strong> you cannot maintain another retirement plan in the same year (the exclusive plan rule).</li>
<li><strong>Employee eligibility:</strong> anyone who earned at least $5,000 in any two prior years and is expected to earn $5,000 this year. You can use looser rules, but not stricter ones.</li>
<li><strong>Excludable groups:</strong> union employees whose retirement benefits were bargained for, and nonresident aliens with no US wages.</li>
</ul>
<p>Self-employed owners participate too. A sole proprietor's compensation is net earnings from self-employment.</p>

<h2>Employer contributions: 3% match vs 2% nonelective</h2>
<table><thead><tr><th>Feature</th><th>3% match</th><th>2% nonelective</th></tr></thead><tbody>
<tr><td>Who receives it</td><td>Only employees who defer</td><td>Every eligible employee</td></tr>
<tr><td>Amount</td><td>Dollar for dollar up to 3% of pay</td><td>2% of pay, up to the compensation limit</td></tr>
<tr><td>Flexibility</td><td>Can drop to 1% in 2 of any 5 years</td><td>Fixed</td></tr>
<tr><td>Cost predictability</td><td>Depends on participation</td><td>Predictable</td></tr>
<tr><td>Best for</td><td>Teams with mixed participation</td><td>Teams where few defer but you want to reward everyone</td></tr>
</tbody></table>
<p>Under SECURE 2.0, employers can also add an extra uniform nonelective contribution up to the lesser of 10% of pay or $5,000 per employee. Employers with 26 to 100 employees that want the higher $18,100 deferral limit must offer a 4% match or 3% nonelective contribution.</p>

<h2>Worked example: a five-person design studio</h2>
<p>Illustrative: a studio owner (sole proprietor, $110,000 net earnings after the SE tax adjustment) has four employees and chooses the 3% match for 2026.</p>
<table><thead><tr><th>Person</th><th>Pay</th><th>Deferral</th><th>Employer match</th></tr></thead><tbody>
<tr><td>Owner</td><td>$110,000</td><td>$17,000</td><td>$3,300</td></tr>
<tr><td>Designer A</td><td>$58,000</td><td>$2,900 (5%)</td><td>$1,740</td></tr>
<tr><td>Designer B</td><td>$52,000</td><td>$1,040 (2%)</td><td>$1,040</td></tr>
<tr><td>Coordinator</td><td>$41,000</td><td>$0</td><td>$0</td></tr>
<tr><td>Part-time assistant</td><td>$18,000</td><td>$540 (3%)</td><td>$540</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td><strong>$6,620</strong></td></tr>
</tbody></table>
<p>The employee match costs $3,320, and the owner's own $3,300 match is deductible on the owner's return. Had the owner chosen the 2% nonelective contribution, every employee would get 2% regardless of deferral: $1,160 + $1,040 + $820 + $360 = $3,380 for staff, plus $2,200 for the owner. The coordinator would receive $820 instead of nothing.</p>
<p>The owner saves $20,300 in total. With a <a href="/blog/solo-401k-vs-sep-ira">solo 401(k)</a> the owner could save more, but a solo plan is not allowed once you have eligible employees, and a SEP IRA would require the same percentage for everyone, so a 20% SEP contribution would cost far more for staff.</p>

<h2>How to set up a SIMPLE IRA step by step</h2>
<ol>
<li><strong>Choose a provider</strong> (bank, brokerage or payroll provider). Many payroll services connect directly.</li>
<li><strong>Adopt the plan document.</strong> Use IRS Form 5304-SIMPLE if employees choose their own institution, or Form 5305-SIMPLE if you designate one. Keep it in your records; it is not filed with the IRS.</li>
<li><strong>Pick the contribution formula</strong> for the year: 3% match or 2% nonelective.</li>
<li><strong>Give employees notice</strong> before the election period, including the summary description and the formula.</li>
<li><strong>Run the election period.</strong> For a January 1 start, it is the 60 days before January 1 (November 2 to December 31).</li>
<li><strong>Open accounts</strong> for each participant.</li>
<li><strong>Withhold deferrals in payroll</strong> and deposit them within 30 days after the end of the month in which they were withheld. Do it faster where possible.</li>
<li><strong>Deposit employer contributions</strong> by your tax return due date, including extensions.</li>
</ol>
<p>A plan can begin on any date from January 1 through October 1 in its first year, so if you miss January, you can still start mid-2027.</p>

<h3>Tax credits for starting a plan</h3>
<p>Small employers may qualify for a credit for retirement plan startup costs, and in some cases for employer contributions, claimed on Form 8881. The amounts depend on your employee count; confirm with your tax preparer before you budget for the plan.</p>

<h2>How the plan fits into payroll</h2>
<p>Employee deferrals reduce income tax withholding but are still subject to Social Security and Medicare, so they show in Box 12 of <a href="/blog/form-w-2">Form W-2</a> with code S. Employer contributions are not wages and are not subject to FICA. Factor the match into your overall cost of an employee alongside <a href="/blog/employer-payroll-taxes">employer payroll taxes</a> and benefits; if you are still building out payroll, start with <a href="/blog/how-to-do-payroll-yourself">how to do payroll yourself</a>.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Late deposits of deferrals.</strong> Employee money must go in promptly; late deposits are a prohibited transaction risk.</li>
<li><strong>Excluding eligible part-timers</strong> who meet the $5,000 test.</li>
<li><strong>Adding a 401(k) mid-year</strong> without following the transition rules.</li>
<li><strong>Missing the termination notice.</strong> To end a SIMPLE IRA for next year, notify employees before November 2.</li>
<li><strong>Underbudgeting the match.</strong> Model the cost in your <a href="/blog/small-business-budget">small business budget</a> using realistic participation rates.</li>
</ul>

<h2>SIMPLE IRA vs SEP IRA vs 401(k) for employers</h2>
<table><thead><tr><th>Feature</th><th>SIMPLE IRA</th><th>SEP IRA</th><th>Traditional or safe harbor 401(k)</th></tr></thead><tbody>
<tr><td>Employee deferrals</td><td>Yes</td><td>No</td><td>Yes</td></tr>
<tr><td>Employer cost</td><td>3% match or 2% of pay</td><td>Same percentage for all eligible staff, up to 25%</td><td>Depends on design; safe harbor match or 3% contribution</td></tr>
<tr><td>Annual nondiscrimination testing</td><td>No</td><td>No</td><td>Yes, unless safe harbor</td></tr>
<tr><td>Form 5500 filing</td><td>No</td><td>No</td><td>Yes</td></tr>
<tr><td>Typical setup and admin cost</td><td>Low</td><td>Low</td><td>Moderate to high</td></tr>
<tr><td>Vesting</td><td>Immediate</td><td>Immediate</td><td>Can use a vesting schedule</td></tr>
<tr><td>Max owner savings</td><td>Moderate</td><td>High, but costly with staff</td><td>Highest</td></tr>
<tr><td>Loans</td><td>No</td><td>No</td><td>Optional</td></tr>
</tbody></table>
<p>The trade-off is simple: a SIMPLE IRA caps what the owner can save but keeps cost and paperwork low. Once owner savings become the priority and the team is stable, many businesses move to a safe harbor 401(k).</p>

<h2>Annual SIMPLE IRA calendar</h2>
<table><thead><tr><th>When</th><th>Task</th></tr></thead><tbody>
<tr><td>Before November 2</td><td>Send the annual notice: contribution formula for next year, election rights, summary description</td></tr>
<tr><td>November 2 to December 31</td><td>Election period; collect new or changed deferral elections</td></tr>
<tr><td>January 1</td><td>New deferral elections and limits take effect in payroll</td></tr>
<tr><td>Every payroll</td><td>Withhold deferrals; deposit within 30 days after month-end</td></tr>
<tr><td>By January 31</td><td>Report deferrals on Form W-2, Box 12, code S</td></tr>
<tr><td>By the tax filing deadline (with extensions)</td><td>Deposit employer match or nonelective contributions for the prior year</td></tr>
</tbody></table>
<p>Because it is early November as this is written, an employer that wants to keep its current formula for 2027 should already have sent its notice. If you missed the date, send it as soon as possible and give employees a full 60-day window from the notice to make elections.</p>

<h2>How owners participate</h2>
<p>A sole proprietor or partner treats net earnings from self-employment, after subtracting half of self-employment tax, as compensation. Deferrals and the employer match for the owner are deducted on the owner's personal return rather than as a business expense on Schedule C. An S corporation owner participates through W-2 salary like any other employee, so the match is based on salary, not distributions. If you pay yourself a small salary, your SIMPLE IRA contributions will be small too.</p>

<h2>Switching from a SIMPLE IRA to a 401(k)</h2>
<ol>
<li><strong>Decide the effective date.</strong> Traditionally a switch happens on January 1; SECURE 2.0 allows a mid-year replacement with a safe harbor 401(k) under transition rules.</li>
<li><strong>Notify employees before November 2</strong> that the SIMPLE IRA will end on January 1 if you are switching at year-end.</li>
<li><strong>Tell the financial institution and payroll provider</strong> so deferrals stop on the right date.</li>
<li><strong>Remind employees about the two-year rule.</strong> Money in a SIMPLE IRA for less than two years generally can only move to another SIMPLE IRA; moving it elsewhere risks the 25% additional tax, so confirm any transfer with the plan provider.</li>
</ol>

<h2>Compare with other plans</h2>
<p>If you have no employees, the <a href="/blog/401k-contribution-limits-2027">2027 401(k) and IRA limits for the self-employed</a> usually allow far higher contributions. If you are about to hire, our guide to <a href="/blog/hiring-your-first-employee">hiring your first employee</a> covers the other setup steps.</p>

<h2>Pay for benefits with steady cash flow</h2>
<p>Retirement contributions are easier to sustain when client payments arrive on time. Use clear payment terms and send invoices as soon as work is delivered. Our free <a href="/invoice-generator">invoice generator</a> lets you create professional invoices with no sign-up and download them as PDF.</p>
`,
  },
];
