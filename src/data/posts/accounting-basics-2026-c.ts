import type { PostDraft } from "../blog";

export const ACCOUNTING_BASICS_2026_C_POSTS: PostDraft[] = [
  {
    slug: "accounting-equation",
    title: "Accounting Equation: Assets = Liabilities + Equity Explained",
    description:
      "The accounting equation (assets = liabilities + equity) explained with nine worked transactions, the expanded formula and how invoices keep your books balanced.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "debt-to-equity-ratio",
      "balance-sheet-small-business",
      "double-entry-bookkeeping",
      "retained-earnings",
      "general-ledger",
    ],
    faqs: [
      {
        q: "What is the accounting equation in simple terms?",
        a: "The accounting equation says that everything a business owns (assets) was paid for either with borrowed money (liabilities) or with the owner's money and profits (equity). Written out, it is Assets = Liabilities + Equity. Every transaction you record changes at least two items so that both sides stay equal. If they ever differ, something has been recorded wrongly or left out, which is why accountants use it as a constant error check.",
      },
      {
        q: "Why must the accounting equation always balance?",
        a: "It balances because both sides describe the same resources from two angles. The left side lists what the business has; the right side lists who has a claim on it. A dollar of cash cannot exist without someone, a lender or the owner, having a claim on it. Double-entry bookkeeping enforces this by recording equal debits and credits for each transaction, so a correctly kept set of books always produces a balanced equation.",
      },
      {
        q: "What is the expanded accounting equation?",
        a: "The expanded version breaks equity into its moving parts: Assets = Liabilities + Owner's Capital + Revenue minus Expenses minus Owner's Draws. For a corporation, the equity side is usually shown as contributed capital plus retained earnings, with dividends reducing retained earnings. The expanded form is useful because it shows how day-to-day activity, such as issuing an invoice or paying rent, flows through profit into equity rather than appearing to change equity directly.",
      },
      {
        q: "How does an invoice affect the accounting equation?",
        a: "Under accrual accounting, sending an invoice increases assets (accounts receivable) and increases equity through revenue by the same amount. If you charge sales tax, the tax portion is a liability instead of revenue, so assets rise by the full invoice total while liabilities and equity share the increase. When the customer pays, cash goes up and receivables go down, so total assets stay the same and the equation remains balanced.",
      },
      {
        q: "Is the accounting equation the same as the balance sheet?",
        a: "The balance sheet is the accounting equation presented as a report. It lists every asset on one side or at the top, then liabilities and equity below or on the other side, at a specific date. Total assets must equal total liabilities plus equity, exactly as the equation requires. The income statement is different: it covers a period and explains how revenue and expenses changed equity during that time.",
      },
      {
        q: "Can equity be negative in the accounting equation?",
        a: "Yes. If liabilities exceed assets, equity is negative, which is sometimes called a deficit or negative net worth. It usually happens after sustained losses, large owner withdrawals, or heavy borrowing. The equation still balances: for example, $20,000 of assets equals $26,000 of liabilities plus negative $6,000 of equity. Negative equity is a warning sign for lenders because creditors' claims exceed what the business owns.",
      },
      {
        q: "Does the accounting equation apply to cash-basis businesses?",
        a: "Yes, but fewer items appear in it. A cash-basis business records revenue when money arrives and expenses when money leaves, so it typically does not show accounts receivable or accounts payable. The equation still holds with the assets and liabilities you do track, such as cash, equipment and loans. Many small businesses keep cash-basis books for simplicity while their accountant prepares accrual-based statements for lenders.",
      },
      {
        q: "What are examples of assets, liabilities and equity for a small business?",
        a: "Common assets include cash, accounts receivable from unpaid invoices, inventory, prepaid expenses, equipment, vehicles and software. Typical liabilities are accounts payable to suppliers, credit card balances, sales tax collected but not yet paid, payroll taxes owed, customer deposits and loans. Equity includes the money the owner put in, profits kept in the business, and reductions for owner draws or dividends.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The accounting equation is Assets = Liabilities + Equity. It means everything a business owns was financed either by creditors (liabilities) or by the owner and retained profits (equity). Every transaction changes at least two parts of the equation by equal amounts, so the two sides always balance in correctly kept books.</p>

<p>The accounting equation is the foundation of double-entry bookkeeping and of every balance sheet you will ever read. If you send invoices, pay suppliers or take money out of your business, you are moving numbers around this equation whether you notice or not. This guide explains each part in plain English, shows the expanded version, and walks through nine real transactions for a small business so you can see the equation balance after every one. If you want the mechanics behind it, our guide to <a href="/blog/double-entry-bookkeeping">double-entry bookkeeping</a> is a good companion.</p>

<p>A quick note on scope: the <a href="/invoice-generator">free invoice generator</a> on this site creates professional PDF invoices in your browser. It does not keep a ledger, so you record each invoice in your bookkeeping software or spreadsheet. Everything below applies whichever system you use.</p>

<h2>What is the accounting equation?</h2>

<p>The basic accounting equation has three parts:</p>

<ul>
<li><strong>Assets:</strong> resources the business controls that have economic value, such as cash, money customers owe you, equipment and inventory.</li>
<li><strong>Liabilities:</strong> obligations the business owes to others, such as supplier bills, loans, credit cards and sales tax collected but not yet paid.</li>
<li><strong>Equity:</strong> the owner's residual claim, meaning what would be left for the owner if every asset were turned into cash and every liability paid off.</li>
</ul>

<p>Put together: <strong>Assets = Liabilities + Equity</strong>. You can rearrange it to answer different questions. Equity = Assets minus Liabilities tells you what the business is worth on paper to its owner. Liabilities = Assets minus Equity tells you how much of the business is financed by other people's money.</p>

<p>The U.S. Small Business Administration describes the balance sheet as the foundation of managing your finances, and the balance sheet is simply this equation laid out as a report. See the <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">SBA guide to managing your finances</a> for its overview. For a full walkthrough of the report itself, read our <a href="/blog/balance-sheet-small-business">small business balance sheet guide</a>.</p>

<h2>Why assets = liabilities + equity always balances</h2>

<p>Both sides of the equation describe the same pool of resources from two angles. The left side answers "what do we have?" and the right side answers "who has a claim on it?". A dollar in your business account cannot exist without someone having a claim to it: either a lender, a supplier you have not paid yet, or you as the owner.</p>

<p>Double-entry bookkeeping enforces the balance mechanically. Each transaction is recorded with equal debits and credits, so the equation can never drift out of balance unless an entry is wrong or incomplete. The IRS explains in <a href="https://www.irs.gov/publications/p583" target="_blank" rel="noopener noreferrer">Publication 583, Starting a Business and Keeping Records</a> that the double-entry system is self-balancing because every transaction is recorded as a debit in one account and a credit in another. If you want to learn the debit and credit rules, see our sibling guide on <a href="/blog/debits-and-credits">debits and credits</a>.</p>

<h3>The four ways a transaction can move the equation</h3>

<ol>
<li><strong>Assets up, liabilities or equity up:</strong> you take a bank loan, or you invoice a client for completed work.</li>
<li><strong>Assets down, liabilities or equity down:</strong> you pay a supplier bill, or you take an owner's draw.</li>
<li><strong>One asset up, another asset down:</strong> you buy equipment with cash, or a customer pays an invoice.</li>
<li><strong>One claim up, another claim down:</strong> a supplier agrees to convert an unpaid bill into a formal loan, or a partner's loan is converted into equity.</li>
</ol>

<p>Every transaction you will ever record fits one of these patterns. That is why the equation is such a reliable error check.</p>

<h2>The expanded accounting equation</h2>

<p>The basic equation hides the most interesting part of the story: how equity changes during the year. The expanded accounting equation splits equity into its components.</p>

<p>For a sole proprietor or single-member LLC:</p>

<p><strong>Assets = Liabilities + Owner's Capital + Revenue minus Expenses minus Owner's Draws</strong></p>

<p>For a corporation:</p>

<p><strong>Assets = Liabilities + Contributed Capital + Retained Earnings</strong>, where retained earnings grow with net income and shrink with dividends.</p>

<h3>How the equation looks for different business types</h3>

<p>The structure never changes, but the labels on the equity side do. A <strong>sole proprietor</strong> usually has a single capital account plus a draws account. A <strong>partnership</strong> keeps a separate capital account for each partner, so the equity side might read "Partner A capital + Partner B capital". A <strong>corporation</strong>, including an S corporation, shows common stock or paid-in capital plus retained earnings, and owners are paid through salary or distributions rather than draws. A <strong>single-member LLC</strong> often keeps books like a sole proprietorship unless it elects corporate tax treatment.</p>

<p>Whatever the label, the test is the same: add up everything the business owns, subtract everything it owes, and the result must equal the total of the equity accounts. If you are still choosing a structure, our sibling guide on <a href="/blog/how-to-start-an-llc">how to start an LLC</a> covers the most common option for small businesses.</p>

<p>This version shows that revenue increases equity and expenses decrease it. When you send an invoice, you are not just creating a receivable: you are increasing the owner's claim on the business through profit. At year end, revenue and expense accounts are closed into capital or <a href="/blog/retained-earnings">retained earnings</a>, which is how the income statement connects to the balance sheet. Our sibling post on <a href="/blog/owners-equity">owner's equity</a> covers the equity side in more depth.</p>

<table>
<thead><tr><th>Component</th><th>Effect on equity</th><th>Where it appears</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Owner's capital (investment)</td><td>Increases</td><td>Balance sheet, equity section</td><td>You deposit $10,000 to start the business</td></tr>
<tr><td>Revenue</td><td>Increases</td><td>Income statement, then closed to equity</td><td>You invoice a client $4,000 for a project</td></tr>
<tr><td>Expenses</td><td>Decreases</td><td>Income statement, then closed to equity</td><td>You pay $1,200 of rent</td></tr>
<tr><td>Owner's draws or dividends</td><td>Decreases</td><td>Statement of owner's equity</td><td>You transfer $1,000 to your personal account</td></tr>
<tr><td>Net loss</td><td>Decreases</td><td>Income statement, then equity</td><td>Expenses exceed revenue for the year</td></tr>
</tbody>
</table>

<h2>Worked example: nine transactions that keep the equation in balance</h2>

<p>Here is a month of activity for a hypothetical design studio, Northside Studio, run as a sole proprietorship. Watch the right-hand column: after every transaction, total assets equal total liabilities plus equity.</p>

<ol>
<li><strong>Owner invests $10,000 cash.</strong> Cash +10,000; Owner's capital +10,000.</li>
<li><strong>Buys a laptop for $2,400 cash.</strong> Equipment +2,400; Cash minus 2,400. Total assets unchanged.</li>
<li><strong>Buys a $600 printer on credit.</strong> Equipment +600; Accounts payable +600.</li>
<li><strong>Invoices a client $4,000 for a branding project.</strong> Accounts receivable +4,000; Revenue (equity) +4,000.</li>
<li><strong>Client pays $2,500 of the invoice.</strong> Cash +2,500; Accounts receivable minus 2,500.</li>
<li><strong>Pays $1,200 rent.</strong> Cash minus 1,200; Rent expense (reduces equity) 1,200.</li>
<li><strong>Pays the $600 printer bill.</strong> Cash minus 600; Accounts payable minus 600.</li>
<li><strong>Owner takes a $1,000 draw.</strong> Cash minus 1,000; Owner's draws (reduce equity) 1,000.</li>
<li><strong>Takes a $5,000 bank loan.</strong> Cash +5,000; Loan payable +5,000.</li>
</ol>

<table>
<thead><tr><th>#</th><th>Transaction</th><th>Total assets</th><th>Total liabilities</th><th>Total equity</th><th>Balanced?</th></tr></thead>
<tbody>
<tr><td>1</td><td>Owner invests cash</td><td>$10,000</td><td>$0</td><td>$10,000</td><td>Yes</td></tr>
<tr><td>2</td><td>Laptop bought with cash</td><td>$10,000</td><td>$0</td><td>$10,000</td><td>Yes</td></tr>
<tr><td>3</td><td>Printer bought on credit</td><td>$10,600</td><td>$600</td><td>$10,000</td><td>Yes</td></tr>
<tr><td>4</td><td>Invoice issued</td><td>$14,600</td><td>$600</td><td>$14,000</td><td>Yes</td></tr>
<tr><td>5</td><td>Partial payment received</td><td>$14,600</td><td>$600</td><td>$14,000</td><td>Yes</td></tr>
<tr><td>6</td><td>Rent paid</td><td>$13,400</td><td>$600</td><td>$12,800</td><td>Yes</td></tr>
<tr><td>7</td><td>Supplier paid</td><td>$12,800</td><td>$0</td><td>$12,800</td><td>Yes</td></tr>
<tr><td>8</td><td>Owner's draw</td><td>$11,800</td><td>$0</td><td>$11,800</td><td>Yes</td></tr>
<tr><td>9</td><td>Bank loan</td><td>$16,800</td><td>$5,000</td><td>$11,800</td><td>Yes</td></tr>
</tbody>
</table>

<h3>Closing position</h3>

<p>At month end the studio's assets are cash of $12,300 (10,000 minus 2,400 plus 2,500 minus 1,200 minus 600 minus 1,000 plus 5,000), accounts receivable of $1,500 and equipment of $3,000, for total assets of <strong>$16,800</strong>.</p>

<p>Liabilities are the $5,000 loan. Equity is $10,000 capital plus $4,000 revenue minus $1,200 rent minus $1,000 draws, which equals $11,800. Check: $5,000 + $11,800 = <strong>$16,800</strong>. The equation balances.</p>

<p>Notice what the numbers reveal. The bank loan in step 9 added $5,000 of cash but did not make the owner any richer: equity stayed at $11,800. And the $1,500 still unpaid on the invoice is a real asset, but only if it gets collected. Tracking it with an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> keeps that asset honest.</p>

<h2>How invoices and sales tax fit the equation</h2>

<p>Invoices are where most small businesses touch the accounting equation every day. Under accrual accounting, an invoice is recorded the moment you issue it, not when it is paid. Under cash accounting, nothing is recorded until the money arrives. Our guide to <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> explains which method suits you.</p>

<p>Sales tax changes the picture slightly. Say you invoice $2,000 for taxable work plus 8% sales tax, a total of $2,160. Assets (receivables) rise by $2,160. Equity rises by only $2,000 through revenue, because the $160 of tax belongs to the state and is recorded as a liability. So $2,160 = $160 + $2,000, and the equation still balances. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you split totals correctly before you invoice.</p>

<p>Other invoice events follow the same logic:</p>

<ul>
<li><strong>Customer deposit received before work starts:</strong> cash up, liability (unearned revenue) up. Equity does not change until you earn it.</li>
<li><strong>Credit note issued:</strong> receivables down, revenue down, so assets and equity both fall. A credit note reverses part of the original entry.</li>
<li><strong>Invoice written off as uncollectible:</strong> receivables down, and either an expense or an allowance absorbs the loss. Our sibling post on the <a href="/blog/allowance-for-doubtful-accounts">allowance for doubtful accounts</a> covers both methods.</li>
</ul>

<h2>Common mistakes that throw the equation out of balance</h2>

<p>Accounting software keeps entries balanced automatically, but it cannot stop you posting a balanced entry to the wrong accounts. These are the errors we see most often in small business books:</p>

<ul>
<li><strong>Recording owner draws as an expense.</strong> A draw reduces equity directly; it is not a business expense and should not reduce reported profit.</li>
<li><strong>Recording loan principal repayments as an expense.</strong> Only the interest is an expense. The principal reduces the liability.</li>
<li><strong>Treating sales tax as revenue.</strong> This overstates equity and understates liabilities.</li>
<li><strong>Expensing equipment that should be capitalized.</strong> Large purchases with a multi-year life usually belong on the balance sheet as assets, then are depreciated. See our sibling post on <a href="/blog/amortization-vs-depreciation">amortization vs depreciation</a>.</li>
<li><strong>Double-counting a payment.</strong> Recording a customer payment as new revenue instead of clearing the receivable inflates both assets and equity.</li>
</ul>

<p>A monthly trial balance catches arithmetic errors, and a quick balance sheet review catches many classification errors.</p>

<h2>Accounting equation vs other key formulas</h2>

<table>
<thead><tr><th>Formula</th><th>What it measures</th><th>Time frame</th><th>Report</th></tr></thead>
<tbody>
<tr><td>Assets = Liabilities + Equity</td><td>Financial position</td><td>A single date</td><td>Balance sheet</td></tr>
<tr><td>Revenue minus Expenses = Net income</td><td>Performance</td><td>A period (month, quarter, year)</td><td>Income statement</td></tr>
<tr><td>Opening equity + Net income + Contributions minus Draws = Closing equity</td><td>Change in owner's stake</td><td>A period</td><td>Statement of owner's equity</td></tr>
<tr><td>Current assets divided by Current liabilities</td><td>Short-term liquidity</td><td>A single date</td><td>Ratio from the balance sheet</td></tr>
</tbody>
</table>

<p>The second and third formulas are what connect your profit and loss report to the balance sheet. Our sibling comparison of the <a href="/blog/income-statement-vs-balance-sheet">income statement vs balance sheet</a> shows the link in detail.</p>

<h2>How to use the accounting equation as a small business owner</h2>

<p>You do not need to recite formulas to benefit from the equation. Use it for quick, practical checks:</p>

<ol>
<li><strong>Before borrowing:</strong> compare liabilities to equity. A business funded mostly by debt has less room for a bad quarter.</li>
<li><strong>Before taking a large draw:</strong> remember that every draw reduces equity and cash together. Our sibling guide on <a href="/blog/how-to-pay-yourself-as-a-business-owner">how to pay yourself as a business owner</a> explains safe approaches.</li>
<li><strong>When cash feels tight but profit looks fine:</strong> check receivables. Profit may be sitting in unpaid invoices rather than the bank.</li>
<li><strong>At month end:</strong> confirm total assets equal total liabilities plus equity on your balance sheet. If your software shows a difference, look for an unbalanced opening balance or a suspense account.</li>
</ol>

<h2>Create invoices that keep your books clean</h2>

<p>The accounting equation only works as well as the records feeding it, and for most service businesses those records start with invoices. Clear, numbered invoices with separate lines for tax make each entry easy to post and reconcile. Use the <a href="/invoice-generator">invoice generator</a> to create a professional PDF in minutes, give every invoice a unique sequential number, and choose a layout from our <a href="/invoice-templates">invoice templates</a>. Then record each one in your books and the equation will take care of itself.</p>
`,
  },
  {
    slug: "debits-and-credits",
    title: "Debits and Credits: A Cheat Sheet for Small Business Owners",
    description:
      "Debits and credits explained simply: a debit vs credit accounting cheat sheet, normal balances by account type, and invoice journal entries that balance.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["double-entry-bookkeeping", "journal-entries", "chart-of-accounts", "trial-balance"],
    faqs: [
      {
        q: "What is the difference between a debit and a credit?",
        a: "A debit is an entry on the left side of an account and a credit is an entry on the right side. Neither word means good or bad. Whether a debit increases or decreases an account depends on the account type: debits increase assets, expenses and owner's draws, while credits increase liabilities, equity and revenue. Every transaction has equal total debits and credits, which is what keeps the books in balance.",
      },
      {
        q: "Is a debit an increase or a decrease?",
        a: "It depends on the account. A debit increases asset accounts such as cash and accounts receivable, and expense accounts such as rent or software. A debit decreases liability, equity and revenue accounts. So paying a supplier bill involves a debit that decreases accounts payable and a credit that decreases cash. Learning the normal balance of each account type answers this question every time.",
      },
      {
        q: "What does DEALER mean in accounting?",
        a: "DEALER is a memory aid for normal balances. The first three letters, D for draws or dividends, E for expenses and A for assets, are accounts that normally carry a debit balance and increase with debits. The last three, L for liabilities, E for equity and R for revenue, normally carry a credit balance and increase with credits. If you can remember DEALER, you can work out most journal entries.",
      },
      {
        q: "Why does my bank call a deposit a credit?",
        a: "Your bank statement is written from the bank's point of view. The money in your account is a liability for the bank because it owes that money to you, and liabilities increase with credits. So when you deposit funds, the bank credits your account. In your own books, the same deposit is a debit to cash, because cash is an asset for your business. Both are correct for their own ledger.",
      },
      {
        q: "What is the journal entry when I send an invoice?",
        a: "Under accrual accounting, debit accounts receivable for the full invoice total and credit revenue for the pre-tax amount. If you charged sales tax or VAT, credit a sales tax payable account for the tax portion. For example, a $5,000 invoice with $400 of tax is a $5,400 debit to receivables, a $5,000 credit to revenue and a $400 credit to sales tax payable. Debits and credits both total $5,400.",
      },
      {
        q: "What is the journal entry when a customer pays an invoice?",
        a: "Debit cash (or your bank account) for the amount received and credit accounts receivable for the amount of the invoice being cleared. If a payment processor deducted a fee, debit a merchant fees expense account for the fee. For a $5,400 invoice paid with a $160 fee withheld, you would debit cash $5,240, debit merchant fees $160 and credit accounts receivable $5,400.",
      },
      {
        q: "Do debits always have to equal credits?",
        a: "Yes, in every journal entry and in the ledger as a whole. That rule is the core of double-entry bookkeeping. If total debits do not equal total credits on your trial balance, an entry was posted incorrectly, posted only once, or contains a typo. Matching totals do not prove everything is right, though, because a balanced entry can still use the wrong accounts.",
      },
      {
        q: "Do I need to understand debits and credits if I use accounting software?",
        a: "You do not need to write entries by hand, because the software creates them when you save invoices, bills and payments. But understanding debits and credits helps you fix miscategorized transactions, read your general ledger, record unusual items like owner contributions or loan payments, and follow what your accountant means when they post adjusting entries at year end.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Debits and credits are the two sides of every accounting entry. A debit is recorded on the left and a credit on the right. Debits increase assets, expenses and owner's draws; credits increase liabilities, equity and revenue. Every transaction must have equal total debits and credits, which keeps the books balanced.</p>

<p>Debits and credits confuse almost everyone at first, mainly because the words mean something different on your bank statement than in your own books. This guide gives you a debit vs credit accounting cheat sheet you can keep beside your desk, explains the logic so you do not have to memorize it, and walks through the full life of an invoice as journal entries that balance. The rules all come from the <a href="/blog/accounting-equation">accounting equation</a>, so start there if you want the foundation first.</p>

<p>On scope: our <a href="/invoice-generator">free invoice generator</a> creates PDF invoices in your browser. It does not post journal entries, so you will record each invoice in your bookkeeping software or spreadsheet using the rules below.</p>

<h2>What are debits and credits?</h2>

<p>In double-entry bookkeeping, each account has two sides. The left side is the debit side and the right side is the credit side. These terms come from long-standing bookkeeping convention and simply mean left and right. They do not mean "money in" or "money out", and they are not good or bad.</p>

<p>The IRS describes this clearly in <a href="https://www.irs.gov/publications/p583" target="_blank" rel="noopener noreferrer">Publication 583, Starting a Business and Keeping Records</a>: in the double-entry system, each account has a left side for debits and a right side for credits, and total debits must equal total credits after journal entries are posted to the ledger. That self-balancing feature is what makes double-entry books more reliable than a simple list of income and expenses. Our guide to <a href="/blog/double-entry-bookkeeping">double-entry bookkeeping</a> covers the system in full.</p>

<h3>Why debits increase some accounts and decrease others</h3>

<p>The logic follows the accounting equation: Assets = Liabilities + Equity. Assets sit on the left of the equation, so they increase on the left (debit) side. Liabilities and equity sit on the right, so they increase on the right (credit) side.</p>

<p>Revenue and expenses are sub-parts of equity. Revenue increases equity, so it behaves like equity and increases with credits. Expenses reduce equity, so they behave the opposite way and increase with debits. Owner's draws and dividends also reduce equity, so they increase with debits too.</p>

<h2>Debit vs credit accounting cheat sheet</h2>

<p>This table is the whole system on one screen. The "normal balance" is the side on which the account usually carries its balance, which is also the side that increases it.</p>

<table>
<thead><tr><th>Account type</th><th>Normal balance</th><th>A debit will</th><th>A credit will</th><th>Small business examples</th></tr></thead>
<tbody>
<tr><td>Assets</td><td>Debit</td><td>Increase</td><td>Decrease</td><td>Cash, accounts receivable, equipment, inventory, prepaid expenses</td></tr>
<tr><td>Expenses</td><td>Debit</td><td>Increase</td><td>Decrease</td><td>Rent, software, contractor costs, merchant fees, cost of goods sold</td></tr>
<tr><td>Owner's draws or dividends</td><td>Debit</td><td>Increase</td><td>Decrease</td><td>Transfers from the business to the owner</td></tr>
<tr><td>Liabilities</td><td>Credit</td><td>Decrease</td><td>Increase</td><td>Accounts payable, credit cards, loans, sales tax payable, customer deposits</td></tr>
<tr><td>Equity</td><td>Credit</td><td>Decrease</td><td>Increase</td><td>Owner's capital, retained earnings</td></tr>
<tr><td>Revenue</td><td>Credit</td><td>Decrease</td><td>Increase</td><td>Service income, product sales, interest income</td></tr>
<tr><td>Contra accounts</td><td>Opposite of parent</td><td>Varies</td><td>Varies</td><td>Accumulated depreciation and allowance for doubtful accounts (credit), sales returns (debit)</td></tr>
</tbody>
</table>

<h3>The DEALER memory aid</h3>

<p>If tables are not your thing, remember the word <strong>DEALER</strong>:</p>

<ul>
<li><strong>D</strong>raws or dividends, <strong>E</strong>xpenses, <strong>A</strong>ssets: increase with debits.</li>
<li><strong>L</strong>iabilities, <strong>E</strong>quity, <strong>R</strong>evenue: increase with credits.</li>
</ul>

<p>Your <a href="/blog/chart-of-accounts">chart of accounts</a> groups accounts in exactly these categories, usually numbered so assets come first and expenses last, which makes the normal balance of each account easy to spot.</p>

<h2>The bank statement trap</h2>

<p>The single biggest source of confusion is your bank statement. When you deposit money, the bank says it has "credited" your account. When you pay a card bill, it "debits" your account. That seems to contradict the cheat sheet.</p>

<p>It does not. The bank writes the statement from its own books. Your deposit is money the bank owes you, which is a liability for the bank, and liabilities increase with credits. In your books, the same deposit is cash, an asset, and it increases with a debit. Same event, two ledgers, opposite labels. Once you see that, the rest of the system is consistent.</p>

<h2>How to record a transaction with debits and credits</h2>

<p>Use the same five steps for any transaction, whether you are posting a manual entry or checking what your software did:</p>

<ol>
<li><strong>Identify the accounts affected.</strong> Every transaction touches at least two. A customer payment touches cash and accounts receivable.</li>
<li><strong>Classify each account.</strong> Is it an asset, liability, equity, revenue, expense or draw account?</li>
<li><strong>Decide the direction.</strong> Is each account going up or down?</li>
<li><strong>Apply the rule.</strong> Use the cheat sheet: an increase in an asset is a debit, an increase in revenue is a credit, and so on.</li>
<li><strong>Check that debits equal credits.</strong> If they do not, one of the steps above is wrong.</li>
</ol>

<p>Our step-by-step guide to <a href="/blog/journal-entries">journal entries</a> covers more transaction types, including deposits, refunds and accruals.</p>

<p>A quick example of the five steps: you pay a $90 software subscription from the business account. The accounts are software expense and cash (step 1). Software is an expense and cash is an asset (step 2). The expense goes up and cash goes down (step 3). An expense increases with a debit and an asset decreases with a credit (step 4). Debit software expense $90, credit cash $90, and both sides equal $90 (step 5). With practice, this takes a few seconds in your head.</p>

<h2>Debits and credits in a T-account</h2>

<p>Bookkeepers often sketch accounts as a letter T: the account name across the top, debits on the left of the vertical line and credits on the right. It is the quickest way to see how a balance is built. Here is the cash account for the example that follows, starting from zero:</p>

<table>
<thead><tr><th>Cash: debits (left)</th><th>Cash: credits (right)</th></tr></thead>
<tbody>
<tr><td>Client payment received: $5,240</td><td>Sales tax remitted: $400</td></tr>
<tr><td></td><td>Owner's draw: $1,000</td></tr>
<tr><td><strong>Total debits: $5,240</strong></td><td><strong>Total credits: $1,400</strong></td></tr>
<tr><td><strong>Balance: $3,840 debit</strong></td><td></td></tr>
</tbody>
</table>

<p>Because cash is an asset, its normal balance is a debit, and $5,240 minus $1,400 leaves a $3,840 debit balance. If the credits ever exceeded the debits, the account would show a credit balance, which for a bank account means it is overdrawn. A credit balance in an asset account, or a debit balance in a liability account, is always worth investigating: it is either an unusual situation or a posting error.</p>

<p>The same reading works for every account. A revenue T-account fills up on the right as you invoice, and only shows entries on the left when you issue a credit note or close the year. An expense account fills up on the left. Once you can picture the T, the cheat sheet stops being something to memorize and becomes something you can reason out.</p>

<h2>Worked example: an invoice from issue to payment</h2>

<p>Here is a sequence of real-world entries for a small marketing consultancy using accrual accounting. Each entry balances on its own, and the trial balance at the end balances too.</p>

<h3>Entry 1: issue an invoice with sales tax</h3>

<p>The consultancy invoices a client $5,000 for a campaign plus 8% sales tax of $400, a total of $5,400. You can check tax splits with the <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Accounts receivable</td><td>$5,400</td><td></td></tr>
<tr><td>Service revenue</td><td></td><td>$5,000</td></tr>
<tr><td>Sales tax payable</td><td></td><td>$400</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$5,400</strong></td><td><strong>$5,400</strong></td></tr>
</tbody>
</table>

<h3>Entry 2: client pays by card, with a processing fee</h3>

<p>The client pays the full $5,400 by card. The processor deposits $5,240 after keeping a $160 fee.</p>

<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Cash</td><td>$5,240</td><td></td></tr>
<tr><td>Merchant fees expense</td><td>$160</td><td></td></tr>
<tr><td>Accounts receivable</td><td></td><td>$5,400</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$5,400</strong></td><td><strong>$5,400</strong></td></tr>
</tbody>
</table>

<p>Note that the full invoice is cleared from receivables. Recording only $5,240 against the receivable would leave a phantom $160 balance on the customer's account.</p>

<h3>Entry 3: buy supplies on credit</h3>

<p>The consultancy receives a $300 bill for printed materials, payable in 30 days: debit supplies expense $300, credit accounts payable $300.</p>

<h3>Entry 4: remit the sales tax</h3>

<p>At the end of the filing period, the business pays the $400 of tax it collected: debit sales tax payable $400, credit cash $400. The liability goes to zero.</p>

<h3>Entry 5: owner's draw</h3>

<p>The owner transfers $1,000 to a personal account: debit owner's draws $1,000, credit cash $1,000. This is not an expense and does not reduce profit.</p>

<h3>Trial balance after the five entries</h3>

<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Cash (5,240 minus 400 minus 1,000)</td><td>$3,840</td><td></td></tr>
<tr><td>Accounts receivable (5,400 minus 5,400)</td><td>$0</td><td></td></tr>
<tr><td>Accounts payable</td><td></td><td>$300</td></tr>
<tr><td>Sales tax payable (400 minus 400)</td><td></td><td>$0</td></tr>
<tr><td>Owner's draws</td><td>$1,000</td><td></td></tr>
<tr><td>Service revenue</td><td></td><td>$5,000</td></tr>
<tr><td>Merchant fees expense</td><td>$160</td><td></td></tr>
<tr><td>Supplies expense</td><td>$300</td><td></td></tr>
<tr><td><strong>Total</strong></td><td><strong>$5,300</strong></td><td><strong>$5,300</strong></td></tr>
</tbody>
</table>

<p>Debits of $3,840 + $1,000 + $160 + $300 = $5,300 equal credits of $300 + $5,000 = $5,300. For more on preparing and troubleshooting this report, see our <a href="/blog/trial-balance">trial balance guide</a>.</p>

<h2>Common debit and credit entries for small businesses</h2>

<table>
<thead><tr><th>Transaction</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Invoice a client (accrual)</td><td>Accounts receivable</td><td>Revenue (and sales tax payable)</td></tr>
<tr><td>Receive payment on an invoice</td><td>Cash</td><td>Accounts receivable</td></tr>
<tr><td>Cash sale (no invoice outstanding)</td><td>Cash</td><td>Revenue</td></tr>
<tr><td>Customer deposit before work</td><td>Cash</td><td>Unearned revenue (liability)</td></tr>
<tr><td>Issue a credit note</td><td>Sales returns and allowances</td><td>Accounts receivable</td></tr>
<tr><td>Receive a supplier bill</td><td>Expense or asset</td><td>Accounts payable</td></tr>
<tr><td>Pay a supplier bill</td><td>Accounts payable</td><td>Cash</td></tr>
<tr><td>Buy equipment with cash</td><td>Equipment</td><td>Cash</td></tr>
<tr><td>Record monthly depreciation</td><td>Depreciation expense</td><td>Accumulated depreciation</td></tr>
<tr><td>Loan payment</td><td>Loan payable (principal) and interest expense</td><td>Cash</td></tr>
<tr><td>Owner puts money in</td><td>Cash</td><td>Owner's capital</td></tr>
<tr><td>Write off a bad debt (allowance method)</td><td>Allowance for doubtful accounts</td><td>Accounts receivable</td></tr>
</tbody>
</table>

<h3>Month-end adjusting entries</h3>

<p>Adjusting entries make sure revenue and expenses land in the right month under accrual accounting. They follow the same debit and credit rules:</p>

<ul>
<li><strong>Accrued expense:</strong> you used $250 of contractor time in March but the bill arrives in April. Debit contractor expense $250, credit accrued liabilities $250. See our guide to <a href="/blog/accrued-expenses">accrued expenses</a>.</li>
<li><strong>Prepaid expense used up:</strong> you paid $1,200 for a year of insurance in January. Each month, debit insurance expense $100 and credit prepaid insurance $100. Our guide to <a href="/blog/prepaid-expenses">prepaid expenses</a> shows the full schedule.</li>
<li><strong>Unearned revenue earned:</strong> a client paid a $3,000 retainer covering three months. Each month, debit unearned revenue $1,000 and credit service revenue $1,000.</li>
</ul>

<p>In each case, one side of the entry hits the income statement and the other hits the balance sheet, and the debit always equals the credit.</p>

<p>For the last row, our sibling guide to the <a href="/blog/allowance-for-doubtful-accounts">allowance for doubtful accounts</a> shows the full set of entries. The depreciation row is covered in <a href="/blog/amortization-vs-depreciation">amortization vs depreciation</a>.</p>

<h2>Mistakes to avoid</h2>

<ul>
<li><strong>Reading debits as "bad".</strong> A debit to cash is good news. The word only means left side.</li>
<li><strong>Copying your bank's labels.</strong> Your deposit is a credit on the bank statement but a debit to cash in your books.</li>
<li><strong>Posting the whole loan payment to expense.</strong> Only the interest is an expense; the principal reduces the liability.</li>
<li><strong>Netting fees against revenue.</strong> Record the full invoice as revenue and the processor fee as an expense, so your sales figures match your invoices.</li>
<li><strong>Using a suspense account and forgetting it.</strong> Clear temporary balances every month so your <a href="/blog/general-ledger">general ledger</a> stays accurate.</li>
</ul>

<h2>Create invoices that are easy to post</h2>

<p>Every invoice you send becomes a debit to receivables and a credit to revenue, so a clean invoice makes for a clean entry. Show the pre-tax amount, the tax and the total on separate lines, and give each invoice a unique number from the <a href="/tools/invoice-number-generator">invoice number generator</a>. Build yours in minutes with the <a href="/invoice-generator">invoice generator</a>, or pick a layout from our <a href="/invoice-templates">invoice templates</a>, then post it using the cheat sheet above. When your invoice looks right, download it as a PDF and send it straight to your client.</p>
`,
  },
  {
    slug: "how-to-calculate-profit-margin",
    title: "How to Calculate Profit Margin: Gross and Net Margin Formulas",
    description:
      "How to calculate profit margin step by step: gross, operating and net margin formulas, a worked example, per-invoice margins and pricing for a target margin.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "average-profit-margin-by-industry",
      "financial-ratios-small-business",
      "markup-vs-margin",
      "gross-profit-vs-net-profit",
      "cost-of-goods-sold",
      "profit-and-loss-statement",
    ],
    faqs: [
      {
        q: "What is the formula for profit margin?",
        a: "Profit margin is profit divided by revenue, multiplied by 100 to give a percentage. The profit figure you use determines the type of margin. Gross margin uses revenue minus cost of goods sold. Operating margin uses operating profit after overheads. Net margin uses net profit after every expense, including interest and taxes. For example, $33,000 of net profit on $180,000 of revenue is a net margin of about 18.3%.",
      },
      {
        q: "How do I calculate gross profit margin?",
        a: "Subtract the direct cost of delivering your products or services from revenue to get gross profit, then divide gross profit by revenue and multiply by 100. If you billed $180,000 and spent $72,000 on materials, subcontractors and other direct costs, gross profit is $108,000 and gross margin is $108,000 divided by $180,000, which is 60%. Gross margin shows how much each sales dollar leaves to cover overheads and profit.",
      },
      {
        q: "How do I calculate net profit margin?",
        a: "Take total revenue, subtract every expense for the period, including cost of goods sold, overheads, interest and income taxes, to get net profit. Divide net profit by revenue and multiply by 100. A business with $180,000 of revenue and $147,000 of total costs has $33,000 of net profit, and a net margin of 18.3%. Net margin is the most complete measure of how profitable the business is overall.",
      },
      {
        q: "What is a good profit margin for a small business?",
        a: "There is no single good number, because margins vary widely by industry. Service businesses with few direct costs, such as consulting or design, usually have much higher gross margins than retailers, restaurants or construction firms that buy materials. The most useful benchmark is your own trend over time and comparisons with businesses of a similar type and size. A falling margin is a signal to review pricing or costs.",
      },
      {
        q: "What is the difference between margin and markup?",
        a: "Margin is profit as a percentage of the selling price; markup is profit as a percentage of cost. If something costs $100 and sells for $150, the profit is $50. Markup is $50 divided by $100, or 50%. Margin is $50 divided by $150, or 33.3%. Markup is always the larger number for the same sale, which is why confusing the two can leave your prices too low.",
      },
      {
        q: "How do I set a price to hit a target profit margin?",
        a: "Divide your cost by one minus the target margin expressed as a decimal. If a job costs $1,050 to deliver and you want a 60% gross margin, the price is $1,050 divided by 0.40, which is $2,625. Check it: $2,625 minus $1,050 is $1,575 of gross profit, and $1,575 divided by $2,625 is 60%. Do not simply add 60% to cost, which gives a much lower margin.",
      },
      {
        q: "Should sales tax be included when calculating profit margin?",
        a: "No. Sales tax or VAT collected from customers is money you hold for the government, not revenue, so exclude it from the revenue figure. If an invoice totals $2,700 including $200 of tax, use $2,500 as revenue in your margin calculation. Including the tax would overstate revenue and make your margin look different from what your profit and loss statement shows.",
      },
      {
        q: "Can profit margin be negative?",
        a: "Yes. If costs exceed revenue, profit is negative and so is the margin. A negative gross margin means you are losing money on each sale before overheads, which usually points to underpricing or rising direct costs. A positive gross margin with a negative net margin means individual jobs are profitable but overheads are too high for current sales volume. Each situation calls for a different fix.",
      },
      {
        q: "How often should I calculate my profit margins?",
        a: "Monthly is a practical rhythm for most small businesses, using your profit and loss statement. Also calculate gross margin on each quote or large invoice before you send it, so you catch underpriced work early. Comparing the same month across years helps if your business is seasonal. Quarterly reviews with your accountant can then focus on trends rather than one-off swings.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> To calculate profit margin, divide profit by revenue and multiply by 100. Gross margin = (revenue minus cost of goods sold) divided by revenue. Net margin = net profit divided by revenue. For example, $33,000 of net profit on $180,000 of revenue gives a net profit margin of 18.3%.</p>

<p>Knowing how to calculate profit margin tells you how much of every dollar you invoice actually stays in the business. Revenue can grow while margins quietly shrink, so this is one of the most useful numbers a small business owner can track. This guide covers the gross, operating and net margin formulas, a full worked example, how to check the margin on a single invoice, and how to price new work for a target margin. If the difference between revenue and profit is new to you, read <a href="/blog/revenue-vs-profit">revenue vs profit</a> first.</p>

<p>The numbers in this guide come from two places: the invoices you send and your profit and loss report. The <a href="/invoice-generator">free invoice generator</a> helps with the first by keeping prices, tax and totals on separate lines, which makes margin calculations straightforward.</p>

<h2>What is profit margin?</h2>

<p>Profit margin is profit expressed as a percentage of revenue. A 25% margin means that for every $100 of sales, $25 is left as profit at the level you are measuring. Because it is a ratio, margin lets you compare months of different sizes, compare jobs with each other, and spot problems that raw dollar figures hide.</p>

<p>There are three common margins, each using a different line from the income statement. They form a ladder: gross margin is always the highest, operating margin sits in the middle, and net margin is lowest, because each step down subtracts more costs.</p>

<table>
<thead><tr><th>Margin</th><th>Formula</th><th>Costs subtracted</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td>Gross margin</td><td>(Revenue minus COGS) divided by Revenue x 100</td><td>Direct costs only: materials, subcontractors, direct labor</td><td>Whether your pricing covers the cost of delivering the work</td></tr>
<tr><td>Operating margin</td><td>Operating profit divided by Revenue x 100</td><td>Direct costs plus overheads: rent, software, marketing, admin salaries</td><td>How efficiently the business runs day to day</td></tr>
<tr><td>Net margin</td><td>Net profit divided by Revenue x 100</td><td>Everything, including interest and income taxes</td><td>How much of each sales dollar the owner actually keeps</td></tr>
</tbody>
</table>

<h3>Why margins differ so much between business types</h3>

<p>There is no universal "good" profit margin, because the cost structure of each business model is different. A consultant, copywriter or bookkeeper sells mostly their own time and has very few direct costs, so gross margin can be high, and the real pressure is on overheads and the owner's pay. A retailer, caterer or contractor buys materials or stock for every sale, so gross margin is naturally lower and small changes in supplier prices move it quickly. A business that relies heavily on subcontractors sits somewhere in between.</p>

<p>That is why the most useful comparisons are your own margins over time, and margins of businesses with a similar model and size. Industry benchmark reports exist, but they mix very different firms, so treat any single figure as a rough reference point rather than a target.</p>

<p>For a deeper comparison of the two most common measures, see <a href="/blog/gross-profit-vs-net-profit">gross profit vs net profit</a>.</p>

<h2>Gross profit margin formula</h2>

<p><strong>Gross margin = (Revenue minus Cost of goods sold) divided by Revenue x 100</strong></p>

<p>Cost of goods sold (COGS), sometimes called cost of sales or direct costs, includes only the costs that rise and fall with each job or product. For a product business that means inventory, materials and freight in. For a service business it usually means subcontractors, direct staff time, and materials used on client work. Our guide to <a href="/blog/cost-of-goods-sold">cost of goods sold</a> explains what belongs in it.</p>

<p>Gross margin is the number to watch when setting prices. If it is too thin, no amount of overhead cutting will make the business healthy.</p>

<h2>Net profit margin formula</h2>

<p><strong>Net margin = Net profit divided by Revenue x 100</strong></p>

<p>Net profit is the bottom line of your <a href="/blog/profit-and-loss-statement">profit and loss statement</a>: revenue minus COGS, minus <a href="/blog/operating-expenses">operating expenses</a>, minus interest and income taxes. It is the truest measure of overall profitability, but it is also affected by financing choices and tax, so many owners track operating margin alongside it.</p>

<h3>Operating margin in between</h3>

<p><strong>Operating margin = Operating profit divided by Revenue x 100</strong>, where operating profit is gross profit minus operating expenses. It excludes interest and taxes, which makes it handy for comparing performance from year to year even if your loan or tax position changes.</p>

<h2>How to calculate profit margin step by step</h2>

<ol>
<li><strong>Pick the period.</strong> Use a full month, quarter or year so revenue and costs line up.</li>
<li><strong>Find net revenue.</strong> Start with total invoiced sales, then subtract credit notes, refunds and discounts. Exclude sales tax or VAT collected, because that money is not yours.</li>
<li><strong>Total your direct costs.</strong> Add up COGS for the same period.</li>
<li><strong>Calculate gross profit and gross margin.</strong> Revenue minus COGS, then divide by revenue.</li>
<li><strong>Subtract operating expenses.</strong> This gives operating profit. Divide by revenue for operating margin.</li>
<li><strong>Subtract interest and taxes.</strong> This gives net profit. Divide by revenue for net margin.</li>
<li><strong>Compare.</strong> Look at the same margins for previous periods to see whether you are improving.</li>
</ol>

<h3>Set up a simple monthly margin tracker</h3>

<p>You do not need special software. A spreadsheet with one row per month and columns for revenue, COGS, gross profit, gross margin, operating expenses, operating profit, operating margin and net margin is enough. Fill it from your profit and loss report on the same day each month, add a column for notes such as "large one-off job" or "annual software renewal", and look at a rolling three-month average so one unusual month does not cause panic or false comfort.</p>

<p>If you use cash-basis books, margins can swing month to month based on when customers pay. Our guide to <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> explains why accrual figures give a steadier picture.</p>

<h2>Worked example: a small design agency's year</h2>

<p>Here is a full calculation for a hypothetical design agency with one owner, a part-time assistant and freelance subcontractors.</p>

<table>
<thead><tr><th>Line</th><th>Amount</th><th>Margin</th></tr></thead>
<tbody>
<tr><td>Revenue (invoiced, excluding sales tax)</td><td>$180,000</td><td>100%</td></tr>
<tr><td>Cost of goods sold: subcontractors, print, stock assets</td><td>($72,000)</td><td></td></tr>
<tr><td><strong>Gross profit</strong></td><td><strong>$108,000</strong></td><td><strong>60.0%</strong></td></tr>
<tr><td>Rent</td><td>($18,000)</td><td></td></tr>
<tr><td>Software and subscriptions</td><td>($6,000)</td><td></td></tr>
<tr><td>Marketing</td><td>($9,000)</td><td></td></tr>
<tr><td>Assistant wages and admin</td><td>($30,000)</td><td></td></tr>
<tr><td><strong>Operating profit</strong></td><td><strong>$45,000</strong></td><td><strong>25.0%</strong></td></tr>
<tr><td>Interest on equipment loan</td><td>($3,000)</td><td></td></tr>
<tr><td>Income taxes</td><td>($9,000)</td><td></td></tr>
<tr><td><strong>Net profit</strong></td><td><strong>$33,000</strong></td><td><strong>18.3%</strong></td></tr>
</tbody>
</table>

<p>The arithmetic: $180,000 minus $72,000 = $108,000, and $108,000 divided by $180,000 = 60%. Operating expenses total $18,000 + $6,000 + $9,000 + $30,000 = $63,000, so operating profit is $108,000 minus $63,000 = $45,000, and $45,000 divided by $180,000 = 25%. Finally, $45,000 minus $3,000 minus $9,000 = $33,000, and $33,000 divided by $180,000 = 18.33%.</p>

<h3>Comparing two years side by side</h3>

<p>Margins become far more useful once you have a second period to compare. Suppose the following year the agency grows revenue to $200,000, but subcontractor rates rise and COGS reaches $88,000. Gross profit is $200,000 minus $88,000 = $112,000, a gross margin of 56%. Revenue grew by 11%, and gross profit still rose by $4,000, yet each dollar of sales now keeps four cents less. If overheads also rose to $70,000, operating profit would be $112,000 minus $70,000 = $42,000, or 21%, lower than the year before in both dollars and percentage. Without the margin calculation, the owner might celebrate the higher sales and miss the squeeze.</p>

<p>What the agency learns: its 60% gross margin is healthy for service work, but overheads consume 35 percentage points of it. A 10% rise in rent and software would barely move gross margin, yet it would cut operating margin noticeably. That is why tracking all three levels matters.</p>

<h2>How to calculate the margin on a single invoice</h2>

<p>Annual margins tell you how the business did. Per-job margins tell you which work to chase. Before sending a quote or a large invoice, run the gross margin on that job alone.</p>

<p>Example: the agency invoices a brand refresh at $2,500 plus sales tax. Direct costs were $650 for a freelance illustrator and $400 for printing, a total of $1,050. Gross profit is $2,500 minus $1,050 = $1,450, so the job's gross margin is $1,450 divided by $2,500 = 58%, slightly below the agency's 60% average. Note that the sales tax on the invoice is ignored: use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to separate tax from the price if your totals include it.</p>

<p>If a job type consistently comes in below your average margin, that is a pricing problem, not a volume problem. Our guides on <a href="/blog/how-to-raise-prices">how to raise prices</a> and <a href="/blog/value-based-pricing">value-based pricing</a> cover what to do next.</p>

<h2>Margin vs markup: the most expensive confusion</h2>

<p>Markup is profit as a percentage of cost; margin is profit as a percentage of price. They are not interchangeable.</p>

<table>
<thead><tr><th>Cost</th><th>Price</th><th>Profit</th><th>Markup (profit / cost)</th><th>Margin (profit / price)</th></tr></thead>
<tbody>
<tr><td>$100</td><td>$125</td><td>$25</td><td>25%</td><td>20%</td></tr>
<tr><td>$100</td><td>$150</td><td>$50</td><td>50%</td><td>33.3%</td></tr>
<tr><td>$100</td><td>$200</td><td>$100</td><td>100%</td><td>50%</td></tr>
<tr><td>$100</td><td>$250</td><td>$150</td><td>150%</td><td>60%</td></tr>
</tbody>
</table>

<p>An owner who wants a 50% margin but adds a 50% markup ends up at 33.3%. Our full guide to <a href="/blog/markup-vs-margin">markup vs margin</a> includes conversion formulas.</p>

<h3>Pricing for a target margin</h3>

<p>To find the price that hits a target margin, use: <strong>Price = Cost divided by (1 minus target margin)</strong>.</p>

<p>For the $1,050 job above, a 60% target gives $1,050 divided by 0.40 = $2,625. Check: $2,625 minus $1,050 = $1,575, and $1,575 divided by $2,625 = 60%. By contrast, adding 60% to cost gives $1,680, a margin of only 37.5%.</p>

<h2>How to improve your profit margin</h2>

<ul>
<li><strong>Raise prices on low-margin work.</strong> Small increases on your weakest jobs often do more than chasing new clients.</li>
<li><strong>Reprice by value, not hours,</strong> for work where your expertise delivers a measurable result.</li>
<li><strong>Cut direct costs.</strong> Renegotiate subcontractor rates, reduce rework and scope creep, and bill for out-of-scope requests.</li>
<li><strong>Control overheads.</strong> Review subscriptions and fixed costs; our guide to <a href="/blog/fixed-vs-variable-costs">fixed vs variable costs</a> helps you see which ones scale.</li>
<li><strong>Bill everything you are owed.</strong> Reimbursable expenses, rush fees and late fees left off invoices come straight out of margin.</li>
<li><strong>Collect faster.</strong> Unpaid invoices do not change accrual margin, but bad debts do. Our sibling guide to the <a href="/blog/allowance-for-doubtful-accounts">allowance for doubtful accounts</a> shows how losses hit profit.</li>
</ul>

<p>The U.S. Small Business Administration's <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">guide to managing your finances</a> recommends regularly comparing money in and money out to keep profit and loss in balance, which is exactly what margin tracking does.</p>

<h2>Common profit margin mistakes</h2>

<ul>
<li><strong>Including sales tax in revenue,</strong> which inflates revenue and distorts every margin.</li>
<li><strong>Leaving the owner's time out of costs.</strong> A sole proprietor's 60% margin may hide the fact that no salary has been paid. See <a href="/blog/how-to-pay-yourself-as-a-business-owner">how to pay yourself as a business owner</a>.</li>
<li><strong>Mixing periods,</strong> such as a month of revenue against a quarter of costs.</li>
<li><strong>Using markup and margin interchangeably</strong> when quoting.</li>
</ul>

<h2>Invoice clearly to track margins accurately</h2>

<p>Learning how to calculate profit margin is only useful if your revenue figures are clean. Invoices that separate the price, discounts and tax make it simple to pull net revenue for any job or period. Create yours with the <a href="/invoice-generator">invoice generator</a>, pick a layout from the <a href="/invoice-templates">invoice templates</a>, and run the margin on every job before you hit send. It is free, needs no account, and exports a print-ready PDF invoice.</p>
`,
  },
  {
    slug: "allowance-for-doubtful-accounts",
    title: "Allowance for Doubtful Accounts: Journal Entries and Examples",
    description:
      "Allowance for doubtful accounts explained: how to estimate it, the journal entry for bad debt expense, write-offs and recoveries, with a worked aging example.",
    category: "business-finance",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "bad-debt-write-off",
      "accounts-receivable-aging-report",
      "accounts-receivable-guide",
      "journal-entries",
    ],
    faqs: [
      {
        q: "What is the allowance for doubtful accounts?",
        a: "It is a contra-asset account that reduces accounts receivable to the amount you realistically expect to collect. Instead of waiting for a specific customer to default, you estimate the portion of current receivables that will not be paid and record it in advance. On the balance sheet, receivables are shown minus the allowance, giving net realizable value. It is also called the allowance for credit losses or the bad debt reserve.",
      },
      {
        q: "What is the journal entry for allowance for doubtful accounts?",
        a: "To create or increase the allowance, debit bad debt expense and credit allowance for doubtful accounts. For example, if your estimate requires an allowance of $4,150 and the account already has a $1,200 credit balance, record a $2,950 debit to bad debt expense and a $2,950 credit to the allowance. The expense appears on the income statement and the allowance reduces receivables on the balance sheet.",
      },
      {
        q: "How do I write off an account using the allowance method?",
        a: "When a specific invoice is confirmed as uncollectible, debit allowance for doubtful accounts and credit accounts receivable for the unpaid amount. No expense is recorded at this point, because the expense was already recognized when you built the allowance. Net receivables do not change: gross receivables and the allowance both fall by the same amount. Keep the collection history on file to support the write-off.",
      },
      {
        q: "Is the allowance for doubtful accounts a debit or credit?",
        a: "It normally has a credit balance. Although it sits in the assets section of the balance sheet, it is a contra-asset, meaning it works against the accounts receivable balance it is paired with. Credits increase it and debits decrease it. A temporary debit balance can appear if write-offs during the year exceed the allowance, which is a sign the estimate was too low and needs adjusting.",
      },
      {
        q: "What is the difference between the allowance method and the direct write-off method?",
        a: "The allowance method estimates bad debts in advance and records the expense in the same period as the related sales. The direct write-off method records bad debt expense only when a specific invoice is confirmed uncollectible, which can be months or years after the sale. The allowance method is required under US GAAP and IFRS when amounts are material; the direct write-off method is simpler and is the general approach for US tax purposes.",
      },
      {
        q: "Can I deduct the allowance for doubtful accounts on my taxes?",
        a: "Generally not in the US. The IRS allows a deduction for business bad debts that become wholly or partially worthless, which works like the direct write-off method, rather than for an estimated allowance. The amount must also have been included in income, so cash-basis businesses usually cannot deduct unpaid fees they never reported. The book allowance and tax deduction therefore often differ. Ask a tax professional about your situation.",
      },
      {
        q: "How do I estimate the allowance for doubtful accounts?",
        a: "Two common methods are the percentage of sales method and the aging method. The percentage of sales method applies a historical loss rate to credit sales for the period. The aging method groups open invoices by how overdue they are and applies a higher loss rate to older buckets. Under current US GAAP, you should also adjust historical rates for current conditions and reasonable forecasts.",
      },
      {
        q: "What happens if a customer pays after I wrote off their invoice?",
        a: "Reverse the write-off, then record the payment. First debit accounts receivable and credit allowance for doubtful accounts for the amount recovered, which reinstates the receivable. Then debit cash and credit accounts receivable when the money arrives. This two-step approach keeps a clear record that the customer eventually paid, which is useful if you extend credit to them again.",
      },
      {
        q: "Do small businesses need an allowance for doubtful accounts?",
        a: "If you keep cash-basis books, you do not record receivables, so no allowance is needed. If you use accrual accounting and prepare financial statements for lenders, investors or auditors under GAAP, you generally need one when expected losses are material. Very small businesses with few credit sales and rare bad debts often use the direct write-off method for internal books, and their accountant decides whether that is acceptable.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The allowance for doubtful accounts is a contra-asset that estimates how much of your accounts receivable will never be collected. The journal entry to build it is a debit to bad debt expense and a credit to the allowance. When a specific invoice is written off, debit the allowance and credit accounts receivable.</p>

<p>Every business that lets customers pay later will eventually issue an invoice that never gets paid. The allowance for doubtful accounts lets you recognize that cost in the same period as the sale, so your profit and your balance sheet are not overstated. This guide explains how the allowance works, the main estimation methods, every journal entry you will need (with amounts that balance), and how the book treatment differs from the tax deduction. If you need the basics of receivables first, start with our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a>.</p>

<p>A note on scope: invoices you create with our <a href="/invoice-generator">free invoice generator</a> become receivables in your books, but the generator itself does not keep a ledger. You will make these entries in your accounting software or spreadsheet. This article is general information, not accounting or tax advice.</p>

<h2>What is the allowance for doubtful accounts?</h2>

<p>The allowance for doubtful accounts (also called the allowance for credit losses, bad debt reserve or provision for doubtful debts) is a balance sheet account paired with accounts receivable. It has a normal credit balance, which reduces gross receivables to <strong>net realizable value</strong>: the amount you actually expect to collect.</p>

<table>
<thead><tr><th>Balance sheet line</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Accounts receivable</td><td>$70,000</td></tr>
<tr><td>Less: allowance for doubtful accounts</td><td>($4,150)</td></tr>
<tr><td><strong>Accounts receivable, net</strong></td><td><strong>$65,850</strong></td></tr>
</tbody>
</table>

<p>Because it is a contra account, it behaves the opposite way to the asset it reduces: credits increase it and debits decrease it. Our <a href="/blog/debits-and-credits">debits and credits cheat sheet</a> explains contra accounts alongside the other account types.</p>

<h3>Why not just write off bad invoices when they happen?</h3>

<p>Accrual accounting aims to match expenses with the revenue they relate to. If you invoice $300,000 this year and expect about 1% of it to go unpaid, that $3,000 loss is a cost of this year's sales. Waiting until next year to record it would overstate this year's profit and understate next year's. It would also overstate receivables on today's balance sheet, which matters to lenders who look at your <a href="/blog/accounting-equation">accounting equation</a> and asset base.</p>

<h2>The standards behind it: CECL and IFRS 9</h2>

<p>Under US GAAP, credit losses on trade receivables fall under ASC 326, the current expected credit loss (CECL) model, which now applies to private companies as well as public ones. CECL asks you to estimate lifetime expected losses using historical loss experience adjusted for current conditions and reasonable, supportable forecasts. For most small businesses, a well-built aging schedule with rates adjusted for current conditions meets that spirit.</p>

<p>Under IFRS, IFRS 9 uses an expected credit loss model too, and allows a simplified approach for trade receivables that measures the loss allowance at lifetime expected credit losses, often using a provision matrix that looks very similar to an aging schedule. If you report under either framework, confirm your method with your accountant.</p>

<h2>Methods to estimate the allowance</h2>

<table>
<thead><tr><th>Method</th><th>How it works</th><th>Focus</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Percentage of sales</td><td>Apply a historical loss rate to credit sales for the period</td><td>Income statement (expense)</td><td>Quick monthly estimates, stable customer base</td></tr>
<tr><td>Aging of receivables</td><td>Apply higher loss rates to older overdue buckets</td><td>Balance sheet (ending allowance)</td><td>Most small businesses with an AR aging report</td></tr>
<tr><td>Specific identification</td><td>Review large or risky accounts one by one</td><td>Individual customers</td><td>A few large clients, or known problem accounts</td></tr>
<tr><td>Direct write-off (not an allowance)</td><td>Expense only when an invoice is confirmed uncollectible</td><td>Actual losses</td><td>Tax returns; immaterial bad debts</td></tr>
</tbody>
</table>

<p>Many businesses combine methods: an aging schedule for the bulk of receivables plus specific reviews for the largest accounts.</p>

<p>Where do the loss rates come from? Start with your own history. For each of the last two or three years, look at the invoices that sat in each aging bucket at year end and work out what share was never collected. If you have little history, begin with cautious rates, document why you chose them, and refine them as real collection data builds up. Your accountant can help check that the rates are reasonable for your customer base.</p>

<h2>How to calculate the allowance using the aging method</h2>

<ol>
<li><strong>Run an aging report.</strong> Group every open invoice by days past due. Our guide to the <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> shows how to build one.</li>
<li><strong>Set a loss rate for each bucket.</strong> Base it on the share of invoices in that bucket that went unpaid historically, adjusted for current conditions.</li>
<li><strong>Multiply each bucket by its rate</strong> and add the results. This is the required ending allowance.</li>
<li><strong>Compare with the current allowance balance.</strong> The difference is the adjustment you need to record.</li>
<li><strong>Post the adjusting entry</strong> to bad debt expense and the allowance.</li>
<li><strong>Document your assumptions</strong> so you and your accountant can review them next period.</li>
</ol>

<h2>Worked example: aging schedule and adjusting entry</h2>

<p>A small IT services company has $70,000 of open receivables at December 31. Its loss rates come from the last three years of collection history, nudged up slightly because two clients are in a struggling sector.</p>

<table>
<thead><tr><th>Age bucket</th><th>Receivables</th><th>Estimated loss rate</th><th>Required allowance</th></tr></thead>
<tbody>
<tr><td>Not yet due</td><td>$40,000</td><td>1%</td><td>$400</td></tr>
<tr><td>1 to 30 days past due</td><td>$15,000</td><td>3%</td><td>$450</td></tr>
<tr><td>31 to 60 days past due</td><td>$8,000</td><td>10%</td><td>$800</td></tr>
<tr><td>61 to 90 days past due</td><td>$4,000</td><td>25%</td><td>$1,000</td></tr>
<tr><td>Over 90 days past due</td><td>$3,000</td><td>50%</td><td>$1,500</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$70,000</strong></td><td></td><td><strong>$4,150</strong></td></tr>
</tbody>
</table>

<p>Check the totals: $40,000 + $15,000 + $8,000 + $4,000 + $3,000 = $70,000, and $400 + $450 + $800 + $1,000 + $1,500 = $4,150.</p>

<h3>Entry 1: adjust the allowance</h3>

<p>The allowance already has a $1,200 credit balance from last year. The required balance is $4,150, so the adjustment is $4,150 minus $1,200 = $2,950.</p>

<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Bad debt expense</td><td>$2,950</td><td></td></tr>
<tr><td>Allowance for doubtful accounts</td><td></td><td>$2,950</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$2,950</strong></td><td><strong>$2,950</strong></td></tr>
</tbody>
</table>

<p>Net receivables are now $70,000 minus $4,150 = $65,850.</p>

<h3>Entry 2: write off a specific invoice</h3>

<p>In January, a client who owes $1,800 (in the over-90-days bucket) closes down. After documented collection attempts, the company writes the invoice off.</p>

<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Allowance for doubtful accounts</td><td>$1,800</td><td></td></tr>
<tr><td>Accounts receivable</td><td></td><td>$1,800</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$1,800</strong></td><td><strong>$1,800</strong></td></tr>
</tbody>
</table>

<p>No expense is recorded now, because it was recognized in Entry 1. Net receivables stay the same: gross receivables fall to $68,200 and the allowance falls to $2,350, and $68,200 minus $2,350 = $65,850.</p>

<h3>Entry 3: recover part of a written-off invoice</h3>

<p>In March, the closed client's liquidator pays $600. First reinstate that portion of the receivable, then record the cash.</p>

<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Accounts receivable</td><td>$600</td><td></td></tr>
<tr><td>Allowance for doubtful accounts</td><td></td><td>$600</td></tr>
<tr><td>Cash</td><td>$600</td><td></td></tr>
<tr><td>Accounts receivable</td><td></td><td>$600</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$1,200</strong></td><td><strong>$1,200</strong></td></tr>
</tbody>
</table>

<h3>Alternative: the percentage of sales method</h3>

<p>If the same company estimated losses at 1% of $300,000 of annual credit sales, it would record $3,000 of bad debt expense (debit bad debt expense $3,000, credit allowance $3,000) regardless of the existing allowance balance. This method is simpler but can let the allowance drift away from what receivables actually look like, so check it against an aging review at least once a year.</p>

<h3>What if write-offs exceed the allowance?</h3>

<p>Sometimes a bad year produces more write-offs than the allowance can absorb, leaving the account with a temporary debit balance. Suppose the IT company's allowance had been only $1,200 and it wrote off $1,800: the allowance would show a $600 debit balance. At year end, the aging schedule still requires a $4,150 credit balance, so the adjusting entry becomes $4,150 + $600 = $4,750 (debit bad debt expense $4,750, credit allowance $4,750). The larger expense is a signal that past loss rates were too optimistic and should be raised.</p>

<h2>Reviewing and presenting the allowance</h2>

<p>The allowance is an estimate, so treat it as something you revisit, not a number you set once. A practical routine for a small business:</p>

<ul>
<li><strong>Monthly or quarterly:</strong> rerun the aging schedule and post a small true-up entry so the allowance tracks your receivables.</li>
<li><strong>Annually:</strong> compare last year's allowance with the write-offs that actually happened. If actual losses were consistently higher or lower, change your rates.</li>
<li><strong>When conditions change:</strong> a major client in difficulty, a downturn in a key customer industry, or a change in your own credit terms all justify adjusting rates before the losses appear.</li>
<li><strong>Before year end:</strong> review every large overdue invoice individually and decide whether it needs a specific allowance or a write-off.</li>
</ul>

<p>On the balance sheet, show receivables net of the allowance, either as two lines (as in the table at the top of this guide) or as one net figure with the allowance disclosed in the notes. Bad debt expense usually sits within operating expenses on the income statement. If you keep cash-basis books, none of this applies, because you never recorded the receivable as income; our guide to <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> explains the difference.</p>

<h2>Allowance method vs direct write-off method</h2>

<table>
<thead><tr><th>Feature</th><th>Allowance method</th><th>Direct write-off method</th></tr></thead>
<tbody>
<tr><td>When expense is recorded</td><td>Estimated in the period of the sale</td><td>When a specific invoice is deemed uncollectible</td></tr>
<tr><td>Matches expense to revenue</td><td>Yes</td><td>No, often a later period</td></tr>
<tr><td>Balance sheet receivables</td><td>Shown at net realizable value</td><td>Overstated until write-off</td></tr>
<tr><td>GAAP and IFRS</td><td>Required when losses are material</td><td>Acceptable only when immaterial</td></tr>
<tr><td>US tax return</td><td>Estimate generally not deductible</td><td>Generally how business bad debts are deducted</td></tr>
<tr><td>Write-off entry</td><td>Debit allowance, credit receivables</td><td>Debit bad debt expense, credit receivables</td></tr>
</tbody>
</table>

<p>For the direct method in detail, see our guide to <a href="/blog/bad-debt-write-off">bad debt write-offs</a>.</p>

<h2>Tax treatment of bad debts in the US</h2>

<p>Your book allowance and your tax deduction usually differ. According to the <a href="https://www.irs.gov/taxtopics/tc453" target="_blank" rel="noopener noreferrer">IRS Topic No. 453 on bad debt deductions</a>, business bad debts can be deducted in full or in part when they become worthless, the deduction is taken in the year the debt becomes worthless, and you must have included the amount owed in gross income in the current or a prior year. That last rule means cash-basis businesses generally cannot deduct unpaid fees they never reported as income.</p>

<p>In practice, accrual-basis businesses deduct actual write-offs on the tax return and add back changes in the book allowance. The timing difference is normal. Talk to a tax professional before claiming a deduction.</p>

<h2>Preventing doubtful accounts in the first place</h2>

<p>The cheapest bad debt is the one that never happens. Practical steps:</p>

<ul>
<li><strong>Set clear terms on every invoice.</strong> State the due date, accepted payment methods and late fee policy. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> has wording you can use.</li>
<li><strong>Take deposits on large projects</strong> so your exposure is limited if a client walks away.</li>
<li><strong>Follow up early.</strong> Collection rates drop as invoices age, which is why older aging buckets carry higher loss rates. See our <a href="/blog/overdue-invoice">overdue invoice guide</a> and our broader guide to <a href="/blog/invoice-collections">invoice collections</a>.</li>
<li><strong>Escalate in stages.</strong> A firm, documented sequence of reminders supports both recovery and any eventual write-off. Our sibling guide on writing a <a href="/blog/demand-letter-for-payment">demand letter for payment</a> covers the final step before legal action.</li>
<li><strong>Review credit limits</strong> for clients whose payments are slowing.</li>
</ul>

<h2>Create invoices that get paid</h2>

<p>An allowance for doubtful accounts protects your financial statements, but clear invoices protect your cash. Use the <a href="/invoice-generator">invoice generator</a> to create professional invoices with due dates, payment terms and unique numbers from the <a href="/tools/invoice-number-generator">invoice number generator</a>, so every receivable is easy to track, chase and, if it ever comes to it, document. Download the result as a PDF invoice you can email, print or upload to a client portal.</p>
`,
  },
  {
    slug: "amortization-vs-depreciation",
    title: "Amortization vs Depreciation: Key Differences With Examples",
    description:
      "Amortization vs depreciation explained: which assets each applies to, methods, journal entries, tax rules like Section 197, and a worked example that balances.",
    category: "comparisons",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "fixed-asset-register",
      "how-to-calculate-depreciation",
      "section-179-vs-bonus-depreciation",
      "balance-sheet-small-business",
      "journal-entries",
    ],
    faqs: [
      {
        q: "What is the main difference between amortization and depreciation?",
        a: "Depreciation spreads the cost of tangible assets, such as equipment, vehicles, furniture and buildings, over their useful lives. Amortization spreads the cost of intangible assets, such as patents, customer lists, software licenses and purchased goodwill, over their useful lives. Both are non-cash expenses that reduce profit gradually instead of all at once. The main practical differences are the type of asset, salvage value and the methods normally used.",
      },
      {
        q: "Is amortization the same as depreciation?",
        a: "They follow the same idea, allocating an asset's cost over the period it helps earn revenue, but they are not the same term. Depreciation is used for physical assets and amortization for intangible ones. Amortization is usually straight-line with no salvage value, while depreciation can use straight-line, declining balance or units of production methods and often allows for a residual value at the end of the asset's life.",
      },
      {
        q: "What assets are amortized?",
        a: "Intangible assets with a finite useful life are amortized. Common examples include patents, copyrights, trademarks with a set term, franchise agreements, purchased customer lists, non-compete agreements and acquired software licenses. For US tax purposes, section 197 intangibles bought as part of acquiring a business, including goodwill, are generally amortized over 15 years. Intangibles with an indefinite life are usually tested for impairment instead.",
      },
      {
        q: "Is goodwill amortized or depreciated?",
        a: "Goodwill is never depreciated, because it is not a physical asset. Under US GAAP, public companies do not amortize goodwill; they test it for impairment. Private companies can elect an accounting alternative to amortize goodwill on a straight-line basis over 10 years or less. IFRS does not allow goodwill amortization. For US federal tax, purchased goodwill is a section 197 intangible generally amortized over 15 years.",
      },
      {
        q: "Is land depreciated?",
        a: "No. Land is a tangible asset, but it is not considered to wear out or be used up, so it is not depreciated for book or tax purposes. When you buy property, you must split the purchase price between the land and the building. Only the building portion, and land improvements such as fences, driveways or landscaping where allowed, can be depreciated over the applicable recovery period.",
      },
      {
        q: "Where do depreciation and amortization appear on financial statements?",
        a: "On the income statement, they appear as expenses, either as separate lines or combined as depreciation and amortization. On the balance sheet, the asset is shown at cost minus accumulated depreciation or accumulated amortization, giving its carrying amount. On the cash flow statement, they are added back to net income in the operating section, because they reduce profit without using cash in that period.",
      },
      {
        q: "What is the journal entry for amortization?",
        a: "Debit amortization expense and credit accumulated amortization, or credit the intangible asset directly, which some businesses do. For a $30,000 customer list with a five-year useful life and no residual value, the annual entry is a $6,000 debit to amortization expense and a $6,000 credit to accumulated amortization. After one year, the carrying amount is $24,000. The entry for depreciation follows the same pattern.",
      },
      {
        q: "Why does amortization also refer to loans?",
        a: "The word has two common meanings. In asset accounting, amortization spreads the cost of an intangible asset over time. In lending, an amortization schedule shows how each loan payment is split between interest and principal until the balance reaches zero. Loan amortization does not create an expense for the principal portion; only the interest is an expense. The context usually makes clear which meaning is intended.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Amortization vs depreciation comes down to the type of asset. Depreciation spreads the cost of tangible assets, like equipment and vehicles, over their useful lives. Amortization does the same for intangible assets, like patents, software licenses and customer lists. Both are non-cash expenses; amortization is usually straight-line with no salvage value.</p>

<p>If you have bought a laptop, a van or the client list of a retiring competitor, you have assets whose cost should be spread over the years they help your business earn money. Understanding amortization vs depreciation helps you record those costs correctly, read your financial statements, and talk to your accountant about tax deductions. This guide compares the two side by side, explains the methods and tax rules, and works through an example with journal entries that balance. For the mechanics of the depreciation side, see our guide on <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a>.</p>

<p>On scope: the <a href="/invoice-generator">free invoice generator</a> on this site creates PDF invoices but does not keep fixed asset registers. You will record these entries in your accounting software or with your accountant. This article is general information, not tax or accounting advice.</p>

<h2>What is depreciation?</h2>

<p>Depreciation allocates the cost of a tangible, long-lived asset over its useful life. The IRS describes depreciation in <a href="https://www.irs.gov/publications/p946" target="_blank" rel="noopener noreferrer">Publication 946, How to Depreciate Property</a> as an annual deduction that lets you recover the cost or other basis of certain property. To be depreciable for tax, property generally must be owned by you, used in your business or income-producing activity, have a determinable useful life, and be expected to last more than one year.</p>

<p>Typical depreciable assets include computers, machinery, vehicles, office furniture, tools and buildings. Land is not depreciated, because it does not wear out.</p>

<p>The point of depreciation is matching. A $12,000 piece of equipment used for five years helps generate revenue in each of those years, so charging the whole cost to the year of purchase would make that year look unusually poor and the next four look unusually good. Spreading the cost gives a fairer picture of profit in every year, which is what lenders, buyers and you as the owner actually need when judging how the business is performing.</p>

<h2>What is amortization?</h2>

<p>Amortization allocates the cost of an intangible asset over its useful life. Intangibles have no physical form but still provide value over several years: think patents, copyrights, licenses, franchise rights, non-compete agreements, purchased customer lists and acquired software.</p>

<p>For accounting purposes, intangibles with a finite useful life are amortized, usually on a straight-line basis, and with no residual value in most cases. Intangibles with an indefinite useful life, and goodwill for most companies, are not amortized but are tested for impairment instead. Under IFRS, the equivalent rules sit in IAS 38 for intangibles and IAS 16 for property, plant and equipment.</p>

<h2>Amortization vs depreciation: side-by-side comparison</h2>

<table>
<thead><tr><th>Feature</th><th>Depreciation</th><th>Amortization</th></tr></thead>
<tbody>
<tr><td>Asset type</td><td>Tangible: equipment, vehicles, buildings, furniture</td><td>Intangible: patents, licenses, customer lists, goodwill (in some cases)</td></tr>
<tr><td>Common methods</td><td>Straight-line, declining balance, units of production</td><td>Mostly straight-line</td></tr>
<tr><td>Salvage or residual value</td><td>Often estimated</td><td>Usually zero</td></tr>
<tr><td>Contra account</td><td>Accumulated depreciation</td><td>Accumulated amortization (or a direct credit to the asset)</td></tr>
<tr><td>US tax system</td><td>MACRS recovery periods, with Section 179 and bonus options</td><td>Section 197 intangibles generally over 15 years</td></tr>
<tr><td>Tax form (US)</td><td>Form 4562</td><td>Form 4562</td></tr>
<tr><td>Cash effect in the year</td><td>None (non-cash expense)</td><td>None (non-cash expense)</td></tr>
<tr><td>Not applied to</td><td>Land</td><td>Indefinite-life intangibles; goodwill for public companies under US GAAP</td></tr>
</tbody>
</table>

<h2>Methods: how each is calculated</h2>

<h3>Straight-line (both)</h3>

<p><strong>Annual expense = (Cost minus Salvage value) divided by Useful life</strong></p>

<p>This is the default for amortization and the most common method for small business depreciation, because it is simple and gives the same expense each year.</p>

<h3>Declining balance (depreciation)</h3>

<p>Accelerated methods charge more expense in early years. Double-declining balance applies twice the straight-line rate to the remaining book value each year. For a five-year asset, the straight-line rate is 20%, so the double-declining rate is 40%. On a $12,000 asset, year one depreciation would be $4,800, leaving a book value of $7,200.</p>

<h3>Units of production (depreciation)</h3>

<p>Expense follows usage, such as miles driven or units produced. It suits vehicles and machines whose wear depends on activity rather than time.</p>

<h3>Choosing a useful life</h3>

<p>For your books, useful life is a judgment about how long the asset will actually serve your business, not how long it could physically last. A laptop may work for eight years, but if you replace laptops every four, four years is the better estimate. For intangibles, look at legal or contractual limits first: a license that expires in three years cannot have a five-year life. For a purchased customer list, consider how quickly clients typically leave; if most of the acquired clients will be gone within five years, a five-year life is reasonable.</p>

<p>For tax, you do not choose freely. Depreciable property follows the recovery periods set out by the IRS, and acquired section 197 intangibles follow the fixed 15-year period. That is the main reason book and tax schedules diverge, and why keeping both is normal rather than a sign of error.</p>

<h2>How to record depreciation and amortization</h2>

<ol>
<li><strong>Capitalize the asset.</strong> Record the purchase as an asset, not an expense, if it has a useful life of more than a year and is above your capitalization threshold.</li>
<li><strong>Classify it.</strong> Decide whether it is tangible (depreciate) or intangible (amortize), and whether an intangible has a finite life.</li>
<li><strong>Estimate useful life and residual value.</strong> Base the book life on how long the asset will realistically serve the business.</li>
<li><strong>Choose a method.</strong> Straight-line for most intangibles; straight-line or accelerated for equipment.</li>
<li><strong>Post the periodic entry.</strong> Debit the expense and credit the accumulated account monthly or annually.</li>
<li><strong>Track tax separately.</strong> Tax rules can differ from book rules, so keep a separate tax schedule or let your accountant maintain one.</li>
<li><strong>Review for impairment</strong> if an asset's value drops sharply, for example when software is abandoned or a customer list loses key clients.</li>
</ol>

<h2>Worked example: equipment and a purchased customer list</h2>

<p>A bookkeeping firm makes two purchases at the start of the year:</p>

<ul>
<li><strong>Office equipment</strong> (servers and scanners) for $12,000, expected to last five years with a $2,000 salvage value.</li>
<li><strong>A customer list</strong> bought from a retiring bookkeeper for $30,000, expected to generate client revenue for five years with no residual value.</li>
</ul>

<h3>Depreciation of the equipment</h3>

<p>Straight-line: ($12,000 minus $2,000) divided by 5 = $2,000 per year.</p>

<table>
<thead><tr><th>Year</th><th>Depreciation expense</th><th>Accumulated depreciation</th><th>Book value at year end</th></tr></thead>
<tbody>
<tr><td>1</td><td>$2,000</td><td>$2,000</td><td>$10,000</td></tr>
<tr><td>2</td><td>$2,000</td><td>$4,000</td><td>$8,000</td></tr>
<tr><td>3</td><td>$2,000</td><td>$6,000</td><td>$6,000</td></tr>
<tr><td>4</td><td>$2,000</td><td>$8,000</td><td>$4,000</td></tr>
<tr><td>5</td><td>$2,000</td><td>$10,000</td><td>$2,000</td></tr>
</tbody>
</table>

<p>After five years, the book value equals the $2,000 salvage value, exactly as planned.</p>

<h3>Amortization of the customer list</h3>

<p>Straight-line: $30,000 divided by 5 = $6,000 per year, with no salvage value.</p>

<h3>Year-end journal entry</h3>

<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Depreciation expense</td><td>$2,000</td><td></td></tr>
<tr><td>Accumulated depreciation: equipment</td><td></td><td>$2,000</td></tr>
<tr><td>Amortization expense</td><td>$6,000</td><td></td></tr>
<tr><td>Accumulated amortization: customer list</td><td></td><td>$6,000</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$8,000</strong></td><td><strong>$8,000</strong></td></tr>
</tbody>
</table>

<p>After year one, the balance sheet shows equipment at $12,000 minus $2,000 = $10,000 and the customer list at $30,000 minus $6,000 = $24,000, a combined carrying amount of $34,000. The income statement shows $8,000 of non-cash expense. Our <a href="/blog/debits-and-credits">debits and credits cheat sheet</a> explains why accumulated accounts carry credit balances.</p>

<h3>Selling the equipment early</h3>

<p>Suppose the firm sells the equipment at the end of year three for $5,000. From the schedule, accumulated depreciation is $6,000 and book value is $12,000 minus $6,000 = $6,000. Selling for $5,000 produces a $1,000 loss on disposal. The entry removes both the cost and the accumulated depreciation:</p>

<table>
<thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Cash</td><td>$5,000</td><td></td></tr>
<tr><td>Accumulated depreciation: equipment</td><td>$6,000</td><td></td></tr>
<tr><td>Loss on disposal of equipment</td><td>$1,000</td><td></td></tr>
<tr><td>Equipment</td><td></td><td>$12,000</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$12,000</strong></td><td><strong>$12,000</strong></td></tr>
</tbody>
</table>

<p>If the sale price had been $7,500 instead, the firm would record a $1,500 gain (a credit) rather than a loss. Remember to issue the buyer an invoice for the sale and charge sales tax where your state requires it; the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps with the figures.</p>

<h3>The tax view is different</h3>

<p>For US federal tax, a customer list acquired as part of buying a business is generally a section 197 intangible. The IRS guidance on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/intangibles" target="_blank" rel="noopener noreferrer">amortizing intangibles</a> says you must generally amortize the capitalized costs of section 197 intangibles over 15 years. So the same $30,000 list would produce $2,000 a year of tax amortization ($30,000 divided by 15), versus $6,000 a year on the books. The equipment, meanwhile, may qualify for faster tax write-offs; our comparison of <a href="/blog/section-179-vs-bonus-depreciation">Section 179 vs bonus depreciation</a> explains those options. Book and tax differences like these are normal; your accountant tracks them separately.</p>

<h2>Where they show up in your financial statements</h2>

<ul>
<li><strong>Income statement:</strong> depreciation and amortization appear as expenses, reducing operating profit. Our sibling comparison of the <a href="/blog/income-statement-vs-balance-sheet">income statement vs balance sheet</a> explains how the two reports connect.</li>
<li><strong>Balance sheet:</strong> assets appear at cost minus accumulated depreciation or amortization. See our <a href="/blog/balance-sheet-small-business">small business balance sheet guide</a>.</li>
<li><strong>Cash flow statement:</strong> both are added back to net income in operating activities, because no cash left the business when the expense was recorded. The cash left when the asset was bought, which shows under investing activities. Our <a href="/blog/cash-flow-statement">cash flow statement guide</a> walks through the add-back.</li>
</ul>

<p>Because both expenses are non-cash, lenders often look at EBITDA (earnings before interest, taxes, depreciation and amortization) as a rough proxy for operating cash flow. They also reduce reported profit, which affects measures such as net margin; see our sibling guide on <a href="/blog/how-to-calculate-profit-margin">how to calculate profit margin</a>.</p>

<h2>Goodwill, software and other special cases</h2>

<table>
<thead><tr><th>Item</th><th>Book treatment (typical)</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Goodwill (public company, US GAAP)</td><td>Not amortized; impairment testing</td><td>IFRS also prohibits goodwill amortization</td></tr>
<tr><td>Goodwill (private company, US GAAP)</td><td>May elect to amortize straight-line over 10 years or less</td><td>Election under the private company accounting alternative</td></tr>
<tr><td>Purchased software license</td><td>Amortized over expected use</td><td>Subscriptions (SaaS) are usually just operating expenses</td></tr>
<tr><td>Trademark with indefinite life</td><td>Not amortized; impairment testing</td><td>Amortize if the useful life becomes finite</td></tr>
<tr><td>Building</td><td>Depreciated</td><td>Split purchase price between land and building first</td></tr>
<tr><td>Leasehold improvements</td><td>Depreciated (often called amortized) over the shorter of life or lease term</td><td>Terminology varies; the mechanics are the same</td></tr>
</tbody>
</table>

<p>A final note on the word itself: "amortization" also describes paying down a loan in scheduled installments. Loan amortization splits each payment between interest (an expense) and principal (a reduction of the liability). It is a different concept from amortizing an intangible asset, even though the word is the same.</p>

<h2>Common mistakes to avoid</h2>

<ul>
<li><strong>Expensing a multi-year asset immediately on the books</strong> without a capitalization policy, which distorts profit between years.</li>
<li><strong>Depreciating land</strong> or forgetting to split a property price between land and building.</li>
<li><strong>Assuming book and tax lives match.</strong> They often do not, especially for section 197 intangibles.</li>
<li><strong>Treating software subscriptions as intangible assets.</strong> Monthly SaaS fees are normally ordinary expenses; group them correctly using a clear set of <a href="/blog/business-expense-categories">business expense categories</a>.</li>
<li><strong>Forgetting the asset when it is sold or retired.</strong> Remove both the cost and the accumulated balance, and record any gain or loss.</li>
</ul>

<h2>Keep the paper trail for every asset</h2>

<p>Whether an asset is depreciated or amortized, the starting point is the same: a clear purchase record showing the date, description, cost and seller. Keep supplier invoices with your fixed asset register, and when you sell equipment or services yourself, issue clean, numbered invoices with the <a href="/invoice-generator">invoice generator</a>. Choose a layout from our <a href="/invoice-templates">invoice templates</a>, and your records will be ready for your accountant at year end. Every invoice exports as a PDF, so it looks the same on your client's phone, laptop or printer.</p>
`,
  },
];
