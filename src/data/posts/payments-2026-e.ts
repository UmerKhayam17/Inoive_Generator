import type { PostDraft } from "../blog";

export const PAYMENTS_2026_E_POSTS: PostDraft[] = [
  {
    slug: "how-to-accept-ach-payments",
    title: "How to Accept ACH Payments: Setup, Fees and Rules (2026)",
    description:
      "Learn how to accept ACH payments in the US: debit vs credit, setup options, processing fees from Stripe and PayPal, authorization rules and 2026 Nacha changes.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["ach-vs-wire-transfer", "nacha-2026-rules", "how-to-accept-credit-card-payments"],
    faqs: [
      {
        q: "How do I accept ACH payments as a small business?",
        a: "You have three main routes. The simplest is to share your bank account and routing number on the invoice so customers send an ACH credit from their own bank. The second is to use a payment processor such as Stripe or PayPal that lets customers pay by bank from a payment link. The third is to originate ACH debits through your business bank, which usually needs an approved ACH origination service. Most small businesses start with the first two and add bank origination later as volume grows.",
      },
      {
        q: "How much does it cost to accept ACH payments?",
        a: "It depends on the route. Receiving an ACH credit into a business checking account is often free, though some banks charge per incoming item. Processors charge a percentage with a cap: at the time of writing, Stripe lists ACH Direct Debit at 0.8% capped at $5.00, and PayPal lists invoices paid by Pay by Bank (ACH) at 1% capped at $10.00. Banks that let you originate ACH debits usually charge a monthly service fee plus a per-item fee, so ask for their current schedule.",
      },
      {
        q: "What is the difference between an ACH debit and an ACH credit?",
        a: "With an ACH credit, the payer pushes money from their account to yours. Your customer starts it from their online banking or accounts payable system, and you do nothing except share your details. With an ACH debit, you pull the money from the customer's account after they authorize it. Debits give you more control over timing, which suits recurring billing, but they carry more rules and a longer window in which the payer can dispute the debit.",
      },
      {
        q: "How long do ACH payments take to clear?",
        a: "Standard ACH payments usually settle in one to two business days. Same Day ACH can settle the same business day if the payment is submitted before the relevant processing window and the amount is within the per-payment limit, which is $1 million at the time of writing. Processors may hold funds longer before paying out to you, especially for new accounts, so check the payout schedule in your processor's dashboard rather than assuming the network settlement time.",
      },
      {
        q: "Can an ACH payment be reversed after it clears?",
        a: "Yes, in limited cases. Most ACH returns, such as insufficient funds or a closed account, must come back within two banking days of settlement. However, a consumer can dispute an unauthorized debit for up to 60 calendar days after the statement date. Business accounts have a shorter window for unauthorized claims. This is why ACH debits need clear written authorization and why you should not ship high-value goods the instant a debit is submitted.",
      },
      {
        q: "Do I need customer authorization to pull an ACH debit?",
        a: "Yes. Nacha rules require the receiver's authorization before you debit their account. For consumers, authorization must be clear and readily understandable, and for online debits it must be captured in a way that can be proven. For business customers, the authorization is normally part of a signed agreement. Keep authorizations on file, because your bank or processor can ask you to produce them if a debit is disputed. Your processor's hosted checkout usually handles the wording for you.",
      },
      {
        q: "Is ACH cheaper than credit card processing?",
        a: "Usually, yes, especially for larger invoices. Card processing is mostly percentage-based, so a $5,000 invoice paid by card costs far more than the same invoice paid by ACH with a capped fee. With Stripe's listed 0.8% capped at $5.00, ACH on a $5,000 invoice costs $5.00, compared with $145.30 at Stripe's listed 2.9% plus 30 cents for domestic cards. The trade-off is that ACH is slower and has return risk.",
      },
      {
        q: "What information do customers need to pay me by ACH?",
        a: "For an ACH credit, customers need your legal business name, bank name, ABA routing number for ACH (which can differ from the wire routing number), account number and account type. Put these in the notes or payment terms section of your invoice, along with the invoice number to use as the payment reference. If you use a processor's payment link instead, customers enter their own bank details on the processor's page and you never handle them.",
      },
      {
        q: "Is it safe to put my bank details on an invoice?",
        a: "It is common practice for business-to-business invoices, and the account and routing numbers alone do not let someone withdraw money without authorization. The bigger risk is invoice fraud, where a criminal sends your customer a fake invoice with changed bank details. Tell customers that your bank details will never change by email alone, and ask them to confirm any change by phone using a number they already have. Positive pay and debit blocks on your account add protection.",
      },
    ],
    content: `<p>To <strong>accept ACH payments</strong>, you either share your business bank's routing and account numbers so customers push an ACH credit to you, or you use a processor such as Stripe or PayPal to pull an authorized ACH debit from the customer's account. Credits are usually free to receive; processor debits typically cost around 1% with a fee cap.</p>
<p>ACH (Automated Clearing House) is the US bank-to-bank network that carries payroll, bill payments and a large share of business-to-business invoices. It is governed by the Nacha Operating Rules and settled through the Federal Reserve and The Clearing House. For small businesses and freelancers, it is often the cheapest way to get paid on larger invoices. This guide covers the setup options, the real fees, the difference between debits and credits, and the rules you need to follow.</p>

<h2>ACH debit vs credit: which one are you accepting?</h2>
<p>Before you pick a setup, understand the two directions an ACH payment can flow. Most confusion about how to accept ACH payments comes from mixing them up.</p>
<table>
<thead><tr><th>Feature</th><th>ACH credit (push)</th><th>ACH debit (pull)</th></tr></thead>
<tbody>
<tr><td>Who starts it</td><td>Your customer, from their bank or AP system</td><td>You, through your bank or a processor</td></tr>
<tr><td>What you need</td><td>Share your routing and account numbers</td><td>Customer's bank details plus written authorization</td></tr>
<tr><td>Typical cost to you</td><td>Often free to receive (check your bank)</td><td>Processor or bank fee per payment</td></tr>
<tr><td>Control over timing</td><td>Low: you wait for the customer</td><td>High: you collect on the agreed date</td></tr>
<tr><td>Return and dispute risk</td><td>Very low once received</td><td>Higher: returns and unauthorized claims possible</td></tr>
<tr><td>Best for</td><td>B2B invoices, one-off projects</td><td>Recurring billing, retainers, subscriptions</td></tr>
</tbody>
</table>
<p>Many business customers prefer to pay by ACH credit because their accounts payable team controls the payment run. Consumers and small clients often prefer you to pull a debit because it means less work for them. If you sell to both, it is reasonable to offer both.</p>

<h2>Three ways to accept ACH payments</h2>
<h3>1. Receive ACH credits into your business bank account</h3>
<p>This is the zero-setup option. Open a business checking account (see our guide to choosing a <a href="/blog/business-bank-account-for-freelancers">business bank account for freelancers</a>), find the ACH routing number and account number, and print them on your invoices. The customer initiates the transfer. You pay nothing to the network, and many banks do not charge for incoming ACH, though some business accounts include per-item fees above a monthly limit.</p>
<p>The downside is that you are waiting on the customer. You cannot pull the money on the due date, so your <a href="/blog/invoice-payment-terms">invoice payment terms</a> and reminders do the work.</p>
<h3>2. Use a payment processor's bank payment option</h3>
<p>Processors such as Stripe, PayPal and Square let customers pay by bank account from a hosted checkout or payment link. The customer logs in to their bank or enters account details, authorizes the debit, and the processor collects the funds and pays them out to you. You never store bank details yourself, and the processor handles the authorization language and much of the verification.</p>
<p>This is the easiest way for a small business to accept ACH payments as debits without applying for bank origination. You can add the link to your invoice; our guide on <a href="/blog/add-payment-link-to-invoice">adding a payment link to an invoice</a> shows where to place it.</p>
<h3>3. Originate ACH debits through your bank</h3>
<p>Larger businesses with steady recurring volume can apply to their bank to become an ACH Originator. The bank (the ODFI) underwrites you, sets exposure limits, and lets you upload ACH files or enter batches online. Pricing is usually a monthly service charge plus a per-item fee, which can beat processor pricing at scale. In exchange you take on more compliance work: authorizations, account validation, return handling and fraud monitoring.</p>

<h2>ACH payment processing fees compared</h2>
<p>ACH payment processing fees are much lower than card fees on larger tickets because most providers cap them. The figures below are the published US list prices at the time of writing (October 2026); always check the provider's pricing page before you commit, because rates change.</p>
<table>
<thead><tr><th>Option</th><th>Published fee</th><th>Cost on a $2,000 invoice</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>ACH credit to your bank account</td><td>Often $0 to receive</td><td>$0 (bank dependent)</td><td>Customer initiates; check your bank's schedule</td></tr>
<tr><td>Stripe ACH Direct Debit</td><td>0.8%, capped at $5.00</td><td>$5.00</td><td>Extra fees can apply to failed payments and disputes</td></tr>
<tr><td>PayPal invoice paid by Pay by Bank (ACH)</td><td>1%, capped at $10.00</td><td>$10.00</td><td>Invoicing rate per PayPal's US fee page</td></tr>
<tr><td>Bank ACH origination</td><td>Monthly fee plus per-item fee</td><td>Varies</td><td>Ask your bank for its current treasury fee schedule</td></tr>
<tr><td>Card payment (for comparison)</td><td>Stripe lists 2.9% + 30 cents</td><td>$58.30</td><td>Domestic card, standard pricing</td></tr>
</tbody>
</table>
<h3>Worked example: a $12,000 annual retainer</h3>
<p>Suppose a consultant bills a client $1,000 a month. Paid by card at 2.9% plus 30 cents, each payment costs $29.30, or $351.60 a year. Paid by Stripe ACH Direct Debit at 0.8% capped at $5.00, each payment costs $5.00 (because 0.8% of $1,000 is $8, which hits the cap), or $60 a year. Paid by ACH credit straight to the bank, the cost may be nothing. The saving of roughly $290 a year on one client is why many service businesses steer retainers to ACH.</p>
<p>Watch for the extras: failed-payment fees when a debit bounces, dispute fees, and payout timing. A cheap headline rate is less useful if a customer's account regularly lacks funds.</p>

<h2>How to accept ACH payments step by step</h2>
<ol>
<li><strong>Decide on credit, debit or both.</strong> Business clients with AP departments usually push credits; smaller clients and recurring billing suit debits.</li>
<li><strong>Get the right account details.</strong> Ask your bank for the ACH routing number. It can differ from the wire routing number, and using the wrong one causes delays.</li>
<li><strong>Set up a processor if you want to pull debits.</strong> Turn on bank payments in Stripe, PayPal or your chosen provider and complete its business verification.</li>
<li><strong>Write clear payment instructions on the invoice.</strong> List the account name, bank, routing number, account number and the reference to use. Our <a href="/invoice-generator/usa">US invoice generator</a> has notes and terms fields for this.</li>
<li><strong>Capture authorization for debits.</strong> Use the processor's checkout or a signed agreement that states the amount, timing and how to revoke.</li>
<li><strong>Reconcile against the invoice number.</strong> Match each deposit to the invoice so partial and short payments are spotted early.</li>
<li><strong>Send a receipt.</strong> Confirm payment with a simple <a href="/blog/payment-receipt-template">payment receipt</a> so both sides have a record.</li>
</ol>

<h2>The Nacha rules that matter to small businesses</h2>
<p>You do not need to read the full Nacha Operating Rules to accept ACH payments through a processor, but you should know the points that affect you.</p>
<ul>
<li><strong>Authorization.</strong> Every debit needs the receiver's authorization. For consumer debits it must be clear and understandable, and for online (WEB) debits it must be provable. Keep records.</li>
<li><strong>Account validation for online debits.</strong> Originators of WEB debits must use a commercially reasonable fraudulent transaction detection system, which includes validating a new account number before its first use. Processors usually do this for you through instant bank verification or micro-deposits.</li>
<li><strong>Return windows.</strong> Most returns, such as insufficient funds (R01) or account closed (R02), come back within two banking days. Unauthorized consumer debits can be returned for up to 60 calendar days after settlement appears on the statement.</li>
<li><strong>Same Day ACH limit.</strong> Same Day ACH payments are capped at $1 million per payment at the time of writing. Nacha has approved a future increase; check the current limit before relying on it.</li>
<li><strong>2026 fraud monitoring.</strong> New risk-based fraud monitoring rules took effect in two phases in 2026, first for the largest originators and then for all other non-consumer originators and third-party service providers by June 2026.</li>
</ul>
<p>Our <a href="/blog/nacha-2026-rules">Nacha 2026 rules guide</a> explains those changes in more detail. If you originate directly through a bank, ask your bank what it now expects from you, because the rules put more responsibility on originators to spot fraudulent payment requests.</p>

<h2>When ACH is the wrong choice</h2>
<p>ACH is not always the best rail. If a customer needs funds to arrive in minutes, a wire or an instant payment is better. Our comparison of <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a> covers speed, cost and finality, and our guide to <a href="/blog/fednow-vs-rtp-instant-payments">FedNow vs RTP</a> explains the instant options. ACH is also US-only, so for overseas clients see our guides on international payments.</p>
<p>ACH debits also suit poorly a one-off sale to an unknown buyer, because the payer can return the debit after you have delivered. For new customers or high-value goods, wait until the payment has settled and the main return window has passed, or ask for a credit or a wire instead.</p>

<h2>Putting ACH details on your invoices</h2>
<p>Whichever route you pick, the invoice is where the customer looks for instructions. A clear invoice reduces misdirected payments and support emails. Include:</p>
<ul>
<li>A unique invoice number the customer can use as the payment reference (our <a href="/tools/invoice-number-generator">invoice number generator</a> helps keep a consistent sequence).</li>
<li>Your legal business name exactly as it appears on the bank account.</li>
<li>Bank name, ACH routing number, account number and account type.</li>
<li>A payment link if you accept debits through a processor.</li>
<li>Due date and any late fee policy that you have agreed in your contract.</li>
<li>A line asking customers to verify any change of bank details by phone.</li>
</ul>
<p>Note that our invoice generator creates the invoice PDF only. It does not process ACH payments or connect to your bank, so the payment itself happens through your bank or processor.</p>

<h2>Common ACH mistakes to avoid</h2>
<ul>
<li><strong>Giving the wire routing number for ACH.</strong> Some banks use different numbers. Check with your bank.</li>
<li><strong>Treating a submitted debit as final.</strong> A debit can still be returned. Release goods based on settlement, not submission.</li>
<li><strong>Missing authorization records.</strong> Without proof, you will usually lose an unauthorized-debit claim.</li>
<li><strong>Ignoring the fee cap.</strong> Percentage fees with a cap favor larger invoices. On very small payments, the percentage still applies.</li>
<li><strong>Not watching for invoice fraud.</strong> Criminals impersonate suppliers and send fake bank changes. Verify changes by phone.</li>
</ul>

<h2>Handling ACH returns and failed payments</h2>
<p>Even when you accept ACH payments correctly, some will come back. A return is not always a sign of fraud; often the customer simply had too little in the account that day. What matters is having a routine for dealing with returns quickly.</p>
<ul>
<li><strong>R01, insufficient funds:</strong> contact the customer, agree a new date and retry only within the limits your processor or the Nacha rules allow.</li>
<li><strong>R02 or R03, account closed or not found:</strong> ask for new bank details and re-verify the account before debiting again.</li>
<li><strong>R10 or similar unauthorized returns:</strong> stop debiting immediately, check your authorization records and speak to the customer before trying any other payment method.</li>
</ul>
<p>Update the invoice status in your own records when a return arrives, so the balance due is accurate. If a customer pays part of the amount after a return, record it as a <a href="/blog/partial-payment-invoice">partial payment</a> and issue an updated invoice showing the balance. A short clause in your terms that says returned payments may incur a fee, where your contract and local law allow it, sets expectations without surprising anyone.</p>

<h2>Conclusion</h2>
<p>To accept ACH payments, start simple: put your ACH details on every invoice so customers can push credits, then add a processor's pay-by-bank link if you want to collect debits on a schedule. Compare capped ACH payment processing fees against your card costs, keep authorization records, and follow the Nacha rules your provider sets out. When you are ready, build a clean invoice with payment instructions in the <a href="/invoice-generator">free invoice generator</a>. This article is general information, not legal or financial advice; check specific obligations with your bank or a qualified adviser.</p>`,
  },
  {
    slug: "merchant-account-vs-payment-processor",
    title: "Merchant Account vs Payment Processor: Key Differences",
    description:
      "Merchant account vs payment processor explained: how card payments flow, payment facilitators like Stripe and Square, and interchange-plus vs flat-rate pricing.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["how-to-accept-credit-card-payments", "stripe-vs-square", "stripe-vs-paypal"],
    faqs: [
      {
        q: "What is the difference between a merchant account and a payment processor?",
        a: "A merchant account is a bank account, held with an acquiring bank, that receives card payments on your behalf before they are paid out to your business account. A payment processor is the company whose technology routes the transaction between your checkout, the card networks and the banks. You need both functions to take card payments. A payment facilitator such as Stripe or Square bundles them, so you get processing under its master merchant account instead of opening your own.",
      },
      {
        q: "Do I need a merchant account to accept credit cards?",
        a: "Not your own. If you use a payment facilitator such as Stripe, Square or PayPal, you are onboarded as a sub-merchant under the facilitator's master merchant account, so you can start taking cards in minutes without a separate application. A dedicated merchant account becomes worth considering when your volume is high enough that negotiated interchange-plus pricing saves more than the extra setup, underwriting and monthly fees cost you.",
      },
      {
        q: "What is a payment facilitator?",
        a: "A payment facilitator, or PayFac, is a company that holds a master merchant account with an acquiring bank and onboards many small businesses as sub-merchants under it. The PayFac handles underwriting, risk monitoring and payouts. Stripe, Square and PayPal all work this way for most small businesses. The benefit is fast, simple signup with flat pricing. The drawback is less individual negotiation and a higher chance of sudden holds, because the PayFac carries the risk for all its sub-merchants.",
      },
      {
        q: "Is interchange-plus cheaper than flat-rate pricing?",
        a: "Often, but not always. Interchange-plus passes through the actual interchange and network fees and adds a fixed markup, so you pay less on low-cost transactions such as regulated debit cards. Flat-rate pricing charges the same percentage on every card, which is simpler but means you overpay on cheap cards to subsidize expensive ones. Businesses with higher volume and many debit transactions usually save with interchange-plus. Small or irregular sellers often prefer the predictability of flat rate.",
      },
      {
        q: "What is interchange?",
        a: "Interchange is the fee the merchant's bank pays the cardholder's issuing bank on each card transaction. It is set by the card networks, such as Visa and Mastercard, and varies by card type, how the card is used and the merchant's category. Rewards and business cards usually carry higher interchange than basic debit cards. Interchange makes up the largest part of card processing cost, with network assessment fees and the processor's markup added on top.",
      },
      {
        q: "Why do payment processors freeze funds?",
        a: "Processors, and especially payment facilitators, hold or reserve funds when they see risk: a sudden spike in volume, a large unusual transaction, a high chargeback or refund rate, or a business type they consider risky. Because they are liable for chargebacks they cannot recover from you, they protect themselves by delaying payouts. You can reduce the chance by describing your business accurately at signup, warning the processor before large sales and keeping disputes low.",
      },
      {
        q: "How long does it take to get a merchant account?",
        a: "A payment facilitator account can be active within minutes to a day, with verification continuing in the background. A dedicated merchant account goes through full underwriting by the acquirer, which typically takes several days to a few weeks and may ask for bank statements, processing history and financial statements. High-risk industries can take longer and face reserves. Ask the provider for an estimated timeline and the full document list before you apply.",
      },
      {
        q: "What fees come with a dedicated merchant account?",
        a: "Beyond the per-transaction pricing, dedicated merchant accounts can include monthly account fees, statement fees, PCI compliance or non-compliance fees, gateway fees, minimum monthly processing charges, chargeback fees and early termination fees. Not every provider charges all of these. Ask for a complete fee schedule in writing and read the contract term and cancellation clause before you sign, because early termination fees are a common source of regret.",
      },
    ],
    content: `<p>In the <strong>merchant account vs payment processor</strong> question, the short answer is that they do different jobs. A merchant account is where card money lands with an acquiring bank; a payment processor moves the transaction data between your checkout, the card networks and the banks. Payment facilitators like Stripe and Square bundle both, so most small businesses never open their own merchant account.</p>
<p>Understanding the difference helps you read pricing proposals, avoid long contracts you do not need, and know when it is worth switching. This guide explains how a card payment flows, what a payment facilitator is, and how interchange-plus vs flat rate pricing affects what you actually pay.</p>

<h2>How a card payment actually flows</h2>
<p>When a customer pays an invoice by card, several parties touch the transaction in a second or two:</p>
<ol>
<li><strong>The customer</strong> enters card details on your checkout page or payment link.</li>
<li><strong>The payment gateway</strong> securely captures the details and sends them on. Online, the gateway is often built into the processor.</li>
<li><strong>The payment processor</strong> routes the authorization request to the card network.</li>
<li><strong>The card network</strong> (Visa, Mastercard, American Express, Discover) passes it to the cardholder's issuing bank.</li>
<li><strong>The issuing bank</strong> approves or declines based on funds, credit and fraud checks.</li>
<li><strong>The acquiring bank</strong>, which holds the merchant account, receives the settled funds, minus fees, and pays them out to your business bank account.</li>
</ol>
<p>The merchant account sits with the acquirer. The processor provides the pipes. In practice many companies do both, which is why the terms get blurred.</p>

<h2>Merchant account vs payment processor: side by side</h2>
<table>
<thead><tr><th>Aspect</th><th>Merchant account</th><th>Payment processor</th></tr></thead>
<tbody>
<tr><td>What it is</td><td>A bank account with an acquiring bank for card settlements</td><td>Technology and services that route card transactions</td></tr>
<tr><td>Who provides it</td><td>Acquiring banks, often sold through ISOs and resellers</td><td>Processors, gateways and payment facilitators</td></tr>
<tr><td>Main job</td><td>Hold settled card funds and carry chargeback liability</td><td>Authorize, capture and settle transactions</td></tr>
<tr><td>Do you always need one?</td><td>You need access to one, not necessarily your own</td><td>Yes, every card payment needs processing</td></tr>
<tr><td>Typical pricing</td><td>Bundled into interchange-plus or tiered pricing</td><td>Per-transaction markup, flat rate or bundled</td></tr>
</tbody>
</table>
<p>When someone asks about merchant account vs payment processor, they are usually really asking: should I sign up with a payment facilitator, or apply for a dedicated merchant account with my own processing contract?</p>

<h2>What a payment facilitator does</h2>
<p>A payment facilitator (PayFac) holds one master merchant account with an acquiring bank and onboards thousands of small businesses as sub-merchants beneath it. Stripe, Square and PayPal are the best-known examples. When you sign up, the PayFac verifies your identity and business, then lets you start accepting payments quickly, often the same day.</p>
<p>The trade-offs:</p>
<ul>
<li><strong>Speed and simplicity.</strong> No lengthy underwriting, no monthly minimums on standard plans, and pricing published on a website.</li>
<li><strong>Flat or simple pricing.</strong> For example, at the time of writing Stripe lists US domestic cards at 2.9% plus 30 cents for standard online pricing, with extra fees for international cards and currency conversion.</li>
<li><strong>Less stability for some businesses.</strong> Because the PayFac carries the risk for everyone under its account, it monitors accounts closely and may hold funds or close accounts that look risky.</li>
<li><strong>Limited negotiation.</strong> Custom pricing usually starts only at meaningful volume.</li>
</ul>
<p>For comparisons of the main facilitators, see our guides to <a href="/blog/stripe-vs-square">Stripe vs Square</a> and <a href="/blog/stripe-vs-paypal">Stripe vs PayPal</a>, plus our breakdown of <a href="/blog/paypal-fees">PayPal fees</a>.</p>

<h2>What a dedicated merchant account gives you</h2>
<p>With a dedicated merchant account, you are underwritten individually by an acquirer (directly or through a reseller, often called an ISO). You get your own merchant ID, and pricing is negotiated. Benefits include potentially lower costs at scale, more predictable risk treatment once approved, and access to interchange-plus pricing. In return you face a longer application, more paperwork, possible monthly fees and, sometimes, multi-year contracts with early termination fees.</p>
<p>A dedicated account tends to make sense when you process steady volume, have a low dispute rate and can show a processing history. It rarely makes sense for a new freelancer invoicing a handful of clients.</p>

<h2>Interchange-plus vs flat rate pricing</h2>
<p>This is where most of the money is. Every card transaction carries three cost layers: interchange (paid to the card-issuing bank, set by the card networks), network assessment fees (paid to the network) and the processor's markup.</p>
<h3>Flat-rate pricing</h3>
<p>You pay one percentage plus a fixed fee for every card, regardless of type. The processor absorbs the difference between cheap and expensive cards. It is predictable and easy to forecast.</p>
<h3>Interchange-plus pricing</h3>
<p>You pay the actual interchange and network fees for each transaction, plus a fixed markup (for example, a percentage and a per-transaction fee). Statements are more complex, but you see exactly what you pay and benefit when customers use lower-cost cards such as regulated debit cards.</p>
<h3>Tiered pricing</h3>
<p>Some providers group transactions into "qualified," "mid-qualified" and "non-qualified" buckets. Tiered pricing can hide markups, because the provider decides which bucket each transaction falls into. Ask for interchange-plus quotes if you want to compare fairly.</p>
<table>
<thead><tr><th>Model</th><th>How you are charged</th><th>Best for</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Flat rate</td><td>Same % + fixed fee on every card</td><td>Low or irregular volume, simplicity</td><td>Overpaying on low-cost debit cards</td></tr>
<tr><td>Interchange-plus</td><td>Actual interchange + network fees + fixed markup</td><td>Steady, higher volume</td><td>Monthly and ancillary fees on top</td></tr>
<tr><td>Tiered</td><td>Rates by provider-defined tiers</td><td>Rarely the best option</td><td>Opaque downgrades to expensive tiers</td></tr>
</tbody>
</table>

<h3>Worked example: when does interchange-plus win?</h3>
<p>The numbers below are illustrative only, to show the method. Plug in real quotes from providers before you decide.</p>
<p>Imagine a business processing $40,000 a month across 400 card payments averaging $100. On a flat rate of 2.9% plus 30 cents, the monthly cost is $1,160 plus $120, or $1,280.</p>
<p>Now assume an interchange-plus quote where the business's actual card mix averages 1.9% in interchange and network fees, with a markup of 0.3% plus 10 cents and a $25 monthly fee. The cost is $760 in interchange and network fees, $120 in percentage markup, $40 in per-transaction markup and $25 monthly, or $945. That is $335 less per month in this example.</p>
<p>Change the assumptions and the answer changes. If the same business processed only $4,000 a month, the monthly fee and other ancillary charges eat much of the saving, and flat rate may be simpler and roughly as cheap. If most of the customers pay with premium rewards cards, interchange is higher and the gap narrows. Run your own statements through any quote before you switch.</p>

<h2>How to choose</h2>
<ul>
<li><strong>Just starting out or invoicing a few clients:</strong> a payment facilitator with flat pricing. Add its payment link to your invoices.</li>
<li><strong>Steady volume and low disputes:</strong> request interchange-plus quotes from at least two providers and compare them against your current effective rate (total fees divided by total volume).</li>
<li><strong>High-risk industry:</strong> expect a dedicated merchant account with reserves; PayFacs may decline you.</li>
<li><strong>Large B2B invoices:</strong> consider steering customers to bank payments instead; our guide on <a href="/blog/how-to-accept-ach-payments">how to accept ACH payments</a> shows the savings.</li>
</ul>
<p>Before you sign any contract, check the term length, early termination fee, monthly minimums, PCI fees, chargeback fees and how quickly you receive payouts. If you plan to pass card costs on to customers, read our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a> first, because surcharging is restricted by card network rules and some state laws.</p>

<h3>Chargebacks, holds and reserves</h3>
<p>Whichever model you choose, the merchant account holder is ultimately liable for chargebacks. With a PayFac, the PayFac fronts that liability and recovers it from you. With a dedicated account, the acquirer does. Either may hold a rolling reserve if your risk looks high. Keep disputes low by using clear descriptors, sending clear invoices and receipts, and responding quickly. Our guide on <a href="/blog/how-to-handle-chargebacks">how to handle chargebacks</a> covers the process.</p>

<h2>PCI compliance and security responsibilities</h2>
<p>Any business that accepts cards must follow the Payment Card Industry Data Security Standard (PCI DSS). How much work that means depends on your setup. With a payment facilitator's hosted checkout or payment link, card details never touch your systems, so your compliance work is usually a short self-assessment questionnaire. With a dedicated merchant account and your own gateway integration, you may take on more responsibility, and some providers charge a monthly PCI fee or a higher non-compliance fee if you do not complete the annual questionnaire.</p>
<p>Practical rules for small businesses:</p>
<ul>
<li>Never ask clients to email or text card numbers. Send a payment link instead.</li>
<li>Do not write card numbers on invoices, notes or spreadsheets.</li>
<li>Use the hosted checkout pages your processor provides wherever possible.</li>
<li>Restrict who on your team can log in to the processor dashboard and turn on two-factor authentication.</li>
</ul>

<h2>Questions to ask before you sign</h2>
<p>Whether you are weighing a merchant account vs payment processor bundle or comparing two facilitators, these questions bring out the costs that do not appear on the headline rate:</p>
<ol>
<li>What is my total effective rate on last month's actual transactions, including all fees?</li>
<li>Is pricing flat rate, interchange-plus or tiered? If tiered, how are transactions assigned to tiers?</li>
<li>What monthly, annual, statement, PCI and gateway fees apply?</li>
<li>Is there a monthly minimum, and what happens if I fall short?</li>
<li>How long is the contract, and what is the early termination fee?</li>
<li>When are funds paid out, and can the provider hold a reserve?</li>
<li>What are the chargeback and dispute fees?</li>
<li>Can I accept ACH or bank payments on the same account, and at what price?</li>
</ol>
<p>Get the answers in writing. A quote that looks cheaper on the percentage can cost more once fixed fees are added, especially for a business with modest volume.</p>

<h3>Signs it is time to move beyond a payment facilitator</h3>
<p>Most small businesses never need to leave a facilitator. Consider getting dedicated merchant account quotes if several of these apply:</p>
<ul>
<li>Your card volume is steady and has grown well beyond what you processed at signup.</li>
<li>A large share of your customers pay with debit cards, which are cheaper under interchange-plus.</li>
<li>You have had repeated holds or reserves and want a provider that underwrites you individually.</li>
<li>Your average transaction is large, so even a small percentage difference adds up.</li>
<li>You need features such as level 2 or level 3 data for business card payments, which can lower interchange on some B2B transactions.</li>
</ul>
<p>If you do switch, run both providers side by side for a month where possible, update the payment links on your <a href="/invoice-templates">invoice templates</a> and tell regular clients about the change so their payments are not declined or misdirected.</p>

<h2>Where invoices fit in</h2>
<p>A clear invoice reduces "I don't recognize this charge" disputes. Include your trading name as it appears on card statements, an itemized description, the due date and how to pay. Our invoice generator produces the invoice PDF; payment happens through whatever processor or bank you choose, and you can paste your payment link into the notes field. If you need a design, browse the <a href="/invoice-templates">invoice templates</a>.</p>

<h2>Conclusion</h2>
<p>The merchant account vs payment processor debate is mostly about structure: a payment facilitator gives you both under one roof with flat pricing and quick setup, while a dedicated merchant account offers negotiated interchange-plus pricing in exchange for more paperwork and fees. Start with a facilitator, track your effective rate, and get interchange-plus quotes once volume justifies it. When you are ready to bill, create a professional invoice with the <a href="/invoice-generator">free invoice generator</a>. For contract terms specific to your business, check with a qualified adviser.</p>`,
  },
  {
    slug: "cross-border-payment-fees",
    title: "Cross-Border Payment Fees: FX Markups, SWIFT and More",
    description:
      "Cross-border payment fees explained: FX markups, SWIFT and intermediary charges, PayPal and Stripe international fees, plus a worked example to cut your costs.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["invoice-international-clients", "foreign-currency-invoice", "wise-vs-paypal"],
    faqs: [
      {
        q: "What are cross-border payment fees?",
        a: "Cross-border payment fees are the costs of moving money between countries or currencies. They include the visible fees, such as a bank's outgoing wire fee, intermediary bank charges and a processor's international surcharge, and the less visible cost of currency conversion, where the provider gives you an exchange rate worse than the mid-market rate. The total can be several percent of the payment, so it is worth adding them all up before choosing how to get paid.",
      },
      {
        q: "What is an FX markup?",
        a: "An FX markup is the gap between the mid-market exchange rate, which is the midpoint between buy and sell rates on global currency markets, and the rate a bank or payment provider actually gives you. Providers that advertise no fee often make their money here. To measure it, compare the rate you received with the mid-market rate at the same time and divide the difference by the mid-market rate. A gap of 2% to 4% is common with some providers.",
      },
      {
        q: "Why did I receive less than the invoice amount on an international wire?",
        a: "Usually because one or more banks deducted fees along the way. International wires often pass through intermediary or correspondent banks, and each may take a charge from the amount before passing it on. Your own bank may also charge an incoming wire fee, and if the payment arrived in a different currency, the conversion rate reduces it further. Agree in your contract who pays which charges and state it on the invoice.",
      },
      {
        q: "What do OUR, SHA and BEN mean on a SWIFT payment?",
        a: "They are charge codes that tell banks who pays the fees. OUR means the sender pays all charges, so the recipient should receive the full amount, although some intermediaries still deduct fees. SHA means charges are shared: the sender pays their own bank, and the recipient bears receiving and intermediary fees. BEN means the beneficiary pays all charges, which are deducted from the amount sent. If you want the full invoice amount, ask the client to use OUR.",
      },
      {
        q: "How much does PayPal charge for international payments?",
        a: "At the time of writing, PayPal's US merchant fee page adds 1.50% to the domestic commercial rate for international transactions, and its currency conversion spread is listed at 3.00% or 4.00% depending on the transaction type. For example, an international invoice paid through PayPal Checkout would cost 3.49% plus 1.50% plus a fixed fee before any conversion. Check PayPal's fee page for your country, because rates differ by account location.",
      },
      {
        q: "What is the cheapest way to receive international payments?",
        a: "It depends on the corridor and amount, but for many freelancers a multi-currency account that gives local account details in the client's country is cheaper than a SWIFT wire or a card payment. The client pays a local transfer, and you convert at or near the mid-market rate with a disclosed fee. Compare the total cost, including the conversion rate, on a realistic invoice amount rather than looking at headline fees alone.",
      },
      {
        q: "Should I invoice international clients in my currency or theirs?",
        a: "Invoicing in your own currency moves exchange rate risk and conversion costs to the client, which protects your income but may make you less attractive. Invoicing in their currency is friendlier and often helps you win work, but you bear the conversion cost and the risk that the rate moves before you are paid. Many freelancers invoice in the client's currency and receive it into a matching currency balance to keep control of when to convert.",
      },
      {
        q: "Can I pass cross-border fees on to my client?",
        a: "You can agree that the client pays transfer charges, for example by asking for OUR on SWIFT wires and stating that the invoice amount must arrive in full. You can also price the expected cost into your rates. Adding card surcharges is more restricted and depends on card network rules and local law, so check the rules before adding a percentage. Whatever you agree, write it in your contract and on the invoice before work starts.",
      },
      {
        q: "Are cross-border payments in euros within Europe cheaper?",
        a: "Generally yes. Euro payments within the SEPA area use common schemes, and EU rules require that cross-border euro payments within the EU cost the same as equivalent domestic euro payments. That makes paying or receiving euros between, for example, Germany and Spain cheap. Fees rise when a payment involves a currency conversion or a country outside the scheme, so a US or UK business receiving euros can still face conversion and wire costs.",
      },
    ],
    content: `<p><strong>Cross-border payment fees</strong> are the total cost of moving money between countries: the sending bank's fee, intermediary (SWIFT correspondent) charges, the receiving bank's fee, any processor surcharge for international cards, and the FX markup hidden in the exchange rate. Together they commonly cost a few percent of each payment, so compare total cost, not just the headline fee.</p>
<p>For freelancers and small businesses with overseas clients, these costs come straight out of margin. A 4% leak on every invoice is the same as cutting your rates by 4%. This guide breaks down each fee type, compares common payment methods, and walks through a worked example so you can see where the money goes.</p>

<h2>The five layers of cross-border payment fees</h2>
<p>Most international payments include some or all of these layers:</p>
<ol>
<li><strong>Sending fee.</strong> The payer's bank or provider charges for sending the money. For an international wire, this is often a flat fee.</li>
<li><strong>Intermediary or correspondent fees.</strong> SWIFT wires between banks without a direct relationship pass through one or more correspondent banks, and each may deduct a fee.</li>
<li><strong>Receiving fee.</strong> Your bank may charge for incoming international wires.</li>
<li><strong>Processor surcharges.</strong> Card and wallet processors often add a percentage for international cards or payers.</li>
<li><strong>FX markup.</strong> If the money changes currency, the rate you get is usually worse than the mid-market rate. This is the fee people miss most often.</li>
</ol>
<p>Only the first four show up as line items. The FX markup is built into the rate, which is why a "no-fee" transfer can still be expensive.</p>

<h2>How the FX markup works</h2>
<p>The mid-market rate is the midpoint between the buy and sell prices on the wholesale currency market. Banks and providers usually give customers a rate some distance from it and keep the difference.</p>
<p>To calculate the markup: (mid-market rate minus your rate) divided by the mid-market rate. Example with illustrative rates: you are paid €4,000. The mid-market EUR/USD rate at the time is 1.1600, which would give you $4,640. Your bank converts at 1.1300 and you receive $4,520. The FX markup is $120, or about 2.6% of the payment. No line item on your statement says "$120 fee," but you paid it.</p>
<p>Processors publish their conversion spreads. At the time of writing (October 2026), PayPal's US merchant fee page lists a currency conversion spread of 3.00% for most transactions and 4.00% for some, such as paying in another currency, and Stripe's US pricing page lists an extra 1% when currency conversion is required. Banks rarely publish a percentage; you have to compare the rate yourself.</p>

<h2>SWIFT fees and charge codes</h2>
<p>SWIFT is the messaging network banks use for most international wires. The money itself moves through correspondent accounts, which is where deductions come from. When the payer sends a SWIFT wire, they choose a charge code:</p>
<table>
<thead><tr><th>Code</th><th>Who pays</th><th>What you usually receive</th></tr></thead>
<tbody>
<tr><td>OUR</td><td>Sender pays all charges</td><td>Closest to the full amount (some intermediaries may still deduct)</td></tr>
<tr><td>SHA</td><td>Shared: sender pays their bank, you pay the rest</td><td>Amount minus intermediary and receiving fees</td></tr>
<tr><td>BEN</td><td>Beneficiary pays all</td><td>Amount minus all fees</td></tr>
</tbody>
</table>
<p>SWIFT fees vary widely by bank and corridor, so ask your bank for its incoming wire fee and check what your client's bank charges. Newer messaging standards are improving transparency; our guide to <a href="/blog/iso-20022-payments">ISO 20022 payments</a> explains why richer payment data matters for reconciliation. For a domestic comparison, see <a href="/blog/ach-vs-wire-transfer">ACH vs wire transfer</a>.</p>

<h2>International transfer fees comparison by method</h2>
<p>This international transfer fees comparison uses published US list prices where available at the time of writing. Treat it as a starting point and check each provider for your country and plan.</p>
<table>
<thead><tr><th>Method</th><th>Visible fees</th><th>FX cost</th><th>Speed</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>SWIFT bank wire</td><td>Sending, intermediary and receiving fees</td><td>Bank's rate, often a markup</td><td>Typically 1 to 5 business days</td><td>Fees depend on banks and charge code</td></tr>
<tr><td>PayPal (US merchant)</td><td>Domestic rate + 1.50% international + fixed fee</td><td>3.00% or 4.00% spread when converting</td><td>Fast to PayPal balance</td><td>Payer-friendly; costly on larger invoices</td></tr>
<tr><td>Stripe (US account, cards)</td><td>2.9% + 30 cents, + 1.5% international card</td><td>+1% if conversion needed</td><td>Payout schedule applies</td><td>Good for card-paying clients</td></tr>
<tr><td>Multi-currency account with local details</td><td>Provider's disclosed conversion or receiving fee</td><td>Often close to mid-market</td><td>Often same or next day locally</td><td>Client pays as a local transfer</td></tr>
<tr><td>Local transfer in the same currency (for example SEPA in euros)</td><td>Low or none</td><td>None if no conversion</td><td>Fast</td><td>Only works if you hold that currency</td></tr>
</tbody>
</table>
<p>For deeper comparisons of the multi-currency providers, read <a href="/blog/wise-vs-paypal">Wise vs PayPal</a>, <a href="/blog/wise-vs-payoneer">Wise vs Payoneer</a> and <a href="/blog/revolut-business-vs-wise">Revolut Business vs Wise</a>.</p>

<h2>Worked example: one $5,000 invoice, three ways</h2>
<p>A US-based designer invoices a client in Germany for $5,000. The figures for PayPal and Stripe use published US list prices at the time of writing; the wire figures are illustrative assumptions you should replace with your bank's real fees.</p>
<h3>Option A: PayPal invoice paid with the client's PayPal balance</h3>
<p>Invoicing rate 3.49% plus 1.50% international equals 4.99%, plus the $0.49 fixed fee. 4.99% of $5,000 is $249.50, so the fee is $249.99 and the designer receives about $4,750. If the client's payment also involves a currency conversion, the spread adds more on top.</p>
<h3>Option B: Stripe payment link paid by an international card</h3>
<p>2.9% plus 1.5% is 4.4%, or $220, plus 30 cents: $220.30. If the card is charged in euros and Stripe has to convert, another 1% ($50) applies, for $270.30 in total.</p>
<h3>Option C: SWIFT wire in USD, charge code SHA</h3>
<p>Assume the client's bank charges them its own fee, one intermediary deducts $20, and the designer's bank charges $15 for an incoming international wire. The designer receives $4,965, a cost of $35. If the client instead sends euros and the designer's bank converts at a rate 2.6% worse than mid-market, the cost jumps by about $130.</p>
<p>Now repeat that comparison across a year. A freelancer who bills $5,000 a month to overseas clients would pay roughly $3,000 a year in fees through PayPal Checkout at the rates above, compared with a few hundred dollars by wire with fair conversion. That difference is real income, which is why it is worth an hour to set up a cheaper receiving method.</p>
<p>The lesson: for larger invoices, bank-based methods tend to be much cheaper than card or wallet payments, as long as you control the currency conversion. For small invoices, convenience may matter more than the percentage.</p>

<h2>How to reduce cross-border payment fees</h2>
<ul>
<li><strong>Agree the currency and who pays fees in the contract.</strong> Our guide to <a href="/blog/invoice-international-clients">invoicing international clients</a> covers the clauses to include.</li>
<li><strong>Ask for OUR on SWIFT wires</strong> if you need the full amount to arrive, and state "all bank charges to be paid by the sender" on the invoice.</li>
<li><strong>Use local receiving details</strong> through a multi-currency account so clients pay a domestic transfer.</li>
<li><strong>Hold foreign currency balances</strong> and convert when the rate suits you, rather than auto-converting every payment.</li>
<li><strong>Steer larger invoices away from cards and wallets</strong>, where percentage fees scale with the amount.</li>
<li><strong>Measure your effective cost.</strong> Divide total fees plus FX loss by the invoice amount every quarter.</li>
</ul>

<h3>Fees your client pays that you never see</h3>
<p>Cross-border payment fees do not only hit the recipient. Your client may also pay a foreign transaction fee on their card, an outgoing wire fee, or a conversion spread at their own bank. Those costs do not reduce what you receive, but they affect how your client feels about paying you, and a client who finds paying you expensive may pay late or look for a local supplier.</p>
<p>Ask new international clients how they usually pay overseas suppliers. Large companies often have an accounts payable process built around SWIFT wires in their own currency and may not be able to use a payment link. Small businesses and individuals often prefer a card or wallet. Matching your options to how the client already pays reduces friction on both sides.</p>

<h2>Choosing a method by invoice size</h2>
<p>Percentage fees and flat fees behave very differently as invoices get bigger. A rough guide, which you should test against your own numbers:</p>
<table>
<thead><tr><th>Invoice size</th><th>Usually cheapest</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Small (a few hundred dollars)</td><td>Card, wallet or multi-currency account</td><td>Flat wire fees take a large share of a small payment</td></tr>
<tr><td>Medium (around $1,000 to $5,000)</td><td>Multi-currency account with local details</td><td>Low disclosed fees and close-to-mid-market conversion</td></tr>
<tr><td>Large (above $5,000)</td><td>Local transfer or SWIFT wire with fair FX</td><td>Percentage fees on cards and wallets grow with the amount</td></tr>
</tbody>
</table>
<p>The pattern is simple: flat fees hurt small payments and percentage fees hurt large ones. The FX markup is a percentage, so it hurts at every size, which is why controlling the conversion step is the single biggest lever for reducing cross-border payment fees.</p>

<h2>A checklist for international invoices</h2>
<p>Before you send an invoice to an overseas client, check that it includes:</p>
<ul>
<li>The invoice currency, shown with its code (USD, EUR, GBP) next to every total.</li>
<li>Your full bank details for the method you want them to use, including SWIFT/BIC and IBAN where relevant, or local receiving details.</li>
<li>A note on charges, such as "Please send with charge code OUR so the full amount arrives."</li>
<li>A clear payment reference: the invoice number.</li>
<li>Payment terms and the due date in an unambiguous format (for example, 15 November 2026 rather than 11/15/26).</li>
<li>Any tax wording required in your country or the client's, such as reverse charge notes for some cross-border services. Check the rules with a qualified adviser.</li>
</ul>
<p>Keeping a consistent invoice numbering sequence makes it much easier to match foreign payments, which often arrive with truncated references. The <a href="/tools/invoice-number-generator">invoice number generator</a> can help you set one up.</p>

<h2>Invoicing in a foreign currency</h2>
<p>If you bill in the client's currency, show the currency code clearly next to every total (for example, EUR 4,000.00 rather than just 4,000). Our guide to the <a href="/blog/foreign-currency-invoice">foreign currency invoice</a> explains which rate to use for your own records and tax reporting. The invoice generator supports multiple currencies, so you can set the invoice currency to match the contract. It produces the invoice document only; it does not process the payment or convert currency.</p>
<p>Freelancers in Pakistan will find corridor-specific tips in our guide to <a href="/blog/receive-payment-from-abroad-pakistan">receiving payment from abroad</a>.</p>

<h3>Tax and record-keeping note</h3>
<p>Fees and exchange losses may be deductible business expenses, and foreign currency income usually has to be reported in your home currency using an acceptable exchange rate. Rules differ by country, so keep records of the invoice amount, the amount received, the date and the rate used, and check with a qualified adviser for your situation.</p>

<h2>Conclusion</h2>
<p>Cross-border payment fees add up from several layers, and the FX markup is often the biggest. Compare total cost on a realistic invoice, agree currency and charge terms upfront, and route larger payments through bank-based methods with fair conversion. Then send a clear, currency-labeled invoice from the <a href="/invoice-generator">free invoice generator</a>.</p>`,
  },
  {
    slug: "escrow-payments",
    title: "Escrow Payments: How They Work, Fees and Freelancer Uses",
    description:
      "Escrow payments explained: how escrow protects buyers and freelancers, Upwork escrow and milestones, Escrow.com fees at the time of writing, and safer setups.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    related: ["milestone-payments", "fiverr-upwork-invoice", "deposit-invoice"],
    faqs: [
      {
        q: "What is an escrow payment?",
        a: "An escrow payment is money that a buyer deposits with a neutral third party, the escrow agent, which holds it until agreed conditions are met. Once the buyer confirms delivery, or the agreed inspection period passes, the agent releases the funds to the seller. If there is a dispute, the money stays with the agent until it is resolved. Escrow protects both sides: the seller knows the money exists, and the buyer knows it will not be released for nothing.",
      },
      {
        q: "How does escrow work for freelancers?",
        a: "The client funds the project, or a milestone, into escrow before work starts. The freelancer completes the work and submits it. The client reviews and approves, and the escrow agent releases the payment to the freelancer. Marketplaces such as Upwork build this into fixed-price contracts. Outside marketplaces, freelancers can use an independent escrow service, although for most ongoing client relationships a deposit and milestone invoices achieve similar protection more cheaply.",
      },
      {
        q: "How much does Escrow.com charge?",
        a: "At the time of writing, Escrow.com's fee calculator shows a standard fee of 2.6% with a $50 minimum for transactions up to $5,000, falling to 2.4% for amounts between $5,000.01 and $50,000, with lower percentages for larger amounts. Paying by credit card or PayPal adds 3.05% and is shown only for the lowest tier. International wires from outside the US list a $25 intermediary bank fee. Fees change, so run your amount through the official calculator before agreeing terms.",
      },
      {
        q: "Who pays the escrow fee, buyer or seller?",
        a: "It is negotiable. Escrow services typically let the parties choose whether the buyer pays, the seller pays, or the fee is split. On freelance marketplaces, the platform sets its own fees for both clients and freelancers, so there is less room to negotiate. When you set up an independent escrow, agree who pays in writing before the transaction starts, and factor the fee into your price if you are the one paying.",
      },
      {
        q: "Is Upwork escrow safe for freelancers?",
        a: "For fixed-price contracts, Upwork escrow gives freelancers meaningful protection when they follow the platform's rules: make sure the milestone is funded before starting, submit work through the platform, and keep communication on Upwork. Funds are released when the client approves or, under Upwork's rules at the time of writing, automatically if the client does not respond within the review period. Disputes go through Upwork's process. Check Upwork's current terms, because protection depends on following them.",
      },
      {
        q: "What happens if there is a dispute in escrow?",
        a: "The escrow agent keeps holding the funds while the parties try to resolve the issue. Most services offer a negotiation period, and some offer mediation. If no agreement is reached, the outcome depends on the service's terms, which may involve arbitration or a court decision. This is why the original agreement should describe the deliverables and acceptance criteria clearly, because the agent has to rely on what both parties agreed at the start.",
      },
      {
        q: "Is escrow worth it for small freelance projects?",
        a: "Often not, if you use an independent service. On a $500 project, a minimum fee of $50 is 10% of the value. For small projects with direct clients, a deposit invoice and clear payment terms usually give enough protection at no cost. Escrow becomes more attractive for larger one-off projects with new clients, high-value goods, domain names, or deals where neither side trusts the other enough to pay or deliver first.",
      },
      {
        q: "How can I tell if an escrow service is legitimate?",
        a: "Fake escrow websites are a known scam, especially in vehicle and domain sales. A legitimate escrow service is licensed or regulated where it operates, has a long track record, and is chosen by you, not suggested by a stranger who sends a link. Type the address yourself rather than clicking a link, check for licensing information, and be wary if the other party insists on a specific unfamiliar service or asks you to pay outside the platform.",
      },
    ],
    content: `<p><strong>Escrow payments</strong> are funds a buyer deposits with a neutral third party, which releases them to the seller only when agreed conditions are met, such as delivery and approval. For freelancers, escrow guarantees the client has actually paid before work starts; for clients, it guarantees the money is not released until the work is delivered.</p>
<p>You will meet escrow on freelance marketplaces, in high-value online sales, and in domain and vehicle purchases. This guide explains how escrow works, the costs involved, escrow for freelancers on and off platforms such as Upwork, and when a deposit or milestone invoice is a better and cheaper option.</p>

<h2>How escrow payments work, step by step</h2>
<ol>
<li><strong>Agree terms.</strong> Buyer and seller agree the price, deliverables, inspection or review period and who pays the escrow fee.</li>
<li><strong>Buyer funds escrow.</strong> The buyer pays the escrow agent, by bank transfer or another accepted method.</li>
<li><strong>Agent confirms funds.</strong> The seller is told the money is secured and can start work or ship goods.</li>
<li><strong>Seller delivers.</strong> The work or item is delivered as agreed.</li>
<li><strong>Buyer inspects and approves.</strong> The buyer accepts within the inspection period, or raises an issue.</li>
<li><strong>Agent releases funds.</strong> The seller is paid, minus any fees they agreed to bear.</li>
</ol>
<p>The key feature is that neither side has to trust the other with the money. Both trust the agent instead.</p>

<h2>Common types of escrow</h2>
<p>The word escrow covers several different arrangements. Knowing which one you are dealing with tells you who holds the money and what rules apply.</p>
<ul>
<li><strong>Real estate escrow.</strong> A title company, attorney or escrow company holds deposits and closing funds in a property sale. This is regulated locally and is not covered in detail here.</li>
<li><strong>Online transaction escrow.</strong> Independent services hold funds for internet sales of goods, services, domain names and vehicles between parties who do not know each other.</li>
<li><strong>Marketplace escrow.</strong> Freelance platforms hold client funds for fixed-price work and release them when work is approved, under the platform's own terms.</li>
<li><strong>Contractual or milestone escrow.</strong> Larger business deals sometimes use a bank or law firm to hold funds against defined milestones in a contract.</li>
</ul>
<p>For freelancers and small businesses, the second and third types are the ones that matter. Both work on the same principle: escrow payments are only released when the agreed condition is met.</p>

<h2>Escrow for freelancers: why it matters</h2>
<p>The biggest risk for a freelancer is doing the work and never being paid. The biggest risk for a client is paying upfront and receiving nothing usable. Escrow for freelancers sits between those two fears. It is especially useful when:</p>
<ul>
<li>The client is new and you have no payment history with them.</li>
<li>The project is a large one-off fixed-price job.</li>
<li>The client is in another country, making legal recovery impractical.</li>
<li>The client is reluctant to pay a deposit directly to you.</li>
</ul>
<p>Escrow does not remove every risk. Disputes about quality still happen, and the outcome depends on how clearly you described the deliverables. A written scope matters as much as the escrow itself; start with a solid <a href="/blog/freelance-contract-template">freelance contract</a>.</p>

<h2>Upwork escrow and milestones</h2>
<p>Upwork escrow is the best-known example of marketplace escrow. On fixed-price contracts, the client funds a milestone before work begins, and the money is held until the freelancer submits the work and the client approves it. Under Upwork's terms at the time of writing, if the client does not act within the review period after submission, the funds are released automatically. Hourly contracts work differently, relying on tracked time and weekly billing rather than milestone escrow.</p>
<p>Practical rules for using Upwork escrow safely:</p>
<ul>
<li>Do not start work until the milestone shows as funded.</li>
<li>Break larger projects into several milestones so less money is at risk at each step.</li>
<li>Submit work through the platform so the review clock starts.</li>
<li>Keep communication and files on the platform in case of a dispute.</li>
<li>Never accept payment outside the platform for an Upwork contract, which breaches its terms and removes protection.</li>
</ul>
<p>Upwork charges freelancers a service fee and clients a marketplace fee. The freelancer fee structure has changed in recent years and is shown before you submit a proposal, so check Upwork's current fee page rather than relying on older articles. For how platform earnings fit into your records, see our guides on <a href="/blog/fiverr-upwork-invoice">invoicing for Fiverr and Upwork work</a> and <a href="/blog/upwork-vs-fiverr">Upwork vs Fiverr</a>.</p>

<h2>Escrow.com fees at the time of writing</h2>
<p>For deals outside a marketplace, an independent service such as Escrow.com is a common option. The table below shows the standard USD fees from Escrow.com's fee calculator at the time of writing (October 2026). Escrow.com fees are based on the transaction amount (merchandise plus shipping), and fees can change, so confirm with the calculator before you agree terms.</p>
<table>
<thead><tr><th>Transaction amount (USD)</th><th>Standard fee</th><th>Minimum</th></tr></thead>
<tbody>
<tr><td>$0 to $5,000</td><td>2.6%</td><td>$50</td></tr>
<tr><td>$5,000.01 to $50,000</td><td>2.4%</td><td>$130</td></tr>
<tr><td>$50,000.01 to $200,000</td><td>1.9%</td><td>$1,200</td></tr>
<tr><td>$200,000.01 to $500,000</td><td>1.5%</td><td>$3,800</td></tr>
<tr><td>$500,000.01 to $1,000,000</td><td>1.2%</td><td>$7,500</td></tr>
</tbody>
</table>
<p>Notice that the minimum fee does most of the work at the bottom of the scale and the percentage falls as amounts rise. That structure suits high-value one-off deals much better than small freelance jobs.</p>
<p>Payment method matters too. The calculator lists an extra 3.05% when paying by credit card or PayPal, shown for the lowest tier only, and a $25 intermediary bank fee on international wires from outside the US. A premium concierge service is also offered at higher rates, roughly double the standard percentage at the time of writing, for buyers and sellers who want extra hands-on support.</p>

<h3>Worked example: what escrow costs on a freelance project</h3>
<p>A developer agrees a $4,000 fixed-price build with a new overseas client and suggests Escrow.com, with the fee split 50/50.</p>
<ul>
<li>Standard fee: 2.6% of $4,000 is $104, which is above the $50 minimum.</li>
<li>Each party pays $52.</li>
<li>If the client funds by wire from outside the US, the listed $25 intermediary fee also applies.</li>
<li>If the client funds by card, 3.05% of $4,000 is $122 on top.</li>
</ul>
<p>Compare that with a $400 project: 2.6% would be $10.40, but the $50 minimum applies, so escrow costs 12.5% of the project value. For small jobs, escrow payments through an independent service are rarely worth it.</p>

<h2>How to set up an independent escrow transaction</h2>
<p>If you and a client agree to use an independent service, follow a clear process so both sides know what will happen:</p>
<ol>
<li><strong>Agree the scope in writing first.</strong> List deliverables, file formats, acceptance criteria and the number of revisions included.</li>
<li><strong>Agree the inspection period.</strong> This is how long the client has to review the work before funds are released. Too short and the client feels rushed; too long and your money is tied up.</li>
<li><strong>Decide who pays the fee.</strong> Buyer, seller or split. Put it in the contract.</li>
<li><strong>Choose the funding method.</strong> Bank transfers usually cost less than cards, which can add a percentage on top.</li>
<li><strong>Create the transaction</strong> on the escrow service's website, with both parties' verified details and the agreed terms.</li>
<li><strong>Start work only after funding is confirmed</strong> in your own escrow account dashboard.</li>
<li><strong>Deliver and keep evidence.</strong> Record delivery dates, files sent and any client messages accepting the work.</li>
</ol>
<p>For larger projects, set up several smaller escrow transactions or milestones rather than one large one. Each release then confirms the client is happy so far, and a dispute on one milestone does not freeze the entire project fee.</p>

<h3>What escrow does not protect you from</h3>
<p>Escrow payments solve the "will I be paid" problem, but not every problem. Be aware of the limits:</p>
<ul>
<li><strong>Scope disputes.</strong> If the brief was vague, the client can reject work in good faith, and the agent cannot judge quality without clear criteria.</li>
<li><strong>Cancelled projects.</strong> If the client cancels midway, what happens to funded money depends on your contract and the service's terms. A <a href="/blog/kill-fee">kill fee clause</a> helps here.</li>
<li><strong>Chargebacks on card-funded escrow.</strong> If a client funds escrow by card, card dispute rules may still apply in some cases. Bank-funded escrow avoids that risk.</li>
<li><strong>Tax obligations.</strong> Income received through escrow is still business income, and fees are usually deductible. Check with a qualified adviser.</li>
</ul>

<h2>Escrow vs deposits vs milestone invoices</h2>
<table>
<thead><tr><th>Approach</th><th>Cost</th><th>Protects freelancer</th><th>Protects client</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Independent escrow</td><td>Percentage fee with minimum</td><td>Strong: funds are verified first</td><td>Strong: release on approval</td><td>Large one-off jobs with strangers</td></tr>
<tr><td>Marketplace escrow</td><td>Included in platform fees</td><td>Strong if rules followed</td><td>Strong</td><td>Work found on the platform</td></tr>
<tr><td>Upfront deposit</td><td>Normal payment fees only</td><td>Partial: covers early work</td><td>Weak: money already paid</td><td>Repeat or trusted clients</td></tr>
<tr><td>Milestone invoices</td><td>Normal payment fees only</td><td>Moderate: limits exposure per stage</td><td>Moderate: pays as work is delivered</td><td>Longer projects</td></tr>
</tbody>
</table>
<p>The right choice usually depends on two questions: how well do you know the client, and how much is at stake? A long-standing client on a small job needs nothing more than standard payment terms. A brand-new client on a large fixed-price project is where escrow payments or a substantial deposit earn their keep. In between, milestone invoices let trust build stage by stage, and you can stop work if a milestone goes unpaid.</p>
<p>For many direct client relationships, a <a href="/blog/deposit-invoice">deposit invoice</a> followed by <a href="/blog/milestone-payments">milestone payments</a> achieves most of the protection of escrow without the fees. A <a href="/blog/retainer-invoice">retainer invoice</a> works well for ongoing work.</p>

<h2>Avoiding escrow scams</h2>
<p>Escrow is built on trust in the agent, which is exactly what scammers exploit. Fake escrow sites are a common fraud. The scammer, posing as buyer or seller, insists on a specific "escrow" service, sends a link, and the site looks professional but simply takes the money. Protect yourself:</p>
<ul>
<li>Choose the escrow service yourself and type its address directly.</li>
<li>Check that it is licensed or regulated where it operates.</li>
<li>Be suspicious of urgency, unusual payment methods or requests to move off a platform.</li>
<li>Confirm funding by logging in to the escrow account yourself, never from an emailed screenshot.</li>
</ul>

<h2>Invoicing when you use escrow</h2>
<p>Even when escrow handles the money, issue an invoice for your records and the client's. Reference the escrow transaction ID or milestone name in the notes, show the gross amount, and record any fee you bear as a business expense. If you use a marketplace, follow its invoicing rules, since some platforms issue their own documents. You can produce a clean PDF with the <a href="/invoice-generator">free invoice generator</a>, which also records amount paid and balance due for <a href="/blog/partial-payment-invoice">partial payments</a>. The generator does not hold funds or act as escrow.</p>

<h2>Conclusion</h2>
<p>Escrow payments remove the trust problem in one-off deals by putting a neutral party between buyer and seller. Use marketplace escrow when the work came from the platform, an independent service for large deals with unknown parties, and deposits or milestone invoices for most direct client work. Check current fees on the official pages before you agree terms, and get advice from a qualified adviser for high-value contracts. Browse <a href="/blog/category/freelancing">more freelancing guides</a> for contracts and pricing.</p>`,
  },
  {
    slug: "paypal-fees",
    title: "PayPal Fees 2026: Business, Invoicing and G&S Rates (US)",
    description:
      "PayPal fees for US businesses at the time of writing (October 2026): checkout, invoicing, cards, goods and services, international, conversion and payout costs.",
    category: "payments",
    date: "2026-10-28",
    author: "Invoice Creator Editorial Team",
    jurisdiction: "United States",
    related: ["how-to-send-paypal-invoice", "stripe-vs-paypal", "wise-vs-paypal"],
    faqs: [
      {
        q: "How much does PayPal charge a business per transaction?",
        a: "At the time of writing (October 2026), PayPal's US merchant fee page lists 3.49% plus a fixed fee for payments made through PayPal Checkout, Venmo or Guest Checkout, and 2.99% plus a fixed fee for standard credit and debit card payments. The fixed fee for US dollar payments is $0.49. International payments add 1.50%. Pay Later options cost 4.99% plus the fixed fee. Rates differ by product and country, so check PayPal's current fee page for your account.",
      },
      {
        q: "What are PayPal invoicing fees?",
        a: "PayPal does not charge to create or send an invoice. You pay when the invoice is paid. At the time of writing, invoices paid with PayPal Checkout, Venmo or Guest Checkout cost 3.49% plus the fixed fee, invoices paid by card or Apple Pay cost 2.99% plus the fixed fee, Pay Later costs 4.99% plus the fixed fee, and Pay by Bank (ACH) costs 1% capped at $10.00. International invoice payments add 1.50%.",
      },
      {
        q: "What is the PayPal goods and services fee?",
        a: "When someone sends you money using the goods and services option, rather than friends and family, it counts as a commercial transaction and you pay a fee. PayPal's US fee page lists 2.99% for send and receive money for goods and services at the time of writing. In exchange, eligible buyers get purchase protection and eligible sellers may get seller protection. Using friends and family for business payments to avoid the fee breaks PayPal's rules and removes those protections.",
      },
      {
        q: "Does PayPal refund fees when I refund a customer?",
        a: "No. According to PayPal's US merchant fee page at the time of writing, there is no fee to refund a commercial transaction, but the fees you originally paid to receive the payment are not returned, whether you refund in full or in part. So a refunded $100 sale still costs you the original fee. Factor this into your refund policy, and consider partial refunds or store credit where appropriate.",
      },
      {
        q: "How much does it cost to withdraw money from PayPal?",
        a: "A standard transfer to your linked bank account is free when no currency conversion is involved, per PayPal's US fee page at the time of writing. An instant transfer costs 1.50% of the amount, with a minimum fee of $0.50, and is limited to $25,000 per transaction. If you can wait a business day or so, the standard transfer avoids the fee entirely.",
      },
      {
        q: "How much is PayPal's currency conversion fee?",
        a: "PayPal applies a spread to its base exchange rate when it converts currency. At the time of writing, its US fee page lists 4.00% for paying for goods or services in another currency, or sending money so the recipient gets a different currency, and 3.00% for other conversions. On a $2,000 payment converted at 3.00%, that is roughly $60 lost to conversion on top of the transaction fee.",
      },
      {
        q: "How do I avoid PayPal fees?",
        a: "You cannot avoid fees on legitimate business payments, but you can reduce them. Encourage clients to pay invoices by Pay by Bank, which is capped at $10 per transaction at the time of writing. Offer direct bank transfer as an alternative for large invoices. Use standard rather than instant withdrawals. Hold foreign currency balances instead of converting every payment. And compare PayPal's rates with other processors if most of your clients pay by card.",
      },
      {
        q: "What are PayPal chargeback and dispute fees?",
        a: "At the time of writing, PayPal's US fee page lists a $20.00 chargeback fee and a dispute fee of $15.00 at the standard rate or $30.00 for high-volume sellers. These apply on top of the original transaction fee, which is not refunded. Clear item descriptions, prompt delivery, tracking and good communication reduce disputes. Our guide to handling chargebacks covers how to respond if one is raised.",
      },
      {
        q: "Does PayPal report my income to the IRS?",
        a: "PayPal, as a payment settlement entity, files Form 1099-K for sellers who meet the federal reporting threshold for goods and services payments. The threshold has changed several times in recent years, so check our 1099-K threshold guide and the IRS for the current figure. Whether or not you receive a form, business income is taxable and must be reported. Personal friends and family payments are not reportable as business income unless they really are business payments.",
      },
    ],
    content: `<p><strong>PayPal fees</strong> for US businesses, at the time of writing (October 2026), are 3.49% plus $0.49 for PayPal Checkout payments, 2.99% plus $0.49 for standard card payments, and 2.99% for goods and services payments. Invoices paid by bank (ACH) cost 1% capped at $10, and international payments add 1.50%. Standard withdrawals are free.</p>
<p>Those headline rates hide a lot of variation. The fee depends on how the customer pays, where they are, whether currency is converted, and how you withdraw. This guide pulls the main PayPal business fees for 2026 into one place, using PayPal's US merchant fee page (last updated October 1, 2026), and shows what they mean on real invoices. PayPal changes its fees from time to time, so confirm on its official fee page before quoting prices.</p>

<h2>PayPal fees for business: the core rates</h2>
<table>
<thead><tr><th>How the customer pays</th><th>Rate</th><th>Fixed fee (USD)</th></tr></thead>
<tbody>
<tr><td>PayPal Checkout (PayPal account)</td><td>3.49%</td><td>$0.49</td></tr>
<tr><td>PayPal Guest Checkout</td><td>3.49%</td><td>$0.49</td></tr>
<tr><td>Pay with Venmo</td><td>3.49%</td><td>$0.49</td></tr>
<tr><td>Pay Later</td><td>4.99%</td><td>$0.49</td></tr>
<tr><td>Standard credit and debit card payments</td><td>2.99%</td><td>$0.49</td></tr>
<tr><td>Advanced credit and debit card payments</td><td>2.89%</td><td>$0.29</td></tr>
<tr><td>QR code payments</td><td>2.29%</td><td>$0.09</td></tr>
<tr><td>Send/receive money for goods and services</td><td>2.99%</td><td>See PayPal's page</td></tr>
<tr><td>International commercial transactions</td><td>Add 1.50%</td><td>Same fixed fee</td></tr>
</tbody>
</table>
<p>Source: PayPal US merchant fees at the time of writing. The advanced card rate applies to the Advanced Credit and Debit Card Payments product; PayPal also lists an interchange-plus-plus option for that product. If you are unsure what interchange-based pricing means, read our guide on <a href="/blog/merchant-account-vs-payment-processor">merchant account vs payment processor</a>.</p>

<h3>In-person and nonprofit rates</h3>
<p>PayPal business fees in 2026 also cover in-person and charitable payments. At the time of writing, PayPal's US page lists card-present transactions through its point-of-sale products at 2.29% plus $0.09, manually keyed cards at 3.49% plus $0.09, and QR code payments at 2.29% plus $0.09. Eligible confirmed charities can receive a discounted rate of 1.99% plus the fixed fee after approval, and donations through the standard donate tools are listed at 2.89% plus the fixed fee. International donations add 1.50%.</p>
<p>If you sell at events, markets or client sites, compare these rates with the online ones. In-person card payments are generally cheaper per transaction than branded online checkout.</p>

<h2>PayPal invoicing fees</h2>
<p>Creating and sending a PayPal invoice is free. You pay when the customer pays, and the rate depends on the payment method they choose on the invoice page:</p>
<ul>
<li><strong>PayPal Checkout, Venmo or Guest Checkout:</strong> 3.49% plus the fixed fee.</li>
<li><strong>Card, Apple Pay or other third-party wallets:</strong> 2.99% plus the fixed fee.</li>
<li><strong>Pay Later:</strong> 4.99% plus the fixed fee.</li>
<li><strong>Pay by Bank (ACH):</strong> 1%, capped at $10.00 per transaction.</li>
<li><strong>International payer:</strong> add 1.50%.</li>
</ul>
<p>That ACH cap makes a big difference on larger invoices. Steering business clients towards paying by bank is the easiest way to cut PayPal invoicing fees. Our step-by-step guide on <a href="/blog/how-to-send-paypal-invoice">how to send a PayPal invoice</a> covers the setup, and our guide to <a href="/blog/how-to-accept-ach-payments">accepting ACH payments</a> covers bank-based alternatives.</p>

<h2>Worked examples: what you actually receive</h2>
<h3>Example 1: $1,500 invoice paid via PayPal Checkout (domestic)</h3>
<p>3.49% of $1,500 is $52.35, plus $0.49, for a fee of $52.84. You receive $1,447.16.</p>
<h3>Example 2: the same invoice paid by card</h3>
<p>2.99% of $1,500 is $44.85, plus $0.49, for a fee of $45.34. You receive $1,454.66.</p>
<h3>Example 3: the same invoice paid by Pay by Bank (ACH)</h3>
<p>1% of $1,500 is $15.00, but the fee is capped at $10.00. You receive $1,490.00.</p>
<h3>Example 4: the same invoice paid via PayPal Checkout by a client in Canada</h3>
<p>3.49% plus 1.50% is 4.99%. 4.99% of $1,500 is $74.85, plus $0.49, for a fee of $75.34. If the payment also needs a currency conversion, a spread applies on top. You receive $1,424.66 before any conversion.</p>
<p>The gap between the cheapest and most expensive option on one $1,500 invoice is over $65. Across a year of invoices, payment method choice is worth managing.</p>

<h3>PayPal fees by invoice size</h3>
<p>Because most PayPal fees are a percentage plus a fixed fee, the fixed part matters on small payments and the percentage matters on large ones. The table below applies the published US rates at the time of writing to domestic invoices.</p>
<table>
<thead><tr><th>Invoice amount</th><th>PayPal Checkout (3.49% + $0.49)</th><th>Card (2.99% + $0.49)</th><th>Pay by Bank (1%, cap $10)</th></tr></thead>
<tbody>
<tr><td>$50</td><td>$2.24</td><td>$1.99</td><td>$0.50</td></tr>
<tr><td>$250</td><td>$9.22</td><td>$7.97</td><td>$2.50</td></tr>
<tr><td>$1,000</td><td>$35.39</td><td>$30.39</td><td>$10.00</td></tr>
<tr><td>$5,000</td><td>$174.99</td><td>$149.99</td><td>$10.00</td></tr>
</tbody>
</table>
<p>On a $5,000 invoice, the difference between PayPal Checkout and Pay by Bank is about $165. On a $50 invoice, it is under $2. That is why it makes sense to push bank payment for larger invoices while accepting any method for small ones.</p>

<h2>The goods and services fee explained</h2>
<p>When a client pays you through PayPal's send money feature and selects goods and services, it is a commercial transaction. The goods and services fee listed on PayPal's US page at the time of writing is 2.99%. That fee buys purchase protection for eligible buyers and potential seller protection for eligible sellers.</p>
<p>Some freelancers ask clients to use friends and family to avoid the fee. Do not do this for business payments. It breaches PayPal's user agreement, removes protection for both sides, and can lead to account limitations. It also makes your records messier at tax time. Include PayPal fees in your pricing instead.</p>

<h2>International and currency conversion fees</h2>
<p>Two separate costs apply to overseas payments:</p>
<ul>
<li><strong>International fee:</strong> an extra 1.50% on commercial transactions from international payers. PayPal's interchange-plus-plus card option is listed without this extra fee.</li>
<li><strong>Currency conversion spread:</strong> 4.00% when paying for goods or services in another currency or sending money so the recipient receives a different currency, and 3.00% for all other conversions, such as converting a balance.</li>
</ul>
<p>Here is how it adds up. A client in the UK pays a $2,000 invoice through PayPal Checkout. The transaction fee is 3.49% plus 1.50%, or 4.99%, which is $99.80, plus $0.49, for $100.29. If you then convert the remaining balance to another currency at a 3.00% spread, you lose roughly another $57.</p>
<p>Combined, an international payment that also needs conversion can lose 7% or more. For clients abroad, compare PayPal with multi-currency accounts; see <a href="/blog/wise-vs-paypal">Wise vs PayPal</a>, <a href="/blog/payoneer-vs-paypal">Payoneer vs PayPal</a> and our guide to <a href="/blog/cross-border-payment-fees">cross-border payment fees</a>.</p>

<h2>Withdrawals, refunds, chargebacks and disputes</h2>
<table>
<thead><tr><th>Item</th><th>Fee at the time of writing</th></tr></thead>
<tbody>
<tr><td>Standard transfer to bank (no conversion)</td><td>Free</td></tr>
<tr><td>Instant transfer to bank</td><td>1.50%, minimum $0.50, up to $25,000 per transaction</td></tr>
<tr><td>Refund of a commercial transaction</td><td>No refund fee, but the original fees are not returned</td></tr>
<tr><td>Chargeback (USD)</td><td>$20.00</td></tr>
<tr><td>Dispute (USD)</td><td>$15.00 standard, $30.00 high volume</td></tr>
</tbody>
</table>
<p>The refund rule catches many sellers out. If you refund a $500 card payment, you still lose the original $15.44 fee (2.99% plus $0.49). A strong refund and dispute process matters; see our guide on <a href="/blog/how-to-handle-chargebacks">how to handle chargebacks</a>.</p>

<h2>PayPal vs other processors</h2>
<p>When comparing, look at the method your clients actually use rather than the lowest rate on each provider's page. If most clients pay with a PayPal account, PayPal's checkout rate is the number that matters. If most pay by card through a payment link, compare card rates. If clients are businesses happy to pay by bank, compare capped ACH pricing. A provider that looks cheaper on cards can be more expensive overall if your clients prefer to pay with their PayPal balance and you lose sales by removing that option.</p>
<p>PayPal's strength is customer trust and the large number of buyers who already have PayPal or Venmo accounts. Its weakness is cost on branded checkout payments and international transactions. For card-heavy businesses, compare with Stripe and Square: our <a href="/blog/stripe-vs-paypal">Stripe vs PayPal</a> comparison and <a href="/blog/square-invoice-fees">Square invoice fees</a> guide set out the differences. Many small businesses offer PayPal alongside a bank transfer option rather than relying on it alone.</p>

<h2>How to reduce PayPal fees</h2>
<ol>
<li><strong>Offer Pay by Bank on invoices</strong> and explain to clients that it is the preferred method for larger amounts.</li>
<li><strong>List direct bank transfer details</strong> on your invoice as an alternative for regular clients.</li>
<li><strong>Use standard transfers</strong> to your bank instead of instant transfers.</li>
<li><strong>Hold currency balances</strong> instead of auto-converting, and convert in larger, planned amounts.</li>
<li><strong>Price fees in.</strong> If you cannot avoid them, include an allowance in your rates rather than adding surcharges, which are restricted by card network rules and some state laws. See our guide to <a href="/blog/credit-card-surcharge-rules">credit card surcharge rules</a>.</li>
<li><strong>Review your monthly statement</strong> and divide total fees by total received to see your real effective rate.</li>
</ol>

<h3>Is PayPal worth the fees?</h3>
<p>For many freelancers and small businesses, yes, as one option among several. PayPal fees are higher than a direct bank transfer, but you get things a bank transfer does not offer: a payment page clients already trust, the ability for clients to pay with a PayPal balance, Venmo, card or Pay Later, quick notifications when a payment lands, and potential seller protection on eligible transactions. Clients who would delay paying by wire will often pay a PayPal invoice the same day.</p>
<p>PayPal is less attractive when invoices are large, when most clients are businesses with accounts payable teams that pay by bank anyway, or when most payments are international and need conversion. In those cases, list bank details first and keep PayPal as a convenience option.</p>
<p>A simple policy that works for many small businesses:</p>
<ul>
<li>Under a few hundred dollars: accept any PayPal method; the fee difference is small.</li>
<li>Larger domestic invoices: encourage Pay by Bank or direct ACH.</li>
<li>International invoices: offer a multi-currency account or bank transfer and keep PayPal for clients who insist.</li>
</ul>
<p>Whatever you choose, write the accepted payment methods into your terms and on every invoice, so clients know before they pay which options are available and which one you prefer for larger amounts.</p>

<h2>Tax and record-keeping</h2>
<p>Download your PayPal activity report monthly and reconcile it against your invoices. Matching each payment to an invoice number shows you which clients paid, which paid short because of fees, and which payments were refunded or disputed. PayPal fees are generally deductible business expenses, so record the gross amount, the fee and the net payout for each invoice. PayPal may issue Form 1099-K if you meet the federal reporting threshold; see our <a href="/blog/1099-k-threshold">1099-K threshold guide</a> for the current rule. Report all business income whether or not you receive a form, and check with a qualified tax adviser for your situation.</p>

<h2>Conclusion</h2>
<p>PayPal fees range from a capped 1% for bank payments to almost 5% or more on international checkout payments, before conversion. Know which rate applies to each payment method, push larger invoices towards bank payments, and check PayPal's official fee page for changes. To issue your own branded invoice with payment instructions and a PayPal link in the notes, use the <a href="/invoice-generator">free invoice generator</a>; it creates the PDF, and PayPal handles the payment.</p>`,
  },
];
