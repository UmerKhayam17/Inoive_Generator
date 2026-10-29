import type { PostDraft } from "../blog";

export const ACCOUNTING_GUIDES_2026_B_POSTS: PostDraft[] = [
  {
    slug: "chart-of-accounts",
    title: "Chart of Accounts: Numbering, Structure and Example",
    description:
      "Set up a chart of accounts for a small business: the five account types, a numbering system that scales, a sample chart you can copy and rules to keep it clean.",
    category: "guides",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "business-expense-categories",
      "general-ledger",
      "bookkeeping-basics",
      "double-entry-bookkeeping",
    ],
    faqs: [
      {
        q: "What is a chart of accounts in simple terms?",
        a: "It is the master list of every account your business records transactions in, such as cash, accounts receivable, sales, rent and wages. Each account has a name, a number and a type: asset, liability, equity, revenue or expense. Your bookkeeping software uses this list to sort every transaction, and your financial statements are built by adding up the balances in each account. Think of it as the filing system that sits behind your general ledger.",
      },
      {
        q: "How should I number my chart of accounts?",
        a: "The most common convention gives each account type its own range: 1000s for assets, 2000s for liabilities, 3000s for equity, 4000s for revenue, 5000s for cost of sales and 6000s or higher for operating expenses. Leave gaps of 10 or more between accounts so you can insert new ones later without renumbering. The ranges are a convention rather than a legal rule, so match whatever your accounting software or accountant prefers and stay consistent.",
      },
      {
        q: "How many accounts should a small business have?",
        a: "Most small businesses work well with roughly 30 to 60 accounts. Fewer than that and expenses get lumped together so you cannot see where money goes. Far more and you spend time choosing between near-identical accounts and miscoding transactions. A good test is whether each account answers a question you or your tax preparer actually ask. If an account has had no activity for a year, consider making it inactive.",
      },
      {
        q: "What are the five main types of accounts?",
        a: "The five types are assets (what the business owns, such as cash, receivables and equipment), liabilities (what it owes, such as supplier bills, loans and sales tax collected), equity (the owner's stake, including capital and retained earnings), revenue (income from sales and services) and expenses (the costs of running the business). Assets and expenses normally carry debit balances, while liabilities, equity and revenue normally carry credit balances.",
      },
      {
        q: "Is the chart of accounts the same as the general ledger?",
        a: "No. The chart of accounts is the list of account names and numbers, a bit like a table of contents. The general ledger is the full record of every transaction posted to those accounts, with dates, amounts and running balances. You set up the chart once and adjust it occasionally, while the ledger grows every day as you record invoices, bills and payments. Both work together in any double-entry system.",
      },
      {
        q: "Can I change my chart of accounts after I start?",
        a: "Yes, but do it carefully. Adding new accounts is easy and safe. Renaming is usually fine if the meaning stays the same. Deleting accounts that already hold transactions can break historical reports, so most software lets you mark them inactive instead. The cleanest time for a larger restructure is the start of a new financial year, so that comparisons within the year stay consistent. Tell your accountant before making major changes.",
      },
      {
        q: "Should sales tax have its own account?",
        a: "Yes. Sales tax or VAT you collect from customers is not your revenue; it is money held for the tax authority, so it belongs in a liability account such as Sales Tax Payable. Recording it separately from sales keeps your revenue figures accurate and makes it easy to see what you owe when the return is due. If you register in more than one place, a separate payable account for each tax authority helps with reconciliation.",
      },
      {
        q: "Do freelancers need a chart of accounts?",
        a: "Yes, even if it is short. A freelancer using a spreadsheet or simple accounting app still benefits from consistent categories for income and expenses, because those categories feed your tax return and show which clients and costs matter. A freelance chart might have only 20 to 25 accounts: a bank account, receivables, a credit card, tax payable, owner's capital and drawings, one or two income accounts and the main expense categories.",
      },
      {
        q: "Where do I get a chart of accounts template?",
        a: "Most accounting software creates a default chart when you set up a company, often based on your industry. That default is a reasonable start, but review it: delete or deactivate accounts you will never use and add the ones your business needs. The sample chart in this guide is another starting point. Whichever template you use, check the expense categories against the lines on your tax return so year-end reporting is straightforward.",
      },
    ],
    content: `
<p>A <strong>chart of accounts</strong> is the numbered list of every account a business uses to record transactions, grouped into five types: assets, liabilities, equity, revenue and expenses. Each account gets a name and a code, such as 1200 Accounts Receivable. Your software posts every invoice, bill and payment to these accounts, and your financial statements are built from their balances.</p>
<p>This guide shows you how to design one from scratch: which account types you need, how to number them so the list can grow, a full sample chart for a small service business, and how invoices flow into the accounts. If you are new to the underlying system, read our guide to <a href="/blog/double-entry-bookkeeping">double-entry bookkeeping</a> first, because every account in the chart works on debits and credits.</p>

<h2>What a chart of accounts does</h2>
<p>Every transaction has to land somewhere. When you send a client an invoice for $2,000, your books need to know that receivables went up and revenue went up. When you pay rent, cash goes down and rent expense goes up. The chart is the menu of places a transaction can land.</p>
<p>It does three jobs:</p>
<ul>
<li><strong>Organizes the ledger.</strong> The <a href="/blog/general-ledger">general ledger</a> holds one page (or one filtered view) per account. The chart determines what those pages are.</li>
<li><strong>Drives your reports.</strong> The balance sheet is built from asset, liability and equity accounts. The profit and loss statement is built from revenue and expense accounts. If an account is miscategorized, the reports are wrong.</li>
<li><strong>Supports tax filing.</strong> When expense accounts line up with the categories on your tax return, year-end preparation becomes a matter of copying totals rather than re-sorting a year of receipts.</li>
</ul>

<h2>The five account types and their normal balances</h2>
<p>Every account belongs to one of five types. The type decides which financial statement it appears on and whether it normally carries a debit or credit balance.</p>
<table>
<thead><tr><th>Type</th><th>What it records</th><th>Normal balance</th><th>Statement</th></tr></thead>
<tbody>
<tr><td>Assets</td><td>What the business owns or is owed: cash, receivables, equipment, prepayments</td><td>Debit</td><td>Balance sheet</td></tr>
<tr><td>Liabilities</td><td>What the business owes: supplier bills, loans, tax collected, accrued costs</td><td>Credit</td><td>Balance sheet</td></tr>
<tr><td>Equity</td><td>The owner's stake: capital introduced, drawings, retained earnings</td><td>Credit</td><td>Balance sheet</td></tr>
<tr><td>Revenue</td><td>Income earned from sales, services, fees and interest</td><td>Credit</td><td>Profit and loss</td></tr>
<tr><td>Expenses</td><td>Costs of earning revenue and running the business</td><td>Debit</td><td>Profit and loss</td></tr>
</tbody>
</table>
<p>Many charts split expenses into two groups: cost of goods sold (direct costs that rise with each sale, such as materials or subcontractors) and operating expenses (overheads such as rent, software and insurance). That split lets you calculate gross profit.</p>

<h2>Account numbering: a system that scales</h2>
<p>Account numbering is what keeps a growing list readable. The most widely used convention assigns each type a block of numbers:</p>
<table>
<thead><tr><th>Range</th><th>Account type</th><th>Typical sub-ranges</th></tr></thead>
<tbody>
<tr><td>1000-1999</td><td>Assets</td><td>1000s cash, 1100-1300 receivables and prepayments, 1500s fixed assets</td></tr>
<tr><td>2000-2999</td><td>Liabilities</td><td>2000s payables and accruals, 2200s taxes payable, 2700s long-term loans</td></tr>
<tr><td>3000-3999</td><td>Equity</td><td>Owner's capital, drawings or dividends, retained earnings</td></tr>
<tr><td>4000-4999</td><td>Revenue</td><td>Service income, product sales, other income</td></tr>
<tr><td>5000-5999</td><td>Cost of goods sold</td><td>Materials, subcontractors, freight in</td></tr>
<tr><td>6000-7999</td><td>Operating expenses</td><td>Rent, wages, software, marketing, travel</td></tr>
<tr><td>8000-8999</td><td>Other income and expense</td><td>Interest, gains and losses, income tax</td></tr>
</tbody>
</table>
<p>Four rules make the numbering work long term:</p>
<ol>
<li><strong>Leave gaps.</strong> Number accounts in steps of 10 (6100, 6110, 6120) so you can add 6115 later without renumbering anything.</li>
<li><strong>Order by liquidity within assets and liabilities.</strong> Cash first, then receivables, then longer-term items. This mirrors the balance sheet layout.</li>
<li><strong>Use sub-accounts sparingly.</strong> A parent account such as 6200 Software with children for each tool is useful only if you will actually review those totals.</li>
<li><strong>Keep the numbers stable.</strong> Staff, your accountant and saved reports all refer to codes. Changing 6100 from Rent to Wages mid-year causes confusion.</li>
</ol>
<p>The ranges are a convention, not a legal requirement. Some software uses five-digit codes, and some industries follow their own schemes. Pick one and apply it consistently.</p>

<h2>Chart of accounts example for a small business</h2>
<p>Here is a sample chart for a small design and marketing studio that bills clients by invoice, holds a little equipment and has one loan. It has 38 accounts, which is typical for a business of this size.</p>
<table>
<thead><tr><th>Code</th><th>Account name</th><th>Type</th></tr></thead>
<tbody>
<tr><td>1000</td><td>Business Checking</td><td>Asset</td></tr>
<tr><td>1010</td><td>Business Savings</td><td>Asset</td></tr>
<tr><td>1050</td><td>Payment Processor Clearing</td><td>Asset</td></tr>
<tr><td>1200</td><td>Accounts Receivable</td><td>Asset</td></tr>
<tr><td>1300</td><td>Prepaid Expenses</td><td>Asset</td></tr>
<tr><td>1500</td><td>Computer Equipment</td><td>Asset</td></tr>
<tr><td>1510</td><td>Accumulated Depreciation, Equipment</td><td>Asset (contra)</td></tr>
<tr><td>1520</td><td>Furniture and Fittings</td><td>Asset</td></tr>
<tr><td>2000</td><td>Accounts Payable</td><td>Liability</td></tr>
<tr><td>2050</td><td>Business Credit Card</td><td>Liability</td></tr>
<tr><td>2100</td><td>Accrued Expenses</td><td>Liability</td></tr>
<tr><td>2150</td><td>Deferred Revenue</td><td>Liability</td></tr>
<tr><td>2200</td><td>Sales Tax Payable</td><td>Liability</td></tr>
<tr><td>2250</td><td>Payroll Liabilities</td><td>Liability</td></tr>
<tr><td>2700</td><td>Bank Loan</td><td>Liability</td></tr>
<tr><td>3000</td><td>Owner's Capital</td><td>Equity</td></tr>
<tr><td>3100</td><td>Owner's Drawings</td><td>Equity</td></tr>
<tr><td>3200</td><td>Retained Earnings</td><td>Equity</td></tr>
<tr><td>4000</td><td>Design Services Income</td><td>Revenue</td></tr>
<tr><td>4100</td><td>Retainer Income</td><td>Revenue</td></tr>
<tr><td>4200</td><td>Reimbursed Expenses Income</td><td>Revenue</td></tr>
<tr><td>4900</td><td>Discounts Given</td><td>Revenue (contra)</td></tr>
<tr><td>5000</td><td>Subcontractor Costs</td><td>Cost of sales</td></tr>
<tr><td>5100</td><td>Stock Images and Fonts</td><td>Cost of sales</td></tr>
<tr><td>5200</td><td>Printing for Clients</td><td>Cost of sales</td></tr>
<tr><td>6000</td><td>Wages and Salaries</td><td>Expense</td></tr>
<tr><td>6050</td><td>Employer Payroll Taxes</td><td>Expense</td></tr>
<tr><td>6100</td><td>Rent</td><td>Expense</td></tr>
<tr><td>6150</td><td>Utilities and Internet</td><td>Expense</td></tr>
<tr><td>6200</td><td>Software Subscriptions</td><td>Expense</td></tr>
<tr><td>6250</td><td>Insurance</td><td>Expense</td></tr>
<tr><td>6300</td><td>Marketing and Advertising</td><td>Expense</td></tr>
<tr><td>6400</td><td>Travel and Meals</td><td>Expense</td></tr>
<tr><td>6500</td><td>Accounting and Legal Fees</td><td>Expense</td></tr>
<tr><td>6600</td><td>Bank and Payment Fees</td><td>Expense</td></tr>
<tr><td>6700</td><td>Depreciation Expense</td><td>Expense</td></tr>
<tr><td>8000</td><td>Interest Expense</td><td>Other expense</td></tr>
<tr><td>8100</td><td>Interest Income</td><td>Other income</td></tr>
</tbody>
</table>
<p>A few choices in this sample are worth copying. The payment processor clearing account (1050) holds card receipts until the processor pays out, net of fees, which makes <a href="/blog/bank-reconciliation">bank reconciliation</a> far easier. Contra accounts (1510 and 4900) keep the original amounts visible while still reducing the totals. And separate liability accounts for <a href="/blog/accrued-expenses">accrued expenses</a> and deferred revenue are ready for month-end adjustments, even if you only use them a few times a year.</p>

<h2>How to set up your chart of accounts step by step</h2>
<ol>
<li><strong>Start from your software's default.</strong> Most accounting apps generate a list based on your industry. Export it so you can review it in a spreadsheet.</li>
<li><strong>List how you earn money.</strong> Create one revenue account per income stream you want to track separately, such as project fees, retainers and product sales. Avoid one account per client; use customer reports for that.</li>
<li><strong>Match expenses to your tax return.</strong> Put the expense lines from your business tax return next to your accounts and make sure each line has a home.</li>
<li><strong>Add balance sheet accounts for what you actually hold.</strong> One account per bank account, card and loan, plus receivables, payables and any tax you collect.</li>
<li><strong>Number using ranges with gaps</strong>, as described above.</li>
<li><strong>Deactivate what you will not use.</strong> Fewer choices mean fewer miscodings.</li>
<li><strong>Write a one-line description for each account</strong> so anyone posting transactions knows what belongs there.</li>
<li><strong>Review after three months</strong> and again at year end, once you see which accounts are crowded and which are empty.</li>
</ol>

<h2>Worked example: how an invoice moves through the accounts</h2>
<p>Suppose the studio above invoices a client $2,000 for a logo project plus 8% sales tax, so the invoice total is $2,160. The journal entry on the invoice date is:</p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>1200 Accounts Receivable</td><td>$2,160</td><td></td></tr>
<tr><td>4000 Design Services Income</td><td></td><td>$2,000</td></tr>
<tr><td>2200 Sales Tax Payable</td><td></td><td>$160</td></tr>
</tbody>
</table>
<p>Two weeks later the client pays by card. The processor deposits $2,097.36 after a fee of $62.64. The entry records the full amount clearing receivables and the fee as an expense:</p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>1000 Business Checking</td><td>$2,097.36</td><td></td></tr>
<tr><td>6600 Bank and Payment Fees</td><td>$62.64</td><td></td></tr>
<tr><td>1200 Accounts Receivable</td><td></td><td>$2,160.00</td></tr>
</tbody>
</table>
<p>Because the chart has separate accounts for revenue, tax and fees, the profit and loss shows $2,000 of income and $62.64 of fees, and the balance sheet shows $160 owed to the tax authority. If everything had gone into one income account, revenue would be overstated and the tax liability invisible. Our <a href="/blog/journal-entries">journal entries guide</a> walks through the rest of the invoice lifecycle, including credit notes and bad debts.</p>

<h3>How the accounts roll up into your reports</h3>
<p>At the end of a month, each account's balance feeds one line, or part of one line, in the financial statements. Suppose the studio's revenue and expense accounts show these totals for October:</p>
<table>
<thead><tr><th>Profit and loss line</th><th>Accounts included</th><th>October</th></tr></thead>
<tbody>
<tr><td>Revenue</td><td>4000, 4100, 4200 less 4900</td><td>$18,400</td></tr>
<tr><td>Cost of sales</td><td>5000, 5100, 5200</td><td>($4,100)</td></tr>
<tr><td>Gross profit</td><td></td><td>$14,300</td></tr>
<tr><td>Operating expenses</td><td>6000 to 6700</td><td>($10,250)</td></tr>
<tr><td>Interest</td><td>8000 less 8100</td><td>($180)</td></tr>
<tr><td>Net profit</td><td></td><td>$3,870</td></tr>
</tbody>
</table>
<p>The account numbering does the grouping for you: everything in the 5000s is cost of sales, everything in the 6000s is overhead. If someone posts a subcontractor bill to 6300 Marketing, gross profit is overstated and overheads look bloated. Clear ranges make that kind of mistake easier to spot. The balance sheet works the same way, with the 1000s, 2000s and 3000s rolling up into assets, liabilities and equity, as shown in our <a href="/blog/balance-sheet-small-business">small business balance sheet</a> guide.</p>

<h2>Tailoring the chart to your type of business</h2>
<table>
<thead><tr><th>Business</th><th>Accounts to add or emphasize</th></tr></thead>
<tbody>
<tr><td>Solo freelancer</td><td>One income account per service line, home office costs, equipment, owner's drawings; often 20 to 25 accounts in total</td></tr>
<tr><td>Agency or studio</td><td>Subcontractor costs in cost of sales, retainer income, deferred revenue for prepaid work</td></tr>
<tr><td>Retail or e-commerce</td><td>Inventory asset, cost of goods sold, freight in, merchant fees, returns and allowances</td></tr>
<tr><td>Construction trades</td><td>Materials, job costs, retention receivable and payable, equipment hire</td></tr>
<tr><td>Company with shareholders</td><td>Share capital, dividends, retained earnings rather than drawings, corporate tax payable</td></tr>
</tbody>
</table>
<p>The equity section changes most by entity type. Sole traders and partners use capital and drawings accounts. Corporations use share capital and <a href="/blog/retained-earnings">retained earnings</a>, which accumulate profit not paid out as dividends.</p>

<h2>Keeping the chart clean over time</h2>
<p>Charts tend to grow messy as people add accounts on the fly. A light set of rules prevents that:</p>
<ul>
<li><strong>One owner.</strong> Only the bookkeeper or owner adds or renames accounts.</li>
<li><strong>Add for a reason.</strong> A new account should answer a question you will ask repeatedly, such as how much you spend on contractors.</li>
<li><strong>Use classes, tags or projects for dimensions.</strong> Track clients, locations or departments with your software's tagging features instead of duplicating accounts.</li>
<li><strong>Retire, do not delete.</strong> Mark old accounts inactive so historical reports still work.</li>
<li><strong>Review yearly.</strong> Before closing the year, look for accounts with tiny balances, catch-all accounts that have grown too large, and anything named "Miscellaneous" holding more than a small share of expenses.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Recording sales tax as income.</strong> It belongs in a liability account until you pay it over.</li>
<li><strong>Creating an account per customer or supplier.</strong> Use the receivables and payables sub-ledgers instead.</li>
<li><strong>Mixing personal and business items.</strong> Owner payments go to drawings, not to an expense account.</li>
<li><strong>Expensing equipment that should be an asset.</strong> Larger purchases often need to be capitalized and depreciated; check your capitalization threshold with your accountant.</li>
<li><strong>Too much detail too early.</strong> Start lean and split an account only when the total is large enough to need it.</li>
</ul>

<h2>Next step</h2>
<p>A well-structured chart of accounts makes every later step easier, from the <a href="/blog/trial-balance">trial balance</a> to the year-end accounts. It also depends on clean source documents. Every invoice you issue should carry a unique number, a clear tax line and the correct totals, so it posts to the right accounts first time. Create professional invoices with our free <a href="/invoice-generator">invoice generator</a>, and keep your numbering consistent with the <a href="/tools/invoice-number-generator">invoice number generator</a>. For more accounting walkthroughs, browse our <a href="/blog/category/guides">guides</a>.</p>
`,
  },
  {
    slug: "accrued-expenses",
    title: "Accrued Expenses: Examples and Journal Entries",
    description:
      "What accrued expenses are, how they differ from accounts payable, and how to record the accrued liabilities journal entry, with worked examples and reversals.",
    category: "guides",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "deferred-revenue-vs-accrued-revenue",
      "journal-entries",
      "cash-vs-accrual-accounting",
    ],
    faqs: [
      {
        q: "What is an accrued expense in simple terms?",
        a: "An accrued expense is a cost your business has already incurred but has not yet been billed for or paid by the end of an accounting period. Common examples are wages employees have earned since the last payday, interest building up on a loan and utilities used this month that will be billed next month. Under accrual accounting you record the cost in the period it was incurred, along with a matching liability.",
      },
      {
        q: "Is an accrued expense a liability or an expense?",
        a: "Both sides are recorded. The cost goes to an expense account on the profit and loss statement, and the amount owed goes to a liability account on the balance sheet, usually called Accrued Expenses or Accrued Liabilities. The expense reduces profit for the period. The liability stays on the balance sheet until you pay the bill, at which point it is cleared against cash.",
      },
      {
        q: "What is the difference between accrued expenses and accounts payable?",
        a: "Both are short-term liabilities for costs already incurred. The difference is the invoice. Accounts payable records amounts for which you have received a supplier invoice, so the exact figure is known. Accrued expenses record amounts you owe but have not been invoiced for yet, so they are often estimates. When the invoice eventually arrives, the accrual is cleared and the bill moves into accounts payable or is paid directly.",
      },
      {
        q: "What is the journal entry for accrued expenses?",
        a: "At period end, debit the relevant expense account (for example Wages Expense) and credit Accrued Expenses for the amount incurred but not yet paid. When the bill is paid or the invoice is recorded, debit Accrued Expenses and credit Cash or Accounts Payable. Many businesses instead post a reversing entry on the first day of the next period and then record the actual bill normally, which avoids double counting.",
      },
      {
        q: "Are accrued expenses current liabilities?",
        a: "Usually, yes. Most accruals, such as wages, utilities, interest and professional fees, are settled within weeks or a few months, so they are shown as current liabilities on the balance sheet. An accrual expected to be settled more than 12 months after the balance sheet date, such as some long-term bonus or warranty obligations, would be classified as non-current. Check the classification rules in the reporting framework you follow.",
      },
      {
        q: "Do small businesses on cash accounting record accrued expenses?",
        a: "Not in the day-to-day books. Under cash accounting, expenses are recorded when paid, so there are no accruals. However, a lender, investor or buyer may ask for accrual-based statements, and some businesses must use accrual accounting for tax depending on size and structure. If you report on a cash basis, it still helps to keep a list of unbilled costs so you know what is coming.",
      },
      {
        q: "How do you estimate an accrued expense?",
        a: "Use the best information available at the period end. For wages, multiply the days worked since the last payroll by the daily pay rate. For interest, multiply the loan balance by the rate and the fraction of the year. For utilities or services, use meter readings, the supplier's usage portal or last month's bill adjusted for known changes. Document how you calculated each estimate and correct the difference when the actual invoice arrives.",
      },
      {
        q: "What happens if an accrued expense estimate is wrong?",
        a: "Small differences are normal. When the actual invoice arrives, record the difference in the current period's expense. For example, if you accrued $620 for electricity and the bill is $655, the extra $35 goes to this month's utilities expense. You do not reopen the prior period for routine estimate changes. Large or repeated errors suggest your estimating method needs improving, and material errors may require correction under your accounting framework.",
      },
      {
        q: "What is a reversing entry for accruals?",
        a: "A reversing entry is the exact opposite of the period-end accrual, dated the first day of the next period. It cancels the accrual so that when the real bill is recorded in the normal way, the expense is not counted twice. The net effect in the new period is only the difference between the actual bill and the estimate. Most accounting software can schedule reversing entries automatically when you post the accrual.",
      },
    ],
    content: `
<p><strong>Accrued expenses</strong> are costs your business has incurred during a period but has not yet been invoiced for or paid by the period end. Typical examples are unpaid wages, loan interest and utilities used but not yet billed. You record them by debiting an expense account and crediting a liability called accrued expenses or accrued liabilities, then clear the liability when you pay.</p>
<p>This guide explains when to accrue, how accruals differ from accounts payable, and how to post the accrued liabilities journal entry with three worked examples. It assumes you are comfortable with debits and credits; if not, start with our guide to <a href="/blog/double-entry-bookkeeping">double-entry bookkeeping</a>.</p>

<h2>Why accrued expenses exist: the matching principle</h2>
<p>Accrual accounting records income when it is earned and costs when they are incurred, regardless of when cash moves. The aim is to match each period's revenue with the costs of earning it. If your staff work the last week of December but are paid in January, that labor helped produce December's revenue, so the cost belongs in December.</p>
<p>Without accruals, profit swings around depending on when bills happen to arrive. A month with three utility bills looks expensive; the next month looks cheap. Accruals smooth that out so the profit and loss reflects what actually happened. If you are not sure which method your business uses, our comparison of <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> explains the differences and who typically uses each.</p>
<p>Accruals are the mirror image of accrued revenue, where you have earned income but not yet invoiced it. Our guide to <a href="/blog/deferred-revenue-vs-accrued-revenue">deferred revenue vs accrued revenue</a> covers the income side.</p>

<h2>Common examples of accrued expenses</h2>
<table>
<thead><tr><th>Accrual</th><th>Why it is unpaid at period end</th><th>How to estimate</th></tr></thead>
<tbody>
<tr><td>Wages and salaries</td><td>Staff worked days after the last payroll cut-off</td><td>Days worked x daily rate</td></tr>
<tr><td>Employer payroll taxes</td><td>Linked to the accrued wages</td><td>Accrued wages x employer tax rate</td></tr>
<tr><td>Interest on loans</td><td>Interest builds daily but is charged monthly or quarterly</td><td>Balance x annual rate x days / 365</td></tr>
<tr><td>Utilities</td><td>Usage this month is billed next month</td><td>Meter reading or prior bill adjusted</td></tr>
<tr><td>Professional fees</td><td>Accountant or lawyer has done work but not invoiced</td><td>Engagement letter, hours worked or quote</td></tr>
<tr><td>Contractor or freelancer work</td><td>Work delivered but invoice not yet received</td><td>Agreed rate x work delivered</td></tr>
<tr><td>Bonuses and commissions</td><td>Earned this year, paid after year end</td><td>Plan formula applied to results</td></tr>
<tr><td>Goods received not invoiced</td><td>Delivery arrived before the supplier's invoice</td><td>Purchase order price x quantity received</td></tr>
</tbody>
</table>

<h2>Accrued expenses vs accounts payable</h2>
<p>Both are liabilities for costs already incurred, and both usually sit in current liabilities. The deciding question is whether you hold a supplier invoice.</p>
<table>
<thead><tr><th>Feature</th><th>Accrued expenses</th><th>Accounts payable</th></tr></thead>
<tbody>
<tr><td>Invoice received?</td><td>No</td><td>Yes</td></tr>
<tr><td>Amount</td><td>Often an estimate</td><td>Exact, per the invoice</td></tr>
<tr><td>When recorded</td><td>Usually at period end as an adjusting entry</td><td>When the invoice is entered</td></tr>
<tr><td>Tracked by supplier?</td><td>Usually as a schedule, not a sub-ledger</td><td>Yes, in the payables sub-ledger</td></tr>
<tr><td>Typical items</td><td>Wages, interest, unbilled utilities, fees</td><td>Supplier bills for goods and services</td></tr>
</tbody>
</table>
<p>In practice, an accrual often turns into a payable. You accrue an estimated $1,500 for the accountant's December work; in January their invoice arrives and you record it in payables. The accrual is cleared at that point. For more on the payables side, see our guide to the <a href="/blog/accounts-payable-process">accounts payable process</a>.</p>

<h2>The accrued liabilities journal entry, step by step</h2>
<p>Every accrual follows the same three-stage pattern:</p>
<ol>
<li><strong>Period end: record the accrual.</strong> Debit the expense, credit Accrued Liabilities.</li>
<li><strong>Start of next period: reverse it (optional but common).</strong> Debit Accrued Liabilities, credit the expense.</li>
<li><strong>When the bill arrives or is paid: record it normally.</strong> Debit the expense, credit Cash or Accounts Payable.</li>
</ol>
<p>If you do not use reversing entries, step 3 becomes: debit Accrued Liabilities (and the expense account for any difference), credit Cash or Accounts Payable. Both methods give the same result; reversing entries simply let whoever enters bills treat every invoice the same way.</p>

<h3>Worked example 1: unpaid wages at month end</h3>
<p>A small firm pays four employees every Friday for the week ended that day. The combined daily wage bill is $1,200. December 31 falls on a Wednesday, so staff have worked Monday to Wednesday (three days) that will be paid on Friday, January 2. Employer payroll taxes are assumed at 7.65% for this example.</p>
<ul>
<li>Accrued wages: 3 days x $1,200 = $3,600</li>
<li>Accrued employer payroll tax: $3,600 x 7.65% = $275.40</li>
</ul>
<p>December 31 adjusting entry:</p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Wages Expense</td><td>$3,600.00</td><td></td></tr>
<tr><td>Payroll Tax Expense</td><td>$275.40</td><td></td></tr>
<tr><td>Accrued Liabilities (wages and payroll tax)</td><td></td><td>$3,875.40</td></tr>
</tbody>
</table>
<p>January 1 reversing entry:</p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Accrued Liabilities</td><td>$3,875.40</td><td></td></tr>
<tr><td>Wages Expense</td><td></td><td>$3,600.00</td></tr>
<tr><td>Payroll Tax Expense</td><td></td><td>$275.40</td></tr>
</tbody>
</table>
<p>On January 2 payroll runs for the full week (five days, $6,000 of wages) and is recorded as usual. January's wages expense nets to $6,000 minus the $3,600 reversal, or $2,400, which is exactly the two days worked in January. December carries the three days worked in December. Payroll tax rates and withholding differ by country and change over time, so confirm the current rates with your payroll provider.</p>

<h3>Worked example 2: an estimated utility bill</h3>
<p>A workshop's electricity is billed about three weeks after each month ends. For March, the bookkeeper estimates $620 based on a meter reading. The March 31 entry:</p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Utilities Expense</td><td>$620</td><td></td></tr>
<tr><td>Accrued Liabilities</td><td></td><td>$620</td></tr>
</tbody>
</table>
<p>The actual bill arrives on April 20 for $655. Without a reversing entry, the bookkeeper clears the accrual and books the $35 difference to April:</p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Accrued Liabilities</td><td>$620</td><td></td></tr>
<tr><td>Utilities Expense</td><td>$35</td><td></td></tr>
<tr><td>Accounts Payable</td><td></td><td>$655</td></tr>
</tbody>
</table>
<p>March shows a reasonable estimate; April absorbs a small correction. You do not go back and change March for a difference this size.</p>

<h3>Worked example 3: accrued interest on a loan</h3>
<p>A business has a $50,000 loan at 6% annual interest, charged quarterly in arrears. At the end of each month it accrues one month of interest: $50,000 x 6% / 12 = $250.</p>
<table>
<thead><tr><th>Date</th><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Jan 31</td><td>Interest Expense / Accrued Liabilities</td><td>$250</td><td>$250</td></tr>
<tr><td>Feb 28</td><td>Interest Expense / Accrued Liabilities</td><td>$250</td><td>$250</td></tr>
<tr><td>Mar 31</td><td>Interest Expense / Accrued Liabilities</td><td>$250</td><td>$250</td></tr>
<tr><td>Mar 31</td><td>Accrued Liabilities / Cash (quarterly charge paid)</td><td>$750</td><td>$750</td></tr>
</tbody>
</table>
<p>Each month bears its own interest cost, and the accrual builds to $750 before the bank charges it. For a precise figure, banks usually compute interest on actual days, so use the bank's statement method if the difference matters.</p>

<h2>How to estimate accruals reliably</h2>
<ul>
<li><strong>Use source data, not guesses.</strong> Timesheets, purchase orders, delivery notes, usage portals and loan agreements all give you defensible numbers.</li>
<li><strong>Keep an accruals schedule.</strong> A simple spreadsheet listing each accrual, the basis of the estimate, the amount and when you expect the invoice.</li>
<li><strong>Look back after the fact.</strong> Compare last month's estimates with the actual bills. If you are always low on one item, adjust your method.</li>
<li><strong>Set a materiality threshold.</strong> Many small businesses only accrue items above a set amount, such as $250, to avoid busywork. Agree the level with your accountant.</li>
<li><strong>Ask suppliers.</strong> A short email to regular suppliers before month end often gets you the figure they are about to invoice.</li>
</ul>

<h2>Where accrued expenses appear in the financial statements</h2>
<p>Accruals touch both main statements. On the profit and loss, the cost sits in its normal expense line (wages, utilities, interest), so readers do not see a separate accruals figure. On the balance sheet, the unpaid amount appears under current liabilities, usually as one line called accrued liabilities or accruals, next to accounts payable.</p>
<p>Here is how the three examples above would look on a December 31 balance sheet, assuming the March utility accrual has already been cleared and one month of loan interest is outstanding:</p>
<table>
<thead><tr><th>Current liabilities</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Accounts payable</td><td>$8,420.00</td></tr>
<tr><td>Accrued wages and payroll taxes</td><td>$3,875.40</td></tr>
<tr><td>Accrued interest</td><td>$250.00</td></tr>
<tr><td>Sales tax payable</td><td>$1,960.00</td></tr>
<tr><td>Total current liabilities</td><td>$14,505.40</td></tr>
</tbody>
</table>
<p>Leaving the accruals out would understate liabilities by $4,125.40 and overstate December profit by the same amount. That flows straight through to equity, which is why accruals matter for the year-end <a href="/blog/retained-earnings">retained earnings</a> figure as well as the monthly results. When you run a <a href="/blog/trial-balance">trial balance</a> after posting accruals, the liability account should agree with your accruals schedule line by line.</p>
<p>On the cash flow statement prepared with the indirect method, an increase in accrued liabilities is added back to net income, because the expense reduced profit without using cash in that period. A decrease, when you pay off accruals, reduces operating cash flow. That is one reason profit and cash can differ sharply around year end.</p>

<h2>What a small business actually needs to accrue</h2>
<p>Not every business needs a full accruals routine every month. A practical approach depends on who uses your accounts:</p>
<ul>
<li><strong>Sole trader on cash basis, no lender reporting:</strong> no accruals in the books. Keep a list of known unbilled costs so you can plan cash.</li>
<li><strong>Small company preparing annual accounts:</strong> accrue at year end at least, especially wages, bonuses, accountancy fees, interest and goods received not invoiced.</li>
<li><strong>Business with a bank loan or investors:</strong> accrue monthly if you send management accounts, because lenders and investors compare month to month.</li>
<li><strong>Growing business with staff:</strong> accrue payroll every month; it is usually the largest and most predictable item.</li>
</ul>
<p>Whichever level you choose, record each accrual in the <a href="/blog/general-ledger">general ledger</a> with a clear description and a reference to the working, such as 'Dec wages 29-31 per timesheets', so the entry can be traced later.</p>

<h2>Month-end checklist for accrued expenses</h2>
<ol>
<li>Calculate wages and payroll taxes for days worked since the last pay date.</li>
<li>Accrue interest on every loan and credit line since the last charge.</li>
<li>List deliveries received with no invoice yet (goods received not invoiced).</li>
<li>List services received with no invoice: utilities, contractors, professional fees, freight.</li>
<li>Post the accruals and schedule the reversing entries.</li>
<li>Reconcile the Accrued Liabilities balance to your schedule.</li>
<li>Clear any accruals left over from earlier months that have since been invoiced.</li>
</ol>
<p>These steps fit naturally into a wider <a href="/blog/month-end-close-checklist">month-end close checklist</a>. Accruals are one of the most common sources of difference at close, so it pays to make them routine.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Double counting.</strong> Accruing an expense and then recording the full invoice without reversing or clearing the accrual.</li>
<li><strong>Stale accruals.</strong> Balances that sit for months because nobody cleared them when the bill arrived. Review the account every month.</li>
<li><strong>Accruing items that are prepaid.</strong> If you paid in advance, that is a prepayment, not an accrual. See our guide to <a href="/blog/prepaid-expenses">prepaid expenses</a>.</li>
<li><strong>No documentation.</strong> Auditors and lenders will ask how each estimate was calculated.</li>
<li><strong>Assuming book and tax timing match.</strong> Tax rules on when an accrued cost is deductible can differ from accounting rules, especially for bonuses and amounts owed to related parties. Check with a qualified adviser.</li>
</ul>

<h2>Next step</h2>
<p>Accruals cover the costs you owe before the paperwork arrives. The flip side is making sure your own paperwork goes out on time, so your customers can record and pay your invoices promptly. Create clear, numbered invoices with our free <a href="/invoice-generator">invoice generator</a>, and see more practical accounting walkthroughs in our <a href="/blog/category/business-finance">business finance</a> section.</p>
`,
  },
  {
    slug: "prepaid-expenses",
    title: "Prepaid Expenses: Journal Entries and Amortization",
    description:
      "How to record prepaid expenses, with the prepaid expense journal entry, a 12-month amortization schedule, partial-month examples and balance sheet treatment.",
    category: "guides",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["accrued-expenses", "journal-entries", "balance-sheet-small-business"],
    faqs: [
      {
        q: "What is a prepaid expense?",
        a: "A prepaid expense is a payment made in advance for goods or services you will receive in future accounting periods. Common examples are annual insurance premiums, rent paid ahead, yearly software subscriptions and service contracts. At the time of payment the amount is recorded as an asset, because the business has a right to future benefit. The asset is then moved to expense gradually as each period's share of the benefit is used up.",
      },
      {
        q: "Is a prepaid expense an asset or an expense?",
        a: "It starts as an asset and becomes an expense over time. On the payment date you debit a Prepaid Expenses asset account and credit cash. At the end of each month or period you move the portion used up into the related expense account, such as Insurance Expense. By the end of the coverage period the asset balance for that item should be zero and the full cost will have been expensed.",
      },
      {
        q: "What is the journal entry for a prepaid expense?",
        a: "When you pay, debit Prepaid Expenses (or a specific account such as Prepaid Insurance) and credit Cash or Accounts Payable for the full amount. Each period, debit the expense account and credit Prepaid Expenses for the portion that relates to that period. For example, a $7,200 annual policy is recorded as a $7,200 asset, then $600 is moved to insurance expense each month for 12 months.",
      },
      {
        q: "What is a prepaid expense amortization schedule?",
        a: "It is a table that shows, for each prepaid item, the original amount, the coverage start and end dates, the amount to expense each period and the remaining balance. Accountants use it to post the monthly entries and to check that the balance sheet figure for prepaid expenses is correct. A simple spreadsheet works for most small businesses, and many accounting apps can automate the entries once the schedule is set up.",
      },
      {
        q: "Are prepaid expenses current assets?",
        a: "Usually, yes. The portion that will be used up within 12 months of the balance sheet date is a current asset. If you prepay for longer, such as a three-year insurance policy or software contract, the part relating to periods more than 12 months away is normally shown as a non-current asset. Each year, the next 12 months' share is reclassified to current as time passes.",
      },
      {
        q: "Should I record every small prepayment as an asset?",
        a: "Not necessarily. Many businesses set a materiality policy, for example expensing prepayments under a set amount or covering three months or less straight away. Tracking a $90 annual subscription across 12 months adds work without changing the picture. Agree a sensible threshold with your accountant, write it down and apply it consistently. Larger items, such as insurance, rent and major contracts, should still go through the prepaid schedule.",
      },
      {
        q: "What is the difference between prepaid expenses and accrued expenses?",
        a: "They are opposites in timing. A prepaid expense is paid before you receive the benefit, so it creates an asset that is expensed over time. An accrued expense is incurred before you pay or receive a bill, so it creates a liability that is cleared when you pay. Both adjustments exist so that costs appear in the period they relate to rather than the period cash moved.",
      },
      {
        q: "Can prepaid expenses be deducted for tax in the year paid?",
        a: "It depends on your country, your accounting method and the length of the prepayment. Some tax systems allow certain short prepayments to be deducted when paid, while longer prepayments must be spread over the period of benefit. In the United States, for example, a 12-month rule can apply to some prepaid amounts. The rules are detailed, so check with a qualified tax adviser before deducting a large prepayment in one year.",
      },
      {
        q: "Is a security deposit a prepaid expense?",
        a: "No. A refundable security deposit, such as one paid to a landlord, is money you expect to get back, so it is recorded as a separate asset, often called Deposits, and is not expensed over time. Only if part of the deposit is kept, for example to cover damage, does that portion become an expense. Prepaid rent, on the other hand, is rent paid in advance for future months and is expensed as each month passes.",
      },
    ],
    content: `
<p><strong>Prepaid expenses</strong> are payments you make in advance for goods or services that will benefit future periods, such as an annual insurance premium or a yearly software plan. You record the payment as an asset, then move a slice to expense each month as the benefit is used. The tool that keeps track of those slices is an amortization schedule.</p>
<p>This guide covers the prepaid expense journal entry, a full 12-month amortization schedule, partial-month and multi-year examples, and how prepayments appear on the balance sheet. It builds on the basics in our <a href="/blog/journal-entries">journal entries guide</a>.</p>

<h2>Why prepaid expenses are not expensed immediately</h2>
<p>Under accrual accounting, costs are recognized in the period they help produce revenue. If you pay $7,200 in January for a year of insurance, all 12 months benefit from that cover. Expensing the full $7,200 in January would make January look like a loss-making month and the next 11 months look unusually cheap.</p>
<p>Recording the payment as an asset first, then expensing $600 per month, gives each month its fair share. This is the reverse of an accrual. With <a href="/blog/accrued-expenses">accrued expenses</a>, the cost comes before the payment and you record a liability. With prepayments, the payment comes first and you record an asset.</p>

<h3>Prepaid expenses vs accrued expenses</h3>
<table>
<thead><tr><th></th><th>Prepaid expense</th><th>Accrued expense</th></tr></thead>
<tbody>
<tr><td>Cash moves</td><td>Before the benefit</td><td>After the benefit</td></tr>
<tr><td>Balance sheet item</td><td>Asset</td><td>Liability</td></tr>
<tr><td>Period-end adjustment</td><td>Debit expense, credit prepaid asset</td><td>Debit expense, credit accrued liability</td></tr>
<tr><td>Example</td><td>Annual insurance paid in advance</td><td>December wages paid in January</td></tr>
</tbody>
</table>
<p>The revenue-side equivalents are deferred revenue (cash received before you earn it) and accrued revenue (earned before you invoice). Our guide to <a href="/blog/deferred-revenue-vs-accrued-revenue">deferred revenue vs accrued revenue</a> explains those.</p>

<h2>Common examples of prepaid expenses</h2>
<table>
<thead><tr><th>Item</th><th>Typical term</th><th>Expense account it moves to</th></tr></thead>
<tbody>
<tr><td>Business insurance premiums</td><td>6 or 12 months</td><td>Insurance Expense</td></tr>
<tr><td>Rent paid in advance</td><td>1 to 12 months</td><td>Rent Expense</td></tr>
<tr><td>Annual software subscriptions</td><td>12 months</td><td>Software Subscriptions</td></tr>
<tr><td>Maintenance and support contracts</td><td>12 to 36 months</td><td>Repairs and Maintenance</td></tr>
<tr><td>Trade show or conference fees</td><td>Until the event date</td><td>Marketing or Travel</td></tr>
<tr><td>Advertising paid in advance</td><td>Over the campaign period</td><td>Advertising</td></tr>
<tr><td>Professional memberships and licences</td><td>12 months</td><td>Dues and Subscriptions</td></tr>
</tbody>
</table>
<p>A refundable security deposit is not a prepayment. You expect the money back, so it sits in a separate deposits asset account and is not expensed.</p>

<h2>The prepaid expense journal entry</h2>
<p>There are two entries: one when you pay and one each period as the benefit is used.</p>
<p><strong>Example:</strong> On April 1, a consultancy pays $7,200 for a 12-month professional liability policy covering April 1 to March 31.</p>
<p>April 1, payment:</p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Prepaid Insurance</td><td>$7,200</td><td></td></tr>
<tr><td>Business Checking</td><td></td><td>$7,200</td></tr>
</tbody>
</table>
<p>April 30, and the last day of every month after that:</p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Insurance Expense</td><td>$600</td><td></td></tr>
<tr><td>Prepaid Insurance</td><td></td><td>$600</td></tr>
</tbody>
</table>
<p>If the insurer invoices you first and you pay later, credit Accounts Payable instead of cash on the invoice date, then clear the payable when you pay. The prepaid asset and monthly expense entries are the same.</p>

<h2>Amortization schedule: the 12-month example</h2>
<p>The amortization schedule shows each month's expense and the remaining asset balance. Suppose the consultancy's financial year ends December 31.</p>
<table>
<thead><tr><th>Month</th><th>Opening balance</th><th>Expensed</th><th>Closing balance</th></tr></thead>
<tbody>
<tr><td>April</td><td>$7,200</td><td>$600</td><td>$6,600</td></tr>
<tr><td>May</td><td>$6,600</td><td>$600</td><td>$6,000</td></tr>
<tr><td>June</td><td>$6,000</td><td>$600</td><td>$5,400</td></tr>
<tr><td>July</td><td>$5,400</td><td>$600</td><td>$4,800</td></tr>
<tr><td>August</td><td>$4,800</td><td>$600</td><td>$4,200</td></tr>
<tr><td>September</td><td>$4,200</td><td>$600</td><td>$3,600</td></tr>
<tr><td>October</td><td>$3,600</td><td>$600</td><td>$3,000</td></tr>
<tr><td>November</td><td>$3,000</td><td>$600</td><td>$2,400</td></tr>
<tr><td>December</td><td>$2,400</td><td>$600</td><td>$1,800</td></tr>
<tr><td>January</td><td>$1,800</td><td>$600</td><td>$1,200</td></tr>
<tr><td>February</td><td>$1,200</td><td>$600</td><td>$600</td></tr>
<tr><td>March</td><td>$600</td><td>$600</td><td>$0</td></tr>
</tbody>
</table>
<p>At the December 31 year end, the balance sheet shows $1,800 of prepaid insurance (three months still to come), and the year's profit and loss shows $5,400 of insurance expense (nine months used). That split is exactly what the matching principle asks for.</p>

<h3>Partial months and uneven periods</h3>
<p>Coverage rarely starts neatly on the first of the month. You have two reasonable options:</p>
<ul>
<li><strong>Daily proration.</strong> Divide the cost by the number of days in the term and expense the days that fall in each month. Most accurate, slightly more work.</li>
<li><strong>Half-month or full-month convention.</strong> Treat any start on or before the 15th as a full month and later starts as beginning next month. Simpler, and usually close enough for small amounts.</li>
</ul>
<p><strong>Example with daily proration:</strong> A $3,650 annual support contract runs from June 16 to June 15 the following year, a 365-day term, so it costs $10 per day.</p>
<table>
<thead><tr><th>Month</th><th>Days covered</th><th>Expense</th></tr></thead>
<tbody>
<tr><td>June (16th to 30th)</td><td>15</td><td>$150</td></tr>
<tr><td>July</td><td>31</td><td>$310</td></tr>
<tr><td>August</td><td>31</td><td>$310</td></tr>
<tr><td>September</td><td>30</td><td>$300</td></tr>
<tr><td>Following June (1st to 15th)</td><td>15</td><td>$150</td></tr>
</tbody>
</table>
<p>The middle months follow the same pattern and the 365 days add back to $3,650. Choose one method in your accounting policy and use it for every item.</p>

<h3>Multi-year prepayments on the balance sheet</h3>
<p>Paying for more than a year changes how the asset is classified. Suppose a business pays $9,000 on January 1 for a three-year equipment maintenance plan, or $250 per month.</p>
<table>
<thead><tr><th>Balance sheet date</th><th>Current portion (next 12 months)</th><th>Non-current portion</th><th>Total prepaid</th></tr></thead>
<tbody>
<tr><td>January 1, year 1</td><td>$3,000</td><td>$6,000</td><td>$9,000</td></tr>
<tr><td>December 31, year 1</td><td>$3,000</td><td>$3,000</td><td>$6,000</td></tr>
<tr><td>December 31, year 2</td><td>$3,000</td><td>$0</td><td>$3,000</td></tr>
<tr><td>December 31, year 3</td><td>$0</td><td>$0</td><td>$0</td></tr>
</tbody>
</table>
<p>The current portion sits with cash and receivables in current assets; the rest sits lower down. If you prepare a simple <a href="/blog/balance-sheet-small-business">small business balance sheet</a> and the non-current amount is small, many owners show one prepaid line, but lenders reviewing your accounts may expect the split.</p>

<h3>Worked example: several prepaid items in one schedule</h3>
<p>Most businesses have more than one prepayment running at a time. Here is a combined schedule for a small agency at the end of October, with the monthly amounts that make up one combined journal entry.</p>
<table>
<thead><tr><th>Item</th><th>Paid</th><th>Term</th><th>Monthly amount</th><th>Balance at Oct 31</th></tr></thead>
<tbody>
<tr><td>Professional liability insurance</td><td>$7,200</td><td>Apr 1 to Mar 31</td><td>$600</td><td>$3,000</td></tr>
<tr><td>Design software, annual plan</td><td>$1,440</td><td>Jul 1 to Jun 30</td><td>$120</td><td>$960</td></tr>
<tr><td>Office rent, quarter in advance</td><td>$5,400</td><td>Oct 1 to Dec 31</td><td>$1,800</td><td>$3,600</td></tr>
<tr><td>Conference booth (event in February)</td><td>$2,000</td><td>Expensed in February</td><td>$0 until then</td><td>$2,000</td></tr>
<tr><td>Total</td><td></td><td></td><td>$2,520</td><td>$9,560</td></tr>
</tbody>
</table>
<p>The October 31 journal entry posts each item's share to its own expense account:</p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Insurance Expense</td><td>$600</td><td></td></tr>
<tr><td>Software Subscriptions</td><td>$120</td><td></td></tr>
<tr><td>Rent Expense</td><td>$1,800</td><td></td></tr>
<tr><td>Prepaid Expenses</td><td></td><td>$2,520</td></tr>
</tbody>
</table>
<p>The conference booth is a good example of a prepayment that is not spread evenly. The benefit arrives on one date, so the whole amount stays as an asset until the event month and is expensed then. After posting, the prepaid balance in the ledger should be $9,560, matching the schedule total. If it does not, an invoice was probably coded straight to expense or an amortization entry was missed.</p>

<h2>Prepaid expenses and cash flow</h2>
<p>Prepayments are a common reason profit and cash diverge. In the month you pay a large annual premium, cash falls by the full amount but profit falls by only one month's share. Over the rest of the year the opposite happens: profit carries an expense each month with no cash leaving.</p>
<p>On a <a href="/blog/cash-flow-statement">cash flow statement</a> prepared with the indirect method, an increase in prepaid balances during the period is subtracted from net income in operating activities, and a decrease is added back. Using the agency above, if prepaid balances rose from $6,200 at the start of the year to $9,560 at the end, the $3,360 increase reduces operating cash flow relative to profit.</p>
<p>For cash planning, put large annual payments into your forecast in the month they are due, not spread evenly. Insurance renewals, annual software plans and quarterly rent can create sharp dips in an otherwise steady month.</p>

<h2>Setting up a prepaid tracking process</h2>
<ol>
<li><strong>Set a threshold.</strong> Decide which payments go through the schedule, for example anything over $1,000 that covers more than three months. Smaller items are expensed on payment.</li>
<li><strong>Use one schedule.</strong> List each item with supplier, invoice number, amount, start date, end date, monthly amount and remaining balance.</li>
<li><strong>Code invoices correctly when they arrive.</strong> Whoever enters bills should know to post qualifying prepayments to the prepaid account, not straight to expense.</li>
<li><strong>Post monthly entries.</strong> Use recurring journals in your software, or one combined entry from the schedule.</li>
<li><strong>Reconcile monthly.</strong> The prepaid balance in the <a href="/blog/general-ledger">general ledger</a> should equal the total remaining on the schedule.</li>
<li><strong>Handle cancellations.</strong> If a contract ends early and you get a refund, credit the prepaid account for the refund and expense any non-refundable remainder.</li>
</ol>

<h3>Handling a cancelled prepayment</h3>
<p>Plans change. Suppose the consultancy cancels its $7,200 insurance policy at the end of August, after five months of cover. The prepaid balance is $7,200 - (5 x $600) = $4,200. The insurer refunds the unused premium less a $300 cancellation fee, so $3,900 comes back.</p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Business Checking</td><td>$3,900</td><td></td></tr>
<tr><td>Insurance Expense (cancellation fee)</td><td>$300</td><td></td></tr>
<tr><td>Prepaid Insurance</td><td></td><td>$4,200</td></tr>
</tbody>
</table>
<p>The asset is cleared, the fee lands in the month of cancellation, and the schedule line is closed. If the refund is still pending at month end, debit a receivable from the insurer instead of cash.</p>

<h3>Where prepayments fit in the chart of accounts</h3>
<p>Most small businesses need only one asset account for prepayments, numbered with other current assets, for example 1300 in a typical <a href="/blog/chart-of-accounts">chart of accounts</a>. The schedule provides the detail by item. Add separate accounts, such as Prepaid Insurance and Prepaid Rent, only if the balances are large or a lender asks for them. If you prepay for more than a year, a second account for the non-current portion keeps the balance sheet split simple.</p>

<h2>A note on tax treatment</h2>
<p>Book treatment and tax treatment of prepaid expenses can differ. Some tax systems let you deduct short prepayments when paid; others require you to spread them over the period of benefit. In the United States, for instance, a 12-month rule can allow some prepayments to be deducted in the year paid if the benefit does not extend too far into the future, subject to conditions. Rules vary by country and by accounting method, so check with a qualified tax adviser before claiming a large prepayment in one year.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Expensing an annual payment in full</strong>, which distorts monthly profit and margins.</li>
<li><strong>Forgetting to amortize</strong>, leaving an asset on the balance sheet long after the cover has expired.</li>
<li><strong>Treating deposits as prepayments</strong> and expensing money you expect to get back.</li>
<li><strong>Mixing methods</strong> between daily and monthly proration for similar items.</li>
<li><strong>No link to the source invoice</strong>, which makes the schedule hard to audit.</li>
</ul>
<p>Make the schedule review a fixed line in your <a href="/blog/month-end-close-checklist">month-end close checklist</a> so none of these slip through.</p>

<h2>Next step</h2>
<p>Prepayments are easier to track when every supplier invoice states the service period clearly. Do the same for your own customers: if you bill annual plans or retainers in advance, show the coverage dates in the item description so clients can set up their own schedules. Our free <a href="/invoice-generator">invoice generator</a> lets you add line items, notes, payment terms and a PO number, and you can pick a clean layout from our <a href="/invoice-templates">invoice templates</a>.</p>
`,
  },
  {
    slug: "retained-earnings",
    title: "Retained Earnings: Formula, Statement and Examples",
    description:
      "Understand retained earnings: the formula, how to prepare a statement of retained earnings, closing entries, negative balances and worked examples with numbers.",
    category: "guides",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["owners-equity", "balance-sheet-small-business", "general-ledger", "trial-balance"],
    faqs: [
      {
        q: "What are retained earnings?",
        a: "Retained earnings are the total profits a company has earned since it started, minus the dividends it has paid out to shareholders. The figure appears in the equity section of the balance sheet. It represents profit that has been kept in the business, whether that money was used to buy equipment, pay down debt, fund growth or simply build up cash. It is a cumulative balance, not a single year's profit.",
      },
      {
        q: "What is the retained earnings formula?",
        a: "Ending retained earnings equals beginning retained earnings plus net income for the period minus dividends declared. If the business made a loss, you subtract the net loss instead of adding income. For example, a company starting the year with $84,000, earning $36,500 of net income and declaring $12,000 of dividends ends the year with $108,500. The same formula works for monthly, quarterly or annual periods.",
      },
      {
        q: "Are retained earnings the same as cash?",
        a: "No. Retained earnings are an accounting measure of accumulated profit, not a pile of money. The profits may have been spent on equipment, inventory, loan repayments or receivables that customers still owe. A company can have large retained earnings and very little cash, or plenty of cash and negative retained earnings if it raised money from investors. Look at the cash flow statement and bank balance to understand liquidity.",
      },
      {
        q: "Can retained earnings be negative?",
        a: "Yes. When accumulated losses and dividends exceed accumulated profits, the balance turns negative and is often labeled an accumulated deficit. This is common for startups that are investing ahead of revenue. A deficit reduces total equity and can concern lenders, and in some jurisdictions it limits the company's ability to pay dividends legally. It does not by itself mean the business is insolvent, but it deserves attention.",
      },
      {
        q: "What is a statement of retained earnings?",
        a: "It is a short financial statement that shows how retained earnings changed during a period. It starts with the opening balance, adds net income or subtracts a net loss, subtracts dividends, adjusts for any prior period corrections and ends with the closing balance. Larger companies often present this within a broader statement of changes in equity, while small companies may show it as a separate one-page schedule.",
      },
      {
        q: "Do sole proprietors have retained earnings?",
        a: "Generally not in the corporate sense. A sole proprietorship or partnership usually tracks the owner's stake through capital accounts: profit is added to the owner's capital and money the owner takes out is recorded as drawings. Many accounting apps still display a Retained Earnings line for unincorporated businesses because of how the software closes the year, but conceptually it is part of owner's equity rather than a separate corporate balance.",
      },
      {
        q: "Do retained earnings go on the income statement?",
        a: "No. Retained earnings appear on the balance sheet, in the equity section. The income statement shows revenue, expenses and net income for one period. That net income is then carried into retained earnings when the books are closed, which is how the income statement and balance sheet link together. The statement of retained earnings shows that link explicitly.",
      },
      {
        q: "How do dividends affect retained earnings?",
        a: "Dividends reduce retained earnings when they are declared, not when they are paid. On the declaration date the company debits retained earnings (or a dividends account that is closed to retained earnings) and credits dividends payable. When the cash is paid, it debits dividends payable and credits cash. Dividends are a distribution of profit to owners, so they are never recorded as an expense on the income statement.",
      },
      {
        q: "What is a good retention ratio?",
        a: "There is no single good figure. The retention ratio, net income minus dividends divided by net income, shows how much profit a company keeps rather than distributes. Growing businesses often retain most or all profit to fund expansion, while mature, stable businesses may pay out a larger share. The right level depends on the company's growth plans, debt, cash needs and what owners expect, so compare it with your own plans rather than a benchmark.",
      },
    ],
    content: `
<p><strong>Retained earnings</strong> are the cumulative profits a company has kept since it began, after paying dividends to shareholders. The formula is simple: beginning balance plus net income minus dividends equals ending balance. The figure sits in the equity section of the balance sheet and links the income statement to the balance sheet each year.</p>
<p>This guide shows the retained earnings formula with worked numbers, how to prepare a statement of retained earnings, the closing entries that move profit into equity, and how the picture differs for sole traders and partnerships. It complements our guides to the <a href="/blog/balance-sheet-small-business">small business balance sheet</a> and the <a href="/blog/general-ledger">general ledger</a>.</p>

<h2>What the balance represents</h2>
<p>Think of the equity section as the owners' claim on the business. It has two main sources:</p>
<ul>
<li><strong>Contributed capital:</strong> money the owners put in, such as share capital.</li>
<li><strong>Earned capital:</strong> profit the business generated and did not hand back to owners. That is this account.</li>
</ul>
<p>Every year the net income from the profit and loss statement is added to the balance, and any dividends declared are taken off. Over time it tells you how much of the business's equity was built by its own operations rather than by owner investment.</p>
<p>It is not a cash balance. The profits may have gone into equipment, stock, loan repayments or invoices that customers have not paid yet. A company with $200,000 of accumulated profit and $5,000 in the bank is not unusual.</p>

<h3>How it differs from net income, revenue and cash</h3>
<table>
<thead><tr><th>Measure</th><th>What it shows</th><th>Statement</th><th>Time frame</th></tr></thead>
<tbody>
<tr><td>Revenue</td><td>Income earned from customers</td><td>Profit and loss</td><td>One period</td></tr>
<tr><td>Net income</td><td>Revenue minus all expenses</td><td>Profit and loss</td><td>One period</td></tr>
<tr><td>Accumulated profit kept</td><td>All past net income minus all dividends</td><td>Balance sheet (equity)</td><td>Since the business began</td></tr>
<tr><td>Cash</td><td>Money in the bank and on hand</td><td>Balance sheet (assets)</td><td>At one date</td></tr>
</tbody>
</table>
<p>Revenue and net income reset each year; the equity balance does not. Cash can move in a completely different direction from profit, for example when customers pay slowly or the business buys equipment. That is why owners should read the balance sheet, profit and loss and <a href="/blog/cash-flow-statement">cash flow statement</a> together rather than relying on one figure.</p>

<h2>The retained earnings formula</h2>
<p>The standard formula is:</p>
<p><strong>Ending balance = Beginning balance + Net income (or minus net loss) - Dividends declared</strong></p>
<p><strong>Worked example.</strong> Brightline Studio Ltd, a small incorporated agency, has these figures for the year:</p>
<table>
<thead><tr><th>Item</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Opening balance (January 1)</td><td>$84,000</td></tr>
<tr><td>Revenue</td><td>$250,000</td></tr>
<tr><td>Total expenses including tax</td><td>$213,500</td></tr>
<tr><td>Net income ($250,000 - $213,500)</td><td>$36,500</td></tr>
<tr><td>Dividends declared</td><td>$12,000</td></tr>
<tr><td>Closing balance ($84,000 + $36,500 - $12,000)</td><td>$108,500</td></tr>
</tbody>
</table>
<p>If Brightline had instead made a $20,000 loss and still paid $12,000 of dividends, the closing figure would be $84,000 - $20,000 - $12,000 = $52,000. Losses and distributions both reduce the balance.</p>
<p>You can also work backwards. If you know the opening and closing balances and the dividends, net income is the difference: closing minus opening plus dividends. That is a handy check when the profit and loss and balance sheet come from different sources.</p>

<h3>Five-year example: how the balance builds</h3>
<p>A single year shows the mechanics. Several years show the story. Here is Brightline's history from incorporation, before the prior period adjustment shown in the statement below:</p>
<table>
<thead><tr><th>Year</th><th>Opening balance</th><th>Net income (loss)</th><th>Dividends</th><th>Closing balance</th></tr></thead>
<tbody>
<tr><td>Year 1</td><td>$0</td><td>($18,000)</td><td>$0</td><td>($18,000)</td></tr>
<tr><td>Year 2</td><td>($18,000)</td><td>$22,000</td><td>$0</td><td>$4,000</td></tr>
<tr><td>Year 3</td><td>$4,000</td><td>$41,000</td><td>$6,000</td><td>$39,000</td></tr>
<tr><td>Year 4</td><td>$39,000</td><td>$55,000</td><td>$10,000</td><td>$84,000</td></tr>
<tr><td>Year 5</td><td>$84,000</td><td>$36,500</td><td>$12,000</td><td>$108,500</td></tr>
</tbody>
</table>
<p>Year 1 opened with a deficit, which is common for a new business buying equipment and building a client list. No dividend was paid until the deficit had been cleared and profits were steady. Year 5 profit fell, but the owners still took a larger dividend, so the retention ratio dropped. None of these figures is wrong, but laid out like this they invite good questions: why did profit fall, and is the dividend policy still right?</p>

<h2>Statement of retained earnings</h2>
<p>The statement of retained earnings is a short schedule that shows the movement in the balance during the period. Larger companies usually present it within a statement of changes in equity; small companies often prepare it as a one-page reconciliation. Here is Brightline's version:</p>
<table>
<thead><tr><th>Brightline Studio Ltd: statement for the year ended December 31</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Balance at January 1</td><td>$84,000</td></tr>
<tr><td>Prior period adjustment (correction of prior year error, net of tax)</td><td>($1,500)</td></tr>
<tr><td>Adjusted opening balance</td><td>$82,500</td></tr>
<tr><td>Add: net income for the year</td><td>$36,500</td></tr>
<tr><td>Less: dividends declared</td><td>($12,000)</td></tr>
<tr><td>Balance at December 31</td><td>$107,000</td></tr>
</tbody>
</table>
<p>The prior period adjustment line appears only when a material error in an earlier year's accounts is corrected. Here, the company discovered it had understated last year's expenses by $1,500 after tax, so the opening balance is restated. Routine changes in estimates, such as an accrual that turned out slightly higher than expected, go through the current year's profit and loss instead.</p>

<h2>How net income gets there: closing entries</h2>
<p>Revenue and expense accounts are temporary. At year end they are closed, their balances are transferred to equity, and they start the new year at zero. Using Brightline's figures, the closing entries are:</p>
<table>
<thead><tr><th>Step</th><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>1. Close revenue</td><td>Revenue</td><td>$250,000</td><td></td></tr>
<tr><td></td><td>Income Summary</td><td></td><td>$250,000</td></tr>
<tr><td>2. Close expenses</td><td>Income Summary</td><td>$213,500</td><td></td></tr>
<tr><td></td><td>Expense accounts (total)</td><td></td><td>$213,500</td></tr>
<tr><td>3. Close income summary</td><td>Income Summary</td><td>$36,500</td><td></td></tr>
<tr><td></td><td>Retained Earnings</td><td></td><td>$36,500</td></tr>
<tr><td>4. Close dividends</td><td>Retained Earnings</td><td>$12,000</td><td></td></tr>
<tr><td></td><td>Dividends Declared</td><td></td><td>$12,000</td></tr>
</tbody>
</table>
<p>Most accounting software does this automatically when you roll into a new financial year. You will not see the individual entries, but the effect is the same: the profit and loss starts at zero and the equity balance carries the year's result. This is also why a post-closing <a href="/blog/trial-balance">trial balance</a> contains only balance sheet accounts.</p>
<p>The dividend itself is recorded when declared, with a debit to Dividends Declared (or directly to the equity account) and a credit to Dividends Payable, then cleared to cash when paid. Dividends are never an expense.</p>

<h3>Where it appears on the balance sheet</h3>
<table>
<thead><tr><th>Equity section (Brightline, December 31)</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Share capital</td><td>$10,000</td></tr>
<tr><td>Retained earnings</td><td>$107,000</td></tr>
<tr><td>Total equity</td><td>$117,000</td></tr>
</tbody>
</table>
<p>Total equity must equal total assets minus total liabilities. If the balance sheet does not balance after year end, an incorrect roll-forward of this account is one of the first things to check.</p>

<h2>Negative balances: the accumulated deficit</h2>
<p>When accumulated losses plus dividends exceed accumulated profits, the balance turns negative and is usually labeled an accumulated deficit. Startups often run deficits for years while they invest ahead of revenue; their equity is propped up by share capital raised from investors.</p>
<p>A deficit matters for three reasons:</p>
<ol>
<li><strong>Dividends.</strong> Company law in many countries restricts dividends to available distributable profits. Paying dividends while in deficit can be unlawful. Check with a qualified adviser before declaring any dividend.</li>
<li><strong>Lending.</strong> Banks look at equity and accumulated losses when assessing credit. Some loan agreements include minimum equity covenants.</li>
<li><strong>Trend.</strong> A shrinking deficit shows the business is now profitable; a growing one shows it is still burning through invested capital.</li>
</ol>

<h2>Sole traders, partnerships and LLCs</h2>
<p>The concept is the same everywhere, but the account names change by business structure.</p>
<table>
<thead><tr><th>Structure</th><th>Where profit accumulates</th><th>Owner withdrawals</th></tr></thead>
<tbody>
<tr><td>Sole proprietor</td><td>Owner's capital account</td><td>Owner's drawings</td></tr>
<tr><td>Partnership</td><td>Each partner's capital account, per the agreement</td><td>Partner drawings</td></tr>
<tr><td>Limited company or corporation</td><td>Retained earnings</td><td>Dividends (plus salary through payroll)</td></tr>
<tr><td>LLC (United States)</td><td>Depends on tax classification; often member capital accounts</td><td>Member distributions</td></tr>
</tbody>
</table>
<p><strong>Sole trader example.</strong> A freelance photographer starts the year with $20,000 in her capital account, makes a net profit of $45,000 and takes $38,000 out for personal living costs. Her capital account rolls forward like this:</p>
<table>
<thead><tr><th>Owner's capital</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Opening capital</td><td>$20,000</td></tr>
<tr><td>Add: net profit for the year</td><td>$45,000</td></tr>
<tr><td>Less: drawings</td><td>($38,000)</td></tr>
<tr><td>Closing capital</td><td>$27,000</td></tr>
</tbody>
</table>
<p>The arithmetic is identical to the corporate formula, with drawings in place of dividends. The difference is legal and tax-related: drawings are not a separate taxable payment in the way a dividend can be, because a sole trader is generally taxed on the business profit itself. Ask a qualified adviser how this works where you are registered.</p>
<p>Many accounting apps still show a line labeled with the corporate term for unincorporated businesses, because the software closes each year's profit to an equity account by default. If you are a sole trader, treat that line as part of your owner's equity and ask your accountant whether it should be closed to capital at year end.</p>

<h2>Accounting choices that change the figure</h2>
<p>Because the balance accumulates every profit and loss result, anything that moves profit between years also moves it. The main levers are timing adjustments:</p>
<ul>
<li><strong>Accruals.</strong> Recording costs incurred but not yet billed lowers this year's profit. See our guide to <a href="/blog/accrued-expenses">accrued expenses</a>.</li>
<li><strong>Prepayments.</strong> Spreading annual payments over the months they cover shifts cost into later periods. See <a href="/blog/prepaid-expenses">prepaid expenses</a>.</li>
<li><strong>Depreciation.</strong> The method and useful life chosen for equipment spread its cost over several years.</li>
<li><strong>Revenue recognition.</strong> Recording income when it is earned rather than when it is invoiced or paid.</li>
</ul>
<p>Over the life of the business these choices even out, but in any single year they can make a noticeable difference. Every entry behind them should be documented, as described in our <a href="/blog/journal-entries">journal entries</a> guide.</p>

<h2>Retention ratio: how much profit you keep</h2>
<p>The retention ratio shows what share of the year's profit stayed in the business:</p>
<p><strong>Retention ratio = (Net income - Dividends) / Net income</strong></p>
<p>For Brightline: ($36,500 - $12,000) / $36,500 = $24,500 / $36,500 = about 67.1%. The other 32.9% was paid out, which is the dividend payout ratio. A business planning to hire, buy equipment or build a cash buffer will usually keep a higher share. There is no universally correct level; it depends on your growth plans, debts and what owners need.</p>
<p>A useful habit is to decide the dividend after looking at three numbers together: this year's profit, the cash the business needs over the next six to twelve months, and the accumulated profit available. A company can be profitable on paper and still short of cash if customers pay slowly, so a payout that looks affordable from the profit and loss may not be from the bank balance.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Treating the balance as available cash.</strong> Check the bank and the cash flow statement before planning a dividend.</li>
<li><strong>Posting day-to-day transactions directly to equity.</strong> Only closing entries, dividends and genuine prior period corrections should touch the account.</li>
<li><strong>Recording dividends as an expense.</strong> They are distributions of profit, not a cost of earning it.</li>
<li><strong>Editing closed years.</strong> Changing a transaction in a closed year silently changes the opening equity of the current year. Lock prior periods in your software.</li>
<li><strong>Ignoring a growing deficit.</strong> It affects dividend capacity and borrowing.</li>
</ul>

<h2>Next step</h2>
<p>Profits, and therefore the equity you build, depend on billing promptly and collecting what you are owed. Clean, consistent invoices make revenue easier to record and reconcile. Create professional invoices in minutes with our free <a href="/invoice-generator">invoice generator</a>, and explore more guides on <a href="/blog/cash-flow-statement">the cash flow statement</a> and <a href="/blog/category/business-finance">business finance</a>.</p>
`,
  },
  {
    slug: "accounts-payable-process",
    title: "Accounts Payable Process: Invoice to Payment Steps",
    description:
      "The accounts payable process explained step by step, from supplier invoice to payment, with AP workflow controls, journal entries and early-payment discounts.",
    category: "guides",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: [
      "invoice-processing",
      "vendor-statement-reconciliation",
      "invoice-approval-workflow",
      "three-way-match",
      "accounts-payable-kpis",
    ],
    faqs: [
      {
        q: "What are the steps in the accounts payable process?",
        a: "A typical process has eight steps: set up and verify the supplier, raise a purchase order where required, receive the goods or services, receive and log the supplier invoice, match the invoice to the order and receipt, approve it, record it in the books, and schedule and make the payment. After payment, the business reconciles supplier statements and bank records. Small businesses may combine some steps, but the controls behind each one still matter.",
      },
      {
        q: "What is the difference between accounts payable and accounts receivable?",
        a: "Accounts payable is money your business owes to suppliers for goods and services it has received, so it is a liability. Accounts receivable is money customers owe your business for goods and services you have delivered, so it is an asset. The same invoice is a payable for the buyer and a receivable for the seller. Most businesses manage both, with different processes and controls for each.",
      },
      {
        q: "What is the journal entry when a supplier invoice is recorded?",
        a: "When you record an approved supplier invoice, debit the relevant expense, inventory or asset account and any recoverable input tax, and credit Accounts Payable for the invoice total. When you pay the invoice, debit Accounts Payable and credit Cash. If you take an early-payment discount, credit a purchase discounts account (or reduce the cost of the goods) for the discount amount, so the payable is fully cleared.",
      },
      {
        q: "How can a small business improve its accounts payable process?",
        a: "Start with a few simple controls. Keep all supplier invoices in one inbox or folder. Require approval before anything is paid. Match invoices to orders or delivery notes for physical goods. Pay in scheduled batches, such as once a week, rather than ad hoc. Verify any change to supplier bank details by phoning a known contact. Finally, reconcile supplier statements monthly so you catch missing or duplicate invoices early.",
      },
      {
        q: "What does 2/10 net 30 mean?",
        a: "It is an early-payment discount term. The buyer can take a 2% discount if they pay within 10 days of the invoice date; otherwise the full amount is due within 30 days. Skipping the discount means paying 2% more to keep the money for 20 extra days, which works out to an annualized cost of roughly 37%. If you have the cash, taking such discounts is usually worthwhile.",
      },
      {
        q: "How do you prevent duplicate payments in accounts payable?",
        a: "Check every new invoice against existing records by supplier, invoice number, date and amount before entering it. Most accounting software warns you about a repeated invoice number from the same supplier. Pay only from original invoices, not statements or reminders. Mark invoices as paid as soon as payment is sent, and reconcile supplier statements monthly. Watch for near duplicates, such as the same invoice number with a letter added.",
      },
      {
        q: "Who should be involved in the accounts payable process?",
        a: "Ideally, different people handle different steps. Someone orders, someone confirms delivery, someone approves the invoice, someone records it and someone releases payment. In a very small business the owner may do several of these, which is fine as long as at least one independent check exists, such as the owner approving every payment run prepared by a bookkeeper. The goal is that no single person can create and pay a fake invoice.",
      },
      {
        q: "What is a three-way match?",
        a: "A three-way match compares the purchase order, the goods received note and the supplier invoice before an invoice is approved for payment. Quantities, prices and terms on all three should agree within any tolerance you set. If the supplier billed for 200 units but only 190 arrived, the match fails and the difference is queried before payment. It is a key control for businesses that buy physical goods.",
      },
      {
        q: "How often should accounts payable be paid?",
        a: "Most businesses run payments on a fixed schedule, often weekly or every two weeks, and pay each invoice in the run closest to, but not after, its due date. A schedule makes cash flow predictable, reduces the time spent on payments and gives approvers a regular deadline. Urgent payments can still be made outside the run, but they should go through the same approval checks.",
      },
    ],
    content: `
<p>The <strong>accounts payable process</strong> is the sequence of steps a business follows to receive, check, approve, record and pay supplier invoices. A typical flow runs: set up the supplier, order, receive the goods, receive the invoice, match it, approve it, record it, then schedule and make payment. Done well, it ensures you pay only for what you ordered and received, on time, and once.</p>
<p>This guide walks through each step, shows the journal entries with a worked example from invoice to payment, and explains the controls that stop errors and fraud. For the receivables side of the same transactions, see our guide to <a href="/blog/accounts-payable-vs-accounts-receivable">accounts payable vs accounts receivable</a>.</p>

<h2>The AP workflow steps at a glance</h2>
<table>
<thead><tr><th>Step</th><th>What happens</th><th>Key control</th></tr></thead>
<tbody>
<tr><td>1. Supplier setup</td><td>Collect legal name, address, tax ID and bank details</td><td>Verify bank details independently</td></tr>
<tr><td>2. Purchase order</td><td>Agree what is being bought, at what price</td><td>Spending authority limits</td></tr>
<tr><td>3. Receipt</td><td>Confirm goods or services were delivered</td><td>Delivery note or sign-off by the requester</td></tr>
<tr><td>4. Invoice capture</td><td>Log the supplier invoice in one place</td><td>Single invoice inbox, duplicate check</td></tr>
<tr><td>5. Matching</td><td>Compare invoice to order and receipt</td><td>Two-way or three-way match with tolerances</td></tr>
<tr><td>6. Approval</td><td>Budget holder confirms the invoice is valid</td><td>Approval matrix by amount</td></tr>
<tr><td>7. Recording</td><td>Post the invoice to Accounts Payable</td><td>Correct coding and tax treatment</td></tr>
<tr><td>8. Payment</td><td>Pay in a scheduled run by the due date</td><td>Separate approval to release funds</td></tr>
<tr><td>9. Reconciliation</td><td>Match payments to bank and supplier statements</td><td>Monthly statement reconciliation</td></tr>
</tbody>
</table>

<h2>Step by step: how the accounts payable process works</h2>
<h3>1. Set up the supplier</h3>
<p>Before the first payment, create a supplier record with the legal name, address, tax registration number where relevant, payment terms and bank details. Get bank details in writing on the supplier's letterhead or invoice, and confirm them by phone using a number you already hold, not one in the same email. Changes to bank details later should go through the same verification. Fraudsters frequently impersonate suppliers to redirect payments.</p>

<h3>2. Raise a purchase order</h3>
<p>For goods, larger services or anything above a set amount, raise a purchase order (PO) showing items, quantities, prices and delivery terms. The PO number gives both parties a reference. Smaller recurring costs, such as utilities or software subscriptions, usually skip this step.</p>

<h3>3. Receive the goods or services</h3>
<p>Whoever receives the delivery checks it against the PO and records what actually arrived, including shortages and damage. For services, the person who requested the work confirms it was completed.</p>

<h3>4. Capture the invoice</h3>
<p>Ask suppliers to send invoices to one dedicated email address or postal address, not to individual staff. Log each invoice on arrival with the supplier, invoice number, date, amount, due date and PO number. This is where duplicate checks belong.</p>

<h3>5. Match the invoice</h3>
<p>Compare the invoice against the PO (two-way match) or against the PO and the receipt (three-way match). Prices, quantities, tax and terms should agree within tolerances you set. Our <a href="/blog/three-way-match">three-way match guide</a> covers tolerance rules and common exceptions.</p>

<h3>6. Approve</h3>
<p>The budget holder confirms the invoice is valid and correctly coded. An approval matrix sets who can approve what, for example team leads up to $2,000 and the owner above that. Our <a href="/blog/invoice-approval-workflow">invoice approval workflow</a> guide includes a template matrix.</p>

<h3>7. Record the liability</h3>
<p>Post the approved invoice to Accounts Payable with the correct expense, inventory or asset account. If the invoice relates to a future period, it may belong in prepayments; if the goods arrived before the invoice at month end, you may already hold an accrual to clear.</p>

<h3>8. Schedule and make the payment</h3>
<p>Pay in scheduled runs, such as weekly, picking each invoice up in the last run before its due date or its early-payment discount deadline. A second person, or the owner, releases the payment run after reviewing the list.</p>

<h3>9. Reconcile</h3>
<p>Reconcile supplier statements monthly to catch missing invoices, unapplied credits and duplicates, and reconcile the bank account so every payment is matched. The total of open items in the payables sub-ledger should equal the Accounts Payable balance in the general ledger.</p>

<h2>Worked example: invoice to payment with journal entries</h2>
<p>A small furniture maker orders 200 hardwood panels at $12 each from a timber supplier: PO total $2,400. Terms are 2/10 net 30 on the goods, with delivery charged separately. Sales tax is not charged because the panels are bought for resale in this example.</p>
<p><strong>Receipt:</strong> 190 panels arrive; 10 are back-ordered.</p>
<p><strong>Invoice:</strong> The supplier invoices 200 panels ($2,400) plus $60 delivery, total $2,460.</p>
<p><strong>Match:</strong> The three-way match fails on quantity. The AP clerk contacts the supplier, who agrees to bill the 10 missing panels when they ship and issues a credit note for $120. The approved amount is now 190 x $12 = $2,280 plus $60 delivery = $2,340.</p>
<p><strong>Recording the approved invoice (net of the credit note):</strong></p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Inventory, Raw Materials</td><td>$2,340.00</td><td></td></tr>
<tr><td>Accounts Payable, Timber Supplier</td><td></td><td>$2,340.00</td></tr>
</tbody>
</table>
<p>Delivery is included in the inventory cost here because freight to bring materials in is usually treated as part of their cost; your accountant may prefer a separate freight-in account.</p>
<p><strong>Payment within 10 days, taking the discount on the goods only:</strong> 2% x $2,280 = $45.60. Cash paid is $2,340 - $45.60 = $2,294.40.</p>
<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Accounts Payable, Timber Supplier</td><td>$2,340.00</td><td></td></tr>
<tr><td>Business Checking</td><td></td><td>$2,294.40</td></tr>
<tr><td>Purchase Discounts (or Inventory)</td><td></td><td>$45.60</td></tr>
</tbody>
</table>
<p>The payable is cleared in full. Whether the discount reduces inventory cost or goes to a separate purchase discounts account depends on your accounting policy. The basic debit and credit logic is covered in our guide to <a href="/blog/journal-entries">journal entries</a>.</p>

<h2>Early-payment discounts: are they worth taking?</h2>
<p>With terms of 2/10 net 30, skipping the discount means paying 2% more to hold the money for 20 extra days. Annualized:</p>
<p><strong>(2 / 98) x (365 / 20) = about 37.2% a year</strong></p>
<table>
<thead><tr><th>Terms</th><th>Extra days of credit</th><th>Approximate annualized cost of skipping</th></tr></thead>
<tbody>
<tr><td>1/10 net 30</td><td>20</td><td>18.4%</td></tr>
<tr><td>2/10 net 30</td><td>20</td><td>37.2%</td></tr>
<tr><td>2/10 net 60</td><td>50</td><td>14.9%</td></tr>
</tbody>
</table>
<p>If your borrowing cost or the return on spare cash is lower than these figures, taking the discount usually saves money, provided you can do so without squeezing cash needed elsewhere. Plan for it in your <a href="/blog/cash-flow-forecast">cash flow forecast</a>.</p>
<p>The opposite risk is paying late. Missing due dates can mean late fees written into the supplier's terms, a damaged relationship and, in some countries, a statutory right for the supplier to charge interest on late commercial payments (the UK has such a law, for example). A reliable payment schedule protects your credit standing with suppliers as much as it protects your cash.</p>

<h2>Controls that protect the accounts payable process</h2>
<ul>
<li><strong>Segregation of duties.</strong> The person who sets up suppliers should not be the person who releases payments. In a tiny business, the owner approving every payment run is often enough.</li>
<li><strong>Bank detail verification.</strong> Call back on a known number for every new supplier and every change request.</li>
<li><strong>Duplicate detection.</strong> Check supplier, invoice number, date and amount; be wary of reminders or statements being paid as if they were invoices.</li>
<li><strong>Pay from invoices only.</strong> Never pay from a statement or an email that just names an amount.</li>
<li><strong>Locked supplier master data.</strong> Limit who can edit supplier records and keep a log of changes.</li>
<li><strong>Month-end cut-off.</strong> Accrue for goods and services received but not yet invoiced so the period's costs are complete.</li>
</ul>

<h2>Who does what in the accounts payable process</h2>
<p>Segregation of duties is easier to apply when roles are written down. Here is a simple responsibility map for a business with an owner, a bookkeeper and a couple of team members who buy things:</p>
<table>
<thead><tr><th>Task</th><th>Team member</th><th>Bookkeeper</th><th>Owner</th></tr></thead>
<tbody>
<tr><td>Request purchase and raise PO</td><td>Does</td><td>Checks PO number sequence</td><td>Approves above limit</td></tr>
<tr><td>Confirm delivery</td><td>Does</td><td></td><td></td></tr>
<tr><td>Log and match invoice</td><td></td><td>Does</td><td></td></tr>
<tr><td>Approve invoice</td><td>Confirms work done</td><td></td><td>Approves above limit</td></tr>
<tr><td>Add or change supplier bank details</td><td></td><td>Prepares</td><td>Verifies by phone and approves</td></tr>
<tr><td>Prepare payment run</td><td></td><td>Does</td><td></td></tr>
<tr><td>Release payment</td><td></td><td></td><td>Does</td></tr>
<tr><td>Reconcile statements and bank</td><td></td><td>Does</td><td>Reviews monthly</td></tr>
</tbody>
</table>
<p>The point is that no single person can both create a supplier and pay it, or both approve an invoice and release the money. If you work alone, you cannot split duties, but you can still slow down: never pay a new supplier or changed bank details on the same day you receive the request.</p>

<h2>Month-end close for payables</h2>
<p>At month end, the accounts payable process feeds directly into your financial statements, so a short routine keeps the numbers complete:</p>
<ol>
<li><strong>Log every invoice received</strong> up to the last day of the month, even if it is not yet approved.</li>
<li><strong>Accrue for goods and services received but not yet invoiced.</strong> Our guide to <a href="/blog/accrued-expenses">accrued expenses</a> shows the entries.</li>
<li><strong>Move advance payments to prepayments</strong> where an invoice covers future months; see <a href="/blog/prepaid-expenses">prepaid expenses</a>.</li>
<li><strong>Run the aged payables report</strong> and compare its total with the Accounts Payable balance in the ledger.</li>
<li><strong>Reconcile key supplier statements</strong> and chase missing credit notes.</li>
<li><strong>Reconcile the bank</strong> so every supplier payment is matched; our <a href="/blog/bank-reconciliation">bank reconciliation</a> guide explains how.</li>
</ol>
<p>These steps slot into a wider <a href="/blog/month-end-close-checklist">month-end close checklist</a>. A tidy payables close also gives you an accurate view of what cash is committed for the next few weeks.</p>

<h2>Small business vs larger business AP</h2>
<table>
<thead><tr><th>Area</th><th>Small business (owner plus bookkeeper)</th><th>Larger business</th></tr></thead>
<tbody>
<tr><td>Purchase orders</td><td>Only for stock and large purchases</td><td>Required above a low threshold</td></tr>
<tr><td>Matching</td><td>Two-way, or eyeballing delivery notes</td><td>Systematic three-way matching with tolerances</td></tr>
<tr><td>Approval</td><td>Owner approves the weekly payment list</td><td>Multi-level approval matrix in software</td></tr>
<tr><td>Payment</td><td>Online banking batch, owner releases</td><td>Payment files with dual authorization</td></tr>
<tr><td>Reporting</td><td>Aged payables report monthly</td><td>KPI dashboard and supplier scorecards</td></tr>
</tbody>
</table>
<p>Whatever the size, the accounts payable process has the same purpose: pay the right amount, to the right supplier, at the right time. As volume grows, it is worth measuring how well it does that. Our <a href="/blog/accounts-payable-kpis">accounts payable KPIs</a> guide explains metrics such as cost per invoice, days payable outstanding and exception rate.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Invoices scattered across inboxes</strong>, so some are paid late and some are never recorded.</li>
<li><strong>Paying on receipt</strong> instead of on the due date, which gives away free credit.</li>
<li><strong>Missing early-payment discounts</strong> because approval takes longer than the discount window.</li>
<li><strong>Changing supplier bank details on email instruction alone.</strong></li>
<li><strong>Not reconciling supplier statements</strong>, which hides missing credits and duplicate payments.</li>
</ul>

<h2>For suppliers: invoices that move through AP fast</h2>
<p>If you are the one sending invoices, the customer's accounts payable process decides when you get paid. Quote their PO number, use a unique invoice number, match the PO prices and quantities exactly, state your payment terms and bank details, and send it to their invoice address rather than your contact. Our free <a href="/invoice-generator">invoice generator</a> includes a PO number field, notes and terms, and lets you download a clean PDF you can send to the customer's accounts team.</p>
`,
  },
];
