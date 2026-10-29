import type { PostDraft } from "../blog";

export const INVOICING_BASICS_2026_H_POSTS: PostDraft[] = [
  {
    slug: "dunning-process",
    title: "Dunning Process: Stages, Letters and Automation (2026)",
    description:
      "The dunning process explained: the stages from friendly reminder to final notice, sample dunning letters, failed card payment recovery and how to automate it.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["payment-reminder-emails", "overdue-invoice", "late-payment-fees"],
    faqs: [
      {
        q: "What does dunning mean in accounts receivable?",
        a: "In accounts receivable, dunning means the organized series of reminders a business sends to collect money it is already owed. It starts with a polite notice before or on the due date and escalates in tone and consequence if the customer does not pay. The word is old, but the practice is current: almost every subscription company and many service firms run some form of dunning, whether by hand or with software.",
      },
      {
        q: "How many dunning emails should I send?",
        a: "Most small businesses use four to six messages over 30 to 45 days: a pre-due reminder, a due-date notice, two or three overdue reminders and a final notice. Fewer than that and customers who simply forgot slip through. Many more than that and the messages start to look like spam and lose their effect. What matters most is that each message adds new information, such as a fee, a deadline or a next step.",
      },
      {
        q: "Is dunning the same as debt collection?",
        a: "No. Dunning is the creditor's own reminder process for its own invoices, usually while the customer relationship is still active. Debt collection usually refers to later steps, often by a collection agency or lawyer, once the account is seriously overdue. Third-party collectors chasing consumer debts in the US are covered by the Fair Debt Collection Practices Act, while a business reminding its own customers is generally not, though state laws can still apply.",
      },
      {
        q: "What is involuntary churn and how does dunning reduce it?",
        a: "Involuntary churn is when a subscriber is lost because a payment fails, not because they chose to cancel. Expired cards, insufficient funds and bank declines are common causes. Dunning reduces it by retrying the charge on sensible days, using card updater services where available, and emailing the customer a secure link to update their card before access is cut off. Recovering even a share of failed payments protects revenue you already earned.",
      },
      {
        q: "When should I stop dunning and send an account to collections?",
        a: "Many businesses set a cut-off between 60 and 90 days past due, after a final notice with a clear deadline has gone unanswered. Before that, check the invoice was received, that there is no dispute and that the amount justifies the cost. Collection agencies usually keep a percentage of what they recover, so for small balances a demand letter or small claims court may be the better next step.",
      },
      {
        q: "Should dunning messages come from a person or a system address?",
        a: "Early, friendly reminders can come from a billing address, which keeps things neutral. Later stages work better from a named person, such as the owner or the account manager, because customers are more likely to reply to a person and explain a problem. Whatever the sender, make sure replies reach someone who reads them, because a customer explaining a dispute to an unmonitored inbox will only get angrier.",
      },
      {
        q: "Can I charge a fee as part of the dunning process?",
        a: "Yes, if your contract or invoice terms allowed it before the work was done, and the amount complies with state law. A late fee or monthly interest charge should appear in your payment terms, on the original invoice and again in the dunning message where it is first applied. Adding a fee that was never agreed invites disputes and, in some states, can break consumer protection rules.",
      },
      {
        q: "Do I need dunning software?",
        a: "Not at the start. A spreadsheet of open invoices, a calendar and a set of saved email templates can run a solid dunning process for a few dozen customers. Software becomes worth it when you have many recurring card payments, because automatic retries and card update links recover failed payments that manual follow-up would miss. Many invoicing and subscription billing tools include reminders at no extra cost.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The dunning process is the planned sequence of reminders a business sends to collect overdue payments, moving from a friendly heads-up before the due date to firmer notices and finally a last warning before collections. Good dunning uses set stages, clear wording, a fixed timeline and automation for failed card payments.</p>

<p>Most late invoices are not unpaid because the customer refuses. They are late because the invoice was buried, the card expired or nobody owned the follow-up. A written dunning process fixes the last problem, and it is the cheapest cash flow tool a small business has. This guide explains what dunning means, the stages most businesses use, sample dunning letters for each stage, how failed payment recovery works for subscriptions, and the mistakes that cost you money or customers.</p>

<h2>What is dunning?</h2>

<p>Dunning is the methodical communication a creditor uses to collect money that is owed. The word has been used for centuries for pressing someone to pay a debt. Today it covers two related jobs:</p>

<ul>
<li><strong>Invoice dunning:</strong> reminders for unpaid invoices sent to clients who pay by bank transfer, check or card, typical for freelancers, agencies, trades and B2B suppliers.</li>
<li><strong>Payment failure dunning:</strong> automatic retries and card update requests when a recurring card or direct debit payment fails, typical for subscriptions, memberships and SaaS.</li>
</ul>

<p>Both are part of accounts receivable management. Your <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> tells you who is late, and the dunning process tells you what to do about each bucket. Dunning is not the same as collections: it is your own process for your own invoices, while collections usually means handing the debt to a third party.</p>

<h2>What are the stages of the dunning process?</h2>

<p>A typical dunning process has five or six stages. The tone starts helpful and becomes more formal, and each stage adds something new: a copy of the invoice, a fee, a deadline or a consequence.</p>

<table>
<thead><tr><th>Stage</th><th>Timing</th><th>Tone</th><th>Main goal</th></tr></thead>
<tbody>
<tr><td>1. Pre-due reminder</td><td>3 to 7 days before due date</td><td>Friendly, helpful</td><td>Make sure the invoice reached the right person</td></tr>
<tr><td>2. Due-date notice</td><td>On the due date</td><td>Neutral</td><td>Prompt payment today with a payment link</td></tr>
<tr><td>3. First overdue reminder</td><td>3 to 7 days late</td><td>Polite but direct</td><td>Find out if something is wrong</td></tr>
<tr><td>4. Second overdue reminder</td><td>14 days late</td><td>Firm</td><td>Mention late fees and ask for a payment date</td></tr>
<tr><td>5. Final notice</td><td>30 days late</td><td>Formal</td><td>Set a deadline and state the next step</td></tr>
<tr><td>6. Escalation</td><td>45 to 90 days late</td><td>Formal, legal</td><td>Demand letter, collections or small claims</td></tr>
</tbody>
</table>

<p>Adjust the timing to your payment terms. A business on <a href="/blog/net-30-payment-terms">net 30 payment terms</a> might send the pre-due reminder on day 25, while one that bills <a href="/blog/due-upon-receipt">due upon receipt</a> would skip straight to stage 2 or 3.</p>

<h3>Stage 1: the pre-due reminder</h3>

<p>This is the most underrated message in the sequence. It catches invoices sent to the wrong inbox, purchase order numbers that are missing and approvals that are stuck. It should be short and helpful, with the invoice attached again.</p>

<h3>Stages 2 and 3: due and just overdue</h3>

<p>Assume good faith. Most customers who pay a few days late simply forgot. Include the invoice number, amount, due date and a one-click payment option. If you <a href="/blog/add-payment-link-to-invoice">add a payment link to the invoice</a>, put the same link in every reminder.</p>

<h3>Stages 4 and 5: firm and final</h3>

<p>Now you name consequences: the late fee your terms allow, a pause on further work, and the date by which you need payment or a reply. The <a href="/blog/final-notice-before-legal-action">final notice before legal action</a> should be the only message that mentions collections or court, and only if you are prepared to follow through.</p>

<h2>Sample dunning letters for each stage</h2>

<p>Copy and adapt these. Replace the bracketed fields with your own details, and keep the invoice attached or linked in every message.</p>

<h3>Pre-due reminder</h3>
<p><em>Subject: Invoice [number] due on [date]</em><br>Hi [Name], a quick reminder that invoice [number] for [amount] is due on [date]. I have attached a copy in case the first one went astray. You can pay by bank transfer or card using this link: [link]. Thanks, [Your name]</p>

<h3>First overdue reminder</h3>
<p><em>Subject: Invoice [number] is now [X] days overdue</em><br>Hi [Name], our records show invoice [number] for [amount] was due on [date] and is still open. If you have already paid, please ignore this note and accept our thanks. If something is holding it up, such as a missing PO number, just reply and I will sort it out today.</p>

<h3>Second overdue reminder</h3>
<p><em>Subject: Second reminder: invoice [number], [amount] overdue</em><br>Hi [Name], invoice [number] is now 14 days past due. As set out in our payment terms, a late fee of [amount or rate] applies from [date]. Please let me know by [date] when we can expect payment. If cash flow is the issue, I am happy to discuss a short payment plan.</p>

<h3>Final notice</h3>
<p><em>Subject: Final notice: invoice [number] overdue since [date]</em><br>Dear [Name], despite earlier reminders on [dates], invoice [number] for [amount], plus [late fee], remains unpaid. Please pay the full balance of [total] by [date, usually 7 to 10 days away]. If we do not receive payment or a reply by then, we will refer the account to [collection agency or our solicitor] without further notice.</p>

<p>For more wording options, see our full set of <a href="/blog/payment-reminder-emails">payment reminder email templates</a>.</p>

<h2>How does dunning work for failed card payments?</h2>

<p>Subscription businesses face a different problem: the customer wants to keep paying, but the card fails. Common reasons include an expired card, a replaced card after fraud, insufficient funds or a bank's fraud filter. Dunning for failed payments usually combines three tools:</p>

<ol>
<li><strong>Smart retries:</strong> the billing system retries the charge on a schedule, such as day 1, day 3, day 5 and day 7, often timed around common paydays. Several processors, including Stripe, offer automatic retry logic.</li>
<li><strong>Card updater services:</strong> Visa and Mastercard run updater programs that can pass new card numbers and expiry dates to merchants who are enrolled through their processor, so some failures never happen.</li>
<li><strong>Customer emails with an update link:</strong> a short message with a secure link to a hosted page where the customer enters a new card, sent after the first failure and repeated before access is paused.</li>
</ol>

<p>Set a grace period before you suspend service, and make the final message clear about what happens next: paused account, read-only access or cancellation. If you sell <a href="/blog/recurring-payments-small-business">recurring payments to small business customers</a>, offering ACH or direct debit as a backup method also reduces failures, because bank accounts do not expire the way cards do.</p>

<h2>Worked example: a dunning schedule with real numbers</h2>

<p>Maria runs a small bookkeeping firm. She issues invoice INV-2026-0418 for $1,450 on October 1, 2026, on net 30 terms, so it is due October 31. Her terms allow a late fee of 1.5% per month on balances more than 15 days overdue (check that any rate you use is allowed in your state).</p>

<table>
<thead><tr><th>Date</th><th>Dunning step</th><th>Balance shown</th></tr></thead>
<tbody>
<tr><td>Oct 26</td><td>Pre-due reminder with invoice attached</td><td>$1,450.00</td></tr>
<tr><td>Oct 31</td><td>Due-date notice with payment link</td><td>$1,450.00</td></tr>
<tr><td>Nov 6</td><td>First overdue reminder</td><td>$1,450.00</td></tr>
<tr><td>Nov 16</td><td>Second reminder, late fee applied ($1,450 x 1.5%)</td><td>$1,471.75</td></tr>
<tr><td>Nov 30</td><td>Final notice, deadline Dec 10</td><td>$1,471.75</td></tr>
<tr><td>Dec 11</td><td>Demand letter or collections</td><td>$1,471.75 plus any further agreed fees</td></tr>
</tbody>
</table>

<p>In practice, Maria's client replies to the first overdue reminder: the invoice went to a former employee. She resends it to the accounts payable inbox and is paid on November 9. The pre-due and first overdue messages did the work, which is typical. You can set out a clean, numbered invoice like this one in our <a href="/invoice-generator">free invoice generator</a> and attach it to each message.</p>

<h2>How to set up a dunning process step by step</h2>

<ol>
<li><strong>Write down your payment terms.</strong> Due dates, accepted methods, late fees and interest must be agreed before work starts and printed on every invoice. Our guide to <a href="/blog/late-payment-fees">late payment fees</a> covers what is usually allowed.</li>
<li><strong>Choose your stages and dates.</strong> Use the table above as a starting point and adjust for your terms and customer type.</li>
<li><strong>Write templates for each stage.</strong> Keep each one short, with the invoice number, amount, due date and payment link in the first lines.</li>
<li><strong>Decide who sends what.</strong> Automated messages for early stages, a named person for the second reminder and final notice.</li>
<li><strong>Automate where you can.</strong> Most invoicing software can send scheduled reminders. For card subscriptions, turn on retries and card update emails.</li>
<li><strong>Log every contact.</strong> Note dates, replies and promises to pay. This record matters if you later escalate to a demand letter or court.</li>
<li><strong>Review monthly.</strong> Look at which stage most payments arrive after, and which customers always reach stage 4. Change terms or require deposits for repeat late payers.</li>
</ol>

<h2>Dunning for B2B clients versus consumers</h2>

<p>Business customers usually have an accounts payable process. Your reminders should help that process: include the PO number, the supplier name exactly as it appears in their system, and remittance details. Asking "Has this been approved for payment?" is often more useful than repeating the amount.</p>

<p>Consumer customers need simpler messages and more care. In the US, the <a href="https://www.ftc.gov/legal-library/browse/statutes/fair-debt-collection-practices-act" target="_blank" rel="noopener noreferrer">Fair Debt Collection Practices Act</a> applies mainly to third-party collectors of consumer debts, but some state laws also cover businesses collecting their own debts. Avoid threats you cannot carry out, contact at unreasonable hours and discussing the debt with anyone other than the customer. This is general information, not legal advice.</p>

<h2>Common dunning mistakes</h2>

<ul>
<li><strong>No pre-due reminder.</strong> You lose the cheapest chance to fix a wrong address or missing PO.</li>
<li><strong>Escalating too fast.</strong> Threatening collections on day 3 damages relationships with clients who simply forgot.</li>
<li><strong>Escalating too slowly.</strong> Waiting 60 days before the first reminder tells the customer your invoice is low priority.</li>
<li><strong>Fees that were never agreed.</strong> A late fee that first appears in a reminder is likely to be disputed.</li>
<li><strong>Missing details.</strong> Every message should restate the invoice number, amount, due date and how to pay.</li>
<li><strong>Ignoring replies.</strong> A customer raising an <a href="/blog/invoice-dispute">invoice dispute</a> needs an answer, not the next automated reminder.</li>
<li><strong>Forgetting to say thank you.</strong> When payment arrives, confirm it. A short <a href="/blog/thank-you-for-your-payment-message">thank you for your payment message</a> closes the loop and stops further reminders going out by mistake.</li>
</ul>

<h2>Which dunning metrics should you track?</h2>

<p>A dunning process improves when you measure it. You do not need special software: a column in your receivables spreadsheet for the stage each invoice reached is enough to start.</p>

<table>
<thead><tr><th>Metric</th><th>How to calculate it</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td>Paid by stage</td><td>Share of overdue invoices paid after each reminder</td><td>Which messages work and which can be cut</td></tr>
<tr><td>Average days late</td><td>Payment date minus due date, averaged</td><td>Whether your terms or reminders need changing</td></tr>
<tr><td>Recovery rate on failed cards</td><td>Recovered failed payments divided by all failed payments</td><td>How well retries and update emails work</td></tr>
<tr><td>Days sales outstanding</td><td>Receivables divided by credit sales, times days in period</td><td>Overall collection speed; see <a href="/blog/days-sales-outstanding">days sales outstanding</a></td></tr>
<tr><td>Write-offs</td><td>Total balances written off per quarter</td><td>Whether escalation starts early enough</td></tr>
</tbody>
</table>

<p>If most late invoices are paid after the first overdue reminder, your process is working and you mainly need to keep it consistent. If many reach the final notice, look upstream: deposits, shorter terms, clearer invoices or a credit check for new customers usually help more than harsher wording.</p>

<h2>When dunning is not enough</h2>

<p>If the final notice deadline passes, choose the next step based on the amount and your evidence. For larger sums, a formal <a href="/blog/demand-letter-for-payment">demand letter for payment</a> is often the turning point. After that, you can use a <a href="/blog/collection-agency-for-unpaid-invoices">collection agency for unpaid invoices</a> or small claims court. If the debt is truly uncollectible, record it as a bad debt so your books and taxes reflect reality.</p>

<p>A consistent dunning process works best when the original invoice is clear, so the customer never has a reason to delay. Create professional invoices with due dates, terms and payment details in our <a href="/invoice-generator">free invoice generator</a>: it needs no sign-up and downloads a PDF straight from your browser, ready to attach to every stage of your dunning process.</p>
`,
  },
  {
    slug: "end-of-month-payment-terms",
    title: "EOM Payment Terms: Net 30 EOM Explained With Dates",
    description:
      "EOM payment terms explained: what net 30 EOM, MFI and prox mean, worked due-date examples, a cut-off date rule and how to write EOM terms on your invoices.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-payment-terms", "net-30-payment-terms", "2-10-net-30"],
    faqs: [
      {
        q: "What does EOM mean on an invoice?",
        a: "EOM stands for end of month. On an invoice it means the payment clock starts at the end of the month in which the invoice is dated, not on the invoice date itself. Plain EOM usually means payment is due on the last day of that month, while net 30 EOM means payment is due 30 days after that month ends. Always print the actual due date next to the term to avoid confusion.",
      },
      {
        q: "Is net 30 EOM the same as net 60?",
        a: "No. With net 30 EOM, the customer pays between about 30 and 60 days after the invoice date, depending on when in the month you invoiced. An invoice dated on the last day of the month gives roughly 30 days, while one dated on the first gives nearly 60. Net 60 always gives exactly 60 days from the invoice date, so the two only match for invoices dated at the very start of a month.",
      },
      {
        q: "What is the difference between EOM and MFI?",
        a: "MFI means month following invoice, and it is often used for the same idea as end of month terms: payment is due during or at the end of the month after the invoice month. For example, 20th MFI means due on the 20th of the month after the invoice date. Because suppliers use these abbreviations slightly differently, print the exact due date on the invoice instead of relying on the abbreviation alone.",
      },
      {
        q: "What does 10th prox mean?",
        a: "Prox is short for proximo, meaning next month. Terms of 10th prox mean the invoice is due on the 10th day of the month after the invoice date. An invoice dated October 18 on 10th prox terms is due November 10. Some wholesale and retail suppliers combine prox with a discount, such as 2% 10th prox, which allows a 2% discount if the customer pays by the 10th of next month.",
      },
      {
        q: "Why do customers ask for EOM terms?",
        a: "Large buyers often run accounts payable in monthly cycles. They collect a month of supplier invoices, approve them together and pay in one or two payment runs. EOM terms fit that rhythm and make it easier for them to forecast cash. For the supplier, EOM terms usually mean waiting longer on average, so they are worth accepting only from reliable customers or when the contract value justifies it.",
      },
      {
        q: "How do I calculate a due date for net 30 EOM in February?",
        a: "Take the last day of the invoice month and add 30 calendar days. For an invoice dated January 15, 2026, the month ends January 31, and 30 days later is March 2, 2026, because February 2026 has 28 days. Some customers read net 30 EOM as the end of the following month, which would be February 28. To avoid that disagreement, state the exact due date on the invoice.",
      },
      {
        q: "Can I charge late fees on EOM terms?",
        a: "Yes, if your contract or terms allow it and the amount complies with the law where you operate. The late fee starts after the EOM due date, not after the invoice date. Print both the due date and the fee policy on the invoice, for example: Payment due December 31, 2026 (net 30 EOM). Balances unpaid after that date incur interest of 1% per month.",
      },
      {
        q: "Are EOM terms common outside the US?",
        a: "Yes. End of month terms are widely used in the UK, Australia and New Zealand, where you will often see phrases like 30 days end of month or 20th of the month following. In the UK, if a business contract sets no payment date, the default for late payment interest purposes is generally 30 days after the invoice or delivery, so agreed EOM terms replace that default when both sides sign up to them.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> EOM payment terms start the payment period at the end of the month in which the invoice is dated. Plain EOM means payment is due on the last day of that month. Net 30 EOM means payment is due 30 days after that month ends, so an invoice dated October 3 or October 29, 2026 is due November 30, 2026.</p>

<p>End of month terms show up in wholesale, retail, construction, manufacturing and any industry where large customers pay suppliers in monthly batches. They are simple once you see a few examples, but they cause real confusion when supplier and customer read them differently. This guide explains what EOM payment terms mean, the related MFI and prox terms, how to calculate due dates with worked examples, and how to write EOM terms on an invoice so nobody argues about the date.</p>

<h2>What are EOM payment terms?</h2>

<p>EOM stands for end of month. With ordinary <a href="/blog/invoice-payment-terms">invoice payment terms</a> such as net 30, the clock starts on the invoice date. With EOM terms, the clock starts on the last day of the invoice month. That one change means every invoice issued in the same month shares the same due date.</p>

<p>The main variants are:</p>

<ul>
<li><strong>EOM (or due EOM):</strong> payment due on the last day of the month in which the invoice is dated.</li>
<li><strong>Net 30 EOM:</strong> payment due 30 days after the end of the invoice month.</li>
<li><strong>Net 15 EOM, net 45 EOM, net 60 EOM:</strong> the same idea with a different number of days.</li>
<li><strong>MFI (month following invoice):</strong> payment due in the month after the invoice month, often on a set day, such as 20th MFI.</li>
<li><strong>Prox (proximo):</strong> payment due on a set day of next month, such as 10th prox.</li>
<li><strong>2/10 EOM:</strong> a 2% early payment discount if paid within 10 days after the end of the invoice month, otherwise the full amount is due on a later date the terms state.</li>
</ul>

<h2>How do net 30 EOM terms work?</h2>

<p>Net 30 EOM works in two steps. First, find the last day of the month in which the invoice is dated. Second, add 30 calendar days. The result is the due date for every invoice dated in that month.</p>

<p>Compare that with standard <a href="/blog/net-30-payment-terms">net 30 payment terms</a>, where you add 30 days to each invoice date. Net 30 always gives the customer 30 days. Net 30 EOM gives them anywhere from 30 days (invoice dated on the last day of the month) to almost 60 days (invoice dated on the 1st).</p>

<h2>Worked examples: EOM due dates in 2026</h2>

<p>All dates below use the 2026 calendar. February 2026 has 28 days.</p>

<table>
<thead><tr><th>Invoice date</th><th>Terms</th><th>How it is calculated</th><th>Due date</th><th>Days to pay</th></tr></thead>
<tbody>
<tr><td>Oct 3, 2026</td><td>Net 30</td><td>Oct 3 + 30 days</td><td>Nov 2, 2026</td><td>30</td></tr>
<tr><td>Oct 3, 2026</td><td>Net 30 EOM</td><td>Oct 31 + 30 days</td><td>Nov 30, 2026</td><td>58</td></tr>
<tr><td>Oct 29, 2026</td><td>Net 30 EOM</td><td>Oct 31 + 30 days</td><td>Nov 30, 2026</td><td>32</td></tr>
<tr><td>Oct 29, 2026</td><td>EOM</td><td>Last day of invoice month</td><td>Oct 31, 2026</td><td>2</td></tr>
<tr><td>Oct 18, 2026</td><td>10th prox</td><td>10th of next month</td><td>Nov 10, 2026</td><td>23</td></tr>
<tr><td>Oct 18, 2026</td><td>20th MFI</td><td>20th of next month</td><td>Nov 20, 2026</td><td>33</td></tr>
<tr><td>Jan 15, 2026</td><td>Net 30 EOM</td><td>Jan 31 + 30 days</td><td>Mar 2, 2026</td><td>46</td></tr>
<tr><td>Nov 12, 2026</td><td>Net 45 EOM</td><td>Nov 30 + 45 days</td><td>Jan 14, 2027</td><td>63</td></tr>
</tbody>
</table>

<p>Notice the October 29 invoice with plain EOM terms: the customer has only two days to pay. That is why plain EOM is usually paired with a cut-off date (see below) or used only for customers on a monthly statement.</p>

<h3>The January example and the "end of next month" reading</h3>

<p>Some customers read net 30 EOM as "pay by the end of the following month". Under that reading, the January 15 invoice would be due February 28, not March 2. In most months the two readings land within a day or two of each other, but they can differ, and that gap is enough to trigger a late fee dispute. The fix is easy: write the exact due date on the invoice next to the terms.</p>

<h2>What is the 25th cut-off rule?</h2>

<p>Many suppliers that use EOM terms add a cut-off date, often the 25th. Invoices dated on or before the 25th are treated as belonging to the current month. Invoices dated after the 25th are treated as if they were dated on the 1st of the next month, so they roll into the next month's due date.</p>

<p>For example, with net 30 EOM and a 25th cut-off:</p>

<ul>
<li>Invoice dated October 24, 2026: treated as October, due November 30, 2026.</li>
<li>Invoice dated October 27, 2026: treated as November, due December 30, 2026 (November 30 plus 30 days).</li>
</ul>

<p>The cut-off protects customers from very short payment windows on late-month invoices. If you use one, put it in your written terms and on the invoice. It is a trade custom, not a law, so it only applies if both sides agreed.</p>

<h2>EOM terms versus other payment terms</h2>

<table>
<thead><tr><th>Term</th><th>Clock starts</th><th>Typical days to pay</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Due on receipt</td><td>Invoice date</td><td>0 to a few days</td><td>One-off jobs, consumers</td></tr>
<tr><td>Net 30</td><td>Invoice date</td><td>30</td><td>Most B2B services</td></tr>
<tr><td>Net 30 EOM</td><td>End of invoice month</td><td>30 to 60</td><td>Customers paying in monthly runs</td></tr>
<tr><td>2/10 net 30</td><td>Invoice date</td><td>10 (with discount) or 30</td><td>Encouraging early payment</td></tr>
<tr><td>Net 60 / net 90</td><td>Invoice date</td><td>60 or 90</td><td>Large corporate buyers</td></tr>
</tbody>
</table>

<p>If you want early payment instead of later payment, look at <a href="/blog/2-10-net-30">2/10 net 30 discount terms</a>. If a large client is pushing you toward long terms, our guide to <a href="/blog/net-60-net-90-payment-terms">net 60 and net 90 payment terms</a> explains how to price that wait.</p>

<h2>How long do EOM terms really give the customer?</h2>

<p>Because invoices are spread across the month, the real wait on EOM terms is an average. If you invoice evenly through a 30-day month on net 30 EOM, the shortest wait is about 30 days (invoice on the 31st) and the longest about 59 days (invoice on the 1st), so the average is roughly 45 days. That is a useful figure for planning cash.</p>

<table>
<thead><tr><th>Terms</th><th>Shortest wait</th><th>Longest wait</th><th>Approximate average</th></tr></thead>
<tbody>
<tr><td>EOM</td><td>0 days</td><td>About 30 days</td><td>About 15 days</td></tr>
<tr><td>10th prox</td><td>About 10 days</td><td>About 40 days</td><td>About 25 days</td></tr>
<tr><td>Net 30 EOM</td><td>About 30 days</td><td>About 60 days</td><td>About 45 days</td></tr>
<tr><td>Net 60 EOM</td><td>About 60 days</td><td>About 90 days</td><td>About 75 days</td></tr>
</tbody>
</table>

<p>Here is what that means in money. Suppose you bill a customer $20,000 a month. Moving from net 30 to net 30 EOM adds roughly 15 days to the average wait, so at any time about $10,000 more of your money ($20,000 x 15 / 30) is sitting in that customer's accounts payable instead of your bank. If you would otherwise borrow that amount on a credit line at an illustrative 9% a year, the extra cost is about $900 a year. That is the number to weigh against the value of the account, and it is a fair reason to ask for a small price increase or an early payment discount in return.</p>

<h3>Can you negotiate EOM terms?</h3>

<p>Often, yes. Customers who ask for EOM terms usually care about fitting their payment runs, not about the exact number of days. Options that keep their process intact while helping your cash flow include:</p>

<ul>
<li><strong>Net 15 EOM or 15th prox</strong> instead of net 30 EOM, which still pays once a month.</li>
<li><strong>Invoicing twice a month</strong> before each of their payment runs, if they have two.</li>
<li><strong>A cut-off date</strong> earlier in the month so more of your invoices fall in the current cycle.</li>
<li><strong>An early payment discount</strong>, such as 1% if paid by the 10th of the following month.</li>
<li><strong>A deposit or progress billing</strong> on large projects, so less money waits for the month-end cycle.</li>
</ul>

<h2>Pros and cons of EOM terms for small businesses</h2>

<h3>Advantages</h3>
<ul>
<li>Fits how many large buyers run accounts payable, which can mean fewer disputes and smoother approvals.</li>
<li>One due date per month makes collections easier to track.</li>
<li>Pairs well with a monthly <a href="/blog/statement-of-account">statement of account</a> listing all open invoices.</li>
<li>Can win business from customers who will not accept shorter terms.</li>
</ul>

<h3>Disadvantages</h3>
<ul>
<li>Longer average wait. On net 30 EOM, an invoice issued mid-month waits about 45 days, which pushes up your <a href="/blog/days-sales-outstanding">days sales outstanding</a>.</li>
<li>Invoices issued early in the month carry the longest wait, so you may be tempted to delay invoicing, which only slows cash further.</li>
<li>The abbreviations are not standardized, so misunderstandings are common without an explicit due date.</li>
</ul>

<h2>How to write EOM terms on an invoice</h2>

<ol>
<li><strong>Agree the terms in writing first.</strong> Put them in the contract, quote or customer account application.</li>
<li><strong>State the term and the exact date.</strong> For example: Terms: Net 30 EOM. Payment due: November 30, 2026.</li>
<li><strong>Add the cut-off rule if you use one.</strong> Invoices dated after the 25th are treated as next month's invoices.</li>
<li><strong>Include early payment discounts clearly.</strong> 2% discount if paid by November 10, 2026; otherwise the full amount is due November 30, 2026.</li>
<li><strong>Show your late payment policy.</strong> Any interest or fee must be agreed in advance. Our <a href="/blog/late-payment-fees">late payment fees guide</a> covers common approaches.</li>
<li><strong>Use the same due date logic every time.</strong> Consistency is what makes EOM terms easy for the customer's AP team.</li>
</ol>

<p>Our <a href="/invoice-generator">free invoice generator</a> lets you type the terms and the due date separately, so you can show both "Net 30 EOM" and the calculated date. For more on the difference between the two dates, see <a href="/blog/invoice-date-vs-due-date">invoice date vs due date</a>.</p>

<h2>Example invoice on net 30 EOM terms</h2>

<table>
<thead><tr><th>Item</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Custom shelving brackets, powder coated</td><td>120</td><td>$8.50</td><td>$1,020.00</td></tr>
<tr><td>Steel wall rails, 48 in</td><td>40</td><td>$22.00</td><td>$880.00</td></tr>
<tr><td>Delivery to warehouse</td><td>1</td><td>$75.00</td><td>$75.00</td></tr>
<tr><td colspan="3"><strong>Subtotal</strong></td><td>$1,975.00</td></tr>
<tr><td colspan="3">Sales tax (illustrative 7%)</td><td>$138.25</td></tr>
<tr><td colspan="3"><strong>Total due</strong></td><td><strong>$2,113.25</strong></td></tr>
</tbody>
</table>

<p>Invoice date: October 8, 2026. Terms: Net 30 EOM. Payment due: November 30, 2026. Invoices dated after the 25th of a month are treated as dated the 1st of the following month. Use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to work out the correct rate for your location.</p>

<h2>Common mistakes with EOM terms</h2>

<ul>
<li><strong>Printing "EOM" with no date.</strong> The single most common source of disputes.</li>
<li><strong>Counting from the invoice date.</strong> Net 30 EOM counts from month end, not from the day you issued the invoice.</li>
<li><strong>Forgetting short months.</strong> Adding 30 days to January 31 lands on March 2 in a non-leap year, not February 30.</li>
<li><strong>Applying EOM terms to every customer.</strong> Offer them to reliable, larger customers. Keep new or small customers on shorter terms or deposits.</li>
<li><strong>Delaying invoices to "save" time.</strong> Invoice as soon as work is delivered; holding invoices only makes cash flow worse.</li>
<li><strong>Not tracking month-end batches.</strong> Build EOM due dates into your <a href="/blog/month-end-close-checklist">month-end close checklist</a> so reminders go out on time.</li>
</ul>

<h2>Do any laws set default payment terms?</h2>

<p>In the US, there is generally no federal default for private business-to-business payment terms; what you agree in the contract governs. Federal government contracts follow the Prompt Payment Act, and some states set deadlines for public or construction work. In the UK, the government explains that if no payment date is agreed, payment for late payment interest purposes is generally due 30 days after the customer receives the invoice or the goods or services, and you can then claim statutory interest; see the <a href="https://www.gov.uk/late-commercial-payments-interest-debt-recovery" target="_blank" rel="noopener noreferrer">gov.uk guide to late commercial payments</a>. This is general information, not legal advice.</p>

<p>End of month payment terms are a useful tool when a customer pays in monthly runs, as long as everyone agrees on the date. Write net 30 EOM and the exact due date on every invoice with our <a href="/invoice-generator">free invoice generator</a>: it needs no sign-up, works in your browser and downloads a ready-to-send PDF.</p>
`,
  },
  {
    slug: "convenience-fee",
    title: "Convenience Fee: Card Rules, Limits vs Surcharges (2026)",
    description:
      "What a convenience fee is, when card network rules allow it, how it differs from a surcharge, state and consumer law limits, and how to show one on an invoice.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "credit-card-surcharge-rules",
      "credit-card-processing-fees",
      "how-to-accept-credit-card-payments",
    ],
    faqs: [
      {
        q: "Is a convenience fee legal?",
        a: "In most US states a convenience fee is legal if you follow card network rules and state law: it must be for a genuinely optional payment channel, disclosed before the customer pays, and applied fairly. Some states regulate card fees more tightly, and debt collectors face extra limits under federal consumer law. Outside the US, consumer surcharge and fee bans in places like the UK, EU and Australia may cover these fees too.",
      },
      {
        q: "Can a convenience fee be a percentage?",
        a: "It depends on the card network. Under Visa's general convenience fee rules, the fee must be a flat or fixed amount regardless of the payment value, as summarized by major processors. Mastercard and American Express rules have allowed flat, percentage or tiered fees. Because you usually accept several networks, many merchants simply use a flat fee to stay within the strictest rule. Confirm with your processor before setting the amount.",
      },
      {
        q: "Can I charge a convenience fee on debit cards?",
        a: "Generally, a convenience fee is a charge for the payment channel, not the card type, so card network rules expect it to apply to all payment methods accepted in that channel, including debit. That is different from a surcharge, which can never be applied to debit or prepaid cards in the US. State law and your processor agreement still apply, so check both before charging any fee on debit transactions.",
      },
      {
        q: "What is a typical convenience fee amount?",
        a: "There is no official standard amount, and the right figure depends on your costs and the rules that apply to you. Small businesses that use flat fees often set them at a few dollars per online or phone payment. Keep the fee modest relative to your typical invoice, make sure it applies equally to every payment method in that channel, and avoid presenting it as a way to recover card fees, which is what surcharges are for.",
      },
      {
        q: "Can I charge both a surcharge and a convenience fee?",
        a: "Generally no, not on the same transaction. Card network rules and processor guidance treat them as alternatives: a surcharge covers the cost of credit card acceptance, while a convenience fee covers an optional payment channel. Stacking both on one payment is a common reason for processor warnings. Pick the one that matches your situation, disclose it clearly and configure your payment system so only one fee can apply.",
      },
      {
        q: "Do convenience fees need to be shown on the receipt?",
        a: "Processor summaries of network rules say the fee does not always have to be printed on the receipt, but it must be disclosed to the customer before they complete the payment, with a chance to cancel. Good practice is to show it anyway, as a separate line on the invoice or payment confirmation, so the customer can see exactly what they paid and why. Clear records also help if the charge is ever disputed.",
      },
      {
        q: "Why do government agencies charge convenience fees?",
        a: "Many government and education bodies are allowed to use special card network programs, such as Visa's registered service fee program, that permit fees on more types of payments. They also often use third-party payment processors that charge the fee themselves. These programs have their own registration and rules, so a private business cannot assume that what a county tax office charges is allowed for its own invoices.",
      },
      {
        q: "Is a convenience fee taxable?",
        a: "It can be. Some states treat a fee charged by the seller as part of the sale price, so sales tax applies if the underlying sale is taxable. Other states treat separately stated payment fees differently. Check your state revenue department's guidance, and make sure your invoice or payment system applies tax consistently. When in doubt, ask your accountant before you add a fee to taxable sales.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A convenience fee is a charge for paying through an optional, non-standard channel, such as online or by phone, when a business normally takes payment another way. Under card network rules it must be disclosed before payment, apply to every payment method in that channel and, under Visa's general rules, be a flat amount.</p>

<p>Card processing costs push many small businesses to look for a way to pass on fees. The convenience fee is one option, but it is often confused with a credit card surcharge, and the rules are different. This guide explains what a convenience fee is, the card network rules that apply, how it compares with a surcharge and a service fee, where state and consumer law limit it, a worked example with numbers, and how to show a convenience fee on an invoice.</p>

<p><strong>Important:</strong> This is general information, not legal advice. Card network rules, state laws and processor contracts change, and they apply differently by industry. Confirm with your payment processor and, if needed, a lawyer before charging any fee.</p>

<h2>What is a convenience fee?</h2>

<p>A convenience fee is a fee charged for the convenience of using an alternative payment channel that is outside a business's normal way of getting paid. The classic example is a business that usually takes payment in person or by check, then adds an online payment portal or a pay-by-phone option. The fee is for the channel, not for the card.</p>

<p>Three related terms are easy to mix up:</p>

<ul>
<li><strong>Convenience fee:</strong> a charge for using an optional channel (online, phone, mail). Applies to all payment types in that channel.</li>
<li><strong>Surcharge:</strong> an extra charge for paying with a credit card, set as a percentage. Covered in detail in our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a>.</li>
<li><strong>Service fee:</strong> card network programs for certain government, education and utility merchants that allow broader fees after registration. Private small businesses usually cannot use them.</li>
</ul>

<h2>Convenience fee vs surcharge: what is the difference?</h2>

<table>
<thead><tr><th>Feature</th><th>Convenience fee</th><th>Credit card surcharge (US)</th></tr></thead>
<tbody>
<tr><td>What it charges for</td><td>Using an optional payment channel</td><td>Paying with a credit card</td></tr>
<tr><td>Applies to</td><td>All payment methods in that channel</td><td>Credit cards only, never debit or prepaid</td></tr>
<tr><td>Amount (Visa general rules)</td><td>Flat or fixed amount</td><td>Percentage, capped at the lower of the network cap or your cost</td></tr>
<tr><td>Registration</td><td>Not required under general rules</td><td>Notice to your processor or acquirer in advance</td></tr>
<tr><td>Face-to-face payments</td><td>Not allowed under Visa general rules</td><td>Allowed with disclosure</td></tr>
<tr><td>Recurring payments</td><td>Not allowed under Visa general rules</td><td>Allowed with disclosure</td></tr>
<tr><td>State bans</td><td>Some states limit fees; check yours</td><td>Banned or limited in several states</td></tr>
</tbody>
</table>

<p>The table summarizes processor guidance on the network rules, including Fiserv's summary of Visa, Mastercard, American Express and Discover requirements. The full <a href="https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf" target="_blank" rel="noopener noreferrer">Visa Core Rules</a> are public and are the primary source for Visa's requirements.</p>

<h2>What are the card network rules for convenience fees?</h2>

<h3>Visa general convenience fee rules</h3>

<p>Visa's rules are the strictest of the major US networks, so they set the practical limit for most merchants. As summarized by major processors, a general convenience fee:</p>

<ul>
<li>Must be for a bona fide convenience: an alternative channel such as mail, telephone or e-commerce, outside the merchant's customary channel.</li>
<li>Cannot be charged in a face-to-face environment.</li>
<li>Cannot be charged by a merchant that operates only online or by phone, because that channel is not an alternative for them.</li>
<li>Must be a flat or fixed amount, regardless of the value of the payment.</li>
<li>Must apply to all forms of payment accepted in that channel, not just cards.</li>
<li>Must be disclosed before the payment is completed, with the option to cancel.</li>
<li>Must be charged by the merchant providing the goods or services, as part of the same transaction.</li>
<li>Cannot be charged on recurring or installment payments.</li>
</ul>

<h3>Mastercard, American Express and Discover</h3>

<p>Processor summaries describe Mastercard and American Express rules as more flexible: fees may be flat, percentage or tiered, and may apply in more situations, as long as they are disclosed and do not discriminate against the brand. Discover has historically had little specific guidance beyond its non-discrimination rule, and processors often suggest following Visa's rules for Discover transactions. Because most businesses accept all four networks, the safest approach is a flat fee that meets Visa's requirements.</p>

<h3>What about the 2026 card settlement?</h3>

<p>In June 2026, a federal judge granted preliminary approval to a revised settlement between Visa, Mastercard and merchants that would, among other things, change surcharging rules. Final approval was still pending at the time of writing (October 2026), and merchant groups have said they may appeal. Until any changes take effect, follow the current rules published by your processor.</p>

<h2>When can you charge a convenience fee?</h2>

<p>Ask these questions before adding a convenience fee:</p>

<ol>
<li><strong>Is there a standard channel that costs the customer nothing extra?</strong> For example, paying by check, bank transfer or in person. If online card payment is your only option, a convenience fee generally is not appropriate.</li>
<li><strong>Is the channel genuinely optional?</strong> The customer must be able to choose the standard channel instead.</li>
<li><strong>Does your state allow it?</strong> Some states regulate any fee for paying by card. Our <a href="/blog/credit-card-surcharge-rules">surcharge rules guide</a> lists states with card fee restrictions as a starting point.</li>
<li><strong>Are you collecting a consumer debt?</strong> In 2022 the Consumer Financial Protection Bureau published an <a href="https://www.federalregister.gov/documents/2022/07/05/2022-14230/debt-collection-practices-regulation-f-pay-to-pay-fees" target="_blank" rel="noopener noreferrer">advisory opinion on pay-to-pay fees</a>, saying debt collectors covered by the Fair Debt Collection Practices Act generally cannot charge fees for paying online or by phone unless the debt agreement or a law expressly allows them. Courts have disagreed on the point, and the CFPB withdrew many guidance documents in 2025, so check the current position with a lawyer if you collect consumer debts.</li>
<li><strong>Does your processor agreement allow it?</strong> Some processors handle convenience fees for you; others prohibit them.</li>
</ol>

<h2>Worked example: convenience fee vs surcharge</h2>

<p>Dan runs a plumbing company. Customers normally pay his technicians on site by check or card. He adds an online payment page for customers who prefer to pay later from home. His card processor charges an illustrative 2.9% + $0.30 per online card payment (check your own processor's pricing; see our guide to <a href="/blog/credit-card-processing-fees">credit card processing fees</a>).</p>

<table>
<thead><tr><th>Invoice amount</th><th>Online card cost (2.9% + $0.30)</th><th>$3.95 flat convenience fee</th><th>3% surcharge (if allowed)</th></tr></thead>
<tbody>
<tr><td>$120.00</td><td>$3.78</td><td>$3.95</td><td>$3.60</td></tr>
<tr><td>$480.00</td><td>$14.22</td><td>$3.95</td><td>$14.40, capped at cost: $14.22</td></tr>
<tr><td>$1,200.00</td><td>$35.10</td><td>$3.95</td><td>$36.00, capped at cost: $35.10</td></tr>
</tbody>
</table>

<p>Because a Visa-compliant convenience fee is flat, it covers card costs on small invoices but only a small share on large ones. The fee must also apply to online ACH payments, where Dan's cost is far lower, so it may feel unfair to those customers. For Dan, the better choice may be no fee at all, a lower flat fee, or (where permitted) a credit card surcharge that only applies to credit cards. A surcharge is capped at the lower of the network limit or the merchant's cost of acceptance, which is why the capped figures are shown.</p>

<h2>How to show a convenience fee on an invoice</h2>

<ol>
<li><strong>State your payment options and fee in your terms.</strong> For example: Pay by check or bank transfer at no charge. Online card and ACH payments include a $3.95 convenience fee.</li>
<li><strong>Repeat it on the invoice.</strong> Put a short note near the payment instructions so the customer sees it before choosing a method.</li>
<li><strong>Disclose it again at checkout.</strong> The online payment page must show the fee before the customer confirms.</li>
<li><strong>Show it as a separate line on the receipt.</strong> Not always required by network rules, but it avoids disputes.</li>
<li><strong>Do not stack fees.</strong> Do not add a convenience fee and a surcharge to the same payment.</li>
</ol>

<p>You can add a payment terms note and a fee policy in the notes field of our <a href="/invoice-generator">free invoice generator</a>. For more on payment options, see <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a> and <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a>.</p>

<h3>Sample invoice payment section</h3>

<table>
<thead><tr><th>Payment method</th><th>Fee</th><th>How to pay</th></tr></thead>
<tbody>
<tr><td>Check (mail or in person)</td><td>None</td><td>Payable to Dan's Plumbing LLC</td></tr>
<tr><td>Bank transfer (from your bank)</td><td>None</td><td>Account details on request</td></tr>
<tr><td>Online card or ACH payment</td><td>$3.95 convenience fee</td><td>Pay link on invoice</td></tr>
</tbody>
</table>

<h2>Common convenience fee mistakes</h2>

<ul>
<li><strong>Charging a percentage on Visa cards.</strong> Visa's general rules require a flat amount.</li>
<li><strong>Charging in person.</strong> A card terminal at the counter is not an alternative channel under Visa's general rules.</li>
<li><strong>Charging when online is your only channel.</strong> An e-commerce-only business cannot call online payment a convenience.</li>
<li><strong>Charging only card users.</strong> The fee must apply to all payment types in the channel; otherwise it is effectively a surcharge.</li>
<li><strong>Adding the fee to recurring billing.</strong> Not allowed under Visa's general rules. Look at <a href="/blog/recurring-payments-small-business">recurring payment options</a> that avoid the issue.</li>
<li><strong>Hiding the fee.</strong> Fees must be disclosed before payment. Surprise fees lead to chargebacks.</li>
<li><strong>Ignoring tax.</strong> Some states treat seller-charged fees as part of the taxable sale. Use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> and check your state's guidance.</li>
</ul>

<h2>How to tell customers about a new convenience fee</h2>

<p>Introducing a fee to existing customers needs care. People accept a fee they were told about in advance far more readily than one they discover at checkout. A simple rollout:</p>

<ol>
<li><strong>Give notice.</strong> Announce the fee at least one billing cycle before it starts, by email and on your next invoice.</li>
<li><strong>Explain the free option first.</strong> Lead with how customers can pay at no extra cost, then describe the optional channel and its fee.</li>
<li><strong>Update every touchpoint.</strong> Terms and conditions, quotes, invoice notes, your payment page and any phone script your team uses.</li>
<li><strong>Train staff.</strong> Anyone taking payments by phone must state the fee and offer the free alternative before processing.</li>
<li><strong>Check the first transactions.</strong> Confirm the fee appears correctly, only once, and that debit and ACH payments in the channel are treated the same way as credit cards.</li>
</ol>

<p>Sample notice: <em>From December 1, 2026, online card and ACH payments made through our payment portal will include a $3.95 convenience fee. Paying by check or by bank transfer remains free. The fee will always be shown before you confirm a payment.</em></p>

<h2>Convenience fees outside the US</h2>

<p>Rules differ sharply by country. In the UK, the ban on consumer payment surcharges covers card payments and many other methods, so a fee for paying online by card is likely to be caught. In the EU, surcharges on most consumer cards are banned under the revised Payment Services Directive, with national rules for other methods. Australia removed most card surcharges from 1 October 2026. Canada allows credit card surcharges within network caps, except in Quebec. If you invoice customers abroad, assume a fee tied to the way they pay is restricted until you confirm otherwise, and see the country sections of our <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> guide.</p>

<h2>Alternatives to convenience fees</h2>

<ul>
<li><strong>Build card costs into prices.</strong> Simple, legal everywhere and invisible to customers.</li>
<li><strong>Offer a discount for cheaper methods.</strong> A cash or bank transfer discount, presented honestly, is allowed in many places where surcharges are not.</li>
<li><strong>Encourage ACH or pay by bank.</strong> Lower fees than cards; see our guide to <a href="/blog/pay-by-bank">pay by bank</a>.</li>
<li><strong>Use a surcharge where allowed.</strong> Only on credit cards, within caps and with disclosure.</li>
</ul>

<p>A convenience fee can be a fair way to cover an optional payment channel, but only if it is flat, disclosed and applied the same way to every method in that channel. Spell out your fee policy clearly on every invoice using our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up and creates a PDF in your browser that you can send with your payment link.</p>
`,
  },
  {
    slug: "batch-invoicing",
    title: "Batch Invoicing: How to Bill Many Clients at Once",
    description:
      "Batch invoicing explained: when to bill many clients at once, a monthly batch workflow, invoice numbering rules, a worked example and mistakes to avoid in 2026.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["recurring-invoices-guide", "consolidated-invoice", "invoice-numbering-system"],
    faqs: [
      {
        q: "What is the difference between batch invoicing and recurring invoicing?",
        a: "Recurring invoicing automatically sends the same invoice to one customer on a schedule, such as a $500 retainer every month. Batch invoicing creates many invoices in one session, which may be for different customers and different amounts. The two often work together: a business might run a monthly batch that includes recurring retainers plus variable charges for hours, usage or materials collected during the month.",
      },
      {
        q: "Does each invoice in a batch need its own number?",
        a: "Yes. Every invoice should have a unique number, even if it was created in the same batch as fifty others. Tax authorities in many countries expect sequential, unique invoice numbers, and your customers' accounts payable teams use them to match payments. A batch can share a prefix, such as the month, but each invoice still needs its own sequence number within that system.",
      },
      {
        q: "How often should I run invoice batches?",
        a: "Most service businesses run one batch a month, often on the first business day, because it lines up with clients' payment cycles and the month-end close. High-volume businesses sometimes batch weekly to keep cash flowing, and project-based firms may batch when milestones complete. Pick a fixed schedule your clients can rely on, and keep urgent or one-off invoices outside the batch.",
      },
      {
        q: "Can I send batch invoices by email automatically?",
        a: "Most invoicing and accounting software can email a batch of invoices in one action, using each customer's saved billing address. Check that every customer record has the right accounts payable email, that the subject line includes the invoice number and that each invoice is attached or linked. Sending a test batch to yourself first catches formatting problems before your clients see them.",
      },
      {
        q: "Is a batch invoice the same as a consolidated invoice?",
        a: "No. A consolidated invoice combines several orders or deliveries for one customer into a single invoice. Batch invoicing creates many separate invoices at once, usually for many customers. You can use both: for example, a monthly batch where each customer receives one consolidated invoice covering all of that month's deliveries. The terms describe different things and are easy to confuse.",
      },
      {
        q: "What should I check before sending a batch of invoices?",
        a: "Check that all billable time, usage and expenses for the period are recorded, that credits and discounts have been applied, that tax rates match each customer's location, and that purchase order numbers are on invoices for clients who require them. Then spot-check a sample of invoices against the source data and confirm the total of the batch matches your expected revenue for the period.",
      },
      {
        q: "Can I batch invoices in a spreadsheet?",
        a: "Yes, for small volumes. Keep one row per customer with the billing details, items and amounts, and use it as the source for each invoice. The weak points are numbering, tax and sending, which are manual, so a spreadsheet works best up to a few dozen invoices a month. Beyond that, software with batch or bulk invoice features saves time and reduces errors.",
      },
      {
        q: "What happens if one invoice in a batch is wrong?",
        a: "Do not edit an invoice that has already been sent. Issue a credit note for the wrong invoice, then send a corrected invoice with a new number, and explain the change to the customer. This keeps your numbering sequence and records intact. If the error affects the whole batch, such as a wrong tax rate, fix the source data and correct each affected invoice the same way.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Batch invoicing means creating and sending many invoices in one session, usually on a fixed date such as the first business day of each month, instead of billing each client separately as work finishes. It suits businesses with many regular clients, keeps billing on schedule and works best with a clear numbering system and a pre-send checklist.</p>

<p>If you bill more than a handful of clients each month, invoicing one at a time eats hours and invites mistakes. Batch invoicing turns billing into a routine: gather the data, create every invoice, check, send. This guide explains what batch invoicing is, when it makes sense, how to number invoices in a batch, a step-by-step monthly workflow, a worked example with real numbers, and the mistakes that cause disputes.</p>

<h2>What is batch invoicing?</h2>

<p>Batch invoicing is the process of generating a group of invoices together, often for different customers, using shared data such as a billing period, a price list or time records. The invoices are separate documents, each with its own number, customer and amount. What they share is the timing and the process.</p>

<p>It is related to, but different from, these terms:</p>

<ul>
<li><strong><a href="/blog/recurring-invoices-guide">Recurring invoices</a>:</strong> the same invoice sent automatically to one customer on a schedule.</li>
<li><strong><a href="/blog/consolidated-invoice">Consolidated invoices</a>:</strong> several orders for one customer combined into one invoice.</li>
<li><strong><a href="/blog/statement-of-account">Statement of account</a>:</strong> a summary of open invoices and payments for one customer, not a request for new payment.</li>
<li><strong>Batch invoicing:</strong> many invoices created and sent at once, which may include recurring and consolidated invoices.</li>
</ul>

<h2>When does batch invoicing make sense?</h2>

<table>
<thead><tr><th>Business type</th><th>Typical batch</th><th>Why it works</th></tr></thead>
<tbody>
<tr><td>Lawn care, cleaning, pool service</td><td>Monthly, all route clients</td><td>Many clients, repeat visits, predictable pricing</td></tr>
<tr><td>Bookkeepers, IT support, agencies</td><td>Monthly retainers plus extra hours</td><td>Retainers fixed, extras added from time logs</td></tr>
<tr><td>Tutors, music teachers, coaches</td><td>Monthly or per term</td><td>Same families every month, lessons counted</td></tr>
<tr><td>Wholesale and distribution</td><td>Weekly or monthly per customer</td><td>Many deliveries consolidated per customer</td></tr>
<tr><td>Property managers, landlords</td><td>Monthly rent and charges</td><td>Fixed dates, many tenants</td></tr>
<tr><td>Usage-based services</td><td>Monthly after meter reads</td><td>Usage data available at period end</td></tr>
</tbody>
</table>

<p>Batch invoicing is a poor fit for one-off projects, jobs paid on completion and anything where waiting until the batch date would delay payment. Bill those as soon as the work is done. If a large client pays on <a href="/blog/end-of-month-payment-terms">end of month payment terms</a>, a monthly batch timed before their cut-off can also speed up payment.</p>

<h2>How should I number invoices in a batch?</h2>

<p>Every invoice in a batch needs its own unique number. A good <a href="/blog/invoice-numbering-system">invoice numbering system</a> makes batches easy to find later. Common formats:</p>

<ul>
<li><strong>Simple sequence:</strong> INV-1041, INV-1042, INV-1043. Easiest and works everywhere.</li>
<li><strong>Year and sequence:</strong> 2026-0412, 2026-0413. Restart or continue each year according to your local rules.</li>
<li><strong>Month prefix:</strong> 2026-11-001 to 2026-11-047. Shows the batch at a glance.</li>
<li><strong>Client code:</strong> ACME-0023. Useful if each client wants their own sequence, but harder to keep gap-free overall.</li>
</ul>

<p>Do not skip numbers or reuse a number from a voided invoice. If you void one, keep the record and mark it void. The free <a href="/tools/invoice-number-generator">invoice number generator</a> can help you plan a format before your first batch.</p>

<h2>Step-by-step: a monthly batch invoicing workflow</h2>

<ol>
<li><strong>Set the billing period and batch date.</strong> For example, services from October 1 to 31, invoiced on November 2.</li>
<li><strong>Lock the data.</strong> Make sure all time entries, visit logs, deliveries and expenses for the period are recorded and approved.</li>
<li><strong>Update customer records.</strong> Billing contacts, addresses, PO numbers and tax status change more often than you think.</li>
<li><strong>Apply adjustments.</strong> Credits for missed visits, discounts, price changes that start this month and any deposits already paid.</li>
<li><strong>Generate the invoices.</strong> From your software's batch feature, or from a spreadsheet one by one using a template.</li>
<li><strong>Review.</strong> Spot-check at least 10% of invoices against source data and check the batch total against what you expected to bill.</li>
<li><strong>Send.</strong> Email each invoice with a clear subject line; see our <a href="/blog/invoice-email-subject-lines">invoice email subject lines</a> for examples.</li>
<li><strong>Record and follow up.</strong> Log the batch in your receivables tracker and schedule reminders under your <a href="/blog/dunning-process">dunning process</a>.</li>
</ol>

<p>Adding the batch to your <a href="/blog/month-end-close-checklist">month-end close checklist</a> keeps revenue in the right period and stops invoices slipping into next month.</p>

<h2>Worked example: a lawn care company's November batch</h2>

<p>GreenEdge Lawn Care has 42 residential and 6 commercial clients. Instead of invoicing after every visit, it runs one batch on the first business day of each month for the previous month's visits. Residential clients pay $45 per weekly mow; commercial clients have custom monthly contracts plus extras.</p>

<table>
<thead><tr><th>Group</th><th>Clients</th><th>Basis</th><th>Batch amount</th></tr></thead>
<tbody>
<tr><td>Residential weekly mow (4 visits)</td><td>38</td><td>38 x 4 x $45</td><td>$6,840.00</td></tr>
<tr><td>Residential, 1 visit skipped for rain (3 visits)</td><td>4</td><td>4 x 3 x $45</td><td>$540.00</td></tr>
<tr><td>Commercial monthly contracts</td><td>6</td><td>$650 each</td><td>$3,900.00</td></tr>
<tr><td>Extras (leaf cleanup, aeration)</td><td>9 jobs</td><td>From job tickets</td><td>$1,215.00</td></tr>
<tr><td colspan="3"><strong>Total November batch (48 invoices)</strong></td><td><strong>$12,495.00</strong></td></tr>
</tbody>
</table>

<p>The owner estimates (illustratively) that invoicing per visit took about 3 minutes each for roughly 180 visits a month, around 9 hours. The monthly batch takes about 2 hours including review. The numbers are specific to this example; your savings depend on volume and tools.</p>

<h3>Example invoice from the batch</h3>

<p>Invoice 2026-11-017. Billing period: October 1 to 31, 2026. Terms: due in 15 days.</p>

<table>
<thead><tr><th>Date</th><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Oct 2, 9, 16, 23, 30</td><td>Weekly mow, trim and edge</td><td>5</td><td>$45.00</td><td>$225.00</td></tr>
<tr><td>Oct 23</td><td>Leaf cleanup, front and back</td><td>1</td><td>$120.00</td><td>$120.00</td></tr>
<tr><td colspan="4">Credit: September rain skip</td><td>-$45.00</td></tr>
<tr><td colspan="4"><strong>Total due</strong></td><td><strong>$300.00</strong></td></tr>
</tbody>
</table>

<p>October 2026 had five Fridays, so this client had five visits. That is the kind of detail a batch review catches. If you do not use batch software, you can create each invoice quickly in our <a href="/invoice-generator">free invoice generator</a> by changing the client, dates and quantities.</p>

<h2>How to batch invoice hourly and retainer clients</h2>

<p>Service firms that bill time face an extra step: turning hours into invoices. A reliable approach is to split each client's invoice into a fixed part and a variable part.</p>

<ul>
<li><strong>Fixed part:</strong> the monthly retainer or subscription, identical every month unless the contract changes.</li>
<li><strong>Variable part:</strong> hours above the retainer, expenses, mileage and one-off tasks, pulled from time and expense logs for the billing period.</li>
</ul>

<p>For example, an IT support firm charges a $900 monthly retainer that covers 6 hours, plus $125 an hour for extra work. In October a client used 9.5 hours, so the invoice shows the $900 retainer plus 3.5 extra hours at $125 ($437.50), for a total of $1,337.50 before tax. The batch run repeats this calculation for every client. Listing the dates and tasks for extra hours on each invoice prevents most questions before they start.</p>

<p>Ask clients who need approval before payment to confirm extra hours a few days before the batch date. That turns a possible dispute into a quick yes, and it means the invoice can go straight into their payment run.</p>

<h2>How to batch invoice from a spreadsheet</h2>

<p>If you do not have batch features yet, a spreadsheet and a template can still run an efficient batch:</p>

<ol>
<li>Create one sheet with a row per client: name, billing contact, email, address, PO number, tax status, payment terms and rate.</li>
<li>Create a second sheet for the period's activity: date, client, description, quantity and rate. Use a filter or pivot table to total each client.</li>
<li>Reserve a block of invoice numbers for the batch, for example 2026-11-001 to 2026-11-048, and write each number next to the client before you start.</li>
<li>Open your template and fill in one invoice per client from the totals sheet. Save each PDF with the invoice number and client name in the file name.</li>
<li>Record each invoice number, date, amount and due date back in the client sheet so you have a receivables list for follow-up.</li>
</ol>

<p>This works comfortably for a few dozen clients. Beyond that, software that reads the client list and activity directly will save more time than it costs.</p>

<h2>Pre-send checklist for every batch</h2>

<ul>
<li>All time, visits, usage and expenses for the period are entered and approved.</li>
<li>Price changes, discounts and credits for this period are applied.</li>
<li>Each invoice has a unique number, the correct invoice date and the correct due date.</li>
<li>Sales tax rates match each customer's location and tax status; the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps for spot checks.</li>
<li>PO numbers and cost codes are included for clients that require them.</li>
<li>Payment instructions and payment links are present and working.</li>
<li>The batch total matches your expected billing for the period, within a reason you can explain.</li>
<li>A test email has been sent to yourself and looks right on desktop and phone.</li>
</ul>

<h2>Tools for batch invoicing</h2>

<ul>
<li><strong>Accounting software:</strong> many accounting and invoicing apps include batch, bulk or "create multiple invoices" features, sometimes only on higher plans. Check your plan's feature list.</li>
<li><strong>Field service and booking apps:</strong> often generate invoices from completed jobs in bulk.</li>
<li><strong>Subscription billing tools:</strong> handle recurring charges and usage, with automatic retries for failed cards.</li>
<li><strong>Spreadsheet plus template:</strong> fine for small volumes; keep one row per client and copy figures into a template.</li>
</ul>

<p>Whichever tool you use, keep copies of every invoice issued. The IRS explains which business records to keep and for how long in its <a href="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" target="_blank" rel="noopener noreferrer">recordkeeping guidance</a>.</p>

<h2>Does batch invoicing change your tax or accounting?</h2>

<p>No special tax rules apply to invoices just because they were created together. Each invoice is still a separate sale, and the usual rules apply to each one: the invoice date, the tax point, the sales tax or VAT rate for that customer and the period in which you record revenue. Two practical points matter:</p>

<ul>
<li><strong>Invoice date vs service period.</strong> An invoice dated November 2 for October services should show the service period clearly. Under accrual accounting the revenue usually belongs to October, so many businesses record it in the period the work was done; your accountant can confirm the right treatment for you.</li>
<li><strong>Cash basis businesses.</strong> If you report on a cash basis, the batch date does not change when income is counted; payment date does.</li>
</ul>

<p>If you sell across state or national borders, check that each customer record has the right tax settings before the batch, because one wrong default can repeat across dozens of invoices.</p>

<h2>Common batch invoicing mistakes</h2>

<ul>
<li><strong>Billing before data is complete.</strong> Late time entries become awkward supplementary invoices.</li>
<li><strong>Copying last month's invoice without checking.</strong> Prices, visit counts and tax rates change.</li>
<li><strong>Duplicate or skipped numbers.</strong> Two people running batches at once is a common cause.</li>
<li><strong>Wrong billing contact.</strong> One outdated email can delay an invoice by weeks.</li>
<li><strong>Missing PO numbers.</strong> Large customers often reject invoices without one.</li>
<li><strong>Batching urgent invoices.</strong> A finished project worth thousands should not wait three weeks for the next batch date.</li>
<li><strong>No batch total check.</strong> Comparing the batch total with expected revenue catches big errors in seconds.</li>
<li><strong>Editing sent invoices.</strong> Use a <a href="/blog/credit-note-guide">credit note</a> and a new invoice instead.</li>
</ul>

<h2>How batch invoicing helps cash flow</h2>

<p>Batches create a predictable billing date, so clients learn when to expect your invoice and you know when to expect cash. They also make reminders easier: every invoice in the batch shares a due date, so one reminder schedule covers them all. Combine batches with automatic payment options, such as card or ACH on file, and many invoices are paid on the due date without any follow-up. When payments arrive, a short <a href="/blog/thank-you-for-your-payment-message">payment thank you message</a> keeps the relationship warm.</p>

<p>Batch invoicing turns a scattered admin task into a monthly routine. Whether you run batches in software or one by one from a template, our <a href="/invoice-generator">free invoice generator</a> creates clean, numbered invoices with no sign-up and downloads each one as a PDF directly in your browser.</p>
`,
  },
  {
    slug: "thank-you-for-your-payment-message",
    title: "Thank You for Your Payment Message: 30 Templates",
    description:
      "Thank you for your payment message templates for email, text, WhatsApp and invoice notes, plus wording for partial, late and first payments and what to include.",
    category: "invoicing-basics",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: ["payment-confirmation-email", "payment-receipt-template", "dunning-process"],
    faqs: [
      {
        q: "How do you say thank you for your payment professionally?",
        a: "Keep it short and specific: thank the customer, confirm the amount, invoice number, date and payment method, and state the remaining balance, even if it is zero. For example: Thank you for your payment of $850.00 received on November 3, 2026 for invoice INV-1042. Your account is now paid in full. A receipt is attached. Specific details sound more professional than a long, warm message without facts.",
      },
      {
        q: "Should I send a thank you message for every payment?",
        a: "For most small businesses, yes, or at least an automatic payment confirmation. It confirms the money arrived, stops reminders from being sent by mistake and gives the customer a record for their own books. For high-volume recurring payments, an automatic receipt is enough, and a personal note can be saved for first payments, large payments or customers who cleared an overdue balance.",
      },
      {
        q: "What is the difference between a payment thank you message and a receipt?",
        a: "A receipt is a record that proves payment: it lists the amount, date, method, what was paid for and who received it. A thank you message is the communication that goes with it, adding courtesy and next steps. Many businesses combine the two by writing a short thank you note in the email body and attaching the receipt or a paid invoice as a PDF.",
      },
      {
        q: "How do I thank a client for a late payment without sounding passive-aggressive?",
        a: "Thank them plainly and do not mention the delay unless there is a fee or next step to explain. For example: Thank you for your payment of $1,200.00 for invoice INV-0987. Your account is now up to date. If you would like to set up automatic payments for future invoices, I can send a link. That keeps the relationship positive while making future payments easier.",
      },
      {
        q: "Can I send a payment thank you by text message?",
        a: "Yes, if the customer gave you their mobile number for account or billing messages. Keep the text short, include your business name, the amount and the invoice number, and do not include sensitive details such as full card numbers. If you also send marketing texts, keep those separate and follow the consent rules for promotional messages, which are stricter than for transactional notices.",
      },
      {
        q: "Should a thank you for payment message include a sales pitch?",
        a: "A light mention is fine, but the main purpose must be confirming the payment. A short line such as: When you are ready to book your spring service, reply to this email, is usually welcome. A full promotional email defeats the purpose and, in the US, can change how commercial email rules apply. Keep offers brief and secondary to the payment details.",
      },
      {
        q: "How soon should I send a thank you after receiving payment?",
        a: "Within one business day is a good standard, and automatic confirmations should go out immediately. Bank transfers and checks can take a few days to clear, so confirm when the funds have actually arrived in your account, not when the customer says they sent them. If you need to wait for a check to clear, you can acknowledge receipt first and confirm the cleared payment later.",
      },
      {
        q: "What should I write on a paid invoice?",
        a: "Mark it clearly as PAID, add the payment date, amount and method, and show a balance due of zero. You can add a short line in the notes, such as: Paid in full on November 3, 2026 by bank transfer. Thank you for your business. Sending the paid invoice as a PDF gives the customer a clean record for their accounts payable or tax files.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A thank you for your payment message confirms that you received a customer's payment and thanks them for it. A good one states the amount, invoice number, date received, payment method and any remaining balance, attaches a receipt or paid invoice, and is sent within one business day by email, text or an invoice note.</p>

<p>Most businesses put real effort into chasing payments and almost none into acknowledging them. That is a missed opportunity. A short payment thank you message confirms the money arrived, prevents mistaken reminders, gives the customer a record and makes it more likely they will pay on time next time. Below you will find 30 templates for email, SMS, WhatsApp and invoice notes, plus wording for partial, late, first and recurring payments.</p>

<h2>What should a thank you for your payment message include?</h2>

<table>
<thead><tr><th>Element</th><th>Example</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Amount received</td><td>$850.00</td><td>Confirms the exact figure</td></tr>
<tr><td>Invoice number</td><td>INV-1042</td><td>Lets both sides match records</td></tr>
<tr><td>Date received</td><td>November 3, 2026</td><td>Shows the payment was on time (or not)</td></tr>
<tr><td>Payment method</td><td>Bank transfer, card ending 4421</td><td>Helps the customer reconcile; never show full card numbers</td></tr>
<tr><td>Remaining balance</td><td>$0.00, or $400.00 still due</td><td>Avoids confusion on partial payments</td></tr>
<tr><td>Receipt or paid invoice</td><td>PDF attached or linked</td><td>Gives the customer proof of payment</td></tr>
<tr><td>Next step</td><td>Next invoice date, upcoming service</td><td>Keeps the relationship moving</td></tr>
</tbody>
</table>

<p>If you need a formal receipt as well, use our <a href="/blog/payment-receipt-template">payment receipt template</a>. For an automatic, system-style message, see our guide to the <a href="/blog/payment-confirmation-email">payment confirmation email</a>.</p>

<h2>Thank you for your payment email templates</h2>

<h3>1. Standard (paid in full)</h3>
<p><em>Subject: Payment received: invoice [number]</em><br>Hi [Name], thank you for your payment of [amount] for invoice [number], received on [date] by [method]. Your account is now paid in full. I have attached a receipt for your records. Thanks again, [Your name]</p>

<h3>2. Short and formal (B2B)</h3>
<p>Dear [Name], we confirm receipt of [amount] on [date] in settlement of invoice [number]. The invoice is now marked as paid. A copy is attached for your accounts payable records. Kind regards, [Name, title]</p>

<h3>3. First payment from a new client</h3>
<p>Hi [Name], thank you for your first payment of [amount] for invoice [number]. It is great to be working with you. Your receipt is attached. If you would like future invoices sent to a different contact, just let me know.</p>

<h3>4. Partial payment</h3>
<p>Hi [Name], thank you for your payment of [amount] received on [date] toward invoice [number]. The remaining balance is [amount], due on [date]. A receipt for this payment is attached. Our guide to <a href="/blog/partial-payment-invoice">partial payment invoices</a> explains how we show this on your next invoice.</p>

<h3>5. Deposit received</h3>
<p>Hi [Name], thank you for your deposit of [amount]. Your booking for [date or project] is confirmed. The balance of [amount] will be invoiced on [date]. Receipt attached.</p>

<h3>6. Late payment received</h3>
<p>Hi [Name], thank you for your payment of [amount] for invoice [number]. Your account is now up to date. To make future payments easier, I can set up automatic card or bank payments. Just reply and I will send a link.</p>

<h3>7. Payment after a payment plan</h3>
<p>Hi [Name], we have received your final installment of [amount]. Your balance is now zero and your payment plan is complete. Thank you for keeping to the schedule. We appreciate it.</p>

<h3>8. Recurring payment (monthly)</h3>
<p>Hi [Name], thank you, your [month] payment of [amount] for [service] has been received. Your next payment of [amount] will be collected on [date]. Your receipt is attached.</p>

<h3>9. Overpayment</h3>
<p>Hi [Name], thank you for your payment of [amount] for invoice [number]. It exceeded the invoice total by [amount]. We can refund the difference or apply it as a credit to your next invoice. Please let me know which you prefer.</p>

<h3>10. Large or milestone payment</h3>
<p>Hi [Name], thank you for the milestone payment of [amount] for [project phase]. We are starting [next phase] on [date] and will send an update by [date].</p>

<h2>Thank you for payment text message (SMS) templates</h2>

<p>Texts should be short, identify your business and avoid sensitive details. For more on texting invoices and consent, see our guide on <a href="/blog/how-to-send-an-invoice-by-text">how to send an invoice by text</a>.</p>

<ol start="11">
<li>[Business]: Thanks [Name]! We received your $[amount] payment for invoice [number]. Your balance is $0. Receipt: [link]</li>
<li>[Business]: Payment of $[amount] received, thank you. Remaining balance on [number]: $[amount], due [date].</li>
<li>[Business]: Thank you for your deposit of $[amount]. You are booked for [date] at [time].</li>
<li>[Business]: Thanks for paying so quickly, [Name]. See you at your next visit on [date].</li>
<li>[Business]: Your [month] payment of $[amount] went through. Thank you!</li>
<li>[Business]: Got it, thank you! Invoice [number] is paid in full.</li>
</ol>

<h2>WhatsApp thank you for payment templates</h2>

<p>WhatsApp messages can be a little warmer and can include the paid invoice PDF. See <a href="/blog/how-to-send-invoice-on-whatsapp">how to send an invoice on WhatsApp</a> for setup tips.</p>

<ol start="17">
<li>Hi [Name], thank you for your payment of [amount] for invoice [number]. I have attached the paid invoice for your records.</li>
<li>Payment received, thank you [Name]! Your order will be dispatched on [date].</li>
<li>Thanks [Name], we have received [amount]. Remaining balance: [amount]. No rush, it is due on [date].</li>
<li>Thank you for the payment, [Name]. Always a pleasure working with you. See you next month.</li>
</ol>

<h2>Thank you notes for invoices and receipts</h2>

<p>These short lines work in the notes field of an invoice or a paid invoice PDF. You can add them in the notes section of our <a href="/invoice-generator">free invoice generator</a>.</p>

<ol start="21">
<li>Thank you for your business. We appreciate your prompt payment.</li>
<li>Paid in full on [date] by [method]. Thank you!</li>
<li>Thank you for choosing [Business]. We look forward to working with you again.</li>
<li>Payment received with thanks. Balance due: $0.00.</li>
<li>We appreciate your payment and your trust in our work.</li>
<li>Thank you for paying on time. It helps a small business like ours more than you know.</li>
<li>Thanks for your payment. Questions about this invoice? Contact [email or phone].</li>
<li>Your support keeps our team going. Thank you for your payment.</li>
<li>Received with thanks on [date]. Please keep this copy for your records.</li>
<li>Thank you! Refer a friend and receive [offer] on your next service.</li>
</ol>

<h2>Thank you for your payment messages by industry</h2>

<p>The basic structure stays the same, but the best next step differs by business type.</p>

<table>
<thead><tr><th>Business</th><th>Sample message</th><th>Useful next step</th></tr></thead>
<tbody>
<tr><td>Home services (plumbing, HVAC, cleaning)</td><td>Thanks for your payment of $285.00 for today's service. Your receipt is attached.</td><td>Reminder of warranty or next maintenance date</td></tr>
<tr><td>Freelancer or agency</td><td>Thank you for paying invoice INV-0312 for the October content retainer.</td><td>Date of next deliverable or monthly report</td></tr>
<tr><td>Landlord or property manager</td><td>Rent of $1,650.00 for November received on November 1. Thank you.</td><td>Rent receipt and next due date</td></tr>
<tr><td>Tutor or coach</td><td>Thanks for your payment for November's eight lessons.</td><td>Lesson schedule for next month</td></tr>
<tr><td>Wholesaler or supplier</td><td>We confirm receipt of $6,420.00 in settlement of invoices 5521 and 5534.</td><td>Updated statement of account or credit limit</td></tr>
<tr><td>Event or wedding vendor</td><td>Thank you for your deposit of $1,000.00. Your date is now reserved.</td><td>Balance due date and planning checklist</td></tr>
</tbody>
</table>

<h3>Matching the tone to the customer</h3>

<ul>
<li><strong>Corporate clients:</strong> formal and brief. Use "we confirm receipt", reference invoice and PO numbers, and send from a named finance or account contact.</li>
<li><strong>Small business clients:</strong> friendly and professional. A first name and a one-line thank you is enough.</li>
<li><strong>Consumers:</strong> warm and simple. Avoid accounting jargon such as "remittance" or "settlement".</li>
<li><strong>Customers who paid late:</strong> neutral. Thank them for the payment, confirm the balance and offer an easier way to pay next time.</li>
</ul>

<h3>Should you send a handwritten thank you card?</h3>

<p>For most payments, no: a digital confirmation is faster and gives the customer a record. A handwritten card can make sense once a year for your best clients, after a very large project or when a client went out of their way to pay early during a difficult month for you. It works as relationship building, not as payment confirmation, so still send the standard receipt.</p>

<h2>Worked example: a partial payment thank you</h2>

<p>Lena, a web designer, sends invoice INV-2026-077 for $3,600 on October 5, 2026, due November 4. Her client pays $2,000 on November 2 and promises the rest by November 20. Her message:</p>

<p><em>Subject: Payment received: $2,000.00 toward INV-2026-077</em><br>Hi Sam, thank you for your payment of $2,000.00 received on November 2, 2026 by bank transfer toward invoice INV-2026-077. The remaining balance is $1,600.00, which we agreed is due by November 20, 2026. A receipt for this payment is attached. Thanks, Lena</p>

<table>
<thead><tr><th>Line</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Invoice INV-2026-077 total</td><td>$3,600.00</td></tr>
<tr><td>Payment received Nov 2, 2026</td><td>-$2,000.00</td></tr>
<tr><td><strong>Balance due by Nov 20, 2026</strong></td><td><strong>$1,600.00</strong></td></tr>
</tbody>
</table>

<p>The message confirms the facts in one paragraph, restates the agreed date and gives the client a record. When the $1,600 arrives, Lena sends template 1 with the paid invoice attached.</p>

<h2>How to send payment thank you messages step by step</h2>

<ol>
<li><strong>Confirm the money has arrived.</strong> Check your bank or processor, not just the customer's message. Checks and some transfers take days to clear.</li>
<li><strong>Mark the invoice as paid.</strong> Update your records so no reminder is sent by your <a href="/blog/dunning-process">dunning process</a>.</li>
<li><strong>Pick the right channel.</strong> Use the channel the customer pays through or prefers: email for B2B, text or WhatsApp for local services.</li>
<li><strong>Use a template.</strong> Fill in amount, invoice number, date, method and balance.</li>
<li><strong>Attach proof.</strong> A receipt or paid invoice PDF.</li>
<li><strong>Send within one business day.</strong> Automate it if your software allows.</li>
</ol>

<h2>Can you automate payment thank you messages?</h2>

<p>Yes, and for most businesses you should. Most invoicing software, payment processors and online payment pages can send an automatic confirmation the moment a payment succeeds. Automation works well for card and online payments, where the system knows instantly that the money arrived. It works less well for checks, cash and bank transfers you match by hand, where a person has to confirm receipt first.</p>

<p>A good setup combines both: an automatic receipt for every online payment, plus a personal note for first payments, large payments and customers who cleared an overdue balance. Review your automatic template once a year so it still shows your current business name, contact details and payment options.</p>

<h2>Do thank you emails need to follow email marketing rules?</h2>

<p>In the US, the FTC's <a href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" target="_blank" rel="noopener noreferrer">CAN-SPAM compliance guide</a> explains that transactional or relationship messages, such as confirming a completed transaction, are mostly exempt from the commercial email requirements, but must not contain false or misleading routing information. If your message is mainly promotional, the full rules apply. Keeping payment messages focused on the payment avoids the question. This is general information, not legal advice.</p>

<h2>Common mistakes with payment thank you messages</h2>

<ul>
<li><strong>Not sending one at all.</strong> Customers are left wondering if the payment arrived.</li>
<li><strong>Vague wording.</strong> "Thanks for the payment!" without the amount or invoice number is not a record.</li>
<li><strong>Thanking before funds clear.</strong> A bounced check after a "paid in full" message is awkward to undo.</li>
<li><strong>Ignoring partial balances.</strong> Always state what is still owed.</li>
<li><strong>Leaving reminders running.</strong> A late reminder after payment annoys good customers. Check your <a href="/blog/payment-reminder-emails">payment reminder emails</a> are turned off for paid invoices.</li>
<li><strong>Sharing sensitive data.</strong> Never include full card or bank account numbers.</li>
<li><strong>Turning it into an ad.</strong> Keep any offer to one line.</li>
</ul>

<p>A short thank you for your payment message costs nothing and closes every invoice on a positive note. Create invoices and paid invoice PDFs with our <a href="/invoice-generator">free invoice generator</a>: it is free, needs no sign-up and builds the PDF in your browser so you can attach it to your thank you email, text or WhatsApp message.</p>
`,
  },
];
