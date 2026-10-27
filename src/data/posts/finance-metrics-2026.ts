import type { PostDraft } from "../blog";

export const FINANCE_METRICS_2026_POSTS: PostDraft[] = [
  {
    slug: "working-capital",
    title: "Working Capital Formula: Examples and Invoicing Impact",
    description:
      "Learn the working capital formula with worked examples, what a healthy ratio looks like, and how faster invoicing and better payment terms free up cash.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "roi-formula",
      "gross-profit-vs-net-profit",
      "cash-conversion-cycle",
      "days-sales-outstanding",
      "cash-flow-management",
    ],
    faqs: [
      {
        q: "What is the working capital formula?",
        a: "Working capital equals current assets minus current liabilities. Current assets are cash and items you expect to turn into cash within about a year, such as accounts receivable and inventory. Current liabilities are obligations due within about a year, such as supplier bills, wages owed, sales tax collected and the current part of loans. A positive result means short-term resources exceed short-term obligations.",
      },
      {
        q: "What is a good working capital ratio for a small business?",
        a: "Many lenders and textbooks treat a current ratio between roughly 1.2 and 2.0 as comfortable, but there is no universal target. A grocery store that collects cash daily can run on a lower ratio than a contractor waiting 60 days for payment. Compare your ratio with your own history, your industry and your loan covenants rather than a single rule of thumb.",
      },
      {
        q: "Can working capital be too high?",
        a: "Yes. Very high working capital can mean cash is sitting idle, inventory is piling up, or customers are paying slowly so receivables keep growing. Those balances look like assets on paper, but they are not funding growth or earning a return. If your current ratio is well above 3, check whether old receivables or slow-moving stock are inflating it.",
      },
      {
        q: "Is negative working capital always bad?",
        a: "Not always. Some businesses, such as restaurants and subscription companies, collect cash from customers before they pay suppliers, so they can operate with negative working capital safely. For most service businesses and small trades, though, negative working capital means bills due soon exceed the cash and receivables available to pay them, which is a warning sign worth acting on quickly.",
      },
      {
        q: "How does invoicing affect working capital?",
        a: "Every invoice you issue creates an account receivable, which is a current asset, but it only becomes usable cash when the customer pays. Slow invoicing, long payment terms and unclear invoices all stretch the time money sits in receivables. Invoicing promptly, using shorter terms and taking deposits converts receivables to cash sooner, which improves liquidity even if total working capital stays similar.",
      },
      {
        q: "What is the difference between working capital and cash flow?",
        a: "Working capital is a snapshot taken from the balance sheet on one date. Cash flow measures money moving in and out over a period, such as a month. A business can show healthy working capital and still run short of cash if most of its current assets are unpaid invoices or unsold inventory. That is why many owners track both.",
      },
      {
        q: "Does unearned revenue count in working capital?",
        a: "Yes. Deposits and prepayments you have received for work not yet delivered are usually recorded as deferred or unearned revenue, which is a current liability when the work is due within a year. They reduce working capital on paper, but the cash is already in your account, which is why upfront billing tends to help liquidity.",
      },
      {
        q: "How often should I calculate working capital?",
        a: "Monthly is a practical rhythm for most small businesses, ideally as part of the month-end close once bank accounts are reconciled and invoices are recorded. Seasonal businesses or companies with tight loan covenants may want to check weekly during busy periods. The trend over several months tells you more than any single figure.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The working capital formula is current assets minus current liabilities. It shows whether the cash, receivables and inventory you will turn into money within a year can cover the bills due in the same period. Invoicing affects it directly, because unpaid invoices sit in receivables until customers pay.</p>

<p>Working capital is one of the first numbers a lender, investor or accountant looks at, and one of the most practical numbers an owner can track. It answers a simple question: if the next twelve months of obligations came due, could the business cover them from its short-term resources? This guide walks through the working capital formula, the related ratios, a full worked example, and the specific invoicing habits that make working capital more useful, not just bigger on paper.</p>

<h2>What working capital means</h2>

<p>Working capital is the money a business has available to run day-to-day operations after accounting for short-term debts. It is calculated from the balance sheet, so it reflects one moment in time, usually the last day of a month, quarter or year.</p>

<p>Two groups of balance sheet items feed into it:</p>

<ul>
<li><strong>Current assets</strong> are cash and anything you expect to convert into cash within one year or one operating cycle: bank balances, accounts receivable (unpaid customer invoices), inventory, prepaid expenses and short-term investments.</li>
<li><strong>Current liabilities</strong> are obligations due within the same period: accounts payable (supplier bills), accrued wages, sales tax or VAT collected but not yet remitted, credit card balances, deferred revenue and the portion of long-term loans due in the next twelve months.</li>
</ul>

<p>Working capital is sometimes called net working capital. In everyday small business usage the two terms mean the same thing. Some analysts use a narrower "operating working capital" that leaves out cash and debt, which we cover below.</p>

<h2>The working capital formula</h2>

<p>The core working capital formula is short:</p>

<p><strong>Working capital = Current assets − Current liabilities</strong></p>

<p>A positive number means short-term resources exceed short-term obligations. A negative number means the opposite. Because the dollar figure alone is hard to compare between businesses of different sizes, most people also calculate two ratios.</p>

<table>
<thead>
<tr><th>Measure</th><th>Formula</th><th>What it tells you</th></tr>
</thead>
<tbody>
<tr><td>Working capital</td><td>Current assets − Current liabilities</td><td>The dollar cushion available for operations</td></tr>
<tr><td>Current ratio</td><td>Current assets ÷ Current liabilities</td><td>How many dollars of short-term assets cover each dollar of short-term debt</td></tr>
<tr><td>Quick ratio (acid test)</td><td>(Cash + Short-term investments + Accounts receivable) ÷ Current liabilities</td><td>Coverage without relying on selling inventory</td></tr>
<tr><td>Operating working capital</td><td>Accounts receivable + Inventory − Accounts payable</td><td>Cash tied up in the trading cycle itself</td></tr>
</tbody>
</table>

<p>The current ratio is the most widely quoted. The quick ratio is stricter and more useful for businesses that hold stock, because inventory can take months to sell. Operating working capital is the version most closely linked to invoicing and supplier terms, and it connects directly to the <a href="/blog/cash-conversion-cycle">cash conversion cycle</a>, which measures how many days that money stays tied up.</p>

<h2>Worked example: calculating working capital step by step</h2>

<p>Here is an illustrative example for a small marketing agency at the end of September. The figures are invented for teaching purposes.</p>

<table>
<thead>
<tr><th>Current assets</th><th>Amount</th><th>Current liabilities</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Cash in bank</td><td>$18,000</td><td>Accounts payable</td><td>$9,500</td></tr>
<tr><td>Accounts receivable</td><td>$42,000</td><td>Accrued payroll</td><td>$11,000</td></tr>
<tr><td>Prepaid software</td><td>$2,000</td><td>Sales tax payable</td><td>$1,500</td></tr>
<tr><td></td><td></td><td>Deferred revenue (client deposits)</td><td>$6,000</td></tr>
<tr><td></td><td></td><td>Loan principal due within 12 months</td><td>$4,000</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$62,000</strong></td><td><strong>Total</strong></td><td><strong>$32,000</strong></td></tr>
</tbody>
</table>

<p><strong>Step 1, working capital:</strong> $62,000 − $32,000 = $30,000.</p>

<p><strong>Step 2, current ratio:</strong> $62,000 ÷ $32,000 = 1.94.</p>

<p><strong>Step 3, quick ratio:</strong> the agency holds no inventory, so quick assets are cash plus receivables: $18,000 + $42,000 = $60,000. Then $60,000 ÷ $32,000 = 1.88.</p>

<p>On paper, the agency looks comfortable. But look closer: $42,000 of its $62,000 in current assets, about 68%, is unpaid invoices. If its <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> shows $15,000 of that is more than 60 days overdue and one client is in financial trouble, the real cushion is much thinner. Payroll and supplier bills are paid in cash, not in receivables.</p>

<p>Now suppose the agency collects $20,000 of its receivables in October and does nothing else. Current assets stay at $62,000 (cash rises to $38,000, receivables fall to $22,000), so working capital is still $30,000. The number has not changed, but the business is far safer, because more of that $30,000 is spendable. That is the key lesson: invoicing and collections change the <em>quality</em> of working capital even when the total stays flat.</p>

<h2>How invoicing affects working capital</h2>

<p>Every invoice you issue moves value from work in progress or inventory into accounts receivable. The invoice does not create cash; it creates a claim on cash. How quickly that claim turns into money depends on decisions you make when you bill.</p>

<h3>1. Invoice timing</h3>

<p>Work completed on the 3rd but invoiced on the 28th has lost 25 days before the payment clock even starts. Sending invoices the same day work is delivered is the cheapest working capital improvement available to most service businesses. A browser-based tool such as our free <a href="/invoice-generator">online invoice generator</a> makes it practical to produce a PDF invoice on a phone or laptop while the job is still fresh.</p>

<h3>2. Payment terms</h3>

<p>Net 30 versus net 60 is not a formality. If you bill $40,000 a month, moving from net 60 to net 30 can reduce the receivables balance you carry by roughly one month of sales, about $40,000 in this illustration, assuming customers pay on time. Read our guide to <a href="/blog/net-60-net-90-payment-terms">net 60 and net 90 payment terms</a> before agreeing to long terms with large customers.</p>

<h3>3. Deposits and upfront billing</h3>

<p>Taking a deposit at the start of a project brings cash in before you incur costs. On the balance sheet the deposit is recorded as deferred revenue, which is a current liability, so reported working capital does not rise. But your cash position improves immediately. A <a href="/blog/deposit-invoice">deposit invoice</a> is one of the simplest tools for this.</p>

<h3>4. Clarity and accuracy</h3>

<p>Invoices that are missing a purchase order number, a correct legal name or a clear line item breakdown get held in the customer's accounts payable queue. Each dispute adds days to collection. Clear invoices are a working capital tool, not just an admin task.</p>

<h3>5. Early payment incentives</h3>

<p>An <a href="/blog/early-payment-discount">early payment discount</a> such as 2/10 net 30 trades a small amount of margin for faster cash. Whether it is worth it depends on your cost of borrowing. If you are paying interest on an overdraft to cover payroll, a discount that brings cash in 20 days earlier may be cheaper.</p>

<h2>Measuring the receivables side</h2>

<p>Because receivables are usually the largest current asset for service businesses, track how fast they turn over. Two linked metrics do the job:</p>

<ul>
<li><strong><a href="/blog/days-sales-outstanding">Days sales outstanding (DSO)</a></strong> estimates the average number of days it takes to collect after a sale.</li>
<li><strong>The <a href="/blog/accounts-receivable-turnover-ratio">accounts receivable turnover ratio</a></strong> shows how many times per year you collect your average receivables balance.</li>
</ul>

<p>If DSO rises month after month while sales are flat, receivables are growing and working capital is becoming less liquid, even though the headline figure may look better.</p>

<h2>What is a healthy working capital level?</h2>

<p>There is no single correct number. Instead, think about it in context:</p>

<ul>
<li><strong>Industry:</strong> businesses that collect cash at the point of sale, such as retail and food service, can operate on a current ratio near or below 1. Businesses that bill on credit, such as consultancies, manufacturers and contractors, usually need more cushion.</li>
<li><strong>Seasonality:</strong> a landscaping business may need to build working capital before spring to fund equipment and labor before customers pay.</li>
<li><strong>Growth:</strong> fast-growing businesses often consume working capital, because they pay for labor and materials before collecting from a growing customer base. Growth can cause a cash crunch even when profits are strong.</li>
<li><strong>Loan covenants:</strong> some lenders require a minimum current ratio. Know the number in your agreement.</li>
</ul>

<p>A current ratio that is very high is not automatically good. It can signal idle cash, excess inventory or old receivables that will never be collected. A ratio below 1 for a business that sells on credit is a warning sign to act on.</p>

<h2>Ways to improve working capital</h2>

<p>Improvements fall into three groups: collect faster, pay smarter and hold less stock.</p>

<h3>Collect faster</h3>
<ul>
<li>Invoice on delivery or at each milestone, not at month end.</li>
<li>Shorten default payment terms for new customers.</li>
<li>Include multiple payment methods and full bank details on every invoice.</li>
<li>Send reminders before and on the due date, not only after it.</li>
<li>Review old balances and decide whether to escalate, settle or write off.</li>
</ul>

<h3>Pay smarter</h3>
<ul>
<li>Use the full supplier terms you have negotiated, but pay on time to protect relationships.</li>
<li>Take supplier early payment discounts only when the annualized return beats your cost of cash.</li>
<li>Match supplier payment dates to your expected customer receipts.</li>
</ul>

<h3>Hold less stock</h3>
<ul>
<li>Order smaller quantities more often if suppliers allow it.</li>
<li>Identify slow-moving items and clear them.</li>
</ul>

<h3>Use financing carefully</h3>
<p>If you need cash faster than customers will pay, options include <a href="/blog/invoice-factoring">invoice factoring</a>, invoice financing and a business line of credit. Each has a cost. Financing can bridge a gap, but it does not fix a slow billing process.</p>

<h2>Working capital checklist for small businesses</h2>

<ul>
<li>Calculate working capital, the current ratio and the quick ratio every month after closing your books.</li>
<li>Check what share of current assets is accounts receivable, and how much of it is overdue.</li>
<li>Confirm every completed job or delivery has been invoiced.</li>
<li>Review payment terms for your five largest customers.</li>
<li>Check that deposits received are recorded as deferred revenue, not income.</li>
<li>List supplier bills due in the next 30 days and compare them with expected receipts.</li>
<li>Update your <a href="/blog/cash-flow-forecast">cash flow forecast</a> with realistic collection dates.</li>
<li>Note any loan covenant thresholds and how close you are to them.</li>
</ul>

<h2>Common mistakes</h2>

<ul>
<li><strong>Treating all receivables as cash.</strong> An invoice that is 120 days overdue is not equivalent to money in the bank. Consider an allowance for doubtful accounts, or at least a mental discount, when judging liquidity.</li>
<li><strong>Forgetting the current portion of long-term debt.</strong> Loan principal due in the next twelve months is a current liability. Leaving it out overstates working capital.</li>
<li><strong>Booking deposits as revenue.</strong> Recording client prepayments as income inflates profit and understates current liabilities. Under accrual accounting, deposits for undelivered work are usually deferred revenue.</li>
<li><strong>Ignoring sales tax collected.</strong> Sales tax or VAT on your invoices belongs to the tax authority. It is a liability until you remit it.</li>
<li><strong>Looking at one snapshot.</strong> Working capital can swing a lot from the last day of one month to the first day of the next, especially around payroll. Watch the trend.</li>
<li><strong>Fixing the number, not the process.</strong> Borrowing short-term to pay bills can make the cash balance look fine while the underlying collection problem gets worse.</li>
</ul>

<h2>Working capital and your invoicing workflow</h2>

<p>For a small business, the most controllable part of working capital is usually the receivables line. A consistent invoicing routine does more than any spreadsheet model: bill the same day, state the due date and payment methods clearly, number invoices sequentially, and track what is outstanding. Our free generator creates professional PDF invoices with line items, tax, discounts, amount paid and balance due in your browser. It does not send, track or collect payments, so pair it with a simple tracker and your accounting software.</p>

<p>The U.S. Small Business Administration has a plain-language overview of the core financial statements and cash management in its guide to <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">managing your business finances</a>, which is a useful companion if you are building a monthly finance routine for the first time. For more articles on cash, receivables and bookkeeping, browse our <a href="/blog/category/business-finance">business finance guides</a>.</p>

<p>The working capital formula is simple. What makes it powerful is watching what sits inside each line, and the receivables line is the one your invoicing habits change most directly.</p>
`,
  },
  {
    slug: "cash-conversion-cycle",
    title: "Cash Conversion Cycle: Formula, Example and How to Cut It",
    description:
      "Cash conversion cycle explained: the DIO + DSO − DPO formula, a worked example, benchmarks by business type, and practical ways to shorten it with invoicing.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["working-capital", "days-sales-outstanding", "accounts-payable-kpis"],
    faqs: [
      {
        q: "What is the cash conversion cycle in simple terms?",
        a: "The cash conversion cycle is the number of days between paying for the inputs to your product or service and collecting cash from the customer who buys it. It combines how long inventory sits before it sells, how long customers take to pay, and how long you take to pay suppliers. A shorter cycle means less of your cash is tied up in day-to-day operations.",
      },
      {
        q: "What is the formula for the cash conversion cycle?",
        a: "Cash conversion cycle = days inventory outstanding (DIO) + days sales outstanding (DSO) − days payables outstanding (DPO). DIO is average inventory divided by cost of goods sold, times 365. DSO is average accounts receivable divided by revenue, times 365. DPO is average accounts payable divided by cost of goods sold, times 365. Use the same period and day count for all three.",
      },
      {
        q: "What is a good cash conversion cycle?",
        a: "Lower is generally better, but a good figure depends on the industry. Retailers that are paid at the register can run very short or even negative cycles, while manufacturers and distributors that hold stock and sell on credit often run cycles of two months or more. Compare your cycle with your own trend and with businesses that have a similar model.",
      },
      {
        q: "Can the cash conversion cycle be negative?",
        a: "Yes. A negative cycle means you collect cash from customers before you pay your suppliers. Businesses with fast-selling stock, cash or card sales at the point of purchase and long supplier terms can achieve this. Subscription businesses that bill in advance can show a similar effect. In practice the supplier is partly financing the business's operations.",
      },
      {
        q: "How does a service business calculate the cash conversion cycle?",
        a: "Most service businesses carry little or no inventory, so DIO is zero or close to it. The cycle becomes DSO minus DPO. If clients take 50 days to pay and you pay contractors and suppliers in 20 days, your cycle is about 30 days. Some firms also treat unbilled work in progress like inventory, which adds the days between doing work and invoicing it.",
      },
      {
        q: "How does invoicing affect the cash conversion cycle?",
        a: "Invoicing drives the DSO part of the cycle. Delays in sending invoices, long payment terms, errors that trigger disputes and weak follow-up all raise DSO and lengthen the cycle. Invoicing on delivery, using clear terms, taking deposits and offering easy payment methods all reduce it. For service businesses DSO is usually the biggest lever available.",
      },
      {
        q: "Should I stretch supplier payments to shorten my cycle?",
        a: "Using the full term a supplier gives you is reasonable, and it raises DPO. Paying late beyond agreed terms is different: it can damage relationships, lead to stricter terms or lost discounts, and may break late payment laws in some countries. Negotiate longer terms openly rather than simply paying late.",
      },
      {
        q: "How often should I calculate the cash conversion cycle?",
        a: "Quarterly is common for formal reporting, but a monthly or rolling twelve-month calculation is more useful for spotting trends in a small business. Calculate it after you close the month so receivables, payables and inventory balances are accurate. Track each component separately so you can see which one is driving any change.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The cash conversion cycle measures how many days your cash is tied up between paying suppliers and collecting from customers. The formula is days inventory outstanding plus days sales outstanding minus days payables outstanding. Shorten it by selling stock faster, invoicing and collecting sooner, and using the full supplier terms you have agreed.</p>

<p>Profit tells you whether your business makes money. The cash conversion cycle tells you how long you have to wait for it. Two companies with identical margins can have very different cash needs if one collects in 20 days and the other in 70. This guide explains each part of the formula, works through an example with real arithmetic, and shows how billing decisions, which you control every day, move the number.</p>

<h2>What the cash conversion cycle measures</h2>

<p>Think of the operating cycle as a loop. You buy materials or pay staff, you turn that into a product or service, you sell it, you invoice the customer, and eventually the customer pays. Meanwhile your own suppliers give you some time before you have to pay them.</p>

<p>The cash conversion cycle, often shortened to CCC, counts the days in that loop that your own money is out of the business. It is closely linked to <a href="/blog/working-capital">working capital</a>: the longer the cycle, the more working capital you need to fund the same level of sales.</p>

<h2>The cash conversion cycle formula</h2>

<p><strong>CCC = DIO + DSO − DPO</strong></p>

<table>
<thead>
<tr><th>Component</th><th>Formula</th><th>Meaning</th></tr>
</thead>
<tbody>
<tr><td>DIO (days inventory outstanding)</td><td>Average inventory ÷ Cost of goods sold × 365</td><td>How long stock sits before it is sold</td></tr>
<tr><td>DSO (days sales outstanding)</td><td>Average accounts receivable ÷ Revenue × 365</td><td>How long customers take to pay after a sale</td></tr>
<tr><td>DPO (days payables outstanding)</td><td>Average accounts payable ÷ Cost of goods sold × 365</td><td>How long you take to pay suppliers</td></tr>
</tbody>
</table>

<p>A few practical notes on the inputs:</p>

<ul>
<li><strong>Use averages.</strong> Average inventory, receivables and payables are usually (opening balance + closing balance) ÷ 2 for the period. Using only the closing balance can distort the result if balances swing.</li>
<li><strong>Match the period.</strong> If you use annual revenue and cost of goods sold, multiply by 365. For a quarter, use quarterly figures and about 91 days. Some analysts use 360; pick one and stay consistent.</li>
<li><strong>Use credit sales if you can.</strong> DSO is more accurate when calculated on credit sales only, because cash sales never create a receivable. Our guide to <a href="/blog/days-sales-outstanding">days sales outstanding</a> covers the variations.</li>
<li><strong>Some analysts calculate DPO on purchases</strong> rather than cost of goods sold. Either is fine if you use it consistently.</li>
</ul>

<h2>Worked example: a small wholesale distributor</h2>

<p>The figures below are illustrative. Imagine a distributor of kitchen supplies with the following annual results.</p>

<table>
<thead>
<tr><th>Item</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Revenue (all on credit)</td><td>$1,200,000</td></tr>
<tr><td>Cost of goods sold</td><td>$720,000</td></tr>
<tr><td>Average inventory</td><td>$120,000</td></tr>
<tr><td>Average accounts receivable</td><td>$150,000</td></tr>
<tr><td>Average accounts payable</td><td>$60,000</td></tr>
</tbody>
</table>

<p><strong>Step 1, DIO:</strong> $120,000 ÷ $720,000 = 0.1667. Then 0.1667 × 365 = 60.8 days.</p>

<p><strong>Step 2, DSO:</strong> $150,000 ÷ $1,200,000 = 0.125. Then 0.125 × 365 = 45.6 days.</p>

<p><strong>Step 3, DPO:</strong> $60,000 ÷ $720,000 = 0.0833. Then 0.0833 × 365 = 30.4 days.</p>

<p><strong>Step 4, CCC:</strong> 60.8 + 45.6 − 30.4 = 76.0 days.</p>

<p>So on average the distributor waits about 76 days between paying for stock and getting cash back from customers. Every dollar of sales growth needs funding for that period.</p>

<h3>What a 10-day improvement in DSO is worth</h3>

<p>Average daily revenue is $1,200,000 ÷ 365 = $3,287.67. If the distributor cuts DSO from 45.6 days to 35.6 days, average receivables fall by about 10 × $3,287.67 = $32,877. That is cash released from the balance sheet without making a single extra sale. The new cycle would be 60.8 + 35.6 − 30.4 = 66.0 days.</p>

<p>If the business had been funding that gap with a credit line at, say, 10% a year, freeing $32,877 would save roughly $3,288 in annual interest ($32,877 × 0.10). The rate is illustrative, but the logic holds for any cost of borrowing.</p>

<h2>Cash conversion cycle for service businesses</h2>

<p>Consultants, agencies, contractors and freelancers rarely hold inventory, so DIO is zero and the formula simplifies to:</p>

<p><strong>CCC = DSO − DPO</strong></p>

<p>There is one hidden piece: unbilled work. If your team finishes work on the 5th but you invoice on the 30th, those 25 days are effectively inventory. Some firms track "days of work in progress" or "days to invoice" alongside DSO for this reason. Billing promptly, or billing at each stage with <a href="/blog/milestone-payments">milestone payments</a>, removes most of that delay.</p>

<h3>Service business example</h3>

<p>Take an illustrative design studio with annual revenue of $480,000, average receivables of $72,000 and average payables of $8,000 against $160,000 of direct costs (freelancers and software). The studio also finishes work an average of 12 days before invoicing it.</p>

<ul>
<li>DSO: $72,000 ÷ $480,000 × 365 = 0.15 × 365 = 54.8 days.</li>
<li>DPO: $8,000 ÷ $160,000 × 365 = 0.05 × 365 = 18.3 days.</li>
<li>Reported cycle: 54.8 − 18.3 = 36.5 days.</li>
<li>Including the 12-day billing delay: 36.5 + 12 = 48.5 days.</li>
</ul>

<p>The studio's biggest opportunity is not negotiating with suppliers. It is closing the 12-day gap between finishing work and sending the invoice, and then bringing DSO closer to its stated net 30 terms.</p>

<h2>Cash conversion cycle vs operating cycle</h2>

<p>The two terms are often confused. The <strong>operating cycle</strong> is DIO + DSO: the total days from buying inventory to collecting cash from the sale. It ignores how you pay suppliers. The <strong>cash conversion cycle</strong> subtracts DPO, because the days your supplier waits for payment are days your own cash is not committed. In the distributor example, the operating cycle is 60.8 + 45.6 = 106.4 days, while the cash conversion cycle is 76.0 days. The 30.4-day difference is effectively financed by suppliers.</p>

<h2>Reading changes in the cycle</h2>

<p>A single cycle figure hides which part of the business moved. When the number changes, look at each component:</p>

<ul>
<li><strong>DSO up:</strong> customers are paying more slowly, invoices are going out late, or a large customer has negotiated longer terms. Check the aging report for concentration in one or two accounts.</li>
<li><strong>DIO up:</strong> sales have slowed, you bought ahead of a price increase, or some stock is not moving. Not always bad if it was a deliberate purchase.</li>
<li><strong>DPO down:</strong> suppliers have tightened terms, or you are paying earlier than needed. Sometimes this follows a missed payment that triggered stricter terms.</li>
</ul>

<p>Seasonality matters too. A garden supplier will show high DIO in late winter as it stocks up, so compare each month with the same month last year rather than the month before.</p>

<h2>Typical ranges by business model</h2>

<p>Rather than quoting benchmark figures that vary by source and year, it helps to understand the direction each model pushes the cycle.</p>

<table>
<thead>
<tr><th>Business model</th><th>DIO</th><th>DSO</th><th>DPO</th><th>Typical cycle</th></tr>
</thead>
<tbody>
<tr><td>Retail with card or cash sales</td><td>Medium</td><td>Very low</td><td>Medium</td><td>Short, sometimes negative</td></tr>
<tr><td>Subscription billed in advance</td><td>None</td><td>Low</td><td>Medium</td><td>Short or negative</td></tr>
<tr><td>Professional services on net 30</td><td>None</td><td>Medium</td><td>Low</td><td>Moderate</td></tr>
<tr><td>Wholesale or distribution</td><td>High</td><td>Medium</td><td>Medium</td><td>Long</td></tr>
<tr><td>Manufacturing</td><td>High</td><td>Medium to high</td><td>Medium</td><td>Long</td></tr>
<tr><td>Construction and contracting</td><td>Medium (materials and WIP)</td><td>High, often with retainage</td><td>Medium</td><td>Long</td></tr>
</tbody>
</table>

<p>Your most useful benchmark is your own history. A cycle that grows from 45 to 60 days over a year deserves attention even if it is "normal" for your sector.</p>

<h2>How to shorten the cash conversion cycle</h2>

<h3>Reduce DSO: invoice and collect faster</h3>

<p>For most small businesses, receivables are the easiest component to improve because the levers are inside your own process.</p>

<ul>
<li><strong>Invoice on delivery.</strong> Create the invoice the same day the job finishes or the goods ship. Our free <a href="/invoice-generator">invoice generator</a> builds a PDF in the browser in a few minutes, which removes the excuse of waiting for month end.</li>
<li><strong>Shorten terms for new customers.</strong> Start at net 15 or net 30 and only extend after a good payment history.</li>
<li><strong>Take deposits.</strong> Upfront payments reduce the amount at risk and fund early costs.</li>
<li><strong>Make invoices easy to approve.</strong> Include PO numbers, a clear description and correct tax. A clean layout from our <a href="/invoice-templates">invoice templates</a> helps the customer's accounts payable team process it quickly.</li>
<li><strong>Follow up on a schedule.</strong> A friendly reminder a few days before the due date often prevents lateness. See our <a href="/blog/payment-reminder-emails">payment reminder email templates</a>.</li>
<li><strong>Offer more ways to pay.</strong> Bank transfer details, card links and local payment methods remove friction.</li>
</ul>

<p>Our broader guide on <a href="/blog/how-to-get-paid-faster">how to get paid faster</a> goes deeper on each of these.</p>

<h3>Reduce DIO: hold less stock</h3>

<ul>
<li>Review slow-moving items each month and discount or return them.</li>
<li>Order more frequently in smaller batches where supplier minimums allow.</li>
<li>Use sales history to set reorder points rather than ordering by habit.</li>
</ul>

<h3>Increase DPO: use supplier terms well</h3>

<ul>
<li>Negotiate longer terms when you renew contracts, especially with suppliers you buy from in volume.</li>
<li>Pay on the due date rather than the day the bill arrives, unless an early payment discount is worth more than holding the cash.</li>
<li>Track your own payables performance; our article on <a href="/blog/accounts-payable-kpis">accounts payable KPIs</a> lists useful measures.</li>
</ul>

<p>Be careful with DPO. Stretching suppliers beyond agreed terms can cost you discounts, priority and goodwill. Large buyers sometimes offer suppliers early payment through programs such as <a href="/blog/dynamic-discounting">dynamic discounting</a>; if you are on the supplier side of such a program, it shortens your DSO at a cost.</p>

<h3>Use financing as a bridge, not a fix</h3>

<p>Financing options such as factoring, invoice financing or a line of credit can fund a long cycle. Compare them in our guide to <a href="/blog/invoice-financing-vs-line-of-credit">invoice financing vs a line of credit</a>. They do not shorten the cycle itself; they rent you the cash to survive it.</p>

<h2>Cash conversion cycle checklist</h2>

<ul>
<li>Pull revenue, cost of goods sold and opening and closing balances for inventory, receivables and payables.</li>
<li>Calculate averages for each balance.</li>
<li>Calculate DIO, DSO and DPO using the same day count.</li>
<li>Add DIO and DSO, then subtract DPO.</li>
<li>Compare with the last three to four periods and note which component moved.</li>
<li>Check the <a href="/blog/accounts-receivable-turnover-ratio">accounts receivable turnover ratio</a> alongside DSO for a second view of collections.</li>
<li>Pick one improvement per component and set a target in days.</li>
<li>Recalculate next month and record the result.</li>
</ul>

<h2>Common mistakes</h2>

<ul>
<li><strong>Mixing periods.</strong> Using annual revenue with a quarterly receivables balance, or 365 days with quarterly figures, produces a meaningless number.</li>
<li><strong>Using year-end balances only.</strong> Many businesses have unusually low receivables at year end because of a collection push. Averages give a fairer picture.</li>
<li><strong>Including cash sales in DSO.</strong> Cash sales lower DSO artificially if you are trying to measure how fast credit customers pay.</li>
<li><strong>Ignoring unbilled work.</strong> A service business with low DSO but a long gap between finishing work and invoicing still has a long real cycle.</li>
<li><strong>Chasing a low DPO.</strong> Paying suppliers very early feels responsible but lengthens your cycle unless you earn a discount for it.</li>
<li><strong>Improving the metric by paying late.</strong> A higher DPO from missed due dates is not a real improvement and can carry late fees.</li>
</ul>

<h2>Where to learn more</h2>

<p>The U.S. Small Business Administration explains balance sheets, income statements and cash flow in its <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">guide to managing business finances</a>, a helpful starting point if you are new to reading your own statements. The cash conversion cycle builds on those numbers, and once you calculate it monthly, it becomes a clear scorecard for how well your billing, purchasing and inventory processes work together.</p>
`,
  },
  {
    slug: "accounts-receivable-turnover-ratio",
    title: "Accounts Receivable Turnover Ratio: Formula and Benchmarks",
    description:
      "Calculate the accounts receivable turnover ratio step by step, convert it to days, judge it against your payment terms, and learn practical ways to improve it.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "days-sales-outstanding",
      "accounts-receivable-aging-report",
      "cash-conversion-cycle",
    ],
    faqs: [
      {
        q: "What is the accounts receivable turnover ratio?",
        a: "The accounts receivable turnover ratio shows how many times a business collects its average receivables balance during a period, usually a year. It is calculated as net credit sales divided by average accounts receivable. A higher ratio means customers pay faster relative to how much you sell on credit, while a lower ratio suggests slower collections or looser credit terms.",
      },
      {
        q: "How do you calculate average accounts receivable?",
        a: "The simplest method adds the receivables balance at the start of the period to the balance at the end and divides by two. If your balances swing a lot during the year, a more accurate approach averages the twelve month-end balances. Use the same method every time you calculate the ratio so the results can be compared across periods.",
      },
      {
        q: "What is a good accounts receivable turnover ratio?",
        a: "A good ratio is one that matches your payment terms. If you offer net 30, customers paying on time would produce a ratio of about 12 a year, because 365 divided by 30 is roughly 12.2. A ratio of 8 on net 30 terms implies an average collection period of about 46 days, which means many customers are paying late.",
      },
      {
        q: "How do I convert the turnover ratio into days?",
        a: "Divide the number of days in the period by the turnover ratio. For an annual ratio, use 365. A ratio of 10 means 365 ÷ 10 = 36.5 days on average to collect. This figure is often called the average collection period, and it is essentially the same as days sales outstanding when calculated on the same inputs.",
      },
      {
        q: "Should I use total sales or credit sales?",
        a: "Use net credit sales whenever you can. Cash and card sales paid at the time of purchase never become receivables, so including them makes the ratio look better than your actual collection performance. Net means after returns, allowances and credit notes. If you sell almost entirely on invoice, total net revenue is a reasonable substitute.",
      },
      {
        q: "Can the accounts receivable turnover ratio be too high?",
        a: "It can. A very high ratio may mean your credit policy is so strict that you are turning away good customers or requiring prepayment where competitors offer terms. That can limit sales growth. It can also reflect a one-off, such as a large collection just before year end. Look at the trend and at lost sales, not just the ratio.",
      },
      {
        q: "Why did my receivables turnover ratio drop?",
        a: "Common causes include a large customer paying late, new customers on longer terms, invoicing delays, disputes over incorrect invoices, a seasonal surge in sales near period end, or old balances that should have been written off. Check your aging report to see whether the problem is spread across many customers or concentrated in a few accounts.",
      },
      {
        q: "Does a free invoice generator help improve the ratio?",
        a: "It can help with the parts of the ratio you control at billing time. Invoicing on the day of delivery, showing clear due dates, payment instructions, PO numbers and correct tax all reduce delays. A generator does not chase or track payments, so you still need a reminder routine and a record of what is outstanding to manage collections properly.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The accounts receivable turnover ratio equals net credit sales divided by average accounts receivable. It shows how many times a year you collect your receivables. Divide 365 by the ratio to get the average days to collect, then compare that figure with your payment terms to see whether customers pay on time.</p>

<p>Revenue is only useful once it turns into cash. The accounts receivable turnover ratio is one of the clearest ways to measure how quickly that happens. It takes two numbers most small businesses already have, sales and receivables, and turns them into a single figure you can track month to month. This guide shows how to calculate it, how to read it against your payment terms, what changes it, and what to do when it moves in the wrong direction.</p>

<h2>What the accounts receivable turnover ratio measures</h2>

<p>Accounts receivable are the unpaid invoices customers owe you. If you invoice $100,000 over a year and customers always pay instantly, your receivables balance stays near zero. If customers take months, the balance stays high. The turnover ratio compares the two: how much you sold on credit versus how much was outstanding on average.</p>

<p>A higher ratio means receivables "turn over" more often, so cash comes in faster. A lower ratio means money stays tied up in unpaid invoices longer. It is closely related to <a href="/blog/days-sales-outstanding">days sales outstanding</a>; the two metrics describe the same reality from different angles.</p>

<h2>Accounts receivable turnover ratio formula</h2>

<p><strong>AR turnover ratio = Net credit sales ÷ Average accounts receivable</strong></p>

<p><strong>Average accounts receivable = (Opening AR + Closing AR) ÷ 2</strong></p>

<p><strong>Average collection period = 365 ÷ AR turnover ratio</strong></p>

<p>Each input deserves care:</p>

<ul>
<li><strong>Net credit sales</strong> are sales made on invoice, minus returns, allowances and credit notes. Exclude cash and card sales paid at the time of sale.</li>
<li><strong>Average accounts receivable</strong> smooths out swings. If your business is seasonal, average the twelve month-end balances instead of only the opening and closing figures.</li>
<li><strong>Period:</strong> annual figures are standard. For a quarterly ratio, use quarterly sales and divide 91 days (or 90) by the ratio to get days.</li>
</ul>

<h2>Worked example</h2>

<p>The numbers below are illustrative. A small IT services company sells almost entirely on net 30 invoices.</p>

<table>
<thead>
<tr><th>Item</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Gross credit sales for the year</td><td>$930,000</td></tr>
<tr><td>Credit notes and allowances</td><td>$30,000</td></tr>
<tr><td>Accounts receivable, January 1</td><td>$110,000</td></tr>
<tr><td>Accounts receivable, December 31</td><td>$90,000</td></tr>
</tbody>
</table>

<p><strong>Step 1, net credit sales:</strong> $930,000 − $30,000 = $900,000.</p>

<p><strong>Step 2, average receivables:</strong> ($110,000 + $90,000) ÷ 2 = $100,000.</p>

<p><strong>Step 3, turnover ratio:</strong> $900,000 ÷ $100,000 = 9.0 times a year.</p>

<p><strong>Step 4, average collection period:</strong> 365 ÷ 9.0 = 40.6 days.</p>

<p>The company's terms are net 30, but customers take about 41 days on average. That roughly 11-day gap is the collection shortfall. If the business brought collections in line with its terms, the target ratio would be 365 ÷ 30 = 12.2, and average receivables would be $900,000 ÷ 12.2 = about $73,800. The difference, roughly $100,000 − $73,800 = $26,200, is cash currently waiting in customers' bank accounts instead of yours.</p>

<h2>Benchmarks: judge the ratio against your terms</h2>

<p>Published industry averages vary by data source, company size and year, so the most reliable benchmark is your own payment terms. The table below shows the ratio you would expect if every customer paid exactly on the due date.</p>

<table>
<thead>
<tr><th>Payment terms</th><th>Days</th><th>Target turnover (365 ÷ days)</th><th>Example warning level</th></tr>
</thead>
<tbody>
<tr><td>Due on receipt</td><td>~7 (realistic processing time)</td><td>~52</td><td>Below 26 (14+ days)</td></tr>
<tr><td>Net 15</td><td>15</td><td>24.3</td><td>Below 16 (23+ days)</td></tr>
<tr><td>Net 30</td><td>30</td><td>12.2</td><td>Below 8 (46+ days)</td></tr>
<tr><td>Net 45</td><td>45</td><td>8.1</td><td>Below 6 (61+ days)</td></tr>
<tr><td>Net 60</td><td>60</td><td>6.1</td><td>Below 4.5 (81+ days)</td></tr>
</tbody>
</table>

<p>The "warning level" column is an illustrative rule of thumb, roughly 50% slower than terms, not an industry standard. Set your own threshold based on how much delay your cash flow can absorb.</p>

<p>If you have customers on different terms, calculate a weighted target. For example, if 70% of sales are on net 30 and 30% on net 60, the weighted term is (0.7 × 30) + (0.3 × 60) = 21 + 18 = 39 days, giving a target ratio of 365 ÷ 39 = 9.4.</p>

<h2>Tracking the ratio monthly with a rolling calculation</h2>

<p>An annual ratio calculated once a year arrives too late to act on. Most small businesses get more value from a rolling twelve-month version updated after each month-end close. The method is simple:</p>

<ol>
<li>Add up net credit sales for the last twelve months.</li>
<li>Average the last thirteen month-end receivables balances (the twelve months plus the opening balance), or simply average the twelve month ends.</li>
<li>Divide sales by average receivables.</li>
<li>Divide 365 by the result to get days.</li>
</ol>

<p>Here is an illustrative extract for the same IT services company, showing how the rolling figure can drift even when sales are steady.</p>

<table>
<thead>
<tr><th>Month end</th><th>Rolling 12-month credit sales</th><th>Rolling average AR</th><th>Turnover</th><th>Days</th></tr>
</thead>
<tbody>
<tr><td>June</td><td>$880,000</td><td>$88,000</td><td>10.0</td><td>36.5</td></tr>
<tr><td>July</td><td>$885,000</td><td>$92,000</td><td>9.6</td><td>37.9</td></tr>
<tr><td>August</td><td>$892,000</td><td>$96,500</td><td>9.2</td><td>39.5</td></tr>
<tr><td>September</td><td>$900,000</td><td>$100,000</td><td>9.0</td><td>40.6</td></tr>
</tbody>
</table>

<p>Sales grew only about 2% over the quarter, but average receivables rose about 14% ($88,000 to $100,000). The turnover ratio slid from 10.0 to 9.0, and the collection period stretched by four days. That pattern usually points to one or two customers slipping, or invoices going out later than before, and it is visible months before it would show up in an annual review.</p>

<h2>Interpreting the ratio for very small businesses</h2>

<p>Freelancers and micro businesses with a handful of clients should treat the ratio with some caution. With five customers, one late payment can move the result dramatically. In that situation:</p>

<ul>
<li>Track days to payment for each invoice instead of, or alongside, the ratio.</li>
<li>Note the customer's payment pattern; some pay reliably at 45 days regardless of terms.</li>
<li>Focus on the biggest balances, because they drive most of the movement.</li>
</ul>

<p>The ratio becomes more stable and more meaningful as the number of invoices grows. Until then, a simple list of open invoices with their issue dates, due dates and days outstanding often tells you more than any single ratio, and it takes only a few minutes to update each week.</p>

<h2>What makes the ratio rise or fall</h2>

<h3>Factors that lower the ratio (slower collection)</h3>
<ul>
<li>Invoices sent days or weeks after delivery.</li>
<li>Longer terms granted to win large customers.</li>
<li>Invoice errors that trigger disputes or rejections in the customer's approval workflow.</li>
<li>No reminder routine before or after the due date.</li>
<li>Old balances that should have been written off still sitting in receivables.</li>
<li>A sales spike near period end, which inflates closing receivables.</li>
</ul>

<h3>Factors that raise the ratio (faster collection)</h3>
<ul>
<li>Deposits and progress billing that shrink the balance owed at completion.</li>
<li>Clear credit checks and limits for new customers.</li>
<li>Multiple, convenient payment methods.</li>
<li>Early payment discounts.</li>
<li>Writing off genuinely uncollectible debts, which removes them from receivables.</li>
</ul>

<p>The last point is a reminder that the ratio can improve for accounting reasons as well as operational ones. A <a href="/blog/bad-debt-write-off">bad debt write-off</a> is sometimes the right call, but it is not the same as collecting the cash.</p>

<h2>How to improve your accounts receivable turnover</h2>

<h3>Set a credit policy before you extend terms</h3>
<p>Decide who gets credit, how much, and on what terms. A written <a href="/blog/customer-credit-policy">customer credit policy</a> keeps sales staff from agreeing to net 90 on the spot and gives you a basis for holding orders when an account is overdue.</p>

<h3>Invoice immediately and correctly</h3>
<p>Every day between delivery and invoice is a day added to your collection period. Use our free <a href="/invoice-generator">invoice generator</a> to create a PDF with your logo, line items, tax, due date and payment details as soon as the job is done. Unique sequential numbers matter too; the <a href="/tools/invoice-number-generator">invoice number generator</a> helps you keep a clean series that customers' accounts payable systems can match.</p>

<h3>Follow up on a schedule</h3>
<p>Plan reminders at set points: a few days before due, on the due date, and at 7, 14 and 30 days overdue. Our guide to <a href="/blog/invoice-collections">invoice collections</a> covers escalation steps when reminders are not enough.</p>

<h3>Apply payments promptly</h3>
<p>If payments sit unmatched in the bank account, receivables look higher than they really are, and customers get incorrect reminders. A disciplined <a href="/blog/cash-application">cash application</a> process keeps receivables accurate.</p>

<h3>Review the aging report every month</h3>
<p>The ratio tells you something changed; the <a href="/blog/accounts-receivable-aging-report">aging report</a> tells you which customers caused it. Look at the 60+ and 90+ day buckets first.</p>

<h2>How the ratio fits with other metrics</h2>

<p>Receivables turnover is one part of a bigger picture. It drives the DSO component of the <a href="/blog/cash-conversion-cycle">cash conversion cycle</a>, and receivables are often the largest current asset in a service company's <a href="/blog/working-capital">working capital</a>. If you want to understand receivables more broadly, including how they are recorded and managed, read our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a>.</p>

<table>
<thead>
<tr><th>Metric</th><th>Formula</th><th>Best used for</th></tr>
</thead>
<tbody>
<tr><td>AR turnover ratio</td><td>Net credit sales ÷ Average AR</td><td>Trend of collection speed over a year</td></tr>
<tr><td>Average collection period / DSO</td><td>365 ÷ AR turnover (or AR ÷ Sales × 365)</td><td>Comparing with payment terms in days</td></tr>
<tr><td>Aging report</td><td>Receivables bucketed by days overdue</td><td>Finding which customers are late</td></tr>
<tr><td>Bad debt percentage</td><td>Write-offs ÷ Credit sales</td><td>Checking whether credit policy is too loose</td></tr>
</tbody>
</table>

<h2>Accounts receivable turnover checklist</h2>

<ul>
<li>Pull net credit sales for the period, excluding cash sales and after credit notes.</li>
<li>Pull receivables balances at the start and end of the period, or at each month end.</li>
<li>Calculate average receivables, the turnover ratio and the average collection period.</li>
<li>Compare the collection period with your standard and weighted payment terms.</li>
<li>Compare with the same period last year.</li>
<li>Review the aging report for customers driving any change.</li>
<li>Confirm all payments received have been matched to invoices.</li>
<li>Pick one action, such as faster invoicing or a new reminder step, and measure the effect next month.</li>
</ul>

<h2>Common mistakes</h2>

<ul>
<li><strong>Using total revenue in a mixed business.</strong> If half your sales are card payments at the counter, including them can roughly double the ratio and hide slow invoice payers.</li>
<li><strong>Using only the closing balance.</strong> A year-end collection push can make the ratio look great for one day of the year.</li>
<li><strong>Comparing quarterly and annual ratios directly.</strong> A quarterly ratio of 3 is roughly equivalent to an annual ratio of 12. Convert to days before comparing.</li>
<li><strong>Ignoring credit notes.</strong> Gross sales overstate the ratio when you issue many credits or refunds.</li>
<li><strong>Celebrating write-offs.</strong> Removing uncollectible balances improves the ratio but represents lost revenue.</li>
<li><strong>Looking only at the average.</strong> One large customer paying in 120 days can hide behind many fast payers. Always pair the ratio with the aging report.</li>
</ul>

<h2>Further reading</h2>

<p>If you are building a monthly finance routine, the U.S. Small Business Administration's guide to <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">managing your finances</a> explains the core financial statements that feed this ratio. Calculate the accounts receivable turnover ratio at every month end, read it in days against your terms, and use it as an early warning that your invoicing or collection process needs attention.</p>
`,
  },
  {
    slug: "deferred-revenue-vs-accrued-revenue",
    title: "Deferred Revenue vs Accrued Revenue: Invoicing Examples",
    description:
      "Deferred revenue vs accrued revenue explained with invoicing examples, journal entries and a comparison table to record prepayments and unbilled work correctly.",
    category: "comparisons",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["revenue-recognition-asc-606", "cash-vs-accrual-accounting", "retainer-invoice"],
    faqs: [
      {
        q: "What is the main difference between deferred and accrued revenue?",
        a: "It comes down to timing. Deferred revenue arises when you invoice or are paid before you deliver the work, so you owe the customer goods or services and record a liability. Accrued revenue arises when you deliver the work before you invoice, so you have earned income that has not been billed yet and record an asset. Both exist only under accrual accounting.",
      },
      {
        q: "Is deferred revenue a liability or an asset?",
        a: "Deferred revenue, also called unearned revenue, is a liability. You have received cash or billed the customer, but you still owe them the goods or services. As you deliver, you move the amount out of the liability and into revenue. Under the US revenue standard ASC 606 it is generally presented as a contract liability.",
      },
      {
        q: "Is accrued revenue the same as accounts receivable?",
        a: "Not quite. Accounts receivable represents amounts you have invoiced and have an unconditional right to collect. Accrued revenue is earned but not yet invoiced, so it is often recorded as unbilled receivables or, under ASC 606, a contract asset when the right to payment depends on something other than time. Once you send the invoice, it becomes a normal receivable.",
      },
      {
        q: "Do I need to track deferred revenue if I use cash accounting?",
        a: "Under cash-basis accounting you record revenue when cash arrives, so deferred and accrued revenue do not appear in your books. Many sole proprietors and small businesses use cash accounting for simplicity. If you use accrual accounting, need GAAP financial statements for a lender or investor, or plan to grow, you will need to track both.",
      },
      {
        q: "How do I record a customer deposit on an invoice?",
        a: "Under accrual accounting, a deposit for work not yet done is recorded by increasing cash and increasing a deferred revenue or customer deposits liability. When you complete the work and issue the final invoice, you recognize the full revenue and apply the deposit against the amount owed. Your final invoice should show the deposit as an amount already paid.",
      },
      {
        q: "Is deferred revenue taxed when it is received?",
        a: "Tax and accounting rules can differ. In the US, accrual-method taxpayers may be able to defer some advance payments to the following tax year under specific IRS rules, while cash-method taxpayers generally include payments in income when received. The details depend on your situation and change over time, so confirm the treatment with a tax professional before filing.",
      },
      {
        q: "What is an example of accrued revenue for a freelancer?",
        a: "A freelance developer works 40 hours in late March at $100 an hour but invoices monthly on the 5th. On March 31 they have earned $4,000 that is not yet billed. Under accrual accounting they record $4,000 of accrued revenue in March. When they issue the invoice on April 5, the accrued amount becomes a normal accounts receivable.",
      },
      {
        q: "Why does the difference matter for small businesses?",
        a: "Recording revenue in the right month gives a truer picture of profit and margins, which matters for pricing, loan applications and tax planning. Booking a year of prepaid fees as revenue in one month inflates that month and understates the rest. Missing unbilled work does the opposite. Accurate timing also reveals billing delays that hurt cash flow.",
      },
      {
        q: "Can one contract have both deferred and accrued revenue?",
        a: "Yes, at different times. A project might start with a deposit, creating deferred revenue, and then the work could run ahead of the agreed billing milestones, creating unbilled revenue. Under ASC 606, balances for a single contract are typically netted so the contract shows either a net contract asset or a net contract liability at the reporting date.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the deferred revenue vs accrued revenue comparison, the difference is timing. Deferred revenue is billed or paid before you deliver, so it is a liability until earned. Accrued revenue is earned before you invoice, so it is an asset until billed. Both come from accrual accounting, which records revenue when it is earned, not when cash moves.</p>

<p>If you invoice annual retainers upfront, take project deposits, or bill monthly for work done the month before, you are already creating deferred or accrued revenue whether you track it or not. Getting the timing right matters for accurate monthly profit, clean month-end closes and fewer surprises when your accountant reviews the books. This guide explains both concepts with simple invoicing examples, journal entries and a side-by-side comparison.</p>

<h2>Why timing creates two kinds of revenue</h2>

<p>Under <a href="/blog/cash-vs-accrual-accounting">accrual accounting</a>, revenue is recognized when you satisfy your obligation to the customer, typically when you deliver the goods or perform the service, regardless of when you invoice or get paid. Invoicing and delivery do not always happen on the same day, which leaves two possible gaps:</p>

<ul>
<li><strong>Invoice or cash first, work later:</strong> deferred revenue.</li>
<li><strong>Work first, invoice later:</strong> accrued revenue.</li>
</ul>

<p>Under cash-basis accounting, neither concept applies, because revenue is recorded only when cash arrives. Many very small businesses start on a cash basis and move to accrual as they grow, take on investors or need GAAP financial statements.</p>

<h2>What is deferred revenue?</h2>

<p>Deferred revenue, also called unearned revenue, is money you have received or billed in advance for goods or services you have not yet delivered. Because you still owe the customer something, it is recorded as a liability on the balance sheet. Each period, as you deliver, you move a portion out of the liability and into revenue.</p>

<p>Common invoicing situations that create deferred revenue:</p>

<ul>
<li>Annual or quarterly retainers billed upfront.</li>
<li>Project deposits collected before work starts, often via a <a href="/blog/deposit-invoice">deposit invoice</a>.</li>
<li>Prepaid subscriptions, maintenance plans or support contracts.</li>
<li>Gift cards, vouchers and prepaid class packs.</li>
<li>Event tickets sold before the event.</li>
</ul>

<p>Under the US revenue standard, ASC 606, deferred revenue is generally presented as a <strong>contract liability</strong>. Our explainer on <a href="/blog/revenue-recognition-asc-606">revenue recognition under ASC 606</a> covers the five-step model behind this.</p>

<h2>What is accrued revenue?</h2>

<p>Accrued revenue is revenue you have earned by delivering goods or services but have not yet invoiced. Because you have a right to payment, it is recorded as an asset, often labeled unbilled receivables or accrued income. When you send the invoice, the amount moves into regular accounts receivable.</p>

<p>Common situations that create accrued revenue:</p>

<ul>
<li>Hourly or time-and-materials work billed monthly in arrears.</li>
<li>Long projects where work runs ahead of agreed <a href="/blog/milestone-payments">milestone payments</a>.</li>
<li>Usage-based services billed after the period ends, as described in our guide to <a href="/blog/usage-based-billing-invoice">usage-based billing invoices</a>.</li>
<li>Interest earned on a deposit but not yet credited.</li>
</ul>

<p>Under ASC 606, if your right to payment depends only on time passing, the amount is a receivable. If it depends on something else, such as completing the next milestone, it is a <strong>contract asset</strong>. For most small businesses the practical label is "unbilled revenue."</p>

<h2>Deferred revenue vs accrued revenue: side-by-side comparison</h2>

<table>
<thead>
<tr><th>Feature</th><th>Deferred revenue</th><th>Accrued revenue</th></tr>
</thead>
<tbody>
<tr><td>Timing</td><td>Invoice or cash before delivery</td><td>Delivery before invoice</td></tr>
<tr><td>Balance sheet type</td><td>Liability</td><td>Asset</td></tr>
<tr><td>Other names</td><td>Unearned revenue, customer deposits, contract liability</td><td>Unbilled revenue, accrued income, contract asset</td></tr>
<tr><td>What you owe or are owed</td><td>You owe the customer goods or services</td><td>The customer owes you, but has not been billed</td></tr>
<tr><td>Typical examples</td><td>Annual retainers, deposits, subscriptions</td><td>Hourly work billed in arrears, unbilled milestones</td></tr>
<tr><td>Cash flow effect</td><td>Cash arrives early, helping liquidity</td><td>Cash arrives late, tying up working capital</td></tr>
<tr><td>Month-end adjustment</td><td>Move earned portion to revenue</td><td>Record earned but unbilled amount as revenue</td></tr>
<tr><td>Cleared when</td><td>You deliver the goods or services</td><td>You issue the invoice</td></tr>
</tbody>
</table>

<h2>Deferred revenue vs accrued revenue in practice: worked examples</h2>

<h3>Example 1: annual retainer billed upfront (deferred revenue)</h3>

<p>Illustrative scenario: a bookkeeping firm invoices a client $12,000 on January 1 for twelve months of monthly bookkeeping. The client pays on January 10. The firm uses accrual accounting.</p>

<p><strong>Monthly revenue:</strong> $12,000 ÷ 12 months = $1,000 per month.</p>

<table>
<thead>
<tr><th>Date</th><th>Entry</th><th>Debit</th><th>Credit</th></tr>
</thead>
<tbody>
<tr><td>Jan 1</td><td>Accounts receivable / Deferred revenue (invoice issued)</td><td>$12,000</td><td>$12,000</td></tr>
<tr><td>Jan 10</td><td>Cash / Accounts receivable (payment received)</td><td>$12,000</td><td>$12,000</td></tr>
<tr><td>Jan 31</td><td>Deferred revenue / Revenue (one month earned)</td><td>$1,000</td><td>$1,000</td></tr>
<tr><td>Feb 28</td><td>Deferred revenue / Revenue (one month earned)</td><td>$1,000</td><td>$1,000</td></tr>
</tbody>
</table>

<p>At the end of March, the firm has recognized 3 × $1,000 = $3,000 of revenue, and the deferred revenue balance is $12,000 − $3,000 = $9,000. The firm has all $12,000 in cash, but $9,000 of it still represents work owed to the client.</p>

<p>Some businesses record the invoice directly to deferred revenue only when payment is received, rather than when the invoice is issued. Whether a billed but unpaid advance invoice belongs on the balance sheet depends on whether the contract is non-cancellable and payment is due. Ask your accountant which approach fits your contracts. For retainers specifically, see our <a href="/blog/retainer-invoice">retainer invoice guide</a>.</p>

<h3>Example 2: hourly work billed in arrears (accrued revenue)</h3>

<p>Illustrative scenario: a freelance developer bills $100 an hour and invoices on the 5th of each month for the previous month's work. In March they work 40 hours. The March invoice is issued on April 5.</p>

<p><strong>Earned in March:</strong> 40 hours × $100 = $4,000.</p>

<table>
<thead>
<tr><th>Date</th><th>Entry</th><th>Debit</th><th>Credit</th></tr>
</thead>
<tbody>
<tr><td>Mar 31</td><td>Accrued revenue (unbilled receivables) / Revenue</td><td>$4,000</td><td>$4,000</td></tr>
<tr><td>Apr 5</td><td>Accounts receivable / Accrued revenue (invoice issued)</td><td>$4,000</td><td>$4,000</td></tr>
<tr><td>May 5</td><td>Cash / Accounts receivable (payment received, net 30)</td><td>$4,000</td><td>$4,000</td></tr>
</tbody>
</table>

<p>Without the March 31 accrual, March would show $4,000 too little revenue and April $4,000 too much. With it, each month reflects the work actually done. Notice the cash arrives on May 5, more than a month after the work ended, which is why accrued revenue is a signal to look at your billing frequency.</p>

<h3>Example 3: a project with both</h3>

<p>Illustrative scenario: a web agency signs a $20,000 website project. It invoices a 30% deposit at signing, 40% at design approval and 30% at launch.</p>

<ul>
<li><strong>Deposit:</strong> $20,000 × 0.30 = $6,000, paid upfront. At signing, the agency has delivered nothing, so the $6,000 is deferred revenue.</li>
<li><strong>End of month 1:</strong> the agency estimates it has completed 45% of the work: $20,000 × 0.45 = $9,000 earned. It has billed only $6,000. Earned minus billed is $9,000 − $6,000 = $3,000, so the contract shows a net $3,000 contract asset (unbilled revenue).</li>
<li><strong>Design approval invoice:</strong> $20,000 × 0.40 = $8,000. Total billed is now $14,000. If earned work is still $9,000, the contract has a net liability of $14,000 − $9,000 = $5,000.</li>
</ul>

<p>The same contract can swing between an asset and a liability depending on whether billing runs ahead of or behind the work. Measuring progress on long projects requires judgment, so this is an area where many small businesses lean on an accountant.</p>

<h2>Related terms that are easy to confuse</h2>

<p>Revenue has two timing accounts, and expenses have two mirror-image accounts. Knowing all four makes month-end adjustments much easier to follow:</p>

<ul>
<li><strong>Deferred revenue:</strong> you were paid early and owe the customer work (liability).</li>
<li><strong>Accrued revenue:</strong> you did the work and have not billed yet (asset).</li>
<li><strong>Prepaid expenses:</strong> you paid a supplier early, such as annual insurance or software, and they owe you service (asset).</li>
<li><strong>Accrued expenses:</strong> you received goods or services and have not been billed or paid yet, such as wages earned at month end (liability).</li>
</ul>

<p>Your deferred revenue is your customer's prepaid expense, and your accrued revenue is often their accrued expense. Thinking about the other side of the invoice can help you check that the treatment makes sense.</p>

<h2>How invoicing practices affect each balance</h2>

<p>Your invoicing choices directly shape both balances:</p>

<ul>
<li><strong>Billing in advance</strong> builds deferred revenue and improves cash flow. Clearly state the service period on the invoice, for example "Bookkeeping services, January 1 to December 31, 2027," so the customer and your accountant can see what is being prepaid.</li>
<li><strong>Billing in arrears</strong> creates accrued revenue and delays cash. Shortening the gap, for example by billing weekly or at each milestone, reduces it.</li>
<li><strong>Partial periods</strong> need clear calculations; a <a href="/blog/prorated-invoice">prorated invoice</a> shows how a partial month was priced.</li>
<li><strong>Deposits on the final invoice</strong> should show the amount already paid and the balance due, so the customer is not billed twice.</li>
</ul>

<p>Our free <a href="/invoice-generator">invoice generator</a> lets you add line items with service dates, record an amount already paid and show the balance due on a downloadable PDF. It does not post journal entries, so your accounting system or bookkeeper still handles the deferral and accrual adjustments. If you send a quote-style document before the contract is final, note that a <a href="/blog/proforma-invoice-guide">proforma invoice</a> is not a demand for payment and usually does not create deferred revenue until the customer pays.</p>

<h2>Checklist: recording deferred and accrued revenue each month</h2>

<ul>
<li>List every invoice issued for future periods and confirm the service dates.</li>
<li>Calculate how much of each prepaid amount was earned this month and move it to revenue.</li>
<li>Reconcile the deferred revenue balance to a schedule of remaining obligations by customer.</li>
<li>List all work delivered but not yet invoiced at month end, with hours or quantities.</li>
<li>Record accrued revenue for that unbilled work.</li>
<li>Reverse or clear last month's accruals when the related invoices are issued.</li>
<li>Check that deposits are applied correctly on final invoices.</li>
<li>Include both steps in your <a href="/blog/month-end-close-checklist">month-end close checklist</a>.</li>
</ul>

<h2>Common mistakes</h2>

<ul>
<li><strong>Recording prepayments as revenue on receipt.</strong> A $12,000 annual payment booked as January revenue overstates January profit and understates the next eleven months.</li>
<li><strong>Forgetting unbilled work at month end.</strong> If you bill monthly in arrears and skip accruals, your monthly results lag reality by a month.</li>
<li><strong>Not reversing accruals.</strong> If you record accrued revenue and then also record the invoice as new revenue, you count the same work twice.</li>
<li><strong>Vague service periods on invoices.</strong> Without dates, neither you nor the customer's accountant can tell what period the charge covers.</li>
<li><strong>Treating refundable deposits as earned.</strong> If the customer can cancel and get the deposit back, it is clearly still a liability.</li>
<li><strong>Assuming tax follows the books.</strong> Tax timing rules for advance payments can differ from accounting rules. Check before you file.</li>
</ul>

<h2>A note on tax treatment</h2>

<p>Financial reporting and tax reporting do not always follow the same timing. In the US, the IRS describes accounting methods, including cash and accrual and the treatment of advance payments, in <a href="https://www.irs.gov/publications/p538" target="_blank" rel="noopener noreferrer">Publication 538, Accounting Periods and Methods</a>. US GAAP revenue rules are set by the <a href="https://www.fasb.org/" target="_blank" rel="noopener noreferrer">Financial Accounting Standards Board</a>. Rules in other countries differ, and this article is general information, not tax or accounting advice.</p>

<h2>Summary</h2>

<p>Deferred revenue vs accrued revenue is really a question of which came first, the invoice or the work. Deferred revenue means you have been paid or billed ahead and owe the customer; accrued revenue means you have done the work and owe yourself an invoice. Track both at every month end, describe service periods clearly on your invoices, and your profit figures will reflect what actually happened. For more side-by-side explainers, browse our <a href="/blog/category/comparisons">comparisons</a> section.</p>
`,
  },
  {
    slug: "month-end-close-checklist",
    title: "Month-End Close Checklist for Small Businesses",
    description:
      "A practical month-end close checklist for small businesses: invoicing cutoff, bank reconciliation, receivables, payables, accruals and reports, with a timeline.",
    category: "guides",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "trial-balance",
      "petty-cash-log",
      "bank-reconciliation",
      "bookkeeping-basics",
      "year-end-invoicing-checklist",
    ],
    faqs: [
      {
        q: "What is a month-end close?",
        a: "A month-end close is the routine of checking, adjusting and finalizing your accounting records for the month just ended. It typically includes making sure every sale is invoiced, reconciling bank and card accounts, reviewing receivables and payables, recording accruals and depreciation, and producing a profit and loss statement and balance sheet you can rely on for decisions.",
      },
      {
        q: "How long should a month-end close take for a small business?",
        a: "There is no fixed standard, but many small businesses aim to finish within about five to ten working days after month end. A business with one bank account, few transactions and cash-basis books may close in a day or two. Adding more accounts, inventory, payroll and accrual adjustments usually takes longer. The goal is a steady, repeatable timeline.",
      },
      {
        q: "What is the most important step in the month-end close?",
        a: "Bank reconciliation is often treated as the foundation, because it proves that the cash in your books matches the cash in the bank. Many other errors, such as missing invoices, duplicate payments and unrecorded fees, come to light during reconciliation. Make sure all invoices and bills for the month are recorded first, then reconcile every bank and credit card account.",
      },
      {
        q: "Do I need a month-end close if I use cash accounting?",
        a: "Yes, although it is shorter. Cash-basis businesses still need to confirm every invoice is issued, reconcile bank and card accounts, categorize transactions correctly, check sales tax collected, and review overdue invoices. You can skip most accruals and deferrals, but the habit of closing each month makes year-end and tax filing far easier.",
      },
      {
        q: "What reports should I review after closing the month?",
        a: "At minimum, review the profit and loss statement, the balance sheet, the accounts receivable aging report and the accounts payable aging report. Many owners also compare results with the same month last year and with budget, and update a cash flow forecast. Look for unusual swings and ask why before treating the month as final.",
      },
      {
        q: "What does it mean to lock or close the books?",
        a: "Most accounting software lets you set a closing date that prevents changes to transactions before that date, sometimes with a password. Locking a closed period protects your reported figures from accidental edits. If a correction is needed later, it is usually recorded in the current period with a note rather than changing a month that has already been reported.",
      },
      {
        q: "Should I send all invoices before the month ends?",
        a: "Ideally, invoice work as soon as it is delivered rather than batching to month end. For the close itself, set a cutoff: all work delivered and goods shipped by the last day of the month should be invoiced or recorded as unbilled revenue in that month. This keeps revenue in the right period and stops invoices slipping into the next month.",
      },
      {
        q: "Can I do a month-end close without an accountant?",
        a: "Many owners handle routine closes themselves using accounting software and a checklist. Accruals, deferred revenue, inventory valuation and payroll liabilities are areas where an accountant's review is valuable, especially when you first set up the process. A common arrangement is to do the close internally and have an accountant review it quarterly.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A month-end close checklist is a repeatable list of steps to finalize your books each month: invoice all completed work, record bills, reconcile bank and card accounts, review receivables and payables, post accruals, check sales tax, and review the financial statements. Most small businesses can close within about a week of month end.</p>

<p>Closing the books every month sounds like something only large finance teams do. In practice it is one of the most useful habits a small business can build. A monthly close catches missing invoices before customers forget what they owe, surfaces bank errors while they are still easy to fix, and turns your profit and loss statement into something you can actually trust. It also makes year end and tax filing far less stressful. This guide gives you a practical month-end close checklist, a suggested timeline, a worked reconciliation example and the mistakes to avoid.</p>

<h2>What a month-end close is and why it matters</h2>

<p>The month-end close is the set of tasks you complete after the last day of a month to make sure that month's records are complete and accurate. Once closed, the month's numbers should not change. That gives you a fixed point to measure performance, compare with prior periods and make decisions.</p>

<p>For small businesses, the benefits are practical:</p>

<ul>
<li><strong>Cash:</strong> unbilled work and overdue invoices get noticed within weeks, not months.</li>
<li><strong>Accuracy:</strong> errors are easier to trace when you are looking at 30 days of activity instead of 365.</li>
<li><strong>Decisions:</strong> monthly profit, margins and cash position are available while they are still relevant.</li>
<li><strong>Compliance:</strong> sales tax, VAT and payroll filings rely on numbers that have already been checked.</li>
<li><strong>Financing:</strong> lenders often ask for recent monthly statements.</li>
</ul>

<p>If you are new to the underlying concepts, our <a href="/blog/bookkeeping-basics">bookkeeping basics guide</a> covers the essentials before you build a close routine.</p>

<h2>Month-end close timeline</h2>

<p>The exact schedule depends on how many accounts and transactions you have. The table below is an illustrative timeline for a small service business that uses accounting software and accrual accounting.</p>

<table>
<thead>
<tr><th>Working day</th><th>Focus</th><th>Key tasks</th></tr>
</thead>
<tbody>
<tr><td>Last 2 days of month</td><td>Prepare</td><td>Chase timesheets, confirm deliveries, issue final invoices</td></tr>
<tr><td>Day 1</td><td>Revenue cutoff</td><td>Confirm all completed work is invoiced or accrued</td></tr>
<tr><td>Day 1–2</td><td>Expenses</td><td>Enter supplier bills, receipts and card transactions</td></tr>
<tr><td>Day 2–3</td><td>Cash</td><td>Reconcile bank, card and payment processor accounts</td></tr>
<tr><td>Day 3–4</td><td>Balances</td><td>Review receivables, payables, sales tax, payroll liabilities</td></tr>
<tr><td>Day 4–5</td><td>Adjustments</td><td>Post accruals, deferrals, depreciation, prepaid amortization</td></tr>
<tr><td>Day 5</td><td>Review and lock</td><td>Review statements, investigate variances, lock the period</td></tr>
</tbody>
</table>

<h2>The month-end close checklist</h2>

<h3>1. Invoicing and revenue cutoff</h3>

<ul>
<li>List all work delivered and goods shipped during the month.</li>
<li>Confirm each item has an invoice dated in the correct month. Use our free <a href="/invoice-generator">invoice generator</a> to create any missing invoices as PDFs.</li>
<li>Check the invoice number sequence for gaps or duplicates. A consistent <a href="/blog/invoice-numbering-system">invoice numbering system</a> makes this quick.</li>
<li>Record unbilled work as accrued revenue if you use accrual accounting.</li>
<li>Move the earned portion of prepaid retainers and subscriptions out of deferred revenue. Our guide to <a href="/blog/deferred-revenue-vs-accrued-revenue">deferred revenue vs accrued revenue</a> explains both adjustments.</li>
<li>Issue any credit notes for returns, errors or agreed discounts. See the <a href="/blog/credit-note-guide">credit note guide</a> for the correct format.</li>
</ul>

<h3>2. Expenses and payables</h3>

<ul>
<li>Enter all supplier bills dated in the month, including ones that arrived late.</li>
<li>Upload receipts for card and cash purchases.</li>
<li>Record bills for services received but not yet invoiced by the supplier as accrued expenses.</li>
<li>Compare the accounts payable aging with supplier statements for your main vendors.</li>
<li>Flag duplicate bills or payments.</li>
</ul>

<h3>3. Cash and bank reconciliation</h3>

<ul>
<li>Reconcile every bank account, credit card and loan account to its statement. Our step-by-step <a href="/blog/bank-reconciliation">bank reconciliation guide</a> walks through the process.</li>
<li>Reconcile payment processors such as card terminals, online payment platforms and marketplaces, separating gross sales from fees.</li>
<li>Match customer payments to the right invoices through a consistent <a href="/blog/cash-application">cash application</a> process.</li>
<li>Investigate any unexplained deposit or withdrawal before closing.</li>
</ul>

<h3>4. Receivables review</h3>

<ul>
<li>Run the <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a>.</li>
<li>Confirm the aging total matches the accounts receivable balance on the balance sheet.</li>
<li>Send statements or reminders for overdue balances.</li>
<li>Decide on any balances that should be written off or provided for as doubtful.</li>
<li>Check for customer credits or overpayments that need refunding or applying.</li>
</ul>

<p>For example, if the balance sheet shows receivables of $48,250 but the aging report totals $47,050, the $1,200 difference ($48,250 − $47,050) must be explained before you close. Typical causes are a journal entry posted directly to the receivables account, a payment recorded as a deposit instead of against an invoice, or a credit note that was never applied. These figures are illustrative, but the habit of making the two numbers agree every month is what keeps your receivables trustworthy.</p>

<h3>5. Tax and payroll liabilities</h3>

<ul>
<li>Compare sales tax or VAT collected on invoices with the liability account. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> is handy for spot-checking invoice tax amounts.</li>
<li>Reconcile payroll liabilities to payroll reports and payments made.</li>
<li>Note filing deadlines for the coming month.</li>
</ul>

<h3>6. Adjusting entries</h3>

<ul>
<li>Record depreciation on fixed assets.</li>
<li>Amortize prepaid expenses such as annual insurance or software.</li>
<li>Accrue wages earned but not yet paid at month end.</li>
<li>Accrue interest on loans.</li>
<li>Adjust inventory to physical counts or perpetual records, if you hold stock.</li>
</ul>

<h3>7. Review, report and lock</h3>

<ul>
<li>Review the profit and loss statement against last month, the same month last year and budget.</li>
<li>Review the balance sheet: every balance should be explainable with a supporting schedule.</li>
<li>Update your cash flow forecast with the new opening balance.</li>
<li>Calculate a few key metrics, such as days sales outstanding and working capital.</li>
<li>Lock the period in your accounting software.</li>
<li>Save supporting documents in a consistent folder structure.</li>
</ul>

<h2>Worked example: reconciling the bank account</h2>

<p>The figures below are illustrative. At September 30, a small consultancy's bank statement shows a balance of $25,400. Its accounting software shows a cash balance of $26,780.</p>

<p><strong>Step 1, adjust the bank balance for timing items:</strong></p>
<ul>
<li>Customer payment deposited September 30, not yet on the statement (deposit in transit): + $3,200.</li>
<li>Check written to a supplier, not yet cashed (outstanding check): − $1,850.</li>
<li>Adjusted bank balance: $25,400 + $3,200 − $1,850 = $26,750.</li>
</ul>

<p><strong>Step 2, adjust the book balance for items only the bank knew about:</strong></p>
<ul>
<li>Monthly bank fee not yet recorded: − $45.</li>
<li>Interest earned not yet recorded: + $15.</li>
<li>Adjusted book balance: $26,780 − $45 + $15 = $26,750.</li>
</ul>

<p><strong>Step 3, compare:</strong> $26,750 = $26,750. The account reconciles. Record the fee and interest in the books, and note the deposit in transit and outstanding check so you can confirm they clear in October.</p>

<h3>Worked example: tying out sales tax</h3>

<p>Illustratively, the same business issued taxable invoices totaling $40,000 before tax in September at an 8% rate. Expected tax collected is $40,000 × 0.08 = $3,200. If the sales tax payable account shows $3,040, the $160 difference ($3,200 − $3,040) equals 8% of $2,000, which suggests one $2,000 invoice was recorded without tax or with the wrong tax code. Finding that in October is much easier than finding it at the end of the year.</p>

<h2>Setting up your first month-end close</h2>

<p>If you have never closed your books monthly, do not try to perfect every step at once. A practical approach is to build the routine in three stages over about a quarter:</p>

<ol>
<li><strong>Month one, cash and invoices.</strong> Confirm every job is invoiced, reconcile the bank and card accounts, and categorize transactions. This alone catches most errors.</li>
<li><strong>Month two, balances.</strong> Add the receivables and payables reviews, tie the aging reports to the balance sheet, and check sales tax.</li>
<li><strong>Month three, adjustments.</strong> Add accruals, deferrals, depreciation and prepaid amortization, ideally with an accountant's help the first time.</li>
</ol>

<p>Before you start, clean up the opening position. Reconcile the bank accounts to the last statement before your first close, clear out old uncleared items you can explain, and make sure the receivables list contains only invoices customers genuinely owe. Starting from a clean base means each new close only has to deal with one month of activity.</p>

<h2>Who does what in a small team</h2>

<p>In a one-person business, the owner does everything, so the checklist is the control. In a business with two or more people, a simple split adds protection against errors and fraud:</p>

<table>
<thead>
<tr><th>Task</th><th>Prepared by</th><th>Reviewed by</th></tr>
</thead>
<tbody>
<tr><td>Issue invoices and credit notes</td><td>Office manager or project lead</td><td>Owner</td></tr>
<tr><td>Enter bills and receipts</td><td>Bookkeeper</td><td>Owner (spot check)</td></tr>
<tr><td>Bank and card reconciliations</td><td>Bookkeeper</td><td>Owner or outside accountant</td></tr>
<tr><td>Adjusting entries</td><td>Accountant</td><td>Owner</td></tr>
<tr><td>Review statements and lock period</td><td>Owner</td><td>Accountant (quarterly)</td></tr>
</tbody>
</table>

<p>The principle is that the person who records a transaction should not be the only person who reviews it. Where that is not possible, a periodic outside review is a reasonable substitute.</p>

<h2>Cash basis vs accrual basis: what changes in the close</h2>

<table>
<thead>
<tr><th>Step</th><th>Cash basis</th><th>Accrual basis</th></tr>
</thead>
<tbody>
<tr><td>Invoice all completed work</td><td>Yes, for cash flow</td><td>Yes, for revenue and cash flow</td></tr>
<tr><td>Accrued revenue and expenses</td><td>Usually not recorded</td><td>Recorded each month</td></tr>
<tr><td>Deferred revenue and prepaids</td><td>Usually not recorded</td><td>Recorded and amortized</td></tr>
<tr><td>Bank and card reconciliation</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Receivables and payables review</td><td>Recommended for collections</td><td>Yes, ties to balance sheet</td></tr>
<tr><td>Depreciation</td><td>Often handled at year end</td><td>Usually monthly</td></tr>
</tbody>
</table>

<h2>Common mistakes</h2>

<ul>
<li><strong>Closing before every invoice is issued.</strong> Revenue lands in the wrong month and cash collection starts late.</li>
<li><strong>Reconciling only the main bank account.</strong> Credit cards, savings accounts and payment processors need reconciling too.</li>
<li><strong>Forcing reconciliations to balance.</strong> Posting a small "adjustment" to make the numbers match hides errors that can grow.</li>
<li><strong>Editing closed months.</strong> Changing a period you have already reported creates confusion. Lock periods and correct errors in the current month.</li>
<li><strong>Skipping the receivables tie-out.</strong> If the aging report and the balance sheet disagree, something was recorded incorrectly.</li>
<li><strong>Not keeping support.</strong> Every balance sheet figure should have a schedule or statement behind it.</li>
<li><strong>Changing the checklist every month.</strong> Consistency is what makes the close faster over time.</li>
</ul>

<h2>Tips to close faster</h2>

<ul>
<li><strong>Invoice as you go.</strong> If invoices are sent on delivery, the revenue cutoff step takes minutes.</li>
<li><strong>Reconcile weekly.</strong> Short weekly reconciliations make the month-end one trivial.</li>
<li><strong>Use standard templates.</strong> Consistent invoice layouts and numbering reduce matching errors.</li>
<li><strong>Assign owners and dates.</strong> Even in a two-person business, decide who does each step and by when.</li>
<li><strong>Keep a close log.</strong> Note issues found each month; recurring problems point to process fixes.</li>
</ul>

<h2>Record keeping and year end</h2>

<p>Each monthly close produces documents worth keeping: bank statements, reconciliations, invoices, receipts and reports. Check our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> for retention periods. In the US, the IRS explains which business records to keep and why in its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" target="_blank" rel="noopener noreferrer">recordkeeping guidance for small businesses</a>.</p>

<p>Twelve clean monthly closes make the year-end close mostly a formality. When December arrives, our <a href="/blog/year-end-invoicing-checklist">year-end invoicing checklist</a> covers the extra steps. For more step-by-step articles, browse our <a href="/blog/category/guides">guides</a>.</p>

<p>Start with the month-end close checklist above, adapt it to your accounts, and run it the same way every month. Within a few cycles it becomes a routine that takes hours rather than days, and your numbers become something you can plan with.</p>
`,
  },
];
