import type { PostDraft } from "../blog";

export const FINANCE_TRENDS_2027_POSTS: PostDraft[] = [
  {
    slug: "dynamic-discounting",
    title: "Dynamic Discounting vs Early Payment Discounts: How It Works",
    description:
      "Dynamic discounting explained: how sliding-scale early payment works, how it compares with 2/10 net 30 and supply chain finance, and when to say yes.",
    category: "payments",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["early-payment-discount", "invoice-factoring", "invoice-financing-vs-line-of-credit"],
    faqs: [
      {
        q: "What is dynamic discounting in simple terms?",
        a: "Dynamic discounting is an arrangement where a buyer offers to pay a supplier's approved invoice before its due date in exchange for a discount that shrinks the closer payment gets to the due date. The discount is usually based on an annual rate, so paying 50 days early earns the buyer more than paying 10 days early. The buyer funds the early payment from its own cash.",
      },
      {
        q: "How is dynamic discounting different from 2/10 net 30?",
        a: "A 2/10 net 30 term is static: the supplier offers a fixed 2% discount if the customer pays within 10 days, and nothing in between. Dynamic discounting is a sliding scale. The discount is calculated per day of early payment, often from an annual rate the buyer sets, and the supplier usually chooses which invoices to accelerate and when.",
      },
      {
        q: "Is dynamic discounting the same as supply chain finance?",
        a: "No. In dynamic discounting the buyer pays early with its own cash and keeps the discount as a return. In supply chain finance, also called reverse factoring or approved payables finance, a bank or funder pays the supplier early based on the buyer's credit, and the buyer still pays the full amount on the original due date to the funder.",
      },
      {
        q: "Who benefits more from dynamic discounting, the buyer or the supplier?",
        a: "Both can benefit, but in different ways. The buyer earns a return on spare cash that is often higher than a bank deposit rate, and strengthens supplier relationships. The supplier gets cash sooner, usually at a lower cost than factoring or an overdraft. Whether it is a good deal for the supplier depends on how its own cost of capital compares with the discount rate.",
      },
      {
        q: "How do I calculate the discount on a dynamic discounting offer?",
        a: "Most offers use a simple daily accrual: invoice amount × annual rate × days paid early ÷ 365. For a $50,000 invoice at a 12% annual rate paid 30 days early, that is 50,000 × 0.12 × 30 ÷ 365 = $493.15. Check whether the offer uses 360 or 365 days and whether there is a minimum or maximum discount.",
      },
      {
        q: "Can a small business offer dynamic discounting to its customers?",
        a: "In practice dynamic discounting is driven by large buyers through their accounts payable or procurement platforms. A small business can offer a simple sliding-scale discount in its payment terms, but it must track each payment date and calculate the discount manually. Most small suppliers find a clear early payment discount term easier to administer.",
      },
      {
        q: "Does dynamic discounting hurt my profit margin?",
        a: "Yes, every discount reduces revenue on that invoice. The question is whether the cost is lower than your alternatives. If accelerating a $20,000 invoice by 40 days costs $263 but saves you drawing on a credit line at 15%, or lets you take a supplier discount of your own, the trade can pay for itself. Compare the annualized rates, not the dollar amounts alone.",
      },
      {
        q: "How should I record a dynamic discount on my books?",
        a: "Record the original invoice at its full amount. When the customer pays early at a discount, record the cash received and the difference as a sales discount, which reduces revenue, rather than as a bank charge or an unpaid balance. Some accountants prefer a separate account for early payment discounts so the cost is visible. Ask your accountant which approach suits your reporting.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Dynamic discounting lets a buyer pay a supplier's approved invoice early in exchange for a discount that slides with the number of days paid early, usually priced from an annual rate. Unlike a fixed 2/10 net 30 term, the discount changes day by day, and unlike supply chain finance, the buyer funds the payment from its own cash.</p>

<p>If you sell to large companies, you may receive an invitation to join a supplier portal that promises "get paid in days, not months." Behind most of those offers is dynamic discounting. It can be a cheap source of working capital for a supplier and a good return on idle cash for a buyer, but only if both sides understand how the discount is calculated. This guide explains the mechanics, compares it with a classic early payment discount and with supply chain finance, and walks through the numbers so you can decide whether an offer is worth accepting.</p>

<h2>What is dynamic discounting?</h2>
<p>Dynamic discounting is a buyer-led early payment program. Once the buyer has approved an invoice for payment, the supplier can choose to be paid before the due date. The earlier the payment, the larger the discount. The discount is typically expressed as an annual percentage rate (APR) and prorated by the number of days the payment is accelerated.</p>
<p>Three features define it:</p>
<ul>
<li><strong>Sliding scale.</strong> The discount is calculated for each day of early payment, not as one fixed percentage at one fixed date.</li>
<li><strong>Buyer-funded.</strong> The buyer pays from its own balance sheet. No bank or third-party funder sits between the two parties, although a software platform usually runs the process.</li>
<li><strong>Invoice by invoice.</strong> Suppliers usually pick which approved invoices to accelerate and when, so they can use it only when they need cash.</li>
</ul>
<p>Programs run on accounts payable platforms, procurement suites or the buyer's ERP. The supplier logs in, sees a list of approved invoices with an early payment price next to each, and clicks to accept. Some programs work the other way round: the supplier bids the discount it is willing to give, and the buyer accepts the cheapest offers first.</p>

<h2>Dynamic discounting vs a fixed early payment discount</h2>
<p>The classic early payment discount is a term the supplier writes on its own invoice, such as 2/10 net 30: take 2% off if you pay within 10 days, otherwise pay the full amount within 30. Our guide to the <a href="/blog/early-payment-discount">early payment discount and how 2/10 net 30 works</a> covers that structure in detail, including how to show it on an invoice. A sliding-scale program differs in who initiates it, how the discount is priced and how flexible the timing is.</p>
<table><thead><tr><th>Feature</th><th>Fixed early payment discount (e.g. 2/10 net 30)</th><th>Dynamic discounting</th></tr></thead><tbody>
<tr><td>Who sets it</td><td>Supplier, on the invoice</td><td>Usually the buyer, through its AP platform</td></tr>
<tr><td>Discount shape</td><td>One fixed percentage at one cut-off date</td><td>Sliding scale, recalculated for each day paid early</td></tr>
<tr><td>Typical pricing</td><td>2% for paying 20 days early (about 37% annualized)</td><td>An annual rate, often in single or low double digits</td></tr>
<tr><td>Who chooses to use it</td><td>The customer decides whether to pay early</td><td>The supplier usually requests early payment invoice by invoice</td></tr>
<tr><td>Who funds it</td><td>The customer's cash</td><td>The buyer's cash</td></tr>
<tr><td>Admin</td><td>Simple: one term on the invoice</td><td>Requires a platform or careful manual tracking</td></tr>
<tr><td>Best for</td><td>Small suppliers wanting faster payment from many customers</td><td>Suppliers to large buyers with approved invoices and long terms</td></tr>
</tbody></table>
<p>The important number in that table is the annualized cost. A 2/10 net 30 discount looks small, but the supplier gives up 2% to receive money 20 days sooner. Annualized, that is (2 ÷ 98) × (365 ÷ 20) = 0.0204 × 18.25 = about 37.2%. Buyer-run early payment programs usually price early payment at a much lower annual rate, which is why many suppliers find them cheaper than a classic cash discount.</p>

<h2>How it works, step by step</h2>
<ol>
<li><strong>The supplier issues an invoice</strong> on the agreed terms, for example net 60, with the buyer's PO number and correct tax details.</li>
<li><strong>The buyer approves it.</strong> Only approved invoices are eligible, because the buyer will not pay early for goods it has not confirmed it received. Many buyers run a <a href="/blog/three-way-match">three-way match</a> of PO, receipt and invoice before approval.</li>
<li><strong>The platform shows an early payment offer.</strong> For each approved invoice, the supplier sees the amount it would receive today, tomorrow or on a chosen date.</li>
<li><strong>The supplier accepts</strong> for one invoice, a batch, or all invoices automatically.</li>
<li><strong>The buyer pays the discounted amount</strong>, often within one or two business days.</li>
<li><strong>Both sides record the discount.</strong> The supplier books the difference as a sales discount; the buyer books it as a purchase discount or other income.</li>
</ol>
<p>The process only works when invoices are approved quickly. If an invoice sits in an approval queue for 40 days of a 60-day term, there are only 20 days left to accelerate, and the discount opportunity shrinks for both sides. That is one reason buyers that run these programs also invest in faster invoice processing.</p>

<h2>Worked example: calculating a dynamic discount</h2>
<p>Suppose you have a $50,000 approved invoice on net 60 terms. The buyer's program prices early payment at 12% a year, calculated on a 365-day basis. The formula is:</p>
<p><strong>Discount = invoice amount × annual rate × days paid early ÷ 365</strong></p>
<p>The annual cost of the money is 50,000 × 0.12 = $6,000. Each day of acceleration therefore costs 6,000 ÷ 365 = $16.44. The table shows the result if you request payment on different days after the invoice date:</p>
<table><thead><tr><th>Paid on day</th><th>Days early</th><th>Calculation</th><th>Discount</th><th>Cash received</th><th>Discount as % of invoice</th></tr></thead><tbody>
<tr><td>10</td><td>50</td><td>6,000 × 50 ÷ 365</td><td>$821.92</td><td>$49,178.08</td><td>1.64%</td></tr>
<tr><td>20</td><td>40</td><td>6,000 × 40 ÷ 365</td><td>$657.53</td><td>$49,342.47</td><td>1.32%</td></tr>
<tr><td>30</td><td>30</td><td>6,000 × 30 ÷ 365</td><td>$493.15</td><td>$49,506.85</td><td>0.99%</td></tr>
<tr><td>40</td><td>20</td><td>6,000 × 20 ÷ 365</td><td>$328.77</td><td>$49,671.23</td><td>0.66%</td></tr>
<tr><td>50</td><td>10</td><td>6,000 × 10 ÷ 365</td><td>$164.38</td><td>$49,835.62</td><td>0.33%</td></tr>
<tr><td>60</td><td>0</td><td>None</td><td>$0.00</td><td>$50,000.00</td><td>0.00%</td></tr>
</tbody></table>
<p>Now compare that with a fixed 2/10 net 30 style discount on the same invoice. A 2% discount costs 50,000 × 0.02 = $1,000 whether the buyer pays on day 1 or day 10. Taking the dynamic offer on day 10 instead costs $821.92, which is $178.08 less, even though the money arrives 50 days early rather than 20. Paying the same amount for a faster result is the core appeal of dynamic discounting for suppliers.</p>
<p>The rates in this example are illustrative. Real programs vary, and some add a minimum discount per invoice or a platform fee, so always read the offer terms.</p>

<h2>Dynamic discounting vs supply chain finance</h2>
<p>Supply chain finance (SCF), also called reverse factoring or approved payables finance, looks similar from the supplier's side: you see approved invoices and can be paid early at a discount. The difference is who provides the money.</p>
<ul>
<li><strong>In a buyer-funded program,</strong> the buyer pays early from its own cash. The buyer earns the discount. Its days payable outstanding (DPO) falls, because it pays sooner.</li>
<li><strong>In supply chain finance,</strong> a bank or funder pays the supplier early and the buyer repays the funder in full on the original due date, or sometimes later. The funder earns the discount, priced off the buyer's credit rating rather than the supplier's. The buyer's DPO stays the same or gets longer.</li>
</ul>
<p>Using the same $50,000 invoice, if a funder priced SCF at 6.5% a year and you took payment 50 days early, the discount would be 50,000 × 0.065 × 50 ÷ 365 = 3,250 × 50 ÷ 365 = $445.21. That is cheaper than the $821.92 buyer-funded discount because the funder's cost of money is lower than the return the buyer wants on its own cash. Some large buyers run both programs: buyer-funded discounts when they have surplus cash and SCF when they want to keep cash on hand.</p>
<p>SCF has received regulatory attention because it can make a buyer's debt look like ordinary trade payables. In the United States, the <a href="https://www.fasb.org/" target="_blank" rel="noopener noreferrer">Financial Accounting Standards Board (FASB)</a> issued ASU 2022-04, which requires buyers to disclose the key terms and outstanding amounts of supplier finance programs. For a supplier, the practical risk is different: if a funder withdraws from the program, you go back to waiting the full term, so do not build your cash plan around permanent access.</p>
<p>Supply chain finance is also distinct from <a href="/blog/invoice-factoring">invoice factoring</a>, where you sell your invoices to a factor that prices the deal on your customers' credit and often collects from them directly. With either program, the buyer has already approved the invoice and you deal only with the buyer's program.</p>

<h2>Should a supplier accept an early payment offer?</h2>
<p>Treat every early payment offer as a loan with an interest rate. If the annualized rate is lower than your next-cheapest source of cash, accepting can make sense. If it is higher, you are better off waiting.</p>
<h3>Compare it with your alternatives</h3>
<p>List what each option would cost on an annual basis: an overdraft or business credit line, a merchant cash advance, factoring, or simply waiting and delaying your own spending. Our comparison of <a href="/blog/invoice-financing-vs-line-of-credit">invoice financing vs a line of credit</a> explains how to calculate those rates fairly. A 12% early payment rate is attractive if your overdraft costs 18%, and unattractive if you have spare cash sitting in an account.</p>
<h3>Decide what the cash is for</h3>
<p>Early cash is worth most when it unlocks something: meeting payroll in a tight week, buying stock at a bulk discount, or taking a supplier's own early payment discount. If you would simply leave the money in the bank, the discount is a pure loss. A weekly <a href="/blog/cash-flow-management">cash flow management</a> routine tells you which invoices to accelerate and which to leave.</p>
<h3>Use it selectively</h3>
<p>Most programs let you accelerate individual invoices. Accept early payment on large invoices in months when cash is tight, and let others run to term. Auto-accept settings are convenient but can quietly cost you thousands a year.</p>
<h3>Watch the effect on margins</h3>
<p>On a product with a 10% net margin, giving away 1.64% of revenue to be paid 50 days early removes about one-sixth of your profit on that sale. Make sure the cash benefit is worth that.</p>

<h2>Why buyers offer sliding-scale early payment</h2>
<p>Understanding the buyer's motive helps you negotiate. A large buyer holding cash earning, say, 4% in a deposit account can earn 12% annualized by paying suppliers early. The return is low-risk because the buyer has already approved the invoice and owes the money anyway. Buyers also use early payment programs to support smaller suppliers, reduce the risk of supply disruption and lower prices in future negotiations. Finance teams often track the program's take-up as part of their <a href="/blog/accounts-payable-kpis">accounts payable KPIs</a>, alongside DPO and cost per invoice.</p>
<p>Because the buyer earns the discount, there is often room to negotiate the rate. Suppliers with strong relationships sometimes agree a lower APR or ask for faster approval instead, which has a similar effect on cash without any discount.</p>

<h2>Common mistakes with early payment programs</h2>
<ul>
<li><strong>Comparing dollars instead of rates.</strong> A $164 discount looks small, but on a 10-day acceleration it is still a 12% annual rate. Always annualize.</li>
<li><strong>Ignoring slow approval.</strong> If the buyer takes weeks to approve invoices, most of the early payment window has gone before you can use it. Send complete, accurate invoices so they are approved quickly.</li>
<li><strong>Leaving auto-accept switched on.</strong> Accelerating every invoice by default can cost more than a bank line you never draw on.</li>
<li><strong>Booking the discount as a bank fee.</strong> It reduces revenue. Recording it elsewhere distorts your gross margin and can cause reconciliation errors.</li>
<li><strong>Not checking the day-count basis.</strong> A rate calculated on 360 days costs slightly more than the same rate on 365 days.</li>
<li><strong>Confusing it with factoring.</strong> Signing up for a funder-backed program may involve assigning your receivables, which can conflict with existing loan agreements. Read the agreement.</li>
<li><strong>Agreeing to longer terms in exchange.</strong> Some buyers extend standard terms from net 30 to net 90 at the same time as launching an early payment program. That makes the "discount" partly a cost of the new, slower terms. Our guide to <a href="/blog/net-60-net-90-payment-terms">net 60 and net 90 payment terms</a> explains how to push back.</li>
</ul>

<h2>Supplier checklist before you accept an early payment offer</h2>
<ul>
<li>Calculate the annualized rate and compare it with your cheapest alternative source of cash.</li>
<li>Confirm the day-count basis (360 or 365), any minimum discount and any platform fees.</li>
<li>Check whether the program is buyer-funded or funder-backed (supply chain finance).</li>
<li>Read whether the agreement assigns your receivables, and check it against existing loan covenants.</li>
<li>Decide which invoices to accelerate, based on your cash forecast for the next few weeks.</li>
<li>Make sure your invoices include the buyer's PO number, correct legal entity and tax details so approval is fast.</li>
<li>Set up a separate sales discount account in your books to record the cost.</li>
<li>Review the program's cost every quarter and switch off auto-accept if you no longer need it.</li>
</ul>

<h2>Getting invoices approved faster</h2>
<p>Whatever program a buyer offers, the clock starts when your invoice is accepted. A clear, complete invoice with the right PO number, line items that match the purchase order and a unique invoice number avoids rejections that eat into your early payment window. You can build a clean, professional PDF in the <a href="/invoice-generator">free invoice generator</a>, which calculates subtotals, tax and discounts in your browser. It does not connect to buyer portals or process payments, so upload or email the PDF through the buyer's normal channel. For more ways to speed up collections, browse our <a href="/blog/category/payments">payments guides</a>.</p>
`,
  },
  {
    slug: "year-end-invoicing-checklist",
    title: "Year-End Invoicing Checklist 2026: Close Your Books Cleanly",
    description:
      "Use this year-end invoicing checklist to bill unbilled work, clean up receivables, prepare 1099s and organize records so you close your 2026 books cleanly.",
    category: "guides",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "llc-annual-report",
      "month-end-close-checklist",
      "bad-debt-write-off",
      "1099-nec-threshold-2026",
      "how-long-to-keep-invoices",
    ],
    faqs: [
      {
        q: "When should I send my last invoices of the year?",
        a: "Send them as soon as the work is done, ideally before your clients' own holiday shutdowns in mid to late December. Many accounts payable teams stop processing new invoices in the last week or two of the year. If you invoice on the 30th, the invoice may not be looked at until mid-January, which delays payment by weeks even if your terms say net 15.",
      },
      {
        q: "Should I restart invoice numbering on January 1?",
        a: "You do not have to. A continuous sequence such as 1047, 1048, 1049 is simple and clearly shows no gaps. If you prefer a year prefix such as 2027-001, that is also fine, as long as every number is unique and the sequence has no unexplained gaps. Some countries have specific rules, so check local requirements before changing your scheme.",
      },
      {
        q: "Does invoicing in December mean I pay tax on that income this year?",
        a: "It depends on your accounting method. On the cash method, which most US freelancers and small businesses use, income generally counts when you receive it, so a December invoice paid in January is next year's income. On the accrual method, income generally counts when you earn and bill it, so the December invoice counts this year. Confirm with your tax adviser.",
      },
      {
        q: "What is the 1099-NEC threshold for 2026?",
        a: "For payments made in 2026, a business generally files Form 1099-NEC for a contractor it paid $2,000 or more during the year, up from the long-standing $600 threshold. Forms for 2026 are due to recipients and the IRS by February 1, 2027, because January 31 falls on a Sunday. Collect a Form W-9 from each contractor now so you have their details ready.",
      },
      {
        q: "How do I handle invoices that will never be paid?",
        a: "Review your aging report and chase anything collectible first. For debts that are truly uncollectible, document your collection attempts and write them off as bad debt. On the accrual method, a business bad debt may be deductible because you already counted the income. On the cash method, you generally cannot deduct it because the income was never recorded. Ask your accountant before year-end.",
      },
      {
        q: "What is unbilled revenue and why does it matter at year-end?",
        a: "Unbilled revenue is work you have completed but not yet invoiced, such as hours logged in the last weeks of December. It matters because it is money you are owed but have not asked for. For accrual-basis businesses, it may also need to be recorded in the correct year. Review timesheets, project milestones and expense receipts to find it before the books close.",
      },
      {
        q: "How long should I keep this year's invoices?",
        a: "In the United States, the IRS generally recommends keeping records that support your tax return for at least three years from filing, with longer periods in some situations, such as six years if income is substantially underreported. Many businesses keep invoices for seven years to be safe. VAT countries often require six to ten years. Store PDFs in a backed-up folder organized by year.",
      },
      {
        q: "Can I send an invoice in January for work done in December?",
        a: 'Yes. Invoice dates should reflect when you issue the invoice, and the description or service period should show when the work was done, for example "Services for December 1-31, 2026." Do not backdate an invoice to make it appear it was issued earlier. If timing matters for tax, discuss it with your accountant rather than adjusting dates.',
      },
      {
        q: "Should I issue credit notes before the year ends?",
        a: "If you know an invoice is wrong or a client is owed a refund or adjustment, issue the credit note before you close the year so your receivables and revenue are accurate. A credit note references the original invoice number and reduces the amount owed. Leaving known errors open makes your aging report misleading and complicates tax returns and any sales tax or VAT filings.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> A year-end invoicing checklist covers five jobs: bill all completed but unbilled work before clients close for the holidays, clean up accounts receivable, decide how invoice numbering continues into the new year, collect contractor details for 1099 forms, and archive every invoice and receipt. Doing these in November and December makes closing your books and filing taxes far easier.</p>

<p>The last weeks of the year are when small billing problems turn into expensive ones. Clients' accounts payable teams shut down, contractors chase their 1099 forms, and the unpaid invoice from March is suddenly a tax question. This year-end invoicing checklist, which doubles as a simple year-end accounting checklist, is written for freelancers and small businesses that do their own invoicing. It runs from late October through January, explains which decisions depend on cash or accrual accounting, and includes a worked example so you can see how timing affects your numbers. It is general information, not tax advice, so confirm specific decisions with your accountant.</p>

<h2>Year-end invoicing checklist timeline: what to do and when</h2>
<p>Spread the work over three months rather than cramming it into the week after Christmas.</p>
<table><thead><tr><th>When</th><th>Task</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Late October to mid-November</td><td>Ask clients about their year-end invoice cut-off dates and holiday shutdowns</td><td>Invoices that miss the cut-off may wait until mid-January</td></tr>
<tr><td>November</td><td>Review the aging report and chase overdue invoices</td><td>Collectors and clients are still at work; budgets may still have money</td></tr>
<tr><td>November</td><td>Request Form W-9 from every contractor you paid this year</td><td>You need names, addresses and tax IDs for 1099 forms</td></tr>
<tr><td>Early to mid-December</td><td>Bill all completed work and reimbursable expenses</td><td>Gets invoices into AP queues before shutdowns</td></tr>
<tr><td>Mid-December</td><td>Issue credit notes, write off bad debts, reconcile payments</td><td>Accurate receivables and revenue for the year</td></tr>
<tr><td>Last week of December</td><td>Decide numbering for the new year; prepare January retainer invoices</td><td>Avoids duplicate or confusing invoice numbers</td></tr>
<tr><td>Early January</td><td>Bill late-December work, export records, send 1099s</td><td>For 2026 payments, 1099-NEC forms are due February 1, 2027</td></tr>
<tr><td>Mid-January</td><td>Pay fourth-quarter estimated tax if you owe it</td><td>The Q4 2026 federal payment is due January 15, 2027</td></tr>
</tbody></table>

<h2>Step 1: Confirm client invoicing cut-off dates</h2>
<p>Large organizations often set an internal deadline for invoices to be entered in the current financial year, and many close their accounts payable team between Christmas and New Year. Email your main clients in November and ask two questions: what is the last date you can receive an invoice to process it this year, and when is your office closed? Add those dates to your calendar.</p>
<p>Some clients also have "use it or lose it" budgets. If a project is funded from this year's budget, they may want the invoice before their year ends, which can work in your favor. If you work with government or corporate clients that require a PO number, make sure every December invoice quotes it correctly, because a rejected invoice in the last week of the year can sit untouched for a month.</p>

<h2>Step 2: Find and bill all unbilled work</h2>
<p>Unbilled work is the most common source of lost year-end revenue. Go through these sources one by one:</p>
<ul>
<li><strong>Timesheets and time-tracking apps.</strong> Look for hours logged but not invoiced, especially small blocks under an hour.</li>
<li><strong>Project milestones.</strong> Check whether any milestone was completed but not billed. Milestones are easy to miss when a project runs over several months.</li>
<li><strong>Reimbursable expenses.</strong> Travel, materials, software and shipping costs you agreed to pass through.</li>
<li><strong>Retainer overages.</strong> Hours above the retainer allowance that you agreed to bill separately.</li>
<li><strong>Change orders and extra scope.</strong> Work the client asked for verbally that was never added to an invoice.</li>
</ul>
<p>Create the invoices in one sitting. If you have several to produce, the <a href="/invoice-generator">free invoice generator</a> lets you enter line items, tax and discounts and download a PDF in your browser. It does not send or track invoices, so email each PDF to your client and record it in your own tracker or accounting software.</p>

<h2>Step 3: Clean up accounts receivable</h2>
<p>Your receivables balance at December 31 should only include money you genuinely expect to collect. Run an <a href="/blog/accounts-receivable-aging-report">accounts receivable aging report</a>, sort it by age, and work through each bucket.</p>
<h3>Current and 1-30 days overdue</h3>
<p>Send a polite reminder that mentions holiday closures: "Our records show invoice 1042 for $3,200 is due on December 15. If it helps your year-end processing, payment details are on the attached copy."</p>
<h3>31-90 days overdue</h3>
<p>Phone the client. Ask whether the invoice was received, whether it is approved, and when it is scheduled for payment. Many late invoices are stuck because of a missing PO or a wrong address.</p>
<h3>Over 90 days</h3>
<p>Decide whether to escalate, offer a payment plan, or accept that the money is gone. For debts that are truly uncollectible, follow the steps in our guide to a <a href="/blog/bad-debt-write-off">bad debt write-off</a>, and keep evidence of your collection attempts.</p>
<h3>Unapplied payments and credits</h3>
<p>Match every payment received to an invoice. Look for partial payments, duplicate payments and overpayments. Issue credit notes for known errors, refunds or agreed discounts, so the invoice you issued and the amount owed agree.</p>

<h2>Step 4: Understand how cash or accrual accounting affects timing</h2>
<p>Your accounting method decides which year an invoice affects. The rules differ by country and business type, so treat this as an overview. Our guide to <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a> explains both methods in more depth.</p>
<ul>
<li><strong>Cash method:</strong> income generally counts when you receive payment. An invoice sent on December 10 and paid on January 8 is generally next year's income.</li>
<li><strong>Accrual method:</strong> income generally counts when it is earned, usually when you complete the work and have a right to bill. The same invoice counts in the year the work was done, even if paid in January.</li>
</ul>
<h3>Worked example: one freelancer, two methods</h3>
<p>Maria is a designer. In 2026 she collected $84,000 from clients by December 31. She also has three invoices outstanding at year-end: $4,500 sent on December 5, $2,300 sent on December 19 and $1,200 for work completed on December 22 that she will invoice on January 4. One older invoice for $900 from March is uncollectible.</p>
<table><thead><tr><th>Item</th><th>Cash method (2026 income)</th><th>Accrual method (2026 income)</th></tr></thead><tbody>
<tr><td>2026 work billed and paid during 2026</td><td>$84,000</td><td>$84,000</td></tr>
<tr><td>Open December invoices ($4,500 + $2,300)</td><td>$0 (counts when paid)</td><td>$6,800</td></tr>
<tr><td>December work invoiced in January</td><td>$0</td><td>$1,200</td></tr>
<tr><td>Uncollectible March invoice ($900)</td><td>$0 (never recorded, so no deduction)</td><td>Recorded as income in March; bad debt deduction may offset it: minus $900</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$84,000</strong></td><td><strong>84,000 + 6,800 + 1,200 − 900 = $91,100</strong></td></tr>
</tbody></table>
<p>The arithmetic is simplified: it assumes all of the $84,000 collected related to 2026 work and that no collections were for 2025 invoices. The point is the $7,100 difference (91,100 − 84,000), which is the effect of timing alone. On the cash method, delaying the January invoice does not change 2026 income at all; on accrual, the work date matters, not the invoice date. Never backdate or postdate invoices to move income between years.</p>

<h2>Step 5: Decide how invoice numbering continues into the new year</h2>
<p>January is when people most often create duplicate numbers, usually by restarting at 001 without changing the prefix. You have two sensible options:</p>
<ul>
<li><strong>Continue the sequence.</strong> If your last 2026 invoice is 1187, your first 2027 invoice is 1188. Simple, and gaps are easy to spot.</li>
<li><strong>Add a year prefix.</strong> Switch to 2027-001, 2027-002. Clear for filing, but you must use the prefix consistently so 2026-001 and 2027-001 are never confused.</li>
</ul>
<p>Whichever you choose, write it down and use it for the whole year. Our guide to building an <a href="/blog/invoice-numbering-system">invoice numbering system</a> covers formats and local rules, and the <a href="/tools/invoice-number-generator">invoice number generator</a> can produce a consistent sequence. If you void an invoice, keep the voided copy rather than reusing its number.</p>

<h2>Step 6: Prepare for 1099s and other year-end tax forms</h2>
<p>If you are a US business that paid independent contractors, collect a Form W-9 from each one now. For payments made in 2026, the Form 1099-NEC filing threshold rose from $600 to $2,000, so fewer small payments need a form; our article on the <a href="/blog/1099-nec-threshold-2026">1099-NEC threshold for 2026</a> explains the change and the exceptions. Because January 31, 2027 is a Sunday, 2026 forms are due by February 1, 2027. The <a href="https://www.irs.gov/forms-pubs/about-form-1099-nec" target="_blank" rel="noopener noreferrer">IRS Form 1099-NEC page</a> has the current instructions.</p>
<p>If you are the contractor, check that every client has your current legal name, address and tax ID. Compare the 1099s you receive in January with your own invoice records, and ask the client to correct any form that does not match.</p>
<p>Also review sales tax, VAT or GST. Make sure the tax on your invoices matches what you report on your final return of the year, and that you have issued corrected invoices or credit notes where tax was charged wrongly.</p>

<h2>Step 7: Archive records properly</h2>
<p>Export or download every invoice, credit note, receipt and payment record for the year. Store them in a folder structure such as Invoices / 2026 / Clients, and keep a backup in a second location. In the US, the IRS generally recommends keeping records that support your tax return for at least three years, and longer in some cases; many countries with VAT require six to ten years. See <a href="/blog/how-long-to-keep-invoices">how long to keep invoices</a> for a country-by-country summary.</p>
<p>If you use a browser-based generator, remember that drafts saved in your browser are not an archive. Clearing browser data removes them, so the PDFs you sent are your record.</p>

<h2>Common year-end invoicing mistakes</h2>
<ul>
<li><strong>Invoicing in the last week of December.</strong> AP teams are often closed. Send invoices by mid-December.</li>
<li><strong>Restarting invoice numbers without a prefix.</strong> This creates duplicates that confuse clients and auditors.</li>
<li><strong>Backdating invoices to shift income.</strong> Invoice dates must be real. Use the service period to show when work happened.</li>
<li><strong>Writing off debts without evidence.</strong> Keep emails, reminders and call notes that show you tried to collect.</li>
<li><strong>Forgetting reimbursable expenses.</strong> Small costs add up across a year.</li>
<li><strong>Leaving unapplied payments.</strong> A payment that is not matched to an invoice makes the client look overdue when they are not.</li>
<li><strong>Waiting until January for W-9s.</strong> Contractors are hard to reach over the holidays.</li>
<li><strong>Relying on browser storage as your only copy.</strong> Download and back up every PDF.</li>
</ul>

<h2>The complete year-end invoicing checklist</h2>
<ol>
<li>Ask each major client for their invoice cut-off date and holiday closure dates.</li>
<li>Review timesheets, milestones, expenses and change orders for unbilled work.</li>
<li>Send all December invoices by mid-December, with correct PO numbers.</li>
<li>Run the aging report and chase every overdue invoice.</li>
<li>Match all payments to invoices and resolve partial or duplicate payments.</li>
<li>Issue credit notes for errors, refunds and agreed discounts.</li>
<li>Document and write off truly uncollectible debts after checking with your accountant.</li>
<li>Confirm your accounting method and how it affects December invoices.</li>
<li>Decide and document your invoice numbering scheme for the new year.</li>
<li>Collect W-9s and prepare 1099-NEC forms for contractors paid $2,000 or more in 2026.</li>
<li>Reconcile sales tax, VAT or GST on invoices with your returns.</li>
<li>Prepare January retainer and recurring invoices in advance.</li>
<li>Export, organize and back up every invoice and receipt for the year.</li>
<li>Set aside money for your fourth-quarter estimated tax payment due January 15, 2027.</li>
</ol>
<p>Work through this year-end invoicing checklist once and save it; next year it will take half the time. For the last item, our guide to <a href="/blog/quarterly-estimated-taxes-freelancers">quarterly estimated taxes for freelancers</a> explains how to work out the amount. If your business has prepaid contracts, retainers or multi-month projects and follows accrual accounting, also read our guide to <a href="/blog/revenue-recognition-asc-606">ASC 606 revenue recognition</a>, which explains when billed and unbilled amounts count as revenue.</p>
`,
  },
  {
    slug: "embedded-finance-invoicing",
    title: "Embedded Finance in Invoicing: Payments, Financing and Risks",
    description:
      "Embedded finance in invoicing explained: built-in payments, invoice financing and FX inside billing software, what they cost, and the risks to check first.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "add-payment-link-to-invoice",
      "invoice-financing-vs-line-of-credit",
      "stripe-invoicing-guide",
    ],
    faqs: [
      {
        q: "What is embedded finance in simple terms?",
        a: 'Embedded finance means financial services such as payments, loans, currency exchange or insurance offered inside a non-financial product you already use. In invoicing, it is the "Pay now" button on an invoice, the offer to get paid early on an outstanding invoice, or the option to accept foreign currency, all provided by a licensed partner behind the software you use to bill clients.',
      },
      {
        q: "Who actually provides the money in embedded finance?",
        a: "Usually not the software company. The platform you see partners with a payment processor, a licensed lender, a bank or an e-money institution that holds the regulatory license and the funds. Your agreement may be with that partner as well as the software provider. Read the terms to find out who holds your money, who lends to you and who you complain to if something goes wrong.",
      },
      {
        q: "Is embedded invoice financing the same as factoring?",
        a: "Sometimes. Some embedded offers buy your invoice, which is factoring. Others lend you money against the invoice, which is invoice financing, and you remain responsible for collecting from the client. The fee may be shown as a flat percentage rather than an interest rate, so convert it to an annual rate to compare it with a bank line of credit or a traditional factor.",
      },
      {
        q: "Are embedded payment fees higher than a normal merchant account?",
        a: "Often they are similar or slightly higher, because the software provider may take a share of each transaction. Card fees of around 2.9% plus a fixed fee per transaction are common for small businesses, while bank-transfer options such as ACH are usually much cheaper. Compare the effective rate on your typical invoice size, not just the headline percentage.",
      },
      {
        q: "Is my money safe in an embedded finance account?",
        a: "It depends on the structure. Funds held at an insured bank may be eligible for deposit insurance, but only if the bank's records correctly show what belongs to you. In some fintech arrangements, money is held through intermediaries, and a failure can delay access to funds. Ask where balances are held, whether deposit insurance applies and how often money is swept to your own bank account.",
      },
      {
        q: "Does embedded finance help me get paid faster?",
        a: "It can. A payment link or card option removes friction for clients who would otherwise wait to set up a bank transfer, and embedded financing can turn an open invoice into cash within days. The trade-off is cost. Faster payment is worth most when you have a real cash need, such as payroll or a supplier deadline, rather than as a default setting on every invoice.",
      },
      {
        q: "Can I use embedded finance with a free invoice generator?",
        a: "Our generator creates a PDF invoice in your browser and does not process payments or offer financing. You can still add a payment link from a processor such as Stripe or PayPal into the invoice notes, or include your bank details. If you want built-in payments, tracking and financing, you will need invoicing or accounting software with those features.",
      },
      {
        q: "What should I check before accepting an embedded loan offer?",
        a: "Check the total cost in dollars and as an annual rate, the repayment method, whether repayments are taken automatically from your sales, any personal guarantee, what happens if your client pays late or not at all, and whether the offer affects existing loans. Pre-approved offers are convenient, but convenience is not the same as a good price.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Embedded finance in invoicing means payments, financing, currency exchange and similar services built directly into the software you use to bill clients, delivered by a licensed partner behind the scenes. It can get you paid faster with less admin, but fees, data sharing, lock-in and the stability of the partner behind the button are real risks to check.</p>

<p>Ten years ago, sending an invoice and collecting money were separate jobs. You created a document, emailed it, and waited for a bank transfer or a check. Today, much of that happens inside one product: the invoice carries a payment button, the software offers to advance cash on unpaid invoices, and a client abroad can pay in their own currency. That is embedded finance. This guide explains how it works in invoicing, what it costs, where the risks are, and how to decide which features are worth using for a small business.</p>

<h2>What is embedded finance?</h2>
<p>Embedded finance is the delivery of financial services inside a non-financial product. The ride-hailing app that charges your card without a checkout page is one example. In business software, it shows up in accounting tools, invoicing apps, marketplaces, point-of-sale systems and vertical software for trades such as construction or salons.</p>
<p>There are usually three layers:</p>
<ul>
<li><strong>The software platform</strong> you use every day, which designs the experience and owns the customer relationship.</li>
<li><strong>The infrastructure provider</strong>, such as a payment processor or banking-as-a-service (BaaS) company, which connects the software to regulated services through APIs.</li>
<li><strong>The licensed institution</strong>, such as a bank, lender or e-money institution, which holds the funds, carries the license and is responsible to regulators.</li>
</ul>
<p>From your side, it feels like one product. Legally, you may have agreements with two or three companies. That structure is the source of both the convenience and many of the risks.</p>

<h2>Types of embedded finance in invoicing</h2>
<table><thead><tr><th>Service</th><th>What you see</th><th>Who usually provides it</th><th>Main cost</th></tr></thead><tbody>
<tr><td>Embedded payments</td><td>"Pay now" button, card and bank payment options on the invoice</td><td>Payment processor</td><td>Per-transaction fee</td></tr>
<tr><td>Invoice financing</td><td>"Get paid now" offer on an unpaid invoice</td><td>Lender or factoring partner</td><td>Flat fee or interest, often per 30 days</td></tr>
<tr><td>Business loans and credit lines</td><td>Pre-approved offer based on your sales data</td><td>Lender or bank</td><td>Interest or a fixed fee, sometimes repaid from sales</td></tr>
<tr><td>B2B buy now, pay later</td><td>Your client pays in installments while you are paid upfront</td><td>BNPL provider</td><td>Fee charged to you, the client or both</td></tr>
<tr><td>Multi-currency and FX</td><td>Invoice and collect in foreign currencies</td><td>Payment or e-money institution</td><td>Exchange rate markup and conversion fees</td></tr>
<tr><td>Business accounts and cards</td><td>Balance and debit card inside the software</td><td>Bank via BaaS partner</td><td>Account fees, interchange shared with platform</td></tr>
<tr><td>Early payment programs</td><td>Your large customer offers to pay early at a discount</td><td>Buyer or funder via AP platform</td><td>Discount on the invoice</td></tr>
</tbody></table>

<h3>Embedded payments</h3>
<p>This is the most common form. The invoice email contains a link to a hosted page where the client pays by card, bank transfer or wallet. Payment status updates automatically and the money is matched to the invoice, which saves reconciliation time. If your current tool does not have this, you can still <a href="/blog/add-payment-link-to-invoice">add a payment link to an invoice</a> from a processor you already use. Our <a href="/blog/stripe-invoicing-guide">Stripe Invoicing guide</a> shows one of the most common setups.</p>

<h3>Embedded invoice financing</h3>
<p>Because the software can see your open invoices and your clients' payment history, it can offer to advance cash against them. Some offers are factoring, where the invoice is sold; others are loans secured on the invoice. Our guide to <a href="/blog/invoice-factoring">invoice factoring</a> explains the difference between recourse and non-recourse arrangements, which matters if your client never pays.</p>

<h3>Embedded early payment on the buyer's side</h3>
<p>When you sell to large companies, the financing may sit in their accounts payable system instead of yours. Their supplier portal may offer to pay your approved invoice early in exchange for a discount. Our explainer on <a href="/blog/dynamic-discounting">dynamic discounting</a> shows how to price those offers.</p>

<h2>Why financial services are moving into invoicing software</h2>
<p>Several forces push financial services into invoicing software:</p>
<ul>
<li><strong>Revenue for software companies.</strong> A share of payment fees or loan interest can be worth more than a subscription.</li>
<li><strong>Better data for lending.</strong> A platform that sees your invoices, payment history and client base can assess risk faster than a bank asking for financial statements.</li>
<li><strong>APIs and BaaS.</strong> Infrastructure companies let software firms add payments and accounts without becoming banks.</li>
<li><strong>Faster payment rails.</strong> Instant payments and request-for-payment messages make collecting directly from bank accounts quicker and cheaper.</li>
<li><strong>Demand from small businesses</strong> that would rather click a button than apply for a loan.</li>
</ul>
<p>We cover where these forces are heading in <a href="/blog/future-of-invoicing-trends-2027">the future of invoicing: 10 trends shaping 2027</a>.</p>

<h2>Worked example: what built-in payments and financing cost on one invoice</h2>
<p>Suppose you send a client a $2,400 invoice on net 30 terms. Here are three ways the money might arrive. The rates are illustrative; check your provider's current pricing.</p>
<h3>Option A: Client pays by card through the invoice link</h3>
<p>At 2.9% plus $0.30 per transaction: 2,400 × 0.029 = $69.60, plus $0.30 = <strong>$69.90</strong>. You receive 2,400 − 69.90 = $2,330.10. As a share of the invoice, 69.90 ÷ 2,400 = 2.91%.</p>
<h3>Option B: Client pays by bank debit (ACH) through the link</h3>
<p>At 0.8% capped at $5: 2,400 × 0.008 = $19.20, so the cap applies and the fee is <strong>$5.00</strong>. You receive $2,395.00, a fee of 5 ÷ 2,400 = 0.21%.</p>
<h3>Option C: You take an embedded advance on day 1, client pays by ACH on day 30</h3>
<p>Suppose the platform charges a flat 1.5% to advance the invoice for up to 30 days: 2,400 × 0.015 = $36.00, plus the $5.00 ACH fee = <strong>$41.00</strong>. Annualized, the advance alone costs about 1.5% × (365 ÷ 30) = 1.5% × 12.17 = 18.25% a year.</p>
<table><thead><tr><th>Option</th><th>Total cost</th><th>Cash received</th><th>When you have the cash</th></tr></thead><tbody>
<tr><td>A: Card</td><td>$69.90</td><td>$2,330.10</td><td>When the client pays, plus a payout delay of a few days</td></tr>
<tr><td>B: ACH</td><td>$5.00</td><td>$2,395.00</td><td>When the client pays, plus a few business days</td></tr>
<tr><td>C: Advance + ACH</td><td>$41.00</td><td>$2,359.00</td><td>Within days of invoicing</td></tr>
</tbody></table>
<p>Two lessons come out of the numbers. First, the payment method your client chooses can matter more than the financing decision: card costs about 14 times more than ACH in this example (69.90 ÷ 5 = 13.98). Second, an advance that looks small as a flat percentage can be expensive as an annual rate. Compare it with an overdraft or a <a href="/blog/invoice-financing-vs-line-of-credit">line of credit vs invoice financing</a> before you click. Where the law allows it, some businesses pass card fees to clients; check the <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> first.</p>

<h2>Benefits for small businesses</h2>
<ul>
<li><strong>Faster payment.</strong> Removing the step of logging into online banking makes it easier for clients to pay on the day they open the invoice.</li>
<li><strong>Automatic reconciliation.</strong> Payments are matched to invoices, which reduces bookkeeping work and errors.</li>
<li><strong>Access to working capital</strong> without a long bank application, which matters to businesses without years of financial statements.</li>
<li><strong>Better international collection</strong> through local payment methods and multi-currency balances.</li>
<li><strong>One place for data.</strong> Sales, receivables and cash sit in one system, which improves forecasting.</li>
</ul>

<h2>Risks of embedded finance</h2>
<h3>Hidden or blended pricing</h3>
<p>Fees may be shown as a flat percentage, rolled into an exchange rate or split between you and your client. The platform may earn a share of each fee, which is not wrong, but means the price may not be the cheapest available. Calculate the effective rate on your own invoices.</p>
<h3>Partner and counterparty risk</h3>
<p>When software, an intermediary and a bank all sit between you and your money, a failure at one link can freeze funds. The 2024 bankruptcy of the US banking-as-a-service intermediary Synapse left many end users of fintech apps unable to access their money for months while records were reconciled. Ask where balances are held, whether you are covered by deposit insurance, and how the provider's records identify your funds. The <a href="https://www.fdic.gov/resources/deposit-insurance" target="_blank" rel="noopener noreferrer">FDIC's deposit insurance resources</a> explain how coverage works and its limits for funds held through third parties.</p>
<h3>Lock-in</h3>
<p>If your payments, financing and bank balance all live in one platform, switching software becomes harder. Your payment links, saved client cards and loan repayments may all be tied to it.</p>
<h3>Automatic repayment from sales</h3>
<p>Some embedded loans are repaid by taking a fixed share of each incoming payment. That smooths repayments, but can squeeze cash in a busy month when you also need to pay suppliers.</p>
<h3>Data use</h3>
<p>Platforms use your invoice and payment data to price credit and market products. Read the privacy terms, especially if your clients' data is shared with lending partners.</p>
<h3>Disputes and chargebacks</h3>
<p>Card payments can be disputed by the client after you have been paid, and the processor can hold funds or reverse payments. Bank transfers are harder to reverse, but carry their own fraud risks.</p>

<h2>Common mistakes with built-in payments and financing</h2>
<ul>
<li><strong>Turning on every option by default.</strong> Offering card payment on large B2B invoices can cost hundreds of dollars a year that a bank transfer would avoid.</li>
<li><strong>Accepting pre-approved financing without annualizing the cost.</strong> A 3% fee for 30 days is roughly 36% a year.</li>
<li><strong>Keeping large balances in a platform wallet.</strong> Sweep money to your main business bank account regularly.</li>
<li><strong>Not reading who the lender is.</strong> Your contract may be with a partner you have never heard of.</li>
<li><strong>Ignoring existing loan covenants.</strong> Selling or pledging invoices can breach terms with your bank.</li>
<li><strong>Assuming a button means compliance.</strong> Embedded payments do not make an invoice a compliant e-invoice in mandate countries, and do not handle your tax obligations.</li>
</ul>

<h2>Checklist: evaluating a built-in finance feature</h2>
<ul>
<li>Who is the licensed provider, and where is it regulated?</li>
<li>What is the total cost per transaction or advance, and the effective annual rate?</li>
<li>Where are funds held, and does deposit insurance or safeguarding apply?</li>
<li>How quickly do payouts reach your own bank account?</li>
<li>Can clients still pay by plain bank transfer if they prefer?</li>
<li>What happens to a financed invoice if the client pays late, disputes it or never pays?</li>
<li>Are repayments automatic, and from which account?</li>
<li>Can you export invoices, payment records and client data if you leave?</li>
<li>Does using the feature conflict with any existing bank loan or factoring agreement?</li>
</ul>

<h2>Where a simple invoice generator fits</h2>
<p>Not every business needs embedded finance. If you send a handful of invoices a month to clients who pay by bank transfer, a clear invoice with accurate bank details and a payment link from your own processor may be all you need. The <a href="/invoice-generator">free invoice generator</a> builds the PDF in your browser, where you can add your bank details, payment terms and a payment link in the notes. It does not process payments, offer financing or track whether invoices are paid. When volume grows and reconciliation starts eating your week, compare an <a href="/blog/invoice-generator-vs-accounting-software">invoice generator vs accounting software</a> and choose a platform whose payment and financing terms you have actually read.</p>
`,
  },
  {
    slug: "future-of-invoicing-trends-2027",
    title: "The Future of Invoicing: 10 Trends Shaping 2027",
    description:
      "The future of invoicing in 2027: e-invoicing mandates, ViDA, AI agents, instant payments, stablecoins and more, with what each trend means for small businesses.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: ["e-invoicing-mandates-2027", "ai-invoicing-automation", "embedded-finance-invoicing"],
    faqs: [
      {
        q: "Will PDF invoices still be accepted in 2027?",
        a: "In many countries, yes, for most transactions. But in countries with B2B e-invoicing mandates, such as Germany for larger businesses from January 2027 and France as its reform phases in, a PDF on its own will no longer count as a valid invoice for in-scope domestic B2B sales. Check the rules where you and your customers are based before assuming a PDF is enough.",
      },
      {
        q: "What is the biggest invoicing trend for 2027?",
        a: "For most businesses selling in Europe, the Gulf or Asia, it is mandatory e-invoicing: structured invoice data sent through approved networks or government platforms instead of PDFs by email. For US businesses without foreign customers, the bigger changes are on the payment side, such as instant bank payments and automation, plus the higher 1099-NEC reporting threshold.",
      },
      {
        q: "Does the US have an e-invoicing mandate?",
        a: "No. As of late 2026 there is no federal B2B e-invoicing mandate in the United States. The Business Payments Coalition and the Federal Reserve have supported a voluntary e-invoice exchange framework, and many large buyers require suppliers to use their portals. US businesses selling to customers in mandate countries may still need to issue e-invoices to those customers.",
      },
      {
        q: "Will AI agents send and pay invoices without people?",
        a: "Partly. AI tools already extract data from invoices, match payments and draft reminders, and agent-style software can chain those steps together. In 2027, most businesses are likely to keep a human approval step for sending invoices to clients and for releasing payments, because of fraud risk and accountability. Expect more automation of routine steps rather than fully autonomous billing.",
      },
      {
        q: "Should small businesses accept stablecoin payments in 2027?",
        a: "Only if clients ask for it and you understand the trade-offs. Stablecoins such as USDC settle quickly at any hour and can be cheaper for cross-border payments, but transfers cannot be reversed, wallet addresses must be checked carefully, and you need records of the dollar value at receipt for tax. Most small businesses still get paid mainly by bank transfer and card.",
      },
      {
        q: "What is ViDA and when does it affect invoicing?",
        a: "ViDA, or VAT in the Digital Age, is the EU reform package adopted in 2025. It allows EU countries to require domestic e-invoicing without special permission and, from 1 July 2030, requires structured e-invoices and near real-time digital reporting for intra-EU B2B supplies. Several ViDA platform and registration rules start earlier, in 2027 and 2028.",
      },
      {
        q: "How can I prepare my small business for the future of invoicing?",
        a: "Start with clean basics: consistent invoice numbers, complete customer details including tax IDs, and accurate tax calculations. Then find out whether any customer or country you sell to requires e-invoices, add a faster payment method, and choose software that can export structured data. Most of the trends reward businesses whose invoice data is already accurate and consistent.",
      },
      {
        q: "Will invoice fraud get worse with AI?",
        a: "It is likely to get more convincing. Generative AI makes fake invoices and spoofed supplier emails easier to produce in good English with realistic logos. The defenses are process rather than technology alone: verify any change to bank details by phone using a number you already have, use payee-name checks where your bank offers them, and keep approval limits for payments.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> The future of invoicing is structured, connected and faster. In 2027 the biggest invoicing trends are mandatory e-invoicing in more countries, the EU's ViDA reform, AI agents in accounts receivable and payable, instant bank payments, stablecoin settlement, embedded finance, usage-based billing and stronger anti-fraud checks. PDFs remain common, but are no longer enough everywhere.</p>

<p>Invoicing used to change slowly. A business could use the same template and the same "pay by bank transfer within 30 days" line for a decade. That is no longer true. Tax authorities want invoice data in real time, payment networks settle in seconds, and software can now read, write and chase invoices with little human input. Understanding the future of invoicing now gives you time to adapt before deadlines arrive. This guide summarizes ten invoicing trends for 2027, explains who each one affects and what to do about it, and links to our deeper guides on each topic. It is written for freelancers and small businesses, not just finance teams at large companies.</p>

<h2>The 10 invoicing trends for 2027 at a glance</h2>
<table><thead><tr><th>#</th><th>Trend</th><th>Who it affects most</th><th>Timing</th><th>What to do now</th></tr></thead><tbody>
<tr><td>1</td><td>Mandatory B2B e-invoicing</td><td>Businesses selling in mandate countries</td><td>Germany, France, Spain and others in 2026-2027</td><td>Check each country you sell in</td></tr>
<tr><td>2</td><td>EU ViDA reform</td><td>EU VAT-registered businesses and platforms</td><td>2027-2030 in phases</td><td>Plan for structured invoices on cross-border sales</td></tr>
<tr><td>3</td><td>Real-time reporting and clearance</td><td>Businesses in clearance countries</td><td>Already live in many countries; expanding</td><td>Use certified software where required</td></tr>
<tr><td>4</td><td>AI agents in AR and AP</td><td>Anyone who sends or receives many invoices</td><td>Rolling out now</td><td>Automate routine steps, keep approvals</td></tr>
<tr><td>5</td><td>Touchless invoice processing</td><td>Suppliers to large buyers</td><td>Now</td><td>Send clean, machine-readable invoices</td></tr>
<tr><td>6</td><td>Instant payments and request for payment</td><td>US, UK, EU and many other markets</td><td>Now; adoption growing</td><td>Ask your bank about instant receiving</td></tr>
<tr><td>7</td><td>Stablecoin settlement</td><td>Cross-border and crypto-native clients</td><td>Early; US federal framework since 2025</td><td>Offer only if clients ask, with clear terms</td></tr>
<tr><td>8</td><td>Embedded finance</td><td>Users of invoicing and accounting platforms</td><td>Now</td><td>Compare fees before switching features on</td></tr>
<tr><td>9</td><td>Usage-based and hybrid billing</td><td>SaaS, API, utilities, agencies</td><td>Growing</td><td>Make metered charges easy to verify</td></tr>
<tr><td>10</td><td>Fraud controls and payee verification</td><td>Everyone who pays or gets paid</td><td>Now</td><td>Verify bank detail changes by phone</td></tr>
</tbody></table>

<h2>1. Mandatory B2B e-invoicing spreads</h2>
<p>The most important trend in the future of invoicing is that, in more and more countries, an invoice is legally a set of structured data rather than a document. Germany requires larger businesses (prior-year turnover above €800,000) to issue e-invoices for domestic B2B sales from 1 January 2027, after requiring all businesses to be able to receive them from 2025. France extends issuing obligations to small and medium businesses from 1 September 2027. Poland, Belgium, Croatia, Spain, the UAE, Saudi Arabia and others are adding or expanding requirements. Our <a href="/blog/e-invoicing-mandates-2027">e-invoicing mandates 2027 guide</a> lists the dates and thresholds.</p>
<p><strong>What it means for you:</strong> if you sell to businesses in a mandate country, your customers may reject a PDF. You will need software that produces formats such as XRechnung, ZUGFeRD, UBL or Peppol BIS, or that connects to the national platform.</p>

<h2>2. ViDA reshapes EU VAT invoicing</h2>
<p>The EU's VAT in the Digital Age package, adopted in 2025, lets member states introduce domestic e-invoicing without asking for special permission, and from 1 July 2030 requires structured e-invoices with near real-time digital reporting for intra-EU B2B transactions. Platform and single VAT registration changes start earlier, from 2027 and 2028. The <a href="https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en" target="_blank" rel="noopener noreferrer">European Commission's ViDA page</a> has the official overview, and our explainer on <a href="/blog/vida-vat-in-the-digital-age">ViDA (VAT in the Digital Age)</a> translates it for small businesses.</p>

<h2>3. Real-time reporting and clearance models</h2>
<p>Beyond simply exchanging e-invoices, many tax authorities now want to see or approve each invoice. In a clearance model, the invoice passes through a government platform before it is valid, as in Italy, Saudi Arabia and India's e-invoicing system for larger taxpayers. In a reporting model, invoices travel between businesses but data is reported to the authority at the same time. The global direction is toward more continuous transaction controls, which reduces VAT fraud and allows pre-filled tax returns. For businesses, it means invoice errors are visible to the tax authority immediately, not months later during an audit.</p>

<h2>4. AI agents in accounts receivable and payable</h2>
<p>AI has moved from "read this PDF" to multi-step workflows: drafting invoices from timesheets, sending them, predicting late payers, writing reminders and matching incoming payments. On the payables side, AI reads supplier invoices, codes them and flags anomalies. Our guide to <a href="/blog/ai-invoicing-automation">AI invoicing automation</a> explains what is reliable today and what still needs a person.</p>
<p>For small businesses, the useful version of this trend is modest: software that drafts invoices from your notes, suggests a reminder schedule based on each client's history, and matches payments to open invoices. The risky version is letting an agent send invoices, change terms or release payments without anyone checking. Keep a person in the loop for anything that leaves the business or moves money.</p>
<p><strong>What it means for you:</strong> expect your clients to process your invoices with software. Consistent layouts, clear invoice numbers and complete PO references make that software work in your favor.</p>

<h2>5. Touchless invoice processing becomes the norm for large buyers</h2>
<p>Large organizations are aiming for "touchless" accounts payable, where invoices are captured, matched against purchase orders and receipts, approved and scheduled for payment without manual keying. Invoices that fail automated checks fall into an exception queue, which is where payment delays happen. Read our guide to <a href="/blog/touchless-invoice-processing">touchless invoice processing</a> to see what buyers' systems look for, so your invoices avoid the exception queue.</p>

<h2>6. Instant payments and request for payment</h2>
<p>Instant payment networks settle bank-to-bank transfers in seconds, around the clock. In the US, RTP and FedNow both support request-for-payment messages, which let a business send a payment request that the payer approves in their banking app. In the EU, the Instant Payments Regulation requires banks to offer instant euro transfers at no more than the price of standard transfers, plus a payee-name verification service. Our comparison of <a href="/blog/fednow-vs-rtp-instant-payments">FedNow vs RTP instant payments</a> covers the US networks in detail.</p>
<h3>Worked example: what faster payment is worth</h3>
<p>Suppose your business invoices $40,000 a month, or $480,000 a year, and customers take an average of 45 days to pay. Your average daily sales are 480,000 ÷ 365 = $1,315.07. If instant payment links and request-for-payment cut that to 38 days, you collect 7 days sooner. The cash released is 1,315.07 × 7 = <strong>$9,205.48</strong>, a one-time increase in the cash you hold at any moment. At an 8% borrowing cost, that is worth about 9,205.48 × 0.08 = $736.44 a year in interest you do not pay. These figures are illustrative; plug in your own average days to pay.</p>

<h2>7. Stablecoin settlement for cross-border invoices</h2>
<p>Dollar-pegged stablecoins such as USDC are becoming a practical option for some cross-border invoices, especially with clients in markets where bank transfers are slow or expensive. In the US, the GENIUS Act, signed in July 2025, created a federal framework for payment stablecoin issuers, which has encouraged payment companies to add stablecoin settlement. Our guide to <a href="/blog/stablecoin-invoice-payments">stablecoin invoice payments</a> covers how to state the token, network and wallet on an invoice, and the tax record-keeping involved.</p>
<p><strong>What it means for you:</strong> keep invoicing in your normal currency, and treat stablecoins as one more payment method rather than a replacement for bank transfers. If you accept them, state on the invoice which token and network you accept, that the client pays any network fees, and that the invoice is only settled when the full amount arrives in your wallet. Record the dollar value on the day you receive the tokens, because that figure, not the face value of the invoice, is what your bookkeeping and tax records need. Most small businesses will find that the main advantage is speed for international clients, not cost.</p>

<h2>8. Embedded finance inside billing software</h2>
<p>Invoicing platforms increasingly offer payments, financing, currency accounts and even buy-now-pay-later for business customers, provided by licensed partners behind the scenes. That is convenient, but adds fees, data sharing and partner risk. Read <a href="/blog/embedded-finance-invoicing">embedded finance in invoicing</a> before switching every feature on.</p>

<h2>9. Usage-based and hybrid billing</h2>
<p>Software, AI and infrastructure companies increasingly charge for what customers use: API calls, compute hours, seats added mid-month or tokens processed. Agencies and consultants are also mixing retainers with variable fees. Usage-based billing puts pressure on invoices to show clear quantities, rates and periods, because clients cannot verify a single total. Our guide to the <a href="/blog/usage-based-billing-invoice">usage-based billing invoice</a> shows how to lay out metered charges.</p>

<h2>10. Fraud prevention and payee verification</h2>
<p>Invoice fraud, especially business email compromise where a criminal impersonates a real supplier and changes bank details, remains one of the most costly scams for businesses. Generative AI makes fake invoices and emails more convincing. Payee verification is the main countermeasure: the UK's Confirmation of Payee and the EU's Verification of Payee, mandatory for euro transfers since October 2025, check that the account name matches the payee before money moves. Internally, businesses are tightening duplicate checks and approval rules; see our guide to preventing <a href="/blog/duplicate-invoice-payments">duplicate invoice payments</a>.</p>

<h2>Common mistakes when preparing for invoicing trends</h2>
<ul>
<li><strong>Assuming a PDF is an e-invoice.</strong> A PDF emailed to a customer is not a structured e-invoice, even if it was made by software.</li>
<li><strong>Waiting for your customer to tell you.</strong> In mandate countries, the obligation to issue a compliant invoice usually sits with the seller.</li>
<li><strong>Buying "AI" without measuring.</strong> Track days to payment and time spent on billing before and after any new tool.</li>
<li><strong>Adding every payment method at once.</strong> Each one adds fees, reconciliation work and fraud exposure. Start with the methods your clients ask for.</li>
<li><strong>Ignoring data quality.</strong> E-invoicing, AI and automated matching all fail on missing tax IDs, inconsistent names and duplicate invoice numbers.</li>
<li><strong>Forgetting US reporting changes.</strong> For US businesses, the 1099-NEC threshold rose to $2,000 for payments made in 2026, which changes who receives a form in January 2027.</li>
</ul>

<h2>Checklist: getting ready for invoicing in 2027</h2>
<ul>
<li>List every country where you have business customers and check whether e-invoicing is mandatory there.</li>
<li>Collect and store customer legal names, addresses and tax IDs in one place.</li>
<li>Use a single, consistent invoice numbering sequence with no duplicates.</li>
<li>Ask your bank whether you can receive instant payments and use payee verification.</li>
<li>Add at least one fast, low-cost payment option, such as a bank payment link, to every invoice.</li>
<li>Set a rule that any change in supplier bank details is verified by phone.</li>
<li>Decide whether you need software that exports UBL, CII or Peppol formats.</li>
<li>Write down a review step for anything AI drafts or sends.</li>
<li>Measure your average days to payment so you can see whether changes work.</li>
</ul>

<h2>The future of invoicing: what will not change</h2>
<p>For all the technology, the fundamentals of a good invoice remain the same: the right legal entity, a unique invoice number, a clear description of what was supplied, correct tax, a due date and simple payment instructions. Every trend above rewards businesses that already get those right. If you sell mainly in countries without e-invoicing mandates, a well-designed PDF from the <a href="/invoice-generator">free invoice generator</a> is still a valid, professional way to bill. It runs in your browser and creates PDFs only, so when you need structured e-invoices, payments or tracking, pair it with or move to software built for those jobs.</p>
`,
  },
  {
    slug: "revenue-recognition-asc-606",
    title: "ASC 606 Revenue Recognition for Service Businesses (IFRS 15)",
    description:
      "ASC 606 revenue recognition for service businesses: the 5-step model, invoicing vs recognizing revenue, deferred and unbilled revenue, with retainer examples.",
    category: "business-finance",
    date: "2026-10-27",
    author: "Invoice Creator Editorial Team",
    related: [
      "deferred-revenue-vs-accrued-revenue",
      "cash-vs-accrual-accounting",
      "retainer-invoice",
      "deposit-invoice",
    ],
    faqs: [
      {
        q: "What is ASC 606 in simple terms?",
        a: "ASC 606 is the US accounting standard that says when and how much revenue a business should record from contracts with customers. The core idea is that you recognize revenue when you transfer the promised goods or services to the customer, in the amount you expect to be entitled to. IFRS 15 is the nearly identical international standard used in many other countries.",
      },
      {
        q: "Does ASC 606 apply to small businesses?",
        a: "ASC 606 applies to any entity that prepares financial statements under US GAAP, public or private. Many very small businesses do not prepare GAAP statements; they keep books on a cash or tax basis for their tax return, and ASC 606 does not govern those. If a lender, investor or buyer asks for GAAP financial statements, or you plan to raise money, ASC 606 becomes relevant.",
      },
      {
        q: "What are the five steps of ASC 606?",
        a: "The five steps are: identify the contract with the customer; identify the performance obligations, meaning the distinct promises in the contract; determine the transaction price; allocate the transaction price to each performance obligation; and recognize revenue when, or as, each performance obligation is satisfied. IFRS 15 uses the same five steps.",
      },
      {
        q: "Is an invoice the same as revenue?",
        a: "No. An invoice is a request for payment. Revenue is recognized when you perform the work. You can invoice before doing the work, for example a deposit or retainer, which creates deferred revenue. You can also do work before invoicing, which creates unbilled revenue. The two only line up when you invoice exactly as you deliver, such as monthly billing for hours worked that month.",
      },
      {
        q: "What is deferred revenue?",
        a: "Deferred revenue, called a contract liability under ASC 606 and IFRS 15, is money a customer has paid, or is unconditionally due to pay, before you have delivered the related service. It sits on the balance sheet as a liability because you still owe the work. As you perform, you move amounts from deferred revenue into revenue on the income statement.",
      },
      {
        q: "What is the difference between unbilled revenue and accounts receivable?",
        a: "Accounts receivable is an amount you have an unconditional right to be paid, usually because you have invoiced it and only the passage of time stands between you and payment. Unbilled revenue is work performed but not yet invoiced. If your right to bill depends on something other than time, such as completing a milestone, ASC 606 calls it a contract asset rather than a receivable.",
      },
      {
        q: "How do I recognize revenue on a monthly retainer?",
        a: "If the retainer gives the client access to your services throughout the month, you usually recognize it evenly over the period it covers. A $3,000 retainer for January is recognized as January revenue, even if it was invoiced and paid in December. If the retainer is really a prepayment for hours that are drawn down, you recognize revenue as the hours are used.",
      },
      {
        q: "Does ASC 606 change when I pay tax?",
        a: "Not directly. Tax rules decide when income is taxable, and they can differ from accounting rules. In the US, accrual-method taxpayers generally follow their financial statements for timing, with special rules for advance payments, while cash-method taxpayers are taxed when cash is received. Ask a tax adviser how your accounting method interacts with your tax return.",
      },
      {
        q: "Are ASC 606 and IFRS 15 the same?",
        a: "They were developed jointly and share the same five-step model, so the results are usually the same. There are some differences in detail, such as certain disclosures, practical expedients, how some licenses and collectibility thresholds are treated, and interim reporting requirements. A business reporting under both frameworks should check those differences with its auditor.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> ASC 606 revenue recognition says you record revenue when you transfer promised services to a customer, in the amount you expect to receive, not when you send an invoice or get paid. It uses a five-step model shared with IFRS 15. For service businesses, the key is separating invoicing from earning, which creates deferred revenue and unbilled revenue.</p>

<p>Most freelancers and small service firms think of revenue as the total of the invoices they send. That works on a cash basis, and for many small businesses it is all the tax return needs. But as soon as you prepare accrual or GAAP financial statements, take on investors, apply for a significant loan or sell retainers and prepaid packages, the question becomes "when did we actually earn this money?" This guide explains ASC 606 and IFRS 15 for service businesses in plain English, walks through the five steps, and works through retainer, deposit, milestone and bundled-service examples with the numbers shown. It is an educational overview, not accounting advice; your accountant or auditor makes the final call.</p>

<h2>What are ASC 606 and IFRS 15?</h2>
<p>ASC 606, "Revenue from Contracts with Customers," is the US GAAP standard issued by the <a href="https://www.fasb.org/" target="_blank" rel="noopener noreferrer">Financial Accounting Standards Board (FASB)</a>. IFRS 15, with the same title, is the international equivalent issued by the <a href="https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/" target="_blank" rel="noopener noreferrer">IFRS Foundation's International Accounting Standards Board</a>. The two boards developed them jointly, and they replaced a patchwork of industry-specific rules with one principle-based model. Public companies adopted them from 2018, and private US companies followed a year or two later.</p>
<p>The core principle: recognize revenue to depict the transfer of promised goods or services to customers in an amount that reflects the consideration you expect to be entitled to in exchange. In short, revenue follows performance, not paperwork.</p>
<p>The standard applies to financial statements prepared under US GAAP. It does not decide your tax timing and does not apply to books kept purely on a cash or tax basis. If you are not sure which method you use, start with our guide to <a href="/blog/cash-vs-accrual-accounting">cash vs accrual accounting</a>.</p>

<h2>The five-step model of ASC 606 revenue recognition</h2>
<ol>
<li><strong>Identify the contract with the customer.</strong> A contract exists when both parties have approved it, rights and payment terms can be identified, it has commercial substance, and collection is probable. It can be written, verbal or implied by your normal business practice. A signed proposal or accepted statement of work usually qualifies.</li>
<li><strong>Identify the performance obligations.</strong> List each distinct promise in the contract. A website build, three months of hosting support and a training session may be three performance obligations, or one, depending on whether the customer can benefit from each separately and whether they are separately identifiable in the contract.</li>
<li><strong>Determine the transaction price.</strong> This is the amount you expect to receive, including variable elements such as bonuses, discounts, refunds or usage-based fees, estimated and constrained so that a significant reversal is unlikely. It excludes sales tax collected for the government.</li>
<li><strong>Allocate the transaction price.</strong> If there is more than one performance obligation, split the price based on the standalone selling price of each, meaning what you would charge for it on its own.</li>
<li><strong>Recognize revenue when, or as, each obligation is satisfied.</strong> Some obligations are satisfied at a point in time, such as delivering a finished report. Many services are satisfied over time, such as ongoing support, and revenue is recognized as you perform.</li>
</ol>
<h3>Over time or at a point in time?</h3>
<p>A service is recognized over time if any one of three tests is met: the customer receives and consumes the benefit as you perform (routine cleaning, bookkeeping, support); your work creates or enhances an asset the customer controls (building on the client's site); or your work has no alternative use to you and you have an enforceable right to payment for work completed to date (a custom report with progress-payment rights). Otherwise, revenue is recognized at the point when control transfers, typically on delivery or acceptance.</p>

<h2>Invoicing vs recognizing revenue</h2>
<p>Invoicing and revenue recognition answer different questions. An invoice asks for money; revenue recognition measures what you have earned. Three accounts on the balance sheet capture the gap between them.</p>
<table><thead><tr><th>Situation</th><th>ASC 606 / IFRS 15 term</th><th>Common name</th><th>Balance sheet</th></tr></thead><tbody>
<tr><td>Invoiced or paid before the work is done</td><td>Contract liability</td><td>Deferred revenue, unearned revenue</td><td>Liability</td></tr>
<tr><td>Work done, not yet invoiced, right to bill depends on something other than time</td><td>Contract asset</td><td>Unbilled revenue, work in progress</td><td>Asset</td></tr>
<tr><td>Work done and right to payment is unconditional (usually invoiced)</td><td>Receivable</td><td>Accounts receivable</td><td>Asset</td></tr>
</tbody></table>
<p>Unbilled amounts can be receivables rather than contract assets if only the passage of time stands between you and payment, for example hours worked this month that you will invoice on the 1st under a time-and-materials contract. The distinction affects presentation; the key practical point is that the work is revenue now even though no invoice has gone out.</p>

<h2>Worked examples for service businesses</h2>
<h3>Example 1: A quarterly retainer invoiced in advance</h3>
<p>A marketing consultant invoices a client $9,000 on December 15 for a January-to-March retainer that gives the client access to strategy support throughout the quarter. The client pays on December 30. The full process for billing this way is in our guide to the <a href="/blog/retainer-invoice">retainer invoice</a>.</p>
<ul>
<li><strong>December 15:</strong> invoice sent, no work performed. Revenue: $0. (Depending on the payment terms, some businesses record a receivable and matching deferred revenue at this point; either way, no revenue.)</li>
<li><strong>December 30:</strong> cash $9,000 received; deferred revenue $9,000. Revenue in December: $0.</li>
<li><strong>January 31, February 28, March 31:</strong> recognize 9,000 ÷ 3 = $3,000 each month, moving it from deferred revenue to revenue.</li>
</ul>
<p>On the cash basis, all $9,000 would show as December income. Under ASC 606, none of it does.</p>

<h3>Example 2: A 50% deposit on a website project</h3>
<p>A web studio agrees a $20,000 website project, invoices a 50% <a href="/blog/deposit-invoice">deposit invoice</a> for $10,000, and receives it in March. The site is custom, has no alternative use, and the contract gives the studio an enforceable right to payment for work completed, so revenue is recognized over time based on progress, measured by hours.</p>
<table><thead><tr><th>Month</th><th>Hours worked (of 200 budgeted)</th><th>Cumulative % complete</th><th>Cumulative revenue</th><th>Revenue this month</th><th>Cumulative billed</th><th>Balance sheet position</th></tr></thead><tbody>
<tr><td>March</td><td>40</td><td>40 ÷ 200 = 20%</td><td>20% × 20,000 = $4,000</td><td>$4,000</td><td>$10,000</td><td>Deferred revenue $6,000</td></tr>
<tr><td>April</td><td>90</td><td>130 ÷ 200 = 65%</td><td>65% × 20,000 = $13,000</td><td>$9,000</td><td>$10,000</td><td>Contract asset $3,000</td></tr>
<tr><td>May</td><td>70</td><td>200 ÷ 200 = 100%</td><td>$20,000</td><td>$7,000</td><td>$20,000 (final invoice)</td><td>Receivable until paid</td></tr>
</tbody></table>
<p>Check: 4,000 + 9,000 + 7,000 = $20,000 total revenue, equal to the contract price. In March the studio had billed more than it earned (10,000 − 4,000 = $6,000 deferred). In April it had earned more than it billed (13,000 − 10,000 = $3,000 contract asset), because the final invoice was only due on launch. If the contract did not give a right to payment for work in progress, revenue might instead be recognized when the site is delivered.</p>

<h3>Example 3: A bundle with two performance obligations</h3>
<p>An IT consultant sells a package for $12,000: system setup plus 12 months of support. On their own, the consultant would charge $4,000 for setup and $10,000 for a year of support, so the standalone selling prices total $14,000 and the package includes a $2,000 discount. Under step 4, the discount is spread across both obligations in proportion to standalone prices:</p>
<ul>
<li>Setup: 12,000 × (4,000 ÷ 14,000) = 12,000 × 0.2857 = <strong>$3,428.57</strong>, recognized when setup is complete.</li>
<li>Support: 12,000 × (10,000 ÷ 14,000) = 12,000 × 0.7143 = <strong>$8,571.43</strong>, recognized over 12 months at 8,571.43 ÷ 12 = <strong>$714.29</strong> a month.</li>
</ul>
<p>Even if the consultant invoices $6,000 at setup and $500 a month afterward, revenue follows the allocation, not the invoice amounts.</p>

<h3>Example 4: Hourly and time-and-materials work</h3>
<p>For simple hourly billing, ASC 606 includes a practical expedient: if your right to payment corresponds directly with the value of the work performed to date, you can recognize revenue in the amount you have the right to invoice. A consultant who bills $150 an hour and works 30 hours in June recognizes 30 × 150 = $4,500 of June revenue, whether the invoice goes out on June 30 or July 1. This is why many hourly service businesses see little practical change from the standard.</p>

<h3>Example 5: Milestone billing</h3>
<p>Milestone invoices often do not match the pattern of work. If milestone 1 is billed at 30% of the fee but represents 50% of the effort, revenue may run ahead of billing and create a contract asset. Our guide to <a href="/blog/milestone-payments">milestone payments</a> covers how to structure milestones so billing tracks progress more closely, which also helps cash flow.</p>

<h2>How the standard changes the way you write invoices and contracts</h2>
<p>The standard is about accounting, but the clearer your contracts and invoices, the easier it is to apply. Practical habits that help:</p>
<ul>
<li>State the service period on every invoice, for example "Retainer: January 1-31, 2027," so the deferral period is obvious.</li>
<li>List distinct services as separate line items with their own prices, which helps with step 2 and step 4.</li>
<li>Label prepayments clearly as deposits, retainers or advance billings.</li>
<li>Show discounts as a separate line rather than hiding them in rates.</li>
<li>Keep contracts, change orders and acceptance emails together with invoices so the contract terms are easy to evidence.</li>
</ul>
<p>The <a href="/invoice-generator">free invoice generator</a> lets you add a service period in the description, separate line items and discounts, and download a clear PDF in your browser. It does not keep a ledger or calculate deferred revenue; that happens in your accounting software or spreadsheet.</p>

<h2>Common revenue recognition mistakes in service businesses</h2>
<ul>
<li><strong>Recognizing retainers when invoiced.</strong> An advance retainer is deferred revenue until the period it covers.</li>
<li><strong>Treating deposits as earned.</strong> A non-refundable deposit is still usually deferred until you perform, unless it pays for a distinct service already delivered.</li>
<li><strong>Ignoring unbilled work at period-end.</strong> Work done in the last week of the month is revenue in that month under accrual accounting, even if invoiced later.</li>
<li><strong>Not allocating bundle discounts.</strong> Putting the whole discount on one service distorts revenue timing.</li>
<li><strong>Including sales tax in revenue.</strong> Tax collected for a government is a liability, not part of the transaction price. Use a <a href="/tools/sales-tax-calculator">sales tax calculator</a> to separate it on invoices.</li>
<li><strong>Forgetting variable consideration.</strong> Performance bonuses, rebates and refund rights must be estimated and constrained, not ignored until they happen.</li>
<li><strong>Assuming the tax return follows the books.</strong> Tax timing has its own rules; check with your adviser.</li>
</ul>

<h2>ASC 606 checklist for service businesses</h2>
<ul>
<li>Confirm whether you need GAAP or IFRS financial statements, and for whom.</li>
<li>For each contract type, write down the performance obligations and how each is satisfied (over time or at a point in time).</li>
<li>Set a standalone selling price for each service you sell in bundles.</li>
<li>Choose a progress measure for over-time services, such as hours, costs or milestones achieved, and apply it consistently.</li>
<li>Set up deferred revenue, contract asset and receivable accounts in your books.</li>
<li>At every month-end, review prepayments, unbilled work and open contracts.</li>
<li>Estimate variable consideration and document your reasoning.</li>
<li>Show service periods and separate line items on every invoice.</li>
<li>Reconcile deferred revenue balances to contract schedules each quarter.</li>
</ul>
<p>Revenue recognition is one of the jobs that matters most at the end of the year, when unbilled work and prepaid retainers straddle two periods. Pair this guide with our <a href="/blog/year-end-invoicing-checklist">year-end invoicing checklist</a> to close your books cleanly.</p>
`,
  },
];
