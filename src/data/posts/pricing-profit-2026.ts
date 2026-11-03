import type { PostDraft } from "../blog";

export const PRICING_PROFIT_2026_POSTS: PostDraft[] = [
  {
    slug: "customer-acquisition-cost",
    title: "Customer Acquisition Cost (CAC): Formula and Benchmarks",
    description:
      "Customer acquisition cost explained: the CAC formula, what to include, LTV:CAC and payback benchmarks, worked examples and practical ways to lower CAC.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "customer-lifetime-value",
      "contribution-margin",
      "break-even-point",
    ],
    faqs: [
      {
        q: "What is a good customer acquisition cost?",
        a: "There is no single good number, because CAC only makes sense next to what a customer is worth. A $2,000 CAC is cheap for a consulting firm whose clients bring $30,000 in gross profit, and ruinous for a shop selling $40 orders. Judge CAC by the LTV:CAC ratio, where around 3:1 is a widely used rule of thumb, and by payback period, where many businesses aim to recover CAC from gross profit within 12 months.",
      },
      {
        q: "Should CAC include salaries?",
        a: "For a fully loaded CAC, yes. Include the share of salaries, commissions and contractor fees spent on marketing and sales, plus ad spend, software and agency costs. Many businesses also track a paid or blended CAC that uses only media spend, which is useful for comparing channels. The mistake is to report the ad-only figure as your true CAC, because it can understate real acquisition cost by half or more.",
      },
      {
        q: "How is CAC different from cost per lead?",
        a: "Cost per lead divides spend by the number of leads or inquiries generated, while CAC divides spend by the number of paying customers won. If you spend $3,000 and get 60 leads, cost per lead is $50. If 6 of those leads become customers, CAC is $500. Cost per lead is an early signal; CAC is the number that tells you whether the channel actually pays for itself.",
      },
      {
        q: "How often should a small business calculate CAC?",
        a: "Monthly is a good rhythm for most small businesses, with a rolling three-month view to smooth out lumpy months. If your sales cycle is long, such as 60 to 90 days for B2B services, match spend to the period when those customers were actually being acquired, or use a quarterly calculation. Recalculate whenever you change prices, launch a new channel or hire someone into sales.",
      },
      {
        q: "Do referrals and repeat customers count in CAC?",
        a: "Repeat purchases from existing customers should not count as new customers, or you will make CAC look artificially low. Referred customers do count as new customers, and any referral rewards or discounts you paid count as acquisition cost. Many businesses track organic and referral customers separately so they can see what paid channels cost on their own and what the blended average looks like.",
      },
      {
        q: "What is the CAC payback period?",
        a: "CAC payback is the number of months it takes for a new customer's gross profit to cover what you spent to win them. The formula is CAC divided by monthly gross profit per customer. If CAC is $600 and a customer generates $100 a month in gross profit, payback is six months. Shorter payback means less cash tied up in growth, which matters a lot for businesses funding growth from their own revenue.",
      },
    ],
    content: `
<p>Customer acquisition cost (CAC) is what you spend, on average, to win one new paying customer. You calculate it by adding up sales and marketing costs for a period and dividing by the number of new customers won in that same period. On its own the number says little; next to customer lifetime value and payback period, it tells you whether growth is making money or quietly burning it.</p>

<p>This guide covers the CAC formula, what belongs in the cost side, the benchmarks people quote (and where they come from), a worked example for a small service business, and the practical levers that bring CAC down without starving growth.</p>

<h2>The customer acquisition cost formula</h2>
<p>The basic formula is simple:</p>
<p><strong>CAC = total sales and marketing costs in a period / number of new customers acquired in that period</strong></p>
<p>If you spent $9,000 on marketing and sales in a quarter and won 30 new customers, CAC is $300. The difficulty is not the arithmetic but deciding what goes into the top line and making sure the customers you count actually came from that spending period.</p>

<h3>What to include in acquisition costs</h3>
<table><thead><tr><th>Cost type</th><th>Examples</th><th>Include in fully loaded CAC?</th></tr></thead><tbody>
<tr><td>Paid media</td><td>Google Ads, Meta ads, sponsored listings, directory fees</td><td>Yes</td></tr>
<tr><td>People</td><td>Share of salaries, commissions, bonuses, freelance marketers</td><td>Yes, the portion spent on acquiring customers</td></tr>
<tr><td>Tools</td><td>CRM, email platform, landing page builder, scheduling software</td><td>Yes, the share used for sales and marketing</td></tr>
<tr><td>Agencies and contractors</td><td>SEO retainer, ad management, lead generation services</td><td>Yes</td></tr>
<tr><td>Promotions</td><td>Referral rewards, first-order discounts, free trials</td><td>Yes</td></tr>
<tr><td>Content and events</td><td>Trade show booths, sponsorships, video production</td><td>Yes</td></tr>
<tr><td>Customer success and support</td><td>Onboarding existing clients, account management</td><td>No, that is retention cost</td></tr>
<tr><td>Cost of delivering the product</td><td>Materials, subcontractors, hosting</td><td>No, that belongs in gross margin</td></tr>
</tbody></table>

<h3>Paid CAC vs blended CAC</h3>
<p>Most businesses end up tracking two versions. <strong>Paid CAC</strong> divides paid channel spend by customers attributed to paid channels; it is useful for deciding where the next dollar of ad budget goes. <strong>Blended CAC</strong> divides all acquisition costs by all new customers, including organic and referral customers; it shows what growth really costs the business. If your blended CAC looks healthy only because referrals are carrying the paid channels, you want to know that before you double the ad budget.</p>

<h2>How to calculate CAC step by step</h2>
<ol>
<li><strong>Pick a period.</strong> A month works for fast sales cycles; use a quarter if deals take 60 days or more to close.</li>
<li><strong>Total your acquisition spend.</strong> Pull ad invoices, software bills and payroll for that period. Your <a href="/blog/profit-and-loss-statement">profit and loss statement</a> is the easiest starting point if your expense categories are set up cleanly.</li>
<li><strong>Allocate shared costs.</strong> If you spend 40% of your own time on sales calls, decide on a fair hourly value and include 40% of it. Owners often skip this and end up with a CAC that is far too low.</li>
<li><strong>Count genuinely new customers.</strong> Use your invoicing records: a customer is new in the period they receive their first invoice. Exclude repeat buyers and reactivated accounts if you track them separately.</li>
<li><strong>Divide and segment.</strong> Calculate overall CAC, then CAC by channel where attribution is reasonable.</li>
<li><strong>Compare with value.</strong> Put CAC next to gross profit per customer and lifetime value, covered below.</li>
</ol>

<h2>CAC benchmarks: LTV:CAC ratio and payback period</h2>
<p>Raw CAC benchmarks by industry vary so widely that they are rarely useful; a law firm and a candle shop are not comparable. Two relative benchmarks are much more practical:</p>
<ul>
<li><strong>LTV:CAC ratio.</strong> Lifetime gross profit from a customer divided by CAC. A ratio of about 3:1 is the most widely quoted target, a figure that grew out of subscription software but is now used much more broadly. Below 1:1 you lose money on every customer; well above 5:1 may mean you are underinvesting in growth. Buyers of small online businesses also look at this ratio closely, as <a href="https://www.feinternational.com/blog/ltv-to-cac-ratio-what-benchmark-do-buyers-expect" target="_blank" rel="noopener noreferrer">FE International explains in its guide to LTV:CAC benchmarks</a>.</li>
<li><strong>CAC payback period.</strong> CAC divided by monthly gross profit per customer. Under 12 months is a common target; businesses funding growth from their own cash usually want it much shorter.</li>
</ul>
<table><thead><tr><th>LTV:CAC ratio</th><th>What it usually signals</th><th>Typical response</th></tr></thead><tbody>
<tr><td>Below 1:1</td><td>Each new customer loses money</td><td>Stop or cut the channel; review pricing</td></tr>
<tr><td>1:1 to 2:1</td><td>Thin; overhead may wipe out the gain</td><td>Raise prices, improve retention, tighten targeting</td></tr>
<tr><td>Around 3:1</td><td>Healthy for most businesses</td><td>Scale carefully, watch payback</td></tr>
<tr><td>5:1 and above</td><td>Very efficient, or underinvesting</td><td>Test more spend in the best channels</td></tr>
</tbody></table>
<p>Always use gross profit, not revenue, in the lifetime value side. A customer who pays $10,000 but costs $8,000 to serve is worth $2,000 to you, not $10,000. Our guide to <a href="/blog/customer-lifetime-value">customer lifetime value</a> walks through the full calculation, and the <a href="/blog/contribution-margin">contribution margin</a> guide shows how to get the per-customer profit figure right. If retention is weak, track <a href="/blog/churn-rate">churn rate</a> alongside CAC, because high churn shortens lifetime value faster than any ad campaign can compensate.</p>

<h2>Worked example: CAC for a small bookkeeping firm</h2>
<p>The figures below are illustrative. A two-person bookkeeping practice wants to know whether its marketing is paying off over one quarter.</p>
<table><thead><tr><th>Item</th><th>Quarterly cost</th></tr></thead><tbody>
<tr><td>Google Ads</td><td>$2,400</td></tr>
<tr><td>Directory listing and local sponsorship</td><td>$600</td></tr>
<tr><td>CRM and email tool</td><td>$300</td></tr>
<tr><td>Owner time on sales calls (60 hours at $75 internal rate)</td><td>$4,500</td></tr>
<tr><td>Referral thank-you credits</td><td>$400</td></tr>
<tr><td><strong>Total acquisition cost</strong></td><td><strong>$8,200</strong></td></tr>
</tbody></table>
<p>The firm sent first invoices to 10 new monthly clients that quarter. Fully loaded CAC is $8,200 / 10 = <strong>$820</strong>. Paid-only CAC, using just the $3,000 of ads and listings and the 6 clients who came from them, is $500, which is why the owner had thought marketing was cheap.</p>
<p>Each client pays $450 a month and costs about $200 a month in staff time and software to serve, so monthly gross profit is $250. Payback is $820 / $250 = <strong>3.3 months</strong>. If the average client stays 30 months, lifetime gross profit is $7,500 and LTV:CAC is about 9:1. That is a strong result, and it suggests the firm could afford to spend more on acquisition, as long as it has capacity to serve the extra clients.</p>

<h2>How to lower customer acquisition cost</h2>
<p>There are only three ways to improve CAC: spend less for the same customers, convert more of the prospects you already reach, or make each customer worth more so a higher CAC is acceptable.</p>
<h3>Improve conversion before buying more traffic</h3>
<p>If 100 inquiries produce 5 customers, getting that to 8 cuts CAC by more than a third without spending another dollar. Respond to inquiries within hours, send a clear proposal quickly, and make it easy to say yes. A tidy <a href="/blog/freelance-proposal-template">proposal template</a> and a defined <a href="/blog/sales-pipeline-stages">sales pipeline</a> help here.</p>
<h3>Lean on referrals and reviews</h3>
<p>Referred customers usually convert faster and stay longer. Asking every happy client for a review or referral costs very little; see our guide on <a href="/blog/how-to-get-clients-as-a-freelancer">how to get clients as a freelancer</a> for low-cost channels that work for small service firms.</p>
<h3>Raise prices or average order value</h3>
<p>CAC is a fixed cost per customer, so a higher first invoice spreads it further. Packages, minimum project sizes and annual plans all shorten payback. If you have not reviewed prices in a year, read <a href="/blog/how-to-raise-prices">how to raise prices</a> before cutting marketing.</p>
<h3>Cut channels that never pay back</h3>
<p>Review CAC by channel every quarter. A channel with a payback longer than your typical customer lifetime should be fixed or dropped.</p>

<h2>Common CAC mistakes</h2>
<ul>
<li><strong>Leaving out people costs.</strong> Owner time and sales salaries are usually the biggest acquisition costs in service businesses.</li>
<li><strong>Mismatched timing.</strong> Spending in March and counting customers who signed in March, when your sales cycle is 90 days, distorts both months.</li>
<li><strong>Counting existing customers as new.</strong> Repeat orders inflate the denominator and make CAC look better than it is.</li>
<li><strong>Using revenue instead of gross profit in LTV.</strong> This makes thin-margin businesses look far healthier than they are; check your <a href="/blog/average-profit-margin-by-industry">margin against industry averages</a>.</li>
<li><strong>Ignoring cash timing.</strong> A great LTV:CAC ratio can still drain the bank if customers pay slowly. Factor acquisition spend into your <a href="/blog/cash-flow-forecast">cash flow forecast</a>.</li>
</ul>

<h2>CAC for subscription and retainer businesses</h2>
<p>If you bill monthly, CAC pairs naturally with <a href="/blog/monthly-recurring-revenue">monthly recurring revenue</a>. Divide CAC by the new MRR each customer brings, adjusted for gross margin, to get payback in months. Retainer clients and subscription customers make CAC easier to justify because revenue repeats, but only if they stay; a client who cancels in month two never repays a $1,000 acquisition cost.</p>

<h2>CAC for freelancers and one-person businesses</h2>
<p>Freelancers rarely think in terms of CAC, but the metric matters just as much when the main cost is your own time. Suppose you spend 10 unpaid hours a month on proposals, discovery calls and portfolio updates, your target rate is $80 an hour, and you also pay $40 a month for a job board and $25 in platform bids. That is $865 of acquisition cost. If it lands two new clients a month, CAC is about $430 per client.</p>
<p>Now compare channels. If referrals bring one client a month for two hours of follow-up, that channel's CAC is $160. If a marketplace brings one client for eight hours of proposals plus fees, it is closer to $700. Knowing this helps you decide where to spend the next free afternoon. It also explains why many experienced freelancers set a minimum project size: a $300 job that costs $430 to win is a loss before any work starts.</p>

<h2>Where invoicing fits in</h2>
<p>Your invoices are the cleanest record of when a customer became a customer and how much they have paid since. Tag each new client with their source (referral, ads, directory) when you create their first invoice, and you can calculate CAC and lifetime value by channel straight from your billing history. Consistent invoice numbering from the <a href="/tools/invoice-number-generator">invoice number generator</a> makes this easier to sort later.</p>

<p>When a new client signs, bill them promptly and professionally: you can create invoices with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up required, and download each one as a PDF in under a minute.</p>
`,
  },
  {
    slug: "profit-first-method",
    title: "Profit First Method for Small Business: How It Works",
    description:
      "The Profit First method explained: how to set up the accounts, target allocation percentages by revenue, the 10/25 rule, quarterly distributions and a worked example.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-pay-yourself-as-a-business-owner",
      "cash-flow-management",
      "quarterly-estimated-taxes-freelancers",
    ],
    faqs: [
      {
        q: "What are the five Profit First accounts?",
        a: "The core setup is an Income account where all customer payments land, plus four allocation accounts: Profit, Owner's Pay, Tax and Operating Expenses. Many people also open a separate no-temptation savings account at a different bank to hold the Profit and Tax money. Some businesses add accounts for materials, subcontractors or a vault reserve, but the five-account version is the standard starting point described by Mike Michalowicz.",
      },
      {
        q: "What percentage should I put in the Profit account?",
        a: "The commonly published target for businesses with under $250,000 in real revenue is 5% to profit, 50% to owner's pay, 15% to tax and 30% to operating expenses. Larger businesses shift more toward profit and operating expenses. Do not jump straight to the target, though. Start with your current percentages, often just 1% to profit, and move a step closer each quarter.",
      },
      {
        q: "What is real revenue in Profit First?",
        a: "Real revenue is total revenue minus materials and subcontractor costs that pass straight through to the job. If you invoice $100,000 and spend $30,000 on materials and subcontractors for those jobs, real revenue is $70,000. The allocation percentages apply to real revenue, which stops businesses with high pass-through costs, such as contractors and agencies, from using unrealistic targets.",
      },
      {
        q: "Does Profit First work for freelancers?",
        a: "Yes, and it is often simpler for freelancers because there are few operating expenses and no staff. The main benefits are setting tax money aside on every payment, paying yourself a steady amount and building a reserve. A freelancer can start with four accounts: income, owner's pay, tax and expenses, then add profit once cash flow is stable.",
      },
      {
        q: "Is Profit First the same as accounting?",
        a: "No. Profit First is a cash management system that sits on top of normal bookkeeping. You still need proper books, a profit and loss statement and tax returns. Moving money between bank accounts does not change your taxable profit. The system simply makes sure that cash for taxes, the owner and profit is set aside before it is spent on operating costs.",
      },
      {
        q: "How often do you take a Profit First distribution?",
        a: "The method calls for a quarterly profit distribution. At the end of each quarter, the owner takes a portion of the Profit account balance, commonly described as 50%, as a reward, and the rest stays as a reserve. The distribution is meant to be spent on the owner, not reinvested in the business, which reinforces the habit of running a profitable company.",
      },
    ],
    content: `
<p>The Profit First method flips the usual formula of revenue minus expenses equals profit. Instead, every time money comes in, you move a fixed percentage into profit, owner's pay and tax accounts first, and run the business on what is left. It was popularized by Mike Michalowicz in his book <em>Profit First</em>, and it works because it uses bank accounts, not willpower, to stop operating costs from swallowing everything.</p>

<p>This guide explains how to set up Profit First, the target allocation percentages most people use, the 10/25 transfer rhythm, quarterly distributions and a worked example for a small service business. It also covers where the system falls short and how it fits with invoicing and taxes.</p>

<h2>How the Profit First method works</h2>
<p>Traditional accounting reports profit after the fact. Profit First treats profit as a line item you pay first. The logic borrows from Parkinson's law: spending expands to fill the money available. If the operating account only ever sees 30% to 50% of revenue, you naturally find leaner ways to operate.</p>
<p>The system has three parts:</p>
<ol>
<li><strong>Separate bank accounts</strong> for each purpose, so balances tell you at a glance what you can spend.</li>
<li><strong>Allocation percentages</strong> applied to every deposit.</li>
<li><strong>A fixed rhythm</strong> for transfers and a quarterly review.</li>
</ol>

<h2>Setting up the Profit First accounts</h2>
<table><thead><tr><th>Account</th><th>Purpose</th><th>Practical tip</th></tr></thead><tbody>
<tr><td>Income</td><td>All customer payments land here</td><td>Put this account number on every invoice</td></tr>
<tr><td>Profit</td><td>Reward for owners and a reserve</td><td>Hold at a separate bank to reduce temptation</td></tr>
<tr><td>Owner's Pay</td><td>Your regular salary or draw</td><td>Pay yourself a fixed amount twice a month</td></tr>
<tr><td>Tax</td><td>Income tax, self-employment tax, estimated payments</td><td>Also at the separate bank; never borrow from it</td></tr>
<tr><td>Operating Expenses</td><td>Rent, software, payroll, supplies</td><td>The only account your debit card draws on</td></tr>
</tbody></table>
<p>If you do not yet have a dedicated account for the business, start with our guide to choosing a <a href="/blog/business-bank-account-for-freelancers">business bank account for freelancers</a>. Many online banks let you open several sub-accounts for free, which makes Profit First much easier to run than it was when the book first came out.</p>

<h2>Profit First percentages by revenue</h2>
<p>Michalowicz calls the targets Target Allocation Percentages (TAPs). They are applied to <strong>real revenue</strong>, which is total revenue minus materials and subcontractor costs that pass straight through to jobs. The commonly published table, reproduced in <a href="https://relayfi.com/blog/profit-first-percentages" target="_blank" rel="noopener noreferrer">Relay's guide to Profit First percentages</a>, looks like this:</p>
<table><thead><tr><th>Real revenue</th><th>Profit</th><th>Owner's Pay</th><th>Tax</th><th>Operating Expenses</th></tr></thead><tbody>
<tr><td>Under $250K</td><td>5%</td><td>50%</td><td>15%</td><td>30%</td></tr>
<tr><td>$250K to $500K</td><td>10%</td><td>35%</td><td>15%</td><td>40%</td></tr>
<tr><td>$500K to $1M</td><td>15%</td><td>20%</td><td>15%</td><td>50%</td></tr>
<tr><td>$1M to $5M</td><td>20%</td><td>10%</td><td>15%</td><td>55%</td></tr>
<tr><td>$5M and up</td><td>25%</td><td>5%</td><td>15%</td><td>55%</td></tr>
</tbody></table>
<p>These are targets, not a starting point. Industry-specific versions exist for dentists, contractors, agencies and others, and the 15% tax figure in particular needs checking against your real tax bill, which depends on your entity type, state and deductions.</p>

<h3>Current allocation percentages (CAPs)</h3>
<p>Before setting any percentages, work out what you actually do today. Take last year's real revenue and calculate what share went to owner's pay, taxes and expenses, and what was left as profit. Those are your Current Allocation Percentages. If profit was zero or negative, start the Profit account at 1%. The point is to begin immediately with something small and build the habit.</p>

<h2>Profit First step by step</h2>
<ol>
<li><strong>Calculate real revenue</strong> for the last 12 months from your <a href="/blog/profit-and-loss-statement">profit and loss statement</a>, subtracting materials and subcontractors. Our guide to <a href="/blog/cost-of-goods-sold">cost of goods sold</a> helps separate pass-through costs.</li>
<li><strong>Work out your CAPs</strong> and choose first-quarter percentages a little closer to the TAPs.</li>
<li><strong>Open the accounts</strong> and label them clearly.</li>
<li><strong>Route all customer payments to Income.</strong> Update your invoice template so the payment details point to that account.</li>
<li><strong>Transfer on the 10th and 25th.</strong> Twice a month, total what landed in Income since the last transfer and split it by your percentages. This is the 10/25 rule; any two fixed dates work if they suit your cash flow better.</li>
<li><strong>Pay bills only from Operating Expenses.</strong> If it runs short, that is the signal to cut costs or raise prices, not to raid the Tax account.</li>
<li><strong>Take a quarterly distribution.</strong> Each quarter, the owner takes a share of the Profit account, commonly 50%, as reported in <a href="https://www.contractormag.com/management/article/20883015/pay-yourself-profit-account-first" target="_blank" rel="noopener noreferrer">this Contractor magazine overview</a>, and leaves the rest as a reserve.</li>
<li><strong>Adjust quarterly.</strong> Move each percentage 1 to 2 points closer to the target every quarter.</li>
</ol>

<h2>Worked example: a design studio on Profit First</h2>
<p>The figures are illustrative. A two-person design studio collected $18,000 in the first half of a month, of which $3,000 was print and stock costs re-billed to clients. Real revenue for the period is $15,000.</p>
<p>Last year the owner kept almost nothing, so the studio starts with conservative percentages rather than the full targets:</p>
<table><thead><tr><th>Account</th><th>Starting %</th><th>Transfer on the 10th</th></tr></thead><tbody>
<tr><td>Materials (pass-through)</td><td>n/a</td><td>$3,000</td></tr>
<tr><td>Profit</td><td>2%</td><td>$300</td></tr>
<tr><td>Owner's Pay</td><td>40%</td><td>$6,000</td></tr>
<tr><td>Tax</td><td>15%</td><td>$2,250</td></tr>
<tr><td>Operating Expenses</td><td>43%</td><td>$6,450</td></tr>
<tr><td><strong>Total</strong></td><td><strong>100%</strong></td><td><strong>$18,000</strong></td></tr>
</tbody></table>
<p>Over the quarter, six such transfers build roughly $1,800 in Profit. At quarter end the owner takes $900 and leaves $900 in reserve. Next quarter, the studio moves Profit to 3% and Operating Expenses to 42%, and looks for $150 a month in software it no longer needs.</p>

<h2>Common Profit First mistakes</h2>
<ul>
<li><strong>Jumping to the target percentages.</strong> Going from 0% to 10% profit overnight usually starves operations and the system gets abandoned within a month.</li>
<li><strong>Underfunding tax.</strong> 15% is a placeholder. Self-employed people in the US pay self-employment tax on top of income tax, so check what you owe and fund <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes</a> from this account.</li>
<li><strong>Treating the Profit account as an emergency fund.</strong> Keep a separate <a href="/blog/business-emergency-fund">business emergency fund</a> so a bad month does not wipe out the profit habit.</li>
<li><strong>Skipping transfers when money is tight.</strong> Tight months are exactly when the discipline matters; lower the percentages slightly rather than skipping.</li>
<li><strong>Ignoring receivables.</strong> Profit First allocates cash received, not invoices sent. Slow-paying clients delay every account, so enforce <a href="/blog/late-payment-fees">late payment fees</a> and clear payment terms.</li>
</ul>

<h2>Profit First for freelancers and solo businesses</h2>
<p>Solo operators often get the most from Profit First because the biggest risk in a one-person business is spending tax money and then facing a large bill in April. A simple four-account version works well: Income, Owner's Pay, Tax and Operating Expenses, with Profit added once the first three are stable.</p>
<p>For example, a freelance copywriter receiving $6,000 in a month might move 25% ($1,500) to Tax, 55% ($3,300) to Owner's Pay, 15% ($900) to Operating Expenses for software and equipment, and 5% ($300) to Profit. Owner's Pay then funds a fixed personal transfer twice a month, which smooths out the feast-and-famine pattern of freelance income. In a slow month, the twice-monthly pay stays the same until the Owner's Pay balance runs low, which is an early warning to find more work rather than a sudden crisis.</p>

<h2>What to do if the operating account runs short</h2>
<p>Every business following Profit First hits this at some point. Resist the urge to pull money back from the Tax or Profit accounts. Instead, work through these in order:</p>
<ol>
<li><strong>Chase receivables.</strong> Send reminders on every overdue invoice; one late client is often the whole problem.</li>
<li><strong>Cut or pause recurring costs.</strong> Review subscriptions, unused software seats and discretionary spending.</li>
<li><strong>Lower the operating percentage gradually,</strong> not the others, by adjusting the business model: raise prices, drop unprofitable services, or renegotiate supplier terms.</li>
<li><strong>Temporarily reduce Owner's Pay</strong> before touching Tax. Taxes are owed whether or not the month was good.</li>
</ol>

<h2>Profit First vs a traditional budget</h2>
<table><thead><tr><th></th><th>Profit First</th><th>Traditional budget</th></tr></thead><tbody>
<tr><td>Starting point</td><td>Cash received</td><td>Forecast revenue and costs</td></tr>
<tr><td>Profit</td><td>Set aside first</td><td>Whatever is left over</td></tr>
<tr><td>Control mechanism</td><td>Separate bank balances</td><td>Reports compared with plan</td></tr>
<tr><td>Best for</td><td>Owners who struggle with cash discipline</td><td>Businesses needing detailed planning</td></tr>
</tbody></table>
<p>The two work well together. A <a href="/blog/small-business-budget">small business budget</a> tells you what you expect to spend; Profit First makes sure the money for profit and tax is gone from the operating account before that spending happens. You still need accrual-based reporting to see true <a href="/blog/gross-profit-vs-net-profit">gross and net profit</a>, because bank balances alone do not show unpaid bills or unbilled work.</p>

<h2>When Profit First is not a good fit</h2>
<p>Businesses with very thin margins and heavy inventory, such as some retailers, can find the fixed percentages awkward because large stock purchases do not follow a twice-monthly rhythm. Seasonal businesses may need to hold more in the Operating Expenses account to cover the quiet months. And if you have significant debt, many practitioners suggest directing most of each quarterly distribution toward paying it down. None of these rule the method out; they just mean adapting percentages and timing rather than following the table blindly.</p>
<p>This is general information, not tax or financial advice. Your accountant can help set a realistic tax percentage and check how owner draws or salary should be handled for your entity type; see <a href="/blog/how-to-pay-yourself-as-a-business-owner">how to pay yourself as a business owner</a> for the basics, and use <a href="/blog/year-end-tax-planning-small-business">year-end tax planning</a> to check the Tax account balance before the year closes.</p>

<h2>Make Profit First easier with clean invoicing</h2>
<p>Profit First runs on cash in the Income account, so the faster clients pay, the smoother every transfer. Clear due dates, the right bank details and a consistent invoice format all help. Cash management habits like these are covered further in our guide to <a href="/blog/cash-flow-management">cash flow management</a>.</p>

<p>Create professional invoices that point clients straight to your Income account with our <a href="/invoice-generator">free invoice generator</a>: no sign-up, and every invoice downloads as a PDF ready to send.</p>
`,
  },
  {
    slug: "wholesale-pricing",
    title: "Wholesale Pricing Formula with Examples",
    description:
      "Wholesale pricing formula explained with worked examples: cost-based and retail-backward methods, typical margins, tiered pricing, minimums and wholesale invoices.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "markup-vs-margin",
      "cost-plus-pricing",
      "how-to-price-a-product",
    ],
    faqs: [
      {
        q: "What is the formula for wholesale price?",
        a: "The cost-based formula is wholesale price = cost per unit / (1 - target wholesale margin). For a $10 unit cost and a 40% margin, that is $10 / 0.60 = $16.67. The retail-backward formula starts from the expected shelf price and divides by the retailer's markup factor; a $40 retail price with a keystone markup gives a $20 wholesale price. Good pricing checks both and makes sure they agree.",
      },
      {
        q: "What percentage of retail is wholesale?",
        a: "In many consumer product categories, wholesale is roughly 50% of the suggested retail price, because retailers commonly use keystone pricing, which doubles the wholesale cost. Some categories differ: grocery and electronics retailers often work on thinner margins, so wholesale may be 60% to 75% of retail, while jewelry and some gift items can be priced at a third of retail or less.",
      },
      {
        q: "What is a good wholesale margin for a small brand?",
        a: "Many small product brands target a wholesale gross margin between about 30% and 50%. Below that, there is little room for marketing, returns, trade show costs and slow-paying accounts. The right figure depends on your costs and category. If you cannot reach a healthy margin at a wholesale price retailers will accept, the fix is usually lower production costs or a higher retail price point, not a thinner margin.",
      },
      {
        q: "Should wholesale customers pay sales tax?",
        a: "Generally, sales for resale are exempt from sales tax in US states that tax the product, but only if the buyer gives you a valid resale certificate. Keep a copy on file for each wholesale account. Without it, you may be liable for the tax the state says you should have collected. Rules vary by state, so check the requirements where you sell and ship.",
      },
      {
        q: "What payment terms do wholesale buyers expect?",
        a: "New accounts often pay up front or by card on their first orders. Established retailers commonly expect net 30 terms, and larger chains may ask for net 60 or longer. Offering terms is a credit decision: check references, set a credit limit, and consider an early payment discount such as 2/10 net 30 to speed up cash. State the terms clearly on every wholesale invoice.",
      },
      {
        q: "What is a wholesale minimum order?",
        a: "A minimum order quantity or minimum order value is the smallest order you accept at wholesale prices, for example 12 units per item or $250 per order. Minimums protect your margin because picking, packing and invoicing a small order costs nearly as much as a large one. Many brands set a higher opening order minimum and a lower reorder minimum to reward repeat buyers.",
      },
    ],
    content: `
<p>A wholesale price is what you charge a retailer or reseller who buys in volume and resells to end customers. The standard wholesale pricing formula is unit cost divided by one minus your target margin, then checked against the retail price your stockists need to hit. Get both sides right and wholesale becomes a reliable volume channel; get either wrong and you either lose money on every case or price yourself out of shops.</p>

<p>This guide covers the two main wholesale pricing formulas, typical margins, tiered and volume pricing, worked examples for a small product brand, and the paperwork that comes with selling wholesale, including resale certificates and wholesale invoices.</p>

<h2>Wholesale vs retail: how the price chain works</h2>
<p>A typical product passes through three prices:</p>
<ul>
<li><strong>Cost of goods (COGS):</strong> what it costs you to make or buy one unit, including materials, labor, packaging and inbound freight.</li>
<li><strong>Wholesale price:</strong> what the retailer pays you.</li>
<li><strong>Retail price (MSRP):</strong> what the end customer pays in the shop.</li>
</ul>
<p>Some products also go through a distributor, who buys from you at a lower distributor price and sells to retailers at wholesale. Each step needs its own margin, which is why a product that costs $5 to make often sells for $25 or more in a shop. If you are fuzzy on the difference between markup and margin, read <a href="/blog/markup-vs-margin">markup vs margin</a> first; mixing them up is the single most common wholesale pricing error.</p>

<h2>Wholesale pricing formula 1: cost-based</h2>
<p><strong>Wholesale price = unit cost / (1 - target margin)</strong></p>
<p>If a candle costs $6.00 to produce and you want a 50% wholesale margin, the wholesale price is $6.00 / 0.50 = $12.00. For a 40% margin, it is $6.00 / 0.60 = $10.00.</p>
<p>Make sure unit cost is complete. Include materials, direct labor, packaging, labels, inbound shipping and a share of production overhead. Our guide to <a href="/blog/cost-of-goods-sold">cost of goods sold</a> lists what belongs in the figure. This approach is a variant of <a href="/blog/cost-plus-pricing">cost-plus pricing</a>, and it guarantees margin but ignores what the market will pay.</p>

<h2>Wholesale pricing formula 2: retail-backward</h2>
<p><strong>Wholesale price = expected retail price / retailer markup factor</strong></p>
<p>Start with what shoppers will pay for a product like yours in the stores you are targeting. Many independent retailers use <a href="/blog/keystone-pricing">keystone pricing</a>, doubling the wholesale cost, so a $28 retail price implies a $14 wholesale price. If the retailer needs a higher markup, say 2.2x to 2.5x for gift and boutique items, the wholesale price drops accordingly.</p>
<p>Then check: does $14 cover your unit cost with enough margin left? If your cost is $6, your wholesale margin is ($14 - $6) / $14 = 57%. Healthy. If your cost is $10, your margin is only 29%, and you need to cut cost or reposition the product.</p>

<h2>Typical wholesale margins and markups</h2>
<table><thead><tr><th>Multiplier on cost</th><th>Markup</th><th>Gross margin</th><th>Where you see it</th></tr></thead><tbody>
<tr><td>1.25x</td><td>25%</td><td>20%</td><td>Distributors, commodity goods</td></tr>
<tr><td>1.5x</td><td>50%</td><td>33%</td><td>Food and beverage brands, some manufacturing</td></tr>
<tr><td>1.75x</td><td>75%</td><td>43%</td><td>Many small consumer product brands</td></tr>
<tr><td>2x</td><td>100%</td><td>50%</td><td>Handmade goods, cosmetics, apparel brands</td></tr>
<tr><td>2.5x and up</td><td>150%+</td><td>60%+</td><td>Brands with low unit costs or strong demand</td></tr>
</tbody></table>
<p>These are broad ranges, not rules. Compare them against your own <a href="/blog/average-profit-margin-by-industry">industry's average profit margins</a> and remember that wholesale gross margin has to cover trade shows, samples, sales reps, returns and the cost of carrying receivables.</p>

<h2>Worked example: pricing a skincare line for wholesale</h2>
<p>The figures are illustrative. A small skincare brand sells a face oil direct to consumers for $36 and wants to pitch it to boutiques.</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Result</th></tr></thead><tbody>
<tr><td>Unit cost</td><td>Oil $3.10 + bottle $1.20 + label and box $0.90 + labor $1.40 + inbound freight $0.40</td><td>$7.00</td></tr>
<tr><td>Retail-backward price</td><td>$36 MSRP / 2 (keystone)</td><td>$18.00</td></tr>
<tr><td>Wholesale margin at $18</td><td>($18 - $7) / $18</td><td>61%</td></tr>
<tr><td>Cost-based floor at 45% margin</td><td>$7 / 0.55</td><td>$12.73</td></tr>
<tr><td>Distributor price (if used)</td><td>Distributor needs about 25% margin on $18</td><td>$13.50</td></tr>
<tr><td>Margin at distributor price</td><td>($13.50 - $7) / $13.50</td><td>48%</td></tr>
</tbody></table>
<p>The brand sets wholesale at $18 with a 24-unit opening order minimum. Because $13.50 still leaves a 48% margin, it can also afford to work with a distributor later. If unit cost had been $11, the distributor price would leave only 19%, a signal to redesign packaging or raise MSRP before expanding.</p>

<h2>Tiered and volume wholesale pricing</h2>
<p>Many brands reward larger orders with lower unit prices. Keep tiers simple and make sure the lowest tier still clears your margin floor.</p>
<table><thead><tr><th>Order size</th><th>Unit price</th><th>Margin on $7 cost</th></tr></thead><tbody>
<tr><td>24 to 71 units</td><td>$18.00</td><td>61%</td></tr>
<tr><td>72 to 143 units</td><td>$17.00</td><td>59%</td></tr>
<tr><td>144+ units</td><td>$16.00</td><td>56%</td></tr>
</tbody></table>
<p>Publish tiers on a wholesale <a href="/blog/price-list-template">price list</a> or line sheet so buyers can plan orders. Volume discounts can also be shown as a line on the invoice; see <a href="/blog/discount-on-invoice">how to show a discount on an invoice</a>.</p>

<h2>Pricing through a distributor: the full chain</h2>
<p>Once you sell through distributors, three margins have to fit between your cost and the shelf price. Working the chain backward from retail shows whether a product can survive it.</p>
<table><thead><tr><th>Level</th><th>Price</th><th>Margin taken at this level</th></tr></thead><tbody>
<tr><td>Retail shelf price</td><td>$36.00</td><td>Retailer keeps 50% ($18.00)</td></tr>
<tr><td>Retailer buys from distributor at</td><td>$18.00</td><td>Distributor keeps 25% ($4.50)</td></tr>
<tr><td>Distributor buys from brand at</td><td>$13.50</td><td>Brand keeps 48% ($6.50)</td></tr>
<tr><td>Brand's unit cost</td><td>$7.00</td><td>n/a</td></tr>
</tbody></table>
<p>The general rule many brands follow: if the product cannot earn a healthy margin at the distributor price, do not build the business around wholesale until costs come down. Brands that set wholesale prices assuming they will always sell direct to shops often get stuck when a distributor offers national reach at a price they cannot afford.</p>

<h2>Line sheets and what wholesale buyers expect</h2>
<p>Retail buyers compare dozens of brands at once, so a clear line sheet makes pricing easy to accept. A good wholesale line sheet includes:</p>
<ul>
<li>Product photo, name and SKU for every item.</li>
<li>Wholesale price and MSRP side by side, so the buyer sees their margin instantly.</li>
<li>Case pack size or units per inner carton.</li>
<li>Opening order minimum and reorder minimum.</li>
<li>Payment terms, shipping costs or free-freight threshold, and lead time.</li>
<li>Your contact details and how to place an order.</li>
</ul>
<p>Buyers will also ask about exclusivity, returns of slow sellers, testers and marketing support. Decide your answers before the first meeting, because each concession has a cost that should already be built into your wholesale price.</p>

<h2>What to do if retailers push back on your wholesale price</h2>
<p>If several buyers say your wholesale price is too high, find out which part of the chain is the problem. If they love the product but your MSRP feels high for their customers, the issue is your cost structure or retail positioning, not wholesale alone. Options include ordering in larger production runs to lower unit cost, simplifying packaging, increasing the case pack so freight per unit falls, or offering a free-freight threshold instead of a lower unit price. Cutting the wholesale price below your margin floor to win one account usually backfires, because every future account will expect the same price.</p>

<h2>Steps to set your wholesale prices</h2>
<ol>
<li><strong>Calculate a complete unit cost,</strong> including freight and packaging.</li>
<li><strong>Research retail prices</strong> for comparable products in your target stores.</li>
<li><strong>Work backward</strong> from retail using the markup your stockists expect.</li>
<li><strong>Check the margin</strong> against your minimum acceptable margin.</li>
<li><strong>Set an MSRP</strong> and protect it consistently across your own website and stockists; some brands formalize this with a <a href="/blog/map-pricing-policy">MAP pricing policy</a>.</li>
<li><strong>Set minimums and terms:</strong> opening order, reorder minimum, payment terms and shipping policy.</li>
<li><strong>Review annually,</strong> or whenever input costs move more than a few percent.</li>
</ol>

<h2>Common wholesale pricing mistakes</h2>
<ul>
<li><strong>Undercutting your own stockists.</strong> If your website sells below MSRP, retailers lose interest fast.</li>
<li><strong>Forgetting distributor margin.</strong> Pricing at 1.5x cost leaves no room if you later need a distributor.</li>
<li><strong>Ignoring payment terms.</strong> Offering <a href="/blog/net-30-payment-terms">net 30 terms</a> means funding 30 days of a retailer's inventory; price and plan cash accordingly.</li>
<li><strong>No minimum order.</strong> A $60 wholesale order can cost more to pick, pack and invoice than it earns.</li>
<li><strong>Static prices.</strong> Ingredient, packaging and freight costs change; a price that worked two years ago may be underwater now.</li>
<li><strong>Different prices for similar accounts without a clear reason.</strong> Keep a published price list and tier structure so every retailer of the same size gets the same terms; ad hoc deals are hard to track and cause friction when buyers compare notes.</li>
</ul>

<h2>Wholesale paperwork: resale certificates and invoices</h2>
<p>In the US, sales to a reseller are generally exempt from sales tax, but only if you collect a valid resale certificate from the buyer and keep it on file. You will usually need a <a href="/blog/sellers-permit">seller's permit</a> in states where you have sales tax obligations; our guide to the <a href="/blog/resale-certificate">resale certificate</a> explains how to collect and store them. Retail customers on your website still pay sales tax where applicable, which the <a href="/tools/sales-tax-calculator">sales tax calculator</a> can help estimate.</p>
<p>A wholesale invoice should list the buyer's business name, purchase order number if they issued one, SKU, quantity, unit wholesale price, any tier discount, shipping, payment terms and the due date. Larger buyers often send a PO first; see <a href="/blog/invoice-vs-purchase-order">invoice vs purchase order</a> for how the two documents connect.</p>

<p>Ready to bill your first stockist? Use our <a href="/invoice-generator">free invoice generator</a> to build a clean wholesale invoice with quantities, unit prices and terms, with no sign-up needed, then download it as a PDF.</p>
`,
  },
  {
    slug: "keystone-pricing",
    title: "Keystone Pricing: When Doubling Cost Works",
    description:
      "Keystone pricing means doubling the wholesale cost for a 50% margin. Learn the formula, when keystone pricing works, when it fails, and worked retail examples.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    related: [
      "markup-vs-margin",
      "how-to-price-a-product",
      "materials-markup",
    ],
    faqs: [
      {
        q: "What is keystone pricing in simple terms?",
        a: "Keystone pricing means setting the retail price at double what you paid for an item. If a shop buys a mug for $8 wholesale, it sells it for $16. That is a 100% markup on cost and a 50% gross margin on the selling price. It is a quick rule of thumb used widely by independent retailers, especially in gifts, apparel, home goods and accessories.",
      },
      {
        q: "Is keystone pricing a 50% or 100% markup?",
        a: "It is a 100% markup and a 50% margin. Markup is measured against cost: the $8 mug gains $8, which is 100% of cost. Margin is measured against selling price: the $8 gain is 50% of the $16 price. Mixing these up is a common mistake. If someone says they want a 50% markup, they will price the mug at $12, which gives only a 33% margin.",
      },
      {
        q: "What is keystone plus or triple keystone?",
        a: "Keystone plus means doubling the cost and then adding a little more, such as a fixed amount or a few extra percentage points, to cover freight or shrinkage. Triple keystone means pricing at three times cost, which gives a margin of about 67%. Fine jewelry and some luxury or highly marked-down categories often use triple keystone or higher because they carry inventory longer and discount more.",
      },
      {
        q: "Does keystone pricing guarantee a profit?",
        a: "No. A 50% gross margin still has to cover rent, wages, card fees, shrinkage, markdowns and marketing. If operating costs run at 40% of sales, a keystone shop that marks down a lot of stock can end up with little or no net profit. Keystone is a starting point for gross margin, not a guarantee of profit, so check it against your actual overhead and markdown rate.",
      },
      {
        q: "Can service businesses use keystone pricing?",
        a: "Service businesses sometimes apply a similar doubling rule to materials or subcontracted work they resell, but it is rarely appropriate for labor, where rates are set by the market and your required hourly income. Contractors usually use a materials markup between 10% and 50% rather than a flat 100%. For labor, set rates from your costs, target income and billable hours instead.",
      },
    ],
    content: `
<p>Keystone pricing is the retail rule of thumb of doubling what you paid for an item: buy at $15, sell at $30. That gives a 100% markup on cost and a 50% gross margin on the selling price. It is fast, easy to explain to staff and good enough for many independent shops, but it breaks down for fast-moving commodities, luxury goods and products with high handling costs.</p>

<p>This guide explains the keystone pricing formula, the difference between markup and margin, variations like keystone plus and triple keystone, worked examples, and how to tell when doubling cost actually works for your business.</p>

<h2>The keystone pricing formula</h2>
<p><strong>Retail price = wholesale cost x 2</strong></p>
<p>That is all there is to the basic version. A $12.50 scarf becomes $25. A $40 lamp becomes $80. Because the rule applies the same multiplier to every item, a shop can price an entire delivery in minutes, which is why it became the default in gift, apparel and home goods retail. <a href="https://www.shopify.com/nz/blog/what-is-keystone-pricing" target="_blank" rel="noopener noreferrer">Shopify's explainer on keystone pricing</a> describes it the same way: a standard markup that doubles the wholesale cost.</p>

<h3>Markup vs margin under keystone</h3>
<table><thead><tr><th>Wholesale cost</th><th>Keystone price</th><th>Gross profit</th><th>Markup on cost</th><th>Margin on price</th></tr></thead><tbody>
<tr><td>$5.00</td><td>$10.00</td><td>$5.00</td><td>100%</td><td>50%</td></tr>
<tr><td>$12.50</td><td>$25.00</td><td>$12.50</td><td>100%</td><td>50%</td></tr>
<tr><td>$40.00</td><td>$80.00</td><td>$40.00</td><td>100%</td><td>50%</td></tr>
</tbody></table>
<p>The relationship is fixed: a 100% markup always produces a 50% margin. If you need a refresher on the two measures, our guide to <a href="/blog/markup-vs-margin">markup vs margin</a> has a full conversion chart.</p>

<h2>Variations: keystone plus, triple keystone and adjusted keystone</h2>
<table><thead><tr><th>Method</th><th>Formula</th><th>Margin</th><th>Typical use</th></tr></thead><tbody>
<tr><td>Keystone</td><td>Cost x 2</td><td>50%</td><td>Gifts, apparel, home goods, accessories</td></tr>
<tr><td>Keystone plus</td><td>Cost x 2 + a fixed amount or extra %</td><td>Slightly above 50%</td><td>Items with freight or handling costs</td></tr>
<tr><td>Triple keystone</td><td>Cost x 3</td><td>About 67%</td><td>Fine jewelry, some luxury goods</td></tr>
<tr><td>Below keystone</td><td>Cost x 1.2 to 1.6</td><td>17% to 38%</td><td>Electronics, groceries, high-volume staples</td></tr>
</tbody></table>
<p>Keystone plus is common when items arrive with significant freight. If a $20 item costs $2 to ship in, pricing at $44 (cost plus freight, doubled) protects the margin that plain keystone would quietly erode.</p>

<h2>When keystone pricing works</h2>
<ul>
<li><strong>Your suppliers set MSRP at keystone.</strong> Many wholesale brands build their price lists assuming retailers will double, so keystone lands right on the suggested retail price. Our <a href="/blog/wholesale-pricing">wholesale pricing guide</a> shows the brand side of this calculation.</li>
<li><strong>Products are differentiated.</strong> Handmade, local or niche items are hard for shoppers to price-compare, so a 50% margin is sustainable.</li>
<li><strong>You stock many SKUs.</strong> A shop with 2,000 small items cannot research a price for each one; a consistent rule keeps pricing manageable.</li>
<li><strong>Your overhead fits.</strong> If rent, wages and other costs run at roughly 30% to 40% of sales, a 50% gross margin leaves real profit.</li>
</ul>

<h2>When doubling cost fails</h2>
<ul>
<li><strong>Price-compared products.</strong> Branded electronics, books and staples are easy to check online. Doubling cost can put you far above Amazon and big box stores.</li>
<li><strong>Very cheap or very expensive items.</strong> A $0.80 item at $1.60 may not cover handling; a $1,200 item at $2,400 may stall on the shelf when $1,900 would sell.</li>
<li><strong>High markdowns.</strong> If a third of stock ends up sold at 40% off, your real margin is far below 50%.</li>
<li><strong>Ignoring the MAP or MSRP.</strong> If the brand has a <a href="/blog/map-pricing-policy">minimum advertised price policy</a>, your keystone price may need adjusting to match the advertised floor or MSRP.</li>
<li><strong>Services and labor.</strong> Doubling makes little sense for labor. Contractors usually apply a separate, smaller <a href="/blog/materials-markup">materials markup</a> and set labor rates from their costs.</li>
</ul>

<h2>Worked example: does keystone cover a boutique's costs?</h2>
<p>The figures below are illustrative. A gift boutique expects $300,000 in annual sales at full keystone prices and wants to know whether it will be profitable.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Sales at keystone prices</td><td>$300,000</td></tr>
<tr><td>Cost of goods (50%)</td><td>$150,000</td></tr>
<tr><td>Markdowns (8% of sales given away as discounts)</td><td>-$24,000</td></tr>
<tr><td>Gross profit after markdowns</td><td>$126,000 (about 46% of $276,000 actual sales)</td></tr>
<tr><td>Rent, staff, card fees, utilities, marketing</td><td>$105,000</td></tr>
<tr><td><strong>Operating profit</strong></td><td><strong>$21,000</strong></td></tr>
</tbody></table>
<p>Keystone works here, but only just. If markdowns rise to 15%, operating profit falls to zero. The owner decides to move slow-selling decor to keystone plus and to price high-demand local products at 2.3x cost, lifting average margin to about 52% before markdowns. A quick <a href="/blog/break-even-point">break-even analysis</a> shows the shop now needs roughly $10,000 less in annual sales to cover its fixed costs, even with the same 8% markdown rate.</p>

<h2>Keystone pricing by retail category</h2>
<p>Multipliers vary widely by category. The ranges below are rough industry norms that independent retailers often describe; your own numbers will depend on supplier terms, competition and how much stock you mark down.</p>
<table><thead><tr><th>Category</th><th>Common multiplier on cost</th><th>Why</th></tr></thead><tbody>
<tr><td>Gifts and home decor</td><td>2x to 2.5x</td><td>Differentiated items, slow turnover</td></tr>
<tr><td>Apparel and accessories</td><td>2x to 2.5x</td><td>Seasonal markdowns are frequent</td></tr>
<tr><td>Fine jewelry</td><td>2.5x to 3x+</td><td>High inventory carrying cost, slow sales</td></tr>
<tr><td>Books</td><td>Set by publisher list price</td><td>Price printed on the product</td></tr>
<tr><td>Consumer electronics</td><td>1.1x to 1.4x</td><td>Highly price-compared</td></tr>
<tr><td>Grocery staples</td><td>1.2x to 1.5x</td><td>High volume, fast turnover</td></tr>
</tbody></table>

<h2>Keystone pricing for online sellers</h2>
<p>Online sellers face costs a physical shop does not: marketplace commissions, payment processing, free shipping promises and returns. On a marketplace that takes 15% of the selling price, a keystone item sold at $30 with a $15 cost leaves $10.50 of gross profit after the fee, a 35% margin rather than 50%. If you also absorb $5 of shipping, the margin falls to 18%.</p>
<p>For this reason many online sellers calculate a landed, fully loaded cost per order, including fees and fulfillment, and then apply a multiplier, rather than doubling the purchase price alone. Others keep keystone for their own website and raise marketplace prices to cover the extra fees, where marketplace rules allow it.</p>

<h2>What to do if keystone prices you above the market</h2>
<p>If doubling cost leaves an item well above what competitors charge, you have four choices. You can negotiate a lower cost with the supplier, especially on larger orders. You can accept a lower margin on that item if it brings shoppers into the store who buy higher-margin products too. You can differentiate through bundles, gift wrapping or expertise so the higher price feels justified. Or you can drop the item. What you should not do is keep a product that sits on the shelf at a keystone price for a year and then clear it at 50% off, which leaves almost no margin at all.</p>

<h2>How to apply keystone pricing step by step</h2>
<ol>
<li><strong>Calculate landed cost</strong> for each item: invoice price plus freight, duties and any packaging you add.</li>
<li><strong>Double it</strong> to get the keystone price.</li>
<li><strong>Compare with MSRP and competitors.</strong> If the market price is well below keystone, decide whether the item belongs in your range at all.</li>
<li><strong>Apply price endings</strong> that suit your brand, such as $24.99, $25 or $26.</li>
<li><strong>Review margin after markdowns</strong> every quarter by category, not just at the moment of pricing.</li>
<li><strong>Adjust the multiplier</strong> by category: higher for slow movers and exclusives, lower for traffic-driving staples.</li>
</ol>

<h2>Keystone vs other pricing methods</h2>
<p>Keystone is a form of <a href="/blog/cost-plus-pricing">cost-plus pricing</a> with a fixed 100% markup. Its weakness, like all cost-based methods, is that it ignores what customers would actually pay. Value-led and competitive approaches, covered in <a href="/blog/how-to-price-a-product">how to price a product</a>, often produce higher margins on unique items and more competitive prices on commodity ones. Many successful shops use keystone as the default and override it where demand data says otherwise.</p>
<p>A practical hybrid is to treat keystone as a floor for differentiated products and a ceiling for commodity ones. For a locally made candle nobody else stocks, start at 2x and test 2.2x or 2.4x if it sells quickly. For a branded water bottle sold everywhere, start from the going market price and accept whatever margin that gives, as long as it covers handling. Over a year, the average margin across the store is what matters, not whether every item hits exactly 50%.</p>

<h2>Common keystone pricing mistakes</h2>
<ul>
<li><strong>Doubling the invoice price but not the freight.</strong> Freight can add 5% to 15% to cost, eating a third of your margin advantage if ignored.</li>
<li><strong>Calling it a 50% markup.</strong> It is a 100% markup; staff who misunderstand this set prices too low.</li>
<li><strong>Not tracking markdowns.</strong> Your effective margin is what you actually sell at, not the sticker price.</li>
<li><strong>Applying keystone to supplier price increases late.</strong> When a supplier raises prices, reprice existing stock promptly or you sell new-cost stock at old prices.</li>
<li><strong>Forgetting card and payment fees.</strong> Card processing typically takes a few percent of every sale, which comes straight out of the 50% margin.</li>
<li><strong>Using one multiplier for everything forever.</strong> Review sell-through by category at least twice a year; best sellers can often carry more than 2x, while slow movers may need a lower price to turn at all.</li>
</ul>

<h2>Keystone pricing and your invoices</h2>
<p>For a retailer, the cost side of keystone comes straight from supplier invoices, so check landed costs against each invoice when stock arrives. If you also sell to trade customers or other shops, your own invoices need to show the unit price and any trade discount clearly. Our guide to <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a> explains how those figures flow into your accounts.</p>

<p>Whether you are billing trade customers or recording a wholesale order, you can create a clear invoice with our <a href="/invoice-generator">free invoice generator</a>, with no sign-up required, and download it instantly as a PDF.</p>
`,
  },
  {
    slug: "map-pricing-policy",
    title: "MAP Pricing Policy: Template and Enforcement",
    description:
      "How a MAP pricing policy works: what minimum advertised price covers, the Colgate doctrine, a MAP policy template outline, enforcement steps and common mistakes.",
    category: "business-finance",
    date: "2026-11-03",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "how-to-price-a-product",
      "markup-vs-margin",
      "price-list-template",
    ],
    faqs: [
      {
        q: "Is a MAP pricing policy legal in the US?",
        a: "Unilateral MAP policies are generally lawful under US federal antitrust law. Under the Colgate doctrine, a manufacturer may announce its pricing policy and refuse to deal with resellers who do not follow it, as long as it acts on its own rather than reaching agreements with resellers. Problems arise when the policy becomes an agreement, involves coordination with competitors, or runs into stricter state laws. Have a lawyer review your policy.",
      },
      {
        q: "What is the difference between MAP and MSRP?",
        a: "MSRP, the manufacturer's suggested retail price, is a recommendation for the price at which a product should sell. MAP, the minimum advertised price, is the lowest price a reseller may advertise under the manufacturer's policy. Resellers can usually sell below MAP in a private transaction, for example at checkout or in a store, but cannot advertise it. MAP is typically set at or below MSRP.",
      },
      {
        q: "Can retailers sell below MAP?",
        a: "Usually yes. A MAP policy restricts advertised prices, not the final selling price. Retailers often show messages such as add to cart to see price or call for price, which is why many policies define exactly what counts as advertising. If a manufacturer tries to control the actual sale price through agreements with retailers, that is resale price maintenance, which raises more serious legal questions.",
      },
      {
        q: "How do brands enforce MAP violations?",
        a: "Typically through a written warning system: a first notice asking the reseller to correct the price within a set time, then a temporary suspension of shipments or loss of discounts, then termination. Enforcement should follow the published policy consistently. Brands should avoid negotiating compliance with resellers or letting one retailer dictate action against another, because that can turn a unilateral policy into an agreement.",
      },
      {
        q: "Do small brands need a MAP policy?",
        a: "Not always. A MAP policy is most useful once your products are sold by several online retailers who compete on price, or once discounting starts to hurt your relationships with full-price stockists. A brand selling mainly direct or through a handful of boutiques may not need one. When you do adopt one, keep it short, public and consistently enforced.",
      },
      {
        q: "Does a MAP policy apply to my own website?",
        a: "Brands commonly follow their own MAP on their own websites. Advertising below your own minimum advertised price undermines the policy and frustrates retailers who are bound by it. If you run promotions, consider a published promotional window that allows all authorized resellers to advertise the same discount for the same period, rather than discounting only on your own site.",
      },
    ],
    content: `
<p>A MAP pricing policy sets the minimum advertised price at which resellers may promote a manufacturer's products. It does not control what a retailer ultimately charges at checkout; it controls the price shown in ads, listings and marketing. Brands use MAP to stop online price wars that push stockists away, and in the US a well-drafted, unilaterally enforced policy is generally lawful.</p>

<p>This guide explains what MAP covers, how it differs from MSRP and resale price maintenance, the legal background, a practical template outline, an enforcement process and the mistakes that get brands into trouble. This is general information, not legal advice; antitrust law is fact-specific, so have a lawyer review your policy before you publish it.</p>

<h2>What is a MAP pricing policy?</h2>
<p>MAP stands for minimum advertised price. A manufacturer or brand publishes a policy stating the lowest price at which authorized resellers may advertise each product, and the consequences for advertising below it. Typical reasons for adopting MAP:</p>
<ul>
<li>Protecting full-price retailers who invest in displays, staff training and customer service.</li>
<li>Preventing a race to the bottom among online sellers that erodes brand perception.</li>
<li>Keeping room in the margin for retailers to stock the product at all.</li>
<li>Making the brand's own direct-to-consumer pricing consistent with its stockists.</li>
</ul>

<h2>MAP vs MSRP vs resale price maintenance</h2>
<table><thead><tr><th>Term</th><th>What it controls</th><th>Binding?</th><th>Legal risk level</th></tr></thead><tbody>
<tr><td>MSRP</td><td>Suggested final selling price</td><td>No, a recommendation</td><td>Low</td></tr>
<tr><td>MAP policy</td><td>Lowest advertised price</td><td>Enforced by refusing to deal, under a unilateral policy</td><td>Generally low to moderate if unilateral</td></tr>
<tr><td>Resale price maintenance (RPM) agreement</td><td>Actual selling price, agreed with resellers</td><td>Contractual</td><td>Higher; judged under the rule of reason federally, and some states are stricter</td></tr>
</tbody></table>

<h2>The legal background in brief</h2>
<p>Two US Supreme Court decisions frame most MAP discussions:</p>
<ul>
<li><strong>United States v. Colgate &amp; Co. (1919).</strong> A manufacturer may announce in advance the prices at which it wants its products resold and refuse to deal with resellers who do not follow them, provided it acts unilaterally. Policies built on this principle are often called Colgate policies.</li>
<li><strong>Leegin Creative Leather Products v. PSKS (2007).</strong> The Court held that minimum resale price agreements are no longer automatically illegal under federal law and must be judged under the rule of reason. You can read the <a href="https://www.law.cornell.edu/supremecourt/text/06-480.ZO.html" target="_blank" rel="noopener noreferrer">Leegin opinion at Cornell's Legal Information Institute</a>.</li>
</ul>
<p>The Federal Trade Commission has noted that MAP policies restrict the advertised price rather than the price at which a product is sold, and it has flagged enforcement tactics that can create an improper agreement, such as requiring manufacturer approval for deviations from suggested prices. See the FTC's speech on <a href="https://www.ftc.gov/news-events/news/speeches/vertical-issues-federal-antitrust-law" target="_blank" rel="noopener noreferrer">vertical issues in federal antitrust law</a> for background. Several states, including California, New York and Maryland, take a stricter view of minimum resale price agreements under their own laws, which is another reason to keep MAP unilateral and limited to advertising.</p>

<h2>MAP pricing policy template: what to include</h2>
<p>Most effective MAP policies fit on one or two pages. Use this outline as a starting point and adapt it with your lawyer:</p>
<ol>
<li><strong>Purpose statement.</strong> A short explanation of why the brand has a MAP policy, such as protecting brand value and supporting authorized retailers.</li>
<li><strong>Unilateral nature.</strong> A clear statement that the policy is adopted unilaterally, that the brand will not seek or accept agreement from resellers, and that resellers remain free to set their own selling prices.</li>
<li><strong>Covered products and MAP prices.</strong> Reference a MAP price list that the brand may update with notice, for example 30 days.</li>
<li><strong>Definition of advertising.</strong> Websites, marketplaces, email, social media, print ads, comparison shopping feeds and pop-ups. State whether add-to-cart pricing, in-store pricing and customer quotes are excluded.</li>
<li><strong>What counts as a violation.</strong> Advertising below MAP, including through bundles, coupons, rebates or free gifts that effectively reduce the advertised price.</li>
<li><strong>Exceptions.</strong> Brand-approved promotional periods, discontinued items, and damaged or refurbished stock if clearly labelled.</li>
<li><strong>Consequences.</strong> The brand's own action, for example suspension of orders for a set period, loss of promotional support, and termination for repeat violations.</li>
<li><strong>No discussion clause.</strong> A statement that the brand will not discuss the policy with resellers or negotiate it, and that sales staff are not authorized to modify it.</li>
<li><strong>Effective date and right to change.</strong> The brand may change or withdraw the policy at any time.</li>
</ol>

<h2>Worked example: setting MAP for a small brand</h2>
<p>The figures are illustrative. A cookware brand sells a skillet with a unit cost of $22 to retailers at $45 wholesale. MSRP is $90, which gives retailers a <a href="/blog/keystone-pricing">keystone</a> margin. Online sellers have started advertising it at $64, and two kitchen stores have stopped reordering.</p>
<table><thead><tr><th>Price point</th><th>Amount</th><th>Retailer margin</th></tr></thead><tbody>
<tr><td>Wholesale</td><td>$45</td><td>n/a</td></tr>
<tr><td>MSRP</td><td>$90</td><td>50%</td></tr>
<tr><td>Proposed MAP</td><td>$79</td><td>43%</td></tr>
<tr><td>Price being advertised online</td><td>$64</td><td>30%</td></tr>
</tbody></table>
<p>The brand sets MAP at $79, below MSRP, which leaves room for retailers to promote the skillet while still earning a 43% margin. It allows two approved promotional windows a year where all resellers may advertise $69. The brand's own website also follows the $79 MAP. After the first quarter, its wholesale account manager confirms the two kitchen stores have resumed orders.</p>
<p>Before setting MAP, check your own <a href="/blog/wholesale-pricing">wholesale pricing</a> structure, because MAP only works if the gap between wholesale and MAP gives retailers a sensible margin.</p>

<h2>How to enforce a MAP policy</h2>
<table><thead><tr><th>Stage</th><th>Typical action</th><th>Tip</th></tr></thead><tbody>
<tr><td>Monitoring</td><td>Check marketplaces and retailer sites weekly or use monitoring software</td><td>Screenshot violations with date and URL</td></tr>
<tr><td>First violation</td><td>Written notice citing the policy</td><td>State the action in the policy; do not negotiate</td></tr>
<tr><td>Second violation</td><td>Order suspension for a set period, such as 30 or 60 days</td><td>Apply the same period to every reseller</td></tr>
<tr><td>Third violation</td><td>Termination of the reseller account</td><td>Document the decision and the reasons</td></tr>
<tr><td>Unauthorized sellers</td><td>Investigate the supply source; consider trademark or marketplace brand tools</td><td>MAP policies apply to accounts you sell to</td></tr>
</tbody></table>
<p>Consistency matters more than strictness. Letting a large retailer off while terminating a small one undermines the policy and can create legal risk. Cut off accounts by stopping new orders and invoices rather than threatening or haggling; your <a href="/blog/invoice-payment-terms">payment terms</a> and account agreements should allow you to stop supplying.</p>

<h2>MAP on online marketplaces</h2>
<p>Most MAP disputes now happen on marketplaces, where many sellers list the same product and repricing software adjusts prices automatically. A few practical points:</p>
<ul>
<li><strong>Know who your authorized resellers are.</strong> A MAP policy can only be enforced through your relationship with accounts you supply. Sellers who buy from a distributor or through diversion are harder to reach, so track which accounts sell where.</li>
<li><strong>Watch for repricing tools.</strong> Automated repricers can drop a listing below MAP overnight. Ask yourself whether the policy addresses automated pricing and make sure the consequences still apply.</li>
<li><strong>Check marketplace rules.</strong> Marketplaces generally do not enforce a brand's MAP policy for it. Their own brand protection tools are aimed mainly at counterfeits and intellectual property issues, not pricing.</li>
<li><strong>Control distribution first.</strong> Many brands find that tightening who they sell to, through authorized reseller agreements and limits on selling to resellers who do not meet standards, does more than MAP enforcement alone.</li>
</ul>

<h2>When to update MAP prices</h2>
<p>Review MAP whenever you change wholesale prices, launch a new version of a product or discontinue an item. Give resellers notice of changes, commonly 30 days, so they can update listings, feeds and printed materials. When an item is discontinued, many policies lift MAP after a set date so retailers can clear remaining stock. Keep a dated archive of each MAP price list; if a dispute arises, you will need to show what price applied on what day.</p>

<h2>Common MAP mistakes</h2>
<ul>
<li><strong>Asking resellers to agree to the policy.</strong> Requiring signatures or written promises can turn a unilateral policy into an agreement. Many brands simply publish and distribute the policy.</li>
<li><strong>Discussing pricing with resellers.</strong> Do not let sales reps negotiate MAP or accept promises to comply.</li>
<li><strong>Acting on competitor complaints as a group.</strong> Responding to coordinated pressure from retailers can look like a horizontal arrangement.</li>
<li><strong>Controlling the final sale price.</strong> MAP is about advertising; trying to dictate checkout prices is a different, riskier practice.</li>
<li><strong>Breaking your own MAP.</strong> Flash sales on your own site that resellers cannot match damage trust quickly.</li>
<li><strong>Vague definitions.</strong> Without clear rules on coupons, bundles and free shipping, resellers will find loopholes.</li>
<li><strong>Setting MAP too close to wholesale.</strong> If MAP leaves retailers only a 15% margin, the policy protects nobody, and good stockists will still walk away.</li>
<li><strong>Selective enforcement.</strong> Ignoring violations by your biggest account while suspending smaller ones invites complaints and weakens your position if the policy is ever challenged.</li>
</ul>

<h2>MAP, price lists and invoices</h2>
<p>Publish MAP prices alongside your wholesale prices on a clear <a href="/blog/price-list-template">price list</a> so resellers always have the current figures. Your wholesale invoices should show the agreed wholesale unit price and terms; they should not include conditions about resale prices. For broader pricing strategy, including how MAP fits with value and cost-based approaches, see <a href="/blog/how-to-price-a-product">how to price a product</a> and our explainer on <a href="/blog/markup-vs-margin">markup vs margin</a>.</p>

<p>When you invoice your stockists, keep it simple and professional: use our <a href="/invoice-generator">free invoice generator</a> to create wholesale invoices with no sign-up and download them as PDFs in seconds.</p>
`,
  },
];
