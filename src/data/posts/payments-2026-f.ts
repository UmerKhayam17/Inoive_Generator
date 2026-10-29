import type { PostDraft } from "../blog";

export const PAYMENTS_2026_F_POSTS: PostDraft[] = [
  {
    slug: "paypal-goods-and-services-vs-friends-and-family",
    title: "PayPal Goods and Services vs Friends and Family: 2026 Guide",
    description:
      "PayPal goods and services vs friends and family explained: fees, buyer and seller protection, business account rules and which option to use when you get paid.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "paypal-business-vs-personal-account",
      "paypal-fees",
      "how-to-send-paypal-invoice",
      "venmo-zelle-cash-app-invoice",
      "stripe-vs-paypal",
    ],
    faqs: [
      {
        q: "What is the difference between PayPal goods and services and friends and family?",
        a: "Goods and services is for paying a seller for an item or a service. The seller pays a fee, and eligible payments are covered by PayPal Purchase Protection. Friends and family is for personal transfers such as gifts or splitting a bill. It is free in the US when funded from a bank account or PayPal balance, but PayPal states that personal payments are not covered by Purchase Protection. If money is changing hands for work, goods and services is the correct option.",
      },
      {
        q: "Who pays the fee for PayPal goods and services?",
        a: "The seller, meaning the person receiving the money. PayPal's help center says the buyer does not pay and the seller pays a fee to receive the payment. As of 2026, PayPal's US merchant fee page lists 2.99% for send and receive money for goods and services, and 3.49% plus $0.49 for PayPal Checkout and most invoice payments. International payments add a further 1.50%. You can build these costs into your prices, but check local surcharge rules first.",
      },
      {
        q: "Can a business account receive friends and family payments?",
        a: "Not from US senders. PayPal's help center states that as of July 28, 2022, US Business accounts can no longer receive friends and family payments from US senders. If you run a business account, customers must pay you through goods and services, an invoice or checkout. This is one reason freelancers who switched to a business account notice they now pay fees on every client payment they receive.",
      },
      {
        q: "Is it against PayPal rules to use friends and family for a purchase?",
        a: "Friends and family is designed for personal transfers, not purchases. PayPal tells buyers to refuse if a seller pushes them toward friends and family for goods or services, because that payment will not be covered. For sellers, asking clients to tag business payments as personal can put the account at risk and leaves you without seller protection. It also creates a messy paper trail, since the payment will not look like business income in your records.",
      },
      {
        q: "Does PayPal friends and family have any fees?",
        a: "In the US, sending friends and family money from a PayPal balance or linked bank account is free. If the sender funds it with a debit or credit card, PayPal's consumer fee page lists 2.90% plus a fixed $0.30, paid by the sender. Sending internationally adds a 5.00% international fee with a $0.99 minimum and $4.99 maximum. Currency conversion adds a separate spread on top of these fees.",
      },
      {
        q: "Can I change a payment from friends and family to goods and services?",
        a: "No. PayPal's help center says the payment type cannot be changed after the sender chooses it. If a client sent a business payment as friends and family by mistake, the usual fix is to refund it and ask them to resend it correctly, ideally by paying a PayPal invoice. If a personal payment was tagged as goods and services by mistake, contact PayPal support, which may refund the fee.",
      },
      {
        q: "Do I get a 1099-K for PayPal goods and services payments?",
        a: "Possibly. PayPal reports payments for goods and services on Form 1099-K. After the One, Big, Beautiful Bill, the IRS says the federal reporting threshold reverted to more than $20,000 and more than 200 transactions in a year, though platforms may still send forms below that and some states set lower limits. Either way, all business income must be reported on your tax return, form or no form.",
      },
      {
        q: "Should freelancers use PayPal invoices or goods and services payments?",
        a: "An invoice is usually better. A PayPal invoice records the client, the work, the due date and the amount, and the payment is automatically a commercial transaction. A bare goods and services payment only shows an amount and a note. Invoicing costs a little more in fees for some funding methods, but it gives you a clean record for bookkeeping, taxes and any later dispute about what the client actually paid for.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> In the PayPal goods and services vs friends and family choice, use goods and services whenever money is paying for work or products. The seller pays a fee (2.99% for a standard goods and services payment in the US as of 2026), but eligible payments get PayPal protection. Friends and family is free from a bank or balance, but it is meant for personal transfers and has no Purchase Protection.</p>

<p>If you are a freelancer or small business owner, the PayPal goods and services vs friends and family question is really about three things: who pays the fee, who is protected if something goes wrong, and whether your records will hold up at tax time. This guide covers all three, with current fee figures, a worked example and a clear rule for when each option fits. If you prefer to bill with a proper document first, you can create one in our <a href="/invoice-generator">free invoice generator</a> and add your PayPal payment link to it.</p>

<h2>Goods and Services vs Friends and Family at a Glance</h2>

<p>PayPal's own help center splits payments into two types. "Sending to a friend" is for the everyday exchange of money between friends and family, such as gifts or splitting a dinner bill. "Paying for an item or service" is for purchases, from an online order to a design project. The table below summarises how they differ for a US account as of 2026.</p>

<table>
<thead>
<tr><th>Feature</th><th>Goods and services</th><th>Friends and family</th></tr>
</thead>
<tbody>
<tr><td>Intended use</td><td>Paying for goods, services, invoices</td><td>Gifts, shared bills, personal transfers</td></tr>
<tr><td>Who pays the fee</td><td>Seller (receiver)</td><td>Sender, only if funded by card</td></tr>
<tr><td>Standard US fee</td><td>2.99% for send and receive for goods and services</td><td>Free from bank or balance; 2.90% + $0.30 if card-funded</td></tr>
<tr><td>International add-on</td><td>+1.50%</td><td>+5.00% (min $0.99, max $4.99)</td></tr>
<tr><td>Buyer protection</td><td>Eligible payments covered by Purchase Protection</td><td>Not covered</td></tr>
<tr><td>Seller protection</td><td>Available on eligible transactions</td><td>Not applicable</td></tr>
<tr><td>US Business accounts can receive it</td><td>Yes</td><td>No (since July 28, 2022, from US senders)</td></tr>
<tr><td>Reported on Form 1099-K</td><td>Yes, when thresholds are met</td><td>Generally no, as it is not a goods or services payment</td></tr>
</tbody>
</table>

<p>Figures come from PayPal's US merchant and consumer fee pages as of October 2026. PayPal can change fees, so check the live pages before you set prices. Our deeper breakdown of <a href="/blog/paypal-fees">PayPal fees</a> covers every transaction type, not just these two.</p>

<h2>How PayPal Goods and Services Works</h2>

<p>When a buyer chooses "Paying for an item or service", the payment is treated as a commercial transaction. The buyer pays nothing extra on a standard domestic payment, and the seller receives the amount minus PayPal's fee.</p>

<h3>Goods and services fees in 2026</h3>

<p>PayPal's US merchant fees page lists several rates that fall under the goods and services umbrella. Which one applies depends on how the money arrives:</p>

<ul>
<li><strong>Send and receive money for goods and services:</strong> 2.99%, no fixed fee listed.</li>
<li><strong>PayPal Checkout and invoices paid with PayPal, Venmo or guest checkout:</strong> 3.49% plus a fixed fee of $0.49.</li>
<li><strong>Invoices paid by standard credit or debit card, Apple Pay or third-party wallets:</strong> 2.99% plus $0.49.</li>
<li><strong>Invoices paid by bank (ACH):</strong> 1%, capped at $10 per transaction.</li>
<li><strong>International commercial transactions:</strong> an additional 1.50%.</li>
</ul>

<p>That last invoice option is worth noting. For a large invoice, a client paying by bank through a PayPal invoice costs you a maximum of $10, far less than a percentage fee. If you invoice through PayPal, our guide on <a href="/blog/how-to-send-paypal-invoice">how to send a PayPal invoice</a> walks through the setup.</p>

<h3>What protection you get</h3>

<p>PayPal says it covers eligible goods and services payments under PayPal Purchase Protection. For the buyer, that means a route to a refund if an item never arrives or is significantly not as described. For sellers, eligible transactions can qualify for Seller Protection, which matters most if you ship physical goods. Service businesses should still keep a signed scope, delivery evidence and an invoice, because disputes over intangible services are judged on the evidence you can show.</p>

<h2>How PayPal Friends and Family Works</h2>

<p>Friends and family payments are personal transfers. In the US, sending them from a PayPal balance or linked bank account is free. If the sender uses a card, PayPal's consumer fee page lists 2.90% plus a fixed fee of $0.30, and the sender pays it. International personal transfers add a 5.00% international fee with a $0.99 minimum and $4.99 maximum.</p>

<p>The trade-off is protection. PayPal's help center states plainly that "personal payments aren't covered by PayPal Purchase Protection." Its scam guidance tells buyers that if a seller is encouraging a friends and family payment for goods or services, they should refuse. That is a strong signal: friends and family is not a fee-saving trick for business, it is a different product.</p>

<h3>Business accounts cannot receive it</h3>

<p>PayPal's help center confirms that as of July 28, 2022, US Business accounts can no longer receive friends and family payments from US senders. If you have upgraded to a business account, every client payment you receive is a commercial transaction with a fee. That is normal and expected: the fee is a cost of doing business, like card processing at a shop counter.</p>

<h2>Worked Example: What a $1,200 Client Payment Really Costs</h2>

<p>Here is how the PayPal goods and services vs friends and family decision plays out on a single $1,200 project payment from a US client to a US freelancer. All rates are PayPal's published US rates as of October 2026.</p>

<table>
<thead>
<tr><th>How the client pays</th><th>Fee calculation</th><th>Fee</th><th>You receive</th></tr>
</thead>
<tbody>
<tr><td>Goods and services payment</td><td>$1,200 × 2.99%</td><td>$35.88</td><td>$1,164.12</td></tr>
<tr><td>PayPal invoice, paid with PayPal balance</td><td>($1,200 × 3.49%) + $0.49 = $41.88 + $0.49</td><td>$42.37</td><td>$1,157.63</td></tr>
<tr><td>PayPal invoice, paid by credit card</td><td>($1,200 × 2.99%) + $0.49 = $35.88 + $0.49</td><td>$36.37</td><td>$1,163.63</td></tr>
<tr><td>PayPal invoice, paid by bank (ACH)</td><td>$1,200 × 1% = $12, capped at $10</td><td>$10.00</td><td>$1,190.00</td></tr>
<tr><td>Goods and services from a UK client</td><td>$1,200 × (2.99% + 1.50%) = $1,200 × 4.49%</td><td>$53.88</td><td>$1,146.12</td></tr>
<tr><td>Friends and family from a bank (personal account)</td><td>No fee</td><td>$0.00</td><td>$1,200.00, with no protection</td></tr>
</tbody>
</table>

<p>The cheapest commercial route here is a bank payment through a PayPal invoice, saving $25.88 compared with a standard goods and services payment. The "free" friends and family route saves $35.88 but removes buyer protection, is not available at all on a business account, and blurs the line between personal and business income. For most freelancers that is a poor trade for under 3% of the invoice.</p>

<p>If you want to compare these costs with card processors outside PayPal, see our <a href="/blog/stripe-fees">Stripe fees guide</a>, and for app-based alternatives, our breakdown of <a href="/blog/venmo-business-fees">Venmo business fees</a>.</p>

<h2>Which Option Should You Use? A Simple Decision Process</h2>

<ol>
<li><strong>Ask what the money is for.</strong> If it pays for work, a product, a deposit or a subscription, it is goods and services. If it is a gift, a loan repayment between family members or your share of a shared bill, it is friends and family.</li>
<li><strong>Check your account type.</strong> A US Business account cannot receive friends and family from US senders, so the decision is made for you.</li>
<li><strong>Prefer an invoice over a bare payment.</strong> Create an invoice with your business details, line items and due date, then add a PayPal link. Our guide on how to <a href="/blog/add-payment-link-to-invoice">add a payment link to an invoice</a> shows the layout.</li>
<li><strong>Offer a low-fee route for big invoices.</strong> For larger amounts, let clients pay by bank through the invoice, or list direct <a href="/blog/bank-details-on-invoice">bank details on the invoice</a> as an alternative.</li>
<li><strong>Price the fee in, honestly.</strong> Build expected processing costs into your rates rather than asking clients to mislabel payments. If you want to pass a fee on as a separate line, read our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> first.</li>
<li><strong>Record every payment against an invoice.</strong> Match each PayPal payment to its invoice number so your books and your 1099-K reconcile cleanly.</li>
</ol>

<h2>Tax Reporting: Why the Payment Type Matters</h2>

<p>PayPal is a third party settlement organization, so it issues Form 1099-K for payments for goods and services that meet the federal threshold. In its 2025 FAQ on the One, Big, Beautiful Bill, the IRS confirms the threshold reverted to the pre-2021 level: more than $20,000 in gross payments and more than 200 transactions in a calendar year. See the <a href="https://www.irs.gov/newsroom/irs-issues-faqs-on-form-1099-k-threshold-under-the-one-big-beautiful-bill-dollar-limit-reverts-to-20000" target="_blank" rel="noopener noreferrer">IRS guidance on the Form 1099-K threshold</a> for details.</p>

<p>Two practical points follow. First, platforms may still send a 1099-K below the federal threshold, and some states use lower limits. Second, the threshold only controls reporting: all business income is taxable whether or not a form arrives. Having clients send business payments as friends and family does not make income non-taxable; it just makes your records harder to defend. This is general information, not tax advice; speak to a tax professional about your situation.</p>

<p>Keeping a numbered invoice for every PayPal payment is the easiest way to stay organised. Our <a href="/tools/invoice-number-generator">invoice number generator</a> can help you set up a consistent sequence.</p>

<h2>Common Mistakes Freelancers Make With PayPal Payments</h2>

<ul>
<li><strong>Asking clients to "send it as friends and family."</strong> It saves a few percent but strips protection from both sides and can breach the purpose of the product.</li>
<li><strong>Taking payments with no invoice.</strong> A note that says "website" is not a record. An invoice with dates, scope and amounts is.</li>
<li><strong>Forgetting the international add-on.</strong> The extra 1.50% on cross-border payments, plus any currency conversion spread, can push total costs well above 4%. Compare alternatives in our <a href="/blog/wise-vs-paypal">Wise vs PayPal</a> guide.</li>
<li><strong>Mixing personal and business money.</strong> Run client payments through a business account and keep personal transfers on a separate personal account.</li>
<li><strong>Not following up unpaid PayPal invoices.</strong> A polite, scheduled reminder works. Our <a href="/blog/payment-reminder-emails">payment reminder email templates</a> are ready to copy.</li>
</ul>

<h2>How to Ask a Client to Pay With Goods and Services</h2>

<p>Some clients default to friends and family because it is what they use with friends, or because they want to save you the fee. A short, friendly line on your invoice or in your email settles it before money moves. For example:</p>

<ul>
<li>"Please pay using the PayPal link on this invoice, or choose 'Paying for an item or service' if sending directly. This keeps the payment covered for both of us."</li>
<li>"PayPal payments to our business account must be sent as goods and services. Bank transfer details are also listed below if you prefer."</li>
</ul>

<p>If a client sends a business payment the wrong way, do not quietly keep it. Refund it and ask them to resend through the invoice, so the payment carries the right protection and lines up with your records. Put the same instruction in the payment terms section of every invoice so you only have to explain it once. Clear wording also reduces back-and-forth emails, which is often the real cause of slow payment rather than the client's reluctance to pay.</p>

<h2>What About Venmo, Zelle and Other Apps?</h2>

<p>The same logic applies across payment apps. Venmo, which PayPal owns, has a business profile with its own seller fee, and personal Venmo payments tagged for goods and services carry a seller fee too. Zelle has no purchase protection for business payments sent between consumers. If you take payments across several apps, our guide to invoicing with <a href="/blog/venmo-zelle-cash-app-invoice">Venmo, Zelle and Cash App</a> explains how to keep one clean record. For a processor comparison, see <a href="/blog/stripe-vs-paypal">Stripe vs PayPal</a>.</p>

<h2>Create Your Invoice Before You Get Paid</h2>

<p>The bottom line on PayPal goods and services vs friends and family: if a payment is for work or products, use goods and services or a PayPal invoice, accept the fee as a business cost, and keep the protection and the clean record. Save friends and family for genuine personal transfers. Start every client payment with a professional invoice from our <a href="/invoice-generator">free invoice generator</a>, then attach your PayPal link so the client pays the right way the first time.</p>
`,
  },
  {
    slug: "stripe-fees",
    title: "Stripe Fees 2026: Card, Invoicing and International Costs",
    description:
      "Stripe fees in 2026 explained: 2.9% + 30¢ card rate, Stripe Invoicing fee, international card fee, ACH, disputes and payouts, with a worked invoice example.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "credit-card-processing-fees",
      "stripe-invoicing-guide",
      "stripe-vs-paypal",
      "stripe-vs-square",
      "how-to-accept-credit-card-payments",
    ],
    faqs: [
      {
        q: "How much does Stripe charge per transaction in 2026?",
        a: "Stripe's standard US pricing as of 2026 is 2.9% plus 30 cents per successful domestic card transaction. International cards add 1.5%, and a further 1% applies if currency conversion is needed. Manually entered cards add 0.5%. There are no setup or monthly fees on standard pricing, so you only pay when a payment succeeds. Businesses with large volumes can ask Stripe about custom pricing.",
      },
      {
        q: "What is the Stripe invoicing fee?",
        a: "Stripe Invoicing charges 0.4% per paid invoice on the Starter plan and 0.5% per paid invoice on the Plus plan, which also includes quotes. Stripe says Invoicing has no fixed fees or setup costs, but normal Stripe Payments pricing applies on top. So a card-paid invoice costs the card fee (2.9% + 30 cents domestic) plus the invoicing percentage.",
      },
      {
        q: "What is Stripe's international card fee?",
        a: "Stripe adds 1.5% to the standard rate for international cards, meaning cards issued outside your Stripe account's country. If the payment also needs currency conversion, Stripe adds another 1%. For a US business, a foreign card that needs conversion would cost 2.9% + 1.5% + 1% = 5.4% plus 30 cents. Invoicing clients in your own currency can avoid the conversion portion.",
      },
      {
        q: "How much does Stripe charge for ACH payments?",
        a: "Stripe's US pricing page lists ACH Direct Debit at 0.8%, capped at $5.00 per payment. That cap makes ACH much cheaper than cards on larger invoices. Any invoice above $625 hits the cap, because 0.8% of $625 is exactly $5. ACH payments take longer to settle than cards, so they suit B2B invoices where speed matters less than cost.",
      },
      {
        q: "Does Stripe charge a fee for disputes or chargebacks?",
        a: "Yes. Stripe's pricing page lists a $15 dispute fee for each dispute received, plus a separate $15 fee if you counter the dispute manually. Stripe states the countered fee is returned if you win the dispute. Clear invoices, signed scopes and delivery records reduce disputes and improve your chances of winning the ones you do receive.",
      },
      {
        q: "Does Stripe refund fees on refunds?",
        a: "Stripe's pricing page does not promise to return the processing fee when you refund a customer, and many businesses find the original fee is kept. Check your Dashboard for how refunds show on your account. Because of this, issuing partial credits or a credit note on a future invoice can sometimes be cheaper than refunding a card payment and charging it again.",
      },
      {
        q: "How much do Stripe Instant Payouts cost?",
        a: "Stripe lists Instant Payouts in the US at 1.5% of the payout amount with a 50-cent minimum. Standard payouts on Stripe's normal schedule are free. Instant Payouts are useful in a cash crunch, but on a $5,000 payout the fee is $75, so most businesses keep standard payouts and plan cash flow around them instead.",
      },
      {
        q: "Can I pass Stripe fees on to my customers?",
        a: "Sometimes. Many businesses simply build processing costs into their prices. Adding a surcharge to card payments is restricted by card network rules and, in some US states, by state law, and surcharges generally cannot apply to debit cards. Offering a cheaper payment method, such as ACH, or a small discount for paying by bank is often simpler and more client-friendly than a surcharge.",
      },
      {
        q: "Is Stripe cheaper than PayPal?",
        a: "For typical US card payments, Stripe's 2.9% + 30 cents is lower than PayPal's 3.49% + 49 cents for PayPal Checkout, and close to PayPal's 2.99% + 49 cents for standard cards on invoices. PayPal has the advantage that many buyers already have accounts. For bank payments, Stripe ACH (0.8%, $5 cap) and PayPal invoice bank payments (1%, $10 cap) are both cheap on large invoices.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Stripe fees in the US as of 2026 start at 2.9% + 30¢ per successful domestic card payment. International cards add 1.5%, currency conversion adds 1%, and Stripe Invoicing adds 0.4% per paid invoice (Starter). ACH Direct Debit costs 0.8% capped at $5. Disputes cost $15, and Instant Payouts cost 1.5%.</p>

<p>Stripe fees are simple on the surface, but the real cost of a payment depends on how the client pays, where their card was issued and whether you send the bill through Stripe Invoicing. This guide breaks down every Stripe fee a small business or freelancer is likely to meet, shows a worked example with real arithmetic, and explains how to keep the total down. If you want to bill first and collect through Stripe afterwards, you can build the invoice in our <a href="/invoice-generator">free invoice generator</a> and add your payment link.</p>

<h2>Stripe Fees at a Glance (US, 2026)</h2>

<p>The table lists Stripe's standard US pricing as published on its pricing page in October 2026. Stripe also offers custom pricing for large volumes, and other countries have different rates.</p>

<table>
<thead>
<tr><th>Fee</th><th>Standard US rate</th><th>When it applies</th></tr>
</thead>
<tbody>
<tr><td>Domestic card payment</td><td>2.9% + 30¢</td><td>Every successful payment by a US-issued card</td></tr>
<tr><td>International card</td><td>+1.5%</td><td>Card issued outside the US</td></tr>
<tr><td>Currency conversion</td><td>+1%</td><td>Charge currency differs from your payout currency</td></tr>
<tr><td>Manually entered card</td><td>+0.5%</td><td>Card keyed in rather than entered by the customer</td></tr>
<tr><td>ACH Direct Debit</td><td>0.8%, capped at $5.00</td><td>Bank debit payments</td></tr>
<tr><td>Stripe Invoicing, Starter</td><td>0.4% per paid invoice</td><td>Invoices sent through Stripe Invoicing</td></tr>
<tr><td>Stripe Invoicing, Plus</td><td>0.5% per paid invoice</td><td>Plus plan, which includes quotes</td></tr>
<tr><td>Dispute received</td><td>$15.00</td><td>Each chargeback filed</td></tr>
<tr><td>Dispute countered</td><td>$15.00 (returned if you win)</td><td>When you respond to a dispute manually</td></tr>
<tr><td>Instant Payouts</td><td>1.5% of payout, 50¢ minimum</td><td>Optional faster payouts; standard payouts are free</td></tr>
</tbody>
</table>

<p>Stripe can change these rates, so confirm them on the <a href="https://stripe.com/pricing" target="_blank" rel="noopener noreferrer">Stripe pricing page</a> before you set your own prices.</p>

<h2>Stripe Card Processing Fees Explained</h2>

<p>The core Stripe fee is 2.9% of the payment plus a fixed 30 cents. The percentage scales with the payment size, while the 30 cents matters most on small transactions. On a $10 payment, the fixed fee alone is 3% of the total; on a $1,000 payment it is 0.03%.</p>

<p>There are no setup fees, monthly fees or minimums on standard pricing. You only pay when a payment succeeds. That is one of the reasons small businesses choose a payment processor like Stripe over a traditional merchant account; our guide to <a href="/blog/merchant-account-vs-payment-processor">merchant accounts vs payment processors</a> explains the trade-off.</p>

<h3>Manual card entry</h3>

<p>If you type a client's card number into your Dashboard instead of letting them pay through a checkout page or invoice, Stripe adds 0.5%. Sending a payment link or invoice avoids this and is safer, because you never handle the card number yourself.</p>

<h3>Effective Stripe fee rates on small vs large payments</h3>

<p>Because of the fixed 30 cents, the effective percentage you pay falls as payments get larger. ACH works the other way round on big invoices, because the $5 cap kicks in. The table uses Stripe's published US rates as of October 2026.</p>

<table>
<thead>
<tr><th>Payment amount</th><th>Domestic card fee</th><th>Effective card rate</th><th>ACH fee (0.8%, $5 cap)</th><th>Effective ACH rate</th></tr>
</thead>
<tbody>
<tr><td>$10</td><td>$0.29 + $0.30 = $0.59</td><td>5.9%</td><td>$0.08</td><td>0.8%</td></tr>
<tr><td>$100</td><td>$2.90 + $0.30 = $3.20</td><td>3.2%</td><td>$0.80</td><td>0.8%</td></tr>
<tr><td>$1,000</td><td>$29.00 + $0.30 = $29.30</td><td>2.93%</td><td>$8.00, capped at $5.00</td><td>0.5%</td></tr>
<tr><td>$10,000</td><td>$290.00 + $0.30 = $290.30</td><td>2.90%</td><td>$80.00, capped at $5.00</td><td>0.05%</td></tr>
</tbody>
</table>

<p>Two practical conclusions follow. If you sell low-priced items, the fixed fee is your biggest cost, so a minimum order value or bundled pricing helps. If you send large B2B invoices, steering clients to ACH can cut your processing cost to a fraction of a percent. On a $10,000 invoice the difference between card and ACH is $285.30, which is often more than a client would expect you to absorb. Many businesses accept cards for convenience on small invoices and list ACH as the preferred method above a set amount, such as $1,000, on their payment terms.</p>

<h2>Stripe Invoicing Fee: What You Pay on Top</h2>

<p>Stripe Invoicing is a separate product for sending invoices with a hosted payment page, reminders and automatic reconciliation. Stripe's invoicing pricing page lists two plans:</p>

<ul>
<li><strong>Starter:</strong> 0.4% per paid invoice.</li>
<li><strong>Plus:</strong> 0.5% per paid invoice, including quotes.</li>
</ul>

<p>Stripe states that Invoicing "has no fixed fees or setup costs, but Stripe Payments pricing will apply." In other words, the invoicing fee stacks on top of the card or ACH fee. You only pay it when the invoice is paid. See <a href="https://stripe.com/invoicing/pricing" target="_blank" rel="noopener noreferrer">Stripe's invoicing pricing</a> for current plan details, and our <a href="/blog/stripe-invoicing-guide">Stripe invoicing guide</a> for the setup steps.</p>

<p>An alternative many freelancers use is to create the invoice elsewhere and include a Stripe Payment Link. You pay the normal payment fee but not the Invoicing percentage, although you lose Stripe's automatic invoice tracking.</p>

<h2>Stripe International Card Fee and Currency Conversion</h2>

<p>Selling to clients abroad is where Stripe fees climb. A US Stripe account pays an extra 1.5% when the card was issued outside the US, and another 1% if the charge needs converting to your payout currency. Stacked together, an international card with conversion costs 2.9% + 1.5% + 1% = 5.4% plus 30 cents.</p>

<p>Two ways to reduce this:</p>

<ul>
<li><strong>Invoice in your own currency.</strong> If you bill a UK client in US dollars, the conversion usually happens on the client's side, so you avoid Stripe's 1% conversion fee, although the 1.5% international card fee still applies.</li>
<li><strong>Offer a bank transfer option.</strong> For larger cross-border invoices, an international bank transfer or a multi-currency account can be cheaper. Our guide to <a href="/blog/cross-border-payment-fees">cross-border payment fees</a> compares the options, and our post on <a href="/blog/how-long-does-a-wire-transfer-take">how long a wire transfer takes</a> covers the timing.</li>
</ul>

<h2>Worked Example: Stripe Fees on a $2,500 Invoice</h2>

<p>A US web developer sends a $2,500 invoice through Stripe Invoicing on the Starter plan. Here is what the client's payment method does to the cost, using Stripe's published October 2026 rates.</p>

<table>
<thead>
<tr><th>Scenario</th><th>Payment fee</th><th>Invoicing fee (0.4%)</th><th>Total fee</th><th>You receive</th></tr>
</thead>
<tbody>
<tr><td>US card</td><td>($2,500 × 2.9%) + $0.30 = $72.50 + $0.30 = $72.80</td><td>$10.00</td><td>$82.80</td><td>$2,417.20</td></tr>
<tr><td>Foreign card, billed in USD</td><td>$72.80 + ($2,500 × 1.5%) = $72.80 + $37.50 = $110.30</td><td>$10.00</td><td>$120.30</td><td>$2,379.70</td></tr>
<tr><td>Foreign card, needs conversion</td><td>$110.30 + ($2,500 × 1%) = $110.30 + $25.00 = $135.30</td><td>$10.00</td><td>$145.30</td><td>$2,354.70</td></tr>
<tr><td>ACH Direct Debit</td><td>$2,500 × 0.8% = $20.00, capped at $5.00</td><td>$10.00</td><td>$15.00</td><td>$2,485.00</td></tr>
</tbody>
</table>

<p>Two lessons stand out. First, on a domestic invoice of this size, ACH saves $67.80 compared with a card. Second, an international card with conversion costs almost $63 more than a domestic card on the same invoice. If the developer then chose an Instant Payout of the ACH proceeds, Stripe's 1.5% fee would add $2,485 × 1.5% = $37.275, rounded to $37.28, which wipes out more than half of the ACH saving. Standard payouts are free.</p>

<h2>Other Stripe Fees to Know</h2>

<h3>Disputes and chargebacks</h3>

<p>Stripe charges $15 when a dispute is received, and another $15 if you counter it manually. The countered fee is returned for won disputes only. The best defence is a paper trail: an invoice that names the deliverables, a signed scope, and proof of delivery. Our <a href="/blog/statement-of-work-template">statement of work template</a> helps you define the work up front.</p>

<h3>Payouts</h3>

<p>Standard payouts to your bank account are free and follow Stripe's payout schedule. Instant Payouts cost 1.5% of the payout with a 50-cent minimum in the US. Treat Instant Payouts as an emergency tool rather than a habit.</p>

<h3>Refunds</h3>

<p>Stripe's pricing page does not promise to return the original processing fee when you refund a payment, so plan as if a refund costs you the fee you already paid. For partial adjustments, a credit on the next invoice is often cheaper; see our <a href="/blog/credit-note-guide">credit note guide</a>.</p>

<h2>How to Reduce Your Stripe Fees: 7 Steps</h2>

<ol>
<li><strong>Turn on ACH for large invoices.</strong> With a $5 cap, ACH costs the same on a $700 invoice as on a $70,000 one. Our guide on <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a> covers the setup.</li>
<li><strong>Bill international clients in your currency</strong> where your contract allows, to avoid the 1% conversion fee.</li>
<li><strong>Use payment links instead of keying cards</strong> to avoid the 0.5% manual entry surcharge.</li>
<li><strong>Decide whether you need Stripe Invoicing.</strong> If you already create invoices elsewhere, a Payment Link can avoid the 0.4% invoicing fee.</li>
<li><strong>Use deposits and milestones.</strong> Splitting work into milestone payments does not cut percentage fees, but it reduces the risk of a large disputed charge.</li>
<li><strong>Avoid Instant Payouts</strong> by keeping a small cash buffer instead.</li>
<li><strong>Price fees in transparently.</strong> If you want to add a card surcharge, check the <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> first, or offer a small discount for paying by bank instead.</li>
</ol>

<h2>Stripe Fees vs PayPal and Square</h2>

<p>For standard US card payments, Stripe's 2.9% + 30¢ sits below PayPal Checkout's 3.49% + 49¢ and close to PayPal's 2.99% + 49¢ rate for cards on invoices, according to each company's published US pricing as of 2026. PayPal's advantage is that many buyers already hold PayPal accounts. Our full comparisons, <a href="/blog/stripe-vs-paypal">Stripe vs PayPal</a> and <a href="/blog/stripe-vs-square">Stripe vs Square</a>, go deeper. If you are weighing personal payment apps, compare <a href="/blog/paypal-goods-and-services-vs-friends-and-family">PayPal goods and services vs friends and family</a> and our breakdown of <a href="/blog/venmo-business-fees">Venmo business fees</a>.</p>

<h2>Recording Stripe Fees in Your Books</h2>

<p>Stripe deposits the net amount, not the invoice total. To keep your books accurate, record the full invoice amount as income and the Stripe fee as a separate expense (often categorised as merchant or bank fees). That way your revenue matches your invoices, and the fee is a deductible business cost. Matching each payout to the invoices it contains is called cash application; our guide to <a href="/blog/bank-reconciliation">bank reconciliation</a> shows how to do it monthly.</p>

<p>Using the US card scenario from the worked example above, the entries look like this:</p>

<ul>
<li>Invoice issued: accounts receivable $2,500, sales income $2,500.</li>
<li>Payment received in Stripe: Stripe clearing balance $2,417.20, Stripe fees expense $82.80, accounts receivable cleared by $2,500.</li>
<li>Payout to bank: bank account $2,417.20, Stripe clearing balance reduced by $2,417.20.</li>
</ul>

<p>Check: $2,417.20 + $82.80 = $2,500, so the invoice is fully settled and the fee is visible as its own cost line. When a payout covers several invoices, list each invoice and its fee in the payout report before you post it, so a single deposit never hides a short payment.</p>

<h2>Create a Stripe-Ready Invoice</h2>

<p>Stripe fees are predictable once you know the layers: 2.9% + 30¢ for domestic cards, extra for international cards and conversion, 0.4% for Stripe Invoicing, and a capped 0.8% for ACH. Give clients a low-cost bank option for large bills and keep cards for convenience. Build a clear, numbered invoice in our <a href="/invoice-generator">free invoice generator</a>, pick a clean design from our <a href="/invoice-templates/modern">modern invoice template</a>, and add your Stripe payment link so clients can pay in one click.</p>
`,
  },
  {
    slug: "venmo-business-fees",
    title: "Venmo Business Account Fees 2026: Rates and Real Costs",
    description:
      "Venmo business account fees for 2026: the 1.9% + 10¢ seller fee, Tap to Pay, instant transfers, refunds and 1099-K rules, with a worked monthly example.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "cash-app-business-fees",
      "venmo-zelle-cash-app-invoice",
      "paypal-fees",
      "square-invoice-fees",
      "add-payment-link-to-invoice",
    ],
    faqs: [
      {
        q: "How much does a Venmo business account cost?",
        a: "Creating a Venmo business profile has no setup or monthly fee. You pay a seller transaction fee when customers pay you: Venmo's fee page lists 1.9% plus 10 cents per payment for standard business profile payments as of 2026. Tap to Pay in-person payments cost 2.29% plus a small fixed fee of around 10 cents. Standard transfers to your bank are free, while instant transfers cost 1.75%.",
      },
      {
        q: "What is the Venmo business fee on a $100 payment?",
        a: "At 1.9% plus 10 cents, a $100 payment costs $1.90 plus $0.10, which is $2.00. You receive $98.00. Venmo deducts the fee from the amount your customer sends, so the customer pays $100 and the fee comes out of your side. If you then move the money to your bank by instant transfer, a further 1.75% applies to the transfer amount.",
      },
      {
        q: "Does Venmo refund business fees when I refund a customer?",
        a: "No. Venmo's help center says it is not able to refund business profile seller fees. If you refund a $100 sale, you send the customer the full amount but the $2.00 fee you paid on the original payment is gone. For that reason, it is worth confirming the order, scope and price before a customer pays, especially for custom or deposit-based work.",
      },
      {
        q: "Is a Venmo business profile cheaper than goods and services on a personal account?",
        a: "Usually, yes. Venmo's fee page lists 2.99% for payments tagged as goods and services on a personal profile, compared with 1.9% plus 10 cents on a business profile. On a $50 payment, that is $1.50 versus $1.05. The business profile also separates business income from personal payments, which makes bookkeeping and tax reporting much cleaner.",
      },
      {
        q: "How much does a Venmo instant transfer cost?",
        a: "Venmo charges 1.75% of the amount transferred, with a minimum fee of 25 cents and a maximum of $25. Because of the cap, any instant transfer above about $1,428.57 costs a flat $25. Standard transfers to a bank are free and, according to Venmo's help center, typically complete within one business day, though they can take up to three business days.",
      },
      {
        q: "Do Venmo business fees apply to small payments?",
        a: "Venmo says business profile owners are charged the seller fee on every payment of $1.00 or more. On small payments, the fixed 10 cents makes up a bigger share: a $5 payment costs $0.095 plus $0.10, or about $0.20, which is roughly 4% of the sale. If you sell many low-priced items, factor that effective rate into your prices.",
      },
      {
        q: "Will I get a 1099-K from Venmo?",
        a: "Venmo issues Form 1099-K for payments for goods and services when federal or state reporting thresholds are met. The IRS says the federal threshold reverted to more than $20,000 and more than 200 transactions in a year after the One, Big, Beautiful Bill. Platforms may still send forms below that, some states use lower limits, and all business income must be reported regardless.",
      },
      {
        q: "Can customers pay my Venmo business profile with a credit card?",
        a: "Yes. Venmo's help center says customers paying a business profile with a credit card are exempt from the standard 3% fee Venmo normally charges senders who use a credit card. That makes paying a business profile with a credit card free for the customer, while you pay the usual 1.9% plus 10 cents seller fee on the payment.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> Venmo business account fees in 2026 are 1.9% + $0.10 per payment received through a business profile, 2.29% plus roughly 10 cents for Tap to Pay, and 1.75% (min $0.25, max $25) for instant transfers to your bank. There is no setup or monthly fee, standard bank transfers are free, and Venmo does not refund seller fees on refunds.</p>

<p>Venmo is one of the most familiar payment apps in the United States, which makes it a natural way for small businesses, side hustles and freelancers to get paid. But Venmo business account fees work differently from personal payments. This guide explains every fee on a Venmo business profile, compares it with other options, and walks through a worked monthly example. If you bill clients before they pay, create the bill in our <a href="/invoice-generator">free invoice generator</a> and add your Venmo handle or QR code to it.</p>

<h2>Venmo Business Account Fees at a Glance</h2>

<p>The table lists the main fees from Venmo's fee page and help center as of October 2026. Venmo can change fees at any time, so confirm them on the <a href="https://venmo.com/resources/our-fees/" target="_blank" rel="noopener noreferrer">Venmo fees page</a> before you set prices.</p>

<table>
<thead>
<tr><th>Fee</th><th>Rate</th><th>Who pays</th></tr>
</thead>
<tbody>
<tr><td>Business profile setup or monthly fee</td><td>None</td><td>n/a</td></tr>
<tr><td>Payments received on a business profile</td><td>1.9% + $0.10 per payment of $1.00 or more</td><td>Business</td></tr>
<tr><td>Tap to Pay (in person, contactless)</td><td>2.29% + about $0.10 (Venmo's pages list $0.09 and $0.10)</td><td>Business</td></tr>
<tr><td>Goods and services payment on a personal profile</td><td>2.99%</td><td>Seller</td></tr>
<tr><td>Standard transfer to bank</td><td>Free</td><td>n/a</td></tr>
<tr><td>Instant transfer to bank or card</td><td>1.75%, min $0.25, max $25</td><td>Business</td></tr>
<tr><td>Customer paying a business with a credit card</td><td>No sender fee (normally 3%)</td><td>n/a</td></tr>
<tr><td>Refund of seller fee when you refund a sale</td><td>Not refunded</td><td>Business absorbs</td></tr>
</tbody>
</table>

<h2>How the Venmo Business Seller Fee Works</h2>

<p>When a customer pays your business profile directly from their Venmo account, Venmo deducts a seller transaction fee of 1.9% of the payment plus 10 cents. Venmo's help article on <a href="https://help.venmo.com/hc/en-us/articles/1500003204302" target="_blank" rel="noopener noreferrer">business profile fees</a> confirms three important details:</p>

<ul>
<li>The fee is charged to the merchant, not the customer, in line with industry standards.</li>
<li>It applies to every payment of $1.00 or more.</li>
<li>Venmo is not able to refund these fees, even if you refund the customer.</li>
</ul>

<p>Because the fee comes out of the payment, a customer who sends $100 pays exactly $100, and you receive $98.00. That is easier for customers than a checkout that adds a surcharge, but it means you should build the fee into your prices.</p>

<h3>The fixed 10 cents matters on small sales</h3>

<p>On large payments, the 10-cent fixed fee is negligible. On small ones, it adds up. A $5 coffee costs $0.095 in percentage fee plus $0.10, about $0.20 in total, which is roughly 4% of the sale. A $500 payment costs $9.50 + $0.10 = $9.60, which is about 1.92%. If you run a food truck or a market stall, your effective rate will be well above 1.9%.</p>

<h2>Tap to Pay and In-Person Venmo Fees</h2>

<p>Venmo business profiles can accept contactless payments with Tap to Pay on a compatible phone. Venmo's help center lists the Tap to Pay rate as 2.29% + $0.10, while its fee page lists 2.29% + $0.09, so plan for roughly 2.29% plus 10 cents. That is higher than a direct Venmo payment, because the customer may be tapping a card rather than paying from a Venmo balance.</p>

<p>If you take many in-person card payments, compare this with a dedicated card reader. Our guides to <a href="/blog/square-invoice-fees">Square invoice fees</a> and <a href="/blog/how-to-accept-credit-card-payments">how to accept credit card payments</a> set out the alternatives, and <a href="/blog/apple-pay-google-pay-business">Apple Pay and Google Pay for business</a> covers phone wallets.</p>

<h2>Venmo Transfer Fees: Standard vs Instant</h2>

<p>Money received on Venmo sits in your Venmo balance until you move it. You have two choices:</p>

<ul>
<li><strong>Standard transfer:</strong> free. Venmo's help center says standard transfers typically complete within one business day but can take up to three. Transfers started after 7 p.m. ET on a weekday, or on a weekend or holiday, start processing the next business day.</li>
<li><strong>Instant transfer:</strong> 1.75% of the amount, with a $0.25 minimum and a $25 maximum, deducted from the transfer.</li>
</ul>

<p>The $25 cap means instant transfers above $1,428.57 all cost the same $25, because 1.75% of $1,428.57 is $25.00. If you need cash fast, one large instant transfer is cheaper than several small ones. If you can wait a day, standard transfers cost nothing.</p>

<h2>Worked Example: One Month of Venmo Business Fees</h2>

<p>A mobile dog groomer uses a Venmo business profile for most payments. In one month she receives 60 direct Venmo payments averaging $50 each, plus 10 Tap to Pay payments of $80 each. She moves her money to the bank in one instant transfer at month end.</p>

<table>
<thead>
<tr><th>Item</th><th>Calculation</th><th>Fee</th></tr>
</thead>
<tbody>
<tr><td>Direct Venmo payments: $3,000 total</td><td>($3,000 × 1.9%) + (60 × $0.10) = $57.00 + $6.00</td><td>$63.00</td></tr>
<tr><td>Tap to Pay payments: $800 total</td><td>($800 × 2.29%) + (10 × $0.10) = $18.32 + $1.00</td><td>$19.32</td></tr>
<tr><td>Total seller fees</td><td>$63.00 + $19.32</td><td>$82.32</td></tr>
<tr><td>Balance after seller fees</td><td>$3,800 − $82.32</td><td>$3,717.68</td></tr>
<tr><td>Instant transfer of $3,717.68</td><td>1.75% would be $65.06, capped at $25</td><td>$25.00</td></tr>
<tr><td>Total fees for the month</td><td>$82.32 + $25.00</td><td>$107.32</td></tr>
</tbody>
</table>

<p>Her gross takings are $3,800 and she receives $3,692.68 in her bank account. Her all-in fee rate is $107.32 ÷ $3,800 = 2.82%. If she used a free standard transfer instead, total fees would fall to $82.32, or 2.17%. Using the Tap to Pay fixed fee of $0.09 instead of $0.10 would lower the total by just 10 cents.</p>

<p>For comparison, if those same customers had paid a personal profile tagged as goods and services, the 2.99% rate on $3,800 would cost $113.62 before any transfer fee, and her business and personal money would be mixed together.</p>

<h2>Venmo Business Profile vs Other Ways to Get Paid</h2>

<p>How do Venmo business account fees compare with other common options? The rates below are each provider's published US pricing as of October 2026.</p>

<table>
<thead>
<tr><th>Option</th><th>Typical rate to receive a domestic payment</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>Venmo business profile</td><td>1.9% + $0.10</td><td>Local services, customers who already use Venmo</td></tr>
<tr><td>Venmo personal, goods and services</td><td>2.99%</td><td>Occasional sales; not ideal for a real business</td></tr>
<tr><td>PayPal goods and services</td><td>2.99%</td><td>Online sales, international buyers</td></tr>
<tr><td>Stripe card payment</td><td>2.9% + $0.30</td><td>Invoices, websites, subscriptions</td></tr>
<tr><td>Stripe ACH Direct Debit</td><td>0.8%, capped at $5</td><td>Larger B2B invoices</td></tr>
</tbody>
</table>

<p>Venmo's business rate is one of the lowest for small consumer payments. For larger invoices, bank payments such as ACH are usually cheaper. See our breakdowns of <a href="/blog/stripe-fees">Stripe fees</a> and <a href="/blog/paypal-fees">PayPal fees</a>, and our explainer on <a href="/blog/paypal-goods-and-services-vs-friends-and-family">PayPal goods and services vs friends and family</a>, which follows the same personal-versus-business logic as Venmo.</p>

<h2>How to Set Up and Use a Venmo Business Profile</h2>

<ol>
<li><strong>Create the business profile</strong> from your existing personal Venmo account in the app. Add your business name, category and contact details.</li>
<li><strong>Link a business bank account</strong> for transfers, so business income does not land in a personal account. Our guide to a <a href="/blog/business-bank-account-for-freelancers">business bank account for freelancers</a> explains why this matters.</li>
<li><strong>Share your handle or QR code</strong> on your invoices, receipts, website and at your point of sale.</li>
<li><strong>Send an invoice first for service work.</strong> List the job, date, price and due date, then show Venmo as a payment option. Our <a href="/blog/add-payment-link-to-invoice">guide to adding a payment link to an invoice</a> shows how.</li>
<li><strong>Match each payment to an invoice number.</strong> Use a consistent sequence from our <a href="/tools/invoice-number-generator">invoice number generator</a> and ask customers to include it in the payment note.</li>
<li><strong>Issue a receipt.</strong> A simple <a href="/blog/payment-receipt-template">payment receipt</a> confirms the amount and closes the loop.</li>
<li><strong>Use standard transfers by default</strong> and keep instant transfers for genuine cash-flow emergencies.</li>
</ol>

<h2>Venmo Business Fees and Taxes</h2>

<p>Payments to a business profile are payments for goods and services, so they count toward Form 1099-K reporting. The IRS says the federal threshold reverted to more than $20,000 and more than 200 transactions in a calendar year under the One, Big, Beautiful Bill, though platforms may still issue forms below that and some states set lower limits. All business income is taxable whether or not you receive a form.</p>

<p>Record gross sales as income and Venmo's fees as a business expense, rather than only recording what landed in your bank. This keeps your income in line with any 1099-K, which reports gross payments, not net. If you collect sales tax on products, our <a href="/tools/sales-tax-calculator">sales tax calculator</a> helps you price correctly. This is general information, not tax advice.</p>

<h2>When Venmo Is Not the Right Choice</h2>

<p>Venmo business profiles work best for local, consumer-facing businesses where customers already have the app: cleaners, tutors, personal trainers, food vendors and event services. They are a weaker fit in a few situations:</p>

<ul>
<li><strong>Large B2B invoices.</strong> A company's accounts payable team will usually pay by ACH, wire or check, not from a Venmo account. At 1.9%, a $6,000 invoice would cost $114.10 in Venmo seller fees, while a capped bank payment can cost a few dollars.</li>
<li><strong>International clients.</strong> Venmo is a US service, so clients abroad will need another method, such as a bank transfer or an international processor.</li>
<li><strong>Businesses that need detailed invoicing.</strong> Venmo records a payment and a note, not line items, tax or terms. You still need a proper invoice for anything beyond a simple sale.</li>
<li><strong>High refund rates.</strong> Because Venmo does not refund seller fees, a business that refunds often pays fees twice in effect: once on the sale and again in lost margin.</li>
</ul>

<p>Most small businesses end up offering two or three methods: an app such as Venmo for small consumer payments, a card option for convenience, and a bank option for large invoices. List them all on the invoice and let customers choose.</p>

<h2>Tips to Keep Venmo Business Account Fees Low</h2>

<ul>
<li><strong>Avoid instant transfers</strong> unless you truly need the money today. Standard transfers are free.</li>
<li><strong>Batch instant transfers</strong> above $1,428.57 when you do need them, so the $25 cap works in your favour.</li>
<li><strong>Set minimum prices</strong> for very small sales, where the 10-cent fixed fee pushes your effective rate up.</li>
<li><strong>Confirm before charging</strong>, since seller fees are not refunded if you later refund a customer.</li>
<li><strong>Offer bank payment for big jobs.</strong> For invoices in the thousands, ACH or a bank transfer usually costs less; see <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a>.</li>
</ul>

<p>If you use several apps at once, our guide to invoicing with <a href="/blog/venmo-zelle-cash-app-invoice">Venmo, Zelle and Cash App</a> explains how to keep one tidy record across all of them.</p>

<h2>Send a Venmo-Ready Invoice</h2>

<p>Venmo business account fees are straightforward: 1.9% + 10 cents per payment, about 2.29% for Tap to Pay, free standard transfers and capped instant transfers. For most local service businesses, that is a fair price for a payment method customers already use. Create a professional invoice in our <a href="/invoice-generator/usa">US invoice generator</a> or the main <a href="/invoice-generator">free invoice generator</a>, add your Venmo handle, and give customers an easy way to pay you on time.</p>
`,
  },
  {
    slug: "how-long-does-a-wire-transfer-take",
    title: "How Long Does a Wire Transfer Take? Domestic and International",
    description:
      "How long does a wire transfer take? Domestic US wires usually arrive the same business day; international wires take 1-5 business days. Cutoffs and delays.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    related: [
      "ach-vs-wire-transfer",
      "cross-border-payment-fees",
      "bank-details-on-invoice",
      "fednow-vs-rtp-instant-payments",
    ],
    faqs: [
      {
        q: "How long does a domestic wire transfer take?",
        a: "A domestic US wire sent through Fedwire usually arrives the same business day if the sending bank submits it before its cutoff. Fedwire settles transfers individually and the Federal Reserve describes them as immediate, final and irrevocable once processed. In practice, banks set their own customer cutoffs earlier than the Fed's 6:45 p.m. ET deadline, often in the afternoon, so a wire requested late in the day may go out the next business day.",
      },
      {
        q: "How long does an international wire transfer take?",
        a: "International wires usually take one to five business days, though many arrive faster. They travel through the Swift network and may pass through one or more intermediary banks. Swift reports that a large share of gpi payments are credited within minutes and almost all within 24 hours, but compliance checks, time zones, holidays and incorrect details can add days. Exotic currencies and smaller banks tend to take longer.",
      },
      {
        q: "Do wire transfers go through on weekends?",
        a: "Not in the US today. The Fedwire Funds Service operates Monday to Friday, opening at 9:00 p.m. ET the evening before each business day, and is closed on designated holidays. A wire requested on Saturday will normally be processed on Monday. The Federal Reserve has announced plans to add Sundays and weekday holidays, but not before 2028.",
      },
      {
        q: "What is the cutoff time for wire transfers?",
        a: "The Fedwire Funds Service accepts transfers for a bank's customers until 6:45 p.m. ET each business day. Your bank's own cutoff will be earlier to leave time for checks and approvals; many banks publish a cutoff in the early or mid afternoon. International wires often have an even earlier cutoff. Check your bank's wire schedule before promising a client a same-day payment.",
      },
      {
        q: "Why is my wire transfer taking so long?",
        a: "Common causes are a request after the bank's cutoff, a weekend or holiday, a compliance or fraud review, incorrect beneficiary details, a missing intermediary bank, or a currency the receiving bank handles slowly. For international wires, the receiving country's own banking hours and holidays apply too. Ask the sender for the Fed reference number for domestic wires or the Swift UETR tracking reference for international ones, and give it to your bank.",
      },
      {
        q: "Can a wire transfer be cancelled?",
        a: "Domestic Fedwire transfers are final and irrevocable once processed, so cancellation is usually only possible before your bank sends it. Consumers sending international remittances have extra rights under US rules: the CFPB says you can generally cancel within 30 minutes of paying, unless the money has already been picked up or deposited. Business wires do not have that consumer protection, so check details carefully before you send.",
      },
      {
        q: "Is a wire transfer faster than ACH?",
        a: "Usually, yes. A domestic wire typically settles within hours on the same business day. Standard ACH payments often take one to two business days, although Same Day ACH can settle on the day it is sent if submitted before the relevant window. Wires cost more per payment, so they are best for urgent or high-value payments, while ACH suits routine invoices and payroll.",
      },
      {
        q: "What details do I need on an invoice to receive a wire?",
        a: "For a domestic wire: your legal account name, bank name, wire routing number (which can differ from the ACH routing number on your checks), account number and the invoice number as a reference. For international wires add the Swift/BIC code, the bank's address, and an intermediary bank if your bank requires one. Ask your bank for its official incoming wire instructions rather than copying numbers from a check.",
      },
      {
        q: "Will I receive the full amount of an international wire?",
        a: "Not always. Intermediary banks and your own bank may deduct fees, so the amount credited can be less than the amount sent. To reduce short payments, state on your invoice that bank charges are paid by the sender (the OUR option) or agree how fees are split. Record any shortfall separately so you can follow up or write it off cleanly.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> How long does a wire transfer take? A domestic US wire usually arrives the same business day, often within hours, if your bank sends it before its cutoff. An international wire typically takes one to five business days. Wires do not move on US weekends or federal holidays, so a wire requested on Friday evening normally lands on Monday.</p>

<p>Wire transfers are the standard way to move large or urgent payments, from a client settling a big invoice to a deposit on equipment. Knowing how long a wire transfer takes helps you set realistic due dates, avoid awkward "it's on its way" conversations, and plan cash flow. This guide explains domestic and international wire timing, cutoff times, what causes delays and how to make sure the wire you are owed arrives quickly. If you are about to bill a client by wire, start with a clear invoice from our <a href="/invoice-generator">free invoice generator</a> that includes complete bank details.</p>

<h2>Wire Transfer Times at a Glance</h2>

<table>
<thead>
<tr><th>Wire type</th><th>Typical time</th><th>What controls it</th></tr>
</thead>
<tbody>
<tr><td>Domestic US wire, sent before bank cutoff</td><td>Same business day, often within hours</td><td>Bank processing and Fedwire hours</td></tr>
<tr><td>Domestic US wire, sent after cutoff</td><td>Next business day</td><td>Bank cutoff time</td></tr>
<tr><td>Domestic wire on weekend or holiday</td><td>Next business day</td><td>Fedwire is closed</td></tr>
<tr><td>International wire, major currency and corridor</td><td>Same day to 2 business days</td><td>Swift routing, time zones, compliance</td></tr>
<tr><td>International wire, intermediary banks or exotic currency</td><td>2 to 5 business days, sometimes longer</td><td>Number of banks in the chain, local holidays</td></tr>
</tbody>
</table>

<p>These are typical ranges, not guarantees. Your bank's wire schedule and the receiving bank's processing are the final word. If you are deciding between payment rails, our <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> comparison covers cost and speed side by side.</p>

<h2>How Long Does a Domestic Wire Transfer Take?</h2>

<p>In the US, most domestic bank wires run over the Federal Reserve's Fedwire Funds Service. According to the <a href="https://www.federalreserve.gov/paymentsystems/fedfunds_about.htm" target="_blank" rel="noopener noreferrer">Federal Reserve's Fedwire Funds overview</a>, the Fedwire business day begins at 9:00 p.m. ET on the preceding calendar day and ends at 7:00 p.m. ET, Monday through Friday, excluding designated holidays. The deadline for transfers on behalf of a bank's customers is 6:45 p.m. ET.</p>

<p>Fedwire settles each payment individually, and the Fed describes transfers as "immediate, final, and irrevocable once processed." That is why a domestic wire can land in minutes once your bank releases it.</p>

<h3>Why your bank's cutoff matters more than the Fed's</h3>

<p>Your bank needs time to verify the request, run fraud checks and get approvals before it reaches Fedwire. So banks set customer cutoffs well before 6:45 p.m. ET, commonly somewhere in the afternoon. Online banking cutoffs, branch cutoffs and business banking cutoffs can all differ. Miss the cutoff and your wire goes out the next business day.</p>

<h3>Is a domestic wire the same day?</h3>

<p>Usually yes, if three things line up: the sender requests the wire before their bank's cutoff, the sender's bank releases it promptly, and the receiving bank credits it on receipt. Some receiving banks post incoming wires in batches, so the money may show in your account a few hours after it settled.</p>

<h2>How Long Does an International Wire Transfer Take?</h2>

<p>International wire time is harder to pin down because the payment crosses systems and time zones. Most international wires travel over the Swift messaging network. If your bank and the receiving bank do not have a direct relationship, the payment passes through one or more correspondent (intermediary) banks, and each one adds processing time and sometimes a fee.</p>

<p>Speed has improved a lot. Swift's gpi service adds end-to-end tracking, and Swift reports that a large share of gpi payments are credited to the beneficiary within minutes and almost all within 24 hours. In practice, a US dollar wire between major banks in the US, UK or EU often arrives the same day or the next. A payment into a less common currency, through several intermediaries, or into a country with different working days can take three to five business days.</p>

<h3>What slows international wires down</h3>

<ul>
<li><strong>Time zones:</strong> a wire sent from New York in the afternoon may arrive after the receiving bank in Asia has closed for the day.</li>
<li><strong>Different weekends and holidays:</strong> some countries have a Friday-Saturday weekend, and local bank holidays apply.</li>
<li><strong>Compliance screening:</strong> sanctions and anti-money-laundering checks can hold a payment for review, especially for first-time payees or large amounts.</li>
<li><strong>Currency conversion:</strong> converting into a minor currency can add a step.</li>
<li><strong>Missing or wrong details:</strong> an incorrect Swift code, account number or beneficiary name can stop the payment or return it entirely.</li>
</ul>

<p>International payments also carry costs as they travel. Our guide to <a href="/blog/cross-border-payment-fees">cross-border payment fees</a> explains who charges what, and <a href="/blog/iso-20022-payments">ISO 20022 payments</a> covers the richer data standard that is helping banks screen payments faster.</p>

<h2>Worked Example: When Will the Money Arrive?</h2>

<p>A US design studio invoices two clients for $5,000 each, due on Friday.</p>

<h3>Client A: domestic wire</h3>

<p>Client A asks its bank to send the wire at 2:00 p.m. ET on Thursday. The bank's business wire cutoff is 4:00 p.m. ET, so the request is two hours inside the cutoff. The bank releases it the same afternoon and the studio's bank credits $5,000 on Thursday, a day early.</p>

<h3>Client B: international wire from Europe</h3>

<p>Client B, in Germany, sends a US dollar wire at 4:00 p.m. local time on Thursday, which is 10:00 a.m. ET. The payment is routed through one intermediary bank. Assume, for illustration, the intermediary deducts a $20 handling charge and the studio's bank charges a $15 incoming wire fee. The money arrives Friday afternoon, on the due date, but the studio receives:</p>

<p><strong>$5,000 − $20 − $15 = $4,965</strong></p>

<p>The studio is $35 short. Because its invoice said "all bank charges payable by the sender", it can add the $35 to Client B's next invoice. If Client B had sent the wire on Friday afternoon instead, the payment would likely have landed on Monday, three calendar days late, because neither Fedwire nor most banks process on Saturday or Sunday.</p>

<p>The fee amounts above are illustrative; actual charges vary by bank and route. Handling small differences like this is covered in our guide to <a href="/blog/short-payments-and-deductions">short payments and deductions</a>.</p>

<h2>How to Get Paid by Wire Faster: 6 Steps</h2>

<ol>
<li><strong>Get your official wire instructions from your bank.</strong> The routing number for incoming wires can differ from the one printed on your checks. Never copy it from a check or a <a href="/blog/what-is-a-voided-check">voided check</a> without confirming.</li>
<li><strong>Put complete bank details on the invoice.</strong> Include account name, bank name and address, wire routing number or Swift/BIC, account number or IBAN, and any intermediary bank. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> has a checklist.</li>
<li><strong>Ask for the invoice number as the payment reference</strong> so your bank statement matches your invoice. A consistent sequence from our <a href="/tools/invoice-number-generator">invoice number generator</a> helps.</li>
<li><strong>Set due dates that allow for timing.</strong> For international clients, a due date a few business days after their payment run avoids "late" payments that are only in transit. Our guide to <a href="/blog/invoice-payment-terms">invoice payment terms</a> covers the wording.</li>
<li><strong>State who pays bank charges.</strong> "OUR" means the sender pays all charges, "SHA" means fees are shared, and "BEN" means you pay them. Say which you expect on the invoice.</li>
<li><strong>Ask for the tracking reference.</strong> For a domestic wire, the sender's bank can give a Fed reference; for international, a Swift UETR lets banks trace the payment.</li>
</ol>

<h2>What to Do If a Wire Has Not Arrived</h2>

<p>If a client says the money has been sent but nothing has landed, work through these checks before assuming the worst:</p>

<ol>
<li><strong>Confirm the send time.</strong> Ask when the client's bank actually released the wire, not when they asked for it. A request made after cutoff, or on a Friday evening, will move on the next business day.</li>
<li><strong>Get the reference.</strong> Ask for the Fed reference for a domestic wire, or the Swift UETR for an international one. Your bank can search for an incoming payment with it.</li>
<li><strong>Check the details used.</strong> Compare the beneficiary name, account number and routing or Swift code the client used with your invoice. A single wrong digit can cause a return.</li>
<li><strong>Allow for holidays.</strong> Check bank holidays in both countries, plus any intermediary bank's country for international wires.</li>
<li><strong>Call your bank's wire desk.</strong> Incoming wires are sometimes held for a compliance review, which your bank can resolve faster if you can explain the payment and show the invoice.</li>
</ol>

<p>Keep the conversation factual and friendly. If a payment is genuinely late rather than in transit, our guide to a <a href="/blog/client-not-paying-invoice">client not paying an invoice</a> covers the next steps.</p>

<h2>Wire Transfers vs Faster Alternatives</h2>

<p>Wires are fast, but they are not the only option. The US now has instant payment networks that run around the clock, including the Fed's FedNow service and The Clearing House's RTP network. These settle in seconds, 24/7, but not every bank supports receiving them and transaction limits apply. Our comparison of <a href="/blog/fednow-vs-rtp-instant-payments">FedNow vs RTP instant payments</a> explains the differences.</p>

<table>
<thead>
<tr><th>Method</th><th>Typical speed</th><th>Runs on weekends?</th><th>Reversible?</th></tr>
</thead>
<tbody>
<tr><td>Domestic wire (Fedwire)</td><td>Same business day</td><td>No</td><td>Final once processed</td></tr>
<tr><td>Standard ACH</td><td>1 to 2 business days</td><td>No</td><td>Limited return rights</td></tr>
<tr><td>Same Day ACH</td><td>Same business day if sent in time</td><td>No</td><td>Limited return rights</td></tr>
<tr><td>Instant payments (FedNow, RTP)</td><td>Seconds</td><td>Yes</td><td>Final</td></tr>
<tr><td>International wire (Swift)</td><td>Same day to 5 business days</td><td>Depends on countries</td><td>Hard to recall once sent</td></tr>
</tbody>
</table>

<p>For routine domestic invoices, ACH is often cheaper; see <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a>. For clients abroad, a multi-currency account may beat a traditional wire on both cost and speed; our <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> guide compares two popular options.</p>

<h2>Will US Wires Run on Weekends?</h2>

<p>Not yet. In October 2025, the Federal Reserve announced it intends to expand Fedwire Funds Service operating days to include Sundays and weekday holidays, with the same daily hours. The <a href="https://www.federalreserve.gov/newsevents/pressreleases/other20251009a.htm" target="_blank" rel="noopener noreferrer">Federal Reserve announcement</a> says implementation will be no earlier than 2028. Until then, plan on wires moving Monday to Friday only.</p>

<h2>Protecting Yourself From Wire Fraud</h2>

<p>Because domestic wires are final once processed, wire fraud is hard to reverse. The most common scam targeting small businesses is a fake email that "updates" bank details on an invoice. Protect yourself and your clients:</p>

<ul>
<li>Tell clients your bank details will never change by email alone, and confirm any change by phone using a known number.</li>
<li>When paying suppliers, verify new bank details through a separate channel before sending. Our <a href="/blog/vendor-onboarding-checklist">vendor onboarding checklist</a> includes this step.</li>
<li>Use a secure PDF invoice so details cannot be edited easily after sending.</li>
</ul>

<h2>Create an Invoice That Gets Wired On Time</h2>

<p>So, how long does a wire transfer take? Domestic wires usually arrive the same business day if sent before the bank's cutoff, and international wires take one to five business days depending on route, currency and checks. You cannot control the banks, but you can control your invoice: complete bank details, a clear reference, realistic due dates and a note on who pays charges. Build that invoice now with our <a href="/invoice-generator">free invoice generator</a>, and choose a clean <a href="/invoice-templates/corporate">corporate invoice template</a> for larger B2B clients.</p>
`,
  },
  {
    slug: "what-is-a-voided-check",
    title: "What Is a Voided Check? How to Void One for Direct Deposit",
    description:
      "What is a voided check? Learn how to void a check safely for direct deposit or vendor setup, what details it shares, and alternatives if you have no checkbook.",
    category: "payments",
    date: "2026-10-29",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: [
      "routing-number-vs-account-number",
      "how-to-accept-ach-payments",
      "vendor-onboarding-checklist",
      "positive-pay-check-fraud",
      "us-paper-checks-phase-out",
    ],
    faqs: [
      {
        q: "What is a voided check used for?",
        a: "A voided check is used to share your bank's routing number and your account number in a reliable format, without giving someone a check that can be cashed. Employers use it to set up direct deposit, clients and customers use it to set up ACH payments to a vendor, and lenders or utilities use it to set up automatic debits. The printed numbers reduce typing mistakes compared with writing them on a form.",
      },
      {
        q: "How do I void a check?",
        a: "Take a blank check and write VOID in large letters across the front with a blue or black pen, covering the payee line, amount boxes and signature line, but not the numbers along the bottom. Do not sign it. Record the check number as void in your check register so you do not later mistake it for a missing or lost check. Then send a scan or the original as requested.",
      },
      {
        q: "Can someone use a voided check to steal money?",
        a: "A properly voided check cannot be cashed, but it does show your routing and account numbers, which could be misused for fraudulent debits or fake checks. Only give a voided check to a trusted employer, client or company, send it through a secure channel, and monitor your account. Business accounts can add protections such as ACH debit blocks and positive pay to catch unauthorised items.",
      },
      {
        q: "What if I don't have checks?",
        a: "You have several options. Many banks provide a direct deposit form or a pre-filled letter from online banking showing your account name, routing number and account number. A branch can print a counter check, sometimes for a fee. Some employers and payroll apps accept a bank letter, a screenshot of account details, or instant account verification instead of a voided check. Ask what they will accept.",
      },
      {
        q: "Can I use a deposit slip instead of a voided check?",
        a: "Sometimes, but be careful. Deposit slips can carry a different routing number from the one used for electronic payments, and some employers and payroll providers do not accept them. A bank-issued direct deposit form or letter is usually a safer alternative, because it is designed to show the correct numbers for electronic deposits.",
      },
      {
        q: "Where are the routing and account numbers on a check?",
        a: "Along the bottom of a US check is the MICR line, printed in magnetic ink. The first group of nine digits on the left is usually the routing number. The next group is usually your account number, and the check number often appears after it, matching the number in the top-right corner. The order can vary slightly by bank, so confirm with your bank if you are unsure.",
      },
      {
        q: "Is the routing number on my check the same for wire transfers?",
        a: "Not always. The routing number on your checks is used for check and ACH processing. Many banks use a different number for incoming wire transfers. If a client wants to pay you by wire, ask your bank for its official incoming wire instructions rather than copying the routing number from a voided check.",
      },
      {
        q: "Should I write VOID on a check in pen or marker?",
        a: "Use a pen with permanent ink, blue or black, so it cannot be erased. A thick marker can bleed through or obscure the routing and account numbers at the bottom, which defeats the purpose. Write VOID large enough to cover the main fields, or write it on each key line: date, payee, amount and signature, while keeping the MICR line clear.",
      },
    ],
    content: `
<p><strong>Quick answer:</strong> What is a voided check? It is a blank check with VOID written across the front so it can never be cashed, used only to share your bank's routing number and your account number. Employers use a voided check to set up direct deposit, and clients use one for vendor setup when they pay you by ACH.</p>

<p>If a new client, employer or payroll provider has asked for a voided check, they want a reliable copy of your bank details, not a payment. This guide explains what a voided check is, how to void one safely, what information it shares, how it is used for direct deposit and vendor setup, and what to do if you do not have a checkbook. If you are setting up to get paid by bank transfer, pair your bank details with a clear invoice from our <a href="/invoice-generator">free invoice generator</a> so clients have everything in one place.</p>

<h2>What a Voided Check Is (and Is Not)</h2>

<p>A voided check is a normal paper check from your account that has been cancelled by writing VOID across it. Writing VOID makes it non-negotiable: no bank should cash or deposit it. But it still shows the printed details that matter for electronic payments:</p>

<ul>
<li>Your name and, often, your address as printed on the check.</li>
<li>Your bank's name.</li>
<li>Your bank's nine-digit routing number.</li>
<li>Your account number.</li>
<li>The check number.</li>
</ul>

<p>Companies like voided checks because the numbers are printed by the bank in a standard format, which cuts down on the transposed-digit errors that happen when people write numbers on a form. A wrong digit can send a direct deposit to the wrong place or cause it to bounce back.</p>

<p>A voided check is not a way to pay someone, and it is not the same as a cancelled check (a check that has already been paid and cleared by the bank).</p>

<h3>Voided check vs cancelled check vs deposit slip</h3>

<table>
<thead>
<tr><th>Document</th><th>What it is</th><th>Can it be cashed?</th><th>Good for direct deposit setup?</th></tr>
</thead>
<tbody>
<tr><td>Voided check</td><td>Unused check marked VOID by you</td><td>No</td><td>Yes, the standard choice</td></tr>
<tr><td>Cancelled check</td><td>A check that was paid and cleared by the bank</td><td>No, already paid</td><td>Not usually requested; it serves as proof of payment</td></tr>
<tr><td>Deposit slip</td><td>Form for depositing money into your account</td><td>Not a payment instrument</td><td>Only if the requester accepts it; numbers may differ</td></tr>
<tr><td>Bank direct deposit letter</td><td>Bank-issued form showing account and routing numbers</td><td>No</td><td>Yes, widely accepted</td></tr>
</tbody>
</table>

<p>Keep the distinction in mind when a client or employer asks for "a check". In almost every onboarding situation, they mean a voided check or an equivalent bank letter, not a payment.</p>

<h2>When You Need a Voided Check</h2>

<table>
<thead>
<tr><th>Situation</th><th>Who asks for it</th><th>What they set up</th></tr>
</thead>
<tbody>
<tr><td>Starting a new job</td><td>Employer or payroll provider</td><td>Direct deposit of wages</td></tr>
<tr><td>Becoming a supplier to a business</td><td>Client's accounts payable team</td><td>ACH payments to your business account</td></tr>
<tr><td>Paying yourself from your business</td><td>Your payroll software</td><td>Owner's salary or draw by direct deposit</td></tr>
<tr><td>Loan, insurance or utility</td><td>Lender or provider</td><td>Automatic debits from your account</td></tr>
<tr><td>Government payments</td><td>Agency</td><td>Direct deposit of refunds or benefits</td></tr>
</tbody>
</table>

<p>For freelancers and small businesses, the most common request is vendor setup. When a larger client adds you as a supplier, its accounts payable team collects your tax form, contact details and bank details before it can pay your invoices electronically. Our <a href="/blog/vendor-onboarding-checklist">vendor onboarding checklist</a> shows what clients usually ask for, and our guide to the <a href="/blog/accounts-payable-process">accounts payable process</a> explains what happens on their side.</p>

<h2>How to Void a Check: Step by Step</h2>

<ol>
<li><strong>Choose the right account.</strong> Use a check from the account where you want the money to land. For business income, that should be your business account, not a personal one.</li>
<li><strong>Use a permanent pen.</strong> Blue or black ink. Avoid pencil (erasable) and thick markers (they can obscure the numbers).</li>
<li><strong>Write VOID across the front.</strong> Write it in large letters across the middle of the check, covering the payee line, amount box and signature area. Alternatively, write VOID on each of those lines separately.</li>
<li><strong>Keep the bottom line clear.</strong> Do not write over the numbers along the bottom edge. Those are the details the requester needs.</li>
<li><strong>Do not sign it</strong> and do not fill in a payee or amount.</li>
<li><strong>Record it in your register.</strong> Note the check number as void so your records do not show a missing check.</li>
<li><strong>Send it securely.</strong> Upload it through the employer's or client's secure portal, or hand it over in person. Avoid ordinary email where you can.</li>
</ol>

<h2>Reading the Numbers on a Voided Check</h2>

<p>The line of numbers along the bottom of a US check is called the MICR line, printed in magnetic ink so check-processing machines can read it. It usually contains three groups:</p>

<ul>
<li><strong>Routing number:</strong> the nine-digit number identifying your bank, normally first on the left. The last digit is a check digit calculated from the others, which helps systems catch typing errors.</li>
<li><strong>Account number:</strong> your individual account number, usually in the middle. Its length varies by bank.</li>
<li><strong>Check number:</strong> the individual check's number, usually matching the number printed in the top-right corner.</li>
</ul>

<p>The exact order can vary slightly between banks. If anything is unclear, your bank's online banking or app will show your account and routing numbers.</p>

<h3>Routing numbers for ACH vs wires</h3>

<p>The routing number on a check is used for checks and ACH payments, which is what direct deposit uses. The CFPB explains that <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-an-ach-transaction-en-1065/" target="_blank" rel="noopener noreferrer">ACH transactions</a> are electronic bank-to-bank transfers processed through the ACH network. Many banks use a different routing number for incoming wire transfers, so if a client wants to wire you money, ask your bank for its official wire instructions. Our guide on <a href="/blog/how-long-does-a-wire-transfer-take">how long a wire transfer takes</a> covers the rest of the wire process, and <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> compares the two rails.</p>

<h2>Worked Example: Setting Up Direct Deposit With a Tax Reserve</h2>

<p>A freelance bookkeeper pays herself a monthly owner's draw of $4,800 from her LLC's business account through payroll software. The software asks for a voided check from her personal account. She also wants part of each payment to go straight to a separate savings account for her estimated taxes.</p>

<p>Her direct deposit form allows a split. She sets 30% to the tax savings account and the rest to her personal checking account:</p>

<ul>
<li>Tax savings: $4,800 × 30% = <strong>$1,440</strong></li>
<li>Personal checking: $4,800 − $1,440 = <strong>$3,360</strong></li>
<li>Check: $1,440 + $3,360 = $4,800</li>
</ul>

<p>She provides one voided check for the checking account and a bank direct deposit letter for the savings account, which has no checks. Over a year, the tax account receives $1,440 × 12 = $17,280 automatically. The 30% figure is her own planning choice, not a rule; the right reserve depends on your income and tax situation. Our guide on <a href="/blog/how-to-pay-yourself-as-a-business-owner">how to pay yourself as a business owner</a> explains draws and salaries in more detail.</p>

<h2>Alternatives If You Do Not Have Checks</h2>

<p>Paper checks are becoming less common, and plenty of accounts never come with a checkbook. Our article on the <a href="/blog/us-paper-checks-phase-out">US paper checks phase-out</a> covers the broader shift. If you have no checks, try these in order:</p>

<ol>
<li><strong>A bank direct deposit form or letter.</strong> Many banks let you download a pre-filled form showing your name, routing number and account number from online banking.</li>
<li><strong>A counter check from a branch.</strong> A teller can print a check with your account details, sometimes for a small fee, which you can then void.</li>
<li><strong>Instant account verification.</strong> Many payroll providers and payment platforms can verify your account by having you log in to your bank through a secure connection, or by sending small test deposits.</li>
<li><strong>A screenshot or statement excerpt.</strong> Some employers accept a screenshot of your account details or the top section of a statement. Ask before sending.</li>
</ol>

<p>Avoid using deposit slips unless the requester confirms they accept them, because the numbers may not match what is needed for electronic deposits.</p>

<h2>Is It Safe to Share a Voided Check?</h2>

<p>A voided check cannot be cashed, but it does reveal the two numbers someone needs to attempt an electronic debit or print a fake check. That is why you should only share it with organisations you know and trust, and only through secure channels.</p>

<ul>
<li><strong>Verify the request.</strong> If a "new client" or "HR department" asks for bank details out of the blue, confirm by phone using a number you already have.</li>
<li><strong>Use secure portals</strong> rather than ordinary email or text where possible.</li>
<li><strong>Monitor your account</strong> for unfamiliar debits and report them quickly.</li>
<li><strong>Add business protections.</strong> Banks offer ACH debit blocks and filters, and positive pay services that match checks against a list you approve. See our guide to <a href="/blog/positive-pay-check-fraud">positive pay and check fraud</a>.</li>
<li><strong>Keep a log</strong> of who has your details, so you can update them if you change banks.</li>
</ul>

<p>If you do change banks, update every employer, client and biller that pays into or debits your old account. The CFPB's guide to <a href="https://www.consumerfinance.gov/consumer-tools/bank-accounts/moving-your-checking-account/" target="_blank" rel="noopener noreferrer">moving your checking account</a> includes switching direct deposits.</p>

<h2>Voided Checks and Getting Paid as a Vendor</h2>

<p>For small businesses, a voided check is often the step that unlocks faster payment. Once a client has your bank details on file, it can pay your invoices by ACH instead of mailing a check, which removes mailing time, lost checks and trips to the bank. To make the most of it:</p>

<ul>
<li>Send the voided check and your W-9 together during onboarding, so the client can set you up in one go.</li>
<li>Show your preferred payment method on every invoice. Our guide to <a href="/blog/bank-details-on-invoice">bank details on an invoice</a> explains what to include and what to leave off.</li>
<li>Ask the client to include your invoice number in the payment reference so you can match deposits easily.</li>
<li>Confirm the first payment. After setup, check that the first ACH deposit arrives in the right account for the right amount, then tell the client. One quick confirmation prevents months of payments going astray because of a single wrong digit.</li>
<li>If you also accept card or app payments, see <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a> for the lowest-cost option on larger invoices.</li>
</ul>

<p>Still receiving paper checks from some clients? Our guide on <a href="/blog/how-to-write-a-check">how to write a check</a> covers the other side of the process, and a <a href="/blog/payment-receipt-template">payment receipt template</a> helps you confirm each payment.</p>

<p>This article is general information, not legal or financial advice. Your bank's instructions take priority.</p>

<h2>Set Up Your Invoices for Direct Payment</h2>

<p>A voided check is simply a safe, cancelled check that shares your routing and account numbers so someone can pay you, or debit you, electronically. Void it with permanent ink, keep the bottom numbers clear, share it only through secure channels, and use a bank letter if you have no checks. Once clients have your details, make paying easy: create a professional invoice in our <a href="/invoice-generator">free invoice generator</a>, or start from a <a href="/invoice-templates/classic">classic invoice template</a>, and list your bank payment option clearly.</p>
`,
  },
];
