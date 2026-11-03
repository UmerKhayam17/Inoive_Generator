import type { PostDraft } from "../blog";

export const FINANCIAL_STATEMENTS_2026_POSTS: PostDraft[] = [
  {
    slug: "pro-forma-financial-statements",
    title: "Pro Forma Financial Statements: Template and Example",
    description:
      "Pro forma financial statements explained: build a projected income statement, balance sheet and cash flow for a loan or expansion, with an example.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["business-plan-template", "profit-and-loss-statement", "cash-flow-statement"],
    faqs: [
      {
        q: "What are pro forma financial statements?",
        a: "Pro forma financial statements are financial statements prepared on a hypothetical basis: either projections of future results, or historical results adjusted as if a planned event had already happened, such as a loan, an acquisition or a new location. They usually include an income statement, a balance sheet and a cash flow statement. Small businesses most often prepare them for bank loans, investors, business plans and major decisions like hiring or expanding.",
      },
      {
        q: "What is the difference between pro forma and GAAP financial statements?",
        a: "GAAP financial statements report what actually happened, following accounting standards, and can be reviewed or audited. Pro forma statements show what would happen, or would have happened, under stated assumptions. They are estimates, not historical records. Public companies that present pro forma or adjusted earnings in announcements are subject to SEC rules on non-GAAP measures, including reconciliation to the nearest GAAP figure. For a small business, the key is to label projections clearly and list the assumptions.",
      },
      {
        q: "How many years should pro forma statements cover?",
        a: "For a business plan or SBA loan application, three to five years is typical. The SBA's business plan guidance suggests a five-year outlook, with quarterly or even monthly projections for the first year. Lenders focus most on the first 12 to 24 months, because that is when the loan must start being repaid. For an internal decision, such as whether to hire, 12 to 18 months of monthly projections is usually enough.",
      },
      {
        q: "Is a pro forma invoice the same as pro forma financial statements?",
        a: "No. A pro forma invoice is a preliminary bill or quote sent to a buyer before goods are shipped or work is done, often used for customs or for a customer's purchase approval. It is not a demand for payment and is not recorded as revenue. Pro forma financial statements are projected or adjusted financial reports for the whole business. The only thing they share is the Latin phrase, meaning roughly as a matter of form.",
      },
      {
        q: "What assumptions do lenders look at most closely?",
        a: "Lenders focus on revenue growth, gross margin, payroll and the collection period on invoices. They compare your growth assumption with your history and industry norms, check whether margins match your past statements, and look at whether cash flow covers loan payments with room to spare. Realistic, documented assumptions carry more weight than ambitious numbers, so link each assumption to evidence such as signed contracts, quotes or past results.",
      },
      {
        q: "Can I prepare pro forma statements myself?",
        a: "Yes. A spreadsheet with linked tabs for assumptions, income statement, balance sheet and cash flow is enough for most small businesses. Start from your actual statements, build revenue from drivers such as customers and price, and make sure the balance sheet balances every period. For a large loan, investor round or acquisition, having an accountant review the model is worth the cost, since errors in linking the three statements are common.",
      },
    ],
    content: `
<p>Pro forma financial statements are projected or adjusted versions of your income statement, balance sheet and cash flow statement, built on clearly stated assumptions. You prepare them to show what your business will look like after something changes: a new loan, a second location, a big hire, or simply the next three years of growth. Banks, SBA lenders and investors ask for them because they show not only whether the plan is profitable, but whether it generates enough cash to pay its debts.</p>

<p>This guide covers the two kinds of pro forma statements, the assumptions that matter most, a simple template structure, and a worked example of a bakery planning a second location. It also explains the difference from a pro forma invoice, which trips up many first-time borrowers.</p>

<h2>Two kinds of pro forma financial statements</h2>
<table><thead><tr><th>Type</th><th>What it shows</th><th>Typical use</th></tr></thead><tbody>
<tr><td>Forward-looking (projected)</td><td>Expected results for future periods, based on assumptions</td><td>Business plans, loan applications, budgets, investor pitches</td></tr>
<tr><td>Historical adjusted</td><td>Past results restated as if an event had already happened</td><td>Acquisitions, refinancing, showing results without one-off items</td></tr>
</tbody></table>
<p>A small business owner usually needs the forward-looking type. The historical type matters when you buy another business: a lender will want to see your combined results as if the acquisition had happened at the start of the year.</p>
<p>Note the difference from a <a href="/blog/proforma-invoice-guide">pro forma invoice</a>, which is a preliminary bill sent to a customer before delivery. It is a sales document, not a financial statement.</p>

<h2>What goes into a pro forma package</h2>
<ol>
<li><strong>Assumptions page.</strong> Every key driver, with its source: growth rate, prices, customer numbers, gross margin, wages, rent, payment terms, loan terms.</li>
<li><strong>Pro forma income statement.</strong> Projected revenue, cost of goods sold, operating expenses, interest, taxes and net income. Our <a href="/blog/profit-and-loss-statement">profit and loss statement guide</a> shows the layout.</li>
<li><strong>Pro forma balance sheet.</strong> Projected assets, liabilities and equity at each period end. See the structure in our <a href="/blog/balance-sheet-small-business">small business balance sheet guide</a>.</li>
<li><strong>Pro forma cash flow statement.</strong> Operating, investing and financing cash flows, ending with projected cash. This is the statement lenders read first; our <a href="/blog/cash-flow-statement">cash flow statement guide</a> explains each section.</li>
<li><strong>Capital expenditure schedule</strong> for equipment and fit-out.</li>
<li><strong>Debt schedule</strong> showing loan balance, interest and principal payments.</li>
<li><strong>Break-even and sensitivity</strong> analysis: what happens if sales come in 15% below plan.</li>
</ol>
<p>The SBA's <a href="https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" target="_blank" rel="noopener noreferrer">guidance on writing a business plan</a> asks for forecasted income statements, balance sheets, cash flow statements and capital expenditure budgets for the next five years, with quarterly or monthly detail for the first year, plus three to five years of historical statements if the business already exists.</p>

<h2>How to build pro forma statements: step by step</h2>
<ol>
<li><strong>Start from actuals.</strong> Use the last 12 to 36 months of real statements as the base. Projections disconnected from history are the first thing a lender questions.</li>
<li><strong>Forecast revenue from drivers,</strong> not a single growth percentage. Customers x average sale x frequency, or units x price. Our <a href="/blog/sales-forecast">sales forecast guide</a> covers methods.</li>
<li><strong>Project direct costs</strong> as a percentage of revenue based on your historical gross margin, adjusted for known price changes.</li>
<li><strong>List operating expenses</strong> line by line: payroll with burden, rent, insurance, software, marketing, professional fees.</li>
<li><strong>Add the change you are modeling:</strong> the loan, the new location, the equipment purchase, the new hire.</li>
<li><strong>Build the balance sheet</strong> using working capital assumptions: receivables at your real collection days, inventory at your turnover rate, payables at your supplier terms.</li>
<li><strong>Derive the cash flow statement</strong> from changes in the balance sheet plus net income, and check that ending cash matches the balance sheet.</li>
<li><strong>Test scenarios.</strong> Base, downside and upside. Show the lender you can still repay in the downside.</li>
</ol>

<h2>Worked example: a bakery's pro forma for a second location</h2>
<p>The figures are illustrative. A bakery with $620,000 of annual revenue plans a second shop, financed with a $150,000 equipment and build-out loan at 9% over seven years. Its owner prepares a three-year pro forma income statement for the combined business.</p>
<table><thead><tr><th>Line</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead><tbody>
<tr><td>Revenue: original shop</td><td>$640,000</td><td>$660,000</td><td>$680,000</td></tr>
<tr><td>Revenue: new shop (ramp-up)</td><td>$300,000</td><td>$420,000</td><td>$460,000</td></tr>
<tr><td><strong>Total revenue</strong></td><td><strong>$940,000</strong></td><td><strong>$1,080,000</strong></td><td><strong>$1,140,000</strong></td></tr>
<tr><td>Cost of goods sold (34%)</td><td>$319,600</td><td>$367,200</td><td>$387,600</td></tr>
<tr><td>Gross profit</td><td>$620,400</td><td>$712,800</td><td>$752,400</td></tr>
<tr><td>Payroll and burden</td><td>$370,000</td><td>$405,000</td><td>$420,000</td></tr>
<tr><td>Rent and utilities (two shops)</td><td>$118,000</td><td>$121,000</td><td>$124,000</td></tr>
<tr><td>Other operating expenses</td><td>$62,000</td><td>$66,000</td><td>$69,000</td></tr>
<tr><td>Depreciation</td><td>$21,000</td><td>$21,000</td><td>$21,000</td></tr>
<tr><td>Interest on new loan</td><td>$12,800</td><td>$11,300</td><td>$9,700</td></tr>
<tr><td><strong>Pre-tax profit</strong></td><td><strong>$36,600</strong></td><td><strong>$88,500</strong></td><td><strong>$108,700</strong></td></tr>
</tbody></table>
<p>The pro forma cash flow for Year 1 then adds back depreciation ($21,000), subtracts loan principal (about $16,100 in Year 1 on these terms) and owner draws, and shows whether cash stays positive every month during the ramp-up. If the new shop opens in March but takes until July to break even, monthly detail for Year 1 reveals the cash dip that an annual figure hides. That is exactly why lenders want month-by-month projections for the first year.</p>
<p>The key assumptions page would state: new shop revenue ramps from $18,000 in month 1 to $35,000 by month 9, based on the original shop's opening history; COGS at 34% matches the last two years' average; two new full-time staff and three part-time; wholesale customers pay on net 30 terms with actual collection around 35 days.</p>

<h2>How the three pro forma statements link together</h2>
<p>The most common technical error in a pro forma package is three statements that do not talk to each other. Every period, these links must hold:</p>
<table><thead><tr><th>Link</th><th>From</th><th>To</th></tr></thead><tbody>
<tr><td>Net income</td><td>Income statement</td><td>Top of the cash flow statement and into retained earnings on the balance sheet</td></tr>
<tr><td>Depreciation</td><td>Income statement</td><td>Added back in operating cash flow; reduces fixed assets on the balance sheet</td></tr>
<tr><td>Change in receivables, inventory, payables</td><td>Balance sheet</td><td>Working capital adjustments in operating cash flow</td></tr>
<tr><td>Equipment purchases</td><td>Capex schedule</td><td>Investing cash flow; increases fixed assets</td></tr>
<tr><td>Loan drawdown and principal payments</td><td>Debt schedule</td><td>Financing cash flow; changes the loan balance</td></tr>
<tr><td>Interest</td><td>Debt schedule</td><td>Income statement expense (and operating cash outflow)</td></tr>
<tr><td>Ending cash</td><td>Cash flow statement</td><td>Cash on the balance sheet</td></tr>
</tbody></table>
<p>If the balance sheet balances in every period and ending cash matches, the model is almost certainly linked correctly. Build a check row that shows assets minus liabilities minus equity, and make sure it reads zero across every column before you send anything to a lender.</p>
<p>Keep the assumptions on one tab and have every other tab reference them. When the lender asks what happens if the new shop reaches only 80% of projected sales, you change one cell and every statement updates, rather than editing dozens of numbers by hand and risking a mismatch.</p>

<h2>Pro forma adjustments and "adjusted" earnings</h2>
<p>When you sell a business or apply for financing, buyers and lenders often look at earnings adjusted for one-off items: a lawsuit settlement, a one-time consulting project, an owner's above-market salary. These adjustments are a form of historical pro forma statement. Each adjustment must be documented and defensible. Public companies are held to strict rules here: when they publish adjusted or pro forma figures, SEC rules on non-GAAP measures require them to present the comparable GAAP figure with equal or greater prominence and a reconciliation, as summarized in this <a href="https://capx.cooley.com/2025/04/22/non-gaap-financial-metrics-and-disclosures-regulation-g-and-item-10e-of-regulation-s-k/" target="_blank" rel="noopener noreferrer">overview of Regulation G and non-GAAP disclosures</a>. A small private business is not bound by those rules, but following the same discipline makes your numbers more credible. Related measures like EBITDA are common in these discussions.</p>

<h2>Common mistakes in pro forma statements</h2>
<ul>
<li><strong>Hockey-stick revenue</strong> with no evidence. Tie growth to capacity, marketing spend and history.</li>
<li><strong>Forgetting working capital.</strong> Growth ties up cash in receivables and inventory. A profitable plan can still run out of cash. See our <a href="/blog/working-capital">working capital guide</a>.</li>
<li><strong>Assuming customers pay on terms.</strong> Use real collection days, not the "net 30" printed on your invoices.</li>
<li><strong>Leaving out owner pay</strong> or taxes, which overstates cash available for debt.</li>
<li><strong>Balance sheet that does not balance.</strong> A sign the statements are not linked; lenders notice.</li>
<li><strong>No downside case.</strong> Lenders will build one themselves if you do not.</li>
<li><strong>Optimistic startup costs.</strong> Add a contingency of 10% to 20% for build-out, permits and opening inventory.</li>
</ul>

<h2>Keeping pro forma statements useful after the loan closes</h2>
<p>Once the money arrives, the pro forma becomes your budget. Compare actual results with it every month and update the outlook with a <a href="/blog/rolling-forecast">rolling forecast</a> rather than letting the original projections gather dust. Lenders with covenants will ask for actual statements, and showing that you track against the plan builds trust for the next request. Measuring <a href="/blog/free-cash-flow">free cash flow</a> each quarter shows how much cash the business generates after equipment spending, which is the number that ultimately repays debt.</p>
<p>The most reliable revenue assumption is the one backed by invoices you have actually sent and been paid on. Consistent, numbered invoices make your sales history easy to verify. If you are not invoicing systematically yet, the <a href="/invoice-generator">free invoice generator</a> is a quick way to start.</p>

<h2>Pro forma statements for an SBA loan application</h2>
<p>For an SBA 7(a) or 504 application, expect the lender to ask for projections alongside tax returns and historical statements. They will calculate debt service coverage: cash available for debt payments divided by the annual loan payments. Show this ratio in your package rather than waiting for the lender to compute it. Our <a href="/blog/sba-loans">SBA loans guide</a> covers the programs and documents, and the <a href="/blog/business-plan-template">business plan template</a> shows where the financial section fits.</p>

<p>Pro forma financial statements are a planning tool as much as a lending requirement: building them forces you to test whether an idea works in cash, not just on paper. Once your plan is under way, keep the revenue side flowing with professional invoices from the <a href="/invoice-generator">free invoice generator</a>, with no sign-up and instant PDF download.</p>
`,
  },
  {
    slug: "operating-cash-flow",
    title: "Operating Cash Flow Formula With Examples",
    description:
      "Operating cash flow formula explained: indirect and direct methods, worked examples, OCF ratios, and why profitable small businesses still run short of cash.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["cash-flow-statement", "working-capital", "days-sales-outstanding"],
    faqs: [
      {
        q: "What is the formula for operating cash flow?",
        a: "Using the indirect method, operating cash flow equals net income plus non-cash expenses such as depreciation and amortization, plus or minus changes in working capital. Increases in receivables and inventory reduce operating cash flow, while increases in payables and accrued expenses add to it. Using the direct method, it equals cash received from customers minus cash paid to suppliers, employees, interest and taxes. Both methods give the same total.",
      },
      {
        q: "Can operating cash flow be higher than net income?",
        a: "Yes, and it often is in healthy businesses with significant depreciation or with customers who pay deposits upfront. Depreciation reduces net income but uses no cash, so it is added back. Collecting old receivables or stretching supplier payments also lifts operating cash flow above profit. If operating cash flow is consistently far higher than profit, check whether the business is delaying payments to suppliers in a way that cannot last.",
      },
      {
        q: "Why is my operating cash flow negative when I am profitable?",
        a: "Usually because cash is tied up in working capital. Fast-growing businesses invoice more each month, so receivables grow faster than collections, and product businesses buy inventory ahead of sales. Customer deposits being used up, prepaying expenses or paying down supplier balances also reduce operating cash flow. Look at the changes in receivables, inventory and payables on your cash flow statement to find which item is absorbing the cash.",
      },
      {
        q: "Is interest paid included in operating cash flow?",
        a: "Under US GAAP, interest paid and income taxes paid are classified as operating activities, so they reduce operating cash flow. Principal repayments on loans are financing activities and do not. Under IFRS, companies can choose whether to present interest paid as operating or financing, so comparisons between companies reporting under different frameworks need care. For a small US business, include interest and taxes in operating cash flow.",
      },
      {
        q: "What is a good operating cash flow ratio?",
        a: "The operating cash flow ratio divides operating cash flow by current liabilities. A ratio above 1.0 means the business generated enough cash from operations in the period to cover all its short-term obligations, which lenders view favorably. Below 1.0 is not automatically a problem, especially for seasonal businesses, but a ratio that falls year after year signals growing reliance on borrowing or on cash reserves to pay bills.",
      },
      {
        q: "Are owner draws included in operating cash flow?",
        a: "No. For a sole proprietorship or partnership, owner draws are distributions of equity and belong in financing activities, not operating activities. That is why a business can show strong operating cash flow while the bank balance still falls: the owner is taking the cash out. For an S corporation, the owner's salary paid through payroll is an operating expense, while distributions are financing.",
      },
    ],
    content: `
<p>Operating cash flow (OCF) is the cash your business generates from its normal day-to-day activities: selling, delivering, collecting from customers and paying suppliers, staff, interest and taxes. The usual formula starts with net income, adds back non-cash expenses like depreciation, and adjusts for changes in receivables, inventory and payables. It is the clearest test of whether profit is turning into money in the bank.</p>

<p>Many small businesses discover the gap between profit and cash the hard way: the profit and loss statement looks good, yet there is not enough cash to pay suppliers. This guide explains the operating cash flow formula, works through both the indirect and direct methods with the same example, and shows the ratios lenders use, plus practical ways to improve OCF through invoicing and collections.</p>

<h2>Operating cash flow formula: indirect method</h2>
<p><strong>Operating cash flow = Net income + Non-cash expenses - Increase in current operating assets + Increase in current operating liabilities</strong></p>
<p>In practice:</p>
<ul>
<li><strong>Add back</strong> depreciation, amortization, impairment, and losses on asset sales (subtract gains).</li>
<li><strong>Subtract increases</strong> (add decreases) in accounts receivable, inventory and prepaid expenses.</li>
<li><strong>Add increases</strong> (subtract decreases) in accounts payable, accrued expenses and customer deposits.</li>
</ul>
<p>Accounting standards in the US encourage the direct method but most businesses use the indirect method, and either way a reconciliation from net income to operating cash flow is required, as Deloitte's <a href="https://dart.deloitte.com/USDART/home/codification/presentation/asc230-10/roadmap-statement-cash-flow/chapter-3-format-presentation/3-1-form-content-statement-cash" target="_blank" rel="noopener noreferrer">roadmap on the statement of cash flows</a> explains.</p>

<h2>Worked example: indirect method</h2>
<p>The figures are illustrative. A small commercial cleaning company with $900,000 in annual revenue reports the following for the year:</p>
<table><thead><tr><th>Item</th><th>Amount</th><th>Effect on OCF</th></tr></thead><tbody>
<tr><td>Net income</td><td>$84,000</td><td>Starting point</td></tr>
<tr><td>Depreciation on vans and equipment</td><td>$18,000</td><td>+$18,000</td></tr>
<tr><td>Accounts receivable rose from $96,000 to $118,000</td><td>+$22,000</td><td>-$22,000</td></tr>
<tr><td>Supplies inventory rose</td><td>+$9,000</td><td>-$9,000</td></tr>
<tr><td>Prepaid insurance fell</td><td>-$1,000</td><td>+$1,000</td></tr>
<tr><td>Accounts payable rose</td><td>+$6,000</td><td>+$6,000</td></tr>
<tr><td>Accrued wages rose</td><td>+$3,000</td><td>+$3,000</td></tr>
<tr><td><strong>Operating cash flow</strong></td><td></td><td><strong>$81,000</strong></td></tr>
</tbody></table>
<p>Operating cash flow of $81,000 is close to net income, which is healthy. But note the $22,000 increase in receivables: the company won two new office contracts on net 45 terms, and collection is slow. That single item consumed more cash than depreciation added back. Our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a> explains how receivables drive this effect.</p>

<h2>Operating cash flow formula: direct method</h2>
<p>The direct method lists actual cash receipts and payments:</p>
<p><strong>Operating cash flow = Cash received from customers - Cash paid to suppliers and employees - Interest paid - Income taxes paid</strong></p>
<p>For the same cleaning company:</p>
<table><thead><tr><th>Line</th><th>Amount</th></tr></thead><tbody>
<tr><td>Cash received from customers ($900,000 revenue - $22,000 increase in receivables)</td><td>$878,000</td></tr>
<tr><td>Cash paid to suppliers and employees</td><td>($772,000)</td></tr>
<tr><td>Interest paid</td><td>($6,000)</td></tr>
<tr><td>Income taxes paid</td><td>($19,000)</td></tr>
<tr><td><strong>Operating cash flow</strong></td><td><strong>$81,000</strong></td></tr>
</tbody></table>
<p>The direct method is easier for owners to read because it looks like a bank statement summary. The indirect method is better at explaining why cash differs from profit. Use whichever helps you manage; your accountant will prepare the formal statement. Our <a href="/blog/cash-flow-statement">cash flow statement guide</a> shows how operating cash flow fits with investing and financing activities.</p>

<h2>What counts as operating, investing or financing?</h2>
<table><thead><tr><th>Cash flow</th><th>Category (US GAAP)</th></tr></thead><tbody>
<tr><td>Customer payments on invoices</td><td>Operating</td></tr>
<tr><td>Payments to suppliers, staff, rent, utilities</td><td>Operating</td></tr>
<tr><td>Interest paid on loans</td><td>Operating</td></tr>
<tr><td>Income taxes paid</td><td>Operating</td></tr>
<tr><td>Buying equipment or vehicles</td><td>Investing</td></tr>
<tr><td>Selling old equipment</td><td>Investing</td></tr>
<tr><td>Loan proceeds and principal repayments</td><td>Financing</td></tr>
<tr><td>Owner contributions and draws, dividends paid</td><td>Financing</td></tr>
</tbody></table>
<p>Owner draws are the most common source of confusion. A sole proprietor's draws are not an operating expense, so they do not reduce OCF, but they do reduce the bank balance. Our guide on <a href="/blog/how-to-pay-yourself-as-a-business-owner">how to pay yourself as a business owner</a> covers the options.</p>

<h2>Ratios built on operating cash flow</h2>
<table><thead><tr><th>Ratio</th><th>Formula</th><th>Example (cleaning company)</th><th>What it tells you</th></tr></thead><tbody>
<tr><td>Operating cash flow margin</td><td>OCF / Revenue</td><td>$81,000 / $900,000 = 9.0%</td><td>Cash generated per dollar of sales</td></tr>
<tr><td>Cash conversion of profit</td><td>OCF / Net income</td><td>$81,000 / $84,000 = 0.96</td><td>How much profit turns into cash</td></tr>
<tr><td>Operating cash flow ratio</td><td>OCF / Current liabilities</td><td>$81,000 / $70,000 = 1.16</td><td>Ability to cover short-term obligations</td></tr>
</tbody></table>
<p>A cash conversion ratio persistently below about 0.8 is a warning sign: profit is being absorbed by growing receivables or inventory. Track it alongside the ratios in our <a href="/blog/financial-ratios-small-business">financial ratios guide</a>. Subtract capital spending from OCF and you get <a href="/blog/free-cash-flow">free cash flow</a>, the cash left for debt repayment, owner distributions and growth.</p>

<h2>Operating cash flow vs net income vs EBITDA</h2>
<table><thead><tr><th>Measure</th><th>Includes non-cash items?</th><th>Includes working capital changes?</th><th>Includes interest and taxes?</th><th>Example (cleaning company)</th></tr></thead><tbody>
<tr><td>Net income</td><td>Yes (depreciation deducted)</td><td>No</td><td>Yes</td><td>$84,000</td></tr>
<tr><td>EBITDA</td><td>No</td><td>No</td><td>No</td><td>$127,000</td></tr>
<tr><td>Operating cash flow</td><td>No (added back)</td><td>Yes</td><td>Yes (US GAAP)</td><td>$81,000</td></tr>
</tbody></table>
<p>EBITDA here is net income plus interest ($6,000), taxes ($19,000) and depreciation ($18,000). It is $46,000 higher than operating cash flow, mostly because it ignores the cash tied up in receivables and the cash paid for interest and taxes. That is why lenders who start from EBITDA still ask for the cash flow statement.</p>

<h2>How lenders use operating cash flow</h2>
<p>Banks and SBA lenders size loans around cash available for debt service. A common measure is the debt service coverage ratio (DSCR): cash flow available for debt payments divided by annual principal and interest. Many lenders look for a ratio comfortably above 1.0, often 1.25 or higher, though requirements vary by lender and loan type. Using the cleaning company's figures, operating cash flow before interest is $87,000 ($81,000 plus the $6,000 of interest already deducted). If the company has $18,000 of annual principal and interest payments, its coverage is about 4.8 times, which is strong. A business with growing receivables and falling OCF will see this ratio drop even while reported profit rises, so watch OCF before you apply for credit.</p>

<h2>Operating cash flow in a seasonal business</h2>
<p>Seasonal businesses often have negative operating cash flow for several months a year. A landscaper buys materials and pays crews in spring, invoices through summer, and collects into autumn. A gift retailer builds inventory in September and October and collects in December. Annual OCF may be healthy while monthly OCF swings from strongly negative to strongly positive.</p>
<p>For these businesses, monthly OCF matters more than the annual figure. Build a month-by-month forecast so you know the lowest point of the cash cycle and how much reserve or credit line you need to get through it. Taking deposits before the season and invoicing in stages, rather than at the end of a long job, flattens the curve considerably.</p>

<h2>Why profitable businesses run out of cash</h2>
<ul>
<li><strong>Growth.</strong> More sales mean more receivables and inventory before customers pay.</li>
<li><strong>Slow collections.</strong> Every extra day of <a href="/blog/days-sales-outstanding">days sales outstanding</a> on $900,000 of annual sales ties up roughly $2,466 of cash.</li>
<li><strong>Prepaying suppliers</strong> or buying inventory in bulk for a discount.</li>
<li><strong>Accrual timing.</strong> Revenue recognized on delivery but invoiced weeks later. See <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a>.</li>
<li><strong>Taxes on profit not yet collected,</strong> including quarterly estimated payments.</li>
</ul>

<h2>How to improve operating cash flow: step by step</h2>
<ol>
<li><strong>Invoice the day work is done.</strong> Delayed invoicing is the most common and cheapest problem to fix.</li>
<li><strong>Shorten payment terms</strong> where you can: net 15 instead of net 30, or due on receipt for small jobs.</li>
<li><strong>Take deposits</strong> on large projects and use milestone billing.</li>
<li><strong>Make paying easy:</strong> card, ACH and payment links on every invoice.</li>
<li><strong>Follow up systematically</strong> with reminders at set intervals after the due date.</li>
<li><strong>Negotiate supplier terms</strong> that match your customer terms, without paying late.</li>
<li><strong>Keep inventory lean</strong>; reorder based on actual usage rather than bulk discounts alone.</li>
<li><strong>Review the cash flow statement monthly,</strong> not just the profit and loss.</li>
</ol>
<p>In the cleaning company example, cutting average collection time across all customers from 52 days to 45 days would release roughly $17,000 of cash (7 days x about $2,466 of daily sales). Clear invoices with obvious due dates and payment options, created in the <a href="/invoice-generator">free invoice generator</a>, are a simple start.</p>

<h2>A five-minute monthly operating cash flow check</h2>
<p>You do not need a full cash flow statement every month to keep an eye on OCF. Take net income from your profit and loss report, add depreciation, then compare month-end balances with the prior month for three accounts: receivables, inventory and payables. If receivables or inventory rose by more than payables, cash lagged profit, and you know exactly which balance to investigate. Write the result on a single line in a running spreadsheet. After six months, you will see whether OCF is tracking profit or drifting away from it, often well before the bank balance makes the problem obvious.</p>

<h2>Common mistakes when calculating operating cash flow</h2>
<ul>
<li><strong>Getting the sign wrong</strong> on working capital changes. An increase in receivables reduces cash.</li>
<li><strong>Including loan principal</strong> in operating activities. Only interest belongs there.</li>
<li><strong>Treating equipment purchases as operating</strong> because they were paid from the operating account.</li>
<li><strong>Using EBITDA as a cash proxy.</strong> <a href="/blog/ebitda">EBITDA</a> ignores working capital, interest and taxes, so it can be much higher than OCF.</li>
<li><strong>Looking at one month alone.</strong> Seasonal swings in receivables can distort a single month; look at trailing 12 months too.</li>
</ul>

<p>Operating cash flow tells you whether the business funds itself. Profit is the opinion; cash is the fact. The fastest lever you control is how quickly invoices go out and get paid, so make billing a same-day habit with the <a href="/invoice-generator">free invoice generator</a>: no sign-up, and every invoice downloads as a PDF ready to send.</p>
`,
  },
  {
    slug: "free-cash-flow",
    title: "Free Cash Flow: Formula and Examples",
    description:
      "Free cash flow formula explained with examples: FCF from operating cash flow, levered vs unlevered FCF, FCF margin, and how owners can use it to plan.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["capex-vs-opex", "cash-flow-statement", "ebitda"],
    faqs: [
      {
        q: "What is the simplest free cash flow formula?",
        a: "Free cash flow equals operating cash flow minus capital expenditures. Operating cash flow comes from the operating section of the cash flow statement, and capital expenditures are the cash spent on equipment, vehicles, property and other long-term assets, found in the investing section. The result is the cash the business generated after maintaining and expanding its asset base, available for debt repayment, owner distributions or saving.",
      },
      {
        q: "What is the difference between levered and unlevered free cash flow?",
        a: "Unlevered free cash flow is calculated before interest payments, as if the business had no debt, so it shows cash available to all capital providers. It is used in business valuations. Levered free cash flow is after interest and debt repayments, showing cash left for the owners. A heavily indebted business can have strong unlevered free cash flow but weak levered free cash flow, which matters when deciding how much owners can safely draw.",
      },
      {
        q: "Can free cash flow be negative?",
        a: "Yes. Free cash flow is negative when capital spending exceeds operating cash flow, or when operating cash flow itself is negative. A single negative year after a big equipment purchase or expansion is normal and can be a sign of investment. Repeated negative free cash flow without growth to show for it means the business depends on loans or owner money to survive, which is not sustainable.",
      },
      {
        q: "Is free cash flow the same as profit?",
        a: "No. Profit is calculated on an accrual basis and includes non-cash items such as depreciation, while ignoring the timing of collections and the cash cost of buying equipment. Free cash flow measures actual cash generated after capital spending. A business can be profitable with negative free cash flow when it is growing quickly or investing heavily, and it can show a small profit with strong free cash flow when depreciation is high.",
      },
      {
        q: "What is a good free cash flow margin?",
        a: "Free cash flow margin is free cash flow divided by revenue. It varies widely by industry: asset-light service businesses can convert a large share of revenue into free cash flow, while capital-intensive businesses such as trucking or manufacturing convert much less. The most useful comparison is your own trend over several years and against similar businesses. A steady or rising margin suggests the business is becoming more efficient at turning sales into spendable cash.",
      },
      {
        q: "Does bonus depreciation increase free cash flow?",
        a: "Indirectly. Depreciation itself is non-cash, so the deduction does not change cash on its own. But deducting the full cost of equipment in the year of purchase, under bonus depreciation or Section 179, lowers taxable income and therefore taxes paid, which raises operating cash flow and free cash flow in that year. Taxes in later years are higher because there is less depreciation left, so the benefit is mainly one of timing.",
      },
    ],
    content: `
<p>Free cash flow (FCF) is the cash a business has left after paying its operating costs and investing in the equipment, vehicles and property it needs. The basic formula is operating cash flow minus capital expenditures. It is the money genuinely available to repay loans, pay owners, build a cash reserve or fund growth, which is why lenders, buyers and investors watch it more closely than profit.</p>

<p>This guide explains the main free cash flow formulas, works through an example for a small service business, shows the difference between levered and unlevered FCF, and covers how small business owners can use FCF to decide how much to draw, borrow or invest.</p>

<h2>Free cash flow formulas</h2>
<table><thead><tr><th>Version</th><th>Formula</th><th>Used for</th></tr></thead><tbody>
<tr><td>Basic FCF</td><td>Operating cash flow - Capital expenditures</td><td>Everyday management, lending</td></tr>
<tr><td>Unlevered FCF (to the firm)</td><td>EBIT x (1 - tax rate) + Depreciation and amortization - Capital expenditures - Increase in net working capital</td><td>Business valuation, comparing companies with different debt</td></tr>
<tr><td>Levered FCF (to equity)</td><td>Basic FCF - Debt principal repayments + New borrowing</td><td>Owner distributions, dividends</td></tr>
<tr><td>FCF margin</td><td>FCF / Revenue</td><td>Efficiency over time</td></tr>
</tbody></table>
<p>Because interest is an operating cash flow under US GAAP, basic FCF is already after interest. Free cash flow has no single official definition, so always state how you calculated it. Public companies that report it must explain the calculation and reconcile it to a GAAP measure under SEC non-GAAP rules, as described in this <a href="https://capx.cooley.com/2025/04/22/non-gaap-financial-metrics-and-disclosures-regulation-g-and-item-10e-of-regulation-s-k/" target="_blank" rel="noopener noreferrer">summary of Regulation G and Item 10(e)</a>.</p>

<h2>Worked example: basic free cash flow</h2>
<p>The figures are illustrative. A commercial cleaning company with $900,000 of revenue has operating cash flow of $81,000 for the year (see our <a href="/blog/operating-cash-flow">operating cash flow guide</a> for how that number was built). During the year it bought a van and floor equipment for $35,000.</p>
<table><thead><tr><th>Line</th><th>Amount</th></tr></thead><tbody>
<tr><td>Operating cash flow</td><td>$81,000</td></tr>
<tr><td>Capital expenditures (van, floor machines)</td><td>($35,000)</td></tr>
<tr><td><strong>Free cash flow</strong></td><td><strong>$46,000</strong></td></tr>
<tr><td>Loan principal repaid</td><td>($12,000)</td></tr>
<tr><td><strong>Levered free cash flow available to owner</strong></td><td><strong>$34,000</strong></td></tr>
<tr><td>FCF margin ($46,000 / $900,000)</td><td>5.1%</td></tr>
</tbody></table>
<p>Net income was $84,000, but the owner can only safely draw about $34,000 without reducing the bank balance or borrowing. If the owner draws $60,000, as the profit figure might suggest, cash falls by $26,000 in the year. This gap between profit and free cash flow is behind many small business cash crunches.</p>

<h2>Worked example: unlevered free cash flow</h2>
<p>For a valuation, a buyer would calculate unlevered FCF, ignoring how the business is financed. Assume operating profit (EBIT) of $109,000 and an assumed 25% tax rate for illustration:</p>
<table><thead><tr><th>Line</th><th>Amount</th></tr></thead><tbody>
<tr><td>EBIT</td><td>$109,000</td></tr>
<tr><td>Less taxes at 25%</td><td>($27,250)</td></tr>
<tr><td>Plus depreciation</td><td>$18,000</td></tr>
<tr><td>Less capital expenditures</td><td>($35,000)</td></tr>
<tr><td>Less increase in net working capital</td><td>($21,000)</td></tr>
<tr><td><strong>Unlevered free cash flow</strong></td><td><strong>$43,750</strong></td></tr>
</tbody></table>
<p>The $21,000 working capital increase is the net of higher receivables ($22,000) and supplies ($9,000), offset by a drop in prepaid expenses ($1,000), higher payables ($6,000) and higher accrued wages ($3,000). Buyers project this figure forward several years and discount it to value the business, which is why sustainable free cash flow, not one good year, drives the price. Valuations of small businesses also often use multiples of seller's discretionary earnings or <a href="/blog/ebitda">EBITDA</a>, but buyers still check them against cash.</p>

<h2>Free cash flow vs operating cash flow vs net income</h2>
<table><thead><tr><th>Measure</th><th>Starts from</th><th>Deducts capital spending?</th><th>Deducts debt principal?</th><th>Example</th></tr></thead><tbody>
<tr><td>Net income</td><td>Revenue minus all expenses (accrual)</td><td>Only through depreciation</td><td>No</td><td>$84,000</td></tr>
<tr><td>Operating cash flow</td><td>Net income adjusted to cash</td><td>No</td><td>No</td><td>$81,000</td></tr>
<tr><td>Free cash flow</td><td>Operating cash flow</td><td>Yes</td><td>No</td><td>$46,000</td></tr>
<tr><td>Levered FCF to owner</td><td>Free cash flow</td><td>Yes</td><td>Yes</td><td>$34,000</td></tr>
</tbody></table>
<p>Each step down the table gets closer to the money you can actually spend. Owners who plan their personal finances around the top line of this table are the ones most often surprised by an empty account in a good year.</p>

<h2>Capital expenditures: maintenance vs growth</h2>
<p>Not all capital spending is equal. <strong>Maintenance capex</strong> replaces worn-out equipment to keep the business running at its current size. <strong>Growth capex</strong> adds capacity: a second van, a new location, a larger oven. Separating the two gives a more honest picture:</p>
<ul>
<li>FCF after maintenance capex shows what the business throws off in a steady state.</li>
<li>Growth capex is a choice; you can pause it in a tight year.</li>
</ul>
<p>Our guide to <a href="/blog/capex-vs-opex">CapEx vs OpEx</a> explains which purchases count as capital expenditures, and <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a> shows how they flow into the income statement over time.</p>

<h2>Free cash flow and taxes in 2026</h2>
<p>Tax rules affect FCF through the timing of deductions. The One Big Beautiful Bill Act of July 2025 restored 100% bonus depreciation for qualifying property acquired after January 19, 2025, so many businesses can deduct the full cost of equipment in the year they buy it. The deduction does not change the cash you spent, but it lowers taxes paid in that year, which raises operating cash flow and free cash flow. Later years have less depreciation left to deduct. Our comparison of <a href="/blog/section-179-vs-bonus-depreciation">Section 179 vs bonus depreciation</a> covers the choices; this is general information, not tax advice, so confirm the treatment with your tax preparer.</p>

<h2>How to use free cash flow in a small business: step by step</h2>
<ol>
<li><strong>Calculate FCF quarterly</strong> from the cash flow statement or a simple bank-based summary.</li>
<li><strong>Split capex</strong> into maintenance and growth.</li>
<li><strong>Subtract debt principal</strong> to get the cash available to owners.</li>
<li><strong>Set owner draws</strong> or distributions at or below that level, keeping a buffer for quarterly taxes.</li>
<li><strong>Allocate the remainder</strong> between a cash reserve (often three months of operating costs), debt reduction and growth projects.</li>
<li><strong>Track the FCF margin</strong> over several years to see whether the business is getting better at converting sales into cash.</li>
<li><strong>Forecast it.</strong> Add FCF to your <a href="/blog/rolling-forecast">rolling forecast</a> so big equipment purchases are planned rather than surprising.</li>
</ol>

<h2>Free cash flow in service vs product businesses</h2>
<p>Service businesses such as consultants, agencies and bookkeepers usually need little equipment, so most operating cash flow becomes free cash flow. Their main FCF risk is receivables: a few large clients paying late can wipe out a quarter's free cash flow. Product and equipment-heavy businesses, such as manufacturers, trucking firms, restaurants and contractors, need regular capital spending just to stand still, so their FCF margin is structurally lower and lumpier. For them, a replacement schedule for vehicles and equipment is as important as the sales forecast.</p>
<p>Whatever the model, compare FCF over at least three years. A contractor who bought two trucks last year will show weak FCF that year and strong FCF the next, and neither year alone tells the true story.</p>

<h2>What to do if free cash flow is consistently negative</h2>
<ol>
<li><strong>Check operating cash flow first.</strong> If OCF itself is negative, the problem is pricing, costs or collections, not investment.</li>
<li><strong>Separate growth capex.</strong> If maintenance-only FCF is positive, the business is healthy but expanding faster than it can self-fund.</li>
<li><strong>Match financing to assets.</strong> Long-lived equipment should usually be financed with term loans or leases, not paid from operating cash.</li>
<li><strong>Cut owner draws temporarily</strong> to the level FCF supports.</li>
<li><strong>Attack working capital:</strong> collections, deposits, inventory levels and supplier terms.</li>
</ol>

<h2>How invoicing and collections drive free cash flow</h2>
<p>Most of the levers that move FCF sit in working capital, and the largest working capital item for service businesses is receivables. In the example, $22,000 of extra receivables cut free cash flow by almost a third. Faster billing, shorter terms, deposits and easy payment options all convert to free cash flow dollar for dollar. Our guide to <a href="/blog/working-capital">working capital</a> explains the mechanics, and <a href="/blog/days-sales-outstanding">days sales outstanding</a> shows how to measure collection speed.</p>
<p>Sending invoices the day work is complete, with clear due dates and payment links, is the cheapest FCF improvement available. The <a href="/invoice-generator">free invoice generator</a> makes it quick.</p>

<h2>Planning a large purchase around free cash flow</h2>
<p>Before buying a significant asset, project FCF for the next 12 months with and without the purchase. Paying $60,000 cash for equipment when annual FCF is $46,000 means more than a year of free cash goes into one asset, leaving nothing for a slow season. Financing it over five years spreads the outflow, reduces the strain on reserves and lets the equipment pay for itself from the revenue it generates. The right answer depends on the interest rate, your cash reserve and how certain the extra revenue is, but FCF makes the trade-off visible. Add the decision to your forecast before you sign.</p>

<h2>Common free cash flow mistakes</h2>
<ul>
<li><strong>Using EBITDA as free cash flow.</strong> EBITDA ignores capex, working capital, interest and taxes.</li>
<li><strong>Leaving out financed equipment.</strong> If a lender paid the dealer directly, there may be no cash outflow, but the business still acquired an asset and took on debt; note it.</li>
<li><strong>Ignoring lumpy capex.</strong> One year without equipment purchases makes FCF look unusually strong; average over several years.</li>
<li><strong>Drawing on profit, not FCF,</strong> as in the example above.</li>
<li><strong>Treating one negative year as failure</strong> when it reflects deliberate investment.</li>
</ul>

<p>Free cash flow is the clearest answer to the question every owner asks: how much money did the business really make that I can use? Strengthen it at the source by billing promptly and clearly with the <a href="/invoice-generator">free invoice generator</a>: no sign-up, and every invoice downloads as a PDF.</p>
`,
  },
  {
    slug: "audit-trail",
    title: "Audit Trail in Accounting: What to Keep",
    description:
      "Audit trail in accounting explained: which records to keep, IRS retention periods, how to trace a sale from invoice to bank, and digital audit trail tips.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["how-long-to-keep-invoices", "invoice-audit-preparation", "invoice-numbering-system"],
    faqs: [
      {
        q: "What is an audit trail in accounting?",
        a: "An audit trail is the chain of records that lets anyone follow a transaction from its source document to the financial statements and back again. For a sale, that means the quote, the invoice, the journal entry, the general ledger posting, the customer payment and the bank deposit. A complete audit trail shows who recorded or changed each item and when, so errors and fraud can be found and figures can be verified by an accountant, lender or tax examiner.",
      },
      {
        q: "How long should I keep records for the IRS?",
        a: "The IRS says to keep records for three years in most cases, which matches the general period for assessing additional tax. Keep them six years if you fail to report income that is more than 25% of the gross income shown on your return, seven years if you claim a loss from worthless securities or a bad debt deduction, and at least four years for employment tax records. Keep records indefinitely if you do not file a return or file a fraudulent one. Asset records should be kept until the period expires for the year you dispose of the asset.",
      },
      {
        q: "Are digital records and scanned receipts acceptable?",
        a: "Yes, the IRS accepts electronic records as long as they are accurate, complete, legible and can be retrieved and printed if requested. Scanned receipts and invoices should be clear and include the date, amount, payee and what was bought. Keep backups, because a lost laptop is not a defense. Many businesses keep paper originals only when a scan would be hard to read or when a state or industry rule requires originals.",
      },
      {
        q: "Should I delete an incorrect invoice?",
        a: "No. Deleting an invoice breaks the audit trail and creates a gap in your invoice number sequence, which auditors and tax examiners treat as a red flag. Instead, void the invoice and keep it marked as void, or issue a credit note that reverses it, then issue a corrected invoice with a new number. That way every number is accounted for and the correction is visible.",
      },
      {
        q: "What makes an audit trail weak?",
        a: "Common weaknesses are shared logins so you cannot tell who did what, the ability to edit or delete posted transactions without a log, missing source documents, invoices with no sequential numbers, cash sales with no receipt, and transactions recorded in summary without the underlying detail. Each of these makes it hard to prove that your figures are accurate, and several are also warning signs of fraud.",
      },
      {
        q: "Does my accounting software keep an audit trail automatically?",
        a: "Most cloud accounting tools keep an audit log that records when transactions were created, edited or deleted and by which user. The log is only useful if each person has their own login and if you do not give everyone administrator rights. Check that the feature is turned on, learn where to view it, and export or archive it at year end along with your reports, especially before switching software.",
      },
    ],
    content: `
<p>An audit trail is the documented path that connects every number in your financial statements to the real-world transaction behind it: the quote, invoice, receipt, bank record and journal entry, plus who recorded each one and when. If an accountant, lender or IRS examiner picks any figure, a good audit trail lets you trace it back to source documents in minutes. It also makes errors and fraud much harder to hide.</p>

<p>This guide explains what an audit trail is made of, which records to keep and for how long, how to trace a sale and a purchase from start to finish, and how to keep a clean digital trail when you work with cloud software and scanned receipts. This is general information, not tax or legal advice; your accountant can confirm requirements for your business.</p>

<h2>What an audit trail is made of</h2>
<p>Every complete audit trail has four layers:</p>
<ol>
<li><strong>Source documents:</strong> invoices, receipts, contracts, purchase orders, timesheets, bank statements.</li>
<li><strong>Accounting entries:</strong> the <a href="/blog/journal-entries">journal entries</a> that record each transaction with a date, accounts, amounts and description.</li>
<li><strong>Ledgers and reports:</strong> the <a href="/blog/general-ledger">general ledger</a>, trial balance and financial statements built from those entries.</li>
<li><strong>Change history:</strong> who created, approved, edited or deleted each record, and when.</li>
</ol>
<p>The links between layers are what matter. An invoice number on the journal entry, a check number on the bank reconciliation, and a purchase order number on the supplier invoice let you move up and down the trail without guessing.</p>

<p>Sales tax deserves its own mention. If you collect sales tax, keep exemption and resale certificates from customers, records of where each sale was delivered, and the returns you filed, because states examine these separately from income tax and often look back several years. A sale with no tax charged and no certificate on file is usually treated as taxable in an audit, with the tax owed by you rather than the customer.</p>

<h2>Records to keep and for how long</h2>
<p>The IRS guidance on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" target="_blank" rel="noopener noreferrer">how long to keep records</a> ties retention to the period in which a return can be examined:</p>
<table><thead><tr><th>Situation</th><th>Keep records for</th></tr></thead><tbody>
<tr><td>Most income tax records</td><td>3 years from filing</td></tr>
<tr><td>Claim for credit or refund filed after the return</td><td>3 years from filing or 2 years from payment, whichever is later</td></tr>
<tr><td>Unreported income over 25% of gross income shown</td><td>6 years</td></tr>
<tr><td>Loss from worthless securities or bad debt deduction</td><td>7 years</td></tr>
<tr><td>Employment tax records</td><td>At least 4 years after the tax is due or paid, whichever is later</td></tr>
<tr><td>No return filed, or fraudulent return</td><td>Indefinitely</td></tr>
<tr><td>Records for property and equipment</td><td>Until the period expires for the year you dispose of the asset</td></tr>
</tbody></table>
<p>Lenders, insurers, state agencies and contracts may require longer periods, so many small businesses simply keep core accounting records for seven years. Our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> covers country-specific rules, including the UK and EU.</p>

<h3>Documents that belong in the trail</h3>
<ul>
<li><strong>Sales:</strong> quotes or estimates, contracts, invoices, credit notes, payment receipts, deposit records.</li>
<li><strong>Purchases:</strong> purchase orders, supplier invoices, receiving records, receipts, proof of payment.</li>
<li><strong>Banking:</strong> monthly statements, deposit details, reconciliations.</li>
<li><strong>Payroll:</strong> timesheets, pay records, tax filings, W-4s and contractor W-9s.</li>
<li><strong>Assets:</strong> purchase invoices, depreciation schedules, sale documents.</li>
<li><strong>Owner transactions:</strong> contributions, draws, loans to and from the business, with a short note on each.</li>
<li><strong>Adjustments:</strong> any manual journal entry, with the reason and who approved it.</li>
</ul>

<h2>Worked example: tracing a sale from quote to bank</h2>
<p>The figures are illustrative. A landscaping company's accountant picks a $4,250 revenue entry dated 14 August from the general ledger and asks for support. A clean audit trail produces this chain in a few minutes:</p>
<table><thead><tr><th>Step</th><th>Document</th><th>Reference that links it</th></tr></thead><tbody>
<tr><td>1. Quote accepted</td><td>Estimate EST-0312, signed 2 August</td><td>Client name, job 2026-118</td></tr>
<tr><td>2. Work completed</td><td>Crew timesheet and materials receipt</td><td>Job 2026-118</td></tr>
<tr><td>3. Invoice issued</td><td>Invoice INV-1047, 14 August, $4,250, net 15</td><td>References EST-0312 and job number</td></tr>
<tr><td>4. Journal entry</td><td>Debit receivables $4,250, credit revenue $4,250</td><td>Memo: INV-1047</td></tr>
<tr><td>5. Payment received</td><td>ACH remittance, 27 August</td><td>Remittance shows INV-1047</td></tr>
<tr><td>6. Bank deposit</td><td>August bank statement line, $4,250</td><td>Matched in bank reconciliation</td></tr>
</tbody></table>
<p>If any link is missing, for example an invoice without a number or a deposit that combined several payments with no remittance detail, the accountant has to reconstruct the chain from emails and memory. That costs time and fees, and in an examination it can cost deductions or credibility. Matching payments to invoices each month through a <a href="/blog/bank-reconciliation">bank reconciliation</a> keeps step 6 tidy.</p>

<h2>Invoice practices that protect your audit trail</h2>
<ul>
<li><strong>Sequential, unique invoice numbers.</strong> Gaps raise questions. See our guide to building an <a href="/blog/invoice-numbering-system">invoice numbering system</a>, or use the <a href="/tools/invoice-number-generator">invoice number generator</a>.</li>
<li><strong>Never delete an issued invoice.</strong> Void it or reverse it with a credit note. Our guide on <a href="/blog/how-to-void-an-invoice">how to void an invoice</a> walks through it.</li>
<li><strong>Reference the source:</strong> quote number, purchase order number, job number or contract on each invoice.</li>
<li><strong>Keep the version you sent.</strong> Save the PDF exactly as delivered, not just the data in your tool.</li>
<li><strong>Record payment details:</strong> date, method and reference for every payment received.</li>
</ul>
<p>The <a href="/invoice-generator">free invoice generator</a> lets you add an invoice number, PO reference and payment terms, and download a PDF copy for your records.</p>

<h2>Building a digital audit trail: step by step</h2>
<ol>
<li><strong>Give every user their own login</strong> in your accounting software and bank. Shared logins erase accountability.</li>
<li><strong>Limit who can delete or edit posted entries,</strong> and close prior periods once reconciled so they cannot be changed silently.</li>
<li><strong>Turn on and review the audit log</strong> in your software at least monthly, looking for edits to closed periods and deleted transactions.</li>
<li><strong>Attach documents to transactions</strong>: scan or photograph receipts and attach supplier invoices to the bill entry.</li>
<li><strong>Use a consistent file naming system,</strong> such as YYYY-MM-DD_vendor_amount, for any documents stored outside the software.</li>
<li><strong>Back up</strong> to a second location, and export reports and the audit log at year end.</li>
<li><strong>Archive before switching software,</strong> since history and logs often do not migrate.</li>
</ol>
<p>The IRS accepts electronic records that are accurate, complete and retrievable. If you scan paper receipts, make sure the date, amount, vendor and items are legible.</p>

<h2>Audit trails for payment processors and marketplaces</h2>
<p>Card processors, PayPal, Stripe, Square and marketplaces deposit net amounts: customer payments minus fees, refunds and chargebacks, often combining many sales into one payout. Recording only the payout breaks the trail, because revenue and fees disappear into one number. Instead:</p>
<ul>
<li>Download the processor's payout or settlement report each month.</li>
<li>Record gross sales, fees, refunds and chargebacks separately, then match the net payout to the bank deposit.</li>
<li>Keep the processor reports with your records, since they may be the only link between a customer invoice and the bank.</li>
<li>Reconcile against Form 1099-K if you receive one; the form reports gross payments, not your net deposits.</li>
</ul>

<h2>Who relies on your audit trail</h2>
<table><thead><tr><th>Who</th><th>What they check</th></tr></thead><tbody>
<tr><td>Your accountant or tax preparer</td><td>That income and deductions are complete and supported</td></tr>
<tr><td>IRS or state tax examiner</td><td>Source documents behind reported income, expenses and sales tax</td></tr>
<tr><td>Lender</td><td>That statements match bank records and receivables are real</td></tr>
<tr><td>Buyer of the business</td><td>Revenue quality, customer concentration and unusual adjustments</td></tr>
<tr><td>Insurer after a theft or loss</td><td>Proof of the amount lost</td></tr>
<tr><td>Customers in a dispute</td><td>Signed quotes, change orders, delivery records and invoices</td></tr>
</tbody></table>

<h2>Audit trails and internal controls</h2>
<p>An audit trail records what happened; <a href="/blog/internal-controls">internal controls</a> decide what is allowed to happen. They work together. Approval of supplier invoices before payment, matching invoices to purchase orders and receiving records through a <a href="/blog/three-way-match">three-way match</a>, and separating who records transactions from who handles cash all leave evidence in the trail. Those links are what let you catch a duplicate payment or a fictitious vendor. In a small team, splitting tasks is harder; our guide to <a href="/blog/segregation-of-duties">segregation of duties</a> shows practical workarounds.</p>

<h2>Common audit trail mistakes</h2>
<ul>
<li><strong>Cash sales with no receipts</strong> or a single daily total with no detail.</li>
<li><strong>Owner paying business expenses personally</strong> without recording the reimbursement or contribution.</li>
<li><strong>Bank deposits that lump several customers together</strong> with no breakdown.</li>
<li><strong>Manual journal entries with no explanation,</strong> especially at year end.</li>
<li><strong>Editing last year's books after taxes were filed.</strong> Corrections should go in the current period with a note.</li>
<li><strong>Relying on email as a filing system.</strong> Inboxes get purged; move documents into your records.</li>
</ul>

<h2>What to do if your audit trail has gaps</h2>
<p>Start with the bank statements, which are complete and independent. Request copies of missing supplier invoices; most suppliers can reissue them. Rebuild missing sales records from bank deposits, payment processor reports and customer statements. For a missing invoice number, document why it is missing in a memo. Then fix the process that caused the gap. If you are facing an examination, our <a href="/blog/invoice-audit-preparation">invoice audit preparation guide</a> covers what to assemble first, and a tax professional can advise on how to present reconstructed records.</p>

<p>A clean audit trail costs a few minutes per transaction and saves days when a question comes. It starts with a properly numbered invoice that references the work and the customer's purchase order. Create yours with the <a href="/invoice-generator">free invoice generator</a>, with no sign-up needed, and download each invoice as a PDF for your files.</p>
`,
  },
  {
    slug: "internal-controls",
    title: "Internal Controls for Small Business: Checklist",
    description:
      "Internal controls for small business: the five COSO components, practical controls for cash, invoicing, payables and payroll, plus a monthly checklist.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: ["bank-reconciliation", "invoice-approval-workflow", "three-way-match"],
    faqs: [
      {
        q: "What are internal controls in a small business?",
        a: "Internal controls are the policies, approvals, checks and records that keep a business's money and information accurate and safe. In a small business they include things like reconciling bank accounts monthly, requiring approval before paying a new vendor, numbering invoices in sequence, limiting who can sign checks or send payments, and reviewing reports regularly. Their purpose is to prevent errors and fraud, catch them quickly when they happen, and produce reliable financial records.",
      },
      {
        q: "What are the five components of internal control?",
        a: "Under the COSO Internal Control Integrated Framework, the five components are the control environment, risk assessment, control activities, information and communication, and monitoring activities. In small business terms: set an honest tone and clear responsibilities, identify where money could be lost, put specific checks in place, make sure the right information reaches the right people, and review regularly whether the checks are working.",
      },
      {
        q: "What is the most important internal control for a small business?",
        a: "Most accountants would say an owner who personally reviews the bank statements and the monthly reconciliation. Owner review is cheap, catches most kinds of fraud and errors, and acts as a deterrent because staff know someone is looking. The ACFE's 2026 study also found management review to be among the controls most strongly associated with lower fraud losses. Combine it with approval of new vendors and payments for broad protection.",
      },
      {
        q: "How can a business with one or two employees have internal controls?",
        a: "Small teams cannot fully separate duties, so they rely on compensating controls. The owner can approve all payments, receive bank statements and alerts directly, review the reconciliation, sign or release all payments, and use bank tools such as dual approval and positive pay. An outside bookkeeper or accountant who reviews the books monthly adds independence. Mandatory vacations for staff who handle money also help, because many schemes need constant attention to stay hidden.",
      },
      {
        q: "How much does occupational fraud cost businesses?",
        a: "The ACFE's Occupational Fraud 2026 report, based on 2,402 cases in 143 countries, found a median loss of $104,000 per case, and organizations surveyed estimated they lose about 5% of revenue to fraud each year. A typical scheme lasted about 12 months before detection, and 43% of cases were detected through a tip. Small organizations remain among the hardest hit, partly because they have fewer controls in place.",
      },
      {
        q: "Do small businesses need an audit?",
        a: "Most private small businesses are not legally required to have a financial statement audit. Audits may be required by lenders for larger loans, by investors, by some government grants or contracts, or by nonprofits above state thresholds. Even without an audit, a review or compiled statements from a CPA, plus good internal controls, makes it easier to borrow, sell the business or answer a tax examination.",
      },
    ],
    content: `
<p>Internal controls are the everyday checks that keep a business's money safe and its numbers accurate: who can approve a payment, who reconciles the bank account, how invoices are numbered, and who reviews the results. For a small business, good internal controls do not mean bureaucracy. A handful of well-chosen controls, many of them taking minutes a month, prevent most errors and make fraud far harder to commit or hide.</p>

<p>This guide explains the five components of internal control in plain language, lists practical controls for cash, invoicing, payables and payroll, and gives a monthly checklist for owners. It draws on the latest fraud data so you can focus where losses actually happen.</p>

<h2>Why internal controls matter: what the 2026 fraud data shows</h2>
<p>The Association of Certified Fraud Examiners' <a href="https://www.acfe.com/report-to-the-nations.aspx" target="_blank" rel="noopener noreferrer">Occupational Fraud 2026: A Report to the Nations</a> analyzed 2,402 cases from 143 countries. Coverage of the study reports a median loss of $104,000 per case, an estimated 5% of revenue lost to fraud each year, a typical duration of about 12 months before detection, and 43% of frauds detected through tips. Asset misappropriation, such as stealing cash, billing schemes and fake expense claims, remains the most common type. Small organizations continue to suffer some of the highest median losses relative to their size, and they typically have fewer anti-fraud controls in place.</p>
<p>The same research points to controls like management review, surprise audits and proactive data monitoring as associated with lower losses and faster detection. In short: someone looking regularly at the numbers is one of the best defenses.</p>

<h2>The five components of internal control (COSO)</h2>
<p>Most internal control guidance is based on the COSO Internal Control Integrated Framework, updated in 2013, which sets out five components supported by 17 principles. The <a href="https://www.coso.org/_files/ugd/3059fc_02c01fde6552479196535bcfee8ea60e.pdf" target="_blank" rel="noopener noreferrer">COSO guidance</a> is written for organizations of all sizes. Translated for a small business:</p>
<table><thead><tr><th>Component</th><th>What it means</th><th>Small business example</th></tr></thead><tbody>
<tr><td>Control environment</td><td>Tone at the top, ethics, clear responsibilities</td><td>Owner follows the same rules; written roles for who handles money</td></tr>
<tr><td>Risk assessment</td><td>Identifying where errors or fraud could happen</td><td>Listing the ways cash leaves the business and who can trigger each</td></tr>
<tr><td>Control activities</td><td>Specific approvals, checks and restrictions</td><td>Dual approval on payments, three-way match, sequential invoices</td></tr>
<tr><td>Information and communication</td><td>Reliable reports reaching the right people</td><td>Monthly financial pack; staff know how to report concerns</td></tr>
<tr><td>Monitoring activities</td><td>Checking that controls work and fixing gaps</td><td>Owner reviews reconciliations; annual review by an accountant</td></tr>
</tbody></table>

<h2>Practical internal controls by process</h2>
<h3>Cash receipts and invoicing</h3>
<ul>
<li>Number invoices sequentially and investigate gaps; never delete an issued invoice. See our <a href="/blog/invoice-numbering-system">invoice numbering system guide</a>.</li>
<li>Have customers pay electronically into the business account; minimize cash and checks handled by staff.</li>
<li>Separate who issues invoices or credit notes from who records payments, or have the owner approve credit notes.</li>
<li>Review the <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> monthly; unexplained write-offs are a classic warning sign.</li>
<li>Send customer statements periodically so customers flag payments that were not credited.</li>
</ul>
<h3>Purchases and payables</h3>
<ul>
<li>Approve new vendors before the first payment, verifying bank details by phone using a number you already have. Our <a href="/blog/vendor-onboarding-checklist">vendor onboarding checklist</a> covers the steps.</li>
<li>Match supplier invoices to purchase orders and delivery records with a <a href="/blog/three-way-match">three-way match</a> for significant purchases.</li>
<li>Use an <a href="/blog/invoice-approval-workflow">invoice approval workflow</a> with amount limits.</li>
<li>Check for duplicates before paying; see our guide to <a href="/blog/duplicate-invoice-payments">preventing duplicate invoice payments</a>.</li>
<li>Treat any request to change a supplier's bank details as suspicious until verified; <a href="/blog/invoice-scams">invoice scams</a> often start this way.</li>
</ul>
<h3>Banking and payments</h3>
<ul>
<li>Reconcile every bank and card account monthly, and have the owner review and sign off. Our <a href="/blog/bank-reconciliation">bank reconciliation guide</a> shows how.</li>
<li>Require two approvers for outgoing payments above a set amount, using the bank's dual-control feature.</li>
<li>Use positive pay and ACH debit blocks where your bank offers them.</li>
<li>Owner receives bank alerts and statements directly, not filtered through the bookkeeper.</li>
</ul>
<h3>Payroll and expenses</h3>
<ul>
<li>Owner reviews the payroll register each run for unfamiliar names, rate changes and unusual overtime.</li>
<li>Changes to pay rates or bank details require written approval.</li>
<li>Expense claims need receipts and manager approval; review company card statements monthly.</li>
</ul>

<h2>Segregation of duties when the team is tiny</h2>
<p>The classic control is splitting four duties between different people: authorizing transactions, holding assets such as cash, recording transactions, and reconciling. In a business with one bookkeeper, that is impossible, so the owner becomes the second person. The bookkeeper records and prepares payments; the owner approves and releases them, receives bank statements, and reviews the reconciliation. Our guide to <a href="/blog/segregation-of-duties">segregation of duties in a small team</a> has role-by-role examples, and <a href="/blog/employee-embezzlement">employee embezzlement warning signs</a> lists the behavioral red flags to watch.</p>

<h2>Worked example: controls that would have stopped a billing scheme</h2>
<p>The figures are illustrative. At a 12-person contractor, the office manager set up a vendor called "BRS Supply" with her partner's bank account and submitted invoices of $1,800 to $2,400 a month for 14 months, totalling about $29,000. She entered bills, scheduled payments and reconciled the bank account herself.</p>
<table><thead><tr><th>Control</th><th>How it would have caught the scheme</th><th>Time cost</th></tr></thead><tbody>
<tr><td>Owner approval of new vendors</td><td>Unknown vendor with no contract or W-9 flagged before first payment</td><td>5 minutes per vendor</td></tr>
<tr><td>Three-way match</td><td>No purchase order or delivery record for "supplies"</td><td>Built into payables process</td></tr>
<tr><td>Owner reviews reconciliation and payee list</td><td>Recurring payments to an unfamiliar name</td><td>20 minutes a month</td></tr>
<tr><td>Job cost review</td><td>Material costs not assigned to any job</td><td>Part of monthly job review</td></tr>
<tr><td>Mandatory vacation</td><td>Stand-in would have seen invoices with no matching deliveries</td><td>None</td></tr>
</tbody></table>
<p>Any one of these would likely have stopped the loss within one or two months.</p>

<h2>Monthly internal controls checklist for owners</h2>
<ol>
<li>Review each bank and card reconciliation, and the bank statement itself, for unfamiliar payees.</li>
<li>Scan the vendor list for new or changed vendors and bank details.</li>
<li>Check the invoice number sequence for gaps and review any credit notes or write-offs.</li>
<li>Review the receivables aging and follow up on anything over 60 days.</li>
<li>Review the payroll register for new names, rate changes and overtime spikes.</li>
<li>Compare actual results with budget and investigate unexpected variances.</li>
<li>Look at the accounting software's audit log for edits to closed periods or deleted transactions.</li>
<li>Confirm user access is current; remove former staff immediately.</li>
</ol>
<p>Most owners can complete this in about an hour once it becomes routine.</p>

<h2>Access and cybersecurity controls</h2>
<p>Many losses today start with a compromised email account or a spoofed message rather than an employee. Basic controls that close those doors:</p>
<ul>
<li>Turn on multi-factor authentication for email, banking, payroll and accounting software.</li>
<li>Give each person the lowest access level they need; few people need to both add vendors and release payments.</li>
<li>Remove access the day someone leaves, including shared drives and payment apps.</li>
<li>Verify any payment instruction change by calling a known number, never the number in the email.</li>
<li>Train staff to recognize urgent payment requests that appear to come from the owner.</li>
</ul>

<h2>A 30-day plan to put controls in place</h2>
<ol>
<li><strong>Week 1:</strong> List every way money leaves the business (checks, ACH, wires, cards, payroll, cash) and who can initiate each.</li>
<li><strong>Week 2:</strong> Turn on bank dual approval, alerts and multi-factor authentication; give the owner direct statement access.</li>
<li><strong>Week 3:</strong> Write a one-page policy covering vendor approval, payment limits, credit notes and expense claims.</li>
<li><strong>Week 4:</strong> Run the monthly checklist for the first time with your bookkeeper, and book a recurring hour for it each month.</li>
</ol>
<p>Review the list once a year, or whenever you add staff, a new bank account or a new payment method.</p>

<h2>Common internal control mistakes</h2>
<ul>
<li><strong>Trusting one long-serving employee with everything.</strong> Many fraud cases involve trusted staff with years of tenure.</li>
<li><strong>Shared logins and passwords,</strong> which make the audit trail meaningless.</li>
<li><strong>Owner override.</strong> When the owner bypasses controls, staff learn the rules are optional.</li>
<li><strong>Controls on paper only.</strong> A policy no one follows is not a control. Monitor it.</li>
<li><strong>Ignoring small amounts.</strong> Schemes often start small to test whether anyone notices.</li>
</ul>

<h2>Insurance and outside review</h2>
<p>Controls reduce risk but never remove it. Employee dishonesty or commercial crime insurance can cover theft by staff, and some policies cover funds transfer and social engineering fraud, though limits and exclusions vary, so read the policy wording. Many insurers ask about controls such as dual payment approval and callback verification when pricing these policies. An annual review by an outside accountant adds a check that staff know is coming. Even a limited engagement, such as testing a sample of payments and vendor changes, gives the owner independent assurance that the monthly checklist is working.</p>

<h2>What to do if you suspect fraud</h2>
<p>Do not confront the person immediately or alert them by changing everything at once. Secure records and backups, restrict system access quietly, and speak to your accountant and an attorney. Contact your insurer early if you have employee dishonesty or crime coverage, since policies often have notice deadlines. A forensic accountant can document the loss for insurance, recovery and any police report. This is general information, not legal advice.</p>

<p>Internal controls start with simple habits: numbered invoices, approved payments and a monthly owner review. Make the first one easy by creating consistently numbered, professional invoices with the <a href="/invoice-generator">free invoice generator</a>, with no sign-up required and an instant PDF download for your records.</p>
`,
  },
];
