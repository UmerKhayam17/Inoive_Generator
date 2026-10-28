import type { PostDraft } from "../blog";

export const RECEIVABLES_2026_POSTS: PostDraft[] = [
  {
    slug: "bank-reconciliation",
    title: "Bank Reconciliation: How to Match Invoices and Payments",
    description:
      "Learn bank reconciliation step by step: match invoices and payments to your bank statement, fix timing differences and catch errors before month-end.",
    category: "guides",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["cash-application", "remittance-advice", "month-end-close-checklist"],
    faqs: [
      {
        q: "What is bank reconciliation in simple terms?",
        a: "Bank reconciliation is the process of comparing the cash balance in your books with the balance on your bank statement for the same date, then explaining every difference. Differences usually come from timing, such as deposits in transit or checks not yet cleared, or from items you have not recorded yet, such as bank fees. When every difference is explained, the two balances agree and your cash figure can be trusted.",
      },
      {
        q: "How often should a small business reconcile its bank account?",
        a: "At least once a month, as part of closing the month. Businesses with many daily transactions, tight cash or several payment channels often reconcile weekly or even daily, because small gaps are much easier to trace while the details are fresh. Waiting a quarter or a year turns a one-hour job into a forensic exercise and lets errors, duplicate payments and fraud go unnoticed for too long.",
      },
      {
        q: "What is the difference between bank reconciliation and cash application?",
        a: "Cash application matches each customer payment to the specific invoices it pays, so the accounts receivable ledger shows which invoices are settled. Bank reconciliation checks that the total cash in your books agrees with the bank statement. You need both. Cash application can be perfect while the bank account is unreconciled, for example when a bank fee or a supplier payment was never recorded.",
      },
      {
        q: "What are deposits in transit and outstanding checks?",
        a: "A deposit in transit is money you have recorded as received but the bank has not yet credited, such as a check deposited after the statement cut-off. An outstanding check is a payment you have recorded but the payee has not yet cashed. Both are timing differences: they appear on one side only for a few days and should clear on the next statement.",
      },
      {
        q: "Why is my bank balance different from my accounting balance?",
        a: "The usual causes are timing differences, bank fees or interest you have not recorded, customer payments received short because of transfer charges, payments posted to the wrong account, duplicated entries and simple typing errors such as transposed digits. Work through the statement line by line, tick off matched items and list everything left over. Each leftover item will fall into one of these groups.",
      },
      {
        q: "How do I reconcile a payment that covers several invoices?",
        a: "Find the remittance advice or payment reference that lists the invoices being paid, add up those invoice balances and confirm the total equals the deposit. Record one receipt in your books that is applied across all of the invoices. If no remittance arrives, ask the customer which invoice numbers the payment covers rather than guessing, because a wrong allocation will confuse later statements.",
      },
      {
        q: "Does a free invoice generator reconcile my bank account?",
        a: "No. A browser-based invoice generator such as ours creates PDF invoices with line items, tax, discounts, amount paid and balance due, but it does not connect to your bank, track payments or reconcile anything. Keep a record of each invoice you issue in your accounting software or a spreadsheet, then reconcile those records against your bank statement each month.",
      },
      {
        q: "What should I do with a difference I cannot explain?",
        a: "Do not force the balance by posting a plug entry and moving on. Note the amount, check whether it equals a single transaction or is divisible by nine, which often signals a transposition error, and review the previous month's reconciliation. If it remains unexplained, ask your bookkeeper or accountant to review it before you close the month, and keep a written note of the investigation.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Bank reconciliation means comparing your recorded cash balance with your bank statement for the same date and explaining every difference. You match each invoice payment and expense to a bank line, adjust your books for fees or missing entries, list timing items such as deposits in transit, and confirm both balances agree.</p>

<p>Sending invoices is only half of getting paid. The other half is knowing, with certainty, which invoices have actually turned into cash in your bank account. Bank reconciliation is the monthly habit that gives you that certainty. It catches customer payments that went unnoticed, bank fees nobody recorded, duplicate supplier payments and the occasional fraudulent debit. This guide walks through the process step by step, shows a worked example with real arithmetic, and ends with a checklist you can reuse every month.</p>

<h2>What is bank reconciliation?</h2>
<p>A bank reconciliation is a short report, usually one page, that starts with the closing balance on your bank statement, adjusts it for items the bank has not processed yet, and arrives at the same figure as the cash account in your books. If the two figures match after adjustments, the account is reconciled. If they do not, there is an error or an unrecorded transaction somewhere, and the reconciliation tells you roughly where to look.</p>
<p>For a business that invoices customers, most of the work is on the money-in side: matching deposits to the invoices they pay. That matching step is called <a href="/blog/cash-application">cash application in accounts receivable</a>, and it feeds the reconciliation. If your receipts are applied correctly, the bank reconciliation is mostly a matter of ticking off lines.</p>

<h2>Why bank reconciliation matters for invoicing</h2>
<ul>
<li><strong>Accurate receivables.</strong> An invoice marked unpaid when the money has arrived leads to embarrassing reminders. An invoice marked paid when the money never arrived means lost revenue.</li>
<li><strong>Reliable cash figures.</strong> Your cash forecast is only as good as the opening balance it starts from.</li>
<li><strong>Error and fraud detection.</strong> Unfamiliar debits, altered payee details and duplicate payments surface quickly when someone looks at every line each month.</li>
<li><strong>Clean tax records.</strong> Tax authorities expect your books to be supported by source documents. The IRS guidance on <a href="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" target="_blank" rel="noopener noreferrer">business recordkeeping</a> lists bank statements and deposit records among the documents that support gross receipts.</li>
<li><strong>A faster month-end close.</strong> Reconciled cash is usually the first item on any <a href="/blog/month-end-close-checklist">month-end close checklist</a>, because many other balances depend on it.</li>
</ul>

<h2>What you need before you start</h2>
<p>Gather these items for the period you are reconciling:</p>
<ul>
<li>The bank statement (or a transaction export) covering the full month, plus the closing balance on the last day.</li>
<li>Your cash account ledger for the same dates, from accounting software or your cash book spreadsheet.</li>
<li>A list of invoices issued and their status, ideally your <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> as of the month-end date.</li>
<li>Remittance advices and payment confirmations received from customers.</li>
<li>Last month's reconciliation, so you can check that its outstanding items have now cleared.</li>
</ul>

<h2>How to do a bank reconciliation, step by step</h2>
<ol>
<li><strong>Pick the date and lock both balances.</strong> Note the bank statement closing balance and the book cash balance at the same date. Do not mix a statement dated the 30th with a ledger run on the 3rd of the next month.</li>
<li><strong>Clear last month's open items.</strong> Each deposit in transit and outstanding check from last month should appear on this month's statement. Tick them off. Anything still open after several weeks needs follow-up.</li>
<li><strong>Match deposits to recorded receipts.</strong> Go down the bank statement and match each incoming payment to a receipt in your books. Use the payment reference, the customer name and the amount. A <a href="/blog/remittance-advice">remittance advice from the customer</a> tells you which invoices a lump-sum payment covers.</li>
<li><strong>Match withdrawals to recorded payments.</strong> Do the same for checks, transfers, card payments and direct debits going out.</li>
<li><strong>List bank items missing from your books.</strong> Typical examples are monthly account fees, wire charges, card processing fees, interest earned and returned payments. Record each one in your books with the bank statement as support.</li>
<li><strong>List book items missing from the bank.</strong> These are usually timing differences: deposits made on the last day of the month and checks not yet presented. They stay on the reconciliation until they clear.</li>
<li><strong>Investigate everything else.</strong> Amounts that differ by a few dollars, items recorded twice, payments posted to the wrong invoice or customer, and transactions you do not recognize.</li>
<li><strong>Prepare the reconciliation statement and sign it off.</strong> Show the adjusted bank balance and the adjusted book balance side by side. They must be equal. Date the report and keep it with the month's records.</li>
</ol>

<h2>Common reconciling items and how to treat them</h2>
<table><thead><tr><th>Item</th><th>Where it appears</th><th>Typical cause</th><th>What to do</th></tr></thead><tbody>
<tr><td>Deposit in transit</td><td>Books only</td><td>Payment received late on the last day, credited by the bank the next business day</td><td>Add to the bank balance on the reconciliation; confirm it clears next month</td></tr>
<tr><td>Outstanding check</td><td>Books only</td><td>Supplier has not cashed the check yet</td><td>Subtract from the bank balance; chase or void if very old</td></tr>
<tr><td>Bank fee or wire charge</td><td>Bank only</td><td>Monthly fees, incoming wire fees, foreign exchange charges</td><td>Record as a bank charges expense</td></tr>
<tr><td>Interest earned</td><td>Bank only</td><td>Interest on the account balance</td><td>Record as interest income</td></tr>
<tr><td>Short customer payment</td><td>Both, different amounts</td><td>Customer or intermediary bank deducted a fee, or the customer took a deduction</td><td>Apply the receipt, then resolve the remaining balance on the invoice</td></tr>
<tr><td>Returned or bounced payment</td><td>Bank only</td><td>Insufficient funds, closed account, reversed direct debit</td><td>Reverse the receipt so the invoice shows as unpaid again</td></tr>
<tr><td>Duplicate entry</td><td>Books only</td><td>Same receipt or bill recorded twice</td><td>Delete or reverse the duplicate</td></tr>
</tbody></table>

<h2>Bank reconciliation worked example</h2>
<p>Here is an illustrative month for a small design studio. The figures are made up to show the arithmetic.</p>
<p>On September 30, the bank statement shows a closing balance of <strong>$18,420</strong>. The cash account in the studio's books shows <strong>$17,905</strong>. That is a difference of $515, which needs to be explained.</p>
<p>Working through the statement, the bookkeeper finds:</p>
<ul>
<li>A customer check for $1,200 (paying invoice INV-0418) was deposited on September 30 but credited by the bank on October 1. That is a deposit in transit.</li>
<li>Two supplier checks, for $850 and $640, have not yet been cashed. Those are outstanding checks.</li>
<li>The bank charged a $25 monthly account fee that was not recorded in the books.</li>
<li>A customer paid invoice INV-0409 for $2,400 by wire, but $2,385 arrived because an intermediary bank deducted $15. The books recorded the full $2,400, so the receipt must be corrected to $2,385, leaving $15 to resolve on the invoice.</li>
<li>Interest of $5 was credited and not recorded.</li>
</ul>
<p><strong>Adjusted bank balance:</strong> $18,420 + $1,200 deposit in transit − $850 − $640 outstanding checks = <strong>$18,130</strong>.</p>
<p><strong>Adjusted book balance:</strong> $17,905 − $25 monthly fee + $5 interest = $17,885. That still leaves a $245 gap against $18,130, so the bookkeeper keeps looking. She finds a $260 card refund from a supplier credited to the bank and never recorded, and remembers the $15 wire deduction on INV-0409: the books show $2,400 received, but only $2,385 hit the bank. Recalculating: $17,885 + $260 − $15 = <strong>$18,130</strong>.</p>
<p>Both adjusted balances equal $18,130, so the account is reconciled. Notice that the wire deduction is recorded only once, as a correction to the receipt. Booking it again as a separate bank charge is a common way to create a difference that does not exist. The $15 left on INV-0409 is now a receivables question, covered in our guide to <a href="/blog/short-payments-and-deductions">handling short payments and deductions</a>.</p>

<h2>Matching invoices to payments faster</h2>
<p>Most of the time spent on reconciliation goes into answering one question: which invoice is this deposit for? You can make that question easier before the money ever arrives.</p>
<h3>Put a clear reference on every invoice</h3>
<p>Ask customers to quote the invoice number as the payment reference. Our guide to the <a href="/blog/invoice-reference-number">invoice reference number</a> explains why a short, unique number works better than a long description, and the <a href="/tools/invoice-number-generator">invoice number generator</a> helps you keep a consistent sequence.</p>
<h3>Show payment details that leave no room for error</h3>
<p>Print the account name, account number or IBAN, and the reference to use on the invoice itself. Our article on <a href="/blog/bank-details-on-invoice">putting bank details on an invoice</a> covers the fields customers need for domestic and international transfers.</p>
<h3>Record partial payments properly</h3>
<p>When a customer pays in installments, each receipt should reduce the balance of a specific invoice. The <a href="/invoice-generator">free invoice generator</a> lets you enter an amount paid so the PDF shows the remaining balance due, which makes the next payment easy to identify. See our guide to the <a href="/blog/partial-payment-invoice">partial payment invoice</a> for wording.</p>

<h2>Common bank reconciliation mistakes</h2>
<ul>
<li><strong>Using mismatched dates.</strong> A statement and a ledger run on different days will never agree.</li>
<li><strong>Forcing the balance.</strong> Posting an unexplained "reconciliation difference" entry hides the problem and usually makes next month harder.</li>
<li><strong>Ignoring old outstanding items.</strong> A deposit in transit that never clears may be a payment that was never banked or was banked to the wrong account.</li>
<li><strong>Recording fees twice.</strong> As in the example above, a fee deducted from a customer payment is not also a separate charge.</li>
<li><strong>Marking invoices paid from emails.</strong> A "we've paid you" message is not cash. Mark an invoice paid only once the money appears in the bank.</li>
<li><strong>Missing duplicate payments.</strong> If a customer pays the same invoice twice, record the overpayment and refund or credit it.</li>
<li><strong>Reconciling only once a year.</strong> By then, customers have forgotten details and banks may charge for old statement copies.</li>
</ul>

<h2>Monthly bank reconciliation checklist</h2>
<ul>
<li>Bank statement and book balance taken at the same date.</li>
<li>Last month's deposits in transit and outstanding checks have cleared or been investigated.</li>
<li>Every incoming payment is matched to a recorded receipt and to specific invoices.</li>
<li>Every outgoing payment is matched to a recorded bill, payroll item or transfer.</li>
<li>Bank fees, interest and returned payments are recorded in the books.</li>
<li>Short payments are identified and the remaining invoice balances are flagged for follow-up.</li>
<li>Adjusted bank balance equals adjusted book balance.</li>
<li>Reconciliation report is dated, signed off and filed with supporting statements.</li>
<li>Any unexplained difference is documented and escalated, not plugged.</li>
</ul>

<h2>Bank reconciliation under cash and accrual accounting</h2>
<p>The mechanics are the same whichever method you use, but the effect on your reports differs. Under cash accounting, income is recorded when the deposit arrives, so a missed deposit understates revenue. Under accrual accounting, revenue is recorded when you invoice, and the deposit only moves the amount from receivables to cash, so a missed deposit overstates receivables instead. Our comparison of <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> explains which method suits which business.</p>

<h2>Next step</h2>
<p>Pick last month's statement and reconcile it this week, even if your books are messy. Start with the closing balances, tick off what you can and list what you cannot. Then fix the cause of the biggest problem: usually missing payment references. Issue your next invoice from one of our <a href="/invoice-templates">free invoice templates</a> with a clear invoice number and payment instructions. Then put the same checklist on your calendar for the first week of every month.</p>
`,
  },
  {
    slug: "cash-application",
    title: "Cash Application in Accounts Receivable: Process and Tips",
    description:
      "Cash application explained: how to match customer payments to invoices, handle unapplied cash and short pays, and speed up posting with better references.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "ai-agents-accounts-receivable",
      "bank-reconciliation",
      "remittance-advice",
      "short-payments-and-deductions",
    ],
    faqs: [
      {
        q: "What is cash application in accounts receivable?",
        a: "Cash application is the step where a business takes each payment received from a customer and records it against the specific open invoices it settles. Once applied, those invoices show as paid or partly paid in the accounts receivable ledger, the customer balance falls and the aging report is accurate. Payments that cannot be matched yet are held as unapplied cash until someone identifies them.",
      },
      {
        q: "What is unapplied cash?",
        a: "Unapplied cash is money that has arrived in your bank account and been recorded as received from a customer, but has not yet been matched to specific invoices. It typically happens when a payment has no reference, covers several invoices without a remittance advice, or differs from any invoice amount. It should be cleared quickly, because the customer's invoices still look overdue while it sits there.",
      },
      {
        q: "What is the difference between unapplied and unidentified cash?",
        a: "Unapplied cash comes from a known customer but has not been matched to invoices yet. Unidentified or unallocated cash is a deposit where you cannot even tell which customer sent it, for example a transfer with a cryptic reference from a bank account you do not recognize. Unidentified cash needs research with the bank or a message to likely customers before it can be applied.",
      },
      {
        q: "How do you apply a payment that covers several invoices?",
        a: "Use the remittance advice or payment reference to list the invoices included, confirm their balances add up to the payment, and record one receipt split across those invoices. If the totals do not match, find the difference first: a credit note the customer deducted, a short payment, an early payment discount or an invoice they have not approved yet. Do not spread the payment arbitrarily.",
      },
      {
        q: "Should I apply payments to the oldest invoice first?",
        a: "Only when the customer has not told you which invoices they are paying. If a remittance or payment reference names specific invoices, apply the money to those, even if older ones remain open, because the customer may be disputing the older items. Oldest-first is a sensible default for unreferenced payments, but tell the customer how you applied the money, for example on their next statement.",
      },
      {
        q: "How do I handle a customer overpayment?",
        a: "Apply the payment to the invoice in full and record the excess as a credit on the customer's account. Then ask the customer whether they want a refund or want the credit applied to their next invoice, and document the answer. Never quietly keep an overpayment. It is the customer's money, and unresolved credits make statements and reconciliations confusing for both sides.",
      },
      {
        q: "Can cash application be automated?",
        a: "Yes. Accounting and AR software can match payments automatically when the payment reference contains a clean invoice number or when the amount equals exactly one open invoice. More advanced tools read remittance emails and attachments. Automation works well on clean data and poorly on vague references, so clear invoice numbers and payment instructions matter more than the software you choose.",
      },
      {
        q: "Does the free invoice generator apply payments?",
        a: "No. Our browser-based invoice generator creates PDF invoices, including an amount paid field and the balance due, but it does not receive payments, track them or update a ledger. You record payments in your accounting software or spreadsheet. What the generator can do is make each invoice easy to match by giving it a unique number and clear payment instructions.",
      },
      {
        q: "How quickly should payments be applied?",
        a: "Ideally the same business day the money arrives, or the next day at the latest. Fast application keeps your aging report honest, prevents reminder emails going to customers who have already paid, and gives you an early warning when a payment is short. Leaving cash unapplied until month-end also makes the bank reconciliation slower and more error-prone.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Cash application is the accounts receivable process of matching each customer payment to the specific invoices it pays and recording it in your ledger. Done well, it keeps customer balances accurate, flags short payments and deductions early, and stops you chasing customers who have already paid. Clear invoice references make it much faster.</p>

<p>Every business that invoices customers does cash application, even if nobody calls it that. When a $4,800 transfer lands and you mark three invoices as paid, you have applied cash. The difficulty comes with volume and with messy payments: lump sums with no reference, amounts that do not match any invoice, deductions nobody explained. This guide covers the process step by step, the common matching scenarios, a worked example with the arithmetic shown, the mistakes that cause most problems and a checklist you can use from tomorrow.</p>

<h2>What is cash application?</h2>
<p>Cash application sits between receiving money and reporting on it. The bank tells you that money arrived. Cash application tells your books what that money was for. Until a payment is applied, every invoice it covers still looks open, your <a href="/blog/days-sales-outstanding">days sales outstanding</a> looks worse than it is, and your collections effort is aimed at the wrong customers.</p>
<p>It is a different job from bank reconciliation. Cash application works invoice by invoice inside accounts receivable. Bank reconciliation checks that the total cash in your books agrees with the bank statement. Our guide to <a href="/blog/bank-reconciliation">bank reconciliation for invoices and payments</a> covers the second step; the two together give you confidence in both cash and receivables.</p>

<h2>The cash application process, step by step</h2>
<ol>
<li><strong>Capture the payment.</strong> Record the date, amount, payer name, payment method and the reference exactly as the bank shows it.</li>
<li><strong>Collect the remittance information.</strong> Look for a <a href="/blog/remittance-advice">remittance advice</a> by email, in a supplier portal, in the payment reference or in the addenda of an electronic payment. It tells you which invoices are being paid and why any amounts differ.</li>
<li><strong>Identify the customer.</strong> Match the payer to a customer account. Watch for parent companies paying on behalf of subsidiaries and for payments made through a third party.</li>
<li><strong>Match to open invoices.</strong> Find the invoices named in the remittance, or the invoice whose number appears in the reference, and confirm the balances.</li>
<li><strong>Explain any difference.</strong> If the payment is less than the invoices, identify the cause: a credit note, a discount, a fee, a dispute or an error. If it is more, identify the overpayment.</li>
<li><strong>Post the receipt.</strong> Record the payment against the invoices in your accounting system or AR spreadsheet. Partly paid invoices keep their remaining balance open.</li>
<li><strong>Route exceptions.</strong> Send short payments, unauthorized deductions and unidentified receipts to whoever will resolve them, with a deadline.</li>
<li><strong>Confirm with the customer when needed.</strong> A brief note or an updated <a href="/blog/statement-of-account">statement of account</a> shows the customer how their money was applied and surfaces disagreements early.</li>
</ol>

<h2>Common cash application scenarios</h2>
<table><thead><tr><th>Scenario</th><th>What you see</th><th>How to apply it</th></tr></thead><tbody>
<tr><td>Exact match</td><td>Payment equals one invoice and quotes its number</td><td>Apply in full; invoice closed</td></tr>
<tr><td>Lump sum with remittance</td><td>One payment, remittance lists several invoices</td><td>Split the receipt across the listed invoices</td></tr>
<tr><td>Lump sum without remittance</td><td>One payment, no detail</td><td>Hold as unapplied, ask the customer, apply oldest first only if they confirm or do not respond within your policy period</td></tr>
<tr><td>Partial payment</td><td>Payment less than the invoice, by agreement</td><td>Apply to the invoice and leave the balance open; see our <a href="/blog/partial-payment-invoice">partial payment invoice</a> guide</td></tr>
<tr><td>Short payment</td><td>Payment less than the invoice, unexplained or disputed</td><td>Apply what was paid, log the shortfall as an exception and investigate</td></tr>
<tr><td>Early payment discount taken</td><td>Payment equals invoice minus the agreed discount</td><td>Apply the cash and record the discount if it was earned within the terms</td></tr>
<tr><td>Overpayment</td><td>Payment exceeds the open balance</td><td>Close the invoice and hold the excess as a customer credit</td></tr>
<tr><td>Unidentified payment</td><td>No recognizable payer or reference</td><td>Record as unidentified cash and research it</td></tr>
</tbody></table>

<h2>Cash application worked example</h2>
<p>Here is an illustrative case. A wholesale customer has four open invoices:</p>
<ul>
<li>INV-1031: $1,250.00</li>
<li>INV-1036: $2,780.00</li>
<li>INV-1040: $960.00</li>
<li>INV-1044: $1,400.00</li>
</ul>
<p>Total open: $1,250 + $2,780 + $960 + $1,400 = <strong>$6,390.00</strong>.</p>
<p>A transfer of <strong>$4,734.40</strong> arrives with the reference "MAR PAYMENT." No single invoice matches, so the AR clerk asks the customer for the remittance. It says the payment covers INV-1031, INV-1036 and INV-1040, less credit note CN-0052 for $150.00 (damaged goods, issued against INV-1036), and less a 2% early payment discount on INV-1036 because it was paid within ten days.</p>
<p>The clerk checks the arithmetic:</p>
<ul>
<li>Invoices paid: $1,250 + $2,780 + $960 = $4,990.00</li>
<li>Less credit note CN-0052: $4,990.00 − $150.00 = $4,840.00</li>
<li>Less 2% discount on INV-1036: 2% × $2,780 = $55.60</li>
<li>Expected payment: $4,840.00 − $55.60 = $4,784.40</li>
</ul>
<p>The actual payment is $4,734.40, which is <strong>$50.00 less</strong> than the remittance itself implies. The remittance gives no reason for the gap. Rather than spreading the shortfall across all three invoices or quietly writing it off, the clerk applies the cash like this:</p>
<ul>
<li>INV-1031: $1,250.00 applied, paid in full.</li>
<li>INV-1040: $960.00 applied, paid in full.</li>
<li>Remaining cash for INV-1036: $4,734.40 − $1,250.00 − $960.00 = $2,524.40.</li>
<li>INV-1036 balance after the credit note and the earned discount: $2,780.00 − $150.00 − $55.60 = $2,574.40.</li>
<li>INV-1036 open balance after the payment: $2,574.40 − $2,524.40 = <strong>$50.00</strong>, logged as a short payment exception.</li>
</ul>
<p>INV-1044 ($1,400) stays open because the customer did not include it. The clerk then emails the customer with the invoice number and the $50 figure. It might be a bank charge, a pricing disagreement or a keying error; the point is that the gap stays visible on one specific invoice, where both sides can see it and resolve it, instead of disappearing into a rounding entry.</p>

<h2>How to make cash application faster</h2>
<h3>Use one clean invoice number everywhere</h3>
<p>The biggest single improvement is a short, unique invoice number that customers can copy into the payment reference. Our guide to the <a href="/blog/invoice-reference-number">invoice reference number</a> explains formats that survive bank systems that truncate references.</p>
<h3>Ask for remittance details up front</h3>
<p>Add a line to your payment terms such as "Please quote the invoice number as the payment reference and email remittance details to accounts@yourcompany.com." Put it on every invoice you create in the <a href="/invoice-generator">free invoice generator</a>, near the bank details.</p>
<h3>Choose payment methods that carry data</h3>
<p>Some payment rails carry more remittance information than others. In the United States, the ACH network's corporate formats can carry addenda records with invoice detail; the <a href="https://www.nacha.org/" target="_blank" rel="noopener noreferrer">Nacha</a> rules govern those formats. International wires typically carry a short free-text field. Our comparison of <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> covers the practical differences, including fees that can cause short payments.</p>
<h3>Set an unapplied cash rule</h3>
<p>Decide in advance how long cash may stay unapplied, for example two business days, and who chases the customer when it does. Review the unapplied balance every week.</p>

<h2>Common cash application mistakes</h2>
<ul>
<li><strong>Applying to the wrong customer.</strong> Similar names, group companies and shared bank accounts cause cross-posting. Confirm the payer before applying.</li>
<li><strong>Forcing a match.</strong> Spreading a payment across invoices so the numbers look tidy hides deductions and disputes that will resurface later.</li>
<li><strong>Ignoring small differences.</strong> A pattern of $15 shortfalls on international wires adds up. Decide whether to absorb, rebill or change payment instructions, and handle them consistently as described in our guide to <a href="/blog/short-payments-and-deductions">short payments and deductions</a>.</li>
<li><strong>Letting unapplied cash age.</strong> Every day it sits there, the customer can receive reminder emails for invoices they have paid.</li>
<li><strong>Accepting late discounts silently.</strong> If a customer takes an early payment discount after the discount window has closed, decide your policy and apply it the same way every time.</li>
<li><strong>Not telling the customer.</strong> Applying oldest-first without telling the customer creates disagreements when they believe a different invoice was paid.</li>
</ul>

<h2>Cash application checklist</h2>
<ul>
<li>Every receipt recorded on the day it arrives, with the bank reference copied exactly.</li>
<li>Remittance advice saved with the receipt or linked to it.</li>
<li>Payer confirmed against the customer account, including group entities.</li>
<li>Payment matched to named invoices, not just to amounts.</li>
<li>Credit notes, discounts and fees identified and checked against your terms.</li>
<li>Short payments logged as exceptions with an owner and a due date.</li>
<li>Overpayments recorded as customer credits and the customer asked how to use them.</li>
<li>Unapplied and unidentified cash reviewed at least weekly.</li>
<li>Customer statements reflect the application before the next reminder goes out.</li>
</ul>

<h2>How cash application shows up in your books</h2>
<p>Under accrual accounting, an invoice creates a receivable when you issue it. Cash application moves that amount from accounts receivable to cash. In the example above, the entries would look like this in principle:</p>
<ul>
<li><strong>Cash received:</strong> increase cash by $4,734.40.</li>
<li><strong>Early payment discount:</strong> record $55.60 as a sales discount, which reduces revenue.</li>
<li><strong>Credit note:</strong> the $150.00 credit was already recorded when CN-0052 was issued; applying it simply offsets it against INV-1036.</li>
<li><strong>Accounts receivable:</strong> reduce the customer's balance by $4,734.40 + $55.60 = $4,790.00, plus the $150.00 credit note offset, leaving INV-1036 with $50.00 open and INV-1044 with $1,400.00 open.</li>
</ul>
<p>Check: the customer started with $6,390.00 open. $6,390.00 − $4,790.00 − $150.00 = $1,450.00, which is exactly $50.00 + $1,400.00. When the arithmetic closes like this, the customer statement, the aging report and the ledger all agree. Your accountant may prefer different account names, but the logic is the same.</p>

<h2>Who should do cash application in a small business?</h2>
<p>In a very small business the owner usually applies cash, and that is fine as long as it happens promptly and consistently. As the business grows, it helps to separate duties a little. The person who applies receipts ideally should not be the only person who can issue credit notes or write off balances, because combining those powers makes it easy to hide errors, or worse. Even a part-time bookkeeper reviewing the unapplied cash list and the credit notes issued each month adds a useful second pair of eyes.</p>
<p>Whoever does the work needs three things: access to the bank feed or statement, access to the customer ledger, and authority to contact customers about remittances. Without the third, unapplied cash tends to sit untouched because nobody feels responsible for asking.</p>

<h2>Measuring how well cash application works</h2>
<p>A few simple measures show whether your process is healthy. Track the share of payments matched automatically or on the first attempt, the average time from receipt to application, the balance of unapplied cash at each month-end and the number of open deduction cases. None of these needs specialist software; a spreadsheet tab is enough. Combined with the measures in our <a href="/blog/accounts-receivable-guide">accounts receivable guide</a>, they show whether slow collections are a customer problem or an internal posting problem.</p>

<h2>Next step</h2>
<p>Look at last month's receipts and count how many could be matched from the payment reference alone. If the answer is fewer than most, the fix starts with your invoices, not your software: clear numbers, clear payment instructions and a request for remittance details. For more on receivables, cash flow and bookkeeping, browse the <a href="/blog/category/business-finance">business finance articles</a>.</p>
`,
  },
  {
    slug: "customer-credit-policy",
    title: "Customer Credit Policy: How to Set B2B Credit Limits",
    description:
      "Build a customer credit policy that protects cash flow: how to vet B2B customers, set credit limits and terms, monitor accounts and act when payments slip.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-payment-terms", "accounts-receivable-aging-report", "bad-debt-write-off"],
    faqs: [
      {
        q: "What is a customer credit policy?",
        a: "A customer credit policy is a written set of rules for selling on credit, meaning delivering goods or services now and invoicing for payment later. It covers who qualifies for credit, how much each customer may owe at once, which payment terms apply, what information you collect before approving an account, how you monitor balances and what happens when invoices go overdue. It turns case-by-case decisions into consistent ones.",
      },
      {
        q: "How do I calculate a credit limit for a new B2B customer?",
        a: "A practical starting point is the customer's expected monthly purchases multiplied by the number of months of sales that will be outstanding at once. For example, $10,000 a month on net 30 terms, paid at around 45 days, means about 1.5 months outstanding, so roughly $15,000. Then adjust down for weak credit information or a short trading history, and review after three to six months.",
      },
      {
        q: "What information should I ask for in a credit application?",
        a: "Ask for the customer's legal name, registration number, tax ID, trading address, years in business, ownership, accounts payable contact, bank details, trade references and the credit limit and terms they are requesting. For larger limits, ask for recent financial statements. Include a signed agreement to your terms of sale, including late payment interest and the right to suspend supply.",
      },
      {
        q: "Should small businesses offer credit at all?",
        a: "Most B2B buyers expect payment terms, so refusing credit entirely can lose sales. The answer is to offer credit selectively. New or unverified customers can start on payment upfront, a deposit or card payment, and move to terms once they have paid reliably. Larger customers with good references can receive a limit sized to what you can afford to lose if they fail to pay.",
      },
      {
        q: "How often should credit limits be reviewed?",
        a: "Review every active account at least once a year, and sooner when something changes: a customer asks for a higher limit, starts paying later than usual, has a payment returned, changes ownership or appears in negative news. Many businesses also review automatically when a customer reaches 80% or more of its limit, so the decision happens before an order is blocked.",
      },
      {
        q: "What should happen when a customer exceeds the credit limit?",
        a: "Your policy should say so in advance. Common options are holding new orders until the balance falls below the limit, asking for payment on the new order upfront, or having a named manager approve a temporary increase. Whatever you choose, tell the customer promptly and politely, and record the decision so the same situation is handled the same way next time.",
      },
      {
        q: "Is a personal guarantee worth asking for?",
        a: "A personal guarantee from a director or owner can make it more likely that a small limited company will pay, because the guarantor becomes personally liable if the company does not. It is most common for new companies with little trading history. Guarantees must be properly drafted and signed to be enforceable, so use wording reviewed by a lawyer in your jurisdiction.",
      },
      {
        q: "How does a credit policy relate to bad debt?",
        a: "A credit policy reduces bad debt by limiting how much any one customer can owe and by triggering action early when payments slip. It does not eliminate it. Your policy should also say when an uncollectible balance is written off, who approves the write-off and how it is recorded, so the books reflect reality and tax treatment can be checked with your accountant.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A customer credit policy sets the rules for selling on payment terms: who qualifies, how you check them, what credit limit each customer gets, which terms apply and what happens when payments slip. A good policy sizes each limit to expected purchases and to the loss you can absorb, and is reviewed regularly.</p>

<p>Every time you deliver work and send an invoice payable in 30 days, you are lending money to your customer, interest-free. For most B2B businesses that is unavoidable: buyers expect terms. The question is how much to lend, to whom, and for how long. Without a written customer credit policy, those decisions get made under sales pressure, one order at a time, and the result shows up months later as overdue invoices and write-offs. This guide explains what to put in a policy, how to calculate a credit limit with a worked example, and how to monitor accounts so problems surface early.</p>

<h2>What a customer credit policy covers</h2>
<p>A credit policy does not need to be long. One or two pages is enough for most small businesses. It should answer these questions:</p>
<ul>
<li><strong>Eligibility.</strong> Which customers can buy on credit, and which must pay upfront or by card?</li>
<li><strong>Information required.</strong> What goes into the credit application, and which checks you run.</li>
<li><strong>Credit limits.</strong> How the limit is calculated and who can approve it.</li>
<li><strong>Payment terms.</strong> Standard terms, such as net 30, and when longer or shorter terms apply. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> explains the common options.</li>
<li><strong>Security.</strong> When you ask for deposits, guarantees or other protection.</li>
<li><strong>Monitoring.</strong> How often balances and payment behavior are reviewed.</li>
<li><strong>Escalation.</strong> What happens at each stage of lateness, from reminder to stopping supply to collections.</li>
<li><strong>Write-offs.</strong> When an unpaid balance is treated as uncollectible and who approves it.</li>
</ul>

<h2>Step 1: Decide who gets credit</h2>
<p>Start with a default and allow exceptions. A sensible default for many small businesses is: new customers pay upfront, by card or with a deposit on the first order, then apply for terms once there is a relationship. A <a href="/blog/deposit-invoice">deposit invoice</a> is a simple way to collect part of the price before work begins.</p>
<p>Exceptions might include large, well-known organizations, public bodies and customers introduced by trusted partners. Even then, collect the basic application information, because you will need it for collections if something goes wrong.</p>

<h2>Step 2: Collect a credit application and check it</h2>
<p>A credit application gathers the facts you need and gets the customer's signature on your terms of sale. At minimum, collect:</p>
<ul>
<li>Full legal name, registration number and tax ID.</li>
<li>Registered and trading addresses.</li>
<li>Owner or director names and years in business.</li>
<li>Accounts payable contact, invoicing email and any purchase order requirements.</li>
<li>Two or three trade references from other suppliers.</li>
<li>The credit limit and terms requested.</li>
<li>A signed acceptance of your terms, including late payment interest and the right to suspend supply.</li>
</ul>
<p>Then verify what you can. Check the company exists and is active in the official register: in the UK, for example, <a href="https://find-and-update.company-information.service.gov.uk/" target="_blank" rel="noopener noreferrer">Companies House</a> shows filing history and any overdue accounts. Call the trade references and ask how much credit they extend and how promptly the customer pays. For larger limits, consider a report from a commercial credit agency and ask for recent financial statements.</p>

<h2>Step 3: Calculate the credit limit</h2>
<p>A credit limit is the maximum the customer may owe you at any one time, including invoices not yet due. A practical formula uses expected purchases and how long invoices actually stay open:</p>
<p><strong>Credit limit ≈ expected monthly purchases × (expected days to pay ÷ 30)</strong></p>
<p>Then apply judgment. Reduce the result for thin or negative information, and cap it at the amount you could lose without endangering your own business.</p>

<h3>Credit limit worked example</h3>
<p>Illustrative figures for a packaging supplier evaluating a new retail customer:</p>
<ul>
<li>Expected purchases: $8,000 per month.</li>
<li>Requested terms: net 30. Trade references say the customer pays in about 40 to 45 days. Use 45.</li>
<li>Base limit: $8,000 × (45 ÷ 30) = $8,000 × 1.5 = <strong>$12,000</strong>.</li>
<li>Risk adjustment: the company has traded for only two years and one reference was mixed. The supplier applies a 25% reduction: $12,000 × 0.75 = <strong>$9,000</strong>.</li>
<li>Affordability cap: the supplier decides no new customer may owe more than $10,000, because a loss above that would wipe out a month's profit. $9,000 is below the cap, so it stands.</li>
</ul>
<p>The customer gets a $9,000 limit on net 30, reviewed after six months. If they pay reliably within terms, the supplier can raise it toward the base $12,000. Note what the limit means in practice: with $8,000 of orders a month, the customer will hit the limit if more than about one month of invoices is unpaid, which is exactly when you want a conversation to happen.</p>

<h2>Credit risk tiers: matching terms to risk</h2>
<p>Many businesses group customers into tiers so decisions stay consistent. An example structure:</p>
<table><thead><tr><th>Tier</th><th>Typical profile</th><th>Terms</th><th>Limit approach</th><th>Review</th></tr></thead><tbody>
<tr><td>A: Low risk</td><td>Long history, strong references, pays on time</td><td>Net 30 (longer only if priced in)</td><td>Full calculated limit</td><td>Annually</td></tr>
<tr><td>B: Standard</td><td>Some history, acceptable references</td><td>Net 30 or net 15</td><td>Calculated limit less 20–30%</td><td>Every six months</td></tr>
<tr><td>C: Higher risk</td><td>New company, thin or mixed information</td><td>Deposit plus net 15, or payment on delivery</td><td>Small limit or none</td><td>Quarterly</td></tr>
<tr><td>D: Cash only</td><td>Past defaults, failed checks, no information</td><td>Payment upfront</td><td>No credit</td><td>On request</td></tr>
</tbody></table>
<p>If a large customer insists on long terms, see our article on <a href="/blog/net-60-net-90-payment-terms">net 60 and net 90 payment terms</a> for how to price the extra time into your quote.</p>

<h2>Security options when the risk is higher</h2>
<p>Sometimes the calculated limit is lower than the customer needs, but the business is still worth winning. Instead of saying no, your customer credit policy can list ways to reduce the risk:</p>
<ul>
<li><strong>Deposits or staged payments.</strong> Collect a percentage before work starts and invoice the rest at milestones, so your exposure never reaches the full contract value.</li>
<li><strong>Shorter terms.</strong> Net 15 instead of net 30 halves the amount outstanding for the same monthly sales.</li>
<li><strong>Personal guarantees.</strong> For small companies, an owner's guarantee adds a second source of payment. Have the wording reviewed by a lawyer.</li>
<li><strong>Retention of title.</strong> A clause stating that goods remain yours until paid for can help recover stock if a customer fails, depending on local law and how the goods are used.</li>
<li><strong>Trade credit insurance.</strong> An insurer covers a share of the loss if an approved customer does not pay. Premiums and the insurer's own limits apply.</li>
<li><strong>Letters of credit.</strong> For export orders, a bank undertakes to pay against compliant documents. Our guide to the <a href="/blog/letter-of-credit-invoice">letter of credit invoice</a> explains what the bank checks.</li>
</ul>

<h2>Handling a request for a higher limit</h2>
<p>Good customers grow, and growth often arrives as a request to raise the limit. Treat it as a fresh, smaller credit decision rather than an automatic yes. Look at how the customer has paid so far: average days to pay, any disputes, any returned payments. Ask why the higher limit is needed; a seasonal peak justifies a temporary increase with an end date, while a permanent increase in orders justifies recalculating the limit with the formula above. If the information supports the increase, approve it in writing with the new figure and the review date. If it does not, offer an alternative, such as a higher limit in exchange for shorter terms or a deposit on large orders. Customers usually accept a clear, reasoned answer more readily than a vague delay.</p>

<h2>Step 4: Put the terms on every invoice</h2>
<p>A credit policy only works if every invoice reflects it. State the due date as a calendar date, not just "net 30," show the payment methods you accept, and include any late payment interest your contract allows. Our guide to <a href="/blog/late-payment-fees">late payment fees</a> covers how to word them. You can add all of these to the notes and terms field in the <a href="/invoice-generator">free invoice generator</a>, which also shows the amount paid and the balance due so customers on installments can see what remains.</p>

<h2>Step 5: Monitor accounts and act early</h2>
<p>Credit risk changes over time. Build a short monthly routine:</p>
<ul>
<li>Run an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> and look at every customer with a balance over 30 days past due.</li>
<li>Compare each customer's balance with its limit. Flag anyone above 80%.</li>
<li>Watch for changes in behavior: a customer who always paid at 30 days now paying at 50 is a stronger signal than one who always paid at 50.</li>
<li>Track your overall <a href="/blog/days-sales-outstanding">days sales outstanding</a> to see whether credit is loosening across the board.</li>
</ul>
<p>Set an escalation ladder in advance, for example: reminder at 1 day overdue, phone call at 14 days, order hold at 30 days, final notice at 45 days, and collections or legal action after 60 days. The <a href="/blog/invoice-collections">invoice collections guide</a> covers each stage in more detail.</p>

<h2>Common credit policy mistakes</h2>
<ul>
<li><strong>Letting sales set the limit.</strong> Limits approved by the person paid on the sale tend to be generous. Separate the decision, even informally.</li>
<li><strong>Never reviewing limits.</strong> A limit set three years ago reflects a different customer and a different economy.</li>
<li><strong>Ignoring concentration.</strong> If one customer owes a third of your receivables, its failure becomes yours. Cap exposure to any single customer.</li>
<li><strong>Extending terms without pricing them.</strong> Longer terms tie up cash. Your <a href="/blog/working-capital">working capital</a> pays for every extra day.</li>
<li><strong>Not getting terms signed.</strong> Late payment interest and suspension rights are much easier to enforce when the customer has agreed to them in writing.</li>
<li><strong>Treating overdue as normal.</strong> If you keep shipping to a customer who is 60 days late, you are increasing a loan that is already in trouble.</li>
<li><strong>No write-off rule.</strong> Without one, uncollectible balances sit in receivables for years and overstate your assets. Our guide to the <a href="/blog/bad-debt-write-off">bad debt write-off</a> explains the process.</li>
</ul>

<h2>Customer credit policy checklist</h2>
<ul>
<li>Written eligibility rules, including the default for new customers.</li>
<li>Standard credit application form with signed acceptance of terms of sale.</li>
<li>Verification steps: official register, trade references, credit report above a set limit.</li>
<li>Credit limit formula and a maximum exposure per customer.</li>
<li>Named approvers for new limits and temporary increases.</li>
<li>Risk tiers with matching terms and review frequency.</li>
<li>Due date, payment methods and late payment terms printed on every invoice.</li>
<li>Monthly aging review with limit utilization flagged.</li>
<li>Escalation ladder with days and actions.</li>
<li>Write-off rule with approval and documentation steps.</li>
</ul>

<h2>Next step</h2>
<p>Write the first version of your policy this week, even if it is half a page. List your top ten customers by balance, calculate a credit limit for each using the formula above, and compare it with what they owe today. Any customer already above its calculated limit deserves a conversation now, not after the next missed payment.</p>
`,
  },
  {
    slug: "short-payments-and-deductions",
    title: "Short Payments and Deductions: Handling Underpaid Invoices",
    description:
      "Got a short payment on an invoice? Learn why customers underpay, how to sort valid from invalid deductions, what to say and how to record the balance.",
    category: "payments",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["cash-application", "invoice-dispute", "partial-payment-invoice"],
    faqs: [
      {
        q: "What is a short payment on an invoice?",
        a: "A short payment, or short pay, happens when a customer pays less than the full amount due on an invoice without a prior agreement to pay in installments. The gap might come from a bank fee, a discount the customer took, a deduction for damaged or missing goods, a pricing disagreement or a simple error. Until it is explained and resolved, the unpaid balance stays open on the invoice.",
      },
      {
        q: "What is the difference between a short payment and a partial payment?",
        a: "A partial payment is planned: both sides agreed the invoice would be paid in parts, such as a deposit followed by a balance. A short payment is unplanned: the customer intended to settle the invoice but paid less than its full amount, often with a deduction. Both leave a balance open, but a short payment usually needs investigation before you know whether the balance is still collectible.",
      },
      {
        q: "Should I write off small short payments?",
        a: "Many businesses set a small-balance threshold below which chasing costs more than the amount, and write off differences under that figure. That is reasonable if the threshold is written down, applied consistently and reviewed. Be careful with repeat patterns: a customer who deducts a small amount from every invoice can cost you a meaningful sum over a year, and the cause usually deserves fixing.",
      },
      {
        q: "Who pays international wire fees, the sender or the receiver?",
        a: "It depends on the charge option chosen when the payment is sent. With the common SHA option, sender and receiver each pay their own bank's fees, and intermediary banks may also deduct charges, so less arrives than was sent. With OUR, the sender asks to pay all charges. With BEN, the receiver bears them. State on your invoice that bank charges are for the payer's account if that is your agreement.",
      },
      {
        q: "What is a deduction in accounts receivable?",
        a: "A deduction is an amount a customer subtracts from a payment and explains, or claims, with a reason such as a promotional allowance, a pricing difference, a shortage, damaged goods, a return or a penalty for late or non-compliant delivery. Deductions are especially common when selling to large retailers. Each one needs to be validated against your agreement and either accepted with a credit note or disputed with evidence.",
      },
      {
        q: "Should I issue a credit note for a valid deduction?",
        a: "Yes, in most cases. If you agree the customer is entitled to the deduction, issue a credit note referencing the original invoice and the reason, then apply it against the open balance. This keeps your sales and tax records correct and gives both sides a clear document. Simply writing the difference off without a credit note can leave your sales tax or VAT figures overstated.",
      },
      {
        q: "How do I ask a customer about a short payment without damaging the relationship?",
        a: "Keep it factual and specific. Quote the invoice number, the amount invoiced, the amount received and the difference, and ask whether a deduction was intended and, if so, for what reason. Offer to send a copy of the invoice or proof of delivery. Most short payments turn out to be fees or administrative errors, so assume good faith while still asking clearly.",
      },
      {
        q: "Can a customer deduct money from an invoice without my agreement?",
        a: "Customers sometimes do, but whether they are entitled to depends on your contract and local law. If your terms do not allow set-off or penalties, an unagreed deduction is generally still owed to you, and you can pursue it like any other unpaid balance. Read your contract and the customer's supplier terms carefully, and get legal advice for large or recurring disputed amounts.",
      },
      {
        q: "How do I show the remaining balance on a new invoice?",
        a: "Do not change the original invoice. Send a statement of account or a reminder that lists the original invoice, the payment received and the balance still due. If you use our invoice generator, you can recreate the invoice with the same number and details for reference and enter the amount paid, so the PDF shows the remaining balance due clearly.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A short payment is when a customer pays less than the invoice total without an agreed installment plan. Handle it by applying what was received, recording the gap as an open item, finding the reason, then either accepting it with a credit note or disputing it with evidence. Log every short payment invoice and its cause to prevent repeats.</p>

<p>A payment arrives, you go to mark the invoice paid, and the numbers do not match. Maybe $25 is missing, maybe $1,800. It is tempting either to ignore a small gap or to fire off an angry email about a big one. Neither works well. Short payments and deductions are a normal part of B2B selling, and most have an ordinary explanation. What matters is having a consistent way to sort them, recover what you are owed and stop the same issue recurring. This guide covers the causes, a step-by-step process, a worked example, wording you can use and the mistakes to avoid.</p>

<h2>Why customers underpay invoices</h2>
<p>Most short payments fall into a handful of groups. Knowing the group tells you who should deal with it.</p>
<table><thead><tr><th>Cause</th><th>Example</th><th>Usually valid?</th><th>Who resolves it</th></tr></thead><tbody>
<tr><td>Bank or transfer fees</td><td>Intermediary bank deducts a fee from an international wire</td><td>Depends on agreed charge terms</td><td>Finance; fix payment instructions</td></tr>
<tr><td>Early payment discount</td><td>Customer takes 2% for paying within 10 days</td><td>Valid if paid within the window</td><td>Finance</td></tr>
<tr><td>Late discount</td><td>Customer takes the 2% after the window closed</td><td>Not valid under the terms</td><td>Finance, with a policy decision</td></tr>
<tr><td>Pricing difference</td><td>Invoice price differs from the purchase order price</td><td>Depends on which price was agreed</td><td>Sales and finance</td></tr>
<tr><td>Shortage or damage</td><td>Customer received 95 units instead of 100</td><td>Valid if supported by delivery evidence</td><td>Operations</td></tr>
<tr><td>Returns</td><td>Goods sent back, credit not yet issued</td><td>Usually valid once return is confirmed</td><td>Operations and finance</td></tr>
<tr><td>Promotional or rebate allowance</td><td>Retailer deducts an agreed marketing allowance</td><td>Valid if in the trade agreement</td><td>Sales</td></tr>
<tr><td>Compliance penalties</td><td>Retailer fines late delivery or wrong labeling</td><td>Only if in the agreed supplier terms</td><td>Operations and sales</td></tr>
<tr><td>Withholding tax</td><td>Customer withholds a percentage for the tax authority</td><td>Often required by law</td><td>Finance, with tax certificate</td></tr>
<tr><td>Error</td><td>Keying mistake, wrong invoice paid, duplicate credit taken</td><td>No</td><td>Finance</td></tr>
</tbody></table>
<p>Withholding tax deserves a special mention because it is not really a short payment: in many countries the customer must pay part of the invoice to the tax authority on your behalf. Our guide to <a href="/blog/withholding-tax-on-invoices">withholding tax on invoices</a> explains how to record it and why you need the certificate.</p>

<h2>How to handle a short payment, step by step</h2>
<ol>
<li><strong>Apply the cash you received.</strong> Record the payment against the invoice so the balance shows the real shortfall. Do not leave the whole payment unapplied while you investigate. Our guide to <a href="/blog/cash-application">cash application</a> explains how to post it.</li>
<li><strong>Log the gap as an exception.</strong> Note the invoice number, customer, amount, date and any reason code the customer gave. A simple spreadsheet works.</li>
<li><strong>Look for the reason in what you already have.</strong> Check the <a href="/blog/remittance-advice">remittance advice</a>, the purchase order, delivery notes, emails and any credit notes already issued.</li>
<li><strong>Ask the customer if the reason is missing.</strong> Be specific about amounts and invoice numbers, and ask for supporting documents for any claim.</li>
<li><strong>Decide: valid or invalid.</strong> Compare the reason with your contract, your terms and your evidence.</li>
<li><strong>If valid, issue a credit note.</strong> Reference the original invoice and the reason, and apply the credit to close the balance. Our <a href="/blog/credit-note-guide">credit note guide</a> covers what to include.</li>
<li><strong>If invalid, dispute it.</strong> Send your evidence, restate the amount due and give a payment date. Follow the process in our article on <a href="/blog/invoice-dispute">resolving an invoice dispute</a>.</li>
<li><strong>If uneconomic to chase, write it off under your threshold.</strong> Record the write-off with the reason and approval.</li>
<li><strong>Fix the cause.</strong> Change payment instructions, correct pricing, improve packing or tighten your terms so the same short payment does not happen again.</li>
</ol>

<h2>Short payment worked example</h2>
<p>Illustrative numbers for a food producer selling to a regional grocery chain. Invoice INV-2207 is for:</p>
<ul>
<li>200 cases at $36.00 = $7,200.00</li>
<li>Sales tax at 0% (wholesale for resale, exemption certificate on file)</li>
<li>Invoice total: <strong>$7,200.00</strong>, terms 2/10 net 30</li>
</ul>
<p>The customer pays <strong>$6,724.80</strong> on day 8 with a remittance showing three deductions. Total shortfall: $7,200.00 − $6,724.80 = $475.20.</p>
<ul>
<li><strong>Early payment discount, $144.00.</strong> 2% × $7,200.00 = $144.00. Paid on day 8, inside the 10-day window. Valid.</li>
<li><strong>Shortage, $180.00.</strong> The customer says 5 cases were missing: 5 × $36.00 = $180.00. The carrier's signed delivery note shows 200 cases received without exception. Invalid, unless the customer can show a later count.</li>
<li><strong>Promotional allowance, $151.20.</strong> The customer deducted 2.1% for a store promotion: 2.1% × $7,200.00 = $151.20. The trade agreement provides a 2.0% allowance: 2% × $7,200.00 = $144.00. Valid up to $144.00; $7.20 overclaimed.</li>
</ul>
<p>Check: $144.00 + $180.00 + $151.20 = $475.20, which matches the shortfall.</p>
<p>Resolution: the producer records the $144.00 discount and issues a credit note for the $144.00 promotional allowance. That leaves $180.00 + $7.20 = <strong>$187.20</strong> disputed. The producer sends the signed delivery note and a copy of the trade agreement, asks for $187.20 by a set date, and shows the balance on the next <a href="/blog/statement-of-account">statement of account</a>. Notice that the discount was valid because the customer paid within the window. Had the payment arrived on day 14, the $144.00 discount would also have been disputed under the terms.</p>

<h2>What to say: short payment email template</h2>
<p>Keep the tone neutral and the facts precise. For example:</p>
<p><em>Subject: Invoice INV-2207 – balance of $187.20</em></p>
<p><em>Hello [name], thank you for your payment of $6,724.80 received on [date] against invoice INV-2207 ($7,200.00). We have applied the 2% early payment discount ($144.00) and issued credit note CN-0310 for the 2% promotional allowance ($144.00) under our trade agreement. Two items remain: a $180.00 deduction for 5 missing cases, and $7.20 of the promotional deduction above the agreed 2%. The attached delivery note shows 200 cases signed for without exception. Please arrange payment of $187.20 by [date], or send any documents that support the shortage claim. Happy to discuss.</em></p>

<h2>Preventing short payments before they happen</h2>
<h3>Make the invoice match the order</h3>
<p>Pricing deductions usually start with a mismatch between the invoice and the purchase order. Quote the PO number, use the same item descriptions and unit prices, and itemize clearly. Build each invoice in the <a href="/invoice-generator">free invoice generator</a> from the PO, line by line, so the totals reconcile on the customer's side too.</p>
<h3>Be explicit about bank charges</h3>
<p>For international customers, state who pays transfer fees and ask payers to choose the option that sends the full amount, where your agreement says they should. Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers currency and fee wording.</p>
<h3>Spell out discount windows</h3>
<p>If you offer an early payment discount, print the exact last date and the discounted amount on the invoice. Our article on the <a href="/blog/early-payment-discount">early payment discount</a> shows how to word it so late discounts are easy to challenge.</p>
<h3>Keep proof of delivery</h3>
<p>Signed delivery notes, photos at dispatch and carrier tracking records turn a shortage claim from an argument into a quick check.</p>

<h2>Recording short payments in your books</h2>
<p>How you record the gap depends on how it is resolved. Your accountant may use different account names, but the principles are consistent:</p>
<ul>
<li><strong>While under investigation:</strong> the unpaid amount stays in accounts receivable against the original invoice. Do not move it anywhere else yet.</li>
<li><strong>Valid discount:</strong> record it as a sales discount, which reduces revenue.</li>
<li><strong>Valid allowance, shortage or return:</strong> issue a credit note. Where sales tax or VAT was charged, the credit note also reduces the tax you owe on that sale, which a plain write-off would not do.</li>
<li><strong>Bank charges you agree to absorb:</strong> record them as a bank charges expense, not as lost revenue.</li>
<li><strong>Withholding tax:</strong> record it as tax paid on your behalf, supported by the customer's certificate, rather than as a loss.</li>
<li><strong>Uncollectible balance:</strong> write it off as bad debt with documentation. Our guide to the <a href="/blog/bad-debt-write-off">bad debt write-off</a> explains the steps and records to keep.</li>
</ul>
<p>Using the right treatment matters beyond tidiness. If every gap goes into one "sundry write-offs" account, you cannot see whether you are losing money to bank fees, to pricing errors or to customers who simply take what they like.</p>

<h2>Deductions from large retail customers</h2>
<p>If you sell to supermarkets, big-box stores or large distributors, deductions can become a steady stream rather than an occasional surprise. Large buyers often publish supplier manuals listing fines for late deliveries, incorrect labels or missing advance shipping notices, and they usually set a deadline for disputing a deduction. Treat those manuals as part of your contract: read them before you sign, train your warehouse on the requirements and keep the evidence each requirement calls for. Review deductions by reason code every month. A rising number of compliance fines often points to one fixable operational step, such as a labeling printer or a carrier that routinely misses delivery slots.</p>

<h2>Common mistakes with short payments and deductions</h2>
<ul>
<li><strong>Writing off everything small.</strong> Without a pattern review, repeat deductions become a hidden price cut.</li>
<li><strong>Editing the original invoice.</strong> Never change an issued invoice to match what was paid. Use a credit note for valid deductions and leave the invoice intact.</li>
<li><strong>Leaving the balance unapplied.</strong> If the full payment sits unapplied, the whole invoice looks unpaid and reminders go out for the wrong amount.</li>
<li><strong>Disputing without evidence.</strong> A dispute is only as strong as your delivery notes, contract and correspondence.</li>
<li><strong>Waiting too long.</strong> Many large customers have time limits for raising deduction disputes in their supplier terms. Raise yours promptly.</li>
<li><strong>Not involving operations or sales.</strong> Finance cannot fix packing errors or unclear promotions alone.</li>
</ul>

<h2>Short payment handling checklist</h2>
<ul>
<li>Payment applied to the invoice the day it arrives; shortfall visible as an open balance.</li>
<li>Exception logged with invoice number, amount, reason code and owner.</li>
<li>Remittance, PO, delivery proof and contract checked before contacting the customer.</li>
<li>Customer asked, in writing, for the reason and supporting documents.</li>
<li>Valid deductions closed with a credit note referencing the invoice.</li>
<li>Invalid deductions disputed with evidence and a payment date.</li>
<li>Write-offs only below a written threshold, with approval.</li>
<li>Monthly review of deduction causes by customer and reason.</li>
<li>Root cause fixed: pricing, payment instructions, packing or terms.</li>
</ul>

<h2>Know your rights on unpaid balances</h2>
<p>An unpaid short balance is, legally, usually just an unpaid invoice. In some jurisdictions you can claim statutory interest on late commercial payments. In the UK, for example, the government's guidance on <a href="https://www.gov.uk/late-commercial-payments-interest-debt-recovery" target="_blank" rel="noopener noreferrer">late commercial payments</a> explains the interest and fixed compensation businesses can claim. Rules differ by country and contract, so check before you add interest to a disputed amount.</p>

<h2>Next step</h2>
<p>Pull every open short payment from the last three months into one list and sort by reason. If one cause dominates, such as bank fees or pricing mismatches, fix that first. For more on getting paid in full and on time, browse our <a href="/blog/category/payments">payments articles</a>.</p>
`,
  },
  {
    slug: "sepa-direct-debit",
    title: "SEPA Direct Debit for Invoices: How It Works for Businesses",
    description:
      "SEPA Direct Debit explained for invoicing: Core vs B2B schemes, mandates, creditor IDs, pre-notification and refund rights, plus a setup checklist.",
    category: "payments",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "wero-payments-europe",
      "uk-direct-debit",
      "recurring-invoices-guide",
      "bank-details-on-invoice",
      "foreign-currency-invoice",
    ],
    faqs: [
      {
        q: "What is SEPA Direct Debit?",
        a: "SEPA Direct Debit is a euro payment scheme that lets a business, the creditor, collect money directly from a customer's bank account, the debtor, once the customer has signed a mandate authorizing it. It works across the Single Euro Payments Area using IBANs, so a company in one SEPA country can collect from customers in another. The rules are set by the European Payments Council in two schemes: Core and B2B.",
      },
      {
        q: "What is the difference between SEPA Core and SEPA B2B direct debit?",
        a: "The Core scheme can be used with consumers and businesses and gives the payer strong refund rights, including a no-questions-asked refund within eight weeks of an authorized debit. The B2B scheme is only for business payers, requires the payer's bank to check the mandate before the first collection, and does not give a refund right for authorized debits. B2B suits large invoices where certainty of payment matters.",
      },
      {
        q: "What is a SEPA creditor identifier?",
        a: "A creditor identifier, often shortened to CI or creditor ID, is a reference that identifies the business collecting direct debits. It appears on every mandate and collection so payers and banks can see who is collecting. Depending on the country, it is issued by the national central bank or by your bank. You need one before you can start collecting SEPA direct debits.",
      },
      {
        q: "How far in advance must I notify a customer before a SEPA collection?",
        a: "The default in the SEPA rulebooks is at least 14 calendar days before the collection date, unless you and the customer agree a different period, typically in your terms or the mandate. The notice tells the customer the amount and the date, and can be included on the invoice itself. For recurring fixed amounts, one notice can cover a schedule of collections.",
      },
      {
        q: "Can a customer reverse a SEPA direct debit?",
        a: "Under the Core scheme, yes. A payer can ask their bank for a refund of an authorized debit within eight weeks of the debit date without giving a reason, and can claim for an unauthorized debit, one without a valid mandate, for up to 13 months. Under the B2B scheme there is no refund right for authorized debits. In both schemes, collections can also be rejected or returned for reasons such as a closed account.",
      },
      {
        q: "Does a SEPA mandate expire?",
        a: "Yes. A mandate generally lapses if no collection has been made under it for 36 months. After that, you need a new signed mandate before collecting again. The customer can also cancel a mandate at any time by telling you, and in some cases their bank. Keep mandates on file while they are in use and for the period your bank and local rules require afterwards.",
      },
      {
        q: "Can I collect SEPA direct debits in currencies other than euros?",
        a: "No. SEPA Direct Debit collections are in euros only, although the customer's account may be in a non-euro SEPA country as long as it can be debited in euros. If you invoice in another currency, you need a different method, such as a local direct debit scheme, a card payment or a bank transfer, or you invoice in euros and agree the exchange basis upfront.",
      },
      {
        q: "Can the free invoice generator collect SEPA direct debits?",
        a: "No. Our browser-based invoice generator creates PDF invoices with line items, tax, discounts and balance due, but it does not collect payments or connect to banks. You set up SEPA Direct Debit with your bank or a payment provider. You can, however, use the invoice notes to show the mandate reference, your creditor identifier and the collection date, which can also serve as the pre-notification.",
      },
      {
        q: "Is SEPA Direct Debit good for one-off invoices?",
        a: "It can be, but it is strongest for recurring or predictable charges such as subscriptions, retainers, rent and regular supply contracts. For a single invoice, asking a customer to sign a mandate can feel heavy compared with a bank transfer or card payment. One-off mandates exist, and some businesses use them for large single payments, especially under the B2B scheme.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> SEPA direct debit lets a business collect euro invoice payments straight from a customer's bank account after the customer signs a mandate. You need a creditor identifier, must pre-notify the amount and date (14 days by default), and must choose the Core scheme, with strong refund rights, or the business-only B2B scheme.</p>

<p>If you invoice customers in the eurozone or elsewhere in Europe, chasing bank transfers each month is a slow way to get paid. SEPA Direct Debit flips the process: instead of waiting for the customer to send money, you collect it on the due date under an authorization they have already given. For subscriptions, retainers and regular supply contracts, that can make cash flow far more predictable. This guide explains how the schemes work, what you need to set them up, how invoices and pre-notifications fit together, and where businesses most often go wrong. It is general information; your bank's terms and the official rulebooks govern the details.</p>

<h2>What is SEPA Direct Debit?</h2>
<p>SEPA stands for the Single Euro Payments Area: the EU and EEA countries plus several others, including Switzerland and the United Kingdom, where euro payments follow common rules. The <a href="https://www.europeanpaymentscouncil.eu/what-we-do/sepa-direct-debit" target="_blank" rel="noopener noreferrer">European Payments Council</a> maintains the SEPA Direct Debit rulebooks that banks follow.</p>
<p>Four parties are involved in every collection:</p>
<ul>
<li><strong>Creditor:</strong> your business, which collects the money.</li>
<li><strong>Debtor:</strong> your customer, who pays.</li>
<li><strong>Creditor bank:</strong> your bank, which submits the collection.</li>
<li><strong>Debtor bank:</strong> the customer's bank, which debits their account.</li>
</ul>
<p>The customer signs a mandate authorizing you to collect, you tell them in advance what you will collect and when, and your bank submits the collection to arrive on the due date. All collections are in euros and use IBANs to identify accounts.</p>

<h2>SEPA Core vs SEPA B2B direct debit</h2>
<p>There are two schemes. Choosing the right one is the first decision, because it affects who can pay you, what protection they have and how much paperwork is involved.</p>
<table><thead><tr><th>Feature</th><th>SEPA Core</th><th>SEPA B2B</th></tr></thead><tbody>
<tr><td>Who can be the payer</td><td>Consumers and businesses</td><td>Businesses only (not consumers)</td></tr>
<tr><td>Refund of authorized debits</td><td>Yes, on request within 8 weeks, no reason needed</td><td>No refund right</td></tr>
<tr><td>Refund of unauthorized debits</td><td>Claim within 13 months</td><td>Disputes handled under the B2B rules; no automatic refund</td></tr>
<tr><td>Mandate check by payer's bank</td><td>Not required</td><td>Payer must confirm the mandate with their bank, which checks it before debiting</td></tr>
<tr><td>Bank participation</td><td>Widely offered</td><td>The payer's bank must offer B2B and the account must be eligible</td></tr>
<tr><td>Best suited to</td><td>Subscriptions, consumer services, small business customers</td><td>Larger B2B invoices where payment certainty matters</td></tr>
</tbody></table>
<p>In practice, Core is easier to set up and more widely accepted, but you carry the risk that a customer reclaims an authorized payment within eight weeks. B2B removes that risk but adds friction: your customer has to register the mandate with their bank, and some smaller businesses' banks or accounts may not support it.</p>

<h2>What you need to start collecting</h2>
<ol>
<li><strong>A euro account at a bank or provider that offers SEPA collections.</strong> Many banks require a separate collection agreement and may run a credit check, because they are exposed if refunds exceed your balance.</li>
<li><strong>A creditor identifier.</strong> This reference identifies your business on every mandate and collection. Depending on the country, it is issued by the national central bank or arranged through your bank.</li>
<li><strong>A mandate form.</strong> The mandate must contain specific information, including your name, address and creditor identifier, the customer's name and IBAN, a unique mandate reference, whether it is for recurring or one-off payments, the scheme, and the customer's signature or an approved electronic equivalent.</li>
<li><strong>A way to submit collections.</strong> Usually a bank file upload, online banking or a payment provider's dashboard or API.</li>
<li><strong>A process for pre-notification, failures and refunds.</strong> These are covered below.</li>
</ol>

<h2>How SEPA Direct Debit works with your invoices</h2>
<p>Direct debit changes how you collect, not whether you invoice. You still issue an invoice with all the details your tax rules require; the difference is that the payment section says the amount will be collected rather than asking the customer to transfer it.</p>
<h3>Pre-notification</h3>
<p>Before each collection, the customer must be told the amount and the date. The rulebook default is at least 14 calendar days, but you can agree a shorter period with the customer, for example in your terms of service or on the mandate. Many businesses use the invoice itself as the pre-notification by stating clearly: "This invoice will be collected by SEPA Direct Debit from IBAN DE89 **** **** 3000 on 15 November 2026 under mandate reference ACME-00172, creditor identifier [your CI]."</p>
<p>You can add that wording in the notes field of the <a href="/invoice-generator">free invoice generator</a>. Masking most of the IBAN is a common courtesy. If you charge a fixed amount every month, one notice listing the schedule can cover multiple collections.</p>
<h3>Due dates and lead times</h3>
<p>Your bank must receive the collection before its cut-off so it reaches the customer's bank in time for the due date. Scheme lead times were shortened in recent years, and many banks now accept Core collections up to about one business day before the due date, but each bank sets its own cut-off. Plan a few days of buffer, especially around TARGET closing days, such as Good Friday, Easter Monday, 1 May and 25 and 26 December, when euro interbank settlement does not run. Our guide to the <a href="/blog/invoice-due-date">invoice due date</a> explains how to choose dates that work for both sides.</p>
<h3>Failed collections</h3>
<p>Collections can fail before or after settlement for reasons such as insufficient funds, a closed account, a cancelled mandate or a customer refund request. These exceptions are often grouped under the term "R-transactions" (rejects, returns, refunds and so on). Each one means the invoice is unpaid again, so your <a href="/blog/cash-application">cash application process</a> must reverse the receipt and your reminder process must pick it up.</p>

<h2>SEPA direct debit worked example</h2>
<p>An illustrative case: a software studio in Ireland charges 40 business customers a monthly support retainer of €500 plus 23% Irish VAT where it applies. For simplicity, assume all 40 are Irish VAT-registered businesses charged VAT.</p>
<ul>
<li>VAT per invoice: €500 × 23% = €115.</li>
<li>Invoice total: €500 + €115 = €615.</li>
<li>Monthly collections: 40 × €615 = €24,600.</li>
</ul>
<p><strong>Before direct debit:</strong> in this example, customers paid by bank transfer an average of 18 days after the due date. With €24,600 invoiced each month and payments arriving 18 days late on average, roughly 18 ÷ 30 × €24,600 = <strong>€14,760</strong> is tied up in overdue receivables at any time.</p>
<p><strong>After direct debit:</strong> the studio sends invoices on the 1st with a pre-notification for collection on the 15th, at least 14 days later. Suppose 2 of 40 collections fail in a typical month, a 5% failure rate in this example: 2 × €615 = €1,230 to chase manually. The studio now has about €23,370 (€24,600 − €1,230) arriving on a known date instead of trickling in late.</p>
<p>The costs to weigh are bank or provider fees per collection, fees for failed collections and the admin of collecting mandates. If the provider charges, say, €0.40 per collection, that is 40 × €0.40 = €16 a month: small compared with the cash released. Your figures will differ, so ask your bank for its tariff.</p>

<h2>Refund rights and how to manage the risk</h2>
<p>Under the Core scheme, a customer can request a refund of an authorized debit from their bank within eight weeks, without giving a reason, and the bank refunds it. That does not cancel the debt: if the invoice was valid, the customer still owes you. But you have to go back to chasing it like any other overdue invoice.</p>
<p>Ways to reduce refund risk:</p>
<ul>
<li>Pre-notify clearly so no collection surprises the customer.</li>
<li>Use descriptive references so the debit is recognizable on the customer's statement, ideally including the invoice number.</li>
<li>Resolve disputes before the collection date rather than collecting a disputed amount.</li>
<li>Use the B2B scheme for large business invoices where a refund would hurt.</li>
<li>Keep signed mandates and pre-notifications on file as evidence.</li>
</ul>
<p>Refunds for unauthorized debits, where there was no valid mandate, can be claimed for up to 13 months under Core. That is why mandate records matter: without one, you cannot prove the collection was authorized.</p>

<h2>Common SEPA direct debit mistakes</h2>
<ul>
<li><strong>Collecting without a signed mandate.</strong> An unauthorized collection exposes you to refund claims for months and can damage your relationship with your bank.</li>
<li><strong>Skipping pre-notification.</strong> Even if the amount is the same as last month, the customer must know what is coming and when, unless your agreed terms cover the schedule.</li>
<li><strong>Using the wrong scheme.</strong> Collecting from a consumer under B2B is not allowed, and B2B collections fail if the payer has not confirmed the mandate with their bank.</li>
<li><strong>Changing the mandate reference.</strong> Each mandate has a unique reference. Changing it without following the amendment rules can cause rejections.</li>
<li><strong>Forgetting dormant mandates.</strong> A mandate unused for 36 months lapses. Collecting on it again requires a new signature.</li>
<li><strong>Not reconciling failures.</strong> A returned collection shows on the bank statement days after the original credit. If nobody catches it during <a href="/blog/bank-reconciliation">bank reconciliation</a>, the invoice stays marked as paid.</li>
<li><strong>Collecting a disputed amount.</strong> If a customer has raised an issue with an invoice, collecting anyway invites a refund request.</li>
</ul>

<h2>SEPA Direct Debit setup checklist</h2>
<ul>
<li>Euro account and collection agreement with your bank or provider in place.</li>
<li>Creditor identifier obtained and added to mandate templates.</li>
<li>Scheme chosen per customer type: Core for consumers and small customers, B2B where appropriate.</li>
<li>Mandate form contains all required fields and a unique mandate reference per customer.</li>
<li>Signed mandates stored securely, with dates of last use tracked.</li>
<li>Pre-notification wording added to invoices, with amount, date, IBAN (masked), mandate reference and creditor ID.</li>
<li>Collection calendar allows for bank cut-offs and holidays.</li>
<li>Process for rejects, returns and refunds: reverse the receipt, contact the customer, retry or switch method.</li>
<li>Monthly review of failure rates by customer.</li>
</ul>

<h2>Invoice details that make SEPA collections smoother</h2>
<p>Show your own <a href="/blog/bank-details-on-invoice">bank details on the invoice</a> too, so customers who prefer or need to pay by transfer can do so. For cross-border sales, check the VAT treatment, since a B2B sale to another EU country may fall under the reverse charge; see our <a href="/blog/vat-invoice-guide">VAT invoice guide</a>. If you also sell outside the euro area, our article on the <a href="/blog/foreign-currency-invoice">foreign currency invoice</a> covers what to show when the invoice and the collection currency differ. For regular charges, combine direct debit with the approach in our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> so every invoice and collection follow the same schedule.</p>

<h2>Next step</h2>
<p>Ask your bank three questions: whether it offers SEPA Core and B2B collections, what it charges per collection and per failure, and how you obtain a creditor identifier. Then draft your mandate form and add pre-notification wording to your invoice template. For more on getting paid reliably, see our <a href="/blog/category/payments">payments guides</a>.</p>
`,
  },
  {
    slug: "letter-of-credit-invoice",
    title: "Letter of Credit Invoice: Documents and Discrepancies",
    description:
      "How to prepare a letter of credit invoice that banks accept: UCP 600 rules, matching the credit's wording, tolerances, deadlines and common discrepancies.",
    category: "payments",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "commercial-invoice-template",
      "incoterms-on-invoice",
      "invoice-international-clients",
    ],
    faqs: [
      {
        q: "What is a letter of credit invoice?",
        a: "A letter of credit invoice is the commercial invoice an exporter presents to a bank, together with other required documents, to get paid under a documentary credit. Under UCP 600, the bank pays only if the documents comply with the terms of the credit. That means the invoice must match the credit's wording on details such as the parties, currency, goods description, quantities, prices and trade terms.",
      },
      {
        q: "What does UCP 600 say about the commercial invoice?",
        a: "Article 18 of UCP 600 says that, unless the credit states otherwise, the commercial invoice must appear to have been issued by the beneficiary, must be made out in the name of the applicant, must be in the same currency as the credit and need not be signed. The description of the goods, services or performance on the invoice must correspond with the description in the credit.",
      },
      {
        q: "What is a discrepancy in a letter of credit?",
        a: "A discrepancy is any way in which the presented documents fail to comply with the credit, with UCP 600 or with international standard banking practice. Examples include a wrong amount, a goods description that differs from the credit, a missing document, conflicting data between documents or a late presentation. If a bank finds a discrepancy, it can refuse to pay and must give notice listing every discrepancy.",
      },
      {
        q: "Does the invoice description have to match the credit word for word?",
        a: "The invoice description must correspond with the credit's description of the goods. In practice, banks look for the invoice to reflect the credit's description without conflicting with it; extra detail may be acceptable as long as it does not contradict the credit or describe different goods. The safest approach is to copy the credit's goods description exactly and add any extra detail separately.",
      },
      {
        q: "Can the invoice amount exceed the credit amount?",
        a: "Under UCP 600 article 18(b), a bank may accept an invoice for more than the amount permitted by the credit, provided it does not honor or negotiate more than the credit allows. In practice, invoicing over the credit amount creates questions and delays, so most exporters keep the invoice within the credit amount and agree any excess separately with the buyer.",
      },
      {
        q: "How long does the bank have to check the documents?",
        a: "Under UCP 600 article 14(b), each nominated bank, confirming bank and the issuing bank has a maximum of five banking days following the day of presentation to decide whether the documents comply. If it refuses, it must send a single notice of refusal listing all discrepancies by the end of the fifth banking day. Banks often finish sooner.",
      },
      {
        q: "What does 'about' or 'approximately' mean in a letter of credit?",
        a: "Under UCP 600 article 30(a), the words 'about' or 'approximately' used with the credit amount, the quantity or the unit price allow a tolerance of up to 10% more or less than the figure they refer to. Without those words, article 30(b) allows a 5% quantity tolerance when the quantity is not stated in packing units or individual items and the drawing does not exceed the credit amount.",
      },
      {
        q: "Can I use a proforma invoice under a letter of credit?",
        a: "A proforma invoice is often used before the credit is opened, so the buyer's bank can see the goods, price and terms. For payment, the credit normally requires a commercial invoice, and banking practice treats an invoice marked provisional or proforma as not meeting that requirement unless the credit allows it. Present a final commercial invoice that matches the shipment and the credit.",
      },
      {
        q: "Can I create a letter of credit invoice in the free invoice generator?",
        a: "You can use our browser-based generator to lay out a clean commercial invoice with the parties, line items, currency, totals and notes, then download it as a PDF. It does not check your document against a credit or submit it to a bank. Copy the credit's wording carefully into the description and notes fields, and have your bank or a trade documentation specialist review it before presentation.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A letter of credit invoice is the commercial invoice you present to a bank to get paid under a documentary credit. Under UCP 600, it must be issued by the beneficiary, made out to the applicant, in the credit's currency, and describe the goods as the credit does. Any mismatch is a discrepancy that can delay or block payment.</p>

<p>A letter of credit, also called a documentary credit, is one of the safest ways for an exporter to get paid by an overseas buyer, because a bank, not just the buyer, undertakes to pay. The catch is that the bank pays against documents, not goods. If the invoice, transport document or certificates do not comply with the credit, the bank can refuse to pay, and the exporter is suddenly back to relying on the buyer's goodwill. The commercial invoice is the document most often prepared in-house, which makes it the one you have most control over. This guide explains the rules, shows how to read a credit before invoicing, works through tolerances and deadlines with numbers, and lists the discrepancies that cause most rejections.</p>

<h2>How a letter of credit works</h2>
<p>In a typical documentary credit transaction:</p>
<ol>
<li>The buyer and seller agree a sale with payment by letter of credit. The seller often sends a <a href="/blog/proforma-invoice-guide">proforma invoice</a> so the buyer can apply.</li>
<li>The buyer (the <strong>applicant</strong>) asks its bank (the <strong>issuing bank</strong>) to open a credit in favor of the seller (the <strong>beneficiary</strong>).</li>
<li>The credit is advised to the seller, usually through a bank in the seller's country (the <strong>advising bank</strong>), which may also add its own undertaking as <strong>confirming bank</strong>.</li>
<li>The seller ships the goods and prepares the documents the credit requires: commercial invoice, transport document, packing list, insurance document, certificate of origin and so on.</li>
<li>The seller presents the documents to the nominated bank before the deadlines. The banks examine them and, if they comply, pay or accept according to the credit's terms.</li>
</ol>
<p>Most credits are issued subject to UCP 600, the Uniform Customs and Practice for Documentary Credits published by the <a href="https://iccwbo.org/" target="_blank" rel="noopener noreferrer">International Chamber of Commerce (ICC)</a>. The ICC also publishes International Standard Banking Practice (ISBP), most recently revised as ISBP 821 in 2023, which explains how banks examine each type of document. ISBP does not change UCP 600; it explains how banks apply it.</p>

<h2>UCP 600 rules for the commercial invoice</h2>
<p>Article 18 of UCP 600 sets the core requirements. Unless the credit says otherwise, the commercial invoice:</p>
<ul>
<li>must appear to have been issued by the beneficiary (with an exception for transferred credits);</li>
<li>must be made out in the name of the applicant;</li>
<li>must be made out in the same currency as the credit;</li>
<li>need not be signed.</li>
</ul>
<p>Article 18(c) adds that the description of the goods, services or performance in the commercial invoice must correspond with that appearing in the credit. Article 14(d) adds a consistency rule: data in a document, read in context with the credit, the document itself and international standard banking practice, need not be identical to data in other documents but must not conflict with it.</p>
<p>The credit may add its own requirements, such as a signed invoice, a specific number of originals or copies, a statement certifying origin, or the credit number shown on the invoice. Those requirements are part of the terms and must be met exactly.</p>

<h2>Read the credit before you write the invoice</h2>
<p>Most discrepancies start before the invoice is written, when nobody reads the credit closely. When the credit arrives, check it against your sales contract and flag anything you cannot meet, so the buyer can arrange an amendment before shipment. Then extract every detail the invoice must reflect:</p>
<table><thead><tr><th>Invoice field</th><th>Where to find it in the credit</th><th>What to check</th></tr></thead><tbody>
<tr><td>Seller name and address</td><td>Beneficiary field</td><td>Name matches; address in the same country if shown</td></tr>
<tr><td>Buyer name</td><td>Applicant field</td><td>Invoice made out to the applicant exactly</td></tr>
<tr><td>Currency</td><td>Currency and amount field</td><td>Same currency as the credit</td></tr>
<tr><td>Total amount</td><td>Amount field and any tolerance</td><td>Within the credit amount and any allowed tolerance</td></tr>
<tr><td>Goods description</td><td>Description of goods field</td><td>Corresponds with the credit; copy its wording</td></tr>
<tr><td>Quantity and unit price</td><td>Description of goods field</td><td>Within any tolerance; arithmetic correct</td></tr>
<tr><td>Trade term</td><td>Description or additional conditions, e.g. "CIF Rotterdam Incoterms 2020"</td><td>Shown as in the credit</td></tr>
<tr><td>Credit number, PO or contract number</td><td>Documents required or additional conditions</td><td>Included if the credit asks</td></tr>
<tr><td>Number of originals and copies</td><td>Documents required field</td><td>Presented as stated</td></tr>
<tr><td>Signature or certification</td><td>Documents required field</td><td>Signed or certified if required</td></tr>
</tbody></table>
<p>For trade terms, our guide to <a href="/blog/incoterms-on-invoice">Incoterms on an invoice</a> explains how to show them correctly, and our article on the <a href="/blog/hs-code-on-commercial-invoice">HS code on a commercial invoice</a> covers tariff classification when the credit or customs requires it.</p>

<h2>Letter of credit invoice worked example: tolerances and deadlines</h2>
<p>Tolerances and deadlines are where careful arithmetic saves payments. The figures below are illustrative.</p>
<h3>Scenario A: the credit uses "about"</h3>
<p>The credit reads: amount <strong>about USD 50,000.00</strong>; goods: <strong>about 10,000 units</strong> of ceramic tiles at USD 5.00 per unit, CIF Rotterdam Incoterms 2020.</p>
<p>Under UCP 600 article 30(a), "about" allows a tolerance of up to 10% more or less.</p>
<ul>
<li>Quantity range: 10,000 × 0.90 = 9,000 to 10,000 × 1.10 = 11,000 units.</li>
<li>Amount range: USD 50,000 × 0.90 = USD 45,000 to USD 50,000 × 1.10 = USD 55,000.</li>
</ul>
<p>The seller ships 10,800 units. Invoice amount: 10,800 × USD 5.00 = <strong>USD 54,000.00</strong>. Both quantity and amount are inside the tolerance, so the invoice complies on these points.</p>
<h3>Scenario B: no "about" and quantity in units</h3>
<p>Now the credit reads: amount <strong>USD 50,000.00</strong>; goods: <strong>10,000 units</strong> at USD 5.00. There is no "about," and because the quantity is stated in individual items, the 5% quantity tolerance in article 30(b) does not apply. Shipping 10,800 units and invoicing USD 54,000 would not comply: the quantity exceeds the credit, and banks will pay no more than USD 50,000 in any case. If the buyer wants more goods, the credit should be amended before shipment.</p>
<h3>Deadlines</h3>
<p>The credit expires on <strong>October 31</strong> and does not state a presentation period. The bill of lading is dated <strong>September 22</strong>. Under article 14(c), a presentation including an original transport document must be made no later than 21 calendar days after the shipment date, and in any case not later than the expiry date.</p>
<ul>
<li>21 days after September 22: September has 30 days, so 8 days take you to September 30 and 13 more to <strong>October 13</strong>.</li>
<li>Latest presentation: the earlier of October 13 and October 31, which is <strong>October 13</strong>.</li>
</ul>
<p>Presenting on October 20 would be late, even though the credit itself is still valid.</p>

<h2>Common letter of credit invoice discrepancies</h2>
<ul>
<li><strong>Wrong party names.</strong> Applicant or beneficiary names that differ from the credit, including abbreviations the credit does not use.</li>
<li><strong>Goods description that does not correspond.</strong> Using your catalog wording instead of the credit's, or adding details that conflict with it.</li>
<li><strong>Amount over the credit.</strong> Or outside the tolerance, or arithmetic errors between quantity, unit price and total.</li>
<li><strong>Wrong currency.</strong> Invoicing in your home currency when the credit is in US dollars or euros. Our guide to the <a href="/blog/foreign-currency-invoice">foreign currency invoice</a> covers currency display.</li>
<li><strong>Missing trade term or wrong Incoterms version.</strong> If the credit says "CIF Rotterdam Incoterms 2020," the invoice should too.</li>
<li><strong>Conflicting data across documents.</strong> Gross weight, number of packages or marks that differ between the invoice, packing list and bill of lading. Our article on the <a href="/blog/packing-slip-vs-invoice">packing slip vs invoice</a> explains how the documents relate.</li>
<li><strong>Invoice marked "proforma" or "provisional."</strong> Not acceptable as the commercial invoice unless the credit allows it.</li>
<li><strong>Unsigned invoice when the credit requires a signature.</strong> UCP 600 does not require one by default, but the credit can.</li>
<li><strong>Late presentation.</strong> After the presentation period or the expiry date.</li>
<li><strong>Charges or deductions not allowed by the credit.</strong> Adding freight or other charges, or deducting advance payments, in ways that conflict with the credit's terms.</li>
</ul>

<h2>What happens if the bank finds a discrepancy</h2>
<p>Under article 14(b), each bank has up to five banking days following the day of presentation to examine the documents. If they do not comply, article 16 allows the bank to refuse, but it must send a single notice listing every discrepancy. The issuing bank may also approach the applicant for a waiver. Many buyers do waive minor discrepancies, but you lose control: payment becomes dependent on the buyer again, and banks commonly charge a discrepancy fee. If time allows before the deadlines, you can often correct and re-present the documents.</p>

<h2>Letter of credit invoice checklist</h2>
<ul>
<li>Credit checked against the sales contract on arrival; amendments requested before shipment.</li>
<li>Invoice issued by the beneficiary named in the credit.</li>
<li>Invoice made out to the applicant exactly as named.</li>
<li>Currency matches the credit.</li>
<li>Goods description copied from the credit, with any extra detail kept consistent.</li>
<li>Quantity, unit price and total within any tolerance; arithmetic checked.</li>
<li>Trade term and Incoterms version shown as in the credit.</li>
<li>Credit number and any required references included.</li>
<li>Signature, certification and number of originals as the credit requires.</li>
<li>Weights, packages and marks consistent with the packing list and transport document.</li>
<li>Presentation date calculated: within 21 days of shipment (or the stated period) and before expiry.</li>
</ul>

<h2>Preparing the invoice itself</h2>
<p>A letter of credit invoice is still a <a href="/blog/commercial-invoice-template">commercial invoice</a>, so it should include the standard export details your customs authorities and the buyer's need. Keep the layout plain and readable; a clean design such as the <a href="/invoice-templates/corporate">corporate invoice template</a> works well for bank documents. You can build the invoice in the <a href="/invoice-generator">free invoice generator</a>: enter the beneficiary and applicant exactly as named in the credit, set the credit's currency, enter quantities and unit prices so the totals calculate, and use the notes field for the credit number, trade term and any required statements. Then compare the PDF line by line with the credit before presentation. Our wider guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers tax and currency points beyond the credit itself.</p>
<p>Remember that the generator lays out the document; it does not check compliance or submit anything to the bank. Many exporters ask the advising or confirming bank, or a freight forwarder, to pre-check documents before the first few presentations.</p>

<h2>Next step</h2>
<p>Take the last credit you received and fill in the table above from it. If any field was unclear, ask your bank how it reads it before your next shipment. For more on getting paid across borders, see our <a href="/blog/category/payments">payments articles</a>.</p>
`,
  },
  {
    slug: "reimbursable-expenses-invoice",
    title: "Reimbursable Expenses Invoice: Travel, Mileage, Materials",
    description:
      "How to bill reimbursable expenses on an invoice: travel, mileage and materials, at cost or with markup, with receipts, tax treatment and a worked example.",
    category: "invoicing-basics",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "mileage-log-template",
      "itemized-invoice",
      "markup-vs-margin",
      "consulting-invoice-template",
    ],
    faqs: [
      {
        q: "What are reimbursable expenses on an invoice?",
        a: "Reimbursable expenses are costs you pay while working for a client that the client has agreed to repay, on top of your fee. Common examples are travel, hotels, mileage, materials, printing, shipping, permits and third-party services bought for the project. They are listed separately from your fees on the invoice, usually with receipts attached, so the client can check them against the agreement.",
      },
      {
        q: "Should I charge a markup on reimbursable expenses?",
        a: "Only if your contract allows it. Many professional service contracts state that expenses are billed at cost, while trades and agencies often add a handling or procurement fee, commonly expressed as a percentage, for materials they source and manage. Whatever you do, agree it in writing before the work starts and show it clearly on the invoice. A hidden markup on expenses billed as at cost damages trust quickly.",
      },
      {
        q: "How do I bill mileage to a client?",
        a: "Record the date, start and end points, purpose and miles for each trip, then multiply the total miles by the rate in your contract. Many US businesses use the IRS standard mileage rate as a reference, but the rate you bill is whatever you and the client agreed. Show the miles and the rate on the invoice, for example 212 miles at $0.70 per mile, so the arithmetic is visible.",
      },
      {
        q: "Do I need to attach receipts to an expense invoice?",
        a: "It is good practice and many clients require it, especially larger companies whose accounts payable teams will not approve expenses without them. Attach copies of receipts or a summary schedule with receipts available on request, as your contract specifies. Keep the originals for your own records too, because tax authorities may ask you to support the expense claims in your own books.",
      },
      {
        q: "Do I charge sales tax or VAT on reimbursed expenses?",
        a: "It depends on the jurisdiction and on whether the cost is part of your service or a true disbursement paid on the client's behalf. In the UK, for example, HMRC treats most recharged costs such as travel as part of your supply, so VAT applies at the same rate as your fee, while genuine disbursements can be outside the scope of VAT. US sales tax rules vary by state. Check with a tax adviser.",
      },
      {
        q: "Are reimbursed expenses income for a freelancer?",
        a: "Generally, money you receive from a client is part of your business income, and the expenses you paid are deductible business costs, so the effect on profit nets out if they match. How reimbursements are reported on information returns such as Form 1099-NEC in the US can depend on how the arrangement is documented. Keep records of both the expense and the reimbursement and ask your accountant how to report them.",
      },
      {
        q: "Should expenses go on a separate invoice?",
        a: "Either approach can work. Many freelancers put fees and expenses on one invoice under separate headings, which keeps everything in one document. Some clients prefer a separate expense invoice because expenses are approved by a different budget holder or charged to a different cost code. Ask the client's accounts payable team which they prefer and follow it consistently.",
      },
      {
        q: "What if the client refuses to reimburse an expense?",
        a: "Check your contract first. If the expense was pre-approved or clearly covered by the agreement, send the relevant clause and the receipt and ask for payment. If it was not covered, you may have to absorb it this time and tighten your contract for the future. To avoid disputes, get written approval before incurring large or unusual costs, and agree caps for travel and materials.",
      },
      {
        q: "Can I bill reimbursable expenses with the free invoice generator?",
        a: "Yes. Add each expense as its own line item with a clear description, quantity and unit price, such as mileage at a per-mile rate, alongside your fee lines. The generator calculates totals, tax and discounts and lets you download a PDF. It does not store or attach receipts, so send receipt copies alongside the invoice PDF in the same email or upload.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A reimbursable expenses invoice lists the costs you paid on a client's behalf, such as travel, mileage and materials, separately from your fees. Show each expense as its own line with the date, description and amount, state whether it is billed at cost or with an agreed markup, apply the correct tax and attach receipts.</p>

<p>Plenty of projects involve spending money before you get paid for it: a flight to a client workshop, materials for a renovation, courier fees for a contract. If your agreement says the client will cover those costs, you need to bill them in a way that is easy to check and approve. A vague "expenses: $1,240" line is a fast route to an accounts payable query and a delayed payment. This guide explains what counts as a reimbursable expense, how to agree terms upfront, how to lay out an invoice with a worked example, how tax usually applies and which mistakes to avoid.</p>

<h2>What counts as a reimbursable expense?</h2>
<p>A reimbursable expense is a cost you incur in delivering the work that the client has agreed to repay in addition to your fee. The key word is <em>agreed</em>. Unless your contract or statement of work says expenses are reimbursable, many clients will assume your fee covers them. Typical categories are:</p>
<ul>
<li><strong>Travel:</strong> flights, trains, taxis, rental cars, parking, tolls.</li>
<li><strong>Accommodation and subsistence:</strong> hotels and, where agreed, meals or a daily allowance.</li>
<li><strong>Mileage:</strong> use of your own vehicle, billed per mile or kilometer at an agreed rate.</li>
<li><strong>Materials and supplies:</strong> parts, fixtures, fabric, printing, props.</li>
<li><strong>Third-party costs:</strong> subcontracted services, stock images, software licenses bought for the project, permit or filing fees.</li>
<li><strong>Shipping and courier costs.</strong></li>
</ul>
<p>What usually does not count: your own overheads, such as your laptop, phone plan, office rent and general software subscriptions. Those belong in your rate. If you are unsure how to cover overheads, our guide to <a href="/blog/how-to-set-freelance-rates">setting freelance rates</a> shows how to build them in.</p>

<h2>Agree expense terms before the work starts</h2>
<p>Most expense disputes come from assumptions. Put the rules in your contract or <a href="/blog/statement-of-work-template">statement of work</a> before you spend anything:</p>
<ul>
<li>Which categories are reimbursable and which are not.</li>
<li>Whether expenses are billed at cost or with a handling fee, and the percentage.</li>
<li>The mileage rate and how distance is measured.</li>
<li>Travel standards, such as economy class flights or a nightly hotel cap.</li>
<li>Pre-approval rules, such as written approval for any single expense above a set amount.</li>
<li>Receipt requirements and the deadline for billing expenses, for example within 60 days.</li>
<li>Whether expenses go on the same invoice as fees or on a separate one.</li>
</ul>

<h2>Billing at cost vs with a markup</h2>
<p>There are two common models, and both are legitimate if they are agreed:</p>
<table><thead><tr><th>Approach</th><th>How it works</th><th>Common in</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>At cost</td><td>You bill exactly what you paid, net of any recoverable tax</td><td>Consulting, legal, accounting, design</td><td>Your time spent sourcing and paying is not covered</td></tr>
<tr><td>Cost plus handling fee</td><td>You bill the cost plus an agreed percentage</td><td>Construction, trades, events, agencies</td><td>Must be disclosed and agreed; clients may cap it</td></tr>
<tr><td>Fixed allowance (per diem)</td><td>A set daily amount for meals or incidentals, no receipts for each item</td><td>Travel-heavy engagements</td><td>Agree the rate and the days it applies</td></tr>
<tr><td>Included in fee</td><td>No separate expense billing</td><td>Fixed-price projects</td><td>You carry the risk if costs rise</td></tr>
</tbody></table>
<p>If you add a handling fee, be clear about the arithmetic. A 15% markup on cost is not a 15% margin. Our explainer on <a href="/blog/markup-vs-margin">markup vs margin</a> shows the difference with examples.</p>

<h2>How to lay out a reimbursable expenses invoice</h2>
<p>Whether you use one invoice for fees and expenses or a separate expense invoice, the layout principles are the same:</p>
<ol>
<li><strong>Separate fees from expenses.</strong> Use headings or clearly labeled line items so the client can approve each part.</li>
<li><strong>One line per expense or per category.</strong> Include the date, a description that explains the business purpose and the amount. An <a href="/blog/itemized-invoice">itemized invoice</a> is far easier to approve than a lump sum.</li>
<li><strong>Show quantities and rates.</strong> Mileage as miles × rate, hotel as nights × rate, materials as quantity × unit cost.</li>
<li><strong>Show any handling fee as its own line.</strong> State the percentage and the base it applies to.</li>
<li><strong>Apply tax correctly.</strong> Tax may apply to some expense lines and not others, depending on your jurisdiction.</li>
<li><strong>Reference the agreement.</strong> Quote the contract, project or PO number.</li>
<li><strong>Attach receipts or a schedule.</strong> Mention in the notes that receipts are attached.</li>
</ol>
<p>In the <a href="/invoice-generator">free invoice generator</a>, add each expense as a line item with the quantity and unit price, so the PDF shows the calculation. Use the notes field for the expense policy reference and a line such as "Receipts attached for all expenses over $25."</p>

<h2>Reimbursable expenses invoice worked example</h2>
<p>An illustrative example: a management consultant bills a two-day on-site workshop. The contract says fees are $150 per hour, expenses are billed at cost except materials, which carry a 10% handling fee, and mileage is billed at $0.70 per mile. Sales tax is ignored here for simplicity; check your own rules.</p>
<table><thead><tr><th>Line</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Consulting fees, workshop preparation and delivery</td><td>24 hours × $150.00</td><td>$3,600.00</td></tr>
<tr><td>Airfare, economy return, Oct 5 and Oct 7</td><td>1 × $486.20</td><td>$486.20</td></tr>
<tr><td>Hotel, Oct 5 to Oct 7</td><td>2 nights × $179.00</td><td>$358.00</td></tr>
<tr><td>Mileage, home to airport and return, client site visits</td><td>212 miles × $0.70</td><td>$148.40</td></tr>
<tr><td>Workshop materials (printed workbooks, supplies)</td><td>1 × $640.00</td><td>$640.00</td></tr>
<tr><td>Materials handling fee</td><td>10% × $640.00</td><td>$64.00</td></tr>
</tbody></table>
<p>Totals:</p>
<ul>
<li>Fees: $3,600.00</li>
<li>Expenses: $486.20 + $358.00 + $148.40 + $640.00 + $64.00 = <strong>$1,696.60</strong></li>
<li>Invoice total: $3,600.00 + $1,696.60 = <strong>$5,296.60</strong></li>
</ul>
<p>The client's accounts payable team can tick each line against a receipt or the contract terms: the hotel against the nightly cap, the mileage against the agreed rate and the handling fee against the 10% clause. Nothing needs a follow-up email.</p>

<h2>Mileage: rates and records</h2>
<p>The rate you bill is whatever your agreement says. Many US businesses use the IRS standard mileage rate as a reference point. For 2026 the IRS business rate changed mid-year: 72.5 cents per mile from January 1 to June 30, then 76 cents per mile from July 1. Rates can be adjusted, so check the current figure on the <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer">IRS standard mileage rates</a> page before quoting it in a contract. Other countries publish their own reference rates.</p>
<p>Whatever the rate, keep a log for each trip: the date, start and end locations, business purpose and distance. A simple spreadsheet or mileage app works. Bill the total for the period on one line with the miles and rate visible, and keep the log in case the client or a tax authority asks for it.</p>

<h2>Tax on reimbursable expenses</h2>
<p>Tax treatment is the area where most people guess, and it varies by country, so treat this as orientation rather than advice.</p>
<h3>VAT countries</h3>
<p>In VAT systems, there is often a distinction between recharges and disbursements. In the UK, HMRC's <a href="https://www.gov.uk/guidance/vat-guide-notice-700" target="_blank" rel="noopener noreferrer">VAT guide (Notice 700)</a> explains that costs you incur in making your own supply, such as your travel and hotel, are generally part of that supply, so you charge VAT on them at the same rate as your fee. A true disbursement, a cost you pay purely as the client's agent, such as certain official fees paid in the client's name, can be outside the scope of VAT if strict conditions are met. Bill recharges at the net cost if you can reclaim the input VAT, then add VAT on top. Our <a href="/blog/vat-invoice-guide">VAT invoice guide</a> covers the invoice fields.</p>
<h3>US sales tax</h3>
<p>In the US, whether sales tax applies to reimbursed expenses depends on the state and on whether the underlying service or goods are taxable. Materials resold to a client may be taxable; some states treat reimbursed travel as part of a taxable service charge. The <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps with the arithmetic once you know which lines are taxable.</p>
<h3>Income tax</h3>
<p>For freelancers, reimbursements are generally business income and the costs are business expenses, so they offset when they match. Our guide to <a href="/blog/self-employed-tax-deductions">self-employed tax deductions</a> covers record keeping. How payments are reported on information returns can depend on how you document them, so ask your accountant.</p>

<h2>Handling large upfront costs</h2>
<p>Some projects require you to spend significant money long before the final invoice, such as buying materials for a renovation or booking venues for an event. Waiting to recover those costs at the end puts your own cash at risk. Two simple protections help. First, ask for a deposit that covers the major purchases before you place orders; our guide to the <a href="/blog/deposit-invoice">deposit invoice</a> shows how to word one. Second, bill expenses as they occur, for example monthly or at each milestone, rather than saving them all for the last reimbursable expenses invoice. Smaller, regular expense bills are easier for clients to approve and keep your cash flow steady.</p>

<h2>Common mistakes with expense invoicing</h2>
<ul>
<li><strong>Billing expenses that were never agreed.</strong> Without a contract clause, a client can reasonably refuse.</li>
<li><strong>Lump-sum expense lines.</strong> "Expenses: $1,696.60" invites questions. Itemize.</li>
<li><strong>Hidden markups.</strong> Adding a margin to expenses described as at cost is a breach of trust, and possibly of contract.</li>
<li><strong>Charging tax twice.</strong> In VAT systems, billing the gross receipt amount including VAT and then adding VAT again overcharges the client.</li>
<li><strong>Billing late.</strong> Expenses submitted months after the work often fall outside the client's budget period and get rejected.</li>
<li><strong>Missing receipts.</strong> Lost receipts are hard to reimburse and hard to deduct. Photograph them on the day.</li>
<li><strong>Mixing personal and business costs.</strong> A family dinner on a business trip is not a client expense.</li>
</ul>

<h2>Reimbursable expenses checklist</h2>
<ul>
<li>Contract states which expenses are reimbursable, at cost or with a handling fee.</li>
<li>Mileage rate, travel standards and approval thresholds agreed in writing.</li>
<li>Receipts captured on the day and filed by project.</li>
<li>Mileage log kept with dates, routes, purpose and distance.</li>
<li>Expenses listed separately from fees, one line per item or category.</li>
<li>Quantities and rates visible for mileage, nights and materials.</li>
<li>Handling fee shown as a separate line with its percentage.</li>
<li>Tax treatment checked for each expense line.</li>
<li>Project, contract or PO reference on the invoice.</li>
<li>Receipts or a schedule attached and mentioned in the invoice notes.</li>
</ul>

<h2>Next step</h2>
<p>Open your current contract or proposal template and add an expenses clause that covers the points above. Then create your next invoice with fees and expenses on separate lines, using a clear layout such as the <a href="/invoice-templates/minimal">minimal invoice template</a>. For more on invoice fundamentals, browse the <a href="/blog/category/invoicing-basics">invoicing basics articles</a>.</p>
`,
  },
];
