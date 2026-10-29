import type { PostDraft } from "../blog";

export const COMPARISONS_2026_E_POSTS: PostDraft[] = [
  {
    slug: "income-statement-vs-balance-sheet",
    title: "Income Statement vs Balance Sheet: Key Differences Explained",
    description:
      "Income statement vs balance sheet: what each report shows, how they connect through equity, and a worked small-business example where every figure ties out.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "profit-and-loss-statement",
      "balance-sheet-small-business",
      "cash-flow-statement",
      "retained-earnings",
    ],
    faqs: [
      {
        q: "What is the main difference between an income statement and a balance sheet?",
        a: 'The income statement measures performance over a period, such as a month or a year, by showing revenue, expenses and net profit or loss. The balance sheet shows financial position on one date by listing assets, liabilities and equity. One answers the question "did we make money?" and the other answers "what do we own and owe right now?" Both are needed for a complete picture of a business.',
      },
      {
        q: "Is a profit and loss statement the same as an income statement?",
        a: "Yes. Profit and loss statement, P&L, income statement and statement of operations are different names for the same report. Small businesses and accountants in the UK often say P&L, while US public companies tend to say income statement or statement of operations. The structure is the same: revenue at the top, costs and expenses below it, and net profit or loss at the bottom line.",
      },
      {
        q: "How are the income statement and balance sheet connected?",
        a: "Net income from the income statement flows into the equity section of the balance sheet. For a company, profit not paid out as dividends is added to retained earnings. For a sole proprietor, profit is added to the owner's capital account and draws are subtracted. That link is why accountants usually prepare the income statement first and the balance sheet second.",
      },
      {
        q: "Which is more important for a small business, the income statement or balance sheet?",
        a: "Neither is more important on its own. The income statement tells you whether your pricing and costs produce a profit. The balance sheet tells you whether you can pay your bills, how much customers owe you and how much debt you carry. A profitable business can still run out of cash, which only the balance sheet and cash flow statement reveal. Review both every month.",
      },
      {
        q: "Do unpaid invoices appear on the income statement or balance sheet?",
        a: "Under accrual accounting they appear on both. When you issue an invoice, the sale is recorded as revenue on the income statement, and the unpaid amount sits on the balance sheet as accounts receivable until the customer pays. Under cash accounting, the sale only appears on the income statement when the money arrives, and there is no receivable on the balance sheet.",
      },
      {
        q: "Does the balance sheet show profit?",
        a: "Not directly. The balance sheet does not list revenue or expenses. Profit shows up indirectly as an increase in equity, through retained earnings for a company or the owner's capital account for a sole proprietor. If equity rose by $22,000 during the year and the owner put in or took out nothing, the business earned roughly $22,000 of profit in that period.",
      },
      {
        q: "Which statement do banks and lenders look at?",
        a: "Lenders usually ask for both, plus a cash flow statement and tax returns. The income statement shows whether the business earns enough profit to cover loan repayments. The balance sheet shows existing debt, how much cash and receivables are available, and how much equity the owner has at stake. Weak equity or high existing debt can lead to a refusal even when profit looks healthy.",
      },
      {
        q: "How often should a small business prepare these statements?",
        a: "Monthly is a good habit for most small businesses, with a full-year version for tax filing. Monthly income statements help you spot falling margins or rising costs early. A monthly balance sheet shows whether receivables are piling up or debt is growing. Most accounting software produces both automatically if your invoices, bills and bank transactions are recorded consistently.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the income statement vs balance sheet comparison, the income statement shows revenue, expenses and net profit over a period of time, while the balance sheet shows assets, liabilities and equity on a single date. The two are linked: net profit from the income statement increases equity on the balance sheet, which is how both reports stay in agreement.</p>

<p>If you run a small business or freelance, you will meet the income statement vs balance sheet question as soon as you apply for a loan, talk to an accountant or try to understand why you are profitable but short of cash. This guide explains what each statement contains, how they connect, which questions each one answers, and walks through a worked example where the numbers tie out to the dollar. Every figure on both reports starts with the invoices you send, so accurate billing from a tool like our <a href="/invoice-generator">free invoice generator</a> is the foundation of reliable financial statements.</p>

<p>We have separate deep dives on building each report: see our <a href="/blog/profit-and-loss-statement">profit and loss statement template</a> and our <a href="/blog/balance-sheet-small-business">small business balance sheet example</a>. This article focuses on the comparison and the link between them.</p>

<h2>Income Statement vs Balance Sheet at a Glance</h2>

<p>The fastest way to understand the difference is to compare them side by side. The US Securities and Exchange Commission's <a href="https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements" target="_blank" rel="noopener noreferrer">Beginners' Guide to Financial Statements</a> describes the balance sheet as a snapshot and the income statement as a report of revenue earned over a specific time period. The table below expands on that.</p>

<table>
<thead>
<tr><th>Feature</th><th>Income statement (P&amp;L)</th><th>Balance sheet</th></tr>
</thead>
<tbody>
<tr><td>Time frame</td><td>A period: month, quarter or year</td><td>A single date, such as 31 December</td></tr>
<tr><td>Core question</td><td>Did the business make a profit?</td><td>What does the business own and owe?</td></tr>
<tr><td>Main sections</td><td>Revenue, cost of sales, operating expenses, net income</td><td>Assets, liabilities, equity</td></tr>
<tr><td>Underlying equation</td><td>Revenue minus expenses equals net income</td><td>Assets equal liabilities plus equity</td></tr>
<tr><td>Resets each period?</td><td>Yes, starts from zero each new period</td><td>No, balances carry forward</td></tr>
<tr><td>Where invoices appear</td><td>As revenue when earned</td><td>As accounts receivable until paid</td></tr>
<tr><td>Main users</td><td>Owners, investors, tax authorities</td><td>Lenders, investors, owners checking liquidity</td></tr>
<tr><td>Typical red flag</td><td>Shrinking gross margin, rising overheads</td><td>Low cash, growing receivables, heavy debt</td></tr>
</tbody>
</table>

<h2>What the Income Statement Shows</h2>

<p>The income statement, also called the profit and loss statement, measures performance across a period. It always reads top to bottom, from sales down to the bottom line.</p>

<h3>Typical income statement structure</h3>

<ul>
<li><strong>Revenue:</strong> sales of goods and services invoiced or received during the period.</li>
<li><strong>Cost of goods sold or direct costs:</strong> materials, stock and subcontractor costs tied directly to sales.</li>
<li><strong>Gross profit:</strong> revenue minus direct costs. Our guide on <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a> explains why this middle line matters.</li>
<li><strong>Operating expenses:</strong> rent, software, marketing, insurance, depreciation and other overheads. See our breakdown of <a href="/blog/operating-expenses">operating expenses</a>.</li>
<li><strong>Operating profit:</strong> gross profit minus operating expenses.</li>
<li><strong>Interest and taxes:</strong> finance costs and, for companies, corporate income tax.</li>
<li><strong>Net income:</strong> what is left. This is the figure that flows to the balance sheet.</li>
</ul>

<p>Because the income statement covers a period, it resets every month or year. January's revenue does not carry into February's report.</p>

<h2>What the Balance Sheet Shows</h2>

<p>The balance sheet lists everything the business owns and owes on one date. It always satisfies the accounting equation: assets equal liabilities plus equity.</p>

<h3>Typical balance sheet structure</h3>

<ul>
<li><strong>Current assets:</strong> cash, <a href="/blog/accounts-receivable-guide">accounts receivable</a>, inventory and prepaid expenses.</li>
<li><strong>Non-current assets:</strong> equipment, vehicles and property, shown net of depreciation.</li>
<li><strong>Current liabilities:</strong> supplier bills, credit cards, taxes owed, accrued expenses and the portion of loans due within a year.</li>
<li><strong>Long-term liabilities:</strong> loans and leases due after more than a year.</li>
<li><strong>Equity:</strong> what the owners have put in plus profits kept in the business. For companies this includes <a href="/blog/retained-earnings">retained earnings</a>; for sole proprietors it is the owner's capital account, covered in our guide to <a href="/blog/owners-equity">owner's equity</a>.</li>
</ul>

<p>Balance sheet figures carry forward. The cash at the end of December is the cash at the start of January.</p>

<h2>How the Two Statements Connect</h2>

<p>The income statement and balance sheet are not separate worlds. Every transaction you record affects at least two accounts, which is the principle behind double-entry bookkeeping and the <a href="/blog/accounting-equation">accounting equation</a>. Three links matter most:</p>

<ol>
<li><strong>Net income moves into equity.</strong> At the end of each period, net income is added to retained earnings or the owner's capital account. A net loss reduces it.</li>
<li><strong>Revenue and receivables move together.</strong> Issuing an invoice increases revenue on the income statement and accounts receivable on the balance sheet at the same time.</li>
<li><strong>Depreciation links assets and expenses.</strong> When equipment is depreciated, the expense appears on the income statement and the asset's carrying value falls on the balance sheet by the same amount.</li>
</ol>

<p>The third report, the <a href="/blog/cash-flow-statement">cash flow statement</a>, explains how net income turned (or did not turn) into cash. Together the three reports form a complete set of financial statements.</p>

<h2>Worked Example: A Design Studio's Year</h2>

<p>Here is a simple example for a sole-proprietor design studio for the year ending 31 December 2026. The numbers are illustrative but every total adds up, and the two statements tie together through equity.</p>

<h3>Income statement for the year ended 31 December 2026</h3>

<table>
<thead>
<tr><th>Line</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Revenue (client invoices)</td><td>$120,000</td></tr>
<tr><td>Subcontractor costs</td><td>($30,000)</td></tr>
<tr><td><strong>Gross profit</strong></td><td><strong>$90,000</strong></td></tr>
<tr><td>Rent</td><td>($12,000)</td></tr>
<tr><td>Software subscriptions</td><td>($6,000)</td></tr>
<tr><td>Marketing</td><td>($4,000)</td></tr>
<tr><td>Insurance</td><td>($3,000)</td></tr>
<tr><td>Depreciation on equipment</td><td>($2,000)</td></tr>
<tr><td><strong>Operating profit</strong></td><td><strong>$63,000</strong></td></tr>
<tr><td>Loan interest</td><td>($1,000)</td></tr>
<tr><td><strong>Net income</strong></td><td><strong>$62,000</strong></td></tr>
</tbody>
</table>

<p>Check: operating expenses total $12,000 + $6,000 + $4,000 + $3,000 + $2,000 = $27,000, and $90,000 minus $27,000 is $63,000.</p>

<h3>Balance sheet at 31 December 2026</h3>

<table>
<thead>
<tr><th>Item</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Cash</td><td>$28,000</td></tr>
<tr><td>Accounts receivable (unpaid invoices)</td><td>$15,000</td></tr>
<tr><td>Equipment ($10,000 cost less $2,000 depreciation)</td><td>$8,000</td></tr>
<tr><td><strong>Total assets</strong></td><td><strong>$51,000</strong></td></tr>
<tr><td>Accounts payable</td><td>$3,000</td></tr>
<tr><td>Credit card balance</td><td>$2,000</td></tr>
<tr><td>Business loan</td><td>$10,000</td></tr>
<tr><td><strong>Total liabilities</strong></td><td><strong>$15,000</strong></td></tr>
<tr><td>Owner's equity</td><td>$36,000</td></tr>
<tr><td><strong>Total liabilities and equity</strong></td><td><strong>$51,000</strong></td></tr>
</tbody>
</table>

<h3>Tying them together</h3>

<p>The owner started the year with equity of $14,000. During the year the business earned net income of $62,000 and the owner withdrew $40,000 for living costs. Ending equity is $14,000 + $62,000 - $40,000 = $36,000, which matches the balance sheet. Assets of $51,000 equal liabilities of $15,000 plus equity of $36,000.</p>

<p>Notice what each report reveals. The income statement says the studio is solidly profitable at a 51.7% net margin ($62,000 divided by $120,000). The balance sheet adds what the P&amp;L cannot: $15,000 of revenue is still sitting in unpaid invoices, more than half of the $28,000 cash balance. If two big clients paid late, the studio could feel tight on cash despite a strong year. Tools like an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> help manage exactly that risk.</p>

<h2>Which Questions Each Statement Answers</h2>

<p>Choosing the right report depends on the decision in front of you.</p>

<table>
<thead>
<tr><th>Question</th><th>Look at</th><th>Why</th></tr>
</thead>
<tbody>
<tr><td>Are my prices high enough?</td><td>Income statement</td><td>Gross margin shows profit after direct costs</td></tr>
<tr><td>Can I afford to hire?</td><td>Both</td><td>Profit shows capacity; cash and payables show timing</td></tr>
<tr><td>Can I pay next month's bills?</td><td>Balance sheet</td><td>Compare current assets with current liabilities</td></tr>
<tr><td>How much do clients owe me?</td><td>Balance sheet</td><td>Accounts receivable line</td></tr>
<tr><td>How much tax will I owe?</td><td>Income statement</td><td>Taxable profit starts from net income</td></tr>
<tr><td>Is the business getting more valuable?</td><td>Balance sheet</td><td>Equity growth over time</td></tr>
<tr><td>Are overheads creeping up?</td><td>Income statement</td><td>Compare expense lines month to month</td></tr>
</tbody>
</table>

<p>For the liquidity questions, ratios such as those in our guide to the <a href="/blog/current-ratio-vs-quick-ratio">current ratio vs quick ratio</a> turn balance sheet lines into a quick health check. For profitability, our guide on <a href="/blog/how-to-calculate-profit-margin">how to calculate profit margin</a> does the same for the income statement.</p>

<h2>Cash vs Accrual: How Your Method Changes Both Reports</h2>

<p>Your accounting method changes what appears on each statement. Under accrual accounting, an invoice counts as revenue when you issue it, and the unpaid amount sits on the balance sheet as a receivable. Under cash accounting, revenue only appears when the customer pays, so there is no receivable at all. Our comparison of <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> covers which method suits which business.</p>

<p>In the example above, an accrual-basis P&amp;L shows $120,000 of revenue. A cash-basis P&amp;L for the same studio would show only what was collected, perhaps $105,000, and the balance sheet would leave out the $15,000 receivable. Neither is wrong, but you must be consistent, and lenders usually prefer accrual-based statements because they match revenue with the period it was earned.</p>

<h2>How to Prepare Both Statements Step by Step</h2>

<p>If you are producing statements yourself for the first time, follow this order.</p>

<ol>
<li><strong>Record every invoice and bill.</strong> Number invoices sequentially (a consistent numbering system makes gaps easy to spot) and record supplier bills as they arrive.</li>
<li><strong>Reconcile bank and card accounts.</strong> Match each transaction to an invoice, bill or expense so cash on the balance sheet equals your bank statement.</li>
<li><strong>Post adjustments.</strong> Record depreciation, accrued expenses, prepaid amounts and any bad debts you need to write off.</li>
<li><strong>Run a trial balance.</strong> Total debits must equal total credits. If they do not, find the error before going further.</li>
<li><strong>Prepare the income statement.</strong> Group revenue and expenses into the categories shown above and calculate net income.</li>
<li><strong>Roll net income into equity.</strong> Add net income, subtract draws or dividends, and add any new owner contributions.</li>
<li><strong>Prepare the balance sheet.</strong> List assets, liabilities and the updated equity figure, and check that both sides agree.</li>
<li><strong>Review the story.</strong> Compare with last month and last year. Profit up but cash down usually means receivables or inventory are growing.</li>
</ol>

<h2>What Lenders, Investors and Tax Authorities Look For</h2>

<p>Different readers focus on different parts of the two reports, and knowing this helps you prepare before a meeting.</p>

<h3>Banks and lenders</h3>

<p>A lender wants to know two things: can you afford the repayments, and what happens if things go wrong. Repayment capacity comes from the income statement, usually operating profit before interest compared with the proposed loan payments. Downside protection comes from the balance sheet: existing debt, cash reserves, receivables that could be collected, and how much equity the owner has at risk. A business with high profit but almost no equity, because the owner withdraws everything, can look riskier than its P&amp;L suggests.</p>

<h3>Investors and buyers</h3>

<p>Investors look at revenue growth and margins on the income statement, then use the balance sheet to check that growth is not being bought with unpaid receivables, stockpiled inventory or heavy borrowing. Someone buying a small business will often value it on profit but adjust the price for the assets and liabilities that come with it.</p>

<h3>Tax authorities</h3>

<p>Taxable profit starts with the income statement. Sole proprietors in the US report business income and expenses on Schedule C, which is essentially a P&amp;L, while companies file returns that may also require a balance sheet. Either way, expense categories on your P&amp;L should match the categories you claim on your return, so keep them consistent through the year.</p>

<h2>Common Mistakes When Reading the Two Reports</h2>

<ul>
<li><strong>Treating profit as cash.</strong> A strong income statement does not guarantee money in the bank, especially with long payment terms.</li>
<li><strong>Recording owner draws as expenses.</strong> Draws reduce equity on the balance sheet. They are not an expense on the income statement, so including them understates profit.</li>
<li><strong>Putting loan repayments on the P&amp;L.</strong> Only the interest portion is an expense. The principal reduces the loan liability.</li>
<li><strong>Expensing equipment purchases in full.</strong> Larger assets are usually capitalised and depreciated over their useful life, unless a tax election allows immediate expensing.</li>
<li><strong>Comparing different periods.</strong> A one-month P&amp;L and a full-year P&amp;L cannot be compared without adjusting for the time frame.</li>
</ul>

<h2>Better Invoices, Better Financial Statements</h2>

<p>Both statements are only as accurate as the records behind them. Revenue on the income statement and receivables on the balance sheet both come straight from your invoices, so missing numbers, duplicate invoices or wrong tax amounts flow through to every report. Clear, numbered invoices with dates, due dates and tax shown separately make month-end far quicker and keep the income statement vs balance sheet link intact.</p>

<p>Create professional, numbered invoices in minutes with our <a href="/invoice-generator">invoice generator</a>, then pick a clean layout such as the <a href="/invoice-templates/corporate">corporate invoice template</a> so every sale is recorded correctly from day one.</p>
`,
  },
  {
    slug: "owners-equity",
    title: "Owner's Equity: Formula, Examples and How Draws Affect It",
    description:
      "Owner's equity explained: the formula, what increases and reduces it, how owner's draws work, and a worked example with a statement of owner's equity.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "balance-sheet-small-business",
      "retained-earnings",
      "profit-and-loss-statement",
      "llc-vs-sole-proprietorship",
    ],
    faqs: [
      {
        q: "What is owner's equity in simple terms?",
        a: "Owner's equity is the part of the business that belongs to the owner after all debts are paid. If you sold every asset at its book value and paid off every liability, the money left over would equal owner's equity. It grows when you invest money or the business makes a profit, and it shrinks when you withdraw money or the business makes a loss.",
      },
      {
        q: "What is the formula for owner's equity?",
        a: "The basic formula is owner's equity = total assets - total liabilities. A second version shows how equity changes over a period: ending equity = beginning equity + owner contributions + net income - owner's draws. Both should give the same answer. If they do not, there is usually an error in your books, such as a draw recorded as an expense or a missing liability.",
      },
      {
        q: "Is an owner's draw an expense?",
        a: "No. An owner's draw is a withdrawal of equity, not a business expense, so it does not appear on the profit and loss statement and does not reduce taxable profit. The IRS says in Publication 334 that you cannot deduct your own salary or any personal withdrawals from your business. Draws are recorded in a separate equity account that reduces owner's equity on the balance sheet.",
      },
      {
        q: "Can owner's equity be negative?",
        a: "Yes. Equity turns negative when liabilities exceed assets, usually because the business made losses or the owner withdrew more than the business earned while funding the gap with debt. Negative equity is a warning sign for lenders and suppliers. It is fixable by reducing draws, injecting capital, paying down debt or improving profitability, but it should be addressed quickly rather than left to grow.",
      },
      {
        q: "What is the difference between owner's equity and shareholders' equity?",
        a: "They measure the same thing for different business structures. Owner's equity is used for sole proprietorships and single-member LLCs taxed as sole proprietorships, where one person owns the business. Shareholders' or stockholders' equity is used for corporations and is split into share capital and retained earnings. Partnerships usually show a separate capital account for each partner instead of one owner's equity figure.",
      },
      {
        q: "How much should I take as an owner's draw?",
        a: "There is no fixed rule. A sensible approach is to draw no more than the business's net profit after setting aside money for income tax, self-employment tax and a cash reserve for slow months. If you regularly draw more than you earn, equity falls and the business may need debt to cover the gap. Review draws against your monthly profit and loss statement.",
      },
      {
        q: "Does owner's equity equal the value of the business?",
        a: "Not usually. Owner's equity is a book value based on historical costs and accounting rules. The market value of a business, what a buyer would pay, also reflects future profits, customer relationships, brand and goodwill that do not appear on the balance sheet. A profitable service business with few assets can be worth far more than its equity, while a business with outdated equipment can be worth less.",
      },
      {
        q: "Where does owner's equity appear on financial statements?",
        a: "It appears in the bottom section of the balance sheet, after liabilities, so that total liabilities plus equity equals total assets. Some businesses also prepare a statement of owner's equity, which starts with the opening balance, adds contributions and net income, subtracts draws and arrives at the closing balance. Net income itself comes from the profit and loss statement for the same period.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Owner's equity is the owner's claim on the business after all debts are paid. The owner's equity formula is total assets minus total liabilities. It increases with owner contributions and profit, and decreases with owner's draws and losses, so ending equity equals beginning equity plus contributions plus net income minus draws.</p>

<p>Owner's equity is one of the most useful numbers a small business owner can track, yet it is often ignored because it sits at the bottom of the balance sheet. This guide explains the owner's equity formula, what counts as a contribution or an owner's draw, how equity differs across business structures, and how to prepare a simple statement of owner's equity. If you invoice clients through our <a href="/invoice-generator">free invoice generator</a>, every paid invoice eventually shows up here as profit that builds your equity.</p>

<h2>The Owner's Equity Formula</h2>

<p>There are two versions of the formula. They describe the same number from two angles.</p>

<h3>1. The balance sheet version</h3>

<p><strong>Owner's equity = total assets - total liabilities</strong></p>

<p>This comes straight from the <a href="/blog/accounting-equation">accounting equation</a>, assets = liabilities + equity. It tells you the owner's stake at a single moment.</p>

<h3>2. The roll-forward version</h3>

<p><strong>Ending equity = beginning equity + contributions + net income - draws</strong></p>

<p>This version explains why equity changed during a period. Net income comes from your <a href="/blog/profit-and-loss-statement">profit and loss statement</a>; a net loss is subtracted instead of added. For a corporation the same idea applies, but dividends replace draws and profit accumulates as <a href="/blog/retained-earnings">retained earnings</a>.</p>

<p>If you calculate equity both ways and get different answers, something is wrong in your books. The most common culprits are a draw recorded as an expense, a personal purchase paid from the business account and never recorded, or a loan that was left off the balance sheet.</p>

<h2>What Increases and Decreases Owner's Equity</h2>

<table>
<thead>
<tr><th>Increases equity</th><th>Decreases equity</th></tr>
</thead>
<tbody>
<tr><td>Cash the owner puts into the business</td><td>Owner's draws (cash or assets taken out)</td></tr>
<tr><td>Assets the owner contributes, such as a laptop or vehicle</td><td>Net losses</td></tr>
<tr><td>Net profit for the period</td><td>Personal expenses paid from the business account</td></tr>
<tr><td>New partners or investors buying in</td><td>Dividends or distributions (companies and LLCs)</td></tr>
<tr><td>Converting an owner loan into capital</td><td>Write-downs of assets, such as <a href="/blog/bad-debt-write-off">bad debts written off</a></td></tr>
</tbody>
</table>

<p>Notice that ordinary business expenses reduce equity indirectly, by lowering net income. Draws reduce it directly, without touching the income statement.</p>

<h2>Owner's Draw Explained</h2>

<p>An owner's draw is money or property a sole proprietor or partner takes out of the business for personal use. It is how most self-employed people pay themselves, because a sole proprietor is not an employee of their own business.</p>

<h3>Draws are not a business expense</h3>

<p>This is the most common bookkeeping mistake small business owners make. A draw does not appear on the P&amp;L and does not reduce taxable profit. The IRS is explicit in <a href="https://www.irs.gov/publications/p334" target="_blank" rel="noopener noreferrer">Publication 334, Tax Guide for Small Business</a>: you cannot deduct your own salary or any personal withdrawals you make from your business. Sole proprietors pay income tax and <a href="/blog/self-employment-tax">self-employment tax</a> on net profit, whether they withdraw it or leave it in the business.</p>

<h3>How a draw is recorded</h3>

<p>In <a href="/blog/double-entry-bookkeeping">double-entry bookkeeping</a>, a $3,000 cash draw is recorded as a debit to an Owner's Draws equity account and a credit to Cash. At year end, the draws account is closed into the owner's capital account. Most accounting software handles this if you categorise the transfer as an owner's draw rather than as wages or an expense.</p>

<h3>Draw vs salary vs distribution</h3>

<table>
<thead>
<tr><th>Business type</th><th>How the owner is usually paid</th><th>Effect on equity</th></tr>
</thead>
<tbody>
<tr><td>Sole proprietorship</td><td>Owner's draw</td><td>Reduces owner's capital directly</td></tr>
<tr><td>Partnership or multi-member LLC</td><td>Partner draws, sometimes guaranteed payments</td><td>Draws reduce that partner's capital account</td></tr>
<tr><td>Single-member LLC (default tax treatment)</td><td>Owner's draw</td><td>Same as a sole proprietorship</td></tr>
<tr><td>S corporation</td><td>Salary through payroll plus distributions</td><td>Salary is an expense; distributions reduce equity</td></tr>
<tr><td>C corporation</td><td>Salary plus dividends</td><td>Salary is an expense; dividends reduce retained earnings</td></tr>
</tbody>
</table>

<p>For a fuller look at the options, see our guide on <a href="/blog/how-to-pay-yourself-as-a-business-owner">how to pay yourself as a business owner</a> and our comparison of <a href="/blog/s-corp-vs-llc">S corp vs LLC</a>.</p>

<h2>Worked Example: Two Years of a Consulting Business</h2>

<p>Maria starts a sole-proprietor consulting business. Here is how her owner's equity moves over two years. All figures are illustrative.</p>

<h3>Year 1</h3>

<ul>
<li>Opening equity: $0</li>
<li>Owner contribution: $10,000 cash to fund a laptop, software and a cash buffer</li>
<li>Net income for the year: $45,000 (revenue of $68,000 less expenses of $23,000)</li>
<li>Owner's draws: $30,000</li>
</ul>

<p>Ending equity = $0 + $10,000 + $45,000 - $30,000 = <strong>$25,000</strong>.</p>

<p>Now check it against the balance sheet at the end of Year 1:</p>

<table>
<thead>
<tr><th>Assets</th><th>Amount</th><th>Liabilities</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Cash</td><td>$18,000</td><td>Accounts payable</td><td>$2,500</td></tr>
<tr><td>Accounts receivable</td><td>$9,000</td><td>Credit card</td><td>$1,500</td></tr>
<tr><td>Equipment (net)</td><td>$7,000</td><td>Equipment loan</td><td>$5,000</td></tr>
<tr><td><strong>Total assets</strong></td><td><strong>$34,000</strong></td><td><strong>Total liabilities</strong></td><td><strong>$9,000</strong></td></tr>
</tbody>
</table>

<p>Assets of $34,000 minus liabilities of $9,000 equals $25,000. Both versions of the formula agree, so the books balance.</p>

<h3>Year 2: Statement of owner's equity</h3>

<p>In Year 2 Maria adds $5,000 to buy new equipment, earns net income of $38,000 after losing a large client, and draws $42,000 because her personal costs did not fall. A statement of owner's equity shows the movement clearly:</p>

<table>
<thead>
<tr><th>Statement of owner's equity, Year 2</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Beginning equity</td><td>$25,000</td></tr>
<tr><td>Add: owner contributions</td><td>$5,000</td></tr>
<tr><td>Add: net income</td><td>$38,000</td></tr>
<tr><td>Less: owner's draws</td><td>($42,000)</td></tr>
<tr><td><strong>Ending equity</strong></td><td><strong>$26,000</strong></td></tr>
</tbody>
</table>

<p>Equity rose only $1,000 even though Maria put in $5,000, because she drew $4,000 more than the business earned. One more year like this and she would be eating into her original investment. The statement makes that visible in a way the P&amp;L alone does not.</p>

<h3>What negative equity would look like</h3>

<p>Suppose in Year 3 Maria earns net income of $20,000, adds nothing, and still draws $50,000, borrowing on a credit card to cover the shortfall. Ending equity would be $26,000 + $20,000 - $50,000 = <strong>-$4,000</strong>. Her liabilities would now exceed her assets, which is exactly the pattern a lender looks for before declining an application. Cutting draws back to the level of net income is usually the quickest fix.</p>

<h2>How to Calculate Owner's Equity Step by Step</h2>

<ol>
<li><strong>Bring your records up to date.</strong> Record every invoice, bill and bank transaction for the period. Unrecorded invoices mean understated receivables and profit.</li>
<li><strong>List all assets at book value.</strong> Cash, receivables, inventory, prepaid costs and equipment net of depreciation.</li>
<li><strong>List all liabilities.</strong> Supplier bills, credit cards, loans, taxes owed and any customer deposits not yet earned.</li>
<li><strong>Subtract.</strong> Total assets minus total liabilities gives owner's equity.</li>
<li><strong>Run the roll-forward.</strong> Beginning equity plus contributions plus net income minus draws.</li>
<li><strong>Reconcile any difference.</strong> If the two answers differ, look for misclassified draws, missing liabilities or unrecorded owner contributions.</li>
<li><strong>Track the trend.</strong> Compare equity month to month or year to year. Steady growth means the business is retaining value.</li>
</ol>

<h2>Owner Contributions: Capital or Loan?</h2>

<p>When you put money into your business, you have a choice about how to record it, and the choice changes the balance sheet.</p>

<ul>
<li><strong>As a capital contribution:</strong> the money increases owner's equity. There is no obligation for the business to pay it back, and later withdrawals are recorded as draws.</li>
<li><strong>As an owner loan:</strong> the money is a liability. Equity does not change, and repayments reduce the loan rather than counting as draws. For a sole proprietor this distinction is mostly about clarity, because you and the business are the same legal person. For an LLC or corporation, a documented loan with repayment terms can matter for tax and legal purposes, so agree the treatment with your accountant.</li>
<li><strong>As contributed assets:</strong> if you move a laptop, vehicle or tools you already own into the business, record them at fair value as an asset and a matching contribution to equity.</li>
</ul>

<p>Whatever you choose, write it down when it happens. Untangling three years of unrecorded transfers between personal and business accounts is one of the most expensive clean-up jobs an accountant does.</p>

<h2>Owner's Equity vs Net Income vs Retained Earnings</h2>

<p>These three terms are easy to confuse because they are closely connected.</p>

<table>
<thead>
<tr><th>Term</th><th>Which statement</th><th>Time frame</th><th>What it measures</th></tr>
</thead>
<tbody>
<tr><td>Net income</td><td>Profit and loss statement</td><td>One period</td><td>Revenue minus expenses for that period</td></tr>
<tr><td>Retained earnings</td><td>Balance sheet (companies)</td><td>Cumulative since the business began</td><td>All past profits minus losses and dividends</td></tr>
<tr><td>Owner's equity</td><td>Balance sheet</td><td>A single date</td><td>Total owner claim: contributions plus retained profit minus draws</td></tr>
</tbody>
</table>

<p>Net income is a flow, measured over a period, while owner's equity is a stock, measured at a point in time. Each period's net income is one of the ingredients that changes the stock. Our comparison of the <a href="/blog/income-statement-vs-balance-sheet">income statement vs balance sheet</a> explains this link in more detail.</p>

<h2>Owner's Equity by Business Structure</h2>

<p>The label and layout change with your legal structure, but the logic stays the same.</p>

<ul>
<li><strong>Sole proprietorship:</strong> one capital account, often called "Owner's Capital" or "[Name], Capital", plus a draws account. See our comparison of <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> for how structure affects liability.</li>
<li><strong>Partnership:</strong> a capital account for each partner, showing their own contributions, share of profit and draws, according to the partnership agreement.</li>
<li><strong>LLC:</strong> member equity or members' capital, split by member if there are several.</li>
<li><strong>Corporation:</strong> shareholders' equity, typically split into share capital (what shareholders paid for shares) and retained earnings (accumulated profit less dividends).</li>
</ul>

<h2>Why Owner's Equity Matters</h2>

<p>Equity is more than an accounting balancing figure. It tells you several practical things:</p>

<ul>
<li><strong>Whether the business is building value.</strong> Rising equity means you are keeping some profit in the business rather than spending all of it.</li>
<li><strong>How much risk lenders see.</strong> Banks compare debt with equity. Thin or negative equity makes borrowing harder and more expensive.</li>
<li><strong>Whether your draws are sustainable.</strong> If draws consistently exceed net income, equity falls and the business is gradually being funded by debt.</li>
<li><strong>Your cushion against bad months.</strong> Positive equity backed by cash and collectable receivables gives you room to absorb a lost client or slow season.</li>
</ul>

<p>Equity backed mostly by unpaid invoices is weaker than equity backed by cash. Keeping receivables under control with clear payment terms and an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> makes your equity more real.</p>

<h2>Common Owner's Equity Mistakes</h2>

<ul>
<li><strong>Recording draws as wages or expenses.</strong> This understates profit on the P&amp;L and can lead to incorrect tax returns.</li>
<li><strong>Mixing personal and business spending.</strong> Personal purchases on the business card should be recorded as draws, not hidden in expense categories.</li>
<li><strong>Forgetting owner contributions.</strong> If you pay a business bill from your personal account, record it as a contribution so equity and liabilities stay accurate.</li>
<li><strong>Ignoring negative equity.</strong> A negative balance can persist for years without action, until a lender or buyer points it out.</li>
<li><strong>Not separating bank accounts.</strong> A dedicated business account makes draws and contributions easy to identify, as our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> guide explains.</li>
</ul>

<h2>Build Owner's Equity One Invoice at a Time</h2>

<p>Owner's equity grows when your business earns more than it spends and you leave some of that profit in place. The starting point is getting paid in full and on time for the work you do. Send clear, professional invoices with due dates and payment details using our <a href="/invoice-generator">invoice generator</a>, or choose a clean design such as the <a href="/invoice-templates/minimal">minimal invoice template</a>, and track your owner's equity monthly so you always know what your business is really worth to you.</p>
`,
  },
  {
    slug: "invoice-discounting-vs-factoring",
    title: "Invoice Discounting vs Factoring: Costs, Control and Fit",
    description:
      "Invoice discounting vs factoring compared: who collects payments, confidentiality, fees, eligibility, and a worked cost example to help you choose.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "invoice-factoring",
      "invoice-financing-vs-line-of-credit",
      "cash-flow-management",
      "working-capital",
    ],
    faqs: [
      {
        q: "What is the main difference between invoice discounting and factoring?",
        a: "The main difference is who manages collections. With factoring, the finance provider runs your sales ledger and chases your customers for payment, so customers know a factor is involved. With invoice discounting, you keep collecting payments yourself and the facility is often confidential. Both release a percentage of your unpaid invoice value early, and both charge a service fee plus a discount charge on the money you use.",
      },
      {
        q: "Is invoice discounting cheaper than factoring?",
        a: "Usually, yes, on the provider's fees alone. Factoring includes credit control and collection services, so the service fee is generally higher. The British Business Bank notes factoring service fees are generally higher than invoice discounting for this reason. However, with discounting you carry the cost of your own credit control staff and time, so compare total cost, not just the headline fee, before deciding.",
      },
      {
        q: "Will my customers know if I use invoice discounting?",
        a: "Often not. Many invoice discounting facilities are confidential, meaning customers keep paying into an account in your name, typically a trust or collection account controlled by the lender, and you continue to send statements and reminders. Factoring is normally disclosed: invoices carry a notice telling customers to pay the factor, and the factor contacts them directly about overdue amounts. Some providers offer confidential factoring at a higher price.",
      },
      {
        q: "Which businesses qualify for invoice discounting?",
        a: "Invoice discounting is usually aimed at established businesses with a trading history, solid bookkeeping and reliable credit control, because the lender relies on you to collect payments. Providers often set minimum turnover levels and review your debtor ledger and aged debt reports. Factoring is generally easier for smaller or younger businesses, because the provider takes over collection and can lean on the strength of your customers instead.",
      },
      {
        q: "How much of an invoice can I get upfront?",
        a: "Advances commonly reach 80% to 90% of the invoice value, according to British Business Bank guidance. The remaining 10% to 20% is released when your customer pays, minus the provider's fees. The exact advance depends on your sector, customer quality, how concentrated your ledger is on a few customers, and your history of disputes or credit notes. Invoices tied to staged contracts or retentions may attract a lower advance.",
      },
      {
        q: "What is recourse and non-recourse invoice finance?",
        a: "With recourse finance, which is most common, you must repay the advance if your customer does not pay, so you keep the bad debt risk. With non-recourse finance, the provider absorbs the loss if an approved customer becomes insolvent, usually through built-in credit insurance. Non-recourse costs more and rarely covers disputes over quality or delivery. Both factoring and discounting can be offered on either basis.",
      },
      {
        q: "Can freelancers use invoice factoring or discounting?",
        a: "Freelancers who invoice businesses can sometimes use selective or single-invoice factoring, where you finance one invoice at a time without a long contract. Whole-ledger invoice discounting is rarely available to freelancers because of turnover and track-record requirements. Invoice finance only works for business-to-business invoices; providers do not normally fund invoices to consumers. Many freelancers find deposits and shorter payment terms cheaper than any finance product.",
      },
      {
        q: "Does invoice finance appear on the balance sheet?",
        a: "Usually, yes. Under most arrangements the receivables stay on your balance sheet and the advance is shown as a liability, because you keep the credit risk or control over the debts. Some non-recourse factoring structures may allow the receivables to be removed, depending on the accounting framework. Ask your accountant how a specific agreement should be presented, as it affects ratios that lenders review.",
      },
      {
        q: "How do I leave an invoice finance agreement?",
        a: "Check the contract for the minimum term, notice period and any termination or minimum fee. Whole-ledger facilities often have a minimum term and a notice period, and early exit can trigger fees. When you leave, you normally need to repay outstanding advances, often by collecting the remaining invoices or refinancing them with another provider, and customers on a disclosed facility must be told to pay you directly again.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In invoice discounting vs factoring, both release cash from unpaid B2B invoices, usually 80% to 90% upfront. The difference is control. With factoring, the provider runs your sales ledger and collects payments, so customers know. With invoice discounting, you collect payments yourself, often confidentially, and pay lower fees but need stronger credit control.</p>

<p>If customers pay on 30, 60 or 90-day terms, your cash is tied up in unpaid invoices while your own bills keep arriving. Invoice discounting and factoring are the two main forms of invoice finance that turn those invoices into cash within days. This guide compares invoice discounting vs factoring on control, confidentiality, cost, eligibility and risk, with a worked cost example. Every facility starts with clean, accurate invoices, which you can create with our <a href="/invoice-generator">free invoice generator</a>.</p>

<p>For a deeper look at how factoring works on its own, including recourse terms and alternatives, read our full guide to <a href="/blog/invoice-factoring">invoice factoring</a>. This article focuses on the choice between the two.</p>

<h2>How Invoice Finance Works</h2>

<p>Both products follow the same basic cycle. The <a href="https://www.british-business-bank.co.uk/business-guidance/guidance-articles/finance/invoice-finance" target="_blank" rel="noopener noreferrer">British Business Bank's guide to invoice finance</a> describes it as giving access to up to 80% or 90% of invoice value almost immediately, with the remaining 10% or 20%, less fees, paid when your customer settles.</p>

<ol>
<li><strong>You deliver goods or services and issue an invoice</strong> to a business customer on normal credit terms.</li>
<li><strong>You submit the invoice to the provider</strong>, individually or as part of a regular ledger update.</li>
<li><strong>The provider advances a percentage</strong>, typically 80% to 90%, within a day or two.</li>
<li><strong>The customer pays</strong>, either to the factor (factoring) or into a controlled account in your name (discounting).</li>
<li><strong>The provider releases the balance</strong> minus its service fee and discount charge.</li>
</ol>

<p>The difference between the two lies almost entirely in step 4 and who does the work in between.</p>

<h2>Invoice Discounting vs Factoring: Side-by-Side Comparison</h2>

<p>The table below summarises how the two products differ in practice. Exact terms vary by provider, so treat it as a starting point for comparing real offers rather than a guarantee of what any one lender will provide.</p>

<table>
<thead>
<tr><th>Feature</th><th>Invoice factoring</th><th>Invoice discounting</th></tr>
</thead>
<tbody>
<tr><td>Who collects payment</td><td>The factor</td><td>You</td></tr>
<tr><td>Sales ledger management</td><td>Outsourced to the factor</td><td>Stays in-house</td></tr>
<tr><td>Do customers know?</td><td>Yes, usually disclosed</td><td>Often confidential</td></tr>
<tr><td>Typical advance</td><td>Up to 80% to 90%</td><td>Up to 80% to 90%</td></tr>
<tr><td>Fees</td><td>Higher service fee, includes credit control</td><td>Lower service fee, finance only</td></tr>
<tr><td>Best suited to</td><td>Smaller or younger businesses without credit control staff</td><td>Established businesses with strong bookkeeping</td></tr>
<tr><td>Provider's reliance</td><td>Strength of your customers</td><td>Your systems and track record as well as your customers</td></tr>
<tr><td>Admin burden on you</td><td>Lower</td><td>Higher: you chase, reconcile and report</td></tr>
<tr><td>Recourse or non-recourse</td><td>Either</td><td>Either, recourse more common</td></tr>
</tbody>
</table>

<h2>What Is Invoice Factoring?</h2>

<p>Factoring combines finance with an outsourced credit control service. The factor takes over your sales ledger, sends statements, chases late payers and allocates incoming payments. Your invoices carry a notice telling customers to pay the factor, so the arrangement is visible.</p>

<p>For a small business without a finance team, that can be a genuine benefit. You get cash early and someone else does the chasing. British Business Bank guidance notes that factoring is usually available to smaller businesses, typically those with annual sales up to £2 million, and that the service fee is generally higher than invoice discounting because of the ledger management included.</p>

<p>The trade-offs are cost and customer relationships. Some clients dislike being contacted by a third party, and you lose some control over how firmly or gently overdue accounts are handled.</p>

<h2>What Is Invoice Discounting?</h2>

<p>Invoice discounting is a finance-only product. You keep running your sales ledger, sending invoices and reminders, and collecting payments. The lender advances funds against your receivables and monitors your ledger through regular reports and audits.</p>

<p>Because customers pay into an account that the lender controls but that sits in your name, many facilities are undisclosed: customers continue dealing only with you. That confidentiality is the main reason established businesses choose discounting. It also tends to be cheaper on fees.</p>

<p>The catch is that lenders need confidence in your systems. Expect them to review your <a href="/blog/accounts-receivable-aging-report">aged debtor report</a>, your history of credit notes and disputes, and your collection process before they sign. A weak <a href="/blog/customer-credit-policy">customer credit policy</a> can rule you out.</p>

<h2>Worked Example: Comparing the Cost</h2>

<p>The fees below are illustrative, not quotes; real pricing varies widely by provider, sector and risk. Both products are typically priced as a service fee (a percentage of invoice value) plus a discount charge, which works like interest on the funds you draw.</p>

<p>A business invoices <strong>$50,000</strong> on 60-day terms and wants an 85% advance of <strong>$42,500</strong>. The customer pays on day 60. Assume a discount charge of 8% a year on funds drawn for both options.</p>

<table>
<thead>
<tr><th>Cost line</th><th>Factoring</th><th>Invoice discounting</th></tr>
</thead>
<tbody>
<tr><td>Service fee</td><td>1.5% x $50,000 = $750.00</td><td>0.5% x $50,000 = $250.00</td></tr>
<tr><td>Discount charge (8% a year on $42,500 for 60 days)</td><td>$558.90</td><td>$558.90</td></tr>
<tr><td>In-house collection time (10 hours at $30)</td><td>$0.00</td><td>$300.00</td></tr>
<tr><td><strong>Total cost</strong></td><td><strong>$1,308.90</strong></td><td><strong>$1,108.90</strong></td></tr>
<tr><td>Cost as % of invoice value</td><td>2.62%</td><td>2.22%</td></tr>
</tbody>
</table>

<p>How the discount charge is calculated: $42,500 x 8% = $3,400 a year. For 60 days that is $3,400 x 60 / 365 = $558.90.</p>

<p>On factoring, when the customer pays the full $50,000 to the factor, the factor keeps the $42,500 advance and the $1,308.90 of fees and releases the remaining <strong>$6,191.10</strong> to you ($50,000 - $42,500 - $1,308.90).</p>

<p>On these assumptions, discounting saves about $200 on this invoice, but only because in-house collection is cheap. If chasing this customer took 25 hours, the in-house cost would be $750 and discounting would cost $1,558.90, more than factoring. The lesson: compare total cost, including your own time, not just the provider's fee. Late payment also matters, since the discount charge keeps running until the customer pays. Our <a href="/blog/late-payment-statistics">late payment statistics</a> show why that risk is real.</p>

<h2>Recourse vs Non-Recourse</h2>

<p>Both factoring and discounting come in two risk models:</p>

<ul>
<li><strong>Recourse:</strong> if your customer does not pay, you must repay the advance. You keep the <a href="/blog/bad-debt-write-off">bad debt</a> risk. This is the most common and cheapest model.</li>
<li><strong>Non-recourse:</strong> the provider absorbs the loss if an approved customer becomes insolvent, usually via credit insurance. Fees are higher, credit limits per customer apply, and disputes over quality or delivery are normally excluded.</li>
</ul>

<p>Read the definition of "bad debt" in any non-recourse contract carefully. Many only protect against formal insolvency, not a customer who simply refuses to pay.</p>

<h2>Whole-Ledger vs Selective Facilities</h2>

<p>Both products come in two scopes, and the scope often matters as much as the factoring or discounting label.</p>

<ul>
<li><strong>Whole-ledger facilities</strong> fund all eligible invoices to all approved customers. They usually offer the lowest percentage fees but come with a minimum term, notice period and sometimes minimum monthly charges. Most traditional factoring and almost all confidential invoice discounting works this way.</li>
<li><strong>Selective or single-invoice finance</strong> lets you choose which invoices to fund, one at a time. Fees per invoice are higher, but there is no ongoing commitment. This suits seasonal businesses, contractors with one or two large slow-paying clients, and freelancers who invoice businesses occasionally.</li>
</ul>

<p>If you only need help with one large invoice a quarter, a whole-ledger contract can cost more in minimum fees than it saves. Work out how many invoices you would actually fund in a year before you sign.</p>

<h2>How Invoice Finance Shows Up in Your Accounts</h2>

<p>Invoice finance affects your financial statements, which matters if you later apply for a loan or sell the business. Under most recourse arrangements the invoices stay on your balance sheet as receivables, and the advance appears as a liability. The service fees and discount charges are finance costs on your <a href="/blog/profit-and-loss-statement">profit and loss statement</a>, so they reduce net profit.</p>

<p>The upside is that faster cash improves your <a href="/blog/working-capital">working capital</a> position day to day. The downside is that a lender looking at your <a href="/blog/balance-sheet-small-business">balance sheet</a> will see the facility as existing debt secured on your receivables, which can limit other borrowing. Ask your accountant how a specific agreement should be presented before you sign.</p>

<h2>Which Should You Choose?</h2>

<h3>Choose factoring if</h3>
<ul>
<li>You have no dedicated credit controller and chasing invoices takes time away from paying work.</li>
<li>You are a younger business with limited trading history but creditworthy customers.</li>
<li>Your customers are used to dealing with factors, which is common in sectors such as transport, staffing and wholesale.</li>
<li>You value predictable collections over keeping the arrangement private.</li>
</ul>

<h3>Choose invoice discounting if</h3>
<ul>
<li>You have reliable bookkeeping, a clear collections process and someone responsible for credit control.</li>
<li>Customer relationships are sensitive and you prefer clients not to know you use finance.</li>
<li>Your turnover and track record meet the provider's minimums.</li>
<li>You want the lowest provider fees and are comfortable with regular ledger reporting and audits.</li>
</ul>

<h3>Consider neither if</h3>
<ul>
<li>The cash gap is small or occasional. A business overdraft or line of credit may be cheaper; see our comparison of <a href="/blog/invoice-financing-vs-line-of-credit">invoice financing vs a line of credit</a>.</li>
<li>You can fix the gap upstream with deposits, shorter terms or an <a href="/blog/early-payment-discount">early payment discount</a>.</li>
<li>Most of your customers are consumers. Invoice finance is designed for business-to-business invoices.</li>
</ul>

<h2>Preparing Your Invoices for Either Facility</h2>

<p>Providers fund invoices they can verify and collect. Disputed, vague or incorrect invoices are excluded from funding or reduce your advance rate. Before you apply:</p>

<ol>
<li><strong>Use sequential invoice numbers</strong> with no gaps. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can help you set a format.</li>
<li><strong>Reference a purchase order or contract</strong> on every invoice so the debt is easy to prove.</li>
<li><strong>Describe deliverables clearly</strong>, with dates, quantities and unit prices.</li>
<li><strong>State payment terms and due dates</strong>, and add the provider's assignment notice or bank details if the facility requires it.</li>
<li><strong>Issue credit notes properly</strong> when you adjust an invoice, rather than editing the original.</li>
<li><strong>Keep proof of delivery</strong> or signed timesheets for every funded invoice.</li>
</ol>

<p>A clean, professional layout such as the <a href="/invoice-templates/corporate">corporate invoice template</a> also reduces queries from customers' accounts payable teams, which speeds up payment and lowers your discount charges.</p>

<h2>Questions to Ask Any Provider</h2>

<ul>
<li>What advance rate will you offer, and on which customers?</li>
<li>How are the service fee and discount charge calculated, and is there a minimum monthly fee?</li>
<li>Is the facility recourse or non-recourse, and what does the bad debt protection exclude?</li>
<li>What is the minimum contract term, notice period and exit fee?</li>
<li>Must I finance my whole ledger, or can I choose individual invoices?</li>
<li>For discounting: how often must I submit ledger reports, and how are audits charged?</li>
<li>For factoring: how will your team communicate with my customers?</li>
</ul>

<h2>Speed Up Payment Before You Finance It</h2>

<p>The best way to reduce invoice finance costs is to get paid faster in the first place. Clear invoices sent the day work is delivered, with visible due dates and easy payment options, shorten the time your money is tied up, whichever side of the invoice discounting vs factoring choice you land on. Create accurate, finance-ready invoices in minutes with our <a href="/invoice-generator">invoice generator</a>, and keep an eye on <a href="/blog/cash-flow-management">cash flow management</a> so finance stays a tool rather than a habit.</p>
`,
  },
  {
    slug: "tax-invoice-vs-commercial-invoice",
    title: "Tax Invoice vs Commercial Invoice: Differences for Exporters",
    description:
      "Tax invoice vs commercial invoice: what each is for, who requires it, the fields that differ, and when one export sale needs both, with a worked example.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "tax-invoice-guide",
      "commercial-invoice-template",
      "hs-code-on-commercial-invoice",
      "zero-rated-vs-exempt-vat",
    ],
    faqs: [
      {
        q: "What is the difference between a tax invoice and a commercial invoice?",
        a: "A tax invoice is a document required by VAT or GST law that proves tax was charged on a sale and lets a registered buyer reclaim it. A commercial invoice is a trade document that customs authorities use to value, classify and clear goods crossing a border. The tax invoice answers a tax authority's questions; the commercial invoice answers a customs officer's questions. Many exporters issue both for the same shipment.",
      },
      {
        q: "Can one invoice be both a tax invoice and a commercial invoice?",
        a: "Sometimes. If a single document contains every field required by your VAT or GST rules and every field the destination customs authority expects, such as HS codes, country of origin, weights and Incoterms, it can serve both purposes. In practice many exporters keep them separate because customs often wants the invoice in the buyer's currency or language, while the tax invoice must follow domestic numbering and currency rules.",
      },
      {
        q: "Do I need a commercial invoice for services?",
        a: "Generally, no. Commercial invoices exist for physical goods moving through customs. Services delivered across borders, such as consulting, software development or design, do not pass through a customs checkpoint. You still need a normal invoice for services and, if you are VAT or GST registered, it may need to meet tax invoice rules, including any notes for zero-rated or reverse-charge supplies.",
      },
      {
        q: "Does an export commercial invoice show VAT?",
        a: "Usually not as a charge. In the UK and many other VAT systems, goods exported outside the country can be zero-rated if you hold the required evidence of export, so your tax invoice shows VAT at 0%. The commercial invoice focuses on the goods' value, freight and insurance for customs purposes. The destination country then charges its own import duty and import VAT or sales tax when the goods arrive.",
      },
      {
        q: "Who issues a tax invoice and who issues a commercial invoice?",
        a: "Both are issued by the seller. A tax invoice is issued by a VAT or GST registered supplier to its customer. A commercial invoice is issued by the exporter or shipper and travels with the goods or is submitted electronically to the carrier and customs broker. The buyer's customs broker or importer of record uses it to file the import entry and pay duties.",
      },
      {
        q: "Is a tax invoice needed in the United States?",
        a: "The US has no federal VAT, so there is no US legal concept of a tax invoice in the VAT sense. US sellers issue normal invoices that show sales tax where it applies under state rules. US importers, however, must file a commercial invoice with US Customs and Border Protection containing the details listed in 19 CFR 141.86, including description, quantity, price, origin and itemised charges.",
      },
      {
        q: "What happens if the commercial invoice value is wrong?",
        a: "Customs uses the commercial invoice to calculate duty, so an incorrect value can lead to underpaid duty, penalties, delays, seized goods or a demand for extra payment later. Undervaluing goods to reduce the buyer's duty is customs fraud. Overstating value means the buyer pays too much duty. The commercial invoice value should match the real transaction price shown on your tax invoice and sales contract.",
      },
      {
        q: "Should the tax invoice and commercial invoice have the same number?",
        a: "They do not have to, but they should cross-reference each other. Your tax invoice must follow your domestic sequential numbering. The commercial invoice can reuse that number or have its own, but it should quote the tax invoice number, purchase order and any proforma invoice reference. Consistent references make it far easier to answer questions from customs, tax auditors or your customer's accounts team.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the tax invoice vs commercial invoice comparison, a tax invoice is a VAT or GST document that records tax charged and lets a registered buyer reclaim it, while a commercial invoice is a customs document used to value, classify and clear goods crossing a border. Domestic sales need only a tax invoice; exported goods usually need a commercial invoice too.</p>

<p>The two documents look similar because both list a seller, a buyer, goods and prices, but they answer different authorities' questions. This guide explains the tax invoice vs commercial invoice difference, compares the required fields, shows when you need one or both, and walks through an export example with real numbers. You can produce either format with our <a href="/invoice-generator">free invoice generator</a> by adding the relevant fields.</p>

<p>For the full field-by-field rules of each document on its own, see our <a href="/blog/tax-invoice-guide">tax invoice guide</a> and our <a href="/blog/commercial-invoice-template">commercial invoice template for export</a>. This page focuses on how they differ and how they work together.</p>

<h2>Tax Invoice vs Commercial Invoice at a Glance</h2>

<table>
<thead>
<tr><th>Feature</th><th>Tax invoice</th><th>Commercial invoice</th></tr>
</thead>
<tbody>
<tr><td>Main purpose</td><td>Record VAT or GST charged; support the buyer's input tax claim</td><td>Declare goods to customs for valuation, classification and clearance</td></tr>
<tr><td>Required by</td><td>Domestic tax law (VAT, GST)</td><td>Customs authorities in the exporting and importing countries</td></tr>
<tr><td>Applies to</td><td>Goods and services</td><td>Physical goods crossing a border</td></tr>
<tr><td>Who uses it</td><td>Buyer's accounts team, tax authority</td><td>Carrier, customs broker, customs officers, importer</td></tr>
<tr><td>Key fields</td><td>Seller's tax number, tax rate, tax amount, tax point</td><td>HS code, country of origin, weights, Incoterms, freight and insurance</td></tr>
<tr><td>Currency</td><td>Tax amount usually in local currency</td><td>Transaction currency, often the buyer's</td></tr>
<tr><td>Tax shown</td><td>Tax charged, or 0% with a reason</td><td>Usually no domestic tax; destination duties assessed separately</td></tr>
<tr><td>Consequence of errors</td><td>Buyer cannot reclaim tax; penalties in an audit</td><td>Customs delays, wrong duty, penalties, seized goods</td></tr>
</tbody>
</table>

<h2>What a Tax Invoice Is For</h2>

<p>A tax invoice exists because VAT and GST systems let registered businesses reclaim the tax they pay on purchases. The tax authority needs a reliable document to prove that tax was charged. That is why the rules are strict about the seller's registration number, a unique sequential number, the tax rate and the tax amount.</p>

<p>In the UK, for example, HMRC's <a href="https://www.gov.uk/guidance/record-keeping-for-vat-notice-70021" target="_blank" rel="noopener noreferrer">VAT Notice 700/21 on record keeping</a> lists what a full VAT invoice must show, including a unique sequential number, the time of supply, the supplier's VAT registration number, a description, the VAT rate and amount for each item, and the total VAT in sterling. It also says you should normally issue a VAT invoice within 30 days of making the supply, and allows a simplified invoice for retail-style supplies of £250 or less including VAT.</p>

<p>Other countries use different names for the same idea: a GST tax invoice in India, Australia, Singapore and New Zealand, or a tax invoice under UAE VAT. See our guides to the <a href="/blog/gst-invoice-guide">GST invoice</a> and <a href="/blog/uae-vat-invoice-requirements">UAE VAT invoice requirements</a>, or compare systems in <a href="/blog/sales-tax-vs-vat-vs-gst">sales tax vs VAT vs GST</a>.</p>

<h2>What a Commercial Invoice Is For</h2>

<p>A commercial invoice exists because customs needs to know exactly what is entering or leaving the country, what it is worth and where it was made. Customs uses it to apply the correct tariff classification, calculate duty on the declared value and check origin claims under trade agreements.</p>

<p>UK government export guidance on <a href="https://www.business.gov.uk/export-from-uk/learn/categories/funding-financing-and-getting-paid/get-paid/how-create-export-invoice/" target="_blank" rel="noopener noreferrer">how to create a commercial invoice for export</a> lists fields that never appear on a domestic tax invoice: gross and net weights, package counts and markings, HS codes, agreed Incoterms, country of origin, transport details and itemised freight and insurance. On the import side, US regulations at 19 CFR 141.86 require similar details, plus the port of entry, all charges up to the first US port, and an English-language version or translation.</p>

<p>Getting the classification right is critical, which is why we have a separate guide on the <a href="/blog/hs-code-on-commercial-invoice">HS code on a commercial invoice</a> and another on <a href="/blog/incoterms-on-invoice">Incoterms on an invoice</a>.</p>

<h2>Field-by-Field Comparison</h2>

<table>
<thead>
<tr><th>Field</th><th>Tax invoice</th><th>Commercial invoice</th></tr>
</thead>
<tbody>
<tr><td>Sequential invoice number and date</td><td>Required</td><td>Required</td></tr>
<tr><td>Seller name and address</td><td>Required</td><td>Required</td></tr>
<tr><td>Seller VAT or GST number</td><td>Required</td><td>Often included; EORI or exporter ID commonly needed</td></tr>
<tr><td>Buyer name and address</td><td>Required (full invoices)</td><td>Required, plus consignee if different</td></tr>
<tr><td>Description of goods</td><td>Enough to identify them</td><td>Detailed: material, use, model, grade</td></tr>
<tr><td>Quantity and unit price</td><td>Required</td><td>Required, with units of measure</td></tr>
<tr><td>Tax rate and tax amount</td><td>Required for each rate</td><td>Not normally shown</td></tr>
<tr><td>Tax point or time of supply</td><td>Required</td><td>Not required</td></tr>
<tr><td>HS or tariff code</td><td>Required in some GST systems (such as HSN in India)</td><td>Required</td></tr>
<tr><td>Country of origin</td><td>Not required</td><td>Required</td></tr>
<tr><td>Weights and packages</td><td>Not required</td><td>Required</td></tr>
<tr><td>Incoterms</td><td>Not required</td><td>Required</td></tr>
<tr><td>Freight and insurance</td><td>Only if charged to the customer</td><td>Itemised separately</td></tr>
<tr><td>Export declaration or reason for 0%</td><td>Recommended when zero-rating</td><td>Customs reference often added</td></tr>
</tbody>
</table>

<h2>When You Need One or Both</h2>

<ul>
<li><strong>Domestic sale of goods or services, VAT or GST registered seller:</strong> tax invoice only.</li>
<li><strong>Domestic sale, seller not registered:</strong> an ordinary invoice; you must not call it a tax invoice or show tax you are not registered to charge. See <a href="/blog/tax-invoice-vs-retail-invoice">tax invoice vs retail invoice</a> for how this works in some systems.</li>
<li><strong>Export of goods, registered seller:</strong> a tax invoice for your own tax records, usually showing 0%, plus a commercial invoice for customs. Some businesses combine them where every field fits.</li>
<li><strong>Export of goods, unregistered seller:</strong> a commercial invoice, and your normal sales invoice for bookkeeping.</li>
<li><strong>Cross-border services:</strong> no commercial invoice. A tax invoice with the right zero-rating or reverse-charge note, if you are registered. Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers this.</li>
<li><strong>Samples or gifts with no sale:</strong> no tax invoice, but customs still needs a commercial or proforma invoice showing a value for customs purposes.</li>
</ul>

<h2>Worked Example: One UK Seller, Two Sales</h2>

<p>A UK-based, VAT-registered maker of leather bags sells the same product, priced at £45 per bag excluding VAT, to two customers in the same week.</p>

<h3>Sale 1: domestic customer in Manchester</h3>

<table>
<thead>
<tr><th>Line</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>50 bags x £45.00</td><td>£2,250.00</td></tr>
<tr><td>VAT at 20%</td><td>£450.00</td></tr>
<tr><td><strong>Total payable</strong></td><td><strong>£2,700.00</strong></td></tr>
</tbody>
</table>

<p>Document needed: a full VAT invoice. The customer can reclaim the £450 as input tax if it is VAT registered. No commercial invoice is needed because the goods stay in the UK. You can sanity-check VAT figures with our <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h3>Sale 2: retailer in the United States, CIF New York</h3>

<table>
<thead>
<tr><th>Line</th><th>Tax invoice</th><th>Commercial invoice</th></tr>
</thead>
<tbody>
<tr><td>200 bags x £45.00</td><td>£9,000.00</td><td>£9,000.00</td></tr>
<tr><td>Freight to New York</td><td>£350.00</td><td>£350.00 (itemised)</td></tr>
<tr><td>Insurance</td><td>£50.00</td><td>£50.00 (itemised)</td></tr>
<tr><td>UK VAT</td><td>0% zero-rated export: £0.00</td><td>Not shown</td></tr>
<tr><td><strong>Total</strong></td><td><strong>£9,400.00</strong></td><td><strong>£9,400.00</strong></td></tr>
<tr><td>Extra fields</td><td>VAT number, tax point, zero-rate note</td><td>HS code, origin: United Kingdom, 4 cartons, 92 kg gross, Incoterm CIF New York, EORI</td></tr>
</tbody>
</table>

<p>Both documents show the same £9,400 total, which matters: customs and tax authorities can compare them. The US importer's broker uses the commercial invoice to declare the goods, and US duty is assessed under US rules. In the UK, the seller keeps the tax invoice plus evidence of export to support zero-rating; without that evidence, VAT could become due at 20%. Our guide to <a href="/blog/zero-rated-vs-exempt-vat">zero-rated vs exempt VAT</a> explains why zero-rated sales still belong on your VAT return.</p>

<h2>Country Differences Worth Knowing</h2>

<ul>
<li><strong>United Kingdom:</strong> full VAT invoice rules apply to the tax invoice. Exports of goods can be zero-rated with evidence. Commercial invoices accompany the export declaration made through the Customs Declaration Service.</li>
<li><strong>India:</strong> under the CGST Rules, an export tax invoice must carry an endorsement stating whether the supply is made on payment of integrated tax or under bond or letter of undertaking without payment. Our sibling guide on <a href="/blog/lut-under-gst">LUT under GST</a> covers the second route.</li>
<li><strong>United States:</strong> no VAT, so no tax invoice in the VAT sense. Imports need a commercial invoice meeting CBP requirements.</li>
<li><strong>UAE and GCC:</strong> tax invoices follow VAT law; exports of goods can be zero-rated with proof of export, and a commercial invoice is filed with customs.</li>
</ul>

<h2>Who Checks Each Document, and When</h2>

<p>Understanding the timing of checks helps explain why the two documents are built differently.</p>

<h3>The commercial invoice is checked at the border, in days</h3>

<p>A commercial invoice is scrutinised almost immediately. The carrier needs it before accepting an international shipment, the exporter's customs declaration draws on it, and the importer's broker uses it to file the entry in the destination country. If a description is vague or a value looks wrong, the goods can sit in a warehouse while customs asks questions, and storage charges build up. Speed and clarity matter more than accounting detail.</p>

<h3>The tax invoice is checked later, often years later</h3>

<p>A tax invoice is rarely examined when it is issued. It is checked when your customer's accountant reclaims input tax, when you prepare your VAT or GST return, and above all during a tax audit, which may come years after the sale. That is why tax invoice rules focus on permanence and traceability: unbroken sequential numbering, the exact tax point, registration numbers and amounts in local currency.</p>

<h3>Why the values must agree</h3>

<p>Customs records and tax records can be compared. An exported consignment declared to customs at one value and recorded on your VAT return at another is an obvious flag in either direction. Keeping both documents built from the same line items, prices and totals is the simplest protection against an awkward enquiry.</p>

<h2>How to Prepare Both Documents Without Mistakes</h2>

<ol>
<li><strong>Start from the sales contract or proforma.</strong> Confirm prices, quantities, Incoterms and currency with the buyer first. Our guide to <a href="/blog/proforma-invoice-guide">proforma vs commercial invoices</a> explains this pre-shipment step.</li>
<li><strong>Issue the tax invoice in your normal sequence.</strong> Use your domestic numbering, show your tax number and the correct rate, and add a zero-rating or export note where it applies.</li>
<li><strong>Build the commercial invoice from the same data.</strong> Copy line items and totals, then add HS codes, origin, weights, packages and Incoterms.</li>
<li><strong>Cross-reference the two.</strong> Quote the tax invoice number, PO number and any proforma number on the commercial invoice.</li>
<li><strong>Check totals match.</strong> The commercial value should equal the real transaction price, with freight and insurance itemised.</li>
<li><strong>Send each to the right people.</strong> Tax invoice to the buyer's accounts team; commercial invoice to the carrier, broker and buyer with the shipping documents.</li>
<li><strong>Keep both with your export evidence</strong> for as long as your tax and customs record-keeping rules require.</li>
</ol>

<h2>Common Mistakes</h2>

<ul>
<li><strong>Charging domestic VAT on an export</strong> because the invoice template defaults to the standard rate.</li>
<li><strong>Different values on the two documents</strong>, which invites questions from both customs and the tax authority.</li>
<li><strong>Vague descriptions</strong> such as "parts" or "samples" on the commercial invoice, which cause customs holds.</li>
<li><strong>Missing country of origin</strong>, which can block preferential duty rates under trade agreements.</li>
<li><strong>Calling a document a tax invoice when you are not registered</strong>, which can create a liability for the tax shown.</li>
</ul>

<h2>Create Your Tax or Commercial Invoice</h2>

<p>The tax invoice vs commercial invoice question comes down to audience: the tax authority for one, customs for the other. Get the shared basics right on both, including numbering, descriptions, prices and totals, and add the specialist fields each authority needs. Build either document in minutes with our <a href="/invoice-generator">invoice generator</a>, using a clear layout such as the <a href="/invoice-templates/classic">classic invoice template</a>. This article is general information, not tax, customs or legal advice; check current rules with your tax authority or customs broker before you ship.</p>
`,
  },
  {
    slug: "proforma-invoice-for-customs",
    title: "Proforma Invoice for Customs: When It Is Accepted and What to Do",
    description:
      "Can you ship on a proforma invoice? When customs accepts one, the US missing-invoice rule, bank and permit uses, and how to convert it to a commercial invoice.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "proforma-invoice-guide",
      "commercial-invoice-template",
      "hs-code-on-commercial-invoice",
      "incoterms-on-invoice",
    ],
    faqs: [
      {
        q: "Can I use a proforma invoice for customs clearance?",
        a: "Only in limited cases. Customs authorities normally expect a commercial invoice showing the final transaction. A proforma is commonly accepted for shipments with no sale, such as free samples, repairs, returns or goods sent for exhibition, where it states a value for customs purposes. In the US, an importer who lacks the commercial invoice can file a pro forma under 19 CFR 141.85, but must post a bond and produce the real invoice later.",
      },
      {
        q: "Is a proforma invoice legally binding?",
        a: "A proforma invoice is generally treated as a quotation or offer in invoice format, not a demand for payment. It becomes part of a binding agreement only if the buyer accepts it, for example by signing it or paying the deposit it requests. Even then, it is not a tax invoice or accounting document. HMRC's VAT manual says a pro-forma has no place in the books of the trader issuing or receiving it.",
      },
      {
        q: "When should a proforma invoice be converted to a commercial invoice?",
        a: "Convert it when the goods are ready to ship and the final details are known: actual quantities packed, final prices, freight and insurance charges, weights, package count and shipping date. Issue the commercial invoice with its own number, reference the proforma number on it, and deduct any deposit already paid against the proforma so the balance due is correct.",
      },
      {
        q: "Can a buyer reclaim VAT on a proforma invoice?",
        a: "No. In the UK, HMRC guidance says a pro-forma invoice is not acceptable evidence for reclaiming input tax, because a claim must be supported by a valid VAT invoice. The seller should issue a proper VAT invoice once payment is received or the supply is made. Similar rules apply in most VAT and GST systems, so buyers should wait for the final tax invoice before claiming.",
      },
      {
        q: "Why do banks ask for a proforma invoice?",
        a: "Buyers often need a proforma to arrange payment before goods ship. Banks use it to open a letter of credit, process an advance payment or approve a foreign currency transfer, and in some countries importers need it to apply for an import licence or foreign exchange allocation. The proforma shows the bank exactly what the buyer intends to pay for, at what price and on what terms.",
      },
      {
        q: "Do the proforma and commercial invoice need to match?",
        a: "They should be consistent, but they do not have to be identical. The commercial invoice must reflect what was actually shipped and sold, so quantities, freight or prices can change if both parties agree. Large unexplained differences can cause problems, especially under a letter of credit, where the bank checks documents strictly against the credit terms. Note any agreed changes and keep the correspondence that approves them.",
      },
      {
        q: "What does 'pro forma' mean on a customs document?",
        a: "Pro forma means 'as a matter of form'. On a customs document it signals that the invoice is provisional or that no sale has taken place, so the values shown are for customs purposes only. Many shippers add wording such as 'No commercial value, value for customs purposes only' for samples, and HMRC suggests a pro-forma be clearly marked, preferably with the words 'This is not a VAT invoice'.",
      },
      {
        q: "Do I need both a proforma and a commercial invoice for every export?",
        a: "No. A proforma is optional and mainly useful when the buyer pays in advance, needs a bank document, or must obtain an import permit before shipping. A commercial invoice is the document customs normally requires for every commercial export and import of goods. Repeat customers on open credit terms often skip the proforma and go straight from purchase order to commercial invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A proforma invoice for customs is usually only accepted in limited cases: shipments with no sale (samples, repairs, gifts, temporary imports) or as a temporary substitute when the commercial invoice is not yet available. For a normal sale, customs values and clears goods on the final commercial invoice, so treat the proforma as a pre-shipment quote and convert it before the goods ship.</p>

<p>Exporters often send both documents for the same order, which is why the question of using a proforma invoice for customs comes up so often at the shipping stage. If you want the general definitions first, read our <a href="/blog/proforma-invoice-guide">proforma invoice guide</a>. This guide focuses on the customs and shipping side: which document customs accepts, when a proforma is allowed at the border, how to convert one into the other, and a worked example where quantities change between quote and shipment. You can create either document with our <a href="/invoice-generator">free invoice generator</a>.</p>

<p>If you want the basics of what a proforma is and how it differs from a quote, start with our <a href="/blog/proforma-invoice-guide">proforma invoice guide</a>. For a full export field checklist, see our <a href="/blog/commercial-invoice-template">commercial invoice template</a>.</p>

<h2>Proforma Invoice vs Commercial Invoice at the Border</h2>

<table>
<thead>
<tr><th>Feature</th><th>Proforma invoice</th><th>Commercial invoice</th></tr>
</thead>
<tbody>
<tr><td>When issued</td><td>Before shipment, often before production</td><td>At shipment, when final details are known</td></tr>
<tr><td>Purpose</td><td>Confirm terms, request deposit, support bank or permit applications</td><td>Customs declaration, final bill, proof of the sale</td></tr>
<tr><td>Binding?</td><td>An offer until accepted</td><td>Records a completed sale</td></tr>
<tr><td>Accounting record?</td><td>No</td><td>Yes, recorded as a sale</td></tr>
<tr><td>Customs clearance</td><td>Limited: no-sale shipments or temporary substitute</td><td>Standard document for commercial shipments</td></tr>
<tr><td>Values</td><td>Estimated freight, insurance and quantities</td><td>Actual quantities and charges</td></tr>
<tr><td>Tax reclaim</td><td>Cannot support a VAT or GST claim</td><td>Supports tax records; may double as a tax invoice if compliant</td></tr>
<tr><td>Marking</td><td>Clearly labelled "Proforma"</td><td>Labelled "Commercial Invoice"</td></tr>
</tbody>
</table>

<h2>What Each Document Should Show</h2>

<p>Many fields overlap, which is why a proforma is often used as the draft for the commercial invoice. The differences are in what is estimated and what is final.</p>

<table>
<thead>
<tr><th>Field</th><th>Proforma invoice</th><th>Commercial invoice</th></tr>
</thead>
<tbody>
<tr><td>Title</td><td>"Proforma Invoice"</td><td>"Commercial Invoice"</td></tr>
<tr><td>Number</td><td>Separate proforma series</td><td>Main invoice sequence, quoting the proforma number</td></tr>
<tr><td>Seller and buyer details</td><td>Yes</td><td>Yes, plus consignee if different</td></tr>
<tr><td>Goods description</td><td>Yes</td><td>Yes, detailed enough for customs classification</td></tr>
<tr><td>Quantity</td><td>Ordered quantity</td><td>Quantity actually shipped</td></tr>
<tr><td>Unit price and currency</td><td>Agreed price</td><td>Final price</td></tr>
<tr><td>Freight and insurance</td><td>Estimates</td><td>Actual amounts, itemised</td></tr>
<tr><td>Incoterms</td><td>Proposed</td><td>Agreed</td></tr>
<tr><td>HS code and origin</td><td>Often included</td><td>Required</td></tr>
<tr><td>Weights, packages, marks</td><td>Estimated or omitted</td><td>Required</td></tr>
<tr><td>Validity date</td><td>Yes, for example 30 days</td><td>Not applicable</td></tr>
<tr><td>Payment details</td><td>Deposit or advance requested</td><td>Balance due after deposits</td></tr>
</tbody>
</table>

<p>A clean layout helps both documents get processed quickly by banks, brokers and customs officers. Structured designs such as the <a href="/invoice-templates/corporate">corporate invoice template</a> keep shipping and payment details easy to find.</p>

<h2>Which Document Does Customs Accept?</h2>

<p>For a normal commercial sale, customs authorities expect a commercial invoice. It shows the actual transaction price, which is the starting point for customs valuation, along with the description, HS code and origin needed to calculate duty. UK export guidance and US import regulations both list fields such as quantities, unit prices, itemised freight and insurance, and country of origin as standard commercial invoice content.</p>

<h3>When a proforma is accepted at the border</h3>

<ul>
<li><strong>No sale has taken place.</strong> Free samples, warranty replacements, goods returned for repair, exhibition stock and gifts have no transaction price. A proforma states a fair value for customs purposes, often marked "no commercial value".</li>
<li><strong>Temporary exports.</strong> Tools, equipment or display goods that will come back may travel on a proforma alongside the relevant temporary admission paperwork.</li>
<li><strong>The commercial invoice is not yet available.</strong> Some customs systems let an importer clear goods on a substitute invoice and supply the real one later, under strict conditions.</li>
</ul>

<h3>The US rule for a missing commercial invoice</h3>

<p>The US gives a clear example of how a proforma works as a stopgap. Under <a href="https://www.law.cornell.edu/cfr/text/19/141.91" target="_blank" rel="noopener noreferrer">19 CFR 141.91</a>, if the required invoice is not available at entry, the importer files a declaration and a pro forma invoice under section 141.85, posts a bond equal to one and one-half times the invoice value, and must produce the real invoice within 120 days of filing the entry summary (50 days if it is needed for statistical purposes). In other words, the proforma buys time; it does not replace the commercial invoice.</p>

<p>Rules differ by country and change over time, so confirm with the carrier or customs broker before shipping on a proforma alone.</p>

<h2>Why a Proforma Is Not an Accounting or Tax Document</h2>

<p>A proforma does not record a sale, so it should not go into your sales ledger or your customer's purchase ledger. HMRC's VAT manual page <a href="https://www.gov.uk/hmrc-internal-manuals/vat-trader-records/vatrec9010" target="_blank" rel="noopener noreferrer">VATREC9010 on pro-forma invoices</a> says a pro-forma should be clearly described as such, preferably endorsed "This is not a VAT invoice", and has no place in the books of account of the trader issuing or receiving it.</p>

<p>Practically, that means:</p>
<ul>
<li>Do not give a proforma a number from your main invoice sequence. Use a separate series such as PF-2026-001 so your <a href="/blog/invoice-numbering-system">invoice numbering system</a> has no gaps.</li>
<li>A deposit received against a proforma is recorded as a customer deposit or advance, not revenue, until the goods ship and the commercial invoice is issued.</li>
<li>If you are VAT or GST registered, issue a proper tax invoice when the tax point is triggered. See how tax and commercial documents fit together in our guide to the <a href="/blog/tax-invoice-vs-commercial-invoice">tax invoice vs commercial invoice</a>.</li>
</ul>

<h2>Proformas, Banks and Import Permits</h2>

<p>Outside customs clearance, the proforma does its most important work with banks and licensing authorities before anything ships.</p>

<ul>
<li><strong>Advance payments.</strong> Many buyers, especially first-time customers, pay part or all of the order before production. Their bank may ask for a proforma to justify an international transfer.</li>
<li><strong>Letters of credit.</strong> A buyer's bank uses the proforma to draft the credit terms: goods description, amount, Incoterm, shipping deadline and required documents. The commercial invoice you present later must then match those terms exactly.</li>
<li><strong>Import licences and foreign exchange.</strong> In some countries, importers need a proforma to apply for an import licence or for permission to buy foreign currency. Delays at this stage are common, so state a realistic validity period on the proforma.</li>
</ul>

<p>Because the proforma may become the basis for a letter of credit, accuracy matters more than many sellers realise. A typo in the description or a wrong Incoterm can be copied into the credit and then cause a discrepancy when you present your commercial invoice for payment.</p>

<h2>How the Two Documents Fit Into an Export Order</h2>

<ol>
<li><strong>Buyer enquiry and quote.</strong> The buyer asks for prices. You may send an informal quote; our comparison of <a href="/blog/invoice-vs-quotation">invoice vs quotation</a> explains the difference.</li>
<li><strong>Proforma invoice.</strong> You issue a proforma with prices, quantities, Incoterms, estimated freight and insurance, payment terms and validity date.</li>
<li><strong>Buyer acceptance and payment.</strong> The buyer signs, pays a deposit, or uses the proforma to open a <a href="/blog/letter-of-credit-invoice">letter of credit</a> or get an import permit.</li>
<li><strong>Production and packing.</strong> Final quantities, weights and package counts become known. A <a href="/blog/packing-slip-vs-invoice">packing list</a> is prepared.</li>
<li><strong>Commercial invoice.</strong> You issue the commercial invoice with actual figures and a new number, referencing the proforma and PO.</li>
<li><strong>Shipping and customs.</strong> The commercial invoice travels with the bill of lading or air waybill and is used for export and import declarations. See <a href="/blog/bill-of-lading-vs-commercial-invoice">bill of lading vs commercial invoice</a>.</li>
<li><strong>Balance payment.</strong> The buyer pays the balance shown on the commercial invoice, after the deposit.</li>
</ol>

<h2>Worked Example: Converting a Proforma When the Order Changes</h2>

<p>A furniture hardware exporter agrees to sell 500 brass door handles to a buyer abroad at $12.00 each, CIF destination port, with a 30% deposit before production.</p>

<h3>The proforma invoice (PF-2026-014)</h3>

<table>
<thead>
<tr><th>Line</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>500 door handles x $12.00</td><td>$6,000.00</td></tr>
<tr><td>Estimated freight</td><td>$400.00</td></tr>
<tr><td>Estimated insurance</td><td>$60.00</td></tr>
<tr><td><strong>Proforma total</strong></td><td><strong>$6,460.00</strong></td></tr>
<tr><td>Deposit requested (30%)</td><td>$1,938.00</td></tr>
</tbody>
</table>

<p>Check: 30% of $6,460 is $1,938. The buyer pays the deposit, which the exporter records as a customer deposit, not as revenue.</p>

<h3>What changed before shipment</h3>

<p>A plating defect means only 480 handles pass inspection, and the buyer agrees in writing to accept 480. The actual freight quote comes in at $385.00 and insurance at $58.00.</p>

<h3>The commercial invoice (INV-2026-0213)</h3>

<table>
<thead>
<tr><th>Line</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>480 door handles x $12.00</td><td>$5,760.00</td></tr>
<tr><td>Freight (actual)</td><td>$385.00</td></tr>
<tr><td>Insurance (actual)</td><td>$58.00</td></tr>
<tr><td><strong>Invoice total</strong></td><td><strong>$6,203.00</strong></td></tr>
<tr><td>Less deposit received against PF-2026-014</td><td>($1,938.00)</td></tr>
<tr><td><strong>Balance due</strong></td><td><strong>$4,265.00</strong></td></tr>
</tbody>
</table>

<p>The commercial invoice also carries the HS code, country of origin, net and gross weights, number of cartons and the Incoterm, plus the references PF-2026-014 and the buyer's PO number. Customs values the shipment on the actual $5,760 of goods and the itemised charges, not on the original $6,000 proforma. The exporter records revenue of $6,203 and clears the $1,938 deposit against it, leaving $4,265 in accounts receivable.</p>

<h3>What if the order had been cancelled?</h3>

<p>Suppose the buyer had cancelled before production instead. Because the proforma was never a sale, there is no invoice to credit and no revenue to reverse. The exporter simply refunds the $1,938 deposit, or keeps an agreed cancellation fee if the proforma terms allowed one, and issues a normal invoice only for that fee. This is one of the main advantages of using a proforma for first orders: it commits both sides to terms without creating an accounting entry until goods actually move.</p>

<h3>Shipping a free sample instead</h3>

<p>If the exporter had sent ten sample handles free of charge, there would be no sale and no commercial invoice in the usual sense. A proforma showing 10 x $12.00 = $120.00, marked "free sample, no commercial value, value for customs purposes only", would let customs assess any duty on a realistic value.</p>

<h2>Converting a Proforma: Checklist</h2>

<ul>
<li><strong>New title and number:</strong> change "Proforma Invoice" to "Commercial Invoice" and use your main invoice sequence.</li>
<li><strong>Actual quantities:</strong> update to what was packed and shipped.</li>
<li><strong>Actual charges:</strong> replace estimated freight and insurance with real amounts, itemised.</li>
<li><strong>Shipping data:</strong> add weights, package count and marks, transport details and shipping date.</li>
<li><strong>Customs data:</strong> confirm the <a href="/blog/hs-code-on-commercial-invoice">HS code</a>, country of origin and <a href="/blog/incoterms-on-invoice">Incoterms</a>.</li>
<li><strong>References:</strong> quote the proforma number, PO number and any letter of credit number.</li>
<li><strong>Payments:</strong> deduct deposits received so the balance due is correct.</li>
<li><strong>Declaration and signature:</strong> add any declaration the destination country requires.</li>
</ul>

<h2>Common Proforma and Commercial Invoice Mistakes</h2>

<ul>
<li><strong>Shipping on the proforma.</strong> Sending goods with only a proforma for a normal sale often leads to customs holds while the broker requests the real invoice.</li>
<li><strong>Forgetting to update quantities.</strong> Declaring 500 units when 480 were shipped creates a mismatch with the packing list and can trigger an inspection.</li>
<li><strong>Booking the proforma as a sale.</strong> This overstates revenue and accounts receivable, and if the order is cancelled you have a phantom debt to reverse.</li>
<li><strong>Undervaluing samples.</strong> "No commercial value" does not mean zero; customs still expects a realistic value for duty purposes.</li>
<li><strong>Inconsistent documents under a letter of credit.</strong> Banks check documents strictly. Descriptions and amounts on the commercial invoice must match the credit terms.</li>
<li><strong>Missing currency.</strong> Always state the currency on both documents. Our guide to the <a href="/blog/foreign-currency-invoice">foreign currency invoice</a> explains how to show exchange rates.</li>
</ul>

<h2>Create Your Proforma or Commercial Invoice</h2>

<p>The proforma invoice vs commercial invoice choice is really about timing: the proforma sets expectations before shipment, and the commercial invoice records what actually crossed the border. Keep both consistent, label them clearly and let the commercial invoice reflect the final facts. Build either one in minutes with our <a href="/invoice-generator">invoice generator</a>. This guide is general information, not customs or legal advice; check the destination country's requirements with your carrier or customs broker before shipping.</p>
`,
  },
];
