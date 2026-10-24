import type { PostDraft } from "../blog";

export const FINANCE_2026_POSTS: PostDraft[] = [
  {
    slug: "ai-invoicing-automation",
    title: "AI Invoicing: What AI Automates in 2026 (and What Not)",
    description:
      "AI invoicing explained: which billing and accounts receivable tasks AI can automate in 2026, where it still needs a human, and how to start safely and cheaply.",
    category: "business-finance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: ["chatgpt-invoice", "invoice-generator-vs-accounting-software", "accounts-receivable-guide"],
    faqs: [
      {
        q: "Can AI create an invoice for me from a short description?",
        a: "Yes. A general chatbot or an AI feature inside invoicing software can turn a note like \"12 hours of design at $85\" into line items, a subtotal and a draft email. You still need to check the client's legal name, the tax rate, the invoice number and the arithmetic, because language models can produce figures that look right but are not.",
      },
      {
        q: "Is it safe to upload client invoices to an AI tool?",
        a: "Only if you have read the tool's data policy. Invoices contain names, addresses, bank details and sometimes tax IDs. Check whether the provider stores your data, uses it for training, and where it is processed. Many businesses remove bank details and personal data before pasting anything into a general-purpose chatbot.",
      },
      {
        q: "Will AI replace my bookkeeper or accountant?",
        a: "Not for judgment calls. AI is good at extracting data, matching payments and drafting messages. It is not accountable for your tax return, cannot sign off year-end accounts, and can misclassify unusual transactions. Most small businesses use AI to reduce routine data entry and keep a human for review, tax decisions and anything that goes to a tax authority.",
      },
      {
        q: "Does AI invoicing software make my invoices legally compliant e-invoices?",
        a: "Not automatically. Countries with e-invoicing mandates require structured formats such as UBL or CII XML, sometimes cleared through a government platform or sent over Peppol. An AI feature that writes a nice PDF does not meet those rules on its own. You need software certified or connected for the specific mandate.",
      },
      {
        q: "What is the cheapest way to try AI invoicing?",
        a: "Start with the free tier of an invoicing app that already includes automated reminders, or use a free chatbot to draft reminder emails and line-item descriptions while you build the invoice itself in a free generator. Measure one thing, such as days to payment, for a few months before paying for an AI add-on.",
      },
      {
        q: "What does an AI agent do in billing?",
        a: "An AI agent is software that can take a sequence of actions toward a goal, such as reading a timesheet, drafting an invoice, sending it and following up, with limited human input. In billing, agents are still new; most businesses keep an approval step before anything is sent to a client or money moves.",
      },
      {
        q: "Can AI read supplier invoices and enter them into my books?",
        a: "Yes, this is one of the most mature uses of AI in billing. Document extraction tools read PDFs, photos and emails and pull the supplier, invoice number, dates, amounts and tax into a draft bill. Accuracy is usually best on clean digital PDFs and weaker on handwritten, blurry or unusual layouts, so keep an approval step and check the tax amount and supplier bank details before anything is paid.",
      },
      {
        q: "What is three-way matching, and can AI automate it?",
        a: "Three-way matching compares a supplier invoice with the purchase order and the delivery or receiving record before you pay, so you only pay for what you ordered and received. AI and rules-based software can match the three documents automatically and flag differences in quantity, price or tax. A person should still resolve the exceptions, because a mismatch can mean a partial delivery, a price change or a billing error.",
      },
      {
        q: "Can AI spot duplicate or fraudulent invoices?",
        a: "It can help. Software can flag invoices with the same number, amount or supplier as one already paid, and highlight unusual patterns such as a new bank account or an invoice from an unknown sender. It will not catch every scam, especially business email compromise that copies a real supplier. Always confirm any change of bank details by phoning the supplier on a number you already have, not one in the email.",
      },
      {
        q: "Can I use AI-written line items in the free invoice generator?",
        a: "Yes. You can ask a chatbot to tidy your work notes into clear line-item descriptions, then paste them into the invoice generator, where you enter the quantities and rates yourself and the tool calculates subtotals, tax, discounts and the balance due. It then creates a PDF in your browser. It does not send the invoice or chase payment, so you email the PDF to your client yourself.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> AI invoicing uses machine learning and language models to take routine work out of billing: reading documents, drafting invoices and emails, matching incoming payments to open invoices, predicting who will pay late and sending automated payment reminders. In 2026 it reliably automates data entry and follow-up. It does not replace human review of tax, pricing, disputes or legal e-invoicing compliance.</p>

<p>"AI" now appears on nearly every invoicing and accounting product page, which makes it hard to tell what is genuinely automated and what is a chatbot bolted onto the same software. This guide sorts the tasks AI handles well from the ones that still need you, shows the time arithmetic so you can judge whether it is worth paying for, and gives a safe way to start. If you just need a clean invoice right now, the <a href="/invoice-generator">free invoice generator</a> builds one in your browser with no account.</p>

<p>A note on scope: we describe categories of features rather than ranking specific AI products, because features and prices change monthly. Always test a tool on your own invoices before relying on it.</p>

<h2>What is AI invoicing?</h2>
<p>AI invoicing is the use of artificial intelligence inside the billing and accounts receivable (AR) process. It is a subset of broader invoice automation, which has existed for years in the form of rules: "send a reminder seven days after the due date", "repeat this invoice on the first of each month". The difference is that AI handles inputs that rules cannot, such as messy emails, scanned receipts, free-text timesheets or a remittance note that says "paid March invoices less the disputed one".</p>
<p>Three technologies do most of the work:</p>
<ul>
<li><strong>Document extraction (OCR plus machine learning)</strong> reads PDFs, photos and emails and pulls out fields such as supplier, date, amount and tax.</li>
<li><strong>Large language models (LLMs)</strong> write and summarize text: line-item descriptions, reminder emails, dispute replies and plain-English explanations of an aging report.</li>
<li><strong>Predictive models</strong> score customers on likely payment date based on past behavior, which helps you decide whom to chase first.</li>
</ul>
<p>An <strong>AI agent</strong> combines these: it can read a timesheet, draft the invoice, send it and follow up. In billing, agents are still early, and sensible setups keep a human approval step before anything reaches a client.</p>

<h2>What AI invoicing automates well in 2026</h2>
<table><thead><tr><th>Task</th><th>What AI does</th><th>Reliability</th><th>Human role</th></tr></thead><tbody>
<tr><td>Drafting invoices from notes or timesheets</td><td>Turns hours, rates and notes into line items and totals</td><td>Good for drafts</td><td>Check numbers, tax and client details</td></tr>
<tr><td>Reading supplier bills (accounts payable)</td><td>Extracts supplier, amounts, due date and tax into your books</td><td>Good on clean PDFs, weaker on handwritten or unusual layouts</td><td>Approve before payment</td></tr>
<tr><td>Automated payment reminders</td><td>Sends scheduled reminders and adjusts tone by stage</td><td>High (often rules-based, not truly AI)</td><td>Set the schedule and wording once</td></tr>
<tr><td>Cash application (payment matching)</td><td>Matches bank deposits to open invoices, including partial payments</td><td>Good when references are clear</td><td>Resolve unmatched items</td></tr>
<tr><td>Late-payment prediction</td><td>Flags customers likely to pay late</td><td>Useful with enough history</td><td>Decide on terms, deposits or follow-up</td></tr>
<tr><td>Summaries and reporting</td><td>Explains AR aging, DSO trends and cash position in plain English</td><td>Good, but check the underlying figures</td><td>Act on the insight</td></tr>
</tbody></table>
<p>Notice that the most valuable automation for a small business, reminders, is usually plain rules. You do not need AI for it; you need software that sends invoices and tracks their status. Our guide to <a href="/blog/payment-reminder-emails">payment reminder emails</a> has wording you can load into any tool.</p>

<h2>What AI should not do on its own</h2>
<h3>Decide tax treatment</h3>
<p>Whether a sale is standard-rated, zero-rated, exempt or reverse-charged depends on the customer, the place of supply and local law. An AI model can suggest a rate, but a wrong suggestion becomes your liability. Keep tax logic in configured settings that you or your accountant have checked, and use the <a href="/tools/sales-tax-calculator">sales tax calculator</a> to confirm figures.</p>
<h3>Set prices or approve discounts</h3>
<p>AI can show you that a client always pays 20 days late. It should not decide to change their terms or write off a balance. Those are commercial decisions that affect relationships.</p>
<h3>Handle disputes without review</h3>
<p>A drafted reply to a disputed invoice is a time saver. Sending it automatically is a risk, because a single wrong admission can cost more than the invoice. Read our guide to <a href="/blog/invoice-dispute">resolving an invoice dispute</a> for the process to follow.</p>
<h3>Produce legally valid e-invoices by itself</h3>
<p>In countries with e-invoicing mandates, a valid invoice is structured data (for example UBL or CII XML following EN 16931), often sent over the <a href="https://peppol.org/" target="_blank" rel="noopener noreferrer">Peppol network</a> or cleared by the tax authority. A well-written PDF is not an e-invoice. See <a href="/blog/e-invoice-vs-pdf-invoice">e-invoice vs PDF invoice</a> before trusting any tool's compliance claims.</p>
<h3>Do the arithmetic you cannot verify</h3>
<p>Language models predict text; they do not calculate in the way a spreadsheet does. Totals, tax and currency conversions should come from a calculation engine, not from generated text. If you use a chatbot to draft an invoice, rebuild the totals in a proper tool. Our guide to <a href="/blog/chatgpt-invoice">making an invoice with ChatGPT</a> includes a checklist for this.</p>

<h2>How AI accounts receivable works, step by step</h2>
<ol>
<li><strong>Capture.</strong> Work is logged in timesheets, a CRM, a project tool or email.</li>
<li><strong>Draft.</strong> The system turns that record into an invoice draft with line items, tax and terms.</li>
<li><strong>Review.</strong> A person checks the draft. This is the step to keep, at least until you trust the output.</li>
<li><strong>Send and track.</strong> The software emails the invoice, records when it is opened and adds a payment link.</li>
<li><strong>Follow up.</strong> Automated reminders go out before and after the due date.</li>
<li><strong>Match.</strong> When money arrives, the system matches it to the invoice and flags short or unmatched payments.</li>
<li><strong>Report.</strong> The aging report and cash forecast update. See the <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> guide for how to read it.</li>
</ol>
<p>Steps 4 to 7 need an invoicing or accounting system that holds your data. A standalone PDF generator, including ours, does step 2 well but does not send, track, remind or match. Our comparison of an <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a> explains when you need the bigger system.</p>

<h2>Is AI invoicing worth paying for? A worked example</h2>
<p>Put a value on your time before you buy. Suppose you send 40 invoices a month and handle the AR yourself. The times below are your own estimates, not industry data:</p>
<table><thead><tr><th>Task</th><th>Minutes now (per invoice)</th><th>Minutes with automation</th><th>Saved per invoice</th></tr></thead><tbody>
<tr><td>Drafting and checking</td><td>8</td><td>4</td><td>4</td></tr>
<tr><td>Sending and logging</td><td>3</td><td>1</td><td>2</td></tr>
<tr><td>Chasing payment</td><td>6</td><td>2</td><td>4</td></tr>
<tr><td>Matching the payment</td><td>3</td><td>1</td><td>2</td></tr>
<tr><td><strong>Total</strong></td><td><strong>20</strong></td><td><strong>8</strong></td><td><strong>12</strong></td></tr>
</tbody></table>
<p>The maths: 12 minutes × 40 invoices = 480 minutes, or 8 hours a month. If your time is worth $50 an hour, that is 8 × $50 = $400 a month of value. A tool costing $40 a month pays for itself many times over. If you send 5 invoices a month, the same saving is 12 × 5 = 60 minutes, worth $50, and a paid add-on is harder to justify; a free tool with reminders is usually enough.</p>
<p>The bigger prize is often faster payment rather than saved minutes. If reminders bring in a $3,000 invoice two weeks earlier, that cash is available for payroll or stock. Track your <a href="/blog/days-sales-outstanding">days sales outstanding (DSO)</a> before and after switching to see whether invoice automation actually changed anything.</p>

<h2>Common AI invoicing mistakes</h2>
<ul>
<li><strong>Removing the review step too early.</strong> Keep human approval until you have seen a few months of clean output.</li>
<li><strong>Pasting sensitive data into consumer chatbots.</strong> Bank details and tax IDs should not go into tools whose data policies you have not read.</li>
<li><strong>Trusting generated totals.</strong> Recalculate every amount in a real calculation tool.</li>
<li><strong>Automating a broken process.</strong> If your invoices lack PO numbers or clear due dates, automation sends bad invoices faster. Fix the basics first with our list of <a href="/blog/common-invoice-mistakes">common invoice mistakes</a>.</li>
<li><strong>Over-chasing good clients.</strong> Aggressive automated reminders to a client who always pays on day 32 can irritate more than they help. Segment your reminder schedules.</li>
<li><strong>Assuming "AI" means compliant.</strong> Ask vendors specifically which e-invoicing mandates they are certified for.</li>
</ul>

<h2>AI invoicing readiness checklist</h2>
<ul>
<li>Every invoice has a unique number from a consistent sequence (the <a href="/tools/invoice-number-generator">invoice number generator</a> helps).</li>
<li>Clients' legal names, addresses, tax IDs and PO requirements are stored in one place.</li>
<li>Payment terms and late fees are written into your contract and shown on the invoice.</li>
<li>You know your current DSO and the share of invoices paid late.</li>
<li>You have read the data policy of any AI tool that will see client data.</li>
<li>Someone owns the final review before an invoice or reminder goes out.</li>
<li>If you sell in an e-invoicing country, you have confirmed the tool supports that mandate.</li>
</ul>

<h2>Where AI agents in billing are heading</h2>
<p>The direction is clear even if the details are not: more of the cycle from "work done" to "cash in the bank" will run with less manual input, and payment networks are adding features such as request-for-payment that make automated collection easier. The parts that stay human are the ones involving judgment and liability: pricing, tax, credit decisions and disputes. A good rule for any new feature is to let it draft, suggest and flag, and to let a person decide.</p>

<h2>Next step</h2>
<p>Pick the single most time-consuming billing task you do each month. If it is writing invoices, draft your next one in the <a href="/invoice-generator?template=modern">invoice generator with the modern template</a> and time yourself. If it is chasing payment, move your invoicing into a tool with automated reminders and compare your DSO after three months. Pay for AI features only once you can see the saving in your own numbers.</p>
`,
  },
  {
    slug: "cash-flow-forecast",
    title: "Cash Flow Forecast: 13-Week Template and Example",
    description:
      "Build a 13-week cash flow forecast: a weekly template, a fully worked example with real arithmetic, how to forecast receipts from invoices, and fixes for gaps.",
    category: "business-finance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: ["cash-flow-management", "accounts-receivable-aging-report", "invoice-financing-vs-line-of-credit"],
    faqs: [
      {
        q: "Why 13 weeks and not three months?",
        a: "Thirteen weeks is one quarter (52 ÷ 4), but split into weeks. Monthly forecasts hide timing problems: payroll, rent and a tax payment can all land in the same week while customer receipts arrive in another. Weekly buckets show the low point that a monthly total smooths away, which is exactly what you need to manage.",
      },
      {
        q: "How accurate should a cash flow forecast be?",
        a: "Aim for accuracy in the first four weeks and direction in the rest. Compare each week's actual closing cash with the forecast and note why it differed. If you are regularly off by more than a few percent in the near weeks, your receipts assumptions are usually the cause: customers paying later than their terms.",
      },
      {
        q: "Should I include sales tax or VAT in the forecast?",
        a: "Yes. A cash forecast tracks money in and out of the bank, so receipts include the tax you collect and payments include the tax you remit to the authority when it is due. Leaving tax out makes cash look healthier than it is until the return is due.",
      },
      {
        q: "What is the difference between a cash flow forecast and a budget?",
        a: "A budget plans income and costs, usually on an accrual basis, for a year. A cash flow forecast predicts the actual timing of money entering and leaving the bank over a shorter period. A business can be on budget for profit and still run out of cash because customers pay slowly.",
      },
      {
        q: "Can I build a 13-week cash flow forecast in Excel or Google Sheets?",
        a: "Yes. Put weeks across the columns and categories down the rows, with opening cash, total receipts, total payments, net cash flow and closing cash. Each week's opening cash equals the previous week's closing cash. A spreadsheet is enough for most small businesses; accounting software adds automatic bank and invoice data.",
      },
      {
        q: "What is the difference between a cash flow forecast and a cash flow statement?",
        a: "A cash flow statement looks backward: it reports the cash that actually moved during a past period and is one of the three main financial statements, alongside the income statement and balance sheet. A cash flow forecast looks forward, estimating future receipts and payments. Use the statement to check your history and to test the assumptions in your forecast, such as how quickly customers really pay.",
      },
      {
        q: "How much cash buffer should a small business keep?",
        a: "There is no official figure; it depends on how uneven your income is and how quickly you could raise cash. Many owners set a minimum based on fixed costs, such as enough to cover a full payroll and rent cycle, and raise it if a few large clients make up most of their receipts. Put your chosen minimum in the forecast as its own row and treat any week below it as a warning.",
      },
      {
        q: "How do I forecast cash flow for a new business with no payment history?",
        a: "Start with what is certain, such as signed contracts, deposits, rent, loan repayments and payroll, then add sales estimates you can justify. Without a track record, assume customers pay later than their terms, for example two or three weeks after the due date, and keep new sales modest. Replace assumptions with actual figures every week; after a couple of months you will have real payment habits to forecast from.",
      },
      {
        q: "How do I handle foreign currency receipts in a cash flow forecast?",
        a: "Forecast them in your home currency at a cautious exchange rate, then deduct the conversion and transfer fees your bank or payment provider charges. Put each receipt in the week the converted money is expected to reach your account, which can be a day or more after the customer pays. If a large share of receipts is in another currency, run a second scenario with a weaker rate to see how low your balance could go.",
      },
      {
        q: "Will a lender ask to see a 13-week cash flow forecast?",
        a: "Some will. Banks and specialist lenders often ask for cash flow projections when you apply for working capital finance, and a 13-week forecast is common in restructuring or when a business is under pressure. Even when it is not required, a clear weekly forecast shows how much you need, when you need it and how you will repay, which makes your application easier for the lender to assess.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A cash flow forecast predicts how much cash will enter and leave your bank account over a set period, so you can spot shortfalls before they happen. The 13-week version breaks one quarter into weekly columns: opening cash, plus expected receipts, minus expected payments, equals closing cash. Update it every week and act on the lowest balance.</p>

<p>Most small businesses do not fail because they are unprofitable on paper; they get into trouble because cash arrives later than bills fall due. A weekly cash flow projection makes that timing visible. This guide gives you a 13-week cash flow template, a fully worked example, a method for forecasting receipts from your open invoices, and the levers to pull when the forecast shows a gap. For the wider picture, including tactics for improving cash flow in general, see our <a href="/blog/cash-flow-management">cash flow management guide</a>.</p>

<p><em>This article is general information, not financial advice. Use your own figures and consider advice from an accountant for important funding decisions.</em></p>

<h2>What is a cash flow forecast?</h2>
<p>A cash flow forecast (also called a cash flow projection or cash budget) is a schedule of expected cash receipts and payments over future periods. It is different from a profit and loss statement in two ways:</p>
<ul>
<li><strong>Timing.</strong> Revenue counts on the P&amp;L when you invoice (under accrual accounting); cash counts in the forecast when the customer actually pays. Our guide to <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> explains the difference.</li>
<li><strong>Non-P&amp;L items.</strong> Loan repayments, owner drawings, asset purchases and tax payments affect cash but not profit in the same way. They all belong in a cash forecast.</li>
</ul>

<h2>Why use a 13-week cash flow forecast?</h2>
<p>The 13-week cash flow forecast is standard in banking and turnaround work because it hits a useful balance: long enough to see a quarter's tax payments and seasonal dips, short enough that you can estimate each week with some confidence. It suits you if:</p>
<ul>
<li>Your cash balance swings a lot within a month (payroll weeks vs quiet weeks).</li>
<li>You have large customers on long terms such as <a href="/blog/net-60-net-90-payment-terms">Net 60 or Net 90</a>.</li>
<li>You are considering a loan, line of credit or invoice financing and need to show a lender your plan.</li>
<li>You have had a "how are we short this week?" moment.</li>
</ul>
<p>A monthly 12-month forecast is still useful for planning hires and big purchases. Many businesses run both: 13 weeks for control, 12 months for strategy.</p>

<h2>13-week cash flow template: the rows you need</h2>
<p>Put weeks 1 to 13 across the top. Down the side, use these rows:</p>
<table><thead><tr><th>Section</th><th>Rows</th><th>Notes</th></tr></thead><tbody>
<tr><td>Opening cash</td><td>Bank balance at start of week</td><td>Week 1 is your actual balance; later weeks equal the previous closing cash</td></tr>
<tr><td>Receipts</td><td>Customer payments on invoices; cash sales; other income (refunds, grants, loan drawdowns)</td><td>Forecast from your open invoices and expected new sales</td></tr>
<tr><td>Payments</td><td>Payroll; rent; suppliers; loan repayments; tax (sales tax/VAT, payroll tax, estimated income tax); subscriptions; owner drawings</td><td>Use actual due dates, not averages</td></tr>
<tr><td>Net cash flow</td><td>Total receipts minus total payments</td><td>Can be negative</td></tr>
<tr><td>Closing cash</td><td>Opening cash plus net cash flow</td><td>The number to watch</td></tr>
<tr><td>Minimum buffer</td><td>Your chosen safety level</td><td>Flag any week where closing cash falls below it</td></tr>
</tbody></table>
<p>In a spreadsheet, the formulas are simple: net cash flow = total receipts − total payments; closing cash = opening cash + net cash flow; next week's opening cash = this week's closing cash. Our guides to building an <a href="/blog/invoice-tracker-spreadsheet">invoice tracker spreadsheet</a> uses the same formula style. The U.S. Small Business Administration's guide to <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">managing your finances</a> covers cash flow projections alongside the balance sheet and income statement.</p>

<h2>How to forecast receipts from your invoices</h2>
<p>Receipts are the hardest line to get right, and the one most forecasts get wrong by assuming customers pay on their terms. Build receipts from your open invoices instead:</p>
<ol>
<li><strong>List every open invoice</strong> with amount, due date and customer. Your <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a> is the starting point.</li>
<li><strong>Adjust each due date by the customer's real habit.</strong> If a client on Net 30 usually pays on day 44, put the cash in the week of day 44.</li>
<li><strong>Discount doubtful invoices.</strong> Anything over 90 days overdue goes in as zero until you have a firm promise of payment.</li>
<li><strong>Add invoices you will raise</strong> in the next 13 weeks, then apply the same payment delay.</li>
<li><strong>Add cash sales</strong> and other receipts at their expected dates.</li>
</ol>
<p>This is why consistent invoicing matters: every invoice needs a clear issue date, <a href="/blog/invoice-due-date">due date</a> and unique number. You can create these quickly in the <a href="/invoice-generator">invoice generator</a> and log them in your tracker.</p>

<h2>Worked example: a 13-week cash flow forecast</h2>
<p>A small design studio starts the quarter with $18,000 in the bank. Payroll and rent fall in alternate weeks, and a quarterly tax payment of $2,800 is due in week 6. All figures are illustrative.</p>
<table><thead><tr><th>Week</th><th>Opening cash</th><th>Receipts</th><th>Payments</th><th>Net cash flow</th><th>Closing cash</th></tr></thead><tbody>
<tr><td>1</td><td>$18,000</td><td>$6,500</td><td>$4,200</td><td>+$2,300</td><td>$20,300</td></tr>
<tr><td>2</td><td>$20,300</td><td>$3,000</td><td>$9,800</td><td>−$6,800</td><td>$13,500</td></tr>
<tr><td>3</td><td>$13,500</td><td>$7,200</td><td>$4,100</td><td>+$3,100</td><td>$16,600</td></tr>
<tr><td>4</td><td>$16,600</td><td>$2,500</td><td>$9,600</td><td>−$7,100</td><td>$9,500</td></tr>
<tr><td>5</td><td>$9,500</td><td>$5,800</td><td>$4,300</td><td>+$1,500</td><td>$11,000</td></tr>
<tr><td>6</td><td>$11,000</td><td>$1,500</td><td>$12,400</td><td>−$10,900</td><td>$100</td></tr>
<tr><td>7</td><td>$100</td><td>$4,000</td><td>$4,000</td><td>$0</td><td>$100</td></tr>
<tr><td>8</td><td>$100</td><td>$9,500</td><td>$9,700</td><td>−$200</td><td>−$100</td></tr>
<tr><td>9</td><td>−$100</td><td>$6,000</td><td>$4,200</td><td>+$1,800</td><td>$1,700</td></tr>
<tr><td>10</td><td>$1,700</td><td>$8,800</td><td>$9,900</td><td>−$1,100</td><td>$600</td></tr>
<tr><td>11</td><td>$600</td><td>$7,500</td><td>$4,300</td><td>+$3,200</td><td>$3,800</td></tr>
<tr><td>12</td><td>$3,800</td><td>$6,200</td><td>$9,800</td><td>−$3,600</td><td>$200</td></tr>
<tr><td>13</td><td>$200</td><td>$9,000</td><td>$4,400</td><td>+$4,600</td><td>$4,800</td></tr>
<tr><td><strong>Total</strong></td><td></td><td><strong>$77,500</strong></td><td><strong>$90,700</strong></td><td><strong>−$13,200</strong></td><td></td></tr>
</tbody></table>
<p>Check the totals: opening cash $18,000 + net cash flow −$13,200 = $4,800, which matches week 13's closing cash. The studio is profitable on its invoices, but cash falls to $100 in week 6 and goes overdrawn in week 8. Week 8's receipts include a $6,000 invoice that is already overdue.</p>

<h3>Testing fixes in the forecast</h3>
<p>The studio wants at least $5,000 in the bank at all times. It models two changes:</p>
<ul>
<li><strong>Collect the overdue $6,000 in week 5 instead of week 8.</strong> Weeks 5, 6 and 7 rise by $6,000 to $17,000, $6,100 and $6,100. Week 8 receipts fall by $6,000, so week 8 still closes at −$100.</li>
<li><strong>Take a $4,000 deposit on a new project in week 7.</strong> Every week from 7 onward rises by $4,000: week 7 closes at $10,100, week 8 at $3,900, week 9 at $5,700, week 10 at $4,600, week 11 at $7,800, week 12 at $4,200 and week 13 at $8,800.</li>
</ul>
<p>With both changes the lowest balance is $3,900 in week 8, positive throughout but still under the $5,000 buffer in weeks 8, 10 and 12. That tells the owner to either delay a planned equipment purchase, ask a big client for earlier payment, or arrange a small credit facility before week 8, not during it. Our comparison of <a href="/blog/invoice-financing-vs-line-of-credit">invoice financing vs a line of credit</a> covers the cost of each option.</p>

<h2>What to do when your forecast shows a cash shortfall</h2>
<p>A forecast is only useful if it changes what you do. Work through the levers in rough order of cost, cheapest first:</p>
<ol>
<li><strong>Bill everything that is finished.</strong> Unbilled work is the cheapest cash you have.</li>
<li><strong>Collect overdue invoices.</strong> Call, not just email, the customers whose payments sit in your low week.</li>
<li><strong>Ask for deposits</strong> on new projects, or stage payments on long ones.</li>
<li><strong>Move discretionary payments.</strong> Equipment, marketing and non-urgent purchases can often wait a few weeks.</li>
<li><strong>Talk to suppliers early.</strong> Asking for extended terms before a bill is due goes better than paying late without warning.</li>
<li><strong>Arrange funding before you need it.</strong> Lenders are more willing when your forecast shows a temporary dip than when the account is already overdrawn.</li>
</ol>
<p>Never solve a cash gap by holding back tax you have collected or payroll deductions. Those are owed to the authorities and penalties can be heavy.</p>

<h2>Direct vs indirect cash flow forecasting</h2>
<p>The method above is the <strong>direct method</strong>: you list actual receipts and payments. The <strong>indirect method</strong> starts from forecast profit and adjusts for non-cash items and changes in receivables, payables and inventory. Larger companies use the indirect method for long-range planning. For a 13-week forecast, the direct method is clearer and easier to check against your bank statement.</p>

<h2>Common cash flow forecast mistakes</h2>
<ul>
<li><strong>Using invoice due dates as receipt dates.</strong> Use actual payment behavior.</li>
<li><strong>Forgetting irregular payments:</strong> quarterly tax, annual insurance, software renewals, bonuses.</li>
<li><strong>Leaving out sales tax or VAT.</strong> You collect it in receipts and pay it out later.</li>
<li><strong>Never comparing forecast to actual.</strong> The variance is how you improve the next forecast.</li>
<li><strong>Rolling forward without adding a week.</strong> Each week, drop the past week and add week 14 so you always look 13 weeks ahead.</li>
<li><strong>Ignoring owner drawings.</strong> If you pay yourself from the business account, it is a payment.</li>
</ul>

<h2>Weekly cash flow forecast routine</h2>
<ol>
<li>Enter last week's actual closing bank balance.</li>
<li>Update the receipts row from your open invoices and any payment promises.</li>
<li>Update payments with new bills and confirmed dates.</li>
<li>Roll the forecast forward one week.</li>
<li>Find the lowest closing balance in the next 13 weeks and decide what, if anything, to do about it.</li>
<li>Chase the invoices that drive that low point, using the tactics in <a href="/blog/how-to-get-paid-faster">how to get paid faster</a>.</li>
</ol>

<h2>How invoicing habits change your forecast</h2>
<p>Many cash gaps are invoicing gaps. Invoicing on completion rather than at month-end, taking deposits on large projects, offering an <a href="/blog/early-payment-discount">early payment discount</a> and following up on day one of lateness all move receipts earlier in your forecast. Shorter terms move them earlier still. Each of these costs less than borrowing.</p>

<h2>Next step</h2>
<p>Open a spreadsheet, enter today's bank balance as week 1 opening cash, and list every open invoice with the week you realistically expect it to be paid. If a gap appears, start with the cheapest fix: send any work that is finished but not yet billed through the <a href="/invoice-generator?template=minimal">invoice generator</a> today, with a clear due date.</p>
`,
  },
  {
    slug: "payday-super-2026",
    title: "Payday Super 2026: What Employers Must Do From 1 July",
    description:
      "Payday Super for Australian employers: super paid with each pay from 1 July 2026, the 7 business day rule, the 12% super guarantee and a checklist.",
    category: "business-finance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "Australia",
    related: ["australia-tax-invoice-requirements", "cash-flow-forecast", "bookkeeping-basics"],
    faqs: [
      {
        q: "Does Payday Super apply to small businesses?",
        a: "Yes. Payday Super applies to all employers who must pay the super guarantee, regardless of size. There is no small business exemption from the timing rule. The ATO has said it will take a risk-based compliance approach in the first year, focused on employers who do not pay or fix shortfalls, but that is not an exemption.",
      },
      {
        q: "What happened to the Small Business Superannuation Clearing House?",
        a: "The ATO's Small Business Superannuation Clearing House stopped taking new users on 1 October 2025 and closed for existing users at the end of 30 June 2026. Employers who used it need another SuperStream-compliant way to pay, such as payroll software with a built-in super payment service, a commercial clearing house or a fund's own clearing house.",
      },
      {
        q: "Is it enough to send super within seven business days?",
        a: "No. Under Payday Super the contribution must be received by the employee's fund within seven business days of payday, not just sent. Clearing houses and banks take time to process, so build in a margin and pay super on the same day as wages where your software allows it.",
      },
      {
        q: "Do I pay super on contractor invoices?",
        a: "Sometimes. If a contractor is paid wholly or principally for their labour under a contract, they can be treated as an employee for super guarantee purposes even if they invoice you with an ABN. Use the ATO's employee or contractor decision tool and get advice if you are unsure.",
      },
      {
        q: "What is a qualifying earnings day?",
        a: "Under Payday Super, the qualifying earnings (QE) day is generally the day you pay an employee their qualifying earnings, which are based on ordinary time earnings. Each QE day starts its own deadline for the super contribution, so your obligations run pay run by pay run rather than quarter by quarter.",
      },
      {
        q: "When is the last quarterly super payment due before Payday Super?",
        a: "The final quarterly payment, for the April to June 2026 quarter, is due in employees' funds by 28 July 2026. According to the ATO, contributions that reach a fund between 1 and 28 July are allocated first to that June quarter, while contributions arriving on or after 29 July count toward Payday Super obligations instead. Missing 28 July means lodging a super guarantee charge statement, so pay the June quarter early if you can.",
      },
      {
        q: "Do wages paid in July for work done in June fall under Payday Super?",
        a: "Yes, based on ATO guidance. From 1 July 2026, super is worked out on qualifying earnings according to the date you pay them, even if the work was done before 1 July. So if your last June pay run is actually paid on 2 July, that payday is a qualifying earnings day under Payday Super and the 7 business day deadline applies. Check the ATO's changeover guidance against your own pay dates.",
      },
      {
        q: "Is there still a maximum super contribution base under Payday Super?",
        a: "Yes, but it now works on an annual basis instead of quarterly. The ATO lists the maximum contributions base for 2026–27 as $270,830 of qualifying earnings. Once an employee's qualifying earnings for the year reach that amount, you generally do not have to pay further super guarantee for them that year, although an award, agreement or contract may still require more. Check the ATO page for the current figure.",
      },
      {
        q: "Do I have to pay super for employees who earn less than $450 a month?",
        a: "Yes. The old $450 a month threshold was removed from 1 July 2022, so the super guarantee generally applies to eligible employees whatever they earn. Employees under 18, and private or domestic workers, still need to work more than 30 hours in a week for super to be payable for that week. Under Payday Super, their contributions are due within 7 business days of each payday like anyone else's.",
      },
      {
        q: "Do I pay super on overtime under Payday Super?",
        a: "Generally not, for genuine overtime hours. Qualifying earnings are built on ordinary time earnings, and overtime payments are usually excluded from ordinary time earnings. Some awards, agreements or contracts require super on overtime anyway, and the ATO has detailed guidance on which payments count, such as allowances, bonuses and leave. Check that your payroll software maps each pay item correctly, because an error now repeats every pay run.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Payday Super is the Australian rule, in force from 1 July 2026, that employers must pay employees' super guarantee contributions with each pay rather than quarterly. Contributions must be received by the employee's super fund within 7 business days of payday (20 business days for a new employee's first contribution). The super guarantee rate is 12% of qualifying earnings.</p>

<p>For decades, Australian employers could pay super up to 28 days after the end of each quarter. Payday Super ends that. If you run payroll, the change affects your cash flow, your payroll software and the way you treat some contractors. This guide explains what changed, works through the arithmetic for a typical employee, and gives a checklist you can use now. If you also invoice your own customers, the <a href="/blog/australia-tax-invoice-requirements">ATO tax invoice requirements</a> guide covers what your invoices must show.</p>

<p><strong>Important:</strong> This is general information, not tax, legal or financial advice. Payday Super rules and ATO guidance are new and may be refined. Confirm current requirements on the <a href="https://www.ato.gov.au/businesses-and-organisations/super-for-employers/about-payday-super" target="_blank" rel="noopener noreferrer">ATO's Payday Super pages</a> or with a registered tax agent.</p>

<h2>What is Payday Super?</h2>
<p>Payday Super was legislated through the Treasury Laws Amendment (Payday Superannuation) Act 2025. It changes the timing of super guarantee (SG) payments from a quarterly cycle to a pay-cycle basis. The main points:</p>
<ul>
<li><strong>Start date:</strong> 1 July 2026.</li>
<li><strong>Who it applies to:</strong> every employer that must pay the super guarantee, from sole traders with one employee to large companies.</li>
<li><strong>The timing rule:</strong> contributions must be <em>received</em> by the employee's fund within 7 business days after each payday (the qualifying earnings day).</li>
<li><strong>New employees:</strong> a longer window of 20 business days applies to the first contribution for a new employee, or the first contribution to a new fund for an existing employee.</li>
<li><strong>The rate:</strong> the super guarantee rate has been 12% since 1 July 2025. Payday Super changes when you pay, not how much.</li>
</ul>

<h2>Payday Super vs the old quarterly system</h2>
<table><thead><tr><th>Feature</th><th>Before 1 July 2026</th><th>From 1 July 2026 (Payday Super)</th></tr></thead><tbody>
<tr><td>When super is due</td><td>28 days after the end of each quarter</td><td>Received by the fund within 7 business days of each payday</td></tr>
<tr><td>Earnings base</td><td>Ordinary time earnings (OTE)</td><td>Qualifying earnings (QE), built on OTE</td></tr>
<tr><td>How shortfalls are assessed</td><td>Per quarter</td><td>Per qualifying earnings day</td></tr>
<tr><td>Super guarantee charge (SGC)</td><td>Shortfall, 10% nominal interest and a $20 per employee per quarter admin fee</td><td>Shortfall, notional earnings based on the general interest charge, and an administrative uplift of up to 60% of the shortfall (reported)</td></tr>
<tr><td>ATO clearing house</td><td>Small Business Superannuation Clearing House available</td><td>Closed (end of 30 June 2026)</td></tr>
</tbody></table>
<p>The SGC details above come from professional summaries of the new law; check the ATO's current guidance for the exact calculation before relying on them.</p>

<h2>How the 7 business day rule works</h2>
<p>The clock starts on the qualifying earnings (QE) day, which is generally the day you pay the employee. You then have 7 business days for the money to <em>arrive</em> at the fund and be allocated. Weekends and public holidays are not business days.</p>
<h3>Example timeline</h3>
<p>You pay wages on Thursday 9 July 2026. Counting business days after payday (Friday 10 as day 1, then Monday 13 to Friday 17 as days 2 to 6, then Monday 20 as day 7), the contribution needs to reach the fund by about Monday 20 July, assuming no public holidays in between. The ATO's own payment deadline examples should be your reference, because how holidays and processing cut-offs interact can shift the date.</p>
<p>In practice, clearing houses can take several business days to pass money to funds. The safest habit is to send super on the same day you pay wages.</p>
<h3>New employees and new funds</h3>
<p>For a new employee's first contribution, or the first contribution to a new fund, the window is 20 business days after the QE day. That extra time is for setting up fund details and stapled fund lookups. It covers only that first contribution; later pays revert to 7 business days.</p>

<h2>Worked example: super on each pay</h2>
<p>An employee earns $2,000 of ordinary time earnings per fortnight. At the 12% super guarantee rate:</p>
<table><thead><tr><th>Item</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Super per fortnightly pay</td><td>$2,000 × 12%</td><td>$240</td></tr>
<tr><td>Pays per quarter (approx.)</td><td>13 weeks ÷ 2</td><td>6 to 7 pays</td></tr>
<tr><td>Super per quarter (6.5 pays average)</td><td>$240 × 6.5</td><td>$1,560</td></tr>
<tr><td>Super per year</td><td>$240 × 26</td><td>$6,240</td></tr>
</tbody></table>
<p>The annual cost is the same as before. What changes is timing. Under the old rules, a July to September quarter's super of about $1,560 could stay in your account until 28 October. Under Payday Super, $240 leaves within days of each pay. For a business with 10 employees on similar wages, that is roughly $15,600 a quarter that no longer sits in the bank for up to four months. Factor this into your <a href="/blog/cash-flow-forecast">13-week cash flow forecast</a> as a payment in every payroll week; our <a href="/blog/cash-flow-management">cash flow management guide</a> has wider tactics for absorbing the change.</p>

<h2>What employers must do now</h2>
<ol>
<li><strong>Replace the ATO clearing house.</strong> If you used the Small Business Superannuation Clearing House, move to a SuperStream-compliant option: payroll software with integrated super payments, a commercial clearing house, or a default fund's clearing house.</li>
<li><strong>Update payroll software.</strong> Make sure it supports Single Touch Payroll reporting of qualifying earnings and pays super each pay run.</li>
<li><strong>Check employee fund details.</strong> Invalid fund details cause rejected contributions, which can push you past the deadline. Request stapled fund details for new employees promptly.</li>
<li><strong>Align super with your pay cycle.</strong> Weekly payroll means weekly super. Set up an automatic payment on payday.</li>
<li><strong>Review cash flow.</strong> Move super into your weekly or fortnightly cash plan.</li>
<li><strong>Review contractor arrangements</strong> (see below).</li>
<li><strong>Keep records</strong> of when each contribution was sent and when the fund received it, for the full retention period (see <a href="/blog/how-long-to-keep-invoices">how long to keep business records</a>).</li>
</ol>

<h2>Contractors, invoices and super</h2>
<p>Payday Super matters for businesses that pay contractors as well as employees. Under the super guarantee rules, a person paid wholly or principally for their labour under a contract can be treated as an employee for super purposes, even if they have an ABN and send you an invoice. If that applies, you must pay super on the labour portion of their invoices, now on the Payday Super timetable.</p>
<p>For genuine contractors, the invoice is still your key record. A contractor's invoice should show their ABN and, if they are registered for GST, meet tax invoice rules. Contractors can create one in the <a href="/invoice-generator">free invoice generator</a> and download a PDF. If you are a contractor yourself, check whether your clients should be paying super on your labour; our <a href="/blog/independent-contractor-invoice">independent contractor invoice guide</a> explains how to itemize labour and materials separately, which makes that easier.</p>

<h2>What happens if you pay late?</h2>
<p>If a contribution is not received in time, you may owe the super guarantee charge. Under Payday Super, the SGC is reported to include the shortfall, notional earnings calculated daily, and an administrative uplift. How much of the new charge is tax-deductible has been described differently in commentary, so confirm the treatment with the ATO or your tax agent. Further penalties can apply if you do not lodge or pay the SGC. The ATO has published a practical compliance guideline (PCG 2026/1) describing a risk-based approach for qualifying earnings days from 1 July 2026 to 30 June 2027, where employers who correct shortfalls quickly are treated as lower risk. Read it on the ATO website rather than relying on summaries.</p>

<h2>Payday Super for small businesses and sole traders</h2>
<p>If you are a sole trader with one or two employees, the practical change is that super becomes part of every pay run instead of a quarterly task. That is easier to manage if your payroll software pays wages and super together, so one approval covers both. If you previously used the ATO clearing house because it was free, compare the fees and features of replacement services: many payroll products include super payments in their subscription, while some commercial clearing houses charge per transaction.</p>
<p>Sole traders do not pay compulsory super guarantee for themselves, although they can make voluntary contributions. Payday Super applies to super you must pay for your employees. Company directors who are paid wages are generally employees of the company for these purposes.</p>

<h2>Common Payday Super mistakes</h2>
<ul>
<li><strong>Treating "sent" as "received".</strong> The deadline is about arrival at the fund.</li>
<li><strong>Still batching super quarterly.</strong> Payroll systems set up years ago may still default to quarterly payment runs.</li>
<li><strong>Forgetting the clearing house closure.</strong> Payments routed to a closed service will not reach funds.</li>
<li><strong>Ignoring rejected contributions.</strong> A bounced payment does not stop the clock.</li>
<li><strong>Overlooking labour-only contractors.</strong> An ABN on an invoice does not settle whether super is payable.</li>
</ul>

<h2>Payday Super checklist for employers</h2>
<ul>
<li>Payroll software confirmed Payday Super-ready and reporting qualifying earnings through STP.</li>
<li>Super payment method chosen and tested (not the ATO clearing house).</li>
<li>Super scheduled to be paid on each payday.</li>
<li>Fund and stapled fund details current for every employee.</li>
<li>Contractor list reviewed for anyone paid principally for labour.</li>
<li>Cash flow forecast updated with super in every payroll week.</li>
<li>Process in place to check rejected contributions within a day or two.</li>
</ul>

<h2>Next step</h2>
<p>Check your last pay run: when did the super leave your account, and when did the fund receive it? If the gap is more than a few days, talk to your payroll provider this week. Then add super as a line in every payroll week of your cash plan, and keep your <a href="/blog/bookkeeping-basics">bookkeeping</a> records of contributions alongside payslips. For invoicing your own customers, the <a href="/invoice-generator?template=classic">invoice generator</a> lets you add your ABN and GST details to a clean PDF.</p>
`,
  },
  {
    slug: "invoice-financing-vs-line-of-credit",
    title: "Invoice Financing vs Line of Credit: Costs Compared",
    description:
      "Invoice financing vs a business line of credit: how each works, a cost example with real arithmetic, who qualifies and which suits your working capital.",
    category: "business-finance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-factoring", "cash-flow-forecast", "accounts-receivable-guide"],
    faqs: [
      {
        q: "Is invoice financing easier to get than a line of credit?",
        a: "Often, yes. Invoice financing is secured by your receivables, so lenders focus on the creditworthiness of your customers and the quality of your invoices. A bank line of credit usually depends more on your own trading history, profits, credit score and sometimes personal guarantees. Young businesses with strong customers may qualify for invoice financing first.",
      },
      {
        q: "Does invoice financing affect my credit score?",
        a: "It can. Applications may involve a credit check, and some lenders report the facility. Missed repayments on any business credit can harm your business or personal credit, especially if you signed a personal guarantee. Ask each provider what checks they run and what they report before applying.",
      },
      {
        q: "Can I have both invoice financing and a line of credit?",
        a: "Sometimes, but many invoice finance agreements take security over your receivables, and a bank may also want that security for a line of credit. Two lenders cannot both have first claim on the same assets without an agreement between them. Disclose existing facilities and read the security terms carefully.",
      },
      {
        q: "What is accounts receivable financing?",
        a: "Accounts receivable financing is another name for borrowing against your unpaid invoices. It covers invoice financing (also called invoice discounting) and, loosely, factoring. In financing you keep collecting from customers; in factoring you sell the invoices and the factor usually collects.",
      },
      {
        q: "Which is cheaper, invoice financing or a line of credit?",
        a: "Usually a bank line of credit, when you can get one, because it is priced as an annual interest rate on what you draw. Invoice financing fees often look small per month but annualize higher. Convert every offer to a cost per year on the cash you actually use, and include all fees, before you compare.",
      },
      {
        q: "What advance rate can I expect from invoice financing?",
        a: "Advance rates commonly fall somewhere around 70% to 90% of the invoice value, although some providers advertise more and others less. The rate depends on your customers' credit, your industry, how often invoices are disputed and the length of your payment terms. The remainder, minus fees, is paid to you when the customer pays. Compare offers on total annualized cost, not just the headline advance.",
      },
      {
        q: "What happens if my customer never pays a financed invoice?",
        a: "Under a recourse arrangement, which is the most common type, you must repay the advance and fees or replace the invoice with another one. Under non-recourse terms, the lender takes on some of the credit risk, often only if the customer becomes insolvent, and charges more for it. Read exactly which risks a non-recourse agreement covers, because disputes and simple late payment are often excluded.",
      },
      {
        q: "How fast can invoice financing pay out?",
        a: "Once your account is set up, many providers advertise funding within one or two business days of approving an invoice. The first setup takes longer, because the lender checks your business, your customers and sometimes your contracts and aging report. A business line of credit can be quicker to draw once it is in place, but applying for one often involves more paperwork up front.",
      },
      {
        q: "Can freelancers and sole traders use invoice financing?",
        a: "Often, yes, if you invoice other businesses on credit terms. Some online platforms fund individual invoices for small businesses and sole traders, while larger whole-ledger facilities may set minimum turnover levels. Invoices to consumers rarely qualify. Lenders look closely at your client's creditworthiness, so an invoice to a large, reliable company is easier to fund than one to a small startup.",
      },
      {
        q: "Does a business line of credit expire?",
        a: "Often, yes, or at least it gets reviewed. Lines of credit are commonly reviewed or renewed periodically, often once a year, and some have a fixed draw period followed by a repayment period. The lender can usually reduce or freeze the limit if your finances weaken. Check the review date, renewal fees and conditions in the agreement, and avoid relying on a line of credit as permanent funding.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Invoice financing lets you borrow against unpaid invoices, typically receiving a large share of their value upfront and repaying when customers pay. A business line of credit lets you draw cash up to a limit for any purpose and pay interest only on what you use. Invoice financing is easier to qualify for; a line of credit is usually cheaper.</p>

<p>Both are working capital tools designed to bridge the gap between paying your costs and getting paid by customers. They suit different situations, and their pricing is presented so differently that comparing them takes some arithmetic. This guide explains how each works, puts them side by side with a worked cost example, and helps you decide which fits. If you are weighing the related option of selling invoices outright, see our <a href="/blog/invoice-factoring">invoice factoring guide</a>.</p>

<p><em>This article is general information, not financial advice. Rates in the examples are illustrative, not market quotes. Read every agreement in full and consider independent advice before signing.</em></p>

<h2>What is invoice financing?</h2>
<p>Invoice financing (also called invoice discounting or accounts receivable financing) is a loan or credit facility secured on your unpaid B2B invoices. The basic flow:</p>
<ol>
<li>You deliver work and issue an invoice on normal terms, such as Net 30 or Net 60.</li>
<li>You submit the invoice (or your whole receivables ledger) to the lender.</li>
<li>The lender advances a percentage of the invoice value, the advance rate.</li>
<li>Your customer pays you as normal, often into an account the lender controls.</li>
<li>The lender deducts the advance and its fees and releases the balance to you.</li>
</ol>
<p>Some providers fund individual invoices you choose (often called selective or spot invoice financing); others take your whole sales ledger and set a facility limit. Selective funding costs more per invoice but avoids long contracts. Unlike factoring, you keep control of collections, and the arrangement is often confidential, so customers may not know. Because the lender is relying on your customers paying, it cares about their credit quality and about your invoices being clean, accurate and undisputed.</p>

<h2>What is a business line of credit?</h2>
<p>A business line of credit is a revolving facility from a bank or online lender. You get a limit, draw what you need, repay, and draw again. Interest is charged only on the outstanding balance, usually as an annual percentage rate (APR), sometimes with an annual fee or draw fees. Lines can be unsecured or secured on business assets, and small business lines often require a personal guarantee.</p>
<p>A line of credit is not tied to specific invoices. You can use it for payroll, stock, a tax payment or a seasonal dip. The lender's decision rests on your business: time trading, revenue, profitability, credit history and existing debt.</p>

<h2>Invoice financing vs line of credit: side by side</h2>
<table><thead><tr><th>Feature</th><th>Invoice financing</th><th>Business line of credit</th></tr></thead><tbody>
<tr><td>Secured on</td><td>Your unpaid invoices</td><td>Business assets, a guarantee, or unsecured</td></tr>
<tr><td>Amount available</td><td>Rises and falls with your receivables</td><td>Fixed limit, reviewed periodically</td></tr>
<tr><td>Approval based mainly on</td><td>Your customers' credit and invoice quality</td><td>Your business's credit, history and profits</td></tr>
<tr><td>Typical pricing</td><td>Fee per period an invoice is outstanding, plus service fees</td><td>APR on the balance drawn, plus possible annual or draw fees</td></tr>
<tr><td>Use of funds</td><td>Tied to invoiced sales</td><td>Any business purpose</td></tr>
<tr><td>Who collects from customers</td><td>You</td><td>You</td></tr>
<tr><td>Admin</td><td>Submit invoices or ledger reports regularly</td><td>Minimal once set up</td></tr>
<tr><td>Best for</td><td>B2B businesses growing fast, with reliable customers on long terms</td><td>Established businesses with steady profits</td></tr>
</tbody></table>

<h2>Worked example: what each option costs</h2>
<p>You have $50,000 of invoices to large customers on Net 60 terms and need cash now for payroll. You expect payment in about 45 days. The figures below are illustrative only.</p>
<h3>Option A: invoice financing</h3>
<p>Offer: 85% advance, fee of 1.5% of invoice value per 30 days or part period.</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Advance</td><td>$50,000 × 85%</td><td>$42,500</td></tr>
<tr><td>Fee periods</td><td>45 days = one full 30-day period plus a part period</td><td>2</td></tr>
<tr><td>Fee</td><td>$50,000 × 1.5% × 2</td><td>$1,500</td></tr>
<tr><td>Cost as share of cash used</td><td>$1,500 ÷ $42,500</td><td>3.53% for 45 days</td></tr>
<tr><td>Rough annualized cost</td><td>3.53% × (365 ÷ 45)</td><td>about 28.6% a year</td></tr>
</tbody></table>
<h3>Option B: line of credit</h3>
<p>Offer: 12% APR on the balance drawn, no draw fee. You draw the same $42,500 for 45 days.</p>
<table><thead><tr><th>Step</th><th>Calculation</th><th>Amount</th></tr></thead><tbody>
<tr><td>Interest</td><td>$42,500 × 12% × (45 ÷ 365)</td><td>$628.77</td></tr>
<tr><td>Annualized cost</td><td>APR, no extra fees</td><td>12% a year</td></tr>
</tbody></table>
<p>The line of credit costs $1,500 − $628.77 = $871.23 less for the same cash over the same period. Notice two things. First, invoice financing fees quoted "per month" look small but annualize high, especially with part-period rounding: if the customer paid on day 30 instead of day 45, the fee would halve to $750. Second, the comparison assumes you can actually get a 12% line with a $42,500 limit, which many young businesses cannot. Add any annual fee, arrangement fee or minimum monthly charge to both options before deciding.</p>

<h2>Who qualifies for each?</h2>
<h3>Invoice financing usually requires</h3>
<ul>
<li>B2B sales on credit terms (consumer invoices rarely qualify)</li>
<li>Creditworthy customers, often with no single customer dominating your ledger</li>
<li>Clean invoices for completed work, without disputes or contra arrangements</li>
<li>Reliable records, such as an up-to-date <a href="/blog/accounts-receivable-aging-report">aging report</a></li>
</ul>
<h3>A line of credit usually requires</h3>
<ul>
<li>A minimum trading history and revenue level set by the lender</li>
<li>Acceptable business and often personal credit</li>
<li>Financial statements or bank statements</li>
<li>Sometimes collateral or a personal guarantee</li>
</ul>

<h2>When invoice financing is the better choice</h2>
<ul>
<li>You are growing quickly and your receivables grow with you; the facility scales automatically.</li>
<li>Your customers are large and reliable but pay on long terms such as <a href="/blog/net-60-net-90-payment-terms">Net 60 or Net 90</a>.</li>
<li>You do not yet have the trading history a bank wants for a line of credit.</li>
<li>You want to avoid a personal guarantee (check the terms; some invoice finance agreements still ask for one).</li>
</ul>

<h2>When a line of credit is the better choice</h2>
<ul>
<li>You qualify for a reasonable rate and want the cheapest flexible funding.</li>
<li>Your cash need is not tied to invoices, such as buying stock before a busy season.</li>
<li>You sell mainly to consumers, so there are no B2B invoices to borrow against.</li>
<li>You want minimal ongoing admin.</li>
</ul>

<h2>Other working capital options compared</h2>
<p>Invoice financing and lines of credit are not the only choices. The table below summarizes common alternatives in general terms; terms vary widely by lender and country.</p>
<table><thead><tr><th>Option</th><th>How it works</th><th>Typical fit</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>Invoice factoring</td><td>Sell invoices; the factor collects</td><td>Businesses without a credit control team</td><td>Customer notification, higher cost</td></tr>
<tr><td>Term loan</td><td>Lump sum repaid in fixed instalments</td><td>One-off investments such as equipment</td><td>Paying interest on cash you are not using</td></tr>
<tr><td>Government-backed loans (for example U.S. SBA 7(a))</td><td>Bank loan partly guaranteed by a government agency</td><td>Established businesses that can wait for approval</td><td>Paperwork and approval time</td></tr>
<tr><td>Business credit card</td><td>Revolving card credit</td><td>Small, short-term purchases</td><td>High rates if not cleared monthly</td></tr>
<tr><td>Merchant cash advance</td><td>Advance repaid from a share of card sales</td><td>Card-heavy retail and hospitality</td><td>Very high effective cost</td></tr>
</tbody></table>
<p>In the US, the Small Business Administration describes its <a href="https://www.sba.gov/funding-programs/loans" target="_blank" rel="noopener noreferrer">loan programs</a>, which lenders offer with an SBA guarantee. Whatever the product, convert the offer to an annualized cost on the cash you will actually use, as in the worked example above.</p>

<h2>Checklist before you apply</h2>
<ul>
<li>A current 13-week cash forecast showing how much you need and when you can repay.</li>
<li>An up-to-date aging report with disputed invoices identified.</li>
<li>Recent financial statements and bank statements.</li>
<li>Copies of key customer contracts and any purchase orders.</li>
<li>A list of existing loans, guarantees and security already given.</li>
<li>Invoices with unique numbers, correct customer legal names and clear due dates.</li>
</ul>

<h2>Common mistakes when choosing working capital finance</h2>
<ul>
<li><strong>Comparing a monthly fee with an annual rate.</strong> Convert everything to an annual cost on the cash you use.</li>
<li><strong>Ignoring the small print:</strong> minimum volumes, all-ledger requirements, termination fees and notice periods.</li>
<li><strong>Borrowing to cover a pricing problem.</strong> If you are short every month, finance only delays the issue. Check your margins with our <a href="/blog/markup-vs-margin">markup vs margin guide</a>.</li>
<li><strong>Drawing a line of credit to the limit for months.</strong> A revolving line works best for short dips that repay quickly.</li>
<li><strong>Sending invoices a lender cannot verify.</strong> Missing PO numbers, vague descriptions or wrong customer names cause delays or rejections.</li>
</ul>

<h2>Cheaper alternatives to try first</h2>
<p>Before paying for finance, try to shrink the gap itself. Invoice on completion, take deposits on large jobs, offer an <a href="/blog/early-payment-discount">early payment discount</a>, chase overdue invoices promptly and negotiate shorter terms with new customers. A <a href="/blog/cash-flow-forecast">13-week cash flow forecast</a> shows how much funding you actually need and for how long, which keeps any facility small.</p>

<h2>Next step</h2>
<p>Write down the amount and duration of your cash gap from your forecast, then ask for quotes from at least one invoice finance provider and one line of credit lender. Convert both to an annualized cost using the formulas above. Whichever you choose, lenders fund clean invoices fastest: create yours in the <a href="/invoice-generator?template=corporate">invoice generator with the corporate template</a>, with a clear due date, PO number and payment details.</p>
`,
  },
  {
    slug: "bad-debt-write-off",
    title: "Bad Debt Write-Off: How to Write Off an Unpaid Invoice",
    description:
      "Bad debt write-off explained: when to write off an unpaid invoice, direct and allowance journal entries, US tax rules and UK VAT bad debt relief.",
    category: "business-finance",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "General",
    related: ["invoice-collections", "accounts-receivable-aging-report", "credit-note-guide"],
    faqs: [
      {
        q: "Can I still collect a debt after writing it off?",
        a: "Usually, yes. Writing off a bad debt is an accounting entry that recognizes you are unlikely to be paid. It does not cancel the customer's legal obligation unless you formally release them. You can keep chasing, use a collection agency or go to small claims court. If money later arrives, you record it as a bad debt recovery.",
      },
      {
        q: "Should I issue a credit note when I write off an invoice?",
        a: "Generally no. A credit note tells the customer they no longer owe the amount, which can weaken any later claim and, in the UK, can affect your VAT bad debt relief claim. A write-off is an internal entry in your books. Issue a credit note only if you are genuinely cancelling or reducing the charge, for example after a dispute is settled.",
      },
      {
        q: "When is an invoice considered a bad debt?",
        a: "There is no single day count. An invoice becomes a bad debt when you reasonably conclude it will not be paid, for example after the customer's insolvency, a failed collection effort, or a long period of silence despite reminders. Many businesses set a policy, such as reviewing anything over 120 days overdue, but tax rules have their own tests.",
      },
      {
        q: "Can a freelancer deduct an unpaid invoice on their US taxes?",
        a: "Usually not, if they use the cash method. The IRS says cash-method taxpayers generally cannot deduct unpaid fees because the income was never reported. You simply do not include the unpaid amount in income. Accrual-method businesses that already reported the income can deduct a business bad debt in the year it becomes worthless.",
      },
      {
        q: "What is the allowance for doubtful accounts?",
        a: "It is a contra-asset account that reduces accounts receivable on the balance sheet by the amount you expect not to collect. Under the allowance method you estimate bad debts in advance, often using percentages of each aging bucket, and charge the estimate to bad debt expense. Actual write-offs then reduce the allowance rather than hitting expense directly.",
      },
      {
        q: "Do I get back sales tax I paid on an invoice that was never paid?",
        a: "In many US states, yes. States commonly allow sellers to deduct or claim a refund of sales tax previously remitted on accounts later written off as bad debts, under conditions set by each state. Rules and forms differ, so check your state revenue department's guidance before claiming.",
      },
      {
        q: "Can I write off only part of an unpaid invoice?",
        a: "Yes. If a customer pays some of the invoice or you agree a settlement for less, you can write off the remaining balance using the same journal entry for the smaller amount. For US income tax, the IRS allows a deduction for a business bad debt that is partly worthless, but a nonbusiness bad debt must be totally worthless. In the UK, VAT bad debt relief can be claimed on the unpaid part.",
      },
      {
        q: "What records do I need to support a bad debt deduction?",
        a: "Keep the original invoice, the contract or order, proof that you included the income in your books, and a record of your collection efforts such as reminders, call notes, a final demand and any agency report. The IRS says you must show you took reasonable steps to collect, although you do not have to go to court if a judgment would be uncollectible. Note the date and reason you decided the debt was worthless.",
      },
      {
        q: "Is an unpaid personal loan treated the same as an unpaid invoice?",
        a: "No, not in the US. Money you lent to a friend or relative outside your business is a nonbusiness bad debt. It is deductible only when totally worthless and is treated as a short-term capital loss, with a statement explaining your collection efforts. An unpaid business invoice follows the business bad debt rules instead. Loans to family are scrutinized closely, so keep written terms and evidence that it was a real loan, not a gift.",
      },
      {
        q: "Do I need to tell the customer when I write off their invoice?",
        a: "No. A write-off is an internal accounting entry and you are not required to tell the customer. Many businesses avoid announcing it, because a message that sounds like forgiveness could weaken a later claim. If you genuinely decide to release the customer from the debt, put that in writing and consider whether a credit note is needed. Local debt collection rules still apply if you keep chasing the balance.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A bad debt write-off removes an unpaid invoice you no longer expect to collect from accounts receivable and records it as bad debt expense. Small businesses using the direct write-off method debit bad debt expense and credit accounts receivable. The write-off is an accounting entry; it does not cancel the customer's debt, and tax relief has separate rules.</p>

<p>Sooner or later most businesses send an invoice that never gets paid. Leaving it in your receivables overstates your assets and distorts your cash forecast, while writing it off too early can throw away a recoverable debt or a tax claim. This guide covers when to write off an unpaid invoice, the journal entries for both main methods with worked numbers, how the tax side works in the US, UK and Australia, and what to do if the money turns up later.</p>

<p><strong>Important:</strong> This is general information, not tax, legal or accounting advice. Tax treatment of bad debts depends on your accounting method and jurisdiction. Check the official guidance, such as the <a href="https://www.irs.gov/taxtopics/tc453" target="_blank" rel="noopener noreferrer">IRS Topic 453 on bad debt deductions</a> or <a href="https://www.gov.uk/guidance/relief-from-vat-on-bad-debts-notice-70018" target="_blank" rel="noopener noreferrer">HMRC VAT Notice 700/18</a>, or ask an accountant.</p>

<h2>What is a bad debt?</h2>
<p>A bad debt is an amount a customer owes you that you have concluded will not be paid. In invoicing terms, it is an <a href="/blog/overdue-invoice">overdue invoice</a> that has moved past "late" into "uncollectible". Common causes are customer insolvency, a business that has closed or disappeared, a disputed amount you decide not to pursue, or a balance too small to justify legal action.</p>
<p>Bad debt expense is the cost of those uncollectible invoices in your profit and loss account. It is a normal cost of selling on credit, which is why businesses track it as a share of credit sales.</p>

<h2>When should you write off an unpaid invoice?</h2>
<p>Write off an invoice when you have good evidence it will not be paid, not just because it is old. Typical triggers:</p>
<ul>
<li>The customer has entered bankruptcy, liquidation or administration.</li>
<li>You have followed your full collection process, including reminders, calls and a final demand, with no result.</li>
<li>A collection agency has returned the account as uncollectible.</li>
<li>The cost of further recovery, such as a <a href="/blog/small-claims-court-unpaid-invoice">small claims court</a> filing, exceeds the likely recovery.</li>
<li>The customer cannot be traced.</li>
</ul>
<p>Before writing off, make sure you have tried the steps in our guide to <a href="/blog/invoice-collections">sending an invoice to collections</a>. Keep copies of every reminder, email and response; they support both the accounting decision and any tax claim.</p>

<h2>Direct write-off method: journal entry and example</h2>
<p>The direct write-off method records bad debt expense only when a specific invoice is written off. It is simple and common for small businesses, though it can put the expense in a different period from the original sale.</p>
<p><strong>Example:</strong> You invoiced a client $2,400 in March. By October the client's company has closed. You write it off:</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Bad debt expense</td><td>$2,400</td><td></td></tr>
<tr><td>Accounts receivable (client)</td><td></td><td>$2,400</td></tr>
</tbody></table>
<p>Your receivables fall by $2,400 and your profit for the period falls by $2,400. If you charged sales tax or VAT on the invoice, the tax portion is handled separately; see the tax sections below.</p>

<h2>Allowance method: allowance for doubtful accounts</h2>
<p>The allowance method estimates bad debts in advance and matches the expense to the period of the sale. It is required under generally accepted accounting standards when bad debts are material, and lenders and investors expect it in larger businesses.</p>
<h3>Step 1: estimate the allowance from your aging report</h3>
<p>Apply a loss percentage to each bucket of your <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a>. The percentages below are illustrative; base yours on your own history.</p>
<table><thead><tr><th>Aging bucket</th><th>Balance</th><th>Estimated loss %</th><th>Allowance</th></tr></thead><tbody>
<tr><td>Current</td><td>$40,000</td><td>1%</td><td>$400</td></tr>
<tr><td>1-30 days overdue</td><td>$12,000</td><td>5%</td><td>$600</td></tr>
<tr><td>31-60 days overdue</td><td>$6,000</td><td>15%</td><td>$900</td></tr>
<tr><td>Over 60 days overdue</td><td>$4,000</td><td>40%</td><td>$1,600</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$62,000</strong></td><td></td><td><strong>$3,500</strong></td></tr>
</tbody></table>
<h3>Step 2: record the allowance</h3>
<p>If the allowance account currently has a zero balance, record:</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Bad debt expense</td><td>$3,500</td><td></td></tr>
<tr><td>Allowance for doubtful accounts</td><td></td><td>$3,500</td></tr>
</tbody></table>
<p>Net receivables on the balance sheet are now $62,000 − $3,500 = $58,500. If the allowance already had a $1,000 credit balance, you would record only the $2,500 difference.</p>
<h3>Step 3: write off a specific invoice against the allowance</h3>
<p>When the $2,400 invoice is confirmed uncollectible, the entry hits the allowance, not expense:</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
<tr><td>Allowance for doubtful accounts</td><td>$2,400</td><td></td></tr>
<tr><td>Accounts receivable (client)</td><td></td><td>$2,400</td></tr>
</tbody></table>
<p>Net receivables do not change ($59,600 − $1,100 = $58,500), because the expense was already recognized when you set up the allowance.</p>

<h2>Direct write-off vs allowance method</h2>
<table><thead><tr><th>Feature</th><th>Direct write-off</th><th>Allowance method</th></tr></thead><tbody>
<tr><td>When expense is recorded</td><td>When an invoice is written off</td><td>When estimated, usually each period</td></tr>
<tr><td>Matches expense to sale period</td><td>No</td><td>Yes</td></tr>
<tr><td>Complexity</td><td>Low</td><td>Moderate</td></tr>
<tr><td>Accepted under GAAP / IFRS for material amounts</td><td>No</td><td>Yes (IFRS uses an expected credit loss model)</td></tr>
<tr><td>US tax deduction</td><td>Follows specific write-offs</td><td>Allowance additions generally not deductible; specific write-offs are</td></tr>
</tbody></table>

<h2>How to record a bad debt recovery</h2>
<p>If a written-off customer later pays, reverse the write-off and then record the payment. Using the direct method example, when the $2,400 arrives:</p>
<ol>
<li>Debit accounts receivable $2,400, credit bad debt expense (or a bad debt recovery income account) $2,400.</li>
<li>Debit cash $2,400, credit accounts receivable $2,400.</li>
</ol>
<p>Under the allowance method, the first entry credits the allowance instead. If you claimed tax relief, the recovery is usually taxable again or requires repaying the VAT or GST relief.</p>

<h2>Bad debt write-off and taxes</h2>
<h3>United States: income tax</h3>
<p>Under IRS rules, you can deduct a business bad debt only if the amount was previously included in your gross income. That means:</p>
<ul>
<li><strong>Accrual-method businesses</strong> that recorded the invoice as income can deduct it, in whole or in part, in the year it becomes worthless, on Schedule C or the relevant business return.</li>
<li><strong>Cash-method taxpayers</strong>, including most freelancers, generally cannot deduct unpaid fees, because the income was never reported. The unpaid invoice simply never becomes taxable income.</li>
</ul>
<p>For US sales tax, many states let sellers recover tax already remitted on invoices later written off as bad debts, under state-specific conditions. See our guide to <a href="/blog/sales-tax-on-invoices-us">sales tax on invoices</a> for background and check your state's rules.</p>
<h3>United Kingdom: VAT bad debt relief</h3>
<p>If you accounted for VAT on an invoice that was never paid, you may reclaim it through bad debt relief under VAT Notice 700/18. Key conditions, which you should confirm in the notice:</p>
<ul>
<li>You have already accounted for and paid the output VAT.</li>
<li>The debt has been unpaid for at least six months from the later of the payment due date and the date of supply.</li>
<li>You have written the debt off in your VAT accounts.</li>
<li>You claim within four years and six months of the later of the due date and the date of supply.</li>
</ul>
<p><strong>Worked example:</strong> A £1,200 invoice including £200 VAT at 20% was due on 31 January and remains unpaid on 31 July. Once you have written it off in your VAT records, you can claim the £200 back on your VAT return as extra input tax. If the customer later pays, you repay the relief. Businesses on the VAT cash accounting scheme do not need bad debt relief, because they never paid VAT on the unpaid invoice.</p>
<h3>Australia: GST</h3>
<p>Businesses accounting for GST on a non-cash (accruals) basis can generally make a decreasing adjustment to recover GST on a debt written off as bad, or overdue for 12 months or more. Cash-basis businesses do not account for GST until paid. Check the details with the ATO.</p>

<h2>Bad debt write-off checklist</h2>
<ul>
<li>Full collection process documented (reminders, calls, final demand, agency if used).</li>
<li>Decision approved and dated, with a short note of why the debt is uncollectible.</li>
<li>Journal entry posted under your chosen method.</li>
<li>No credit note issued unless you are genuinely cancelling the charge.</li>
<li>Sales tax, VAT or GST relief assessed and claimed on time.</li>
<li>Customer flagged in your system so you do not extend credit again without a deposit.</li>
<li>Invoice, correspondence and write-off records kept for the retention period. See <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a>.</li>
</ul>

<h2>Common bad debt mistakes</h2>
<ul>
<li><strong>Issuing a credit note instead of a write-off.</strong> The <a href="/blog/credit-note-guide">credit note guide</a> explains when a credit note is right.</li>
<li><strong>Deducting unpaid fees on a cash-method return.</strong> You cannot deduct income you never reported.</li>
<li><strong>Missing the VAT relief window.</strong> Diarize the six-month point for every large overdue invoice.</li>
<li><strong>Keeping dead invoices in receivables.</strong> It inflates assets and DSO and misleads your forecast.</li>
<li><strong>Not learning from it.</strong> Ask for deposits, tighten terms or run credit checks for similar customers.</li>
</ul>

<h2>How to reduce future bad debts</h2>
<p>Most bad debts start as unclear invoices or loose terms. Agree payment terms in writing, take a <a href="/blog/deposit-invoice">deposit</a> on large or new-customer jobs, invoice promptly, and follow up the day an invoice becomes overdue. Clear invoices with a due date, PO number and itemized lines are harder to dispute and easier to enforce.</p>

<h2>Next step</h2>
<p>Run your aging report today and list every invoice over 90 days overdue. For each, decide: chase, send to collections, or write off. For new work, issue invoices with clear terms and a deposit line using the <a href="/invoice-generator">free invoice generator</a>, so fewer invoices reach that list.</p>
`,
  },
  {
    slug: "zoho-invoice-vs-wave",
    title: "Zoho Invoice vs Wave: Free Invoicing Compared (2026)",
    description:
      "Zoho Invoice vs Wave compared: free plan limits, payment fees, reminders, bookkeeping and who each suits, with 2026 pricing from the official pricing pages.",
    category: "comparisons",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: ["best-free-invoicing-software", "xero-vs-quickbooks", "invoice-generator-vs-accounting-software"],
    faqs: [
      {
        q: "Is Zoho Invoice completely free?",
        a: "At the time of writing, Zoho describes Zoho Invoice as forever free. The plan allows up to 500 invoices a year, two users, three projects and two organizations, and invoices carry \"Powered by Zoho Invoice\" branding. Online payment gateway fees still apply when clients pay by card. Check Zoho's pricing page for current limits.",
      },
      {
        q: "Is Wave really free?",
        a: "Wave's Starter plan is $0 a month and includes unlimited invoices, estimates and bookkeeping records. Wave charges processing fees when customers pay online, and features such as automatic bank imports, automated late payment reminders and removing Wave branding sit in the paid Pro plan, listed at $19 a month when we checked.",
      },
      {
        q: "Can I use Zoho Invoice or Wave outside the US?",
        a: "Zoho Invoice is used internationally and supports multiple currencies and regional tax settings. Wave is built mainly for businesses in the US and Canada; its online payments are available only in supported countries. If you are elsewhere, check each provider's country support before committing.",
      },
      {
        q: "Does Zoho Invoice do accounting?",
        a: "No. Zoho Invoice handles quotes, invoices, payments, expenses and time tracking, but it is not double-entry accounting software. Zoho Books is Zoho's separate, paid accounting product. Wave Starter includes basic bookkeeping, which is the main reason people choose it over Zoho Invoice.",
      },
      {
        q: "Which is better for recurring invoices and reminders on a free plan?",
        a: "Zoho Invoice, based on the published plans. Its free plan lists recurring invoices and automated payment reminders. Wave offers recurring invoices, but automated late payment reminders are listed as a Pro feature. If chasing payment is your biggest time cost, that difference matters.",
      },
      {
        q: "Can my accountant log in to Zoho Invoice or Wave for free?",
        a: "On Zoho Invoice's free plan, usually yes: it allows two users, so your accountant can take the second seat. Wave lists additional user roles as a Pro feature, so on Starter you would normally share reports or exports with your accountant instead. Check each pricing page for current user limits, because they change, and never share your own login details with anyone.",
      },
      {
        q: "Can I turn an estimate into an invoice in Zoho Invoice and Wave?",
        a: "Yes. Both tools let you create estimates or quotes on their free plans and convert an accepted one into an invoice, so you do not retype the line items. Check the client name, quantities and tax again before you send it, because the scope often changes between quote and invoice. Keeping the estimate number on the invoice helps the client match the two documents.",
      },
      {
        q: "What happens if I reach Zoho Invoice's 500 invoice limit?",
        a: "Zoho's free plan is capped at 500 invoices a year at the time of writing, and Zoho points growing businesses to its paid products: Zoho Billing for advanced invoicing and Zoho Books for full accounting. Check Zoho's pricing page and help documents for exactly what happens at the cap before you rely on it. If you send close to 40 invoices a month, plan the move before your busy season.",
      },
      {
        q: "Do Zoho Invoice and Wave handle sales tax, VAT or GST?",
        a: "Both let you set up tax rates and apply them to invoice lines, and Zoho Invoice has regional tax settings for a number of countries. Neither free plan files your tax returns for you, and neither should be assumed to meet structured e-invoicing mandates. You remain responsible for charging the right rate and paying it to your tax authority, so confirm your settings with an accountant.",
      },
      {
        q: "Can I customize invoice templates on the free plans?",
        a: "Yes, within limits. Both let you set your business details, payment terms and notes on a choice of templates. Free Zoho Invoice invoices show \"Powered by Zoho Invoice\", and free Wave invoices carry Wave branding, which the Pro plan removes along with adding your brand colors, based on the published plans. If a branding-free PDF matters most, a free invoice generator that downloads a plain PDF is an alternative.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In Zoho Invoice vs Wave, choose Zoho Invoice if you want the most complete free invoicing app, with automated reminders, recurring invoices and a client portal, and can live with a 500-invoice yearly cap. Choose Wave if you want free invoicing plus basic bookkeeping in one place and are based in the US or Canada. Both charge for online payments.</p>

<p>Zoho Invoice and Wave are two of the most widely recommended free invoicing tools, but they are free for different reasons and suit different businesses. This head-to-head compares their free plans, payment fees, reminders, bookkeeping and limits, using each provider's official pricing pages at the time of writing (October 2026). We have not run a hands-on test of either product, and prices and limits change, so confirm on the linked pages. For a wider comparison including other tools, see our roundup of <a href="/blog/best-free-invoicing-software">free invoicing software</a>.</p>

<h2>Zoho Invoice vs Wave at a glance</h2>
<table><thead><tr><th>Feature</th><th>Zoho Invoice (free)</th><th>Wave Starter (free)</th></tr></thead><tbody>
<tr><td>Monthly cost</td><td>$0</td><td>$0</td></tr>
<tr><td>Invoice limit</td><td>500 invoices a year</td><td>Unlimited</td></tr>
<tr><td>Users</td><td>2</td><td>Additional user roles on Pro</td></tr>
<tr><td>Bookkeeping</td><td>No (Zoho Books is separate)</td><td>Yes, basic bookkeeping records</td></tr>
<tr><td>Automated payment reminders</td><td>Yes</td><td>Pro plan only</td></tr>
<tr><td>Recurring invoices</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Branding on invoices</td><td>"Powered by Zoho Invoice"</td><td>Wave branding (removed on Pro)</td></tr>
<tr><td>Online payments</td><td>Through connected payment gateways</td><td>Wave Payments: cards 2.9% + $0.60, bank (ACH) 1% with $1 minimum (US)</td></tr>
<tr><td>Paid upgrade</td><td>Zoho Billing or Zoho Books for larger needs</td><td>Pro at $19/month or $190/year</td></tr>
<tr><td>Best for</td><td>Service businesses that want a full free invoicing app</td><td>US and Canadian small businesses that want free books too</td></tr>
</tbody></table>
<p>Sources: <a href="https://www.zoho.com/us/invoice/pricing/" target="_blank" rel="noopener noreferrer">Zoho Invoice pricing</a> and <a href="https://www.waveapps.com/pricing" target="_blank" rel="noopener noreferrer">Wave pricing</a>, checked October 2026.</p>

<h2>Zoho Invoice free plan: what you get</h2>
<p>Zoho describes Zoho Invoice as a forever-free invoicing solution. At the time of writing the free plan includes up to 500 invoices a year, two users, three projects and two organizations under one account. Features listed include quotes, recurring invoices, automated payment reminders, a customer portal, time tracking, expense recording, multiple currencies and mobile apps.</p>
<p><strong>Trade-offs:</strong> invoices carry Zoho branding, there is no general ledger, and the 500-invoice cap means a business sending about 42 or more invoices a month (500 ÷ 12 = 41.7) will outgrow it. Card payment fees depend on the gateway you connect, such as Stripe or PayPal.</p>
<p><strong>If you outgrow it:</strong> Zoho's pricing page points growing businesses to Zoho Billing for subscription and advanced billing needs, and Zoho Books is the route to full accounting. Both are paid. Before you hit the 500-invoice cap, decide whether you need more invoicing features or a full ledger, because that determines which upgrade, or which competitor, makes sense.</p>

<h2>Wave invoicing: what the free Starter plan includes</h2>
<p>Wave's Starter plan costs $0 and includes unlimited estimates, invoices, bills and bookkeeping records, optional online payments, mobile invoicing and a cash flow dashboard. Wave makes money from payment processing, its Pro plan and add-ons such as payroll and bookkeeping services.</p>
<p><strong>Trade-offs:</strong> the most useful automation sits in Pro ($19 a month or $190 a year when we checked): automatic bank transaction imports, automated late payment reminders, your logo and brand colors without Wave branding, attachments and extra user roles. Wave is aimed mainly at US and Canadian businesses. Wave also sells payroll and a bookkeeping service (Wave Advisors) as paid extras, so you can grow inside Wave without changing tools.</p>

<h2>Payment fees: Zoho Invoice vs Wave</h2>
<p>Both tools are free to send invoices; the cost appears when clients pay online. Wave publishes its own rates. At the time of writing, US Starter rates are 2.9% + $0.60 per Visa, Mastercard or Discover transaction, 3.4% + $0.60 for American Express, and 1% (minimum $1) for bank payments. Pro removes the $0.60 per-transaction fee on the first 10 card transactions each month. Zoho Invoice does not process payments itself; you connect a gateway and pay that gateway's rates.</p>
<h3>Worked example: monthly payment costs on Wave</h3>
<p>You send 20 invoices of $800 a month on Wave Starter.</p>
<table><thead><tr><th>How clients pay</th><th>Fee per invoice</th><th>Monthly fees (20 invoices)</th></tr></thead><tbody>
<tr><td>All by card (Visa/Mastercard)</td><td>$800 × 2.9% = $23.20, + $0.60 = $23.80</td><td>$476.00</td></tr>
<tr><td>All by Wave bank payment</td><td>$800 × 1% = $8.00</td><td>$160.00</td></tr>
<tr><td>Direct bank transfer outside Wave</td><td>Bank-dependent, often low or nil</td><td>Near $0</td></tr>
</tbody></table>
<p>On Pro, the first 10 card payments each month would save 10 × $0.60 = $6.00, so Pro does not pay for itself on fees alone at this volume; its value is in reminders, bank imports and branding. Whichever tool you pick, steering larger clients to bank transfer saves the most. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> shows what to include.</p>

<h3>Reminders, recurring invoices and getting paid</h3>
<p>If chasing payment is your main pain, Zoho Invoice's free plan has the edge, because automated payment reminders are included. On Wave, you send reminders manually on Starter or upgrade to Pro. Both handle recurring invoices for retainers and subscriptions; see our <a href="/blog/recurring-invoices-guide">recurring invoices guide</a> for how to set them up well.</p>

<h2>Bookkeeping and accounting</h2>
<p>This is Wave's main advantage. Wave Starter records income and expenses, bills and transactions in a basic bookkeeping system, which gives you profit and loss information without another product. Zoho Invoice tracks invoices, payments and expenses but is not a full ledger; Zoho Books is the paid upgrade. If your accountant needs a general ledger, or you want to reconcile your bank account, Wave or a paid accounting tool is the better fit. Our <a href="/blog/bookkeeping-basics">bookkeeping basics guide</a> explains what a ledger gives you.</p>

<h2>Limits that decide it</h2>
<ul>
<li><strong>More than about 41 invoices a month:</strong> Zoho Invoice's free cap of 500 a year rules it out.</li>
<li><strong>Outside the US and Canada:</strong> Wave's payments and support are focused there; Zoho Invoice is more international.</li>
<li><strong>Need for free automated reminders:</strong> Zoho Invoice.</li>
<li><strong>Need for free bookkeeping:</strong> Wave.</li>
<li><strong>Need no branding on free invoices:</strong> neither; consider a free invoice generator for branding-free PDFs.</li>
</ul>

<h2>Mobile apps, expenses and time tracking</h2>
<p>Both tools have iOS and Android apps for creating invoices on the go. Zoho Invoice's free plan lists time tracking and projects (three projects on the free plan), which suits freelancers who bill hourly; you can turn tracked hours into invoice lines. Wave focuses on the money side: it records expenses and bills as part of its bookkeeping, and offers receipt capture as a paid add-on. If you bill by the hour, Zoho Invoice's time tracking is the stronger free feature; our guide to <a href="/blog/how-to-invoice-for-hourly-work">invoicing for hourly work</a> covers how to present hours on an invoice.</p>

<h2>Switching between Zoho Invoice and Wave</h2>
<p>People move in both directions: from Zoho Invoice to Wave when they want bookkeeping, and from Wave to Zoho Invoice when they want free reminders or work outside North America. To switch cleanly:</p>
<ol>
<li>Export your customer list and download PDFs of all invoices from the old tool.</li>
<li>Note your last invoice number and continue the sequence in the new tool.</li>
<li>Leave open invoices in the old tool until they are paid, or reissue them with the same numbers and tell the clients.</li>
<li>Update recurring invoice schedules and any saved payment links.</li>
<li>Keep the old account accessible, or keep your exports, for as long as your tax authority requires.</li>
</ol>

<h2>Where a free invoice generator fits</h2>
<p>Both Zoho Invoice and Wave require an account and store your data in the cloud. If you only send a few invoices a month and are paid by bank transfer, our <a href="/invoice-generator">free invoice generator</a> creates a branded PDF with no account and no third-party branding. It does not send invoices, take payments, send reminders or do bookkeeping, so it suits a different job. Read <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a> to decide which camp you are in.</p>

<h2>Who should choose which?</h2>
<table><thead><tr><th>If you are...</th><th>Choose</th></tr></thead><tbody>
<tr><td>A freelancer sending 10-30 invoices a month who hates chasing payment</td><td>Zoho Invoice</td></tr>
<tr><td>A US or Canadian small business wanting invoices and books in one free tool</td><td>Wave</td></tr>
<tr><td>A business outside North America</td><td>Zoho Invoice</td></tr>
<tr><td>A business sending 50+ invoices a month on a $0 budget</td><td>Wave Starter</td></tr>
<tr><td>A business that has outgrown both and needs full accounting</td><td>See <a href="/blog/xero-vs-quickbooks">Xero vs QuickBooks</a> or <a href="/blog/freshbooks-vs-quickbooks">FreshBooks vs QuickBooks</a></td></tr>
</tbody></table>

<h2>Common mistakes when choosing free invoicing software</h2>
<ul>
<li><strong>Ignoring payment fees.</strong> Card fees on a busy month usually cost more than any subscription.</li>
<li><strong>Not exporting data.</strong> Download your invoices and client list regularly, whichever tool you use.</li>
<li><strong>Restarting invoice numbers when switching.</strong> Continue your sequence; the <a href="/tools/invoice-number-generator">invoice number generator</a> helps.</li>
<li><strong>Assuming free plans stay the same.</strong> Re-check limits each year.</li>
</ul>

<h2>Next step</h2>
<p>Count how many invoices you sent last year and decide whether you need bookkeeping. Under 500 invoices with no bookkeeping need points to Zoho Invoice; a need for free books points to Wave. Try your next real invoice in the one you pick, or create it in the <a href="/invoice-generator?template=minimal">invoice generator</a> if you just need a PDF today.</p>
`,
  },
  {
    slug: "xero-vs-quickbooks",
    title: "Xero vs QuickBooks Online: Pricing and Invoicing (2026)",
    description:
      "Xero vs QuickBooks Online compared: 2026 US plan prices, invoice limits, users, invoicing features and which small business accounting software suits you.",
    category: "comparisons",
    date: "2026-10-24",
    author: "Invoice Creator Editorial Team",
    related: ["freshbooks-vs-quickbooks", "zoho-invoice-vs-wave", "invoice-generator-vs-accounting-software"],
    faqs: [
      {
        q: "Is Xero cheaper than QuickBooks?",
        a: "At regular US prices at the time of writing, yes for most comparable tiers: Xero's plans are $27, $59 and $97 a month, while QuickBooks Online's paid plans are $38, $85, $140 and $340. But Xero's cheapest plan caps you at 20 invoices a month, and QuickBooks includes more depth on higher tiers. Both run frequent introductory discounts.",
      },
      {
        q: "Does Xero charge per user?",
        a: "Xero's US pricing page says there are no per-user license fees on its plans. QuickBooks Online includes a set number of users per plan: one on Free and Simple Start, three on Essentials, five on Plus and 25 on Advanced. For teams, this can change which product is cheaper.",
      },
      {
        q: "Is Xero or QuickBooks better outside the US?",
        a: "Xero is especially popular in the UK, Australia and New Zealand, and both products have localized versions with regional tax features and pricing. Compare the pricing page for your country, because plans, prices and features differ by region, and check which product local accountants support.",
      },
      {
        q: "Can I switch from QuickBooks to Xero or the other way?",
        a: "Yes. Both companies and many third-party services offer conversion tools that move contacts, balances and some history. Plan the switch at the start of a financial year or quarter, export your reports and invoice PDFs first, and continue your invoice number sequence in the new system.",
      },
      {
        q: "Does QuickBooks have a free plan?",
        a: "At the time of writing, QuickBooks Online's US pricing page lists a Free plan for one user with up to two invoices a month (unlimited if you qualify for and enable QuickBooks Payments), one connected bank account and no mobile app or third-party integrations. Xero offers a free trial but no free plan.",
      },
      {
        q: "What happens to my data if I cancel QuickBooks Online or Xero?",
        a: "QuickBooks Online's help pages say a cancelled company moves to read-only access for one year, during which you can view, export and print but not edit, after which the data may be deleted. Xero's help center explains its own process for cancelled organizations. With either product, export your reports, invoice PDFs and contact lists before cancelling, and keep them for as long as your tax authority requires.",
      },
      {
        q: "Can I take online card payments with Xero and QuickBooks?",
        a: "Yes. QuickBooks offers its own QuickBooks Payments service, and Xero connects to payment providers such as Stripe so clients can pay directly from the invoice. Processing fees are charged separately from the subscription and vary by payment method and country. Compare the fees for your typical invoice size on each official pricing page, because at higher volumes they can cost more than the plan itself.",
      },
      {
        q: "Do accountants get discounts on Xero or QuickBooks?",
        a: "Often, yes. Accountants and bookkeepers in partner programs, such as the Xero partner program and QuickBooks ProAdvisor, can often access discounted subscriptions for their clients. If your accountant manages your subscription, ask whether they pass on a lower price, who owns the file and what happens if you change accountants. Make sure the company file is in your name so you keep control of your records.",
      },
      {
        q: "Which is easier to use, Xero or QuickBooks Online?",
        a: "It depends on who you ask, so test both yourself. Both offer free trials, and the fairest test is to enter one real month of invoices, bills and bank transactions. Notice how quickly you can create and send an invoice, reconcile your bank feed and find the aging report. If your accountant uses one product every day, their familiarity often matters more than small interface differences.",
      },
      {
        q: "Do I still need an invoice generator if I use Xero or QuickBooks?",
        a: "Usually not. Both products create, send and track invoices, and invoices made inside them flow into your accounts receivable and reports automatically. A separate invoice generator is mainly useful before you choose software, for an occasional one-off invoice, or when you only need a PDF. If you make an invoice outside your accounting system, record it there too and keep the same number sequence.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In Xero vs QuickBooks, Xero is usually cheaper for teams because it has no per-user fees, with US plans from $27 a month (capped at 20 invoices). QuickBooks Online has a limited free plan, paid plans from $38 a month, more US accountants who use it, and deeper features on higher tiers. Prices are regular US rates at the time of writing.</p>

<p>Xero and QuickBooks Online are the two best-known cloud accounting platforms for small businesses. Both handle invoicing, bank reconciliation, bills, reports and sales tax, and both connect to hundreds of apps. The differences that matter in practice are price per user, invoice limits on entry plans, regional strength and which one your accountant prefers. This comparison uses the official US pricing pages as of October 2026, not hands-on testing. For a service-business angle, see <a href="/blog/freshbooks-vs-quickbooks">FreshBooks vs QuickBooks</a>.</p>

<h2>Xero vs QuickBooks at a glance</h2>
<table><thead><tr><th>Feature</th><th>Xero (US)</th><th>QuickBooks Online (US)</th></tr></thead><tbody>
<tr><td>Free plan</td><td>No (free trial)</td><td>Yes: 1 user, 2 invoices a month</td></tr>
<tr><td>Entry paid plan</td><td>Early, $27/month, 20 invoices and 5 bills a month</td><td>Simple Start, $38/month, 1 user</td></tr>
<tr><td>Mid plans</td><td>Growing, $59/month; Established, $97/month</td><td>Essentials, $85/month (3 users); Plus, $140/month (5 users)</td></tr>
<tr><td>Top plan</td><td>Established, $97/month</td><td>Advanced, $340/month (25 users)</td></tr>
<tr><td>User pricing</td><td>No per-user license fees</td><td>Users included per plan</td></tr>
<tr><td>Multi-currency</td><td>Established plan</td><td>Check plan details for your region</td></tr>
<tr><td>Payroll (US)</td><td>Xero Payroll powered by Gusto, add-on from $36/month + $6 per person</td><td>QuickBooks Payroll, separate add-on</td></tr>
<tr><td>Strongest regions</td><td>UK, Australia, New Zealand; also US</td><td>US; also UK, Canada, Australia</td></tr>
</tbody></table>
<p>Sources: <a href="https://www.xero.com/us/pricing-plans/" target="_blank" rel="noopener noreferrer">Xero US pricing</a> and <a href="https://quickbooks.intuit.com/pricing/" target="_blank" rel="noopener noreferrer">QuickBooks pricing</a>, checked October 2026. Regular prices shown; see the discounts section below.</p>

<h2>Xero pricing and plans (US)</h2>
<ul>
<li><strong>Early, $27 a month:</strong> send quotes and up to 20 invoices a month, enter 5 bills, bank reconciliation, sales tax, W-9 and 1099 management, short-range cash flow forecast. Auto-reconcile is a $5 a month add-on.</li>
<li><strong>Growing, $59 a month:</strong> no listed invoice or bill limit, automated bill entry, longer cash flow forecasting, budgeting and auto-reconciliation included.</li>
<li><strong>Established, $97 a month:</strong> adds multiple currencies, project time and cost tracking, expense and mileage claims and deeper analytics.</li>
</ul>
<p>Xero's page says there are no per-user license fees, so adding a bookkeeper or business partner does not raise the plan price.</p>

<h2>QuickBooks Online pricing and plans (US)</h2>
<ul>
<li><strong>Free, $0:</strong> one user, up to two invoices a month (unlimited if you qualify for and enable QuickBooks Payments), one bank account, no mobile app or third-party integrations.</li>
<li><strong>Simple Start, $38 a month:</strong> one user plus accountant access, invoicing with online payments and reminders.</li>
<li><strong>Essentials, $85 a month:</strong> three users, bulk invoice creation (listed as beta) and adding employee time to invoices.</li>
<li><strong>Plus, $140 a month:</strong> five users and the broader accounting features of the higher tiers; check the plan list for exact inclusions.</li>
<li><strong>Advanced, $340 a month:</strong> 25 users and batch creation, editing and sending of invoices and expenses.</li>
</ul>
<p>Intuit also sells QuickBooks Solopreneur for one-person businesses; check its own page if that is you.</p>

<h3>Discounts and the real first-year price</h3>
<p>Both vendors lead with promotions, which can make the first months much cheaper than the regular price. Both regularly run introductory discounts for new customers that last a few months. Promotions change often and exclude add-ons and payment fees, so budget on the regular price, because that is what you pay once the offer ends.</p>

<h2>Worked example: which costs less for your business?</h2>
<p>Regular prices, ignoring promotions and add-ons:</p>
<table><thead><tr><th>Scenario</th><th>Xero</th><th>QuickBooks Online</th><th>Annual difference</th></tr></thead><tbody>
<tr><td>Solo owner, 12 invoices a month</td><td>Early: $27 × 12 = $324</td><td>Simple Start: $38 × 12 = $456</td><td>Xero $132 less</td></tr>
<tr><td>3-person team, 40 invoices a month</td><td>Growing (Early's 20-invoice cap too low): $59 × 12 = $708</td><td>Essentials (3 users): $85 × 12 = $1,020</td><td>Xero $312 less</td></tr>
<tr><td>5 people, multi-currency invoicing</td><td>Established: $97 × 12 = $1,164</td><td>Plus (5 users): $140 × 12 = $1,680</td><td>Xero $516 less</td></tr>
</tbody></table>
<p>The second row shows why invoice caps matter: a team that sends 40 invoices a month cannot use Xero Early at all, so the fair comparison is Growing against Essentials. On subscription price alone, Xero wins these scenarios. QuickBooks can still be the better value if your accountant works in it (saving their time and your fees), if you need features specific to a QuickBooks tier, or if the free plan covers your needs. Card processing and payroll costs can also outweigh the subscription difference, so compare those for your volumes.</p>

<h2>Invoicing in Xero vs QuickBooks</h2>
<p>Both tools let you create branded invoices, set payment terms, add online payment options, send automatic reminders, create recurring invoices and track status. Invoices flow straight into accounts receivable and your reports, which is the main advantage over a standalone invoice tool.</p>
<ul>
<li><strong>Xero:</strong> clean invoice editor, quotes that convert to invoices, and a hard monthly invoice cap on Early. Multi-currency invoicing requires Established.</li>
<li><strong>QuickBooks:</strong> invoicing built around customer records, with batch invoicing on Advanced and employee time on Essentials and above. The free plan's two-invoice limit makes it a trial for most businesses.</li>
</ul>
<p>Neither product produces legally compliant structured e-invoices in every country automatically; check local support if you sell where e-invoicing is mandatory. Our guide to <a href="/blog/e-invoice-vs-pdf-invoice">e-invoice vs PDF invoice</a> explains the difference.</p>

<h2>Accounting depth and ecosystem</h2>
<p>QuickBooks has the larger US footprint: many US bookkeepers and accountants work in it daily, and its higher tiers cover inventory, classes and locations, and larger teams. Xero has a strong following among accountants in the UK, Australia and New Zealand, no per-user license fees and a well-regarded bank reconciliation workflow. Both have large app marketplaces covering payments, payroll, inventory and expense capture.</p>

<h2>Bank reconciliation and reporting</h2>
<p>Bank reconciliation is where accounting software earns its subscription. Both products import bank transactions through bank feeds and suggest matches against invoices and bills, so a customer payment marks the right invoice as paid. Xero includes auto-reconciliation on Growing and Established and sells it as a $5 a month add-on on Early, according to its pricing page. QuickBooks' free plan is limited to one connected bank account.</p>
<p>For reporting, both produce the core statements: profit and loss, balance sheet and an accounts receivable aging report. Xero's plans step up the cash flow forecasting range by tier (30, 60 and 180 days on Early, Growing and Established). QuickBooks adds more reporting depth on higher tiers. If you mostly need to know who owes you money, either product's aging report is enough; our guide to <a href="/blog/accounts-receivable-aging-report">reading an aging report</a> explains what to look for.</p>

<h2>How to choose: a step-by-step checklist</h2>
<ol>
<li><strong>Count invoices per month.</strong> Over 20 rules out Xero Early; over two rules out QuickBooks Free (unless you qualify for and use QuickBooks Payments).</li>
<li><strong>Count users.</strong> Include your bookkeeper and any partner who needs to log in.</li>
<li><strong>List must-have features:</strong> multi-currency, inventory, projects, payroll.</li>
<li><strong>Ask your accountant</strong> which product they support and whether they get partner pricing.</li>
<li><strong>Price both at regular rates for 12 months</strong>, plus payroll and payment processing.</li>
<li><strong>Trial the winner</strong> with one real month of invoices and bank transactions.</li>
</ol>

<h2>Xero vs QuickBooks outside the US</h2>
<p>Both products are localized. In the UK, both support Making Tax Digital for VAT; in Australia, both support Single Touch Payroll and GST. Prices, plan names and features differ by country, so never compare a US page with a UK one. If you are in the UK or Australia, Xero's local accountant network is a real advantage; in the US, QuickBooks' network is larger.</p>

<h2>Who should choose which?</h2>
<h3>Choose Xero if</h3>
<ul>
<li>Several people need access and you do not want per-user pricing.</li>
<li>You send more than 20 invoices a month and want a mid-price plan with no invoice cap.</li>
<li>You are in the UK, Australia or New Zealand and your accountant uses Xero.</li>
</ul>
<h3>Choose QuickBooks Online if</h3>
<ul>
<li>Your US accountant or bookkeeper works in QuickBooks.</li>
<li>You want a free plan to start, or need features on Plus or Advanced.</li>
<li>You need 25 users with granular permissions on one plan.</li>
</ul>
<h3>Choose neither (yet) if</h3>
<ul>
<li>You send a handful of invoices a month and keep simple records. A <a href="/blog/zoho-invoice-vs-wave">free tool such as Zoho Invoice or Wave</a> or a free invoice generator may be enough. See <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a>.</li>
</ul>

<h2>Common mistakes when choosing accounting software</h2>
<ul>
<li><strong>Comparing promotional prices.</strong> Compare regular prices over 12 months.</li>
<li><strong>Ignoring user counts.</strong> A cheap one-user plan becomes expensive when a second person needs access.</li>
<li><strong>Not asking your accountant.</strong> Their familiarity can save more than the subscription difference.</li>
<li><strong>Restarting invoice numbers after switching.</strong> Continue your sequence; see our <a href="/blog/invoice-numbering-system">invoice numbering guide</a>.</li>
</ul>

<h2>Next step</h2>
<p>Count your monthly invoices and the people who need access, then price both products at regular rates using the table above. Start a free trial of the one that wins and enter one real month of transactions before committing. If you need to send an invoice while you decide, create it in the <a href="/invoice-generator?template=corporate">invoice generator</a> and record it in your new system later.</p>
`,
  },
];
