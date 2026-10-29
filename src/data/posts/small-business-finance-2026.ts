import type { PostDraft } from "../blog";

export const SMALL_BUSINESS_FINANCE_2026_POSTS: PostDraft[] = [
  {
    slug: "profit-and-loss-statement",
    title: "Profit and Loss Statement: Small Business Template & Example",
    description:
      "Learn how to build a profit and loss statement for a small business, with a free template layout, a worked example and the mistakes that distort profit.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "income-statement-vs-balance-sheet",
      "balance-sheet-small-business",
      "gross-profit-vs-net-profit",
      "cash-flow-management",
    ],
    faqs: [
      {
        q: "What is a profit and loss statement in simple terms?",
        a: "A profit and loss statement, also called a P&L or income statement, lists the money a business earned and the costs it incurred over a period such as a month, quarter or year. Subtract the costs from the revenue and you get the profit or loss for that period. It answers one question: did the business make money from its operations during that time, and where did the money go?",
      },
      {
        q: "Is a profit and loss statement the same as an income statement?",
        a: "Yes. Profit and loss statement, P&L, income statement and statement of operations all describe the same report. Larger companies and accountants often say income statement, while small business owners, lenders and bookkeeping apps commonly say P&L. The structure is the same: revenue at the top, then cost of goods sold, gross profit, operating expenses and net profit or loss at the bottom.",
      },
      {
        q: "How do I make a profit and loss statement for a small business?",
        a: "Choose the period, then total your sales revenue for it. Subtract cost of goods sold if you sell products to get gross profit. Group the remaining costs into categories such as rent, wages, software, marketing and insurance, and subtract their total to get operating profit. Finally add or subtract other income, interest and income tax to reach net profit. Bookkeeping software builds this automatically from categorized transactions.",
      },
      {
        q: "What is the difference between a P&L and a balance sheet?",
        a: "A P&L covers a period of time and shows whether you made a profit. A balance sheet is a snapshot on a single date and shows what the business owns, what it owes and the owner's equity. The two connect: net profit from the P&L increases equity on the balance sheet, unless the owner takes it out as draws or dividends.",
      },
      {
        q: "Can a business be profitable on its P&L and still run out of cash?",
        a: "Yes. Under accrual accounting, revenue counts when you invoice, not when the customer pays, so a P&L can show a healthy profit while unpaid invoices sit in receivables. Loan principal repayments, inventory purchases and owner draws also use cash without appearing as expenses. That is why you should review a cash flow statement or forecast alongside the P&L.",
      },
      {
        q: "How often should a small business prepare a P&L?",
        a: "Monthly is the most useful rhythm for most small businesses, because it lets you spot rising costs or falling margins while there is still time to act. Many owners also review a year-to-date P&L and compare each month with the same month last year. At minimum you need an annual P&L to prepare your tax return and to show lenders or investors.",
      },
      {
        q: "Do sole proprietors need a profit and loss statement?",
        a: "In the US, a sole proprietor reports business income and expenses on Schedule C, which is essentially a simplified P&L laid out by the IRS. You are not required to produce a separate formatted statement, but keeping a monthly P&L makes Schedule C far easier and gives you something to show a lender, landlord or mortgage underwriter who asks for proof of self-employed income.",
      },
      {
        q: "Should owner's draws appear on the P&L?",
        a: "No. For a sole proprietorship or single-member LLC taxed as one, money the owner takes out is a draw, which reduces equity on the balance sheet. It is not an expense on the P&L. Salaries paid to employees, and in some entity types a salary paid to an owner-employee through payroll, are expenses. Ask an accountant how your entity type treats owner pay.",
      },
      {
        q: "What is a good net profit margin for a small business?",
        a: "There is no single good number, because margins vary widely by industry. A software or consulting business may keep a large share of revenue as profit, while a grocery store or restaurant often works on thin margins. Compare your net profit margin with your own past results and with industry benchmarks from your trade association or accountant rather than with a general rule of thumb.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A profit and loss statement (P&amp;L, or income statement) shows a business's revenue, costs and resulting profit or loss over a set period. The basic layout is revenue, minus cost of goods sold, equals gross profit; minus operating expenses equals operating profit; then interest and tax lead to net profit.</p>

<p>If a lender, investor or tax preparer has asked for your P&amp;L, or you simply want to know whether the business is actually making money, this guide gives you a template layout you can copy, a fully worked small business example with the arithmetic shown, and a checklist for producing one every month. We also cover how the profit and loss statement connects to your balance sheet and cash flow, and the mistakes that most often make profit look better or worse than it really is.</p>

<p>One note on scope: the <a href="/invoice-generator">free invoice generator</a> on this site creates professional PDF invoices in your browser. It does not keep books or produce financial reports, so you will build your P&amp;L in a spreadsheet or bookkeeping software. The invoices you issue, however, are the raw material for the revenue line, so clean invoicing makes the whole statement easier.</p>

<h2>What is a profit and loss statement?</h2>
<p>A P&amp;L summarizes the income a business earned and the expenses it incurred during a specific period, typically a month, quarter or year. It is one of three core financial statements, alongside the balance sheet (what you own and owe on a given date) and the cash flow statement (how cash moved in and out).</p>
<p>The P&amp;L answers practical questions: Are sales growing? Are costs rising faster than sales? Which expense categories are eating the margin? Is the business profitable enough to pay the owner, repay a loan or hire someone?</p>
<p>Different names describe the same report:</p>
<ul>
<li><strong>Profit and loss statement</strong> or <strong>P&amp;L</strong>, common among small businesses and lenders.</li>
<li><strong>Income statement</strong>, the standard accounting term.</li>
<li><strong>Statement of operations</strong> or <strong>statement of earnings</strong>, used in some corporate reports.</li>
</ul>

<h2>The parts of a P&amp;L</h2>
<p>Every profit and loss statement follows the same top-to-bottom logic. Revenue sits at the top (the "top line") and net profit sits at the bottom (the "bottom line").</p>
<h3>1. Revenue (sales)</h3>
<p>Income from selling your products or services during the period, after returns, refunds and discounts given. If you charge sales tax or VAT, that tax is not revenue; you collected it on behalf of the government, so it belongs on the balance sheet as a liability until you pay it over.</p>
<h3>2. Cost of goods sold (COGS)</h3>
<p>The direct costs of the items you sold: inventory, materials, direct labor and freight in. Service businesses may have little or no COGS, though some include subcontractor costs tied directly to client work. Our guide to the <a href="/blog/cost-of-goods-sold">cost of goods sold formula</a> explains what belongs here.</p>
<h3>3. Gross profit</h3>
<p>Revenue minus COGS. Divide gross profit by revenue to get the gross margin, which tells you how much of each sales dollar is left to cover overhead.</p>
<h3>4. Operating expenses</h3>
<p>The costs of running the business that are not tied to individual sales: rent, wages and payroll taxes, software, marketing, insurance, professional fees, utilities, travel and depreciation.</p>
<h3>5. Operating profit</h3>
<p>Gross profit minus operating expenses, sometimes called operating income or EBIT (earnings before interest and taxes). This shows how profitable the core business is.</p>
<h3>6. Other income and expenses</h3>
<p>Items outside normal operations, such as interest earned, interest paid on loans, or a gain or loss on selling equipment.</p>
<h3>7. Net profit (net income)</h3>
<p>What is left after everything, including income tax where the business itself pays it. For sole proprietors and many pass-through entities, income tax is paid by the owner personally, so the business P&amp;L often stops at pre-tax profit. The difference between the profit lines is explained in detail in <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a>.</p>

<h2>Profit and loss statement template</h2>
<p>Copy this layout into a spreadsheet. Add or remove expense lines so the categories match how you actually spend money, but keep them consistent from month to month so comparisons mean something.</p>
<table><thead><tr><th>Line</th><th>Item</th><th>How to calculate</th></tr></thead><tbody>
<tr><td>A</td><td>Gross sales</td><td>Total invoiced or rung up in the period</td></tr>
<tr><td>B</td><td>Returns, refunds and discounts</td><td>Credit notes and discounts given</td></tr>
<tr><td>C</td><td><strong>Net revenue</strong></td><td>A minus B</td></tr>
<tr><td>D</td><td>Cost of goods sold</td><td>Beginning inventory + purchases − ending inventory</td></tr>
<tr><td>E</td><td><strong>Gross profit</strong></td><td>C minus D</td></tr>
<tr><td>F</td><td>Operating expenses (itemized)</td><td>Rent, wages, software, marketing, insurance and so on</td></tr>
<tr><td>G</td><td><strong>Operating profit</strong></td><td>E minus total of F</td></tr>
<tr><td>H</td><td>Other income less other expenses</td><td>Interest earned minus interest paid, asset gains or losses</td></tr>
<tr><td>I</td><td><strong>Profit before tax</strong></td><td>G plus H</td></tr>
<tr><td>J</td><td>Income tax (if paid by the business)</td><td>Per your tax position</td></tr>
<tr><td>K</td><td><strong>Net profit</strong></td><td>I minus J</td></tr>
</tbody></table>
<p>A single-step P&amp;L simply lists all revenue, then all expenses, and subtracts one from the other. It is fine for a freelancer with few transactions. The multi-step layout above is more useful once you sell products, because it separates gross profit from operating profit.</p>

<h2>Worked example: a small business P&amp;L for one quarter</h2>
<p>Here is an illustrative example for a fictional business, "Harbor Print Studio", which sells custom printed merchandise and design services. The figures are made up to show the arithmetic; they are not benchmarks.</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Gross sales</td><td>$62,000</td></tr>
<tr><td>Less refunds and discounts</td><td>($2,000)</td></tr>
<tr><td><strong>Net revenue</strong></td><td><strong>$60,000</strong></td></tr>
<tr><td>Cost of goods sold</td><td>($24,000)</td></tr>
<tr><td><strong>Gross profit</strong></td><td><strong>$36,000</strong></td></tr>
<tr><td>Rent</td><td>($6,000)</td></tr>
<tr><td>Wages and payroll taxes</td><td>($15,000)</td></tr>
<tr><td>Software and subscriptions</td><td>($900)</td></tr>
<tr><td>Marketing</td><td>($2,100)</td></tr>
<tr><td>Insurance</td><td>($600)</td></tr>
<tr><td>Accounting and legal</td><td>($1,200)</td></tr>
<tr><td>Depreciation</td><td>($1,200)</td></tr>
<tr><td><strong>Total operating expenses</strong></td><td><strong>($27,000)</strong></td></tr>
<tr><td><strong>Operating profit</strong></td><td><strong>$9,000</strong></td></tr>
<tr><td>Interest on equipment loan</td><td>($500)</td></tr>
<tr><td><strong>Profit before tax</strong></td><td><strong>$8,500</strong></td></tr>
</tbody></table>
<p>The arithmetic, step by step:</p>
<ul>
<li>Net revenue: $62,000 − $2,000 = $60,000.</li>
<li>Gross profit: $60,000 − $24,000 = $36,000. Gross margin: $36,000 ÷ $60,000 = 60%.</li>
<li>Operating expenses: $6,000 + $15,000 + $900 + $2,100 + $600 + $1,200 + $1,200 = $27,000.</li>
<li>Operating profit: $36,000 − $27,000 = $9,000. Operating margin: $9,000 ÷ $60,000 = 15%.</li>
<li>Profit before tax: $9,000 − $500 = $8,500. Net margin before tax: $8,500 ÷ $60,000 ≈ 14.2%.</li>
</ul>
<p>What the owner learns: gross margin is healthy, but wages take a quarter of revenue ($15,000 ÷ $60,000 = 25%). If next quarter's sales dip to $50,000 at the same 60% gross margin, gross profit falls to $30,000 and, with unchanged overhead, operating profit drops to $3,000. That sensitivity is exactly what a <a href="/blog/break-even-point">break-even point calculation</a> makes visible.</p>

<h2>How to create a profit and loss statement step by step</h2>
<ol>
<li><strong>Pick the period.</strong> Monthly for management, quarterly for trend review, annually for tax.</li>
<li><strong>Choose your accounting method.</strong> Cash basis records income when paid and expenses when paid; accrual records them when earned or incurred. See <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> for which suits you, and use the same method every period.</li>
<li><strong>Total revenue.</strong> Pull every invoice dated in the period (accrual) or every customer payment received (cash). A consistent <a href="/tools/invoice-number-generator">invoice numbering sequence</a> makes it easy to confirm nothing is missing.</li>
<li><strong>Calculate COGS.</strong> Count inventory at the start and end of the period and add purchases.</li>
<li><strong>Categorize expenses.</strong> Assign each bank and card transaction to a category. Good <a href="/blog/bookkeeping-basics">bookkeeping basics</a> make this a quick monthly job instead of a year-end scramble.</li>
<li><strong>Reconcile first.</strong> Match your records to bank statements so the totals are complete. Our <a href="/blog/month-end-close-checklist">month-end close checklist</a> lists the steps.</li>
<li><strong>Subtract and review.</strong> Work down the template, then compare with last month and the same month last year.</li>
</ol>

<h2>How the P&amp;L connects to the balance sheet and cash flow</h2>
<p>The P&amp;L tells you whether you made a profit. It does not tell you how much cash you have. Net profit flows into equity on the <a href="/blog/balance-sheet-small-business">small business balance sheet</a>, while timing differences, such as unpaid customer invoices, inventory you bought but have not sold, and loan principal repayments, mean profit and cash rarely match. A business can show a profit and still struggle to make payroll, which is why owners should read the P&amp;L next to a cash flow report.</p>
<table><thead><tr><th>Report</th><th>Covers</th><th>Main question it answers</th></tr></thead><tbody>
<tr><td>P&amp;L (income statement)</td><td>A period (month, quarter, year)</td><td>Did we make a profit?</td></tr>
<tr><td>Balance sheet</td><td>A single date</td><td>What do we own and owe?</td></tr>
<tr><td>Cash flow statement</td><td>A period</td><td>Where did cash come from and go?</td></tr>
</tbody></table>

<h2>P&amp;L for sole proprietors and freelancers</h2>
<p>In the US, sole proprietors and single-member LLCs taxed as sole proprietorships report profit or loss on Schedule C, which follows the same logic: gross receipts, returns, cost of goods sold, gross profit, then expense lines such as advertising, car and truck expenses, insurance, rent and supplies. The IRS describes the form on its <a href="https://www.irs.gov/forms-pubs/about-schedule-c-form-1040" target="_blank" rel="noopener noreferrer">About Schedule C page</a>. If you keep your monthly P&amp;L categories close to the Schedule C lines, year-end filing becomes mostly copying numbers. Our <a href="/blog/schedule-c-for-freelancers">Schedule C guide for freelancers</a> walks through it.</p>

<h2>Common mistakes on a profit and loss statement</h2>
<ul>
<li><strong>Counting sales tax as revenue.</strong> Tax collected for the government inflates sales and profit. Record it as a liability.</li>
<li><strong>Including owner draws as expenses.</strong> Draws reduce equity, not profit.</li>
<li><strong>Recording loan principal as an expense.</strong> Only the interest belongs on the P&amp;L; principal repayments reduce the loan balance.</li>
<li><strong>Expensing big equipment purchases inconsistently.</strong> Assets are usually depreciated over time for financial reporting, even when tax rules allow faster deductions. Ask your accountant how to treat them.</li>
<li><strong>Mixing personal and business spending.</strong> A separate business bank account is the simplest fix.</li>
<li><strong>Switching methods or categories mid-year.</strong> Comparisons break when the basis changes.</li>
<li><strong>Ignoring unbilled work.</strong> On an accrual P&amp;L, work completed but not yet invoiced can understate revenue. Invoice promptly.</li>
</ul>

<h2>Monthly P&amp;L checklist</h2>
<ul>
<li>All invoices for the period are issued and recorded.</li>
<li>Bank, card and payment processor accounts are reconciled.</li>
<li>Every transaction has an expense category, with receipts saved.</li>
<li>Inventory is counted or estimated consistently if you sell products.</li>
<li>Sales tax collected is recorded as a liability, not income.</li>
<li>Owner draws and loan principal are excluded from expenses.</li>
<li>Gross margin, operating margin and net margin are calculated.</li>
<li>Results are compared with last month and the same month last year.</li>
<li>Any surprising line is investigated before the report is shared.</li>
</ul>

<h2>Reading your P&amp;L: what to look for</h2>
<p>Once you have a few months of statements, look at trends rather than single figures. Is gross margin holding steady as sales grow? If it falls, supplier prices may be rising or discounts may be too generous. Are any operating expenses growing faster than revenue? Subscriptions and contractor costs often creep up unnoticed. Is net profit enough to pay the owner a fair wage and set aside tax? If not, the fix is usually pricing, costs or volume, and the P&amp;L tells you which line to work on.</p>
<p>A quick ratio set for any P&amp;L: gross margin (gross profit ÷ revenue), operating margin (operating profit ÷ revenue) and net margin (net profit ÷ revenue). Track all three monthly in a small table and you will see problems months before they reach the bank balance.</p>

<h2>Next step</h2>
<p>Start with the revenue line. Make sure every job you complete becomes an invoice the same week; create it from one of the <a href="/invoice-templates">free invoice templates</a>, download the PDF and log it in your books. Then set aside an hour at the start of each month to run the checklist above. For more on financial reports and cash, browse the <a href="/blog/category/business-finance">business finance articles</a>.</p>
`,
  },
  {
    slug: "balance-sheet-small-business",
    title: "Balance Sheet Example for Small Business: Free Template",
    description:
      "See a balance sheet example for a small business, copy a free template layout, and learn how assets, liabilities and equity balance, with ratios to check.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "accounting-equation",
      "retained-earnings",
      "capex-vs-opex",
      "profit-and-loss-statement",
      "working-capital",
      "accounts-receivable-turnover-ratio",
    ],
    faqs: [
      {
        q: "What is a balance sheet in simple terms?",
        a: "A balance sheet is a snapshot of a business's finances on one specific date. It lists what the business owns (assets), what it owes to others (liabilities) and what is left for the owners (equity). It is called a balance sheet because total assets always equal total liabilities plus equity. If the two sides do not match, something has been recorded incorrectly and needs to be found.",
      },
      {
        q: "What is the balance sheet formula?",
        a: "The accounting equation is assets = liabilities + equity. You can rearrange it to find any one part: equity = assets − liabilities, or liabilities = assets − equity. For example, a business with $80,000 of assets and $30,000 of liabilities has $50,000 of equity. Every transaction you record affects at least two accounts, which is why the equation stays in balance in double-entry bookkeeping.",
      },
      {
        q: "Does a small business need a balance sheet?",
        a: "Most do, even if no law requires one for a very small sole proprietorship. Banks and lenders typically ask for one with a loan application, many tax returns for corporations and partnerships include balance sheet schedules, and it is the only report that shows debts, receivables and owner equity together. Bookkeeping software produces it automatically if your transactions are recorded properly.",
      },
      {
        q: "What is the difference between a balance sheet and a profit and loss statement?",
        a: "A profit and loss statement covers a period, such as a month or year, and shows revenue, expenses and profit. A balance sheet shows financial position on a single date. They are linked because the period's net profit, less any owner draws or dividends, is added to equity on the balance sheet. You need both to understand a business fully.",
      },
      {
        q: "Are unpaid invoices on the balance sheet?",
        a: "Yes, under accrual accounting. Invoices you have issued but not yet been paid for appear as accounts receivable, a current asset. Bills you have received from suppliers but not paid appear as accounts payable, a current liability. On a pure cash-basis set of books, unpaid invoices may not be recorded at all, which is one reason lenders often prefer accrual-based statements.",
      },
      {
        q: "What are current and non-current assets?",
        a: "Current assets are cash and items you expect to convert into cash or use up within about a year, such as receivables, inventory and prepaid expenses. Non-current, or long-term, assets are held for longer, such as equipment, vehicles, buildings and some intangible assets. Liabilities are split the same way into current ones due within a year and long-term ones due later.",
      },
      {
        q: "What does it mean if equity is negative?",
        a: "Negative equity means total liabilities exceed total assets, so the business owes more than it owns on paper. It can happen after a run of losses, heavy owner withdrawals or large borrowing. It is a warning sign for lenders and suppliers, though a young business funded by owner loans can show it temporarily. Review it with an accountant if your balance sheet shows negative equity.",
      },
      {
        q: "How often should I prepare a balance sheet?",
        a: "Most small businesses review a balance sheet at each month-end close, because it is the best way to catch errors such as an unreconciled bank account, a forgotten loan or sales tax that was never paid over. At minimum, prepare one at your financial year end. Lenders may also ask for an interim balance sheet dated close to the application.",
      },
      {
        q: "Where do owner draws go on the balance sheet?",
        a: "Owner draws reduce equity. In a sole proprietorship or partnership they are usually tracked in a draws account inside the equity section, and closed into the owner's capital at year end. They are not an expense, so they do not reduce profit on the profit and loss statement. Corporations pay owners through salary, which is an expense, or dividends, which reduce retained earnings.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A balance sheet lists what a business owns (assets), what it owes (liabilities) and the owners' stake (equity) on a single date, and assets always equal liabilities plus equity. The balance sheet example below shows a small business layout you can copy, with every total calculated so you can follow the arithmetic.</p>

<p>Lenders ask for it, accountants build year-end accounts from it, and it is the one report that shows whether your business is financially solid or quietly stacking up debt. Yet many small business owners only look at profit. This guide explains each section in plain language, gives you a template, walks through a complete balance sheet example for a small business, and shows the three or four ratios worth checking every month.</p>

<p>A quick note on tools: our <a href="/invoice-generator">invoice generator</a> creates PDF invoices in your browser; it does not keep accounts or produce financial statements. Your balance sheet comes from bookkeeping software or a spreadsheet. But the invoices you issue become accounts receivable, one of the most important lines on it, so accurate invoicing directly affects the numbers here.</p>

<h2>What is a balance sheet?</h2>
<p>A balance sheet, also called a statement of financial position, shows the financial position of a business at a moment in time, such as close of business on December 31. Compare it with the <a href="/blog/profit-and-loss-statement">profit and loss statement</a>, which measures performance over a period. If the P&amp;L is a video of the year, the balance sheet is a photo taken on the last day.</p>
<p>It rests on the accounting equation:</p>
<p><strong>Assets = Liabilities + Equity</strong></p>
<p>Everything the business owns was paid for either with borrowed money or other people's credit (liabilities) or with the owners' money and retained profits (equity). That is why the two sides must balance.</p>

<h2>The three sections explained</h2>
<h3>Assets</h3>
<p>Resources the business owns or controls that have economic value.</p>
<ul>
<li><strong>Current assets</strong>, expected to become cash or be used within about a year: cash and bank balances, accounts receivable (unpaid customer invoices), inventory and prepaid expenses such as insurance paid in advance.</li>
<li><strong>Non-current assets</strong>, held longer: equipment, vehicles, furniture, property and intangibles such as purchased software or trademarks. These are usually shown at cost less accumulated depreciation.</li>
</ul>
<h3>Liabilities</h3>
<p>Amounts the business owes to others.</p>
<ul>
<li><strong>Current liabilities</strong>, due within about a year: accounts payable (supplier bills), credit card balances, wages owed, sales tax or VAT collected but not yet paid, customer deposits and the portion of loans due in the next 12 months.</li>
<li><strong>Long-term liabilities</strong>: loan balances due after 12 months, equipment finance and some leases.</li>
</ul>
<h3>Equity</h3>
<p>The owners' residual claim. For a sole proprietor this is usually owner's capital plus profits minus draws. For a corporation it is share capital plus retained earnings. Our explainer on <a href="/blog/llc-vs-sole-proprietorship">LLC vs sole proprietorship</a> covers how the business structure changes the equity labels.</p>

<h2>Balance sheet template</h2>
<p>Use this layout in a spreadsheet. Adjust the line items to match your accounts, but keep the order: most liquid assets first, then the liabilities due soonest.</p>
<table><thead><tr><th>Section</th><th>Line items</th></tr></thead><tbody>
<tr><td>Current assets</td><td>Cash; accounts receivable (less allowance for doubtful accounts); inventory; prepaid expenses</td></tr>
<tr><td>Non-current assets</td><td>Equipment and vehicles (less accumulated depreciation); property; intangible assets</td></tr>
<tr><td><strong>Total assets</strong></td><td>Current + non-current</td></tr>
<tr><td>Current liabilities</td><td>Accounts payable; credit cards; accrued wages; sales tax payable; customer deposits; current portion of loans</td></tr>
<tr><td>Long-term liabilities</td><td>Bank loans and equipment finance due after 12 months</td></tr>
<tr><td><strong>Total liabilities</strong></td><td>Current + long-term</td></tr>
<tr><td>Equity</td><td>Owner's capital or share capital; retained earnings; less draws or dividends</td></tr>
<tr><td><strong>Total liabilities and equity</strong></td><td>Must equal total assets</td></tr>
</tbody></table>

<h2>Balance sheet example for a small business</h2>
<p>Here is an illustrative balance sheet example for a fictional landscaping company, "Greenline Services LLC", as of December 31. The numbers are invented to show the arithmetic, not to suggest what is typical.</p>
<table><thead><tr><th>Assets</th><th>Amount</th></tr></thead><tbody>
<tr><td>Cash in bank</td><td>$18,000</td></tr>
<tr><td>Accounts receivable</td><td>$12,500</td></tr>
<tr><td>Inventory (plants, materials)</td><td>$4,500</td></tr>
<tr><td>Prepaid insurance</td><td>$1,000</td></tr>
<tr><td><strong>Total current assets</strong></td><td><strong>$36,000</strong></td></tr>
<tr><td>Equipment and truck at cost</td><td>$60,000</td></tr>
<tr><td>Less accumulated depreciation</td><td>($22,000)</td></tr>
<tr><td><strong>Net non-current assets</strong></td><td><strong>$38,000</strong></td></tr>
<tr><td><strong>Total assets</strong></td><td><strong>$74,000</strong></td></tr>
</tbody></table>
<table><thead><tr><th>Liabilities and equity</th><th>Amount</th></tr></thead><tbody>
<tr><td>Accounts payable</td><td>$6,000</td></tr>
<tr><td>Credit card</td><td>$2,000</td></tr>
<tr><td>Sales tax payable</td><td>$1,500</td></tr>
<tr><td>Accrued wages</td><td>$3,000</td></tr>
<tr><td>Current portion of truck loan</td><td>$6,500</td></tr>
<tr><td><strong>Total current liabilities</strong></td><td><strong>$19,000</strong></td></tr>
<tr><td>Truck loan, due after 12 months</td><td>$15,000</td></tr>
<tr><td><strong>Total liabilities</strong></td><td><strong>$34,000</strong></td></tr>
<tr><td>Owner's capital, January 1</td><td>$28,000</td></tr>
<tr><td>Net profit for the year</td><td>$36,000</td></tr>
<tr><td>Less owner draws</td><td>($24,000)</td></tr>
<tr><td><strong>Total equity</strong></td><td><strong>$40,000</strong></td></tr>
<tr><td><strong>Total liabilities and equity</strong></td><td><strong>$74,000</strong></td></tr>
</tbody></table>
<p>Checking the arithmetic:</p>
<ul>
<li>Current assets: $18,000 + $12,500 + $4,500 + $1,000 = $36,000.</li>
<li>Net equipment: $60,000 − $22,000 = $38,000. Total assets: $36,000 + $38,000 = $74,000.</li>
<li>Current liabilities: $6,000 + $2,000 + $1,500 + $3,000 + $6,500 = $19,000. Total liabilities: $19,000 + $15,000 = $34,000.</li>
<li>Equity: $28,000 + $36,000 − $24,000 = $40,000.</li>
<li>Check: $34,000 + $40,000 = $74,000, which equals total assets. The sheet balances.</li>
</ul>

<h2>Ratios to read from your balance sheet</h2>
<p>Using the Greenline figures:</p>
<table><thead><tr><th>Ratio</th><th>Formula</th><th>Greenline result</th><th>What it tells you</th></tr></thead><tbody>
<tr><td>Working capital</td><td>Current assets − current liabilities</td><td>$36,000 − $19,000 = $17,000</td><td>Short-term cushion</td></tr>
<tr><td>Current ratio</td><td>Current assets ÷ current liabilities</td><td>$36,000 ÷ $19,000 ≈ 1.89</td><td>Ability to pay near-term bills</td></tr>
<tr><td>Quick ratio</td><td>(Cash + receivables) ÷ current liabilities</td><td>$30,500 ÷ $19,000 ≈ 1.61</td><td>Liquidity without selling inventory</td></tr>
<tr><td>Debt-to-equity</td><td>Total liabilities ÷ total equity</td><td>$34,000 ÷ $40,000 = 0.85</td><td>How much is funded by borrowing</td></tr>
</tbody></table>
<p>There is no universal "good" figure; compare with your own history and your industry. For a deeper look at the first two, read our guide to the <a href="/blog/working-capital">working capital formula</a>. If receivables make up a large share of current assets, the <a href="/blog/accounts-receivable-turnover-ratio">accounts receivable turnover ratio</a> shows how quickly customers actually pay.</p>

<h2>How to prepare a balance sheet step by step</h2>
<ol>
<li><strong>Pick the date.</strong> Usually the last day of a month or your financial year.</li>
<li><strong>Reconcile cash.</strong> Match each bank and card account to its statement. Our <a href="/blog/bank-reconciliation">bank reconciliation guide</a> shows how.</li>
<li><strong>List receivables.</strong> Run an aging report of unpaid invoices. Remove any that are truly uncollectible following the <a href="/blog/bad-debt-write-off">bad debt write-off process</a>.</li>
<li><strong>Count inventory.</strong> Value stock on hand at cost.</li>
<li><strong>Update fixed assets.</strong> Add purchases, remove disposals and record depreciation for the period.</li>
<li><strong>List liabilities.</strong> Unpaid bills, card balances, payroll owed, tax collected and loan statements. Split loans into current and long-term portions.</li>
<li><strong>Record deferred items.</strong> Customer deposits for work not yet done are liabilities, as explained in <a href="/blog/deferred-revenue-vs-accrued-revenue">deferred vs accrued revenue</a>.</li>
<li><strong>Calculate equity and check the balance.</strong> If assets do not equal liabilities plus equity, find the error before using the report.</li>
</ol>

<h2>How invoicing shows up on the balance sheet</h2>
<p>Every invoice you issue increases accounts receivable; every payment received moves that amount into cash. Invoices that sit unpaid for months inflate current assets on paper while leaving the bank account thin. Sales tax shown on your invoices becomes a liability, not income, until you pay it over. And deposits you invoice before starting a job are liabilities until the work is delivered. Clear, numbered invoices with due dates make each of these lines easier to verify. See the <a href="/blog/accounts-receivable-guide">accounts receivable guide</a> for how to manage that balance.</p>

<h2>Service business vs product business balance sheets</h2>
<p>The structure never changes, but the lines that matter do. A freelance designer or consultant usually has a short balance sheet: cash, receivables, a laptop or two, a credit card balance and owner's equity. For that kind of business, receivables are often the largest asset, so the key question is how quickly invoices turn into cash.</p>
<p>A retailer, manufacturer or contractor carries more: inventory, materials, vehicles, equipment loans and supplier bills. Inventory can tie up a large amount of cash, and its value depends on a careful count. A business like this should watch the quick ratio, which leaves inventory out, as well as the current ratio.</p>
<table><thead><tr><th>Line</th><th>Typical service business</th><th>Typical product business</th></tr></thead><tbody>
<tr><td>Accounts receivable</td><td>Often the largest asset</td><td>Varies; retail may have little</td></tr>
<tr><td>Inventory</td><td>Usually none</td><td>Often significant</td></tr>
<tr><td>Equipment</td><td>Computers, small tools</td><td>Machinery, vehicles, fixtures</td></tr>
<tr><td>Customer deposits</td><td>Common for project work</td><td>Common for custom orders</td></tr>
<tr><td>Accounts payable</td><td>Small; software and contractors</td><td>Larger; suppliers of stock</td></tr>
</tbody></table>

<h2>Cash basis vs accrual balance sheets</h2>
<p>If you keep cash-basis books, your balance sheet may show no receivables or payables at all, because income is recorded only when paid and bills only when settled. That makes it simpler, but it hides money customers owe you and money you owe suppliers. Lenders often prefer accrual-basis statements for that reason. If you work on a cash basis, keep a separate list of open invoices and unpaid bills so you know the full picture, and ask your accountant whether switching makes sense as you grow.</p>

<h2>Common balance sheet mistakes</h2>
<ul>
<li><strong>Not reconciling bank accounts.</strong> Cash is the easiest line to verify and the most common source of errors.</li>
<li><strong>Leaving dead receivables on the books.</strong> Invoices you will never collect overstate assets and equity.</li>
<li><strong>Forgetting sales tax payable.</strong> Tax collected is owed to the government; leaving it out overstates equity.</li>
<li><strong>Putting the whole loan in one line.</strong> Split it into the amount due within 12 months and the remainder.</li>
<li><strong>Treating owner draws as expenses.</strong> They reduce equity directly, not profit.</li>
<li><strong>Never recording depreciation.</strong> Equipment shown at original cost for years overstates assets.</li>
<li><strong>Using a "plug" to force a balance.</strong> A suspense or adjustment entry hides an error that can grow.</li>
</ul>

<h2>Balance sheet checklist</h2>
<ul>
<li>All bank, card and payment processor accounts reconciled to statements.</li>
<li>Receivables tie to the aging report; uncollectible items written off.</li>
<li>Inventory counted and valued consistently.</li>
<li>Fixed asset register updated, with depreciation recorded.</li>
<li>Accounts payable match supplier statements.</li>
<li>Sales tax, payroll liabilities and customer deposits recorded.</li>
<li>Loans split into current and long-term portions using lender statements.</li>
<li>Equity rolls forward correctly from the prior period.</li>
<li>Total assets equal total liabilities plus equity without a plug.</li>
</ul>

<h2>Using the balance sheet to make decisions</h2>
<p>Read it alongside your <a href="/blog/cash-flow-forecast">cash flow forecast</a>. A strong current ratio with most of current assets tied up in old receivables is weaker than it looks. Rising debt-to-equity with flat profit suggests borrowing is funding losses. Steadily growing equity, on the other hand, shows that the business is retaining value year after year. The SBA's guidance on how to <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">manage your business finances</a> recommends regular review of financial statements for exactly this reason.</p>

<h2>Next step</h2>
<p>Pull your receivables list today and check that every invoice on it is real, correct and being chased. Use the balance sheet example and template above to build your own as of last month-end, then repeat it every month. For related reading, browse the <a href="/blog/category/business-finance">business finance category</a>.</p>
`,
  },
  {
    slug: "break-even-point",
    title: "Break-Even Point Formula: How to Calculate It, with Examples",
    description:
      "Use the break-even point formula to find the sales you need to cover costs, in units and dollars, with worked examples for product and service businesses.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "contribution-margin",
      "unit-economics",
      "fixed-vs-variable-costs",
      "markup-vs-margin",
      "small-business-budget",
      "gross-profit-vs-net-profit",
    ],
    faqs: [
      {
        q: "What is the break-even point formula?",
        a: "Break-even point in units equals fixed costs divided by contribution margin per unit, where contribution margin per unit is the selling price minus the variable cost per unit. Break-even in sales dollars equals fixed costs divided by the contribution margin ratio, which is contribution margin per unit divided by price. At that level of sales the business makes neither a profit nor a loss.",
      },
      {
        q: "How do I calculate break-even point in sales dollars?",
        a: "First find the contribution margin ratio: (price − variable cost) ÷ price, or total contribution margin ÷ total sales. Then divide fixed costs by that ratio. For example, with fixed costs of $10,000 a month and a 40% contribution margin ratio, break-even sales are $10,000 ÷ 0.40 = $25,000 a month. This version works well when you sell many different products or services.",
      },
      {
        q: "What is the difference between fixed and variable costs?",
        a: "Fixed costs stay roughly the same regardless of how much you sell in a period, such as rent, insurance, salaries and software subscriptions. Variable costs rise and fall with each sale, such as materials, packaging, shipping, payment processing fees and sales commissions. Some costs are mixed, like a phone plan with a base fee plus usage, so split them into their fixed and variable parts.",
      },
      {
        q: "What is a contribution margin?",
        a: "Contribution margin is the amount each sale contributes toward covering fixed costs and then generating profit. Per unit, it is the selling price minus the variable cost of that unit. If you sell a product for $50 and it costs $20 in materials and fees, each sale contributes $30. Once total contributions exceed fixed costs, every additional sale adds its contribution to profit.",
      },
      {
        q: "How do I calculate break-even for a service business?",
        a: "Use hours, projects or clients as your unit. Divide monthly fixed costs by the contribution per hour or project, meaning the price minus variable costs such as subcontractors, materials or payment fees. A freelancer with $4,000 of monthly fixed costs and $80 of contribution per billable hour needs 50 billable hours a month to break even, before paying themselves a salary.",
      },
      {
        q: "How can I lower my break-even point?",
        a: "There are three levers: reduce fixed costs, reduce variable costs per unit, or raise prices. Raising prices or cutting variable costs increases the contribution margin, so fewer sales are needed. Cutting fixed costs lowers the amount that must be covered. Changing the sales mix toward higher-margin products also helps. Test each change with the formula before deciding.",
      },
      {
        q: "How do I include a target profit in break-even analysis?",
        a: "Add your target profit to fixed costs before dividing. Required units equal (fixed costs + target profit) ÷ contribution margin per unit. If fixed costs are $6,000, you want $3,000 of profit and each unit contributes $25, you need ($6,000 + $3,000) ÷ $25 = 360 units. This is sometimes called target profit analysis or a cost-volume-profit calculation.",
      },
      {
        q: "What are the limitations of break-even analysis?",
        a: "It assumes prices, variable costs and fixed costs stay constant across the range of sales, which is rarely exact. It also assumes everything you produce is sold and treats a mix of products as a single average. It says nothing about cash timing, so a business can reach break-even on paper while still waiting for customers to pay. Use it as a planning tool, not a forecast.",
      },
      {
        q: "Should the owner's salary count as a fixed cost?",
        a: "For planning, yes. If you leave out what you need to pay yourself, the break-even point shows only when the business stops losing money, not when it supports you. Many owners calculate two figures: break-even without owner pay and break-even including a realistic salary or draw. The second number is the one that tells you whether the business is truly sustainable.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The break-even point formula is fixed costs ÷ (price per unit − variable cost per unit). The result is the number of units you must sell to cover all costs with zero profit. To get the answer in sales dollars, divide fixed costs by the contribution margin ratio instead.</p>

<p>Break-even analysis answers one of the most practical questions in business: how much do I need to sell before I stop losing money? It helps you set prices, decide whether to sign a new lease or hire someone, and judge whether a new product is worth launching. This guide explains both versions of the break-even point formula, shows the calculator steps you can do in a spreadsheet, and works through examples for a product business and a service business, with every calculation shown.</p>

<p>Before you start, gather a recent <a href="/blog/profit-and-loss-statement">profit and loss statement</a>. Nearly every number you need is already on it; you just need to sort the costs into fixed and variable.</p>

<h2>What is the break-even point?</h2>
<p>The break-even point is the level of sales at which total revenue equals total costs. Below it you make a loss; above it you make a profit. It can be expressed as:</p>
<ul>
<li><strong>Units</strong>: products, hours, projects or customers.</li>
<li><strong>Sales dollars</strong>: revenue needed in a month or year.</li>
<li><strong>Time</strong>: how many months until cumulative profit covers your start-up investment (often called payback period).</li>
</ul>

<h2>The break-even point formula</h2>
<h3>Break-even in units</h3>
<p><strong>Break-even units = Fixed costs ÷ (Selling price per unit − Variable cost per unit)</strong></p>
<p>The bottom part, price minus variable cost, is the <strong>contribution margin per unit</strong>: the amount each sale contributes toward fixed costs and then profit.</p>
<h3>Break-even in sales dollars</h3>
<p><strong>Break-even sales = Fixed costs ÷ Contribution margin ratio</strong></p>
<p>where contribution margin ratio = (Price − Variable cost) ÷ Price. You can also calculate the ratio from totals: (Total sales − Total variable costs) ÷ Total sales. This version is handy when you sell many products at different prices.</p>
<h3>Break-even with a profit target</h3>
<p><strong>Required units = (Fixed costs + Target profit) ÷ Contribution margin per unit</strong></p>

<h2>Fixed vs variable costs</h2>
<p>Sorting costs correctly is the step most people get wrong. Fixed costs stay about the same each month whatever your sales volume; variable costs move with every sale.</p>
<table><thead><tr><th>Usually fixed</th><th>Usually variable</th><th>Often mixed (split them)</th></tr></thead><tbody>
<tr><td>Rent and lease payments</td><td>Raw materials and inventory</td><td>Utilities with a base charge</td></tr>
<tr><td>Salaried staff</td><td>Packaging and shipping</td><td>Phone and internet with usage fees</td></tr>
<tr><td>Insurance</td><td>Card and payment processing fees</td><td>Staff with base pay plus commission</td></tr>
<tr><td>Software subscriptions</td><td>Sales commissions</td><td>Vehicle costs (lease fixed, fuel variable)</td></tr>
<tr><td>Loan interest</td><td>Subcontractors paid per job</td><td>Marketing with a retainer plus per-lead fees</td></tr>
<tr><td>Accounting and legal retainers</td><td>Platform or marketplace fees</td><td>Hourly staff scheduled to demand</td></tr>
</tbody></table>
<p>If you sell products, your <a href="/blog/cost-of-goods-sold">cost of goods sold</a> is mostly variable cost. For a service business, variable costs are usually smaller: subcontractors, materials used on jobs and payment fees.</p>

<h2>Calculator steps: how to work out break-even</h2>
<ol>
<li><strong>List monthly fixed costs.</strong> Use an average of the last three to six months. Annual bills, such as insurance, should be divided by 12.</li>
<li><strong>Find variable cost per unit.</strong> Add every cost that occurs because of one sale.</li>
<li><strong>Set your selling price.</strong> Use the price customers actually pay after typical discounts, not list price. Sales tax is not part of the price for this purpose, since you pass it to the government; the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you separate it.</li>
<li><strong>Calculate contribution margin.</strong> Price minus variable cost per unit, and the ratio as margin ÷ price.</li>
<li><strong>Divide.</strong> Fixed costs ÷ contribution margin per unit gives units; fixed costs ÷ ratio gives dollars.</li>
<li><strong>Round up.</strong> You cannot sell 0.3 of a product or project, so round units up to the next whole number.</li>
<li><strong>Sanity-check.</strong> Compare the answer with your actual sales capacity and past months.</li>
</ol>
<p>In a spreadsheet, put fixed costs in cell B1, price in B2 and variable cost in B3. Then break-even units are =ROUNDUP(B1/(B2-B3),0) and break-even sales are =B1/((B2-B3)/B2).</p>

<h2>Worked example 1: a product business</h2>
<p>An illustrative candle maker sells candles for $30 each. Variable costs per candle are wax and wick $6, jar and label $4, packaging $2 and card fees about $1, so $13 in total. Monthly fixed costs are studio rent $1,200, insurance $100, website and software $150, and a part-time assistant $1,950, totaling $3,400.</p>
<ul>
<li>Contribution margin per unit: $30 − $13 = $17.</li>
<li>Contribution margin ratio: $17 ÷ $30 ≈ 0.567, or 56.7%.</li>
<li>Break-even units: $3,400 ÷ $17 = 200 candles a month.</li>
<li>Break-even sales: 200 × $30 = $6,000. Check with the ratio method: $3,400 ÷ 0.5667 ≈ $6,000.</li>
</ul>
<p>Now add a target. If the owner wants $2,500 a month of profit to pay themselves: ($3,400 + $2,500) ÷ $17 = $5,900 ÷ $17 ≈ 347.06, which rounds up to 348 candles.</p>
<h3>What if prices or costs change?</h3>
<table><thead><tr><th>Scenario</th><th>Contribution per candle</th><th>Break-even units</th></tr></thead><tbody>
<tr><td>Base case: $30 price, $13 variable</td><td>$17</td><td>$3,400 ÷ $17 = 200</td></tr>
<tr><td>Price up to $34</td><td>$21</td><td>$3,400 ÷ $21 ≈ 161.9 → 162</td></tr>
<tr><td>Supplier raises jar cost by $2</td><td>$15</td><td>$3,400 ÷ $15 ≈ 226.7 → 227</td></tr>
<tr><td>20% discount promotion ($24 price)</td><td>$11</td><td>$3,400 ÷ $11 ≈ 309.1 → 310</td></tr>
</tbody></table>
<p>The discount row is the lesson many owners miss: a 20% price cut raises the volume needed to break even by more than half (310 ÷ 200 = 1.55). Our guide to <a href="/blog/markup-vs-margin">markup vs margin</a> explains why discounts hit profit harder than they seem, and the article on <a href="/blog/discount-on-invoice">showing a discount on an invoice</a> covers how to present them clearly.</p>

<h2>Worked example 2: a service business</h2>
<p>An illustrative bookkeeping freelancer charges $60 an hour. Variable costs per billable hour are a share of software that scales with clients ($3) and payment fees of about 3% ($1.80), so $4.80. Monthly fixed costs are a co-working desk $300, insurance $80, other software $120, phone and internet $100, and a $3,000 salary the owner wants to draw, totaling $3,600.</p>
<ul>
<li>Contribution per billable hour: $60 − $4.80 = $55.20.</li>
<li>Break-even hours: $3,600 ÷ $55.20 ≈ 65.2, so 66 billable hours a month.</li>
<li>At roughly 4.3 weeks a month, that is 66 ÷ 4.3 ≈ 15.3 billable hours a week.</li>
</ul>
<p>Since many freelancers can bill only part of their working week, 15 billable hours may be realistic, but it leaves little room for slow months. If the rate rose to $70, contribution would be about $70 − $5.10 = $64.90 (fees rise with price), and break-even falls to $3,600 ÷ $64.90 ≈ 55.5, or 56 hours. Use our guide on <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a> to test pricing changes like this.</p>

<h2>Worked example 3: several products and a sales mix</h2>
<p>Most businesses sell more than one thing, so a single price and variable cost do not exist. The fix is to use the sales-dollar version of the break-even point formula with a weighted contribution margin ratio. Take an illustrative café with monthly fixed costs of $9,000 and this sales mix from last month's records:</p>
<table><thead><tr><th>Product line</th><th>Monthly sales</th><th>Variable costs</th><th>Contribution</th></tr></thead><tbody>
<tr><td>Coffee and drinks</td><td>$12,000</td><td>$3,000</td><td>$9,000</td></tr>
<tr><td>Food</td><td>$6,000</td><td>$3,600</td><td>$2,400</td></tr>
<tr><td>Retail beans and merchandise</td><td>$2,000</td><td>$1,200</td><td>$800</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$20,000</strong></td><td><strong>$7,800</strong></td><td><strong>$12,200</strong></td></tr>
</tbody></table>
<ul>
<li>Weighted contribution margin ratio: $12,200 ÷ $20,000 = 0.61, or 61%.</li>
<li>Break-even sales: $9,000 ÷ 0.61 ≈ $14,754 a month.</li>
<li>Margin of safety: ($20,000 − $14,754) ÷ $20,000 ≈ 26%, meaning sales could fall about a quarter before the café makes a loss.</li>
</ul>
<p>The answer holds only if the mix stays similar. If food grows to half of sales, the weighted ratio falls because food contributes just 40% ($2,400 ÷ $6,000), and break-even rises. Recalculate whenever the mix shifts noticeably.</p>

<h2>Break-even point and your budget</h2>
<p>Break-even analysis works best as part of a plan. When you build a <a href="/blog/small-business-budget">small business budget</a>, calculate break-even for the planned fixed costs; if the required sales look unrealistic, cut costs or rethink pricing before the year starts. Then use a <a href="/blog/cash-flow-forecast">cash flow forecast</a> to check timing, because break-even is measured in sales, not cash received. A month where you invoice $6,000 but customers pay in 45 days still leaves a cash gap.</p>
<p>The SBA suggests estimating your costs carefully before launching; its guide to <a href="https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs" target="_blank" rel="noopener noreferrer">calculating startup costs</a> is a useful companion when you are working out the break-even point for a new business.</p>

<h2>Common break-even mistakes</h2>
<ul>
<li><strong>Leaving out the owner's pay.</strong> A business that only breaks even without paying you is not sustainable.</li>
<li><strong>Using list price instead of actual price.</strong> Discounts, refunds and coupons lower the real contribution.</li>
<li><strong>Misclassifying costs.</strong> Treating payment fees or shipping as fixed understates variable cost per unit.</li>
<li><strong>Forgetting annual and irregular costs.</strong> Insurance, licenses and equipment repairs should be spread across months.</li>
<li><strong>Averaging very different products.</strong> If margins vary widely, use the sales-dollar method with a realistic sales mix.</li>
<li><strong>Treating break-even as a cash target.</strong> It ignores payment timing, loan principal and inventory purchases.</li>
<li><strong>Calculating once and never again.</strong> Recalculate when rent, wages, supplier prices or your prices change.</li>
</ul>

<h2>Break-even checklist</h2>
<ul>
<li>Fixed costs listed and averaged monthly, including annual bills divided by 12.</li>
<li>Owner's salary or draw included as a fixed cost.</li>
<li>Variable costs per unit include materials, shipping, payment fees and commissions.</li>
<li>Selling price reflects typical discounts, with sales tax excluded.</li>
<li>Break-even calculated in units and in sales dollars.</li>
<li>Profit target version calculated.</li>
<li>Scenarios tested for price increases, cost increases and discounts.</li>
<li>Result compared with actual capacity and recent sales.</li>
<li>Calculation repeated at least quarterly.</li>
</ul>

<h2>Next step</h2>
<p>Run the break-even point formula on last quarter's numbers, then compare the answer with what you actually sold. If you are above break-even but cash is still tight, the problem may be collection speed rather than profit. Send invoices promptly with a clear due date using the <a href="/invoice-generator">free invoice generator</a>, and explore more planning tools in the <a href="/blog/category/business-finance">business finance section</a>.</p>
`,
  },
  {
    slug: "gross-profit-vs-net-profit",
    title: "Gross Profit vs Net Profit: Formulas, Margins and Examples",
    description:
      "Gross profit vs net profit explained: the formula for each, how operating profit fits between them, margin calculations and a worked small business example.",
    category: "comparisons",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-calculate-profit-margin",
      "ebitda",
      "revenue-vs-profit",
      "cost-of-goods-sold",
      "profit-and-loss-statement",
      "markup-vs-margin",
    ],
    faqs: [
      {
        q: "What is the main difference between gross profit and net profit?",
        a: "Gross profit is revenue minus only the direct costs of what you sold, known as cost of goods sold. Net profit is what remains after every expense: cost of goods sold, operating expenses such as rent and wages, interest, and taxes paid by the business. Gross profit shows how profitable your products or services are; net profit shows how profitable the whole business is.",
      },
      {
        q: "What is the gross profit formula?",
        a: "Gross profit equals net revenue minus cost of goods sold. Net revenue is sales after returns, refunds and discounts. Cost of goods sold includes inventory or materials, direct labor and other costs directly tied to producing what you sold. If you had $100,000 of net sales and $40,000 of cost of goods sold, gross profit is $60,000 and gross margin is 60%.",
      },
      {
        q: "What is the net profit formula?",
        a: "Net profit equals total revenue minus total expenses. Put another way, it is gross profit minus operating expenses, minus interest and other non-operating costs, plus any other income, minus income tax where the business pays it. Net profit margin is net profit divided by revenue. For a sole proprietor, the business's net profit is usually taxed on the owner's personal return.",
      },
      {
        q: "Can gross profit be positive while net profit is negative?",
        a: "Yes, and it is common in young or growing businesses. Products may sell for more than they cost to make, giving a healthy gross profit, while rent, wages, marketing and loan interest exceed that gross profit. The result is a net loss. It means the business model can work at higher volume or lower overhead, but the current cost structure is too heavy.",
      },
      {
        q: "Where does operating profit fit?",
        a: "Operating profit sits between the two. It is gross profit minus operating expenses such as rent, salaries, software, marketing and depreciation, but before interest and taxes. It is sometimes called operating income or EBIT. Operating profit is useful because it shows how well the core business performs regardless of how it is financed or how it is taxed.",
      },
      {
        q: "Do service businesses have gross profit?",
        a: "They can. A service business with no inventory may treat direct costs such as subcontractors, project materials or billable staff wages as cost of services, giving a gross profit figure. A solo freelancer with almost no direct costs will see gross profit close to revenue, so net profit is the more meaningful number. Consistency matters more than the exact classification.",
      },
      {
        q: "Is net profit the same as take-home pay for a sole proprietor?",
        a: "Not exactly. Net profit on Schedule C is the business's profit before the owner's personal taxes. From it the owner still pays self-employment tax and income tax, and may set aside money for retirement or reinvestment. Owner draws are not expenses, so they do not reduce net profit. Your actual take-home amount is net profit minus those taxes and any money left in the business.",
      },
      {
        q: "Which is more important, gross profit or net profit?",
        a: "Both matter for different decisions. Gross profit and gross margin help you set prices, choose suppliers and decide which products to promote. Net profit and net margin tell you whether the business as a whole is sustainable, whether you can afford to grow, and what lenders will look at. Track both every month, along with operating profit, to see where a problem starts.",
      },
      {
        q: "Does gross profit include sales tax?",
        a: "No. Sales tax or VAT collected from customers is not revenue; you hold it for the tax authority and pay it over. Revenue for gross profit should be the net amount before tax. If your invoices show tax separately, use the subtotal before tax. Including tax in revenue would overstate both gross and net profit and could confuse your margin calculations.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Gross profit vs net profit comes down to which costs you subtract. Gross profit = revenue − cost of goods sold, showing how profitable your products or services are. Net profit = revenue − all expenses, including overhead, interest and taxes, showing what the whole business actually earned. Operating profit sits between them.</p>

<p>The terms appear on every profit and loss statement and in every conversation with a lender or accountant, yet they are easy to mix up. Confusing them leads to real mistakes: pricing that looks fine on gross margin but loses money overall, or cutting a product that actually carries the business. This comparison gives you the formulas, a side-by-side table, a worked example with all the arithmetic, and the ratios worth tracking.</p>

<h2>Gross profit vs net profit at a glance</h2>
<table><thead><tr><th></th><th>Gross profit</th><th>Net profit</th></tr></thead><tbody>
<tr><td>Formula</td><td>Net revenue − cost of goods sold</td><td>Net revenue − all expenses (COGS, operating, interest, tax)</td></tr>
<tr><td>Where on the P&amp;L</td><td>Near the top</td><td>The bottom line</td></tr>
<tr><td>Measures</td><td>Profitability of what you sell</td><td>Profitability of the whole business</td></tr>
<tr><td>Ignores</td><td>Rent, salaries, marketing, interest, tax</td><td>Nothing; every cost is included</td></tr>
<tr><td>Margin version</td><td>Gross margin = gross profit ÷ revenue</td><td>Net margin = net profit ÷ revenue</td></tr>
<tr><td>Best for deciding</td><td>Pricing, suppliers, product mix</td><td>Overall viability, growth, borrowing</td></tr>
<tr><td>Other names</td><td>Gross income, gross margin (in dollars)</td><td>Net income, bottom line, net earnings</td></tr>
</tbody></table>

<h2>What is gross profit?</h2>
<p>Gross profit is what is left from sales after paying the direct costs of producing or buying what you sold. Those direct costs are your <a href="/blog/cost-of-goods-sold">cost of goods sold (COGS)</a>: inventory, raw materials, direct labor, and freight to bring goods in.</p>
<p><strong>Gross profit = Net revenue − Cost of goods sold</strong></p>
<p><strong>Gross margin = Gross profit ÷ Net revenue × 100</strong></p>
<p>Gross profit does not care about your rent, your marketing budget or your loan. It isolates one question: does each sale make money before overhead? A falling gross margin usually points to rising supplier prices, too many discounts or a shift toward lower-margin products.</p>

<h2>What is net profit?</h2>
<p>Net profit is what remains after every cost of running the business has been deducted. It is the figure owners, lenders and tax authorities care about most.</p>
<p><strong>Net profit = Net revenue − COGS − Operating expenses − Interest − Taxes + Other income</strong></p>
<p><strong>Net margin = Net profit ÷ Net revenue × 100</strong></p>
<p>For a US sole proprietor, the business net profit reported on Schedule C is taxed on the owner's personal return, and the owner also generally owes self-employment tax on it. The IRS explains this on its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer">self-employment tax page</a>, and our guide to <a href="/blog/self-employment-tax">self-employment tax</a> walks through the calculation.</p>

<h2>Where operating profit fits</h2>
<p>Between the two sits operating profit:</p>
<p><strong>Operating profit = Gross profit − Operating expenses</strong></p>
<p>Operating expenses include rent, salaries, software, marketing, insurance, professional fees and depreciation. Operating profit, sometimes called EBIT, shows how well the core business performs before financing costs and taxes. It is useful for comparing your business year to year even if your loans or tax position change.</p>
<p>The full ladder on a <a href="/blog/profit-and-loss-statement">profit and loss statement</a> looks like this: revenue → gross profit → operating profit → profit before tax → net profit.</p>

<h2>Worked example: gross profit vs net profit for one business</h2>
<p>An illustrative online shop, "Fern &amp; Thread", sells handmade bags. Figures for one year, invented for this example:</p>
<table><thead><tr><th>Item</th><th>Amount</th><th>Running result</th></tr></thead><tbody>
<tr><td>Gross sales</td><td>$128,000</td><td></td></tr>
<tr><td>Returns and discounts</td><td>($8,000)</td><td>Net revenue $120,000</td></tr>
<tr><td>Cost of goods sold (materials, maker labor, inbound shipping)</td><td>($48,000)</td><td><strong>Gross profit $72,000</strong></td></tr>
<tr><td>Marketing and ads</td><td>($14,000)</td><td></td></tr>
<tr><td>Platform, payment and shipping-out fees</td><td>($9,000)</td><td></td></tr>
<tr><td>Studio rent and utilities</td><td>($12,000)</td><td></td></tr>
<tr><td>Part-time assistant</td><td>($16,000)</td><td></td></tr>
<tr><td>Software, insurance, accounting</td><td>($5,000)</td><td><strong>Operating profit $16,000</strong></td></tr>
<tr><td>Interest on a small business loan</td><td>($1,000)</td><td><strong>Net profit before owner taxes $15,000</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Net revenue: $128,000 − $8,000 = $120,000.</li>
<li>Gross profit: $120,000 − $48,000 = $72,000. Gross margin: $72,000 ÷ $120,000 = 60%.</li>
<li>Operating expenses: $14,000 + $9,000 + $12,000 + $16,000 + $5,000 = $56,000.</li>
<li>Operating profit: $72,000 − $56,000 = $16,000. Operating margin: $16,000 ÷ $120,000 ≈ 13.3%.</li>
<li>Net profit: $16,000 − $1,000 = $15,000. Net margin: $15,000 ÷ $120,000 = 12.5%.</li>
</ul>
<p>A 60% gross margin looks excellent, yet only 12.5 cents of each sales dollar reaches the bottom line. The gap is overhead: marketing and the assistant together take $30,000, which is half of everything between gross and net. That is the insight the gross profit vs net profit comparison exists to reveal.</p>

<h3>What happens if the owner offers a 10% discount?</h3>
<p>Suppose a 10% sitewide discount cuts net revenue to $108,000 with the same unit volume and the same costs. Gross profit falls to $108,000 − $48,000 = $60,000 (gross margin 55.6%). Every other cost is unchanged, so net profit falls by the full $12,000, from $15,000 to $3,000. A 10% revenue change wiped out 80% of net profit ($12,000 ÷ $15,000). The guide to <a href="/blog/markup-vs-margin">markup vs margin</a> explains why, and the <a href="/blog/break-even-point">break-even point guide</a> shows how much extra volume a discount needs to pay for itself.</p>

<h2>Gross profit vs net profit for a service business</h2>
<p>Service businesses often skip gross profit because they hold no inventory, but tracking it can still be revealing. Treat the direct costs of delivering client work, such as subcontractors, project materials and the wages of staff who do billable work, as cost of services.</p>
<p>Take an illustrative two-person web design studio with annual revenue of $180,000. It pays freelance developers $54,000 for client projects and $6,000 for stock assets and hosting resold to clients, so direct costs are $60,000. Overhead (the founders' salaries, software, a shared office, insurance and marketing) totals $95,000, and loan interest is $2,000.</p>
<ul>
<li>Gross profit: $180,000 − $60,000 = $120,000. Gross margin: $120,000 ÷ $180,000 ≈ 66.7%.</li>
<li>Operating profit: $120,000 − $95,000 = $25,000. Operating margin: $25,000 ÷ $180,000 ≈ 13.9%.</li>
<li>Net profit before owner taxes: $25,000 − $2,000 = $23,000. Net margin: $23,000 ÷ $180,000 ≈ 12.8%.</li>
</ul>
<p>If the studio sees gross margin slip on certain projects, it knows those jobs were underquoted or relied too heavily on subcontractors. That is a pricing problem, not an overhead problem, and it is invisible if you only look at net profit. Freelancers with almost no direct costs will find gross profit close to revenue, so for them the useful comparison is revenue against net profit, and the key decision is the rate itself; see <a href="/blog/how-to-set-freelance-rates">how to set freelance rates</a>.</p>

<h2>Other profit terms you may hear</h2>
<ul>
<li><strong>Contribution margin</strong>: revenue minus all variable costs, including variable selling costs that may not sit in COGS. Used in break-even analysis.</li>
<li><strong>EBITDA</strong>: earnings before interest, taxes, depreciation and amortization. Popular with lenders and buyers of businesses because it approximates operating cash generation, though it ignores the cost of replacing equipment.</li>
<li><strong>Profit before tax</strong>: net profit before income tax, often the last line on a sole proprietor's P&amp;L because the owner pays the tax personally.</li>
<li><strong>Retained earnings</strong>: accumulated net profit kept in a company rather than paid out, shown on the balance sheet.</li>
</ul>

<h2>How to improve each figure</h2>
<h3>To improve gross profit</h3>
<ul>
<li>Raise prices, or reduce discounting.</li>
<li>Negotiate supplier prices or buy in larger quantities if cash allows.</li>
<li>Reduce waste, spoilage and returns.</li>
<li>Shift the sales mix toward higher-margin products or services.</li>
</ul>
<h3>To improve net profit</h3>
<ul>
<li>Everything above, since it flows down.</li>
<li>Audit subscriptions and recurring overhead quarterly.</li>
<li>Measure marketing return; cut channels that do not pay back.</li>
<li>Refinance expensive debt.</li>
<li>Claim every legitimate business deduction. Our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> is a starting point.</li>
</ul>

<h2>Gross vs net in invoicing language</h2>
<p>"Gross" and "net" also appear on invoices with different meanings, which adds to the confusion. On an invoice, the net amount usually means the subtotal before tax, and the gross amount means the total including tax. "Net 30" means payment is due 30 days after the invoice date. None of these is gross profit or net profit, which are calculated across all sales for a period on your P&amp;L, not on a single invoice. When you create an invoice with the <a href="/invoice-generator">free invoice generator</a>, the subtotal, tax and total are calculated for you, but profit is something you work out in your books.</p>

<h2>Gross profit vs net profit: which to watch</h2>
<table><thead><tr><th>Question you are asking</th><th>Look at</th></tr></thead><tbody>
<tr><td>Are my prices high enough to cover what I sell?</td><td>Gross margin</td></tr>
<tr><td>Which products should I promote or drop?</td><td>Gross margin by product</td></tr>
<tr><td>Is overhead growing too fast?</td><td>Operating margin</td></tr>
<tr><td>Can I afford to hire or borrow?</td><td>Operating profit and net profit</td></tr>
<tr><td>How much will I owe in income tax?</td><td>Net profit (then talk to your tax preparer)</td></tr>
<tr><td>Is the business sustainable?</td><td>Net margin over several periods</td></tr>
</tbody></table>

<h2>Common mistakes</h2>
<ul>
<li><strong>Using gross profit as "what I made".</strong> Overhead still has to be paid from it.</li>
<li><strong>Including sales tax in revenue.</strong> Tax collected is not income and inflates both profits.</li>
<li><strong>Classifying costs inconsistently.</strong> Moving shipping or labor between COGS and operating expenses from month to month makes gross margin trends meaningless.</li>
<li><strong>Counting owner draws as expenses.</strong> They do not reduce net profit for a sole proprietor.</li>
<li><strong>Comparing margins across industries.</strong> A grocer and a consultant have very different normal margins.</li>
<li><strong>Mixing cash and accrual figures.</strong> Use one method; see <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a>.</li>
</ul>

<h2>Monthly profit review checklist</h2>
<ul>
<li>Net revenue recorded after returns, discounts and excluding sales tax.</li>
<li>COGS calculated with a consistent inventory method.</li>
<li>Gross profit and gross margin calculated.</li>
<li>Operating expenses categorized and totaled.</li>
<li>Operating profit and margin calculated.</li>
<li>Interest and other items included; net profit and net margin calculated.</li>
<li>All three margins compared with last month and last year.</li>
<li>Largest changes investigated and noted.</li>
</ul>

<h2>Next step</h2>
<p>Calculate gross and net margin for your last three months and put them side by side. If gross margin is healthy but net margin is thin, look at overhead; if gross margin itself is weak, look at pricing and direct costs. For more side-by-side explainers, browse the <a href="/blog/category/comparisons">comparisons category</a>.</p>
`,
  },
  {
    slug: "cost-of-goods-sold",
    title: "Cost of Goods Sold Formula (COGS): Examples and What Counts",
    description:
      "Learn the cost of goods sold formula with worked examples, what counts as COGS for product and service businesses, inventory methods and how COGS affects tax.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "inventory-management-spreadsheet",
      "gross-profit-vs-net-profit",
      "profit-and-loss-statement",
      "markup-vs-margin",
    ],
    faqs: [
      {
        q: "What is the cost of goods sold formula?",
        a: "Cost of goods sold equals beginning inventory plus purchases during the period minus ending inventory. Purchases include the cost of products or materials bought for resale or production, plus direct costs such as inbound freight and direct labor. For example, $10,000 of opening stock plus $30,000 of purchases minus $12,000 of closing stock gives a cost of goods sold of $28,000 for the period.",
      },
      {
        q: "What is included in cost of goods sold?",
        a: "COGS includes the direct costs of producing or acquiring the goods you sold: inventory bought for resale, raw materials, parts, direct labor for production workers, freight-in to get goods to your premises, and production overhead such as factory utilities in some methods. It excludes selling and administrative costs such as marketing, office rent, sales staff wages, outbound shipping to customers in many cases, and general software.",
      },
      {
        q: "Do service businesses have cost of goods sold?",
        a: "Pure service businesses often have no COGS in the inventory sense. Some report a cost of services or cost of revenue instead, covering subcontractors, materials used on jobs and the wages of staff who deliver client work. For US tax purposes, the IRS notes that a business providing only services generally does not need to fill in the cost of goods sold section of Schedule C. Ask your tax preparer how to classify mixed costs.",
      },
      {
        q: "Is COGS an expense?",
        a: "Yes. Cost of goods sold is an expense on the profit and loss statement, but it is shown separately from operating expenses, directly below revenue. Subtracting it from revenue gives gross profit. Inventory you have bought but not yet sold is not an expense yet; it sits on the balance sheet as an asset until it is sold, at which point it moves into COGS.",
      },
      {
        q: "How does COGS affect taxes?",
        a: "Cost of goods sold reduces gross income, so a higher COGS lowers taxable profit. That is why counting inventory accurately matters: overstating ending inventory understates COGS and overstates profit, while understating it does the reverse. In the US, sole proprietors calculate COGS in Part III of Schedule C. Some qualifying small businesses may use simplified inventory methods, so check current IRS guidance or ask a tax professional.",
      },
      {
        q: "What is the difference between FIFO and LIFO?",
        a: "They are inventory cost flow assumptions. FIFO, first in first out, assumes the oldest stock is sold first, so COGS reflects older prices. LIFO, last in first out, assumes the newest stock is sold first, so COGS reflects recent prices. When costs are rising, LIFO gives a higher COGS and lower taxable profit. LIFO is not permitted under IFRS, and US tax rules impose conditions on using it.",
      },
      {
        q: "Does shipping count as cost of goods sold?",
        a: "Shipping that brings inventory or materials to you, called freight-in, is generally part of the cost of the goods and therefore COGS. Shipping you pay to deliver orders to customers, called freight-out, is often treated as a selling expense, though some businesses include it in cost of sales. Choose one treatment, apply it consistently, and confirm with your accountant how it should appear on your tax return.",
      },
      {
        q: "Can I include my own labor in COGS?",
        a: "For a US sole proprietor, generally no. The Schedule C instructions direct you not to include amounts paid to yourself in the labor line of cost of goods sold, because an owner's draws are not deductible wages. Wages paid to employees who make the product can be included. If your business is a corporation paying you through payroll, the treatment can differ, so ask an accountant.",
      },
      {
        q: "What is a good COGS percentage?",
        a: "It depends heavily on the industry and pricing model. Resellers of commodity products often have high COGS as a share of revenue, while software, digital products and handmade premium goods can have low COGS. Rather than chase a universal figure, track your own COGS percentage, which is COGS divided by revenue, month by month and investigate any sudden rise.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The cost of goods sold formula is beginning inventory + purchases − ending inventory = COGS. It measures the direct cost of the products you sold during a period: inventory, materials, direct labor and freight-in. Subtract COGS from revenue to get gross profit. Overhead such as rent and marketing is not included.</p>

<p>If you sell physical products, cost of goods sold is usually your single biggest expense, and it decides whether your prices actually make money. It also affects your tax bill, because it reduces gross income. This guide explains the cost of goods sold formula, works through examples for a retailer, a maker and a service business, compares inventory methods, and covers the mistakes that most often throw COGS off.</p>

<h2>What is cost of goods sold (COGS)?</h2>
<p>Cost of goods sold, sometimes called cost of sales or cost of revenue, is the direct cost of the goods a business sold in a period. It appears on the <a href="/blog/profit-and-loss-statement">profit and loss statement</a> directly below revenue, and revenue minus COGS equals gross profit.</p>
<p>The key word is <em>sold</em>. If you buy 500 units this month and sell 300, only the cost of the 300 belongs in COGS for the month. The other 200 stay on the balance sheet as inventory, an asset, until they are sold.</p>

<h2>The cost of goods sold formula</h2>
<p><strong>COGS = Beginning inventory + Purchases (and other direct costs) − Ending inventory</strong></p>
<ul>
<li><strong>Beginning inventory</strong>: the value of stock on hand at the start of the period, which is last period's ending inventory.</li>
<li><strong>Purchases</strong>: the cost of goods or materials bought during the period, plus direct costs such as freight-in and, for manufacturers, direct labor and certain production overhead.</li>
<li><strong>Ending inventory</strong>: the value of stock still on hand at the end of the period, based on a physical count or a reliable inventory system.</li>
</ul>
<p>Related formulas you will use alongside it:</p>
<ul>
<li>Gross profit = Net revenue − COGS</li>
<li>Gross margin = Gross profit ÷ Net revenue</li>
<li>COGS percentage = COGS ÷ Net revenue</li>
</ul>

<h2>What counts as COGS and what does not</h2>
<table><thead><tr><th>Usually included in COGS</th><th>Usually not included (operating expenses)</th></tr></thead><tbody>
<tr><td>Products bought for resale</td><td>Office or retail rent (unless production space allocated by an accountant)</td></tr>
<tr><td>Raw materials and parts</td><td>Marketing and advertising</td></tr>
<tr><td>Direct labor of production employees</td><td>Sales and admin staff wages</td></tr>
<tr><td>Freight-in and import duties on stock</td><td>Outbound shipping to customers (often a selling expense)</td></tr>
<tr><td>Packaging that is part of the product</td><td>General software and subscriptions</td></tr>
<tr><td>Production supplies and some factory overhead</td><td>Accounting, legal and insurance</td></tr>
<tr><td>Subcontracted production work</td><td>Interest and bank fees</td></tr>
</tbody></table>
<p>Some lines vary by business and by accounting approach, especially outbound shipping, payment processing fees and production overhead. The rule that matters most is consistency: decide once, write it down, and apply it every period so your <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a> comparisons mean something.</p>

<h2>Worked example 1: a retail shop</h2>
<p>An illustrative gift shop has these figures for a quarter:</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Beginning inventory (January 1)</td><td>$15,000</td></tr>
<tr><td>Purchases from suppliers</td><td>$40,000</td></tr>
<tr><td>Freight-in on those purchases</td><td>$2,000</td></tr>
<tr><td>Ending inventory (March 31, counted)</td><td>$18,000</td></tr>
<tr><td>Net sales for the quarter</td><td>$75,000</td></tr>
</tbody></table>
<ul>
<li>Goods available for sale: $15,000 + $40,000 + $2,000 = $57,000.</li>
<li>COGS: $57,000 − $18,000 = $39,000.</li>
<li>Gross profit: $75,000 − $39,000 = $36,000.</li>
<li>Gross margin: $36,000 ÷ $75,000 = 48%. COGS percentage: $39,000 ÷ $75,000 = 52%.</li>
</ul>
<p>Now see why the count matters. If the owner miscounted and recorded ending inventory as $21,000 instead of $18,000, COGS would fall to $57,000 − $21,000 = $36,000 and gross profit would rise to $39,000. Profit, and the tax on it, would be overstated by $3,000, and the error would reverse next quarter when the inflated figure becomes beginning inventory.</p>

<h2>Worked example 2: a small maker</h2>
<p>An illustrative furniture maker builds 20 tables in a month and sells 16. It had no stock at the start of the month.</p>
<ul>
<li>Timber and hardware: $4,800, or $240 per table.</li>
<li>Wages of one employee who builds the tables: $3,200, or $160 per table.</li>
<li>Finishes and consumables: $400, or $20 per table.</li>
<li>Total production cost: $4,800 + $3,200 + $400 = $8,400, or $8,400 ÷ 20 = $420 per table.</li>
</ul>
<p>COGS for the month: 16 sold × $420 = $6,720. Ending inventory: 4 tables × $420 = $1,680. Check: $0 + $8,400 − $1,680 = $6,720. If each table sells for $900, revenue is 16 × $900 = $14,400, gross profit is $14,400 − $6,720 = $7,680, and gross margin is $7,680 ÷ $14,400 ≈ 53.3%.</p>
<p>Notice the owner's own time is not in the labor figure. For a US sole proprietor, the Schedule C instructions say not to include amounts you pay yourself in the cost of labor line, because owner draws are not wages.</p>

<h2>Worked example 3: a service business</h2>
<p>An illustrative IT support company has no inventory but treats direct delivery costs as cost of services: subcontracted technicians $18,000, hardware parts installed for clients $4,000 and remote-support licenses billed per client $1,000. Cost of services: $18,000 + $4,000 + $1,000 = $23,000. On revenue of $60,000, gross profit is $37,000 and gross margin about 61.7%.</p>
<p>If parts are resold to clients, list them as separate line items on the invoice so you can match each sale with its cost. A clear, itemized invoice made with the <a href="/invoice-generator">free invoice generator</a> helps here, since parts, labor and markup are visible on one document.</p>

<h2>Inventory costing methods</h2>
<p>When you buy the same item at different prices over time, you need a rule for which cost goes to COGS.</p>
<table><thead><tr><th>Method</th><th>How it works</th><th>Effect when prices are rising</th></tr></thead><tbody>
<tr><td>FIFO (first in, first out)</td><td>Oldest costs are sold first</td><td>Lower COGS, higher profit, ending inventory near current prices</td></tr>
<tr><td>LIFO (last in, first out)</td><td>Newest costs are sold first</td><td>Higher COGS, lower taxable profit; not allowed under IFRS and subject to IRS conditions</td></tr>
<tr><td>Weighted average</td><td>Average cost of all units available</td><td>Results between FIFO and LIFO</td></tr>
<tr><td>Specific identification</td><td>Track the actual cost of each item</td><td>Exact; practical for unique, high-value goods such as cars or art</td></tr>
</tbody></table>
<p>Quick FIFO example: you buy 100 units at $10, then 100 at $12, and sell 150. FIFO COGS = (100 × $10) + (50 × $12) = $1,000 + $600 = $1,600. Under weighted average, the average cost is ($1,000 + $1,200) ÷ 200 = $11, so COGS = 150 × $11 = $1,650. Once you choose a method for tax purposes, changing it generally requires IRS approval, so pick carefully with your accountant.</p>

<h2>COGS and your tax return</h2>
<p>In the US, sole proprietors report cost of goods sold in Part III of Schedule C, which follows the formula above: beginning inventory, purchases, cost of labor, materials and supplies, other costs, minus ending inventory. The result carries to the income section of the form. See the IRS <a href="https://www.irs.gov/instructions/i1040sc" target="_blank" rel="noopener noreferrer">Instructions for Schedule C</a> for the current lines, and our <a href="/blog/schedule-c-for-freelancers">Schedule C guide for freelancers</a> for a plain-English walkthrough.</p>
<p>The IRS allows certain qualifying small businesses, based on an average gross receipts test, to use simpler methods of accounting for inventory. The threshold is adjusted for inflation, so check the current figure in IRS guidance or with a tax professional before relying on it. Operating costs that are not COGS are still deductible as ordinary business expenses; our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> covers the common ones.</p>

<h2>COGS for online and marketplace sellers</h2>
<p>Ecommerce sellers face a few extra questions. Marketplace referral fees, payment processing fees and fulfillment fees charged per order behave like variable costs, and some sellers include them in cost of sales so that gross margin reflects the true cost of each order. Others keep them as selling expenses. Either can work if you are consistent, but be aware that the choice changes your reported gross margin.</p>
<p>Dropshippers usually have simple COGS: the supplier's charge for each order shipped, plus any per-order fees, with little or no inventory held. Sellers who hold stock in a third-party warehouse still need a reliable inventory count, which is often available as a report from the warehouse or marketplace. Reconcile that report with your own records each month rather than trusting it blindly, because lost, damaged or returned units can easily be missed.</p>

<h2>Using COGS to set prices</h2>
<p>Knowing your true cost per unit is the first step to pricing. If the furniture maker wants a 55% gross margin on a $420 table, the price must be $420 ÷ (1 − 0.55) = $420 ÷ 0.45 ≈ $933. Many owners confuse that calculation with markup, which would be $420 × 1.55 = $651, a big difference. Our guide to <a href="/blog/markup-vs-margin">markup vs margin</a> explains the gap, and the <a href="/blog/break-even-point">break-even point guide</a> shows how COGS feeds into the sales volume you need.</p>

<h2>Common COGS mistakes</h2>
<ul>
<li><strong>Expensing all purchases immediately.</strong> Unsold stock is inventory, not COGS, under standard methods.</li>
<li><strong>Skipping the stock count.</strong> Without a reliable ending inventory figure, COGS is a guess.</li>
<li><strong>Including overhead that belongs below gross profit.</strong> Marketing and admin costs distort gross margin.</li>
<li><strong>Forgetting freight-in and duties.</strong> Leaving them out understates the real cost per unit.</li>
<li><strong>Ignoring shrinkage and damaged goods.</strong> Write down stock that is lost, broken or obsolete.</li>
<li><strong>Changing methods casually.</strong> Switching between FIFO and average cost breaks comparisons and can have tax consequences.</li>
<li><strong>Not matching supplier bills to deliveries.</strong> A <a href="/blog/three-way-match">three-way match</a> of purchase order, delivery and invoice catches overbilling before it inflates COGS.</li>
</ul>

<h2>COGS checklist for each period</h2>
<ul>
<li>Beginning inventory equals last period's ending inventory.</li>
<li>All supplier invoices for stock and materials recorded, matched to deliveries.</li>
<li>Freight-in, duties and direct labor included.</li>
<li>Physical count or reliable system count of ending inventory completed.</li>
<li>Damaged, obsolete or missing stock written down.</li>
<li>Same costing method applied as last period.</li>
<li>COGS percentage and gross margin calculated and compared with prior periods.</li>
<li>Supporting records kept for tax purposes.</li>
</ul>

<h2>Next step</h2>
<p>Run the cost of goods sold formula on your last quarter and calculate your COGS percentage. If it has crept up, check supplier prices and discounts first. To keep supplier spending under control at the source, use a <a href="/blog/purchase-order-template">purchase order template</a> for stock orders, and keep expense records organized with our guide on <a href="/blog/how-to-track-business-expenses">how to track business expenses</a>.</p>
`,
  },
  {
    slug: "small-business-budget",
    title: "Small Business Budget: How to Create One (Template Included)",
    description:
      "Create a small business budget in seven steps, with a free template layout, a worked monthly example, budget-vs-actual tracking and the mistakes to avoid.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "budget-vs-actual",
      "zero-based-budgeting",
      "ai-business-plan-generator",
      "operating-expenses",
      "cash-flow-forecast",
      "break-even-point",
      "how-to-track-business-expenses",
    ],
    faqs: [
      {
        q: "How do I create a budget for a small business?",
        a: "Start with last year's actual income and expenses. Estimate revenue for each month based on realistic sales, then list fixed costs such as rent and salaries and variable costs such as materials and fees. Add one-off spending, set aside money for taxes and an emergency reserve, and calculate the expected profit for each month. Finally, compare actual results with the budget every month and adjust.",
      },
      {
        q: "What should be included in a small business budget?",
        a: "A complete budget includes projected revenue, cost of goods sold, fixed operating expenses, variable expenses, one-time or capital purchases, loan repayments, owner pay, tax set-asides and a cash reserve. Many owners also include a contingency line for unexpected costs. The budget should cover at least the next 12 months, broken down by month so you can see seasonal swings.",
      },
      {
        q: "What is the 50/30/20 rule for business budgets?",
        a: "The 50/30/20 rule is a personal budgeting guideline that splits after-tax income into needs, wants and savings. It does not translate neatly to business, where cost structures vary enormously by industry. Some owners use percentage-based systems, such as allocating a fixed share of each payment received to tax, owner pay and operating costs, but you should base the split on your own numbers.",
      },
      {
        q: "What is the difference between a budget and a cash flow forecast?",
        a: "A budget is a plan for income and expenses over a period, usually a year, and sets targets for profit. A cash flow forecast predicts when cash will actually enter and leave the bank, week by week or month by month. A budget can show a profitable month that still has a cash shortfall because customers pay late. Most businesses need both.",
      },
      {
        q: "How often should I review my business budget?",
        a: "Compare actual results with the budget every month, ideally as part of your month-end close. Review the whole budget more deeply each quarter and revise forecasts if circumstances have changed, such as a big new client, a lost contract or a price increase from a key supplier. Prepare the next year's budget a month or two before the new financial year starts.",
      },
      {
        q: "How much should a small business keep in reserve?",
        a: "There is no official rule. Many advisers suggest a cash reserve covering roughly three to six months of essential operating expenses, but the right amount depends on how predictable your income is, how quickly customers pay and whether you have access to credit. A seasonal business or one dependent on a few large clients generally needs a larger cushion.",
      },
      {
        q: "Should I budget for my own salary?",
        a: "Yes. Include what you plan to pay yourself, whether through payroll or owner draws, as a budget line. If you leave it out, the budget may look profitable while the business cannot actually support you. Budgeting owner pay also helps you set prices and know the sales level you need to hit, which is the same principle behind break-even analysis.",
      },
      {
        q: "How do I budget when my income is irregular?",
        a: "Build the budget around a conservative baseline, such as your lowest few months of revenue over the past year, and treat anything above it as a bonus to allocate to reserves, tax and debt repayment. Keep fixed costs low, take deposits on larger jobs, and use a rolling forecast that you update monthly. Freelancers and seasonal businesses benefit most from this approach.",
      },
      {
        q: "What is a variance in budgeting?",
        a: "A variance is the difference between the budgeted figure and the actual figure for a line item. If you budgeted $1,000 for marketing and spent $1,300, the variance is $300 over budget, or 30%. Favorable variances mean higher income or lower costs than planned; unfavorable variances mean the opposite. Investigate large variances to understand whether the budget or the business needs to change.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A small business budget is a month-by-month plan of expected revenue, costs and profit for the year ahead. To create one, start from last year's actual figures, forecast sales conservatively, list fixed and variable costs, include owner pay, taxes and a reserve, then compare actual results with the budget every month.</p>

<p>A budget turns vague goals ("grow this year", "cut costs") into numbers you can check. It tells you how much you can spend on marketing, whether you can afford a hire, and when cash will be tight. Without one, decisions are made on the bank balance, which reflects the past rather than the plan. This guide walks you through seven steps, gives you a template layout to copy into a spreadsheet, and works through a complete example with the arithmetic shown.</p>

<p>A note on tools: the <a href="/invoice-generator">free invoice generator</a> on this site creates PDF invoices in your browser. It does not do budgeting or bookkeeping, so build your budget in a spreadsheet or your accounting software. Your invoice history, however, is one of the best sources for forecasting revenue.</p>

<h2>Why every small business needs a budget</h2>
<ul>
<li><strong>Spending decisions</strong>: you know in advance what you can afford each month.</li>
<li><strong>Pricing</strong>: a budget shows the revenue needed to cover costs and owner pay.</li>
<li><strong>Early warning</strong>: monthly budget-vs-actual comparisons reveal problems while they are small.</li>
<li><strong>Financing</strong>: lenders and investors commonly expect financial projections. The SBA's guide to <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">managing business finances</a> covers budgeting as part of sound financial management.</li>
<li><strong>Tax planning</strong>: setting aside tax monthly avoids a painful bill at year end.</li>
</ul>

<h2>How to create a small business budget in 7 steps</h2>
<h3>Step 1: Gather last year's actual numbers</h3>
<p>Pull your <a href="/blog/profit-and-loss-statement">profit and loss statement</a> for the last 12 months, by month if possible. If you are new, use your business plan estimates and research from suppliers, landlords and insurers. Actual figures are the foundation; budgets built on guesses tend to be optimistic.</p>
<h3>Step 2: Forecast revenue month by month</h3>
<p>Start with recurring income you are confident about, such as retainers and subscription customers. Add expected project or product sales based on past months, adjusting for seasonality, price changes and known contracts. Be conservative: it is easier to manage a pleasant surprise than a shortfall. Your past invoices show which months are busy and which are quiet.</p>
<h3>Step 3: Estimate cost of goods sold</h3>
<p>If you sell products, estimate COGS as a percentage of forecast sales based on history. If your <a href="/blog/cost-of-goods-sold">cost of goods sold</a> has been 40% of revenue, budget 40% unless supplier prices are changing.</p>
<h3>Step 4: List fixed costs</h3>
<p>Rent, salaries, insurance, software subscriptions, loan payments, phone and internet, accounting fees. These are predictable; check contracts for scheduled increases.</p>
<h3>Step 5: List variable and one-off costs</h3>
<p>Variable costs move with sales: payment processing fees, shipping, commissions, contractor hours. One-off costs include equipment, a website rebuild, trade shows and annual renewals. Put annual costs in the month they are paid, and also note them in a sinking fund line if you want to save for them monthly.</p>
<h3>Step 6: Add owner pay, tax and reserves</h3>
<p>Include what you plan to pay yourself, a monthly tax set-aside and a contribution to an emergency reserve. US sole proprietors who expect to owe tax generally make estimated payments during the year; see <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a>.</p>
<h3>Step 7: Calculate profit and review the plan</h3>
<p>Subtract total costs from revenue for each month. If the year shows a loss, or months with large deficits, adjust now: raise prices, cut costs, delay purchases or plan financing. Check whether the revenue target is above your <a href="/blog/break-even-point">break-even point</a> by a comfortable margin.</p>

<h2>Budgeting methods to choose from</h2>
<p>There is more than one way to build a small business budget. Pick the method that fits how stable your business is and how much time you have.</p>
<table><thead><tr><th>Method</th><th>How it works</th><th>Best for</th></tr></thead><tbody>
<tr><td>Incremental</td><td>Take last year's actuals and adjust each line up or down</td><td>Stable businesses with reliable history</td></tr>
<tr><td>Zero-based</td><td>Start every line at zero and justify each cost from scratch</td><td>Cutting costs or resetting after a bad year</td></tr>
<tr><td>Percentage of revenue</td><td>Set each cost category as a share of sales</td><td>Businesses whose costs scale with sales</td></tr>
<tr><td>Allocation of receipts</td><td>Split every payment received into accounts for tax, owner pay and operating costs</td><td>Freelancers and owners with irregular income</td></tr>
<tr><td>Rolling</td><td>Always budget 12 months ahead, adding a new month as each one ends</td><td>Fast-changing or seasonal businesses</td></tr>
</tbody></table>
<p>Many owners combine them: an incremental budget for fixed costs, a percentage-of-revenue rule for marketing, and a rolling update each quarter. A zero-based review once a year is a good way to catch subscriptions and contracts that no longer earn their keep.</p>

<h2>Small business budget template</h2>
<p>Copy this into a spreadsheet with 12 monthly columns plus a total column. The example below shows one month for clarity.</p>
<table><thead><tr><th>Category</th><th>Line item</th><th>Budget</th><th>Actual</th><th>Variance</th></tr></thead><tbody>
<tr><td>Revenue</td><td>Product or service sales</td><td></td><td></td><td></td></tr>
<tr><td>Revenue</td><td>Recurring or retainer income</td><td></td><td></td><td></td></tr>
<tr><td>Direct costs</td><td>Cost of goods sold / subcontractors</td><td></td><td></td><td></td></tr>
<tr><td>Fixed costs</td><td>Rent, salaries, insurance, software, utilities</td><td></td><td></td><td></td></tr>
<tr><td>Variable costs</td><td>Payment fees, shipping, commissions, marketing</td><td></td><td></td><td></td></tr>
<tr><td>One-off costs</td><td>Equipment, renewals, events</td><td></td><td></td><td></td></tr>
<tr><td>Owner</td><td>Owner pay or draws</td><td></td><td></td><td></td></tr>
<tr><td>Set-asides</td><td>Tax reserve, emergency reserve</td><td></td><td></td><td></td></tr>
<tr><td>Result</td><td>Surplus or shortfall</td><td></td><td></td><td></td></tr>
</tbody></table>
<p>Variance = Actual − Budget for revenue lines, and Budget − Actual for cost lines, so a positive number is always good news. Add a variance percentage column (variance ÷ budget) to spot the lines that are furthest off.</p>

<h2>Worked example: a monthly budget for a small design studio</h2>
<p>An illustrative two-person design studio prepares its budget for March. All numbers are invented for the example.</p>
<table><thead><tr><th>Line item</th><th>Budget</th><th>Actual</th><th>Variance</th></tr></thead><tbody>
<tr><td>Retainer clients (4 × $1,500)</td><td>$6,000</td><td>$6,000</td><td>$0</td></tr>
<tr><td>Project work</td><td>$9,000</td><td>$7,500</td><td>−$1,500</td></tr>
<tr><td><strong>Total revenue</strong></td><td><strong>$15,000</strong></td><td><strong>$13,500</strong></td><td><strong>−$1,500</strong></td></tr>
<tr><td>Freelance illustrators</td><td>$2,000</td><td>$1,800</td><td>+$200</td></tr>
<tr><td>Salaries and payroll taxes (employee)</td><td>$4,200</td><td>$4,200</td><td>$0</td></tr>
<tr><td>Studio rent</td><td>$1,500</td><td>$1,500</td><td>$0</td></tr>
<tr><td>Software and subscriptions</td><td>$400</td><td>$460</td><td>−$60</td></tr>
<tr><td>Marketing</td><td>$600</td><td>$900</td><td>−$300</td></tr>
<tr><td>Insurance, phone, accounting</td><td>$500</td><td>$500</td><td>$0</td></tr>
<tr><td>Payment fees (about 2% of revenue)</td><td>$300</td><td>$270</td><td>+$30</td></tr>
<tr><td><strong>Total business costs</strong></td><td><strong>$9,500</strong></td><td><strong>$9,630</strong></td><td><strong>−$130</strong></td></tr>
<tr><td><strong>Profit before owner pay and tax</strong></td><td><strong>$5,500</strong></td><td><strong>$3,870</strong></td><td><strong>−$1,630</strong></td></tr>
<tr><td>Owner draw</td><td>$3,500</td><td>$3,500</td><td>$0</td></tr>
<tr><td>Tax set-aside (25% of profit, illustrative)</td><td>$1,375</td><td>$968</td><td>+$407</td></tr>
<tr><td><strong>Left for reserve</strong></td><td><strong>$625</strong></td><td><strong>−$598</strong></td><td><strong>−$1,223</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Budgeted costs: $2,000 + $4,200 + $1,500 + $400 + $600 + $500 + $300 = $9,500. Actual costs: $1,800 + $4,200 + $1,500 + $460 + $900 + $500 + $270 = $9,630.</li>
<li>Budgeted profit: $15,000 − $9,500 = $5,500. Actual: $13,500 − $9,630 = $3,870.</li>
<li>Tax set-aside: 25% × $5,500 = $1,375 budgeted; 25% × $3,870 = $967.50, rounded to $968 actual.</li>
<li>Left for reserve: $5,500 − $3,500 − $1,375 = $625 budgeted; $3,870 − $3,500 − $968 = −$598 actual.</li>
</ul>
<p>What the owners learn: the shortfall comes almost entirely from project revenue ($1,500 below plan) plus extra marketing ($300 over). The month still made a profit, but after the owner draw and tax set-aside it dipped into reserves. The fix might be invoicing the delayed project promptly, trimming marketing next month, or reducing the draw temporarily. The 25% tax rate here is only a placeholder; your actual set-aside depends on your tax situation.</p>

<h2>Budget vs cash flow forecast</h2>
<p>Your budget says the studio earned $13,500 in March. But if $5,000 of those invoices are on 30-day terms, the cash arrives in April. A <a href="/blog/cash-flow-forecast">13-week cash flow forecast</a> converts the budget into timing so you can see when the bank balance will actually run low. Getting paid faster narrows the gap between the two; our guide on <a href="/blog/how-to-get-paid-faster">how to get paid faster</a> covers deposits, shorter terms and reminders.</p>
<table><thead><tr><th></th><th>Budget</th><th>Cash flow forecast</th></tr></thead><tbody>
<tr><td>Purpose</td><td>Plan income, costs and profit</td><td>Predict when cash moves</td></tr>
<tr><td>Typical period</td><td>12 months, by month</td><td>13 weeks, by week, or 12 months</td></tr>
<tr><td>Revenue timing</td><td>When earned or invoiced</td><td>When the customer pays</td></tr>
<tr><td>Includes loan principal?</td><td>Often as a separate line</td><td>Yes</td></tr>
<tr><td>Main question</td><td>Will we make enough profit?</td><td>Will we have enough cash each week?</td></tr>
</tbody></table>

<h2>Common budgeting mistakes</h2>
<ul>
<li><strong>Overestimating revenue.</strong> Budgets based on the best month of last year usually disappoint. Use averages and known contracts.</li>
<li><strong>Forgetting annual and irregular costs.</strong> Insurance renewals, licenses, equipment and annual software plans catch owners out.</li>
<li><strong>Leaving out owner pay.</strong> The business must support you, or the budget is incomplete.</li>
<li><strong>No tax set-aside.</strong> Tax due at year end or in quarterly installments is a predictable cost; budget for it monthly.</li>
<li><strong>Making it once and filing it away.</strong> A budget only works if you compare it with actual results every month.</li>
<li><strong>Ignoring payment timing.</strong> A profitable budget can still run out of cash if customers pay slowly.</li>
<li><strong>Too much detail.</strong> Thirty expense lines are harder to track than ten well-chosen categories.</li>
</ul>

<h2>Small business budget checklist</h2>
<ul>
<li>Last 12 months of actual income and expenses gathered.</li>
<li>Revenue forecast by month, with recurring income separated from new sales.</li>
<li>COGS or direct costs estimated from historical percentages.</li>
<li>All fixed costs listed from contracts, with known increases.</li>
<li>Variable, annual and one-off costs placed in the right months.</li>
<li>Owner pay, tax set-aside and reserve contributions included.</li>
<li>Monthly profit calculated; loss months addressed before the year starts.</li>
<li>Budget-vs-actual review scheduled at each <a href="/blog/month-end-close-checklist">month-end close</a>.</li>
<li>Quarterly reforecast date in the calendar.</li>
</ul>

<h2>Tracking actual spending against the budget</h2>
<p>The budget is only half the system. To fill in the actual column, every expense needs to be recorded and categorized the same way as the budget lines. Our guide on <a href="/blog/how-to-track-business-expenses">how to track business expenses</a> sets up a simple routine, and an <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a> keeps the revenue side organized. Reviewing both monthly takes less than an hour once the habit is in place.</p>

<h2>Next step</h2>
<p>Open a spreadsheet, copy the template above, and fill in last year's actuals for each month. Then add your forecast for next year line by line. Make sure every completed job turns into an invoice the same week, so the revenue you budgeted actually reaches your books. For more on planning and cash, read our <a href="/blog/cash-flow-management">cash flow management guide</a>.</p>
`,
  },
  {
    slug: "petty-cash-log",
    title: "Petty Cash Log: Template, Rules and How to Reconcile It",
    description:
      "Set up a petty cash log with a free template layout, clear rules and vouchers, then reconcile and replenish the fund step by step with a worked example.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "payment-voucher-format",
      "how-to-track-business-expenses",
      "bank-reconciliation",
      "bookkeeping-basics",
    ],
    faqs: [
      {
        q: "What is a petty cash log?",
        a: "A petty cash log, also called a petty cash book or register, is a running record of every amount paid out of and put into a small cash fund kept on site for minor expenses. Each line shows the date, voucher number, payee, purpose, expense category, amount and the remaining balance. It lets you account for every dollar and gives your bookkeeper what they need to record the expenses.",
      },
      {
        q: "How do you reconcile petty cash?",
        a: "Count the cash in the box, add up the receipts and vouchers for money paid out since the last top-up, and add the two together. The total should equal the fixed amount of the fund. If it does not, the difference is a shortage or overage. Investigate it, record it in a cash over and short account, and only then replenish the fund.",
      },
      {
        q: "What is the imprest system for petty cash?",
        a: "Under the imprest system, the petty cash fund is set at a fixed amount, such as $200. At any time, cash on hand plus receipts for spending should equal that amount. When the cash runs low, you write a check or make a transfer for exactly the total of the receipts, bringing the fund back to $200. It is the most common and easiest method to control.",
      },
      {
        q: "How much should a business keep in petty cash?",
        a: "Enough to cover typical small expenses for a few weeks to a month, but not so much that loss or theft would hurt. Many small businesses keep somewhere in the low hundreds of dollars, though the right figure depends on how often you pay for things in cash. Review recent cash purchases and set the fund just above the usual monthly total.",
      },
      {
        q: "What can petty cash be used for?",
        a: "Petty cash is for small, legitimate business expenses where a card or invoice is impractical: postage, office snacks, a taxi fare, parking, small supplies, a delivery tip or a minor repair. Set a maximum amount per transaction in your policy. Larger purchases, regular supplier bills, wages and personal loans should not come from petty cash.",
      },
      {
        q: "What happens if petty cash is short?",
        a: "First recount the cash and re-add the receipts, then look for a missing voucher, an IOU or a receipt filed in the wrong place. If the difference remains, record it as a cash shortage expense in a cash over and short account and note it in the log. Small occasional differences can happen; repeated or growing shortages call for a review of who has access and how the fund is controlled.",
      },
      {
        q: "Is petty cash an asset?",
        a: "Yes. The petty cash fund is a current asset on the balance sheet, usually shown within cash. Under the imprest system, the petty cash account in the books stays at the fixed fund amount. The expenses paid from it are recorded when the fund is replenished, by debiting the relevant expense accounts and crediting the bank account for the top-up amount.",
      },
      {
        q: "Do I need receipts for petty cash expenses?",
        a: "You should keep a receipt for every petty cash payment wherever one is available, attached to a signed voucher. Tax authorities generally expect you to be able to support business deductions with records, and the IRS says supporting documents such as receipts should show the amount paid and that it was for a business expense. If no receipt exists, the voucher should explain why.",
      },
      {
        q: "How often should petty cash be reconciled?",
        a: "Reconcile it every time you replenish the fund and at least once a month, usually during the month-end close, so the expenses land in the right period. Many businesses also do an occasional surprise count by someone other than the custodian. Frequent reconciliation keeps any discrepancy small and makes it easier to remember what happened.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A petty cash log is a running record of every payment from and top-up to a small on-site cash fund. Record each transaction with a voucher number, date, payee, purpose, category and amount, keep the receipt, and reconcile by checking that cash on hand plus receipts equals the fund's fixed amount before replenishing it.</p>

<p>Cards and digital payments have shrunk the role of cash, but many offices, shops, restaurants and job sites still keep a small cash box for parking, postage, supplies and other minor costs. Because the amounts are small, petty cash is easy to neglect, and that is exactly how it ends up as a drawer full of unlabelled receipts and a balance nobody can explain. This guide shows you how to set up a fund, keep a clean log, reconcile it, replenish it and record it in your books.</p>

<h2>What is petty cash?</h2>
<p>Petty cash is a small amount of physical money a business keeps on hand to pay for minor expenses where using a card, check or supplier invoice is impractical. It is managed by one person, the custodian, and controlled by a written policy, a log and receipts.</p>
<p>The most common setup is the <strong>imprest system</strong>: the fund is set at a fixed amount, for example $200. At any moment, the cash in the box plus the receipts for what has been spent should add up to exactly $200. When cash runs low, the fund is topped up by the total of the receipts, returning it to $200.</p>

<h2>How to set up a petty cash fund</h2>
<ol>
<li><strong>Decide the fund amount.</strong> Review recent cash purchases and set the fund to cover a typical few weeks to a month. Keep it modest; the more cash, the bigger the risk.</li>
<li><strong>Appoint one custodian.</strong> One person is responsible for the box, the key and the log. Name a backup for holidays.</li>
<li><strong>Write a short policy.</strong> Allowed purchases, a maximum per transaction, receipt requirements, who can approve, and what is not allowed (personal loans, IOUs, wages, supplier bills).</li>
<li><strong>Withdraw the cash.</strong> Draw the amount from the business bank account and record it in your books as a transfer from bank to a petty cash account.</li>
<li><strong>Store it securely.</strong> A locked cash box kept in a locked drawer or safe.</li>
<li><strong>Prepare the log and vouchers.</strong> Use the template below and a pad of numbered vouchers.</li>
</ol>

<h2>Petty cash log template</h2>
<p>Copy these columns into a spreadsheet or a bound book. One line per voucher, in voucher number order.</p>
<table><thead><tr><th>Date</th><th>Voucher no.</th><th>Paid to / received from</th><th>Purpose</th><th>Category</th><th>Cash in</th><th>Cash out</th><th>Balance</th><th>Approved by</th></tr></thead><tbody>
<tr><td>Oct 1</td><td>—</td><td>Bank (opening fund)</td><td>Establish fund</td><td>—</td><td>$200.00</td><td></td><td>$200.00</td><td>Owner</td></tr>
<tr><td>Oct 3</td><td>PC-001</td><td>Post office</td><td>Return parcel to supplier</td><td>Postage</td><td></td><td>$14.60</td><td>$185.40</td><td>MR</td></tr>
<tr><td>Oct 6</td><td>PC-002</td><td>City parking</td><td>Client meeting</td><td>Travel</td><td></td><td>$12.00</td><td>$173.40</td><td>MR</td></tr>
</tbody></table>
<p>Each voucher should show the date, amount, payee, purpose and expense category, the signature of the person who received the money and the custodian's initials, with the receipt attached. Numbered vouchers matter: a gap in the sequence is the quickest sign that something is missing.</p>
<p>If an employee pays for something with their own money and you reimburse them from petty cash, record it the same way and attach their receipt. A simple signed <a href="/blog/payment-receipt-template">payment receipt</a> can serve as proof when a seller cannot provide one, and our guide to <a href="/blog/invoice-vs-receipt">invoices vs receipts</a> explains the difference between the two documents.</p>

<h2>Worked example: one month of petty cash</h2>
<p>An illustrative office runs a $200 imprest fund. During October, the log shows:</p>
<table><thead><tr><th>Voucher</th><th>Purpose</th><th>Category</th><th>Amount</th></tr></thead><tbody>
<tr><td>PC-001</td><td>Return parcel postage</td><td>Postage</td><td>$14.60</td></tr>
<tr><td>PC-002</td><td>Parking for client meeting</td><td>Travel</td><td>$12.00</td></tr>
<tr><td>PC-003</td><td>Printer paper and pens</td><td>Office supplies</td><td>$23.45</td></tr>
<tr><td>PC-004</td><td>Coffee and milk for office</td><td>Office supplies</td><td>$18.20</td></tr>
<tr><td>PC-005</td><td>Courier tip for urgent delivery</td><td>Postage</td><td>$5.00</td></tr>
<tr><td>PC-006</td><td>Spare key cut</td><td>Repairs</td><td>$9.50</td></tr>
<tr><td>PC-007</td><td>Taxi to supplier</td><td>Travel</td><td>$27.25</td></tr>
<tr><td><strong>Total</strong></td><td>Paid out in October</td><td>All</td><td><strong>$110.00</strong></td></tr>
</tbody></table>
<p>Adding the vouchers: $14.60 + $12.00 + $23.45 + $18.20 + $5.00 + $9.50 + $27.25 = $110.00.</p>
<p>By category: postage $14.60 + $5.00 = $19.60; travel $12.00 + $27.25 = $39.25; office supplies $23.45 + $18.20 = $41.65; repairs $9.50. Check: $19.60 + $39.25 + $41.65 + $9.50 = $110.00.</p>
<h3>Reconciling the fund</h3>
<p>At month end the custodian counts $86.00 in the box.</p>
<ul>
<li>Expected cash: $200.00 − $110.00 = $90.00.</li>
<li>Cash counted: $86.00.</li>
<li>Cash + receipts: $86.00 + $110.00 = $196.00, which is $4.00 less than the $200.00 fund.</li>
<li>Shortage: $4.00.</li>
</ul>
<p>The custodian recounts, checks for a missing voucher and asks colleagues. Nothing turns up, so the $4.00 is recorded as a cash shortage in a "cash over and short" expense account, with a note in the log.</p>
<h3>Replenishing the fund</h3>
<p>To bring the box back to $200, the business withdraws $110.00 for the receipts plus $4.00 for the shortage, a total of $114.00. Check: $86.00 + $114.00 = $200.00. In the books, the $114.00 is recorded as postage $19.60, travel $39.25, office supplies $41.65, repairs $9.50 and cash over and short $4.00, all paid from the bank account. The petty cash balance in the books stays at $200.</p>

<h2>How to reconcile petty cash step by step</h2>
<ol>
<li>Count the cash in the box, ideally with a second person present.</li>
<li>Gather all vouchers and receipts since the last replenishment and check the numbering for gaps.</li>
<li>Total the vouchers and check each one is signed and has a receipt or explanation.</li>
<li>Add cash counted and voucher total; compare with the fixed fund amount.</li>
<li>Investigate any difference: recount, look for misfiled receipts, check arithmetic.</li>
<li>Record unexplained differences in a cash over and short account.</li>
<li>Summarize spending by expense category.</li>
<li>Replenish the fund by the amount spent, plus any shortage or minus any overage.</li>
<li>Record the replenishment in your books, file the vouchers and start a new page of the log.</li>
</ol>
<p>Do this every time you top up the fund and at least monthly as part of your <a href="/blog/month-end-close-checklist">month-end close</a>, so expenses land in the right period. The process mirrors a <a href="/blog/bank-reconciliation">bank reconciliation</a>, just on a smaller scale.</p>

<h2>Petty cash rules that prevent problems</h2>
<table><thead><tr><th>Rule</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>One custodian, one key</td><td>Clear accountability for the balance</td></tr>
<tr><td>Maximum amount per payment</td><td>Keeps larger spending in proper approval channels</td></tr>
<tr><td>No receipt, no cash (except with a signed explanation)</td><td>Supports the expense for tax and audit</td></tr>
<tr><td>No IOUs or personal loans</td><td>IOUs turn into permanent shortages</td></tr>
<tr><td>Never top up from sales takings</td><td>Mixing cash sales and petty cash hides both</td></tr>
<tr><td>Numbered vouchers</td><td>Gaps reveal missing entries</td></tr>
<tr><td>Occasional surprise counts</td><td>Deters misuse and catches errors early</td></tr>
</tbody></table>

<h2>Paper or spreadsheet petty cash log?</h2>
<p>Either works if it is kept up to date. A bound paper book stays next to the cash box, is quick to fill in and makes later alterations obvious, which is a useful control. A spreadsheet petty cash log calculates the running balance and category totals automatically and is easy to back up, but it needs someone at a computer each time cash leaves the box. Many small businesses use paper vouchers at the box and transfer them into a spreadsheet at each reconciliation.</p>
<p>Whichever you choose, keep one petty cash log per fund, never edit a past line (add a correcting line instead), and start a new page or tab after each replenishment so every period has a clear opening balance of the fixed fund amount. Bookkeeping apps can also hold petty cash as a separate cash account, which suits businesses that already record expenses there.</p>

<h2>Recording petty cash in your books</h2>
<p>Under the imprest system you make only two kinds of entries. When you set up the fund, you move money from the bank account to the petty cash account. When you replenish it, you record each expense category and the cash over and short amount, paid from the bank. You do not record each $5 purchase individually in the main books; the log holds that detail. Good <a href="/blog/bookkeeping-basics">bookkeeping basics</a> make this a five-minute job.</p>
<p>If you increase or decrease the fund itself, for example from $200 to $300, record that change separately as a transfer between the bank and petty cash accounts.</p>

<h2>Receipts and record retention</h2>
<p>Petty cash payments are business expenses, so they need the same support as any other deduction. The IRS explains which records small businesses should keep, including receipts showing the amount and business purpose, in its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" target="_blank" rel="noopener noreferrer">recordkeeping guidance</a>. Scan or photograph vouchers when you reconcile, then file the paper copies by month. For how long to keep them, see our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices and records</a>.</p>

<h2>Common petty cash mistakes</h2>
<ul>
<li><strong>Too many people with access.</strong> When everyone can open the box, no one is accountable.</li>
<li><strong>Accepting IOUs.</strong> A note saying "borrowed $20" is a shortage waiting to happen.</li>
<li><strong>Missing or vague receipts.</strong> "Supplies" with no receipt is hard to defend in an audit.</li>
<li><strong>Replenishing without reconciling.</strong> Topping up a round number hides shortages.</li>
<li><strong>Using petty cash for large or regular bills.</strong> Supplier invoices should go through accounts payable.</li>
<li><strong>Recording individual purchases in two places.</strong> Under the imprest system, record expenses at replenishment, not twice.</li>
<li><strong>Keeping too much cash.</strong> A larger fund increases risk without much benefit.</li>
</ul>

<h2>Petty cash checklist</h2>
<ul>
<li>Fund amount set and written in your policy.</li>
<li>Custodian and backup named.</li>
<li>Maximum per transaction and banned uses defined.</li>
<li>Numbered vouchers in use, each with a receipt or signed explanation.</li>
<li>Log updated with a running balance after every transaction.</li>
<li>Fund reconciled at every replenishment and at month end.</li>
<li>Shortages and overages recorded and investigated.</li>
<li>Replenishment recorded by expense category in the books.</li>
<li>Vouchers scanned and filed by month.</li>
</ul>

<h2>When to replace petty cash</h2>
<p>If petty cash is used often for the same things, a business debit or prepaid card with spending limits may be easier to control, since every transaction appears on a statement. Employees who buy items for clients can also be reimbursed through expense claims and, where appropriate, the cost passed on as a <a href="/blog/reimbursable-expenses-invoice">reimbursable expense on an invoice</a>. When you bill those costs, list them as separate line items with the <a href="/invoice-generator">free invoice generator</a>, which creates the PDF in your browser; tracking and reconciling the spending itself stays in your books. For a wider system that covers cards, bank transfers and receipts too, read <a href="/blog/how-to-track-business-expenses">how to track business expenses</a>.</p>
`,
  },
  {
    slug: "how-to-track-business-expenses",
    title: "How to Track Business Expenses: A Simple System for 2026",
    description:
      "Learn how to track business expenses with a simple weekly system: separate accounts, receipt capture, tax-ready categories and a monthly review routine.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "business-expense-categories",
      "expense-report-template",
      "self-employed-tax-deductions",
      "petty-cash-log",
      "bookkeeping-basics",
    ],
    faqs: [
      {
        q: "What is the easiest way to track business expenses?",
        a: "Open a separate business bank account and card, pay for every business cost from them, and photograph each receipt as soon as you get it. Then once a week, categorize the transactions in a spreadsheet or bookkeeping app and match them to the receipts. Keeping business and personal spending apart does most of the work, because your bank statement becomes a complete list of expenses.",
      },
      {
        q: "Can I track business expenses in a spreadsheet?",
        a: "Yes. A spreadsheet with columns for date, vendor, description, category, amount, payment method and a link to the receipt works well for freelancers and very small businesses. Use the same categories each month and total them with a pivot table or SUMIF formula. As transaction volume grows, bookkeeping software that imports bank feeds automatically usually saves time and reduces errors.",
      },
      {
        q: "Do I need to keep paper receipts?",
        a: "Generally not, if you keep clear, complete digital copies. The IRS accepts electronic records that accurately reproduce the original, as long as they are legible and you can retrieve them when asked. Scan or photograph receipts promptly, because thermal paper fades. Store the files with a consistent naming pattern and back them up so they remain available for as long as you need them.",
      },
      {
        q: "How long should I keep business expense records?",
        a: "In the US, the IRS generally says to keep records supporting a tax return for three years from the date you filed, but longer periods apply in some cases, such as six years if income was substantially underreported and at least four years for employment tax records. Records for assets should be kept until the period of limitations expires for the year you dispose of the asset.",
      },
      {
        q: "What categories should I use for business expenses?",
        a: "Use categories that match your tax return so year-end filing is simple. For US sole proprietors, the Schedule C expense lines are a good starting point: advertising, car and truck expenses, contract labor, insurance, legal and professional services, office expense, rent, repairs, supplies, taxes and licenses, travel, meals and utilities. Add a few subcategories only where they help you manage the business.",
      },
      {
        q: "How do I track mileage for business?",
        a: "Keep a log of each business trip with the date, destination, business purpose and miles driven, recorded at or near the time of the trip. A mileage app or a simple notebook in the car both work. In the US you can generally deduct either the standard mileage rate set by the IRS or actual vehicle expenses, but both require records showing business use.",
      },
      {
        q: "What if I accidentally paid for a business expense with a personal card?",
        a: "Record it anyway. Save the receipt, note the business purpose, and either reimburse yourself from the business account with a clear description or record it as an owner contribution, depending on how your accountant prefers to handle it. Try to make it the exception, because frequent mixing of personal and business spending makes records harder to defend and can matter for liability protection.",
      },
      {
        q: "Should I track expenses I will bill back to clients?",
        a: "Yes. Tag reimbursable costs, such as materials or travel bought for a specific client, with the client or project name when you record them. At billing time you can then list them as separate lines on the invoice, attach receipts if the contract requires it, and make sure nothing is forgotten. Check your agreement to see whether you can add a markup.",
      },
      {
        q: "How often should I update my expense records?",
        a: "A short weekly session of 15 to 30 minutes is a good rhythm for most small businesses: categorize new transactions, attach receipts and flag anything unclear. Then do a fuller monthly review as part of your month-end close, reconciling accounts and comparing spending with your budget. Waiting until tax season usually means lost receipts and forgotten business purposes.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To track business expenses, use a separate business bank account and card, capture every receipt digitally as you go, categorize transactions weekly using categories that match your tax return, and reconcile and review spending monthly. A spreadsheet works for low volumes; bookkeeping software with bank feeds suits growing businesses.</p>

<p>Every untracked expense is a deduction you may lose and a cost you cannot manage. Yet most small business owners do not fail at expense tracking because it is hard; they fail because they have no routine, so receipts pile up until tax season. This guide gives you a simple system you can set up in an afternoon and keep running in about half an hour a week, with a template, a worked example and a checklist.</p>

<p>For clarity about our own tool: the <a href="/invoice-generator">free invoice generator</a> creates invoices as PDFs in your browser. It does not track expenses, connect to your bank or store receipts. You will use a spreadsheet or bookkeeping app for the system below, and the invoice generator for billing clients, including billing back reimbursable costs.</p>

<h2>Why tracking business expenses matters</h2>
<ul>
<li><strong>Lower taxes, legitimately.</strong> You can only deduct what you can support with records. Our list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> shows what is commonly claimed.</li>
<li><strong>Accurate profit figures.</strong> Your profit and loss statement is only as good as the expenses recorded in it.</li>
<li><strong>Better decisions.</strong> You see which costs are creeping up and which subscriptions are unused.</li>
<li><strong>Billing back costs.</strong> Client-related expenses that are not recorded are often never invoiced.</li>
<li><strong>Audit readiness.</strong> Clean records turn a tax inquiry into a short exercise rather than a crisis.</li>
</ul>

<h2>How to track business expenses in 6 steps</h2>
<h3>Step 1: Separate business and personal money</h3>
<p>Open a business checking account and a business card, and use them only for business. This one step turns your bank statement into a near-complete expense record. If you operate as an LLC or corporation, keeping finances separate also matters for preserving the legal separation between you and the business.</p>
<h3>Step 2: Choose your tool</h3>
<table><thead><tr><th>Tool</th><th>Good for</th><th>Trade-offs</th></tr></thead><tbody>
<tr><td>Spreadsheet</td><td>Freelancers, side businesses, low transaction volume</td><td>Manual entry; easy to fall behind</td></tr>
<tr><td>Bookkeeping software</td><td>Most small businesses</td><td>Monthly fee; bank feeds and receipt matching save time</td></tr>
<tr><td>Receipt scanning app</td><td>Lots of small purchases or travel</td><td>Usually works best paired with bookkeeping software</td></tr>
<tr><td>Paper ledger</td><td>Very occasional expenses, cash-heavy setups</td><td>Hard to search, total and back up</td></tr>
</tbody></table>
<p>If you are comparing accounting apps, our review of <a href="/blog/xero-vs-quickbooks">Xero vs QuickBooks</a> covers the two most common choices, and <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a> explains when a simple tool is enough.</p>
<h3>Step 3: Set up categories that match your tax return</h3>
<p>Build your category list from the expense lines on your tax return. For US sole proprietors, that means Schedule C; our <a href="/blog/schedule-c-for-freelancers">Schedule C guide for freelancers</a> lists the lines. Keep it to roughly 10 to 20 categories. Too few hides useful detail; too many leads to inconsistent choices.</p>
<h3>Step 4: Capture receipts immediately</h3>
<p>Photograph paper receipts at the point of purchase and forward email receipts to a single folder or app. Note the business purpose on anything that is not obvious, such as who you met for a business meal. The IRS lists the kinds of supporting documents businesses should keep, including receipts, invoices and canceled checks, in its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep" target="_blank" rel="noopener noreferrer">guidance on what records to keep</a>.</p>
<h3>Step 5: Categorize weekly</h3>
<p>Once a week, open your bank and card transactions, assign each a category, attach the receipt and tag any client-billable costs with the client name. Fifteen to thirty minutes a week is usually enough for a small business.</p>
<h3>Step 6: Reconcile and review monthly</h3>
<p>At month end, reconcile each account against its statement, chase any missing receipts and compare spending with your plan. A <a href="/blog/bank-reconciliation">bank reconciliation</a> confirms nothing is missing or duplicated, and comparing actuals with your <a href="/blog/small-business-budget">small business budget</a> shows where spending is drifting.</p>

<h2>Expense tracking spreadsheet template</h2>
<p>If you start with a spreadsheet, use these columns:</p>
<table><thead><tr><th>Date</th><th>Vendor</th><th>Description / business purpose</th><th>Category</th><th>Amount</th><th>Paid with</th><th>Client (if billable)</th><th>Receipt link</th></tr></thead><tbody>
<tr><td>Oct 2</td><td>Office supply store</td><td>Printer ink</td><td>Office expense</td><td>$48.00</td><td>Business card</td><td></td><td>2026-10-02-ink.pdf</td></tr>
<tr><td>Oct 5</td><td>Hardware store</td><td>Tiles for Patel kitchen job</td><td>Supplies (job materials)</td><td>$312.40</td><td>Business card</td><td>Patel</td><td>2026-10-05-tiles.jpg</td></tr>
<tr><td>Oct 9</td><td>Software company</td><td>Design software subscription</td><td>Software</td><td>$59.99</td><td>Business card</td><td></td><td>2026-10-09-software.pdf</td></tr>
</tbody></table>
<p>Name receipt files with the date and a short description so they sort automatically and are easy to find years later.</p>

<h2>Worked example: one month for a small contractor</h2>
<p>An illustrative tiling contractor records these business expenses in October:</p>
<table><thead><tr><th>Category</th><th>Transactions</th><th>Total</th></tr></thead><tbody>
<tr><td>Supplies and job materials</td><td>$312.40 + $528.60 + $159.00</td><td>$1,000.00</td></tr>
<tr><td>Car and truck (fuel)</td><td>$84.50 + $91.20 + $76.30</td><td>$252.00</td></tr>
<tr><td>Tools and small equipment</td><td>$189.00</td><td>$189.00</td></tr>
<tr><td>Software and phone</td><td>$59.99 + $45.00</td><td>$104.99</td></tr>
<tr><td>Insurance</td><td>$135.00</td><td>$135.00</td></tr>
<tr><td>Advertising</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td><strong>Total</strong></td><td></td><td><strong>$1,755.99</strong></td></tr>
</tbody></table>
<p>The arithmetic: $1,000.00 + $252.00 + $189.00 + $104.99 + $135.00 + $75.00 = $1,755.99.</p>
<p>Two of the material purchases, $312.40 and $528.60, were bought for the Patel kitchen job, which the contract says is billed at cost. Billable total: $312.40 + $528.60 = $841.00. Because they were tagged by client, the contractor adds an $841.00 materials line to the Patel invoice and attaches the receipts. Without tracking, it is easy to forget part of that amount, which would come straight out of profit. Our guide to <a href="/blog/reimbursable-expenses-invoice">billing reimbursable expenses on an invoice</a> explains how to present them.</p>
<p>The fuel figures should also tie to a mileage log, since the IRS generally expects records showing business use of a vehicle, whichever deduction method you use.</p>

<h2>Special cases</h2>
<h3>Cash purchases</h3>
<p>Get a receipt for every cash payment and record it the same week. If you keep a cash box for small costs, run it through a <a href="/blog/petty-cash-log">petty cash log</a> so it stays reconciled.</p>
<h3>Mixed-use expenses</h3>
<p>Phones, internet, vehicles and home offices are often used partly for business. Track the business share with a reasonable, documented method, such as a mileage log or a record of the area of your home used for business, and ask a tax professional how to apply it.</p>
<h3>Recurring subscriptions</h3>
<p>List every subscription with its renewal date and monthly cost. Review the list quarterly; small recurring charges are the expenses most likely to grow unnoticed. Cancel anything nobody has used in the last 90 days, and set a calendar reminder a month before each annual plan renews so you can decide before you are charged.</p>
<h3>Quarterly tax planning</h3>
<p>Up-to-date expenses let you estimate profit during the year, which you need for estimated tax payments. See <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a>.</p>

<h2>How to track business expenses as you grow</h2>
<p>The right system depends on the size of the business, and it should change as you grow.</p>
<table><thead><tr><th>Stage</th><th>Typical volume</th><th>Suggested setup</th></tr></thead><tbody>
<tr><td>Side business or new freelancer</td><td>A handful of expenses a month</td><td>Separate account, spreadsheet, receipt folder, monthly review</td></tr>
<tr><td>Established freelancer</td><td>Dozens a month</td><td>Bookkeeping app with bank feeds, receipt capture app, weekly categorizing</td></tr>
<tr><td>Small team</td><td>Many purchases by several people</td><td>Employee cards with limits or an expense claim process, approval rules, monthly close</td></tr>
</tbody></table>
<p>Once other people spend money for the business, add three controls: a written expense policy saying what can be bought and how receipts must be submitted, an approval step for claims above a set amount, and a deadline for submitting receipts each month. Reimburse employees promptly against approved claims with receipts attached, and never pay out on a claim without one unless a signed explanation is filed with it.</p>
<p>Whatever the size, the principle of how to track business expenses does not change: one place where every cost is recorded, a receipt behind every entry, consistent categories and a regular review. Software makes it faster, but the routine is what keeps the records complete.</p>

<h2>How long to keep expense records</h2>
<p>In the US, the IRS generally asks you to keep records that support items on a tax return until the period of limitations for that return runs out, commonly three years from filing, with longer periods in specific situations, such as underreported income or employment tax records. Asset records should be kept longer. Check the IRS page on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" target="_blank" rel="noopener noreferrer">how long to keep records</a>, or our summary on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>, and ask your accountant if you are unsure. Outside the US, rules differ, so check with your local tax authority.</p>

<h2>Common expense tracking mistakes</h2>
<ul>
<li><strong>Mixing personal and business spending.</strong> It doubles the work and weakens your records.</li>
<li><strong>Waiting until tax season.</strong> Receipts fade, get lost, and business purposes are forgotten.</li>
<li><strong>Relying on bank statements alone.</strong> A statement shows the amount and vendor, not what you bought or why.</li>
<li><strong>Inconsistent categories.</strong> Putting the same kind of cost in different categories distorts reports.</li>
<li><strong>Forgetting small cash expenses.</strong> Parking, postage and tips add up over a year.</li>
<li><strong>Not tagging billable costs.</strong> Unbilled reimbursable expenses are lost revenue.</li>
<li><strong>Treating every purchase as deductible.</strong> Personal costs remain personal even if paid from the business account; when unsure, ask a tax professional.</li>
</ul>

<h2>Weekly and monthly expense tracking checklist</h2>
<p><strong>Weekly:</strong></p>
<ul>
<li>All receipts photographed or forwarded to your receipt folder.</li>
<li>New bank and card transactions categorized.</li>
<li>Business purpose noted for meals, travel and anything unusual.</li>
<li>Client-billable costs tagged with the client or project.</li>
<li>Mileage log updated.</li>
</ul>
<p><strong>Monthly:</strong></p>
<ul>
<li>Every account reconciled to its statement.</li>
<li>Missing receipts chased or documented.</li>
<li>Billable expenses added to client invoices.</li>
<li>Spending compared with budget; subscriptions reviewed.</li>
<li>Records backed up.</li>
</ul>

<h2>Next step</h2>
<p>This week, open a dedicated business account if you do not have one, create the spreadsheet above or choose an app, and set a recurring 30-minute calendar slot for categorizing. Then bill any client costs you have been carrying with an itemized invoice. For more on running the numbers side of your business, browse the <a href="/blog/category/business-finance">business finance articles</a>.</p>
`,
  },
];
