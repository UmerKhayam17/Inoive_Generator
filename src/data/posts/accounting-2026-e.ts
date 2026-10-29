import type { PostDraft } from "../blog";

export const ACCOUNTING_2026_E_POSTS: PostDraft[] = [
  {
    slug: "fixed-asset-register",
    title: "Fixed Asset Register: Template, Fields and What to Record",
    description:
      "A fixed asset register template for small businesses: the fields to record, how to log depreciation and disposals, and a worked example that adds up.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-calculate-depreciation",
      "section-179-vs-bonus-depreciation",
      "balance-sheet-small-business",
      "amortization-vs-depreciation",
    ],
    faqs: [
      {
        q: "What is a fixed asset register?",
        a: "A fixed asset register is a list of every long-term physical asset a business owns, such as equipment, vehicles, computers and furniture. For each asset it records what it is, where it is, what it cost, when it was placed in service, how it is being depreciated and what it is worth on the books today. It supports the balance sheet figure for fixed assets, your depreciation expense, insurance claims and the gain or loss when you sell or scrap an asset.",
      },
      {
        q: "What should be included in a fixed asset register?",
        a: "At minimum: a unique asset ID, a description, the supplier and invoice number, the purchase date, the date placed in service, the total cost including delivery and installation, the location and the person responsible. Add the depreciation method, useful life, salvage value, accumulated depreciation and net book value. When an asset leaves the business, record the disposal date, the sale proceeds and the gain or loss. A serial number and photo help with audits and insurance.",
      },
      {
        q: "Is a fixed asset register a legal requirement?",
        a: "It depends on where you operate and your business structure. Many countries require companies to keep adequate accounting records, and a register is the normal way to support fixed asset figures. In the US, the IRS expects you to keep records that show the cost, depreciation and disposal of property until the period of limitations expires for the year you dispose of it. Even where no rule names a register, it is the simplest way to meet those record-keeping duties.",
      },
      {
        q: "What is the minimum value to record an asset in the register?",
        a: "You choose a capitalization threshold and apply it consistently. Many small US businesses align it with the IRS de minimis safe harbor, which, as of 2026, lets a business without an applicable financial statement expense items costing up to $2,500 per invoice or item if it makes the annual election. Items below your threshold are expensed and usually stay out of the register, although you may still track laptops and phones in a separate inventory list for security.",
      },
      {
        q: "How often should a fixed asset register be updated?",
        a: "Update it whenever you buy, move, upgrade or dispose of an asset, and post depreciation at least at each month-end or year-end close, depending on how often you produce accounts. Once a year, do a physical check: walk around, confirm each asset still exists and is in use, and update locations and condition. Then reconcile the register's total cost and accumulated depreciation to the balances in your general ledger.",
      },
      {
        q: "What is the difference between a fixed asset register and an asset inventory?",
        a: "A fixed asset register is an accounting record. It holds cost, depreciation and net book value, and its totals should match the balance sheet. An asset inventory is an operational list used to track where equipment is and who has it, and it often includes low-cost items that were expensed, such as monitors or tools. Many small businesses keep both in one spreadsheet with a column that marks which items are capitalized.",
      },
      {
        q: "How do I record a disposal in the fixed asset register?",
        a: "Calculate depreciation up to the disposal date, then work out the net book value: cost minus accumulated depreciation. Compare that with the sale proceeds. Proceeds above net book value give a gain; proceeds below give a loss. Enter the disposal date, proceeds, gain or loss and the buyer's invoice or receipt reference, then mark the asset as disposed rather than deleting the row, so the audit trail stays intact.",
      },
      {
        q: "Can I use one register for book and tax depreciation?",
        a: "You can, by adding separate columns for each, but many small businesses keep tax depreciation on a separate schedule prepared by their accountant. Book depreciation spreads cost over the useful life you estimate, while tax depreciation follows tax rules, which may allow faster write-offs such as Section 179 or bonus depreciation in the US. The two figures often differ, so label each column clearly and never mix them in the same total.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A <strong>fixed asset register</strong> is a list of every long-term asset your business owns, with its ID, description, cost, purchase and in-service dates, location, depreciation method, useful life, accumulated depreciation and net book value. Update it when assets are bought, moved or sold, and reconcile its totals to your balance sheet at each close.</p>

<p>If you have ever struggled to answer "what equipment do we actually own, and what is it worth?", a fixed asset register solves that problem. It is one of the simplest accounting records to set up and one of the most useful at tax time, during an insurance claim or when you sell the business. The supplier invoices you receive are the raw material for it, and the invoices you issue when you sell an asset close each entry out. If you invoice clients for your own work, our free <a href="/invoice-generator">invoice generator</a> handles that side; this guide covers the asset side.</p>

<p>Below you will find what to record, a ready-to-copy fixed asset register template layout, a step-by-step setup process, a fully worked example with depreciation and a disposal, and the common mistakes that make registers drift away from the books.</p>

<h2>What is a fixed asset register?</h2>

<p>A fixed asset register (sometimes called an asset ledger or capital asset register) is a detailed schedule of the tangible, long-lived assets a business uses to earn income: computers, machinery, vehicles, furniture, tools, fit-outs and similar items expected to last more than a year. It sits behind the single "property, plant and equipment" line on your <a href="/blog/balance-sheet-small-business">small business balance sheet</a>.</p>

<p>The register does three jobs:</p>

<ul>
<li><strong>Proof of ownership and cost.</strong> Each row ties back to a purchase invoice, so you can show what you paid and when.</li>
<li><strong>Depreciation engine.</strong> It is where annual or monthly depreciation is calculated, which then flows into your <a href="/blog/profit-and-loss-statement">profit and loss statement</a> and reduces <a href="/blog/operating-income">operating income</a>.</li>
<li><strong>Control.</strong> It tells you where each asset is and who is responsible, which reduces loss, theft and duplicate purchases.</li>
</ul>

<p>The register's total cost and total accumulated depreciation should always agree with the matching accounts in your <a href="/blog/general-ledger">general ledger</a>. If they do not, one of the two records is wrong.</p>

<h2>What to record in a fixed asset register</h2>

<p>Top-ranking templates agree on a core set of fields. The table below lists them, why each one matters and an example entry.</p>

<table>
<thead>
<tr><th>Field</th><th>Why it matters</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td>Asset ID</td><td>Unique reference for tags, audits and journals</td><td>FA-003</td></tr>
<tr><td>Description and category</td><td>Groups assets for depreciation and reporting</td><td>Delivery van, vehicles</td></tr>
<tr><td>Serial number, make, model</td><td>Identifies the exact item for insurance and theft reports</td><td>VIN or serial</td></tr>
<tr><td>Supplier and invoice number</td><td>Links the asset to its source document</td><td>Invoice 55120</td></tr>
<tr><td>Purchase date and in-service date</td><td>Depreciation usually starts when the asset is ready and available for use</td><td>2026-06-20 / 2026-07-01</td></tr>
<tr><td>Cost (capitalized amount)</td><td>Price plus delivery, installation and setup needed to get it working</td><td>$28,000</td></tr>
<tr><td>Location and custodian</td><td>Physical control and accountability</td><td>Warehouse, J. Ortiz</td></tr>
<tr><td>Depreciation method, useful life, salvage value</td><td>Drive the depreciation calculation</td><td>Straight-line, 5 years, $4,000</td></tr>
<tr><td>Accumulated depreciation</td><td>Total depreciation charged to date</td><td>$2,400</td></tr>
<tr><td>Net book value</td><td>Cost minus accumulated depreciation</td><td>$25,600</td></tr>
<tr><td>Condition and last check date</td><td>Flags impairment, repairs and replacement planning</td><td>Good, checked 2026-12-31</td></tr>
<tr><td>Disposal date, proceeds, gain or loss</td><td>Closes the asset out correctly</td><td>Blank until sold</td></tr>
</tbody>
</table>

<h3>What counts as cost</h3>

<p>Capitalize the purchase price plus costs needed to get the asset ready for use: delivery, installation, non-refundable taxes and professional setup. Ongoing costs such as repairs, servicing and insurance are normally expensed, not added to the asset. If a supplier's invoice mixes the two, split the lines when you enter it. The purchase invoice is your evidence of cost, so keep a copy with the register.</p>

<h3>Capitalization threshold</h3>

<p>Not every purchase belongs in the register. Set a written capitalization threshold and stick to it. In the US, many small businesses use the de minimis safe harbor in the tangible property regulations: as of 2026, a business without an applicable financial statement can elect to expense items costing up to $2,500 per invoice or item, and a business with one can use up to $5,000, per the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/tangible-property-final-regulations" target="_blank" rel="noopener noreferrer">IRS tangible property regulations guidance</a>. The election is made each year with the return. Items under your threshold are expensed and usually stay off the register.</p>

<h2>Fixed asset register template layout</h2>

<p>A spreadsheet is enough for most small businesses. Use one row per asset and these columns, in this order:</p>

<p><code>Asset ID | Description | Category | Serial no. | Supplier | Invoice no. | Purchase date | In-service date | Cost | Salvage value | Useful life (years) | Method | Annual depreciation | Accumulated depreciation | Net book value | Location | Custodian | Condition | Disposal date | Proceeds | Gain/(loss)</code></p>

<p>Three formulas do most of the work:</p>

<ul>
<li><strong>Annual depreciation (straight-line)</strong> = (Cost minus Salvage value) divided by Useful life.</li>
<li><strong>Accumulated depreciation</strong> = Annual depreciation multiplied by years (or months divided by 12) in service to date.</li>
<li><strong>Net book value</strong> = Cost minus Accumulated depreciation.</li>
</ul>

<p>Keep a separate tab per year, or add a column per year for depreciation, so you can see how each asset's value moved over time. If you want help choosing a depreciation method, our guide on <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a> compares straight-line, declining balance and units of production.</p>

<h2>How to set up a fixed asset register in 7 steps</h2>

<ol>
<li><strong>Gather source documents.</strong> Pull purchase invoices, receipts, lease agreements and last year's balance sheet. Your <a href="/blog/how-to-track-business-expenses">expense tracking system</a> is the fastest place to find them.</li>
<li><strong>Do a physical walk-through.</strong> List every item you can see that costs more than your threshold. Note serial numbers and locations.</li>
<li><strong>Match items to invoices.</strong> Each asset should have one source document. Items with no invoice need a note explaining how the cost was established.</li>
<li><strong>Assign asset IDs and tag items.</strong> Use a simple sequence such as FA-001, FA-002. A printed label or engraved tag on the asset makes audits quick.</li>
<li><strong>Set depreciation policies by category.</strong> Decide the method, useful life and salvage value for each category (for example, computers 3 years, furniture 7 years) and apply them consistently.</li>
<li><strong>Calculate depreciation to date.</strong> For existing assets, work out accumulated depreciation from the in-service date to today.</li>
<li><strong>Reconcile to the ledger.</strong> Total cost and accumulated depreciation in the register must match the fixed asset and accumulated depreciation accounts in your <a href="/blog/chart-of-accounts">chart of accounts</a>. Investigate any difference before you rely on the register.</li>
</ol>

<h2>Worked example: a three-asset register for one year</h2>

<p>A small video production studio uses straight-line book depreciation with a monthly convention (depreciation starts in the month the asset is placed in service). In 2026 it acquires three assets.</p>

<table>
<thead>
<tr><th>ID</th><th>Asset</th><th>In service</th><th>Cost</th><th>Salvage</th><th>Life</th><th>Annual dep.</th><th>Months in 2026</th><th>2026 dep.</th><th>NBV 31 Dec 2026</th></tr>
</thead>
<tbody>
<tr><td>FA-001</td><td>Camera kit</td><td>1 Mar 2026</td><td>$6,000</td><td>$600</td><td>5 yrs</td><td>$1,080</td><td>10</td><td>$900</td><td>$5,100</td></tr>
<tr><td>FA-002</td><td>Office furniture</td><td>1 Jan 2026</td><td>$4,200</td><td>$0</td><td>7 yrs</td><td>$600</td><td>12</td><td>$600</td><td>$3,600</td></tr>
<tr><td>FA-003</td><td>Delivery van</td><td>1 Jul 2026</td><td>$28,000</td><td>$4,000</td><td>5 yrs</td><td>$4,800</td><td>6</td><td>$2,400</td><td>$25,600</td></tr>
<tr><td></td><td><strong>Total</strong></td><td></td><td><strong>$38,200</strong></td><td></td><td></td><td></td><td></td><td><strong>$3,900</strong></td><td><strong>$34,300</strong></td></tr>
</tbody>
</table>

<p>Check the arithmetic:</p>

<ul>
<li>Camera kit: ($6,000 minus $600) divided by 5 = $1,080 a year, or $90 a month. Ten months = $900. NBV = $6,000 minus $900 = $5,100.</li>
<li>Furniture: $4,200 divided by 7 = $600 a year. Twelve months = $600. NBV = $3,600.</li>
<li>Van: ($28,000 minus $4,000) divided by 5 = $4,800 a year, or $400 a month. Six months = $2,400. NBV = $25,600.</li>
<li>Totals: $38,200 cost minus $3,900 depreciation = $34,300 net book value, which matches the sum of the three NBVs ($5,100 + $3,600 + $25,600).</li>
</ul>

<p>That $3,900 is a non-cash expense that lowers profit, which matters when you <a href="/blog/how-to-calculate-net-income">calculate net income</a>. The year-end journal is a $3,900 debit to depreciation expense and a $3,900 credit to accumulated depreciation, following normal double-entry bookkeeping rules.</p>

<h3>Recording a disposal</h3>

<p>Suppose the studio sells the camera kit on 28 February 2028 for $3,000. Accumulated depreciation by then is $900 (2026) + $1,080 (2027) + $180 (two months of 2028) = $2,160. Net book value is $6,000 minus $2,160 = $3,840. Proceeds of $3,000 are $840 below book value, so the register records a <strong>loss on disposal of $840</strong>. The row stays in the register, marked "disposed 2028-02-28", with the proceeds and the reference to the sales invoice you issued to the buyer. If you need to bill the buyer, the <a href="/invoice-generator/usa">US invoice generator</a> creates a clean sale invoice in a minute.</p>

<h2>Book depreciation vs tax depreciation</h2>

<p>The example above uses book depreciation, which spreads cost over the asset's useful life for your financial statements. Tax depreciation can be very different. In the US, IRS Publication 946 sets out MACRS recovery periods, and as of 2026 it gives a Section 179 deduction limit of $2,560,000, reduced once qualifying property placed in service in the year exceeds $4,090,000 (see <a href="https://www.irs.gov/publications/p946" target="_blank" rel="noopener noreferrer">IRS Publication 946, How to Depreciate Property</a>). Bonus depreciation can also accelerate deductions.</p>

<p>Because the two numbers often diverge, either keep separate book and tax columns in your register or let your accountant maintain a tax depreciation schedule alongside it. Our comparison of <a href="/blog/section-179-vs-bonus-depreciation">Section 179 vs bonus depreciation</a> explains the tax options in more depth. This article is general information, not tax or legal advice.</p>

<h2>Keeping the register accurate</h2>

<p>Registers rarely fail on day one. They drift. These habits keep yours reliable:</p>

<ul>
<li><strong>Add assets when the invoice is approved,</strong> not at year-end. Build it into your <a href="/blog/accounts-payable-process">accounts payable process</a>: any invoice coded to a fixed asset account triggers a new register row.</li>
<li><strong>Post depreciation at every close.</strong> Monthly is ideal if you produce monthly accounts; it is a standard item on any month-end close checklist.</li>
<li><strong>Record transfers and upgrades.</strong> If an upgrade extends an asset's life or capacity, capitalize it as a separate line or adjust the asset's cost and remaining life.</li>
<li><strong>Count once a year.</strong> A physical check finds "ghost assets" that were scrapped or stolen but are still on the books.</li>
<li><strong>Never delete rows.</strong> Mark disposals and keep them. Deleted rows break the audit trail.</li>
</ul>

<h3>How long to keep fixed asset records</h3>

<p>Asset records outlive most other paperwork. The IRS says to keep records relating to property until the period of limitations expires for the year in which you dispose of the property, because you need them to calculate depreciation and the gain or loss on sale (see the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" target="_blank" rel="noopener noreferrer">IRS guidance on how long to keep records</a>). In practice, that means keeping the purchase invoice and register history for the entire life of the asset plus several years. Other countries set their own retention periods, so check the rules where you file.</p>

<h2>Common fixed asset register mistakes</h2>

<ul>
<li><strong>Capitalizing repairs.</strong> Routine servicing is an expense. Only improvements that extend life or add capacity belong in the register.</li>
<li><strong>Forgetting delivery and installation.</strong> These are part of cost; leaving them out understates the asset and overstates expenses.</li>
<li><strong>Starting depreciation on the purchase date</strong> when the asset was not usable until weeks later. Use the in-service date.</li>
<li><strong>No link to the invoice.</strong> Without the supplier and invoice number, you cannot prove cost in an audit or insurance claim.</li>
<li><strong>Mixing intangible and tangible assets.</strong> Software licences, patents and similar items are amortized; keep them on a separate tab. See <a href="/blog/amortization-vs-depreciation">amortization vs depreciation</a> for the differences.</li>
</ul>

<h2>Spreadsheet or software?</h2>

<p>A spreadsheet works well up to a few dozen assets, as long as one person owns it and the formulas are locked. Once you have hundreds of assets, several locations or both book and tax depreciation to maintain, the fixed asset module in your accounting software, or a dedicated asset tool, saves time: it posts depreciation automatically, keeps disposal history and produces reports your accountant can use. Whichever you choose, the fields in the template above stay the same, so you can start in a spreadsheet and import it later.</p>

<h2>Fixed asset register checklist for small businesses</h2>

<p>Before you close your books for the year, confirm that every asset purchased this year has a row, every disposal is marked with proceeds and gain or loss, depreciation is posted to the last month, the register totals match the ledger, and a physical check has been done. Pair this with a <a href="/blog/year-end-invoicing-checklist">year-end invoicing checklist</a> so that both sides of your books are clean.</p>

<p><strong>Create your sale invoice when an asset goes.</strong> When you sell equipment, issue a proper invoice so the disposal in your fixed asset register has a source document. Use our free <a href="/invoice-generator">invoice generator</a> to add the asset as a line item, apply tax if required, and download a PDF, or pick a clean layout from our <a href="/invoice-templates/corporate">corporate invoice template</a>.</p>
`,
  },
  {
    slug: "budget-vs-actual",
    title: "Budget vs Actual: How to Build a Variance Report (With Example)",
    description:
      "Budget vs actual explained: how to build a variance report, calculate dollar and percent variances, flag favorable vs unfavorable results and act on them.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "small-business-budget",
      "profit-and-loss-statement",
      "zero-based-budgeting",
      "cash-flow-forecast",
    ],
    faqs: [
      {
        q: "What does budget vs actual mean?",
        a: "Budget vs actual is a comparison of what you planned to earn and spend in a period with what really happened. Each line of your budget, such as revenue, payroll, rent or marketing, is placed next to the actual figure from your books, and the difference is the variance. The report shows where results are off plan, by how much, and whether the gap helps or hurts profit, so you can decide what to change next month.",
      },
      {
        q: "How do you calculate budget vs actual variance?",
        a: "Subtract the budget from the actual: variance = actual minus budget. To get the percentage, divide the variance by the budget and multiply by 100. For example, if marketing was budgeted at $2,500 and actual spend was $1,900, the variance is minus $600, or 24% under budget. Use the same sign convention throughout the report and add a column that labels each variance as favorable or unfavorable so readers do not have to work it out.",
      },
      {
        q: "What is a favorable vs unfavorable variance?",
        a: "A favorable variance improves profit compared with the budget; an unfavorable variance reduces it. For revenue, actual above budget is favorable. For expenses, actual below budget is favorable. So the same positive number can mean opposite things: revenue $1,000 over budget is good, while rent $1,000 over budget is bad. That is why good variance reports state favorable or unfavorable in words rather than relying only on plus and minus signs.",
      },
      {
        q: "How often should I run a budget vs actual report?",
        a: "Monthly is the standard for most small businesses, run as part of the month-end close once bank and card accounts are reconciled. Monthly reviews catch problems while there is still time to act. Some owners also look at a year-to-date view each month, which smooths out timing differences. Quarterly is the minimum; anything less frequent turns the report into history rather than a management tool.",
      },
      {
        q: "What variance is considered significant?",
        a: "There is no official threshold. Many small businesses set a two-part rule, such as investigating any line that is off by more than 10% and more than a fixed dollar amount, for example $500. The dollar floor stops you chasing large percentages on tiny lines, and the percentage stops big lines hiding meaningful drift. Pick limits that suit your size, write them down and apply them every month.",
      },
      {
        q: "What is a flexible budget variance?",
        a: "A flexible budget adjusts variable costs to the actual level of activity before comparing. If you planned 400 billable hours but delivered 365, costs that scale with hours should be flexed down to the 365-hour level. Comparing actual costs with that flexed figure shows whether you spent efficiently, separately from the effect of lower volume. It gives a fairer view than a static budget when activity differs from plan.",
      },
      {
        q: "What causes budget vs actual variances?",
        a: "Common causes are volume (more or fewer sales or hours than planned), price or rate (charging or paying a different price), timing (an invoice or bill landing in a different month), one-off events, and errors in coding transactions or in the budget itself. Before acting on a variance, find which of these is behind it. Timing and coding issues usually reverse; volume and rate issues usually need a decision.",
      },
      {
        q: "Should budget vs actual use cash or accrual figures?",
        a: "Use the same basis your budget was built on. If you budget on an accrual basis, compare with accrual figures from your profit and loss statement, which record income when invoiced and expenses when incurred. If you run a simple cash budget, compare with cash received and paid. Mixing the two creates false variances, especially around month-end when invoices are issued but not yet paid.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A <strong>budget vs actual</strong> report puts each budgeted line beside the real result for the same period and shows the variance (actual minus budget) in dollars and percent. Label each variance favorable or unfavorable, investigate the ones above your threshold, and use the causes to adjust spending, pricing or next period's budget.</p>

<p>A budget only helps if you check it. The budget vs actual comparison, often presented as a variance report, is how small business owners turn a plan into a monthly management tool. Much of the revenue side comes straight from the invoices you send, so consistent invoicing with a tool like our free <a href="/invoice-generator">invoice generator</a> makes the actual column far easier to trust.</p>

<p>This guide explains the formulas, shows a complete variance report with numbers that reconcile, covers flexible budgets and volume vs rate analysis, and lists the actions that typically follow each type of variance.</p>

<h2>What is a budget vs actual report?</h2>

<p>A budget vs actual report (also called a budget variance report or plan vs actual) compares the figures in your <a href="/blog/small-business-budget">small business budget</a> with the results recorded in your books for the same period. The actual side normally comes from your <a href="/blog/profit-and-loss-statement">profit and loss statement</a>, so the report follows the same line structure: revenue, cost of sales, operating expenses and profit.</p>

<p>The US Small Business Administration encourages owners to compare costs with the revenue they generate as part of managing their finances (see the <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">SBA guide to managing your finances</a>). A monthly variance report is the most practical way to do that across the whole business, not just one campaign.</p>

<h2>Budget vs actual formulas</h2>

<p>You need three calculations:</p>

<ul>
<li><strong>Dollar variance</strong> = Actual minus Budget.</li>
<li><strong>Percent variance</strong> = (Actual minus Budget) divided by Budget, multiplied by 100.</li>
<li><strong>Favorable or unfavorable:</strong> for revenue and profit, actual above budget is favorable. For costs, actual below budget is favorable.</li>
</ul>

<p>The sign trap catches many people. A plus $1,200 variance on revenue is good news; a plus $1,200 variance on contractor costs is bad news. Always add an F or U label (favorable or unfavorable) so the report reads correctly at a glance.</p>

<h2>How to build a variance report in 7 steps</h2>

<ol>
<li><strong>Close the month first.</strong> Reconcile bank and card accounts, enter all supplier bills and issue all customer invoices for the period. A rushed actual column creates fake variances. Our <a href="/blog/month-end-close-checklist">month-end close checklist</a> covers the essentials.</li>
<li><strong>Match the line structure.</strong> Use the same account groupings in budget and actual. If your budget has "Software" but your books split it across three accounts, roll them up the same way.</li>
<li><strong>Use the same accounting basis.</strong> Accrual budget, accrual actuals; cash budget, cash actuals. Our guide to <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> explains why this matters.</li>
<li><strong>Calculate dollar and percent variances</strong> for every line, plus subtotals for total revenue, total expenses and profit.</li>
<li><strong>Label each variance F or U.</strong></li>
<li><strong>Apply your materiality rule.</strong> For example, investigate lines that are both more than 10% and more than $500 off budget.</li>
<li><strong>Write a one-line explanation and an action</strong> for every flagged line, and carry the actions into next month's plan or <a href="/blog/cash-flow-forecast">cash flow forecast</a>.</li>
</ol>

<h2>Worked example: a monthly variance report</h2>

<p>A small design agency budgets 400 billable hours in September at $100 an hour, and expects to use 200 contractor hours at $60 an hour. Here is the September budget vs actual report.</p>

<table>
<thead>
<tr><th>Line</th><th>Budget</th><th>Actual</th><th>Variance ($)</th><th>Variance (%)</th><th>F/U</th></tr>
</thead>
<tbody>
<tr><td>Revenue</td><td>$40,000</td><td>$36,500</td><td>-$3,500</td><td>-8.8%</td><td>U</td></tr>
<tr><td>Contractor costs</td><td>$12,000</td><td>$13,200</td><td>+$1,200</td><td>+10.0%</td><td>U</td></tr>
<tr><td>Software</td><td>$1,500</td><td>$1,380</td><td>-$120</td><td>-8.0%</td><td>F</td></tr>
<tr><td>Rent</td><td>$3,000</td><td>$3,000</td><td>$0</td><td>0.0%</td><td>-</td></tr>
<tr><td>Marketing</td><td>$2,500</td><td>$1,900</td><td>-$600</td><td>-24.0%</td><td>F</td></tr>
<tr><td><strong>Total expenses</strong></td><td><strong>$19,000</strong></td><td><strong>$19,480</strong></td><td><strong>+$480</strong></td><td><strong>+2.5%</strong></td><td><strong>U</strong></td></tr>
<tr><td><strong>Net profit</strong></td><td><strong>$21,000</strong></td><td><strong>$17,020</strong></td><td><strong>-$3,980</strong></td><td><strong>-19.0%</strong></td><td><strong>U</strong></td></tr>
</tbody>
</table>

<p>Check the totals: budgeted expenses are $12,000 + $1,500 + $3,000 + $2,500 = $19,000, and actual expenses are $13,200 + $1,380 + $3,000 + $1,900 = $19,480. Budgeted profit is $40,000 minus $19,000 = $21,000; actual profit is $36,500 minus $19,480 = $17,020. The profit variance of minus $3,980 equals the revenue variance (minus $3,500) less the extra $480 of net expense. As a percentage, $3,980 divided by $21,000 is 18.95%, shown rounded to 19.0%.</p>

<h3>Which lines to investigate</h3>

<p>Using the "more than 10% and more than $500" rule:</p>

<ul>
<li><strong>Revenue</strong> is $3,500 off but 8.8%, just under the percentage limit. Because it is the largest dollar gap and drives the profit shortfall, most owners would still review it. A sensible tweak is to always review revenue and profit regardless of the rule.</li>
<li><strong>Contractor costs</strong> are exactly 10.0% and $1,200 over. Flag it.</li>
<li><strong>Marketing</strong> is 24% and $600 under. Favorable, but check whether a campaign was simply delayed into October (a timing variance).</li>
<li><strong>Software</strong> is $120 under: below the dollar floor, so no action.</li>
</ul>

<h2>Volume vs rate: finding the real cause</h2>

<p>A variance tells you where to look, not why. Splitting it into volume and rate effects gets you closer.</p>

<p>In the example, the agency billed 365 hours at the planned $100 rate: 365 multiplied by $100 = $36,500. The whole revenue shortfall is a <strong>volume variance</strong>: 35 fewer hours multiplied by $100 = $3,500. The rate held, so pricing was not the problem; capacity or demand was.</p>

<p>Contractor costs tell a different story. The agency paid the planned $60 rate but used 220 hours: 220 multiplied by $60 = $13,200. That is 20 extra hours, or $1,200, even though billable work fell. When paid hours rise while billable hours fall, the usual suspects are rework, unbilled extra scope or poor scheduling. Our guide on billing extra work with a <a href="/blog/scope-creep-change-order">scope creep change order</a> covers how to recover that cost from clients when the extra work was their request.</p>

<h3>Flexible budget comparison</h3>

<p>A static budget compares against the original 400-hour plan. A flexible budget first adjusts variable costs to the actual activity level. Contractor costs were planned at $12,000 for 400 billable hours, so at 365 hours the flexed budget is $12,000 multiplied by 365 divided by 400 = $10,950. Actual contractor cost of $13,200 is therefore $2,250 over the flexed budget, almost double the static variance of $1,200. The flexible view shows the efficiency problem more clearly. Knowing which of your costs are variable is essential here; see <a href="/blog/fixed-vs-variable-costs">fixed vs variable costs</a>, and our guide to <a href="/blog/contribution-margin">contribution margin</a> shows how variable costs eat into each dollar of revenue.</p>

<h2>Types of variance and what to do about them</h2>

<table>
<thead>
<tr><th>Variance type</th><th>Typical sign</th><th>Likely action</th></tr>
</thead>
<tbody>
<tr><td>Timing (bill or invoice in a different month)</td><td>Reverses next month</td><td>Note it, check year-to-date, no change needed</td></tr>
<tr><td>Volume (more or fewer units or hours)</td><td>Revenue and variable costs move together</td><td>Review sales pipeline, capacity, staffing</td></tr>
<tr><td>Rate or price</td><td>Same volume, different price</td><td>Review pricing, supplier terms, discounts given</td></tr>
<tr><td>Efficiency</td><td>More input per unit of output</td><td>Fix process, scope control, scheduling</td></tr>
<tr><td>One-off</td><td>Single large item</td><td>Document it, exclude from trend analysis</td></tr>
<tr><td>Coding error</td><td>Over in one line, under in another</td><td>Correct the books, rerun the report</td></tr>
<tr><td>Budget error</td><td>Same variance every month</td><td>Re-forecast the budget line</td></tr>
</tbody>
</table>

<h3>Revenue variances start with your invoices</h3>

<p>On an accrual basis, revenue in the actual column is the total of invoices issued for the period. Late or missing invoices are one of the most common causes of a revenue variance that turns out to be timing. Issue invoices on the same day work is delivered, number them consistently with an <a href="/tools/invoice-number-generator">invoice number generator</a>, and record discounts on the invoice itself rather than as a separate adjustment, so price variances are visible.</p>

<p>On a cash basis, revenue is money received, so slow payers create variances even when sales are on plan. In that case, the fix is collection rather than sales: clearer <a href="/blog/invoice-payment-terms">invoice payment terms</a>, reminders and deposits.</p>

<h2>Budget vs actual best practices</h2>

<ul>
<li><strong>Show year-to-date as well as the month.</strong> A month can be noisy; year-to-date shows the trend.</li>
<li><strong>Keep the report to one page.</strong> Owners and managers will read a single page with clear F/U flags.</li>
<li><strong>Explain, then act.</strong> Every flagged line gets one sentence of cause and one action with an owner.</li>
<li><strong>Re-forecast when the budget is clearly wrong.</strong> Keep the original budget for reference but add a forecast column so decisions use realistic numbers.</li>
<li><strong>Watch overhead separately.</strong> Rent, software and insurance rarely vary by volume, so creeping <a href="/blog/overhead-costs">overhead costs</a> show up as small, persistent unfavorable variances.</li>
<li><strong>Review cash too.</strong> A profit variance and a cash variance are not the same. Pair this report with a <a href="/blog/cash-flow-management">cash flow management</a> routine.</li>
</ul>

<h2>Month vs year-to-date: reading both views</h2>

<p>A single month can mislead. Suppose the agency's marketing line was $600 under budget in September because a $600 campaign slipped into October. In October, marketing will then be $600 over budget, and the September favorable variance and October unfavorable variance cancel out. A year-to-date column shows this immediately: if year-to-date marketing is on budget, the monthly swings are timing, not a problem.</p>

<p>A practical layout puts the month and year-to-date side by side:</p>

<table>
<thead>
<tr><th>Line</th><th>Sept budget</th><th>Sept actual</th><th>Sept var.</th><th>YTD budget</th><th>YTD actual</th><th>YTD var.</th></tr>
</thead>
<tbody>
<tr><td>Marketing</td><td>$2,500</td><td>$1,900</td><td>-$600 F</td><td>$22,500</td><td>$22,350</td><td>-$150 F</td></tr>
</tbody>
</table>

<p>Here the year-to-date budget is nine months at $2,500, or $22,500, and year-to-date actual spend is $22,350, so the business is only $150 under plan for the year. The $600 September gap is almost entirely timing. Revenue and profit deserve the same treatment: a weak month inside a strong year-to-date result calls for a closer look at the pipeline, not a panic cut in spending.</p>

<h2>Budget vs actual report template</h2>

<p>You can build a reusable variance report in any spreadsheet. Use one row per budget line and these columns:</p>

<p><code>Line | Budget (month) | Actual (month) | Variance $ | Variance % | F/U | Budget (YTD) | Actual (YTD) | Variance $ (YTD) | Variance % (YTD) | Flag | Explanation | Action | Owner</code></p>

<p>Useful formulas:</p>

<ul>
<li><strong>Variance $</strong> = Actual minus Budget.</li>
<li><strong>Variance %</strong> = Variance $ divided by Budget (guard against division by zero when a line has no budget).</li>
<li><strong>F/U</strong> for revenue lines: "F" if variance is positive, otherwise "U". For cost lines, reverse it.</li>
<li><strong>Flag</strong>: "Review" if the absolute variance is above your dollar floor and the absolute percentage is above your percentage limit.</li>
</ul>

<p>Paste the actual figures from your accounting software each month, or link them from an export. Keep the explanation and action columns short and specific: "Rework on two client projects; add review step before handoff" is more useful than "contractor costs high".</p>

<h3>Common budget vs actual mistakes</h3>

<ul>
<li><strong>Comparing different periods.</strong> A budget built on calendar months compared with actuals pulled for a four-week period will always show false variances.</li>
<li><strong>Ignoring small lines forever.</strong> A $120 favorable variance is noise once, but the same overspend every month adds up to $1,440 a year. Scan the year-to-date column for persistent drift.</li>
<li><strong>Celebrating every favorable variance.</strong> Spending less than planned on marketing or maintenance can hurt next quarter's revenue or cause bigger repairs later. Ask whether the saving was deliberate.</li>
<li><strong>Changing the budget to hide variances.</strong> Re-forecast in a separate column, but keep the original budget so you can learn how accurate your planning was.</li>
<li><strong>No follow-up.</strong> A report without actions is a history lesson. Check last month's actions before you discuss this month's numbers.</li>
</ul>

<h3>Who should see the report</h3>

<p>In a small business, the owner, any managers responsible for budget lines, and the bookkeeper or accountant should all see the monthly report. Give each manager the lines they control, and agree the actions at a short monthly meeting. When people know their lines will be reviewed every month, budgets become commitments rather than guesses, and the next annual budget becomes more accurate because it is built on twelve months of explained variances.</p>

<h2>Budget vs actual for very small businesses</h2>

<p>If you are a freelancer or a two-person business, you do not need a 40-line report. Five lines are enough: revenue, direct costs, overhead, owner pay and profit. Build the budget once a year, compare it monthly, and focus on the two biggest variances. If your budget feels unreliable, rebuilding it from zero can help; see our guide to <a href="/blog/zero-based-budgeting">zero-based budgeting</a>.</p>

<p><strong>Make the actual column easy to trust.</strong> Accurate invoices are the starting point for every budget vs actual report. Create, number and download professional invoices for free with our <a href="/invoice-generator">invoice generator</a>, or choose a clean, readable layout from our <a href="/invoice-templates/minimal">minimal invoice template</a>.</p>
`,
  },
  {
    slug: "vendor-statement-reconciliation",
    title: "Vendor Statement Reconciliation: Steps, Example and Template",
    description:
      "Vendor statement reconciliation step by step: match supplier statements to your payables ledger, explain each difference and agree the balance, with an example.",
    category: "guides",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "statement-of-account",
      "accounts-payable-process",
      "three-way-match",
      "duplicate-invoice-payments",
    ],
    faqs: [
      {
        q: "What is vendor statement reconciliation?",
        a: "Vendor statement reconciliation is the process of comparing the statement of account a supplier sends you with your own accounts payable record for that supplier, then explaining every difference until both balances agree. It confirms that you have recorded every valid invoice, that your payments and credits have reached the supplier's books, and that you are not about to pay the same invoice twice or pay for something you never received.",
      },
      {
        q: "How often should supplier statements be reconciled?",
        a: "Monthly is common for key suppliers and anyone you buy from frequently, usually as part of the month-end close. Smaller or occasional suppliers can be reconciled quarterly or when a statement arrives. Always reconcile before year-end, before switching suppliers, and whenever a supplier chases an invoice you do not recognize. Regular small reconciliations take minutes; a year of unreconciled activity can take days.",
      },
      {
        q: "What are the most common reconciling items?",
        a: "The usual items are invoices on the statement that you have not yet entered, payments you have sent that the supplier has not yet applied, credit notes recorded on one side only, duplicate invoices in either ledger, and price or quantity differences between the invoice and your purchase order. Timing items clear on their own next month. Errors and disputes need action from you or the supplier.",
      },
      {
        q: "Should I pay from a supplier statement?",
        a: "Generally no. A statement is a summary of what the supplier believes you owe, not an approved invoice. Pay from approved invoices that have passed your checks, such as matching to a purchase order and goods received. Use the statement to find missing invoices and errors. Paying straight from statements is a common route to duplicate payments and to paying for goods that never arrived.",
      },
      {
        q: "What if a supplier does not send statements?",
        a: "Ask for one. Most suppliers can produce a statement of account from their accounting system in seconds, and many will email one monthly on request. If they cannot, request an open-items list or an aged balance at a specific date. Without any statement, you can still reconcile by confirming your open invoices and recent payments with the supplier's accounts team by email.",
      },
      {
        q: "How do I handle a balance that still will not reconcile?",
        a: "First check the opening balance: if the starting points differ, everything after will too. Then compare transaction by transaction, sorted by date and amount, and look for transpositions such as $1,260 entered as $1,620. Check for invoices posted to the wrong supplier account. If a small unexplained difference remains, document it and ask the supplier for a full transaction listing rather than writing it off immediately.",
      },
      {
        q: "Who should perform vendor statement reconciliations?",
        a: "Ideally someone who does not both approve and pay invoices, so that reconciliation acts as an independent check. In a very small business that may be the owner reviewing the bookkeeper's work, or an external accountant reviewing the owner's. The person should have access to the payables ledger, purchase orders, receiving records and payment records, and the authority to request credit notes from suppliers.",
      },
      {
        q: "Is vendor reconciliation the same as bank reconciliation?",
        a: "No. Bank reconciliation compares your cash records with the bank statement. Vendor statement reconciliation compares your payables record for one supplier with that supplier's statement. They support each other: the bank reconciliation proves a payment left your account, and the vendor reconciliation proves the supplier received and applied it. Both are standard parts of a month-end close.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> <strong>Vendor statement reconciliation</strong> means comparing a supplier's statement of account with your accounts payable ledger for that supplier, listing every difference (missing invoices, payments in transit, unapplied credits, duplicates, price disputes) and adjusting each side until both show the same balance. Do it monthly for key suppliers and always before paying a disputed balance.</p>

<p>Every supplier keeps its own record of what you owe. When that record and yours disagree, you either overpay, underpay or end up on credit hold. Supplier statement reconciliation is the routine check that keeps both sides aligned. If you are the one sending statements to your own customers, see our guide to the <a href="/blog/statement-of-account">statement of account</a>; this article covers the buyer's side. And when you need to invoice your own clients, our free <a href="/invoice-generator">invoice generator</a> does that part.</p>

<p>Below: why reconciliation matters, a seven-step process, a worked example where two different balances become one, a reconciliation template and the controls that stop the same problems recurring.</p>

<h2>What is a vendor statement?</h2>

<p>A vendor statement (supplier statement or statement of account) is a periodic summary a supplier sends you, usually monthly. It lists the opening balance, invoices issued, payments received, credit notes and the closing balance due, often with an aging breakdown of 0 to 30, 31 to 60 and 60+ days.</p>

<p>Your side of the comparison is the supplier's sub-ledger in your accounts payable system: every bill you have entered, every payment you have made and every credit you have recorded. The difference between <a href="/blog/accounts-payable-vs-accounts-receivable">accounts payable and accounts receivable</a> matters here: the supplier's statement is drawn from their receivables, and your ledger is your payables. In a perfect world they mirror each other. In practice, timing and errors mean they rarely do without some work.</p>

<h2>Why supplier statement reconciliation matters</h2>

<ul>
<li><strong>Finds missing invoices.</strong> Bills lost in email or never received show up on the statement, so your expenses and liabilities are complete at month-end.</li>
<li><strong>Prevents duplicate payments.</strong> A duplicated bill in your ledger shows as a difference against the statement before it gets paid. See our guide to <a href="/blog/duplicate-invoice-payments">detecting duplicate invoice payments</a>.</li>
<li><strong>Confirms credits are applied.</strong> Credit notes for returns and pricing errors are easy to forget on one side.</li>
<li><strong>Protects the relationship.</strong> Resolving differences early keeps you off credit hold and preserves trade terms.</li>
<li><strong>Supports audits and year-end.</strong> Reconciled supplier balances are strong evidence that your payables figure is right.</li>
</ul>

<h2>How to reconcile a vendor statement in 7 steps</h2>

<ol>
<li><strong>Get the statement and your ledger for the same date.</strong> Request a statement as of your month-end and run your supplier ledger report to the same date.</li>
<li><strong>Compare opening balances.</strong> If last month was reconciled, the opening balances should agree or be explained by last month's open items. If they do not, fix that first.</li>
<li><strong>Tick off matching invoices.</strong> Match each invoice on the statement to your ledger by invoice number, date and amount. Mark the matches on both sides.</li>
<li><strong>Tick off payments and credits.</strong> Match payments by date and amount, and credit notes by reference. Use your <a href="/blog/bank-reconciliation">bank reconciliation</a> to confirm payment dates.</li>
<li><strong>List the unmatched items.</strong> Anything not ticked on either side goes on a reconciliation schedule with a reason: timing, missing, duplicate, dispute or error.</li>
<li><strong>Investigate and act.</strong> Enter genuinely missing invoices only after they pass your normal approval checks, reverse duplicates, and contact the supplier about disputes or credits they have not applied.</li>
<li><strong>Agree the adjusted balances and sign off.</strong> Adjusted ledger balance must equal adjusted statement balance. Record who reconciled it and when, and carry open items forward to next month.</li>
</ol>

<h2>Worked example: reconciling a $3,580 difference</h2>

<p>A café buys packaging from one supplier. At 30 September, the supplier's statement shows a balance due of <strong>$8,450</strong>. The café's payables ledger for the supplier shows <strong>$4,870</strong>. The difference is $3,580. After ticking off matches, five items remain unmatched:</p>

<table>
<thead>
<tr><th>Item</th><th>Explanation</th><th>Effect</th><th>Adjust which side</th></tr>
</thead>
<tbody>
<tr><td>Invoice 4471, $1,950</td><td>Delivered 29 Sept, invoice on statement but never received by the café</td><td>Statement higher by $1,950</td><td>Ledger: add after checking delivery note</td></tr>
<tr><td>Payment, $2,000</td><td>Bank transfer sent 29 Sept, not yet applied by supplier</td><td>Statement higher by $2,000</td><td>Statement: payment in transit</td></tr>
<tr><td>Credit note CN-118, $320</td><td>Returned damaged cups; café recorded the credit, supplier has not issued it on its statement</td><td>Statement higher by $320</td><td>Statement: credit to be applied</td></tr>
<tr><td>Invoice 4402, $950</td><td>Entered twice in the café's ledger</td><td>Ledger higher by $950</td><td>Ledger: reverse duplicate</td></tr>
<tr><td>Invoice 4430, $260 overcharge</td><td>Billed $1,260; purchase order price was $1,000</td><td>Statement higher by $260</td><td>Statement: disputed, credit requested</td></tr>
</tbody>
</table>

<p>Check that the items explain the whole gap: $1,950 + $2,000 + $320 + $260 minus $950 = $3,580. That matches the difference, so nothing is left unexplained.</p>

<h3>The reconciliation schedule</h3>

<table>
<thead>
<tr><th>Ledger side</th><th>Amount</th><th>Statement side</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Balance per café ledger</td><td>$4,870</td><td>Balance per supplier statement</td><td>$8,450</td></tr>
<tr><td>Add: invoice 4471 not yet entered</td><td>+$1,950</td><td>Less: payment in transit</td><td>-$2,000</td></tr>
<tr><td>Less: duplicate invoice 4402 reversed</td><td>-$950</td><td>Less: credit note CN-118 not yet applied</td><td>-$320</td></tr>
<tr><td></td><td></td><td>Less: disputed overcharge on 4430</td><td>-$260</td></tr>
<tr><td><strong>Adjusted ledger balance</strong></td><td><strong>$5,870</strong></td><td><strong>Adjusted statement balance</strong></td><td><strong>$5,870</strong></td></tr>
</tbody>
</table>

<p>Ledger side: $4,870 + $1,950 minus $950 = $5,870. Statement side: $8,450 minus $2,000 minus $320 minus $260 = $5,870. Both sides agree, so the reconciliation is complete. The café now owes $5,870 on its own books, and it emails the supplier asking for the $260 credit on invoice 4430 and confirmation of the $320 credit note. If the supplier issues a credit note for the overcharge, the café records it next month. Our guide to <a href="/blog/credit-note-guide">credit notes</a> explains how these documents work, including the case where you raise a debit note yourself.</p>

<h2>Common reconciling items and how to fix them</h2>

<table>
<thead>
<tr><th>Reconciling item</th><th>Timing or error?</th><th>Fix</th></tr>
</thead>
<tbody>
<tr><td>Invoice on statement, not in ledger</td><td>Usually missing paperwork</td><td>Request a copy, check receipt, approve and enter</td></tr>
<tr><td>Payment in your ledger, not on statement</td><td>Timing</td><td>Confirm with bank record; should clear next statement</td></tr>
<tr><td>Credit note on one side only</td><td>Timing or omission</td><td>Request or record the credit note</td></tr>
<tr><td>Duplicate invoice in your ledger</td><td>Error</td><td>Reverse the duplicate, block payment</td></tr>
<tr><td>Price or quantity difference</td><td>Dispute</td><td>Compare with PO and delivery note, request credit</td></tr>
<tr><td>Invoice posted to the wrong supplier</td><td>Error</td><td>Reclassify between supplier accounts</td></tr>
<tr><td>Early payment discount taken but not accepted</td><td>Dispute</td><td>Check terms; agree with supplier</td></tr>
</tbody>
</table>

<p>Discount disputes deserve a note. If you deducted a prompt payment discount, such as 2/10 net 30, the supplier may not apply it if your payment arrived late by their records. See <a href="/blog/early-payment-discount">how early payment discounts work</a> before you argue the point.</p>

<h2>Vendor statement reconciliation template</h2>

<p>A simple spreadsheet template is enough for most small businesses. Use these columns for each supplier:</p>

<p><code>Supplier | Statement date | Balance per statement | Balance per ledger | Difference | Item reference | Item type (timing / missing / duplicate / dispute / error) | Amount | Side to adjust | Action | Owner | Status | Date resolved</code></p>

<p>Add a check cell that recalculates both adjusted balances and shows "Reconciled" only when they match. Keep each month's sheet; the history is useful when the same supplier creates the same problem repeatedly.</p>

<h2>Controls that make reconciliation easier</h2>

<p>Most reconciling items are symptoms of weak upstream controls. Fix those and each monthly reconciliation shrinks to a few minutes.</p>

<ul>
<li><strong>Use purchase orders</strong> for regular suppliers and match invoices to them and to goods received before approval. This is the <a href="/blog/three-way-match">three-way match</a>, and it stops most price and quantity disputes at entry.</li>
<li><strong>Centralize supplier invoices</strong> in one inbox so none are lost.</li>
<li><strong>Enter invoices on receipt,</strong> not on payment, so the ledger is complete at any date. A clear <a href="/blog/accounts-payable-process">accounts payable process</a> sets this rule.</li>
<li><strong>Check for duplicates</strong> by supplier, invoice number and amount before posting.</li>
<li><strong>Send remittance advice</strong> with every payment, listing the invoices paid, so the supplier applies cash correctly.</li>
<li><strong>Track your payables metrics.</strong> Rising reconciliation differences or a growing number of overdue items are early warnings that a process upstream is breaking.</li>
</ul>

<h3>Mistakes to avoid when reconciling suppliers</h3>

<ul>
<li><strong>Entering statement items without checking them.</strong> An invoice that appears on a statement still needs to pass your approval checks. Confirm the goods or services were received and the price matches before you enter it.</li>
<li><strong>Writing off small differences too quickly.</strong> A recurring $40 difference can hide a duplicate charge that repeats every month. Find the cause before adjusting.</li>
<li><strong>Reconciling only the closing balance.</strong> Two balances can match by coincidence while containing offsetting errors. Tick off individual items, not just totals.</li>
<li><strong>Leaving open items open.</strong> Every unresolved item should have an owner and a follow-up date, and should be checked on next month's reconciliation.</li>
<li><strong>Not keeping evidence.</strong> Save the supplier's email confirming a credit or a payment receipt with the reconciliation, so the next person does not have to ask again.</li>
</ul>

<h2>Vendor reconciliation vs other checks</h2>

<p>Vendor statement reconciliation is one of several controls around payables. Each catches different problems, so they work best together.</p>

<table>
<thead>
<tr><th>Check</th><th>Compares</th><th>Catches</th><th>When</th></tr>
</thead>
<tbody>
<tr><td>Three-way match</td><td>Purchase order, goods received, supplier invoice</td><td>Wrong prices, short deliveries, unordered goods</td><td>Before each invoice is approved</td></tr>
<tr><td>Vendor statement reconciliation</td><td>Supplier statement, your supplier ledger</td><td>Missing invoices, unapplied payments and credits, duplicates</td><td>Monthly or quarterly per supplier</td></tr>
<tr><td>Bank reconciliation</td><td>Bank statement, your cash records</td><td>Unrecorded payments, bank errors, fraud</td><td>Monthly</td></tr>
<tr><td>AP control account reconciliation</td><td>Total of all supplier ledgers, general ledger AP balance</td><td>Posting errors between sub-ledger and ledger</td><td>Monthly</td></tr>
</tbody>
</table>

<p>The last row is easy to forget. Even if every supplier balance agrees with its statement, the sum of all supplier balances must also agree with the accounts payable control account in your general ledger. If it does not, a journal has been posted directly to the control account or a supplier ledger entry has gone astray.</p>

<h3>How to read a supplier statement quickly</h3>

<p>Before you start ticking, scan the statement for three things. First, the aging columns: any amount in the 60+ day column is either a genuine overdue bill or, more often, an old invoice you have disputed or already paid. Those are the items most likely to trigger a credit hold, so tackle them first. Second, unapplied cash: some suppliers show payments they could not match to an invoice as a separate credit line. That usually means your remittance advice was missing or unclear. Third, the statement date and cut-off: if the supplier's statement runs to the 25th and your ledger to the 30th, you will see timing differences that are not real problems.</p>

<h2>Year-end supplier reconciliations</h2>

<p>At year-end, reconcile every supplier with a material balance, not just the regular ones. Accountants and auditors often ask for supplier statements for the largest balances as evidence that your payables are complete. Unrecorded invoices for goods or services received before year-end are liabilities of that year, even if the invoice arrives in January; record them as <a href="/blog/accrued-expenses">accrued expenses</a> if the bill is not yet in hand. Old credit balances, where a supplier owes you money, should be claimed as a refund or offset rather than left sitting on the ledger.</p>

<h3>Record retention for supplier statements</h3>

<p>Keep reconciled statements, the reconciliation schedule and supporting emails with your other accounting records. In the US, the IRS general rule is to keep records that support items on a tax return for at least three years, with longer periods in some situations (see the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" target="_blank" rel="noopener noreferrer">IRS guidance on how long to keep records</a>). Other countries set their own periods, often longer, so check local rules.</p>

<h2>When you are the supplier</h2>

<p>The same logic applies in reverse. If you sell on credit, your customers will reconcile your statements, and clear invoices make that easy for them: a unique number from an <a href="/tools/invoice-number-generator">invoice number generator</a>, the customer's PO number, itemized lines and a running balance. When a customer pays part of an invoice, show the amount paid and balance due on a <a href="/blog/partial-payment-invoice">partial payment invoice</a> so their ledger and your statement stay aligned. If you ship goods, a matching <a href="/blog/delivery-note-template">delivery note</a> gives the customer proof of receipt for their own match, and a formal <a href="/blog/payment-request-template">payment request</a> can help when a balance is overdue.</p>

<p><strong>Send invoices your customers can reconcile.</strong> Clear invoices make vendor statement reconciliation easy for your clients, just as clear supplier invoices make it easy for you. Create numbered, itemized invoices with PO references, amount paid and balance due using our free <a href="/invoice-generator">invoice generator</a>, or start from the <a href="/invoice-templates/classic">classic invoice template</a> for a familiar, audit-friendly layout.</p>
`,
  },
  {
    slug: "fixed-price-vs-time-and-materials",
    title: "Fixed Price vs Time and Materials: Which Contract to Use?",
    description:
      "Fixed price vs time and materials compared: risk, pricing, not-to-exceed caps and how to invoice each contract type, with a worked example for both.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "milestone-payments",
      "how-to-invoice-for-hourly-work",
      "statement-of-work-template",
      "value-based-pricing",
    ],
    faqs: [
      {
        q: "What is the difference between fixed price and time and materials?",
        a: "A fixed price contract sets one total price for a defined scope, regardless of how many hours the work takes. A time and materials (T&M) contract bills actual hours at agreed hourly rates plus materials at cost or cost plus a markup. With fixed price, the seller carries the risk of overruns. With T&M, the buyer carries it, unless the contract adds a not-to-exceed cap that shifts some risk back to the seller.",
      },
      {
        q: "Which is better for the client, fixed price or T&M?",
        a: "Fixed price is better for a client who needs budget certainty and can describe the scope clearly up front. T&M is better when the scope is uncertain or likely to change, because the client only pays for work actually done and does not pay a contingency built into a fixed quote. Many clients prefer T&M with a cap, which gives flexibility with a known worst case.",
      },
      {
        q: "How do I price a fixed price project?",
        a: "Estimate hours by task, multiply by your hourly rate, add expected expenses, then add a contingency for risk, often 10% to 25% depending on how well defined the scope is. Check the result against market rates and the value to the client. Write the scope, assumptions and exclusions in detail, because anything outside them should be billed as a change order rather than absorbed into the fixed fee.",
      },
      {
        q: "What is a not-to-exceed (NTE) clause?",
        a: "A not-to-exceed clause sets a maximum amount the client will pay under a time and materials contract. You bill actual hours and materials until the cap is reached; anything beyond it is at your own cost unless the client agrees to raise the cap. In US federal contracting, FAR 16.601 requires T&M contracts to include a ceiling price that the contractor exceeds at its own risk.",
      },
      {
        q: "How do you invoice a time and materials contract?",
        a: "Invoice on a regular cycle, usually weekly or monthly. List labor as hours multiplied by rate for each role or person, then list materials and expenses separately with receipts or cost references. Show the period covered, the running total against any cap and the remaining budget. Attach or reference timesheets so the client can check hours quickly, which reduces disputes and speeds payment.",
      },
      {
        q: "How do you invoice a fixed price contract?",
        a: "Most fixed price projects are invoiced by milestone or percentage of completion, for example 40% on signing, 30% at a midpoint deliverable and 30% on final acceptance. Each invoice should name the milestone, the contract total, the percentage being billed and the amounts previously invoiced. Smaller projects may be invoiced 50% upfront and 50% on delivery, or in full on completion.",
      },
      {
        q: "Can a contract mix fixed price and time and materials?",
        a: "Yes, hybrid contracts are common. A typical structure is a fixed price for a well-defined phase, such as discovery or a core build, with T&M for open-ended work like support, integrations or post-launch changes. Some projects start with a T&M discovery phase that produces a detailed scope, and then the build is quoted as fixed price. Keep each part on separate invoice lines so both sides can track them.",
      },
      {
        q: "What happens if a fixed price project takes longer than expected?",
        a: "If the overrun comes from your own underestimate, you normally absorb it, which lowers your effective hourly rate. If it comes from the client changing or adding scope, the contract should let you raise a change order with an extra fee or timeline. That is why fixed price contracts need clear scope, acceptance criteria and a change process written in before work starts.",
      },
      {
        q: "Is time and materials the same as hourly billing?",
        a: "They are closely related. Hourly billing usually refers to labor only, billed at one or more hourly rates. Time and materials adds the cost of materials, equipment, subcontractors and expenses used on the job, either at cost or with a markup. For a freelancer with no material costs, a T&M contract and an hourly contract look almost identical on the invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In <strong>fixed price vs time and materials</strong>, a fixed price contract charges one agreed total for a defined scope, so the seller carries overrun risk. A time and materials (T&M) contract bills actual hours at set rates plus materials, so the buyer carries the risk, often limited by a not-to-exceed cap. Choose fixed price for clear scope, T&M for uncertain scope.</p>

<p>The contract type you choose shapes how you quote, how you track work and how you invoice. Get it wrong and you either work for a fraction of your rate or lose the client over a surprise bill. This guide compares fixed price and time and materials contracts side by side, runs the same project through both models with real numbers, and shows how T&M contract invoicing and fixed fee invoicing look in practice. Either way, you can produce the invoices with our free <a href="/invoice-generator">invoice generator</a>.</p>

<h2>Fixed price vs time and materials at a glance</h2>

<table>
<thead>
<tr><th>Factor</th><th>Fixed price</th><th>Time and materials</th></tr>
</thead>
<tbody>
<tr><td>Price</td><td>One agreed total</td><td>Hours multiplied by rate, plus materials</td></tr>
<tr><td>Who carries overrun risk</td><td>Seller</td><td>Buyer (seller above any cap)</td></tr>
<tr><td>Best when scope is</td><td>Clear, stable, well documented</td><td>Uncertain, evolving, exploratory</td></tr>
<tr><td>Budget certainty for client</td><td>High</td><td>Low without a cap</td></tr>
<tr><td>Profit upside for seller</td><td>Higher if you work efficiently</td><td>Capped at your hourly margin</td></tr>
<tr><td>Admin effort</td><td>Upfront scoping, change orders</td><td>Timesheets, receipts, regular reporting</td></tr>
<tr><td>Typical invoicing</td><td>Milestones or deposit and balance</td><td>Weekly or monthly, hours and costs itemized</td></tr>
<tr><td>Main dispute risk</td><td>What is in or out of scope</td><td>Whether hours were necessary</td></tr>
</tbody>
</table>

<h2>What is a fixed price contract?</h2>

<p>A fixed price (or fixed fee, lump sum) contract sets a single price for a defined deliverable. The client knows the total before work starts, and you are paid that total whether the job takes 80 hours or 160. Fixed price works well for repeatable, well-understood work: a five-page brochure website, a bookkeeping catch-up of a known number of months, a standard installation.</p>

<p>The key documents are a detailed scope and a clear change process. A <a href="/blog/statement-of-work-template">statement of work</a> sets out deliverables, assumptions, exclusions and acceptance criteria. When the client asks for something outside it, you price it separately with a <a href="/blog/scope-creep-change-order">change order</a> rather than absorbing it.</p>

<h2>What is a time and materials contract?</h2>

<p>A time and materials contract bills the client for actual labor at agreed hourly or daily rates, plus the actual cost of materials and expenses. The US Federal Acquisition Regulation describes it as acquiring supplies or services on the basis of direct labor hours at specified fixed hourly rates (covering wages, overhead, general and administrative costs and profit) and materials at cost, and says it may be used only when it is not possible to estimate accurately the extent or duration of the work. It also requires a ceiling price that the contractor exceeds at its own risk (see <a href="https://www.acquisition.gov/far/16.601" target="_blank" rel="noopener noreferrer">FAR 16.601, time-and-materials contracts</a>). Private contracts are not bound by the FAR, but the same logic is a good model for small businesses.</p>

<p>T&M suits discovery work, troubleshooting, renovations where you cannot see behind the walls, ongoing support and any project where the client expects to change direction. For a freelancer with no material costs, T&M is essentially hourly billing; our guide to <a href="/blog/how-to-invoice-for-hourly-work">invoicing for hourly work</a> covers timesheets and rate presentation.</p>

<h3>Not-to-exceed caps</h3>

<p>A not-to-exceed (NTE) amount turns open-ended T&M into something a client's finance team can approve. You bill actual time and materials up to the cap. If you approach it, you warn the client early and either stop, agree a higher cap, or finish at your own cost. Track the running total on every invoice so nobody is surprised.</p>

<h2>Worked example: one project, two contract types</h2>

<p>A freelance developer is asked to rebuild a client's website. She estimates <strong>120 hours</strong> at her rate of <strong>$95 an hour</strong>: 120 multiplied by $95 = $11,400 of labor.</p>

<ul>
<li><strong>Fixed price quote:</strong> she adds a 15% contingency for risk: $11,400 multiplied by 1.15 = <strong>$13,110</strong>.</li>
<li><strong>T&M quote:</strong> $95 an hour for actual hours, plus licences and stock images at cost, with a not-to-exceed cap of <strong>$13,000</strong> on labor.</li>
</ul>

<p>Now look at three possible outcomes for actual labor hours:</p>

<table>
<thead>
<tr><th>Actual hours</th><th>T&M labor bill</th><th>T&M bill with $13,000 cap</th><th>Fixed price</th><th>Effective rate on fixed price</th></tr>
</thead>
<tbody>
<tr><td>105</td><td>$9,975</td><td>$9,975</td><td>$13,110</td><td>$124.86/hr</td></tr>
<tr><td>120</td><td>$11,400</td><td>$11,400</td><td>$13,110</td><td>$109.25/hr</td></tr>
<tr><td>140</td><td>$13,300</td><td>$13,000</td><td>$13,110</td><td>$93.64/hr</td></tr>
</tbody>
</table>

<p>Check the figures: 105 multiplied by $95 = $9,975; 140 multiplied by $95 = $13,300, which the cap reduces to $13,000. On the fixed price, $13,110 divided by 105 = $124.86, divided by 120 = $109.25, and divided by 140 = $93.64 an hour.</p>

<p>The lesson: if she works efficiently, fixed price pays her far more per hour. If the job overruns, fixed price still beats capped T&M slightly here only because the contingency was larger than the cap; at 160 hours the fixed price would fall to about $81.94 an hour ($13,110 divided by 160). For the client, T&M is cheaper unless the project overruns significantly. That trade-off is the whole decision.</p>

<h3>How the invoices look</h3>

<p><strong>Fixed price, invoiced by milestone</strong> (40% / 30% / 30%):</p>

<ul>
<li>Invoice 1, on signing: 40% of $13,110 = $5,244.</li>
<li>Invoice 2, design approved: 30% of $13,110 = $3,933.</li>
<li>Invoice 3, site launched: 30% of $13,110 = $3,933.</li>
<li>Total: $5,244 + $3,933 + $3,933 = $13,110.</li>
</ul>

<p>Each invoice names the milestone and shows the contract total and amounts previously billed. Our guide to <a href="/blog/milestone-payments">milestone payments</a> covers schedules and wording.</p>

<p><strong>T&M, invoiced monthly.</strong> In October she logs 52 hours and buys a plugin licence for $180 and stock images for $240, both billed at cost:</p>

<table>
<thead>
<tr><th>Line</th><th>Qty</th><th>Rate</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Development, October 1 to 31 (timesheet attached)</td><td>52 hrs</td><td>$95.00</td><td>$4,940.00</td></tr>
<tr><td>Plugin licence, at cost</td><td>1</td><td>$180.00</td><td>$180.00</td></tr>
<tr><td>Stock images, at cost</td><td>1</td><td>$240.00</td><td>$240.00</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td><strong>$5,360.00</strong></td></tr>
</tbody>
</table>

<p>Check: 52 multiplied by $95 = $4,940; $4,940 + $180 + $240 = $5,360. In the notes she adds: "Labor billed to date: $4,940 of $13,000 not-to-exceed; remaining $8,060." ($13,000 minus $4,940 = $8,060.) Materials are listed separately so the client can match them to receipts; see <a href="/blog/reimbursable-expenses-invoice">reimbursable expenses on an invoice</a> for how to present pass-through costs. In our <a href="/invoice-generator">invoice generator</a>, each of these is simply a line item with a quantity and rate, and the notes field carries the cap tracking.</p>

<h2>Which contract type suits which work?</h2>

<table>
<thead>
<tr><th>Type of work</th><th>Usual fit</th><th>Why</th></tr>
</thead>
<tbody>
<tr><td>Brochure website from a template</td><td>Fixed price</td><td>Scope is predictable and repeatable</td></tr>
<tr><td>Bug fixing on an unfamiliar codebase</td><td>T&M</td><td>Effort is unknown until the problem is found</td></tr>
<tr><td>Kitchen renovation with known layout</td><td>Fixed price with allowances</td><td>Most work is defined; allowances cover finishes</td></tr>
<tr><td>Repairs behind walls or floors</td><td>T&M with cap</td><td>Hidden conditions make estimates unreliable</td></tr>
<tr><td>Monthly bookkeeping</td><td>Fixed monthly fee</td><td>Volume is stable from month to month</td></tr>
<tr><td>Catch-up bookkeeping for messy records</td><td>T&M or fixed after review</td><td>State of records is unknown until reviewed</td></tr>
<tr><td>Strategy or discovery workshop</td><td>Fixed price</td><td>Time-boxed with a defined output</td></tr>
<tr><td>Ongoing support and small changes</td><td>T&M or retainer</td><td>Requests vary and arrive over time</td></tr>
</tbody>
</table>

<p>The pattern is consistent: the more predictable the work, the more sense a fixed price makes, and the more hidden or changing the work, the safer time and materials becomes for both sides.</p>

<h2>How to choose: a 6-step decision process</h2>

<ol>
<li><strong>Rate scope clarity.</strong> Can you list every deliverable and acceptance criterion today? If yes, fixed price is viable. If not, lean T&M.</li>
<li><strong>Check your estimating history.</strong> If your past estimates for similar work were within 10% to 15% of actuals, you can price fixed fees confidently.</li>
<li><strong>Ask about the client's budget process.</strong> Some clients need a fixed number to get approval; offer T&M with a cap if scope is uncertain.</li>
<li><strong>Assess change risk.</strong> Many stakeholders, new technology or unclear requirements mean frequent changes, which suit T&M.</li>
<li><strong>Price the risk.</strong> If you choose fixed price, add contingency in proportion to uncertainty, and write exclusions.</li>
<li><strong>Consider a hybrid.</strong> Paid T&M discovery, then fixed price for the defined build, then T&M support.</li>
</ol>

<h2>T&M contract invoicing best practices</h2>

<ul>
<li><strong>Bill on a short cycle.</strong> Weekly or monthly invoices keep the client informed and protect your cash flow.</li>
<li><strong>Itemize roles and rates.</strong> If several people work on the job, list each role's hours separately.</li>
<li><strong>Attach timesheets.</strong> Clients approve faster when they can see what the hours covered.</li>
<li><strong>Separate materials from labor.</strong> State whether materials are at cost or include a markup. Our article on the <a href="/blog/labor-and-materials-invoice">labor and materials invoice</a> shows the standard layout.</li>
<li><strong>Show the running total against the cap</strong> on every invoice.</li>
<li><strong>Number invoices consistently.</strong> A simple sequence from an <a href="/tools/invoice-number-generator">invoice number generator</a> makes it easy for both sides to track a long engagement.</li>
</ul>

<h2>Fixed price invoicing best practices</h2>

<ul>
<li><strong>Take a deposit.</strong> A first payment on signing reduces risk and confirms commitment.</li>
<li><strong>Tie each invoice to an objective milestone</strong> that the client can verify, such as "design approved in writing".</li>
<li><strong>Show progress</strong>: contract total, this invoice, previously billed and remaining balance.</li>
<li><strong>Bill change orders separately</strong> so the base contract total stays clean.</li>
<li><strong>Do not track hours only for the client.</strong> Track them for yourself, so you know your real effective rate and can price the next fixed bid better.</li>
</ul>

<h2>Managing the risks of each model</h2>

<h3>Fixed price risks</h3>

<ul>
<li><strong>Underestimating.</strong> The single biggest risk. Break the work into tasks of no more than a day or two each, estimate each, and compare with past actuals before adding contingency.</li>
<li><strong>Vague acceptance criteria.</strong> If "done" is not defined, the client can keep requesting tweaks within the fixed fee. Define the number of revision rounds and what counts as sign-off.</li>
<li><strong>Client delays.</strong> Waiting for content, approvals or access extends the timeline and ties up your capacity. Include a clause that lets you re-schedule or bill a restart fee if the client causes a long delay.</li>
<li><strong>Front-loaded costs.</strong> If you buy materials or subcontract early, make sure the first milestone payment covers them.</li>
</ul>

<h3>Time and materials risks</h3>

<ul>
<li><strong>Client budget anxiety.</strong> Without a cap or regular updates, clients worry about an open-ended bill. Send a short weekly summary of hours used and hours remaining against the estimate.</li>
<li><strong>Disputes over efficiency.</strong> The client may question whether hours were necessary. Detailed timesheet descriptions ("migrated 42 product pages, fixed image paths") answer that before it is asked.</li>
<li><strong>Hitting the cap early.</strong> Warn the client when you reach around 75% of the not-to-exceed amount, with a forecast of the remaining work, so they can approve more budget or reduce scope.</li>
<li><strong>Lower upside.</strong> Your income is limited to hours worked. Review your rate regularly, especially as your speed improves.</li>
</ul>

<h3>Clauses to include in either contract</h3>

<p>Whichever model you choose, these terms prevent most billing disputes:</p>

<ul>
<li><strong>Scope and assumptions</strong>, or for T&M, the estimated scope the hours are based on.</li>
<li><strong>Rates</strong> for each role, plus how materials are charged (at cost or cost plus a stated markup).</li>
<li><strong>Invoicing schedule</strong>: milestones for fixed price, weekly or monthly for T&M.</li>
<li><strong>Payment terms</strong> such as net 15 or net 30, and any late fee your local law allows.</li>
<li><strong>Change process</strong>: how new requests are priced and approved in writing.</li>
<li><strong>Cap and notification rules</strong> for T&M, including when you will warn the client.</li>
<li><strong>Termination</strong>: what is owed if either side ends the contract early, usually work completed to date plus committed materials.</li>
</ul>

<p>Putting these in a short contract or statement of work takes an hour and saves far longer arguing over an invoice later.</p>

<h2>Beyond fixed price and T&M</h2>

<p>Two other models are worth knowing. <strong>Cost plus</strong> bills actual costs plus a fixed fee or percentage; see our sibling guide to <a href="/blog/cost-plus-pricing">cost plus pricing</a>. <strong>Value-based pricing</strong> sets the fee by the result's worth to the client rather than by hours or costs; see <a href="/blog/value-based-pricing">value-based pricing</a>. Ongoing work is often sold as a monthly <a href="/blog/retainer-invoice">retainer</a>, which behaves like a fixed price for a fixed block of time. If you are setting hourly rates for T&M work from scratch, our guide to <a href="/blog/consulting-rates">consulting rates</a> covers how to benchmark them.</p>

<p><strong>Create your project invoice.</strong> Whether you bill fixed price milestones or monthly time and materials, our free <a href="/invoice-generator">invoice generator</a> lets you itemize hours, materials and milestones, track amount paid and balance due, and download a professional PDF. For a clean look, try the <a href="/invoice-templates/agency">agency invoice template</a>.</p>
`,
  },
  {
    slug: "net-vs-gross-amount-on-invoice",
    title: "Net vs Gross Amount on an Invoice: What Each Total Means",
    description:
      "Net amount vs gross amount on an invoice explained: what net, gross, subtotal and total mean, how tax and discounts fit in, with a worked example that adds up.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-fill-out-an-invoice",
      "reverse-sales-tax-calculation",
      "vat-invoice-guide",
      "withholding-tax-on-invoices",
    ],
    faqs: [
      {
        q: "What is the net amount on an invoice?",
        a: 'The net amount is the value of the goods or services before sales tax or VAT is added, after any discounts have been taken off. On a VAT invoice it is often labeled "total excluding VAT" or "net". It is the figure a VAT-registered seller records as sales, and the figure a VAT-registered buyer records as cost, because the tax portion is reclaimed or paid over to the tax authority separately.',
      },
      {
        q: "What is the gross amount on an invoice?",
        a: 'The gross amount is the total including tax: the net amount plus sales tax or VAT. It is what the customer actually owes, unless other charges such as shipping are added afterward or a deposit has already been paid. On many invoices, the gross figure is labeled "total", "total including VAT" or "invoice total". In some contexts, gross can also mean the amount before deductions such as withholding tax.',
      },
      {
        q: "Is the subtotal the same as the net amount?",
        a: "Not always. The subtotal is usually the sum of line items before discounts and tax. If no discount applies, the subtotal and net amount are the same. If an invoice-level discount applies, the net amount is the subtotal minus the discount. For example, a subtotal of $1,150 with a 10% discount gives a net amount of $1,035, which is the figure tax is calculated on.",
      },
      {
        q: "How do I calculate net from a gross amount?",
        a: "Divide the gross amount by 1 plus the tax rate. With 20% VAT, divide by 1.20: a gross of 1,200 gives a net of 1,000 and VAT of 200. With 8% sales tax, divide by 1.08. Do not simply take the tax percentage off the gross figure: 20% of 1,200 is 240, which overstates the tax. Our reverse sales tax guide walks through the formula.",
      },
      {
        q: 'Does "net 30" mean the net amount on the invoice?',
        a: 'No. "Net 30" is a payment term, not an amount. It means the full invoice total is due within 30 days of the invoice date. The word "net" here comes from older trade usage meaning the full amount without any early payment discount. A customer paying a net 30 invoice pays the gross total, including tax, within 30 days.',
      },
      {
        q: "Should I quote prices net or gross?",
        a: 'In business-to-business work, prices are usually quoted net, with tax added on the invoice, because business buyers think in pre-tax costs. In consumer sales, especially in countries with VAT, displayed prices are usually expected to include tax. Whichever you use, say so clearly on quotes and invoices, for example "all prices exclude VAT", to avoid disputes about whether tax is extra.',
      },
      {
        q: "What does gross mean when withholding tax applies?",
        a: "When a client must withhold tax from a payment, the invoice shows the gross amount you are charging, and the client deducts withholding and pays you the net. For example, on a 10,000 invoice with 10% withholding, the client pays 9,000 to you and 1,000 to the tax authority. Your invoice should still show the full gross amount; the withholding is evidenced by the client's certificate or receipt.",
      },
      {
        q: "Where does shipping go: in the net or gross amount?",
        a: "It depends on whether shipping is taxable where you sell. If shipping is taxable, include it as a line item so it is part of the net amount and tax is calculated on it. If it is not taxable, add it after tax. In our invoice generator, the shipping field is added after tax, so if your shipping is taxable, enter it as a normal line item instead.",
      },
      {
        q: "Which amount do I record in my accounts?",
        a: "If you are registered for VAT or GST, record the net amount as revenue (or expense) and the tax separately as a liability (or reclaimable asset). If you are not registered and do not charge tax, the net and gross are the same. If you are a buyer who cannot reclaim tax, the gross amount is your real cost. Your accountant can confirm how this applies to your tax registration.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> On an invoice, the <strong>net amount</strong> is the value of goods or services before tax, after discounts. The <strong>gross amount</strong> is the net amount plus sales tax or VAT. So net vs gross amount on an invoice comes down to tax: net excludes it, gross includes it. Shipping, deposits and withholding can then move the final balance due.</p>

<p>Invoices are full of totals: subtotal, net, tax, gross, total, amount paid, balance due. Mix them up and you charge the wrong tax, record the wrong revenue or argue with a client about what is owed. This guide explains each term, shows the order in which they are calculated, and works through a complete example using the same calculation our free <a href="/invoice-generator">invoice generator</a> performs.</p>

<p>If you are new to invoice layout generally, our box-by-box guide on <a href="/blog/how-to-fill-out-an-invoice">how to fill out an invoice</a> is a good companion to this one.</p>

<h2>Net amount vs gross amount: the short definitions</h2>

<table>
<thead>
<tr><th>Term</th><th>What it means on an invoice</th><th>Includes tax?</th></tr>
</thead>
<tbody>
<tr><td>Line amount</td><td>Quantity multiplied by unit price for one line</td><td>No (on a tax-exclusive invoice)</td></tr>
<tr><td>Subtotal</td><td>Sum of all line amounts</td><td>No</td></tr>
<tr><td>Discount</td><td>Invoice-level reduction, fixed or percentage</td><td>Applied before tax</td></tr>
<tr><td>Net amount</td><td>Subtotal minus discount; the taxable base</td><td>No</td></tr>
<tr><td>Tax (sales tax, VAT, GST)</td><td>Net amount multiplied by tax rate</td><td>It is the tax</td></tr>
<tr><td>Gross amount</td><td>Net amount plus tax</td><td>Yes</td></tr>
<tr><td>Total</td><td>Gross amount plus any non-taxed charges such as shipping</td><td>Yes</td></tr>
<tr><td>Balance due</td><td>Total minus amounts already paid</td><td>Yes</td></tr>
</tbody>
</table>

<p>Different software uses slightly different labels. "Total excluding tax", "amount before tax" and "net" usually mean the same thing; "total including tax", "gross" and "invoice total" usually mean the same thing. What matters is that the invoice shows the steps clearly.</p>

<h2>How invoice totals are calculated, step by step</h2>

<ol>
<li><strong>Calculate each line:</strong> quantity multiplied by unit price.</li>
<li><strong>Add the lines</strong> to get the subtotal.</li>
<li><strong>Subtract any discount</strong> (a fixed amount or a percentage of the subtotal). The result is the net amount, also called the taxable amount.</li>
<li><strong>Calculate tax</strong> on the net amount at the applicable rate.</li>
<li><strong>Add tax to net</strong> to get the gross amount.</li>
<li><strong>Add non-taxed charges,</strong> such as shipping where it is not taxable, to get the invoice total.</li>
<li><strong>Subtract any amount already paid,</strong> such as a deposit, to get the balance due.</li>
</ol>

<p>This is exactly the order our generator uses: discount comes off before tax, tax is calculated on the discounted amount, shipping is added after tax, and the amount paid field produces the balance due.</p>

<h2>Worked example: from subtotal to balance due</h2>

<p>A print designer invoices a local business for a flyer campaign. Sales tax in the client's area is 8%, the designer offers a 10% discount, delivery costs $25 and is not taxable in this example, and the client paid a $300 deposit.</p>

<table>
<thead>
<tr><th>Line</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Flyer design</td><td>10 hrs</td><td>$80.00</td><td>$800.00</td></tr>
<tr><td>Printing, A5 flyers</td><td>500</td><td>$0.40</td><td>$200.00</td></tr>
<tr><td>Print setup</td><td>1</td><td>$150.00</td><td>$150.00</td></tr>
</tbody>
</table>

<table>
<thead>
<tr><th>Total line</th><th>Calculation</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Subtotal</td><td>$800 + $200 + $150</td><td>$1,150.00</td></tr>
<tr><td>Discount (10%)</td><td>10% of $1,150</td><td>-$115.00</td></tr>
<tr><td><strong>Net amount</strong></td><td>$1,150 minus $115</td><td><strong>$1,035.00</strong></td></tr>
<tr><td>Sales tax (8%)</td><td>8% of $1,035</td><td>$82.80</td></tr>
<tr><td><strong>Gross amount</strong></td><td>$1,035 + $82.80</td><td><strong>$1,117.80</strong></td></tr>
<tr><td>Shipping (not taxed)</td><td></td><td>$25.00</td></tr>
<tr><td>Invoice total</td><td>$1,117.80 + $25</td><td>$1,142.80</td></tr>
<tr><td>Amount paid (deposit)</td><td></td><td>-$300.00</td></tr>
<tr><td><strong>Balance due</strong></td><td>$1,142.80 minus $300</td><td><strong>$842.80</strong></td></tr>
</tbody>
</table>

<p>Every figure ties: lines sum to $1,150; net is $1,035; tax is $1,035 multiplied by 0.08 = $82.80; gross is $1,117.80; total with delivery is $1,142.80; balance due after the deposit is $842.80. You can check the tax step with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>. For more on discount presentation, see <a href="/blog/discount-on-invoice">how to show a discount on an invoice</a>.</p>

<h3>If shipping is taxable</h3>

<p>Many US states and most VAT systems tax delivery charges in some or all cases. If that applies to you, list delivery as a line item. In the example, the subtotal would become $1,175, the 10% discount $117.50, net $1,057.50, tax $84.60 and gross $1,142.10. The total is $0.70 lower than before: the discount grows by $2.50 because it now also applies to delivery, while tax rises by only $1.80 ($22.50 of discounted delivery at 8%). Check your local rules; our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices in the US</a> covers how to show it.</p>

<h2>Working backward from a gross amount</h2>

<p>Sometimes you know only the tax-inclusive price, for example a consumer price that includes VAT, and need the net and tax parts. The formula is:</p>

<ul>
<li><strong>Net</strong> = Gross divided by (1 + tax rate).</li>
<li><strong>Tax</strong> = Gross minus Net.</li>
</ul>

<p>With 20% VAT and a gross price of £1,200: net = £1,200 divided by 1.20 = £1,000; VAT = £200. A common mistake is taking 20% of the gross (£240), which overstates the tax by £40. Our article on <a href="/blog/reverse-sales-tax-calculation">reverse sales tax calculation</a> has more examples at different rates.</p>

<h2>What VAT rules say about net and gross on invoices</h2>

<p>In VAT countries, the split between net and tax is not just helpful, it is often required. In the UK, HMRC's VAT guide says a full VAT invoice must show, among other things, the rate of VAT and the amount payable excluding VAT for each item, the total amount excluding VAT, and the total amount of VAT charged, which must be in sterling. A simplified (less detailed) VAT invoice is allowed only for supplies of £250 or less including VAT, and shows the total including VAT for each rate (see <a href="https://www.gov.uk/guidance/vat-guide-notice-700" target="_blank" rel="noopener noreferrer">HMRC VAT guide, Notice 700</a>). Other countries have similar rules; our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> compares them, and the <a href="/invoice-generator/uk">UK invoice generator</a> is preset for VAT invoices.</p>

<p>For limited companies there are additional name and registration details to show; see our guide to <a href="/blog/limited-company-invoice-requirements">limited company invoice requirements</a>. This section is general information, not tax or legal advice.</p>

<h2>Net and gross pricing on quotes and price lists</h2>

<p>Whether you quote net or gross shapes how the invoice reads. In business-to-business work, prices are usually quoted net, and the invoice adds tax on top. A client who accepted a quote for $1,035 plus tax will expect an invoice for $1,035 net, $82.80 tax and $1,117.80 gross. In consumer sales, especially in VAT countries, buyers expect the displayed price to be the price they pay, so prices are usually shown gross and the invoice splits out the tax already included.</p>

<p>Problems arise when the quote does not say which convention it uses. If you quote "$1,000" and later invoice $1,000 plus 8% tax, a client who assumed tax was included will feel they have been overcharged by $80. If you quote "$1,000" meaning tax-inclusive and invoice $1,000 total, your net income is only $925.93 ($1,000 divided by 1.08), not $1,000. Avoid both outcomes by writing "plus applicable tax" or "including VAT" on every quote, estimate and price list, and by carrying the same wording onto the invoice.</p>

<h3>Net and gross when you are not registered for tax</h3>

<p>If you are below the registration threshold for VAT or GST, or you sell services that are not subject to sales tax where you operate, you do not charge tax at all. Your invoice then has no tax line, and the net amount, gross amount and total are the same figure. Do not add a tax line at 0% unless your local rules ask for it, and never show tax you are not registered to collect. If you later register, your prices will need to change from net-equals-gross to net-plus-tax, so tell regular clients in advance.</p>

<h2>Other meanings of net and gross you will see</h2>

<h3>"Net 30" and other payment terms</h3>

<p>"Net 30" on an invoice is a payment term, not an amount. It means the full invoice total is due 30 days after the invoice date. It has nothing to do with the net (pre-tax) amount; the customer pays the gross total. See <a href="/blog/invoice-payment-terms">invoice payment terms</a> for all the common variations.</p>

<h3>Gross and net with withholding tax</h3>

<p>In some countries and situations, the client must withhold part of your fee and pay it to the tax authority. Your invoice shows the gross fee; the client pays you the net. On a 10,000 invoice with 10% withholding, you receive 9,000 and the client remits 1,000 on your behalf. The invoice still shows 10,000 as the amount charged. Our guide to <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a> explains how to word this.</p>

<h3>Gross and net in payroll and profit</h3>

<p>Outside invoicing, gross and net have related but different meanings. Gross pay is pay before payroll deductions and net pay is take-home pay (see <a href="/blog/gross-pay-vs-net-pay">gross pay vs net pay</a>). Gross profit is revenue minus cost of sales, and net profit is what remains after all expenses (see <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a>). The common thread is that gross is the larger, before-deduction figure and net is what remains after something is taken out.</p>

<h2>Which figure goes in your books?</h2>

<table>
<thead>
<tr><th>Your situation</th><th>Record as revenue or cost</th><th>Tax portion</th></tr>
</thead>
<tbody>
<tr><td>Seller registered for VAT/GST or collecting sales tax</td><td>Net amount</td><td>Liability to the tax authority</td></tr>
<tr><td>Buyer who can reclaim VAT/GST</td><td>Net amount</td><td>Reclaimable input tax</td></tr>
<tr><td>Buyer who cannot reclaim tax</td><td>Gross amount</td><td>Part of the cost</td></tr>
<tr><td>Seller not registered, no tax charged</td><td>Net and gross are the same</td><td>None</td></tr>
</tbody>
</table>

<p>Recording the gross amount as revenue when you collect tax is a common bookkeeping error: it inflates sales and makes it look as if the tax is income. It also distorts margin calculations; see <a href="/blog/how-to-calculate-net-income">how to calculate net income</a> for how revenue flows down to profit.</p>

<h3>Rounding: line-level vs invoice-level tax</h3>

<p>Tax can be calculated on each line and then added up, or once on the net total. The results can differ by a cent or two. Take three lines of $9.99 each at 8.25% tax. Tax per line is $0.824175, which rounds to $0.82, so three lines give $2.46. Tax on the total of $29.97 is $2.472525, which rounds to $2.47. Neither is wrong in principle, but you should use one method consistently, and some tax authorities specify which they accept. Our invoice generator applies one tax rate to the net total, which keeps the arithmetic simple and avoids rounding mismatches between lines.</p>

<h3>Net and gross on invoices you receive</h3>

<p>The same terms matter when you are the buyer. When a supplier invoice arrives, check that the net amount matches the price you agreed, that the tax rate is correct for what you bought, and that the gross total equals net plus tax. Then record it correctly: if you can reclaim VAT or GST, post the net amount to the expense or asset account and the tax to your input tax account. If you cannot reclaim it, post the gross amount as the cost. Paying the gross amount but recording only the net, with nowhere for the tax to go, is a common reason why supplier balances fail to reconcile.</p>

<h2>Common net vs gross mistakes</h2>

<ul>
<li><strong>Calculating tax on the subtotal before discount.</strong> This overcharges tax. In the example, tax on $1,150 would be $92, not $82.80.</li>
<li><strong>Taking the tax percentage off a gross price.</strong> Divide by 1 plus the rate instead.</li>
<li><strong>Adding tax to a price that already includes it.</strong> If your price list is tax-inclusive, the invoice must split it, not add more tax on top.</li>
<li><strong>Confusing "net 30" with the net amount.</strong> The customer still owes the full total.</li>
<li><strong>Reducing the gross amount for withholding on the invoice itself</strong> without saying so, which leaves the client unsure what was charged.</li>
<li><strong>Booking gross sales as revenue</strong> when the tax belongs to the tax authority.</li>
</ul>

<h2>Tips for clear net and gross totals</h2>

<ul>
<li><strong>Label every total.</strong> Use "Subtotal", "Discount", "Net (excl. tax)", "Tax at 8%" and "Total (incl. tax)" rather than unlabeled numbers.</li>
<li><strong>State the tax rate</strong> next to the tax amount.</li>
<li><strong>Say whether prices include tax</strong> on quotes, price lists and invoices.</li>
<li><strong>Apply discounts before tax</strong> unless local rules say otherwise, so tax is charged on the price actually paid.</li>
<li><strong>Show deposits as amount paid</strong> rather than reducing line prices, so the full net and gross values stay visible.</li>
</ul>

<p><strong>Create an invoice with clear net and gross totals.</strong> Our free <a href="/invoice-generator">invoice generator</a> calculates subtotal, discount, tax, shipping, amount paid and balance due automatically, in the right order. Pick a layout from our <a href="/invoice-templates">invoice templates</a> and download a PDF in minutes.</p>
`,
  },
];
