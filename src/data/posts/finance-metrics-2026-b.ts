import type { PostDraft } from "../blog";

export const FINANCE_METRICS_2026_B_POSTS: PostDraft[] = [
  {
    slug: "ebitda",
    title: "EBITDA: Formula, Margin and a Worked Example",
    description:
      "EBITDA explained in plain English: the formula, how to calculate it from your P&L, EBITDA margin, adjusted EBITDA add-backs and the mistakes to avoid.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-value-a-small-business",
      "profit-and-loss-statement",
      "gross-profit-vs-net-profit",
      "how-to-calculate-depreciation",
    ],
    faqs: [
      {
        q: "What does EBITDA stand for?",
        a: "It stands for earnings before interest, taxes, depreciation and amortization. It starts from your profit and adds back four items: interest on debt, income taxes, depreciation of physical assets such as vans and machines, and amortization of intangible assets such as purchased software or customer lists. The result shows how much the core business earns from its operations before financing choices, tax position and accounting write-downs of past investments are taken into account.",
      },
      {
        q: "How do you calculate EBITDA from net income?",
        a: "Take net income from your profit and loss statement, then add back income tax expense, interest expense, depreciation and amortization. For example, net income of $115,000 plus tax of $30,000, interest of $25,000, depreciation of $40,000 and amortization of $10,000 gives $220,000. If you prefer to start higher up the P&L, take operating profit (EBIT) and add back depreciation and amortization. Both routes should give the same answer if your books are categorized correctly.",
      },
      {
        q: "What is a good EBITDA margin?",
        a: "There is no single good number because margins depend heavily on the industry. Software and professional services firms with few physical assets often post higher margins than restaurants, retailers or construction businesses that carry heavy costs of goods and labor. The more useful comparisons are your own margin over time and the margin of similar businesses of similar size. A rising margin usually means revenue is growing faster than operating costs, which is what you want to see.",
      },
      {
        q: "What is the difference between EBITDA and EBIT?",
        a: "EBIT is earnings before interest and taxes, which is broadly the same as operating profit. It still includes depreciation and amortization as costs. EBITDA adds those two non-cash charges back. For a business with few fixed assets the two figures are close. For an asset-heavy business, such as a trucking company or a manufacturer, the gap can be large, and EBIT is often the more honest view because equipment really does wear out and must be replaced.",
      },
      {
        q: "Is EBITDA the same as cash flow?",
        a: "No. It is a rough proxy for operating cash flow, but it ignores several real cash movements. It does not deduct money spent on new equipment, interest you actually pay, taxes you actually pay, or cash tied up in unpaid customer invoices and inventory. A business can report healthy earnings on this measure while running out of cash because customers pay late. Use your cash flow statement alongside it to see what really came in and went out.",
      },
      {
        q: "What is adjusted EBITDA?",
        a: "Adjusted EBITDA starts from the standard figure and removes items management considers one-off or unrelated to normal operations, such as a legal settlement, relocation costs, restructuring charges or, in small business sales, owner salary above a market rate. The goal is to show repeatable earnings. Because the adjustments are chosen by the person presenting the number, buyers, lenders and investors usually ask for a list of every add-back with evidence and challenge any that look recurring.",
      },
      {
        q: "Why do buyers and lenders use EBITDA?",
        a: "It lets them compare businesses with different debt levels, tax situations and asset ages on a similar basis. Business sale prices are often discussed as a multiple of earnings, and loan agreements frequently set covenants based on debt relative to this figure. It is popular because it is quick to calculate from standard financial statements. Experienced buyers still look at capital spending needs, working capital and cash conversion before agreeing a price or a loan.",
      },
      {
        q: "Can EBITDA be negative?",
        a: "Yes. If operating costs, excluding depreciation and amortization, are higher than revenue, the figure is negative. That is common for early-stage startups that spend heavily on hiring and marketing ahead of revenue, and for businesses going through a bad year. A negative result means the core operations are losing money before any financing or accounting charges, so the business is relying on cash reserves, investors or loans to keep going. Track burn rate and runway closely in that situation.",
      },
      {
        q: "Is EBITDA a GAAP measure?",
        a: "No. It is not defined under US GAAP or IFRS, so companies can calculate it slightly differently. US public companies that report it are treated as using a non-GAAP measure and must follow SEC rules, including reconciling it to the most comparable GAAP figure such as net income. Small private businesses have no such rule, but it is good practice to show how you got from net income to your number so anyone reading it can check the calculation.",
      },
    ],
    content: `<p><strong>EBITDA</strong> stands for earnings before interest, taxes, depreciation and amortization. It measures how much profit a business makes from its core operations before financing costs, tax and non-cash write-downs of assets. The formula is: net income + interest + taxes + depreciation + amortization. Divide it by revenue to get the margin.</p>

<p>Owners usually meet the term in three places: when a lender sets loan covenants, when a buyer values a business, or when an investor asks how profitable the operations really are. This guide shows the formula, walks through a full calculation with numbers, explains margin and adjusted versions, and covers the limits you should keep in mind before relying on the figure.</p>

<h2>What EBITDA measures (and what it leaves out)</h2>

<p>Your <a href="/blog/profit-and-loss-statement">profit and loss statement</a> shows several layers of profit. Gross profit is revenue minus cost of goods sold. Operating profit deducts overheads such as rent, salaries and software. Net profit deducts everything, including interest and tax. If those layers are new to you, read <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a> first.</p>

<p>This measure sits between operating profit and net profit in spirit, but it strips out four specific items:</p>

<ul>
<li><strong>Interest:</strong> depends on how the business is financed, not how well it operates. Two identical shops will show different net profit if one borrowed to open and the other did not.</li>
<li><strong>Taxes:</strong> depend on the legal structure, location and available reliefs rather than day-to-day performance.</li>
<li><strong>Depreciation:</strong> the accounting charge that spreads the cost of physical assets, such as vehicles or machines, over their useful life. See <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a> for the methods.</li>
<li><strong>Amortization:</strong> the same idea applied to intangible assets such as purchased software licences, patents or acquired customer lists.</li>
</ul>

<p>Removing these makes it easier to compare the operating performance of businesses with different debt, tax and asset histories. That is the main reason the metric is so widely used. The trade-off is that it ignores real costs: debt has to be serviced, tax has to be paid and equipment has to be replaced.</p>

<h2>The EBITDA formula</h2>

<p>There are two common routes to the same number. Use whichever matches how your accounts are laid out.</p>

<table>
<thead>
<tr><th>Method</th><th>Formula</th><th>When to use it</th></tr>
</thead>
<tbody>
<tr><td>Bottom-up (from net income)</td><td>Net income + interest expense + income tax expense + depreciation + amortization</td><td>When you have a finished P&amp;L that shows net profit</td></tr>
<tr><td>Top-down (from operating profit)</td><td>Operating profit (EBIT) + depreciation + amortization</td><td>When your P&amp;L shows an operating profit line</td></tr>
<tr><td>Direct</td><td>Revenue - cost of goods sold - operating expenses (excluding depreciation and amortization)</td><td>When you are building a forecast or budget</td></tr>
</tbody>
</table>

<p>Margin is the result as a percentage of revenue:</p>

<p><strong>EBITDA margin = (EBITDA / revenue) x 100</strong></p>

<p>The margin is often more useful than the raw figure because it lets you compare periods when sales change and compare your business with others of a different size.</p>

<h2>How to calculate EBITDA: a worked example</h2>

<p>Take a small commercial printing business with the following annual figures. All numbers are illustrative.</p>

<table>
<thead>
<tr><th>Line</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Revenue</td><td>$1,200,000</td></tr>
<tr><td>Cost of goods sold (paper, ink, direct labor)</td><td>$600,000</td></tr>
<tr><td>Operating expenses excluding depreciation and amortization (rent, admin salaries, software, marketing)</td><td>$380,000</td></tr>
<tr><td>Depreciation (printing presses, van)</td><td>$40,000</td></tr>
<tr><td>Amortization (purchased design software licence)</td><td>$10,000</td></tr>
<tr><td>Operating profit (EBIT)</td><td>$170,000</td></tr>
<tr><td>Interest on equipment loan</td><td>$25,000</td></tr>
<tr><td>Profit before tax</td><td>$145,000</td></tr>
<tr><td>Income tax</td><td>$30,000</td></tr>
<tr><td>Net income</td><td>$115,000</td></tr>
</tbody>
</table>

<p>Now apply each method:</p>

<ol>
<li><strong>Bottom-up:</strong> $115,000 net income + $25,000 interest + $30,000 tax + $40,000 depreciation + $10,000 amortization = <strong>$220,000</strong>.</li>
<li><strong>Top-down:</strong> $170,000 operating profit + $40,000 depreciation + $10,000 amortization = <strong>$220,000</strong>.</li>
<li><strong>Direct:</strong> $1,200,000 revenue - $600,000 cost of goods sold - $380,000 operating expenses = <strong>$220,000</strong>.</li>
</ol>

<p>All three agree, which is a good check that your categories are correct. If they do not agree, the usual culprit is depreciation booked inside cost of goods sold or interest mixed in with bank charges in overheads.</p>

<p>The margin is $220,000 / $1,200,000 = <strong>18.3%</strong>. For every dollar of sales, the business generates roughly 18 cents of operating earnings before financing, tax and asset write-downs.</p>

<h3>Where to find the numbers in your books</h3>

<p>You do not need special software. Most of the inputs sit in standard reports from your accounting system:</p>

<ul>
<li><strong>Revenue, cost of goods sold and overheads:</strong> the profit and loss report for the period.</li>
<li><strong>Depreciation and amortization:</strong> usually separate expense lines on the P&amp;L, or in the fixed asset register. If your accountant posts them only at year end, monthly results will look better than the annual result, so add an estimate each month.</li>
<li><strong>Interest:</strong> a finance cost line, or the interest portion of loan statements. Do not include the principal part of loan repayments, which is not an expense.</li>
<li><strong>Tax:</strong> the income tax or corporation tax charge. Sole traders and pass-through entities in some countries pay tax personally, so there may be no business tax line at all.</li>
</ul>

<p>Calculate the figure monthly or quarterly and keep a small table of results. A trend over eight to twelve quarters says far more than a single number.</p>

<h2>Adjusted EBITDA and add-backs</h2>

<p>When a business is being sold or refinanced, the seller usually presents an adjusted figure. The idea is to strip out costs that will not recur, so the buyer sees the normal earning power of the business.</p>

<p>Common add-backs in small business deals include:</p>

<ul>
<li>One-off legal or professional fees, such as a lawsuit settlement</li>
<li>Relocation or office fit-out costs that were expensed</li>
<li>Owner salary above, or below, what a hired manager would cost</li>
<li>Personal expenses run through the business, such as a family phone plan</li>
<li>Non-cash charges such as stock-based compensation in larger companies</li>
</ul>

<p>Continuing the example, suppose the printing business paid $15,000 in one-time moving costs this year. Adjusted earnings would be $220,000 + $15,000 = $235,000, and the adjusted margin would be 19.6%.</p>

<p>Be careful. Every add-back raises the number, so buyers and lenders scrutinize them. If the business "moves" every two years, or the "one-off" consultant appears every quarter, the adjustment will be rejected. Keep invoices and receipts for each add-back so you can prove it. Clear records, including well-numbered sales invoices from an <a href="/invoice-generator">online invoice generator</a> and a consistent invoice numbering scheme, make due diligence faster.</p>

<h2>Why EBITDA matters to small businesses</h2>

<p>You do not need to be a large company to use this metric. It shows up in several practical situations:</p>

<ul>
<li><strong>Selling the business:</strong> small and mid-sized companies are often valued as a multiple of adjusted earnings. The multiple varies by industry, size, growth and risk.</li>
<li><strong>Bank loans:</strong> lenders often set covenants such as a maximum ratio of total debt to earnings. Breaching a covenant can trigger penalties or early repayment.</li>
<li><strong>Comparing locations or divisions:</strong> if one branch owns its building and another leases equipment, this measure puts them on a closer footing.</li>
<li><strong>Tracking operating efficiency:</strong> a rising margin over several years shows the core business is getting more efficient.</li>
</ul>

<p>It is also a useful sanity check next to your <a href="/blog/roi-formula">ROI calculations</a>. If an investment in a new machine lifts operating earnings by $30,000 a year, that gain feeds straight into the payback analysis.</p>

<h2>EBITDA vs other profit measures</h2>

<table>
<thead>
<tr><th>Measure</th><th>What it deducts</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>Gross profit</td><td>Cost of goods sold only</td><td>Pricing and product margin decisions</td></tr>
<tr><td>Earnings before interest, taxes, depreciation and amortization</td><td>COGS and cash-type operating expenses</td><td>Comparing operating performance, valuations, loan covenants</td></tr>
<tr><td>EBIT (operating profit)</td><td>Everything above, plus depreciation and amortization</td><td>Asset-heavy businesses where equipment replacement is a real cost</td></tr>
<tr><td>Net income</td><td>Everything, including interest and tax</td><td>What owners actually earned in the period</td></tr>
<tr><td>Operating cash flow</td><td>Actual cash in and out from operations</td><td>Liquidity and survival planning</td></tr>
</tbody>
</table>

<p>None of these is "the" right number. Use gross profit for pricing, earnings-based measures for comparisons, net income for what you really made and your <a href="/blog/cash-flow-statement">cash flow statement</a> for whether you can pay the bills.</p>

<h2>Valuation example: applying an earnings multiple</h2>

<p>Business sale prices are often discussed as a multiple of adjusted earnings. The multiple is not fixed. It depends on industry, size, growth, customer concentration, how dependent the business is on the owner and wider market conditions. The figures below are purely illustrative to show the arithmetic, not a guide to what any business is worth.</p>

<p><strong>Enterprise value = adjusted earnings x multiple</strong></p>

<p>Using the printing business's adjusted figure of $235,000:</p>

<table>
<thead>
<tr><th>Illustrative multiple</th><th>Enterprise value</th></tr>
</thead>
<tbody>
<tr><td>3x</td><td>$705,000</td></tr>
<tr><td>4x</td><td>$940,000</td></tr>
<tr><td>5x</td><td>$1,175,000</td></tr>
</tbody>
</table>

<p>Enterprise value is the value of the operating business before debt. To estimate what the owner receives, buyers typically subtract debt and add surplus cash. If the printing business owes $200,000 on its equipment loan and holds $50,000 of surplus cash, a 4x valuation of $940,000 would leave roughly $940,000 - $200,000 + $50,000 = $790,000 of equity value, before fees, taxes and any working capital adjustments agreed in the deal.</p>

<p>The example also shows why add-backs are contested. At a 4x multiple, the $15,000 moving-cost adjustment adds $60,000 to the headline value. Every dollar of earnings is magnified by the multiple, so buyers check each one carefully. Tax on a business sale can be significant, so take professional advice before agreeing terms.</p>

<h2>Limitations and common mistakes</h2>

<p>The metric has well-known blind spots. Keep these in mind:</p>

<ol>
<li><strong>It ignores capital spending.</strong> A trucking company may show strong earnings while needing to replace its fleet every few years. Depreciation is a non-cash charge, but buying the next truck is very much cash. Read <a href="/blog/capex-vs-opex">CapEx vs OpEx</a> to see how these costs flow through your accounts.</li>
<li><strong>It ignores working capital.</strong> If customers take 75 days to pay, you can be profitable on paper and still short of cash. Track <a href="/blog/working-capital">working capital</a> and <a href="/blog/days-sales-outstanding">days sales outstanding</a> alongside it.</li>
<li><strong>It ignores debt.</strong> A business with a large loan may struggle to make repayments even with healthy operating earnings.</li>
<li><strong>It is not standardized.</strong> It is not a GAAP or IFRS measure. US public companies that report it must follow SEC rules on non-GAAP measures, including reconciling to net income, but private businesses can calculate it however they like. Always ask how a figure was built.</li>
<li><strong>Add-backs creep.</strong> Aggressive adjustments can turn a mediocre business into an apparently excellent one. Treat any adjusted figure with healthy scepticism.</li>
</ol>

<p>Another mistake is applying the number to sole traders and freelancers without thinking. If you pay yourself through drawings rather than salary, your "earnings" include your own labor. A buyer will deduct a market wage for whoever replaces you.</p>

<h2>How to improve your margin</h2>

<p>Because the measure is revenue minus operating costs, the levers are the familiar ones:</p>

<ul>
<li><strong>Raise prices</strong> where you deliver clear value. Even a small price increase falls almost entirely to the bottom line. See markup vs margin before you set new prices.</li>
<li><strong>Cut direct costs</strong> by renegotiating supplier terms or reducing waste.</li>
<li><strong>Control overheads</strong> by reviewing subscriptions and operating expenses line by line every quarter.</li>
<li><strong>Know your break-even.</strong> Your <a href="/blog/break-even-point">break-even point</a> shows how much extra sales volume each fixed cost requires.</li>
<li><strong>Bill promptly and accurately.</strong> Revenue you forget to invoice never reaches the P&amp;L. A clean, itemized invoice from our <a href="/invoice-templates">invoice templates</a> also reduces disputes that delay payment.</li>
</ul>

<p>Tax and valuation questions vary by country and situation. For decisions on selling a business, refinancing or tax treatment, check with a qualified accountant or adviser.</p>

<h2>Conclusion</h2>

<p>EBITDA is a quick, widely understood way to show how much your operations earn before financing, tax and asset write-downs. Calculate it from net income or operating profit, express it as a margin, and keep a documented list of any adjustments. Then read it alongside cash flow and capital spending, because it does not show either. Strong numbers start with complete billing records, so make sure every sale is captured with our free <a href="/invoice-generator">invoice generator</a>.</p>`,
  },
  {
    slug: "burn-rate-and-runway",
    title: "Burn Rate and Cash Runway: How to Calculate Both",
    description:
      "Burn rate explained: gross vs net burn, the cash runway formula, a worked example with real numbers, and practical ways to cut burn and extend runway.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["cash-flow-forecast", "cash-flow-management", "working-capital"],
    faqs: [
      {
        q: "What is burn rate?",
        a: "Burn rate is the speed at which a business spends its cash, usually measured per month. Gross burn is total cash going out each month. Net burn is cash going out minus cash coming in from customers. Startups and businesses that are not yet profitable track it closely because, together with the cash balance, it tells them how many months they can keep operating before they need more revenue, a loan or investment.",
      },
      {
        q: "How do you calculate cash runway?",
        a: "Divide your current cash balance by your monthly net burn. If you have $300,000 in the bank and you lose $25,000 a month after customer receipts, your runway is 12 months. Use an average of the last three months of net burn rather than a single month, because one-off payments can distort the figure. If net burn is zero or negative, the business is cash-flow positive and runway is not limited by burn.",
      },
      {
        q: "What is the difference between gross burn and net burn?",
        a: "Gross burn is everything you pay out in a month: salaries, rent, software, contractors, inventory and so on. Net burn subtracts the cash you collect from customers in the same month. A company paying out $90,000 and collecting $40,000 has a gross burn of $90,000 and a net burn of $50,000. Gross burn shows your cost base. Net burn shows how fast your cash balance is actually falling.",
      },
      {
        q: "How many months of runway should a startup have?",
        a: "There is no fixed rule, but many founders and investors aim for roughly 12 to 24 months after a funding round, and start raising money well before runway falls under six to nine months, because fundraising often takes several months. A small, self-funded business may be comfortable with less if revenue is stable. The right cushion depends on how predictable your revenue is and how quickly you could cut costs if needed.",
      },
      {
        q: "Should burn rate use cash or accrual figures?",
        a: "Use cash. Burn rate is about how quickly money leaves the bank, so take figures from bank statements or a cash flow statement rather than the profit and loss statement. Accrual accounting can record revenue you have invoiced but not yet collected, which makes burn look smaller than it really is. Include actual loan repayments and equipment purchases, which do not appear as expenses on the P and L but still drain cash.",
      },
      {
        q: "What is a good burn rate?",
        a: "A good burn rate is one your cash can support while you reach the next milestone, such as profitability or a funding round. The absolute number matters less than what you get for it. Some investors look at burn multiple, which is net burn divided by net new annual recurring revenue, as a measure of efficiency. Lower is better. For a non-venture small business, the goal is usually to get net burn to zero as fast as practical.",
      },
      {
        q: "How can I reduce my burn rate quickly?",
        a: "Start with collections and recurring costs. Chase overdue invoices and shorten payment terms, which brings cash in without cutting anything. Cancel unused software, renegotiate rent or supplier terms, and pause discretionary spending such as events or experimental ad campaigns. Delaying hires usually has the largest effect because salaries are the biggest line for most businesses. Avoid cuts that damage revenue, such as removing the people who deliver work to paying clients.",
      },
      {
        q: "Do unpaid customer invoices affect runway?",
        a: "Yes. Money customers owe you is not in the bank, so it does not extend runway until it is collected. If you have large overdue invoices, your real net burn is higher than your sales suggest. Collecting faster, with clear due dates, polite reminders and late fee terms where allowed, is one of the cheapest ways to extend runway. Some businesses also use invoice factoring or financing to turn receivables into cash sooner, at a cost.",
      },
      {
        q: "What is default alive vs default dead?",
        a: "These are informal startup terms. A company is described as default alive if, at its current costs and revenue growth rate, it would reach profitability before running out of cash. It is default dead if it would run out of money first unless it raises more. The calculation combines burn, runway and revenue growth. It is a useful way to ask whether you are relying on future fundraising to survive.",
      },
    ],
    content: `<p><strong>Burn rate</strong> is how much cash a business spends each month. Gross burn is total monthly cash outflow. Net burn is outflow minus cash collected from customers. Cash runway is how many months you can last: current cash divided by monthly net burn. If you hold $600,000 and net burn is $50,000, runway is 12 months.</p>

<p>Startups talk about burn constantly, but the idea matters to any business that is not yet profitable, is investing ahead of revenue, or is going through a slow season. This guide explains the formulas, works through a full example, and shows practical ways to slow the burn and stretch your runway.</p>

<h2>Burn rate vs runway: the two numbers you need</h2>

<p>The two figures answer different questions:</p>

<ul>
<li><strong>Burn:</strong> how fast is cash leaving the business each month?</li>
<li><strong>Runway:</strong> at that pace, how long until the bank balance hits zero?</li>
</ul>

<p>You need both. A high burn is fine if you have a large cash cushion and a clear plan. A small burn can still be dangerous if your balance is nearly empty. These metrics are cash measures, so they belong next to your <a href="/blog/cash-flow-forecast">cash flow forecast</a> rather than your profit and loss statement.</p>

<h2>Gross burn vs net burn</h2>

<table>
<thead>
<tr><th>Measure</th><th>Formula</th><th>What it tells you</th></tr>
</thead>
<tbody>
<tr><td>Gross burn</td><td>Total cash paid out in the month</td><td>The size of your cost base</td></tr>
<tr><td>Net burn</td><td>Cash paid out - cash received from customers</td><td>How fast your cash balance is actually falling</td></tr>
<tr><td>Cash runway</td><td>Cash balance / average monthly net burn</td><td>Months until cash runs out at the current pace</td></tr>
<tr><td>Burn multiple</td><td>Net burn / net new annual recurring revenue</td><td>How efficiently spending turns into growth (used mainly by SaaS investors)</td></tr>
</tbody>
</table>

<p>Gross burn is useful for planning cuts because it shows the full cost base. Net burn is the number that drives runway. If revenue suddenly stopped, gross burn would become your net burn, so it is also a good stress test.</p>

<h2>The runway calculator formula</h2>

<p>The basic runway calculator formula is:</p>

<p><strong>Runway (months) = current cash balance / average monthly net burn</strong></p>

<p>Three refinements make it more reliable:</p>

<ol>
<li><strong>Average several months.</strong> Use a three-month average of net burn. One month can be distorted by an annual insurance payment or a large customer paying early.</li>
<li><strong>Use cash, not accruals.</strong> Take figures from bank statements or your <a href="/blog/cash-flow-statement">cash flow statement</a>. Revenue that is invoiced but unpaid does not count.</li>
<li><strong>Include all cash outflows.</strong> Loan repayments, equipment purchases and tax payments do not always appear as expenses on the P&amp;L, but they reduce cash. If your books use accrual accounting, see cash vs accrual accounting for the difference.</li>
</ol>

<h2>Worked example: calculating burn and runway</h2>

<p>Consider a small software startup with $600,000 in the bank at the start of July. Here are the last three months, taken from the bank account. All figures are illustrative.</p>

<table>
<thead>
<tr><th>Month</th><th>Cash out (gross burn)</th><th>Cash in from customers</th><th>Net burn</th></tr>
</thead>
<tbody>
<tr><td>April</td><td>$86,000</td><td>$41,000</td><td>$45,000</td></tr>
<tr><td>May</td><td>$92,000</td><td>$40,000</td><td>$52,000</td></tr>
<tr><td>June</td><td>$92,000</td><td>$39,000</td><td>$53,000</td></tr>
<tr><td><strong>Average</strong></td><td><strong>$90,000</strong></td><td><strong>$40,000</strong></td><td><strong>$50,000</strong></td></tr>
</tbody>
</table>

<p>Step by step:</p>

<ol>
<li>Average gross burn = ($86,000 + $92,000 + $92,000) / 3 = <strong>$90,000 a month</strong>.</li>
<li>Average net burn = ($45,000 + $52,000 + $53,000) / 3 = <strong>$50,000 a month</strong>.</li>
<li>Runway = $600,000 / $50,000 = <strong>12 months</strong>.</li>
</ol>

<p>Now run two scenarios.</p>

<p><strong>Scenario A: cut costs.</strong> The founders cancel unused software, sublet spare desk space and pause one planned hire, cutting $10,000 a month of outflow. Net burn falls to $40,000 and runway becomes $600,000 / $40,000 = 15 months. Three extra months bought without raising a cent.</p>

<p><strong>Scenario B: lose revenue.</strong> A large client worth $12,000 a month leaves. Net burn rises to $62,000 and runway shrinks to about 9.7 months. That is why a single month of figures can be misleading, and why you should update the calculation every month.</p>

<p><strong>Scenario C: revenue stops.</strong> If all customer cash stopped, net burn would equal gross burn of $90,000 and runway would be under seven months. It is a worst case, but it shows how exposed the business is.</p>

<p>Run the same scenarios whenever something material changes, such as losing or winning a large client, signing a lease or making a hire. Write down the assumptions next to each scenario, for example the date a client is expected to pay or the start date of a new employee, so you can check later which assumptions were wrong. Over time this makes your runway estimates more accurate and your decisions faster.</p>

<h2>Why unpaid invoices quietly increase your burn rate</h2>

<p>Many small businesses look healthy on paper because sales are invoiced, yet the bank balance keeps falling. The gap is usually receivables. If clients take 60 days to pay, the cash you need this month is still sitting in their accounts.</p>

<p>Two metrics help here:</p>

<ul>
<li><a href="/blog/days-sales-outstanding">Days sales outstanding</a> shows how long, on average, customers take to pay you.</li>
<li>The <a href="/blog/cash-conversion-cycle">cash conversion cycle</a> shows how long cash is tied up between paying suppliers and collecting from customers.</li>
</ul>

<p>Reducing collection time is the cheapest way to cut net burn. Send invoices the day work is delivered, state a clear due date, and follow up promptly. Our guide on <a href="/blog/how-to-get-paid-faster">how to get paid faster</a> covers the practical steps. You can create professional, numbered invoices in minutes with the free <a href="/invoice-generator">invoice generator</a>, which builds a PDF in your browser that you download and send yourself.</p>

<h2>How to reduce burn and extend runway</h2>

<p>Work through the levers roughly in this order, from least to most painful:</p>

<ol>
<li><strong>Collect faster.</strong> Chase overdue invoices, shorten payment terms for new clients and ask for deposits on large projects. See deposit invoices for how to bill upfront.</li>
<li><strong>Review recurring costs.</strong> Cancel software nobody uses, downgrade plans and check every subscription on the card statement.</li>
<li><strong>Renegotiate.</strong> Ask suppliers and landlords for better terms. Longer supplier payment terms move cash outflows later.</li>
<li><strong>Delay discretionary spending.</strong> Pause events, office upgrades and experimental marketing that has not proved its return.</li>
<li><strong>Slow hiring.</strong> Salaries are usually the largest cost. Each delayed hire saves the full monthly cost of that role.</li>
<li><strong>Raise prices.</strong> A modest price rise on existing customers can cut net burn noticeably with little extra cost.</li>
<li><strong>Bridge financing.</strong> If needed, options like invoice factoring or a credit line can smooth gaps, at a cost.</li>
</ol>

<p>Avoid cuts that damage revenue, such as removing the people who deliver work to paying clients. A lower burn rate is only useful if the business can still grow or reach profitability.</p>

<h2>How much runway is enough?</h2>

<p>There is no official benchmark. In venture-backed startups, founders commonly aim for something like 12 to 24 months of runway after raising money, and begin fundraising well before runway drops below six to nine months, because raising money can take a long time. A self-funded service business with steady clients might be comfortable with three to six months of costs in reserve.</p>

<p>Think about:</p>

<ul>
<li>How predictable your revenue is. Retainer and subscription income is steadier than one-off projects.</li>
<li>How fast you could cut costs if a large client left.</li>
<li>How long it would take to raise money or arrange a loan.</li>
<li>Seasonality. A business that earns most of its revenue in one quarter needs a bigger cushion for the quiet months.</li>
</ul>

<h3>Worked example: when to start raising or cutting</h3>

<p>Back to the startup with 12 months of runway at $50,000 net burn. Suppose the founders estimate that raising a new round will take about six months from first meeting to money in the bank, and they want at least three months of cushion left when it closes. Working backward:</p>

<ol>
<li>Required buffer at close: 3 months.</li>
<li>Time to raise: 6 months.</li>
<li>Latest safe start: when runway reaches 3 + 6 = 9 months.</li>
</ol>

<p>With 12 months of runway today, they have about three months before they must start fundraising. If net burn creeps up to $60,000, runway drops to 10 months and that window shrinks to one month. The same logic applies to a bank loan or a cost-cutting plan: decide in advance the runway level that triggers action, and write it down so the decision is not delayed when the moment comes.</p>

<h3>Seasonal businesses</h3>

<p>A landscaping firm, a tour operator or a gift retailer may burn cash for several months and then earn most of its revenue in a short season. For these businesses a simple average can mislead. Instead, project each month separately for the next 12 months: expected cash in, expected cash out and closing balance. The lowest closing balance in the year is the number to watch.</p>

<p>For example, a business with $80,000 in the bank in October that expects net burn of $15,000 a month from November to February would reach a low of $20,000 at the end of February, before spring revenue arrives. If an unexpected $25,000 equipment repair landed in January, it would run out of cash. That is the case for building a seasonal reserve, or arranging a credit line before the quiet months rather than during them.</p>

<h2>Tracking burn rate monthly</h2>

<p>A simple routine keeps the numbers honest:</p>

<ol>
<li>At month end, export bank transactions and total cash in and cash out. Many teams do this as part of a <a href="/blog/month-end-close-checklist">month-end close checklist</a>.</li>
<li>Calculate gross burn, net burn and the three-month average.</li>
<li>Update runway with the current cash balance.</li>
<li>Note one-off items separately so you can see the underlying trend.</li>
<li>Compare against your <a href="/blog/small-business-budget">small business budget</a> and explain any big variances.</li>
</ol>

<p>A simple spreadsheet is enough. Use one row per month and columns for opening cash, cash in, cash out, net burn, three-month average net burn, closing cash and runway in months. Add a notes column for one-off items such as an annual insurance premium, a tax payment or a large customer prepaying a year in advance. When you review the sheet, look first at the trend in the three-month average rather than any single month.</p>

<p>Plotting runway on a simple chart each month makes trends obvious. If runway is shrinking faster than planned, act early. Cutting costs with nine months of runway is far easier than with three.</p>

<h2>Burn rate and profitability metrics</h2>

<p>Burn tells you about cash, not profitability. A company can have positive <a href="/blog/ebitda">EBITDA</a> and still burn cash if it is buying equipment, repaying loans or waiting on slow-paying customers. Equally, a business can be loss-making on paper but cash positive for a while if customers prepay annual subscriptions.</p>

<p>That is why burn sits alongside other metrics. <a href="/blog/unit-economics">Unit economics</a> tell you whether each sale makes money. <a href="/blog/break-even-point">Break-even analysis</a> tells you how much revenue you need to stop burning. Together they show whether burn is buying sustainable growth or just delaying a problem.</p>

<p>If your cash position is tight, speak to an accountant or financial adviser before taking on debt or making major cuts.</p>

<h2>Conclusion</h2>

<p>Burn rate is the monthly speed at which you use cash. Gross burn shows your full cost base; net burn shows how fast the balance falls. Divide cash by average net burn to get runway, update it every month, and act while you still have time. Faster collections are the easiest win, so send clear invoices promptly with our free <a href="/invoice-generator">invoice generator</a>.</p>`,
  },
  {
    slug: "unit-economics",
    title: "Unit Economics: Formulas, CAC Payback and LTV:CAC",
    description:
      "Unit economics explained with worked examples for a service and a product business: contribution margin per unit, CAC, CAC payback and LTV:CAC ratio.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["customer-lifetime-value", "break-even-point", "fixed-vs-variable-costs"],
    faqs: [
      {
        q: "What are unit economics?",
        a: "Unit economics are the revenues and costs tied to a single unit of your business, usually one product sold or one customer. They show whether each sale makes or loses money once you subtract the costs that come with it. The core numbers are contribution margin per unit, customer acquisition cost, payback period and lifetime value. If the economics of one unit do not work, growing sales will only grow losses.",
      },
      {
        q: "How do you calculate contribution margin per unit?",
        a: "Take the selling price of one unit and subtract all variable costs tied to that unit: materials, packaging, shipping you pay, payment processing and marketplace fees, and direct labor that scales with volume. A candle selling for $32 with $16.20 of variable costs has a contribution margin of $15.80, or 49.4%. Fixed costs such as rent and salaries are not deducted, because they do not change with each sale.",
      },
      {
        q: "What is CAC and how is it calculated?",
        a: "CAC is customer acquisition cost: the average amount you spend to win one new customer. Divide total sales and marketing spend for a period by the number of new customers gained in that period. If you spent $3,000 on ads, tools and sales time in a month and won two new clients, CAC is $1,500. Be consistent about what you include, and count your own time if selling takes a lot of it.",
      },
      {
        q: "What is a good LTV to CAC ratio?",
        a: "A commonly quoted rule of thumb, especially for subscription businesses, is a lifetime value at least three times acquisition cost, written 3:1. Below 1:1 means you lose money on every customer. Far above 5:1 can mean you are underinvesting in growth. Treat 3:1 as a starting point rather than a law, and make sure lifetime value is based on contribution margin, not revenue, or the ratio will look better than it is.",
      },
      {
        q: "What is CAC payback period?",
        a: "CAC payback period is the number of months it takes for the contribution margin from a new customer to repay the cost of acquiring them. The formula is CAC divided by monthly contribution margin per customer. If a client costs $1,500 to win and generates $350 of contribution each month, payback is about 4.3 months. Shorter payback means you recover cash faster and can reinvest it in growth sooner.",
      },
      {
        q: "Do unit economics apply to service businesses?",
        a: "Yes. For a service business the unit is usually a client, a project or a billable hour. Contribution margin is the fee minus costs that vary with the work, such as subcontractor time, project-specific software and payment fees. A freelancer can use the same logic to compare which services or clients are actually profitable once delivery time and acquisition effort are counted, not just which ones bring in the most revenue.",
      },
      {
        q: "What is the difference between unit economics and break-even analysis?",
        a: "Unit economics look at the profit from a single unit or customer before fixed costs. Break-even analysis uses that per-unit contribution to work out how many units you must sell to cover all fixed costs. They work together: first confirm each unit contributes a positive margin, then divide fixed costs by that margin to get the break-even volume. Without positive unit-level contribution, no sales volume will ever reach break-even.",
      },
      {
        q: "How can I improve my unit economics?",
        a: "Raise price where customers see value, reduce variable costs per unit, lower acquisition cost by focusing on cheaper channels such as referrals, or increase how long customers stay and how often they buy. Bundling can raise average order value so fixed per-order costs like shipping and payment fees are spread over more revenue. Track each change separately so you can see which lever actually moved contribution margin, CAC or retention.",
      },
    ],
    content: `<p><strong>Unit economics</strong> measure whether one unit of your business, usually one product or one customer, makes money. The core formulas are contribution margin per unit (price minus variable costs), customer acquisition cost (CAC), CAC payback period and the LTV:CAC ratio. If a single unit loses money, more sales will only increase the loss.</p>

<p>This guide explains each formula, then works through two full examples: a service business and a product business. You will see exactly where the numbers come from and how to tell whether growth will make you more profitable or just busier.</p>

<h2>Why unit economics matter</h2>

<p>Total revenue can hide a lot. A business can grow sales every month and still run out of cash if each new customer costs more to win and serve than they bring in. Looking at the economics of a single unit strips away the noise and answers three questions:</p>

<ul>
<li>Does each sale cover its own direct costs?</li>
<li>How much does it cost to win each customer, and how long until that cost is recovered?</li>
<li>Over the whole relationship, is a customer worth more than they cost to acquire?</li>
</ul>

<p>The answers feed straight into pricing, marketing budgets and hiring decisions. They also connect to your <a href="/blog/break-even-point">break-even point</a>, because break-even volume is fixed costs divided by contribution margin per unit.</p>

<p>Unit economics are not only for venture-backed startups. A bakery, a plumber or a freelance designer can run the same numbers in a spreadsheet in an hour, using sales invoices, supplier bills and a record of marketing spend.</p>

<h2>The core unit economics formulas</h2>

<table>
<thead>
<tr><th>Metric</th><th>Formula</th><th>What it tells you</th></tr>
</thead>
<tbody>
<tr><td>Contribution margin per unit</td><td>Price per unit - variable costs per unit</td><td>Profit each sale contributes toward fixed costs</td></tr>
<tr><td>Contribution margin %</td><td>Contribution margin per unit / price x 100</td><td>Share of each sale left after variable costs</td></tr>
<tr><td>Customer acquisition cost (CAC)</td><td>Sales and marketing spend / new customers won</td><td>Average cost to win one customer</td></tr>
<tr><td>CAC payback period</td><td>CAC / monthly contribution margin per customer</td><td>Months to recover acquisition cost</td></tr>
<tr><td>Lifetime value (LTV)</td><td>Contribution margin per period x expected number of periods</td><td>Total contribution from an average customer</td></tr>
<tr><td>LTV:CAC ratio</td><td>LTV / CAC</td><td>Return on acquisition spend</td></tr>
</tbody>
</table>

<p>Two points matter more than the formulas themselves. First, only include <em>variable</em> costs in contribution margin. If you are unsure which costs are which, read <a href="/blog/fixed-vs-variable-costs">fixed vs variable costs</a>. Second, calculate lifetime value from contribution margin, not revenue. Revenue-based LTV makes every ratio look better than reality. Our detailed guide to <a href="/blog/customer-lifetime-value">customer lifetime value</a> covers the different LTV methods.</p>

<h2>Worked example 1: a service business</h2>

<p>A two-person web design studio sells website projects at a fixed fee and offers a monthly maintenance plan. All figures are illustrative.</p>

<h3>Contribution margin per project</h3>

<table>
<thead>
<tr><th>Item</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Project fee</td><td>$6,000</td></tr>
<tr><td>Subcontracted developer (30 hours at $50)</td><td>-$1,500</td></tr>
<tr><td>Theme, plugins and stock images</td><td>-$200</td></tr>
<tr><td>Card processing fees (3% of $6,000)</td><td>-$180</td></tr>
<tr><td><strong>Contribution margin per project</strong></td><td><strong>$4,120 (68.7%)</strong></td></tr>
</tbody>
</table>

<p>The owners' own time is not deducted here because they are paid from fixed salaries. If you are a solo freelancer, you may want to deduct your hours at a target rate to see whether the project really pays. Our guide on <a href="/blog/how-to-set-freelance-rates">setting freelance rates</a> helps with that.</p>

<h3>CAC and payback</h3>

<p>Each month the studio spends $2,400 on ads and $600 on proposal and CRM software, a total of $3,000, and wins two new clients. CAC = $3,000 / 2 = <strong>$1,500</strong>.</p>

<p>On a one-off project, the $4,120 contribution recovers the $1,500 CAC immediately. The more interesting case is the maintenance plan: $500 a month, with about $150 of variable hosting and contractor costs, so $350 monthly contribution. For a client who only buys maintenance, payback = $1,500 / $350 = <strong>about 4.3 months</strong>.</p>

<h3>Lifetime value and LTV:CAC</h3>

<p>Suppose a typical client buys one project and stays on maintenance for 24 months. LTV = $4,120 + ($350 x 24) = $4,120 + $8,400 = <strong>$12,520</strong>. LTV:CAC = $12,520 / $1,500 = <strong>about 8.3:1</strong>.</p>

<p>That ratio is strong. It suggests the studio could spend more to win clients, for example by raising the ad budget, as long as capacity allows. It also shows the maintenance plan is where most of the lifetime value comes from, so it is worth promoting in every proposal. A <a href="/blog/retainer-invoice">retainer invoice</a> makes the monthly billing simple.</p>

<h2>Worked example 2: a product business</h2>

<p>An online shop sells hand-poured candles at $32 each. Again, the figures are illustrative.</p>

<h3>Contribution margin per unit</h3>

<table>
<thead>
<tr><th>Item</th><th>Per candle</th></tr>
</thead>
<tbody>
<tr><td>Selling price</td><td>$32.00</td></tr>
<tr><td>Wax, wick, fragrance and jar</td><td>-$7.00</td></tr>
<tr><td>Packaging</td><td>-$2.00</td></tr>
<tr><td>Shipping subsidy (cost above what customer pays)</td><td>-$4.00</td></tr>
<tr><td>Marketplace and payment fees (10%)</td><td>-$3.20</td></tr>
<tr><td><strong>Contribution margin per unit</strong></td><td><strong>$15.80 (49.4%)</strong></td></tr>
</tbody>
</table>

<p>Materials and packaging together form the <a href="/blog/cost-of-goods-sold">cost of goods sold</a>, but fees and shipping subsidies are also variable, so they belong in unit-level contribution.</p>

<h3>CAC and first-order profit</h3>

<p>The shop spends $4,000 a month on social ads and wins 200 new customers. CAC = $4,000 / 200 = <strong>$20</strong>.</p>

<p>The average first order is 1.5 candles, so first-order contribution = 1.5 x $15.80 = $23.70. After CAC, the first order makes $23.70 - $20 = <strong>$3.70</strong>. That is thin. The shop recovers its acquisition cost on the first order, but only just.</p>

<h3>Lifetime value and LTV:CAC</h3>

<p>Order history shows the average customer places three orders of 1.5 candles over their lifetime. LTV = 3 x $23.70 = <strong>$71.10</strong> of contribution. LTV:CAC = $71.10 / $20 = <strong>about 3.6:1</strong>.</p>

<p>The economics work, but repeat purchases carry the business. If customers only ever bought once, the shop would make $3.70 per customer before rent, salaries and software. A loyalty discount or bundle that lifts average order size to two candles would raise first-order contribution to $31.60 and make the model much safer. Before discounting, check the effect on margin using <a href="/blog/markup-vs-margin">markup vs margin</a>.</p>

<h3>What if ad costs rise?</h3>

<p>Paid channels tend to get more expensive as you scale, because you exhaust the cheapest audiences first. If the shop's CAC rose from $20 to $30, first-order contribution of $23.70 would no longer cover acquisition, leaving a $6.30 loss on the first order. LTV:CAC would fall to $71.10 / $30 = about 2.4:1, and payback would depend on the second order arriving. Running this kind of what-if before increasing ad spend shows how much headroom you really have and which number to watch week by week.</p>

<h2>Comparing the two examples</h2>

<table>
<thead>
<tr><th>Metric</th><th>Web design studio</th><th>Candle shop</th></tr>
</thead>
<tbody>
<tr><td>Contribution margin %</td><td>68.7% (project)</td><td>49.4%</td></tr>
<tr><td>CAC</td><td>$1,500</td><td>$20</td></tr>
<tr><td>CAC payback</td><td>Immediate on project; 4.3 months on maintenance only</td><td>First order</td></tr>
<tr><td>Lifetime value (contribution)</td><td>$12,520</td><td>$71.10</td></tr>
<tr><td>LTV:CAC</td><td>About 8.3:1</td><td>About 3.6:1</td></tr>
<tr><td>Main risk</td><td>Capacity limits and lumpy project wins</td><td>Low repeat rate or rising ad costs</td></tr>
</tbody>
</table>

<p>The absolute numbers differ hugely, but the same framework applies. Each business can now see which lever matters most: the studio should sell more maintenance plans; the shop should increase order size and repeat rate.</p>

<h2>Unit economics for freelancers and solo consultants</h2>

<p>The same framework works for one person selling time. The unit is usually a client or a billable hour, and the hidden cost is your own unbillable time.</p>

<p>Take a freelance copywriter charging $90 an hour. Each client project averages 20 billable hours, or $1,800. Variable costs include a 3% card fee ($54) and $40 of stock images and tools charged per project. Contribution per project is $1,800 - $54 - $40 = <strong>$1,706</strong>.</p>

<p>Now include acquisition effort. The copywriter spends about 10 unbillable hours a month on pitching, proposals and calls and wins two new clients a month. Valuing that time at the $90 rate gives (10 x $90) / 2 = $450 per client. Add $50 a month of job-board fees spread across the two wins and CAC is roughly <strong>$475</strong>. If a typical client buys three projects over a year, contribution LTV is 3 x $1,706 = $5,118 and LTV:CAC is <strong>about 10.8:1</strong>.</p>

<p>The lesson for most freelancers is that the numbers improve sharply when clients come back, because repeat clients have no acquisition cost at all. Also watch scope creep. A project with 6 unbilled revision hours on top of 20 billed hours effectively pays $1,800 / 26 = about $69 an hour, not $90.</p>

<h2>Using unit economics to set a marketing budget</h2>

<p>Once you know contribution per customer, you can set a ceiling on acquisition spend instead of guessing:</p>

<ol>
<li>Calculate contribution LTV for the customer type you want more of.</li>
<li>Decide your target LTV:CAC ratio. Many businesses use 3:1 as a cautious starting point.</li>
<li>Divide LTV by the target ratio to get the maximum CAC you can afford.</li>
<li>Check payback: the maximum CAC should be recovered within a period your cash can support.</li>
</ol>

<p>For the candle shop, $71.10 / 3 = about $23.70, so it can afford to pay up to roughly $23.70 per new customer, and the average first order alone would recover that. For the web design studio, $12,520 / 3 = about $4,173, far above the current $1,500, which suggests room to test more expensive channels such as events or partnerships, as long as the team has capacity to deliver. Review the ceiling whenever prices, costs or retention change.</p>

<h2>Common unit economics mistakes</h2>

<ol>
<li><strong>Using revenue instead of contribution.</strong> A $100 customer is not worth $100 if it costs $60 to serve.</li>
<li><strong>Leaving out hidden variable costs.</strong> Payment fees, returns, refunds, free shipping and chargebacks all reduce contribution.</li>
<li><strong>Blending channels.</strong> A referral customer and a paid-ad customer have very different CAC. Calculate CAC per channel where you can.</li>
<li><strong>Ignoring your own time.</strong> Founders often do sales themselves and record a CAC that looks tiny. If you would have to hire someone to replace that effort, include an estimate.</li>
<li><strong>Assuming retention.</strong> Use real repeat-purchase or churn data, not hopes. New businesses should be conservative until they have at least a year of history.</li>
<li><strong>Forgetting payment timing.</strong> Good economics on paper can still strain cash if clients pay 60 days late. Watch days sales outstanding and your <a href="/blog/burn-rate-and-runway">burn rate and runway</a>.</li>
</ol>

<h2>How to improve your numbers</h2>

<ul>
<li><strong>Price:</strong> a small increase flows almost entirely into contribution. See <a href="/blog/how-to-price-a-product">how to price a product</a>.</li>
<li><strong>Variable costs:</strong> negotiate supplier prices, buy materials in bulk or switch to cheaper packaging.</li>
<li><strong>CAC:</strong> lean on referrals, repeat clients and content, which usually cost less than paid ads.</li>
<li><strong>Retention:</strong> follow up after delivery, offer maintenance or subscriptions and make reordering easy.</li>
<li><strong>Order size:</strong> bundles and free-shipping thresholds spread fixed per-order costs such as packaging and fulfilment over more units.</li>

<li><strong>Billing hygiene:</strong> invoice every billable item. Missed extras such as rush fees or extra revisions erode contribution. Itemized invoices from our <a href="/invoice-templates">free invoice templates</a> make every charge visible to the client.</li>
</ul>

<p>Once your contribution margin and acquisition costs are clear, you can calculate the return on any new marketing spend with the <a href="/blog/roi-formula">ROI formula</a>.</p>

<h2>Conclusion</h2>

<p>Unit economics boil your business down to one sale or one customer. Calculate contribution margin per unit, CAC, payback period and LTV:CAC using real data, then improve the weakest number first. Growth built on positive unit-level profit compounds; growth built on losses just burns cash faster. Keep your revenue records accurate from the start with the free <a href="/invoice-generator">invoice generator</a>.</p>`,
  },
  {
    slug: "customer-lifetime-value",
    title: "Customer Lifetime Value: CLV Formula and Examples",
    description:
      "Customer lifetime value explained: the CLV formula for one-off and subscription businesses, a worked LTV calculation, and how to use CLV to set budgets.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["unit-economics", "how-to-price-a-product", "recurring-invoices-guide"],
    faqs: [
      {
        q: "What is customer lifetime value?",
        a: "Customer lifetime value, often shortened to CLV or LTV, is the total value a business expects to earn from a typical customer over the whole relationship. It can be measured as revenue or, more usefully, as gross profit or contribution margin. It helps you decide how much you can afford to spend to win a customer, which customers to prioritize, and whether retention efforts are paying off.",
      },
      {
        q: "What is the basic CLV formula?",
        a: "The simplest version is average purchase value multiplied by purchase frequency per year multiplied by average customer lifespan in years. To turn that revenue figure into profit, multiply by your gross margin percentage. For example, a $150 average job, 10 jobs a year and a three-year lifespan give $4,500 of revenue. At a 40% gross margin, profit-based lifetime value is $1,800.",
      },
      {
        q: "How do you calculate LTV for a subscription business?",
        a: "Use average monthly revenue per customer multiplied by gross margin, divided by monthly churn rate. If customers pay $50 a month, gross margin is 80% and 4% of customers cancel each month, LTV is $50 x 0.8 / 0.04 = $1,000. Dividing one by the churn rate gives the expected lifetime, here 25 months. The formula assumes churn stays constant, which is rarely exactly true, so revisit it regularly.",
      },
      {
        q: "What is the difference between CLV and LTV?",
        a: "In everyday business use they mean the same thing: the value of a customer over the relationship. CLV is more common in marketing and retail, while LTV is common in SaaS and startup finance. What matters more than the label is whether the figure is based on revenue or profit and whether it is historical or predictive. Always state which version you are using so others can compare it correctly.",
      },
      {
        q: "What is a good customer lifetime value?",
        a: "There is no universal good number. Lifetime value only means something relative to customer acquisition cost. A $500 lifetime value is excellent if it costs $50 to win a customer and poor if it costs $600. Many subscription businesses use a rule of thumb of lifetime value at least three times acquisition cost. Compare your figure against acquisition cost by channel and track whether it rises over time.",
      },
      {
        q: "How can a small business increase customer lifetime value?",
        a: "Focus on the three inputs. Raise average order value with bundles, add-ons or tiered packages. Increase purchase frequency with reminders, maintenance plans or subscriptions. Extend lifespan by delivering consistently, asking for feedback and fixing problems fast. Smooth billing helps too: clear invoices, simple payment options and no surprise charges reduce friction that can push customers to leave. Measure the effect of each change on the specific input it targets.",
      },
      {
        q: "Should CLV use revenue or profit?",
        a: "Profit, in most cases. Revenue-based lifetime value overstates what a customer is worth because it ignores the cost of serving them. If you compare revenue-based value with acquisition cost you might overspend on marketing. Use gross margin or contribution margin to convert revenue into profit. Revenue-based figures can still be useful for forecasting sales, as long as everyone knows which version they are looking at.",
      },
      {
        q: "What is historical vs predictive CLV?",
        a: "Historical lifetime value adds up what past customers actually spent, which is accurate but backward-looking. Predictive lifetime value estimates what current customers will spend in future, using purchase patterns, churn and sometimes statistical models. Small businesses usually start with historical figures from invoice and sales records, then use simple formulas to project forward. Larger businesses with lots of data may build predictive models by customer segment.",
      },
      {
        q: "How often should I recalculate lifetime value?",
        a: "Quarterly is a sensible rhythm for most small businesses, and at least once a year. Recalculate sooner if you change prices, launch a subscription, change your product mix or notice churn moving. New businesses should treat early figures as rough estimates because they have not yet seen how long customers stay. Keeping clean, consistent invoice records makes each recalculation faster and more reliable.",
      },
    ],
    content: `<p><strong>Customer lifetime value</strong> (CLV or LTV) is the total profit a business expects from an average customer over the whole relationship. The basic CLV formula is average purchase value x purchase frequency x customer lifespan x gross margin. For subscriptions, use monthly revenue per customer x gross margin / monthly churn rate.</p>

<p>Knowing this number tells you how much you can afford to spend to win a customer, which customers deserve the most attention, and whether your retention work is paying off. This guide covers the main formulas, works through two LTV calculations with real numbers, and shows how to use the result in day-to-day decisions.</p>

<h2>Why customer lifetime value matters</h2>

<p>Most small businesses know their monthly revenue. Fewer know what a typical customer is worth over time. That gap leads to two common mistakes: spending too much to win customers who never come back, or spending too little to win customers who would have stayed for years.</p>

<p>Lifetime value fixes that by connecting three things:</p>

<ul>
<li><strong>Acquisition:</strong> how much you can spend on marketing and sales per customer.</li>
<li><strong>Retention:</strong> how much a longer relationship is worth, and therefore how much to invest in service.</li>
<li><strong>Pricing:</strong> how changes to price or packages affect long-term profit, not just this month's sales.</li>
</ul>

<p>It also changes how you think about a single bad experience. A customer who leaves after a missed appointment does not cost you one job; they cost the rest of their expected relationship. In the cleaning example below, that is up to $1,800 of profit, which puts the cost of a refund or a free re-clean in perspective.</p>

<p>It is one of the core inputs to <a href="/blog/unit-economics">unit economics</a>, alongside contribution margin and customer acquisition cost.</p>

<h2>The CLV formula: three versions</h2>

<table>
<thead>
<tr><th>Version</th><th>Formula</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>Revenue-based (simple)</td><td>Average purchase value x purchases per year x lifespan in years</td><td>Quick sales forecasts</td></tr>
<tr><td>Profit-based</td><td>Revenue-based value x gross margin %</td><td>Setting marketing budgets and comparing with acquisition cost</td></tr>
<tr><td>Subscription (churn-based)</td><td>(Average monthly revenue per customer x gross margin %) / monthly churn rate</td><td>Subscriptions, retainers and memberships</td></tr>
</tbody>
</table>

<p>Each input has a clear definition:</p>

<ul>
<li><strong>Average purchase value:</strong> total revenue / number of orders or invoices in the period.</li>
<li><strong>Purchase frequency:</strong> number of orders / number of unique customers in the period.</li>
<li><strong>Customer lifespan:</strong> the average length of time customers keep buying. For subscriptions, this is roughly 1 / monthly churn rate.</li>
<li><strong>Gross margin:</strong> (revenue - <a href="/blog/cost-of-goods-sold">cost of goods sold</a>) / revenue. Some businesses use contribution margin instead, which also subtracts other variable costs like payment fees.</li>
</ul>

<p>Your sales invoices are the best raw data for the first three inputs. If every invoice carries a client name, date and total, you can calculate them in a spreadsheet. Our <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a> guide shows a simple layout.</p>

<h2>Worked example 1: a cleaning business</h2>

<p>A residential cleaning business pulls its last 12 months of invoices. All figures are illustrative.</p>

<ul>
<li>Total revenue: $270,000</li>
<li>Number of invoices: 1,800</li>
<li>Unique customers: 180</li>
<li>Gross margin after cleaner wages and supplies: 40%</li>
<li>Average customer stays: 3 years (from client records)</li>
</ul>

<p>Step by step:</p>

<ol>
<li>Average purchase value = $270,000 / 1,800 = <strong>$150</strong>.</li>
<li>Purchase frequency = 1,800 / 180 = <strong>10 jobs a year</strong>.</li>
<li>Annual revenue per customer = $150 x 10 = <strong>$1,500</strong>.</li>
<li>Revenue-based lifetime value = $1,500 x 3 years = <strong>$4,500</strong>.</li>
<li>Profit-based lifetime value = $4,500 x 40% = <strong>$1,800</strong>.</li>
</ol>

<p>If the business spends $200 on average to win a new client through local ads and flyers, the LTV:CAC ratio is $1,800 / $200 = 9:1. That is healthy and suggests there is room to spend more on acquisition, or to invest in keeping existing clients happy.</p>

<p>Now see what happens with small improvements. Adding an optional oven-cleaning add-on raises the average job to $165. Lifetime value becomes $165 x 10 x 3 x 40% = $1,980, an extra $180 of profit per customer with no extra acquisition cost.</p>

<h2>Worked example 2: a subscription or retainer business</h2>

<p>A software tool, or an agency billing monthly retainers, uses the churn-based formula. Figures are illustrative.</p>

<ul>
<li>Average monthly revenue per customer: $50</li>
<li>Gross margin: 80%</li>
<li>Monthly churn: 4% of customers cancel each month</li>
</ul>

<p>LTV = ($50 x 0.80) / 0.04 = $40 / 0.04 = <strong>$1,000</strong>.</p>

<p>The expected lifespan is 1 / 0.04 = 25 months. Churn has a huge effect. If churn falls from 4% to 3%, LTV rises to $40 / 0.03 = about $1,333, a 33% increase from a single percentage point. If churn rises to 5%, LTV falls to $800.</p>

<table>
<thead>
<tr><th>Monthly churn</th><th>Expected lifespan</th><th>LTV at $40 monthly gross profit</th></tr>
</thead>
<tbody>
<tr><td>2%</td><td>50 months</td><td>$2,000</td></tr>
<tr><td>3%</td><td>About 33 months</td><td>About $1,333</td></tr>
<tr><td>4%</td><td>25 months</td><td>$1,000</td></tr>
<tr><td>5%</td><td>20 months</td><td>$800</td></tr>
<tr><td>8%</td><td>12.5 months</td><td>$500</td></tr>
</tbody>
</table>

<p>Retainer businesses work the same way. An agency billing a $2,000 monthly retainer with a 50% gross margin and 5% monthly churn has an LTV of ($2,000 x 0.50) / 0.05 = $20,000. Keeping each client just a few months longer, through regular reporting and quick responses, can add thousands of dollars of profit per account.</p>

<p>That table is why subscription businesses obsess over retention. If you bill clients monthly, see our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> for setting up a reliable billing routine. Note that our free invoice generator does not send recurring invoices automatically; you create and send each one yourself.</p>

<h2>Using lifetime value in decisions</h2>

<h3>Setting a marketing budget</h3>

<p>Compare profit-based lifetime value with customer acquisition cost by channel. If referral clients have a $1,800 value and cost $50 to win, while paid-ad clients have the same value but cost $600, you know where the next dollar should go. A common rule of thumb in subscription businesses is to aim for LTV at least three times CAC, but treat it as a guide rather than a rule.</p>

<h3>Prioritizing customers</h3>

<p>Segment customers by size, industry or service type and calculate value for each group. You may find that small clients have a higher value than large ones because they stay longer and need less hand-holding. Use our guide to <a href="/blog/how-to-price-a-product">pricing a product</a> to adjust packages for the segments that matter most.</p>

<h3>Deciding how much to spend on retention</h3>

<p>If reducing churn by one point is worth $333 per customer, as in the subscription example, then spending $50 per customer on onboarding or a check-in call is easy to justify. Use the <a href="/blog/roi-formula">ROI formula</a> to test the investment.</p>

<h3>Evaluating discounts and promotions</h3>

<p>A first-order discount looks expensive in the month you run it, but lifetime value shows the real trade-off. Suppose a 20% discount on a first $150 clean costs $30 and wins 10 extra clients a month. If even half of them become regular clients worth $1,800 in profit, the $300 a month in discounts buys about $9,000 of lifetime profit. If instead the discount mainly attracts one-off bargain hunters, the same $300 buys very little. Track which customers the promotion brings in before deciding to repeat it.</p>

<h3>Planning cash flow</h3>

<p>Lifetime value is earned over years, but acquisition cost is paid upfront. A business with a great LTV:CAC ratio can still run short of cash if it grows quickly. Watch your <a href="/blog/burn-rate-and-runway">burn rate and runway</a> and build the timing into your <a href="/blog/cash-flow-forecast">cash flow forecast</a>.</p>

<h2>How to increase customer lifetime value</h2>

<ol>
<li><strong>Raise average purchase value</strong> with add-ons, bundles and tiered packages.</li>
<li><strong>Increase frequency</strong> with maintenance plans, service reminders and subscriptions. A <a href="/blog/retainer-invoice">retainer invoice</a> turns one-off work into a regular relationship.</li>
<li><strong>Extend lifespan</strong> by delivering consistently, asking for feedback and fixing problems quickly.</li>
<li><strong>Improve gross margin</strong> by cutting delivery costs or raising prices where value is clear.</li>
<li><strong>Remove billing friction.</strong> Confusing invoices, missing details and surprise charges create disputes. Clean, itemized invoices from our <a href="/invoice-templates">invoice templates</a> show clients exactly what they are paying for.</li>
</ol>

<h2>Customer lifetime value by segment: an example</h2>

<p>An average across all customers hides big differences. Splitting customers into groups usually reveals where the profit really comes from. Here is the cleaning business from earlier, split into three segments using the same 40% gross margin. Figures are illustrative.</p>

<table>
<thead>
<tr><th>Segment</th><th>Average job</th><th>Jobs a year</th><th>Lifespan</th><th>Profit-based value</th><th>Acquisition cost</th><th>LTV:CAC</th></tr>
</thead>
<tbody>
<tr><td>Weekly regulars</td><td>$140</td><td>48</td><td>3 years</td><td>$8,064</td><td>$250</td><td>About 32:1</td></tr>
<tr><td>Monthly clients</td><td>$160</td><td>12</td><td>2 years</td><td>$1,536</td><td>$200</td><td>About 7.7:1</td></tr>
<tr><td>One-off deep cleans</td><td>$300</td><td>1.2</td><td>1 year</td><td>$144</td><td>$120</td><td>1.2:1</td></tr>
</tbody>
</table>

<p>Weekly regulars are worth more than fifty times as much as one-off deep-clean customers. That does not mean dropping deep cleans, since some convert into regular clients, but it does mean marketing should focus on winning recurring clients, and every deep-clean customer should be offered a regular plan at the end of the job. A blended average would hide this completely.</p>

<h2>Where to find the data for customer lifetime value</h2>

<p>Most small businesses already hold everything they need:</p>

<ul>
<li><strong>Sales invoices:</strong> client name, date and total give you purchase value and frequency.</li>
<li><strong>Accounting reports:</strong> the profit and loss statement gives gross margin.</li>
<li><strong>Customer lists or CRM:</strong> first and last purchase dates show how long clients stay.</li>
<li><strong>Marketing spend:</strong> ad receipts and tool subscriptions give acquisition cost.</li>
</ul>

<p>The quality of the result depends on consistency. If the same client appears under three different names, frequency will be understated and lifespan will look shorter than it really is. Use one consistent client name and a sequential invoice number on every invoice. Export your sales to a spreadsheet, then use a pivot table to total revenue and count invoices per client. With a year or two of history, you can calculate customer lifetime value by segment in under an hour.</p>

<h2>Common LTV calculation mistakes</h2>

<ul>
<li><strong>Using revenue instead of profit.</strong> This inflates the figure and encourages overspending on marketing.</li>
<li><strong>Averaging everyone together.</strong> One huge client can distort the average. Calculate a median as well, or segment.</li>
<li><strong>Guessing lifespan.</strong> New businesses do not yet know how long customers stay. Be conservative and update as data arrives.</li>
<li><strong>Ignoring payment risk.</strong> Revenue you invoice but never collect is not value. Write-offs should reduce the figure; see <a href="/blog/bad-debt-write-off">bad debt write-offs</a>.</li>
<li><strong>Mixing new and established customers.</strong> Customers won in the last few months have not yet shown how long they will stay. Measure lifespan from customers you have known long enough to judge, or you will understate it.</li>

<li><strong>Not discounting long lifespans.</strong> A dollar in five years is worth less than a dollar today. Larger businesses often apply a discount rate; for small businesses, simply being conservative about lifespan has a similar effect.</li>
</ul>

<h2>Conclusion</h2>

<p>Customer lifetime value turns your sales history into a clear number: what a typical customer is really worth. Use the profit-based CLV formula for one-off sales and the churn-based version for subscriptions, compare the result with acquisition cost by channel and segment, and improve whichever input is weakest. Recalculate every quarter, or sooner if you change prices or packages, so your marketing budget always reflects current numbers. Every calculation starts with accurate sales records, so issue clear, consistent invoices with our free <a href="/invoice-generator">invoice generator</a>.</p>`,
  },
  {
    slug: "fractional-cfo",
    title: "Fractional CFO: Cost, Role and When to Hire One",
    description:
      "What a fractional CFO does, typical cost ranges, how it compares with a bookkeeper or accountant, and the signs your small business is ready to hire one.",
    category: "business-finance",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["ai-vs-accountant", "bookkeeping-basics", "cash-flow-forecast"],
    faqs: [
      {
        q: "What is a fractional CFO?",
        a: "A fractional CFO is an experienced finance leader who works for your business part-time, usually on a monthly retainer, instead of as a full-time employee. They handle strategic finance: forecasting, cash planning, pricing analysis, fundraising preparation, lender relationships and reporting to owners or investors. They typically work alongside your bookkeeper and tax accountant rather than replacing them, and may serve several client companies at the same time.",
      },
      {
        q: "How much does a fractional CFO cost?",
        a: "Pricing varies widely by location, experience, industry and hours. Pricing guides published by US fractional CFO firms in 2026 commonly quote monthly retainers of roughly $3,000 to $12,000, with some putting typical ranges higher, and hourly rates of roughly $150 to $500. One-off projects such as a fundraising model are often priced separately. Treat these as rough benchmarks and get written quotes that spell out hours and deliverables.",
      },
      {
        q: "What is the difference between a fractional CFO and a bookkeeper?",
        a: "A bookkeeper records transactions: entering invoices and bills, categorizing expenses and reconciling bank accounts. A fractional CFO uses those records to plan the future: building forecasts, analyzing margins, modelling hiring or pricing decisions and preparing for funding. Bookkeeping looks backward and keeps the records accurate. CFO work looks forward and turns the records into decisions. Most businesses need good bookkeeping before CFO-level analysis is worth paying for.",
      },
      {
        q: "Is a fractional CFO the same as an accountant?",
        a: "Not quite. An accountant, especially a certified or chartered accountant in practice, usually focuses on compliance: preparing year-end accounts, tax returns and advising on tax rules. A fractional CFO focuses on strategy and performance during the year. Some accountants offer advisory or CFO-style services, and some fractional CFOs hold accounting qualifications, so the line can blur. Ask exactly which tasks each person will own to avoid gaps or double payment.",
      },
      {
        q: "When should a small business hire a fractional CFO?",
        a: "Common triggers include preparing to raise investment or a large loan, cash running tight despite growing sales, planning a major expansion or acquisition, needing reliable forecasts for a board or lender, or the owner spending too much time on financial analysis. Many businesses consider it once revenue and complexity outgrow what a bookkeeper and year-end accountant cover, but before a full-time CFO salary makes sense.",
      },
      {
        q: "How many hours does a fractional CFO work?",
        a: "It depends on the engagement. A light advisory arrangement might be a few hours a month for a monthly review meeting and forecast update. A more involved engagement during fundraising or a turnaround could be one or two days a week. Clarify expected hours in the contract and what happens if the work runs over, such as an hourly overage rate or a pause until the next month.",
      },
      {
        q: "Can a fractional CFO help with fundraising?",
        a: "Yes, it is one of the most common reasons to hire one. They can build the financial model, prepare the data room, explain metrics such as burn rate, runway and unit economics, and help answer investor questions during due diligence. They do not guarantee funding. Check whether they have experience with the type of funding you want, such as venture capital, bank debt or asset-based lending.",
      },
      {
        q: "What should I prepare before hiring a fractional CFO?",
        a: "Get your books up to date and reconciled, ideally through the most recent month end. Gather recent profit and loss statements, balance sheets, bank statements, receivables and payables listings, loan documents and any budgets or forecasts. Write down the two or three decisions or problems you most want help with. Clean records mean the CFO spends paid hours on analysis rather than fixing data entry.",
      },
      {
        q: "What is the difference between a fractional CFO and an interim CFO?",
        a: "A fractional CFO works part-time on an ongoing basis, often for months or years. An interim CFO usually works full-time for a defined period, for example to cover a departure, lead a transaction or stabilize a crisis, until a permanent hire is made. Interim engagements are more intensive and typically cost more per month, while fractional arrangements suit businesses that need senior finance input but not every day.",
      },
    ],
    content: `<p>A <strong>fractional CFO</strong> is an experienced chief financial officer who works for your business part-time, usually on a monthly retainer. They handle forecasting, cash planning, pricing analysis, fundraising and lender relationships. Pricing guides from US providers commonly quote around $3,000 to $12,000 a month or $150 to $500 an hour, though fees vary widely.</p>

<p>This guide explains what the role covers, how it compares with a bookkeeper and an accountant, what it typically costs, and the signs that your business is ready. It also includes a simple worked example so you can judge whether the fee is likely to pay for itself.</p>

<h2>What does a fractional CFO do?</h2>

<p>The role is the same as a full-time CFO's, just in fewer hours. Typical responsibilities include:</p>

<ul>
<li><strong>Forecasting and budgeting:</strong> building a rolling <a href="/blog/cash-flow-forecast">cash flow forecast</a> and annual budget, then comparing actual results each month.</li>
<li><strong>Cash management:</strong> tracking <a href="/blog/burn-rate-and-runway">burn rate and runway</a>, improving collections and planning for seasonal gaps.</li>
<li><strong>Profitability analysis:</strong> working out which products, services and clients make money using <a href="/blog/unit-economics">unit economics</a> and margin analysis.</li>
<li><strong>Pricing:</strong> modelling price changes and their effect on volume and profit.</li>
<li><strong>Fundraising and lending:</strong> preparing financial models, investor materials and loan applications, and managing due diligence.</li>
<li><strong>Reporting:</strong> producing clear monthly dashboards for owners, boards or investors, including key metrics such as <a href="/blog/ebitda">EBITDA</a>, gross margin and <a href="/blog/working-capital">working capital</a>.</li>
<li><strong>Systems and controls:</strong> improving the finance process, from invoice approval to the month-end close.</li>
</ul>

<p>They do not usually do the day-to-day data entry, and most do not prepare tax returns. Those tasks stay with a bookkeeper and a tax accountant.</p>

<h2>Fractional CFO vs bookkeeper vs accountant</h2>

<p>Many small businesses confuse these roles or pay one person to do another's job. This comparison shows how they typically differ, although individual providers often offer a mix of services.</p>

<table>
<thead>
<tr><th>Role</th><th>Main focus</th><th>Typical tasks</th><th>Looks</th></tr>
</thead>
<tbody>
<tr><td>Bookkeeper</td><td>Accurate records</td><td>Recording sales invoices and bills, categorizing expenses, bank reconciliation, payroll data</td><td>Backward</td></tr>
<tr><td>Accountant (practice)</td><td>Compliance and tax</td><td>Year-end accounts, tax returns, tax planning, statutory filings</td><td>Backward, with some planning</td></tr>
<tr><td>Controller</td><td>Accuracy and controls</td><td>Month-end close, financial statements, internal controls, audit preparation</td><td>Present</td></tr>
<tr><td>Fractional or outsourced CFO</td><td>Strategy and decisions</td><td>Forecasting, cash planning, pricing, fundraising, investor and lender reporting</td><td>Forward</td></tr>
</tbody>
</table>

<p>The usual sequence is bookkeeping first, then an accountant for tax and year-end, then CFO-level input as the business grows. Paying for strategic finance before your books are reliable usually wastes money, because the first months go on cleaning up data. If you are still setting up records, start with <a href="/blog/bookkeeping-basics">bookkeeping basics</a>. Our guide comparing <a href="/blog/ai-vs-accountant">AI tools and accountants</a> also covers where software can and cannot help.</p>

<h2>Fractional CFO cost: typical pricing</h2>

<p>There is no official fee schedule. The ranges below are drawn from 2026 pricing guides published by US fractional CFO firms and marketplaces, which are not neutral sources, so treat them as rough benchmarks rather than quotes. Fees outside the US, or for less complex businesses, can be lower.</p>

<table>
<thead>
<tr><th>Pricing model</th><th>Commonly quoted range (US, at the time of writing)</th><th>Suits</th></tr>
</thead>
<tbody>
<tr><td>Hourly</td><td>Roughly $150 to $500 an hour, higher for specialist or complex multi-entity work</td><td>Occasional advice or a defined small task</td></tr>
<tr><td>Monthly retainer</td><td>Roughly $3,000 to $12,000 a month is the most cited band; some guides quote typical ranges up to about $18,000</td><td>Ongoing forecasting, reporting and strategic support</td></tr>
<tr><td>Project fee</td><td>Priced per project, depending on scope</td><td>Building a fundraising model, a pricing review or loan application</td></tr>
</tbody>
</table>

<p>Factors that push fees up include company size, number of entities, industry complexity, fundraising activity, investor reporting requirements and how many hours a month you need. Always ask for a written proposal that states expected hours, deliverables, meeting frequency and the rate for extra work.</p>

<p>When comparing quotes, convert each to an effective hourly rate and list what is included. A $4,000 retainer that includes a weekly cash forecast and board reporting may be better value than a $3,000 retainer that covers only a monthly call. Also check whether software subscriptions, travel or third-party costs such as valuation reports are billed on top.</p>

<h2>Worked example: is a fractional CFO worth the cost?</h2>

<p>Consider a services business with $2,000,000 in annual revenue. All figures are illustrative.</p>

<p><strong>Step 1: effective hourly cost.</strong> The quote is a $5,000 monthly retainer for about 25 hours of work.</p>

<p><strong>Effective hourly rate = monthly retainer / hours per month = $5,000 / 25 = $200 an hour.</strong></p>

<p><strong>Step 2: compare with a full-time hire.</strong> The annual retainer is $5,000 x 12 = $60,000. For context, the US Bureau of Labor Statistics reports a median annual wage of $166,570 for financial managers in May 2025, a category that includes CFO-type roles but also more junior managers. A full-time CFO would usually cost more once benefits, payroll taxes and recruitment fees are added. The part-time arrangement costs a fraction of that, in exchange for fewer hours.</p>

<p>Hours matter as much as price. Twenty-five hours a month is enough for monthly reporting, forecasting and a few focused projects, but not for running a finance team day to day. If you need someone in the business most days, an interim or full-time hire may fit better.</p>

<p><strong>Step 3: estimate the return.</strong> Suppose the CFO's margin review identifies underpriced services and a price change lifts gross margin by 4 percentage points on $2,000,000 of revenue. That is $80,000 of extra gross profit a year. They also tighten collections, reducing <a href="/blog/days-sales-outstanding">days sales outstanding</a> from 55 to 40 days. On roughly $5,480 of daily revenue ($2,000,000 / 365), that frees about 15 x $5,480 = $82,200 of cash once, which reduces the need for borrowing.</p>

<p><strong>Step 4: compare.</strong> Using the <a href="/blog/roi-formula">ROI formula</a>, ($80,000 - $60,000) / $60,000 = 33% on the margin gain alone in year one, before counting the one-off cash release. If the margin gain had been only 2 points ($40,000), the return would be negative in year one. The point of the example is that the engagement needs concrete targets. If you cannot name the decisions or problems the CFO will work on, the fee is hard to justify.</p>

<h2>What a typical fractional CFO engagement looks like</h2>

<p>Engagements differ, but many follow a similar pattern in the first few months:</p>

<ol>
<li><strong>Month one: diagnosis.</strong> Review the books, the chart of accounts, existing reports and how cash moves through the business. Agree the main questions the owner wants answered.</li>
<li><strong>Month two: foundations.</strong> Build a rolling 13-week cash forecast and a monthly reporting pack with a handful of key metrics.</li>
<li><strong>Month three onward: decisions.</strong> Use the numbers to work on specific issues such as pricing, hiring plans, a loan application or reducing customer payment times.</li>
</ol>

<p>After that, a common rhythm is a monthly review meeting, an updated forecast and ad hoc support for decisions in between. Hours often rise during fundraising, an acquisition or a cash squeeze, and fall back afterward. A good arrangement lets you scale hours up or down with reasonable notice.</p>

<h2>Signs you are ready to hire one</h2>

<ol>
<li><strong>You are raising money or applying for a large loan.</strong> Investors and lenders expect credible forecasts and clear metrics.</li>
<li><strong>Sales are growing but cash is tight.</strong> This usually points to working capital, pricing or collection problems that need analysis.</li>
<li><strong>You are making big decisions without numbers.</strong> Opening a new location, hiring a team or launching a product line deserves a model.</li>
<li><strong>Your reports arrive late and say little.</strong> If you only see results months after the fact, you are steering blind.</li>
<li><strong>The owner is the finance department.</strong> If you spend evenings building spreadsheets instead of running the business, outsourcing it may be good value.</li>
<li><strong>You have outgrown your bookkeeper's scope</strong> but a full-time CFO salary does not yet make sense.</li>
</ol>

<p>Signs you are probably <em>not</em> ready: your books are months behind, revenue is small and stable, or your main need is tax filing. In those cases, a good bookkeeper and accountant are the better spend.</p>

<h2>How to choose and work with an outsourced CFO</h2>

<ul>
<li><strong>Check relevant experience:</strong> industry, company size and the specific situation, such as fundraising, turnaround or rapid growth.</li>
<li><strong>Ask for references</strong> from current or recent clients of a similar size.</li>
<li><strong>Agree deliverables:</strong> for example, a 13-week cash forecast by month two and a monthly KPI pack within ten working days of month end.</li>
<li><strong>Clarify boundaries:</strong> who handles bookkeeping, payroll and tax, and who signs off payments.</li>
<li><strong>Review after three months</strong> against the targets you set, and adjust hours up or down.</li>
</ul>

<p>If budget is tight, test the relationship first. A one-off project, such as a pricing review or a 12-month forecast, lets you see how someone works before committing to a monthly retainer. Some businesses also split the load, with an accountant handling compliance and a part-time finance lead joining only for quarterly planning sessions. Either way, measure the engagement against the targets you agreed rather than the number of reports produced.</p>

<p>Help them start fast by having clean, consistent sales data. A predictable <a href="/blog/invoice-numbering-system">invoice numbering system</a> and complete invoices for every sale make revenue analysis and receivables reporting much easier.</p>

<h2>Questions to ask before you sign</h2>

<ul>
<li>Which businesses of our size and industry have you worked with, and what changed as a result?</li>
<li>How many clients do you work with at once, and how quickly do you respond?</li>
<li>Who does the work: you personally, or junior staff at your firm?</li>
<li>What exactly will we receive each month, and by when?</li>
<li>Which software do you need access to, and how will our financial data be protected?</li>
<li>What are the notice period and the terms for ending the engagement?</li>
<li>Do you carry professional indemnity insurance?</li>
</ul>

<p>Clear answers matter more than the lowest fee. A cheaper provider who delivers late or generic reports can cost more in missed decisions than a more expensive one who gives you a forecast you trust.</p>

<h2>What this means for freelancers and very small businesses</h2>

<p>Most freelancers and micro-businesses do not need CFO-level support. Your priorities are simpler: invoice promptly, track expenses, set aside tax, and understand your <a href="/blog/break-even-point">break-even point</a>. A few hours of paid advice from an accountant once a year is often enough. As revenue, staff and complexity grow, the case for part-time strategic finance grows with them.</p>

<p>If you are a freelancer approaching the point where you hire staff or take on larger contracts, a single paid session with an experienced finance adviser can still be worthwhile, for example to sanity-check pricing, set a cash reserve target or plan for tax payments. That is a far smaller commitment than a monthly retainer.</p>

<p>Whatever stage you are at, tax and legal questions depend on your location and structure, so check with a qualified accountant or adviser before acting on financial strategy.</p>

<h2>Conclusion</h2>

<p>A fractional CFO gives a growing business senior financial thinking without a full-time salary. Expect fees to vary widely, get a clear scope in writing and make sure your books are clean first so paid hours go into decisions, not data cleanup. The foundation is always accurate sales records, which you can create quickly with our free <a href="/invoice-generator">invoice generator</a>.</p>`,
  },
];
