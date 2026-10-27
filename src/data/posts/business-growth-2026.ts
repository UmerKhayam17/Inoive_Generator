import type { PostDraft } from "../blog";

export const BUSINESS_GROWTH_2026_POSTS: PostDraft[] = [
  {
    slug: "operating-expenses",
    title: "Operating Expenses (OpEx): Definition, Examples and Formula",
    description:
      "Learn what operating expenses are, see common OpEx examples, use the formula with a worked example, and avoid the classification mistakes that distort profit.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["capex-vs-opex", "profit-and-loss-statement", "fixed-vs-variable-costs"],
    faqs: [
      {
        q: "What are operating expenses in simple terms?",
        a: "Operating expenses are the everyday costs of running a business that are not tied directly to making the specific products or services you sell. Rent, salaries for office and sales staff, software subscriptions, marketing, insurance, utilities and accounting fees are typical examples. They appear on the profit and loss statement below gross profit, and subtracting them from gross profit gives you operating profit, also called operating income.",
      },
      {
        q: "Is cost of goods sold an operating expense?",
        a: "Usually not. On a multi-step income statement, cost of goods sold is shown separately, directly under revenue, because it covers the direct cost of the items sold: materials, inventory purchases, direct labor and freight in. Operating expenses come after gross profit and cover overhead. Some single-step statements lump all costs together, but separating the two is what lets you see gross margin and control overhead.",
      },
      {
        q: "Is payroll an operating expense?",
        a: "Wages, payroll taxes and benefits for staff who run the business, such as administration, sales, marketing and management, are operating expenses. Wages for workers who directly produce goods are often counted in cost of goods sold instead. A service business may treat billable staff costs as cost of sales or as operating expenses; the important thing is to pick one treatment and use it consistently every period.",
      },
      {
        q: "Is depreciation an operating expense?",
        a: "Yes, depreciation on assets used to run the business, such as office equipment, computers and vehicles, is generally reported as an operating expense. It is a non-cash expense: the cash left when you bought the asset, and depreciation spreads that cost over the asset's useful life. Depreciation on production machinery may be included in cost of goods sold by manufacturers.",
      },
      {
        q: "What is the difference between OpEx and CapEx?",
        a: "Operating expenses are short-term costs used up within the period, like rent or a software subscription, and they reduce profit in full when incurred. Capital expenditures buy or improve long-term assets such as equipment, vehicles or buildings. CapEx is recorded on the balance sheet and expensed gradually through depreciation. Tax rules may let you deduct some capital purchases sooner, so check with a tax professional.",
      },
      {
        q: "Are taxes and interest operating expenses?",
        a: "Income tax and interest on loans are normally not operating expenses. They appear below operating profit, because they relate to how the business is financed and taxed rather than how it operates. Other taxes, such as business license fees, property taxes on business premises and the employer share of payroll taxes, are usually treated as operating expenses because they are a cost of running the business.",
      },
      {
        q: "What is the operating expense ratio?",
        a: "The operating expense ratio divides total operating expenses by revenue for the same period. If a business spends $30,000 on overhead and earns $120,000 in revenue, its ratio is 25%. A falling ratio means overhead is growing more slowly than sales. Compare the ratio with your own past periods and with benchmarks from your trade association rather than with a generic target.",
      },
      {
        q: "Are operating expenses tax deductible?",
        a: "In the US, ordinary and necessary business expenses are generally deductible, and most operating costs fall into that group. There are limits and exceptions, for example on business meals, home office costs and personal use of vehicles. Sole proprietors report these costs on Schedule C. Rules differ in other countries, so confirm the treatment with your tax authority or an accountant.",
      },
      {
        q: "How can a small business reduce operating expenses?",
        a: "Start with a line-by-line review of the last three to six months of spending. Cancel unused software seats, renegotiate insurance and supplier contracts, compare utility plans and question recurring charges nobody owns. Shift fixed costs to variable ones where it makes sense, such as using contractors for seasonal work. Cut carefully: reducing marketing or customer support can lower costs while also shrinking revenue.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Operating expenses (OpEx) are the costs of running a business day to day that are not part of the direct cost of the goods or services sold, such as rent, salaries, software, marketing and insurance. The basic formula is: operating expenses = revenue − cost of goods sold − operating profit.</p>

<p>Every business has a set of costs that keep the lights on whether it sells one unit or a thousand. Knowing exactly what those costs are, and how they compare with revenue, is one of the fastest ways to understand whether a business can grow profitably. This guide defines OpEx in plain language, lists common examples by category, shows two ways to calculate the total with a worked example, and explains the classification mistakes that make profit look better or worse than it really is.</p>

<p>A quick note on scope: our <a href="/invoice-generator">free invoice generator</a> creates PDF invoices in your browser. It does not track spending or produce financial reports, so for the calculations below you will use your bookkeeping software or a spreadsheet.</p>

<h2>What are operating expenses?</h2>
<p>Operating expenses are the ongoing costs a business incurs to carry out its normal activities, other than the direct cost of producing what it sells. Accountants often call them overhead, indirect costs, or selling, general and administrative expenses (SG&amp;A).</p>
<p>Three ideas define the category:</p>
<ul>
<li><strong>They support operations.</strong> Rent, admin salaries and marketing exist to run and grow the business, not to build a specific product.</li>
<li><strong>They are used up within the period.</strong> A month of rent or a year of software is consumed and expensed in that period, unlike equipment that lasts for years.</li>
<li><strong>They sit below gross profit.</strong> On a multi-step <a href="/blog/profit-and-loss-statement">profit and loss statement</a>, OpEx is subtracted from gross profit to arrive at operating profit.</li>
</ul>
<p>That last point matters. Revenue minus <a href="/blog/cost-of-goods-sold">cost of goods sold</a> gives gross profit, which shows how profitable each sale is. Subtracting operating costs from gross profit shows whether the business as a whole earns enough to cover its overhead.</p>

<h2>Operating expenses examples by category</h2>
<p>The categories below are typical for a small business. Your chart of accounts may group them differently, and that is fine as long as you use the same groups every month.</p>
<table><thead><tr><th>Category</th><th>Typical examples</th><th>Usually fixed or variable?</th></tr></thead><tbody>
<tr><td>Premises</td><td>Rent, lease payments, utilities, cleaning, repairs and maintenance</td><td>Mostly fixed</td></tr>
<tr><td>People</td><td>Salaries for admin, sales and management staff, payroll taxes, benefits, training, recruiting</td><td>Mostly fixed</td></tr>
<tr><td>Sales and marketing</td><td>Advertising, website, sales commissions, trade shows, promotional materials</td><td>Mixed</td></tr>
<tr><td>Technology</td><td>Software subscriptions, hosting, phones, internet, IT support</td><td>Mostly fixed</td></tr>
<tr><td>Professional services</td><td>Accounting, bookkeeping, legal fees, consultants</td><td>Mixed</td></tr>
<tr><td>Insurance</td><td>General liability, professional indemnity, property, cyber</td><td>Fixed</td></tr>
<tr><td>Administrative</td><td>Office supplies, postage, bank fees, payment processing fees, licenses</td><td>Mixed</td></tr>
<tr><td>Travel</td><td>Business travel, mileage, lodging</td><td>Variable</td></tr>
<tr><td>Non-cash</td><td>Depreciation and amortization on operating assets</td><td>Fixed</td></tr>
</tbody></table>
<p>The fixed-or-variable column is a simplification; the split between the two is explained in our guide to <a href="/blog/fixed-vs-variable-costs">fixed vs variable costs</a>. It is worth knowing because fixed overhead is what drives your break-even point.</p>

<h3>What is not an operating expense</h3>
<ul>
<li><strong>Cost of goods sold:</strong> inventory, raw materials, direct production labor and freight in.</li>
<li><strong>Capital expenditures:</strong> buying equipment, vehicles, buildings or major improvements. These go on the balance sheet. See <a href="/blog/capex-vs-opex">CapEx vs OpEx</a> for where the line falls.</li>
<li><strong>Interest expense:</strong> the cost of borrowing is a financing cost shown below operating profit.</li>
<li><strong>Income tax:</strong> shown at the bottom of the income statement, or paid personally by owners of pass-through businesses.</li>
<li><strong>Loan principal repayments and owner draws:</strong> these move cash but are not expenses at all.</li>
<li><strong>Sales tax or VAT collected:</strong> money held for the government is a liability, not income or expense.</li>
</ul>

<h2>The operating expense formula</h2>
<p>There are two common ways to get the total. Use whichever matches the data you have.</p>
<h3>Method 1: add up the categories</h3>
<p><strong>OpEx = rent + salaries + utilities + insurance + marketing + software + professional fees + depreciation + other overhead</strong></p>
<p>This bottom-up approach is what your bookkeeping software does when it totals every expense account classed as overhead.</p>
<h3>Method 2: work back from the income statement</h3>
<p><strong>OpEx = revenue − cost of goods sold − operating profit</strong></p>
<p>This is useful when you are reading someone else's financial statements and only the subtotals are shown.</p>
<h3>Related ratios</h3>
<ul>
<li><strong>Operating expense ratio</strong> = total OpEx ÷ revenue. It shows how much of each sales dollar goes to overhead.</li>
<li><strong>Operating margin</strong> = operating profit ÷ revenue. It shows how much of each sales dollar is left after both direct costs and overhead.</li>
</ul>

<h2>Worked example: calculating OpEx for one quarter</h2>
<p>Here is an illustrative example for a fictional online homeware shop. The numbers are invented to show the arithmetic and are not benchmarks.</p>
<table><thead><tr><th>Line</th><th>Amount</th></tr></thead><tbody>
<tr><td>Revenue</td><td>$90,000</td></tr>
<tr><td>Cost of goods sold</td><td>($40,500)</td></tr>
<tr><td><strong>Gross profit</strong></td><td><strong>$49,500</strong></td></tr>
<tr><td>Warehouse rent</td><td>($7,500)</td></tr>
<tr><td>Staff wages and payroll taxes</td><td>($18,000)</td></tr>
<tr><td>Advertising</td><td>($6,300)</td></tr>
<tr><td>Software and hosting</td><td>($1,350)</td></tr>
<tr><td>Payment processing fees</td><td>($2,250)</td></tr>
<tr><td>Insurance</td><td>($900)</td></tr>
<tr><td>Accounting fees</td><td>($1,200)</td></tr>
<tr><td>Depreciation on equipment</td><td>($750)</td></tr>
<tr><td><strong>Total operating expenses</strong></td><td><strong>($38,250)</strong></td></tr>
<tr><td><strong>Operating profit</strong></td><td><strong>$11,250</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Gross profit: $90,000 − $40,500 = $49,500 (a 55% gross margin, since $49,500 ÷ $90,000 = 0.55).</li>
<li>Method 1 total: $7,500 + $18,000 + $6,300 + $1,350 + $2,250 + $900 + $1,200 + $750 = $38,250.</li>
<li>Operating profit: $49,500 − $38,250 = $11,250.</li>
<li>Method 2 check: $90,000 − $40,500 − $11,250 = $38,250. Both methods agree.</li>
<li>Operating expense ratio: $38,250 ÷ $90,000 = 42.5%.</li>
<li>Operating margin: $11,250 ÷ $90,000 = 12.5%.</li>
</ul>
<p>What the owner learns: wages are the largest overhead line at 20% of revenue ($18,000 ÷ $90,000), and advertising is 7%. If the shop wants a higher operating margin, it can either grow revenue faster than overhead or trim specific lines. Cutting advertising by a third would save $2,100 a quarter, but only makes sense if it does not cost more than $2,100 in lost gross profit. Measuring that trade-off is what the <a href="/blog/roi-formula">ROI formula</a> is for.</p>

<h2>Why tracking OpEx matters</h2>
<ul>
<li><strong>Break-even planning.</strong> Fixed overhead divided by contribution margin per unit tells you how many sales you need before you make a profit.</li>
<li><strong>Pricing.</strong> Prices must cover direct costs and a fair share of overhead, or each sale quietly loses money.</li>
<li><strong>Budgeting.</strong> Overhead is the most predictable part of spending, which makes it the backbone of a <a href="/blog/small-business-budget">small business budget</a>.</li>
<li><strong>Cash planning.</strong> Rent, payroll and subscriptions are due whether or not customers have paid their invoices. Getting invoices out promptly, with clear payment terms, shortens the gap between paying overhead and collecting cash.</li>
<li><strong>Tax.</strong> In the US, ordinary and necessary business costs are generally deductible. The IRS lists the expense lines a sole proprietor reports in the <a href="https://www.irs.gov/instructions/i1040sc" target="_blank" rel="noopener noreferrer">Instructions for Schedule C</a>, which is a handy reference for categories even if you are not a sole proprietor.</li>
</ul>

<h2>How to track and review your overhead: a checklist</h2>
<ul>
<li>Set up separate expense accounts for each major overhead category, distinct from cost of goods sold.</li>
<li>Use a dedicated business bank account and card so every cost has a record.</li>
<li>Keep receipts and supplier invoices, and file them by month. Our guide on <a href="/blog/how-to-track-business-expenses">how to track business expenses</a> covers simple systems.</li>
<li>Categorize transactions weekly rather than at year end.</li>
<li>Reconcile bank and card statements every month.</li>
<li>Record depreciation monthly or quarterly so profit is not overstated until year end.</li>
<li>Calculate total overhead, the operating expense ratio and operating margin each month.</li>
<li>Compare each line with last month and the same month last year; investigate any big change.</li>
<li>List every recurring subscription with an owner and renewal date.</li>
<li>Review contracts (rent, insurance, software, phone) at least once a year before renewal.</li>
</ul>

<h2>How to reduce operating costs without hurting growth</h2>
<p>Lowering overhead is not always the right goal; some spending, such as marketing that brings in profitable customers, pays for itself. A sensible review looks like this:</p>
<ol>
<li><strong>Rank lines by size.</strong> Focus on the three or four biggest categories first. Trimming a $30 tool saves less than renegotiating a lease.</li>
<li><strong>Separate essential from discretionary.</strong> Insurance and rent are hard to avoid; unused software seats and duplicate tools are not.</li>
<li><strong>Measure return where you can.</strong> Track the gross profit each marketing channel produces before cutting it.</li>
<li><strong>Convert fixed to variable.</strong> Contractors, usage-based software and shared workspace can lower risk when sales are uneven.</li>
<li><strong>Automate low-value admin.</strong> Templates, standard documents and consistent invoice numbering reduce time spent on paperwork. A ready-made <a href="/invoice-templates">invoice template</a> is one small example.</li>
</ol>

<h2>Common mistakes with operating expenses</h2>
<ul>
<li><strong>Mixing COGS and overhead.</strong> Putting inventory purchases in operating expenses, or rent in COGS, distorts both gross margin and operating margin.</li>
<li><strong>Expensing capital purchases.</strong> Recording a $6,000 machine as an office expense makes one month look terrible and later months look too good. Capitalize it and depreciate it; our guide on <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a> shows the methods.</li>
<li><strong>Treating owner draws as expenses.</strong> For a sole proprietor, money taken out is a draw from equity, not an operating cost.</li>
<li><strong>Including loan principal.</strong> Only the interest portion of a loan payment is an expense, and it sits below operating profit.</li>
<li><strong>Counting sales tax collected as income and remittances as expenses.</strong> It inflates both lines and can be misreported.</li>
<li><strong>Ignoring annual costs.</strong> Insurance or software paid once a year should be spread across the months it covers if you produce monthly statements.</li>
<li><strong>Changing categories often.</strong> Moving costs between accounts breaks month-to-month comparisons.</li>
<li><strong>Cutting blindly.</strong> Slashing marketing or customer service can lower overhead and revenue at the same time.</li>
</ul>

<h2>OpEx, profit and the bigger picture</h2>
<p>Operating costs are one layer in the profit picture. Revenue minus COGS gives gross profit; gross profit minus overhead gives operating profit; and operating profit after interest and tax gives net profit. Our explainer on <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a> walks through each layer. If you are self-employed, also review the list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> so legitimate business costs are not missed at tax time.</p>
<p>Keep operating expenses grouped consistently, review them monthly against revenue, and treat every cut as a trade-off with growth rather than a goal in itself. Done that way, overhead becomes a tool for planning instead of a surprise at year end.</p>
`,
  },
  {
    slug: "how-to-calculate-depreciation",
    title: "How to Calculate Depreciation: Methods and Examples",
    description:
      "Learn how to calculate depreciation with straight-line, declining balance and units-of-production methods, worked examples, and US and UK tax notes for 2026.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["capex-vs-opex", "balance-sheet-small-business", "operating-expenses"],
    faqs: [
      {
        q: "What is the simplest way to calculate depreciation?",
        a: "The straight-line method is the simplest. Subtract the asset's estimated salvage value from its cost, then divide by its useful life in years. A $12,000 machine expected to be worth $2,000 after five years depreciates by ($12,000 − $2,000) ÷ 5 = $2,000 a year. Most small businesses use straight-line in their own books because it is easy to explain and produces the same expense every year.",
      },
      {
        q: "What are the main depreciation methods?",
        a: "The four methods taught most often are straight-line, declining balance (including double-declining balance), sum-of-the-years' digits and units of production. Straight-line spreads cost evenly. Declining balance and sum-of-the-years' digits front-load the expense into early years. Units of production ties the expense to actual use, such as hours run or miles driven. Tax systems such as US MACRS have their own prescribed methods and tables.",
      },
      {
        q: "What is salvage value?",
        a: "Salvage value, also called residual or scrap value, is the amount you expect to get for an asset when you stop using it, for example by selling or trading it in. You subtract it from cost to find the depreciable base. Estimate it realistically based on resale markets for similar items. Many small items have a salvage value of zero. Note that US MACRS tax depreciation ignores salvage value.",
      },
      {
        q: "When does depreciation start?",
        a: "Depreciation starts when an asset is placed in service, meaning it is ready and available for its intended use, not when you order or pay for it. For book purposes many businesses depreciate from the month of purchase. US tax rules apply conventions, such as the half-year convention, that assume an asset was placed in service partway through the year regardless of the actual date.",
      },
      {
        q: "Can I deduct the full cost of equipment in the first year?",
        a: "Often, yes, for tax purposes. In the US, Section 179 expensing and bonus depreciation can let a business deduct much or all of qualifying equipment in the year it is placed in service, subject to limits and conditions. In the UK, the Annual Investment Allowance lets most businesses deduct qualifying plant and machinery up to its limit. Your own books may still depreciate the asset over its useful life.",
      },
      {
        q: "Is depreciation a cash expense?",
        a: "No. Depreciation is a non-cash expense. The cash left the business when you bought the asset or made loan payments on it. Depreciation simply allocates that cost to the years that benefit from the asset. That is why it is added back when you prepare a cash flow statement using the indirect method, and why profit and cash can differ significantly in years of heavy investment.",
      },
      {
        q: "Can land be depreciated?",
        a: "No. Land is not depreciated because it does not wear out or get used up. When you buy a property, you need to split the purchase price between the land and the building, and only the building portion is depreciable. In the US, residential rental buildings are generally recovered over 27.5 years and nonresidential real property over 39 years under the tax rules.",
      },
      {
        q: "What happens when I sell a depreciated asset?",
        a: "Compare the sale price with the asset's book value, which is cost minus accumulated depreciation. If you sell for more than book value, you record a gain; for less, a loss. For tax, a gain on equipment may be partly taxed as ordinary income through depreciation recapture in the US, or trigger a balancing charge under UK capital allowances. Keep purchase and depreciation records for every asset.",
      },
      {
        q: "Do UK businesses deduct depreciation for tax?",
        a: "No. In the UK, accounting depreciation is added back when calculating taxable profit, and businesses claim capital allowances instead. The Annual Investment Allowance, first-year allowances and writing down allowances determine the tax relief. Sole traders and partnerships using the cash basis can usually deduct most equipment purchases as expenses instead, though cars are an exception. Check GOV.UK or an accountant for your situation.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Here is how to calculate depreciation with the straight-line method: subtract the asset's salvage value from its cost and divide by its useful life: (cost − salvage value) ÷ useful life = annual depreciation. Declining balance and units-of-production methods spread the same cost differently, front-loading it or tying it to actual use.</p>

<p>When you buy a laptop, a van or a piece of machinery, the cost does not belong to a single month. The asset helps you earn revenue for years, so accounting spreads its cost across that period. This guide explains how to calculate depreciation step by step using the three most common methods, with a worked example for each, plus a comparison table, a checklist and the mistakes that trip up small businesses. It finishes with short notes on US tax depreciation (MACRS and Section 179) and UK capital allowances.</p>

<p>Depreciation is a bookkeeping and tax topic, so you will do these calculations in a spreadsheet or accounting software. Our <a href="/invoice-generator">free invoice generator</a> builds PDF invoices; it does not keep asset registers or books.</p>

<h2>What depreciation is and why it matters</h2>
<p>Depreciation is the systematic allocation of a long-term asset's cost over its useful life. It matches the expense of the asset to the periods in which it helps generate income. Without it, the year you bought equipment would show an artificially large loss and later years would look too profitable.</p>
<p>Depreciation shows up in two places:</p>
<ul>
<li><strong>The income statement</strong>, as depreciation expense, usually within <a href="/blog/operating-expenses">operating expenses</a>.</li>
<li><strong>The balance sheet</strong>, as accumulated depreciation, which reduces the asset's recorded cost to its book value. Our guide to the <a href="/blog/balance-sheet-small-business">small business balance sheet</a> shows where it sits.</li>
</ul>
<p>Only assets that are bought rather than consumed, and that last more than a year, are depreciated. That is the core of the <a href="/blog/capex-vs-opex">CapEx vs OpEx</a> distinction: a printer is capitalized and depreciated, while printer ink is expensed immediately.</p>

<h2>How to calculate depreciation: the inputs you need</h2>
<ul>
<li><strong>Cost:</strong> the purchase price plus costs to get the asset ready for use, such as delivery, installation and setup. Exclude refundable sales tax or VAT you can reclaim.</li>
<li><strong>Salvage value:</strong> your realistic estimate of what the asset will be worth at the end of its useful life. Zero is common for small items.</li>
<li><strong>Useful life:</strong> how long you expect to use the asset, in years, or in units such as machine hours or miles.</li>
<li><strong>Placed-in-service date:</strong> when the asset is ready for use, which is when depreciation starts.</li>
</ul>
<p>Depreciable base = cost − salvage value. Whichever schedule you pick, how to calculate depreciation always starts from this number. Every method below allocates this same base; they just allocate it on different schedules.</p>

<h2>Method 1: straight-line depreciation</h2>
<p><strong>Formula:</strong> annual depreciation = (cost − salvage value) ÷ useful life in years</p>
<p><strong>Illustrative example:</strong> A bakery buys a commercial mixer for $12,000 including delivery. It expects to use it for five years and sell it for $2,000 at the end.</p>
<ul>
<li>Depreciable base: $12,000 − $2,000 = $10,000</li>
<li>Annual depreciation: $10,000 ÷ 5 = $2,000</li>
<li>Monthly depreciation: $2,000 ÷ 12 ≈ $166.67</li>
<li>Book value after year 3: $12,000 − (3 × $2,000) = $6,000</li>
</ul>
<p>Straight-line is the default for most small businesses' own books because it is simple and predictable. If the mixer is bought mid-year, depreciate only the months it was in service in the first year.</p>

<h2>Method 2: declining balance and double-declining balance</h2>
<p>Declining balance applies a fixed rate to the asset's book value at the start of each year, so the expense is highest in year one and shrinks over time. This suits assets that lose value fastest when new, such as vehicles and computers.</p>
<p><strong>Formula:</strong> annual depreciation = book value at start of year × rate. For double-declining balance (DDB), rate = 2 ÷ useful life.</p>
<p>Using the same mixer, the DDB rate is 2 ÷ 5 = 40%. Salvage value is ignored when applying the rate, but the asset is never depreciated below salvage value.</p>
<table><thead><tr><th>Year</th><th>Opening book value</th><th>Calculation</th><th>Depreciation</th><th>Closing book value</th></tr></thead><tbody>
<tr><td>1</td><td>$12,000</td><td>$12,000 × 40%</td><td>$4,800</td><td>$7,200</td></tr>
<tr><td>2</td><td>$7,200</td><td>$7,200 × 40%</td><td>$2,880</td><td>$4,320</td></tr>
<tr><td>3</td><td>$4,320</td><td>$4,320 × 40%</td><td>$1,728</td><td>$2,592</td></tr>
<tr><td>4</td><td>$2,592</td><td>Limited to reach $2,000 salvage</td><td>$592</td><td>$2,000</td></tr>
<tr><td>5</td><td>$2,000</td><td>Fully depreciated</td><td>$0</td><td>$2,000</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td><strong>$10,000</strong></td><td></td></tr>
</tbody></table>
<p>Check: $4,800 + $2,880 + $1,728 + $592 = $10,000, the same depreciable base as straight-line. In year 4, 40% of $2,592 would be $1,036.80, which would push book value below salvage, so the charge is capped at $592. Many businesses instead switch to straight-line once it gives a larger charge than the declining rate; US MACRS builds that switch into its tables.</p>

<h2>Method 3: units-of-production depreciation</h2>
<p>This method ties depreciation to actual use, which suits machinery, vehicles and equipment whose wear depends on how hard they work.</p>
<p><strong>Formula:</strong> depreciation per unit = (cost − salvage value) ÷ total expected units; annual depreciation = units produced in the year × depreciation per unit.</p>
<p>Suppose the mixer is expected to run 5,000 batches over its life.</p>
<ul>
<li>Per-batch rate: $10,000 ÷ 5,000 = $2.00 per batch</li>
<li>Year 1, a busy year of 1,400 batches: 1,400 × $2.00 = $2,800</li>
<li>Year 2, a slower year of 800 batches: 800 × $2.00 = $1,600</li>
</ul>
<p>The expense now rises and falls with output, which can give a more accurate gross margin for manufacturers. The trade-off is that you must record usage reliably.</p>

<h3>A fourth option: sum-of-the-years' digits</h3>
<p>Add the digits of the useful life (for five years, 5 + 4 + 3 + 2 + 1 = 15). Year 1 depreciation is 5/15 of the base, year 2 is 4/15, and so on. For the mixer, year 1 is $10,000 × 5 ÷ 15 ≈ $3,333.33. It front-loads expense less aggressively than DDB.</p>

<h2>Comparing the methods</h2>
<table><thead><tr><th>Method</th><th>Year 1 expense (mixer)</th><th>Pattern</th><th>Good fit for</th></tr></thead><tbody>
<tr><td>Straight-line</td><td>$2,000</td><td>Even every year</td><td>Furniture, fit-outs, most general assets</td></tr>
<tr><td>Double-declining balance</td><td>$4,800</td><td>High early, falling</td><td>Computers, vehicles, technology</td></tr>
<tr><td>Sum-of-the-years' digits</td><td>$3,333.33</td><td>High early, falling more gently</td><td>Assets that lose productivity steadily</td></tr>
<tr><td>Units of production</td><td>$2,800 (1,400 batches)</td><td>Varies with use</td><td>Machinery, delivery vehicles</td></tr>
</tbody></table>
<p>The table shows that the question of how to calculate depreciation is really a question of timing. All four methods depreciate the same $10,000 in total; they differ only in timing. Timing still matters, because it changes reported profit year by year, which affects the figures on your <a href="/blog/profit-and-loss-statement">profit and loss statement</a> and what lenders see.</p>

<h2>Tax depreciation in the US: MACRS, Section 179 and bonus depreciation</h2>
<p>The figures above are book depreciation. US federal tax depreciation follows its own rules, set out in IRS <a href="https://www.irs.gov/publications/p946" target="_blank" rel="noopener noreferrer">Publication 946, How To Depreciate Property</a>.</p>
<ul>
<li><strong>MACRS</strong> (Modified Accelerated Cost Recovery System) assigns each asset type a recovery period, such as five years for computers, cars and light trucks and seven years for office furniture. It generally uses a 200% declining balance that switches to straight-line, ignores salvage value and applies conventions such as the half-year convention. For five-year property under the half-year convention, the IRS table rates are 20%, 32%, 19.2%, 11.52%, 11.52% and 5.76% over six tax years.</li>
<li><strong>Section 179</strong> lets a business elect to deduct the cost of qualifying property in the year it is placed in service instead of depreciating it. According to IRS Rev. Proc. 2025-32, the 2026 maximum is $2,560,000, reduced dollar for dollar once qualifying purchases exceed $4,090,000. The deduction is also limited to business taxable income, and SUVs have a lower cap.</li>
<li><strong>Bonus depreciation</strong> (the special depreciation allowance) was restored to 100% for qualifying property acquired after January 19, 2025, under the 2025 tax law, with the option to elect out or, for the first tax year ending after that date, to elect a lower rate.</li>
</ul>
<p>These limits and elections change, and vehicles, listed property and real estate have special rules. Confirm current figures in Publication 946 and the Form 4562 instructions, or with a tax professional, before filing. Sole proprietors report the result on Schedule C; see our guide to <a href="/blog/schedule-c-for-freelancers">Schedule C for freelancers</a>.</p>

<h2>UK note: capital allowances instead of depreciation</h2>
<p>In the UK, depreciation in your accounts is not deductible for tax. You add it back and claim capital allowances instead. The <a href="https://www.gov.uk/capital-allowances/annual-investment-allowance" target="_blank" rel="noopener noreferrer">Annual Investment Allowance on GOV.UK</a> is currently £1 million a year for qualifying plant and machinery. Spending above that, or on assets the AIA does not cover, goes into writing down allowances; the government announced a cut to the main rate from 18% to 14% from April 2026, alongside a new 40% first-year allowance for certain expenditure from January 2026. Cars follow separate rules based on emissions. Sole traders using the cash basis can usually deduct equipment as an expense instead. Check current GOV.UK guidance when you complete your <a href="/blog/self-assessment-tax-return-uk">Self Assessment tax return</a>.</p>

<h2>Checklist: setting up depreciation for your business</h2>
<ul>
<li>Set a capitalization threshold (for example, items over a set amount are capitalized) and apply it consistently.</li>
<li>Create a fixed asset register with description, purchase date, placed-in-service date, cost, salvage value, useful life and method.</li>
<li>Keep the supplier invoice and proof of payment for every asset.</li>
<li>Choose a book method for each asset class and document why.</li>
<li>Record depreciation monthly or quarterly, not just at year end.</li>
<li>Track book and tax depreciation separately if they differ.</li>
<li>Record disposals: remove the asset and its accumulated depreciation, and book any gain or loss.</li>
<li>Review useful lives annually and adjust prospectively if expectations change.</li>
</ul>

<h2>Common mistakes when calculating depreciation</h2>
<ul>
<li><strong>Expensing assets immediately in the books.</strong> It distorts monthly profit even when tax rules allow an immediate deduction.</li>
<li><strong>Depreciating land.</strong> Only buildings and improvements wear out; split the purchase price.</li>
<li><strong>Starting at purchase rather than in-service date.</strong> Equipment sitting in a crate is not yet being used.</li>
<li><strong>Depreciating below salvage value</strong> with declining-balance methods.</li>
<li><strong>Forgetting installation and delivery costs</strong> in the asset's cost.</li>
<li><strong>Mixing up book and tax figures.</strong> MACRS or capital allowances rarely match your book depreciation.</li>
<li><strong>Ignoring personal use.</strong> Only the business-use percentage of a vehicle or computer is depreciable for tax.</li>
<li><strong>Losing records.</strong> Without purchase documents, recapture and disposal calculations become guesswork. Good <a href="/blog/bookkeeping-basics">bookkeeping basics</a> prevent this.</li>
</ul>

<h2>Putting it together</h2>
<p>Learning how to calculate depreciation comes down to four inputs and a choice of schedule. Start with straight-line for simplicity, use declining balance or units of production where they better reflect how an asset loses value, and keep tax depreciation as a separate calculation governed by IRS or HMRC rules. If you are unsure which tax elections suit your business, ask a qualified accountant before you file, and keep your asset register up to date so the numbers stay reliable from year to year.</p>
`,
  },
  {
    slug: "roi-formula",
    title: "ROI Formula: How to Calculate Return on Investment",
    description:
      "Use the ROI formula to calculate return on investment for equipment, marketing and hires, with worked examples, annualized ROI and the mistakes to avoid.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["break-even-point", "how-to-price-a-product", "gross-profit-vs-net-profit"],
    faqs: [
      {
        q: "What is the formula for ROI?",
        a: "The basic formula is ROI = (net return ÷ cost of investment) × 100. Net return is the total gain from the investment minus what it cost. If you spend $5,000 and it brings in $7,000 of profit-generating benefit, net return is $2,000 and ROI is $2,000 ÷ $5,000 × 100 = 40%. Always define what counts as gain and cost before you calculate, so results are comparable.",
      },
      {
        q: "What is a good ROI for a small business?",
        a: "There is no universal good number. A worthwhile ROI depends on the risk involved, how long your money is tied up and what else you could do with it, such as paying down a loan or holding cash. A useful test is whether the annualized return beats your cost of borrowing and your next-best option by a comfortable margin, after allowing for uncertainty in your estimates.",
      },
      {
        q: "How do I calculate ROI as a percentage?",
        a: "Divide the net return by the cost of the investment, then multiply by 100. For example, a $2,000 net return on a $8,000 investment gives 2,000 ÷ 8,000 = 0.25, and 0.25 × 100 = 25%. In a spreadsheet, put the gain in B2 and the cost in B3, then use =(B2-B3)/B3 and format the cell as a percentage.",
      },
      {
        q: "What is annualized ROI?",
        a: "Annualized ROI converts a total return earned over several years into an equivalent yearly rate, which makes investments of different lengths comparable. The formula is ((1 + ROI) raised to the power 1 ÷ n) − 1, where n is the number of years. A 50% total return over four years annualizes to about 10.7% a year, which is much lower than a 50% return earned in a single year.",
      },
      {
        q: "Can ROI be negative?",
        a: "Yes. If the gain from an investment is less than its cost, net return is negative and so is ROI. Spending $4,000 on a campaign that produces $3,000 of gross profit gives ($3,000 − $4,000) ÷ $4,000 = −25%. A negative ROI tells you the investment destroyed value over the period measured, though some investments, such as brand building, may pay back over a longer period than you measured.",
      },
      {
        q: "What is the difference between ROI and ROAS?",
        a: "ROAS, or return on ad spend, divides revenue from ads by ad spend, so $10,000 of sales from $2,000 of ads is a ROAS of 5, often written 5:1 or 500%. ROI uses profit rather than revenue and subtracts the cost. If those sales carry 40% gross margin, gross profit is $4,000, and marketing ROI is ($4,000 − $2,000) ÷ $2,000 = 100%.",
      },
      {
        q: "What is the difference between ROI and payback period?",
        a: "ROI measures how much you gain relative to cost over the whole life of an investment. Payback period measures how long it takes to recover the original cost from the cash it generates. A machine costing $20,000 that saves $7,000 a year pays back in about 2.9 years. Both are useful together: ROI shows size of the reward, payback shows how long cash is tied up.",
      },
      {
        q: "Should I use revenue or profit in the ROI formula?",
        a: "Use profit or cash savings, not revenue. Revenue ignores the cost of producing what you sold, so it overstates the return. For a marketing campaign, use the gross profit from the extra sales. For equipment, use the labor or material costs it saves plus any additional profit it enables, minus running costs such as maintenance, and include resale value at the end if you expect one.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The ROI formula is ROI = (net return ÷ cost of investment) × 100, where net return is the total gain minus the cost. Spend $10,000 and get $13,000 back and your return on investment is ($13,000 − $10,000) ÷ $10,000 × 100 = 30%. Annualize it to compare investments of different lengths.</p>

<p>Small businesses make investment decisions all the time: a new piece of equipment, a marketing campaign, a software tool, a first hire. Return on investment (ROI) is the simplest way to compare those choices on the same scale. This guide explains the formula, shows how to define gains and costs honestly, works through three examples with the arithmetic shown, covers annualized ROI and related metrics, and lists the mistakes that make ROI figures misleading.</p>

<p>One note before you start: the numbers you need come from your books, bank records and invoices. Our <a href="/invoice-generator">free invoice generator</a> creates PDF invoices in your browser, but it does not calculate ROI or keep financial records, so use a spreadsheet for the calculations below.</p>

<h2>The ROI formula explained</h2>
<p>There are two equivalent ways to write it:</p>
<ul>
<li><strong>ROI = (gain from investment − cost of investment) ÷ cost of investment × 100</strong></li>
<li><strong>ROI = net return ÷ cost of investment × 100</strong></li>
</ul>
<p>The result is a percentage. An ROI of 0% means you got your money back and nothing more; 100% means you doubled it; a negative figure means you lost money.</p>
<h3>Defining the gain</h3>
<p>The gain should be the benefit the investment creates, measured in profit or cash, not in revenue. Typical gains include:</p>
<ul>
<li>Gross profit from extra sales, which is revenue minus the direct cost of those sales. See <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a> if you are unsure which line to use.</li>
<li>Costs saved, such as labor hours eliminated or materials wasted less often.</li>
<li>Resale or salvage value at the end of the investment's life.</li>
</ul>
<h3>Defining the cost</h3>
<p>Include everything it took to make and run the investment over the period you measure:</p>
<ul>
<li>Purchase price, delivery, installation and setup.</li>
<li>Training time and implementation fees.</li>
<li>Ongoing costs such as maintenance, subscriptions, consumables and insurance.</li>
<li>Financing costs, if you borrowed to make the investment.</li>
</ul>
<p>Whatever you decide to include, write it down and apply the same rules to every option you compare. Inconsistent definitions are the most common reason two ROI figures cannot be compared.</p>

<h2>How to use the ROI formula step by step</h2>
<ol>
<li><strong>Pick the time period.</strong> One campaign month, one year, or the asset's whole useful life.</li>
<li><strong>Total the costs</strong> for that period, including running costs.</li>
<li><strong>Total the gains</strong> for that period in profit or cash terms.</li>
<li><strong>Subtract costs from gains</strong> to get the net return.</li>
<li><strong>Divide by the costs</strong> and multiply by 100.</li>
<li><strong>Annualize</strong> if the period is not one year and you want to compare with other options.</li>
<li><strong>Sanity-check</strong> the assumptions: would the gain have happened anyway without the investment?</li>
</ol>
<p>In a spreadsheet, with total gain in B2 and total cost in B3, the formula is =(B2-B3)/B3, formatted as a percentage.</p>

<h2>Worked example 1: a marketing campaign</h2>
<p>An illustrative example for a fictional online store. It spends $4,000 on a month of paid ads. Tracking shows $25,000 of sales attributed to the campaign, and the store's gross margin on those products is 40%.</p>
<ul>
<li>Gross profit from the campaign: $25,000 × 40% = $10,000</li>
<li>Net return: $10,000 − $4,000 = $6,000</li>
<li>ROI: $6,000 ÷ $4,000 × 100 = 150%</li>
</ul>
<p>Had the store used revenue instead of gross profit, it would have reported ($25,000 − $4,000) ÷ $4,000 = 525%, a figure more than three times too high. Gross margin depends on pricing and costs, which is why <a href="/blog/markup-vs-margin">markup vs margin</a> matters even for marketing decisions.</p>

<h2>Worked example 2: equipment with annualized ROI</h2>
<p>A print shop is considering a $20,000 machine that will save $7,500 a year in outsourcing costs. Maintenance is $500 a year. It expects to use the machine for four years and sell it for $2,000 at the end. All figures are illustrative.</p>
<ul>
<li>Net annual saving: $7,500 − $500 = $7,000</li>
<li>Total gain over four years: ($7,000 × 4) + $2,000 resale = $30,000</li>
<li>Net return: $30,000 − $20,000 = $10,000</li>
<li>ROI over four years: $10,000 ÷ $20,000 × 100 = 50%</li>
<li>Payback period: $20,000 ÷ $7,000 ≈ 2.9 years</li>
</ul>
<p>A 50% return sounds strong, but it took four years. To compare it with, say, paying off a loan, convert it to a yearly rate.</p>

<h2>Annualized ROI</h2>
<p><strong>Annualized ROI = ((1 + ROI) ^ (1 ÷ n)) − 1</strong>, where ROI is written as a decimal and n is the number of years.</p>
<p>For the print shop: (1 + 0.50) ^ (1 ÷ 4) − 1 = 1.5 ^ 0.25 − 1 ≈ 1.1067 − 1 ≈ 0.107, or about 10.7% a year.</p>
<p>The calculation assumes the return compounds evenly each year, which is a simplification but makes options of different lengths comparable. If you want to see how compounding works over time, the SEC's <a href="https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator" target="_blank" rel="noopener noreferrer">compound interest calculator on Investor.gov</a> is a free, ad-free tool. In a spreadsheet, with total ROI as a decimal in B4 and years in B5, use =(1+B4)^(1/B5)-1.</p>
<p>For uneven cash flows over several years, finance professionals often prefer net present value (NPV) or internal rate of return (IRR), which account for the timing of each cash flow. Simple and annualized ROI are fine for most small business decisions, as long as you remember they do not discount future cash.</p>

<h2>Worked example 3: hiring versus outsourcing</h2>
<p>A consultant pays a freelancer $3,000 a month to handle client admin. Hiring a part-time employee would cost $2,400 a month in wages and payroll costs, plus $1,200 one-off for equipment and training. Measured over twelve months:</p>
<ul>
<li>Cost of hiring: ($2,400 × 12) + $1,200 = $30,000</li>
<li>Gain (outsourcing cost avoided): $3,000 × 12 = $36,000</li>
<li>Net return: $36,000 − $30,000 = $6,000</li>
<li>ROI: $6,000 ÷ $30,000 × 100 = 20%</li>
</ul>
<p>The positive ROI supports the hire, but non-financial factors such as management time, flexibility and employment obligations belong in the decision too.</p>

<h2>Setting up the ROI formula in a spreadsheet</h2>
<p>A simple sheet lets you compare several options side by side. Put each investment in its own row and use these columns:</p>
<table><thead><tr><th>Column</th><th>Contents</th><th>Example formula (row 2)</th></tr></thead><tbody>
<tr><td>A</td><td>Investment name</td><td>Typed text</td></tr>
<tr><td>B</td><td>Total gain (profit or savings)</td><td>Typed or linked figure</td></tr>
<tr><td>C</td><td>Total cost</td><td>Typed or linked figure</td></tr>
<tr><td>D</td><td>Net return</td><td>=B2-C2</td></tr>
<tr><td>E</td><td>ROI</td><td>=D2/C2</td></tr>
<tr><td>F</td><td>Years</td><td>Typed figure</td></tr>
<tr><td>G</td><td>Annualized ROI</td><td>=(1+E2)^(1/F2)-1</td></tr>
</tbody></table>
<p>Format columns E and G as percentages, then sort by column G to rank options. Copying the ROI formula down the column keeps every row on the same definition, which is the main advantage of doing this in a sheet rather than on a calculator. If revenue and profit figures are getting mixed up in your inputs, our explainer on <a href="/blog/revenue-vs-profit">revenue vs profit</a> clears up the difference.</p>

<h2>ROI and related metrics compared</h2>
<table><thead><tr><th>Metric</th><th>Formula</th><th>Best used for</th></tr></thead><tbody>
<tr><td>ROI</td><td>(gain − cost) ÷ cost</td><td>Comparing individual investments or projects</td></tr>
<tr><td>Annualized ROI</td><td>(1 + ROI) ^ (1 ÷ years) − 1</td><td>Comparing investments of different lengths</td></tr>
<tr><td>ROAS</td><td>revenue from ads ÷ ad spend</td><td>Quick ad channel comparisons (ignores costs of goods)</td></tr>
<tr><td>Payback period</td><td>investment ÷ annual net cash inflow</td><td>Judging how long cash is tied up</td></tr>
<tr><td>Return on assets (ROA)</td><td>net income ÷ total assets</td><td>Whole-business efficiency</td></tr>
<tr><td>Return on equity (ROE)</td><td>net income ÷ owner's equity</td><td>Return to owners on their capital</td></tr>
<tr><td>Break-even point</td><td>fixed costs ÷ contribution margin per unit</td><td>Minimum sales needed to cover costs</td></tr>
</tbody></table>
<p>The ROI formula is not a replacement for the others. Break-even and ROI answer different questions: break-even tells you the minimum to avoid a loss, ROI tells you how much you gain beyond it. Our guide to the <a href="/blog/break-even-point">break-even point</a> walks through that calculation.</p>

<h2>Using ROI in everyday business decisions</h2>
<ul>
<li><strong>Pricing changes.</strong> Estimate the extra gross profit from a price rise against any lost volume. Our guide on <a href="/blog/how-to-price-a-product">how to price a product</a> covers the strategies.</li>
<li><strong>Software.</strong> Compare subscription cost with hours saved multiplied by an hourly cost.</li>
<li><strong>Equipment.</strong> Include depreciation in your accounts, but use the actual cash outlay and savings for ROI. See <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a> for the accounting side.</li>
<li><strong>Collections.</strong> Faster invoicing and clear payment terms free up cash that would otherwise sit in receivables, which matters for <a href="/blog/cash-flow-management">cash flow management</a> even when it does not show up as ROI.</li>
<li><strong>Budget allocation.</strong> Rank proposed spending by expected ROI and payback when building a <a href="/blog/small-business-budget">small business budget</a>.</li>
</ul>

<h2>Checklist before you trust an ROI figure</h2>
<ul>
<li>The time period is stated and the same for all options compared.</li>
<li>Gains are measured in profit or cash savings, not revenue.</li>
<li>All costs are included: purchase, setup, training, running and financing costs.</li>
<li>Resale or salvage value is included only if it is realistic.</li>
<li>Gains that would have happened anyway are excluded.</li>
<li>Multi-year returns are annualized before comparison.</li>
<li>Assumptions are written down so the estimate can be checked later.</li>
<li>You have compared the forecast with actual results after the fact.</li>
</ul>

<h2>Common mistakes with return on investment</h2>
<ul>
<li><strong>Using revenue instead of profit.</strong> It can overstate ROI several times over, as example 1 shows.</li>
<li><strong>Ignoring time.</strong> A 30% return over five years is far weaker than 30% in one year.</li>
<li><strong>Leaving out running costs.</strong> Maintenance, subscriptions and staff time erode the return.</li>
<li><strong>Attributing everything to the investment.</strong> Seasonal sales or repeat customers would often have bought anyway.</li>
<li><strong>Ignoring risk.</strong> A certain 15% may be better than an uncertain 40%.</li>
<li><strong>Comparing figures with different definitions.</strong> One team's ROI may include overhead while another's does not.</li>
<li><strong>Ignoring cash flow.</strong> A high-ROI project can still strain cash if the payback is slow.</li>
<li><strong>Never checking actual results.</strong> Revisit forecasts so the next estimate is better.</li>
</ul>

<h2>Bottom line</h2>
<p>The ROI formula is simple: net return divided by cost. The real skill is defining gains and costs honestly, measuring in profit rather than revenue, and annualizing returns so options of different lengths are comparable. Use ROI alongside payback period and break-even analysis, and record your assumptions so you can learn from each decision.</p>
`,
  },
  {
    slug: "how-to-price-a-product",
    title: "How to Price a Product: 7 Pricing Strategies With Examples",
    description:
      "Learn how to price a product step by step: calculate true unit cost, compare 7 pricing strategies with worked examples, and test prices without losing margin.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["markup-vs-margin", "break-even-point", "cost-of-goods-sold"],
    faqs: [
      {
        q: "What is the formula for pricing a product?",
        a: "The most common starting formula is cost-plus: price = unit cost × (1 + markup percentage). If a product costs $14 to make, sell and ship, and you want a 50% markup, the price is $14 × 1.5 = $21. If you think in margin instead, price = unit cost ÷ (1 − target margin). Treat the result as a floor, then adjust for competitors and what customers value.",
      },
      {
        q: "What are the main pricing strategies?",
        a: "Common strategies include cost-plus pricing, competitive pricing, value-based pricing, penetration pricing, price skimming, keystone pricing and bundle or tiered pricing. Psychological pricing, such as ending prices in .99, is a tactic used on top of these. Most small businesses combine several: costs set the minimum price, competitors set the market range, and customer value decides where in that range you land.",
      },
      {
        q: "How do I price a product for the first time?",
        a: "Calculate the full unit cost, including materials, labor, packaging, payment fees, shipping and a share of overhead. Research what similar products sell for and how yours differs. Set a price that covers costs with a healthy margin and fits within, or justifies standing outside, the market range. Then test it with real customers, track conversion and margin, and adjust in small steps.",
      },
      {
        q: "What is keystone pricing?",
        a: "Keystone pricing is a retail rule of thumb where the retail price is double the wholesale cost, a 100% markup and a 50% gross margin. An item bought for $20 wholesale would retail at $40. It is quick and easy, but it ignores how much customers value the item and what competitors charge, so many retailers use it only as a starting point before adjusting.",
      },
      {
        q: "What is the difference between markup and margin in pricing?",
        a: "Markup is profit as a percentage of cost; margin is profit as a percentage of the selling price. A product that costs $60 and sells for $100 has a $40 profit, which is a 66.7% markup ($40 ÷ $60) but a 40% margin ($40 ÷ $100). Confusing the two is one of the most common pricing errors, because applying a target margin as a markup underprices the product.",
      },
      {
        q: "Should I price lower than competitors?",
        a: "Only if you can sustain it. Pricing below competitors can win customers, but it shrinks your margin and invites price wars that larger businesses can outlast. It works best when your costs are genuinely lower or when you are using a deliberate, time-limited penetration strategy. Many small businesses do better competing on quality, service, speed or specialization and pricing at or above the market.",
      },
      {
        q: "How often should I review my prices?",
        a: "Review prices at least once a year, and whenever your costs, competitors or demand change noticeably. Supplier price increases, new shipping rates and higher payment fees can quietly erode margin if prices stay the same. Track gross margin per product monthly so you notice erosion early. When you raise prices, give existing customers notice and explain any added value where you can.",
      },
      {
        q: "Should my price include sales tax or VAT?",
        a: "It depends on where you sell and who your customers are. In the US, prices are usually shown before sales tax, which is added at checkout or on the invoice. In the UK and EU, consumer prices generally must include VAT, while business-to-business prices are often quoted excluding VAT. Work out your margin on the price excluding tax, because the tax is not your income.",
      },
      {
        q: "Is it legal to charge different customers different prices?",
        a: "Often, but not always. Volume discounts, promotional pricing and negotiated business prices are common and generally lawful. In the US, the Robinson-Patman Act can restrict price differences between competing business buyers of the same goods in some circumstances, and agreeing prices with competitors is illegal price fixing. Consumer protection rules also restrict misleading reference prices. Ask a lawyer if you are unsure.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Here is how to price a product: first calculate its full unit cost, including materials, labor, packaging, fees and a share of overhead. Add a markup to set your minimum price, check what competitors charge, then position your price according to the value customers see. Test, measure margin and adjust.</p>

<p>Pricing is one of the few decisions that changes profit immediately. Set a price too low and every sale quietly loses money once overhead is counted; set it too high and customers walk away. This guide explains how to price a product in a practical sequence: work out what it really costs, compare seven common pricing strategies with worked examples, check the result against your break-even point, and avoid the mistakes that most often erode margin.</p>

<p>Once you have a price, you will need to bill it correctly. Our <a href="/invoice-generator">free invoice generator</a> builds professional PDF invoices in your browser with line items, discounts and tax. It does not set prices or track inventory for you, so the analysis below is yours to run in a spreadsheet.</p>

<h2>Step 1: calculate your true unit cost</h2>
<p>Every pricing strategy needs an accurate cost floor. Split costs into two groups, as explained in our guide to <a href="/blog/fixed-vs-variable-costs">fixed vs variable costs</a>:</p>
<ul>
<li><strong>Variable costs per unit:</strong> materials, direct labor, packaging, payment processing fees, shipping you absorb and marketplace commissions.</li>
<li><strong>Fixed costs per period:</strong> rent, salaries, software, insurance and other overhead that does not change with each sale.</li>
</ul>
<p>Illustrative example: a small business makes handmade candles.</p>
<table><thead><tr><th>Cost item</th><th>Per candle</th></tr></thead><tbody>
<tr><td>Wax, wick, fragrance and jar</td><td>$6.00</td></tr>
<tr><td>Direct labor (15 minutes at $16 an hour)</td><td>$4.00</td></tr>
<tr><td>Packaging and label</td><td>$1.00</td></tr>
<tr><td><strong>Variable cost per unit</strong></td><td><strong>$11.00</strong></td></tr>
<tr><td>Overhead share ($3,000 monthly fixed costs ÷ 1,000 expected candles)</td><td>$3.00</td></tr>
<tr><td><strong>Full unit cost</strong></td><td><strong>$14.00</strong></td></tr>
</tbody></table>
<p>Arithmetic: $6.00 + $4.00 + $1.00 = $11.00 variable; $3,000 ÷ 1,000 = $3.00 overhead; $11.00 + $3.00 = $14.00. The variable costs are effectively the product's <a href="/blog/cost-of-goods-sold">cost of goods sold</a> per unit. Note the overhead share depends on volume: if you sell only 500 candles a month, it doubles to $6.00.</p>

<h2>Step 2: understand your market and customers</h2>
<ul>
<li>List five to ten comparable products and note their prices, sizes, quality and delivery terms.</li>
<li>Identify what makes yours different: materials, design, speed, guarantee, local production or service.</li>
<li>Decide who your target customer is and what they compare you with. A gift buyer compares differently from a bulk buyer.</li>
<li>Ask existing customers what they would expect to pay and what alternatives they considered.</li>
</ul>

<h2>Step 3: choose a pricing strategy</h2>
<p>There is no single right answer to how to price a product, because the best strategy depends on your costs, your competition and your customers. Here are seven strategies small businesses use most, each applied to the $14 candle.</p>

<h3>1. Cost-plus pricing</h3>
<p>Add a fixed markup to full unit cost. <strong>Price = unit cost × (1 + markup)</strong>.</p>
<p>With a 50% markup: $14.00 × 1.50 = $21.00. Profit per candle is $7.00, and the margin is $7.00 ÷ $21.00 ≈ 33.3%. If you were aiming for a 50% margin rather than a 50% markup, the formula is cost ÷ (1 − margin): $14.00 ÷ 0.50 = $28.00. That difference is why understanding <a href="/blog/markup-vs-margin">markup vs margin</a> is essential before setting prices.</p>
<p><em>Pros:</em> simple, guarantees costs are covered at expected volume. <em>Cons:</em> ignores what customers will pay.</p>

<h3>2. Competitive pricing</h3>
<p>Set your price relative to competitors: at the market, slightly below or at a premium. If comparable candles sell for $20 to $26, pricing at $22 places you mid-market with a $8.00 profit ($22 − $14). Set your own prices independently; agreeing prices with competitors is illegal price fixing.</p>
<p><em>Pros:</em> easy to justify to customers. <em>Cons:</em> your costs may differ from theirs, so matching their price may not cover yours.</p>

<h3>3. Value-based pricing</h3>
<p>Price according to the benefit customers perceive. If your candles use a signature scent that customers buy as gifts and they compare you with premium brands at $30 to $35, a $32 price may be realistic. Profit: $32 − $14 = $18.00, a margin of about 56% ($18 ÷ $32).</p>
<p><em>Pros:</em> captures more of the value you create. <em>Cons:</em> needs customer research and a clear point of difference.</p>

<h3>4. Penetration pricing</h3>
<p>Launch below the market to win customers quickly, then raise prices. An introductory price of $18 gives $4.00 profit per unit ($18 − $14). Announce it as a launch price so the later increase does not feel like a surprise.</p>
<p><em>Pros:</em> builds volume and reviews fast. <em>Cons:</em> thin margin, and customers anchored to the low price may leave when it rises.</p>

<h3>5. Price skimming</h3>
<p>Start high for early adopters, then lower the price over time. A limited-edition scent might launch at $36 and drop to $28 after the first batch. It suits novel products with enthusiastic early buyers.</p>
<p><em>Pros:</em> recovers development costs quickly. <em>Cons:</em> attracts competitors and can annoy early buyers.</p>

<h3>6. Keystone pricing</h3>
<p>A retail rule of thumb: double the wholesale cost. If a shop buys your candle wholesale at $21, it might retail it at $42. Keystone is useful when you sell through retailers, because it tells you the shelf price your wholesale price implies.</p>
<p><em>Pros:</em> fast and familiar to retailers. <em>Cons:</em> ignores demand and competition.</p>

<h3>7. Bundle and tiered pricing</h3>
<p>Offer packages at different price points. For example: one candle at $24, a set of three at $63 ($21 each), or a premium gift box with matches and a card at $75. Calculate profit on each tier: the three-pack earns ($21 − $14) × 3 = $21.00, versus $10.00 on a single candle at $24.</p>
<p><em>Pros:</em> raises average order value and serves different budgets. <em>Cons:</em> more products to manage and price.</p>

<h3>Psychological pricing as a finishing touch</h3>
<p>Charm prices such as $23.99 instead of $24, and anchoring a premium option next to a standard one, are tactics you can layer on any strategy. Use them honestly; misleading "was" prices can breach consumer protection rules.</p>

<h2>Strategy comparison at a glance</h2>
<table><thead><tr><th>Strategy</th><th>Candle price</th><th>Profit per unit</th><th>Best when</th></tr></thead><tbody>
<tr><td>Cost-plus (50% markup)</td><td>$21.00</td><td>$7.00</td><td>Costs are clear and the market is stable</td></tr>
<tr><td>Competitive</td><td>$22.00</td><td>$8.00</td><td>Products are easy to compare</td></tr>
<tr><td>Value-based</td><td>$32.00</td><td>$18.00</td><td>You have a clear point of difference</td></tr>
<tr><td>Penetration</td><td>$18.00</td><td>$4.00</td><td>You need fast adoption and can afford thin margins</td></tr>
<tr><td>Skimming</td><td>$36.00 falling to $28.00</td><td>$22.00 falling to $14.00</td><td>The product is new and in demand</td></tr>
<tr><td>Keystone (retail)</td><td>$42.00 retail on $21.00 wholesale</td><td>$7.00 to you</td><td>You sell through shops</td></tr>
<tr><td>Bundle (3-pack)</td><td>$63.00</td><td>$21.00 per pack</td><td>Customers buy multiples or gifts</td></tr>
</tbody></table>
<p>All prices are illustrative.</p>

<h2>Step 4: check the price against break-even</h2>
<p>Each price implies a minimum sales volume. <strong>Break-even units = fixed costs ÷ (price − variable cost per unit)</strong>. With $3,000 monthly fixed costs and an $11.00 variable cost:</p>
<ul>
<li>At $21: contribution per unit is $21 − $11 = $10; break-even is $3,000 ÷ $10 = 300 candles a month.</li>
<li>At $18: contribution is $7; break-even is $3,000 ÷ $7 ≈ 428.6, so 429 candles.</li>
<li>At $32: contribution is $21; break-even is $3,000 ÷ $21 ≈ 142.9, so 143 candles.</li>
</ul>
<p>The penetration price needs about 43% more sales than cost-plus just to cover overhead (429 ÷ 300 ≈ 1.43). Our full guide to the <a href="/blog/break-even-point">break-even point</a> covers the calculation in more depth.</p>

<h2>Step 5: test, launch and review</h2>
<ul>
<li>Test with a limited batch, a single sales channel or a short period before committing.</li>
<li>Track conversion rate, units sold, gross margin and returns at each price.</li>
<li>Estimate whether a price rise pays off: the extra gross profit must outweigh lost volume. The <a href="/blog/roi-formula">ROI formula</a> helps compare options.</li>
<li>Review prices at least annually and whenever supplier, shipping or payment costs change.</li>
</ul>

<h2>Pricing for services versus products</h2>
<p>Services follow the same logic, but labor time replaces materials as the main cost. Start from a target annual income, add overhead and taxes, and divide by realistic billable hours. Our guide on <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> walks through that method.</p>

<h2>Checklist: how to price a product</h2>
<ul>
<li>Variable cost per unit calculated, including fees and shipping you absorb.</li>
<li>Fixed overhead allocated using a realistic sales volume.</li>
<li>Competitor price range recorded with notes on quality and terms.</li>
<li>Target customer and their alternatives defined.</li>
<li>Strategy chosen and price set above full unit cost.</li>
<li>Markup and margin both calculated and not confused.</li>
<li>Break-even volume checked against realistic demand.</li>
<li>Tax treatment decided: shown separately or included, as local rules require. A <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps check totals.</li>
<li>Discount rules written down so sales staff stay consistent.</li>
<li>Review date set in your calendar.</li>
</ul>

<h2>Common mistakes when pricing a product</h2>
<ul>
<li><strong>Pricing from materials only.</strong> Labor, fees, packaging and overhead are real costs.</li>
<li><strong>Confusing markup with margin.</strong> A 40% markup is only a 28.6% margin (0.4 ÷ 1.4).</li>
<li><strong>Copying competitors blindly.</strong> Their costs, volumes and goals are not yours.</li>
<li><strong>Underpricing to win customers</strong> with no plan to raise prices later.</li>
<li><strong>Ignoring payment and platform fees,</strong> which can take a noticeable bite from each sale.</li>
<li><strong>Discounting too freely.</strong> A 10% discount on a 33% margin product removes almost a third of the profit. If you do discount, show it clearly on the invoice; see <a href="/blog/discount-on-invoice">how to show a discount on an invoice</a>.</li>
<li><strong>Never revisiting prices</strong> as costs rise.</li>
<li><strong>Treating sales tax as income</strong> when calculating margin.</li>
</ul>

<h2>Legal note</h2>
<p>Pricing freedom is broad, but not unlimited. In the US, the FTC explains when charging competing business buyers different prices may raise issues in its guide to <a href="https://www.ftc.gov/advice-guidance/competition-guidance/guide-antitrust-laws/price-discrimination-robinson-patman-violations" target="_blank" rel="noopener noreferrer">price discrimination and the Robinson-Patman Act</a>. Consumer protection laws in most countries also restrict misleading reference prices and hidden fees. If you plan complex discount schemes, get legal advice.</p>

<h2>Final thoughts</h2>
<p>Knowing how to price a product is less about finding a perfect number and more about following a repeatable process: know your full cost, understand your market, choose a strategy deliberately, check break-even, then test and review. Costs set the floor, customers set the ceiling, and your strategy decides where you sit between them.</p>
`,
  },
  {
    slug: "inventory-management-spreadsheet",
    title: "Inventory Management Spreadsheet: Template and Setup Guide",
    description:
      "Build an inventory spreadsheet in Excel or Google Sheets with our column template, reorder point and safety stock formulas, FIFO costing and a setup checklist.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["cost-of-goods-sold", "invoice-tracker-spreadsheet", "how-to-price-a-product"],
    faqs: [
      {
        q: "How do I create an inventory spreadsheet in Excel or Google Sheets?",
        a: "Create a master sheet with one row per product and columns for SKU, item name, category, supplier, unit cost, quantity on hand, reorder point and stock value. Add a second sheet that logs every stock movement in and out with a date and quantity. Use SUMIFS to calculate quantity on hand from the log, and an IF formula to flag items at or below their reorder point.",
      },
      {
        q: "What columns should an inventory spreadsheet have?",
        a: "At minimum: SKU, item name, category, supplier, unit cost, quantity on hand, reorder point, reorder quantity and total stock value. Useful extras include location or bin, average daily usage, supplier lead time, safety stock, last count date and a status column that shows REORDER or OK. Keep each column to one type of data so formulas, filters and sorting work reliably.",
      },
      {
        q: "What is the reorder point formula?",
        a: "Reorder point = (average daily usage × lead time in days) + safety stock. If you sell 20 units a day, your supplier takes 7 days to deliver and you hold 160 units of safety stock, the reorder point is (20 × 7) + 160 = 300 units. When stock on hand falls to 300, place an order. In a spreadsheet: =G2*H2+I2, with usage, lead time and safety stock in those cells.",
      },
      {
        q: "How do I calculate safety stock?",
        a: "A simple method is: safety stock = (maximum daily usage × maximum lead time) − (average daily usage × average lead time). With a peak of 30 units a day, a worst-case lead time of 10 days, an average of 20 a day and an average lead time of 7 days, safety stock is 300 − 140 = 160 units. Statistical methods using demand variability are more precise but need more data.",
      },
      {
        q: "What is FIFO in inventory?",
        a: "FIFO, first in first out, assumes the oldest stock is sold first, so cost of goods sold uses the earliest purchase costs and ending inventory uses the most recent ones. It usually matches how perishable or dated goods physically move. Other common cost methods are weighted average and, in the US, LIFO. Whichever you choose, apply it consistently, because it affects reported profit and tax.",
      },
      {
        q: "Is a spreadsheet good enough for inventory management?",
        a: "For a small business with a modest number of products, one location and one or two people updating stock, a well-built spreadsheet is often enough. It becomes risky when you sell across several channels, have many SKUs, need real-time stock levels or have several people editing at once. At that point, inventory or point-of-sale software that syncs automatically usually saves time and errors.",
      },
      {
        q: "How often should I count inventory?",
        a: "Most businesses do a full physical count at least once a year, at year end, because it is needed to calculate cost of goods sold accurately. Many also use cycle counting: counting a few products each week so every item is checked several times a year, with fast-moving or high-value items counted most often. Record count dates and adjustments in the spreadsheet.",
      },
      {
        q: "How do I calculate inventory value in a spreadsheet?",
        a: "Multiply quantity on hand by unit cost for each row, for example =E2*F2, then total the column with =SUM(L2:L200). Use cost, not selling price. If your unit costs change between purchases, decide whether to use FIFO layers or a weighted average cost, and update the unit cost column accordingly. The total gives you ending inventory for the cost of goods sold calculation.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> An inventory spreadsheet tracks each product's SKU, cost, quantity on hand and reorder point in one row, with a separate log of stock movements. Formulas calculate stock levels, flag items to reorder using reorder point = (daily usage × lead time) + safety stock, and total inventory value at cost.</p>

<p>Before paying for inventory software, many small businesses start with a spreadsheet, and for good reason: it is free, flexible and easy to understand. Built carefully, it can tell you what you have, what it is worth and when to reorder. Built carelessly, it becomes a list of numbers nobody trusts. This guide gives you a column-by-column inventory management spreadsheet template for Excel or Google Sheets, the formulas for reorder points and safety stock, a FIFO costing example, a setup checklist and the mistakes to avoid.</p>

<p>A note on scope: our <a href="/invoice-generator">free invoice generator</a> creates PDF invoices in your browser. It does not track stock or connect to a spreadsheet, so you will update inventory separately when you buy and sell.</p>

<h2>How an inventory spreadsheet is structured</h2>
<p>A reliable setup uses three tabs rather than one long list:</p>
<ol>
<li><strong>Items (master list):</strong> one row per product with its fixed details, current stock level and reorder settings.</li>
<li><strong>Movements (stock log):</strong> one row per transaction: purchases received, sales shipped, returns and count adjustments. You never overwrite quantities; you add rows.</li>
<li><strong>Purchases (optional):</strong> purchase orders placed and their expected delivery dates, so you do not reorder something already on its way. A <a href="/blog/purchase-order-template">purchase order template</a> keeps those orders consistent.</li>
</ol>
<p>Keeping a movement log is the key design choice. If you just type a new quantity into a cell each time, you lose the history and cannot find out where stock went missing.</p>

<h2>Inventory management spreadsheet template: the columns</h2>
<p>Set up the Items tab with these columns. The formulas assume data starts in row 2 and that the Movements tab has the date in column A, SKU in column B, type (IN or OUT) in column C and quantity in column D.</p>
<table><thead><tr><th>Column</th><th>Heading</th><th>What to enter or the formula</th></tr></thead><tbody>
<tr><td>A</td><td>SKU</td><td>A unique code for each product, such as CND-LAV-200</td></tr>
<tr><td>B</td><td>Item name</td><td>Plain description</td></tr>
<tr><td>C</td><td>Category</td><td>Product group, for filtering</td></tr>
<tr><td>D</td><td>Supplier</td><td>Main supplier name</td></tr>
<tr><td>E</td><td>Unit cost</td><td>Cost per unit at your chosen costing method</td></tr>
<tr><td>F</td><td>Quantity on hand</td><td>=SUMIFS(Movements!D:D,Movements!B:B,A2,Movements!C:C,"IN")-SUMIFS(Movements!D:D,Movements!B:B,A2,Movements!C:C,"OUT")</td></tr>
<tr><td>G</td><td>Average daily usage</td><td>Units sold over the last 90 days divided by 90</td></tr>
<tr><td>H</td><td>Lead time (days)</td><td>Days from placing an order to receiving it</td></tr>
<tr><td>I</td><td>Safety stock</td><td>Buffer quantity (see formulas below)</td></tr>
<tr><td>J</td><td>Reorder point</td><td>=G2*H2+I2</td></tr>
<tr><td>K</td><td>Reorder quantity</td><td>How many you normally order at once</td></tr>
<tr><td>L</td><td>Status</td><td>=IF(F2&lt;=J2,"REORDER","OK")</td></tr>
<tr><td>M</td><td>Stock value</td><td>=E2*F2</td></tr>
<tr><td>N</td><td>Last counted</td><td>Date of the last physical count</td></tr>
</tbody></table>
<p>Then add totals beneath the table, for example =SUM(M2:M200) for total stock value and =COUNTIF(L2:L200,"REORDER") for the number of items needing an order. Apply conditional formatting to column L so REORDER cells turn red.</p>
<p>For average daily usage in column G, if your Movements tab records dates in column A, you can calculate the last 90 days with =SUMIFS(Movements!D:D,Movements!B:B,A2,Movements!C:C,"OUT",Movements!A:A,"&gt;="&amp;TODAY()-90)/90. The same formulas work in both Excel and Google Sheets. If you are new to building sheets, our walkthroughs of <a href="/blog/how-to-make-an-invoice-in-excel">making an invoice in Excel</a> cover the basics of formulas and formatting.</p>

<h2>Reorder point and safety stock formulas</h2>
<h3>Reorder point</h3>
<p><strong>Reorder point = (average daily usage × lead time in days) + safety stock</strong></p>
<p>It answers the question: how low can stock fall before I must order to avoid running out while I wait for delivery?</p>
<h3>Safety stock, simple method</h3>
<p><strong>Safety stock = (maximum daily usage × maximum lead time) − (average daily usage × average lead time)</strong></p>
<p>This covers a bad week where demand spikes and the supplier is slow at the same time. It needs only your sales history and delivery records.</p>
<h3>Safety stock, statistical method</h3>
<p><strong>Safety stock = Z × standard deviation of daily demand × square root of lead time</strong></p>
<p>Z reflects the service level you want; a commonly used value is about 1.65 for roughly a 95% chance of not running out during the lead time. In a sheet: =1.65*STDEV.S(range_of_daily_sales)*SQRT(H2). This method is more precise but assumes demand is reasonably steady and your data is reliable.</p>

<h2>Worked example: setting a reorder point</h2>
<p>An illustrative example for a shop selling a lavender candle. Over the last 90 days it sold 1,800 units. The supplier usually delivers in 7 days but has taken up to 10. The busiest day saw 30 units sold.</p>
<ul>
<li>Average daily usage: 1,800 ÷ 90 = 20 units</li>
<li>Lead-time demand: 20 × 7 = 140 units</li>
<li>Safety stock (simple method): (30 × 10) − (20 × 7) = 300 − 140 = 160 units</li>
<li>Reorder point: 140 + 160 = 300 units</li>
</ul>
<p>When the Quantity on hand cell drops to 300 or below, the Status column switches to REORDER. If the shop instead used the statistical method with a daily standard deviation of 6 units: 1.65 × 6 × √7 ≈ 1.65 × 6 × 2.646 ≈ 26.2, rounded up to 27 units of safety stock, giving a reorder point of 140 + 27 = 167. The gap between 300 and 167 shows how much the method choice matters; the simple method is cautious, which ties up more cash in stock.</p>
<p>That cash trade-off is real. Stock sitting on shelves is money that cannot pay bills, which is why inventory levels feed directly into <a href="/blog/working-capital">working capital</a>.</p>

<h2>FIFO costing in a spreadsheet</h2>
<p>Unit cost often changes between purchases. Your costing method decides which cost flows to cost of goods sold and which stays in inventory. In the US, the IRS describes the accepted methods, including FIFO, LIFO and average cost, in <a href="https://www.irs.gov/publications/p538" target="_blank" rel="noopener noreferrer">Publication 538, Accounting Periods and Methods</a>, which also covers simplified options some small businesses may qualify for.</p>
<p>Illustrative example: you buy 100 units at $5.00 and later 100 units at $6.00, then sell 150 units.</p>
<table><thead><tr><th>Method</th><th>Cost of goods sold</th><th>Ending inventory (50 units)</th></tr></thead><tbody>
<tr><td>FIFO</td><td>(100 × $5.00) + (50 × $6.00) = $800</td><td>50 × $6.00 = $300</td></tr>
<tr><td>Weighted average</td><td>150 × $5.50 = $825</td><td>50 × $5.50 = $275</td></tr>
</tbody></table>
<p>The weighted average cost is ($500 + $600) ÷ 200 = $5.50. Both methods account for the full $1,100 spent: $800 + $300 = $1,100 and $825 + $275 = $1,100. In a spreadsheet, FIFO is easiest to manage by recording each purchase as a separate layer (date, quantity, unit cost) and consuming the oldest layer first. Weighted average is simpler: recalculate the unit cost in column E after each purchase.</p>
<p>The ending inventory figure from your inventory spreadsheet feeds the formula beginning inventory + purchases − ending inventory, explained in our guide to <a href="/blog/cost-of-goods-sold">cost of goods sold</a>. If the count is wrong, gross profit is wrong too.</p>

<h2>Example Movements tab</h2>
<p>Here is what a few rows of the stock log look like for the lavender candle. Each row is one event; nothing is ever edited after the fact.</p>
<table><thead><tr><th>Date</th><th>SKU</th><th>Type</th><th>Quantity</th><th>Reference</th></tr></thead><tbody>
<tr><td>Oct 1</td><td>CND-LAV-200</td><td>IN</td><td>400</td><td>Opening count</td></tr>
<tr><td>Oct 3</td><td>CND-LAV-200</td><td>OUT</td><td>24</td><td>Invoice 1042</td></tr>
<tr><td>Oct 4</td><td>CND-LAV-200</td><td>OUT</td><td>60</td><td>Invoice 1043 (wholesale)</td></tr>
<tr><td>Oct 6</td><td>CND-LAV-200</td><td>IN</td><td>2</td><td>Customer return</td></tr>
<tr><td>Oct 9</td><td>CND-LAV-200</td><td>OUT</td><td>3</td><td>Count adjustment: damaged</td></tr>
</tbody></table>
<p>The quantity formula on the Items tab reads this log: (400 + 2) − (24 + 60 + 3) = 402 − 87 = 315 units on hand. At a reorder point of 300 the status still shows OK, but only 15 units of headroom remain, so an order will be due within a day at 20 units a day. Returns are logged as IN and write-offs as OUT; if you want separate reporting, add RETURN and ADJUST types and extend the SUMIFS accordingly. Teams already working in Google Sheets can keep this log in the same file as their <a href="/blog/google-sheets-invoice-template">Google Sheets invoice template</a>.</p>

<h2>Keeping the sheet accurate day to day</h2>
<ul>
<li><strong>Log goods in when they arrive,</strong> not when ordered, and check quantities against the supplier's delivery note and invoice.</li>
<li><strong>Log goods out when they ship.</strong> Use the invoice or order number as a reference so every OUT row can be traced. A consistent sequence from an <a href="/tools/invoice-number-generator">invoice number generator</a> makes matching easier.</li>
<li><strong>Record returns and damaged stock</strong> as their own movement types rather than editing old rows.</li>
<li><strong>Cycle count</strong> a handful of items each week and post differences as adjustments with a note.</li>
<li><strong>Lock formula columns</strong> and use data validation for the SKU and movement type so typos cannot break SUMIFS.</li>
</ul>
<p>Sales invoices are the source document for most OUT rows. Our <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a> uses the same structure and can sit in the same workbook if you track billing and stock together.</p>

<h2>Inventory spreadsheet setup checklist</h2>
<ul>
<li>Create Items, Movements and (optionally) Purchases tabs.</li>
<li>Assign a unique SKU to every product and variant.</li>
<li>Do an opening physical count and enter it as a single IN movement per SKU dated the start day.</li>
<li>Enter unit costs using one costing method, and note which.</li>
<li>Add the quantity, reorder point, status and value formulas, then copy them down.</li>
<li>Calculate average daily usage and lead time from real records, not guesses.</li>
<li>Set safety stock per item, higher for best sellers and unreliable suppliers.</li>
<li>Add conditional formatting for REORDER and data validation for movement types.</li>
<li>Protect formula columns and keep a dated backup copy each month.</li>
<li>Schedule weekly cycle counts and a full year-end count.</li>
</ul>

<h2>Common inventory spreadsheet mistakes</h2>
<ul>
<li><strong>Overwriting quantities</strong> instead of logging movements, so discrepancies cannot be traced.</li>
<li><strong>Valuing stock at selling price</strong> rather than cost, which inflates assets and profit.</li>
<li><strong>Duplicate or inconsistent SKUs,</strong> such as "CND-LAV" and "CND LAV", which split stock across two rows.</li>
<li><strong>Stale lead times and usage figures</strong> that make reorder points meaningless after a busy season.</li>
<li><strong>Skipping physical counts,</strong> so theft, damage and errors build up unseen.</li>
<li><strong>Several people editing without rules,</strong> overwriting each other's changes.</li>
<li><strong>Ignoring stock already on order,</strong> leading to double orders.</li>
<li><strong>Holding too much safety stock,</strong> which ties up cash that could support <a href="/blog/cash-flow-management">cash flow management</a>.</li>
</ul>

<h2>When to move beyond a spreadsheet</h2>
<p>A spreadsheet works well for a modest product range in one location. Consider dedicated inventory or point-of-sale software when you sell across several channels that need synced stock levels, manage many SKUs or variants, need barcode scanning, or have several people updating stock at once. Until then, a disciplined inventory spreadsheet with a movement log, clear formulas and regular counts gives you most of the benefit at no cost. Accurate stock costs also make it easier to work out <a href="/blog/how-to-price-a-product">how to price a product</a> with confidence.</p>
`,
  },
];
