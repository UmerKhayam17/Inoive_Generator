import type { PostDraft } from "../blog";

export const PAYMENTS_2026_H_POSTS: PostDraft[] = [
  {
    slug: "credit-card-processing-fees",
    title: "Credit Card Processing Fees: Interchange and Average Rates",
    description:
      "Credit card processing fees explained: interchange, network fees and processor markups, average 2026 rates by provider, and a worked invoice example.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "pci-compliance-small-business",
      "merchant-account-vs-payment-processor",
      "stripe-fees",
      "credit-card-surcharge-rules",
      "how-to-accept-credit-card-payments",
    ],
    faqs: [
      {
        q: "What is the average credit card processing fee for a small business?",
        a: "Most small businesses on flat-rate processors pay roughly 2.5% to 3.5% per card payment as of 2026, plus a fixed fee of up to about 30 cents. Published rates include 2.9% + 30¢ at Stripe, 2.99% for QuickBooks invoice payments and 3.3% + 30¢ for Square invoices on the free plan. Your true average, called the effective rate, depends on card mix, how cards are entered and whether you pay monthly fees.",
      },
      {
        q: "What is interchange and who sets it?",
        a: "Interchange is the fee the merchant's bank pays the cardholder's bank on each card transaction. Card networks such as Visa and Mastercard set the interchange schedules, and issuing banks receive the money. It is usually the largest part of a processing fee. Visa's own schedule notes that merchants do not pay interchange directly; they pay a merchant discount to their processor, which bundles interchange with network fees and the processor's margin.",
      },
      {
        q: "Why are business and rewards credit cards more expensive to accept?",
        a: "Premium consumer cards and commercial cards carry higher interchange rates, which fund the rewards and benefits cardholders receive. In Visa's October 2026 schedule, for example, commercial card-not-present transactions sit at 2.70% + $0.10 in interchange alone, before network and processor fees. On a flat-rate plan you do not see this difference, but on interchange-plus pricing it shows up directly on your statement.",
      },
      {
        q: "Are debit card fees lower than credit card fees?",
        a: "Usually, yes. In the US, debit cards from large issuers are regulated, and Visa's 2026 schedule lists regulated debit at 0.05% + $0.21 per transaction, with a small fraud-prevention adjustment possible. Debit cards from smaller exempt banks cost more but still less than most credit cards. Flat-rate processors charge the same rate for debit and credit, so only interchange-plus customers capture the debit saving.",
      },
      {
        q: "What is the difference between flat-rate and interchange-plus pricing?",
        a: "Flat-rate pricing charges one blended rate, such as 2.9% + 30¢, regardless of card type. It is simple and predictable. Interchange-plus passes through the actual interchange and network fees, then adds a fixed processor markup, such as 0.25% + 10¢. It is more transparent and often cheaper above a certain monthly volume, but statements are longer and costs vary from one transaction to the next.",
      },
      {
        q: "How do I calculate my effective credit card processing rate?",
        a: "Add up every processing-related charge on a monthly statement, including per-transaction fees, monthly fees, PCI fees and chargeback fees. Divide that total by the card volume processed in the same month and multiply by 100. If you paid $1,398 in fees on $48,000 of card sales, your effective rate is 2.91%. Track it for three months to smooth out seasonal swings before switching providers.",
      },
      {
        q: "Can I pass credit card processing fees on to customers?",
        a: "In many US states you can add a surcharge on credit cards, subject to card network rules, caps and disclosure requirements, and a few states restrict it. Debit cards cannot be surcharged under network rules. A safer alternative is offering a discount for ACH or bank transfer payments. Check current rules in our credit card surcharge guide before adding any fee line to an invoice.",
      },
      {
        q: "Why are invoice card payments more expensive than in-person payments?",
        a: "Invoice payments are card-not-present transactions, which carry more fraud risk, so interchange and flat rates are higher. QuickBooks, for example, lists 2.5% for swiped payments but 2.99% for invoice card payments as of September 2026. Keyed-in payments are higher still at 3.5%. Letting the customer enter their own card on a secure payment page is cheaper than typing their card details yourself.",
      },
      {
        q: "What is the cheapest way to get paid on a large invoice?",
        a: "For large invoices, bank payments almost always beat cards. ACH through Stripe costs 0.8% capped at $5, and QuickBooks lists ACH at 1%. A domestic wire has a flat receiving fee at most banks or none at all. On a $10,000 invoice, a 2.9% card fee is $290, so steering big clients to ACH or wire can save hundreds per invoice.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Credit card processing fees for small businesses typically run about 2.5% to 3.5% per transaction as of 2026, plus a fixed fee of up to 30 cents. Each fee combines three parts: interchange paid to the card-issuing bank, a network assessment for Visa or Mastercard, and the processor's markup. Interchange is the biggest piece, and it varies by card type.</p>

<p>If you send invoices and accept cards, these fees come straight out of your revenue. This guide breaks down how credit card processing fees are built, what interchange actually costs according to the card networks' own schedules, average rates by provider, and how to lower your effective rate. If you just need a professional invoice with a clear payment section, our <a href="/invoice-generator">free invoice generator</a> lets you list card, ACH and bank details in a few minutes.</p>

<p>We cover individual providers in detail elsewhere, so this page stays focused on the big picture. For provider breakdowns, see <a href="/blog/stripe-fees">Stripe fees</a>, <a href="/blog/paypal-fees">PayPal fees</a> and <a href="/blog/square-invoice-fees">Square invoice fees</a>.</p>

<h2>What Makes Up Credit Card Processing Fees</h2>

<p>Every card payment passes through several parties, and each takes a slice. Understanding the slices is the first step to paying less.</p>

<ul>
<li><strong>Interchange:</strong> paid by your processor's bank (the acquirer) to the customer's bank (the issuer). Card networks publish the rates, and they depend on card type, how the card was accepted, the merchant category and sometimes the transaction size.</li>
<li><strong>Network assessments:</strong> smaller fees Visa, Mastercard, Discover and American Express charge for using their networks. These are usually a fraction of a percent.</li>
<li><strong>Processor markup:</strong> what your payment processor or merchant services provider keeps for running the service, handling risk, providing software and paying out funds.</li>
</ul>

<p>Visa states this plainly in its published schedule: merchants do not pay interchange themselves; they pay a "merchant discount" to their financial institution, which bundles interchange with everything else. Whether you see those parts separately depends on your pricing model, which we cover below. For the structural difference between a dedicated merchant account and an all-in-one processor, read <a href="/blog/merchant-account-vs-payment-processor">merchant account vs payment processor</a>.</p>

<h3>Other fees that raise your real cost</h3>

<p>Per-transaction charges are only part of the bill. Watch for monthly account fees, PCI compliance fees, statement fees, chargeback fees, instant payout fees and early termination fees on long contracts. A provider with a slightly lower percentage can cost more overall once these are added.</p>

<h2>Interchange Rates in 2026: What the Networks Publish</h2>

<p>Visa publishes its US interchange reimbursement fees in a public document. The edition with rates effective October 24, 2026 shows how widely interchange varies. The table below pulls a few representative lines; all are interchange only, before network and processor fees.</p>

<table>
<thead>
<tr><th>Visa transaction type (US)</th><th>Interchange as of Oct 2026</th></tr>
</thead>
<tbody>
<tr><td>Regulated debit (large issuers), any channel</td><td>0.05% + $0.21</td></tr>
<tr><td>Exempt debit, CPS/Retail (card present)</td><td>0.80% + $0.15</td></tr>
<tr><td>Exempt debit, CPS/Card Not Present</td><td>1.65% + $0.15</td></tr>
<tr><td>Consumer credit, most qualified programs</td><td>roughly 1.2% to 2.7% plus 5 to 10 cents</td></tr>
<tr><td>Commercial card, card not present</td><td>2.70% + $0.10</td></tr>
<tr><td>Non-qualified consumer credit</td><td>3.15% + $0.10</td></tr>
</tbody>
</table>

<p>You can check the full schedule in <a href="https://usa.visa.com/content/dam/VCOM/download/merchants/visa-usa-interchange-reimbursement-fees.pdf" target="_blank" rel="noopener noreferrer">Visa's USA interchange reimbursement fees</a>. Mastercard publishes a comparable US schedule with its own program names. The pattern is the same across networks: debit is cheapest, premium rewards and commercial cards are most expensive, and transactions that fail to qualify for a lower program fall into a costly non-qualified rate.</p>

<h3>Why card-not-present costs more</h3>

<p>When a customer pays an invoice online, the card is not physically present, so fraud risk is higher and interchange rises. The same exempt debit card that costs 0.80% + $0.15 at a till costs 1.65% + $0.15 online in Visa's schedule. That is why invoice payments almost always carry a higher rate than in-person taps.</p>

<h2>Average Credit Card Processing Rates by Provider</h2>

<p>Most small businesses use flat-rate processors, which hide interchange inside one blended price. Here are published US rates for invoice or online card payments as of 2026.</p>

<table>
<thead>
<tr><th>Provider</th><th>Invoice or online card rate</th><th>Bank (ACH) alternative</th></tr>
</thead>
<tbody>
<tr><td>Stripe</td><td>2.9% + 30¢ (plus 0.4% for Stripe Invoicing Starter)</td><td>0.8%, capped at $5</td></tr>
<tr><td>Square (Free plan)</td><td>3.3% + 30¢ on invoices</td><td>1%, $1 minimum</td></tr>
<tr><td>PayPal</td><td>2.99% + $0.49 standard card; 3.49% + $0.49 PayPal Checkout</td><td>1%, capped at $10</td></tr>
<tr><td>QuickBooks Payments</td><td>2.99% on invoices</td><td>1%</td></tr>
<tr><td>Cash App for Business</td><td>2.75% per payment received</td><td>Not offered</td></tr>
</tbody>
</table>

<p>Rates change, and each provider adds conditions for international cards, currency conversion and instant payouts. Our deeper guides cover <a href="/blog/quickbooks-payments-fees">QuickBooks Payments fees</a> and <a href="/blog/cash-app-business-fees">Cash App business fees</a>, and our Stripe vs Square comparison covers the two most common choices side by side.</p>

<h2>Pricing Models: Flat Rate, Interchange-Plus and Tiered</h2>

<p>How a provider prices its service matters as much as the headline number.</p>

<h3>Flat-rate pricing</h3>
<p>One rate for every card, such as 2.9% + 30¢. It is easy to forecast and ideal for low volume. The drawback: you pay the same on a cheap regulated debit card as on an expensive rewards card, so the processor keeps the difference on low-cost cards.</p>

<h3>Interchange-plus pricing</h3>
<p>The provider passes through actual interchange and network fees, then adds a fixed markup, for example 0.25% + 10¢. You benefit fully from cheap debit cards, and you can see exactly what the processor earns. This model usually becomes worthwhile once card volume reaches the tens of thousands of dollars a month, but the break-even point depends on your card mix.</p>

<h3>Tiered pricing</h3>
<p>Transactions are sorted into qualified, mid-qualified and non-qualified buckets, each with its own rate. The provider decides which bucket a transaction lands in, so tiered pricing is the least transparent. If your statement shows tiers, ask for interchange-plus instead.</p>

<h3>Subscription or membership pricing</h3>
<p>You pay a monthly fee and then interchange plus a small per-transaction charge. It can be cheap at high volume and expensive at low volume, so model your real numbers before signing.</p>

<h2>Worked Example: A $2,400 Invoice Paid by Card</h2>

<p>Suppose a consultant invoices $2,400 and the client pays online by card. Here is how the cost changes with the provider and the card.</p>

<ul>
<li><strong>Flat rate 2.9% + 30¢:</strong> $2,400 × 2.9% = $69.60, plus $0.30 = <strong>$69.90</strong>. You receive $2,330.10.</li>
<li><strong>QuickBooks invoice rate 2.99%:</strong> $2,400 × 2.99% = <strong>$71.76</strong>. You receive $2,328.24.</li>
<li><strong>Square invoice 3.3% + 30¢:</strong> $2,400 × 3.3% = $79.20, plus $0.30 = <strong>$79.50</strong>. You receive $2,320.50.</li>
</ul>

<p>Now take interchange-plus pricing. For illustration, assume a consumer credit card with interchange of 1.80% + $0.10, network fees of 0.15%, and a processor markup of 0.25% + $0.10:</p>

<ol>
<li>Interchange: $2,400 × 1.80% = $43.20, plus $0.10 = $43.30.</li>
<li>Network fees: $2,400 × 0.15% = $3.60.</li>
<li>Processor markup: $2,400 × 0.25% = $6.00, plus $0.10 = $6.10.</li>
<li>Total: $43.30 + $3.60 + $6.10 = <strong>$53.00</strong>, an effective rate of 2.21%.</li>
</ol>

<p>If the same client pays with a commercial card, interchange jumps to 2.70% + $0.10 = $64.90. Add the same $3.60 and $6.10 and the total becomes <strong>$74.60</strong>, or 3.11%. That is the hidden reason B2B invoices can cost more to process than consumer sales.</p>

<p>Finally, compare a bank payment. Through QuickBooks at 1%, the fee is $24.00. Through Stripe ACH at 0.8% capped at $5, the fee is just $5.00. On one invoice the gap to flat-rate card is $64.90; on 20 invoices a month it is about $1,298.</p>

<p>To show the client the exact total, you can build the invoice in our <a href="/invoice-generator/usa">US invoice generator</a> and add any applicable sales tax with the <a href="/tools/sales-tax-calculator">sales tax calculator</a>.</p>

<h2>How to Calculate Your Effective Rate</h2>

<p>Your effective rate is the single number that tells you what card acceptance really costs. To calculate it:</p>

<ol>
<li>Take one full monthly statement from your processor.</li>
<li>Add every fee: per-transaction charges, monthly fees, PCI fees, chargeback fees and payout fees.</li>
<li>Find total card volume processed in the same month.</li>
<li>Divide total fees by total volume and multiply by 100.</li>
<li>Repeat for three months and average the results.</li>
</ol>

<p>Example: $1,398 in fees on $48,000 of card sales gives an effective rate of 2.91%. If a competing quote would lower it to 2.4%, you would save about $246 a month ($1,398 minus $1,152). Reconcile those fees against deposits each month; our guide to bank reconciliation shows how.</p>

<h2>How to Read a Card Processing Statement</h2>

<p>Statements are where processors hide costs, so it pays to know what you are looking at. The layout differs by provider, but most statements contain the same building blocks.</p>

<h3>Summary section</h3>
<p>This shows total card volume, number of transactions, total fees and net deposits for the month. It is enough to calculate your effective rate, but not to see why it moved.</p>

<h3>Transaction or interchange detail</h3>
<p>On interchange-plus plans, each card type and interchange program is listed with its rate and count. Look for transactions falling into "non-qualified" or "standard" programs. In Visa's 2026 schedule, non-qualified consumer credit costs 3.15% + $0.10 compared with well under 2% for many qualified programs, so a cluster of non-qualified lines usually signals a fixable problem, such as missing address verification on online payments or settling batches late.</p>

<h3>Monthly and one-off fees</h3>
<p>Check the account-level lines: monthly service fees, PCI compliance or non-compliance fees, statement fees, gateway fees and chargeback fees. A PCI non-compliance fee, for example, disappears once you complete the annual questionnaire, yet many small businesses pay it for years.</p>

<h3>Questions to ask your provider</h3>
<ul>
<li>Which pricing model am I on, and what exactly is your markup?</li>
<li>Why did my effective rate change from last month?</li>
<li>Which transactions downgraded to a higher rate, and why?</li>
<li>Is there an early termination fee if I switch?</li>
</ul>

<p>Ask in writing and keep the answers. If the provider cannot explain a line, that is a good reason to collect competing quotes.</p>

<h2>How to Lower Credit Card Processing Fees</h2>

<ol>
<li><strong>Offer bank payment on large invoices.</strong> ACH and wires cost a fraction of card fees. See <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a>.</li>
<li><strong>Avoid keying cards yourself.</strong> Keyed entry often costs more, as with QuickBooks at 3.5% versus 2.99% for invoice payments. Send a payment link instead; our guide on <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a> walks through it.</li>
<li><strong>Pass Level 2 and Level 3 data for B2B sales.</strong> Including tax amounts, PO numbers and line-item detail can qualify commercial cards for lower interchange on processors that support it.</li>
<li><strong>Ask for interchange-plus at higher volume.</strong> Once monthly card volume is substantial, request a quote and compare it to your effective rate.</li>
<li><strong>Consider a surcharge or cash discount.</strong> Many states allow credit card surcharges within limits. Read <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> before adding one.</li>
<li><strong>Reduce chargebacks.</strong> Clear descriptions and receipts prevent disputes and their fees. Our guide to <a href="/blog/how-to-handle-chargebacks">handling chargebacks</a> covers prevention.</li>
<li><strong>Use an early payment discount carefully.</strong> A discount for fast bank payment can cost less than card fees; see early payment discounts.</li>
</ol>

<h3>Should You Pass Credit Card Fees to Customers?</h3>

<p>There are three common approaches. You can absorb the fee and build it into your prices, which keeps invoices simple. You can add a credit card surcharge where state law and network rules allow, which shifts the cost but may annoy some clients. Or you can offer a small discount for ACH or bank transfer, which is allowed broadly and nudges clients to the cheapest option.</p>

<p>Whichever you pick, put it in writing. State accepted payment methods and any surcharge or discount in your invoice payment terms, and show it clearly on each invoice. Our generator supports a fixed or percentage discount line, which makes a bank payment discount easy to display.</p>

<p>One more option suits freelancers who bill a few large invoices: accept cards but set a payment method preference by invoice size. For example, offer card payment on invoices under $1,000 and bank transfer only above that. On a $5,000 invoice, a 2.9% + 30¢ card fee is $145.30, while Stripe ACH would cost $5.00, so a simple size rule protects most of the margin without turning small clients away.</p>

<h2>Choosing a Processor for Invoice Payments</h2>

<p>For most freelancers and small businesses, a flat-rate provider with low monthly costs is the right start. Prioritise these points:</p>

<ul>
<li>Invoice card rate and ACH rate, not just the in-person rate.</li>
<li>Payout speed and the cost of instant deposits.</li>
<li>Chargeback fees and dispute tools.</li>
<li>Support for international cards and currency conversion if you bill abroad.</li>
<li>How easily payments match to invoices in your bookkeeping.</li>
</ul>

<p>If you are still deciding how clients should pay you at all, our guide to the <a href="/blog/best-payment-methods-for-small-business">best payment methods for small business</a> compares cards, ACH, wires and wallets on cost and speed.</p>

<h2>Create an Invoice That Gets Paid for Less</h2>

<p>Credit card processing fees are unavoidable if you accept cards, but you control how much of your revenue they take. Know your effective rate, steer large invoices to bank payment, and make card payment easy without keying cards yourself. Create a clean invoice that lists every payment option with our <a href="/invoice-generator">free invoice generator</a>, or start from one of our <a href="/invoice-templates">professional invoice templates</a>. It is free, needs no account, and exports a print-ready PDF invoice.</p>
`,
  },
  {
    slug: "cash-app-business-fees",
    title: "Cash App Business Fees (2026): 2.75% Rate and Instant Deposit",
    description:
      "Cash App business fees for 2026: the 2.75% fee on payments received, instant deposit costs, what is free, and how it compares with Venmo, Square and PayPal.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "venmo-zelle-cash-app-invoice",
      "venmo-business-fees",
      "square-invoice-fees",
      "1099-k-threshold",
    ],
    faqs: [
      {
        q: "How much does Cash App charge business accounts?",
        a: "Cash App's help center states that it automatically deducts a 2.75% processing fee from each payment received into a Cash App for Business account. There is no monthly fee to hold the account. If you move money to your bank with an instant deposit, Cash App lists a separate fee that ranges from 0.5% to 1.75% of the amount, with a $0.25 minimum. Standard deposits to a linked bank are free.",
      },
      {
        q: "Is the Cash App business fee charged to me or the customer?",
        a: "The 2.75% fee is charged to the business receiving the payment. The customer sends the full amount, and Cash App deducts the fee before the money lands in your balance. So a $100 payment shows up as $97.25. If you want to recover the cost, you need to build it into your prices, since adding a surcharge line only for Cash App payments can confuse customers.",
      },
      {
        q: "Can I avoid Cash App business fees by using a personal account?",
        a: "You should not. Cash App's terms expect commercial payments to go through a business account, and it can convert a personal account that regularly receives business payments, or limit it. Using a personal account for business also muddles your bookkeeping and tax records. If fees are the concern, offering a bank transfer or ACH option for larger invoices is a cleaner way to cut costs.",
      },
      {
        q: "How much is the Cash App instant deposit fee for businesses?",
        a: "Cash App's business FAQ lists instant deposit fees ranging from 0.5% to 1.75% depending on the deposit amount, with a minimum fee of $0.25. That fee is charged on top of the 2.75% processing fee you already paid when the money arrived. Standard deposits are free and usually reach your bank within a few business days, so only use instant deposits when you genuinely need the cash that day.",
      },
      {
        q: "Does Cash App send invoices?",
        a: "Cash App itself does not offer a full invoicing tool with line items, tax and payment terms. You can request money from a $Cashtag, but that is not an invoice. Most businesses create a proper invoice separately and list their $Cashtag as a payment option. Square Invoices, from the same parent company, can accept Cash App Pay if you want a payable online invoice.",
      },
      {
        q: "Does Cash App report business income to the IRS?",
        a: "Yes, Cash App can issue Form 1099-K for business account payments that meet the federal reporting threshold, which is currently more than $20,000 and more than 200 transactions in a calendar year. Some states use lower thresholds. Whether or not you receive a form, all business income is taxable, so record every Cash App payment against an invoice or sales record.",
      },
      {
        q: "Is Cash App cheaper than Venmo for business?",
        a: "Usually not. Venmo business profiles charge 1.9% + $0.10 per payment received, which beats Cash App's 2.75% on any payment above about $12. On a $200 sale, Venmo costs $3.90 and Cash App costs $5.50. Cash App can make sense if your customers already use it heavily, but on price alone Venmo and bank transfers tend to win.",
      },
      {
        q: "Are there refunds of Cash App business fees?",
        a: "Cash App does not clearly promise to return the processing fee when you refund a customer, so plan as if you will lose it. Check the fee shown in your account and Cash App's help center before issuing a refund. To limit refund costs, confirm order details before taking payment and keep clear written terms, especially for deposits or bookings.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Cash App business fees are 2.75% of every payment received into a Cash App for Business account, deducted automatically, according to Cash App's help center as of 2026. There is no monthly fee and standard deposits to your bank are free. Instant deposits cost an extra 0.5% to 1.75% of the amount, with a $0.25 minimum.</p>

<p>Cash App is popular with barbers, food trucks, cleaners, tutors and other small service businesses because so many customers already have it. But the 2.75% fee is higher than several alternatives. This guide explains every Cash App business fee, works through real numbers, and shows where it fits next to Venmo, Square and bank transfers. You can still send a proper invoice listing your $Cashtag with our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>Cash App Business Fees at a Glance</h2>

<p>Here is what a Cash App for Business account costs, based on Cash App's own help pages as of 2026.</p>

<table>
<thead>
<tr><th>Fee</th><th>Amount</th><th>Who pays</th></tr>
</thead>
<tbody>
<tr><td>Opening and holding a business account</td><td>Free, no monthly fee</td><td>-</td></tr>
<tr><td>Payment received into a business account</td><td>2.75% of the payment</td><td>Business</td></tr>
<tr><td>Standard deposit to linked bank</td><td>Free</td><td>-</td></tr>
<tr><td>Instant deposit to linked debit card</td><td>0.5% to 1.75%, minimum $0.25</td><td>Business</td></tr>
</tbody>
</table>

<p>The core figures come from Cash App's <a href="https://cash.app/help/6521-cash-app-business-fees" target="_blank" rel="noopener noreferrer">help page on business account fees</a>. Fees and limits can change, so always confirm the figure shown inside your account before setting prices.</p>

<h2>How the 2.75% Cash App Business Fee Works</h2>

<p>When a customer pays your $Cashtag, they send the full amount. Cash App takes 2.75% before the money appears in your balance. There is no fixed per-transaction charge, which makes Cash App relatively cheap for very small payments but expensive for large ones compared with fee structures that include a cap.</p>

<p>A few practical points:</p>

<ul>
<li><strong>The customer pays nothing extra</strong> when sending from their Cash App balance or a linked bank account. Cash App can charge senders a fee for funding a payment with a credit card, which your customer will see on their side.</li>
<li><strong>The fee applies per payment</strong>, so one $500 payment and five $100 payments both cost $13.75 in total.</li>
<li><strong>There is no minimum fee</strong> on received payments, unlike processors that add 10 to 30 cents per transaction.</li>
</ul>

<h3>Personal vs business Cash App accounts</h3>

<p>Personal Cash App accounts do not charge a fee to receive payments, which is why some sellers are tempted to use them. Cash App's terms say commercial activity belongs on a business account, and it can limit or convert personal accounts used for business. Keeping business payments separate also makes tax time far easier. The same logic applies to PayPal; see our sibling guide on <a href="/blog/paypal-business-vs-personal-account">PayPal business vs personal accounts</a>.</p>

<h2>Instant Deposit Fees and Standard Deposits</h2>

<p>Once money is in your Cash App balance, you have two ways to move it to your bank.</p>

<ul>
<li><strong>Standard deposit:</strong> free, typically arriving within a few business days.</li>
<li><strong>Instant deposit:</strong> arrives in minutes to a linked debit card, for a fee of 0.5% to 1.75% depending on the amount, with a $0.25 minimum.</li>
</ul>

<p>Instant deposit fees stack on top of the 2.75% processing fee, so using both on every payment can push your total cost above 4%. If cash flow is tight, plan around standard deposits and keep a small buffer in your bank account instead.</p>

<h2>Worked Example: A Month of Cash App Business Payments</h2>

<p>Consider a mobile dog groomer who takes 40 payments of $85 each through Cash App in a month.</p>

<ol>
<li>Total customer payments: 40 × $85 = $3,400.</li>
<li>Processing fee: $3,400 × 2.75% = <strong>$93.50</strong>.</li>
<li>Balance after fees: $3,400 − $93.50 = $3,306.50.</li>
<li>If the groomer uses a standard deposit, the cost stays at $93.50, an effective rate of 2.75%.</li>
<li>If they use instant deposit at the top rate of 1.75%: $3,306.50 × 1.75% = $57.86.</li>
<li>Total cost with instant deposit: $93.50 + $57.86 = <strong>$151.36</strong>, or about 4.45% of $3,400.</li>
</ol>

<p>Now consider a single larger job. A handyman bills $1,200 and the customer pays through Cash App. The fee is $1,200 × 2.75% = $33.00, leaving $1,167.00. If the same customer paid by ACH through a processor charging 1%, the fee would be $12.00, saving $21.00 on one invoice.</p>

<p>To show the full price, taxes and the amount already paid, create the invoice in our <a href="/invoice-generator/usa">US invoice generator</a>. Its "amount paid" field shows the balance due if the customer sends a deposit by Cash App first; our guide to <a href="/blog/partial-payment-invoice">partial payment invoices</a> explains the layout.</p>

<h2>Cash App vs Venmo, Square and PayPal for Small Business</h2>

<p>Cash App is only one of several app-based ways to get paid. Here is how its headline fee compares, using each provider's published US rates as of 2026.</p>

<table>
<thead>
<tr><th>Option</th><th>Fee on a payment received</th><th>Fee on a $200 payment</th></tr>
</thead>
<tbody>
<tr><td>Cash App for Business</td><td>2.75%</td><td>$5.50</td></tr>
<tr><td>Venmo business profile</td><td>1.9% + $0.10</td><td>$3.90</td></tr>
<tr><td>QuickBooks invoice card payment</td><td>2.99%</td><td>$5.98</td></tr>
<tr><td>Square invoice card payment (Free plan)</td><td>3.3% + 30¢</td><td>$6.90</td></tr>
<tr><td>PayPal standard card payment</td><td>2.99% + $0.49</td><td>$6.47</td></tr>
</tbody>
</table>

<p>Venmo is cheaper than Cash App on any payment above roughly $12. Below that, Venmo's fixed 10 cents makes it marginally more expensive. Square and PayPal cost more per payment, but both give you full invoicing tools and card acceptance. Our breakdowns of <a href="/blog/venmo-business-fees">Venmo business fees</a>, <a href="/blog/square-invoice-fees">Square invoice fees</a> and <a href="/blog/paypal-fees">PayPal fees</a> cover the details, and the wider <a href="/blog/credit-card-processing-fees">guide to credit card processing fees</a> explains why card rates sit where they do.</p>

<h3>When Cash App makes sense</h3>

<ul>
<li>Your customers are mostly consumers who already use Cash App.</li>
<li>Payments are small, so the lack of a fixed fee helps.</li>
<li>You want a simple $Cashtag or QR code at a market stall or job site.</li>
</ul>

<h3>When to choose something else</h3>

<ul>
<li>You invoice businesses that prefer to pay by ACH, card or check.</li>
<li>Your invoices are large, where 2.75% with no cap gets expensive.</li>
<li>You need line-item invoices, sales tax, reminders or payment terms built in.</li>
</ul>

<h3>Cash App Pay vs Paying a $Cashtag</h3>

<p>Two different things share the Cash App name, and their fees differ.</p>

<ul>
<li><strong>Paying your $Cashtag:</strong> the customer sends money directly to your Cash App for Business account, and you pay the 2.75% fee described above.</li>
<li><strong>Cash App Pay at checkout:</strong> a payment option inside a merchant's checkout or invoice, for example on Square Invoices. Here the merchant pays the checkout provider's processing rate rather than the 2.75% business account fee, and the money settles to the merchant's processor account, not a Cash App balance.</li>
</ul>

<p>If you already use Square, adding Cash App Pay to your invoices lets Cash App users pay without you managing a separate Cash App balance. Check the current rate in your Square account, and see our Square invoice fees guide for the full price list.</p>

<h2>How to Invoice Customers Who Pay With Cash App</h2>

<p>Cash App can request money, but it is not an invoicing tool. To keep proper records and look professional, follow these steps:</p>

<ol>
<li>Create an invoice with your business name, the customer, a unique invoice number and the date. Our <a href="/tools/invoice-number-generator">invoice number generator</a> keeps numbering consistent.</li>
<li>List each service or product, quantity and price, then apply sales tax if it applies.</li>
<li>In the payment section, write your $Cashtag exactly, plus at least one other method such as bank transfer.</li>
<li>Ask the customer to include the invoice number in the Cash App note.</li>
<li>When the payment arrives, record it against the invoice and send a receipt. Our <a href="/blog/payment-receipt-template">payment receipt template</a> shows what to include.</li>
</ol>

<p>For more on billing through payment apps, read our guide to <a href="/blog/venmo-zelle-cash-app-invoice">Venmo, Zelle and Cash App invoices</a>.</p>

<h2>Cash App Business Fees and Taxes</h2>

<p>Cash App business payments can be reported to the IRS on Form 1099-K once you pass the federal threshold. Our <a href="/blog/1099-k-threshold">1099-K threshold guide</a> explains the current limits and state variations. Two points save trouble:</p>

<ul>
<li><strong>Report gross income, then deduct fees.</strong> The 1099-K shows the gross amount customers paid, not what you received. Record the 2.75% fees as a business expense so you are not taxed on money Cash App kept.</li>
<li><strong>Match payments to invoices.</strong> A tidy invoice trail proves which payments were business income and which were personal transfers, if any slipped into the account.</li>
</ul>

<p>This section is general information, not tax advice. Speak to a tax professional about your situation.</p>

<h3>Should You Raise Prices to Cover Cash App Fees?</h3>

<p>Many small businesses quietly build payment costs into their prices instead of adding a fee at checkout. If you want to receive a set amount after Cash App takes its 2.75%, divide the target by 0.9725.</p>

<ul>
<li>To net $100.00, charge $100 ÷ 0.9725 = $102.83. Check: $102.83 × 2.75% = $2.83, leaving $100.00.</li>
<li>To net $250.00, charge $250 ÷ 0.9725 = $257.07. Check: $257.07 × 2.75% = $7.07, leaving $250.00.</li>
</ul>

<p>The catch is that customers paying by cash or bank transfer then pay the higher price too. A cleaner approach is to set one price list that already reflects your average payment costs across all methods, and to offer a small discount for bank transfer on larger jobs. Adding a separate "Cash App fee" line can work, but tell customers before they pay and keep it consistent; a surprise fee on an invoice tends to cause disputes. If you do add a fixed fee or a percentage line, our generator supports a fixed or percentage discount and an extra charge field, so the invoice math stays correct.</p>

<h2>Cash App for Business: Practical Limits to Know</h2>

<p>Fees are only part of the picture. Before you make Cash App your main way to get paid, consider how it works day to day.</p>

<h3>Customer protection and disputes</h3>
<p>Cash App payments between people are designed to be fast and final, like handing over cash. That speed is convenient, but it also means you should confirm the job or order before accepting payment, and keep a record linking each payment to an invoice. If a customer reports a payment as unauthorized, you will want that paper trail.</p>

<h3>Business customers rarely pay this way</h3>
<p>Companies with accounts payable teams usually pay suppliers by ACH, check or card, not through a consumer app. If you serve businesses, Cash App is unlikely to be the main channel. Our guide to <a href="/blog/how-to-accept-ach-payments">accepting ACH payments</a> covers the method business clients expect.</p>

<h3>Record keeping</h3>
<p>Cash App shows a transaction history, but it is not an accounting system. Export statements regularly and match each payment to an invoice number. When you reconcile, remember that the amount in your balance is net of the 2.75% fee, so a $500 invoice will show as $486.25 received. Record $500 as income and $13.75 as a payment processing expense, not as a short payment.</p>

<h3>Common Cash App Business Mistakes</h3>

<ol>
<li><strong>Taking business payments on a personal account</strong> and risking account limits or a forced switch.</li>
<li><strong>Using instant deposit by habit,</strong> which can add up to 1.75% to every payment.</li>
<li><strong>Booking net deposits as income,</strong> which understates revenue and misses a deductible expense.</li>
<li><strong>Not sending invoices or receipts,</strong> leaving no clear record of what each payment covered.</li>
<li><strong>Offering Cash App only,</strong> which forces large or business customers into a method that suits neither side.</li>
</ol>

<h3>Cash App vs Bank Payment by Invoice Size</h3>

<p>Because Cash App's 2.75% has no cap, its cost grows in step with the payment. Here is how three options compare at different sizes, using published 2026 rates.</p>

<table>
<thead>
<tr><th>Payment</th><th>Cash App (2.75%)</th><th>Venmo business (1.9% + $0.10)</th><th>Stripe ACH (0.8%, $5 cap)</th></tr>
</thead>
<tbody>
<tr><td>$50</td><td>$1.38</td><td>$1.05</td><td>$0.40</td></tr>
<tr><td>$500</td><td>$13.75</td><td>$9.60</td><td>$4.00</td></tr>
<tr><td>$2,000</td><td>$55.00</td><td>$38.10</td><td>$5.00</td></tr>
</tbody>
</table>

<p>For a $50 haircut, the difference is pennies and convenience wins. For a $2,000 renovation deposit, Cash App costs $50 more than a capped ACH payment. A sensible rule for many service businesses is to accept Cash App for everyday small payments and ask for bank payment above a set amount, such as $500. Put that rule in your terms and on your invoices so customers know before the job starts.</p>

<h2>How to Reduce Cash App Business Fees</h2>

<ul>
<li><strong>Use standard deposits</strong> unless you truly need same-day funds.</li>
<li><strong>Offer bank transfer for large jobs.</strong> A free or low-cost bank payment beats 2.75% on a big invoice. Our guide to <a href="/blog/best-payment-methods-for-small-business">payment methods for small business</a> compares options.</li>
<li><strong>Price fees into your rates</strong> rather than adding Cash App-only surcharges, which can confuse customers.</li>
<li><strong>Review your mix every quarter.</strong> If most payments are large or from businesses, a processor with ACH may now be cheaper overall.</li>
</ul>

<h2>Send a Professional Invoice With Your $Cashtag</h2>

<p>Cash App business fees are simple: 2.75% per payment received, free standard deposits, and optional instant deposits at extra cost. That is fair for small consumer payments, but it adds up on larger invoices. Give customers a clear invoice with your $Cashtag and a cheaper bank option using our <a href="/invoice-generator">invoice generator</a>, or pick a design from our <a href="/invoice-templates/minimal">minimal invoice template</a>. Download the result as a PDF invoice you can email, print or upload to a client portal.</p>
`,
  },
  {
    slug: "quickbooks-payments-fees",
    title: "QuickBooks Payments Fees 2026: Invoice, ACH and Card Rates",
    description:
      "QuickBooks Payments fees for 2026: 2.99% on invoice card payments, 1% ACH, swiped and keyed rates, instant deposits, and a worked example vs Stripe and Square.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "how-to-create-invoice-in-quickbooks",
      "square-invoice-fees",
      "stripe-fees",
      "freshbooks-vs-quickbooks",
    ],
    faqs: [
      {
        q: "What are the QuickBooks Payments fees in 2026?",
        a: "Intuit's rate page, accurate as of September 18, 2026, lists 2.99% for invoice payments made by card or digital wallet, including PayPal and Venmo, and 1% for ACH bank transfers. In-person swiped card payments cost 2.5%, keyed-in card payments cost 3.5%, and instant deposits cost 1.75%. All rates are per transaction. Check the rate page or your account before quoting, because Intuit updates them from time to time.",
      },
      {
        q: "How much does QuickBooks charge for ACH invoice payments?",
        a: "QuickBooks lists ACH bank transfers at 1% per transaction as of September 2026. On a $3,000 invoice that is $30, compared with $89.70 if the same client pays by card at 2.99%. Intuit's rate page does not list a cap on its comparison table, so check the terms in your own account if you regularly send large invoices, where an uncapped percentage can become expensive.",
      },
      {
        q: "Does QuickBooks charge a fee to send invoices?",
        a: "Creating and sending invoices is part of your QuickBooks plan, and there is no per-invoice charge for sending them. QuickBooks Payments fees apply only when a customer pays online through the invoice. If the client pays by check or a direct bank transfer outside QuickBooks Payments, there is no processing fee, though you still record the payment against the invoice yourself.",
      },
      {
        q: "Can customers pay a QuickBooks invoice with PayPal or Venmo?",
        a: "Yes. Intuit's rate page lists invoice payments by card and digital wallets, including PayPal and Venmo, at 2.99% per transaction as of September 2026. That is the same rate as a card payment, so offering PayPal and Venmo on the invoice does not add cost compared with cards. It can make payment easier for clients who prefer a wallet over typing in card details.",
      },
      {
        q: "Is QuickBooks Payments cheaper than Stripe or Square for invoices?",
        a: "For card payments on invoices, QuickBooks at 2.99% is slightly cheaper than Stripe's 2.9% + 30¢ plus its 0.4% Invoicing Starter fee, and cheaper than Square's 3.3% + 30¢ on the free plan. For ACH, Stripe is far cheaper on large invoices because it caps at $5, while QuickBooks lists 1%. The best choice depends on your card versus bank mix and invoice size.",
      },
      {
        q: "What is the QuickBooks instant deposit fee?",
        a: "Intuit lists instant deposit at 1.75% of the amount as of September 2026. Standard deposits take longer but carry no extra fee. Instant deposit stacks on top of the processing fee, so a card-paid invoice moved instantly costs roughly 4.7% in total. Use it only when the speed is worth it, such as covering payroll or a supplier payment due that day.",
      },
      {
        q: "Why is the keyed-in QuickBooks rate higher?",
        a: "When you type a customer's card number into QuickBooks yourself, the transaction counts as keyed-in and carries more fraud risk, so Intuit charges 3.5%, higher than the 2.99% invoice rate. Letting the customer pay through the online invoice link is cheaper and keeps card details out of your hands. Reserve keyed entry for the rare cases where a customer cannot pay online.",
      },
      {
        q: "Are QuickBooks Payments fees tax deductible?",
        a: "Generally, yes. Payment processing fees are an ordinary business expense for most US businesses. QuickBooks can record the fee automatically when a payment is deposited, so your books show the gross invoice as income and the fee as an expense. This is general information, not tax advice; confirm your treatment with a tax professional.",
      },
      {
        q: "How can I lower my QuickBooks Payments fees?",
        a: "Encourage ACH on larger invoices, since 1% is well below 2.99%. Avoid keyed-in payments, use standard deposits instead of instant ones, and consider a small early payment discount for bank payment. If most of your invoices are large and paid by ACH, compare QuickBooks with a processor that caps ACH fees, such as Stripe at 0.8% capped at $5.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> QuickBooks Payments fees in 2026 are 2.99% for invoice payments by card or digital wallet (including PayPal and Venmo) and 1% for ACH bank transfers, according to Intuit's rate page as of September 18, 2026. Swiped cards cost 2.5%, keyed-in cards 3.5%, and instant deposits 1.75%. Sending invoices has no per-invoice fee.</p>

<p>If you already keep your books in QuickBooks, turning on Payments is convenient: clients pay from the invoice and payments match automatically. But convenience has a price, and invoice payment fees can be your largest software-related cost. This guide sets out every QuickBooks Payments fee, works through real invoices, and compares the result with Stripe, Square and PayPal. If you only need a clean invoice without a subscription, our <a href="/invoice-generator">free invoice generator</a> is an alternative.</p>

<h2>QuickBooks Payments Fees at a Glance</h2>

<table>
<thead>
<tr><th>Payment type</th><th>QuickBooks rate (as of Sep 18, 2026)</th></tr>
</thead>
<tbody>
<tr><td>Invoice payment by card or digital wallet (incl. PayPal, Venmo)</td><td>2.99%</td></tr>
<tr><td>ACH bank transfer</td><td>1%</td></tr>
<tr><td>Swiped or in-person card</td><td>2.5%</td></tr>
<tr><td>Keyed-in card</td><td>3.5%</td></tr>
<tr><td>Instant deposit</td><td>1.75%</td></tr>
</tbody>
</table>

<p>These come from <a href="https://quickbooks.intuit.com/payments/payment-rates/" target="_blank" rel="noopener noreferrer">Intuit's QuickBooks Payments rate page</a>, which notes that all listed rates are per transaction. Note that there is no fixed per-transaction charge on these rates, unlike Stripe or Square, which add 30 cents to online card payments.</p>

<h2>Invoice Payment Fees: Card vs ACH</h2>

<p>The choice that matters most is how your client pays the invoice. A card payment costs nearly three times as much as an ACH bank transfer.</p>

<h3>Card and wallet payments on invoices</h3>
<p>When a client clicks the pay button and uses a credit card, debit card or a wallet such as PayPal or Venmo, you pay 2.99%. That rate is flat across card types, so you do not see the higher interchange on premium or commercial cards. For background on why cards cost what they do, see our guide to <a href="/blog/credit-card-processing-fees">credit card processing fees</a>.</p>

<h3>ACH bank transfer payments</h3>
<p>If the client chooses bank transfer, the fee drops to 1%. ACH takes a few business days to settle and can be returned for reasons such as insufficient funds; our sibling guide on <a href="/blog/ach-return-codes">ACH return codes</a> explains what each return means. For a primer on taking bank payments generally, read how to accept ACH payments.</p>

<h3>Turning payment options on or off</h3>
<p>You can usually choose which payment methods appear on each invoice. Many businesses switch off card payments on large invoices and leave only ACH, or show both and add a note encouraging bank payment.</p>

<h2>In-Person, Keyed-In and Instant Deposit Fees</h2>

<ul>
<li><strong>Swiped or tapped cards (2.5%):</strong> the cheapest card rate, for when you meet the customer with a card reader.</li>
<li><strong>Keyed-in cards (3.5%):</strong> when you type card details into QuickBooks yourself, for example over the phone. It is the most expensive option and should be the exception.</li>
<li><strong>Instant deposit (1.75%):</strong> moves funds to your bank quickly instead of on the standard schedule. This fee is charged on top of the processing fee.</li>
</ul>

<p>Standard deposits carry no extra charge. If you rely on instant deposits every week, you are effectively raising your card rate from 2.99% to roughly 4.7%.</p>

<h2>Worked Example: Fees on a Month of Invoices</h2>

<p>A small marketing agency sends 10 invoices of $3,000 each in a month. Six clients pay by card and four pay by ACH.</p>

<ol>
<li>Card fee per invoice: $3,000 × 2.99% = $89.70.</li>
<li>Six card invoices: 6 × $89.70 = $538.20.</li>
<li>ACH fee per invoice: $3,000 × 1% = $30.00.</li>
<li>Four ACH invoices: 4 × $30.00 = $120.00.</li>
<li>Total fees: $538.20 + $120.00 = <strong>$658.20</strong> on $30,000 of invoices, an effective rate of 2.19%.</li>
</ol>

<p>If the agency persuaded all ten clients to pay by ACH, total fees would be 10 × $30.00 = $300.00, a saving of $358.20 a month, or $4,298.40 a year.</p>

<p>Now add instant deposit. If one card-paid invoice is moved instantly, the net amount is $3,000 − $89.70 = $2,910.30. The instant deposit fee is $2,910.30 × 1.75% = $50.93, making the total cost on that invoice $140.63.</p>

<p>When you build the invoice itself, include a clear due date and payment terms. Our guide to invoice payment terms covers wording, and the <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps if you bill taxable items.</p>

<h2>QuickBooks Payments vs Stripe, Square and PayPal</h2>

<p>Here is what one $3,000 invoice costs at each provider's published 2026 US rates.</p>

<table>
<thead>
<tr><th>Provider</th><th>Card payment on invoice</th><th>Fee on $3,000 by card</th><th>Fee on $3,000 by ACH</th></tr>
</thead>
<tbody>
<tr><td>QuickBooks Payments</td><td>2.99%</td><td>$89.70</td><td>$30.00 (1%)</td></tr>
<tr><td>Stripe (with Invoicing Starter)</td><td>2.9% + 30¢ + 0.4%</td><td>$99.30</td><td>$5.00 (0.8%, $5 cap)</td></tr>
<tr><td>Square (Free plan)</td><td>3.3% + 30¢</td><td>$99.30</td><td>$30.00 (1%)</td></tr>
<tr><td>PayPal (standard card)</td><td>2.99% + $0.49</td><td>$90.19</td><td>$10.00 (1%, $10 cap)</td></tr>
</tbody>
</table>

<p>For card-paid invoices, QuickBooks is the cheapest of the four at this size. For ACH, Stripe's cap makes it far cheaper on large invoices, and PayPal's $10 cap also beats a flat 1%. The provider guides go deeper: <a href="/blog/stripe-fees">Stripe fees</a>, <a href="/blog/square-invoice-fees">Square invoice fees</a> and <a href="/blog/paypal-fees">PayPal fees</a>.</p>

<h3>The subscription factor</h3>
<p>QuickBooks Payments sits inside the QuickBooks ecosystem, so the real comparison includes the software subscription you pay for accounting. If you only use QuickBooks to send invoices, compare it with cheaper options in our <a href="/blog/quickbooks-alternatives">QuickBooks alternatives</a> guide and our <a href="/blog/freshbooks-vs-quickbooks">FreshBooks vs QuickBooks</a> comparison.</p>

<h3>QuickBooks Payments Fees by Invoice Size</h3>

<p>Because QuickBooks charges a pure percentage with no fixed fee, its cost scales directly with invoice size. That helps on small invoices and hurts on large ones. The table compares QuickBooks card and ACH rates with a capped ACH option.</p>

<table>
<thead>
<tr><th>Invoice amount</th><th>QuickBooks card (2.99%)</th><th>QuickBooks ACH (1%)</th><th>Stripe ACH (0.8%, $5 cap)</th></tr>
</thead>
<tbody>
<tr><td>$250</td><td>$7.48</td><td>$2.50</td><td>$2.00</td></tr>
<tr><td>$1,000</td><td>$29.90</td><td>$10.00</td><td>$5.00</td></tr>
<tr><td>$5,000</td><td>$149.50</td><td>$50.00</td><td>$5.00</td></tr>
<tr><td>$20,000</td><td>$598.00</td><td>$200.00</td><td>$5.00</td></tr>
</tbody>
</table>

<h3>What the table tells you</h3>
<p>On small invoices, QuickBooks is competitive, and the convenience of automatic matching is worth a few dollars. Above a few thousand dollars, the uncapped ACH percentage becomes the deciding factor. A business sending several $20,000 invoices a month could pay hundreds of dollars more in ACH fees than with a capped provider. For very large invoices, a plain bank transfer or wire to your business account, recorded manually in QuickBooks, may be cheapest of all; our guide to <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfers</a> compares the two.</p>

<h3>Costs people overlook</h3>
<ul>
<li>The QuickBooks subscription itself, which you pay whether or not clients pay online.</li>
<li>Instant deposit fees if you use them routinely.</li>
<li>Time spent chasing returned ACH payments or answering disputes.</li>
<li>Lost fees on refunds, if the processing fee is not returned.</li>
</ul>

<h2>How to Set Up QuickBooks Payments on Invoices</h2>

<ol>
<li>Sign in to QuickBooks and open the Payments or account settings area.</li>
<li>Apply for QuickBooks Payments and connect the business bank account for deposits.</li>
<li>Choose which methods to offer by default: cards, ACH, PayPal and Venmo.</li>
<li>Create an invoice and confirm the payment options shown on it before sending.</li>
<li>When the client pays, check that the payment and the fee are recorded correctly against the invoice.</li>
</ol>

<p>Our step-by-step guide to <a href="/blog/how-to-create-invoice-in-quickbooks">creating an invoice in QuickBooks Online</a> covers the invoice side in detail.</p>

<h2>Ways to Cut QuickBooks Payments Fees</h2>

<ul>
<li><strong>Push ACH for large invoices.</strong> Add a line in your terms such as "Bank transfer preferred for invoices over $1,000."</li>
<li><strong>Offer a small discount for bank payment.</strong> A 1% discount for ACH still leaves you better off than a 2.99% card fee. See early payment discounts for how to word it.</li>
<li><strong>Never key cards unless necessary.</strong> Send the invoice link instead.</li>
<li><strong>Skip instant deposits</strong> unless cash flow genuinely requires it.</li>
<li><strong>Check card surcharge rules</strong> before passing fees on. Our guide to credit card surcharge rules sets out the limits.</li>
</ul>

<h3>QuickBooks Payments vs Direct Bank Transfer</h3>

<p>You do not have to process every invoice payment through QuickBooks Payments. Many B2B clients are happy to pay by bank transfer from their own banking portal, using account details printed on your invoice. That route has no QuickBooks processing fee at all; your bank may charge a small fee for incoming wires, and many charge nothing for incoming ACH.</p>

<p>Consider a consultant who sends 10 invoices of $1,500 a month to business clients:</p>

<ol>
<li>Through QuickBooks ACH: 10 × ($1,500 × 1%) = 10 × $15.00 = $150.00 a month.</li>
<li>Through direct bank transfer to the business account: $0.00 in processing fees.</li>
<li>Annual difference: $150.00 × 12 = <strong>$1,800.00</strong>.</li>
</ol>

<p>The trade-off is convenience. With direct transfers you match payments to invoices yourself, and clients cannot click a button to pay. For many small firms, the best setup is both: bank details on every invoice for clients who prefer transfers, and a QuickBooks pay link for clients who want to pay by card. Our sibling guide on <a href="/blog/routing-number-vs-account-number">routing numbers vs account numbers</a> explains which details clients need for ACH and wires.</p>

<h3>Pricing a Bank Payment Discount With QuickBooks</h3>

<p>A discount for paying by bank sounds like giving money away, but the numbers often favour it. Take the same $3,000 invoice.</p>

<ol>
<li>If the client pays by card, you pay $3,000 × 2.99% = $89.70 and keep $2,910.30.</li>
<li>Offer 1% off for ACH: the client pays $3,000 − $30.00 = $2,970.00.</li>
<li>The ACH fee on $2,970.00 is $2,970.00 × 1% = $29.70.</li>
<li>You keep $2,970.00 − $29.70 = <strong>$2,940.30</strong>.</li>
</ol>

<p>That is $30.00 more than the card payment, and the client saves $30.00 too. The discount works because the gap between the card and ACH rates (1.99 percentage points) is wider than the discount. Our generator supports a fixed or percentage discount line, so you can show the bank payment price clearly. State the condition in writing, for example "1% discount applies when paid by ACH within 10 days."</p>

<h3>Refunds, Disputes and Failed Payments</h3>

<p>Fees do not stop at the moment of payment. Plan for what happens when something goes wrong.</p>

<h3>Refunds</h3>
<p>When you refund a customer, check in your QuickBooks account whether the original processing fee is returned. Many processors keep it, so a full refund can leave you out of pocket by the fee. Where possible, agree changes before the client pays, or issue a credit against a future invoice instead.</p>

<h3>Card disputes</h3>
<p>A client can dispute a card payment with their bank. You will need evidence: the signed quote, the invoice, delivery records and correspondence. Clear invoice descriptions are your best defence; see our guide to <a href="/blog/how-to-handle-chargebacks">handling chargebacks</a>.</p>

<h3>Failed ACH payments</h3>
<p>ACH payments can be returned days after they appear to succeed, for example when the account has insufficient funds or is closed. Do not treat an ACH invoice as fully settled until the funds have cleared, and keep the invoice open with the balance due if a payment is returned.</p>

<h2>Who QuickBooks Payments Suits</h2>

<ul>
<li><strong>Good fit:</strong> service businesses already using QuickBooks Online that send mid-sized invoices, want automatic matching, and have a mix of card and bank payers.</li>
<li><strong>Reasonable fit:</strong> businesses that take occasional in-person payments, since the swiped rate of 2.5% is competitive.</li>
<li><strong>Weaker fit:</strong> businesses with large invoices paid mostly by ACH, where a capped ACH fee elsewhere saves real money, and freelancers who do not need full accounting software.</li>
</ul>

<h3>Recording QuickBooks Payments Fees in Your Books</h3>

<p>QuickBooks normally records the full invoice amount as income and the processing fee as a separate expense when the deposit arrives. Check this is happening, because a deposit that lands net of fees can otherwise look like a short payment. Reconcile deposits to your bank statement every month; our guide to bank reconciliation shows how. Processing fees are generally a deductible business expense, but this is general information, not tax advice.</p>

<h2>Is QuickBooks Payments Worth It?</h2>

<p>QuickBooks Payments is worth it if you already run your accounting in QuickBooks, send mostly mid-sized invoices, and value automatic matching. The 2.99% card rate is competitive for invoices, and wallet payments cost the same as cards. It is less attractive if you send large invoices mostly paid by ACH, because an uncapped 1% can cost far more than Stripe's $5 cap. For a wider view of how clients can pay, see our guide to the <a href="/blog/best-payment-methods-for-small-business">best payment methods for small business</a>.</p>

<h2>Create an Invoice With Clear Payment Options</h2>

<p>QuickBooks Payments fees are straightforward: 2.99% on card and wallet invoice payments, 1% on ACH, with higher rates for keyed cards and instant deposits. Whether you use QuickBooks or not, a clear invoice that names your preferred payment method saves money. Make one in minutes with our <a href="/invoice-generator">invoice generator</a> or browse the <a href="/invoice-templates/corporate">corporate invoice template</a>. Every invoice exports as a PDF, so it looks the same on your client's phone, laptop or printer.</p>
`,
  },
  {
    slug: "payoneer-fees",
    title: "Payoneer Fees 2026: Receiving, Withdrawal and Conversion",
    description:
      "Payoneer fees for 2026: receiving fees, withdrawal fee to your bank, currency conversion ranges, the annual account fee and card costs, with a worked example.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "wise-vs-payoneer",
      "payoneer-vs-paypal",
      "receive-payment-from-abroad-pakistan",
      "cross-border-payment-fees",
    ],
    faqs: [
      {
        q: "What are Payoneer's main fees in 2026?",
        a: "Payoneer's pricing page lists free receiving into a local-currency receiving account and from other Payoneer users, 1% (minimum $1) for receiving into a non-local currency account, 1% for US ACH bank debits through a payment request, and up to 3.99% + $0.49 for card payments. Withdrawals involving another currency are listed at 1.2% to 4%, and there is a $29.95 annual fee for low-activity accounts.",
      },
      {
        q: "How much is the Payoneer withdrawal fee?",
        a: "It depends on the currency and country. Payoneer's pricing page gives a same-currency example of 1.50 USD for a USD withdrawal to a US bank. When the withdrawal goes to a bank in a different currency, such as USD to PKR, INR or PHP, the page lists a fee range of 1.2% to 4%, and some countries can have minimum fees of up to $20. Your exact fee appears in your account's Fees section.",
      },
      {
        q: "Does Payoneer charge to receive payments?",
        a: "Not always. Receiving from another Payoneer customer is free, and so is receiving into a receiving account in that account's local currency, for example a US client sending USD to your USD account details. Receiving a currency that is not local to the account costs 1% with a $1 minimum. Payment requests paid by card cost up to 3.99% + $0.49, and by US ACH debit 1%.",
      },
      {
        q: "What is the Payoneer annual fee and how do I avoid it?",
        a: "Payoneer charges an annual account fee of $29.95 only if your account receives less than $6,000 or equivalent in any 12 consecutive months. If you receive more than that, there is no annual account fee. A separate $29.95 annual fee applies to the Payoneer card. If you use Payoneer only occasionally, check whether the account fee will apply before you leave a balance sitting there.",
      },
      {
        q: "Is Payoneer cheaper than PayPal for freelancers?",
        a: "For international freelancers, often yes. PayPal adds a 1.50% international fee on top of its standard rates, plus a currency conversion spread, while Payoneer lets clients pay free into local receiving accounts. The main cost with Payoneer is the conversion on withdrawal. If your clients will only pay by card, the difference narrows. Our Payoneer vs PayPal guide compares both on real invoices.",
      },
      {
        q: "Is Payoneer or Wise cheaper for currency conversion?",
        a: "Wise generally converts at the mid-market rate with a visible fee that starts low for major currencies, while Payoneer's pricing page lists 1.2% to 4% for withdrawals involving conversion. On most corridors Wise is cheaper for conversion. Payoneer's advantages are availability in more countries, including Pakistan, and tight integration with marketplaces such as Upwork, Fiverr and Amazon.",
      },
      {
        q: "How do I get paid by a US client through Payoneer?",
        a: "The cheapest method is to give the client your Payoneer USD receiving account details, so they can send an ACH or local bank transfer, which Payoneer lists as free into a local-currency account. Alternatively, send a payment request from Payoneer, which lets them pay by card at up to 3.99% + $0.49 or by ACH debit at 1%. Always attach a proper invoice with the payment details.",
      },
      {
        q: "Are Payoneer card fees high?",
        a: "The Payoneer card has a $29.95 annual fee. Purchases without currency conversion are listed at up to 1.8% (free where the merchant and card country match), and purchases with conversion at up to 3.5%. ATM withdrawals cost a flat fee such as 3.15 USD plus a percentage. For everyday spending in your home country, withdrawing to a local bank account is usually cheaper.",
      },
      {
        q: "Why are Payoneer fees different in my account?",
        a: "Payoneer states that fees vary by country, currency and payment method, and that your applicable fees are shown in the Fees section of your signed-in account. Some US customers have a fixed $1.50 withdrawal fee up to a monthly limit, and some countries have minimum fees. Treat published ranges as a guide and check your own account before quoting prices.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Payoneer fees in 2026 depend on how you are paid and how you withdraw. Receiving into a local-currency receiving account is free, non-local currency costs 1% (minimum $1), and card payments cost up to 3.99% + $0.49. Withdrawals involving currency conversion cost 1.2% to 4%, and a $29.95 annual fee applies if you receive under $6,000 a year.</p>

<p>Payoneer is a common choice for freelancers and agencies paid by overseas clients and marketplaces, especially in countries where PayPal or Wise are limited. Its fees are split across receiving, conversion, withdrawal and account charges, which makes the true cost hard to see. This guide sets out each Payoneer fee from Payoneer's own pricing page, shows a full worked example, and explains how to pay less. To send a professional invoice that lists your Payoneer receiving details, use our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>Payoneer Fees at a Glance</h2>

<table>
<thead>
<tr><th>Fee type</th><th>Payoneer's published fee (2026)</th></tr>
</thead>
<tbody>
<tr><td>Receive from another Payoneer customer</td><td>Free</td></tr>
<tr><td>Receive into local-currency receiving account</td><td>Free</td></tr>
<tr><td>Receive into non-local currency account</td><td>1% (minimum $1.00)</td></tr>
<tr><td>Payment request paid by credit card</td><td>Up to 3.99% + $0.49</td></tr>
<tr><td>Payment request paid by ACH bank debit (US)</td><td>1%</td></tr>
<tr><td>Withdrawal to bank, same currency (USD to US bank)</td><td>$1.50</td></tr>
<tr><td>Withdrawal involving another currency</td><td>1.2% to 4%</td></tr>
<tr><td>Annual account fee</td><td>$29.95 if under $6,000 received in 12 months</td></tr>
<tr><td>Payoneer card annual fee</td><td>$29.95</td></tr>
</tbody>
</table>

<p>All figures are from <a href="https://www.payoneer.com/pricing/" target="_blank" rel="noopener noreferrer">Payoneer's pricing page</a>. Payoneer notes that fees vary by country, currency and payment method, and that the fees for your account appear in its Fees section once you sign in.</p>

<h2>Payoneer Receiving Fees</h2>

<p>How the client sends money decides your first fee.</p>

<h3>Receiving accounts (local bank details)</h3>
<p>Payoneer gives you receiving account details in several currencies, such as USD, EUR and GBP. A client in the US can then pay your USD details by a normal domestic transfer. Payoneer lists receiving in the account's local currency as free. If a client sends a currency that is not local to the account, Payoneer charges 1% with a $1 minimum.</p>

<h3>Payment requests</h3>
<p>A payment request is a link you send so the client can pay by card or bank. Card payments cost up to 3.99% + $0.49, which is high, and US ACH bank debits cost 1%. Payment requests are convenient for clients who do not want to set up a bank transfer, but you pay for that convenience.</p>

<h3>Marketplaces and other Payoneer users</h3>
<p>Payments from other Payoneer customers are free to receive. Marketplace payouts, such as from freelance platforms, follow the marketplace's own terms, which Payoneer describes as varying by marketplace. Platform fees are separate; see our guides to <a href="/blog/upwork-fees">Upwork fees</a> and <a href="/blog/fiverr-fees">Fiverr fees</a>.</p>

<h2>Payoneer Withdrawal Fee and Currency Conversion</h2>

<p>For most freelancers outside the US and Europe, withdrawal is where the real cost sits, because it usually includes a currency conversion.</p>

<ul>
<li><strong>Same currency, same country:</strong> Payoneer's example is USD to a US bank for $1.50. Some US customers have a fixed $1.50 per withdrawal up to $50,000 a month, then up to 0.5%.</li>
<li><strong>Different currency:</strong> withdrawing USD to a bank in PKR, INR, PHP or another local currency is listed at 1.2% to 4%, depending on country and currency.</li>
<li><strong>Minimum fees:</strong> some countries can have a minimum fee of up to $20 or equivalent per withdrawal.</li>
</ul>

<p>Because the percentage applies to the whole withdrawal, the conversion fee usually outweighs every other Payoneer charge. For a full explanation of FX markups across providers, read our guide to <a href="/blog/cross-border-payment-fees">cross-border payment fees</a>.</p>

<h2>Payoneer Account and Card Fees</h2>

<p><strong>Annual account fee:</strong> $29.95, charged only if the account receives less than $6,000 or equivalent in any 12 consecutive months. Active freelancers above that level do not pay it.</p>

<p><strong>Payoneer card:</strong> a $29.95 annual card fee, purchases without currency conversion at up to 1.8% (free where merchant and card-issuing countries match), purchases with conversion at up to 3.5%, and ATM withdrawals at a flat fee such as 3.15 USD plus a percentage. Card replacement is $12.95. Additional virtual cards are free.</p>

<p><strong>Sending to other Payoneer users:</strong> up to $4 in the same country, or up to 1% plus up to $4 to a different country.</p>

<h2>Worked Example: Getting Paid $2,000 Through Payoneer</h2>

<p>A web developer in Pakistan invoices a US client $2,000. Assume, for illustration, that the withdrawal to a PKR bank account is charged at 2%, which sits inside Payoneer's published 1.2% to 4% range. Here are three ways the client can pay.</p>

<h3>Option A: client pays USD receiving account by bank transfer</h3>
<ol>
<li>Receiving fee: free, so $2,000 lands in the USD balance.</li>
<li>Withdrawal with conversion: $2,000 × 2% = $40.00.</li>
<li>Value reaching the PKR bank: <strong>$1,960.00</strong> equivalent. Total cost $40.00, or 2%.</li>
</ol>

<h3>Option B: client pays a payment request by ACH debit</h3>
<ol>
<li>Receiving fee: $2,000 × 1% = $20.00, leaving $1,980.00.</li>
<li>Withdrawal: $1,980.00 × 2% = $39.60.</li>
<li>Value reaching the bank: <strong>$1,940.40</strong>. Total cost $59.60, or 2.98%.</li>
</ol>

<h3>Option C: client pays a payment request by credit card</h3>
<ol>
<li>Receiving fee: $2,000 × 3.99% = $79.80, plus $0.49 = $80.29, leaving $1,919.71.</li>
<li>Withdrawal: $1,919.71 × 2% = $38.39.</li>
<li>Value reaching the bank: <strong>$1,881.32</strong>. Total cost $118.68, or 5.93%.</li>
</ol>

<p>The gap between A and C is $78.68 on one invoice. Over 12 monthly invoices, that is $944.16 a year. Steering clients to your receiving account details is the single biggest saving. If you earn less than $6,000 a year through Payoneer, add the $29.95 annual fee to your cost.</p>

<p>Show the invoice total, any agreed deposit, and the balance due clearly. Our generator's "amount paid" field calculates the balance automatically, and you can add a unique number with the <a href="/tools/invoice-number-generator">invoice number generator</a>.</p>

<h3>Payoneer Receiving Fees by Payment Size</h3>

<p>The way a client pays matters more as invoices grow. Here is what Payoneer's published receiving fees cost at three invoice sizes, before any withdrawal fee.</p>

<table>
<thead>
<tr><th>Invoice</th><th>Local transfer to receiving account</th><th>Payment request by US ACH (1%)</th><th>Payment request by card (3.99% + $0.49)</th></tr>
</thead>
<tbody>
<tr><td>$500</td><td>$0.00</td><td>$5.00</td><td>$20.44</td></tr>
<tr><td>$2,000</td><td>$0.00</td><td>$20.00</td><td>$80.29</td></tr>
<tr><td>$10,000</td><td>$0.00</td><td>$100.00</td><td>$399.49</td></tr>
</tbody>
</table>

<p>On a $10,000 project, letting the client pay by card costs nearly $400 more than a local transfer. That is a strong reason to put your receiving account details on every invoice and offer card payment only as a fallback.</p>

<h3>What to put on a Payoneer invoice</h3>
<ol>
<li>Your name or business name exactly as it appears on the Payoneer receiving account.</li>
<li>The receiving account details for the client's currency, copied from your Payoneer dashboard.</li>
<li>The invoice currency, which should match those account details.</li>
<li>A unique invoice number and a clear due date.</li>
<li>A note asking the client to use a local bank transfer and to quote the invoice number as the payment reference.</li>
</ol>

<h2>Payoneer vs Wise vs PayPal</h2>

<table>
<thead>
<tr><th>Factor</th><th>Payoneer</th><th>Wise Business</th><th>PayPal</th></tr>
</thead>
<tbody>
<tr><td>Receive local USD transfer</td><td>Free</td><td>Free (ACH)</td><td>Not a bank-detail model</td></tr>
<tr><td>Card payments from clients</td><td>Up to 3.99% + $0.49</td><td>Not the main use</td><td>2.99% + $0.49, plus 1.50% if international</td></tr>
<tr><td>Currency conversion</td><td>1.2% to 4% on withdrawal</td><td>From 0.23%, varies by currency</td><td>Spread on conversion</td></tr>
<tr><td>Annual account fee</td><td>$29.95 if under $6,000 a year</td><td>None monthly</td><td>None</td></tr>
<tr><td>Marketplace integration</td><td>Strong</td><td>Limited</td><td>Strong</td></tr>
</tbody>
</table>

<p>For deeper comparisons, read <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> and <a href="/blog/payoneer-vs-paypal">Payoneer vs PayPal</a>, plus our sibling guide to <a href="/blog/wise-business-fees">Wise Business fees</a>. Availability often decides the matter: Payoneer works in many countries where alternatives are restricted.</p>

<h3>How to Check the Real Cost of a Payoneer Withdrawal</h3>

<p>The percentage fee is only meaningful if you compare the amount you actually receive with what the money was worth. Do this before any large withdrawal:</p>

<ol>
<li>Note the amount you are withdrawing, for example $3,000.</li>
<li>Look up the mid-market exchange rate at the same moment on a neutral source such as a financial news site.</li>
<li>Multiply: $3,000 × mid-market rate = what the money is worth with zero cost.</li>
<li>Compare with the local-currency amount Payoneer quotes on the withdrawal screen.</li>
<li>Divide the difference by the zero-cost amount to get your all-in percentage.</li>
</ol>

<p>Example with hypothetical numbers: if the mid-market rate is 280 and $3,000 is worth 840,000 in local currency, and Payoneer quotes 823,200, the difference is 16,800. That is 16,800 ÷ 840,000 = 2.0% all-in. If a different withdrawal method or provider would deliver 832,000, the saving is 8,800 on a single transfer. Running this check a few times shows you which route is actually cheapest for your corridor.</p>

<h3>Payoneer Fees for Marketplace Sellers and Freelancers</h3>

<p>Many people first meet Payoneer as a payout option on a freelance marketplace or e-commerce platform. In that case the fees stack in layers:</p>

<ul>
<li><strong>The platform's own fee,</strong> such as a service fee on each order, taken before money leaves the platform.</li>
<li><strong>Any platform payout fee</strong> for sending money to Payoneer, which Payoneer describes as varying by marketplace.</li>
<li><strong>Payoneer's withdrawal fee</strong> when you move funds to your local bank, usually including conversion.</li>
</ul>

<p>On a $500 order, the platform fee usually dwarfs Payoneer's charges, so compare the whole chain, not just Payoneer. Direct clients paying your receiving account details skip the platform layer entirely, which is one reason experienced freelancers move repeat clients to direct invoicing once the platform's terms allow it.</p>

<h3>Common Payoneer Fee Mistakes</h3>

<ol>
<li><strong>Sending card payment requests by default.</strong> At up to 3.99% + $0.49, cards cost far more than a bank transfer into your receiving account.</li>
<li><strong>Billing in the wrong currency.</strong> Asking a UK client to pay USD can trigger the 1% non-local receiving fee and a conversion at the client's bank.</li>
<li><strong>Many small withdrawals</strong> in countries with minimum fees, where each withdrawal costs at least the minimum.</li>
<li><strong>Forgetting the annual fee</strong> on an account you barely use.</li>
<li><strong>Booking only what reached your bank as income.</strong> Record the gross invoice amount as income and Payoneer fees as an expense, so your accounts reflect what the client actually paid.</li>
</ol>

<h2>How to Lower Your Payoneer Fees</h2>

<ol>
<li><strong>Share receiving account details, not payment requests.</strong> Local transfers into a matching currency are free.</li>
<li><strong>Invoice in the client's currency.</strong> A US client paying USD into a USD account avoids the 1% non-local receiving fee. Our guide to <a href="/blog/foreign-currency-invoice">foreign currency invoices</a> explains the choice.</li>
<li><strong>Withdraw less often, in larger amounts,</strong> where your country has a minimum fee.</li>
<li><strong>Compare withdrawal rates</strong> against the mid-market rate before each large withdrawal.</li>
<li><strong>Stay above $6,000 a year</strong> or close idle accounts to avoid the annual fee.</li>
<li><strong>Price fees into your rates.</strong> If card payments are unavoidable, set your rates with that cost in mind.</li>
</ol>

<h3>Recording Payoneer Fees in Your Accounts</h3>

<p>Payoneer fees are a cost of doing business, so record them properly rather than letting them disappear into a lower deposit figure.</p>

<ul>
<li><strong>Income:</strong> record the full invoice amount the client paid, for example $2,000.</li>
<li><strong>Receiving fees:</strong> record any Payoneer receiving fee, such as $20 for an ACH payment request, as a bank or payment processing expense.</li>
<li><strong>Withdrawal and conversion:</strong> record the withdrawal fee, such as $39.60, as an expense, and note the exchange rate used, since some tax authorities ask for income in local currency.</li>
</ul>

<p>Keep Payoneer's monthly statements with your invoices. If a client short-pays because of their own bank charges, keep the invoice open for the balance or record the difference as a discount, depending on what you agreed. This is general information, not tax advice; local rules on foreign-currency income differ by country.</p>

<h2>Is Payoneer Worth the Fees?</h2>

<p>Payoneer is worth it when you need local receiving accounts in major currencies, work with marketplaces that pay out to Payoneer, or live in a country where cheaper options are limited. Its costs are reasonable when clients pay your receiving account details and you withdraw in sensible amounts. It becomes expensive when clients pay by card, when you withdraw small amounts in a country with minimum fees, or when you hold an idle account that triggers the annual fee. Compare it with at least one alternative for your own corridor before committing.</p>

<h2>Invoicing International Clients Through Payoneer</h2>

<p>Your invoice should carry the details the client needs to pay without questions: your name or business name, the client's details, invoice number and date, line items, currency, total and due date, plus your Payoneer receiving account details exactly as shown in your dashboard. For cross-border tax and currency points, see <a href="/blog/invoice-international-clients">how to invoice international clients</a>. If you are in Pakistan, our guide to <a href="/blog/receive-payment-from-abroad-pakistan">receiving payment from abroad in Pakistan</a> covers banking and remittance rules, and our <a href="/invoice-generator/pakistan">Pakistan invoice generator</a> fits local formats.</p>

<h2>Create a Payoneer-Ready Invoice</h2>

<p>Payoneer fees are manageable once you know where they sit: receiving is often free, card payments are expensive, and conversion on withdrawal is the biggest cost. Ask clients to pay your receiving account details, invoice in their currency, and keep an eye on the annual fee. Build a clear invoice with your Payoneer details in our <a href="/invoice-generator">invoice generator</a>, or start from the <a href="/invoice-templates/modern">modern invoice template</a>. No sign-up is needed, and your PDF invoice is ready to send in a few minutes.</p>
`,
  },
  {
    slug: "wise-business-fees",
    title: "Wise Business Fees 2026: Setup, Receiving and Conversion",
    description:
      "Wise Business fees for 2026: the one-time setup cost, receive fees for ACH, wires and Swift, conversion from 0.23%, card and ATM costs, with a worked example.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "wise-vs-payoneer",
      "revolut-business-vs-wise",
      "wise-vs-paypal",
      "foreign-currency-invoice",
    ],
    faqs: [
      {
        q: "How much does a Wise Business account cost?",
        a: "Wise says registration is free and there are no subscriptions or monthly fees. Its US business pricing page describes a one-time 31 USD setup fee that covers the full set of Wise Business features, including account details for getting paid. After that, you pay per transaction: conversion fees, certain receive fees for wires and Swift payments, and ATM fees above a free monthly allowance.",
      },
      {
        q: "What are Wise Business receive fees?",
        a: "As of 2026, Wise's US business pricing page lists receiving USD by domestic ACH as free. Receiving USD by wire or Swift costs a fixed 6.11 USD per payment. Swift payments in GBP cost 2.16 GBP and in EUR cost 2.39 EUR. Fees for other Swift currencies are on a separate Wise help page. Asking clients to use local transfers rather than wires keeps receiving costs at zero in many cases.",
      },
      {
        q: "What is the Wise Business conversion fee?",
        a: "Wise's pricing page says the conversion fee varies by currency and starts from 0.23%. Wise converts at the mid-market exchange rate and shows its fee separately, rather than hiding a markup in the rate. Common pairs such as USD, EUR and GBP sit at the lower end, while less traded currencies cost more. Wise shows the exact fee before you confirm each conversion.",
      },
      {
        q: "Does Wise Business charge monthly fees?",
        a: "No. Wise states that there are no subscriptions or monthly fees on Wise Business. You pay the one-time setup fee, then per-transaction charges for conversions, some incoming wires, outgoing transfers and certain card or ATM uses. That makes Wise cheap to hold if you only receive international payments occasionally, unlike accounts that charge a monthly plan fee whether you use them or not.",
      },
      {
        q: "Is Wise Business cheaper than PayPal for receiving international payments?",
        a: "Usually, yes. PayPal adds a 1.50% international fee on commercial payments and applies a currency conversion spread, while Wise lets clients pay local account details in many currencies and converts from 0.23%. On a 3,000 EUR payment, Wise's costs can stay well under 1%. PayPal is still useful when clients insist on paying by card or PayPal balance.",
      },
      {
        q: "Can I receive card payments with Wise Business?",
        a: "Wise is built mainly around account details and bank transfers rather than card acceptance. Clients usually pay into your local account details in their currency. If you need clients to pay invoices by card, you will usually pair Wise with a card processor such as Stripe or PayPal and then move funds to Wise for conversion and payouts.",
      },
      {
        q: "What are Wise Business card and ATM fees?",
        a: "Spending with the Wise Business card is free in currencies you hold, with conversion fees applying when you spend a currency you do not hold. Topping up external e-wallets costs 2%. ATM withdrawals are free up to 250 USD per calendar month, then cost 1.95 USD plus 1.95% per withdrawal, and ATM operators may add their own fees.",
      },
      {
        q: "Is Wise Business or Payoneer cheaper?",
        a: "For currency conversion, Wise is usually cheaper, since it starts from 0.23% at the mid-market rate while Payoneer lists 1.2% to 4% for withdrawals involving conversion. Payoneer can be better if you are paid by marketplaces that integrate with it, or if you live in a country where Wise Business is unavailable or limited. Compare both against your own client mix.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Wise Business fees in 2026 start with a one-time 31 USD setup fee and no monthly fees. Receiving USD by ACH is free, while USD wires and Swift payments cost 6.11 USD each. Currency conversion starts from 0.23% at the mid-market rate, card spending is free in held currencies, and ATM withdrawals are free up to 250 USD a month.</p>

<p>Wise Business is popular with freelancers, agencies and small exporters who invoice clients in other currencies. Its appeal is simple: local account details in many currencies and conversion at the real exchange rate with a visible fee. This guide walks through every Wise Business fee from Wise's own US pricing page, works through real payments, and shows when Wise is cheaper than the alternatives. To send an invoice that lists your Wise account details, use our <a href="/invoice-generator">free invoice generator</a>.</p>

<h2>Wise Business Fees at a Glance</h2>

<table>
<thead>
<tr><th>Fee</th><th>Wise Business (US pricing, 2026)</th></tr>
</thead>
<tbody>
<tr><td>Registration</td><td>Free</td></tr>
<tr><td>One-time setup for full features</td><td>31 USD</td></tr>
<tr><td>Monthly fee</td><td>None</td></tr>
<tr><td>Receive USD by ACH (domestic, non-wire)</td><td>Free</td></tr>
<tr><td>Receive USD by wire or Swift</td><td>6.11 USD per payment</td></tr>
<tr><td>Receive GBP by Swift</td><td>2.16 GBP per payment</td></tr>
<tr><td>Receive EUR by Swift</td><td>2.39 EUR per payment</td></tr>
<tr><td>Currency conversion</td><td>From 0.23%, varies by currency</td></tr>
<tr><td>Card spending</td><td>Free</td></tr>
<tr><td>Top up external e-wallets with card</td><td>2%</td></tr>
<tr><td>ATM withdrawals</td><td>Free to 250 USD a month, then 1.95 USD + 1.95%</td></tr>
</tbody>
</table>

<p>Figures come from <a href="https://wise.com/us/pricing/business/" target="_blank" rel="noopener noreferrer">Wise's US business pricing page</a>. Wise's business landing page also states that registration is free with no subscriptions or monthly fees, and that you can get paid in 22 currencies. Pricing differs by country, so check the version for your region.</p>

<h2>Wise Business Setup and Account Fees</h2>

<p>Opening a Wise Business account costs nothing to register. To unlock the full set of features, including local account details for getting paid, Wise's US pricing page describes a single setup fee of 31 USD. There is no monthly or annual plan, which makes Wise unusually cheap to keep if your international work is seasonal.</p>

<p>That compares well with accounts that charge a recurring plan fee, and with Payoneer, which charges $29.95 a year to low-activity accounts. See our guide to <a href="/blog/payoneer-fees">Payoneer fees</a> for that side of the comparison, and <a href="/blog/revolut-business-vs-wise">Revolut Business vs Wise</a> if you are weighing a plan-based account.</p>

<h2>Wise Business Receive Fees</h2>

<p>Receive fees depend on how the money arrives, not who sends it.</p>

<h3>Local transfers: usually free</h3>
<p>When a US client pays your USD account details by ACH, Wise lists it as free. This is the cheapest way to be paid, and it works the same way as a client paying any domestic US bank. For how ACH compares with wires, read <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a>.</p>

<h3>Wires and Swift: a fixed fee</h3>
<p>If the client sends a domestic wire or an international Swift payment in USD, Wise charges a fixed 6.11 USD per payment. Swift payments in GBP cost 2.16 GBP and in EUR 2.39 EUR. Swift payments can also lose money to intermediary banks before they reach Wise, which is outside Wise's control. Our sibling guide on <a href="/blog/routing-number-vs-account-number">routing number vs account number</a> helps clients choose the right details for ACH versus wire.</p>

<h3>Tell clients which method to use</h3>
<p>Many clients default to a wire because it feels safer. Put a line on your invoice such as "Please pay by ACH to the account details below" to avoid the wire fee.</p>

<h2>Wise Business Conversion Fees</h2>

<p>Conversion is where Wise differs most from banks and payment apps. Wise converts at the mid-market rate, the rate you see on financial news sites, and charges a visible percentage that starts from 0.23% and varies by currency. You see the exact fee and the amount you will receive before confirming.</p>

<p>Why this matters: many banks and payment platforms quote a "no fee" conversion but use an exchange rate a few percent worse than mid-market. That hidden spread is often larger than any visible fee. Our guide to <a href="/blog/cross-border-payment-fees">cross-border payment fees</a> explains how to spot it.</p>

<p>You also choose when to convert. You can hold EUR or GBP in your balance and convert later, or spend it directly with the card, avoiding conversion altogether if you have costs in that currency.</p>

<h2>Worked Example: A Month of International Payments</h2>

<p>A US design studio receives three payments in a month. For illustration, assume a conversion fee of 0.5% on EUR to USD and a mid-market rate of 1 EUR = 1.08 USD; check the live rate and fee in your account.</p>

<ol>
<li><strong>US client pays $5,000 by ACH:</strong> receive fee free, so the full $5,000.00 arrives.</li>
<li><strong>Another US client pays $5,000 by domestic wire:</strong> fee 6.11 USD, so $4,993.89 arrives.</li>
<li><strong>German client pays 3,000 EUR by Swift:</strong> fee 2.39 EUR, so 2,997.61 EUR arrives.</li>
<li><strong>Convert the EUR:</strong> 2,997.61 × 0.5% = 14.99 EUR fee, leaving 2,982.62 EUR to convert.</li>
<li><strong>At 1.08:</strong> 2,982.62 × 1.08 = <strong>$3,221.23</strong>.</li>
</ol>

<p>Total Wise fees on the EUR payment: 2.39 + 14.99 = 17.38 EUR, or about 0.58% of 3,000 EUR. Across the month, the fees are 6.11 USD plus 17.38 EUR, and the one-time 31 USD setup fee is paid only once.</p>

<p>Now compare a platform that adds a 1.50% international fee and a 3% spread on conversion. On the same 3,000 EUR, that would be roughly 45 EUR plus about 90 EUR of spread, around 135 EUR in total, nearly eight times Wise's cost. Results vary by provider, which is why our <a href="/blog/wise-vs-paypal">Wise vs PayPal</a> guide compares them on real invoices.</p>

<p>When you invoice the German client, state the currency, the total in EUR and your EUR account details. Our <a href="/blog/foreign-currency-invoice">foreign currency invoice guide</a> covers which currency to bill in, and our <a href="/invoice-generator/uk">UK invoice generator</a> suits GBP-billed clients.</p>

<h3>Wise Business Fees by Payment Method</h3>

<p>The same $10,000 from a US client costs very different amounts depending on how it is sent and whether you convert it. This table uses Wise's published receive fees and, for conversion, an illustrative 0.5% fee.</p>

<table>
<thead>
<tr><th>Scenario ($10,000 from a US client)</th><th>Receive fee</th><th>Conversion fee at 0.5%</th><th>Total Wise fees</th></tr>
</thead>
<tbody>
<tr><td>ACH, kept in USD</td><td>$0.00</td><td>$0.00</td><td>$0.00</td></tr>
<tr><td>Domestic wire, kept in USD</td><td>$6.11</td><td>$0.00</td><td>$6.11</td></tr>
<tr><td>ACH, converted to another currency</td><td>$0.00</td><td>$50.00</td><td>$50.00</td></tr>
<tr><td>Wire, converted to another currency</td><td>$6.11</td><td>$49.97</td><td>$56.08</td></tr>
</tbody>
</table>

<p>Two lessons stand out. First, the receive fee is small and fixed, so it barely matters on large payments. Second, conversion is the real cost, which is why holding currencies you will spend and converting only what you need saves the most.</p>

<h3>Adding Wise account details to your invoice</h3>
<ol>
<li>Open your Wise Business account and choose the balance in the client's currency.</li>
<li>Copy the account details shown for local transfers, and separately the details for Swift if the client is abroad.</li>
<li>Paste them into the payment section of your invoice with the account holder name exactly as shown.</li>
<li>Add a line telling the client which method to use, for example "Please pay by ACH."</li>
<li>Ask the client to quote the invoice number as the payment reference so you can match it quickly.</li>
</ol>

<h2>Wise Business Card and ATM Fees</h2>

<ul>
<li><strong>Card spending:</strong> free in a currency you hold; a conversion fee applies if Wise needs to convert to pay.</li>
<li><strong>External e-wallet top-ups:</strong> 2%.</li>
<li><strong>ATM withdrawals:</strong> no Wise fee up to 250 USD per calendar month, then 1.95 USD plus 1.95% per withdrawal. ATM operators may add their own charges.</li>
</ul>

<p>The card is most useful for paying foreign-currency software subscriptions and suppliers directly from the matching balance.</p>

<h2>Wise Business vs Payoneer vs PayPal</h2>

<table>
<thead>
<tr><th>Factor</th><th>Wise Business</th><th>Payoneer</th><th>PayPal</th></tr>
</thead>
<tbody>
<tr><td>Setup or annual cost</td><td>31 USD once, no monthly fee</td><td>$29.95 a year if under $6,000 received</td><td>No setup fee</td></tr>
<tr><td>Receive local USD</td><td>Free by ACH</td><td>Free into USD receiving account</td><td>Not a bank-detail model</td></tr>
<tr><td>Conversion</td><td>From 0.23% at mid-market</td><td>1.2% to 4% on withdrawal</td><td>Spread on conversion</td></tr>
<tr><td>Card payments from clients</td><td>Not the main use</td><td>Up to 3.99% + $0.49</td><td>2.99% + $0.49, plus 1.50% international</td></tr>
<tr><td>Best for</td><td>Low-cost conversion</td><td>Marketplaces, wide country coverage</td><td>Clients who insist on PayPal</td></tr>
</tbody>
</table>

<p>Our <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> guide goes deeper, including country availability, which can rule out one option entirely.</p>

<h3>What Wise Business Fees Cost Over a Year</h3>

<p>Per-payment fees look small, so it helps to annualise them. Take a freelancer who is paid 2,500 EUR a month by a European client via Swift and converts it to USD, assuming an illustrative 0.5% conversion fee.</p>

<ol>
<li>Swift receive fee: 12 × 2.39 EUR = 28.68 EUR a year.</li>
<li>Amount left to convert each month: 2,500 − 2.39 = 2,497.61 EUR.</li>
<li>Monthly conversion fee: 2,497.61 × 0.5% = 12.49 EUR; yearly 12 × 12.49 = 149.88 EUR.</li>
<li>Total yearly Wise fees: 28.68 + 149.88 = <strong>178.56 EUR</strong> on 30,000 EUR, about 0.6%, plus the one-time 31 USD setup fee in year one.</li>
</ol>

<p>If the client paid the freelancer's EUR account details by a local euro transfer instead of Swift, the receive fee line could fall away. Check the current fee for local EUR receipts in your account, since the pricing page lists Swift fees specifically.</p>

<h3>Who Wise Business Suits</h3>

<ul>
<li><strong>Freelancers and agencies</strong> with clients in the US, UK, EU or other major currency areas who want local account details and cheap conversion.</li>
<li><strong>E-commerce and SaaS businesses</strong> that collect revenue in several currencies through a processor and need a low-cost way to convert and pay suppliers.</li>
<li><strong>Businesses with foreign costs,</strong> such as contractors or software paid in EUR or GBP, that can pay from held balances.</li>
</ul>

<p>Wise Business is less suitable if your clients insist on paying by card, if you are paid mainly by marketplaces that integrate with other providers, or if Wise does not fully serve businesses in your country. Freelancers in Pakistan, for example, often rely on alternatives; see our guide to <a href="/blog/receive-payment-from-abroad-pakistan">receiving payments from abroad in Pakistan</a>.</p>

<h3>Common Wise Business Fee Mistakes</h3>

<ol>
<li><strong>Letting clients send wires by default</strong> when a free local transfer was possible.</li>
<li><strong>Billing in your own currency</strong> so the client's bank converts at a poor rate, which can lead to short payments.</li>
<li><strong>Converting money you will spend in the same currency later,</strong> paying two conversion fees instead of none.</li>
<li><strong>Ignoring intermediary bank deductions</strong> on Swift payments; ask clients to cover their side's charges and record any shortfall.</li>
<li><strong>Recording only net receipts,</strong> which hides the true cost of being paid.</li>
</ol>

<h2>How to Keep Wise Business Fees Low</h2>

<ol>
<li><strong>Ask clients to pay local details,</strong> such as ACH for USD, instead of wires or Swift.</li>
<li><strong>Invoice in the client's currency</strong> so the client does not pay a conversion fee at their bank and you control when to convert.</li>
<li><strong>Hold currencies you spend.</strong> Pay EUR costs from your EUR balance instead of converting twice.</li>
<li><strong>Convert in larger batches</strong> when the rate suits you; fees are percentage-based, so batching mainly saves time, but it keeps records simpler.</li>
<li><strong>Stay under the ATM allowance</strong> and avoid e-wallet top-ups with the card.</li>
<li><strong>Record fees separately</strong> so your books show gross income and the cost of receiving it.</li>
</ol>

<h2>Is Wise Business Worth It?</h2>

<p>For most businesses that invoice in more than one currency, yes. The one-time setup fee is recovered quickly if you would otherwise pay a bank's exchange spread or a platform's international fee. Wise is weakest where you need card acceptance, deep marketplace integrations or full service in a country Wise does not cover. In those cases, pair it with a card processor or use an alternative.</p>

<p>Keep your records clean either way. Record the gross invoice amount as income, Wise's receive and conversion fees as expenses, and note the exchange rate for each conversion. Wise statements show the rate and fee on every transaction, which makes this straightforward. This is general information, not tax or accounting advice.</p>

<h3>Invoicing Clients Who Pay Into Wise</h3>

<p>A good international invoice lists your Wise account holder name, account details for the client's currency, the invoice currency and total, your invoice number, and payment terms. For tax and cross-border issues, see <a href="/blog/invoice-international-clients">how to invoice international clients</a>. If you also take cards through a processor, our guide to <a href="/blog/best-payment-methods-for-small-business">payment methods for small business</a> explains how to combine them.</p>

<h2>Create an Invoice With Your Wise Account Details</h2>

<p>Wise Business fees are low and transparent: a one-time 31 USD setup, free ACH receipts, fixed fees for wires and Swift, and conversion from 0.23% at the mid-market rate. The biggest savings come from telling clients exactly how to pay. Build an invoice with your Wise details in our <a href="/invoice-generator">invoice generator</a>, or choose the <a href="/invoice-templates/nordic">Nordic invoice template</a> for a clean international look. Your finished invoice downloads as a PDF, free and with no sign-up.</p>
`,
  },
];
