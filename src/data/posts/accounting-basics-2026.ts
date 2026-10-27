import type { PostDraft } from "../blog";

export const ACCOUNTING_BASICS_2026_POSTS: PostDraft[] = [
  {
    slug: "general-ledger",
    title: "General Ledger: What It Is, Examples and How It Works",
    description:
      "Learn what a general ledger is, how transactions flow into it from invoices and bills, and see a worked example with account balances you can follow.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["trial-balance", "journal-entries", "bookkeeping-basics"],
    faqs: [
      {
        q: "What is a general ledger in simple terms?",
        a: "A general ledger is the master record of every account a business uses, such as cash, accounts receivable, revenue, rent and loans. Each transaction is posted to at least two of those accounts, and each account keeps a running balance. Think of it as the central filing cabinet of your books: invoices, receipts and bank activity all end up summarized there, and your financial statements are built from its balances.",
      },
      {
        q: "What is the difference between a journal and a general ledger?",
        a: "The journal records transactions in date order, one entry at a time, showing which accounts are debited and credited. The ledger reorganizes the same information by account, so you can see everything that happened to cash, or to accounts receivable, in one place along with a running balance. You record in the journal first and post to the ledger second. Accounting software does both steps at once when you save a transaction.",
      },
      {
        q: "What are the five main types of general ledger accounts?",
        a: "The five standard account types are assets, liabilities, equity, revenue and expenses. Assets are what the business owns, liabilities are what it owes, and equity is the owner's stake. Revenue and expenses track income earned and costs incurred during the period, and their net result flows into equity at year-end. Many charts of accounts number these groups in blocks, for example 1000s for assets and 4000s for revenue.",
      },
      {
        q: "Does a small business need a general ledger?",
        a: "If you use double-entry bookkeeping, you have a general ledger, whether you call it that or not. Every mainstream accounting app keeps one behind the scenes. Very small businesses on single-entry, cash-basis records may only keep a cash book or spreadsheet, which can be enough for a simple tax return. Once you have receivables, payables, loans or equipment, a proper ledger makes your reports far more reliable.",
      },
      {
        q: "What is a subsidiary ledger?",
        a: "A subsidiary ledger holds the detail behind one ledger account. The accounts receivable subledger, for example, lists every customer and every unpaid invoice, while the main ledger shows only the total receivables balance. The total of the subledger should equal the control account in the main ledger. Accounts payable, inventory and fixed assets commonly have subledgers too, because the detail would clutter the main ledger.",
      },
      {
        q: "How often should I update the general ledger?",
        a: "Record transactions at least weekly, and post every invoice, bill and bank transaction before you close each month. Many owners connect bank feeds so transactions arrive daily and only need categorizing. The key deadline is the month-end close: reconcile cash and card accounts, review receivables and payables, then run a trial balance. Leaving everything until tax season makes errors much harder to trace.",
      },
      {
        q: "Can I keep a general ledger in Excel or Google Sheets?",
        a: "Yes, for a small number of transactions. Set up one tab per account or a single table with columns for date, account, description, debit and credit, then use pivot tables or SUMIF formulas to total each account. The weakness is control: spreadsheets do not stop you entering an unbalanced entry or deleting a row. If your transaction volume grows, accounting software is usually safer and saves time.",
      },
      {
        q: "Is a general ledger the same as a general ledger report?",
        a: "Not quite. The ledger is the underlying set of accounts and postings. A general ledger report, often called a GL detail report, is a printout or export of those postings for a date range, usually grouped by account with opening balances, each transaction and closing balances. Accountants request it during audits, tax preparation and reviews because it shows the evidence behind every number on the financial statements.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A general ledger is the complete set of accounts a business uses to record its finances, with every transaction posted as equal debits and credits. Each account (cash, receivables, revenue, rent and so on) keeps a running balance, and those balances feed the trial balance and financial statements.</p>

<p>If an accountant has asked for your GL, or you are setting up books for the first time, this guide explains what the ledger is, how it is organized, and how a single invoice travels from a PDF on your desk to a line on your balance sheet. You will see a worked example for one month of activity, a sample ledger account with running balances, and a checklist for keeping the books clean.</p>

<p>A quick note on scope: the <a href="/invoice-generator">free invoice generator</a> on this site creates PDF invoices in your browser. It does not keep a ledger, post transactions or produce reports, so you will record each invoice in your bookkeeping software or spreadsheet separately. Everything below applies whichever system you use.</p>

<h2>What is a general ledger?</h2>
<p>A general ledger is the central record of a business's accounts. Every financial event, whether a sale, a supplier bill, a loan payment or the owner putting money in, is recorded in at least two accounts under the rules of <a href="/blog/double-entry-bookkeeping">double-entry bookkeeping</a>. The ledger then shows, for each account, every posting and the balance after it.</p>
<p>The ledger sits in the middle of the accounting cycle:</p>
<ol>
<li><strong>Source documents.</strong> Invoices, receipts, bank statements, payroll reports and contracts prove that a transaction happened.</li>
<li><strong>Journal.</strong> Each transaction is recorded in date order as a <a href="/blog/journal-entries">journal entry</a> showing the accounts debited and credited.</li>
<li><strong>Ledger.</strong> The journal entries are posted to the individual accounts, which keep running balances.</li>
<li><strong>Trial balance.</strong> At period end, every account balance is listed to check that total debits equal total credits.</li>
<li><strong>Financial statements.</strong> The balances are arranged into the profit and loss statement, balance sheet and cash flow statement.</li>
</ol>
<p>In modern software, steps two and three happen in one click. When you record a customer invoice, the app writes the journal entry and posts it to the ledger automatically. Understanding the ledger still matters, because that is where you go when a number on a report looks wrong.</p>

<h2>Chart of accounts: how the ledger is organized</h2>
<p>The ledger is structured by a chart of accounts, a numbered list of every account you use. Most small businesses follow a numbering pattern like the one below. The exact numbers are a convention, not a legal requirement, so your software may use different ranges.</p>
<table><thead><tr><th>Account type</th><th>Typical number range</th><th>Normal balance</th><th>Examples</th></tr></thead><tbody>
<tr><td>Assets</td><td>1000–1999</td><td>Debit</td><td>Cash, accounts receivable, inventory, equipment</td></tr>
<tr><td>Liabilities</td><td>2000–2999</td><td>Credit</td><td>Accounts payable, sales tax payable, loans, customer deposits</td></tr>
<tr><td>Equity</td><td>3000–3999</td><td>Credit</td><td>Owner's capital, owner's draws, retained earnings</td></tr>
<tr><td>Revenue</td><td>4000–4999</td><td>Credit</td><td>Service revenue, product sales, interest income</td></tr>
<tr><td>Expenses</td><td>5000–6999</td><td>Debit</td><td>Cost of goods sold, rent, wages, software, utilities</td></tr>
</tbody></table>
<p>The first three groups are balance sheet accounts: their balances carry forward from year to year. Revenue and expense accounts are income statement accounts: at year-end their net result is closed into equity (retained earnings or owner's capital) and they start the new year at zero.</p>
<p>Keep the chart short. A freelancer may need only 20 to 30 accounts. Adding a new account for every vendor or client is a common mistake; that level of detail belongs in subsidiary ledgers or tags, not the main ledger.</p>

<h2>General ledger vs journal vs subsidiary ledgers</h2>
<p>These three records hold the same transactions arranged in different ways.</p>
<table><thead><tr><th>Record</th><th>Organized by</th><th>What it answers</th></tr></thead><tbody>
<tr><td>Journal</td><td>Date</td><td>What happened on March 8, and which accounts did it touch?</td></tr>
<tr><td>General ledger</td><td>Account</td><td>What is the balance of accounts receivable, and how did it get there?</td></tr>
<tr><td>Subsidiary ledger</td><td>Customer, vendor or asset</td><td>Which customers owe us money, and for which invoices?</td></tr>
</tbody></table>
<p>The accounts receivable control account in the main ledger shows one total. The customer subledger, or an aging report, shows which invoices make up that total. If you are building out collections, our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a> explains how to manage that detail. The rule to remember: the subledger total must match the control account. If it does not, something was posted to one and not the other.</p>

<h2>General ledger example: one month for a small studio</h2>
<p>Here is an illustrative example for a fictional business, Cedar Lane Design, in its first month. The amounts are made up to show the mechanics.</p>
<table><thead><tr><th>Date</th><th>Transaction</th><th>Debit</th><th>Credit</th><th>Amount</th></tr></thead><tbody>
<tr><td>Mar 1</td><td>Owner invests cash</td><td>Cash</td><td>Owner's capital</td><td>$10,000</td></tr>
<tr><td>Mar 3</td><td>Pays March rent</td><td>Rent expense</td><td>Cash</td><td>$1,500</td></tr>
<tr><td>Mar 8</td><td>Sends invoice INV-1001 for design work</td><td>Accounts receivable</td><td>Service revenue</td><td>$4,000</td></tr>
<tr><td>Mar 12</td><td>Buys a computer for cash</td><td>Equipment</td><td>Cash</td><td>$2,000</td></tr>
<tr><td>Mar 20</td><td>Client pays part of INV-1001</td><td>Cash</td><td>Accounts receivable</td><td>$2,500</td></tr>
<tr><td>Mar 28</td><td>Receives utility bill, not yet paid</td><td>Utilities expense</td><td>Accounts payable</td><td>$600</td></tr>
</tbody></table>
<p>Total debits: $10,000 + $1,500 + $4,000 + $2,000 + $2,500 + $600 = $20,600. Total credits are the same $20,600, because each line has an equal debit and credit.</p>
<h3>The cash account in the ledger</h3>
<p>Posting those entries to the cash account gives this running balance:</p>
<table><thead><tr><th>Date</th><th>Description</th><th>Debit</th><th>Credit</th><th>Balance</th></tr></thead><tbody>
<tr><td>Mar 1</td><td>Owner investment</td><td>$10,000</td><td></td><td>$10,000</td></tr>
<tr><td>Mar 3</td><td>March rent</td><td></td><td>$1,500</td><td>$8,500</td></tr>
<tr><td>Mar 12</td><td>Computer purchase</td><td></td><td>$2,000</td><td>$6,500</td></tr>
<tr><td>Mar 20</td><td>Payment on INV-1001</td><td>$2,500</td><td></td><td>$9,000</td></tr>
</tbody></table>
<p>Arithmetic: $10,000 − $1,500 = $8,500; $8,500 − $2,000 = $6,500; $6,500 + $2,500 = $9,000. That closing figure should match the bank statement once timing differences are cleared, which is exactly what a <a href="/blog/bank-reconciliation">bank reconciliation</a> checks.</p>
<h3>The accounts receivable account</h3>
<p>Accounts receivable starts at $4,000 on March 8 and drops to $1,500 after the $2,500 payment ($4,000 − $2,500 = $1,500). The client still owes $1,500 on INV-1001. A clear, consistent invoice number, which you can create with the <a href="/tools/invoice-number-generator">invoice number generator</a>, is what lets you match that payment to the right open item.</p>
<h3>Closing balances</h3>
<table><thead><tr><th>Account</th><th>Debit balance</th><th>Credit balance</th></tr></thead><tbody>
<tr><td>Cash</td><td>$9,000</td><td></td></tr>
<tr><td>Accounts receivable</td><td>$1,500</td><td></td></tr>
<tr><td>Equipment</td><td>$2,000</td><td></td></tr>
<tr><td>Accounts payable</td><td></td><td>$600</td></tr>
<tr><td>Owner's capital</td><td></td><td>$10,000</td></tr>
<tr><td>Service revenue</td><td></td><td>$4,000</td></tr>
<tr><td>Rent expense</td><td>$1,500</td><td></td></tr>
<tr><td>Utilities expense</td><td>$600</td><td></td></tr>
<tr><td><strong>Totals</strong></td><td><strong>$14,600</strong></td><td><strong>$14,600</strong></td></tr>
</tbody></table>
<p>Debits: $9,000 + $1,500 + $2,000 + $1,500 + $600 = $14,600. Credits: $600 + $10,000 + $4,000 = $14,600. The two columns agree, so this listing is a valid <a href="/blog/trial-balance">trial balance</a>. From here, revenue of $4,000 minus expenses of $2,100 gives a profit of $1,900 for the month.</p>

<h2>How to read a general ledger report</h2>
<p>Most accounting apps can export a GL detail report. It typically shows, for each account:</p>
<ul>
<li><strong>Opening balance</strong> at the start of the date range.</li>
<li><strong>Each posting</strong> with date, reference (invoice or bill number), description, debit or credit amount and the source module.</li>
<li><strong>Running balance</strong> after each line.</li>
<li><strong>Closing balance</strong> and period totals.</li>
</ul>
<p>When you review it, scan for postings in the wrong account (a client payment in revenue instead of receivables is common), duplicated entries with the same reference, and balances on the "wrong" side, such as a credit balance in an expense account. Any of those is worth investigating before you produce reports.</p>

<h2>Keeping a general ledger: software or spreadsheet?</h2>
<p>You can keep the books in either, but the trade-offs are real.</p>
<table><thead><tr><th>Factor</th><th>Accounting software</th><th>Spreadsheet</th></tr></thead><tbody>
<tr><td>Balancing</td><td>Usually refuses to save an entry where debits and credits differ</td><td>Accepts anything you type</td></tr>
<tr><td>Bank data</td><td>Bank feeds import transactions for you to categorize</td><td>Manual entry or CSV import</td></tr>
<tr><td>Reports</td><td>Trial balance, P&amp;L and balance sheet in a click</td><td>Built yourself with pivot tables or SUMIF formulas</td></tr>
<tr><td>Audit trail</td><td>Logs edits and can lock closed periods</td><td>Rows can be changed or deleted without a record</td></tr>
<tr><td>Cost</td><td>Monthly subscription for most products</td><td>Free or included in software you already have</td></tr>
</tbody></table>
<p>A spreadsheet ledger can work for a freelancer with a few dozen transactions a month. Use one table with columns for date, reference, account, description, debit and credit, record each entry on two or more rows, and add a check cell that flags any reference whose debits and credits do not match. Once you have regular receivables, payables, payroll or inventory, the controls in software usually pay for themselves in time saved at month-end and fewer errors for your accountant to unpick.</p>
<p>Whichever you choose, keep the structure the same: one chart of accounts, consistent account names, and every posting linked to a source document by its reference number.</p>

<h2>How long to keep ledger records</h2>
<p>Your ledger and the invoices, receipts and bank statements behind it are business records. In the US, the IRS explains how long to keep records on its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" target="_blank" rel="noopener noreferrer">recordkeeping page for small businesses</a>; the period depends on the kind of record and your situation, and other countries set their own rules. Store the PDF of every invoice you issue alongside the ledger entry that recorded it, so anyone can trace a balance back to its source.</p>

<h2>Common mistakes with the ledger</h2>
<ul>
<li><strong>Posting customer payments as new revenue.</strong> If the invoice was already recorded, the payment reduces receivables. Recording it as revenue counts the sale twice.</li>
<li><strong>Too many accounts.</strong> One account per client or per supplier makes reports unreadable. Use subledgers or tags.</li>
<li><strong>Using a suspense or "ask my accountant" account as a parking lot.</strong> Clear it every month.</li>
<li><strong>Editing closed periods.</strong> Changing last year's entries after the tax return is filed creates mismatches. Post a correcting entry in the current period and document why.</li>
<li><strong>Mixing personal spending into business accounts.</strong> It inflates expenses and hides draws.</li>
<li><strong>Not reconciling the control accounts.</strong> Cash should match the bank, and receivables should match the customer aging list.</li>
</ul>

<h2>Monthly ledger checklist</h2>
<ul>
<li>Every invoice issued this month is recorded, with no gaps in the number sequence.</li>
<li>Every supplier bill and expense receipt is recorded and categorized.</li>
<li>Bank, card and payment processor accounts are reconciled to statements.</li>
<li>The receivables and payables subledgers agree with their control accounts.</li>
<li>Suspense and uncategorized accounts are cleared to zero.</li>
<li>Sales tax collected sits in a liability account, not revenue.</li>
<li>A trial balance is run and debits equal credits.</li>
<li>The period is locked once reports are reviewed, following your <a href="/blog/month-end-close-checklist">month-end close checklist</a>.</li>
</ul>

<h2>Next step</h2>
<p>The ledger is only as good as the documents that feed it. Make sure every job turns into a numbered invoice quickly, then record it the same day. If you are still deciding whether you need full software, our comparison of an <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a> explains where each fits, and the <a href="/blog/category/business-finance">business finance articles</a> cover the reports your ledger produces.</p>
`,
  },
  {
    slug: "trial-balance",
    title: "Trial Balance: Format, Example and How to Prepare One",
    description:
      "See the trial balance format, follow a worked example that balances to the cent, and learn how to prepare one, adjust it and track down errors quickly.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["general-ledger", "journal-entries", "month-end-close-checklist"],
    faqs: [
      {
        q: "What is a trial balance in simple terms?",
        a: "A trial balance is a list of every account in your ledger with its closing balance placed in either a debit column or a credit column. You total both columns. Under double-entry bookkeeping the totals should be equal, so matching totals give you basic assurance that entries were recorded with equal debits and credits. It is an internal working report, prepared before the financial statements, not something you usually publish.",
      },
      {
        q: "Why is a trial balance prepared?",
        a: "It is prepared to check the arithmetical accuracy of the ledger and to give a single, compact list of balances from which the profit and loss statement and balance sheet can be drafted. Accountants also use it as the starting point for adjusting entries, for reviewing unusual balances and for handing the books to a tax preparer or auditor. Most software can produce one in seconds for any date.",
      },
      {
        q: "What errors are not revealed by a trial balance?",
        a: "Several. An omitted transaction leaves both columns equally short. An entry posted to the wrong account of the same type, such as rent recorded as utilities, still balances. So does an entry recorded with the wrong amount on both sides, a reversed entry with debit and credit swapped, or two separate mistakes that happen to cancel out. That is why reconciliations and reviews are still needed after the totals agree.",
      },
      {
        q: "What are the three types of trial balance?",
        a: "The unadjusted trial balance is prepared from the ledger before period-end adjustments. The adjusted trial balance is prepared after adjusting entries for items such as depreciation, accruals and deferred revenue, and it is the version used to prepare financial statements. The post-closing trial balance is prepared after revenue and expense accounts are closed to equity, so it contains only balance sheet accounts.",
      },
      {
        q: "What should I do if my trial balance does not balance?",
        a: "Find the difference between the two totals first. Check whether that amount appears as a balance or transaction anywhere, since a balance may be missing. Halve it to see if an item was placed in the wrong column. If the difference divides evenly by 9, look for transposed digits, such as 540 typed as 450. Then recheck additions and confirm every journal entry balances on its own.",
      },
      {
        q: "Is a trial balance the same as a balance sheet?",
        a: "No. A trial balance lists every account, including revenue and expenses, in debit and credit columns, and is used internally. A balance sheet reports only assets, liabilities and equity in a structured format for owners, lenders and others. You prepare the balance sheet and profit and loss statement from the adjusted trial balance, so the trial balance comes first and the statements are built from it.",
      },
      {
        q: "Which side does each account go on in a trial balance?",
        a: "Accounts appear on the side of their normal balance. Assets, expenses and owner's draws normally carry debit balances and go in the debit column. Liabilities, equity and revenue normally carry credit balances and go in the credit column. Contra accounts are the exception: accumulated depreciation and an allowance for doubtful accounts are credit balances even though they relate to assets.",
      },
      {
        q: "How often should a small business run a trial balance?",
        a: "Run one at every month-end close, after reconciling bank and card accounts and before producing monthly reports. It takes seconds in accounting software, so many bookkeepers also run it mid-month when investigating a problem. At year-end, the adjusted trial balance is usually the document your accountant or tax preparer asks for first, along with the general ledger detail behind it.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A trial balance is a list of every ledger account with its closing balance shown in a debit or credit column. If total debits equal total credits, the books are arithmetically in balance. It is prepared at period end, before adjustments and financial statements, and it does not catch every kind of error.</p>

<p>This report is the checkpoint between day-to-day bookkeeping and the reports you show a lender or tax preparer. This guide gives you a format you can copy, a fully worked example that balances, the difference between unadjusted, adjusted and post-closing versions, and a practical method for tracking down a difference when the columns refuse to agree.</p>

<p>On scope: the <a href="/invoice-generator">invoice generator</a> on this site builds PDF invoices in your browser. It does not keep a ledger or produce accounting reports, so the balances in this article come from your bookkeeping software or spreadsheet, fed by the invoices you issue.</p>

<h2>What is a trial balance?</h2>
<p>Under <a href="/blog/double-entry-bookkeeping">double-entry bookkeeping</a>, every transaction is recorded with equal debits and credits. If that rule was followed, then adding up all the debit balances in the ledger and all the credit balances should give the same number. The trial balance is simply that test, laid out as a report.</p>
<p>It is called a "trial" because it is a working check, not a finished statement. Owners rarely see it; accountants use it constantly. It does three jobs:</p>
<ul>
<li><strong>Arithmetic check.</strong> Equal totals confirm that the ledger is mathematically consistent.</li>
<li><strong>Summary of balances.</strong> One page shows every account, which makes unusual numbers easy to spot.</li>
<li><strong>Bridge to the statements.</strong> The adjusted version is the source for the profit and loss statement and balance sheet.</li>
</ul>

<h2>Trial balance format</h2>
<p>The standard layout has four columns. Accounts are listed in chart-of-accounts order: assets, liabilities, equity, revenue, expenses.</p>
<table><thead><tr><th>Account no.</th><th>Account name</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>1000</td><td>Cash</td><td>Balance</td><td></td></tr>
<tr><td>1100</td><td>Accounts receivable</td><td>Balance</td><td></td></tr>
<tr><td>2000</td><td>Accounts payable</td><td></td><td>Balance</td></tr>
<tr><td>3000</td><td>Owner's capital</td><td></td><td>Balance</td></tr>
<tr><td>4000</td><td>Revenue</td><td></td><td>Balance</td></tr>
<tr><td>5000</td><td>Expenses (each listed)</td><td>Balance</td><td></td></tr>
<tr><td></td><td><strong>Totals</strong></td><td><strong>Sum</strong></td><td><strong>Sum</strong></td></tr>
</tbody></table>
<p>The heading should state the business name, "Trial Balance", and the date, for example "as of April 30, 2026". Each balance goes on the side of the account's normal balance:</p>
<table><thead><tr><th>Account type</th><th>Normal balance column</th></tr></thead><tbody>
<tr><td>Assets, expenses, owner's draws or dividends</td><td>Debit</td></tr>
<tr><td>Liabilities, equity, revenue</td><td>Credit</td></tr>
<tr><td>Contra-assets (accumulated depreciation, allowance for doubtful accounts)</td><td>Credit</td></tr>
</tbody></table>

<h2>How to prepare a trial balance step by step</h2>
<ol>
<li><strong>Record everything for the period.</strong> Every invoice, bill, payment, payroll run and bank fee should be in the books as a <a href="/blog/journal-entries">journal entry</a>.</li>
<li><strong>Post to the ledger.</strong> Software does this automatically. On paper, post each entry to its accounts in the <a href="/blog/general-ledger">general ledger</a>.</li>
<li><strong>Reconcile key accounts.</strong> Match cash to the bank statement with a <a href="/blog/bank-reconciliation">bank reconciliation</a>, and check that receivables and payables agree with the customer and supplier lists.</li>
<li><strong>Find each closing balance.</strong> For each account, total the debits and credits and take the difference.</li>
<li><strong>List the balances.</strong> Put each one in the debit or credit column according to its normal balance. Include accounts with zero balances only if your format requires it.</li>
<li><strong>Total both columns.</strong> If they match, move on to adjustments. If not, investigate before going further.</li>
</ol>

<h2>Trial balance example</h2>
<p>Here is an illustrative unadjusted listing for the fictional Cedar Lane Design as of April 30. The figures are invented to show the method.</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Cash</td><td>$12,400</td><td></td></tr>
<tr><td>Accounts receivable</td><td>$5,600</td><td></td></tr>
<tr><td>Equipment</td><td>$6,000</td><td></td></tr>
<tr><td>Accumulated depreciation</td><td></td><td>$500</td></tr>
<tr><td>Accounts payable</td><td></td><td>$1,900</td></tr>
<tr><td>Sales tax payable</td><td></td><td>$450</td></tr>
<tr><td>Loan payable</td><td></td><td>$4,000</td></tr>
<tr><td>Owner's capital</td><td></td><td>$15,000</td></tr>
<tr><td>Owner's draws</td><td>$2,000</td><td></td></tr>
<tr><td>Service revenue</td><td></td><td>$18,500</td></tr>
<tr><td>Rent expense</td><td>$3,000</td><td></td></tr>
<tr><td>Wages expense</td><td>$9,000</td><td></td></tr>
<tr><td>Software expense</td><td>$650</td><td></td></tr>
<tr><td>Utilities expense</td><td>$900</td><td></td></tr>
<tr><td>Depreciation expense</td><td>$500</td><td></td></tr>
<tr><td>Interest expense</td><td>$300</td><td></td></tr>
<tr><td><strong>Totals</strong></td><td><strong>$40,350</strong></td><td><strong>$40,350</strong></td></tr>
</tbody></table>
<p>Checking the debit column: $12,400 + $5,600 = $18,000; + $6,000 = $24,000; + $2,000 = $26,000; + $3,000 = $29,000; + $9,000 = $38,000; + $650 = $38,650; + $900 = $39,550; + $500 = $40,050; + $300 = $40,350.</p>
<p>Checking the credit column: $500 + $1,900 = $2,400; + $450 = $2,850; + $4,000 = $6,850; + $15,000 = $21,850; + $18,500 = $40,350.</p>
<p>Both columns total $40,350, so the ledger is in balance. Notice two details: sales tax collected sits in a liability, not revenue, and owner's draws are a debit to equity, not an expense. Depreciation appears because the studio records it monthly; our guide on <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a> explains where that $500 comes from.</p>

<h2>Unadjusted, adjusted and post-closing versions</h2>
<table><thead><tr><th>Version</th><th>When</th><th>What it contains</th></tr></thead><tbody>
<tr><td>Unadjusted</td><td>After posting routine transactions</td><td>All accounts before period-end adjustments</td></tr>
<tr><td>Adjusted</td><td>After adjusting entries</td><td>All accounts, updated for accruals, deferrals and depreciation; used for the statements</td></tr>
<tr><td>Post-closing</td><td>After closing entries at year-end</td><td>Only balance sheet accounts; revenue and expenses are zero</td></tr>
</tbody></table>
<h3>Adjusting example</h3>
<p>Suppose Cedar Lane finished $800 of work in April but will not invoice it until May. Under accrual accounting, the revenue belongs in April. The adjusting entry debits accrued revenue (an asset) $800 and credits service revenue $800. The adjusted totals become $40,350 + $800 = $41,150 in each column. The difference between earned-but-unbilled revenue and cash received in advance is covered in <a href="/blog/deferred-revenue-vs-accrued-revenue">deferred revenue vs accrued revenue</a>.</p>
<p>From the adjusted listing, revenue of $19,300 ($18,500 + $800) less expenses of $14,350 ($3,000 + $9,000 + $650 + $900 + $500 + $300) gives net income of $4,950. That figure becomes the bottom line of the <a href="/blog/profit-and-loss-statement">profit and loss statement</a>, and the asset, liability and equity balances feed the <a href="/blog/balance-sheet-small-business">balance sheet</a>.</p>

<h2>What balanced totals do not prove</h2>
<p>Equal totals are necessary but not sufficient. These errors leave the columns balanced:</p>
<table><thead><tr><th>Error type</th><th>Example</th></tr></thead><tbody>
<tr><td>Omission</td><td>A supplier bill was never entered at all.</td></tr>
<tr><td>Commission</td><td>A payment from Client A was applied to Client B's receivable.</td></tr>
<tr><td>Principle</td><td>A computer purchase was recorded as office supplies expense instead of equipment.</td></tr>
<tr><td>Original entry</td><td>An invoice for $1,250 was entered as $1,520 on both sides.</td></tr>
<tr><td>Reversal</td><td>The debit and credit accounts were swapped.</td></tr>
<tr><td>Compensating</td><td>Two unrelated mistakes of the same amount cancel out.</td></tr>
</tbody></table>
<p>That is why reconciliations, a review of the customer aging list and a sense-check against last month are part of every close.</p>

<h2>Trial balance vs balance sheet vs general ledger</h2>
<p>These three are easy to mix up because they draw on the same numbers.</p>
<table><thead><tr><th>Report</th><th>What it lists</th><th>Who uses it</th></tr></thead><tbody>
<tr><td>General ledger</td><td>Every posting to every account, with running balances</td><td>Bookkeepers and auditors tracing detail</td></tr>
<tr><td>Trial balance</td><td>One closing balance per account, in debit and credit columns</td><td>Bookkeepers and accountants checking and summarizing</td></tr>
<tr><td>Balance sheet</td><td>Assets, liabilities and equity only, in a formal layout</td><td>Owners, lenders, investors and tax authorities</td></tr>
</tbody></table>
<p>Think of them as levels of zoom. The ledger is the full detail, the trial listing is the one-page summary, and the balance sheet and P&amp;L are the polished reports built from that summary. When a figure on the balance sheet looks wrong, you work backward: find the account on the trial listing, then open its ledger detail to see which postings created the balance.</p>

<h2>Recordkeeping and who prepares it</h2>
<p>Most small businesses do not prepare this listing by hand. Accounting software produces one on demand, and a bookkeeper or accountant reviews it at month-end or year-end. If you keep books in a spreadsheet, you will build it yourself with a SUMIF or pivot table that totals debits and credits by account. Either way, keep the supporting records. The IRS guide <a href="https://www.irs.gov/publications/p583" target="_blank" rel="noopener noreferrer">Publication 583, Starting a Business and Keeping Records</a> explains the kinds of records US businesses should retain to support the figures in their books; other countries publish similar guidance.</p>

<h2>How to find the difference when it does not balance</h2>
<ol>
<li><strong>Calculate the difference.</strong> Subtract the smaller total from the larger.</li>
<li><strong>Search for that amount.</strong> A whole balance may be missing from the listing.</li>
<li><strong>Divide by 2.</strong> If a $300 debit was listed as a credit, the totals differ by $600. Look for a $300 balance on the wrong side.</li>
<li><strong>Divide by 9.</strong> A difference that divides evenly by 9 often points to transposed digits ($540 entered as $450 creates a $90 gap) or a misplaced decimal.</li>
<li><strong>Re-add both columns.</strong> Simple addition errors are more common than anyone admits.</li>
<li><strong>Check that each journal entry balances.</strong> Spreadsheets will happily accept a one-sided entry; software usually will not.</li>
</ol>
<p>If you use accounting software and the totals still disagree, the cause is usually an imported opening balance, a manual entry made outside the normal workflow, or a corrupted conversion from an older system. Run the report for earlier dates to find the first month where the columns stopped agreeing, then review the manual entries posted in that month. Narrowing the date range is often faster than checking every account.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Treating a balanced report as proof the books are right.</strong> See the error table above.</li>
<li><strong>Listing contra accounts on the wrong side.</strong> Accumulated depreciation is a credit.</li>
<li><strong>Skipping the bank reconciliation first.</strong> You end up balancing numbers that are themselves wrong.</li>
<li><strong>Leaving a balance in suspense.</strong> Forcing the totals to agree through a suspense account just hides the problem.</li>
<li><strong>Preparing statements from the unadjusted version.</strong> Accruals, deferrals and depreciation will be missing.</li>
</ul>

<h2>Trial balance checklist</h2>
<ul>
<li>All invoices for the period are recorded, with no gaps in numbering.</li>
<li>All supplier bills, payroll and bank fees are recorded.</li>
<li>Bank and card accounts are reconciled.</li>
<li>Receivables and payables agree with their subledgers.</li>
<li>Each balance is listed on its normal side, contra accounts included.</li>
<li>Both columns are totaled and equal.</li>
<li>Adjusting entries are posted and an adjusted version is produced.</li>
<li>Unusual balances are investigated before statements go out, as part of the <a href="/blog/month-end-close-checklist">month-end close checklist</a>.</li>
</ul>

<h2>Next step</h2>
<p>A clean listing starts with complete revenue records, so issue every invoice promptly and record it the same day. For more on the reports built from your adjusted balances, browse the <a href="/blog/category/business-finance">business finance guides</a>.</p>
`,
  },
  {
    slug: "journal-entries",
    title: "Journal Entries: Examples for Invoices, Payments and More",
    description:
      "Journal entries examples for sales invoices, payments received, credit notes, deposits and bad debts, with debits and credits shown so your books balance.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["double-entry-bookkeeping", "general-ledger", "credit-note-guide"],
    faqs: [
      {
        q: "What is a journal entry?",
        a: "A journal entry is the record of a single business transaction in your books. It shows the date, the accounts affected, the amount debited to one or more accounts, the equal amount credited to others, and a short description or reference such as an invoice number. Entries are recorded in date order in the journal and then posted to the general ledger, where each account keeps a running balance.",
      },
      {
        q: "What is the journal entry when I send an invoice?",
        a: "Under accrual accounting, debit accounts receivable for the full invoice total and credit revenue for the amount before tax. If you charged sales tax or VAT, credit a sales tax payable account for the tax portion, because that money belongs to the tax authority. Under cash-basis accounting, you usually record nothing at invoice time and record revenue when the payment arrives.",
      },
      {
        q: "What is the journal entry when a customer pays an invoice?",
        a: "Debit cash or the bank account for the amount received and credit accounts receivable for the same amount. Revenue is not touched, because it was recorded when the invoice was issued. If a payment processor deducted a fee, debit the net amount to cash, debit the fee to a merchant or bank fees expense account, and credit receivables for the full amount the customer paid.",
      },
      {
        q: "How do I record a customer deposit or advance payment?",
        a: "When the deposit arrives before the work is done, debit cash and credit a liability account such as customer deposits or unearned revenue. You owe the customer either the work or a refund, so it is not yet income. When you deliver and issue the final invoice, debit the deposit liability, debit accounts receivable for the balance due and credit revenue for the full price.",
      },
      {
        q: "What is the journal entry for a credit note?",
        a: "A credit note reverses all or part of a sale. Debit a sales returns and allowances account, or revenue directly, for the pre-tax amount, debit sales tax payable for any tax being reversed, and credit accounts receivable for the total. If the customer had already paid and you refund them, the credit side goes to cash instead of receivables.",
      },
      {
        q: "How do I record a bad debt?",
        a: "Under the direct write-off method, debit bad debt expense and credit accounts receivable when you decide a specific invoice will not be collected. Under the allowance method, you first estimate uncollectible amounts by debiting bad debt expense and crediting an allowance for doubtful accounts, then write off specific invoices by debiting the allowance and crediting receivables. Tax rules for bad debt deductions differ by country.",
      },
      {
        q: "What are adjusting journal entries?",
        a: "Adjusting entries are made at the end of a period so the books follow accrual accounting. Common examples are recording depreciation, accruing expenses incurred but not yet billed, recognizing revenue earned but not yet invoiced, and moving deferred revenue into income as it is earned. They are posted after routine transactions and before the financial statements are prepared from the adjusted trial balance.",
      },
      {
        q: "What is a compound journal entry?",
        a: "A compound journal entry involves more than two accounts. An invoice with sales tax is a simple example: one debit to accounts receivable and two credits, one to revenue and one to sales tax payable. Payroll entries are another, with debits to wage expense and credits to cash, withholding liabilities and other deductions. The rule stays the same: total debits must equal total credits.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Journal entries record each transaction as equal debits and credits. For a sales invoice, debit accounts receivable and credit revenue (plus sales tax payable). When the customer pays, debit cash and credit receivables. Credit notes, deposits and bad debts each follow their own pattern, shown with examples below.</p>

<p>Most small business owners never write journal entries by hand, because accounting software creates one every time an invoice or bill is saved. But knowing what the software is doing helps you fix miscategorized payments, record unusual items, and understand what your accountant means when they say "I posted an adjusting entry". This guide walks through the transactions around an invoice from start to finish, with every debit and credit spelled out.</p>

<p>On scope: the <a href="/invoice-generator">free invoice generator</a> creates PDF invoices in your browser. It does not record entries, track payments or keep books, so you will enter each invoice in your accounting software or spreadsheet. The examples below show what that entry should look like.</p>

<h2>What a journal entry contains</h2>
<p>Every entry has the same parts:</p>
<table><thead><tr><th>Field</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Date</td><td>When the transaction happened (or the invoice date)</td></tr>
<tr><td>Accounts</td><td>At least two accounts from your chart of accounts</td></tr>
<tr><td>Debit amount(s)</td><td>Increases assets and expenses; decreases liabilities, equity and revenue</td></tr>
<tr><td>Credit amount(s)</td><td>Increases liabilities, equity and revenue; decreases assets and expenses</td></tr>
<tr><td>Reference</td><td>Invoice, bill or check number linking to the source document</td></tr>
<tr><td>Description</td><td>A short memo explaining the transaction</td></tr>
</tbody></table>
<p>Total debits must equal total credits in every entry. If the debit and credit rules are new to you, start with our guide to <a href="/blog/double-entry-bookkeeping">double-entry rules for beginners</a>, then come back to these examples.</p>
<p>All examples below assume accrual accounting and use an illustrative business with an 8% sales tax rate. Rates and tax rules vary by location; the <a href="/tools/sales-tax-calculator">sales tax calculator</a> can help you split tax-inclusive totals.</p>

<h2>Journal entries examples for the invoice lifecycle</h2>

<h3>1. Sales invoice with sales tax</h3>
<p>You invoice a client $2,000 for services plus 8% sales tax. Tax: $2,000 × 0.08 = $160. Invoice total: $2,160.</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Accounts receivable</td><td>$2,160</td><td></td></tr>
<tr><td>Service revenue</td><td></td><td>$2,000</td></tr>
<tr><td>Sales tax payable</td><td></td><td>$160</td></tr>
<tr><td><strong>Totals</strong></td><td><strong>$2,160</strong></td><td><strong>$2,160</strong></td></tr>
</tbody></table>
<p>The tax goes to a liability because you are collecting it on behalf of the government. Recording it as revenue overstates income. Under cash-basis accounting, no entry is made at this point; see <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> for the difference.</p>

<h3>2. Payment received in full</h3>
<p>The client pays the $2,160 invoice by bank transfer.</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Cash (bank)</td><td>$2,160</td><td></td></tr>
<tr><td>Accounts receivable</td><td></td><td>$2,160</td></tr>
</tbody></table>
<p>Revenue is not touched again. A common error is to record the payment as new income, which double-counts the sale.</p>

<h3>3. Partial payment and processor fees</h3>
<p>A different client pays $1,000 of a $1,500 invoice by card, and the processor deducts an illustrative $30 fee before depositing $970.</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Cash (bank)</td><td>$970</td><td></td></tr>
<tr><td>Merchant fees expense</td><td>$30</td><td></td></tr>
<tr><td>Accounts receivable</td><td></td><td>$1,000</td></tr>
<tr><td><strong>Totals</strong></td><td><strong>$1,000</strong></td><td><strong>$1,000</strong></td></tr>
</tbody></table>
<p>The client still owes $1,500 − $1,000 = $500. Our guide to the <a href="/blog/partial-payment-invoice">partial payment invoice</a> shows how to present the remaining balance to the customer.</p>

<h3>4. Credit note</h3>
<p>You issue a credit note for $200 plus $16 tax ($200 × 0.08) because part of a delivery was rejected. The client has not paid yet.</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Sales returns and allowances</td><td>$200</td><td></td></tr>
<tr><td>Sales tax payable</td><td>$16</td><td></td></tr>
<tr><td>Accounts receivable</td><td></td><td>$216</td></tr>
<tr><td><strong>Totals</strong></td><td><strong>$216</strong></td><td><strong>$216</strong></td></tr>
</tbody></table>
<p>Sales returns and allowances is a contra-revenue account that reduces net sales on the P&amp;L. Some small businesses debit revenue directly instead; either works if you are consistent. If the client had already paid, credit cash (for a refund) or leave the credit on their account to offset the next invoice. The <a href="/blog/credit-note-guide">credit note guide</a> covers what the document itself must show.</p>

<h3>5. Customer deposit, then the final invoice</h3>
<p>A client pays a $1,500 deposit before work starts on a $5,000 project (tax ignored here for clarity).</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Cash (bank)</td><td>$1,500</td><td></td></tr>
<tr><td>Customer deposits (liability)</td><td></td><td>$1,500</td></tr>
</tbody></table>
<p>When the project is delivered and the final invoice is issued:</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Customer deposits (liability)</td><td>$1,500</td><td></td></tr>
<tr><td>Accounts receivable</td><td>$3,500</td><td></td></tr>
<tr><td>Service revenue</td><td></td><td>$5,000</td></tr>
<tr><td><strong>Totals</strong></td><td><strong>$5,000</strong></td><td><strong>$5,000</strong></td></tr>
</tbody></table>
<p>The balance due is $5,000 − $1,500 = $3,500. The deposit is a liability until earned, which is the same idea explained in <a href="/blog/deferred-revenue-vs-accrued-revenue">deferred vs accrued revenue</a>. Be aware that in some VAT and GST systems tax becomes due when a deposit is received, not when the work is finished; check the rules where you are registered. Our <a href="/blog/deposit-invoice">deposit invoice guide</a> covers how to bill it.</p>

<h3>6. Bad debt write-off</h3>
<p>A $600 invoice is clearly uncollectible. Under the direct write-off method:</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Bad debt expense</td><td>$600</td><td></td></tr>
<tr><td>Accounts receivable</td><td></td><td>$600</td></tr>
</tbody></table>
<p>Under the allowance method, which accrual-based financial statements generally use, you estimate losses in advance (debit bad debt expense, credit allowance for doubtful accounts) and later write off the specific invoice by debiting the allowance and crediting receivables. Tax treatment is separate: the IRS explains in <a href="https://www.irs.gov/taxtopics/tc453" target="_blank" rel="noopener noreferrer">Topic 453, Bad debt deduction</a> that you generally cannot deduct an uncollected amount you never reported as income, which affects cash-basis businesses. The full process is in our <a href="/blog/bad-debt-write-off">bad debt write-off guide</a>.</p>

<h3>7. Supplier bill and payment</h3>
<p>The purchase side mirrors the sales side. A $300 bill for printing arrives:</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Printing expense</td><td>$300</td><td></td></tr>
<tr><td>Accounts payable</td><td></td><td>$300</td></tr>
</tbody></table>
<p>When you pay it, debit accounts payable $300 and credit cash $300. The difference between the two documents is explained in <a href="/blog/purchase-invoice-vs-sales-invoice">purchase invoice vs sales invoice</a>.</p>

<h3>8. Owner's draw</h3>
<p>The owner of a sole proprietorship takes $1,000 for personal use: debit owner's draws $1,000, credit cash $1,000. Draws reduce equity; they are not an expense.</p>

<h2>Types of journal entries</h2>
<p>Beyond the everyday transactions above, accountants group journal entries by purpose:</p>
<table><thead><tr><th>Type</th><th>When it is used</th><th>Example</th></tr></thead><tbody>
<tr><td>Opening</td><td>Starting a new set of books</td><td>Recording the cash, equipment and loans the business already has</td></tr>
<tr><td>Routine</td><td>Day-to-day activity</td><td>Invoices, bills, payments, payroll</td></tr>
<tr><td>Compound</td><td>More than two accounts affected</td><td>An invoice with revenue and sales tax lines</td></tr>
<tr><td>Adjusting</td><td>Period end, to follow accrual rules</td><td>Depreciation, accrued expenses, deferred revenue earned</td></tr>
<tr><td>Correcting</td><td>Fixing an earlier error</td><td>Moving a payment posted to the wrong customer</td></tr>
<tr><td>Reversing</td><td>Start of the next period</td><td>Undoing an accrual once the real bill arrives</td></tr>
<tr><td>Closing</td><td>Year end</td><td>Moving revenue and expense balances into equity</td></tr>
</tbody></table>
<p>Software creates routine journal entries automatically from invoices, bills and bank transactions. Manual journal entries are usually reserved for adjusting, correcting and closing items, and many accountants review every manual entry because that is where errors and unusual items tend to appear.</p>

<h3>What changes on the cash basis</h3>
<p>If your books use the cash method, the entries are simpler. You do not record receivables when you invoice; instead, when the client pays, you debit cash and credit revenue (and sales tax payable, where that applies). Credit notes affect the books only if money is refunded, and bad debts generally do not arise because unpaid invoices were never counted as income. The trade-off is that your books do not show what customers owe you, so you need to track open invoices separately, for example with an aging list.</p>

<h2>Summary table</h2>
<table><thead><tr><th>Transaction</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Sales invoice</td><td>Accounts receivable</td><td>Revenue; sales tax payable</td></tr>
<tr><td>Payment received</td><td>Cash</td><td>Accounts receivable</td></tr>
<tr><td>Processor fee on payment</td><td>Merchant fees expense</td><td>Accounts receivable (with cash)</td></tr>
<tr><td>Credit note</td><td>Sales returns; sales tax payable</td><td>Accounts receivable or cash</td></tr>
<tr><td>Deposit received</td><td>Cash</td><td>Customer deposits</td></tr>
<tr><td>Deposit applied to invoice</td><td>Customer deposits; accounts receivable</td><td>Revenue</td></tr>
<tr><td>Bad debt (direct)</td><td>Bad debt expense</td><td>Accounts receivable</td></tr>
<tr><td>Supplier bill</td><td>Expense or asset</td><td>Accounts payable</td></tr>
<tr><td>Owner's draw</td><td>Owner's draws</td><td>Cash</td></tr>
</tbody></table>

<h2>Checking that the journal entries balance</h2>
<p>Adding the debits from examples 1 to 6 above: $2,160 + $2,160 + $1,000 + $216 + $1,500 + $5,000 + $600 = $12,636. The credits: $2,160 + $2,160 + $1,000 + $216 + $1,500 + $5,000 + $600 = $12,636. Because each entry balances individually, the totals always agree. Once posted to the <a href="/blog/general-ledger">general ledger</a>, these entries roll up into a trial balance at month-end.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Recording payments as revenue.</strong> If the invoice is already booked, payment only moves receivables to cash.</li>
<li><strong>Including sales tax in revenue.</strong> It is a liability until you remit it.</li>
<li><strong>Booking deposits as income on receipt.</strong> They are a liability until earned.</li>
<li><strong>Recording the net card deposit as the full payment.</strong> The fee disappears and the invoice stays partly open.</li>
<li><strong>Deleting invoices instead of issuing credit notes.</strong> It breaks the audit trail and the number sequence.</li>
<li><strong>Writing off bad debts without documentation.</strong> Keep collection notes and the reason for the write-off.</li>
<li><strong>Vague descriptions.</strong> "Payment" tells nobody anything; "INV-1042 paid by ACH" does, and it lets anyone trace the entry back to its source document in seconds.</li>
</ul>

<h2>Checklist for every entry</h2>
<ul>
<li>The date matches the source document.</li>
<li>Debits equal credits.</li>
<li>The reference number links to the invoice, bill or receipt.</li>
<li>Tax is split into its own liability line.</li>
<li>The description would make sense to someone else a year from now.</li>
<li>The source document is saved with the entry.</li>
</ul>

<h2>Next step</h2>
<p>Good entries start with good documents. Make sure every invoice and credit note carries a unique number, date, tax breakdown and customer details, then record it the same day using the patterns above. If something unusual comes up, such as a customer paying two invoices with one transfer, a refund to a different card, or a payment in a foreign currency, sketch the debits and credits first and confirm they balance before you post anything. When in doubt, ask your accountant how they want it recorded; a two-minute question is cheaper than a year-end correction. For more on the reports these entries feed, browse the <a href="/blog/category/business-finance">business finance articles</a>.</p>
`,
  },
  {
    slug: "double-entry-bookkeeping",
    title: "Double-Entry Bookkeeping: Rules and Examples for Beginners",
    description:
      "Learn double-entry bookkeeping with simple debit and credit rules, T-account examples and a worked startup scenario that proves the accounting equation.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["journal-entries", "bookkeeping-basics", "general-ledger"],
    faqs: [
      {
        q: "What is double-entry bookkeeping in simple terms?",
        a: "It is a method where every transaction is recorded in at least two accounts, with the total debits equal to the total credits. When you buy equipment with cash, equipment goes up and cash goes down. When you send an invoice, receivables go up and revenue goes up. Recording both sides keeps the accounting equation, assets equal liabilities plus equity, in balance at all times.",
      },
      {
        q: "What are the rules of debit and credit?",
        a: "Debits increase asset, expense and owner's draw accounts and decrease liability, equity and revenue accounts. Credits do the opposite: they increase liabilities, equity and revenue and decrease assets and expenses. A common memory aid is DEALER: Dividends or drawings, Expenses and Assets increase with debits; Liabilities, Equity and Revenue increase with credits. Every entry must have equal debit and credit totals.",
      },
      {
        q: "What is the difference between single-entry and double-entry bookkeeping?",
        a: "Single-entry bookkeeping records each transaction once, usually as money in or money out in a cash book, much like a checkbook register. Double-entry records each transaction twice, in two or more accounts. Single-entry is simpler but cannot easily produce a balance sheet or catch errors. Double-entry tracks assets, liabilities and equity as well as income, which lenders and accountants generally expect.",
      },
      {
        q: "Do small businesses have to use double-entry bookkeeping?",
        a: "Requirements depend on your country and business structure. Many very small sole proprietors keep single-entry, cash-basis records for tax purposes, and US tax rules allow any system that clearly reflects income. Companies, larger businesses and anyone needing a balance sheet or audited accounts generally use double-entry. Accounting software uses it automatically, so most owners adopt it without extra effort.",
      },
      {
        q: "Why is a debit not always a decrease in money?",
        a: "In everyday banking, a debit card payment reduces your balance, so people assume debit means money out. In bookkeeping, debit simply means the left side of an account. A debit to cash increases cash, because cash is an asset. Your bank calls a deposit a credit because, from the bank's point of view, your balance is money it owes you, which is a liability on its books.",
      },
      {
        q: "What is a T-account?",
        a: "A T-account is a simple sketch of a single ledger account shaped like the letter T. The account name sits on top, debits are listed on the left and credits on the right. Totaling each side and taking the difference gives the balance. Teachers and accountants use T-accounts to think through a transaction before recording it, because they make the two sides of every entry visible.",
      },
      {
        q: "What are the golden rules of accounting?",
        a: "The golden rules are a traditional approach taught widely in South Asia. Accounts are grouped as personal, real or nominal. For personal accounts, debit the receiver and credit the giver. For real accounts, debit what comes in and credit what goes out. For nominal accounts, debit expenses and losses and credit income and gains. They lead to the same entries as the DEALER approach.",
      },
      {
        q: "Can I do double-entry bookkeeping in a spreadsheet?",
        a: "Yes. Create a journal sheet with columns for date, account, description, debit and credit, and record every transaction on two or more rows that balance. A pivot table or SUMIF formulas then produce account balances and a trial balance. Add a check cell that flags any entry where debits and credits differ. It works for low volumes, but software adds controls and bank feeds that spreadsheets lack.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Double-entry bookkeeping records every transaction in at least two accounts, with total debits equal to total credits. Debits increase assets, expenses and draws; credits increase liabilities, equity and revenue. Because both sides are always recorded, assets always equal liabilities plus equity, and errors are easier to catch.</p>

<p>Debits and credits confuse almost everyone who starts double-entry bookkeeping, mostly because banks use the words in the opposite way to bookkeepers. This beginner's guide explains the accounting equation, gives you the debit and credit rules in one table, shows how T-accounts work, and walks through a startup's first transactions with the equation checked after every step. If you have read our <a href="/blog/bookkeeping-basics">bookkeeping basics</a> overview, this is the next layer down.</p>

<p>On scope: the <a href="/invoice-generator">invoice generator</a> on this site creates PDF invoices in your browser. It does not record debits and credits or keep books. You will record each invoice in your accounting software or spreadsheet, and this guide explains what that recording does behind the scenes.</p>

<h2>What is double-entry bookkeeping?</h2>
<p>The method rests on one equation:</p>
<p><strong>Assets = Liabilities + Equity</strong></p>
<p>Assets are what the business owns or is owed (cash, receivables, equipment). Liabilities are what it owes to others (supplier bills, loans, sales tax collected). Equity is the owner's stake: money put in plus profits kept, minus draws. Revenue increases equity and expenses decrease it, so they sit inside the equity side of the equation until year-end.</p>
<p>Every transaction changes at least two items in a way that keeps the equation true. Borrow $5,000 and cash (an asset) rises by $5,000 while the loan (a liability) also rises by $5,000. Pay a $1,200 wage and cash falls by $1,200 while equity falls by $1,200 through the expense. Recording both sides of every change is what the term "double entry" means.</p>

<h2>Single-entry vs double-entry</h2>
<table><thead><tr><th>Feature</th><th>Single-entry</th><th>Double-entry</th></tr></thead><tbody>
<tr><td>How transactions are recorded</td><td>Once, as money in or out</td><td>Twice or more, as debits and credits</td></tr>
<tr><td>Tracks assets and liabilities</td><td>Not systematically</td><td>Yes</td></tr>
<tr><td>Produces a balance sheet</td><td>Not easily</td><td>Yes</td></tr>
<tr><td>Built-in error check</td><td>No</td><td>Yes: debits must equal credits</td></tr>
<tr><td>Best for</td><td>Very small, cash-only activity</td><td>Any business with receivables, payables, loans or assets</td></tr>
</tbody></table>
<p>The US Small Business Administration's guidance on <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">managing your business finances</a> covers recordkeeping more broadly. In practice, almost all accounting software uses double-entry, even when the interface hides the debits and credits.</p>

<h2>The rules of debits and credits</h2>
<p>A debit is an entry on the left side of an account and a credit is an entry on the right. Whether each one increases or decreases a balance depends on the type of account.</p>
<table><thead><tr><th>Account type</th><th>Increase with</th><th>Decrease with</th><th>Normal balance</th></tr></thead><tbody>
<tr><td>Assets</td><td>Debit</td><td>Credit</td><td>Debit</td></tr>
<tr><td>Expenses</td><td>Debit</td><td>Credit</td><td>Debit</td></tr>
<tr><td>Owner's draws or dividends</td><td>Debit</td><td>Credit</td><td>Debit</td></tr>
<tr><td>Liabilities</td><td>Credit</td><td>Debit</td><td>Credit</td></tr>
<tr><td>Equity (capital)</td><td>Credit</td><td>Debit</td><td>Credit</td></tr>
<tr><td>Revenue</td><td>Credit</td><td>Debit</td><td>Credit</td></tr>
</tbody></table>
<h3>The DEALER memory aid</h3>
<p>Read the word in two halves. <strong>DEA</strong>: Dividends (or Drawings), Expenses and Assets increase with debits. <strong>LER</strong>: Liabilities, Equity and Revenue increase with credits. If you remember only that, you can work out any entry.</p>
<h3>The traditional golden rules</h3>
<p>Many students in India, Pakistan and elsewhere learn a different framing that produces the same entries:</p>
<ul>
<li><strong>Personal accounts</strong> (people and organizations): debit the receiver, credit the giver.</li>
<li><strong>Real accounts</strong> (assets): debit what comes in, credit what goes out.</li>
<li><strong>Nominal accounts</strong> (income and expenses): debit expenses and losses, credit income and gains.</li>
</ul>
<h3>Why your bank seems backward</h3>
<p>When your bank "credits" your account, your balance goes up. That is because your deposit is a liability on the bank's books: it owes you the money. On your own books, the same cash is an asset, so you debit it. Neither is wrong; they are opposite sides of the same relationship.</p>

<h2>T-accounts: seeing both sides</h2>
<p>A T-account is a quick sketch of one account: the name on top, debits on the left, credits on the right. Here is a cash T-account after a few transactions (illustrative figures):</p>
<table><thead><tr><th>Cash: debits (in)</th><th>Cash: credits (out)</th></tr></thead><tbody>
<tr><td>Owner investment $8,000</td><td>Equipment $3,000</td></tr>
<tr><td>Bank loan $5,000</td><td>Wages $1,200</td></tr>
<tr><td>Client payment $2,500</td><td></td></tr>
<tr><td><strong>Total $15,500</strong></td><td><strong>Total $4,200</strong></td></tr>
</tbody></table>
<p>Balance: $15,500 − $4,200 = $11,300 debit. Sketching T-accounts on paper is still the fastest way to reason through an unfamiliar transaction before you enter it in software.</p>

<h2>Worked example: a startup's first six transactions</h2>
<p>Northfield Web Studio, a fictional business, starts trading. Each transaction below is shown as a journal entry, followed by the accounting equation after it. All figures are illustrative.</p>
<table><thead><tr><th>#</th><th>Transaction</th><th>Debit</th><th>Credit</th><th>Amount</th></tr></thead><tbody>
<tr><td>1</td><td>Owner invests cash</td><td>Cash</td><td>Owner's capital</td><td>$8,000</td></tr>
<tr><td>2</td><td>Takes a bank loan</td><td>Cash</td><td>Loan payable</td><td>$5,000</td></tr>
<tr><td>3</td><td>Buys equipment for cash</td><td>Equipment</td><td>Cash</td><td>$3,000</td></tr>
<tr><td>4</td><td>Invoices a client for a website</td><td>Accounts receivable</td><td>Service revenue</td><td>$2,500</td></tr>
<tr><td>5</td><td>Pays a contractor's wages</td><td>Wages expense</td><td>Cash</td><td>$1,200</td></tr>
<tr><td>6</td><td>Client pays the invoice</td><td>Cash</td><td>Accounts receivable</td><td>$2,500</td></tr>
</tbody></table>
<h3>The equation after each step</h3>
<table><thead><tr><th>After #</th><th>Assets</th><th>Liabilities</th><th>Equity</th><th>Check</th></tr></thead><tbody>
<tr><td>1</td><td>Cash $8,000 = $8,000</td><td>$0</td><td>$8,000</td><td>$8,000 = $0 + $8,000</td></tr>
<tr><td>2</td><td>Cash $13,000 = $13,000</td><td>$5,000</td><td>$8,000</td><td>$13,000 = $5,000 + $8,000</td></tr>
<tr><td>3</td><td>Cash $10,000 + equipment $3,000 = $13,000</td><td>$5,000</td><td>$8,000</td><td>$13,000 = $5,000 + $8,000</td></tr>
<tr><td>4</td><td>Cash $10,000 + AR $2,500 + equipment $3,000 = $15,500</td><td>$5,000</td><td>$10,500</td><td>$15,500 = $5,000 + $10,500</td></tr>
<tr><td>5</td><td>Cash $8,800 + AR $2,500 + equipment $3,000 = $14,300</td><td>$5,000</td><td>$9,300</td><td>$14,300 = $5,000 + $9,300</td></tr>
<tr><td>6</td><td>Cash $11,300 + AR $0 + equipment $3,000 = $14,300</td><td>$5,000</td><td>$9,300</td><td>$14,300 = $5,000 + $9,300</td></tr>
</tbody></table>
<p>Notice what each step teaches:</p>
<ul>
<li><strong>Step 3</strong> swaps one asset for another. Total assets do not change.</li>
<li><strong>Step 4</strong> raises equity through revenue ($8,000 + $2,500 = $10,500) even though no cash has arrived. That is accrual accounting at work; compare it with the cash method in <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a>.</li>
<li><strong>Step 5</strong> lowers equity through an expense ($10,500 − $1,200 = $9,300).</li>
<li><strong>Step 6</strong> converts a receivable into cash. Equity does not change, because the revenue was already recorded.</li>
</ul>
<p>Total debits across the six entries: $8,000 + $5,000 + $3,000 + $2,500 + $1,200 + $2,500 = $22,200. Total credits are the same $22,200. Profit so far is $2,500 − $1,200 = $1,300, which is exactly the growth in equity beyond the owner's investment ($9,300 − $8,000 = $1,300).</p>
<p>Recording each line is covered in more depth in our <a href="/blog/journal-entries">journal entry examples</a>, and the next stages, posting to the <a href="/blog/general-ledger">ledger accounts</a> and checking totals with a <a href="/blog/trial-balance">trial balance</a>, follow naturally. The resulting asset, liability and equity figures form the <a href="/blog/balance-sheet-small-business">small business balance sheet</a>.</p>

<h2>How double-entry bookkeeping catches errors</h2>
<p>The built-in check is the main practical benefit of the system. Because every entry must balance, a whole class of mistakes shows up immediately:</p>
<ul>
<li><strong>One-sided entries.</strong> If you record a $500 payment to cash but forget to reduce receivables, total debits exceed total credits by $500.</li>
<li><strong>Typing errors on one side.</strong> Entering $1,250 as a debit and $1,520 as a credit leaves a $270 gap, which divides evenly by 9, a classic sign of transposed digits.</li>
<li><strong>Balances that make no sense.</strong> A credit balance in an expense account, or a debit balance in a loan account, flags a posting to the wrong side.</li>
<li><strong>Missing money.</strong> Because cash is tracked as an account, the ledger balance can be reconciled to the bank statement, and any difference points to something unrecorded.</li>
</ul>
<p>It is not foolproof. An entry posted to the wrong account, or left out entirely, still balances. That is why double-entry bookkeeping is paired with monthly reconciliations and a quick review of each account, rather than relied on alone. Still, compared with a single-entry cash book, where an omitted or doubled transaction can go unnoticed for months, the double-entry method gives you far more confidence that the reports reflect what actually happened.</p>

<h2>How to start using double entry</h2>
<ol>
<li><strong>Set up a chart of accounts.</strong> Keep it short: cash, receivables, equipment, payables, sales tax payable, loan, owner's capital, owner's draws, revenue and your main expense categories.</li>
<li><strong>Enter opening balances.</strong> Record what the business owns and owes on your start date, with the difference going to owner's capital.</li>
<li><strong>Record invoices as you issue them.</strong> Debit receivables, credit revenue and sales tax payable. Issuing invoices from consistent <a href="/invoice-templates">invoice templates</a> makes this easier, because every document shows the same fields in the same place.</li>
<li><strong>Record bills as they arrive.</strong> Debit the expense or asset, credit payables. The two sides of trade credit are explained in <a href="/blog/accounts-payable-vs-accounts-receivable">accounts payable vs accounts receivable</a>.</li>
<li><strong>Record payments.</strong> Money in reduces receivables; money out reduces payables or hits an expense directly.</li>
<li><strong>Reconcile and review monthly.</strong> Match cash to the bank and confirm debits equal credits.</li>
</ol>

<h2>Common mistakes</h2>
<ul>
<li><strong>Thinking "debit" means "bad" or "money out".</strong> It just means left side.</li>
<li><strong>Recording only one side.</strong> Spreadsheets allow it; the books will not balance.</li>
<li><strong>Treating owner's draws as an expense.</strong> Draws reduce equity directly and do not belong on the P&amp;L.</li>
<li><strong>Treating loan repayments as expenses.</strong> Only the interest is an expense; principal reduces the liability.</li>
<li><strong>Booking customer payments as revenue when the invoice was already recorded.</strong> That counts the sale twice.</li>
<li><strong>Forgetting contra accounts.</strong> Accumulated depreciation is a credit balance linked to an asset.</li>
</ul>

<h2>Double-entry bookkeeping checklist for beginners</h2>
<ul>
<li>I can state the accounting equation and explain each part.</li>
<li>I know which account types increase with debits and which with credits.</li>
<li>Every entry I record has equal debits and credits.</li>
<li>Sales tax collected goes to a liability account.</li>
<li>Owner's draws and loan principal are kept out of expenses.</li>
<li>Cash is reconciled to the bank each month.</li>
<li>A trial balance is run before reports are prepared.</li>
</ul>

<h2>Next step</h2>
<p>Practice with your own last month: take five real transactions and sketch the T-accounts before you look at how your software recorded them. If you are weighing whether you need full accounting software at all, read our comparison of an <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a>.</p>
`,
  },
  {
    slug: "cash-flow-statement",
    title: "Cash Flow Statement: Format, Example and How to Read It",
    description:
      "Understand the cash flow statement: its three sections, direct vs indirect method, a worked example with every number reconciled, and how to read it well.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["cash-flow-management", "profit-and-loss-statement", "balance-sheet-small-business"],
    faqs: [
      {
        q: "What is a cash flow statement in simple terms?",
        a: "It is a financial report that shows how much cash came into and went out of a business during a period, and why. It groups the movements into operating activities, investing activities and financing activities, then shows the net change in cash between the start and end of the period. It explains why your bank balance changed, which the profit and loss statement cannot do.",
      },
      {
        q: "What are the three sections of a cash flow statement?",
        a: "Operating activities cover cash from day-to-day trading: customer receipts and payments to suppliers, employees and tax authorities. Investing activities cover buying and selling long-term assets such as equipment or investments. Financing activities cover cash from and to owners and lenders, such as loan proceeds, loan repayments, owner contributions, draws and dividends. The three totals add up to the net change in cash.",
      },
      {
        q: "What is the difference between the direct and indirect method?",
        a: "Both methods give the same operating cash flow total; only the presentation differs. The direct method lists actual cash receipts and payments, such as cash received from customers and cash paid to suppliers. The indirect method starts with net income and adjusts it for non-cash items like depreciation and for changes in receivables, payables and other working capital. Most companies use the indirect method.",
      },
      {
        q: "Why is profit different from cash flow?",
        a: "Profit is measured when revenue is earned and expenses are incurred, while cash flow tracks when money actually moves. Unpaid invoices raise profit but not cash. Depreciation lowers profit but uses no cash. Buying equipment and repaying loan principal use cash without appearing as expenses. Owner draws reduce cash but are not expenses either. The operating section of the indirect method reconciles these differences line by line.",
      },
      {
        q: "Is negative cash flow always bad?",
        a: "Not necessarily. Negative investing cash flow usually means the business bought equipment or other assets, which may support future growth. Negative financing cash flow can mean you repaid debt or paid the owners. Negative operating cash flow is the one to watch: if day-to-day trading consistently uses more cash than it generates, the business depends on loans or owner money to keep going.",
      },
      {
        q: "Do small businesses need a cash flow statement?",
        a: "Many small businesses are not required to publish one, and requirements depend on your country, entity type and any lender agreements. Even so, it is one of the most useful reports an owner can read, because it shows whether profits are turning into cash. Lenders often ask for it, and most accounting software can generate one from the same data as your P&L and balance sheet.",
      },
      {
        q: "How do I prepare a cash flow statement using the indirect method?",
        a: "Start with net income from the P&L. Add back non-cash expenses such as depreciation. Subtract increases in current assets like receivables and inventory, and add decreases. Add increases in current liabilities like payables and customer deposits, and subtract decreases. That gives operating cash flow. Then list investing and financing cash flows, add the three totals, and check the result against the change in your cash balance.",
      },
      {
        q: "What is free cash flow?",
        a: "Free cash flow is commonly calculated as operating cash flow minus capital expenditures, the money spent on equipment and other long-term assets. It estimates the cash left for repaying debt, paying the owners or saving after keeping the business running. There is no single official definition, so analysts and lenders sometimes calculate it differently. Always check which version someone is quoting before comparing figures.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A cash flow statement shows the cash that came into and went out of a business over a period, split into operating, investing and financing activities. The three section totals add up to the change in your cash balance. It explains why profit and cash differ, which the P&amp;L alone cannot.</p>

<p>This article is about the historical financial report: how it is laid out, how to prepare it with the indirect and direct methods, and how to read it. If you want practical ways to improve your cash position, see our guide to <a href="/blog/cash-flow-management">cash flow management</a>; if you want to project future cash, see how to build a <a href="/blog/cash-flow-forecast">cash flow forecast</a>. Here we focus on understanding what already happened.</p>

<p>On scope: the <a href="/invoice-generator">invoice generator</a> on this site creates PDF invoices in your browser. It does not track payments or produce financial statements; your accounting software builds this report from your ledger. Getting invoices out promptly does, however, have a direct effect on the operating section, as the example below shows.</p>

<h2>What is a cash flow statement?</h2>
<p>The statement of cash flows is one of the three core financial statements, alongside the <a href="/blog/profit-and-loss-statement">profit and loss statement</a> and the <a href="/blog/balance-sheet-small-business">balance sheet</a>. The P&amp;L tells you whether you earned a profit; the balance sheet tells you what you own and owe on one date; this report connects them by explaining how cash moved during the period.</p>
<table><thead><tr><th>Report</th><th>Covers</th><th>Main question</th></tr></thead><tbody>
<tr><td>Profit and loss</td><td>A period</td><td>Did we make a profit?</td></tr>
<tr><td>Balance sheet</td><td>A single date</td><td>What do we own and owe?</td></tr>
<tr><td>Statement of cash flows</td><td>A period</td><td>Where did cash come from and where did it go?</td></tr>
</tbody></table>

<h2>The three sections</h2>
<table><thead><tr><th>Section</th><th>What it includes</th><th>Typical small business examples</th></tr></thead><tbody>
<tr><td>Operating activities</td><td>Cash from the main revenue-producing activities</td><td>Customer receipts, payments to suppliers, wages, rent, taxes</td></tr>
<tr><td>Investing activities</td><td>Buying and selling long-term assets and investments</td><td>Buying a vehicle or computer, selling old equipment</td></tr>
<tr><td>Financing activities</td><td>Cash from and to owners and lenders</td><td>Loan proceeds, loan principal repayments, owner contributions, draws, dividends</td></tr>
</tbody></table>
<p>Classification of a few items, especially interest and dividends, depends on the accounting framework. Under US GAAP, interest paid is generally an operating cash flow. IAS 7, the international standard, has historically allowed a choice for some of these items. The <a href="https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/" target="_blank" rel="noopener noreferrer">IFRS Foundation's IAS 7 page</a> is the authoritative source, and amendments that come with IFRS 18, for annual periods beginning on or after January 1, 2027, remove some of those choices for many companies. If you report under IFRS, confirm the current treatment with your accountant.</p>

<h2>Direct vs indirect method</h2>
<p>Only the operating section differs between the two methods. Investing and financing are presented the same way under both.</p>
<table><thead><tr><th></th><th>Direct method</th><th>Indirect method</th></tr></thead><tbody>
<tr><td>Starting point</td><td>Actual cash receipts and payments</td><td>Net income</td></tr>
<tr><td>Typical lines</td><td>Cash received from customers; cash paid to suppliers and employees</td><td>Net income, add back depreciation, changes in working capital</td></tr>
<tr><td>Strength</td><td>Easy for non-accountants to read</td><td>Shows why profit and cash differ</td></tr>
<tr><td>Standards</td><td>Encouraged under IAS 7; permitted under US GAAP, which also asks for a reconciliation to net income</td><td>Permitted under both</td></tr>
<tr><td>In practice</td><td>Less common</td><td>Used by most companies and most accounting software</td></tr>
</tbody></table>

<h2>Cash flow statement format (indirect method)</h2>
<p>Below is a template for the indirect layout most small businesses will see in their software.</p>
<table><thead><tr><th>Line</th><th>Item</th></tr></thead><tbody>
<tr><td>A</td><td>Net income</td></tr>
<tr><td>B</td><td>Add back non-cash expenses (depreciation, amortization)</td></tr>
<tr><td>C</td><td>Less increase (or add decrease) in accounts receivable</td></tr>
<tr><td>D</td><td>Less increase (or add decrease) in inventory and prepaid expenses</td></tr>
<tr><td>E</td><td>Add increase (or less decrease) in accounts payable, accrued expenses and customer deposits</td></tr>
<tr><td>F</td><td><strong>Net cash from operating activities</strong> (A through E)</td></tr>
<tr><td>G</td><td><strong>Net cash from investing activities</strong></td></tr>
<tr><td>H</td><td><strong>Net cash from financing activities</strong></td></tr>
<tr><td>I</td><td>Net change in cash (F + G + H)</td></tr>
<tr><td>J</td><td>Cash at beginning of period</td></tr>
<tr><td>K</td><td>Cash at end of period (I + J)</td></tr>
</tbody></table>
<p>The logic for working capital lines: when receivables rise, you recorded revenue that has not been collected, so you subtract the increase. When payables rise, you recorded expenses you have not yet paid, so you add the increase. The relationship between these items is covered in more depth in our <a href="/blog/working-capital">working capital guide</a>.</p>

<h2>Worked example</h2>
<p>Here is an illustrative full-year example for the fictional Cedar Lane Design. All figures are invented.</p>
<p>From the P&amp;L: revenue $150,000; cash-type expenses $116,000; depreciation $4,000; net income $150,000 − $116,000 − $4,000 = $30,000.</p>
<p>From the balance sheets at the start and end of the year: accounts receivable rose by $6,000, accounts payable rose by $2,000, and customer deposits rose by $1,500. During the year the studio bought equipment for $12,000, borrowed $10,000, repaid $3,000 of loan principal, and the owner drew $20,000. Opening cash was $8,000.</p>
<table><thead><tr><th>Statement of cash flows, year ended Dec 31</th><th>Amount</th></tr></thead><tbody>
<tr><td>Net income</td><td>$30,000</td></tr>
<tr><td>Add: depreciation</td><td>$4,000</td></tr>
<tr><td>Less: increase in accounts receivable</td><td>($6,000)</td></tr>
<tr><td>Add: increase in accounts payable</td><td>$2,000</td></tr>
<tr><td>Add: increase in customer deposits</td><td>$1,500</td></tr>
<tr><td><strong>Net cash from operating activities</strong></td><td><strong>$31,500</strong></td></tr>
<tr><td>Purchase of equipment</td><td>($12,000)</td></tr>
<tr><td><strong>Net cash from investing activities</strong></td><td><strong>($12,000)</strong></td></tr>
<tr><td>Loan proceeds</td><td>$10,000</td></tr>
<tr><td>Loan principal repaid</td><td>($3,000)</td></tr>
<tr><td>Owner's draws</td><td>($20,000)</td></tr>
<tr><td><strong>Net cash from financing activities</strong></td><td><strong>($13,000)</strong></td></tr>
<tr><td>Net change in cash</td><td>$6,500</td></tr>
<tr><td>Cash at beginning of year</td><td>$8,000</td></tr>
<tr><td><strong>Cash at end of year</strong></td><td><strong>$14,500</strong></td></tr>
</tbody></table>
<p>The arithmetic:</p>
<ul>
<li>Operating: $30,000 + $4,000 − $6,000 + $2,000 + $1,500 = $31,500.</li>
<li>Financing: $10,000 − $3,000 − $20,000 = −$13,000.</li>
<li>Net change: $31,500 − $12,000 − $13,000 = $6,500.</li>
<li>Ending cash: $8,000 + $6,500 = $14,500, which must match the cash line on the year-end balance sheet.</li>
</ul>
<h3>The same operating section, direct method</h3>
<ul>
<li>Cash received from customers: revenue $150,000 − increase in receivables $6,000 + increase in customer deposits $1,500 = $145,500.</li>
<li>Cash paid for expenses: cash-type expenses $116,000 − increase in payables $2,000 = $114,000.</li>
<li>Net cash from operating activities: $145,500 − $114,000 = $31,500, the same total as the indirect method.</li>
</ul>
<p>Depreciation does not appear in the direct version at all, because it never involved cash. The equipment purchase that it relates to shows up in investing; our guide to <a href="/blog/capex-vs-opex">capex vs opex</a> explains that split.</p>

<h2>How to read the statement</h2>
<ul>
<li><strong>Is operating cash flow positive and close to net income?</strong> Here $31,500 against $30,000 of profit is healthy. If operating cash is persistently well below profit, look at receivables.</li>
<li><strong>What is driving the gap?</strong> The $6,000 rise in receivables means customers are paying more slowly or sales grew. Tracking <a href="/blog/days-sales-outstanding">days sales outstanding</a> tells you which.</li>
<li><strong>How is investment funded?</strong> Equipment of $12,000 was more than covered by operating cash.</li>
<li><strong>Are the owners taking more than the business generates?</strong> Draws of $20,000 plus $3,000 of principal used most of the remaining cash; the new $10,000 loan filled the gap.</li>
<li><strong>Free cash flow.</strong> A common definition is operating cash flow minus capital spending: $31,500 − $12,000 = $19,500. Definitions vary, so state which one you use.</li>
</ul>
<p>The single biggest lever most service businesses have on the operating section is collections: invoicing promptly, setting clear terms and following up. Our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a> covers that process.</p>

<h2>Cash flow statement vs cash flow forecast</h2>
<p>The names are similar, but the two documents answer different questions.</p>
<table><thead><tr><th></th><th>Statement of cash flows</th><th>Cash flow forecast</th></tr></thead><tbody>
<tr><td>Time direction</td><td>Past period</td><td>Future weeks or months</td></tr>
<tr><td>Source</td><td>Your ledger, P&amp;L and balance sheets</td><td>Your estimates of receipts and payments</td></tr>
<tr><td>Format</td><td>Operating, investing, financing sections</td><td>Usually a week-by-week or month-by-month grid</td></tr>
<tr><td>Main use</td><td>Explaining results; lender and tax reporting</td><td>Planning, spotting shortfalls early</td></tr>
</tbody></table>
<p>The two work best together. Last year's cash flow statement shows the patterns, such as how long customers really take to pay and how much goes to equipment and draws, and those patterns become the assumptions in your forecast.</p>

<h2>Who needs one, and how often</h2>
<p>Larger companies that publish full financial statements under US GAAP or IFRS generally include a cash flow statement. For a small private business, whether you must prepare one depends on your country, legal structure and any loan agreements, so check with your accountant. Even when nobody requires it, reviewing the report quarterly is a sensible habit, and monthly is better if cash is tight. Most accounting software generates it automatically once your bank accounts are reconciled and your balance sheet is accurate, so the main effort is keeping the underlying books clean.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Getting working capital signs backwards.</strong> An increase in an asset uses cash; an increase in a liability provides it.</li>
<li><strong>Forgetting to add back depreciation.</strong> It reduced profit but used no cash.</li>
<li><strong>Putting loan principal in operating.</strong> Principal repayments belong in financing.</li>
<li><strong>Treating owner draws as an expense.</strong> They are a financing outflow and never hit the P&amp;L.</li>
<li><strong>Not tying ending cash to the balance sheet.</strong> If they disagree, something is misclassified or missing.</li>
<li><strong>Confusing the report with a forecast.</strong> This statement looks backward; a forecast looks forward.</li>
</ul>

<h2>Checklist before you rely on the numbers</h2>
<ul>
<li>The P&amp;L and both balance sheets cover the same basis and dates.</li>
<li>Bank and card accounts are reconciled.</li>
<li>Depreciation and other non-cash items are added back.</li>
<li>Every change in current assets and liabilities is reflected in operating.</li>
<li>Asset purchases and sales are in investing.</li>
<li>Loans, repayments, contributions and draws are in financing.</li>
<li>Opening cash plus net change equals closing cash on the balance sheet.</li>
</ul>

<h2>Next step</h2>
<p>Run this report for last year from your accounting software and walk through it with the questions above. Pay particular attention to the gap between net income and operating cash, because that is where slow collections and growing inventory show up first. Pay particular attention to the gap between net income and operating cash, because that is where slow collections and growing inventory show up first. Then compare it with your current forecast to see whether the patterns are changing. More reports and ratios are covered in the <a href="/blog/category/business-finance">business finance section</a>.</p>
`,
  },
];
