import type { PostDraft } from "../blog";

export const COMPARISONS_2026_B_POSTS: PostDraft[] = [
  {
    slug: "purchase-invoice-vs-sales-invoice",
    title: "Purchase Invoice vs Sales Invoice: Differences and Examples",
    description:
      "Purchase invoice vs sales invoice explained: who issues each, how they hit payables and receivables, a worked example and a checklist for recording both.",
    category: "comparisons",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "what-is-a-sales-invoice",
      "invoice-vs-bill",
      "accounts-payable-vs-accounts-receivable",
    ],
    faqs: [
      {
        q: "What is the main difference between a purchase invoice and a sales invoice?",
        a: "It is the same kind of document seen from opposite sides of a transaction. The seller issues a sales invoice to request payment, and records it as revenue and an amount receivable. The buyer receives that document and records it as a purchase invoice, which becomes an expense or asset and an amount payable. One transaction, one document, two different entries in two sets of books.",
      },
      {
        q: "Who issues a purchase invoice?",
        a: "In normal usage the supplier issues it. The buyer simply calls it a purchase invoice because it records a purchase. The main exception is self-billing, where the buyer prepares the invoice on the supplier's behalf under a written agreement, which is common in some industries such as haulage, construction and agriculture. Some software also uses purchase invoice to mean the buyer's internal record of a supplier bill.",
      },
      {
        q: "Is a purchase invoice the same as a bill?",
        a: "Practically, yes. Many accounting apps label incoming supplier invoices as bills and outgoing customer invoices as invoices, so a purchase invoice and a bill usually refer to the same thing. The difference is mostly vocabulary. What matters is that the buyer records it in accounts payable, checks it against what was ordered and received, and pays it by the due date.",
      },
      {
        q: "Is a purchase invoice a debit or a credit?",
        a: "In double-entry bookkeeping a purchase invoice normally debits an expense, inventory or asset account and credits accounts payable, because the business now owes the supplier. A sales invoice does the reverse on the seller's side: it debits accounts receivable and credits sales revenue. Any sales tax or VAT is posted to its own tax account rather than to revenue or expense.",
      },
      {
        q: "Is a purchase order the same as a purchase invoice?",
        a: "No. A purchase order is sent by the buyer before delivery to say what it wants to buy, at what price and on what terms. A purchase invoice arrives from the supplier after goods or services have been delivered and asks for payment. Buyers often match the two, along with a delivery or receiving record, before approving the invoice for payment.",
      },
      {
        q: "Do I need to keep purchase invoices for tax purposes?",
        a: "Generally yes. Purchase invoices support the expenses you deduct and, in VAT or GST systems, usually the input tax you reclaim. Tax authorities expect you to keep them for a set period, which differs by country and by situation. In the US the IRS ties retention to the period in which a return can be examined, often three years but sometimes longer. Check the rules where you file.",
      },
      {
        q: "Can the same invoice number appear on a purchase invoice and a sales invoice?",
        a: "Yes, because they come from different businesses. Your sales invoices follow your own numbering sequence. A purchase invoice carries the supplier's number, not yours. Many buyers also assign an internal reference to each incoming bill so they can track it, but they should keep the supplier's invoice number on file because that is what the supplier will quote when chasing payment.",
      },
      {
        q: "What should I check before paying a purchase invoice?",
        a: "Confirm the supplier is genuine and the bank details match what you have on file, that the goods or services were actually received, that quantities and prices match the purchase order or quote, that tax is calculated correctly, and that the invoice has not already been paid. These checks catch most duplicate payments and invoice fraud attempts before money leaves the account.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the purchase invoice vs sales invoice comparison, the document is the same but the viewpoint differs. A sales invoice is issued by the seller and recorded as revenue and accounts receivable. A purchase invoice is that same invoice in the buyer's books, recorded as an expense or asset and accounts payable.</p>

<p>Small business owners run into both every week. You send invoices to customers, and suppliers send invoices to you. Because the same piece of paper (or PDF) plays a different role depending on which side of the deal you are on, the terms get mixed up in conversation, in software menus and even in some online guides. This article lays out the difference clearly, with a side-by-side table, a worked example showing how one transaction lands in two sets of books, a checklist for handling each type and the mistakes that cause the most trouble.</p>

<p>If you mainly want to understand the document you send to customers, our guide to <a href="/blog/what-is-a-sales-invoice">what a sales invoice includes</a> covers its fields in detail. Here we focus on how the two sides compare.</p>

<h2>Purchase invoice vs sales invoice: the core difference</h2>
<p>An invoice is a request for payment. It lists what was supplied, the price, any tax and the payment terms. Who calls it what depends on the direction of the money:</p>
<ul>
<li><strong>Sales invoice (outgoing):</strong> you supplied goods or services and you are asking a customer to pay. It increases your revenue and the money owed to you.</li>
<li><strong>Purchase invoice (incoming):</strong> a supplier delivered something to you and is asking you to pay. It increases your expenses or assets and the money you owe.</li>
</ul>
<p>So when a print shop sends a bakery an invoice for menus, the print shop files it as a sales invoice and the bakery files the very same document as a purchase invoice. Nothing about the content changes; only the accounting treatment does.</p>
<p>A lot of software sidesteps the confusion by calling incoming documents "bills." If you have read our explainer on <a href="/blog/invoice-vs-bill">the difference between an invoice and a bill</a>, you will recognize the pattern: a purchase invoice and a supplier bill are, for most purposes, the same thing.</p>

<h3>Who issues a purchase invoice?</h3>
<p>This is where online sources disagree. In standard usage the supplier issues the invoice and the buyer records it as a purchase invoice. The buyer does not create anything new; it receives, checks and posts the supplier's document.</p>
<p>There is one genuine exception. Under a <a href="/blog/self-billing-invoice">self-billing arrangement</a>, the customer prepares the invoice on the supplier's behalf, usually because the customer knows the final quantities or rates first. Even then, the document is a sales invoice for the supplier and a purchase invoice for the customer. Self-billing normally requires a written agreement, and in VAT countries it comes with extra rules, so do not start doing it informally.</p>

<h2>Purchase invoice vs sales invoice: side-by-side table</h2>
<table>
<thead>
<tr><th>Feature</th><th>Sales invoice</th><th>Purchase invoice</th></tr>
</thead>
<tbody>
<tr><td>Direction</td><td>Outgoing, sent to a customer</td><td>Incoming, received from a supplier</td></tr>
<tr><td>Created by</td><td>You, the seller</td><td>The supplier (or you, under self-billing)</td></tr>
<tr><td>Ledger affected</td><td>Accounts receivable</td><td>Accounts payable</td></tr>
<tr><td>Profit and loss effect</td><td>Increases revenue</td><td>Increases expenses or cost of sales (or an asset, for equipment)</td></tr>
<tr><td>Typical double entry</td><td>Debit receivables, credit sales</td><td>Debit expense or inventory, credit payables</td></tr>
<tr><td>Invoice number</td><td>Your own sequential number</td><td>The supplier's number, plus your internal reference</td></tr>
<tr><td>Sales tax or VAT</td><td>Output tax you collect and pay over</td><td>Input tax you may be able to reclaim (VAT/GST systems)</td></tr>
<tr><td>Key check before posting</td><td>Correct customer, prices and tax</td><td>Matches the order and what was received</td></tr>
<tr><td>Cash effect when settled</td><td>Money comes in</td><td>Money goes out</td></tr>
<tr><td>Main risk</td><td>Late payment by the customer</td><td>Duplicate payment or fraud</td></tr>
</tbody>
</table>

<h2>How each one flows through your books</h2>
<p>The clearest way to see the difference is to follow the ledgers. Sales invoices feed accounts receivable, the running total of what customers owe you. Purchase invoices feed accounts payable, the running total of what you owe suppliers. Our comparison of <a href="/blog/accounts-payable-vs-accounts-receivable">accounts payable and accounts receivable</a> explains how those two balances behave and how to manage each.</p>

<h3>The sales side</h3>
<p>When you issue a sales invoice under accrual accounting, you recognize revenue at that point, even though no cash has arrived. Receivables go up. When the customer pays, cash goes up and receivables go down by the same amount. Revenue is not touched again.</p>

<h3>The purchase side</h3>
<p>When a supplier's invoice arrives, you record the cost and a liability to pay it. If the purchase is something you consume quickly, such as fuel or software, it is an expense. If it is stock for resale, it goes to inventory first. If it is a long-lived item such as a machine, it may be capitalized as an asset and depreciated. When you pay, cash goes down and payables go down.</p>
<p>The exact postings are covered in our guide to <a href="/blog/journal-entries">writing journal entries</a>, but the pattern is always a mirror image of the sales side.</p>

<h2>Worked example: purchase invoice vs sales invoice for one sale</h2>
<p>Here is an illustrative example. The figures are made up to show the arithmetic.</p>
<p>Brightline Print sells 500 printed menus to Corner Bakery at $1.20 each, plus a $25 design fee. Sales tax applies at an illustrative 8% on the full amount.</p>
<ul>
<li>Menus: 500 × $1.20 = $600.00</li>
<li>Design fee: $25.00</li>
<li>Subtotal: $600.00 + $25.00 = $625.00</li>
<li>Sales tax: $625.00 × 0.08 = $50.00</li>
<li>Invoice total: $625.00 + $50.00 = $675.00</li>
</ul>
<p><strong>In Brightline's books (sales invoice):</strong></p>
<ul>
<li>Debit accounts receivable $675.00</li>
<li>Credit sales revenue $625.00</li>
<li>Credit sales tax payable $50.00</li>
</ul>
<p>Brightline's revenue rises by $625, not $675, because the $50 of tax belongs to the state and is only being collected on its behalf.</p>
<p><strong>In Corner Bakery's books (purchase invoice):</strong></p>
<ul>
<li>Debit printing and marketing expense $675.00 (in a US sales tax setting, the tax is usually part of the buyer's cost)</li>
<li>Credit accounts payable $675.00</li>
</ul>
<p>If the same deal happened under a VAT or GST system and the bakery were registered, it would typically post $625 to expense and $50 to an input tax account it can reclaim, subject to local rules.</p>
<p>When the bakery pays 30 days later, both sides clear their balances: Brightline debits cash $675 and credits receivables $675; Corner Bakery debits payables $675 and credits cash $675. The same $675 has moved from one business to another, and both ledgers agree.</p>

<h2>What each document should contain</h2>
<p>Because they are the same document, the required content is the same. A valid invoice usually shows:</p>
<ul>
<li>The seller's name, address and, where required, tax registration number</li>
<li>The buyer's name and address</li>
<li>A unique invoice number and the issue date</li>
<li>A description, quantity and unit price for each line</li>
<li>Subtotal, tax rate, tax amount and total due</li>
<li>Payment terms, due date and how to pay</li>
<li>Any purchase order number the buyer gave you</li>
</ul>
<p>As a seller, you control this content. You can build a clean sales invoice with our <a href="/invoice-generator">free invoice generator</a>, which creates a PDF in your browser, and use the <a href="/tools/invoice-number-generator">invoice number generator</a> to keep your numbering sequential. The generator does not track bills you receive or post anything to your books, so purchase invoices still need to go into your bookkeeping system or spreadsheet.</p>
<p>As a buyer, you do not control the content, but you can insist on it. If a supplier's invoice is missing a tax number, a PO reference or a clear description, ask for a corrected copy before you approve it.</p>

<h2>Purchase invoice vs purchase order</h2>
<p>A frequent mix-up is between a purchase invoice and a purchase order. The order comes first and goes from buyer to supplier; the invoice comes later and goes from supplier to buyer. Our guide to <a href="/blog/invoice-vs-purchase-order">invoices versus purchase orders</a> covers the full sequence. Larger buyers check every incoming invoice against the original order and a receiving record before paying, a control known as <a href="/blog/three-way-match">three-way matching</a>. Even a small business can borrow the idea: never pay an invoice until someone confirms the goods arrived or the work was done.</p>

<h2>Checklist for handling both types</h2>
<p><strong>For every sales invoice you send:</strong></p>
<ul>
<li>Use the next number in your sequence and today's date</li>
<li>Copy the customer's legal name and any PO number exactly</li>
<li>Itemize lines so the customer's team can match them to their order</li>
<li>Show tax separately and state the due date</li>
<li>Record it in receivables the day you send it</li>
<li>Follow up on or just after the due date</li>
</ul>
<p><strong>For every purchase invoice you receive:</strong></p>
<ul>
<li>Confirm the supplier is known and the invoice is not a duplicate</li>
<li>Match quantities and prices to the order or quote</li>
<li>Confirm delivery or completion with whoever received the goods</li>
<li>Check tax calculations and, in VAT systems, the supplier's registration number</li>
<li>Verify any change in bank details by phone using a number you already hold</li>
<li>Record it in payables with the supplier's invoice number and a due date</li>
<li>Store the file so you can find it at tax time</li>
</ul>

<h2>Common mistakes</h2>
<h3>Recording sales tax as revenue or ignoring reclaimable input tax</h3>
<p>Tax collected on a sales invoice is not income. Tax paid on a purchase invoice may be reclaimable under VAT or GST. Posting either to the wrong account distorts both profit and your tax return.</p>
<h3>Paying a purchase invoice twice</h3>
<p>Suppliers sometimes resend invoices as reminders, and the copy gets processed as a new bill. Always search payables for the supplier's invoice number before approving.</p>
<h3>Using the supplier's number as your own sequence</h3>
<p>Your sales numbering must be continuous and unique to you. A supplier's numbers belong in a reference field on the bill, not in your sales sequence.</p>
<h3>Treating every purchase as an expense</h3>
<p>Equipment and other long-lived assets bought on a purchase invoice may need to be capitalized rather than expensed in full, depending on the amount and local tax rules.</p>
<h3>Throwing away paper purchase invoices</h3>
<p>Purchase invoices support deductions and tax reclaims. Our guide on <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> covers retention periods, and the IRS explains why supporting documents matter on its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" target="_blank" rel="noopener noreferrer">recordkeeping page</a>.</p>

<h2>Which one do you need to create?</h2>
<p>You only ever create sales invoices, unless you have a formal self-billing agreement. Purchase invoices arrive from suppliers; your job is to check them, record them and pay them on time. Settling the purchase invoice vs sales invoice question in your own workflow comes down to two habits: issue clean, numbered sales invoices promptly, and run every incoming bill through the same short approval check.</p>
<p>For more explainers that put similar documents side by side, browse the <a href="/blog/category/comparisons">comparisons section</a> of the blog.</p>
`,
  },
  {
    slug: "gross-pay-vs-net-pay",
    title: "Gross Pay vs Net Pay: Meaning, Formula and Example",
    description:
      "Gross pay vs net pay explained with the formula, a worked paycheck example, common deductions and a checklist for reading payslips, plus tips for contractors.",
    category: "comparisons",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["salary-slip-format", "w2-vs-1099", "salary-increase-percentage"],
    faqs: [
      {
        q: "What is the difference between gross pay and net pay?",
        a: "Gross pay is the total an employee earns in a pay period before anything is taken out. Net pay is what actually reaches the bank account after deductions such as income tax withholding, Social Security and Medicare (in the US), retirement contributions and health insurance premiums. Gross pay is the headline figure in a job offer; net pay is the figure you budget with.",
      },
      {
        q: "What is the formula for net pay?",
        a: "Net pay equals gross pay minus all deductions. Deductions are usually split into pre-tax deductions, such as some retirement and health plan contributions, which reduce taxable wages; taxes, such as federal, state and local income tax withholding plus payroll taxes; and post-tax deductions, such as wage garnishments or certain voluntary contributions. Subtract all three groups from gross pay to get net pay.",
      },
      {
        q: "Is my salary gross or net?",
        a: "An annual salary quoted in a job offer or employment contract is almost always gross, meaning before tax and other deductions. To estimate gross pay per paycheck, divide the annual salary by the number of pay periods: 52 for weekly, 26 for biweekly, 24 for semimonthly and 12 for monthly. Your net pay per check will be lower once withholding and benefit deductions are applied.",
      },
      {
        q: "How do I calculate gross pay for hourly work?",
        a: "Multiply your regular hours by your hourly rate, then add any overtime hours multiplied by the overtime rate. In the US, nonexempt employees covered by federal law generally receive at least one and a half times their regular rate for hours over 40 in a workweek. Add bonuses, commissions or tips that count as wages for that period to arrive at total gross pay.",
      },
      {
        q: "What deductions come out of gross pay in the US?",
        a: "Common deductions are federal income tax withholding, Social Security tax at 6.2 percent up to an annual wage base, Medicare tax at 1.45 percent, state and sometimes local income tax, and voluntary deductions such as 401(k) contributions, health, dental and vision premiums, and flexible spending account contributions. Some employees also have court-ordered garnishments or union dues taken out.",
      },
      {
        q: "Do freelancers have gross pay and net pay?",
        a: "Not in the payroll sense. A freelancer or independent contractor invoices the full agreed fee, and clients usually pay that gross amount with no withholding, although some countries require clients to withhold tax on certain payments. The contractor then pays their own income tax and, in the US, self-employment tax. Setting money aside from each payment creates your own version of net pay.",
      },
      {
        q: "Why is my net pay different from one paycheck to the next?",
        a: "Changes in hours worked, overtime, bonuses, benefit elections, retirement contribution percentages or tax withholding settings all change net pay. In the US, Social Security tax stops once your wages for the year reach the annual wage base, so high earners may see net pay rise late in the year. A new year can also bring changes to tax brackets and benefit costs.",
      },
      {
        q: "Is gross pay used for loans and rental applications?",
        a: "Usually yes. Lenders and landlords often ask for gross monthly income because it is a consistent, comparable figure, and they apply their own ratios to it. Some also look at net pay to judge whether you can afford the payments. Have recent payslips ready, since they show both gross and net figures along with year-to-date totals.",
      },
      {
        q: "What does year-to-date mean on a payslip?",
        a: "Year-to-date, or YTD, shows cumulative totals from the start of the tax year up to the current paycheck. A payslip typically lists YTD gross pay, YTD taxes withheld and YTD deductions next to the current period's figures. YTD totals help you check withholding, track progress against annual limits such as retirement contribution caps, and reconcile your final wage statement at year end.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Gross pay vs net pay comes down to deductions. Gross pay is everything an employee earns in a pay period before anything is withheld. Net pay, or take-home pay, is what remains after income tax, payroll taxes, retirement contributions, insurance premiums and other deductions. The formula is simply gross pay minus total deductions equals net pay.</p>

<p>The gap between the two can be surprisingly large, which is why a salary that sounds generous on an offer letter can feel tighter once paychecks start arriving. Employers need to understand both figures to run payroll correctly, and employees need them to budget, compare job offers and check that their payslips are right. This guide explains each term, shows the formula, walks through a paycheck calculation step by step, and covers how the picture changes when you are a freelancer sending invoices rather than an employee on payroll.</p>

<h2>What is gross pay?</h2>
<p>Gross pay is the total compensation earned for a pay period before any deductions. It includes:</p>
<ul>
<li><strong>Salary or regular wages:</strong> the annual salary divided by the number of pay periods, or hours worked multiplied by the hourly rate.</li>
<li><strong>Overtime:</strong> extra hours at the overtime rate. Under US federal law, covered nonexempt employees generally earn at least 1.5 times their regular rate for hours over 40 in a workweek.</li>
<li><strong>Bonuses and commissions</strong> paid in that period.</li>
<li><strong>Tips</strong> reported to the employer, where applicable.</li>
<li><strong>Certain taxable fringe benefits</strong>, depending on local rules.</li>
</ul>
<p>Annual gross pay is the number you see in a job offer. Per-period gross pay is the annual figure divided by pay frequency: 52 for weekly, 26 for biweekly, 24 for semimonthly and 12 for monthly.</p>

<h2>What is net pay?</h2>
<p>Net pay is the amount deposited into the employee's bank account. It is gross pay after three broad groups of deductions:</p>
<ol>
<li><strong>Pre-tax deductions</strong> that lower taxable income, such as traditional 401(k) contributions or health premiums paid through a cafeteria plan.</li>
<li><strong>Taxes</strong>, including income tax withholding and payroll taxes. In the US, employees pay Social Security tax at 6.2% on wages up to an annual wage base and Medicare tax at 1.45% on all wages, plus an additional 0.9% Medicare tax on wages above $200,000 in a calendar year. The IRS lists these rates in <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer">Topic 751 on Social Security and Medicare withholding</a>.</li>
<li><strong>Post-tax deductions</strong>, such as Roth retirement contributions, garnishments, union dues or charitable payroll giving.</li>
</ol>
<p>Other countries have their own equivalents. In the UK, for example, income tax and National Insurance come out through PAYE; in Pakistan, employers withhold income tax on salary under the applicable slabs. The principle is identical everywhere: gross minus deductions equals net.</p>

<h2>Gross pay vs net pay: side-by-side comparison</h2>
<table>
<thead>
<tr><th>Feature</th><th>Gross pay</th><th>Net pay</th></tr>
</thead>
<tbody>
<tr><td>Definition</td><td>Total earnings before deductions</td><td>Earnings after all deductions</td></tr>
<tr><td>Also called</td><td>Gross wages, gross salary, pre-tax pay</td><td>Take-home pay, net salary</td></tr>
<tr><td>Where it appears</td><td>Job offers, contracts, top of a payslip</td><td>Bottom of a payslip, bank deposit</td></tr>
<tr><td>Formula</td><td>Rate × hours, or salary ÷ pay periods, plus extras</td><td>Gross pay − pre-tax deductions − taxes − post-tax deductions</td></tr>
<tr><td>Used for</td><td>Comparing offers, loan and rental applications, calculating taxes</td><td>Personal budgeting, checking deposits</td></tr>
<tr><td>Employer cost</td><td>Part of it; employer payroll taxes and benefits come on top</td><td>Only the portion the employee receives</td></tr>
<tr><td>Changes when</td><td>Rate, hours, overtime or bonuses change</td><td>Any of those change, or withholding and benefits change</td></tr>
</tbody>
</table>

<h2>The net pay formula, step by step</h2>
<p>The full calculation follows a fixed order, because pre-tax deductions reduce the wages that some taxes are calculated on:</p>
<ol>
<li>Calculate gross pay for the period.</li>
<li>Subtract pre-tax deductions to get taxable wages. (Note that some pre-tax deductions reduce income tax but not Social Security and Medicare; 401(k) deferrals are a common example.)</li>
<li>Calculate income tax withholding on taxable wages using the employee's withholding form and the current tables.</li>
<li>Calculate payroll taxes on the wages they apply to.</li>
<li>Subtract post-tax deductions.</li>
<li>What remains is net pay.</li>
</ol>

<h2>Worked example: a biweekly paycheck</h2>
<p>The following figures are illustrative. Real withholding depends on the employee's tax form, filing status, state and the current year's tables, so use payroll software or official calculators for actual payroll.</p>
<p>Maya earns a $62,400 annual salary, paid biweekly, with these deductions per paycheck: 5% traditional 401(k) contribution, $90 health premium (pre-tax), and an assumed $185 federal and $95 state income tax withholding.</p>
<p><strong>Step 1: gross pay</strong></p>
<ul>
<li>$62,400 ÷ 26 pay periods = $2,400.00 gross pay</li>
</ul>
<p><strong>Step 2: pre-tax deductions</strong></p>
<ul>
<li>401(k): $2,400.00 × 0.05 = $120.00</li>
<li>Health premium: $90.00</li>
<li>Total pre-tax: $120.00 + $90.00 = $210.00</li>
</ul>
<p><strong>Step 3: payroll taxes</strong></p>
<p>The health premium through a cafeteria plan reduces Social Security and Medicare wages; the 401(k) deferral does not. So FICA wages are $2,400.00 − $90.00 = $2,310.00.</p>
<ul>
<li>Social Security: $2,310.00 × 0.062 = $143.22</li>
<li>Medicare: $2,310.00 × 0.0145 = $33.50 (rounded)</li>
</ul>
<p><strong>Step 4: income tax withholding (assumed)</strong></p>
<ul>
<li>Federal: $185.00</li>
<li>State: $95.00</li>
</ul>
<p><strong>Step 5: net pay</strong></p>
<ul>
<li>Total deductions: $210.00 + $143.22 + $33.50 + $185.00 + $95.00 = $666.72</li>
<li>Net pay: $2,400.00 − $666.72 = $1,733.28</li>
</ul>
<p>In this illustration Maya takes home about 72% of her gross pay ($1,733.28 ÷ $2,400.00 ≈ 0.722). Her offer letter said $62,400, but her budget should be built on roughly $1,733 every two weeks.</p>
<p>If you want to see how these lines appear on an actual payslip, our <a href="/blog/salary-slip-format">salary slip format guide</a> shows a typical layout with earnings on one side and deductions on the other.</p>

<h2>Gross pay vs net pay for different pay frequencies</h2>
<p>The same annual salary produces different per-check figures depending on how often you are paid, which is a common source of confusion when people compare payslips. Using the illustrative $62,400 salary from the example:</p>
<ul>
<li>Weekly: $62,400 ÷ 52 = $1,200.00 gross per check</li>
<li>Biweekly: $62,400 ÷ 26 = $2,400.00 gross per check</li>
<li>Semimonthly: $62,400 ÷ 24 = $2,600.00 gross per check</li>
<li>Monthly: $62,400 ÷ 12 = $5,200.00 gross per check</li>
</ul>
<p>Biweekly and semimonthly sound alike but are not the same: biweekly means 26 paychecks a year, while semimonthly means 24. With biweekly pay, two months each year contain a third paycheck, which is useful to know when budgeting from net pay. For hourly workers, gross pay changes every period with hours worked, so the gross pay vs net pay gap moves too; tax withholding generally rises with higher gross pay in a given period.</p>

<h2>Why the difference matters</h2>
<h3>For employees</h3>
<p>Budget from net pay, not gross. Compare job offers on gross pay but also on benefits, because a higher salary with expensive health premiums can produce a lower net figure. When you negotiate a raise, remember that a percentage increase in gross does not translate one-for-one into net. Our guide to <a href="/blog/salary-increase-percentage">calculating a salary increase percentage</a> walks through the arithmetic.</p>
<h3>For employers</h3>
<p>The true cost of an employee is higher than gross pay, because employers pay their own share of payroll taxes (in the US, a matching 6.2% Social Security and 1.45% Medicare, plus federal and state unemployment taxes) and often benefit contributions. When pricing services or budgeting for a hire, use gross pay plus employer costs, not net pay.</p>

<h2>Gross and net for freelancers and contractors</h2>
<p>If you are self-employed, the payroll version of gross pay vs net pay does not apply in the same way. You invoice your client for the full fee and, in most cases, receive that full amount with nothing withheld. Our comparison of <a href="/blog/w2-vs-1099">W-2 employees and 1099 contractors</a> explains the distinction in US terms.</p>
<p>That means your invoice total is effectively your gross pay, and you are responsible for creating your own net figure by setting aside money for taxes. In the US that includes income tax and <a href="/blog/self-employment-tax">self-employment tax</a>, usually paid through <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated tax payments</a>. In some countries clients must deduct tax at source from certain payments; our article on <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a> covers how to show that.</p>
<p>Hourly contractors can track time with a <a href="/blog/timesheet-template">simple timesheet template</a> and turn it into a bill using the <a href="/invoice-generator">free invoice generator</a>, which builds a PDF invoice in your browser. It is not payroll software: it does not calculate withholding, run payslips or file taxes, so employers still need a payroll provider or accountant for staff wages.</p>

<h2>Checklist: reading a payslip</h2>
<ul>
<li>Pay period dates and pay date are correct</li>
<li>Hours, rate and overtime match your records</li>
<li>Gross pay equals rate × hours (or salary ÷ periods) plus extras</li>
<li>Pre-tax deductions match your benefit elections</li>
<li>Tax withholding reflects your current withholding form</li>
<li>Post-tax deductions are ones you authorized or were ordered</li>
<li>Net pay matches the amount deposited in your bank account</li>
<li>Year-to-date totals add up from the previous payslip</li>
</ul>

<h2>Common mistakes</h2>
<h3>Budgeting on gross pay</h3>
<p>The most common personal finance error is planning rent and spending around the salary figure rather than the deposit. Start from net pay and treat any refund at tax time as a bonus.</p>
<h3>Confusing net pay with taxable income</h3>
<p>Taxable wages sit between gross and net. Pre-tax deductions reduce them; post-tax deductions do not. Mixing them up leads to wrong tax estimates.</p>
<h3>Forgetting employer costs</h3>
<p>Small business owners often budget a new hire at their gross salary and are caught out by employer payroll taxes and benefits.</p>
<h3>Assuming every pre-tax deduction reduces all taxes</h3>
<p>As the example showed, a 401(k) deferral reduces income tax withholding but not Social Security and Medicare wages. Rules vary by deduction type, so check before you calculate by hand.</p>
<h3>Freelancers spending the whole invoice</h3>
<p>Treating every client payment as take-home money leaves nothing for the tax bill. Move a fixed percentage into a separate account each time an invoice is paid.</p>

<h2>Next steps</h2>
<p>Understanding gross pay vs net pay is ultimately about knowing which number to use for which decision. Use gross pay to compare offers and set rates, and net pay to plan your life. If you employ people, confirm current withholding rules with a payroll provider. If you bill clients directly, price your work so that the net amount after taxes and costs still meets your goals. For more articles on money management for small businesses and freelancers, see the <a href="/blog/category/business-finance">business finance section</a>.</p>
`,
  },
  {
    slug: "revenue-vs-profit",
    title: "Revenue vs Profit: Key Differences With Examples",
    description:
      "Revenue vs profit explained in plain English: formulas, a worked small business example, a comparison table and the mistakes that make busy firms look healthy.",
    category: "comparisons",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["gross-profit-vs-net-profit", "profit-and-loss-statement", "markup-vs-margin"],
    faqs: [
      {
        q: "What is the difference between revenue and profit?",
        a: "Revenue is the total money a business earns from selling its products or services before any costs are subtracted. Profit is what remains after costs are subtracted. Revenue tells you how much the business sold; profit tells you how much it kept. A company can have high revenue and little or no profit if its costs are close to, or higher than, its sales.",
      },
      {
        q: "Is revenue the same as sales?",
        a: "Often, but not always. For most small businesses, sales revenue and revenue mean the same thing: income from the main business activity. Some businesses also earn other revenue, such as interest, rental income or royalties, which is reported separately from sales. When people say revenue without qualification, they usually mean operating revenue from selling products or services.",
      },
      {
        q: "Is profit the same as income?",
        a: "It depends on the word that comes before income. Net income is another name for net profit, the bottom line after all expenses and taxes. Gross income can mean gross profit in a business context, or total earnings before deductions for an individual. Because the terms overlap, it is safer to say exactly which figure you mean: revenue, gross profit, operating profit or net profit.",
      },
      {
        q: "Can a company have revenue but no profit?",
        a: "Yes. Many businesses generate revenue while making a loss, especially in their early years, when they are investing heavily in growth, or when prices are too low to cover costs. Revenue minus expenses can be negative. That is why investors, lenders and owners look at profit margins, not just sales figures, when judging how healthy a business is.",
      },
      {
        q: "Which is more important, revenue or profit?",
        a: "Both matter, but profit determines whether a business can survive on its own. Revenue growth shows demand for what you sell, and a business needs enough revenue to cover its fixed costs. But revenue without profit has to be funded from savings, loans or investors. For most small businesses, sustainable profit and positive cash flow matter more than the size of the top line.",
      },
      {
        q: "Is sales tax part of revenue?",
        a: "Generally no. Sales tax, VAT or GST that you add to an invoice and collect from customers is held on behalf of the government and paid over to it. It is recorded as a liability, not as revenue. Your revenue is the net amount of the sale before tax. Including tax in revenue overstates sales and can cause errors on your tax returns.",
      },
      {
        q: "What is the formula for profit?",
        a: "The basic formula is profit equals revenue minus expenses. In more detail, gross profit equals revenue minus cost of goods sold; operating profit equals gross profit minus operating expenses; and net profit equals operating profit plus or minus other income and expenses, minus interest and income tax. Each level shows a different aspect of how efficiently the business turns sales into earnings.",
      },
      {
        q: "Is profit the same as cash in the bank?",
        a: "No. Under accrual accounting, revenue is recorded when you invoice, not when you are paid, so profit can include money customers still owe you. Loan repayments, equipment purchases and owner draws take cash without reducing profit in the same way. A profitable business can still run short of cash, which is why a cash flow statement or forecast should be reviewed alongside the profit figures.",
      },
      {
        q: "What is a good profit margin?",
        a: "There is no universal figure, because margins vary widely between industries. Service businesses with low direct costs often have higher margins than retailers, restaurants or construction firms. The most useful benchmarks are your own past results and figures for your specific industry from an accountant, trade association or lender, rather than a general rule that applies to every business.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The revenue vs profit difference is simple: revenue is the total money a business brings in from sales before any costs, while profit is what remains after costs are subtracted. Revenue is the top line of the income statement; net profit is the bottom line. High revenue does not guarantee any profit at all.</p>

<p>The two words get swapped in everyday conversation, but mixing them up leads to real decisions going wrong. An owner who celebrates record sales without checking costs may be growing a business that loses more money with every order. A freelancer who quotes a client based on what they want to earn, but forgets about software, taxes and unpaid admin time, ends up with far less profit than the invoice suggests.</p>
<p>This guide defines each term, shows the formulas, compares them side by side, works through a numeric example and lists the mistakes that most often blur the line between the two.</p>

<h2>What is revenue?</h2>
<p>Revenue is income earned from a business's normal activities, mainly selling goods or services, during a period. It is often called sales, turnover (especially in the UK) or the top line, because it sits at the top of the income statement.</p>
<p>The basic formula is:</p>
<ul>
<li><strong>Revenue = quantity sold × price</strong> (summed across all products and services)</li>
<li><strong>Net revenue = gross sales − returns − refunds − discounts and allowances</strong></li>
</ul>
<p>For a service business, revenue is usually the total of the invoices issued in the period, net of any sales tax. That last point matters: sales tax, VAT or GST you add to an invoice is collected for the government and is not your revenue. Our guide to <a href="/blog/sales-tax-on-invoices-us">showing sales tax on invoices</a> explains how to separate it on the document itself.</p>
<p>When revenue is recorded depends on your accounting method. Under the cash method, it counts when payment arrives. Under the accrual method, it counts when it is earned, typically when you invoice. Our comparison of <a href="/blog/cash-vs-accrual-accounting">cash and accrual accounting</a> covers the trade-offs, and prepayments for future work raise their own timing questions, covered in <a href="/blog/deferred-revenue-vs-accrued-revenue">deferred versus accrued revenue</a>.</p>

<h2>What is profit?</h2>
<p>Profit is revenue minus the costs of earning it. Because there are several layers of cost, there are several layers of profit:</p>
<ul>
<li><strong>Gross profit</strong> = revenue − cost of goods sold. It shows how much each sale contributes after direct costs. See our explainer on the <a href="/blog/cost-of-goods-sold">cost of goods sold</a> for what belongs in that line.</li>
<li><strong>Operating profit</strong> = gross profit − operating expenses such as rent, salaries, software and marketing. Our guide to <a href="/blog/operating-expenses">operating expenses</a> lists the usual categories.</li>
<li><strong>Net profit</strong> = operating profit ± other income and expenses − interest − income tax. This is the bottom line.</li>
</ul>
<p>For a deeper look at the first and last layers, read <a href="/blog/gross-profit-vs-net-profit">gross profit versus net profit</a>. This article stays focused on the bigger gap between the top line and any of those profit figures.</p>

<h2>Revenue vs profit: side-by-side comparison</h2>
<table>
<thead>
<tr><th>Feature</th><th>Revenue</th><th>Profit</th></tr>
</thead>
<tbody>
<tr><td>What it measures</td><td>Total sales earned</td><td>What is left after costs</td></tr>
<tr><td>Other names</td><td>Sales, turnover, top line</td><td>Earnings, net income, bottom line</td></tr>
<tr><td>Basic formula</td><td>Price × quantity sold</td><td>Revenue − expenses</td></tr>
<tr><td>Position on income statement</td><td>First line</td><td>Gross profit midway, net profit at the bottom</td></tr>
<tr><td>Can it be negative?</td><td>Not usually (it can be zero)</td><td>Yes, a negative profit is a loss</td></tr>
<tr><td>Main driver</td><td>Price, volume, sales and marketing</td><td>Revenue and cost control together</td></tr>
<tr><td>Shows</td><td>Market demand and scale</td><td>Efficiency and sustainability</td></tr>
<tr><td>Typical uses</td><td>Growth tracking, tax thresholds, sales targets</td><td>Owner pay, reinvestment, loan approval, valuation</td></tr>
</tbody>
</table>

<h2>Worked example: two businesses with very different results</h2>
<p>The figures below are illustrative. They show how two businesses can rank in opposite order depending on which number you look at.</p>
<p><strong>Business A: a busy online store</strong></p>
<ul>
<li>Revenue: $400,000</li>
<li>Cost of goods sold: $260,000</li>
<li>Gross profit: $400,000 − $260,000 = $140,000</li>
<li>Operating expenses (ads, shipping software, warehouse rent, staff): $122,000</li>
<li>Operating profit: $140,000 − $122,000 = $18,000</li>
<li>Interest on a stock loan: $6,000</li>
<li>Profit before tax: $18,000 − $6,000 = $12,000</li>
<li>Net margin: $12,000 ÷ $400,000 = 3%</li>
</ul>
<p><strong>Business B: a small bookkeeping practice</strong></p>
<ul>
<li>Revenue: $150,000</li>
<li>Cost of services (subcontracted bookkeeping hours): $30,000</li>
<li>Gross profit: $150,000 − $30,000 = $120,000</li>
<li>Operating expenses (software, office, insurance, marketing): $45,000</li>
<li>Operating profit: $120,000 − $45,000 = $75,000</li>
<li>Interest: $0</li>
<li>Profit before tax: $75,000</li>
<li>Net margin: $75,000 ÷ $150,000 = 50%</li>
</ul>
<p>Business A has more than two and a half times the revenue of Business B ($400,000 ÷ $150,000 ≈ 2.67), yet Business B produces more than six times the pre-tax profit ($75,000 ÷ $12,000 = 6.25). If the store's costs rose by just 3% of sales, its profit would disappear entirely. That is the practical meaning of revenue vs profit: size and success are different measures.</p>

<h3>What changes each figure</h3>
<p>Revenue goes up when you sell more units, raise prices or add products. Profit goes up when revenue rises faster than costs, when costs fall, or when you improve the mix toward higher-margin work. A price increase is unusually powerful because it raises revenue without raising most costs; a discount does the opposite. Our guide to <a href="/blog/markup-vs-margin">markup versus margin</a> shows how to price with a target margin in mind, and understanding which costs move with volume (covered in <a href="/blog/fixed-vs-variable-costs">fixed versus variable costs</a>) tells you how much extra profit each extra sale actually brings.</p>

<h2>Where revenue and profit show up</h2>
<p>Both appear on the income statement, also called the profit and loss statement. Revenue sits at the top, and each type of cost is subtracted on the way down to net profit. Our guide to the <a href="/blog/profit-and-loss-statement">profit and loss statement</a> includes a template layout you can copy.</p>
<p>Your invoices are the raw source of the revenue line. Every sale that never gets invoiced is revenue you earned but may never record or collect. The <a href="/invoice-generator">free invoice generator</a> helps you produce a clean PDF invoice for each job, with tax shown separately so the net revenue figure is easy to pick out. It does not keep books or calculate profit, so you will still total revenue and expenses in a spreadsheet or accounting software.</p>

<h2>Revenue vs profit for freelancers and service businesses</h2>
<p>Freelancers often think of their invoice totals as their income, but the same distinction applies. Suppose an illustrative freelance designer invoices $8,000 in a month. That is revenue. Against it sit software subscriptions, a coworking desk, stock assets, a subcontractor for one project and card processing fees, say $1,400 in total. Profit before tax is $8,000 − $1,400 = $6,600, and income tax and, in the US, self-employment tax still have to come out of that figure.</p>
<p>Two habits keep the picture honest. First, record expenses as carefully as you record invoices, so the profit figure is real rather than a guess. Second, look at profit per client or per project, not just revenue per client. A large client who demands constant revisions, pays late and needs extra subcontracted help can produce less profit than a smaller client who pays on time for clearly scoped work. When you set rates, start from the profit you need and work back to the revenue required, rather than the other way round.</p>

<h2>Why the difference matters for decisions</h2>
<ul>
<li><strong>Pricing:</strong> quoting based on revenue targets alone can lock you into work that does not cover your costs.</li>
<li><strong>Hiring:</strong> a new hire adds cost immediately but may take months to add revenue. Check that profit, not just sales, can absorb it.</li>
<li><strong>Growth:</strong> growing revenue at a loss means each new sale deepens the hole unless margins improve with scale.</li>
<li><strong>Owner pay:</strong> you pay yourself out of profit (and available cash), never out of revenue.</li>
<li><strong>Tax:</strong> income tax is based on taxable profit, while some thresholds, such as VAT registration in many countries, are based on revenue or turnover.</li>
</ul>
<p>The US Small Business Administration encourages owners to review their financial statements regularly; its guide to <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">managing business finances</a> is a useful starting point.</p>

<h2>Checklist: reviewing revenue and profit each month</h2>
<ul>
<li>Every completed job or delivery has been invoiced</li>
<li>Revenue is recorded net of sales tax, VAT or GST</li>
<li>Returns, refunds and discounts are deducted from gross sales</li>
<li>Cost of goods sold is matched to the sales it relates to</li>
<li>All operating expenses for the month are recorded, including subscriptions</li>
<li>Gross margin and net margin are calculated as percentages</li>
<li>Results are compared with last month and the same month last year</li>
<li>Profit is compared with actual cash movement to spot collection problems</li>
</ul>

<h2>Common mistakes</h2>
<h3>Treating revenue as money you can spend</h3>
<p>Revenue still has to cover suppliers, rent, wages and tax. Only the profit, and only the part that has actually been collected in cash, is available for the owner.</p>
<h3>Counting sales tax as revenue</h3>
<p>Tax collected on invoices belongs to the tax authority. Including it inflates revenue and makes margins look worse than they are.</p>
<h3>Ignoring your own time</h3>
<p>Sole owners often report a profit that is really an unpaid salary. If the business could not pay someone else to do your job and still show a profit, the economics may be weaker than they appear.</p>
<h3>Judging growth on revenue alone</h3>
<p>A rising top line with a shrinking margin is a warning sign, not a success story.</p>
<h3>Confusing profit with cash</h3>
<p>Profit can be locked up in unpaid invoices or inventory. Track receivables and cash alongside profit.</p>

<h2>Bottom line</h2>
<p>The revenue vs profit question is not about choosing one number over the other. Revenue tells you how much the market is willing to buy from you; profit tells you whether selling it is worth doing. Track both every month, and when they move in different directions, look at prices and costs first. For more side-by-side explainers, browse our <a href="/blog/category/comparisons">comparison articles</a>.</p>
`,
  },
  {
    slug: "fixed-vs-variable-costs",
    title: "Fixed vs Variable Costs: Examples and Why They Matter",
    description:
      "Fixed vs variable costs explained with examples by industry, a worked contribution margin calculation, a classification checklist and the mistakes to avoid.",
    category: "comparisons",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["break-even-point", "how-to-price-a-product", "small-business-budget"],
    faqs: [
      {
        q: "What is the difference between fixed and variable costs?",
        a: "Fixed costs stay the same in total regardless of how much you sell or produce within a normal range, such as rent, insurance and salaried staff. Variable costs rise and fall in direct proportion to activity, such as raw materials, packaging, shipping and payment processing fees. Fixed costs are paid even in a month with zero sales; variable costs largely disappear when activity stops.",
      },
      {
        q: "What are examples of fixed costs?",
        a: "Common fixed costs include rent or lease payments, business insurance, salaries for staff who are paid regardless of volume, loan repayments, software subscriptions billed at a flat rate, accounting and legal retainers, depreciation on equipment, and license or membership fees. These amounts do not change when you take on one more order, though they can change over time through renegotiation or growth.",
      },
      {
        q: "What are examples of variable costs?",
        a: "Typical variable costs are raw materials and inventory, packaging, shipping and delivery charges, sales commissions, card and payment processing fees, piece-rate or hourly labor tied to production, subcontractor costs per job, and usage-based charges such as fuel for deliveries. Each one increases when you sell or produce more and decreases when you sell or produce less.",
      },
      {
        q: "What is a semi-variable cost?",
        a: "A semi-variable, or mixed, cost has a fixed portion and a variable portion. A utility bill with a fixed monthly service charge plus a charge per unit of usage is the classic example. A phone plan with a base fee and overage charges, or staff with a base salary plus overtime, are others. For analysis, split each mixed cost into its fixed and variable parts.",
      },
      {
        q: "Is labor a fixed or variable cost?",
        a: "It depends on how people are paid. Salaried employees who are paid the same regardless of output are usually treated as a fixed cost. Hourly staff whose hours rise and fall with demand, piece-rate workers and per-job subcontractors behave more like variable costs. Overtime is variable. Many businesses have a mix, so look at how the cost actually behaves rather than the job title.",
      },
      {
        q: "Is marketing a fixed or variable cost?",
        a: "Marketing can be either. A flat monthly retainer to an agency or a fixed advertising budget is effectively fixed for the period. Pay-per-click advertising, affiliate commissions and marketplace fees that scale with sales are variable. Because marketing is discretionary, some analysts call it a discretionary fixed cost: you decide the amount in advance, and it does not automatically change with volume.",
      },
      {
        q: "Why do fixed and variable costs matter for pricing?",
        a: "Your price must at least cover the variable cost of each unit, or every sale loses money. The amount left over after variable costs, called contribution margin, then has to cover fixed costs before you make any profit. Knowing both lets you calculate a break-even point, judge whether a discount still makes sense, and decide whether a large order at a lower price is worth taking.",
      },
      {
        q: "Are fixed costs ever really fixed?",
        a: "Only within a relevant range of activity and a limited time period. If you double output, you may need a bigger workshop or another salaried manager, so fixed costs step up. Over a long enough period, leases end and contracts can be renegotiated. In practice, fixed means fixed for the current period and current capacity, which is enough for monthly budgeting and break-even analysis.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Fixed vs variable costs is about how a cost behaves when activity changes. Fixed costs, like rent and insurance, stay the same whether you sell one unit or a thousand. Variable costs, like materials, shipping and payment fees, rise and fall with each sale. Knowing which is which lets you price correctly and find your break-even point.</p>

<p>Every business owner eventually asks the same questions: How many sales do I need just to cover my costs? Can I afford to offer a discount? Should I take this big order at a lower price? The answers all depend on splitting costs into fixed and variable. This guide explains both types, gives examples for common kinds of small business, shows the contribution margin arithmetic with a worked example, and ends with a checklist and the mistakes that most often distort the numbers.</p>

<h2>What are fixed costs?</h2>
<p>Fixed costs stay constant in total over a period, regardless of sales volume, as long as the business stays within its current capacity. They are the cost of being open for business. Typical examples:</p>
<ul>
<li>Rent or lease payments for a shop, office or workshop</li>
<li>Insurance premiums</li>
<li>Salaries for staff paid regardless of output</li>
<li>Flat-rate software subscriptions and phone plans</li>
<li>Loan repayments and interest on fixed-term debt</li>
<li>Depreciation on equipment and vehicles</li>
<li>Accountant, bookkeeper or legal retainers</li>
<li>Licenses, permits and professional memberships</li>
</ul>
<p>Because fixed costs do not change with volume, the fixed cost per unit falls as you sell more. $3,000 of monthly rent is $30 per unit if you sell 100 units, but only $10 per unit at 300 units. That is the basic reason volume helps profitability.</p>

<h2>What are variable costs?</h2>
<p>Variable costs change in direct proportion to activity. If you sell nothing, they are close to zero; sell twice as much and they roughly double. Typical examples:</p>
<ul>
<li>Raw materials, ingredients and stock bought for resale</li>
<li>Packaging and labels</li>
<li>Shipping and delivery charges</li>
<li>Card processing and marketplace fees charged as a percentage of each sale</li>
<li>Sales commissions</li>
<li>Hourly or piece-rate labor that scales with production</li>
<li>Subcontractors paid per job</li>
<li>Fuel and mileage for delivery or site visits</li>
</ul>
<p>The variable cost per unit stays roughly constant, while the total rises with volume. For product businesses, most variable costs flow into <a href="/blog/cost-of-goods-sold">cost of goods sold</a>, though some, such as payment fees and shipping to customers, may be recorded as operating expenses.</p>

<h3>Semi-variable (mixed) costs</h3>
<p>Many real bills are a mix. An electricity bill may have a fixed daily standing charge plus a usage charge. A salesperson may receive a base salary plus commission. A delivery van has fixed insurance and lease costs plus variable fuel. For analysis, split each mixed cost into its fixed and variable parts rather than forcing it into one bucket.</p>
<h3>Step costs</h3>
<p>Some fixed costs stay flat until you hit a capacity limit and then jump. A café can serve a certain number of customers with two baristas; beyond that it needs a third. These step costs are fixed within a range but change when you grow past it, which is worth remembering when you plan for expansion.</p>

<h2>Fixed vs variable costs: comparison table</h2>
<table>
<thead>
<tr><th>Feature</th><th>Fixed costs</th><th>Variable costs</th></tr>
</thead>
<tbody>
<tr><td>Behavior as volume changes</td><td>Total stays the same</td><td>Total rises and falls with volume</td></tr>
<tr><td>Cost per unit</td><td>Falls as volume rises</td><td>Stays roughly constant</td></tr>
<tr><td>With zero sales</td><td>Still payable</td><td>Close to zero</td></tr>
<tr><td>Examples</td><td>Rent, insurance, salaries, subscriptions</td><td>Materials, shipping, commissions, payment fees</td></tr>
<tr><td>How to reduce</td><td>Renegotiate contracts, downsize, share space</td><td>Better supplier prices, less waste, efficient processes</td></tr>
<tr><td>Risk profile</td><td>Higher risk in a downturn</td><td>Flexes down with sales</td></tr>
<tr><td>Role in analysis</td><td>Must be covered by total contribution margin</td><td>Subtracted from price to find contribution margin</td></tr>
<tr><td>Budgeting</td><td>Predictable monthly amount</td><td>Forecast from expected sales volume</td></tr>
</tbody>
</table>

<h2>Examples by type of business</h2>
<table>
<thead>
<tr><th>Business</th><th>Mostly fixed</th><th>Mostly variable</th></tr>
</thead>
<tbody>
<tr><td>Freelance designer</td><td>Software subscriptions, computer depreciation, insurance, coworking desk</td><td>Stock images per project, subcontracted work, payment fees</td></tr>
<tr><td>Bakery</td><td>Lease, oven depreciation, salaried manager</td><td>Flour, butter, packaging, hourly bakers' extra shifts</td></tr>
<tr><td>Online store</td><td>Store platform plan, warehouse rent, salaried staff</td><td>Inventory, shipping, packaging, marketplace and card fees</td></tr>
<tr><td>Plumbing contractor</td><td>Van lease, insurance, licenses, office admin salary</td><td>Pipes and fittings, fuel, hourly helpers, disposal fees</td></tr>
</tbody>
</table>

<h2>Worked example: contribution margin and break-even</h2>
<p>The numbers below are illustrative. A small candle business sells candles at $24 each.</p>
<p><strong>Variable cost per candle</strong></p>
<ul>
<li>Wax, wick and fragrance: $5.50</li>
<li>Jar and label: $2.50</li>
<li>Packaging: $1.00</li>
<li>Payment processing (an assumed 3% of $24): $0.72</li>
<li>Total variable cost: $5.50 + $2.50 + $1.00 + $0.72 = $9.72</li>
</ul>
<p><strong>Contribution margin per candle</strong></p>
<ul>
<li>$24.00 − $9.72 = $14.28</li>
<li>Contribution margin ratio: $14.28 ÷ $24.00 = 59.5%</li>
</ul>
<p><strong>Monthly fixed costs</strong></p>
<ul>
<li>Studio rent: $1,200</li>
<li>Insurance: $150</li>
<li>Website and software: $90</li>
<li>Equipment depreciation: $60</li>
<li>Total fixed costs: $1,200 + $150 + $90 + $60 = $1,500</li>
</ul>
<p><strong>Break-even volume</strong></p>
<ul>
<li>$1,500 ÷ $14.28 = 105.04, so the business needs to sell 106 candles a month to cover all costs</li>
</ul>
<p><strong>Profit at 250 candles</strong></p>
<ul>
<li>Total contribution: 250 × $14.28 = $3,570</li>
<li>Profit before tax: $3,570 − $1,500 = $2,070</li>
</ul>
<p><strong>Testing a 15% discount</strong></p>
<ul>
<li>New price: $24.00 × 0.85 = $20.40</li>
<li>Payment fee falls to $20.40 × 0.03 = $0.61, so variable cost is $9.00 + $0.61 = $9.61</li>
<li>New contribution margin: $20.40 − $9.61 = $10.79</li>
<li>New break-even: $1,500 ÷ $10.79 = 139.02, so 140 candles</li>
</ul>
<p>A 15% price cut lowers the contribution per candle by about 24% ($14.28 to $10.79) and raises the break-even volume from 106 to 140 candles. That is why separating fixed vs variable costs is so useful before you run a sale. Our full guide to the <a href="/blog/break-even-point">break-even point</a> covers the formula in sales-dollar terms as well.</p>

<h2>Why fixed vs variable costs matter</h2>
<h3>Pricing</h3>
<p>Your price must cover variable cost per unit plus a share of fixed costs plus profit. Our guide on <a href="/blog/how-to-price-a-product">how to price a product</a> builds on exactly this split. For service work, the same logic applies to hourly rates: your rate has to cover the direct cost of each hour plus your overhead.</p>
<h3>Budgeting and cash planning</h3>
<p>Fixed costs give you a baseline you must fund every month. Variable costs can be forecast from expected sales. Put both into your <a href="/blog/small-business-budget">small business budget</a> and your <a href="/blog/cash-flow-forecast">cash flow forecast</a> so a slow month does not catch you out.</p>
<h3>Operating leverage and risk</h3>
<p>A business with high fixed costs and low variable costs, like a gym or software company, earns a lot from each extra sale once fixed costs are covered, but suffers more when sales fall. A business with mostly variable costs is more flexible but earns less from each extra unit. Neither is better; knowing your mix tells you how much risk you carry.</p>
<h3>Capital purchases</h3>
<p>Buying equipment usually adds fixed costs through depreciation and financing. Whether a purchase is treated as a capital item or a running expense affects how it shows up; see <a href="/blog/capex-vs-opex">CapEx vs OpEx</a> for that distinction.</p>

<h2>Fixed vs variable costs for service businesses</h2>
<p>Service businesses often assume the split only matters for companies that make products, but it is just as useful when you sell time. For a consultant, agency or trades business, the unit is usually a billable hour or a job rather than a physical item.</p>
<p>Variable costs per job might include subcontractor hours, travel, materials passed through to the client and payment processing fees. Fixed costs are everything you pay whether or not a client books you: insurance, software, phone, vehicle lease, office space and your own baseline salary. Divide monthly fixed costs by the number of hours you can realistically bill, not the hours you work, and you get the overhead each billable hour has to carry. Add the variable cost of the job and a profit margin, and you have a defensible rate.</p>
<p>This view also explains why quiet months hurt service businesses so much. When bookings drop, variable costs fall with them, but fixed costs keep arriving. Building a cash reserve equal to a few months of fixed costs is a common way to ride out those dips.</p>

<h2>Checklist: classifying your costs</h2>
<ul>
<li>Export the last three to six months of expenses from your books or bank</li>
<li>For each category, ask: would this change if sales doubled or halved?</li>
<li>Label each as fixed, variable or mixed</li>
<li>Split mixed costs into a fixed base and a variable rate</li>
<li>Calculate variable cost per unit (or per billable hour, or as a percentage of sales)</li>
<li>Total monthly fixed costs</li>
<li>Calculate contribution margin per unit and break-even volume</li>
<li>Review the split each quarter, and whenever you change suppliers, staffing or premises</li>
</ul>
<p>Accurate categories start with recording every expense consistently; our guide on <a href="/blog/how-to-track-business-expenses">tracking business expenses</a> covers simple systems that work.</p>

<h2>Common mistakes</h2>
<h3>Treating fixed cost per unit as constant</h3>
<p>Dividing last month's rent by last month's units and using that figure for every quote will overprice in busy months and underprice in quiet ones. Keep fixed costs as a monthly total.</p>
<h3>Forgetting percentage-based fees</h3>
<p>Payment processing, platform and marketplace fees are variable costs that are easy to miss. They can take a meaningful bite out of thin margins.</p>
<h3>Ignoring step changes</h3>
<p>Planning growth on the assumption that fixed costs will not move ignores the next hire, the bigger lease or the second van.</p>
<h3>Leaving the owner's time out</h3>
<p>If you do the work yourself, your own time is a real cost. Include a reasonable owner salary as a fixed cost when you calculate break-even, or the numbers will look better than they are.</p>
<h3>Discounting without recalculating</h3>
<p>As the worked example showed, a modest discount can raise break-even volume sharply. Run the numbers before announcing a sale.</p>

<h2>Putting it into practice</h2>
<p>Sorting fixed vs variable costs takes an afternoon the first time and a few minutes each quarter after that. Once your prices reflect both cost types, make sure every sale is actually billed. The <a href="/invoice-generator">free invoice generator</a> creates a PDF invoice in your browser for each job or order. It does not track costs or calculate margins, so keep your cost classification in a spreadsheet or bookkeeping tool. For more on budgets, margins and cash, browse the <a href="/blog/category/business-finance">business finance articles</a>, and the SBA's guide to <a href="https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs" target="_blank" rel="noopener noreferrer">calculating startup costs</a> is a helpful companion if you are estimating fixed costs for a new business.</p>
`,
  },
  {
    slug: "capex-vs-opex",
    title: "CapEx vs OpEx: Differences, Examples and Tax Treatment",
    description:
      "CapEx vs OpEx explained for small businesses: definitions, examples, a worked depreciation example and how US de minimis and Section 179 rules affect tax.",
    category: "comparisons",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-calculate-depreciation",
      "operating-expenses",
      "self-employed-tax-deductions",
    ],
    faqs: [
      {
        q: "What is the difference between CapEx and OpEx?",
        a: "Capital expenditure (CapEx) is money spent to buy, build or improve long-term assets, such as equipment, vehicles or buildings, that will benefit the business for more than a year. Operating expenditure (OpEx) is the ongoing cost of running the business day to day, such as rent, wages, utilities and subscriptions. CapEx is recorded as an asset and expensed gradually through depreciation; OpEx is expensed in the period it is incurred.",
      },
      {
        q: "Is a laptop CapEx or OpEx?",
        a: "In accounting terms a laptop is usually a capital asset because it lasts several years. In practice, many small businesses expense low-cost items immediately under a capitalization threshold. In the US, a business with no applicable financial statement can elect the de minimis safe harbor to deduct tangible items costing up to $2,500 per invoice or item, provided it follows that policy consistently in its books.",
      },
      {
        q: "Is software CapEx or OpEx?",
        a: "A monthly or annual software-as-a-service subscription is generally an operating expense. Purchased software licenses with a multi-year life, and in some cases the cost of developing internal software, may be capitalized and amortized. Implementation costs for cloud software have their own accounting rules under standards such as US GAAP and IFRS. Ask your accountant how to treat larger software projects.",
      },
      {
        q: "Are repairs CapEx or OpEx?",
        a: "Routine repairs and maintenance that keep an asset in its normal operating condition are generally operating expenses. Spending that betters an asset, restores it after major damage or adapts it to a new use is generally capitalized. US tangible property regulations set out these tests in detail, along with a routine maintenance safe harbor. Replacing a broken window is usually a repair; adding an extension is capital.",
      },
      {
        q: "What is the Section 179 deduction?",
        a: "Section 179 lets US businesses elect to deduct the cost of qualifying equipment and certain other property in the year it is placed in service, instead of depreciating it over several years. For tax years beginning in 2026, the IRS lists a maximum deduction of $2,560,000, reduced dollar for dollar once qualifying property placed in service exceeds $4,090,000. Other limits, including a business income limit, also apply.",
      },
      {
        q: "Is leasing equipment CapEx or OpEx?",
        a: "From a cash and budgeting point of view, leasing usually feels like OpEx because you pay a regular amount instead of a large upfront sum. Accounting is more complex: under current lease standards, many leases put a right-of-use asset and a lease liability on the balance sheet. Tax treatment follows separate rules. Small businesses should ask their accountant how a specific lease will be recorded.",
      },
      {
        q: "Why do companies prefer OpEx over CapEx?",
        a: "Some prefer OpEx because it avoids large upfront payments, keeps cash available, makes costs scale with use and can be easier to approve. Others prefer CapEx because owning an asset can be cheaper over its whole life and builds value on the balance sheet. The right choice depends on cash, how long you need the asset, total cost of ownership and tax treatment.",
      },
      {
        q: "Does CapEx appear on the income statement?",
        a: "Not directly. A capital purchase is recorded as an asset on the balance sheet, and the cash outflow appears under investing activities on the cash flow statement. The cost reaches the income statement gradually as depreciation or amortization expense over the asset's useful life. OpEx, by contrast, appears on the income statement in full in the period it is incurred.",
      },
      {
        q: "How do other countries treat capital expenditure for tax?",
        a: "Most tax systems distinguish capital from revenue expenditure but use their own allowances. The UK uses capital allowances, including the Annual Investment Allowance; many other countries apply prescribed depreciation rates by asset class. The rates, thresholds and timing differ widely, so check the rules of the country where your business files tax, or ask a local accountant before making a large purchase.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the CapEx vs OpEx comparison, capital expenditure buys or improves long-term assets such as equipment and vehicles, which are recorded on the balance sheet and depreciated over time. Operating expenditure covers day-to-day running costs such as rent, wages and subscriptions, which are expensed immediately. Tax rules can let some CapEx be deducted sooner.</p>

<p>Whether a purchase counts as capital or operating spending changes how it appears in your accounts, when you can deduct it for tax and how profitable the business looks in a given year. For a small business, the distinction comes up every time you buy a laptop, renovate a shop, sign a lease or pick between owning and subscribing. This guide explains both categories, gives examples, compares them side by side, works through the numbers for a single purchase and summarizes the US tax rules that most often affect small businesses, with a short note for those filing elsewhere.</p>
<p>This is general information, not tax advice. Thresholds and elections change, so confirm your situation with a qualified accountant.</p>

<h2>What is CapEx?</h2>
<p>Capital expenditure is spending on assets that will benefit the business for more than one year. It includes buying new assets and improving existing ones in a way that extends their life or adds capacity. Examples:</p>
<ul>
<li>Machinery, tools and production equipment</li>
<li>Vehicles used in the business</li>
<li>Computers, servers and other hardware</li>
<li>Furniture and fixtures</li>
<li>Buildings, land and major renovations or extensions</li>
<li>Purchased patents, licenses or software with a multi-year life</li>
</ul>
<p>A capital purchase is recorded as an asset on the <a href="/blog/balance-sheet-small-business">balance sheet</a>. Its cost is then spread over its useful life through depreciation (for physical assets) or amortization (for intangibles). Land is the main exception: it is generally not depreciated. Our guide on <a href="/blog/how-to-calculate-depreciation">how to calculate depreciation</a> covers straight-line and other methods.</p>

<h2>What is OpEx?</h2>
<p>Operating expenditure is the recurring cost of running the business. It is consumed within the period and does not create a long-term asset. Examples:</p>
<ul>
<li>Rent and utilities</li>
<li>Wages, salaries and payroll taxes</li>
<li>Software subscriptions and cloud services</li>
<li>Marketing and advertising</li>
<li>Insurance premiums</li>
<li>Office supplies, repairs and routine maintenance</li>
<li>Professional fees such as accounting and legal</li>
</ul>
<p>OpEx goes straight to the income statement in the period it is incurred. For a fuller list and how to track them, see our guide to <a href="/blog/operating-expenses">operating expenses</a>.</p>

<h2>CapEx vs OpEx: comparison table</h2>
<table>
<thead>
<tr><th>Feature</th><th>CapEx</th><th>OpEx</th></tr>
</thead>
<tbody>
<tr><td>Purpose</td><td>Acquire or improve long-term assets</td><td>Run the business day to day</td></tr>
<tr><td>Benefit period</td><td>More than one year</td><td>Current period</td></tr>
<tr><td>Accounting treatment</td><td>Recorded as an asset, depreciated or amortized</td><td>Expensed immediately</td></tr>
<tr><td>Income statement</td><td>Gradually, via depreciation</td><td>Fully, in the period incurred</td></tr>
<tr><td>Cash flow statement</td><td>Investing activities</td><td>Operating activities</td></tr>
<tr><td>Typical payment pattern</td><td>Large, upfront, occasional</td><td>Smaller, recurring</td></tr>
<tr><td>Tax timing (general rule)</td><td>Deducted over several years, unless an election or allowance accelerates it</td><td>Generally deductible in the year paid or incurred</td></tr>
<tr><td>Examples</td><td>Machinery, vehicles, renovations</td><td>Rent, wages, subscriptions, repairs</td></tr>
<tr><td>Approval process</td><td>Often needs a business case</td><td>Usually within an operating budget</td></tr>
</tbody>
</table>

<h2>Worked example: CapEx vs OpEx for one purchase</h2>
<p>The figures below are illustrative and ignore tax elections for now. A small print studio buys a $12,000 wide-format printer. It expects to use it for 5 years and estimates a $2,000 resale value at the end.</p>
<p><strong>Treated as CapEx (straight-line depreciation)</strong></p>
<ul>
<li>Depreciable amount: $12,000 − $2,000 = $10,000</li>
<li>Annual depreciation: $10,000 ÷ 5 years = $2,000 per year</li>
<li>Year 1 income statement expense: $2,000</li>
<li>Year 1 balance sheet value: $12,000 − $2,000 = $10,000</li>
<li>Year 1 cash outflow: $12,000 (investing activities)</li>
</ul>
<p><strong>If it were wrongly treated as OpEx</strong></p>
<ul>
<li>Year 1 income statement expense: $12,000</li>
<li>Years 2 to 5 expense: $0</li>
</ul>
<p>Suppose the studio's profit before this purchase is $40,000. As CapEx, year 1 profit is $40,000 − $2,000 = $38,000. Expensed in full, it would be $40,000 − $12,000 = $28,000. The cash spent is identical in both cases, but the profit picture is very different, and years 2 to 5 would look $2,000 better each year than they really are.</p>
<p><strong>Compare with leasing instead</strong></p>
<ul>
<li>Illustrative lease: $290 per month for 48 months</li>
<li>Annual payments: $290 × 12 = $3,480</li>
<li>Total payments: $290 × 48 = $13,920</li>
</ul>
<p>The lease avoids the $12,000 upfront payment, which helps cash flow, but costs $1,920 more in total ($13,920 − $12,000) and leaves the studio without an asset to sell at the end. Note that lease accounting standards may require some leases to be recorded on the balance sheet, so the accounting result is not always pure OpEx.</p>

<h2>US tax treatment: getting CapEx deducted sooner</h2>
<p>For tax purposes, US businesses generally must capitalize the cost of property with a useful life of more than one year and recover it through depreciation. Several rules let small businesses deduct capital purchases faster. The figures below are those published by the IRS at the time of writing; always check the current year.</p>
<h3>De minimis safe harbor</h3>
<p>Under the tangible property regulations, a business can elect to deduct low-cost tangible items rather than capitalize them. The limit is $2,500 per invoice or item for businesses without an applicable financial statement (generally, audited financial statements), and $5,000 for those with one. You need an accounting procedure in place at the start of the year to expense items under the threshold, and you make the election annually by attaching a statement to a timely filed return. It does not apply to inventory or land. The IRS explains the details on its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/tangible-property-final-regulations" target="_blank" rel="noopener noreferrer">tangible property regulations page</a>.</p>
<h3>Section 179 expensing</h3>
<p>Section 179 lets a business elect to deduct the cost of qualifying equipment, off-the-shelf software and certain other property in the year it is placed in service. For tax years beginning in 2026, the IRS lists a maximum of $2,560,000, reduced dollar for dollar once qualifying purchases exceed $4,090,000. The deduction is also limited to taxable income from active business, and special limits apply to some vehicles.</p>
<h3>Bonus depreciation</h3>
<p>Legislation enacted in 2025 provides a permanent 100% additional first-year (bonus) depreciation deduction for qualifying property acquired after January 19, 2025, according to the IRS. Businesses can choose to elect out. Eligibility rules, especially for used property and vehicles, are detailed in IRS <a href="https://www.irs.gov/publications/p946" target="_blank" rel="noopener noreferrer">Publication 946, How To Depreciate Property</a>.</p>
<p>Accelerating a deduction does not change the accounting treatment in your books; a printer can be fully deducted for tax while still being depreciated over five years in your financial statements. Sole proprietors claim depreciation through Form 4562 and carry it to Schedule C; our <a href="/blog/schedule-c-for-freelancers">Schedule C guide</a> and list of <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> show where it fits.</p>

<h2>Outside the US</h2>
<p>Most tax systems separate capital from revenue spending, but the allowances differ. The UK, for example, uses capital allowances, including an Annual Investment Allowance, rather than accounting depreciation. Many other countries, including Pakistan and the UAE, apply their own rules or prescribed rates by asset class. Thresholds and rates change, so check with your local tax authority or an accountant before relying on any figure.</p>

<h2>CapEx vs OpEx for software, cloud and subscriptions</h2>
<p>Technology spending is where the line blurs most. A monthly software subscription is generally OpEx: you pay for access, you can cancel, and you do not own an asset. Buying a perpetual software license with a multi-year life, or buying your own servers, generally looks like CapEx. Moving from owned hardware to cloud services shifts spending from CapEx toward OpEx, which is one reason businesses describe cloud adoption as a CapEx-to-OpEx shift.</p>
<p>Some cases need professional judgment. Costs to develop internal software, or to configure and implement a large cloud system, can sometimes be capitalized under accounting standards such as US GAAP and IFRS, and the tax treatment of software development costs has its own rules. For a small business paying for ordinary subscriptions, the answer is usually simple: expense them as incurred and track them alongside your other running costs.</p>

<h2>How to decide which category a purchase belongs in</h2>
<p>Ask these questions in order:</p>
<ol>
<li>Will it benefit the business for more than a year? If not, it is OpEx.</li>
<li>Is it below your capitalization threshold or de minimis policy? If so, you may expense it.</li>
<li>Is it a repair that keeps an existing asset in normal working order? Usually OpEx.</li>
<li>Does it improve, enlarge, restore or adapt an asset? Usually CapEx.</li>
<li>Is it a subscription or service you can cancel? Usually OpEx.</li>
<li>Is it a lease? Check lease accounting rules and your tax treatment.</li>
</ol>

<h2>Checklist: handling capital purchases</h2>
<ul>
<li>Write a simple capitalization policy with a dollar threshold and adopt it at the start of the year</li>
<li>Keep the supplier invoice for every asset; it proves cost and date placed in service. See <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a></li>
<li>Record each asset in a fixed asset register with cost, date, useful life and method</li>
<li>Book depreciation monthly or at least annually</li>
<li>Discuss Section 179, bonus depreciation or local allowances with your accountant before year end</li>
<li>Record disposals and sales of assets when they happen</li>
<li>Plan the cash outflow in your <a href="/blog/cash-flow-statement">cash flow statement</a> and forecast</li>
</ul>

<h2>Common mistakes</h2>
<h3>Expensing large assets in your books</h3>
<p>Putting a vehicle or machine straight to expense makes one year look poor and later years look better than they are. Tax elections and book treatment are separate decisions.</p>
<h3>Capitalizing routine repairs</h3>
<p>Ordinary maintenance is usually deductible as incurred. Capitalizing it delays deductions unnecessarily.</p>
<h3>Assuming any purchase qualifies for immediate deduction</h3>
<p>Section 179 and bonus depreciation have eligibility rules, income limits and vehicle restrictions. Check before you buy for tax reasons.</p>
<h3>Comparing lease and purchase on monthly cost alone</h3>
<p>Compare total cost of ownership, resale value, maintenance and flexibility, not just the payment.</p>
<h3>Mixing up cost behavior and CapEx</h3>
<p>Depreciation is usually a fixed cost, but the CapEx vs OpEx split is about the nature of spending, not how it behaves with volume. For that separate question, see <a href="/blog/fixed-vs-variable-costs">fixed versus variable costs</a>.</p>

<h2>Where invoicing fits</h2>
<p>If you sell equipment or capital installations to clients, your invoice is their proof of cost and date of purchase, so itemize clearly and show tax separately. The <a href="/invoice-generator">free invoice generator</a> creates itemized PDF invoices in your browser. It does not track assets or calculate depreciation; that belongs in your accounting software. For more on tax rules and deadlines, browse the <a href="/blog/category/tax-compliance">tax and compliance articles</a>.</p>
`,
  },
];
