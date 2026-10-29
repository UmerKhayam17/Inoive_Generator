import type { PostDraft } from "../blog";

export const ACCOUNTING_2026_D_POSTS: PostDraft[] = [
  {
    slug: "how-to-calculate-net-income",
    title: "How to Calculate Net Income: Formula, Steps and Examples",
    description:
      "How to calculate net income step by step: the net income formula, what to subtract, a full worked example for a company and a sole trader, and common mistakes.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "gross-profit-vs-net-profit",
      "profit-and-loss-statement",
      "how-to-calculate-profit-margin",
      "operating-expenses",
    ],
    faqs: [
      {
        q: "What is the basic formula for net income?",
        a: "The basic net income formula is total revenue minus total expenses. In practice you work through it in layers: revenue minus cost of goods sold gives gross profit, gross profit minus operating expenses gives operating income, then you add or subtract other income and expenses such as interest, and finally subtract income tax. The result is net income. If expenses are larger than revenue, the result is a net loss.",
      },
      {
        q: "Is net income the same as profit?",
        a: "Net income is one specific kind of profit: the amount left after every expense for the period, including interest and income tax. People often say profit when they mean gross profit or operating profit, which are larger numbers because fewer costs have been taken out. When a lender, buyer or accountant asks for net income, they want the bottom line of the profit and loss statement, not a figure from higher up.",
      },
      {
        q: "Do owner draws reduce net income?",
        a: "No. Owner draws and distributions are payments of profit to the owner, not business expenses, so they do not reduce net income. A sole proprietor who earns $78,100 of net profit and takes $60,000 out of the business still has $78,100 of net profit for tax purposes. Salaries paid to an owner who is a W-2 employee of their own corporation are different: those are wages and do count as an expense.",
      },
      {
        q: "How do I calculate net income from an income statement?",
        a: "Find total revenue at the top, then read down. Subtract cost of goods sold to reach gross profit, subtract the operating expense total to reach operating income, add other income and subtract other expenses such as interest, then subtract the income tax line. Most accounting software prints the net income line at the bottom of the report, but checking each subtotal by hand catches miscategorised items and duplicated expenses.",
      },
      {
        q: "Is net income calculated before or after tax?",
        a: "Net income is after tax. The figure before income tax is called pre-tax income or earnings before tax. For a C corporation, the income tax line is a business expense, so net income is noticeably lower than pre-tax income. For sole proprietors and most single-member LLCs, the business does not pay income tax itself, so the Schedule C net profit is effectively the business's pre-tax figure and the owner pays tax personally.",
      },
      {
        q: "What is a good net income margin for a small business?",
        a: "There is no single good number, because margins depend heavily on the industry. Service businesses with few direct costs often keep a much larger share of revenue than retailers, restaurants or construction firms. The most useful benchmark is your own history: track net margin each month or quarter and investigate any fall. Comparing against businesses with a similar model and size is more meaningful than comparing against a broad average.",
      },
      {
        q: "Can a business have positive net income but no cash?",
        a: "Yes, and it is common. Under accrual accounting, an invoice counts as revenue when you issue it, even if the client has not paid. Loan principal repayments, inventory purchases and equipment purchases also use cash without appearing as expenses in full. So a business can report healthy net income while its bank balance falls. That is why owners should read the cash flow statement and the receivables report alongside the profit and loss.",
      },
      {
        q: "How often should I calculate net income?",
        a: "Monthly is a good rhythm for most small businesses. It is frequent enough to spot problems such as rising costs or unpaid invoices while there is still time to fix them, and it makes quarterly estimated tax payments and year-end filing much easier. At minimum, calculate it quarterly. Use the same method and the same expense categories each time so the numbers are comparable from period to period.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To calculate net income, take total revenue and subtract every expense for the period: cost of goods sold, operating expenses, interest and other non-operating costs, and income tax. The net income formula is <strong>Net income = Total revenue - Total expenses</strong>. A positive result is a profit, a negative result is a net loss.</p>

<p>Knowing how to calculate net income matters because it is the number lenders, investors, buyers and tax forms all come back to. This guide walks through the formula in layers, shows a full worked example for a small company and a freelancer, and covers the adjustments that trip people up. If you are still deciding which profit figure you need, our comparison of <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a> explains the difference, and clean records from an <a href="/invoice-generator">online invoice generator</a> make the revenue side of the calculation far easier.</p>

<h2>The net income formula in its three common forms</h2>

<p>All three versions below give the same answer. They differ only in how much detail you show along the way.</p>

<table>
<thead>
<tr><th>Version</th><th>Formula</th><th>When to use it</th></tr>
</thead>
<tbody>
<tr><td>Basic</td><td>Total revenue - Total expenses</td><td>Quick checks, simple service businesses</td></tr>
<tr><td>From gross profit</td><td>Gross profit - Operating expenses - Interest - Taxes + Other income</td><td>Businesses that sell products and track COGS</td></tr>
<tr><td>Full multi-step</td><td>Revenue - COGS - Operating expenses +/- Other items - Income tax</td><td>Monthly reporting, loan applications, investor updates</td></tr>
</tbody>
</table>

<p>The multi-step version is the most useful because each subtotal tells you something. Gross profit shows whether your pricing covers direct costs. <a href="/blog/operating-income">Operating income</a> shows whether the core business is profitable. Net income shows what is left after financing costs and tax. Pick one version and use it consistently, so you never subtract cost of goods sold twice or leave interest out one month and in the next.</p>

<h2>What goes into each line</h2>

<h3>Revenue</h3>
<p>Revenue is everything you earned from selling goods or services in the period, net of returns, refunds and discounts you gave. Sales tax you collected is not revenue: it belongs to the tax authority. If you invoice clients, your invoice register is the starting point. Our guide to <a href="/blog/revenue-vs-profit">revenue vs profit</a> covers what counts.</p>

<h3>Cost of goods sold</h3>
<p>COGS is the direct cost of what you sold: materials, inventory, direct production labour and freight in. A consultant may have almost none. A retailer may find COGS is the biggest number on the page. See <a href="/blog/cost-of-goods-sold">how to calculate COGS</a> for the inventory formula.</p>

<h3>Operating expenses</h3>
<p>These are the costs of running the business that are not tied to a specific unit sold: rent, salaries, software, marketing, insurance, professional fees and depreciation. The <a href="/blog/operating-expenses">operating expenses guide</a> lists what belongs here and what does not.</p>

<h3>Other income and expenses</h3>
<p>Items outside normal operations sit below operating income: interest earned on savings, interest paid on loans, a gain or loss on selling equipment, and one-off items such as a legal settlement.</p>

<h3>Income tax</h3>
<p>For a C corporation, federal income tax is an expense of the business. The <a href="https://www.irs.gov/instructions/i1120" target="_blank" rel="noopener noreferrer">IRS Form 1120 instructions</a> tell corporations to multiply taxable income by 21% to find the regular federal income tax, and state taxes may apply on top. Sole proprietors and pass-through entities usually do not record income tax as a business expense, because the owner pays it personally.</p>

<h2>How to calculate net income step by step</h2>

<ol>
<li><strong>Choose the period and method.</strong> Decide on the month, quarter or year, and whether you are using cash or accrual accounting. The <a href="/blog/cash-vs-accrual-accounting">cash vs accrual guide</a> explains why the same business can show different net income under each.</li>
<li><strong>Total your revenue.</strong> Add up sales or invoiced amounts for the period, then subtract returns, refunds and discounts. Exclude sales tax collected.</li>
<li><strong>Subtract cost of goods sold</strong> to get gross profit.</li>
<li><strong>Subtract operating expenses</strong> to get operating income. Include depreciation on equipment you own.</li>
<li><strong>Add other income and subtract other expenses</strong>, such as interest, to get pre-tax income.</li>
<li><strong>Subtract income tax</strong> if the business itself pays it. The result is net income.</li>
<li><strong>Calculate net margin</strong> by dividing net income by revenue, so you can compare periods of different sizes.</li>
<li><strong>Sense-check the result</strong> against your bank balance and receivables. Big differences usually have a reason, but it should be one you can explain.</li>
</ol>

<h2>Worked examples: net income for a company and a freelancer</h2>

<h3>Example 1: a small print company</h3>

<p>Harbor Print Co. is a small corporation taxed as a C corporation. Here is its year, laid out the same way a <a href="/blog/profit-and-loss-statement">profit and loss statement</a> would show it.</p>

<table>
<thead>
<tr><th>Line</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Gross sales</td><td>$412,000</td></tr>
<tr><td>Less returns and discounts</td><td>-$7,000</td></tr>
<tr><td><strong>Net revenue</strong></td><td><strong>$405,000</strong></td></tr>
<tr><td>Cost of goods sold (paper, ink, outsourced finishing, production wages)</td><td>-$162,000</td></tr>
<tr><td><strong>Gross profit</strong></td><td><strong>$243,000</strong></td></tr>
<tr><td>Office and sales salaries</td><td>-$98,000</td></tr>
<tr><td>Rent</td><td>-$30,000</td></tr>
<tr><td>Marketing</td><td>-$14,500</td></tr>
<tr><td>Software and subscriptions</td><td>-$6,200</td></tr>
<tr><td>Insurance</td><td>-$5,300</td></tr>
<tr><td>Depreciation on presses</td><td>-$9,000</td></tr>
<tr><td>Other admin</td><td>-$4,000</td></tr>
<tr><td><strong>Total operating expenses</strong></td><td><strong>-$167,000</strong></td></tr>
<tr><td><strong>Operating income</strong></td><td><strong>$76,000</strong></td></tr>
<tr><td>Interest income</td><td>$1,000</td></tr>
<tr><td>Interest expense on equipment loan</td><td>-$7,000</td></tr>
<tr><td><strong>Pre-tax income</strong></td><td><strong>$70,000</strong></td></tr>
<tr><td>Federal income tax at 21%</td><td>-$14,700</td></tr>
<tr><td><strong>Net income</strong></td><td><strong>$55,300</strong></td></tr>
</tbody>
</table>

<p>Check the arithmetic: $405,000 - $162,000 = $243,000. Operating expenses add to $167,000, so operating income is $243,000 - $167,000 = $76,000. Other items net to -$6,000, giving pre-tax income of $70,000. Tax of 21% is $14,700, so net income is $70,000 - $14,700 = $55,300. State income tax, if any, would reduce it further; it is left out here to keep the example simple.</p>

<p>Margins for the year:</p>
<ul>
<li>Gross margin: $243,000 / $405,000 = 60.0%</li>
<li>Operating margin: $76,000 / $405,000 = 18.8%</li>
<li>Net margin: $55,300 / $405,000 = 13.7%</li>
</ul>

<p>Our article on <a href="/blog/how-to-calculate-profit-margin">how to calculate profit margin</a> goes deeper on what each margin tells you.</p>

<h3>Example 2: a freelancer or sole proprietor</h3>

<p>For a sole proprietor, the business-level figure is the net profit on Schedule C. Maya is a freelance designer with $96,000 of invoiced and collected revenue and these expenses:</p>

<table>
<thead>
<tr><th>Expense</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Subcontracted illustration</td><td>$8,000</td></tr>
<tr><td>Software subscriptions</td><td>$2,400</td></tr>
<tr><td>Payment processing fees</td><td>$2,100</td></tr>
<tr><td>Depreciation on computer equipment</td><td>$1,800</td></tr>
<tr><td>Home office</td><td>$1,500</td></tr>
<tr><td>Marketing</td><td>$1,200</td></tr>
<tr><td>Accounting fees</td><td>$900</td></tr>
<tr><td><strong>Total expenses</strong></td><td><strong>$17,900</strong></td></tr>
</tbody>
</table>

<p>Net profit is $96,000 - $17,900 = $78,100, a net margin of 81.4%. Maya took $60,000 out as owner draws during the year, but draws are not expenses, so they do not change the $78,100.</p>

<p>According to the <a href="https://www.irs.gov/instructions/i1040sc" target="_blank" rel="noopener noreferrer">IRS instructions for Schedule C</a>, the net profit on line 31 is carried to Schedule 1 (Form 1040) and to Schedule SE, where <a href="/blog/self-employment-tax">self-employment tax</a> is worked out. So her personal take-home is lower than $78,100 once income tax and self-employment tax are paid. Keep those taxes in mind when setting <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated payments</a>. This is general information, not tax advice.</p>

<h2>How net income differs by business structure</h2>

<p>The arithmetic is the same for every business, but where net income is reported and which costs count as business expenses depends on how the business is set up for tax.</p>

<table>
<thead>
<tr><th>Structure</th><th>Where the figure usually appears</th><th>Owner pay</th><th>Income tax inside the business?</th></tr>
</thead>
<tbody>
<tr><td>Sole proprietor or single-member LLC (default)</td><td>Schedule C net profit</td><td>Draws, not an expense</td><td>No, the owner pays personally</td></tr>
<tr><td>Partnership or multi-member LLC</td><td>Partnership return, with each partner's share on a K-1</td><td>Draws or guaranteed payments</td><td>No, partners pay personally</td></tr>
<tr><td>S corporation</td><td>S corporation return, passed through to shareholders</td><td>Wages to owner-employees are an expense; distributions are not</td><td>Generally no</td></tr>
<tr><td>C corporation</td><td>Corporate income tax return</td><td>Wages are an expense; dividends are not</td><td>Yes, so net income is after corporate tax</td></tr>
</tbody>
</table>

<p>This is why two businesses with identical sales and costs can report different net income. An owner who runs an S corporation and pays herself a $50,000 salary has $50,000 more expense on the business books than a sole proprietor who takes the same $50,000 as a draw. Neither owner is better or worse off because of that line alone; the difference is in which tax return the money passes through. When you compare your net income with another business, or with your own figures from before a change of structure, adjust for owner pay first.</p>

<p>For lending and valuation purposes, many lenders and buyers also "normalise" net income by adding back one-off costs, unusual owner perks and owner pay above a market salary. Keep notes on any unusual items during the year so you can explain them later.</p>

<h2>Net income vs other figures people confuse it with</h2>

<table>
<thead>
<tr><th>Figure</th><th>What it includes</th><th>How it differs from net income</th></tr>
</thead>
<tbody>
<tr><td>Gross profit</td><td>Revenue - COGS</td><td>Ignores overhead, interest and tax, so it is always higher</td></tr>
<tr><td>Operating income</td><td>Gross profit - operating expenses</td><td>Ignores interest, one-off items and tax</td></tr>
<tr><td>EBITDA</td><td>Operating income + depreciation and amortization (roughly)</td><td>Adds back non-cash charges; not a GAAP figure</td></tr>
<tr><td>Cash flow</td><td>Money in minus money out</td><td>Includes loan repayments, asset purchases and timing of payments</td></tr>
<tr><td>Retained earnings</td><td>Cumulative net income minus distributions</td><td>A running total on the balance sheet, not a single period</td></tr>
</tbody>
</table>

<h2>Adjustments that change net income</h2>

<h3>Timing of invoices</h3>
<p>Suppose you issue a $4,500 invoice on 20 December and the client pays on 15 January. Under accrual accounting, the $4,500 counts in December's revenue. Under cash accounting, it counts in January. Neither is wrong, but you must be consistent. Clear invoice dates and <a href="/tools/invoice-number-generator">sequential invoice numbers</a> make it easy to prove which period a sale belongs to.</p>

<h3>Depreciation</h3>
<p>A $27,000 press is not a $27,000 expense in the year you buy it under normal book accounting. It is spread over its useful life. Over three years with straight-line depreciation, that is $9,000 a year, which is the figure in the print company example.</p>

<h3>Accrued and prepaid costs</h3>
<p>Bills you owe but have not paid yet still belong in the period you used the service. Accrued expenses and prepaid items keep net income tied to the period that earned it.</p>

<h3>Loan principal</h3>
<p>Only the interest part of a loan payment is an expense. The principal reduces a liability on the balance sheet. Treating the full payment as an expense understates net income.</p>

<h2>Common mistakes when calculating net income</h2>

<ul>
<li><strong>Counting sales tax as revenue.</strong> Collected sales tax is a liability. If you use a <a href="/tools/sales-tax-calculator">sales tax calculator</a> to add tax to invoices, record the tax portion separately.</li>
<li><strong>Deducting owner draws.</strong> Draws are not expenses.</li>
<li><strong>Mixing personal and business costs.</strong> This inflates expenses and creates problems if you are ever audited.</li>
<li><strong>Forgetting unpaid bills.</strong> Under accrual accounting, a supplier invoice dated in the period counts even if you pay it next month.</li>
<li><strong>Using different categories each month.</strong> Consistent expense categories make month-to-month comparisons meaningful.</li>
<li><strong>Ignoring bad debts.</strong> If an invoice will never be paid, the revenue you recorded for it is overstated until you write it off.</li>
</ul>

<h2>How to use net income in decisions</h2>

<p>Net income on its own is a scorecard. It becomes useful when you compare it with something: last month, last year, your budget, or a target. A falling net margin with rising revenue usually points to pricing, discounting or creeping overhead. A healthy net income with a shrinking bank balance usually points to slow-paying clients or heavy spending on equipment. Ratios such as debt to equity and the current ratio, covered in our guide to <a href="/blog/financial-ratios-small-business">financial ratios for small business</a>, add context that net income alone cannot give you.</p>

<p>Lenders and buyers also look at the trend. Three years of steady or rising net income tells a better story than one strong year, which is another reason to calculate it the same way every period.</p>

<h3>A monthly routine for calculating net income</h3>

<p>The calculation itself takes minutes. The time goes into making sure the inputs are complete. A simple monthly routine keeps it quick:</p>

<ol>
<li><strong>Close your invoicing for the month.</strong> Make sure every completed job has an invoice dated in the month, and that credit notes or refunds are recorded.</li>
<li><strong>Reconcile bank and card accounts</strong> so every transaction is categorised once, and only once.</li>
<li><strong>Enter unpaid supplier bills</strong> if you use accrual accounting.</li>
<li><strong>Post depreciation</strong> for the month, usually one twelfth of the annual figure.</li>
<li><strong>Run the profit and loss report</strong> and check each subtotal: gross profit, operating income, pre-tax income, net income.</li>
<li><strong>Compare with last month and your budget.</strong> Write one line explaining any big movement.</li>
<li><strong>Set aside tax.</strong> If you are a sole proprietor, move a share of the month's net profit to a separate savings account for estimated payments.</li>
</ol>

<p>Here is how a quick month-on-month comparison might look for the freelancer in the example above:</p>

<table>
<thead>
<tr><th>Month</th><th>Revenue</th><th>Expenses</th><th>Net profit</th><th>Net margin</th></tr>
</thead>
<tbody>
<tr><td>September</td><td>$8,200</td><td>$1,450</td><td>$6,750</td><td>82.3%</td></tr>
<tr><td>October</td><td>$7,400</td><td>$2,150</td><td>$5,250</td><td>70.9%</td></tr>
</tbody>
</table>

<p>Net profit fell by $1,500 even though revenue only fell by $800, because expenses rose by $700. That points the owner straight at the expense lines for October, perhaps an annual software renewal or a one-off subcontractor bill. Spotting that within a few days of month end is far easier than piecing it together in April.</p>

<h2>Start with accurate revenue</h2>

<p>Learning how to calculate net income is mostly about discipline: the same formula, the same categories and complete records every period. Revenue is the line everything else depends on, so make sure every sale is invoiced, dated and numbered. Create clean, professional invoices with the free <a href="/invoice-generator">invoice generator</a>, pick a layout from our <a href="/invoice-templates">invoice templates</a>, and your net income calculation will start from numbers you can trust.</p>
`,
  },
  {
    slug: "operating-income",
    title: "Operating Income: Formula, Examples and How It Differs",
    description:
      "Operating income explained: the operating income formula, a worked example, operating margin, and how it compares with net income, EBIT and EBITDA.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "gross-profit-vs-net-profit",
      "ebitda",
      "operating-expenses",
      "profit-and-loss-statement",
    ],
    faqs: [
      {
        q: "What is operating income in simple terms?",
        a: "Operating income is the profit a business makes from its core activities before interest and income tax. You find it by taking revenue, subtracting the cost of goods sold, and then subtracting operating expenses such as rent, salaries, marketing and depreciation. It answers a simple question: if you ignore how the business is financed and taxed, does the day-to-day work actually make money? It is sometimes called operating profit.",
      },
      {
        q: "What is the operating income formula?",
        a: "The standard formula is operating income = gross profit - operating expenses, where gross profit is revenue minus cost of goods sold. You can also write it as revenue - COGS - operating expenses. A third route works backwards from the bottom of the income statement: net income + interest expense + income tax - non-operating income + non-operating losses. All three should give the same figure if your books are categorised correctly.",
      },
      {
        q: "What is the difference between operating income and net income?",
        a: "Operating income stops before non-operating items, while net income includes everything. Interest on loans, interest earned on savings, gains or losses from selling equipment, one-off settlements and income tax all sit between the two. A business with large loans can have strong operating income but weak net income. Comparing both tells you whether a problem lies in the operations or in the financing and tax side.",
      },
      {
        q: "Is operating income the same as EBIT?",
        a: "They are often treated as the same, and for most small businesses they come out very close or identical. The difference is that EBIT, earnings before interest and taxes, can include non-operating items such as a one-off gain on selling an asset, while operating income strictly excludes them. If your business has no unusual items, operating income and EBIT will match. Always check how a lender or buyer defines the term.",
      },
      {
        q: "Does operating income include depreciation?",
        a: "Yes. Depreciation and amortization are operating expenses, so they are subtracted before you reach operating income. This is the main difference between operating income and EBITDA, which adds depreciation and amortization back. For a business with expensive equipment, such as vehicles or machinery, operating income can be much lower than EBITDA. Operating income is generally the more conservative view because equipment does eventually need replacing.",
      },
      {
        q: "What is a good operating margin?",
        a: "It depends on the industry. Software and professional services often run higher operating margins than grocery, construction or restaurants, where direct costs take a large share of each sale. Rather than chasing a universal target, compare your operating margin with your own past periods and with similar businesses. A margin that is steady or rising while revenue grows usually means your costs are under control and your pricing is holding up.",
      },
      {
        q: "Can operating income be negative while net income is positive?",
        a: "Yes, though it is a warning sign. A business can lose money on its operations but report positive net income because of a large one-off gain, such as selling a building or equipment, or a big interest or investment income. That profit is not repeatable. Lenders and buyers look through it to the operating figure, so owners should too. Persistent operating losses mean the core business model needs attention.",
      },
      {
        q: "Where do I find operating income on my profit and loss statement?",
        a: "In a multi-step profit and loss report, operating income appears after the operating expenses section and before other income and other expenses. Some software labels it operating profit or net operating income. If your report is single-step and only shows total income, total expenses and net income, you can calculate it yourself by moving interest, one-off gains or losses, and income tax out of the expense total.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Operating income is the profit a business earns from its normal operations before interest and income tax. The operating income formula is <strong>Operating income = Revenue - Cost of goods sold - Operating expenses</strong>. Divide it by revenue to get operating margin, the share of each sales dollar the core business keeps.</p>

<p>Operating income is the cleanest way to judge whether the work you actually do is profitable, separate from how you financed the business or what you owe in tax. This guide covers the formula three ways, a worked example with a year-on-year comparison, and how operating income compares with net income, EBIT and EBITDA. Every figure starts from your sales, so consistent records from an <a href="/invoice-generator">invoice generator</a> matter here too.</p>

<h2>What operating income measures</h2>

<p>A profit and loss statement is a series of subtractions. Each subtotal answers a different question:</p>

<ul>
<li><strong>Gross profit</strong>: do my prices cover the direct cost of what I sell?</li>
<li><strong>Operating income</strong>: does the business as a whole, including rent, staff and marketing, make money?</li>
<li><strong>Net income</strong>: what is left for the owners after interest, one-off items and tax?</li>
</ul>

<p>Operating income sits in the middle. It includes every cost of running the business day to day, and nothing else. That makes it the figure to watch when you want to know whether a change in pricing, staffing or overhead is working. For the two ends of the statement, see <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a>.</p>

<h2>The operating income formula, three ways</h2>

<h3>1. From gross profit</h3>
<p><strong>Operating income = Gross profit - Operating expenses</strong></p>

<h3>2. From revenue</h3>
<p><strong>Operating income = Revenue - COGS - Operating expenses</strong></p>

<h3>3. Working back from net income</h3>
<p><strong>Operating income = Net income + Interest expense + Income tax - Non-operating income + Non-operating losses</strong></p>

<p>The third version is handy when you only have the bottom line, for example from a tax return or a summary a bookkeeper sent you. If all three methods give different answers, something is miscategorised.</p>

<p>Operating expenses include salaries for staff not directly producing what you sell, rent, utilities, insurance, software, marketing, professional fees, and depreciation and amortization. Our <a href="/blog/operating-expenses">operating expenses guide</a> lists what belongs in this bucket, and <a href="/blog/cost-of-goods-sold">the COGS guide</a> covers what belongs above it.</p>

<h3>Operating margin: turning the number into a ratio</h3>

<p><strong>Operating margin = Operating income / Revenue × 100</strong></p>

<p>A $50,000 operating income means very different things on $200,000 of revenue (25%) and on $2 million (2.5%). Margin lets you compare months, years and similar businesses fairly. It also sits alongside gross and net margin in the guide to <a href="/blog/how-to-calculate-profit-margin">how to calculate profit margin</a>, and is one of the core figures in our overview of <a href="/blog/financial-ratios-small-business">financial ratios for small business</a>.</p>

<h2>How to calculate operating income step by step</h2>

<ol>
<li><strong>Pull a profit and loss report</strong> for the period you want: a month, quarter or year.</li>
<li><strong>Confirm revenue</strong> is net of returns and discounts and excludes sales tax collected.</li>
<li><strong>Subtract cost of goods sold</strong> to reach gross profit.</li>
<li><strong>List operating expenses</strong> and check nothing non-operating has slipped in: loan interest, a gain or loss on selling equipment, fines, lawsuit settlements and income tax all belong lower down.</li>
<li><strong>Subtract total operating expenses</strong> from gross profit. That is operating income.</li>
<li><strong>Divide by revenue</strong> to get operating margin.</li>
<li><strong>Reconcile to net income</strong> using the backwards formula, to make sure every line is in the right place.</li>
</ol>

<h2>Worked example: a landscaping company</h2>

<p>GreenEdge Landscaping is a small C corporation. Here is its year:</p>

<table>
<thead>
<tr><th>Line</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Revenue</td><td>$640,000</td></tr>
<tr><td>Cost of goods sold (crew wages, plants, materials, fuel)</td><td>-$352,000</td></tr>
<tr><td><strong>Gross profit</strong></td><td><strong>$288,000</strong></td></tr>
<tr><td>Office salaries</td><td>-$96,000</td></tr>
<tr><td>Yard and office rent</td><td>-$36,000</td></tr>
<tr><td>Vehicle and equipment depreciation</td><td>-$28,000</td></tr>
<tr><td>Marketing</td><td>-$22,000</td></tr>
<tr><td>Insurance</td><td>-$18,000</td></tr>
<tr><td>Admin and software</td><td>-$14,000</td></tr>
<tr><td><strong>Total operating expenses</strong></td><td><strong>-$214,000</strong></td></tr>
<tr><td><strong>Operating income</strong></td><td><strong>$74,000</strong></td></tr>
<tr><td>Gain on sale of an old truck</td><td>$8,000</td></tr>
<tr><td>Interest expense on equipment loans</td><td>-$11,000</td></tr>
<tr><td><strong>Pre-tax income</strong></td><td><strong>$71,000</strong></td></tr>
<tr><td>Federal income tax at 21%</td><td>-$14,910</td></tr>
<tr><td><strong>Net income</strong></td><td><strong>$56,090</strong></td></tr>
</tbody>
</table>

<p>Check the arithmetic: $640,000 - $352,000 = $288,000. Operating expenses total $214,000, so operating income is $74,000. Add the $8,000 gain and subtract $11,000 of interest to get $71,000 before tax. The 21% federal rate comes from the <a href="https://www.irs.gov/instructions/i1120" target="_blank" rel="noopener noreferrer">IRS Form 1120 instructions</a>: $71,000 × 21% = $14,910, leaving net income of $56,090. State tax is left out for simplicity.</p>

<p>Now work backwards to prove it: $56,090 + $14,910 tax + $11,000 interest - $8,000 gain = $74,000. It matches.</p>

<p>Operating margin is $74,000 / $640,000 = 11.6%. Notice that the truck sale made net income look better than the operations alone deserve. Next year there may be no truck to sell, which is exactly why owners and lenders focus on the operating figure.</p>

<h3>Year two: operating leverage in action</h3>

<p>The following year, revenue rises 10% to $704,000. Cost of goods sold stays at 55% of revenue ($387,200), so gross profit is $316,800. Operating expenses are mostly fixed; the only increase is $4,000 more marketing, taking them to $218,000.</p>

<p>Operating income becomes $316,800 - $218,000 = $98,800. Revenue grew 10%, but operating income grew from $74,000 to $98,800, a 33.5% increase, and operating margin rose to 14.0%. That is operating leverage: once fixed costs are covered, extra gross profit flows largely to the operating line. It works in reverse too, which is why a sales dip can hit operating income hard. Our guide to <a href="/blog/fixed-vs-variable-costs">fixed vs variable costs</a> explains the mechanics.</p>

<h2>Operating income vs net income, EBIT and EBITDA</h2>

<table>
<thead>
<tr><th>Measure</th><th>Formula</th><th>GreenEdge year one</th><th>Best used for</th></tr>
</thead>
<tbody>
<tr><td>Gross profit</td><td>Revenue - COGS</td><td>$288,000</td><td>Pricing and job costing</td></tr>
<tr><td>EBITDA</td><td>Operating income + depreciation and amortization</td><td>$102,000</td><td>Comparing businesses with different equipment levels; valuations</td></tr>
<tr><td>Operating income</td><td>Gross profit - operating expenses</td><td>$74,000</td><td>Judging core performance</td></tr>
<tr><td>EBIT</td><td>Net income + interest + tax</td><td>$82,000</td><td>Lender ratios such as interest coverage</td></tr>
<tr><td>Net income</td><td>Everything after tax</td><td>$56,090</td><td>Owner returns, retained earnings</td></tr>
</tbody>
</table>

<p>EBIT here is $56,090 + $11,000 + $14,910 = $82,000. It is $8,000 higher than operating income because it includes the one-off gain on the truck. For a business without unusual items, EBIT and operating income are the same. EBITDA adds back the $28,000 of depreciation to operating income. Our <a href="/blog/ebitda">EBITDA guide</a> covers adjustments and valuation multiples in detail.</p>

<h2>What operating income tells you, and what it hides</h2>

<h3>What it shows well</h3>
<ul>
<li>Whether your prices cover both direct costs and overhead.</li>
<li>Whether overhead is growing faster than revenue.</li>
<li>How the core business compares with competitors that are financed differently.</li>
</ul>

<h3>What it does not show</h3>
<ul>
<li><strong>Cash.</strong> Unpaid invoices count as revenue under accrual accounting. A profitable operation can still run short of cash if clients pay late. Track receivables alongside it.</li>
<li><strong>Debt burden.</strong> A business with heavy loan interest can have a good operating figure and still struggle. The <a href="/blog/debt-to-equity-ratio">debt to equity ratio</a> fills that gap.</li>
<li><strong>Capital spending.</strong> Buying equipment uses cash immediately but only shows up in operating income gradually through depreciation.</li>
</ul>

<h3>How lenders use operating income: interest coverage</h3>

<p>When you apply for a loan or line of credit, the lender wants to know whether the business earns enough from operations to pay interest comfortably. The usual test is the interest coverage ratio:</p>

<p><strong>Interest coverage = Operating income (or EBIT) / Interest expense</strong></p>

<p>For GreenEdge in year one, $74,000 / $11,000 = 6.7 times using operating income. Using EBIT, which includes the truck gain, it is $82,000 / $11,000 = 7.5 times. A careful lender will prefer the lower, operating-based figure, because the truck sale will not repeat. In year two, if interest stays at $11,000, coverage rises to $98,800 / $11,000 = 9.0 times.</p>

<p>Lenders set their own minimum coverage levels, so ask what they expect before you apply. The practical lesson is that a one-off gain can flatter EBIT and net income, but it does not change the operating figure lenders lean on most.</p>

<h3>Finding operating income on a single-step statement</h3>

<p>Not every report shows operating income. A <strong>single-step</strong> income statement lists all revenue, then all expenses, then net income, with no subtotals in between. A <strong>multi-step</strong> statement separates cost of goods sold, operating expenses and other items, so gross profit and operating income appear as their own lines.</p>

<p>If your accounting software produces a single-step report, you can still find operating income in a few minutes:</p>

<ol>
<li>Start with total income (revenue).</li>
<li>Subtract every expense line except interest, income tax and one-off items such as gains or losses on asset sales.</li>
<li>Add back any non-operating income that was included in total income, such as interest earned on savings.</li>
</ol>

<p>Better still, set up your chart of accounts so interest, asset sales and taxes sit in an "other income and expenses" section. Most software will then print a multi-step report automatically, and you will see operating income every month without extra work. Our <a href="/blog/profit-and-loss-statement">profit and loss statement guide</a> includes a template laid out this way.</p>

<h2>How to improve operating income</h2>

<ol>
<li><strong>Review pricing first.</strong> A small price rise with no change in costs falls almost entirely to operating income. Our guide on <a href="/blog/how-to-raise-prices">how to raise prices</a> covers how to do it without losing clients.</li>
<li><strong>Protect gross margin.</strong> Track discounts, rework and materials wastage. Every dollar saved in COGS adds a dollar to operating income.</li>
<li><strong>Audit recurring overhead.</strong> Software subscriptions, unused space and insurance policies are easy places to find savings.</li>
<li><strong>Fill idle capacity.</strong> If fixed costs are already paid, extra work at a sensible price raises operating income quickly. The <a href="/blog/contribution-margin">contribution margin</a> of each job tells you which extra work is worth taking.</li>
<li><strong>Bill everything you deliver.</strong> Unbilled extras and forgotten reimbursable expenses are pure lost operating income. Itemise them on the invoice.</li>
</ol>

<h2>Operating income for service businesses and freelancers</h2>

<p>Service businesses often have little or no COGS, so operating income is close to revenue minus overhead. The main risk is underpricing time. If you sell hours, the cost of delivering them, including your own fair salary, should be treated as a real cost when you judge operating income, otherwise a business can look profitable only because the owner is working for free. For pricing ideas, see <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a>.</p>

<p>Here is the difference in numbers. A solo consultant bills $120,000 in a year, pays $18,000 to subcontractors and spends $22,000 on overhead. Before any owner pay, operating income looks like $120,000 - $18,000 - $22,000 = $80,000, a 66.7% margin. But if a fair market salary for the consultant's own work is $70,000, the business itself is only producing $80,000 - $70,000 = $10,000 of true operating profit, an 8.3% margin. That is the figure a buyer of the business, or an owner deciding whether to hire help, should look at. It also shows how little room there is for a slow quarter.</p>

<p>Sole proprietors do not usually see a line labelled operating income on Schedule C, but the same idea applies: revenue minus the cost of running the business, before personal tax and any interest you choose to treat separately.</p>

<h2>Common operating income mistakes</h2>

<ul>
<li><strong>Putting loan interest in operating expenses.</strong> Interest is a financing cost. Including it understates operating income and makes a business with loans look worse than its operations deserve.</li>
<li><strong>Counting asset sale gains as revenue.</strong> Selling an old vehicle is not part of normal trading. Record the gain or loss below operating income.</li>
<li><strong>Leaving out depreciation.</strong> Skipping it makes operating income look like EBITDA and overstates how much the business can sustainably earn.</li>
<li><strong>Mixing owner draws into expenses.</strong> Draws are not operating expenses for a sole proprietor; wages paid to an owner-employee of a corporation are.</li>
<li><strong>Comparing months with different accounting methods.</strong> Switching between cash and accrual reporting moves revenue and costs between periods. Stay consistent.</li>
<li><strong>Ignoring seasonality.</strong> Landscaping, retail and tourism businesses can show operating losses in quiet months and strong profits in peak months. Compare each month with the same month last year, or look at a rolling twelve-month total.</li>
</ul>

<h2>Track operating income from your invoices up</h2>

<p>Operating income is only as accurate as the revenue at the top of the statement. Make sure every job is invoiced promptly with clear line items, consistent dates and <a href="/tools/invoice-number-generator">sequential invoice numbers</a>, so your monthly profit and loss is complete. Create your next invoice with the free <a href="/invoice-generator">invoice generator</a> or choose a clean layout such as the <a href="/invoice-templates/corporate">corporate invoice template</a>, then review your operating income and margin every month.</p>
`,
  },
  {
    slug: "contribution-margin",
    title: "Contribution Margin: Formula, Ratio and Per-Unit Examples",
    description:
      "Contribution margin explained: per-unit and total formulas, the contribution margin ratio, and worked examples for product mix, discounts and special orders.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["break-even-point", "fixed-vs-variable-costs", "unit-economics", "markup-vs-margin"],
    faqs: [
      {
        q: "What is contribution margin in simple terms?",
        a: "Contribution margin is the money left from a sale after you pay the costs that rise and fall with that sale, such as materials, packaging and card fees. That leftover amount contributes to covering fixed costs like rent and salaries, and once fixed costs are covered, it becomes profit. If a product sells for $32 and its variable costs are $12.80, each sale contributes $19.20 toward fixed costs and profit.",
      },
      {
        q: "What is the contribution margin formula?",
        a: "Per unit, contribution margin = selling price per unit - variable cost per unit. In total, contribution margin = total sales - total variable costs. The contribution margin ratio = contribution margin / sales, shown as a percentage. All three describe the same idea at different levels. Per-unit figures help with pricing a single item, totals help with monthly reporting, and the ratio helps compare products with different prices.",
      },
      {
        q: "What is the difference between contribution margin and gross margin?",
        a: "Gross margin subtracts cost of goods sold, which can include some fixed production costs such as factory rent or salaried production staff. Contribution margin subtracts only variable costs, wherever they appear, including variable selling costs like card processing fees and sales commissions. So the two numbers can differ quite a bit. Contribution margin is better for short-term decisions; gross margin is what appears on a standard profit and loss statement.",
      },
      {
        q: "What is a good contribution margin ratio?",
        a: "Higher is better, but what counts as good depends on your fixed costs and sales volume. A business with heavy fixed costs needs a high ratio, or very high volume, to break even. A business with low fixed costs can survive on a thinner ratio. The practical test is whether your total contribution margin comfortably exceeds your fixed costs each month, with enough left over for profit and reserves.",
      },
      {
        q: "Can contribution margin be negative?",
        a: "Yes. A negative contribution margin means each sale costs more in variable costs than it brings in, so every extra unit sold makes the business lose more money. This often happens after heavy discounting, free shipping that costs more than expected, or rising material prices that were never passed on. Unless the product is a deliberate loss leader that reliably drives other profitable sales, it should be repriced or dropped.",
      },
      {
        q: "How is contribution margin used in break-even analysis?",
        a: "Break-even in units is fixed costs divided by contribution margin per unit. Break-even in sales dollars is fixed costs divided by the contribution margin ratio. For example, with $12,500 of monthly fixed costs and a 55% ratio, you need roughly $22,700 of sales to break even. Every dollar of sales above that point adds about 55 cents of profit until fixed costs change.",
      },
      {
        q: "Does contribution margin apply to service businesses?",
        a: "Yes. For a service business, variable costs might include subcontractor fees, materials for a job, travel, payment processing fees and commissions. Contribution margin per job or per hour shows which services cover overhead best. Many service owners also calculate contribution per billable hour, because time is usually the limiting resource. Two services with the same price can have very different contributions once subcontracting or travel costs are included.",
      },
      {
        q: "Should I include my own labour as a variable cost?",
        a: "Only if it actually varies with sales. If you pay yourself a fixed salary or draw, treat it as a fixed cost. If you pay hourly staff only when there is work, or pay piece rates, that labour is variable. For a solo freelancer, it is often more useful to calculate contribution per hour of your time, since your hours are the scarce resource and the real limit on how much you can earn.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Contribution margin is sales minus variable costs: the amount each sale contributes toward fixed costs and then profit. Per unit, <strong>contribution margin = price - variable cost per unit</strong>. The <strong>contribution margin ratio</strong> is that figure divided by price. A $32 product with $12.80 of variable costs has a $19.20 contribution margin and a 60% ratio.</p>

<p>Contribution margin is one of the most practical numbers a small business can know, because it answers everyday questions: which product should I push, can I afford this discount, and is that wholesale order worth taking? This guide covers the per-unit, total and ratio formulas, a full worked example with three products, and how to use the figures for real decisions. If you sell from invoices, the <a href="/invoice-generator">free invoice generator</a> keeps each sale itemised, which makes the calculation much easier.</p>

<h2>Contribution margin formulas</h2>

<table>
<thead>
<tr><th>Measure</th><th>Formula</th><th>Use it for</th></tr>
</thead>
<tbody>
<tr><td>Contribution margin per unit</td><td>Selling price - variable cost per unit</td><td>Pricing one product or job</td></tr>
<tr><td>Total contribution margin</td><td>Total sales - total variable costs</td><td>Monthly reporting and profit planning</td></tr>
<tr><td>Contribution margin ratio</td><td>Contribution margin / sales × 100</td><td>Comparing products at different prices; break-even in dollars</td></tr>
<tr><td>Contribution per constrained hour</td><td>Contribution per unit / hours per unit</td><td>Choosing what to make when time or machine capacity is limited</td></tr>
</tbody>
</table>

<p>Everything depends on separating variable costs from fixed costs correctly. Variable costs move with each sale: materials, packaging, shipping supplies, card and platform fees, sales commissions and piece-rate labour. Fixed costs stay the same within a normal range of activity: rent, salaries, insurance and software. Our guide to <a href="/blog/fixed-vs-variable-costs">fixed vs variable costs</a> covers the grey areas such as mixed and step costs.</p>

<h2>Contribution margin vs gross margin and markup</h2>

<p>These terms get mixed up constantly, and the differences matter.</p>

<ul>
<li><strong>Gross margin</strong> subtracts cost of goods sold, which may include fixed production costs and usually excludes selling costs like card fees. It appears on the standard profit and loss statement. See <a href="/blog/how-to-calculate-profit-margin">how to calculate profit margin</a>.</li>
<li><strong>Contribution margin</strong> subtracts only variable costs, from anywhere in the business. It is a management figure for decisions, not a reporting requirement.</li>
<li><strong>Markup</strong> is profit as a percentage of cost rather than price. Our <a href="/blog/markup-vs-margin">markup vs margin guide</a> has a conversion chart.</li>
</ul>

<h2>How to calculate contribution margin step by step</h2>

<ol>
<li><strong>List every product or service</strong> you sell, with its current selling price.</li>
<li><strong>List the variable costs per unit</strong>: materials, packaging, per-order shipping supplies, payment processing (as a percentage of price), commissions and any per-unit labour.</li>
<li><strong>Subtract</strong> variable costs from price to get contribution margin per unit.</li>
<li><strong>Divide</strong> by price to get the contribution margin ratio.</li>
<li><strong>Multiply</strong> per-unit contribution by units sold to get each product's total contribution.</li>
<li><strong>Add the totals</strong> and subtract fixed costs to get operating profit for the period.</li>
<li><strong>Rank products</strong> by contribution per unit, by ratio and, if time is your constraint, by contribution per hour.</li>
</ol>

<h2>Worked example: a candle maker with three products</h2>

<p>Wick and Ember sells candles online. Card and platform fees are 3% of the selling price. Here are the per-unit figures:</p>

<table>
<thead>
<tr><th>Per unit</th><th>Large candle</th><th>Small candle</th><th>Gift set</th></tr>
</thead>
<tbody>
<tr><td>Selling price</td><td>$32.00</td><td>$14.00</td><td>$58.00</td></tr>
<tr><td>Wax, jar, wick, fragrance</td><td>$9.50</td><td>$4.20</td><td>$26.10</td></tr>
<tr><td>Packaging</td><td>$1.40</td><td>$0.90</td><td>$2.60</td></tr>
<tr><td>Payment fee (3%)</td><td>$0.96</td><td>$0.42</td><td>$1.74</td></tr>
<tr><td>Shipping supplies</td><td>$0.94</td><td>$0.48</td><td>$1.56</td></tr>
<tr><td><strong>Total variable cost</strong></td><td><strong>$12.80</strong></td><td><strong>$6.00</strong></td><td><strong>$32.00</strong></td></tr>
<tr><td><strong>Contribution margin per unit</strong></td><td><strong>$19.20</strong></td><td><strong>$8.00</strong></td><td><strong>$26.00</strong></td></tr>
<tr><td>Contribution margin ratio</td><td>60.0%</td><td>57.1%</td><td>44.8%</td></tr>
</tbody>
</table>

<p>The gift set has the biggest contribution per unit ($26.00) but the lowest ratio (44.8%). The large candle keeps 60 cents of every sales dollar. Which is "best" depends on the question, as the rest of the example shows.</p>

<h3>The monthly contribution margin statement</h3>

<p>Last month Wick and Ember sold 400 large candles, 900 small candles and 150 gift sets. Fixed costs (workshop rent, website, insurance, the owner's salary) were $12,500.</p>

<table>
<thead>
<tr><th>Monthly</th><th>Large</th><th>Small</th><th>Gift set</th><th>Total</th></tr>
</thead>
<tbody>
<tr><td>Sales</td><td>$12,800</td><td>$12,600</td><td>$8,700</td><td>$34,100</td></tr>
<tr><td>Variable costs</td><td>$5,120</td><td>$5,400</td><td>$4,800</td><td>$15,320</td></tr>
<tr><td>Contribution margin</td><td>$7,680</td><td>$7,200</td><td>$3,900</td><td>$18,780</td></tr>
<tr><td>Fixed costs</td><td></td><td></td><td></td><td>$12,500</td></tr>
<tr><td><strong>Operating profit</strong></td><td></td><td></td><td></td><td><strong>$6,280</strong></td></tr>
</tbody>
</table>

<p>Check: 400 × $32 = $12,800 and 400 × $12.80 = $5,120; 900 × $14 = $12,600 and 900 × $6 = $5,400; 150 × $58 = $8,700 and 150 × $32 = $4,800. Total contribution is $34,100 - $15,320 = $18,780, and after $12,500 of fixed costs, operating profit is $6,280. The blended contribution margin ratio is $18,780 / $34,100 = 55.1%.</p>

<h3>Break-even from the ratio</h3>

<p>Break-even sales = fixed costs / contribution margin ratio = $12,500 / 0.5507 = about $22,698 a month. Sales last month were $34,100, so the margin of safety is roughly $11,400, or 33% of sales. The <a href="https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs" target="_blank" rel="noopener noreferrer">SBA's guide to startup costs</a> uses the same approach: fixed costs divided by the contribution margin. Our <a href="/blog/break-even-point">break-even point guide</a> covers unit-based and multi-product versions.</p>

<h2>Contribution format vs traditional income statement</h2>

<p>The same month can be presented two ways. A traditional statement groups costs by function: production costs in cost of goods sold, selling and admin costs below. A contribution format statement groups costs by behaviour: variable first, fixed second. Here is Wick and Ember's month both ways. Of the $12,500 fixed costs, $3,000 is workshop rent, which a traditional statement treats as a production cost.</p>

<table>
<thead>
<tr><th>Traditional format</th><th>Amount</th><th>Contribution format</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Sales</td><td>$34,100</td><td>Sales</td><td>$34,100</td></tr>
<tr><td>COGS: materials $11,495 + packaging $1,760 + workshop rent $3,000</td><td>-$16,255</td><td>Variable costs: materials, packaging, fees, shipping supplies</td><td>-$15,320</td></tr>
<tr><td><strong>Gross profit</strong></td><td><strong>$17,845</strong></td><td><strong>Contribution margin</strong></td><td><strong>$18,780</strong></td></tr>
<tr><td>Payment fees $1,023 + shipping supplies $1,042 + other fixed costs $9,500</td><td>-$11,565</td><td>Fixed costs</td><td>-$12,500</td></tr>
<tr><td><strong>Operating profit</strong></td><td><strong>$6,280</strong></td><td><strong>Operating profit</strong></td><td><strong>$6,280</strong></td></tr>
</tbody>
</table>

<p>The bottom line is identical, but the middle lines tell different stories. Gross margin is $17,845 / $34,100 = 52.3%, while the contribution margin ratio is 55.1%. The gross margin mixes a fixed cost (rent) into cost of goods sold and leaves variable selling costs (fees, shipping supplies) out of it. For "what if" questions about volume, price and discounts, the contribution format is the one to use. For tax returns and external reporting, the traditional format is what lenders and accountants expect. Our guide to <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a> covers the traditional layout.</p>

<h2>Using contribution margin to make decisions</h2>

<p>The real value of contribution margin is in decisions made before the month is over: whether to discount, whether to accept an unusual order, what to make first and whether to keep a product. Each of the four decisions below uses the Wick and Ember figures above, and each ignores fixed costs for one reason: they do not change with the decision.</p>

<h3>Decision 1: what happens if you discount?</h3>

<p>Discounts come straight out of contribution margin, so they hurt more than the headline percentage suggests. Suppose Wick and Ember runs 15% off large candles:</p>

<ul>
<li>New price: $32.00 × 0.85 = $27.20</li>
<li>Payment fee falls to 3% of $27.20 = $0.82</li>
<li>Variable cost: $9.50 + $1.40 + $0.82 + $0.94 = $12.66</li>
<li>New contribution per unit: $27.20 - $12.66 = $14.54, down from $19.20</li>
</ul>

<p>To earn the same $7,680 contribution from large candles, the shop must sell $7,680 / $14.54 = 528.2, so 529 units instead of 400. A 15% discount needs about 32% more volume just to stand still. If you do offer discounts on invoices, our guide to <a href="/blog/discount-on-invoice">showing a discount on an invoice</a> explains how to present them clearly.</p>

<h3>Decision 2: should you accept a wholesale order?</h3>

<p>A gift shop offers to buy 300 small candles at $9.00 each, a 36% discount on retail. It will pay by bank transfer and collect the stock, so there are no card fees or shipping supplies. Variable cost per candle is $4.20 + $0.90 = $5.10, so contribution is $9.00 - $5.10 = $3.90 per candle, or $1,170 for the order.</p>

<p>If the workshop has spare capacity and fixed costs will not change, that $1,170 is extra profit. Fixed costs are already covered by retail sales, so they should not be allocated to this order for the decision. The invoice would show 300 × $9.00 = $2,700. You can create it in the <a href="/invoice-generator">invoice generator</a> with a single line item and, if the buyer pays a deposit, record it in the amount-paid field to show the balance due.</p>

<p>The caution: if the order uses capacity you would otherwise fill with full-price sales, or if retail customers find out and expect the same price, the true cost is higher.</p>

<h3>Decision 3: which product to make when time runs short</h3>

<p>Before the holidays, pouring time is the bottleneck: 150 hours available. A large candle takes 0.10 hours, a small one 0.05 hours and a gift set 0.25 hours.</p>

<table>
<thead>
<tr><th>Product</th><th>Contribution per unit</th><th>Hours per unit</th><th>Contribution per hour</th></tr>
</thead>
<tbody>
<tr><td>Large candle</td><td>$19.20</td><td>0.10</td><td>$192</td></tr>
<tr><td>Small candle</td><td>$8.00</td><td>0.05</td><td>$160</td></tr>
<tr><td>Gift set</td><td>$26.00</td><td>0.25</td><td>$104</td></tr>
</tbody>
</table>

<p>The gift set has the highest contribution per unit but the lowest per hour. When time is the limit, prioritise large candles, then small ones, and make gift sets only for confirmed demand. This is the same logic a freelancer uses when comparing projects by contribution per hour rather than by fee alone.</p>

<h3>Decision 4: should you drop a product?</h3>

<p>The gift set has the weakest ratio and uses the most time per unit, so the owner wonders whether to drop it. Contribution margin gives a quick answer. Gift sets contributed $3,900 last month. If they are dropped and fixed costs do not change, operating profit falls from $6,280 to $6,280 - $3,900 = $2,380.</p>

<p>Dropping a product with a positive contribution margin only makes sense if one of these is true:</p>

<ul>
<li>The time or space it frees up will be filled with products that contribute more. In busy months, 150 gift sets use 37.5 hours of pouring time. Those hours could make 375 large candles, contributing 375 × $19.20 = $7,200, if there is demand for them.</li>
<li>Dropping it removes some fixed costs, such as a dedicated packaging supplier minimum or storage space.</li>
<li>It causes hidden costs that are not in the variable cost figure, such as higher return rates or customer service time.</li>
</ul>

<p>If none of those applies, the product is helping to pay the rent. A better move might be a modest price rise: at $62 instead of $58, the gift set's payment fee rises to $1.86 and variable cost to $32.12, so contribution per unit becomes $29.88, an extra $3.88 per set, or $582 a month at 150 sets.</p>

<h2>Contribution margin for service businesses</h2>

<p>A web developer charging $4,000 for a site might pay $1,200 to a subcontractor, $150 for a theme and plugins and $120 in card fees. Contribution is $4,000 - $1,470 = $2,530, a 63.3% ratio. A $3,000 maintenance package with no subcontracting and $90 of fees contributes $2,910, a 97% ratio. Both cover overhead, but very differently.</p>

<p>Time changes the picture again. If the website takes 25 hours of the developer's own time, it contributes $2,530 / 25 = $101.20 per hour. If the maintenance package takes 20 hours over its term, it contributes $2,910 / 20 = $145.50 per hour. For a solo business where hours are the limit, the maintenance work is the better use of time, even though the website brings in more revenue per sale. Tracking this for a few months often changes which services a freelancer chooses to promote.</p>

<p>When projects include materials or subcontracted work, list them as separate lines on the invoice so the client sees what they pay for and you can track variable costs. Our guides on <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses</a> and <a href="/blog/labor-and-materials-invoice">labor and materials invoices</a> show how.</p>

<h2>Common contribution margin mistakes</h2>

<ul>
<li><strong>Leaving out percentage fees.</strong> Card, marketplace and platform fees are variable costs and grow with price.</li>
<li><strong>Treating fixed costs as variable.</strong> Dividing rent by units sold and calling it a variable cost makes every extra sale look less profitable than it is.</li>
<li><strong>Ignoring free shipping.</strong> If you pay postage, it is a variable cost per order.</li>
<li><strong>Using contribution for long-term pricing.</strong> Prices must cover fixed costs too. Contribution margin tells you the floor for a one-off decision, not a sustainable list price. For that, see <a href="/blog/how-to-price-a-product">how to price a product</a> or <a href="/blog/cost-plus-pricing">cost plus pricing</a>.</li>
<li><strong>Not updating costs.</strong> Recalculate when supplier prices change.</li>
</ul>

<h2>Put contribution margin to work</h2>

<p>Calculate contribution margin per unit and ratio for each product or service, review the totals monthly, and use them before every discount, wholesale deal or busy-season decision. It pairs naturally with <a href="/blog/unit-economics">unit economics</a> and with tracking your <a href="/blog/operating-income">operating income</a>. When it is time to bill, create itemised invoices with the free <a href="/invoice-generator">invoice generator</a> so every sale's price, discount and quantity is recorded accurately.</p>
`,
  },
  {
    slug: "overhead-costs",
    title: "Overhead Costs: How to Calculate an Overhead Rate and Price",
    description:
      "Overhead costs explained: types and examples, three ways to calculate an overhead rate, and how to include overhead in pricing, with a job-costing example.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "operating-expenses",
      "fixed-vs-variable-costs",
      "how-to-price-a-product",
      "how-to-set-freelance-rates",
    ],
    faqs: [
      {
        q: "What are overhead costs?",
        a: "Overhead costs are the ongoing expenses of running a business that cannot be traced directly to a specific product, job or client. Examples include rent, utilities, insurance, office staff wages, accounting fees, software, marketing and depreciation on shared equipment. They are sometimes called indirect costs or burden. Direct costs, by contrast, are the materials and labour that go into a particular job and can be listed against it.",
      },
      {
        q: "How do you calculate an overhead rate?",
        a: "Divide total overhead for a period by an allocation base that drives work in your business. Common bases are direct labour hours, direct labour cost or sales. For example, $128,000 of annual overhead divided by 4,500 direct labour hours gives an overhead rate of about $28.44 per hour. You then add that rate to the cost of every job based on the hours it uses.",
      },
      {
        q: "What is a good overhead rate?",
        a: "There is no universal good overhead rate, because it depends on the allocation base and the industry. A workshop with expensive equipment and rent will carry a higher rate than a remote consultant. More important than the absolute number is whether your prices recover it in full and whether it is creeping up faster than revenue. Track overhead as a percentage of sales each quarter and investigate rises.",
      },
      {
        q: "Are overhead costs the same as operating expenses?",
        a: "They overlap but are not identical. Operating expenses is an accounting category on the income statement covering all costs of running the business outside cost of goods sold. Overhead is a costing idea: any cost that is not direct to a job. Some overhead, such as factory rent or production supervisors, can sit inside cost of goods sold, while selling and admin overhead sits in operating expenses.",
      },
      {
        q: "How do I include overhead in my prices?",
        a: "First calculate an overhead rate, usually per direct labour hour for service and trade businesses. When pricing a job, add materials, direct labour, and overhead (the rate times the job's hours) to get the full cost. Then add your profit margin or markup on top. If you only mark up materials and labour, you are hoping the markup also covers overhead, which often fails on labour-heavy jobs.",
      },
      {
        q: "What happens if I sell fewer hours than planned?",
        a: "Your overhead is under-recovered. The rate assumes a certain number of billable hours, so if you sell fewer, the overhead included in your prices falls short of what you actually spend. For example, a rate based on 4,500 hours that only recovers 3,600 hours leaves about a fifth of overhead uncovered. Be realistic about billable hours when setting the rate and review it at least yearly.",
      },
      {
        q: "Should freelancers calculate overhead?",
        a: "Yes. Freelancers often price only for their time and forget software, equipment, insurance, accounting fees, marketing and unpaid admin hours. Add up those annual costs and divide by realistic billable hours to get an overhead amount per hour. Add it to your target hourly pay. Even a modest $10,000 of annual overhead adds about $8.33 an hour if you bill 1,200 hours a year.",
      },
      {
        q: "Can I show overhead as a line item on an invoice?",
        a: "Usually you should not show overhead as a separate charge. Most clients expect it to be built into your rates and prices, and a separate overhead line often invites argument. The exception is cost-plus or government contracts, where the agreement may require costs to be broken out and an approved indirect rate applied. In normal commercial work, include overhead in your hourly rate or job price instead.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Overhead costs are the indirect expenses of running a business, such as rent, insurance, office wages, software and depreciation, that cannot be traced to a single job or product. To price for them, calculate an <strong>overhead rate</strong> (total overhead / an allocation base such as direct labour hours) and add that rate to the cost of every job before adding profit.</p>

<p>Many small businesses lose money not because their prices are far too low, but because overhead costs never make it into the price at all. This guide explains the types of overhead, three ways to calculate an overhead rate, and a full job-costing example that shows how to include overhead in pricing. Once your rates are right, an <a href="/invoice-generator">online invoice generator</a> makes it easy to bill them consistently.</p>

<h2>What counts as overhead costs</h2>

<p>The test is simple: can you trace the cost directly to one job, product or client? If yes, it is a direct cost. If it supports the business as a whole, it is overhead.</p>

<table>
<thead>
<tr><th>Overhead type</th><th>Examples</th><th>Usual behaviour</th></tr>
</thead>
<tbody>
<tr><td>Facility</td><td>Rent, property tax, utilities, repairs, cleaning</td><td>Mostly fixed; utilities partly variable</td></tr>
<tr><td>Administrative</td><td>Office staff, accounting and legal fees, bank charges, software</td><td>Mostly fixed</td></tr>
<tr><td>Selling and marketing</td><td>Advertising, website, trade shows, sales salaries</td><td>Fixed or discretionary</td></tr>
<tr><td>Equipment</td><td>Depreciation, leases, maintenance on shared tools and vehicles</td><td>Fixed, with step changes</td></tr>
<tr><td>Production or shop</td><td>Supervisor wages, consumables, small tools, shop insurance</td><td>Semi-variable</td></tr>
<tr><td>Insurance and compliance</td><td>Liability insurance, licences, permits</td><td>Fixed</td></tr>
</tbody>
</table>

<p>Most overhead is fixed in the short term, but not all of it. Electricity in a workshop and consumables such as sandpaper rise with activity, so they are semi-variable. The <a href="https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs" target="_blank" rel="noopener noreferrer">SBA's startup cost guide</a> lists rent, salaries, property taxes, insurance, interest and depreciation as typical fixed costs, which is a good starting checklist. For the line-by-line accounting treatment, our guide to <a href="/blog/operating-expenses">operating expenses</a> covers where each cost sits on the income statement, and <a href="/blog/fixed-vs-variable-costs">fixed vs variable costs</a> covers cost behaviour.</p>

<h3>Manufacturing overhead vs selling and admin overhead</h3>

<p>Product businesses often split overhead into two groups. Manufacturing or production overhead, such as workshop rent, production supervisors, machine depreciation and factory utilities, supports making the product. Under standard accounting it becomes part of inventory cost and reaches the income statement through cost of goods sold when the product is sold. Selling, general and administrative overhead, such as office staff, marketing and accounting fees, is expensed in the period it occurs. For pricing, both groups must be recovered, so many small businesses use one combined rate. For financial statements, keep them in separate accounts so your gross margin is calculated consistently.</p>

<h3>Overhead vs direct costs</h3>

<p>Direct costs are materials and labour you can list against a job: the timber for a cabinet, the hours your carpenter spent building it, a subcontractor for that job. Overhead is everything that keeps the doors open whether or not that job exists. The same cost can switch categories depending on the business. A delivery van is overhead for a cabinet shop but closer to a direct cost for a courier.</p>

<h2>Three ways to calculate an overhead rate</h2>

<p>An overhead rate spreads indirect costs across your work so each job carries its fair share. Choose a base that actually drives your overhead.</p>

<table>
<thead>
<tr><th>Method</th><th>Formula</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>Per direct labour hour</td><td>Total overhead / direct labour hours</td><td>Trades, workshops, agencies, consultants</td></tr>
<tr><td>Percentage of direct labour cost</td><td>Total overhead / direct labour cost × 100</td><td>Firms with crews on different pay rates</td></tr>
<tr><td>Percentage of sales</td><td>Total overhead / revenue × 100</td><td>Retail and quick benchmarking</td></tr>
</tbody>
</table>

<p>Per-hour rates work well when time is what you sell. Percentage of sales is useful for tracking but weak for pricing, because it assumes every sale uses overhead in proportion to its price, which is rarely true.</p>

<h2>How to calculate your overhead rate step by step</h2>

<ol>
<li><strong>Pull last year's expenses</strong> from your profit and loss statement, or this year's <a href="/blog/small-business-budget">budget</a> if costs have changed.</li>
<li><strong>Remove direct costs</strong>: materials, direct labour and subcontractors charged to specific jobs.</li>
<li><strong>Add up what is left.</strong> That is total overhead. Include depreciation and a fair cost for anything you use but do not pay for monthly, such as annual insurance.</li>
<li><strong>Choose an allocation base</strong>, usually direct labour hours.</li>
<li><strong>Estimate the base realistically.</strong> Use billable hours, not paid hours. Holidays, training, travel, quoting and rework all reduce billable time.</li>
<li><strong>Divide overhead by the base</strong> to get your rate.</li>
<li><strong>Review the rate</strong> at least once a year, and whenever rent, staffing or equipment changes significantly.</li>
</ol>

<h2>Worked example: a cabinet shop's overhead rate</h2>

<p>Oak and Line Joinery has three cabinetmakers and one part-time office manager. Annual overhead:</p>

<table>
<thead>
<tr><th>Overhead item</th><th>Annual cost</th></tr>
</thead>
<tbody>
<tr><td>Workshop rent</td><td>$42,000</td></tr>
<tr><td>Office manager wages</td><td>$31,000</td></tr>
<tr><td>Equipment depreciation</td><td>$12,000</td></tr>
<tr><td>Utilities</td><td>$9,600</td></tr>
<tr><td>Delivery van costs</td><td>$8,400</td></tr>
<tr><td>Insurance</td><td>$7,800</td></tr>
<tr><td>Marketing and website</td><td>$6,000</td></tr>
<tr><td>Accounting and legal</td><td>$4,200</td></tr>
<tr><td>Software and phone</td><td>$3,600</td></tr>
<tr><td>Shop consumables</td><td>$3,400</td></tr>
<tr><td><strong>Total overhead</strong></td><td><strong>$128,000</strong></td></tr>
</tbody>
</table>

<p>Each cabinetmaker is paid for about 2,080 hours a year but, after holidays, sick days, cleaning and maintenance, realistically spends around 1,500 hours on client jobs. So direct labour hours are 3 × 1,500 = 4,500. Their loaded wage, including payroll taxes, averages $32 an hour, so direct labour cost is 4,500 × $32 = $144,000.</p>

<ul>
<li>Overhead rate per direct labour hour: $128,000 / 4,500 = <strong>$28.44 an hour</strong></li>
<li>Overhead as a percentage of direct labour cost: $128,000 / $144,000 = <strong>88.9%</strong></li>
<li>Overhead as a percentage of last year's $380,000 revenue: $128,000 / $380,000 = <strong>33.7%</strong></li>
</ul>

<h2>How to include overhead in pricing</h2>

<p>Now price a kitchen job that needs $6,200 of materials and 120 hours of cabinetmaker time.</p>

<table>
<thead>
<tr><th>Cost element</th><th>Calculation</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Materials</td><td>From supplier quotes</td><td>$6,200.00</td></tr>
<tr><td>Direct labour</td><td>120 hours × $32</td><td>$3,840.00</td></tr>
<tr><td>Overhead</td><td>120 hours × $28.44</td><td>$3,412.80</td></tr>
<tr><td><strong>Full cost</strong></td><td></td><td><strong>$13,452.80</strong></td></tr>
<tr><td>Profit at 20% markup on cost</td><td>$13,452.80 × 20%</td><td>$2,690.56</td></tr>
<tr><td><strong>Price</strong></td><td></td><td><strong>$16,143.36</strong></td></tr>
</tbody>
</table>

<p>A 20% markup on cost equals a 16.7% margin on price ($2,690.56 / $16,143.36). If you think in margins rather than markups, our <a href="/blog/markup-vs-margin">markup vs margin guide</a> has a conversion table. This is the <a href="/blog/cost-plus-pricing">cost plus pricing</a> method with overhead built in properly.</p>

<h3>What happens if overhead is left out</h3>

<p>Suppose the shop prices the same job as materials plus labour plus 20%: ($6,200 + $3,840) × 1.20 = $12,048. That looks profitable, but the full cost including overhead is $13,452.80, so the job actually loses $1,404.80. On a labour-heavy job, a markup on materials and labour alone rarely covers the overhead the hours consume.</p>

<h3>Turning the rate into an hourly charge-out rate</h3>

<p>Many trades quote an hourly rate instead of a job price. For Oak and Line, labour $32 + overhead $28.44 = $60.44 of cost per hour. With a 20% markup, the charge-out rate is about $72.53, which the owner might round to $73 or $75. Materials are then billed separately with their own markup. Our guide to <a href="/blog/labor-and-materials-invoice">labor and materials invoices</a> shows how to lay that out.</p>

<h3>Allocating overhead more precisely with two rates</h3>

<p>A single shop-wide rate is fine for most small businesses. It becomes unfair when one type of work uses a cost that other work never touches. At Oak and Line, the $8,400 of van costs relate only to installation visits, which take about 600 of the year's 4,500 hours. Splitting the overhead gives two rates:</p>

<ul>
<li>Workshop overhead: ($128,000 - $8,400) / 4,500 hours = $119,600 / 4,500 = <strong>$26.58 per hour</strong>, applied to every hour.</li>
<li>Installation overhead: $8,400 / 600 installation hours = <strong>$14.00 per installation hour</strong>, applied on top for site work only.</li>
</ul>

<table>
<thead>
<tr><th>Job</th><th>Hours</th><th>Single rate ($28.44)</th><th>Two rates</th></tr>
</thead>
<tbody>
<tr><td>Kitchen with 24 hours of installation</td><td>120</td><td>$3,412.80</td><td>120 × $26.58 + 24 × $14.00 = $3,525.60</td></tr>
<tr><td>Freestanding bookcase, collected by client</td><td>40</td><td>$1,137.60</td><td>40 × $26.58 = $1,063.20</td></tr>
</tbody>
</table>

<p>With two rates, the kitchen carries $112.80 more overhead and the collected bookcase $74.40 less. The shop's total overhead is unchanged; it is just charged to the work that causes it. This is a simple form of activity-based costing, and it matters most when your jobs vary a lot in how much of a particular cost they use. Do not overdo it: two or three rates are plenty for a small business.</p>

<h2>Under-recovered and over-recovered overhead</h2>

<p>The overhead rate is a prediction. If the shop bills the planned 4,500 hours, the overhead built into prices is 4,500 × $28.44 = $127,980, which is within rounding of the $128,000 actually spent. But if a slow quarter means only 3,600 hours are sold, prices recover just 3,600 × $28.44 = $102,384, leaving $25,616 of overhead unpaid by customers. That comes straight out of profit.</p>

<p>Ways to manage the risk:</p>
<ul>
<li>Set the rate on a cautious estimate of billable hours, not a best case.</li>
<li>Compare actual overhead recovered with actual overhead spent each quarter, using a <a href="/blog/budget-vs-actual">budget vs actual</a> review.</li>
<li>Fill quiet periods with work that at least covers direct costs and makes some contribution to overhead. The <a href="/blog/contribution-margin">contribution margin</a> of the job shows whether it does.</li>
</ul>

<h2>Overhead for freelancers and solo service businesses</h2>

<p>Freelancers have overhead too: software, equipment, insurance, a co-working desk, accounting, marketing, and the unpaid hours spent on admin. Suppose a freelance consultant spends $10,000 a year on these and bills 1,200 hours. Overhead per billable hour is $10,000 / 1,200 = $8.33. If the target pay is $60 an hour, the rate before profit is $68.33, before any allowance for taxes and time off. Overhead is a bigger share of a freelancer's costs than it first appears, because the main overhead is often time rather than money. If the same consultant spends 10 hours a week on admin, sales, proposals and invoicing, that is around 450 to 500 hours a year that nobody pays for directly. Those hours are why 1,200 billable hours is a realistic target for many solo businesses, not 2,080. Our guide to <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> walks through the full calculation, and <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> covers which of these costs reduce your tax bill.</p>

<h2>How to reduce overhead without hurting the business</h2>

<ol>
<li><strong>List every recurring charge</strong> from bank and card statements and cancel unused subscriptions.</li>
<li><strong>Renegotiate fixed contracts</strong> such as rent, insurance and phone plans at renewal.</li>
<li><strong>Raise billable utilisation</strong>. More billable hours on the same overhead lowers the rate per hour without cutting anything.</li>
<li><strong>Automate admin.</strong> Templates for quotes and invoices, saved client details and <a href="/tools/invoice-number-generator">automatic invoice numbering</a> reduce the hours spent on paperwork.</li>
<li><strong>Check that cuts do not cost sales.</strong> Marketing is overhead, but cutting it can reduce the hours you sell and push the rate up.</li>
</ol>

<h3>Tracking overhead each quarter</h3>

<p>An overhead rate set once a year can drift out of date quickly. A short quarterly review compares three things: what you spent on overhead, what your prices recovered, and overhead as a share of sales. Here is Oak and Line's first three quarters at the $28.44 rate:</p>

<table>
<thead>
<tr><th>Quarter</th><th>Actual overhead</th><th>Hours billed</th><th>Overhead recovered (hours × $28.44)</th><th>Over / (under)</th><th>Overhead as % of sales</th></tr>
</thead>
<tbody>
<tr><td>Q1</td><td>$31,200</td><td>1,050</td><td>$29,862.00</td><td>($1,338.00)</td><td>35.5% of $88,000</td></tr>
<tr><td>Q2</td><td>$32,100</td><td>1,180</td><td>$33,559.20</td><td>$1,459.20</td><td>31.8% of $101,000</td></tr>
<tr><td>Q3</td><td>$33,900</td><td>1,090</td><td>$30,999.60</td><td>($2,900.40)</td><td>35.3% of $96,000</td></tr>
</tbody>
</table>

<p>Two patterns stand out. Billed hours in Q1 and Q3 fell short of the 1,125 hours a quarter the rate assumes (4,500 / 4), so overhead was under-recovered. And overhead spending itself rose each quarter, from $31,200 to $33,900. Either the shop needs more billable hours or it needs a higher rate. Catching this in October gives the owner time to adjust quotes for the next season instead of discovering a profit shortfall at year end. A <a href="/blog/small-business-budget">small business budget</a> with an overhead section makes this comparison easy.</p>

<h2>Common overhead mistakes</h2>

<ul>
<li><strong>Using paid hours instead of billable hours</strong>, which understates the overhead rate.</li>
<li><strong>Forgetting non-cash costs</strong> such as depreciation, so equipment replacement is never funded.</li>
<li><strong>Adding overhead as a separate invoice line</strong> in normal commercial work. Build it into rates instead.</li>
<li><strong>Never updating the rate</strong> after moving premises or hiring staff.</li>
<li><strong>Leaving the owner's time out</strong> of the cost base entirely.</li>
</ul>

<h2>Price with overhead built in</h2>

<p>Overhead costs are real costs, and every price you quote should recover its share. Calculate your overhead rate once a year, add it to every job or hourly rate, and check recovery each quarter. When the work is done, bill it clearly with the free <a href="/invoice-generator">invoice generator</a>, using a tidy layout such as the <a href="/invoice-templates/classic">classic invoice template</a>.</p>
`,
  },
  {
    slug: "cost-plus-pricing",
    title: "Cost Plus Pricing: Formula, Examples and When to Use It",
    description:
      "Cost plus pricing explained: the formula, how to choose a markup for a target margin, product and service examples, cost-plus contracts and invoicing them.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-price-a-product",
      "markup-vs-margin",
      "value-based-pricing",
      "how-to-set-freelance-rates",
    ],
    faqs: [
      {
        q: "What is cost plus pricing?",
        a: "Cost plus pricing is a method where you work out the full cost of a product or service and add a fixed percentage or amount on top as profit. If a mug costs $10.00 to make, including a share of overhead, and you use a 50% markup, the price is $15.00. It is simple, easy to explain and ensures every sale covers its cost, provided the cost figure is complete and accurate.",
      },
      {
        q: "What is the cost plus pricing formula?",
        a: "The formula is price = unit cost × (1 + markup percentage). Unit cost should include materials, direct labour and an allocated share of overhead. To hit a target profit margin instead of a markup, use price = unit cost / (1 - target margin). For example, a $10.00 cost and a 40% target margin gives $10.00 / 0.60 = $16.67. The two formulas give different prices for the same percentage.",
      },
      {
        q: "What markup should I use for cost plus pricing?",
        a: "There is no standard markup. It depends on your industry, competition, risk and the margin you need to fund growth. Start from the profit margin you want, convert it to a markup, then check the resulting price against competitors and what customers will pay. A 25% margin needs a 33.3% markup, and a 40% margin needs a 66.7% markup. Review the markup whenever costs change.",
      },
      {
        q: "What are the disadvantages of cost plus pricing?",
        a: "It ignores what customers will pay and what competitors charge, so you may underprice valuable work or overprice commodity products. It rewards higher costs, because a bigger cost base produces a bigger profit in dollars. And it is only as good as your cost data: if you underestimate overhead or labour, the price will not cover the true cost. Most businesses use it as a floor, then adjust.",
      },
      {
        q: "What is a cost-plus contract?",
        a: "A cost-plus contract is an agreement where the client pays the contractor's actual allowable costs plus a fee, which can be a fixed amount or a percentage of costs. They are common in construction, renovation and government work where the scope is uncertain. The contract should define which costs are allowable, how overhead is treated, what records the client can inspect, and often a guaranteed maximum price.",
      },
      {
        q: "Is cost plus percentage of cost allowed in government contracts?",
        a: "For US federal contracts, no. FAR 16.102(c) states that the cost-plus-a-percentage-of-cost system of contracting shall not be used, because it rewards contractors for raising costs. Federal agencies use other types such as cost-plus-fixed-fee or cost-plus-incentive-fee instead. Private clients can agree to a percentage fee, but many prefer a fixed fee or a cap for the same reason. This is general information, not legal advice.",
      },
      {
        q: "How do I invoice a cost-plus job?",
        a: "List the actual costs for the billing period by category, such as labour hours and rate, materials, subcontractors and equipment hire, then add the agreed fee as a separate line. Attach or offer receipts and timesheets if the contract requires open-book billing. Apply any deposit or earlier payments, show the balance due, and reference the contract or purchase order number so the client can match the invoice quickly.",
      },
      {
        q: "Is cost plus pricing good for freelancers?",
        a: "It is a useful starting point, because it forces you to count your real costs, including overhead, taxes and non-billable time, before setting a rate. But pure cost plus can undersell skilled work. Many freelancers use cost plus to find their minimum hourly or project rate, then price higher for projects with clear business value, using value-based pricing or market rates where the client benefits more than the cost suggests.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Cost plus pricing means calculating the full cost of a product or service and adding a set markup for profit. The formula is <strong>Price = Unit cost × (1 + Markup %)</strong>. A product that costs $10.00 with a 50% markup sells for $15.00. To target a margin instead, use Price = Cost / (1 - Margin).</p>

<p>Cost plus pricing is the most common way small businesses set prices, because it is simple and guarantees each sale covers its cost. It also has well-known weaknesses. This guide explains the formula, how to build a complete cost, how to pick a markup for a target margin, worked examples for products, services and cost-plus contracts, and how to invoice them with the <a href="/invoice-generator">free invoice generator</a>. If you are comparing pricing strategies more broadly, our guide to <a href="/blog/how-to-price-a-product">how to price a product</a> covers seven of them side by side.</p>

<h2>The cost plus pricing formula</h2>

<p>There are two versions, and mixing them up is a common source of underpricing.</p>

<h3>Markup on cost</h3>
<p><strong>Price = Unit cost × (1 + Markup %)</strong></p>
<p>Example: $10.00 cost × 1.50 = $15.00. Profit is $5.00, which is 50% of cost but only 33.3% of price.</p>

<h3>Target margin on price</h3>
<p><strong>Price = Unit cost / (1 - Target margin %)</strong></p>
<p>Example: $10.00 / (1 - 0.40) = $16.67. Profit is $6.67, which is 40% of price and 66.7% of cost.</p>

<p>If you want a particular profit margin on your profit and loss statement, convert it to the matching markup before you price:</p>

<table>
<thead>
<tr><th>Target margin</th><th>Markup needed</th><th>Price on a $100 cost</th></tr>
</thead>
<tbody>
<tr><td>20%</td><td>25.0%</td><td>$125.00</td></tr>
<tr><td>25%</td><td>33.3%</td><td>$133.33</td></tr>
<tr><td>30%</td><td>42.9%</td><td>$142.86</td></tr>
<tr><td>40%</td><td>66.7%</td><td>$166.67</td></tr>
<tr><td>50%</td><td>100.0%</td><td>$200.00</td></tr>
</tbody>
</table>

<p>The conversion is markup = margin / (1 - margin). Our <a href="/blog/markup-vs-margin">markup vs margin guide</a> has a fuller chart and explains why the difference matters.</p>

<h2>What goes into "cost"</h2>

<p>Cost plus pricing fails most often because the cost is incomplete. A full unit cost has three parts:</p>

<ul>
<li><strong>Direct materials</strong>: everything that ends up in the product or is used up on the job, including packaging and freight in. See <a href="/blog/cost-of-goods-sold">cost of goods sold</a> for what counts.</li>
<li><strong>Direct labour</strong>: the time spent making the product or delivering the service, at a loaded rate that includes payroll taxes and benefits.</li>
<li><strong>Allocated overhead</strong>: a share of rent, insurance, admin, software and equipment. Our guide to <a href="/blog/overhead-costs">overhead costs</a> shows how to calculate an overhead rate per hour.</li>
</ul>

<p>Also consider costs that scale with price, such as card processing fees and sales commissions. They are easy to miss because they do not appear until the sale happens.</p>

<h2>How to set a cost plus price step by step</h2>

<ol>
<li><strong>Add up direct materials</strong> per unit or per job.</li>
<li><strong>Add direct labour</strong>: hours × loaded hourly cost.</li>
<li><strong>Add overhead</strong>: hours × your overhead rate, or a per-unit share.</li>
<li><strong>Choose your target margin</strong> based on what the business needs to fund the owner's return, reserves and growth.</li>
<li><strong>Convert the margin to a markup</strong> and calculate the price.</li>
<li><strong>Check the market.</strong> Compare with competitors and with what customers have paid before. If the price is far above the market, look for cost savings; if it is far below, you may be leaving money on the table.</li>
<li><strong>Round sensibly and document</strong> the calculation so you can update it when costs change.</li>
</ol>

<h2>Cost plus pricing examples</h2>

<p>The method is the same for products and services: total the cost, then apply the markup. What changes is where the cost comes from. For a product, it is materials and production time per unit. For a service, it is the cost of an hour of your time, including the overhead and non-billable hours behind it.</p>

<h3>Example 1: a handmade product</h3>

<p>A ceramics studio sells mugs to cafés. Per mug:</p>

<table>
<thead>
<tr><th>Cost element</th><th>Per mug</th></tr>
</thead>
<tbody>
<tr><td>Clay and glaze</td><td>$3.10</td></tr>
<tr><td>Labour (12 minutes at $22 an hour)</td><td>$4.40</td></tr>
<tr><td>Packaging</td><td>$0.50</td></tr>
<tr><td>Overhead share (kiln, studio rent, insurance)</td><td>$2.00</td></tr>
<tr><td><strong>Full unit cost</strong></td><td><strong>$10.00</strong></td></tr>
</tbody>
</table>

<p>Labour check: 12 minutes is 0.2 hours, and 0.2 × $22 = $4.40. The total is $3.10 + $4.40 + $0.50 + $2.00 = $10.00.</p>

<ul>
<li>At a 50% markup: $10.00 × 1.50 = <strong>$15.00</strong> wholesale. Margin = $5.00 / $15.00 = 33.3%.</li>
<li>For a 40% margin: $10.00 / 0.60 = <strong>$16.67</strong>. Markup = $6.67 / $10.00 = 66.7%.</li>
</ul>

<p>An order of 120 mugs at $16.67 comes to $2,000.40. The studio might round to $16.50 or $17.00 per mug after checking what similar mugs sell for wholesale.</p>

<h3>Example 2: a service business</h3>

<p>A bookkeeper wants to earn $70,000 a year and has $20,000 of annual overhead (software, insurance, training, office, marketing). Realistically she can bill 1,200 hours a year after admin, sales and time off. Her cost per billable hour is ($70,000 + $20,000) / 1,200 = $75.00.</p>

<p>With a 30% markup, her rate is $75.00 × 1.30 = <strong>$97.50 an hour</strong>. The profit element is $22.50 an hour, or $27,000 a year at 1,200 hours. The billable-hours estimate matters as much as the markup. If she only bills 1,000 hours, her cost per hour rises to $90,000 / 1,000 = $90.00, and the same 30% markup gives $117.00 an hour. Charging $97.50 on 1,000 hours would bring in $97,500, only $7,500 above her $90,000 of salary and overhead. That profit is a buffer for slow months, equipment replacement and growth, separate from the salary already built into her cost. Our <a href="/blog/how-to-set-freelance-rates">freelance rates guide</a> walks through the same logic, and <a href="/blog/how-to-invoice-for-hourly-work">how to invoice for hourly work</a> covers the billing side.</p>

<h2>Cost-plus contracts: a renovation example</h2>

<p>Cost plus pricing is also a contract type. In a cost-plus contract, the client pays the contractor's actual allowable costs plus a fee. This is common in renovation and construction when the scope is hard to fix in advance. Here is one month on a kitchen renovation billed at cost plus 15%:</p>

<table>
<thead>
<tr><th>Invoice line</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Labour: 240 hours at $35</td><td>$8,400</td></tr>
<tr><td>Materials (receipts attached)</td><td>$5,650</td></tr>
<tr><td>Electrical subcontractor</td><td>$3,200</td></tr>
<tr><td>Equipment rental</td><td>$750</td></tr>
<tr><td><strong>Total costs</strong></td><td><strong>$18,000</strong></td></tr>
<tr><td>Contractor fee at 15% of costs</td><td>$2,700</td></tr>
<tr><td><strong>Invoice total</strong></td><td><strong>$20,700</strong></td></tr>
<tr><td>Less deposit already paid</td><td>-$5,000</td></tr>
<tr><td><strong>Balance due</strong></td><td><strong>$15,700</strong></td></tr>
</tbody>
</table>

<p>Check: 240 × $35 = $8,400, and $8,400 + $5,650 + $3,200 + $750 = $18,000. The fee is $18,000 × 15% = $2,700, the total is $20,700, and after the $5,000 deposit the balance is $15,700. In the <a href="/invoice-generator">invoice generator</a>, enter each cost and the fee as separate line items and record the deposit in the amount-paid field so the balance due calculates automatically. Whether sales tax applies to materials or labour depends on your state; see <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a>.</p>

<h3>Types of cost-plus contract</h3>

<table>
<thead>
<tr><th>Type</th><th>How the fee works</th><th>Who it suits</th></tr>
</thead>
<tbody>
<tr><td>Cost plus percentage</td><td>Fee is a percentage of actual costs</td><td>Small private renovation and repair work</td></tr>
<tr><td>Cost plus fixed fee</td><td>Fee is a set dollar amount, regardless of costs</td><td>Clients who want to remove the incentive to spend more</td></tr>
<tr><td>Cost plus with guaranteed maximum price</td><td>Costs plus fee, capped at an agreed ceiling</td><td>Larger projects where the client needs budget certainty</td></tr>
<tr><td>Cost plus incentive fee</td><td>Fee rises or falls with cost or performance targets</td><td>Government and large commercial projects</td></tr>
</tbody>
</table>

<p>The percentage version has an obvious problem: the more the contractor spends, the more it earns. For US federal work, <a href="https://www.acquisition.gov/far/16.102" target="_blank" rel="noopener noreferrer">FAR 16.102(c)</a> states that the cost-plus-a-percentage-of-cost system of contracting shall not be used. Private clients can agree to it, but many prefer a fixed fee or a cap. If you are weighing open-ended billing against a fixed quote, our comparison of <a href="/blog/fixed-price-vs-time-and-materials">fixed price vs time and materials</a> covers the trade-offs. This is general information, not legal advice.</p>

<h2>How to choose your markup</h2>

<p>The markup is the part of cost plus pricing that needs judgment. A few factors should push it up or down:</p>

<ul>
<li><strong>Risk.</strong> Fixed quotes on uncertain jobs need a bigger markup than repeat work you have done many times. Under a cost-plus contract, where the client carries the cost risk, a smaller fee is normal.</li>
<li><strong>Volume.</strong> A large wholesale order can justify a lower markup because the fixed effort of quoting, invoicing and chasing payment is spread over more units.</li>
<li><strong>Payment terms.</strong> Waiting 60 days to be paid costs money. Long terms or slow-paying clients justify a higher markup, or a deposit.</li>
<li><strong>Customisation and expertise.</strong> Work only you can do, or that solves an urgent problem, can carry more than commodity work.</li>
<li><strong>What the business needs.</strong> Work back from your annual profit goal. If overhead and owner pay are already in the cost, the markup is what funds reserves, equipment replacement and growth.</li>
</ul>

<p>Once you have a markup, sense-check the resulting price against the market. If the cost plus price lands well below what competitors charge, that is a signal you could price higher, not a reason to stay low.</p>

<h3>Updating cost plus prices when costs rise</h3>

<p>Cost plus prices go stale as soon as a supplier raises prices. Suppose the ceramics studio's clay and glaze cost rises from $3.10 to $3.70 a mug, taking full unit cost from $10.00 to $10.60.</p>

<table>
<thead>
<tr><th>Option</th><th>Price</th><th>Profit per mug</th><th>Margin</th></tr>
</thead>
<tbody>
<tr><td>Keep the old price</td><td>$16.67</td><td>$6.07</td><td>36.4%</td></tr>
<tr><td>Keep the same dollar profit</td><td>$17.27</td><td>$6.67</td><td>38.6%</td></tr>
<tr><td>Keep the 40% margin: $10.60 / 0.60</td><td>$17.67</td><td>$7.07</td><td>40.0%</td></tr>
</tbody>
</table>

<p>Holding the old price quietly cuts the margin from 40% to 36.4%. Passing on only the $0.60 cost increase still lets the margin slip. To keep the planned 40% margin, the price must rise by $1.00, not $0.60. Many businesses review cost plus prices on a fixed schedule, such as every six months, and include a clause in wholesale agreements allowing price updates when material costs change.</p>

<h2>Cost plus vs other pricing methods</h2>

<table>
<thead>
<tr><th>Method</th><th>Starting point</th><th>Strength</th><th>Weakness</th></tr>
</thead>
<tbody>
<tr><td>Cost plus</td><td>Your costs</td><td>Simple; every sale covers cost</td><td>Ignores customer value and competitors</td></tr>
<tr><td>Competitive</td><td>Competitors' prices</td><td>Keeps you in the market range</td><td>Assumes competitors priced correctly</td></tr>
<tr><td><a href="/blog/value-based-pricing">Value-based</a></td><td>Client's gain</td><td>Captures more of the value you create</td><td>Needs client data and trust</td></tr>
<tr><td>Keystone</td><td>Wholesale cost × 2</td><td>Fast for retailers</td><td>Ignores overhead differences</td></tr>
</tbody>
</table>

<p>In practice, cost plus works best as a floor. Calculate the cost plus price first so you know the minimum, then adjust toward market or value where you can.</p>

<h3>When cost plus pricing works well, and when it does not</h3>

<p><strong>Good fit:</strong></p>
<ul>
<li>Custom or one-off work with no obvious market price.</li>
<li>Wholesale and contract manufacturing, where buyers expect cost-based quotes.</li>
<li>Renovation, repair and government work under cost-plus contracts.</li>
<li>New businesses that need a simple, defensible starting price.</li>
</ul>

<p><strong>Poor fit:</strong></p>
<ul>
<li>Highly competitive commodity products, where the market sets the price.</li>
<li>Expert services that create far more value than they cost to deliver.</li>
<li>Businesses with unreliable cost data, where the markup is applied to a guess.</li>
</ul>

<h2>What to agree before a cost-plus contract starts</h2>

<p>Cost-plus contracts depend on trust and clear records. Before work starts, put these points in writing:</p>

<ol>
<li><strong>Allowable costs.</strong> List what the client will pay for: labour, materials, subcontractors, equipment hire, permits, waste removal. Say what is excluded, such as your general office overhead if the fee is meant to cover it.</li>
<li><strong>Labour rates.</strong> State the hourly rate for each role and whether it includes payroll costs.</li>
<li><strong>The fee.</strong> A percentage of costs, a fixed amount, or a fee with an incentive. State it as a number, not "a reasonable fee".</li>
<li><strong>A cap or estimate.</strong> A guaranteed maximum price or a not-to-exceed figure, and what happens if costs approach it.</li>
<li><strong>Records and inspection.</strong> Which receipts, timesheets and subcontractor invoices you will provide with each invoice.</li>
<li><strong>Billing schedule.</strong> Weekly, fortnightly or monthly invoices, with payment terms and how deposits are applied.</li>
<li><strong>Change approval.</strong> How extra work is approved before costs are incurred.</li>
</ol>

<p>A clear <a href="/blog/statement-of-work-template">statement of work</a> covering scope, plus these billing terms, prevents most disputes on open-book jobs.</p>

<h2>Common cost plus pricing mistakes</h2>

<ul>
<li><strong>Marking up direct costs only</strong> and hoping the markup covers overhead.</li>
<li><strong>Confusing markup with margin</strong>, which produces a lower margin than planned.</li>
<li><strong>Not updating prices</strong> when material or labour costs rise. Our guide to <a href="/blog/how-to-raise-prices">raising prices</a> helps with the conversation.</li>
<li><strong>Discounting from a cost plus price</strong> without checking the <a href="/blog/contribution-margin">contribution margin</a> that remains.</li>
<li><strong>Unclear contract terms</strong> on cost-plus jobs: which costs are allowable, how overhead is charged, and what proof the client gets.</li>
</ul>

<h2>Bill your cost plus prices clearly</h2>

<p>Cost plus pricing is only as good as the cost behind it, so count materials, labour and overhead before adding your markup, and convert any target margin to the right markup first. When the work is done, itemise costs and fees clearly on the invoice. Create a professional invoice in minutes with the free <a href="/invoice-generator">invoice generator</a>, or start from the <a href="/invoice-templates/modern">modern invoice template</a>.</p>
`,
  },
];
